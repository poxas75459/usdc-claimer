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
    "5uRMjGk4qM27v2QgeHdvKD7BYxMkaxCkVvTadTCaPJQqcjE8WUVsjL5kkr2YUKW35rw4BD1qN3YGRvBvASEhCrqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYQ9sVL7iRK4GXx3EvBzMT9rqW3RKVTG8SSMBvCfrbLtchh8Sg5JGgXbyLwRpvXbzyYCSgbWKyzjazqWVipkSVG",
  "key1": "5uqrAxJfmPVYiSnMyGCn2nEfkj8hrtq86UsLURmmeN1y9r8DobTv28Hv9S7tbs8iMM4JoXUjN7kVYfKvUjy1Pxnz",
  "key2": "5RCPKG7kqCaLqATmGtTxYLmaKQXFJpUTB6GMZGh4GEWYfcBg2nSNmLCQje33SeUtzkbyKX88eSwFUNq3hBwLt3c7",
  "key3": "5f34bsL3rPoRjt9tE2Rzw8dn9wcaU9GAkPYojno9gtVR4i6UoR6dFBEvmSh5ExE5qr51dd3R193mHj6bWBmz566p",
  "key4": "4NrFPWZndXTdDPn1bXhbPdv3sS7QqfLi9sxgo1QYTF9tLmqYutJfXHryNdSc1t7jQxN8Q23eMP4mqaQQHcC7gotj",
  "key5": "43ZkF7pyHybUJKRgXWwujdu6SfsfYEX8w2nV4duJLkD3tFFVpxPtCGHa29dC9pkYYo7yRyGUx9jWPHPBrttqz2DJ",
  "key6": "3GbUgsWyrBx5hnJPX7BRhP51ioTg3VPgHeqjViZtjDxygztHm5MYCF1pPTwFF9LQZCa4bHsS4mpXRwnGnXUpeLUs",
  "key7": "3muV9toDA7UHrKsKBQoougkE5JPEgmxaG6KYTvNabhKhpEZoGu2S1Bo92at7KZoHTxPPBMoqwpeXzUmECH1XWRjM",
  "key8": "48VVNfeG2Z9eXnpZxmCimruWWRsMnh9A43Wu5AxwDj2TkDWCTFe9Ly3eysPxfi6VETsuG3P5ERdtJPXQxGx33TBv",
  "key9": "2w8mNeg3TEwi5QPKmvoeoSp2nESszhurGTLnkuN6mVoFk2fqfZBgcBX5VSYUbwJXZFQFcqtgvE5RGvPjTSBdF7k1",
  "key10": "51zPwUPUSwDZY3eNiaMKA82GzueXXesauddT8hayruDUZDbkz99zCtwwbXAGHPpzaN6qALp4eN8VQfLVyrCrUM7Q",
  "key11": "3XMfVGvScb8CbswkHoQ2pfhKvKF1vCi8HxzCSQVo33ikBaEgtrP41evMkD48pE3QH9Wqwbi7UFAjMj3SVjN1rpiF",
  "key12": "3NWdx3bDu5sidJSCPydSbA5LVtTPnV8agJK3KVy64wm3T2vocKX57GhrEDNGbrdtdJY8bqYB7ThfbvgBjC4cDGR",
  "key13": "2XJ3UQgcv7orYnnhbqFNdxDDwyrv94px3579qwyEXcBSvFBW4DU1WpBbK6977YMm2pzopZ4zhHYqc7D2qQmByd6f",
  "key14": "2masBuD5XN58kRWVBmXvRQrNpymaVbWgKtRsm3WQHECJxjddCujQUQv6Y83tfZPnCozipXJWQgZfmo7yGBgq5nC7",
  "key15": "3qUvHZ2fE2SZGaFKKb35dEcaiwyXuYWpza5M3En3ZALU8qr1Xm1ubt9YKwXqtMtSyL2RQHUm4PTV8t3RxVi3dHtv",
  "key16": "2ndnqByDeETfhPkLpx2Tt96bSJumGRmrJshnCpFMUFHfhaDgf5nhppKarJPC7WpfFRfuK7k7JuHoc37ExUj178cz",
  "key17": "3pdCHUFtr6oiXe5RBBj2hPgi4WQg6PoeutQ1BXN7Crqvyj3Y7x3HsUH2sFpWt3nHsasRN8YnbEsh4YRhxS1orhni",
  "key18": "2CW5hQP51vKKvThweZJQUGgsmL5kQViDFTmFd5V7EkbmbCogVg7gQoHEMEftQt1fnMv2ygqrGn3T8GQEKYisqCQw",
  "key19": "36i96Xe3VHnQiKwhWeKAWjEgAQCYZtwnQARbGnJHiDSt1vWEEJcQa5H9dGPcEMHJWiSKJ9cqCgThDronSfjtApTb",
  "key20": "5Jj2D71wnJyW5AJnBuUJBB8pVBZCRYZajktAqhVcwrJ8o5XcoJyij9QDxNLfdD6ecQFxXvGxfLwMHHWykkptVvyw",
  "key21": "2pMmBiextLBFi63XrVMXcZwwNnKcPSaamDQtcaDkdrW9R8cAyig3yPSRw7ZQfyUVJTjrFopo33DyWnu6ucYLeAG8",
  "key22": "2SEdDHYS4iDLGVy7EBS1YhYZ4pZ5V5KSmXd3LweM3fsthzdGLkyxBXXMPrzHg7Wiz6HfWccE7GxTbXuSSzDrLHBa",
  "key23": "2wXHweWAXpumMz2LjeV6E4mQE23FN5GYgAA8D77wNeXVA53mHq9BSTXKkdQAKQwgSe6zHfRukw5yyCQs3QdVcm15",
  "key24": "33HkP4RdNrs9pVumreh5r5vdrC9PxNsreJMaye5xshr6gDVzByQTMrp6242QRksPjyWx1PRsUqAVRMCc4JRu6N79",
  "key25": "48HTPGkrz6t6ZcBzPBJh9Hm5C7euhwkqDHCbwc3uWq9aJ5d94s3jJrGfGoCikhKcSCqhZsXHgdYQYMAUEYFe2X8w",
  "key26": "3uB3rrJrjW7T8jo6T3ZBAd3dWqscFF9BbwzA1MGAr5MJVB5x5CGjXLHA5qbPqP2E6xtNF71vyNj6xwYdHs2axE4T",
  "key27": "76385sYMedYEH5PVUow9PK8o9v6RAuvXRifLjKWzSptQURJoLFkb1GWX2c5iULJTMWoX7dzEmrAkbEBk8T3gj2d",
  "key28": "4uCQaNWRDWC8ptEdvk81KDMe6uS6zotfCtTG59jJUqxuaguARQUF89DGx1GRe1cKxGTNLhQp1MVtJtxFEtBxJoSJ"
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
