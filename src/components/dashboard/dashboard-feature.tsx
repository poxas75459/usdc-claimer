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
    "3Xev5XKwsoQJyaGAQ9afYEicfv4MsuWBQ9nsGJZEs3xLWmGjHB2foYTeJa8HmsAThcLiatLFEqFoaRSwYzFa5TKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjzCdHKW5CXbsQzurzSGZawwmtwdNiQyJ27SYajZitQNPLX8RABXiHsNe2daaWgedDMLhWn2zoTJwicQwi1278N",
  "key1": "3X7XMneti26JbAhT8yF9x964TWbZiBBSkGKg4Z6APBMvyB63Uq4tGMbXy4Y5gXDT1fdfzADWEyRfcsbgrRXB1Nvq",
  "key2": "5xmT3x2c3nf3k3ugpy3d4Q6s3yVvbw7jJGyh6UUMJC36Y7FYcM4uEB58soMdendRk6ASjVAAxoVJSV2caBYZFpRh",
  "key3": "3n9JHb39MXiiN8gkgpPMnFARhsGjMrMkFWtes3uGMRUfr8yUdrv4RQNLVh5h3Cn2wUQzRvdmSRDrFau7hXmacVDc",
  "key4": "6brJ99KP1vPScFegYdPGkUhrEdL2cvxSeTrXVj46CoiMcUDLjAzBvNRYGo632K9EbgYepTWMEf8u3U1z3pcNwXz",
  "key5": "5HJpSjQvikBTNM7si5Y42QLgmPtdXQEKRt3EaMbH3dMFWooHhZkeN6wApU4WMxLniJtCjpTKThsTRpBm1enNJxJm",
  "key6": "2S8cxBZknrBLEeYmu6C58ZJLcrpYY7GaTiCvwvxsNSv7XVEj8gSLrW1rhsHXq3W8SYc1FoJsJdYd16tsAPJJNgWw",
  "key7": "3geofQ4giJE2DqQVhtbYyYVB9LHGLDk4hBYjaKwjGjb2tuuzwKNy7XUuKf89P13B8vhvNyR3Y3e3aSvXzH36VVyj",
  "key8": "5YJRPnkTuYP9K1JchgzVQvu1iuWeWHqBCLWk4ymrTfcex6LSAhwEsBMeaJPbgWH5WM1Z7JWyYNrkb3w6k9ZSgirS",
  "key9": "63p7Muyhyrwb6KeHKRmsFGHAEsT97oBTntLa4fDa8PJNHFUq2yEquNJMdHSCGH1KX3hL5wM9aGBMd9Unpux8uezj",
  "key10": "5kdcp9TPL2bgu6BryjJgMc9t2KPHHUsic7jqmAtGxcd4GtuCrpiev9RV9pLu8ZdFbYJE1HUcLHgvR2SERt2Ygrbe",
  "key11": "5UFM91ejZdhPdASDqXQGTdMRyoR8LyVNvKCd1azUGdhiv8j5MR1x2Uxpe9uJMS8UZwSnUmMCHWM24e2LQyvvSUH6",
  "key12": "57hmrCVkeRBo37YM13DyYviAe3kiuwQSPRc22Jt7CiuHAPcPkKKJD3Gr5EW7UeaK9b32qUj8ojd2cqscsqV87Npd",
  "key13": "24inSHFxDji2VpQV8oWhsiUegzpHZu3F4BPHkSXEQKyy719oqQj2XS1GKQwkG6PydBoH881D8v45KPuX7DQudDvp",
  "key14": "4tbHYG87WDFSBdUvTavaB1Y83p41pybXUjrEzTHdpKrYvE5NLahLsZJmoAap5Wzj3B36cnz92PLpR3W5fac3iChJ",
  "key15": "fb3VcnErdBfxXt7UAaUzafJVziLzWaheCZjZHP8TXLQduSYegqnopw5TCMNJ24HFGAhVFH67gdLdRGmSK9ZQqnW",
  "key16": "28aRKnQ79UPSEnx9ZYPru2dZ27wdwqpJxPh6FAUP7U1LnB95G75byDuFsGafAf2ki5RR9iWVsVGBMNrzpfWrhN6S",
  "key17": "CCRfdQvnw4ciAmbmgJvXCHrB6QEL5zFvRXJZTx4QTcoCT9FxAVan3nQPYaidK1sc6VEjdSq8Ji4SGxRymNUBRN8",
  "key18": "3179uqJys17nv96ULLCD8oPkeAWdo37ErWf3gVxdB5zgAFu4izYtCcakKnAfq5mdz3aHVpRwdRu9E8fKbsY6ct57",
  "key19": "BudGbzxqvLM3G1bD26NUxmqXMQEYdSFSw4kn4i8aCadT8N6HfvEi3tcYvM7qeK2u5AESX2gJRqVjE9VE6DeaZif",
  "key20": "46k1pCMPkKHyZhZZ4buxvVhrFKanpasnp7JxPkJ727uvTmrT3p8BKcFkAbLFYnyaneLHpL2HdugL2nQ7RDu7voRU",
  "key21": "PWvietuDCEnSbC2RBvzxMk8SkV1m2Bt6C9VPH9W58SMQ2vrWcx37pbLEzbnKSwQU5fakLArWTkeP5i4hyuvnfgz",
  "key22": "2kamwhBXPLYumUdeBg4QrKxqGYcVMzAqoT9NPLEECj5Ckvya82b3P6fz2FGGhAthCPx56ZsomS1zY1KzGpNtU4Px",
  "key23": "3svP3c7iCRRbo5L7iCaLnWEaKgE198DYQmUr1SQhuzEK3aZoEUULTxHYSEA9187AqwCSdgePTA8iDenYF33fb61Q",
  "key24": "2XHNXF1nnqzCBapzsZissLWoMzLbKvoMixAVtzjAphUJVezVbDKSgvufRGWPcw2HFkxM8FFM3cv3nQ6yykYzD7rA",
  "key25": "m8WLzfvm4Vkuy5RWbrWaYC1q3XASPg1X2JyVnmSCsr6KAYgNuYWwDs9TQpD3c1Gnpbq9HCkNbPwSZ4FPgnZa4zc",
  "key26": "2r6sHYsirVDXrZM2wJX1a7bRYZqhe9rTCHYFcdaWpn1MzS7DEcD2A9Vzm5keG3NLE7a4oy1R5A7tyS3a5G8tvW5e",
  "key27": "53P4DcnfgjuBRMaBc66dQ2DgHJ9v7tMihwoFNi3qWSAvPX3DCewMzcuscitxxD5ULRnmTTJFGX93L7THKaPawx5i",
  "key28": "5XUuK14RVTVwqBVU9RgrEWkiPHoHGZD1WrCz3M4KFjMkU2S4dH5oYhbX4h2ajq3Ws5YY54t1xj3g1DweuyrhNWtm",
  "key29": "3URLArD2p4CPrwB5PQss3JwE3rPqFvsMMf85725HaX1ND2D74YNb6SLrQ1Mha8LeYgHckYwkfVJus9ZQzDF4kFK9",
  "key30": "3oxv4czqwQKYh9qNormpzh9xBK9CEVbMtLCdgRmCVUfEsu6VRbxUQb7dTaRohhPdYz2rd4z9AHNWusRzsBUyum8B",
  "key31": "4KWExwvrp2jgqs5aNt9mREYPYTXuiyKYizc57aPDCue54VnNhYMqCWpfGWd65jd1fbdkJvHAFY56hDKpCashcsex",
  "key32": "2xDSorC99yvJe4a1MtnZeDUVht2KkJWWF514bGxLPmoMwCkBQz2sYGq5LZaSKAZqo6SqwAkLa7P3QEAGiVW2Ts8E",
  "key33": "5YWChb69pM3PSQmHTW4NiCm2qQBLvEBfkhun1a4gqHqMJ3dS2bWPbQJUtjswgNBnFj8boKyMRC8G3ib3xbsEe5AA",
  "key34": "4TaQKhAiAYuoT5YXHwHw9ar5JBY3RxJcqofdcxziAzNiimAG4C7F9ehtPhoGT8urQdm9xVRsmTYqFrqrUNRYZRZB",
  "key35": "r3cKPLFiA6fbngLHyoGaiNMfkVFCaNBkv7His3bs4GxvNgetqCCDDyedfAimvgQghsFmXdQRKxNkrG1d2rNrdeY"
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
