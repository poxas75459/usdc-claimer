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
    "57WovdcC21J1Zkg4yCfArDULSNj9kLg3s2g1k6vvpyqqghePf5j3QHqAJ7TG3DjbGvYSgCGXvZPrxCqtznRK57RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgSWRpbMmeemuVMC4Ajctqn9vaiM7H17uVLDLmM99qXXfeCxxgn69CawqQh9opshf38LoGcCyTzvfBorGSzNhwc",
  "key1": "2pBo2ejJzYMfWWLYhSSpRFw4LatA9KMNZokdy1Q4fxjmxhgJT4rcNaje2YFys6vR1MK8xYFRyrtfW9SXAGANtAoF",
  "key2": "DmpkimC4FZDrbWDXLTSNyFpmRqQ8R1LBU5fKMR3t7wMUmkPGiDTYn3qox1twPrKQHQmrmVe78ow8pz4Vcfx12No",
  "key3": "3NRiUdanXsAgfyeGpsSa983WLyo19Vtu3QKbhy2p7or4hg8Yb2xMHJsFjnBqprq43yr2WM2YzuGnin73SfCZeWux",
  "key4": "64hUKoLMPD4uEqZzgFLqXhebFWbukpMw4SY4jNWBeLv7M2cLtjxZCpeeFiyNLCuaiyT4AedntguhPNhzzLqM4gWw",
  "key5": "3PfP7pA9vq4u9Cxc6hfVVVMKx9EZ8t9zsmVrj36prZL9reTWFVrAkQENuiynMV4Ka9ip3UEfovHtTeoM4uE6r7Pc",
  "key6": "5osRPe7THxFZXQvpeCQDTackx7mi59z7yUWebMpq9Fta3r27KvBzsCUBQvhsSu6YxRHhFdSgAjM3xwtbTXtdmxkN",
  "key7": "dqG8KJnDMRFtFZVE2GeS37gGhuQNdjVtVr6SMEvmHfEcAEwhq57jZEBtbS2N1o5E4ypK2YfJncKYbVPzvv9ZGjf",
  "key8": "5kXqKRSKjDLpcXTqhY6SDqREnauHoF8SL1w5MQidEHhPR6tWncc9AGUnQn91Uy1jJV5zjMMZXyzUdXrs6UNzfN98",
  "key9": "3wf9tcfV4gmgDnxZukkyNE1uxDCEqSc49Gapyx7F5AfxoLgoR1Ree1dRynv8gBbRBMrmuMov21n9hnHDDFa26Xcg",
  "key10": "641GoSQLXpsa9TQaMDeWpQQb8U5Nied1h29S9EyY45gQ61zKWqK2rMkgGwdkNEv7hpXRNdbZQauDm1byPxwj1geG",
  "key11": "42DbSx1ps1CFtEn3RtEWkysmvkxfV9wvwAedf7X5Kkpos199Jxrbbpt7YCpkhpALeaYMtkABbLEMdyPHweBS6jXt",
  "key12": "5Yo5YRvp7Qoixa9xck9PD3PpynktBxQ2fqBecCuVpZanfYDWynJdBoTUdWe78DqtQj9GgKLjP4EKtnwdQ2NUmJHw",
  "key13": "3gCK7nSUgGDVPJFy4mX7JPSeJXyixxXuAyTmZYJZmvUvu9pDmKNhEEyKhkh6TzFTUVeroeVuUqSHdmxiKEdkQeYW",
  "key14": "2RzVMDTr7oKSMTbJEzEQo44inJp5yTucszqNmnsKkjoTcNVNZQD2SKEmFX6QBE5c78dudigrjnqQwDr4PGTCPWkz",
  "key15": "466d25Qo4epav93g38ra1equAnXE35TfDb5jkjgsuG7cow5i93eFDejYoXKJ1BruoFHAwPYBjK7VA7K5u4mhCoEa",
  "key16": "UUgo6wE4maAXgqGnr2gb9eDBmKFyKAVpGYSmVmKHZMy4JHb6ud1ZBL1kumUXYF7XHRRGmzAGPxVnCTSAXBBcGuk",
  "key17": "2RS3pFEroxpnRhGLcyAKF8isQfNkScrTc1bYFMe2vwYme46UadSSDVobJUb5tZLR6ULVEZTDcF75RhNpqs2i5hPf",
  "key18": "3FyxNvvQM9ddHVyeYuKcmY75H4KgemENRt2uZ4sZZyBGQBRKd5yzRdM4SYKTuieCeyGBUaTNLDbbVh5CZYZGSTAm",
  "key19": "Pk2HmKmdQYBLBDBeMR47X6TSLmjRzChvFSPRB6GDeo6En3cKRaEsGMLWrN8epiXgJYiyFnsc4sBff3jQGu1NrZf",
  "key20": "2HYBxCoC7pyq7apXj7Z1iwYdpMfTwpCvReUd1Ch42mGoa6J2w7SuwQ9YgkUHdubNRXifYNiJ4R9zvRz4tmUNhy5e",
  "key21": "12A8HA3oW1UFDZ8YKZdPqCLTFHhpnrg3mnyqUpt5insiYfHDRLxk8vZruef7MpfzUkuah9uSX1BNwMG7cAD6Sh2o",
  "key22": "5S4eyJ2V5GDRQ2XpSHUcoDLPzTKXejmMtXywgdSi95s6qbdv9LJEN6i5eeT7wWj2DLeggW9iZgphrnDzbsMnS3B2",
  "key23": "3peCsCKq95LEct8siFMknUsmLvdYYLSQfZ1CjKVXzsjKdGLL4ZaT4fEn3vPbPgYCgT44JqjhAfn7SdG9DyQsVfSw",
  "key24": "36WTXjgx7doAUnJHcruQYyoJWCfUE8UCUMrYLAHA4juPsroyPX56FTrt3RtUEF7EawqQ2GeBr7ueFxA1U2GBDzFb",
  "key25": "558AJtXLdKc8MZC7uKF8JqV1N1xzpMJWs1ZSNujCgXDLGGLjjqkQ5CoCnxystdwe5YFcAYSefQp281dMWRjRMn5h",
  "key26": "2jK8TnHY127bwKojnQEpNmPvVcfmpxQKf7BXxkFAxLq5QShB17WBVVtGYQ5dyzZ7EWsUVPr6iA5JHzketq6tdbsp",
  "key27": "4QtvcQadz69JyLQxVRue38MHvJcnPj7kiA17qih6aJMfYRWtoGsZR5oDvRpBd5r7d7jdjzi9UHNSpVMAVK6BCAvr",
  "key28": "GHVKS8BeVzZhVFd7m73hXTrk9Gt6ZxWt416DWuTVhhwDuqFnSBrHxX8FG2KLu4GkobigQspqSr56GDw9rmur652",
  "key29": "3qCXbvWt5pvo2nCtywrjbWtgrGy4mnY5nTxtYR4BZcDsK6zbAgLpKtEJL6ySXVx9h5YmXxErwu5Cjs3wz44w3jnp",
  "key30": "39Dw6DnVNzsXFbRNVoB9CMMAHVGGxU8p9BQUcR9CGwJasKjF1y37m3rSKTBaEwWMfFUx6h812vPNgY8c5Ag2vbm6",
  "key31": "4cGjpfL6UJfWfRUchen62Ynvco7Td5wE6w1dGVUKXrzyRYkSLBBJgi9Jsg8WR8HG1nfeLe3wNNSLhmimw3dsJ1Uw",
  "key32": "JJrwdZdVRo747YtwyAdsvCj3ospKKQHD8FLXuVM2NdDDSWo4TWHpkeRwGXZ9suqv2JN1MpJLskuJu8UFGMgH6V9",
  "key33": "3tWmh42qVPJZeKsrxLZL5xS49kW8UqXM9txsEHddMcVH7UK4wZQGQV66dP4pSb6MHqUwhJ5yaNhV7KaPzf7MaoXU",
  "key34": "4dPAWVbEqn1du1hQnBPbrUESprWEBy6tFkt4vJDu4P7Hjeh2uBg8kyxeK1EixUrNAvyB7oFHtpcDARQfjRvk84wC"
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
