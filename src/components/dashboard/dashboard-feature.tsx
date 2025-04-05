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
    "3wNNsh451ZGeQE7jcTwepYpPG61mpcUHo79y9tFMGzEk8JkDZ3ppvk2HtZV4BSANNdkVpHYR5w3CUAAyvezBQDyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FrzPDb39M5Fkuz96BZpTo52HHHbAsYxDBTw44CsxokYr2jNC8zVG5DvQWRENbU9YCLJHd8K5j3gU7iwjSraa4Bk",
  "key1": "5GcohQS9gRRhxE4j9CZ3VrVWTJZnxCC8hCMdokB7nFMAhQzBf11NiEKZ9pbChp1p47pCuQyZk45r5PNHdMg5T9tV",
  "key2": "kn4nhMMrkeDm7BtTiVEebxL3A2zXY1EKDs6mm7x7AhDygcMXjyuYaGUCq1ra8ZNyX5AuSGN8cLsGJGKwKtXqknn",
  "key3": "2UPszoggeQDCgYmzLd2dDkhCPe3ui9FJZatv6ThsTfaFdPm8Z8c26n4whD4SRKicLEncF6sLAsqpTTJHGtxhyW3i",
  "key4": "3ssyPSTv1oW4foBn95os2c3UTdc7zHhacroVzdNMSYKhYCs793Kxa2UHBTXbQPcixyyrU87rNdrAXra4FqGD5RFe",
  "key5": "5BP2oagMHxcGD2ApW8Z2w1jMUaYwdj5psdXrNvJ9NhSNynTWhmP6My77AvK1fL5YL1ka79xeiT8N8coBScpKvoEa",
  "key6": "2tEX4xmPXGx1oDnVu8qm9zXdE6D9uGut44M14X1tbbAjaAn5xApk3786KJAL92Zzoir9fyDdX5ftJs4eZDcPdBit",
  "key7": "MKRxepxGqTc5VCPKa34r4AcVuUxGtXr2p4HLU3teX438WGp4x1WQgXMUvg49raFVUpAscwtd6AXfMTJKfbkvv8x",
  "key8": "3uZSLJm74zqYb1pbCBrrZkktPZYeRfxV5xJCZsTe4bEhrXCrkLq8BFEhyLe4qqXeWkWht5AfiUHf4b42Sg3G96La",
  "key9": "4SmE4vxPWzzgsaEeYbvLnExoNQ7ooJNXJVfXh3yqjw7nhQnMrwXBo1YrqXaTLnRzjjN5S1GQ5AzcT4ukaciPHTXw",
  "key10": "23c8HkZgnUoqaqD8w5pzUV8r2MmSCaUZ5Cyg9TS1vgJusfP4WLTFsPtEVqGzTXFwaRFk6o1tXajWZBisnffm1d7f",
  "key11": "2iZNQukQuu2WCGPUSvc5iSJDuNbBpDpMwTH9DSyPuZadjNBLhaJzot3RobecNsPwoMbVTyazhWPA9TEf6rf1WSZy",
  "key12": "3MafejWHMzU2FP5vKEVBovnzHmtwBdt3zAv16p8RcBaX5EhdmtTmMEae3hZDvTHXVtFNcYzYanp6vYXaXXkux3AK",
  "key13": "46VYXSunKEFdn5X7jYG53gef7fnzyUHy53FwSs4XRgD79vtq6jyrwAmqH9EoAjpantE7yfZ3KvpwYMNGehFEfALt",
  "key14": "2kS8GSajjnYveNhoZwMjPjYtqyiY1gh2qwyG5XutYjjh5nWJkrgSkZbr6BU5AEt9PqchpWZt3BCMGH4K8eZguyg4",
  "key15": "4jFPUri6xo3HBWhRn4WAkQFVv1VFa4NXWTn7t3DuvZm14JUbUZ6x1cu4ExoyK9wcC58KtqVyFta3v1TuPywfcsE8",
  "key16": "4xYFDVd9J17Mt2yPcv27ydnf4x4YyqMPtzGBeHDTGYx9vFGePsyskDnS1w1N8fPqpzeRKMKnLkbAW1jYASKab7iH",
  "key17": "3q3y1fLujbcHKK7LdEzDF8VkW3gy9ELUjfFZTvtqWm3goyJa3ZsqnHDx5iZncxGjebMxLc8ZzzJmanVAbNMm9uf8",
  "key18": "4STjKnF8zq3deguDucseZAG4nqhs7zXSgoJL7UeDQd88erQ1p6kgYe4wBuVApWPZdfBz6JPfTv6tbYPqP4SwMZyY",
  "key19": "5wfDm5N2nYwWxAYFpujm9uQe5uhfjhEbGA9gKrXqWwfgx99JvBQ99azVUyc9Cm3wPbnPaU2xZUzdZ926md5Sb8m5",
  "key20": "3iLknhbyMSBbSwDNnuJuYSW4n5TZfDhGYCgmFKcyT4kFeDMvYXyLR3gGTJ2kQHob4RkMMpwdzuH1JeuAPiekq9qv",
  "key21": "5ipQ6QAVTvfmo4JaSKnXVQxUBWcfhjqWhZ2mc5gmA6XnDw6ka6aR7uCKD58gW1KnfshsBtqdQnP6JbBXgGeZjCvc",
  "key22": "2NwT4bW9as6rdHUajkMg4px21eff8YVLZ6FbpbB7otmKG1zbtUgC57xuNEz9c3j2y88JaHUTX6G97YzxH9U76Twy",
  "key23": "2dECFZv8KfMegJh4y3dBSnkoFwunUo18ehPgmm83C5CSvSbcJee6dE1rT4kPo2W3CQdGHhqGpM29VcDg78zdc5Jk",
  "key24": "4Q1fRkbMUJ1aU1J3oNKT5WiMpj43KqEioUekYNZgghi7tM8zLTPPeaEJDNy7s92m28gqdBGxgQqvXabVJ11hiYk5",
  "key25": "2vLJC7ScAWbzfFJ4okL66HG3QtmRgj19Wshfce6DG7RgWJBbhtXzNxekGL6jfg6CodzA7suMbdNx4B5UwRJ1e9Wm",
  "key26": "64yLFNyXX6K2XnX8MmantHrqXCvLaZDshSKtsgUCtyZMRNBhtKHP8L37fixK4jX5X7H9riBWZ5NsDzkMwBBgMt2z",
  "key27": "hJWHq93K5WtptTeZ4hrisxBhyspqQc5kjy5YRiG8658suaXMqqRc1wtg2uS87mLRMH5vazAh6rzvTJjSPnxkuUh",
  "key28": "4kxTznihjCxUHgjfnN6icMaYViydZhDE716mnAdURfuQa6NcnXg8tqBPVW93uo3iAQf34ckZFFE2BDaWYHdHr27N",
  "key29": "3YvbRKbW7HiK9e5U5fycTfb1CD19mQa3tTBV9nD6j5SU3z7USGkApaMtXxRXfdqyym7o6bhrR5B5xqBZSjeqLpzS",
  "key30": "5eWPK3Fn4vsvJsuMgL68CojSa1vYa1k58LoWtTvZaLZeLb1wZuXtUSETorQ2hpcKs2fbUh8j8hJZR9rDdkhdJ8jf"
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
