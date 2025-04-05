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
    "4gncAGkpLGftphD8y5k3qTmwyUzRgKd6gWqKTWrp2fzRFtMFnZhLzkGXis6SaKjBFxSWPPFkWqULmAd5myDWaf26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsbkoGeNH2rtJnh6ugdXb9Ki37WXWo78JF55ZUBzmLrMg173tnKdACtp3ZFyGWfjkC2DU58sVcQwZZf8ye2PQ7V",
  "key1": "3dwp1WEuLU3SmuWzX4PSop4X2N8cX5wEN9pj7ZZsLWswN1NQ7YMmeirbBj2q4WGCvmgCusH1hAcTZRrwTrrTJHFR",
  "key2": "5xPmEXA9fspmx3T3UDEkJdpMksvQQaFn6mNqHoJPEzjeHFiDE7JyJtMK2dsVpUFD7k6DsgSNyTPaMMQXyqAqmVzu",
  "key3": "2o7uyScNuaqnPnXAa5FmdtT97U3f31vmejJRurjBMxEJb3LkgL1PiMCrCK42y1nrZGf6QxePmoFGjp7pGrjwzW9h",
  "key4": "2WaohLyiQyFYQ1pXuUwned8ijkmtyq7h61LS5kvpMQcabHZZgfeePtadhbncqkaF1fX8qEemBngzpDYQnrrzAqnx",
  "key5": "YyA39682STozYD7KCro5yJCFaCR5YpNj2m8g4Syyhfd45v9chg9cDaJwK8Y44iHL8opPgocEWR1Aq9v5VZRpm8t",
  "key6": "3o3EK683pDSUbUcvb3AKUUJSqauaJNKyRwmB6KM3NFCmKorwZDrZbAiw19VC6UAbSyvibqL1eCBvjuYCrnqy7onS",
  "key7": "5iPkZWaJ5N5GhVMAP9e9RDBzGN6cXqFAic2mDTo64nAiLDLiyPd66WRon4eSXt7NC95nB1inknvtCsenjvUdCJi6",
  "key8": "4e64hnf3N76aEK9q2Q1LAQnBsLgFnAt4nKDtijfupB8VbpXxfmPAmqZVMTz9a1oKz2aBgWAPWLUCRnr3SBeHkFAy",
  "key9": "5bz3Vi4dsLUinC9M4Xg6RkbCrEgtnoQnzW38qwVwLHqaVTpeUeZqZRtC83Yatabjb7mKbmKS9WoaZwtKnu2aJr4T",
  "key10": "4Lo9TAjYUMm4e3F22u7wPVrrMvJWxhYvRhh9uhECSig1UHNNQQHqrLL8iR4dZzuh12G5471ixpkVpcP9SAgcZ4v3",
  "key11": "4brHcACyyjyp8C9o7vwJZhmYCHmZh5r7n4N6Xuk5U4zZq7dRjcngA5GguKgLgSDb77vLatxaUdJGnEt7MkHr46Wq",
  "key12": "2uXguUvZkyJabFDMUmNrmw41hybAtX54ef6xcsw4T3fZrmzux5qfcn4sAxq7PUxGfuKrsJsYufC2NmDSZrVtq6Yt",
  "key13": "3fL9QrwKgfF9TfkkVYLasFhn4KMsWsSXXpfXdBXBkKr3BsKnykEjTgmayvemzeBv4QNHFEX8aT3VR7CPqyzyvSAn",
  "key14": "4Nr4pCCqGt59bcuWj2ViY9DD9maiP3FwsjJjqpUwFot7W7ktr4WrsQRqGcKJMBCLt4rtvV343rAKwRkY42THrYWX",
  "key15": "3zfZM4QBs8FTrfoZj36cC16KEZVJvBruYUPE7ghTcogt797UVkwa4y8AheRX9SrRFaDMq5LwFGGLUvvgRamyyzuG",
  "key16": "4WCQFMmSAhqBiomkrFNTPj3nZcsFFAf3eHvpu46BBLLP1ecUFRsXLzo8jqrMBSLA54JHKuuPxLxLK3JnsPRCo8zh",
  "key17": "3YegCN38Qv99wRFunsDJZySFKUqttCb3wTs9avEXYARxL8taLztpmeZaGfYR1osUVz957NVHc4iN3euCv8BKwBa7",
  "key18": "3zUxptzTkE9FGRY72nV65cy48GpVx3gibe5oFgp9h9FXbX1zYpAdsrrx3kdgLtVyVdQVjRPT1gK6AcHrvmqgr9he",
  "key19": "3nQyJXmNmTEMdZVFSx6bLuE5XQMDUSMJjVgURSGwdzDUh5guBjSPu3wMT6MFyt8tXnGua6MoYGfKdLbXJ19fP2Be",
  "key20": "44MroiC8TwUuxVkSKfoecEvyNqnSE6sC6qE2oX4ArxSZGLZfNZe7XkcU6qfctAmHMZ5UKkg7qgqVEy5agmMh2LrF",
  "key21": "orewSH1MBPCk4WTCbMbxuygbwysaH2BUsea7LQ5nKN3gWA52vgDb2PuhGSgvwWhXNTDnNJD2Xvtu3kK9VmVRNUY",
  "key22": "5DqjNrsQkzXgGJgGwxbFJsoHSmG9u1SkUxmozhRxSrSWTUzDwK47kEYt5m3wpocQTPJa8qw6X3a2i8KqWc1VVxH",
  "key23": "2t5MvkodJVUzHdnrbFBunJAZXd6msR2JVhybMdFGeR7mcWtpBPRmi7EoVztxKk7wTTkNwrq5tcWue6GaXAVdS5Eo",
  "key24": "3MDAPH7PkKeGRFYy4SPqrpPVGcp264yTZ3dVRAWzP3smTSiPnK2BUnqFbCUMc3KzdtffR9Wr9ccgWCvnoA1qveje",
  "key25": "4KiYH9kWcdF9qZXPhEFMfxGqEid9MFPLWG6NwajHqimmDf3oXZiQkadwmWiRRL6XD7LAwcqatoEdkjMUVaytkjsS",
  "key26": "yLcA2ootGn9zES5GbdEndD4fC1aejAtWLQSsfB9cdHtw2tspCx2SwKuYxRE4G4eZuHZgFhwLZaGaucwtVANhe3X",
  "key27": "4h4bnUoqshbi1Atm1PnpzHGqG68xjFWfYB78jsJnUaeeQtTTevQZcw7SqbQtgDoqCw9xTvBeS2XzB9VWCTfir2Jq",
  "key28": "5ZKwJxe7tghgJHZPYveYBBukWdPRoGsVqp82X4e6bswvwKg7BVfA24jY51JxkvgjMts8t1hLEdXBjnGCkwhBjBcm",
  "key29": "5yfiPVdgQi2ggxgQgJKqaUsGeQWJsTDeni38jbS1tC8hR2xPKAsszb88LY7oHej9krgxp5d71M98tZLrq2ep5wb2",
  "key30": "7P3qRmApUa8kATLYvCfDLrbx6d2bgjWPpz75SnVTdBL6shkKcBXvKqR5MH3aKTNSPM9ajXuwLaC8gPfnJHh6gGc",
  "key31": "2U7vUGBfRusSZzyKmcBkd2TrJP74oMNg1HWK5SiEiRMxiQbGFST78773qGXVpueWg23EuotcMTizAJ9dzBu6LXnW",
  "key32": "grPd8x5kgtdCxXgEpjXS29KnG4jpD9aaPkWFCQydpTPkFigjapEDfsqHWNNp84LExPRfpaekK8PmAeJVh9UUatH",
  "key33": "BTLTHdhPndW2NUfj4nnQppfwFXz9sbUwc6oGe4ttVhKqC5C5EGjMRSavZ3vL9h1kYViuNpVA4e4xWpDfQef4xXw",
  "key34": "5EwxZA4S2veDY2pMWemQ2K44vBhTrJHRP6f9jLHk28Q7kS2QgveVwdBJmFznsx6RcJdyLVdSemhfn6HBarkyPCbP",
  "key35": "2AjZEtGpGnBSxS72GH5R1stqMJeSS1xa7WFwKfp8dEGhSoM9qogvqy7CA3XKc4izhYdnD7dwg1in4UDYStBdaC43",
  "key36": "43wjtSukHsWnU9dbb7xDvZv9Ch7BMEUnS5w5MrS3ijxPeJirkdpUCin9rhnKFs3p1eXCLDmdgRgHNvASwPuCAMhk",
  "key37": "66B6tAk4oSMLoLVUvWnsiGSU8arY3rNy7T8QvQZkoBsn37Myk7j8mczsSJWatTZeWz4w8ysk7DNjvvTgHGavvEu5",
  "key38": "4uqoT7V9yovRMCJCynqzt6LobKHNYVjxN5ykYZJGk1VSY8QWBt6zhyag2RmRLokA2nebTZ5Uoc5fBqXJKan3Enx1"
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
