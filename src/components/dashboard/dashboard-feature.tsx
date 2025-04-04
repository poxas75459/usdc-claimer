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
    "3yeAYRyy969Hfic3M4dTcqWWNa9UsBwy9KBKZq5vcWeXSLokUd3KLXW5BDjjkSvc1DXhdMy6NrWwDR4DVbawdmhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ua6DeGR4dB8Sx52tETw9cbAkbv6pioHgSbnojCjWXguWL7kpGmemskzmnzJZGuNZ4tay7aw7Vnp5xCC28yxstvQ",
  "key1": "3LMWwAKQ8BmdQDbArrHz4Eus3iTL56Ep5Vygwy1qmwuvS55WDgUSPRW22USe4EjnRkfi8rBZk7vcrVXwi284g9ny",
  "key2": "5W9AJM6NenqKGyGNcULAubPBUFrQWdj7KvRgv8ivd5HxU1e37mbgBTKUFteYCys9DaCighS4efoZkjvuCJQSwnJ9",
  "key3": "51ef6nuiGP5gqahdV2XhoRrjTEJz2tAyMVrR91kxudH3wP1pzDVyUMQUR8WCsLsWQRdsiGiiZvwMifqCCbzUBMj5",
  "key4": "498NYLkWBj5VxJmSLPWvJxDsK9SYdxrDuv2NUQTkmB9SzpZRLh1ufVYek4EUQfBUmTWJkmFs1uGbVN7emF3nx9MH",
  "key5": "498oS4ZwwextVqPpWk4NjbSZEgoQdbcMXRu6L3q4KZbkxgsyzZzEd9x4f33kSNbTXoZaRcDMGiLHT3pjVdsZjk1f",
  "key6": "2FQqzzGeUr3LfgpxWxAjTkPnsQ6HLFLc1P5Ak8BpkfBTcua2g868nfEW6nSzrmC1mpnVp6ZussmnvDP36mYyzGsS",
  "key7": "xqVeLKhttNPSrtY7hrPWvDycj6X6ZyXk8MiGk5VYNNaA2Mexoo1pzbZT7dBP7EgDVMCui7MCj41jko4quPs7bvA",
  "key8": "2nRmCM7WTu87BMwJUnkRPSbVPwKr1KSMzaUjaQw7efCmr1ShppCXU6DxML6R3XRBtGVDU6wNpuRJhjGoVv2sDK6C",
  "key9": "4P1MFzEJNzeEhXpbGBUTUNqHDqpn7vYKwuu6Jao5Ei4Qpbgo1uw2zJxL3vgrniXkanw4VtDwpiyCaPSV5zwUwDfG",
  "key10": "5zXXG9WQLUDiTvh35v1HpAzG6LWfrHE47xUTrtEaVub8C1Cw4ABZe6x5xkRooThKFjX5TDQ96Qwvo7tpqCwMGEu9",
  "key11": "5eN8KFEZE8pwv6nvzbqiWsoWr3AnP1YTudcnyrwAHi7Ducjsjc2MSG2he739BcQVxWbcaaNjEskkUH7bZP1BCqH6",
  "key12": "2CbsmvEWkaRA34mHmMqZWZAdznmHoM6L789AedyDmzQodDu9xRpMzaB21FZJDUBXdi9HduvkguFmRFtiCu29CQNu",
  "key13": "29FfwiJiVtghs8P17Qpd4Ycu6icqQhDkoLH6PYosXF8DK7mFKNVZAsyc8RtcLt1SMChuYmzHBqr9QTYD94kc3F1F",
  "key14": "4y5XXZxvmHJZHsh5P9CNsXNwwEXcoevAXeC462EieF1nCudJUYXPhUWyo5JoELBqje4yjkNWaakKKXtfKsrvWB3r",
  "key15": "4AhpR5m2Y8z9xh4zzaa772jTmxeiv2nRzzchXb9tYQRBbdXyG3DSXqVYPMhpz9g2atKsGrJY6tVYGBCidg3rwv4b",
  "key16": "4ap7PZCegtfScG5s1vGaF7ACjEJBXKrQ8TDmWkPqmbhtmSs9WWP79D55myp9sv2cRQ6vNmq6cBKwDo9i4hy1Ljt",
  "key17": "3RUQ7ocwWedbqJSPAngNREN2QhxeBc6hEfR5PAxfPkhhQ8PDMMsc4ER5oYSrFsgEqVpoJ1N21ceTytfBgkLLiqWV",
  "key18": "5FsvKaBw7RcfNtpfHS4s4GnQVuhUECydysrfV33NLC9Qj9uYJxEaVoBg73KQhMtiwKf7STggur2kbaiQfsQwj6Sq",
  "key19": "4YnEGAYt8BH5JWrgRWLyKYDtAiXGkmNd6VcnDcyD49FsyXLJVXNVGAkHDEhR6v5bzJU4ukBTZr2YWLuWcT4ntrsq",
  "key20": "KKdarc2ULzZkPbBqKWX852AE9LE7it7xyxS7PpDVgo2mgv1cghUXeb8SQAQWFPPsFwuVahVQrMWzzLNgGqoVkhg",
  "key21": "5CJzuphgYYHHrenFrE5gAsgQ7Y25588RhUkAUUKcrXu6PiX9PxQMBZ6Rg3PgDkMigumcSFkCgnRagYE1Q66EhyTV",
  "key22": "2RR1Ta5Ypo9ZC4iGzJwdFwMekY1XsKNNJzB35YWBKRk25nVA6cp4xtpSrhzFqVn9HxNLHx2bs1weYQRoB3KAV2hE",
  "key23": "56zo93LxnwBQbLPYTnhkdfXgtTdn59KfPg38JEmwJ2APaayGtAbkxgB7MH4pcEjcFee63AGFAtHuL15V1cYBitVu",
  "key24": "4LLNbgHKWr39EJfm5vEuNKQfScdvrrsZQhnf8FP7mZ5cnk8xJ8jZiUtrQfTJknU7af7FrYoVFeZmfQ7rZkZvHMMw",
  "key25": "3QwbHFpnfhYba8Xvv1P4keVHQRz5Z4zcDHQdhLzPSktd1UGc6mvBhXCWUT5CTuWjhGQhF7XTyLCEg34b8cxjQLaV"
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
