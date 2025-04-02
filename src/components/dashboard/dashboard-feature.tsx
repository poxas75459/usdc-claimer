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
    "4JwwcPNEZkihAPwWfEbdNBhfrkooSHdFsNxifMCUTZ1QZfBRiAj88gckSVuTUQZcEGNgBnFbCvWEiJ4jZ6Rdtfb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2EsUQd4S6dcwsyUMmcRZZjhcrrHsBrzP2TswJZkucxBbWQK6LM5epZQc4NT6g7U6rq6mva4qLMhMQuAfgqoC86",
  "key1": "4XL3nddEBYKoY2dgz8q36BwDaePxj9F12X22BtGqtVR7rg5UdpUvQ2WQD4XrFPbNXGTcWHmtCYSu226s7XJgawiz",
  "key2": "2XNyNEJFSGgs89gT9oNqw7z15icnPsqK1PS1UALFkCHyXyxfi48LMDU4a1MzBqxCovgbeu1hbyF7BS8SR96fmepR",
  "key3": "24n6GkCw7Ep2tjDFy59Kf62NvVDY9NbxQgp1kf44qgFazzBd9TevPaX1gbZatx1ePBEzXFLbUg4jxVPnsJdZfmBy",
  "key4": "26EtYG6edBFHUiWj3zLVi3EfGw6YPfG8SzWbdsfAPggd9E9NWrpp8Sk5epZMbveh8rihJeF2YnHsrJDNN7Wwx6bi",
  "key5": "2szpLcLnSoHWxSukfSdc6pN8khdfBKhg9UdRrTVxbfGvVzCTgcMkUoML57jYSEH7EcXUom9PSbnNtYrzHMkGzZDn",
  "key6": "4vUFtwPxhBPFfweNgnPYeT4S1Nj8FUsiEQGrtYGPscRKbThomkKD4vwz1SowtA28HWWPBAqxxjhKN3bXtw4D799M",
  "key7": "3qY5AkKMHx249Yqyd76ME6HQHJg5wQjv5rqiR4AnDb3ZGXQtZUUkAaDYx3JHsqgmcHiub864Uu9uDUSAaWqt5V55",
  "key8": "2nMcGDHHZnHFDadtZiUCXYYWWo8rQzfcEf6uV35xoXnxEZQSRKjDZTuRMuUvHzR3SacZ2CrTAtewPZpF3JMgQFos",
  "key9": "4jPmECoVACw4Cg2UkjcjPWdhsY4JemFkPLixyMwZuV4bm12KZLvUoynGQ5nxy6nqw32AfYESqyf6si99YqM98phZ",
  "key10": "5qCtJPu9QKq6EzwJ5fgfu2JkHmdMjog4DED8SLEX53Evym4Bapu9TZetinF6ujtVPBWoriahHPa64xHwAWT11fum",
  "key11": "32RVNDe74Gj9aHZE56m1QBdvASMEcFdNt82YcHmDdYFZ123Krne4TwqtoSNsM9CXwKmSqoqwvMEPooCkDW1mQD5C",
  "key12": "3vnZUwksoSK8qgmvgY1USc6FFYYae8Zw2ny6YTZfFZy63RX82N2gGiKRjrmP1UCWEwfTWWck1wGqsuiSkruiayxm",
  "key13": "5bbxNMbk7gDAfdRc5qYGD39yCZKHZGrdVUSgtLxwSDwjimgjp19t7apuN8LUoAtLyjmQUyvFiGzLRExL6kGb2HUP",
  "key14": "5hMjfNBFD9K4TMQbjFf5srqinZq6uAR8LqvYiSVLoBqj2JyV5bHVG5MrATx2UhhmmxXhHbJNctF3C8qc7QKQis6T",
  "key15": "exotcVPRg3Jtvicop8gVUxc5LRauZVncpvBgVi63wHMUZyLMBrY4LnuCyW6Bi8m8r7JESPJvHNyxUv3s9zcCjvs",
  "key16": "XLodtmccPEYZEbUp7QvEwQNRb1BfrMdoHHB74QVmhsqiw4ftgMK7T3wVi1xWfC6ZGwoyKuPgb4egQr2JRWyaCmS",
  "key17": "2WaSNDtWZaviZQ5NoKXYShK47UAmmBpBVrBdEhiLTFYGuVDDKZzF5D3dvGuRHy3jngoTyquZyfRwatuQ8VLvscvT",
  "key18": "2Ph4CDhSXcL6k8cS9pA4iDnqYFMfHaCfHpZPbW8E5bJ9RuzaeprQY7RiizmNwaknra2AubspAFbRq775LSZKBJn5",
  "key19": "2BupGhZGgGrHNFLAxnQeWQnPKv3CnypHhj2Ek4RNm6Q7vnpyT6VAA4qWjScNaVqB4vkiku3fqz4ueWu2WFb9yNDc",
  "key20": "3Cjue7gbyXRMgxiQBSFopLPg9vkpdUtfEN6DSsye1HMBceDCVScL2bSfUFNk5Dhkzzk6CwqjztsYhKfA5jPLRamV",
  "key21": "4u1mfSx8zTfwE93G3byKXWo66PVv6pS7W6JkP3RQuurmMVc2tFszKWvoSScmBTkchPbDhFCbKx9cUnVT11b5Vs8D",
  "key22": "sUiW45FW1MuUgc7mBFHbBd8gW3z3p56fZDGMaUJxmBvbq4WaZ4Uqby7FZeSnadg8sqVYESXRZW4fFFqbi56VGN6",
  "key23": "2FmohAFgRAWkvP1MBb9wz75uF8uzdXsouhqN2fzEMDZ5qqZ58a6M33J5NzPFBw228s1kamJ5YDVxh7jSxEcmbUfu",
  "key24": "1UjPbyjXiaaU2R7giJKhxVz3uUZv8zV7bG54mvn3VuMcJuautuBt8pXHxbqs1y28jUaLdEpQjPfG1osEAGHr3wd",
  "key25": "3sJkJEAbpgjz4RsiWG2J8LhwS1rkD8fHUJFhNU21Dz5gefhvLx6vXB4EK875ABAy8aiuFTUQv4iQXSH8TjNBX8CD",
  "key26": "3DzRbcVWLfyoyJR1vvkvjjD9x4nDvY5nTLE9MogCX6ko3bdoFh5vBksCCpih6B22WaeczZ3C3qX2KRiuTBMwrGx3",
  "key27": "5SmbkhgSj96xw2ahg8B3nxejhF913ZTz3bHHtmNn7x27GQ7bCij9TG4U77mDuF8h1QbaiMu1HCAgXzdJ7SV796Mm",
  "key28": "2gbujU7kkUSCtubjGoM9s9smmtozx178ZJMAZxo7hYzxwz8zt3kFDb7iGDpMxHQ83W6YjSw38bWJhgr8hwmYQkEe",
  "key29": "34KALGMNR8uj85V2N7KNm9PRisWN5CFDhnm9Vr4i7YLgQ91HwRPj6by5RBXo27Mv1kujSKqaa4HKpzgzEZKNPDoV",
  "key30": "5ZwKzZYcR6tC8VFiFAoA9vLkjiFn5HKGBxnSAsW2GHyA7E85jvh68ZCRrpS3uzv6vGWK9qxTyqgFmqCujMmrHie3",
  "key31": "4yVRr211BFbRwD9WkLt7mW9wep39np4eCHk9PogJ2jPsQWtVLtvwWPGSFLMYp1inXpoQZfFipETA11FudCY8k3ms",
  "key32": "3bHUMK1243hGXB8Fhz65DvGUbZoqr2LihT8EqAcTcwQjNEZNBH1DRqqXRwWrUBzsLDPtXrD1EYqkcXetSfmwCPGZ",
  "key33": "2139si93TFijEvuL4pLWQBEM3bJ9W8UNpGeZT8PxuMzmf7uZC6i7Gj37KAQjT21hUAnXDDWLXdEECoNzmF6H5cAo",
  "key34": "2ZZNgu9Acxa3bAHkL4cagU993cEJ8Ho8BERJcyaCbeobQH1HQ5JwZ9dJqbTMcTw9mPWsDzXvEQe6r6NVHNXKD2uk",
  "key35": "2LNGoRzHwKTdBkGhgNWYf6t4bhtoMcY3pZzAykSxvM66p52xFRu9z6Qy52Kz4TCQoJPCsKt8gdVcAKSTN52rYiR3"
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
