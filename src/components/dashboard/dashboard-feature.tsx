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
    "2KCLPAxthPJi7QLVnKZMuwhygmxPF3QCHZqyT6Dp2CiYRGskZQBooHLZtg7q3ZACi8MV4fxeQQdTxhcnqPnhj6tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrnanzkzCrzWs5p4bzGy8pKkiXJbvNecopiaCCdqAcUJnaVQBwsHPe7z3nVMChxYzpUBMpGfNBdoYqmSx2uYphN",
  "key1": "yv3NQV1gjvMqCxUWBezaaeu8odf1LLj11CUL3jm9aw3WUWMNhNxc7WhvNuDhSmJAGy8mfCAXdHTbkwsseskDTDr",
  "key2": "3TEDpjK8pTEWrWF8ME8JPjNAZjNNp12XvtwiUha4d1YmuXSQtV6GBE4m4w8J9inmBXkk9uYHays9yR1kefK9rrdh",
  "key3": "5nT4fNZbVhEoCAY6rQLeop6R99T7Pxuv9GQdc4dMdHtLrhj7WvNqHMwaM5zdfC2ETVLhDGzvHrxZmaPpVMH33Drg",
  "key4": "2N9SWWUEPi79U7g3uaNBpvDt39G9jp6HU9QsSpzEwn1nwS1Uu52rAXMtPzuHZQpnrgb73ABWvd5LJsC7iDsUResb",
  "key5": "4Qn8NRK3ECimch6ary6H5kDKm6u61BXRcGgLNrD2KBdEpCWe6hVbxXXYp9DDjvodcPt4CCSdoWPMNAkUrs5a1DmG",
  "key6": "5aDues8dB2ua4seX6wJigdbgNXiD1vUicFLnYH1Q13debc7FXh2nwmZsCgDqhibzV9K3xQCZHReVuv6tV49DSdGe",
  "key7": "LwatCppH4X7ajLYYVqzYKQ4W6vty7zbN1gkaAuPefWrBQVoFhU3aUWPDSemY4H9MJZE9xuTvhsBfERSFqGBwMAk",
  "key8": "4TobFtGEQ4Cs2goEstHErvduuK3YPYSFWVTBuhAUGHxxzdVTzJoUfp2c4KY1baVBUMU5T7jyvt9P57GgfUEUyC1x",
  "key9": "2T513pxg3DYyXKSpp5zj2dk84wkYMynVcgJEQeGagXGzgKc9dMNjKprUj5UKqgQYm56zPbSUneYk1PWJyNNoht8a",
  "key10": "2ZwcjkTsojLb82HMp9wfppL1c5ytN5o5e47QxHBKaRYBSbdwhwsYJHqihqDFfkLuXqkcFrDR8uAKbUW5A5x5rfUn",
  "key11": "2M2P92Fygh8U4o3TeVJwMZwJg2JnYGyQYNDG6RZCBYxovyhLcDY26LWLMWDzErtxwgKiozXzgtFHJnDZc2jeyjG5",
  "key12": "3XivntGVcuhA2NLyd5cRJg7DPPQDGBnpShf3ZNLRWsWRumRGLN1M3qsX87iXMHrSxxc9ARQTHdnXQeBCG2T1aTTr",
  "key13": "5JuMrJmFfEDD4zCb7fXYYVniahDqvYgGddGzwM6NP3e5YSW8oUbxJKtv1q1yePstdEZY8PLChpiXQjfEAYWdM8Kw",
  "key14": "4f5stPrmicCWpChKLU9tsUhXscA6v5ajbCPTrEEv5KW92XadReK5qFcHDU577pAMyVxTtXVriXhG2ZwWEZGN9V8Y",
  "key15": "jxLkVWHjgGhFzDwVQJVXBwMj2cKKcXSd2K2AZaVBRTfBhyDJ1CtBnehs1vYhehuUtwqnktx6Y9qSPLkitGyy98x",
  "key16": "3aGpEZxAYQ9BcWyNKNbzGipbdtTx8CDFdyChBB25PB9fFKvmBDEsPt2LR891qdbDKQaobfW5TQo3vstKj77FtrLL",
  "key17": "5PyjHQpUebsPgtQcTQH481LNHcZXnJuTDPHvuBynUyvwLQuXa3Nr3Pkqvsub6tgFLwmwfvH4T1HPxt7dHG1WMPpa",
  "key18": "kMrLEZbWorh91eAJ5eEUnCkWtixxmNSq8yX7tNYG8cVb53AX2eP4RN1xPHb5t8xfzTvQnZwY6vFpHj3Fkbjza5P",
  "key19": "3Vg13rqteCwJWmdh1rwFNjaYD4LNhHdSVd1jQSLq7WWSL5DJrGy8Z854ixa92h4bXP14bAWCQtyWsrxFabFKBJYs",
  "key20": "3pFQhvVRVeXTxo33ZSRFQWMBTU3exMDL8hF6Mmg8axv2i96ChJMgknuccUWLNgF4LEVd8mCosVkxEbrta8pSeqUW",
  "key21": "5VJ9tGYAyJSsjAERDxWWDF6r3qq8Nh76KhoLdMCzxRppcryhntt1MxgmAL69aACkhSTv62GBjUT8mDNPFCpTk6ao",
  "key22": "2KzBirGBEcGdsDAUT34h63P7fba4Kecsx3GhhCYjQqGw4qFDprbasNujrW2EyHBGkbCeTAXao74ARP7GRAH9qRGe",
  "key23": "4ZQkwNvwJE1LcMM7Kfbjn69FSLsiCpAsvPzGxZzcqoZsLhGamonihvLd3mu5KgWRLBFETNpCkwfKnLDLWz6wHiVU",
  "key24": "3tbjzEPmiVZdiBK7hHYAxk8o8FMmFhrbcR2egTCd3qTpRJSPUpn1K9FqhHtytwrQgSx9MTxF8ZQS2GtunN5xhD32",
  "key25": "55Vtp3aAEYYLEvJJtjLDgrd7u7mnjLiFxN2d33rotrGfiUcK46JnhLvK8HMrRvnbiKGuYbmrHV97wN6BzQz9C4Gr",
  "key26": "mScRHZPiEKkJ1HCFCcn8NKb9kahrWDJiyWNZqdH2tTch91qNN4a3jvSJH66b6TDVABLtkqkRTV5GFK7gueyFMz1",
  "key27": "4KEmd9jQnzkipT9LhcmHdtqLJfBrVcFU4PGLdxUjg9KKwLiRLtPNpa55rMkrxxRaXYoHX2ztjbksy3Au6MMp6vLd",
  "key28": "5cDTQcXKfgpFhakNXdYd8b4DVM1bhUJLzevbXkwBD3jGpRFRcNDEVpVXETdG6aAm834omBKZ3sZJit3SQqqfMu6K",
  "key29": "2H2Lb6zAEu8Z79yfjCKMCdhX5qTPDHcuibsfs8djTCsoGtfGxLLXzTwXp3D8xFvhYwB985QdUDDXC1NFvfFwqsYe",
  "key30": "4zpCkXzMs9Qe5827uCqvxqQWfuhqcdmdiv22xyto5HBcqXfKDfxcdnt2bLuGEnxPfS3kN2dim2DGgN4RfHSV1wKk",
  "key31": "2Kd8sYthtXPfw5929iN9PfxALyNQc1t6RTUtRGURriDm1YkrUcMQhySkdMjZybpviKXvruaaNdHi2enAYY2QyzWR",
  "key32": "4yu7iYStkWcQs3Y4SNPaidhRBmBxzyxpgtmfRyySNDXWh3EWjsQQZn1QDyN8cjP2KFDsvZJYGkQxXNtDpJwNGwjj",
  "key33": "2G6j7qiNZL8gEPMjE2unYT2SbayPqaeKX9btm2uUEtMxLA4oQaVpkUdDGQQiV27ZwdktgT9weuAk4fCRdpYcoHEK",
  "key34": "4noaxmoUpszwyQpxSaxukCJrThNtTnYUXCJ4urJz6C3xEG77m4n5rPW8pYqCcpZhAveaCo7bKZvNosMqSdAP1X45",
  "key35": "T1JHWXWzy517G4ny3yuUoYtXpvxHM27hPs7BNs5t2mkpTkmEZNQnm9PY39aXBkDujdvG6hWFj5HZeAYSEAyJ8Ep",
  "key36": "hLkqPrLGoFKsD9xAsTBqE5RRgQoJjEGGQ6hXNRceD3arqrw1Ai5jJK6qn977uQEcvrwWn6vV2e8tUMZ1etrRFnC",
  "key37": "1AgXujcVRyJgEi2JBeYqZxFhtqZtbA2d2cjqaMviahGu9T4Lmp2d4GFXrWP3cmmxWMB91KbhtUgWKfToeeAtCVb",
  "key38": "35hm8dZWNbHov22RMBo3E5EGAuNwBHTPUZmBHmMci6zwBC6qC8VnuQGjD2o5PS5Lm47uqLz3UCVeociuEZdDn6fK",
  "key39": "vL9oiX7VNd9gYA1N9t1HBRsnxTXXHSYGEXTkHwTpuwPdGHawDmLfvPehZyZmnHJJtLdndYZfjYJZF8juBR95QiZ",
  "key40": "4sUD3wGqs2YDHmePMTmTNPjMUcB1iToGLXCJThm89XGEdXnd9Hfh5EQ5gSVyoagsjCpcCPtUZsWYZbdVqn7gu9hU",
  "key41": "3znBcDt7AZZhWDx87DWweGdypTrX2oY5NMfmdfLdtGJtHh1pvG44nNLwmRa84hBE9o1iWyUNUdkhzzVE62po5Dr3",
  "key42": "KxUgFPc7BEyzHbZztyCFgpVdT4gywQ8yhqJ5SzxCG93M4G7mB4hyMnabZDarJE1bpvwaafjvCnzeFj8tWcDkrwP",
  "key43": "2qSBUrybFZEV24FGz9HDcXJRUpEUTDtP6VjDs4uC79nmNmMyBV22kAxKF1RheUJsvhd7oh6FnZppJBqqJjYLMJYL",
  "key44": "5qz9H32m9F1Kaw26nS8zJcMyZJRQheRmgKfb8taTnEggsSQC45cZnEUsidcwyHG8iFyH3q2HGiqCeatbsMYvGFkQ"
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
