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
    "3mUecKKr78MnifbrvYwpgphrruRY6SeVeejZsfdxMxVFoddUKR4Jdb2PredyqDd7jXuHRja2T5XoGcde4n5Xz94Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMYuKGWxNT3jog9LRuiYojXQbYTbFTyXTy4QttDaB2Uzk33piLZqtDZ62AFcanDh1E8W25LiFAWH9u2kg1hfHAQ",
  "key1": "2oDjumqvFmfhuheaaU9zieefdnx7KyEUzRszJXPe7bo8mVdywVHiQUGHtsZyde8ojNcDDRVXiatN8nyENZcfhxwF",
  "key2": "uf2Txvy21KUK6jTj4QaJeZvFQJxs2A8atb6YJxTeWSPUbHMtai7uAw4KZyv1wGggdfqYM1wTG8hjnVCGCdqqRrN",
  "key3": "2Q6E6mGFsKmGGFRwoLceEgpJEEYD2anejFBom6fQm1S7mqEDUpEQcyjpN9wYNDZcsiD3ngbffBAUEiF6zbDdLmed",
  "key4": "3SWCNChSUVKxT8QMQgqZBUMnPARvkq5c7VwYz3yhTUzY9DfUNWSst4ZXXEEQpN2DETpLe6XuAa2MLXfgNLM5b773",
  "key5": "5qwnX11p8Yr4sqrEynWZRXinVUKfHWEPEC4Rt7Z5ERddREFAW2PUQjHMQo36uUZpZsGi5LNM9wqKUcSQbytDagYf",
  "key6": "2WoxS3w7NSwqmvEFzHDUy9QnNWbg49k3XTQsyzbhNTkGrastLeb6Fj6h3qXxh5JtNHfs9FrL5gbsmpLBMXZoqdt",
  "key7": "3XFKYCWMacbBL1M245FRFCy7VdUjcFETT2AFh8NwoFoMNGA4hBnPjREX8qNY1XCtDHjJK9xvfCRhfxpgJcDYpuBe",
  "key8": "3hET4CSPSN5U6Pvt2XakwsVVVRmak1VD64yFqVjUaAwoeJLi3CsLtsmVjiAbZm45xjr8B6sTKLqoGN6v9ytMDBq8",
  "key9": "291ySCJqb2cmtUkandrqosMe17tkmFtAXBKkCFBkDYFxMR3cxsAcDpDiku7avUSREgv8HrhpmBDro5FXuV9iST7C",
  "key10": "3vMEmYh7dYTc4WW4ZFhNQ9gAqhrcscr8zpr259NkAAQEU1Q1HjCminA9KjHBH3cBgjW8qENwVC7bPKaLCLD9UHEG",
  "key11": "3NPumo7uPuSAZMhDM3dhdWu3EJ2k3Xqi7VfmRHVFJnwoW88EVjRZoJHLmvLo8aiH2DJJCv8g5nSwUrroSBXxqrAo",
  "key12": "neq8n5KU9UfNfNWoFTDHD9nJPUKtfVMxz52CrshREAseCwXXFhKF8Y4nhVwqv31y5jJP8VTdshYP11XcQiWocMd",
  "key13": "5NskHMgqVVktMCukA29NFqKCAqyvFoLpE7daWa4xf3aa1MMFDJjQM2Wc5syc246Kw44H7KRaXMo6sskdUQhWs24J",
  "key14": "2uMdgWLuhZL9f83kxeKSaU24MngUi5cePHsesjyJFTXaydkJ8eZeh9QuLEUTLpDb3ozHvFYpG8bWKc6kqjVvNnH5",
  "key15": "3a5nX6DBgqV15dkFGxAP7pWw1toqU9r94rfuZ6zwMAmMgaB8obby9knXbqZhwD8d235QwizkcL335n9mKtiJ5rNE",
  "key16": "4mMMKF46Wdh8vnoTgu7VStSKxVXjHaDSxPXVj7EhwiU3BVUixdG9hcRL5UhUfQ2Hz1hXEq1Kh64dp98K5ge8yWQc",
  "key17": "4sekBAJh4K9AetBSRSc2krywNBojf4toWxqAzCuJ8xBvMboifRVn4P4yndKS5Ur7BbvVbT71Ye28UjBLdoJMgLF4",
  "key18": "5K6hgosyJ7pR9UYAW4rZQ2kUhLUfUk1BPjhbdnUba7UYZ3JGzkiPzkZKGt3VKnvcPuMqprZChH2QrC9vSbik3iAj",
  "key19": "4cTmdSHpgQCH6SPmgZdeoeB4htb7v9hZxu5pwFpfvEC845KKAcnmFpv6irDYFgbUnSnk7d6GxfgXLHRte6oK8CLH",
  "key20": "4djR6TWkrPqdQ9tSFdbqDHkHnAmP6zFHiXbcwJPRuczVsdESLRfDwc339nqYfc4NYyntj9jNiN3z15hWT7qLGc2D",
  "key21": "DBhHXrXo5NmyduYL4qyPYY2dwuGNbi3XAgbTfiG22BPpsA7JqDse5CHD45y2BPCftLLJQhQkiDM9Fhq2JzcFaJB",
  "key22": "LRKAkpZAZrHa5hfdNZpZiQ1GSBUHC9HjeBXtogXJK487z6cj3pwVVUL2jD2adv73BHXk2x9CLBjXEQqHifanGnh",
  "key23": "4Vv57oNxARynkNCMbTd2aJEWiPe4n51x9wYtezsbGdKv2N16ZNyMkTetpN7E5XLBenJ6vUMZkQ3PCzj6mpQjUGfc",
  "key24": "myEGi9QrWhHMtUFYS4AQWWuUEWDm97NNwhPACGfAg7p678V8k9RwSqaoeEYAg9LFn8dVAQhD7d4jM1DQv1dFqjp",
  "key25": "GXKt6VPTpVEiJQ1azRfvGUznv1dGWwFZnbaJKvRrDmxQ3XvvJFK26zC58CUTuXUX7fF1RBiUXGBv6nxqWzLsz9B",
  "key26": "2AuqnPF9gUCzsPApt89vpFX8KDUkvZxHnM12c6S2cpDMy84HYRteNFALuSNBG6TjGYxd4PdUu31sdHr2EnToryCj",
  "key27": "4K6QN2843r1NFWWe4TyR17WsmCYM2rbttniRHsPyK3Gi537vKEe45tMpU8A7zfF4DWi3SKYkAWu6Cmd5PFkevyKv",
  "key28": "3unn9JTAh4fzHtFYD7WY7uDNcjHNciJ9YzSyB8LqdedX5CK5Rg9djgdNCA2A5iMLkVCV7QDFVUGQbH8HQB2o2ZDR",
  "key29": "GvSGzGm9LrHej82GuuQ37aMTNQ4dvEwao8rAwB5r9RMotPVPArdMFLDDVzZnGDEQq2nwRMF4MXhEoy4wdDUUh9j",
  "key30": "7YsC6pSn11tTDgrj23PbrDwaU75K6yt7BkHiSqgN4mKxn4x6rURyCDzkb8L63KeTJbDYcuNrjzABMgUBc1kiDx8",
  "key31": "2mM5Spw3Y9daFTV83PYEpdRLX3Z2BmG9FsHve9inpRKt6pTQ9zBpuhSHuSXPRTWvuwLMosayBvYhgpr5AXiy3P7S",
  "key32": "3H5hHjMKZPEmVwJBGqA7jrxEgJNjHtnngYnkzM8tgYxz73L397br94p7ddcmMgCkAeyfW1WYbaDXLvVJd7ydmNTn",
  "key33": "4eewsHeS5NXEsdExMWEnddNjLkBJ3didzzZAf8wmD4qnQzYnEepH6UhBiTSaxxu2McreWXZD7Gfv6bDV6JVrsfZ2",
  "key34": "2RqVLHnG84gsBJf8JqKZHz1H4qBuFRCGuEqjFozpeCgeXGAuDEPv83kwNwhCgfW4UW1mXgG3d6Fs4Sq5Mek7mDKs",
  "key35": "2cB5yBobvJ554uYq3FKMavHBnqWWsogMFPYRadTg8p4k62Tvk88KqYbiTbjPLkAi2sniXXcGw74LDnue4gWo7waS",
  "key36": "3yQFf5ZasXALbVmdVLduQWwxnoBKw4mmqiqbfV9yYTwn5XrWa5SWoa3kWrDTF17ncp9M5rMuXyHRmmHCgzXukjoM",
  "key37": "5uoX7jnDodeEFptZgTZcV4ew4FmoCDGiH3HD2PPNEaAUrNS4JxFzvqtgVwckqACJGcQ4fWyE7DqVtgYnUuz9FHZM",
  "key38": "5RH8eGkAy6UwsNRgg7owWrvqYazEhJuxvQJ5TeErBmnE1R8dhuNL8pupf3nLt4gdHQ2NAz8fKEsNaUBxDbGddzZv"
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
