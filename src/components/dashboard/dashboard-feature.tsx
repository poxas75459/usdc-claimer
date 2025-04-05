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
    "5w55HUooHtWn9UqmQV2WeK4MgYZDBJFTTfnX7QuqwuUkZTXgy4bnBNxfFcWfJg53K2JtZ9e9mvb5PG5kqbowQnRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8Yu5rpwgFJJocWrTxfQi5tEVtkC98w9MkomzsaNqkUMd8wjRKZjTc3bmLZy1aCATho7X5Bd3JvH2XK1g21TM7G",
  "key1": "3MYJ5R3By9h5zuSRfwE8EBkGd4CSJR9hbzz8CWy2L5P4JmAq1JNKfG6syfyHTqMZdJr8c8XQofyWHmEbptvJ83Fe",
  "key2": "4KENh6HFraxrnqBK84u8t7ZpfBuKGmBENKYMjKsm3jd75hFm5h2abKVVyP8DwbkHREkkLFrMXmuXwnUKxQekcPrc",
  "key3": "hSHB7NUrXYd7Zh5arK1ffr8HKV9VnLsZ8M6ighYmYtQuZiXL41YfbbUZNyWeAVdfeLcJ6yjM1yM1J5EFczXcvhz",
  "key4": "5k8V8yYgGci85AbgPiY6GpNPXXvt7dEy4NJZ88bjwBCEb9dL5zGGFSYPgJsHcZVLxzW7XMuHAWP5sFh9GCeZZkpo",
  "key5": "4HEqVBu8Pc1PhaoLcWxcvnN15FbRkUbvPqWXH2eJrrFG4gsjAT9irBdw2spSTSheUPFSzEXX3ScBMGBJbTfyeY39",
  "key6": "38C1ZpnrvjpRWTerL69xuULZ74ps6oBrN3nvV5xNW4cfAX1P5Kq19oe5tfj3UawzD6ipaF2X6tzJrTmeYT5DkvPx",
  "key7": "V2oCUg2hfkA6tpVjhxt8xkng1F1TGKNQch8JtzUsgTei4Zkq7jVMAdpmcGPqJBQCcahcPy3LYYSEtgpBJmesqWd",
  "key8": "4hdUhBGwd2DEECxT9C6wi8V9wpuBcWkGc5ANhW29c7KhLe3x5J7oaM9aM9bmPtdny3ibyMcrb1LmHWfRBgHRMiTB",
  "key9": "5N4WGvLCs629QfKamW4CFjEL9g4qTvHmbHUPk9DwcSfnnDSa952hD3ENXp7bjQhjZsVMvDb42bdeKwTwEupULzmF",
  "key10": "XRw8tKfNRDNFoYnzURy3uMcMNUiwVq8S3nL5ke5YM1wt9vCPX5XzZxQWUgXpg8HY5LhssjUX6hzLFyJ8CLia2EH",
  "key11": "2QZJKQqNf5GQb7tW45LJ5xLy87dwdkMcheeZtde1GxM2JDhH1NmNdNSYG5Pv8XyPJ7VKBDwynEBQMcKQwebWuxq3",
  "key12": "5jgP2M3r5yPvtCQFGL7YrzxJoXpHqVcHmKEv5m2Sxg5QCum6eFWs1qt2DZ6YLAzkCa4t3xda5HKuEGXLnm1AZc2V",
  "key13": "2Sobmh1tgikmXYiFv6me83MaqQYjndnKrHuVdfvHgQxveo2CxouUY6UEo4iDXenFuRjEf4kmVECwdwZrNmsMfVJk",
  "key14": "4poc2v58zTAMYbMSWRTA2c1VFpBzctxFutYhT7vZsCEKCDPFY3Nrhotzfy7EfUxgjbTnFKDBRS1Z12A4zL8NKJRi",
  "key15": "3G8BkNCFk72HVNU5i7kkZiF1FNUjDsdxjAERCS6zjbAL9wCfmBguctb4QsKnjQ91ZEKQwrbMxbMDDPCvihvE4tbA",
  "key16": "2vvsthqo2XpJLoD6zNyi4MSSPbKyPkKRhi7EVJmr7h1rn7C5oaJFSnA2KNMTQqgVQvxYPjAauxuM6kW58XpDvNhp",
  "key17": "2EXDrXTJQp31fRZob4snSH8khXeqQB4vCVXwvpJ8hek4t96e6y4huxv2VJEVLCwuUgkUQPxFrFXHwwVzDdasMVGF",
  "key18": "3BAYECCEAAzoEPtVnu9DTgsyECCP2RDgRvR7Hcrodad5hRav82Q6884L4qYmcQsLdRAseHKUMmibo7Ee6FWt7Ptu",
  "key19": "3NRCKin3ZadkRpvTUbjMQipRLt9CZtm5S1og83iEbFG3okhDXSwGuAP3zzdpsV9hWapvf5oRm5ShkuEoV21KmAwW",
  "key20": "s3oGA6RdyVqnYrBvPSsjHNqWqSgie8YE86Xqabwu4wbEcECZA2Ti54oTuxCJiPqus4xCbJ1yr5T9Nw5PrZpSqEU",
  "key21": "HiQsp9XAei478NL3Riq4ZCvYKqFnLuTeG4pZdEfx6oUyy1TTGVLo1gy9SLBPv855bN9oNb4My5TcYSXWNDp6gwd",
  "key22": "3BJGiWYSKCQwQjnNmUZEVxgbV7Y8VbbCHSDPf4iy2JFR35L6y1WtjmVXDpa2jJ6g1djng8fUyUjqEMHb7EYbxJqQ",
  "key23": "5LykTas2C14zucNY85V95tj9rLoPQLeJe2SL6XZX2M8SravTbeEcC9twoWUJCXMCERCCr5rguDBbw5rpUv5G29zU",
  "key24": "3B5E28v9zAaqisCf3fM129B36f7BBoX2VbHEA9UZ4MRTjwuF32NhZmEVn5pNiEKfpXU3XDkYw7E5GV2AeMgsA2x7",
  "key25": "3dcsk5C7a4XdFa3fCt5DmRj4JAMfGMuf9YD2bZyRJR7uLQ94JQjvM2ujqZ9arE1rT77dFHDpdSm3o9TnAMPdcESK",
  "key26": "CrHuUUJZsX5boKh4PKzbZx3Ao7brYF7o8MdyLxrp7zPmXjpF1vxKsuzW3nM5ucCrshY1QZrKGN4ChxsA1gMm3e3",
  "key27": "3joajJhvspNQLB6BaS8h19cbhnEkzECwu2JT7YyJPZerJZHWARz97Ek9phSDJRFnn89zSx683LWzeiRQsdEpD9Z2",
  "key28": "eQJQWhFboESQA9wtcUuZCYQjXfXbDTc22YUsg6AF7ogoPp1YYXeetiLqDxobY8mWk6KwUaBEHyidWAov4CUqAsd",
  "key29": "2hN61oXtUN9PE59cnWPk5hsQQRuZEnyU1MfdH78goP9pq4pZUCE4Pf5ssUA2bw2oMkwNzZkVWuzwMecBfigEUqLA",
  "key30": "25zYG814SndocjT6YExnRJRn1wHktBKQtHXSWxSLBR1DN9wGqVK9GoDXrJ4T4BNLdguS8kh22xTUGoU44cUC3e6K",
  "key31": "37zg5qQz7YcC27bgCn3jFr2WZ7T4oMg7kmGqkRPFeu1pNs2zyh1qkFa6i8urxiUfTCBBFTPBRWrjqpZJ4WEEj8x7",
  "key32": "2xR3UDmLWYd8zc5ctQ82odd2zoGS2Zpk8woZPqF9Ss6TjGYbPUZ2mvBMnbBz9LdPwAgMCNYLkWvYjQp9EPiMLuBe",
  "key33": "3FSEZtNTrFACBDrRVV1n6anY7AtbWQxdub7mXEsuDE5kEekyt6Z5v32MhN5dvVjoS1Rch31FPg4H4oCMumk4cMiR",
  "key34": "2WgCtXrchkMHdki29BAPfH1Bm1pqdaMLyxtsFn7M87ujdCa53LdHKCFZRkgWCFAm4vnUDTcyXAqXChMhH6mShu81",
  "key35": "jQrjjt5qa8ovbTj6StFMSXVyW1ywYBwte5dxS3BxVvZh5VL9j7xuq6GbsGqSdvaxsViHWphyeKZLma21p7mcvo4",
  "key36": "4Dsqz7wZEHjkmMeFsh3amRxna7fgwWLQLXUbwLcq7wxZsYFGgfVzPjnRjrmLtzTtdebfZxt2P6e3LSpd12koHVoX",
  "key37": "3XTKZAwc2RCtcZz1gxRMa2LJzBKkHsvkkkfWg4Zcd18ZsxW2ocGpWXQHhPasayGYDGxApMDZJT3CwqgvB37PvR2T",
  "key38": "2N9UTwdFqikyFYdNp3RYSBhZ8gxdMTeSk2NDteh3h4ESG7CzL8ppUm1fkQ6RFtzET1bDwULdJiYHWmqAD26vpv4",
  "key39": "3d1gjC7roVgGQsnqp89BAfa11ge3LrmcveLj2fMLg5Zt1HytVbLabBBrfbAGwVZbMNdsB41yewz6perdShJU6bGB",
  "key40": "2XWHYoxczHuCWN9Eax26ktQBnXbaztwpdCKmqxwpfWQDhJ1YxRyhowNc812LYJdzpBNSkLttucNEK8L6CeewiyQ2",
  "key41": "3ewQrhKBEPRiyqmrokCrRRzF5G4AEMHdkD4L6gtcA98nmS7WyYAk42VjEXsxcmk3Don3WFmhMAcnuXHm14pdhaoj",
  "key42": "3qRLX2MszWWGLgFwx9L1Qvj6gjS8Ue3SbYBgM2CW4xwsi6rYKgHtct5KSusWkcWUubBjYzEMsuJxWhcf8ZwzqgTN",
  "key43": "3z8fYrEuzPGo243mGu7WnUdb2LJHqVaE2kGB4brCQ2TBWrKczpiG8Yso142fNKZMrzLYWuCw8EN4mF1LdkowR4s3",
  "key44": "571pSgaCuSzU79etqwdsppj1hZdKiRtsWC7CLgaMXv98i7PNFXotDqQkE529qBX9QMrLniM3U43jzsW3XuGNL6zK",
  "key45": "4ajRDKe373HsFuCQwcsEfpX7b5FPcNGijcxY8kUhUrCf42prTAAk7b9ocVUFMrrieiD5ZthQmwYrYXSaZJ2vP7oJ",
  "key46": "vzU5QzKMMwqiUnJTBSQ4oRDt3HPfUUgRBcimqY3upCVFmkXcxKAprrdMuoLAvRT8vpPEFbiBuSNQ3jaTehRLWid"
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
