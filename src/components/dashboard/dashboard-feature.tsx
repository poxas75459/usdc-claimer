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
    "regun2aR29snTKKNf8KU1p4hJbtRyUGVFBXhDi98AqF8hhwE1ADmfwLkbbMXbDNyWuUTV8Y2gpqdwjzMxDw2P79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqLq4u5UmgkEGnS25MHawEE3LvCNZoFC5u2YBysjqHrEtxwPQqDHQV8Rx5e9fh9E3pw5Ayuny4j535x4wfPjX2i",
  "key1": "P3SS3onpRtAJAVnGJLo3qUeuZd9mabdy3NYrkY9kZVy4dEHuHXaRN61RX9CPXutMxqSa2Yq38BCvVERN8CxssUU",
  "key2": "5VhZCkfYnQwp8VgiW3uSwehMttUUVysxhRgUPqCMVtMm1SX8VmCLwtNiuQqEHJGQdMeo4wkKvz5XHTPoJYoZVTNr",
  "key3": "63miYtpqeVxG6xzHo6E2avyzamFSTbyjyPjhpTKZuPYUHqKTMxVidPATtwX4VbaDmnxM16ut8WhYMHAmsas1X7ec",
  "key4": "2EStBRfJmTRKyn2QfbGsqHErP5P3T5W4Smr3U8Roud77nSVSVYkvENs1H8SMpUNKAWYcSTeD3ejo1nw8YHvt7JMh",
  "key5": "5WnnPcxPVYuyTXTAZaNwZD1HNLoBwe1sjmLndbufS1rNCbw9GD1Ve1uToTwcGP1KoNce6hd6itMcZyRLm87uuqZ9",
  "key6": "5ujzFbfMASu42QTpYDep3msthk3oRcfMQue3RNi6tk2qaRRU99N2hAGimPT7armknVD6WJ3xJiceJ7AUr4WxWWKV",
  "key7": "2Jf3qpCJY7FqwDzvogYqhYmCvQp25uG9MJHekVQTQ34PzjxihwqXvgZF3Vk9mxc5D9Ty6ajCscPxu7XtnmMnxdrX",
  "key8": "41KgvWArRsS8iiqAAu5Nov4sLyDUoYUo9tou9nd8q3MVwmRVWDfZT2QYwZnyjdyEVnpjwaHja2o4GjhZsVcmCCT1",
  "key9": "2k2uHUgUWWiNJBEWuV12jJhYfXdWaweShEdwzNnHrnmW1MQ3AaPEjyyYaeozeKii9eZ53hskCPiwmGLcaLZJx4i5",
  "key10": "2B38kVJ4qLm1V8ySGKayDspC1j8kwLeVpFm5u4LEyoDMoD8RSEtmm4mzD8vVVEJZa1L7BjxsPwBt8GX4i5m9qGdc",
  "key11": "3zR5qN65nr2RviEmbVVJMP2NxVxg1j9CHp93BgxQBj6EXdcPPHs4nhBhRd4TiFoBo6ofB1a5ZpbAcBrrYMRMvH9N",
  "key12": "3F73qka31mY5KFBoPMs4pYwk4m8SrkLiYRUBhRToc5KAoHSBq5uyv7egqr88eXvto9J9WFq2nRNqTHX63pRyhWrv",
  "key13": "opZSvopb4ry9kbdGh2YhSjATmfseg6MyTzTpL8qXKhPntsE4rk5nVhP6Ea6jtVsw4g9uTs4UFQWESQzYiW8xVt8",
  "key14": "3FwmAfr9p1zxY9xnnMo89JQGddUnskV3UnqZLorp7xLxzMjbZ35DHHnmMGcmsFEAk9Wkj9mpkyLzi3feanM5mfj2",
  "key15": "2UvQEx6RwTpWU3hn9yNM86enmzdhyzmmT7qFGuLncd5ssx77gKTSjf57ENxzNMCvD9jV2DD9myF1NhxdLL5PKT8E",
  "key16": "67GEqFP4NfdNb6UedF5c3Jnr4jqUDug9bCMnHGTtWgci3cJRznw3EwTD2fPnAdXRzAR6m3Wp1RVvij1Kgy3yZmtx",
  "key17": "3gQWz223AemkZBJM1p4eBad8gk3Akfn2x5VWkUTHHVLxGF1UKzyij3MqfvCzD9FGzZjSiEVYPwurtEZHRPE9ou5s",
  "key18": "3WNwu2WTreHEmqEPS7JF9oVF1UgPJjEKfvPovVfpiV1dmMufCKdMJ11uq4G15H6vi56QMuwSQ2AvciTJAckSemzZ",
  "key19": "5bjtMYmQnZmsJAhYzEHBnHP2aZHf6QWvXncMLS5KV4PgDi7dsQdQYFinCtgjEjQ7Epz21g6xMEkjeCBa9k8jCZnC",
  "key20": "68xqjtQQRrwGR61ifcBQ5dDdsT9QgVfbnUJujBiyB7juBci5XiXyGXaK2adm9nnxvJMTYpRhM4hn1Wyx1Av7vC8",
  "key21": "352Ttk7sGeRhxa8eShbFPwEMZGQyVTcjR9oJWrRtoLjSfKmdjd6Zx6iKkdQmrCLWGf85C2ZuyLBpGxihkXY1YjsD",
  "key22": "2RCJrkg6fEthPE8AwvdzNAnXtqd5K5n6fmVyqz6wQsEmbrTtR8tVPpQVyAuMLugMr317VsxDMLTv6oUr2kxZFbdQ",
  "key23": "39y1tJiVDrYEGe8j8LZdKyKh8PWpimdgbCDoR6sNXwcYWjKZhAaCgS1a5fVyEN4dtG88KAqTGzbNivVexWFAtDZT",
  "key24": "2tZyRBoaDDbqRtSKvSU9qr4n1XkNPKzd46CJRGsXhPsEQSYVNeoJgVd4DET4VXV5guR6dhBP7GEbHGf8jkh6tcxy",
  "key25": "5wEmHyVX9t7objtCtvqaVFKeDUgd4UW2QY9Aw7DfaQ5v7GKksiqE9XUkBJeyYWRpAAFxP6isfWzn5Uru3wu4vPNy",
  "key26": "7b3VZKju54osHpm9Yszfr6p57EoMbHCcqDjTtAqhgat9QrjTobeRbxYGtRovFFp2VTApjtjXJaYDiGzskW9aTQv",
  "key27": "4umFbuAK9MBPwPjBsnhkP8eJoSV3CEbbYgquFGroFSbYeUw18DewJditbnzHULPfiMghRW1hNMnNf2gMQAavkNMP",
  "key28": "2pzT8sPyg5zy2UZix78FgURN1AhuirWFSUK7BM8bpHd1wrbqpb8dmDcNcAbcfx11B15gmdRy1Tz1kVdAYJNk8BHU",
  "key29": "4vZ7TacU4yYhks6jCpU5w4FNgcyvztACExxZjiZi9kw4P8ASmSe8Rt25EcuifCJxJgBCzESgDV7pU49XaUC3QBJs",
  "key30": "5bkD5tCGFjHyHSMYQdNGiyHc9Ey7P66SEAF4tuQ99kCKpZ9DUBGvF79zqhh6Z4Vu9mfV8poRB6ibW788eLzdiop5"
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
