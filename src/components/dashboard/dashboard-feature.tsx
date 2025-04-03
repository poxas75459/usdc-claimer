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
    "3qpSh1DwqhUsRgvQf2iHfRyPSkZ1owcEcrTZsgTo1rNjCB7RCzibJPj9thmYQBUaQubJRgWjBE9E43mTKwKoEx59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdX2suWs9PgbPRJPEEVJgtimk2Q1QV7M3y6jREQBrnjpyvMPW7nw4mUsZqewLBtVD8BS3SPW5tJynnCogQck4hq",
  "key1": "4ercUEp4bHtRvnpRxLLfD7SUjED2VqdvNT4kyTR64yauTokz9P4nUQfiGwnue6hLfC7rKG3yrRaf4CoT6GHDex2z",
  "key2": "4BYeKD7iwB95aTZgdfkHbqxALGHg2Bucd8YSsjafcaeV9txiSQHDuzvrGoSe1Bc1AtDnCdeMeeWaD63TXCwU9rxo",
  "key3": "2a6gBh2NA5rTfhoZYCa1yJEYjQ2eQJgh9t29GT9TBtbX8LTUGp24K4SG6Z1BNKJPsQiamgH5vL6kWqiDPo5WA5qQ",
  "key4": "4ndoprfrEeC26SETxRu9hfo6c9VnwP9XN8tyzzfNrWH3Hk1spU1hq9h7ij6HggM5VunJw99qKeuP7Lf52qi142mg",
  "key5": "4XoNFzF3Kg2CijnDYEcSs878e8xWHb432ctMzgjTBBfE74uQGmUcpzEsvnzDm7pQJQo4dxoYd8DqQ1dqazMgSjhJ",
  "key6": "37KX7FFyQyHhYQqggMMfAUyvCaKd2yjWpvXwFLVvEW8Hi775RWiVKwjYSoUjQncafwikJKm83KqkkcdEiCswojcw",
  "key7": "2E995pGACXR8Snc1QANyhSeFG5t2d8yEPUpY3mY1cAAPe1fp544vMExfG3y4c3iCdJnLnxDsVwwJyQduPsje2uEK",
  "key8": "2SSzBM7MSBuhD6rqYTYW96wh1bfk28i4wvML3acoYXPofZCohA2nncB9tFjab4dnE5fTiXK3YazRL2bDk6tWuZ62",
  "key9": "3ZQjdWrpZQZ3gPoZdAeemgZZ3ogzGfSiso34Gv2ro9wzUpeWcVqZV9sTgPqgT5dWL9kPMtCtgToFqTiU64zUfRSf",
  "key10": "3YzXHUFbzME92DE1cqNSaoo59Kinjp2K7XEn2khy75e9G2otEg56QZ2CU1RTrAEk4AR6iufpTnggNQZSpTKsgA23",
  "key11": "5fnMx58W78uLsAycmGV56f8Z2sr3v6khWWqynNYHT1hMBoUf8BWnjSDcWZJqTyFHMWXZMaNg1JwqLnk5NKXKJYre",
  "key12": "2wURPdSj7ccA6LQyHgMSVecWTrtSnrTm27HUWoG7bsdZbCybXmXHoX8Q1e1LhP669865BctFVHzDJpzGHhLqQKVR",
  "key13": "3qPXT3trLLVEgES55ejk7TPiLQSnTu9v3WJ74kQiEMbcr7EjopEvoWJMMVBBJRTdt96yAm49ux5R2Jg93TvWFw4v",
  "key14": "4KriaaqAPTE51c6cz8Gi3LKiZC9KCPbBXaaTZf7tmrUdx6HVNUPHSZEFuXFncTXXQ5rvABP6u1LWoLiRhgW38Akh",
  "key15": "KitTqj3CdjXk3WEYQkwhm4nvPbVdFLuTJWLqgJrwfaeMCBzcJkSHTPQgXqYTTPHDGb8sUuei1hCYKECxbHj4ner",
  "key16": "5SHvYJW2dvog8aYS4hRMYr412zRMNZ1RfwwpUqtmX9xJKi9ExrJMxBoXWXMHkaxzyCx6jtkNf5esSVeceVmDff6q",
  "key17": "351Asqeeo3PJhnKBLRJ81XXEpJRyb9UzuWKgW7ZteRsryQHSZpWZUiUQFEdvPXTvm9XM8bzqrbWAJwZxNbbsKzW7",
  "key18": "4N1PbsXfxdpy3avaazZXDT4RFjKZpa5ct5WpfDwiTE3JQEV4K4LtUTE3JAQZRfnTszfCFxtrpHejAQoqpuYPAJhm",
  "key19": "3GqXu9EqQ2dLuymJN4Fivn5QZMLaeV9cS1CHFv3qXH3KdEbq1Xib8JeMn681Ud2A3NMVcpHZfrEWn4zdJs8AfXb1",
  "key20": "5ZnTbFF2VbpLdAWS5Z21JQtXUFRukmxdK8fpRarxoZjGC2SJnNjVmS1e872F2DusMedKTsBzCCzbxbmEFD2s68Lf",
  "key21": "29CzJZDUrJtvBN7ZQmFFUhWKaPKH7ZVyVJnn9zxzNGeA57oyLQwLFvbEhngkHo57uyzdQ8WJHk6SMkGaRijR7Ahu",
  "key22": "5e5WR2oxvQNqgKrPYNkHF5g1nxGATtLQJfit5ZVKBsWdsyZq6jFGNrgevtpezCLgndiktAaAtTvhrFT78BD3Gbbe",
  "key23": "3v21j4Dnyau8LoJuvyBUAKjuN4UNznF5NHFrVJGNStKiLLW31uvmiQKzSqCdMYyiBP8b2mxc6rdXsWzT7v9sS6T8",
  "key24": "3XaftjaU5yKh9MbStPMQamBdDjwQhZ4T2Lkb9mWaEisbFF6avjTUKofqSLvvWaK3SFV4HFMcxfDSmUAB7eiT5aAP",
  "key25": "2QzdVmWF8sHsSToKZQGgX9F1u1hxop9YsHayZ5kqwYUuf7cD4ShbKktparLi9qzTXjW2XNeBWJtFYBuCLco6jZ1S",
  "key26": "3ty2rd4SdHt2vxaaDE2Rfjn7TZeVRvpTDrwZvkJkg9gvQa15WoptMjoRjtD2tPgtJfVBvgGaZcNqcpFWBpeLPq2b",
  "key27": "4QYUjx6GgLhKcY6D9fhih2Ld2wyGuh721fVN764VMfTFS9XYB44vXWxrUZ1MA65B1r26Z6J6Hrd5GroQxMZzgpQZ",
  "key28": "kK2eJqZVrDdRDRBNTg8dx7y9tz4qvukU15DsG3eGyZTywmJR9LgfBAx2ez2sg3LxfaCNB9oEeDtd7nLBVQ98Rzc",
  "key29": "4Y1aWKrfhr3ZsNwUTwrr59ioRPzoR2NpZAFoRnPduCPmWUPSgAKNDik2MeLaCp5Xq4ASmAbdiLwLfTuGiJWuLJSz",
  "key30": "46LGtpk73LFSdCrgJxNQxGoA3RDS8KkJ2Wzc8eGUDgiDArCGhYM2nXYbW8zdwx6L3akLdywHQLoTXx9VEN2BJVz7",
  "key31": "3CeWZMdwWoCgjMLzWeQ2nbTevxsk9kA1XZN7RXKLL28joez7LCd22mBp58waMiYTFribb2pp7XKmbeCTjtTYK7zF",
  "key32": "3kmV6HTRSWgDaaGydqY3ADxFgtXf2PEau2PACVbnC7Es9BbyjtJPn2tGeHsgk6jSj8ToUnFEddmEhGpBpWSchFQs",
  "key33": "2vUHNiCnEwsTb8pi3mqqn2NcT2UUFbzXiBX3Gqqz6v2WP8CFqh4nWD8JDaY1R6BAyfvB8gtgKnjhjoW2DAsUkBoX",
  "key34": "47ScD1wi6urwBGHJkpAhWJ13uBwAejYshQiTzm6DUtPa5mEKCNroRGZe5TKeUbUvqWT8jDTxEuaMTuCDkJnynWtL",
  "key35": "41j8XqLoMjCPGeA4hTH9AaNQ4s3mqTKCHgLaW31nVsedampnwrxxomwoK3LrHmMBymqtv5kpYorRTdyzHo9R24J3",
  "key36": "5n1JqCrwb5ZfKJUB9VyMVst6YjYPnSpET5EV4PCrWtdTLSyBJyDAxBdNsSd9UvtNF6wxEK5tYW3sSSzk6xKvhic2",
  "key37": "Cv3DgbF4sPss5PsaGg6VMpvHvg64aGK9L69AqM4T1iJDieg45krmw6VGCoZZ9FgUyhTxX69rgrwSCchVabY48Ua",
  "key38": "21U1aP8A32v5VrzetwW8NgscagPU9dutdnE5E7To39sNWCX4SawVZE2MmFjf2WAzrTjC3Q6r8SHUPTWFz5vwwHsf",
  "key39": "4Kg5sWE8NmD4GPoktBiudh7k7KSS4D6bJH5AAXUFiibob9xGMj66mWhJ2DjZj1LwWvrEjCBHnebMPjZ5NDm4LnTL",
  "key40": "32tApasfaHSyv7hU14NwzicgLVH9fcsWCknQB52UNH7ekCX4tHY3733bv4QH6YvsQgQZY4jzYgzEa5tZJ9yCEQpG",
  "key41": "4Z86NievqxnhegjhnK3R2H7rGjkZhJswzPr2bkAW83aHm5A4fh5fbVZPzWYBC3YJmLFcSfVBAhbU7Vry1fWaGWDa",
  "key42": "2C4TbQ15G8G9oqkSSuecM9nXkVsdXgm6xRxdMPktzwcNQcFiPK5kV7jLQEz7Fzsbo3Kno3SM6h3bZnioweqfvHDs",
  "key43": "v3VxmppjEczwRyz2MdF5zJBMfgiaH5zgkmL27YZv8SXSa7phJSWC2mCPHmRNF2tQvMyF2Z9iDgx47Q8prarRGtH",
  "key44": "QU4rpBp9FaeCTuPF5ahon4cgggm5JYs8MC8Pm1GED13pig3iSB1w1mbJ7chqx8HkWGjKoF2k767b9AjHdZkMSXa"
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
