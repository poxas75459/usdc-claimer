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
    "3j9skYxWbCPPFtKu6ry3peyDDvDXAD4RPGc3G6JbiCZr54rXoEyAMwgkp97JCdTiqVAArmqm5T18xw7Nr2paxyHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gATN3teDwsmyyTUjbhWG1vJyLPfhW76KAABRv2uVBUbyWieAuetXnhWijmen3YRBfQe1hLAtGXNXE3XnT3wv15X",
  "key1": "4vkCXKEnTQoH3X6951r5Dp639iuWcBchBmDS9c8EJyidtg5XeTYtkTCjptgsYV4KHxwAg21oKSrX4suKRXGyJsg8",
  "key2": "2NqC6fikrAt3CSAEDRNmaXTBr4x4a9dSGM6s3mxNDBW9wmdCGHX2KbvkSXDTZH2ntZZAC9usjWWLnaLPZj3tKFf5",
  "key3": "dFxxDL8iyVQXQAWZenGyCSpREWogZqJiNpjU6SgEPoirHKZzGrrJiSAvdeoGeAE3qvhcLCf5LfgP9apkbtokuJ2",
  "key4": "1e6HjJCYK8Tb66CT5nvtcg8aaMgFJLncDQBVZfG3bFsSZrVozUFBtMTP4Z2MqGgLBH23edNfKztKbEWqg78Vtso",
  "key5": "4j9nyvjPC2qeRC4E6qcM6edWoSqTZw3tvu86vbDVSUye9njHZ8X181ocfXEGMapxai8EWYktoifECYdgLBj9cztx",
  "key6": "3EWpg8gMN3bmrJedT3uGh8BBeaoxAF268tp3kNB6VgL8z2ayjDJeSRC2DwSBVWbFTjYdrjXe9YtkkoEsYGzPN9Nw",
  "key7": "hb5dDJsQcaboKcNLrhXd76SiyXMAJxxLfbubruTVU4QhxnG4dWdbRZcZbWvJ6sDXvhFy3gQdKGx83J2G49HCSFK",
  "key8": "iAjaqhTdtTguQiEVcCwGVvogQKXcjAJLyZEAAJMRm2M8UKqPCYp2QYYiHFYnFcDtR2bwdAZv5zjMnqUE7Y1wTei",
  "key9": "52eft9q1qKT1o9gRhXo6js8zYq7pnEphUNbMgnsVwEN87Df3364HhrPw9xdUUNxix8gCmEdCBPqzvTnevYHFMARK",
  "key10": "5Kado7v5uzSuELBnAJDxBTXEPuoGjGZQ9H8CXhnaXqn2daPFpj7YZjmqqxRaBRW6GWqg7fmqq1gNYHALns57uUSD",
  "key11": "5AcKrVdRkK7hcAY945hca8U3C4ounL5cpafJw54cnBGfgvfLW6i3PU6z9rHWofdM1VxTMDcas7fJQ9iMhLNC4EgQ",
  "key12": "2ReD8bXv3nHkBZbwHTZDDxr2X1LQJNY2iJKyf8W4djeEmMP3NJWYxqacSriy4bcHZckUjECHiJoUaY9SHeh1DV3V",
  "key13": "4Ls8z1ph9bMDryC861VqAg94ongkAa3STEZdQtWiqSGka25opMo7NutHY62oj7ew95sesHXMLecCt8TyQy1o9ZCg",
  "key14": "5zTkMM3d8zcZ2vpYtegaahBo6ieobCKjbkCYcMRbR19GW4iHFd29Z8YxX5wTujujVjMJNenXPW5ReYC1NFmE7zP8",
  "key15": "3o5w2gHEwKjA8bG8eHhdirzttdhHYFuSe81A2pdvD3FReswAsDWpFKRsRP9Rd1dfMHef5oCMFz5d1eBxjfb8x444",
  "key16": "5xUjgxGuVETLn9Z56MahdzdDZAeEJxznpCcnB15ugMfCuhX4VNmwjPCuzDyapAmqsXc4AMQiALSHQuvUqYq7aB4x",
  "key17": "5PJVF3uPqXQU17Gp4vuTz3xrnNeKg7fxFaUN5bwZCPUhJkyLZ5bwcK7Ueyn8akDEVU8Vf5gGRmYaYNbtcjDGPZbL",
  "key18": "4L7ePEPTav7n6bY1kbUpJFssa841VGM9mFaVyLDkQ97MczLPcV4BdS9pEuJupq2UJhBuy28VjXdEkTXuhhzTgMub",
  "key19": "NsRzSyKoSRzuiG7KXRtxzCg5tr6c4CcgLiJ9tqZ4zZHQv7qxNmpmnoccDpFxaC6JJ9XNvdydgLE6ojV2d8r69aM",
  "key20": "44gi9hZBHNaAA6VVjjw3kh8kbaKzVwkVRmGD8iybNE7ZgrQ51LDoWcE7jvQE2gXLjWeYgYbYKSCECggyNwk2sfmb",
  "key21": "4poxc4hmADzzJskriK1zrtU96F63GCTP1FhBTRuUMReGowY1YVG3wxo6LDYdqRarap2vkRnVo7JNfAHjkyUowXwi",
  "key22": "2p83ZagMQWTwAqDac4a2dbuC94wfJVtKDwyGcuQrKJX1j2PXYFje57UNnnjRkdAMFSYH4BfbJGS72jyJpjpf8314",
  "key23": "4nqMw9iS7zFbr6edmW99DddedHiq63GWXewXyM8kPSW4cHkebHyWMGJnuUe3oDvThDXe6JfdzMFhYo6HtNgVyPGu",
  "key24": "2vMGYptJRbo6J9uHKdaxREpW829MPCjeaXrX5VsiqCkAvzDKLyrQqrJtH2fAmBDGeAWd9uinHLXUHXS4EQgMyK7v",
  "key25": "eg8znHv9y3DJTuWB2H567SJNapCuxLb96D7UuhizDYYXoUkWyjJMJHmeU43fBsXc3TbQ5dgyYTpBp5cC9u7KhNw",
  "key26": "4hNievyGvkihnhnLiosbyN1x5dYsbtzTkDgCJNkroYmcbLqE3sdDyYC5VoE24zsmmoLzzUxb51vcJAVbJXFXkxpH",
  "key27": "26KQGHVyoVRjMaxvpcT91kiNsbzq8hRxBbujz91L8L2nrXZPmhDbiMmSwXXUdrVd9m9X1yCR9vy78Vv4YFEd4MJD"
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
