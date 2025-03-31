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
    "rXQMUq5zPcfmCoXAxCrV38a9NNCnSbyWTnutwY93U7kWxcAH7NUwMXQFfQGjBeEW3xd6kCRXNvEuxCicXddQGm7"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2ejncJU1UkV4vQT5kMkKhZitDAxQN1ufbhtgu8SwCvZSi3E21ECbZep5jE923H6cDkpeBw8PUQHwtEGKzRKPvurd",
  "decoyKey1": "eDPZo1UycTCfgffTtqrj3cqjY2ztYR464ueMjutgHVGjRD3kgGstfaz4d8PUzGjAcvEQR382gspVvvkoth1biAE",
  "decoyKey2": "3mu1Ji1hL8JVMmdKXof4w5dTnE4NLo2wWSkSACCZWmTxZpuQN9JaGhzTUstqMrUGEDVmiUshD2QPCxSSEx3W4zKz",
  "decoyKey3": "317dcnM2KfMSwm3XyuqCmWaYnhjh1uQVGjriW7Xb6MkThkNPnnpvb34D7HT5jazgvaDxn3JErMqKu5aBDpkXAviL",
  "decoyKey4": "2y9YKDfchWvbwZLaRTo3ma51eYCzE8VGAGDcxqGPaREp69H9G3vV5J8SDECyxSyUDYb7MosWHbUDpUTTGHcELTg8",
  "decoyKey5": "5fVbJstYDyYRyyd1qbHcir5B5MFWVP6uXjmg5Lu4CMvux7boT7R5E9fZt4a8Ts47VsEQLtNiiX8qE6KVs7TDvAfn",
  "decoyKey6": "5uofm4jHh5KbiTH84PB1qXwoyvYRXce5KcQY16qZ2SmDJN1oXPVm5D1jBGNgzF7rrsdRHhUcAJrsdwaVHX41HEXK",
  "decoyKey7": "5jdHRgDn2fCxJjNG91W2hcCMMbv7rqnaFoPG8JJFNHSWBc43B7wCtE8RrCnQCm2QYawc8utotiGLRuBFQpJq3opo",
  "decoyKey8": "44pvC1SsEbeHMDBoY5nLdoobp5dDWLkVMszR8L6Rh947Hd2FkYofjEYHNGg4e5H4FYQw5oPhtsGuaRNVBMz8umbb",
  "decoyKey9": "5X9Zg185NGHKXriPGSrgxkKN5cwMU2v72yHyMuez3iQxto5KtpbAMWXvbLJmNTytTQoCX7TmjYPH3kxMbz8sGM3S",
  "decoyKey10": "5JZknMJ8Hb2oJxouPEiZywtF1fegzZmJ8FndCbFw3KoaBCShmAD5P5P9iMohBubcuZtt1ZgRwPDzbZm2EC5zT1YD",
  "decoyKey11": "LoXCGckjqKaBwuioGb9Qhwak14xoYErRr39hAFYsC5jSG7ttwbdDYrALoRsFKYyY2X4U6PmcCf3u3LBBVR3M1BK",
  "decoyKey12": "P5sXMcbnJjoFxihRMha8aujWrd9b9yjSURMfZ95okoj2recwapqgbmhDKpiAHjFsWKCkedNALUnJzkm3kdnmxCW",
  "decoyKey13": "G3F1fzfQzZixJgHBAi5A3GjVcT8V5n7ZzKzKJcQhmbeJM92d1xq341ZuV3vjeHN1gkmgwtAybp3ZzyAjV4gHQxp",
  "decoyKey14": "ye4Txi9qxtCq7K7kD5XAMbcPtGdj9V613P4cipyFiCesDTqkzcmjit8fNJrPg8kNwG9jExwL3Xi6pexFEd3gkVb",
  "decoyKey15": "L4JE1cyq7J3CB6EmaUcrvcSRue3rjfkfGUvTBTwSgJfiFmVqWm6ZBxGYGJQrQumnWSTcxq9GUUHK7SCZGUjnMjn",
  "decoyKey16": "63N668b7dH3zWtLgFg35EGHWzSyGGj4pDSMJpXioqTPZmxBTycs2tt7jqoZkwgGxgQgyC7eXpvF7U7deGgd216qU",
  "decoyKey17": "2YUoRPV8zTD2deWLz9kwxvnyPxXgf5cKDGWH2m99rCmkniV8QYwRDRQNgzDtMQKjwCLiXae38vqtYpqyko9TXtMa",
  "decoyKey18": "2T9YgZHukJztZ3KwY3VYZvDSdDbRTDPjoX7AdmToKJK6hr2Lb4TULu3uRdGhjG4vsgFhqXYUoNsVBLgcqKzLS465",
  "decoyKey19": "3WaeEFYxAyeHBLk1JQEqSYNAsfdQYqGj9ZqwnJWe5gB2nvFHoeX6MDvebG9CbCphtYiyp3qxsfG4uWLrCgBPV29Q",
  "decoyKey20": "T7FYVZQLVRxFk9DoSfUvmLGumw39Db38mEa7xWtVztpCfHv6KA8t5g9aqw4ykhVCVdx5KmuTc5fXtGoe6iGrB3T",
  "decoyKey21": "y1tLe4KW2SxKiLMYYoP1AdHMhsioJNL5864NPqCmkazJSmzgZo7EJriEtriLqMGUrFQMdZbjbznZAzwEUveisv2",
  "decoyKey22": "4HkogMygmFeNEQRD4Y33AUb2XmFFP9yumSsBJhirN3qo1x2sE9RaDQqGLXQvavhAMMceqeScaqnCTfHaHYsHSrhP",
  "decoyKey23": "5yGGLVeQ3LQYY7G17NwDRKMgwNHh9CqLS676jLShKJGkueagrPSQ1pBa9eqmdXwxKa1X1nH5dUWwfv3JBHx6s6Z",
  "decoyKey24": "vpFGn726JZ7RR1mhhKQCngnhTrJFN7URj5cZmQhcrp28UY82HPYZpVnnpfVN8ne4DxD2WLsZatXUtxvUfoMdK3x",
  "decoyKey25": "3PvfMW7AawmgBbMTWHA5z5pjsnTAcE1o3htHzuEr3g1ZL1AFHkThY66KVnb4bBRGVk3KmDjweQ6Zm8HTqXX4ZB1A",
  "decoyKey26": "4SX8KDXYGnEctJU1aFrN1kMEzt7aCyDjyhaRktrPc9Y2W59mL1pqXNcHg1FET53WpGw4nz2LhvKTMcKK4NHNqQCP",
  "decoyKey27": "2Hp9AcZsV2TrMnaNTFp5zVfapBnHnRUskNg6dwAPBaJCNkE9bKakAs6GFNciKZBXgBopWB7jEUREGxLY9NqdLaSR",
  "decoyKey28": "29pigXpGMyyp7xePj1CVsGsbzDX7pVvBUx2QB2pESXqKR4jSdTU6Eine97CF1sJbGhwNCbXJhshjPfrdqg339dPQ",
  "decoyKey29": "5btZbVAs9fUqHH2izr5etPuMDpVJGKV8GXS27nUrMk4YW8xAa1AemUJPQK93MeHNf9uJ9cSzy3tn41SyfLq8hxGo",
  "decoyKey30": "23kgC3PkynQu7Kw499ZQLgChg7gRWsMGV7DeaGWDT9TizFxqJTyKZrw5dKKj7KfnXzm3XfNcZpL9P5AfVdLA3sJc",
  "decoyKey31": "5i3YG7SzgupLP4UttAxRWL5Ca3TdZUxZ8N1EqkgVjX3Z8GvR2NB9sJewT61n56aWh1v5fHJwwK6G5AfXnQvfojst",
  "decoyKey32": "Sy21qcnYFLCuey1Hb36BS6DrsFVfnTMtyYYYjCoSYdd9fjJ72xSVnUc3Ervay1nBL3KUsu7xrBaMU4hbc7FEc5v",
  "decoyKey33": "3X29HsZjTko5qRiMqx4E42uHLacXuZAb1VzrQtWxVw6Rj7VGYLDhxYhwDUyCof6NRbg2zjb491A34RJ76Yzt7KrN",
  "decoyKey34": "cLVkp382StSkxCTnnuLTy393Gw2wX72qKjQCr9m7df5Hec462tZtr16Qo11mBKkrn5vyT2sGEfamBJkUfwMoMVg",
  "decoyKey35": "4BbucS1PhKC2KZMPPHUpyB1Fpo45pp2GPHw2bzyBf2bioMDMguJ9qh7LEDLae2ypT53zz4AhV9YbYWbnons6Tn7F",
  "decoyKey36": "2AfXciJh148Q6vW68e396wx1LXcEZyah9pzAtp9jvckPwQnKv4yCxeMtXn6CnykFMMFWSpS24LSCYbmaAyZ9fGMc",
  "decoyKey37": "4h6Xrn1whpcQKy7TkyLrXQzauMWR4UYHfD6QD38bCGQTkeejboj3L2CSHFJdimuXezJ5P4zJTHzGyb9zzXzkENTc",
  "decoyKey38": "x7tQyKBefSqd3VMrfdUM3JRdHT4bnbAJepy5v42vkVeeBvebkezRWN6KNaCseV5KFtV1jtrg4KGxhxPEJYviM7c",
  "decoyKey39": "it7jg7nh3Nqzzow2XX2Bazixop1Sjwgz8MzrcpeHTXKDo7Mk3jmZgHRxQaDzHgtthUB9jUgSDGmcWqLEsY7ccGV",
  "decoyKey40": "453HG9BqSAcuQDS9EENmSwtatWu1poEvrv9fvhQJtpfBkaSupa19exWC2j3vdw2ei3ZEmfzWRsbe4wsbe2kFtG4r",
  "decoyKey41": "2f6XrEuMyEh63CY9PtAqFLDGLYcto7UFWFXqgSeDtWDnStPYYWQGFNYVUGuHwst9pEnTwicbVPfYGbRaVqs84yxd",
  "decoyKey42": "3YBthnxviEhWXN39j1QLNZzKiVRUCg6mu5b67hB9MT1ELmFhydaN6cLz3cqxxZhoJRV4ozeNJafcDS9B2wBBstjz",
  "decoyKey43": "23snP6xbTnhM145A8xNqa1Q2sXdPvUq4UDeCjT9dBwv2ReDh1YEVtg6aYJ9LmLEJgbww7TCVjqVFWeshVXx7gPEf",
  "decoyKey44": "32CuJZ9zgdfigFdz8pWWebo2D2kXsnipxZE5pyVLB2zVuJV29LKecfh1nvN7mygkD25JyurYpif465Xx44iPi5BM",
  "decoyKey45": "64GF41XWkGsERGLwHF5q9Hm2gyT3TgCjy1k3WeZhtJdPedB8KUEN6imxmmDCzi6cyDAxyEX94HFrNZzRK9F8jq8T",
  "decoyKey46": "5rU3mKEPBpxyfWD49EFwHsCun9eyagh5ivy5Y21JRtWvavMKSfE3JP8Toonoi8G5GhtuJ7ms6S8aPxiVrQqenQZM",
  "decoyKey47": "HkbwvREh2x9QL2yxdsmB5CkA39UMim2bXyiKChQyAPVgBqgXqbGZ6WRnqrGLz1xS8WVh5LaxRe7RuvG5W4ru5L3",
  "decoyKey48": "2YtPHtWkzfVWK8beVHrngYzcmgvDExMfGom6DwGt1WxJEbMcemaeLwAuSoDuL1Kvz3JzvKsVtRYNN5RC5be2HZun",
  "decoyKey49": "uZRVv8BQVYmkdk8RMiciqwvJkjU8RH87SMNF5SE29m2Cb7L1mc7rGqdvYmFA54LNv2dowkHoRycMcdfGstXBNWo"
};
// DECOY_KEYS_END
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