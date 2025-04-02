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
    "2MqrkYvs4Z8cZi4REHGDA9HDRk3FkhsRRwYEQPtf6T5MhKmHQ5LvaRBdeRZ4dRh5hqnokshSXGHiLjYzcnWwvuDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "282vngkJEbASbkQaUyKS9QbS19GMVJtGWcvxUUQ89u3FJ9BqfFCJH9ypBmVLJ3EumMcbJzSb8kf2F3N3B6TdDBVg",
  "key1": "4SGL7JJJAoCmhX86LE69X3jvxLAdywzdZAf9qYpaaUW9KHgKcy9aF5bWoRGkDbxhdBSU69Nneh7jKWnhL9BZc2We",
  "key2": "3X4KqfxLn9nznNPg4Q5D72gExx6ijySfAvd9qZ5T5gpXXX1Rq9sagrACtYASPkECwV6GdLS4ywg1EVrq7DysjU4f",
  "key3": "2WCSdWnpiSq6KyTEeQam59kEoQSQ5uh2h3J8Hm89yFGctWPdrvqVkRUAMtdSEq88bMp4d5YJ3NapN6YUDM2Vsx3U",
  "key4": "66ZeeFdkBxNrpDxGie8R3JW6KFyVCBw87ZXHr15XmDS7kKQEoyvZvGYPwjtsGyEK8P3sHdjeQubE9mips69FwH8C",
  "key5": "DrxYEpjcpNdp711wuWmKnD3sHj65PDFhxFMz37eZuS6C9udbYTxa2a6Rc8ttTU3qNJrguzQ8gTqRH5BpfeSS8HS",
  "key6": "2t1MrRbdLXdewjMUGmh1kmXQnVEY66StJm92k89hXpTC9q7vbUJoSeLmHEuoPRwqGKTLmFdAvFLeAbziWoQ1pmM2",
  "key7": "3WMSW5m871rSMKgyTeDeySqw5BqoCKUmM7LFQ4Bf27gf8HzmMsYyzP9tbaMug1cMGSqwgqJpAUTJ5LzxBZy1QD2Z",
  "key8": "4iD8fDxyP8gSvES42wbuNsPVfbVutVyRKEYWBgboeeMz8EExZwmvtThhdRHXhppEH4Zu48APMh1hT4qaVsKLfqtB",
  "key9": "8c3ALn9zGLnKTXQzngmWnN5DyPtPdos727tNdxVuFDghnZJik7thUQjHXzkZskYLSYJh2GRM5EyzYeoYEM5qrHo",
  "key10": "3WrHbRqFu1JM1voVvVXMMVaWS1UZ8cNY5peG62S2Tc18c7i9nY6gXshaFTHmW4tB2aiAGB9tXoauxAryuwf84Uxd",
  "key11": "2WBrdPGnhKd6rJdNPwBL6q7taiEwvDcSjEkPnySGr1imPGXHmU6nMf9gy6nCaiHD8fLcWrZ1o15rjz7dY5rxSn2B",
  "key12": "spPBQprZiJfdz8DRVzk3p3UYVhGm8RMyYqVRGWxCfyXjrHaM1zu8K7PnnQs3KQU19iyPbMeZuHwwTvToLuEhfDw",
  "key13": "5wPmo1EanwPhg1E7TeNhCXRWYM3XarP7f9pb9qUvivw3HKE1vCVZD2QeRojM17Z5ib9pKf5mNL5WPVc6QNxkaRiV",
  "key14": "47aTpk549HJjC2Avj3FtfGGQvym2tPANH6rWzEYm5X3mBijfxsd1C5yNjuCUDUirkQFxu21BfdEdVcV9Y9xHXXkN",
  "key15": "4snwT49q7JLUa5C1oiqFnkhdju8KPL17aTd8NdVKMrAAP8dtx7A2J2ADF8PHhY3LSyibHdQVQm22GUnypFcRTgBM",
  "key16": "3UsSF1WphuH6uVYAeYwsr4e9MZR5nKw9U2BBxn3auFeKbD4GL7qdLKBhBBf8Es7jDaTyxe4QNmthBPUJufMGSFUs",
  "key17": "4bAAWnfdQZ2vrNPsoeq7pFRjUrvpmrSxZn4s7rr98zuN8Gr3YRbePYB3h7K7u36A3BNZgcTbALuKMQYtcHurnBSb",
  "key18": "8cBXCFpMohZjFdBNdKw9d3aue74mz8MqcCs5Cb87TNgyFKEJ1PwUstjanfco71KpbYsk7jAmKqEw1yZ6rfukZWz",
  "key19": "28uFCf4r3mV4LYuumPEG5SkUP7vRvxh6onwhtV6PGC7yQBDKVP6u7n3AcJ1jrJqSEpREioFuRkx9Sbnqb5LFAfCa",
  "key20": "3g2Gicpj54gFgHRgDW341ufTVkyB2UvTmgjvJwPXpsxPL3fkrFCgL6qDJn7JqoFPrXSRWh4Dqu4qeTrNJ2Zx8Mb9",
  "key21": "3kMsT4FrJyKN5wdNa1dgZx5DvmGiFx2SoqDv6ac6EQqPk82Li5oXFPwyeehb76DG3Vz8shk92BxQPZ4XeWPzbbWu",
  "key22": "4TkD7TntfAD8dTAfgNsb9V5UA8WjCiVvWKiW7rNprSYZaiDu2qhsuXb5dbwXstCxVT1EXNMkSo74cbu88ygfgoNW",
  "key23": "5K3GLcXLFJiLzWpxGsoW7Zt6yqf36etuS6kEH1UawHkY9QoGLqU9JsUe7qNwE22qxNYqHDAUKmFgzxN1b6eEHZfK",
  "key24": "3uWQU7RBKGK3vrsVqcaaU9u8iBp9qxkiwriJnFbHAF3DMNAVvoQtovSRZcH1T8HqQpEdVgc7jvkZaRvthQ6sbRCB",
  "key25": "2EV5mi3tvNhcdd9SRyVDS4xmrGrEpHh3uPUfMBqJMT8dYT3xMdRsWrkEvQRFonD4FuXvzXGfBBMT6Uq6Tsvg81JV"
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
