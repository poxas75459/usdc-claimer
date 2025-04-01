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
    "549SLMVHGkfVCAfEvTohYSmMTxhecRzfYnQxZPcTi6qfULY5txJvPdtsRj1EsrmqQsd8799Y3SHzezpCFgG5aUfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269sSqhWWczPxtq7ENkCfDQc79qTemtG2JySh9FXUvrHDRhPqGs5YZzTpLFoRG1fthDgKNQkXLPFYB1v9zEhEFA9",
  "key1": "5eW9aksWrSVVE2BpdeE22ShkToZh7yxuqB2U2tMdhKm3WjYoA5c5QB1sb8JVdYgw3Sf1mn88nfFUuHW8h1oKVKFK",
  "key2": "5cRQXrMscckap4GAhENdPLTo1U6cjmZYdCLhNMc7QpRYaxNqtaUFfzzcyV74a7aBkj1ArpjfN2PRht8wBnK85pJg",
  "key3": "53wMgEMrKeUr1KFZtS3vtXgM5KQxhzgmJYgL4phtJTyvobnhEriVm6p7rqTzDdvxuXRb39dJJ3cL2eHVZrwRz351",
  "key4": "5kWe3NoHmyxYedqwLGj52xYY5HSu8SNwsyzg5wtfgSvCfM6DgZPE3y3re3EadHeAykYW9PbZvn7Cy2gHoJ82WR95",
  "key5": "iNTAMYF5KfZCp9TDDNkaJp4s6xuMvL85eBcLGHGLt4JrRrboh8oW4w3kzP4UuFCYkiFAjBHMEz52mceHiRBUSjh",
  "key6": "266Q7KstAaEVkroWXMRHH99jewmuaqUWPbQQS4t9qViQB3dhqwVf85pFXN91qZMXGB8skRMgyRdEytsarrNZUpB9",
  "key7": "5ACX38NtbigKyufn9pN5MHxtmhkWv57fKfNZxSx9QVLLs9AwHnRaXr6g7wgSW7Sh5Lpx6kABsPLf77Vgp9fZzn8s",
  "key8": "2z2gCG5CygnCZAuETqPixJAXx9fS6yjFnVRPjG7wZSEW4TaDspYb2cJYBvwnEjGi29w8YukhyPvsJiBU3iSJfEg8",
  "key9": "2YmKYERn319QwtPSdrHTHEttSSK7rPn4WhTuLnLDtSZ4wu67bG7L3XQeX98Ue2W8FPGK5wBBoHEG86Y5ZZZXTesX",
  "key10": "k8SeLHKvE669Kp7U4LCedrfhtFm7jSoEk7Egja1qfo8ecATjuox133Hh81XmGDimb3KcZkxqnLVrHqTSLfuHPZN",
  "key11": "53Ay7E97CaVYCQea4E6P6SEiwUGUgLEFFZYgbiwCBXT4xFgK7Z5LvdQxno31oFXQ1hDbu8dNQN1cwMisAgzcsjci",
  "key12": "3smUjthBJWFtyGFXP8RB841KAKzPN7B5EdfEvhP9MTwimJ1p49afoexgdegJ4ipv4SxcxZ65upC1sF8TNkXssuhh",
  "key13": "5GhUBJhu4vGC9MTKrmSN11gwwqD2FUZSQZBW5q1YHnT6pUqFnvYApi2nRp1tS2fMX7EZjTS3fv1iF89uPxpaJhto",
  "key14": "47pW9HgA87WJZarJSaGJtJX9CpgeNebKUAsZuDwQvEd9JqMFAENAx7F1wK2MRKb8fBmsY1W6fw49h8wYhz6x7Xf6",
  "key15": "5RaVb8YukVEarEsb8fWeAG4T2euhyTwH2zaN7zod35wVMUywUAS1pJiZLj6F7igw9P5qubgaz8ysdn6Y9sSrdR8J",
  "key16": "4rJgKHnncwXS9Fm6KzF6LC5s7F9ahAmj9Qs13z5ASEbZgcFqCtjuPPz7QZVEagHGEWmg6uuVbMUTuZ4kEqRL1Yy2",
  "key17": "4LBeYtMaWVcdkJ5kg1RS1GVZNoakEMJcUGQBBU9RVPUDrsMwDoTRqxK1bQbqGntFDi1cjCthe44ZwoaoixJkqPR2",
  "key18": "54XnAryUU5jtxDaVjjQqRbxXW7F2Rnt2xQ1VKWSzNsPmiAUZAQrGHvxk3rrqjBmUNjepiaFVFyex73z39f9N2rmR",
  "key19": "4nAnEVgs2AUDTwayxbXjUCwJbnUWpqBGXo1Nd1JVXNhFeYt1vg7CM1GG6qawNHndYUhNSeMiS71hvCNF4ZQtXa5v",
  "key20": "5RRCR2m45F7FFW6wZuMUK9ZXaVjXXbhA1s2HDxkg2QhDSsde6RqhjAPzHFw8NsWVyezB6unRqAc7gTxMibzWK6WS",
  "key21": "29hps75cz7ueox7hbZTzEBb2LjEDoZR14MVSVHbNEhmuwg3QhAwwnQei961mvt9JnpHHLp1rqNj7948LzoQjeUSB",
  "key22": "2BasNrJbxugdppC4zZJMZz387zz1bUEpqWWHmqrHrof7ADe9FW5uNmk5NHFdBiYg6qPSZ2WqgHwE8rrQTwRevu12",
  "key23": "5iKbY18EDRBocJUAvTvmGpq9wqTF4fxMuZ2vxTstLohv9Pju1ai6by7ftqWGqYVwwK2DdZszpy1t87SrJsJXQnB3",
  "key24": "3xANgHqLUnvByL49Te3Wp8cGqfVsC1DVcVrsc1oVD87hvYKGDHoxNVyLFtKDqh52AGEWrtQj5hR4DpwZ19h7W1Qw",
  "key25": "4y3Q9rxWGgg6GEgYA8hBcDhWbDgBBC6iikiKL922k94N3Q4hWBhgWDm5jzaqk2E4Q1iC79MybMBTq2ERpBmK7fZM",
  "key26": "5VmmbdmL8iQH4a3C3aUgharTu7E3HdXd2EUamAggQVN35Zy23JcF4LkoonAmUs54ivxdVCrj76zhQ9kyz2MSSN2E",
  "key27": "3Mrx2Vw6z1R7ZoPHgRe5JFM2sAQEi4wzXf8R6pW1ttKmYq1txKKsn2Fw9fzunx3D5J2ten8aGvKCQXwBfDMHvo2T",
  "key28": "3ibcJwtGoBP8gGUu8cSnQvS7Kj6cT9P3y18uHknRcTbYwy5YejxpfSUZTtypCS6vvMUKm28jwUm1cj1UY6vkasMH",
  "key29": "21GzBv78CYmcxc3DnHK3CzByPFkPgHJxmQJeqs1byMMgtjFvfPRCrJaPxw4sSkJtS5rce5j2VuymDGBQyU72H8dd",
  "key30": "geBAYEnfxdR2aFLAH2WR1X7cgaLQEpdk9BJnfGzA2oozC4v3FmRiPk85yinWjGkuuyX9197RmywwbVMMhEYjS1i",
  "key31": "51rTeXyVmDFEmeyBWaCDoLfpmRhVgheDY9tppwmvrUo9fVgMJ7zwxPUS21Y4kKqRP8UANpDtRKFAPpQaDVS41T3U",
  "key32": "2hSYrJNn7MF5yQqJ625cXb4Mr4LBARPsXJJHYhBACsc7D6N9CLvPmRiKZ95mcTcvB5xy2HRQAh7nzxafEHwuiKGU",
  "key33": "5ZcvwZ1RxZCKEdN8xZEryPeH3LHNzvEBZnjfkHJsmhXBDPc4xsNDVniSq7kwiNKHeubTKBuh17bvkti9aU8JbZyL",
  "key34": "3RpA4oXEQJXkBy2sSjYa5Egajo6F3LBCNqFqibCZQcjgzLT8x4RvN1Ei19Tr753DBSJFFdL4DLB7LDoC4xJJEGvX",
  "key35": "48yFwsmz96kkrrqK6SwtqQCTu4rM2hWsnbkX3bzryaZSw5GR9SGBskpXW4Bae2zp2UX9rozgGToteDpY2dCGpErJ",
  "key36": "5Y2DcPeKq1g9y5gD7PwRci9y1AGd9uidr1q8LiHN1AC2P4A5Rjshw7BoVPyqQrGPFJP1RJtufkvUv7QonzXJfbJz",
  "key37": "4xYFeKnXFvFbj4qqjn4wP9HyELqfRejMHp9cpXZeqTRHXSZjyDkjf6CUPk4QM2sRvFZs43XdoCxBuRfUPZkkyCGH",
  "key38": "4i1RuRRtexauHd9z7o1QLmT17iHrq6Hs7aBwBaxhkULhUgNbPxw8ATXhUiqWH8o2g8edpL9NhwmTqaYrDAHymirn",
  "key39": "3K6zdLSyjHw1PQUZwFCfL7czLPjrsLYWDrqmaL1J5TzCDG79xAUwJzTUfMjw1orAEwtA2sfqJ8vSuZZMq55Ttqdq",
  "key40": "4uUDXygSpW3Hw5VGuMfRucoCCGRs9PwqTCLQfVNGAoSgfs1QJ8z5wMtk6FLwXfJWoR4o5dS68wRAdzuHaGXkoD6u",
  "key41": "3c9iNixdNXuk9xtePCkajVv8eFxmwa8LP4RuniTqSxj9Wwuy6qhtE2EamCcyx8stzg1sR7kxaTGvscZCeyJWVf7r",
  "key42": "4bQ8VZc8AhxzrbrY462Q1US2kyeE4yPUjASqu2ny7jV5tbWvKSKzGfavupDxCrzrmkWLJVEVL2HHCsnyw3QhKmwX",
  "key43": "EYkxhpLYM5tXYSdJWAZd5yfjuiKPjdrvmn4M8QFhxUwQkeBz6FcFXeYrYxesvfkFqevyWVezvtgmZRouoJYg6R7",
  "key44": "1MqWR8VvWD2gm4JmnAsNbo9qNTAJpABatP7LLEdnjwXDCTfnz6UaLhQrKzjysmfyjYnfyrpSZCLKfwcZmbJA8bb",
  "key45": "F7N9nbHWH8L74i1TCwLp3K1it53oCJ2xf1Tk86agydY4ytRt2Zxob2UuR5Nk9AaGrW5gZnkKS5FxcM7qBW8PuBy",
  "key46": "5mC3A7voQxsjCLAKhwSp7dQcNdm4E2N3J3rsNJB8aFGXB3qTuPaboLiRSKdGRFqUF8uHVKhFjn6ypUchfGfuSz1c",
  "key47": "2Sp55BxJW4CVDGtAEcRqAvweecTTZz9EHNib959nAkTxJ28Pzma1L6fP32RKsNFnFwWR9dcVGvdsAT3RbMjJtSfu",
  "key48": "39XQKpGwoPMAXP3w4CxR4kENb41zdXCunxd9YZRhL9iRJyJTnUWrf2KaLHV28Pj5wXfYHiymSqH5nGnFxmzk6rs1"
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
