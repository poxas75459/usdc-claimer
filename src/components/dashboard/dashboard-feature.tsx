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
    "3WDSgkYhnWXkfsaANpZbsPdejPFhQj1V6RDKdmGEyvDDVYEhvzZv8i8gPXsPWF37J3bmmZeESTLoXSXR34Ry7rMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21rJPLmuNYirWXozetcAgQcmDCsn3BEdWueFnRvGQ5VByKqxQi3XroaS2X7XD1dXf8i8mFPdUpH6Je7BYBTcw2eS",
  "key1": "4hBEapEro4SFM7qeyAMfv49mf5rALWKXYcCwZNkRngx3sqrYUPA2QDVKYs4ci7B5nCUjZtsR5R7UoVyV5A44LRLG",
  "key2": "9rzAg419gd339m61hbAeiJSzFqc5EqAo1id57wLGwbNbLgFCAuKvneGiRUipjDEo83VcstZNTWDQD3CgpxiBoJD",
  "key3": "3SmUW3H7BDrJLDV57ZjacoWecJ8pU5CMVUX5Z2GtkxMZMg1ATsmggicHmC2Camh6ygJDTu7g5CEVFmj4shuuKLoV",
  "key4": "3MXBQyiJtY4TDZNfJe9wSNfBmejEXgWY1Tme9Lg513y86toMffsDxM9fAskbedcjGdpKYrHYyjAgMwBm1eEEn1ei",
  "key5": "3dZq7aqDsLH3GUcD87yFd18WKDvuAGKjUEjBJ8PYzEr7evfLcCfSVEQpCCHSb1N729z9YAvSCgHnSBZy6yj23RN4",
  "key6": "5ncMp7YCA1xKwEnWbm2P92J5XFzcn62HkxFsVWJE4rFHJkAqnCwiWDqgibMvxWsQVBU6gmL4b9tdyEJHPiXZCHSn",
  "key7": "2vbfToUZpYptasbLXrzAPESUPV5yzunFwVttKfrB6ndGbGyaVVtJV1GCey3BunkcxTFSpfUtqo7aSa4aqpDoiXj4",
  "key8": "ZeWFysJajADAShoWaptViuvb85FXnoyynNaLbpQVJbrGLgH41ogyCWdhuGy32HcZT3ULwXhCq6piSk2t9XGqMPp",
  "key9": "2dcjFZGU22QgUc1ztiLYKDEveMWeT5fu1SLj8ZpaKumd6zwPWxZueyXyXRrfeeG6Jt6KDQcSD6MCbDbNjzzBqB9y",
  "key10": "BumL6riXPDghMJv3RvAkZV9w8UzUTBNKH7BhDyvUYWm5di77otKe4j8ixJNy1GpEAis89A4V5VqnAH4SikaBLfw",
  "key11": "4CGhMF96JKNnRN7HLs6ZaQrF51rQN8ghm7f5MtDM7AukysrDWyziypAbhzaGHqdPEo2Qq5pw5rGqpQwG3Fi2gNky",
  "key12": "2Snci7aA3unxxkMxDzr31NLDSJj3aXYQFP4bpqHsG7xiPzjhZCVf8u76qSKui5tzsRn3MEz7tdUzGGdYR3YdQqM3",
  "key13": "3YZEvH4TTf9zMuwaaarLhkrXhQbSH77n67DoCGZWdTGixgSdN4QRJRv9ZNHXunKrEN8uetBx6XYZxTCJUKbeZbM5",
  "key14": "4Bxj14fTsfnsGJ2UrpUnFjDhGkTPPWC4k5BrrnfpecfxEeRVwVeejqyBkvyQ9FVdNfVHSnLX4CbP8zyqNWPPmqLs",
  "key15": "4HjwoP5CjDHTK6K1SCsiWY6YJs8LspVnxj7AxkQNmYXuUZQmHKP92pkQEKWKPd9bbYNJsmzekzLcoLVo3hXgcxSq",
  "key16": "2QoJhkx2J9F8Rgos77Y6eZaiHLifufJWhH1fjabU3RmrrNm1wfkMTrWqyckZntUZ5LQU7M9iTu65Yf5Hu9MQG6rT",
  "key17": "5Ybs4epvagWJwGFibJZigrYzFMZZCLRZW75XtYhKtFnkYS1TC4wEBtUbpM9TLFjHCURQKphksuwn59C4X1Sj1P6X",
  "key18": "4TFvTw2tvKmdNfpmwSrVyk6J3QjZAwUEnuoJFB5bRcpMEXmexNxxKBhxwLsohKn5XohyVbTArorFEadhMzHwSiQw",
  "key19": "3xCYGo2TW3RyDT1j3ngrSdFAjKBsJwc7dpALYG1bp3uF7ZLZdQEhZHvqjkmTqodswQFfAJJGccpAz8MnVY5xp3LH",
  "key20": "59BVAQEBpuZRU4aPxNxHtwsGShWPiBU9BbiDANYUV8djryvVtu3CSrVzbkzTezwq8EfVdsJeVTQoE5d4KSbh11XM",
  "key21": "3SNbLCWxQdeEDEDpJTkk8AvFRPB22qMd9gYem9qYJUghQLGsau7kX9vKjv88wXvnS7Ycoj6TZV7PjZKfbLhEFrHG",
  "key22": "3pA5fC6PRa29TvVBBP9Nx5doWmuGYNLZHFLsPMmStzZxczL4yru9mywXaoov5LPid4ktBKFQKKRY8ehwSc5wV1AG",
  "key23": "42L9qXHEQ6Dxzgj8oPnPe8rEW5U6wCtL4uq1U3CjEHjRr4EFqfBHzCRGWpLL78H4eSNRn8UAb59QT8ypGypVo9WF",
  "key24": "5AC4vBji4VWo2Km8VrijYuXkZNtQ6yfkmbk8PPQg7KhnYacDgQhRo54B9N7RXKVYVnCWdvin5f7tQsdZNgp3C2VT",
  "key25": "7nwpG4CrFAZCDC44469QTmRwnEjq9kRRhxM28jF8eWavcvo5CewUrV4ntx8mtBsd8qk6NXrnSA6xxj9hQt4tLev",
  "key26": "dqJdcSNeWoUZupC5pJmHVp42YmdZDqkJCRU9VuvYVWgghgh3gMv6kP8NxU5ooZTCtv8ZRjcqU1HaAPUW6mR96P5",
  "key27": "5P6k9QP6LF7AXnCgqVwGsMk9297C7sxhmm8LPiAYsDnDYarw4x475rm4bwZBRo2rpDvDPyQjPsuCbjv2JRjjQuBc",
  "key28": "5UpasRS32ZeZohWd2UX4qB5ohz23AFhXPRjQ35JLWzv5QHu29sMLxiviD7QoCCfcFYviVWxfzfQ6w13XgXeFVFq7",
  "key29": "4ZDvQa7CWUchM3Jc82VrcjkX2ABSjgbozms3pfFKFw69oqdrzZskVRFaRPabpStLt8es4VJV1H2r64pQoLNY7ygb",
  "key30": "55MSnjDTWYbQBcyGdkJ2PmVufVmuJmxfZioY54z3tw4xD86xF7kPjvA7Ruuw2JE2YdH5cezas2PZkpafAvrFkdHq",
  "key31": "56ZG5CKQh5ctKGUjfhXx1yhfqJB1JG14VUYwf4Qq3p2V5Z7wjtaJdPTZku1fCLaTQGGRidzGTmmnFvoQroUH5FZX",
  "key32": "2ZoRryTauKA5vtXmfyxpcXeicPmNT3D7Vy9kAmczU4W4KSZYR8M8a8WJfbMfnvNmetNp8LmamUvMeQ5D5BcwuyNc"
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
