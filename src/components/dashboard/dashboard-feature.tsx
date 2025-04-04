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
    "5X1VGptQpQMwRfr1SMuoY7kF84sBUqGVkszrnakqwUJYCkPQ24MTsnoQUXkPWJGED1btsqWCVahXHzz3fGH2W7mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42B4V1WPcptR9c3WFZKL64e9AzCYBWciku4yntWYE6FurN4grxfLPqYASKTHgDWhgFj5rgoCLFtoBd1vXQbq1Frc",
  "key1": "3vGghkpo9v2ZHnfaqXDENBmaLdpmS96oTb1HWVa1rG1bT6p9kyUsXfwXudGGm3bGsQQ95YGc7yzM9GKZ9HqyXRBa",
  "key2": "3NENMwnuVYe6tuYwYnbkU1KFUWWeKSTkFgUpSwCz8Vaiim8YCth1LJRSuKqQr9F7p4KgtjwgX8frGXSZVmm8p4gR",
  "key3": "2s6g6dnCmj9UeCBkaFUWxY5o1bLp4UPVqUgrRJTZvfeXTZpYjKuAE8Hgvc7U9xdRXMZGe3yENbnxELio9ZgRxH5M",
  "key4": "3JcWF2uVwHXa2jCTwtyWRm8SKzk6jS5ZUPgzZ5fPRRPPmbwpQpp6MsTHAwcz82PDz1aGsPXcuiWDs1gfnfBtHBzP",
  "key5": "egSXqA5VrBUDVoZpbVXQGXgstykaXTtK9Qbw2ZZNqjkJEMxhb4ucjSQERdVYQUyNPrnwBvkrkmaJFghNxxscTjF",
  "key6": "4gauNHS87XMC3dGCnnp3z4tbr7R3ws1shEaBk7XuqKJ74tTcUTPCkeFCAFdWozctKrAvhgBnnwQjezdav2Xk6hzN",
  "key7": "um5qUnkkQPMz7Cc9ZvujJzqSwESjgyeSQXPSTsgZfPZK3dFG2iK9pFyXiRXrW6wNxwjkY3cUu9Dcfy5ceUQ4X5b",
  "key8": "2g376e8WipWwWymDzyWtS2JeLVwGZ35azMmHdQq4UGgCe4cAw7x1EPKK5XfkTLexx54RKiypofS3iZ9g3HoQJxU3",
  "key9": "5eTEfuk2R8SqHN6biEFjX6cbYfJvmHjGqH2SJfjzXjP5EzEkJL4eyZP2KFbSDTF6sq32tPVAXgAGsVkbgXw2B1zH",
  "key10": "4wkayLx2mCF5UwiZj5hhcYuLQYrEXhh2ckF7MBfcW5HwJRGYS4gYgtrn9Xzc7zC24jEM3TMhaLtx4Z74PKivSFxb",
  "key11": "4cPGLhG9EvcPB6wQgPFJeXz9QQjggqDtbQ339gQW7vEwmpvjc9Hi3pJVdNFS6TJFxq7zCm41VvgTEWK22HhtbkrP",
  "key12": "42oX6r2krJ49MkJXgGvPY1EzXXBesQGWL9LgUpRDby4EYvMDdpV4xxRFw9iYzj8GiQ5M4bXG8nb5tBzMcrvFeduL",
  "key13": "3k81MLtmduurDVUxV6tnTi2QL8kVDxnEi8WCFigDodLbDBo5K2JtduMppZnpfXUxY6hWJA6ctiKt1GXSi136UxFC",
  "key14": "9cEpFg3yGz7zP44vtVaovzHp2qfntDjKvxtqyH6ZnJG8pSNFjGJp6x6hGLDvmTVddLLQjTPccdBTaHWxHQT33pK",
  "key15": "3tpWRiWGXvByQwuFNXa2ZEZexUXf2n2WhXg3X9QdpTYQ6EFfmgVFaQcc5zBm4sHLh1HAnMgdQTyHBbnE8n82piNb",
  "key16": "2PE2jsrVRu6wAG223mVB6b7JQrtcEkxTRSjs1LTurTSk4ohUtyqHjY38dxyH8sVurEYMpttAZfJBepwykC7GNmpv",
  "key17": "5NTqAxe1Y3mjKskBWpAEgnB6wQF1rYUYAPSLXxyiSezhHCXMEFZ1v7JSwik5oBwjg1VeEmPuzVoTMYrh9z86C4wW",
  "key18": "2489t8cCPahiifDeA4GbLxQzxZuqzeBiaxuy6xtsAq8C6CNY6vLfkJ98VnBWa6cwzkvmHvrFF7MNWCCjE5biFBsE",
  "key19": "44w1UQR5yAkhzu2uNgJT4ot8J189a81dbSRbsh1hR3gKMfusySkzzcBo5LYyR1kBBQFXNh399uEpnWiWX6n83g78",
  "key20": "3FK8bWeKsc8iaWc6rxWy2HFR9CeBtRsF1yvSWZm5TyWkUS92QzPeqFxSa5LRYQtT5dSAdYtAH2rMW5qdBRuwFhWZ",
  "key21": "4yBHAy6jYpV2TYEZ25JVVHUazqj3ctxM8tqPvxFXx8WNDkZT8mfxuqWWrvbkbbGghCrVG9ujQiDjGk691iGcnQVY",
  "key22": "3iDEsk2sGrePgmiw3i3rY9Q3MmPF5WKZF2wri6sPRCEKtnw8vzA3qYNoyknDncK2anudwSDwbJWqFMpUZ8Qa95yZ",
  "key23": "3wYCMJsKBoWuMQ96uoCyBjDVcotXr1qweYoiii6FDJ6MD1BcpV8YpzB6fkG1pBmAWdGsQoTCoK4U5Z3trjEPjBo4",
  "key24": "2AJJP89A7k6tRGPt8rschvWdbDMtNTdv5iKYYARy97hGv6ivRUftZ2ovUdud137o3HobZH8T8ksPkcVK2GdSYRuE",
  "key25": "5TCFaJTSfRGKGLYjV3qjLogKfFQjwL3y4oiKEZctaX4hctkRGyk7c6iZfyZrFui2pLpNYqKESqqFu6CWuJGvLk3m",
  "key26": "5uy6EXFtRi2BBJvvdaAYnm2o92Yhjwa3yrt2qvHF7yymXWs7FmW4yrJg2tH75mQWbhaPeMBK7hMUwgCXSW2hZDDX",
  "key27": "4HickJonPFBaxJkh481pNmurcmrkuBnYLyke5TJ7iRKiTVNmNuwHskAAwSryo7hPYt65yZroM25i4HEMYsMzmTvx",
  "key28": "3kfZPRXs1LGy3Yk2NLYcxz6BwDK94hQYmteC3gppNhE2GHFyJFURBK8iS4EF4FDt3W5f24UjAhAxNad1cHFYJLRL",
  "key29": "3TNN3fi2womHn9LSgHoX9hPRBRtbTdx4sNx7ijpu1M3FskkGFXoySBxCwTyDWhE8uDQm3CUoEeRCqsEap2WLNQgW",
  "key30": "5Ke2K8pVTrPZiT7oD6SUXNqU9iMrB7aZGTVSm3gL3FLhGuFPcYc7fXsSHpbF395ehcpPRxqM5rSsQMes6rrUmk5N",
  "key31": "242qd9B5jgrRBn3sTz1sLXLLECciFtMdgnscKggxGgt2q7wGJqQ2br9Bjg4w5qQxRwx7YZv18VfQBoaittk48QQ6",
  "key32": "3PNTQRakTNgermo7FnSdJ2MBwFJocb7kbFhh7z8xe4ypLv62Etyq5vvFvg5bNWouhvo7x3fRpMsnVkKArJm62GDF",
  "key33": "5CuNRkVjEYCRM9D1Y73vXsT4dDRRRFCGzw9FcBUFuaSyiCU3uTLjMjn9xDnBAjVgQ2zzjZVhdDTiqRAaVi4xXuB",
  "key34": "629BaoGbXsj67fPBQQJR68Sk2gHTEwCVDuGUC85cwWaosoGCyjHfAyUHMk3yypfk6jRwcFrq6u4TZ3Xcu5AuCYku",
  "key35": "3uMF1AYXThWomcAMBgZN7uZ8vnwZVjt81pBcgZhGoyPMNhA95jkfTXEt5PXwSZijf2DSaTrvZxABbtMjbwLWX1dt",
  "key36": "wQLE3QwSAyi795FuETAi27qC18nqc5pF6XhNFgJBLGKiGYtxakegix4aBRBE7jeuZuQYo4SK1thPxeErkoo2X6N",
  "key37": "4sva3Uq7vL48ELDB1fFz6sE3xfpHWqxSNMtWaHp6xK5bMuT1Asn3c35n8pXkPsAHYLAs4dqKcbJ5wEeZ5AyJUv2W"
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
