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
    "vMJGYo9HzBzzpK9ktkRxuE4hp1fKNZeXDiBHj3oJ7Q3d1cFrH554B8NYEbBmTkbQvdotSbDSTqesnH4ct8dG39Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SxnHteCEiTRtqvrtzPEXcEjDBgaqUgURVisZ9kS8qew9GsVAGkNhwsXfxx8y1jrzWDwGdY6Vhh841GAVTQqDFP",
  "key1": "3Kuic3S7HeKW5hWkwZnFnRFb9757CP5gQbyy7Vu77AM9A73cUyDkmdEg2tKw7weTAWFJpWJZvaRcKvkipArh4EfC",
  "key2": "3A3prgh4pZDHsvY11tz7LWC7kqeurS75RrsA5z9PhoCfT3n61KG5an9TaharxSNo5bsKUNccQAudcW7UCHnnh8mP",
  "key3": "38RugpD5JPFFTKDd8rWKyw45RZ8fb64sLL7oWPMxsGwahiRPGszZKKVJparEsJGByZoVgsxgubruBdNTB8N5xRDy",
  "key4": "5BsNoF6Hoq2JDkzxnNCuF6928qWZEXkXAmAtYS3BK39L6oDTghtgmmik8bpazfDbR94B3QBB2HRa52NVDGfHW2iT",
  "key5": "3zDB4VDGEhdfR9xEwVoHvSxPTNaYu8MF1jTepQ8Pk81ujccejnTeVm1LoLJdBEVqWpCQTENdmXpyivcZmWN5AY4N",
  "key6": "PQ6GVzP92Tdn3sKjvDbhxns6dQbMHL2DBc8o3kYkKzxuiugkicoZL66QxHrAMRjanGZjWfcqhaCCvjK3qCoBvfc",
  "key7": "2SSNLejWPKxGSXnJLv8WPNs3xAASMzSSv2VrQbm7RrM42qWwndWp3bbjMuNK42XyRNin4Bsi3m2jSz2KjsRtzyJw",
  "key8": "BD8y6dv4WFJFrabqvQyJBXa55o6eaQnFM87inMbjvi5tTRMShdpgp1co7bEweoVCYynSMZCESNZz9TobaXjosZn",
  "key9": "2HSdtb1G6nVjAZSR5CnVUuJvoB4rw1y6EW5fcojXqBkkputwd5B5ckYvFdt7AZccEKXpTaDQwE17WJxzmh22pV4e",
  "key10": "49htUJzaTUG4Sjs43fx62xr8JeJA8G3xqExxS3DG4SQxyxFMYFACWxkeT2LqFAjCjbQtXVKKzqaHgQah3o1kmYbx",
  "key11": "2wJSFXwXch8gG5yJLtqJYbV8DzNhK21sECnyouoB3PStMdbnwdJYCs77VuABWNumXtQbqsH3V3kA8miScRaRC7aT",
  "key12": "sPw1i3YE2uLnWTXpbrYgW4X43kNS9Jeb45JX13vMNLPNgf5w1H7CpdG6cLnDMFxcrkiy8XAVurqBcW5PzfynC3R",
  "key13": "4S8kVzdxKcXfnUaKEjZvFhBPbW4yUZBHij5BJyP3S2w4w2MtUMXAU8MuQRWGXK6PDnZ8aYAuQXH5EGTrRD6vKQCC",
  "key14": "4J7qDJUMuAPxt2EhSJ9KaAd3d8uVXLyHCcpxddMFgcmwJJT8sSHB44uckBgDAtQRJeFTQT83vdxXS2fNDyVhje28",
  "key15": "2jsB5zRm5ZFkY9zFvhmDTQJEprGajHVhxeLZ7B4rcKRrKtwtQmewVGxzdm4pmgUeH1KQ1he1hU3VTzaC59z9Vnbt",
  "key16": "2Uc1wteNxmitfCzDV9vw22U3PmuETGa7Eg8dzXTiJhCimgav7Xzf7oAZBrfCTWdsMBvSt1NPykYkVx6FjpHrT16Y",
  "key17": "5fjnPQRLZfXcq3U2L44QUDoDRxDREHsudwvsiT3Lv8eCZws6JZLnSqy2kpNW5rwH4wkK5bFVt7CZRfN9dkh1X4Zd",
  "key18": "5UAiVcD3mA2LQvwcN7p7Aos6biq5r8u4vfRF9VQiVTzBnKz3BNnBdQGa7thTR6TDeTCn951TL7EAZAgi3RzCxJtH",
  "key19": "5TAmSzQ3yLUdij2cqyrh6QsKYNQickywdwFVZ39cPBVWUvB3aH73WePpPSeiYKrGWRznUBDG3TiH2CDzk7PiQpY2",
  "key20": "TLhBmzvtZLfoXdKb9ToRjRcJqrim4jqENz8r8PdytPirQt72A4ENnkCSEesQM5cDHySy5D5zVf8FipFhKdvCfQQ",
  "key21": "3fkHua5zQZPQ8UgcQNPXtZous2Hm7BaBqrHBsKnN1dKZi8KipF9SZywJRGkBsWADkx5cuytoGMXDhCPgiV4TcmUW",
  "key22": "2ckWCmtZarGNMTNZwxtk5NYKXUnTWDZp47X1vnCNtoxzMDmcvcCr18PK688nMfSbHBLLbNp2VL9Cxa9tykapoSST",
  "key23": "zjqqEaahFLvF7DuxVQ6NmQomW7qSd1SQt4HwFaGXYMe5EsnjYz7FXG6w4q7LBQPEHJQb5QrB7Wu731cwDQsGkEn",
  "key24": "5p6kspe6yeRLvTREEVy64MUgk2hpRS1BLTNWeaXqBfmKk4HgQ1GA3atiGEdZbCC4zLqGnJ87549Mm4J7kpLVxUad",
  "key25": "3UpAkZxNWBP4mgeQTNdz6BX6kDMxubV8PpwBzzDWHynVK2TAtNJLDXFZ8MK5tVVVeUkt7viBxZuhwY14wxvurxMX",
  "key26": "5NMEhrzVmKN5RXzD3PU91w2uCzoGvK8CvWeC872ERaE8b1XV33isaCe93CHNLerzisYY12W3MnUo5bN6xKhJKrcE",
  "key27": "4ESbKcKx5LQr79DefZvR4PPduHMF6RdbLQptfSpv2mWjwpoEot1rWgC5MeGELS4GkT95tcAzds89URT6MbZtrtWW",
  "key28": "2TH1yrCyJMbgxVyGxiTAp14s6iZqnypSu6c9ik4MYXG7jxmXSPWrCX92UCjSfxE7heoVd7vkSPTQhs9Nvjqb2xK3",
  "key29": "2Ejh1HnQF6rTSTf8Pcxp1ee1VXsHT2tjf79jsbc4FfSdWTt5diN977zPkkD8fdf2Nk8vGM3B3jzkcpdpexYnvupn",
  "key30": "4CnDaQ9iNqNrrjiCX3xabk5xhizCdTAHW3B8PZ7r4YyGB99zbvaqmuMD4whuMzH9boNRdFKN1VUnCku7SZ8t7gGF",
  "key31": "MBWkJQY934cKHJ5WFvNoR8basBWBMwm72AnVxi5HgSihPPJ2mKSimcGK4futVumwLKmuNUPpsditbE6vJkHm2Q4",
  "key32": "4ngC4cbqWNGgnsDDxbMtUYWXLdct4w5uSLxaPAvmLiutbjMvhg1EWJ3v24u1G1f4diiEiH6cQJTRa1sJww5ujFHE",
  "key33": "62Z269PTWeeqnAmMmENddFKqTT79fgrCWH4rFxxUggBWTX3PYQEBgj9xhn7im5GpS1oXPnLnBCFd4NxhqDL22vPs",
  "key34": "5oErSm3htLShsgTbaMGvUgdhii7Wb1W4LUn5sVKmcBzsy547RT3KRAkP3cLpGVw4nwCxRWrJ73uCzstxkvSPhNQ6",
  "key35": "QqC8CTdesmbdMf9u27cVZxjmVaquHEXcwNWiRpkoppJR64UsvDq3XP6LDtr5qzAvFGkz1DyaXHE6AfqByNsjMMg",
  "key36": "2doAyzn4NmRd5CjG9KvUPN5YdxToB5EU1KB7fwuuRQWkwy5pKVaiu2vaQ1aYjto9odKTNqDkqxpS5TytfKeCb9Tz",
  "key37": "5Z4yz9tjVuJ2XsRZj2BGAbHF3iYs8XbPQdX7ySE5d4pDcwwkkJ9w235R5sWTkoeRDvmA1R1ihWpmkEF8yHJcQ5UJ",
  "key38": "2ZfJpC9bLLMpNUuiRLriqXHUSunHKigEaAsnkv5jHM5bsUyB8PKrKroZF6j2UENkiF4iZt97XqK5AA59KZ9dWMJG",
  "key39": "5anqHAFGxFzxuAeYBUyXzxuyczLAdobBTJrsQ2TVfc8xdqgAgc5iRANLZZPDts5HUcdwVuyEDPTg2D3wE2WnhwuF",
  "key40": "3AbfbNkBhAkz5jbYkUGWU1ZBFGew93muLVWcPLjw29JWFdd1L7TWD5n7Qb6ff5xS1NfyaNLVNMCtAXvMoRGpwv2g",
  "key41": "3eVdY6ikdTQLEKVbpB8Z652cRcwD55RNpPY3Ys4y4aiXgBmkk8F1tpnLNUhLwn2vb89AWmMys7ZkYWqihtc7pqEJ",
  "key42": "1gt7RF3SR1pUJWLfpd89yVJBm1ETJRAHbei9YEDn3rABfMNnZsWpSMrwTPfNRDsfVPr7kn4pFvFqEv43PWgygCh",
  "key43": "4D7ehfGBqQ179xoFRtzfmRF8dEXmRAc31d1bykn9pJ2euZ8fVsxcTmT7WZ8w5sBxS3g63e24AAmHfsQ24aZuu9XQ",
  "key44": "4voM8aDgkKZsa93vxUoR7QvtK1mQYQbD6zvK9uLkayoAm2kyE3MCP4WnLW4UrhYkttdnFEob8YywwqDJjrgbN7Hj",
  "key45": "xUCV36esHcaYXajgTycJf84GnPEVicZZggB919HEEwAUWzicxVh1YracCjtPGR6uc2nJMJyhyBnwxrVtCaK9rVk"
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
