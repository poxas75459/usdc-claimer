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
    "3qnrHHUX45RHyVjZo68WpwrfHBqGkC35rrBDYKHD3dLiNrahSd2AU4dTtaiMCV9AeMfsj3EZU7hLAUdL3sB7EJD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUsJ3YumiyYXrqvnYrnjLnqUAV7Hpd6abGhQabARsdpk9mwW1KKMqwyRB8cqpAnqRVicbYPoNmSsdMoEre6WtNF",
  "key1": "4Ck6YwvWNf1SwdSuAB7Y62myyLXjwfr5qErYQ2FauVnceDP3YhFQSdN2XL3m1iqjPxqVDi2ashbusLXYuiXfGwNc",
  "key2": "4Ke3raajpUWRpvKHQQqgixprEZnESzvoiuavXuSfVst55VvNCj4tZ28tJq92svMb3yJ57zisoLyHBBup6jSdxEZ9",
  "key3": "59gtDFQ8x6KanCEgbvjfsJbsjMhryVErLUpBwNwMYJg4G262mTS5ty7ovpdJfuSssCfywRHQzXsfx5PXcHjQizZa",
  "key4": "wLnGSwdHerJWPbU9Md4CFGu6pQ8kbTkub15P1wZ91irStdcvDEx5sqCKuD2uNfnn8opWoK91rtnnfxmajS1SEoR",
  "key5": "35RUjG7g3PhT3XyqT65kPm9Pm4xoMPTskZwA4abGH8WpJv1yYmN4dtTu6dMe8wsZZYs7P4CYfMSu9G6cHrQ1JpKP",
  "key6": "4R7zLkUznYyriVMW1kDDh9Q4mYdC7Efs8XvomCEdKw7oQSrVmPNVLwRA1LWA1zhvcwJGab6nHhr8NCh8yvGsUaSp",
  "key7": "HTa5CTLFrMLNPWguhmPZjtkeGjpmdvyb2EQz1X1Bvuxr3i1qmMyoRecqJPbZSuMrr1SQKP5EtACWeRqh93wgEjZ",
  "key8": "3evftUSKACgAbU9EGpUxdn8KkYSwMJ95XN9QBqG3gTsDxLu7Xk6dgfnfFPnf7rbFLFch9Pe5DRR4eQEVWhcc4i8p",
  "key9": "4sBoVRvCZyFU6Q2pcdn3aimspuw8cHx66x1YU2hQooK2ZyML9wuT1XGanAykyFkepXRwewuGZtHtW9Bt6w8Lg9Mi",
  "key10": "w7FmDhjX1qr5s8X8FEhqcam518bP5HMJxUvQ5UHbkizaUDR5BR8RztqBSyxogj1pMNLkgEp1nUMm86mY4DGAphK",
  "key11": "5EPmjCXtrsoJRpSw2TpDTJVSDZk38FtLmufyy1DbdLQ9B4wdMnEDW4tyvL99pqtY1xu6DYsSrkSLS8o4x1PNr4GQ",
  "key12": "2AgysbdK14mCxU8k2f5NoSz8rpkyAPJv6NUu9SeWyV3ChPEXXFt4nqUqLmc5vXgHoZx1nWLN28estVetn8XSXj3t",
  "key13": "5HVuYmkt5GUUSRV5MhToGNnupzNJpXWz9taRzq9V2pNS3yBBjmJhKY1ywEt9cbKn4xiSPq8tZv3ptLHeF2FfJAwp",
  "key14": "4c8hd86ivUKeFq1Ki5HyXo6Ady28afDFbp7EggmShuam681VKEUCJzQQuPUDrpgXPh5H4jQJgH9nm7CWjRpqYSa7",
  "key15": "4hAbcuWguwKagaGrJCse41wQwk2zcZyGAqdTVfxUPFojtQkP6FQRRf99m8phgNiBRp1bc2yoPgS3hTnS825yECeu",
  "key16": "2RemqFGfvEuZhaiH1JzGQJiFgEPr59pfWJ9dWYnEWaZSpYZdQhGbSKawwXxbWV7WhqsNefF7dzUn8Rp2rTJxNJmR",
  "key17": "4BGR6LVCnPMuq4D21ME5S7gCY9byBnJJsEbqvtmchAsioPMue25eqLWwhck8tYBEnQerXobq2jp9aYp6dAxMG9u7",
  "key18": "46xSkadHcdiif4cPVCsWEbkvfR3nS4Ri7a33kHPxQXqZfRzNbg5TSA8fjNwjMLwkXTvfX1txjrJcHYUJhRBQJPcx",
  "key19": "5eExRzx72k2fcbdoTEP2BnEJpQYtbXmvJ6d4jeSQY5xsbQPqf7x6F13uZdbHT9aCpJnNMtX2hmJLwViA8q7DbeW6",
  "key20": "32WwA5EzrJrYQvVqbABRVVx5SxoR3Nn6AgdGtYNWnG5H8HJmZ93B2G2AYRhuiUzoMBqWCZa3R8rxornVPtUGFmSZ",
  "key21": "DNFkT3Ru4ozKSSr2baeUj3FwtYy7mbangB7U9JzM4rAgfopw3jfkJ6Y4C5b6rEp6jbEKwfArWGjTVinrrq5MaoL",
  "key22": "5oNgMztU6zd1GxFarHzV8TqvfapW6KPgZ3Cj2HHgen8nzkduYHCHPgk2AuperfSAkQCn8aQGYf4tmtvaUfNmNNeH",
  "key23": "2WmXQH3iaj9qB7XxsMnkxVXUU6tc2z4PQCzoJaGw16KL6bpWVhWFpLPcXDq31ktckxM4LS2WfYY8T8qfKfqkw7hB",
  "key24": "4bMknU2mfovxrRDsHHvqq2nexCEFHmq5CFrBg2rSHMFjEqksQfhiaS7TviKFFNpfL2CkETcsfCYmtd1B84diC9ZX",
  "key25": "LWDX2nspsT97xDkXCcZ6HuKpN3SsjoGs4KEPtroFar5qoUG89QGnv24KGfsVq4mRhjwJyAEbmCYFwZXBGUqoy32",
  "key26": "ThR7wfw1KL6AWybUVJsDdPGGxLWvjaKTUgk9ddcdSbLYUSbURqu2pMokiYYN3YPbDBNNM1R9Y55fDVN2hARHGUy",
  "key27": "qiN57Wa4JSLRG1Ya5dvMasMGjw1ejNGHzDqkKyRBSeGh7PoZjXgR9Fmr6y62QzF4SgnaXL7JDgGAzgvmjGrREqj",
  "key28": "sz62d7zS2hZN2iDL3eSBocsCSNDjj7T4fRoyYe2Q3saJG9Fe5qyEgcy8Cef7Amdf54GNRME74kE3e54mLtfqtie",
  "key29": "46DFPYzLhFWAQebDdWJiKpUnHtsrVypfyt1cbCRGm7m2FR1XJ5BBrL8K1pF9k98cLEWR3vSZFBvw1uYsKhzAuxcm",
  "key30": "4PxYE4b3eguVRxmHzsCBTqL6RcCp9oU2cuXxN2WrZ7phga24HV29GPoZ47vvZbAQWGRz6kM5X417vL5Pbpyh72Dx",
  "key31": "2UCngMRvZwkvuDDsG5tRKASkNPSgqvd4xYgo6WJiWHLHMojnmYsJwoSQr7bz5PtuyNQNcy59YRuB1LtqmgVBeknz",
  "key32": "2Lawj6xWpFG2GUy1LB8YVT5EsVEFMqjP3en1MWcxVbr9ZVFjmRokkdVXs6TYdMELGgPFkqCQB3pumgJpYKEVxB6q",
  "key33": "5GLUApeHr4NidkPrd2xK9DXrP1nx86ticZakqWzQcPgjD9sgZkSMnatZWrkwsm3dtFHhUtRbVRxGv2LV6LJGD9i2",
  "key34": "3x8UiE42aUjcBnQtnw3BCTyumbJj78yZSap7T91K9aGxXUNshJ6njNr1vSAxbdnDaD6ttghNuSp6whHLtD7DWYVc",
  "key35": "2BYHYhnHhGfCD3RUWZnSwEGkivCxJNnrdA1gLTwDsXht8cULYDTHD7WESSe4Zrryahc1M5V6A1qkMAZsSZLT4fUB",
  "key36": "2KJPkvSkadzY6Hjj6kAjTZeUce67Vv95SJdBWumi2Sm2MQeoxQ4TkBt9zL5fYydm5yerkjdC3mJtQwfAK5MWG7bL",
  "key37": "3tLja8nBhe8PAk72Vini4uJnkV8FXKYPLEx6XBrtSKkNS4bspjAXXrvbXKUFHpYjTo22HF8x34weYBvgPoS8V49w",
  "key38": "VaTiNTnwh8C8F1JngFt5VESi91hDa87BmwVNVBHNWfJisDhb8nUTRa7AjtxFqz9HZ3g64ogWDekKst3NeHBJP1J",
  "key39": "4my2am2jpAhuCXWF5s7fEtzp7Xy8RepEtdV9j1W1PoDvgCPv52YDJT4HcCpsRip9NReNVQk63cj7HS59CxxpjZ8R",
  "key40": "3Yg7NxeZ9ND9iNUfi9kNsNvWwSFMsqLn3bZN2b7oo426zNfavfybHkqfjZwYESASCvnVc1kKrjgvtZnHZSnsi5Go",
  "key41": "3pSJ8AziN4ZZwuwJFVU5ySQHWeVMwEVnVFwcqvEiWiKNzYpie2SQ7xFk4tWpzzTVccZpUKYd6SYpLerKb4aWkMmq",
  "key42": "J3Yrx4J8tM48HwSxVeyQCavsD75y6YG9gLKpJ7sFd3gBdtMYbeBXkK6opsEL2dHRaBnYPFdErXqi6wkR41ytLxi",
  "key43": "5RvAG4aFet3igxiLqtvoHJAqK8ZJSaw6JUy4u9ayDdUdSYLmv9oJsAmvQS3M8MfYmz4r5FW95LAv9VnzwQnG3LpL",
  "key44": "2fNauku8o6e1JU8i72w3d5dsZdctBkPxitxKVbaPsAtvbjsQ8k3fto4ZtWNrfuQ3cyzHHZ5wWL57w9ecswbUgmcd"
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
