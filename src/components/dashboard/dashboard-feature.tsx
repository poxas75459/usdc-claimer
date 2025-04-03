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
    "9TjWw4sjGyv1khFYin5FcN38DpSNrU9qekHhyesfN7Fupe4z8C7WCNsysNh31qbGjBKUwPMScE5jobDbp7n9G8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFhfht6b2aouK392YXny7vHtiLCc2buoEnp6PfNBTbWVDGK3VQv1k2if4YBdRt3D5bWHWZ1XpfiTZ1eEAuW9Kv5",
  "key1": "4dnvwfpSoHYppidcon3ymtZWsWDgz4jr793V7QxAdrFC9ASVAs9aUWLmnv5rHP81eufeNYHrC2jRULxgsu3rKnsk",
  "key2": "5JZHMZFvot9g7YTzzWDHbwkk4dWYfCWMJbUuQD1ufeLb1r3httk52MWqhyz8jdmyXBQPoumYNKgTzRFaBSiX4cLU",
  "key3": "49jyiEVPmvVFHdt9Ufu6ZYidvf57jzmXsN4tcHUdD7z675htmMYxMWuDQu5yQ3eE1EomXVgDfm51ajX98jpQcoM4",
  "key4": "5hQ7YpmhL7GpGeR8CUbwfwGtvQeymv7RcjjGdWMtNMyHiBJfUerVwvhLyrFis2WtzNcgBpGGcdhzK5MJwGxZURju",
  "key5": "2C4pZv52sNyaQzUcZjXUYkjT1zN9cNjhy2SwSv5JVGfKgJWJkkGhAN3oNkodEg14o5nXniF8fZVPdAxLQTfcidnc",
  "key6": "4eW8vzaq9yNQeymK7DLPdCJjUauwjzd8siuhikbczd38Cae6X4M58muaHrRY7y2YnrkKAyF12mcJaGjYeV6rs5cd",
  "key7": "Swh8aMYM2P3G64wgUduqK7RwVkr8WcJEwZRUmPCcQurxkYSLuUXEzK3mBrC99RPbYzQBCwSvRoSb8bW96CQMxFu",
  "key8": "3FTYmJyv7rjmkC7TjJyAuD7MDX1rfxpD55RuyJUJSBMes7LE4wsAR4mBdsHsCmqAoTkWW6Ym3sSa1uXPeikCuT7R",
  "key9": "3ZGAhAZsBKCCLcoWANwDpGGUkBzARgme1ugadgMAYjFwvqVq1ACZppqkhuNUSPxm9AdGQeS1hzFsuGSxn7mi9B2e",
  "key10": "4yvpLPTneFFy3XFYp5tcDC3JY9KYfWPhdMbAg1ZgCdr281Njk1oNV2jLhdhszrgEF5AArgVZnV2xhXGr9jP9GGQp",
  "key11": "qJMnXSgg9D5C8gdLJPcqtCNLW1xDk7h8sKQDXHQyfMgBMm1hvfbEVU9TeWr4RcAeAxzxqd25jDDJTucEtBsY6TY",
  "key12": "4knkPeFDCM4Ys8gN9o4n9JtqHFhT3wHC9QRmTQ8xG25bvHkpWn7FuBRiSkDhY9gGHWGpYZKBmHZnQqF3ZAErnGyD",
  "key13": "vj7LofnrYAZkvgt5tBRYeuZZXU7AbVPgSi69XRgxeDZm2JgudYTnp1DbGMQQgFudZJzB3rkM7tjQu1p75Azr9tK",
  "key14": "5yVtdBZAfsXvGSQy3mB6wJ27YmSm5pq7kkwW41EBRqeCKW9gxNCpkWJdAeVtD3VW2YyeXQmYDkMW93pkqg97D1nB",
  "key15": "2VxPLe7GBZwksSv8hFF8Y5e5QBSJ2wXF92npgByEqp6z5cULAEV2HwmY8j5LvbZiV9A7m9LnNyHt7zBSsNPh7sWM",
  "key16": "TTsoyHX1azv2zeyUf4bYJ5ywPuVeXEyjA84HGFDSmZ1QfEo4ZnoAKoywchrP2pu174uzmmS145bwtYiJpH16KUb",
  "key17": "RM4Ya2QcSsK6THnvYHBLYzGYJ1HV7rRYpzeCyC4gzKtoY7xHg1YWmHZCyLYjFfyDoTYQcVsGd5VVRjyXPhnR166",
  "key18": "5hbAh3xRYDqWa9NySKxgafy7Ga3cMKMRAg4pspJX4VhYoVx1T293uq1brvjwKbHejyXwiMQfgaGfTk7sVSi6VRne",
  "key19": "yrKtysPXo2cNTxLP7XBuWtLV3Gp49kFPGdnWiQAx7VTsoiukuF3oCS4VqG7iyhviCg9FH5FPciLCM5n87RZpzUy",
  "key20": "5tuZuRPPByVYzQUS3MKKdeocdmKat5o5DvSD32MEZQbZcXxs23GnPgxghaP74Y4va8J5j1oyt259hTRCNSuYaG3Y",
  "key21": "5oSWyJ3CJmRoBq2AiGoUGMbiR9fKch7pvuAGta3hYRBmgETpUfHXwQ7ziKRZfSfTG5HtCBVuEBjbh8TeV1zbSW1a",
  "key22": "4852PZ6BeBciAFbD5xpSjPiMGPabBiPqRsUziepy4wggZqgNEGkJ1LLDwUhvFrGX1tqpSevKscDo8z1May2eaTt4",
  "key23": "3WL5TesFsATX7QNQafA1xbW7emVFZwwJye7fDmSRvDyqzNMYs2wbgAL67aAajj3ZgLPUfsKCDseoFpyYH6gsusA1",
  "key24": "3mMLVzRRJqjvGKn1696qRrFVobwrY4uk8EfhDY7zLfMLtKFUZTS3R62kXJsTtJ3BfVgTsvN2qzNZ4pWuc2ecK3c2",
  "key25": "2bhCWJQgpy66f9WxwCD14fjEydhEBFKkp8qbuGhXwpbit5sJqfFRLEXUBMCgVcYPg58G7wHSiEn6LzWRm4fimWwa",
  "key26": "21KrJQVEckFtNnmAgPWb9sEoujb6miKr6u3T96g3cV7PWS3rZSKDSpa4JXzD6UBXWtqF44NrE1tZnwVsEr6JGjTB",
  "key27": "5r4Mp3Czd91FvSs1YPaiT4SYqYgo6NFnDvqoyAe8WATRk4BBQu38iaPrUqUp2VVGvDbWvpojQBNMQe7pnqAc5oNy",
  "key28": "2fF5FZQxGk6cyG9FckuqagDEHfWLZ6uZq5ADByVveJYEVFLSoSpxYRUytD5FJ5fJiVV2cvCUUpeMGuVoaBopDwuT",
  "key29": "5fFzGFzeZaMBFKJn3FJwNbpqNnDoshi3wvCzz1MWReLh94wAWJtW4dEjuMtgEjEJFSEZtTnaYyHCh8DXRmS2kr8y",
  "key30": "5jHdRcfwvrK5inPDUQWHJjfYgozqGZcyQuahBr54mKt8GUcoE4jM2LXGVmaMWNMSfkJRUDMicNY2gG99qkvSKioD",
  "key31": "56bd7bbPkssscTFXX9saGyMvsk9MrvkaqmFkU7qjbRP4SUwbGbDtPN5jSE5F3HkLc8EJFPw8aR1mQEAydWYu8ePD",
  "key32": "63jAFhMC2TJsiLRmui4hyJdSTfeXLgfYrLxPCYS6D6bYn1ifGM3gddd7AFJDgRrWsYAej4NsZYh65HTV7eoyXSEk",
  "key33": "TFMA44J9Y2Q5ZWa5HMA9UxosHGm1kFJQ4zBgiJd2Nzim28jADzpVvaHDJ5YG59K8NQTN6dXffdnh6FtGJaTiSF4",
  "key34": "daMwphA6P3Qc9YpjaeWrvpy4UqmpSYmL6gDQ9knS6Tbtp7rAhDrfWusGtRtqd4yhBQg3TerjthhbU3rr4AuviZ3",
  "key35": "3PH6Eh5B78XsxVT6t3NfYqp6ssb4S7QhLbtCqr1P8LyVcp3sSi9gMDheB4ZFXeoBoJKD2YNZbrg1zdcSpqaagSw6",
  "key36": "E1ZmdjJZk6PSCTZLHh2bAs2qfeee9bmp3nku137nAxsL5ehbMLtMpffUdeUnLMpszRt3maJab9KtR4nnBJ63WVo",
  "key37": "3eEaVz9KqW7KSBz9gizx7BrAzeqa72SCnHRkQLAgvgExoiie6SqZ4K25gMxR4MLt1r1duVcKTYYcLibH4bjS1p4D"
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
