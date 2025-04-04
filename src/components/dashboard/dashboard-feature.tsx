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
    "BgTkCQZyFckcWz53mHVSnZUuRN7VT8jMUZLBcfiSbHEccdVtE4KNzfkDtsE2q8EoEnuivhjY2EPEpw9GTF1E5CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bSMYRLPfrM455QDhbuaPcQBrPmDXe2wVLe2X71K5288mbuBy1nNC4uxijqv8E4K8YxyeYVDrnGVYNQqgqnaDnL",
  "key1": "5VKWA1MAbc57AA5aYCwdtSqgkBQDAGvF1mytEsJzGyJDTxN7Cmk8mzZBvJmrdQgj2xizodwXgEvZfXMLwqBhidnY",
  "key2": "42hjzUysjKdsUbBn9Fcz4nHptKVz3oMGP3GxJt2bRc3Mh48AiyrpLwZ8hQ25EMr4hga6vS7UKzQW2jEm7KPewFrm",
  "key3": "3NEHvuvwEDR8pMjY7WWWmPorChV7dYbnViHr6t1dZnDcnY91ZgpBNXepiLcVqMVjsapR6sWkWTr7xnC27GcVGqXx",
  "key4": "e2enhd49uSDHZNbvFduzXcMbhbub1h1CNFpYudGqeWR94pmmXUd6TZ4KGXKQFuctRy6TpRHFyftov3p4vq7FNCs",
  "key5": "F8Mtp8JcE5utj6FYHpFBnQkP2PrygsPLXV7p95BuXcQa4qLDZ6DjvpChDDk8rNz9FUteEYht9uubToZCFmWo98E",
  "key6": "NsjHL18erKwdtR4gyPA6HGoVxXH1o4C4QzQnjezFtHY1AYQMv2QJAFiWUDqPvgBRAqmS5SJM4MC6qcSwAWaunZP",
  "key7": "4ixbr812n61ceVvnHqn9t7ZhGssbfXrzgfb5WhGL7v8V4ydyvrcJxhBjUpB91gyW5S2FHcFfZ7AmoFgZxLyh6UnV",
  "key8": "3Wi55nhhoXrmwgoG18GAdHbKZNhmfzXznBLKAVMRMJjtLmFg9oGLcvGebdQyt2H9F8Da1Dr4h42cXx8hh3em8HyK",
  "key9": "3RL4otkXjkkKhN1X9PT1obUp1FGipfxSCQQ1XRizCGwG5jKTy8xhLWiWgBhEoFpdqxSdp9Mk6hjYuhmYPvkJzmDk",
  "key10": "5TqsbUA16FHniX4z6DvHe2Tj9sbhmD2dkbxsjiJDZ6BWS5trfcCZC725Rzrip7AUAU2NC5S1WDqXoFXNMj6KK9Xk",
  "key11": "5gDKTJR9SsnandHLxwxkjuEXtWkJ1av4eWaSatmYkTgijtxwh7NNdSU4SgZzfjKkAnMYHEkcTfQ3kAtZSCzhTMKy",
  "key12": "hsCh1cGdJgpjB4nuCWeQVCZ7aXe9RPyoL2jfsgAof87gDQchz1NqyhHvqdMgmVWBetE2t2jySpUhVcyBjj3sCF8",
  "key13": "4S6SdiQu2NBf25ihhugii3po7ePG1tuJvSDskgyW8o2NiPwPZzDAsZMkGsnfGmSBqkAeyWRVbkNeLcqBrf5Q2gxF",
  "key14": "4sfqEEwBTzM2zwfp1ymgQq4xg7Q7cAPBssTz3e2Rc6nT7bA2FUxBc4x8Pu1WF9auCzfubgXyD9ShnW3jeXETs5vW",
  "key15": "2mnpkJjGiFJrFCj2AeCMf1dHkeP8EpQUtPrmJF2mGBMzUwc4afa6VF7fTwwU8DETXqM8LXcTeM3G2HGdUrEsH6oW",
  "key16": "4D1voSK2sQWVPPbQ19sfL1DJuZSDE3YJHi5mCq5UppEBtW8CLvEJ6mbTE1bArWKaR5VJKE3sRTfvgpjAjeAABz9t",
  "key17": "5v8c1e4T84SKYRVNUk5Uv7hFn33r4R2qUQhpTUXKXJQefgEj6wBaxNLwp8Wc9ARjNafSLMoUuLwguv8NhWUYESgZ",
  "key18": "2Vk3xYpET5dncG2bC7uiWA3dmb6j11sYbwVzdan1HkYJgsNKBgYie7nVxDWYEfecdAVZ6fs19NdZaZTtktz2PsCt",
  "key19": "4RQULHAoJWzceRv2NNeVmXEsenzeJEyvDCnJcp8EXdXRXoxDNJPvaEioUU7mBuqXEL7kgbgk7QSapw5esnX4YYJk",
  "key20": "4wsqe6nKGPGY9BEKdWRfT5fZ2u7n7s4j7eTjCJnnsZbGiLqU6LtPx3M79UQWtBENv5BrvTtpbjLJcnovd7ipzWcE",
  "key21": "2GY48UB9VZX8EbrzND2SzWit4PJT5Zq5cfiXAKoEDg1Jniy7QXnmbyDskG628RNM8dbJvc99XJcMopMQQZzmjWEm",
  "key22": "ioJ72GKGjGjM2rrJtUQfHSCKopTMF6aW1p7MKnHyd9CeZrQcShQ9vciB3JxLQcJRwhSHs15KRmQ8WY6dWcw14G6",
  "key23": "3AqzdGNYQJeYwjHwB86PHSVm2z4wqpYxbEro7LJf9eRg51YkrUDrf43zeVLDtZNF4CqEwzuyBEWEu1xbBLoAksmQ",
  "key24": "3vHnsS5c3vHDKiAUhMp2Qmdk8R7Boku3p1ZA5sSP1sFnHgMfD55647oSoTc7Nk5AumnZfc3sgrG2MyXzFikFSJGm",
  "key25": "2gJMUWJo3wjiGSMro7xQiVRkzB3epU3J33SgCbzEPgVLWp3L1skET4JCucwmbAzDqTA4e5vpYfEMwP1qjex6KgqB",
  "key26": "4D9MgiRTQrhzZ7t3dgvh6YEiPtTr1U2NpFbeBxcC7QPhXKrTYgCPnm4AtPgNF6VMAjqZ9i2Lhv7uGxN7CrLASxYo",
  "key27": "5KffseMg9K85MmyYF9sMrjLakbSQiANpPCwx1sfXErv4oGPBrfBE3heQqJadD8tdJAqdwdv1LKwqMb9nNnASnsqL",
  "key28": "2uCbBvBwUXzVmYq3aFQssQbxxMTvDe7nPRcrZZTjCFUiqhbNbNyy8XDW8zZoH3xBhkvoCNeWsxgDTsNkBTYmmh8z",
  "key29": "kcH8nCrJqRNyCLPpM7cEMxm1qWnx76jiEYk8bx6MssN3zsVa8xPkuWPgr8z2LvxSxt9ceJYcgEW5ogEQPBFnhr8",
  "key30": "3Qcnu93pvnwzC56scGBjnJrQpU9osacpqYawShBe9kgYVXUWrP9sAUMfXGJepBAS1BnzrR9Z36xwRHxW8ciger8t",
  "key31": "Jbi1JNDLDWYnUk8KH4UhwBXyNUybJb3Ak21ahuTnutD3akdFbo7wAhjFZbEGgzRKXo2RSCFj2jdaFZ6Ak3HF8zx",
  "key32": "tFiDBrTqASoGLJUTyMhwjCcb4cQ3mVxz5a2rPArSBg1PXmZUqJ2nrwrBc7xv6KCHb6oUwaEZv2uCDYcMXg93tjt",
  "key33": "SAG6VF8hmmdTWaLCEYes6k28HXRya9m2hDXqe6Kx5emzzGFkEv8AmiwnmcbvowXa1v11pYRGWkLNmUdEQo6Sa7G",
  "key34": "4JTRX4vmzTGL2C91MATipbcEZetHePVajupDGN5pUJGqpZo5GwTvFsSSQnjRRG8LDKGv8XGhRqf6VNQzBsHhDWgM",
  "key35": "2s2cwr8Gm9msVKG4bSBV4y7JyvHqKi3jLx9S7dLB9iijD921oJXeLoz79D7uGB1UM7WapZfBQEiREZWAc8f3Pmuw",
  "key36": "dV4WPrU8VCvWKWqu1uNESGXjJjfXbtrQxt5CiSqjBB2opEYvTjXzYYQGrohcjxCthfNzEd6Pr27tSsyN62z2oee",
  "key37": "44gTnYh2MDF1tmzuNj27SBghTq5wLs6JYz4p2U9tPsZK3PdaWZQKUKJWCoGXRRcbRWJt7cCH2VE1Pf3EGRZ4sga3",
  "key38": "Qz7NTSLcHSjHoDPMjHCamsaCr3Xiqpmqe286PtdEfH4wYKxBNvnxn5uph8nVy6oooXvE8r5C7gUkxMpC3BorAqW"
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
