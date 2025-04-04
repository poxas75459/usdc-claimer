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
    "2hroUREGtPg3Kz4xdywEdm6APDCdBwDDyRfC6qQAcmXAV6QFuEpPVf1LeLmZB4jg65vRRNAf5fhxwxZSRKoPRQrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vD2iqd7p2xx42YHorou9RxfWGYkZoCUAxeR8orbYSWUrRT7xzRjGaPQYhMGoq7B8SoEiV7jDhDtEaHEGtycjfu4",
  "key1": "3tukCpKzc3PLVGS1YZGfXKMh8WVBSL5ajwQxkjQ11uceean7rEBARFbCr3BgLn3eV2pzuKhdNpCghNL7SpifMken",
  "key2": "3CTyCd37w4mVAkHichE6ANU1kLNcREM9s2NCrydG4UNy3JXKCiiVeEFpmT5YxcpVmgbjFnMK3uUUK9iXY4UG1C5i",
  "key3": "4XmvGnRnSvNfCj3F2qMuzeLQALqF8kXprLnKm66o5rYr8tikDPHgr9dA2Y7m5eQZ8yHxLDNR4ZxCxoPP8ZXYHjf7",
  "key4": "2XCJLF9yaVDrRZF6bDckHsfLCxYPKeBxAkajXuA4hLSPuQDHe2CbifCYj61QqGnQDM2tikaye4XnXnRBL4xfFvyH",
  "key5": "3jho2jqiejgNHy4oyJwnetmxEdWU3fE2WktPJXZf3oqwSAgfDVo5tokkL42PJA1pTtDqrpzCs4gZFDLvxsZREBqQ",
  "key6": "2LQLhcAPoj1LA1r99VBjmTxvvKMcmQGM8Y3wUAQehvguAy11tBWqoMpEQUTz1UG2N5z6YVsMWis48ULni36hSVZ2",
  "key7": "2DAwhE66YAL6RqfUs3XvQYYcaBgUtqB5ZR3k2dqhvdRHAooRnrRYGXK3su69HW6YRYUR76GowWLXiAaYzoy5BLX6",
  "key8": "2XMSPWVQVHiiUGpU735u2wA59fb7eAioqP2nMQTBGMGricDAfZqVYLLgrEfDdGdK8CuwrFpkiGXXvKMEeKH33RYg",
  "key9": "4aXzmmuPdZXArAg2ynSWmVgErzmcAz9ya1yYU4D88QrVp6V7qyz2i4KUokFAkJqcTyaFHh3W3RK3jpnKAzNJXUmN",
  "key10": "4YMxPYPPUnqBa8B6Ki4cXkzurYUuJRKCsAxG8CFkrjKNhqupfxDUudnAR3fnBuG9mkCJWrFXwsyjMVgwtxCZrhgZ",
  "key11": "4gU9NNWNHhvkJJXxgJzmT2yZ9QgEDDpUXJWVYuUWNN2N68TQiaQcDjnCNwXoARH1MmGFmPMVndAiS42RX1cKiexv",
  "key12": "3AdS3H7iN3BuAbSkWuZf6kKjpS1JmwnyXDufnnroPUFHf8HYKPnUuovvztcyNo1ZovuFqJhmVa2QXFBsP8gX9yBd",
  "key13": "2GNr3GJYsJ9jcRg8rHNeE9gp2CqiAQaXHoMczfjhLxJ6teTDfyytfXwhnN5cDkNbXRm2Jxnyv3sTtAxpmyf23n25",
  "key14": "3Tszmqx96wGmUduegLhTiNTsJigJM8FbX8kEbZYvy9SqUxUFEgWuo9HmUKtfnuKLk1RHJ8Lwf7WhRP8P8Fy3srDh",
  "key15": "453faa2hunnufSpyQa1pTuC9bTzoWpjgLsv6g4S52q2gfxU4RWZWF4w1sUEotHtBT49F6kwH6t1v9XRtAysFYyzw",
  "key16": "di6VvZjJJkVXLfPbgWdUsM1EXP6bF6gSCFzQMhYT9KQHT7mgRwvdMLthLFYnSMjWVesXHG1zw65CiRnFsTFFXaF",
  "key17": "47reyAvqstLNhCJq3ovQ72PfSBvzwSHPDXXzwQCoBP135kjewzUSRmNAu5BuKmE4XDW15JirNDmo3z7jH7XwGY7W",
  "key18": "4fdaXcGpVfd7KudncVoWqKAoYcismJnhWenzTJuFUT4hQBbbVfiNzz8GoH2WUdzDcAoPk3GyjeQSBPCfSn7XaGqR",
  "key19": "337CA5B2q6RtJJo2rwVWLfeP6DPqJkfDMA6ifVv9KpHVEi368ZbboGRTDV8zAHoWnKfTAEMt2L7qmK8rEGBEbEuV",
  "key20": "2ACiCdKFpvWREwyNqBbSq28KqSC46yhGdaktX13mDQpdXHMLByEMHdFNQCycpMRhswLSQ5ou3bxMAMuJRGdXLdmo",
  "key21": "3Zu3d8VcLexBbXwkGYQnk3d9rN3ZBjNtbjausurszpF545KmuLX6FF6zpST1GWeqPtnMrdF9qQBzsh5qM9pUHXqo",
  "key22": "ApSQepRFu2hAYfkwgCp3chwqc1L3eip5s1HE4QGD4NhNV48qb8KmsDtXbcXBzaHzGw9CJc3KcjCHJptSgHanvWL",
  "key23": "599RWf2ZYSgLtbSZ1gHpvtvxFr34NodLypm5YgwdKpcGMZspP3UvjMoA1LxTjvF1DYMGNWtdkLLQRHswKY9J6yDZ",
  "key24": "2seAGCMPdPAum5d2tJu9ZN9RuawK36cb2HfkutmsFEqTzU9nd78fK2aWjvZBaHboHynY5vVZ8HZcoTskWZqAn1dJ",
  "key25": "4828J6ppc4Swt5zxzyGJiCqiQQfUKg5Af3i1s5GCQddgYqN3MqRMeQv8AYQAVdy61i9KZ5myKBMbbZ8MXTHDJSys",
  "key26": "XiQ1kxtx9U1Yx5SMxh2zzEJoGrm19n671zf9dR56uTnwAvomKHWSkPENQtKA6BJBRpBaLURRfWNyetBBH9rfRec",
  "key27": "4gV8vLHvkJ36Qg54rUyf7ui9Lcs9kuwGgnobQCpizAuFdCJEYFEuQrkRwN7V67DEvk4g1F7mdgdeoReMWni5CWxN",
  "key28": "4aJjUiVVEF663YHu2ywekFduAGSDsiX96BrAqD5rtLgXhc55M8qWYPKYRC8uQbXsqDhS3KmcvP9uiiYRBpwBRxvW",
  "key29": "2UJXjuDsPNwTsFBChvYYAwSSWVugtekiE32bpg3rV9tgmJ3gQHxCfbxbtuBTnCQZigBnegSEXMN6RSpkmtEq4ZS9",
  "key30": "33W1DcKHqfM2x7Rm3QJM4VqX3g8YHQZ3hTKvPXiMBGCBkknMYoAHmN6aJPBBw5uCtKQz51kh7aVL55apkhwXZ5Ud",
  "key31": "XhdkhRdrTSuHP5qzECosSrH1RUmB6PD3VYvebs9iEmViguwR5HRihTF4ibnNd79711z9UR88517XrkCeT9JBXt6",
  "key32": "aYBsFhPwPNtY8CuZ9AuT2a1P8b2uEaDYgCyw1D3GerfuLCXYnU2xFDJmcEcjmRYEjsVZdGMdE89Bxmrrss6m2io",
  "key33": "2NTpp8yrA3dDrYzTKhisNWGQHpT4sTQYRFtp2B9wkGhJogtTpoN9q1TsGQhZWyGYkprbQMQFguUBuspWuZZ8b32",
  "key34": "3bP1CMtNsyaG3FJqPWmFFK1Bj2cgm9eqfqF3GQeGtk4pxRzwvG3UnmBLeVJrCYmYtK1py67MdEoCnWcAdsijPt7P",
  "key35": "3Z92FuSe76L5t4TrsAPx1ipy5PNEAZ4sUA1Ss8xtVvPMSASCf2DxoBfWBEHP6q7eng2TxFgAY9Noao8TpD7KVSQK",
  "key36": "3tFeWWw8bzYXemdjN7HvvnzxcTFcKpWYLHTH7zuiq6pf4xqDD4XNP5z7QGiGE1ny87iJ2wrWzWvaPnkc4GcRJkKB",
  "key37": "3jnp2FwdyksNoHGMAhZcHrNWZ47DBxziKap7ArFPht5CpxxwP2M3seVAswJ24YNRPLi4qy2xSnZ2vD6EZb2hjenc",
  "key38": "3CkE41fq8APmFX1LgcxfQXMuZMT6ciq3kL5uE4WuEUPDV1hA7GLnX7NvWP2TfRWDsheHLXRGmos81D59uZ4LRU2W",
  "key39": "3K7D3NJiwBRLv5xJSxPYmdHBqy5V3qFPghzSA5YM7EE4eWMrUXi8UZmSmzTLVZgVcjJhDkhze7UnU72i42hprCJ9"
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
