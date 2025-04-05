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
    "3xti7yr5mwiXwwQ1Djc4hdS9wKTgF6X3pqFxcF9XDScizsoWoK1rupPvjzFZsnVwJJJxrQgUd3vwSZRZ59rzhgNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZU49vykt4ZbrY7mqoEpcJnMT7atvZTdxkvJjKwuR91LPbrjMZdVFZbrrDGmbfBEruePv9BmC6ZVSjMzKUitE3R",
  "key1": "w4tpwkws214WxRu9Gx3Le3nJRMhfoi7eehMomHCWJwctQenk919yK6YroAUn5D5R42UxBpAEqDgqnFVug11cttC",
  "key2": "3QqqUpnNcUuADXs5tERU56MoYmVoR1r8YzwkyC1jNe6UNbEqoRNWsgcBfhp41aR4TdMU1PZK5BCmVgT8SSSg1XFb",
  "key3": "5ckjc7Nooy9Lu2Lg5i49KHkia3bV3x6N1oZcsq6mNV9qGA2gC1bWTFckShffpdZ8vwjkuBcNiwv41ZB6ZaizCta4",
  "key4": "5zKuYiLqKzv36gG3P4r4pssy6NXqWFL4v5zSH3A9zWhy1X8ZjTGBijJQ6psQBmd6eX9u3BcV1uMQW1NwyXwY4HLF",
  "key5": "4hYoLhxaguGrAFwv36MMeFw9y6H94qYYxCv5nHEMPLzsaTuT2yUTNJ3SyxSw8iUdCGaVFfVX5QhRCH6MbWYbxWvd",
  "key6": "3fE3juJqeHhq4ov7r9s6WZKvAQnaRAcbjjoSy8gFMgu4RBZvohdVWSdF8wF8311C6tWTgkmSCV7x5WUbbq8BbWhP",
  "key7": "3Wo9chWtG6r7cygX3PCxJsruwQgsGWS8Qcaikc5CdJBVNBGFo1Eny1kvK2XdgnA6F81REKXPo9prKTWVLDPBLFHA",
  "key8": "4BDYpEGaG24apVtBJu5GL2cfbFABH9Yo8ebtAcMUqatobbiuXyW8DaLNuLW5xDL8keuv3Kapec1rBtJBzAocumaJ",
  "key9": "3UchWpKyCfMg7WtVHzgDHadrG9PfvLSSLDunmtNKwgfg3WEMjcEHXRMivWMVU4L8fc8evqzFQCVgKCfrm1LpzKgJ",
  "key10": "4bWfUWudYBaZHBVgx8PpcHDYgiw4J3MeSxtz1JmRFwYS17945S7KrfJu8WsycWwE9QDXBnxkUvckk2sEBuVwW6tA",
  "key11": "3kSXZPvnzSY49NBci5yfNsWqv14qsy3D9KPLnt9KqgiyjRYeGgrdDdXy1Jv5D1Wkqtp4inTw7eU8LhPYphydPwFX",
  "key12": "CeRTvRXZvvPxjhzgeQg2KngwVvx9NHwvyePJKw1UL97cUhbAe3PirkCwfEMtZWcEVLKy3aY7zvRsE39sigDRRRE",
  "key13": "2u7CL3iu891qxDdair8rDbybwc2zhcYYdDsDU5jCtpFGuvw2ituos5Z1u4qGhfkRQQVcFtinByfBNqbozccS8JFp",
  "key14": "Trdf4ncacYvRbqA6YmErV2zgiURsoEnWZn8MhCAGGnYekxQKdjHVHWJFsA9eCBz55ydXU7inQkqKcJ327RfsYqk",
  "key15": "5BnftxJDPGYnEiCjiZiEh5mNa3wfUyXaHxLktacyLNxBB5kFMAinHHy9Yqd7z6upCa3sQj9CRybrd9ZBui2UQJrE",
  "key16": "4wqEE39c46hquLYfEPvVRhafdV3pe7rvgkpD6ejiQ9puJbjaxDvSHcCsDb6Sn7ytr9TtX3uhgf2FppW7GWp34rUC",
  "key17": "64JaMacNgqvBESXaYizMaA7w5Csa6zzNb3DgisZaCNKiUvRqfcHcbpw5BUuJowbS7XYQF1cZdCn9XZF1K85WYLjc",
  "key18": "3uFCXBE5h7iDNs3ZHk99JUpFy2xPKRZDvfF1YbEBkKJREQfDgrwTkQ8zXB5wbMhFBB63oMUgcqbCFqipRLVBBDZB",
  "key19": "gMN68VFFQj9jsqv6xcup3QfpDGazreetsBtpJg65wEQgDqHAP33pn5ANg6pZsdB3tLfbWHR9tqzmZqo6Gu8YKao",
  "key20": "GkHLEp8euUwbzoBP2mC9gbhyCjheJkpq6S1jZ94XzELPzbAjLDy4xK6hH8t1aG8hHGfrTcpWaMMPae5AFMN5LQw",
  "key21": "4CA6VDzsw3Ev5vGf7Si2ZZ6KX6UJ1etfkhbE9jYbgPZ25CNyrnqY4mmu24cGHMvo9mvwDVAkHVZRoyH2kpFg2ujr",
  "key22": "S16Yxjq8wH6y1kynFDmgJGeR4ddFTyVGTv3fREMS9hu2Gg86pxsxovEfcBNnPGgSSg18anr3TMeRGn27hK6SSfR",
  "key23": "3Tb3ZyLRw5Jy6w2E4FHvQLPAce6EQ5TfYSJPY6FsDBmBhz7uom72v8odsi42ZtHTP9eJRbL4G5xnfjAnpnVoAysQ",
  "key24": "3NSGcS6e3HPHigCVvCAtnjHSvxX5aMbt5DCkWThzg6ocHvfcfEDKAsSNvitXiMqkDRAurqj9PMKdSFooyie7tUGU",
  "key25": "2F4Y5P7vJtMdHSWSGnvEtgqbAeCKTjQTMKVQ3UCJd39eYq9RDYnVNbsw9q8st4ApTQwCJhvn8KsnAvkWr1QACaXa",
  "key26": "2xH9WFBpsznFN93hckWFhiYDQy4ZVCW1N2NXP3PVkHuLTeymhjWWp8v63jGBb4Pe4unhR8mh8gWXn1aKti2JLxet",
  "key27": "25Yxg9MqxaCjQkGEKKNjZ5Lx3Lw4gv8r4dV7srud2mi3x3sub34WoNWAdHpYGpxPobpLyjkJU16fadJ9H9hv2P9a",
  "key28": "4PC7mJZhF3czt2jSq4ZeF844JWbh5zWbYVQDES4MXHxGzFxnXvpraB92MRgVMoGEn6yJTeCfv9UCiPZMkyEXXrTk",
  "key29": "4zrZhb38jh9kHhyqrEHBfV28PVg371DAymWVGBXhiB4vG8Crh5ib9StRiJrW1Zwi3c6TNG8NRVwrB4Z5D7Sn78Yj",
  "key30": "2f2zeWV2J9WA4jrM6eB7hdcoc8munkKoG3P6xWw3oqZCxbokWRgohUiPgthc5Yyovo47fm2toL4CMC4fvhnm9xgS",
  "key31": "ipRx7R1KtZeVv91QE8feTHwdNsWnzmUsFsywyxZTg5ubRhvvkM1rgWoUH88JFFYNjw7qtZqghpBS7GzJ2XFzziV",
  "key32": "62oovz7ej35cRHNFp1wNFFQChumLgTMLyuDnpHzBNdKVL5hwCpVTWEfDHzXE3phxbKcr9GnFoFEbK2xuhHNaguFn",
  "key33": "38LKy9CNCx5BbFdXxdurjMGYtjCQMiGWnPtqxXdGftbnLR2V4EYgXWyeToBjcfhKk5tSb7aAPyZ16QpJ7yxoLjip"
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
