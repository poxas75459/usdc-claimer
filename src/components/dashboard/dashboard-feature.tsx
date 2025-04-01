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
    "2skRUeWb5qgku2tzvMAW24mpU35PSSAEJcCCKiQx61oUEMpwMFWhGkSxAGkbNQmzBfzzj3oyf5ZtUvm9vhP8Ntqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5tFJtxGTCS38wQEgbiKkBaS43ydxndj222viDY1YX8TNg111e4nPQWYBWsqtaPtHU293NFvVmCvr2aBA9yZfNz",
  "key1": "23gzxHFFHhg3i9GeqRFP4Pio8csBv2aopEdqqrFArDQaxkAHuJ31WBmQvPEzVdsy3sKBza7WEiPMymGWaT4ije9n",
  "key2": "3C25muazPxorqXQETWRa144RXCPivbn2f6qZZh5aSP8u6spxJ6uvLTYiT8unuAFgcYjKeE8HBoALDcqHruwepJs1",
  "key3": "3FVUsPhd4r1fWTQFV8QhYoWP4bDgVPcWp3XM6QWipMZZL2TeGjas5bM4on1qRtv2sGkTKS57EeBZ8avkYsaDoLvC",
  "key4": "pv9M5mjDzxfnmFPsc9rWEXU5o4KJfe42a73tRXeGmVe3MGdLTF2cAH6YDYyMJjGypfbKkwvtiMnnznV2EbsS32M",
  "key5": "46Ew35iawk7Uzy4ALSmKw54G2cRaaA2gRPvoESGXzhbyiApMa6rNbbr7kZ5goQmiBuJM1NVRk7x4ZjzgYA7CQRqE",
  "key6": "Au2kwk1rwrVThvd7iLM6JJcRFQ5BWMd6EZsz4E3FJdbxZLipp6AFVYn24fdCpQrEaMXdb8z1EKH7PPCrPHfwvJK",
  "key7": "4Z8mef6A3YtrCReknW8SU1USJGwZAiH1uFUHxLFyjJxD4u3wu1r6b81Skrb9RsWAdKWz14kgi7QzWSVGeSAZ5Pav",
  "key8": "4HuBLExko14y67imGipczEatjn4hRqkMii45mC33EAz6fmAvXrLDV9ASWgJ9K9i77mxHvu1SMo38GeWWXxmYQqfj",
  "key9": "5kB3t5HLn4w2zGcNn1FBwNp8z4kbm4nkrP11xpZwmNY3i3V7RASEdDYQKEGk1EFc2d7vdDeNHne3xkyMFzDPCY5i",
  "key10": "eBcGtb4135JniXuTub6zjtY1V9cLc1QXBg9TxiBoS6uTQeSowUCtixmiiyBvU5i3Vss85nD7fb3vAQnfar8ESTf",
  "key11": "2GwgZVxdaqk15THpcQDzvmjPsbdvTNiRU1UirGwcGaTFrW6tBb2yygbYJNbMhzioeVi1Vh4gQtZamN5wRga1Pjqv",
  "key12": "PJrNukLAf6K6g5D7Bxo45kBs6VLezVo12rqwGk5Wv3T7V3SmcBLBZrCPqjVqCAKvKeJbmKTfa7fwEtzxHmnp3zn",
  "key13": "5qPCtXSuP6icb7a6uwsNTPEa9RekFk8eVJo7hsWYuJrndvRXk5drZHUvrHnLaA4uLuHiq1ACgdqqAaUQ6pHvnG4u",
  "key14": "5mJA6mgKK5GV8Re24YFR8MMk7t7v9Mit7JvnVjQr8d98foe9qnVLB3xDueQyL2GGSdcsseip2oZN9ECwxeAf7eP6",
  "key15": "4qehBMmvyRURRUXdYmvfqLUhRkasric5LhHx6zk3GhACWNAGb1AuXF1FsHMoZfEKS4fgaBH17Ks7pY9PUw9HjG1L",
  "key16": "2uT8U2LBFbP6eByiCmj8TRsYQuLeJ9ag6GQnz6U44s9cBikjWYCQ7G7YRrVz5xodY6twE3w2uxYwWWjvmeURxSxy",
  "key17": "2prHVtMBiftNQsMzJub51W9v4HhnAoPMZP5bqSCqTzUuPnnEEBSV18svCTmh7x6jWqyLLMtummJPDUaTwR65swLq",
  "key18": "2yPReNsuUqz9erSHoZArHprWRmtRen3a9F3fwEB3vcby3fEC72xDrwntjjKE17HLmR42UZPP5g6XMCa9hcmq1oGM",
  "key19": "qYHBCBGxiE7p5yPzX32w4b65t5Cyr8CjRY5se2zxaGP2W27r3gTnpu4QHSMjo6bJCwQAUeAsjpdZLwJyrfQd6rA",
  "key20": "4BMDUnYpeXsw6cjymM5UxTPjvWZavwQo8rc1TmrVBcoP4jihaFBt9RJoKFWnYCREiBPU2h4WSjCr73oyqBv593WP",
  "key21": "3FUgc2fzQeqyvtnDuU7etuRkB2FoavYPY5BfKPxGqvjCsZhi4U3m6xRVSUC5fk7hr18BJkJ7PABHgn6xL3nY1pFv",
  "key22": "3ab3Xne2ztKVVmHGJeoDLhoTjLrJMn69rZUPV7zkvJqEJHHAN42NDxprNBWo9kEuJ5XPRh6EnAPWjaaR1RMyGaXQ",
  "key23": "2eMkiPWE7bmCQT38zGrh99EGNaNNzeqo8Fk2rpEgRCNWR5YucfTWTncprCK1u1f3ocVGPnRktfU4ixVDjzay6T8C",
  "key24": "WSqEmLCkkMVb9fM7SPuAcnNtkM867PsZrwy3Jzk4rhH7VwSggDL1qhmbaJQ3jKigzp4qHQkzmrB3iLiBfSWLZKx",
  "key25": "3UeoFRFMWuNyUxCwiSPAtULvAbhDYoKuaYSWRFGLZoLJS6DPNgizKTJzgZQFPXVcSqcRrDX54XeUECfqZiPKoJPo",
  "key26": "HZoTedhJooHPi8TcVPskEAqBhLyVRkVeT3JMiikQnpcLGabpnzZh3WvRCyna1C7CRWTi1fjL4oG94bikG8Gias3",
  "key27": "3bLVdHKNccC4M13zAHFQWPSdw8LfXNnzEjiQzwyGDm6YmGkg7rcqfCdcYdqPHWkHaEUTxeTWMXkoPeek3YDiPZfN",
  "key28": "3jrAj9pfk9wAXfEUozSKWv4meafiJhRMufhNgCBk381Hividf2SuLNYMF2SrXXfRsBkMU7GEVqmuUmUut199Ff1y",
  "key29": "4tFSdQ6RjfrCRkNTfci6kLmFBiaHGmyjcBdib3HrceuVrtsU2wBUPswGo9NZdD4wdpTi2cSp238hCZrEDeBtKKcy",
  "key30": "3PxiAYppHuib7nE2N4QRF5U24NaA6CNn3PRrvMvbpR1Rf4QsS2dMw6gNpMtodk8qLso1WAsxotUz7fXyUzRBhJPW",
  "key31": "5ij4XmJihM6f5SV2XgUtxzDWV85ARkE8Po9Roo8M9EgYwGdDJ8jsuj7VNWLuGhTcgV3qLMFCF3yng3i7ChahywCc",
  "key32": "2G7qnrWQK5TahX8zG2mmFbV2Cfw9E51zsaNqzL71cprFaWiscVn1TykBZTzB2hjjU7wo6op8tE6mVosWjfeLdFoL",
  "key33": "4tM9R2zaer5hQoz8Wc4jqsDgarAhgmdUikjrhTZhsQPkxvYmpo5WMAaMv9DLKZWvKiv1ZC2Za4tPmGDe4smEm3uh",
  "key34": "2Jep8yizvffjKa9QvpWmeJdq2NBAs5CkYUXET2JjCw9gDftEdLBqWoo1fwdGeM6U1yjxp1gLBHoqjrZDrapNYa7J",
  "key35": "3cqRUuMYFN2ptedWcMiJhmtwH96HgBeBMoEbxT9DLmA5st9JkXuaQ6rAcJ7jdqh6pkCr7R7QirEPQK5SmZSNrbDU",
  "key36": "4g81Fubk8Nu3mf8ai9ZyZBtrrhsKZQqYYxMiTPn38udaT3whcARjg8qXXc5YURSWk3Z69M8Twg348qRGsxGsKwHD",
  "key37": "4GGifZB3cTYMhP5mQPF2MpggFWyJfw43SFrFdYcsvkDiLa9Z3E5mUh7h7R9vMZ6L1iwuLui18j27eJybEsNkhVEp",
  "key38": "4x1kepreh6SLgL5HjmZUjTZuCwefksYCDe1cUD8dkaEKPQgDMXAEdqh6eB7yCafwKw9oAKsEYZUrBy15p7qSTiGQ",
  "key39": "41tv9ig5x9FEcTdAK3xDbw6BdUAKoqzDbDkjuYvwMbpBEgzUeR82e4Pf7HvsZUjDHGmsUtCyZyQsCBPgVCZwPGNw",
  "key40": "2isC4tex1LpXmEZbZRazbfqLVSU3D3yM4Uz8unoxvRfS9K2M4Kw7nnekLKgdqpaYVRjh7wxysurj9MXPW41Fjjbo",
  "key41": "4qDGFA2FBHG2M8VBmraFFb5mmU68i4FyHE6uBhKvBaXyVPcpmy8kU31omQ8Z96dGSipsgcieaLNzW57ni4z1G1gm"
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
