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
    "CgmTGsFBo9v2ZA1bQJQ3vVtLe3Hi2nsgGHL5G1PukhF6HXG1ZYBGvrrtDfQj58Mugz698WbrR5E62WUZBbkQMBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGWDCxJDSqWoVFHKdhXAJehJcUkoPins9YHTT36ugmcepMg8fuTLDJKteZkcpt6o1kHE6WkEBZxNZF9AV8DNZJw",
  "key1": "2ndnfXBcPos7qwRxSsaNSZxewoY79ZHenRwJmB4sXSGCwR6BGV3YrY6S6ht1NQYeUb4B75443omrwrVi8AGzt6JF",
  "key2": "zrQNttMvoM6UpiEZyrKr1fEHnyFXpfGovbhLwpNfzcu5Y9kQq8zvpoDgvdhdZqXsrTVLe4itARFMJCpn4tjm4fP",
  "key3": "2ESdjwBwqVb29ppzhXLdmDv5wgpTkVfqSieHTp16PQnywcQKh7udFFPGrmrtvuBrE6Tqzmf8gxPeWs45Ne33wtca",
  "key4": "c2jZkZgdZAd75j2eQ8Lh2CrHyC9RPciX43k8EMNrJKL4sqYxjUFphxTAMbNsEH4MDyhYGQEWXTAvs9uE2PQBhYD",
  "key5": "3Zix3BUEbGejkv3pQmm5Lzm54pXfC6fYStd3xNrKFyNNz131jtnmTtaxNndoSzkrkvJaFUyCn6a9YNPgwN2HBJ61",
  "key6": "4vFU7jiC7nuwr57i35hfNNSTPqQtChFajKaHRt8qBLLr12Sx5WJ4Ax14mkos5KPctZpZdn4JyNqFnKDsSVtKZpzR",
  "key7": "2X2qwcH5bn7hUZigH32Bfy4LC4Z3eg3kGbG3xrvRCST7f73VtLXahf1hTy5z3pxtPiEKRLZduAgpoPVc4ksVQeC7",
  "key8": "229tnFASepAA24QUq4kEtrQy8RFXUhJ5bT3mnK6MgfAT5asVZVB3c6ToFB4EhYS8JQDhVLWDLGFfqW8TAzjJQ3mp",
  "key9": "XJspj6hKq7t9zdVqTftmFwQdBC7xx4iMnFUcj7J5jZyvn4AgB5nGrHdDx7K44pup2FNg7BYC7PHwjUhgug9xpgf",
  "key10": "2kfnaK7wumDfTAGrtJ3NuTVKU2iTUdtUmAeddtT4gibWGmbRi8F9uBEkWzoNGhbxZrusbYt43ryWmxuYSZt64xdH",
  "key11": "3c1zuCEQ99Zn4eu8FuCxonYPSZeNc5KYqekfPohndLNMnC8AyGboQK26dhpmnBVDsZviF32oEJ7SGr2RRRaK5tcW",
  "key12": "3f1wZ2cR19suhuoF5v5481hHZmV4Nr4tZMsmYa4VXsuG1QtDqWby56pL8KSnmUXbdstUZ5XY1De9tMdFcYvMPktU",
  "key13": "uhL27cHz38TqNiY1HiUQNbxpPMZZuAFkDXMoVCswSodfE8AHed74efwLJp1AzCxP3wXEkWHmVghbfqfoLc1uaFM",
  "key14": "4ge4tMcykR9c6CUVZ5817Yw1ZJfBqYKJUX6LctBkZPG7a6NWCz3iak6f3UAqS2zPaCqN86JnYxBMNNTCcwTesofu",
  "key15": "3bERMcLq94tdMJFoSJRYwKE8dq4GgLzorJFY28RR7RDWTzLBsUjJiUTfkdCWDmN31RWam8oG916dKtHPE5Tahnps",
  "key16": "1UYz6SBiug33gbZf9uTMJUfHMdPDja7eiAVifVEsngqqX21xymi7cVwoLZUYuG4GDcf4QwjjMh6jMfT7SdiNhKr",
  "key17": "3buSTrPDBHkCt4887SLVzDbaRJv4Yj8BSbhjkLxRBTKhLusGuNk4Cs3hHcvaou3YU6QEDzr4bERBpJiJhFQiJaiU",
  "key18": "4MbmCTtT2ugFJnbzeUsiNBHb8UBpQuribzKkQyQ8yqMBSs6UHVccS9ND7U8hVajjzRYLJMLJGWpHufKL85jdxzx6",
  "key19": "2Jk7W5sP2JHpmo8FwMFCoNz4S1QNU7vqrajR28KaydtYeSvSCfZP3uWfDF2DjaQ5mjdxuvYNzoARDKbCjWGkXymK",
  "key20": "35fANd5mZSMKSccXnNsaopL6PVacLFLcDgxB1nxZMz2fS9ap1CHdM35FV3ZBmhvNPdwZzTZY3boyvjyA7pMao36i",
  "key21": "4sqcXLCSXSPYWSC7dDRBBXFLsWUh8PybwbZErrH6SnnmgoS4ENDTvrnZETGkkMNQD6weQs7qwNaV88uMBf36nRgh",
  "key22": "3SoBm5Yz3HgW61DvBd3SMk9Nfud7fPtdZ7UeVVNXnBDa8FNJbD2FMaCXVPydnzifwn8Lxk6crW7Hrnf5XR4y6eLr",
  "key23": "5pCFww5EHFwBs6gDNfGdbGYvNDxJFUXaF2Fvyy4FuCMUnwZCeD7FBPPB2yPCbjQCRRrrC9c6Er8cEHzNRnDV5gSg",
  "key24": "393muTQ5XPLM1BvHhTFZ8c8vBKijM3KZ7CdsWphs5z2hNDo3tUWCD9eJcnB2fupAtNtiNUz1PQYigKv3XYWkbay3",
  "key25": "2HUvttHhVcMGuYhNpqXvVyBsF9RCYkjRmYmwrM7oCYbGsoJCPEzhdqBqXSLTUbzvibVP9LZdzs3pwsS4VZodyswR",
  "key26": "vVQp83zcKRPb1k1zSrTx5ijdyDoNshU3qNp1BmzM5xcS3aRT1ipe74GUgkcVyfUjBfLk5tkUeSsdYYrSchyc8hJ",
  "key27": "4P4tLtTbRbdxvZ5MMPJpDLZf4pxQe1ksZeduJ3BgMskU5M26KRKRFs2VkuRvx2VQ1yLMi8U3cg8JibSvw3u3kEfL",
  "key28": "JTxW3CPpDkji3EJFfmFTa4wrzeV4JsHGt9Bf7ivmb6Q3WcHd5DPAsSxi6pVXHRBPcLpS31WBJMnX9PTsvCnvHZU",
  "key29": "5c7R3Csnsas3PEkwxv1zAXtKTDwbAsd1pnEJ7RYejhmPLtUzp9LqqfGGgc3jtwEGHjkVbrXvEFBojmZyKpR57aNB",
  "key30": "4Z2Casn46VfKQak1wPzr9KSu5yTBmgsy4WSjiALekvuaJrCTKg7xxcUuQS9uFGyM8PrnvJXQr3dTWyoSptsdAmCL",
  "key31": "4SezrCzFCxxbiegU3eV5c4ZhwJsuhSB3AbBjhZoyKqPeE6yN1XqZwgi5K2xTJ8VfPvg2vNDrcnAZ7Fd1wfYr9xWN",
  "key32": "5TyzwkDwV9YyopXeGNr16rnJHKWtnTCxLvfTqvRv6M24aE1MeTrdEEsferPYdFs5p6EuYgoDFzsuzzmqtDNY7fD1",
  "key33": "3LTmprKCkuEijTDwuyiWdXcHQGDvY8fUFz7LwVm9FyCFH7KrtFkiepWXvys1qmQu2w3L82RXLbrxhgDFsi2PeM7c",
  "key34": "2KidQcqZj6zxk4B28N78ZfL9dEuPSWsJfwhsokMsYaq5yGiGVBh6PAA5dZxBJaozPuuiZgSMmUX2UnrRSjAsKvhE",
  "key35": "4oRuJhESGJohiy4qibeJntPTDTF998v2mpCjqmVt4GHqMs6SnAf5MBwKymCa4D7sLRp8DZVvyQAwro3qWBr21wXT",
  "key36": "43YqvWE9Up5DW4u6D2gzdWuToRS8FrLydfoALMDQrHTgCgUk78imZ7Cd4XQ79YoLFN8qgYhkCWCZf1QzPN3vpvq7",
  "key37": "7NGSHoHUa9oBrwyg6wmaYkJmrK4QG9d8VFmNTfoNKbMguqgzgCSebUkTophzpcByUnLUGgLaJAmBnBMwGKJsRqD",
  "key38": "4GRar2NfQNJzHJZrcR4gWARew8aRKf1BGUbesqCa4bkjYZuJ7mAR4YpRubbBgBw8KWeUgBNJBvUHm3p9ToxbLP6f",
  "key39": "5xQcXUcRwTbffk1SCzwNgnjgraacQF4TFhyX32xhirx2EYFWvfSFtxWfEXiZJmk8ZCX31GbpFmcWcivtczGS8ycJ",
  "key40": "3GHJ3p2oB9fcEVGGcwRVXemZwT4333JuVBw2T1UaQstzBGYQCjazZSUGvSfBzzpLcJuwRcRNRt3QKZNGfPqXV9KH"
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
