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
    "3DqZ5verPAowKtWrurka9kb4Rrq2Ux2o8Y3NoZrX3mnzR8DJJ3hhiEZxfx1XkfgGTuYSRk3cjvz4tXPTtNswDAa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjFBXkP1SBHf6ytdeyJvbXHfcHKC2DwAd1qraFqQr6A7rdQRPemi9kfzhHymSdsnv2z81JJuQKGb9Eq5cotMy6h",
  "key1": "5rJ9yvc6NgBxpYcy98qk4v2F8NT9jX3MPqp1t8Wf1TA9y7RRctQWGCvQ6oRX34tYaPf8RDiBY7SWXJo8kL2TPpfP",
  "key2": "54UrrQo4WdW1V5BkSM86zt9i1aqoAqBVFempWBjy1Fn2vcq3NXSVFHMHmFLLUbWUCwUo87jR2GWxaKywx6cZag4Y",
  "key3": "4RYzdjWEVgr6FU9JbGGYYgJhpJPkCmBjqkrpiFKnxbNZ4cRrdKVjPJFU2QtxdP3Hw3xMJ4NpupdzAWxzGMurE4XK",
  "key4": "58FQq8L9Js864Ef9UMoxVXGYKRtX2v4N2G13sCU5furMtGpffjnnaD4qciAzJSURDx24AgtMQmEtCfhYoP4yLnwy",
  "key5": "5CRznJj7Sn6yGpaeerRdMWY7WRiZgik9SDKgv8EUrkmDZA5GFeFs8swBUX4fsNp2iCD1PxUWSUDjU1AwyAgfa9vH",
  "key6": "4iB1JDfhQL4GTLMJdcSYzbTo6UJDJbXEnq93M9PTUNZ78jrt4dHXUHp2FGTCZckRqqmmteEJ7DJ36e8XzWDdKWRL",
  "key7": "5fmSYFtivMe4p7Nx31zsKLK3wyVbbA6Yfs6obKiT6FM2QuxxUhN422w6XTsVpp35Nx9S6cExj7EZbtRLqQbLUze4",
  "key8": "qni3LAiZDacWeWqhXdTesso5KgNqi2sN98Ac3mWoukbbEMScJ7ndWik5mZj8rHwa8xENFd8MdaXpnsPSYXqjBKj",
  "key9": "4s8U1WMasM2mSZ2e9MRMFVSKCG1X59KbizADepJGVPFantE5kXVohHNKX9QiyTmN4n8M6s8ZgAwaKKt18cm8PGmf",
  "key10": "4SnuCPsjHhG4fGBAwkdSVrvox7LXHddEW8cQBGZrSjCw7MwK9TDV9tLGEZcUmH4LsRLL28E9rrEDnv7xe42CdVmp",
  "key11": "44WiPUpuQ34ZFwKxgvQ1Evx2mf2qKS33FXhZ2gZ1JxizHhVKz3LdNJNeV2HNQuhdvt2Z5DNgLxn4WhFVf62P1RHV",
  "key12": "57D1B4Ps9FqoKu6tD7yaLZJjLaLX1p7wmPzoiNJ3qLhcY3DUckRYHT2LESjDYeW4JTqpxw8grKU7X3yw6P9zYDc5",
  "key13": "5XxdTPkEnMETfbBqgNs5cuS8C1ug753A6tYEpYUUkAF12KPZpJqQjP1KcoULt1Zc34fVd831ccUG9mfVHXeqNyTr",
  "key14": "4oKjXMZ1QM5qdrq6AWDLN2tHdC9uqBv4RaFfuu7TMVs3r9Kt2F17NESAoUGjNngDgKC5XDEXikfcatxqPYRELarp",
  "key15": "58nGiKmot6seEYvgrtJjYj5gqwoRxW7TUZAS3sezrwejeMwrAVaB1ByNVTjJjrgjm81fsibPkLdPZJXP7WJqJ8aB",
  "key16": "3ki4HtJG2B3TU2RdnGQeWw2EapDB7SRnVViERALWs8bS1Ah24idfMfqQATHLjDjvhcCRZ1ezoeEFoChqpr1bjemZ",
  "key17": "4BjCmKRXAVu28JRGkkox8cGd47FSUVqAGu3rpZaTWz9wCgmYWbkTwJL4tYvKgZKb6RkXpXShEcKwVpRu2sUz8omY",
  "key18": "2jp6HmN1AYtcvzpW6pKmPXcWPMdU6NpawwqYmM6BrxouXp275wrrivcdYHSw5KkWWed9MV4Z8xd4pSGUw8QbGk3i",
  "key19": "4Udiia73o8PeNSqxsWymbMNixDZWDVSkG5KGSJCAiqdWg2hiozNKAgJunbzdFD9WSmSkX7fcKr3vhdyKvUFdWetf",
  "key20": "2KNf74dxCQa7m3obCsuwhGtVVr6EVqNjN17gwJEtiTGPaeSEtujaYrXM8qXXmyhTuL71KzESwX9TaDDG36UEnpvz",
  "key21": "ZSALXqpKRLaCnojGYzFEmvqYLrPnHuivJV6wtuMpryHWH2m9g3jsrTG81yoECg6hcAYa2z8k49dVkc5goCjW4br",
  "key22": "4uCTgNTvuVQ762Tga7MvVVAWXk3QShvS4q7wjJdxgiy9dTYRQBtxi1Jww3PmvhvTFi1Xe5MRx4Sz2xrzyanC7eQe",
  "key23": "5V7tvZgX1DH8zQrrsGTQKKXZj5JMc68EjEguGyU1dYnhMQ7iCLK8NRKvUAdR8QKP7cNZ47cY7BsThjD7tgnHpBQv",
  "key24": "tsnfGhjZWSNqJmcZi9vRgjsvXhdo8RgNnpEy9dxZ4hWf3L3bZk3rejLv9DvXb4PDVK8ZD66iEYdTkBX6Y47XiFT",
  "key25": "25P8pV6ySHPPy2Tqytm5eL72Af88Vvc5JdEzRujaVbBuu5iboGPkNtMyCbeBnCU7Tbp7MRoirUodEQ3Bm3J9X5tt",
  "key26": "5AioTk5Hs93BF9S8NeKs6UwUimSRHnYf5zwjygbxqkZW5UEtRwcvX6XqGqDADiZjdp4Uj6KFqA5a867hQcj5mGQo",
  "key27": "MhShkdVpARHAS2bLwJpssG3VP9rZiVKbWYUhmQJGGNEXcBczTaCwE4kRiMH9m8JzH95vnZ3aeQxqnntKxgRjYop",
  "key28": "2WcZZ2m8QBhr42KCK4KdGp5LtjvRgjejM4VgycgJEU9xTeGuYMedAhdWgn3F1DWfAxUVQDJLTx97mHh3nqyrtPLs",
  "key29": "37Qt75eFEjVMjiioNwPoNmWgDU9GtCZzZaWUKpb17poK3i75Rysn6t28eBK9zfyKEAX6CdXV51pRQq3ipneb5Lph",
  "key30": "3KQpRaiWACPonHw9ihM4NZMhAX2ucKLZfVU26K8iYmGrkySAUHGFPpjU7vqeLZwZh3TasUw3qHrvz1pFDMa97PY6",
  "key31": "4adEV384ditD3FnXDqDHVB65dNaVjT32avrpCtBxa1Uv2rG8UjBuwC8xgr1ddAuU7fJVScceu7372zDUARLoiUjU",
  "key32": "38kTNbxzt4M25EuY7DUP64DbWKzhExTsxvEhjnFdxDh5PcXnBXkcnZQg1f3AEdZzQ9GCL1pDvYBCe3VcwNBJe3hE",
  "key33": "3Ssm5FBDYVhoL3rcprcNwuH4t2oaLv76WYaEzn8aWMYaoJzVVgxxUid4wk1XGV4SpxSGUKnVk8BZbJsRM17uS3bf",
  "key34": "4k7BuTtHMCaKzvwbTkEgvzfG5qd6oUfBoRC1NsWPubEryDQkhBimAhH9fnVQocEww3MZdFDh7zpU5tmfczwg8DyJ",
  "key35": "3Yx5wKfcA9gN5N6p8qf2WYbZAQSbkqUVKq9iqrbT32iPp5xJpDum8N7gcB1Dcf5dahEX1tAgRqty3okp9AgHL2Ag",
  "key36": "51suBn4VzvmbHAPQb7muFnwdgjehmEx1M8gB9BC8efsATDbR3KGcisNXsFJZehUUDV4WpCnPoRn7RLTESUgioNEU",
  "key37": "2XyGCuxFNAsTYuK6tJky1VBwasmj3jAuSjaB2stbXdMevSTcRRYeKbeQ2XLb1E72dnGLmLu3N82QXbrKHZELwz6x",
  "key38": "2gEaqEixiP15tjwhRbKEg3Sk8pDwACpTh3dbFEa5Nw7NkCP2G9q3QEmqE5fJqf66gB3v3tHMWCB7YN67P1CVJhWg",
  "key39": "2dvS7mFkcsag6ThFfuaLoAswo4zJc43hXhJ1Y3UVas53Zig1guDsFwJiEHnCFQGVnksFoc2p8WwhjAz96YyVrmQa",
  "key40": "2ZA8oe3i6sSc181MshngZHoLkmN7xE9SvAm1koMMzHi4wMhm9DcCmfmkRj51w881GJL5jdrx35ZStfnu7Kkc57zk",
  "key41": "4kncbyrVap6a498BRGesHtyetRuCWRrQXYz5ZiG4V5T5Vtc2hsxqv4kpgsSib3kQDsDU5zFmvE3MefyPkoxYMYji",
  "key42": "3WtFDSWyHcL1dyTLJ6xPreDHG62j55zj2bDhC5x4qADZfK2sSpWg4qXA2g9Gk9y4crCQzt55MNkZH6sSLvWA8aYU",
  "key43": "52Aq72FU32VH7WCQgBuSzW6H54atdZ5y4P2FHACBeVYCWLNR3W7X5p3Tm8z26N7UcZSYwia6U2NBM2tVKVGt4Znw",
  "key44": "5NMdYSZpLMmvWZC3Q5n2AX1yAGckePFQ9YCiPkPHqHnhMP7h5iN4xyXDe8cMhKQfShqRUHTrZT2ypmK7yphogJMM",
  "key45": "3w9s6dt12SHtcoVaJAx25yefXGzvzJ94UfDSuZRdnSEtPMeRQPeeMbKDVkPnw4DPq2APBnmHJwPc46Pt5AH9ocHV",
  "key46": "3pu7Q3LfbRp8ziNZ9cYMeQkgEZaMrUAY3yH9BfZA96zpefCf1FWFp4U3P2c6KYmm34Qz1e5CcxZxR4pyHGpY6a5v",
  "key47": "4oCxtraCFjVMxiJWEMWWG9jaeQUibGyxduyVha6vTgXsAwNY9LinJt9BbQ4qo1ehw4gPu3XCUzN4savxEivMUxXY",
  "key48": "5JUoK2xntpTuQZjhFn4Kb1fY5CdQrKHEiiFAPtM43JDYsEdDYaiTHGf2azYivdfLrt5cTJwmJJZDTiSR3L5wJhtF",
  "key49": "4AaojKwDpBi3ioYTqpZzHPRqYKr5wA8WGFWquJcyAYwLDwQRoCFqY11kH9Y9mf2n9kq2LUEH6o2QPxL4XZQdZAXe"
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
