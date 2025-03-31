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
    "3ihQdoUPuwuZD9oeeNCEBcr2A6jsnXB2HWQPY5Xe1FFq5F5TaiiyjhTWF43GUeLDcDxCuhhzs2v9W7ocQGZqzrFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGVtkn8doo5euXSyzCX27oGAxw5rsXoSHcHopCp6rHvhw8HkGdYmNM2FtbxY724GeQPPaHzPvqhT3vshqrhbMoL",
  "key1": "5usvgD1N9QBZNaa9QWWu3pYVwLJ2REBg9dwMiBado49cFULNx8rX8P7UazbwMhX7SvcySURqnsRq2KPYqBKQixru",
  "key2": "3YH69YEExVEQ9VzpBXjbPuiwVUsBtetKnsETPR9Ep51sgHqvDgPTa8PyViDZw6T8tK8dswE7iaXwzjGa1PgW9bEF",
  "key3": "nX9cDVfuwejk92hVYdBbnzhAFixqQa64B4RiCRTdxWkLuX76dwbk2w1A8q1CTUMARtTRgMDbPTVMdpd2KY7Va7y",
  "key4": "4DeW2k31gTYHGkE3MkdPFfodZCqS5QJmrdZVCLAL6MtFDnA2rf3Sz94VpmZ57NAVjGnbRx7ExCcHmh2ogm5tFHg1",
  "key5": "4p4x9zjGkvr22BxfvX3So37khqDnEzYYFx9S6iqnc5TW5kjdP7zHp2DYtShhw36JnQs4bzbpzkZj9kvuchwYEv48",
  "key6": "5s6qAYPFQ8AcWPTseVqAxfKS9KHjev9dBpERMQ91eTLUgYFwwRNqkdTpvNW8sjti6oyCZCiEkzegDZ38d4FBHyr",
  "key7": "3hVEas9cGVdvsqsRcjsjuxuF4QA3j18FdpZo2NEn9kZzVjRoAj3ScYGwf6tcTjUgpmo57UqkrVg2tFJ9FAkyvgUy",
  "key8": "2oR1kP63GaRvrL4VeMnGy643NHA8MoLLS2xtBnTGLcP5T5qBBxxLP6uB2GQbComBB1Vabmkrpehpkp9P6osMZak7",
  "key9": "24AYq2P77Rqy96DKV9nCnmHeUKpSMmEDvkvK7hRUU8oBdDrpLjejoUWH44C5udByDKJyubdhGGtqerH6FNXprnAz",
  "key10": "2rd9TP2BsUtYEbKja9jkKFyNVWwx1ThBmo2yabqvHwP5jUM8VnKiV8AD98wHnuuf5zbaQnbaYwBxB11jYxgU1ciM",
  "key11": "4ABUpFq6gjRda2xfFVp6T2ipXqw4S59JWj7WSchgRmxQmxPAJp1bSQra4FXPSP3jy7C1xm9S3m1m56VWY2YvZT6p",
  "key12": "3gHvfsTfiPDxGbWp8JXGELip84HgeHxV6hH63moFEPavdikn4c9JkHmvh5k1ntWg1JVdgwLVALNqZbzdATrUdhCV",
  "key13": "4d9RepbnejNxSisyYvJYKm7JHSf2dhneQPN6RMA3GwFv8SnJqxAkohEfkCYVnoSYUGmMuk8WWCNFUXhxjxrZoF1Y",
  "key14": "3rqNFaf2quFUEc9zzHyRXcFexWADiek9BgfsDXFrvmuAaCjVnu6pCc1juNQ9u9t7sW8utu8tJb4mhc5BHRQ56eq9",
  "key15": "Hknmees3gwzuQFeLaGGDzp971G2gyjH9Zq68k7WwUor2m5aFEyipcgwR3tN2gCKYaeU2t2YwXBBCXLd1771TzwZ",
  "key16": "2Po5DW3zXv8W2FeEsomKca2LLtyYqFH6ne25AwXfqgQ8FWPKZPbYc6YNEhQxMydgycYXKn3x3wi3oHs5J6dudAaR",
  "key17": "5wgqGCWseSW4qvnfJ8gkC94cXgNKQmpnEMf4RxFyTUXy5NuhkPsFXcrXpxJmHHp1Q6gj7T4wrNH7QZoyTbTthQZJ",
  "key18": "5R5FUzvSX8j9jJGyDaHpYDdPVUry8JDYXxNZcGqAfKKYM4ci6zVpJF6BXRjeLZTCak7yWchzEy5gugsXjE3zgaQS",
  "key19": "35vQSLBbT1QeT7bYJBXayv9d1uwqd2JrkLKesRFqN2a1NHHdppTnsccXXev84bxwo5v9V27F83r4zbD9karL9M6U",
  "key20": "ynpGVqw9rvDXxAy6DiB7JCpodkYamvgwEDdbxaMge8qKiHiVCFp2D2RDWzJjq1XWaS6ZLgvhG2BtSsdayxr6v88",
  "key21": "wbE75i5Q8jiKv48fVkuPRa5XfLYsbCWAk4Q1FKLouvkr3VEUbfPezuEoRkvrA6nGfyg6BJ1AL3n7maK6vDt8LDM",
  "key22": "2SjqRuDXhEHPbbdktoV3uyEwpq8CsRKKPoedtxCu5WVd92sBp3tmzBuqAbQS7kvaQ5jkx5Q8627RiTcSNGuCSZYd",
  "key23": "MMf3UYXo6XGFM8ANSs4UtTR6T59r8jhWjgmg4ASU9wfwH8kk3T5jpMxV8yRnjBiyjLjhRrtWoDtm3nbp3kksw7a",
  "key24": "4djUDGWcXksBkVMRT6K7sJPW8cX66vt1G49NfjXLAWegdn91mtccETxAcpfaFfDFKxCcGJPosH49bF6QbhoHdNd6",
  "key25": "5Fv5P9b5ZkrF2pMphLEELRsiNtk2FuAr5RBCUuUHRRn2YCqvchfA2nrfo5ky93ta4n1RRtzgNi6qNhTaKXEmwxWj",
  "key26": "4UTy2kiSE6NHksiMZwb8y5z4x6cjppVeTmCZ3hoGebZjNN96d7d17psD4DvykJ2SkuapZrdTe1QtATHbAFfQPZAs",
  "key27": "3poss2RQg2eGNaWZmf4fVBfBf1DyGkCszNtcc2DhotukqWrqvHtSpRkV8897EFZbWLtmqBAJuELRPY1A3jr4EzR2",
  "key28": "2Tau2vod1EffCRsWsVLED1kpevL2jQNhVPrdxPu6ZWYy8zpjMg4Kfsvx1AVheQmGr2jW191Bwpgzfxv77iwRMBjC",
  "key29": "2WuhBcQDkWiXRwjSKTf1fv1AN9ZEcZsPPpFkdMrxPDwpp3oCH6UXgPt3ja4iuxaA1PyVfb8VH563VVGE3boMBgHC",
  "key30": "3FxRoGaF8m12EnJ7Ea5Dq3x8VNQdeuT8aNGMvwRRuEXY6XiVM2f6aMrixfTnJAXDTSHGCiRKXyKkeCTZys4T3kcY",
  "key31": "3WtBg9fcMqEMsxqFNFMdQskuxJcnxukidBvvbvEZfP6uD8PjSSCrm6M5nSDzhq3Ekqmvvo2u8K3eCssxhmn67qu3",
  "key32": "4fGAiT5LJFycaWYenkoYBi31fYx32TPCdzWMUpHwCwrfS3AE33mzryZAhzr1tAyvGsxrgM6KiQSHnJBTkBBRkhBM",
  "key33": "ijhyjxUMpee1WBKEdFCNydAiPBzUaV2U8ygDiy8Xo3eyHdb8LPqV5DHKiq764yNjHtWaumALYRY1r4XnwSR8ejP",
  "key34": "5bvi46Hr2g4NCpZ4b7EgnasY6RhMyyfmYaZWeBJoo5DvFz4ToonRXMusWKyjWVmhPuoWCCMqfyC6j5dKYwG9QL7Z",
  "key35": "54u8ho9baK9tgzXRZrosiSspdQzNi7X48bpZprz4yfS8J8ZgC2WXV8ofQed95m4f6G56HaYvXQPgqXM1Q2cRL6At",
  "key36": "5eDsT7zuZH8m7evUJ1nopFCBW9Vo3WwyFi432G3XRxuNGbD4UHLSk1qKigCsddL5xFwhGZGM545V6y7eE8xqkndQ"
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
