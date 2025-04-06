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
    "iC2gpHM8jsyfo5LQeaqoD7df8e6xY1WyfqhBN4gVhneNjwWY54xkJntAaYzZKNh49796nPTeguaE4hjSzSLiPh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAFSEMUDeavzGftaFSPjn5uucFnBA7mLifo17nfGxP7fLKAvQTPSEmLc9xJTBNDzTsv8Ag1bwYwkUzAgtgFPgug",
  "key1": "4PSz9u2KuAow2vFZwMG5BrnfAe44ZTpxMhkcmrD5kfajn1X8ypSBCiySP8XR2oA9f3wxCqFkBQqCSbWemd2Y4stE",
  "key2": "2SgVqGggsM9HQXK5qUSjirNVFHD81U7syVUTTbUefiK1381WrrJWb7EUcESNZVceG5ZkXQsEqdMAVo9YYHn2vGBb",
  "key3": "3BSNuKh4miVhrZE6XMmMVBCrDhN4wEMUTAgavQUMrZZWoEzkc9oyVcqF8oi5o2UCxY5PPivbuL748187QqHoXGro",
  "key4": "hNEK4yRQj5gHZfGcTZYnZ1FbctGFvknXhA7CZJi8HfbMLR66UwH8JngHzkz8DLgXmPwT1zGHocNMhTef56CUMx7",
  "key5": "4Rf6LuWBuweQLyAR7C5fVpRtwgZBAVR3saRw7RF5UWqQfHmoFETTTsNG1yQnqTueXwHYDZ43Kc4V6QB4GkHdahAN",
  "key6": "5VjsQYQXYJYz2AShhmKti2pkLUZcR89eUR22T1qaBcjDhGG8aRDYotKkryqpe2oByjVYH4WT6H318V53fCmZfyPc",
  "key7": "3yHVeRiLm3rGMEX51Y2svEg2oRNNFHchazqcxjeATUKb48eWKkVqa7LVmv91imHYkGmheTBtB3N5anX2Lx6FeVzU",
  "key8": "5skaMei1r7QbpwbAPbGZGVffLcZgThjye3WMkxL9pKJ89xBvMG8hatwzWQhbrqGdiMMunj6U8AKLxmCop2sCSQ9J",
  "key9": "5gQnYBDkdKgCFGSUUss6nWV4HjWuke7esG1MofSaZkCFfPzfh57BrR7x23JtkzivdQXdQ57jGyMdh5TJRyQ4J6Bi",
  "key10": "4Eiy2boHgjka3yB6VDvDVteZXzocmA8rvkN4duYZpav4eHqMayK8aPbkTpBKgCZUZ2GkB8j4A3Ufy2aiE1bMgZAG",
  "key11": "3BowAgzfbF75efs28ibwSpsSW44VsHXsc7jQupn3S4GF37wdL4VTaSF5ThcjyaDLCN4gafTf9ry4cbK5FRvpxtPQ",
  "key12": "5chAHbDPvbg4aqpHEKsHq4X7DT1sPMvREpqKZ89fpNh1bRe2G5VqLNMLnn3pThX4kCrg1cKvcs2fHQ8d6t6MFyeF",
  "key13": "46CZM8Utoh28kwV6PRG4Y7NcWPTs4HPBtXLgtaf7GdjRSnY4cNMJcdZXGbjuhHphw5U55s4Ar71sCrVzccx1efaE",
  "key14": "2ab3gbg1hsnufK8my7Et5aQxQnshSmULZgpX9DcnX1mMQwbKZGUUzQ8Heo1DiqXcqrQKbzQnhM5sogafeGn8N21a",
  "key15": "E6kmfpD6Ek6kUamMZDgvK6Revakaxng6gEPJ3HJLm6HGu39AXVvuoAGmNwbeNwH8mJfceD4w81R9YvJTc2vXKvD",
  "key16": "4cLVGQewJrM7vGNWKfJyuenusuDF2hSFwhyo3NfBWnWZj3BYViHnRueuZa9ea12DYrcFuTtsquegnMnjmYDuqDgw",
  "key17": "3bDHtpSzHfujSPDbvRxGijzxfTD3N4XbjJXLyJVmGPhiww4EZDHh6euX5TLCskHrWazYPuGFHpQE3R4GKBr7SpwP",
  "key18": "4BMtDPz9rGUPhcgGNpC7Jg8o2AEj3SumsHWzKeMZRJXsmvDqsMsaqa47TMEDQU7nXJCzRiLM1nRwghN6uAdZPJWy",
  "key19": "64gebWkWWudAxagWjFP3yPc3FMcoNnAeU2J7Yu6BVWDS7NQxcvuJDUAtgzkR67BQ7cBTDd486y8XQNZyqvhn9wZW",
  "key20": "9Lzj588hFBQa9KnCtD3jCHsjEvcXwKEyiVDoZ8yXk3iKm8rrBjYueK1kPf3nLDzs9JPmPYL9TBYwLmeUhzhybWp",
  "key21": "4Gp7Mcvq7FgGFqBLuvZHdczUxHhkZvKozanHCgdRFkMJ8tqMZHhdYkYHGtYzhd1K7vUdAb58RH1SLmTSM5eTQxJF",
  "key22": "2PLPFZjrg8zKT71moACc7uaphvJ4X8jHUEzNo12J5FApCuejgZBGSSxQD2BKQLPCL1tRE8vMEG7dSEQ88buMEuR1",
  "key23": "9563f8hL8d7mmvGvETfVQENPYtzLn5PUn1wFZU5rg8Smg4BhQmTxZk71QQ6viQMfontHaHqJ9b5z3rTCaUQ6APu",
  "key24": "5tiJC5sdKFzgrUq4irhzE5ScYAZbm9oQTB2Qxe8mS5AyygwX3XqtkMmwc9uXne2SLGhjywtWXDpCF9DPTBnzTad3",
  "key25": "2btFfMXryk3xXya3jSb27VWVJQQCAm17U8kYgRcmW87VaobGq7XiJnASmDiJaQwgcQQyQFoYBrjihPwFDUYQzJcr",
  "key26": "MfuHSWJr6jLGqEeW3WbB5auaLoBjZWZEeqeJozQhdz2vzNUbjDqCPzUV5sLtivtkifms3KWJrw7b9aS1bpgXhfE",
  "key27": "3MQVpNWYNWs1uCfDB7dtGiccnqRRQ9FjihNoS7LcmLyFAt6VEWvH22ZVffLr7fT1CBMbVZ9N1VPeftvUT4idMQKB",
  "key28": "5TtuvK6jmqmw22hRaRB4BGLYwxTczeyER8dWrPmLdbNm6ruqKJYLBEzzuqA5k6sEcDko4G2EwLXjvd22C67SvHDL",
  "key29": "CQ9yCbTnqKRnzBpL6xtY6eW1hAFgyGcKeaFAeNxUsqAheq25qwVESJYugjaFK743Shz1JLv8nTKcfg7YyKVEnEr",
  "key30": "5mMwjYEbhsg6cdyc9XoSdDS4qF5vMN8v89EirVyypNmXswoT4ChFqeJxynSfsNGi6LbvWEQSc25a3NrzUwoiaX5r",
  "key31": "CjMPNYXfwkd3JzHqBB1XdwgoG9nocQZdJzn8BnCnm16fSP4uxSrVz9jXZvTT4qc7d6uTorqtdoNNWETyZPm6jrz",
  "key32": "4XXVbXE3WpwWriJtKZ6fNiyktpcGvmLJjtr3nK33ez1zdrvrw5Rk41sCeMLipNxQ7MkzhAffMu1z9kskXfca66qG",
  "key33": "4ENsqVRdfVY2Ct2zTYaoP61t3JjRRfzLgaPcTUZURvTJ5XEbio5EZUMU5hH3XXCDu9gdjfRK5vQqPxp6EM2dXFni",
  "key34": "4zXaiTkJgyXyuTB8Xezq3US9urgjnY3URjw6MpKMrT6ucxG9aPCtSZyrXi3YAuDikKRyJDAEfGp1UTm5MTt7UFA",
  "key35": "4tksY4ogt8RMRbcQdGA3kRz3CiyTn8Tp65WN4NTyQzci8wEk4rvrivfaaQvY4WHwZgxSJs1B98d85qEfkuLR7WKw",
  "key36": "5bYf3uagh7HEEp4p49FL2DoJvZxLJVFEWvPwzx5YQMVypfGXToY5JGMmSonCCepGUBcNpdKeG5xDkqnJ7EGUcW1n",
  "key37": "3JrFKNTiAoZWv8dgv6Kt28eyiApG7B47JYrb8KewJ4rJpz6RHaYCaoKLjBhVFUWvwrboFAWirhMoDin4nNzxPcVB",
  "key38": "51zP7MA5AHWVT9uAbgNL2sV51shbEq5tvpLs83rZ4zgSqcLo9RfcbQ119rEUb28HhjW6BLEufepdV6GKtdPturAu",
  "key39": "uRaN685r1MGnwc8jp9fk8s9STzpGofHzLiNVJWLuYFh3a3aG1jn8HSJP7tMJYdV1NSUUvJ8TCsgvMF22QESwk67",
  "key40": "36VyQ5EjpjhsU3b4DqDHDZg1cpdxrQnXWsiATEzTwzHDbDE3vvF555gTYHA2gTHngvSqCRiohZwswfMKVVhUh6Vv",
  "key41": "4amWE5n7Jmy8mV98nTXb8BfRyAVTxJ6jDVk2KbNdmwzx4a8Vx788bNRDmu7GmfMtuuruwxZPyUau3QKVdi3bemQn",
  "key42": "2biAnWsV1EBJVPniob1LXptaYbAYeY4KwdptzYXvDnQWPtf2YDPhN1QXFff4xcUg1Hwasha3wpyjkUifLnSD3cTB",
  "key43": "2XZ9JrcUG3rv7bEe3WK2DLkxjPgp5BRqkHp7pYdXm28v2De2QFKBZ63LZQg1ZUKuvp53nS3MwJg57KdxgiL7irVU",
  "key44": "5v4xS7BsZsYUC4YwDfLKQYvzFV1qw86FEpKdeZDKiiWmdyYa7ELr4a1j9Bk8B5NwpRSu1dSvDfhTbkSCvaWeewv9",
  "key45": "sPZWkZ1ekdEjpVQ8wMLNhPjTw6nfanKVQA66K6vpTZVBDP28j5SVNtZSNnxZUsaAc2GHc14cp8d1AeXygtWajbE"
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
