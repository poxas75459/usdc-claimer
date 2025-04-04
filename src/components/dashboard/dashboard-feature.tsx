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
    "5azHzmeTagFmHgVm9gjvpCuNzNjTHXuRN1N3kTrXMt2WekBqtdbuLJBdBCm4zrpnWBtsgSiv7AbPqWNuXgBUa3Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jueTSQLticJ1AnRbyYtNVQya5bjZfCrXPM9foQkNU4uJ9BvTnFiNBNQZaM8bvj9vtdjEeP1NRzYYx4xsVC2GzPS",
  "key1": "uW5hiTzoTxwDkZfccJyx5sHg4X4RXkv2ogi1qYGGMNsQNsRpMmdCx82JggcAEgcEWAXaU9CV4PJGEcdm3MuRg6U",
  "key2": "4uwUcjHpJbTk3ycFFpJTyqLFziwZJ8bdCE6K3gMk7YB6MYzZQEGB5mkJHCRx46yatrdeJ4Y7HBRDVFmXGE6btjwC",
  "key3": "2uui9iRgFEE39Yv7uuDxDThJGjQroQuGBC5Cud8igv4kFkJaUbRm2xcXWLSKEZ36MMrXXbh8qLKiwXTjubv7hw8P",
  "key4": "3Q5vc5AmAYJasZWAVtMS8bg31SX3o4Uv1SwZCGsg5gAWG96bj6nUSMzF8MCKUKkpj2XQUtoV6ZJeezRBAXe8wkv1",
  "key5": "47Deaxy29CNERsmPQPte33tQJBEtE24XzxSzfCEmkKa1pK63Hr1kpG6potPY9iL4TrxBfg4bzXWCejEGerCbQEGS",
  "key6": "5mMJRfj5vF7QtF6AoCMGUxubKiy8r1wGyM1b7CVV6qBn5dw1cqAQ2cmCRtRnPSdHf4PHgjYDSJPfKtMfoYoKn3ns",
  "key7": "4QTgdABu3Lx7RwbFZKK6nvxaGq492aVqHNZL92J9uu2SQCGa16pmULhW4f8qyCqGWUNarPdbhUzmEx5VYkfZSowb",
  "key8": "3R6jtvoL2BfXveNZdSm2PMqxjbSYVP6aHFFv88n9bWsDa2oRwwtuhfFyGYzKFuZWSxvtouKD8M9wogo8XEWcb33V",
  "key9": "2VWZWUkBXuZmqPUqwW1aZsMUdypXcZRS1vL4XUbiY7GnTRjTZKCd8FtmpCbS9Z2QfE6ZDRV2GHaDCtAe6WDUYPoW",
  "key10": "5MfUDv9M6mxVwMtYU3p9vr22WBEaiUtVarP2sobFEEFQhRSiXvidJAoxWnKLV6GC89h1cYaZXjkLJEajA27boW4",
  "key11": "29ARyPaeKYFDLfBNVrRRHyRr2PkUFyFXwvHbeSKHETRupprKWAt1v19tnTBZbTdSVLyhC4AwbFdCF7co8TBfnxGm",
  "key12": "3x5i13HBqHj35HjenG6zTUdLkiw2QHHWFHmb19gZh73Hcu6GGdpbYz9YPg3LC8Fu3ijwKZC29u7Kuq3MVNYToJ7Y",
  "key13": "35EK4e93rM9yDM6w8qybvxS4g5ztwn8XK4Z6tCzXaMy4BEGHrN7byVM9pig6jpXYCkiMEmiMPqhwHpMjdi5L9igN",
  "key14": "3mi5krbH4PeqfQVZMYunQPyZcAkmBcnPaNgXyEDvFsZ1KyZYotfRNfckbXpXAQ9atrcwsMDT75j8ovroeJb5dp68",
  "key15": "29ccHJVzC11cKKWqAQAEC8DSvjzmzruop31uJuwZWDdhUytvvz5Fzasv51KdEYBss1ZeZsPKVkV1FkuH6z5gLkEZ",
  "key16": "45jZSG9zV9QnkqwaTTpFSFoRRMAMAHM6XTLy2BAtVwGZXr7EtX8Ez9WEFYWXAt2EzUjX63j7bmynvf5sd3vSYfSY",
  "key17": "4Jh7CBAsjbRuQh4r7qjo9Dkx6ECCTzaF97MizkLjtHZ1hZaTrKAiAHwSxyY9eHDN3XsCg4fxuexJ28i96omK44Vs",
  "key18": "R7osygeeqZxm4wK6pMKjBNhXZaoMndVXWB2FabouuaK23U1DF2isHJZGtZfV1nNa1GBPddFpbts76fEVW3GgReb",
  "key19": "Z183zAHRU1KRtpVpTkibGqLcAwzZe9tGoKtJVqETv9vNjrxcWoW543GATQ1QTBZRh6a1t7HWhgAV9LnsitH1pm4",
  "key20": "2jxxgvCWvFj4NFjMBPykTWgSiAnLx4tEMCffxtrK9DxhXHJCinYipLTHjEjR1YTEt6Qd6TDLTz54vXrRuvuNKKG2",
  "key21": "4A6RT8DdWMNAaGgzB54pzev8TYwC7pPv8MY5n6TRW2YqSzuqe89PMEpH5rGXHc6HTD9ZCLcsQxMPxA2mpi4xLjgJ",
  "key22": "pTk7LxFdSBsN6PaFSj2HxTZP6mxgjpoJc5ss3HtTEXut78nGitF9PrDwnvTc8PHS8hY6EmAnbiyBBrjNPKCcUqK",
  "key23": "3SwW4LkQ9ehVPVKj9FuFvpsXmzRi5P3e7RTudrfFWfsuz4sC5SYqjQAXAmocT4678nZfzSt9uWqMAohk7caseccW",
  "key24": "3mpQpeafV7E68h6iZhosoeqdbMMRhZTwj3BQTPH3F2N7vwbLnMS2qFj9EtF8LhQVMaMfm7hMQom2oYpYfs5WEcJJ",
  "key25": "2E5VMHeuM3eymfCxYKKFNzzfHynJASdT9s3kVskxDCHbrJ2BkPsouXiQwir9HvDSuhSSakEmzuBoLb6aVEkgjCEZ"
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
