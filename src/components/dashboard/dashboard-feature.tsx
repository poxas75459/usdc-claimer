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
    "5kyHMWfSNSurFn5WRrQA6HByB7WB7zm3mQtvmY1K7wtfrkJBpjtxNy4xLfKMfheoAYNvBq2Psb7inwTGKsQJp8Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34MQkxZDHvvGWjrg897MgjmSATeTEvEXpfTAX2Vc2YaDuEtokcKqpstySpyztMujPHrWYANfi6YgYtuy4rJFUBA1",
  "key1": "mTbddRZjYrFdCfwkSMZxo8mUfJEZBAuNKcoJna59BbrbjGxUt8zcCv21DdJjpziu29faZXsivwBTDeSBGfyvyDw",
  "key2": "MDUsyvMg7yQMpY3j6wYNUu33zQC3qUwADjmF5f6ANePX5JbF7C8U3Fjq85QpRw9CsdffNj3HDoP48LvfekzFzua",
  "key3": "28ck3c1mJGNNDGmwAjisJFtVmW7dhP6hVadzN1dnBeRuUYvaDy8eibNg1eCCi8ofzL4fphkE4urSqjwyBGG16mWv",
  "key4": "4LjUfDUhRJhyrh9sN6jd3ksFo6cvFHswHFLtqByce6MyP5dPEnCXnRq3kA9gJ8kVjYRxaLTScvH8QLWxKVEQ5qLS",
  "key5": "5tBjsd3FAjZQPpw1GC7roXz1yL21zNzqq3HcuePEFJNXiuGnQJSkzrDw67HKQHmmuuFscb6gzin9FzuvbjokQSzg",
  "key6": "3CcxrZ6UnZ9DvqRtShs9aWymgxTpb1kG5ps24ZYE782HaPYvnwhoCffZpcjkW2otX3m6bcJw22yMGdDfffKMvguu",
  "key7": "5WXiZgvpLtnjrKEASqG1DK8tz7ogrm84M18LZTds2ZBWgnwN46ypxPPNHccxjhqujLBNKdYXegCEyUEXYnZySSRd",
  "key8": "3fEFXqQzRJGeYgMmCFNkN1XuiP2NVN1yGfMNzy2eAVXMo9BDkBXA9zu3ZH2F7jWGQLUMoRH47UUgBKVBEz7ZdWAX",
  "key9": "2yafTkBCTUxNGwD81XDxW6kxhC5LQsPh9aaF2sn2WyRmuGZJsQsBL5nJ5GuVroMVcbcFgeuUS3NBP7QqfdVfZmDX",
  "key10": "3YCAxbCsn5xwNNwAkfWbh2PT3xaUpaYBvhKxmmUwECbzX37drcFqYGatRU6AFny81a6yfHu6eJ1j1dXhBzTDqDGA",
  "key11": "Q1oS4jrD6tqzrdusXpdei7aGG3ApcDtpuzBGyRf5e2txbgE2wBD9dGkX6Bn61tdpgPoHhvgFHfKAv2hdzhBRpKi",
  "key12": "4dssbFgHQMoRBebYKdrce85S2u1YAki1nKfVJ41LedF1sqheD888SoT9pjyQBp5tt8tSGfDPQhMtoSpjeGAPFxkJ",
  "key13": "4E2rCEQhMcvJbwzQg5vz6mJjJC6huk4aSx9nAfuYU1n2e8xYayDWBkn9xVGhi2DV1NbC99KafPaYCEEQXEP9Go12",
  "key14": "2cQinnLzTk17mXSqzDXLNgdMsjXt4xyh98mVpdGBZdrPAghuiBgcnzitKJRobeJuCPcJVfDTiT5hi5ewD2BMqbeb",
  "key15": "L5dPzJcLdSUb8rzt4w4xcZ9pPdDVvCfGhTqngScshd3PUA7nPTG8JBVUSN2kqNzjh3UusztiPDLxf9mE3U5qLiF",
  "key16": "3DkLm7E2Z3P7qTU6LBNhehqJr7KCiFcFPvrCwBC1Bz8SwFXH72muBatYRJaQXEH4yGqZBoZTJSyUGASYBt4DdFU7",
  "key17": "R6pTxE1XBjkJuozpHjJrf7UQjS8VxYsfRJxgwwRujRbVnFThU6PJywZYJ11meQKJg9AEAVYuAmsCzj58XNeHcVf",
  "key18": "3Xtf6Sx7KHquYH6vWjXAiFxsH12GhHqMBpdSdro9tfHBBHbzBLd4Qs121bdx8QTJUYyHyy8KhkeUNi6T852KvEx",
  "key19": "3RafM2AP6xiNg2edgfnT92sSxGPpNBgADv68RGHbEyGXnvfnVMAMHeJFA6FEzZ3aTvC4TJt5BJr6TiQJNXoFbwbS",
  "key20": "3VViwqEYbAPxb4RYBo7j8hQsQxqwbKLRPbSAoV7PMf3HcDV3J78CCCgd2w24zF8x7FUm97p8z8PiWJZaP2xKrDGX",
  "key21": "4vudwb6g4wicfVCM3WT2brG8HzDiVLmZoJor8DBkLatf1irX67E2Z8gF84w4H74vtsLDqzzUj19LUkm8Nuq3TfYB",
  "key22": "5ms1q3ugoq1fPtmGrEypFAav6bnSycbccFAHNKJqt9rymhhXTf8cmfyy7ApvUJZAmvVxGY3fnw5msHdQZJuAntj",
  "key23": "2Cf2UNkywAHSwPCYXqGTjs4fi3LjR2fHw96ebKDqd16JfdocSMmJrJwnBwmqQXoxDwn3LYKudqCipASzc5iZY6FE",
  "key24": "2sU8KQbs9AXr935EaP5V6FXHh7oAFr94azLvvgVYFrcasQ8sPw9LXTdRRhbM8jjrWdYfYNsjnBaBNw8ArKsDo4w8"
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
