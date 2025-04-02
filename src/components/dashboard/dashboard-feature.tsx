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
    "4HCtUJRJfCyCr7XmEZEtS6eVCXgM2XTB7f65C2xcZbyfCFdNpYwYcx1EUBxX4LgjAHApjHRjgmkwSGLr7TDTW89r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PdZ9tX8G6dMQRBotQRmEJ574XTatbhsD987xHrCVCXNfipRvgqs3at3bBTbcPctGZNqWUFCrami4Qcu5Axh9SkA",
  "key1": "4etjXszm6SzTR5JkepbKit4E1aoYKiMuvLPAiyLJ23MdsDGYLqMvTeBRNRgTcRFgtfeKKkcvdZoyGMKW8FD72Cvt",
  "key2": "5MeJFj8ojTRDV1wPHXxr3oy8KPLyrN6xFaArdeQ9RMVykkxDVpjMX7GeVhquHxYf53DWmgeYeUqpgfMPtwNGxC4L",
  "key3": "5FUiy8DcJyq6oEZG1xKFDGBB3TAdtjMGLEoZB8gepAvYycAvkX5RtNG4nr4gYZr8tWED4pyRpwYheNu676n3Vw5G",
  "key4": "2xBFZJZ1pbn6KLZCqihM3VfgAKgpETSneZV6c4SHW2pBSz9kk1VbdJowEdp7Wp9KBshuAUgspr3gfGhqTN2vcTEv",
  "key5": "221nrmWLmSioaqfrBdmgC5jSEYdRkrwQC6LjLh2nw11qgjqwc7VEDoRDbLbcAjeHPiFPhNWdUHNcLaRvfhK8ZgKQ",
  "key6": "5ib7EU9jqoNiUUQZF6VLkWFGghVtenoobdXS2G4XWSUChpkaq1okPCUXA5YtTX1nuSiZ5r3QoyWWm38AfzMkuLt",
  "key7": "wWbt4nUgh4zVgm9RwuNYZXkRdCZJMFr1Jt1oN8a7j5pwLMc9Vzk4mQ2FccCw7WgN7uS9B56D3ssWWwfqpBqG7cb",
  "key8": "2xxoVzBi8kAw2mdqTaBAGhfxbiAm8TaofFixQR4fXQCskYHfddTu25eZoz2NknkqdUegmWruAbyTVGRvwTphMX5m",
  "key9": "4jAqx2TgtbdFVjU6GrJTKXajsLW7qReqhGJqnMhxM16fNyCCxkjfZHp48QcK6jL6t5XhkbKNJ81G9J5HUGkKVApU",
  "key10": "3zF3GYFwgBdNiZp9nBibNGW7Ug1mVNnaodBkFUQm5kmG84Pp2KvbU7o6ZQU2zBBX9g6se22cf5ZTFCN7chLF1pzY",
  "key11": "4Vr4SQAo7UR8MhDZU3Xjzbfyqrd8JsUXpqZW4GkjMMKUTYJywShwKoqc6tUUx9WvauFNPPY4g2eTGeNXvfwqs82z",
  "key12": "zsVYumXgMcLobJeyjuPUy9JvLVygSjqaFuSF7ExDqFzHsWTdiVZnvwmki4kuP8mih9opF8Txs7egouJmH1oGi5u",
  "key13": "45aL18xFmXq1p8M93f1vG1TDvJaASXMNLR8Rqjeh2hgrT7tuo6kaUdYXH323MxbhjWzDT3ugf1eSmwDjrAWTE5KW",
  "key14": "45ikEjGJDLj3itXHBRm8PZnJzZT4CAHucS31QkyRj4ntRn1kzC7mSyWAjkk6cPPV1dSTrQCHd9gUba44cN3qPVv2",
  "key15": "3HNU4NZxj9SqeRgKeM9mo6qcYHBQPGZ8wMGYv3trXt6TMjUvtsLjhDkKnT6Bi8h2QRzHXh96Yy8Ak88wGpPtinfh",
  "key16": "5Mr9ai6cfDn2G8JkypYsh4oy7ttWKQBaki5zop55j8NAPTjzYRtqioRygDZ26hWS6iMScjq5KK88nRaSXQBYfUMS",
  "key17": "3KaDYRo8vu1TvPk1BMDdAsYYjpGjN2x2zTRRRACFJno22VHhn933YDnhLDuVXrQjkbtsJCAZMZUuyLj6AGrYnyqX",
  "key18": "2vuMvVnCRECJD57KbLPe7ZKcXYW7ymvmuNVqiPV2CAAhm9X4G4nuCeqXFPv3qSifdDhwoWnJ8YYtrwAqQitDtoza",
  "key19": "2b77eEPvdBeKTTr6YoDzK8Juwnx5gbkQUn4A7ZGXcYwqLRK8JzfHdeHMbrbdjx2AFSN855oDnA4A4kBKNq1K3SGH",
  "key20": "56ZnpGtPo1emRuZPMLhqW8ypRMn8r8tnJsvjwGK3pFHXmKL3ejmTVEBWi1qRxsxKEU52kj4tPCApEqmYv9xQdxu6",
  "key21": "3CkuhDBDRwyz86ciVV3sC6c2Vpv7MVwgYCp8tavF7WFK2MQQ5RywhZn9BMhCj8s6RKnhFgSG6oNUPxMoGmYctLty",
  "key22": "4eNnWbqLDfVW6o15YMAkwDiSE7WGqWdTfhYf1CMgUzaTvyj5qP2Cz9eb2XgcWRjsiHoy1ChFwKyfTWNfasF4tQP8",
  "key23": "rm6Eq2fnyLewVmoiwRLM1VVZVd2XZwFo2HGVrEKs4TgbWwhzwotLojkNCc62CxH78UQPnBG16aQRBs5tstnWuwH",
  "key24": "5Li37WhZ3Tf9PYjhGECn6vQ4xg3jHZ22FVzDHycC7TBjygQwZNRRwERjLsWk5xyg4huUJVQ3SE9pPcZvF9BgvjBG",
  "key25": "3vRzeTxABAGA8txugV8y5dU2BC7SF5FmecsGZAaMgjHwTaxkC6WNEFr1Vgt58HNqZeVrbp5AMtbSkqBdATHmH5hG",
  "key26": "5yf9FFJXAB29rqYDoaAHWVDedKGJkBVQjkjNcMAF6YSAWonZ58um83aCzJPnAFXUXnBBawYrU3vzYjwXUU41ho4d",
  "key27": "2ckNYYiFzsPGZtguHffdx5MrYiyXS421DZVXLrVApKRweUVv1na5HjEfwLZMRHUmxsaNM9P1SaxvR3zfMbtRTdLm",
  "key28": "4Dx8HzwBTJqe8swQrrrbVL7asn9UfTrwK4sMjVv4wDkhvrVUCXntF5MGkwMr97efE8qwUcaLJYgx5z4pfz1P4GGQ",
  "key29": "33tRssiDDocc411RWiTijUug4uzjKJvxU8oyKwjyLkW4MXEDQmWSquNwAC5F2sNwAoDZMK1ZxHtb4nDvKJ6bV3dv",
  "key30": "3dVgu8FcrMHQkvhs5gRwDPx4Ek5jiEkpb5UFH9yHbwkZ8x1Y473SjvnzzqWhbUrW7fAkdL1S9KLhsBa6x4F87En5",
  "key31": "5qeG3vGhbV78wTtaroZEtSQBbWH5RCf7nRkp9FjfQcjbHC5mWibABCcSAPA2Li6YX47S97MPXFEi3oAMvcumMmcP",
  "key32": "CtxThvoaz7Qsd4G9sxniyqZW8M4Fc5XGXrZTp5eEFPrnRo8vFWcJdygPvTBHmZA4DSFzt4GU21gwAUSknpwUiYp",
  "key33": "4bwGwGYCByuZsFfqk51ogDn5xCKftDgNmdwtMX3ctjFh5SHioZDWsSS1kmzbhM9FyVi7fzXAMZoojRktWGoz36A1",
  "key34": "4VmQmawe9Gh6kNfP5gWGAEHDL1MmT7j96bWHZMbw7eTdnaofkSheo5PhvWo7NX5yaEae9YTVQ1ULNQLs6RY9HEGq",
  "key35": "4okfqMG3UDZc3X82jFe6w3xZfSAnxbxmFEqLNmuoby9ep2AAaPVuLi9dR96FW1iPKKoqt58g95rS7rcbVC9Q648s",
  "key36": "MMumKhWwuNik9a5MZCWXEdVYr4ePeMLMaHPhgKNPgwnhzvSBTDwmS1GCdjSvumFcZtE5n5TeuidL4onCTEotvGH"
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
