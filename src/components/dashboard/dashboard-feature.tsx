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
    "5oRD66xtzdYbpB2YrFi7f2PBVLW4G5VTn9gibBJ6Tfdo8U9FVkAfhQ5jNnavXizCESN8fiGHHAMMk6jhqgvP6VwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v3YXTVWS5bj4tuYRDQQRMxeiQf1LqBPgLG79gLqynVAHEEE3DmVNFfpF3pPaVFmDCojrDsbGfqE5eY3amDJQGEJ",
  "key1": "5uMVmB6TVtybh78eQemPB5eeAJLzw36Gry1u8KQ3445bPtn4QYDA6JSpdqRMz1riCfQMLWNdKP6ShiYeqkSF1hxC",
  "key2": "4epWjitLayYVFthhq6VNvjMmeiG5xH7NTxHYxjBKfi2JpnBtkKqg7hA1Y3xAUnVAtQCeiCrduekARUuTmveqdgTE",
  "key3": "KY5G645ezePQXk8FvbLBqHJTngFQVUFPKF1iEq9byvKNxtJFY2qhPTHLjahUfEorR4pdc4VQFzxBYkJwmdhmd2M",
  "key4": "3HQQ3HQpadBWWf1KpdJNFYFgZsboo9zokjJGqMedwG1WiUU58kkq8KuX1ZKYqLb8VuZekzp8mYmzhCgqqrbbSSJS",
  "key5": "4Ct7XzJoCnYFy4RUZuRx2SJ4PwPHeggSnN5sn2bYjdtdBynKkoEcvXKvretRFpq7BWuBo3iPrPB7vABJx7qyzK8x",
  "key6": "uvYxUDNmzThpYekpgsQdHuvkmBvFPy95zLtft9mWqTA1U7aJgxUjH3xzfPzcCV7zhDbhJojJkLvkrZebnqohgiW",
  "key7": "vm3yPJd9YvhEC41pYdKqzeJuniwYY7hAWuX7RjRNX3XeATbASNhWWdMcmHM7J4PnX8qumKdFgHx95QmnHZWrYuP",
  "key8": "47qPVZM77WbzbctTLJ6DxXdZiP3uogvuYyswJpS6S67DXujHpqcw6adEvYQTcreMAAJtZsVm4Xqz7QuXyxMf5D5p",
  "key9": "5NaD82N2nEN2ZmynXCAN8myQraPUuUXkyWsmfWsFMWw5wzHzPmm6b7uCHQWvw6TzXkyyvYSDXJVtMbWyiQnZQgvv",
  "key10": "64ZnmSTeAFzK9qphWnBrNoC7vwJnaKc539NzAw7a5MmCAz8cxif7KN8Tis25eh5mgJDTGSz85rmQA1NNFCFUby1F",
  "key11": "2f1i4utjYBGr1HG3F6j4gZi8WD7RvovyvF3iJX5XREJJKqK2mXibKh3GfturSSeD76rUJb6SLxj5Dy8JXpNT1PJa",
  "key12": "3Q8QHwaVGoPDTsxa7RqpJptAX1cHJNVcfQbpvbefFY9qdBjzXzBNb3wvEyxVEKzysWLFjUf5a56Edbaqy3M1w1an",
  "key13": "64oaRcdRUzSdD2DB93Hru1rSWCuRPVt7k19afjjGM5FTwCPR2Cdrhr31Rk3C75DQQRR58iErNZ4RvMr3g5h7vzp2",
  "key14": "3A3eWnzizLUQ6dHYoBve46Wuwn3xtbnaDjaEJ9iFc2Lxtvv4RpbNHP2kJkMSCxnRsyU82P9juXdiwHXX3zBj1Lqi",
  "key15": "3YzQ7caePsktjPinXuckT5PkwqPG2ffFpX4k1nC71PFpUn5ZZ9ZXxDtnzaFZ5y98GnM2eRVcg2pPTwXq5NcmbZVP",
  "key16": "2bMXW9Qh1taasb1Cou2JqQtWwYirU3ovHrNgCdYvNipRxUqh5riRKbEmqo1o7EDbUSWZmj88L42Fzqwj1PCCyZ7K",
  "key17": "3BzeAxKV9rWxej87DAz3g4AGWjWFwPr5QzqcE2MqGHYkBqphA9BsiyPz6nbc2JFMR6aDyNocREkSSbcBWY9vJGsL",
  "key18": "2EbbCjgcPCy2qZoDYWLMozk9bNyynLqE9fpBAWpdLVbpAUDaMQ3qg1Ud5Rp5ycV2A6s4C6HDdfn5wE8HfZ91Z2xu",
  "key19": "5rMA2sdFoK3rzEdtzr92ser44AV2JpQXeQxd4kheSDrMBmFDuwGap8HVt4brqApNdPcaUZJhLs9PWVdFyJd9wgDF",
  "key20": "2FsVWe1fLiNFXkFH9PPAGK7ieuBmNfoKTFkSGMEcxukMEMfLrogRryhjVAVdaxigCZsS6Qg6jZNvpwset6eg51nf",
  "key21": "4q1BhxrbHJMhMtHHJLmKJtnNtXxjanTFax8UP13bJ23j5JDtGao99xbBPofSayzh8vA2XHGHN4MCvVU8obQn1rvH",
  "key22": "3NZUi55vKtRZrs3qQzXpFfC6mi8eBe7L2KrqRBdKMhYn1LZLggfLUJ9mPwzYmPCcYGp96e7j4cgSn1VnZfeVTSS2",
  "key23": "53VYtmcVYXs6gM5oVkgjueLZsAm5iyNdPe3XgoewurdakrBYTBXkAxRJopDBnXg4SKcurEipW4bbEqg8Mr6NDBkz",
  "key24": "2HnSowihLxw4tiTdfHCrp44JocehK4QtDfbyYP3XjNSsT6WfRstaBHX6jsw42xyZU54gqXMsRRkb23khD4bv6NLg",
  "key25": "4YpYRH2pSVDPHxUFhMTQaBg8epHGybj89RhXwqjt7XY5kg7GztzuixV5JAoYmgM3WXKLq9iUkJznYUjAM4P9jeiC",
  "key26": "46oN4u5566ABodm7L15Ujor3aC5DyQ46tLNKFaiUuVQMwvHT92EyegbYBTghRvMmDLNk93gLxBSePJs1ojfkR5Hk"
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
