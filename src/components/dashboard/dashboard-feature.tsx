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
    "27nehyUQQUCGQzkqdWzR989HaYLrhdcUiKxfxoGKvmmc2huFwzT8oxa4xeMWAAYTN9fgAMXfHqsGAocNmQqqTtJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6CbrKHFd2tFwLx3PxoVP3UoHqdo4DFe8wRgE199xKoCi2kygArg6EvZcSeNrHQCEBFCUoSx29hEXT75smXPpKg",
  "key1": "h4uJ4rJxLzivGGQjyL8TuF6PexDo2xgoX4r9qcYgKHUY5J7AUxRrzCWRih2fvVobrPKB63Dvp8Ay8rYyUM6BnKK",
  "key2": "2RozqZha33LUiRsGt7NQN4kyxGAhseoNooq77or2ih67CGE25zZG56LAWrxz4XRnXRVadNNYY2K7u5DdycJPtxoA",
  "key3": "6691muSURRvafheJUghoeZ6mMScvRhiZVwNfwTYSe2TbxAsHJtSUd22zkwSSZgXuDeCRdDvb79y3Ym4q4dk69xhE",
  "key4": "2ixorTZBU6MbxKCZfA34cZcRJ6owsgvmEczE6q5ktim28VQ4vP44nCLDvqizeVxDz4GvA7T31pNjkqCCb117x2HS",
  "key5": "3TBqk3pkDkaQ3Xqtn8VXUcENmcxQyaevodNcxLPKRVuAqRRUwa71qdovNBr2vcu3n3mqy2TYTZRwnQ6MK83D4eS6",
  "key6": "2YsaEsnUVZgMdujcgdHwDLbhWdXdwewLyTSgosjxjEuhkXfLmTQPbmA3XuZixeX3DygceYqTzAXC3U8JPpCes3LV",
  "key7": "5VAXKqjUomYzkMmQRsHDbKd8QWSGdPnmKtB5apne3uogxf2i8qSwUpTmtjDVm3tGsxhmdCx2YqdZwGpssVtrRX8v",
  "key8": "28YQJsyMcgwHhyCGv1S68GtJEYVZasa4mBrzPFLhBdSCpGkcD4Ei9XpRKEk18u44hEw1UQ5csZBZHvu7rF3GG7tW",
  "key9": "53xWELaSQVh6p9d6rLHALB7ZrmWsHfx8KgSBre55x8ffDcS2LiZ4W3NDx8iEjtp7dHkVEFLnY7BKLxTAJcTDCPvg",
  "key10": "2mbvsF7kx7AHcWoyG6ARn5avG5XBxRYwwcra6i6MVWSxTy2kiLCpuFnJxwvchrevZTb61D3FbHUWmBXpMDND5Pbv",
  "key11": "2NQtvh5HbYnCai5hMiohb4x57Z5MG5kdLz3rYTTpmGCqKLhSpFDJjA79YDyVGpkadbfj2Ajayzncb4RUvpLxvyrg",
  "key12": "38srttW34PJsBDYgRfx2oKHijEYzhBmziD6rWtSxFZF4mm1s7DHMFBHHGamyfhURdio2tFJFQPpbiZ1f5XLCictV",
  "key13": "3MmPMwrErZ4BGWmbC9Aah4MAzVAZ3w2ZX84CsBBkqF48XtDLhQsJ4isrX2AdvbEBagLqhhdt64ovr7hxRh536yEa",
  "key14": "3v9cQQQpEGp2q3RzGTqdfBHDQk31TajMJg8jUKbM3QqNLnhyrdC7Pm7eVJDqoCmdSVNMFRiSUUerfiFRCnGRaHEL",
  "key15": "5uYst66qycFy2YM6B5CwDJoeYzb5faK6MqmBy1tdqY6ENLTroKQ8cfuUtuh551prVYsGDKdj9G4FssMkC1BFToho",
  "key16": "3KAf4BMkdt7YWt5dAg9MJBQimNm7VYNsGZCZADUi7BPqNXDhtGmHmKKiCAkzjJPDF9ap98zpMvfxUQmVnWxBjVEt",
  "key17": "2ikGybhpnnRA4th3Bwzwu4NRkNqtN4gTkSr496eGiKTvMRL1cRwadPV5dhYE7AJ71GV5ywEophtAaZrqGiVTtbUT",
  "key18": "3gVucppt5CWmA61BCg94X9p3Ce7W6qCqftmaMihB3JiK8an8a48dYyawNW3fMuVg6qMHP1oRsFye97xBGLxqLJWW",
  "key19": "3XjLVBU2Sabqa1ALNAH7rbX8m7T78oiv9fNMYEHbKSq8jdiV3e95WfKGwtZePh7W7afqZurkfGbBbrkgJjyV8wgr",
  "key20": "2jSCgjvJCAqNLJq9kLS9LsprChNXLK2kYf7e59LBEQYYenBRJrb95ZZrGCsAok8z8VjCF8eqMNCmQMQiuvw1jATy",
  "key21": "3V91vhLxCgmgMGqXvw4vKa89n9f5pgwuR52rBag8EAK3KLJAzgotSwD6trpA9veZfqede31GsHC4tjnvUysry2Q4",
  "key22": "3AJs8VNPWVGU824Xc7nMgiD9MuaqcDtMKQp1kcD3gtVstrUGURW5XNCysR1KMBM9RYxprsmoSFCgopmgvsL1Bpoy",
  "key23": "7Uo228zEtLjS284jJBV2q9s7osCjdYZkHXf1viJbyjkFEpsde6gMaJNi76PEnaWtNVf6y9CN1vimvLY5QZJF1vY",
  "key24": "3DfW3Ztd3bYLeJbq98Ws1wZztLZsq8eLe1KfwvK7dL4cnYRW6zbKe2DeNudNMUE2QJFQaj6gdPky7ZXysKjLWjRg",
  "key25": "5UCLuz1Lu66uL4zo9KaCQ7DH8gTZiEKvtUBhChviPhPENrVtgccQiru6RzjnHjLQEdum5DFboRYoTuvweuRb6esy"
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
