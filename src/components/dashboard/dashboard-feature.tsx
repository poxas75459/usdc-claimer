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
    "Ub7GVZGHSdVGLFMHFqxf914EJTHnpjfe6awwEm5S7XNLP8zB1Ya7BFeuMf3s22Sm64BcgeHmMsD72DesMF2xeTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzfxoz8WP1SJUP5SUSzmQq3KsarD8cywFpWrXLnm2VXqmMkgNFkk4UYrUNJD3pEAdQ9LBA4mhD5rezEwPmZKd5r",
  "key1": "584RGBNiiRUS8N6BrRZM7Ly9yBBfixqHyTNH9etxv8UnTUBf9hR8WQCcs9xUZeJioeU4tad3UjJPf3EUgES3Gciu",
  "key2": "2tx4DPPZVKwnY2TEkXXfndC1tQHhkKeJf26mFGfjymYU6oRSbsLDQL65BFdmbFp3MDjKWRybAN6RTqKdCpfrFKBv",
  "key3": "4e8djgGPR1x4PyyuK4q1P1xGj9Xk2qP2YMMkVYtoKEfQhC4uFCDtKdDkWs1PhqgxSV1FhGDusr4SsrwvSjNodCz",
  "key4": "5nPTqJcjoMuYENzD6ueqS1QjavczHuLJ2zkHzkqmi4pedLSHctWYZGfxLXEXwS8vsPAhLmCzMyPUKYJd3UvLjhdR",
  "key5": "5m1JQxhymHUvy819PL9NU2SksDB9oveP6UEP3io5fxoZj1yxYXGpQZvSGFmhEQQ22h5gSW2aSJomQKNXqukQSiEQ",
  "key6": "46UhjqJ37PiFVpQwFuy9bs6yDmdgFujWZv9n8jgAoqNkrL1m8bRGiAAKLiuGM26t8kWcoeJEDpSRTP2CgUqE19J8",
  "key7": "4uRd7Bn3q9Li74GK93QtjoMufQbVomGE8Xrs1UqFmB3smihzBGPFWcopmpxwD48eyB5RtWU5B3c2S59ZGe6gzbTB",
  "key8": "4hFPngXjavwXeoCNPFqPuayDcz8E5dSDr29tSBbeT6WaeAmT5gbqg5vWNgTPCfVz4v7oNrWBsnMBMcDhraNuQ38R",
  "key9": "4dab44zus4uXvFDqs76wCnYoco5YgbEvQjQCEeqM2i3g2YtZv6mUHTSk5VauXj4hi7k5psK4PszvZVw5c5nELD4d",
  "key10": "6sqDtTLTKPF816wMoB7RngkikqhzL61A89TNMUN6qAHGF6dECPkDtubqDKqm1u8RzxMbh4RASbZwStCc1TcvAiB",
  "key11": "5hRpxGiajbZMmtMSTxx83C94DLNMH9Vkt6LX3LEHe4676PhYzBBjRoS3d9hFe6rESc1rJRN8Bn1ndLnfcQUb4Qq4",
  "key12": "4E7PUdSY5GDSVxSWJcQK6skJ9aNxZkqzFGJAGjEobuUMgET6T7rji3pXgvq17EoeiPiDn5Aq6bEERVzYgTtHMsDZ",
  "key13": "5LNti1mZN8p6zVA47dqAve93a5WCYfHYqYRCAy43Uc32kJmgktnvwzQ17UCHUa1cFsyafYTzdiRaMoSeHtxxMtig",
  "key14": "5UNVbJyXzMNLiwnJmtk7QHMsStbsEEkpt2bNMzTF7q1eCYjEEyr7UJbMSudK1t7FyqAcGr8iaQnpZReoKQ4V1qgQ",
  "key15": "3vU4sARtE8Xy7zTkPHYRiRvGDEUCaLhwQTXNPRtv2KUHs4pCAaPs5ygyxygNgENgx7SLqU9smoXo1jqXc7gdeXRb",
  "key16": "3TR9zp383W2ETChwP8Uw12bPtsP5SXUqhbxDy6vYskhNZuCP4rgkHc4VG8uAskRtfcAqhoUxL9y697YAMuUrovwm",
  "key17": "2ap97WpzCwiTEQjdgTAk1PiSpL3koL4S3rk1KL9NruRA1eNMM5veqV93xSMC4mFqc6a5v57KXXCeV5AD7uuPQoho",
  "key18": "2MvZrhJtAJ1wN71jLF97dmWCF5kzqXVuKVcuEqN4Gx6pyqjDWwqLtwDmcPhcB87AdhJXQoGYe8UL5TS52szAgjaP",
  "key19": "3ojGW5iZ5SKcG4bXWHAqN5hwNdJcbp8n56ywAVNDHGUZbLesbzQCEhSgeq1nqVexaN7yAZJoNb2Uf5aqfqLKNBPW",
  "key20": "2zDfQoYvSspGAQZjY22oHohtsezWAjFzwg7RTG3ByczHz6kMuGVCasZpRqrgvkdHbB6TtdbiEq66fasiwknN1wxG",
  "key21": "3DqtLcG9TN2RodmMjazsNhCjk8V4t5JL3nxNiXjQbp9J4GVuWyYeoQUC7cUQTZ9GwjXuycicg9zwFp2aUZrmK58x",
  "key22": "4FAexFdSgNh3J7Z8Whok8yEkSugo2aTPkqdgYU515LqJBVm11QShdUD7SpAnNaaaFUFW9jpcDFAkZbWzzCTvDXBp",
  "key23": "3eCz5XkTCvJfboCSu2YwHYUy3Mdh2qAPBQCw1PPkywPZGLhe79HVHTiq6zUQffjNNu6uA6V55Ny4MBhq2wj81TSj",
  "key24": "WjXnw2itKs2qH1mRdLcXgbgf4RHkNHQwWaidVQ9TFzJPGhrnhk8btjeaEBAmRj1owLmbtiLnDt2vBm3ez5miQHd",
  "key25": "4qDZgQB9HyDcTQzF5rtFcfysNKTLdpPbyLyuxHRCrkbdR74Nmtf1uWtnSPhCB2811YNafFFUy1v5pCahouaioo8L",
  "key26": "5X495k7fkEvkLthQ5FfXUocSgR8xGjgDfbyD1htMKL9W8qzs1AqQ1q7joFHWnRd2fdPXvoegxMaC9QLsZDn5en16",
  "key27": "AoPHBLHKwZFML2vZdtSZV5ZcpKf6KwMGv6aEtxEVHyxEeQDqMwFg6YHt35wXJGxUnCDByYhjiodL7XZ734eXDjF",
  "key28": "2dCuhNgeREvpyaDQtKBGtwo8QFc2x78MQLsQsCHPLwGLRfmnvuNYifBbc7M35qkcScgvfGe65x3Y7NvwzYEpPEvt",
  "key29": "5PGZwr9jPgUxBgntPpSb9PVjG9VrEVi4CrQfwxpw7aw6eBxeLwHh5mnE18PGpSyuvfaKZwofWoD3zsF1LruffVE",
  "key30": "2djpZq5A4hMrMUTtX1jFEK4727MUrD9vPTvm8krG3za7iquWdDSQXQJZEsWj9v4SFU3hj54LsYkgaAemp4ex5uZU",
  "key31": "2uXVUGaraZDtUEu5EWwY6HE4oU9ird9EA1B2QWvtWhG1cokkFg17jHPKpQVGA9rYF2989DCPnJstmRrEESEMrrPm",
  "key32": "3zWWhkEi8pGzPdXneBr6g3L5Fq1s7NS6QzTPCi8eBAYwmsFYHQjayHtdqRTJge2v9UQSKi7bjeSFA5vReZ6P44Bc",
  "key33": "4WQFojmUzAAxkUaKzCq5s3iu2sh5nm3hgy5cv1A4f9setwgBpmEVTUCp18Nq12ixmoQiDdXkKe3KWT5j1xsnHwFR",
  "key34": "q1e6QH2ZxMFC69vXoqXrz7vLtdjvb7LPriWLsZ6ceyFiSBLD1APxA3N3awPWkkvL2GZDVXGRRUoFrtmwth4SWCV",
  "key35": "5qSNMv5M73paKF6f2Pyn7rb2LLG3KYxWTNnG8qS9wVLDBWzWCdp16ZFhFZbz2iD55TwB1BqgHh57TAVoybh5TrnE",
  "key36": "41FcPJ1iX3zerfg676udK5vKLbs4vwH186tzpEijBSxP8swBN5cvQ752YCqwnEjX9qMc9LEwjzFCroiwB2WTBgRB",
  "key37": "4tXq6NvbGatLuaFmtAX8EMDGWSxpVoCzrupp7n5tokZeHjgjwWXUwLB5CkGS21FXuADK1JYbHFsMaZN6zaDSLvFL",
  "key38": "5yCthbF1d9nT61JiRw9hAyhRMmiSVEECC5MjVocDByXgwVDbUeA5568JxcxsSoyJ6hCtY61uLRbrdrKt9kJMnWyG",
  "key39": "3zynuECZw8TEDcCJvSbZsSAyyVdQjqt6mz3xqE216fBd8hhqsKM1mok9gCwM31FSFE2qPv4eL2e8fPhebxz1rTaC",
  "key40": "4N35DkLHvUVnn6FrbHuLgVq7bxCCnnX8y8SHisaPayGUJbTFXgM321y2CMpu1iJTkfCG64AYFnD5tEyR3nKWXEu",
  "key41": "3ooDa7H5k7dMJgNQf4NGXs7RGHU7V6WbfiR7DbtuJrYfjsvBGRQEGWKewLXbZoxWw2juQFS5jc2QDYJNUXDbbiNU",
  "key42": "4uCqo3scLPbZtwS43nmSJw2FoXD52swg1cTVb6Hgc4AeSdh5aiBHAmNEG1C5tB4oUu1n9mMpEXXhHR46a8AHVuJW",
  "key43": "2jBgqPQnxC1fGUYY2T9vMqqWiQRtybmpe7fjjoZUnQqkaq7FWWAx15fp8SzKAM3Ci3yzUn5xebf9HQp4pnckPBsG",
  "key44": "5dhMDXNuctzicfTEvjioxZhu9Q8HXYBVsBkCYj7XfpsyBYUHmZ9kubDXEPvHCK8qpFf3WWthyFMynhyuVcPt1e5J",
  "key45": "2rrt1FXF6y6LCeE3NRkiQiPZZpFdAjNymdhkRSCysnXAnRmZU83PrR3bBj3or5dy7kdoyhSEJwnF2jnGM9v5G5xq",
  "key46": "4q2SZ7eXKUt4hxEwapfkGScXTyb711jAvVvMKSqAkbASx7k2aAaMuJCdn7PUXkcgW3DYC7peEYMp3zVsbBBCaXf1",
  "key47": "Kcf8xW73VZe5uEqQQ916cXqLjBV4Bgc5n63mxxw93eMBK5S2xUtf2CmQ9F6j2mBzyoJCfrbjJJrVu1BqdSGyH7o",
  "key48": "5HNsybq1Jxz8qpQgnDDH4qyNU738JVaSDEAeCtoKAo8DLEvZJj1bsWfndazRPatvNA5cn7SGvCbTT8BoZc5UcdWY"
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
