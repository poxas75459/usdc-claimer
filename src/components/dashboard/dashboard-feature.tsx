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
    "BYHGfNSki1SPSpFxYMZhTUECDQe5bg6VgGm9cSueCY1W8JVfmE7pSC9dVyL8Ww5srjqMA9RYUhTwXGtY2SCuLCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6guVnizP6nmNV15JGA3nQdtefqTRrTSMWWqMRMZ2pz1Zfix27zorb44E4UYaAcB3mbpQ2o7SAVS9RGH5ryNtKg",
  "key1": "2eseg2eAPWNX2cgtdd21UzU9zKztht6wFXJnK6xXprnCN9bRo3gPupKJo7o3RfQPSuqXayPdKukNzRQa6abpwtao",
  "key2": "2r9Ry5ma3Jv4FD2W7xKCkFPMNwTw481DFjJ56gTaan6M93GjbHxf6pUBWtJe4t1jot8J8ABACLKFCWDfP56o9dgY",
  "key3": "3GDcq5gqMrHyJds2YBrFZif28zB9sETdZ9UZoUjduHAARwGUtVYsa8DV48hNrvaNhWQeboQnj8SD7VGy6B4NKqKv",
  "key4": "5xmddru8HKaK6knGHZtShYomdVcDtz26L8yxvhd6sFmTneUiusP3rH7uezyxug9c6uLBLaM44cUrwc4jtSp2Qr4Z",
  "key5": "2hGH1hcizaE1SDRDQLo9ggiki9QFeaHq1JFiXBqE62z7twVwg4DuAxW3kreKZoPzgydHhGAt2HcKihntaheDkuaM",
  "key6": "3XaPKitKHZ6sp6RBTBKBTfg8AsNvHGTaVaZ6rLpDGu9DqXntT9ozNA4VqadDEQ817UJgvfo4Wq8b5oAMKtNeuCzr",
  "key7": "jwxYioMBYeqmdqfcnfWZPvurd8YH4reqnd3afXWmmacHdPKs1gxwimdzFAFWKJF85SaVMiabHvQve7vVQFzbbYr",
  "key8": "2eZcSUDnRzYoMKtAVTRotbhexnoy5QtNwWWDx2WBCQkEEekH56gdTpL92ErdbfC7UXjHfn4YVfyqF8mhuZ84q1xe",
  "key9": "4ukNn1PA3Hr8NMcFLUq6ZmwBsWhMRKFm7V4Eob9Pxtxqt9BcNAxrfKA7dnAFASWb3TTcgn19SJFaRDoJ6SowiuX1",
  "key10": "3htEiKtL5aM6XLyB4svDKqZVF4LrwKC8p6dBvZ8Umyw3GJCUGcWmPfhbFFmsrgQS6WALgrV2rcYqGR6GRGwqL1B8",
  "key11": "4TaUHv9V4uBQigfdJkC2azmnRHf1cE3eppyhopWHjqMNvq5SpS3Cvaj3QMNx99Xn5dKaxY7UQ4JJVNz4VuufrCtE",
  "key12": "4RyJV6N7P2RounoSePP6g2XMxxgwzWU8xQ4vY5PC4wbLGfg9KfK9Ngde6xSioYWF1aWc6xJoBh22ZPcMfs6yAJmE",
  "key13": "b2xSCu4fRF1kiZ9U84ye4Bt5t8R8r43CKLLeMtLGuPNeDzSJdJDT1y2KSdGzWDzFCY3V29Eu8gcEZHbQGfuXo6h",
  "key14": "4apZ4uxpims8LGVn9VpiLUWh9Vr23mSB4pu4ZAysXyFmJYUbT7P6bQ84cUwSMbChJEKfZZFnt3nmDuqsYkcfXncg",
  "key15": "2Y9MftGZ8QFL5bFbna1nzoGnoA1gWarFgMvh7BTSDbwbouh3vwrdVmjEhzBY43wjnaZ5ot6AWh6kQEoeoA5DpJjF",
  "key16": "2VJN41rK9fkQWCPGUg53MFfh5nAsumFkYPYfyoahL313eRQeX6kGgBUkHYVHPg9Vor7LEqh4RubMeQdcxid33kdN",
  "key17": "28oGorFMb9rd1gYUDQHYU5aBPiSRzCt5VWFEvbuxSMTw5bSQB1aM23FAHKHGfsEwEqjcLGWr9fCMqVGTNpGccD5X",
  "key18": "vAWmvxij6MtrG2u3ro3DsvpNPj7gEjqsS1jnGiAdMhh71V6wh6wasjdiWGoarcGdo5a3EELtgRA8bWP1RA1yBeq",
  "key19": "5ih1oNgy1tT7L4pgCJQzp5NKjc1hph1LhKP8PtCYgHGkTJuhrqvxde3DmMNA6BvTvazdFeULei8T4CKpXYbRwrib",
  "key20": "2f2euMZ62GoaPkcGQrwNAAdgytTjAKghHgQ4vsUp1dA9gvYFR2chqw4wRq8ymBaSLvQs91Ag7V2UDWRt8q4XjFnU",
  "key21": "dQqYWA13oNQMbuzY6KjbsE7FVhDFq5LUrc7uX3SSwLqSEwDKZyTzXtBuYR5sJysT56yVRaRDkRxxmWCo3Qv32dc",
  "key22": "1VYLtw1S51vqbditQUDFvby1KdhaPMD4PsXNWiFAjxhzcti6whJuW4F2Gh33ryWGJ7dr7dURmqA9hj3orYojfMf",
  "key23": "jRi93q3pHabywJzvVDyg3mF25Lut4pGX3UeCWyuCca6KhixL6UuWA4GoaZv6EsjfxC4Rqh27eJFTqMGKaB9ZhpD",
  "key24": "3VtBpu7pHi3t6yViyJRuiz3aEbv4Dbsd7jPH1QrNMAkF8TJdwZKVY8Lr6EbrLK8DyXQBBPFD9u7oNDUhNmgpBaVh",
  "key25": "2ydtRhXKwGH9pvMo71xFiATZcH6nvpwJvRbDwrzrgre3EGWS3ZzB1jGquLP8QZJ3JicNNt28kCnijQmj12LU9j4T",
  "key26": "3Qkm8VAW5wC9Cef9CFFQiYzuhU3CAsm6L6xy64tJRQNPxQfuCW1jYWfANmiashZz8NMPyJJWYRUQeu6FYdbGto5C",
  "key27": "4sNAjCWQnZDfnuXFFYwjT7ic9Skx2DcYUS9zyJ9ricn29tSxo1Bxd69Sc8FRzLaMZechurM46joTUMYtwLXuPfRL",
  "key28": "mND16mzo9NbkGMC8VU2eTbXnbdfUyMTc24TDJXWFdMgnS2ZqS117WrhcVgh8p5WCy6pE2yDzzhcphXTzXX29NXj",
  "key29": "5dyqttBeQv8LRXm1Pnph59pEiqtMBCcS482T7h3ANkZr3PuotriyqkLkKRp4PodeF7iKhDxDxGfa7N6DHLvEQXZ4",
  "key30": "3ecL1DmKSzv4Zskc84MTr4JdubkzqKHThgiJ5RnUyPTrKaq8rEYmL6CrkeFgc7DQ9fhirHRfBp7TVqY4UA1TVisY",
  "key31": "6A5121EPnm9ycEfR4PdcqGcBSWc5GmniTKGHJ2WutP1t4HkduKa3f95hKswEk4pQjwTv2FMGjnZhCFaHnZevL2g",
  "key32": "4kKgizvrAH1XSfFBrGRHfDeEQ91CQZMpjvXkkBtgiL5kVx3aNSWwHxEAcbSosCBdQkWRnFVpZ1zQJxUFZG2U2Bik",
  "key33": "66xn3CT8Lu3r8rhyoKBPjbnG4nKqBb2WCcghUctQ9w1FYwi3Z4TyphWownPkAekmH9u9zHoZoBD9ZPNLjHd1GSUY",
  "key34": "3KYeWogiGiua2ju5P6YDqhhW4zCgCBv3NrRnwyU3n2fjvQCsQrHtzc7Q9YntpVqRr84kwJZ7hMXaG4dAo7EUffTv",
  "key35": "52rQ8Xg9p4a47WKpnXasipYjepnb3LzfN3k32jz3JuZaj17JU3oUrLcUsuLw9HPBnjWgpje6rmvreK358Viqj1Ms",
  "key36": "39PuAYBuL3qDuPQnEe2bXZ63hw2Vv8KGm9ZcZFrhEmQLW1NMcLLHLLPGxABkFcKyv2FCB9FFmV2XEJSR6vM4Vtof",
  "key37": "3tyv29WFhuYsfsiPoUTJ6qn1R4CjzCA5Hkb1DzVyzrMPxfAaPyQWLmmxgAW7HwMeiMTD1hUSg27wQg6HKNhLCZB4",
  "key38": "35G5VWhbnL1te2RqXf54G2nFmCxwF24M5sz4hesD6vVSYz15X8oskRdvdwwyWABNeLCkx3385WeTKtuitH4tWZsD",
  "key39": "2d26cFe4GaXnUy6C4EsrE84sTUxWF2Pr2ApFbU2iKQftYn169FX5a6UfHrqtfTFXjMo8b4eTKeoaQemhiYdAmRJs",
  "key40": "JcmcqqXzzSoJcDZoHkxSvnofGatPrdcMKXwWxU92NYxzynLn8B41SdebY1nA3xkB8YP5NfHgAs2AKc61cREMipy",
  "key41": "4YgNbmE7DcJJEG75VUKSLk5MWggec27VwYZuGFio2DV8Y3HrCVssVp1SwCm27XmfeBjDWEhAdqsUV9QnXao8Asnt",
  "key42": "3hF1j6npm4ZU8gY8qagkKxiocpSdVn5vcJzs2ptL971mXRFWYJsyefcrEmwaRzo3ZboJ5StarHKHAEnnUsGSRPbe",
  "key43": "3xLfYmWVb4vqoKwzEC2eqp3YdUdL4mxq7QP91JAt7XVumLFMdHpFheW557eg6EZQx49MMMWzpEuyxgwF9RaEb8nm",
  "key44": "54oqG16PE2NLfPXqofXkHxJupP4f4Sp7RcAeHUYaoWqKwoS3uiak3w3hkuetbJhFWZHW6QyDaTM7zUFqomd6Ea1K",
  "key45": "2qSLoCemirzPt9iVqJxaX4uVu81UZaKh3Rdg1YQfUBdxh67URzVtNtL6pEXPtP8LrzQfS7PL6a8y5SuB2faU6ZM",
  "key46": "DG25iX6qBZ6vZbE4AXJb9Re5bZYUhH1B3Wy9NacB2ZSk6sDQXta3fAw4q7o6v5jNt7tRQR9HjVrsB3cKgSBatKi",
  "key47": "5XviGnJtqNyukwwjybkzCQm7t4zUNAi4jcn7fQJxtEZeG9L4Yai19HNdeDudxgZiBeBCecGM24zhfQZM3XRCp69T"
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
