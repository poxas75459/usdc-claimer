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
    "2wEi4NCyShSjRzwe693zXopgrVLRRxwpW84jnnwyfkkwEuTg8mD5xx9Wjcf9j8xYN7YofZ4TZ3AMzUNGKABEspRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNJLzZGzDZ4Fwr7a3fQrQTiACUyJWKmo1EMQ5AZ7gTgYW5rwF573f1a27UEH1Sz5xKek299piWkNgAd2WKgztwY",
  "key1": "2Kz6NcGuaT2jTR2xYrxMbqgSjLSTEdnQ794u6Bqu91BdzoRinLWNoZEs1rZq1UmiYxFqS3NwGAhgBd8dugcNqZQ",
  "key2": "5bSvZZXJVRSvvCBM4XjP7wznsJzM7DZ6YDahufdhL3qHUneZiVKZ3yyVDSMFj1cPe9W6Hwiu99bQzru3Ztka5xAy",
  "key3": "3Jnb1PGVP9DAPJEbot9BEPgb5bqrARBqSAfSzEQu1GsqY4PaYyWq5e2SMKLQCDUCXEhLC3Cc2mE8TpMaPyW7mgVu",
  "key4": "3UZ73RRAyKLmAp2zX9Qw3mrY7FxM5bSw41zJWoGQ5dRVd15dxYTHGxrvQepPc9qySrbmtJZ6q53CCvEDmcvhuRZy",
  "key5": "5ycbM7Apf2kcsAT2q8deotqHu1vJ6RBaPCRdVyAkXoiUFjaNFxNZhd8edR7buE3cfaVUf9hnJpspUrtfCSyjNdux",
  "key6": "3DbvjAptTDYicuG5oncCJdQ7Y2uqAUQmZXTkuL282qH9pUfFcgYN9v7VpmJqoYNP9RVDkSdX5EaTZaV47eZLS9Ti",
  "key7": "55K6isziU5kt4UQDh3AXSzZEdg2kdtCGSDrZwWqojpUHfzvAcGJiTHbgc4VJTJ8DJoTLMNhLiVe2xUeBF2SAaVPb",
  "key8": "5Y16ZVhFnMwz3znzSHE4w9AiKRXzmPCyhpiFvJPvA6qhrCDQoTHunkM4564hPjjehFdV8thdS1m1Ey23tBKYxWg2",
  "key9": "4JodwWt7i4BPjTQ1Cv53oPDajKrZSgpoLnwf4ojGsotCmh2j9so2AzdpkUE267Kmrvo1WkWCNRNdwRn45j8d3od4",
  "key10": "4GAoh8ckmAFPEV1QastEvFk6Siyv5Bsrf7FDS9BQ1DCRuf4YHgA9xuFeiHDZcHLdYDCpkrGtLKEMn2MrHEJ9KyPV",
  "key11": "xS6Eyt7mcLTqtbQAVQr1oHe2TaQBDo1edDb43f7jh34HxEyNdkhEeMPHbPUtpJa8jW92qsmqBZvZnqy3V5uGmPu",
  "key12": "2xbt1kLF3SdhwoJCquW32DARepWE6AGGhXvM8LjMqFp1MXA3oEdqkypTjQ9PN8LQdqrwS7fGuUQaGcEM4TERn5Ce",
  "key13": "7MPR2ygXGVmNbWyJCyFpekfF5J5YcPNrPwyRGfT9bs5Ayq9beKaa5cuuwSydvyFReob42j9KDGTRQAWR8Spm9Kg",
  "key14": "3BPxqjzSqGmAoSddGZGQFbadRGvLPktJC4kUgWb5BfGU6VJnGtkTVkFXnubaaG96tDgAwQVdBqMAsZzsZeWHky6w",
  "key15": "2hazwFP9c7UtmFidJTXaF8tjs6wJrERFj8Sw9Gbkq8ADqbwtzvvUMcEQyoxZQkDBL8tHeepZAgD5LJtSUvXPyGUL",
  "key16": "NUBiaYQWemvWckwLjFpAG2X7ZSPeSf4Es7fckYwyHLadQc5aonAH57JHBSbFmS3YhygQ1mFnEbKcD5kw2WpPX54",
  "key17": "6MJhpFvKdta9nbp8w7eYqVLmo2PGiBJ8LUAZ9rq6963aosUDjJvEhpfZDPgAqoxwaWrtUtzMmtdSSPZhr5r7C4o",
  "key18": "66srZgNxQqnKeiLvCdUDZKqo8e9E41YeYCSsNXATkAZ1iofd58E8xiBz6EYtJxL2JkqvcAJTy4zBCpfKwwpmTT6Q",
  "key19": "3yQpGbZ2hSiyRjCPNdkHbxMbNwufPfa8Mz1GfVxTfsnftbKntoSX55aC2yh1UsYXLMRAnpGULYh7ys1EchFgaPvq",
  "key20": "4GtzmSoLVXfWi5LivMgHpbw4aZLZSkpU9rDBtjd5kZbtWnmoch6BASx6YRWY5ug4XTPUp3hQ9qSbiCKKHx8MeTCv",
  "key21": "5A6Gbzk6jyZhirrNBTvnxtPyVobwnhkKPQvDxPM5jzawuiUS3Yb1Ut7sPHHLLsDmVWtCbrvmshq8UiHcS1w8gqSd",
  "key22": "2799otw8JLBrNGcVgPsTgBHqnYwGPkpDhC2BDoHdHtcddmLcDJ5aTCZ3ThSYmmDXaJnVczpUasKkYQV975oh3ERG",
  "key23": "3X9tJ67NstCrMz6R3GmWVS7Pi15EtYUNMAv8cYH98MXXYjsKs76krQCt8PY2YvqhLei8WNwfqbC4jKk8aSKEwtRL",
  "key24": "nfQDwMokvRbuZs6wY9tTPsiVvDcS1Rrqu9ZJVzNJhz9ndsBaCd1J52GT4VH6kFWRoSXApJU2MBkf8ersvHdi5Mp",
  "key25": "3VSesBzcb4JZ78LeUPzhkVKekpFLkXHJ1Lhtcv9GKgj5iAncPQTsey85fu5sui4pb6m8ghbGsCtY753C33QQkNN9",
  "key26": "5C8Bc2f7nzPYB1rkLhQX1wZfKRC4LoGmefDv15r4iBcnu5Rk6ViuAUuD189L3ZGkFUq11c3jpTdBNipV7s1yYuYR",
  "key27": "5341VXQjttVYySiTktdjPL9yTWRWrrKJGnxPuNdbMFhdcga5aCtKrNXVoKyDWhfuTHs8sQSrUZEHDMok9XD7JKdm",
  "key28": "53arJn6Nu7EQjFqB7u15pr91Lyah7yUMWywfnR2ephR55JTzUeZuHcNhtcwhyAZbxZVTe9qZEpysbZPCiv7Hvk2t",
  "key29": "3jtAu5VfufH5CX7fF2Aohgewg5Ap7BNS1KaEYcPrLSRACdLFJLVgXe27nB6oV9Np2XqJR9hLJd8XWznVi7qNyKzF",
  "key30": "25HsweAm9ipxvmno8kRCTqPT1ntaJqsiedAUR4NoaZuexqVFMSMiaeh7c5vfSobAR8kzFkJCiGmmU2kcPFtiyYY6",
  "key31": "49C4F2f48qXibvLy8yxgcR21d6wNsDpAAQntAprNuN5r2QCHJ3oSVqpKdk3N5mHxEzvPWpL8dsoRea6ZERwUzEaq",
  "key32": "41MJFspL9cougcLrLi9esy3yDm9GDobtGwWCjxRUvdksrkJRB6AMMvPMNtb1CDZKfokRsr6sqQ7Zrz3kADWB6WKS"
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
