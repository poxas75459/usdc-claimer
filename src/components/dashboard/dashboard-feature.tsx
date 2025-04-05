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
    "3oF3WPWdDEmKZwMaLoKQoJJzUMzCkzhK5zgAJNpcRiWwgoa9vZhcT3ibLiR7R9ySiysqysBD7Hv5gwBM5DCDzoDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aNUMoYCyzbnYDQjcGR3aCM7y67c9EDJc94NAXAzFywfJoYNZ6SXjJSNBrp2h2U79Ffs2JDSismRoi21A1fHeuRS",
  "key1": "GsCX3yWQr8BnXWfTFanrEVUa55ibuQ1UcRQxudGPnQwUQLE1DBB5GUJWBFVf6wLPjqJwhdvdRfSDvxhUxDQRuHK",
  "key2": "5TqZY1Kq9R8ENviAKUJVnhZHoWjyetk5qafEK7mCB7aV472QR3Q41GQHWYTSPdmE2nLTnZGScMtZ4s3xnpNGY4Pj",
  "key3": "4e7mB7HXz8iwwLWATd91dS6eqbJWcLnn7wCL8s5idcrhYHvUmQZ1y2jHvzsp6rsa58L1q74o5ZWN32V46w2HqpNw",
  "key4": "5zzBkpDA9G6P56gGMDwK1PPKFUoKAfuRnetsxzHokkK8YXJAAGENACZbCKB5LzS81JStLTLTGxXpGPiHY8yAAAq3",
  "key5": "4Wmdg8ZqWycvNtmCZ6KCbERrRQopXqtMeAkc6xdJdsSidLz1vAb6wAQbfTQ1jyPNjEuEnuHjTyV1bXms3NCrDk5y",
  "key6": "xk1ignooj3ndjrS5pHQs2ufuFBXXpZoPuaQvtuc5hwCyVQJCkgiTJt7Lto9xdwCutD6KyRYMG1aS6TwXbpuj3X4",
  "key7": "42dk4BipmrZSe2Y8ybg4XbrUVFaKjHqQBH36niokCRAUtVFYDnxviP9dFcNumXUChkNRkh8TTDSZsu9r1HX4xzvL",
  "key8": "2e2C2NTjLK32Hi3XP7Sj5p8WHmKvkZ9yaXsfRcXqaCwdsGuoQ46YpPkqeUrZ1yxxFKpRSC3rQfAT2d7h3afaKFyh",
  "key9": "2JrZGYboHuELmiDc5UarrkPuhRjhxxo5NcWxRY8iYKT3x6z6RzEKZkGLb2DPiMks6Dqhrxers3G358Wqe7djwPFH",
  "key10": "27iG31Qr6gWDf6eaVmD83udM4b5jU4v9n3Z9vMMnKMyRY2XDXkg9JVmYvwmTTWwCqcr8GV1zdM74S7bzSxrPe1Bg",
  "key11": "6FgoCEkJDAwTzs9Fwtrac6Egr8FM1ndLRmKBVSpUCGLf5he4SapnF4H4KMYqZyycXEkzSdU3A9LraLgxraQrQjD",
  "key12": "3MwkzY9inQuTdVFiybwkfFnJRxCSiek4zuUgZmpkQEPzRn1qbn7xYW1gfTrodjtY2wxxQHe5mnSxbWxcvKTDdftw",
  "key13": "3tpFDUyzRriWpXh2tFFP3JCS94yKXt22KNNuqNEbmXG2LXPC95Ywz7y42WmopdaiYWznbLzjG38WHxeQjydvyNwJ",
  "key14": "5dCpTbuDt71umuKvb9fh4671jZ9dEx54c5bcmaaJoWyTvBo2rRPz5LJSCfFR4WxK99WCnsJCfBQGaXxjw7HJkFYA",
  "key15": "4ofxuwWw19LgQisyi79dZHwhAeovcq3qULvwXdKKz7oAA5kY1y2i4mQTqUG23yHBQuMQ9DcwBXXhNP3ZvyCsy1r7",
  "key16": "4skdEmmGsFESpP6CbFwPsSdgCwFCKka4dvjafe5HqGTNbSAgXDqiKqEVZuVLUr5eoHZosFpWJUzn1wyEm5EwSScr",
  "key17": "3HUcJFecmt7LssyPaP1B7SseJb62S3DqefQALhAJzfuXgtb8iNtZwMKwhPLX4QJ4WEbpZFdLuMNLy9crVJrQS6Rm",
  "key18": "64cyMwYcXjHv9ZkmBohTftHz3Po7yCZoNEqDFov5i13ybJzVeWVqRfXwButQVFJa3pzjNyXFLYfogkUeuRrv11dy",
  "key19": "3QvqyXGy7xSVVyFGCmsuoBLjgRykD1wVrZdQ6TXPUrh1LK3X3HNQahMZ2fPi5gbcZi6jq3nztzAn6rFXgDDiKgkw",
  "key20": "2Usjxts5nnhEhBL6k4mnDpVatRJCnQzQM6sUnQUH6KFdjWrjfMjYBjPYwuv6V9foWhj1YtqVv7brjdqHyhL6XrBg",
  "key21": "oLQLshbFXdiWZ8DkJkNjQtPwD6D95ok4ihxeSPu2bDRDchtweDDVgnfKiysAoW1AcpdZbQiZQMas6Cc2K4AQwo4",
  "key22": "3QLrcKZdHE9Mao2DALBgmUSANYPh6n4MCaEesTgNTiFBEWG8bGnxFrHhdP5y8kyf32sKoybFtJsqeozXsnQrGofY",
  "key23": "4dPWcrp6CPuzp7njRckd1enooHJQNYJgDVS3uSrgsoWTQUDd6inZhuL1TuPwpFidMWttg18E56C7ZoVbazGf83ST",
  "key24": "5vPVzFYFDjFNS3BfDUPykqcztRz7gmqHt2QFZZ3AY7HQ85J4GDj2ctSS4vpENQPo9ZaiYNXc9otB1riEnpcxSDzK",
  "key25": "4Z7aYPCx7CW272AFEhYzyjbgu1azKfPU8QrgHVY3pjvmpXfhV6v1JAW5GM1MCKKZDXF3WABk1JzqatRSdpVtEtzk",
  "key26": "5ffBW2J39ovdfVdk5hL33emZ72Aju8mRV1xhLmb5HwNyp5Ei6X6bvhrWYn61xFrMy8TGVkmKNnmikjMV26HTjo11"
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
