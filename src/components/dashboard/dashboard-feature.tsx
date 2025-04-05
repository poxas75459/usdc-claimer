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
    "64QQ4mgkpHYVjYEDUrAZ2LKCARMa3aBcSmT8NmkPPGTVdU8nootkiwt8NN2YTWimUeft5ssEm7DxYXrmJc5RztZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDpQEeewbQRMNv2FvTb5pmFctjTk1mvXT77xPjmpVhxjFa1xr93NcrGWhbcSBJqbWiqoAtdxKW4Frg1nNvHi7C9",
  "key1": "KLdHLTNUSB3QZdzpf61E9gNv9Hm6KysejYoBZGar8fvJVuWXDPJDRnVHNHi5R9jJ1dTHQ9Pi23F3vf6hk5vBCbc",
  "key2": "33QT9yMQXBWeJMmCJFVEXcVhiGp4gHChvnLpMm58SMuVNhZtngXPy1kp9tiAvHbzSjKBUkUEQ84DfSLLNai3y6zs",
  "key3": "4M4XPLF4PixgCHXGpgMptaoxv9vw7beQjNZj1Lr9a6kcFJZZw34kyAwpjYp9nsz3qbtcmwgPcPyKvGoBb3JEUGfS",
  "key4": "3vg7p3tCCJuyZphGhqR6hxymNqqueQc39FoPYvWdTKSLjXCFSJ1qY6HE5ToRv7rzPeweJeoiZjZLc6U3x7MdNLQV",
  "key5": "7A6SY67axo8DTtajzxbKwZdVg352WSSDGMAMhkJWDyhJiDjh7e5We2qjhL9vGm48hyt9bavbcpzsrQ6CmiMPfyn",
  "key6": "21pKb7Ye3nH2ujnNpMRDRmHnk9gdg1r6xdW3AK4iNjYAXiRBxK3Qx3AGjvS23cs3kdeQufFpWhb57ZvshjJXUBz1",
  "key7": "3zDRacPFPfVyJGCb77CcLnxQvDQU1o7yTMeEuxbnEcZonKrm7FKajD2QJxmPGEPYriPo7uqPaBZrnEdZbAbPvGiW",
  "key8": "DTzPwUAWMe3sC8JaD26AMTp8ucnmvXFUv7JFcmwoXtLQ4HUoY9BhZ7SZqiAHWd1aUYa5C4GHSBbq6RCdJTCxzvZ",
  "key9": "5FjMZZtutKab3rdaSKNNGLwFWMY9Ncfdfz7VG76RqFZxtqZm8ftMnnGMiV9yXseq7xSQdK5eWruPYnTmLoF3fB1u",
  "key10": "4wQD2f2uuibULZfhMEFV936fpADHzmGDgzgUcP9iCAN7T3QJ3QPYQoLAabDuxRqJ3uM7bTfYfguKUroesR496wa1",
  "key11": "4NvG4nGwouAacr1Y1FJDnQDY3VcvnLcGGyv3JYeFJMz1JGBsRV7xqXWZLzWxgNJuxFp7FurrJzvCQ3BHLRdo8LQd",
  "key12": "65eobwrgjXDkLivB2swqjToKqyukdzghhMcEZ6xsMvBf4mPftKzipvMoMfCt1j5d9dTwxhiZkzTMbmw6D3xQJz8z",
  "key13": "41j6uZuM9uHk2RKyxZW3s9hsAjjZj6m1wMgTeNqZizTPfvQZH9t2NMhdSwQrg5UXcxXhgL11bjqc2xcznEdNaduH",
  "key14": "5cxQbbqeW1xE9TKDukSvnbRqKK9tQKtecFfEjvLn4sQ3qwdfQAb6pY6edHDtqK5juSSTJPedcvF3kFoPcjKFQdiH",
  "key15": "zQWZQR5sLstKCTGUP89DhZ1ADrFeCtVRzv27EQhMptA45vZDi7KrUm4XFKo9koNzo4DkqP1rrzpDbCArUKF8n8t",
  "key16": "4UzPtj7Wmtrdw3tS99zayrAHmvBBtAnpS8VRsmCC58yp52BXyV2mpreh7MDGu8DdHemYGAjeNFh848jj2nUtfdV6",
  "key17": "2Ewyyhaf3hjEbtJMPLPLcZq2msxVoLctXv7PPSCo1wHJoVSAR3e2iGLJjQ9ekNjwZwQK3cjTLdfnANJ3BvdDVXYq",
  "key18": "FPDFH7q2tM7sHdsfsVGUNpz4UeoL17HD5bBf3XqASjBUmHpRoSaADvT5qL9Y7Bws9Q4N3d718YYDuMbNCof3eRL",
  "key19": "3ueqoLrPY3Lcyp4TpL3XYpVeLbMtgBq9xkq3ZsNGNAVgz8XdYyTwvNZEFwGJcNh5yp4StYBhcoYhEMdq7jrxrirP",
  "key20": "4gG1UFutgduMR9uRMXB3NWhpPA84sqXyagT2ZHTWcYVo8Wup93BR7WCKatDTHi7LgH4B2fr8m8HQy53TnDde5PfL",
  "key21": "3gvrHPkThbwz1VkuN5fMhcXq3fzcEKaU3F7grQ3Na1BQCbRxJnT3wBQkektwaTfwBbLpBgwVVjuJBDvVE13aaBLN",
  "key22": "4ufSjNtdsGVUG3VfEotgkWCymfst11vj1cHX5h3nMXkG9EJGLRag2DmyfrNodP1MFKQesYtmTHGX1nnUjNd2nV9L",
  "key23": "CJEXd78UWizCSJvGFar71RHoLKxYJQikKFKN5Hda3EoRPkL21Lz1qWwZn9nk2nbdXyHPYrzixtwjM8R8wt2UssY",
  "key24": "2cFg2c3EAsbDA9gJwtJmRmeg5t8HusX5Gvi7eUZm3rjTnfBs1g1ZFv8aEeNwobYqC5wXzv8DJUWWLNAqdPXPUfii",
  "key25": "2dS8Q99LJcNZLfoynUdnskVcfRcv99M5cJVvPgB1EAwxKxhD7YG4QwBP6jQaKH1SoiwMiEPaEXE4HwkEKTd1aEQj",
  "key26": "3LuSySXEmzKQvQ2JQCNqTVqcR6EQ8wCRQDaWJNCNJenw8WwFHt3dEYFDiCP3NrZExfsLKHHd2RwPQv7ksSntyfRd",
  "key27": "ArJ2G1A5T5RguA2UoZRokyKuN1TTKt5UTvW567mjmkTEuLvgC76V9HACHogHZW1wd2fDyP1Qgyq5SxRK76kqJZp",
  "key28": "2m5utdLFJ5E8wdyU58aFXFyVa7whVTmCfFhXJm6h8HFXrFZZLKxBXQ366x1eyHDcErxVoTsqPnMWNh8YVeAPFEcg",
  "key29": "4UeeisjzpFGa8ASWFtx3LLZNFJSjdPTS35mbDUKx9ss846DTMun1s2QipsdparFC77QtzAnoEiE9BDtcJq2wfEu",
  "key30": "2mnPjbXFCP4XYmpGwsbzHHq7qm1eVyvXE2kdovmxrhzeuUepXVnzcG6BWf6hseXws94eTA8KXns6VfrbPXaMzJst",
  "key31": "zcbEjrXXoddZXRv39fCfQPmzuV5RkB8TZnezX8SrC46gphQFpAyGBDCB8yy2kJPmtd3uzQMCTyihZUhS7gFUwx5",
  "key32": "3o7xepnai9F4VqCr3JSadDcXAQDQ1Z7ArGJFMDVRDRNBvCPjrDFXysZLBaEQfaNBtZ2j3WKsbiBPRkvw23qMx3Ne",
  "key33": "4rxqwssxjP8Vmoph8tbvz96X2ZqxwR6jftf8aUYAz17rdSTuAD5o7QyCSQUKTAHemGHYMTipB6tNM3Tw3zPC4Nj9",
  "key34": "2oTEkTdjCinX1x1xggtBMuXPy5C8sEdHcCopvoiPcREUau3HtLEmkFbRPUfy1NJBp7ktUwSEoMeJbtSdEgpa547M",
  "key35": "4YvEkzHpMFP8VhqsE5czh9cQTANzFDrgE3CmgcVXFArwP1AhtYknugb5txVbVGSJy2Ph8sndUAZY3PpGx4EWpzLy",
  "key36": "299bvpmiQqda6TAyiXz6L8BeyMzqRyxjbp7pgrijWzRobexRmsvwVP1AGWaAVq591qvBXqwjVJ19YqwRWZZcE6e4",
  "key37": "4J3cowMcBC1sfbdwb76wnUnxgWNBMMAbtRhcaoYMgrVjdyWYsWmQmh3Eh995wZWTbMtCExTPMb1wuKAmpT1k1he",
  "key38": "g5tvjiJnZgutRsqWRnoZpL1k7U7xuj9cJHXdBkfxdJmyUq4DuX4Etc1Zue8JBmdwZEqnzQJWxu7kqDrA7cevZ2F",
  "key39": "48FWapTCUfd9LY8Aqjqxj6ojCrKYMVJCiU9sNd46HdrSM1Vkqt4EChNy8Had5E6czceAzKrZpeLFrLg6AqP1iK2e",
  "key40": "3Tg37F6H1Q5b4XnEqNyTxGMzvdjg2CoXW7XHu47yEw4ribU7jDk3ZMLKxkenkg4EtvfHBNk42NLFdvEDPVW7Lahf",
  "key41": "2bkQTdxBa6e33dFL9CqWYcG6DG8BE8Z6Q1Xewv6km51UnyKHg6hL6AevdVzA6U7wkarUdV1Bs5JjMVF7ak4cs3oB",
  "key42": "5JEZBaRoyUAEkE9FosE7psVNiDPENfjx2dUqZGSm3BMQzLZ3TbpKEtzEddsCXzP3TArQoB9hNhpUWRGEJVydPpRm",
  "key43": "36VikQgAySs8qSqwRnHzANw9HrBumNuG1apjSm8F8ujHfEJ2H8PFk398M9jWSbj65EzFyW3f6m5G1rDobanAThLF",
  "key44": "M9gHG5WqGc6hgMQta583w1XKd9bLLsAmTPXGBNfPg82QhGMvuviacqfXgVMBkZXPDSYd7H4qz4FNhy2uLHca5ZN"
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
