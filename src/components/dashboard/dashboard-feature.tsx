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
    "2GEpnU8MxckizfFZ3LfWmMTBNTdaGLP22sEwUSLyEkt7Ycn73FrSJweqUu7aoMZxohWqMDAwtb1Pyd75hdDBvCXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rtKFU1WoN6yr59aH4UfTSssYEa3nCrAWZ9M1TPVGc1JpphraDHpHcXboHjJxGonf8ggirY3DdpC3mrbMSMgsccX",
  "key1": "4aoriGNq4vGNhpgPQQoo3gTHpuHrZAtotNd1pWArDHeijAKoRcY3dy2Juf2hE3PUTKZJaaaJm7hAJQJnufw8tMLu",
  "key2": "3jfDwTccauFg68wXd3PQvx65w4mFP3akT2Q9shUH9ThxmoC2RPz6bcfUPf4X7RfBRPNiU67gmMyVBoy67AjxzRpE",
  "key3": "5pfBTU4uYPjz1XdCK5XZWp4cmvbNRr1GHSfHJQMk7VxwEq7e3yCm1HpEiKkFD3oRU5V41m3F8zBrzuCUrxoXVSCo",
  "key4": "3hcmgji7BsDYV6fWJREM9dSe8W4MYxG7wiwDUBBHfguTpkLjvqpbv8ePt5bA2SYasaH1mUVKmdymCv7FyRw9uzd8",
  "key5": "5CFWthxeYwuiDd2vKB4ZpmLT4djMt358Uc5VTCh78ij31Gcv6Y6CzfaoSrFWq4zF6fo1stYN4c3GhcP9nzWYYMJJ",
  "key6": "37VsBQTXyzqLizAzEnLu47xkzUqDNj8Qv2EPXTfisbnEJhgGoq9VWWhmfLSnKriyQVqz6rr8frsKh1s4m1pCcYCz",
  "key7": "5gSfxn2utb8d8ULJ7kfE4Q7eq1rtGaeTJFHUVHoc28m9sau7GxYz1pzpUGwGNBjVw7HjfMANbosQtVDDSUPsXDu2",
  "key8": "2KT85YrNEnoJsoqa458877m9BxbHfYveRpb3zhkdo2mFF7e7kKBRTYGHK6bX56ZiiUKg43GUj2rtmKukrQoLkJ9y",
  "key9": "WiRhRQUWMDwhfXC5aGCWqo9idiFK7DS8Wdgjn3J9ShqMRCdRYdox6BGtRcLGDtS1Zija1xWnRqDkZQL5CvW4DyR",
  "key10": "5HC344swDA83PJPkCx1QvnsW5yntcbquWxTk1UYPbNvGjWnC8sKuJToTJsfcHhwnm84C3z9SHxv6kZigG6vPjMEP",
  "key11": "29CHSnJsu1DxpSqE4P1k4M9bJikGDtUbAMH5jRfmfQ1ZKCRsgBJ6uzQnWxXokeB6u9cHdWmUywYBbvgvpd9qpJJG",
  "key12": "35y45New2GKehXL12w2RApDgn5eEECWQNaw6LXM5jBSvCQ8UaV4fb3nM8Bwj3QHoJGqQeR2z84EG5SqT9n1GARJH",
  "key13": "2zinyzQj5HmCArAcEmzPqqAeTw688x4wrrPp9FppcDVSfH9UG3mrSia44E8PKsy7qwfXEEks64YjHctbCsjDpwQr",
  "key14": "3NkWQaufC61wQmY267EcCjRs8sbNz1kkd2xZcTPXTHEoY8zsCzpdeVHLJ5gUSew61YcScdSXoLxZuCT7d2gzVaa2",
  "key15": "9aXC4DMZeZdrUAxG1JqH9nUySJRWPDa84AqbfDUFag8enobx9vjt4nAF4xQmRLRiUthR84P1jgo5iVdy7xTR7rq",
  "key16": "3SKKvn8T9ibT992AKotrjZbs8TJzi7v5VMEnoeCHsRwB8yH53kv4QZ3KWTHd6Mq6mx68L3kMwWxYPjPuNikmak2g",
  "key17": "LDdY8qrU4nm6CjeYq19ymxhB57JZUpBgcb4dX4Mt6xzbbYRt4uxc3T67DTFi1aY3kbGSHEMkbqFQgqHmcugJV5L",
  "key18": "36x1PmPBHNn94RkfoJusKamSKV2RcG7PCYCQJVmqZxDKeUj1RLjd3rQ3XoPoZ6x2P4Nxru42nHRyQo37D2WwJR4A",
  "key19": "5uXQLYDwnFQf8WMPWDDG7MtgVAwYWkp65axMu4Sryap11on65hA2piJerPNRRa28fCkhBGDh94L8yAjeZrbf1CXp",
  "key20": "3H9ToaE2azf7XyE2vSEPDhWWTi7XeJPGgJdoYT7A46qLdyRQC7gfeB4gzEEkRMd1tDcR8XuRb1Kg2m9z98UnqGBH",
  "key21": "2UywaxGepUdViKPXrXtRunwNmLyDfQAEi36azLB8uHN2bsdrsoKLCeRNvu91y2yUjJyELpqx2C1pQAxgAAzmNGmd",
  "key22": "2AnqHBpoAmFPnkXFJbWH63KFWVSaaDcFFBd4iWwZot2yRhwNjQ6JpWeLbnwqH3cp9pAuj697nFtJTW8SDoYA3L4g",
  "key23": "2zJypN71oXYUHCGmemeNWxvMBqfpzcpgnVnKPYSAvYX7Vviio6U4jnT6k1Pc1NQCQNWRUhLFqnHaCYg1ZChyJxVV",
  "key24": "5WGoLSD9jB5QZNeibnaS2QwWMrUVhAh2NF22eYyy7F4AqJnA4RLGmGXdkF1oKdubcVMgH4wmMoQXvPb9LHAqfRhM",
  "key25": "3q2K5KEBqNPLFrtgpTVaknBfwJv1rzo8uPrFHAERJs5b22mpYTSigCVRq9CEw3MvqdqWMxetQFwTmypvYV4Lks8y",
  "key26": "pXGXBrjSKEYC5jqyvDq5VeVF1prbt99SBoddTSe2KvfUnSWywK8fnuHp9R292wfBkqZT8bkTKYkgXGhSCFwNAHf",
  "key27": "37rzaQfank2G7LQEAQz1gZkXnJukCLCkoQdwSWbEiTJSrne9J4z8jWuxAtAYQPTNUfj7XULZrQ3xRe9Q5LUcytgN",
  "key28": "5W194EoA8GzRDdU3fTtvwUi9w2az88kbFr2ZSLuEEX98TGKjuaQ5UH1jxe5s9sPaRQxBoE9mLT9WTJnQuPY3Xfc9",
  "key29": "NQANcSTg2CiG3wWZGfhuVHCxHCPnrnCoM8YVzKvsSLA9pnCdjPeps9qjBWqmMaGKJcVdAKDoE5cWtDKNNtgsfWe",
  "key30": "2dDmkUz367VxNTWQNddpVxuk63g8bYTVkJ2BoGih7HCHN9EWDY8GpqxQXvfDxje9pS1thdb1DquRF5UJQ2WVrW7P",
  "key31": "3QB9nwu49VBrcMWAo3a2N4V6JAoyRrCoyBxJRvRGdgziJR52PD3YxEknzre16FmPzPGsuhkXzDhbRSVGDPeh31sn",
  "key32": "2qmW7aJ1LJyUrEraCzJX2FASLT9cPesZaFAXY8wSobn34gFedSy3XSfiyErptqcbBkdUpP7SpKBAZSCWW6bmbWiv",
  "key33": "5QTupgBBp8xzgCEz2m42qUJAX3miTRaeQ5KqbBzSEVYzaBeFX6ziWc4ZEFrmmtCxmejxh1p9fryCj3Bsn22eTM9Z",
  "key34": "54AEUL1hfMr6fydK2jo167HVEARVswkYuhMhMMVhWoq9kACYuJKgXVfaxKij6xVGFEBBHc97LoEpuvh7NAacrE3Q",
  "key35": "8sQBXkbRWYKT7FKUpHuJtut51wCajG56JTTQL6JXM5PdiP6r9vjvYKRP6xi65cw5Fmy4xazMCYH6t7w5vbYR27Y",
  "key36": "5EZJffbm8BS7gkkfdcfhkL8jaMzznTHrduma2QsrERR1AEo6jTFwSNCuAfN1HiNsn8HC61y5nrg2XM5zTuxHAqzw",
  "key37": "4hKnwT2Vd1TAZVVxRUyfsZDWsaVaJw9C8qhriDj5QbBPRMC4PmpxCjv8Bsu1t9nRrc3eLHpR9ou7EipJ44FSeFVF",
  "key38": "YUEC21KbLZo6kAetDfqtPhp5LyQXc4EwynLmBymGwh8f9uDNkesVmcuVg1jHuv1TqFwF12edSi75aoApYxiDQQH",
  "key39": "eVBHEAjV1MjrAj9Qdvx2xWP86nzHQwGYDu1ZfizMHVkHWMqfZ8nja6YS1gmYfDowPQiPHBgwHjab2AUu4kWZa1o",
  "key40": "4DaamByDDxBya1N424r3HeM9RXjzagBWC4o4QbRRh7tQ9LQ8sfG4N3RPt3rdmia4pwZk2cEjgAW6rttRoQQEk9XM",
  "key41": "BmYMdxfkYdsbAup2UKr62BnHeyUStpRYZvmL87XgoKVZHuVVNrN8H7ZsZ4drWCranMgu49BPoDriir16TwDtJAP",
  "key42": "3KH3KCP1yAQy1tVsVMkFHG8dmyNJA3xMDecv2DUSa14CgsaCT1bymomioNVVvehz9YtWiJ6G7SfYXf3yMF3ehxiG"
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
