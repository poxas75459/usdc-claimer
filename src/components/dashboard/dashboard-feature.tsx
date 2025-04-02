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
    "3tNifcEqQMQpW6NpTP8wU96kXJ83yEhFnWkczX6MFdTeaZRVKHfnDFnNjdMxdwFDccmrDBX2aRpbujyqwr2SFT5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zndaGJBTQutCHk9sxB9vTrRs817VWnntQVjc8ykjNc6N8ePMeLm66HQ3z6R3wydSQ6WhqxioJ6Jw3p2dNrNyZDd",
  "key1": "7H7HifuNmNbghXP3cWP9Cb6r3XiuQ7Z74SuoHzce5U46wjZKhmo4z8pZBkJ8W238JWhFbL113NHqSzUhDPToYjt",
  "key2": "25jvY6WGKCaA2zmESL9FyxE5LknYuRKxPts7urrcM9Zo1oHnQMopmZHFSoyAVAu3xwtgkvNJCBdD5G8LrD5ANrCV",
  "key3": "9E53Sw9me2Pbyok8qcFKDa7JVNbBepWKPTTYuTghgAuqwmAKqX3Qf4dcf6hYXvMcALsq6nQaYs9MPuu4pDCy5bf",
  "key4": "22nJ8WPNYjDJTywcVBehAz9s899XZqq5YwmT6UARyWHH9648aPr6J39gatPGEHvpmNbxuRspt1MZCgcpUWHqt2Ne",
  "key5": "2f1EyVzRWQhN2sPFWJV1ma9WfoWmjVHoRNwDhtq2KaVJmcAD4hKGirQbuV62heLa6AqzEyZ1KVXj8e8fhKx19jeu",
  "key6": "2EAMm8qW66J3wbHg99DmKTs3UR7kDumX1oW5RA83VbFKpHhPPxtSRozH1K2243QVvni1mHyh4bbowdzzwpPVFDfh",
  "key7": "5atYBZcVqDtztsjQPjGyQaZwND61QC3E2Ew7m9RNF2jnGvreB2xyCN1WzuSvXuzWWyyuSQTSKPvciKbSscw12G4W",
  "key8": "4YEeLJ5c9Uuw9ety162TRJ6H9ty7rMcrT43DM4nV4MBkLQZN7GiJXbnfTSTZEwr9F7zmSNz2AZx7yhQ4T6XZSAWn",
  "key9": "22QVETvYTNVfwBTBe3azv984Ye1DqyngBVEaxLJj681g5Q6wgcwhuWpJjFqbLHjpYDs67hR9mk9zaEXnZz5d16cx",
  "key10": "2Xc41FLWiWzXfLNJMjmVrTxFL2DCqZ7khbdc4Y2BRwfpfZvhSFq2JvuxkECUNiMXsfV4HCkwAgCkUu7VeZyMtf9V",
  "key11": "2p8yohG339sNuVZmiffcYZV2oKFWisDuzpAZZnpTeMv5rgmC7MDttoUpi3fboMtCw64KeF9dwyJtnjC5H7Y1d7G5",
  "key12": "2L5PxgyhAxwzAkCSXxwQn2dVssVBWc5TNzzn1FHFXRsNuCEWWPSq6FdPRb8cwoMd7DGSMoMUGSuMLrhvmWAt3fLy",
  "key13": "tJpyKXwMYZMjWS1tmMo32Zmt8KCt8JgiF968vR3LRbS96upne3kYaYx5qnGwCBcFHH3utpiwDQd17WHpuS6UqKH",
  "key14": "2EgMffiNkBQe7Gbaf3EYFucGA1c6GWLj698iesVdQGjeB3Sg5P5D6MoJC8nmV8okdqGG5VCtrStvnnKBQR9tpgch",
  "key15": "8LVJBpURNai8rS9TCPf4vafbJtX3yFjNhyeCNyAxKpKCk1m5cNUvp3wtsBjMDYq9oyEE4jr8mixCNfW1sCPBMYb",
  "key16": "5Q5c2Z6erDYwxwfyfNaD1Gpe87xh3HBr6BsDyshAaSMQ6pr2r69v9ykVnpyHHQuwEBKjN79LQHS7vspCNDwJ9MGC",
  "key17": "21H7mr6ojuGWn8ZvAkfL45TKgyAX1vQ45crbiHUiqZyAYPN1gtjDbQNxDrbJjCAPdU1oRYs8uWXoEkHsSxWpAbAf",
  "key18": "2SrdZNQErkx23KSuc3D4knx8xAg7GA73o3rfPue21WhDpkANaFVCPHQVDK2B652m99uQLr4aJSMSkUNv1pzh9qww",
  "key19": "c1FhawcoJJvu6pV6C4eDDpTGV7cpv12oubow5sgbQqzdPPUGPyr4tSVB9pn43YCxAB1GdfbVRspN5yDMcGLK1qW",
  "key20": "2P225oW2tnULqNmQPrVV834katYB28J7eVWYeTbXB23qXkF5wcyon5URYwpVfJUzgCfJJCgqij88dfBbc5sU5ER9",
  "key21": "awEV5sKkiJXKR9iuuybWz5z1HGsugJKmDBW2enYH3zVYgARPD32c1QMk5uZv7SXEcRpxx6DshwuhqNkUkGN8NAd",
  "key22": "2Kjyp8DHihwJbcc8HfyLbGx3CVXAsyk4E8VBE2kNUUtYVvSjaKQQmyiE7aPaVcr3iEpBXPtg7kyMfncuMQVGpjYr",
  "key23": "5Lx351o98C8nmq5RZhzpGfd85TRmQtvQiCWVVs2Gkn9vUzY13N99HAG8AaM6AQZbYBotGu1KS5TNeikGa42ru1LT",
  "key24": "2PCpAHk2NFweQ5syjQiUnsAN4SV9SwVSANRrKtnaKQ3ANUYQYWGETrgRHiYBn5Qrawqft5hw2Hec7k5ziEgxncbg",
  "key25": "uS1P7XKEDkJFPxS7GGPszVjvovf5ucZHAAdLwyffnKm69BDULV4H275tPZM8my7dLq19NCCQ8dCQoa2N4uroBw2",
  "key26": "w4JKX6SayV5cQa1nnK5qFERxHqpWptuSW38Ta7uTjCi9JBKP3M6712rnawr6bqqkXZ9xUUk1jDSsGa8Yw8Usve1",
  "key27": "54uDpg9fM3LMgoNLnUVxhSw5NFVNpcWaZHo6VVMJzyvjfvQGC1dgvhaHsN6GoFio81b9q5cHTFUYU2AcUwHLuGRT",
  "key28": "33BgN4FNvLo39TV7dW48L8eUtv12XBPgufKpKeUKofMeNNfzX6gWmVNXoCwYxAervPVV1siz7UXFN1BUHwBN2vG6",
  "key29": "3hKtWsojHAABsSpjH8eiz7YA4DQUrqzibWwvpP3Qp9ESEXq6W5uAgYhKkRo3pC6Abm2FSZFwcaa8sR8nre2GHmHU",
  "key30": "5e9DtMyyCNUFN97qiCb9ET14eqyzRCw9hGSDHn9qmWnp5PZfdqg65PMYXtZjAevpPqzSGyrBtMtbUXtj8LHbknRy",
  "key31": "kQtt11j4SXeEDwdhvzrUcR3eaSdG5B2FJaLTaiyUF75hikdASmQBfWNW39crJoFJ8okGc3LgUynmo8LaWC7bNzf",
  "key32": "3Ripbr7wk5WgLTXs9ZuhLPiiKtBN5vDcFbY9mpUEqm59XnWyKpkMxEWQB2bpbELxHsT9UcvAToAMCmqBDvcJA88T",
  "key33": "3mpQciCPFehPvKKLqhGDLFuAjRJVjtYYKMgMSdNYpMBgT61PZuH6okNKrgE4go2MULNoFwfnLKhYW4W1vebtZ1Tu",
  "key34": "5VUJ6DERaLdbiKCzQKjgna82iC8HLJkQVLkGE2Mg3mEKbKeZneMU1QMUoFSAYZ5WsdEbFje6shxL3f29kWXanrK2",
  "key35": "bKbZSfHmwWQqqeEWgEADiPwJvdn8JnNgd1Jm4JY9YzjDh1QqPfXcGh9SeaWwuAzBJpiiEQwpaP5VPbBxZvABKqS",
  "key36": "22596VvMDkZZPqoW4XiQ3VzknfdMNcejFx4WCWTZEm6s36LKh266KLjn9Z3edR5vkkANMpiUWhNZZUVpCthFNhGh",
  "key37": "2ZARu7GqmaT3c56Zted3q7jnux5KTNtWRceusSNNUssrebRStNcwa58Q2jm1ERQ1VZc3kuqfZWDEURGB2cDkwKi",
  "key38": "W9E596KxbYDqUGwEpL7mRWc9crZJaqT1joWVd5fFZmABQ9pZZN6yYq7uiPbKhGk3ChEJqQVMfwGH1iwsji47qVE",
  "key39": "2jNtquhu43322qTKxqXajUE65L3s4phDW9Jr3aTX7dQXLmqo5SsWLZFJEgQShBcNPLLriFKHCoA9Lro86wPWTqa7",
  "key40": "BvsLor1uhQJvqUPTrYmn3KQ9tBmXMJFPCcq4CaQbSAYzmAwVsrr1tcixZbksCHSbGKhG5Px5JiWSsCK8xBbWdv9",
  "key41": "4uefLDVyn8M8o7nCSbDVJNjSfG4XM1cLPqcgoTkrW1eQ8xd6Ep9gZhkZZkeUHuTbccScVwi1G1tnNAvughTKe2Dx",
  "key42": "2sXnD7Wk67Ks4M2jNTmiFUn7w94KbLkUbBhsTe1YNqbCBnFQ25cgwvRfwzmdmFKHRbGt9FGPtBEjGjefGwUDMGdf",
  "key43": "4v4AXuJsiAMPzV9CaZLbea8QgXD1BrgyEqvxFHALqintQcCsw2Bm6x1etdj7n2Ud4G2uRaTyWRrdNV4dq8ip64RS",
  "key44": "3ZDn91d9CvYejmZrUyLZrinP3JUeDpnjpCShLHuEk99HtmtSdQbomr5eUGXHqN4mYK7CHEEwsMcPfLLvb4Zod56p",
  "key45": "2dw7EbSam5Kw9eWbpyuQqQEZm67w3qDoZCtz6CGxtwDCCyuCiJUaao4m87Sd3Poi6hoJTGkWkJ5kyiVarwnuqqCS",
  "key46": "5uugZDMXSJau4FmRPBxbNhY1TFVL4uKcBfGZ8bnPvZvAYUzVsdav54xe53AYpwnV3GJ49CHZNosQYn3NhwU4TJ7t",
  "key47": "5spBM8kv7YkRxHmrNRcMum9a5Uoa8za4djbPtY1WG6TYFHcoKnxeAyN6uBKC1vnBpdfXXHX34144XHuqGLWtmyXj",
  "key48": "5csX4Vphv6x4pqCsMnbh4gDu6uPtkrpXcvGUBfYLV82c8CiYXmAzTkDuczyEj783rawcns3gvAZvkwZobD9K67Ty",
  "key49": "5KzycUqcgAkZqF2XiV4oDKL6qYWwkG1gfG9W9ynHzvwDNhggWVXFUimLHHGqUfYxF3KczuiMWACag3W2NT7TxvJs"
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
