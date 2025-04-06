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
    "bDJDwp3m5PvgdJXJtBbu83hH9cABQH4VstsQ6Buk51U7veauopVkXrbX67NPSGMPDV8MY4tVqaxip2FDAsNfkZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ktgrKEetMJ25DVxsogB1r3nde6AQqSStan2ab5JrUsJMvecGfgvPuV7bAZ93pqCTXS81bibXHz35BBMzuydj22",
  "key1": "3nXRxkkmp4nrVayEZH9oBs7iByEAUJUUw3eW12hjbquBt729GbL5tsoZhbsX6Au4gm85MjjTR2x1eEKpCNeWZvBU",
  "key2": "2sFYqpC9pFsqnt93Mndv63aDXD1fnqAZ9U7e9TdNiTDhmzKEh2BaugaJfFVGGaXGxs54z3catxiPY6NmjMi5RFfR",
  "key3": "5qUSfcWVppasU9dbzUCiXKzKbt4TxETkGSnsNTmogautT1Uzfj5S8b9PN1GosgRe5XMEbTb6SXoCvFFpyt6d4yp5",
  "key4": "3dmRr8FsPBeJbnJ31Rmaa8DSvs8eHM2JkWFbN5tnAoKqoNVJf97zj1rgdGVG5eTvZxd7UyJcXTduMHe5QbR7UMAc",
  "key5": "5T1m2jTFnimBXEyLK2Ps2rVbpvzYyoakerEGDCnnLTLJLefH2kKQn1sEGAqgjX5mP68G7GZWWpFKNteaCLFvPLL2",
  "key6": "5FFPvkykfr2MQiwznwuwTSxTZQDwUJodzAx2pKqxAcHVAkoKsgnATzQRizgLxy3YJMUNnefqS9yvoMTjt25oWHJh",
  "key7": "65HKWLJXgyzJCwQbPvpRWzaGX1Mkc4Uecf21v6GpV7KohNPrgivod1yY3DL95go6NhJnASyb5FxQbfUDsF4itdFM",
  "key8": "5DYGPhPsTYhqcG6njsBVuVqaSt2P8wGkPXf9hfVdhNf8PJhGuq5t5GELiS2SXjCRbEwzmekgzQ8Zek5NpqTpmDrg",
  "key9": "57NvB3ARNJqrphpRNhjSmhQnrpDNeQ4VuKT2hZcaETZ1hkK9zZNU5tAGLQx6RhNXGRmNNrEDfLuSkvZqZHQFoRE1",
  "key10": "4sCGjUnkFiKYTQiXrtt6uRrL1rapQibu8Fxrp7W5c8rr2o95uX7hbFqEV2ixVSTDBSmDRRVFY1X3DUbNm8r2vbL7",
  "key11": "5tuntzZR2HPd5XXu4dvtnvvSJ4zVZ7VWYUkCS7ZD9unk46KYPgo2RTxfLVjnMptKSZLBq2qcNo5N41JJv2ubgamb",
  "key12": "488Y1LDNCr47UQi2khch76YE6LwMbq45V5EjRf4FcuYWY3BgT8G19zVfTNmvJg5enWkNnknxGUzVfjG33YR8BuLD",
  "key13": "2Ed1msMGhRu6KVtBg5GWntLLMNEU9iNgdnfPsvbYez1sMzHELCatJE66frjFatPtf5qvjQ4FgaYe2yYh4krP8wVA",
  "key14": "2mSAQ7cUpg82Du3Ac3S5LAE89d2QEdL5U1FMyKiQp54wvphq7PCLsNZcBy74psh6KS8qDkRbzQMYHt33kDqHuEp8",
  "key15": "3PYMBG3govj9FCcczQwi3wHMpKa7QEanryYKWgB72xECXsJtmfGscjSUtToEM38hrgn3L4e23c86qVuEJr4aLKnz",
  "key16": "4g3p7CxRaPnUmxBENSs3277KM4s5uDHCjFm24Wdi6j12oKGroGDwDD39ydX59znjuXazpQiB5CE4EvxoMuJAPcWM",
  "key17": "4VTwft64xbku1qRE7WuPZDA11eMMcXphVeAm6evY7WRSNTzUVbbiA66aYBfnSUvjbGPZn8zkyPGnqrmrW75MW3e7",
  "key18": "3NLHe4Tn4kisSTPGkDCQ91PU7F8fL1c4SeG5VbfaZJWgzwb8mVvJNtGdZ1bsUo11SSdndMD7F532xaEpij5okihq",
  "key19": "4pQvqRoWRWigNKEt9anfutaw7Doow2AG6mbTUqvs5rVEMArVChdogq4sYaE3oX8AuEFp5B19r2NG1BrpvLMujjWA",
  "key20": "5VMLMi7GyruoLFb7ABg43o9JXEP3LTpZvSuPQXA9xV1zkiB1H9ANz26NgopmfuCSEQmazJUWLimpRgXT24JnsxFq",
  "key21": "3YKh3sCv8uDMRmZNyXLr5MCiCoqf2UsrEqHges4g9QLgZz2K4k7RXaRaJPFGSTyRyKRrBsgErKQ9A53jkncutLs7",
  "key22": "2zcFqsXt7BNt8rC2PDaKgWftdCrVQxUqWvxhS4WwzuH2tX5RNWPCzVvDCGC5JEJotBWDmECwruiBWUH6uwH2iPMY",
  "key23": "2eu1WiDtWW5Tp78d1ez57mexuRUGSDZCkfDMHnB3BTMg3QwcwMKLzQuCiPBXEQveWV4UQfCfRzwjkFDVCHL9AwZ1",
  "key24": "62cDBbZsXoJba5HDvWzWzU9H5qSP7HpAZCuv41ixYcx76HPx7CqrWFcar9sCLugFkzUiKQH6mx2eJfSGVy4Ewe8z",
  "key25": "3PbCrsZWd97p49m7LkAmqFMP4gCZeWEiBMU7BniCD6gseLZ1xJ1SN1RCfdYQmkDyD2sUGAV7E3EX3u4oYfGGQV5N",
  "key26": "5wssZWjraBwybq48mAGsqoCta4EVyTJwukKbovBK6hkErXhf7rrCv8SJTREXfHy3nAaNSzfRdGjF2HVs7E11GqtC",
  "key27": "5rh8fyQ8VR9QjZXtEG87t5xxE6Qaqw89V1avUs9XaKgAttR16hpZ1TGxRF512P4xp3ZpoRLqvQNZPNvM1v1aayjr",
  "key28": "5nx7DTpaM8JKhVnYASUgzRa61VZvmg4kVefTK5GZHQnKrfQFaQ7eEGR7z7ZA7UbspKBLMsa7TbHb5HXihh1KGsAv",
  "key29": "D4rovd6XRbYHYb6tAK4Ld4RKyMfNgVqQErcySQgMZxuzBXXVMgoKNMMHUMJKyeBRdDVuqrB4mJGCNKXKUphh6wA",
  "key30": "bZ4axdXjfajEE1vKHKbracZtZRXfSaoaRH22hNUT7sQyiZjjpDxJk2pzLSVqKhecHXiPyEKyK2RnoSdQERuAufP"
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
