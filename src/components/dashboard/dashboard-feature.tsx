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
    "ekGcD5gxk4KyEVGpeXPMB2rXbRHmrSkgF3gtifRcnMtn28L32M2LrTPMAf1QszxsfK1LC5MGqhm1YxqC4kPRGVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tftv4CqfZkXPnqHbrRHgjWBcuDco4PrA8vMU7qPTTKZFBWYxhceUrhWdgGQLrQStaJRa8rYvhkXvCNskr1w2oL9",
  "key1": "3cyotdnW46sSd9HaAzzf6ieon1vkpjRr4bkjAGM8jSa1wAQRddcp8u8cQSYahJ73wgubaqS2dovSqLYx8grqnC11",
  "key2": "4dZChWVR2i27BmvgwHu4dR6L3oBQcnKdejuw1bh5QGuq9zNV99jZNZayLL7jQtQqgHyrM7pfc6FcmcWAzWwhrR4i",
  "key3": "2HCFqDRfj5KfHgwAhkmFe54KydJt4KBhyQaJ9DDz56ETx4r2XeVUujoSZXMRMV4QNPHuQrtYcxi4NfQk7V8mHPzD",
  "key4": "4RJe9TjSP4XK3vzk2ARPuq3VF5VwTKQmDUqT2rWmERLNLvqeP9brdnf4jUiSEJedF2KKnsd4knLixyijY9V6nSeW",
  "key5": "3Uew9ryDEm3sZrySHadTZDcKHug7g8n8KcS33JTtTtQDwvb5kNYbpdcPJrDCj84muHbhbsAx3vSC4LCGSBgX5vjQ",
  "key6": "dqd8qqyXLbEhsWYd6rAbES9C86B6YGMWEw5KohzmNZQRoKpSKmV5Wd6bD6f3Jkj8CaNGxrEvV7uibGjRkjPeVxj",
  "key7": "32oJE8Ak8xfDxFGxsG9EgBM29U7qXwzyA1YzLMXQKiD8k7FoQYCJxhEp8FjNVYeWHvHDF2rBZHKgUnsT3uv4AAgC",
  "key8": "5JdjfxFLNMRHACaXnw7zkVrtWZtYsccbAfu7MKtQB1Vs2Eogy8C1fPxW8kujSZUqLPfkDTBRQmSK9wHN6s8i7dXg",
  "key9": "378gFEpBVMCHiJkA1ErfPCB8rLFNVeXociWq883ACwBvc4KkZgeR6TK8XUSqGrA21GGbdzeoJypoydYD9bifTkB3",
  "key10": "32f8Udc1FerebjxyZ8qU9UMeMThg57xt1NzwSYXGnfmw8HB5MurFYoJahERJWu7UBUNpPEzPxCrsV555xJD7FkzJ",
  "key11": "4JHQPLArmhjTeziQwBa2igggAMX3nK3M86FpkFUvTp5nepcE1ZhwQfVm4Uem4ygR6sp8rMzdvA31FEM45ywm1VC4",
  "key12": "25N41MciF6dN1SuD3ma2SNXuGA7LhWRJ662bdnhD7NhFDKtP3Ghc87mpnNp7EruCyVSkDWgLK8bmq5ifUnR1TBzY",
  "key13": "2tc8hCQ1kMrM8RHw89WKXzpV5MMTBUKdroZDdv8A5GgA2gxfiJ3hRAmBaEwinug94epKXpxUK24BibBBeKUgVbNa",
  "key14": "kn77sf5yoMMkMnqUbThxe2LC7sVFvDYoS6t5bofGvApbTDqYermtsGqEm6uckGj73QdcuuSb11fUfCara9PpWd9",
  "key15": "4QELxywva62NmXvoXqtF14J3GbgixGrVxpXizuRnXEWALfAenAZMd2tugaH8ARQnQPeprrZgTCjC8NBbmBbG2wrZ",
  "key16": "4Fs76TpqMhCyqVCAZSRzhGK74VTH2dbZRvopBFwDjdy8UrNUKdckf7bKSWki8wtjq711gQfFJ3icNTf1Vc9h8mXu",
  "key17": "29QnT2TJbDvvEAz8JVCks5PXf3aik6ziji48wTKx9jzioe6R43Bz79XMiRwd7hdysig4c4LhoE1N8hMghtZrmNJQ",
  "key18": "3SbS9bx3oSLkVFh3DkVnDvfasxAQM1sDGmw12tNX52MuAH2Jgj783tr7U6jGJedye5zU8NRjnsiWcPMQ5puCQry3",
  "key19": "41bA5aP6Vc8Vwp78WsZPYD4VNdGyynUVzpB5qNY7Ub9wcTGpjKfPmPWE7F2vegcxB2foc3UuWSM9Amp1DdPs7FXu",
  "key20": "22LpNfT1ySb5u61zNN6q4bERgQKX39NC5CdXpDUxVdfTXw3FGrf8f7bdGCnDhm2BnoUzBid7KumJm7rjCYSPnSqi",
  "key21": "et4YcGtTYe48iqqtcUcLfb7DF5D8B8gFZwRDZcWbEnArsUNiKeaG22q4huuz7zyfuBgKnZMwpAeLxKcwiEnq1Mc",
  "key22": "3fQPGJZvHH6wYcri7xZqKiZSeziHXf3gJsqqimPFTJqCobwxnHvx8WkAr2XSKaF3AUuHxjMkVSEN5BaS1UBNP5Vc",
  "key23": "48ad4HHpRHtAEwnJPRuwtu61fFi36NwskxjM67cizpLNRYRuckZiMJqfnRQT6R9GTr5o7sofJ3GVXR3WjX3S171i",
  "key24": "3evs4WPsFF6kiHydDEbzLvDx1yWWGxgFBMFsaHnzhiGkibgWjvZsEpSohvnkMeMjB1dCkdgSrSSeXGUq8sSGAhPV",
  "key25": "ZFFvuDPZPvv3zWqvBoive6M34qWwmBpeqa7KJHAS6ss9JENgESbjFgsKEKKvRAF8KD1oz5wzWgpNVSbe34GA49L",
  "key26": "5vyjA77FrqHVRQr8ewYRU6p33hoRnt1kP3FEPSeyk4GyvUygqjnoFEU23L9VrZZwJRyshPwGJpfbNQCVos4LFS86",
  "key27": "3EKJKFZt9xhyzN5mTiu2wnSoD4Zn6EQjt1Njyva1FLG9MGZUvhMzN7UVm7BfX8KgXJcGT4cbkQ4K4jsdrNwhJLH2",
  "key28": "52fxBSh84GL7SxNjyMJHADFfrhxXJFTeswCMwVTAFEoZguqTyGHjxi5F7xmjyHKfxcQmYWAyDJAKnh28i3aRApaz",
  "key29": "3s3jhXQxkarvJFXuJLR3YZWnuiQyPL8Y7bdwn65pPLpQT3Ua4yj8eQskTjDq6ZcKuL174AWbrjW7TaKp4XS7mxcZ",
  "key30": "66zFgMrCdfVQm36NbCnZDzAGHsReFBPEDaqYoQYnYU8E1mSnVqkx8fJGS6PzZDdyQpCavnudfq8xJLi9LkY5ZHZ",
  "key31": "2gHbU1oLYKmxz6JTgDT7A4ymjtBPnXxMSmKCiDV22VHTrPgn5XryzDwGQke8ozKi2JWDPGBfmMZcsR4ZtKciDNmK"
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
