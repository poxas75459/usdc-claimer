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
    "67V88QKUwxx7fRYCcfi7M6RYw3NZD69tRrMEiRWfWrCGDorGw9UqpaoXyMrsiYMXoMofDNTA3XrjMd6SDw31H1tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22umeqQG9SYESfK5dZDPQSqpnzRcsjyXYo3HhPEQbvJNbPPppDR2rcPTYkwHAccmgVDd96Rnv1jabv1dtg1b15nt",
  "key1": "2TkGMiLF6nm6doARJzPPiNVqStuaUNq5nmUAV2RBgk63hnwMsPZ5NPqXhepkN1QrQMvU196qZYGmgBoDccfdBQLR",
  "key2": "2NVfLmWoSSKffUywjxkzNMRknaHm2zDsi94x61ZLuCz8yfimhkvCH6QXUcvNXsnK5eA3vM8rKkkUiozjsyQ9qNgj",
  "key3": "541hXTAA1XCUgkwva8wUWV3h1KQxEwUVfcp1NrMZTfA1XJVr14XZy11JWbHKWzPWdrCJa6qo7v3Q8Wu1a15mAyuA",
  "key4": "2Hnq9zNtoj9jdNXaemYwM6HjWCfBA9pbTTsDL5iYoE2pBKXMtHF7vi8W7Gx7QGyaZA6bLgnRAYtapL33TwGm7LuL",
  "key5": "5XSTqTYejBURuxGgeryLeDf1HpHd5kNXY32bzNKoyU6LCGwX5qXEgtNcRKkdFsdXFc5Nn4MZZ5MEeB7tYywX5WX2",
  "key6": "3dFAReWN3np8K55xLzUX3uDvejehHAzrXkB29QLgBiqpppYPoaqSU274NRWssJshUYvMa9Cko2TBkdGQajwzUdNa",
  "key7": "4RxFdkDGAQjEFEB2aPgEVPKkeFZNzzT3EYq5yASKaimajC9RAwvknBPQuM6rxWy3UbTEM3k1secrKNmvmc7owDqL",
  "key8": "5Eyw1sN1DUH85ESuH3nAkcLsGjtt2y8sAp2v1z4yLiYPQ3zycBqRAVZnyE344HGJUnqoQMiBbjZCSzeCYrbq3bn4",
  "key9": "23DfFV9waUwSnRAoCfV4JFguwaikjeigbJpW7nPRvG4DZ89RndsoymnGExyQoko93aHYR5UC7fF3EPquM5ShALsj",
  "key10": "A1ZQcghceZoWFyMX5HRJeNjKHrfLs6zs56yJuRzztVmLghdktsAYopqTMxhELKbzHbTqe8fk16ctLWbEe2ts1Qe",
  "key11": "2HbYG3wx9jNSdNCZgTHmRvFBMGFtcxWipA4T9n6Kc2SbbsAfuyY342yjkymdUgCae1HbuMJrE86aoUxYa7bq55y5",
  "key12": "2yNyVdxJaKSpM1kRp5FQfvBkB9RMqn9HCm5zmNQRftXHd83kpH7ZghHU3eRsRUWRuXhTfgRzaApEPTtaXRBVWXJ7",
  "key13": "4a1bpw25tPHLcrY7SiGHbRVyBGLhSHSTUGd2W2pYsRPGCxozuUFy8sH9Wn5QLia5n29NTgQLx5BtHw7t5rkqDJoS",
  "key14": "3cWsqwZRqzzjyGVRygkGR5ZjUL1nZDZoXqitHJ6dmWz1ozGnBSTuwT97FJcm9fjaSJTYdBqhuU6infDbrJoXaKEQ",
  "key15": "Xh2UhZVcy2YbsxHTJZABEsoog5tZ73zErF8Bvms2EZXRLZdhDQ2q3kctBvw9qMwR7dveSZCNfnFyV6MTg5okBMR",
  "key16": "3dkSznbeb3LC15CZjPt64GcRQBYJeLFtwwyZjp8vj3cQqS5TLeJwBedVAiS3ajYAQvVuuFnnKGQCUYATHE9kqgYd",
  "key17": "hifY47pqTKZwrs5xBhbXmKZ1oCTNTzchD1JVstra38e1gxerXQfFsk19SqPZN5Mxd233ei34m85eSKMwgQxonAq",
  "key18": "3AKJiACY7TTLFR3DJw4vLQgKa6s8L2CRiboSx24UdnwFKgLdujm6aQP32mbm9rPBvJAqotK5WfiUqXXMdKJPhy6M",
  "key19": "2YjitEzGEyUwUiNV44WUXXuW25tJG5CnBdbWQmF2R3ReUFv3JiPXaCQqqzHcrRs7SavmpgDmhWyeMNub5FqMKuax",
  "key20": "2uomDwAqszUxHCUtXWtTfeRCSgWNEA94n7s9sudydyhoUHvrNYujUHKy4ue6JSbnKM1o8J6dfz9My6vFoMSMjb79",
  "key21": "4jwjAfYwuGy8iNiEm649nLXEhpf2JHf6jR2Z22pWVNLFhQZoLtBrdcBpw7mwokEQimejpXepqve94gnsBpTKH5JV",
  "key22": "2VbQm6Tk84TNKhejceSt3mtHStyw5YME7wLkGsg4k325JSoJZyt6oFsCuveL7BBF3SnTZKXjDhPm2QEGEqVCmxe9",
  "key23": "65fKknLF536iF4WRaWWyfkTiqGEmEHQgowXsRqCmfHP42NLMGWZ2SekmFP3WcJYFgUwduK9UuVBpaZFHtQVXZiCL",
  "key24": "2y1Q9bk33AqmZNWn27ta9rE5KKLNgntoFyNvHp6sXRq9gHDYzH2YFcganP4iv1X1CneNaoZLAEXYj8Ka5dinbeVo",
  "key25": "5M1TLgmP7Vhs6n7rhA83WFQggCiDVbFhB6LcuG6sFUSZMStHvRZWCWTaNU6dTg2fXZiPnQmbZAYK5RefsQZzQxZT",
  "key26": "48yUoWpEdvG3gtXCef7Xrh8rRtuhKsDE9sCCcgNqTkjTk7wtRviY2ETB24Rpmn6rf3d1M5QZhwk49wMDQZ35nHiP",
  "key27": "1MZV7sL35UHcu9rh5w25YigeakNpmEgBWz3UCD97uYRs4ENjdHWWTxgSNCPkEqTyoKwGxi536TTGXbK9kyNTr2w",
  "key28": "43UvdmMc8ivj8sLHYFAiVLghmzgkyB6roksJFHxAuvCe71Kf2tiVQNBnszyQzuTuhCvHwcbJ8mAZDJz7E77s4FzX",
  "key29": "26gY2XLB2Nu4UfM99N9x4R8dHnQAXLSbDuq34Z3ogK3dC82fP79tqQGrpchoak35VWojwstUZAtnEvCvH6TckL5e",
  "key30": "3AQANLhckC636g9ebAiMsfWVE1yBvqizwx9NWXHSYG7hNxdT3bLfPwc47RT7ABnV8XLFaB1U6yoWQxnaSqPXiAEb",
  "key31": "3J9ac158E44mn37PNx3LaFEVbNrPksFQHf4fJzBaMJMqohdK6DQu8jkKMCMSaMtNmef5Pn6qgnH2GmNAMm7xePGw",
  "key32": "K8Nm2ZdMFRsM3HBqYGJ7SyggyGiTmrSCLH99vC2xzHstkVDMGcmBp7bciGjT2ohzXZQ1kVprtYqe4gc7j2cSagd",
  "key33": "4G56DBG3nqpshwJum6qTMeq8tqGvB8oZiHCVR7SAfy1YRPw7AwNAgSAuXW1JvwVWufxgV5AU7nkJwc8gQ27v2U8L",
  "key34": "ZeTCjySk8WZid4upEfMix3RHQVEtacJkzya5xrjZEGCDZZLfy2SB3qSiqUFTfBgotTKR66SmMdtfGBoVEzuGzge",
  "key35": "5gwr9twagNHNHphnFbw8pciginCrsz19zwD5fbt7XJipbq2SZYy2tt3yxgYb5kCgS6NzNzDzjAKQ7F2Z9QLT7QTq",
  "key36": "5hLKD1tMixgkWbPr84BzAeyisktRTkZVvFSBouWvSdt7CNYwRWpzHJBtPREKJw9FP4S3GoeGRHQKNSqcjVQ2Xbak",
  "key37": "34GiHxkHzXGM8g1K5UTecH9JNNt5voKBYFN9Ehq9xRREL2pa6PXBgmD4HWdpXQLrbyBzfU59PYcqh5h4f6dPaCSt",
  "key38": "5TcY4bwSLSYNTGeTncU8EE2PtUvcbWyS5Jr4LCNeQnedjhk67mbuX5fcxRUgNZu4BXY1QUbbjXLBzAQsRZBEtgN9",
  "key39": "4RwCTx1TLMzoGF3vZnSoQKgZMWi75eK6XVB3buzbB9tCgVVEZEuKX8fqpuLncFaZoGPe7zh1pCnsowbRW6vL9yXC",
  "key40": "5gDDPgDKm3KjKmLRhLyycyqhbM3CnyTQaiEhfzFVdi7G9WsuuCPyHkZGnva69nBVz98M755oVRc8xPFTb8tf5emF",
  "key41": "5YLDKr4qBwwRS5HAhDi5xrHnEq1yZyxxAKEm9hRTvtkU55PW79rj8aNbegnrgTXvvM7WjceszZvKP1ZS4szfy1QV",
  "key42": "xt3on5H6JecG9U6ocu5JHena3Cfr8qLwv7HGv5NFCtTCvDv7VoUTABfiop9Gvh8PeMyjBgEXQZurzX4nxBnvkLc",
  "key43": "27r25YWkGj9TtjNEbUCiAKfgjPgk4SsV8ADhPN7SeWdjCzDBJYfJLJtGatVhjfbHb7xzvE8dAbAhjcR2JDYoDCzK"
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
