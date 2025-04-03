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
    "3okCJTxutZjSBxMnDyUhobXVRRsCah7z7ozF3Ls7BH3mJAQDrZDWZ9iu8WNK7FfGH3jSbjCNPi3jbGQk15Da9veU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVjk7wT7ezKYDvCCXcHaGUdW9aDtbW3CwzApR7be6jcb5rfHBWEZ8oLbjhxMhCgbAPVFnZu2TvzfC88E8k2CGFw",
  "key1": "5Achv4XxFHRTYkVeRXeWugLM92W6gUaGu23CPq46UrZhwzLEXYWY8D3jX1NNFf4n2o7dJwLscpdoD2UxjoxrKbHh",
  "key2": "5x49jHELs6zuAkX3UZjKeyUkrTydBE6bWVsEX82vQTjMbXKXL8so9eSWctBjBHzEJhhU2B5UzD1PgDWRCeLyMSXF",
  "key3": "2DnjU4b3eNRqpJio9gDVGPHZmrY7Ej3SEA9JyJfZ1V2w32wqMTYZcYypi5Ku5mStEpxKPh4QskbE34ZVX4xLLHCb",
  "key4": "U82kesM2tUeUavv2VxUiUE5caFGiAHLffPSNvrYKHervfYr49MWmcW7cqNP29kjy9CgSP3Q5QpNGp7wb7qKq9Sf",
  "key5": "5o5YBx7bo1VE1Qgrf2RDbUS6xqZaCN1yaAtHms8fG7mh18szQAv183fRDCCZ9SQxShqrgurYtvyYruUWpzxTd3zw",
  "key6": "cS4dHPiRv4KnqpSDVyJQprF6YxSbyNgdXTy3xoxQBm4ZH5tYDrWuvACC5Tks1qpaXrh6wfzFAL7LEx44u6h7AR3",
  "key7": "52TLt5fnzZDEgQSoyMeVY7C4VN1SmWAFpGAKFyJBLhN8NJ7fEnBtBe5e2uM69RViogWVtd6NCRPMGxNRaBuoSdik",
  "key8": "56BL4pEDacaFyvRRZVpeUEeBw7HMhJSTZsvxEJDDxWSCQxR4tZPmnxkzG2YE28HS2eeAJ8efT8JWnEVvmCZBdUP",
  "key9": "ZFmNXr5hfqK3HyC8LTaXqvPq3CBYU4ybJhQHZKiX7u3ZRmQRtqKEUF6LFyCptrH4vhK9edAUrRGMEnxxFCoaBz3",
  "key10": "3sXUC2ntwbTbJkmti2RmeMWiFHXmY355Bo3yZzBEW7Ay7Vsh1skuPESYfNg8schwzswNYf9tuLxNWxy9fQEXjiCh",
  "key11": "5c7Szkd1Hpy2U6jBfAVLJhQpRHPrV1vGwiaNJbLSnDhX6gGRHX9ypxeEsheSyRumBsW7k98zR98tdCHHzvsgUDVh",
  "key12": "LdGNhp7idmSoWH1SrxzvFN6qyfp917LznSp7N9dnKqkBjiSKYXBPkZ5vvggk4jkriPQTTHH5ApFAeNJLqAGDmE8",
  "key13": "3HkDoyJBa4Dm4BuZ6zhXYRo9eogysKUcaccAsps5TfCrpEeE8usdg9ixJFKBbhNsw4G9zBt7Jm6ehWbmKJF3sbgC",
  "key14": "i1vM99igzqHKvmih3WH8Pzg2JFrybeyzFDJ5RbcSYMacqCjdDWbDK97BHWM25QEFxVZrzTY9qSg36S6gaGScpF8",
  "key15": "4BWkPy2GbBocFr1mRrmxk8VsjBnQo54DXDZ1GEKSfbzCPsTWfxZQxLPhwoQoYefqXT4r64K8EkceWifqDRy9WXmV",
  "key16": "3Ta5ZHMmGviggoA1y6CK9ZbpUF5ydAZiwHdRoKuMm1BU4eKTSG7grffNo3cCQ9eNQAicein7zQa9H6gy9qGnR4Lj",
  "key17": "4VDDTiwXGZJ5bVtaovS2ZjqvQj7mZYwXTksDqz29M9S78XtuE1zL28W7fQzZPhyh8DiymSApARJHK4mCbAkQhvRL",
  "key18": "5kcWNRprT9n9DDiGHbhmxdCgMP32Ms4fZY3YxkNXETP8rNAXmkgzS9F8NwmdDSfQsrBj6qGUuqYA7kVcUXP7whU9",
  "key19": "5HRY1a9gcmdVx9mqRXfnmwJgwF1u3DsNif1XpERRsFoFi2sNTbLAuYKVwvb6qbQhdkPQxpYpzUhqKXSTwhKPjKFX",
  "key20": "4H21nm1DykUnDn8DX6C3tZLnHwFcYQ97HD2N6pdq3GWtjbk5fdmiTd5dPZph6mVS8LpPP2JyXMKsxqBxyeNaKZeV",
  "key21": "5smK8jKjJbZSSHAVS9jNscoLKZ9Hkf55Zb1L5CaZ7LXhjB3pgFD7M5ApHHTXkHjbbxRkNW3PSFmD9zdQZjquVscG",
  "key22": "3p53G3AuCazPkPQBWP1Ys6TUEN5dFrvWVD8GmASEGVrw6TtjtDnGMgeqiDEEqmZKtabvJUpcRkYgqHseFLhDASUQ",
  "key23": "XSWxxYdT3qexEMLAJTM6DyshzdeeMSWXvT5ETNukZ8Xtkzuayq8ZfqyNvNbPw6WgWhr1fczZEwwkMGYYSzeDc3S",
  "key24": "3SuZAC5imHFUZZWbd1MrVrkYRKAUB4BdM2RKyHbSz4Ap3eWUP3a3c6zqBpfWsGG7jGnE9wr7pHznsSz85WXwvoe5",
  "key25": "5nrkwSn53fhCnK9n169MYatAEEoNBnNpNqJobZbGhNvnNiUq2acJ4DZDkmESWaKvcsk2397eH9UK7PCefeTJmmAw",
  "key26": "2w22kN5Nvt52dz5iCPVPQx1yDsds4DLHqDwzNMDfbrz2pX2wpV8kazXCnLCmJ5rtvsod5cYSwqkXtc7ejTx3be1B",
  "key27": "2PC8v5EWFzzersX2amr1tHTCLJ7KWirKs5UV1ZreQSrSkVX8n9BMfLHT659RmpGkA6ZjsYegCjMMUitrsFjLqZXq",
  "key28": "KpfZodtRodphdv8PrR5dwriKadjZdH2288XRxyxaZWZnGCNq9NvZTqaRqqMMa3bNDnrsSwvsQTF3tb9zLJQbBoh",
  "key29": "n1w2saNwxA3w1958zsq3NuyPSJb3oWApNCJg359LG8MNVcaPL4ZgBp5sQgeAk4ePk9i1hCRc2psZJYgzv6A1BCz",
  "key30": "2Fctei7hBMkbQatzXM6GSaUgDBQM9nKMUGcYXWb14AMw2z5VySeRk3zvjcDpBHJAYm95kyXA8Cs585VdF6vJQgMK",
  "key31": "62vyKgP4ZbUw46KbevzLczye1xeUSgQJBgre77CQWcAQ3ywW2Cqv1QHpadJHL3xfZdEUZDQRZzMzuCkP1fWxiX7w",
  "key32": "s1isYtPwY9YaAcXJAyKNYLduaeQi8V4BFTiJk9EYxWUUQoFpBGLdfyu593t18571Bj8LQfphZCCB3ZyqcwuU3K3",
  "key33": "3zHL2CueCrKDiRvkgBJxcPZW8kNrFwYys39iUxcsS35ES1uG3iruXFJ3SRfQ94Bnn3ZYdmH85pV4aeh4zuvgExpH",
  "key34": "58epjk12CyMHtKcmNZSjzVLVVHyvbBYJPzdxfpqogz6BA2p4znt4LYRuB9t3K7TutKz2p5pHa8pfqmwo3rMtBwK",
  "key35": "KTK4K3Qm2NCHufJpw45i86VVnoj1zRpfJ8qryET6Sp6XwcQBYaMMjJMHonyWc2wHbgewe62gKyhRd6H8SAwPMuu",
  "key36": "27j8hNHXw2NeFUn9ZWXbC67TcdUVkrbcRGJ4Sw61okXr6QCG2hm9oXakWVvA4ZD8ZZ3VcvasH7p1BaLogxCFGKzK",
  "key37": "5zeDig5SzEPgdgCGM6ZsxPVDAtPhnU6z4XNy2Rz5idKFAnTpwL9XjSKfj9guf58Dz7kePwDphpWZ5JmyJaiXEZWt",
  "key38": "5XZZH4ojZdRK7eUX2mgt9NShjhuwuazs1CMPvprAvCTUJo9RVQ5pnWbd9KPAp8T4VdV5kMpExtG87oYh4qSoRoh5",
  "key39": "GSdbMBiXuiXEdyR7PW18h3qmv9GYzmioaUeXZPzyAoMWYnqZM3WZ4hMrQpYA5JjPsMV1rpxNxqUqGFgs8LLLr14",
  "key40": "3nwy3uCnyAKcFzFEN8xHExMKAZy55Hysvo6ZiSf17QZcajUQN571YKqVU1V1rJkEJewsePegqFBjsTaArVHQZN8m",
  "key41": "8WyRCBGmzZuGCG2GAaaUmHbBHwqk9B7QFCZpy9UGETE5za2px9FHbAt2amjmH5GocA7xXY7gx8VVaYJxHbMiukM",
  "key42": "57Zz8csJXk93hn34a4yoMreajaY7picSqnF5JqmasFJy8WQCxBMvL2RWugJSsyww3SUgKijaFaHJmoAkWYVcf72v",
  "key43": "c5S19X8igXpTnEuxPaeg5EixNUpUw1iVsivKv1r8VgpeHcQ5VpSmUijaKvhUEJML9pWSWxN3zNNvnvxUTLtYpKf",
  "key44": "f9QxCv4F2uwP8wxqBGuiTetPeJxZyLnGN5gUK2D9TrSuoaZxbsLXptUVxyagihAfZbWdoZW7GWzdzCZ5ncmq2eU",
  "key45": "4hbKcCemTPQvVS1n1SMS6LCiWgnTX8a99j8RJ2dUa9HoomHyXUTxa2nXf72LaProcLQc5AqDuCkBQk8AG6yWcf8s"
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
