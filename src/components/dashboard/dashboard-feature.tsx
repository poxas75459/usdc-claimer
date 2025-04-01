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
    "3c1hNSfoAtrkmWXi7Tht81vjnEYuor8hpKynXrMXmKNx8WFdhsUWqCHnp2Qusm8ZiWauUwMP7ugCTgbEuQAG7mrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q89cVBvDBt4ShnRi6a6jUunmhCUdzWkSaYPdgWLBCD4Xp2hb9iEga7TZsWVK6wBh9BRqEaVevzxHgsFxhphc17D",
  "key1": "4hAYHLyeYJCFb9aFisePDtuGpMmaDzJtfP1ZzX76AnpMEycpzB9fQaCtjpC5SuKw8qR4yjzSTZUDihcHNcXHKe1k",
  "key2": "2WUeNLPM2SkFPZdjV7cx6wZ2akjKQD3C95VYAN8j2GLfFd269ECaxWZPggYPBxHNEzPt6g1FvqtsMVt5CJSwEUXf",
  "key3": "2EGVcHMWNme4cJyHdhb2P8DY9kweWc82bgevAHxU3EWjW7XKCeraLKqwmU9FTq8dMq2vHKRatwY9EgAfgdM1zT1N",
  "key4": "4ft3TePEZ3K3Cs526UqrVLyV9nXHnE9jFFqJAkdBjeVAQFugzRk6sfAqsFGTi1Trk8Amm7MxQTC8YeSRb9qEqSud",
  "key5": "ChMtqpGa4bAbiowVmoWh7BGHiVLx4PKjqQv1YtQSsfJjPbDnxrYAoNDGU5GMMnWKs5JdoBeryH8oo4hnbmk3SSb",
  "key6": "mcjj6MHAVEvw86NFhqZZtWqr5CAw36Nsm7DhuLyCPACgrmuY6gyp4qunRBFCsMwJeH5MxopzQofmMJj4tbDRGgD",
  "key7": "2fwaMWRdFiDGkXTTZu2iRmkzdqJeA28oFKCvqxRsw8Hqb9xUNtkCz6wNHJgX18K4eCnovSAJb3uCbruypQcw7WCo",
  "key8": "N5gy1ta56oQNBrxC2LwnjvNYfbJS2pCSKyjsHgU5jjaBKP3jMRDXrpZpGuVjK7yoj76Fi8wqfkikaccteXovQ61",
  "key9": "5RKw2svTYwBnmjLUbudQFSfZedUkz23AagqpK7TFaeZQBBuFeLDEQwyoKQXcBmJM463wsCdgz8E4d5kV4wVHidMw",
  "key10": "mXNpLwTbZmPXqjzp8g4Rtb6XDwR8CmwEXcvqvFwpjRWbY4W8qMa5oYeqsjVGnEuxGBorpMvkbDexwXumZWPbn41",
  "key11": "35cgaywX187Kw7opUpjqFMsviDhQxf8EmxfbWePegbss69LjDT7LTp5B4JBw2WKpv4T8VSrhYLeSg8PHd3U17p1h",
  "key12": "5TsC9zMJNkB1jvo8Wgu9skpTFg6oxXUZfnNKfAq59RVRdu4nRrFSUJ8qHH13GnMNUtKi2atex3JWUB4xWsDJG8uN",
  "key13": "gP3RMosBM7tG6D4c9jUE5hWvPpcoQAhq3bShr6rhUxtJCNzwhC4xyNtRupkwFBVvnr6eVqJok8CHHTykipF4CzR",
  "key14": "3rXXzuJWgA1UK7YhLMkeMjP5yCrtvQC4HcBw79ZHKq9VSvpxWdnP7P4VCdmdJ5DCs8VgrvKoS7y6LrgWpKQpXyme",
  "key15": "4ULoXtAbRt7WERyUQsqzCGnfnyzrhJfdNbnw8vLwKFkUWCZ7hEtm6K2S8SpLv6AF8s1AFrhxyDDwpQbjSxv7CMo8",
  "key16": "SgjUupRsQPJpPgb5NjYPXoGmPtfLZitGgRozxswZA7Wg1RhgWE3fLwVBwcNyumfkerC4VjEzVQyxvMT5C4NXpMX",
  "key17": "41mhrzsHj5K4DrMFRqTvQ75JjF54USzRySfga5ih6QVZ9PnRD3NS8bXPNe4RMTQv2xA4ZpSvjLg5CbC4DNLaTEoK",
  "key18": "2gbtnW9wQYA9sAuVPSsfKpwB4iWGFJz1DWSRGHELuXKf7UccUZ1Sd47MdjWiYZ6JRdACuXxBJzfnVFZQLTYUYhXS",
  "key19": "4U8VWkbk4QDisk6Y3iujtodQ9KZG1r3h9ukUMWxp3L2YEmEoiHoPaVVhUHC3gXMVLmkpepXVZBkGJ9Hkr4yKWXkK",
  "key20": "2Y3N2baushAGcPt4hdMStX9oK3ApLb1XkQqy4CBbWppTm6qcyo3RLZcJ1qARjjJbCV7AjytdK7zfaqHpRxjAD279",
  "key21": "4AMjhMD3qKKAzmSXMxi3dkswvA7dfGXTK5VWvAkrqKd8QgKsakJUCQcTCbCHCe6s6oFjqc7YcfYTCPcpEW6LH4Qg",
  "key22": "3UmP2wUnhKYbrYSS116UKUHBYKKw9NDAYA38NaEutrCJdNRL4FDsPGRc9WTDEpwiMj133csTU49SXJNAL7Qk6wE9",
  "key23": "2P6ZvbQkM1ewQyyqMyYGTBcpJZbUbfbnjAPAmv6qZemKSfjqCHAt2K1Gc9qo3HiFDtUbsheoSRdnBsek415YV5Lv",
  "key24": "2GopB6JSYA5NmpVWiXksakxuqF13trkixyDvXJcf964Bed3fCtQxRqUfDrk5yqNXbEbMdDdBqTyyXXK5SHWQHcBj",
  "key25": "pWzYZaqeo7VjG5oDr2CMcrAEzCw9kq4ooX9xLonZAmDhCPbc4YJwgTMQDFZneHj1wvgVxUQcJHq37N59FvcrAeG",
  "key26": "4LihzJogfpE934Bh4oiekNM6mDdFrJCy9Ah3KoevqRFj32zmZxFB74dhRELEULkf3HjjbRjMdRf9jLebHC1vX4JD",
  "key27": "3yS9icL3eFG39hUPX5ejWM6UYY7eNFcRncbCBCrN6QyZwpZoMQzzmc3FESe7pUZMWMvRGsuenCqjw3XRS7gHi5ge",
  "key28": "FEmgyZAVqwv7eht2ExXV7r4iFtowDXqvq5po9Lrh9ShdoUEfGTG7XpLab8E1C2mMWWiLegPpJa5L4fWx5nFoMty",
  "key29": "4qYm2tu3PtGDkjxka1L9mpYBZgEwTZBHevVaUn9qt9QnDBHyueGXvnficZ8mzfgVubXuG8mGj5Kd3dQjj9dpnUKV",
  "key30": "4mcEaZ1pttg95tn8tV8WDTs2jEWZDjtFXk5PRtUQjsPLTA4cxLh2pmohS6KtS3DRhV2NhPP5b8vV8m556wk56Qkv",
  "key31": "2PTz1GV5AaR9VYL6jjyppcGhYgjSGfxvnVRjibM93jDpRPzSmvNAUuccp4HhmJRKctpSreiAGyzUEA2uoxKmjtAW",
  "key32": "3FVLBivkXoZ8gJC3PsAip1eJuGoCMSWmZFg98SLfLRMFMjTtW3eLoekJgjX6CtRTGkaYVWpXBfyijJ5peXR7Ay3e",
  "key33": "2MruAPmPPYBDgvcvKnGuWc2HZMCK2gwRbzAutCdd77qXMFzEMrFWbcGaYC9sFY7TdnXvUkWBVKyDRwbFWQE6D3bF",
  "key34": "4rCSHnvp4QkGBGEq6JzfFggYMWQgFteteXFqXWmcoWcob1jab2UTzq8gWE97jzUjKm8AmQYL6eUbUKzdvLp6DXzi",
  "key35": "21gJNwggBfW57Z4A2dvT7LHEs7sUePyBpJRfqaM6B9yhnDaZSKSBLPviv4hfXwUqfZ31gSctyzT5wRFR5sSMFSbv",
  "key36": "5M7feCT6bv6Y7wjr2DejpqspHWvHb2PVo3CJNXQUtmNLSUCJHLmeHwah12v1gypDcch8M7Sa5qJQqi2xWYwSfHMQ",
  "key37": "3vhB3vo9CzdnEsDCzciz6iF8tfvHnDmXDhXS18GtBzUHArvaDBQRDv6rdGE4x3X8QKrxjKu2jjVhYYsXqZcYzGGh",
  "key38": "4WecuUNatWkndZtZcgLmBVVtrT1G5wcbUwG9UDpRanZwPofSjkKW1bzUR77V5ZZbxY2SyHy8VKAUrD7qL3DYjrxs",
  "key39": "4xt1KZaVVgd5x89FtNJPDGG4a7XGSKtcYcdXxCnfeUBw53ktdbz9Yo2oRj8QaJ7W8WmqfvvvfYimxEdooqVaJgD2",
  "key40": "3goedu9Qh8ZznuHuSexxKstoGHhPTGHDEdmacgHuUgWufzngAbzYsSpfPHkE6rzJmagYhUkqbin536wWwpzkiFQQ",
  "key41": "VPPcTj6KZFw8PubqxNw8kEMEZQwKVLfdixG6CPVSdPsiSmwjzZQywbsrgwmmCTzFMMCxSAoD9mjV6nEoP4jZoaD",
  "key42": "3jNMoDoZ8PdH1UCv6NXHGKA9uUTbq4HH7W7xorABN7vu32VLjA2eHNAXJRLMEXftbz6NR9Vz9A3RQDCZ3AH3Cowb",
  "key43": "44L2Gq3hd6SCdGuAhmDG2f1Hns6fa92BcjBpFTYee7VWCRqvyYEDY3PrSiLew3isWNamwYAYK4tJR8qnveMpWXif",
  "key44": "2GFFc7mrVS4CBWb2UPXuXxZWoc69aQTmtUD3u4E7eD3kYkaWKfzgtNoJSzRZgYsEqjvSJsrFLV92sm4K5fR6LuXG",
  "key45": "4Z7eH388T6pZSdZm87XJhvx788zmL7AkmhhhnQ2vbKVhAWcLXopjopGFgTgeGoEvtTebuTaTN5bFmjG35ZvD2Nek",
  "key46": "ufd5NaN2LZF5a5Wx6R3qCumkqYwesauJXwY3ETtFovkWQpbTYikewQRLk9smYo3SCesuJeHvpvQr3jwEnsZCMuA"
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
