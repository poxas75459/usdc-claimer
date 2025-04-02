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
    "3fGaMNZD1eLxog77gzmv5smW4La4AqDmAvkcRihJt9V5LWRsAsMwVzpHT2fD6zWMdFp2qVvi79YH8ybXjuRuJXdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AyRc3qohqAq1Agg9dwTUpBvmQov7uDYRpY7UpJY6JqAwgLHrg1XyQcvEnJfQ2MaVr28UagFZiF2SaKeMmafbnY2",
  "key1": "5EEKPHELQtsrM1G7CYh7QusBSm5jqmvFsZFa8Xe2wj8E1WmoxLZR6STKqbaxgKJKK3NKMBHyWPBvgZk2QwEKC33e",
  "key2": "3Jt93Y6Ya2QmwDe6AvC5DtAdBKKuksp5Ekz2Tn1PDimqTKK4hxhn4gBpTTcNXnYK5pbRq9bkiz3CNhzsY5cE9gQq",
  "key3": "dfDcZBMqiQGyf4SHYCRAq1D68NWaZKt51R5Nf1bCCYrud9xSVdy4xvoEr3xZsjpSA7y56yh8Pb2wXwabyvCp2m8",
  "key4": "3eJUJEZXvXe7VwGLhYzSF884VP8peB839tQVpBTFuft1EnGJLASbBEamFkQhbfhoTZLUjNXdYvnm51d1EPgARBL3",
  "key5": "3trnu5Hw5fc3QAbqJbAQNCi52RSxU2e34Qp5beRn57D9PKXEX5wgxhhV7wdbWTtP1a4FkSUPiGkb98gioedksQpt",
  "key6": "3cQSytUVyicNnqBPx2EzhAg1a4PcQuHPbKJvNkEzA8tkuo9ZKqzpW7LyufjhExofGXYAYHGrFEj5Vzt3TKMNwMPJ",
  "key7": "55U63RbhVKAQjtJ9M8wUy8P8NR5GEFY1YpGmPbDXQCHvFMrM8dAUKc8pXRiYTfMhrEDHNhSPLPtjL2CQAy3oTerG",
  "key8": "3JVtYkoguVta9Zr3rbdCu2cJGsj6ySM9w6xPRyEZjyCmKECoaZoyXfSJvb4Ny2RutjCMrZaHMAKJcKxoCfCSDNhV",
  "key9": "5SED3GiuxehxhSZJqo5yFcFLmK6ka77qsLyDAhuieLEbomdXqWk3ToR8Gt956QUH3cihfwfzuS2VyxbwYFNZnJ2N",
  "key10": "5QB5eSxvAygdpNXcdAoz2cvPc7pwDssK5hSsiaZCVsoCLmpRSbkRY7tP5pBQmm2126HyCM6LggQD6y2x2wzweEPV",
  "key11": "56PAW35QGF8xdZ5NSwKEBp79P7JRb641qq57XCesEtgcZQ7bivoeZ463DfMEi5fP3yE6xKeNDUujHyxFuwGWcPTT",
  "key12": "qNw95dGWzXUAV7Y1t95Q7TeUaJk5835x5SQ8nKtDYVUNHkJrjmi41XDFD63wNqDUyKbKHeT25pZzAx4znj5quHj",
  "key13": "4Dx2RdHCfiGhn8xt7r75hH3H8F6PrkT9CniQm5YvHrjK3vyPAgCEYYmBa4kNfQmqxDmDdRnz4jzNhmtXsEPNrsED",
  "key14": "39d5aFFpW1kz6dLQpGF3USJTwNFhhNHQBkSbxjbAEwi7vpBiyTH2d3EaJ9W91GcHbaSofbVUkG9HMiWrbYFmqE9C",
  "key15": "2uMfmc28Umd5ENNrayPNCkp98qG9sjAFnEuJ2PzBiVPRV9jTm6pXsqRgCw4BuAaFkkj8QDZHvvfyybikwRHPE9n5",
  "key16": "4eK3DMFUKgW2zykzn4QD93JGe1SkqZFjNMvCFhA3o7ohR7xs4x2vrybwKx1BUp3uteC5fU1E2jdSvexsHDWm11gx",
  "key17": "42jZPxCzDV2efChCWstYWhnKnyAP5EtzmthnBoxdpXiARCiqCZUqA7Px6iXqEaQfQxFWskAtHYGFiSXeZWVx4jdv",
  "key18": "RFHGGx4WD9diggRnedFRbvgsDUP8LNTrmzXyhDoBXro9yDcXTQJpVR8mEHoGe6GnyvjMHg6eW9CfHnknbiVHLy8",
  "key19": "2a8ighPuEwDoBgVFJsU7YrWhgaW6Ycq8EeWGmEv9acEJ3WtY4uCD9XFQvhAgvdYnVUky66p4hXrChrscjufr5ZG8",
  "key20": "5mTvHyoKE225RpR5rkLQsSjBSsqPLhdq9f2z3Zb5XrsiZ13x5YogwPZBjCiSPJ64SYhk8G1Co2KusKcABtBVfgZy",
  "key21": "45saVQ5GELQxmuBDKnTccsrzXAVZxHDehkTFLHhKfNDgKseh7MHH8hjovhcA9RnKTT57bwJgEBXXunykiq4DY5HU",
  "key22": "22JUexgYGYajXp6T6eVpMnDpBLPbVztSroVoZjG6hjLcbeZnTGi4H2U7KsouPQNoanWG429Xth89UnxCd9eNHp9H",
  "key23": "5SvnfbgCcU78mLenJdX9Dypjx84611wTPoeQu1CJozXoupCLksPfjnMCFWu7ZcjiCMHP9MRYRhxEgVi4dmTGTVGq",
  "key24": "5WVLh8rGr9apAy53wNwNMdAECZRX1GDeM4xfS95NLWWKf79hpCAnNoNoNFsFVx3xiDu4fxQiyXexgAgn2eRiQsM9",
  "key25": "2heVtLA1foFadk23dudPv8xoDXmrh3kPVbVbL2NA4a79BaKukp8ZDKSGW4KBcD6s8s1x3pPGpsY2xKiG91UtZNeN",
  "key26": "5iNEeD7vA172qbNSszWpnQAQ8Cm8uHJL3upHcky86TXmmBZ8fz1ZSA5gXpFk5AxDTcWe2YPJp3si1gWjoabCcbwn",
  "key27": "8JgWaYSMxDDbbuNfSkzdeGZGogn5eGw7nGoM68mBrVPt2iMFazMGd4XRe2Lp79usgprCFcVeUA1gQFm2ZFg3pGM",
  "key28": "2Tf62Nt8genEM8N4RPZwUFtQNyo3i1yMvHZnBshyPuYBFBZksfCpnNeP1WQv4aiZqzC76MBq3hubra7CYu8TYuzH",
  "key29": "5xAKAUtLuC2ykJ52Ltk3jwphuE6djV3E5dnJT7HZP3Dm9fQ2C8xNom8ik6jNw3T1Zq8wdd57FgdnLWR6gnDvfv65",
  "key30": "39J9se8unxYcGJrydohPWAtnXjA13SZqxWt26oDuKowbDH49pktiituxVQR8DkWnm1UVtX4rimmfFSvawsHHZENc",
  "key31": "4Tsh2HEpbA8sHZfs11p2U99yKVdDt5Twh8SJwUDP585EBZodfTWcDdQVLGqrcrWoxwX4ToiNWeQnvhqyJm1geW48",
  "key32": "5K8p1rt1PUgzNFtYTctFaYsjBVdjyYVWiYgxdTfdFTrJbZV1XTQs7PwDvcks4oaztHSrWxACpGuLr1Aof8U4T8qm",
  "key33": "5B5T966fKNtS7UkW11Wt66fsoLrq34oMiVr47UQic9HFE8cVtSTz1QH4pG74GJaDUWg6N9ixvUoV8tY5LA8t3fEm",
  "key34": "2nghgau46C49hNFbNFVqGWNxb6RBhCwgq3UEz2xg5b5msQGkoNurKLGRsu4D51K6R1VsMNZ1QD6etsvBgeJuhTQ8",
  "key35": "3J9PcBE47kAwWn3ktM5coivZ5rk7qBPn6p8eUZEk2ckEBX7Ga85J7VAbYz2mjs3fQ5y8C4S5wa5bb2sGk2QHvFpi",
  "key36": "3c4C3NxzbvjqquX1AU4oqQDhu6Xdnbni6oy27hSi5vUoYhhpDYj3DKoXybdm9CAp29m6BcZFvxzkxnAowh1t689c",
  "key37": "3qvm3Kqoi6KhbydhVsYt165F1djp5staBdijQh6bzvxtbNkZunGZuPrHA56TgPyR3PzEc7aPRqzHYtH9tfqd2NCu",
  "key38": "2hqnKJWPRwbp6bFCpcpKCxpiqGFFpMuQS3JADPLmUCACkZyEbPmMHQ2V2zeotNgLe97bkeBgnFdedNsBGo2nyZ7C",
  "key39": "2UEpps82D2gYLrQxZghuB4tqunAwbyipKkEC7d1VbShf7WsrBdcjtKRMKYFE9xuyzMvx5ExgbmQi2eALPzv3yUrh",
  "key40": "yTWfa3e2idUB3QCF1thi2jPVyHHuLpkYCcoBwMpR14Z81piJP35pjVp9MWEMHohn9VQmCBUme9TJ7PViKxhcwkK",
  "key41": "38tE2p7D23QqwQy2u9JrjoQF57DsWq9SYY6wy8UanrGmwE34mCvE5h4J9MQnnjX3jNtLqszpwrpwUP6yMbZdEKUp",
  "key42": "3Dn85tdsbKJxSGv61BKYMFRZ4PKvapqvw1cQhYf9JZVkLxW4kKxJRiVcQG5G5e3eNEXy1H7RjAx5PcQMaDRtDZZa",
  "key43": "2bwXaPoNPneC56BZGiFfjBpbDSDbiRsq1LhY7yEVpbWApzgjdKSnCeUJbCuo5as2F2NvrnmgtuZSGqzf7iPen5X8",
  "key44": "9TDHCKxSaAHWoJfeNVJDd1qFY6RTJGfithtERFKTbHZFM9xL4H8MAs5PwDTgtSy8VLexmkMung5Psn29r51wjrF",
  "key45": "4dDtH87pkZWPvJCbNRSAuFaKrckRBX8uFCTj4NKqghgRQyvzTSZGHsNQjwbgwwqMvVeCytGWbNHjrAFTnsj3vQCQ",
  "key46": "5ECjQaVnZskKP3SJhfQfmRsYURGDP63k8oUpS2ppwxzckHEtgMAaREnqpWmnP9Q9bezieSjNNQBCo7Qq3UY7KoWB",
  "key47": "3n42H2vzrB9h4z3xGi5fLTpU84SeVKho8w6Kvi68M8GREw7VXviLADyhTqxVq6uki98SUb39AyisKkqfU3Pb34nv",
  "key48": "3CYpHyYLvbwrGi8D9uE7SeLx42rH6z5WwfgodS7DvUcHsFSMEcFNTdQuHQTqt8SSPNdyza2Pp9iMTpz5xRykpDA3",
  "key49": "44D96YQdB78ugrEMS3gfbT4bu2ZB3fB2QNdGL1LgGdP6eVh19knw9Rfwi2dhpKbhG5qsDuJyc2Gq2abyqmU48vEE"
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
