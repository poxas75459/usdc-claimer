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
    "4CcoK28DWN3bD6rCVXRxXRMQdzwUkjTVXoKaD3DuNNirrN5PQNuG6RsdYTLR7DBaqesp7BQsY7juMzVVuoikAqqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mw46Rny2gfa5n7NcouFWaHw4y7eoWnj2MJYCwLxE7FSFA95dggBquaGG4hUT7emGzXBPP9TQZUm2iBCVNs8orYo",
  "key1": "2yHResGKXLF61jSxQvEUog3Jeb1EvXFSPidjJ1qGsawVzfKfA47JyxpgAhdrJ8fPVsVWFeB9cAHu2CY1BeNgaZYV",
  "key2": "58bDyzeWzjRgGHSh6jYMgQKjD9SFgRNxivykr9Lb527wmg1ydr4tAEBLv4JvLPvEK3qZtnnpdAmegpi3L4g6HVR",
  "key3": "UuT5zrtB59xLUTpfvHdZxsq54aVsUn9jbK3du2PFGNSLUeXNkJwz5trtz2gRuDEHQeoZF2wgg6eyGNDqGy8jora",
  "key4": "235ULGFovv3kyBdyzLKv93nw755FriRF2ZwmSibTFhZj4Vs2nzm3xJidkZak23WbegrxAhkTwnBeWztJwSa34hSc",
  "key5": "57KuSj44D3DaggRYaS45xMnk5RKGDbPanAAfhaA29Vi6ec8DuXX2Erz8g2BGZG7nrrK4YrpGoCwet41wdBrqEDMn",
  "key6": "3uK2jWwMLpeGacU6PK9wqx8bokuJvGkjJHCH8qa8Dr8EUBBZGcQLi1QNCAX4S8EH21wxzEHw4srUV1ezZxB6mSZ6",
  "key7": "3D2REm8sMbtqkzHsWp46a48JDsSB3ux9YiLXYhjCobS1CcKvGr65Q28Bi3qVaYZbZDsnqbXZ44f9SU9J6PKc5CjB",
  "key8": "5R2KXhi7Y7zamoSi3BSHJhQGsXuzx8o21LfohnomBq6ogwkGhEnCo6DQKwuQ6JtWskLUNRiihKwPckyZtoFrgNbj",
  "key9": "2q94mULVr4w7bn9oWNsgMQv5TYFpeFyFY1zh8RBpi4whK3SfHgnYs5cc6SNBxo55a5LkFwXERQUNBE5vVdui4u8n",
  "key10": "2uD5f95eLiGbn7nMzYmB546JjqtE47ds1cxupZppjXXyfymWiSv5T5vbp4CNR4MFpBU25gLf6bHdGF4mMigEnMob",
  "key11": "3oeLYGujZFHyrqFiJeaXYgp5Kk4YcAUJXUnnRz17pfR62Do2i5oKSgecN7r4pgdppWHHsmewvEb6J2EnKNigJbzQ",
  "key12": "3jPuH5V1YTeR5oycMXcCG2skW9YhGB6bSZ3Y6dh4eGBFhYqLey7ZBJCv6g5nPuqcvHe5Cj4U5TyCjFFRCP9X2TdJ",
  "key13": "5ASj3EB6wUgqR4Y9Q6dKxc9GuyBQ1HnT9h1fA7c1qBVovhmJTfmPGDt13gUc7H1AgXoqDdLW7Yi3EZghkG95iHBo",
  "key14": "p4aa1v5hDADs9bg1maPQicGJMRYrejYDC5oiDRQU9nzqfxRLxk5LkZEtJnguaHcjDnGdV65kVvdg2HJYSA14H2z",
  "key15": "5AuzmSZ6q8YcLuXBxSqG7vUr2fFakmLJPkESbTBjycyhT4rGwWhGgYrB1dytVt75kwkBerGCryWTbyp2AE8fn6Ez",
  "key16": "3BjF2aLiveaNtVmHJFKm2rDoc6s8ZPXwQxRYzjKtxswbg4eWjMkzLuSdHQyoUbaWQbPGpHPg94uKRhrM5inMi6Vr",
  "key17": "2GsRE6EjRiqdKb8xvwFmVRpLv5er7oT8ADfQQZxBsuA9pLzK6XWTfkXJJBKYfCpRYKRvGPpHuHcBACwAwve9wbEp",
  "key18": "3x12F6gMEMM2VA9UcmvMoMK2EjVEJ3GDRkniEYLuFT3485YyBjriK6a5gvLSnnUzHyzwRnvTB4RAndQs6cEUEfve",
  "key19": "WamrQYGCQ5tyvyB8FpY1KvTEiECvPPa6ZqebKKWBifCEL2qSzXEhJ7RcsnFQ3Kkh8cAyd4FMRz86E94qM6KVagD",
  "key20": "2nNocZtZuEimfhBBi8ywouC9Yj5bijXk3ADNsYckV81GRJqF7rcJfQ8mXEBhyGBSLaah3xLFspkRF6YeC8Soa89",
  "key21": "46eE6e919KBTFxUYZHakf9krUem8tJ7EgVKsjGZ2p74MF4tVQeXk2Ez6x46pS1wCYZPYhpQ3LhEeBV6wBGfJteoP",
  "key22": "3cwMjA97Hv6SUsVyFgYfeuf5H23kc7BiSiNC7Hu7oFnB9DxGNrtpvpfSBwh5yR8iqA1hNwxC5XWvNK8Wn5hL5REz",
  "key23": "36BKu61nw5XdcLLTaZEyxVDbSJxY4AsW9m7jjbVutQdnTU89QaZizDaC3zx4n6p72bgrHQ2ozd3quqhTuJffQes2",
  "key24": "3fnCBWT5ZKg3PL8FDBfmzArAYBFaiiYJRTx99BviMp7XA33VLDFfByDBrdxNAZonZ8ssEq8sDWbRL1Db7pMrhQP7",
  "key25": "2hWwdYQNSte14vRtp5mzLAP62oPPgTY6GsvQUQ7YBed5Wxrgkrf8ne2f5m67RvxqjV9znb9x8XeUc7Zw1fYtvPUJ",
  "key26": "53yrtBL5BoJqH5pJLwBYZZrZFDt6Vah4AmQaYQ8qTqmkqhJasFsbf9ubv6DokcLfk16NB9VGTzkAqykhEazDwB67",
  "key27": "axDVCUsr5dALGMiiivDpa7xHHEDAEF2HiqAPvpiZRdoQ2xVLkByuErAedvJjYZDAsPvKSiJWWsprFSpzFvUcYCU",
  "key28": "uEjw92mgrLPmPV8HnyyRdx6LBvV4fRziRCq2ktV3d1xHW97zx6of9CwZogqADMYYtfRKbyubHMRzsema4o4rCHx",
  "key29": "2FiXwPCHRtodcqGA7ss68LaBn9DCectqFiXFM2mCJj6F6HH8H1Psj3RRGieYFa5HpZNDDwhqWZV3EwqfJ91uX4pH",
  "key30": "2zBjyPEgvXJtG2sNsFnf4u7Bmg1kUUZXvnuWUd9Ht2wPvdCzNcraGQvee8bf8F4wNiLorT17MAjYAqG9UiymgBwh"
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
