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
    "2Msa3HXwKCDaZUxLA39rUQHfzQko9B7uZhbLJurDxKR6wx6tW8EoZDZihsNnkihKMytXNwoHh7KRpS1bFv9M3a44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54j6rMRg8tty5ASPK5zo8S5KwRM33ZX3o9fNWzmhgN18muKnCQ7tVDUqEJu6Y874sgvuJrkgwkztEkddjeiw1ThB",
  "key1": "2CAM3EV5m1dX687iCvrYf93nfc3qrFr8eu1xPaMGnRa2kqnDNKGdDbTSueEh86uQqbEfws32S6Di34wHHwL1iruh",
  "key2": "4zmKCPeyqhiNB4UGvFGFgfdASub5m5QAwSmfQWUu2kx8jZbxF87dLu1X3vf1FJQ7E5nrdLCVksefHMLFgsQvhDMH",
  "key3": "DJpjBCD1zMZjs83GYXsmzaiC5vmCfNZNsNBgNUuKg39Jebhc4YAoVg2kKm9A6x58veA2uqPoeeMoxWM4SY3fno2",
  "key4": "4a2cyU5RfYdrFjN9Fpt6NsU2r5bUFEDyu63ZZPDHvb7nPBsMKd3uQEERkD7mUL7XRUg4QADe6zTY76b8hVYHFAuB",
  "key5": "3FaCGHL5cDqShcnCUiGafk8zEgM7JTKsTw71gpixiwdtyEA4V79hF6rt97bPnSTfojhkHfWZgWy7Tfpiiw8Yq7a7",
  "key6": "DkTnjnBPx8WMjErygmTKDyTnNPiMo9SfW1diH4DPUAzvf8Dc6AaN6nagrPBCoqGB3iCbZbXQ8hB5mJR61Wqtv24",
  "key7": "2QwqCxsFmYuASzHvmYKJ7HqAoE94KAXFwz3rAsQokgWm45H63TxYEVrZQ1iK5szHEvRXiECprsx94wXvBDDEvGT5",
  "key8": "zhZH47oU44vJ36uT9ndKWqhkbXCZhYukNUvMTpXMmtjXL3uUPDwKrU4n3hq9reJyKiES7rhJBJuuY2YiRxotfQa",
  "key9": "379A95Ukt9mcACprMBwUx4WgbsZ8fRiqV88kjsYgyms2PiHaame7jbYk9ofCL4yHSjxF12RaCDECsZtFcDuMzUyT",
  "key10": "3qAQnoESwTDG5wtzLWkZaNMjk2CgHJpTfmiqPd4qq8U31QPazXkHrxNAVFHdL4tR1xDF4GC6jZcc43B8KZTjN8EW",
  "key11": "3wsNVFaJQSkcEEXzRTviFLVDBASbiKhxUCRycdCKDUBdH3g5Kp8Rmm4zc9R6Qwb4UB5NB1sL3JCQ5fSZgwg2FEzv",
  "key12": "35WeWXXwJ1fog1Yav2MwQD1jAMo7ejgzGoH9fFuEN1CMU2ykzm6dHjw41CLQrddnxkZRqrmeZqTs9E7xpc8oTYD1",
  "key13": "4RPLjSMGVe3ME6YK8A4dwtD3kCgDH4UcxkRQMLEs18Hgujuifs8Dv66nvG8rVrTXenU85ZzqRhCX875drKJbnEPC",
  "key14": "kLijwSpaZcmrSfd9is4yGYpUhfBiiyAuUTX8S1o4Y6VqseqaGR2tUrMSm6pCwQatKKCtXFHqJ5q1NXAhPikKwvu",
  "key15": "3hVRYzDHfi5U9tTkmDaAQeVTyhUQBYKZZRESotrVb71gXtovE9CiL5mCqgMmBp4jGk7KoLNh41amU9sG1mRHGr1v",
  "key16": "H5CV7WvXLXQ9AEAxX9xSYbN8b9UNzUivR61uhimjoCGSa8c4XmBz6dPoHpk7QS8YMUZW21PRqmKnyzCnfCi9NQu",
  "key17": "3xX1GEsrL7F673UkCDaMVa9RUA3MMWkEjLEwDq1pHbm7EJuWvGABSRJKbHP6i725MBb1ozZ2aVFbFh7m95HskqWb",
  "key18": "4mvFmA2vDspU4AworceZF5cUKUd7C16N64nhcW4fNibTmC19N6qMxBsLaX9gdjRcUCfDvTZjkxri68JKMEFe6xRj",
  "key19": "64kLdoobbFsyeVQhBWiFjEY2ssoZmsLGukVAovrc2k6wd3SebLrCvZsZ8YiJ8xg7g3WUVeo7MUpBU4ovwop8pFxT",
  "key20": "4eQgaKVtupQdT5wWN2rSU1ciPyCJVHfnARbrChyCBy85HrvAqQzUou3Txc8NLYHMeVtBhQjUMZX6xYankzVkCFYQ",
  "key21": "5w3uy7cPaQnTjt3SreVCDr1kPFZZ5rGuq7Ntoxv9fRModnLrh9Fj9hLV3XSQ1ktB32HjQHc7j2foGsxmjZmvNBnZ",
  "key22": "2t9TeZ4q41M7dbzkBNg85PRrJHYsmxkd1eDRmnqYPKN2pBjnRZ7gP7RHKKaSUPM1KiY3zThhXcLFFbz3K5GDUKKq",
  "key23": "2qpQwy7bTztGTJxKgcV8mR8V3xuXUCXgQu2FskUgQU6ASdbw5CMzFy9BzvLhuKwWWDaLzQVDAySWXutYysPEsg8a",
  "key24": "4mviTkdP4HR9FQVchVibra3JEZhBA72MEMogPHqsCz8pABA1sHEdiFGP8ujqKLdD9r7HoVqTEEVVgnyAkNmDFTWo",
  "key25": "sPtRKFUv5JuAHTkbMqcaZb4V4rNHkmgs3d8tocXhxK48p79qxZRtQUaeAT8xeXEdLCB4BeDRHiWYaya4Tado43o",
  "key26": "LZrG5d7951njFjPtBHEAGPWhNhgzxCM5nQnuZ75zm8atj8CnSNRTACvLHKj2NhzAyrfEypSZqeiu1aLAm4K4X2x",
  "key27": "4mCT9PczdEcZbqNGBzgHGQATCdCyTRizom6uyYbmKGWz5bzSbjrPXAbJKT28g2mogdYPryKuDmrB91VcAcNrkhwc",
  "key28": "3rc5ii1hH7AkzaBnfK3N6ATuw1gEknx8Hpraaotdw3LNxLiQxAPzaob67zxobAhZU5AmqxyArcw4Z2djShUL8H5K",
  "key29": "36cm5Zf3JUKjjraaXNXWia6jafs8Yzz6jNZ4nuDNxYZt59UZtkyvECfn1ZH8Wzkk6jZe587afEPjRJfVk1djs65n",
  "key30": "5HBnVpyFnurwJg9qwpvpnZzaJ9uzmdQfeLuWBdsXD5VAKS54x2Lnq3rLmc7UitbZ9e1pXDVk26Rgx1dkXJ2HyBFZ",
  "key31": "5H1L5L6ArEEoA3CqC1KN3eiw57B48A1doD9ZQP24hSaLot31Gfpfi2fTBF9rnzV2ghWUjW5NsMKBep9kEQwKfFK3",
  "key32": "4opTzreDDFtsTMiSd74WWBpTe63WTVC14yMooEZTwYEpsx2waZNhhRuEHyT1NmJYjAfFcecB9pxdC49q75isDHTf",
  "key33": "4ihXqXi2rtwpJMiKSV6r5pyX5hzKQAYzQZ3vzUpU4D67m6t6mj4xmwTaWU3exvUTmBd5RWg974rLKXJP5uSSbjWc",
  "key34": "4849cqhsYdYqVtir73PfR5Z2HX4md1XS76zKE2RiCGtx5sXQRbFrx1b2VovxyAjkma16i6orAx1iHRturu37Uic8",
  "key35": "4kxzCfaFvk8YjUHeSeMvgePyJw62fMigBjJXFiiqrhfBnPY4jX9pos2R1D793yjTBxAsGARCrt7YESFBtzf3fvZH",
  "key36": "5JwriutRzsx3GyR67EsrcFdfvxgzviyAQ8fqPPDyK1oxGGSUg4qTuDM1Rk8m63gX6mHuf4iwe3GfCiRQpkRGLkjt",
  "key37": "381C98nUbw3iuyvvniueDKVQ36yZC1LV44QcZyHy9SAk4yRrGeSiWC3QVWQtAM8BZpYtcEkaxMoj3GrhBUbevrpR",
  "key38": "LttFqcPE5ZdWgD9xV9n7uVinYCFxGA8Xc836EbjxZZZC3YsgKoxZ1hoqHcrmbPsmjupAvSteKddmtipz3nHREfp",
  "key39": "3zJkiicnuQTjRE8Qx8MaLJAuYgjyruXmzH6gJhH85EiZBrvgsezGSgJ3yy5qmTWP2zXNKqb3kqTS8tnSxxitqucp",
  "key40": "NodMx7RwAamVnNbTbaERqNQc9JwiBftsjzxuJjuacBhxE7W2WojGXLSmDs6cAR9uaMzuBmTFzawP1UeLikHS4T9",
  "key41": "mZaN4c5yLeSRBmpYdgc4eUgHqUREmpZSnRkU2SWjez69NjNa8MozvxGeRboo5ir2fvFaFtBoNMdSnKbYBszyeF6",
  "key42": "39icG8esfG18hp5AASHZAGBy8yquCpJZucv1DUzQp2wmnAetDWBxB9JArjEAipggTWtTxQYsUJcvUt8YnY5XSKNg",
  "key43": "4J9JAaRd7Wih8FjvdjuwMKT2VygbNzKokcXfp1XTVRgWFXw7FpjRMqfESR9GBj2GTvpAdkjzSg1hYsFGU6fxbCE7",
  "key44": "3di5vNjg6RwUN1KVcGGaBAhoGGQY5Ek9qn3YnjxtBvSAt2qTZ8BRToxvbJtQ7WwkU78co52ysmDxWj8v8pdGuoHY",
  "key45": "UPUhQ2K2LN4nXD9XgUWrE6VdTrBGVQL7T4t2nnBcTuai64u7zVA5mJ33rraex3xDR5JSJ8jqotQqf7ABbXAxwsg",
  "key46": "37tFVRcKQs6buES7h95nuyQkWMgGTbZ2W9onpx8qXX5wZhS1QwaqQ2arXtHP4586vUyNocVo8KTqJdC1wRUiSHRV",
  "key47": "5Hof7KagjXCuvARqjrqPAUiQpkdbmMr55iVDa7UkuYtaGtEyj7qSxkPHNgGz41qfaocCQje56ionsGDBtgKHJ8aA",
  "key48": "3n26tj92g56Lt6NBayS5HA4TXULH29Ru8BVB8BzPVD3jGqNfep4eUaxKf5aYnmMrekDQCHkUXziwPrvar9vxTkuF"
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
