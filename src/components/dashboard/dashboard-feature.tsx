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
    "2WQsR5QvAWeUgPDY57wy6RHAqRGF5UzB2o3mGKhqFXM1qG4ZCUBDKskrge5YERoDZpUzLoQdLpbPSAVx2vtYzs9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4eaLXwQJRgaKck2BvEC8FWNy68gydAikCFwfrPfvw4ZBcZBjNL3gMKPtHyPtAqMRrtyQLDiXH2fphNLv96Wb61",
  "key1": "5FKScqzd1bZBWfYv5Gc6eB5p5C1S2f97aCndH4nX5Jp5m2TUGnmW3EJLNGio5o8Qg2ywihD4EhyTtW7EhKyggzBi",
  "key2": "BEnP19JzdoaBaEQ1Y9TgWhLGkEewNzxso8DfNvwuaTHwGQ1ywbMqqU3YDugHoPeaC9WBTFxhkZC25z5k8nYQ3H9",
  "key3": "H2qrQZWPq1K9zDWZ9GETzpSDTBTLCEmTq95mHZuSbm9Ad2qYwTcDkqqMvMcU78gRk5LfJXnZXjkhPjkauMiNBrE",
  "key4": "2YxdqJbg6w74eWMVQpNf22beNtPExUNLnRucWajH7yp9svVLgTeutyof9TeBeLiiDWwSJ3GKrrt8RyMik1kak169",
  "key5": "3oe7qMemtkcbBdXKprm9nS2JCt1x8n6TPwhxuiK5WimR4panCNZNy9DDZdz3Ey1aF4RxgVP1RkzXrnL1KtjVLWWT",
  "key6": "TFFAJSwr368Vo4xhRn9v3s8ib4DhHC5XGHawnoCHH8epUoePN5h3WVhG8coFQDypZWPvExWEbQQxDjSoozzA1Eq",
  "key7": "3MiWe17DbFrMraVa4j6EVG7y2BGRg3pwuj6u9tp3Vm8khHG4xkZFjub837AfyGkJ6VFgoDyXVHLNw5urPMUMnSaV",
  "key8": "4KZ5aK2bPESgqWEHs49RRPAwMktAwsuou3qhBtnzixagL8L9xkp39Kcr8NFyjBsjBAoupYFUQLCmdJEp4oeX9FTw",
  "key9": "2WZeZCcEAGuKGHJFEuKPXZ41ZAdDjsYQcZBqGbHwy9A1gGLSJXWmXQnLMMxrpKRJyhX3TwVJfDSD84CxBAo7LEEN",
  "key10": "29JZues6HUuqsDy9N3WsrQJ8CGGphPXx8XdvtoWVBavSHUA4BFXRRXccJLZhtydFLXifTHChKJ2xXUbQwAFimJmQ",
  "key11": "2WPuHbmP2cXgoMe5hhNureBfhgGawqBQBDoFt2H2BkjjoZphbkxTrmkMesotTYPxYn1VtDSJZz6wdN3hK4aacyg9",
  "key12": "675oFP5vpCtHAjVBmvp4i6zK8NjBjPjRasFKjE5CiwZC1PPCFV4M1WmyV7i8NtKjiANKCCev9Zchxau6R4Fxahc9",
  "key13": "5eqeuQxmAdSMc3MnizkDG5X676gaqEgvx3PvvjAFg9QdHTU1qhD6hZkfjYcYh7XhbmM8WUcox4Xb8YBucFtnPXXx",
  "key14": "5yqgxt2FiwgxAzkGoA21jnGdJ3FKfckAkWkM9uPkkK9YgSrUXsHJQ2ACZyj7xs8ZWxnXXWvApYTQCpspiksjkwxj",
  "key15": "4HCoh4CpG7uvNLEupzV2diL5zgLE3kdcdap8L6y36LucjJ8FMQwzDTyKW4E2Lqgj7NaQSQ3iLd4ebCEppRBBde49",
  "key16": "3SNZq4W1AGea48VkL8U4CZgUe71xz21WVnhfzxLmudTM6r2RKECbzk7HseiMZsB7ur21DWsUPCaPuCox6oHEndMJ",
  "key17": "42nasbYTmREvttgAGjro4iEXM5d5F5MYgYnv1kh7TYLC9gM5PBiQA7H7JEzAzMBw4Ex9pr9iy61CJhNVZHbmjjaE",
  "key18": "3HJYKhcZwpeBHi7FuzsHJHYyozNVsPzwjgPHj5nWrXse2fV6A1BSDhcRzfiCgx2SHHNDKMj7pfHv5UpHWh7vAHio",
  "key19": "41MSNTKxCVGrbyDjZcaUpBsHMAX3KDSMX4ZN5pmPXPgi4WvFeHDjJYwAwQiWEoaMcipdzJ7RiWK2bQbeZSwopWbt",
  "key20": "q6fC19FXv8kurC454ZQ6KJ7GoSQ3ChhZ3Zijgjajaxa1bV8M5MUqTs1Vxd7zDjHsDFJF96LX2oZdkgZFnxbKFrA",
  "key21": "5pXM5BhsYtC7WNG6dh76QMyvRZvJrzyxYpyt5Nh9yKHsdHsP8u9UZMF48XP3xtRjiiRdPv1MrmGYx59yy7DoTy1d",
  "key22": "4n1FBZtXWWqhfKbjjcEnzeg1dhXPYMBYCLVtPVxcJv6u1EBmh4BY8cyyRJPDhimzBXiGtZ32k8C1642bCr9WHD2j",
  "key23": "HDqDWNdkGXhwCKKcEGK3HnXLFoDsmEi2vkTexFC2Wq6DymbG1ezzYj3v7cgu3ZQgRHoUyozDmPg7b7Amym2NkTv",
  "key24": "5tWSWWEF8iJD4HsB3yMtWPNj8RXzKshP1dJacog5KgfsYyHd44LmBhaTZMs6gb5CwkEupG51utZhFiiY7fSk9Cqm",
  "key25": "C5gQq4vu3JtrJsGRzWgi9rBWQwAEiNfTNTZPybwJwsH7jTY4khPoDAh9Yrtw15sN59DR4YPJUHquRC5R6FkBHbQ",
  "key26": "4hkuiJdsD3Up7VpMdGjfcdsD8sv57ek8RougdeGxU15Njvk69bVybBvx4qynnpvgvVjPgCHu58wABnVvURj67oW1",
  "key27": "4iNNgjWaH5ArYq4T9AcRQToFqc53mkr577ThuBo6j8Am1Lss6xUJhZbi8FXX8KgF4T1BsCWNYMbwnjJbqMthxicF",
  "key28": "5atMWrEoR7SETM9k42h8GigduZDEwMB5TEQPu3WVM86eusGwssH1RNQakEDkzKPbCxRyBRpiUEtC8voj3rCDE6o4",
  "key29": "3bZCm8JjvUbhuvHFrhprVahUNdekj3sQrbhfMSHbVGrDaXdNDia6fZXyVmyd2fck4eWLU1jawLPkVFFKPTBGkMPW"
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
