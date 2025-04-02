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
    "5mq2uT2RJriGa4NZfSxFowgkHsk716ipyqiT5NUPT4tCpkamRwwbLtREeseXh3fPSb4pzfNfvrWraEGCDnGUSHvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59H1N6uFaRNetpZucJeHnzBzeXsT9MejUU5aCFzEeaYgXi32gJE9fQ7NSxAiRsdGi7C8vwZTdKgNGqiX4sVbHBB5",
  "key1": "2AwDXHPJ3wPzA4aeoixNPmqH53fwC5zSuNj84DhsSQSAGaqqWssLLFeC75eZn4gASBf1G4HCjGiPh7GsngQRaQgz",
  "key2": "5oVqB3rjuBf8UqLsehqstmqssYxzaCrjdJ2KM9QxSjuiVyPDhFCuUFXciQbfKtHVmWsjxhSH99rXsi1ia6zhjb5K",
  "key3": "44e8AgVJ3zM7WHZ67FndJq6ugPvFPWPrh9M5rzsTmvUUcjtrBc6sFcEXo8CCsoAZkm3a7Z5JPHyea1jSa5SkSZrY",
  "key4": "3SaxMZdUCgCFkp9BPLco2P7oEfuUN93n4vZbx2ChgYYgCfm24BmvrqeSDuMHCp1YhFeQCTcykAb374B3eSCAEGYD",
  "key5": "2PSpuoxhMiJtSXhU3eG3U6am1wcNG1gk3W5KdGzbFkRuNA9nSsSfzkhXdGdcHdbGE9YZFgAPFERg3HzpoS74xhKg",
  "key6": "4D9ekNuaoF4z1Em4PQVeHbjCdsqKqwi8ojpXdK2hw2c9XrsodSZT5TRQEegVBXPjhzfURzkUnERZtgE3LNzgt8eA",
  "key7": "4EKuvELJ2aTtdJbojZEJrSLBHZVyfQSuGmJvLeuwQNepZigvhX56iDPkLXtX9smvXYW8nZR1c5XTvYZinkq8zPb6",
  "key8": "TvrGWeNaDtBjFPcSmqniFeUF9Px7kf1ahBhWPKdKj28toFsE93RH2kL1gDAhsfz6ycbhUHu8ce7sjAqXgsUni97",
  "key9": "5fGdM1D3M8UKAxxDMQA5K3a7ey2ypirLYCi2b71wPQ8n5gNJ3GsVwqtpSVsNQJMeu2EaTrD7StwphCbUJ1m5W5CF",
  "key10": "2V3o6GGK5RbfU21cvh6iYK8gje7DT7gDDhLZyXgDZ9VTtoSWhzM4r4Y8wFMfziqRtWZd63hgM7Rv8dTu2xBzb5aC",
  "key11": "eQWtHV7ZJhtZmyntmzr6V3CDPkzDieFCy8NjfFrYvkwrGALjAPeoWg3dXt9YcQS5LBcbuRxLajzu53vn4vuaYdq",
  "key12": "2oDh428othQE5cLuBAQ8stSrrXJgtZBZBboJqKbKz3S4T6dbra8Np5HfMCwMu3RJM56moXuppJfUNECGAWtZDm3F",
  "key13": "5SToGqU5YFSuaafjwcHCb3ZCch8EBLSiaJmgW61YmosdnQgMGSkpQsQVv6CNNcPvUcfJfCwrmnZufNj2y1CD6YGf",
  "key14": "2RPrQXYTMbYTFRmpi4k9bYx2hppRL2HFWCU5rzwTqWVsDjbP9ftGoezrSAhYR5DkNzCxeriGNfkwHzkqYbMD5HUb",
  "key15": "2RWrkEZBQa7Lv4qaF6MtUcuKZMZmp3Mya4KgZ6HfM1qkpXa9uWT8ZcNZk7V1xc5j3VWUCXcJXCgA69V8S4pg91GF",
  "key16": "3dw4azTYmFur9mhXr8MbmuQySedGprpPg47fLXcNVUj5J8VWu3caRWKb4J1yahcy4LL4ing7mqWMkpJ4nzQY5KXm",
  "key17": "26BPD5LXELezUNpsajhYoRWNrpNC7V37fefzdn48cS5biN96SHMGYi8FB2p7Nxjwj5oBBf35uCuxKmTe2pAL57rS",
  "key18": "285yTB45i8W7gx16aS8ndWYRK6ARPewABdePfCQgrJnZvZVy9Pv8siHeBeY7BauvPeqVBsTW9JyCtNYrsawJR259",
  "key19": "6c9Z5q1Wje9tTCA185KT9Fhg5iVkK4wLFYRxAT3grgxkty3qPtMCseD9sPtBLyiPLVbr3tk7HTYQQ5ZYxBFJxgJ",
  "key20": "3kwBBWN6cASVjDyiCjTY7VAe4S9zjcQKhvcXpMAvnZpQHA3AXMNiTDH6J1s9oGjfqxunn22krfPQmWM24r2qwC6d",
  "key21": "4WJfstQqXT2XSQs9CigjLfKhoFk8q5HABwnsUjhxRZ58ntgPvAFGkYQkNEjxjs3nzAfkN5CST15fjRn5WZzryN2",
  "key22": "3gEvSBP7kCLgCH1DaKi45Gs2dRRmUtZK81Dw6RP4d9ZcdnYYBX5QYN3FwhZ4VUgekgUApSQD3kvoRi94BAnyLp7g",
  "key23": "3PkR5YvZTXMZoGLYiTcHirYxWdan8HHzLfXDa7jWdKdU8K8YakFeytCWahP3z54Do6nt4vXAQQhSG9o2unsJokam",
  "key24": "5V9yUACf3hMYEuWW4HShKWyjfZh65SYJCzF6RBdTJCuuwdogaT6uxXJ7SE4429gGYLS4RDAYWcXaJbxsty1FtZ1i",
  "key25": "48mNHRbdbj6KxzVmSrVJBPCv2YJMxWnoEcyLNXHcHpHgSgsUNFTLjKhHF6ZLdaP42b3EXJ1jBmHTqzAJQryNPfWk",
  "key26": "3ms4KhMf2RKsqcavEP27h4hHpckvBAo1Xda1AjJMuFNjhrRTDMLqXUS1kmWRik1tSwaknHmN8CZJQxVtZiAAv348",
  "key27": "5yvMvnfLvdypTGtcwgbuuJzqCZc8g529czCSgWFgt3rauac4NZJu9RAdzUqY2r4DVeXFqxtmcPgYcaafbNg9fbEP",
  "key28": "8khNW955G7dxtYfF9TtoUdFxjCuXQ3y2wiWLfmtb4HdwF4UKe3kCDCtZycoA31DZJkAwFdFy7TWX33mVBeieNZw",
  "key29": "2qxqVGjvfZvPsrbiYzKn5Ax7MYXL9Tf3hkrfmFz73H1fsqfPUhy34YAbmtJgfK4UcbZswyR8AAaodRMPJ9zK7xaU",
  "key30": "3CnrVwEXLwTEZkRt1j4kn9YrXwsuHKQZ48ywAAiYQ7xDn8aE2tzKk96SrqLiMJN8pXxWv8UHTTyEWpNARL9367hB"
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
