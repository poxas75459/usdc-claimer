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
    "2J7inSVdpb3Jq5zZBVm3cCw3HQcYGwD1ndiePmQUhLWpH2tZNHp52wriHFhZ6SX4AEznE5jKm7Ze6fXptJGQUPfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9pGjBbHrGMTYjrXhpmBduFTKnLXgVPwMHiD4pbKCwoDnKbV7UYFX14BkD9EXAgPuvYDg19XqfBe2APoQ7U14sV",
  "key1": "252kzZMxpCMzSh5j2uRs1kFiGLzVxXW1E9FbnCA6D54axTXW8bDyNy7tZcQ8jHv26ZmF3UbadzcL8Vjnt9ZD3g2R",
  "key2": "5ifsq4YxVP3CrwC8Fqe1DLVaBRRV6c2USZAUDZhRty4Eust1hyzwC3ug5AzD3SHfg3AvMCEK5n5X8BPdwKUGP64Y",
  "key3": "3gUBfbWkxMdXJWPRtVN7fnSdzR9his5WY8rwr5aySsKVTkGKa9gk5JudF8AXmffTbRn9YEvHY4abaxo942dRrEdz",
  "key4": "4qkKhaoYAF4g5CJT7GYJd7fFW9HkA2Ax3GvLXssmeYdzUmwDkcGZf7WzXpyH1TZEkYvwTU39Umhq8LEnNXSj2UkV",
  "key5": "cAy8JDi9UUhvVEADeaEaonQ99vXwV5fK2k9nty27Qg2FXXoqZtrM3cvqmBjVMFRh1NjVWw69AoQzH8h9r8X8SLT",
  "key6": "2Xf6F8KBUyYNzrPC2vUNzRcCSosT32t9Fc2anAMbvjZBUuBQjCYwn1qVhCy2CUZyUP9ADEPDmMhekzYehuwVEGja",
  "key7": "pNJZ3uK572xuDX46JzM9Ze1xAfdARsPZS3ntyTpEJq7j4AQthhXNotZnJizUDWTCvKwqtAWY1BT3MfaeY3pEjnE",
  "key8": "3wD6zwQyjUJY33n38nkM3vV1fN1v2Xc941PosE2yPBPF4bWft3dCpmGq7NRefqHZ1LMryqxjPYdVLeo6rSZWRkFL",
  "key9": "4wkvsjvLJArhHek3m1D8Trunj74zX6Ee71zsseuuD37fNkPqyEHfCf34FPrc7L3QnzpY74TujNVZMbFrMPVVjPtz",
  "key10": "45WqSts67eYgmvVcHh2vczX9gnvv4jhyZ1Rs8QMnCZZbRTAnSVve3Qten8FtCBam4rnBRUGQ9KxxChhQ9eocxQGs",
  "key11": "3HEsnRxQQo1rMfW45MCCSc5MAKuDWGx3ruhkh6a3HtS4555tVHxg1Fm7Faovyf3ZNTSWvPMykNbT3MYv9r6bbUwk",
  "key12": "2w1FSzDxpy3uo929GF2rAuerozhcpaWXjmfaCdRj6p4vUQhAkaK5eiD6kQkuC4j8i1ntsvn6ghkcTRYTJGfr1g1q",
  "key13": "4GudGxHdbmKgJ2cWRf17GSPookPzVaWbPKErWvC2SsfWGBc6wyVzed2q4GeNTTm2RZnRE4tEkr4hEokq2Tshqf7W",
  "key14": "2HV69qNG5Q4oWS4FbcfgZpT6GT8ay7srFTsmsMtKKtHiTNRD2BQwNSKBzK5Ste2Fy3BpVUMzNvUVupgMqC2gxF7T",
  "key15": "2YrqtUzbiLT34hSgz3JNuWTPV6sJE6oW5cmWoT9kYB6PWyESG3BDUeBcSDFtvEdTBuRbBYSED8PttSSqazQhqgLi",
  "key16": "5PpgCRUzSuZDjbchbU8LML3e4JSU4gXU3UQR7xETJizP4qv4Koy3XhiS8tFTA6q71sMV9MYGRhZAxibWj35zcE4x",
  "key17": "2dYTd1Sh62AYoihQrGz9YKTNPmwzJtY2Y91vPNVaA9PwSev4JXajmmMS744jMUZ8riXh9G2iuRKzdSPoNUa8D6k6",
  "key18": "2sogX2MYzGaNG86RyfebvUNi9xwMTXUpoXM2JoHMUAkaVyMwUcUA64kSc35HFjdv66MoM59gJK8G3igMqE1W5rQS",
  "key19": "65Lz3XqUHGoBxD7eqJg5QLPwjVHbBhYkvD6ABdr2QFqbgcBRcEFQA7X5om3E12i48W7LFv8c5mnoVZUFEAcpbDuJ",
  "key20": "sTYLRwamYbFX99MA7qpGbamLVdWC9FAb52NKg4Mk2fiBe77r86LmVqzxkhZ6Y86gNaGPBZKkhVzvRdRmGocjcEF",
  "key21": "4uKCqPHs5uX4DtPoyu4rQNud8EX2uBg6GFELCNRhxqc4tkUBwcF7VBR4GxqUG5uYTouFEa9P487UH3K7AKs7xjqa",
  "key22": "jY5vR9Rp5jV2rEZwtBZJsfrsStXQKt9scKRgCfJH5tKFm1o8oUHE9KhQJxwzXtGYqEbG95gP8hd9cvy1tF51PJ8",
  "key23": "3U3vtda3JkxwC7ujnA896VZgWfL7sZYiJJsDnGUZbgM9QHuQuu1egui74hXFrckdg9ADsYDaXVWvweezYKgcYsbt",
  "key24": "665S61FUR6KnkrsqtFmcTkUe2HosskhTYro7Hi8TdFd8jr14mkhdY2aaneWQ5ogqWC9pnqMdzkvPkBtCUPcjxkxT",
  "key25": "2SrCbuQUadHXoywu1FphUFZe4vPVCL7WqngmKfHCki9qmzUjpM7RSUu1FPMnVcJ8CBasQG1Qnm3apHqRuTHFqfdX",
  "key26": "4PqL1ExCqAnzDhv93BYccifYnY65KqBHTNZxnNBbA6VqwP4Cz2W7W5VFVMAm9dv9MtczcSo7Vi7xisD2Hh5NpvYu",
  "key27": "5K6NuFj1u9ex7v3HMsCHb1zC7f52cTUYE11cXkST4jh6xJUD1sd4mtuVkWRMpeqSqyzFSYFvdRdXDTyWiYu6UD4P",
  "key28": "5NxUKdxxAqDmX6boJyCAeoRTy45wvvRWYCoRVuxkEogCHUZptbFd7p8vrBb52hDubgpjtLBGQQkpCFLkrmkbSUHv",
  "key29": "7EgPZz37QJNztkHWv6aJoAPLs21XK7VDdWCmbCFJtH47kXBRTEvQC4r3YBhqg7V7nbRSb1GSVSZsFMXjur56gGt",
  "key30": "3cqHA41pSUYCuXTGNrkSEhPednXwvPUjqGpTgfYeMdCGiBMaioRnKqXAWVS6kMmMMmgHzuMPro6sejk5qR3yNGZi",
  "key31": "42CPSSwr31VE1s8XRdQq8qHBqBCJ9wPmyNQqmQ9Se8g9LoqNs6f6hRoxhntrPsw3972E1ccTRtSXS1GDpR2eiKDg",
  "key32": "46ATJ6pgpmFiLhj3JFqRATXzuRHsJW9ztjhTZBVRciUgkmaa76EX4SRRY88bAwceHDgYNu8hioiVtHyCBQt2339r",
  "key33": "2sfVgThwfBRReZCnumJHngoLXxAyiAHgqBEwAyMZFfeQMeRFpCJYupXJthDQPVnaw3UB7VDCo1todDy7pdUa5zuo",
  "key34": "4YYpLxU7uPgQQNPVAiAypcEKQ2eJdL5Z8npdfRDHDhHKSn8YxJHzyLm2azBni9PHEJzTEUHAzKuXvSBscUPqDcSR",
  "key35": "7htdFzpMe6cyRYWnU3N6sUDLhvqnhuek4Wzk2J9UVi8bT7Tp9ZE64k8MXiUrGf9nPyjLXStLcTtvFip76Q5h9r4",
  "key36": "Vck8kRHiXMrUkAUSQsNfmTTZ7wfgXrexEacEQkiTKHbbWf5MqutPnQeXzZjE7Gw6r8VaUrdj7Xf8AV9i3kRZvNF",
  "key37": "6edF1m6Kp261XudRFh9j5Us7kDTdj4oX5Dt7pvwUDK1317vqcd64kPBPUAkWtmTxVxi7DTNyjePH2NH9XLq75qT",
  "key38": "5SWTGvV2AdeBoEbM1udvBpuSafLAWPM8oomE8NFgLUnyRQesUbXmRBqYxCvAbdmVvg6kjG2tZi269bXm5Cbw8TiQ",
  "key39": "3CJ6CtRZViq6gHb52ZPhPkkuFpts8waHEmQ84vcEZT1mhxucZgVK2vC2V51cK6q6dXmBGNFZkRFDchnpXrkBGEiR",
  "key40": "3qYoVXANTd5ZSavzyAZh5eNZ6nm2N1EiXYp9xEZDcstEz1CimwsrSNvCZrMXzF8aJVRvXwjhkt7MTdTR2qRtYDRr",
  "key41": "52bwZwZfxPhW1iM1jEGAMHgKY1WSt3gZGanAoNcG1meUgFgNBRWVT1jwwQsFbzrsbqybC2GQiQJfmJcY2Fkk9pQZ",
  "key42": "4WukQhag8YGzLRcr3H8qfdAKwrFzGvBYvByYdMVUD9fRQBsMPqA81rnmSfp8XjAf6e7CRAD2ELzpfp55W2i12XxU",
  "key43": "2Q3HEfPhRwKJHG3BQMdfddzqzMQEpumUM7GBaWNkKQx4REBrmVBKxi8dPgkvthsL977ep4xZ2FdrsRzDEm3kjozt",
  "key44": "HvqfMnc5wcuyYRXByiKT15AQ1YUWSMyoh3C2oaXv3JytBY3Fw2RMvm22rdazv6e4Yw1HkZXNQxf1cE26MTw36js",
  "key45": "2b79oAdBJ2RvuxEog6cbVhh2eiozU4JSfD5tzmgKCNAQHwsQKKvAZz8BWwLXyFMU1S26tEh1AuKcKfDvG2gjKgP7",
  "key46": "5TQS8UArcFG54HUrqcK1knrNsQSBQhA9VNSD4Cw3dap4ypzKJ3jieGXS1fJCm1XAyxJi3WnyPdixA8TkU4K1wg1w",
  "key47": "4szVxEooFBmQLGfC267hTcitKYBCUgBa3mnWrWgwYySrswajsWrnx7bRBDjA6SzDp4zMJR244dMxdvuWSNfd67Zr",
  "key48": "2DEFMLxTxJkppmms68w5deb2QreGeigitWwgz2TAYUxhs5kWiGdMShUuN6tpqVxUBWtC4fJgGrZ8RipCueu4S7cd",
  "key49": "2kPJr2TnbiSayEbGv5r2nDMGZMPLvUXoLkeBjE1vLT6SnPio9XjW1cg1o8vxzWBGUPLxswwiufaKmsBYzDPYCpX1"
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
