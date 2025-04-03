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
    "NcL2YokUjGYY6ATUC7ZusYcYWTW4L42azg1ZZy4CUGAVD6DRzijHKJXvzVTYCv31mrtRucCwyv5FagJZjhfGSmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVK2P4u2hCoReHRBE9gHQQbkmbCzTQp4xoFEJSEkUZ5q3BVu9evmeMJHDU9iFkLFKDLxzFqXV4PTRHH7s8vhGGq",
  "key1": "5HmdFv5N4gvFtzt6qwv9TNjm5KekEkVGSeXiwqk7h7CShc1oTxsARNDoFhaW8e71cAx3jm3LBJthrJJkTg2uBkaR",
  "key2": "4pQfuNSacnNY1yXxwyT2kgvFTybi7dShhEpDaCtHCGmU6aDvoC4N8BhHyvAbX4NUHHEWzTdpTQyKX6JMJxQ1uL9o",
  "key3": "5zPqyFgrbrCfr2o9LD1BJR9a2LuqnyjiHvXvvrXttvTEdj7tdYhjVMDdFZaXSeTpLVVitf9frjU2nCBzxFz9f1fw",
  "key4": "3rQum48QcJGzgM1VgegdCyFTCZqmRuf3E5djFQb8B256giPdPRYZ5ovhWcTxQaPS5rmtCtfAyEMpDuN3gErNXDRk",
  "key5": "39NTPXQZnNVxQiThmW1kjQyzevySnP2WknPY6FZDeR4Jwnuvmx9ZdDXU8wnrTG3kSLPz3n1cR2U6HedpMRzf64RW",
  "key6": "zzxcHHc6v4ac5VEtH4M452cjxDHpC42HxDNbrVEqCgdSDmMbtupP64NzA6ArpJ7N6wATLTKfwdcjWT3MJt5bAA8",
  "key7": "4Cshnj99No2pf5QpPuQmzSdu4R21HbDkE7GGSzGqoevX4JZaJuEnd9iv45RYMRmZFWR7bnCnRgR2uGC1AMrjRGSP",
  "key8": "524UPsaFjxZBJwjL3WhySJFqiM3bUCUu4ZLkAZsAzfsLNDbQmY7qB35XXCtzcBPRjzs9tVkuDH6uW4hEYLx8uGGp",
  "key9": "DRfxmGv2Gdaxim61XTPoAXJYgz3PXq3P4WXvV6h56NdwB39t6N41rAWfKMTTPkdFAA2zqTNWLCLNuGqaAqcGmoZ",
  "key10": "5nw3XRvkVT6etbGn2NrzjLMsm94U7APB9KXiQmEXNECqvHukDFAHG7cDNpLmDr4H6jZXpgWkJ36aDftRP8XPQUiJ",
  "key11": "5vBbsZkXseNQxX9mVegkeHyrpR7Lc4ufSVb6kwMHnJhLYA4hkNEa1v3N2qKME4irFj66Zhm8MQRVCmrQa9eBw8sk",
  "key12": "2NZUUtUictbLddLbevUdyoowrZFxQTyJhFouFhXSReHtz9uekWqkfjipGoJZjWo3o89cZYqNUKQnwy3FWwQF71FG",
  "key13": "4idCEJgE3buvDxavs8nNjGR6wpmKr1PLJ3FBf9RLL7zrwrxM5YAxnt5EidWLDSXiJmUw3TZbQA748tcSPyqpkR5Y",
  "key14": "ck5CMz58EetmFPcVHNzGGdvuPtdV8bqLgy3QXnuuRYotHckjvEZUAoLu4z4Sv6Xr5z4BcW8tFz2WJBQibReyViE",
  "key15": "3RukpddrNfd6HZoYUp2adxjawR9xC6vRh7Mp1y4AmUhXr4tYFPMy1n8cGjiHKteYmfHTFZRi2kUWnShZvdiEf1hf",
  "key16": "55x1St6NBDhwRVg8BLTCC7g5Fv2V5HgGCyA3K3NeB5TdSFifpEMQrGBtJAxjVaSftQX6sfMNgpm4utNGi7hEoAPh",
  "key17": "4HjNmjpp2Z6WZi21McZmUehPtoioST4CQrVoQ68LiuzhyWvxaJihzMuVFn4SBMx699o7HuPbG35SMVmvc1QWeSxb",
  "key18": "122jpDtsETtNBPKNeDiPxTPYiPM3vDXyVUipLXm6HFgYdnWD2MjSF4dUWj2qXk8C5dPMZ5NDNEcMQPJqZJcQQda4",
  "key19": "4rpwL8wzB5NQxrEgUBFjhoktTQXRZPtBAkefao1Psz1qFe4ZQs82n5KpajGvMtuo9jwJo6PSYcT4VHcFvxGCgPWV",
  "key20": "3BsYPG8sqXHUGvEH6qWkuLUaV3vm6vAPC6XmquWGN7UKzvod2qXA5Uxk6UjaoNT8H6cpkh28u1nN56UBWtkZFHCz",
  "key21": "gWFCQw11RbMfxnnd7qXqmTto43kNtQDxTfGXYo9ky8SWaJYxjfdwWsC1ZNW8djZ9ATHmD8BZjesW5isYTr1S6eB",
  "key22": "3YgmHPTfopDtKErn5NaBx4jWdYymHRTexLa1cjTjaFKDqAFyA4CfwibuFK8mQDvbubprKquHy7JDksHkmkJAzG92",
  "key23": "ajeXA7eUSgmTCvEqBF9pwepfsQtAMDw6YSy73MVeeg1Sps2PSHQoPTzPZPv2HbiakoSJf8YhyweAGxo1sLxowJs",
  "key24": "4RkocsMgiWHtZjkRE9mUcWquHLoTsyKg2tetvvTJxA5kdtdhVaegQUwW5MeUUfxMQmV4NqMqaMqVwX9qrMRwkWsA",
  "key25": "59Xt3VwMrL3vSwCDvsLz18MJcLXbEGXvPb4XfQCJgsQPvVfrGdSyPVrMLdh93VSmqzYef62ahGoDqCE9gfwmbp5h",
  "key26": "2u3haTs4irz2B73MAbSSmaqr3KnfAiZx3dg3qBjYcS5ibZ1m76mLo7ETe3297f5CdQS1UaEgW7g9yEpoADJWsZHa",
  "key27": "2331X3zAuwemajYYNKgVScwh8HgfijvWKz7xDpXGUWDkft1dBzM7Cz6P4UhurtWy3BrGZ3zJeFnzj7gfmnGgm6a2",
  "key28": "669J5dCTSEjzdXENcSyi8v1LhcbR6SSNtkToPGYrFCJU3tFFW4LB5ZDVemJUnrdMSmz3XbcSzSUESDEZh2rzSjDP",
  "key29": "2G3RrfC3VMrqxWQkf3n9Wv7n6oGvM4YRd9BcPX2sJ5bzd6vb5k8Xndkg8dGxwVcWZ8aiiw3VH3eDR8cAesgiHjHy",
  "key30": "5ZqsJ5Ddvj3XACD7b4MsUejAUApw8NLNf31e1yVcm4pkvELamYDeLUBXojzqcr3D6UvWHTkCKeHEzaaTqgSrQfHP"
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
