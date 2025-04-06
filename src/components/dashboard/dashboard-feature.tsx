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
    "4Ff117VeFTT9X1X2Kgoz6YYzqP4DWQziXU6sYDxFYUGhMrMGuRFvKo83Hx85W6vceNKwJgbnrpuqWrLMYBdS8x6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLjtPscPP2eNFC29qS6DUWt43Bdn2Ve62nNyLrEmcUgDY3DLXkk2r821scJWu7bfUZ7aSJVEGKfEYMHGXHkQdjb",
  "key1": "3akoA5E2XgVyg2pDSqkaMnRJjBHqMTYZECbyZhWTayWE7wBcP4qndmVoJfUtCbqWUQtHTFRgBRYTGouXEnP5mHHE",
  "key2": "LCD1wTweLvHgfNaeq58QswNxu6nSQdagiLduS2Mvwf319adeqkRyu4MJDgK4W9umpHSoJVfDaNQKFyyzSEbgi9H",
  "key3": "5J9pDfQ3KdJF88wg9k7UdsKTRJ7XuUU9FUwREVvvZCsfbhT4T7BrYYE6XEFXWRd1cCQLsY8t1pE3i3xpqvVaB79R",
  "key4": "4AB8QjgaTwqcqanskvN9VNHQ3mbco7J9J7doMEPApGpPwQCpp7vFfx2ikgTQRiS3htC2u5UoQXaCrh6XgCnfUjrp",
  "key5": "42w3DfM9wYK3ezcXZB6zScXAAMEP7MUhRpzmkdfLJGCLMLW3GiH7RmfdpTmHmDpw2q3V9VXhYNj8oDMVNTg6jvr",
  "key6": "34P4MG6gTGazWmDgzEF4phLyPG84wTjQKu3UfQE6cvjM4XtbcNXj8r4UPC2jMVnHcK4NVS2YhhCesk5qGBMc1AsX",
  "key7": "4GFwECsH8PezdB1hLAjTMLZs2GuQdUmkSZKUGXrycbP8RRgFjL5aB3WJahmYsDmKEQqmRG5pHUFyvjpBJLA6i3jH",
  "key8": "vMi35Xu5uTtahtLK5T91X1LJLE18obxA1V8NwAeJnSv3ehuUqg8N7iLvba3AkgVTmCJess4JjQhnRxu4vM5vjri",
  "key9": "4KLVxx2x1idHHxuBB14batSwykKRiHmwhPF46d6RvSSwz5kYHxA6jcuMmVSGLY1x345gQyczTxuTf44zSbtJUa8V",
  "key10": "5sXQFvvSBC4akX7R8xMvK1EZHQ3JN6YEs3Tu1vgpofCwtYAmK7pxxCEkSVvUDNaPpygghAxjxAjzKKoVawzPC7AJ",
  "key11": "61XEpbobZHH28dGiVQaFbj9iqZLuDeVPikvS3MsxREW2YTaForWWZTzChUZxxtet2pGPor8oNzhknV9JiKjkqLmb",
  "key12": "3uC7RFWYcFZkUFJZR1a9ZdKNV2L3Mbrm244VRcWchMuHAN9DoGoqtsG9Uhz9jkeSb5hF6dkcdgHXnLfFiKDZNnoK",
  "key13": "65kvFRk2KqxPvvaR1eBoaW69BEzP8PE7sfBGXJdc19Wnk66sJEYr3Jbupdf69WsS9haj7Qn4W1TMDJNe1EQDy9Vh",
  "key14": "5Hqn9J4piZwrUJ6BndQd5kKFYBwUtfRGnLM28jujuFH6JC6pFf4k5RBfdzW96Bbvct3VELyy8LKg56N4CNVKQ4sd",
  "key15": "499GgBhbUPft5so6G2HhmSBgYjKKk92jNKf8nBFQt68eib57oNCyVkWtk8okuP8a5GZsNJTRx4NwpNqtmAvEqqxB",
  "key16": "3TXeAXLE1fLfbuuTsTntaGTXvaJ2zfim75rczJjJDN8vm51uKLaoA1dKRxogSu15rPJku7i31N2snKqpQVE5NEyf",
  "key17": "FK3qKYisrtL2SeEXQYyivcPwxQsL74TV2i5QsHWKwx1beTiJFhjVfpWQNbGzr6YXCriS6wib9o5MnCsvo8jwiQR",
  "key18": "3vWiWxKdMLb37yu8L8QJVXdMJvCDVu4JH4dzEfPxQ4im5RvvoTgtFbowoB3GGM6jWNCXGkyXMY25sYCcpN1pSPKK",
  "key19": "3MwiY5dwQo4nW9N8jiDjpkqG9tuik2tBCyL2EXGmtQ8M6rnTC6xwjYyVb7GtQzqWjHSgoDB9oGJeeux8Zapfbs2W",
  "key20": "BPCyAKqqVAZ5xyyLYCs5ZcGm1n6PMVrULMSZEXYhumNMtDnC7x7XLU5RN5eaer9J8ZeNUzrYMAZMC5vjGWTbXVc",
  "key21": "4GQxA6gfSDXARLtthMT3giGvCsT3ssZsjoCUvtd2z66PhTLSpHyF1ysPvGAEKEzDqBsbUz7DyUmx6LNCo3FUedQ4",
  "key22": "jUSzPYHPMo1j271LC75dNH6F53QgTVUAZmDhRTe2Xod8K4SF3Qr61d5pkGiM4oGB4T2uWEUTqsnLBW62zLn1Ruq",
  "key23": "2CjM4PwXUVA6BLFLbuwAdt4aKMCC5tHJY7eBJa28fE5RPJ4iGdLqXUfA63V4YcaFfeFiHbLFyke1WoPMdSxYRLDK",
  "key24": "4ALbf4R3aVG3ASsdPeHecc6SHX6U1iheoB89DfqjdW5kVxGe4hoUaTdGLWCRJGT9PpcxNdQNciGauFeB2En9Qniq",
  "key25": "NeL5FT6t84dREv6FGp1t1fxG4rwrsM5Ez7Txr1b93LpZhomRtnfJEuduZNtSqbuhP6Ji2mqUoomej2iB2a2QLqB",
  "key26": "5utjnDASyChvzwpBnQGyAAPdPJWVPr9UumjvLa4gFTiq8iQ5iYvodf5gzEftzBu4fdZX4bJuLKVKFrZp2ouQJihD",
  "key27": "AZ4sg6p6r5BFBPLQcvYqyEVYyMsLEsXP4MH6CDcapLof4PfRm9ZRR8UVeQ4ZheZgMHokjnzwNwPXBgouciqS9eZ",
  "key28": "mpm21Lo563aexcG2CieHYzLZdyazHL9d5HHLRmqwYBMWhVwT2h6F5AQGL3yuumbxcZrnBB8KTDmbRD8dX9wiqMX",
  "key29": "ZVpJBr7GytMKiEkq7oNsodHueXNHCTNTuUooPtHLo1MNtVk8ZZfU5EvomZsKMGcqJzVSP5kK7SqHv2kwXVSqXpU",
  "key30": "5AmvD8npd3nUanvzvFNL4yhMtvFjbR2CPfKJ45xnLYF1gASXDiELohEAKmykiu77EoBTnXvBnBWUQVu1meW3yLnS",
  "key31": "4yJuM9SeHAVoncbaFTq9bSs61pgcAus2tYWb7UXpdYtPdKmy82WWBnfTVunfvhiswMEBNozGZv9iG9HkN49NYkJ4",
  "key32": "64LSWWSmCwHTKTcxFJFLKuovYs2fPyz5zaEGwvwWvPke3T6KCVtJs83aHQcnQcY61862HH1C4Man5nEuqxEPZYay",
  "key33": "3FNqiALvh6k5DexTtdBUe4cPnqqBGMmo5JTkdHtM7npaUdUEBoxtR6cFpcVqYstbYu18Zo3oLdbS5zKXQg6iG3nf",
  "key34": "5cRimc9ZnwNv73MqcixqosDqEDL5zJYDYhdFkjWJ8iWz4taPr4mHw6C1BANaCHk5LM9WHPrnvHpE6xaLAXjY9xsF",
  "key35": "3DGrZcH3UFbqLdmZ2xTn491ePs8otLKsJq4iHoAkgwTofAVxiqEztNULR9kLScBsPHJUHye6sn6ru497k8e1QcWn",
  "key36": "tfUFpjEEPcKvsaYKdmBxseytDf2YG8EqBg6kedmUZaM24aURtcYTSkURne4zRAjJ75vZF8AoNcnr8D17PaKoqyM",
  "key37": "4Z2ZVDxWEgBnxUsvSBRW7aj7eKpyFQ9tqVagBYE4n7ywxonuPNV2jfhWSnThWe3yPUBgKhkfmYBGFudiPUbVEiDX",
  "key38": "3rhoN9inm9kLU8BKt9HM3JiyyJTvTtsRkFyo2a5dMnt61WV3ajPz4JS3g8YUsmPDEH2mK8kuZzUYhBLJgKkabNLo",
  "key39": "3Udc9XXqeeSgQM6XtY8rtXADjHK1teU9zEAQNC9z2VW47UiCkTfzJdsvHRQQzmD3V2eQzvU5CUPNviza35ANXzRm",
  "key40": "2eZ1avSs8hyEs6tA1qLfvQYC8K8veD6MB6zkEARTsPZ22GRZskb6r6JNfEzfhEdbycDM2wcRt59BJ4N3jxexTYb4",
  "key41": "UwXL3DkKSbvHgoe2C1pq8BTDABnLZc5Tk5C5bP2zQxMMtS1NAg7yZv4J7HQJvk4ipnhPJbFa9D2UPMUmDci4PMv",
  "key42": "kEsLMmBH8pPCzvcmBoWcfPXZeVkJoZEZ7MPf3oWHL7FiHDeRCsPuXuQqaTDBBUtS2K3qUdeK5WYDXigHrFfN7Hb",
  "key43": "XDNTpcfXbPC2sgSj6cWypvAB1TMsxzo6jwDGHuPMTGEshEFyjvDQ2CM6mCxe1rXaVzQaV55KmjFquYuQgtweiv1"
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
