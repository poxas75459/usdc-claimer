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
    "29UxqCB2L5GrBtWwXhyPU1jRkuty8BnUFHLm9uXW8nLj6c7abiHUj6xiYZdJMSno16vBVSpAtBiNSrFrawuuExhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dzPyiJcmzcr1XfLqADtYGay7m5L8vZCoL211bLJFeArLvaHY5288Gudk5LsmKdpe3dB6VSs1y5h4a5Dd6BPyuiE",
  "key1": "26HAgdcrnUYUHFfg8X9ETa2y76xUvjuo1GGytdiCrGzY9PMevCoanmdVbGoFz3Pomha3VvMCn39AWG82LdL1G4iE",
  "key2": "3cUyg6ZagyoW2UtZ2U4PQzhJMRirAnSxUaLWzQheD9h877Umb8y9aRnTvJLRHKz7wqXDhgzyb1Y8zQ1LCqiJwWpQ",
  "key3": "2BDioh5jSYp4AkiZYDPWgDktnxHWhPgwULDHgYLGymPeD81MMmhciJNdyqL9gDPLfeDdGtHPP53DdPVJACX8hiYi",
  "key4": "2SGiyRg6covtwQTLWJBfitadkFbxb6D1sJe5rj6bRyt51kVyShjxK4qLdH1KYHtucesH3fQFsCBcqEUGVpjHX8mB",
  "key5": "43ET5ykjNZhxJzcrdccHsiFXWDUSf1Fgc4NycqPufwCpty76iXdGUtbcgSGDMjFnxddVbbbmpT9PBjGnWo4FL5LG",
  "key6": "2Qw3m5S7wMbVudUCjzxJaZSexvfivrx8VHmn6U5Zbs4GqAG7xE4cLi1Gu3SSpmaVmh9gUcdXU6dwr664aFiwqgJr",
  "key7": "3w8dkHZo4t1AZgqFCzubFs9LkmwPHXn2bVGsq7VALuLu12ZF1fSHhYB6ErfYSCxH8i5infMnG586Wx6neAWHrmV2",
  "key8": "3zpdeuPHx7caBLcAbrgQfWq78b75TKPZenFNTPXJfVT9ZdMJqQyXQLiL5iQpWhnPZx6aL1Rd4RMdtYFpUpkkTQQB",
  "key9": "28VQN3K98Hb9C7FJeh5qGP3E8UMBRo4iCfSvxbLYm4LS9dzsn4HX7JkpDnGGRfwiTTX9cN613zeLykh38jK96nci",
  "key10": "2fYK9PcTSbDaESDasoV9vHXF68QyzfErw7Wqan1zCoJC6pUct6wHo4ZKZe4c3Mou3Gqgu1VM8n4n3A4MFyYekRej",
  "key11": "3m9nisrsPauEEHTjkpSsroTnz3wWhAhpPx4iTtoopyQjV2t3qD75oZm6eVPtUqRhd18noWaJW5TRG4KADfrfFPzc",
  "key12": "26UuXg3P7xNnHKtKqUqsFUN4ESo4Do6zzsaf3nA1cDPTX528TLd5WnHKfqhoUftvAAPcHVwYSzPoftSSNE7mXGKT",
  "key13": "5ftB7pP4NinwqoSfmo6pDMKyoiEtsUYfnzs1X4Ayv8CDBxvj9DzSFyLxL4mLuqhsdZhPuG8uyUHbZcW5cqoVpqAt",
  "key14": "RpM2Dv3pvL4aTqaTW6bhdEY1fTeTsPnTP5myN3AtJx1A4kgG2gfQLZGqJXFLrLBu9zmhhahmtBWGHs1Rc5x3htE",
  "key15": "3YZqgr92iAQLgnesz8keXoS9FsqMn7ko6Z8qgC9VhQDxcjR92v5SPhxUwFWi82pywB3hj3q47jyun6L4UfFiGk1C",
  "key16": "2LRyPaeKtQHcXv3cFpZoTrPryBZW3r3hGj2fsQ2U8zK2zSsLDEkrsn1SiLfXdLnMB9YMrNFVgARRKYs9gymshCWW",
  "key17": "5jm98gUrp8z7HwNcG68bSsRoNWzzb79FFt7DJPsqhWiEPMpoXoLN4iFed3uFikxobs3ZtwsdFUZqV5Zs9Rk4wWij",
  "key18": "3TRxF4kw2ANEDyc321FbMFhjA1uBXpN8PUaSf9ss4r9P3xeGG1grDrkKyXwEE7FEtnKSekxU9cfGxnjGgonMLgQW",
  "key19": "43ybxGTcnXR5kdxPmRtkMYYSs2VQKuH7A1m4DGWUq9GnNTbY8bnmF8UB6UEi9Nq5NSKvFrxdphbbDuTPr9viouPm",
  "key20": "4EcEy4dgiRHMKmkiyovPPrRVjjNQQ4Eb7EyFWD8Nj5Z5LQEqwc8Vddr4bu4BZjh1u7soSFCkY5qAwTfzNxMFbFKF",
  "key21": "4MS8nMFVTJn2khj31epiD19U3xr7vxnmJgspmcF9dheE2Gk4PwAKDigNm5Lb3Kkptw9Lpfb7kU3DU8KPQPr4Y1LC",
  "key22": "5Lnt3FzodEknc2REpkwrARXrLDSvtkF9cUwfiG79X858d8fvZwXwTF2yVEZTMvZcDrKZUA35C4xoVbg1SjByNVKG",
  "key23": "eXYxiNpiud9PCyVaX6MTdWweFpLiMuQzAEg1SYLASuEZgPjZAsX8BBPRnWpuooUqkfsH9Lm8ohyCBFEQPtyDyEu",
  "key24": "3h3goomzLWeMWL2gCYghQCSX54GQSfszGdxoUa9UhPpDt2eQ7kTvi6QxWL25goxEW6kFjaTFhjQsM7arBSVodqnR",
  "key25": "2vU2BSg8E8v4uQhM1pYj3tSrpvYSWxtNVFpbbo4zQBrdTrgdAwWhL1pE6HSWhN5CJtoG2WYtZx938vSAGkFGMiug",
  "key26": "5riVsqXwVQjbfDmaBVf4ZZ2Bx9mxxeTX2rbFpP4fAxFwRqesQbmDuERTdK7v6J4iSHvnP3dJN6PJTGWZ2RmYc8xT",
  "key27": "3TavLjGmvJJZucsLLnaEYbRqNuqLcXYP4kRSf1moiCC99PAq72LxZGa6DidBSGJKdMd4FwDufWLXu82hENaxHC5W",
  "key28": "5YMCJ6zhpfEqfvGaod3ovDGitnrrSfReQ4sDmRfCAqTmsZPiKyht9FXhk8uNYZM9yzZyD7CSbbcC2fhJdeSB72Ny",
  "key29": "2ZW6G51eK4MzdkyrSrnJLV5f2uLFS1rjA1K2CDtDEJL6WJJvBrfpJHM1uiy6iF5f3UjV4derFfVv24bBHvsKeJ9V",
  "key30": "2zjL6fCnHAr5YhSjupzrETogCDX224yof6QV4vXY5EFatkLHB2BkZStyBqUtGgk7gZRymMsKWoeCP5CVHtojczwh",
  "key31": "44sM7RnDqyWFwHdnftA8zm2ivScLb2pwWePcaHTYjp9Xx79n1LgbmWtro3k1ejfM6jQWZCcFfsXfVmC3sbmfo85E",
  "key32": "3m28BLV1KB2eLqCzo1YebBa6bszMxcsZ1umidVrWHfYhEFuMUUAomiiqQEywWUcpPABQxQWrZyR9PARY4A59fRaV",
  "key33": "3iNjSmgrz12c48QwWbAey75yCzPJEPg6mhLiHfp1pqGSogcAnnLtEHptBh5sZ8Kr9sUzp9zDtcFGrj7F6xh2XsxS",
  "key34": "3Qu9G5t6vFTWeV69HeGdAqDaeDEy5odpzDmiQpSG9QArMqFpVq7Ugdg5yaMZEF5VNdNeCo8gjqByEVCSVqn56UUJ",
  "key35": "Y3pbG1vgwZyhQH6fcHCGS5VgUreWsPV8kg72ydXKMrxVcLhpETmx1a85zbgexetRFT3wEiKQeBw4D6dhQ893Ln2",
  "key36": "4BTVVSK2wEx1oPEfruf76YbE3UJD6KjzaB9iu4zSVsWbRihvVUb2zAgxG9cjYfSY2mnMmiKTpu2H2MqSkDb3P43g",
  "key37": "51FPyUzr3AChoe42UbiELH8gEDjT2LvYBxHKSu34HM3WqgDwQBc9QaH5PkGVAFG6STmHzuYUQJZ3Wk4fGhXJ7F9q",
  "key38": "4Wwmb5PhboVN1nNU1cTiU39UbCJsz9J64fsxfLojbEhu76Khu5r1V4uKZikWHirz7kkEPGByyp1Aqm4hp7pCJ3F9",
  "key39": "992nqYE9n12k843bozgDMSrowEhRQhbTcWD5UHysK778NLiDhNV68sJjDC5aypXEcF62FGPbZap8xi4Sg9poUwR",
  "key40": "5VQ1smVd1TMuy3QKjnTRMLWJnCcCtBZpRvp9PZEPZEt1GnJHAZsC69Xg4ktgAwooSjGhg5qiFmuxE6WzFRQCiSSa",
  "key41": "3BJfisekAWpvW4tb4EMUEM7hZWx826s8UepmCJRrJNgmKyV72jdCPCZXoT6Wmt4CE26DzyUsV3J5xt5D8cJ8q6T1",
  "key42": "2H7eyAyCPQUaRTEqLJDT6PxwR6jWjAaWDHFHQmYnx7iM84gTidiHgRro2QqFnfz2PYHgaJrYVYmG19Spd5y9ozKF",
  "key43": "29UTtxNP7pB8yM7ZG5N2rLzGJz4kheLAexmtp2MkpEM1P76pfnVf2dmx6TpgRH9SoX4QCBLfyY1c3ewLXarpjwfA",
  "key44": "2ZB8GsiYZ3JcqiCQrTKQhRivRmvm8zZsKiRVzgSPX4xYzkHPeUfTxYz5QpCVk9mW56gFavFGCqbeZwELZa3rG521",
  "key45": "XiagqG2yNrrspaA4w9TmVCwVCsMAuX1zYqUHkt7AexgLjh92BEX7iywLZCzgqMV8YbS2ZzfsyL4HoLizBjWRZZC",
  "key46": "3WCAnmKWhp1Qec3eeLNaKr2biRpDAdBysxQiiH3hVjK549X6mJ4HfBRNyE3E7otBgm1nhQr6g3TmzryBt75Kpg5r",
  "key47": "8yi2tSNUscMq8cf3vdFSDMncBaWoKsKrsX3TChJAAJpZ4kMjzvVByFEM8gi9WD78q2WZc2hKLkwUWKVqMXJK6gP",
  "key48": "48C4Z34neTs8c4q2UxWaPBSTP77Y7sNzF6ujCarjaAjxMUJReoTmDQhQufzngBCuJyqhFvdaM4vduVuENUKqi1zm"
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
