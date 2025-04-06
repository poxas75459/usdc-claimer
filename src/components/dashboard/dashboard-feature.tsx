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
    "2qrTQF3EtNz4S8LtwDxfRTc3ocahenVzgn73st9BjR5eQiTLJerVerymm4EamSjGsHG5UPZTACoemQeMtB9HddXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMNKosf4s4shWnh7i1S2CKRELHZe2qmceX8HeBB5K3wtSDShy67ufJbtMFwHJK64KJAh33shQvq1s6mXqCyVHsM",
  "key1": "4TstrrxUMkYucQ4qKENw4Bjpy2JdB1NJKHuh2xsySuTgMB8MEskBSYTdnTtftyE43yJVmDkaxzbPjckiwepJxAPX",
  "key2": "5xAoTB1MwwR2uBLdQhoqySEjX9FafQx6CwGRkY6R2WgqNamrtuBrYcCtucANjH2vNrFQDVV9j9V9bne2NZFFUKbW",
  "key3": "3ZwZDcawQjCAjctmQAbbhUDGrZnEaHduyBLd55E5y1rY88dcT2oLnSebhJBm6nBAykRj2dAPE9HN7A43jJ4D9Gx7",
  "key4": "21G3eLm2QJryqBabgEmuEzHL1cWbkX5VXqH5QFUV929Nb9VECYWQ3sQ5JKPFAFXHVBDaH9wRu2hZ9KVow6fJYhrh",
  "key5": "4zAt9EjAV7cJj5RAzrkySdmceibHJwJXYn9e3AWCsGswFLrnRbRvBVBYuND66wXXUnDLoderBhXZXaLG45qpah5d",
  "key6": "3G7N9f3xLmfY2YZ5NfFHMPhDiEnhgzDtshFkyBXmMkhaKWBKsMgBiMZFBvkt3VeodEmTGd9u4R2ivFAxmyGsKKWg",
  "key7": "3Q3hncfRqDJ4JXovLv5ts2KSvCmfbK6e7L5Vi73iDSsWLMAqtmKuYSzmcvkskewFhoyfj7ny3p6gujcTHzVMV4cv",
  "key8": "4Tho4zZoC4SFvtbh1vRwBnKAszevfvP3ZWpGePuJh6La5ZxckJhMnzan4U9c7xzN9pm9MaMP9bhcFGiFBngHANTh",
  "key9": "4wYrBT3tzzRcSH5w29yjEv1kfo9w93Wx78sjE2zcQbCqvuwYCZc2nFxpZdCp6Fj8qaZaBU8Fr5oYRpfe5bX2eaX8",
  "key10": "2aw4fxJqG4x9QyTKUgwCvPMmUosN9F6wHHPrpm83SJNbM4y4hQHXwHhwWn8bn2mrr2phVfzoxUJ1nMopz6UwiGYa",
  "key11": "eDTQRVcmpPcMMuTuHLys1hxzpG6MoYRvQwHTFBaRo4863R3kFUQ2pe5VMYTiUEbyvrX5eSmp9TZ65zCf2fZKd2g",
  "key12": "41JRut5jTseM54XBWh9rAvkSVJ7tE2BCNVTrqrz81VMsa5j7qsSVgKoiobm6BZzV2Fhfiya6wxAfJpyfTjMQrLp",
  "key13": "572f3DhwKdrJ1XPvkirA7kVBNPDqgdcVXAPhku75yYvHaN8MQBoSFGPmqZyCVPcmhQZ7vifXKqQdmia6vRfkefWH",
  "key14": "QRs1B1QZbn3uDo4a1S4ywFAXjyzSGA9Wq6n7KjTkHVi5UmCESbbiXwwwgNtjvH8WJzodiCFK2saDDXNQkUjNh8S",
  "key15": "5iPPwxRL9yAv573uMCpj7VbUZtsqn8NpP9tny49WS9CEupAATrGQ4JEsu2LcQS6bsjdK5kKjjrkQtLyY4ih6zE7J",
  "key16": "yQU2QEMFUJjr3R7HdN4TAyjnktpFMP6hUfCESHWkbG4NimoVec89v3WkEx2iq5CXSgqGgeC7gpQq7NZMtitKRT2",
  "key17": "3PFYDLRRqUDrxdACWoJfLf5FviQm4bv18GDuXKTLZeW9qoJyuJgK1bZcXS86E1cRtBc7xpjnjSEBNeuidjTfeaqt",
  "key18": "53yfGThkKdkbWEh1WFMsVdxH9urFMns4KxVnW5tXKmDLA53Qb65d3aYGzfaD6gjhy7cEsVWV13H4uyrTy3Ag4hPB",
  "key19": "sp1igQ6iNZUzt8CnKcFTkxCxNSZvc6Hu8YCWodn35KCPndYb1qAX85k5VC92qmaWsDJUhF1AW1GfTdsmaw5msmV",
  "key20": "4Ytj9Uz7rsHX4ajU1d1nNA6o7M5UPopwFCRXCAFEpCRJ5izQtiXq3EGzsGQp1164sCiyEL1M9kAovomZqGSvcAa6",
  "key21": "2aBFc58hgrkgLPsDVNbFuZb2diXDeGkUuL5oWDyDmFhHWiDRW4jewcrwGVQNZ2HEBnuC8dMu88GHURqqyuMZu3tr",
  "key22": "5EGrV23BSVKnWBY3a9gGmGucG5RRoXGscyWu94cGDfH1XFZ3sQJ5sMLCS1hdMhxBq5JNM1QPq7nhZEpBcEaNStP5",
  "key23": "2ds5NQyCdnR2UUTSNYFwwXkpfbJQX7qTgssTGCAk9pK3Pbtm5vP5WiVi5DpvwMwdQ8G828WVu1vRyWXTFMc5v817",
  "key24": "aTy2q9E1HxS8jgAcgjQduZraeKFyETVTUFuxEfRK6yoWPNonK9NiAD2nE8weNc3EyEZ4K8ae2uiULxfzMV5MWVV",
  "key25": "2YaoLAXRHQ9hxNfAVz51aAjvSHwmz8azxRUDjHFqfpgTWpZz8YgQzfKrQiKd5Zr3ktAaw65G5KZyLPaWLWRe88zm",
  "key26": "AwE6kYBX3Z5g91r7PJB1GsuTr7VtEU4vo5Rj2rLTJtE1GkaV3d2ed4S3QCo8WJu53iXU49J6jzWQLq8aXXK1mdM",
  "key27": "EEGXUTnHA4HCzj2Q57eCGUiDPQUqVKZW7ubaLyHzVNyHLM7Nv5odLDmahkww17PXVD3ojyKyug9fuvs7x7FZ3gd",
  "key28": "38pBHrGSizXPF2ALvtq8ME8Kbp87rCsdhP5ZzQU4dvhr8zU7Sd4P8zDgZ6k1jvNNEbPYACCcLQbywuWMpcMSh5sG",
  "key29": "4Np2gnanDpAfgMyVeyo9tJEMBShwNzxvy6Xu1Q17rgcg775DVZeZLzXFJrCjU6RLHrapWyH7hN3VUg2WkyN4K8g5",
  "key30": "272MxqmKnZAREWifXFJr8KA17ArE4d4RGBBRqmbdtG35amEgdqE2KvRw4CGzP1Kf27yNraU1dPeR1szKG2oJYVHP",
  "key31": "29YPMZYLWtDQNVPzVKn5D9iotxMBwuKDFtBApmXUsz8B841ypf8oKyDsFmdGt7HAA9pWSEDneqtLvm2XW7EGY2po",
  "key32": "4zZwKxBo7ZiGS5YmTzV6pAaMmGiHpB3RjxGmZNMjGpiM2gn2sBiN1u8cm6rGS2Gb7V1US7M7fzmexNPJwguGgsZg",
  "key33": "3DGuXWFUMujTNSRP7nm8QZePrDhi3r7RHfAF9cPwQ8GQ7erASdNDvnigfeEM91kmwr9WM87Q2TtGuZw9zBzzyFDX",
  "key34": "65FYmQnxc2RtCd6E4pLrg1UTk8ASU3sfhz4rg4Q9Nsf96SCkTGcxQKb5FjxStPd5o9CfWK9QPAyZExTZJK61Ytx1",
  "key35": "3qu9a9mcTMaG4514uMSfBjnmdatPhK62c9F5rw7GNPkyJC26XWv4cyVEAhbaebYwxipeCPVo5K9PhFkZQmMD3vdS",
  "key36": "3DgjbUiJKQmPKsZPuAhTHxEh5jo9wj7WkHkW7X4iqRtxNghKVYBNGGMsWUH2Q9y8yxF9T4411XCGtut21x4TDgro",
  "key37": "5eh5ajVakDxpZTxBgbmpTdGLxF9gYKVd6rC9xCiMC73w5FgvCjX1L3cAyDvwkaE74xg1oE1d1f1TksWfDoVjhQxA",
  "key38": "3zDHB8FpKNUMSjjLUukM17JtFEJeEKHnagLYAofKEH5AoHzQAFmSrddNXvDUmQU4Rwo4vWTkHrEu5msGTPNjk67x",
  "key39": "3iGkJ6gVCm5w12bippwRLTBrfAh4LuvzRGPhxbCFoq5jfY6Wtptrh113Fvo5vLV7XvMb32CfJAePEDiuEX6TyKUP",
  "key40": "kLPCuv3YyyAdiptC7Md5rxe99nVYD7ZDqBevGjCEC6uf5zvrFuS49pqrNZvbkDLnUkvDcYcWbbtkUNxXCrYTcVC"
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
