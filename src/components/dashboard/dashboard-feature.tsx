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
    "5FbaSqDCskoAvkJbKW2pR6SuUn7xDqDcG9ZbE9kpeyWP65qHqzQDdHbj7585X6Fd5YUa8jZr3L5uZyKuxFB79Y9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qc2edMVxhbUNxPfMY8WDFFTxQvget1MUzctMY6hz9hGRSEqsRBVWPk9GEmTfQm2akq8TdyDHGmBPpfLjJ5vEEB",
  "key1": "31NuLM7mRRVpmhBzNMBjEf85FFN6rWEf4985w8KxmVM1GVqSagZE1pCSDHn8vKSF93Vp2WEyw4icHfDLmFxLxKUm",
  "key2": "3bBRGg4BSCmPBnLwSqGegAwXGa97Nb9zxu2MZsUiMyix4tfsza2TGUDdy7qkxC5NntCdkKmN2TyFARSiJYENZXQY",
  "key3": "2M6AU9oqxLF2VgXrH9pxRSvK3NJtDxmPRWR8Z1fFMM2BXnwJe4NUSLbF7F2fRhc2tEyrsGNfR4RjEhfw7tjLjxJ2",
  "key4": "ofy6D9ahLPR6MaoCRc3K1mwT46R6APoiBWKSVamUHjf2axQ5GXD7RKuYqU9A4KLi8R2qcHu6BP9q9Qg1Jfznrxd",
  "key5": "4qkeizPG1n6h8wQb4gZ31aCuRh5jHS66mRbtsYZjxyZrHjUNdeTEanHqQ61ASYa1N5FCSFrzTAMMGNJ8tU3ex3tS",
  "key6": "56i1UnazKCuRKN5vjzLcae53tjyEJGc6hW4AMjqkoDUWix62CPcJ79MjvH9Nd3xrYbm25cNqoktFRayXGDygopoX",
  "key7": "3EQ6Curh8hwputKg8AZZWwiRaWyz4oVAGzvZhHpifkvgvuWqQmy8XZKN3AwzseJqYGKd4sgarF4Gs6yWzdtoa6L3",
  "key8": "3oj6SXUdNBgoKUbML49Pgs5vH5rpMdVGRQSmdA8wXCjiZNY1LNHSoSyxFdZaundABU5MuKhQqFt8tR2bRWP2kEez",
  "key9": "4shoscXTqNrYFMbmtTWkT4dJoyrzHNhEkiwYaxuM5oLpxcFs5EvfZCTUN6wUuMXhCUf2tLXiqCdBxX6Dc34FiUoS",
  "key10": "2Vx7Cj6pdkQvHxDzRAuAZwTSsTJm1rpdSw5kKifTaUFX8kskGBssa4o7RsjvJKtaHY5EqBLBeA9bMauceGFL5S1Y",
  "key11": "29QdEifniGTJEhPiiznx73Kym5vipVKtLhD6J3zEmpwdnLoCjq6w9z2hrEg21Bug4fszjMjCZJC1pk4Q85eRSSN4",
  "key12": "4q7iuCQ1xFzzWyG9FmLutT1quxFz9PdiqG6dVwpLb68RqPj7fZ3cqQG46Eo1yhonjfZMcXLA5saJfvjfVgfqCUB8",
  "key13": "jTskTbwMwLEJ2jLRjDwLYqNuzBVJaoT8SJHEFQ9ykLfmVm1Qa2hEkMAGELd4itr3huGq3bVmcNjaxqYDYSZvGAJ",
  "key14": "4C3EgbaP7c2HkAZRUezAWXCiBzNapgpcaRNaKF5KeddhQWUUbWScoWs4LrvQ6iwUwpvn5eaWmcSwWk2ufYf5yr3H",
  "key15": "3fux1T5pt6ViEcqXwo4eCFA1dcmSsCsU9Fy78XFwHnd2N9EAL7J6cZnCeHWzvTQ8tGhaHCXAiadvNmugWUqHqASk",
  "key16": "25d98zKTvL4q7WxiLzMJLQ9F4MKAvrNfAPSkb21gU4KbQV5dMKevkJuDJbMKzjnNvXLb3Zzxo1SkxMjJbGgfDum8",
  "key17": "67rVqxiMFMGvv5QRMD7PcnByTvnNXD868dqfjMCx7HvA8qshB6NmaFjNS3gkcK9Ew4fH5mzskNRuFsjw9aE9ebGt",
  "key18": "5LMxnwfYcXLL1E4Wbc95CC1Jmdz3WnX1ewh4mmVid9tDjoAvVUfyX7h5ZWQ6ep8qyLedXN8iX2VxWj4Jsf1MCL77",
  "key19": "5bfpJmnRnKR2LsYsCVcwtVfavfGpsQRZfw2ZwQRbcfWiZKPjihw21xeGfi8Sm3QheZ19bYagf5AARwWd6kWjURRU",
  "key20": "2zfKEh4ou2ke4AnvYT13R1bp1eayUt7Kk5Tim5QZwJcQvLF9qNis7FTJECog7dHRDJWCpCjFzeHKkJFxzdWQdpkd",
  "key21": "3czdcPCBmKpthKhshCuC3BEmawEasJWgaWka49foa1TbjGBNNRJD71JeK1tZrD8vHyLZC14sBc62umoesyQSqELf",
  "key22": "5PJKRyvXr3AG5MK5tUGcDPafN1uBPHcV4FiEt24sCjrpAjGfVDA1xBKXZDyzqDbG72fuSSVhypmYRqN3vht1vijJ",
  "key23": "2g4sbmrh6mAb66JgZu3AjKJXFH68aMGfaM8QvAvfCUu3Q98cZRygZHsYF7a69eDGD6FcThREWBP5j52ogsDBf8mo",
  "key24": "LoLftyCZTxN6qA5hSdJgxxQY4MEWZy6S5qKrpw4rGmcdysyDSZP4GmQ91MZbre1VJFNMZKqJFcoUBZRs2uumf5A",
  "key25": "AJDMMbFise5EVFXLSaKg3TmY7pAMv1a4t3P3sVBbixKXSvRpg9vRmz2GNmRzNgfb3K43xBtGgQQUTuvXFUfxEU5",
  "key26": "37XNVfeeVuJxybqNhLEUMJQvVc4kYhDZLvkBroHXBVxqJ9Km5gPXLNQwTgFYwaCehBomXHLPS89X6Dts4uudWw21",
  "key27": "5zt8SnK1XRfxguTS84jFQxCtAw1x8K4GEgb9YMYVm8wNunuhaxj9nA5huNR2tsEkZpjf78ZtKrFx41167B72Sqfa",
  "key28": "36LjoeStCmkwc3L4sGffJ9St2SA8xxFq9rFMkyojtA19Xh99Jgj93weXxiJwq6PS3BDewnVUJrcZvEHWN7uCUH9i"
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
