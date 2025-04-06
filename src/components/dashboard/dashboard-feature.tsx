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
    "k5Qqy1gMcwF8DhF11mqygpRh1xVmxdbR8k9t7bRxGDGbHhS9W9uLNfwdAGncLodWDVBz4bH1Vcb6GxYY7ZsarEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLyRtZWi4M1CEmhitTzkVTCx8HLJotVQe63en2dhLrLNUj3x1WvP5ESt4ec3uS8RSm3BVSSf9EK6srLENjvTopx",
  "key1": "sfLicVqeCdiHqFP6fAqZFE8m96ouDVJCE4uuMzcqkXptbtZD9fwvRe8iZrg23vdWb5SfxGyfSiG2kjgNsyr4BRG",
  "key2": "5KNjhn65qceeV1J82BhNK9m39ostNcwyjAA3ahVd78R5MPjXftU2f6LjaTq8ZQpJapxpyhBmUG9PATvJbALAACb1",
  "key3": "2FA5YPuahjJ9Ak1tVd3ESzyJUTp9VjrM6eBtxV8b1DWYDHbQzD4JN4ysRVcoXfZsykoDxGuLDtFab7yaKqz1vU8j",
  "key4": "3jPV45gm1pSbuU4p6dLFSecajHsKST33xExAf6gidq5K2JkvrsJ68VnaTkwmRUrFiEiv6AKaEst9EX3YRjqhGytJ",
  "key5": "7S3RQrHT85cYy7rgBZPyC7CYnpRe2WcJrgVBVXs2xHWxH1aiNYMmayAapeq6kkhfN9vcXoDAj8t8o32g3EA5mB7",
  "key6": "2e354EdjRpnkQS4D5jLKa5KfKXFgq9rNGUBLweSms3tQTTJVFg877SSxv2M28xwtjPUvqPcEN668cPjNfX6su3M",
  "key7": "48mQQVT7ojpZ5UKys9jcmbPahe39KHE1cj2hPKYz5MSMHrQrtc1xXasTEVD2DumCLKYbszZgtRMWoeDsTy21NmtR",
  "key8": "4SZ4ByZnY4cHm4Yo9aoSrWxYKPrV3ytsJ6oeBWXnGn9uuS97uHFKZnEc8a5AJsQUAAKJrGPEQigPRhb9NkhMGWZz",
  "key9": "4ScJeiWAuWpxnisxvkZiTcMRRaZAguF3L19LDCk4x7yWsgNigD4HFuNddUzCMJRadbZxK7Z13rdwR83bDsjqkHXA",
  "key10": "3MNU4w9ePC5Nc8AH3LfTHkyxr8Nwt5W9GLNdGyi4HpGN17QpR7TtLEw6rDbd3tRX5aiagwvqhsMo7JFNwmwAVjPF",
  "key11": "EzYbLp4zhE3sAagzBa4qTQuTxTki53Ls8mNH9eL6THkAPEuREneJTVvGVDaMjZicEQDykY7CEEsCfy2XeoFsS8D",
  "key12": "vETQhKwCGPVC1beAtbmPJmuNmiuwN8p1diWNLP1g6AJh84JULxk9mWKMHfa1xoibejYUCrh5AqdJBRy6HVBT8Qh",
  "key13": "26b6fxWg8vDtUorrcFbGCWNUVj4DxY8qQ2ZDjnNyVHpnRArQzKg6gWs1mwpNnKDsCPbtmsYonz1PZBRk8CeGzW3R",
  "key14": "KVuWCwN2hki2X7AeUhvRVANnXZsxpc5cL1ZMSG4rtAjsFoS5nYsPdi1hXoGg7TeCgCS58C67gFCiCLiu66mvVnh",
  "key15": "5PeeGR95tbzkr5kx56572FrFuzZWjDTpzGaiuGpFq4YZMc4KBf4c8agQanLQyzp5tJTzannAw596a9qFpYr1i97F",
  "key16": "jd1YXTLveEVjKy717FCHF8caMLBmvssvm1wNTTt2v69WksYj5SwYTfkS2gu9Vt1P1d6FSLLiHfDKmn35YUwgia2",
  "key17": "44X13QrBnq5VEMKpmAW1fT997f6gMXZQh9aLcC7P5nv6TrMhAssn3BVaPgDRqdPuN9ipF6igpLBK5eMb5YMH3AvE",
  "key18": "34kqDZcbhm11FKXQdVnBVdyZJGGmzEjNYpGb58J3cCJSUqZy5wZQFgkWas1hSpLuUN6wgbTbk1MWGRv38pzq5EAP",
  "key19": "7FGHsoRhoDDbvRVdhdqByJSTVVbNt9YTsKEjQdeJ9f5KTujxPWAo5wJEXUUPj22mhkuZWU4zMwEAvdjWPzVYhE3",
  "key20": "4wjzzL5xSpWrM1U1VEZDAEQbVb1ekRTCaHwZKTCUFpAZCVGvXCHH8cxk7Ep8H1xpaqSK24VhqZ2eZpBXchHMRqGA",
  "key21": "dbKKBXtK2pAXNHJS5XsUwbE8XsecAJZitSbentjbU3dT19NqU8UktB8CaDfAY4BigJaomhwzjKqmZjzkyamdkz2",
  "key22": "4oFEgHDvp54SvgKJaWuqbA9WDjvVoEGvog2iR7LPRHy5o6wjxny5pNYmoMx2fBNa5XedakBD8LaSwE7edhZVka28",
  "key23": "3y9GDuSh6BCi9QyVjySVjzP4TgLPqYqzojUF1dqqy4zvaw6UMXR2U6c5KJ68pN4cYosE1YLzkhffok2rXDrn85oY",
  "key24": "2NYPdRadCXgcmMahAf58XcdhBtexEWYnVcA9WLFWM2MyGdBhb5vjEZbVtK2tvzocmCXj6ifBNsaqq3gUh9hWUpST",
  "key25": "2gczBQKMT8HWW84PrmbdAhUALMjjmsgGXVdgo8nJLJjv1rN7um1ZN3eJWZ3yaJ5qwWKaxZWm2vvWYCfxk5LfYRqf",
  "key26": "Q1j6h6G1ZoXK2VaQ4ECP9WJowodRyPtZ65ahdWoVe3BdMHbGFGKzi9RGE2EUF6Q8kT7pdGUiY1wHDvhKFMBvzuc",
  "key27": "2ZamN63xazps8jS5yjUYHgUcso2MqG8w795jKbEumCqbX6BSm9Qu9i9PCSKSTQgCigTeXsi7sBS2co5Qtb7kroGP",
  "key28": "utQcd5auUAPyiw1KP2idfEJ8hGf4j7QSrsoCnGszKAdnPFjmBj12g8tK22xdmBRN9pAE5fyZ2SDURaQjAFf8GGb",
  "key29": "2DmHxm2wuLf5zRWDSL3v3736bagLazCNGDXPjci9HWMFDd34bDwszm3xqjDLDpGgCwiQa8eF7f6VC5in5WQo9adY",
  "key30": "hdSXhCxdM37ER5N2hYQEKGSHsc6q2p8r8aMVRK3ZyY4U2cYznoDPMMtNkzDXupAFAeqki6TVRFFvVgJr1gReqRt"
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
