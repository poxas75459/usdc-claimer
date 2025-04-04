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
    "5Zh5XnPKmNt91cgJS65fcQUCTBG7bSnoN862mUECzF7L7wAm5d7sYfqshu1SWu9ViHd4nkXnNnU7xQBJfjNEYak8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPF5PzC4Lx9GXNxr79LeWFefRh7utWP3UgLH6cSY3JbKWdET6PyhbRwPk2ZV65kmCMNhDvzscy2JSTrXCe1k9Yk",
  "key1": "24sopAn5aUeJ6UKuQrQF3jQXPywGeU9bWnkCkUiCyTgyApWfNErHrT8tijAtwikHcX5jh5rdhxYMzwkd8rSG1Gap",
  "key2": "2eMETso5R1HzMQo8jzYreZabM2HAFMRuqiimHxBWiJZ9QTfttZoVheKLhnQKnejASFxfam3eDPv9bJbvAkyRWidx",
  "key3": "5GN9g1RhNrmL6d1GShJrZsqsKCL12pvNZqnaNzVMsMykv19qHg9NCvCp6UrqTRhmsLoENMec1sppp9xjyTfGpy8a",
  "key4": "4xMc5YDhvVh5emAD5Pym61HJMuJZUGAD191BQbyZUUtyya6CEebYmYkX47oprPff2EwQCD6CWVqrj7zKkTUdV7Rj",
  "key5": "4NFVN9eedaRxhEJyW2YP5t39R2gETPh13rJK6G5SNhmQ4zwABqqTrdagettcFCRYXTV4LT75uLuj7rpS7PhMmNHb",
  "key6": "2GHokeacxjGnLsSxWK9YDMHiVQsk5gJb2GUwJzDRu5aPDHGrd7uawPmA7NdwtfeGYFvsHuZAPoXH9hn7uYqgwcyS",
  "key7": "Eq2WG6fvNnhvAeV9v5P1MqL3D7eggjQPq6XLboEbsSguvJ2bzZrzXSjZ56UPB6YTMhZR6rXVF9SC5Ct8QPbcXPC",
  "key8": "383Q8kmMvKGAXQ24NHmLVKnCAE5XHAqgukbjpQavKNGfkRVPRERMziGpzdAgTsN34Se8zwTr4hG8PAtedf4gPRcD",
  "key9": "4g9D5thkJyFyZo4pcqnPtZ4GXFr26nWtPfbMh6UuPUw7eKBAtKcYBR5RdrH17m9z9SuRypA8dQp6nVFgNShH5Wn3",
  "key10": "4ygjcwuiVQMPDh13Ccxifh4oM28WiowtPgxe7491Szp14mG4JSzmWp9zNKH6S1YJKUsuoKiG8bD3MgiQthCbWQNf",
  "key11": "3aU5qGsPke7kbp4Cxhudbihi4proQrwJjryEqdbt3JHvgbwtb1G1JJ7SVTztEnsfdsb5JK2TFzsiCQv3AV1sCwhW",
  "key12": "3Lda6t16a63zJaBKJRjqA2i8jtT3waWr7VDbSWG75cu1Jd8T52nf2bzLE8XQu3YpY775Qw6ChmQehGmP5Gx4ffpL",
  "key13": "4xEyV3MUZsH5GrH4RVYbDijdX8AXvibMjNA9CChu6vcVX1ZEodBLA7vTKLzRHZAyTs84Fgvrq2XEX23RaCNfskp2",
  "key14": "4DJPCutktUuhD28JyXXovz23zFB2Bn4NakpAmkaFw4wXM8EZvjQJMNSNFziHvLQbiLbGwFTmUxC7V3QBb88qJHHn",
  "key15": "4sCVHBasM2PjD9ycfYQorBsNmoE9JoWGradEnmnWvcBQycnPgLctwdy8bgAZoEmmXZ4seHWyEAvweWWTyuLxVdLz",
  "key16": "3wmYvNxxe5hDeAVbvMq78hgzn3p3mFcMMFKadxfckVxoypKYoBPYn3E97qrxu3gVyXpxNdDsYk9AGPSLm7v7KjrJ",
  "key17": "49826obX9UTmMJW2QsRkAASEMuNuVr7u5E9k6hh83TRfUBe3YpQ4PTFMYk7GGdQ85uTZocRq4YmnQDGEeupEpzfW",
  "key18": "5kC6KQiZn53rUrRV1LkKCcT6BfWrRzfiyPftnqsLWmbgeUGp87eCfXkqHqN6VNQYfyS2HD6hg9qWrbmMtpqTZY73",
  "key19": "S7eVvyvSQELh1U2efXDMu5r2v5wFjQGpgMQ2heDJ8GvyK9h9zXnxMUJsZrRFA22ho7pKeNW1za91N4CiEmmyqM4",
  "key20": "5GSqzSixDs6u3dc4oRjBFBUCqotUzdYsZBbHe7h9VZJez8zFyg5e8v2jKCNZehy2a7Q1gen5pzdBK17Ryhkdh2bt",
  "key21": "5U3Ad9BQfJDJqKow54KosFpAbZv19fYHCsh7NbaGEHQCDWZZ1DV4YCkNSiXg462AKHA5NcSWyGvmJNp5ETNSatVo",
  "key22": "vPgVKySuEJX5kz41DZ9SyWf1FsiFubnvS6FSH96NQVoAZj1UJ7PjkeyXYR139YsHsGJm9TDCrumC8bFQKNz7cGy",
  "key23": "5JLF4gGbYpjcsykiUti79hTJL8NaSqbkNTo222t7vMNF8Bg95Puq3zzm3oJb7M5MNmjBZwmeowtHFuwoaXfKSEnh",
  "key24": "4pvWkWxZPF45mntDWcBaU6hb7ejuycTVRgKwaHWXBb12P8tC7jmvSpbVeVzUqjVWE6BencSrqjncFhBzCeWYGpqV",
  "key25": "kjchtENGYHA2ocMcHurVxkoRk4rw2cbweXKoggJrEgMJbDCaz6stJuWpF9qCC8KrZ6uikV35S17zj5wqgtNKEdx",
  "key26": "2zJbx7ZWk18GtwRci1EUokqGGV7EYSMjirmLx9Au7TgzTuF2R2FZtHJ7sHsuXLbySDqUWcRmrmostV843r5GDBzu",
  "key27": "4ahScmkcG2g5syGi6n2Wbca4GYt3TgTNKtt2rWti5kpWAKhTtmpRFhMMLYghZeNVgWTensHw7Znuw6VPEDybRWqM",
  "key28": "5FxDxc5iUsk7rjHRKgZ938fjBie4rpJQx4DBU6C566jyS1C7FnAJJr8eiuMBJnUectWJurRgmgL3wHZ98qGGfwxR",
  "key29": "4R5bCD59HcrG5Nn7TRsGkLZ6qPuFgz332cNGpUHb9TSXpAYEW12Zr26RiQikWFBWGufmT7xCYKhUUoexJgcmMcqD",
  "key30": "3q7UVjP2MBEHmTU3sGm8Cyn5XouZUBc7KArNaNb93kMcoKHPK2j62G6h1QHbn5xkMVF6acipM4iELYBTMbTRAqaU",
  "key31": "zQ2XR9iFiYsTpHg5CVgXuZFAe8dWx92A1mbQG8AtnxRGeZ2DZzC81bwxVqDmg4XCb1Rmi3CFAKTA6fgmNsU4Uio",
  "key32": "2Brg35HkBnDGSbstxbiKk1W9CtbbLKo6JvrUbY8MVWiT3J6PsGXNmeU4r44ENuJt2i2v2epGPk1oRUDC3o9nMY6",
  "key33": "3n93vPnme4rgRG9aZnS9daCXP3M6Zmc4zHYa1rDmaKV5Eu3Fc3tCyiV1iH4knBrSXWSJbVXGjyFBsxQRUvEBx31d",
  "key34": "53EtSK9ecBUsGCCQjNyoUfUS7nk92LAHuBH3HxMm5MTWHwQMg28S4KFJAegm7TbqYpbViF5KhG1RgedpCkaYXqve",
  "key35": "2929b63K1JocUecqT3CjwuPXybYVfL5tWkNEUPvJAUF4NFDp1Bt39ZZLqVD3LYYWuUFNEsbBgQu42zJ2VPPg9r7P",
  "key36": "QuUiAkqFyrVpaVb3Vi15kgzyhj8eFGoZXVYVzqFaiZFuK4TQtcu9LerTi7t7W8xBLaHUDmsGZsFhC6H8jm7ERAK"
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
