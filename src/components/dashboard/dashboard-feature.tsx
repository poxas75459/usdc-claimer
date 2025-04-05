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
    "2paUeihR2zXVCa4bcGUA7FoSUkKJNCtw7deaxu7ChNjc1nUKdgqvtj6tGBz5enHvCUPDS2ChDY23uJiJdYADPBXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ChaGLvNX8NUncKdgYVYVckr2Zbn7w8A6U43sTdBqcB44yeb5vX76qL4RkSFS6YojGRvGhJcSNTh3KiAXUfshdG7",
  "key1": "5g8n75KYSQHJNb5URWpHtbLTKKj4jKDoc64PwxhhmEje7Zkq21JpHVadJ75GBwHcVaf973TyKCwbDiPMBk3gRzhX",
  "key2": "3oVpFRQniMjy9iFKGSAPDBRPCBjEc59ddRVsaf4BuN6ruzDogo1VK2pfmho2zSvCZRDtUrakMHtBtdQ8i6wZi3R7",
  "key3": "4HQjvUR6YoHcRynfbKmAkbJW7pvwjkoMudd6M7TGCcQyzuUVQkWn6TE5yWBRBjSKM3yWXvK1zVgmetH6yrhhLo5k",
  "key4": "56GkhfAvrvTMPaKdehYnyyq9CajKMABwT5goXdBVa5Reb12HdBowj4xAMz9p5CiprbaP9BoA2tGKcobWLCJRBVqu",
  "key5": "2uMpAAnVPLAvPbh63naoLBDoFehrustvuyYh9hYFWHgTMFzGYvv676eJaeuJN8672KHHgEXqZWLXqtKJb81ozYPq",
  "key6": "2b8HmjWSvWWKhcV9YwfFTqBVuVHZo37npRYj9BtuCq3PHH4mNNYPn5yQRS892vh8CrSJQs2wpYPxHnjWmxwpH3zq",
  "key7": "5Tx3Bgu5YUZEEySzancHgnMgfybdApqUvsfDYaJM6wZJ5i7Bas4iq1mTLwtsYkX5tuipzsp41KM8ydhgfm9FkVkD",
  "key8": "5KSuBKhhBPdtmPtCd2VSAhR7r2UnkCheAR8CRkTaAdzmRaxRx8QxTftUYxFXJsAYdYBxFxPu5jw4Lrh7ikTWrXia",
  "key9": "4MdVtSzF4KYpFaQ1E4KyLTgPY1Zv32dRer4ESvj5SzwcK44zbu9rPM9wpEgYuAYqUJV5SMby54FeUaFmAV1uL94V",
  "key10": "5BLmzfGsGdaABMaL6uzSotgu53EnnRagucLwZVMpVGK4NFbn3HVP1LNRqUQbn8muLHqwsokCyk9LwEqcVgFUaSfW",
  "key11": "4MfZeYocmF3dea4sz2mKMNdNwjXSUE5qgwBxxcYhfWYY5BgTxHC2HaRqh3krU7Fi35AuMXz4uHv6nA2VX5RYeA2z",
  "key12": "2HvLbxBYwwdDtaXFPim9iTSnjmEqApQMQZ5QEouDLZEHGapUDbkt1V3J1QZokPW9Yd1aRGw6bm442dC2nmHAWwsB",
  "key13": "5TaQcjHXDxpkSvd7gBWbBZn3fbod3mJn49de5twu5HMB7ANcVg1Wup8puWaaXsksV2TExHurWMRycABw4ZjBE74h",
  "key14": "NSzxuK6i5YjJR23g3C8hd8bgSyRthq5erwTqz7TihCAmUqhYRWuo9FXJMZ5EWbSQgnySA8uCCBAT67r83YKiASD",
  "key15": "4k6UWxKaVFMUuoRXeV9EkNqwm8Ry9L99z91esADYnAbLn3uwp3KVMKunx3DSeZ4L7LM5ptiEkHx6gAvmW6WSqz3m",
  "key16": "4cr77e2nG7594eaujerBMVpyHvk2F2kjjiYTAhxwTfrdwPdJZebzZbp9XGtUm7z9dJRFkBFYiBPf7ZJ7Y2kJ24Ua",
  "key17": "2jTWtrXxN4cJGqutFkDT6QEyYZrM5AAbaRnAbux6jp2RHyt1PbudyQUiGTCapgxqEB87CpTjkwKk5vUsr8aYhEBP",
  "key18": "66CpkLUL7GhsFF7iVKNCA2t2aQcLmgiwrtBVnaKFhm5serq94ZM8B61G8pZKw5kJwu5UgiHFvqmrbeWk98z3gh7U",
  "key19": "3yE5sMwDKvskLZhzy1tDFcanpabnJJ5Xdsr9g4TPQj3g7voanuiF78mRkNNVJ6X1Bg3dJMv1Aophxvp7e8vAfTuw",
  "key20": "Vbyzjj3jMH6SdyLtghxpFVfGj6X9vHB8J196kgFCswshhmMqg9TDpLToyCpPnNWPZHBn3nizZW6VutHdb66ZNLP",
  "key21": "FdnCy5krbajThPitnNYHLuiTH7F5P7drD6tbUVKNXUHvXmrR1paeyMb51hsMvdT3uXKgrzTS9bFhQzZ8bqsFGwx",
  "key22": "4VokAxUYf2T1KZF9NwAZubDBAaNWFFpsZu891cRpzJQs8uvVCbkwRiVHSCJi9RxFjUkKcofkkH6qQ89oFBHRB2Vq",
  "key23": "3Q4o3dbuQYzL8hJXSeW5DwFsk56y4MVmzVNFUD9QJoUwPZmB6ZnkE4fqWBxrmmRKeZeshmb6ZD72krtDgc1UJfMo",
  "key24": "4TfoTndk6qw6uoUSJRPi69ZsFvW2iyyzMtL5kZ7m6ds89EGt3SiemFPReEf2MUi6pygvramhhKQeEB6Rz7uJBPRt"
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
