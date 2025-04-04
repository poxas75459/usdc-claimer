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
    "SSpovBpj53gzcgMLZJiYSj6jW9cuB6UKeWEbPfP7xkgnWXtqXt4ae1cMVuzbs3puvC9fb6Hq4KtAwf3BA1aBjFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65muYep2dCw2WUML55myPL933d26576PDKUEskq2DHeE8ZirCpFiDRcVDnVQdn6sP3zQ1wTWF43XiHHj38oBrWVJ",
  "key1": "2BMX3ZZn49fX2uwpqzyEAKwcUyMcebn4YYqtoEaMXL5RyMxkQHvVDAQ5JbEQYJPVtf9aPWhB3zU8rDFscXd9keTz",
  "key2": "4pQDBVKGVZ5t7dDuRx7SZhydBoTqXuHa2q6SYfzLaVmyaFJJRXibCzrKUUxjyRRoNJNwo4mVZnKVUAbL87Pp37eB",
  "key3": "gggbDsEd6TUjm2tt84xajgqveMU6XAN4fL9BhJoL1JaiZ1fPUKZtt23Xfyabde6rZqBzcJe3KTK5S9hZArVDs9u",
  "key4": "23VHzY1DxQvSSTQkX2cbqYzoeJTmv1N5APs93gAxmoSunGdBgCFpKZFn2jm5zUQwoLX3rs8hhJcny19zGewxEGyD",
  "key5": "4DqUqfjYtFNdNNJbBvS7fhFbmuWmMb3JotvA38rmFp8beWxm3VvNCn36KHvN1oBF88XzFNvViFh45GNx1Wtz75Y8",
  "key6": "4fK62V7QZ6whKVJ4hVBPSpZPCjkyVmnTXiZ1BSEkZsEVYNBX6FFdkBqwM9qQzifetMMFyCPKXkn7dZzC33Pxrg8J",
  "key7": "3K9NeuKfKPjfznVxGWgAWhxcQeaDRBioKZrNDZU7EQKCbCWg4TS1rAMxaMm9ARbXJmiaeXwJcrBSRZ1j5ByW1Ldq",
  "key8": "5ufPKxaE3MCPeHVK2xRyJDpjwAJLRKoHDgRzzrpoPDTSmw8GbbrsK5oBRay3npjvpSXqBwHAGL7LTdPJqhCki9To",
  "key9": "3pJCUCkHwJehCN2XNHRAZpNAAFx2x3i54dPo1F1C1F4aduuTS76BK7NrwGiRrADHn5hxDa1Dptd51A7HmY4afxYR",
  "key10": "36cA8wuZUBV59mTzQnq1zoBKTWSLNPTCPmBzpYfJLE1ME7gVLpch3wdaZUm1egUPBGn2r85RAEKeHAZ6JuHbsT8e",
  "key11": "2TKxCcQqx7xPuR7sFdLasbGjxqSrJ7hPVPEN6pAfViBZUr4tr6XShai8b2yebSUMPowxCAL3tsvAqbYKBKcFnJoB",
  "key12": "32aAEzAtiEh3gojSLYwkg83YeozZTrZAyFWNxg4zwXW86Z4N3NF434QHdgDCKMd9uft1eAb8ENhFq1xebL3Y4QMr",
  "key13": "2139v8aasdAqBBFvxpFcUEzHvNxBVKB1kZYZnUQ1pMrGMS8QDa2WCdrVU1V7AuQgHe4sBdorshN19PFLsWveTA5q",
  "key14": "2h4tukvE3UgGdtP2eXDgeUwPEoqYJu9EX9Rsvt9s9KZDvgnUA1czw8fPCoyL7tWUqAfFKMSqyJeKSUVWVBDjenxC",
  "key15": "2XpjMv6fCZTYDcu56k2ndULMFNHLahUkmYN9Go92hx2abjEe3R9fhPQbQfJgAh1ypJHw8ZMd8q5u8SCBYhwqkvEt",
  "key16": "MWTCM2rGBaBFZxbiSm47HzBH2iF55yzfSFPF4PhJs6K4BMqDM5RNDmqhbiwVZM62XPrRwtno5wiS993FcTayqHs",
  "key17": "3sFF3xjw2PnerGRnJcqPcgmTPnjdTS8FBFQv1M2S4BhySUXrmsLg7xmpRCGiiBH2mQjyZcf1Zq3S4FsGnG1GCPez",
  "key18": "4uXE1ULhgQfAt5oewicHz9iCeyL9aFviw8inhXvqYP4dpeNrh7XwSaKk6CPTJqcnkdsK9o4kR6hStPAQe4CNpQGs",
  "key19": "4jrteXwZcNxPMxMRA379r3irkzy5iWPSWbYHhhUfrXh7FgH4itJzwwHxbKesBtd4TeXuD65H7XkEgo4Qi3ju8iaW",
  "key20": "5QmUaGJnG5s8sKa7pThRTGsmPt96874tK5xwfheQMkxrcFLq822ot2q3ZTVH6qPYbCF61MQNcuovUdP4wce43roy",
  "key21": "NZRkhNEXEHuB6PSd6GhVjt7M4ZwihJGAw5JGzMANnQWmTrD5Fng7rH7h1Z5vFCov9Qw8oEKdim9zZXcVdGi28Em",
  "key22": "4vMpKwV6uPZUUvMRekSgJtKasZpcALWP2JgFT7cvdhhm4bQdNkHWxfLRjZNH1xkJcJmcivcR5qW3XSj79qNHtpb7",
  "key23": "5KPTfLiKuNBSKKPsCLFJearwokRjKJnXdtE5R9JUSANzHkBx2hu6KPRJCAKyTPMbCpN5SBBsPSysK3VuogizdDge",
  "key24": "2utGuxbbfUGcJjT3Te8dKgLr4VxeAdKeGAHX8hHUuQzYjyPMC4utMjVRuZ4rEfnGN6F4Nr4TMEjSCv8KkHWYHUse"
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
