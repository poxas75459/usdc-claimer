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
    "3BYM6EspBEjC2BmWBGszwuggZAkamsjU4NuguHnvX973ar7kftenD12gCaUxUvBispkGKmZfx9SaQmE9GrqpuHe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzbVz2Uym3KpvfpPoKKUT13nkcnhWMWGkFKEtvm8GJgEpuVzn8u5Y1aKJd3gz1WfshFUPx1jicSWqJ9BZwUeyt3",
  "key1": "4Tf5FsoMkv5Kj2YuZJAwa7bkieafzUL6TqHE3AVDeEAj11KefvprdGznvCNoP82SjogcngZcZF1MfQCnitjGJnxn",
  "key2": "3V8dpwCsnmyUg5G5URxn5yTYdSn4bnVwRrtRjpUUWgjrHAJdoeZeZPJ5aV4HDA1akwMQenvqwZVpsjMhfBxuszVn",
  "key3": "4ffC9FaP23WGBpsAhn7fqGVHpQcCwofb8r3KvaDkw4VsEtYKxuti67pEdhNTkeLQj4bh6eyEsNbP1ocyWwFwnaGr",
  "key4": "qeDF2qWbk28CJUkiLnxFXJ2vuCtm5BHy2ZsimVdwrFR7DFxgwCB6Fnm8zLr5DJq83nf3CSDrnY1JkB6zRQHQu23",
  "key5": "2H7RV1VbBXRqSUseYv7LDtpUTnxDGs4dwDnLp6SKegH8XY4AiPvy8y2WDMHyt7AA8eAfYXX11rbSzC2tkmywiSoJ",
  "key6": "5sfjogB9cNfVVttYXWYeAYgwifsgxDnRSNg93tMBttTEc1KY5P3YW5fC1Gb9re1VpgMTC1RsjbJCAoqnhEocdfD8",
  "key7": "3WMn41HuN9UJhUqdJ7HonsMLySKhTuYWQs1f8kDUoxkiX7JzkivBmjz7NPxY2qwnS8DXvVgraq6vUK4RyW8L8RKT",
  "key8": "2rpAkCJhHvmuiSp8PsbC9VNoEVM1GuvUU77DUh2dLS2AQmfgqon49sJ97CWZEwheABgpoeL6JqUR1nrRsb9ryvzy",
  "key9": "48Uv9Adcfv7XkHQCiYaCqRFJswzT9GCLHMFHRtRXpi3g2kgjom3A1pzFRXY9j5o4rw5pNupuG7zMkrSgD2QMhMjn",
  "key10": "2kGe1vK71Wo7ZHpme44YXrZR5WV4pNWKK8z6EskTysr8oUarxEJmE3DW8N1ZNZjhtv4BJZFUVGZ7mjtiqDVHaC5d",
  "key11": "2f6MYaVosXuiE2Ssg6Spk5zy6GEFBjHsmQ6sPKMTaEsadPXQWqNgdVAS753dSX9mMcEugn49sxLB6hh3VuSHMPDP",
  "key12": "oMwFrhJ9pTVddQ6utVjbgkZmqcMHCK9EVD85Z5XZnapzKadjimzJBSBvx1uh2wsEGz5gvYsigDcXmduw8Veby1k",
  "key13": "5Rs3qNdXTfMAibHdzExidfQJiqSDw8Hzf2PLrtciXDCHibKKDgCbmpvVAUPdzki9zyRzBArFQYakcPioDCw7ZUPF",
  "key14": "4ZeMADJLcS7apSxGLePRiGjQoLpFwhJcWTPDpUF2ZCBr6Z75kSzF8oLwFLGqX7q4tnTqva46EWj91EKJD4kuW1mf",
  "key15": "4xpe8TfrmjGAnSeFYXP71GBBMb3MCMKXD1rf3YAk7BcqLNbFsB3jM3wNYkrgxQeydRUAm95tjyBMaV31PNxXaXRH",
  "key16": "3KBnqSfYNQLwUFXXpDau76ZTxLxuu8NAprsn7sm6rETbrh5vrNtWTpLWbxizsZkif4HkAT7S6HzL2P43k8Cprihr",
  "key17": "4yFfWpNh6hzb9jfQwNubrDBtsrCtDxkrZNqX3uBLj8nFHRfKDXtDmL4pd9inJWNmtCtCYyAiQrhyz41KSKmNCEup",
  "key18": "4RkBrc9HQjRYSTQrBRActbjHPnMxSE7bebcXSpGMJbpd2jbHU63DMkbEt8U8y1jpS1LcX6BwjhsyRvxnk1t8S64D",
  "key19": "4jyWjYqRtt8rZnRUspsRdYQHEjieskYWM4Hs1mQ8pquYP6VmKiKnMtS2tMbHoTzST4Jud7Fm7YmQjtTps3Qiu5Y2",
  "key20": "48nsYyi6FCmBkVfTY8LbMcPGW8JsmM1QjgUPxh9xJtEhYAQC62eCJaqz5wFaxBNTSt3aK4ieWzVHHpi199bTmQcT",
  "key21": "7rKfLFNWQs2oEe3RNi9WSC2vYvJyorPKTqgd1LycUgNnVeG9XMLT3PkGtkAhMnpq1jtXxoZCS49fBHd12ZQL6Dk",
  "key22": "3Cze6PMUaiVgdhoNU1DnrnSePGMASzPWiXGEV9y3YCiuewqBeqSmnjnrXdkqAwt636DgiVbgSLT46qAN7cp87wAe",
  "key23": "KEYR5M8YaFzFhmADA7TWQyfR12xL2c7MhwBCP2TwcxGfW4vLPtscWoxW7AttAtqYN12y6McAGwaYhTFbgofAzhw",
  "key24": "4i8JGPmXzwZ4tpy5WgtoNfFVf8LJf8nJdu1D4s5uLGqgp8wiSU64LadRWSZpeKJHgydPrzNf9YdBchyrxAD7GTMm",
  "key25": "oHLhJkm6PEit8BmtHJRQZkKYWYMhxpyYb9dsJnGfT576Esu9pLVLGjd9MoNu87rygDYbDPHVkEgQWRJiBJVs4RS",
  "key26": "4XfGWWU8c2vxqsZgTm3hQ87YoiS4TQ2Xxr29znhiqWWXp8qpUxdhTgum17QKVa3QiuoDMtDeSBnQDnU9w45w1gQA",
  "key27": "XNL4rtNVHKf5J3NqDpkJjrYcvy2qWmQDmPdqBVkTnEvTvLUSkArJFoobMzGMW2SYjncnkDdukVRVtnyR4mTwgiV",
  "key28": "2vqu9qhy4nh21h1BBwXLwBL2EjpzzfDGdDXn8YPWxgTuvwxoTwkppP5SToyqQfQBrXautsVBS9AftNPvwNgGSGkN"
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
