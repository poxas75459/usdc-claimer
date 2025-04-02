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
    "4GSkDiX5mM9y3M6G4A4Jx9LfoQ8gq5wBvf4uncMTbbC6RRufTwGTzwDRGmb7TcvCRqK8g4dohfwLstxavJGurFqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NsJbdttawgU4fck3zhKpiMiNW1bnQSBhrgJqqrG3ce7Cua66ER4d9XMR1CXusjr3y2LYe9mD5FSxic6L9vRr6V2",
  "key1": "jXFiyhWok5JiL8M8vWZMd68B3js62Y2ZTUWbfAgQAzsjHjbzDWpAES1oFu5WVyhRBK4csidhZsbqgwbQVsnT4uT",
  "key2": "4Ctg5XG6WVRCryhGuWbRbkaY1aFeDXgjVbxeTK2TPzAEM5LuekRs59tyQgjp465kYctkwwsg8PjUuirn7jBtTpGv",
  "key3": "5DSvvuRuMqrAudkAmuajNJjtawyFm9vCzZ2y5u3bhoTtAFfSKnSX9dit29Ecpf4EZmPseR7GhnXbTvD2Nw7ZuZUH",
  "key4": "4nAFUPCxXSb2BVbZT4JcTJtaPKFs7s2TRKCRkzbpd3sRkwJZez4FMGoyc5A7C6Z9Rv8bH3iEjdCzvy7tXs5twJ6i",
  "key5": "dsEfrBttQNeAubJj5ZSMjpe7b3egMoEUMcJvzWxEjJQ7hxbWCdDpE3Ef8Fs7uz4Be97cE1CCm67WC8EUaHXbnxq",
  "key6": "3MC2fzWtUyFp91tozB6QXyE5b8uccEa2wdjnLGYqy3DYxirHtMQbkuasoNvunNt2eq4GzP8WPU2oDcfoiGkpmNgr",
  "key7": "5q5TVSoP5GNVFPmMYQuHzVQD4v3GUHYYaJNBbFQewJ4mXJUiFyRLtpjgM3LeyHAxuhPP6cdvJGwK9hTWNcAkFLuT",
  "key8": "3jxnb1R5hBUM5xKjpkxhqzKjL84NmAUtFMkRtdknahG4T3e8hbSdoZCccn7qnhE9Kc5A4EB4B8taprB72dneJ1J7",
  "key9": "5aEHtwhGr2hVR4C4XfEU53RFNZ6EV9Ec3FEX6LzjF16huGFC2mxZ66j5xveTVfcjxnMGnZwHMMDrGS7MSsN2jfQL",
  "key10": "2FxVAqcH5Bn3kVcsYrqziDbJamr3N3j2WpHShgoCzHkp7yW8mW2r8J6v7ziNiZQA39Fj1LusPrP3UmTuztu1F97a",
  "key11": "3fErLz8Sn2L1zWJtXFiLZsX2pCAonhADLqCgFdmMN29jCtG8ZuR3AYaLzRb7BsjtBvkGwvM7w8pcjdZ8C51R9aeA",
  "key12": "4xF19vpKNK6YCKBHt721Yi7WPPuaDmiL8b2hU11v9iShZkzManHavL3g84BVYZV6Xz3nS7RtP3WquE1feqGmuR8P",
  "key13": "4sNgf62gYmsBTQAt2aopZv7uHCf2C9GTcLH896wQHoJbBNBBuxaXMvxNdP7MmvzxwHuucPZrGc9EX4Dmyt36HZ1Q",
  "key14": "JS22kSnKnehtnDyuDBPpZ3K3o7kxnoR8N3QRuXRadzP5sSV8UAA5RVqVcVMbqNSgnrLvnuCMGmhYHK42aM4g5Hb",
  "key15": "5PnrgeYhFnM4WPSmeP3LReJxhAA1tVonVptRL3rGDfYdbAtGsJB97mRByHAhbstVUabyhWFuSy7u3erRRanD629V",
  "key16": "2p1cRpBLf6tH2xeqDAGuerAtnvtpUkrx8QZVHrm39CminLR4ajm336t1qRFH76n3DR5AfnwjubE8UhdCYgc1P7nc",
  "key17": "V4BZv3MZu4kXLtFgZ92kDxH1ZNMY6CghbUr9896pisJPmUsrBJ5qhaBfBg3BhoVTMRgb3KdEZ7GzsX8Wj2p1ic7",
  "key18": "35qjFdBekyMESvn2d4DAM25kndHuQ1ssCEKnaHS1qBJwUXHsfvG9jS1MWS1eBcuNZM4iWgcdwr1ytGvDkPRyiZz3",
  "key19": "4yoAg9Rmw2CGCEgSNrJ3YWz37kVcQK2n69SgK6HrrmWsESRtj26AeoKvfd1wQKzN2yMbV8CXJmtiLenB1UZ1i7eS",
  "key20": "4SwUv9DNkVgoWaU3KtXB8td43ZGw17s9s538JH1fcRxu7WXsXKmtecxDpRwpeiF9gosdDGhiht7oXfL7JRrs7Kmb",
  "key21": "1QwFcd3HutEcqmf8if4E7sJ1yezr1djDuxi171j5zjk2mTKrWbJSBMkwRhVdWVky55d39XBZn2rALrFiXkP4QZi",
  "key22": "9g5du2DiSYuyh7NKZPUejNx5Np6Hziv1QcSY9GrqnCK5HvTxtGkSVF1aKp2bpzC6j3hDg92g3VVHfpbuBMg8Tv4",
  "key23": "4xFbrD9zMzVsJnJHYVXnwAsPTZ746e3Kq5yDctw4oeCEnwfimCfNqvB1BXMewwZdbvfEtXsZam1Q3ZGH2i7bGEbo",
  "key24": "5djymtfJDqtq1EYEsyczHFa4hPiJTcqMgxTQ9AMs3LsemMDU849NNooJ2EYwRebTZ7K6bcHDbWLn3yV6esunxgKC",
  "key25": "35V6KLhYprmR3nZ5xDz7DUkbP3zACgDbnLYYRe7kRdNVn73kBHxKhabDwZGDzv1186SGfc2bSpHo1zuiUnrwiFWm",
  "key26": "54KDkZtYSsMCTV8u3Ubkmn174HdMa5SxUJQpUM3D3J6zU1NtayWk8sBGpCYWrKHRkxYvdFX9EnoECdr7j27VbXde",
  "key27": "3fkPYLgSwZZRz58d7gTFhcDsC3DEFpgFd6kFMcNJdY6KqJ3BsZdw8T1jwSWabEo435emzY4NEA2d4YRNKnjPMPjq",
  "key28": "625BHobszWWxAS6QKvW3jYCc39bch9kMuid836BwLwvy4qeGShDyVELcAwDv41bXX61X4GTVqsYQnTp9fZ2UMiEj",
  "key29": "3DJAc6MfHZbNYe8uMb7vk11A86Ru8Jp83DK8B4oG9PuJy1ATjyUVbbFGV1MGvB5QKnivDqVDqDYK4dWdLkK8piDJ",
  "key30": "3N4VrtUyiq7HRzPWX3FUeBJykRCfrnsvEJJr4J4teYcj4UMKfansWH6B9FsDrpR5mDBB2akGX9A6E8h1LcvASo7P",
  "key31": "4XRAUCNRPsp8912JfJFA5ZJDASZCHgiH8AMqp1xjU4TKNMnaBp2iQaQL41ShVaymdzmmMrdmT5NGWJTaSa7P7QTG",
  "key32": "5QZWEj2haLzrq37Ky7CBs1MMhpVHRXg5a7r2zHvqkMgfejedJiNFdTnuh3mLJXaN91VrBTjcajSeD64TztfUBRVU",
  "key33": "3MQtNbrrT42KKU8t4Ky7Fn2eV3FdWiAivUvHVXJ1Xf9vUYwmRLHrV4BTagS1nMSfY3tyn6Qko8uYDWgtd3Za9L4J",
  "key34": "2aijf6mH8CRS1sBd3Pdp2XqmQWVFvAWzocpNtbV5Ji8F4KVARnNAaUWLDMJ5Q9i2NEo8PnvTjiygzvLXum6VoY8M",
  "key35": "bUDxjaJXw3GyaweVbUcegMWohi7m55aJxVtNsQ4xmEbCEFGd37B3PJFJigpqTqRAwEi2GYKPuYsK29fLhT6yCzW",
  "key36": "oyf1q1YHu6NnfGiV5zMvrh5DkiZCqNiXdsbQVTp9gDsXyXYPx2rJuWU1TYE8mGU4ErPZbrjbzMsQh8CdSeVUspN",
  "key37": "5gjSiGUvLPED6G9h8dLvGqQemBQcc276TkcwJMq6iH46T7saE1ys537o6MxtFt9GMk1eYBvdY3eCgEAX3psCHncm",
  "key38": "2NiV3rqvTm5XUfgncfT7cCzUqV6Zay6s1MgWJ2uVSvrc1rMC4st1FrB1PwiKjuK9Gn9bnitZtARPcmjGLEmLPCLm",
  "key39": "2bWvWRL9U82chRJuqDNRZQQN2kFP62aa1bHNXmkQm4DHxmGBnZihwapvMkV7D1X3XTkeYTsmDEPk25XyEDa4f4fG"
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
