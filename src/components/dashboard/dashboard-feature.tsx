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
    "34p6h6VueTX3i6nHLru18soKKRF57BmEEf1eQjGhXDcGrSRVmBsaT5R4x6eVBwQJutqDrz5KZYF1X2sy6pLyiiXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qS1qgx7vds8Dzd4D3DZo7sxP9PG5aZt9Hfp26PakhDwQaDt1ZANwo2agp8PbBo6CpGPTSKk4GPzqpa8FdYq34t",
  "key1": "3qbfK3TGji38Uxc3SQehnQ34D5ANV5khzKcrgMgcgy2pkbEExVCGo1HT9F8YDPdE3s5RCo8tH8NUAUPXfKcMHjNm",
  "key2": "NRwwHStR8jsXYPCbhct9kVygzBkckteedLMHYWbKVYP7vioga6iPDws9qzVq8h16TnDGPSEN7e3ZFamVD9gUJcL",
  "key3": "4F5NK8ugEgk98pdK2MrSA8VD9ApsxofrxwDdL1AVCKyhpqQVP7N5YGpvL7Z9vaSzYXJX8YFaC5NMtitua29FbxDE",
  "key4": "5K9FC7e6S42jXyWd4Dvhy8pHAKxkrDbvbfoNhacWvf5YdiHCocaoLLfkuvZ7j1tAkmFFjfFshLM6cJrkMeoHHFGo",
  "key5": "xMCAxDvvUsnokoGwknrSwh9iWDchRbooB2xr4fLVGGwWku3iieXw8PgDs4oxj528gLtoGtmMH3rH65fmor45ozn",
  "key6": "3VqdB7TJ8LsEHQWLC7mcL44sXf3Yejd4oiSNxmTmQFdY1zHTXnzZCcp7kWzVbhF6H3jYLYemRWnddsfHDzLguY9",
  "key7": "UyWHv2FMWmeykzL9i9WXzPnT4vJG1p1wQdddQXBkTDyUQx7SFJdpup1bawXwXKqwyq8xyb2HHRRzKEAFpLrCRWZ",
  "key8": "5vzx4snBQAKsuYU3SxbmK1CVJkmLGSd6jEjnDksCs9rvABtpTzPvZUoyKQSmww8ZMxp3eYZa6sFJprr2FLubxKTg",
  "key9": "Qj96SJQohsEqDjnC23TyR78bP1wegKTJrMnb7wcgygdWivvfWVX5U7QqhnP7AGMUvLvfUJFsTPfSyT87xa49HjU",
  "key10": "2QwTarYbNQqyCQwyfLh8MaKWjMzith6nJhNTG6r6BpdqZRonpsLP3CbWxYiDN45gc4dnFjGoi1zfivp97C8yGVkW",
  "key11": "qSF7qHNxaotPLFx7Kjzzd5L6zeM48bSAXyexcJasxcRvMKWQnVf6CB2WcPB7Mzn1EX6EzkhmHB4vW6oqyYn3neK",
  "key12": "62ZqcNbaN64gdD6cHQqazw3tPGGwLHGJBpbuQdsrd9GmysBDU4tsb4vrV3zmeADPtLTzb7czuVtHSz9qiAUvmPrU",
  "key13": "PjLTyZmV4S54bE3YTKM74oKMMf2TiJj4EuvRoCXbcNcers4kg5potwpgo9wKQKsYYPFS1GLfEHnoZj3XF2yjJYP",
  "key14": "3jRepNTDoTjnhpAqasPQMxKqnzMx1tUALKJf5RRnNsXavSvsZedmmrFwnUJCRb55mkxazzYprcCCry5AfWePab4W",
  "key15": "2vcCGFRznEpWLF3btw6tjw4xgpFgcrxEKiQjq2AmzcNT3qSiMzzG3Mn1TBekALUSfwLWrh4KSC24st6wr6bmJexq",
  "key16": "124PYjAqnChVYVn4S6TMqcUVJ7Cr46dZwE8GG7GtBfuzfMSFFpFztnoiJ5sNQn139N9B5C17sHaeV5tZkLHAxAgx",
  "key17": "TezdqW9VkwWQ6xvbHSBteJ7MG3GHDo98w51VaJWgvxScpfPBvvqa5hh4b2bfQrALCfPnr5ioCvPthZbE7XTYRnF",
  "key18": "2s86nt5GyNDfEZL312JThwXH7wM26GucjcnHbF5Z1H99PAfJdCF6RoZYULvBm95qNE6Dh87sPAdgHZ8AuY3Pjy51",
  "key19": "4AUZGDQ98vazUYBDWJfuinZEphXJeTvK6r5sJLZevfASRkQvyj3YQZzdMAiRArErXJZwAUt3N8a2erLj6qBwNk6C",
  "key20": "2dqbd88z6PTUiDgkaoveLWeWBiur4vvbzJ7EbQ6QkuxxVjygobsweaWm6Z7gi2ko3sugWi6cLZVeafn75V7FpZmJ",
  "key21": "2CCYNR5SkoBFUSpHMQABfX4tXt9KTc3qHv1VH1RQjbPLU4K1TZpgBrVDhAGRwyjCYYBjVTPBbD1b4K8Msjvw5kve",
  "key22": "2bvbZoD69U3RqiezfBdpsMbBL1ZuG3edsFNxkvgSznewAPeuQ4UidkincEZpqSTvGNW86nUBM6xRmbrgPZoYUD3v",
  "key23": "2oXBdCAeecqtbgjPm6XUzo5rr3xr1whxYRhL44NnqaGsofunt6FLVo5yXinrBmFPs6Lh5af2tTkyFSHqvZtQBiim",
  "key24": "59Yx8fTackgFpF2rwLRPEun7y2qCRexauQgi9gUoPTF6NgpojWNy25EbDnRGEsYFi72djcgQHrLiahtF5gye98wL",
  "key25": "5NpqDiTfhxaxJ77eph3bprLF9izX6xKPohZ9Lxixd5Dr4Req5P6kFLy3Ke2SWSWGneqf6jjombHJs9vxZZvmwNHP",
  "key26": "4YFajF2CqaRf5p1WKq4jU1GEP2BrkU3fnyULjfuvxzotbG3bBehodZEXsxEByNbpQU7BSuxCHLafsiGz4YQYJs8r",
  "key27": "2Fb1pv61YD3SE2vT3tfDMhxCjk2jKC9nmZjsgnnqJkU5XXQhnoDfxPSGDGCf7PHBar5wX3RBjn8WWfxAq8ZZ6bgi",
  "key28": "4YbmtZgRfBxhf4itY3VHqBbUtz1Aa1rnREtoVc4FMhTwp6siKDSnSmwkFQsfitak3Dj1qHeomdwfDTwEvLL6J1zf",
  "key29": "Cn6hGh7WPD2dyEHAXqnMMWmCAukzXhWCPwmDww3XUwDXAuNsbwdKoerwiwsY8Akw9uZZamW6ah1yv9SE6ivjVkn",
  "key30": "41N5QEF555QPLED64ZBbeZ6wajPdTATF2HjvmE1S2xuLykbscaooioEAncRQuAD8uX7YZGv9TgsEstZTg9pg9FDR",
  "key31": "4eaZGcvz2ezXr1mJQNXSxgKoeFtXWXwkjr8GDVNVS1i4MD7WEXz2yxxQqCm6rZcYbSbEhp1rgfZBJEdTjxuZttNQ",
  "key32": "21HitZ1kT5cB19NtViCRcN3vw7wBjPF4jivGim7wsBp6u7PnEiExv36WhZT7LcDx1cQ8BnaPvMA63BTWXsCBNxyw"
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
