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
    "4Grwu1eQfbKQLrFPHi5y6eFN3te7BjZRpmyEQrvn9cLQNRBysRouk48F4hRdx3nKKCAwgaPLnQxkzyWm47vFy7g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYwdpxAet2gureca6UsNrXFe2gg6GLjsVnxzzxWgvmwpQwBcynCF9vLZw6KdSxoj2NvvPH6DSagr91pYbuGFvS2",
  "key1": "3q2KMSpDWBfD7sACKiMDMasqVDAyDphXtE1zgemkBmuLcwdM6N4PreCVp3eth2MhphREcdsqpZxGHdYVqvHHDyZp",
  "key2": "12CQ3pS23piEkVW6sNBSmgywQg9opZLajmM41f2B1r26FGUyeTMEjmVhpntYWAomAntPU5TFtcbYeb31JcPdG7P",
  "key3": "2xMkaaRxTPT6DLKYHV5topeRESqiPRLA7F9xwdSrxgqiDvwMcWeW4CQsUUkaiZc25tE6tyWJq8cESYcYSqJEVWPi",
  "key4": "2jdQ1FAs4XfXjX8qm63AWNSKBUfL3UesLogpU3HorQwd3hmEut9WXJgs7epaznqefUUmN4cc3zw6rA273BV4GdWp",
  "key5": "5hx7Ymd6ctKkPFGShqmS1yjeC5ssd39oJKRkeEUFUwkjfh8Hh1YkCVzfsGzKhv9taW6nYugze2uJ6h3WxtGqof4H",
  "key6": "2zzFY93pQ8pVFdPQ5WeuLubKQaXMThf177c1jszP1fmMK61sg4Z9XBHXFkQrs2TBZbueqvsrkN6NW9hijJ2De5YF",
  "key7": "YzEXDpeVH1j5FEf88wD7c5VoNo6cDpqTJXJoAM1xxWX43PrD3kbHYYgoXp8prpPk5AyjoSqrgt3a5we3t4RJyNz",
  "key8": "3Rxfju39x6YNgb5YcQJGQhNdFTwyNcfHWH9YXd2UkRKgYBtqWw92CjZprMdpnZ9EyFd1aLUPuptHonoVYmBFAoLb",
  "key9": "2i3TmchsH36n3JY9NwJgU9JxmXMaD157BWkNSuHX5QGk4o5QXorFFmU8xSowPDPVRFiKVNFDLM7jV15yE4AjbaEt",
  "key10": "ZZbzEAvLJMruKPgU4P1hakDyDq81Jkj7uksPX5TQSJsAhVQGCvHxY9B3QFnSZBEv63z97yHh46LMaFWHu7hMRLV",
  "key11": "56zihVMeueFtrsvJyfNBkT8D7rgQjHCpcQbPfYTGcBd4uStT53mVJ1ntLq5UqrSnnpJc8Ue3hf6ibFN4BGXZu12A",
  "key12": "3QCXmMf4zvrS6nTCqCL1tsvKoaMgCwhsA1NXKKrZQmnZNBF6BUHQQ4s9SvfQqHRkyDrz1Qgpaf8UPcL9ek1EWH7r",
  "key13": "5ooWDsiriapMFVKZ5GgdGwqu96JgibHqD9Zqyz8wxg7o84RhQoD48JBcxfrwoyw6zAfr5df3im9YFK74tijEyGvJ",
  "key14": "3FHxo9d79jzZHqxncfft5Emsm9id5vdbjh53gQTokQCK75MBfeL8wuSD1R3WBnCT8aRhSMXFuBjjR6TpLCJWzWcr",
  "key15": "2pDdW6zNLcg5UbH7yRwjn7igoj9Lvjr5GpHYAHcUuFLyUeKSgvUFQkFQhSUjqzwaFzNvQQcWcuPGPq7ZRAMRpS4D",
  "key16": "3Uzumho7LjcBovjP74vewS7yRWL6KffoKKwNFgS8AtTh7UXK8LM3BM3pnAxk7kstdQ2tuh8kbXiRYQyYWQyUTcwD",
  "key17": "3nDTRk12rH9WZQw6WzLJ2MUNyqicvntssod9ezCm6d7kcEdm7N2aVb8zrJTQowMEvPfKCdJxaC71FaPhgMPY9wgX",
  "key18": "y3sxfNtuJxb3C45q3MDfP4vgT4LHt79s4hmgweZPs9xHM2So7LZCY4nN7tyyWXFsF2wNqGe8mWEhPpUju2yUGTC",
  "key19": "34FLKLxkgyoESkMzdbaKf9uT83K2ayQfDy4UwpF78TSFzsicxwGiw2hP57jokWpVSzPJKBXfBwDdC4PpAfpktfej",
  "key20": "3L2pRRrDRr89nYitQLfDicDUNfZFpgWyVwfuL6nyC8m5dUd1RoGNUzxKQ2DZiKUkduoAL89t9FbR22CySj6kB4VQ",
  "key21": "75jVdjszw8cTpnzBopqdAmdHqXxTirN2keGLUjRYBt6jWKeA7KaTBJpbTLJGazD1EoeZYUSoRGSE2aBNoKzBMCa",
  "key22": "2nrM4VqBAXTQA3LJuwi7j3XNzJrrhTQsJ9BcoDdF3dMag73f3xDk6Au97V8Fv694vvwAdeC5beKt8VEj5DiNSt67",
  "key23": "65fBeEBJuXBeXtP9uSfRMCzCLhp2PTQovR2dmnbr7FYEBPLCM5fj2SNqzXue71RAF2oiaaTRxJCnoQm66RUdLnwA",
  "key24": "3UwCosJqKEPuxn8i6KJhreD5azbZ4aypDWfa5BZwvJphKqmeCUMPooWCV9jMkVX6SLKzyRHYfWk1WXJZzz15w8yc",
  "key25": "RFCysXmMemKgJcjRehWVcxKYfoqjJZQPuf8417akvNsBFDNUqvY2Xifd9mpJewv8fKC8Denu4F4vBmkgGFx9EGp",
  "key26": "Q1PZVftYfWeH1dmhMgmsh18qX179uyqBEXcWzPv43mhTTxkM6eZYXtgk6WdTK6F9HE47pr52qCucR2q2MbA5dr2",
  "key27": "4MakB22tdkpmAJ63eotmNVWfrYYdrAKf1xonCAeaeBLCtD661cWTpaGppuMh7i5Jn3VtfpXE2hAi8LNekQUgmC54",
  "key28": "3Q4jguTMnwMqgpYWwg7ZNhrqKFV5t7rzkhKCPG3SHqQ83E8TEnBHFVjn9jfqm1v42ybEEJHSjtjzQkTRu1dePefV",
  "key29": "4spTru49imh55fBDJoEbtNWYZNnHm3meRetUvaEasRrCFj5Vb65utqiPhSe4pfbhAvZVuC66Xgw7zea8Q6pX82L9",
  "key30": "tDwFkgZmsoth7i5UvhYUWUJSyBqMmoE3Jkf2SoQaYMhfHe9oUHkAb6Wg9Wun34xoP5qEUTQ9UZTgTQ7pwTMHDj8",
  "key31": "5udXiW4J4EuYNQ1JP5ycnTmsv6ETCdk9s9KVwDsUBFQaY6vrZNsZUwRwWsWyqAjdhtipX2pN8nQfgQ9kL8X7tQWF",
  "key32": "5VpZCcuwB4nks9Z2W92Tw9JsNeoJa2R58qain1x92ZondBNv9u71cEPAzQNVZCbNtTYpueNXgjotdTnuFYwESyd2",
  "key33": "2dad9aCRdN34QGTnXB8FTo1NBdxMp525ffZxaECb8tvqi8dbYmSbGVaCVPY3DboS7vn8Am1T5WqGrAr5vog8NWC8",
  "key34": "4jeKrJofeHscueuX3DRsFRHitGewxErL9jLCkzcc2dihgJN1gdHyiNU1Uuq1rv4sFQN6xPJWCc4WaGxbQi4WojiX"
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
