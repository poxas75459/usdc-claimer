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
    "4WxaR2nhXiEAEoMCsyxMDpRrif4u6RszsrMgBupFcuDqQKWVd67guVGb7TU9N93Q8MDucmRRzE1fYXaaCSEkAvpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49P4DhA7WL8tqrGxR4QYwacTyZBZ4uNebQDkKoumhza8XAiN23NKPqQbQqZT3c2mvcRqVN9Ugrw7kTkKTQSnzCss",
  "key1": "4rBv7eSY34ef7pbRBei8Jfc7RST1KXfDSTZRmzRkBkDgZXw4TfHPCkjKcBUUUCVHoUjANojrzQyy3n5ZakSQfLE2",
  "key2": "2wEkxPniS4vxakRZGunSiBAyFZMjXgBPL3rk87VKDGee6ug8kkpuu4XSkBnShYVB8NXcJNAA7B54KzwWudxEhrbc",
  "key3": "36yQBKW2E7phRy9tGwsY6n8v8RKodAViDpim9UyFuMD9m75ZVTnsW4Jso7uaEXKxjStbCFzm66K8z7GRXkt2HVVX",
  "key4": "2TEkJAaFrn7rR7dhMUp56NQkyvygXDsPopn2K8HbDzZdoGseiaVbShf43U8QTwqEtbi2LJurhDB4kikyZZGES21G",
  "key5": "5QCMC17XRUi671VQ1JkN5oKcaZfVG4jrungjDGyiQHEx2VZKLJrivsxDnv7XMrymQHKgZDHDFHrSvz7AePA39MK7",
  "key6": "66Yr4L9rdNuuZtSbmJMGnPGt1FoAWfDJptCA4rfS7wRNGi8d1Lr2PMnzeg9zY8fkL1kqXv6UiGHAHNEbCBVQWb9K",
  "key7": "4XxnoMMaH5JjXjAAXb2uXHJzsmMopD1XgpjRv8jX2K5n71VjneSig93AzZyzoYqBHk9XeV7KPc6hxnG5QWvzbDor",
  "key8": "3fWFDk2Q43wQZ6QZkhamoxRxYXD5m2C58k6RabgjPvU4fw4MrxjmNEwoDwCGoyD8Mthn8bMGPcRSKfhtpCV6YJ2S",
  "key9": "5XKq7QXCeJSZZGywxWxEZWpxF8PyPzdE7fNikgNoeUTD8Gnm36LrPj8CM4xDQyTCTNBGpWvMr5AsEpD8Pf5yEs6H",
  "key10": "4Aaot4xsnxBAug9BgSHnZpGi5P5e3wobSFaEdnD31JvPveBrfNuyEDFkgNF4kZm1LW1N9TLk81Bc1CGmpRWhTCde",
  "key11": "2YrRYhZGEY6icKfeGScJyi26qzPjFB1j9xbEhcVsFjqLvfcr76Z8CwQ5wQQbhTDmoJ886qUHbEw1Ranq8cE36Mx1",
  "key12": "5jCLTFqK1DdkEQUzbGThTDqTYPV4XwA1UuXhRmFknbWFxSDt339wFcoYuid3Btze4BjuPBc9YHdgzsvacSDRJQh3",
  "key13": "3Vn2zw8bym6hbzmBjGXuvvS7UBJYtmEY4aLXo1DEN8LgnEHPUA3r52yaqqT1aVbpd4TWBAkJDfUDfhWwtv68MEJs",
  "key14": "3RRKunwPzZnLYZsjvuAvKXWe1AxP1gG76TmuhWd1VWNjwFYzuhW89oUMwgiWAQuzupxXQWggJttRoRSZSLSygMcA",
  "key15": "4xwiKedoTPTXNysSAgoz1cZ7kNuQf4FtxgCEKXoo3ZCT9bqtGM4MfmxZEtCFwEXeJnFBRZsxtBDYGLwrohhQTXEw",
  "key16": "577E1C346pM57fF3Q3RUxyh8zunjkHxGNwVyyf4y3Nof3cA6vLuQKUdtpVxmBvkDyS4tc8uTveBHep31sDqZ6GJ8",
  "key17": "WVTR6SZnHnbhiwPVBy6QRhF1y9jtLmr5sAJL1sK4ULJdYwTWq98XuiwsM8zW1USp3jeZJjvizU3bc2MDBnvWMfq",
  "key18": "3esayAof7kCbHZqRjCjotsaVp61RtXXwg46sUc8YdQQpmEeHEDjxqRKaRMFaiTGGhREtnPbwhifVaGs7EtjvRKTe",
  "key19": "2aBRNXAGPA3sAKCKK45sJmTm5VYLAo5z3vBkCyEojQR1y1m7c4ub7ysd3SPc7Cdm2JTaqZ4sEvNW6S5RQSrZdWVY",
  "key20": "3AezW4c7U6zeux4LBaRQQsBrJqCn96zrgMatmt3DDsMnXBzB5hDbAJMkyjtvC3GvxC131iGrii3jQ7hRPSeYn8Lr",
  "key21": "5tJf55QcBB3DNmURB79H4a4z784tndxU1ApoiW5TYHBCqUoTa5Q4tqk6Fxp4WjrNy1jMoWYDvRScespvvaVGBrDe",
  "key22": "4YAhkNuczJwDJkpyQstsbqZgzppDpC6hoDGBjqBWhTr2ymxJnDHyZSzGE6pdGcv4YGxZ3kt7z5DTPgUJhUtpDcFv",
  "key23": "5vy7tnuSQFZhVKVsW25Wyq3VxZFUSWxx1FVAuA2TcNaT3AtnsdKLB96Tvy8KXVzaY93bPim6dCMrZhhts8Udepq4",
  "key24": "4e7FKcmzbzM424cKeMYTS419RcpP252TY4KXyPYo8747KugW1F5ke5ArhtUfNMvhvNmKVG2dsPvNH8sYr41EbZKd",
  "key25": "7L4t9bQazNBr9Wgu8S1A62WvgoWM1oGgEJeGyDCoyvZboUmE4dEjuusu5TCT8EHzTHe19Z3vBM3bRFhV1W332YH",
  "key26": "5CgC3Y6sQxF2dpuSBzWF66q1HA55LFAg9XKQEe62UFycyE829BaAGsiexzZhNkPuc1vtSccWcxQjP7bWGLAtXBGn",
  "key27": "TZhudKz6gXzjqD42d1vGo56er8rEBnDeURDbm3MeDNCPdNi9bJsGSnVxVgreBJZ9wh8tB26b7D2K89o1aQ1Wxqb",
  "key28": "4mq1DDfr4CkEE7DUfjtRAgqNDQtWZ64v8RZqw221GV7KUYyGg7BLhwfgjgujh7EG1CBKP4X7ENVjePSjrQ6vXiL",
  "key29": "XVYf4YSwaZDkwi6PmQ5nnz14bBuEHZEkLUUhfcdvMo5i267H3WVHaT6h3bWVW4QDnY5kLAXThWFxSDThZPPyybm",
  "key30": "2A3sxxH2jFsjHNm1Hc5U9PLYAbkLK4D39p2dCFyrWUdq52bdV5WpT28QUtrRvzTgmNinyGh2yrgST6QNKxLadwrb",
  "key31": "2MrsTsQXvf46F1yMCP9TTrRBNSDuxREVoPHoSxQQ6BV56DXmjnGkkx8huW6zbf5DoLUJrWYGZ3d2PmaxoKjixLpf",
  "key32": "5FTyuTiv1RUwmqdRjS7cdW13Hz3qyiKHkRc9WWUW6R9XCyCLWLUNBjXYr9BmKyc4d71i441hicWZpB2QqnRcK9Qw",
  "key33": "9Fgem4GrXTWRfPhjwWvmVx3uE6u1xW1rJ3Lz3eDVJM4wg98uei6QDDQndCF8J3gH7m5vs4p4KSstPE6rsN9KTwU",
  "key34": "AnvaaD9F1t9EYb84KK4Mt1UtXcDjBVjYbDZxwuUf7DMvQzUNyqg9mRhFzuhXd2vcojf7D2rkGeAXfLDfpbVPxcS",
  "key35": "yz4VCvMkAHFTMU7NY946jw8PzEzRefprGNXnNd4aYQGUab4zEDtXp75LybsH9ANp2D1kAqu3CFXxCNB6yXG1s3S",
  "key36": "AeKokJAcHbwGdovvQ159u13MZdgwp2j8YmzuEHX3N7Mpxf5Wahh9f79JXQ1Y3HEYvYHfA6u2B4KxjMPKzYLJNHx"
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
