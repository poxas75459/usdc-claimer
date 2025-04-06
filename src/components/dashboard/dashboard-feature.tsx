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
    "41sqoAvUMQ3vddMdLVKCmHuTwRjEVLD1AoZjVTmvM8VHtYFVRSYjpsjy3CPJZbMbxY51uPL4xes9YFwqzppq8ore"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQTsNiw9d9tuoLDQR9dHWvX36Z9XZPMgKcHM2RQ5bGfemMCbCD9HqhQ8jzcH22BvZzXXrCgNmkG2e8KziqqLzcn",
  "key1": "5cvZYSobev2a3htuEABuxoUknMnBpMsBWPt9bAqfzYvj97AfMpiuUUi1xt5vjEjniwyABBQws9RnQQGx26eMa19x",
  "key2": "2yRjMLayd7coCrd8k9VAYtJdmwgumGMVBJvjSPFQ1rYMDvgKMwbPRfbuMoQAUJipgGZ2LRZ67hisiDKThf9QowxX",
  "key3": "5PyRMgAA4BrP3Dp56rdnRHYNRVozNt8SePJW4ti6vXoBHv8H3zfEaZhU4WSUhrjmKCHEdBNaM2QiqHt5W7f3GeXB",
  "key4": "3rxFEoECa6wU69tt63y7e99yZjoSKrJMHejXRNhCVsRRjyvBpfdyHTcmuivcgbaXQMoGnhtLx8joSz5oCmGPZWKX",
  "key5": "3amCwM7uqBLeE4EpNuwkQvhWdbsR6oBaSk4ZCTTzhRsQbvHjDdZFcSrYNA1voQGDkM449fXVNMTiSDFS1N7Sk6i9",
  "key6": "41ZjYAa8fg6cXWudrdx5LF6DQeqpoKJ5vjBgivY9XtpTSjuzgWHED3jsjUjYGx2r2m4d5MdNmNWzfpbHZkpD8EJW",
  "key7": "37P1yBHYaNZVGffapvwZnLZmfxxyP2tarTN2FZ8kceZWvsfNM4px4HH7M5M8ZqC9RWcWXGYhK2WKBvtkqL2rZ9LF",
  "key8": "p8SjBW4xrxUh6fWa2A4dT4ghGyVPGgRahxdeNHTr8B1ToXnAxKbhJnYbQ8fHqapVTeoSj4mPxpLkDt6Y9dd9iAR",
  "key9": "4EgxdKNW5W1eG6boijfy8TuSWEKeNcqS13c78ckSf7AreZCj4ESwMQeZnndUpse9Cnnf4atg3AmCFz44mQj8p2qM",
  "key10": "4tFJu44HhscTyDwRqmbGyVinqwgwxfzRjyA1etpK8SiG4xYwd1y27zxnmWLfHP5Xpf62d3KVcth6hKVni75LLs4",
  "key11": "4PbZnQCMPAXf4qpoeLTMFfW1CLJ3FhFvsDDdkd1cDNSa4bXfaJvpt8x7ndA33JnDpHkbQnyEUFqaa8aghcdwxk4d",
  "key12": "5ncmQfWE4XY8rWtjYuB4ofRxcuyN8ZSvBx8SuZKcQfygh67cw4HzMspUBfDvbYAAcufPiiEAio6maDZJKGkkwnmf",
  "key13": "2dcPDCA9iC3zNuEqC9ESvxcQcmqk5CuX98hcuJdkzQwbcitPe896d2pXQLsGwtDsLQprHUXaSjwhxHScdaPEWCRu",
  "key14": "2xQQ8zgr9f5TePmmyimNByst8vsmhccqo7QskjLCDvP5gHJsmhg6Sp6txeaM5rzg1xqT4RfJjxPv228mS8V4W6gw",
  "key15": "3zG23EwaMxVQNPef4jTee5xU89WBLB7T9DsHsvN6LbvWotsPAZkEuciyuLKabBJyYVpxsgGXNo4kxiMhvyyCkFow",
  "key16": "4V8kBenzZcF1eRzTKyPtYxrNYHMh29ApycUv795UGUfiy1xUiSq5VXetAJChoZzuMkLTDZQyTjYbV5qn8SJTeVv5",
  "key17": "hWwxKftRdGd1ENPvpNk2hUnbHZABVMu4hmyDwmWMTpwpEzC9ZTg5rzEov7BHPGf1S4sZMTP5cqTYQjwaD4azzJm",
  "key18": "4efKx4ucv3t771YLHNfn4RUQBWZhYa5S78eAFoV1incQBzogX2qAD1LUJLLXtha5XowjnbFT1ZNzbPKYwQi6ypov",
  "key19": "5G1KCooVUw3a7ib985k5wjKNgKdmayHvCECk8WgzTahHaHsQYF3vPx5hipWsTbzsDMyVe4zemMXpayvuhBqhxDUa",
  "key20": "65WsuQsH2r3KCY6Ng6koy8rLHuWmpE9Fq6T2NajNc8og1HZKMk1smGoJn349Yyz3XTHjQhds9CyyFjrEcMPovyqB",
  "key21": "21S1ZPEMCrUHzhHZofmotqt7mLvpNx8QZezsu6iLYtB5HL8ACdSSnEX4kVR3ki7Tio2ShN1KDAPiAvp7d2PNJp1L",
  "key22": "3hXQGXMopvzepJ3BRRTQFkx2LAXfD3TgdP5CW4Fd5h9vVds3nR8F1nu2Yqi6mkbiEZtXWMRggQsKxPGiSD2E6vEx",
  "key23": "3SSUJ9DhUyjd3vJrHVTpR38RDikgYwAWusKfkotknVcw14CnMgowxbSdcwATQzeuTfXn4jFk22g26kr5yQZ5LtGZ",
  "key24": "a3kQ7gM47aMojnb5xoU1cahWPh4dDjfb6Aaa1kthTeysdFK79aXTncF47st2YDs3xzaKhko8y8fmVcADZUFYeeG"
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
