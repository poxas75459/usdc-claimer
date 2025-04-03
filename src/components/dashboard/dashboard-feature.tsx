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
    "64LGhFgDRzKVMJ1MaCPRskp39pcFZsYCKxjwdeTQ3zmzaywKRxt26gMBrhdHsxpzDiEWC3RicN6L75gf7uZMjKwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7Kfv2118p2vYsCJ3y1Uzr59gdYw7mmSHhbAzZo2NKBNVAj2sYon54jmr9aZGS1PBUheXyj4tDUNHSGBxY1QQg9",
  "key1": "3Sz2FMsjYJQrziZ8BcQ4tF13AFJHt37wiXyEd6ygKhNrRNRg1pMX7eAp9UTWowzTXbBcTkEBGAuNaqfbugZh4qBj",
  "key2": "4RY7J3KSkkYSqNbPnyLimQfyoBDSxyPjEQuypUNTTB4e5czteyapFHQErDRUzosiPr9YeB35ipjiwL1ziXobtkwC",
  "key3": "6429z9HHmYRij6vyeX5vA7CD94kQoVNsaZHMoxePkCYuWzx6WZmQTKsPZ5fFqhu5jxeyDH2GGUqKaJT8xMHXwRY4",
  "key4": "48DAWWBrtSpk449dVdfJ1aee8Nc3e3en1wpnbvp28VyMUgRgvwNNqSdY6fJFb51bpLW9R7bYoeHERcN6g2MMX2Rf",
  "key5": "2NF39C1QFz2RY9U6jmwysMgFvuEYZQU5dM6ZTTbrat72UKouTbAyQiAbZiNcvDrreEuPnxbX34VqJyiKnemntAvv",
  "key6": "2XmL4cupLcRXGebvJxdy4KHs7PcUQMDYsJfez7b6RqUcpQ9u4oxLLGTPAgbKH16wFZH32fyFCSLew4GBLLbyMNTg",
  "key7": "j6Lm16hRcRnLPKmvqGhG96So2fD3LA9YFGdhZMsdodBnjYx4F6uRkZqY21Gd4Vb23VfKZW4znKZLR5y2YgQQsxg",
  "key8": "2b3dQJiseceBmqb6NwBJiCJ81dirAHCVZ3cjAPNv4KoFGbrjHshPJ65WEyAH4fdbbfdH4arRBv6VAgu62ETK2swK",
  "key9": "3znV5i49TbhxjC4FKoPzXSBPgFRu3KqxfLAPDxRucCaVnPmbuFvQicSCJKVVfpa2as5o1oyu8yYry8G4aaovDkLG",
  "key10": "tWy6N8RLtZATvMCPqbDZEwhcA1tZkjPWLMu937kcVK7kfwsdzC9ebBexx8rP4oLsL2x5c5io471LkuVJ8EVbe6S",
  "key11": "2Y8KAYJkPuWutBzEQJXm4K32uyjv8YXcsi7V9KhhAXpj5UrddjXDjdLuXBdMm2Kd9JfrTuwu8XCYgroaHZNg6k6S",
  "key12": "4yr8utqHmpGF16DcfDZ9GbDyRxERnTrsgtccycxruahAQESHxmGcUUbCZkVULTMxHwhYKcEQovbYRgQdQzJ49Rsx",
  "key13": "3sgFG8JLWquZrK8gURnFJ45uJSJnck9UqKDroE631BW8P43kvT485uw3mKG9SxSPJRneBDQMGzJcpcbYP289x7Kz",
  "key14": "47nkaG9bSHvEBNt5z4D18wkxTXAH3B9PwwYxFaqkjdLFRk9gcf2paS4xaRBiPtM1paegZf7puAczZzPpfFhnwZwD",
  "key15": "3cV2XFqJgtVksbF2CqsS4uxPNV1BHk2uAroaRmjCagiasKRJyPkQZGGE1GgTb2bvjCQd5dSHVVebTzn137KqfEJo",
  "key16": "3GiDrB9CyZNnmtcMFXFwC8FjRVM8NcZPyazUF5uXvNUouE4GGMDLApiA6oqTXVyim2GdXVWcDm56bu7sdvmLtCCu",
  "key17": "3Y1JxfURgJgb7aWQ9afKr1ZXQbipDCcveJWdytXSKrUYyBkcGeDUpyUhRi9SPdsJNj7pW5wALRSs8SF3gmrEshu6",
  "key18": "24vrK8XkN9Y8157sGrWvvUazzr27Yi7YxdSJqdzSTDLo25a49Av3FscEVWBi4VsFjpZZdmp9bS48pfxFmGiFxfgX",
  "key19": "3N2gcyyYmia97dEeocNLcAMSb2x9je8MjgYFFvrQB6qTB8ZtYbpnaPNLWxiXhd32V2bLKwKBMgXaCiWwjE7Y1bYQ",
  "key20": "3gkHG1oLmrTV5RUA1BnLRSaa2fReQwmeKmBi9m14btM23mVzi9iFBsPeHsD7FJzJGatEoqL6vnC33CSYDsKjAGzZ",
  "key21": "3qx5jj4GRAwXnk7b7vSvJs69XPf9XfLDrzew34qdP4Zw11VGqex9RLxkxWV2AoBSquStaoJysYbk73WMkd2ojpBT",
  "key22": "31ohe2D6DuCStMFt1eC2UJ7J3JnNo5U3zPW7t5KQkmydEkARAvfne2RQjXezLw3gLx1DYxGth7Pr1kUSqgyDukrT",
  "key23": "41xNxXdTQCqmCvfXfNGEuv6QgVuYaSAcS4bMMFrNrKm5C58Bq86wrzaHg13qpkjsHvYBr2NhYwNesvxsPxJ7KBdL",
  "key24": "58vvh4MZZuWGSEZHx1cUoLgPDLkWyXAkgX5QWmkuF5qYRpWw7pJHTCZ5pxwA9WjLRGchnumFWbsM8tc6ihA1LBeC"
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
