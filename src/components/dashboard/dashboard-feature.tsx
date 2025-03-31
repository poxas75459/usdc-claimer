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
    "5oQziq8o3sBKYDotXdU92yrDc6BEjnAtw9PoEQLWVg6xWZ3wntoG7NCGtLvrMHa4RL9sXBKEqVoL4YNGJHhqwVe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y7327PxuygKF3SSvHR8bnatm3TqnVnKA2rucPQtYcDNQUmiwq2ZaG179gnXqY8rvYCywrgZKVfjUY1i3iK7yQve",
  "key1": "H7Qt5i3agQf6kdcb7wLzJ3qQNkztpzSzG7Vo1YEDrJkuqCLSeCEaBxXWZAjBVM87eZVctXZANfFj7b9iJmYFZXp",
  "key2": "4r8AfyzswU5XCp5y6BybV5n9zv7mYERZwrVn9cShih8g1FnDB6dq8jhn7wTiUS1e8AdUZ4cGnLLjppcqjczteZY8",
  "key3": "33ens4Ah8DjYgBxxDt3KX6X3JjKqvGh1Y1dx7CZHCtiTRf8z4Pb3RXwGvZUWT5277CZaa2XgWmmsTWAVqBEMFERj",
  "key4": "2KB8QLUeQK76HZ3epPisztkaQp4H3B6Tq6KQfA4aBtYDJfuX4PfC7bxLxvHEf2nf4ePxDWjcPUFoJC5qc51nQJrL",
  "key5": "5Qb1z3AZ1twbxUFtk682vT3ajs2ABeriLZRPyVQiVpaxC4eQr6R9RUpUrPBjMkSk8SVCdh7E6uU5Wf5Zso9cCXZv",
  "key6": "7ZgktJD6hfWrZL9wLqKnWwsJeRDQUqgAW1Z8AS9m4q8Fft8ERmj3LDv4o5oBbeZzT3BX92c8ov3QAXxGGuieXAz",
  "key7": "3wsy9Br8Hf5x4kPAPwBi7xLeLorsLTgRikXHJvM8WdD58oqjRUPwfKWbrTNAuFgG6iVh2xQCotNJh9aRWZNrjES7",
  "key8": "39Z928ENdso4sn2qndZRt5pNn6p1zsBfGZGem97tCHgU1gaWorafauizGesyGwxBBxroDMmiTsjxUjgss6PZ11so",
  "key9": "nj7bCVxDEag1VM6xoZvCc1WpPZqirsa5BGVa5BR743vcotTjABCQKuP5s6ScmShUSt7haMhfLoQmd1iH6VisyEY",
  "key10": "3bALhBW43tbZr7FrQQnzcynUCZMtZSHHygLtv9iTmYwofqtBGg7vqC243PBT9qX6MyGMQJLz4vybbVq9fTfNnqN7",
  "key11": "2XW52ZENN4ANpmsoXnLqmuH1Qhc9YNxpzz35wnGfKy2T6j7Ae42622zX4SUMrCVNoAvZddxG9hcUwKCPaJBznHVM",
  "key12": "4EFtmyS6EmQAftwNjV85jq9izuZ9NuCxJ3Dcg5xPfM3k6EUbnc57cBFcrtPZzLUdrn23PwaeYA1RYFkVc5YKUraR",
  "key13": "nGLZbkeNH5SzDHgn8RBjvWed2A1ejyeBz47FXMejU7xwsQSqkhXPPcg1pdRepdoy7m55r1n48peeakVmfz7jNMv",
  "key14": "3iEDgTT9xteRJTB5U9M5ZeNS1AXBXdZcASiwwuUBBMRHfE4fssc9DWomBVf7Gs1vSGrJomscMDX3wkPjbA9Yc5tD",
  "key15": "33gJAUR1pwPFLXMcA5Jne7gtGpxJWj3NjbXStf6UeA71ozsve72kAZRPnKRAvQJ5nC8Rhnzp8svh66PEFcZw64Kn",
  "key16": "4ApzKTG4iiC3njFcjAxYPkFaof2LfY3WYZaPmXqsWQN8zWovFfQdC6BSFv6yyNJauwQD1CL85ZrJWh24UGRwjTiC",
  "key17": "2xrk1mpYhT7SGrW4bSxd3DFhfPDFEiGay6kbT8tXjqLdFYktn47tNQKUCnSabcA47UWszc8wNDHho39PTgMK3YUR",
  "key18": "4T14EEr4VrrY3VrfLB3V6BDTwegF8zuqULCfSLkEUYLjFhQxwH5Zs6Risxs7f76JE3THZqvLxYoc44K5aKsCAQdZ",
  "key19": "wsgwZjssH4CSMxQ9kTXsup5fgR5tXgMh2BaTY5Eux5i8mzoYvwftBZCQZVcDoM7VjfQU9DAbvLtVNypfBiQoeYx",
  "key20": "nwiDZ5cX4BCpYHA6dKQJj2tUFkRMsTxaBWWGx2vpxVmmxKyGjUc89gjRB5gs2CGd4nmKnmBY7nBwgLwKp2B8aRM",
  "key21": "2t4WFrvHK1iogwgh7YZWKminp1DmsTXYwcQCHNBXVYWASqLgZFmChZpVkPqbowdHNHX3TEbZffbHsyWyKXsGezzf",
  "key22": "3UwWktrQ6GeCbkEzpKpTrx3EGensXVNGHJtxSzw85RRKPECoftm4jS5W3GufixbAjUdwviSFN9PNfgyBKKb24rPu",
  "key23": "56grbPjnqeaT6AdRK2pwq2tvWVpoK7mmQENrqLgto7kei9YgWavbXtzuQwhJTVWaFXcpsuVnQpeozYbfh7Hyhxyq",
  "key24": "Tz6ueAaUuVYju3qk7wpsoWV4dnidCMa6Gxd1QUzdFnsmm5oja85jyA6Smz3izA3cJdEeNv4b4h6tzjL8zbG5fhb",
  "key25": "2X6oc4gpvW7sHWKTbKDEcCj9FunLqfredNofsKBrYuL7hjcwXNH74KagDoTRp37WgcQdEEPiFRmJ58SqU7VXcvhH",
  "key26": "4Sam7dLLGtXSGVBCzE4ei8TcCG86jbpsMEESfQ2dmwt5kBUMvT1TLrFqP2JBHdUdvaDNd9wz8gmQ4uLjEdBjTK8N",
  "key27": "maRPrpibp7xU5BZkMD8wMwxYMmSVZH79LHX4MCoEMjuYXK4AytPVCL9kwXca4XR5Paas424tVSqUpd6HGHchGNq",
  "key28": "35ngzZBfQ2cz4GeBFrkES4PhpW4eYhSTFfrTNV8JaNr2opQFP2gHp5JevPTtrA6BsVjMWHXEPJfjg5qqXjtZE2Wz",
  "key29": "5sTngvUGXfiEsvU5G9UG32BFtTnS9iKPSb8ExSxUq7fcYdJNLwxbbuj5WiYpPMXHesrzqLnWdKjrRCY3VVfm2EMH",
  "key30": "2BPi5GnvubYDcUNaF4n4Qd6EVaXQEnBGueyWBWyMBWLJnfZYGaqD4NBRjtUKanuoh8FpwxUfTqHEPoVcCCqtnRSy",
  "key31": "5Yp5Lkr5FWxEmZjwxixmW1yKgL8fuqo7vo5x99artiN1sDFq6wGgcVRtRigDmyeBowjJWDUMaDtjW3mfKsqyTVLb",
  "key32": "fgos9v3YHtwKix9yzYRuRBMkQxmUtHLEi8NMKsamHCUgRSfrrGQfvQjZqtXAx14ygWSjHadCASwLPToBcsuBzAg",
  "key33": "4BtSeUncoABjKHy5UXGoSP3Vr5BPoRnmkSkNuex9Qz4DxSzAR11tqB38aq1chdrqgy7vDCENtWCdHFW64ry6aW1X",
  "key34": "35RUL9YNbemrZKcWroN2C3uHy5aouwUuFLwuPetm2yfVqfMspPNzavtEw27xNV47yna19cCaqbzzcDGzLTfvWhmF",
  "key35": "2RLpoPYpGPyr529r3BMjEmPh8hzzXoCqPEQUY6jju5ixz5x1mSTwFX69vyCHcFr7qNVdi1ZyCkGzqL9BfVEcLAoS",
  "key36": "fpMdkbvCiBLStMFuNb1Un6H6xWMLvbwCgSdsyjshfda8geCTxrvufy26fomwcDiB8oXr41aFSKXeQxQpEJdmLK6",
  "key37": "3VJ8LMhtCqX6zAAZ66Stc3fVFdym7EfnWGoJy1AABH8uiJR5cpWCQCgZJoDJwRjAJH352cNpLtvUqbaaczSEJ7we",
  "key38": "4T3hMscdJprtLLui6PRG7G8JBWboWPLcHJfmFyQ4BdmgxsiM6BgfeZQ7X2E9xLkEhTFDoa1Fhr1KvmumTXEmLt6o",
  "key39": "2vXZKnX1ESFi5DE97WFRa22Kps2UbLWRmv1rJCbhnyqccoXkmoVqSC9FJBAZKGVKy9RC2Pppq2r1rXjxPCLoFHxC",
  "key40": "3DGUZgPJpzMPtcpKJVE6PbhfCi32RLSp36B5hxRZN1pWK6trFpg5Rh8gMiBinyeA3Ncj4WPRtTWNFMWuqvMRMDu5"
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
