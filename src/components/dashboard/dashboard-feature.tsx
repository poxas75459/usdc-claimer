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
    "2gE3CCr12NPAJ5DVPpMec9RU7zn2ZaXRLKAfd36cHcGCMQmqktWVpxF57Pae15PnFjDNJeTHWiPAFEqdCQLfdLUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nEEbz4VoGCKcU1xEJw8R36rx61nxgvw5RnuQrJAd84dUGNYLu4sAxjg33hvjLVqFwxPLMGwk7h6kqRiAYuP5aUB",
  "key1": "33QYqwT9WipVBiCVxop2ddv8LbapRVd2qEB642NneqT3Bi357KtX2qoAKsMEsY1w4XdXvGZ7FH4btJpYq8nzZDqJ",
  "key2": "3izBUUBe4iDC6bXkrqEbJ7y9BUMejgxxfCdNEmyqWsNFmzRxmG3W3chTAGQn5Jd8sWWQQskhH2c27HYxhJfLyqhp",
  "key3": "2aaANPojDY7p7u7LsB5Mu6WNGibDX6ZMvEZgW86ijQjHez2eCzGadjqZ3D1XoGmUzp9djG5QpHLdomBiDwKEdKfU",
  "key4": "4FbA3tVRLoWGxDeMYPamufQDiea9p5gEgyqqXawBXLzarbN2YqCfWXvW4CxoE68hJhWturM838c51KWKyGyPMh4c",
  "key5": "5168xGW1625gz8zJAMMa7ocKPCUHiuMpL561pqgtiCm1c5MXhrHXQ18hhW2STaxzhHSFNrdae6ceqYeFJRDq6cyD",
  "key6": "5ek1BDFcLkYMeCLEoAd6ezZtLANmjzni9oA24yDtVXxUKsPHg7fDiKzXosE1V3DTm4Hm7EpfG2YskPRB2SaKAxQg",
  "key7": "5S2EbyjqWTyMDEjbsjVJXMQFdpb12vvVTdRU9hCMhzGxwtYEsfgsz9qP8gitKnRQwidGkvzVBi5Scj5mnUX3zH4j",
  "key8": "3gZ96oL2bdcJBvECYJa2KSeeZ5tUWzgaKqGZwGzf9TFahqpxC9Sxm894ndeo3JuuTcQ13SHVP7HHu5476fgZobZw",
  "key9": "2xZNfjtTX7hYsDUpXiNwBXcWXoeVqJfy8rVLKnj2BoJgdkRZUEkuHX1uCterPYZZ7SGqho6zD3uBXjwFN9jHmGwD",
  "key10": "KbXTUqDYPjuSQdS2krAXr5RiCKs1zzgxQAb1pnCMNq8Vvfavvy9mUqAfgP5RDVNVMLoDjyvDNq8KFJGeXbpeRMP",
  "key11": "5jDtL23T3LxawMXTNPbb6sFaMch6PvbxejMq4DwAyLjThK1KjXEgUvEzecJgXjrKg187UKn7xWVRy1GzwqNPv9Na",
  "key12": "2TMBcQ73YUCvaRn4JzF3HTHWdAU4FT1mS2dcLtGN9D6mej8DPumHSRAfwjSFFRmPo6g7dPTL7G4mSv6kxCmCKmo6",
  "key13": "5A2pPdypy1JPczATPuEMX4H8zP5EpVsDtPoz4Yz1uPxNejtMCckLcKnxMcPvRACp7P9s1rrj5swH6GK1xuiU1NEP",
  "key14": "3ovgAs8BtwnbBvSwfnrdGYqmgLHa3aeKSkJXn1ZXp7nUC45zKuMYf7ehs8cPo3XaFgDrZ751x62yQRXJJf9Kbytc",
  "key15": "4VwXxbVXvr5PmHcEiKnidHNJ9ds5JBJMNGg1pt2kqZXmMdMDL2cAsR8JhZwjGenimeuoBotLj7ZoQe91joqjm6TQ",
  "key16": "5kgBFaUEXTRmxP71gUEM3X8qcPncXMYxvXKdzoybxEniiCwX99a1GxsX6rZNVySrYiCKDB9QgLKTNQ5rvFLCmBdu",
  "key17": "5K7KpTcxHAWVKkiU94WpTrmf4ywfvLGzKPhbJwSD9NxKHCb8JvCR2CTEu78XvdXppj2qDJmoAKqaUtATotnztz8G",
  "key18": "2F7RGr7wZmfEG4QkV2VUodAnrvf3WKN1zEVeAQYFHEAJKhBBEW7EL38MD5toJRN5XSFiaexuvVgJqwLrS8hSzGiv",
  "key19": "3TPQY4VqqBBYt5EQhWP5tQWjL3HDEsxGowfgs5v2Q13ZZDjhsMiEqGHqmLghEA2cGyzQ3ACqzYAztRH55bbVN6g1",
  "key20": "64gQvFV7FqJ4biEjpfRzP2HrJMhEugbVERnvZzdYWwPG8DFrqC1XajV5bAjVypjN328z7m6gcUYv4ffkGejErZSb",
  "key21": "55P7eaKHqtwUM8hN5HaiuvnMkPTFxaMremLtZcNzWV5sjxSUcy3fTFREfDczbHm5FgcQgeebqFv3y9xwRQ9eNAvm",
  "key22": "2hcgNGRgMs6we31TQ4engvk2foEDCK16cawkk1SN72GGe5jnH3WRKreCAXg5RgA3npTF5BLemuoqdJygb8C1F9Xv",
  "key23": "5QmcKr1WkAYntdt3519hBRpw8vEAJytMKrzgyJyLWWieqKDgoiZPwZ2HxtDzgKJwioDrZPJhRaDTZx3g25urFnxH",
  "key24": "4HsnujfwWYmyfhYTfhUo5azuLAhvWrBzU498Nb8VdAE8p5Lq33Jfv371dbdrWfsc2i7WBhVRngcpHAi7L8d4fFY7",
  "key25": "5Qgc6UGJjLYsai55zY3CRMsKduF1ZGKPgPHJhPYMHW1G4AXytr4daGtPsSBKKPGqYvEsqddMKzixTmcgiNEKhhcu",
  "key26": "pLSLdVrGur6xPXSVQPTCPuCL4sApDsUEdNzcz2EQD3mrphjbeVxiuV47aaTWW1vqWf4nHgborZZmbSsurzHMgeG",
  "key27": "47UfxrFjdasWzm1NakqEQ7mNPAbjVpApa5s1s9d6inAv53K8WSD4cDwtr1m5eg2E8fWdqh7vcuhjXdB3JgHtPhZ7",
  "key28": "4WvHm9e24HDBoeHywjAywcyNkdgttWxboV5bPhLGFyZSAuWSvwk23rSB8S1rKNEmpmdfHQ1QrJZpELzsz337Bhbq",
  "key29": "2dEUTBfYTW9SMx76VvvqcRRbT7epUfnELyvkRJQAaBVjGsvZHMPgKsAbjKU8hooyjFasDG1LnCzqZzyCch9E9RcH",
  "key30": "2bxCUutJg3p5NKtZCeCBVpYAnWwgehUksYDdFSGvia8HNafXH4uE4QVGLN8j1pu9nDed28eY6EUXCaK82KbnbgGs",
  "key31": "2z4jrDpTcLRPf6rzcbXSi9guRV12RdqoTyemVTP97qChyNAnDkwvERNpeWzT6vXyQ81y9hfkrWnjV6K8Qdn1gfg1",
  "key32": "mxHV1zCaaXKngksFXFk7nHgKU2dVQPzCwzABNcLnzwbxwEiUNsjM1TkC3arJLyE1NPC5MNpQKJSC92Dc2UPrFr6",
  "key33": "5LVWE1yRuZJnZEyAGE88XE5HifcmqCNk85vN43mJt1V2wuBDHvqtW7a1J6xcCqe8sAy6JLnPx17u9dm3FKUHd2Gn",
  "key34": "3uym2uKrULQkHVu5BU5d5PvpNLLAoKSRxKAzy5pS8M879wZwPL5DQP47eFF6vJ5fnS5PwNmEBvcssngx1yezwjPx",
  "key35": "4mgdFowNK2rHvNoZj32Kmx2GedsbgoSbzKZ9875yjdRePY5Sy5Pgb7HiJykgF8Q1YLsUuWRPDpbCHU3xv8JpBwi9",
  "key36": "hnxiLj7AjgW1PvpjrGwYK8U4cW39x5d4LH8z4H79uWpfDTokQ77HaZBXVMK58wsHjYbfvNGcSPRDkv79WU7FzGD",
  "key37": "hbKu33qEGj9Zc39qww92GWmypu4QxsTKkynNos9xgLtNvZk7iMcXXegJYpzpaBgZQTA5rNqx8LUCC5DwXDb7zcS",
  "key38": "3v8Gy4h2ELzwvhVe3Kuvmh7F4G6jujsYr5CVMXQMQJvQ6PVecQDj7vHJvsbFYW51H3PbSiXwGQVAWkTLi7UBZhex",
  "key39": "2J5xrWGMozAiNJrFCh7Awu7HFBCWCPUDxMTY1m2deqAM5n7QtfQjnr8GDZn7oSexCfEnmcNfq3UaenbLsegzsmPj",
  "key40": "2HCi4xmropwPjJxfEXM8ziekF6zrwXiNsuJeQSQCZG7zRWU4FCsW1Nt74pFS7ZHQbwMFJfPMwL278WzWcige8k3n",
  "key41": "62rRyp6SjrYWVHzbE7iUcnMhztaEa4n4uA3ysLRy1RatkeSz99mXukkR2V9WKd8JMvTJRhgFh5DFFMM8R7X8fYLU",
  "key42": "5TDipm7X33oxz2mZFzY1LtNjonDKqZR7nQ6hn1owRozU8eAr9ddG88Sgg2CRY2A2pbMbvkHssj1p8WcXF6BtH5zX",
  "key43": "KsiJBHGwZtJzKdwQwTfnhMnJi1vdNP2yQ6wbRCwZVxcA9Vix23uGd9xYY4SSr4uuxeQWd7Q1HCNzMSWaHwWYf9D",
  "key44": "29HwKGjPyaWrchnLq3S8Gkm5hVNH8z3g4x56G8dFQbnca5ji2gcCmjAvXWMf2vGwjW5NcQSXYypFFP1xSG3xEFKQ",
  "key45": "4n3ofBAD9GxUzAs2VcC6o32moiSnFjE5nKqJ4GjWxcg16wv28WCs4ncXJfN4pwckaRJ5BFf9pru2XAQ6MtWMBNLV",
  "key46": "5vJ1eDtGStZTJMv6qFceEJfRiRDWDGV1yz5Fjhz2uM9oa5XEVVfnmzEst6omeezLPx6MkSdjKx7ha3Qzk1zkXwgy",
  "key47": "626SQEfti2qhb9UbExw2GBnD8U3ScgH64nF73XDGrEZ4CWWyYbmvJL4LYkPLEahMAGtexp297o58z95y6dddt8hD",
  "key48": "5taVQgPKb5SKbx52UdQA3aMWghX28zm26tpswDriX1GH6k6AGECkyYjr6Wsp3acvYm8xkAB3SptfkobAvZzyddzT",
  "key49": "5jSDk43g65PeV7gXXWP5kEdGo6Aqi1LzoLEX98dpj8jUcWUJ5M38SZ8hgHxUERKdEgxyehr3tLNMJpu8RFPywevT"
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
