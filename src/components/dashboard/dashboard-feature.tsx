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
    "4Xy5UEKBeSxHQbVFMYgR4qFQnPRrb3Ji8a8gcezjEqMNM7ikNowxFoQgSsSVfmh5fp3abkFoXNHk1cVKwxzDKjdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmkfFqr4C5WMHu69SuHKAVRqGELmU2S4WCBtRA8uW1MSier1MDNe3RYdepTTdSCMj6W4MgydtQGnA9Fy2nUv1LZ",
  "key1": "3x2Q7DmzHyWQzXrpBdwHqtPb3CSfRHzvFiZbAF7tFMt1NfC1BeAjCSweXZ9DzzNUUtheJW7WnfNarwEdo7vJ8enC",
  "key2": "7qU9CtsnF4sLsGo6My4BdLoPYticTPpKtceH62YVRo8wLr2dUbt5tNsbaC2EEKNnpxAvZ7rMWFNeT147YJdC5oi",
  "key3": "3mn2G94BtEvHzcFNZu2oqVDwBXHpCY3z8tMmZo99M6VijHARvxsj5CBAggq5PiSNBaBTUeee7W1kmzUiW4MUJX7k",
  "key4": "44ye6Q1SKjrQQGY3Pc6cxoGdgN5EUWrpbNJBk59GcyAXvjeSEGF7zEtMhToicYHHgMQEQkhmEEiA61FJQBphyjMi",
  "key5": "5S7yGshHkUnvxCik7VpC5P9TPzVdrojjoX6m5ymWhWKq1znzEbdAkWmm7eqpJ9B93B3iLBxcc4nNCzVEdeUzu4iL",
  "key6": "47kiD8EZDqfu4iAuiKRtLyAjUWL6vQyNVFfkZKsAt3FDhcQ7FtRio542TRzUkqrURFD5VQtkbp6SvnfHVwr67184",
  "key7": "4XN43QmRyeTJUU9NCGq4EKFTuwLVNsrUFbd4SLbXvFQeKt5CSkZQQgpPvMt2Z8vLHM3KEUddjcrjzaXx4w27VkXZ",
  "key8": "2nADntP3M5LeJ3CVfakuPBFdUAz3uninJv6ACSnqJGW5Gc5J8K6abjte6hqmK6Vfog6jhpDzmK1r5ocz9QuKzhfT",
  "key9": "2qZ2uXoDzizsAG3wagWGArbRbS6ap7mnubxt5o2DUDd6ZitCRxF2EAjcjncq6jUZduPxy5fCGWvGQEnzCWbfhzrW",
  "key10": "2qnQyEXAPsjEqQpzr49yrPyPiodjC2irxFLrVs93g8E2fj1w2fZfDmRdMQLWoq9YghcyLZGpSFxvgZfQLC4ddVyL",
  "key11": "2Y5YCCXHz2DBdu4hbmiVeSTpTKSJdU6n1m1kcMdNtwCH2Kbv1Pfzy9Wa14USkx8tF7GAVu7tDTfEpSpSUJG9QMWu",
  "key12": "49hrf65x3crnBpUq48d8bDzc7gi61bffjdNwkqsCqwrsGU2Ye73sxCaaDLWg8N1aYbYzNkY7CURN54W7YHtsaJ7c",
  "key13": "22auMEEycnnn8UkvBuUnzYoAPva2Hfa6CtvnPuDEfCnAnviRLHsJDTtqXGXyqFWVDTigpoKAJHid71yUmPwHdywW",
  "key14": "pCNDMzi3fBJbqScMWBWJTcB14BDQjw8xw6pJLnENL6nE4RnhgAgtP6QqZbSQGC8Dgwm2x7zkDFQBM8DnfdzqJRi",
  "key15": "3NbkpuASgaKhpy7vpFkotTQ7x8CPSVUG4cXrjgTpiZWZvka7vU5sNFjndFjxpBrxtW6ysNzgmvmeNEYrfPc5H1QC",
  "key16": "3RcQ4eWy1rkfyvQqj4MfXK33c6hbeqiF2rnDC8GC6rFXfojzYCSjwSKSughqe47NL8pQqcSRMeKvVcxy99xgGCdV",
  "key17": "3Z8VodMLrggr6qVNQwbCvcBMMiC6eXQwADRFCc8pNpW6Hx3FxJ2nFZfpywe3i2ex9fWPaCsJuSqr9xmUnDm5MdoL",
  "key18": "2tBoUoVFdYw4MBe9a3AF8b22M3tXHKvUx59UYa6dJPywQrqqRjYGSeLKTDb57L1CYzqR8ev21Z59N4Qkj2gE5DkV",
  "key19": "3bJdFjZhaCGiVa1t8ZAgQQrE39tDhdk1tC1M5xk5x8qQoJirc9Sjkv8zvzVbEQoVzRu432mKT6ajy2ePf7z55Sp8",
  "key20": "3Pyv9eYF2jZ2Y7aEj2RQQxZaF7AWxFs6TnPfpVAdTfYroPGL7HN8ZkL3w5ac6KvwasWNWjc8xmwSoAk2LtS15yf5",
  "key21": "2RJfmJKwbgH9SEDeJtNFNAyz4d4dG5iVggxUr8syZGmDiM9YiqA2rQe5MFDsRPY5DJeQHW2AD6NMVBueYjooLiH7",
  "key22": "311iknp2EdcRnsPdSdYBRaJqTE1fAQaAE4hLJUSfbAAgcgLw7VzbqA57idcZwhz5gjqF2PBrhkJhj9DLzSw8XrkP",
  "key23": "4V8jpFBJnm3u1ZihMhZVi8XE2FufhdhCNJ2K78nKMTLhG26wz2c4bGf19VjbXNUQzfEAiSrVqVVMfQG3raBrUNjE",
  "key24": "26zNn4auC3yEmMgu6DsXytsj1wkcFQ6WWLDPtd9USaCixWznFCFEvuXf7sK7PPkBjgVH1XduRNrXibwNHowpZ3oo",
  "key25": "4kHBNT8gqaAarDbW1WZpLeT8f5yeTs25sycuiDM7wmYhsyX66x4FJCCwG1YRpAPUu6QzUWHYQVeQ21gNURUdxQ3U",
  "key26": "kBbFCRdp5SvrkXsQvj8t6zhvqWM5hyUfyyw8LRqxHtjbsD47LXMEi2k18GkYPrJ5Ak4hmwhpV6BZv25PnHeJCtF",
  "key27": "kGQQNNqtvw78KpTuZKzWyzmyftcMuG67s2kuQeyZ8PNzanvh9ZEKaW9L7sjDpau96dAq911AD1tw9YppAe7JLyB",
  "key28": "5tXJstcyh1eaLBpJwitmvc8vZHLfY6SaTf1KkiCLjK5LxqUns9Vj35Nf8SFGouoGvssHqygKGMUNt5RxsQdJHKAD",
  "key29": "46G5cTuCfsMNY4gVFHTPWJjF2dMuh82wb3GHoMq6oKYoALXqQja99WC8s3MPGAEFx5eh2s4LyHxheQxR3HxUBGCs",
  "key30": "49ZqgEpgyjsxkPqdaTKs8HGs824AaASHw8ETuAWCZ7qFJpvFGn9fLjmgWS2wvMHXDrq2FQm3nA1iuaZH9ysWGMTp",
  "key31": "4dcFkg89Vs4DzAr1GdguPK4fVZfa9HdKiFD7Nmv6UiQt451svrr9CEAWvmzkQeYNQ6rXtLhjKtARF6iHtA4f2c7V",
  "key32": "3BTvGtwsRKM4YLBCQQuNT4NDLXEonQkAFPKwGG6jDhm1onGTe5SV6yuCqZGXhQWHmVAQFUH4LfboanmNMkAbrGoK"
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
