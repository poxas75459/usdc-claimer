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
    "5aE8UhEuDDc6K24TMorksoedZCzvKryv74T9r59Hf3CGz2XGeFwDo1SLcfSFyP3GV4o5M7wn3rWdZC1wLGwZGiAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wqk54F7PW13sMLdrhZTcHeB2fCyBeAGmHpdMvN7NqwAi3RFa9yyNtS7Wo5VTogpjziMo6X4JnvmqXkPNtvSxZT",
  "key1": "2rhrD7m6vMFcK3tzcZexmsm7EdkNHzGG937KP2rXa9538V9mstYUDTgdSHoHicPNt4SrFierduhkiSrQmA8j8ezr",
  "key2": "fSChudHSQjKEf3DjWaqgMNvGgNwDjs5ny3hZt3fzGEyUfyB5DCPZ6231Q7LPGVWN6N2C57uRPqcZnyPpJfcK2pr",
  "key3": "jbjwUVaBbDu9o91w15vVmBSA4CS2KMRPPNfdts32t7U7DgcLDiGoR8Nm893VoW2rwb7hyhij9E6ZSi1115DNgvG",
  "key4": "3J1xJwNenasvTYJbMgYtJ9xQ5eJPZGMucHiAfYJ7BdeyYxPUMzjF2JSdZ6hjREn1BgJNZWyaY2fJaZTySV523pnb",
  "key5": "FGdyJLacCCg8mJmqief74vozj5UsW7jznLLpxcA8KKcUHjP4jEMDjXQhW5zot722KFQBjRJybsCxhydkwZS4JcJ",
  "key6": "4ys2GXDmJJEEgVjeqkce5W983hxMjvHiechLYJgfqhEUL8qosiNT756wsqJkH7Cq4TReZdV8kUanHMosVUchMBFn",
  "key7": "3r8skctzfxWU3TgDZxq5Ej24xsZPmX1by57tUPcr7XLj9jhGAzCnrrfgxjvJJtjcpgKMLwzpGUEZjJYQLiM7ifEZ",
  "key8": "4nDRta4KcyqvaD6vHy8EwhHTJhusDGSfnf2avbycLboqWw84g4p1U9zda84L49kNqV35pNaoLnLNhShAHAvTpgb6",
  "key9": "52bzv3ynoKWbJWuG6jjbtKfYPedZJCmvhrkVvQN6Gzqe4JjyKyajYdsHiWqjhyJcy84pHvkpXPAH5FkVExFZtpdA",
  "key10": "35bBcgHRMkAbHW6Hqszih3BjF35tTsmSxgE8guPPp9XwBzRpZWREq2sKE7EPGcxVQ7T1D39W7B6MZfBuVvYTLbpD",
  "key11": "4s8BDEHTskLnhbzFKUZQ5n9wf7RSwsphwJYWdfh3Hwk5PKsovyM3PQqcNCe3SuXQj9wajaCooyMXV8ueQPvz7Hpp",
  "key12": "gQ9FmvjKD8f6iTiKcCtdZM5cAiCC8uaFWpaobAaL5gza96MbgRoix9qZ6fYEnPj7JsE8BRwimpWTTPhzrRkCazf",
  "key13": "oi1jnPavQ2VrbvTtnLk7ou4ftusidN5pK9eZ1T73GzonVsxzDfV9UNu4qADH81U88kjm9e4tKCDnw7vJT5MupAF",
  "key14": "vURsGhsuMJgvsqbu8j44QWCcePC5z6DVBdZYcJSuS1cwq2rom1RRGbXNKX54jszoL22JM6mU35krxc1S8vcd6a4",
  "key15": "29gmh5U4r4nxfedkggrPDrpZBTBfWTah6B829Gqc6HygxEyn6u5n9jZNc8VjKYyDxF8PohnBgBVN3J97cTm5j5fS",
  "key16": "4nneZqAkwn8H2cYSszHv77fNb9TkmTLbDC5UsqcnjW5WgLkuJ8X892N9bnGfn89152PTFsxW3trS3SPPX2vQhcYJ",
  "key17": "42Nqygof6NPDrCxdyvex1nDzTeNTRRXBxWdPfCEJkEfp98aRYMh2QqSFvs1ERRAfED21hAj9TPdmPWPm4DmWcJ4A",
  "key18": "5HusMCegkgo2Xr4raRVkgygqLiCUo2UaiyMbRoG1H6HtZjMd5bJg6qqo5S649HNx5nmtU1Ck84wraw32vQ3xrpqA",
  "key19": "5tyxQkjfnMBibeQAtjrABTNvxvqbrn2aygjPqLLbNyu7RWpPUorxqrSfF2B4DQ34kcDi495xjJrkTZTRtakzHWbj",
  "key20": "5p674d4vKUMggzC1kCUmQHekPV9prTmbDZGshS18hrAvwhDDTtUyA1bMpyyAMRyDcTCB75W5aFQc9areVvbmCAhd",
  "key21": "cvzuADphB2SdzJgTfZmDBhWKZrHb3YaZkHiXE6hwjehcanH92BtYbAB3KzMk9MGpTd7BRSkdWptwb79ayKx87pf",
  "key22": "2RTPEqiLCPc7zzNnFDH22wPTN9HUZQ4bteT9jU27nYGBSk4vRe7aTPaRnn8hhNpbD6ryJHF8H73siJGjwQQoQGdn",
  "key23": "3sYiebSHbakXbXtuRy7LbTjGEXaBctMpdS1ADc5XjXuuv4dVqv8Y8Hbr7aCSYHKxM7Wtmkbs6HPDdKN2jZ4qB9jJ",
  "key24": "md8agua99aX1wVbyCZ8MQEMvrVG254aMwmoKXtM4Kwe2Cr6kA26WbdVSCAdFpEWg2H2kQcjFp81vzCaWN4fXes3",
  "key25": "4UUDhLqDf5bbse2sF2Ax2h5TgjZBL2MsgeUAs9f4LHq8rhq32mvCfdPhRcjpTUKEjgrBpwxwBwzDSRxotcKMHHkK",
  "key26": "kbXEzacXFxkADFn6fEN3oy6HNUvGnJKDPaJgHNyT57dBSstYZ4WmsVP9JDfhbvQnF4dXdZnpXpdiLsVvTphcx9F",
  "key27": "4YM6EyK6cTtbdztcaYeuS4iLbaVNKU84h6cM95SFFvrrr66k7pFQsBEMwRUVmsszEthP8APfmuVJ139YXuYKwjVL",
  "key28": "2YaCNvSWET3JjFdF3y5fSzdGKa1BwyTUpGcgvGK8T8vGjdX9rwzn8Bqsh3C18ciTALoquEc847mEqH6GdZKafs5s",
  "key29": "2XDGQQkytZG3D8vFRsavBBLopNfFZMpLth53vArosLiNnro42ziezXyxhBjKyMQCifeBo5wGd4mK7zcSU4vfH2qQ",
  "key30": "2324zxfWSdgCmju7ov48a8TvmCdZ7kRnjxfrTekZYHiXN8MQrRFH7sreq62buUMydVbmTrcAh6hdnNdzWxxC7Quu",
  "key31": "5VFcmcP4xU6bDCJXHcwGnsC3aEiE7dFbJjmN47BQXHXCzEDPqQpHRHBcuHnqu2iu8Rvj8n4dkZdTfq446qJs56RT",
  "key32": "mPdhxoKmyhWonco8HZjB6GVyyYkxP69cEgAt3wS8bL6G6ihj8v8WQvWYiZ3ZY4WxQD53WjCL6PERpj7LVoVcKTY",
  "key33": "3KFactsjW9oN5ma38qQmzqhvGQvqAoG7oz2eHAejrjAYWzEyztpYSff7cFmscebFVRTywDXeqiVtd6pdqB4WXoaX",
  "key34": "369XKV2bYhVQKDcitDS51qPwWNgaRQRTWtj6FSM4rzgxjM1mPHpcknxucNDY9Cm31wawAfAnoXzWUTKJF4fyaDdh",
  "key35": "zTTQiR6nAmBZcez4wr5pvv3Dit1Qao51eBNco7vF5LoZd2tkhHpSYDAot57LmcFsrLErfEtJzvzxqY6MiVCssGF",
  "key36": "W3Z2gojyni5yyLxCM6fWGfShMtfJDh3ya23GR9VGNVFjis5BxcNP4CHgQkJK3CUkjBb39MTvKToHDrz7RcDCQju",
  "key37": "225Rdp6dJQ5LoDvn8w9qHyzdmZZ4Tvwpxyfw8SwsRtdadDJSx9XGVaNgprZbWsPC8ZLdVQp685WAy2xWywNkd5RA",
  "key38": "4XFG64pRRCFdsmk9SRGxAbc6vK4yEJD68f5J8mq3xCmeJvibir1zvWhUxGuLceEyP3FkNQbraLbiRkV57K2rBWa9",
  "key39": "7a7gfnV1kqKd87LV76qVQ97pAfrcexEkNV3V7H5higTDXJeoWaX9RZBaWromLoEnKCr3Pnc2bdTB9mihj3XAsQG",
  "key40": "3qh87nA3uEDmzpceJ3psYpNbNXvpkFNSM18aEjZE9qAZ7KbZ7fbBzWksndnd5BPqTF9bECuv9wYpGzgeM5UvtFu"
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
