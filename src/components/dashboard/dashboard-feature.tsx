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
    "4kQFaDLAsJGwCP1n1ed9Ya4oiA8jYmbhfqXsvZwsbU7bre1yKjVDYhw6ofAakGft681WQUX5HWGZbEo7wEWgHyFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dCAYx74dYtexEmCBCaDpKV1uYqUrafF15t12yekmGKvV8Vivgr5ikdv9JaqknxxYfwXQfMgJZKeuaNL4JFSYYvF",
  "key1": "4yGy1CiVv5jrPmLwtvaCqZfcmWFdrVM5nFqbhJcMWAsLyy68aQcHMGn7m5CbhPMEi4tmc5kaG81vG6eimEJ9fk7t",
  "key2": "61cWshj2uMAgUmFujes86ZGMQmuw9AAY3xrkpN22MtmN8ydbbmMVcL2cW3ZN3KNMVqM9YHipgYSbP3BWdNnBca9R",
  "key3": "LpkiQfLBWGxVdLovWYH6RGpaPSMxFL1phTA1LCUMAPcePWBhz4v341qLaNe4iJDadRq3UcXpkSnKueVQMYMyQ6k",
  "key4": "5nzEhTp22RSMqeZHzpvg6pfvGhiijFHBL5g4GQTSXW7BdeAWRTesr1eVN7YQJGfzDwEoBp6TUaotkgsTMFH3RKw5",
  "key5": "LCUu2Q7RhdBUyc264zAuqfbrLoJ8mRHskRMFcrmaAFXiSUrY98gGDkr2SDthXbikcvd2PZj5xKycKuH9ULsRV5P",
  "key6": "5QLxHYru5bbDHKRE3fST6ujdSbkC7asjyVFV2Sv291EUruX84LCTaaXsFZABKAzvS6MgjqH8q7ZgrDMRNd4tXCUS",
  "key7": "3YGcuUNN2KU5bjjB9GfpWmbrF4ts8mviAiv6EBM1qSQw8f6TvaSC37HApCAiGPoQWR7VxTH8ecbdV98vxedqnM9q",
  "key8": "mF6ot5hvUQbpZFce1L3j2jhvvHGf2UTs9PHHkwxad5MKFcsmY1nhLouNqwPqK9ZujDuXkRwydfJexFwJkKjbJER",
  "key9": "2qJn22b46Qws46RNpPtkRqGd6QpDYLC33jPD9258iQhqjGg481JQ459HTiQkC8bqiTaroQaMbgSLBffBo1cSB4Ro",
  "key10": "H9cRwmTWbDwQ6uhBbNCvgLYuHymKTUepv1QxipmLQHXgKNeCtZLjKGVD877ZQD7XCyzweVqRDuxBogtyH6EApD9",
  "key11": "63FT4c5o7iRatsKcsKnaaxU6r85z9Q9bueaKMhZAyj8cMa6Voh5g1tQUrD2UR3f3emb2JH9qbmdS6zUBdUQCTLve",
  "key12": "2zuTAhQeUFYH2hQ6wqHQNdTD5A2xu2JM8iXQJNNm9BvfRQVKrZh5qUP5KA8cCX4FM1FuMDSSVbpcvXeWDtDpj8mS",
  "key13": "4mAXyjBU8JmNDMPLDhmAnmWZDr8d6355WxRC7Q78HKHUbxbadCQckBTcJ7UQEcu6TzGWtpyW7HXnowf6dQKrFiMF",
  "key14": "42eFkuJWvqHzwVXLgJYrdgRutSuzmBgWt1j72XsjoohUZgbMArxKBMa9BErQKHRoFEgneqsmXK657fWB9aUG3poR",
  "key15": "DZcjabsc3hwNMj3kcuUTE4MhFvmt1b5gcx54mEdbDdteup2djHffJ45YJSQ6oJ4QMBKmh8Mx4yv7YjL1GZrGzKv",
  "key16": "4KhYTfNT79yC3LAcR1MTcL6vrE5F3MPfYbrGVSE4Gq6STSE8QoXsPtpWCA3tKDP2R2VZjCtUkm7d9SHnveuWzhpQ",
  "key17": "53TgmQUwiTxJEVHSzdeTpH65PEaUP5fS4KCsUxgoUNmCsi2ftuXPRptFVHNpK4YDo6KVdhZZG4GXKE9fprZLDFPe",
  "key18": "2SjicfhfZjyUDwp3wvdbuyNyjaU5YjLmbZtsQMCxsDZHH4PBmh9JqZ4sWKDnFXAcypSuJoh53KKtaYfpEnM94WpY",
  "key19": "47jXsqdo4bnTzWStVArPVMxQoG2DaF6EKYDGeTy9a572z4qzWvyuRgibZzEgzJNw3WJk3Y2Gmpz8ZLB8QxrdcLge",
  "key20": "2gHqdHUu9cYKtbgX7R6UDfnXoxHmKmHCaeGYp3kJym4wN98J5w87FQwPKCeD1PRRSjDNhFzcubTBXtnVvea6XkPv",
  "key21": "vy1pzNcV1QYDmhxcYWhjg8nya52S1s44RuoAjCEez74UjmL6xWpf9ceiBq3XERUSjw2mUoVSURHXANNKqSTc3Xg",
  "key22": "2FHP6wjVe74QorHrriJhgGyJvxauSCdSbeigB6DRDyhC2uD6aEtqbrJYEp7nUDdScKZ2FbM2Tg13JmWnVZC8cCM",
  "key23": "4fPcmzacC3y8zVavkidf5KEmhvE1unq746fTsbnFC7Zyh5SFzY9txNfWrCbdFH6Rjw5QN45K82eaNB6opZk696K8",
  "key24": "2oX3cSnuPVSbMier39zjhZ4pcB6Dk4S5ihijRbefPAzbYB2BTuLhg2SXaSemW4c2ydNNkTRTL3VJRMchjvpbKFeM",
  "key25": "xXFwJytv58PTAFqB55XbuZ29o9zv32kkzte2Tv4YJgr1UorURQGQV4sVBu3LvuWnTt7UCreba4VomdQBAUHYmY2",
  "key26": "pMYaNGYCeR9LdDKaoPwZ2mMpGRjEQKonjtXUoPi3hKVodQsCUdKc3tjsi1kEApdyhU7oyu86Uy1PMsEPzmiF5ii",
  "key27": "4rybfJKp1c29PmivYEGRbKFabMWpt8TPuGBjMxNx1ZnuFaMssT5hbnHtiDSNx8LAkcPeQ58n9DC7W9BZNRPjmxRg",
  "key28": "2ML4DN1vtJDjo7TgEu5hEUhyYGEXzkFbnGfpcbDtEaCz51whHAjFfk1dK7mgxyfovzdZTjX3qJp1RZEwDnAvtCMK",
  "key29": "Kv3N6wvcktLckk5ii6gXyYs2zpJpMQfW4tbkXKVgePo2xKPsmcupey8fwhMR9vo6JxAShCRNJRifxMC5bYoV37a",
  "key30": "4ok513ZMNC3pubX5huLMzetiPGyvFg5ifTUGzsjxC4JaJyQji9iQ5TN55zFQCjQprYjbwmTGTqFM1KcWhmHrc8am",
  "key31": "55zr3uSBNGMKsBnNB3as2i8UUNNwrrPQ5sbzFWtUtruY3dtom9hiMHraznQbGiwpQ1FDUQCLXJWeVq6Aitw7bLDE",
  "key32": "5xdu4vxUQPJGS8v6PWfGLH8Bj3t3S1UhSc1gZaaE1ka9Fum4axLsdAb6PDkSmuVp9kkPcFrwcsrSrokw5Rpy2o5c",
  "key33": "2ckrZN8j7re2ZmrRL4xzBXWtpF8JnUuNBSjVr4g8xFSZM3jXEpwNarfb4dnv3hausHZxSybX2P5sdrrZXHwpZ5aL",
  "key34": "3tLks4EhqiDAtaV7ZbJDA1DvNVm9HzcUxe57pYmZGSdBBtzMwuVgSFzUoQFbzANitgPTUJcXhvjW9YSR6KSBK9ff",
  "key35": "2J5QtTUzn2mTPX8pGUPnCqq2UpfDRvkrvHGhooqsnQsR7Y57zKShG7KcWV3sv87GLBn1h74DAU89tk5zu1TrUAfW",
  "key36": "gpz6X2KrVA3qQnkxed8eQ3oQ5iDTWdi3GJxcTANnWxy71Aozq9J4StJzHai3yicZ2dKm3YNaUtYWjZET8tQfGV9",
  "key37": "2vzPC4TthXpLs9L4PNY64nXSawq6vwFsQbVTzXvUDinthtg76C4r3biyS7Sh9xDETXftqeCb9Q6FndfFYdGzj4Uj",
  "key38": "3Atz6BWGf1Uq7yC7CCqHDUbmLYoRy6vdsgkv1a8d4ckM2ABUV6mkoDiJAeRLqb6yiq2J6TjLmE4obc78fEqv8z3W",
  "key39": "5aHVH1syUgiNjB8ZtaxZiLgDCWHbC2P4kod3o7VGtsHgphx1Ccjzyr32Ga1ojaPgG7CbruUCDZ4AFX9vdWdPBDgg",
  "key40": "3fEzcmDXtUnEEYZ8fz5KYWP5jAcV4m645qcmbEwh29xQsham6wQnYu4Qtvk6b5cgvmpbqrEkDSLx57o7k1VMvkMq"
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
