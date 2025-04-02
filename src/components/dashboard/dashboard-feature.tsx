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
    "o5sXPpG8NniWcxSwSkZsQEiyo6qhqXp5ZaGPx24HNd838y8wddKivFQvWZbV8hn3sbFcGWGobdjT4A1vnMatJ3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4749koFKGzFrRn1wBCy7TF9LCHzmjvm3BLEwxcqsu11Gbak9N8MRoYkVMqZHmwdxAPWNLwsaixiSbqDM8SMuqo",
  "key1": "5derUQF9PJMkHsjxv6dRUMuwnc8cKBMgvAPu9S42PyFAyUMjh3thuYTjf8z7BwE8vydE4CLqZFHFLwnVyuYH3zm4",
  "key2": "KoT3HjiKQS7bzBBHPyXL7pdfoPx2WVGgG7HwYndTBmhcMzHpsTAEzoqFFZbTrux2WYZALcsKR4ijKeHN7GzjiGo",
  "key3": "phe65Xacz26erzEnpPLTdeZUgdxaNfFYoAGcbH6S8dqkk24aSPzLA9QiUypSA666W6mLimiYnzQ1ZhusSDJEujQ",
  "key4": "5W5PZ5fr2Uyo3QTRcRwpDJYtpTB3b3f2szuEsRBsoJFUmufvV8bZYysmeaDLPGHFw57hNr853xAXFusJibH9QsXm",
  "key5": "2gqZ9u17iDDihahReHX2ukyJF7JeRdnhdbhfWBvUyAb5eJGWAa8qjgTzs25RDtDD69HWsbj7i4pXR1dEofEvH5Ko",
  "key6": "2A93rf3WBoMDteifJ7GE3ZbsUr5Ya6ZJncpeRWy5yUcRSSDQBF51uUCUgXBMoSQ2sfmdg7TrDBQxHf5XYExvKWJG",
  "key7": "25yBpxbVd782HADw4GXtVjv73aZkCp1T1te2X1igVe4DDKEviLpn5paEeKBvdE7QPfxM6yd4m8T1AWqLkTopUrJQ",
  "key8": "38P2782VELQadfGL8ahKCcqad5auqPSRdTda2Mb5ZqCbYWYg9WmxDRYxFBwZPR8DJemLEiUbdbzoKtvEKNyaoShk",
  "key9": "34FXgRUvFvx2tTTAMTzhUSLCRYdQ1SC7RHPkHB9gye8ijWbVkNBUL9Z8hKLMaU88sEpS5HRJ7fzB5gDttT3cnUQK",
  "key10": "9neC9cDrPUZSTYrxf7nhMpYaZzbjThjQfu1KYsy8x1B2r1xsCfzmUjpHe2tvwixURjm8noaCHTSamVjdtL8ZHhM",
  "key11": "34v8MjAexeHT9E5bgDbt7ZngdtpTvkJLxpQQ6KB3UucuQLkiYT1xUrmpWeCKEUdH9b6yFvzAhyDQtfzLH8DFPtRL",
  "key12": "tf2Y19FjUyhR2WemfREnJA2MSQquPMcgUEqo9waLB7PTZHdeAUi4tPKnp3qCbn7LgsZtTHZtTnWbSkbFXAkjuPN",
  "key13": "3W8VCYSnmNW4fagG9hp3Fpb4BgbSURBRKy8ZEqjZ8btb6NHKLAuxEh8mHCnxR62DoewFGnnEaLYsjJDQWJFoBpzU",
  "key14": "28MbsGFfHt5fTqFTJTngdW6PYnbBaSqYHieVDiAH6VtPwNaKZb6dFSH81ysMUCWBEBg2KGYmJchA4Xsie72ZSYR4",
  "key15": "42Fsair6M3gQ4mfxgswEVUtrZu7DbLRpAjooeFPUmH9yvE4LMCP15FhvB4p5oicSS9kr6szJCqjkm2xAy73GchLW",
  "key16": "2pRNqJPnMdPbucSg64od7x3ZBQksTAUUN7MEsjn8pwi6re97g3RX52DtjtftAyXowqDwGUQ9iDBu21stTGDCxNgD",
  "key17": "3r61xkXgDt6WFPUeqkJghQ7bLN5Hq33AY6Vh6SkMdhtjG3uFKzhbPVzU8kyMLsgW59SrUxEDdr7JfRUi7szfL1BJ",
  "key18": "3qoDeSod6PyLeVgpnjfNUzZd3nFLNLfFuy9hTi6PWzypspRuiJcwLa1mNLf2zsuRMDHQVfNuM9txiiuhZLNHCRgr",
  "key19": "Z8E5ipaDdLgzC7K2WFWyVnzmdpDEX8wTohKSo3QvhZA4QqECPuyP9KfLjV7Sdit14hiYHqvb99FNo5ZeF6QQ6ry",
  "key20": "4GiC6PRT3Xi8yd4bLkVn4wPTLPBEGhZMdEqK6hJjTPghWwVkHSiZPkdPd2Ahne36o1U1gnA9egwGGS8Xkp8Vx55r",
  "key21": "3dz2qEm8J9wry23HEmAFxXUfPdFoMUU2yyBL7a13Bx2n7r2hyYukFwmP9tQcTtDYwj9gMseGsM1b4mJQ6BPYwzi2",
  "key22": "nXtAEEn7Qp36thGPJ2KS8ZtDc87T4iPR6sBuMKjP1bPWVuw1Ey2MBCrtRt51jUbvLT5X8xL9wxa8cFyXuwVMYnG",
  "key23": "4NpCXnyDwXDKJHQvem67iakhHaVfLyyCkKRSke9DAMPLMEkpvG64VLDbxJq68mZB7Dmqy3PQNTG3QcBJGHEV7TGY",
  "key24": "3tGSF5VnRbi6Ljf7sc7woJoXTKqcR7DootCXjQK9gkK5iRrUPVC36HG6qvPkMVyE3EBdaB1UYTUjhNAToXqK1dr7",
  "key25": "4LTuJ8JYdijnxAzJ2a2PKo9Vevxaxik1M3xePoF1HmCqnyLmZb3bKhr3Wgwc7G9Jduym7wvjG8eGD2sWFcWd1dT1",
  "key26": "4VRorXCBMkdfcPGXmvYMBtujiBDBDTTFym9Kfrii3XX33WZZToG7HWgpmnj6uPFDNnjRLDoGW222HN57zKPqnx78",
  "key27": "3MQf9ShPKP7KHcgLnS3vL1B8u7wgWGd6SX5QgUnHJidfT2x8JkHZ8nbDNpgfQHy138MGaJKYMgzMs5dBBqLse86c",
  "key28": "R8a2HwEWeywR38e3LjF9qBVBocYdk5nqokTWHzQ2e7GD2hm9gqLNsu8Z9dKDZUrndUXkZVizx4TJuZtyXWQzqwk",
  "key29": "oANutb8x4k2HmbrvwM9cByRZoArgL1Bmag2ELgJBYxmVkwPd2wKb9o7ZyVS87hbChc9TM4qbdnN5pY3PevQNDmX",
  "key30": "4zUXfsW3s2nFwntztjRcXLmfmkK55ru1DjU6iTxVC2wvbB74CpRnZsCqiPyuusnt3k6N7hyCWERpEA1HNCkwb6zW",
  "key31": "2LQEj3gAeTmDD7ETxDtD1feSNxyJpfY48hBS3cLCXNUkJV21eLJZo2ocHM8wQMLSWESa6zJTivp5XDfndrtcTxhb",
  "key32": "3eTaVjWfLNWhGYWQbBfTXEcggCz9BUPjJXLpj5MgUsgEGjMRfPFJdHNiwMYLh3NqB3aD49JSQxtSjsGZzZv9KQdj",
  "key33": "aZPLH8MPHXqUFCd5WxzNrwofpBZyZvTyyVyS8Hq3u1HYWrQvT1wS5iqMCKGBgmyNijfVGjhBLzzmJv1Rq64C5EF",
  "key34": "esLWsHPq7YnYhpaNDMyFzqRSBufvLKKWkch27cSMpsn2FCQvGDRoVA8j4nB4V51XmYF71uakH8Q873BZUiz7ZZq",
  "key35": "fHoDHeUpgZqLFJLxrP7Jjpz2aBYMPszHJUHo47UA5axcayJA5XzxW9CSAM3FtZMM6S4uKofdPF7gLpB9qvtykjh",
  "key36": "4Et9fK5PU9Vw1RFd3U3mMWm3AysDMNMDKragCVxb1znmEaGYFXR4yYG1iHwvhGKpKa8JwmcF3NUgbAGTJncZzghb",
  "key37": "5KCnpt9YVfF4tXEDBb33XxkWsovCWxhrgHAF9xXto94v4xKb8HFbwmmWZJdrU6v5Gm69RTHH1aSDciLYKNv3urvk"
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
