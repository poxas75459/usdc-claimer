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
    "zZ7pzfPTrTCYJuEezfGRpYoFYTzv8zyajDLcjAztjvmpX3uCkpHELabSznJF7vjf2ZyXbvx3VXGpkRN2bA4ruTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2MErswTB6VSDrt6wWCa76jDW3cSJrLrWkyVr7F5RtYWpaA47hmc9ZokfnziSHcuEG99Meuxa2xPiteQHuomVLH",
  "key1": "3YNLdTH4bsSTrKf6VZdqXExdAePDi3onanwdgNC9Sf3KhvTKiHM4W7ZG68t1AsmU25pkkiAMi55CHnaXmbptsKdM",
  "key2": "66kfNaBzehA45s9RQccDWkUAdZ47WibbG1Ry5Sfx6Y1EA9Kv3FSHTiZPGGoeoHQXWpDKUomiXsCHXqxxskjj55gM",
  "key3": "3HaAq2vvQ3WxVmwrkqtpLL7wUKmUt6WCbWbv5R9ir6oZM4hYK56g6b3fzjKfVAdgki4QYGkowf2SnAuG67oQu6mX",
  "key4": "3XwMbzdZreRYefKmg7Tkbw64JKH9cxZwLfn2WDnFbirQp5CEaenF5PoTXyVeLP8uPtni9Hquwmc4uAtzZeUmGsEC",
  "key5": "2okeVJXrRLiwyEo68uwGBNiR2ujP7DGqj1tmCYkMo9xAov94o1Ks1VeSRWZK6U9zGAvfEqXa5HYLYhi5ZYf2d9Kz",
  "key6": "2TK66T42GTAbcxgDBxyMLydQbhoL9LB8QqaQGWVruatyFANxkNX97ucF4dGyX96PC4DYJ4tw8L3jrUBg51rzU39W",
  "key7": "4NbY1VwD13Mn3YgJ8nMn2xdRW4kvSVWRrTd3aKnszv3M7yTJSUUAVvG5rxuWcotyoK17wLdAWoKqX1R79zE6Zb3M",
  "key8": "5eBtYVJz2vJGqek4CYnfxksNPXLRbkw7kFqwb47EMuVuafjuJ7qxqZ9Ask95MYBabGnncXWrFfCPJ5cu3VJX8SYr",
  "key9": "49R2UEfzM2sb7uyJBpQzqHTrP5J4zRbVqXLpthP8oiRdcaebpkJrGkbDnQJL58oUkZZ16ViKBNybTG5CE741smEY",
  "key10": "kYQVMqFZ2fmPH9jrDxKf2ycUBGhNCqpBUXxqsfvQSgrK29LTvvpregrRMH5Wmshj5Twkj12GG2hkhhV9j4cjMmk",
  "key11": "2aSbnaFtzjBq6mpUALCX2ygGwxE8PQdvHFjdyk3oykeAM5dMVDMJJdZnE6nKHbmeuJv75iey55Ake8WHCFtY1BCW",
  "key12": "HqhCDRSufWnuUgLvDrgR7mWqfK66JXTjGdAihz91RoENSXACrhfyR4amV5sE8wSatCHS5eefvc9hDUPkwoWCxnK",
  "key13": "3R635WGhCbDgb2rTzWyByWTYH7GYRsuRWAKWDENF9qNnp9gkCrtHbeWW4xQwvP4Gx9hfRPJVZtdNHFd5b1vGncvX",
  "key14": "4hmvSsXK7WiLhFn8sUgtdnHkxD9vzZEk4rgurT7Twym9YzFLVngavqE75qHnhEeoFnbRRSYpBtDN8FAKW8uenUuz",
  "key15": "62zovE6cDujTiohmxRAw7rf61fTX6icHzGJm7osiW6ci18TbVGmyrC4cunF2gkhwG7b5Pk6Kmyb1bjo2TcpmfKop",
  "key16": "28ukWAvk8z1LU3uebSNFz9W3fnz3PJUcp5v6tPhfaby7Jspkpz7j6JbSirr1QbwiSkJJy97BpMRBgLJPRk1ZV6yN",
  "key17": "48vhyFsfgF5Qsa5fNubPbY7rLi6K8MScCGYVdqo6JWM5XTRZBP6g88pv3pTcdHiVcW78mfjDUxPnq1c8tCmmDCJR",
  "key18": "4dwYuVqJh9D68obKpBus7VW4XWyV3RdLgypyhC7AKn1hLcEpSKsczAg5SoRtchDaUaQN82CiZZ4AfJir8m2ARv3W",
  "key19": "2jjF9TujN72aJi28ZYsixb8SSHYxd93numL7pb7eyB6reHggRava3Leq5mTgxGYJN3zwhd618vjwfLbTNidci9cS",
  "key20": "5Foc4cv8z6ncdiYTrmR15G6WUECfu6nQsKfxcdwWP3oMPPA3LcioaumVBwszHwrJAV7xHBp7NBPkPMVnZ2eYDeX3",
  "key21": "qnNWszJqiao4cRV5TuCAWfsqoUEDrGacV1TpTF31EitfxxEY2LSGdRv16RVMikgrWdxgre8B9givhHqX4MpAkgw",
  "key22": "cDm8kJ9osMjHwXL5zrqxeCyRJLJwKDnARBFbR3jQKBAKUReNyqRVNnVy7XZ7356PT8gGUX8a3JKxRgF1wokMeZm",
  "key23": "4N4gEGP6H2kmJD9nPeiVkTPAHoAWjFXWaEiQbaV3DJ6rEDV32TSVpGbpkjySf7u5juVTYyz7nNAjoSHGYPG5SJDT",
  "key24": "5gJrwoDrpoGYLQdoTkahse8KQHCBDY5DpiTBexBTG94Us7ARvf834BvRjijfLv4pHtjz3tb14y9mxMgzGLwNSD6s",
  "key25": "3uGxhYFLnM23yQeaM7t4B5kL66w6nCDWkmveWB8C5zJxUHZJQjhJr4jCwiwDJLSwx8mkZMX3hHzwGLju1t1sMS8Y",
  "key26": "2m3HeHdTErepywEkY4XxbCnjU8FyidNTRMmkPF8x5SF1ug9d2uBcAY6CJRpwTiMfQ1ZeC4GEhqzC9RRPpsYW6c1f",
  "key27": "5o7rkUgvfSQkQGzuWMni27o94MmjXUHaCX52bqR4z3voXJDivipAbwX49tNdnSCZb7n2ShX1BNnrpyei3pDagiyN",
  "key28": "2s7meCu4mEJiyxxdKJkW1a125rSHzke8zKm9hZfRc18dHyEAG3RhmPSaWfDJEkRyAx3B7R1W7wQQt6kXNcPDgxgn",
  "key29": "4gscwEAjQE8qwCRfjUaRS9cthybPaLNCBgkkKv7G6kFPmBfqumj8B1JLS2ZyL1ZjWWENHRUBkfxkBnvkSNKrMNMg",
  "key30": "29JB2e7q5EeG57cMoBZ1GebhwqphG79LYXsWsHUyHFXEpZTDYuj9JKStjgqEdHp9GoN5YUTkyQTFzxLEaVVG6HDy",
  "key31": "2Uv8RrC2Npi5C2MXQNyJZc97r2KSGJ1CoSrUeQNAcfyof63Lw2ScLbRes3vhy4wrdsiqb2RgkHBWHq5zxJLyu4MX",
  "key32": "4VN9rHNZSC6At2A8V954xnKXFghSXZQxB5YgC6bR4Ac4G5usYd4Uc6o9JxVvnrJHvDRBcZMwVaZvrnugtPXJ5N4W",
  "key33": "3YHR5sghJ2vnwJXJ4P3v85aUo46BySJbmGctucKuhRzc5b9pbYAsLDP6vJtApZW4SSzyUpLVreZdyEkw7YHe8zZb",
  "key34": "31FkjWTSDHsJYYx3USENdLrpqFEovWiWKC9XuA17RrpRyERWKWwtXjZhe16uEZhdHSMSfvqYfwCggCEFFf8RyiJX",
  "key35": "eLvwDX6avD8ztcFeWYzHbRk1tyCEqPfC51TjT8gC37Tm3scQWR34afuDJr3NXNMi9DeBe2aQ2YAmpgE8xcYLKmc",
  "key36": "5TXCtpNrm8A57w2eMrHPZcaVyVnxKF6SdLc6F2VDBbNPWMor16zkJHHMcnvV9N9pUNidQ1CUtBNwvhnGXDvqMMte",
  "key37": "4nQwQcJWZkofhq2x2CDybZb26cm9yA8UZgCSLR7f46TADfvvo83noeMBd5ng7dAyRhxih1ifYvkiruyY6Gw62qBx"
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
