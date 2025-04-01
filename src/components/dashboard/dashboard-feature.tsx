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
    "7AyNsn9Qtan5nqsfqt8WBQjBZupY177QN3SzV6kntU6BcdKoXKD4WsApuSZUNRM8tFGMrkcr74Bi1Wfh28L9aAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1EH4Ex1wt5zP5d9QxapJawvuxQ8RrvZAnwrH4bgbgQoycDe1kMY1GGyf6Zj1G2gt5EickZ6ugCK5Y5uxNZA3u7",
  "key1": "g2CuyeCMD5auDetfS8waGt7FLBj8WtPqGQNE2aYZ5uMuyAAdDEXgbUiBJUGoJX7Jq38e8hTxx868TkqsS6h6XML",
  "key2": "3scESGBdwjYnX9dJW7BULgoGWmnVgVtXTwFHsHM5pAodqCh6TTSAgZKRdRsMZNQa3arBFvKAegWmy5QK9gVrDnBz",
  "key3": "2Kh7vbB9SX998rvQVywDn8MrbQqfjyXChsSjbJ4ju6UzFzHGfe93Y9Vqcr7kxECM9S6zQ1L9ZdwAZYHNgNbW5yPw",
  "key4": "3TKiNGy8Zm6BhhBvqukU1osgy7973t6RjCf1eWukR73zwkPyA1vMypqvAWZvbyfNvs4LA5acpxTy9Ejc4gZywfHw",
  "key5": "3wJJEVbeGQSUf8KiZbrj4oxeCQqCu7zHFB7VzxDdBCP2q4yHWh6BsTAay3HfYZuq9PG8syidykg5ujWdGCR8KRX2",
  "key6": "4huWqmEiXiUQVPHH6L59fjEwqihJjhYgEkkbdoy85duikomKkvTNmrtnVFJnDhJNzCHWMzTM8drsPj6fHNU8e1xF",
  "key7": "4MGAXhYhwCwMewZqdkji8Y9GTTTDcVxWii28cAmb593YujAReLXDci56jZWqpJeDqazAhhDKvA8J9xyH3qQoXJTR",
  "key8": "2XKkWmzaTDT8XTDu3rPzL8hquZ32NwkR8N72csGtnE39gHVdMg1KGhBeE39qaYirCAegG3iDDkvwokKbE3Q8djc5",
  "key9": "4BHFNdZQERMW5FUwWzi42HRrvVDUQVeuTmjvinUFh1bo4kgFEqELwVNEu7tS6E5iioLndw1mpvtv17aig4bKnABA",
  "key10": "47J5S7DpNhK5dToZ5eTnUWgVpuTi6ELFQ3jtZh1zMWTBve4GYPuGBAABz8guegP9a5vTpgnkzKdpLhVVC4yB8f6",
  "key11": "56U6Rf8NH9XwG4QncUj5d4hJvfXYrCMaHgLpkVxDnQem9E4Yqtm2K473uALpnBLnv4jUith8V4SLY6qNU8UtzzBi",
  "key12": "3cppKfU3WuS8LRD9FTfY9rKs4o2bweGpsfiopR8mJCwZELYpZAhMuUqvasHfgFUvFKq4GAvjh8eUQqdLgrLVNdhs",
  "key13": "2gZuwDCALBK7ga45N4hKDodSWqMTSwMiqXaJpntVZUNA41gUw7QBTcJ6GLo147PNMuq8Cspkz9ca9oBcufHPLDCo",
  "key14": "5PgtaSyvMidtzCTD7Vz8BCCkGQWkkrkgogmmZsJigYTWDmg6s5qb8Uo5kvpXibTkKuyGRQVD9iqv47ooNggdYnJf",
  "key15": "5K4G57iowRmxxxS16AN4Dtoq8s1rJbMFmefM7njRrsCbhMoSNUv44dDxztsaDREALgm7eheas6RczRQgGBm1wzYJ",
  "key16": "5BHomXo7qcVf4zYx2LMgBbG1sm5EfP3MQUmWB7GNCENtRjZxJ5sGLGEjJuEw5jG16TpwKgUWzF1hqYXdkxoQqJcH",
  "key17": "3D2GrbGrMfigPbA1sRByaZtqJHDWYbBdBnJyRR1KNkBLDmRgmyGfx1dVfTXSSGcYqYRaYvzSwPyYQP3brsMB3NCK",
  "key18": "2ct8iwcipjuuSH5hWobrjbntaAAnDL8qm35MNkFxfV6AfwDwaRFhqaDfAmSLY79q4JZYTHg85rmJK81JfPCWDNtq",
  "key19": "4bQEtdi2Ah7eRDr8VtTnCYaKY7R3eZHeWftjYYyNV8XJEShfPAcUZpr8xwSaD8EYp16fGBkKLcNcm5NMHnH5aC5s",
  "key20": "5QFaZSiD8qUebduSPHWMAHk5DrWExgYJHiDbwqbpBDu4uzvxgXc4nSgTzqtJesU7HcvTG4Z4F7yCWaJzjL83aDo4",
  "key21": "4f7w79R81ETuhHdMA2VrmjQ66fDb1W1Fx6dE3oiyC2oESts1naBYtiAfjNVQRo51CJPyWUNiUbYG2jiSLyuvMvue",
  "key22": "ryoTe7hoHzBt73cZQdoBE3xbdZy2Nrqu9eJFZhftAKtrsCw5nD2gmnoTWsBB9wfTU8HHfVZRn3bj7nz3pgXfVSp",
  "key23": "4bi4PGSeWrwWPGP43MBKPBiJc7imSBwjYFVvrfy2w1fFE2TBpubyBKjbB6XkofgUqTFsJ8kGb2nz7ifUg5Tfspgr",
  "key24": "5bYSoN9a4MoJXSFassMHggfBuXGWabsTrt5AK1cumqtPDTJp8KMfnnyxZmTFmByxtPCxHvK8aAxQ2NpUuPfT3zuE",
  "key25": "4w4x7wGdoKmbMRBQvzTwc6YhvckRPcAekWgTJfJ8Vq7bjZ5RBWcwjc15UJue7zTF7CeDYxPqQRJUBhozqL38NhoH",
  "key26": "6ahwYerQEorh8NC1VM5m7fxip8jt5AKR8iyG3JDjhiTSKidgzoCuWhPj8VXuJP7N6Jq5pATR1CGSMmeD6CnNU5Y",
  "key27": "2eKSSmUfCSvd4gYUS3w52zH9fnUeMirzSw4xeV44u1E64PFS1L6d4PCUMnoeazfNMm3swXsWCkoeJk3hudt5hSKn",
  "key28": "48tzmuhDL98Q4iXXUb3md62XgVV9xYNDWMSonbUuSURJEo9iGApMNYhpGRvU8tChgd6csUDKf2RmxaWLipyLcLpM",
  "key29": "4avPAosLTpMLi1yCx4ZLRYnhJjSFQMxgrcg2hNdTJvCydBEGSQmcLpxieVPaSeQZiVtp7QSdP9ng4EfjqD1sH2wn",
  "key30": "2DW1WTaxPPLNZNyPauQv56S4hK73TKsRZ98443UhrxJNqYCMJr631zuJp45r8FmuUpK76vCmhhvNg54HhRKyyeG3",
  "key31": "5F6ryx2KqdEEw7H8RLf45UNokQ4Y2zXi6522bsHvS9hVT2LJoZ2Y3ZJEyNRVf7BAni3YQf3ax8xTvPob4jybbQm5",
  "key32": "61A1vcschbLGsELtBLrzCJnBd2Kz8Ueq4r68G4szh5QVn7wiRFvwGnsVYFv2KCG97fsXqa4Nkfqo36VnhezLHaUg",
  "key33": "Ti2cwPqK3PEiPNwMZhGHWBoeQNaJ4G74wWfDwj35hqTDr2WDyaYPAQcvM3B3cCvFB9dGwbtoYcmGj7tsFGTwnfg",
  "key34": "3diTZRiXawYtFfRuVWmZyYJsZjBLJ4YFEg67uFLBq1ThordAqgZnmuxe6qJBnpRPUXiahfM4S7QzLdgAc3UYpWgM",
  "key35": "3sMPmWLzAjXo7QDAyFYAGsL7kNwqYibbV4zgCfQyqqNQp4LmfEaE4e9oBTZNUfoZdUsgVQPYvLotaT2Cm5uB7Ge5",
  "key36": "3LeqQTcVbsX3doDBJ5d1EsWP4FbpcFJHLbvp2pqjYu1NVr2dLxjFq1PsW58g5sdbVzhin2HGTm25P45zcgKYrojL",
  "key37": "KW1a8Wp5T6U9nKdh77HqKXSi5nkNfm6yLjExc1gxTiQLXugTrjY38Xb8owD4baTbhXDQHFBz4cUNrCd7CR5p9FL"
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
