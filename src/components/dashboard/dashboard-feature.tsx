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
    "59vGdGnve35pxc7ozNeeCcqjz9xiJU5DQBhs7T4fGhwmVoRt5M3rAv8Qy3L1rRnwnoDDHAXuRBmDftLJPnswwHwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVH9GKnCyM799ZdL6pFpAJtH1N5PvcqgjwVLkzDmNRqNTUgEryFmpG1vToUoCw9gtRHeWDVZk31WzWVbJEddXLF",
  "key1": "2ECrxHgq1rBWPMDtxSEc4k98BA4mYr8TmiTCszDBsFeR5T9AEt3LarjbV1fYxojRcDn7tvHiFGr4ym5FN4bKgsJr",
  "key2": "6N52nkK1HsKHJBpTyucAWuCt2Z4tRR6Zoyp8GoZYxBeuSm4Bq5k4PwwxwTCEK2WqMmc6CL78jv5F9F2X97XqQWZ",
  "key3": "5nEmftbAZQjv3kPWRsWtzbwy4V7w4S8V2UYbsngzLva9qBxJwCmNG9dWQm9JsX2DjpN8vEMVB2rWbZorbKf2jiaF",
  "key4": "3uS2Jh453Eyo1bNDjBfozsSrHxTRo8hZW7dSVed6ncrnjqrKerG17BVQTUu3topiBMzKPASnmJ9GCVyavbfERPEt",
  "key5": "S2XYSZju1pCu6DxTHLVjUJuCQ1h6ZW9UhDjZezUsbAQA55GhRZWPTw1Esc8zqguBM8SqNLhQT7KHDUGofigcCiB",
  "key6": "2swXY78riurG25Gnst8qpkjHn3PHmo2yraRX2vx9Jphu4CXoAT7zQAZM8aCVgQi8MUxbhEuTxVGGsGyJVGHZJJoh",
  "key7": "5CvxamyNLcBFovACRJemDMtxi9hHjQu4n5kn5PrSAbUDSbaREvjmgz9U9sVcDzppUHe1Hybvw6t5ny9E1PNUtgUL",
  "key8": "2S5TRvzzFvKXbganpCncwSc4U8cfGDLTfdqKeHNzvwUFtUuiGLp39H4nohHN8JpNj4istAUDBx7tYuj8q8LbwtEe",
  "key9": "5HHZ91CambRHtLrcxDSzcPXB9gdiVp77eVAdYDC454695tDuP26pnheNvCtW6ErP8zCtioWQMPzPVKNEyR57iw5w",
  "key10": "5pXMknMgHoWHFhhN8bYcNUhthQf8XMyZ7koaeawvTNTxp2omn8PKCkvs2uocaD6Z72uj27SSUBUBv4fxspeECSd5",
  "key11": "4DTevCVGKwxUJ3WBZK3ZXWRx76MaFGtoyrS1AhLJeq5bePrf9t2AYNSYC7or3N1NW5h8USeTUiuKo4hh1CotPCrv",
  "key12": "5Wu97ggpSyZtwyWYjs8Umbpa3BfdwfS9iznLhP5qzhQt7Ht2m4osbwE17JoQNTxCv4ZJr85EhLhAUmo8L94cGA7X",
  "key13": "62g8ZPUNSdMrG3cTECnyZdfvEPLzv93PunNrh1CwCW9B9wGPeiTVS25niquYq1tWiqgLu5754XmsWCWgj3uTTnXv",
  "key14": "5p4nVoNYmDD4nX28oxmfmmkUfLxnFdKyaeh11Fxy5raYULmW7ScbEyYjDEXo6XQVH66VK2uf7aFVRS5E7RntnVws",
  "key15": "a8Vqn16fxS2t7gvGvWk8wY6zXn9tctMZEbLgsanUwKCn3rfoFXUYKmVvYShPigxZhHUYqkSVqxztXfpW6KE7W1x",
  "key16": "4Fvpv6PDpBR7Z3yn3ASi1JcCuUtx8trN9FGQPoTCwNZXC6zJnNsApSMduLR4i1FVJyRoy7eTY3pDSBBduLSRCT3d",
  "key17": "43Sn7Ab1SSqWVyu1C2JiJhx9Atmy62rE4e5jn9grChNjSV69AqSp5cmRuBeXVoFy1PHWEgeuPyVqzdDrSU4APmMx",
  "key18": "2BE6aE3PhnCidVrTBz8Gb2s875mVTrEn1MZGYtfKkuabGBLjrnVWk4YAwf5h7ZjN126Y85qvwHX6L7XgM7B7TG2V",
  "key19": "5ZzMhwpMt1AXkhpPrtd2BJQRhj8EQAuAr9QjEMNB9ztEV3GABfddhid36vqTAjcknvzeJuxQywAexo15rvLtnJpW",
  "key20": "62FpzVwG235GvhpfaBq1KE85GCE1Bav2eHo2tH167EaBz8gzBCbRUrLZS47oEruBNbUFV7Woo4GP9khk7Loncv4C",
  "key21": "3TzXtCy6EvC9QvHop8t1PweUSiVmGHUTp8jBsvASbupiM1aTJaZmZy5PcwHEKP9NVC4jPg17aDhH6fa85tsFQKfF",
  "key22": "2ZNo9AVhLFwCTyAujeT2RWiNUrg1sKXEgzgNPQEB1d1ucs61YnJteszBo4S8gMEu2123Nk56oUMxWEoatWvD6FzM",
  "key23": "Ce2nq4kFrUtxneKzpbiTTpNKsVSZa31bsEZD6CVEJTdEd7cJawxqppKuRwgWAbjZuGKxKNkbpU6T9ySgeUFhoBA",
  "key24": "4aBu32SqW87vX9sm6cNHexbSbym65s7KwqyY3MWnKPLfoFKMWYJpszGs7NijYXoFPQP9oV6iEbikoYc8Aiyne1KZ",
  "key25": "pNCiC2gdWePQFbvvv5xiSU8iuLgFje6MorfQtHyLtDLCc2LHRyrgXa8cjxi3t6PkFBJgF73ezXpD6F2GYpiyE9i",
  "key26": "3VDQ2tpEA8niTccyn5x7pPTh2RUr8MG9Qk4QbE2azhuRQ15uT8AnMeFaBtxCfD4Ubp1CDy93xfwfdRcrbtC1izuT",
  "key27": "3aQEAAtbvimwJY5e7edBwjYEi3yWidfkZnGGXyvKqxatmhtKoEqPP972rpHK2EAWnscgTCq7qiTHZnb25oYnugV5",
  "key28": "eNPJ5BxU9GHzLc5WK2wNz9Z8CdFrgsP5Xrec8pgDprKpKJFmJTUFKfvV3NYaBjqLgSfG6aj9tTGx23fRKDjTFEL",
  "key29": "UXsbK3rAJC162jhjkxZt9Reg9sxzcsqApo4HQkXRcyyXWK9QL9a5LdJWDbjebWWCkcgvDFxGsJMdNFzTHYi1bCV",
  "key30": "5MaP7EHPuLZKVtpzExKojeRwM75pPUQnr1T8eVRizEk9m2uL23FLvQvf5ZtAfe1TtZD3vbWPKzLCBtBaumJJqCYZ",
  "key31": "q6crFNETjDVC4gG8XwHDGDBW8Z5Xt4eXxiMFFGoTFNzNjMHbBGz4ghU8ow7cCkG9NmYWpx6dXXTZM8Cp7gW8rLP",
  "key32": "2aczJNYMNLp9tNGLL1AtnSNUwQWqVSomQg7VSnB1jYiqWz26jVgF5ruQaDtUEkdd1T1yDg8Kye4T7vGRpwHfpwru",
  "key33": "4bJ498TV9pr5mhRdQAc393mEopw6cCb9NzoNAVZXtGJatPhAzXbLWv6qfBm8sZ21fvZQibbg8xXhJ7gPYeH9DUSo",
  "key34": "5abhRFfTfC3cWY9wpB2HjG7e8gDH5QF3t3ZYkvwKdsuXbLtJEYnANdH7gcpmsGUd2wQj1TW87NBaEd6zUQGsLRhm",
  "key35": "5kZBGMz8kLZkFfoJwzs2YzMRnak3NbPoCq3HuZAJwLcR4XpppXHTRPTqqGp8RYpykeTcXSxb9jx2LXMsNuUQtyMg"
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
