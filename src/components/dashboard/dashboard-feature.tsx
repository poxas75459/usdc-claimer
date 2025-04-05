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
    "5sfssu7ujzFPX65FmB1623ATTv274oB62TCbDoQJYkRYmeEdoQjc3KMJeZTwrz5ZNnp9uaoMt3JW7fW2q74U1Z5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNnukUwHCq4vNZkmmcEWZQ3tgUfup28n31MTKh77bez3dBYYcdeRnepGZFinpMy1zpdkuZh15sPQELuaQ1RXv4F",
  "key1": "2qTLreBMrFeLdjteWw7QXBbDMn1C1Pbx52C4vkMxQFQ1Pr3f2YYWCNwosjJ3KfinZBExpzLY8q9BC4zRQSxUNcq1",
  "key2": "4Ezz1WXXXcta1eWtueL7jM8upBuMLBjYfqBqNhNEiJsuWrWmKJdUapuCKZVMRbzACfx8Z14LXhUu8D2uEBA9rQoP",
  "key3": "3ZSABCb4dBNsXawTT95RQn5MFCwEfq6Fa58hPfdsG5r3SjNDQBbKEES84SNuTNfj2bzYWPK42W7eLWLwBxKoyZSV",
  "key4": "4DH26xKjfp7obPqczLmjjvf6TR2QfYBGhdh42MxxZqqtfcFwXyseSjtWs7SwknbykGMX3WYG2f7zJy9gYgSCYGRc",
  "key5": "3bKtifFNyNTA45266rFxQVobhTQCz72rPG7DQ4xHq8rNym1vLkHreFKJc7NzXJfXTHwTvVxKzyJ1foPhsavEfYAK",
  "key6": "pvnne9T4AEbpFyUjXGobF297SNZX35YYHjsdKPV75Bg2JNh3zx1s56MGR7BjkCWsMLuNtReqCh4Et57MZU4JxZq",
  "key7": "3JG5gn7YXCNvHgk1a4rQGEmRyikKRSLjqARM8vaq8Fq1soGfQXPKnLbyH5GXeqyNxvHJGuM76wnpJfUZ64SZfFWx",
  "key8": "5NtRwZPVR3U9W1qyKX9gijBv6yhGyLKKK3P3NoZvGADa9h5XzUpdA8s6bqWcWTaepqojVgb6j51kHA4LoSKXL1r1",
  "key9": "4AymC4sNoomYtE9kuof3Wg8WvfFUhoasSDSm61wZrqV2z35zSHKc8FEqKBG7evsP4se8Ew9uzhr3Fy5MMFz17BoZ",
  "key10": "E6FXu4La1sTco1SaXWC4h1yH4VeeUmTfXgR7wLQrfW6GJXWgpioM6Gzir2XMLPvjJi86Zg7D4eGupb1mkknj7LP",
  "key11": "2Z92G8JA2H25Qw9bposgkxygUM5VLV3DaR8cgZULPTzD5iVAEQwRMuk2475XyGQGSedSUJMs8R7JF5Fk5tS32orw",
  "key12": "ZV26oYqTDUm6mfkTtDmq4DKZHvTpaVfNQ4GFHzLCZmJvswa6SPVMXPLqZUf5qH5gTESLP22eJgSN3hBR96kjrfK",
  "key13": "Hw9xSPVNbaonKrU4Lg4pi4FkNNeX3pPPWvU1Ckm6kfav4jPVJBvLVepNUwaCX38aKnraCNYW1vyLGbVzoKQr6WR",
  "key14": "4MAcKsCRgMwZsqPUAfJDqD7EGrhZy6VrpkTJaDFLG56avs6nJ2tULSHHjdm3rcNGJi9xrZSP3szrKJvyMZJCukAB",
  "key15": "3SCP2eQhPMn7kKBJ7jTaT5pkhBhb469jHv5KUHMTxvdyFr55pNEQR6D2gTYDLCWwCbSfHgyXrEfkLFSavmDfuHHS",
  "key16": "4HzftBFH6gjvdgs7bLYhBM2YrNtgtuCnTcvXW5fJzmqMh9z75k7tZ758Td9eXUYHaLvbfGDV8jUtfNTgX5HSMGVL",
  "key17": "2XMLezbNvwU6v4CTNQTqJJj7pegbJwfwv7BEWxqDmhhbswiKpafDoDAVQ8udKrW2ZMMPpDN7wwJwxU4tMZ6StCpT",
  "key18": "2SLMMFxaZUHo6M66RcMkGhCX97b5uZsjrpRayqmPohmS65yxjq8CsMzwC5wecbdAjdMotbnsvLPTzoy1ycHeMG8Q",
  "key19": "2Dk3p4ikFPSouwa7R1gWjMY7MSVrxEAixREC7qUeHsLfZi4iZwsnXLYM7wMxhrAhKZ3DsBv7rBMejedKHpEe3JWT",
  "key20": "3rmj5MbtyqjXqHkuoE9wBZ1GzGoFSHPbDEYpjYN5kXwyB7j9VhSSWysEQFjzetKryu9vrqsBatukv8UQ2KmS8BvX",
  "key21": "2RmjaPQoiyLq1FR5b6nQaRgiw41ignMotnuA9jevLELfod5btthygUfHtazwnAVamiFbGHonCPfHrB8vQ3hdeqEW",
  "key22": "5KcmFaaxVC18vj6uV6G3hne4EpWBJDKAe1EzLjUGyUXkT5PG6eqvq1JtD9VCAc42QyUSfGMEmDqxqoteUJzE3ANC",
  "key23": "43Hh3Y3MNYroRrYCRigGroChR2WTbFZcZvGWxavaCoSynBLZL3RJ2Dni4YgfgEq53ApbNkFkcgWvFV74RWUFRCyY",
  "key24": "5bmisM3dJHMojPAd9gfDMcRwS66DDR4exMYj1EqBaoCeZ5herBhY9S6ovMtWA695Uc746n2yGgumuEstV5HXpy2K",
  "key25": "3k6C64dAXf6Nu9xjpR3a75cuYbP6j1sGrYXjHeFpewDbbM5o3jGCijHv9HpQwhq7gdkgWa3AFnQjr3fRESNkXRGn",
  "key26": "3KEFP1tyeWUQqyQqR2CDepV447BF61PVEwAGdSmzkmAymgkXjPa4tW6jUxW3oxXEesLgn3gcyu7kmHadHm3jG6oo",
  "key27": "2U5DcE9RyVKJK1uwxfzuALiabMsEv2FSg8G3g8HeEeRkenqmknq7wwibF5ooBGdR3cHkrdgpw8sNmSqvgQnESTbp",
  "key28": "4BPKjoJQyDDgemUdtPgKTRxEKQVs5de5hT5U5nvTFAwrcbgPT2i3GKJbHvPLgdQ84Qz72tKqLTgxRAKFxFW4NqHZ",
  "key29": "5U7Rxah9mCYVBc82C1FVi3ic9UuKcWzqLHDBPNsxZkVmyHLNfPANdrvXbskuTU7emwMZaZnM4jAwqzJFJ8U9eeBs",
  "key30": "BGHmcnkrAeaNpiAvbdd3vePS1D9Cnd35n4JDCvirTXLg7Ejsuv6R18jqdJaWqWsfKhumW68zpWcn9gbRgC3Y2Ng",
  "key31": "3XVxHQpu43bxtnzFY6AYupPr7zb63pegZMKQYHqHfHpY6u9kHGuwM8Shms2JC2fVyxDT6NiNmCdSzUZJVuYDAEPD",
  "key32": "4MU254CfXLVoZZVXSxV7ta9LEsKoixkniEzSh6NKetQ7abwSNApDzs2v2x7pwbBGCUiySw9M13kPo81Ui1n7kB6A",
  "key33": "4iCakMj2XXpasPdcfR4Rs5QxFJrwS3xRyWhiwQpmV7JZBJ2p72J9D9rJbL853AR78MZP3f1geEPKV5RGjUYWkukW",
  "key34": "1mmUXNgXvdqeBpuZZbMDDXgdhGV1z74FwLaraVHfqiSUPkd4KNS2LZpzKgzyRDkhx8WogBbaz2TPB8LEMdrttj6",
  "key35": "51Pes39wrwKinDXLLhtx5MBdFwQENKviX8MjcZsFKHpdsJMQWDDnA23FRNtJj3Giq3DGEnsXrKNLCNFJ1hcLUZg5",
  "key36": "2W4R2cz3KcYvX6jw7CZ3S86HvkHdYwbhiJtvCcahwBovj2PeH8zrFJiWyoztwRdM3K3uTQuhmQy4vCu24rzeh5yR",
  "key37": "45R2DLUEHmioKStvpiuQseCStsCj9LhQPbqEcvJMKRHJQ9pmHFFt17fTaWkSmj8urCHcSNd6snm13z4YewLCcbEL",
  "key38": "2bFJYHvoMst8k1zKyyyjm7fc7uwmgsd3fsndnWbKhgMj5MWjUr7Rcbi8ruUD9WFAoVPoW1g3UQFmA88iuUz44VfW",
  "key39": "3sZrUqa45bGkR4XZZftz2z4irPDRrdNCeaMWk1QFtu67wgE73k1VBarZpPwyfZg3uLL53fhx3ASnmqqp8aL4o1PV",
  "key40": "3t61xNaunyXGmfVndxUgXKJPuAVrrAKNvbsA2vSKHSGaXnikCWKhSokEBF2cXJnZb4MeBxHK8LVo3PSxZsKYYEwi",
  "key41": "668M5gbxm9yzwG5pMWp6LeHWDkcTWrhHLR8S5tcuUkkywV2MLVWSuKxQQCxQ7dW6oqpmxaAnki21wwpjeK9b7ahw",
  "key42": "4G7KvKtvgWzA4VGGzLw8VdXE3qKWjxbXs6T3gKr6dum8ZmZNKqsjXLxTzR4ZcFSFaXjMUUHyTPENEw2YV3NMuU9x",
  "key43": "xVRqUJMR6EjEpe8LVBaedeRXkHWH4GywzF9YmCkAKwPwxJVc1JbpsDEj8qZjN9WR2zZ1Yte15MLm8KHRHbC8sji",
  "key44": "45byHEM8pD3MDo91j8Y7D5udebVLyCZktorgSPATmL4gk7s48GWNhhuHEB7SsTgBeRYWkusZ9ovdKm7Rm3euqfVn",
  "key45": "32u1Xy1urxCXrYTSEsxQJFg2jPBprstscdkXxqEA5XHtbr9imxtcY29hTVhTtXJjGT6pM4XB4mwCRiKTmfdaw9K3",
  "key46": "4x9t6W9kjTbFHEM6AagbSvxPtVM8uCwxbf4b4wqGnEr9efar7RAjd67Y4dCqLPpM6fAC9uU9ycEmQLxsfERWKpQj",
  "key47": "3GtE33uSTMYYwQUusYnG1q7PotRKYKqdqcyjjovdEojFYL8wiZA7gzVPGuhLKdQHxULUstaWiBUfRNM1Mp4RT8k9"
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
