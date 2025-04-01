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
    "37d3FgLqdJ3akMpib6iH6fqoBLLFtDyPLZuj2YACnnTU1a5zNKWT89w2KwB9A2t82wPxpRYqvA7mcEmBc1p7b9wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oN35ushae3VjXG8u5fbDKWYLGb4BgaBkWNUaTTcZDyHwioBi75iiZSxRKeF1vtCqqAoSMviV93wYFeRUkYRW8tN",
  "key1": "3fCmyy4ZpkpBQAYuRjC3ESxAeS343fm4VjjAVs9ecjnMmRarWcSy2TiUdgsYvx6dH4RtqKpzkzUd5snnpXXdNUbS",
  "key2": "AJSJjpQ2kNZWTYMxLxCjs2eo3hUgtiu7UuYVpMAkH9wGV8p6xRfL8gpA7WuVr5m9UhyGAWFdadSTf2NKB2H72nM",
  "key3": "pMoztgjnHA9iRvKq5kMYyxvLtGsQFpXA2r9Nru55A8ib9DLQ79nTgoZ2YP7AFW6N4Y15Ybt53baWS761Vn5vffi",
  "key4": "56tJoh5zsDVBtZ2Umuz5D222ufCEDSpEfHLeEBRUi2ehhhirMc56UbbDJKnR258kMtp7VtvS1da8jJ3AmDtZ44Ps",
  "key5": "5hST5QV2CGaLjx1Nf3VtfNE1WE9mU9oCP6AUpvf1HP8jrmbDYHpMHvdFkvoXUUjEQCmZwSUtCrWjUAXEBtYLEC4",
  "key6": "4FTcjPAocCb2WxxQ1gcS6zRHsCnsJ24RSpozPr7KPLV5jgZ5sJjxqxFVb4pxUYXMFC5GUjtUVFa5T9wwWc78uHJB",
  "key7": "zvRDtspwten78YoZn21Rwt9mEoxZ8nwqu9UWQ6SiFZKHUvhKAonsBhxbVb2mbNtuuphP9dxgi2XPckZHqsftstP",
  "key8": "5C6GEdew83LifnnmByws6QZHRWrYEvvioyX8Ee3QPei4wkjdvtF7AXGxZ2sESuFE5uGmJseyhKZSTKEdnrWkBBsW",
  "key9": "2MUNX9GPvpWMH2AL7K51RjjgQLXtaCARFYvtS1cmGpdxzg6VBvuiXcKT8Rgoezv6EDmiXiHicmh2GbbKAkuLC6th",
  "key10": "4T6FzX8LV3DwmsMpVJsjiCuvz7m3Pit2hDs8wpZRNu9kiyNP1fhPRHbpsZ7cbpgJ3ZWHwhjrDkcRRwPKos6MW12G",
  "key11": "5rzLMzznQmjqyeT7x8kYY4kH3TqGE2kFEjMrnRBBEhNs5EEV5YVBwry5Nu93jkkFFoM4VKSUjTh41Wfx1brBYWkk",
  "key12": "E7BcdkAGkQ2QQCWfuaz5vqdwhFfx4HgBsLPeFRnyEGpiPVgZFZZeCFiRtboYNWzFjgbq9oikYiTK7m5qZFnWwQq",
  "key13": "2DHmsnBvxPhvPjw9dyj4y6QD8tjf16yzVvmwJHCsjTXC4Fsv1xW4XEqEPa9cz9vf3Ww7WPGuEaqNFVqvwq9ssYHc",
  "key14": "3RVwupKQp6cfpQrRAkypgmDbw3KDBhjCGhKj7fhbtmvHd4gWGNXqNaawH2J8FWFipcGTthWE69F8LxsTRHYBMHn5",
  "key15": "2du1TLqAS1zcLx8nuaT4LPnAPGhMMnpxMBtqDobsujoXcbsGakLtv11jPNdBDurBxqVLVyJDqszo9zkt3Hp1AE8j",
  "key16": "5Gwb9ASERx9HerV1bzywJuaeo3ZWqYoMe7Hj5vpifxocvxdjwMj35xvPYnuJETXumgNo6A667d1yvtmFkXbC9eEc",
  "key17": "hUCjArsmdPsDm5uUeZyxrBPDUP3c8aczUp7jnD4eAn2ZnqBkq4DEfAM2aMtbD2f7vwqftTK1c1iriBzpe5yLRHc",
  "key18": "4cw56XNtWZMm1Km4KBCsCeWK4s8mjXhrzUnV5dWrRdVUuph57DAyayyRXXdb5bB8wxH7Bv6649AkCLDuVu1vZLPR",
  "key19": "3hSPTdqWTKRe3fEqZoxpRFtKc6vsRKwTVZ8gVuhEacoKEhgLh5B2krthng3qwQeUnGhV7kYf7Wtng9ovGHkd4diX",
  "key20": "3AmbachNBgEmYoELQYTBbHoV72fZGXEue4pUcPR447Ze6Rxe4ZMATwi3dxGTguJTrg37XsvrpFhqvcw3Z7Egg3Ro",
  "key21": "2P1EanEc5ytmGRjQkinF8Aksy8X8U9skP3VSK91MgAjVvpuBaBWJy3JKSPhixBgwqxJuLZnY8G899v8CVAqdagBf",
  "key22": "35KFu9xfHHF6iA1CYY61KoUhxBQBRxJBi4H85tW7SSQi2FV3qM3SXCbn33ovXZ39Y7iXz9a7t2PbUpQLoXp2RsoR",
  "key23": "4A1G5maVoqnnYNgS7wGjNkyPPfkRqfWVZwUHakR2uAWUrvUYF2MdnCSh48pffCS7QQqXCyNTXSvnTQdXAbho4jvq",
  "key24": "DY3EV6fD94karmLB2AFjAdK2YCAREBrK7MbLxC3RjXxUwMYeXW3DpiiGjxCKoaSB9VpsBch9X81miQmFPw1AQYs",
  "key25": "3FoaNyDLkNkXzJUBgFEkWiNZ9yjj4kguKU8F5tWxC6Ag6vNqqiaZse2p12vTUTQPUzyg52iVYgWjuy6jAP8hdRyi",
  "key26": "4fEfs6pk327hAxsyp93XxW8P4in6JDNB9CFQdp2ZYxUurVtf7Cq8ciBWRC9TM1qF2qvTrMq23WcwBSaxayp1tvzH",
  "key27": "5BQ81pJ6uDc6iGaDkzMNVfgXaZsRhmk9qip25fHZkn6is1G7zywcJKQZVw4Y3e378QGPQFAygjsnn2xX1cvjkno4",
  "key28": "5gpeb19K1i27yJhVomRLygxvLZG8GmnZ9ngDuZmH8Sgm8U2BhYNJPSa829oZcdx4dfQpi6sLig9dgEt5bGjvixSr",
  "key29": "48L63PfSZQGCEWWpp1kUihT1H1F5pBp5eSqTVCsqaCMex3uYK5bAUbX8F8edMd5e94KR8UQ8odo9cUid33CdW4wn",
  "key30": "xezfXxCd3jdVE9ErakiQHSyifEUCE2tW4vRW8mthBk4ebTBQYAvagfrQjHPo9UM9KCdhbidWUjFpxNAF8v23WRv",
  "key31": "LqibxzqDPKfkXZk89jSi3uYMVXk4KH4nYVhQFayGGsGdgv9xZR7rAxp4SsG8rqrxAgWn8KHEZc2caXvbZG5xmxK"
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
