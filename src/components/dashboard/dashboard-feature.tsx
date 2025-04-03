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
    "4Y2Ws8bHQcU7eQT6SeFKyXYTBL8g36BfbrBnTESPs82ERwXYhfzkw6DgGQ2w8acpb2FNWton7do39idizBQa2oxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGXhCa4hn8roY38toro12QTwJq1TrpGm3souyfuwU1KpUbAWA537YbjjNW3DjTYqew33CPuMzp3SgM7yic1vUgT",
  "key1": "VEK7HJh2g7Zad2usqpcsoHVLFs99AvnqmXjzSWFxpbCAJ1MSpRKJ73FBtrqZMscJaAgsGLvNS2KuvNwUF9mquUK",
  "key2": "5QWAzu4qGWKcwV88cRdrNWfnbY1LZjxEx6mAA6paxzWuJj3s61LyXMGpifnjuJhkYdgJNNc3DtNnB45XHFeETiXU",
  "key3": "5uibnJc9dcW2Fh8GdfhWvM3KHz4nEwa4UCcemBj2xEBUfzHiLhnSBDQ3oPKgf2DGiK82r2SbAgrG4amqFWsAb8Bh",
  "key4": "64u8pFfbwYUNmNZ2KqRR6NbCQTLLT5KWEm4wZhTEXUTZCBVWPhrLxqYCihGDs1pVeGiZ84SsYEC9EmdAytMfjwFp",
  "key5": "25f2hcp7FAN12nDFC76M59jfFV17fSi2rxVhdwc44JkMhJVqAtLcsQzbGk5Tn1Gq3QyYrG2VkTm6tit3pJhrX6J2",
  "key6": "2u4HAAR7BtZ8J9fLbQfxm1BUNPvNG5DCvkEixEhBCzDgTmZ7NMpC3i8aHs1UuthFiLasX3LYyQcoXkXzV294qSvE",
  "key7": "53b3vbr2rdJUxxCgCwny6QPj3jLvHrGXuxFqthiuSC9ethEdoWZqLFN6MpSfTL9r4aiTheNLE1sGYKKQvH5tJ6SC",
  "key8": "4CYPy2iR1yd6urBsK1qiGLgTMGMbzQsxwNPpoJnt1L7kfBco3wmk8YV6U6tJmhRZiTngWKPzbnJboMTeeRR36LiQ",
  "key9": "4Dx55DwCK2oCFNckVBTXYswyaH8ydkUB2uMEDGFSXHvVeBUrrG1QEDovJ5M37HzNqJTcaKZpGZtmVYmRJY2hZCcX",
  "key10": "5pgkDQGrVCCVNht9JVuX9edrsboZYxji1xfHbSStmfwPQntv7EMVYvN1XxdjXdLdLg4t7JXvBzmTe2ApKgbPPjeJ",
  "key11": "2VsBGyfEEd1Gz7HMLzixQsPjGCqLVCzVrfgxFEEW7BYZ9apXmgr36R9shvYDAuSqVnQSeu8CRq8GDpajuQi9DBv9",
  "key12": "mi8z1h6eFCoyiTsSpEK7aDM7L6L9VkAjShvdvqzFc5YGyUWgnuanpctyhND7zTJqtNvGWmu27vBRHUwztaxqXtB",
  "key13": "2Ju84CExrKi7SG3dN9PqN1Q8iwzeGPerUqMZXdzjJvzQr1sxP3VXzNqy9MfdNHfTacUSQX671H16D2gkU4k6YqmB",
  "key14": "25gXLVVdoaxiwbQFjbJxnKNXC3EM6NamABzmx3jHDE1mx9ogPsjsnaM4L7p1SL9aFr5qdGjxFq8pKWHsjrnDKSwd",
  "key15": "1VMvFqaWiQyXyhdvf6jWmYk4MK1cDU7xoHdicVBH4SNNqzuBo6vPRtPbLKWvt876hnAWZgJ8UaCfF8NsTCKbEV9",
  "key16": "3MSeBEGm3EwUZpMLvqSoJHpKcWJn6wVyGNiW6TePf3vMaKjZ7hop56V3Bm9JtYJaaeiqPUHWTDWfZk16xPsUufzu",
  "key17": "4vaCRrNZRc3cfjyagp5VcspVL5vngUVt9qRn9Z7bcCsb5udhLvVNBe2ptHLbu8VTK68JhdLA2a6Hx25tCkHtwzqF",
  "key18": "vw7wovVbjTyQ3ScUmgDfYzugc3SV18h43Kk5Bd6U15h4UvU5a7umr5K9tRTmYiiAAtG36UFfkA69KB1P1Mym4gp",
  "key19": "2fcmQc64qDdmEpXJevTeSXVbga4Ro96W5jetmxCgS5ZnyDFemCDegEQD4uwgBHFmPRThotK8wi2YfmU7gT4kjEwb",
  "key20": "5jFfgaNKoYCN5RSsjeA5kKasipFsg25xacP4GT1sjAvvYpuctGg2gfQPEjy5Tjkx2Kwi9nHrYExwHHb77GvQszCq",
  "key21": "LafFYVQYrWRQK99QByfmE458zFNiveS4cBn4VKTWVVP9DtksjBsmYWz7mjhyTwgEadHLc9tDStdsfjLGE643kzL",
  "key22": "Vic3TgZdHDeZseZuQNrTb2DVU5ACuBgcHePbKUCsAxCJg6ySqJ7YxEnkVq5M3ne7pC7KhaVTwa4deB7YddpRfjr",
  "key23": "wx7Kka8x8sJgBRgzQmKXsrxP4CiAuKfiLkMS4LhMrUfUnaVum7gcAxcJra5uS34VaQjyNtfFuWxFsSpfiNcbs8z",
  "key24": "5ddYankeYmCNN22vhgTxRGndkMGgPb74pnKcShoA4ArtQgEjc8xUDvM5tpvRpjxio1mBdwxcP94X7v3U2zeCtVbF"
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
