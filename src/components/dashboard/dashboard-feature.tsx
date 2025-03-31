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
    "3c1NeMWNqN9rqudpahaGD61wy6j2nHVAfSwT7vCnbiLnqTt3Zx8zGaWpVgNK9tWUUjWuf32S44VaU35qQoi8wXw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Dqs1orgK6vCo8juCR69xq7fdp8HeCH8noLjDT5ZsVJb6TUS7MY883LZVaYKw6ffe8qMLKZpp5UErsoYrcDHu8B",
  "key1": "3YMCN1JxhcnuZ5qDtAc9piQX41Q56ChFyLNRR2MNa77VYPy9K7Uq8PduwKmoExWKK4ZuxrtQckCTsY3BLVF9wE3p",
  "key2": "594QvX3xXhkJGyRSjRfDzSdyXanPh6qfxrbukdg7zx6XDibjaCoxpJuXfFBtQUM8fnkp5PiQckzovCWfF3Ekasn7",
  "key3": "mzjTyQuAN8SdG7VJ5N8civwNwLNxSBN3Np3mNYwQZS9k19Lu4PJatzFp7kTS3yzMMkMXCo9iszRnUfnrFfeztSw",
  "key4": "4355ZpTGGCALp3xXxx7gwvCsA6zanWduBX2LNDEyke5DawBycG1wEbACpfMYxty6Tafcev6Vkp5namnHLR9c8pFx",
  "key5": "3xkXBzQqDAX2FDAW6UiPPSUiz4tAdyxPuW2Rs9Rm5AiYyg9px218RgCDqwSboh4GKzBUwpqwd1ak1inqWvHF946w",
  "key6": "2kXcVcBsiRzze7m3avkF4Jfwic9NoDs3B3xh4FZii6SuEsw6LDbzhDo6SnaKz7ru6zW41NHBYyvG2fvzPiQkgZo3",
  "key7": "5BTHaWu2R36dMhmr1UZaN9jaJ9ta46Wxtw7TCssHThsiBLddKTqeMePwr9oVuu6CxmXgJ1cMw1aqZUoaqPi6tRiU",
  "key8": "41wvgWkRXQz8uXgDPEGvqiQ1GjkAhh7L82Ym9ZSjkUx38sJvbRvjnb4e7znWZYefE27xuMqp4AYGeJXxKSku4Rhv",
  "key9": "4N74aTJYf9RffvNEYGmVEnGrd5oKJgZkp43gS5eJnjJvmFN4QMiMrMLFWTtkzngcDpxTytv1X1gozA3EchoFMhcJ",
  "key10": "kTCiJyUsGDfsJiU5eZwqFPpJ5kxy9i26f7TuB9gWtUmHDLiwR5SqwKdmTDvfJPHJaakYf61FvkE5yMTCncZrx1Q",
  "key11": "kz7k9CrBcozB4Q2suvpzKZ1i1epfxQK1JXU4M6xHYmiTZkUbkrXmuWTFK2wx4GxCMURxTrHEZGjDShq9LUwEGr2",
  "key12": "62cF332bJUoA7PeKRkfP23zhHuD6DJTJVc7yA3Zuvc1XLoSs7x79rA4dUjykFsKXbxAGsnnUruj8SUpFerCuSkeG",
  "key13": "3uyDhUbF54Trd4U3igVQxnmfQC9wcBjxQncDRCyEay4HUcq74tHuhwETY5jmL9nkjGAhZ2N2wHSjXfHS4oYXLXQ6",
  "key14": "YVdYGCfsFZxSH9vY1LTCX7ZbsY69whb1uYuvFewvfHHFwb5WeRtzVEShbSXdPKezesda4kHW1kGTsQTaEBUqWaJ",
  "key15": "4Lhndi1JGDDh9cfnvQ813RwTdUzpVdnGpMCuNPdEzSTX6wmd1bWVaRGMsHD7knuMs5ivXnTSDXk2TK7cjootajzA",
  "key16": "5bak6SWeNXUKsNp3uhsLeqLfsZhD3ZaXxN2CsaQrobrVMwjmDcw6gnjA8d3PxAzMqkqjCHLNh3H7D9dXdBmUTLM5",
  "key17": "5stffJRP1NSNeuSjvr7DYg31ytGQ84XMdW6vHuaZ77wNuACVGR6iRRpagszhVJRt62KNS9FnGbKMBDHPwCxQgp1e",
  "key18": "5ncvphaXiyiWQQPfm6XtJvRHwDmwr371T6rdjPHgvuncmPqpLgfU7785HVtv2HCAgssiNrffkPLPThCKZyAADHrJ",
  "key19": "4CWYyt62nozEvHEqXXwvRNqKdMC4eRFky5HDTTYrs9GA1AgmNyfNbJhuNyNW92zTTJUgifEoFDXkKcPJAdPhh6je",
  "key20": "5EeBfCJBrKGPvo4k6BFxzabzZrnCa5gjV6VKh25kKckK3hLSeHPNp9E4UjtXLvqM7Uucw9Nu3YAe4j2bq8k2eKsJ",
  "key21": "4Nt513SZ5TN7zkV3xiMeKn8sC3koD6pxwrXMWjkawWfPaAWxqtnYHNCawGLymC1qJRo5ZYz8eYYzNbLw5pN4wiTE",
  "key22": "3BrggvXE41xTWo5GwVRcPay9hVTfjFVbrWKAViTFKcSz7AVGboJsveSdVouj4S73X39zqwBpms1DLTuhBqnprMpG",
  "key23": "5YgUeDhuLBRJJPFRf5a3Bb4BeheBA5AGpfx9iEyCkLvhkF4GS2Yu7ApFhVSSjGTsKvzK8DP1WxjGcTj9J6TMGZto",
  "key24": "4GVH1LY5XGV3Vq6NBPqUC3jhtKWSVVJ5b2fYYXK5f5F1hE6XLcC382NJgSKfAL4U5WuV8u1r3LfV462C2nQq5vLH",
  "key25": "4P32NeDRcHNvUF26HQV5FctYBcQSMigmDBvUvxYpm6pcd1q1qxEUoWnUrxtkz1e7B5qpP4sJPrCSEG6TMSsMdUWh",
  "key26": "5qoiyKJTwyWJgqRFNGaH54pwgnyQgiv6EZVqBhdMZCNwosZ3pddXvhSM82NjXU7N3yiWZcr1LspYFsp8q2NC8UJy",
  "key27": "xd7Wo9cVwiiHCgQyfjxPED1vW8dqQVRFB2b6JyRdt9x29S9HSJdUR1zJLtf7GcbVbkqSBnSq4FgMpYPTs66mCuy"
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
