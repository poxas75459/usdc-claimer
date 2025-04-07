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
    "3a3H8qiu4CQqDzJXhSWr6T8mShGP6tFTwoP3qk3D53dNqrSRcCHE3uZhG79RQUrLpXj4yGjonzgXw2LW9d7xd17B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXav4zvEzD2BqyYnGHa4gBGSfdi1m7nWyquu5sn7JvP5f5D3C5tNpvCcbAd1P6fRePNTB2ftT9YPGFVVMnKHuVW",
  "key1": "3VL2jHKEwSBLrGTP6fk3rwcsTfnoWie8Y6Gz5sUosVGGePq9iVB4HBxh9V2iWRwF52uqkwivGT4A6QFVSqXW2FZ7",
  "key2": "C96CG3cdVg2wZGsFBTXKH9bPoySeLtWvJ34gh1Hvsv2uvZnXRL8SA3WiACcnLWmtjNozFwbuQX2DECqBQas1Qpn",
  "key3": "4Z3VVvJAEz1n3GCmWKQj3ND5vp1dcZMHXRPCYgF6tNdBHu1onYkdsWRhaEDGW6PCiK4L9ThU6LiGn4bakq5dcUuh",
  "key4": "3ciK1TGMcTmoYTdyfGndrURWCADTX7gJNnB9qPErt93RuvVuCHqgP3iWFpSCMfdNiUv962NtRcwePtxAgaGnb57A",
  "key5": "4eskSVkJfw72b4YqasmjsbeW4EPx2VWgCoJawWESPScKm2keMGpaMc8pgbZc2yGFm3VpFUkmrrqZjhkN3J1iDXwJ",
  "key6": "2gXTcVgqd1ASnFNEajvWPpLRNhx6wr3ZvYBss8xstXz81cuNhKaZFfLHbiGNVWFxvsGcXvRRpWb7vkGvDPJ9ept",
  "key7": "3FMbhprpZbArYnzRNHm8FNUVqpjut5amX5r6WXzoeZCpc7RwFd2jJbUrZUqV6CMhq5ZSktV5X5ryHuo9jjPD9tyb",
  "key8": "56cxCj54nmBUi83yaH2cHG1w3C5ZxQLwADLFJgg9gADPi5rpJzZVJfuGgc2Gz4DZGYKYKUrSw6AzvDuJAYxq5i1L",
  "key9": "5to27UHzLiFBjRW2KvD1rnr7C7j1yKU84qAH2eCUA2xaoFAmcWdaGF8cmxm128ELHyeueF3Yy2zPakx7XG4G5sBw",
  "key10": "2LMPnNaUkwbucoXbWKyYFLi25rnoREziqk6yNTJGUzxmkEvqmFPG9s14AUSY4HLZARPCoMS4PGWt3oqakXDJ55R6",
  "key11": "LJuU7zghXm3MJJFTF2JRniXMWrhPppYMzY1GELWtb3LTDRV7DuwM8mXU2NghDJpeYprotwH7QKJ3XZQc5i6EdJr",
  "key12": "4CcUAhqqwvBJ7nPyRbAfBDcpXNefNWrttggY3aEsPz77NdP7uFSgZcxvD1mty8k6EHqrb4qDuVRaK5FJDxTMW68h",
  "key13": "4MNRaM1oYSJEzHynAfHG1uWXL2vYebKe9JRmG6ZKh6ZHf5JueiQKBB8qpuGD39Q4qvqthtvs6bsuP1WzD4xf2JeV",
  "key14": "3fj8x7Z19rszbZT5X8vKbQkC3qfMaFZx629J7MJuL5m1vHYbHAKDCHNyQ9QeYD1vPi11ncBsjHVeBua8Zgq6FzDK",
  "key15": "2aQWPVVnpWc287XPaWJe3cj1WhoQLMBb3Uew7iui8EZG1nr5tLAG6aLp9xG2qnpZtYDwVYkFotALSHjpuT8U51cF",
  "key16": "4zBRyG3SUpL3MANvJ2TQJMtQWQsAoDKNPt913d6Yibc7C1KbUzRk8PTtb9pzbyGJbRbQaNJMwzRTTrPFtwrCYEaB",
  "key17": "E4Pj8c2KFWyvHQ7mD5FPFnwb1xY7yS5pN7jCFmSPUan7CD7pV8gNzsqNZJPy3HsowDHxdTawqXsdkdAd465CYky",
  "key18": "2yhuSAKNZQhLmzC6gLx4mjp281YXL9epydGkLyV2mxnud4AT3comNEEGw5wKDDg16mvrEJVjCZgbR1ErnTY3uQog",
  "key19": "5t99rDFDaiEeSYDpMKfv1B7ddsThww18WJEn8xUtEDAPbHK8cfcnDUZsfyxtuR7RzrVzkj9RjWRPjdmYSGFUrBVY",
  "key20": "27whsARwmLYmXg8in2bP4j9UBjYRYfrQKMDzMnGkq62cGT52qjMUZmhjuSB88NSm29WuZ3QrN16eMUtpXYytNTX5",
  "key21": "DT4H1FpNC9RSY96pGMMYZFZ6fXXtdhmpmqi93PxRdVwd3aMm1vTz2iDAvJSp6Wj6fHKpTGJqmFKSpxY8ma6gg6v",
  "key22": "4xvLsrdrq6zDccK1QmJgyLXxZhT1rfii6f3txBbyz43E6gehfd4SWL1CRntc11T2DFANVirpAbLJa19rixVMEKM8",
  "key23": "59ZkV4ygYAwcbkBxVXZEUhzjQ3vxGWFiWgVA7zDTnV6KuSfeUKn4oaVKb3AxHbWptAUWkN5DqBt4hNbneTEXKqX1",
  "key24": "4W2Dts5y7tnGT7tgJHKxSSbih1uuj9CjaAQ6BSqAWFK4LiDWPoLSM1PGwkghwd4b1qtKx1vCMwq86rcgvCnU9Fz9",
  "key25": "3VjWDTvtbgs6k9CRwrYHpDLSxB6LNT7x6u9QrvU8TrxtUBSXFSxjgJ2TV3jw5QDXeNwx4rx5bvxXfwsu5tvt8gAB",
  "key26": "55PRZWysQGyXpdZFs3p8GSf5YyD92vPGUAnpbmfw5Thdz1JrcNThmxVNUryBsfrsEG1jUESPw2iU82i7A6Sr43kj",
  "key27": "4brFAadobVj3sVN7DQEawsPD4aEiwjyvtq1MtUPA8mUyrmgwFbicXsTiCtHpvdaHn98x2aChTao1HSD9Kivnroz",
  "key28": "vL5yN88E5dkMNqNFkYZhudHK1nRAVsQ1WySU5pLSRC4fDx1XN3UpFKHw6Mw8EQSdUbwu3gN3LTp7hwJTvmG9DTt",
  "key29": "51uFoBospbTzzSm2FJ6vebkZCWeDuboGmwgow1KKLt8a3fr9oBFkBVHU1SevtTPeuXC6PHM1WFK9BALmU2LuU3Nq",
  "key30": "29jV2TLdJz9r2HoAMpLW1okvhpypV1iJRsB85yRYQcsNk6k81YNR4erHt1bnnL8X6RzRy5M5ZPr8JTY5NZVkwtL4",
  "key31": "A5sFzrfYkcXhCF7eo2iARjGhbvqW8EUxW3zHuCc2zR7C9v4mk6SrH2aDfnUXzqsFFY4pbqBmxTC9dq5PEnYBwBQ",
  "key32": "46tThpANcokJcdtBt65BJ4ZErcM6NLP6EhoZvGpdkSSfqCTM5wnVq1RWo5e7gW9n9RQJcp6oeQUsYqjAu7SEKNyC",
  "key33": "5wVCZyYfuyXK3SaRkSzoBS26r3XnS5vZkTALrYkqF4gzBgP4UYzkuXUutAxZzpAyTbEwTgnF5gF8CE5Gte7YuisY",
  "key34": "LxEmvSC2DxEbTaZnL69eT5K7UsqwdeMp3h19ErbEGkcgZB7xKMguJFQQMswMQ1iaTD5AaXiuiPRSVyBtbx68Y5r",
  "key35": "htH5HqgtmKH4reiGBJ4HxwBDn5UKA5dcXbZYwB1e1sTZi8RtofR9rMSrxzL3HxozbwvbdwW81UJod2nAd82bT6D",
  "key36": "5EEpCzv5E2sf3ddzNW7gCL95RksJQ8UAryih6tqbdBxsSJUzVsUgK9NAzrFLL1J3AKDAe7MQARgFfzPrKfKgPJHR",
  "key37": "3QUs9qF3aAAT7BACA5gsGGcsjuZ11jQT8JL2kyjePK4FuSCbAKPtDhGoZxeGd8sopshyg1PPVjiMojStvvrGqYhu",
  "key38": "4NbJPHZo9SJ996qAc1DezUUUuSddPmdJk1L8nqmuakmUb1nnow5i1om8B9T2PqgWGJbnqAzfwCPZ8rdHTvbaYE6S",
  "key39": "29HhM7Zfz6qvYij5i2Jhe5whHaJcntYGY5Fm7eSUvqowDmM7LZZ1zgyVcQ1j6SzE9fpVFA922PJSeUQDXWKBGEMD",
  "key40": "4j9mhufk4FFz7dTZ81zzrtBZoafBxnCuMLX1FPym1AxzMhhmKM7v9UjB8ZWEWgapv5BzsYVVBpRnkAEAQLYz4bVG",
  "key41": "2Kiuymoqipt6tCmjz1ToN7SiUaGCqXWMpRSya62arbka2bRVAMptWDAf6EbGkAPrXPzhxDG9foxgafuPz7KKv7a5",
  "key42": "2HMj4zrZ5PCJha8rgwVJANi2WL5JSXFTYQ3NrYfoWXj3N3JnoxnoCzGNVNT1CRq1Yj2jkYRQNWN4runWpeh4SjtJ"
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
