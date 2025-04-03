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
    "2HE5F2RLm6g3dA3fdiz4qjg9vMMaByS4sd8RqojJ2jZX9g4K74F6DmQfQvqHdtik3jp4CJ44bBRdHxm7ztAHrVMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVfbvgBz4q7Mq8vuUjvmU4ZpkCpu5rGhEmJb3BDurgV3XyKyKss9WQDfdxkBu87vF1vA9WiaXAyRMUTZioSeDqv",
  "key1": "4B46udMfqqL5akL9SyDi2ZCiceurn1ntYGEyZmeHhtMbXLNLyvcgkf6stJYNYKZj2B5NG2utFMJGKBeH64ABjLrv",
  "key2": "49J7YA2Ba1FXtE6eUex15KFqj4TmRLcRLmVgeSGsmEf4PBCcdQQHcp8FHgjZBpw9gFQCoPQVALK6wdCvdEGp1upp",
  "key3": "bQLrap3vtWUY8gTzfd11m3Q8KrvnAfpJae3ncXALPxsJRiJhneuYnGABPTP9u6iFheAgdQ73qCuHnHssX8Fg3DQ",
  "key4": "2VshFy2xRb5PQ2xWhkJCjGEBdgVHS5TSqRu8mjYJUMQCYhZG9x1JLvHTBukm43K7L4b8e5Cvuum4S2FnCsf1umQA",
  "key5": "2SqM6R7oteQNao9QEFTW8yALmF26QtWovzGGmFty5kb6gRGcK6Esj5WxMS4F142KE8DM1ns4MjKnUusePkdJ3jqN",
  "key6": "5WAMtDUdwECcgjQ6gE6UZT1RMccZaZpkzNhutWdieRzqa3XG6VqwZexAuuWXXvbGmBUzQ1hAEWTDaE8SW18kocuv",
  "key7": "4rxpiYm7E9f37tya6XhFge7uiW7DuEXYankaYDos8hV3U8p4rz8cgAqm79HAqFzPrWBs8FM8dhkTnanMeq7vQ4gC",
  "key8": "KPeDVZ2yDy4teVTm9MGDomYWsN1TBsz2URdJ611YzJwoXWdAmcfLix9zZbU8LqnVUHdbkqV93hfNaCsWVK5HPoo",
  "key9": "5chVKnWk5WpHq3NurAdo3GbFG3WbGUotc16nYSxaSjcrdqtJ6v8gkbDSqakjrmiQRYtUw8z4kXtSio4GC7fU9dQY",
  "key10": "4JwsZYQM4WXpgpmEvNvuA1XYdFHQYx3rWiBqRFtC8bjjzzCKXTzHMzRb1hkYATpvMpnRwEU5MDsnLy4psK96hJf8",
  "key11": "52T1uayogmTmTRXPQxMK6FDtxL1xpNDFsjpEWhxGQktxPfaoTTdZAKk7kDGuWoW9tafkJ7waJs1vQbpDBFHLeDUH",
  "key12": "sHBrVVoST68PCkmKnbc7c9sT8QQj3pUHzMYxnJBjQLGhE6cYEEQUnzEwjS5EXhEzrZnrax7fBzzn2gWhkhS9XPK",
  "key13": "3sd3gvvGpJgziyShcKpMXZqVGuZGx1XcdmrTrEAZx1rgG6ZbzBMtsEGfkrguHwNqnZv2dSmpagLVT26Ft5mFYAx7",
  "key14": "3A1UQi7E9Um8GxMwVVCGaLbRdAhH8aPyUaEWEmwtCW9if9KtkhFKhWXWjdvwkpeAvco1rjxpsUGefE7sH6o94MMF",
  "key15": "eLtHTz87crpLUJF4MYEaYpsUspebuKrsqHGjMn2mhW9939fBhw45wt6HdAVdwiBgXFQADYtALBZCz3bfCUDjriT",
  "key16": "5VWDQ9xFaFNAhTKqmP746qcffMyeLQ1QpbaMZ1zkzbgnkj1mZnWAW12W2hFQh5NvYaEHxJob9wirvrRNg1Hom32e",
  "key17": "3pgKgvN8wfQgMmpzXNfFarMTwruP8NTphD9Kz9iLWZtEVvLAqTRJpsnEey7F49PPURXCthWe2npcBFxNgc6r1Bwv",
  "key18": "5YfeshphbXioKU5NDzsL35FKue3LikAVKXh7VMSEmFBC9u8m3FxhVyV4FaWkAjpqW584aNxqbbrLokYiH2kgQSi8",
  "key19": "gGRP7bejGFnDKSGCMwCvgg6rYuKFCTUECse9pkWMVhsmvoSCoDispadXocKbbjZBgMpKpP8EBR1S4ukKYJSBxr1",
  "key20": "3HKNjTrmNnvzsnphA7vFE13oMPSvhawqFYhajhZeygHF3MgRWaW3gcYfqhedfdft6xTntGRW4HKGMgurcV65sSCW",
  "key21": "2DBg41ppKCeyhAWiAUaDgJim1dThFxXz5N625f4pcRA8C6MkCLddzVVVteBcPv6FSvMXu54ZnH9H3vd3mQfwzwvj",
  "key22": "67SkwywRUkfxkBHVMydcAXczHRPY5ZZdx8EJKYcrt7ayHezNGy6g49EN5or5UGUncago9uU4H3mQSHdh68aqYC1G",
  "key23": "2ce9mc6TjFKdktQVGyA2SAxbeak5VeUAFwevk44VHUDGb5Wp8cLZ5JL1kdvSRP5FqTzKc1hWirZf5ZqjvF2QdKF",
  "key24": "4WYPn612uBFwVuzdkhngWZ3QRQMMiT89P6h62FQiWoy2quxwrmfQWUfeiTe8SpMs5LVxUQZuUgi5Gy35Gu7gxkFQ",
  "key25": "dvR7evAdPC9DMiNs4hzbrZfdnsS2pjyhXCajQqJRXhNV1cSNsAYASyU8SNVVf9L7H3xrXaxZ2DNbvXjd6VcGj2Y",
  "key26": "648Ksb6son6NK9jdmqREkmatioCKQhBxRwQJsVMPm9dKki5kYZee7DW24bKkmjW57atWaVsDHuw29rq4eAtPvCLr",
  "key27": "2vQW77ZSrPpnqt617nzg2fCGP2Z45kgumfEaoVNWwY62J3DJm6LLEqEXkSD6Eo8xoMbRE12Qz1umy4jHBUozuYbq",
  "key28": "4qzeJ1r4eMwENSAVMRuQQusNZFAB7Tf1RVfqV318SEbz3WL3gvmXcmSX4tVegUw1iGsBuDR7rrv9YzK3BNeVwxGf",
  "key29": "5AtJFfJ18TS7WMPUGQLywfozGs8BKor8VC9t592PsjohP8azKGkex5XqXRosetBU9J1pb7tfDs6qKSm6y8kUqNaC",
  "key30": "XGsXYJAZkFwj1eXeKFL4S254nVXM9oGKzdujbXbegZi24eGRe5BgLrPbMqhDNLjxFcEexF6YRW5trwUXmM9u18J"
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
