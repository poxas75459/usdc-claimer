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
    "4GP7edVqehkhLvUBPMbqGKvrkwENUdGHLKitvhk7QCH5Py4WtkkvuRqqRDUeBDecrWah1ZZkho1vfDVo3zzPXwcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ooTpk6Rcm2sqXGaGDdkkCNB46zh7iqgzUwxCHmaUkbo4yVZZ8SGQAtmLG2F9E32iqMZafBqkU4DUSyWNuRfiLHq",
  "key1": "V3RYe5MfpRgzeMxGPf6pD6JK7bAtSeqcqW55xiLGdLeRC7GvDRYhhxT5GNWGPArkefAdvnDTP5xUGmDiSK8DE5o",
  "key2": "2371JM4z4ns1yXQkVVNVs8ZVyjL9Wo4Ytzqhe46w714ASLcGNCmChDYMVyRq1Hf66w7ebiBd7nRYX9TSfE77tojL",
  "key3": "5W9WprZ7azVR3GxXpsKmNcqLQX1xoG3jCmiUS7oKFJ2tXYh6CCc1CBMTr1mjoRDeGx8qM7FP6bVizxnMfJLSBGre",
  "key4": "2w6ct78MpuyPKjFoEqqs997U4iyqMMoE514WojmoYtDy66LAJ2vfissEYVmUPVFHU7J8rnn6xTToj43Z1Jhy1n4A",
  "key5": "2e1chNmWEi3PLnewBzZYgVSXxvBaXicJcHndaqc1ZjrP8xKXLr5sBg3Apb1xyPBe5KVwb6Wu4HJ7zUQuf4aFyZ6q",
  "key6": "5pth2bzohNNBsiWuRcRu6wfugSN5AyGyvFjGmrovc5sFoRb67tBeTkBFrptsNWaPtXFtDJtzDcjYyPRWjPM5DbMj",
  "key7": "2NniLWnbeYGFFzt9MiADv41Lbzvkbbkm7mwEmryB7uPTygiwwJZEWK8QNtcD5CQYbMYby3jWa8dmusTZoUHBwsze",
  "key8": "26QUZ9xr8rgDKmWHCFFJ4npZQFFhCoQYhrm4vo9Xs1f12oT5hYkmmtqFToQpQ949U93VGWghZfrzUrRQU8RPFTeZ",
  "key9": "5bC2qq6geRB7meHj44nXXyJnStnR6LMxeM4uADDwTkhDq6o6UnuiQhZBEAwodrZgDgDk8FFNnjTWAyuFVivw2T7Z",
  "key10": "3P6SW2x2obrcYiB3rAjHQdnCXkt86AWdUgYrpvDi92RrnVwugcTJEhztK5vVMmyKGrMDHzefbknwMf12R9427YjW",
  "key11": "2anPm4MmJynHwP7sXd8dvZwKCdUUCZhLFTqtA7AGbbRtJhuL7v3XfrBpzrJaA31prENMzb7oevzVdsJc7wSto3Tj",
  "key12": "W26LPpQRt3keBKhZgW8xJhPaZyg6EBJQrzJT5PoemnMtLhAuaMVuh55xv1GSdB3eLrNPPUYCMo5zgMkrYBAtiYD",
  "key13": "65WfHKgX9YxubdwEqZisbuaqs1iXZ8mK5t5tCYJ8RV6r9XYWFVk7Js1hb1JCSdKaSFMYxmnUGeLUhTcxHdHZe7aY",
  "key14": "4hGrgg79X42VQ917cr5EdK71HZwei2P2hAHCBbbipa85hZNA4tknwzzgXd2cpdFPWmkEvC7WZ2aWASrcutEXdjx7",
  "key15": "bcHbNyj9kxyMzaXRXbLhUBrwUAyZRYr8g188udH5DEJMk4SKrHJeiinLZVJDQsMPVbahVhv4NUKqUVjMdzMFPEj",
  "key16": "3f6PdaEpee7itrijyRN55zUzwkf9WghoDC9TNdwaFmtaEJQT67LNWS7hkLmY3brnAscuaaNVvC6YD3KCnuXu1bLV",
  "key17": "8cgQdgp3JfiE3GQFBp3eEPkFUPSWDSmHBdHNanLg4ib3s63tXjYFKPvbPQjft1ZPGk7W3ndKJvmXSoX8rESRjWZ",
  "key18": "26591eoyjCEjcJTq2yTNwiFKR9Qe3Sfm88VuajKHekW9cJWHhcQjQE73tS9vJB4S7YaMhovnhvxC3L5MLdxwqYkb",
  "key19": "5oZpffVV6qkSS3qEpN42hrdxccmRvk8EpjuZbrs7ZJj1Y289kmSKL4LtsTwsZHy4wGhziNqt1QW93nta9NUSnfcx",
  "key20": "2DcSCZwMXkR65cMRTrEC3esBzTHFenw6BbpvYBovQn6G4vTw76GyWZdptyJJhbskuH85KgahK7JkajS1uxgG13hH",
  "key21": "28SEvAUReafxXmbCneis5JQ2hs9geszTmfYeBMbJDPnBkVVLrx9bAAdGzZCdQhq3M8U2jN2aJLxRXeKeSAFUmwxo",
  "key22": "3RgoE6mbvovZk5KmmoxrD6LLs7bxBeLHXxbu7d9u3tXw8HREnTUyomBrhGdgDfQjQTCXxDM7pXWZ6VF9DpKs9it5",
  "key23": "5v7KdYDfzEFyMnesMmpA5zZEXevKoHFMRgqjWJH5gxNepTmw6yurXmfWVZzv38SUkHXrmzBLU6v9YgzhEpKntsYH",
  "key24": "4xwc85sAHYPZfPLdvkMSAi36rMgvRX89HhcCSixcRFp8VSGhMN6HVcYETRTxpao9HdAWZVcVTJWb3nnvL8KDzVHs",
  "key25": "3qZFES7teUx8S49wuHYXt74pbm2Ln3tp2UwDJtBHuWWvfMtgUXaAvUFv6d3cBi5F91de83dwZTwBFjKyQG5XXbk2",
  "key26": "4CXbXBqJ1VLUWTXV1hx2JuYdZDS2VWnJAZfWQ1tnSrBXHz3DgsFmfgDqS7MfPvWH9gFQQhVznRGNRsnS98ZrprEk",
  "key27": "4aNb5EVdidLG2xVo7fMgpgWryyo9c1RuQ1rgcfW8piKRXP4fxXsbur8RmFNTCVXMreAJzEEevhEfTNgpTTXr5ucf",
  "key28": "5oUsyTncJrhxwJbMxXjRVmEHLtAZA5wcSPcnXg4dZz1Tx7NRZEqKF1rf2xExwHfeKT15oRaXUNJranuBbdLecDYE",
  "key29": "3enj73yRABwSayr9mpRLxhsy5yTHsDQYzc2bvrX8tsGoqmrvEh68wnc8JJh47dfzqiGkPnnC2eufMvwa79mXPMGW",
  "key30": "2shzocBUzASW6EEZKKAh3pokrnSPvNQNGxmkjDRW2uzaBiH7sCLX3Azwv1YCqZ7qMzsuDqbdzbsTyV1ULAaA4maj",
  "key31": "3Yw4Mm7hVW3xtauHcWQtssHiCXsv27tkLXJeJtHwGUYjeuAsKieNuTY377QWJpVnEzSWk9RYbWTK5wFyNERTtfxL",
  "key32": "4RygShPKSn8VVPVaNGeAMBSGuJg9rBc9ZGsT1CbXsoXcnxDJKgUJaHKJrsJGRngoY1m37iSxvGh2sLededezDudT",
  "key33": "38ZNtZRJfujQnBeXcHATz4mBwtSD1FxfB11HNz6TEWWcvnp94FJnxvbtFJtphGCM6eHyxYnjZ7gk7ZWugfddoAQW",
  "key34": "5pb2zxRkj1fw6vNhpWsNcB3GAgAMDrKhzashbgP7eR2ApFmkXtawrDrDwfLjVdCb7yejUeXewTKzi2ZzoF3LiAMp",
  "key35": "56d4sxd4J2QAjvvJu3hYnMcMp2ZCP3CZV9nL9RDCYPLGkfbCotBVQi3RxtFHVMwoSXbuUabi9vXGEV5fSekNXXgD",
  "key36": "f9DFM5ZGknXmyCzVQG53QuuPgDsNYwM4VzBZG3BDAnEoeCEEGGPScRZbN63HvhYEdYGrKShYMCxcdGh8zXXg298",
  "key37": "2mK8FeqKSUCYU9amtahbgVZwTNWmzL6rArnzMWiJM9dnMDLgsLCX8pnoTgtmw4xQPhV9RVHrUpFTAayYh6qpavYN",
  "key38": "4SGRvYvKwMU2ijJYNiprH7922iADfUAPF4FwLeMCSBkn8K3oV1unMw9GfeB61YhdrxpgNJUmK2xE1WqHpnuF6iwR",
  "key39": "2QKtCF8Jb2FmoTqrbEhevJWczUbxfq2s3sNKNFpHVNXD3CUxPsATPzdaFSCZ5BcBrD8GY4XMj1YkbdnVYqcwmqZv",
  "key40": "rpJq7GGP4pxN87GnRbPzuhgS8r6ndU5uWQQo21EepGjuSJvRvwyV1BcUYFNSsS5cMDf8P6axBcNyPXgH9xpKVXd",
  "key41": "21JGb4DATnyneQe94BEVSTWUwTxxEUCEQw1dRvRvb79cHYaZGAmtkzxE3jf1MvPiqwmSCfW2cHKsrHYfkyXf9BcW",
  "key42": "4W1v27CizUB7vecKrq9Sk78e6TULrjep3ymnYjVPY38JUoBmUk8q1Ls5B1fDPc7znqfe6dkdmQZSZUs5NRHNusCi",
  "key43": "3rMG14aFzbvmycx42kxgK3eraNGZ3YLaUdLnLymQvuA92HUeLtAjyQeGuFeoAhzjSir7g3wmy5zAAif7arnzaRLr",
  "key44": "3r2YQXZRNkFVsrjRB8a3PepdFJd55gz48hVFpD8bojAFnmF3PkbvtodJ9sCtrksB415Ejf4V1AZ27Y8yWBGDbRbT",
  "key45": "3LgBsDfcfjtRUqm2aLUJDaZ9UKecmdSU4kUcqBQXf14YQpCtcS8TB9XPJmF51J5zHnCotLU5ZY5hvos4jyKn5W1Q",
  "key46": "5swLJtSxUioMFJUvCEZ2HB9JoNZpSDBrPEXdpmWDJ6VZonnWDMi437NuUDTUWXvR9ffTM6uAyECucEgYsWsGCwPn",
  "key47": "2VDiRPArvxHRszkSBeRHJ7ddbPPYyYSRqb8cBSEA3Z7pCJRpaxzxgCDopA97xP9djjSu299qPp8J5AWwAQwSnGVp",
  "key48": "4iEgQS9xNYfzR1kLKkTqSSGPKEVpQsv3ZzgNjei1g7UQKwnL168uGPd1HeKUCyWw76CPcwvqGp9aY5DdCNPd2Qxy",
  "key49": "EbAE8n6chLfxNcNVjwKuLNhoSUzUr5iynu4joA5pTkS7Kxh1p61qSTY4TdXSNq2HsWYuBx3acjSTiMZH8VHMdSt"
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
