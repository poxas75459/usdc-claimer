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
    "4X3FE21ABtyZyaaR3Husa5CoaXWvRMc7jWgyaLUkKMPizuaQPPGe5g9jnS1S8hvdwukRWadVNjxNJZAffdumQRpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hS3NxkaerEpUSYW7LTtX5kJn5SA15sxWBZDiJpsYFXyWGawGdRtXSArf32FeigzcHvyJStbHHXKXnbY1NTHwuRP",
  "key1": "HnWjYun9VtD8eJ9VgJ6tzA57gnvAXGMG7ncNQF9ZUxa2RRZoJjAn19nZj5venk7mYxpELjRwV9pb2b2rPZhDc8x",
  "key2": "Y27Hv4nZpEjHM8n9EtTTsftCbwWcunVbHuFPoa4AzMHxy84kzR221m6pJYALJnXf3WKG6efRSvEyV9SVLkvAis5",
  "key3": "4czumMH9xnh2K5KccKCm8mxt52t84jB6D3pNUqvZuy8gwqnaR39N6a6RHTxT8M29WtN7HUiYW8xeTRyhc7D2eJBG",
  "key4": "2DzELLEGtNb52QgMEDpjTB52EgzUh5CAKtXh4YmiTKavd54agwqZ4bjV2WRAXTDfskxsUmaj966NpXeRVojH8z8y",
  "key5": "5Tc6NzfBGRi93SivhxoEexqfy2AeSbcATpYnXTv3FYg5CAYepA6yZHAmke9VZpUHjxjjfRDdSVi1p6ADpyxrkGCs",
  "key6": "Upf7dznkvMb9SkFiUE2gnKCPTJDdqBsVjw9BdtYSGBbgjKo4DCQsXN7PPLHDtqFcRCGodLgsV3tRuGrHEEpeyCL",
  "key7": "5AXrDFP6JNjcYYSj5JFFcxKaUh9rmFZzJLFV43SwmNN2MPURAEceVQAZ8mru4QarBHfMfPn35p44EjRvv5eoKrKC",
  "key8": "29AD11JqnjyHthhvazjFisdYPfz3b2LE12YLB29JV46vMfBX6Qjg8XSso2ZdgJAJLn7Ehan4vnY4SVFukAMjDiBy",
  "key9": "5JvtZPAa6s7YGwzJvy4ytEe1j7X6Ss2Q4dskw7WS1r299cDmU5KtYDX7zYa3L7vxYoM2VAMW7yNDbjCjeiza5mbk",
  "key10": "5mNMNWp9uHmVPgc85n6tBF53k4bE8sdQeKLGzKseW8mE6hNgSWVYE1Qb9zSu9Nv3XNuSCVdkihJWvispzd9p42z6",
  "key11": "5mC8oN4KthVWvQ6gWVchBFWytQZNJHRvU4d8kEABJz8Z63FEPz97YxpY1sKRFAAfAUroArhDzFrChxz3jJ3wSBR1",
  "key12": "9w6jpgj9uWxHfpkFxUw4fCa5y8DdfFGcQcKoNmEk9eUmXsJN3g77cYvMt4s5YPgTosARGFuU5dsp1uEaDsZ4NcL",
  "key13": "5dZWhLbxrxse8tXPjJSmCY8kUTvXa6mssdDZ9sczncC9QWSHdPpyGBNka44MNNv2kstHK5Zu5rxo9QPr2ZDghsUu",
  "key14": "5wKf2bztUmYu9nacDM24V9SwmgnF1FYdvvB6LxXKtPE2KNjohG7PVGEMr8obXXgXBhzY6AKHvEqwFpeAEz4HsWvg",
  "key15": "5sShmJZNCVgRkn7bAjrxazWYGoFb7XKdiNEqgjoJFr9QAXFSf2Je8T9WMVwCeWCJigbTLHAiKRhFevVb7jCNt45U",
  "key16": "2LPgPqkRx9dKhHeDeaEWLieQnF4PQBb8W35aWHkfrvNkKvzZLbNTKdUyYUfBCirT3RTNCgzwtqhAtBQs6HbBtrqY",
  "key17": "59bJKSScboRjYJxnRf3RQnQV1zUSSPDB9t67da7yH3Ye2hfWGfKTn53L3UuuEm3xaT3pEASuKu1Y8J1XeiUgt61D",
  "key18": "Cf1ihmkuBNroBpHEgckWxix8nLshbbzuTKPQLLv5ivQ3ZiFwFpp8kFUwFCPcR86dAPj3tE3sffoFYGETA6UUiM8",
  "key19": "3u31GKFMHjf3zmefFAhS4nGqQ78hE5bvrYbJEDQ3yj3wDw2BuuzVcnBuZGqrx427fWStTxfk6jN4gybsHJdns4pL",
  "key20": "54qeKk9th82TV6H5inZjTPHDtDfYfHFDZGokUhtQAj3uTE18McQLbc37SvAYV2osS3jEST1uD1GtJ6fJbat3BtRE",
  "key21": "5bna6ZZGsLh2KvfAiKQtipsCoyLBDpnQiy4msE1EuehoSHi393tosMYMgAk1Z1mkVhBMjcN2c15uueFkqNXJfAd8",
  "key22": "3Sn1dzxWF2sy8MGbhhFpXumf9PCQ8949GKKsui8MV7zobG5dvLMGAYim1DiorgB3LJJQWZsEssfqqdxoz7Nwto9j",
  "key23": "27XmJ1D7Sv7vmoSzDAtWBVm1PXdkJ2nUwGmzmrjrfo6XKuk6RwZgg31NbnnKSd7swLLouwwgz64MSZ86tnxZR5Wz",
  "key24": "4TvHbCiDvKdFNzgPAdsAbc9eYQ3Z5fSaBC5LTfdMWMLC3FMGSey11SxvWAnX52fk6xdNvZTWDxUqaR81kHkQQcUU",
  "key25": "4N1u9mXDNkMzgZdojRaHCpmrib1MnDYfbshMQWf9Ptv2TVVRJp1QGwtesbgeaCbNHyreVhGhu53C1EwEgCzs3Fzd",
  "key26": "2jnNkY7ZcSGk1FNsEprMjgzmut6cFDwiAUzw2pyaKJ5c4odkEqXGhEesqbhSeNb5nDJt4emcJAZKDcc8gi2euC7p",
  "key27": "3n6J38VEy8uMqiChZG1aNgosB3ybkxAWYq72aaZAU2nAkCyGU7X6ca3dGvebGqDLSPqaSFKxYg7bxaT6UZ3EtWpc",
  "key28": "266r5r5gC6RMyBBXW7rrkKirFMHtqa3WTk9Y4zBXKRaXyyQiv6DpYD6qFpHZfJzU1jQb4vrEAZ9Qm4p9NDd86M8Z",
  "key29": "mXmsbaRH4vAumpomzNyrHMPNAzk1yBM9ihBwz7kcdD11ramFN4yUoNEKTtFFz6mgq6ZAW6R3mPCt1M2pvPAF538",
  "key30": "2tQhWynn4NszPUDbGPg6zdvPC5GET7WXx3PeMCCWe5DvT2wCedVabp9CLoMC1c41UbaWKg1QyK8Sb8H3qGdZZp6E",
  "key31": "3VDZgVn9m4ceTMtzSv4CjzLQMgDyf7zr2sUZehcpZen3Q4mgsr5Rs2jmnVHJktn5QDJeQYQpC5vaBwrHd9cZeghX",
  "key32": "4Bm1dLf2ugyniLXmFxgZ22HfwpQJ4nCt8J5ZrKc7BDLXco53dE329Bb3pRu4mVi2qeu2SQ5Ytc1956NEL5eANVwu",
  "key33": "5y1wwPVbVRdqpb1nQ3y8KojY7HR9jXqQ7DjYRveJVvs8HALpF26HsppcGybE35yfQoVqyGgPwudiVVbSuywYeAoE",
  "key34": "2Pscm2cHAHZ6mYmNFyXgiFhsRSJuQ5PxfcqAooUo52uDJJJiT9pGbrio4KBf8pqkgVyF4pjreVi2SWyhuHdbjUaD",
  "key35": "4p11XirH1Jq74BPb7ZYRP9BxeYVNMbuNxRfscY9edja6CmJDfseGzRup9yBormmdGsh84eHSV2WBDgSivLqYHjad",
  "key36": "52QYnYUfvk2KA96MLXVRs55s4Y3ZjvWWmZeLkvUThLgLXzMDYLjCYcSHnWKBbWfzKoc4WMu7fnSxVm2MZ4F8n7aL",
  "key37": "2VjgdghXq8q6TWLckGg3DQov7vJVDB3hDLVtgxSDNZ9ZTC96A3JRLw5ktGSjgBCYwLBDPjUHep8qbbCYw3M8LPaL",
  "key38": "2L7vp6NNgrCo5wQRTNrDM3tiQ4m2oGKWxEZrF9um96DKeL9dKh7KS2aPzWz4P1ob3Wrxyf2u9M7sjRbgiMTnq3wk",
  "key39": "2FQNdwyGB5hYPimJy2uwB5AGTdR5KYdHkW7Pz7jygntSHWMBGSmgL7D5hpNENypv2JCYVjVWGaXZaHfKn5xr4Yge",
  "key40": "5hsjNYYqqbQWozzyuDeb7drEYV38QoSomaFZFdJm9SA21UwwYEoj3kZVAvcSGWWpqgBgSkR12jyFBqZZjDbFNYpX",
  "key41": "4gkNV7wTS71NPJGRU6f1iAZPBRx3mVeDYc6zzVHJpxVsTZccZbCEDj4JR2SpD7TDkr6WyicoXqAQr8tF4aXpEHUQ",
  "key42": "MQ4vW9Dngm8PtDx4tAiWp5HqN9huZ4sksoV4JwRS7sth4Pa5qax1aGFEsKmFHZf1XT3BPMcxmPZhewgspjZBRGE",
  "key43": "5GyrayJzyDX7eCWqhSDcngcvUfJh1R7Vh7ZSGe2ntmEsdM5q2n73wdt6NprCkWZqUtaru1AWBHttMaR9rmM4EpBv",
  "key44": "3VC9BCbLP52PNx37VGLbCswJJhXh3KLToKTz97uZrkrgKNV2G8WJRLcwkoYvF1apzjanzSnEkkaBkVtTMWCKJ2a6"
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
