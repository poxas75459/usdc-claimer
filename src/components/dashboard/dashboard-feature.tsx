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
    "2dp3AeZkY8C4cJTxpqYcBRPuYuAFGgk1CdptQmhP5TfSwbDPG1E8NGRLo5KCazCyuxD61jPMgNLG4YKdzwtm8HXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aSQUx47tdohEsHpcNemaR8eW8UQUake6Eog4bfVbxYPpQqJQLSETmykcT492186B8Hvt8kLktBExd49roVujW5A",
  "key1": "3bhaC4kL3LWYr5G3CKtBNUFfeRAP1G5y6EayzEndzbEHnJ2ZUZRd3yLqWSvDwDuFUKhe71nLuXpuHmaQRnuX6njg",
  "key2": "52TMxefHvGieDPhWqXvk2SvA7d4XZ3XowFbG6sBWCmqK3wgFKmC48WbjRxeL6G7V9UqyqZbfuneDSJCAzPzuTeJM",
  "key3": "DyMjXqTW7mvx7rkscCmBbaREXfv8PiEoGFsPBhxTondzgscWmeMnaRACqUDWfHcvTroJ5SMQfEfYQMpVECAfrCe",
  "key4": "2WAZJU4Peev9kLQqYi5ZeybCbx9ZovZVL5EstZTjQvUSQfbtmgzstq5Abn4Lo7JYWh9q8jH4tud7GBKQcdwUWj1Z",
  "key5": "iwxq7DCZNi9S2JQ94WnwZFEdDLZfjtTARMVuYPipfWptvujzyjZGchJd5bJFCQ7dFWto8e8VifLjhxnnC6cmJDa",
  "key6": "4Ys2BxxrWLfcojjY8MVVcbHLrn4N2xpfsB8u81GR4DfRuXaz3Rf9cB3XZteUTZXjodDpJ1tXgw3dQNkjsLv2Paim",
  "key7": "4uB8KCP2H7ZyCwW62zqv7Wm9de3R74PTN69nViaTNnx2iXhUvew3sNt7hwnzTRbJWmRLMUQAh7rWGZzvZwntmaQ",
  "key8": "bikLn6zg4Rok26ariPLTQDuiLKjeLf2at7Czmj5hX7CibJmnLDfMzXM8vRnZGz43sDjZAY8cYYsir5FWGkEAVDC",
  "key9": "3mUAVLYrksMfzDsYFKJsw3puHeu9rf5hMB9FVB6euPG45U53K5vJbPotfkq3kPyPRC1K1JaL669CQWXqga6mByY9",
  "key10": "2DLFGmteEsSM1cndEGqyD3ZAudkevZMbkPQgx4S8MaBgFGtetZUh3hgyXZkYzNh9iEKFiL4qQvrZs5sMgHqQcfj9",
  "key11": "3AAK3kw5bFFUELa6VXnByD9iCuYzikYthYKH7VoV2xFmuQ9KTt8Q2TXztGGwHcaGiHCHRQ3piXg7fJhHFFTRvWFK",
  "key12": "267T18e1Eyyg5YriADog9FsnkqXFmdVddin8wNLdAuQAsMbFrz7x1feDwx8L3hphmtBJyd3M6rRk2aSDkvo8vD5W",
  "key13": "2dW4L146gRPedLcmf9W6p6WQzgb3vEnpTq4DBBfpsPdDP1LBEmemt6HdeM82samTqxv9t8YpeecKosd4ZKxS2LGQ",
  "key14": "QhTz3xR2mdkk53bakDBZpfy8zAhiu2osCu5ULwbUoJVFHoj1zLmnVQRAVNSDEfKDQFQG1etzuPidRHFGG19TiTU",
  "key15": "4RZF9H31HjKG5qeCZyYJiADoVdwwvMqVRuvMUTWmKQj3dsnnRgXsd6DtC9j7hc8axmdkKE6zPV64XefkxcBbDiEC",
  "key16": "3Dy55Af6aSa3xMrcf1vZiZ3428CzpGCoMerLDTZUUyRu3TPt4tnAwTtTVV2rd6BnTNmHU8yf4XbLrvkAh6gSAYHM",
  "key17": "cvs2NJeuEYPzkwjvbBkDZYg1VNyWVuC4zaEj8ukAz4gGb1AoYC1yuNDrgRBp3TroPpKf7LgJEwz5XjaKmiJbr1K",
  "key18": "4CznSkmjtsy9uv2oz5o13cPCaHAqBb5Gg2rY3R4HAeZWNpju8eh4YHs4mSDWsDuAS4XdyzgpAHH4KZsP6gG88vnS",
  "key19": "4LHN2Yu7J5EaPBVcoaWYYCzNqfBGVAkDy95VBRy3C5is636k5UrKgW6ASUa6Sz1MpvnooHNb3rJkkEC53nJ5MSch",
  "key20": "4Y4WA1aKsryFnxeeHKTadVGeZu8HnFzboV4C6iEYzpjr4uRBHJtnwb8sF2XBXb8SzhSmVmLQXPe1RM6WX3KCcHSn",
  "key21": "3r9HRLJQsRKRUXC8jpsnrt8tfUozc3wpJbxT8gHf9Ws3jo5RH2ttimEDYC2qL8Cx51VSBCMgkPUcre2YZoYYwdmu",
  "key22": "4iCj4snXpee66xR4qamf2ZFeJmdbqiJu2VqFMkuRK8j9XQeeiQtXLuEAkEgkw4QHPMNPPaJV6hGA7eLcHuZX7QHT",
  "key23": "3YnL4juCe4zkvS4SWLTAK2tfymbn7REzTf9W8bmLxu49Jy1kaeGvDJTydveWLmhDzxgFub6WXDevQsBpcup6qrjx",
  "key24": "29bLyS6dPnC2qKWgNLJfXWHtymYojCnMXT1vWogWRQoZLRs3bJEpgPHwepb4ehSGMEdpytGcrxu35EpmkhJjFid6",
  "key25": "3wHrbEgJQkiKiWtQsJfcygu4UMd3HjcvqqKTS9rqsUNKiwu5XnZZmL7Tt1u4nP4vnrdp9qyhwDjn2QsHnX7fQDop",
  "key26": "415pJtMEmBseQyEk8UHE48AS5EaanRMkcpp7tGkhqJFxvKm7NF3moxGqbxcP8kQU3GPYQyT2w3XwkYQcpTMPA4ho",
  "key27": "4CPXfBPYNs6FjxqTAWY6Hj56S3wXZxcAEvTykzLvRSPCpHeNNVMyx4gKr2uAeRtLDQRsfrSVjD5pACBCD6TZQvd8",
  "key28": "3Jdq646mXY7C4e8dPkGMTRzN6nR8Uqx7Ukq6H5S67c7Phkj8RfpoVAYL3kmehYA7REGs7qfQ1vsVuHD89zckcmVw",
  "key29": "51jAFj4G9sZXq7k5L1F3zfmXuB8poewWgK8tkSkY5FFKTuUJn9KCZsxStdEWEazr2JEWKmvgLNqpy6XvAvpvZQf7",
  "key30": "4t1yexuU6mmbwtRzZMkwvoiZXT45hqnrQCkbcCkvWQjxevNEwVQqHPM6kPtHzSCZQ4b4A9YBX6A8P1xFLgcjwDb6",
  "key31": "CeHVmsiSie3T8c55qKWvXq7c4J2NxtxLCWStL2AXNHa4UKWVfVX42McFnuQ9SNqR6h1FGgFuXuYLgwxWhiiprSB",
  "key32": "5BGWHkwGp6vJiFrhYPj1kc7DS3JCEkUcEEkpYjHSYibwY9JfhYnxsx5ZeMJYBjqcGTwK227LHXZd8A9UVxwzgJX7",
  "key33": "4cshEzHyCiQsKPYmnMX4z6C8nZZVJkRHPR76Pnwh8SRixtQ6BebfZDPjwggPMVBQzR68foRMSovSB5NoTZah6qnY",
  "key34": "1drNZxVeEfnV8ASZQUuafwo4R9pYQLkrBQdcgu9YL74QpTo7uwVarNtV8xsMXPtMoYJGrH8pfspFLUdTCzwYgXp",
  "key35": "Thfg3S8fpom7NBf9GWHzjcnets6q6z97bboRDhHXwyPTC1nuLJSZeNycens8zgD4Zni3VLx1akfafR55d2uAbRK",
  "key36": "5hpWGVbi9V1dFmfqEDbL4JhxrFjGHULWDxKwDTZVg9a3dycgQKCPeUnKCbwpiJf5zJBhXHc49WD3pSm1qrhtQRoR",
  "key37": "LyC523ijXpcZzgg31SioefHW3PBVqNuo8ffpxancYm8vLRBdgStSq3CvxoBQbyihtPHjojgBqUrKruwPXbwGNQk",
  "key38": "5uT4nWAiqGp2avYmH4W7TntANyy8ubZkHqjKKuBu5GVLXDhL8ds6tELYP1TTZjzjpcYhijhkbFE3XBMtLATyYxFH",
  "key39": "2FrP1WUzZKC9jwrHJscQj6Yr5BLwdNJhiVksALQpgpLWbuPfynEC9afUp6xX6Hz5L1vd8bBVB9xj5pxcH6rq7oj",
  "key40": "3zWMDnEVtZa5McxNAXvWa9Ks7Ac89CPKdvoJA7C7AzCtPjeZWRcNG5f91suHA9exSwPGzqzjVWZKgrJSeKMb47tk",
  "key41": "26D7gfpsBBs1yT1hoURw7dMeC1YBX8H2MHJyJW5p3C5qZGWFehMRxPfFfgrD5PrbbdQC3GwJdXcfaWp5eKYHPdxB",
  "key42": "3LyxPp6U2oFHFSaBRTSyC1fHdhpbobLqGqM7xebhEys5LmkqCgpr2f8yQUGy8XJ7Fu9zpywKf8uUGJqoP8ouSZkc",
  "key43": "5VLedANfuPSEJ9P48t9pXoUMNbMTPc5mjL3bPSzXHPgpLb7r3Vff1UnvZhV2EYcKFHL9naZa6icifXEczppFcmp1"
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
