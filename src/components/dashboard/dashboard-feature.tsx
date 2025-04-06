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
    "5eJhRHeQy9fT7hKxRnimk7CPK1q7WTFUvDP89jcWpJUzar2m6yfANJoFZWLakxkaTnUBTwYFAgfUwMCmyGXs8mks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBq9VvNGwwpnqJ4pEaWc24e8uHQ4o9uj1256wAmKXegxxRMCj81iJayXZPfrHVWZxDfV1SZZG1MgvRvuR2CNRyP",
  "key1": "2vP7M8ZFiteiVa2gYjZMSReRNh1Re2g1cu3puLrkdZZ5Vh4EDxL2reHL1jdjVFAMSqVsYwicjjxi4AAQVX9faQoF",
  "key2": "3YSaz7B5GDPFuCc1oBo4R3Q62kQm7Xu6opZQxKfqjxMZc4bHBW6opKv9tFAb6QDYH2pHZg63wB1RYX5G6Jpv38vy",
  "key3": "wFzKqFb9EgGHUWp8yWisBCXcnRiP6aEUj3DuD1Wzqr1TSYzmX6H1xWFf7fpGni7GS7ECnXN2HNw22hHKhj5Hidc",
  "key4": "2ojz48miWFGnQUmrxSf43oPV7j1ZQzesAJVe95zfJwuqZkV12g45bsy673zqwMcJduZk6AAe5AGfXE3F4hsmh7aD",
  "key5": "4WUMba162AXAS1BWq6uoQB1e9hY4WAHiWyQsftSt6XQrya3KNwtmDo4j2WPX7kXfdLTryQY1mbqULA7qf892V4rt",
  "key6": "3ARV7HMWuBijcsS8tSF5ai2pjJx6Vq8fkMUqMVTWKh3wvKz5h2AKbepqEn5sGkhNGfw4fbhHue2E131rZd6kVjwf",
  "key7": "2AVTam6h9Sy3jifeXTXAAhBYnXrMmtP9psGG33caiJabjvso77TwxxaLzxvQLQaa4BLsASmbkKaT3kVQER2SdVAs",
  "key8": "49c48r8NT1wFGbi1FufeJZAp5N5nZwjaqwAG5hK4KVr9hnSknPZL9JwKgbvQuoErzfJYTnRvCeKdLWq9179mPxkw",
  "key9": "2q1aKJyWxYf5VDW2WEN4kyNVV9aCHDvHeABdc5fXwd767gKbXVAGp2wm5Yvbkou2YQpNX7fsZVYrGh3u24BAEex4",
  "key10": "5akdxAu97WTcx5jyXWkQv8Cryum3pHx7e95CZ2wc6u78Q4XFsW3eovqpcPftESfgFa6KjeCR8ibi2FhdDaU5BmpX",
  "key11": "3uDgBabc8txf5qw6yfEu7sWSr3wFxxNsB2jEGp6i73EdabVbr6WRg5Q9TyqCiuXG7JC6YWYrfJ6WceygMvLvTqAU",
  "key12": "2ZDfrbLcLFL6rPQzsezi1cboDeRz7VCMj7GHY1dAypwsXhLgRTHA6VVG5A853zcWNWmGXV7etrfEYARpRjdxq1wd",
  "key13": "53fT6W79NHKk6FoD5J2snu9DReFL29k3RuaTH2UTwgwFSP6eoeCsHUqfYuKtBfAaYrnCZyCvgEPxA9pr6KufyvF2",
  "key14": "3bAQ6hs9uWEfDw5hL2m6acMsjqhaHAmaGVk1yMNUiacRjB7GcRpaij7ZLzjfpPXSoKe1NLAMJiUGjo7Qrab7a6gy",
  "key15": "37DvZkHfdhiYRTEHNdGGkEe6P7A1r1MuuQfXnQvLChSeXoLVSx78FoUNmqchJCsQY34wRLGM3vjrR2DzD3mpThLF",
  "key16": "56sDDcB7hy87pEnk2jkcsEpvB6VE5jH9ShX4CvgjpjVbMADbj58LuLW3H6QATp3YC6se3WXW2FK7XFxxCRHF87f",
  "key17": "3jAMh2E2sPdCNg6oqLWDj8XyzFdFmDsQZW3Nm1zpyxXPD4WA5QkmdaoFezgqtEx95v8doi8EuXkYmiTNinyDzr3B",
  "key18": "5PDPJUAbFa6oq9tkDCH4cH1nFyPxFerYFSZQ4CENdTuUk1DTWZA5s7gDcZR36n2QwxvFe1QsyGPcHWtsd8Sis24Z",
  "key19": "4KBazHePcXnWzKrtt2U1QHE9SkQxChHgu4J78RFD8TsnUc9wh2nduESt8NXHHYAUDUJ8F46nK8H77vWHuJh8pzFn",
  "key20": "G5zQ8FnaMzaUhuh9WhBE11BrevFaih2XQkrFmEUU4SiqUQXue2NY54ZYDXrhX2AYNGVEg86LMwvVyWfpxv4WecL",
  "key21": "2wA4AtfJvBzY8jF8zvYYwpXH3SJ4t9sNS91Ti8FXSWvSGM53wqVEWQDaEAit4TH941Hu3d21jXB9XnhSKQCxmz8t",
  "key22": "4G7QMmpexM9NaBzpkycA7iFbtohxAeeq96dDr6ie84vzv1YMKz7sMqFWskAUQA35BSbNNPjshemax8hVUmKagmUc",
  "key23": "4J2HEt4Si3CRxEbpUK4bSpDuQkX7PJS5TMwM9ihE9xE3P8GBfWDAjipifGqoQqt6LbgrSMFygZ4ajqTxtKShV7cx",
  "key24": "QESFQau4Hy6toMZMvQ2muX1iD9Br7dJUn3K95mDoYkjAPmFnCFKjeUSciQFZDKkMFtNJKQb5Av5ydzsSpufHdRj",
  "key25": "2ZwjubCrbnQPXBxiV3jqCUwBmSqpy7FkUHqQbTuR8P1tLPLth38ATEZDYQNqdtKXze4YWTSZKMbBr9De9D4TCiuQ",
  "key26": "2j52KFPYXQUiKRZwTU2beqxpvBg1Rj7gVN3GNqTCZYH6DdncfLt9dfEEneRiRtMrs3g9gVp8Nj5UWs3Q9n8uGL79",
  "key27": "5NVwE6XDXC2kEtngPvUQY4uaXhkMmrTH9ZaZMniu7wD3XxMY4pKKtsKsFCJJkKyNqnVsLVzbEgUd2VC91oskotaS",
  "key28": "5XMdEy3nMoi5WBey5oVNoCN8SYhhcWH7U15Gt52k9s4sEUnFrKw7uy2JKxeZnekuJHDdipkzP8Sc7qav85cZhQdF",
  "key29": "2FLKGMJzjvJfR93kX8pVq5kCRAX7MsANqNuZVHGWsZWTL6Z94msAQno8ARJdJkssZzVWxKrzb3k4q1NUkvpeHc2D",
  "key30": "4V5Xk1sE8nM31uTJAZBTUtZbZnZJWdpTz8CCjEdPTU3qbKsqXhAtzk1K5DcpupFVxUaApYJrMR7dRZSoCB9kdirv",
  "key31": "4j9jpRWFAcRVbRnqBxucyvss82RtfuhFXPvbd37a8R4f7Bk7mgXjZrQKeWMtwEYEMjSjeRDiRqZ2SH4sbzmpqJdU",
  "key32": "3srsCin84Gi57J2a7uqWMzVsMaes18XmKnjnxvwhEH5ChQqAhUpHx4NrMQSoGWLvLj8SKzUzJ2Fn7KFyPZkHP76w",
  "key33": "4HauDC5UsvSEni4V6EGSmSXaGX2KMcY2MvvJgYTx1XTPtiHX73GctW7TxsXSVTkXsWyNV7tZrbyBguswYzqoFD7A",
  "key34": "5S2BxDn34d15Xv2Kk7F2QJ3SdwDrm9kJ7uQRJ2cE1JLKxGm1CQdTYVt2aC75q5Q7g9zGRbY6UU6WnJMdH2XqJtV2",
  "key35": "nchVF9xCL87oEWx2eMkpoioEKcx9EPETHaoeEhTnyFXbL8L1Fyk9QiYRy1bFVStD4EVw26862esy6c5BEWWnCjQ"
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
