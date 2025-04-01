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
    "Dqx9vs55Z4EvyLFKdC1ekwrFLPZeBzGnStkZLvNgyxz1kygwHUkKvGgtNNrRCddM2rgPdccwhUh66vBLgrCRugY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333WD6v4PXAt2ivia7fYCncXaGrVP4zDfu58T14gW2KXHZodcpUZ8HPy8izFhUFuQJdizmTs4KPaRNuBiqbAdzjz",
  "key1": "2XgakpBHpEkDpASva87xvK1bKNEFyjWhtGrq2QXfZ7Ge7GL4unLhKnkRGGDmmQuqo2pAjR6MBpkwoLctWSBragtm",
  "key2": "rZdLaxne4zxHKUwujYYCqeXxfY4ggrpC3gqgZSBzP2ho3xceL4ZgrnFCNXzVcfLt2KBta6XPDua5p4JrtRRLhh4",
  "key3": "U3mLAkmCo78NRhKm4FfEC5CYnSQii9dMptHUx78ew4Qpd2gVPTjcPyhiP3eezQ4euXTa4cBsNZ48RjKwuEdGUJs",
  "key4": "4PUz2nuxvo2gVBNn6qorsWLj2gZwfcsXmPaYP78VEjwzQaNreNTDmfVpTCQUNVjQfnYmdEo5SVJFWtgiLmWCNgHC",
  "key5": "4evPGsoHzcDuD6DtYGydhxKjbkJ7e76YYGEq91EGJUM2JwfwLVSBKjkUmD97gyTtdDEYPkUDz4ttoQJDZ9aLoG2i",
  "key6": "4FwYbYDuNxkeJ8mBQuUUxXhria5uStmJwS4KdBw7cwDU4aHbXfJY58o4HCgJ3w4H5UCunLzsyZihDtwzPkWmakT6",
  "key7": "5nQnRry2y4bhLd6jKWFAhgSHcWWyEyvU1ChWtH3rE3VTMpC1mrsLJmhBeeg57tKSWQUmUMXRbQwt6QcKHQfvExXA",
  "key8": "4vP7gdEqa7bNMrto8QCYmo2jukSknPkgujd23FhkiMErmdV8K5krqtGrNsd2NZNzoGn6nhz8zuMqtpgfGmW7ytV3",
  "key9": "p1JJEF9AHavTSXpyR8JeJj1b2QcLqffXnrogWh44783x6NsE3jybvLDvTDh2raFCeV6twbRWLYiRh5k7DPw11cj",
  "key10": "2wNEASBbXrXMuNhtAwSjcsm5qMh9SYHwa3pos46X7t5uz7KUHxLd82QzGXP98Agxeyou5LKvAyzcJo84snHzajrJ",
  "key11": "Fxa69SQR7sxh3Gjbu8t1iM6EDaAvBvTuarbQFaT3go9FxTPN4pPBvGp897HYNGGV1iNaXLcjSCettQtfSj6Aq1B",
  "key12": "5J1zpeXmGaS6chsWVi6h5Qcimqnk7J2Z8JNcBR1YQb1iFofexQiLKGdirY5JcnpQzAKA1x1ZsVeZPDmT2dHB4ny1",
  "key13": "RpBAw5uVPQGDVuT41XwAWxC9Hkiz9qE6c57oyxnCNpjLqxoewBBmdcFprbfuUxJUKRMrCSw6bPRAjPP1anV7vUf",
  "key14": "32vhsLheqmP9oeESorwb4fAHqE2LEqVNbKuZvGL1zQpgmSy2LAWJZPSnpvpsqhcxjriUFJZNxRkMb91rTbYA7yTk",
  "key15": "3FTaKi13vMWfxEmXv1aoV4uBcM6ypptGh5nop2abd8FGjwy4bgTw1CqCXYbrPvmgrkQooSEAttP6HQN3J6u2SazW",
  "key16": "3p7Wo1gihfyiiMdAAWuG8TbfjyKzNH8Vxok3uq2EvFcqrWDdFfdDJDrRkj11yXF5Us3CDa9CBUPcEMw4keqgKFFq",
  "key17": "3C4qqeJJBivnfN5dcEVQ7LcEpxQ3VCXL9654SuiQMqEnyuMz75NpEU7YjbBa8seNhXm2ocQCoDvJRF11pJKmCSp9",
  "key18": "TFTHvDGcRE9Jmu9c9nKo1vb7VuHhCD6m4KKMGgQFgDsbbxqph4iQEgyknWFbEybur5t3svaj4FPWAV9C2WsVRvH",
  "key19": "5ZhB6UHZCVv5pz5E3ChPEiTqYSLSrKc9ZQTJLk3rNSw8mMsejpsvsJU26K5wG24NAeeCMMVW1GnadraeoAekXFLF",
  "key20": "mhrmkzzbrhqB1GhEMA3SfRfdPYY6B41KFJZrVgk3XDjeBxiZHwZiXUAumxeiZwZm5WJdgWFgVtdahibbM8QTBKG",
  "key21": "5Adhb5HiXKaAjkibNrqHPQ1yDfjQmim1dU88L6qaLeAn7XQsBt6PLpQdSMsMG9BxhtVPwUnnfcjogYmyYFz4LiF9",
  "key22": "eLqbE9sUV3eHKfczfeqXUWedhQsHpmbagrdC3p47MDhxf7sJ2xKdnXNYmH14hYg2DboW3nMrsL7eMPHWUW1J1Rt",
  "key23": "5jHn23CjYmtAyVzrhDBzVJaXHfNYNQhkKhysYApuzUUSmuZLC85dFtP2bXc9q4ZXLezaDjr2imTY6V1K8j9yybW1",
  "key24": "XM4Q8FFGLitofzzk4kwarrsJjXY4ksJQaAqm68JR9tqkj8spLEGwzqks9CbLf2Ub4CB9FnbaWtF7GKuSBpdqMFe",
  "key25": "5CCFvR7fJv5TQA85ERSzNAEEqdqcH2bX1Ej7Y4UDNQYvoTzMLhTYpjLUv35Gh1bt9632U4peFiP6XjGA31n4in5h",
  "key26": "iqYszSZJR6vVFzfyyQDr9RD6SrA4r2LWZ3reLnKnytPDZXv2VVrkQytmKZ5Xgfjdv4FPddbK7vAkvKyFGyZeEc4",
  "key27": "5Y9ZmjwpjfnKtvJsRrN89qJpeFVeghaiK7ojaRAPKN3SfydHZh4rycU2qRvRemzraczxNLnE2zvu5zrqhtEYPfVG",
  "key28": "3RezAnYppz4kR2zX83iy3ns8TUQRhu1xp5XM1NdVzgAkdNgMaZ6tuA3sEQo7tB7VER7rPAvpxJwN1DSGRkfozpd7",
  "key29": "5fzyLgtfP4N68QoeknKSvi99cdQKby8R4ev8verHiLDCWmDECjtc7HdYkVvc2cWWKvavc6pA59yGoKBwPvTncKsv",
  "key30": "KLjDM6mvs6urDjsZgEaXW3nKKKaQg8SCsAFqvfzSy5XH6KR8qQnbTxn4DWNAA8X5wpP5LCy7b3vMGVqCqt8tapX",
  "key31": "2eAXra88yogAA6YDT6EDLj7dJTtv55WocD3u7BHAC61FGes9eB3yyp7BJhVrPq5P2oMKdPKkNYdXVBPVUz4DA2sa",
  "key32": "2d7zwTm3Tee58d2wDkrWmAU4Uyumy6CK7xFc83kU1Hhw9EiwnQGrDJfE6j45SohwLxbY8nJ5Vn92qFeS7dSUTsRh",
  "key33": "47QkcSHTLdrEt3YhvKdV4atGpQRGfQgeVEezVZP89SupQ8HYWxjXtK1LuvSWb5XweQQjHTtmvGPTMLPab1BxnrBb",
  "key34": "5j48AJ4uE5Mc8WotmLyV8Wnb4VMYcDnsJYcVtQ3azSEe1aJSBBXE8V3rTZ5F29Z2rV1i3h62smn7bYReNSxZBXrZ",
  "key35": "21AGUY1YyFG7BwQuMEgSZxZxwvjz9wbJvTE2g3ncQDBmwS8oXYJDjphE8S9CMqg12q42gjJ7VKfUiJ5Awf3o6WMk"
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
