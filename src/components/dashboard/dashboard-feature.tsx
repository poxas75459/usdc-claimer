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
    "4aFHWvDbeq6xLwZeGiTt6Ho5ZwukxiqcrKZS22qV8oFVv7zpKzkbZDA2gcnvJ7Jyiw4eGH6akmL5XromutiKv8Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3zXwqgyezTMU7aeF6iyNVaSMS9jajqFtKGaMRH4QUw8o3gVAjBLFnyUAKD6HLBGQ9AnPHWFmDFf8ThmFcHrQh",
  "key1": "3D2QMroGuMatLCDNsxKDi1PtAew1j6GyHaJNyLrpQUwhBfi5RdG4GSQWoVJK3rnCeqwLhpE5XqRs8qYaCYtzzyrE",
  "key2": "dZZVCh835zXpS4SA2RtYo8que91TtiCbBh5Sr4hdGBYDKVziwRnn413ecueQjnGP811xd3U4tjuJ7ZqsbbqNqCV",
  "key3": "2qhpPMayRKiXNTxwJXBi1WoCXwckz5occmzFhDFMM4X8VKgFcu8giH55WPurmtbkehf89VY3wMXmqZ95d5qJhtQa",
  "key4": "psivUbiyob8gBBL7GWMsYie4BbZn8j2uXedAW28Bd1D9EUpNP5dK5JLUxFSb8FUNiVEeBVxHgsToGffGDmHdRrL",
  "key5": "85Q8soDN8rGM5KYopAhSk5UJCsj3ujCiX98YzDXDhUjCpaTCcUJUumeCEX8vwdLhmYvRD4q5jj2538z9tTsoXE9",
  "key6": "2CvQgzEagLUEHWuUhs26fBwn7pMxJE6T1GYF6F1iYcrMMYcK53nKPcNhxgnDW8ZSEc5tqyDbSm48LyoVY2WRoFvY",
  "key7": "624v9b97uy9bRrB5Vk6ZszSWGcWo4U1DgVFzpWqoco8GDFpRAHEttA4ZRRK3Um6vQPFNb4DoLQmKQfvX55zPh2WM",
  "key8": "2Me7AJ7cZqpgg6jvt3aYdiqKr5yFa4Q36cjZtbNUnRaCvhJNV31bgYRehpXDY12pwuBmZvfdWBgD92YGXcfD3DnL",
  "key9": "2aK2aVZ6JAeg9iVwhJ5s1GmScBXk1QMWZ6rGfFXUtXvb948ZvSDuS7X3Yt7sFBf7qft2kes99Py5KVUaXxxQWom5",
  "key10": "3XzXxhTBkxXz4QLZt8FHrcyf9c9q21jcLjXFZ1d1GhEtTPGVQCkcqbro9tm66NNngiJ3eqbpBTupGNJDQsbdVU7L",
  "key11": "41UuaK9gG9YwDWYorfV8Wnf8nyRs3gLD8iuqYBpBCEddRpoU9E9PoDFEMyovFpQurhTJtpjMxdo9Xo3UFs15ygNd",
  "key12": "5Wy512UiRv8o8FudJ357hpLErA4Vx3TxRSBxcjEMAaQLX3CurSNE9XJes87vvPqvmFj9Fq3wBww9TEpw3RErnqGL",
  "key13": "nkw9d5YPCBBPheGLsQFATAYztNe1EnyiDEWxX9ZT7YuDz918N7tSq5BZrQz6q8US3oCEhsFDhtgUzXdRJXGLgxk",
  "key14": "2qPc4cRPo1Pb5NV4ghrqeptKxbD3EKkd7pUnBDuZwrPgsBCuWmBtzpXL1MUmLsdf2fzx6FuvRK5U8bJHMTGnMLvK",
  "key15": "3LeXU8G3yMUnx91dgxqgJsTpoGuGgzXJZMy2tjk5ZwStWL2mhqYtzo4LvBF4WXuFt8prP5KmNArpUn1mLoXx3iji",
  "key16": "5v76Yhut68AKE9myjhiTUWQPdddiuaHv4RvxQk5iZ2aD2L6BEnnd7jkvx42GF3zv1mrMs3cN4z9cBKdL3JZFy6s6",
  "key17": "2wUdL1aR2uB83bK2KPxM1iQpgiDnxZhZdMYzVAtVJo9P4f7GDUYGnDzc8e5SDhrM9mRzgsMgH8saJLJqsMj4UcGy",
  "key18": "2f1qKVS6ku5AjapyRGtb9XHfNLZfWNCeVpyVJecvYQT2sddHhqsikk8LegSk6EaozD7d4daLHQzdUr7Q4ebAa2PN",
  "key19": "4dyTrYsPYEhCe44og3z45FrEchxk674t8E3mY5K8nigphHZzNSzWH69Um7Y7jEWYk2F5uoSBZQ7c3RydZ46DTydM",
  "key20": "44Qr8y8ACVJYjr1SvL6pNiMBemNVVrnoXmZqGTDudB6XXB96ATuQtchdQTmXuEfRSMBkys6uLih5az8yGow6nYJJ",
  "key21": "5StwQAXJnJzR1ca4Xf4JpnjWCsBemKN1w6BsxXgMChJ1886YqMZMrxkjbP8yjGu4Fo9fBXmzvoCuCUTNqfd7J1h8",
  "key22": "SJVDVapToqypRg8Dkp6sZTH4sEdDyuPVe366K4nvQdbEFZCv4XX3Eni2FuUk867DGbwD6UiJ7FxjXW7FSU1VJ3z",
  "key23": "2thdZp6vYofo3pPQV2J4vJXBZfFgSucUM3XtRggeLHn44y8AFWxj8eorbBfjzpEQGD1z5RzKDDtsreDQqr574gTG",
  "key24": "PDKu8eMz3taKzZ386b95dNppPxa5euhNm2bbFooaBzuiQpfZ3SeeyR9FhzLi3LaDupShZHSu8Pw3dwnpLS1U93W",
  "key25": "67Ndts6SbS8UCsZcgAY7jLPVVrVG6cdQjp8oAVh9AtPE6YiopdmUY53hEcDR1fx7kRYcbBDmS1qgCkxC5r9NDN1o",
  "key26": "43KPLFANkqXGVgYCDvjaDnFcp9NUoSHrXZMB87BJS1RFUnbaRhVbhXFPA12dMd3VsAVkE3puXqMZFRhzpxKxMaqc",
  "key27": "bsDPt4ZUevLF87vBFhX8NX4iVJwKwBeD6QcUcBePQd7RSXVJ1vHDT6fCTWW6L93ZRZ5K85HceQ8VM2UHhhWfZdZ",
  "key28": "3mFEA39MjfmsUSaQHo6XdNp6EZ7ZkGsCAM2ufVFNPTaiwi4KhvH3jDdZefqr6ZaLseFggU32M7mfkj6ApG3AJx5H",
  "key29": "4Jfyp6VsWP1JLL9xZ2hkQW7zmaysmDz1yLHYZQ1V53VMBAuzNQ5e6g8JUmf1VX4fRtdjmmN7pdhMfoC17cJ3ZVRt",
  "key30": "61uTqTv299LmMUr9gj91QssF3eyL1bE8qcVjoAj3ckRiMC9pCm6BkgEtycNGDpAkP3r8gaqxSQtzn6W54NgopJp7",
  "key31": "36qH7fptsPd2rnAvDdPqVz2Ar8C61TdPR9wyDR7NvxWfXXfg8UcXwAHKso3QRqpf4iqWe6GcQm1msA1GLte4JYgJ",
  "key32": "3LTiGdhuzwM46PnMbtsZLdCHsPZRMCvvDCtd7xdoNnKezGXWYov2trMWv9sL9gsXc2JTq54AUEYxoWBMC9V6wT3a",
  "key33": "2NuGjvD9jaaf4HpyLZqN3SDYDvUQTJ71YJZiQ4tFWBKaWtsCunmDY6uWkEvu3GCi666HYJ6Q4a7jaqVCAVTwixYH",
  "key34": "5vX6Yk5VomXmXd1uXbAdNQAn34UNzojU9Urx3GheUT1KeJJxGfHySEbUTTjWVLnj5q7gCMaQjoHS3cWjnTJNoUNe",
  "key35": "2MeGo5JrxW6KJm8QVBVNzK3WZns7Md1MCeNxNZL7yD98f8sxHVxRHV3cDgm6N66tZgGciLyK3M45YDrd4qXduyY3",
  "key36": "5mvChTQ1JCiqwV2v8RgqKMMM22hXaYGTJC92TiYQsgprP44d4Tpm7Mf3iJzMHZbzhTvAbSddds2nW8oBwKjjGVh9",
  "key37": "2iWTyoY8E67kv9UYeKc7sLg3DtyAhhPmiZpyRaT9CVV42ttkvvrGAWRiLnjqyMWjrUvdZJiPkHfu1yiuJFk2DcMh",
  "key38": "4RhhrzuYWk96NjJxs3Z2iLVoWauw7xEcBQtYbsWyaB1ReXS9hv9pQ9BLchEfbCWCKbvsReLcroQCZVvsgbjdWWQS",
  "key39": "5E6morJ6yLtEaYFBdFQXqEgDTTyM1BK8m8XPThpvaWm6CcfWG8MSmjcYn6AuvpHuegPNZskTyZKYEdUqJXqTeDb5",
  "key40": "63QZgpFuBkiRDbK6guNEg7Aj6YNQDx3j2BiShsMFQfMNWzX98VrTqGyGVp3vuqUSdAR7S4ro6fMQQLuo1kFJeMRR",
  "key41": "3TwsFDT6zrJHqsm8ZmS34tNdPdepzxBM1W4qzaEoeZAMhUvCsr7uooLj4FiXpehZu6MGmDb4oxWRTAyGRfCKAhgW",
  "key42": "UKeuWtm2jiaEBtjqQ1tX1wZ17xtsz1DntEfNZbuA1kYV7zCSBdzisshqJ5PbXvRgdCzz5meS7me4rVv6fK9zTZi",
  "key43": "Qiiu7Ts2uLwPuxHWc2MeeGfZffgC1KdV2DU4bv5iFNuRG7NFc96jhKPoBMtz5DhXorRjtg8QnSnN7M4boCeeE8P"
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
