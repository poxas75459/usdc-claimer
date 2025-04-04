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
    "3tm7JfatDPkU9Kwyu27y7HN9BbkFp3kQD6GZpFbrQVma2e74vwcpBBXVHgT9CHN7FKNkN8MzxhECmSjtbU3rWZ3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGTmoee3foYGWxKpSDA1jfe7h8Gxc4krJraj8T32URTvKzbDxRba412BDVjRG8tCtMJtiPGhazW15C1UK1EDbyM",
  "key1": "64kvzei7Xx67YAmXaXJidEsffzLEV86D3oRH3udazPmYJFCJavRR8yyqBi7KR78EhnQ5LgKDmY2qStf2p4gY3vWe",
  "key2": "5XBHbyce5eRaNhkYRk6DmbBn9AWt9MvAkW298qTopdQEDjXedErdbK2NTPLeSBXgywQdyMbM3AntgN1p5BKTx9L6",
  "key3": "2pryKnH9utnUch6BvuHNNAMvvVF1Y39WLagxL4FryBP6d4miuM32fPmgW1CZc5r1Vx2KZ6ZUuxr9oQcbrp2JhsK2",
  "key4": "5yVZVC2reZn2mQakyq7g3uo44KGmtMCUqWPHPV6gAV2xFSmoihoHSezy1jCaz7FDRCDWntbEWXZpQMBqzFq2jqrd",
  "key5": "3KAY6h2rgUHmFgDeDXbRmM5P5NqZ1bjtgC6FnCSbeQPtZ5qVsseehyWTB6pzdpHYdBB8PWw16TnnsoTjeyGFEAqd",
  "key6": "2vDArzMHcVnNeRCveo5p24npd3jnciDNsSDQaKsVHmcRMb5f9ZmSmXnoZmjiYKn4J1aGxp7Vpe6XRrgRQf7rq8Ha",
  "key7": "umH9oH3AZ1tQJGu8DpVUNeEsfu3E3FjAcCir6xGVPg1n2F2BeMGjhARP3HEdRtED5dSVjMaxBYoTQjfXiCYgmzS",
  "key8": "5ehUQFYhmJN1UBig1nZTHvqgG5nc25aiLCHDxxBhcAgdd95JWTAgoSpoKDrtVscxSX456H8keMV3CKmyuVLWEMhy",
  "key9": "5YYyX4eLggCLpbYWBg6KLx1GVZS1CZvtmahnYtcWd9JVse8vdC6iyMcfYbjgRPapTQggFcJP11qGSxiK2y5onufs",
  "key10": "2qv3Cfkyq9WgADHUZ5N4YWiUetPhGfSGj7zbxjuYTmygpDyEC9MPbLoayaExqk75UcWEskxb61eW4caJkHy4JKPw",
  "key11": "2FwH13h76UUW7ejwQWkHapKyE6pKTeaXRtKfekrqMqrmx8XUfR7zS3zdcW1qw9KSC6fjtXySzX4r7XVmNod6HHdL",
  "key12": "4yBppRmtf6K5Dv2Qdezhn5TJzruFGMQjvodUmeXBqPYM9hYnUitGKTMCrtxLxeSQFkXvxPSYSrVxBHntaK1rdypH",
  "key13": "2uzbFwi1oAKoLWhiLavAnNmGQJQKfgs4oA8NcwCx96vaMApccYtXE1hKtcVetjggpJE9Ex7MJd7u3MjAoS8oGKLB",
  "key14": "54JWMdnFRP1ueJCaeTmc7ZBsTyjXy6ceAGTUuKct7tsptWjtFL9fpH8ydXJ1cXmWrzf87k2tCQVnz3TXYUyTgtB6",
  "key15": "4FvhGL18MWKiUtNipXfbVhMpWuiGikihxwZsRxhVgGXn1xuU8Dy5drzT76WaYVx7msZoS8hXpsAiGVmjstpXzQY5",
  "key16": "65QoS5BZoKf9zka8YJXuH7ry7QrZFRJyztfwHCR9TVdCYtmyEkNszXntcQ7c4ZBY4rPdGyEqoUqvBRLGwqr9dHeW",
  "key17": "u4sJrtABaWaXZ4zftEdYqNSXdXwUZ8P3hrMdt71UScRArbhzARh43Gzw7x4KzijezpJuUVRahcXjQwxHHTboJf3",
  "key18": "NXjKDSwS6L8BTVLsMKtaYUwn3pKZvx2bmGrD8rVuFBh2XLQF1hPTemef2Xjj1fdv1Ps9WfLxB8NFWWP6mGQVKJG",
  "key19": "2W8QTPDfjH9WyJ5LwR9Pm59ZDTuBaJnjgmMQxFQ4geUrY48ogtQvQT4Q8pc6VcygLx28m1hnNYqgtpXbAXiF8BuA",
  "key20": "5FMsPov3Q6p5guyzvaQr8bqjKQ5U1uifwmREkXpsYFHsH928ehqWXX3nTaDofmPL9Ad1q6Yh1vN2Q51rdfv6o6jg",
  "key21": "5AsyfKoXkNPzUygPUhhhZDpgn51Xd29JyDjvZRxRgkKZUJLQ91T7HoXMumNKp8fXoSn42VUSnahDWW9aUCv5Ge5Y",
  "key22": "qrNtkBtvYczsE9uNymgaRbDRmNWWpgUVTVBDRiik67VExvvoKkiqMhK1hyFhcuBXnp3EPSBXD9pv4A3ujmXVRUS",
  "key23": "4BLZUQmn2jvCpv9Em2GRC7d5uj438kZghqCfxsRu9znc7thdhMc4JC7RJKKdLPqkxnNyExEj8h1Akvja9RxdhhAi",
  "key24": "3pFSx4BH3oRvc5DanJ7ETJdHUmcYVGQkCrJ3DE1FFBTj9fbT8u7dtXmPtcqbP7zrPFhrPLrGRKNkT9YP4ciRaFyn"
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
