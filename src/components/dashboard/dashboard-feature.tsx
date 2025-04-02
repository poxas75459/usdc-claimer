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
    "4MVfHET48Ud1Z6bYjMFj1RUbKicDfVKQt5RXFL9xAePZPKDQMEs4KxwJ2wJSkokmSob92G18Pm9ojym93bCX2WDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTdRAvKuqMMbGs9gDY8TC7uqGzgWtMp9Pc4WjxEShorTioQGNwVh3CMcgZ1oMTVRxq3nJansbgn3AgDX31tHZSN",
  "key1": "3jk6jPihfjx3F5Qd9iCy6H7fKcPUXNaaBzL8uhJofd6NJiN6GDeDZuGngiv1f9VF2mjWmdNgxmHvHDbVg2TZK3a5",
  "key2": "pEPpuuPEET3AqusT2P1WEokQTb2HLwskJHReRJCZmJuR1BAiBoNePkwc7M6zo7BCcw91Ev72NycsduM3i35XKFu",
  "key3": "5utDacuoZf7tsVLm9Z6VKerBrEpyDBNYwJDbpccKt77cgzLpkRqw1A3w7U5bcvE8E1oA9TK65yC1JArkQzoUwyQV",
  "key4": "2VnFVfcajveQTEaQKQiQYPNfvBbbwLs6jByHqXB4Q28hVa769iLjcM98fd2fZAwRVoLgxXGsiriu8kzjWuziDC77",
  "key5": "364f55dJyjxGEg1Ye1U2SteqGeWAnyNBU3CPL1syWKzdTKk3WkT9Zq5J21pTULz7RkdA63rBdyvprXugEmFvD8ib",
  "key6": "2gBXpUoFcrAdyRMfKgrQn26qcgqdMRK6iD4C274eezA1CxkUCvaZ7LHd6aRPtMTNtruahiSXaGL9oyHnpRyjRGWw",
  "key7": "4ps8TnaMGPQnXkrqjTn1bm1qbUCkh3Lw6o54UihSM5fKASnsvBWwQtc6z7vAXLxXsbS5TefdaMJ92XyWqqwU8pWF",
  "key8": "4r95J1nTUTXwNeetiUXvbhdCZzatrF1hMZyArUZ77ASfJ8kAFJbDt3ZMNeHgXCpdh5nSpq1F3HYnEfRh8dQFSU2p",
  "key9": "5qYfjEg48SSnxkpqmGNoDd7Tu7zzpbEB6eBGEABtf3hJUu1653imCmatDX7dHwA7pvxab5KQsfeTsxw1z2E2G74",
  "key10": "5YuwVWWUKpgLJbPDu55KumWQcFfPMwk4wNa7VrJaEz4V94UV5WD3qGYMspBAHCx1V4roeBN3nnhnt94BrgMa7g4q",
  "key11": "5UKUcsCUZVm7o9C6wAMMDtScAVNDU52uN9iajeE7yc7HSC3TaT7vijzgC8KwExDsf2cTUTXZYxZ3JPoRu1eK3ody",
  "key12": "2NNBE6F2dkNS47HGqrWAnmCySDqVtTedkheTUB2KwqNm7hLVCqsQ5zBsovLHBD2VnrYffavYPw3ByR6WvipUS59P",
  "key13": "Hkais8XbnC6zBLGFC31gU4ukKQF8h7qhM7L2mkTkkW598uapSEyetaBcFGc8wG2S3hxQvujEVaLSvVMBeT6a3sx",
  "key14": "33tjXxtJTj4TmeYtAZHH2LRhQeWMkf5kZbker6UjUVX2dskrhR5wAH88vSHoR6fJPL3hevrQJqs3KaFJrwWMTNLd",
  "key15": "5QpikFK915mkyjmXwdccBvN3TFqHmJPgXThLGGcUgwswq6NYEj6cwUPeRLR3fr32jiQ9mVPYfVnYhsW2GURE1aJY",
  "key16": "2od5fs2RtrE3PEBAtovPSrcg9wdGmrT8eAU7BBH9r8GF3whupER1LYhnu38hWTGqDb5ttiu375AwE9tEWwpStsKh",
  "key17": "2MJMbc7niuU9UwxVxQYRnovX4sQMwUgrd45GMtGUbXAQwDpXerNagtYTC1t44gN3Kze6LJrdqdyXGQ9u366Uvvsf",
  "key18": "4sC1d3iPb2gZJUhJ14JUemWmEvsNABy1gKu958LRZQVn1L4otqE3N6qTgG4U6LT8GHjKzQXEDkTszLRvH8x2gU1",
  "key19": "2oKMNqv5Kw3EBU8D9Zfxt2uxW1KhMvgCq4nFq5YrsA48zQJBawuZ5ukQAq2WFVBmA5wLpET7sPAm4QNsoxZXFhdK",
  "key20": "4ocS6dCpdR3zPtvEACgoFXvs9sNNT2ePwkEp8f5jgGjGhkmDnkDQogTfNUhCBJazZJ61dw2ETB4bmTLn1EvWYTPe",
  "key21": "3a9DVMVZokJRtAKujwVGBJ1K8ker3JqZhmXbz89dtzE4E39eZLf9LYWTVMUps3YmibWNKFnaipEcEZKMj8TaD986",
  "key22": "3K9naTMMweceMaGjHQ9Wy3AQ1WQsMJsLcAnVywBgWcnHouW6QGBe6w1AVsRMNPC7zXQR5e1VqyucGcMr5L5DSmik",
  "key23": "3UmadBcfBbQSd8KoJVNwc1SSpevrzoJor3muTaDBdDdYA9zA2eQVf9np6XhWwYRAghWUSipPADCpN9Ni7XcpvVP",
  "key24": "4LRGWDwJDfbfvEmgU2c6g2g5aUpbS98UtR7oLHSXK2B7r973r9kGxZVEED2qBLUoHuXykhm8PZjJB6yHyFrsBHvS",
  "key25": "AhtGT5AxjDDwcESV3jiEsYvBxiLHKwBowjDHwDQWJ7XLaz6gNhnExJzgJXKVt2x7QJpQaT21JXLsn96cYBhRGdS",
  "key26": "2KvpXhRCiqo1sVdwox1ThuMBv9Pzjzyc8MqS36nMypmhw1S2pvFyXd6JyxUgrfeiQ4QXaohJ6KBKh7QzahmAQU1H",
  "key27": "2NdXkSADGMw8bCjADXL9k8tRekDtWz6VDThzPvnDhPt81XcBSo2RKUZD9TkJ8ukCakpdUt5QPxBATUAt4C9EVfnX",
  "key28": "eiaT5UHpK5ePbBXomNtP3FP6UDQ8paKZKhBpu6qZ2Utvu3UdumgBp7oQgBCdvuE8FqSubk1fDwmqDEbGEcvsv3L",
  "key29": "5nFYZxTUqFUqTxu6QtgdGbyBFJw3kDPvGuJojbYFY7XotpM6QUhkZwHVrMjJYodfSgjKcbS8742CA7yNNgY6NuMa",
  "key30": "4Gmhg1id9UfR5soL1q5zKJRPnjDKawrcmGKsJskavq7RGhiuoDvm2Tqorhfp2hyo1t18QuwxrB5YgVbA1qWmF7Vu",
  "key31": "38BUTuAfaJbFhxDNCNLnW1rxAbFbXG2yG85HAT2q5f3z5w1ArGrJApbCxtJt1iRFxxSxQkdU6VDA99VdVmv4yZVg",
  "key32": "4NZoDioAaPmqaKCmbD8j3BAE3raobAfXjvhZd4XjqGduadeL7iMQBE5pHvQkTgN9eQJgmVcT5Bb8RvCdr78PcUd8",
  "key33": "5MqwaPtx9qoyts9AJg4HpEKmyx6iYEgVm4vHaJ1iDQVGqAnWppACTChN7a3gbZFqLmZP5Mrkpwc3gkDcAtA6GygV",
  "key34": "4L99qvMC94tm5c4AWzQ3QSSKuFJEJUUbbQ9pGSqYpEgFMCunasXCpBCBX6SNWcwVHHgcDQraXJmLbrbQPY2XpkGZ",
  "key35": "2FhVcGiL57CuKnKZmTt55h7Xa2SYANEjaXKGQUs4Tad15EGPhBDJnaC8Vhm1QcYZtV4rCffxPtpR5uHPuuiKdzAJ",
  "key36": "YZU61GoPVhC1ubbih9Zd1poThL5b3NRkb9zDKPFTz8bfvmbMPuBgvK26jCYgtxZ5mBgxjAUop1Fq63MKAXCq6Hv",
  "key37": "2h5zL3MXBTCAdw51hFN7C1epVFyVJwfTE9rvudpGAE3AvVS8RUEfffo2NP6vGpMgwjSLnJ2UxtWFNtxCeoJEkzi3",
  "key38": "42BoE8Wup1fihw5Z7QPt3KVKU9x5xSXk3n9nYjNV72BNC2cf7KY7RC5bW3giXButNuhdqdUcCN3QrUZ8JN4aBRyx",
  "key39": "3rEX3tSPJRh9m2oYpVVrzPC1ypvvLHRkYUU4bsUm2NTh5iwX8TK8B86zDhiXZLy57MmxKwKiiFmKMYRXbe25pnyA",
  "key40": "2zJ2SchugNjHJUJrKKL9GUTxBA6LbGAMyoCaahmV961F8vSDLNUaezHaYv76iLiArNYR231JmdmjhpdvX3abLeFW",
  "key41": "2HoVzsPhDvRBTwJeoKT5kzFpBt5yVQHNzpREyxa1D3gcM6gZZjVNiaxSALn9zgpuGyTpBbXB4Bjax9tP4CSyG5Lr",
  "key42": "2LaR9UMoU84wfjTcUDyHZiiDwfW6RKFWxuaUNgPfE8LRkuhYP1yeTFezzFdvvN3z51Xpz7DVwJFArDDnvPsjcqsc",
  "key43": "4sFwwWK1bJFeBWyUhtRtJ4d8XbUxDbXxmdNyRjjkoonisukLRSMLZUpCwSBCRicQZmYRDJZuztsCjVVhc34jHLeo",
  "key44": "31YXkY7bYcAFde9DK1SUHKG1SnvoXjYUSXy34DU3kprCotNncYdDbJYuEctfRd9H2fmSZDJZ5QgUSMcMo1fo7v5M"
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
