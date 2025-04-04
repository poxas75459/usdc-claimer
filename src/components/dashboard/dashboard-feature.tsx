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
    "3NrxVGxrvfngPNcJTinCa2Ee13XwJvhs6hrXYtQN6znQKXnoKhTDWee2F7itCPPQyRGMzcKQoAXLzyTeZQfhAZ8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CV5cd1tRtTZGBKfE1mJTYgdyhqpdWriUv55mkSTrPZ2gd69Fy2gCYYdf8BNeLZwqaAGpGyve1ChuXWEx2m3jL6x",
  "key1": "63JgtkByzLv2o39B2RPJmDJq6i2hVzusa3dtYgG2xTuZmyDahyTb2ibMsv74j4MuE2eUDfxKLhf9PC4Ys6RLSzyb",
  "key2": "3FzQRNPoD2odeb7R42boYjEXA5gjJFtYtAwRkBsUfcHwcWdbp22L96puZ2rAZALQ3Eb8HwhurvQ9Nff4Xnymj1nx",
  "key3": "2NtKiif1LTEQmsWmzryShiyCnx9aZ9GTiqoKDe1SK42sHYrWaeDgBHJ8MHxiJJyzsgRwCRdZXogBuHsewL7V3FLC",
  "key4": "2nzVb83G57o9eiwAJeH6pJZqDNQT43xbc3kXjo3293bvCCrRpgUQztTavQp8ffKyYUibZsrb7M5U6FYBZY3cDu92",
  "key5": "34uukV6Hyd6grWG18SuScWRkdQNUYFjJouPbrLhYZz88k86pQCrtP9FTCVSTY5e7RYEaoKzM76HzySFiVWhZs2Bh",
  "key6": "5q4pyf9QsX4U4WXmafS7aNXYgxWJGc14GuaakCnHdKHjfKQkzmPJ2FmC5ZmRzHzd6jd12JXM6fhDhe181JiDKNhG",
  "key7": "4wnZE7KPJ5WZwmvs6chAKDqoMUhjxa1JtkrjtJZZCT42PVAQZTCeXtEHsSpGzdm6fs1zx3n4wQSeyx9oGjQ3YxLx",
  "key8": "3kvpWrhYZXYQu2zW8QM2bW3AiYzUwqLAS5ufZPryv3qNtLvmuGHVukFqKbddQTxyD6bvaza24nKcmiWWVKExrxMz",
  "key9": "59hMZ4DmRqfW7MMM2ELd5Y1v3z7KyAxRPthMpnuvisQasi3x8wGTE63jPk8wBWmfm2M4VjBgJHCgDw6xvigC7vyA",
  "key10": "494mRwPTaZMSx5vQZjtbvsTGV5wPjNnBgK9zHRmuvHbsEhWjvxkAiPRELUFHznwVbMdtYVWvK6A2cXxCa3M1oTQx",
  "key11": "5Gu6ToHCmSygdj254YeFxLet5XiiB4EKBwj2LQwdacFT1Vnpz7B43Z5StjeYWSsjKvMAhFfiCHthy9S5t8GySuZ4",
  "key12": "5owMLVhfpikqCjUh5DPbj7qnCfkxYMEydsx6pfDoEr3sKyJEYYbQStTHnaPh8itCs6QEFCAwV8zF8P8V92ggyqEq",
  "key13": "3seyjMu7NuPuRkVvcGxfd9vJsdk5GQn7M3M7YeqfW5iC71hiDic9vVXrejjkaJUMYDSj3f6d5sWAcmwTaqafGoC4",
  "key14": "6Pra3RtFCXQ7KeRdKieL3DGBm9BpPgPpMggy8nNjASDJ5kkBzBmYoemc4nbkhGwMZffpu2ENiMkaumRhwuJGoi1",
  "key15": "3dLoCpcrBsDKLS9xKBNdCkiTtRYbp5PrkPTZ1WfZ4yJ5K2cFy5R6kQBHvMjYt2h5ZnbkgYKPdyV6ewQxkodpfbWC",
  "key16": "2MXYttpouwMjiPq7wSEPEcihGmcV5XcsQw8vtKnBWUHMLkniyjGnpCTJ1Ho3hFNGonpvqyr2bJBdiJuzaQxyWbvq",
  "key17": "Z79eWP2pgGA2UUyGcGmkLu1Df7YC8wdDV7qUVLp54PDVdRY5LHBhjNQxPHrVUc3rS99utvuEh81v7VRW3UyvEpp",
  "key18": "3uf3KMBfmuY8QdfCAEwYQNb6cQ2sw3smu68Vq9t6Tq2x5W9D5dkGoBFUU4D6ZKZLN2NbDzdRx9CXyAY2ozXxhRL6",
  "key19": "s2EBbQKnqhcMUEkefGqyjTheJkncKntdLXVZ6iENxtZTgzEa9hGYWAaWeqPXvU5NE1YfM6V9x2XprZqh2oMfMrJ",
  "key20": "37KX8Uo1CCH5oLBcKXp2qTjZynVwgf77HhQQuTvjcu89KMuhfkDwbnHwKeeBhniS8b8ZVPVX5Z9wrnFoSgzjLa5a",
  "key21": "22E7tvHBnyEriiazfskmAkmk9oyPc2mcLypfu4Ne6fC8ypJfkWb1jydvJWrDQ7RJ5D3D5KTxRqo5cmLGfrTEwLpm",
  "key22": "5sRxUNF8rDHdNonyDxTTaHrLdyfwZX29PpxTxx87ZviZisMQ4oLEBbDQyb3nHVvfmHm7cvoKTGXMxi8hy3w8xaCv",
  "key23": "5Dh1PtHoNKffW4kWoMkuXKvh7kDWHvop3cdSEYLZwHtU4viePGAzcJ5w2yZ3sduMMJvne7ixMCcQWjubxvZJA418",
  "key24": "3H6aVbxZdUcasbfRRXLtT3QybMzZr27R5vEiD9gvH2Cn5DXjst22TRox2fLYSZcUrTp8Uh219yUKLZMAFvxvZMGc",
  "key25": "2zXF3MV3eqtGDTu6dzCKHH7HTkN2ZaAzLgYYQYfCrbNMxZpDHYJpE9733TVbPYxJ8pdFiokdJMhfjxLkzsYo7JV6",
  "key26": "3pYEWkFLAw5ZdegX8jwVwPUJ3jBhrKgD9LCRuhRRv1ar1nEzf5przrWGkN8J9m4FkgdbtHsMA5FPP2oRhb5bYwq7",
  "key27": "4uoYXcxv8uVXLQCKPSHgTQVW9syqEUXmwjzFHqJeBAknmYarpXwDv89qioeDXuv7WrrfvyXDT8gxjQc2W63ovaQo",
  "key28": "5VXuCaR7P29M6c8Dj1eCswrXn6JdGcVTRxoiGj7RzXPzf67nSeLhQ7mZLFRk179oq6NsATmNU5PXsfKNaFRp1haB",
  "key29": "3SKfb7gAY73V1mkLpKnxii1T8zCAzpPRZVQyFFknWSQutQ1aQGCN9RDnjG1y5rrmbMZshiZGJDhGJVT4njxYieSh",
  "key30": "22bzoX392rhm3vn61k6hGnxkmzGoH4xPFq98qP6paUn4oU4FhV71dFhjK35vULaRJ3istigAxPF7s9DqbsPaXQ8g",
  "key31": "31FJ1axuLToLJyx2ZjFGrBqjHRC3BPm2Ej9oyd1WNmEx2acbgwXL7nAxSFUyVyVkjvBFTStr6ji8X4cVxaCeVfyY",
  "key32": "2H6pFDJqST33fxF9FsHVG9ENAnVHbh5aMzVviJ7eq1FdS67zUChCSp7WhSQrErxfUrUUubkeUA8brvogY6Qb5oxm",
  "key33": "3mnMdXGScLx4BxJJCBLLijfN2dHaRCDb5TUmpzu6nucqqq85oZZQnaKCyxpc9PLLcmQFzr12fKzjcp7zoo8WDUtL",
  "key34": "57gHDmjFhghZLREbAraP8sFjC8GTPbys2LgbebbDtmTGTzhNBmzwycEbLL6mTswapehXjkfitVDQsQMQnCW5oZP3",
  "key35": "4EpeCpaS1rB1yvRpEGw3pRW1pVwruJYXNBH1ygeGxzrDCV9MstppF4ipj8JRz3hzgoWagHHbgHqerfwP2AqeCrVt",
  "key36": "DVNvqBwqk7aDCQHSUyeK8edRv9YCN2Cy8RVCCfPVR7ZtwbLc26qSsdLzgWqrrPphSBxE81849qxTH7wFR2qkk2H",
  "key37": "wcWZw7GT9paFZSvfNXvoRKK4SCM8iv296dNdiSPmWnYHZ5JHcHzfCnqv2Fuze3d8zUNXkjJZBbNdtR1A2gvF2wR",
  "key38": "2PiU6pUBdCP6zgWpmNZvVm5LVjh2fHpn1fDHynAaHgpAwwXNXcqact7rvYNtEK8ARzdjFHz2DM9RciUskryGhGGr",
  "key39": "4iHnrZyA4yMPkan1WgmDPB2Mr55wSa7xQZAErGdzTXsCGzQ8FMgTZMDWLMAikCRru4Z9Z4BQc9cd5hbENdVNCxcd",
  "key40": "3JPwshoUQyAEJaKLyUo11fTYjCoke3jiYbZm7499pNq4sprdFQnJvc1oe8P1pQjurHYCdud6rypWVdRHXr2saynF",
  "key41": "rSMzUrDxBpPA9MPENmsVAuHU6VWajrYKHUssoWPpENAK9mS1dmZ3XhzRJupVVrAGnxa3dF4QBaNNpnexJUYNxRa",
  "key42": "31fiqxd1obLY6bvB9PTvZeTQn2EjCKneutA1Uw9Hb7QTGYBvkMmqzhkCNVZy9hZDWz276ESdkbwG2mSReHboCF5m",
  "key43": "B1wa1dUmPE9LfbVXDhWKjAvpvkXykN2FRcFAHLBWLi6Yx84FftraSjxkpfmRFPWkCgpTJ3SbfmFUi7XiBoRUWyT",
  "key44": "2AR8Jn1NfzyrZe96FnbjeBck3MLoPWAy3C6NfFWk5sUqRH56GJCsgFGUnW7XBvukec1fSNvdZjXpk8PxCV4LYzVV",
  "key45": "2425UMQNG1qCADfFFPVwjLiER2wm9sMvXnsLU8yXvKefBLgnzhYYcRw8jRqR4tHktnJAEVewU1HnfeZLpoFgb8iB",
  "key46": "3rRVLqzq4xBt3u5TVoXfGHqnyfDTEepZvUf4rTsrnx3QoasWjyUoNKE8XhUapg4wSsytT4W1wraZnjp1qLFfnvdN"
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
