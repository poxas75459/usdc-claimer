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
    "5DBZnjMduqFTRJ3vVoqnpL4AstDjBp3jZXYozmYHCpxWdkbRhMubFr1cNUK2xYiGsM9YPdcHTrgu7UJZvfb1tFVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVJdAdJbEs7M9TvXbdxGDu5VU69cdAACxNedS3tmLY8F3BsydYWhiLyBx58hgCGzKSZSgY3Jiz6FWFJzdBAVrgC",
  "key1": "2Ao4E6d1ZBSLuggadvHaycbJVHF46EYJ1d5Qu4LDv85TXb7K1pKLj36LqXz57wUCdDaWbcvVXhCU33chyYJTnrja",
  "key2": "2Ssjy1xq7GZ9pwAE1upL5RixuvPpkAp2wHrN1bYE5FJganRs8Tvpn2C9LBczKMeqjPzJn1mJ5pQaXBMos2AQz3Y3",
  "key3": "56FFaRLHaqdzxgXwB5ie8KGyTJG2qh5H29UaoA9UR4Fy7SWvo4tYqyU1jGjKwa8rUpf2PwAcb2ypEARLmyLLbs1",
  "key4": "2ohb3F5QjEHmS8fggSfoz48zrN8YACN6xZnKAHqhunJR2T5jNF5VztLQQRzWWyu9fWNtQDZuVVmgPaKvnC1Mb2QQ",
  "key5": "34RmzxNQyWxfWMi41tnNDoR3zY1gbtQjNpnFJyGWX8UozcvRyxWRCnuFZwPc1zzssDEQSaadwCJvwvdTeo75GE5q",
  "key6": "3XoTMoeWckztV9dfnDfXUKYC15vJZJdWzTuLGzcqFnPX5bSDARQwipeE48TVPgtD3QjssgE6WxFFrAg4t4Uv16yH",
  "key7": "2ucLmL66DYX3kpuuSJsywtSJPKWFsH4MwEiQVQwmUquNt8LB4QnmasySxVezD6mAiMUaBfp1A7VybGAQk9qvj3yN",
  "key8": "3mv11yAH6JyCLdDjHadHpUgAr93EJXkXzcP9vC9yNd85jQD4NfTPh2XGgdrZ7AGVEhLBze97hPVyMPjXcHPUk4ZP",
  "key9": "2o7JDTM8e3myMgiQ2B73Yq35ew2H9WAar6xBbFvpNKrJU98N5KiFL7W72ugEHyfXFnXxz2LBGmfg7Aj9C37EXf19",
  "key10": "31TG2ANdezZeMKCq25ymkMvf3J3FhC8uw1yxDz34Evg9PgFceGw2PXrczqGtjX6yfJNpBMBus68E9LTcFZizCMnM",
  "key11": "46j6c39aREcQfjtRwtQNqkM9Qzd3avJ1pdWiTuSYctxEcCHjCccnKcPSVYpRE4EoA1CFGBK1DFFHcTP2Vq6SVBp",
  "key12": "5A2SsqiUq6dLC6gSrgfGtjXzY1d32D7DCaxnNphb4NGrnDGYgCdYqpheqdyGxzwpETBvkTcJ7zhvw6xACo8ih62j",
  "key13": "Dj5EJV7Xck9JAwhawrnGGnso26Ke1FQXxoqWaaRRTKCYqFyV9qZ38QzmAYTqAuaFNYLbBWZZKfaeXXy47CNSm7u",
  "key14": "3BQM5xdY8SHrmpZy815nxJRKfXGAWamrUrjwPTusAGwy8nWNUq5eNfXmMhBxDsri9JQuMgDUojbX2V2VqXk7MPDF",
  "key15": "3fkPeLznv7w3ifeMBPZ3jc37rJR5ZTHG5S7FabNHDtxTQfFHAkMaEpysEmUspfhMD46jYFmpa5c5RKFz2inUdgbD",
  "key16": "5P8URLw6ie6tD5Xa8aW1JMZG3fsNCsKCwynxqrvvHRrEFGF8meAsKEHw1gSzTNgZQ1wCjvvWWB2Ty8BBEYPW4hy3",
  "key17": "2QvWRrmJmkoL5TmQDSpHxFAHhJGQhTQj7UtvAgWCy2tABMv538kVvEq4akVCVh2Ed83zf9keZThSFNryyKifFVHK",
  "key18": "4rjV28kL6E7hfxmPYtB87yTwnSBfaYqnoYhAeyyZEbADXb6WwPXa1xXhuZERA4vtXgjudqvTzhAkhHB5vxkF8Cck",
  "key19": "3No1aWhokrGNAWCMzpKm58GwRjWxzdPcLhoUbeMgbDn6CDrrP3up42S4RDbGAzv1xgDwxXQfNW9p8dVVuHExS8LL",
  "key20": "5UZgFeLzTZvky5Lfntdbj2mmko1ToMx57rzLhjkCRhXJXXhn1Hp2MRbTgupFkxkYcydVoWQyyER6v9NACQu8XCFV",
  "key21": "36TuE3fzjBGp7JXErbqpCNjAaW17xua5SdD936eiPVLXWysDaY12MrwMva1RSRNE9WjxhrQQqEBDbPcV8HU7qMEt",
  "key22": "4fxUEPcrD4Xm5vVwA9ejYdEAPPhTimCewELwYK8dwt3hsbrxKBY6UtyNfo8sN2AvTrdBVAjL65seYbomFzWX6CGi",
  "key23": "2QDtTjLv5ajjoyjqrFsK7pifLfqwFzK61Ejs3RgWFUGN6nRRswkfW3GhmwGBGGNjYv5GMxXiSGEvYT1Uh1Sga1Ds",
  "key24": "2XTYC1b5724U5iZ55uEChtTgr6cmvKUBWHfxvL13aauWbG2BTPzpLz5NFF9175yw4ofHA7Zc6Anc1vgxD5g4Abm6",
  "key25": "4w6vtAh6muw3xVeU7s4swE7JXdEgQuw9k8hDnLrfdwRypchtJ6JC9s8nRMPDH9YveiHWrA6BhejopkX14H9VT7XA",
  "key26": "PiMphxwPSkzAvgSf5gbiYYqE3LvYa2TgEHarBeAc8yFrekEY4Lv7FkubcXEqFTLu5ziWK77Ug8tvNTJvKXM7Fks",
  "key27": "2YXdiYh8LfYZoHPi8sXLcFAhzBHHqGCUkf5FcdaLcWMZYQmanLmF8Vc52KLtXL7aJSmRREMc1NRVHQZGPCBfpt55",
  "key28": "5zHXeeeb7MRfQhyTvRH2fSmqcTRcNhoM8ZsQU9HayjmXPcLrrW9dwBmsZ3ofRPxNv9UBms8jYpwSE5Whfruu9mfE",
  "key29": "2ETJsjywXahCUBedvbS6xNp8GJw5VjBM65K7FdJRoZy4yHFEXjrpvo1x2of1RN7B2VXQApFeasRLqCPLJbePTLah",
  "key30": "4vz8DGgEoc1za86PHCL27DtvqGWomiRSeAkF3cPYy2ohYC5Jp7KMQ2g5wkeeBkZSbSXEtWCSVznhSF2pktvjTGB7",
  "key31": "5QKDq5DbE3uDKKfvZiYi9AEB4dJxegbMxJTA9zua7k92McXXxAm1yqbNjJ2htJoMjuwNhXgE9Lwi57L3Kkt9YXHu",
  "key32": "5moTp67HpbH1cCGetgLjcXpWNWEzVy6zqQszeevCDipYNgbPF9MzSbUKarixGXEbVFttpjKScFQ1dCxmATVNEjPa",
  "key33": "2b23Fbz9dM4kryXYwVxpCairjTKaWmARMcNtnLcvymhqnVUuEo6fZJEjvbN6wWjhq4GAnWmZdf9SC8MVCFthHF32",
  "key34": "KQboetSJv25XKvcQjLYgRHXW47U9L3916BepM2EzkggkaSSLHiA4SiBvWuHQ3Nh6Bh6PymM2Pxdj9g7TyEzJURf",
  "key35": "2w8Ggpvdi8SwEWbGi7St8DPVXzgty3VQRhB25xVWPGrNQuW3wuTwfghyh11goBVxw1o2ySEcKjNgBBR36c3XMyGL",
  "key36": "3u99xe7QVuUb7jyk8Wf96a7DTBRt2RxQAehjouHar9yTuP2eypr1B4mUpXnw6r5YXirhpgYNhar8pyBTac1fyXTc",
  "key37": "5LQWdtN6LGQrzHYq18Lh8TE6Zwkao7KatPKWKhcom1UTYJhcG21drEU8LENeiUSbJyMH4CSpHfRy26qZjjH2MC1q",
  "key38": "4qnGGQsuWhGn2KMFmoMgsV6QYL4KiyycMVbMnQbmjVxPqZ9BzJqgkT3dV7sUs4DNkTkMybVaKZd8VXavgHKEx6HY",
  "key39": "4YAXRCFUvKicvc8gXhXb65ixink2dZGAaMjWeB5z9SrgDm2wMN1SreNxhXPdufLmgG7TXw3fKbdX3V33GGPacdRB",
  "key40": "4ZmmB22bwhhfc5x3Zo5VTw1YmLZtj69svhANfYHNoB9AEybmzYyctAJZiHjXXxbEvFMy2LPU1ZLPojUXyKZkXq8W",
  "key41": "3qFqpVCQUrPwgDgeJbYRfowatrWbsgeRgQJprSCDVJj2EPe5yDKGG98zudCHPZV1kBbDUWetiqLrRnauSifQpWS8",
  "key42": "3o6eWTYisHaQQHyDQ5ZYH9HBhRzNCT7wPYLtW9FLjLhaBDv6jAd7GqWptmGU2aTi7MCnev1rjRp1nQpMLTSmZjLG",
  "key43": "2fCrxFirBhYpid8CFUdmpxA3f5WAJLT5soHaWBARQ3sUTZN28BEsrtyRJJYaSPQopPVzAwXmA8PTMbvXfjkYSxhf",
  "key44": "5E3foKeVFFwirKpwZAL3aGbm4VAbYennZbFPotNuamxAdp4DMy3TDB83nTvwu9jdiDTUe7pjQqboZvUmVsVYhE91"
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
