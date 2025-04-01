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
    "2iudQrTVaE3nmz1x97HrTzuDcfFKest1CHVF2sX2iTHQJFiLQhn9gAuKF9BEuQSU29WWYiztBHJBjBRUcUwVXFhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QnTufr56JihWr8jQ71HJvbT3M6casgsdyNRciaAVDhrYWcGPTcgF1rLZ2i5gq95nuW7ZLiH8iyTQN6Ywd8ao6Wg",
  "key1": "3HjYChPM6mCEKLBvn5N21eUi5m5tZ5JBgZNBp2RzLJtrbWHqKWD37RnbAKNChKwSBsiMGDk2Qc8MkEcVH6vNGmL",
  "key2": "5ofXrPFtMcnkU4xXFU7U7DSXarhBUaLdfskQkfB8ayMuRi5nksCGoyZVtr21Xs6imD1RdF1d4qmTUXjyV5sozZAU",
  "key3": "4sTQaszLpJ2puBzYPZ6yaoKkUmSFSNzmXpTDKkjyjkfybyMJr6muyWxpUc8e37dz87XzXMANxmhbGLUm1ZTXb5UK",
  "key4": "5vuUejEkDbVEZU5fcXvjBSjWU51yUrgwAr7AsmEtTbgrLryjP5BRFLxEdgnhyaVGYVdiHdUGTQjYPFmpJgpr9PQf",
  "key5": "weMkfzsz1GCLz4WNLJ66SLtDZ1KRjLcX1jt5mc3KXEgZwrfKWLKzKnjhRyAr8cMXEinQefm5i1oNJYn529gvL9k",
  "key6": "2oRKNATAx6vTwG61xjNPVsaPr1cCD3W8XGNFevxp1hjrbmexdfE677BTUrzvd7ynyyoMqJYE8uv9gvk1KmamVXdU",
  "key7": "33Bqwxs3rUMwkUQbtnMHt3X153xpscreZT68Fhw383T5LAj66JXWQZbaSh4DphWAZwT7xKciJFFFWmHLRr46deka",
  "key8": "3ebLdkejUcPBX64x4CdQfohHqJvw2bSB1ig4Wz9HtaAj6hjooR9QHvq36i5aAJXjsnDygDhq6k1by4vN33dic1jQ",
  "key9": "39LGDF1YQKeFtujPfnjgHL2C1FcNVMDPdEuY9q6oHaHSD1CsyMV8mgdzQF3aGr7d1tMrnNJN2d3LxXDGEejH7qY4",
  "key10": "39D8JZ3PZza9u7Se9jBm6ueVuFG43dsePSpfQawosDZL73xmKobeGLTNy7FxQJw4EuKcKiDkA3gu2gr3dkbaR8GX",
  "key11": "5YnYeaN7MoyoaX6mF5Z77p76rdzGNX6w1k391wA1unbLEjsgn4cZFJqTQYWxCdPvXHwoEuJ9oD9C2njL2L4yC7Ma",
  "key12": "4cAb61WLVF2QjqqL7BBeucvXu6KfrSEy86ncQkZoLegknJTmcWmY6J1SgsJj8bf4RfbtTiF1AL2RQPwNrMpH2zLC",
  "key13": "3SRHxji7pQBVe4Tp8aumyiT5JH4aSiJEFTvgQTu5QQmJv7k1i9sUAC3shbEzKLVKnhkazD13tLPpsHJ89yscHgwf",
  "key14": "2ChcTyeNZqPAaun9LxetMNzPJxEVPWJ1wL8pAoYgomdGVe5g4kH8UaS4JfqjXVYRxJcHRpp2G351QNzosJon9XKt",
  "key15": "2izYrv8N4WSN5za2d7kJWmiBDUew87cULf2jbdb9KGsEruCexEttP63jvdY7H3PYkZRSf9ZiZEpK1XerRbvDx3kg",
  "key16": "4aMVTdXkeHL4ogGkyybFGAP55GJS68Y2M7KVoGzBEhF5JUX1gmt6hVWkRj36Bms1XKZE2LVKay9Yu67gTXLbSszh",
  "key17": "5MDzqMKgYarKENAaMxQBRbwU6Pvn326bXLuzYkJKhHbhXhpaUCR97E3t69ycU2bji6EaMFRRo7XtjkJ95jXvLSPK",
  "key18": "5irMm2MFiqBYJaABRhnuvVCYvVzsPsix1Z91xaLGx7mFWKq6YjPZsLJ6nwocjuVujYpxXRDr8RytvAqwgtRHTxTE",
  "key19": "2Ra5bJm3qSE4gZcHoYFYQ8zbGaAZnx6Ls7m1K3P4HZFYWCMBeJfAt75ZpDvFgWiBr9LSd6aavbTfAuMF1ud6fkUq",
  "key20": "3VN3QVKFdUsHrw7PwkRFfDgNwiaaQSNVpNmj68SKj4TknhQQmEL17Q67uwmbQHd3qpyY213gFpJq6RShcKQnKBEi",
  "key21": "48wgH7b9nmFJzvNRqk7pWRjBSXGHDSGezB9Ku56wKWeqLiJu8rKLTW2ACFYWEfEQbycDpxDEAjxDc2tfRZMzVChw",
  "key22": "5eUEnSiWa5RwT77mHzJhrHY6MPQrfkk8gMy7Q4WghQUbcqZReKYSAoyyLhJRJGdTW8cJmVRCDNjX9kfg7KftEcwe",
  "key23": "YefMvyGn6RgoDYw3FYrXbWW7sUb7aUs9G7Y2ng8WzUVuP4Sqid5ENeANeXcmQDt2JbL4dF59xP79cG3xjpaReqf",
  "key24": "XxKhwgxnTLnBGaGeUo9HBheNgFpMxJxsmqBukWyBsxHEN3r1tZMaQ83wZAQprexuSrSoPJJNF32KT51Ri7iMsqe",
  "key25": "5vMKE1biMhhSeGwzJUprtR2BPa6agQTvfuXDau3HM1Xsz8CZEaBGwMv6G2LWbN6pKF9Jw3uZVr5iKB6UGt73mfVA",
  "key26": "45MdVMeLo1nbcjVQchEWi57TzWVxuHPdDAVPaTHN5tocphzcVgZwpomhVB1bFRhWr3XNPDiAt95CMpzvVJMLsFZL",
  "key27": "jAfQCjkv57jG7D3eCzqtwB4yV5Vy7nbdkP5kVWWhaskbV3RBYuPfA6oAbZguVRBb1GNYyiPLay9S6kMj448SHS5",
  "key28": "3Qpr9G2EXekCedPtTtpsNoPCk9zyrfjMJrafMvoGSx3BGzKiikAcMhm9f7bV7tBPH6XGhLvfAtGYkX1W5E15A2kj",
  "key29": "4c4S8VibPxfE8PCmE2tMSZFNkqcRLm6sDpdMRkCGjKp8XCCBNy6tu6dejDxedKJLuhMgHZ8UZ5LXCoaZWpSzK59v",
  "key30": "8WHUbgMRMs8TkMuCVER4DSFf2eXjKgwtmSVqb3n7fpQ7VqSUu4aJtkWqPXiqJkdtAFNGBzzHdH5EbyEwwZvU1EZ",
  "key31": "5F7dto65tCKvB76G1F31MSNgUnzfqeJWWBJUHvbGbjch2QADVdFUxKnZDgWW7SwuKveNVsMYu8atNFhbwm3BsCx",
  "key32": "2XT6xPtDJaiRPCHp6JWPhHbKDBGf1dBT39dtwFemGcizzNPmxc1MTmAS2rw38o9o577KyXRiS4sd8U3pf7EJqWCA",
  "key33": "3wehmxsxVzPoBwfECwcDzjr3CYRdH5pNj9DaXUnt7HuX8wUGhorcYT59DRkyqa3qovM23p4v7x1AWMsrDvkVBUjn",
  "key34": "hVAifPS7E9G89c6bZQhFsmBSEDQquiDFp3bsrRNdEU9p3XdyNdoF4TdUMCxLTfNuarTgPBDuuxL8sbHXQxLcoSy",
  "key35": "pqs4amnwv6z6PFeAHQXVRHNBR6tPLgqBN4nkPKnJzqbnDXLx2BqX4PTD51ZBChg2LtiRZ2UKMZY36f6xQbNipY4",
  "key36": "4VyrLYhMXe2HwzwkyXNZoXyeFSm8J7CE3E2H4n77Phxc28FciHx3uLG5tgBXduNbxTqC8p5RUyfEiNm3qprWrTGn",
  "key37": "sdiAC57VbwcnU6qC1phC7wFWAYAAcvK5DGuCsm46YbfoUkB1996bx5etHCXjrPjMHCBTJyUayftz9HT6X7gRLDg",
  "key38": "36m2pB9ddskX59ubEHJoUEiYEFehKo7c25op15LXV38pTZ3AavKWdDyn4rPuWjZGH9CWVgjkDQtaDcWMdb14M1R1",
  "key39": "Jp9czVeYqFTxL8NWwDsL8uR2wCRpGTCmNWnX5DmK4pG27tyG8UBjaHezT6u5esr9yvKcSAqutbHNqkqxuQuUnQu",
  "key40": "2w9F8YCzwLz3TAgrPi8NuXRisfmZjC2Wyrik8HX1VgCzvVjGRGBzhAG4y9wX9c3PAzWvAHfPw7ozfrXK4sZqyCyQ",
  "key41": "4mkGsRAVuyc57XrhMbgCBcV4MPaGaoX1DKbqLHuPpxYzx5CwbcjvMYVFfVgPnNXpcS389W7cMM14XJ29WjTw3saL",
  "key42": "Hhy9FN7qd3UEzLVgTXiKxRVHfedC1wJDQJqrAKFspQbHh1YeqZkGukYhCVicGWnfD5MejfxnufXzVyJCPVaZoxZ",
  "key43": "4pnog3w25naos6hRpviaDMMKao7UhHEywuQy4hFqsE6Dia9V4cmcndD5jBpUYnuPMbGLowtXviDjnZERXbGkUJFQ",
  "key44": "27xpKJFEMAon4V92qDZ3gE3ndxPRs8aTLSVbgkqxB2QDDqyEFuddcCnHZXDNYTkQxnPFpqMcodkyTzhfYrUfcfgw",
  "key45": "5uDQt8eUBY3AvJVmNKyvsfyyXZYDanK4dUYsjVXSDg5EEqNuF6fe3qk48xsgXCLcE6E9s8LTkKDz8m9CGAm24867"
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
