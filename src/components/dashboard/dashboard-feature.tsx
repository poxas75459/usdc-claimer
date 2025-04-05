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
    "29E6AAeNEughsKskv2tbmKRisCuDVZa1o7hHEFv18pNCK7iFx29mh2n7RscwCWun22M6jD9HCekkZ8RTHZaMHQmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZs1UjA4stz3Kij33Tko5F1Ea67Wp72ZExfj57CViV7N7KJvwGDpPxFSFVWBUYmmPFUmaBj2fnh2VNv4ZxMn7X6",
  "key1": "3FdmdZtRohaj1eFevZamx9XtEf94HCfTzfepzsZFVaoz9tbeHYK93EffydrKjQaMxqCu9h5LXggfxCFAN47iLsU",
  "key2": "3PjQyaVJrs7uwzGE5wBuCxRrWqpcBqyXRpE1vKr42rnvNHMJuE2PGJnaKtD53oZmzrAZ6cBjFgn1ZohxcRwi2AyF",
  "key3": "2M98pZ3VrQ3mdkVGc7uYK66CuDzZpAz7LgJaXeffr1c28Lwvy8HWf8qmEBngwyEtwYp56XLyYTMygSrouun4uBmS",
  "key4": "2RkHzWtJRKqVEkhZxThQoGcbVXF8EAdtNeUwQkbprCw3yaj3wFem5pWM4fzG8xt3QsSPJpUdqoPnaUeTjLKAFKHe",
  "key5": "5uJzKBGnhUvaVy26inkzTDuJBb3M7zr8ZrE51HYwFEEqfvWFsJ4iTwx44ok3sS1A2SLxgKXDyFYib36Akvn5CyKY",
  "key6": "fBm977Q37ojCMwUCrK5z8rzV53wbtyNs3n4f9WzWPM7feshcHQaMpAx5ESqPqQRHfa5EzZyVtN8JJct7N9WRjf5",
  "key7": "4fKr2nMA65eWjxRWvcqufe94dwSAMksYw54JQuKhE3rtJGQ7LZuMNN51L7vVrSDSeeRCbwFchUseUxtgapLt2cWZ",
  "key8": "3K8hBSaTjQfK99vs9HoaZrFZTtw6SBbAE7aPv91g9iExk6NzaZg3xtdhNmRyhoMYja8ixcPmjNo89tpPKqZgfEuF",
  "key9": "2UF3MAMv9pSAXQEveW17B8UN7qE4D2cRvJmSzWSgsmMC4e5zYQ25ezLVTTG1WXycucirJCYPec6HB8tRc4qaqdvN",
  "key10": "58dJjfy1eCmHBRwWHXWBX2CgHckPTukej5KEUQyxuGoZrvqc7nkJfPh4kyeWDAaD2V1RfE6xzWBMoG1DhyYXDBFF",
  "key11": "LBQ5UYbmd29NDykNvA4brzQCnEi76VyUiXhYGF8sRLXzV4srghP9QkVeiqzsaHM7emfq5B4rz8BAMnsiQPAJ9xe",
  "key12": "5oLrrpjaRzhF98fyRwxi9FutefzCdRZH21c2TZzEnfpqiHk42Bf2RoNzdtqMxvRT6eYXQQGG3b9wvK2VAKPNhF5a",
  "key13": "2Jy9tRKzaeHJxfuiVZBxXPn9kp5URGRdQ5E62EPTbjRhcWRdZfofEU6AmymhnLFA5MQY8bkP9563dZoDwRR9osnK",
  "key14": "5vxkgWFguXXrGdWtA3ZKcpbzjNM3P2oH7rE7Vr7pHUwBrmhiSpe1Auu1HfrPVM6Rz6hpcBSUFVnnny3gmRWJobw8",
  "key15": "2F6noJ6dJjTecK3m31P2aJmronYHKP3JWBUjuoTQrcuUk659fLkz9F1BFd7YJsNeMQXt3CwcUxSi6z77q2cnycJR",
  "key16": "3Tfc6XQ6vLkpJfCW57rpnCNmyDcawbopcLU4Uo3F3KywJTE8pUv4MJwFArGaMbP36bbjLmgHD164L7mrNraezNiT",
  "key17": "5rQmPYHVUEKerFj9JtQwTp1KrhBYFFTdAA8saSYXTzfeZDj6n2RWEgCXJYkbeycY5FsPNwGFt9YVSLUHDAXaLCv5",
  "key18": "2ZHbhfHbhVyphvXoD86PepWfgKyijodSoxXuJYpPiHwcQbhJ6Ym6WEPTLnB6cBe2xp1cobowbog56ApVuKwCJ9os",
  "key19": "3SHoELTZ5j5USAmEhXqPfHWB8hD34H82GHVoEPNxwc89bmDzz7p4sqXqwD8k2kTbbdut72gPBA5ZujDod1y64WB7",
  "key20": "2Hjh7H8VA65kxuAYCmeQ5hn1iZNHnf5nfMMvDPtPVTPgPQp7DnjsurhUzeBm2yy8MVvkcBiqvve7SouJEbP56roN",
  "key21": "4zJoycheTQ37EnnvbtUPWqq6SERgSaHDqpNwerrX3VZqb4rEBgBTBiw1vE4W9nsWFx9e2LnHf7EB2kAAwC2KnVUR",
  "key22": "TqNDxLTbVfEVpxHYMUDxB8HCsUmfeLYorTEpmPfqw1UgGUUm3X7L4KaKt4hzDcQQrRUBCdMDGxVjJqeJ4Aejbmg",
  "key23": "4i1E4BTAs18DpMu8qtEFuVnWDsNdskn3Se3QSyWeAeRjyqeGuk5WZTnAqQCsGdEmBHYeovUQ3DBv5kS4tX2u9P1A",
  "key24": "5QMmM5aU1GKsaj4fSBqgNQGLm8tthUfTmYPgJraMxxcRgpcZNnLadRzPtgfvzyeNm5YcgNzxGKLa4Gwhn7tnAK1k",
  "key25": "4hKdFanHbcNYzZjdxxPeADXi2N1faRQ7wMqPZMMRNYhyB8ehd5bzSJAPf6V7SopydFNZ9DtbFRt1RryGhoVSChHp",
  "key26": "4ooNpV9sZa5UAXEmVV3N9v9vdSa9DtJYi4mJLSTWYPU31eWt5Q7kMttFMH5FWeoXbHYUSc3NNjG5Ptie4PufEk36",
  "key27": "nSujNeRh5nZK1mhymSm2UkqkGk7Dq5zVZPuJ6pjjXnFvR4HTGRVdmEzAxb7i4QZigT8SFGzUKQpYAbfnXDCSsBG",
  "key28": "61LPpCoEVKVu4qD4L977ST9zeRZsateSDLnmZtxB6ycgGrbwmWr2q4Z73772ryfcgJkcqopmHaEVvfE5Xmu9eETB",
  "key29": "5zkyehT3kVAvbxDNiFpm3oU36XpsZ2b4S7q31HzFMwEsEVaV3Hr7mZANjJDGknUjRQWi1XbumJE5Kxgf559MX4WM",
  "key30": "3Hef1tq9AvUusQY7kUDxQXmYsGWPLNAu6rBFfS7EKysjvPtkq22wcoUWeBLTgZ6vy2CY5CSWQS6vqWbnuY7eD8UX",
  "key31": "65WHo4Jpv5mnGip8vFX1DVi2ium9eufRhgwv3f7nnQVmpK2bfuTHtVio6cmNDZnfU54iUsbdYz9dAgRuYGXQS2LN",
  "key32": "44KjRMC25AhS9KrLnKxtqHWnCtsn5NDEXhVvifjRHaaBKuySRHKytpJSG1Tt2J1wZp26FHiUYjqrDMPQAg3HzmGK",
  "key33": "2BMhcTsqdpJ8N6JmK1hxFg2xxxAeWHo19UHTFx5LJqj4bo1z2pbdKEh18psGwZ95xrC1eBJ961y4tCYeKC9DVXBx"
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
