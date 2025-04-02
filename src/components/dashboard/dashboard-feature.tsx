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
    "33ei4xY5xzFNbLRDEBaNYxW5umarfbyzmxpxMbTHyunrqmE1Su14HuhMivra3Uq2MbDentJMtNqhsMTejuYDcVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kj2KX5NmEqXQJMs2W49RDtwLSxiLDBnN98XwUgkzmzzv2fohLf3VFSBnzzukLpNioBYEJmBcXphGwq8LJvuUfoR",
  "key1": "4SdrMivymLGTEw9dTmezp4H8Z2a2i4VzW7BtBv9XrhagC1PfEYhR3HRVqohrYpht86EEpgoHjFKVGSHWwcaZH3FH",
  "key2": "4bBnXd3wXPfPqUyFXEggwb5jq8EAKDsuv9i5AgUj7wRWC9YongJV4YayfdxpuU2cqvEH7XAyukvZjNRc9wPMRDWa",
  "key3": "4m4dhGuan5NSMhUAif5eChk3TVwUbsWucbjwpHjVEdfGHSMdHE1WYSr6mVJ3u1SQ7qSsCNqk5GRggHcdvkDaFJTD",
  "key4": "eNs8NHoqbS4ruTKQ3wzDTRaTaL9TuFsQBa2YSCtvZNScQP6CHoJCYvtbM83FBbznCmahfDWPtieAJB5WUbqJFZe",
  "key5": "5buXwbnxYmG9wbRLMtsephHw4t7z4ug1YFRwbnckw2enRzGkFmFuKueGkcDbtx8tmhq9vwwwzG2KVUZM2RAtdGFR",
  "key6": "3cNZ9c5yJmtQ6ax425tGPahzcDcJ3cZMxhR5cXR5ovK3Mj9g7YPv6H1iYmn5oWWo1t9fwbgcWGBnDKLNkA7wSc61",
  "key7": "5EFjaaQievVQ4uhEjEXAYjBbCMmgRZCDGQPzGDgzpLmoirrmgLCogm8nWcegTY9ocSCiYwBRMJWKs1W7c847hN7g",
  "key8": "shVFxMuCWMtai6RVPRmeD1XnXoVVRuAuF1CdaLMNW4QJ7EcCFuVC3xvJfS9b6cZ4Pk7iUVVjYdm8oiPdzrm1eAK",
  "key9": "ma9jTX7okamZoeCJeepZCiVH49qDCwtuW3twG8TWHk1i8TPkrFhcRZvhjd8UVq8y4NAY7sHmvPNvbjdvxL82dta",
  "key10": "5zRKCH2SwsfqJKSAUGJ3Zbegno3cEqgt7hGuUQ3wQJVSoMwoTiPUxn2v4axh97T2fz5BH7H62T2fbC3sT3fDjqCf",
  "key11": "3c2w1B7xbumTXw35NqUAgqcGApMKnn8GEFEuc8ivxq9UGn9aZnUkHfjuDKnzGdKcV6k1hDAsxVbnoUcjxb8pGM9f",
  "key12": "5T86Z8AESFACN1YLjdfUtJLrk1jGAe6gBPZNHxn872mcWdKoXeHMawjUiTPUtjhs3YpbXAktweJAMdrEMSbQ7bG",
  "key13": "2PnVQtJXdW9cJbcyA53A7sXwsmmmTc9eAro6cYRbrFoYFV2g2hdTVBoXT8xj3eCFDNtFZpfGZJJ2NeZuciSZmrw7",
  "key14": "2bMwsFJR3XTkKmhV1ddHLr4dCF8CYzffW14LQnSFMPqshyHNkwXVY6VmFwE8teHQXAjp8RVtKzczrkR1VoNQUWnW",
  "key15": "3jH8XzKzZWyCdZ4KutfhRQQ1xY8MpQwZQUz8jbfKRpF6TYcy6WyD1KpA7JrnnSh5UP4MCumWZdDx7WC33cWKwFj5",
  "key16": "rSLDggdQJ6NLtppNtMxAXo94Sb5vW8ns6M4oLgVVHzUSYengNcsVgyTps6wRmMX8HPP1R8EG2cGvKq2YeD3ZDxe",
  "key17": "MrdRQRZq6wc1eu84B4sXNtfSBzzx1pZgeJt1HXLfvqkdSKQSY8zTyb58roA58CvY4SwJVRfyKvaz9TCVQyotx4R",
  "key18": "4qVY7WSEsXLpBPGvzmpmQob9N96BYczcTQxhbM84CMEooshBguoVKuGgXECvC1rWdDdTxa51TGstYoUXKoVs5P7Z",
  "key19": "yrA6Drhh8wsb4an2FYW16Q5WWV5G7AXqooPuCzmYfjHv2tcGukCyZSmdkPbaeZE3fKHXtrD4HE8AjcG6tyjXTB9",
  "key20": "2qzfnSGpiNukSsp4Lmj2ygpMNbkxfP4AG1Zbk5cmivhcB7eHmk5Ah4JLc86QfMvdyU7sqgM2evwYRfePDxAm7Gws",
  "key21": "3aWsq7VC4b8RinC4PZNaM8yqGoqQQ5jAZAbjMfhbb5RCZLtfe9V8KRsu5VSzh5jQ7g9gnkT8McJFh94ZWaRzcxFi",
  "key22": "2Qy8k4X2SWDQitgafLJBbGzeGHQ65jwBGMoubSSZNe91xqpieLymoWbWkwx8Gp5hpTQq3RrQ2mjbv1NbiDu7Goq1",
  "key23": "3ZFvXDXZ7wipFXRDXfPVd6jyHn3joUykd8PTEbn9DfjVGPwACE45FY7e6z8F1FSNMXDpM5obMr4AAPy8RNsJpYUe",
  "key24": "3w6f6oX75NCDDt55NZ2q9pPynLFtGTtH8RV9JrfgzJwWZm59G2fo8zGgw3UGmLN8FSLG5FydUrFdHoEBdJY2mcF8",
  "key25": "5H8xDyMfqnYR5z3muXigUeDC4hr3cowdnk4wNMv7TczTH3VHgyx2JZ5grikhGzFbk5CqEzCY13BmrDJy4K5CPM3C"
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
