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
    "2FCJWrAM4BFRnK5JmfQhWZVtwepvaQ3w4hV1aRAX49yNsVm4ndU6cAphZZCqUhfi7D8ycjGe1RqhZvjbMFyqXCym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTEsqdGguiErFNiu951coUnEnQ4xLLnwBvq6aTEkrnNj1UwATbnJUnXcTziTuh86kSSCnsg9FVV2MxZeFBsJK37",
  "key1": "3aDTiYTbf33HChDELRzF7kWD27yFAFGpJpCL2qVHZJBUfqzK7XWg34E5npxneHtwpJQU5oykKSPQFEv4WueYHzHK",
  "key2": "2aUcueLx6qojdxoz4fJRrmojNWc5y87t4K1EK5fS3pCKnYjAK7twpc4LDxc6NY4X25gQAmZFS271LvhkPLjJfAdN",
  "key3": "4F4uBvABWkkss134XQRnH2kLUqpV8i7wqVDcxgmMHg66fwjcCvb3dnveW2hgSKXkfsUwaQzGbnHHnEyafdGUT45R",
  "key4": "2qX8jC39m52E8wSMfwEAcs3ZSFdeCFN7Dj7A7g8q6FJuh431DMGzihZDUUKZGwHeYbqnts15dZL3e3jd6PwPqVwP",
  "key5": "4cuvw3wUGHg6bVbssAZCFy5gsnkQBwiRU26oTZaTFpvs8JFKeYDzHKh9SUQKevbVMuDTdxgHWtLhZaGFXYfmqbbs",
  "key6": "3qSVSyNZXWJZbNCKYG981EMDt844Mwj8atxyU94sktjbwUQsHkadwZFuKMzxbfQUfatF44KffFUN26CdCjfFn3bJ",
  "key7": "4VBDWGzu2oTMDkVRB2rPZh41xxqTY7TiKTG1ygeWo88gsdXRrGKFaRBFTYiLEdmDBeBCDfSn57jQqgRRTaQZcVGv",
  "key8": "SE5oQ79jbvhyHz3GAU2s978WpfQPCTfDdLuv4r5NWYhXMewPp5QjNZ9c3THcsvGr4JaY44EfQD25RH7LWyhU8zC",
  "key9": "SL7W26MCPg1mKUzdaYHfvS5SRs1UXoq6cMpS381v3MiT2AiooKo9bTy4BWHeKAnpARYKu8GdtEWMVepYCqH3vfP",
  "key10": "5cHc2ojtaPGdJJHABsWv7aXXxgZPwbsZUzibXCXQ4QxMQgJzWS4Gkp5RuUpz6BqjbPQyDJvJaVi6tQMKueMGL5p5",
  "key11": "2oRNsHwTcmk4gxpdo5RjNNSEL4DwTkQJxo1PfoLi5JWeV17FbL7uvqgAj7GAmVyJpX9xwCLSd7R6mJySLV5J5PGG",
  "key12": "5twAVhf4az76LgoAwzoGX4Q1ZYtvNfiZ1XQ2Tvep4C5DWsCxw8H97qZMQ9oWmrN8J9W3y83HWpsjkQyLhP5wAQFw",
  "key13": "3DszxyPk7ipubbKP34UqRxFDVAtfZKTE7tVrkX2V2pW6iDpDyUtYULEECJBLTPQgYL64KWNcTs2GNCPcctJe5XkD",
  "key14": "49ntLKMhWkR84tXaxFGcFSNbh9EzcunLq8RoXCagBVczisA5WtNQ4cy2bPzrNtbRdEEiUEMXmY1zeRdvQ1vsA3jy",
  "key15": "3wdB5g7RVkas45npKZvuByLV8622VtqcnKPLnzUPbfBEPZUVpb5cez6UbpdvTSwP2yHmYPxq6qJ8jPpwx6fAc5BT",
  "key16": "27WkbMpRposw53GrmmfgNF9GZ5a4jsWRnFGGSB6UNv2FUAczk7ng1uqw3yR4CaatmUEHFq193sMTq8G5zTj2nXtE",
  "key17": "3U99RfzxW6V8K1xiUx1XrY2UPi2C5QQfH32WeccDs2a5K3ktBLLQw1aXgrEwmcKRMfeJqqVgz8A988mip1wD981m",
  "key18": "51kMX6TcgHWRKX9bwn3m5bzbUGfx3WsKwBSoLurEnbSo9NQVJCvUMVo3LAy7eQopv7bnH6Q4GW7Fyj7UzUhXorsV",
  "key19": "WrmR1rinnv7kmroCVWGeXuaqtFCY8rQHCJ1p1Esacn4DeycdLN9usMLWiKZdCME8rzP3XV6hLKyq7qwUxuWnBFj",
  "key20": "2E92AD5dThEBLwi7gMJt72vu5kARTRJ9dvktXbKeBVYskH31SvqNcDqAY5SZEE3M37T8H2iKYu4aP5pob7ZCDfso",
  "key21": "BEitWtjYv6MoNDTiq9sKyTVhC6La9PHqbRJbRxZcBVB5qbjRd7r7LgXkhpNNR6vhsLy6qh5Vp3kc4ekF5hZNJPm",
  "key22": "5fbZ34u85KyqpTkk9ptPLvJVid2vu8cye8zM7gTJkNCmgRcfNf22DgyBrAEMMNo6XMrGARg8ixwiUuMpExJfSCbH",
  "key23": "b8JRtvxC12bW5wXR2HJh8vmvCX8F1BLHMsx5hbGkwba6QGyjDCLMq4yt4WPLBh4L1xqfdoH2FAWSnac4dgekJxE",
  "key24": "3ESDNKSdPLQWe37ZHQQ2w9PQWknifJ4F72Aijy4dATQh53V2AA5JFcT7qhh3FeZ1zMaa1E9jkUm6GmCpAXVb9sA6"
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
