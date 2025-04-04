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
    "2zwtEjziG7LsoGNcnxpV6tahLd1dVh9yLHphnkNNpwsd22dbThmSBdsCRYWvZW87HqzBXohMomcxCtVrcM1qzMgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pHHJrnvMZ6NqPhhoLNDVfyCbKdMtFNegNXJ2DqYYmt93JPFNkcqS8CybYwSMNNKMAejenBe5qJ7zzRkiVAibRLo",
  "key1": "3VuVj8zzpSvFJLgpyyR2pb73jPtvTuZDnEy6Pj4BmsToBZKYrNRV3ZwWjpVwH8fv3TUK7Cm6k42kJgFybczSJsZq",
  "key2": "677oP7s3hEehmduY2L31GVFTjEyNDm9GPDqr8c8uboxU56NjzU7sQBiYDunFrVRx34KCzws3WwiPtb9st5c6N9WJ",
  "key3": "3vJZvg681ja7F4AwN5MvkbyKrBty4DbbytLRSTZhD4ENyTK6wEFpXr9Hf6PG6jeSswTDv9vtv2oGLJViij7QSNp",
  "key4": "4Lk1LN8bTaCYQ6uySYzNSXkKGxAu64rZxiC7tf9zNSLWsboBTT1FL4sQaCK44Vq22enbiufPyBEysKcK9B5sGwsW",
  "key5": "2usjdW2bmV2VeNBLrHUMEeEg62ZPaKWtDdik5rcKBsU4YiVSGWQ1FNPAfxwjGqXLaxfT2bVe6mS8eJ7PE8Q5VGGb",
  "key6": "5VsZTJHPNePxXiq8DAJHfdHjaDMa1QG1cvKtKDZhRSqz5rovcETSVHf25Ew9G74PjqKaao2zqy3LD8cDt41JHMYE",
  "key7": "3UzwpGPyejxnhcKRRteYdx3jqQ2ZQ5U8kTFjtbG24nkbtCXaQ1BLXgsQFJSNd63e2WTLXkXSrB578BAJssUusCPA",
  "key8": "2A57xntsdnmFSNwThA2nWr1BVt8eV1SdSWJYGJybPVhtGohCMNfnarfZaJWHYZ4FvCvrpwPv19J8b8nmWPNwCfRv",
  "key9": "37stUnmGqe1Dda4SU2PgSURbNkptMDAPWtmnmj4EEApNfWNhpxsxVbgFLvgdzWfuDsbyz6SoCsaQhYrJVtzPXyHQ",
  "key10": "4RQC9w7L8yjhVtauqeN1Lm6LgVBhBZrgNzQAJMpcsReGaD6wY7txJYgHXA5TUUHWmaLYXhXBfmpXyEXCJs6DHCJf",
  "key11": "2vq1Dz6LY4ofBUxdfNYUMbWqcYoF5YRCCdWMU7o8BENUjoShceUkiSyof5c1SchVDQdSPcqoWP6SvVSkKKV5vrRh",
  "key12": "5VhQhJV6xuMWzALjt8rKQ48SQzv92Q46dQFjigMrDujUk7UrM36y3y7mcSvgZKpcbQ5zc1mbVF2L9HZufJr9bc41",
  "key13": "3YWuC6PTk7vYqQ2jZBzdmHmrA43vMt9SAmebKuuDcNRmSpBKSuFy8YKaiX5zEHW4gjK3en47rV9Khwpvt9syLT4T",
  "key14": "2HH3bo2DZR5REA9AmrcLKdkcFKpjyDwUZR7Wts2LuYgt4FSjZoSXEVBut3Vz9JAxfVPx1fPos7ZoNhV813Dhjahq",
  "key15": "31b7meDgFrYsus7Y3z9f8dcL24FkWknc2CHCfkKZ1PpPikVmfoZaqsXuxUEfJ9ie2czfyvcBgJhZCfyYDwHvZTi2",
  "key16": "4i1TEYdVczVdgFF3pKaprBHgYMowyFoAZBnN1PFACS2swFrmMENEnvPZkZTh6K2GqQfLjhGnFFhHNRk6tMi4gmGs",
  "key17": "49XadHpY1gjA1oh3x1GGgYxk19ACu6foz4NxDcu5FoBk8miEUhUJcAxC4WwD43bTfKTCHX1BE3YWTsRn58p53v9u",
  "key18": "vG7smD2d9TzYKBp5JmbPUrirs86jwhFqzym8pEVfxnCB86APTic9AmmNfRPQc78iPJAks2vtNvbrRs4dNUKfbsx",
  "key19": "3aYBkwkMFuYUUWubosKADsLq9H4FogyBWf8sNnGCsp8zS8zpQwEzwSEyR9M9jvu713zeCVbw6C4t59W518SgpbKk",
  "key20": "3WJAzbvv4NsTvDthH6ECqv9grfErSSqxBejgmY2dJa3an5TBZPuMkcS1Top4Fpv1ng8JeRFkFqYi94MFuUH13nHu",
  "key21": "3VPdkxcAnozZ5vBLCoC9hqqwyp5fbEdAGdJEJJyRScJwp1Pfsia38TZtofiXVzTo4i9GPN3pwPNr8cPhbmmztGPt",
  "key22": "3WxtEjfQB1idASqSvgjLQoUvdHXTwVas2DPZR5SV9XnFV4EzDVjXMvr7G3jscRCtu88mf49wgH1fShj4qUEDBrBL",
  "key23": "4HWdPf2GJZMp8SgwRCVvxtpQoR8TjWFSQiPBivJQ1jq1mKcNJWmAVDJPnR9RDHzY222U1UzcpuzoVd8FReP7mMvy",
  "key24": "5ZnXrsX7H1icBy433PXX7qKCRjR8tYF9H3UuW6M1DjkyrRDsaFTzpFnqanR9AiqPGZQYncCEZ2K2e7b8dRB3rwL4",
  "key25": "3CCPbKZimxECCk4jrfRLrZHEtHigQRcZAEUHZ3783WYQG36dcw1aEaEfaSD3rbaznnjjsdhhegnoRaEagRdWJJdf",
  "key26": "4CccXigdrPtfNwuZNwGrqiUGwiNL6Dvm7NCqfJtSQ2uzzfuQHu4bWS66nADA2mgH6PUd2GmDRsGLJc4AwvSdCBem",
  "key27": "4cicGTKxXRAYkHTUQ94bFCNJsQHCTfCC3LrMfU7anyZLvW5o2EGmSFWgAkFD3JGoeRJj5CsqrZq2XEYjKyKXdWNQ",
  "key28": "2cNuNQPHUtg2CuWqkM8SkkEfvUzzWS3ykDtSjBVu1QJueZX7X6FWn9QJC8Fg1oT6rX3xgzRNqKpn1QNd1sb3TLmq",
  "key29": "55cyFvmTLsCYRzrFtC6RpUVhNsxiRB26MkG3xGcW1So2kecdq4ENmum669UkVED5TELHPeXgGjPaxgfUs5W8nWEW",
  "key30": "5tj2GfbmfVTKsvWBGyaLV7FXuE6Mk2jrZFAdqxSiQZKSvodn22mD3DkkY2oZ7Cguzj4VMKac9cmR8D7ycHQEY56t",
  "key31": "673o6XSch7TSCCkyE8jM8t5ZbYB3jtEt6FtwCJQZJrCX8qe72ZhkhzMw4sjSmTTs1gT4vziiyobmrG9fNSJjrDBT",
  "key32": "3R5ymM5GPWcWE9phA4HPsnH3NqWesGHvLEj6B4jVVt1yoiV4Ne5yYRorNBSrJzTmDVNNpXPZiY94Fdnhx18UaGK8",
  "key33": "2rt8THQ6vJecVxtrQSPEk8JnzPn48hospHRPu4XmzGEu1EZF3gkEMRCNHcXqQfWS28MKKi75WNc8P18wGeZe4v98",
  "key34": "3WG41pqc3CdzUhqwCBtP2Lt8Frr1td4y9i7SmUTxKpH5kWhuH4qEq9ye3cJ1q8Xsbt6MpftaA7XRGdxUxRBqwYwQ",
  "key35": "3MUpPmNBjBRxFUHDczZrZm8VRnbuuxUhp53c6hg5KD3jxHUWAfHDkmAfvFp2VFfKKCMKUZqAdefGmvnsXPWucWyx",
  "key36": "bEr7LnANKNS2M2v6YtzN75Bp2EGiCfk2kpwGTTtzagrhy3bXo16ZneyUruuAscvH8X9e5Rj5CiipSTzZKtPfaPj",
  "key37": "2yL9bqHRrWkQxsyMTu1DxrdDK9pnhzuRsXar1t2B3TyyD4uHVXaDREyrBu1WzaSqFVNcqs7L1kmPjaCjuSdS6akd",
  "key38": "9ZdKLfh9YUsLbeV1jmNsatrMRWqfaZJxNHbxqZQMy9wHKDoZmq62rRKSUhEKWbDG5oLYu9HfCoBjzAYq9TBXruh",
  "key39": "3U4Mf1KiEMRYKbbhma3gpL2Vg4yY6GuyqYwvMcN5iyoNkdJaT1n5b25o2gK3ScJ7fetZ8pMHuKd2XBsvqfh5DM3a",
  "key40": "58e54e87UiAWAXEoztmjKtPdeYToYez6Ykidm5TjTx7QfteH5HkvXFFjfdzK7SZ8jeWJNxprhtT9anpQMKrPFu2o",
  "key41": "3yRTcxmgzsJm7djTetSYFerAMbgCkNcEYLaZQVSXb6WXvLnsVe8Yi8Uq3pWTDmWJMTid7tDn78N1pMZupw1MNWte",
  "key42": "2mcHG1n7tKnbqDH1gBePC41LR3cSxnX3Fx95191h91MDt7WXZ55h1aMwFDNQ35jVwoPs58uft4s3fjRR8kpBHHAq",
  "key43": "3YNDwHYQw2uPtL1Br7Zz4K8dwtKEUoajNAby5TUbyADZxnjRPBF9A4ynXdGq9imdKZAKR4fM2TPMuV3LWKJFyvnC",
  "key44": "4DKb8VDhKomnm6LwZcdD14oKLUgRKd9LW5oZYXEXWR3qEVd26neVrQz1gfoTKJcHJciPUWWBNVTzAU14va6qup3",
  "key45": "ZnMM2bCHpN86QAoTTWhGP37jM52JAhnp6kkpNsVg8XYXhGQJ4VLhvZL3pSSMcWqzNDagz4gUxsxk2GSbmp4HwV1",
  "key46": "5Kc7RLk1HhN8kGxwRwxSteKF7qPmRnvTpvVSivVgQ6RzptNZBG6dq55haP2sYyAV8M7ynvticfbNWpTjoUNk3F5Z",
  "key47": "3wdCSifm4VZVESaXMJ1T8qh5FaSJM88eduFTdNz7joX75YzyXjCdFPkFWAqoApj9fZZpziNG4pG6WHWrsNPmxBjW",
  "key48": "2jWUQdXQuECi8rizrafuNv6wjsurwiRNkvPy2vY7Za4Fc6EYuZEszHXxexow2yDCCunYaBbapnHXKtndpjyUjn81",
  "key49": "52PuSWneTz3T1gJXS6a35AjcMBTz6nVvKHeNM2Dz66XpVtbQHtAU99RmMQSu4CBC7VPsBWdd83qPkdKynPKzgkYr"
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
