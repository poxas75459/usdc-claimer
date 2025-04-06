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
    "4JrDJ8burbgE3c3ArkLgPeJgdoxk1cym8zv9g12onL21vifmy86HsP85KGkLnSQ3gdRPsrv2CLFfZzCbw1XifqJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrSJNCvmFiPQDYQte4vyx7f7rH18aRP4wLqtZCyhNwXdiNAeeXcxMrnQNGExWd9GKHy6DGVP9HDZBoy9vY1iYjK",
  "key1": "2qd2gxH2hxf271FzzPvzLSBGiKJaCcEyQdagn4EXNrBS74vxYcq4F9d626i2xsF2RxnjFrH5AqBDRiHY2AJHnUsZ",
  "key2": "4RxEcGhQhgjEiNb5F3nCc8aWFaEio4Hn2veptkvYQLqERFf4gwXkxtjFnBKb849abWdmGCj6LCUBZSqYxJmUASy4",
  "key3": "2tgX4wRWUdvFNwr3Ds5A5YeB9rBhbx9LYHtoygJGjmug8oxFHRwY7wqLnuoEqocH2sCduJFgZSa8s55Z7hMKuki",
  "key4": "XLBjbKo8inFmUERamGUCXcmZyfayibSt3whAB55Y2bP7TijAb1YJwzwYwqnBb9JxRH7Rhz3VsUtujv8VMu5Mu4L",
  "key5": "3sbqrtoBxTe5Xp2Jj1EtEDkwmYsBznJs949BtX6AH32FUrHGaP2adJHAbKJEpcL1PqiJmmZDvJb78Ks2bfKx5nek",
  "key6": "3vTRBnDMxj3uK1xosbGcJEDpStwQavSwFymFJ2ex6XjtF4w9hwwT8KA6bZKbKNA7MurMSJkKAqFHE1QYhSMSr5zh",
  "key7": "2BhZynNoumu92xNb1m1soFKYN8md4Qu52AU7eNhpfWP3z7NANTKiTXw3wcv8pLYpUysnmzBgvp1vFPuufs5JARjr",
  "key8": "21GhFzWukkbNSga5qyV69b4eQNSGdgN5tkp7SGHs8end99jSTYp3yHiRiPuppEDVM3gZbnC4DEJSDF2BRMLBXcP1",
  "key9": "HqL722WqhrcRPfo74Uah3qqNtFhRrfWkmSq45vUcRHdfr1yez6o2yBvKPZw2CymgFGuxKB8EmV8KAputguZTN9t",
  "key10": "2Bzt47jnxeBkrZ52QUBfDG9P7HsaSwxZ5Hb54cB1CuRFtGtNSpse9STm21MaqQBa7QXuYGCsw6z8AuBdvDCnkvsG",
  "key11": "2REnMR7JiRpobscqEwRNGKzeZb2tFgxekzwnmvxdQeJ1adybc7Pa5ooZLMMxC3CU3SxpUJHweuLioe7rm6Ww23P2",
  "key12": "5W5ur6HSBnF22pnSzTnYEnoJYGmZMiRGmyCvEREdU1rKGUZVEtjXGnb4WahdQXDEVVugexg2AJ9eoiFtPWPUYe4x",
  "key13": "PucaKg4RNDtHs6TY4ab5UhJBN1rLPXLCQSXKBGsZ5n7kfkXr3xmhyeA3BsNGaS92W8w7qt6R5Evk3ymXVNxtcT1",
  "key14": "4krDyEe8ykmStEfq2C5tmD4LD1duaBqnTasTDGkUYd8XWaQAjBuQ7QzWgnUEkoFMgpYW38ax8tCQppv65AySDLVF",
  "key15": "2LjS9owStfyj7ZjyZhuuhdqRDqP49tXQ7GCmnfwfsxA8Mg7w1mjmaH64NocSsvE1fK1RJhEAXvwQ3kbhkwKPq3V6",
  "key16": "4aQ3RS9WCnPoNsVpWL64T4vedRfnbNZ8HakWRy18gATyRARKRc6MkZaCHdmnvsxP8AJKCkHnKKaVwThPvqQBkb6g",
  "key17": "2RE1qhEMa8fsmKYzQQQJR8rw1rMKNDjzbW2TiKvEPwkPgbwa8XjDrqMqKJc5gW8MerK449YeJuYGqTbxBsJtwjEf",
  "key18": "2ybU15ndf1WddzwERToTb8HUePLMrcrJoqqnEKVDGnt434fvocpLJF57ce9GSLqhZY5Nx2kpJHcJUkDZ195P93xf",
  "key19": "6668U4TzUVBs2978MobWNvXVsuDUjFErGKzgDsJBeH4p81X1GX1oxX3FBw6hzKVjPZUjUaESQsRg8n77VHURUGc6",
  "key20": "4BNuc7sLLfUUH3AAKpR5hnFPkLP9oqteN4VxLdDQ4821HirUVkpvZTBHM7chzNxRpzAMyVcHDRcwwAu8S6YXrsw7",
  "key21": "2Ja4q2A3nysShY8hy5QpiNK8Wcfog2UTsWudxf8xiaPQ41bRYCv51njiA1wkq2hTJCcDWWjuqDzzzDB7sio6thUq",
  "key22": "2X2jBDUxfscdhELZawW58sMq69Q7H3sw67UB4Z6t9nbXGhLr9MGrquJ1EakdBZZGmtotNhHpoqbZjWEuWtNgUXmQ",
  "key23": "3GN3WkjGhFXxHRchTTTJVBHc27vaP8sRWXaBbJaWE8b1HyGPucVBsBdJ5Vy4k1WeeTjSMCp4css6WeG8T6tyhiyE",
  "key24": "KVsrqCUz6NZE894s1zg4YXZyq1ueTsKGKVGFYa1h7VWznkTDRWSEeX1kMuqgPLKC56RfSmsWKCzhj8viaPxnD75",
  "key25": "48oZsABYKYppBCkVKsq8EqKT9qnzwFubbmHMHk6y2ynec4XKEURs7PbQs8KBwmi3bZMztZsLV92AY3uvSzcdn7ZX",
  "key26": "SduHfgiomjZCRrnydsGPAyMFphNfBoMHo4Y7BC1tRYyDJRX7GDdkevTPLh9GdZPR9hicBdAAs3jTbLNPP3uRvpW",
  "key27": "xKNhSWah8NsNQpj9YSZCRLcfrWviaXGtiLQZ6AKd79cR1PFF9d8a62bUJK81DRutiYEVYCZZwmcHDvXz3J4jxMn",
  "key28": "4Ltk7sdRnGDmJ1D7PHmavADAqPYAbRige4bbz5GKpzf4qcktvHdLTnv5HEYhx5wzv9Uh8xgRQcRdno1rYoTWgNQq",
  "key29": "3Gr2YvfhwdH9jUqgUgw8VMs79YiCj7g7ht5ZhuefuqsAK5AeWHR2vkSphpJv2Vr9UWcQYpa2qviaRoHzZMLwbA51",
  "key30": "2sEQ2nXPbWtw6BRW74FXvs1nkNbsGvXpmsBRsmMV6XS8KbCN94idg8f3t1drGUf6LphpCdbwfKr8g45uJH8UFYSx",
  "key31": "2naAJSv3ubtArd1yQpn1wD5kM9P1XbSU4YmVwSXCHfrNx17mLaogH21VACyEG3WqD8u4N4UNxZjJfoT4CcuQQZkp",
  "key32": "3pcXRSQD5PVujaHUNiYEPWJp384A8W96dpUoENVBNHvxUMczt2MBTCQeXudEsFx3k7u2Aya3o1vRNGHz8KVYUHUJ",
  "key33": "4JsiCFKR2myc7CXgDoPDB9jvgMcXQVRaGGxVtV4Gef5bmwcj3qo9SLQcdDXiR4LxDx2CctwVUa2BcnqGiXE1USHC",
  "key34": "4BW5o8cbbinBS9ZbuiTCPQKGLkDzXMVWJFDxD4Pf3sjszUnsaDjipUenQtwLJd9NdFH2Yk4U6Yt3uM2zMDQdsYhT",
  "key35": "2E9uHsnFfnX95e6aAfYydroMx2VpLtiVe3aT9KZmYWMDyh5pStaKj1vEYCoxpbtgfcFXGMPJiaTae7yoqYvzpVwZ"
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
