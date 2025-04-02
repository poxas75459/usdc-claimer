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
    "4mhMxVkrp8BSREbJyU9g1WdWsuxs7qzRmCrWavWMHKjgasB8ga7aY5MjWvRB8fDZh4eT5SpTz3BbFR9wv2AG4nKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTy7nAHj44WRrMNx14JkQn6wQMnos5513pdTKiPmiWPeDjmzmUWbXsgC89ZdHsjtLNErx4W89Qak8GSJk3mPtti",
  "key1": "5q7getvozUHpgqHXCdsceJFdbho6T7V1qAbmjgYaRzFHD3id8rDQw9utsnbXki7177JWnxivdW9YFAxKtYdzKayP",
  "key2": "67Z21G6zGYEfoM3N83q63CyHDrr2ofXn9Yj6DcJF23PrEJE1Z9KpVkHArZtoB8TZTiTMidALoJcXe1dTkoo54rby",
  "key3": "4M5jDgW8kYjweLLJ8nq5i2eQUj8UiUiPou7yk5YBVcJvxLsK1VhQe51xGdtZAQgjJ9XDiz1jgqHKhz5qzj7orVTG",
  "key4": "5H6wEHusT5qZjYXYqc3yetF3PEPine8qs88rhtxFsczAP8ACpJBBoTj5viPL1jtTKjctWcKMG14mhZyLpaHmSwQn",
  "key5": "3GZk6x5CSEnUMpGcgnpazZBsKQfsh411aBxPp1bExmtEm6XnKZp9ZgNREWEzUsvBKNiKioQxJ8bHb1b8vnVdEL5f",
  "key6": "3USh7w6buBf7ZdwmoBrU23z4uG5GX1JmvYUJYCUJ9UQMLRVN3ntWUxx2B1biy6an7nRcowyxrDNwzhgbeBRhYnDr",
  "key7": "2EjgEcsbEmDy8TMb6A5y7cG8ETcAhFzsk7Zx9m2ZAo4L1NtwptetNevREvtHKfmCx1kNUxkUTEKxkfi6rzGPNusk",
  "key8": "2Z18xVzxyFcA7fQTP1gjpAB7XWNPHJHHRwxPH11RsxEbwEGNkDJ32SHZWrxwTZmRR9U2jG1pjBtamfojWDvVAJUN",
  "key9": "4aSNMJvuLHYWZnpoDFn2TAnLZbQjisqCrzLmSi6nMQjfPvf4TXB2hHXQdWVrLA3cjk9Ti9kbMYCqv1fhNbQuDZHu",
  "key10": "5ExNmye9q39eJcDGTbCD61iED6mLDQnbazbMXwvd1tXECu9REZ36DSu88LAv8TUPfELoJsNMZE9vb1b2yrCK8eab",
  "key11": "2rfPvF5sYZkV241XWQ8GhrA634p6JmTGjxK6zviwosMZQLkEiPDMWHD7Kz4d9GWssYnajnFwMK1sypPSyptcmsqR",
  "key12": "4qQRHVmWNje4W8WRiFdZVLz9Dys1EXDUNFcbepp6We2K9gCQjWSfpuma1EcN1mR2Yfwx68yjsxvvZHuorAU2M6YJ",
  "key13": "32ha75bjBG1NQStBcn81VSxckd6vCg5rdRrxkL8JZZzJrmoYf4qzHTFG5WRQciXMZRTp4C2SrqaGuYMZgSwQnimn",
  "key14": "4sbpbgHQLd7kumCib5GMLVBmLs1Vn2Yg6bc3q354T4j5t898hhjSGuUNZJrX6Y5usZWefdVs2bZKsB5JtbHXco4W",
  "key15": "443ReiLWCHhUeqoRCEFNJUQh3LnEuuvAL1pb7ZVyjR6LYumJ5CxjcenkfD88hiEMXkozdt4rAxinY4TQitoTgedw",
  "key16": "v1GK8FnSuWpQ3dpqirGTBcXR4EZXjTpFdpu1EbsSSztsQDmPMVnfupYVQYeiYgMQsKiSfwJCfR2QSU78e2uszHi",
  "key17": "5HEB7AJjth3AATuskt9eLdxZjd2Tph8VMkoBfLJm9C51zan2epWciaB3aD5NRBz4usMcZE5m2ZK41Hof4rMEhVVD",
  "key18": "2ige4Yms8xA6n85kpiNJ9dvV2eJnkeFapmmo54z6G4kbX6q1wiNaHUtuF2cJBnedqoLW8s6KYibKJ7ATq2ef8epY",
  "key19": "4CheMTwdmcURPJkTzhRrVHb2oCkHCJzcaHQb7BdX8cAMkcPGfcYkPgpBHj1nYrbgf47NxgCQ53EFmzcCobaLBKcp",
  "key20": "4j2CttNBhptuXVCUpSGAZhWhvSEhURKGGquLbMmNFjc7Vq4uASJGqBJQkzBh385AGHzzh1v44Lnb2c6EcFSrzA38",
  "key21": "LEDoeVhkJ7ERiUD1aFZb4f4ML7yNdHEap2RYi4y2pyuf2Xo6gCahnvC3ASLEJT6X2HQzxbWAYAMv7h41UKQkUPg",
  "key22": "AwVCj36qWoLTHAu3uyAwFvCFXQoECnauWfuw4Vy4MAP5j5fvvPeyQ3hSK5wfycJpY3PEPu7PW2kmNRXTwUUihaH",
  "key23": "4HMdvHCv3CcQPkkAmS7ost3C3Zqv6qnTrGEAGW9P7njSW8sebo5C6MTtpHi2tsSNXWN7EYzv49X3pM9cgNRTUyDt",
  "key24": "5fcaLZEH8B8FtYh51b74BdKnPqcaMoqAhFJhjaUaH6PJtZKTproTLjMe4fFSixTu4xwF3uLWye9kAGYZeeqKVUif",
  "key25": "4Nkj1eeUSVtWqDC4QEaFxDQVMnbu6civzqgvXJaTttrCQmFnBynK6SeSU8CakP1iGAKTyqaVxdu93Eeh3R4NvaS2",
  "key26": "4jswnJL3XAJFAs3e4ZMuEbPaGBFfC8oyKy2uE6zrMRJGSNo9Mjkrf6DzoxhWighDeFSHfrHoT5xNfY1bSAXimSfX",
  "key27": "2o22EbLiCUXqD94xqEE8SPWSxD7brDjbtx5DcxEGPfWwfEciYoSVXm8Q4R6eNXfnsixioNpTwSgkjcXZ7P6gfnh7",
  "key28": "3nZavDZkCboxeiPA9E1x3tVMKDzq5rggmy6UeMngZuWEEaXuzo99Rj7VaJEiT6WjZkyCRDEJtafZ5CU4umzYpMdb",
  "key29": "3ZBdNKmPGAqny7dEDsn9cQUU3AJr3FrsHiSjoTXoyXBkjAQU3CTwJQqn3ckkRvYuNmvqMwdug1gFkAV2dzD3wAQ2",
  "key30": "5Rn42fhxbDuDZ31spVZkAjopCqShSCZxG27Wzbc3hFctjbBTQii8BwYDdSRJ8yEq6CmcGFjMvak7ckFCoVZawCTt",
  "key31": "3u7epnh7FSL3RrPtHragS4Jxtwa8TV7UZXvgtyxRCvKgpoYkGKJwap6Kx2D9M9TPQtZWXyzmYq2SHTDSW8BmhZuH"
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
