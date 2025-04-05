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
    "5Xu89BLgxWkRyQk7kSfrjK9vnRuhWWnXUFrZgZuTLnphFBsn2cDbCF79QxSFHUwk1V1Pr9Up2VCexUe1TTWAGK8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N64NSev6xrVcXUfn832R6Y1mcD35noCJPUYXgkaYpqsaZ6FExZmQWYu2ut8xdy6gEJGJUUUVCCSK6a8qtuRN2UP",
  "key1": "4u8Km3E7BEiMyBRYCFx9P26EDkohCDmoXPtDUu2pXVJpsAPrwR9Xz9YSEjsyKqiJ2LVpYv7PdQ3zznAVvXC5JCQD",
  "key2": "5ubsonK4nJhnBH5s2QzJfykSH8DYrJVmF21yPXi58LzeRN3Y1gw3BMmz1jD83oiiais5vBok8cQ55iqDbrcsScsf",
  "key3": "2DcavLAvSJVvfd4QvJD2KHsWrjdTmACpkWk15vXVrzzU9kiTybQza5U6VSnjjJBZuHnJqgUXxkXG8HQWrK9FcCyC",
  "key4": "4T1wxbAKG8qL3jw5hQi8Ac1jDS7r8QZ8pb52j3rmthMK55CiJQB6qEmK9YB1JpZCeipTfAKwwJTJTR2SSEyAYzau",
  "key5": "2SyN6Cgppdw1KvQJggpP2Ec5kTH3z4Freb8X8pe1m8HueCxsCh2UYEa8GhTxaGRVBFEqtCvxqvUNfKL4npEkdhhB",
  "key6": "63TY7Zy4uwToZ5CFhXqNcgbxU9gTy8ES4bBZb17XK56QW5BJrwFQqtfLtpECH7mg25GRNb5YQmnkvGFu5SJqhdFy",
  "key7": "3tKfVDsLJ4ycdptdziRykiPu2SBmCSMVMk6YUC7WwWbeHMG7D6bmFCaQsK2mtC5WnpmSiroh82i6SEGcFEUF4aLZ",
  "key8": "31537jqQidzP6fRZywPLnaSSAKmsgZgkR9QzYi48T3UokUHB5ATA87wC6XEJHwnyTn5UwNp9BHTnJsMdQ64mpj5Z",
  "key9": "5KRScBNd3KauCqpnTneQPqefmixdu6JZgwCtTyAGM5T9F7jzfFGVn8xAQt8RTutReqU2uUwciAL5HYqCfouYWzSc",
  "key10": "3rCyXv7q8gFvwpVP9Bf6eiMsiEMDPRvHuNekEJ5jwnye35DRoahh2gU1Pq5bm9915RUz8cNmQRjzGaHEhKJhnei5",
  "key11": "4ehynvRHzPahW9ARPiLEfAe4zTwBLBDfMdgtCK8CEKFEpuJ61CqzDajs9gnsvxK4uJ7xuqqFEKsz1cXJVAveCATF",
  "key12": "DTwUtgGqb8hgw3z3ABa8JyLMxVyZxmdCwwsvov1uMnwtEh9e4HHnumCQwNNheYmQFN2oWevRJ2zspLHfPwYunHy",
  "key13": "2nMyVC1mzPKpWYEQFu1vktvR36wdVi7zZNnsCB7wd7JiQ96cpDyEDCqSyCsyja8Xn51xAd2oP4Kyn5p642oUWsfH",
  "key14": "3U59VQcxJyWE7f9gJnVVBKjjty4XLEmqZ4no8wE2Sj8MFytbK5xRR8J1YKMq95zFqJTs7KwXyP2HYPk7foP4561s",
  "key15": "4r4DdKu67hZ7gC3chCMzV3iGd6Yru6zZaqRuD2fusLESERLx64kaa46f2eVvUnfVa2HrsHTRJUg662i1qcv5kTta",
  "key16": "2LsGf2TDFtwiuoXuiYuQgXJJjgqnWXUHs6Ziz9Jp5GMYFwP1XFJxm3X9GmCjp1DTz6cHwht9TCShG8AZ4F1RwRzk",
  "key17": "2jTj5BdtJXr6cJ56qiSEnRvrzVvv7UxZPR2PJ43ACPTNUxbx5bD1GT3cTr7LvHSteTMM48K7oqs327otAxPREEMd",
  "key18": "274bAWhVRFDV5RzTno2FCDUyBui38xHQLTiuKxa5gfUyKB4FZwuaTCcEUvXJzyGefixFrrfLcDbrsAU6GJxs92nX",
  "key19": "5MC1fv9bNkd5JFvFrATvkgBrbxQtJmLypnhYRYTGVoVoaMvdjYYBqyjziKtwC6uqtWJrk3iYxBRG3w3afuFyj3H2",
  "key20": "5KmkhjRmjSGZfwtsHDCrdu54tVcUU5raBpqmwtAyD2kwhxpvZkBLo1qKHhsBoG2S9P4RgV7HTBhJs375MrV7G9pr",
  "key21": "5buuviBynPEsoRwErWY2s2BPtoczqqEMiPmXWHUxHx8Zn7GKh15undELrYHVhQAzjydbrUMYQqsErpPKRJMR8pUN",
  "key22": "4VPAWVP6xLAW6aoYyhfua2H9fKCVBHJb5RzzHLRnQNDjisTNKTczWcPitREpo6TZrbff8ru6Fp2H6iFA2ZTNV6DX",
  "key23": "5JetcE7rJdwvQF2sKwUDkD7SwDVyvjueEHq6dCfm5P8CU4BR5gBGQ31qDKcTMo7FsCgHHHYd4nBX1GTgnDY36AnF",
  "key24": "5uvL5CVxxgW96FKiFUKvdf7d52bAAbEboVttkXtXWDzR9D2rHMrA4mr65xYVKdWQ3Pb55WKM15PPgryy1GQCCryR",
  "key25": "oVRv8i3w1WC6p3aW89ATcYq8Jtiz3WXG6RSZHRieMQRvAWWyby9GMMzYGtSyurQ2ezKofSMzegke1EW6ctiir1d",
  "key26": "3ZRHhzk6AuX2Q4Ww21q8nDNyvqkzq85DcdWstR4CXL8ijrqXSChiYbWN8a5ohk2zj6YwKuG3qhj5DeVKfbGD4bWX",
  "key27": "5VZegf3wxUobSgfMPwFkrEAzfwHKqFcMp2RstS2FLNkSEBHQ8x8omwQ2hrZZnNdbsRTSq9DZGKtkVrAtisrPan9G",
  "key28": "26527MK4ddx951j7R6rSEhnN6FbebdRVKbJWUTZ53nh38dBc8g7N3wvuKRfscix9BZWdzNq8FxkHouUkfLZq9jwP",
  "key29": "2ou6QvUzrJZzFS4dP4MQFBw6qW8MLwi1fUu5XPnCq9SVkBKj3ybHrbUENrTmQRE3sC2x5X5KcSPH5yFwB8q1Tp22",
  "key30": "4mUAX7RLSBJcgpNp4NFHu3Msd3pHA4ZKiCa3rhF9GNoCCtHk2wG2LgjoarMBim4MdQTHqgoLSojJaFDmTs35pLQG",
  "key31": "UHrcmkJ9jXxYrob6v61pUGPQTN6tgXqh9NNMiF61KPspXTHd2A1kSpcCqHhQrSaJexs4HRJ2m29QTmd1cg1KiJE",
  "key32": "5VYNFagFRQQSaMJzdtu8tS29QunQQT4sWMzJAxhukvB2TktVvZcFytF3kFeDDsfAah6kdRvCRG9HEAxMUKoVmm83",
  "key33": "3vk4MKEnxCtGPmJP1euqktZTHc9zajD8LA72Dh9YaZyMbRWZMg7bdSyByr1728iHRG71h2HbDWeLoUyfrk9KubLc",
  "key34": "iifYKktCjJisWWCYPC47g7y8VRdnjZtKrhqsAwZCfeEna82sjZx8EuudWy2A4FLJqiwZjANHGSQSx54tR2nE44t",
  "key35": "3YzQWL2UDJivdQ5puDitpaMEGsitNinxxRrAGGXGArnzGHU3dAfNNxitpLcQ1iqzRf3RF72pfepNQfaNpNkJWFqE",
  "key36": "3j4PX99tpxwxQ8xpbVxUvhJTMj5TF2TcKnJECvoB8KJmF8cneADs46Qw9cXUB2vdmRH5jsfKu9ewsKR27wqS2Gjw",
  "key37": "3jpYcbuKQ4vDxk1i82Nj7dxNJd4rfngycmga5CufuHzuy8R8EpKDFm7JQfhmjDSzmKDcM6qccVnNrnPPXLXfkSGV",
  "key38": "5rJvgHmNTnoafkrNvDx84jKRL4n9Kuf2LMZTbhR5WF9N9oAXU5jaKyS9PGQiPT7ctrRzmTg63o2L9geko3hnoaXv",
  "key39": "2NH3DE1gcRNAw9jziY8E6AMH3hhrvkdcg2VxCV9iQX36uez7r1CDhe3eKzs4gnhTF4arpsXo5YuNzkqDnQXTeWWC",
  "key40": "SKVZdrfjDsTknFKsSAuHVRWxzjHwxeoz7yNW4ZxBzYvD4baedN2e23phPAJbHBjRbNSRS5UaVAPkgUbG7uPhLR8",
  "key41": "3MqWMzXCgnkreGb16GeSMdHVwkRU5pbow5LG1hvfDJ2EgR4np8GivYiAqxZ6nCxGn557qRxvuu7k6h7xWYGSdCbo",
  "key42": "5TTpRspzj1EvJLigrihrhMda1ZbgcyMtmS5zjk7tBW2GSCNGaosLrT4vhKa3D35cqW5Ssdi7pErBzp9bpBU1kVL7",
  "key43": "2GwrvTvF57wDzMCgvhr9uftrUo4VL5n7KaQjeqXf83jgrmTTSCr3RxPWYEYekq6bv1uHRsFTbxU77Y7is1wc9Rto",
  "key44": "3AfJkxZ7AhdiFQwtjpj58rw6Bb3RSRtXujyuGrfAVZgue9HobSZj1ARQD8kPC43dKqAYqn8zifZNXbpo6bk2FwKc",
  "key45": "M5D2RYu69F2zGe3fTnZBoZt52gSRF2Gwhih3d8PTjdbjjChfoaDyqtpjCM9p5596bc3P8SEYhEhfMBh2tNj79ff",
  "key46": "3F2JKuvmSi3weeyWsN16tN2r7u9zf5PazYQmeoUjS7RHuyes2JRSaVr2LmN2AZp8uMoRGPY2qHTgM4TUJpZmJrAH",
  "key47": "5Dnwa8iyf5U5mF9d7G18DECXksDn2YFQgfDQewnTVJ1336C4p5XbLUhf6K686eZzQtHU2euqQchh9JaVrLjZx3Js",
  "key48": "4MQtKALiTVL9GEESypU6KpJJwyRq7rymKLXeJqppnnt8PKDPDij34BKSjJcMnGbH5oa3JnXYvDr4JDCoT6R7twPS"
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
