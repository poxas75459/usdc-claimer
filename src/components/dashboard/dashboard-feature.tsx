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
    "4cwYzve7i3A8nuZngSGfNAiMGqSxRNJU2eBbGZVe1sQ55xwKh8d754eNDvnHjRUoZKkq67NtHNZLk9y7PXsE4oZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hBjnDk6mH4St33GysHHqqf2motLxAnPHQpPdeEWUQ3BKD64icE7j6qHanJsoG9qPxP9PKXXNHp9MwgvUa1TVLme",
  "key1": "shDqkXXxUwWLR35G36qnNNH2t9bdmYCDAv7VLWRuj6kKrRwc8bZu4EvA1RnByvzepZvEYoNfVBgqoSdwijWCAJR",
  "key2": "RX46zcfZweGGsbKSMayGQpv73SLCn9cYnDYAMDaqttVgKuTXz6jGmEPRgKP1VVT5T5wvEwpkRL824U6n4coqeZ8",
  "key3": "3K1pXsbNeusmhgk1PGQX7Xf8u9p3KYGQkA3NFJAKuquLuXEw2rXTQYVx1tDePGGxrYF3nf5i7FTyNqBfqnGH83Pu",
  "key4": "4LqsdKCn9BXHgzhgmpkz5iYoHpmG1pHRvToN4U59s32Tvg1mNzBKdPR4axut4RNRhFNss4CiH7xM9T7LrckbP12j",
  "key5": "eAjmewver278yJ2hAv4ztbQq66dZ3Tx1uMcEVq4Wudjr8iEaD8Mbh1JANpgmgKbvUxb1Y32t2vGCqt2ym2t6Uk7",
  "key6": "346ZqCLSafoYXvhosm63Rb2tmmb7BaQpTmcM651oiDv6hwvF8vvnvJKF3fKiKdjyAVQuG5Ln33XVPzMwnFWUUZ5w",
  "key7": "3TC9VNtTNTQnu5YgosKQVcfNCzxPuPiVnSW83MYuSkZQvkdGesAPJ9nRKiYj3iEoYrYBJyakSpmphrPkdo7aTHgF",
  "key8": "4Zvc9ZBQR25dFQPvHLiBJ6Z6M2o1U2RtWHxzSv6E7Lc9RxzJ4cfJiouAQnhNHaGTB4hWPXEBoz54Kzx4241otC5F",
  "key9": "2BamFH9EiUFA1YD32BUmGtcyGBfc6Ws4u11wd36v8oLQsV1ATEG1AxmGoDP5YDDKbXa9ZrLVm3QsRBqoVWCMpQ72",
  "key10": "3DX1SB28jmqV8wTy9UrX3kgEE6YGEpqim9BNS616xbjhwj52yXdRt5JsqfkaFWLMzAHDxpLGkgeB8KYSzbswjdgF",
  "key11": "2sqXryxApsEYPuNS3xbqfxyXBmqH2Rr7AFJJZiiiWo5XvEFEETxdCC7tMK3wgkj2MKYoL3xcKihEhXjHNe67WHoc",
  "key12": "4R6XCEdDvvv3pC5vBig3xCNteCVPtip8VoSqNU2YbBGb6htEwDjvPMe6BKTSVyKrNihpiMH9rsySDsLW97RGPgiu",
  "key13": "55ZUK8L6Vvxdww8n4ycxRmr5Gjo5MQxyxvAeptFWJyzNpgp5do81kUjyrGwybRZNVNiLSHZca5e9LEZqPQbgCThV",
  "key14": "5eb1RaogpjqNaqtKE7zV1xn1WHS5JZTDgTS7XrVy5S1xUeBd3F8pVGXhctCZari2iv6ooB5JWL98G6JzZrWGkzrY",
  "key15": "4GMyNjTDtqbJATGjhjbHvxUCzFfdj8VqDCpcFLL1rW5YCiBt7aDyBbrFP4uU99usx53U4fjEki9xL2B2LhNJxAs1",
  "key16": "92Gk4jrYqreqcqk93t5K7iejodJ9GwPa7NrjYgFwYiXNDsfG7UNAt7ocwWoM7UAnwpXP1d3zufVCAhKUznvBNbf",
  "key17": "5n4xv1obhTA1GCVv4DqdPgT5uAjUj5DR8A7shjNc2FV57nZsLTA4XpuYDvnr4h57FGvdA8ZsabEQUBbTbrhEbQXF",
  "key18": "53oPo7FBRzc89kMrS34xiB2pSx957K6pBD7NjeHJpvSeiXv2YWepCLodwdtHhxymZf9ZBy7ym3Xrwg8Qu8842vqq",
  "key19": "4nAPKRByBMg44MqaP3GCCTvwGdB7RLUXcZ99Tkie3Ct8tfwWF7FfGAPDQZiwSFnqnueRagVn6QnvgGGd1mYhmFj8",
  "key20": "16ZQVcmpUm2Q7Ct7tTgijFRgwjUm8KU6fQxTMkewWwMrei12uz3wjTYrbYfBFPQvBjgL6kKh9aBNGYFXReM35Xo",
  "key21": "2xnMoHfAaKbzX1NiNk1AXWfcfgYhKrTjGjpo5jzoRgezfVj9og61ed7aaCykqJgsJEHnp5Z9XVAQ226L1jjzEi9z",
  "key22": "wUcFk51VeLaYasDoC2kWyr2abKcgmf37dKT8cmmDn3S4DFWsVHWvF5QMw7EpZU55gC2o3t3n4FwxAy6QmV7pc7y",
  "key23": "59ofCmBjkWaLhAoM1SYhrfgzryXw2ttMtsWqYLaRLxgHJLXueUREaBgo2dFtNznLT4VxHSz8x1LfmVUs4jNTR4Ei",
  "key24": "28yurc7xd3wTCfX1FqCoBCLUbBNynh6SM5abbD4otBsjbPsLSjWMcqCiEsQ6nboffhAJBVysVeyqCF1HbCHJPF9Q",
  "key25": "3xyV1Vks4ZmwJjEehtKjbwW2GbwWBwRceiqN5vvpAzbA7yV1j132MPGUTHKcJBcwFjhMgUEHcS2SP3qXWQ8RZUWw",
  "key26": "29qTf9icoo9ngib8MtgUYmkqM8PRjUF4aZaFY79P5NWe3SNJ1K8CZWzrhdSQSUoBMj9vkiR6iWsN1xMrUzpuGdxh",
  "key27": "4xWSkVtaWE1uLc9npiomTNit21GjzSSvRp7JhaDCrHDQ2Shz1UuA5G2ZWxy3WV25ouNAsCk8agcoMJiWQBp3DJyW",
  "key28": "21FWYe4yGpCtdnmiLMi7KH52Vf6wqf4PkjFWRBPre9fyHxXo718u8xXD656TKSuH6cBvmcfYvWMRCjGHHK9fxzjM",
  "key29": "5GdzHJPbLjSH3ZFwTtmgXST5JMrG4CGoYhP6dXxCF3t8juUiYjzFDtmCx6D6N56xu4LQpc51kKWMteNNGNjH76WE",
  "key30": "4uptKCheHSRfMHE5s8hE26zd9GQd6R3VuVrsngf7CjYqhkAh76gZSxfSAcfaV1s2uJMJoTuvMedBTXjheeNcuVro",
  "key31": "3U5b9SYqZfzBCfoGFNEUHp3Q35H32NwxL898b7EdA7Z5PdpVbTsQYbdKxJXjuAktXi94BhwxhuMXvWff1aUMGW2d",
  "key32": "2sfMmbunFvNzW9rR3ZcjxRqnCNwmRwXAKusruwX3ELwsXHFu3hU7weHGqxumi59PuXjFhiZDUkGiQgMzywuxyPGS",
  "key33": "4eoBdCAuAJ5qR45MGLDXe442aAXL6r9BaKBW8mLcAKVQ5VrVGqQYRr8s415tuxiAfuDFEwHXvRksDPUrULRKd5cp",
  "key34": "5nhPU8Nq83vU2HC1cHp5wy2Y9TGFxxXDngMkGRr4CfbudYjNT7cZr9Vm2e2NThSd2dDtrEL3VK1QgfzHPBTXtRtL",
  "key35": "2EKfK3znUT1NsR7yzRMW15QjbDmVwLn5x5CdS9FM6EuQBMEHA6VWifabE9F2RYoHyJnr42pLaSmLxoBdRTPnv9eK",
  "key36": "4fw8TGFr5CxXMB4hJVZTyLsq2fa51zvuZdGqZZkeZPAAkPKin9QH4pY2AnNV1o1MbPcjA999kgoYBDiXhwQA2ejn",
  "key37": "5NMFSSWAw67Sxav3FNRxZYr3WFmT6o6bPUtHCc3fz7ytiMPfrv2McxgGqTmjZYc4L6G2Tp2M6HhzqjP4cirhekCp"
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
