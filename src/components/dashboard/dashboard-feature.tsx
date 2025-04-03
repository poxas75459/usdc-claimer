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
    "4gy5dYaQWh4Wc5BF1oxKPzAWjWBKC5iH93JePQB7YaiWBisRPJodrxqrYmRn6bLNBPMVy5HsEE6yoMQ8H6pR2u2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NjUmZTQbjT4YAoD72gLDZ7NHxQRRNqGn7wALE6BRVDKGJV4j7gisJ3j636qFGSC3mPrjtciVBQZfzKEHfMndkC9",
  "key1": "zHMmptfqLTADwFASbnntMge3oQbTBUaDMUoN4xPEFS5od3Vahf5NiBhn7SznEUUzeyx771aWxn6zvN3aCtFyu9K",
  "key2": "2fuKEA3jKDmLrMXuRQNM8VmujAECKTb2XYBmV4K6UhkBJNXTBFmMKGfbfWh2uGc3eWXZFTd9V2BgMqPq2ZEpeK5a",
  "key3": "35YSTp15ecDzZ6bpBMGENy83DvX9R5As18Mm6EJqF2W8jZkmsDzd8heMLMf5kTfgRc8TfNT9FbMKTT6HNzpR1C1g",
  "key4": "4zVWh4xh3vQwY9mhZnk4Hr8q8pp9t4dmibisisnAdiqbTw1gGQ2qUHXiibSbsicRfzRFbyTcXgeSjRsPXvZXsftn",
  "key5": "58CX5rgbKmqyK8fbeppyqcZcA8QGYq3A1qdp1321qwabS6z1k4SH9gWiHehfQW2tFHd9L5Qqs3LJ1zHjMM5xK1UF",
  "key6": "qc9Tdq2NozvQdyHwFKDESN4iVXMiVmMbRaNMeM3j4htibh8KxtWSbh1Z9jf99fKHfcz9oDWG98HFdKxzPLPCdMA",
  "key7": "3DnKoef6Fpe31Lg3svcKMNgZTJExRcHW8JHa8FNb8BX4SnzNZ59KKyBsgcbgNwUVmcKRPf478MhnCeh1E6977EVY",
  "key8": "UXtjsdQLVmq94DNxwxRyUnv142HSLktjNa9vXNdcxopnP1ixnL3uaC3YjvRQ8bdubRiL5WTLjP8fuzCkjAhqV8f",
  "key9": "5Y56q8ssxSGLAnjU76t85sPDPCpLthikLjTchRr2gYueg8dnCa6d3MyKtvJfWxpkCancjgKRuSKBKAh1asJL2FkW",
  "key10": "23oSnH8taNJe8Y6KEPbCtjzkYhdgPHEHLiKAZzLZrELZUiRP6Cd6VisK4vjWze5TCK9ey2WYqxmSgrNkxujoUmgN",
  "key11": "5sjBdXa5qi7TS8nDfyvRVEA8ZZGFPpfBT86bBuv2RvdWp8wNBzf5NLyohuibUxG5ZgZvFcDLss4GYkrU1SRbgDER",
  "key12": "2jjqx8ATgh4u4LD7G9nWBkyZnMC4PREgZe5Rpz5US85tHbrhiMkv1c7vEW2qnWgM7PPS1URLgqoaMTTQq9w2d6Lg",
  "key13": "V7rjEfuHNc5Xy3TF94hgMU11VytJZrNgZuYqQ5f8tGZjtTvm1fxn2pYsV1JQrWt2Cc3BuyaW4mHJxmNLBR7Eds9",
  "key14": "4nBQafNxvpffRnojqQqbnaqeBtz64MVjXMsmU7aBtU4LgejJ3q6NFjbQ1CGYdZXnXBEWHYffNRszXCNYuyy1qh9",
  "key15": "33PqbnQ6xhuh6kGR3fFuCnZUnkrmpUHxAddVTL2zEnRPk1HQnbJbgcZt7UHTwMwkNHCqLyAeCPgBRmxga6T4J6RN",
  "key16": "3ofvXC5HikJ1W1wmj8FvZDRSqiEoxi7XWcP6tX5miTMZeZtoKkSNok2GKRpcD9tZKt7Y6oMSWWk4D9vnuiSY8ehx",
  "key17": "62XzWHA6WHWoaUcvS8BVwokvN9MJosdCW2AJE9Ah5FwpXB8XHjiD2iZNaDH6sCMCf8HNXwiPU5Ro9wjr3r5U68WM",
  "key18": "4Em111bj8JXDsQXRh5FSpYw33YqyX3JdB5pCavjTd4HyVDCgQrDpfnsxzjvN6LFAeLrLFoiWMotXD8taTXfx3kuz",
  "key19": "3YppkjgmC1KbyvzseaPeqCENMKpAyg8HQxx3ArMZySXDzqSfESbA3YMgETX3FPkoPuUACM9RC6sNhAnaNzdEy6oq",
  "key20": "34mmvp1aAwLECQFBdNpHq5tJtagf1KaGCgo3r3io7ApqkErBLT6ras8tbiPMaTiy7n8MSM8AEoC5Hy6chyxQqiwh",
  "key21": "4aijEsxLLf3eDzebtdKbcM6zqufs6YXPx6V9HQGxjFqo59yJwsKh34cvW7qAv1PGDyzayyVdWmsSJmJGVRdkZ1di",
  "key22": "5iLr3EzgeXKYpxawd9fBin3CtULsw9RgogVv4DcMawbxUvHiK9UmBU94yYTViqUSDB5FRmYkdqG4G2VXNxQRTYGC",
  "key23": "3VwRfTqbArNJckkZf7nQVpLqbmv9UxwykUjMxi53WWNvqtiZ6eGr87T6SER1G4gQmbQpRmjGGCk5R7DhgsiGskPo",
  "key24": "3coYvRogJerULQSs9wUoeKyjtNWJhJ66yHjyHM5exKkKtq5wZ8xJP7kn1CzEFNbCX78z1VvMRPgJ1CfYwUc4SJD4",
  "key25": "5z1YpdHas6ShWYwEhiFDLYN48iRbxvzmsfoSNg3y8vurFV6xpsY81N4wuokjpHK3a6b85yLWkDMSfuwTcZVMpyuH",
  "key26": "5obMGwAU6ik8HAC6DzckdASwAkVS6AAFZYAjA91XasUWpbbGL42LiBeqUymrTR7mwpMsvDdJPvUDt7GWgoZ8P5LK",
  "key27": "5xt6gfbWUKJLwwZPQbDjn63yJ77DrEcEx2DENPWQjCi25m1N2PrThyG4mrViphZW2LuFBptDqPJgCykWrRZM2LXt",
  "key28": "63XLDxMwudXgRo1cTk36Cuuf46NmuPdVbD2dNuy2YtcUjGP5qmEzxoQB1TsrvVp2v8vD6pixdscRPV2iTrJ4JeAS",
  "key29": "4y1vTx4We8VzW3N9kT1EEbmQUxjdzJxCpUfqNc8rBLPEZbUaNY9GVYfGkpUQpxj5LvuoY91mmp75HLTdoeY7oLfs",
  "key30": "puKNB3DWiXavz2K4mN7kdLmkc13Q21TGZWe34pUciRAFCntuJorm1ukUS6XkEmwc5WFSJ3TdrHLZstv8DTomfNE",
  "key31": "2WQmaviEJdu3EjdVndDCDusB5yNMBQtzDKKCZvvHdPfbcshMGZFFDgS5ptzp1bkr3VAS2sKY8MNmjqLm8HQWTQGX",
  "key32": "5mqD9j2zZPs88dfCaZVJksY9LrVy3sHZRZR17cLXztwkTsairbD39AAjgbodvTkQg3RXdfQvhyEUg6wN7bR3jT9j",
  "key33": "2zzLpb2v3dqCHuacwMBo1xLvkghRQ163G5cDKdkFTSJjmQqxvzZU9PQS8ZJ4AXjEn1Wt6kjzpaScfye3sqypeb8f",
  "key34": "5Hq6Cra3CozyHK65se5iQ6wbMq7xXBdE3FnrRfcs64FrDzHtAMy7MtqYJ6q3A6KMXN7X6nGMYUierBZz44QcRjdW",
  "key35": "4bAFwjDxFZKUsh1PijnyN7vtqMCdodukrdvEXn67MnPUDtvpnK8utAxqdzikbxGdG1T48jwqcrHCszvuL7tegnvY",
  "key36": "2ftTUgZpkMx1h6dsAfgbmFcWXj4Z2myqpFJ7uRUAD3r2mc2RMqUccpg5sQsev5NBYFTBd7ttH6QbkR95Dkkz5rEq"
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
