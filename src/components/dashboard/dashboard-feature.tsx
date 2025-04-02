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
    "5T4mSxHM7mppFwFLSMFVDwSjkjdFPmDVdVX76jjWNPTfWHZ54LehG5eRpKKTENFdd1A2dAszeySnDX21ADX8ho5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BjkfN99jt42XZ5jjH8DWY1jnZZfDbtMW8Z22P7di9nfeTPjzLtFcZfdJ4XtTbVmenqDMAqDuRLXowXfQW2AQwci",
  "key1": "5BrokEZ8opiioPEGeuHQFPgq4q7MxHPdX8k1efq26MTchD9UUiDmaumreqzBe6J4V1Md9cGFAHa2T89CsVUEM7vM",
  "key2": "2vGhYJJ2K5nDfADGGjmc3NxXnK5eWeS3dN2KYAoKL12aRNmGPzFabb83zT3GWoK3B31P8qoWNQkSSzzkUv66dbYq",
  "key3": "4BYbnXsUfnEbcu11zdEvriutjRi2xLXfzFCrMwBQ7zLxtnwspyjVrcPioC1VKdZYPeh88gmJoxtwqnDpPGgR3W1g",
  "key4": "53xCRaiGM8nj3GioE1Jyzf7G17jjVr31BXqAa4r3CftWecszmRNhJnKX2grQ9NZ8TMySgT9tnbX1fFWVhYAXzeyW",
  "key5": "4Rx5CyJuWXjHRh1gLqLCBfCQ9jCDqYUcR8W3LgmKD3T9kkDrxfBSU4ynAYr7rTAnwUu249Jn1jSvhXEWjZ8eWhS9",
  "key6": "5BSZKvouj6u8SBpoFDgMLkbCSXq111eesrtojaYfU83795YdQAckhvbMK3Ln6Snz2jNbha5EZK3xFzH5Fgyq9gd4",
  "key7": "4fA9SPtipJUBR8PkusTjSf5nWD7GQ6QfoXQexmNxJMQVYTcKT3b9GR8jZLXFiHQ8wKFBtgucHDbUJKnPbEQrLb8Q",
  "key8": "5quwddEU86UaYmDMzrjVXVDGqRMxCQLKsG1hnHCm1G3wcaboXkiYrh6vzMsdD1AifnYyDRNgf3r6MqUA6CT4teL5",
  "key9": "2BBE25YfrJZaZLgfPiPWSQdDYNzWAcEEmy1MHCkkpWdeJXYADYe4YkEu9y3a3NfH94MQLYksPkeja7BdQ6pMfE3n",
  "key10": "4qi3w7r4pHrLLRoL9YyJZ8GunYHLTHUDT9FTEvm9K4XXTX5a9M5nWNyMjzcGHmC4UnDWaC4tQnji3KtRdAvPcydA",
  "key11": "52493ZS9eVfJSjFhYwgjLzXYtRX814c1wGz6SZVtbMuiQjAdJLdcFhe31BrUNoE8KbCqwTitE6vVn98MMZbefiDF",
  "key12": "2McaNmQEzgtBhFujc2gWJEFat7sKXF4hJcHtaZv7UneP6vTL3LVNGc2Do8udCKa7PYVb1reZhvDDgyEJBfAugjpo",
  "key13": "5BtmmZJoPv7rWHqR9e72mNPYd7kES4g6ChAcRRyn3xqwjnsghn5mTq3J9VwEon5pXVyTfawbjKr1FmK7fVr1t7M5",
  "key14": "2grtu53zbpq92ep6oUWLhU8Tnm5sPK8TkkAUoVxBEwi57Rjccg51Zr5KwTukpSvg6m9qwYrK4gY4LccmgnewnCMU",
  "key15": "2mqUasfd8uVyHRNr9YDVoVARqcWrWYkCm92k1trrCTvDZ2X1GEsWuVBb2EQAyeEdFxMPRSDCi7TWj5hoahBMWNsC",
  "key16": "3ahBonPsCk8cDhDJ3f34XwwqfkpYcYCoFXXtJxjASzgLmoFCMd7ursFts5jeNZEo1UTPtFhWKz3mrQizMtSPPKuW",
  "key17": "5ZQkEJBAXGzHhKGUhYuvbW2BqszGVAqwgDzeikvyB8wjTKomB253AM7gNBhZnXs1HBsxfCXGj2HyDHWwcStz6n8f",
  "key18": "rJ39a9dudtMz7gMyeVZStmGp1ZXP4MLjHWgy8uMfPyzo4BbV6TL1xaXrJU2nXndyEx1tpUWmKpEyYS9m9UqXhwY",
  "key19": "3eckiNYaGZYpaXdDTNPsZ9tygNCgSutUmyFM8UXEeCGr18o8q8xd6NUy1LwHToWDnNjQ6QVjbfuRsE46QsDjvZ5",
  "key20": "3mJ2sWTQgGdmwAnNaoJDXUbRo7ueVUaTsj8cxETaLQaF1yagaCnRS46sKFBgJKZBmo7dC77P7Zh56rBYYTtr6H8s",
  "key21": "S95pVGuooiwqyNJ7F4cbDE5mgLvtBf3CGQK3v8goUb1xD4fh3g8X1GK9vHw7v1M8i7cTAmnYNZ9v3dQKGHrzTL4",
  "key22": "4Ly2zBFmJSgPQC7K8aD7qVgohrx1LoRQMmqGCg6RgqXPeLEDbf2rkKBuwqPvTeHUio1EHgJYBdUCMLBoSRGogQh3",
  "key23": "hG1FVD6uVs1bBQktUKpomMPvyZfVjcmZUrK22UrVbAGadVj2aHVrH7yKUiHroFTMUPdDur68QDFPr6g3AVNdgZf",
  "key24": "44XMhfMTEuYLmynsgkaj4oDHJTfK4qKUEomt4ZGsduMJsX22PGMR4ofoyzoKg8KxmnUrd4zEfdR7uSPRDxqCRTbD",
  "key25": "4SJfy1P8tnAvTcairiv84vUTpAa9NHGLrnH6KvFqF1NBfAqo9kJRuK8SF8cc5wCNABDYCSn2ppzNcdaj5i6N5k2Q",
  "key26": "574tuh3ZpP4MLYbCqXSXK9NUXFBtfCy8ixjnfQw1JVDFjaNim8h6r8eE2aRL2xfEUmZHXzzYWiu78YJsKkCZDc9U",
  "key27": "2eV28E1DLsTfK6bj8wX7S7fLgYSwRwSma62DzMo2RpKkrcX9MVzAQeVUAb41eyGDimd32NksVnowq49vQohpAGMr",
  "key28": "2QQY15CKEzV5KeSBsmNrR34TRuSagJHyCbGAu4fjmot66DR5cB2NWb5LGquhPEUrzXLjoBEBkMxRgroJQviUcQ3g",
  "key29": "4LPjTzx8xuBGx4AAFF7w5qHCSgDxSgNAFPV2sqCN8gZYXtvQtffBUYbDfbHkYDCXfDN66Q3Eby8Bz9w3Xtp1ZYUa",
  "key30": "4HsZataLgSYmwzxGyaV2n25qRZUPBHsjaowPVM439sPBmrb7gwGh5insWDCTPo7fZwhkBjQ21EGqLFMhhPDG7UVD",
  "key31": "3eyKedK2Ld98Stwp7k8mi1ZqRcb8fziaX56A7L4TZYU8WXiPEpTdVkdgTV3Qi2ZoMismYcN7MpeF9emyj8XeWYF4",
  "key32": "28Vi1wQAzXNQ54Mm9ipfE2qtG59d7USLr79sgNSZWgdmqmJBBWdj5NEgSxoHykQCDrjQGdU5nRBqf5mid14Vju3A",
  "key33": "5f1AvrAShafmiHVAopNxb57nsVoweftxmwKyBswPBwNgwEPJpSCtRZjVkUXQYJwDZ3RdMFEenMSJpPuax4kGeAKz",
  "key34": "4AfGgzNQFXgTE5LkLqYqrYYtVnLUjnaakP7wnR7T8anRHXhHGy4D5fXp9k8BH9C2fsf6g5d2djeeM4htNznG6BPN",
  "key35": "2gic8WBYkwiCw7oERCoc1KX8PNZVMqx2AcqpvUHHm8HnnSE8kwMMAUTX1Hx6Z9HWa37GRCjYExwRxP9K6LJvXnFk",
  "key36": "mpKCzWZ8ZGbLTFTWFkYbkW59CLJKfURwsNs9yBhDy5zRFfypf8EvchqSob69VoD7T8uPFffE115GTaGrhXyxqeL",
  "key37": "4MPJrwTHfQqiLqpTL8hxgdjURZsiwTraAq8FRetYdKF615cQCXZLG9qGJf7xBnEYA3f3RtWMgGUuprx9DT9A5BG1",
  "key38": "5uqGSBqzteyQzi2EQAjweWR1Yh6xFMBtS8W1XFwLX1sC2YGhWoc8GYkJYm8B9473yy9TFgfan2CD8SPHvcJkGbPF",
  "key39": "vi2KttTLw4ZPqyQKtp97ibSvUZekYhmdRsfcEH2nYX7JdXmy7dHfGe6cvW8gpvx3zaKUGRVrzLSZn3HwqnX6pKK",
  "key40": "2xaNzifLFpuiCk7Y3iWL83i7aXNXSo3anchVWAqhybv7EjTRv32beZQbVgVZwoMVyJyKs5ozUKMYmma5PP1GUx62",
  "key41": "55Haxhvky7wY8rHswJqLbCWNfCLhkivkjfPds2zjS4dV4tVioRiL2Js6frNcFP5qHVwYmGBTF1QTM7zK8XKpu1WE",
  "key42": "3bLXE18Uc1PYUqYTEyob4WjdqGtD9gCAAaMYV3nATPMwyBqVpoD9ddLJG9UQFRb9ErWk1NYKc7Hf5yCQRurdW2Vu"
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
