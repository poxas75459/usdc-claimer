/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3pWsFja9YFtG6ehvakacbHayr7mrjnsnh6vKLEn6Jvm6PP5bH8GqqRs4tXP9SnS4oxm97yWLta4mWr6Ja1musx1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CE16UkGcUdFQhAom1UQnFGErRdg6sp1V3ZHPe1wvJ75zU7GQmxLKJPSPD6MkvREs1JzX67BJYEpwQi5Rrz6kMV5",
  "key1": "487JDFHX1CUB4KhogNqya5h7RiA8m9g8cUDDX33K2n7jx7aCoqr1Gq5bohENgigoiHzo3UEy9NDXS4QZZs8EtrPV",
  "key2": "5heKkKwwRBkToM2Uncz4i3bJAy1UEcNAsDMQLNyrpCrhgeMS1M4gtJFVEWup7bmEM1vxjjChPTQTTwmwXC8zwwJY",
  "key3": "27NBk6K1z2ZSZ5kgzXV7J7pUKLp7PFyjL949f18bHG3HYPJcKDhZQb3U4nfiHssx969bWbfaFJSTNcV9nakfiVfC",
  "key4": "5yQ7nR94K7ew3h296StvHpKFSPHLPSnzcMFxRvw55ZxMT67zgFrgbTT75cWAvUhEH1wZX3gTaDk9QWWntVhXab2u",
  "key5": "PxKpWXhMTohdrh2YyYHvpGra2KY3fsH9ecxDx8oJyb4rinZ1TRzn6KmMVwDzF5ftrrfQrHgRZBG2qYc6tZ4ci4w",
  "key6": "4Q7gJQRih3X6w2HfENGgAjWMWwUJ5bm2xcCmJ1dCFKi2MuhSuL1FJAuTb4C5gBCnPZVKkuc8nyJ75dr6tvxhEiTo",
  "key7": "b4mLb4BaD8Ac5RfWUG4VGU72gRjcvPas1CcJ2pqNPzhkZdvR3o29QYKDcmBYzMJRf7xHWyN2TuXa7Zaxc3gL6cX",
  "key8": "4rJ6KDCRptnyYL6TszLuMWi5mhPaPkoCmxvENQrdaUsbCNdSx4k3L4SpJXqsHi2NWiqifqfqi8tHrCcKhWMvWgwP",
  "key9": "31d9zL6G5TBbSfMeub8Ts5TjZNamVoPghisrjyd3fsBMDrTbEUagV2hey55NLva1DjmEHEYBTiJ5SfdrA2DykW9a",
  "key10": "3o4TGYsT2R3QWpQmqQHruM2uGG9AHe2qEKNZSStv3TbjNgTC2mFJzmfYQ8hvzN48wgoewY3Fns9gksmxLmqc4Txv",
  "key11": "34cmr4ZUgAS5QSkDe2fhQTvjK7eX3uWpN3UU4sWqXvemcvSta2rWEPKktVnT8YVEehAatD4Vdw3H1PSCM5dWqmrU",
  "key12": "4LBJGaaj1bJ76MaiH4xnTE5oBsf75AfcVhziugrPXrfCWT1RmrENzmUm3M9xmX7PsBqn3NaWJQE4bhNsbuNvmxxc",
  "key13": "4CFy43rnnftwL42uPNxVDfCoL9u7QZpv3ACij7ZQBJmGC3CAQECyEfSye4kgtMjFG5QTUk13Dqayt4p77tMUy1u4",
  "key14": "4t8nSy68GHYAdEZ5wt9zJNvZrTT29Rw9WEMaUnB8KspeMG6QwaArnW8yKSYQADWSxnvVdKsMQenSeExMzrvyQKh1",
  "key15": "3CYD2P5cCBqZz91hEgqWJz1Gk8p82iVCLcsjaqQgFKnZfA1Ufed8M7p2bF5ws3q28fkrMjfKRgRAfMVeZaNS1egQ",
  "key16": "2S3epub7Nj4Aee4owgWYJsC3h9nim8X5A2jSJgrj94PkBGcCLwmqSRWyUwz9GyaDm3mgbPhR4gEBnBVhnFAUJNt1",
  "key17": "4aUsnZebRCKQjaLhodapcJnh76L19T8KSP3jzkPoJBtmbDDvMSWPC9zERrpfg3uhifRfTSUiHcEed4YkHbgeFtmT",
  "key18": "5X3i18nMB2bRx2yoWUrsoi5fQmstZiykqKoBdLWK1Eog4DxSZTwVCguUmSi5hYb5xEUWZT3RFrdv88jnXte9aPKs",
  "key19": "62rQR3HMQkRvULSbpxySqUGgHpZSTFZbXnxtCtZQB3sFeaiqnyhXzjC77PfQbuDdMKGi619Ud6x1BrKQNa5NN8PL",
  "key20": "fgnQUtUNvV7FgLAS6ZHdKBkDjn6m8PYP1EaBcYugWHVyRm1469V6sTTK4kpprXi71Yvw5PbZQr2xCMsG4U1hhHr",
  "key21": "258jfxckpGnTbPUeSeZRaNGMaV2Q9DNm4cfn93r4E446u1ZAqdiNAU3M4iXr9w9svDX9XzXyHQurDi2kLRrbvkPc",
  "key22": "38TDVydnBPcJxCbCugbcufaT4mDw2DuyMyNcHWhp8RbA1bJsuavXTVvjSSrMoaiyP7Ya9FyygG37sTpgxT4UGtMD",
  "key23": "3onsXxdyaaJ9Rm9DMauUYWSeRPNCdVGcHngn7wY8gHWJyHbAvTCsaCd9mxHedTQZMFkCwqqXHJY7QAYyJYkD9Rtf",
  "key24": "3FGCkTwPnhogamU67FCFp5Bb66Ew4JwmJEog9EHkHupCV9bcxG6eUdTc3v9GkAVZitEu1N8FkC9jpLijQX9ftcjS",
  "key25": "9pTjARBvSLMKQtFjMrCpnV9Dxas6YC3kTHX4XeNhAqmE85hBH6KKe7CUzGtD1HPgra41KPC2Y7U7wSLxDAenr25",
  "key26": "551gy77Ap9v1UGcrgLsYtfusjFFGomDUurzMpZASJmZgi3PaYotUAZ7Jr8d9AF8ndLGXPKpEckGX9xwNapYvPBh7",
  "key27": "5ScFrcSrrfG23RCGycPUSYtyNKZPkKaAcRhVfpY4qKBsayKgeAozXczVtF9A5Q4D99E2e1ktraKxeUdWR3nEaZQA",
  "key28": "5LEzsnx38Gf3X3QhPbU85oCvS3bUnsBaZD6CELBhRhr38Fb9vWxFSpmJS7Bnsg4A5SFX8vLBTFTP3q2VagUZKGYP",
  "key29": "3MwYuT8jYEZSbK2dtPfsk836fCLuDnwDkZU6t1fcHeGj7VE3YdhQ5nnz1Azr16vFRQSSeWzgoNZ1gG4QEwJ8D8pP",
  "key30": "4LwVvRe42R5CkfiCzyhoN1uDxqb9Xk3SSJe4crDRs2ixsvWcRenqgDNbSJZkhtx9J14PMUUEzUJAFLxG383EvUWj",
  "key31": "4VZERJLra1XgNppWHuRwAX6hXfTupX4FnR5CGtb64USEuGRMe9n8ueocwggRvxMXKyx3zf48HYLYs7qCaLSg1Ywy",
  "key32": "5o2mgk8MceEjuthQHfPNBoKrfB3hzQo5a6QsXWz8NeVobxeV6Qg81ZdQRsUJ146ry7Ea2VxWNrf1XM7ZESDX5n35",
  "key33": "3PMHzZDLGxyiknPoXS6JRk5wpWCMQiAHUkiXSwAZxWAFc86Aybm9bQGweNwTK8qHKXz64PRUtHowzwgAoqkwpvJR",
  "key34": "3AsrUVEiD3EzKv5xT6w3EHg9JE1vYAeu8shTkCGk2Xdo5QjthDAe2qY5C8wBR8ayYpyH2pfiBkBvUSKE25TP2RVA",
  "key35": "73C2MThXjYWDh9f9bx6ZynsxdhsEF6QM6aYcAnFVCmrYWJbtW6PJunGbZ2iP5mSGzfyBF7xaNFvDNdjMTSprC38",
  "key36": "2GBHorigitN4DuvswwHmPX36GeXjW7UgydYktKUsqASAjKHZNyAYUfWozvmE8R7CrvFofrFguuV27sr6u4h4zuEA",
  "key37": "5YwhDBxxjjqAwizSWPJm1TEg1A4nZJEmLAy8xGKogi61uW6KD21yjKXavBv7ZHvj97RrwknqoDe2RtXBQtUqndWN",
  "key38": "38TQvoNkFdyTDESPs34AboUHqv8YNYayC4fsF9fUk7fDSUp74RXqXWzek9s8FhA8UbZrCGWvDQSaDKbjmRL4Ng5S",
  "key39": "eQ6ZqfSJH4nJALjddu2gitX69SGh4LkVsg5DvfebpQh1PC3oK2WVpgvu9gDi5ZCfeKprYey1BTr84f3VQwb9SPk",
  "key40": "4XyTo9xJZANMDcaasZM6uwRw4o9sxmmWaWEJb1c6JPwAaJGFfcaUG28NpdbvrKcSSYUQK8WJz6KkUUY4Ceedsp2y"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
