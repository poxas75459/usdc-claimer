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
    "5wZZCzANsPusV9vx7Egef7GSbaPzRF8TQAbf9FwZCBqa8yeoctrBR3DuUSfrZ2kFqvq3ymwkyTdEFGKMAPZ4GA8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fD9Vu9B3p44LGaYofmxENA4qgrAB5CdGHzeTnpiFCJ4W7kRDyUwNSDLbgPrTwFERxaScdnHviH5bSeYJYcvo44",
  "key1": "4S7Uyn8zr3iZV7zdaBWUSDNVxHtu7wW7AneXeFkVXYbu6Cy1BPP3haEf9hAg5r5V45CJVj2vrTEEkCw8vv72nEuX",
  "key2": "4Cbv7zDHbf5Ubg9Dg1oHm1c1tD8hpQkE5NEJmriCycr5erhAG52wt62Bq2f6dRTY3w9nuDGYKqiiknE9YpPZ8fix",
  "key3": "nXqL5uKnzYABvK4ZaLokMDpYiuwmK6by63ZawrzTYy31MttB5tQMHN3vz4DUND5kjMC5EHHg44Em8eR6JRm1o6J",
  "key4": "5mAFs7maGGZWZ5t3X43An2YrBMuzzieaEtNdW9EnC9DxDy8VTUUWb4VJN6TGjPpSMahDtAwAc41L3M2be5khzGYS",
  "key5": "3GiWUjepCQtkJPEQkpiWLDMtdBHXvx1UsMTHit13qzY4AJPgDMQZvMjEzp4JmgXLagofijR9PCWr2QYwas1ej7Qp",
  "key6": "4w8moEgG5v49varZsRAj6SJEtBwTJav47dgrVwKjYN92DLZpebQhbQB4gaHiFmhWoQZXen3jE6M8MRXFzHGoifB1",
  "key7": "4WpV4DYdqNFuTe2QpivkDD1vLSxaMdd8LVaDL3C9KQ4KBMoT87PxK4UDeRH3pH6R6oeP6QG4fCtpnvQSMgyDpZPD",
  "key8": "2SMuXnCTVZ3uYn4H4QZoGdZHFhkvLpYLnN4DHTCaYXeoSxarbcQJZDLvUQewfKjC9QnE339nzjBp1uavWvzusV5X",
  "key9": "2BenbUgwuSgcmygCw9D6fRAHFdaNUDG9YM8ENtkQdEKq1B5dbqzsqjr9gHnSfDLH9fu28dM5ysnFzmqtiezzQovi",
  "key10": "54T4Tvtf4CpxReXKKutsGrHtbpk8Zsm98ZNSuqkrZqKdZQCZ7XwEPkthQK7vhbVubvH1qWrnWivjUiofvnPtaXnj",
  "key11": "3APfWFukofpCzEhWUt2x6quiDp7GHDC4aPB1nonVqXEkJrgGPKDJQ6c693FfquaRMtEkAbKaMhrNa7ogUvZBEAnC",
  "key12": "64nuUBjxFWgphv82Hnac1Qe8dJ78EtTs5iWtCb3EDnfCjUV9Ppy3qNGLWcvj25fvBPLaTf9j3HvWBoCBV8eGcuRL",
  "key13": "5LvScNfrn1tuT1gziscxacRjyHgveMGGQxRknEk8oeDMhWsdMLmCiqUhGD9bY7aSCLgmBV8x8TVQnTyh7MRpag2b",
  "key14": "2T1yzoQ7q25T2WhSD4JC75xp77pN4q4e7vtT2MGzxCKM2THLf47o6Pw2amcRnFkqWtcGL54vDavYmrXbcx1U6sah",
  "key15": "o7mKe49EzinyJKnJ6AWxQWTxs4VJvwBR4TtLZqAniiJSXyUaT9QxxmbshMC1TFQX52aK58m8Vr3zjusmuMTG3yw",
  "key16": "zpRWLsWsME7UJcpnfkN1YgDXkXdPfF6VShzYRUKYTpPV4FW7MyCetDDuaFVr3pSBHLQkoDLNikWs9CBzNZepVc1",
  "key17": "3bRUvKj3KMWx89ipKfMCaH4T949EnQHAuRzaFnRQRFY44AKDX354YSFyv8P9A7nWkBwdwJxP3pqewsncVc4RiDkZ",
  "key18": "5yaZsBzB5E8T3VNZunQMTzU5vDPpT9Ueys7BykUAJsE4Tq4cZqiduSwb3KrTAJ9h6FDYuCbguotVL2AzYRp5Ca7D",
  "key19": "5KuoEfNW1BAwn8ZnYtEARsvBJCZnFohnBp8c8Rqw7n4jbqFPr2Q99r2mGWR4tE7cjo4LhuoQAH4F9DTzD88A5kxG",
  "key20": "4wU1bmNzLbFcCETH2gwd2Er5PVXxj9Hd6hfYgwuBzKytK5F4dFx4S6wZs1x9cqSYJGfsGexE2C1AgS4JEzsfqSJq",
  "key21": "4jGD4ZdTe5Qk7YAYJMopGTMKgQnm5wsk7eoWoyZA6W8NxK7GjhZwJCxgbih8aCWSacJVbF8KTZqE9EKCL2thHQUD",
  "key22": "5XsCW1sQCRUokyFZ47ep7FUgN3JqYg4jMdx3nWzydVJHw1zWWtn13VDLRa8BkpKxwAVFhLwuDSnkB9XtBF37g5im",
  "key23": "hcsXJn96KiNL5yAxJtEhzpzMeeUAguSd57ywNCRWnQaTBfCE3SPyydEpXYxSrS3ettDRBj6HdgBfjRiXnmQtHk5",
  "key24": "2idfxkkXioEFy4HJ544rmgJWyHc7NL4TdN1vwhbVCRxurSJz3z8HFZkpMPyMMwwtZkz2mDgkheDtWooit1W7iz3s",
  "key25": "5f1jgSR1Hyp9vptAgsKHrurKDLFKGyGc2enm2w4EX2DApR9WvWJVP13TujVAoEFwuNA64h3tSyy4c2CAaZszpp2B",
  "key26": "5zbituyTXhAQWqoJqqaQ57CFtf3U7aBd9kjLdcTeJeqaoGuG5Bva31PaAW5yKTH1BjcoxnVhhLjnu4fTJuqzFt3V",
  "key27": "3dmKkCWqxw5Y53BxN28zMvyKL31ALxCcoj6pL9HZWWzR71ui1wQSfLYqeXLM9wWkn3XrP2iddpxDmmH26XE9Euo1",
  "key28": "5yke3BFVHjagkHpUqbbeNDAuGuKxFdZMEPNgMH1AAANpMNkJszZZaWeBfhnsmTCgKb384u3S8yaD15rFgbdndR9V",
  "key29": "uc51r49aUmatu5yWzreUW6D8oAeyc414nzhGqM4Ee7spcp2L6XreoigqwGDLnPTqsF6vYGwqp81o1uGjnN9iusb",
  "key30": "2ALJyKFTRrkznBvpETDtQ3fyBCPDKbrqQYtYhEqXZEMArFvnfA4ZzKmfKL9aimgQfFXEMrvcE3c3ZcNtJNFgYW7t",
  "key31": "5akJX1A59qEqsDYwkNoAtzCsxrAPea7gGwWpPYqnBA5L5ffnRuNvHGwoobHDE2ruEngC5UdJJn4ddhmRBGwTxK6f",
  "key32": "5yx2iLYiMRwWqPsHzDXsXcf2CsL3DK1jhVnK5ncMAKLtihq7g1xGSS4x82cNvSR11h8vXj4BnzZt8hap8PWYsuJ8",
  "key33": "wPQr3qe2xCvZNivb5nQ8JzzA6H5HKNNGbT3U4GcycXy8LqfHgySvSyLxkTAeociSTyjT6xQxVrNG1VcFzgKHEvU",
  "key34": "qMfFNBfm2eofvGoyhDqosx2jEa5yfPsZxR1WwKmxfVK4yaBPvZoAS8A3TpQSPnW3fKFmj7SBNXe2uBzVwKmo5Da",
  "key35": "5FUV6hEq5bkuNo3Yvd4nZEe3xkQVZrfUuDccBBep5ebknWNsR1NZ7585H9HE2wRhMPZxLvhQ5BrGMeJWyPzrfA9R",
  "key36": "2zcY8oWnKwLYiPFTA1AcPHTfWxHtoEoEFYFjkN7cebDrWbh6SVBP4ZgwLyYo9rdEKmpRLik6vuabymnhzvjG6EWM",
  "key37": "5BPNkZozCz2a3xqeAwaYfaufbAsFMMKTX8cjxzWUGZ4mv9GhDgcSHDy8CwneZa4Tft1Por4K9SsYRjkmhzLgUWtm",
  "key38": "47sWMydXtL4fc35K3Cz6axHKZQa1v5ufn5PiMALwsD6SqEa3y5Th2gctmTjrQ14Nd9K7DF7fqEmVVw3Wa9a6KmEM",
  "key39": "5cKVVeex3JWGPzE3Xh5cYErVXDTSFYGMGgDnxa4aeM9p6SHYQaC9kJ3gXtsdPAY28BbJpenD153U9dEbGrWAMmoB",
  "key40": "59nh6HYSGY9onPk75Jmtt2AEggvvhAyFKr4jziUCSbsKQrPmFU4vQTErctmDpcK2suPrPpLygWwjHjgDf97qhd9y",
  "key41": "5d9nkEJoTEN3AbfrfJM4ETAytSNarhNuSspYVwx97tcaAyfUArianAdCNLTsSKnJjKQudAodcixaVqyaxc1rLfqd",
  "key42": "4QhQX7Kp59btisM4qJf4gkC9HZpHDJtipMarr1UGAdB77zctaVPGFvrF4NkhUuRXqTXr3ChN6a7LxwvGfiqwixKB",
  "key43": "2jsbJMyubgQPRtDD9UakpGTXMag5qu9NCfPLCvTtEKzoFMAaDaGVGDWryfehLRNmugRTndFjqPoZ4inZADcQA4V2",
  "key44": "3uj17VFHDiiFxB5SyzbH9FJangGqp3t9K5AupigvYykzCrGvdUsDCa5sNdAXdSyFvSoTgjhFKfGqTByuMnbRxJ2o",
  "key45": "3SgcnqiSz5U4MBRn3Vbq6jrmAG1HjHEaUMXiSGX3A4FMEDsCjJjCiKddEAy1T4G8szQi3i1vfLbrzzN9iVkKrGqv",
  "key46": "46skmoUvZjYD2mpG6ChX2gVay7KygT3KdGwoHEdq2i5uKzQR6bFzvDam1qWzukBKq4Dis1WA5HFWXU84329dvG9Z",
  "key47": "SEFniRDMhusi4wy5xyrwA86Wmv5pyiieW7JXUjThUd6MGof2LVLGBt97dadXyMBXYczXZfHX3z9JPoUY9gt2Y1j",
  "key48": "3M9mCCEomRPVsNnUAzZMG113qHgcbazGKJu3dw8HsT7ReFKMKAKaZtP84RBzcRPodM9mgfTMLfd2TW2J2QJAzVq6",
  "key49": "65o1GmeLSGViRDYNPv6mcNEan4cp5QdEEr3n1dX1TrahATja3Z9aAA3CawjHxvjGynJFDB9Q25m4m27UTDYQmwLp"
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
