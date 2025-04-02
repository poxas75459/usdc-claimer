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
    "sxhoFQYgSMEM8D82EQoz9DiyTFPPBWaBQ4xVqCECNbVnpy9q1LxwkNSKSFKbV8W6U9MbRPcgACUrm65hQASqEtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dbu6XSo6FrxbZV5rHHf6NLMpmb6uWu4fXmecNudUMBEpk27BnPfeHA5wi2r79dKCXpb4e6nHNmvgfw8y5DFvMmk",
  "key1": "2J4FdU2jCcQdZj33jwd4Cvn1dZ9soTbhLR2AEMVmjidXjMxavo5t2659iWnrF51oNmANYfdvqKERF8pvFmFRqURh",
  "key2": "4vLrhceuY8p5dLPF2WeocxvMHmt9Zuj6xWkA9arCfATCYTRXKtvSufqU7edeja48mBxPXhtFtNxvLYxQZbdrsnwv",
  "key3": "3wunBpX3a5cTL3j3QjCaQdVFK1peYitehja8h3pnbQ1cJAp8Ji8jTVsA5sjCSay25jAcTwk2q9ZMYwZqaGa5Hexg",
  "key4": "4KH5yUozLD2Mus21t36asJihZAbZ1LnE9L49DC8oML3w6RRFhLG4ub3KzwU79wrjsrnz9rYsghTnqfbUazNH1WFF",
  "key5": "5HFNimwzLerQouEt84A3VZ1Na9wX2w53VQFCVxSMqcQEkmghmE41qkSbQC1YCDWPVEPwqQh1Dcjm8xYJxfRDRaMq",
  "key6": "5A6tGy1wXxPDXumQpm3YSdMS5cej7DpE3A4TdNXXvwF1U4V5eP1nJYFrZ9Nwf5qVvNTepnH1LFbdQdwF3AsgQNut",
  "key7": "4kiBroSbHw7j834MVKDGSDbZ6wsPJid94oiHYSM7LrjCrieWwzLSofa3trNAgiDh7eaq7gkm6uUFKKqUjYHkwe2J",
  "key8": "5gEHF9qV2q1nDBPgqJcV5qhXWhoSzNxtPA7UdWN9BXjUZANzeynMGtXY66Dv1F8vWGVAwPrari8JQP2gW6W84uh2",
  "key9": "5H9Lk97RDZyTfsvWUBqqMCD11UsUsp3mVE3QnH79mJFksmF3mmyY1E7DATZ3QE3vUkyMoVMcZSX8gpuAFD9FYSrN",
  "key10": "2Gtvg5xJGQUWSSWWW7ApnUwyRaxF7b3YDjBfJ38R6Qeb2fmCRbHjWP1gWegCwnqsjCt5mnw4MPVPXbw35QYSrynf",
  "key11": "35JyiihLW58fh4RsYgRoyxyrdyUjyANfizfb26kGEfMvvPs4CAWbgeAc1pGaio9ZdkzoUVmfw1QnwgULABKSpUzS",
  "key12": "5VvMmx8DDCugNV3QarQzkvrJcJuShc5mZp2DiTaUxjFg4buqFrbyNQ53BmmBCpdAuapgLTnBaqMdysrhLJRcbJRb",
  "key13": "3h3Fvj5m3BxcoNwj25S97fNcGPBkPxeDwk7KXTqSSsoRu3eeR1wb1tbMCgVQU1L9dcTYusCiBZaR6ueMCrAw3q97",
  "key14": "66GzDpdMHzKD76UDtVEUANQuE7j1zDGiGmWvUztAKh8RfMjtJ6XTcCRHhmeuyrWoqzzFzhEgVQiqQ3WgzLncJKPF",
  "key15": "2vrfA8jctYizho6ERiHzJEHsnCPqv24G7SUQJN2YxCc2fFiMCP1J9rPdH92Ao42FwNGq1rTkP1n2vAj4tiFtpxD9",
  "key16": "2dbFewbEPtTG4NR1DPHLNUHgacQhfAXXnYNd4e1w2A7oq4oqGagNaGgpzxEQEJz6TiqpLLtJfG1GydGqG4rqLYGj",
  "key17": "2J2GEpen5faWHfoHxNFv26SM1M4giWLEQqzLCpH8Uy1g13Mww9bSt87cHCvrUXhNBXWn9Hc4gjSEKsq7q5KMpqVa",
  "key18": "55qutYTJcffE15YTN8wGZF7tSM7f4WmSSTeuLwxrij1up4R43nLZ4RwjeqxhvxosmMB4uiLCbgwxqLjf9Pd5XWkM",
  "key19": "4N3WM9G6ciYfHCPqEFFvjw5Am9ZyRpgF8eNenF14n3TDd2ZW9EqCUuTYpQmPk2Pb6CEobFTXxpWsgTmF8qXtZcYh",
  "key20": "3oUPDxmhgRGywiPSz5tLbNr4cWhZSbwSJ4Lznrbb4VAXsBGi1Jk8j6gwRH7bnvD9x4ULTS21qqkU2xdQ3wLP13Q6",
  "key21": "d8GWoZBWpRmAoaeMZgP7vfifeku1a9hiVDXVsuVBfygrRkGKqULaAmRFUN8Q681s1aCSp2yAyzDGzacRxrX2y62",
  "key22": "3PkGxgEvhLUYedUHJiXG1VuepcwWkEBjjZJzDpMABJP2272fEGhrxuuV9TRGp2RixTfMS5B4aZfVT3e2u4ocW1Vp",
  "key23": "4d4rkCkXkB5RpHBpiwjzwBxydHCoYM2TWUrtv4PxjieqBQyPsq9csxifn3rteSYbLi5Lo31Smz2H87XUyeNWq495",
  "key24": "5yaTJ8BqPEaUvkvsTXxnZHCudZPMvfKZhLV4kpbBsPZYFAMaYixWN9nAA2AdiLcUjNTxqCkEs2bEJWSfRa6bs6Um",
  "key25": "2sFR1858QPQV825L1HvoxxiYnwKAeFHLVaEvdDWmtJ2fYK6TG8dKdXStnmgUuuVZnStJUntHcAA92ZXKoHhPK2xB",
  "key26": "2HXGyHXrDhPe6qN4BHHGTFayiFn1LTLTkqYw533pUhr5bDB4Aq3GRi12pis9QjypsRZEpBsJ1xHMchMWpCNyQFe5",
  "key27": "4syqKJsgDdPoipPsVnndxTaFeE56u5dNYnKWUUXDFRELjHUugYY4T7RjuhvSvKDNnsJmfZHaBegbB5R8vU7KFZ7"
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
