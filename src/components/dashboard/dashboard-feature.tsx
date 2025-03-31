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
    "miH2PmbFcEJvUJB9yGo7W5yPLL2S73C1ZbdzxwbjLc9B7QupmsHLRHvrHC9y8rSLfYrb6LoEfmYk9pxrhqaRr75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzaDxv63VLPTBfeWpTuAZ6ZRmkVMfychV7DpFRBDnfXZRj17u5PR5eJfFnC52pQWoG1X28Htnj1DPUU1gPcLpwK",
  "key1": "3oFhbUnoKDjtx9PRCQFxxtbhGuqBGXfumXqMksXsvs6xoCfTh5CjbRCitGxk9e3aQzs27ps4t9H78NbFYVSQfVSe",
  "key2": "3FyLq4rstd3tx9JjeZyQX9X9Ssz4wBRcFnxMUUh2TuBHNccdk4Q3qubAcNEdv3SDBBJH5iNVwtciX335mTL4DRzZ",
  "key3": "4wksnX6ELKb52tfko6WQUYPB1yJkV7ZwXUpbwx1L5bqwW8JJkzb6uhSB6PbnGTcgPHnWuVj7w1ZMC3z2rC42mZAF",
  "key4": "5w159GaxwPaDMisKPAuSa6UvyuwZq6A9bzAv8t44ifuLynpzXq7xjskqZ61cRfNx686sFbmbDCHY1rhGNeHqAuPR",
  "key5": "63ffgYWM8TRTpeHf4hSTwxQL3F7adFx44QV3hfS5GXrtoY87MEnvF4ZYDVSJnoNBHfWcK1MV762yQeUkNA4a5wtR",
  "key6": "3YFgpgpmeWcKeimPHLvTr9aEmVRQk3azPuweg9BLihfvZLQvBMtSpAVDwCNWfmJ5e6sAM3AtqqeewaRp5KecLc5m",
  "key7": "4gsLw2VZbSrGE3AuJzMsc2LmJ1xKRA8kha8n5r5j6gPHb6wUjHyhAY1sMKvsvLKPrWgQw3Qcg8au1DPvcHVpMdjN",
  "key8": "4orhbxyk4UJcbaRUS9829YsRSbNHfoWSASiEWpncKnR4kfM4UQbBf9tqnJ1FSn3axJhSPNYDu48GY1MGuCBSi4mn",
  "key9": "4qJBVqKT6WASWX2NtFCkXtdqRjgac6Cv2KBh962YPf3Pbdm3wWQwRn12a28kda14fmAGC7YAmo5owsdzcjDLtWF3",
  "key10": "4N3oXc1wNNk1SUmTo56xw2KJ6R9E56BBqtXuoCRpgY3ah6mUex4zE54do4PriKVU7o2Nn2Xd5RBWCCUfgMrNUgsj",
  "key11": "3DpWWXRKii4sDTXJ5SKaM67K617PXnKnCNPN7DbAC9BM9v76YJDyuJXzDquDhf86aggr6nEJjxjaMTYWcJeuUake",
  "key12": "fKWAb35f1krzwj3Hgzhahf62Wbpy6seGvx1EpEofCGYknQZSseGHyyNt8ygFTyuBYMsouQyU1GTQ9oWtmiz1QzJ",
  "key13": "2Vnk3N3vnh1fBZc1dehjEmBUVUejE3Qu4ncKAgrBETT9DtPyNk6QEm8tV4fu2YWNzmXbXDTGZ3NK8pugiWg3tkBn",
  "key14": "5P7CSBw6WskpMrAjMFbWNYjHAyoes35g7n7QE8AbiK3y2DKywztuiTFpMijmwuQbZ9ZVYG1zfJDeL3VAek9tX2nx",
  "key15": "4w5UZK6PQ2LrjzNigpWLBSJG68VmpsrWUWdpShdVMu3v8jpiTtCxJW2CbUWBZcLQg4QYM7kSswQwRc5KBbBQqbsu",
  "key16": "2aZ24rABxt6khnAFoZ3kQtzz4tGjr3BUa8XrcU1tbzpQTZ39UWgU85iC3LRSsAJukvSYkdBeuc6s2jYovVb8PpSK",
  "key17": "4jqD6mJM3GpdMkcJU83HvUUzCoznurbKYHrYLgLB5yr6XccE4CiGGUPywdWGLXUB5ywiP5o1uuqUyicv4jTCRcUb",
  "key18": "5B6PZsd3UgVXTYxL59Sraoe2YKYVuko8ngWa7mJG4HCF4XvjH3GzbkwKu1178uRvMRmBSGC2719zfoY916g9EtbR",
  "key19": "3TsCmkyi4YSu24hGgUEekMpGm1syumP8sssRY2DVaYVgLsen15M53ULWMnY6CQw8cWUuqc7k5iugCcGgsrVGmdi9",
  "key20": "3dgwzY5SB5JAJ7oREFDwPYFzZJ93B4yqQDU58qfjZv84xaF9BgYwL4bSA9AMXq7WoYqY5vq9pLkZrYj9qPBZfSDx",
  "key21": "319fejURAv5vF6z88V9eCw2KvJs55rKWHk9HR7u9VTwPuv5us7tcxCCh5gUQhQcv2pFC8ghUnoAQyaoYVM6eGUAk",
  "key22": "5P5U8m9SW3gbFTEsCLcsEpi3cWDzfEcHD2hb1njrfo9ntHzx7SsM4kJQ8nRn5b4qL8jsXPYRM5sLNt6FdEQ7vASq",
  "key23": "3tijK9MXLHSrxbFn2WGpmDfCZhzrfXqz3723h7k5DvcS7Evekm3kCpQM7AG1jDvugRxMAVZTovggVVPKU3YSKRqz",
  "key24": "32PDBNWKckXCitjEAnx5L9x8KsNV5gJFQz4CTgxk57C9REKSUVvk2CWKYCNr2AEiZbX3hdncfiKcgyYz975SfiVN",
  "key25": "3vwPxMNsRn9mVVAsLpzdNdQFWqixAVWm5jv7k83UW61QLtuLS6dNeAuxuCYGmvbMcoZNZm4Ak5mD4YtAoys23BGU",
  "key26": "5R1JtXc8Z1aG9rFXWUTdVeHUeqXbgb1EnS7ur7QwhpNpLjaaRSx4P5HscQcg7rbogsQeTtmd9UsrUV1DbSXXk7ZW",
  "key27": "5z5XrhTmTXSYcTuS2uwhL2eCs1Ay3VL63nonSS6Npsb4dQ2sBdWmEVYDXSHA2cU1GmXn83a3pf9LDhDt9takVyBM",
  "key28": "wr1yYNhyZeRutpBvbsmcpVmeXfXZ1UTrzdH8achjTgAtBUuQ8YnLipEnUEpydepaCTZZrJGdZGtzJ6TqVdGX1Ex",
  "key29": "up2hBLBuACo76R1NPDmfGmeDysARU9vbw53CDdhpk6HeUCYS82DshxV1wVHeuUvK4cNdvnND2oQwogMH8mEvkBF",
  "key30": "5AuGGAyRkMrZfipdgEPJy7q83SmWov2hoXwVVCW7ot2oj62TLKEmjJ7YpLSwMJHYBqrYwTg6ApKEgUHfXtnhzdPD",
  "key31": "2Rux2xVFpW5Ej3bFwaXuFRTRDxBU6AB9aUY4Pz26nvsATSBLggNUfxoozn2jNrF3FGHjCwiurdWhQqwLF2jiiDBX",
  "key32": "5RyYt3F6i2kB5Xf1jKo4QsvXZoMGyhNMT5ZuDYUxtMPwJPYfGt9D8KDhQg4LmnEcMZFaUxVZcoqwS1J54JM71S8x",
  "key33": "3WhnXwoQigG7RB1zekLqDWCuT4RE8EbLcYc2MnnC15WtskmqfDy1X7NbugLN2eEaCeEkR2iSftNCzCKb6p6uHiLC",
  "key34": "2Z5rNojK953G4Y1rt7haqxw3o2fr9K8WEhjNEtEhfceLknMAPgWeUQ88yiBUadGt4ko6Gpf2e5FFNyBQJamHrfuQ",
  "key35": "4kBWmcXU1RxXGnqsHALe2aVkP6Z86U91HT5pRTfZAr8TgKUowHNVf13KxUcxq1Btse2D9KxCv8okFvXhBZ3oheJh",
  "key36": "5LbbgKwC9hpSmXv6BY6C7qL5LuiaxPcGgjQeBZMRt1eVib7uVnxqAVFbcnEUYqiT2cY2VedPExhfsHCxrpr9uoQb",
  "key37": "4YSZLxz6zkq5eaPmdXw1frs7yD7gtbxpxJ9KwiJbyZYrBkkVTR2edkv4XmNmQGh9Jz8s9ksfJ3Pp7gH2M63GCzyz",
  "key38": "4oeHQP2MxwS58omPR2duFLq8kc6V3fVKcrBMmaBn35vDCoaDJhUqwJAVDW8ZhFptuiMs4zhgZ7EqxsjVGSx4eEEv",
  "key39": "5vDJTYBnwbSrKQ5wrcFeaYwTms7ChwZTTYwPuKyNGq9aYnUUrFqJa4hXmgyUYUKGs6JAZxj1sD62YV42MbZXEQMk",
  "key40": "4HPCcWghGPV1j1DHXw4Rq79XXGGe9FQCZHAymEypJk6jhN2Zi3q5p1x1ZzbNN1CgbDAw9pBSQENdXN9EFXLe5ExK",
  "key41": "6PpXMTFC8YTkE2bAgPYQBABrFHcaoPog9WWvgctJppvoScCgZKuroH1mVsrg1vNmRJRhWu9RW7bDuA8N5bEtKAQ",
  "key42": "4kn6oD28GSCK8UeHxXATCqPox1KGLJApRCmxZJay4JY9TfjRDDLTzxhQ5QQgRxhSjqqKJbss8C2XKCwdTLb4aVow",
  "key43": "3kqe87ZR5MYdjXELcQMf68i5ujnD47FWQEtAfZz6EhLpFcrwsA1gWKNvZ1fQZxZMUFaMBHStSv9SZSX24ZQp5Zgs",
  "key44": "TGZa8Sirs6t6sG9TVgt5Wi4Ur6mygZNcBFJyr3pnHhQDwdyQ6jE2hVmafQ1t6NJm7NBRmRpyd1bj478Gcdff214"
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
