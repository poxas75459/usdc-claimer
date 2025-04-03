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
    "3isjmbYDsRQhzXZBew3nJnmo3VrrFSzS6YHUnVL2oFhjP9f4LY6ccF23M8VY3m8AmC9RiRzef9FEDJ2Psz77aiFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5znrAmTXVdS613T181eX5gqS1WnYy1TSQP6LJBTHBSJsmnQEdX6tBtgRhZmKbRrxGMn9ex3wR4ufgAbhBw5czSsf",
  "key1": "5Bk7uphmkb8kgcSHEy5Zvk1oebe57QeddeAefWomWhTKY1du2ZHnsHWV5sJD2SAqJxJLa1KRyHF8DmwHcREHAFRb",
  "key2": "54ThjN5tys7TU1KSx2RLpaa3wmtbf4rJnbr8ewonvPL3k5S29Jm5h7s2bdLKW9xkNzYSE9mM8DtY2GR1gt3ZMh6T",
  "key3": "RrXtCoRkTeETNLGVPCVPUaLokXvgo64xtT8EDct1UaDMtLqgoMd5o1z7aEzFhF3fz3xDLb6uEg8pvfB8FtA417Z",
  "key4": "2Ve8R2pYTByuUk6xSpj3xgdtL1BPhTBwEPEqJ5NPjVQZi49RUw7d2UFzLiai2BrYx4WfYBXMoq9Dcj5owEtGaShE",
  "key5": "4VLgKceDVUqANh4qdDFM5JNkBUqkgpnQ6rnAhDVT17WKKDxSVQV7QKPVzB4ZnougPZgP9nkv4K687gu8v6Scm57E",
  "key6": "5d9bbVCLHtR7fNmiqHJp6awAa9PnbvNMXKYrurvzAKk6pMVw5ttSFTxbSdvyzt6YqN82ySNqihfKGeCryHcPyz6x",
  "key7": "2VF1n7K4hw8W64dQqHzqJwTPRUwzm3Af3kV6sUjSSFYCcb71RZ1yqPSN8Vr98tgJkvcEb5pCRoCCPx7kWB9oyGHe",
  "key8": "2Cq2HEyWv7ybryyNYLaqxKt71VdwanxKoxaaWr4sQDyz7iWDjguC7yEfr8JM96c1MJRGG8SKmNwerEDR4nLAzSJp",
  "key9": "498DQzSW3r5pHpMQy462Jo1oYX8GdiDUcHo53wpKLmsztQad8ExxrUGVJKtmjpg4c6PEht1tRzRZ1WVxRaXXfANB",
  "key10": "5aVgBfD3thgHckVBVZXkExLC1hTMqrqfFY6QGjqQLZbH8gc7sFDgSmUZupbDBZTKPcg13NtEAex3W9c6GX3FawWa",
  "key11": "57mY7TnT9m9cNeGh9iNAurZAwcJpoRnsVhaixBdjt9hhjYTsH6fUd7MgFUtwhwn134rQZ2hBVWhQSTVy43qkTCjX",
  "key12": "5pgKfhmuV5V9qjVxWW2vyGiknoFCkiuLQWfHHVzGGQqMYkAiFu3SeBPrk6uqKsgaFfLJPS9nNC8kSBdBFyDqT6Rh",
  "key13": "5AFxjWQAbpG9wTYBSRMz4Q5mexZQT3gjcRif5H5ty7dVaroj9eNQ3Xkba4Z6ENsEuqby6QVsGGgMTWo2RVaNWKD8",
  "key14": "3vv6jD24jm8XW48Hq3QZvPe5PHq6bquZCbRK2VHocTDhbU96ENsjvUFGgLDzMjdJmEu8bNBkQw5HMzkc2iHpUiqJ",
  "key15": "2FoyMMo5iN3YWgjT8GtcFY4dJqLSB9iAmTfdDSX62yquhoLLfMyF75g8DaAr8nwDE1P33xx7BQFxS7bn9e2pSyX9",
  "key16": "2FvrQNJvNQgvKk8HMUdFgHLYKBPNGbRg4wXVzqJ6A1CkbaoRavFT9AbApQfpX9oM4SCKNH6PMMgXaFUebtdHyRCo",
  "key17": "5ev8KTPZM7eWF6NJcNBtATwfDowR5GPf9sBPioGtUKuLZ26MCrHKUGxWFrn3ma1fLu1z3p2bwqAYE7Ma2hPtXf2m",
  "key18": "5BaAn52oMwSbZBGiN6Dk52hDyQQV5JTXATTP5ky5CVsoGmrhrrPitCpqC4SpxDi9WFoUKPHQH8eZXUP96LrGR4Xd",
  "key19": "2w3GFf7HFjRzjkd6vp7XqMMncKvDkNEiiW1mVjv59Bu9ncDBx12aLkBCTAGHnL9dUcxsae5reTo1HhTkA99B5dGB",
  "key20": "3V2GxKJQbxyy3FWyEmHKsgVK29b6BgfJd7m9xvpgkRyDf4pVcpjw359U2woaetfHxFFBXCm42XGmkZPDb9Nh3Yyx",
  "key21": "5ATQ9QR1DFtvScHm9yA2PuRcCpAXmj3tQbn6cLYMp6qV1YgmjGjPx3EV1Dyt731Wjy3R1Se7hdhoemfrosNqjCbT",
  "key22": "5uWHqP3BamwAUh7RVQrdcH8JmngxYjwZjqJE9EY1YyUxjQuSRC7tPijpUJzqVQYcqgHSsBSzhQ35wRzGKnxyBEJP",
  "key23": "3BZdQLZ9wSeacKuHZVhYbMeRXijVPTHVRNbx9FqptCCPoXsLz1Fntut2UCd49BFHhhpK1r5Xo9ZZNMWprhJaSxxA",
  "key24": "2b5zEye8M6cipmafvzGeA9kFwqzCSAUgzxumT4AF2tPqtBvJbQ21Xk3XCKcp6gLhyauZqf17HpJtzyxaeuYvNoiY",
  "key25": "3yh6x5yFjVJRwT3MGNWv3bdmV2WpjqNLzp38rwZuYJ3NjjCCah8mdfACJvupiuigR96aXTgwyEjTRP4eKCvwjgTL",
  "key26": "q3LfVjV123GPrZgjqc4ePqmY3Lw3ygz6d3tK7aAeXroiKGMcQBn9N9hydvTyQ7ng8zTjGncBmSNFS27meDri1Ho",
  "key27": "2TYftFCuC4sUKxfAxpt87hNqykHK1bMCLjW74m9jgrVGHr33U9HRPU67ZHUuaT8TiyUzo3fSBEskyzRXPBcAViMK",
  "key28": "hWvKa6CjkPTD26gD7PS6BhXcEQpAUyCdLkyBqWdEdBaZr9Ttu3MtL37DbwXe8Fd3pfvFXmmZDgBfqNK6gi9RtVd",
  "key29": "2Wh6UEsrg9bWTeCLMmqjK99tGAMAPQ4FcAmWkh8JRTX6kgzgATq5DQV915QQ1QXzNwhDhm1B5uAozwrTPYfehsAy",
  "key30": "szBidDPTYjs8eet58zyWok3Z4XRzXBjXPCLV3CKhVmGsJ6N2qKJSsyTPXq7MkBLgaGyt5MWg4zJ3dBESixVKqsF",
  "key31": "34CsG2hNcoTWFMBuqcmApTADh51iVqosDvspWKarFARbjwHaMs5CHP3JEkJekX6gdyF2BcCaBS4ktiNi2jGiWAbU",
  "key32": "3onkMhoc5R5ZNzR85hah5NMkDdUmCdFvcy8YhWX9y8phLxJsGp8ryUE39C2zfNXPco4nBCPQyLMuKJsXzUP9KfBq",
  "key33": "4WAM8qT9x5gbnw9HUVN2BZq7tcxhRFAUyT4LvjkZYDWtRLyGyqFwz5xNKE5tvm9ag5XMazJNHkhHcwq45bTCgLQw",
  "key34": "AzGE9uyDMe4ztnScFL4VytFNDXjCcBZuDidrqD9QDk6ZBTE5ZXFDg3Kn4WSM79qo3cSP8k55ACsPYiM3NxkeSPw"
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
