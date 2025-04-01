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
    "5FK6aZcvy1kGS58bqgx5XzCbZLd8wd4KtgLhYAC3D5xYF4Mc5NJWfoc2wdK7SN9S9VYbGTsoWknVbiAzEhzjpQ4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xU8TnwLDd2GVmmkHtrVRKFJYZ3crXopg1TKXNWWsYj3YkPv9ZeBCLt7w5MvdZRYLwtkgVceoWU2uQxnocNrMgfH",
  "key1": "ZDXHyTMqaPAwkjxtFfhBhk41enGmFFhMpGrjJgUCLK2T59byHbeExkFptdenPJJXfMq7zWmtxiGeRx1qSPsnqkW",
  "key2": "3kLNKqdRzjttRGpis3auJiNu5BDns76WMMdAofcj1rrnxBa47jxMnXkecv9w4e1E1SUHqWautWbgED6xd7HBKeWQ",
  "key3": "5MtzAV478PsdCBioReFr6WdYGJ8Be7S4bUXnEvDBkFrfe2J2eacANqLvGppMVZ4jsaVpkjbeUTQSeUx13uP2CfTw",
  "key4": "2tyL5DsQRdmY4ro7F9uDuNLChcoCft7WifPwBgLvDtVHxHG3nGX1Y6WCB94CNSa9VwCBwMFWmDgVVKUMAdnFYf6A",
  "key5": "3BAq87P1iCtmQ5rQfx2cVZaDzuhcfm1o3WFNZAL4ZN38KYzV1RtHR7Eu5UR213upsKsoYYp8M93etcCEidmfBPRA",
  "key6": "61CeAa3W7Nu9vSkXH3zDzfatsdfuQJu2fDN8CdLKUaZoBETNhhvrdwq3RvbvKM3MhinEXBpdhwnVQ8r69AMczKrY",
  "key7": "d7gDtmf8SSGxQ62tgZ3ScUXt8cG1LsDymAQUjz29Uxw5XBYws99qBv75NynuswFyNkB6jCvnpvBbB444W2J2iKB",
  "key8": "5S7d7RpWEC9sMmJZRiFAC7jqM35o6zmA7MHjNVZx3V5S4D6GFPuWN5u9bUJSS2CsU7kJDoCUtquAtMP5XX68So8a",
  "key9": "5TKxdE5BqyFjq2eToTHPgBvRg5Qxkh33VthNha7kWhsBjmqhvA4DdMci4TaSoo2rsWJw3J2YfLGUp2hP931R9j1u",
  "key10": "3x4QjfZjHFmtjUazACZ8RyEdU1YWgPBmMvibQzicPwHaL6m2JzzcytgUaz4g3piK4R8Zx6rVXQM3xVfK21bF8FCz",
  "key11": "2R17k1agLRhaUBLNQYD4sLmkUXTekE4GZP7NvxS6r7WQ4mEundBi3wwpJAaCzGwefmYR1f1bxE6JW7h5fG2uPQ9o",
  "key12": "5oVPqFB7gH3Lz8zSZhDvH7KPp2QkE9cGcb2ioB5fMCwQw8Ez4r9GXL1AEZ1Cq7xaFisH1nm6DWC32betfYRa5Xu6",
  "key13": "gxWJ2eE7Yu1Vj42vHFbStdxe7YECbDQu96XxdUZN2m5rBsvzyVgHhM8YpAX9u1KVncJNxyHqrry5a5thgW1nCpY",
  "key14": "63Ya58qHUH7oHnqqdrxah5hsZQBYYGQbJD6bpRoSjsvXrGFMLGV2jCxn3Ya8GPYe7nCgGSYdJxdE4w5z71DsEfuc",
  "key15": "3zUFmQNdrpHV4eQPdn8miw5AP1rxPZc8HxdZZD6KLYCXehKWMnZz93yLfjVAbVaefyvXpbXKr8uqGnYtRN1Y88wU",
  "key16": "2XsptS65NYq5KusFVSW1sGRv5nHjx2VuNagUWQMRZGxJecJHasER7Uo2R8p7JD5p21hUqcqE9xMVKtwYPJbaGAKQ",
  "key17": "3keZDsUDjT2LDu64wtnG599TkJrPPUay4gECDLwuekDGLTENHwVogs9DJ6NkiFPFSjjNrNAarw57uEiPUUDKVSZ1",
  "key18": "3cHtYVjmtJzRYpjG9YDxj2Q5ANbi1FJJWGxmkYr46VXp7F8a5AyiF2yFgXAbK6munuBQzmVjMqv1QYtrnhteV5Ha",
  "key19": "5D4oqWVemUNiWi35m2v9GQpA4oHtJxh1mpy822UPrLJqG17v7Znrz4m7GbUctRHCnc2PZzRLkRFjpuDz26VKy9P4",
  "key20": "3gj3rgeZyKmXmoycb5MWrCPRe8J2GLNywX946BcsPCSXbkbs9FghxGXaeAjGThvERRxxWbb8sQBukVBSbj9AAGnW",
  "key21": "MLJdiEWFzpnHYFw8XukrbFCcQMUGiErJ9XqgRe1dc1Br2CwTyPFmPbKQPPYbiW7cq34FK7cipdbx9Vt327CCEpJ",
  "key22": "2EoZYx7LGTDKicJJZzLgJWRMkQzpf8BFxDzwoYZWQfCCZZDKK7Qf2UitR15RBHBPi6MdsYUDz27X48TEqKgQtW1N",
  "key23": "4rEKPUDtBS6sLLs25uYMBFHE4YtAPJ1H5n9SfQv3F24z7k7uT8QP7Q7pJhSJTMpTR6ijzsNLeUxs3FQvcaTmq5mc",
  "key24": "5fC4cvBeqNbHeHvdKXBfQi6Vq5WFYLB5cQomki1Xvf9nXDB4gakxuq5oLtaoyPx8BNP9WDKU8xK819axBUZZsipK",
  "key25": "fRtaFRPb7j6pyY2mGEATy5qJX2CeCMSwSCf3b6qpHMgaAw99ySFcEQKY2PPXuwDnk74AKJoJyg5yBGCH7Gfw1VE",
  "key26": "5N8tokJzHC4bDSN7YhAcMeRu3ZGR8ynhrdzsg6TB9div8wFce4DNi7Di8HV8z1sktLMgpS4nggMvrPextNXRKRKA"
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
