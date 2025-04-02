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
    "5itKLj31UsQGfZrrt2FskKh9DARzXLJuZ471Wqvi6GapRB1Z1WqKS24X8q9GTYPGy8TKr7JfDa8mmHzbPJCRYYNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdnyXYbUwb5ApyC9BD8wFbrjf5K4L8Up8SFEqKKzUJ9NWdSkAzLNRAm4s1iaR16UvXmL13knncDAsiGSBpm7ggp",
  "key1": "344Mr5LhubZpwnSLRymWDB4Qt5SkeCr69KSPwSztWWizAH6GH8Abba4M7oHJLgoLPhEzjjyJ5q3KLTA1huq3e4Tv",
  "key2": "yAfSx7aFUkiQM69JusJgYRSDM1nLCkGTKeiinNzdhYdKGnHEpyEAAa4Y8KEZfV5VjZUuYC5Bwc9361Nyv2wSBcH",
  "key3": "5ER8sETWJkUFxdVS5n3EEWMtCzYspFCSDHNSh7BjoFtbcH4RdXV8SJ3QFyykS41U4KP6nB4e9B5uWTL46wn7rMZq",
  "key4": "4AUCY4cCZWM76e1Ny2ZVkwGhecmvJsXEaREZF8Dq7u6dLyTurCBm8Nm9i9oMNqjz1MQQ16eRmfK3gog9SXMKGRXW",
  "key5": "41eUz8BnycDzKhz4vikLsazdj1GsE7YSh7eEZhnDtYec4hinbhwGhEpAXN9uhQSshoG8DedtNcsAASHSgZub5W2b",
  "key6": "2ZrLSwdQ8H7sWTKC8wYjCrwsDtDphgnZ8gonQqATeVve6QFjanxhDtptUub4ne3TEzNjv1NHBF5Msd6ASoSoVvM4",
  "key7": "UndRtx88SCi3sYgopTS3RmzMVb2nM7QF1G4gtwZBywBT97YfGobsubkDYz6iEFN9G6m5jWbrY2RkBW75uNcPmoP",
  "key8": "2tTQDWrEg96jXtWviMExEocBk4nET2XVJUiryjxUNkZtVUuuFDxNjFL2RDRmZnVvTu3kY97dwXGDXD1x6fd9QevG",
  "key9": "3G51x2v1N1cTdousTxBHTSAYjAHN2LPcPs8xCr9MV6yMr5gomxQ8sBN9ybvmRk9cyqAfeY13cXJsnokcwuKXubxG",
  "key10": "5qWxhJeqCY9TizwLWRQEXfJWhNfdbzLktaE94MX1g6c4eoLeovTfs8TDiQNQqeow9UifzsuvFZJtuD4J34isFsbc",
  "key11": "e4KbGsveyGAFTAo9cXgzY1osSzXuRrQrqeViJF3Q8BoJHe1hTM9YP2NYjU8CgnuM461HXd2di45FJYVF8eZg9AA",
  "key12": "3Hr7TXXx1VpWxdLf2fSBXhNccmbjtnMBZTLUJzNwqY5R1VGfNSkN7JXWRHeXedn5F9XtEMEA59wGGVGxzk6h6Fnm",
  "key13": "59bvPeEuKtuWaJC2pS3TC2MPtYgGD4EUmQZnidjStCwTrppKt2dYSXE8jcNZqWDbVK3a9NpgYiwpGFAqDUXQ1KRi",
  "key14": "TbL275kCJXaUXXwvCkqiL8FCQ48VGTjF6v3TDHz9AKddfBwnzYjrQWWSPPHjRcGNYHbbc23iLoAipiK3YKDJDZh",
  "key15": "2kDe3jpHQQtFBpE5scSC889dstsiYeBzpEU8APEe4UHqisv23PkU8LTuNpiNit16DLVSruFNMX6PxifTob28p6z5",
  "key16": "2Rhpani6ofzganBKjkJ3NNnSP2F2gKLUqjQZC6G6sSrpCgi6n36JGZcqGfcvQdPujr3EuhCjUDbieQVLxjzzRFS9",
  "key17": "26gv2tDYNVzMYMLfZV6s9Yyo6EXGQSincES4FbT1gNHMYZLkUaW8VfXA88tNgN4SuQ1rvyBUKe3EgneYV84USha7",
  "key18": "3we3ENkgz1RsBGSXbsRrjxprHMxTZJWL9RK5RyU5gMij2CHc7jr7ozHwNKsNWWgCqYkYUMRz2dRExEBj8LxhwWpg",
  "key19": "SSj899QNBCpBBBNrwPsTvti2HAfTi3bUw6u7xz8kbicDvc4gLENZ7MUYyDqwmWkhmyqUGc62sYhxeEYbXyv675u",
  "key20": "3XxiBnS7U9JyJTL1iCrukPiuGM7seCiWpiQXdGsNcETKf9HQTFFYjyWtZCvZ6ZqVqb2jNHbS5CyewaXyqkwcKKYP",
  "key21": "4uXFT1Nrye6DeXs6c3nRv47juGCaDb9Qq3jx3mzdsgmAr3J8rw6iwE1y38ZMAhk1KcJ2u2FZR49qMkrDnro94UDC",
  "key22": "33h3MUfgMTd4E8EjvF11DnQCLDUi4CA3vyJgbQ7wCyXjZ5kAtcNPD6UV7P7knk2Zt2dDWHCKUADAR1YmYndDJsiv",
  "key23": "5xG7FCvdGWcdbyUTiNfxxGokyz6DngKpDW6a97J549TZCneiccw9reTLYQS9Rn76Z2dG8CAf8zUZ7B77cTMJtpKz",
  "key24": "29BgDB5pNm7CSA4F6bL3j2QjkHijws4LxPLJKutwJjmDjkgjMbwNq6vG2ustggcWdgdJcVTtV5Rx3iC6TGXMVapc",
  "key25": "4Ewrsa1WnNrtusTxjU5kdXRMVZ7yTGsdAQB6sM2gop6a8uBTGiwh5AkoSV1u1kCtDxLZybJPs6sRW4y12H22nna6",
  "key26": "5kAAX5RV2ptZ4K3mtiChG4BFDWJpXgikrNY2gBiAGCiQpEhYZaPT7wrHtVBX9adjZnBRoHpuirFXvuAtrGhLaxm6",
  "key27": "47MKfbSx8x4pPFw8ykBW3L8FMx5jToxA4Y5ddQVRY73aWVS7xQ2RrCXHvRykzib3GoNzKEsUBu4VN1ZDgrrQLgwD",
  "key28": "3zYN3tXhkwXFpFRa74DhH7qurqpSwoft1mfEgdQ7KxW92CAoS5kXhN47v7cdaEy1VyQkVxyRqLyExVBhpbZwMe7N",
  "key29": "6XJdbM7Wkt8NScBsQPE3i3QPwKYGBUyVth8KNFoZQ6TfWS5g5idgXSfqeXTySfNCvnLE8Cj5nnr6CaZmpGd7Gxz"
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
