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
    "5BkcVSpaF3Lr4f34qFhjXXsgFX68z6EyaGEcX2QLru3Bn5VYcbqgtuVP9ptUr7Ra5dUHM54c39ofDXyzFWoXuxct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BC6ZdhgD5Na5tttPnEKsNruAzC4sPTARn4cDTdeTWQMXqCTEDhE3QzjLLL9d4h7FcB4w38ooHct8az637iWeoeT",
  "key1": "2Aab4LexdjQzeATqU4SPJsYoc5mtfeJskXVxsJyma6usUp7Ev3wvN8Jef8si3MihuhJswwDgqgpnHdWvdhbi9Ts4",
  "key2": "4bSc5y4QwyULWPq75B1ZYT1jSD3pXZk1b7ybrrWtcFv9vFmXHNYmt2mpgyF2j6HP4q6m6hQaH79FVzCPjGAeeJYr",
  "key3": "41SAa3xgpkAsCXEZF2bcGZ3btqVUsogoWJEzSzwFV3oFahrAgWuYDHgx8iToMmfC1vJLurVAHTkmyAn5WLKTHAhS",
  "key4": "2SNTVedcriheEAGgNoVEMf4nH8HoEbmESb7tZpC5bQRCz236SAS4LbLingugaZovS7Q7unshTr6wpu67NprbAtRb",
  "key5": "5EgeCPzL1nB1kSQeEMQgUEyUkhxtLV2F3t8iBzwbSJyjcAbCTALtvEsDbEMYm6wqgAKvh29RKnpms1oWX2ViHMfy",
  "key6": "4AeG49cB1miW9vcWF2c7DpKgJ69w18P2LYV74JVvh25Fk2HYXNaUhcMAn4BEKkLcSbPZnoeV2TZbKRUemWTaEi4f",
  "key7": "5ZPobjZjGEmJhRfrYMamRdmPAivP4Ug1g4RLpUjsfqnx5wX1VwLSr2aqKZDkUxzYgS3swn92Si9FA2um5yVZBNhY",
  "key8": "4bszjJqsye51FMh1aKJqW1At2D9RQhffoW8R3WhxSMgr4j11ZnKLMD6CddeetsMq5VsozBxDVkBgrD6bxE2dVxEE",
  "key9": "2FubavPSYXma6DiFHfEFVSH1SunEUuA5CbJTcs2itMZBE7CYaA488MSASwDiRZJFw73w76WuZ68ERy8tWHZDdpjG",
  "key10": "2MEaSY9fyNkze4Ts4cKPvjRKNxdgUZTQt1M4aB8Lg2sxRT6WJt3GcKfbzRkAZw7x94ECd2NNicxbUf58GJ3AyLHP",
  "key11": "641nu8VZ8LfHBVF9scvF8f15aF6fNXzCjCL6vB3L6Dkbjoc6ZN6MqCVaWDEywbSQ75kYrpV8gHBK7ZqaeBTr6HHZ",
  "key12": "4qX4bhm64SkNvWP1noMzHGbff73TWp8RSj5PEVWEdps2KCpp5Fjk3S4UsBq7eG9rdrL3rLXfKTKGebnU2kgyjLj2",
  "key13": "478YfFi7ts9aN4Fni8V5MvKnS7nyhzaetdXJq8tA6dubn28WjZH6qx4RxMJYSsNG1ANWbuY4V6kdzVokeyz7mk12",
  "key14": "5yqMumRsFVuVPthKeVBYmEPEW5Z7XdpPEE9aEJT5jFXUHpkXNxPEagEgcuDuk3AR8xfkWQaf9YDMoWwg1KUhf8Wb",
  "key15": "5UCJRa8KU8iVPqsktzfuEWAhxe3mYJDgwLBS7gfRgzfVaGVZhFRsyCzwZBXiebq2ZwbNLAGovaPBirRBeFVpoVkm",
  "key16": "2qchvCGAGF9KnUPKUiWWLiek6o2KfughEh5SVTgUfgoYArMAbib88AEALqkskRiJQYcvCTNrxfp2mQ26epeey4R2",
  "key17": "3T8dCqAFR81sXf9y3pk98ddxpvwMSwrNHAR1Xu9nBhTvEjxYFkEjedzGpfJD33uhw6V6bhqyZmDumb83L3q8diE",
  "key18": "7eRFXXisS6bSVmmoBGSUqaoyDgAcJwnR6fRhRi4k5JYNXhFchpB97WXqa28e85VXt3KHNWFpZyaB93ewjoCvq7x",
  "key19": "2RLPSqbdF8bzomwHyYoT2esGZmGe8sfnmANt1FNS2yMWvqWhWCT2tTkeVhLcrmwz36iUeBUtY5wMFJu4J4Hyqcye",
  "key20": "T3hFDD8uoLxbTfjonfgaqr9y6CddrZ5jyK1rqMrWVDf7PTvjixR4e9DWGWcvcURJ2r3sna5scFgBXhSTCFCkffP",
  "key21": "5H7BkZt2vYjARfN9nKQ2AWLhwZkdwtmcZUDqtbRAkM4o9mAZkUHrws7CGHSJkTzGt3VwFt2Xbwx536YA7wNttZpt",
  "key22": "yo9a59AUdcz74LatpFGEH1UPrxd81dFXB1vg3h3hAspFE9fKveeJcQbcPpCfWnMZZzzzM1nxaouCUvqe1AgnUuL",
  "key23": "2xGRwkpHKpdtxs8w6Q8dqfBjayq5iJ9CeetzAEUWAHYkrBCPXts4Su2Amm2dttWgmz6octHKdutPYQLRszyTKwC6",
  "key24": "TGptckMHieLYQP4MM5n79Sm6GNJmQ7HXeH6awHWUJwZRRddE8AhDqzs2DG7xeHszKFjEuyjaHRtVJHWk37CoaCc",
  "key25": "4HykXiu4bzwW9LX6hr248Z3Ay9EUbyGtZoAyXCJPuQy71pP6mMEtAsurbiqMc5YwRsBis3A7cdgQHBBSdong2e3s",
  "key26": "24pqxCEdNKZg8yYENyxW837YiDHmrKjhgUwRuiREDCsRVz4pJoo1udN61vfPt5nFjPd9HEUasKYPLe6uVKXLyRsW",
  "key27": "33pSy3Uu4iWkGLAhcHeCbKAKF79ZXnmnKtRydT4rjh4tbmveCamLyqwd7tvByA1LnRAfGjHrh2MuJEkHQqaNaWr8",
  "key28": "3SdtwDGgXHHS6iqP4GqyYV2b7zomkGMAGPunoFadbVVvJoRqB43vKDc6QKkZpprsmh8eEtAgmkFTNpHJ3ZNmUcrq",
  "key29": "xQe2JPEcjURPQpb6yUebYzmpt1zEztcK9ob7t3JrHNhW2hMbaLXa5bnwprTvK8Ej5ex3MusqfD9bj3cVmJEueTs",
  "key30": "3VNkioapvR2vrkpRHawZR4XCZreqvimDke4NXBymDbPvi3TDtcQxvZwHsFMP28qcAPEbdjSn8SPV8SVYmvzNnQRU",
  "key31": "66dR6xWq8qyBBPRtRmrfsyEWj7R3M5EdhkF35WRNL7BJmjrafkQt7gW2iJ2QmogxRBTmPTCTTLxAgjo8z2QfEtq3",
  "key32": "2sS62bCPMpo21zfJs9qWpcb7DnNRCqKn6MJhAY6wGXqv5wWhvjf9n8p6vudEXMaAyw2pvy4BdSfh4Ei9WK27i2Pd",
  "key33": "2FRT8EPNkeJS91Z2avHXnVEVziSN5tx9vzau2jUof2EHqeJQ3wLTsBFXS5q3rMh4859vU1PSCvGu2mh35DQwmVdX",
  "key34": "5hxHeT7k8zibKbWTetwCqCVymeFBkrbEZ7qkPHcgszEe1P1h7USrPKUBVBsNHUiEhYkioSFPmaCJCrpiZ8D3QZZt",
  "key35": "5gYngwALRXtWnv4Ls69SXfpKhPbiS5GCMbwW81A63L9B4qr1Lr73hZpCeobjsnm6qUZVkaki3DrHFeSGBbcy8sVA",
  "key36": "5NJGbehqbYVyPkghe8VRcDbrp4DdUcetaT8xSL3z22zg2bMV8v296gmiJNhC2MtVoCNirBzgbB29obXuQD5BUM3h",
  "key37": "1fa1N7VFE51Sf2AxG8GPx4zLGoAcrTvpV2aJBcqFaLDoAXf7joEvP1y41GVxMPndEyh9BPMw2ztSgoe59gXkHnD",
  "key38": "47iqBWuR1x3TGCobHWDr3kg1oy2DgtEotjat2TUpWv7LFsRBcWzVRPBVegJcLtc2DDBWQptgnu8MGpmGkPffaw1a",
  "key39": "2Y1ej998tBuicgdNa8pmU8bwsGNwEBiVMBGwcj735dodXnWAes4bpvFWJPJqTbs8uPy96CgNheu2LQKizzFGxnsd",
  "key40": "rb9oqgxjUdQv2fyTbNHEb8wwnFJfebgViko5C5nAt3D6eFCnmKXyTcHuroLLdEVqFNrXBR9q7eezGzH1CNi9G14",
  "key41": "2WzaxjpKzjTCZ3oWsCxTDCFaiMKdLnUZQqJFTGKH7Xu55j1QN1Lb4mmJ6BMaFFWaRL9FEngoTFb3Fipc9xiQbFBN",
  "key42": "4pNV8h6RijMLkzGzyFVzbpXw3xWwxoBTQ873J9u3u9tHYUt3hz7N5W6oEHxxKokrBcRjfr5SF2foqmEoERxrhaC6"
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
