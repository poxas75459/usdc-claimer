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
    "597fMoqdhZsW6Ef7xSUF89g8Yq2yRdFRxtuQfvtry3VfmGLGvzrdRL8ShyH7UDAQLoi5XuJDPydWcbCDRTjBHr17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TpHPjrZTfbXWSyDf9X1TTiJjqHmCuYCKYH1D4SMatwwAS835euBSVQQN511DZNQS6NKQhRbv5NM1KppjkE3mKAC",
  "key1": "4dgLsoebFkyJgMtyxx1gK8s1ogyxLwo6ZRQq8mwFb7Nem4apmy3QJW5nKhXkMtBeEFt3rqqiQhJtgpchib5T78YK",
  "key2": "3xsDpYbvE81d6UB65HaHiDMHXav5caF15YPtXPsAohZEi3K1Uj5yYSwaAuxMGuubrczwA6yP1aKUaDNL2nhzWWS8",
  "key3": "3f7pyshcGwTBtaNqCGDYCpRidmKbVZhYkphvZKRG4agYiMLt7ozkjBHMxHBEhvV6XQrJZ8mfybsqZZRJQWmHiJH",
  "key4": "5isQzckk85kVv3gQA53XzzE7jYQ1yaR9A9qNNz3pCkk9AZsj2EssvevPmdAKjAKC2Vw2vssuYxfgp5Pu5yoisujC",
  "key5": "4nLAbHc52rZV1Re65g1me5WqFcCn6b6nauwa2JoAwjuNGzyUvZgbxHKpndRSX6yb7yw2g684bJcwfZr3rhPGKZya",
  "key6": "5pHb4kaoGp271BYqJDTC7MkAUYrpQ9xsFYz3m3ePzkimsgg5RLi9NsRfNaAAmormdCqtC3m4Kq8RHEd5wxxx2nhz",
  "key7": "3VbAmvT5kcpZUFWVLUyEMjHJmFYB99zzveUifgW7tR2PYnAjCkrxFWqu468qkmhssB8fd3sZ5G8RfwQBo8jbPtFB",
  "key8": "3FkHMDUVnrRaGsDCtcy83yz9LuwrMtLTdXVzXUw2A6XEGaaANL3Bzqva3MdQFKsULmwFb7nZ9GDeAJi1artkc6na",
  "key9": "xGzszGwuESL812MSNWgn2K3a57h4yCXJuZKR1GMecPgot6G465QGNbAiTTtG25NsFEspQXJjaT5Gi7gCXS7qBRu",
  "key10": "6E12pTuMibATYjBB2sQ1aogF5wBnCwHVkW64c98QRwngtAHTuyT9WChFkj97YanX5aQb4R6wyHDteqhUh1NfMmS",
  "key11": "3TixsSxqriWAD88GAn8GbHB41UvTn6Sn4VqsThT9yRUcG5kTizyiobqCrM4aPkbX82Ee2uiWDC7R8fgcMpWta6LK",
  "key12": "5R3stKeA4jCPZfoW9tE56o1xhDaF9Rcjkz7P5QQZJb95ZY91QaSFgcLvqP2trQ1BXMM9LS94nEqGEAFNhBLG4QXE",
  "key13": "44S1rCGW7nq7NBCm1fAk7JcvDQ1jUXhyV1iVo5oWkr5KJKRh5Fz2Az7tYZt1M3BEsjZH4rCgVdRokicw3KshpiW1",
  "key14": "2h5bHyNT9j4aatqmbXSG2sZgebpb6AYNsZ1tNrv7QccpPJ8sTm7ow4LvfRW4huXMnLwL7JygRchjRsGnmWhLp8ES",
  "key15": "2p2CP3SfZ26aRP31tzoBarF4YuBn62eiDyiQWCq5uJiQQV6Caw1STNu9fTWnVkTSFux7cFcT4nUqWmE4HpecTR2Q",
  "key16": "5YiRrwGTBBbyKcY7qAsMvdn8HTjWX2hw56EQkwTjdKSMRJgSQKEb8dPJ3PPmUMQ484ChQVsfTsh68hRVGAYRBC9e",
  "key17": "5Tsrvunhqscue4zxnVEB3eqX8aA1MBEdmAJfYVFgFknqRXuQNPVMSKhZ3ADzPsfexvVeYmdDwB6GSPdsvFBiitpR",
  "key18": "3CQMSELTZ1kAdpmSdY3vQJganZzZ2Awr89R1CUsREMLJ9w6CWDg2SaaAka7QLW89dGoaN7kpDXHnmoYNPmuUCZsS",
  "key19": "3SaV2Pk7iwT7xdRD7ConUsV3YXHAzMjcR7T8ixF9vRWq4BQbGH552Tb3UXi4ek3udEGajyxyXmQe9k7a9bGFp52X",
  "key20": "eTxNzWaoyXWfuXLruBCeSnNBsMvm4dLv5T48wFbMbd69pbtmKPf3263zto38vXJAvweEFuG6U21doWusMTvajK9",
  "key21": "5fpGSWq2vTqHRXwKKb67UhAVa6m9VNevwzJqtAM77PXQfugjxGay3oVu7wYBy4oZxRQozwYS9X5j8A2zeTUp8FBd",
  "key22": "3Z7Prjy8YSMBiYKv1aoMDyq25jbtKMsqKddSxtJEJqLJAmnaMPCyp3TAdomTnVWFDa2XHDFZfoHPg7SSNNSuwYQZ",
  "key23": "3zHHWYBxELPDt4egoafVTfCnY73rQRVboJNEU5wjWadCG6nvV7KzKqRaDobkjnAmJF9bRr4DW1ji7rHu13Vueavd",
  "key24": "26GjcienttnpQ67pKKWd1GEd573qvQurrg2p4rLcnKiY9m8wZmJu287EySmk1pzK3Q9DQzv6PSKZTH8naZjAThgB",
  "key25": "559XQiHXL8Sa7kUsHGYPLK7NBX4Jzw1v9CYWUWf7xm8vnrrZQVq2Gj9MHHZno3PxdXLkABokckH6cDSqn2419478",
  "key26": "4xkK8xq7q2nCxCshJR7htCYhXphJgszT58u3A1ZLt13Uaq4tRGTqaSdNh6QeJ4izexattUaQyxJRSfA4iMJinyiu",
  "key27": "3dEKvJQjCMucHcPHrVRn779orTVACkX7HDKQwzB9fD2APNfnnc5472tygqvEoUMHFKapzmtXGdBmeSpiFnwZregh",
  "key28": "3gwZzbLQyMWn3ktcfec1xjPzoih8XbjtKa9Xkxgh5v931SP672ivxSukpgkJgKK1VdkydmpB6pZMbmQMkhUdXxiF",
  "key29": "4GmZ4CD9vZEr3uqMyCxMiXHjqM7LydiVSXQ5vE8oK5D8sD3Mu3Kmx1M19HXMENDfxHeqHJQZymgQrdN1qdgz1MCK",
  "key30": "2cGEr2eHyFed8MDbpKVRQKbjiSk3t71ay4K68AhVsJVQVPDVvPJGxWjMzmLjS7KLbr8oGak7GY85K2Rjkka2DnQN",
  "key31": "4nVVXVtiFiC97HwQWahv4TqH1hkdHUt87aioKmQxeG8WJBYmipBC3ymY8SWVWaPWCawf38f4th47Bo3LmACMnR5m",
  "key32": "4j2BFYP6jDuoX8q5mWN6KjQwQRs85xZcDYZPMjC44T8FDWuFyFhQUpSmXABMLjJd3fy6wULG2K4hzuiCwrZ4VEQ5",
  "key33": "5Xtg7MyCQFThHRPXSgVwArGyA1BdnWqGrWpAwvw5tQqd9kZBAJEWtRaGRiGzTgTTmTeZHSM995gaTD7TnP7gnwu4",
  "key34": "5QgTFcJiJfnyFTgEjYqTZEeeNeNgx1NP5DRy39vUKcy7JK5jsaMstKq6emxiaDcGCEfVFcKLa4tR8ZtjNqhhYjDp",
  "key35": "3ycyn1SonfNqTe7pbZkqo2YwMsyt1PecPMkSu1rtNyZyemLn5fhp4rsYkek4tT6RH7PtARUzbqzELonHnZFQe18w",
  "key36": "5ApRfGQg19LezLe5st79fYuM6TnawFB5uA2TzFKAHRqMdZxjHuDpigtAB7Bfq7SzNexdbGGUJLJamEje9ccGVH3F",
  "key37": "UdMEzJHKtXA4JhMCdYfaQwcZZzTYSCAibh1hSq744j4RBxXBepFCA5VuQLnvkH8yLipAPafnyDyxiZrFMabmn1M",
  "key38": "nwnGz7x2MxdPwH5xmd7qL8XEmogg915pCUpDBV4iZpiiZsM5kt5E8jPK6SN37aAXtGPdwJmfJXwELBsbHjKdPGk",
  "key39": "3ZPgvmJpDcHZJjpAb1AKNAChCjTW3VvEqMCUfiE9KxJmrRZSDhezTD9WNnTnKe8uKy4aBznzA3W6yTDzRpbSDVcH",
  "key40": "3BfaasT66bVWdakstyQ2yhgkSFeHVJTey1NUmQtoyYHo3gGw15SrneuHXXaofxj9d41HA4SdejCamE46GQBvpg7C",
  "key41": "pEVj6dCtuaQ1hnJrq9dWc9zPjV6eLNLKfXQetxV5gvR6sAzudK74MMa8EGNbPtVghwEq4cmYc6MKphfCVEcfwAk",
  "key42": "26G7DwWwVR7Cq3LTzNzyYeAHFzNGjWQy5GUEoiBgccapy1qcYKuzLgoFfpG9P9c5hQxp7wssYSEPotG42jE3Hzny",
  "key43": "UVw7mB4wGNi1gF2U8GdbjvFHAKgt2rgBL4fBxv5j43JYoxiou8mWHsbTbbSiteczmBxrLW42V4rESe1aPa8Rf5q",
  "key44": "4u2FUtua1cKq6cXX8qHG7qGw3YNMXAG1aG2g8djcJup32ywnZSKZjdoyzUnQ89MRN2WG14yCp3KLJ7xWk26uhb6J",
  "key45": "mQh5WezBqkgbJNqxrccDo91orivhCNqgMepfLSKXJX9RB1QmPPvZerk9i7nRSPiR42qVDnrZqsNhX41Lrj6Yk3C",
  "key46": "2QBWjoipWLFKTSCboTNyDC8aJC2gbTwGfrJ1TqUJsc2uAuScKRGQC3SN1G5vnD4i9uNgCK3Q3KHFHk9E5Dodjqpq"
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
