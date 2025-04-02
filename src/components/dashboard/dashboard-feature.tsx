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
    "3s3YXoN1RbEhWcjsKNdW8UPVRNzspFTLuzBbFaGAm4FHerevFNPguRgbumNtv2HFmUZzYyYQ1BQCPdYT5fe4qDpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxkqnoWGaPcGR63eZYKZsUBFQZfPqR2R1pSvd68VXRewdzysJo5yjKJJNZi49hU6UmYQJELniJE94Q9hCx64i1K",
  "key1": "3J9VrRYWiJTJUwFZs6EGhKkbeQSRXXJEdEzSwHaW492pQBeVBxNBzu6eJbahFbi1LCqUugCSZQ84Fkwp2HShS6oQ",
  "key2": "5rLbogk8zeSy7onfRNyg5ZtZC3aFEqc7Gh1LMArof1RB2RFa2SwwdiRu4UQGEuU1977aRTuY7gnVnQFsPvUsvSuT",
  "key3": "63cNwzDhukDY1UeE8ruX1xgvCBmUfB6dvFUhicnUjnEWaWNovsQ7AbJZeiQKufRadHfNTvq4Jvzu7zXrzDtdYjgB",
  "key4": "4T1t35iQ3hyzAphTNj3frvhb1WYVj3kgTadiMEqbYS6xQLSSTwq349cA7pPAdvLRyboeyochii4ENKpU72ehzz1f",
  "key5": "2iQYg7brVuCoGvAbGndS5V1yG73S1oyrY5ETGrDvs35NG9kb6FJRazf5AZRBjNRQr9QDUpYuXow2kiN9BktUKNJW",
  "key6": "65qW4UAuR2A9SfbGxdaancvFASkX6J4eX9UHsQtzp8ciV7C5hUNwAzuq4nVGVYNzAK1w1jgQfkJPS4mZUcD13o3w",
  "key7": "3qfeSNvJC2G9ua68mJBMtDrFXQuErLC4Pmq73SVKNdCUxz8NULRL7LGoRDzuxPmcYiZSz5mz8qfViMa4gMco4aPv",
  "key8": "ujQW8wmVzyCJpsX4CSM1XLNVvDQTzzNwpSFQd5s158rFkV6CjWCk6aJCgXeKVYeNDkbqJESpfywCAAXVN7A6p7b",
  "key9": "5TGnrcW1ykL4LYMesPaFZyB3TQn93TnR4JbhgGQvJHT5NRZZnHce8SnXKU4vVRFnqL8bb7r2PxhBuDMjQLZUrUfn",
  "key10": "4tKMybfGGPerko4oA6CbFq4iYxevUxFiW6gdjADVtQuBwmSD4rMM8jokDts8martuhh6uRdnd3D18cJfhCcvbXEE",
  "key11": "21XcwNYscY8b3gKZ45BAeEorrzRXoUpEe5GKpTmjJeH2ekRWTwB9P1avjGxByqK3KM3Q67uNv1APorPeiLQyJGqQ",
  "key12": "37sBj5B9AVy8kzZJiSfCj3HMHiYbLREF5xp3s6ybL6XmwM4C2pYXt71Z2uFd18ZqHdPJEV7LHv8fwCoh1iRhEDbK",
  "key13": "51tofYYFaoMzeruW7v65v7wkJgGhFFYcTXziTi29cBTJCeKyRAZQyNRbxV6i2hmF5MvDRmSj2fUtY2Ymb92YboPN",
  "key14": "5hQ9SURaWxMX4jAEEmiM4xVfeEYsKJMPhHb2R3tp8A5A4U2GrBmo4CqbC7vDgp4npRf4RZKhmaDHEDYDJvnB1Goi",
  "key15": "5yvjSybJzCuoXY3vmXX5QZr5SHcoFZvBVqfS4Jg5GVnnGJuHvwTJoTY2GS7hR8u1YG5vVLQmUXuQ8uyZ2e8eBaVQ",
  "key16": "36nnhXq2EFX26vgMNy9RsB7aYqF9QLGCrmDDo923ZXd4FmNc98RviYQvRdKnUrjSRMpKiqYTUL3vA9JX7gqfGoav",
  "key17": "2ssAh1nyssjwjS45XQGxzNqfssXotBh4th3ANYqkQo3zNvjcv41AFcrzy3veJMSU9ZdGHi3KE2J2wLcdca9ohrse",
  "key18": "5abqY6H4kREvj1MrJk8haK8UF4trbMNRDzuFLTsmD9bL2iZDfEwPWu5NN9c3Df5Epau2F7Xkr2dcfy2LySvNojnK",
  "key19": "AT2BFXFtEcMnTMC3R2Qondm6nszgjcAps6E7GUzkhXaRdwGgqDgpJMZ2eJmr7f9NZBJPfojNuw6ezpty3v2gXxn",
  "key20": "CJoGwYnfLxkukZkaQHU3PLuTSQmntoRUgfgdwwsuxfYwNraPad7Q5wQQgPrFmeoCcs7KQHdMzis35gSkDmwjDMG",
  "key21": "24DLK9Z78ewL2Tw4WtuopbhLP9vw7u1MwP1My6o25fUf9usphYRYnuPNtroTHdABrBTofnC27bqiW7NRdgJzWke9",
  "key22": "3LiJDefQaoDwjYbtYDXgRmxxm4yox3ThB2fuMjQH7ZrcuAKmuLQD46qtY6DB8jaU8QjTnFFut2FpNNzzAo5Pv3R3",
  "key23": "4rgwmt2PmFZi2qEkEhKom9J4bFgZjS3vGPAMD8NYFqmCH6CVDQwC5EQCfZrLKtZUu19KwpbgzH7wTmaG7HFffu9X",
  "key24": "5oxm5y4SG9657JqS6jtVNiRAQCj1cmRfjaSKbsou42xpz1WWdraGFzK5aCKY8nTvYNqXA563cHYUmjitfhqji27k",
  "key25": "3vaQSZ4ZQJ6nfTkfD5P5o3hUUidNaT2NYCzfdmp97m1qr5XP22UyXKku46Y7CHJDpjVDnuMBjhE9cje26szDTZ6e",
  "key26": "2cgVCr1aiitEkqNyAuUhGS8SNNnSVDYMEiF6pDwTm2QY9kzaSrbtzWfqscrwapGXEAFRc24cqx9e4WvareiiR9fg",
  "key27": "qRcoBdFN7ggvS4JsizWPd4KiekfdzGjmsgnXhaGbRaAUoTKuJHWePZBKWivJ7Z8xgM31mkn6QEr1ytrdTPsT5mx",
  "key28": "NyFRn6euz3cDP1QiWvc9V5ViXUamSbuuhCmDXuRRLzVdKcmtJAV4oXZcc21DexGHWvtrTmCfdCHSQFqU2AHjEPn"
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
