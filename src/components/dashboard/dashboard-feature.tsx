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
    "46nSXbpEETymU85LyVLCsbNQCSxPtK7euv7oYV8n7h3KucAoPsnsbz18bheYLoVPViXdNGFH328RDkhH6ppBXxj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAswoZJWkhSZq97BX2EasM8bDvTaddpi4WozScmH2H5qpf1dM3LQjtqamFViXZqgkQHdAoU6JD4S8UXUDxYcKw1",
  "key1": "3GeEoKWPE2BzBCZkqCHoByJMuJGtbEkSVCW4sPZFePzPJb8zq6PnzxWFskFbygSp3VDhagtCGU7i1N3P5M7opfpM",
  "key2": "65q8Ta4mv58GUGhamSXKzCfsaLTSZp4gnyumJbM9oDKWX5GZtrRqQg3MrH1U14rNmDvK2ayB7sWL4hDybXnLXuVN",
  "key3": "64GXwQq8Xz2U1gkAAPZdpUdrZhoUbp8ZXymR3q3rMCdKQVRP21GXEQurk5QnVFhyPTWvVpJkZoD9Xe9mLobiSTUH",
  "key4": "2whmaHzUfBMzkJYymgraTthe7k1ywEkb4NHuYE5uiUNAEPy1w2uvaQZhmciwSXHX3CX8Ga2vqiZHgYLpjZ1q24DC",
  "key5": "5qWyYrBFG65ueQn6b7qjVnRTwYT1LpSXnAyp9mg21NfvnpzM1EJoH9vEuvoYkBfV41sV5RZPF429ugoKRPyAwMNR",
  "key6": "2p6Z6tPQqzsp329pHx82LmboQ6SH68TEFAp5o3VoFFU3hEToKMJKdN7kG3C8QosUC62HZTiot5MAKtLt769jsXPd",
  "key7": "2TLbWS3CjJoA4p748LZBoiuVZhbdWMquLEbhi7aCcFsZZCGLJt7GFqGLWmUw1rscjKWnDWL8dhsV8PzuzPWnSzvh",
  "key8": "4KyiTQTBvcEwuD7rzi2owbrNfKbS9XuQ5wSXRPVfNAjWp8jN1QbrJnKdP1KhqwsJCv4NtirrJZ1kv2HLLt21cvFb",
  "key9": "2KCn96wPR8t3882STpcxrGPxFgREBCHrobj8YKcikBYCennZHWEJ85XJz9sYNJFst1eEviYjKaomRoAADow96ErS",
  "key10": "5kzzWXqUM8MnEeUSnCrCYivk471GefzAg4UHTCXfrxgcRYKwa8HAR4K6fxjy2Pcs2WkTgEBMogAs2GcQX999fRuM",
  "key11": "5ZAHr7hwzu4xVruY7NdsMNr7SZiPsTTvRXDvAKQ3KqwAcHz7dioSxAdvVjxWtgJHuqGvfBfC7U1bhvHe45prkGCL",
  "key12": "4yVfgs7dM6s2eYLqd4arbWeyi1M422sfapBLJXPRUHsmHU15fz4uVvf5hjoatT5TdfPymaZx2rDxUpMbigKeZnFB",
  "key13": "2wfVST5EfMkXBRd6WCucvR8N1fByopsfiSwkxVcRsqwM38hHShFWaQBfAtsd6y2a8geCwHRS9MRtZp9d4ErTLNxK",
  "key14": "3JFvxgGptJFGfdxmXoioLBqQ6rS9w4e3QpJLE3UTi6StFPZQzWF3ZnSArbvxYE5fSeC9zk2Ja1N7s1CVw3Q78SWy",
  "key15": "1PXXiDu7PBQP6CrYx7GUJWkR4WuEj32Z1wpCTo35LqfzSSH8TF9DtSsMBBJLtusz2D8kavik6MJqY2ZGyzFnhgs",
  "key16": "3W4HjKGg1wDfFn5PH9jCuTTkh4GzjgW6tGjyU77uDW6C91mJCCFtdqWH72eMyZW1WXJ7uyggfFPTMbdEBPcvBxTm",
  "key17": "4o88c22hVTuvtqmTeBdYbycVFAhcwUjVt4cGAaJqSAatmC6qFwuN2n55q7n1fU5uYuK975DNGfVALgfVE1CCAWvK",
  "key18": "3ac8nUhtvXqoe6yPE861rv4pYPcdPRSUXkvrrnQUJsiFy9vqqksZ9fPHTJpNSu2pA7sJ8cY93TjGQ5B1e9PbUEPT",
  "key19": "2iTcoJkJiUfzxMBraFZ22LsAfFtJCpxrirQ7GdVfKus3U8TQspUUqcZXHC6Y75NirajiKBeKDKdoptQSZGzNujgy",
  "key20": "g6uFhri98Le4wRFGVWNpHiDAYhH4eovH8mj5njqiHkiWUSazAwBqCaLSN5gMUo4ZtpoZoEvAnrt98yGishHtdLN",
  "key21": "4SWzJiF1hDM6BRvimefthBsGjEiATU2NV1MoR2pLkydeKCHHe8VKuFg4jiqsXK8qpEoeRPySnVwg857Fro8yBgkS",
  "key22": "2D7siqZSvNF64ciEXEU9Hi9v3XpfUXLhYaiPvAc7zN3gZp2YtguCf2ZQrn9s5ZvKNZeBQ3NRENPNj6oxF1Y3Rhd1",
  "key23": "3aRaarwKGQqGUuCsSS4MjxasQbp4b3Vpi8g1nJCUEnoMoEk9i1DKBYCfwbtPgjQyMp4JRjuSiNGSucDPxCtVD6ar",
  "key24": "5cg3fCvtCDXP3GKSXtHrdcmDiLuM9e8faqqcu86BiQF7ndWXmtt74iEWLNpEWa2QU25QDUHAnheMm93R2tHbuwEB"
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
