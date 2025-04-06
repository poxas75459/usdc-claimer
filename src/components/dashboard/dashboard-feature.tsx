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
    "93dS6YUGMHT53uPD3eMHBvRGwt5R9zfWs9jZaWieFKqTmZV26WQohez7xFx9cSD2p1yZmBn5LxgVkfGnPdbUEK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662mW26aLQZWrA45Bs1pgNyJLeVgNhCnvqx5ASutcA6AsHN8FnfWeRwdvenePDC3WrFs9qSRdKdceg6HKKsLHvaA",
  "key1": "2zm6Q7X7qq546A8oxkov9C5UD49QPV63Qj4ryUTXzit8P5XYfVnk4BNszmYVUYkER1YqLybPaoFVTKu422d4uHm3",
  "key2": "4HMQrHsDtGAJCvXYxvfT4wyaDcsuSzZ1Xw8uCZxHvPZFkSSJtReCDLJob2cBF8H3TBR3WGSr1J8zSqYpV2hf4oyN",
  "key3": "4gH1mjzY9jFTeYS12sNZgkyMkbPJcsgSFZrZepy9WNUumhwccqP7CPicrQveiJ4bTqVH36ZjsPo9KVeZGMdHh7pw",
  "key4": "5LS7YwE1xLS6Fn4vKpxmt4w6HaivwZ97NreDgwLVHhRTCaNSwGiwJkqSxoUcRFTtyuJ4MRkZV6gq9NSLYTtFdRNu",
  "key5": "42Z3YfYsjE8q2KXJeiZqHmeBxm7Vfg7aFhho517ayPGe37dqigpiemvtUmeSXzwdtSHPxQebvkH3gLS7pXvZyASi",
  "key6": "4PZM4BfgMeucXXMYSzC1vcqrxorTcrCcbWfvNpHRkTHnrRyjPRsn5ipLCBmSGCTZS2ZkrjB6aigsQYXFchR4sjAh",
  "key7": "pCCW673SWryRqtxAdNLMQaefZJWCMj13NkioyftQfZ9KFTgG15juNHa9djV4TPENwaL9GGAt1eUsNbeWa5yXKGA",
  "key8": "3rmo1y41eGiUA99Tomg6kMxmxmjjbnp7VeRbA16MbN54qBJymotveyiKQQC7WVp2z63pPsmNpgLibrPDdZQCAtCS",
  "key9": "27ZgZuUnq7NdawzqVWJj7AEVZfRaXx3NH2gRHymRYJMUYwWHhW2D8hihHyoZUix7zyQuG95SgXxX4pm3Y3fDwgsP",
  "key10": "5U41kmzbjoiYKPzV1E7hbgvRuQkEeE4LCH5BPe4JWRQNKWXSQwutDP2LAzvE52BKyqwEA4rTvJG9XF1Z35cbiBmQ",
  "key11": "3CQQ5Ub3M8iMhoeoThHTggxxyoZ8RYjDFUr7gfttZ1P3WVjsQK16eQtqofL6FZYGvCrJ2Cn2sMGoJh5JWUhixqoH",
  "key12": "2d4KgJUKs5eaGzUdvKdAALZYWvFNs3aDXLrkQpG1ZUGKv49DArKRS3dT3mvzJ8oD6zHpYV6XMhkNKJFguVH6GgY5",
  "key13": "5ArVePyep8DTBRf5FVrfQFccdTfPR6wnEsaASJZFfaZbrS3pyKMZcuds1o13YCSKVSELf25iKa5Hi8TtkTTpAtvz",
  "key14": "3bM23yNeSFLB8f8HpJfNwhrsHb44fVQMzxtQ2cjL5Bg58DjrtNYZiMQSpDdkAsnEFpZNzrWxaCFeFMxoV8sQhfcJ",
  "key15": "3YDNw93gZwrKVbCdBZKMSLpCxuQN9Mv1k2eesGSHya7rvtqhXgJ9RvCDLw9ak3YHinaaUWNqUVsdNj1r7VTmUvU4",
  "key16": "LbG7WoWet7MqrTWzbGLU9ReGaVBQ3MqAxKCGHFUaTZt21g1SmUeXGCfNGTdmoQhdar6oeS8zEK5WcTCQfrUKg6F",
  "key17": "54wgtCB7D6P88UrkjsRWUbqP8ywA6t3PeK9gqn18JaQKLggiPdaLcBc6MnHRehW4SB1GXEsvrTp1JK9gY17548Gr",
  "key18": "2mdqyw54bVipfdEaNfkdZ7HQABPiqzxKbobJYXhNi947BHPWrkofXFSkdaRsD3ifuJWXfwCPnn49wwqUSBK9QP9k",
  "key19": "3iUHnZo4mn9siyfcNbYb5s1ppYH9iwrkkYnAVkwUyoDrRunfyBDc8rkCas8Th2xXtaXcTkrFGrDSNwcpMqA9XJB2",
  "key20": "2BwHcRkbkRpZwD5SebAGJ7RF6v1QHUaMGdirisGsS4NrqtgbsphRYGSyNDedpQJZ9sZTu2PJbAaMitkErb8oTwLv",
  "key21": "372TJrVEca39QVkQMcviBeVspRCFgbj9vFysCDdsWDPX5Hutq1Wsqwx8kH1mMYtqw6joTjeTuGYva5qnB4X3AzWA",
  "key22": "7HE6GEppnnVYGGS5kCVVhockFuu9KQfq7eewN3nxumsfcUdwNgX3HT9BwzLRbSiid5rD9ZWW8z9VjmHVoRxvGSV",
  "key23": "59EFUP1VYGnzr9n3fWqWCryttqmviUE3Cf3xnYi82bz3HWz6f1zkfaxZtwgkMuMiJcsFw8sAbkhAEgguwhFER3Mb",
  "key24": "sRW8uhgTnCfBNBsugax5jJDihd96rXmyoSUb2N21uajUadovoBvEk7XGyxiA4FFLNAKSkMvS8P3GLZa1yjGiib2",
  "key25": "44N1RLRPYNnSJWL1ekptibTcnFoNiL2bj21SRAkzTcCRXFKW7wpJzNAwWHGF1e2GovSV2cz21CX2oDQHsBtMnY6x",
  "key26": "38orrYq3xZb987ECTAmRjGja4jykAiTtpMNzquTZUJopXnAEkQgdEGimtToY5Z79cfigdCzonzmJaL98bHxhFpYr",
  "key27": "4ZWeGhfL1hH6Nj2grTY8ZevM4wjns56td9e8EgawAHvXRauJFjfRym6sFzpEER2fHgqeREJgaZjt2n44YPxYT5N4",
  "key28": "5t443SfwBds2ThYyBqs8iCqc7c3e77UWqdD6km6ruBarwZY5uBXgWkzfG3bYaTJbQe32SK2v1SuFa8irk6aoak5t",
  "key29": "5k3t3cJduuYE94qbGR8Ufv6DMHxWXmGfFP86rVayqQzatzLWMqz8KLZEhgVGfmorY6N6qQBAEDFnEC7oBxpXAaSt",
  "key30": "2TnAt22X3qvYm7TmVTjxijhcBjYpBWzoTFzyuQ4Hch4S97dejDd2bmgBWixbmgJK7fXsDLijgiroKMSXWUbLeJRJ",
  "key31": "i8VH7DbmGaQvgoBvmd5Tbvhg9sUET7bsRjxeyKdhTctMkgg6HJtseTDFq3Z5NAPRRvsKTkTvcXdj2k7Ht187w2n",
  "key32": "5rBPS3n8Jve6UuvvQzhV56UKhbgKv146iR28YjVdcxD4sjV6dz2Y3zBr2tBUyj4X7j4XqJYo2TEDgNMgHyoy1s9r"
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
