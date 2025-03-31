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
    "5rC4v3Sj2vRP9Gug8Lnf3Nj2nfk73VKKKt1V4fuiw1j7BfKRmKZrw1CwHDi6NKgWrur6zWY8PSzjd4LMuX9RbV62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAWhgjR4BeXUusZW4AUn3JXVdMYMgaJH2GyGm6DDy97EB454hM2Pvxj2RgULPKAbqbGrTJGXGythudh3A3tMPyT",
  "key1": "3LV4BsHLcikrrNFqpvb6hmtBfQdC11E4YTscxip13gfaDj2nCQZ5EW5Hg2GWq6o1FetbiNWE8ejtTikoPxKP7L5L",
  "key2": "3DvxEB36yurQzRtkcoeRyrF3wR4fTRZeYRAfDeRcnY748RaUQfzDTq3iNCyrn5615mEvk81Moe9ApQht9MdoaT8s",
  "key3": "5Sv23WDxWhCqmFqpcwdm2ua34m5J2hYNWM8RRJqkMFVreCDawhKZwZ9K5dotrs2FTSuafpqD93gkuHgXEbR4ysLt",
  "key4": "28LfrejQJAgeMDry4pjuNiAjajEDeSLYch1pkwnyLJUAMjc3vrtowuLxpgz4kezQd2C6S2djPMBVq6Yg2yAV3486",
  "key5": "5FFJXrYrKyUfxqFnQr1qXh15PXxgMiyQitcZUhYHj6oR2TTaKMnUKhbeBJWmVZN4pxdY9Ke3BCCBS19mECc6QTG3",
  "key6": "2WLSCV4dxDvvTLrJwgxxxcq7Pakc9JFhMHvd5VYGk7kE3fMkNdEfFkpDsBwPJgmvUsa61Zt8CKkcLU5sMGV7aRsr",
  "key7": "3z86iKjTdVnYmEv2qsTzNwXWW6jxsFMskzuG8ZZ74StqV3b7merXohsXHccUCJuzbTyLVmwpmPTag5aryc4T1H12",
  "key8": "gD1niaeyiCRxSV983hQmmfdG7D62CraW5dckdttahe6Ho8J9ehoKnshkF285Cao7AtSoPky2e9W9Shwuyz3gC2D",
  "key9": "5eMPaX1R843R37C1W7SpvC4LwMBtgB171mDb1HAzbvpMUD4SyJBgE8aRgRg7HbLs3KP2RJh3RjPzNHF7dbG52ekN",
  "key10": "4xooYhWTA2hVzPT6Ccvv5qbtBa2vp8NVxZsQAKs9A5WPYDGqPsd6yuRdGqFM5JWATVR7vZxZhyNJ8zB9jntTaPc8",
  "key11": "5n3wVwnuR3D9RsdtbFLd6hHWqPboZZfLrguG2HWmwh7jbHMVuSg3uHhd28XsegRr3n6o7vTP6ZdKGFW8mXVek87t",
  "key12": "4TpQ8DJ22yNzbjFTbjJRdCCDGHwaWngmLDJHW9uSQyXxDdFxafF8yDyg3Ti5iUtaTS8qgoVeKNHWYpvXjpJWtvGr",
  "key13": "64bnWoDKk5meCpvieDBSvp5KuL8RNmwsYq3sjzhqkchwXumL3RtnHvaJLGFpyMURAekEgQjQdTgm2LMaRvZprQpt",
  "key14": "5G1UKtAcugCyNmTbNiUpto7hvBByh6MfSQVEyGMRq7z6SaSMu4KDz55GSzb3ogGGViQaXBV6cnUBd3312iUimD9s",
  "key15": "4uyeVLNPh7y1wYVQbzboMCY4u3R4YBwg8sGxV5wRoYqByHrrzdtkiU1DAPX6Z7pZVfMAoKwX39A3J2irp5Ry7v8N",
  "key16": "5TFRqfMteyA8W21wrSAvjkjGdgNiVgjrEZ3ARZjZjPagVeEEf99hztpnJC5Dy1j2TTdFNz3QHBiAhD2CeCNZAwmV",
  "key17": "27eqHuFZruvhdyyaL7efdZjtR68sPXHouwBcqJ6P238aeqUQLgcEtHHruuSSds8VA1uEc4LMh7ZvHA1XbuRsnFsk",
  "key18": "ReWRkHZGHsG6ukfpWazJrVAz6mi76YwMJcqPtVk3abbxkEsnimbziAK3rZ1WLksukLgtqwufayu4pnYoeeoeUQg",
  "key19": "3eyyaHRjSTynGRxq87BMzYdqM5mBBvToKdeoTP5YCAJAkF1Etj8Lht8tWquyP6WHPPvSjY9CGpyk6bgj8eAcmTAS",
  "key20": "5FgHrRjzZWCW9WvZcttSV6Ffk1uvLrXqjNbrMaPMSnvMxjmdpCE14UeEnJZxc6KMDnWccnh5AAMxgTwu1cKL8jXF",
  "key21": "SqWHzJBxNC7UMr1EvkpcCgyWf7bW13f3CyHXfXXXmWMiYa66WMvErZPhDedPkZTh8XW7oRmfmGB1Vf14jT5YURk",
  "key22": "nNt7RBbiUkJ2H7hExJrGLbgHdCzkwQSLVfehkP8oF7cu7aULEAk1GVw8JuKcP1r3Rn7RrA5mdVxNQRPCuxRjgir",
  "key23": "vP2Yg6mfQu5kBvfqRbh5fn4Aqu7BjsZPYjWKAjNG7KW8AP9MNhPbjZDXq8YQE4MRNHQM7dfaRLQTvx5DXQ5GN6a",
  "key24": "61gjXUVqs7ZcCi9eVV99H8iFftoNfTHCRKFqCSPQoX3bpHqrYCurFGvp1fwZvwuBr4FdC372yY9TfL3UsPsU9Af6",
  "key25": "3CBdqvyZxGEGmnYkbz2Wn2x9PCDDpRyhmJr4wQCrYUEfscaKhc9kZs49tdt43WMq8tBtUBHBvQDPxEaht2LR6zki",
  "key26": "5F5LGzp31XaA2sUG2KgNRbTczVXiN4a5jQFXdmy4JF4TuYyycpaxEk8qeqiesbbNBAAJXvzLGX82CpyJYYUkhsmN",
  "key27": "SE7k3ZRBK1gYKiiqsEQrdiYDg8632kHu9dtniiWQjEhzngDLuQT9pYkhbqkX4WeVuRX2wFXCQxjqKzTih6jSijT"
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
