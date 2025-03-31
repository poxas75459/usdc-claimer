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
    "THFC633FgcAG2RpMLF65vRQxCQgM1wVVRmr6JFpGHTY2tVRQUij3YJpcgaW7jaW6qC4FakAwixVGYYvdJ4xJJ4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dF5ZjGXG64BTQwi5exy2z85KwUwJxZYzj5WdB1HAbARj53DtWrjo97T7z5RVYYWibizLgUQXGW4NqGWb7Lz7kTi",
  "key1": "5FSHCcibhmd6wDrTaaozLQqtyyxzsim8k7XYeRocjQ73kraajgwEuxiKoQQVx8XnDxhrZS6k4dyugqtz32vXDsxm",
  "key2": "VFmM72qMrndEwn66aBfErxiHUJq1kZ734W2uEvpe3MXQxD4EjPmXZ95KYw9Z7RuLFKi1UK6oRQ5HYP55pxcRb2w",
  "key3": "4CpGCqREZyLTqTXD1h2HtG6Xosqy5EmxyK2VPVSHf4Q6mCkzkdMCNjxiT2WAmk9GxupgjUhARUi3Us7xsoBdhL7B",
  "key4": "pX3S92Zv8eXG1thgWBfhqCmagcgtHEAMZ3pxrCWCnW7pETFvw28rRYQHf4qZ7GiYNRxbq1gKgGBrbmEXiyMp92T",
  "key5": "2yzbb3xnAsgP23GwEwRTt11kAmfRQ5m2Q9YY1D2BmjhrPB2Yhke7zsH2PWMPfifkBjahASfXAqZQnCzYFvWb2bhY",
  "key6": "2aZo9G7erowm7AYS8ewNwixEPX9T8pPH66T4EnVxpDSoSkPVvyngNhhZGwPZ1EtQ7aFiEKW6FVRjJPu6hjuMyxmh",
  "key7": "5tGGDJ7kZRMXrpDq6Qd194zHJRgP78FognZGjtQS5z3z6AUEJepAAkdeX86ZcT2BsAPi8fQfhytEWDDREogQJst9",
  "key8": "63AuD4XEgjjZtio9zxLMtCdDzLZGSK5oPopGy3SaEjXE33vziUEdxh73n7sRth4ST8WgH1U8f3YUtnaXVQ21c4GC",
  "key9": "53euJAssWrVYRrrmtLYXv2kd6FBfdUwLPcJXJ5bckVt1rBZgnwJPs9nT6895JspWbaEbBU5JcTQb8P5Ai3B4kxd6",
  "key10": "42gvzfKxYk2s1A6NRyVM3DtaXBt6tBus8HRJ5hS7mMK3bugcGT8gzSLhkB3V4rN26Q3MMQp4YomgUBEerjsaYH7F",
  "key11": "5UKRa2pQpwHrbqr2mqU94LaLyLkG8YXh4YLxRYCdJVzWpS2pi2B7JRJyfREW6noRg1mnW2yiEoSo2ZMWMArboe86",
  "key12": "4b33AAu1MvcPUjzyCAPuesfrv6Bgj472cUQ5iBeCC5MQKcuUag7w1z7F8y3J6gYibvG1LVp8AKx35JBNuoBS5cKr",
  "key13": "2mgj7J8AWwYc7MfcCP7wXvShvDLZMrZmCucdSp5Centb563cakd6KXzzoEhWJymkpggA7BLAkCtNH3o9eELZjt2R",
  "key14": "66SX2eG4g9GfhbWrqqXFbRB1p3XanbZ4TgEmiF7G5dRaqo3JVkiVv4oZhLvDUQ2tgNrCk7nsR5WZDtKykUpRoXnS",
  "key15": "2ogVREaMWXw35mc6Yoi1bz1ay8fk8BZcBf8zRm8CWDs7dsrm4Z9Lb4WvN85i3ghsQ7Jk98Ku3k4VBteXp6orgMie",
  "key16": "5EN3vj7L83P3UAe4MLGHVkdnt1LsY7S1BeRK1DEs74R7EoNt2Y51naze2f2ZbCn5uzdEvVXMNTXdNo2VaVofTYox",
  "key17": "2LyU4eEXGXdkSsUym1WtQ56is7EBARPz2mRKP66J3EyhbF5rfWNYv2gp3SuygKZVpw26LkjTtPD1xfFrLs5yBp4J",
  "key18": "3tkGZtMjCsRdDmPPiphDegEdGkCcmsujKidF5WyHuRRJXLWQ6NEfQyBVsbc5KC4fReL5bHJjCKaefRYsit66iS7v",
  "key19": "21bUY5Zx8CcgUBTtr8qTxEgWWHagcdZGQgy9aY3eeuqjFikEA1SkXz2QiuqQnb4bbVRxVF4KgQR9RN8xRi8zUQLS",
  "key20": "39c4VHtj1qkXfdpt1LK9PNaG5EKBresJYJKy8F5jnEHgJXhQWvgXzcwU7hrot1xCT1zBKVdy6dhGCD8n7bRFwNxq",
  "key21": "5AUbAQedcUX3qsqc8TCT3vtKwXDs2Zv69ccskbrVsvZBBptWim6W7LQBLy4Xix3RwGurNVAWUD3YhYj5qr814sKq",
  "key22": "2UGWT2W2Y6Va6C9dqJF3SNNeDGfxZR9gfXQRYMziwytW5T8kGPTzZAaEh5Nb675KXsRgtrK7jiWxrMRiyWThS2go",
  "key23": "5Qr5baWNomN7W9a139d6hmkoaTwhmCSb6JiasdC569kWNGA9vF2H3GjUkvPtTMxQbeZuoqND8mMoVUGhG7XgkpZr",
  "key24": "3A5W8akEeoXoo34C1zKTokHvA87TwnLbPeXPHenkk6L5cH7JjxSXLuQPFxvutPMJEnTN1DpDzv7ELTwuzVcFrr1A",
  "key25": "4t4jrMTS6umc9izsgaPgWi2hCB7hDufHb7gdnAZN469xHpeZbL8Ux56tG1qbThKVvgaWMLboccfrfjduMTALj9Tg",
  "key26": "2Hfn5pandu5tbGo3sCoURkGgLtxBL5e81SrFcayzmkM6et3JWdp5q59AcMgK3kJUnEEriESMmQvCCpTFuxtmPiUL",
  "key27": "4qmEXH5nacGDsDRuH9t79xDafc77iD4x7jYSKFX48yW1BKTiokoWvn24gMbaMqcRPwvb49sFhaNDvc5hQymn1gFH",
  "key28": "m7FekRk1B6XZHYwDLjQ55z7sEFUttvq6vXJzi9cuMpD7duT97oP4tQbU1Mp5QeWa1TENb1a19FVHofokMFN1oHT",
  "key29": "2rSjyEh3zkfKJDBEi9JWsfJgGkMih1F2EabxDdihXJdioCMVkw5AwjVw9xk1ZKtAfdogymMS8NY9s3HLc4aLTFLj"
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
