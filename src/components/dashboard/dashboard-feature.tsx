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
    "4dgddXJNpbGLjM7ohXxjNUFNssEUYmWCL8x6jA1haZnQSk6E1zGX5Te7Jhe2h1mJ6xVWdc4QZjKwCFDZQDFfHhyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1npZhP62wjXb2PZKi1H452xetFhj4CskXsN2Qd7i9Ac64fZJNJ7y9cWzChydhNfow7qiY7LTVPwcVdwFG68n3Y",
  "key1": "26dnbmrTHXe6bDabCqQsTgbJ2S2SGh2y65PUKURbRhGRYo8xJx1fwEcm95cWvUDVoJYrYzz6KxvZGeiHZk6fSfe4",
  "key2": "5jtrC457nbDhRUAns68SpMdYyi7ZN7NmMtT9SrEK5Z93hPWDPkeabkEAajU5cM51FfzWHQPqRizBVNZDbuwMXvYY",
  "key3": "qsshrMMCCb7H5Ze9Ay4NcvH5h3Wy3FEYkThGzY1orGoReaxLXn1qoro5P3sukCxuHvENY8DFNVKhzy1RBs1Mchz",
  "key4": "2RqEgDZMimxRivNm9WtENPNYFLErtvWLQ3B87YaGZN5fXtxPPvAynX5C95LMRMvzpLrrn2A1d3vyzXxRku1AMoKz",
  "key5": "4Yz7LohKiEcp3ZFVi2Q6odjTcoS5RQ6ZiFQWMGELneEpUjqhGz9GzjtiyuM2pPaKvgoNbqcYMq7mwDurihPkzxiG",
  "key6": "313iwjjRbC6MNgRBMR3gxDx2fSX7LdkmJSdcfT9NPsF2vmJz6n9ntkwaTBD5Fa5UcuMQsoibcoPUK9kAngkbnyb7",
  "key7": "3rLEySKrEx4PkwpEx8j9uYiwfm5T34b7Rkn6pt6fCruzeM5ccpbGGUPSEmsSHQxKLdb3yVWSm3uVWAh3XyU92jwM",
  "key8": "2mTvzfdLkwNkEo7J8uVFN1Vpu6dHnXE1sh6kRK2gX9xNVCNLzmSc8LA6duEkyK4ESR1ch9EjHFBnn8xeFdw8Ys1R",
  "key9": "Hh4miTMiPwWeiJbAah8hVBmefSpmWUpVQEYcHeTjEFtbYbvzMJBrpe2Way6qaBuPmPs94UB4M44zVUUAsG4iiTf",
  "key10": "MiPMYWQt5Nb1cTrnu2omNRxceGQ8cYcJoTxqQY6PCyjqBufxW3fLKdHNPpHJw3AVz88Z8zudT3i93YU4fzZBLr6",
  "key11": "hERkxeCifBQnRj58EK8LksA3BzojhwaNyoG9K3LqSVjDZxobX2rv1781EfvwJfHrWYmU9dcgYwrX6GtmssjTBiT",
  "key12": "4WWZotCW6Z61c2eJpjv5RKpX35vtqL2yncss9wMGHWkLc7GPrst86yGjYUUsBp1NzZE6fKvZkDuLsYaPN9Hfcxmf",
  "key13": "4hPkcKt2T3fXPSjX7wSNzPd834qmEFB26765ZpR4Zz4r6ZKXn4KpYj3f2gSXMP8uAw4YRAsLEYEm4obbWaSYPuhj",
  "key14": "2BqgZ3e7QQZKF7ytojgNK4kP7M8NbmqrL8hJ84eBxo9rdHFtvbrKVbfVworGXG9HA6BMX31F38a74orkCH4owqJh",
  "key15": "2Q6EuPFKoudMdgYZVZbLms7c6EGfoV8W8YmMSTqBk7v2qPd8e5jPFmhMevkXoJrSaEBsMzLPfT9u4pJx54qVwv7F",
  "key16": "5oiuNLvu8bH71L3p64GGo4kd5RpGMMjMo7vZHNDGmUVYaMPVjLKiyHf8bLbsgxPgBtB2im5UAg7V1uXmp8kz142Y",
  "key17": "2P6Y9KGHPgUz2eVaNeYhH9Un5yWpNzYWHm4LrHEC7bp2Xe92895EgnCBfzszLabq4S3VPaaFxSoB9iGqJuwb6Ajh",
  "key18": "3Uq742gKJDhhyX6GyEcPktX3hVfFYjG6mMd7Lhpm7gCMDTcAB7krGx63VQ3JdzCg7F6x4KaSzbQWKXyfjwAAREoB",
  "key19": "3kMQ3sHesPzrfgWyeL9EYoVg33RUoKDXoqBnWGpCeepmP3rDzySgcWVvHkzgPmRUp96V2yQy36sJZPVYUCuireE3",
  "key20": "64QsPXxmKwZ6TZGgQrQiepbyPQCYyrzx9sSNZzi6q41HosK8yjj2DccUbNUezDu2nTPnVxD4ijufo7fpuJZyJ3ZY",
  "key21": "2UPLsDGysv2vZ7sU6hDciAiaAVWfEfFNyP3czB3rA1GeLQscrKgSHspmf4Fas41ACsvb1yjA9ZnZ6cuzd68bhktJ",
  "key22": "4q93UxtNETHW7ncANU7P3WrqZszLXbRqQFW4g1EZ7NPBd7x2BJ6YkEuEBobuq1EvRr7tZcejftoEBu5ea8j2R9jL",
  "key23": "27qqar4p1wVWikaFBjXFLua7tiZZqqifEKaHx4e3n6AAMCRQ5UsLKzuUEMqRnzFUDEGEVeN632jxpAiHQUbqaz7p",
  "key24": "Qh9a1P4D6W8WMFAxGuSkTqjrg72vVk65KGeAroc39KMNLS4ffphFYSp8b8zPE6BaEgMVQiTNeh1sCrBd3Lhf7oi",
  "key25": "4bBxRJ2bKoA3CTxPc8bqK3SwE1UG7m2eBmPvFHcqh5uWbocMg2aY94d17pv5yMRsLwu3YVXqWLjG4Wd4uwD7Kduc",
  "key26": "66VtjhsFxPNERMoNWDsXaHHLUQ7Hee4VgVuw3FC5Recsi6rA54VfN6qz7em524r58ueWncemYbLvPbpX8iEKKbmj",
  "key27": "3QrpFC5LD7tS7emdM9GW2Hhxrsf8Kn7XM9domSner3G4W8Mf4KHWuyAtbRP9FBehxMbQiTinLi4zVG9pfCnR8nxc",
  "key28": "2tAoY2NPGGp35ggVkXM4FWto7DwtVDVpPCuF26t3mcXDQWxe7TMEWQY1c6bcnBo4prp7ojgbxEmecNSJSZGyTZ83",
  "key29": "557s5X4XAXf8fh8Z8XmXrAF5eBb8GJMeNAwPAeF227aJkhWLAqrVJChinnKacsArnz2qRD8bqx2nejB1CPwdzQJz",
  "key30": "5dRnspRaEm8MS2LSyRE8N6ZswP1v5k6d9pb2wQgueXJasVSmoy5yU5auFTZ4wnz1Rt1hZLbF38jNbcXMxUj7gH6A",
  "key31": "33YMUDHcjz5J4jr7Cc5zj56kRi589NZr79MyEweDNKZx59GUEeSNLa2KqoSFSDqJukgvBXroVcQLym6Cdghn4iRQ",
  "key32": "52BiY6MddDgem3yHkrgsFUip7afumY2xe2LSa5QUJ3ttV7YJPnJPjgw4bShvbDwRqcnLt58SMsRDwkt2Ab7yh6Um",
  "key33": "4KC23jVm4RWSqE5dufcAokXPwzxSdAmpFxij2tnWfKxfDSUwEhLEAVPh9GqeVzzsy9bC3Ugy4c7Y9WRVaH1jfgqf"
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
