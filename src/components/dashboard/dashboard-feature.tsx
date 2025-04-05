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
    "3sW3UgBWKJ2NU9ZW2LKcJ1t96Nz525rR5YsULnVynHbodMXVVHscSits8avT8vJG8rovJixGyqXVa12XZ77U7cWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sqLBRakdD4n3GsAhckRFQ5gYHvv6BAgx9Wmj6AdjfGRm11BrdAjd51wxqC9QjCV5GXe3PMbHgpGUx6Z8KAWvZEJ",
  "key1": "haMsKfJXYr3N69i9SbiooS3BNsgXP8FVu55BAfs3t7oceYXhWQ42rJVKisf73EXLt3Pgb6brczx6yK5T5UPooQg",
  "key2": "64TkbuEvGeoNqqDUzSAuzUHuou4HbV1bMyCzfpfrpijUNP1G8vDNFt12434SEZxCU5VnsSkmSVbEcpYrWa11ENMu",
  "key3": "FSdCdPZy6tCjBEpbMw55gkS2BcRxP12fvpME8Btey96MeyitEvbfSnEeBzxiMDLLGr7CKPmMposid4StzCH5vqB",
  "key4": "gEH3CHhRieN8DxssjK51PKLEbQvF2cPDBsNMstyJkQ9Rt4neh2FzA74JjwXR75zjTC3X7FVyfPNopJ4u3s5mvUG",
  "key5": "58vUDQZh6tZR5uEdLyQkt3QvWvFw4pJmzD8Dsj1DFcepNEHtya9Sf2CkMr6hirhNXCfAgWJ6PuN9mHpHJvwz7Kzz",
  "key6": "5LUQ1NuFXdmPf4xnwamEQEcDfvSZs4z3dZEwQXLWCwFZTmLNGBFdpmobsqtoDPtUiR2mQKYdfZTrBuhppeMrndui",
  "key7": "5DKNdYowHciu9XzLnckaPqGuUHrwYwMZJh5pcY4cmpzyYxSg2PDF2XxjqsS6EhVVocwrD3uMKomkP4EiQUq5TBAJ",
  "key8": "3iVHnXVzLz2qE4gZYznZiwgAWKtEVRiTDWmKSFSwk5wqY6fLKheQyTQv7qnnfsB8xYkSLJdtL6VQwE3p7Gjd6uBg",
  "key9": "NiFnjWNZhYzpe4tkuMGmUCJN6RhhLeLjjrAynTqjmNQdf46WuTgajqNm2wx72MfSH2C3bmXnpCwkoeBYpeSMcxq",
  "key10": "2U1vZZMtFdUnnToqqJHNG7DBnN5NU5MNKFFd4HsbzWYQ7T8zP3svgVj3GXQ3pquPhbYkVee26Dc39VmNgjZALYco",
  "key11": "5GL9FwcpQeKQRkibMwT93yA2AB3VxBfi5nHSRzYRznSYSiQ8jSf4xd2m8j83Z35MUNXreyqMXWFEW42SDVwVi4K4",
  "key12": "4GSdyuTk7JqM1M2tbra36o2Fw2RUvUtCifzhxHybFi4RYiEjfWKHxATLbGGW2zxf1RnMjWiWJBdL37mL9s8ADCV",
  "key13": "3HNQHHEaWTyWhwo4gdJW4ZE7BYKA1GDghAST7UmHNwFxiXTiqJQxY7LqFpVxdFvZ7zUwJRGEzqESnNcdsn99dTS4",
  "key14": "38FAyWWc36YDjrhBT5JTMSKd2bH6ZX4yC1Un9ThTwpZ7M6yN5vLwGBSZo3pmPjSivSScFwXPgrJaPek5BJTUSkDp",
  "key15": "33PgFHc7B1ycRmddcChESc4awawk7BZGzY7u4mcCuUHkox19Vck8Ngu15nDM6eufznqPdwbBkD3vat13ZPSSSc1Z",
  "key16": "3QPMhW2VXkEtTSoaigMq9GRGQ6Mc2GjPt9uJHrWXJbXbhaWqxpa2RxSkFtvs7ZEDCFr1wqca3vvbdxsuysNGuQhe",
  "key17": "2gFyFfRU5kwDHmmi68YHABH3heCHy73bm8nAQTmyYGkfviMCUN1htoBUqTyspgw1Zv4YdCCq4ucR5QNugrRGip7A",
  "key18": "3Upd7hm7ayjKVwosjK84hKML87HtR8hGEaPpGERVBVtYnrD5rxk6RucqivFH5PC4ptExBAV6G3i5t79aTAEhWroM",
  "key19": "2uVrP1a6qT3hvDYCXKBH8d61H7QJR4vUeg5tdWZ7K8iJq851gjA1NHWgh8ovxMt1ySkW6FUboBVB4JwVmiZzR9SX",
  "key20": "3ea4KPZC3eyonfFSdrF14ieTWDRaxDMBPt7k8nfivZ8xiz9BKBPXh3ie9FbAPgyNtTamH5g2BEkG3pijfnMLmCXb",
  "key21": "61AGTs9NQDTAxWyqoHd62ZH585SMKNUDtHcrVcK1Jbo2UJBxfSk1oa2F5PCTuFvUAdpRBKXE6AxjimiKFM2mjZUN",
  "key22": "2EVCLuSGhAoYkANJEfcsCdChSB1GQsBaTfrriMzE6qfdas9DNjCt4rx5DZvK4PyyLM1x3gmHGA5A6yAgSARJJG4r",
  "key23": "5ZVCLz7ejE9LrTpHshmTCVq5qiPVuMGciyK6HdJ6R9iUi6F4VuHNMkS2YcFPMbBjEyij6oXABG3stM91rEf2cUgB",
  "key24": "4wCEki43yi9DwVUmrv9XbwJjVEecghj4VZsuDT8yFc9er4gMddcKPV3dmFg9VuidKisU8t2L95kcyCnGvwU7yP3H",
  "key25": "634bEg8e9pX94aSVoyXsMSx546DQh7Jyb5tjz64S6DCZ2b8f56Cjj5J1HHU8qtT2zigQD8HiWn3d7AxVMnkC1mwk",
  "key26": "3VwHU9muoNtdPXMcYV8mabwgv8JuwMCwUCm75ZU3uj5N24qvCDkzMJ41zGGq3rzfbvRpXksq8fZc4tkZAAPTuH6y",
  "key27": "5hDnKQ5kabXSgkpNvWfF3eMn6LUN3241CG9hfzjYrszXLKUACSfb7FYwTKXHnEtZBCZwHzAtByE3cCsGwFGjEv7e",
  "key28": "3XiWfrfDguN6hRzawGMdNZqK6bshG2WBtX7MhaMdyMx5WN2DA6qJpoEsEcZMnE3ivEMMd7PzUYkYG69aN9Mh9yAN",
  "key29": "5RCWGaaGyNBzBpbBgaujuH4ZF6Cg5REL7MG8Gb98AABaL3oAwTYCQQ6uyYozNwK9UGpeuEPMj8fxzZLnuL2N9ex6",
  "key30": "2WsioHYvXnnhxrFuvX6c99hNNgTXP9jupMYu5GKk7zMahTURrL1WxiS42teY2vgorSeiN6J8HRe2wtnZfSVNeJ5P",
  "key31": "2TxTFS2hbZueKcL9zr2tguooxV7qntK7neLyBJ4ZW3pTgVsfY8XshRVa8wJ99sY2ZBHrHNHp7QVucvifcn4yNNLT",
  "key32": "58BNVwtizCaU7gDsv86EANjmKcn5ZAxPDmgy4XCr54tmohWB9vofGacuTPnAn4K8rvVi6TaHwWmwRrrrBtMzaBBc",
  "key33": "4ZCDWB23RfpM5ifyZRQSvjMjGFHuD4hjXoWA7ZhFnjwbLKpi9fQsVUb2KGhK6QBShZn2yDeZ33CjuTj6ogX17GMA",
  "key34": "3AE1dWRWkJU5LTRV124E6xy1fSTcuSr37KHHALd8Qi6JEoWdaUr5piAiQqELW3ez16xL2Ly1A9VdzBXb375kuv9T",
  "key35": "3nFzPtPVqACQsfhLsTsRtMwrsjL6UySWxUcQoUahuegr4trSk6zahqofVSrsadDwv3aWuRVAxDGHmuZWrypDona4",
  "key36": "2ZQ8jmJpKNViamCPbzaKhr93iFwhwkktxQ53WHiiPE9ASPpXz9ZqupX7fZraVgpW7B2xnV2g6NRGBCxMZZVPK2h9",
  "key37": "4gPP3qFCzrn6kphTLXCFn8SrM4e7nzC1V5ZdoQgosfuUTVDKoC3SX7uiy6ZvgqZVB94tD6Nf7hfcr6P5Nu2cpN3L",
  "key38": "38TtVrd7mKxe1oEFrW8kMkD2Vg8PSELwoL3mzzW2yNc1hruk16iTwEWNwQy6UXtAbGKoGmdgJtgViokAamv2UrKd",
  "key39": "3rDF9Cbf4DRXoCyYkxNuko3stzL3Hx6g3baPzvkHU8tEcVC4baG1eBEn8CNCAXyHfdf5cBdN8fSDMSUAMfavEuwF",
  "key40": "AjpD8D1tDisxSfDjKTRS39uEPCFpAvrD1dvghaZxXYZxUfJJDStKFN6PotwFMDaMeibQupFtDgq1pPfueWUGY3J",
  "key41": "51XdC94ZEPMtWgtgCnaQQaAvEKhKnGEW8CJgxvXHCMXDaKdeknkympxrBankXU92satS8ADAAzVUAGsRYMuyMS5m",
  "key42": "3rs8FzDf7xg2NgJ4kNntWz1xnoQjbgJqTHsiPyn5PKdunG8ibKBwZWbaspedXcDBa5xn16EwgvATGsJPx13m2aJS",
  "key43": "5cB3xHQJr36zvwfa3uxetFsmbYKrcVgT2F3L6ccckKVwNuU13nVoRysjTqUbTjaKwoNMeFEDzB1cibkdvRE2qnfC",
  "key44": "3sSsmrLPxTSdYVzpLBuscyckrnLtgWkpjwENrw87T6r3CvMfJWuvLpZMcxfqJVMPBsLyPkT1F6oaYsGkGGix5vnh",
  "key45": "AhoVgb9cGUSUk5Ff61mXUpb1ixRuQf3WT7sMVZC7nFT8YfngweS6DU5wWw2z1MwZG5wc3u7r3XU1hG9va6GoMZB",
  "key46": "5nBLdm5jGmnTvCEnqh7Hvr29Y2Lu9HXh6EFau85WVawSoqT6KVxPUD5j25KxZ7Rc9yuWhEfK3qEfvUnMnYXwWhTw"
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
