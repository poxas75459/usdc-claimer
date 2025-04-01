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
    "51yaQ6kE2zGbGZuurKD5DAgk7dAutGvwqKB9HC6RDsomeWuHPmki8Md1MTFHZhTQB37yn8TVutqyxqDb51RAbUR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAP76mucX9MdxQXSTnUdN9D9TzuJtJson51xcENXPamj1M9q66PQchPoFqnaqUxf5hdhrxZyFQd48toENGtftQ6",
  "key1": "4rDH68LSxUQ3i1TUFhMuyAjzSVTJW9j3PfuoGYJvyEDHZ9XK3ZYuRrNZ3wK4JESd153Ec6TT4sNZ6RjCJDP9vzws",
  "key2": "3Jk7nMjLJAHKdzpWHGEVb4Kdy27qRmjbiqn3JuRaEi9gcLYeXnUcYwR6KmRUyZ6FT8rJBB25fpEuiD2g4XhWiAiy",
  "key3": "3nuYF5J5AsvXvyYd6eb25gujRex5ed3VRquae1ao6mt24UmwV5dMXZ5BoG4PSArffeFL71miBAk1HjFr6ZUSNsPv",
  "key4": "28szv2bhVV6zDejsefpE7jQUSmKiWy6SFzc9gZzWxpPiMp7kr4GNawzmwFZwk8zh8b1bJLzoCx5cPvwVs2LUu7Qa",
  "key5": "5z98racgEzieiZwnVDGVGXWug6DSkUXi9Xrvmt1aUwHQAv8bmXiHtuSb6n23phz9A4GEL2V76PFoSu4TKxuS1C94",
  "key6": "3NUrr4q8HGGPsX45Dhyvy9YsaDb1auX4XvKy65ku6fB7mhoYXzsHytULMtxyBZGC1E2aGpL1rHYsoTrX9i4t4R3R",
  "key7": "3M5jQsmZYBzq6NGYUNQYTXXRtSTigt9Wdsm3GZDdpRthJNovecLQzb4oeogvPtcW82hmyaBXuzeqmWZUvMizRoAA",
  "key8": "4QzZdSsD9n1rLUrfqSQkS7A7XWK7zdEBL8LNc3jZUksdZ2YTWUyJbfukZnvLRkS2N9wpepsnyudb2pSosEtYmrvy",
  "key9": "4GeHXQEuEzYahCW9EvY8dQBYvU79vt58ejr14aYGWmqecT5MoYhWJwmXgjoJjakeFzrgeQE1XJhvMvfZqvLozPfh",
  "key10": "2GbLqNniZKqjETvSDhyVzwgftpfR2XNQy6WHaKnbcjqZdpvZ7P1z35EvomUWFLvZXUcMXvV5Dw3AHfakoGqKMgmi",
  "key11": "zgdWnL5mRs5PdMTsjsS39qBvih98TQ88zHoF6UiDt5jhi3dUTjEQp1h4oQ1Nn7cPQKbeobjwtR7CCAjkKGHCpbP",
  "key12": "9LZataK9H1oEyY4MRbuoZVAaGVeiMmEk8usKXeTyP8P1RtGBUkAULLGZxA7tzcXkG59ju8Jw4oSqjdaH1qSG7jg",
  "key13": "5AJG8zaWHLCWiy34cRW4pyt9xmxVcTt3REezR6HGCKC7ESd9MWYPmGqTfE3nbaaYkJ2yHZcsRuoD8s2mZT6fXKuy",
  "key14": "5yXbstxB7CaXQ2WUqmrKsC5TGerurVbhwukEkRTMgehWTB3cvYq73NF6iCmH6wHFnJ3Ho4jxK2wyvHN9t14E3F3u",
  "key15": "5sptqakZdKWmY8iy74EzYgMASVRfRtU1SPG9frrStViSP2noyrTTdTuiv1sFWvCzwGdgq7NPZ6MjVipWAN8a497X",
  "key16": "5ZG9298vejAK8wujpPSWCzKRs4u7CynZweQuryPkBg911tvMCZJowRD4vNKAspziSKHhX9cHsP8AjkKe8EEEZuWT",
  "key17": "2cdBd197Kp4RVichaorvMHNN3EzRXbVkW7XH1ZCpFRUUkKx6GY3khgADhavFXotEcVS4y3YQ5cr3wkM6rWYM1Erp",
  "key18": "5XM47muHT4s23yxeYZ3qFf5jYw6ZogQEtsaVeiA7bqdL1z22ec6yY5pURUocwYXpbzxvnTSHctKmDwSaDeXbBtoW",
  "key19": "4UBTKzsehFjNhZ4eS5sCcueqRNtgMkqYpu7tvJFfwG96BdC1hXWPWK1hCkD7N78zcnvJn3UjaDxiacnDU6r8U9xZ",
  "key20": "5G8RmgHxfbAbZbGjPUpbfvgzNnx9GJoDhrZyZYwhJ1R86TJDsqGgVGGgt4x6D5Hg3jVFJ34oV1s6o44DyBmdgSQF",
  "key21": "3VQ9cohm4GfuFJd4ywKWgwN6iegzgJc2cG4Q6YmqXcro6eYzVaoWvabg8fiip3DkuLdti9J8tgf6PtsdcbQcQ3Mc",
  "key22": "32q6XB5wfUXLvk5fmQcV1JmPAhzzmnNgqAAfniZqGVzg2TrFJHThuZv6XkwEYUNhXTw3JZJXFPPnmu9kqY3eiF5V",
  "key23": "2Sqbu5Cm7qSVdHxe3zcyeXpqENv12z9He8mqCyQsoJVgvo1eAm592b1uwSgzniydkCGph3iMSaV1Jm4BUtBEtPg7",
  "key24": "fCKq9GLZrYnSK3LEfWBfmmNvb9tchYoAdY5W4L8SZD6PpVtZT7vhMP4cwdD7GkFEqBgmMDM75Z9HsUr2e7apQQn",
  "key25": "WcATctjypGqkq3LbZrJin5TzjgLpVnypaTmog2W3VSEAcg1PjGRWXu7dzcs3WcbffzvBdSDeB5dqz4YCmUS1es8",
  "key26": "5EAmiQTH3TXmc4Y2mKwyupLSzbiqcrAfFBDsuR6Hra4NwdU1M3xMBgdSLkcJq5GdZhHEP2UBFHAupEFLzvoJgSNP",
  "key27": "5yzff7h6oysn1RgRi9TAx7zY1dyAnf1rBHjZmhNi5RoB2s6uCKxVgMdwzqjWqSiBiNRwDYrRzuLqhSonTxSJeiyJ",
  "key28": "4trFPHLjZULX6xbNo7qRsqCWyQfi5BRifZPQurri8QK28RbCCdXWdW2hQehsm8Mn9ZaS3NkE27HT3nxzj5vdPB9Z",
  "key29": "4LxrFrbQyECErUyuwvs6FdpkHiVsjpvSDjFcEueh4qFqmpw878i8AtYHw3gw29DSnr64ucBSyjk6GW9N32hJojzZ",
  "key30": "27KBWWNP7UTZBCTKn14dgqpgQhZCYd18riaGwVQDSmXNKVfZPRGzyJSb59kv34Dt6gGUscnNc9eNryDUN3aDn4gm",
  "key31": "gshufB3ruoFgMP2vh1PjqwnCGiAsANTXxbWiMW2XqzUQ4p7EZ3fxJT2aezxTwoj2bKVa1ocUF8ShoMJSc1U3inx",
  "key32": "5tzts2ttMmMALSs358p3cEMSpr1b2M96fDubeaUzFq3zvJ5q8X6og82yM7M7cDUWFEV5bFrZfZMv53iaqk2ibAKq",
  "key33": "2Z1CdeGW8eDqLnfkLXWf9jb62xrLCbiE6LzNwmtQP5ycGVHVnUugNnCjxksrqWWTVvKuDuJJsSuBHHSsA3rCMhCZ",
  "key34": "4SFejuEt2cecgHsd59pH3fPMPXVgDLaTDsa7GtxjFZ2hgBwu7P212YbyxmXdbFpMEoZDcxkZQiuBvsFNqEAMQPCA"
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
