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
    "3kuGSLZjSHAXyd88RDj729xf2PAueX7ixgD8GDYV83VNZz6JhgzUBvkvch3o1zf4SEUeWZUJPGnWndry1DHs98KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ro2RTdneeV4Hw5hMRggZNqxnSY7v1rAkP9LrqH1bXD3h39zG12AfoKvfQ8etGrYYnigKYAY2dWFT9c3VbWaguKu",
  "key1": "4tSWYcAMMWdUM9dyaQejNNUgSgwk2WVu2wEPbjQ4RL2BSc92tpGuWLKb3j7bTYwCvUVRbwV9avxENPumWUysP1G2",
  "key2": "3WwHsxVJoB6yic9vmNtrPuMG7FuVgoUUEUzrCbPtA9F4hNo6gzhdHtDxVJ4VaK6uopzDs9iMdurZmCLH7KEy6QvJ",
  "key3": "2hKfKmaeqhfXj3wwv85NQQVAx3ZEpc3JWiFeKgXcDsEGcEVyGBgXcaUNoBcjRe2e7qKKDkc9XmXzXmWDeUy3DPjC",
  "key4": "V4M8V6sJPG6UZWP3LKVpUzS3aPpSvMh3ASY9cFf35fkn3nJHuunb997vbTXcNc2idxbxgifmcwrHFh3TyVKJ3eW",
  "key5": "241BzvDZyHvMrBm1p5uZfiHtcdmbCNbNjz3nF66NV6GfJw7LqSCAae8Gmfxm5dEoUYEkBQyr4c565ffa9U6s6f97",
  "key6": "3VY13yNEJdDXfbdzQ8pJVfM2zVUPWZhD68y5dHAupwieEeE7vXFQEBtXdnv3RcGqXEdabkCi1xz3PrNVsfJuTUw2",
  "key7": "3YPyyG7anvu812chnR6zobVcPQiN2QyA3eK9fMgmBLizQn11oFW1E4HYzntxYsrLkRLyERKckMzfNXkxrkZbZrS6",
  "key8": "4sCDYCbPoWRGFywKDmSJVcHzVBnXc1oWeEvz1tmLSvaXjgSZyrtHnxBpAPg5Xa8sxAyMuy1Jqptir9pMcejspMBM",
  "key9": "Ap3iJAzpRrHFf2enYfmV9XbNxN8F6kpqSUMYbXFvk2dYJPH4d6jHrmA5uKWMRMfdVA3Mi8mfYxXMQ9agVzmVdmX",
  "key10": "2jQag5ibtsVufTF4wyckXESJyYp1nix683YgYgxHhZ4FCsEyPv2u7ALCk99DqizTJaVfF4r5VehFCXidhSZM1pES",
  "key11": "7iKSxauxgQLDAPopZke7gw9NUMroSpjHmaHKy94TBzUD5HZHerosmfaNk5AKDFzVpuJp1DhGcp2SKfiXfBp7j7Z",
  "key12": "4Qx8dozgF8etJVYZeWPJj974j6gAAsHBZcNT7uSZMe3G1dAPBhE2ocpstqF6WSitmrm1RLp3NJNhqDaymDt68ov6",
  "key13": "39esciXwYeUDf4KwdUZ96rffaPnnu1hEvDbutyBSvnqwQsxy6tTZAnmDnrrnQ8HTLxg9JUCP1c6gKKW2oF9Fniq5",
  "key14": "4aV2LR5emfZQTkKhKBNxmYRTdrcamD5fqs237axvZTN7Zs9bmZybxFuLraDbEgLtZnm5d45xNg1kFi9sec4gbWT",
  "key15": "2aE6kCb8z3tiVQUUrvnWCHMZ3Vjn1dd3o7hkTEeJjLcEPBn2Dis4a96bQJRpvPUjCgQxnriFaRmGW3q4YtT3Ao4z",
  "key16": "2zj4o28PMpNwfXFGrdV5wDscfkLQhQRA6UJiUnFzWAMz5cgEDqvkHPkizt9UXtTbfQVfTmb3mu11uN58LgUmyR2f",
  "key17": "3D3F1rS6yGy4qHcxdPfLddASR3AraEvsXY7bLboHW7WMgjrbrmMGz3DYfsGfuj7FaAnJmUE7jxE1sGarex1VXKuG",
  "key18": "3hsi1kZ5PwhpqCJKsYdMEdHxXJRzXmLHyNiSGv4mQA1vtpA8iywarrUnLUYAGAzvfKSv9w6DLZXrkN5BXyrkxou8",
  "key19": "3kcA57Tyj4hXNPDmnR4aJADENG6Cnkq8snCj3uzW6X8myoVtqrJ8dsRQY8LFg3pi2EjcGT94URVzFhtLedRVsvUG",
  "key20": "6ERXPkscsGEboFwS2LgB2TLSwTL1xBqmKHppFrr4WS7EX3xiPk8TdXHYo5xiesFcKavybLe3dqz7moidKD4AdhW",
  "key21": "5rwgZB1oGyLvfu6uesVttRY5zdff7sVuxaf74LXuwWY75cLL9qfHgBFUrWYEoLUz3e1JHM1e1BtArY4vnQbDiUbe",
  "key22": "3hfSsLqDkQUiCoUnynbyXTMEyoEFa6nSZKntUDKDhJM4oNLWMYpPNDNHgh66GaBBqg3PYY8cGjwzuiVMwoGySBJa",
  "key23": "3EKCxzV2d5J4iYRaCA1R2nPz3efgbYzZBnTggR7yo4N9wqetg7UvHrMf6JHjRhoEahENzAQNb1LfxZLUQVvG7Bc8",
  "key24": "rdrH1x7hdCkkayTakECR9QuE5zPZ6mshdFfvQqNm1FrNkaAfGQD6arzK1DoXPJtxDoK2pFyASEuWyD4ghvr5guw",
  "key25": "5i5eajVvCNqGYC3E4fK6pDuTXiVYEuj8jEsPCVvJziYNkVKtYPNzokJTVTvVD4mpDeGaDPP7yvPSr2QWSXGeNTcY",
  "key26": "37DLoAKGBvJ7Ndpb2QJub3AhfHnwA4drjr9LMErz28JyyJLwc3qvt2GtJtFypZKhsh1YEfHcvsv6eZi4HXc23D8D",
  "key27": "XQTYDQ6vtxRASGucd2KT65BrcABbuAH53aFFv9VpuvXNCVAjT65tQF6dmCMmjRvWin3CgqCkZ5dhh91CpBdxwvD",
  "key28": "29TKaBSDMsK7Yhk1Fr7GjxV18jQMEHFXEMG1h3omTxyGSgrhWnH2sfsbPFmJjLA8Euo8dp61ioLzCz7XW2c5M8a2",
  "key29": "pZEQLoshQxqtdHsdY1gHsAFJPSkxmjVUewhqkcrhEmU5T5qJ9TniAfK5ZtrLSqNntPpQ9eCKKMCxW6jtwXPYKUY",
  "key30": "67q8pHNfPx6yL3bYXgc9QinCyBcrHQS8A8N2BBam5RyVmWhnDuqfn8Z3gjdaCerXyT7xBm4PKB7vU3D42UWddjVr",
  "key31": "4pRKB5i9ZuxyD5wfKpEt8AmVqekHbFNkbHWgf7D5NDtR28tTySAgPbKC8cQraKWqF6jX7igZb9qV8PkHaUmVgZZD",
  "key32": "3Stgjiew2tTx5eVYtDA8c6ja2CL51t6npxGN2qXQzcgWtSPzB2GbhhKC8qHQKSi4rGHGFy6VptiSKhhESLzjmZgr",
  "key33": "3J5S4vthcfwVHraPSwQqXwFUSbbRR8PCWqNqDsCaTicDTrRc7DcXwd693D4SATyXPPBjRxSCz53QooNSc28SywqE",
  "key34": "33PXPR8KkM41Wga47hUwdeUamRALHcom37hBoxt5NSVS7j5651pD2hoZf4d7dZHuFQVvR7gr8dahj2xJj6kgWQs7",
  "key35": "2S2ww46q9d8ZswGqNdw3rfb4NrsGfMtNLJFi1281Q2dST4qhbyhC5ivKZQZH3kgzweeZBtchwt4DN8cN9jPZ8pZw",
  "key36": "4Bupf5vtLsZFvKmJBvUtaFL2YkGKb1x4zQNMJk5F2TdrmbXA8fXHU8Gg3uR3pUQJ2FZXqsDKH8enBxmKMK4YjisW",
  "key37": "52qLxgQeNpC8wY9MasmMBywGLDT1bqGXiLZb1TCikB2r8dxqJDgwqERVEtemk9AFFR8pD375FcHgMgv6vt5EYLSH",
  "key38": "2TcXtVpjnWZnwhYuXWkBUcaYyDhzpy9NXUzb8v98Y6osjfnKAriZUN1rBNGBxAjw6fspPigZz523h3F4VCKm2jMd",
  "key39": "3gswbRMnJ5jpX93XHYz2HS99hTsgson28KLosVv3tpyotd4PfyLzJGpGSyPEsdaSk8PNtro6khZtKJg3RC9AXZVo",
  "key40": "7tFwncXRH3Qz5AdEDAv4mYGxeNusQ9N1jDhwPKi2nEoj5z1CiP36XiWGgdn6ynMWhNJBtqrEwGebWJwYgzmnyQ5",
  "key41": "5sVb687sA55UaaEgcpwHJKHG2vgoyoNHtuofa98eZSEirYAtXBQpt26H5bbmaMPS9wBudjHtx3F3Xr1eWhgzVMys",
  "key42": "3jgDroe3564MacdddjgEaKdV8ZR1hVV3brxKGTVzkUGGbEJVmJhpwg6SwiJWLsLdqK2hpngT9jN78G4AvbYt3exo",
  "key43": "4oj6wCWg79pa6VNQTDnDbxVUTvAcbsgVeYUK4ipae5D3SPiCQCzn1xjxPVfESASKWyR3X531U8dXRBSp8hRxYTZV",
  "key44": "t1pFFZYtTW9Ddv6jj4nDMgZhzW5gErfbZrTSEntyAuLrjjCemmd64cCchrfnGxwX1ED3TpNemrAVN2spESxvwVM"
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
