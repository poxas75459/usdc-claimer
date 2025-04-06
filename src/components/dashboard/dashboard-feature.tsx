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
    "4ipW5MeoUJW6nfKBnWSUuoxJ95ju47GGwBg5pA6qaFA24FvHU85Kw4JnTBcDjnSJihUBRTTugLzKyNALkhjNjrSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpP74iUJN7BZ7AMZ8XjWiSQjCLNgomhokuVgkJQAKTuhxdnBoRzY47CyLxvmp3D8ckw7VQJWJFw2WqDfh2ofHoE",
  "key1": "3zEd3tTSonbCfm4jU5v3FduFc1ZXoi7BPDdt3n7nRjSNUsNBmJuvZfbf95EfH5xAmuLQMkomrimf2NBnaqD5Arws",
  "key2": "4U4EQc9zZWsvX3M23yWQq7ReZid4BSMY1q1FcKes98SWho8j8kAYk6q3LDaqsN41xqp9FfNRfUcjBJ9tDHb66GTF",
  "key3": "56KzXvXExXN2UBY2ZQLdMHFmJ5sD5WVbbdDMSK1bbMTxNJ36Pseu2zm5NGDMDAmJfpa6uaUqy8PVQ1BQtt9SwgB9",
  "key4": "9vrshvMtjTTfMzzQGCsFJ84LzQq7NRJdEgKiidGqE7XsGF1xWhFpp22vx8mVNbfLMnKvk3PJg6haM7TcyMtnauy",
  "key5": "GERs6Vj3amiFvdB3hdrPVezmE2Yn7pdq84vB4TRiK7NxKK11uCNddTeShQ1kyWtTgUm84fZTTmt4HZQCkoozY1F",
  "key6": "3AiUD9mFLe63f19XrguGyhaReJnXCCqpQzPRHfoQznCR3HkmF1aadLk9sviMEJxVAwuQgndkiPV2gEAtqLztqg6E",
  "key7": "8W2966Lfs1Hq5zrEGtnAGQ1p5Yrmv2b7gnb4FhqveMnw25CdiGF3C16gFe2QVSmfiy33SVuk8ohqgBDuGoWpAbD",
  "key8": "43TEko9JQKrR2CfSUq6B6Ep4cbT8ZpFiNZDoCirjejx3H165nvnqgT14nVHfnWZnmAuHyauvT4uCqFECw7dKokox",
  "key9": "39HZMDkgBCzhoKfujoC5w2PjXQvXLqNHMaHkzHVEhNg3AQ3B81g524Fu7q9BoNFMQvKLT2yzmAM2McNhik666mVi",
  "key10": "2KsoTSZnKV4uSZ2h7DeJ5DySM55vZC62ejPpsbVUVpH8kq4byMhJCVdHaMZpS43zN8dNTApGMUGLMkU6zgVEe3UK",
  "key11": "fnsmNNSorx48kuRdctsYi39vZa9brCCMsePqGkYaF94euuA7aTx48txK5fj7Y2FXYso4Y9y5FFF7p19x24tsSzw",
  "key12": "4pph5GPu8hYGLyAA6SFf3DeMnf1Cm21n8LZgwcWvPd96mUDmdnpxw49WD3btcGZCNM6baShqPmeCyQG6EcSdq6E6",
  "key13": "4ux1LdMVrWPraYXjXFGX1LncM9pGU1gD2uhkojHx82qCdCrUcCjb9CKkZReDgKV4EbQja6GfqYNuZVVFCYwGGKY5",
  "key14": "2BJjWp5KtuqaPJbZvuEXs9yMRSvbxSjhoLsT7FUWiZDhzTUvWUhuyqVRTn2aJWCLLeQB5YfJdPrthjmyWr3GmFo1",
  "key15": "3C9YFGUxDMRJi2j7Uizw3cv55RC1uwwia4a27jMVjcYC8rzz8FvHa9euF6mo9Sn4YjqqVfRik8s5HXGmiEkJBKvX",
  "key16": "2vP9xt3Fcpz7yBa7LW71yyUbXwWYKtFbj3T2iRUfav855hqjdxayZitDAnPebpJzUpQztpjQ1Wnnk1YuTnhgARUR",
  "key17": "55hbAXeVgwfAY3cwdFMd9vGGfmmQ4XAjgLqzHYZaJEvit39Rf86sAModpPw58QYcvLLtAycKE6gF4K1MUQ1maJxc",
  "key18": "5yMPQbCwK2UB7fMvVp67MQX8sGYcsUekCPyprPFopRMWfiaQLHkB4LYPvjTGx2ZUNd3TzSeihLj5YwEqjQk2giLX",
  "key19": "5ptzRDwyTVAJKD4Bt7xbps3gjyKbYzGUPi2uEoCibkrR7W5dd4uqsrMAW9r78PngrXdLbB3ACR5zCxJyjviP4sPv",
  "key20": "4qiKjonW6qdjkLVVmD5Kg66QMzSgFX5F2MhrMavhntkVCH8bQ6XUpWWNHxNixannhdt9cT4HtCwoPGGkaWbCqbRX",
  "key21": "1hcmG8pMLn6E95bjH4PjP9tJg1EVUbAaS6Jf4FrSnVPMmrNFhKubp47LCt6JnWAWnEsnPRFWpcQ1wtoReg6Eapg",
  "key22": "4EZzbY9iZfYVDDdNedGMVDSqLys5fJYpeVEjCU9LsUZiHN9T1UtuaBh8U6yGFBmVsfwrmvBhQKLfhNAqkuuSsa5d",
  "key23": "5UndwhSLxQYCopvEdf3WTea2Doy5cJqbgBAjU19JWTqdqcNe2ket416Z2NYB6MXMSPTeEWjWh2NN9vsFsL3CCW1w",
  "key24": "5PCypVbfREaXRzWBozSmBCD2tQpJUwT4emd1D5chnuEMTA8qFhNBkopt98wF7wZ2VodSUE1VHa9iTy6ayuSdWSyv",
  "key25": "2nhUFVNp4ZB8F4pJYsjbAYw4eD4ZEfXutzfrMEvxYeervPF9QmF5LvhuC5C2qFivLV5LRhJMuiK6udmqrXjpYVMV"
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
