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
    "5mhw76mUvM6QUwompfbZkz8LueVu6CuAbRMZyPsEj92pJj44hbCSJwgxZnkwtV42xj34dJwsfUp2iNZBLpUsaJx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHZkHUaCLkAwWy59QKRTwiaGYEcAFCpUrvHu1A65t5sdVcdtKFnz6BNBtSt34CRnF1q6j2GTWqXh29HqyEhwfM7",
  "key1": "4x99rjnKWT82BzotDFxVmeqKEhg9b3JVcKA5b5xpGjpKrHUZGnoovscegjzhnR9vQNghBp5Z3nrL9CptVun2nbfV",
  "key2": "62JvXJpE25nHNT1FP9CUWgE5tW2Vr3C1NQ8VHRYt7W8gMCvW1TezbDtbxg4xKgPFjep4FRSqeziGLZZdeGzHpiNd",
  "key3": "2GZFsNU3MACLa2mV9KMB7VV1rW9BJEdmxvVAGjuBJ9Say7MJ9LCgCMWyL5gnYGg1u3EXcVxaT9DPXK4GGx1dz49v",
  "key4": "5et7LMUJeBYwwHoyrGXNc3pfBddWy9KpVQcRxR2nXzzfD79QMrpTHfk2j9LFMkDp9FjcLJGZkkGBdoCSUvyag3XK",
  "key5": "2HAU7CaCr2QhB13mdknMhLdHdJtZjcJJdnGRB7HVCaZNNS8QAvG273VQycmPZYLsfRDsYNKqf7LtRZgrgsx3qv36",
  "key6": "34qrTuzi5MTzeH2PegMebNw9rx5zzaDvc3umAKRnJjbbvqimimvgtv36C56EGHAGwE5WkfA3R2gdXcUPUQmPVU31",
  "key7": "VK8rB2wtsX4jKF1znffGy1dm6f2oH6ZotegkcMboyk733sWWaQ7Wb3orMQDUCW5HZaHMPSnJkrySYmVJPhV24Fj",
  "key8": "3GTDX742wfWUVDJfrp4icDrV7tBrNoeBeMmZhcFknzKiCDFY7kKJkJruzi4af6StXHvimjJZkvLtqVMk7g7gX3AL",
  "key9": "3AcZivFqiZLKodzp32NdSd9KzmEe1RzHpfPSatybj8NXzqAhHYdNgC14v3HKDGyQy8Ysju2hSnvd8XgvatJsjHdu",
  "key10": "4bqEP9twbBA2VKL4vC5aXp73PvfjwJw4Bgv8DUpE8RSJdW6T4KT1WymqFfwhZt6iPS8BN5atoAUNLJeqfEKQFGS1",
  "key11": "DKMSoQ8zTom9arvtJREQLuvYVHAMtmw8YjYMFETgqjEgCpsyJWimmDu7Wxr9ps83htdtjcVyyEXgYJhaB4azVkv",
  "key12": "4Sgg73RC8hFCs7LLMfWAFVEUWKUXqK1zWi1pKE4eaWDqgEyMYMqYvSt9fpDxr1AzNP1QLprGL8DbgFd66tWmESVQ",
  "key13": "443BpXJDzT53tD1dwZCyLgp1MmXBeKSY14vDCzojmQdEM8Fwu9p8ytjXbJGqYAFrk3FsQzgmYNuf5jmwbuBkTGCD",
  "key14": "54JxvKyu8koHCqVqzSjiiYRd4C46NKP5Jw67P67VYgwLdpdMQe2LUWQij9g7XKUFUKNLLagNLaeeKwdtAdAZ9Lvo",
  "key15": "63hoGjQUckGV7xsXYuhq41XxdD2pa3GJujV2NqnnNndoUQSLYr8o5FqzvV6q8gBi53dWJWs1W1qJHkwQM6hP4iUi",
  "key16": "jfdWRxxbp3ZmyxGjSp3enQiHksnxrE2eFWnXo9hLLHoLn39CJourxCsN6wfsTHx2QfEwfJtUVg3v2nwhvEPsJoP",
  "key17": "4bH7Ys9zgYZBT47ZxqVLAAcy1BxrGzY5V8iGfVqqEXkkHt3H11JFxnkw7Emjw5Py2GcH8AMzTytV6TXzvJXcLjQq",
  "key18": "53QnwZt3T3FJnUoddJzcsGxtTqMoEpdw8wwVknXnCmd1XomwjazVMz6DHkgR26iomxskofSGmQ3ZTWAT92EFzd4L",
  "key19": "4j7vnN86xgLp7DScJsnSN5RRJKxLc4kcfU2gnBK8pHiWLV9myqjEYVuu4cu36Q7JtZT9knZuphED6ea7rbAVQ3Jr",
  "key20": "Ao6mapuY7WahwBH3CsMVKrEcXZB2i2wscE8smLwFn4hsBheYQum6bA3VgH45rZLR31FKTE8yxCN749JYySjGP9N",
  "key21": "5AsQDPdcjbRTQ8kK1ZrPbSuDjT2WRyrtKizjsKxMzNDsiSzYi8HJn5avHTzepDjr4tWXLrrDb1dMUAqKC58akJ9h",
  "key22": "2Htfm2KSBwEgteqFk5qdAgTQyyJMB3U5N8wFS1axqpUaS9w5Y9D2aRZuRu36CFTt6rWzTLDJwjK4NxJ3zZLcUccK",
  "key23": "3ahEFzfCphzwSU9JNbgTDChj3Ym3D6rGF8n31hKGHFKCtGzvJBu8tiTRowDJFSBkcLLKhTBa346YHHJJEUChFFsa",
  "key24": "LbVta48VEpuJcqirZT39zhbz3WGgqNPwz4dt48MQoQNfkDa2mQitcfdvqFyKcsfihawknzMFTxLd3eJkgkjajaY",
  "key25": "266T5PxpJBwUSjD4r9dkNTJZ7syWQHv8gtB8Geycf39MDkjdTSH3mb1ZwAooc5vn2iphbbmBcy2RNLxnQ8VxJoTM",
  "key26": "xgT6HaPTK76mJm6SJjknydWuC1ZEgeCJ6pXX8PABovBEffqtPAT5TSBmbhTR76ZWZ8PnWzvQDGecaNpSkb3pS5W",
  "key27": "5eRESz74X7bHnySnFvzxQ13LZppbqW4zDUFuL5HeatDiorc9hNPAzcWkDH3ZFJ7zFPghgVhcECrL5GksYSixpZcy",
  "key28": "5LnKnTqYetpXGAs1GcJFv1rwKNYycnppfoDaAeb65m65E3DU4G2zUfvsYnGWKoQQp8ez6yobHh9S4zvyA5sN2MBM"
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
