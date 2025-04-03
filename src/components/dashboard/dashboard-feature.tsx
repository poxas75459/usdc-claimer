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
    "4uS239WFWpKf2WPzPajyHH4A8AAJXjzhz5HkHF47pddLpf6TwjKYxKTpD9zKY7oTWPZpotWuMwCkxmjBPU58Ya4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jrgP5f66Q3errTZ4UM87Pj9zMDQZMqB9x9Sykrv8Gz5ED1nXLGDrRYxucwwSSnKeUFyutkXuyHhuJXwZqzqxWL",
  "key1": "3Gk5NC79K7scgcLbDcLNYzCufBaxUPS89EqmRqXJbKWtpssTqyJG3YaUSDSJ73sMAiWFDrZxHVLeMb5PLanPDi6",
  "key2": "42kASRi4FebwWUz7V7AwEqJPqrHxsD41pPrKy9YJbado8LhbWq5ULhAuaTXVe6FwaB3AwdTGbakpBom2tvnoT3nz",
  "key3": "5L77vMCz9y1xPNmmK939pFeB8m9kju33JiVWa5zhegVBMnXsFpoMtfUnnv6VE3ug9RpfnKM29jDNasBWieGxVAhr",
  "key4": "2oEd6vvN6ZF9FaLDApsGodcvtDaAUGgyTdgoLf2mjW3KsQJs4TXdqVAaC8dGSWZtqMYTjk7bAQJKPoDFsQwvNJNB",
  "key5": "VdJkdt1GxhdJsUaLSSgUhY9SaTLuvBJJqfymLDdRi6EezYjQCipVBGHiZa4WtH4H2nhDByLZzkqhcp25EFvuWvp",
  "key6": "5UZvoy2szKnuaKe428w1avJWDbgF5WrJTJjsdm31JpemqMcZBvivNLWBVLqzF4FDP7pbu5YKtWugZEG7GQ3vNndJ",
  "key7": "4UvhXU8y75v7g13D6kGav5DAWwquW8wnyfbjD2J5D3nDtctFKaD5nft4MjZmcF1uEKmR774teWLtJEM3jwuZGLi5",
  "key8": "5YcZqDXsUAXYNcXomqpa9NhRgqstF1WVdrYrmuSAk1NkxgPqZ5iYZaiovEqR1ru1zYW2TdUXL1vRTfgom1TVDs1F",
  "key9": "3YN2uUJTHC4u2svzV42pwoQdTEfDt91RQD3MRQaNbF7BNmRJgjhnEx2Fw6TBKDrM8aXnstrGX5YkypT1o7R6wjpA",
  "key10": "2rEnHBJQeNmSpGhtD7dxw1d5yZr9Xhy1EN1UXUwkyNWcFKAR73zXL7ew7aam3jpXFk1qWDsGJcu6tLksnXETKnGY",
  "key11": "3Cg2LegMtPkGBSNs5KWSKLVi98Hu5GNbU3rDvbZmvoUac7ifkUfz1o6cHE6ze2VuJS9vNpQnQ7kme5oJLcGTF7N2",
  "key12": "5bNewDtnxhMcHg8U7jxzBMKsQg5rYtWnWmkNixSbsQ467dsH8ToB5h5E9t7WGsDgWGZGuaKyvH3cwoMKCii3hqCH",
  "key13": "58SQs9hUdy5Rmydw5FCi7AVByCLaDLUbcJfNe4z9dg616KDtQYm8JkxSk82YCVPtSG9iMhWhZuG5FKv7q6jR7UPB",
  "key14": "4EQXQEnHTGLDCDpcD1wnqEB1tvMH7P4Yo51mnka6SaVoVv3VD3z8u81DVUcs89NDFu5wJKGhvED9EVu3LW4zRXkK",
  "key15": "44Y2dKEAE1K7wbDoLRuz4UxYzYxeb593qPgEC1Q8rXveTiNZwn4qPJHKs7cfQFhEGJEYhDLhHpqUh5rZSPuMbn9y",
  "key16": "A6QAPfWzZ3B2L6DavoEGETuMCh6JVBnfoyW1ZdCvCsnr5voia2QHorQXe86HgMA2WAZwhAfL6JNUrqGkKXt94Tb",
  "key17": "3ZYyyef72Vv89TRp9S9SjKNSxyy1QwtnkuspefALCRKtpE7cvM7sg1zHTgLtCiqChAGyTmejpFamTU7ctEKjbQCg",
  "key18": "3JBVsGFKtTSDxxwAzykbZQvUi9SA4rzLkAa5jLh6iMz71tohXSZ1DSJqd3otQouqjQpBkNHb2865oxuEdUEdzAu7",
  "key19": "4fvbFCowpCk1rmPxcmCVfzJ7S5ZN8MiFkH3p5PmtEUWZ4svzpLV72wJUfj5B9rS7CtHmxsjzd9FeWmabmS2UCk2s",
  "key20": "5k2eBzUZawoW1TRFv6WTr9DUzbk6ifc6ZbciroPj5hpx85ibpvkxy5R37reUK8FZA7RdTTAPgLdqMggCFTyEYKVh",
  "key21": "2123iU14vGxQjzRBXVf6DCoAHo9FDakfE2WQunyzEkLY5scXcfC1DM6JNPN6bTBF7ZZBFBv3RCzPwNaPpK6mtNsx",
  "key22": "4VhQ1Aa4369MAYdVAtPqeD1DStu4ufoeb3q21agKKjDWyZFRsWu5GcB5UeJvkvc8viUdDNzfR4HMpnYzidRBHGAa",
  "key23": "5PfmaCE7pU2vMKb39qLK2RVL96qq2e7Ubvj78tJWkywpdzG3ffUSXXfD342U9QuSvsWV785DQx6gkU9B7UMQFN2X",
  "key24": "4WQ8SgF7JxNh2Z4y8zwJ1W27t7B2ucdUdNJFgqiQ9DhAW7BrYDrmtGx1rdesqD8y89ZW12YGiHgDdxhHoLueF726",
  "key25": "5WfnZjrPj1ky9rigfXykakwHQGxwHT6veC6hj336w2EL1tWMTUeN39nyhBbZxFju9RujrhUKYamnySURQz9qXmGY",
  "key26": "5Q4cTaXTbMUsAV94q7jivweUmXG7z1FCnTJVQhe5X8xBbJvAyXc2FTH2avDPDiAnhLHoRqEAVVMsQyACSmpUSPyd"
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
