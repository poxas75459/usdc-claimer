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
    "5p6VKi85Qukmb9zW4iwrxzXx9Gqd6UNfLZavjh3kdkuvK29Vv8GGEAXGgTD5gGohyvddt6m4z5ii1DdDzeEhh7XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ryS6kMdtx11i4NZRwgodKTaswYBf5PZu34RpNSGceDHgt4yFGRPxEkiSwjxQGdApcc2L218zJeFWtkL3S1GZLEz",
  "key1": "5Ee5JkNUoi4MvhHixo7LUkL5VuTbiFuC86faC2fAoYHAbe2p9H5KTNNVP89RjATFro4biVYNrQgJanXtn6BAx9ZS",
  "key2": "5UX6KzrxL29PkHiaLHsFC9QAGcr4ogHcoHmdAjgSnQwP81y9bMyQTx1Av6eY3xAqVrvsPazbiDREXNYkiNgV7sWY",
  "key3": "49ZqTGjk2nq1eyRqEsXCX1g4MpxfM4C44yCDtSgJPUwThd6FE9MBbTHbdeGWaUz2W5HyZ9Kso8Q6qJp2fDkRJJrT",
  "key4": "3eozMTR6D9WgWgZTQ1iXVnWuPZHB1cnbw3gBif4cV2YRGkHLaTyEnDYyjtNmuWUM3SqLR1MKhLph9LxX7RbBxZ7V",
  "key5": "3FzZAuTSbA86FTDq3MctK6kSHd5ZtgkLQm4sJ1P4YoX1ZrrWrzsfbLNaYf2N5rjC8jxdurWdWgNbtd8W2zY6kSqE",
  "key6": "5gmCwUofsHHpu6qtzZVVwfGybkGoQjM5vSfqqfrKC4EENX29G5K6AW1yGFbEFR6gxUmPPsHzvKE6vZXMcHGQnrtk",
  "key7": "2jXuiqdfbDDUrECATi7kzfw89X1kMcRAyo1UtohCwiUdpE9i1L4RPGRFcfWrsrSKCFwHwyizL7TpSKjdEnnMnogH",
  "key8": "L6HYc9AVFgLGiC26vkRDBv3npEAjsGYKkR9PZqSTVRFtd5ajJwuAqJhEypnTv3KbfycyLA7JqgZE2CS59ZyQ5wd",
  "key9": "2H7Jz1M1pjmXQaNeXKw6WKG4GuQufTuUbcEjDBGRAykkM5vTDUBsx5jSnQCV6jbuC8g7UurnEdXLhGjLwxkAMBN7",
  "key10": "54yxSfTJVR9ywe4Vdi8QuJBaNUC9AJ2iGEaCAgobe8QFzBZnZDhtzYPg9gesCMXTT6Hhi2k2MUo5XBv5FRjBYJEf",
  "key11": "2kRDxeFWaqJsb6HwHbbw4Ek3rGAVV63QUWH1Q2U6mKFLi68naxB3znxmoLgQGZH1eAVwMAsD1jeVdGaK1Tj7iiTr",
  "key12": "2hhHvqyUeSsEFYXjv7fY2EkDW9Sd9XsnYP4n7dHUdnfqhVN1ysxHWmn564oodTTNTcr2UxxkJv7Nw7qkyKZCgURA",
  "key13": "4CRBYJfkM151jTeEWhLm2uPZVm74GVE41tLLc1CkBm4yCsghvVnWUd82eiFoqwLeoHpwyDdszbhqrwSi56TSnHfB",
  "key14": "2H8CsgyHMH6MwRCQ2cuoNAuPqK3w499w7Aqa9yFSvdktsAgwYwaiGbyRvzBeLq7HMzTSguaFSKE3U5zw85JSrt1N",
  "key15": "28VTyMioZDMYuaZLdbEcUPUFA8tiQfjCAM7MkwcZd5ofrS95MmKociimvS4PNY8Hmv8LwSJvrzPP1JGN9ms7rzqf",
  "key16": "b8AS7ffhjfZDwK4HUGBxTrEwdaSQARCfXpCyifjXpTggNMx2TvZJLZ2pCTJXbYcHw1HQK2BomA5qJpwaytrYH6V",
  "key17": "Eqxp2fDWfX64h3ahHRXiV1RxL9tgephQNvTU75ohLKS7tkKVg8jAULK2RAJv4CrNQPfXwB2jsUbyCMjTSMCAshG",
  "key18": "5ZE8LsQJzHuQgQwnfXucQSDaZTGkDvCvPgwtfGjnEjkGL8LYmYv4pGNumofG1j17rXEH1s7JArukPM1B2Ef9MNhQ",
  "key19": "icpTm2bTMXNbC5HFVX5n1F9xL3HCKAoRLHiBuH7kWhS8DuqGZXDubhAVp6JCA9rRDUmHdvEToYwmEQ9xH9NWerF",
  "key20": "2fVPwCi1tRGaL9b7o6bjsUEQmwGG2zgoYzM3bwc9C38qJH5X5wykVPZdfabgenGQwLNAAqsrYCvnMRotAEidmapa",
  "key21": "57huwC4wt6qtE3JK5uPB2wnvQyPogMcwcza9zHaDAVKxTPFjRD59vhkr2uicdQzeYtmgMeXBxFL4gDFpxvF8DzT9",
  "key22": "rYytCrk1zTtTLoGP1vLE6GvR9iLvJX4GtcKkK1Jhhdedb6xcFeRLuygGtvvzNgByq32SzEHRRjkS2j2xZ2jmCY1",
  "key23": "4MeECvtbv4zX13sqU9z847SqWVzzMCBgkmhAFiP3RbBcvoLxFE6QBmgHMwBR1z7jst8w66WVgzSiXmbwuvuExBXR",
  "key24": "fR1CozYmVmdzS733Nb5kLvbXKEHpQRZponq5uFCe6cncVagwM7YbKD66h7qFHWy1ZiFJuSPwdP32Jwa6afDQ3gp",
  "key25": "2fN7om6woiU8amTRQA54LSyo4qKGcGgetPEZMhd9onRnD4bokM2rUV8Sn8o79nyAVcnTdJxCKvmWfo9dQRXqvoKX",
  "key26": "4uFGYGjd3nqbYBHUwYgzkgtmkiocufeVFbC5UNBpbnherU1nnYSXR28QLCcn5Upf5bjow5g3yxLFSiBRkwTy3vBP",
  "key27": "53dDBWP3BTykCUJuYqaLNfupsf2pEtFJdAMPfPuW1T7Z8ChcKhiAbSBU2YsyCR9xzrAnfDPPobTjoUkzV4W2YyMQ",
  "key28": "5jcPgCD6PcotFE3zcJ5bBJVtDLgxttUsuxH5rzHVUmfEMbg6Q7fDrCa2ZbPV532nC18Ge5hJ8oNtLY4QREnys4Qk",
  "key29": "hokWRwzjbsqtEnX4yn9Eqb89CDK9GrZtnNs9r1SKYLsP5UzuZRv6cBbhN4rY8GxrX58Js6t8jZXfCKNNN35sNye",
  "key30": "34yxD52p1mavEwWxSNRLCFfMFma9e51qiVkcYe5tJ4pPKwGSf44ispyMaeV57qXXDwN6LRMfjnAhQoYMhUcBFMuz",
  "key31": "RFn2gt1BbuTyCTAKCg7JsNJvXfu2H9hY7PuUoE9DeZp45W5Qe9fZLC6keonaehwY2WizjmhLJAFbRxurYrnVcMk",
  "key32": "64b97si98i6EUqXLH1PPYm7ZsxobwWNieWpaoyR5RRJ9QohTFTvpRYba4xry7jjK3gxHp4rQRAUru4ESCe4FT2LM",
  "key33": "3imeGnn5hGsCcXgsyhwDCTXPAzwioUdMs3jQErg2BuN5B5g5eyRSkd7cdRVoiyeuBEQ394rLqTfVVGevCQmz8nfJ",
  "key34": "3QUN3cRGYmmfGMXnC38MoAJGJw6Fx51ojSiDdEkce3xDh6WX1VW632eeCEXvw8Ry8Y5jn36vpJau4F7LoDxS5dqD",
  "key35": "YPT2h7F8ReZbn9N9piPB5KfwHtaPQsoccotB56V6XZSHK8E5Vfq4z1ajCSpTAriGHfcoF3ivdFHDtUfDVCdMR4g",
  "key36": "5xTgyx5SqEEs8PoFDxuPkCNsykYwQ4gyRoYkeqkW3pMDDqek6mNfv1kSWnPoJbLx2V5Cy3mf6zLeErLFmJsi6s47",
  "key37": "5eUsNydr7C6u6TJkHt6CTsvAFHMUHNVNW9nPbCrP1a3cXBWk2wjpf8bfWkTReevMScCVpQgPjEqECGRKcF3NsEPv",
  "key38": "32z9ZA4q6hRvqXbjgb3R31JnQ18nqyJ61otWFJVdD5TDnpY6FFb5HqsaaTovmTsyioKQ4JJTCELgkjNyUxRAqTag",
  "key39": "4foobyFAoxTnhVp8UjosP37uvmrWYdA48KyHXY32g93jnzsmHH3mLrwE7SwN7NTkjgovFTRWNUJi2rSakoSddKR9",
  "key40": "45HoWmtWmZqNxAm62E53xgKVXa7PWTRRcQAXtofrS379kgfbPydy4hCPBytD8GtaTEJjZ9jHiRnADnQwmtMRFR6x",
  "key41": "3j5CAZfWuJdQtnL31wHUpNhW3JxzJTFru41o6ZCpWXwjXvBW6NKFY5k4sYUfTr2vK8xooF6bDEFFQq1wk2GiJk8p",
  "key42": "3VMQTwMJBSaqyFJ9JAvUpanYBX86oQhfTCtvAxKSUMuR3bT2uxUPHLHDws2s5gicxUnFad9STUPYthtKWfzEuc4Q",
  "key43": "2y819sSSMasUzpXN5NNnfBprQ8Dcy6d83CTnqXp6wasMXAUd3BEQ6MfhKbuiyzsnRxzqURrLMPiwU6J9trJ1JUae",
  "key44": "3e2CdgGxg5qXveU37DWe9V7RpgQsgd8U23Yy6CLZG1kaVAGueXJF48m5Cap7ArHoAASiSfjEDZMQRkCKqFa8Z6jP",
  "key45": "k4KaVZr4j3nwjzFPh4YZsUAowV8nbi9fNdQ5m9HTukPknrRnwTLvBG7C8G1c4iJ3QaqQ4sUhWoMc73dLuhmL2Qs"
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
