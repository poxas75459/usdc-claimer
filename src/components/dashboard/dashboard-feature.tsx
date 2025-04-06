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
    "3dKsEXx5YvZBqq2jQ51fnqDKM69mcJScmYb6vczBNfxFUAVpT6wmKZrG7pUJQYa1asf6oDBCgvfgp6XzPG7hGYHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwBAfy3xDwrRoDJJ74imMwUxEikQTnt3TLmwCcHJEzauPXtfcVBK63BmHqtAVVx6c7qTWNUbZ43NaswvKCyMR7B",
  "key1": "48yrptzpeRjyfdMjjnJYvpxDVjKtozBnYdj6w8p2baEsHw8fRMkBTiHhghEQVXta5NTuNW43vZ8dHM7fpar1rP9P",
  "key2": "4XSA2YDuKnK1wAxyphLJy8Qqfv1TUWj89u8bZUY9fi9MSoWT3HE5MS61JDACAhxA1fGs6vpLvcy3n6dBHgZ7xSS3",
  "key3": "3BbbEyhYw6QBSaXiQqAmvZ1MrwjBHQSmvGzgQWKijaZocUBpjc9GjXFJpKNCJbk9ph8d2Ppgb7GMgHrJEVn7DG4r",
  "key4": "3Vd2Vtm9UC8V5A4ocYEkJhDZ7azTCawnCvpEQvCTVjaPtMGrFe8F4gUHhKuGu46menaS6jdGPCqBYWb88Htj139R",
  "key5": "2QjGneeN4YKccWsXY2vpwUEdAxNBBoG3aQKwc46ZkcUTW3kW7wfJHxN5xGtj1ceFjHB3DwCtdL4eV6H87hWHwdd",
  "key6": "hrUzEG6DHQcJ3q9Ydmex6pvPMHg7QE1M7f1nEtYoSuJntJ4eXq1E49abBV2s3SbKhnPVnpPTy2J56BAW198Q7PR",
  "key7": "2VFYb2HrZfajEAKPQw9DAqU1xu2c3rw6TD1Nexh6gFTYoNT4sEyofEMUK69SScZnhebKQKPSK9F3oHZ73dgFdDCo",
  "key8": "5juXQMbVJUbJgfEgmAKJBaSu4tij27AsgK7fJGMUXzpbGnyvxuBUjGsShSxBcKdWdGST2iMkMtpBMY2STvH2YYXe",
  "key9": "4hLtZrJuLDwDXhg86YjMfR45uMvP7uxcs1FkK6EiKQhNqoWhAMcJuwDHohVW4ZSimX5gcF4oVjHbtkZd3LmZDbqz",
  "key10": "4fMdNnXEqhTAJH6d25CCvWs4RRR8rz4B8jimmttBAVJqN3K4w5TjhpApsJokkAzN9BPC47p1jFkQZyng724pcVii",
  "key11": "61M9PMy8Fy4wWr1SYMm5wenLhi9mnALMVVFricHkqSmeep7o9xtj5i9ksh9xzrwqvtabvcrvmhkniSWnmkejrJQs",
  "key12": "3av1Hvy5QT9Qkq3SVaPeXYt5Lo3E3BrqLBNfKSvAi2tXbJbXJdB9VTQTDJT32VCy7xqzenzgctjYn35zfS1NQXBN",
  "key13": "4AK1g1oMGs7jnac3WwF2MqvffzbPumaA6RdVgLfKZje5Bzjhh8UvNoYWGiEtv96X6h25AWmTYuvTNcLu8aX9eWVT",
  "key14": "3wmBycGhNYTSMFENVC58ddgvN9dHHTp51MpJsLotZMx1A5WCKWfWJDGbwkKRjq6jwvizfh7LdWUEq28Ee9z5hSzc",
  "key15": "3fkEQ6WtDrDRjoJU3n73RjaAwmkQNPFLjpiZaML5to1imXYfEfSvarS8fouTAvqD79zgXHmWa4uJNXKh6Q8LXFwh",
  "key16": "4MHTSoU6pt71zgqDjuaDBuQ565uprXhbBhYHgBPPFckKkpQPaoEKMWyiX9uV8Yv9X155QtxEWZPv5QQzPdM7mgcD",
  "key17": "4mCAnszFhwvPMV4fn6bFzQtGZu73EFwWx3DXnvycygkgUnceR8ctBFpcA4Fz8o7RjEqb1xVicYk1xcsbod2kXXbE",
  "key18": "1zb73sN3kbTT2zbKsKodsegmeRgFnMr5seXbJxnNoLtGUuKtfwXVnTioDMFSs2y5bxW1swGfH81P3Hc8SAUHAVB",
  "key19": "4meAdjZNiAo5wPFMzDdwL43qA5nzemXJqAMSAsWpwxsb5C12eVrUvAqXu9fGqn8Vv8kCTfFAPjvmtNi7FUavNfMg",
  "key20": "5dKGarrt4zBfiNoUJztyhuUAMfYDCLZ4DW9TfDeHco4VCc5AQD5Gozx8iGMcKeRvfFvAFvRQ3ZmTc49wXA63Fqxz",
  "key21": "3vNixmrDTU5wXBfo6W4855YGfFcn1Ad16PfgZwCa3nCgZjanXoi1R7RbZ7pCu8XJaiKHnYB61x4278xhZUYysqBK",
  "key22": "5y7NgrGarAxPVXSerMXFMAkLD5AzkThVhyNUgxYk1ogtzTVWehD4vN2Ccq7YxcXXKmM8Thw79fvDNM8hRKnDtzp2",
  "key23": "52KrnwLKA825fx6maRHaUA4i3haXhAsYAyq8R3Th1pTqQX6DSS6XT7X5AXSKER8MKRS1ZYzci49M3a1oLG7qD5y2",
  "key24": "4uK1CjhdNggZ8DrTcnarstthSYgZ8wkdzBBcEZny19KHem8LnSxV75uYBTDu2yfh6cNgZ2TTRe6EJgVvb1VSRfDz",
  "key25": "2aEhQ3QzMxHLuwZJewYNy3zGHrYefuKnhdRFzb9eDXuifnWfuCBas7D51ySPWzrjZJFZR763C2nQJ7rgtXktHMQ8",
  "key26": "FwoTuDKJCMFcdEwjhcMyAscQf49atYW4tuvW4WNnw7RW6kfvDjAohmYC7GKErQAdWsNj1iq4upfjYTqXoHH82nQ",
  "key27": "2tyBjKLHbLZb2jwd71MJuG6QgMA2KjPDaG3REtv9FLdYMMiq2dtEFAcdNecM691LJiBYTD3PWdojttuD96DSmzYU",
  "key28": "5zsHWdDEj9VeDb17pNeEiznioNVMVyrySxMJKtq6rU4w7om1nqxLvQmkW11a3zhTXf6XdeoizFje6EGvEXuDQ3y1",
  "key29": "3rg6ehhUpKTkMjYLCjzoFkj4CZauX1kjZbDqC8gnjQH6UXaHqqu2DZ7dgLWxDwaTedb4eKHa6x2MbhT8wG1o9h8v",
  "key30": "2jPiBNRjMMydrbL6rYQtaNYopsKWMJTuNVfuk9bxnaLAJXtmown7YZE62gX6jyQbmGq56gyExnc1pXCj1nkypULZ",
  "key31": "58p6CJ9fuE6mX2ete7WiWb6ycF7JxYe6fHyjUXfgJjQ9nrnGmznzRiNsvm11Gyiwcoyb9L2qiveEs5sFAtqnbztU",
  "key32": "3U62fSwyJqcZnHSQGc9AmE5aNNmFP8ZpWS3nKbDTewp7oun6CseJUZRE7TcabZ5Jz4Jh28VPxFvuvzP33aiXzbTR",
  "key33": "5vYmU37FKg2bSa7LNpNE8cvsD2fd3iMm5E65WQu6mM2Q4oDw7aKwv32h2onyPdnJSSnYf6XmoeD1PdUZdtXjUD6K",
  "key34": "9w1x74Ta2HWCPFByoSNfJg5jEJeKen9r1UTjq9ALGMWvdGTwZaLad4mi1YPv6C9oi2d9iXZxS8n2S8WXTzhoTji",
  "key35": "3B4g5jMo8Rr3YmaXvmKSm9qy1NMF1Tddk9tNg3Rw3XiALrsrqAEFmwwkdbyoqneF5yoiqiG97YEKfyndydVn8Gnn",
  "key36": "5YCdxSYnfdy4C4pdgbi2pfSg1fsFcgDff4WYgETv8CCsYdP7XT8PafCkruyKGfaJwkDnbS8yUSByvAMyawstczgo",
  "key37": "4rb8UKzSgtCVF6wrZ1hgFMEMq4AXUVrjajtv3xCbDPs4GT8HTUkghAhY9k74trJ9ofPRSAV8Wd8kzVT3zhemV97c",
  "key38": "3QDwmh5EWorAjZ9W9w5VNV3DMkLmwQYJXKd6CYhyM5uTdYVW2VqLxFph5tWAiEkwxxniNNCjMCTuvFsYfu8fKPp5",
  "key39": "4gUJ8goeBE5JTUDWSDtxjfbU9ykHbGmtCqCQxbaNwJmsykapB8Dt1mrBQwST7Qirc6DYyzPUjyY3Av2sx1g7mA1S",
  "key40": "4agup2ha3TS34GYyQZ5W4eSfrLQDU3QAvr8BsWTRB73jp7ZatZT4o3PRgApFvQAVNYRprdyqfBC5yMERFukqLgPX",
  "key41": "5zUQDc5Saw5MBTKFipRQPiiBU1WsTBs2VcSDot2WYbtBwi8C3eKEqxDWyxaWdRwtFz6K2sgro43f9KFsavrZU6JH",
  "key42": "5HiBcJWEhQ8Y9sc18FS1S8upzojzXqQfLhvrSgWYGRp8dx3XxrKPVrDsap9dSaAjg2XMZKrW1cn3WFHuAZEVoRQQ",
  "key43": "3rnbpAQ24KR85RxF1TcWcMvgdcEHXgx6a9EDmvTF9ppkZVZY6aq334RM86khid5AKDsXWwvNifQXH3vkL5cwHv32",
  "key44": "3pVZ2ceMYQEyp2bc4vAfTGsy6vYrwpEFH7Er1YyAtdbNX2VgtEKaMnj9FY7SYcSvVMeh6UT7q3m4sQmF4ztYR4Dd",
  "key45": "38TctQ82dkVnPqi7MMaaKM3PHhcNjx9bsnp9gtmKx59gBdBVqeAViN7fwYCkqxDP5jTFm47g3KJou7xVTeTidKx8",
  "key46": "5Z9fg4y3B4eskcjcYPxyjWDGSHXjeYGPASVvefQbjmHxv76NAnnVYDiirHdstaMKuiQ4AxwWKetWFAC8meZo8L3H"
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
