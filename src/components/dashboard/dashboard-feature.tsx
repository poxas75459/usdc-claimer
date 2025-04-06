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
    "2iZ7sQ6tQtMfpf8vVrAk3eHGqAbhDsWr1amEAEF9zTSa2SNcSJXKe6LQ8wrP3P5UWA4Dbidms4guKbMWXKbB2SBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RVqZnksEavrx4oocDr1qeCfmnJsN4YU778ikMsLmyEQLBugSYNaEwMwjN2oeUyHXvgzGAkH8539AoM46982pL4r",
  "key1": "4kqwDUFxZN4Wckpx3VbxNjjVa9PEQC2fgyPn8guoh3mbxZW2rkMr46yV4pmchHBa6VjReAENYQRoWJuJuNE4oRtW",
  "key2": "VemxhzQMybAR7UrUpVXkNkKTtJeiuFUXvJhhyA27M661m4yezYnNSr9aNuGXvqqeiLAHfAdfuviR5rxTxhr459H",
  "key3": "2y32a7EHs2aZMNgKaM1KMJQ4rDCmECkx3PZMsbG1tmEahg9r8W73HwX7p2pZZuX9gHvwJ75JqoCThZQDj8bGDaDT",
  "key4": "4U1HKXjqQdqBKxw5qcipziz4yLdSsdChn7fMQeEBMz7uJNL67a3WoBqMaCBZmjR4xQNJB921fb25hZMn7sFxsdb1",
  "key5": "5nDsoDisjTcJkZq3JoiQ55LVWfG49TXznBokF64yRqqcLkr1q9WXsvFRLYKaRSwuAbCiENpjP6dM2X7pgXjSb12A",
  "key6": "3aFiccAecpYH52KzkHruRPPRoNscvPp4sv49KJNBMJquMAJPAGGE157XmDd6USY1kW6TExNxK5dS9heySC6zCwog",
  "key7": "2EHoA3RFYSk3hhgnB6dnfx8PTZXu1ukZSinfEKbowwXiWqxTwcRANfeyS3pxBaorvuAYecpcWLLFYa35qYTnzHv4",
  "key8": "AAJWv8snJC9m4xhoJNQn38EcN1BrDK45JuD2Y9H3NXv8QdBw2RGyjQyDyufjTipcYsZCXzJ4b1kDZEHnYa14LkC",
  "key9": "5MCCD8XCp6DFHAjgqT9KiL7xghPovMB1tBm5zwJKkaGmE7HbaW9TfTpsMRDDYSwrhjKuVNpVAFP5Tz5pP2upFJEb",
  "key10": "3PvvcNKUKNRHuSAvWH646Cb3fJnnbyxK1k8zd29cbtucRprKcR1XjsSemFmZsdncgDUpgqSMZzSaKyfJBdWkYLAC",
  "key11": "5ff3ME2cJFLAg5CzZng3BP7wKy75f6svfUpDsKkrYBRdVr4QrQUDJ4x8ozCek1Pn8f4tft5c3HkY5GF5uYzZm9i1",
  "key12": "3EbRbYAyAWAuhdpYcEXPvjvgG4XJtJmP3Qw5FH7WxvhSuyFwAW95phy7PFVVNGGL15Ymw2FUyZ4kQRB23yJmcAwH",
  "key13": "dW61Pi9dxmKxRGygXs9wtWo9bGVK9z8zJCjV2aNpkdtwHSYhR9WT9xudYNN8fqSndjxUzSkXJsqpoSuEs1Nv6PN",
  "key14": "3Zdeu6XPN7Qjzbf8d2QD4qq53uyb8Fp4ExodksDA5eBaYz78MzmUW4mXfmJm9q9ceLSjiLS4ZnNTsvAMzv3xnQ6E",
  "key15": "678aF39ogfKA9wLKmdCkn11azsD653RWsuLVWVzW6vzytWbP6cHGmubpFssujZrJ2auQmMDfLoiRHpHF8VZuuj5R",
  "key16": "4uvoH6JrRfkkHcdZivBfph8FQhhfDUCcNr6ptvUYSvGfniCMFdCQbD4eMkDSSiHhmEsKsXHpPtmYX6tqEQQbtWGZ",
  "key17": "2Cckef6P5MYhaSnHT28EDf8Zd8tmW1KZqDQNFwFLb2oMP3poaWBbkKqk5eUeSZGNi9bdZKF6n7Z1sB5KTd4xvYCy",
  "key18": "328GwXkxaMxHT66MEruBwkWwBjmMSQouhmh21kQi1ZvzZTPnEoKq8bQZRYC9P6oHMjTtV1oBz2vCujqHsHfu3BgU",
  "key19": "43eMTE47CPtVUKuDM3Sm9CyANQjut7knPeXkQgmVogXXFmzGbDkCHEN6sxUGEN9Z4STF5TF5vW2c1mk4RaGUwAot",
  "key20": "do7wfDBxqgqaM9D1bkhs1F5mrSkHZqGBWsd6FDKu6L6DV1ZcBen26hJ7FNaMhagZhbXBPLpqP4ipVnKWy6T1ESD",
  "key21": "gEFfwvAMbPqqN8LzxHmbyPKcknMV56R9CNWu6rTJ2ZvsXukyUb5L9WfvGAQvPYikD9n2daBkK8hqWi45UaUCcui",
  "key22": "3JYqRH6PV1j8mqMJfJXNKtVHRC8GZ6AzjAEzjyrtLnRrhFWZZfs8V3q5reFQuXMCA2gUogfq7A6EQ5PYeu92PR4s",
  "key23": "hk7PifaCri1eNvBEsq2sLjZ5fEiULxqhfaU9EamESmCETQ14VU6EfBcjqb3jeoFCq48DpE8YR9nygGfCPBMniuV",
  "key24": "3wDmCZ4Z5pdvpSqF4nxFVRsUyVwP6sCyUr3GbeFDu77Vef7G1XMEqcxc4SA9LuGQQV6VhFZgNMhPfgwB6PnR63yf",
  "key25": "4ymyxbdEm3hcS2h4Z9ELejZXUugQEoDXCtc8iFA3VPj9ZFimcJEdizouAKBBNebvRUtWvxryomHeiQHqQSRSnKMa",
  "key26": "4RAUGH5a12aVpunoTtUQY7DzvGcDQ3gaPrhy87HnuSzbpys65A48XiBYkMrwUH4hazozioCBrjQfWkKMLuQgZCaQ",
  "key27": "35K5mguWN9sHCYWnQwJD9KXSTV1hUbuYrvZuCyNcaHYns8DKjA17LSZ6TBuvAoi5ek6DPCdBWF6x9VCp7EtHcfPa",
  "key28": "weZVSa3UQFV5uxCkPNC5wwmXRoWp3hZ6Aywfx3VjTTaKrxkRo6wJiKPJzeiR5CPBAmdqZWmN1zDAFc8anFafTDY",
  "key29": "3hi6gCMDXgsnBZCkQEioit2rQGgkrd4K6rkbhGooVQfkgYe3RdfttNW8CP1dUk1CTW2E1zUsM6F9bNo26HjX2Vnr",
  "key30": "fRB96Uy1HZcuvDcBVptRMf75XpHvUSEFNFSTSvJvN1XGXTUgw4dWzCqXz3iXrdBcJ6A57Y1j7S1GvKDdhofKBuS",
  "key31": "67U6aDABiqrW1FbGmPBvwpontvmCHDGmb7qUHQuo3oh8wQtUdq554HQ7Xo21tHvmYtnWFX4mvNFkZKcPjteQodg7",
  "key32": "3BvAds7bbkBF3EDRmdniMCtSA6XxF5qsD3oZEm4mWe1uD3hUgYoTNUcMkhbgo2RgRrHnxECQGqQX1KSS5cBSobbu",
  "key33": "4jpG6NFR2kDpkwBDKsmA1RspR2bp3m9TNE6aMv6WFb9jfBvHu6VR8sS5sUh2hv3DtAYoE7VrbhKWvTRaHYNGhrZQ",
  "key34": "5tk7UEsYrUrQmGfPH8AZLD729dtKvM4mGKCi2r96z9fzvj9Bt4Fj7Yyd2VTdU5cJowPoPQUq5dvTKfP5RWdosB8D",
  "key35": "2vF2ySw4N9Zzz8s43Cm59UgLqUrmQ6tbmn38GeHHCJ1Z6KyX3uujsSc15kLR8JDwiof93KHBjiBZc2HzoTQjGBQk",
  "key36": "5DXNxPzVA3Vw4rMkMys7jC8w2SXpqo5e1Mi9SxHL9ADbQmZCtinBBBgeL5hgtiEra2rNBfRXYSo31iKmEuF3sjBs",
  "key37": "2hSE71XBtVR66yKJqaHKMqgoxNJaxPFug7gssP6z3FE7pyeuXN7yNxmwostzNcXvvDnSCdqhFh6bejvaVoow4K2M",
  "key38": "3SwJ918EdhmHB3W7VJviXtR24KqeQeV2nMmaU5KKNHSuJcjbCa9VhJ387eimq8Ci9ajRbUQqwbZdBgvGVAfj8ygK",
  "key39": "2pXyXbM4Ao34gfSFfBtFVjjPrBxk5Txn1JmGF8hQ8o1CXwx5BzNg47KaWQ49S3aXb23KUsws9WhqAaT3ekmn4YdT"
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
