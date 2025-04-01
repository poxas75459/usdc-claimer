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
    "3AHCP48jdG5UU14EnQ3ZhQTWaAjXkZUoJMBo9PGMfTm5fGdwEbYtDDaKiGxer8P5wod6NxVuY9A1re6fK5QM29qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ee2pqRLGFQqXhovKDCJ5Mv1uLnCfjbz7tzrkTaZHBV1iGhcZSAte6VAzCbGHULWtxJu5PpJ2otXT14kU8UTwEtT",
  "key1": "qYk2kk7acgvUcMgyTzpqLcjv75NQ3Tw5PS5EmDa5mDEB3pDvGpj38rX6gJ6EeMEsqf9gmZSVuSid8V3XZ2JHKDG",
  "key2": "5F9FurEmYnGw722wxDgSD5rPDMUzZbiXwmKLjASJxgfY44eoiwq4s8XtD2T2ZKuVjdV1VB8FQ7acsSgH4ek1wSH2",
  "key3": "H4QYnbRp9qeFNYKHa25SdiyJXzkFcpHwLeEr6LxbW6c12BmgRWgxv14YS6FhKhc98vvDvZi2DWPpA3qLAwpPU9c",
  "key4": "vVcheL8iqRZTXSyoXTL7DuUhT4DWoMuYCARn12nbZ9L948BJkjJgJBjwGC4wmPhnBXSMTVSJgb5RSn1FBByprgq",
  "key5": "BbJ1E53CZEH8TH4G53PNZXHHaLBsQUwjxHTwfZQ5zQNHgcTYXcfUsPcVqz68e2LoNkrq3v7DNoy2U8QAzs3mY5w",
  "key6": "3TGXaM2ctSVPdWPACtvqHj2nCTQp5rvYaguSR84eHcKcgxE4fQy6VkHdsAmZRuVqoX4wHmop7TuB8xPn6BHnTMfq",
  "key7": "3tv51uMEFdsw89aDGReJctpZFRrBK2gwbJjiJPet4pZWQMD24pEFn85QEuwzZ9YxN2D8JaQ8KLWmKnwerGsfzEvo",
  "key8": "egyhUi7LvLEX2NLL1LU4uWVbuVeinAWaEz5myC6XaGGVYF5idJ3GANUsRRjrkJZFXHT3wULQ5zAYqq3HP65aLZs",
  "key9": "63nmTZYJ6uryZFxTmR4DNfyJvYocyigbXSEpfEksRLdEF8dGnzGLsfifQ1wZcUg51XJp3nFjLE7KThdzm33u3Umf",
  "key10": "62gxvoWHHEUyS6uijC5Pjy314tG1zEQSebH19ksE2jCXDK3jKzTe8nd9scRZvnoQ3puA7EHyjYnTujZzqnM71Jxp",
  "key11": "4sAooP5j584ncBhAedNMzbKHZPgrnXp8nuBBJzDHZwVZaEHon85aD4PNXqA4mMQy7ehtez5ztY9hXZkTpgxBXg1t",
  "key12": "2VggAWHqT3aabpPZfzqCZZv8BtPysuk2dST7c8EvgMq7uHujgpYCKcm22N79GgUNhX5kxAHP86VgVdUkpvaMhkDc",
  "key13": "21MupQNECo6ZZFf35gaCnnKJVx5AaiK8V2Hg14hLtqMZRAbJVR3sWbsScyQGxzGqhogkwy2wgG1HCti3HmT5BnzF",
  "key14": "4cSoKpTwq7qPvCSfvYfeQtWj5cQf15RAoSdVDwQv3g49fhVa4Bt1CST8SVhfrNhte1eRUTHiHcexd7uuhYijm6AQ",
  "key15": "5MaMHL5NkreY43XFFBnXGiKHbcffHJu8nXMrJ7Ph3FXNytQC9FL5fwHf9dsvB3m6JVuPKDZY2P19Ksie5s883fyY",
  "key16": "54D9NrTzUwV6JxmiH9XdVCy9brPZYm5gZtEQLFHtJvZwhJupn6369jTWjQBAjsj7J7KogZ9XA3iUw1NxZ7UXM77r",
  "key17": "EkLAytyJW59dUQFqViEo5EAX8s2DkAjiiDDA9ZLNukf4hXbc5CSoqUyK4k957oi5tr6muneptkvMoDWtGfWCi5h",
  "key18": "56Td1aLLq1opAmSSuGuw4nw8hQe77zZQaWx8FXLV9ZUob3CT1ZnniBtW7wThuQcHZXuQgKDK2TMw1dPA7XK99RAz",
  "key19": "ZvJKJLyB6FBDefP1SSX5X7Z7xG7ezgvavpu4zEidgF2yxdndj7FkMgQc6xTN7jifDE5mqp8hiWRByr35fpXH7P3",
  "key20": "2U2SF7WEFetkCBXQGgErXzfeVHU7e5effpygRDYCxi112dgfZXdgF1pPbPyr2C3SFQDLpFq1xmnfDKqdmdueVEB5",
  "key21": "4i3Vf8tx59RVSEi1DwfeYyMZr3qM1MCkpfoXJc2dkeUnU8Rss6u7soBFfP5o6jY62jkK921ktjCrdXiimxPYdfNA",
  "key22": "2CY8MimXdLzXYNkwqSswRwNU1WDjVFJ6ydgWXcC5ohg6Yznm4dm8vt5U4uG51G8rtFSaMVL5acUK31SFLdYSSjo9",
  "key23": "EGGo6vGbTuqcuNn3BKygmE4wtH5hKcSqrfYKPLuitHkiKms1TMxM3sRuRgyc7dKR9dtzRtQJqUsnR8XVR43dMar",
  "key24": "4StV6JoMyKpSJumXrVu2FNyim2KA5uaNioT5tqZdzyTUkxcREnyhsSwafpFnTZnMUPojgrKveEGTeTgM5iL6KoCT",
  "key25": "XKS6yZZ6RfzkMZ3FU1mZ6aD8n2AGYWNGwsvAeDEcsumub7fq7Rz1GACCRK2xYTzsZHk77p1BBiLzX3x8TzPHQuU",
  "key26": "5DeiwjwagW7Wua9Qa3CtRsDyjMvysi2KMEV8CP7SapxV67JCA97fF64D7XddCDsZYkzk98NchhjRDEDzdBS5vWxQ",
  "key27": "3LeLQrZ2KKQyDJW6JU81gRjiuAeza1Dq8H4nvcGGDErkHrcvrfh79vBXpmGBfrHjZEC6RZjfjy54H7LhV3s3HVCb",
  "key28": "2ZhbW8etbiRwJhuxioD8CmaEdE5EBtnGeTULH6aV3pBqDaNzgbiFnRXVK2c9FU86UqD11QygbJx5vSQNAdm36T8y",
  "key29": "64GCphhs6NvckrsYNks5sZ3VKDBxCMjXXEcByJgpL28XxYE4NPaUBRjRDwz7hvkperQMdc2SmHUFEzZsx9Y315tB",
  "key30": "2Zj5KSpxCP7nbBpFSRdXDKfJwTTxq1hbQjRVeWgC5C1u7o7cVEHFkegr5pomrzfMYh8R4U6QHAJxE5SKBJKWCaVv",
  "key31": "5HzNJJSTukN9sMWZDh9n2AqAoLar2o2WhDR1qGjvAPpyF4x1xCpq6q92aagAEgC6L3HVrvq8yZd6pUxixoPut7b8",
  "key32": "4pDunacpaMuuouS5rSR2AXgSpudcUusDbdwKnUSKmaaEBdarpakZVuEA3DjKAZ5iRZbbzCPiMUYHVKoqpT6Gco6",
  "key33": "4URkXxYjZhEi5jtXXDWCP89wvsqScGVkHvSWijgnCMTYnmYo4RZTfdA4oVJZH16sntSdhuHEe8pFURDECmMhh4iu",
  "key34": "8f41iAMsrS5g1GdL8fSE89ykcMtnDiN82yj5eyrSXGTpd6ghcHiDfEmqc17SDTETkrEPrtDRtx7w4ubfJTtC2nH",
  "key35": "28mk2tbDad5cs2eDrG6tzdCEGugFriC8jJQjJakaq2U7Stqgrc9ZKX6WYTtKVxphX5W8mbR3zRrLxgtVbAsX2KuJ",
  "key36": "48sKPhikJFDHM1WBDCCpNwyE5pvTbaBVjnwNigruMYkFafhdvmZzL4BuZxKXq6TNh82DiXGS9rUsbtRZdcFYxjBV",
  "key37": "2iN1tFgbe5sTot4jzWwvb4r6iXkcPr5FPMdGXwLp32PrKsNiaPVbtBFdbhXPzLHwyce2cc1QdDUKAFJntrvZ2mR7",
  "key38": "2DrpSMixYcK4434Dr9fMecqs153ZMYLxdkcANwTbgdZk1zbrNAd3AFrgdsBXFGQRAoqtozYME86KZ7pv7A3XmsGT",
  "key39": "5GbnqxMWkCdmqRaHpBdLQM6fcquzzfbJEvyaGZYbeHUxbgLxH6TfcRqRoYvFXYPfK1RZGcXESLEascmcqda9W2Vj",
  "key40": "4ShTTYmiBwmzsP1PqSxvtVqbyS8gwFTrtsoz3vYfe9oVrFoddNuMm3jou68HLdbQP1AwitXeteZxKTW8pAFfyNgd",
  "key41": "2FSX71yg3CRqFdfVuKm8YTWZLvBu8KbXX8JMh1EzBLnqkGpH2xRdcDwCWcGfSXoeXEUx71W1fSkPnfMTsngbz2Hv"
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
