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
    "4goXWfRJ8RQ5oCkuJ2kvReVzZrA26WBiDpc9aFoJrHKNsqi9G3vphvoChUwVAhbG5MTnughnDa7bkuw1grCSCLP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1qLqDdDXtXYFh6ThLEra6u8FCznyTRnWErHXKUtHnKx7hxz1DTbnzbBBAUr9UWX3jo5REEBUAMQNHWUPSFQL5w",
  "key1": "5zXtRPZ8ehCq3xtVQdrxAh6Y3NZ8wfqjLLi7ckSG4Yt6YiHiFMMzfiGha83MK2iCmiPjbBTN3p77uoM8go7a4pYw",
  "key2": "4sXvvhjdrmNcYtbLazJnXb5JsdEvK2EPVDB7uP8xGKnQEg4vZvMJi3wKhxu8bEtbxfoTiQe1WfgnT8KtERAkXcBc",
  "key3": "csNB2KYsGnu2bMxxDV3L63gc5cnCo6fAxQtRywh82BEZcuQkjpTUyzjR7SCwSmGGhGAnmddJrSrjLHPjzX3CCKN",
  "key4": "44M9RVvmY5rE4cETPhBk5znjxn42drqSJkab8T7wKZSRST2ZpX6TdhLR4UhYgBJWsiWA9DCNqMk4PkCaurWrBdYg",
  "key5": "4PsLuTviqTyVSxkoMhGtkKSZtte8oNxNBNiji6PTfGyZhvw56Go4ZfSa5qEGSPqD145h2MohCUpzHpxNZ9HhwE9y",
  "key6": "2pdDhZ1AtYan3869wbTMHPzdmkyTVp77fQCMkdref2ocdLsxASaXso2nFjA9E3Ky6Gaag8jNZbakrq41xBTzZiem",
  "key7": "5vCF7Ru8a9aZfTQioqCfKeXfM6Qd88JSQPiuyjp92EFs8fxLv2BzvKhQA3TWw48sgoyq3Qcx6QDfDztLW6Sz88Ud",
  "key8": "4GnHEWiLqD4qB1wxaWKLwWabPhANo8zqTztaJiy1b6cXUunTTxFpaR58XxsDR7ZqR736hLqD9HqNK4A1qn4UtF6c",
  "key9": "4MFSyrv4smC3o3YMEire94Po5XZd8hX3Gn6jo9zzKogCHHMUzfGjdNzRxNXCcSrRoTqpUex8Pv4hRLEkKwNks8St",
  "key10": "ETHFJ1yaqTY1C7ykHYHwULuZLeJenQoei5SzorGxeeUpWtSz2Lz9Tapxd4vmkfeRubwE5JhzW8bJio6F9tiHcEX",
  "key11": "3d8ckfAanKTJ9sV3aTSL1X5JiPYoEoCKoxP6Mfs9dtVB7zYvZQ52TWLXmGENBZU3fBZCts9gLSiY2CtWdvam4y9r",
  "key12": "4PWCYjXUhiWXEEqvrSP8yqBKLqN8NaqQxjxH9BSWD2YEpwAGXNMTTQLXTUZeBaVkqn7ri14bjJawDxqrUkX72U4Z",
  "key13": "ByTfwq1J4q3Z7v93JumccRGKq2g5x4AVtdZN2DiFuCGyGPW2q7RJnQhVz4qyxVw9ygXfdvrP99iEwBdUg7fkxqs",
  "key14": "2hCHjiFsj9DogqdMZsicTpKrvrMQzjMuEa1FAgbYfxQJfzjoG73LHmqUrryDhtoMVB2ZVR1ecCA4dMwb6oVZ5KsW",
  "key15": "2sD9D8JXnzaQJdq4qsPi7TTZmJnAkRSFdF5cTT3bnGXzQCA6o2U84wkpwrAQij87NDL9BHV33aoy1anT9sVZp7Zo",
  "key16": "5qTKs7q7f7BDSUW9HSJU4YKVSoFqDu4bCFpZPAaH69Xe26b7q67poUpiURoMyGzs9ib5aqLfwuYo4qRGQoayoj1M",
  "key17": "26D4Qi9ttWAVzKWVaoz871NiS8E6958bqtxQNU5Gxwdx48M7iLRwSLPZWU4W4VJy8j8yQtiEvwEg2W7sFe38cVLP",
  "key18": "5r4cuj167CmqbhvaCPQGirc8HeX1ZjxnYHAwJqueX935FAEEH31d4Ch7qvjfwqJ25mvRSNvFJmKT6mofDQJL6giu",
  "key19": "222o6tfV1qZSugpGno7m9cXkWryNnLVCh4K1w26NrGYdpjWvzrT5DWpbsjFQLbMZ99ERHryB8wNud4fYSohax39u",
  "key20": "cUUT5dQfwWrLP6iTBAdZvS7oA38UmY1CAPhzW5kQ7ufozXk4pgZP2sLD7rrpYNAwyDcYZGezWrJZv45pjTBUmfB",
  "key21": "3vdJSfH3LsjjiDo2Avc33cmhJzGXs2bLNxyVjCdHUzbRFL1aYtMYjsmxzcVA7yTX6Yfok1erEHDPTnLh8VNLryJT",
  "key22": "B84MVqdZtEDaeuDWt7DYqt3B1kFNqGZn2oimmnTSGoD7WgQH2tgNa6e3cQLu2PTY4kc5VCUE3Qs1zjX2A61T74G",
  "key23": "3LEiVRohHeoa11ccMGLitqd1FswgKygtfkUqzBLMy2bPHKPeaSgrARurLebChnFo7XT7DciMFFNqtLwiioVPPARU",
  "key24": "3e2YwNUb7ryvnpUnTQquitdhvh5CTGauog5BWKVaLZnx8sd1tX8sPYpReDZx1VyTsA1xHv8E49vMVAk4zVYDF1qN",
  "key25": "wDop9ETuPPUVxB7fELVjcf4ULkRNYaxuKDeXFsYWFtgaRrXrFDYW4ks2ZRZGPn6oskHvTsBDc1hWvqQngfWS6dz",
  "key26": "4BBHzTKd62oApHczS7i9XqtJxj5NWLLt7AaoyUHAHAkQ1jpBzAH5HqLQzhbdeXa3Z7Zv1at2KJG7sR4uNtaxMbgS",
  "key27": "4kCQQDQrwHvFvhKLrQdfkGY8GCtpYMt45DF47WsBBtfV5stjTcak39czP8tRguQQNcJ5XEV72YFbUYGvWoB4XS1g",
  "key28": "2FcjG5YtRHMgzj8yzpPpVjv3Qddd49giSoRRp41jRTgMdbP7F98W6N22s29LWw6pYTCEYiwkvH41bj55Xjmsqy5P",
  "key29": "5EgFXB6txGhS4pKDk7ffiK8m5aN8sdL2cXHbPwVZxW82FPofWrg9L7epuAtm2rhhUPmPBnKyNmdrETYHQJmbiNJF"
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
