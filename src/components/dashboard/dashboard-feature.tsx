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
    "53AzMH6QwBF5H9YAySEDQakAHpvwJujAMakNR7wiPHL5tuNFMZ9x1uMx9LupTARG491gkT5jPjvgNmkVnrg7N2Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvLr7AZe1vMBizFmK9UjZDrTMDHiQfr7xiStZNnTnnsUzrnWarC5wFjmsKDJCXjptjhT5qMqFse7aFgvFyzTx4w",
  "key1": "32kchxK4gQKmFBF4gjsVwxXRpLfx3zc6tgNViXbMDg2qcc6SttKgrkcotK1tNUeowcFzHENWqsE7qepHu7zeotLd",
  "key2": "YAjE6ZfPLs4a996HHeGLAyWJTwyZ5QFz3FhiDNmeozKi6f4GbqdgRqmC2S8chTwYrmYcK6fQKne6fz5hHR9mByV",
  "key3": "4X3gqCocWPB35CQwn5HgdAZSecmuMqngRHb4XproQyXEkoJYVJvundzFAN2bgqPXSozFZCmoo6DZxxMhMV9QeH1i",
  "key4": "6662ZJZJYqZoNoPie6Qf3iRbh7yAAiV5pMKg95eSjV4NpbfEMJHQPh9CPuD8yVbiWquCowK1g4ekCCf9D3814sD8",
  "key5": "63tPUptegfMHnRiccASRjF3n88LHcZQ2PCBXjtBQa3KTnGsmnZ79Nw23uVjEAMffqbQ57tFqiVcLv7oreobkjENu",
  "key6": "rvbkiHkJ2TBHBVHc3K1i7PNnKjbbtX6URRL9vGLYyjQ1tjUrnQAx2GRRmMFG7h39jnx4NQE6uJFo5XUD4BvhdBY",
  "key7": "3X5ZycjeiX4toZGKLqKzYqEH98LWPVFjD4eQFdRjm5e3MDBjm4x1L1SsR4eWd3wgMQRsjPqveH23C4DFSsSxeusH",
  "key8": "5tEgjcqaLPuCK3g5yFRnUpamPB17sWfNsUfsAGRtow3LVxe7XCG71sViUnJvPtJanraWQnPiaBWjNbq7au68h96u",
  "key9": "gsKcB7NVbnHRsMGfy84tN1obPnBB1i2fNheEHkeN2nRtdALdUSzfAfLFiPYzeVPR6uGGyoLqxv7kTte2w9tXUq9",
  "key10": "3G6ovVmY6jC67zLc9SDFr6wMKvNLbAnFNs7gjrMWwroQPtxXXN2oanSeNrdv4Edc8WZMNS95otnLjfSX5VR22rix",
  "key11": "2uNY84Qdt1Kb1hPnZNrUgHRiidRDwPH8JUJocbbacjf5XiYbu3RqaHHxagNQGAvcbsvMZ1XthmBfHWuS6Laie6K4",
  "key12": "422kt11mVF48eoTvWySu6WnnJBW2zzCYaeWFpMSbMgbSHi924Zh8Bj2CjcJxUQ4cKzAHZiE6Y1BXUhFuS2oW1vLZ",
  "key13": "3AKfhB7PX9wF9N79Hw5efpsRfDMHg5x1EmAaPw8WjdeHQU3sTt3WGCCxGNMRvR4PDpp2gQ3dnHRbKchk6HhkryZb",
  "key14": "27pg4W56ncj5ACcHU2SeGMmW1eB5iEhzdi8YBz9yrURyggCw544xxWAsqYsRPAE2YEdg7rFJtziuH5MNkBZ8pNwU",
  "key15": "5HxCu2UyB6G5Z3FJfB9szF9Z1Lcw9X18TC9S5nTs6t6pZvtpCZRCPVsYY9DoyECrwHMt1eWhrigKWFJ2RfoZ1aZu",
  "key16": "3rd95GAFKabi63o5HvJU4nZHu85yxJ88gyMtVawWmspaCSG1XhtTW6nrbHPJTntH62xFMxgmDTyGu97D39rVkZj2",
  "key17": "4WcjT2hmcyn9X1yTu9rSJYUx5zaavJYoFyCa9gWpEbDecKHbWisujkg85nWQkuZGLVgnJCJDXj63z3zAQmtaTiYm",
  "key18": "2Nw3wswT6CasGWN9C4V7bFTinjwY68Wtif1o7wVMoDfcwcsEz9AhWhR3Ma9yKwoGeUhxtWHossU7a7xhH7CoHDGb",
  "key19": "4rj19Szy5MASRRB8aXTD6pGd33q8QoKKFEMFAdyJpdr8pUZGL5Y5F4pfjqdzAv2CZ2av8TSwhbuEXyQtiSnayPSR",
  "key20": "3TqZcK4YUeGdeCqYmpmrZPary7pqFGzteQ4cyC9AhJNtVDCzmKQ39L9EaE8hPmy622pXPrVFuriVtgKxBtYyoA9L",
  "key21": "ukQTg6KD7xvp5rWPMzbkxeao3sZfJ9QoeDVMFSCixC83Le1hN57HvBWcfNYy2UFK7vC8umVPCxHqKnqYPFyruHx",
  "key22": "3evK1DLSXhgYwQsEUuWnJwibt9pYXcAc2P2A4EfGFjiSHREaNtcFU4F52BLmWYLQrkZUkLvckFCTjVGu9Y6tZ6i4",
  "key23": "2HH2oSz4pjTAvyEbd6MNxYcABaZfrucEmyYZ62u5o5qVrvwpYe9UK1QEX1JGp68SWVceEgtsvs6XC2pHuEVTkSg7",
  "key24": "4Lb7VZd37jRPXm93DUezC7NyKgtdrW4gNv4PM1xJ7wuoVY21L49bmFXoLkUXEjMWpmym3AeVJ8ZddqX3wojvEwar",
  "key25": "2GYP5NWcB6a4mkRwJSjtVYLbeofMJ3orZuaGh6DXF4tSfKcyDHcJJDSXnwKJp948WpZDbyfTxgKRg2wGj1P5XNKz",
  "key26": "5JZEYMYrrXg2HRXqkkrJvMeLDMRa5usgj7Jk5hgDUuMqGkQ57krvZQiXcU5mQLVE6fCsnqD2s1st2P92GYhLnrDH",
  "key27": "3Cf9bhoapmU8RWuEuVbYBy3VUxX5Mm6ryzCC1NQwLDVNkmPR22aMh4T6MCmU58adKVDYs4JnuD3fojfATc7wjvus",
  "key28": "5vvaW6UVAaTass5uJK3JoNscFQLSxvWrVtJZe5KEzKCaCr6nv7nWvNpx6KdpjwMJZGFjTVxjWPTpnNinJGgLq6Y2",
  "key29": "5VKyyYrraK1Cap6Gy4e25inM6xMWDA4Qz8MMkiekavwn9Y1hmWuWFK97CPuDQH8HHenVwJpgAa9uGBd6en4tyZoM",
  "key30": "3aaNsP1HZ7RM5Xvr3PWyPJGvfx7AbHL5KSRCSRULLVyhSjxBFHNrcUzgb6UdDxR8qSthYYCyiQHaStg1HNBefWM7",
  "key31": "3YVFzJN4NbmL3qXn4fvuCEvsBZ7vzRHc4DteZf15RZr7spdVXgwY2ffd1JP2x1NPdy5kadVDRfZBwhzPWFUR1KZK",
  "key32": "3LJENKxqmgmD7PfLZhmVcjywbgKukky9mQNJyFZB1XxX1sQnYiQJJKPTaVhGLakRTYuvTqDnZBS4WhHWqGLVLCHR",
  "key33": "4bXbRfxGPNF8AmsDTKrm1KGYCFrDBcXdSRp19kQpKNigGWR4fgedBB58wSVG4UAAhUtYdQQ4R2vKBZbrxRYvNpF9",
  "key34": "jmKTECxKLcCr75tNTj73q9uEnq7vWLVckoPweJFNMbSHpr1UQ2kShpqHjTrvoJQiWdFtiTPddRx9Kc3A8MQMuZu",
  "key35": "4YWMSU8iFDriPHrHUxvug2LzeUe4BvMADoZWyHcxTr5N7gZBaBwaFBV3dQtB2fRHrxhpNaecU9H7bda8QbdWP76w",
  "key36": "5aRGAKqydnMm9aJEjxTNHQJKccQfi6bZuJJYB2NLgeiGgoPviMBbNapVzs4jv43EWCEXyAYh8sY3YWRY9ufxmugE",
  "key37": "5yF9NYEGW2pdZRcb398eZ1LyZ5YYnuVgU6UXH26bW9ohUrjEr61mw4zDS2Zme1s4BjmiMpSyr3zE1sfGG6ooQkCj",
  "key38": "ZqKi8s2L6ZJZHj5bS35daXhPfHgdPHba5gJvAADjypGAX3Kjv7wZEDkCeDRLKRuGJ7u8M4jbs2N3y8Cc7Aiznom",
  "key39": "2CAoV5kBzBMJLumfgnLqiqXBVLrXFggQxEsxuLh6a4mB5zj1fg8nAYA9ThuGTM1gCcVtFdLm7DehokQUr8kkT7nw",
  "key40": "32151b88unwyRtPjSotpmfqX1mbQ6X73rbNrxV1Hp8NUQ3SsF4qqQc9nY1oe1i8aZuzoUn8qL9NY6fhVRFZgg2vJ",
  "key41": "2o4fiMYqtZFamZqFTGEGyMosmLMdquhxZUm65MLGJZ1NVq8D3HBiGFesRbaBFMrwMwXvd78iXYHqgT1kiV62Z9DL",
  "key42": "283egCoy8oAMJNhZHX49UeqfuzZ2jFAYWSxtKFHYYK1LW6VXqTrbm2eCn2gswZRQox1QAtb4RqKCJRSkjHhM3vQ3",
  "key43": "4HAZgkqrSHuKTPeyp4PjpM7fWdRjqXwpMvBNtrCmpKidNyAKTLu6PvYtCN94k62NVJLUTa69un7DW3mZzR624RZg",
  "key44": "3GV8vBS3WxrXW2w2bPzNR2xBKdYGttDoUgyyLBzPSVMw1UeYyj6aQr5zvig14WG7XqegfLwumPEvGAE7cbomsmaM",
  "key45": "EjF75LN1U8Pk562tUXYXtfxEC4nMSmuCLrRDe1j6ovkdKMX1qyuRaSbjqbDoTPC6DCJd17aYsbWSeU4yuaoEauF"
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
