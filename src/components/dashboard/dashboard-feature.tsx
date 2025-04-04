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
    "a3L5y6d538AXqVkZBvTkpFaXsf1tcZJkpHCj7yLquQJePJgSX9jiboFAKg8kgcTkvwPkg1LMarZoVRdhS4HSZ9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfH8WQcbXcWBq4ohSmgRy91KCkdfAzTmXekowF1VYFYxH7o4VfHDJUxJiMwHRqaaVBn4jiMwe9wN3omQZ3o5ZtU",
  "key1": "2F6Qfowb5D4hgGP39VCckYLHszygxU7vMQcRuUdPPpi2w5QnBseLpeftJaHRstU5NqiF8FAD2b9YhmaPYUBDwSWy",
  "key2": "52Ue7Ag1hVsprngxPWs7J2o39SzcksJSamvxDXp22AVSngFmg1CMnZ6tsUCzr5T5RjM1AaHm7JqzSwQrSfRbcZNF",
  "key3": "2Eu4GpYKhqD695HHD9vDcJxfxigSZ37ihgUuUudLnt6DiD65LCXiG1PxBaLXRXseyvyCwZam3aPqvpQVwuMpTEGg",
  "key4": "5cb7bwoMC1yVsHP3hPXUubTGyQigLjEW2oEdYuQMzoEHbpmMoxFFVkHBciKpjxDev4PB6LWunWQUvAbFEVQKMpij",
  "key5": "u8WwFeiMCzE4Gfd4Kune82d7WEa2DJHchzyd66SWhCgN5jQAeWhiutvME5vihJjMfbQ83tSqt383ptNQKowQTwD",
  "key6": "3EjZA2wv9FBHpdCpoHyVFr9GC1HRvNuUpkTzT1ho8jtFQRBR1AUPcBNp8pVwkTJU1rKeskksY6ZKdjuYJ5jGUe4u",
  "key7": "4hjVXyji9LH8bP5PjCntr9ot7QvtbKtob9oBMLFq8zqnJCC8jot4Fk8LnUnF9r3Ui4s31G7eGQjGQFFZA6N3Y1ie",
  "key8": "5VmmQr2fyR7TAz1vwxErfS3oCCyWxWNiNBnsX3ViMMBbX92LuPZkSBx1CBA4FoTQCZAxRqbQdwe7b4RmVe1kM5ow",
  "key9": "4haDumq6Q8r1tWTQtMmgA9XvTPRFmeiMgrNSRtLMNPr4C56SPHCm2rNTQ3HE1bWozU6fRPUUUfSt59SfZ2dnRBBA",
  "key10": "2D9uBj9EN9WdPgJ38x6XycHpBKxETXm5DsMY3Uc4h5JJ3mH8UGwfwwv1dQpg86A4rdreSDtynwQNv6JxfSGTtHhZ",
  "key11": "65nWCyLowHGmRY1drtADwjDYCrf4ZD4c12Vance7NkewjuWcPp3hBojtsuwy9dYBpUn14mu5LCefTgS3sVo6Mffm",
  "key12": "28FYXXCTiB3pAQNVBb4dvF5EyBWrbd2EPC5ksY73yyiMpQw5HmzKbXxTQFxZsF31n1yKesNstf4cAoTpDX7R9DzG",
  "key13": "5LjfZrmLKzY2t1mG9cFcHyFB4MAhunzXPcvALMmEmxiucd2X2YSu9jFVGXoxCanaUzhQqLZg3xvGrmssjghyX1rX",
  "key14": "nW97NQ6CoYJRndF1GDRRWT9VfuzFeA3q4qo8HD2HKc9kmzoGM9TYuCi77YwMxGFGzL9mBnXBRaoKtRzDh2Dpbg7",
  "key15": "4mCs4Cm8zhMruwxesnU4upQiM4nKE4FY452w2ASiYWTSDt8Nxd7k1UF7hx4XBxvkz8FyLJcJ1rtTFZuE8Pf4BSbD",
  "key16": "3rLBnmKxEyA7rmBtjw48vFXRKxJ1X1TYm2kotEn3oJitrw6BxbAFQHjK7V59u8RymFuosgtayAuqXSc2UjziQjWk",
  "key17": "28jedHq1s9wiexmFghWvAG5jPSg2Hzk5YUaEeUh88mMw4jqbsNyqmty3todrHSdcSg5yFHxtP1e2taoxVE2KSiXA",
  "key18": "3WtA7vgxnsD5gk42pqwcThq7Gk2rxoXP8Dz6GwWyUsRZ1p7nN9uSiVgzmzqfXcsEYPTV2MPEKKzcyfsKVCm1VYwF",
  "key19": "4we9kq3zKZjSmAjkAb9HnFk9poDS6GjxUn3rpaqAhqiprznN2oqMJPJquUopbcL8iENRHDrnBmZEnP2P8SWjWMqB",
  "key20": "2Sbbc7A5EMBLCaoFkhEU4U16uzxDYgv8NEmXwf4ty8gPUGvRqn1VDC1YfaBwpqQ3oAk4KrdwvkCard366WkfSxgL",
  "key21": "5eQeLaCRLdBWkfFut8mR2x1tmdx89upJbhKP4VJgT69asrsBV7S2VcwqSHL5s4hVWGGnAMFm2vQjU6de4ASnWEgv",
  "key22": "5MEVoM2kdiFLZ4AKNTQiyZVWagS2q8U1p5nxKiowdY382hhffThZWhfpTuobV2m3V4gaqnpEqfPebKR9XNz25pfg",
  "key23": "3eLijqtJj7K1jFJwg1RxDM74Y1N2FQNUapi36nurZhFKYLL51pqSxdj7YEUyGxefqG8RfThtGRCE3u8qXHwwGSDS",
  "key24": "w5RQbnJJnrvNSmek8ztZgd366fKc3LkzwXd2XWWS2hevCQYuWVY2soZPf76yKCK2cYKVd2CsMXu3MFqimvityPq",
  "key25": "2KQ29wuLuAhNX9RzXtiyo9RfbyU7VbF5V5LZjy7sfqENA475W266EQXMUH2LWvE9Ctpp6aUpXe4Gt77GAcJuoer5",
  "key26": "2fhfa2ibRodXJ5TxRVvWMyRVJc9KzEuCq1pTkBe9YZCGGR8NoXJh7J1ants7WzqAtEGUbPEL1VXnfBGKbEeHcAvB",
  "key27": "zRp5cu6WNs8Uy4SP3HwKqYDFMLcP4q4KQpJVEP6pcKpxofMGHcjHHgFwyu6ZoJcePaAuyLKXVGTrwc9PJ1noRWT",
  "key28": "55zAjEUC9z9spW3VNTvAgHjjKuaVUe1REPv6n655tpFUiG8Ur7hFC4GghJiFb6p1RTN8bxnvBesPUrShSVpQZu3H",
  "key29": "5qmDj8ic41T35tgyGQXG7YWD9Q2JiDPneY4xMHAHRpoDjAt4CikfjspHEPHJ54gfAMk9gr1iKxRzCo3SWQTnbYnH",
  "key30": "2KbZ66xQ4z2bexiUoBLDBaJ2gsZhQqnPuA6cicHzTKFf23uvHvZ8nDPHWdcWcqantsiuPtxV13UibjPrUQcJL6hS",
  "key31": "KdEGSvMeEEDpj1MRUdj5fxDShKumUR6Zz3J58JjV2ioDs7BaCqiSdut5fiuAWm93bgTuRjDk2jeHpB8bpecLySZ",
  "key32": "4cuEC79vXF8piM9And3PbzCnkFxJq7zTky3eGkKfEjj4YYqVitT1zXQw8UFmVaWUMkjLUwmYHECxJ8TXsC7TL6mG",
  "key33": "3tCTEWBrawCBFFwAz4BF4r94jhME5kZMu5mESfdmNaaWywj2NDumjL79JXrVfo67cnTxCpRSxp5i21w2EXHDLCSb",
  "key34": "4bCM76bobPAECCzQRyWCo5WbLnzZH8bfj4weFW5BbYFdu3fWe7Ubvsdny2WodFm8xQJ98jBKYTHsNJV9mkxtdq61"
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
