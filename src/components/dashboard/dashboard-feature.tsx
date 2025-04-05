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
    "KuHv18fejGJJEPzKLWJ9tSVscFAp7U8u22zR8fRwmgNwRKqJd78C7afC2gfvipa1U3irKJYqWADuzTAxuaUWnLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66RHodxG3bQWs8aCATKugWV2zayfXLuzdAnZUtfBfgn17tUgY3c3MEYP6pctJmpT5GwA5iGAeyvKrQG3LWTeNhWa",
  "key1": "WLcs4wegMxX87rw6dLxMtxfZojAXkaaWi8ZynWXooYz68hgCj5HHK7swfNgXVHwuk7FM3mKhtecxY8H191B5ypm",
  "key2": "mFURZLEsgf17pgo8n1QDsgeD3FSJNosMbSRpFjFq2uSpjuFPafX5ALM8Q1KSCZXWSPD973BAXYtei4MGdhm4j9Z",
  "key3": "Mpw5gY57QSDkVqqby3TzpumrskUNd44TwPGTJHqYvcEBPd8cX4AHpPy6af5qzUEgd1us8SUKUZ3QTSbYMGM2jLT",
  "key4": "5HuUGwnZfuMwP2o6rPZRfsZkE5JuoYNVspRvykpexRPqdgNJPTYd5yg1zypGdTaziZxfszgwxSywCXLszVdvu4yK",
  "key5": "32nchaZDCVd7zQN1QAh7UPjw2aR3KiDYdXo6MxLxFG2X3ZinPLSkGjt5PYByc3FkFQ5GNnUFRr2xXok331UbJL4o",
  "key6": "5LdHWUMpFi1cM9s2x2sHmpVqGMx5Gt5ZaieQVXh4WadByTsYYkXGAjpHgLBPMDE4eK4RYEQ4scNvavZBe9rWE5L2",
  "key7": "3dfdGVRAxwnv2oDXGsEgAfu9erGGfy2or8Js8TiQ5FFL3BEsEWkHdgBprtBXxtA5s2r9NvQJNfp4hXqkz78vHnoi",
  "key8": "qFJLe7SS5zoURmCYZtc9MKcCjs65WBCiYSSDjPNYfoua8FT7HBfxBKdc496DwkxV3ePaYsqjGzCzZVSukS4xLSd",
  "key9": "4c3nYYJgiGZg8Sqvzdm3Rj38duT5JgjRXUsyYtHxsZoJ8GUXnQokd9W44veeHYpi5C71JF3QpuJHi1LC9F7sQNzg",
  "key10": "3VXkBd7MnH53kdMRtP3teP2tXdtCmXggD7acaNTupShKr7sz8XDEwXJzM21RbR9tcJ4GgHPA4pKXfUHnUwsU4RrH",
  "key11": "5SX3hJ5Q3DHFtvA64oq7DwkuAvkg2UjTarkULMHrha9jvWURhHD69abwYNFa5tUc1bFnoYzapJ1yCVbrCwL9gkJ2",
  "key12": "53M728VfbbiFost935gq9XXetQ4BhW7okjD2a5t54KhDU4njTzCYnxFiWynBTsxoCpEXmKZtkCb2aH7hXoJ6Dwzk",
  "key13": "5Na1bU4YbhabXMHPjfyW5svHHFakUBdK29mApGs6A7kZ3HN8uXTkivuW2VEfQRMWkNTVjJsnxykZvVHvS3rQYsNF",
  "key14": "bZykbTckyScyBvZXUuGk43j912caEmRSkpgEP7pYQfPjJ9t4yBVusaGjynHTamrqKrwoRZsnbQW68Qb5SKYdzFE",
  "key15": "4DpuftC8NmHnW9ABAUzH6a42VQC6QtVtfeWvC7t5jnFPMiyqjDDxVYC7qW2WxgW56Z5vKQR87Tvi2wPetpCGu1T3",
  "key16": "62NVc3WaU5y8QSiaZfTjDNmMNs2Duy3bmLptS5mF83zg7jG87KFk8msDMQdiVTPeSEid5RW1QVwTikJk8SA4mq5h",
  "key17": "4HniL64YqCeEuvLCDJs5SmdRf34oDQvHhvyQ62P4Pfktaex3ZBWSK59mBjGQg5iAqLxRLBzNEeBpAddzASCXjapG",
  "key18": "MgNsqkXwVuu7o7H7w6eUXQPXyR4Hu1NjyXqEVQ7HR2aR8BxEufQP82afpZPdaBaFkXevqog7EwRV9ZNxAJij5vF",
  "key19": "4D2c74p8dnj5pjR6hFziQB1maipWwqe1Q9zTaqeC6sCGjqRsvVDdXs7E6BUyf7ZCYw6X7D6S5DGnZY1bQiA65t7P",
  "key20": "2gTBR6CMKSikk1gNY91R3NRqWey1ba7SVQAsi8cy1sTCQ8hxQovecbDLuNGkMQHJAR4UDHmJ9e2payfLpaVFq5zf",
  "key21": "5vAfz926ac84L3D7cemFWfmA37k8PX7QGPux2rpciW8jhJGPvjp4TNzhyQarUfWHfDfF1RS9GaRqmWJDRq6YMrqf",
  "key22": "66FxjoYzg6c6p2F49MEtoAQ9xtGURcFP49nKPzkt2mDa7gZStYpQgraXFvtWM7WKrx6uG1z5ErrNFtwxMvYxQHfh",
  "key23": "4uWofSYteh4rrEHCF3wrmQeErVnJQkX3KjRBmf8UvjxeKtVijmjZRgLpNq4UU8pGV2PtnrHc6kZgx7zNXpqzyGmn",
  "key24": "E7Qj4RLM7KqEbxLYrf7bXn1g8uQEUZTJuyvTa72YXQZGutv7SHY7pNAZr694KLmo7J34i6BaaineafLGZZmaX7d",
  "key25": "5eiuyercaFv3HgDvrpYmYT8sVzc1LzixxLL6zXkjs5sYYpy7rpwBWUYs3vf71dmgQcLAeQwZ66E9PN2JBetdcnEN",
  "key26": "5qPAZgxBPgfHnCXb8zm76DR9mps8e3U4UCZkdh8UXPjtzV9rTt5WABYsXgcifp6rAX6faVQtPky9VYjdiRcJ9XBP",
  "key27": "4CjanNAhWSzDL5yTzGUik3mU8fVvjxkB92tfVNevHqRqpesxpTeDgVsFgtw9a3gjb8EbRit1uACV7FZ8Qh6hCQV9",
  "key28": "4CNrQyCJjr6NjNiLN4TbbTXgVEuctF5CJLqHDpMW7foUUVVTFcZmDU3VhSCjMVai2F6XXmS17zwxb1K2jM9HafEM",
  "key29": "61Z4W1AfBF6f7mFukzosgkh62WT7WwvWLcZEaeo3b8BJyWWitqJKdwaJct7b4SqF44wS2idQdingQb1x9juBGuno",
  "key30": "5eUENmcbqnNcpRaMvQ154aJmxKyxRjKGrhQdpJpRuBmuN68Ve5BQ219js2B7hzz8UdB7T5R5FysSbZC8dkGugajB",
  "key31": "5jSWp2FH1YKLqkQiv72DVLCxzVPmzZXTPbNDKuZrF9i3E9jNfdxE1nuxZkNMva7waZ9kK1NGPkrcQsLUzMQMnu3Z",
  "key32": "67V8t8Tyq21zRgwbqkQNemiXQtdQq2jVb2VCBpWu9yYdrEmFYR54SqZRUSDYjVtT55HzR6H4AUJTN1D8BwzzDiE7",
  "key33": "53Q4cBh5fnma9ik1zG5vqueLZfeeKQ2Vc9EnfcHqo4Nmg93Fq3bW1oFWm9bzhGgMDM1NupQK5XfqLZ2D4tszfPLg",
  "key34": "5XSgJfDfYZRrRTam4x9j7P1Mgkb7ZMdUgWFAu6aLQjnYZezfJcPnoD5V1XSpiL2hepiTXwnPuotcj6Hi23c2DKsw",
  "key35": "3B6yHed34VTSjawgZyCoSDDM54zqSqUTDws4YW77XhHTKnJpjRqZ9kRccXzrk4dD5grUAbqjzrWoFnDQvGrDZGCL",
  "key36": "483HQsARjRhyVaWKUrG7ZVwRpYcPkHnZeTb93T2tEhyh6wE8kiFwgHtB6aMk5HnpJaeezp4ZDGDYoasW9fkyTbGZ",
  "key37": "5Mkg9bQGUxUFaPRdDsrw4hJX2x4qMu2VJwhMBiDHa8psPD53wfdEXWt1PtQXJKGDUiCV39VPGYd49K7N5MHfaFmv",
  "key38": "DfdmyT65t3CyKvXEUaZ9A1FvRfD9KnuaCgpT7TRg8hseRmPfPFVZxDYt634apnJB8VZivBAsGhqkK1w8cv46cgY",
  "key39": "5v1kLHXrkBzazmbrBL9LZDK5ZuSkiwrneadywuh72uUe8Wgfoe9qingL8oohaJbLuB41kpqctEJbtVthrWpuKzm",
  "key40": "4kwgGUpxT6bkVzw4fLCBqzTcjSreGsCJpSgx2eCvmEALJFwM4a6RkLw8JufVr8v3LQtHxc9hXzBUiFyBWaJJ5M4i",
  "key41": "3gAftUyDsQNHPiwAQD92ULLXpEXzr14xxEaoBkSvpqxwVwnG3csKN5ChRi9eQzyg85ScBoYBV5uus2dJXZNTULGn",
  "key42": "4HvK2JErcz9PyuHUdwiJA54zDBVm7oypWPJxXeBmU5iCGizrxRBb3rykKBuHaSiF2ajXMVhBKpfMnRTBpMup7sZ9",
  "key43": "3c8G3hkCkS9PXwy5VZDEePnSakytWCMAjD3ohYWj3iNRx6Y3A164HmknfDbFsuQ6LXNmztovSttTVEr1vVRAe1YP",
  "key44": "KnfUWwDkr4HVrskzcGfDQ3B8E8LC75vqxa3Kz7cYK9AveyAYnPJwg832f13gt7QRYPPzfcYYUMqgkyvJPdFGFrq"
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
