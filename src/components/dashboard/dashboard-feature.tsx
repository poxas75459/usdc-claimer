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
    "45DPL2bN9UWmcy6BbwSoYizoyaSgz36bg8umZ6fG6mxFg4QDbRnm91K7mYc7oFo9fazzWzLVctBcvai3fUXj8K3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKmxFZAHUpjPY8uP7iUJ7upDspuLpiTSVgFLsNw7jiPu8Phw1zPapTf1aHgHoA5juh6vSUkCLJfhpdKNxJHb23F",
  "key1": "4mHYGJcjDHAKa3JxZdT4nTKhkxUoBc2BpK8Vyo1mk5RJ1t89u3vLcXYj1xGtyz4Spm9GdR1CbSjqvjrWEA58CCv8",
  "key2": "4fxGqWWE2akUUC8D5TW3JxWxqqsJeUj3vwHVwmw2om2n2UEQWeRu7DEdSiD9oChsYg7NGymUyTaRxEumKo7ytzA1",
  "key3": "4QZwW1Vvh3ERG84x8ixbwrLpTEBDagQzbfg7oiY7CcRjy4s6VcYm1Wz69n2riPx5VkG8dapAQRa7Ee548MwXFiky",
  "key4": "zA3523pSPwQUKUyihfDJU6cug21yaB7Gk637uncY2q6B5X7rQkgNABecaaVArtf3goKL8eTE1meDw3VfiHoe2oR",
  "key5": "48RDZuC7dM71LMX7ZvcKCfqaeEdFeZApqe2AgZZWzv4c7efiNHTkCZtw65ke5yPKiS7A4JbAawdhZhVqefZ9T3r4",
  "key6": "4ZTirSBCCbUs93fF2f8BNQhFA9ErPhTgWjhr4DeYMF4ZPZkYx5EW2frJPhbiTXiPeKg9NZRwe7QGvarrAYZwfMz4",
  "key7": "5pEo7Y2rUXwpXTR4SW3hemKfNkQqEqsqkZtEpnXYiLwWZuFkhbXz6Z1G9RAGzmCcbimsCBcivSm9egqUhc5s82Tb",
  "key8": "fhuNQhzXDbeytgb4T4JquQ2wM6ivJp5QyEHN5imfqWssXDqXgeGu5cStYZkV754eeB9k7bw4FDaByVCoVtoCZ7h",
  "key9": "hJzXqqNuhRWgXQCcXVt3fmVi8SWPVPtd8agVTcwUg8F2ZHAT4iaMishPez8ndbU8tmGLHEWYjRXb5rGvuZrnZiw",
  "key10": "3r2ZGpgn9JJgkDtr9CXby7dwAbDAJEiXvyxhVx1JuMCWjPca1k4JCHSbLiBrKJ75xFJBoTh1qwiZ1hELFtQCPrMu",
  "key11": "4BWoS9hgrt75x7CLVMejGvdzhec1rC41ADndyhgdGRgLF5kXgtn7Cr4SA9kC5aCkfoKnEPbNGePs6sW6dY9CDLqb",
  "key12": "2f5EMUdECw8ansFCooXfJQd3oPm1C2LuX2JiittYg6RxHBT3uCtCcHFhCA19m275AP9cojXCCVE2RpUPX7sktTCP",
  "key13": "3ZtPXvPEw6Ppwxm54tmfxsDfEK8fjqyHugNPiqZQGCNy2ooJk64q9VntjwzciyRr8HY28ZSRQnEjTwkL68eaNg7F",
  "key14": "62pnmbPrRboFvMxksfQ2FqUpLqvSewiCCYLddvviepHKoTvkt5iYG7pTT15ki4t9WRN5LYQaiXPggfWeUUJ4KVAM",
  "key15": "4BT2eFU7Kkvk6vYfrx7iQy6bgmzaTYv2ZdohBgajsjhrhRzXDSo3yQAEVE5rq1n8jgicXQcwGunvzbxTfRHpEGMr",
  "key16": "2HiPHbjdWG5FMTnkuNrQqsqssHF5c3BGBfNjeo9mBgQwhY4VUxCUQxBeUsR51meqLZeEBWudwRXy55sZSZUQZAGr",
  "key17": "3GeZd5c25x6qY6BDhKmN8hMgZkmRpVjfgzCJZN3wag9G1ijRW8am84b7dZCCNtHjrofQpGhEskcE3AdZvHPCtfcP",
  "key18": "63YtgsfoSejyedtJ7Wu3DJ5fPXE2DurG1aR37dzuhgRtT9anzHemwrGA2tYyrJULpPijnGDipLyWpDVz4mZHNubp",
  "key19": "5KJxkTD59TLSjP5rEbFZyVLCypaKB1fG1rg6qhftqpifX3REMm5pgNQXURbzicNAbBAnVuQKrVLCUMYo9QUHs6hs",
  "key20": "3EdgpMK1KSX5gKWmckNmYr3QghpAomdHB2unS9pMCbLUhj2E4mbVcerku73XoY4YkRZis4HF1fAiQjEZj9aDwfeQ",
  "key21": "sgNqmcro7HBYVE6FHoheR2zNzjVahhsk6tXmztjuGbWp8XC8nmDmeZc1Cq2AADATMPivtvXgRcLP5tzzchwiooB",
  "key22": "5NCXG89bJsnBjwzR9EhTBybnEpEBH8LFPjxzFXqAJmpGX6hF3QZBs9nexuroteCDCkxddmExdkTTZVK9t5nz1i4y",
  "key23": "nqGCQ6aCWHcMsBjvf28eCG5pJpZjyAgzmAvRnWkZVbC6TXC3ZVkZGiCZpN5gVTndJcscsnK41hcL7pRDdkwL3x5",
  "key24": "5PCG17ZnCsNr8fA5ye6xwuBzmCaWHPaLvwLJfbYjVgRiEpCe5JQs9urM6935nqcBm4eNcVe2Px1qtAQqxvTubYRN",
  "key25": "4Px7tCE5iLKDQTynuTUiNggb4AMUBTQFvNCvBBotRokLbvGFBaAuq2HHagvCwGpAGQwT4WVRN8dXNWVozF1H59RV",
  "key26": "4bAucpQGEFeb6j9LgpJLxsr8PvwmexZDMejbfMK9eDQbjpfF7MwCgtRQs9Up2n8rvAMmheD917jfKMugnKPK3Qa8",
  "key27": "5EEs6KsoyCCFWEhLo6k7LowNAgmzCiVeNkv612BfyWuUBphrdrVakfDxYqVp4VeZ6XttvCTH7AMufq6peaMRbeKF",
  "key28": "2Z6WvyE9LnbCaW4stYxyWdxRDygf9HjtZj1extYEMq8H2pCvacJBUUdrKRYVjAntBs3XV4iycAoBWTKLeGvHnuSP",
  "key29": "2zDzMb1t8J7pc3f5fEDvkUEEuNvGwPcpa2tsWZ4o4Cgz9ogThwk2S8V5r4vkB5G9ik9UoHYXxHvFWfzYgbu2X9Km",
  "key30": "TevypFwSGE92CfGaW5zrTNQM1EkasuMMHqsmAzUqQBL7LHvy6FDGPujF5tFnH4ULtdAsfxpGbAumNg3ucHp8tnW",
  "key31": "3kxuVCMTrVTHM2iePRAgueJQXnrqRnBYyiezDazy54JuB5fKZTk6mcZG53GLQ7sMwKs1pTBteXzrnzhAYpFBxSPW",
  "key32": "2A2Z41V451kECsRrRAbNegum4RE3di8JhaDYgqpHagAmTu5ezfRNFeQwG4xvXG7Sc4rQdNQ82FvDoCdSpXH7GkRz",
  "key33": "3GddFhcwthJpJJNY9rKR5q54CMcQbeh6r3x6V9L6dF4z4QYw3CoPYryAWxyk5n5bHBjPP9DkY254oMVHF8FVU3h",
  "key34": "4bD7eSSvJb8cnywcaiAJE3qTEjK6eUA4NoeUfxUxW5j2Yz4GigarKyjHBk2SyKn5onoeCVwaYjAjWJhy6RAiGvfv",
  "key35": "4CEbyXRKWQFFjE1DmCiTW3p3GaBRMFdaBTmwKRnPWCgm1P4QtR5gwA78PvwMBkZdwLdur8gae2WwKqfHPihUgHQE",
  "key36": "3Ga2kgWwLe3MxEpBuLMq1w8BwgLj4e7fc4Z8m9wrZawuDsMCgWXGVyViPRLC8cm7qQkh4jrfHMv5FG19drb1dTH1",
  "key37": "4jH9iMngPiULnnwmy6oC16PV6ZWZ9SW6iGnKBMxqdjrGsveP9n5Y39u2FZNHomf12f7RpJHcVrw7HtTFAUbDbzoJ",
  "key38": "5hkHWEubcY9pbcavTsZjgCa9xMzvc5SXDDa61GYfgEFhGbGmdYxL5pZ9P8T34ajUCg2Yk4JY8f2FdRc2zijznPEp",
  "key39": "45uqLUuQ6ENQr8qcPVTfJnKh15Apz8FcQgHaEN7ic5NbgywgpojtKq79vSnzW9CTqoTzqmi4wconm5xmRETJpwVt",
  "key40": "2Y8zdQZro9hg1qNacaXjMWVM7kjMma5phdu4LRHhKFZ7WCxC2b3tnaFWfYAtR5XB7uk8koqSW3UKpGokgyqeM5Pe",
  "key41": "2NdXqGG58ehBh3zSzt69tcS19AG9i2qHogBx8wy45JxbgNFi9JcC7NS9g6omqRFiKouFpYY6VJJtVdKNu7d9JZLG",
  "key42": "5n6AvXUCZducnWxMqQcFcSqmpz7fbJ3LA8WGzFcYqfVwQdtAFrWi3PDbCUXtj3kFxB428SF7U25toHu1ARnM3prg",
  "key43": "2TrqjkyNXBdLqu4AAjfVZaABzrhzQ4hsxgq8qPfitv51VDTyYV5qCkxidv8FEbstV1jMVAhXMhuvRdgZTrUJxDg6",
  "key44": "3moqbg9qQBb1Vg4GNbrZFZLKZ4cDeRtUuXz1WXwkSRZaCUxKJX6M2zPGKhWHMR8eNV5SFuoaQBgX6Szz5LRpDCUK",
  "key45": "5rG1jb4MDWdRAHHCePiXViRu1dZevwh97hPN1PDcSofLoRHXZYgZhLDagcKsZSsfX3pgY3NARdx3pz1uC4iRvsGp",
  "key46": "uDMaxnTdo1ULPVgRgPcyurbL1E9SuPHBzCQwz1XueHLCKEHkfXdPifmfX8ohzmbXwia86VnRUn7RCHCht5HJbue",
  "key47": "4j75NQzyA4dP9gWMVFYhA5qTZNZVztydeYUrqxECCTZ3D8ZaNcNsL4f9BtkwxFCLRhLxTgKEFFBWqEML7iDe4cje",
  "key48": "rYGy3oycZoPX6tzXAp2QpafvFxa18AXC7QrJ2476G6gad74aDUb4vTYe9Ky9UbizrsgoTYNf83GwLPBzrKLQVbX",
  "key49": "4w1HyVaTsWomkh6HAT3MWNntLYKSNK8aH33jbQWux2HeGAgCm6FPuiKZmtonYNG75YWVg5zCVRt2rcauj2Dhs1sb"
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
