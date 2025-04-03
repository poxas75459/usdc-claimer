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
    "2DDEKZzDLzGpzLeqckMh5y2Af9wHEXKBX8JRoEVRkZDCFq9JZ4revLH94vEGnFay1yGTWL9LNftbLkHjguRyWv1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amYFvHx9oNap3rvgoNS1fBXLZMA772nWjLvgaFPGHbjCTB7ZL6JLAqfE3WA2HPW75tnhwJNQGQBKZuT1YzUJPrg",
  "key1": "5W1F6Z7Hq13auae1A8pCszvkMeUUSq2xS9VLrWPYkSEUdhyD238vsvsgkvj69x9iHcNg2ZJbSjitkLFyEiTLPCJf",
  "key2": "2suaiWg4uRoUWpzUkKT2GY4QQcPngLkVzkpdqTEjEBz5vdVriScvNp5vQKbCqmxJNPESji51HzSrLQPLa9b5LBLS",
  "key3": "2dt1tZnQEFwR1PBj72jRcLoB4YG7oDPetEk5zssVXrpCX5cxanGRthjo56c1TJN6rX1eeP3cWTVvZLHGx2tbuGNW",
  "key4": "4ed1nnU25Un4RDxXkqWdqnHgCTJT5GBu2VP8V7kc4rLdTAsGe1hmApeEvoJeC5gfTXFGMwWWWn9pGa6NiNSFHSZ7",
  "key5": "4szxSM8RLHayh5SiBerr66aH7TfkMRtFSDeCpJiWgob1b7vyZ4jwqPzsXnvqC9CTQDrNUSZC3cNndCUd3nT8HWfV",
  "key6": "31zjbNAAbRdahZV48nhTmrDQivHKe4c9WYGfqtzswf1GiK5ze6AiLZuZYRYtL91uDKZsfPVWeYAKTkSZwGfFgNwZ",
  "key7": "4SGfsSmGETRTZ5Px9nbtmevWPhaNew7a5o7tectnB6B2arjoLnHHJpkoZWeFLRrSHohk3edeBni9J8DvXqq47ogx",
  "key8": "5LJqL9L3YQiwLfCqqUc66DVndRwQKzQsAPVqi9w1pKUtkbB6TFbAJ5v87Jt29N3uJRH4oVi5DZczb3jUxtLbVBvd",
  "key9": "2qiYM26ZLV55CZ5rYLmtBQFFa3S1vj4xGDip2Ccyf7sT3rZcAmd1JqCGzFMPPmn5XcA2cD59MPc8J3VnsqopLCN7",
  "key10": "ZzXj3kF5rhmA1i9pacxUgoSWfeBBToHWjw38c9wn6tBytNg22J1ncanWigQxQHTvJrCSBYizMLz4MLaMT1Hymge",
  "key11": "5ZKv1WrBcPt9n3Mp25FzB2PzytpfQfLmqudjZ9UXApN53UpxYkxd2Gb82XH3V7K3pKgysBuzWw6YehjXZWNhSnm6",
  "key12": "5S92WSgAL7vfDuHPV3fp9vhK4joiAn2S7ZZdMhrpxDZwzEYsHiKbPP1Gi3QRDYZhk1nkXXnBYpA3ZaGmoYw9CM7N",
  "key13": "4JQZGn5XNzuj3hCY27UB9Quvn1QMpNyEYRBvG72LUoeQzyz7TrFN7GqgU1VcKE5cnfZ4RY47N3Jwc15SgbHVkre3",
  "key14": "4ditJ7MqwREspWe9TbaHcoYaSHigksLEv27ApSiPLtX15FqjAm4gRwNZk7cBbgTx7mgnKEE9vUzk3ah6DaWF4jxF",
  "key15": "2pJaDF3PxE6wtTTgEvb9FtbGr8BnA4FrXnNusDqmc6GHBzGFrmVYziy3vgh1qAfpLsWB31MjXFjYHenNgrnZdMVC",
  "key16": "4nMUq8dbQ5BFqHzrFR3UHT9VLb9yXZGAKZ81YU7sHyQw8aLgW3mmfoCXY7x3ux3Qc84UnCE2KRUZWSJ8Qxjn9i9C",
  "key17": "3UUiiscar88uT1fCZZNKDTeJd7zV8uSZWFPi17vi964R7EazrMN8CdNtiN2NCMvUdighBbmXwZG99BfWVvuN9XDJ",
  "key18": "DszZMUd3ss7uDYgvN4C5jDoYN2k22qXCApbVSxwpdMsGokTqRccc26mpdC8MJjiywxmn2PAE63QWH2sBT3iRFKT",
  "key19": "48RsbvzKECfumrnQLSLgHs1P5bkvfyXbdB4YXejwGwXyWdvSRdBopjEjigjdd5GKkfY5S6MvakXGvuTQuoqftgj6",
  "key20": "jr59rR7HZuxM7L4KajT7Ffm9MYmxKPrcB73Pm71641oTffSTeSzFmVEzLXsqFudsSdrbYtMKSEgPPfoJJUeMn1y",
  "key21": "2J4gcSUqWQtmmb5jSBonyeC1xxEcYN6TJm54CWSmQsLHA8VFtzrkpKaoozeyiLzZRwYBU4ifA1to8nUkC9BxLzaq",
  "key22": "2ifhP4v731Xs3gk7Ac4i6iv5D1Ro5GsGywXf8Zj2fwfJTBH5qz84uwgBXKbHHNMYW9tg8kQq7Qz96gD4bALU2Q21",
  "key23": "4nxa4UuPdK6pWUSagjJWYij6U1WeCvpycXWPp6XQniMb4U28a8EWN2S2kjVwCN9QWYyLKRDxexgEZuXd1yyf1v6Z",
  "key24": "56gjHQANqYvS5BoExa44zDVYzP1nzDdY1tGHZLhbaxn7nsgEi4xRA4JWSABce7bwsAiqYKWDAR2Ku3yvhGpP9dHX",
  "key25": "63CPcDf3Y6CBHmogJPrqQnDJgkrcWYjxGkfemsutRnAsZihLH6z17Nva8A3xCF8xhfieuDU5FvQRR6Py5VYkvijG",
  "key26": "2hfUUWJZfCajUN4o4svA9YCsNJYhWpaC2Y3HSmuQxBVTpb3GH3Cc2ygphMJKr64WbhS6Ek6ywAyZo3tFhSzYR4eL",
  "key27": "44a4YC5ieUeeF9pLFSsr7MUNtMp3qi68nWKUgQQZUVEM9qkLNKhcHsmG6Mw1UYzwuP5M7cpbnfnTL2QVoy9hzmbj",
  "key28": "2wMFDoM66hUhaSwNpq8hVkZGoAMbMzxW3i5SgyT2tWHymtDg8SJe96DxAQBNm7xWMEPmtL1hDNXwubky43V5d2Yc",
  "key29": "2YZtNFvRx42i8awKAqKXYwV4sveNy2W8CRzAuUcMZwPXFrgRYGzMFw8pHjGuW9ckKnZZmpmLK7XMkxLL5xtVM74T",
  "key30": "5JxS8FcmqMiE6C4PzrakURgP5AjUwQQNSPWhAZa6m4iwJTdRwHTb1JqRuUMdpNcafz1kjnTuRhZmzZpoayNS1Rxo",
  "key31": "Sa4WHArZihyawjL1X2GoD3YqMtpdc1897rjvgTFu5p3mkJ81v8RSSecBDAQ5LP66JJCMCFeXCEcdQZtEmKm6dQo",
  "key32": "5fFisnb35qTzWmPq9KZSTh76VwmSR3ZsVeAtsiguB7q33H9DiHqkJz7rDc9i6Fj2RaeJ5mi67qsbty77m3ePbvSY",
  "key33": "3SgWxd8RUXYcZLZRAKEs3GNn8PgFesV6HSg23SjQFUkfc4sKJydAnHpmvpsjafH7uyef6RiBNXfKvhiYQCUGD6F9",
  "key34": "25ZDNWSLSfD8WjN3HV5wFvyhJ8JuJJAxpMvy2cm2TX3kRSodoXX8Pkr79RYGjxSfC2PcjqoGdRjUDFxaEANhAYg1",
  "key35": "42jf6M2PKJNSebAdhdQAUEYevcbbzMPYqbKtFfVDBmisJXTK6jxGjjrzr4m2c5kHDC3u9JtCmysQbMu5F21kmQYR",
  "key36": "aXPQGfgLFfuG2NDT1Bo2X6UQzqsE44GitN8PZqBoTGxBo8YtR6v5AUDuUuzPmkpQb31uUHe43hC1vaEB6aWXrUS",
  "key37": "65sLgNim8DaDygRcitqaDVtPYKt5rMcmSEaLa8CP8yH38uj9JJKz6BtFovux1zXm6ThiTj7Ywi4ZugKvmvpTRdzG",
  "key38": "irmfLXaaCpnUxRhER8qs9BbChRZB2a3iaNaUjwZ1gLf1GSYrcLw7qB3XWkwC5mwGVa7FevUdPGL2pfyKUbit7s7",
  "key39": "5r7kDyvF3CEoV5CkAtyh861TqsNopXMnpo8Gish4mcjRiWu1Xa2TvQkU5Q9TQjHZSWPePHs1SpE85zoS5dK16Nvg",
  "key40": "GFXmHeWJnbEoUAppVr4xmTEHFCe4MaYiFhioMAiM7p1iEHqa8zTxRz212vZuAjBY38aLw5RKHLUFyYQJk93ZzWD",
  "key41": "4ibfhFWsMbVk9mwUmvmxW44K3FqDT9MSCruV4FMt42CTr6WUgPAqGSZJCSvn81mPM3i2ckD3bKFjqzE8pKwzWxp3",
  "key42": "48KTur3My6UfoSxhwx3HvJH8631jQxMCavM1D7pY7ydH73qcL8yjQaore88exVDX5TEZApaEGArNGEBz9YJEo7AY",
  "key43": "328QwaKeESR2ceu4gsy15ocZTds1QDa2LKYosMk4y1yR6pYx3Tf7D7xqr54Zcz1xsLQrKMcWKV5E7YcZFzxJ469G",
  "key44": "UcKqXrSWH5fU1ZcQyAceANynx1Fxb1hAvQVj2Jmihu9KnqWfkR4fTmYhCRcSMQTBvrVLzyeZfJV5qZzsMYfhBRu",
  "key45": "4jqKTjMHUPA7YT971Mj8ydFQ4boqBvezbojYmG7rLZSvurxGAc5tib45ZRR8VzQTaHqaWHfmzCd9PJQmFzK4nQyB",
  "key46": "5WtM4xhdgrkd8D4Dm6Mhbxc4rnVGmWCM97cR9hZp9mJxzFy2s41jVEkMNxZGvaV1mskDfGV8w2jbw2DQ29Ax2yeg"
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
