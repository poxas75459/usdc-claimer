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
    "4wMTH4tP37whYE1Q4PhzXPgtZcMTVUMWc9X9uvxnrfvsJTDaSp83cdGDGGCGgr1w5Y9XT8Pr8KjHHt9XZ8hi2Wtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oHMdJDgMxYhrxGFRFsyrN7yphX5wpHUhd3TwPhRxzZUvRrxGVNkVSTGB6nY8Vh6x8NBnDjkPWJ8UzMjwZfB9Yi",
  "key1": "2WwvkxqHKEizC8AbhmDeAnWG2NsMRFaaeGnvrMcoqCbePkE26N6Z5Vc6P7oHxdHy59tdZGaXWtWVFmLo79EXejU6",
  "key2": "5gZFa6hr8RwSrySqKsbkE5eD9sQLwwJ8ph4uah8Fa2YBvvxKRBKPZvRwkBrvcW9G8U8DmXNj1TbuJF2W7zVrQW1G",
  "key3": "2rZWeZjbAndQPjR17WUxhE6xpxStAK3SSAm81tAZY7Yu8d6ux9FQkWN3fgPgUe6iac6zgC63YEGFGjeBcAZkkBq9",
  "key4": "26wvKdN8QBt3U1wHku2951vbKJN2ELGZru7nicvkPocMUqomSiHJJheosvS5YzxG14ZhcJCX9uNR4xEmahVE3yiV",
  "key5": "5Pr3nJbAhsomZi3fCMYZLkQkAp1Qh8AkThNzr2zECiPKJgJi3riDUv48FZVF9TvPzYUZhyC2jKPHVnzdEmLzmQii",
  "key6": "PG6fh1tDWUvW6L5xzwNk1mAYcmU6XVKtsWtx4DhhavARhBys6hcc4GJYwa52PP11wYzp5ZqgXy3wDPat7kphNvD",
  "key7": "2UgskQNSorCX7qwcPV6rrx5FVA5Up5gD3ac9Pj4NoiCzSLTCq4Wef4Dta5R3oZbrzR53usBeX14idRWGj6gh7ipK",
  "key8": "4sSDYWDztPws9MtQKqSbJfN6zLnByU1x8hsunZShWtKL4XYA88fsDxpWMis5gtcgqpvzoGSeuKA5JLSc9aVubYbK",
  "key9": "4noxcT3G7GUPwcmsZhbn5p1tSWHrivhuF5qskEtmFmAsyHf1TN2mwkyCbwH5cWHSYuUGfkjg6b1RJV28UFi7sNVP",
  "key10": "3SVNuRkARVi33LeFhDHkwP8SR3QmrRnHEFiBUcsC6MWq8enqyn4iQYFGNxBE2wJT128buFenuY5zR5qBGL2PpnWL",
  "key11": "uCm5ofqothCPfmTPJ1DjS2P4sKGVRMHd1EqQC4JTt16evQJAVxAtEg3QdWE9Lvd5GJHN2CG3Etm6QPuxLVFsDrT",
  "key12": "2KwwuoRy8oGNGNeFSyGDo2sTuhbebAYg7WbnJBBF524SrUbb6iHJYB8jjtczN1LDL1newhNetLGdp8zGkeC76YBp",
  "key13": "5Y5b6TwXC3c21Hrs8sbyHjPtzqEuptdreJ3oadbrujmVqZjq7PQgDfGAt8qgipNVR7N9pqoYc7WYfTwK43vZ9J4z",
  "key14": "2Bzrb7WGz5m4Q6dn4r7ZTHheTBYDPbmyUhEAL9AeaE1tTiUj9nPrb4FZGCaqeh5nugmkkUvdKXA242oNMmw89oo6",
  "key15": "5A1kEQw5gopywxzpUzBJ9FM2xofdB97FZxFmC6QgTmTKg1CY2DnfZiGnhbDp2xB4UUqx5TxXikDbu4P6DRwBQccz",
  "key16": "4KZAArovMmJ3GfqaidVZRRTzGXrerJgMuG5rprmon4aDyEPADp9CjZVi351QYFCbWfw5tbu6eHYYVLbavoGXEQSn",
  "key17": "26aTcvN6nxCf3C1mPPvRgysw87VyFYnxKiDgouWS6LvMxtjkjotWPBWDtpXxS6W2xDYmFC6S95tYLjtwiMa5jvA8",
  "key18": "48VnLgKMrz2uvArzwpuT5Smr4P5UaS31EUNLzyGFxX8rc71ovhVfvKLoZTppawjgB7LjpEkyAfztftNzRMv8xP35",
  "key19": "3mDuiGnPSB8dVqNoTqr1CRMzpT2YP652oj8j44cCrZBNCD1UcBxJMjDvkiSXu83EHRyHZtSCTCqhZmnEMVo2vUEd",
  "key20": "4kKaCYn4HfuvyyBDLLNsfSF39JNnn1BHPK3FkCRux2xUymQR1DoMDzE7Mwz8CrVKrnDhnEvyxgfkgs4b952mFtzY",
  "key21": "2bDvcA2xKe5354ZfsbDSUimwRTPEgXs6VcmGPkRAJKMgCPRBc55aTBU387R1YMgCxUzWPefsP6G1QTfgmTm1RxjZ",
  "key22": "3ExJn8rRBAFBwNDEZ1NAJNKtx3ye3cjTvhcaiGh5xbb95azt2wAfrG2fsLzeLBypgeZNEtk3jgo6Zc21ZJKZBw1r",
  "key23": "4AojSnxzbh2zEhLjLMW3pAeevPpTZNyEyy71N3f1n7YqpCcghEn7JPWe98byK1tELrffucUeS4vEkXPiKvQ111w5",
  "key24": "3vTaKsZ1kJQ7RhPTjC4yyUuMz7XHioGntTEUqob7wemjxazhcxR7zLNa9vKtLKjBDXyhgwZ9KzUnsFm8Sn8htX11",
  "key25": "5AwhqTkbPFNnQCpQMSmSZVheorcHyarAG8zN98SMqYZnaoRTUwU8WJ5JovHtFTFhXuaBLmj2ErNF3qpcW5q74pPE"
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
