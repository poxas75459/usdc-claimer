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
    "2pZMpNecAQnyipc3FVo5sgx4vNyFPjpzwnYU7NBv9QcNqvQ5QjrdKv7GvnfxtYMAwV5pHBhSpTdXuck8Yws5DK9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63nJrmZW3ajtdYjPePWNucgPRjLLDWSJ7scbBpqt3Q5dhhgqdNZRE54XBtWDbMiqU5YDyzoBAJumxU7XP63wxMrX",
  "key1": "BFmQ7GVa7q1vdqeBFDCXnhWRoJ4TrRTSTpPRCazBVkZHutZvLuSL4qZF1LoUykDQfE5LCGNs7a22vfT1z43jty4",
  "key2": "5wFaVHqRTKy4JzWne8yapRHL2oc5pmQaF4cjcgQRQ6m6gUkQGvF1m6USYSGaYwkUWwobutdX3ma56NWaaPq67vB9",
  "key3": "5UXLTXwcPfbCD2dHT2y1tN1X9vNaB1z8yZzTXiJh2KXMvnCmdWhNmPP6PfFdYXUcUP6zK2Bv2epJ2Ex6SDkGifby",
  "key4": "2S6FaS4WqZ9vavpf8Df1DbFuLSxCyy8iEw96Tm2ihgJ6DSvnTtM7zxBxm91eCKvbkHPv3DHDDTs4UNs8tA5UwYrS",
  "key5": "2KGDy49TkTVpA9VxcbNjxL7x9LL7Ty8vBHjFRvZ2kD49XcbqZBksqtpypmssVMqoh1AmBdCwTDRFNgEiq7DfXHLG",
  "key6": "29uqzY73AqJHD5eWPVa3CBjNVZteKHQi8KxGmkVVKW3cYtgBpfqeLLdQQetWcCnr6yYF4FKKjPVdkba5aw3VQZ5w",
  "key7": "4dezhZthHG9pp1ZLaueFPcf9EHp4d8a7LAQqEF3L1spbSXbyWVbsBpBygRUb5jHGW46biaeqSb53c11VcGrdf1zs",
  "key8": "5Jv2GVQQKsTp6H5Av9x3MG4Wx8p4Y3cS14Uq7n9pS5Yc7c3DRsEU1GhMdUy1W84JnrL1211dWWbwZ58Y7iA5Whc8",
  "key9": "4jkz9DHegHSfPq2VR2RsC4jhXXSpxTCWkJC1GpwpH6GUqPa4WHtUSN5Zpf5QEejPd968nCnkCZSEotGktK4ppyEd",
  "key10": "23dyjDUXwnYfMqWuD5JSUBqBjTE9Vj9g4h3Wy8t8ZvR5e4knHj7XvJH8cYycuDyToDryQ3GjYp33ViFfA7x8pLYB",
  "key11": "5DZhe2UchqAtNvZtj3aM98ygnFxLDerPwKnN4afXGRmpSu42p9R91yhGew37mBpCicH4pgbEUoZaQahnVxRGmv3o",
  "key12": "2hsz4Vg7cWHEohSoVmxEiifkMpLozhkgrbYu7pJP4tMFL8YZ8vDtHPsPMCwAhpViq1iXiDvBSe21nVfZzUyWY2hz",
  "key13": "5B8kXP4AGpXY5JVcaiy8BXVgjMnR4cRvCWDzYkmW4mAgzaCYBWAvpN21rRRENpkTFM7VBEN7ocbycy1g4HVVC58d",
  "key14": "5DAboQ4NadqrPHEMLtjb5rznWTZSirJ6jqSrZkneFRVhet6qGmpumnrA2PtvfTgyyM684E2jn9AsFLoGs8dzWEYt",
  "key15": "3p2Rw7wAuGeBqxXhchvrwUpeiKSo1MCWYaBsYhxcQjsiPqiPGwo2vaKAybJ45po9ouJNk5w8jsSea7Wmsgtvs7kY",
  "key16": "2JF7a4yafJCP7JSiWFcdVb5EDX8mgEewvyp3ZeBAkZcyRsBpLzG5cvMaG3pF7oFHp1AEKtGXry8e5foGiDWxKVkn",
  "key17": "4V1YjLeijCRdqj7Zydds1EBqB3kKXk1Qa6HfApkt8tPMhzfVBZP5BPwUhkLcsRtMRVb4opSBwJs2B1yF5xVf64Mo",
  "key18": "2HgPEmKuoSPFVxx9DszXmr5UjjZskboE3satQmngsnYZYEqqcdicitWgWuYxsKYDEfZbmDrbTESaiTisBf6JgJWt",
  "key19": "4iuf8mrCH2kZNBnrazVrqARoN58C1ZYw4o6EK88TNBN6zBvP3zJPBuZFjQ8boRryUSGiNTGaVBaN9zo8gDGcQFtP",
  "key20": "2unQfB11M9BbtzeeBhk1gaft28nWKS1HjXfak5iCbYHKhjQBLmPDX9a3N7XSLKHZS1HTHw24Mv4Fzgq67fVRUEv",
  "key21": "5ciupfMtBMniMo5WC1zerBXBSZi5v6WChAASG72PDMwqESXdSpguuHypHpy1mX3TTAbdHd5PKxw9vxUGfKWQu33W",
  "key22": "3bqhE5GxT8PAnWWCQ6EdW4qhjGPV1QVKp7nwvdW2Ac6oHVgLoVDYkTQhRuc5bbJPKPwBMS9Lcn9WDEQHKL2nE86o",
  "key23": "2nMctBF5Cpmbyujt7kAUoTZ24r7TaPHV55F12yZ5v7b8XArg3Pg9FZknVbK9jTspK1n6jhCBTWBnzVunQBdp8zNN",
  "key24": "5CvR822ht6ZPLGRQVWpvsbciM1Qbc7Coweqr939VvtmjKpMUDTASYq3Ac2suY5X3WX3Sp95v63D9pEeco3gxReU9",
  "key25": "5JU4MEuxXZdWAo24sLkaYDopVrSR7GVgyTiggY3dcRxNMv8CxAVMGUQQY2VGwKvLKQrEHuzCuXqzYzbB1YmyQvrw",
  "key26": "62ybcuwWR87ouRgM9eQRXDAQBt6a32Aa5EcUfEMtMVWBvqNELNuozo6RiGz3gpsTUZ9f4FSgfEjA5EiK7jRJtug",
  "key27": "2iNCnwmGx1YyStErmajehmNMGTQ34938A3yHV49LrWTPLEXMbgbyGJ8y9f3sGKHPDbUJEJE1uyR9a7vEqwd2regp",
  "key28": "8zY81FTwzPfNueZZ1E2yDQvvRxZmCA6MpcJz7T17Cqm8Hi8NfshyzJUJsmrqYLiyoC8eQGr3DdBSD5zUtdbccbr",
  "key29": "3rD4VKM357cDcqsWkxq1NFgZctSzQba7KTM4fw7XxQgetHpCu4Zq4NY1oRGdkWmbEEofV4zNJx8KvveyAjtHFY6",
  "key30": "2NAvgeXh2ZEk3ScEVJ4EDBXh86itQtmNwkuPWe9xkdSYtfzGR2943Beb4WVzxmma8tprY3DGwEySYQ9gptcsMM9C",
  "key31": "4pWMyUuT6dGJ5RCkEHGXfj1eZe3PECh7z2fRYunh7FDZSkxWSsK3zbCRZA7W1iAFCiEVuFryym3fgjyK6PWXhUgb",
  "key32": "3u5NnLaXrGhZDcKqqtJW2KtkfjqocSqazMg5DXPK38eTzEyQf8ENLHaUR4p3DiDcXuMEMZzxcGGpr2btGCSCQNds",
  "key33": "3PujDfH1HEEsEJDzMnnXTNBMBZwTYJU52TUZRdrN99TAjm4VDtksUem8V8rYE41jX6pVn2iqXEwvNADNfQ4wEW3u",
  "key34": "2eWWbfGHuhVH1Y5eV7KkT553cekKrTqo4ZPQWhuYqe9kjaLwDociTzZXVizXzBv3UMJWZDU5KKGu1tvo9dE6oEXy",
  "key35": "2Jp4jewHaJ2Srk41LfEV3N369gVjdSxLAa9x57d5LcDsecc5FwnBXiPjyx31ARhx9rzEZZ9dzZVzAHXQertbSqVa",
  "key36": "4dkM48ZY5zawjbAzYksGc5nAZybbLts11hW5eaE9i6cpwCWWKjHsgznuwz8PmeXy1VRQTZ2DaKuTYbRGumy7nSJH",
  "key37": "5m5wyfzsJZjTfivwyrAX2zLzRdwheptsGGuWWf17gV9isKmKRFjRsJc6fbS3A3fUEvPq2iwycDkiV5HZbG6HN2SW"
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
