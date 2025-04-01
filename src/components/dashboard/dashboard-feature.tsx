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
    "4685TgsfiiWv7XrHr5joGw3HfCxGXKJmtYunak8ZNy1kWhFgRxyDmVwFGZ5j1JYRaKJohHjLj9xWZDyGBykEQ7C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XTznZ1Fre5XJKyXJDGrCHdP3cc7vz8yUoiZfqx6K56eBK2mA3Q2BTCnFo55hnrXBLfNGHRtRgQy2vAvk9cESVQ",
  "key1": "5cCeUG2PW5CNuSxigeBkRJxZao8bfN369KTA8k8CbFRJRJ5SBEZ6FaZMWVo5yPZL7Debc7J4p6JHNbsj76hFNKCs",
  "key2": "3PeBJmDCqBHSQFcayKLwXC994oQLbgaM7pQiErGBrfT7mDx9Em2SdzQWSxtCBLJxG27beVwnQGqi1gUUrFMpWzPL",
  "key3": "4SgrMK3DcyerXZ66t5SXm4R8RSXcVPTxP8EHZHWjiufSFEq4TkMTERA2yhmv84dXCCCtTPW5hcyyajWMBa5FgfE2",
  "key4": "3hBNBdyY9coiEU5gScnTXFiH5tvU7qcN1zMuV3n7sYoCLU8xZXe7fUBByUtdEzX5tM53G5SCzvy3LUYG4qUcji9F",
  "key5": "51PUrF1w99Sfk96gy5a4dB2KS2i2zrxEq7BcA7fJVtfrmJL1taJaHHQPuyuciKHJS21AjGALpa8MSUQKhgPTHbWa",
  "key6": "2EePnke2RvYMJQZNehcUT7UUYh8zLi4tpC7JfegmcjKTHjnwRX1e6G2qU1LHM1TDATVtSd65rMCN9a5J4kMUbY1h",
  "key7": "6294eoBk9NJ4W36TdumJAVHemRDrxGSmMxKaNZ2xrQqSZEMxFvJHa3s9S4fsS2UVe4VeVnaCoaXu4KBrKqyLXYiR",
  "key8": "3xCijwvoFKnnvHxNEQsR9rhYPQkNQ2etu89ApubUK4jKN3YruKHoqV3WA32geGY34LHGbFB1Mv6ttEQYLoaJqQnB",
  "key9": "4433y3A167umTzaWNx7TFvRQhbwVXeh688phze7YXnnCbNwEQnSqdwyW1kMmwAK4LVWMhaE73zxSGM52971sLp5L",
  "key10": "X7Buxjiy3iew9WEvcxRE1sUaFZHFR7H8GwuNopJ9jkcyYp9muWXeYfVSQWcpk2JrF6qohnkAnnXKuHqbrGCcm8n",
  "key11": "qfbNnvnKD7Sn8p9ornbG397mi7NnGx3hgMXRKwK4ooQJ2FLwnP2Simo73XL1pDDNeHUVs7Mn12Xh27wMDv4sKV8",
  "key12": "5VCtRJrVjrMhXS5ihBUt6da7STaTkT9eMinFSS1iwRPtL4W8JMx6cW8uLKftNzZ7cNodZuy3rP8CicqSNKAGtxoL",
  "key13": "622aX5rAuvj8M1sNa66SjxtPuSS1dq8AKYuG7vYANQJJ7MB5SyUJoVqWjhgjLG7ET6kEvC3kK8xoJUg3yXCR6iMs",
  "key14": "53yTd9jQXjUa3zgay7QjAZGNzZL9C77NGhz9cngAipdRF7EqDTboPkfuFphwjBvmFFFPQwK66xu5opGR8f1PXq4G",
  "key15": "5WbyTs4nHNRWBSKJ6iAJSrNxNhHnkWfEvncYkdeGafL5i14mKDN22ukzj3NvtaL425UBURFyULuo6wJHmkr9AzBj",
  "key16": "4Xmy6G2kyX2XrJ89WS6Lk8gPXjKyn2BTzo5U12vb7wpsEiDBuTJhvCJ5kScbWcWKtRAiSEYQoiydb6oGtLqe4G8g",
  "key17": "2Q3zCSnKJaurxtueRKtd875DGHkQDmbk6MUKbJm9k75eyTKW32HfRvXx4DrsrCDLmkk4YW4KnT8nJBCQeKnB2LBx",
  "key18": "3aRumjqNQ4dnY1ttvcvh3VJboSh7FjQtrta6d4NeMmSPZh65mczJZvFun2PmeLHDiJZTLPaqLDHXpgPGTKCMur1",
  "key19": "4MPXcWHLBvxQxrosRytgjiRs1Vx4TY7edCwDaWW9tUrggYn8tT8HzACQfPWhzB9gi6JeCKyJN5Ki2vepozcPepE3",
  "key20": "H2aWtwSbAaugzERCN2E8VbYsmx2wxwCj1hMCiTwjHMN6fG3C3pUe58nqyPhtnSyrRFMm4pDyLY2ZDjBrMBDbPUQ",
  "key21": "4BbqPjjxNEtZBTRNnnJiQg54NgaDFmcCzQ3v929f2qsYyMRxkFDJddmEdUEYaKt79vziXhkGeNqcRLXL1pnZpbuw",
  "key22": "3gXfCcyvdmoZGj3PsvEAQxdD3kz57X5yM4Wp1HEFS84BfKMr3k9ytxdZ7hYRLJquVbyghnnY33S9nfAiCgFSE158",
  "key23": "3cXDdPsKjqrshuoE3681GEc7ThAXx1JwbTLHyH8NQNzhhqFo9vw2w12YVeP2BS8GmDi1wddnfqwain9tcVDvci5Z",
  "key24": "3ekuy7vfCQbU7Z2cRiEQjLbPuTCQ8f6TDGgRgsi33P8roAECcy2fYwgTpLgZvEoCNmMhMv68gD7FvTLEgjB76oB9",
  "key25": "3DaJuuZAgnWS1mHgS1JFnHL9FuttTothzPsLdenkFexgTMQVknodhSb9VPiGCybRS7efumjpowZK195EtMnN2vxU",
  "key26": "CNdChyWokbLkzquz1RBmL6WN98vgrNQ1Qq6o6a8cungX2JmJm8CGFAz6jcN6MRuf6XgF8jn3yvtmUf9gzkgXXJ7",
  "key27": "21N1kEogRN8bCVQAmCR8JhEEbY6fZ3DLHjtniJb9wmdVofDbg5A9anDQjCRD1tcXL8nPrpdifHF8s2ZCYZeJxHkd",
  "key28": "f1N86BUfaDfrKjBgTakhS3Zz16cCn9GsUBXryun3ozPfbFR8ox3X5Eo8AgY6ZpBqbAwSzW37NLabC8MLrtfjJTd",
  "key29": "52nk6ps5TeLeMDb8fNsCzLuNdojCNVH9Dto2CeB8WU6VzJBGQRZRZ3UjBwMJRcjDcRntdfeu1rKNBJDngFvoyPe7",
  "key30": "3WbhqWyhUVxV6TTKvjFeU5FEr5sbPMU38uaWwCuDrw8V64HPj35vMhraekki3HHJawZZjq4pvoh5BChErbeUZpUq",
  "key31": "5EYysAJQB17U2Kg91XpW5giTt9je7cLJydXLTevPN4KpixoznBh43RA3pCr8mGrKFqih2QuNzFfYjyyQSof9neoT",
  "key32": "wBq196HgcmztvAT5adCysbUw2w6RLh4JkDDKUyFPwSmRYuzcT4ZjTVzyo9fFocPT7VgL35CGpXQ8c4ceTNU3Bzq",
  "key33": "CvNU5TtYjbArUZR99kvqV3vayh1K5gmXg7x78dtW8jgnChPi1yxc1TyKuUxBnTYzTqA4bHowjEijBpJiNc1iRZf",
  "key34": "45kMiAmdjrfbcjcXTBqAEFn3w2odsZGxJKTaeHXiTA5tBj6cBaPHcooSUkzBoWdpNjvfidpAzpmgHL1FWappYvY9",
  "key35": "2hN5Cq6THr1eaZfgMP99WxicTjFPbuPG6oeM3frcCySYzWixWS9TvveZRzZeL8GhRVqcWJRrC6Mx1DUREvL1Av9w",
  "key36": "4YATmr5xoodryVLtQY7PMKk8hZpkE3GztSvfnFZCh16Kvx3e5gnedwwWPX2ZG7MGHVzWb1zAfAvJgrpiA8DUUttR",
  "key37": "NiEMXr3g6Qqrpo559nrs1miSob5gHqhL127QB3qmkiVssPquyPGSrheXFw2WEbB8S1dZ8MXJmVuwywEcfAF1T3V",
  "key38": "5HJ5pwZSYspZaSPERLdGgigM6F4fUL3RwgLFSPLuasLUxMAmFahY49586o7uqnjPvDkXtgY3RsWCgpwjZ56Xgusx",
  "key39": "2wRSb8B6JQgv2W1qxoz967NEGjdCZ4HDUJqZ1QJEs8kGxiUqGFvDWaWbVbZTL5Do1QZgAo47hUvy6MRyGHRXWGuj",
  "key40": "3eXiALz3XXu54J3RWDbdwtDNUy34n6ek2qbzBvZ1jrKcAVLwuszW8pyqPReJgE36TQkXwyW7HKzTJ4ddBxQZhRcQ",
  "key41": "33fpjsbVamQ7YwnLxrydJc8NkeAbpV6ti1nucphzMyzR2bJZq2BXEqqwNtJSS5Rw7mFvh8jZAb1buVd1tQq5g3TY",
  "key42": "36w5R6GDSRzJfxPeCRAqfZKqBWEKXMaLjwnJyKY152X6HJCrhwkxMiJFTFiV9MNWRf8wRG6Aq4Wmy8FYu2j7LYHy",
  "key43": "5eZY6FTxEfpvTDXAvX6GJhNq6rNdXePuLuGLoTWvUMQNR4d9FMJABqCFSPVNUrLjQu4W5EZQNuTFhgwsgysAMxtv",
  "key44": "62btsULSWFczvU9dcQfneZGgrugR8k6pwusfUfUR8hcmu2QfHdVZZJfdZtbSQawP6mtqSY2gwUpG9BkzmVQYbEYm",
  "key45": "oAreHZBGL8tH9sgm5zw39biiM8Sb6TmZY6KDXG7s69Hbe6WtRJHqDgRrziJbcjGyFi7RnsV3AwxhSy7UV9FBZNK",
  "key46": "3B3f7XjADnbMw94x7oQpiNvEMu4N1aSeQ4jqD5uoBt3vzxCTcFxjozMddVGTt9mVk2zYvyUj8G1LC6SDQCNPM4bG",
  "key47": "2nzVNvexy8DxazabkMmJSy2RTcDDcvyzqTkvALCrUFxwKZ8uiqx8y7vYJWsHgMfRtcJoLHeNxpGSNbqm9NQBwWwz"
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
