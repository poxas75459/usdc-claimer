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
    "4ZusemZJTVunhnnskM8VJGH6tPHyqfVY1S9YbqMaiRdAdMFM8G73A9nHyzDaU2Wq3xBNTtFoMqgUYkN7ov1CN3uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNPFr1W5H3xmEFpSSFnvWBS9T8DZC3wVmoBv1aQ9wfhWLx1FSdhABX37Le1WiWB4rDiNqxExJJnkeTjZYYYKZaR",
  "key1": "4KfdqEssqmPj8VkgPbVPjTXfiLoitkwen6qhX4gWunb2aKvDt4U8bDwoDxNyX49wisKgWHiQPJnmL8B4nqxbKsii",
  "key2": "3uyy1A88yJssK31a69W7KSc8paVg4ZC5XptVekkkoamiSsnSXBMnjsjdmjMysR21GFvJr2jNTz9yUL2ji3YxuFk7",
  "key3": "AMQ8iLNVztntw2X1pnMvg1HKb1mxaNQr9WE6StYYeMcK7FUcB5PpVKbwuzBPSwpmo5D7utsnuNzVmiwhWFJrMqR",
  "key4": "47kBE5rBnUbrVw9YYbxS2XM7ndS9qBrUbG61di8Kiiioa9AmAFu54EpHTASR6Hyih3pa4YXV8dFVs687zzKxKxrF",
  "key5": "TM1fsg9BmzVGp35eA92f8th35xyrw4117XDzAgxeiS2fdk4XSkCxs2aYbieevbwSGiY5CiJ6PUqVBLxmakDaMmq",
  "key6": "5Pdioz5XfsbPZ8YtN97wfmYScYJwR6Dpukt1wZgL1SBn2f26HDKyhj8tCj8ohG1Q1Wce1fjWiHwXguV7Pk6cPqZR",
  "key7": "5NbNAPFkvkS2QeT241fQjqmWcbjnma7HSenw3gmpjEWSnE9XB8K2dhXR8jqicqwPeDwY96vr9EJgR7cWu4fLJRW3",
  "key8": "2AmiVQoNU8PAaPvbtLnrBZrCDGxhe4YRMCK2pS9yPMn9VfgCGsomYmmh3ov7t5zE5Z3VbknGAbZJMuzSy4xbCz7M",
  "key9": "5bJiX8iWofDV2o78PUSH31cGywRCfFkeZo6TC9yM2PcHZyHkYnYJHWVBEhSzvawLCaSNQMbymzcfhuELHghP6Frh",
  "key10": "3bJ4Tx3avvT1uw8Xt6XgQzjeFogLjJE39t92kMQjqvtRg21D2S7VPbnDtN8hUpabUgrDzFyVDTi1WE73RiLjFnrf",
  "key11": "3KHZUnkLKsBntoaXVCoRnHHhRXAEpKJV2ysphARS4wmC93CpCZAtUALe9f7vEDR1puLv5gstjLhvdFSB5homcu6o",
  "key12": "2dyhBXTWMAa4ULbv8ZoKpaP1njZ3LpCBmSu7TQmNM6DGHrjgfkL2C9p6a833G7mTfmvGVGxED2SyhPfBL7srMiCP",
  "key13": "Koqae8jByrMpg6c1Daha3pi8SZzJN2pDbZFau1Zd2fCqePCqR52wA6bakY1LV8mrUKy9K8Bay8BmPX4MTVLCsw3",
  "key14": "22CogbS4NTLb7w4YQ2eoQZXtoSfy5HUKMjU1cabChMzs423jTb1UAHEX7HXUKS9A3BYaVha6d4YtWsJd8KU9U4LN",
  "key15": "4KnFyoHLGsE3kEj4FRADhcE7JDWgvqRh29viNZvwXCrKTjPovnB5PmGGz3Ns395FkxnPYdRiyiqFLKmJ6VFHYQeW",
  "key16": "5L4nbUSSVPemHg3va23ma1vfqhZgi8PtSDrFSP4xF9HjnF1F85edh41gJdawb5c1ZB8FN4tVfe8MCUkRCP6BXHe",
  "key17": "5XC1xDF7naYLC6NkLnM3tDcpbLFTm6wFo9QTFtBWY8UZY1EhCtnmdCE5kqQfh58UizpdyZk6SqhVH4DsuR3EsLbH",
  "key18": "2WCF8sU5vZX8HnWwRwyDScpbZVBn9uhgLjiuPRznbsoEXHrhPhwjuDFT5M4bhtx41ZPAjCHGTQHMTGfdCzee87nZ",
  "key19": "47owpx2NQfqVChdovDiMuvVBemFhwBDVVr422ijP5UHDyn55HweEkhfpuuAr75LKtszf1ZVWDPoNZcBYBJo2B7x2",
  "key20": "5FxLHTFHDCG3K4hX3dfxqvr1evf1eAguHqLPdCeGdeGNi1qHdTE2UpHJA7fdYVuukHnPmaxD9ZBA8duws9JzEwbX",
  "key21": "42rYLjZNFA8PjdPZ5UyVEQC9s553Wd4groTY4u44WQYCnUgmdkncUbE5WZCFHXaCvKxTS9iWStzaQkEjCyPqJqUq",
  "key22": "AkABYt7Z612NmKCqo6N4NGBMXtGUbxgmcfr7MNsWBAxVxjETx8a5yJ1VVRBsknqEDYawoiG2dt2BNYgg2feemMu",
  "key23": "66A1ogeFNPaGH8LpKbGPU2ZZLguZS5vXJdz6ekAuNf6PZStTBbtq6wnpf7DVyDndrkQk6xXjtUjhB7kCZM838WZA",
  "key24": "3rnAtHrSAzs6pUiiS2YNbS2QnevLXoJV3nb7Qr52dedjr4mfwjfVjjgkFeFY9uxRHpqanZxDEZQFLTBcprJ29BbF",
  "key25": "3RptFSFko7gQMorVdr2kggGwBbiMQbFPCyZmPeNq2r7X23mBJYYor377QfLqFcMaZbee2BaoiSznHPJjH48se1Yp",
  "key26": "2kEwmA2GLCaDFheAcKbqcpWsiR8nSZn3424qoXANN9YpcXHSDVyUwfW4x97QGufE3zbvJrFJoAYJWNaL7DNXVJqA",
  "key27": "53vHWGW5DBSRaqNdasgVWNcWKQ381myytJvCLAX2kKiWxa15uPwZsptCvinFqQbrvTXiYgpiBDhyoxmVzfLzZ7wk",
  "key28": "4MarGf8rcdJj6K1m3qddPq8EAgaoubHRYLtHEmpPTJ3e9Dqas1JnxJuxiER6hpeLERzWZn5ttjB2pQC9KAwgdFE9",
  "key29": "qwdWkQRf9ckb1R5mrR8MYfDUQmJoDtYkboqDZqk5A6HubwWEgMFUcPfPceAWaanZH745ne12q8BULJdCeY5JnBA",
  "key30": "5sVBkfK7NwP9KHaU19AwCC4e1vPcr4sh3CiJ3PLZ2zxDewEwiwaB2n753SSdQqfcExmrq3qotph8UkHXX3N6PsEJ",
  "key31": "4BArWujKsn1fNAt1o2ZFLdqxgnuuJ2JNnU576UoUPgGeV4bvKZm5n8pCBfB6Qd1ie9vi6bJHW2MYANcXFDnChvxq",
  "key32": "4k9jDkS7jyF5tD2wyqQ5GpW65FhJnLhc2rWfYWy6BF25TSCdchzZwFi4jfcbLZcq7d8uvCupWpnJhVvh6xHG6aFu",
  "key33": "2y82t6GZKyzWpXWwui5cug8uyxtPhaZ2hUuv3DJvF3z5jbTLuFqx8vFML3NjU9x33mVPLhBMATETg3ZZoYQ2j9pv",
  "key34": "2VhYf4ZabELLXyLXdNM1ad5FDU9V8ZB2pZNpvze4o8RAdJmFHF8P1VEtmTjoXgBbW7Y4aAmqFYFgjHAtE6qEHRd7",
  "key35": "5vziAV5q8bo3qMvVwGdvFF8b8ruBMx2sH6ee8RQ383t2YrrkNqKJbZQuqHXfvL3zYgenjNCEDxA6Ao3jYUQw4GiY",
  "key36": "37DLyQ2dDGWaUWdsoyU7D3zrNizroSomde1yKrTJXTKv7d3ycM6pj3wntrMjdaqsEBqGyTqqiaLwTNUoPiC8LvAj",
  "key37": "132gqdMGQQJrPUJhw28SdZNnCnf3kiGmH4sRYiFHyks5vX1kKRui3rBYKnxLuFxMvYfpt8YftnLPSHyEAby8etw",
  "key38": "27vyZeBgF1pwhYPCLi3hCAvuTmSokcPcobVCNKhQuLfDmV6Rn12QXmyCjC8pYpxYd7HEcWrryuVBrin7MQ6D1pkk",
  "key39": "JNmgaAY2W2Zq19oegZfyANVAkwLNLMjL2GWppiG46py8ShX9WjdXXEPTeQn2qDK7D9rxnJpMRHPdEzv4znfhMrQ",
  "key40": "4VWkhJtQP6kdN8pJF3rwtxC42W4Xdk88bxZd8P13ohdGYjYRQ5h5tqgW4x8YPaX6E2gR9srCVevL2EGWDgSm9jf7",
  "key41": "5qoGjw4hg2BN7xyWbG51LBxRFxwbY6JiPjxyQZLyrrXhh6W8tm8UrNSFK3S2z76CwBfSVbV8D2Fm89WfvRadRW6f",
  "key42": "42TVyJCdycvvu5hF43LczgvaxqVcGtXPLzjZ1vAj3GVrm8PmD4XddQ1xxJzF7ap6WsHSL447fW8MeoyFSadkVwLU",
  "key43": "5DkuqZrVsDJwMaWee7PeYAuHJ3gYgVzJeGAhh1f93ocLjFJAyR9cjvTHH8Gger4ZR8cEjkP35mSUGqzbf1egtEy7",
  "key44": "4aJLq1J11ebYbMyso9PqFHEfzCKRvnV6WT5wmKintSoUmJRBkU4smfEDyUxxWyMU4tS7YaZfDzPYC32iwv1gbx1U",
  "key45": "5e3p5mBD7hLPnsJYn2q51uZz32D1pehN715FKnhm4Hi5fmXn7Cr61P9LRfgG6QjXLLvfMTq4unZPYMoCqXBF2DZh"
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
