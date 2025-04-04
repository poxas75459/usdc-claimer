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
    "4Ck6TJsPetMPg23eUCzKCDjFccLe4dXCZoM3RaWxyMVFPJUec5hvQdSm1CQvpE3kxbGVkaxLMZfRDhswQMBVa8jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNcYDRDg3iZhXjmBgNr6NJ8uAWF8xkD9cspSod6SiXwaq2C6tgYJeQL7zegZjpJZY4jYcJZJLaJDR6ojvuPrMdy",
  "key1": "4NBwmdDvZbFYzGtMfG9ad4cazVsAZJ7p317hU6tpfUjTe3DnWAUvVrPDbG8xo4wXSNnKxTzdYAP6GYXa6s4tNHtW",
  "key2": "2dz7RVuB7qfsjXPEGS17LdxcWJcjmPjqgD7PH6Ltdxo5K12RtFv86hxB8hxxMNRZeewmQqfzjv3cJmQP6W9BhzSW",
  "key3": "2y44ev8mXD3Jgwmwbi1Dzb8k3vbF3YfJ4NM7Y3DJ3Xig7fEHhRhoKsUJFoRA4REtT2vcQ58svLfvES7AosBTJdJP",
  "key4": "o8qM5QoSMKchYeAes4KxHLyzbipgiJqPhnazjJA7PPD1xG7FcZ4Zo3yWLDjyTp27sKeo27jkfhGJKb35fTzg17F",
  "key5": "3k1pPJLazC9EU9rABkD3uxK2U2zCvtggtVV7ksbv7t4Lt54T2qWWtapqQYnK9aV3ixJygWRQS6PuJzoudwooJsS1",
  "key6": "22vzfA8chEyszcbEwsdRh4jU45U2SFv3kg7dPoVQH7yTEomep2Zhc15nN92SVkQFZM2AcTigvQhGixAn7hojJgBL",
  "key7": "5gT8Vh78sXrzRzdZx5ktFGkG6qdejHC4fHoMKwcjGG9mKHYEn9crHmEbbBLoWvTFX41TtUpSU8KpNVtGTHozBhMz",
  "key8": "7noJzL9Zbqij7ddTRJ91yG7kKHz8xkAx7tdCCaaMKGFNy3mG2yi1Kjfb3NdT9mwFPCAD3iZZ1MVjvjh5mWz8Bgd",
  "key9": "4FfTBVreg5u77w28BFjJR2NtTxDgQQoMEBiKNsgho6pZbZMTC3CAJXZ5PThcTwEhHvNZEQ34hmyBJBYpJKYrnPUw",
  "key10": "4RKHt8HqFxCYjYu3Zr15bWJx4RF3z2JMz6BjKnczhwtmFFGqKXUXa2pMnfzEafy7qrGoGzCyYPRpZ7TRLzmqwkgf",
  "key11": "3JpaR8Bye5UYMJEDpPSzf8DKAtb2HtUBNxkXmSTzeCoK4y115ivpEiPFr6FC1uqaUE9yyiHjnWfAP8NKEmAXRXP3",
  "key12": "24XqJmFV3hhY7WFLKTPsjVJV8MzYtedLew4Hgm87KQK5RprS5dCxPwfU8amonWKfZm3ScVvAbPzGp4Z14znCjJWJ",
  "key13": "5koCptg2K5i75qF1KENsAnaZNZtojPXkrzeADJUyfBodCThz5U89AtqQKnkbm7f1S3PWQtcmK3aahxEZrHDVUurc",
  "key14": "5DxxYS5Z3oeMcyKztT55SUso3EfojF3L5XCthqoDm5GKarnMoB2w4pBe6jXgip3L92YVDjSEmh7WgZxuyNDL1RfC",
  "key15": "4aBvHXnX2g6ojNZPu7uCyyCyJA7bb5dCaEqChVuJaJykFPDjYxTEzMdS4SPawsVCyaqyJE2SSEVXrsZ4UKNFci3y",
  "key16": "TGqMzdVYQqeUASHYe8zMYd6t1aQi4z1JFx9jnE4LwjjVYkhadXxAGcuvFiFbbGswrSKX9LPkxaehHnHx4ngbLmC",
  "key17": "4CjfNhKnex1ct94Dof9uZknqwrhjBu8E9dzLyzjPjvmJAhaMKUPCnDuJgA496AH9b3rDBmicRb99DkXu5NdMnP1e",
  "key18": "wq45dUH9ujokKyUMGtzBgBqufKZGnWvMtZY3hpfo5VAPv8sqpwVi6jCEiYZiRA2spseDTrvYok4CYkQmd3JBjrv",
  "key19": "2HuZDtqUV3AJjjQarNBVNgg1ovWMTNNNh45G3voq8uSYWJJFxjrHP67R9F3o88EzHDPqgdNb4Sr6iZKmC9LLV24E",
  "key20": "2urCzzq38tCrXaj18HiTssnhZNFCVp8T8Mn4HN55EoUt2KNYp7s6mF6LctZ459kfztz5BzdKLjotYSZeYWUxoEbT",
  "key21": "2KrdCJdbcHvYiv512r7AR2ZjoUKEpd7yHvWEeQbzZaiDyoyjPiDsSrDmUC9ApubQGUaD3rRJkusLQfseuN7E51iN",
  "key22": "2nVZm3YZQ3hCF7ArrzEUd6qCYRzKJV1pXHDgnHRUihNdEiWZ5N78kdfMbpNAts5H5GEFrR3SbA9BnK1Qkmhn8Sgg",
  "key23": "4Wkb83TuqYQBd9thNRzSKQL2oDG765BYaZfxhK5gwn9Srhj5kcRQCynevMYmX1zeZWCWzPq4892Tm2Urx6QJ2SW",
  "key24": "4AdiU6791jwxBRiNj4TYJpmmJR64KULowzHFT1qRSAbVx453bjW34kFAEWDncxK37jvJhxNQppuisSm8pLtysqyF",
  "key25": "2heHYBFNX7Dtj396qAorTiMevzZzpVRS1Na7D8k6GgPfr78wnUvzDc7zX3UuojSYXNXAjwdExeYU7pBXzdWkdZTb",
  "key26": "aqXmWM6q2gYMrWLAdC9JJk33Ubjp3fp27ErnKehthAvTM78bmCyFKMoR6g9kkxkXM69YLVmibwW1XcAJ1Cp1HsL",
  "key27": "35rsLW6HnMy2viXcE54M3mBue8gVt9GDhSVaoo9hciG9mQZ8z75STdmKDjFjqSNPzS1iUpt4RsATPgGWYv5mw7Le",
  "key28": "KReJdgzdU7hdWB12kBBBoe1wwXuG8gDsgGJLQztXx5HWoquDKf64Biik2b84bCcrxy1CzJ7UwrZys85aUZQF57Y",
  "key29": "3V4qhTp9nKUGYsQfMu61F6Nnky2C7rghaBEkySPcNJJPq7KBUVouritVnadxUFHKbk2PnDqauTisGMTtK8rvHxKR",
  "key30": "2mXS8mheYZPd3EbLJ54Rq6m3nUYFPqoiLysKJKc75tYWTzmBP3ZF9cHkS4uXJa8ETCzn3zsi1iG8AgdmJsL5ca49",
  "key31": "4orRNPDx4V9QWw4ATu6RGPt5NxEhddqa5X6MYZLaxoNCG618Cy4LypPJxGbKMR37QUPJdK8c1PTPVmQokwLuif2z",
  "key32": "2Fb3zoAjv9eqsqDyrMq4nWUpQi3dWf9FY6UAogmM1wauUxxBpzFttPRgUyVUzWgCG5it584yxbUbttRYrVbjTWWx",
  "key33": "4kyZVw6ak3nKuAyV9oHGaGMRjhGNd5nMLGrn27EfHX4K4pAyCaQyrEy17PTfwFNTUSui3xv2w8fT1KyVtMjvVRC",
  "key34": "5nw8v3Jr6c3NPZTGGMAFKzaFgf7E3fYu4XJzqsVA5nagPMdwv7415wkwRdroWLSAc43oVg2kejNcaWpw2ZNBqu77",
  "key35": "4CBdSE6A7na6kAsqcWqLnBC7yNV1VKLnCjYRiuNixeNNdCqJFWEM46AV5sxRn2F8kTMvMG8896fPaLhTxZ2X7p1e"
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
