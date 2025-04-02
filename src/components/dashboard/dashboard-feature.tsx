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
    "65zZkh61f2FyyttLyRb5NNHeVekwt4GhDUjiU2PE2ZJ6xWYJkBjMUevmefjgP7PBY4abJKvVRaGwbosUyoDmEio6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQv2AefPVUo5wAM8wvZW4oPwAvkBqPeby2vCnBHwkFoG2q3vR1kxvHzxT8hXseMcL5we7G8sqhKtSKScPAF8Zzj",
  "key1": "26tpecTM7FjSggCCnBAjYjFcuhUd1aA7uEdk31B5mPmk6eQPNPogyJZjRJfn3Sece6vFM5CQhjBrhtnmwttEztVf",
  "key2": "4h68KAqKJ7zDRdp3wHAdhGYMWyViguqXvp2jvftcio87n2aj7G1yDrw3r3PtbSDem2Xuy2DXNQ6bKrDQ1rM1pxMU",
  "key3": "5yy4uNDbJeEpYEGBp42hrC3iVTqEF32GPGeyThNJGNgstRvTDkXe5xDkQTMz3ytLpuUjdUDrMJsetKkbJEiE9UH9",
  "key4": "3b3VokxM8PNc7XG4pPJWjXB1UuMy4139VcE1V3A2TWBzVvnG4ZFLqHGPCmEedbNz4ASYh9KMKeRCHa4G8vVtjrDz",
  "key5": "4CXCYvMAcWNXK9q9PcMZ36NyHCPMC5FKipXdwzpKZrUhSpLBL41oDypk9B542gbrefuBfNyTCyLaEUVbSi39hxXh",
  "key6": "3Xh4x221LNQd2wY7mxAa51fd6huNVVeQGPSqsHEyGXFWS7y7wRm2iXUkQHtSHVefRFuhhm8L3Qer5CSrjzuEhHJz",
  "key7": "5SgMP72yFkFFjT4ZFTM3WDsgVA2bdLrwpcYCFgjTijkQ68GJspWY1D1aBW75wEMqqdRRdLZ3vbxYdrSFFy2voQoh",
  "key8": "4WZnS7oy7usg6MS2djJSypYYFBXcjBsQ8Ttc9ZhzP22iTC4Zw4hzXiHLx6febENebopP34oad2veFiQkFN4pVnU6",
  "key9": "2rzsMRX4G5S256WtbrWvpwE2bbYpBhWHSAxHq5DFBQqFfhWd97VJAjA9UJSxany2UYQqVmWkV3s28NEkGb9NgHXc",
  "key10": "5fuKm7JaigkELw8cKiA1UtEHCXqBtUuTtgpd9N3uoZYZriZPJskncTcFF1Nis71C4DWQH8YAsVboBzzLc9JuPDAa",
  "key11": "3nfK4nLQxc81TmLnYfcodfwf7fitgnD6BhyiuqyT8gWnrVWPtmrsz2MZsvPVMBVgVFaE5CFx2WRaF1FtVkBzzKLg",
  "key12": "5nDpNcpxPjEoZjCYUDHykx9mHzxw5gdMYCQDXMwpyqE1MHoytoVFDAnoc8PvKLHg1HbTzxkoVCfmhaSwwFcq6ME2",
  "key13": "3jLHaDRxyHc5jeUePoXQXHqTFyH3SywmSjcQgQp2RoCUmFQttWWoiQYfkUC4Yms2ZQek17epDphSYKC2hUkobvRF",
  "key14": "vAqbFkKiejJFT5vnSg1pEtD5tczxva72fsr9oLvNrZ9rCeT5BbxTmbyGojjGYiEMdJAQqZTxgXwM7diw8ZHP88x",
  "key15": "6kY7fGvssqwmFL7wXXkCGpmZ3XkibkzHYzugshvztcenJysNPFQFJT7xxAtnzDdykBoPYs8gaSvwfB3zdTPbn4U",
  "key16": "4QSZ2hWD7YQ6yPVAvw89kibMAQ6CR5kYcmycLCGaS2v8zK6xNf8eLkJXQfcLUyGpwGJMCH7udyM4zfJWg4RfM3sz",
  "key17": "2qJewfGixZi8Z5vX92FzWoEF3YXhzNWJnALfr3YgjSgXAhJjDQJ9iVX1F9nBtDedopF9kRejFPWCWdrPh2AzM8R4",
  "key18": "4Cf9wUUjg47y1XZgNXJr5FAAg4HbvFTuRVuuzzcAdwQYv2AQDLY72fQ2HHTzqRPHMrtT1G6WBuAM7tfvAs9TcUUg",
  "key19": "4hUENA3LR24CiSU2PZkonGFd1FLq22jjFF3vjDninvMdMKJnufQtu34wJhxj9d5cYZj6gfGUTv1ZiPaZeZd6dEwv",
  "key20": "3J22mbDcHhpQyxVG7SPreL9rA46pUinAhENd7H1mo4heXooiHYY1syoK7nBDu5nyBm9QfbDf7mWSqUCi799xEU6g",
  "key21": "2c45KowquCG6d2Q6HGZ52uEAwFfhshfpjTKwqKjFp2Vj4SEGcm7Zq6KfzKsnVUct1jWtdYyeDdZoAReUiGciRzvB",
  "key22": "FF7S1TL1hZivd8PTW3TqT6Gyen7v2wn45JZeUGA7KnSzyqpQmG3TdFQ6S3tkTAaaqHuW1GJqz1Pgp7WBKCpTyR8",
  "key23": "2jwJgbU9iK9FmXkGuonaqv8YKmc9GNZsBMYyUDBJTAmX3QhSD2qmSTvzdYUvWdhB6bNSgc5V9CFVXP7Y2vLRDyvY",
  "key24": "5s85zeSf62TrLBksM9HUZkCeEp33YqDtreW6LpzZtr1zw2uwPiiDa2jvRsHhjQUASwK6sjPyWPJQu3nGp4EMa2wf",
  "key25": "3ZcFwFZcfxDZwFV2rkWB4UFqcmCDa8ZXL9LaQgSeYi3LDw1KjyZQ56YoYnvA85sNtSxBNSSjEC982hNAoJdXdK8v",
  "key26": "2agSjWDxETcPVbGmJ7kxSXVhp6YE9WmgpbQE1gvmJ6sECAaAYHkwGoXstAkp3BwzZwquwJB1CwFFqRkkJJqTDf5Y",
  "key27": "3SvWihe4JUoCHgwiVQtP4fLqtWF8gTDS2MdhKLZVGax3w4sq1ERwbESNhA8dFD7zwfPeX5cfTmB95pXBm4LLT9R4",
  "key28": "32EVNBiR9ffqg21TKAh3cu5TJCV5bMTfx2Lv9btF5QaKqqpSETBzrd8mFbntBAbSGWCwYtbiCuQQxDSKA5aHWwR8",
  "key29": "4ATJ9d7YgUp4EMfeufbPtKMbCSBvkgFCnFmJfDLzLf27jXUQKJMYJPUw9X78rvdmgLsX2yFiDbguqNmj254csaKn",
  "key30": "dCpYjTrzME6DpfR4LCXDo6WzUfmmEJMBwpCGjQT12oqenn9j4meFaguUfhY7Mnv3s2WnqePVL122nHcCUJ6Y6vy",
  "key31": "3HEn6aURbbhrziR9Srwbek2nvdXwJHKrR6d3goNZgcu9wrkTPeYhigMY4wucqJvGdPoYUJAhcQ4xR9u9xEYSEUVp",
  "key32": "5hcLBtPYvQ6N8Y7PJTvjixMncyt7y61zbtqXQKTrDBtvqCFXjegJunJqLqxoGA2i4CCCx6Smw9TDM9o8jr1MTyCB",
  "key33": "5rA8oYqpAMB1sZVbGL8rdkBobEEP6rWhB6AT7c5TWemsSARfR4v796S8CbxYbXTRn8iHAFNEzk4JkU6VeqiUKVEi",
  "key34": "7KUaVNZnm1da9FMdEZ4Qi1HrhMsnWnRFJ2ZZhfGipk3D2WfQxy85Gve8kkVQeGzoJiTSe6r81NjESU4U9cKYR4r",
  "key35": "5gtumxivwjpSVjjT2pWme4bpLPdJDW7Maf7ezJZcs4GaqGq4XEKS59Bb3znLAjxsfxz9uyH3wnMmYnRfJakZedX4",
  "key36": "2QqNR1UHTdLoNaRXRcbecHY1CGcU5HbobqhvESJra2QN9wYaKKE8fUZf6Npd2XFrioNtxt87qHBKHuh1fc7NeZDw",
  "key37": "5vbWwTKKHmKxcQi8Frqei7oaejTf79qE1USL19SiyuUNKaQCUWtvgADX7rbRWJmmiLyZqu6x2k35Bhk3YvqsTh4Y",
  "key38": "3N5PT6iZY3q9S8G7aZ4VjPiyi11fsASSCLD32tzrArK6ay68chyGxvKi59ogSiFg4xamvTo8KQgiEtxK3ccepH7L",
  "key39": "2YjLGQvxvAHZjiJQKD2okAopzQHjmESSdGanr2khSudFFNAFG9cS8dTCV1MmBoEtnFBnpsqdfunxi9ArMFZL8FNL",
  "key40": "313XSSydQ3mcs1WLK93L2xetoUDL3GeoGUySj3enBBMhKQjvskgFGek6iZkHQFgZgkdDLh4U7fvXGUjxvaqgFomZ",
  "key41": "4PYjEFv48sMBscifgVHyXjkHZ5DLaQd7sndcSdvFS6ax8U3UwoAMtMbVPDag3xbeFZaMVZWpoEpL4pcdEFx3GNdJ",
  "key42": "2fWgAVRt1TAoPXTaBniewWwbXhk8N6es5wWLExzF2f6gpSsMTMvhmxmdoJDWDfT6ByZ9vkf7qq6Q9nz2V1egNnrY",
  "key43": "2D4sRPFru5t9woQkCN6sDUfFSDjAtX9R5rJYrAjHZobjiLb3QcXW7ZYcMjpTcnw1kQULCq2FnQLZjdwMhA8UUzdZ",
  "key44": "2JfwrRpSxZQYhYqWKNhXCmxbrMceRxJzyd5Cc5ztpjAEcS9S7g2iqQWqikhDSR5bBjjzaBWuNj3x6yESexJMsF2T",
  "key45": "3Zdr2G7G2BLWSqf8zrzWkY388zsvtvMyNU9FyTzsJLXTAHXYThojoDHt9S2R5uViTeEnuSvdfnfD79bYNmJBeshF",
  "key46": "6JGhvjSuu6r8HfkJRAWiDsnMs6Ztdu5tkspaz48dudi3bi9n6ywrtJwUuaaqDAGUkpbqENFdw3nwhsXbWL7kpsf"
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
