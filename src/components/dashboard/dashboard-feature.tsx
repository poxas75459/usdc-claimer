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
    "bkZyPYZFdztCmNkxVdf65q9aC6o8uF35Q11eNReP56hiDFGwsYDBqCVUNyceHVG8a99z744Gumq9yqyAEb4HoAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFnV8urV6Z8xMNctjvX3kRep6s5LiwbGTUDM7CCy7RvYi2PieZHjxLdhqr6SsuSNoacnzRSiFTzEgdzZoNyh45r",
  "key1": "2wDa4f3e4KyWj93XAruyGG8ia8zDXhc3iAmAVwBj9GxWH2HWpaF2DQhbahrsDXXQRiN2gshApRu5QmQRJ2dMgDAX",
  "key2": "4eF3pAxdmsWtYmUNmd3MG19JRw3JTqD4ub9KtRmVF6bXwEqJvNrLdPNcsMDWtnZj53SnLRgwnXu2T8Dq2n6rtRwn",
  "key3": "3TYdJtFWhQX3wkRpTKAaKFMUk2b3Y6dn6Bwme258ia3hWb5LTnP62bBiskV9rNjfX6GshnstHCWMJf2Unz6yeyEW",
  "key4": "3f8EL8s7DtVtMpG2PA8Ha3SuhLhid4XBvw7iR7c3TT6GdUEZfrNr4dEzSE5Rwzaq7QSbyGB4XXRQKxT7pzPqJVBh",
  "key5": "5Lmxf276wxYjeFUrsbRXiUJ6u2UfPc29bmNkGTHy2DhDr7rY2CFjGPRstC6kRVUcdyuEEiQZeVDNhpNgHHCe7mRD",
  "key6": "26VbYma8pJdZrbdvxC3ysT7dmX4XSzuJwDR8nusMXLYB2CUC8imvV5oyyrnx8uBrKqMk9Cc9RmGtHUFXYmzVmu47",
  "key7": "5p6LQyvBdoX6xnShNH7cxDE8tc16d1E8dzuaZsaNEZHLNia3AXATgQ4uZLAnapCy1Fj5xi198yfXoZXXEFy6Vqdj",
  "key8": "3RHZaFPRHohbJAFTzPshxAoibPRsN74tSYxYuXBAgih8nyE7X529yzqmzraW9WYmFiofKyd4cygtD5UjqJgYyXor",
  "key9": "2wZsqbsA2SV2kPE34Fv6Usw96CHnfm26s9zxtVFrp8h8qTDGNfBJYjn5DpK1V68hVJ6byQaEL68ccpTmBHK2jJGF",
  "key10": "2jgkKcqrLpNDq23kHdWjPBQvX8birqaVGyjzsDt5NFpdnBK4pn1m4AYoLQy8P572ak4ghDL3Rnp9jxcP4zTdWxUT",
  "key11": "4ZyUSCEiJJz8ocfKSHkz8PCYzQBfBtsAdbu86gUEC2tLn6ivK3h5Ent5x2yPJQgUYu6P3XBMYafyxeb3NC4htprc",
  "key12": "sdY7sgFQxRHyWnyMvt7WdEY18irF2dDi4BUgGEgarRewJAKzNKESeu4i1fAs6RbQyz5NY6G2Agn1wwmHmTsdHfZ",
  "key13": "2F2EXqNKbeDouNsVXn2y764T3p5KatJERa4Hr2JhNDkPcXsTVPvWmBScjtY3YMdeVWAgKGoNvSNmeNfGC4Z5uB6q",
  "key14": "387Hn2vxV4RxYKqYasQx74T7QPzwctmbiEjfF9DSa77bnu2gQRzWyMSGovCiiS9T2PkfB5ar9qP1p3XekTYxHiRy",
  "key15": "5jhRZwFaLJehr7iUvwdGatFFMRXumfMJ84c4nL4tNb9NpmfV4uhNRmk9GKqwco1c7b6cDRaVPTcMWndasqPJnJUh",
  "key16": "22TtGWiewYVEyixo85VQK4jMGeFJ3Q454nC6hjNaE9XKNQofzq8tvkzcqC2xRcPfcovrs7DoGkxUHey76MWXj49y",
  "key17": "vwLCRSn6zv5tbLB9d5j66Mf94VePvmmxU7M5zFq2Rcny65QCNBFtDtBEw2b5xnd2UpBtKCpqLWtSt3K8CorV1RS",
  "key18": "4KfmsvAzC4VipQsuBNr385zaaGwnGoZc7xQx3TL52MwgS3LW6gRx522DGTVMWHungWV5WUXFEV8MJVbEGsm8pJ26",
  "key19": "3QSsxRhrZnnytQ4LpmNVHTJrFT64i2a76Zt3njLWMPSg8Em7cSV7Er5whxz2Y8wxtkBy4HyM4auPQN5UChYQBi3t",
  "key20": "2aZLr6eLk2pM4aM4tqAxtKo1EY8muB3cy9ngvNEqyuqvjZW7rXXYXKzeMG8anVKhpAPRgtUAL87iSv5jh71X9qdR",
  "key21": "5vJC9WPq2TwX2mq3pG6jJXjr2mkDvAk6u4r6YBZxcuvkbtr8osth8GcoWNPausikVaJcHc6AyDmy27vKQcreLBYY",
  "key22": "4MfTvpSyvhT7rdo8QDvHM7G9LH5rpeP53mvmKS3AzbMEvwMEme9DNkV23b1aqfxgkuX82gyQFnhsX4nUZeFs9y6J",
  "key23": "3WsK5SWCJAnkKNs4SqzQt9okUZFhpM9XY2Q4qLsqkrbTVvSRd7zetbDok3sUQGaaxupZhUyXRhZ3qF7E7yLtwer8",
  "key24": "t6MJ3yPbpXTA8QqJHedfWFxCYRQxoWiWVa6o5LRCaefj14Ns16UyxoaDMVU7iFpiHmRchQjNkMiyLzF2Ds4d7iE",
  "key25": "peg1BEbAmKGHhjGQezMZAq8n7bXZt6pRim42yANbaR9Q4JUsFmZh9vZ3vD13LVQrirN6DzirFxb6RtMrapRdnrT",
  "key26": "5Zxo1dPfCTHFTLokq7XYLqW5eRHuUgPbg9aeLANHoKJAfAU9dMJzuFEquh7yGTa2fpeCs7P1kLGHffUXNStLzWAb",
  "key27": "3ueRCY7PGkH7y4jEJDcM3Koaa2BuBTWa8iakyXVfeynSvWv3W4vjH8UYyZ92JGn2PnfUSQbWDyEhZyAuWBTAFg3T",
  "key28": "x51nvzANwUdMpo11jRVnuk3uj6dcGSWvatuoK4DydgnnwEDPEvqJ5E1CZbuboWe5KaKdWu3H6EojdvwqSjFc3BZ",
  "key29": "3aJgvNrSg63mqhGDn9HVp3UKqGgVT6r78Rdz1VAtoUthsZBNWgmdVWExbcgsnSm5YYKayUPyvdviQcuvxJmhR5yy",
  "key30": "2b2MtaKuqb33GegLjXUjseMBFrbWAJQ1vJD3eQ6sGmdsN5coc19zHVmY9Wi2scmiZv6ecMkSGRNbagRsQmgonMq6",
  "key31": "1635mS9sVRajUULnQo8af92sCpGxboWsQRqDto3KS99QpwjSTLwk3bccHD4YUNbTGsaNx4z3z1X9hxUpYAvQrPb",
  "key32": "2HiVdnaYpTF9AiuqMaDqdbtgYJGPoCBkXU793VfoKz6BBTsZiJTdg9wRgS4niYH62mVS4P9HnwfafZr3iqDbMLJE",
  "key33": "4jg1XYXP4k46vXE9HqGJGseyYMQ1fJ2Nvcx2MQwJsSFupt9LPxpx9FmCrewwdXYdUVAmCZ2gG4oxCvBgpTmRMhQg",
  "key34": "3vmMQEKR9ngp2dJdMrEDE9Jzeh1obN6TE3fxkCrkM1JHwN8u3SCBLc8vJVDaskchdUteptdLR9EGUb5KHqf5SULg",
  "key35": "5qcUYHqTARczduvVKNkCHqLj4U4kBdTT82braZgm7bLeV7M88gXAfsEfQpCabnNvjzFqoGzn7DccisPw3A1CxUTQ",
  "key36": "21qqBMdhBqwvzMHYbycjiXhfie1tb8rUF11T9S4B4Z3WHfPuveP2ALvM8hmTQmqR3jFgGgJEQsGBdz1rejjpoRba",
  "key37": "2JDy9SPa9NwYu7v7JkJQSs2chE2uQytcjXGefRdmfaf9Nbnv6GEQdrVsMgG9A2b3NCmWhvi3pVpq1SwEc5Mn1BQ4"
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
