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
    "3qS5gc8HBJSNUu5GFLvgB1JoFYZTGxitMWSFUHXSMXyZhLoyGTyqPkqyv3HxQjHgiYxcoZZ5QAmM2fQ1R7LLmPcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVg82DhURDKTRVwYuDxiCNJD2SaDKTpT4edS2fzLMvjgAp5W5qZj1gVJfK5sTZXdJhcCSeZTPVTBHPj59e8KbBe",
  "key1": "G6369hBYJ8HXMMizFA2o4xavcdLGJwoyBfVBs7b2bnXsmqq9dMX6uv34VLKyh9kvK2yw5cC4XdwjxmwHUBWnbzf",
  "key2": "1D5SHuYN9hzYGS85ZcooVNBfKUVM3RKaE8zcKeLLVsVyAudRiLUXjaVz6PVG8ggRov9jW3SK3yYAfyFrrTPVSgx",
  "key3": "5yV2gGZYT6DaMYaN7hXZGLkSy1KWSmawmLNY42EUGPpF614vu3QWaKfmDkhjnUUjQswrbsFP5LRkqbK6AqiToeZt",
  "key4": "3yPLHgdQCsVrqc3QqBfSoGwWPfcQUFSDP972ihqMKnANx3gGqyTeWkZE27uhy1mRcYs2oCYREgcoUaY4jrE4gcWo",
  "key5": "2obBGPYdfXjJDAee4R7v96RJv7QctRxLbx69sGqpzzzpchiooDZoj9GRMFbytJy9QUMWLCimaPKGYg2bFBrMqng5",
  "key6": "2UszhgXhj1ckFEdE8w1LkAAsMtiWJpDy7dJtGJNF9JKhb55NegFzLbmnLyvzGZCx4yAe4Xa9WZL1wxzpGNnVXRg3",
  "key7": "MAjzMCGg6pqaiVjDr55XyCjx8y67L94Lfqjok9zBZfYiCdC6heG8HTnUucgcFpMWviMCYvtXCU4ibmBgUVXMYiz",
  "key8": "5ppB4UrjddRCDmQzyAsFoU7nSMBzYFiSReWufVGKnRHT2JoehYbmqLzwPFP4EoSKG1JhXLZyLP91yfdEQ76JktD9",
  "key9": "5srMSCBYpNhuTZDTR8gB3g8w2c31zzgNhVfFv2uFSAz3bsABskrq39iPyTS9ViBwJmoepvdj1o3fKbTVGphwPJBY",
  "key10": "4DsUyWZ9GjdAprBrL1ZguzsLyA8Fasse4wiPmWA6m8xuxe5TQHVDAbiFCJfb4mA6wmRhJTkXxu2vvo1dTUcrdHzV",
  "key11": "sofMUTZvP6XuKybc2eMiyjUjsR3xVCVEESGHsVgFjWSVwVZnqxqGrA5Yqz3iijurpcB934NvRRZc91GcWVSzGv1",
  "key12": "4wBHFM8zS78oUXRkj95YSRAefkGjGPDwuLyguzaDcwqQfnfjEvi97NUXb8TZErHc7RPxW1prThzk4vPGrKq4Pohx",
  "key13": "4dni2FrngBQC1595WPdKxmf1SZQWYpcAPVbRTke38BshUisbGnmw3qXqVpZvg7MHWiy38AYmr7ZV347vrb4GUogt",
  "key14": "39ZXim68M1tqdPZ6oFP746weAFBX6CufY6yKTiWoXDDZ7ssC6TRRK2uZVwPYnddYHWjSEvpaADsyuzkZ8aFArvn6",
  "key15": "5YnhriEVQR8C5Sw8XtG33xnqiNiCVVj9QDNnWMfGpTUqZChDPTdJrYY1GEMfBRkuu3PzBf6pZ1xwGDMVzxbZNJ6S",
  "key16": "32j68sYuCubnzGefyBrkBwBSVf5fmK9dHLx9W1ioJZGJy8dfryECLeEgF1Fsv7XkPTYKBSyKzNGAohvA3WpFKdhL",
  "key17": "2wvGKt2kqCvfftGkhh7sV3akqbvoVPUFffBgqDiByemthJMBbWQ9nt8VAXm3cRLEEBoT2nH1pgBqfwfYWWe7ntqy",
  "key18": "32pVu9RgWzizD3M5Cr3szyCai36BgYeeyGmscFCgVZEifZkdeVQQpnJ73JaBcNS3aBsNYERjdBBX8QCV3ds64qdG",
  "key19": "2n97GsbEi5CRBbVBw7cxE1GGqE84ax1ZysTdUvSCRB1e6ekAazLqgCMszPwLwuhz5u5B1GkZUCq6MKwj4BuNCD5D",
  "key20": "2jpPak6iY5ZLZiTkztP2GAapN4KG2rQHN9Gcd93Su5FC4qewJorjLZaAw7kRYpxBHwazheYYHViHR8A6HY7Un9pf",
  "key21": "63JqJtUUutAK3giwJFwdjgkhjn19NARSHewH9Qpp4zCc8Dhf45gB2DE6HQDqwRMaDVHZpjuW1W85h2kh19oADVvS",
  "key22": "5RF66vhj26ZEHVLo6XxX4aXL22hn7RKxCmLJAb4Hx6RRYWSLfwEuBFfDLVS7mNDYHKqeq2oya7irsoKEZe3FB15S",
  "key23": "xtRCndFb3J4aZrE4foqWFqvy9GoZR4CXy7wkAxVkS1Dt4n32ufxmG6aCdJdFBU8zZrXKy3tzGWLyKa3SquCNEzF",
  "key24": "q9NT7hZDLLunRof2be1G41T3dA7baFKX985RfCcLwCvy9Bywr9ihhx72b2W8hpvVTnqu8wzR5Rozof8AaCxnWyn",
  "key25": "2UGPretPa6rEu126rwXzpUrf8jSeHpycYrzaPLs2YKcZTKQhMEPfAyyutihwccSLMpgvoDtJakLdMZuxcMdMtenK",
  "key26": "3hNJchNuwfiUXoAj1jgG4q6GZnU3whVetWyiQT3LiVYrnzTTeejt15PyRK76qCK3PLnN3yih95KvanBDk64hELqz",
  "key27": "AK2nJeZ5gD6x9q6zWZQ9vMqAJSRetZvNBwhsTToFphHxJiGtanCnYwckmPhcw9R9Kv1hzrDQYvozoS65v3bU48J",
  "key28": "5p57DjhqEUagHF1rTefXRDVeiiNipbt96JQxffFBUHLrPF1WCLGQjsAcri5TGT6qUjHFfKzHHXj4SmN14Fz56mJv",
  "key29": "fE6v5Vt4ZNQvv7TL9eZefTuHjX2eJ8Uybq6cLuvdykNfhv9BdwW136EihLYqiZEt9EQ9LzVNmoh5YDiriBmTWyV",
  "key30": "2XkxBinz2NJ7zL8echwuYpsWHVUoUuJgkHwUDcMkLhTL6tQF6LB5nVMfNr44vpPGKP7nLzhQKuB4yGDM6b2Crejf",
  "key31": "BrrUbPBWK2aEgnbY6zYdsdrxHhD3e1A32NHdTxMsjkVDyodM3wukuJWmpv7cH1Xyhz6hSPBtVWrdUb2Tk3nFU7B",
  "key32": "4TSDV6qQS2aik1E5Rad9qZ6pa2azcXuyJe5Anq6rHQ8ZKuMmMFYQDxScYZTmCqMTFXKiVePMRat8Je1a5yN35eiz",
  "key33": "3vGhCnBkuzvLQ39WvrouSa3HpWahFGsTQ624efsdBss7Lz7JxRRCxaV2uLH7LQ9bny4Gmpw9j9KKLL1KWTsHvEgD",
  "key34": "2iQKtArLMTfhE6uFTjChZm8BnMfHEhBj5LcaNqP9bUApcqUXGkMav972hBtQeDLJqhTnakmhAbtyLtXfAmKbv9Aa",
  "key35": "23wPW1bL2PkF9VSdzmDmVcoXYuec9xnvC8E9yFDjKRbTSGBG9VY913bBZ48g5vi9HUhuLQQDN8pAh7uczZ3mEr2B",
  "key36": "4MUEN9VwyRJ6C11Wk413GB5DYoPaNzBc7RkjE6hRnGMnuLKzzVHLACtXcgU8vw473EFDKq5id2FDyYCVM9d6TEED",
  "key37": "5H8cSXq3xkp6h4FsB3VmdXirvRR13LPshZDe9WCXru148yhwtHTc9y36RveAmtY7upqnN8tJCphR8UqjL5BrWG1N",
  "key38": "1peLBKmKksewgz1iG81sPeuhv5ruwaKhiA4YqhsufbmzuvYa8KTMk8dYwi2Xhc4pWHqGE6Pt5CHvPMnD1N6P8SK",
  "key39": "4qrmzhPrSJoLTyeePkspDAaphkRrHTrCy4yVNAv9X1fvskBD1Vhb4HdgriT9fGjzxDZXqCPuDCe94E5bpBLTctjz",
  "key40": "2BbQyjFa3iYbQ2rWoCVnXNBj7Dy9N3JcurHnv56Xa3eencTATia52dtZtbEp1iz7Lp7WZTtFFaoqr3FKpYCUwbVT",
  "key41": "2G9ThWSue3FJZxstv8BPfQyrvxnwsy33fmTepu5fTttMSCAcDPHtt1njXFN1GdKXPEXpx6KchuvDb3zNtFmZBcgp",
  "key42": "2yowKvyEhARSxKbNAn5Xsz2JTcRSGje4z1aFsteEL9SEYoTRSnTqUo9GYsQDgpYVPhziJVsUitcu44YCrpj76XGN"
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
