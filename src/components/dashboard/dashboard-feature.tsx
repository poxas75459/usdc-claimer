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
    "362FRbWCoxDDnTqsjLJNtbdoJerbtBdrPSQ1vkaWQk2KSn3heJgs2wX9S91jNQ8nYJiWy72a249zPowXQD3MLqZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EaXmzEuNq9ccZpHfF4r6BDBzjxSWafUeYUYiSPkFHuPodegyhB22Fom7NP6JBSaKEPjfwQL7C5zDVzboSqWHMPT",
  "key1": "5kvnBrGydrsbtUFRkRpRXSKznVpC5UpjWhi7ZqgyP7zKkwR4DB8cYKtmxE7FZfWqdm8qCRjfHThr3kb8LkWSpWv5",
  "key2": "5tUkBtmMytM8iVFGASCtWze2fQ1E6Gp3sapXrQAJjZGehxaag3onpthL1ueSgFKLCVnBCkVFUYozWNaaph6qcL9L",
  "key3": "4kD6pxJ16xzupUUATthN95MLaPm7nWUH5utcUiespsrYXzzf7HL8FvWHpTco7XFTNrib5UqJae7B1LepM3k1a8Uk",
  "key4": "4rEuvnQ6Ybh46CcSqSFTHihUHkMrJXVdZMkCdeEt1XYo4pAfuzVkJPgJm2QMwAZ2njFYmQ7wwMiGxGM2a3qDEgxE",
  "key5": "2qFUphMPHZqXNbqZrMFiL8iHg8aF7oX21XHmxfWowFapzBrZe79jkC2ZnF14JWZE14pwUDe9ks834k57bpvLcd8X",
  "key6": "4horySMMenXNKX3JETYu5n2oG7LZWMP9nE26qGCH1NsQ118qNkp4MC7wRJBFrmoWSxgvMAPv1BV7RmbcNZDxQYnj",
  "key7": "54BebjLeuDGBa9EdoDwEvtwrGpBZABBwBAAPFxUdY242P1PKaHdpy67L6mjckYW32RmvnpNauU5DoCDgPeJ57vj9",
  "key8": "5Ufk3M3ShP3Cjtfy9zG48FQ244XbCsiSNvd2M4AkrP3ZjyayLEPeUkd2badwSeDMoFrxXit5z3e18q2jhooLkuNb",
  "key9": "3N6qm4TjqjbkAGBtA1jtN39xoVxLXSo5NYjb9NSzASow5vPVTL9Ez6rBWpNLmQQamc6ZoxU8p9fg3qdKgTdT8QUt",
  "key10": "3B48VriyrECm31iVRnDnLfUWvz3x7yTmw5syQpQwKw1eBGUC4s1nm7BsuK2RLMbbtRT3TabAmQLnog4bvzwUP53h",
  "key11": "eH5CrzEoR1DZTDMHWztsSbccDtjkLpsT3iTbuBNNSLTeQdYMnDJbANGZNmVoSFqsrND498uHaDib57oETs12vKN",
  "key12": "33bZyUe4Mr4cH21vH17vCQJnMwbeDTv6W66tyTxnwWUAadnUevc6QJwqJ65DuxoVUe79VezuEhbihfujU6eVgGRH",
  "key13": "54MoyuKCHtnjY6hd7ehNsZPdEJTihuTKfGk7kzQQ9VYDgpHWy4XTRHCMw71WQApgHQMyT7ybHsY4Zo2Zn6bvnX41",
  "key14": "41MyGunDS96VuK62f8zXzHKA3hVNVxpzvk2dAQXa7YuUF5rtayxpa7NZh2gbKjK6scs3nH5FekwAgVStDT6d1yUV",
  "key15": "2KeUN95CA2JvL7BbqV18QRjUwfNKarNaufExEHeVPLuNhinje3Apk7Erg1jSvhqmHmNDpRXssAypkVeZEYNwg5qc",
  "key16": "41hNZ8X5Uci2GZjhpaJEZXUBaY9cXG9jKLkHoCFPDaS9JMuyqUfUNdHCskeZnzRwcAWShWcLMXAhxu4wXaByBHTV",
  "key17": "5BbBQNXN2BfhEGAYgRDPxYRshFT3E5Lw6JKWA3Aw4aX7QbSeDdH5rAGARkbMoe2XPjF1qtKk89yBh15t2fubJaKN",
  "key18": "49vUUz1uNDJjnNa9ZZDHnbe1Nw2yNyz2bBkeAxJ86tAxyrA7SMiCQmhWo4x6hAmVj3bNMJXtEt1Yc8zF6Wmsdc51",
  "key19": "oDL4oRnmHYdgdGrgBvinQCkPTjp4GdcPGyoBPZfBMhS57gLAFnarbK6xARYBkRJTh4YZov1nk8KYsXoppewsHeW",
  "key20": "5youGGcCrvDZMmnojdkG1rs8qpzRCUCAUAf817rEvvxbRRvgj7EwMPRh4278vZoZYnD7KFztmP7h1cQPwKbYPmC9",
  "key21": "w3YEj1HKqAc286ARiVFNwsPw8QNxt84How8YSKLhXRuGvHiPuMKDucPqQzxNntTLXJSM3RSU69Bpp3dThKJZ3rt",
  "key22": "4eJMrNpLQP6d3KzXFmtkZNtAsCeUjENR4PWcJX8X32qHsZb3aGm4MtiicTEyjqtqUNNEdqWND2XUyp4igp9zJTu4",
  "key23": "4KfUhb7oxx41SF9LNiqzefP4vgoxEpLuUDSvzTd6h2Mx5EaRVsDHtF4Skk94his99YFE6Q1LCzwu9tjkdm3dYyfB",
  "key24": "3zT4gqmZXoYSjuHB6ZyChpaoLHb3Va5WzKQQ4X45c2nHeUguhqpgSLJB7MtCrirdHDviCjPwkDoGqkckhHNS9wLv",
  "key25": "WrFWYEvLfuXMBrfEEVBSokqkRWLAGQokVKdnBTdosHJ5a9DXwT9Nu786v4wVc6FcfvgvEt6S3CLTB1hs128RRjk",
  "key26": "2Hd5rAj35JVqmVyuDSwYndmUXcY39ybxE7jGXZmLzYhJA2tPYm4Tn1v693xYQhSgBTTWEFVkqMcE1sqZnQUdV7px",
  "key27": "4W1m8WK4QtMdsUrzeiVCuULsKo9iy6AuyPyoKYQRLAdC9BecLuL93iboj42LUte54rBYoz1tNviz4Sh9xKyxBwHG",
  "key28": "4V5xFAtFktdbufPPYrVx1R9UUGLEpNUq6M2VNfHkJHBh341a4tjH91uacc4VR9ZAyg1HFod6VcFBQ78cNeTBxVbx",
  "key29": "rENiFPLCZjXb92tY4pMafGeNsp7VLABkc4nReEvYWjHXZ96TnUESUnUbzdZQaxNMLSdDc1ABb9bx75kVWpE97oC",
  "key30": "64HqPqJZTpHbUtz9mcJs6FVt5Pt9F8oHc7Rvwv3C9qfy82xat65exnd6kFDbMwZTBNSXcvuJ9mzY7rB2PwuBzeju",
  "key31": "5UNMAMEoChJhAAvBXKjzs8SAUgZa7d2sxLF4vnxAuj4mzQTmQSEAYya3F6yTiamw6wVougVgWZHeomznMtfEv7M5"
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
