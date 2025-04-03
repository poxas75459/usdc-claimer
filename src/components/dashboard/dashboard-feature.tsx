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
    "W2h3k7ZgAktRg6o46NzFJ6YKtgSehyJB99gwYJT8RxSxau8iApqkLmcPcx2w1Y15g58ePhHzWcouFVznkb6g6UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xaBG5y7g94sbg41pbBwEHgAZZHaLNxm1Juhug18xpcmfkpDgkKr86GnnowpmBUwZsoCAornRFW1rUSoHoZaJiK",
  "key1": "2Hx7ur7ht5jhcrHKAsmqLGDWacZazPXAB1rZ5oKaBh6ryo17DHVUvhmXBi67areN4pGBQ51vHmorSS6zHHKEonq1",
  "key2": "3y1L3D61JeUS5cmxRE8mofimXyMSe8SxKkZztCaAn3AWbYrZwpH8NnA1SMdfEJTZasHp2y3Rw3hzFKEGyBAjk9Ri",
  "key3": "N8g7S1apDLjKL4TPBVp58gysAdktjZi9jUXfXdS93AUw2Dwi4BjZ7Jq1eYgPxewhWBMbzCXEp6FQfBJyCPoJK7c",
  "key4": "33NJqgzQH6cAbaGGsZSQUMaTGdA3mQmTh3Xshz9Y9bt7u7tpzCudzzf2S4DiNadwJHyTxpc8PckUJUUxiB6Leb8b",
  "key5": "4Yciffsvtodp24dZH4EHbaQifTVCtthYniwpWAUPLP9d1ibSM9DYB8xXtiuY8thCAkZvw2hscShEP6EPJA6TD8uJ",
  "key6": "4XFYYLaT6EDTWMLjGJSwG5F68EGTmTVCcvDnm4jAJTbSaqZyued7rk3mrLiKUJpuR8VhY1LLMixVCPDLKhGDnvHa",
  "key7": "33r5oaidoN5yfELuZWpdZ7SdZkW7FktmJG3ZHf7WSP972WawjLBtTVL4z8Rpt23SeJfBGUFfLR5w1D8w8prd5v2t",
  "key8": "4EqcDVNHPW3zu94y7REME6qzxgG6Qsz9acoctAcn6AZXMTa7KpkmLttQEW9BF5pnNT2S5S93siRGAUErm3VPQvsu",
  "key9": "5fy93BMfUoaVfkzmUU5nRoncrjL7cxbCGZY1QdD6AG5iERMCtU1wdHGcMxuAJe9FWkKXiGWAf9dNFmh6zsNC5Tyn",
  "key10": "2fM9wGr78mwWidqKu4Kd958y2eB6X33vFiR79RC6GS2m6kVRqXK6nzXmEM2nvHqai5cVqRUd4cPHK1uHPuR6UxxY",
  "key11": "3j9yijzP1u2QUBA5jvPUP6djGDb9WKHk9cWzuPnR2fgwcJ3ceA3cLH7WBsEHguXmas1MMExRJgTLm6s2CTXFfyVV",
  "key12": "TdHatpvXp7gBGVWjm383CwdwURKB3S7HipsxJGsB2ZbFmh78QC6T8D121mUJ1546uxyaoTtk7Rh5Z7tojwwZQHJ",
  "key13": "3ZGW1Rm5yxLvZL1eUy5WrwFTu6QorCpcPQAL3ePryRyQJQoGuVGSXmdEapZyzzhsoG7ThwztwEwXQxJqz744D7Dj",
  "key14": "2hc4Ekh9gTAunnGwjn2zVQzJpFG6HSyAhpVN3BrRzNPc7gYxVRstnhvGFKAgBiEiGJBba59Rb2NyfisFpF2P3pcg",
  "key15": "XMD9JN451h4Vhxy59oCf4Mo7q5tDbyQcyvXekdHvM5GfdBf6sZQ6KzFa6R8BJVguY1jcRys7phDF6gsrNsoZptq",
  "key16": "2Q2HGzgDZhEJWm5NUmEPpGANgq6R5DJaP8QAFAcCauw1RAFoKYBUTgyxJVAWUZyRL2MZyd32C2aWRiN4zRu2UHEw",
  "key17": "21qZYX2UzhmYjuFbmbasrWgnWRTtBhLD4UWeamhjpupqYiXxLnfX6M8TdWmecpzn5CYuTEgDtNbW7vK2sP86WSPp",
  "key18": "321U6eWnHtXSXAGyhzuS3FCKf7zJzckt8WkK8114FQnxgJGgfgH2gx1DaR4WXFfVxnauoP3EYYm58LVs1Z8uK6vF",
  "key19": "2AKkrAKZUXChbp2b8GamKoDiMWuq9JSfvysXGSaFNvessGYbL6z8THFSF1noZnJAxYjwnPWGBdXiScTDvciZB7Jb",
  "key20": "3KTB5ZzKHQmK7VsV2J5PZjEthYqJabR4GvLJFRUjo62b1iNJHLcm2FHn2fN7QYz5syy9giGJCAiKqocbxGCzTKaZ",
  "key21": "3BHCWhgF6U6g5JArUSKFnYd6yGof3frtxzyTzi4PkpsSuw7HD3mzRTqHW7jy7m3aPusX7BFNYhUbvmbHptUUQQqm",
  "key22": "3YSpb5Ebo9DHJmMAZhfVSZFCj1mPizvvE36atgciXWFBs54rWENqah1HdMcBo8KrFrqLNP1Hf7KRfhuPnYviZjNG",
  "key23": "P74L6uyU89Cgg5KK4uDDarQchMNEZwzWxqnMrwEFWYhGKDb3mKnNLLz2tnmNFyA5Y6MxCs4h5TzhG3w78wBjbV5",
  "key24": "2Pr6drA3bUfzSkKSXEAKtMVuMnfVLP72ynaWHEhJNY9smU419MidNuAFRTPY4kYkSvCFybbNgAeXCmxisW9uHdq8",
  "key25": "5C3DvQhkwV2zo2oKGZ4Nik3iGigAFRnA5DaaEUjD7WJpWbJ3r3Vymxj51dQ1dgFXRKwMu9ow8Fdz83RMaYrMUdbG",
  "key26": "8NUU55m6zQ5VXAZ3pQhdkcQcC2VdWCbYD5q7pwt7HRyvyfUmbibd9856n5FPrWNgm6fYU8f9mPbpWMqondDhnLJ",
  "key27": "57gkYv2rPHxJX4tmjiLsmxut3sPmfGei1ARn7ercXnCJYzRNdcKFruqMmUJuE6Jhzr7mPA8a79ixieR5bmLw6VsT",
  "key28": "4Vho8URjMDeXaEFrjjJMgr6Gb2E7zVLqqYSNcM6PsieKH78my6CSwfk5LtsP7HUGgtLcJeuu5esEVZjSDgDkFNqN",
  "key29": "2x8Y5ZdSCwDyufxPNefAyEsPgyKj8bTjB2F1A5e8cg3spLr1Nezt6BPVq2CaJ1A5wXQMqwASkF22ysZHz4D4x24K",
  "key30": "m3NRQ464yHP3sDKGDAbke5SAyAkQTbrg2ifRXC9udRt57BubQWei9CxVFTi7aM8vkDqcgp6a7w54oprQZ8XiQbx",
  "key31": "Zk8gHcTfMTKpaYMGszB5wc1DUjFkm1w9ijj4TeeubviWqfSLdyUHjByrZ6EQxLHQfysxF9EKyAKpufK4gCbvyGX",
  "key32": "JA5BrcK9pXwVcGrx3EvGHr8mQQCCT87gVFzhNQNLkDvTpwKbPg7TB3hYfpX7BFDjbre1AyH99RfHd55ugvTFyHa",
  "key33": "5cYD7nbPkrCpckm6e7qdSxJkfWU4ZS8RSe4sHR8pjPmSQ1FpESoPndJjuvJxUySWnLxoxVkLMNbywDdt5Q98U4rX",
  "key34": "5WvcyjWhkJ5WY39cv2b342pDURUgY4eCw3tRDhXeMkc7utV1jz2qcxcmKGzQ81bVSNdRTK1QSK5VJtzB23igkZEW",
  "key35": "3CYMh1sESV7LSuFb2PaPQNkJPN9RRXvRjxScDj7Rbi5FEh3o6RHhhfzzK4oWvRvfaznqwuo75WaGmXzeTJKPv2HY",
  "key36": "3A7jqe3S96LbiqdbkpfErFqYSqsKFXFxx6KqupFReyAatz12bDjgBvJRGzrHrgUdfvSzMzwefXBH3w6oCKBf5Njm",
  "key37": "55GCmkHGLF7DZrjvPAMDxXeckvtqe5EMQJSjyaHtCRD1k7qPVYwiBexABPVfscuUcDiB6qsJ5hjNb9MKmUt4NBUU",
  "key38": "543fmqkAwL6YqKW4GC3vyHrh2Lrxmm5f4r5JJDvC1XhJCbwbsPx5hUxqq9sjEZ6ZNwWJeteHFMPPiakehwdqSRQc"
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
