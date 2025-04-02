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
    "5tGsZkJygQkSmyYeNoJtSJkMcDPTXY16mEy4y3CFXYEBErDZmHNzA8xD1Pya7FFCDWGQr3uPZjGLodtM2wuowpr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCkBboYdRVvxSMZmqdVReLjdHEoK6nLGrvpMNNJdWEMAfr18Kj1uAFP88gPhdqwfTNto6gJ3JKmvSq4UnjurGYi",
  "key1": "RSXBKFyEeagXAFVXysG9X3yjB6sG7TUmbt4xcDe73GgKsnhzkdMXDfYVKhvVZtXhucj3aXpEHWaieSZxYhKhaw2",
  "key2": "of2bvmCjEkbfZdLifYd9b5wh3qZPFEJdZmDdHxfNA7nGJfbb9QqUCDqtHdaoh2y5XLoncNU3J2aXMVMSeTwHDXy",
  "key3": "52WhkZsLugRcH2Xk5WnZiGkSEmN3zDBgDsR7jPHWAKmzmv9yuUSmzQH66fqaEdMoQWZ1q5TRF7TvoXo8Bh2uGd22",
  "key4": "5Rq741B57ydQase3o7CXBZLGEAZ4VGdiiKv8dick7uX17M9Zyq61qbYin5hfan9LfT7NxMvp9ZmGFAhGgBLyAgWj",
  "key5": "MLUWQiKJdYJEgCKvQsHscadwVFEXBqZXT1Sp9VPJtu6S4eq9GTELLBbNz3LJidE9W7BGcEufNCNzqxYi2odfekT",
  "key6": "4C7P58bjfRavPTfQ2hiTgxDXqBC7ibpCmiJNsDHvPArSbNT2qdDp98rgnWBFAqHGyagzjuNLzdkQdQWhg9AK41ks",
  "key7": "4FZW2oYZZvNgYWNLZonuixHqVN8EbSFugJRUiKkGUAMRf9uDBvwTfY822ZvK264amLFdX6jppzJm4UiA4oY3Qzxq",
  "key8": "ckQ4AnsmMQYVBzia9iFmGJ5cigV9zS3t5BY4cyKVe8Rn8hqBbfzJbn53LpcRdsb29vXkJg93WrJsANeJwtVaefm",
  "key9": "5xJDi3t4CnjxLuiaopcdcTn6WZmq6dxfGzvGbsE5bFfSTFGZR3Yoiv3VXFBfJQLpKTUCmTSnyghcMfr92jssjaQy",
  "key10": "36uhL4brjcHN8t78M1vAH3SAxknqbr5747W6F8hC19FLj5AERtgmV9XQ9YWwLirvL5Ab23ZRQkXkM4Ag8PZKY28q",
  "key11": "4TLQesQFz7yy6rgDPPPyvQgbTeivA55UjhHVHQztxM82sB5VBydgtc719xWKKFK5FELeaB1Rp9fXMPnBGR3UqLd5",
  "key12": "3Gtb5Wm81NUtrn9FBHCmtt4oVB4Df7fy6cB4G4kDPLQcvFhdTAD6FeAnFRTJxYuw73RKkPqC5Kx42C66zSM9CXks",
  "key13": "4caNBKDBko6Q1ue9Hbx15akKWg544rCn2Rtdpz32K6Tyx3dNgDyvsXGnqLUYoVag6EVfXWtr7JFRPYBcngzRwyv3",
  "key14": "26ra3x4SQTjERdHuFgnzhMZHpkK2cegcK8tkpnUKCoeFrVVXc2WFWmT1xrwycbxBi3HVbATppX463hMfkZE5gKFG",
  "key15": "45jaYipXiqcJnusHMLEYoNDP2em3Ua2F1JTtf4zp6qPs37fRyvxwMZMsgnHkrwmmkbNz6c22rvEBTkDQsvBtuGf7",
  "key16": "5G8P31jsMZrdYbQZpzBXg7dsH3pUvZX3fx1e1V5RW3q7nyjAbx6dRGwJf8eHa4AT4TBwMjvn8BD97YsumzHsCUmu",
  "key17": "5WrRXkknyeNzz1BkGLi3o3LcxBEdHKLVkzR5YCrmQAS1TVTh4kz5dR4cuJb64CHt1vZb47WZxVHNZfhrFWvu4bhd",
  "key18": "2gasGjAPVW5hmw7tyxn3QBXiZwwHW5tguKE7KSeg8anK4nJYNuqF7Z2LNuKoWs1338K1nei9Bpao7CEM7jEwaHoU",
  "key19": "23sswx7oojtUvgXXDz2GwWLSFNQU2t8ySR3f8rLsfveFoqUBvegho5WmniRB1A8DjTkfnE4yAPSb5HCLbBKu8LvB",
  "key20": "3AsXrjCSMBASRrX8DzNNcW2rMsSS21nLzDoDvCNik9yobSXLvnssYb9pFuMTT8GqixbKUTof79BmwGDuSgCAjXJr",
  "key21": "8u2VGEcxX9Ny9ffQpD61Z27hHTXWek6khAHdWqMw3sAvMZbqkpLifscb746WKvFhfYb7FJwFQyC92mi6vJ8MWNX",
  "key22": "4BS2bPJVNPP8CE6nssBw6bxrwUoZfREHvreucLb5mC2HZ4hiYJzoZEfyXvN761oCPSkEzy7KrsBCDUBSCW5suc3a",
  "key23": "4kmP2eghLGpQW1RPcYbNLCLRP2vsYtG1ttRZFJw3C52gAfpxWMdwFztE41ruG6VGsN7RnZEdJGKx9BuRoCoV6Yy9",
  "key24": "2G3MCv9NLRHHoAkQyPxi2ipw3shg9YAKHqW6hjiDEzxXqgvM8jyuLEWrhsP5z3fhwoPUNjS8qP67UhmvFSsg5V7U",
  "key25": "3cr7EjoBLBh35aCXH3XEwnkbkt7oBtCw4H6A9J2Rk4WRTn6tM5cy8Qw634cwW2Zg2nugwPha7m6ZmfVhEA1TK3ii",
  "key26": "3Z5QNa8bmYnRpVKYM9g54kjhyEEvzQWxNPWHZxw1umaDi54Fn621kzthyeGW3wLhpMtyz7L5TGQ3dxcX9RWmoE9K",
  "key27": "9YumMV5LB7sGPFSo6qcwDDcye68Zg474HdwEABMMR5KfQVsRGviWqqJ9uwKv4LQFtxb4WFXSTVSZ9QH7sGTVPic",
  "key28": "5o5GE2mvZBDfZgMq1bzCooSMwnUPXdBz1UFSFpYu8aQe9TTfVoYUE6RBovwZjTYtRv6mNJ3bVPTxdzyQ5xTo1YA4"
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
