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
    "3zWJapEXkpW1QJTBFMPYBvGVFaEKP5KgVNfosMfXSzq9ag72u4hf3cD7YgWXezchbmhJ6oyYrNYQkNuca5v3wHFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uc5883N1XvJMgYpmCDvyeuP2jAu6wAGm4dsoQuFVwqcDJnJv53iwfmqZWGvWWVGHaoDHZ5mXroGuDQeNqCzMjua",
  "key1": "597LLpNdfaP7a5sn2Q7ZNjtCS3FruLPJUjJ6HF61DSin2qReU6tQxdeopoQjaqDCmaumJazKJXjiqMRcKERpyHdH",
  "key2": "FEAVA4UWYZcXQQ3oy8MfyQ2eypS5aSmhqT9HPfxvvpmp4cbMDicaE1rEbEFcFYfPfJWqTz6UyX8gXuXnsokJb9p",
  "key3": "5gpRm6ex49JJgAeKuPx6o6dqXCnRvUDVVZ2bc46XYfCh3bfAPAziWc6tgQQ15P8GEKcardVwAXitcympUnBeS1FB",
  "key4": "5ZkrE9chjLDTbnf8eNZohSWUv3LMjQq3Yhqbwt7YkB1v8wWGJaw65hoWYve48sGN7donG7h4YrqBiKkChGPmzNDY",
  "key5": "3qeM4enMApdJhPALxnWUZrPrkGPAYg994xeKacpKsw3Cj6CB3STd5MTVswyyErHTUtcdiZmYMjMF8e4KFGVgmcPd",
  "key6": "5CkgjyVaJnRr6DsBjSpTKMwzWJWDVx7aCTypBc9Gy9JQ77RNgG7jGpqfGJdkLe8tHzKevddmZnSM85zcNmEdwQCb",
  "key7": "4k3vggiatkvHMNXbakcRbbdoCXodC9cf7ygFWcZHqnAmqKXywC3AGkmm2WNTMrUeJrikzA8Mgbhya3bRVuNVgfKs",
  "key8": "2yKABfv6rKchk5hWXVzwnjnxLav6u65cEipcA6oKaeKtAVEAF6UwRve5DgPCfp2JS9YNxpNuzynK9rfxvdDC8ZMz",
  "key9": "246DPhNz4wHYNpACcVzpVU7nfqSyzXFMt7RzqQEpN5kQtPCH8YYse54Vu8vJpXKYumBXfwEcobkUUAMVF1JAdS6a",
  "key10": "FVLLvBCN4UcszFHHmE4K2SRzNErcTxub3qkXivNdEzjTMJRxL2oYGVhc58iTFnkDvZigLzwpnxNyat4YuauYrCd",
  "key11": "3Ez8759szipEvDvciZygX8zZUzFp2M8pWuHRMB1tWpwSkNhuQ2v11MBJP51yZMk5pjMqyPu78UQnnK4cQ4b6zUMH",
  "key12": "3nFUb11SQPFzztvvjYb72W52y25ujRC9Ekc2XWmSirzNSfbXE21QSbjQrHPdVUo9NvzM5W66LLRFsWCgctpdQ7Q5",
  "key13": "5XyeMQ7aEAAppb4aB6opWYUN9uhHhQuzaFj4DnqDvXwCnJGYW1ztwTES6jCaEhJ8pHF9B7jHsHrvXzVCJRpyzReQ",
  "key14": "28DFmETY2CWsd2R6CMiAXTsUCZYwg9c5nTpqrgc1GoyCc8LCWzh4GEDY2gQUTzJ9d87veWfnCr89N3aoZtNPWXSZ",
  "key15": "ZGHf1bGDtDKYEsVEekrZJQD3fLrMhpnpeK4rHRyXhTUSDkwiSwtuFwoan9tNGA86dR9ccYFy2Ebmz2CpAvVJ4PG",
  "key16": "5p7SsUnVFmAzXL1sJZwLqs86GJjGwbqhVP6NaKqHBN3dNe2GyzuM8dGAcmzRZc1rBfLw5SxEr4aUaig6cdY3UUWK",
  "key17": "4yY7j7LDnVhYSKRqst5nufiqqsbGwg2wL5t4nNfcvaoZ4JGiyMRcYNRGCo4YuQhXgCCAiQvMpyiChP8GBcwXU5dj",
  "key18": "bNFFCkfgFSCvU7tw9Pjh2RhBHBJ2TeqnZ11CCGVeCwnF8ov7RrEUAH9PKoVFF47iTAp3RksTJmAMyc1a5BdH8pp",
  "key19": "2KQQ1sahmX2h3vyCiDVKUqVECRSCmWcPoTFvAL6dKASREWKueouSRwtzTDNrAg6oAGjmaUaKzrZqe1xhPyx6BmKf",
  "key20": "39x6t9LZ2pnQF2MWBpqQigFA1FhZghRwWvhyZ1S82hRbQjh6AEJpSCzMdm7okAGHhqEusUPeQvUFW1PAGBvE2PFQ",
  "key21": "nTPZJZ73wP6HviZWQ7oJTwQ9ZP7NfNAcoHsDbPD5btaxZYZ5TeP47jr2oZwYowin59FpmyD2QjoPMSuBWKBkuBw",
  "key22": "ryuVwaXAk8VGT5Gc3gfxz4xVtvaiP1afW3EQCNLfZdNZY6u2QsxyFFMTax2fTMdJwtrYPpBJ9P765pk9BzGGDbX",
  "key23": "36AfgDP9DbnVL51nxDrLhF2yavRtYuxHzeeAfvVFiA28oDQnbq6N6LfHxJL87Zu7wuRQPDBXw1Y4Jq1ZtmGsoWsz",
  "key24": "YSf5XnrSYGJ6DgFZktZhhsXRiKHJpg9q2QSG3EHN94NZPX1sE9c76jwd65Pvbe8TV9x2oyciC4nREVvwX5BSjVi",
  "key25": "5XU9Mn6DYrUYMhMFvMcP1roxXcmKcnimJe75afpQxotQtRQGvc8oSjGy32zNGsnjrxyknQKqNXxuDTpNxgyKNNfN",
  "key26": "55Wi82GjhAuosbxbVXU8GHNHAUmqmYRfBo8K4tUHGYJpCSr2V1C3g3ZdnRVG5QU4f47cHHyubVya3f3jQ6PC1ZqD",
  "key27": "2LjYyFHb9pQBMJFBcczxU5U3nSo62V1o3YRKYi5H2yExXM1QWCtLUxWxeHfW9s4bkovrwLa1PmarugGPYLaXiPFm",
  "key28": "2eGFEqsyLd3xG8vQgJ7DyN1aBjtkEGeoZEij6ddfi9xkdtSfzXWC1VF7AXGgBGSCimSEqYQFjKSgym7eKQjicfG2",
  "key29": "uaULz3SDeyFYx79N8rFgED8izhXcLsR3YdkWkYJoGpB5EoN7k4rbL9GZ6LuyocA1RreTbhk8jCjXC1PMzEgyi2E",
  "key30": "4wXczL2BT74PeX1psAsBPYxQdXHXZcDFPnJ3T9zmTpzJZfAGXywauoxBY2RafSaJjnKEPvTtUa4it4ciYaEEE33i",
  "key31": "2yBxdyVtiMLtLjhYVAt7ozdD7Ld6CC5Uizp19z19MM6GPRS64PuhVjw4zGYU8yGf1TWjVaL3uznsMWgS4XXU55Ho",
  "key32": "2gue8yCAYULiEkJh4UscMMua9QwzMMhtxNDnTtMESVmm63VhX5rsJundojd8gSLiFTVpi5VmsBARjziyLpRMkBkN",
  "key33": "3gZMn8sy5bDjUFjsiB8tme1hLUR2Bsry1DnLF98M5C4NEyP7eF6zBoPmn2rT7Ey8f8SQFuueurjFSjw4yJp78ssY",
  "key34": "rzKamG6cssas7d7JJHWjdoXsy98fLP49pT6oWfcRpMXZLgGyx4pAUcf4KEKD6uRVFTFX4DNJsW1R379VKvUiYKd",
  "key35": "5hv3RZmP9dG2hYetPrcko7bgAZVReGWMS777ih4HiLLq2ZyD8UaG9Cz2cPP3tCC9gfFKC3Yz4oa2DzH6CHGF7XD9",
  "key36": "5KCVHnct1fE76s7MmaN3VzuXQ7NPTDGWEkSVnEwLDetNQfWG1i943Le2F6TnpxbUPjdqNGWrFGKUrAkyS9NMEV6t",
  "key37": "TDmRmcLEiCzFRPvNSteRZdHQwEmEVwQoYvQDJr6ctQ7b8m76E8pWC7tVc5KdCr4z2NncbJupQbqhCKP8FztnJDB",
  "key38": "2fRgdM8k9acTFvTesNLXJNkknV36uZoPzC9j6UrAoYMFhcfreZAdoruznbqcsALJJscUWxW3x3bSRLYkhhGBqiSy"
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
