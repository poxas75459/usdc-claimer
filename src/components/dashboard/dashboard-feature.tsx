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
    "4WN4CEPv1fWQREJiYaDpzf4K9tqm26AfrFyHALACU6v4GRm64HfFm6YTqF7UX12eatoKvh8ggwN1us7GNzc4faYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSH3uLVpDPBgVWfbBV9KUTNswreAu7tut3eBNgZ4DDCUpppS5oxFkpug3XAM528LpFP1jLVLHhR8oSXt3ignmse",
  "key1": "4631A7iAEKYP8mJZvn6LzkxmAeKCqpLqVyHg4gFGJ91j21GXqbBbDZ1RZuL7ci3hUfE3Lce92iWZ4wxmDRcDJSaK",
  "key2": "5gNYftjbe5xksGbKBHSt2J1cD6vpUtx5ehYCkUsP9XyDxBF677MMmjHGBA2cbrMeH4Z7exUHUt379wWhPmXUHiQZ",
  "key3": "5dc8pTwd9vhwwjTdy9HrM2my69qujNi36iWBDECCZUJeVc2zpoM5rQaYpbLv3c64WerGQM6idLqwSfWRhQaHCXKj",
  "key4": "5EEKwPBGyutMbZdmkLP1pHK23uR1WV1k9NMZoUejABkz7sjL64XGdoRv3T3N4QVwobc4hxUtVRFGnj78tgKeJxKS",
  "key5": "59VqctBJtQi1AKqAtMkomLo4TwXF6XeFvTy7KfEkbXG1Nd2GLvsxknz8eccsu6fTV2udRFGV52VP5fat9SwPcGfx",
  "key6": "519VYz8jSUjmuWkL9voFJbskjEopJNxda5v4AEjxoaeGYnzGo6iWJzF6fztBkMoVK1i3xRpF1EgquEBS2LeNekwf",
  "key7": "4R5y4iXd1xQHxbfeJrrQU8QFw4BCwir7ETAWux1VyfHiVP6N45VBCoQyupkq57mZN8eADsz7UTYTy8ZiSAYxf75k",
  "key8": "5m8p4gRFXMeauSzvACC78RRRfq9FT82KBTzGEwtVXCESB9AoSLcgip5kKjZ4kmi6gKJMdUYSNauuN9dX46p8HyYM",
  "key9": "5bvuiqDT9aPmGkDfJDKtCHMsJ3D18pDXQCpb2iCT1twYHx6ZJ5JXxrMfrd28sXCqjNkzPqKPrQGsvdnYZwvU2oy4",
  "key10": "5oDS9VXvJLXTxgPHBB2zsLKUKAWQjFi7RKeFxWZQwEkhkE9ADmEd2dCP1zb8MvytX2gMpx2MmxH4Eai8bWAQabji",
  "key11": "2gE3Asmt1DxhESCYb3Gwip8VGZcRbR1LX2b6vzcLQjU1xGFfnJnhJXeGpAdqFg5j5RYdEptyzAHMx3m7kGLuEg8o",
  "key12": "mvWz8qHqfg565X9xRe73gxVrHspCZoKCHZnjWdosaf7cUHx1Zy5ioFLrsEXk4y6VvxWaVvTwZbxL7VTDPHskJZX",
  "key13": "3MzgHeMup1gHtRm1UpiGGVmieDCm6c5r1jHCrTqnBHYPuVDb7LiGbzRqosj1s4iHnCWjPAp9uG5bZERvFqyYiEUc",
  "key14": "2RsFo2V66wb1Dvh6j9cE5NeLgVu8rzm89DojGeq3NDip16ZbJzd7gf8wUAKb2p51gtj5Xuy6bzFWmgm3VbUtZj23",
  "key15": "VHjY3v5jVf5ThgBxUMbSunpK1rSm4cQkxPAybJVwaDvugcrMcYGpEidXuk8CVWuhJxZTZW9Di2zNAkMSTjAFmNP",
  "key16": "xNbax49czHAEADYHQoFgwPYQVW7Mh4w41Wzd7CW48RV6F4aaqUvUm2P4DRMbVFvboztV3apCaHW8s2GwxFYd5jK",
  "key17": "26USnUwVB8R3zZFnYr3CFtSyzAfNtGswpMbPSpFvMVZvn6NBx1TPSn1kb268dRHasuMACE4RQh6koGqedxgPbZ3B",
  "key18": "5sv1rRCJFL8ueEYwwktgDrCMY49ELKHksRLRmgRVhaxws41XnpzZoHhvLRowSoe7XTJSUd4eEMnjfkRF5BAyKyxi",
  "key19": "2b3e9oT8FpB7hzdDwvVjX6YiDpKiiVgc6Mw4QCFw3Wxggwk8MzFFRvCxoskF6iuDhYZ7jZodv8LXpeXHGLoKutMX",
  "key20": "Vw4HgogFjGkp58WrXy44egjrFMn71HKWyQGTkQQjtLspS7Lr8TbRBdFFqGzGt2bbNV9sQCgozkzWkyoVyFBmMkY",
  "key21": "3hyFu3wBm3U2YcbtndHYPGnMBroSDyz9oXQjVNh4m2doA5iwTnMaskCUt8BPSC816oHwy2rNgLzVk9J6hDTHd15P",
  "key22": "3L4WWfYmMxKp3vUdTu3YMr9ww3rCQjgD6Ep3RA2oarzqU6SK8gW7DtxxE8cGnTmzqAp8gibxSNjXwAthQAeMYrfm",
  "key23": "5MGfiLLAkGqYajc9iAaML8HW1CbX1b9FhB9CWa1se7VvKATQEXXXFP83ttVGk1Y2XbgHtEv5it5eGbnB6MBb3Qk9",
  "key24": "52CV1Q1JHRBTxF5YPXQBkHPvZs9F196D8k7x2XnbLWM6E3saCmSQawTc5NzgQdSxLu4Eukt1rppgMYU8Fmjn2ayV",
  "key25": "2uZtBVGkacQ7rjmwHoCLsiSYpvqf4rGxP4T4mLW4DrFb84WyjPFjkTkNGm58Q56mtnMGHCm5LTKhyLRiu3rQKdRC",
  "key26": "4Zkh4B6iQ6E3HmS8EcXPeghe6Mo5NAGpp2etyoUWKgVXzPod1tr3UySH5jwU66EpF8KA46emVyhiwVEHReUDBvgK",
  "key27": "2BSf4rkvVMX7iELQf8fBRa6up4Ewp7Z62ttP43o7dWPsVsK6d4RhkanxLNuV7PxRePh3AX4BqmRwVY35Uom1VkGu",
  "key28": "18rDRPm3XZdaMT8gZjSbQiaFedHsWMD5thCPKLfhQJ3nkv8Rtxj2PziJkhtGDgmpFZqxnHzjrRHawYNczQf1iaW",
  "key29": "2N5kQRn6ENKFkK6RSPLeyfbEpozk5uCcoYYfNb66Meqcs96zxh2oEUyMobkxW9df1tsJXWx81JReneEqsjrXdXBR",
  "key30": "251bBfjKNiqTnmwd8ESjDJv3VDzWPNJ7CS1nqLTfXW7Qgqd2Rh5FMZYbPtAf76KKnQXavz7NinaLGjbBeJdAPZZf",
  "key31": "5AsJTj21qQKJhPWmVwmJ15furDqhfYkpidjU7QduWFySP1HRz873V4wqhMgHfG7C2nKDHNWJcAeNduH7oJdsjmvJ",
  "key32": "qc2FDDUBPP8tDHh3Hu3yJUpUoGuRbcc9QXWgZhnV6goNfNnJk2JsQ1Mn6Jaex6fmifdtdUNtGXaA7DvVAGVUyxU",
  "key33": "4wyfYoQE62nWjdrNxLToQHfaeHwKjG8kw62zm4hwyQJUAdWjHDQEtAiXvLDLPW8TUFEkHCTKrW2oxsPmEAvBAShA"
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
