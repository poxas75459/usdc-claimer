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
    "53j9RN4vD3a3YPcKbesDXGhMCTieQ3qF6EjsphbnKbuQauwmQjiwZXmHevuAaqVWJmcuqzBCmCRPnXP2xzUyCoC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ju6Ay2V5dxB5vKnnFfQxdxDvkQxQ1cnoBoJJN9AxLJG3C6M6KM6LDNy51NbAyKtkwqsaesxzLa7DcHW6iikCjpp",
  "key1": "5JcTmG6PAB7gYUHQH3TnmwBEjiiriUn1YbsyQHqheZharyoLexUzi1nHsFoFjx4UhmrAoFsT1fKu3TBWwHf3J8GQ",
  "key2": "64gNMyuYnmNSdL82x2hBTMuD6QvHKfLFnVhdmwcVVoCMiwHMZKVTbrVRj92H12Lw9t7DAYC2SurhGcij5GsigapH",
  "key3": "3P7JwnWSxH8wmuPWHWbAdaAzdiRYzN5tKuh8yPNHghtrXspEP7ST9GR5dW8MdVfgXj4sMahatKwM2GpdXvy1aR3R",
  "key4": "3fXKMK5Z9HfzUqrtAfNLQjXjPMHZMELv5z9dcot6Bgi5VaoxkkdeHTyVYcEQ5Jw44EmKxwhvQRJWXvCN11q9XkyQ",
  "key5": "3Lh3mSNB1R1t5L7W3jaZHPbjWc5qoShyYjRt5ttczQm2JYzGz6zLiFCXy7FmQxpmGFH96iSLGqo85xHEQodtzx2V",
  "key6": "4f7o3MZXybEkjsRFAm3YuhErDunQRap7KE1Q6h6UiTooDWmpxwtEqT3JE6FJnQcBwBQc6NMC1HFGp8wYGhyhWY8F",
  "key7": "4YRZwmBx4TjANzKsZgpLmxxUdbjucsUZKbf8UworunMaJPqPnoHxcFECnAwCVeXE6Lr6XZqChbmrSsnvAcMuUdxv",
  "key8": "3f2fxQBG1YWuHZS4t8LrqdQNDPxS8yZshWPB8qUtMu6j9Z6sBoWMy36SzL57r2XYKTUZWAhyWFWCaCnF6hk7gW6S",
  "key9": "59LgFErWaKmbf8YMSawUYmcA8ekcftL8HnpRU23AbYt2uPpuXUfvfU8q2LP1tfft4tCW2W8pFyEYEmmKJw1W9wnW",
  "key10": "5Qb2gMZXfWDqq6x2FHqUUEogUDrs97AhvPPEmh1gWMP34BipGLBLqJX2Hh291sTq3Cpsa5P8qZRht6pmjQVS4qHj",
  "key11": "29MHo7g7TE3kC897a51foz3jL96cNdHqXYR4W996SXgs3nCTe9d6NRJaGRY35VbUUHzicWd6RE9J7o9JyteLkKub",
  "key12": "2dRH1iEh52RYDoFmLmUFQyjGTttBBTmNrSoKoq5pEuTyBPMZr4UWEcdXiL45sWWpgQDGH8FJkcFPA9aqsjkgroN9",
  "key13": "3PaLrpToVMTWRYZKB6njBMCUDh7faGaGbVk8cxDjNpAmReqTMX1mzBTMkrrTnagHqg7qEfZeTYHq1faS1AyEaJiG",
  "key14": "4BqbTuP8yYZXTKFTN9m54GypX6zaTdV2GoFsRYgdr776Ac7Khods9ENm4EdH6fgDLQ8DtDQ1iL71gBmz4SztxwYn",
  "key15": "3biERRcWK6nvDfPgouD8jYQxDaW6KwAX7fKtBVUyCssrVXnazHRozqCBXKMkSeCej3ahzYWPkVEXrUzFZbAhjTeQ",
  "key16": "3oZLuPyzUGLSebPRAHKNCMQEDazRdfcQ4FR81yVYdsSo1LZ2dkKpj2514zE3DyLEvwBwQgNXfeB9CDT2Gku4SUg3",
  "key17": "5Kn8VGHGyV87N747GExfs6ZxLVWuNr29DkUbCviLBNBcZmgxESPVEGfr4RKqy8ahsMw1v6Va1CBLCmHbnT47uEoj",
  "key18": "4YJjNktmtdur3yszxk7aWoScr5H1zFPx1ZLFE984kX2qLxzzscYeJaPDVxSJjUG8jMkxG7ExJctNaJGVKhjZMubp",
  "key19": "36HzrN1AFPLYX2Jx6buy3N8jmcNF5naNr1fedJi6snKY12EimQExNZxe7Vi3wmReYqj5GQf7hXnXB9TKmrsiYndK",
  "key20": "5QHUyZYjRARdDQWAs1JaUBKdPzV6LTb1CXP1eNPe7rr7TtuZhMkb8GHJjtyk5ZtE8VXajVF85Ydv3XcGmNRcByLJ",
  "key21": "3HqMxMdJFjDEmrqDFECWKd6Kiz21qyRDWNhUwok7GPbZUUAPdVyrpa2mHmwmrxFb4QXKbWufXRua5wuZH51PXR2N",
  "key22": "5WhR28xKBRQa4pkqHp4W5dg6dYv4Q1Vp1PrhCJ5YpHXkT2JMA1yYxBUXfaioGZW2mEbpGDVkipgrM3HrMGZkhZp5",
  "key23": "8WR9kfEFuTmey5HYUanBLayfjSvM1Kps6pcAwAJsNpFYJozmpx9sTLLhgtZh5dkzyrxw2VzWhEyrwS7mmZ6LuCD",
  "key24": "3biTAjPFVzhtZ2R7pdUcNJPm18jbuKDb96BcrE8mraGUUdyrfJHRzLrY21SnoyVoPA3JQtGXaZiDWNoAp4buKa5q",
  "key25": "4noDkPf4GPR6JPk2bKy3pxMibQKcyH5vhF1GFV8WL1F2HHNMZzbgQAeBcCunnsPLzNDQD7GGuV4ewiSDiLQvD6sY",
  "key26": "4QUHeisTmFyaAzHa5oEwdAUHjnFE5dHMZ6ZN1u97SrywJEVX4Z5i3jD53GyMymNbrsLShTUWWpgRkroayK9gXit2",
  "key27": "2LA9YzAbtBXqqDgXLSYGBx5bkvKAZVepaouxVpnG1vPYgryRCh3zxo5HxFKyo4sMcRPAWUU7KygP7uXB53HeagJz",
  "key28": "4Eqo9C94G7foPtJ8ixAJubeDWcKvFttGNa2PJyG7MrKSJJNQSEBmPbpVbTGxwEuNxs5PpHqae3FVi3VpEhG9axgc",
  "key29": "4CNesvbGMMq682dgmm6AeVGhkbDJg8XSm58scJUxGMtRwBDs1UrVABtRTeDUpMv4QSXepNXrRU7y4nG4uqPEon6e",
  "key30": "V45g7SV4KCJKUgzrEgyjExhvGUwNsa55edjPNcDNVhQbkiMdusg3ZiTvxpEeA8P6KJzSBqkyMW7seRc16S8RtBG",
  "key31": "VBkob8z1wipwrWrPUTbAd2Sy9s1kP76uDQ5hN1SrXFA1HCXg8woCyva5vFYcutGBt8Gxba2nVSoDe3G4se7kTJ5",
  "key32": "CNrbWwYpnWN9swobkXH2cJ7kpVGYeXmCywyE1t9RtjPPvjHyM5s87HQTcb9dxjBCnAMwJP5ary97FU4CZ2S47EN",
  "key33": "pPez7pFFaTnSHqxiVorXRHQGuN6groNcmWoCsxbvZUjQ2TR6pGQXMg6MWTMvL6zScQLgVeJRjbichevVF2XsC9M",
  "key34": "4aDN9eAJixC7qsriq6ykYWibsLpzY3LiRG5bsYkg1Xa26vQKY6YSWqgAE2LrwSeDz4BEmm5qNXHYrEYVSspjPQSr"
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
