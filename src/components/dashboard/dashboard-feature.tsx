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
    "2Pt4hXPSfzQRmEMAkejF9BXUppRE15SMKGeB8n31LthoQm53SKj5hLqrCAqtbevmRfh9knDdJZU34VybmEbCsVq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NmAsQ59iHPJbiVUg3GTm7bcC9ZUNS8PSpc651m2H76wanm7L22acA1vL9xt97SerUFhDT6awzYb7wY2EVrcD2Ua",
  "key1": "5XHT7WqK3fsAfABBfY5gpKduV1ArgkXktwUkuNWJXo2urnmkRu8K5hm9JuiBMJyxHEEH6yFYwyyy1CmJ8V7aGNHU",
  "key2": "5of28ERsdgCViZksWZZdVDmNmjSHwCNXE7UhbJXv5qao99H6vo3NvYC55nVX8Jc61nJ9n9kNPQ4qJPHj27Z5AwoW",
  "key3": "36JYufjsDnY7ZkQEBFcHxtCkUS3qYRjVZ2gqZNnt73BgsudF9AmGxvqo9TRu1Pq1SjdcsbvDt3LqZahK63dn9rjS",
  "key4": "5nB7EritNsmMLX7t4z3gLnEs12yTmHspMiKZ8kbLuUdRgNehfN6155qyoEhSnwfBKji3qGxTaMK52rNiUhoMv8US",
  "key5": "48cyv2rb2r5qwsmiXAW8wRP9REk6JgN4fjEfZMpw4Eummuq1Pdw1SP4eGC7BV27xsbkJNkuEqGQ4B2JvuJ4xEP11",
  "key6": "yf828X8yYVaX8XDhkDJQNaRxz9aFrPrFMoYkZQvnapHUZ95ZbmStrPYdrh3vQd3cEvFxo1XHUsoM7KGvU4EpTj6",
  "key7": "4t8HZi9ggocAayHc9se9DJeNBN3eGbQF3BpsQLmCruai5e3BbHUDU7mRvyNNJXjxFWPRz3bm19fuqZNLadtGmjcZ",
  "key8": "64kW2p5UqpdzBdehRuF3WE8PbcfphaqpGivUWtiqjQpjpYkP5XPkWySgQ2FGRnSPq7GfbhP74GDF7ZECCzpg2C5Q",
  "key9": "489tRh7LcRAhvC8hnucCvbvgS1n7fCUgfgovATQeZYLN6Edm7f2xUxS2fHaJwiGZ6BrKyuDeRtXUki7aVW9myqZB",
  "key10": "5jRUFhunssJTPvCh1PGxjNAAvZoYWBmoBQVVDSSLrf3KRpWEZbpboJpvjKXi76d1EUcnqB4g85qpjQs797aSyGVd",
  "key11": "4bGFmspoCV5tyo3GdcHUkkB5X1CtqC8sZjgZ9M8HnHDjvdH3n6iruWbMWGHhdzgPY92AreAgMjJCHzNhV6YDaFUc",
  "key12": "28xcjRKyHfxWLBkr79F2QL3fisia5ALpa8ignMgNYwbE865MGfmZuTUqH7h5wqGKiCc3VznsgD8ztxnU3GgZBDqY",
  "key13": "5GKGAAw2xq9VdSyQe6UJ4pCJLL6L93S4DPnK5PUmrkJ7V9TAB6dAX6G4xJ6sxYH3xkqwPbpnGBmBSLfNEeKeKBpc",
  "key14": "4nK1q1XXginTtDKhTjEe1gxB6oKZFTNz4d9CPM4kJF2rv6rhb877cc52i1UiVHvWxVWm41R6TPFGyH4DWZEos2yX",
  "key15": "3RY1zmyC1h7RtqpgHVPXW3GMkSUkKY48La4WySXFmGrvswuLwJt1iASbVhVRn6Ws6fajrMrQLUxzjdt2hKki5mo9",
  "key16": "5xFbVBKmSjQeYvvbnmgTNmwTmofh3hthz7KEL4FrSqsEmVTvHbdWZNUJbff8AriEW1RTLKr4U6y2p6DT5M1GiT5y",
  "key17": "HMuXmmqegcYTUXf8F3ut8JPEg8VFvitJTZXajWg49zGVLGKt7gAH8SN8F7BQ5AX58Ei1MAZ2PwTwuwSsMzKrVjm",
  "key18": "5HSvScYKu3R4JAmuUG9bRJS73BU8StsNTUr8w59rNmP9MU1Viij74Hr2i1oWyGzEhPVLNmFiUaxfsiUy52ABd6mm",
  "key19": "2aBH1AZFfQEVVTTbXZQpKGHUA6cJTZCMPYkQGmhAbbDZK5WgGtGp2qtUk5UHvGvZLMySGD8uCufihzx7irqXfkn1",
  "key20": "3kRc26Pbv9sBu4oRrTcsp1FzKUBkaSYwKpP2GuGuGgaTMKYEcfWLXFKnwSt6SktySJQhu8UAHmttYBpQQm8Dzi2w",
  "key21": "2WufszPsDwdS817381JbMC1j54RukCEdJ6S8NA7HuJM4RF5HaLS4EoEa8NMMYA9qtucJVzEoRbw57v3TBNsgbejd",
  "key22": "2EGiudKfrd8oxdnTVk6AvnjEfrP3hNg9hhuEytqdTzRRxH137CNX6kjDo6qAHGo5w2SpkqvvT5zhpu8kxTkqP8LR",
  "key23": "54HnrbTnwjb4KQDx4eVkwBdDR4hHRaj5NDC8VSuU5WF1gkfxrtnv7qcbHvSbqTfvyuQwY29CiBD216BwpLmcVn2V",
  "key24": "5jeVFgiRgUXWCV6MAZpLJErmkvwS21XgsW1h2W8LfxA7g24H63Vq9S87RQrCmX6FG8koMLCFU56o9KG7r21aMGZL",
  "key25": "5gGPxLSG8iegqKjUFqXTvkLSNLtagcnRPG6phuWm29xTS1hHfjmmWd4Ey6LSdF7WdEakYywKGNsP43KVTmym9dbc",
  "key26": "4kExgu2AQo95drHtNX24wwbfwgUpyUoN5GCmuvbcRzHAoRHhKmgtDLkcnKDFf348R1Eu4uvRE6AJVC7HD35NatfL",
  "key27": "5sMVN7H8spKuaJBBsQu51a2BhtsA3hLdc1mcJmKCgCra9oRfpwenPjrAqV7fk34SgwSJzQGygev766ebcayKKAW8",
  "key28": "15PmT1SxCm871mZhVWhUZgmd21UvJDJvNGFffsuFZPbvdixwvrcQJcnkfJXorVtVbE89UrLKCPzTbn3pvntnbmd",
  "key29": "5CdCY8AREEyNeWXT3Q7PxCR8439eyWjaZw8QNBnjDBLEXvo8Uc1Hkb3cxae5ZyHYrU2c7mjP2Km44Q4eiK8swQa5",
  "key30": "2s5rkQ43ZAC4nwe93k2mxaAq5xhbGigbYDU9iWtw8i36yQ817KoMFQqE5nYn2ffX3aNVGS2rU3BGFVUkiGueSzNP",
  "key31": "fvKHS7fojtmC9VGsUGbcKhLFwZ2um8VX5oLrXWw7qsiZ1YgYGme4fQwDnZE1HXk6Hi9diHfLzYD88BdnDhyVhqa",
  "key32": "ufjRw2fg7AkZti6fknUBXFC1Kk8c7Ts9cN8oh8WaFSNVWnCYQeu6iNzAenRoREKNsP19baPUMKf2Ngsnrczj6Tk",
  "key33": "21uLtbqWNrfhREoL9kq2tXy8D8CmpXdSVvDGy4wixf9cgvqrUGD5VYomMNB3LYonJo5NMV8EXh9eqqS5tbuAVgwX",
  "key34": "4J6gvvtn6iiSbQgsQiZjB998Xmr4jkVSJwC1JKGM1WD7Ehg7LGLtcCHgt2pVZK6WMJ8tcXitnpHUA1fZxG2FPtvh",
  "key35": "3MCqYBEZ5EgLN7qNSusKhFTP25iv4GLPhDoNqSCRveEnNUfQjRXb4JHCYLb8seorEQSpt2dMwW7Wecimk1J2Ri8C",
  "key36": "YEKMhnd6deUsS5HEdt7D76rNWz7hdMq6CubUNe4AjVcTmDgCH3Ci6R4vc15vGftVfRFcKGcaHK5F8x32f5M7EJJ",
  "key37": "4U3UvuzuxpuFsgrGFs6ELpo6QdLJwwghVv1vUCeCZVWft3FcscSQXHvw7SA3wnqnsu8Xx5ivYitWwQeo4p2RXXj9",
  "key38": "5KStmjoR1vif22jZXSoYLtEdHyPzZN2xQYS96kBaRoUjwV9j1eFjFFp8e6YT3FC9T9fXGnPTMCKUJCizgeHAST9v",
  "key39": "5gPPjuSgR64tv2AWLH2dgU9HvFoLbravLrTM1W5k4N2srBEBJrB5dqDSAQYZxwL1JhbhJW6CAoYziNtPDjyRz3nj",
  "key40": "5cbvwBMMEpbLYfbQJoE4mpXcPBhkvb2qtBTDojHBt7q8gwm3GBDuFbzjLjgrFSLFe2D6Fi1PgkbizpyfxBroxw3p",
  "key41": "2uKvYtJwfyityn3FmkmdfLUU7TPgpJ1MM5p8XDFyuCUMQr8U25E4nYYm2JnDc1Gegchu42yQehQpPQHywbtD231G",
  "key42": "2qazdBkPwK9sPAkf1ecXVu35Up4LCJaE8RKWf5Gy9BbpKJFq11herhKZf28EirXH1ViySrB84xb6v28VbLznYX6h",
  "key43": "5Posvrou14NNH5RgeD8xs3EgAkjYTdyEEeHifdBfBMLbK7p81y6dCmkUGeifQoCu7A9f1z7MHKjxwyu3UpBtL3u6",
  "key44": "4BkTWWeFRV62chMjAPvZonMRGnxRkPZZGwAmH33t4UcPt4k9VLWpHBPpqksfVA2xwFjbahJCQtiF5PmGsQJBugjE",
  "key45": "3iraNswGim42FQap26xUx2hWZFTBf7qAdKq6gXtFw1QQRMmhtX16WEXxGemk3pz3hKGxesaZgXXGZy7sLSUq3m9C",
  "key46": "3CRL7GU6GYJBXFm5NiC6B2yTDVLMjT7xExDETXwtavG6FBHNHFsHsLSF5zDvt1P2Z8CHkMJ8wCFR7CLELUjiZvGz",
  "key47": "5zWwC2MbEMstkeJjf3o63Y1LNqeX8Q8naBCdZ1bBw69J9PhaVnoS5y4TUC7brY4EAmRZ6eVs3LPRWaKqcWx2Boxr"
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
