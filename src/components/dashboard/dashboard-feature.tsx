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
    "2jspDLBxu1dh3QjC3QkC5BQC1jeFpgBuJMo4qQbq11cLUyBUbp5GiV2RuhLwtJp8uhBiEhg8wDHEdd8vZ8nLfxLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NH8ziE1zHTbTLEETwKoNTdDyaYGEHbnvdKnJMkeAtmykYC7vwSjdXxT6cKDf5KnHDh5X7Qr75ch2sX3KQQPQyKQ",
  "key1": "388SvVnHjxHcaaVU6KS1bBPjhgLNfzuVNSs1JELsmTqjDtYzEd7guKDC25C4Ke92RPRmaBMj2MDHBc9KfHhqQh3q",
  "key2": "5qG3onTmqjjsdgsoK7URNc3aVpEsndptuyFLZw7vctjJBbUJL39kDFb5oKLTPajBfnFDirFBan2pJPnG7TiAvwJX",
  "key3": "4SSUMwLPKFxgpbXDUENcK2vz128hdr9xd8MC8nvmVivbP6odgWzwafnrik4bravrRdodv1vWqVMPuvwSpADiqqYe",
  "key4": "uW2JKJPH7pu1WuNDpsJCV4DXFw3mSu224yLj1DUx9Da5Gx8FEmjE1U1MjevfuvmQ4EoMtZgDyobLSunYzxV1fEX",
  "key5": "2CsU9YhhgJ6jpoJxXMY8PBRmWyupniaomt3M1QmzWbMGo9zjpc4L7tig7yjQrvp3APFox8FTYwSwsLM6gJDHmCfP",
  "key6": "5eZXRcYt1ctSNdqzN6BSdoCGq4zCLhuygbidViJ9z1JxLW5iDVw2RjF8rf1Jnt8bxrjk3dfhZRmPVBYpjrf9Svg3",
  "key7": "4aEo5RbZk6NV3TeDvCYvqFAMJMy73Z2u36sJyKbeo2KQt5nMCAqCmoDcBunucH7betMwYwEfTpVCUgp7tHEsPVgC",
  "key8": "2UFh5oAxocS1D1fJdH6gUD1CwrgBkKxJ1CpyioqhMpBrFEhokjwaD1aV8TXifQkGw71MPfkqRFF4W4XaV2xuPqGV",
  "key9": "58bFrhATntm8tLAvetezAiiiVZ4ex1nNxLFWViceQkPazWq8Q7w1RTNFFZdsQMurEJnjSYAW7xcVS8jboVYcRNKq",
  "key10": "2L4x2nU4x51b2NwzfWQEJonDMXMvKV5DdHYdhVwJCsr1KNm34JdhdV1cYFYsjyjtXdza3WF13PzacVg549HhWFY2",
  "key11": "PD4scCFkWYYuueAWzxHDWv3RGxhxU7xH98Xoh6LdZP2KPMRhN4cDhnz8nH1AHtECQdn5B43fx9MmHHutPVENDT6",
  "key12": "6Qh9nf8PJjmwJFaXnauQKELscNLzJiEimHn8XsSyyfXRRCyPUmZzjSf41zoHGmb68R7Y7KBVMFLZ8fD9AFAjSta",
  "key13": "f3oqMsjoakG5pp8nJ24cYFgSSsKoanvSjaYuur7GWsQnr3AVGG3ZpvrdTheNt7LEPMaXhtM1AsSjKBkQJkzho7R",
  "key14": "5qKNCXqkschwNUe6JVV5xKGivtrEy23Y7kN5YFiHqYKbXLD5kSozLH9Ycwou6NXLEdDzDscaWUkW1yUSSuyZPgdY",
  "key15": "2tfsV5bDBaXfZd6GWZpRXHDoeEsv8w32hspfCTEimkpY8JJh8CeBQD8KHsmjqLh8Pe1k2rFJbSZyUusTh8hNHS5G",
  "key16": "FF8JU4fN8LqCqBQvQem4vttzQhvj2X8i7h2XntjVfhosjHhMay2pGgfyGqAxS7zmmi79AMKU7U8jFW6XC54Xje5",
  "key17": "3fSYNXyNsD8iQJPvMeLTQb9scxgyU2m1BkAujTfNBM4CSSY6Eb4mFuoSPACdAuCxUfow6d6jE5VUzm8rHvZyXyuJ",
  "key18": "y5qaNhp7RTQhv4XMN45BrMfqU1gEkUa6YaxjZWHAbv9d91bW8nwnrJXZUuHXMxDTkZ2Amx3sxJiYAhWtrmah6zJ",
  "key19": "51os4aeMp787tqwjew4yh1LDX8wxyq8Q6YsRzebcCGbnAYcn1gW1pCuDnSHVkoKMPdbS4DDZUGH9njyFifSuEs1X",
  "key20": "b21ghdhtY157M5NEkBucdaJnCpLDhvnMjo3MsNbQuxRz6Q7xfKRQHCvu5JsYBTJ4MEYfGN3rTD2sDPQEzjb256t",
  "key21": "4r76sabFYKipHZ5VsitbznBKQ3vTsmz6WTtEgWLb2GX2qaPzUFEa92JdZWfMv3vGUBE1p2KMbuWhiCAmr8juTvW4",
  "key22": "3FWE3SDiivE2ksmeemAghr31FCJy1zHhc37J5ZvPg1gZ71rwoyHsVrGk7iKFhrknQTyQ2pn1L3hiGhB3EdWuRhs1",
  "key23": "2tbSkb55y14evMPsVr5nZUhoTDxiRr3c4DL9HYME78KKFydULj3UBpRdzWVT2Un3VYA5WTEXoWSaT96b6d8SsctG",
  "key24": "2mpCXQm81eZBARiZCTRzLTbAtyiLHMm3o3EB57cmmE4PEFkWnjEhTMukTmRH5VCQh6rAk2JELMhomeF2zpavmFpA",
  "key25": "317ryMXkgYtF2LXJLUjqTM6KEFJ7E4BUqCbVSiPYGdkQQ9tLz3n3cSskNgvCnFy1hC6WugQ2PDxAsjBE6HzBni2F",
  "key26": "5i8caonbMyxNPVnGL3LHj15XJ3RqCYRYQSBScaw4noZV9BcPbXHJa8m2xT4uZXJaxVgWnuPD9eCEieWcfqJFN6iw",
  "key27": "2XoyYhkVuhrAf7it1Y78cvWSRdNFzMbEq8pN4ZSg3szqfwwENDceyEi8WnGWmr7DkpyMmYtG7LgtwwjNyiFxn2Wt",
  "key28": "44LATjaNdD2LjsdU7GitvnHeFLQCKUfkEo4g6hy4Nhhpq5DTUdw4VSHtpiesdYpHbXhkqQ7JYm68xtBZvn2RGEkD",
  "key29": "2shbwnK1ZsNUee7BBToRaxF6KCLaT8s36oSTmp4bRWuEW9YpEVVza7xjjyxjw2oN2i8BsBpUWBf2hCD1TYhknRHC",
  "key30": "4UexASabWz41aARByyTWQEG1J5R9JmVuL3wcBNYFhDhXoiqN1TH9MFbu5NBLGWgcuzH7aRv3VtPmCeTkrjShFBqv",
  "key31": "22UfuXFnZaDfuF7W1KhWyV4j3WCYZWzJgVF7JyTRJHhqVDLah1PqQjnpZBUP8qRt5KCTDuUwLKDkqMsLAEjQpZ4K",
  "key32": "4QMj29mqzMHfqaVb43dfzNsEv3bW6A1apPkUuEDLacFtX1ZQbxPgrmGSQpo4pdPYoEue5wVFkMdwJhBrJuCpZL8i",
  "key33": "4Q5g2vifWXD8kUL62PgXhdjCSpLKB7UHfFzXmpiagQEnxCk4SZY3jVQ3ME1i9Kvqb7VZYc1KYNastEWySY6kzMsy",
  "key34": "i9WyVyHHrmzJ3wngvTEDwLYvyEC8xL5oL77xxQAwR6VywKd2JzrYJAsgQniNhgxj2FzzwNnq8zhCBNDXzdhTGf5",
  "key35": "3Ji1BnzLNtduz6ZUsri36WdChukysHyQ23Z1KkMp9EiFBffUAifKReLoARiQg4q8L9tA8BtEo41jRwjcrdS8dymx",
  "key36": "5fZJNMuBbnvoXhefEsXqg7zMX1SvKXQT19FFcgeyZbYeheNC5KPweoUsbHAHHRe2M7xHrHB6pEgvmTXnfgJpDcYM",
  "key37": "5NuiW9wyC7cV1W2mxqdFRp8itr6LvfH73xH4foS2isJaseDoJY3rEmpf8GS7sUQCHvJTGQQuiBUiig9ntLFAqFHd",
  "key38": "368byyLTmpEMqvh7ZcwYUDYG9BJUQFx2tWBCiTyguspXHCSJU67KNhFyPBZbejQVmifjTWAC4FABnbu97xaRZ8Bd",
  "key39": "22Bs3GX3AgbkdwJ1BqcqwN2pVcvn5VcdQfKa2djFcrywtoagKQmEKnHVA8u9rTuW6QgTxpULZdqAb5H8spFqCkER",
  "key40": "2L8iwe2UWpvnVeh3Pw2iVxn8kgTWwZXzrvBuVPjyuVfDExRjfvrjK19cKRdb1s98kmAE2QeqeNHwxaCPbib5ba5M",
  "key41": "r5yTvuZ4WaG6MotfHaBTyUxCQfaZxmYhn2tnNMbdGYXTBCKGAtF2hGPGgKEppdxRQZPYofaLjqrR2FPYKX6aJZK",
  "key42": "qjCSifcb5MAEWDcjLg757ZNyZgwXyxxuEVs7sbpkeC7xJ8X2JBJMKYeQHHaV3433SbdCVxBT5vkJsUsKLuyVuYz",
  "key43": "5HWrpngP2Z9RYu728F8D21zsV8ix2QZSqQrBzjntAghMVN8zzy5PQG2yi7FqDpYUSzURANhe3gqLocwG8WzWRUH3",
  "key44": "2WYjTHq4shQ9gvMxTkZ8XjdFrzpHVJe4LHExr6k5czWtCUFLRyAX1n1nuzEnsKh95p2xYAJwun9kabaddgm1wMwx",
  "key45": "5BnnxKiH65BxxC7kNZHNVVnPCex6umArMAaAveqL2GhBXMBLTfHmrRUGPUaTtzJKkBi5TmXLesb6c9k8g79pdN3h",
  "key46": "64taXXdewDqmo7uFG7nDm1VN6jAP3F9C5fjYaDwusAh8b8RRkU3GZjwbDKCVheqKwxBKniEYJTJWiQZeiJuNsfMx"
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
