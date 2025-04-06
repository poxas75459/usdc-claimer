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
    "26MyPr3Hjo68n7A3392ii5Sw2tjL4WLm8YXt9ZRYseS2gyB4oqScfsRSk7qADpAsUwvQCyQUYP95u7Z1VHrqWiRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DM7ZGbufv5uqWXyZqoKgY93x9drtvbbY3SyZjDB1vbmYroky4ET9nmkFoGj4iZ4iiYSbY8uTPgnmQRXhxZdBuk",
  "key1": "4YrDyLP1wQ1pVp3aChojmZjkJGJtGJzaJCS3hzspP8L54yByuXJkQ1xuCWFR4N85U8aTgaHCSTGcJ5cdggAPrQyK",
  "key2": "2vDk8Zzh3t3sT3ev3RcmnLZnePFALRyN11UCJ5RNgVvtzzHT67pqmLzW2JUDCkCLA4sACgCBkeRunmQxCRqo2Whi",
  "key3": "3MsSAMo56pCwmjCNS7ySRYbti7L79wUeT9X4N4mFXsMPWUmLEi3nMmSTJFkZp7riraFGczLeZR53BzNyvRUj4Jkq",
  "key4": "4LcvNXcy1oPEGeAJUccq2CW6QcrUuiahdgitHJXpRWFp5CB43eL6a133fXQufV4NmWHgwaR9uhdaWiH9SMJCgYVE",
  "key5": "3jWGcb5nwWcXpwCcVMZJVABEvveoNfeBfYkd2VAVbfRnUi2RjJ31rhVdp9uwcZZyw5zQu4h3bX8YiWQBD49EfiC9",
  "key6": "5KBmbrat144vLAs1N2u4FVfgHDftNGqKarfRAp9mTxdLvc8AdULHsQh7QkF5tRraZGbLX4DLyeUhjse39Ae1V4sj",
  "key7": "3bYPt4FWnpqx8hutJotaziumV8MuXVLM6ndacBH4iV1KyYUGgq1LT524eDkMj6C26Mkm3AKRryjDLpv8MfcUFp1S",
  "key8": "3pu7EFVhpRn1NHGvv7RTmTocHhVRpTQ1FKxKarnRkaQM2TxxsnbjuvKQG1UWVTDyF2dFLojdCHz2B1ARksuSmJTL",
  "key9": "1Tfst3rD3ZHoGEXdUFoiJTFbAMjiNzetkQFTG478n9VXcX8Z7bk8e4S79XWZ9Df8MUUeCMeiW44L1nrtccv1TCY",
  "key10": "2qKTj8zxCNeZL5qgpuJvxbdHYeHtM4c5EUR99K1yvakyyEFZuZZ7DBsvFFrf3ttZxQZNXwV8iGNAQ9k7Tf5ZZ2cp",
  "key11": "4JhoGbvEb6qt5Zw43U1VE8JprEhgYqiketc4Ha4QjkPqcRsHgiYWZ78uJzDW8SFcXVKFNCeY24fkm7sXW1BRyAJh",
  "key12": "3HXevukDDnv9AtAi2RrZjTX2J1pCGAVJpdmmh15Vpc2QVrxEKHwJ3t3vBTjpwKx17jAmAvZdzNwdxEpktbZZsS1Q",
  "key13": "FMMXQryvBnFwKwWy7BuXAnDqpyj4Y1ejbcn6EhJB8tbAroBGdoQBy7bsn685rtu4EtsrHeFYckrPRHnkcDgaVmR",
  "key14": "4TsrgQsi2q5YTCS3PZEs9E3qccopUuLR8u4AuPpCTk3uMGLx8stypicBnF3Y2kzFFnLuswpG4nkFcmf23EYrd8uc",
  "key15": "5yzNc1Ro4pNHDGqGgByBc1U5vm6JWo1TeewVz1ePcxXahvKJNd2KBFPsSQb5Xcg5vq6oogaywPwF2VRh2jheuBNL",
  "key16": "3bgm6DzUTFyo6ijXwQtvAWZQAiCeUzY5QkiA99qXKx9vthdCVYRS3pYLu6S2N81VxWxWhSVoqc8U266rDQ2wnmfF",
  "key17": "4eactnwQaZS2eQKTqhZbDw3xgzoiwpERAcd7kzdJCzNo8CtPo7p3Xz2hbHAro36HoeFAfdVyCMqEeq1RiSg9S47v",
  "key18": "4Df5QxPxQuqSgy75uaRNtXZfRDJScydTXq9AmcaxZHKEwXNFASTa7N7JAh6RZbDzuEhVpgXFmT6UqrTQYkWVSJDN",
  "key19": "3C6XuC6eYvkGuDPvQpZEeQ5x5oW3N9Nv7hR1mkepcQMb3nzGzvzWvxA42X9NdzxT5dbWk5sm6UBTsRg1615wZWto",
  "key20": "2EKvvzoTq7o6fbaPbJ95hTEHw2xCBSqXdLLP3TnwxCziqUwnfsssnmfkshbvWXJPubCR9ogWSVnrekkWh313gGba",
  "key21": "2msuwpHcgpWTjtLSicNGn5J9kpjtucGXLt9AmeEtmZeWfyw1enNQz7yJaTLB83PVE7xwp6scjwK4YThiXys9gB4u",
  "key22": "LEo7m9NUzQEWBk4q1J7tEkmVYDqS5F6YWhqAWrwxZMzw7uk3ikqWJpdXnVDm6BG74KHURvKjv3EE2nRWanupBtM",
  "key23": "4ULvNthvbfpowwMxF29mqfe4655nRrmz3QiXXn8KdQJPATCFzUyXW7Z8ehYVKgvZp6ah5tQHroshaTmxwGE4A28k",
  "key24": "2aiUicSG4pYyz7uJvsc7YV2f5ZqYso5i6AXVDwvSpKiWXESchdiPm639s6LJaXfnqVbRR6RDW4AE8SC8qNHRA2tW",
  "key25": "2qf4XeoKSBnZTFQAZEczoXApa6JhKYUBc3k8apc7tqCCETBs5rcUnGsFRNDVoaUxFToi7M9iCJpPmNxwF11wLHEh",
  "key26": "254EGCBCkwc2CzrRjMFEHqPtRyRmqm4VEnXf1nT6xcFrpE3hYavqqvkHz4Vfa864K2fcFi5A7EqU9cqUcmG8GPtX",
  "key27": "4zYq7DwHsKpoGf81hFv8CvUy8SuGczMR1K2GjK6paSA3nwZ22vdX6RywoFHnMzjq8XevhR7TwichV18qsL55aFKx",
  "key28": "KcHbGPpR149cR1xuB9ZHUenWkGp4kSDicEnbrMyCnPbay6ukL8hof7qpQA3QH3MUaSuxYkEzErxMYnZBpXq6wjF",
  "key29": "3LxCNHEyYYunYuXvsNuwvr4zFRtnTzRDjdwCv8okZ19NqT5eFDhZKfgZupZcGyQkfNaS9nE4GWtEkMeFkR42ugD8",
  "key30": "3dKYHPtYqzX9cdAJCirtbPHtv113kJ8tMxkrGwhpScQQULDR2jh3JhmiAL6uTr2kPmYCSHK6kUGBQghFc2nQ3v3G",
  "key31": "HxX2yvFH97af9DVm6PpTvQkWMRS2L86DV7Hus5U1M69fBQSfbgaqrctvEDbUZ4wtSbTbyzi7QdzjooPaM7P2tNM",
  "key32": "3nUsr2fUtXGSu1u9QefZhs9fatmpGBKBCEoDNgK8ZAwauDMpLk9JeBadC1fheL4VxwXf2imjbCmZde6SkfJDQthr",
  "key33": "2t9VZ8apu2GJW4vxy75jQ833uksgThZQz5ZGeVbPK5gf7dsyMtwxMEGszKcd1UCni9CwdsMsr4gi5PyAAwfY3Tru",
  "key34": "y1gQnmXgPyxWKkXefVbEA8i28Gi5hJHuheVGhgJLCUrteUoR9A2PBJqSQJnjnM9tBSwb3dr4CrMHWjRuvgoZBXe",
  "key35": "4rH7e52qZE3k57fegDa8hgip6MoRU7NznkWdD9gp3xnTTgPbAthEoBrFxv767ruuMs7RVBSwUQzmbTDwTr5r7Qhm",
  "key36": "5Qj5MvSoSWGSNR6C8UmXErkFr8ESxzs9gdvbhgcNDhXx5sXsXvcbB7ddArQxq5e4qJ5AjZsYUWjMVsjtS7rzCrMG",
  "key37": "w9vLBBH7pB5qJYTQQjuh3aUN9VnTAUgtKmFZ6s99M9ECBv8wuN1WnR86KmnqgkcEYKBsYy6x3Zu9X7bKtAZnRXA",
  "key38": "28knCCx4yz26knbSLNx93Y2Sg5WigHiB29KWXMRFAEwy7nWKR6X6iPNc5Sfg2wcYoqSrxrdpc5naGXmxtVSvijiX",
  "key39": "xaCWhfNygFngRFuqhmQahEWW8ygpfFRgp5fJoaqDupeA2188cBY7VGZEWePvPf3JyFxksYyngmLwU7Ny4FtAe16",
  "key40": "4wgraZhQqWgFa4o7d48kePwCs5MBxV2p1DEP55g1XQk7ZHgNdN32iA6NrQzyu73WAdyAAWvb1UVXQnPCQ2yYg7zZ",
  "key41": "4fZkgEZM35WLc6U1qhdDHHR8KvW2jweHyFXch7ZoFCLameEuqojDpDVqApc6F7MJiwjKp5NY3Vy2rsFYVy86U42Q",
  "key42": "3c5XiNw1fTMzSvoN6BwTCxZ9kPu9ggAxPHjxbSqfH3zQpf4nyEKyAFAqPtd7ScYBakx1ePE2YBx98mQrbmb1aQ6R",
  "key43": "3ETEA1eGCYLPCiqgbQ9YvkriGbyrehXaAXpp9EuWKt1QXEP21j3M9X9TafLupBU4nFPq2eQqfuvVBuKtTvR726zg",
  "key44": "yGUcHsN6GYv1YY16XGxRDtHDAito17cmLShw4N8FG4sWjXup4H4NrSF6Ugwdiwf1Cdo8nEuhyfSGU51MnRAv6Ft",
  "key45": "61G7vZY9C9VZsNpX9R3BzMs3BzuLKfNFXhHGZcu23PsuegYf8cjcmYPnEAbhJukNsosE8gLp1E4M5ucV23JWYqqF",
  "key46": "5gnJERnyMNxrGCXkUQBViRyyPcbtjJWs5HauuTswP31zpUib4jEMo2eebgkPtZQA34vNrppFDdq7WSVo1jdWMerX",
  "key47": "45APK7Ws7tHsfS5e1BMdbPot5GTRmp3asADFAHh8YpaUYJ9Rw5RsNWMNG2GX3WFF7twrKPRJwQXmDtgYbc4sdRab",
  "key48": "4yxFa3c3RPHfuy9cgKpNfLzGHEVjpNevMxDdVBu3bzgx8LyWqgebLjQozavAFFQRCXphKp8SabiMa3wVxPRT8e1T",
  "key49": "65RSJXWoL3BA8Ek5RcJ4ZPDrGidjAxidobDwq7bhpQuW8wei7LtLyMxVcKZ7fEZxn9m1pGRFfdRGCianWHWRNnuv"
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
