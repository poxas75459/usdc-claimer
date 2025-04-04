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
    "8qqX9VFptiTVDzHT1hCydFg6hpX9rcokj8tpCo1WKvBXzNuVEh6qNF19mD3pSRFWb93fDBj22ojxQ3rmsjedroa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcfaDA34ZHVKsYydzXAHoKvAgGsanicCaH1eSxZ85dHuY7BP1GXNz2nJsvHDoWSHeraGXyrpQC7KGf18tekEyjn",
  "key1": "32jxddRD2UGhGtnXriDwP9zGp6YJqe4VXXpzDkCwfD3FdrydLdkjfPC7v3gjkQwcXqKmBKGuriFZqFYBoC81Zk81",
  "key2": "5eyhPWrf7tHrS9Ekb7dGHBLERVdBpzRmyRb4arSQ6TPnnY8bcpdxvDkErVreEoSQBUa4prv74F1EDbpYZTcigvQH",
  "key3": "48FoqVnyTWGp4Q7FUNaDpQBYEQN7SYkZbhHZ2Kp4PJeAN6MG4E5c1MkbwyyJFMkBCANSJG1yKwSVfBUR5yJCdgUa",
  "key4": "5CkaygyaKAYy92C7TDgb7AzXG1sNREzwJG8id2KerL43hJsyXDfYsMsGsWLGZuCULSj89CxLfedAwfXKPo8Yzbta",
  "key5": "4D1f7Te7kYeTca526gEN4WibqYMaqR7VjwbamEn9yKdpQtmNsnfyvohmKgqm4y6MFzMCkZMGEJz4qruHDXgbgu2Y",
  "key6": "j8Lb3SQUe7Q5VsKgvjwuh58bJyZwfKoDNBcvDYchijeQYhDB3VHKNdT9FQVQZG3JjJEWEAVVc91t2LDjL4cdouo",
  "key7": "FSn75bN4x37vkjaB5qcZ7Zh1gMXMCrLPD2Pv6g3PhVLrYRZi9UDBYEaqhfbCEKFzgG61JHNUAuYv9asE16zcazG",
  "key8": "xQwjRiKcPHr3cLs23CBeDZ78AkfkC9ci1tSJCjTnSw3FroqP3JybZkURwPaeAMm74EEBfi5zj1DLbUaoHgjvhgj",
  "key9": "3Q8w4BTjH5XypRy1b6kiG8V4zCCNqZTh92BtSgUZ9sjMK2pXKdPBLDpp7gEm7S2jgnevuASfocJZjT5jQ3VogyTU",
  "key10": "5JCaQUxFuJKK7sdZ9dt3dR6QGnW47hMtXSNy1eheFsCTRqZLJDcKD2WfTsdaFDwuy75mZgp7bbRAJs8aaChwW2UH",
  "key11": "4A9vaRGD5iuBZn2X4Jmovfym2is7UZasbJjo3GLtex7udpfyB75HYDB9DgBeuqtb5XcYRFZoLQvNXGf3pRuUAkks",
  "key12": "xtDMCqu7RJBRgbWfHLTUj9v9h6k8mC8NqE2ZDeQ2TwVmPFapjwy6yPKHtnoErUKLqbgeYRz6ndKVRZUddfHZyLy",
  "key13": "4hp8i8Ecb9RaF7DLv662gTCida7rNY7SDecYDXgtTzmKM3ZUMFsSEWY1umbSJWUpYz6T6ghxY18U7oxgyyUpDHg5",
  "key14": "ZqZ8HuBCh7yCJ4Lp1HEBoXnMnynYv21C685X2khofBKHUKQoMmE8GMPQFWEBTNda1ikmRUUm9hj5AMRakKdFaNQ",
  "key15": "57s38H8iQVeUxFbb1ndUieyWKPEtRdiDjJr8TJmbrje89BSrnUEc4BeP3ka3nWJejhbLySn19ZTa3a4Aj77Bm89p",
  "key16": "4THkdsRGZZQxSy8QUtLKogGxLsJmRynwHCeTkxy7oXgP6MQcZTFc3qjADxTqgtgChjNj33ht4nF4X1ypDQCiGwcL",
  "key17": "4y6otbogP78iekRpSnWRz9Yr7wbDQ7Bzm9XVspB6Zb5nfcSXK895j4sUFULmMv1R7cSPqfdgaGWBP5k4oSseNdni",
  "key18": "5pzfB8SRVR6AR7gJyh49MXXcYy9oDAbPCaXdZrxDFrTMHC1TH5ZE4L97W6z1uJtNnpbSmYHqamfhSRmV9VDCGrpV",
  "key19": "cQ7wyrXzsTEeptNdiHzTRH7fcuCygenwn54A8uG7rFTvupMdr2geTHzSvsYTKwtwp1p33QbAJbJjdtmjPf7ccxg",
  "key20": "2dE6qvZ2SVgSVPw1WsDvzqFwohYLCHFaPt4J91vet6FW1CDtQNWNAxLBZTfeYrc2YhthAbdwToam6ZDNLAn1yLaT",
  "key21": "2FfTsBGkAFb2doJJjDxcrD8npU9D7wmLRhvb8VoemQbDCDQTe4N4FMKg8ppmGzuL9Uzz7QWRXA9M15vcfzmPqogx",
  "key22": "38uA8UCHUw9jNuXmGTM8552aHyL4THfY96CpyH1ssyqkR3j4cYcvBdiaS1f5dHNpLtGTjuSvPjZF4hrCy2T7Lp2",
  "key23": "2CbdiCB58btjCzy2ibGRRS3ntJhWoAW1yLSJ7cGwMYGz97MXuiASa1UBtT2DvpEwygMv5R9PFSjr2jqAYEsDR2TH",
  "key24": "Brsh5NbyqGnCTrmpaszo6jLC4JfiivKsMoghn5UfiAfuCUbZrwRR8v1AcN9QExY4qUocNAt3uEJLwvnugApTfoN",
  "key25": "4NZ4RVvFi5P7PkJUyh7H8BU3ThMajm3DLHVWdzcEES9CqqZoMV3tUqqBaKxYbKrUQ7piYdVDdTCHtg71xAyFhDWf",
  "key26": "2jLJ34rBZPrqgzjsqyL2Xi1VSF9MK6zMXxYRo3qGby6hN2G2nRHoiV1NNSgXjT73Z7kjn3m5unJvP3cjvVd4AFNc",
  "key27": "L5NH4KRzKaVchYRZh16mE2VkNEN2Nhte61UyNw2sHEEnLnfQJ482cy9cVEPJWZFyrJk3EpXvkM2dFeo3k37um2z",
  "key28": "3z8ttnakMze1jCm98FFEQZ8ETCknvkhdtVDAkFDPpPmBDpiNmxrtwiKpARB4E1TmTL463Zf7Jp676E2JprwPdaKB",
  "key29": "5JvhNkyL9MQ6uLXWhaq7RAxbctiq62fJ96wXXvFKvRsPrrftxC5VxhTUL4SsjcaQEBakwQChDCHVeySzjoC5Ri17",
  "key30": "3BgPHpxCSS6niv7NCN9UMfDxfnhwv5cb5vkd9qbHYqkZcabvHS9aDQSpVkyTVqDNH496nwrHBqB2Ds6vzo4AntUv",
  "key31": "rRjHG24VAhrFeEfb2dkvhFZiEbNAoVk6m9ETne89krtgK8S6rCSWn5AtmDxJorRTYpvwXZXk6VSV1dCdHSQs9Ft",
  "key32": "5BXQ8dupusWSYXnGtYUkH6mTLcWX4VcPH1wbwxnPLVuPmy7xKrnnCvq8rj35JLPjgo1yiW44C9oJ1HG5vrRCKm6b",
  "key33": "5yjzMBEWvxpJrbjY1Nv1CWuyUjrqmDbPmJs7h7Rc2erBMKmmTg6SP9kGiWVarpwqTTzegdiSQUYS86K7Nd68mZuF",
  "key34": "51bLB4BLmQAi3AAVtk33uf5CsRAkBLJbEWhNPkcpuLK5xbmzyCJnySATnTGmGkTcbx99Dp4hrd6e4UKzEKk7BQeZ",
  "key35": "q3rBmfpfa4Cd2RgUmPvQgQHKdxn8nkQZeHPxUmoYkrupsKsteWbgMfc6zcAeghg7qqgvbMPAs1rrzLurUNYvhvF",
  "key36": "4bRq6i1qv1wdxtCVaDAYyg5yBKXXV2DS2TUsVUtxemPBPb7p7dk9W9KFaNwkyX84G78ZqZUsNc3y3U9N7Mq1ZjpG",
  "key37": "26jgzHhLa3Pp99yQuZPbM8BbyiWtLCoeL3aScKcqNRLZE5dKom9izujSbYk6n3szZAsfVEdQ58PdZJ2sHSjc7oou",
  "key38": "36ZTAhXJfqTHdy2vs3K8yALQACvuEvzwX7uNqcs7jC3m3qnW3fmr6MczPTheCN1hBVM6f1T7zfR5UxqXWWM8vh8y",
  "key39": "643xWTTExR7mtWQUgXFnfQ2jiarY3GPCavVc3vi3XRa5WX58ww6QbGkPphd6S3DonDCmSkEHAsYEty5g5E9e1iWa",
  "key40": "5PY4MMNsV5Kfw5ffGkFzCcNUKSo1483FDz6mXG2Nu2JtrXLoMwrnY7dSenHQGhWeLSCbsNSmFAm9cgZXtoxzQyJq",
  "key41": "2y9p7UytkXU1YFavju9XTYyaTDwC3zTkwUmj1msbLbC1WKGXK787p6amoDG9o7CjLPZepz1ucSLgHn2HCqitqZEw",
  "key42": "2VP6smv1XWuTMWkUh8W5empP3kvUgQZgRUu7dcmNDZ4xxkrMKvjjcbvgmiCtndPAVjiwdfDGiUhYYehYAhbMqX5m",
  "key43": "xvZadHZdgcY3h6ubcwWheLQcToP9wWDqTuRJkdignsbWgAA3K1XLKoVMa8Ug7bF8n52TdpDUKcmZoEcPhLcjoen",
  "key44": "XPPheDXvVvPqqc99aJa1q6kkWqMrVfAuBNMSWW2rdBqzhD41P5nQKoReq7zoyGjAwYt6r2N37Kg45CAH3aC1Jgv",
  "key45": "2TadTTBopjRsRC25n1cmvXwxBZt7EyAxMn26ygubDNonY73CDWUcGPzMrE7X1xtrPJyx51JuW4aev6jnx6Fu6JMV",
  "key46": "NCkm3vYm1FtfSogXp7o99ywDBxysVSzqybLMdTnUSakTkqutY7Ausw8wp8deoM98DnSaCZ6iZCLHXD29YXuYKfd",
  "key47": "3oPfBgs6AbdQg5bYptY49MKghmiaej1zN7Ytp9xaHUV8CmusHRxMAYWKWHzXyJTc2QTgU7CdnsRqwWgiPwX5HUu5",
  "key48": "26bQjamU6WPM4cLVfKBbtqvmtVmbFkA5oXm4h4r5ynFXc4UFtWFySnKJuFMbVExp4YprcWeXLPpTDuVPvQky5aaL",
  "key49": "2kzfrJ9TrBA4WE613KHaZgmuNZ5ASVLfVfV3RGcYdGrc3BUH1F5jDVHKR5XecDc9nK2mmwbHz12b35CGEvTzjCV8"
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
