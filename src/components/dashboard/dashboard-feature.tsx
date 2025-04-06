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
    "5KHA7q2JNEb6W6FNnJSZCq2U32HkptjgBJkS3Du8nWw6bXrGU9eQw4ptQb4xy9xPs4upNoNUnCTNbuZv18J5sPLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCAP5J9hvfWpoRovHPbevynvUWvJUHp9puWSPHVnwFL1wiDCoix9JsiSjnDyVPTZN7LzJCdjdder18cTxozA8c9",
  "key1": "2FdiquQ92eaA5C6UaYPJgdUKpkHMwMBJPRyyAW8Z4N1DQrDD97MZuGKyY51w7JoaBnNVqLxqGTjGGCdfYkGBg49Q",
  "key2": "4b8aRyEKM98TP1hF7SBvww2amZjF1u7FyrBBKVV5HnXjJd8PWxvdRem5m9yo8H7RJpMjVMRZc1pc5qLjiHmW8da",
  "key3": "PaJB3iQNENUzy71xBocyM8vNsh4S1dHTUXRNuhAEAPACZsL9xsystkmouTsLtABr2X95LhpJSvDXcHxmhGLXGAm",
  "key4": "54SdkhMb5BXs4zZRXZ3h3EahvWc4xiAQ6u5BSMEdNVMhG3pCuadW6XumDAp9Fcvy2gLbrhyWD3to7LntGb3v86FS",
  "key5": "xu2f3wXs7AHTAMmvYRTVCbymTryQxVcEtpZg8zmannWJr1tr7nifEx3VnWc9uFR6VU7iVzFKmVa6fxhjUAkcY9m",
  "key6": "rDrFq6DwGrgsT4tPHN3L9dudf3bsKA5gPSf12YKset8it55H4B63eqXJrHMBVKNs8ifoyvGqL2HVJmKriRw4ejZ",
  "key7": "5WjCvQsDzyF4spxoVya5NUNAwgkM4wSDJsoQ4Ja9oQNZgB8G6NqnAApAFX5yyLW4jtL2Uwik58nDWb9Nr8wwwk9p",
  "key8": "4d2SbnnVgNQsD56FK22D23k4Xg4cmKm8eqHK894rHeCwhJzZTYjGbdQRYzgmG1FLEN6BJcQ9QYAaT5TudpohSCMD",
  "key9": "4T8E4stujggf1hXJTWFVMMaYwUSSfaXVWZtfWJdJR2CS4CQGj4N7xZHeaLDWHYDayaaqv18J9p1gfRADAVrv5iPy",
  "key10": "2UetakuQUXgWr7yHWXwZb2LwXTF16Q6DKTK2YE97vf2qKRGR2E2RFpUvw7k75dVKueBSthb7inWp4aNe2QDcffvm",
  "key11": "2Mn9tgZKjYJMocDsHhHwLNvh57DtfYvKsKt7DQfqMCPnxfvuctJ9BNuE9FFXEYEbce8hjXPLVmYMb77A6Bdn1nZr",
  "key12": "4KGWErzcRXhdG4akawENcaenPFQB46FLGHGynAg85328GkydPudzig9hA8pnAczzksQp3k9TZZeweqQ8jwcDj9RX",
  "key13": "HkRkWvvuHhtY54t8VYXtEgpG1uB8AC4PSsfFiPLT2SjmtWax95qwQB2aaq6j2F8KXC5QwhZHXHqm7bg87PqRhaq",
  "key14": "2jJHnXkKShExVQ4xrpyFem6BqeQkJujuy5GRJt8cZGwu8TShHDqJswFWcnHF1cE8XzvPfXbR8sXwdk9gFtS8eiP9",
  "key15": "5Sr7wZajRS7wQfQB73iZpgBBPdT4gRyo5VCEnZRwwGh2ujcubsQUeKJB7G3XQstWrqYMNFyEiWUEZ7VQSGHTQhFq",
  "key16": "2vn5aSvTb4QeDDU4hmdnSo5bM9zr9a2xkscwH5BPJ5ot87zjzC996HpELJNhDS3fcMzYszjRBVHBuSvsRK14uJ2k",
  "key17": "3UvD27wQuSKTc87Y9JkRgNCGQGLtNx13WyLvYJ1eZ3cfQmWC56JDtXvVzdNDxHSbeASY3iWpwKt1vMNP6kJxAiUy",
  "key18": "5ZJwna6CRvHmyzfDHT7feuME6BCC1ENEpiyanEzg4EK4KpZe8hhvfV3WQpFSAyfDJzoWEsM7jv1Gwdo6ZKPM8xtP",
  "key19": "4Xp65hSRcAHkwHsfuAWiaodSqh17SzVJ5iuifGUAeff3vHzuxUdMGbN8RAudg6o3MVquz9h2UH6nEuuwngdxmB2R",
  "key20": "4Jz3ffEcUyV34kKTL7cgRMrSpDaSYagzoBaeypku7Jpg84hxDJSe4PbUGqcMSWqpZ61ZaPw7Lq51wiPyGa3BYuPG",
  "key21": "S947EQ2Dcsqg5cWoeXiXQEzUfBoNPmC7KTR4MN9nhgpjD21AfwtTCTEFMuuMEV3aEtninJXS56NgH2r6H8tpxPY",
  "key22": "2tPSxsbj51LPirjfYwB5URAif6A4gUDPYVR1e5n1nZ7ADHUq8LmNo7bihH2X4xmiaJAWNY4GERHy76tY54om6kV",
  "key23": "5kqAreckJDtjQrEYMB8H1YFPrLxz41ZNmhq2MKaadRiHT67drUDSvxobs84rx7Bt26c1y4RQEi5YuuxBrVVCjqRd",
  "key24": "29YqrFVRzAcUeKMyMfPztEtCd9FrFVkabbACdUQY1tyZmA9nhZa1rLtTanenJV9w1yUSidU67cgwrcToRiTPAn13",
  "key25": "PDm3q5eJN1vEyojQjCGj5VfkEB5ShXrEJy4BuiznJxhDwcGDAZgjxMWLKbAMKwmfDWkQucqD8EPoue1S4w4mXXo",
  "key26": "5xuccpTBewuDFTJ7r21Vv1Cp6oYprK81rbfUVm7F1AdzD3DAZXWXnYYgg86bin4gjrnqqvjXBjrqbqfZAs2ET68c",
  "key27": "W4LSLK9FxLVS13V3kE4iC5hwap2YiotXc5wJVggpHx14N4eDV6KrHHVDYyX6K5w19jsgXVgNfWfzSjt6ct7CxEF",
  "key28": "5ShUyH1hPdruXrvaMHo4ScMsAHq1fwmYw7DmoavSM8StBiDyV8b4mWxRayUPDqDc286Zqt9qqyP6rkdCwSPj6T3H"
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
