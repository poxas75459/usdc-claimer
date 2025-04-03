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
    "tXa6kdeGZgJKSnazirTMnoSQaETN3tesrwFVzaXLJHpvbnxXsrcNNhwzaCxFBChiFG2tvm2jr6VNTKpfjG4ddzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fay7oSmafGEcUrYLA1YxUj3LSkjxHWZQveHu16tBz2wtF4d95FM3iHJNdAhR1A7juNKSAKWB4ffYxYWyBuTX1ZT",
  "key1": "2JQ9acD7zNstK2MdCaZvecs5DBn3kJwvApZVVAQD2ya9C3wv1t6qqc79WBz8Y25sUfgPkSwgWWBb8Z4DpwK2U1qP",
  "key2": "5LCtCRbrG7yqBsWj7dJibn2oV6Nafn2ua4o2463B9xb36Br5fvkHTtv1gJaZuA6ffqmoFH9Un3q3qaSVvXGNfsDJ",
  "key3": "2ZV76yUa7HZpjqUzsBysvFsaFFWy2A4f8zCbWpH8DtA14tyg7mFzKRV6UFqusHfpxmMeztqcRhNGRPKL5ciFcvCo",
  "key4": "2ZLfN2XqjJQriNnsGetond5sk8artMpvPtuKUbXdFnTAXhanykrF2CjAb3Vgyh363QvXwnnR5cz4BXV8FT1LBbRq",
  "key5": "4kmo5tJEUHKjSYmPN43hNgNtnTRoNL9Adj6GqzFWcbGBoza69RaZiMEpoR3En4MqMYvm2gzzKcQgakuoPfPoaamt",
  "key6": "4epg6vFcj6Pqq6C8KUpYPrJs4QtcX3qcaAsrCx4r7AdnXaGfBC2gNrMLJ162byD4FdNAEU327TDQgU4MKye8MGes",
  "key7": "2DoUPw6UQarmeDiZ8niRDjeJd6BJixNdNKqzMMjpEcXBEBKV37Q6im884ZzDV2XiVmjXdDpXDwc7UUWXqtkfxhRa",
  "key8": "4tt7otn9ZGAcsNi4pPpTw1orbPugpDRJS5Y1zsVew7nkZqbnxtZG7ZS2RoGNHYsgX7HwhGnzgwSj4XAKXaXAqVNf",
  "key9": "596owUuAVapq8RihwQGiW928CfbAJoP5CPkdb3WParUzMVx2Sseoo2xuGhTwrbF93yVLMxXAWtpSzWx6YUKkpWir",
  "key10": "2zc9khUa2XsWXYeTrambt77u76AHZGSdz5NSo1BWzBbT9hqXjUyAuhwriNQjdCSRmBopbNNcdETP5ApqJy4MLivG",
  "key11": "5soBiYkvF1YZRmi8trs9ruktoSNbCwKqSVXdWReDsm1kcHUzrRCnb7i2ZQbGjbSskaDtsa8niwauNUtqMvjKuNcv",
  "key12": "3LUH7bgyuWX4MVCoDxGLX9E8Hx6MfVHHxF3b5AJsCq1rpbHwzDKcqd19xkFdaRTpVvqhU2Mw6NsBmVrX5AhGkE3h",
  "key13": "5X1JRn7WbKuhNQfEWM8WmGH1eAxJrdLqLWRLoFrC3wqJhXuf69NDbLzVJw8MV65Cksc4Ksj42UwVj2fwxoNJzqz5",
  "key14": "67rGCoya7fZNEGR7NWXkWJrGPEpXRRinpUcW9zaSUQeo93nvEwf2Nyi7b4NLFGk8U4oRFbk2RLjy4r4rTsJAGqt1",
  "key15": "2V2jgt2mw78deACzc6N7uPuBECiKZ83MwWNXFRMS3D3r6dCRSqcB824kKGffTGWTjseSZQTdbWzUFmMsRxb3wvS2",
  "key16": "31hFkAfAPMnsscce9tEnnDRPMpAEoyViKnu6zd6EHzryuBm8AeZxcmrEC4kFcQNhN4ya8kuPLp5yUvL8yEwNgWCF",
  "key17": "66ra1yo3doydAcamhf9xQfiPt5D6cJLgKmSe5ygyWSdrQ7xLxyAXeHBtHQ4h4oynpmCNZQDE48XXqZRdgUu9ukhU",
  "key18": "5Gf5Fvbbskq3vr2wZv2ovacq2jRqzrhgAAuxed8bs717iTcbMEFfhZ4KyztiGjbVAXXNZMNq6uKT4hKHUmNz3E97",
  "key19": "64o9g3SiPw8XBnj65BkFDkFoJuRRHiDmhx42W7KEf9X1VKXV32grxjZ1ywEv8HnW447XeHBxqzpY4KzXovbhjroD",
  "key20": "5XoarNsvRypzEc7Nb88gVgtBnjMoPNmEUnhRjQN8T92UXDiMNoLWACAvVSUNBcvVUzKsJwBcuieukH9McT8bPwNs",
  "key21": "2ztRbynNFEUUtSYyj2rfRYdeoMBX5UiwNX5tqu68KW2LLFFc8UUapZ7G2KV5BJmcpHurJnYYN12pYwtCKyk8X26J",
  "key22": "4wodj8kcueoBVc8gXuNpjLXBQf9847VrcsWhBn5fAkL6g6vd4iyF3JcNmFp79RArgDakfEiZBZzw8m8yLT9FuQn6",
  "key23": "2PgCe6Unc8xkDS9h7ZSTH8HjeUzS5jUa1ph45p4BoPjabxDWjsS4zoBue2aWB8EGwd6FRsgoqhebgbi4PNq2wjh3",
  "key24": "hwvfBUtiV1WM4mn52tkdHNtqRoT94fD6JvBZyiQsWGBEWxbkMYBWk2HV1Rje8Fr4Xa3XScqrrkWH2TCrQwjTxFe",
  "key25": "3fh6Mi5CDdpRUCudrwuj2BUDCqpi43U78cDJ8zUvH3mq22HNmCKZPsyxDtVaF7ehZppq6LYCPSCh39z4Y6xKAqe5",
  "key26": "ic7imyXQx5RnR9NuAr3GRMA2pfTg1YegohKEopGK88vximUDiBdTNaLATveEz8LRJ9XQwMuqopjfnveaZ6ZzL4k",
  "key27": "5MoRuj4ZJ9dY4cXS4QgkLrEcFg7p3LuoCX1zsRUXpnzyNJH3ojWu1XGpD6pbKdiGviDjD5CvXUw2nn75Wo66uSVz",
  "key28": "3Y1JdKECQj2uARyRdru4hSxxkHbut78zgYJuVjym12XwYqwBGySoHHVBU4e7cLQeWjCMjgt1ZZLywSRsptukvwxS",
  "key29": "2mkzsULhaDXJeb5xdbzRMAg2sNcRWPhnX7Chdw5Hibg3WbsCtKAGaQMQTFBYKpkLnvrd1y6BYa4EYb4LhyPocEYk",
  "key30": "3BFdocLKfBBC5bzuQRi1TC6w1kiUR2HQLyMsYaAvy5aovDWAqz7ZR6JusML938DyTFgFeL74FJAc8nMWbjLHnsNf",
  "key31": "4MvmeWdoTqxvpiyBQQGdhuUKum4CbX2rAiM37jJoU3KDzTLdyZzrZK1DvYSok2Hd4Y34fFk7ALfuuyomLVYwNGfK",
  "key32": "TqJX5CMzFbCdukJ1SBzCgMykoBhfpS685xT9GVmDbTmL7vDoXUsBedwo9HfM58QD9yTYZZJfbsQJ7qDXy8AyfCV",
  "key33": "3ZK1Kjv1aKdmVz9fNgu7Nz1R6axAQwJt89WZPZf4FaeFbHss8juxAhxNSY8B3ju3P7ByUC68LuKoLTvF2GzY9xK3",
  "key34": "51T2XVuxqSmk7Mt1AaMZtmVGDAs1Wy5Piet7gFUSSGEnjzkeeGvWukwn9HsKPHs2DMxj4uHtnTkiwcduJgnGxZc3",
  "key35": "5D6pyvzZPnRxKMhA92BVfHBj1SZdJe2uTJPm9tjS3biYza2Wfp2s7UFed7hzs4mziCFTNnNWJDNt9P63hnwDk11A",
  "key36": "mejwDmUN1P8o351e8FCnhwZBbcPAnmGSNn4VpFiPXNNkGVk8G8exgC1KJZbNbvFZyZQgRmgrtFgLg3mRDJpue6f",
  "key37": "5Pwo1mzYyU23yfL5bJCCFncNkMhmwbwm5reQdH9KWDxgeNZREzhZfdpZAphwazHrjRSE8xmjg9Jrpjn4hnz6tj7c",
  "key38": "5c5rppsJWCMjyJiai3Bg1phRqyiKdt5f26eGdYUiBN3fyZmx6GMb3Dj91zeVynf2HVYBwN9UnuvbE6MF7fxpttLm",
  "key39": "ZhGUVZskFx8Bcg9mCyKs5suC1XCEUYRACpPqpf7SJvfqv6U4ro6McTkCP2gZucVEqgeDHwZPhZiJUQNrN7x6sKD",
  "key40": "4esuirHCi2cnCALRehFsi7N2TuNASXXmaSZXrUfDm4VomssuU6EmqKWQz15fxA2zCxeiTJFpCfRjWVwCDXw2iY6o",
  "key41": "5yx9KPNeZUmaznAVrJkMCxJTUMXq1apnoEJ73kN3sJRH8cg2beqGBTJU9BCSRg9WTmjDfH2bJ23SzNb73qE6Scbq",
  "key42": "bhGsaEgkVN61KeEjXda6pqUpBRJiwZBDMpHY2fFVBUBM6pvVZYg7fo4N2hnT128pp6SMLQhkwxUWTACq7feYFBT",
  "key43": "51ydgHAgdKEj8kXYFKjD8oyD6jE4WGML8XnuonnvduSQtVT2YneXH9VdPhdA3ze6Cf9E9HYENPWVUhHHgzuJSc1W",
  "key44": "gZUHLCFsfcYtQJN1CYxPhHeve42gon1AKwKzxnMNFVynHvkD2qNHy39hD8R7HoNXux3FKfc5MiZbCEERJ3JWHny"
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
