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
    "5ixKTNMX2xntRL1uG3cUnAF4NTN2VLaUjtM1VGh73ErRFRwVhkjj5ozNM4uMq3zp14eU4ceZXKWC8n5CEDYZQx1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2gorHq3ANobwXAHSL2qGC72BvHveaAPUATUEBRTidcGV4vYGQSTUxo1BmR5gKiHF92WzTX6z3ZSVVz289AEatf",
  "key1": "58rLAr6YRSdaQAtXaTrovaHYixbbikKjfZ8wabxaPAtg7d4ua5m4V1kTxphsWdepdtZTanY3fWWr5iu5uPsyZ7W2",
  "key2": "29JzzdA165zPKaTCd98pfggR1fPUGjvanF7HhFv2s9TGRbYSvh44VLUeJ4iPbwEGPULCUaxtmtcWjvJvhE59U3PG",
  "key3": "3k7Xj9yyV8avZ2rVemqfnfacNMLk8AhZD65PrjjuumM2U31zng26UDrsk5iEvD72XPpoQeE7fYD3smGwUPCHZJEn",
  "key4": "yduz5vsxHXqpnPT4rVVe4ANs2Qnrhz8587J3GCevcEkRoMfZ4C5wF7FVv1FcDPzqf5jnDiHAjyUg98HqnKUo9Ls",
  "key5": "31CRzYycBVkTk5ChFP1hjcxmEQvoFaW3bpRXWUN48s1U9Fzsg4p5f7Kgr7eZwZxXNm88gkbSjtTUR616Ut1goawF",
  "key6": "58ACYJRtyVKZqKvzggtDYCMGVrjfWXbd3ttztGUNHEo1VjEmmDV3wtK7yEYi8mYr7uwPaxW1EEV3w25Fe18vm9M6",
  "key7": "5woDJFhNsxb27K9vC5VBVq5TWUHezNZS5jHNdB4xvndqcJRu7ioFpze6FQtdTPTfXeMoFSpR5jaR2KDRzND1eoDf",
  "key8": "4rcV2sBP7a5voHZpmEqceueVcqDiKauYpB1LYqGXP5eqG685CJYqgJ2wYUpgxSbKFZgjqdmW33adJFU129zykBv7",
  "key9": "5MyMPadCDjPpHtaSr55HGY2x6yjcwi4MeKPXwts7C8p7CzcxwvwETindcFvPkCRKoZdduRTSWdeXqvsJLaDGwoMV",
  "key10": "3WHuu6cqmSjs3LbmgMCmNoEeMBnhiQ2G58ohdDe81BdYMFdEXBWZtcGXqky9CFfD1Vw1X8tUaD8dhyj12MTCJxj4",
  "key11": "26vvbAQZsVdcrZvpyx6HZGkZMMje1RA6MQfLpzvn48YNSshhkh6BDCgSRDnwV7SKToabRfYAsKTAqD2Zo6kncXjk",
  "key12": "61NJpdPMY6vk8gj8Mh68YdyshT4SzEksBesxKsA9WaxZ1VHaHtjCn3fLZpHFSHp4MQx4gYCXZz4tYEv5X3AWMefY",
  "key13": "U491FLuDEco8tpoLnLB4aCkAwwvdFd8YXYmHsMRmgURjaAPcVnn3U7yTcvKHhpyDuCURfFEGWf7WJNJXjVbDT2r",
  "key14": "4E8DGY3PDTjtix5V5X2KMJUkbBV7FUx93hP3wsuxeXV3LL1cMDwaXnornM8rJdqA7djCriWhjzbSsdTubBXwmXbE",
  "key15": "4oQpoSZwdQJREJPFkzmcqMwGKJEVtWqJ4Vb11QHxWTFtHFVjEkQWyrWSueHj4G8LUgDAujPKvb7uAiosXc7HfU6b",
  "key16": "3HSK4ShsQXVMsLv6iq6cj5ZAk44qPr9PeDf47BzoN5ApEpf2VTRXmAakG2DgCqRFi1eafAcLuDkEXCsGbxwnigwX",
  "key17": "6kp4u9xekiCJgiPXsA1uNnD7A8ejLPYDPddt62pmuEn84QaLqrjdroEeikga8EbEzfHSFAwLcAL4FW2XWxhQqCJ",
  "key18": "293WnfvZArM5G37f2Bw4GjZgUgvGVBMv5m1g75fnrpAUSF8JLFAiX5TiwdNrSVnpbFsNFqSQFZWTxNgmAfwFSsdW",
  "key19": "gAu4fjuMAZKcgTzgSWwMMv2xQxuYac2T1pZuQvoPSNJknmtSiPPe7m6wSrryT9vQb9vfJC3Zsahen6s6YBtJyvs",
  "key20": "5GMauFY9ezVDbeKWfNNLESWF6LCaTWApL3Mn8EhC61K7Q9trdUS1UGTrYLap1u6Df283Ap4SQSy4TuVFDy96z7Gs",
  "key21": "5pQnMb5MEbDpo61VE7xzvWkkQtVuAYoe7JPrg6w93uHHZd6CY5RivXDTtdZNXQUyxd1Zd3FbmhwDnNTheqP6muwL",
  "key22": "41yXHQ9CH8vrUH1tBY162EHgUt2fk9PCLJcP3JMA1Fy2Nf9yrvz7XAjNmy1uij1VuP7QoRfV4b5JpiqgF9xFMbXw",
  "key23": "4pscN2GhiSQyeW3eNM2SUHneBJJd1EQUcHmEmhkzWYJqiXnieqvj1eNsMbJzzRAPjnBZbWxeHkp3xi8LTS8vG2z6",
  "key24": "2AGxBab6HVGz4dKD9tGYSSa8Pqm1theQNsJqf54XoXx9kiFgjCfkmrLwruQk7BZ8TzyfzhLMhTyY6EMVfz8FW4cs",
  "key25": "4RDAvexXB5MMLBC5oXRcFpPHmjTcLHk2vuNh34W36m8m88FAhcNzCWnLV33c652DBAsAny8sKF6euLYBd3VagjLP"
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
