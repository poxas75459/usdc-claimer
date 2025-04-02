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
    "21C8Hg1Ytm687tAh2GFkLeWRiEgvBmFBku85Ejc9yGVngpEcjuAwVBhD21JN8fwjY2sN6JZo9xze31kJeUvTs5w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496a5AGDbpERinQywB87vuzURvavkBFW25g6iwrEp1epJN5P4EcgbmtpxZ4QzCu6DaqAoQor96vZrPRwivi6JAk7",
  "key1": "4L7Ha8RYXj84o2w6WVcLbbFkAxVpzsGZ7o6wv561XvcK44rnX6CQamGitvC8axVb6BFWc1Utf9TfxBVJfAZ5tZFd",
  "key2": "2UokzYyDnxcKMqcQbFYhgCN4h8gj3bYRzGATAn5kV9ap5a32haTGUwqscXLa9r7XJPbDa9GXQ1y53HU3CJDfyukf",
  "key3": "5P2zcdmKoxEcL2cuwwcY6pgLmN7vR4RTBPpjF7229s5oSko1b1hjUnEwuL85CRzb2emBgTTFeTXyTYirDd8Pfhv8",
  "key4": "5ZwWdqbFjLZ9ZyGqnwigj7fV4jDJjMq4A3cXMs9Xb1TG3nkMpMt7uPynghkqEQ79Wm6Q7KseXcrPyJDVD96TqRTL",
  "key5": "5PBwvFMoWiuqZPaxSpfuyBRjJzcJ9BGNQo5CUezc7CWC6jdmW2BqZuBSvG1jFujuGG5k7j7S9SA5NCQijuM1cXVY",
  "key6": "3GWrUzjGuLDCSnPSzpdGaUAstz3ed1FaMwj7MujWZgqXTWHhj6qBL179YRdJu3mGPWwYQq1gz88LquhWiM9v7VXU",
  "key7": "fPvhHZC7qapw6MUd8fjdJKKyrpUUynng5E9YqKgAXC3SwAbNm8WcXmAWotbLfE6A3ixgTLtcVVMnEaRfK4ATGTJ",
  "key8": "4XaEgMSanbArzoW9EGd8QCrUSXqPcUu6mn668RNodnqVuAcTLfEEXsURDXG55k4zPk1ohCPTGKC92EqsuAaTo5xS",
  "key9": "36TboYDUrSgkp9huV3Dn2H7BwL5df1dpWHGatana4QJ2JozQgKBeoJ3yzdBmVNDb4NWFM5JEuLVmFJtiUHJCgx4F",
  "key10": "3yqvfdb6AWsRtDdyMJJej5NVEgGzRj5gu4LdGRqoq1Ci2eqafpbdydfNE2BpZerLHQp8aHsun8rgkFZwfU2CLdb4",
  "key11": "9YLTAfJ6dKKoWeutPvjKaBJTjbP3vetQJK5Vn62rsFopFJw2XLqWagrmBPg6xq8zawdxwiNUkNkEygBb8jKoHGA",
  "key12": "kTdx34A8esRCZsXo9GJHFcgCtveR71119rL3w7xwviCdk297MwbwTmnUUFpzZ2jAvDrAbiZ24FxBDPz8YAdRgs2",
  "key13": "3Q3oraGQ2oAEsg9q5SiLDRPVE2ommcZyzej7UiiysLrPAhF7PC6AzFMZd3EhQdhuMTdeykJrofHo9jE2wF4CY7Ym",
  "key14": "5ECvrZz8NC387nhN1ueiK2aiTQJyedYaSY5dP2acwzhtk3GhQF69Qn137nW5Jq4cBkvanVdqS2keiWjZnguKNktg",
  "key15": "5RpYyrUgGVWgBv4amWT2PASoY2Cj9Auk6pk7YkuDNrv5xDFENB7CkwszNYoDZByq7bHFks3vbm6FiUo9BAC7DoST",
  "key16": "4JojKLuYkgxB5MLTqRroPRbp8QxQo78mi4agF8SwnaF4C9vGQnrJWTpqhhFGfCSDufxrW9RCmg6vF1dSh8t7Uc9T",
  "key17": "5gVWLoFwCFwoeWf8rVCVq1YHz8TRRp7UvvozgrsqRnz4VDsC1VDyFAiWk3EUEUBrtdL7XBdVFCoeiEZ6XTDZrQCA",
  "key18": "2GQ1tRSmGCxmJyueqmF52kJjszyanUmJuNXoWZehYw5YN2xHmZDhrY7cZqLa9JRaeGmzr23idRh34oNT95invTuu",
  "key19": "5wJYmPbtSDh9fit6kQcr3C9mzQ6bCFdmz23B3CU4unz3tWxsn9C2HdvM2S4zJJF6F2U7xemxXpNTzK68DC2jMyTa",
  "key20": "2Y7qAN7XzYgyDNo1yQvHVkboKwe59jZyTzLyJ2HkxamgZvVWtYD4GrkjedRVDbPYSpYVZdhu3K4HKyBwvDcYnPtV",
  "key21": "5FYrmGof63QsTdm5xVkeq3yQwY9b55vDePDZihuj82P3XLZvoxAuP48Z3sPjHEqG4Ass1doUjYf7qyEnJcukg4UN",
  "key22": "4JtuK8ZJk82RFntswoxZwHMDTCLiEU7EU1XW9V6yb2efZp5zgrvquyjtrpNhm2qqU8Jvkd3PJyVB59EM5uK4pyRc",
  "key23": "2HeqLEAUdGhUcTRyu4Y7DjmJYR8D2iE5EbTsgfg89Tth84sgBVGtdu8HFiT9R1oGm2r8c2vJqYCopfpafNeGYrsA",
  "key24": "5TTnu6EWbd4KWCRfqic3rE4at9Pb7M6h7tPT1u5Kz2MUDQ16MfgzioBFKwTGpG2CChQQngwtUjH5gsXivRDjnfUg",
  "key25": "3BnU1mYRvHiJ89NuPWFKgXogKf8mkbfjk81L2NwqhwLrRe84VXy6iKcUUyCzuMFiDsBwu97V2NL6TkWVzamm6pbB",
  "key26": "uiSzihd3ig16VETtVTDQNTAnUsrCjTVtjDv5ZNKgidpQEj8FNY7d7FLzPZeuhVsJgofrWTZC1rnDw8k9VJqg8xF",
  "key27": "Z3BiDAnrjQRgaGsPDjAG4Dw3AzQdksXXDGZ8b85LeZjcaQEe2Xake5ZPK9vhQNKmeSGdJAKKFcbWsEXJyna5cjy",
  "key28": "3n7za5c3kd2QvXsn1D7Pqbmb3wGSt859sz6vuxyPFVoS6dtbrTgt16Lqm8nCUDkafEyaeks4UT7HVJmRsMn22tnH",
  "key29": "AfWNd8AEskfYmoeUpa95qjhSESpbRmC3TxMGjhCSot3MMu2GCsMprKLPMUfGCb5quhom9utpMJmtnFACY1o5V5w",
  "key30": "K2zE9CqgVWuEtkjtE4ji1YtHJhg4WkdKDTtYxTedYxM2WosvhG1sPzuWDgvZfwvB62t9HrbQBbCf9TLFMNeodhh",
  "key31": "2DPiy3vrf8CY9V3uf66C7v2u7DGKqs6wMaunYFFCYF5Rxe14e4s8XfcCxapCFFymXh8oogsXsyvc1sjMtaE7HL2s",
  "key32": "zCXbBnkyzHfytZdepP5EoHvmQzZDK1Vt9ZiD3G2Y8VN9Gq4meMHvhnjEmuR7pFBUvxhnnJX9ikmbGntJVHriogx",
  "key33": "2m2SrTjNG5keYGkN82AhbpHJxnAYDPszcsMxXywhBEjrfKNsETwKs2uEsymyH7x2i82iBV6b9erdaavKovDCsU2K",
  "key34": "3cMMAuVkPyo1N5qS4Tm3DZ9261VyAzHFRU9HEHNbyFwjwYUmH1oyfvyD4AQmUsAwMrn2o4bFnXFgGuqARhyMVj14",
  "key35": "3s35VCw2xDnvEinv5vvapfCg3ULJ7574e53K3DT77cRkoJFYLw5V5sqhHAuujFPViTgJK7yiRPMcpwx834APXrhE",
  "key36": "2rAMRYXPxyJVpW98UXCz8r6iqrYMyrxVwckWBKn9EzvPWryUJymtABLzi5vbYzAP5vWWLNyvLLYtiGhZCL6cUBkG",
  "key37": "2Cvta2sZGAEh6XrgiqMaKHPiVdPptGPhtemLp6cMPM5vUxaLkVMWTKXk2qpgbYPashjeKRzVZzv5MzX5MJNGuwe6",
  "key38": "2dd5ez62KdpfXr4L4LEdA5WoHHJHqoWbMzwLqZJQCFTXT19QHZzNwiC12UhUdB3Fk9QfAcbBrf5g9nzT5Hx7jvzE",
  "key39": "mDGrBzDS3QkUieZZmo45JNAq8mXshanfgfdXrrtE9UAZsCeqrXxTKhSEy9f4VKRtR1q6pnnzmFEmmSESKgozqbk"
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
