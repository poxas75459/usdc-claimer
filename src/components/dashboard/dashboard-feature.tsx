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
    "3DpE43gKUquJC2NLdCrDb2u3srm7gFfUARcJ48LzgBppZLawNLg2bxYas4a9PryTVkpGNdHBwKHn6MvY7eGrZuD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZvCvn4odrtiadQe3sKGHQ4YsyebcdWxufatk8cyC164MoN2FhC957yZ5jq6qeAgLaB57jfgUK4vf63VBCYFNwp",
  "key1": "KutjsrkJLeQXEeXTt6gSdT5vZ4nnnnRGVpz9TWDbJK9okf3RuVa6sVRUi5EazNiNiXWyqXn7NXmQ88X6CLmghMJ",
  "key2": "2q1bQgxTdYscTJewDZNjoxVSid3BbUCVMMgLTbh577gMpc8i8Hk3iGvbG8KLtjQWxyspbeD9gtNMA8fPSomYYNpJ",
  "key3": "5n5TwLZfuZaieaJSBRiuqaHo2SM7YmCtWjUTLMHjcGnyZPgvDErKRkT9ttuuSjSj8HtqyTY2yBS1auC8cju1CfVL",
  "key4": "5AzUKBqfq8EVARCe55xHRwCVNZiK6371At2XLg3nTtoS1nEfrYQsnNDyGu5QrURmj6sHfZBrL8HiHYGAk6sPZs1n",
  "key5": "aPFhcACFHUpfANJ6GMqkYxKPx7UE2imTUwMScNTCW1X91RquoHwCCTrrAY2L58nDCS9qAXqoSurJZUu9271UeR1",
  "key6": "3tiqgV115XoVbgVb4M3ePm53rdEYTV35AwEuBCrdPL1KLUTDTkpP42fjCRVQhTS3m5UNSYRiDNk5dX8nA1SMqmSZ",
  "key7": "PQe97VaNrdm4eSntyd8LWMDerZ4uxvG6fAPmCDhHBxkqAUspZd4K9qBaJvSWHDKJoqSkhifgUqmNJXqge9VTzuU",
  "key8": "5rqzw3XhYRA9N3HM8svedUwQPphtu3srL9joJKbKSziJMyBeNtxnL1qfVxknxvjej6U5n6hFhB2V9yvXqy3sJyty",
  "key9": "3G9DR4fJb9m8RmRj8eMt78EnYVLEGaFHSm5oHYhTS8DrZ1mM4cGKuobXtHSnmjUjbCi1zKwYG9bKX1auYckVW3bU",
  "key10": "5G1qWJ2QDmYiW4fCShQPm2nXVMmK8XkJXFLd2m8L8akCaqDSsu3kPmM6SW6ejm5Wxs4MF6U7qyr37bGcG78cKYWW",
  "key11": "4RumBoJy3jXcP2BwsJJ5WWpKqTyq4yRZ1MjjFmfTFq39pPbkZ6kEhJeDLbew9kbLBabx1nSmAnhxS76JWQiCzmB7",
  "key12": "4FKCyYL7WkqGfpCAvf2shn4RqnBN62pDREE9uuHPPj8KY6jQtbifFRcajsVsDFSB8v46jGpFXUcGM8utFU6jitoS",
  "key13": "2183Fjs6uYMnkMJqvmr4PMAhF9ueESjB2YjzZDNKYH16DRW69tkMSfAXipwbjf6XLH5Dp4pCMxbMxkMkzpPY8w61",
  "key14": "5kgQBD6ZRCU9BdWL47Z1fAVXupYtiaWNBjo287HC4jzAXbJM3pBgigTRLmLcwdxonN6HwAS3mJ2bsEku6qRhyZoE",
  "key15": "5HkNnpipKN7Y7NVamMdWRcYvmBXscHwPUqEVj9wSKL2hSpsguq4UdFpi4hF7NPzPvJpCM1sxj2NmFv4RB3DJpgza",
  "key16": "4VGsuAFwTZZAYi8s6hC6XsFUFw79jaJ7iD2uJdSNp8C9zhxn14bQtfYJgRU4P1Uw7CgdW2QByGXHB72isxuiPkkr",
  "key17": "52vcNCCoiadprujj3EXxsrjfeCRwrxneG2bb3krYyXrD8B1grwbKZCnLyXYZb7bYupUBP2cFgdQvPY36L2orXzd",
  "key18": "22WrFqoZBmPB5GvecwiewDydC7RudkfkFG4xBoVVPLeSAkcCnv9ogXJu8toKQV6iPabgfxKmS7unv7xiMkF4SgbC",
  "key19": "25VLivT5TkPDLNZBgonxyHSUUjpHSotrQdHXwSpecAgDoGYQ7Vg7XhwJDDfynJAfwcMgQquMnWhEsUPFDEEnFWuo",
  "key20": "5DefNpo5VxNtLFg9qRBntEJ9iZV8kQ4wUAsrZK3goqhjp3sZEecKphbRYF8332NyXkmQNJhQcZnHkba3uAnSpigx",
  "key21": "v1eZLihHsuJ62XpfxqWLvzFqvgNMRLiuwVEGLPFejDRmhbspJHWpDC7rCbGjvJP7cZsz2BjeKskifAXANnmT6Jb",
  "key22": "46xoyykUbSCmAG83bfSJhbovfsgYLu2o6UnpucxRj4qkJTZXkcPx33d5gFPDeAUNtbRu2DbCT7yQrp7V9fLJTrwz",
  "key23": "4GZwhuFFjuK33y8tiEU5G9VrQvNJMsSpwbJYU4HnDByf3tjHAuETkAs2Cd39TRhRDcS7cs1wSejDdik3brV7D6Du",
  "key24": "3NN6ZRs4HtudnohEVE4FePBHaGkourpKHDho1MeTP9oW8qpXy3MCy3aYYVojbSHvoxJabFBigqRcWZzYizHG6LxN",
  "key25": "3N2LDS8P7PjN1brCGAH5UPVcGu59AdMAyLbsvFiQHgVmxcoQAfu3nkY7XPCUunddhmd7kXcUu5ejbRzP819enZ3k",
  "key26": "2FT4iXkRteFRB8cS1C96vkztgxo1LLJP3KqpqfqYMUhmiJ82bPV1qZfnzL5UjFuvxxkL5jwzUBRAGSLNGWH2TPuE",
  "key27": "5E86LLzcpHCezdApoHTchbapEqaNPkAWPX3Ch8xY8PXh6guukyJzyi26nMKn6aRjBHpjkp15de3RXJ72fgSttCDC",
  "key28": "3s8c6AaKy9xgeNuZf3u3UmQ4t7BijxVzdR9M1eivy2nENhaDDC3nbiT1zjFsXD9v1eSmnZ3biB9oJpJMjaxYz3bi",
  "key29": "3TdP7Ev7GsHZVxU67ryP3bi3e3Uh8MjbyAHdAF6jxYoprhWZxy572VJVanAKQAVNYK9thWut8MkHfqov8U8NRmc5",
  "key30": "3oj3Cf4AAF8bJBoDSivyBHcn8jD2kXn5rvtnRdtKgajP656Re4fQRGsWo76VLfovG37ufCJEPaw2tuNGQHYmtiKG",
  "key31": "5pBgKDZyRrTUzz4Vzxgq7QG9YDMZbTkD4X8JaXoHddoR7xJgjUycNKtt5KDAhE1zLVzyJvXeGvKHPuuYZwaas13M",
  "key32": "F3z9LrHHVzxErw5QfR3r5AnTGeZgv2k21P3v6icj69PBmkSNQG4ug71FfdLUAvxK6A7P8JgLDQ3ove4do4sFDd8",
  "key33": "5744bv8JSAkcMzSqfvBg1KcZ8thFsWXnNFNjL5XSW23dzFwAmMJp4CMVQFoFDYpSzSKbdYcSDvXateA55aEoWETB",
  "key34": "5xoNvBMgKsrV88fPc7NBMARvXtoe8uhduKptib6DFF7w1bYYX36JLceBGRPHnY71rtEVWewjDExrUnvdxESUyJWD",
  "key35": "2qrViMx7eWAEkwCSvEjARLAM7H5ZM8Ei4DhyJZ97yPCTTdYGDgKExS9FHgRAkde2RVcrYp6Lp7RWKtD7eYxG4dZo",
  "key36": "2u2dCbUdTK4e8zjWcLK3zmEZop5sA72p3giraEvYjcgGx2zxE2pGzZh6poY8uSbvnRfxEjfTcTLJyawzQ7NbA4va",
  "key37": "2463C6dSRjPXh9xxpK4oPWF5VaXb5cwuoaXLwW2vQAibkBvKSSiRxaemL7dbEnsFsssetzzuLWJNGT2QzSD4MgAb",
  "key38": "DwzRAf27BHgJgeZ8oAWLyeTtm3Q3WxipDtYC12sQvo8FwvNweDfHUyR9QxQp15gEhFsA7spbxusdty1o6DCuxnL"
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
