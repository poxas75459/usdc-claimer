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
    "2SghCF2qa79e8WfZtDJ6MDdzZt9Y4B7JPVbJ5piR44a8PS8t5zeWZpfkcT5HZCsScjiXcCgCni6XW6hFi1Fxp1do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55No9UiMZdQZvFF9bkNKfKhwE9oMd3ZYhaPGpoMBAveXVx9HvtCdYMrSyWDSEQHPaWreSDdRK88uEWM8v8Z92EzA",
  "key1": "4YPWdZPQRUDSbKwqyZqxXtb8nfCdCGX3TPQ1gFoChdCnPn9doaswcP6oeKEHuAe2Bh6RWEdSqHQjLB9JWUdLCGZq",
  "key2": "44d5Rmb4RVycoSf6cbbwiFyA1nVhWXBSMAK1o3e1cwJc8QzXkzPDgjg7RaXSq87ZX1G8PpKb3Zimo3qGsw8cZunc",
  "key3": "4Quhv5HqGUoBFKbAbv2RqEaccib2eKi2G7UCwd35SNYqK2rz7vFMYgibNYuh5pDWgREye1dz4ik8pzUdaxiccQMX",
  "key4": "4vz3GgrpLDFy8hc4YK4toFf7wLtpLTGqV6Qu3yLDMzj6wHKzfd5Cn6M21JY31jujnyKArMeLfpB3hfig4mddCSnY",
  "key5": "4GwLwCe8sAFjB4iRr6vBcmhHcQ1ixRoiDwVEnHHdQ3VFFqLbVAcuuKT97DGmxyMgixTc71GCZTv7QGsNckMcUYXg",
  "key6": "48EdYDHjYXKnbb7cLqT9DTKSateVbwhTxftygAox6fsb8XnJaVDxUrq8M4UyahooWwnM9XJ1qkFSxrMx68zyh2Mq",
  "key7": "5RU6ZMXYgdzaKynWKA6KGPLJM2doV157RbMQLtPJHTaJxYhw2i5yAzgyJgwzJdajRxjn7yhLiCEU5sCQt2XbYXzr",
  "key8": "3uqk4JBUvU51RnoQ1pByCVy8rTKGyDSqTYmPqHKPwE6cUC38rTSKMkxEeRYoh3jMxioyg3WoozHr6G871arY6fFW",
  "key9": "4n83Y7pGBqfa2twfu76WWe1XwG5XRBQiPqhrREkgKpvZE7LQte269wBbaaVyPNHEZs4uM8xQZVy2J3mVzSHE8HEW",
  "key10": "pbny4tiNxs1YoH5vdKABPoLFjd1ombBEFTcNjeNN1UkP7KtBK2gja66rLXLLPyw2JrqmDNuAivCi4gyJ1PWKj9S",
  "key11": "2awzCrZ13FnEzBdvBBHd6HVQZAbnAfo2vE9TLW9fU7k9uC7m1uMLKUojD9SS71MjYezBELjk6y4KwKDehEm2bJaD",
  "key12": "4wH8UQWuZ3zMrHztq5BUXf5z8xLnMFUQPyEmU63J37Ag6s2BXJVAr3Xt5xWGdS8KnuETvYuvChNfsN66Gi73S5eY",
  "key13": "4gNfS4Hn7cdENReLDZMuGdKcYVHABsbhDgSZtHLdC4BPyFK8ea9S7BQ7UaNWZ9yN28EEtKc53YCjUewgaaSBmaYQ",
  "key14": "2UVBAAJEqyDTyWHy59BVJ7U6WeWBX7y4B4uuufNYy8pjA878A1iLDrjNgx57EjxfcuNH4DMkmyABuBm35v2n88jm",
  "key15": "53VBNJmWPskDc6US8eu2VKCtVcE4uznH1EgowtAFRWEnkS4S7wBNXtBeRczi1hnGshpTrL6ALazRQX7yt8pQyy8y",
  "key16": "4p86GE6siNHtviZavLixxs4ckNTZBd19TEekxTch3Ls26P3ZVLBQMDtDTFZDERPi6zyffqwro7VYBxWYsXvFEnmy",
  "key17": "2HARYmVGDDJiu3d63JqDtWZrdUew9A1iqNrXQ5CAcaJMKbfPUvHoA62NpbuBWfK5tsKXozXRTKMSbG5vgsWBhMhk",
  "key18": "vZ2qJtDdhBh48E6DXZ2yn33zjZ6UD6JpL6F56jXWR9LQTQPKFD8sDMeq32cMQEWQKzZ6mRdwE8MdrKWztxtqnFt",
  "key19": "J69dWzUn9SrQPWMUuqdqQZC6phdKWWYH13k7vf7F8EPgw1e1MyJHWhLw1ETh1ZCvrufhfBmK4WxKeH9ACyiZLoC",
  "key20": "3K1h1NB9ScTdjodEYPBYCsvfHLLEFr69ipWVBa5c7S7fdFbTMMAx1BTwoKNGn9eMrDkun47RWs9ibt54SerggY65",
  "key21": "5xLvYTrN285C1qXe6TNb1otXxwRkR7jfvSM8bwvKkndefaTa66pRUK68Eokwvcm88REbRaLZVN3tgDm133PQnrvx",
  "key22": "5LDakfgrLoEtRXZQtv5YqJwq3sZGvc9pNqHwaovqyCWdqhBFngd1GsXCoor6a9Cs1RSSQZxhrh9XjbXePZ96Tbry",
  "key23": "5DMsX3n6FqMovwjwsyqn31et3Ff4SWVxm9vt7V2N1WkK2SYDQs1tsrCYaWrqG5YU687XNt3AXMqw8PP25deVPZ2B",
  "key24": "3HdCsFpZNgtUiYJxiFtoTZ2oyAtWixxKG9A1geqEEdARSAS8gYZQuoUTVmY6Co4gUBtNgxqUCVBG72L8Jnp5ztTP",
  "key25": "4Xgbjiyu1AqG8sakJiDgiX6DueD8QvY5c25KeaVQUpXazx3wFvrouSn5YmYNmDaGyUSfuWLRo55T6jBv5WBQsm1b",
  "key26": "3BrVkCsTQLnKyW2uqryP7pX19JzXviTCDMWiz5debzigrYGa6XFJVe4yPmRsGDz3arrdSici8msXBCJUKb66DUsH",
  "key27": "3tT6ZyTNS8fpc97mensbgXmiDE3jBkvYRHdv7BS8JTHvDF6FNwayw2gdg5HjR1qmdgf2jizwk4YTg1YgCeE4ByRG",
  "key28": "2TgJZxLsmk3UnuzzAASqCym59m3modx4qJmhpggczhMp3vdA2qtUoR4ffzfYmcq1rpiTTgsUbvkTJuBX8HQDeGxu",
  "key29": "5LLCfjbw8CWyRoBW6tDSsdmg69Gy58MHqDokK16n14BSbz2EUbBsEUyRm92UczrDct13h6iSPHXs6JAMmwPpLArn",
  "key30": "2w69FrjUwuAzuMUwoTZpTgargAtQuvfR4qNvv9wgr7HY64XeQqGK9EYSf5zbPXw8HpkL6my9CLikP4ZGpTSc1Jbz"
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
