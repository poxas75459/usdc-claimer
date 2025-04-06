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
    "3kQ2vE7ZsUiSDeHLYhhdamt3FhD9EotPdsHifEzALWvGGvr2qoGhW3fsHD5zGS5xuCNHjfsECCPANVCTj8kiZCQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ufzgtAsY1N86QkpZ19XebXDav2dchFzpzDjmAB195kQpbXtyjzbZq47Uxbf6PFRtf32DY74ktettxEkVKcUyDXn",
  "key1": "2zboRd2jZ1CVapeQ7crzXJKe24N1gqcJ8dSgMbVgfHdEDyEEfoPU9B7WMCKqdGp8nMHRb3vfkMqB4Kinxjz6nT7i",
  "key2": "DMUay4Hov8cMy3b8qK9C8wcKuEWnTMNrRGEJBVSLzuuEqY9g2pPUFta7v4mJF9vhALFQxzgEdLnpyj1wvL7K5g7",
  "key3": "2t5BunHhuKYC8ZitqYwZmQZv9QDq3wnWf6V9mzCBLvUUEhM7mYunTffsdhiJ9KbpaHuZkvCV7s9okoK7t7ne9YqY",
  "key4": "3ZCraBNj8BaWkH3UaxzJxEprorcGSeHN7tJupzqRJx3ktLx59M4vxUkEu3Cr9AT9BHBNHo4vxMDuyu6bC1Xf6G22",
  "key5": "51qU13qqQU14AEUYF7qZoKw7txJBeGx7iibmryzZLdjUwSguTAH6yDBxH74aR2Esh3zU2b4ejv9rU4Q3ma2erGas",
  "key6": "2ALL38FFAoaxHJMP4Zvu1KUTEa6ECoNTsuyPXE2Mn7rd9oy8vUEE4wVRV4MKWsfowizkMN8NiNwaR1iygL6mTrWQ",
  "key7": "3WxP1w8Q6pvPHJtGEpVQFNGoopwri7fmSJQ1zVHsCtuw6vHNULprfTb4PH2WhWMRFcqiFDwoZzWVNKZB9hDWf44V",
  "key8": "2RarK4JNDrTcYf7MDPhh9cLxb7nk4FoEkpa78TqgB9ihRZFjQvuyj7ScjuDAT9UjAabgtgu6eAe1xX3EaG5zt8qP",
  "key9": "3TST7r47M6rDmwojeztLcrvB6t8K6EkNGGz7P7MMhu9R2kbWRU7YhCqg8zrtvDBRAsJUBrXaCY8CZKpQ6oxJmFeB",
  "key10": "2vuePvvPHjwtZT7AAQiGbvfXhb9W2xNkkjLdsDaXEipttMwBF89JXixJh1fSksVPgHQSV2qKKovsuuUpoJxM6eFz",
  "key11": "2kfgkNmuSBk3RnKjvniShErFHwuRDDnPvDQ2GWfbJhT4LQrhTLuSypj3y8gLo3pTxCXJQYieuE9ZMRC4eJtVdxSZ",
  "key12": "41C5PkaHiHXK8wQZYDp917d9RQpzito8qBdPbb7xPJCijfCZVrJBJm771dy9e9R2ghhchFMJ8LGL4MG1Bntmfdts",
  "key13": "3hfcmu32t4YmWgjYRQGbDg6g6Yknxmk2oz3XQbkSYZ3DP9QksFc9FQKLB2bBDwAFPufLBERCMTnE8LAKSMLs9yY8",
  "key14": "4er9Aw9UbTQDFH48kjLVYnsRkRm3vayScoFR7gxt16wS18ztohbJM4jkRGV2hzDJKzweM1FZdLQdeejApdrytC48",
  "key15": "3Z3EUXjLPzvVTfx4xECkrAjRkr6bJF3a2gMuFBKmekYNzQNuSTQp9oMw72XCuN3LW68kTL3N33zkLZhBCCETjfpu",
  "key16": "29pJnHoLX5JD3etMVn9DbHMeZUtLfN3fkka5nq4LkL3Z65sRpoUPAHmv7iNMeENSut3tKfrdhFd6t6VoDL2CqQ3J",
  "key17": "4F4bzRyj8GYVWJQfK6ZvnT8bGAtxVzccZXxDsHMTXivbBgA5hVSGSrQ9MwbFX4wNdUWfLsECnA58DYtaJsHh3CSb",
  "key18": "33QipKixV1b9tfyfmaVUUmUeNZPNYkBNePGKFq8Mpf2qaaGz92kEaX4aUESgbifz3mXns3zh4bVMBZXnNvpcjzz5",
  "key19": "4JmXjfsbpW9HosgqcG9TQQ1P96i23tDacUnF9G57JBR31BboBD2uncv44wrE5WJWPoRmP51bs8FSrLinmKV3Lyyu",
  "key20": "2T1TEYqYFsq99Sx4wZ5wrAXdZ4hEDfKiiNbsMnRYJ1e7mCdYTN1GPTj4Za5AnkJhPZzmabztB2aViRhPLWVjZ5H8",
  "key21": "52NaDuo5Tu5LY24rikcv37CQdyaZKMm7EJhEEz9jXL6aFo5BTGXZkaXEiEb5hv5AN1ncFcibQGhevzs1uyeCnu7Z",
  "key22": "4Q2RGSN9nXGExes7vUGBsEcR2rPKQHi4YED8iJ5pa4GfY3DkDzSkRDYkapyUFbyDh25zApTGgzfQ4QSkBgqactgK",
  "key23": "rDF2QrjyJH3b9eV5GHw3T7jA2w4GJPEDt55j98VHEdEYbgi5ubyBbn57Dh4uF7znLya8KQBv2bjVZPRVyU6YUVZ",
  "key24": "4c9Rr6HHaz79kdpJE4RaUWDiyWWpSQzmvdDJpTWiHZcJmEi4Fp1gHgeSn1Ftw9krp7178w3yeR3pekKTew1FqMYi",
  "key25": "4onA6iq3SahjCdZzMtPp6byBqsMHzGJpaRsNFzC6z8NosDSEScDYLxLsA8pFjCLBKFrGkhFJMxLYtRbQSCcmugvh",
  "key26": "5A4DQqKUp5SYWSLBcUu3BYzzXNMuKcyNQPUzUDqF8LWjy7Hd5Y9bCdSjt843yxhTKE1UZm7gnUX2Mg57Pi8KKA8h",
  "key27": "2W7RFoX1hrxm9dxNWeizmr1ESGwWHkS53xnGDoAiT38RzcA5HHxfoGMsuageSqSF9KQqp1fC33Gvx8Qne7FSHF84",
  "key28": "47zx7gJW2dhC5H2vD97o61orTowHW27PJ3tREu9b6dF1srzTtMhGMTBxqkL3FgbPb6cFQfQb9YRHybznafqK2TDt",
  "key29": "mr8gnXiJ5wAJUpuFGgUQq4V8PtWHgKSE4aT2AMsrb1B8RnvDM9ijJ4iBWVrrxkQfA1vynSrc1nrRNBbjUsJ8Pm8",
  "key30": "4cEswmn3XCpLEv8ASp6qHEiBY5b4tpzgzFgHG6F9Zq4J8sPrMq4JCUNzZ46FeRXbBTvJ59fPGdjSKqTmQp57U2KM",
  "key31": "5U1qzhYEhVk5xZbP7riMwPBAizD2meFTeaJxVxbr4EwestSQv7P9vsP4dDCeug5PMBLb5NWLRmStxFEjfbibsrGa",
  "key32": "3x5dAXJD3LSZctMzJABuiKcSrjUwa3cydsv8EbKuWoaLapnhrmUv3KKm4WCtRztNPhU5wjAYBHy9JbB4MjrJym5o",
  "key33": "5SdBER6zJzvNjN1QJEqzzQ6uoESWC4nWrCEXSHLMemEg1gkQzCFKQE1ijVsUHyESf2MhgLhnTMDDaQtocReRTE26",
  "key34": "4KvRq563T6NPTsCQew6xf9HEtre8qt1hFmv2PSXS2b1s3ZLF9xS9oymycjZYnDYGQdCYZviJhygY9uCkXo9k6FwR",
  "key35": "5vn3XNyeRgcqWeeAfwydfU1QxZ2n61iAukyp525iSxzns4rSZvvji9rcijS6gp1dK7Mj1WLiNwLb3UUoMvz4kjtT",
  "key36": "55Eg5BD9joxDcDwmqSHvcWTSvw2Ni7RqoXtsmcxgW76eC32iuTZRBV1XkKjYcr6gftSFhTvAJi66WqPVrsb9xv94",
  "key37": "25SzzpmzU2QM6My2BDHccpjxyyY8AURsPrUn8FgkvW2CL2zYkyXd8xdBxtpqCAbFkGKtWGAp7SBewxUmoyqHrPT4",
  "key38": "2arsHBsFLFoLPpPsFKYUAV7pxtbG9Avf6p7sfqAqCoA2naQqoEqHpjbawHyFro9GEwC8Ksz9BpU8J7eFX5hKaEwf",
  "key39": "29B5VXBKmdHCEj9MrgkEUv79L6cAUv8PwY5fQumv1iSxiC4rSvYd1BDTxNwYLUy6Wr1tvdQmEtZbtZM53ZzJwMTs",
  "key40": "aEBHNmofHX7B9C4Mop1XCRcmYgmuUJvqvJu3sCfqcvqn2wqrmfpVUnPujZaiSQubFU9n6s9BztM1j32vUfuPMos",
  "key41": "5b66pvcderNudGGKga5ysQji5ne58NsP8LGcyyuE96mQredJfrDhbZ1i9hJ7Nwzxrxyz7JBonE455vKMzdUAThvT",
  "key42": "2ynEWvccFmAVyUrZsPBD3nD7MRtuBKWntfcMuub7uanPqwgsFyNdKGqsJZavK9X3gQLnPbAwMwbmyjzj4PxxCT9Q",
  "key43": "4iA2HLJcL9AsYDA9WRDTWj8ofomicDZPpLQKTLU915Fk1FFTedmpmP4dtoTDXgY515C6o36335HYNHWB4FaXSRNe",
  "key44": "4NLKLVhtZ5ZV7j5xSW8x8nMqdrJrgYAF52ggp6G3N9JSbMSk2pjNpoKYiKrH61CrENHofN5THM3xzM5cLBNNBEAY",
  "key45": "3g5hm7PrfjSVYYaxjg5WJbYoYBpZvVg33Y7PjkZKPVyGsMJ5RxtkwSWhpS5rSaCE4AHWaUy6acpSodji6ZVSTYiZ",
  "key46": "2iyACe8rqGLgTCB3d1iwheJRDFkS3rJsQAYQDdZk6Z4jfGnBMJVJQJ3KHULawj4Svf81roaheDdqg4YrsvgKcuex"
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
