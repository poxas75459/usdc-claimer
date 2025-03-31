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
    "5ZpYH55QsVotw5TVMXhvnSmLezNaiMWkrSAc41jxy86Z6jS5RQjHysT8xCmMa71mCqNPpuxrukp2PHxV79PHbBFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pCy1DfRcvBBrJYyKvr3iFc9YtY7WEaScPGz1ubtnb1BHHGeUH3W8QMCihFG7AACmXxSnwNBb4emVVjZffPNkaAE",
  "key1": "2qBqLsTvBhLVVpWePJBv3uDk5WDYCkTWkeY89LMGUgyQnqUMLxTuUWov5QtHFWDvA5r3XVG3J8B8TnM4MB95wXhu",
  "key2": "5TKWStU96p56yxSPjD9Bsz4VZ2L8hitciAZ7DFVpqWz94oJJi4gkSzW1K87UnNpcB9aeQJZHEENtw5E5aSJrKV7s",
  "key3": "5q95LkuLtxtQERcZ9RPFmbf2cYdz7P4GVy7kUubVKqGmwyBrt1tuyXDzPy1WY9DBgDBKST9tjGFUS37bQe6j5cC7",
  "key4": "3biAUhUygUpu4hjxmnMimaykLdPEE4j1AgM1NCPzjiL5jebKMKTU2kw3hDqmC7McLz9Hvpe7hS7dW8PFTMyXiVrR",
  "key5": "36R77F9T8aKNFi66ij3HuH99DNt4d3PQYfvAk455R6KSwDuvHvmKK9Sg16fdco4SAGj8uQHqVfWCV2gDX4gpaCgd",
  "key6": "414gY17HLpfGrehiBCSMLZ1GfPy5u4g6yqWY9sW6fuGWgx4NhZoSPJict9y5WwMNHGfRhECpft9HDCQUgZAznEPD",
  "key7": "5v1kxi97FgJ53tsiieMTjyNTxk7tDoaH3hqhKXreVRByk7X4XP4HyKTA3LoZzc9z1VQyrQy2HgAUudYsoeeYtAhx",
  "key8": "3qhCvnNLWG8G6q146nnSkQmCYxwor1fiYvLn9YNx4HD8GfiYPQTs1kGxChGffXiUg5Q57S8CB77y4Dtrh43ftkSz",
  "key9": "2atdKDEgZHbpSAVSbFrEFnh8VroxiHUYM5xCWh9qSmjWjgKd4FA6xrbVhzbtbDGTVugb2S29YQfWxxtV8mBjdEAR",
  "key10": "65KniMJjHZJeaQ9y23o3TCHqqTmhxbcsLb9NnFMmHrHoYj9o5YmtpBN9zhDMMeVSirPBBw1hL7MgwCJUujC5NnWi",
  "key11": "484LTf2tz62rY4ZE3ZbmnQSHBDPbdoVHukD77ioWYJquKqnhgTugAGt1MY1FLLsJsG1UafzDfK2sJGL7kZu9vVBV",
  "key12": "2jRg3jyHxqEDb3ff9a89nxwv2vUR6b1yZ58yTLs7TRRxCLzxY8jt3srWGqpc2y3ynrYptdfqRyi9TcsiZPEn53ZB",
  "key13": "5GqbrguMXJhcTAeFAM4byYj65RXDebMtokujPghzL7Ck9Fp2qkChCkHkwSTjZM9vFYK9wZkxW2FPdkockt6ZNdfW",
  "key14": "2SDGiYGoxAPbR9nsSSWiRVw21dpw7tEWi7tS4ZEjEGLnbrnkfbRxrQk55bgfV1SYYiTabAc7mQqyLXkXRphrawvS",
  "key15": "24SipcLPM9gPWb8Toka2ttN2tkYSXNY2RxzqxVywK3HG9DYuk37jfEB7W2ufp9MnvYLzM2qVZWuh3a8Z44RVCc3C",
  "key16": "35hzFgEx7hnnMdpdfMpcnvhjkcWunzMpYpXrHc7Z7Q327szWGVr4R1RoUrMnrdoaoC2FrMb21HGX2SaAreswZGbz",
  "key17": "xAxtwRp8MPmLVGESWzsABwJmfLuyQWCVDvUrZbYWEREooqWS2176ed56fPoSoDkP8tYivoGExeFgUBmvXh9hx6w",
  "key18": "yAT4n6LaAPX4kYFJnuhWr66zC83J5NZgqZvv4sz1gTVECTXUJ8PhdQuSV8pf1ZEJ6PigyJtFm134VamxUvRSPDQ",
  "key19": "5uggNzSBm9guDvZxzpxM9mYoKU2PS1mT65EGsJvTRwPww1MJo6djk8WL1fJiTacjYsJme6PX3TsaHoPpE41JLzU2",
  "key20": "4R9rYEZYTunSvASYsdTsEpA4g8HmobNpaCf2f29wvnY3AZqi75Qw1kvUWnLBst4iKCYavHqxet79oTYiEpJCGSN2",
  "key21": "55qYFsWzdNKxLr2GHvs9ExY1FCqJQRkBB5EJ5bMvz92fP6i3hCBaXzJU37RvGwyh4174PGREZjaHWZ8BcaPm8gX9",
  "key22": "4SokGknRiVZEvA8wv8LSFjZfPbHPJYu774qYbqPgX7oUD4B7s55FFshtG3qp83828WXKffdbCFHNS3cp2K26JCnn",
  "key23": "heeEfHZqVETLVmtv2fhJS8yC2R3UkfsGcegGNxYVRkk9itTu2xFdYrHt1eczaYi9KeP9eD6awQqyfC4Scr3bTxH",
  "key24": "3RZ1j67JzaVTR2v5SSVNXiCbiLgUAPZbhyosphpYFe58KN9ZBCRxhK5Jv6Nj6Qw5B2rLtLKZg2neJNK1L2TtUqfC"
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
