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
    "2X1mV46mu2HTCpM2HHAvg4ZTFzboxiPQgw7EHtsbLJ4c5P2pG4wWS65zMSws3sym2pNYrnkuHefyczjAnysdLWts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hccN95mNftXgSEoytrWps8Kt49XyxxheehUfVWPN66avs7bcyKrMANC9Q62gvFrhY3K83ahvpTu8JFxpU2dek5L",
  "key1": "ESYoAhk5S2NHVZ2ELf3gtJkQ61RvDcfpApRMS98HiHPAChuxwrbH5T5LF3fC7h8RQ1GvqTeXLagFGig46XYSEiz",
  "key2": "3HABW9FvEzmcGYsxzRtooynB3UiTWPZr4e8Xxf4G8KwcdpZnw8zFnwuiqtsofo11ffUMHAjUzHhSgWNago6gAUVb",
  "key3": "3JJLrZiLNf4h8riPonN6u5rYkziaQa41E2UfJ1qk2i5dPqjYzpSeZpiQvh9Mdk7wQyba3DCnxBVJKAkDNvsmbdA8",
  "key4": "5KpMqLHvkBocQHktbKX4mi8p7DLvyZoN9K8LD4p9ccVhTh7AG8i8gi7fV9s7FAMoRN1CT9aE8ViFDxVfLy7HbXiL",
  "key5": "4jugTUDaA1yEhWr6WV43agPe7aj5dbxyFKRbMQKMYRpDvy7CEmuhZoRGbk1Sj87mxB5vbAtmStDLrfMTmHDqMrTj",
  "key6": "weiGWM4Su3u4miBCdNNkYommCzD9Vho9nRK1FNowD7UgmyBMPp9B8w3eyooyV4MDvJSFbSQtSf4FhKkLVBwZy3N",
  "key7": "hHJgVenZM6oATEgtRAop87ZyjhxBxCPirxUrFtYCHQChVUjYQM7rMAGmAGUD8uMkuUM1R6LYBRsjyW4XWfKzuBe",
  "key8": "2BsBKemqa41BBU2ZXkkzRhEbozv7byXAjWGGMzskBJdvkM2yX9XCHYUvWFFPpSvPWkMM3MdYh9r5NTfD4Zgg2Lt8",
  "key9": "36drjRzEGfxgzB8KU17VakEJC2DsMkK2KubPDuDPmTbaEX1izK4n7kVWwcMCL5jxS9bjgw58kn5FsWCwLJT6kfc5",
  "key10": "5oqTqeB3v4BogUkt9MiHn6BDvFRymt7W3ee9Jx3jbrY3tWGwpbC7Lvtz1pv8hZRBY5apuWgiP8fXojmBpczmpbrK",
  "key11": "3H9c51VUi3hCJzgVaqiywx18mspk8eYoEa2nmnqK2uNHw3FxJj7imBnGZoG8EUrztvHBZx8DvhexaMdo1Hm2PU3A",
  "key12": "4HVNoYshKctxttxgkyo6RqzDwpSTEffBXKGBSWpD2WLbCJdHd3uzE6Ckg764H9tKzkejm3pN6Z821pviC7tMtHbY",
  "key13": "5R8WWt3oNQLED1iQEWTbQRQXs4LkAvyRSXHyr7mj3uPNpvWMxXb5YzxRsZNyxkAVNGKtZYBLCfoHd61AWUvnCSV7",
  "key14": "4F7XKjDxecxQXZpBwcZZoYugyY78HUur3V4LAEunkkhgVeBV2gBLYvHK7rxWBxcbxb1kk5sRxzpNiqDWXKozAAgT",
  "key15": "4GmMLykwafXksXHkAMUJY4bKpTL5Suh1DG18YoCfbv4MkJ5o64RHHyHLvuRHJyB74sCamjHfGPdkrSLYtr28xez1",
  "key16": "47obwsgHwhrfjpQuQbiu54QtyW74crVM6VBD8e3e2MA6ZujzNsJqcR2WyF89SN4NoJ3F4gp6SgUypUUcutm7RzGt",
  "key17": "2S84EuvYMs6Th98gRRWZufuFG4s2nnXN2neUsCz5y9scoiVngEvqvTJpAek6QiRG2AckW5t6uoX29srtjf1JPSWX",
  "key18": "YHP9uohfL4xkBfhTpnF8VcAapmqR7ZAmGhzbRwNFguUKEWbndvCiWA6D1cKxfVmXaW8ot5r1CW6XU2jnonekVKQ",
  "key19": "5aLQQFncjxK2wo9qwnVcZz2N1zpv3zubZ3fJP9F793FAPzuvFBKJra17mkkyAaAzZbYubKhxiXZHSHGZwkHGVV75",
  "key20": "5NNQWYpUkfm6aBKmCwoWNddSB4RXxz3rPQz2mKZm7emmCoa1CEebNeakqucj4CLSbSte3c4i2VabQSyxgzrHtx1T",
  "key21": "4wtRvXZ1ph3vhxJSsRA7Cvq9ADSarzQZSjPD1gNXdNiBb2vZYbt74EWM18P4HweUBotJfc8xmmttta2HJb7qbeyQ",
  "key22": "4agVBbV5PFBjxzLGZHW9a2z7U4wujzdTRUebBer59mThGPpUDERG4KGrhRT5BGDLdaaf6Bsx7isHZUCNmdFc526x",
  "key23": "w7tEidsWTrqgTusdSGSEtinrp3VRVbmBHT9347P3hh1CDzExdGcbL3137nFhtXLVyxwAA4LPMLcsZxDyHgGPi39",
  "key24": "2QqV4611Kr1HZsbP1hhJi5ixNENTTBZmKMReKVyKY6pJQtCA3HYFcrqwdqa41ENbEyFx4cvnqyFnj3Q3gPMMNBm9",
  "key25": "Gihn4dQeCKo17qMChPXAFQJK8TW1kbonSBzF4hUZpc5dEDG3v9nSTS7jZ7iNcN6BJef2NWN1yz6kU9fuXBowo9d",
  "key26": "5u1nCVemDqzGXtDPDjgkVrPEmadHGf7BcDmS8GpmSaDHWjcSjfS7L8A9rvqmrZ4r8radrFKVFRmQtLMmzYocyK5Z",
  "key27": "5Tjic7D5GMyJQkJ7tdNr78vNxEoE2jpoqyWsT5aQzB96fKKXaPaXs8diq3rmcPLdbwVrin6uFhDJ9qcvAW6UXJDr",
  "key28": "bc5AFz2oXMwuqh1L6xDdxWRhXZhiyH26gDJcs3kmX2a96aEtqYk6NhRMWC5eAXqJbKuZZmwzmBmtypu6c7rRPzT",
  "key29": "5t2CunwRqciFEdLoBnCTzQTXRbCuspa2hVibiWaiR91seT2XhGBmkdVL36NBqZHyg9P2WKoB2ZmaZTxb52EoNfAW",
  "key30": "4TBQRz8KeBZdKZnY17fqDSktyGBZz5hncN5516J6XaKaYcb6Q7daqbhWTPY6srRQfeEMQJFg1rUjLBBcg7ZyXafw",
  "key31": "36ehx9MGSyu2rabpV5HQ12x7xwXhm96tMi8sGhn74HerAzHDeP2tpqfqqKSx2x6WjsRLr9wFJMSrdiZnjasL2nCN",
  "key32": "uaNmRY56sZy9UujQJxwDq5hJ35obR2A4h9hz6Db97pAJc7ZScFuHz1oSDRrPGgwJz3wvuqv62z4tzmFR9kFvc88",
  "key33": "5EFJMTUx2nhMaPR2on9beQ3aDwbfdCzVEs6t2LKLvRn7Xr7jdDJf3KuWkHMPiUGe3eEGjLpoPGsFHKDV1L4cj2Fj",
  "key34": "dkPNNDSWCKpZDSXp1Po6MQD433cEuEyDxQS9hBM76RobHL7jGQwL8TkNm1KtbY5WpKcFL1sTTrRiLSgnbgogLzM",
  "key35": "5hqiK2x7RYruHwMuZK7q9WDgEYUT6j6XjFsVP4iKkcnHamc3ChJcBETwBj4pM5nKEKQTrYr2YgHXcZeYbCzPbDNJ",
  "key36": "27r3ihfcZ5QWPkrLDvmsTpnqeh2u7isvdjggkdWj4k7Fw4eU9EffLA33xsBxuxkMRcZB35Ht1g6CE1ZX7gvbSCPy",
  "key37": "UkhmQQzgGTMut6g8ucoHUjzPoHtCpWjp75N3kzyjxULtkp9wanCuekzVe7PYPq4pJw142Ws1VJroWqnkuyhkAXd",
  "key38": "fWHpfdDdVPMEMgaYjxZpHuLGzBEnEogafQ6WzE9pYXto1Q72mGoDKn82xnZFoW521uXvvBhFwB6w5MksUWX4TAE",
  "key39": "dAQi7MK6CprTRRy6hjAYJi8K2zKHpooJZjsaQvpGoGdtCPLcJMYFuiub4diupWt68buePfpNV54KZZ9Kd6wqTaS",
  "key40": "5dkPQ4JHrYtKhbeoFydnQUvV53Z5yEzk32NXVNkwRmqWZ9RTQo7rCp1kRL74eQYPpoyHZr8V5yxv3eqwv2w382Le",
  "key41": "F8HrWU4GteuhTei3dWiCxzJewdhQ92o1UihA1td38TN88UViKSEFQW4nQ73vqoMHWjdgqBBDQhNas38TEyUwYyW",
  "key42": "64R2pUFwFEgwdeofHtefFSMpSPGTibBrN9bJamCoDEXEdmWJTxQPU31ar24wT3ttWouaGKUa21iFwNaG53ShFxUK",
  "key43": "4Wm15EgtgyM1RT3zfbXpwz9wN6cSidP5XMUUuurv48My7fnnyoDRuzYxoQkUEVvkn3SzcVbXWGrpGUQvwAybb1Wi",
  "key44": "3diAypNva15E5ttoZ82CZU9mJRnkWofCffyY34irjWiDvPXRB9tgxz3B5zDzVVw9TaWYwhh8iSs4LgZ6pzmswWeX",
  "key45": "3ADMXz9uDKnW2qdUKHGqjJuH3AitmtWD7SUnUcTjpAdVquwXWjeytTteeqEnYLKezCK4fXFokvPpQfECwEuP4urJ",
  "key46": "5rpTGNDz9B6ce5pqmDUmNFAtn4NvhFfbex4ZnhcVb8EF1JhMjMYuKnRWkCKBnDCXEStfmkG1cdku6D7X5pdwrMFW",
  "key47": "39Vzb4YrDFb2LkSABYRZmuy4oKu3cayukaD9vNRVirWU8MmGto8bdJC8nKtLWw3HsC5YbkhNAi4NNBBMDNdUzpWU"
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
