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
    "5mt1tPY3aRfX1piZpMZbk8DLPfhe98tKwrSNtRFNcMKL7FU1HD1d6s1Z4C1ByTnrSQR2gHfnTKPFupy9KjTPQEok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vieG5JbnD1XtNG2zG7gncLwtxUsWAwUwxmRRBhqf72pJ1qehDeTqSFL3yAYYZ438Bov7FzNo5aubyCVzr3AphyX",
  "key1": "64P6GNLVHm8s1WhyHcDSW2spqECavk2Bzuxud97XLRXm8sZtGPEcavVmR1n3VYQUG8r8HrDkTXeAejUeHR98X1mP",
  "key2": "3cWHnLpAtAgdjm26eWbeuBpcjomGiou7qxVLhBi1SciC6aVFL3Mzopmo9HzADw2SS27Dwqnmv8Mpn65VHtnHGo8G",
  "key3": "5aDnR5jsd3oBzhcc8p56T6mxYRXMjcrSVpa7yjzuoNa1kPQojfWXEdwjkF6Hh6NHYSwB4e2da3XVjPbKGcVPME46",
  "key4": "3kZt2VSfJTrKTcV2e6yeVqeBERG6PiSo7V6tUKEcRRgv7Z4cB9G5QchfnRZvMtooKhvPKZZWaek2dszKVvzLebPv",
  "key5": "5KYDsjjSgUymEH5Kcpaus2T4bcyU8oc2R25uLr9Rs5ni7VMs1K7KhpMynxiVJQuPUyHxR3kXhBV65bazjrpxEUqs",
  "key6": "3ULGudU1b8yaQ7JQpHHZnVeiYT36AhDBXUSRTpG8TNCWoq9LzwZSaHcBjpZ2s2RqmXW3RoTuTNqu5QRzamc52FLp",
  "key7": "5bRasuammgYsVKAc748xcbT51Mkd4e75Fw4ZYdXHvsDUAu2PxHk3NotfBUuoDnhbw38DQjYmD2LNA4yhF6Bxp3gM",
  "key8": "5uhNaV8fSbZLCK3Ut7Jkt45PepT2q5YnjJzPN9hS17E9MHtHLRnkJynexgsccR9oT6dqnMxEjAQQF1dDwQguB4M2",
  "key9": "4Geo4tQ2VnnppYRDWkPajpL5JFXD4yLtuXowFN7rYec7rzGQzJYYPxSbA9yF9oWumMMvUpp6yFHUtgS6VF7u3yAF",
  "key10": "3bmJ2V5fVwRNWLwKUqXPhHvnuAjkTxvHPXMtgdp79aVE8gWJYcN5PQY5D9XRmFCqe8eixQ5GehkMETkath2vinaS",
  "key11": "4UooWNctaarrUvnRs4efCwPoFUTbTei6Rv8FivtkYiwaKV5ERwyihaGLGC7b8kAJ4ZQM9esAzQpuwNqp1BDgC1Tt",
  "key12": "4C4wxKWL2aJLZgr8JBxoDojKBXFjtQgrMHAr35x9Kfximqa6CikCYK6xZy3hm4bn5LzH7pv4JxVt8g93eBxwuozn",
  "key13": "rBHNbznVTQWqvKE1D3W8LVJgNW7uChhA4h7kk5U3queudNexdP9McrAqp3D6HJDTpUyzS2VkKxfU49FpX8jokS3",
  "key14": "4toZRaAx6x6JuoVvak7Nu4RrjPoX1fWGsRXSR3aec2CTXk7EvVKPaHZHMMpxV6m1Gktr1B3wNdwZfDGY14axdVdg",
  "key15": "3xA4TPbLaQ1DYXxnbBvGQ7tMjhVuF3d4F4PJZQ1c5c8RVq7i1ZPVo9XCsHqY9mHvHZfmHJk4KJ58a3fXz767zDTu",
  "key16": "4fo7EXMViiyWCwNRHynA86BfR6PC9UCHYrfFGcAfTsRT1XCeXsm4Fb9yhoksXcPvmDVGcHsikHaR3ApDtDPe1ZWK",
  "key17": "5LAi732GYSNwQiZc9vs2KQQLjy21wRbeYayt587DQ2hj6R1Zd1FMbWVrpPgXk3RdL6KQzMfNW8tM4KrBy9cVHKDn",
  "key18": "3EsdZDnB2kqXWtYK2WVivm1fhyLkSTPsM6rLZU43LQKxVPn6eH2kfcVoJgg6k5khGozMZw3SoQzBRJNXun6yxkir",
  "key19": "tdkuHBsJzx2vpq2PnLXcBnKmZDngEgTjGAFvjK9vCWqz4eLdMJzdY93socWtMuSYLRABjyA5SiVwuyZLD7v8axj",
  "key20": "2qUwrfykU9MQybWQ6YmDZu8fgroXf6m1bSKd1mK89zZKSFqcEwdvh32yZ4N6p4cbTr8r2LCJvZBXgFhugdu3FExD",
  "key21": "5HxKkxFMM3arZs7fnQc6gRsaanPdwUghGrTsQZGiJAMVsN1kAWU8vPt3yzDFjfYCeE8E3PsNGzSvkTrzs97o4Qog",
  "key22": "vW8VnJjvgj7WpxKKsMYjCV9WttsFfV2NWXgLViqsozotAJTfz6pUhfKSw43nWL63xcEthYo788BuokzTepvNMbL",
  "key23": "3StVCpjTHFns78Rp1w8Y6LKGdrhdiRfuWTMEQTd9hvFouYxsfjSjzA9eEqUNafiKVRd2UqG5yovSThtqd1bUtkXY",
  "key24": "3qkdLvTSM2N7G91tvt3maRDbXGZqmTvpGprE7EiF1F8Jbdo8JZqsUkRu53Rv7XMoMaoosfotSbJdxpAjbvZPZwA6",
  "key25": "2a5epU2McBNUZZpUvd1cdmNCHwLN2i1LosM7qghxCSZU2oARk8hh9EYqHmrHZVnHJEmsUfY6B68XoEe4nMCy2ydj",
  "key26": "32K9mXShNRJq4M3h8Buc7b9XRFV72oQVJ3xmqounnfDTiPxc2VDHcKAnAn6fiABcYXX4QaoCysn17VvsSApfgCkC",
  "key27": "5p7mRDD2ZMcYR2LfEaaDBdxkEZSfZVBDzKtYkpxPc6b6vHZMncjzSbq7nngom9euSuNNcVB2rmkfAMeas1b1d97p",
  "key28": "4tFSEhgMvEE1QEUhSiHQpfoZHMWmN7EKke5bmYAXbZhUPwY8N4Wv8HNDfrjqWumevqEpiCxXrQRbgYy1DyzH8yGW",
  "key29": "21uiChKxEn4KCdnJ9GZW4qCUcsU7ZQTR748ooy8WZPLhN3fJvU8V3Q3sbyfpfPQ6LpByMSCYDzCqyTRXGpenWrer",
  "key30": "2ofNcycwidyU8iQSa1h8LmDcJM2UvqYJQry1thJbGUy93fmCzU2xdz3sAMLcnFAULRg3KsmShUKaf1G491Xi8JdN",
  "key31": "5Tmv3dj7T3dDKCMe6xz6MEyxCcHm435qiYMuNrxhg5dr9VbdVYgutf7ydRycxKdTBWmT3ysHG342eSSxaGpXUN8y",
  "key32": "cjCedXziG1cmbxtjDRpy7UUr6sLs8bKfCwV5LKT8wVXryFjTUULGq261SpMAQ2jGsKnwLoD7XjUCTXrFzt613Si",
  "key33": "4VGGWhz5Z6DgEEa6m4ucsoWqRzdozToc5rGegvRwwK5u7voHQkcYMrFHZod18cgUkiUNLnMQdNPYm2VuCUBXPcQQ",
  "key34": "5qE2XGA3vkMRmrDyampbZkGQ9rrhnqsQqQ73EqRe2JRKsEJHRdoNaLSD3BhH7XcfAmnD452wQXSi5G743fn4GaN7",
  "key35": "2hoavt2rvfw4KXgKu1fWsYiKbFRCp3LNzHMmizRaDb7Xv5eHcHAuezqvj5jouSgzETRUgghSkZasWkJm3ptcFZyE",
  "key36": "21bFFMzWEugVYJfUwtu9LFx7VgnByrNBoXX1HsV7WNpYCtU8yCY3u5eZp5NiDEegdGNZJbCWfqK3dNtjgk1iiDRJ",
  "key37": "24Zdn6XzVUJ4v4h5aPyaT6fiskkh7Wdio9iBpoSn1uUuEoDwznmPXhWTyR5zFQbjgnFb7xbfVdDzXot1CXwsWdUL",
  "key38": "65AiScPixBVpJ4CK8jb7faQ4zTx9EFt81ETYSuGjvvbg24BSy7tepm464ufGAy9uVMCuF5Qqvek63MGjug8H2J3C",
  "key39": "3rnakvbjKSkSFzUzwV7YUXUc6juZyHXLNZM2o9YYR94g5san1UqTRLZbdApGAQLqqn57A8cd1an7y2zmbHWLsKnQ",
  "key40": "fXYKHwdbEoFYAFkAtro7iUyKgpDR9jrvtRaa6Nx3Hq1Hh995uLdSK3MvFALJAzF1rCgBq5ifdkWhd52XLjGtLys",
  "key41": "2rvzfthCXAMZmqG4c77BPbqnLDbvRzTNZPAAMNVpHk2L1MgMkgwj4tnt2H5SkXcj5ohX4KRkHxnFo5CCsgSidW3t",
  "key42": "2ccJBSG1qucLbfc5y914GTemNqtQNW2g2jQe1QVXaDjuyW6JG2xgcaTTUdDdXV2mRx4ccKWEd5ZjbrfjRQVcZC5W",
  "key43": "gJSB4RPGehk9whCYQEmSxXVLvXnGvo49EkAJN5mbePyjLDcidPQ5xShhXkZJ7VVmcfDyLMUV2Xudsdg9qjbgcrH",
  "key44": "2b5x1KSqAwAb8aeBye3ggydZe5cvNzqt9upNujsoGfkBYVe8koAJX3MUQFC5DTZG1opCQ8wxneL11jQ6GV1GgQLx",
  "key45": "3Qm2eDg711RDDZxkmDRNr6QhurYziogtrbUE7tX1cKTYoCaW9zhNzP6wRXpBNh7iinyWE517rujoA45Mhj4duNh8",
  "key46": "2zHSFA6PMf5T1eCQkeSgm1MkZvsqn86PQCP3b8YVak2TbohShbd6oZK5TnLxFR7ahGqdrj9pfwZGKwPp1W8cDhYh",
  "key47": "WvTJxHsaujt6w7SCQ2rxk7u35WF4BBA2ZAmxcN7yAn5QBrZtP26Q6g1DnV7bw26t2t4CWdfV8VRTcyvWu9pCesh",
  "key48": "2tYkm5cqF6UjGhPqybLSQzbYjZPLgp7wC8yKLfaJVLWckBPty14D49vsGL1wSru1ZzxiwJRYPBBvxj24BfN5S9dW"
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
