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
    "PxnaY124ATqxRSfjJKrtk4aV7vimXaukgShAGvcfXhGucRu1bmzHcKvQJYD3oVZaGaZnmTU3VjzrHVGyM7fBC6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxmuMA89GFRddD1tJaWeQ4JucGkrQRL7SuyibSmLdNdo9xMHf43dbC17Aj1fB575u27hKbwxjeLwmixNih3m83o",
  "key1": "3ny3VyhPEMYyMWXYBUE1SMhDiJW8AVcEBatThXn46iy9Q4qwyibbmFGsbFsAunCwZakBMvfTeMmjEuDNcuSA4XWU",
  "key2": "3VheoJdgAN8hajBzmCbFg3LGaVp8quxb6p2LCwtQ3JVTtimWwgjuZ8PH2RAMXypn7HFYsXzF4svvf4HqdFDiKMdJ",
  "key3": "3yYy9eCZSA2NfFV14p4zCPzrZQ7U8411YjYEWJ6HTFRdwyxgPALLuxjYZ8LVutBccDdy39azB5ndSxQw4rg3e2Hd",
  "key4": "Biuyx9dqXDfvKgTg8pyJgz1M6ivd4RK33S68CM6itLfx5ocVh8M4Vn5zWHqJdvBXbSHwka3BPkLtFCzhN4SCba6",
  "key5": "3xmvpJoWQDEDbTCQDXJGTPSpQwKgbUfZQfih1bCa4yBLLkDZwgaDFffk4uFyXZ4VWH18qHoLo8pFNG9YJXmWwifw",
  "key6": "5LEwcQmfnNGvtuj5KHptRwoXjr55AqfDE9eATa7pTh49o6S4gbPWnZ6hrNgN9yAGBqLdXyLGC18Mtg9hEz17HGQ1",
  "key7": "2RW7y6S9XavUVJeeJUsWsErZjGsHWXsdXx11JEVRdwSMSTDMRVYsyUByy6xcUUFtVohwEcJ69BcbEuqy4GkQb4mR",
  "key8": "hzZf1pREYtzGzE7hn8gRaT7uoi5mrdXiv96rGFgtto7oLX9EiNGQJ95Fncbcqsj2bEz5s43mCcZzFCYHXMiGiPm",
  "key9": "4aRwDj6gF4ibP4sNnYhM6SfRKYih9bvju5aELfzV9qLGqpV1nwnWy79VAtSKMgEtz1VUJNKPqmCGt7uvAAVUdetE",
  "key10": "4La7rKxRuJFPNChY4rb3tokoxceVpV9H5kAX619vNCT8ZdLoPaStcNbADvwmRafjVtXTXpmGSSfN3FN4iBrB58Yu",
  "key11": "54emXF1FUuADYmcpkWhJnWuDop519m2DSYv4spt2RMgCKpq3YkC1xxzN1nzJeYYyf88fJdUfS44x8nk3UWwirTE1",
  "key12": "5h5FXYs4ihkAj4UR8UKmHnQYwkCv74ZKZfiiBHtqbt4bRb6QthN5w98mq84od6PTNxavUKnvqpnDay3qxWKpJhQq",
  "key13": "5nvT2ddWTvy6EcW95xzGDaAgKqodX6beRJUZZp2PCRTCK9KswFihrZYLSNRUqvX6TcZq5iyNB5N2hhNyYZNJnM1d",
  "key14": "4D9AhrZ54zQhArYrCJAuGkXRDgdHFN5T87FP94oVcScV29dydbckXwPKgar3rG5f2FbhYajbhNp9vqJEVKXsjZF",
  "key15": "4EoJkCqq4Uqp4xxyHXc9RVuuj72A9DPCFBfRmPAusZ5Kx5uUEm3WKoCDwLxHB7Ek7kdpF3iijDsbkXMLUdW6wQj4",
  "key16": "5HxnFyDHRxt79xq7VQXBwunbWLwpif1kAzNtNwznKCVj2fgFascxXuEoTLVmUi2ZhhLjXzidEC3PykCnJJ6aDUWP",
  "key17": "XYGs4BW34a7LF3revkiKHLXseGNvikFmXgec4BRLZ9NwUyPdX8Khoekrosy6nbAuSDQooh9g4QrmrDVDEbemq8n",
  "key18": "3nywcmKuY6mU7UHqTq7M8mNxVGqAyn5uovhj2WWaHijrEjdqTCG7UeiBqWsVyWPLvu1519QcTXQaqaqM4KRhG3Lh",
  "key19": "3R6LN79whrXoa5mAChUnTfxT6HQyTfwsfv1iDg55GpoNvRsigP1tDeshp7wTXBcHVp37dCgid73cKBJgkGjWWHmw",
  "key20": "2e55gC7ms8np5EpbSNiwnf8b2oNcb7teFn5sF1b6wQuBRsb9CnuLU9hX1G8jcJfWp6A39v2LtU9o8Wpxyg2yM5CL",
  "key21": "4NA3YaimBt9DX1dXrGaCo2SsXWFMKUB3kLTJc94ow2hDy7nnQp8UjnYPe3Gx4nPzSdAvvizgHpuLEbAQXqgQfj3P",
  "key22": "5KfAz2aqQeKSTkWfLmjWV47P6mbQYRg1xUGHZ4G4jgt5APMi5M9ShaqjWTTupTd8J8vrSkhstASDNobME4krUvLJ",
  "key23": "4DKD1imaG3VwhYwxGCEmCRiL4i9bLoHtHqrXkqXjucRJdUdRg3y3DKfGXyaBocV24mXW27qgbH6Z96L2iryuqb2r",
  "key24": "67XbqQRtBoi8RF3t7nLGfQhqo1A7e9Dgch22yKL93VpEWmrLSRhhuGfdwcMfveQyBUj9MQ6CXJj1N5PnPTQuNy1R",
  "key25": "4VZW1xZ1MoTsz1HkGWL2iNk3dbt9CpWQqdHn4jWKJhUQYpcLr6nSP54WNCELqkFD8MSt2vfBeWXR7nWKf8aUUDeQ",
  "key26": "3y4r1Jhsarbkb1NucEXjiqSM4aKAsB7KFR2x2RgEJxrjNcVdr8dGagazMHc8dLfZApW5A8Ra5Q33LfrFJ1U2QLJw",
  "key27": "3zxzf9fU9Cy3yrkXq9U46bvTSJgR1PVDen53C3QZ5bX8fYsnyhJpVyw3JT6P2M3UiwaP47DFicwSSpg8sEnWoLRa",
  "key28": "31taz9hPnYKPVwsYsPEfVqY5dtXJULYq4sjwLLa7MbhFCTh2DqPi3EA9e36T35uNYpJix169VmWtvz9ZZ8VNyzk5",
  "key29": "xD6u2NjvoFt5KPVXDetaFyA1MjQs52mSoSwzuVuHBD99jceotv81E7Uuogn4A2fsVnoQbRJv7ekEYs8wqN4PuJ4",
  "key30": "4pRgpMgybVf8RBnuMoF8ib84JTckHh9mp1d43T3gZv2rfdpVkitj5gCMv3auhGbwagL56ttiwuodBtWJ9pWcBq5Y",
  "key31": "65B3Kg7E9uNvHpsJnJgmHiHTQRHeztQt8MM3Esiae7up5DVgkJVW2f5TTru7LMiKZeUUoQ5fDHqWCavWmGRnZ9sP",
  "key32": "ia5AmBPNT53iF64o7H4fxAx2SgmQGbKyf46jRhp3eByEsDm3yiTzyoikkVs6tw2936ZGqt46kKBLNRamzW5AGF2",
  "key33": "k98P7sZYfpegZrqa4VVY7qKxHyvYQRrEqmA5eRuEXgoRoahZb1MZ7DjZPbzm1612fVZx8vy8k3S3iiL7EBBZt8Z",
  "key34": "5LbggKeeEAQsVQ8bzZ3ficc6RcT8PsPSTVk2ph8HkzZShAFgL3h2V9gKY4D8iyFU3CpBzhcH4acBofMqCdjUAmFv",
  "key35": "2juLcJwh9gMe9i9HWt9igj8n2TkcdPpBYCHCKJux8JTEs2bbUGqe5ceL5pq8RitnhcQophW2YEYRQKJHLNSKGmeg",
  "key36": "29s8i4z5e4GrVezf1b4PAsPWzRHXBRWXLe71VkbBk9KeBn3vMa9fkn8viTZmYEQG7sEjgpztPZF5YtWrHaWMXmNf",
  "key37": "65Kkqe4sPYcHK4Ct7yVNJU9Eht4u14ps8CrcTAm4ohxVCpo6JxEaJfmd8HCKyKb5W2ReWnhfGTotGdMe7yzN86nu",
  "key38": "5HdUbiF3oAjXDVo8r5g9Hsk8wn6UHBWTxkEiXps1TJniNsbTfe5vDLRk2o4GkqGfgb98GDZRHdqhv3BzY9LsHCFP",
  "key39": "2MPRg28oUNUpgwwC1BgKdhXC67fQBDuf3jbbS1f3Knn9KR9w58qscuStdt17rRqUKnxUzUPPKf4S1YbU4HnmwJmH",
  "key40": "4x3Jx621zx6h1YhffdQPGb12jATaKTVkzDbydcs4A4whQLLLMqXF8jnGyTyxgDLhSJedHgbFzhk2aDWKuxoVVbu6",
  "key41": "35YqfNMgHANGSsiVbk8LiEA5UuZvR4xcB3MvQtPwhAEgK4eJQpjwDseZgpAoBTdbErAg5moNRSTzedKuBNBzUibU",
  "key42": "4t3xuxPQgKtYr8kLFrCVyQqtYGKnujLgkPTc3K2h6vKPFR22sDPC8vF81Yocx5tF4PNRtHxVqjAU4LQn1mSAWfBH",
  "key43": "2H9sYMFEe3XWGhJ8UVUHbQC19JVDTfQMr4MAVSSncyLN9AKfbWubmk1K5BPJsew7BEiJK6Sr37QRMrXtq3hqdER5",
  "key44": "3JTirbQQHFdJXB2A2o6PwNPsvXhcK854Q4kYVrPuZ78zKawVAVdQDoLJR4tVaWuKKZ2RSEq1cB3BKoGVPjiWoiqA",
  "key45": "5rzoSZih4QX4qTgVewKcUGqcvm3ySqQBxc4diqNro2uaf1yhDPpMnmadZtz8jFjdg9WKfaaAGdJmm59fL5Za4zjz",
  "key46": "GSrPzdbCjCCpEmCFGMkD2BCD9qKobk6TR8yjB7r3Hh5ofyjLHeD1jNNRugsnXD1qyXQkMmUzooB14pNV3WWo3g6"
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
