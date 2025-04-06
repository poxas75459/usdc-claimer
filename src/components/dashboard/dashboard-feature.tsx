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
    "4Ph3KQQebohpD5frBRdG4BYso7k5LdMxWmjdRXZLMeCxoKErg4PcGYUt7Jka7Jqa9tzzCGbjJsfkNoRmquwg1JB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3EQK4JtkE5JMBYV4WqHNwBDazsdKvArgAnB7frGfVTgXdaRNgKubUpZm1eFpAsDmwpeosuFWiZFfMDV7SDQtxN",
  "key1": "GtFvZVnoqEaWndYqRgabSFHYY6Fc8Mz4Tiv2AU6SjdQKcsmYdLHAdNEmU4nHcUEbtB7xEj2nTbBXCHSysN4WmxX",
  "key2": "21WggdkP6NdQjxkFE7R9DP9bt2thdeBVSw5wowdiSd95ujhBrTfibDpzgsWwE5kLMLCMYYBbSeCG86voSGN18nmy",
  "key3": "5wou5gRbh9huxxiWjGmvgjjjrxEMNskLDck2ymn39fBWKP8rjNYSgpHzZmBCEKErjfmD5xB9yo5koxqJbqRPkLuE",
  "key4": "3FzcBxZ8PUKajwwXXLCscUvW5Pw563qXEoANzCfwtmDFtcbqnxGbNdWq6RgUCELpBTNLZV3bhhE5TKa3uq8MrTZn",
  "key5": "2Wn36TKtUdFKtjva212sEwZwogQ6C4c5EUSh6d9APhexXBF5CtKpZG3S3f4TeM2379RoKUc9H4LA3zTtmvP5G3Wh",
  "key6": "5uAT2kvadtKTrPBfic56ghAG6Ap8CDW3qVwrVqdArWs8QTR93MkLZ75kdTMXjJipZeBAz3W1MMB6ZTAniyi7f5JM",
  "key7": "kwChuJmhGtdEs9PfpWwxhwbryoUUyoKA12tg2ELECev2wSbUaLdii5bB9KdVRzqBAkfH9oiNVXUneeMrXbqeitw",
  "key8": "37QHNDMQ7T1axvTEmuQ9hVJjAFJ2TGrXoucSi7LXUAg7EH9mWttPiB3CCQEPdf8mYx6f1Xr7fuPqNNvXoHUAGGpV",
  "key9": "2gWQbdkUjkrTAjd9Ceo9rk7G968gVxF9maoZHCu66Pg392bm52AxzZa3pfywxmDhGk3PdFs5PxGBBY2CRtP6Wgrn",
  "key10": "5cpQbSkoiZXPQBB34F9t3tQg8uqMvMcci9cP4NHv5jNoDdus6kYgLxS5tMrngdBNfvb2EkR1aJcYnnRu27wXF6ru",
  "key11": "58z6qwUhiBaiFYr9RuC84wjQCpRYc3vxBfALjmZAKYmBUznGYPjZGCgsJZJEerq3795bujxqbqFfRKdgMod6Rao5",
  "key12": "5PJFsg9kPoCDXhrz9cP155y1K8e1TB97csUV5D8WjzahXrm1CuEA22f7Uc6PmgUDq3sUGQVzLC6B2bdh9y2MWWML",
  "key13": "5WcepB9VUM9PHd5hTqCgB23119gPXW3g9MjrR4SEVtCVCXqXHrXhtqFiUUyXQDB23bpvh7oRooyRpaMiC69kdYyw",
  "key14": "2cNDnqbHrRY9hFrVAKUF99sc36DxcHS2QpHJ8fdxvP7gs9XQjmxAUMLZuGV3ptkFB1QRvubWNvvkgeMMZjNuVcEC",
  "key15": "LmfBq28TUbu85QntoZLZPDBikKNKtCXd7uNS7xeofn3G9UfEW6Y3XpHrY6fx9NAgy811TqsBqU4EFYuKSUz9vBb",
  "key16": "55bXpqDsUHBZQD89HmGKgy2nvnvtiiZWxVCGLJkpTm48QZr91gwscfLvCcxPYyVmR339Njf31zWKQExnQcypUuuv",
  "key17": "58Y1YknyjHn4jpajZVWkVTh8dQFnD1VMKAJVeAGHPg72pS5cYiHuedUyLm242W8FZFUaje5tV2wGzSLZtMUHiD2r",
  "key18": "5iv9p8Mfp972TuQaahcMavu93hf79FCbxY2E6BUTnX2uRUUJuGUqSGFqWoEK5igveYw6j65xjXrrdMr5CgM7132L",
  "key19": "2sQmyVmr1wWiseLgjStsLSUDcJnUqKS75qvZn1sAfXqLUNLcAP8D3j5H7b1dbY785dqJzucx9dww74SmZzQiZJxb",
  "key20": "hKqDLJCAiBsoSTh8LgnBN8gCk1XhqbytDzsizQ1ZuuY5325tDta1QMN5GxfUdXzUVEGxjZ5DUY9Yor8gMDtdLBz",
  "key21": "48SiLxZeV1Q7v6Lgj2VZ64qhbU5q6K5YcF4f7ae62qLeD8RcjnDQy2CnEyoMrRp6xCDc7BvjmiT7Lnga1VSat5LU",
  "key22": "2EepHefVFC1s8fKz82arM42aTDKbBMsJpzNWb9utXRuz35Z3MLsp5TtQaHmJ1mAiCUbxHwvasZN9f44m3MYtu1ka",
  "key23": "WUDKVoD53waZiUjmXs3R2R8PkCQ3nUKxnDCXtz2fuVrFCGDRDr2jYvoAzqZpc17dPWuGFB1c5ADcuxLkWWxbYrV",
  "key24": "3DCaor11993YcmpYzWwtJcSVSyzxUZd1hvAgA5E7Y7Cb6bu31X8zqnDHcicz9Q2H4SmgyZNr3Lb6jzcfKFdtyvkt",
  "key25": "5VYsqebaWirYsTHxvZ1y721pdb3N5ALHk4BwVAnnMnYtvkwe3S7Ch9Zu6r3hxqk1aSrU7bZQPqUv2agstymyR5fB",
  "key26": "4bQq9jqMmyGiniHfmmQsgYgyAKQYUtJiz2TRain931HBzjKoeGBmZaDsV3otRgRvnNmyf8HkR6SYpAgvg6QCJ4C2",
  "key27": "2fmMqikBkhTRmvE8Mc8XLwCtMdSRu6AQ8qJNJ13ztVEiQnHkiHFegjwEWgAbSjKWUjC4v5dr65BXM7apCnvbzmJJ",
  "key28": "2cN8W2KeXTQJw7L16cvwy8uqkJzAoUd2hg5mANretFLZU32rdNdYqiwaJw8kBab4kVRgU7dHPdr3eBgxqP4WCoFk",
  "key29": "46hxDnSFV6Y5dgfhhXDT1uJeK4RntXMLrB6F5vxgyXanAXbkyUk9NCoYEQi5dAWrdaH74dktX9nFCFcD9JzUnSQk"
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
