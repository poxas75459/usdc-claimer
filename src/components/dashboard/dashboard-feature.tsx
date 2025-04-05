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
    "3kBNYQ7Mn4XfcoMXNZ5ynXgzgUFQGc5rFnHaRsoGuyCG4dfJBJstksT7CyejWSDjGqSvJY7XGULhSuRX6mbXQPh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6rzb1NCFchy1KFasfEB173ZyZR98k8ayrUE3HghEx1NoSgkgSqK97CL58PfBHR1pSUc9gmRwjj61PaXrsuvDy6",
  "key1": "5rDv7vyquWDCNGVWkpc5NYKr9MfxPY9dvFoispghixpmGrxfBvDnVH2fpyaPAW3jaXZKyD4GQx83iW1Yg6gTjLkV",
  "key2": "5PBRkkvvqDTXcCCMzAo5384iUVRY2sxMJkyTk1GeWSFaX1eXeWSPJAX6L55dgzBmTaXFVz9LYG9eB6yTjTeJD443",
  "key3": "2jaDd4Y82K5gtxFro9ahvVt9bcgL9k995q4VZKVrdhcqpkHWnh3sbJoRXnpTYerVr19RKTJcUEsjf3D1R5HSkNjX",
  "key4": "52PTRQoHesLRAG9Jo4AZVVKuZKXnYCWGbXoabJ7JPax8eFT3T7vm1vUW8tR2uPuCN7K1seXGHDuiX8zuSfdLhbvc",
  "key5": "qmKRrDvuvDa4iXY7kvrjF2RPdtYjKKJeYyVjAWAcfkfutLYB3hcE284ZwsYsdHFNHufprV1dTdbxpNJGr1Mkwqi",
  "key6": "5VeRwWwgcyQUb7PrvDTko1EW9j4aaDd441FgBujnQZdDe7QCtGHi8cjcNtPVTNcAqxJ3cAacs6cbQHXpmWqeAPJU",
  "key7": "4bMuh4aAthuVbx5iSB248ZzuotVFr4sdAqvw5h1NLkYJqP6eB37MqKfsf5yesieXgjxuYk9qrZL23YcbTBnX4wv",
  "key8": "hPJj9yeURcdxN4osysr3niTCMvzcBieCDnqdcDvkEUpicFmQW7A8tBn28pmaFeEgRAEUU2WYe4uTp8wdMziSa7J",
  "key9": "2FPt1c6NDjEtLuYSdkfoP5Vh1ZuLnKpQP9qaBaATVq8WYTiNsMCNz1P8PcpEesy8nEM8dh97XoeQteJeJe4Fc9y5",
  "key10": "57ePjjRXr6q3AwLZaypy3z73bDFmEeaMo4j5GdYPfrRQFF99SCgg6EqsxjKs8Ka6tp1umTrxZGpuhKKKTDa31etz",
  "key11": "QXk24kccXNBZg2CJqPmCzt7eyok7dA5kndCv4d6GAaA8poCYmG67jmL7pJYVDVEbNaRPio92kKwPvXiS7fn5je6",
  "key12": "wNXFvaKHL42dvorJHFC7tFctoFHH3XAAQtMSrujh5Vd3vZn19FkGBWydvFz6zdcT7oaUTmpXNqZthdQGK8ZoXFk",
  "key13": "4Z6jvsiNoBKBopAU2kwQAjTovvMfguV367UxQXLnMkmw4oTnEZHd3aPuP7oSeJTRhavAhA4jXX9znXc1pKqaLqDm",
  "key14": "VMeoux1AjYVd4RJyTiyPtopL3JbqEThrWQMvdPMtpYxwfKLLqoWBWAudvL4TvJJ4jeLafQqdJDdBzVJBw1fLA2k",
  "key15": "2xGTbxgBSisbP9FMTzynz4tp8w5h8bjJWUis5jyrQCmsfbTBxTcaVmdmuCmhQyUegSJovsrUNdcvSNrNneLdQhSF",
  "key16": "5DMBC3wuJtwRiffV3nZkBakexZKQSrv9fCGoXgoYd9vVynG1gkdXaeSiwyDEmU35LshBRWJgEqokyDMtKrkxYvDt",
  "key17": "3na3XEBekJU1ti1zrLPuDA24UA2mLwGK16u91HDKY417QRz6oJmnVjqw8zz8jgs2675jScmpGMKFinbruLcdmXkf",
  "key18": "2mQWGc49Q4QXfNxRaj4kkvUwjxPS2B5NGo8bh58VmXmkPzVfRpBsLAVsBqeHc6h8jiWuvNGkvbm9SJawijsTkr9V",
  "key19": "2utwWV6b7hXroP6qyBE2xvQ4BK4shmoq2WdB18D5x2oPUU535ymAkWGPfe4sim1pp9XcUGnfcSLPPHZhRJRM9gFq",
  "key20": "3fqor2sC3AAKxfrAcg1HQFjQJYwwgCoLNpexScU7zYTgw6huB9ySp7xqPDghRCypnX2it3UBFZaa2JCYLj94VdRA",
  "key21": "9By2wgNEWcjsERMiJyuBKJBv8YdCVdwuAnAkFVkhxiWcTQk95iMdjKUJTrCZT8UJsBegTYvttRrpWTMUPc2uzGS",
  "key22": "4PPU4tHCyBMUeTpaNL2WmAZDfBcxJsy3q55EU93AKsRJfwxKFKuqhvq2krEgEr5jucBKQtLmNanpBLHSf7KcLMSs",
  "key23": "4EdQdSRv8n8JUBeDoK2AQYm3aMoPYSCCKrNNQx3NQmrBHgATm9WUnchcqS4mnHfUQnEguXzZQV9QPt9Ewih3PTyD",
  "key24": "2JLsnWawUM7mR5pidb6Y8kaRxSziuZ8x7RUx4goeiaJojFF98NznExrNdmCNFa4m2n4zRA6hrvromFGfRRrmVT86",
  "key25": "4vQrKSJ9XnjN44cn1cM8HFcxgy6N1jXvHPZ2RJzDEvRu5nTktkpKAygoyUQgewW2WnqzLjgjtfY7Ew1yFYHqjMeU"
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
