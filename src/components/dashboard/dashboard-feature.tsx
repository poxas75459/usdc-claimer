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
    "gK3FFGomZ69L8rUypCz5x8eXh45qNnfZEHSdQEgCcnhL14DkAwGMiC3RWdU62EqvzMM1Cu7Mi3PWbk8Jdwo7sfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfWEAYRB5R9TTTPYdDjskN9GbBpwPZ3H4eDzeJdCa61y4enJSz6cLJ49y2Srcuh5piuKFfqqLqQL1sF1sQU8PG5",
  "key1": "25Lx6FsF9VXoyC3bS7b2ro5HpUSfQMVqW312ECQK6S41er6rqmKb6gs8Rev8iwGLsQ1o2k9JHoY3FBx21rpoTEYT",
  "key2": "5GAxHjU4HydMF61cqw61beCRFxwN9rW9TSq4VpAget1asDyy3jfsLPTmbyEWCDG1VF7J33tt3e65m3mGJVecmdDV",
  "key3": "2eqeghjCJetk2tififRJdAZKL5Nat72f9ARGkWn2qiiotN2oc7SqgcNG1jsDXLLGvU9rNWL3QbCSuzeE1xEUUiEm",
  "key4": "3ymtuJ9dsWQjSKyzMHkaE1vnprKXkUMch6WEc6ER4XgLJEDo6MT3nhHjuVcvkn9KASKEFEmv1JTphdQ467XPEnNb",
  "key5": "39b7h9GumXbdPFFzBgicQViZMeug51VmaBBhWuvK6JhCe7zMm5ukVWutBiVXfZQTadFL6nQbhHqLCiNzehYqmai5",
  "key6": "qNBhrPpeBFMPAg4zsQYuma1UE6NjcSELgcjtAGVPUudJCdSRk13N9EBwUUp58iC5RXMzF2k8LPoUm5Gv19sTb4T",
  "key7": "vw4n6iN47m1coRn2BkRG5niL3zynLBNXstQ4EhEnV2NFxjwgLCitLm1jA9HH1tMFBaZkVSsjfBDsJzCzUoSsuRq",
  "key8": "2oqGbXK5e9ypCkvbTWBvh2m48HE8L2qUq2bAv1xXi7TJdkXbuUUKsmFV582g3rLbmh94CTmmeGGCK1WAmCsMXEeq",
  "key9": "4otj7FUBoeX5H9couHso4oFSoJwoFsbmjwFU3Bdp2VzDCeBsezZY3J3AEsoNAhurAqzdpNk2VRwzotx2qkmmYW85",
  "key10": "4VJhnFokRFP8ZC44Uvj1rzsNzNaLZP8ATtsUpmYGdFuZca2VFyjDdwJsnDdcP2snvgcd7igET29T7M9mjh6v6jgT",
  "key11": "34Y1gCj6ELt8M5b29bWCQf7m7WoKS66m3snVUiwDwHYQ6MzReJwsRFDNyMWoU3eSau3R3tiEA3FEwhAsAyNobDM8",
  "key12": "4awyARaTxUyW5NTWvk12Wa1nRADiXHxhKtosApnN2HxHpWjLd9syrLUwsbCcBdfYVk9rLh1UMx9DwE8wKKW4E1jA",
  "key13": "4PXFvnbheLwDAD3FnA4GDzrUPwjC5rLc6F5oaSuini2kouMpjvwSJAjz6CH1s9QsYD6hvAbw28WZ7x1sNJf7Jewo",
  "key14": "5UtiYSmAg9LzrPvw1aMEZux2rFxG2faA8cPPGzgBsFwZQr12Fkh7LvLJHSDpU34p5mdqR93sXPw4hQWRW8pJyR8f",
  "key15": "53fdZ8WJuwPq4USjEGfdZiiHzwnigZV2X629Nwx4xuPBYvsy9CH3quGryjJFcqxaeSEBdN4ttqa5NzHjbYU5RW6j",
  "key16": "3P4xsqQgCnVEpqaNRMc1KDJ7JSLZS3ySaLg24zhiJpn5QhZSgjSyRkZ3D12rGwFsn7DygunU5nTxSV8tJ8JcD2iJ",
  "key17": "4Po8iMGJzPjyCarfeq97pwsNQ6R46T3RL7hx9fcoEH3pFSxVik5LykhrfSji7ZEnfAEJRxyTbV2zqarZvUtUqCvA",
  "key18": "xmRQ5XGVuJABHteqnDj2XrLzrVvgsNkdQemS3zukTg18p6moJpHSdtfw3ajuYxXQh2AtsSiGuA1HC9tpQnXQ516",
  "key19": "4gfwtN3k5UDi2RzNYHoZzUm9bi6cFokGqBLnoNcWQHYXtD64ArdmX7ZrUx4dSQLosQGrnh2SxbFJKBneEHwxCTzB",
  "key20": "4UF6y4U6NY6aeqF1uxtmz6NTq75wkvZzVU7eVrALNh2Nju1fpEXJpAVMwEgJLnPTLPm2dctRih122WHBKJGcGiDh",
  "key21": "5MH5mGdy1ECrwGN4zcS67dRmdetWqh6ARpLXHiPMnCFuAv9MeAQDonE14efw8Hutjt6px9N7LHUo1uL8NbGXxu2t",
  "key22": "5qzCEHohqMUV25eYiJu7g6Ls2KBdN9MM15mLzPtjtFX8cp2Yc21ixy4uLpedxfVrbyvUCFNbJGZvcMU2vMH4pVdr",
  "key23": "4qVszpp3K6ChJhpHqWXpP2cBCu7LNHfFaR6gTdAtnNXYXqZqAowWrnXhvmr1UgGPnfukkfHusutBniuSYyh8oXzJ",
  "key24": "28BJwH6vvPnmmq43ZuWM3Z7CGtaHAdvy41AyYG2UVmNu9sEj4MFX6bV4Ji8F3q8d8LE22PDJ1LiGobE6xuJj3XBf",
  "key25": "57RCsrsvEegzwH7ZCRVi2MceEpY9wuawuMkmHG1yCfXEUAuo6YmFXjseVWKv6G5FsorFJjKhn4yRS7vqnsrYNBAr",
  "key26": "38aGigNc8mq6nTvjXoQD4WdUbzsLYQNtjKCDBnbxuBic5fdqvVz7Gs4CZn5VGow5R6mBVXtaVNMydZnaMnqccrH7",
  "key27": "3isQpBA3MhvzwsWF6r7egt4QJ6XqUJPLAteYiKpop382qVFpFMdtYwhvoie3hvz4CFsdmytqWo94JzVThp9gA9zF",
  "key28": "3sTCAydjxMajymY4qDkHrEFdsFy7LF18L1JR7ruS3xiaGsSHzYfuxGPAwRb8SoTWaHXCUM6hHZyaVPBjtE8dtEjq",
  "key29": "5M9qSyZwvExiGRTH31iSww6nG1MG2hC4XuquaQzQquqjSVyjSzuirWhNCn6YcoWoec6APAGeYuUrD7KQsyS9Ntsc",
  "key30": "3akexcSAH3e8GaX322eGJNJW35zsfv72TJB5w62jK9afKwSDuybN6SkWKcb8B9Dit9n5wMCXeTeKWmHxK1FuGVnj",
  "key31": "5RXqtdw8Sg7WxHvpRj1WhTAUHwtQBuasuCRBq2uH7zdfLPxWm91xndVG96A3HW2dZkxVYCQs3YeanWTagx4Wxwm9",
  "key32": "4ubPv2CrA3Z3fPML3uUarKYbRWMx2mWto6KJqgfYp4snBaaeDTnheWUzBYD2QGAuBAA5ZMexXEXq3A4Bep2gXt5n",
  "key33": "4q7moBA9DhRsr58UwXQoG1gB2nJRD2EFQLXs3H65gHSVA2CyY5zNRVmUYTp4oKgPPN4fPVeXTjhKzqeJwuheu4yd",
  "key34": "2JjM8Dy6CBgsEqWVsRyUjfXg1qhW31Q2LL7o9jNc8FjG62LhxjGJym4xQUsFRHFj7Wzccq87iD6MJ7frj1ZyxX1J",
  "key35": "2Q2tNJ66Qhkauvz5eEZJTs7mxmQSVLYjJ9UFNQFn4RXg8jRYsa6HVsvoXpN4UhsCKUeVTowfwrEZ33mfSUhmwZ3M",
  "key36": "3QvR8He8gfiK6Kt2ozXncHSpczXVQ8sgeDoj6vjTzPDb79FooDEkXYznDdHKMRHAXNokJ6Voq2SLSh5GxK6VbHRX",
  "key37": "5t3V8wghtBn2sZhRQCMAurxhTcKfpdLMzKxz7HpjYEJc9PYoWLoSCssagYGYNSHVcBuxS62Fpdw47XzvJaLH7RUZ",
  "key38": "58jZTgosMFrpSRQh9qiLfW7tiqKKjynphF2u3dxknNk9p6Cpk1AbAvguS55btXHUL5nLhShPVHcE2aznD8ju18KL",
  "key39": "3uvmimBRPuYJ3Af9PqwRm6hN8SufzyJaeorWSuwyqB15g43dK8LsHJvkGhTQemKXwfUquXgVhviqEo3JsGUGgCwB",
  "key40": "3aJpmqrk7dx5nR5PPS92SJHHs2CRWDK4HuJmSgpNHQ3Vr6KfT6t8HfaKgnY3J18bxtBbs98XaQVCvaUcWzJLzifg",
  "key41": "61QPdQBTiVFu7RGnGiUQ7Lme9EcjSzbBcJtrQvF6AggapwkZ3hStyVPwVpchBLwYVcjq8fThGUa7jNQczwqEqxnP",
  "key42": "1vLUWb9kHqRB3DsrrSy4h5xpZgskyLXXLEg6vv2GJKxe55MKrBcBGMRN7vD83e993dqwsaN2Dguy9RnuLc6y6Nj",
  "key43": "4Jjjh8njjLeuiQVm6FTCFEJFdgUbvP4DE5LgFKPYgQ3vJA9xhjZVSQBS87eT1YBxGtK7ikAptdghU7b5cE6NW3c2",
  "key44": "2JqvBNMRHtsXjEgbFCC2Gs9XtMAScnDi5Lyyhr7Uw8xugeoMyHcu61hDuMDPZbzSJTyb7sFpY2PQRNbypmX7Hwqh",
  "key45": "oEJH4w8yagx2yMjeNNydD5arevU9QTbRNfF2BWaBsEAfnpCaXz1kUDcone952W3d5HyPSPQAVEV8cNxvwQWdEXf",
  "key46": "5vuTwPNsMNmn8H3vim2pJaNH8MhTHQx6GSfaxtRFdxh3MMBFFcndUHToF42pQVpU5xU3ahSTRXt4AR8XAkzTKxKP",
  "key47": "9gE5wpQw3i1fMVk6DQkvMbpse7EH9fZmLP5oG1PFaksFibJE4YEfC1nRA7dsq48awKdvSrQU5A7sbpkkfmhqBrZ",
  "key48": "39Eim7K1nz9Cctj6DRvg1oUmbc1WY9U4V9cp2cbqcRipad74movoVoNikLegjpWcHUXe2bUnWT2VE4xpqGRb8wPc",
  "key49": "48WvfLe1PM2NciysNnLR2iQSp3jyMrztkojQyuE1ogtZfErT452XRURCsMd1d7mbqhaZQnJCu7dZRzg8VGz9TeZk"
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
