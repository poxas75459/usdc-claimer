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
    "2nJNusYduK4cYrDqQs5o1sdxws3mATPiSoVnm4rEpYNnv4iWJ98eixNV5uAgwDE1NSFRTtoYQDodx88NsHVLiXsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54brjn1HVxDA6tDkheytyCuA1iKyUqdx9N3FzC7kP3QoUNvEMvT19FYxyQxuTCsBbaXqNBgDEbib5KtWZBLQEHhj",
  "key1": "5X5uXFhp2cNtmwjgX5BshDyCT4xJbcz6dz25QDopP8b4MyXT1vZTLLvjFeJq1vkER1Z8N1TG7qGAjsnK67CgN1tj",
  "key2": "4QBiLKJLVzcpXDqe1yy54r88jbUrA5ssvV3jRz7QCch2BwbbgwsxGsEadzPVkgdtpjWp8XaHoCirY6yZY7DV2x53",
  "key3": "3CPTGcPVYW6H6vLqKwmizPAJhrgBuMkFnjjHj4xR9jSCodyWnn12y1CFaMoQxMp83pWUSAJKLg4VWZTrjK3yrUrT",
  "key4": "45ED7ptgmqEkm5K14bK8YJ9mDi4mpoKMW2HM5czPFzAwy8VqPjUgvMzTdMDWABLg53fwKCU1iuN9CLvb98sYvvAK",
  "key5": "3HwwYtBXy38tgauMszEDojurNw9drQ81F2DrGcbj1sDgugG7UFCL5FGxqTY99FmMN9agEBaFmsMya5c8qLaxh9uY",
  "key6": "5agYyVrrrPYt1itcmNEY4t1n4FXu5JD11cbAfMfYCh3tUeb9zGDk28EVPM7omccrQ7Xc6nioYd6hySMJEfpMfMGB",
  "key7": "4VGujDdi3gu7QczcqH9cckK33Ej2RD5ZyDkfLxrMq1n6h6wZwjLD7XuRCKRLZb2wt7qXgPR1Cmxj7oUohoZYEvaJ",
  "key8": "4o2TMPCpci8bVCm7buxMWE56Ha19FWEBvHgCMrieHvbYFoxU4AfUJVjggq7BSCkXmPAtPv8bNBfg9TEzpS42og1b",
  "key9": "L2DLDxw23uawx3vfcL8wLwCxN3a6kYFka1gYb9brGExpoaHZCRoCfrk3Yah8XT1NJ7quQHzANWuocNeUtC6ipNp",
  "key10": "5Xhs5bkPSZUQxDQJHJNjmgv4t4mxpGU9BHmcH13b3g96Ji26Boqe6BKHWmGyQsobrCmfqgdjENVPtQNoMGkbBxu3",
  "key11": "5RUBNv2rNZUNv3ocbUrZtdM7YAoeY7jdW3sZEcBSHMYH7fXRjanGZMEpSMipYbvhFFWv3ea8FMuDE5K8ofuDQofT",
  "key12": "59tTwSEvxPTQv7A1w1iDcYpVEofV9uJJ3DnFqKDVDu8vmkVbpZhjRLbRhH1Sd17WNZeDEhjrRaeUJybfyMhiSQkK",
  "key13": "qqFAsZzNgwAV5kxD3tLaTkypbFVpD8U1GF5peJpCWTj6RBsekLnzAPLSauH8gVHoFJCxbY4hMg4jnf3EuB7v5aZ",
  "key14": "2VtPAstfTxYsQrvzyXwk4nBKsmEzkXXCjaz8AVYtryHmtxBBbrTDJnnsjUkBh3kci8oAJ2GNGRhvuBiXSZTWv3Pb",
  "key15": "2z14A5pmkeYggU3ru5tn6ijoumMQBeph7rYSAs6Suz2tmubFxrDw5mYux3biDia1MDUCAFZNECaZMefZqKWZLZeN",
  "key16": "5wiWN6Y7Wv4DVXMsR3DSPBbBVToXAUBYFhGWePHpQnzh6XeFe7uC5CCgqCaBfomo3k5eXsBCgUvr1DLZAHyb91Xv",
  "key17": "4vwCD4UKZDjUcqeEmpxEE7ngThUpQu7wVqm6VZdtVE492xs9FZfWCDxhSXmwfsYSEmCZ6q9tpsvpxAenn2b3PzHe",
  "key18": "2ogPV9NwHLrAYXAMmYfHe3mfKoWPo25JrR4g1PbFZVexahLSeThLhQdBh1iTCX6DTboHenW1gQabFSWMVGY84zse",
  "key19": "4u4FKv7yns1HpC5nwKNeZavtbmq3U6VLLM5XWtGXJ2DL9DW6c1zi3S6msPVnGj6t95jto2pZpWaRgakVykSiWZ3x",
  "key20": "3WdSyMGt3mAYLcEfRg6jzk4ptAaedUYabjpzZPpY3Bf2FrucxnqaRsrRSNCGDuYF1szhE96qCspQ7EExBhVTDSsa",
  "key21": "53AfzZXAjNTcRUTnr8sksS5ZPZdVujTrbcAjLCE23KS8TFi7MXu12HMAq5VNSkyf7xjtxhR5doQsX9MSnjdrKMLg",
  "key22": "5qZ4KhbkYxngK9bpgU2hNEpsDG9DYAB98piCvzHUqtcKKHEcBKefJnNYaU8eT7v4yrUD3barYys1BZFvD862DcG5",
  "key23": "55vztTPhG1kEqvd9Mn9pLKAo5rNayYByqHYdjw2fQziMKqLxdX6fbUdSJ1sYh1PgARAfJD5SzteecmTG2nqdddr",
  "key24": "rcxwnLDDraF9r83LmkqmLmczKkPV3TtwdpiNGwevDXLRRfSWkaNRFR8jPPg7BUSwyNG8miG7jVznX2ZJnM1jWwz",
  "key25": "44z2zftnYMfYaf2EF7AXotRpZ3xqkoytLZ4Zm4UBpKf3hBkjqUC2GNA2ukiq2UK1HEXsdSCnR2Q4CU5Wvh6epTCx",
  "key26": "26gT3MQfxo5BEZeoiGS7UAk3qqrNbQbAQFEZukQgyzxEcU28KFrUef4F4t71LBA3LV4tiLBSU6mq5n7USdDv4WPP",
  "key27": "5YJjCnXUUqd5muBPwVaX1Qf4AF56ctm9eLJaRcMjYHziVqfNBDfXMTxVv6EwyhCaA1s5g9c3j5NwMKEd43jHARdm",
  "key28": "3thTXrYEsjT3baBSM14FdiwX4s55mdkZPSPorYfqy2JKNmgBEfk8JRbyNJr38EoLt2FpLyKWmwFmRG5we8yryZtG",
  "key29": "ghcrdQXxLhNDKTN3pGKCGeCiYFTWdbb6Jmi5zzTTDrBWvS7NcVaYq8Zivssc2kHnBSFMqReD9WyqmCgp7ZDpeab",
  "key30": "2fhs1hMCaJie1Uh7LWPcFSY7iXNvqaM56e8y7BUmaQktCqswt4JMNpvBQ8Pg1sSbHrF9v4ttLQWzRhHP3EM4dTGi",
  "key31": "4UgCTSQ6xyRQuRgpLh9PWHzwiAEwgQFFE9scKUJYzVUAUg1BY927QRxLG6BhNpW5HmeQKCVgrheNqH4NEi2Pcm4G",
  "key32": "2tyrBBTR9YfZqcC8uktFhnwArgzRZeYS11wfVvpFRTdevQMK4XJaJckQEHHPKQ91i78XitkqNg6hiY6bvofbkQw9",
  "key33": "5VDwRWapV4JMc9zjJZoPNjjZ1oKhK9HUCM2YU8Brvo4f1uHUkzn4933rorqVTynnrCbxFr1ymMoAyYwnbSNyXw4G"
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
