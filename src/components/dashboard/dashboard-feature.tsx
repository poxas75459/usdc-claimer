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
    "5vzHZ8R3pMjed7xdujAN7XjshJpcz55u3BuypNLz2hesRAN1Mnh5tccQyXV6ByGwXe2iaHyzbrWELwaELtumy7Ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyNURh1oMowi1GBZ74CEv671NmiXbbt3PAsEW7AnV9hhgqkXrCxpKv1udB4d5HEqe4mU9jWAjaRUevwaVz6xDyT",
  "key1": "3sm2onK6KBRKp22HEbbuPLngwJefMArqq4wBnrdTZ7BjdRmHsiygpa4uwHUeHVq5u9b7nzAbRwuJRBWWJ9HPK8F9",
  "key2": "5goaC8RqxG6yTjxR93nKb5CPS1L4bmivZBeRtNsMKBzM4sVtYM3vDLyggLykvzzekr7YVq9tvmE9mt2UZ2xLqUGt",
  "key3": "4WPxxpJjWYmRgrMQ4sJ228Zb6jTTnAVes6AUDPQtmCT1CLYhMox35BPVvFAnvQDLTwYzaTGRFE1xdAceFA7VFj8T",
  "key4": "5fy39wDjchcXCYYUv9fjUPTW4arzJRfxCBBZJG5vnHQrgWxf76aYgRG417WkLhx9qnDXiNWBQ6qqeqrLJhKs3Y1V",
  "key5": "2wHTAhpgQh29tiHa5eUfXEwifekmDoutL97xe5RgCTcwLSyZCv6AdNEBcDoSLvJwE4rfz5eLC1xNSV8faYmFtP9D",
  "key6": "4gdAFPVDU2QEYsEDRAnNSqVrQRaZyQHhbeCFcTJeuLGP973iA51jnJCuhZbwjx9CaG5khdVzCPSmHRZXZ79XK2Dq",
  "key7": "b2cxcgfKbuDsZzZxaRnLZ8fuyYYBgBmUYm8Xo32eugcUAemrAKoZXVaAZzKnA9JGdi7wkAaDS78snZ9y51PPW3R",
  "key8": "59WJJ1FwUp88aKUiHvQwkXvFV7P51K7iB8gig1D3LM3RTJaoWceJtvkki8mFddWhkBTpURoAyEfXeEGJNaP42KT6",
  "key9": "5Z5CvBQzawxqLK7jU3zLFgTvWsxJ9Y23pXtq9Dh65rqBJbw3yQurmgywF1j1ftnV2bHS867GYwF5ctym7YZmUUE8",
  "key10": "4LsCcRGjxfU4muw9w8iNjrqGF4KJxqgCsYoo38s73nuSac2fduWh9Ncd3XJjJ34JdvKfyda2YZY33zyzxiSAh65v",
  "key11": "4xTnFpQQaF2PrWWLcN9pVetLD8CWR7BpM3jQoTSfF2EpoMwDQNbTSTfuTpcoKou1cBkp5stdtgx4shnvsJgdE8hv",
  "key12": "5ux8GXbhEZyi68Wp5tmz7aoydT31vohxF5JwaDMdQHq8ibhDSG3o87t18cceSHEVJ2W6YUkUj76mUsKankC19Xb7",
  "key13": "5Ej3wYiL2Bzk3qz9E3VNXKySJz3xEYAaDZ2TybhHdcozKXvMaMhtbXKzzqo2JFcruh2GFD7CkJ6iCraJMVUcQn9J",
  "key14": "629JBGzyEu4ub8NjidUj6KPcRtTgV4T324ocKA5PkEikexuADUDjPKGF1JfRJawTvZKFi4QY81MRap8TLS9xCumj",
  "key15": "u1FLzcHngeiLLYZMkDAQ9xVgvBS2XyMUD4Z3yuhE8uZA65zk2XEDmxz38CXMgMP7bZ21VSCtBbCt6jwZ7MJyu68",
  "key16": "5V5KmyxMaJ1Vv8Dcb9ETkJUC8zDUY8WbfNdtJSTWwUnrjogxz9CFmPykAyJsiUDvNDoMtqbVcpGQFkKEH8qRVLvT",
  "key17": "3ZtAzC9ERLWQzMTDzPu8tS8BsWHAqDLpGBYmozTHjg9yqktQoVZRTvqtcfmSkCQxcnCm5SKRYYAuNyoSGPX4nKwW",
  "key18": "4MvGW6WPTrBtP5sLEdSFhZTdVBHMxmMsznwDeqS9LrchY7jfJqxMvFxdQKFUF9yJa3nAaKnpoGVHWgt3iPTVno3S",
  "key19": "4P2wWTZk82K6oTEicRz1AabkxyneZXNiHmwVEmkC6twsqVAXqSLpxA29wNRVVBE7Z6Zxppri4bdaUbv4hXgHkCP9",
  "key20": "3xDCg7sQYiiitQgkPDiq4H3N1vvqoH99MnBng1yodeqQhRcidZHQFntrLdHSHmsrSdbihiZxLyY4g65Ta3dMwygq",
  "key21": "4aMQJfhtLZcN9g6Xo5jBKbQTuvZStJWMEA8TSD9vT6cS1vLX8NG9LPHCsnxFrGS4Mq5LvnEF665XefgRcj9Yvzv1",
  "key22": "3wwMmpg391m9J1Ycc4dKRunAGDXWpkNxpgBwnVvB1LhpNDnacmoWqYusVsya2dEoW4rmYmTrLFgA5iu2cVB4ovM2",
  "key23": "5bC7LAUuFAXz5tkZaG42yY8KRMqyGhG3Ti6JdS8vVxmY6xG2k3bDC8bjsoD2fpyrhhfSQReWRzaN41MaY6UPtQgm",
  "key24": "2DAm8ebPX7VnGB9cz9GHE2VBSvC9q82kdn6ynuRhEzyNNkfw25rj9wJXoPCnCbJjmZKeVAAPc3jc1HREdjCjofPe",
  "key25": "5NQ711WPfusvdULcaQJL5t9wMiye1SnspwwQedLt4mmvhm8JdUq7yNTxYWwS3EvyArwLUMVUHA5T1m7d276YsuG3",
  "key26": "4BxcGrvvkAaaU3JL1xXmZ6TDMvy2p1UXUdEaDretWHCJrCJLCJSMzACebEAP5vL2BGm3xg3MaFdwcB2NmMk4VDsa",
  "key27": "2udpx2NXQsq5toyfivguVnnbexXB93CGFu21W6FBi2zgQQMKuakbBi7Xk3ahmG1Vanu1CEosmusQX8uLb5GjN2vA",
  "key28": "2neMAEf8QQGrLYzUpLzCFkFCmGqu4zkJepz9PYXsEGQEs6ixTw2MiBrSvmzbXf1HXY4PC4EDzvWgTvGn2bBiFiGL",
  "key29": "4QuPcz4JkuCdiQRn5VH9pVSRagx35yeGGd8p5AA7TngPWKWTN14CtG2F4XyNvjJqDtxf2SSFTMpouEWMQxHZxBg3",
  "key30": "5PnfPgna9G9KhQiWrHjHQByfiZDuSCpUcyznSWexupTHuAKMZZEo3MmshkWFVY4643NV7yEei5wrpEnNJddYciCi",
  "key31": "2h9pT18PrLC3KZjCawAPCSVv5CRzH3F2mcBfqu2wSEFaKycDvArGmy68hNPSckqiySBqRtz1JfdMvhsAauX1TFXu",
  "key32": "3bH28e8jwSqPphu5eVC3fmC43hk7jddSiS3biG8hEtkRoeagdSUM7L4os6R8Kb9rbvoKdmDj4WjZzWNHFELJHpX6",
  "key33": "hwVpgBVvWbkATr78NQEVJooGodnAi9y5qepwygUsmm2zhRvH8mUb6MaYd5ZMzHPJZAEzNU7xWXHbmKZ9hbKHHZ9",
  "key34": "2vc4ykDQsiFJLm9TruNKKtvmHRTed6B242BHSUPdmdWhCYNSyYE94VhU16v33u2r7TStbGeJy32p9pjwpVgCA935"
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
