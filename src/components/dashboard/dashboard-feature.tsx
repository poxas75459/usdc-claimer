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
    "42aH4a4PoJtvEYi5nJM6Q3mxnzNNQgRuY9qptBG9kopES1NfNWBU47hwig7NmduD1SnNjcEAa1w3ay4sivphbELW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnVj2AEDnD66teghTaWpo9i7JLgroi19UtP64iCgaGofvge9wTKxWJcuLcTKJrJ6TvhYh4WDDje8qeDyLbHgJ7R",
  "key1": "iRXCJJvA3mzEEveJdRACKoMvdf3fnkx8cywdbXwg1o9gdTEjdeFrL93q31Uk61JskdAC1NFasPtMWVaDnSseteJ",
  "key2": "2uS794jRUSLECkXxGtcxmrUKpCNgABRSJzw6WvyvgZqyEsMsRQs5kB3NfdP3p38Sxt1fhSL3qQSqN2yfsNp2jM4m",
  "key3": "5dw1aRCGZ7Bxu7uqxw78XdJSRbn5NWuuo2NTzrUENVaXVqPfgCFC11WeFQT4h9eb43yUfN5kuf9HDNAaXvbc4LxZ",
  "key4": "4Rbb9vqYbM5AR2xD6QH8MQTGkFfxNGcZp9VzZqeTXumFZCN5Tc6EFSZweVzyexLTZjXrFZvtheKKmj2yMJjNcort",
  "key5": "5pBW2ggbJh4XMNpphjmBzSTWRMoPthWDm7NJS5EDvZ3e6TUieT9zrsQw2PZsisuBLvvTQY37sqksC1Z6Ym3jACAw",
  "key6": "4DKthz7CWGzPJwsQ1w6AJ8ys2HV7PCUiNcHxZ8yJLYiRQ6AmqiJea9XUrePSDM1pNqViBgfQgPJHwxoPd1q67EPT",
  "key7": "k2vFkb2EsQgoJNpQUqbSuSaWRArq1YeiqEGs8eRvSLk5edyNsjp79FN89nFVsYbzgiw4pjNHUnQg7VECugrUUCq",
  "key8": "5Rrb7wCbwx2cFtnY46Y4q5U5KMgZm3sjWLSNREJvW2udXZ3PXWxvANNm6gQeDaXC5DbBeThYGzkBmyRmjnQwCrt1",
  "key9": "8aj5FW8ipQd8sDbvCvwvcUM3h4nUuuGDdUrvM9fRGERBbfUUG3o71sXKsgoVWxL1wR7Nnh6poZ4PwvsDzGmZntX",
  "key10": "2hNRKCCSGMxFYkiMj64M4p6NPHZ7ukt8diU449QHdEBSz7kxHzfzjL56MdHMVXxs9DvfSDUMhGGv8KZW6pFjzm6T",
  "key11": "4yUoTYewUixeLiW8H5wJPTvqj9d3gux68ZYw7oRcWSnjrwTyK429RRTpv9oQNuLVWxRD3uTbpbiNYwUA4W4pbY3Y",
  "key12": "4C5SbhQrEDPsPvRKaKvf3S1YswUdmjhaptfKGEVhcqXwcG99pQo33EfpE1zJGHqAHC9N3XHxopvDRVWEwhzChECo",
  "key13": "4RVCrfLE2mXY6oVYJ4qoQ6wr9RqQnsfehApuVAG24qxQhSmKELyDwpcKRGWjTZwBCX6wfyVNFjyhPrsqU2YXrJ8s",
  "key14": "3txiBfhAcg1hdTCB4ncrsuai3NygBJNgYn2QpZYch6pgxyMK722uoLsHZjheHSKmLNa5d8GtSsexC7ruYkhQXQZc",
  "key15": "1rVUpD6FNNBHXMjeFHi5dpzSDzrHsSNfZ532n92xFZPfMV2nNSMcdMk7A3jjrPGfUnU6TPpn6JB48G1fgGHHxjp",
  "key16": "Eef3qovf5WPpCdBnVtQpbsEWS3KnmN4rEv4YWBVeQ2fYEPhdbzwfib7nhXoNHoPW67SevK6Y2swJHYiKmVwUT5G",
  "key17": "4w9DF46KM1Vui85UoQJdugYWDxDYb9BL5YjyXbHPMWM7o9tvGm8T7qJGwwriQY3YcwxDm1uUTa6AmnZYbsCVcrEA",
  "key18": "2RLoNY5E5f9iDmfBUAexHwkqvLP7mWA2Dteaa3WixAm578a4sdvsnu3G5Kpb21NyUHg1G6fiyfzX9AKhgKahD7eb",
  "key19": "4TWt678Fw6kWEdYWqCoE3619zHiwetQF3jvD7qBGJzGaMJB9JoyGoyw5mTREgVDEDRHQzopPUvxviqeFKDvo64CN",
  "key20": "4mkDWQBeeb86W4gxH3Awxv8fZWFtyWXVQrkq8V52kin2JFkJWnY3MyrHbgsD3u8PF1vNaDX1EZk3dJCMC2YBrnAy",
  "key21": "4xw1ikGdVzuP9dnfDv9sMo8JPYBMbDXRjXeF6Y5vsHuuRwwJBJRnCKq5xjFQGmAxmLTNq5jcHD12XsLbZDsBytt2",
  "key22": "4x1JuPyhzXjhevWX3eTCQb3CmN8w9M9VqXZc52ams3WEriWkgCmr55EjmR7FfPHWP3U51nEUvaXfUyrZ2LRLLwWH",
  "key23": "3nLp6qXtMsuNt3rUNLoGakFqHhLLaUw5K9zK5Y8NQ9MVsf3rrr42pGdTFWfhT3t7egBfSC2RAZz4po4QF51ssj3T",
  "key24": "dg9Hm9Ca7dqD29DNspnExwMksT8jTaFxAwqj9mksv5uBGdFytXyTivgLDxJiUtYq8NSeaCUfxuBJhi66HNsrKDY",
  "key25": "2qjXCsjcH4vJxGauiNFaNCTRZiBNo4WLFqngYpb7KuoSLWCLf4LmNYdaYKzGgyusn4oP75p3hpSJDw8xrnJvVe8v",
  "key26": "S91GjsneHzgEWS4LRdM1HW5VT2Pyb4UHHX8e988KaSnvBQE14ibR4Qt1g5RBLsGcmnktD92SQmiMCaUYepL54nv",
  "key27": "55LB9GqhEm9GVYmLKrhkKRiuFGidEfLtij7QqLdcoUNkT4rZUmWrYLoKHvM6zMmUwSY7vtNtt1SYdHbWYe1gcRes",
  "key28": "2sHKaBDPDUX6nDrqAoporLH74PxAqk1TMsCJooiEcY5S5YuFxJ5gvm6GEsfhzZLCRJHSUf4jpXgssMYSQfU6gQnd",
  "key29": "5XiE6op6erpdXUQoniHzLtSHTFGgppRbE4hA47AwpLQ5U4mAQG76c2r5hbPHgjCLtbpDy6cguAQwmQEDBxhf4BjK",
  "key30": "25bUV2AysH7nKjWUkDuGBfYgFF29ucbZPtSmVZ7Pj4PhiXXsrquReVQ1s2iM4682qqhTabN7FyKyUq3VKHB3sYTo",
  "key31": "4gfhU6cvdhrefNmF7tKNdn8t9SYdXctvmqJzwj7efzFtdWhNASXF5EmaV89Whgz4zodYa2oVrDqThBLivPgmGww5",
  "key32": "4rWfKphrqRTfvad9Hxz3DFVDdS1X3rG5iBgKhySiimWsn6gNsJaLNwF2TavE7TCNn1op5bjtd5q7N24oft9Jtq7G",
  "key33": "5SLKCuGSN4no7tpYC7YhyzCWCLHeZVrdebsTnsc7qxAYcSJSFkVZ15sUVw3eJt9PfYGypwMpxRL8AapJ4XY3Sbnx",
  "key34": "5QV8wjDtPRx2YRw9WALCjmY85p3Ugb8Rrn2HP5E4dkwF9i8KiTDxFZ8jHuqU72KicVyiKbbQS277Z7s1xPkJNtX7",
  "key35": "52NY17yERF5dxhpbaUTfGLjyEuiKpQPdUdULXB3ePbb8mdr6PGfzUbHUM76RhRLbmJ7d1Er1FHfEmnqPC8z4j8UH",
  "key36": "4xhogvzyLU8J1ixzhPEwhnJjQhhUqUnZtzgFBJoZk3Gn1QFhLwAEierdXohv6UaScffMRwFzQzkFhFHLSqYgz5pi",
  "key37": "FRsaAJpsiJ97YMbAZmhdMbgdVUeA5i3NCC4bhbJ7oRoZamfRZT36DZidTSCKt68kFLUTEz92ezefPzF6jv1yj8v",
  "key38": "2zWPUfbG6Lfj3jbTTMSSYYTkWWzsCUR6qm6mnVxP16T6bPZf8RRF9NPoREecAUogoCrdda8HQWYB3jD9ekJS6Z7q",
  "key39": "4KQVD9iaHqrts69qcEBjXoU2hMry9CBbCbnETvgLrxMaxLHFAuprTVfecRPmckZVrEzMzgoBdZxA2fJPfynmrCYW",
  "key40": "3orMGYaaremWdqMVPMKh4zJzg5LzXPAvHL42B34wnvbUJpiCaMFLXD8Kcdy1JQdJ5XVYmUSNKWPXJrok7JSyQshL",
  "key41": "3nuzuj9MTQMG4hic5GDNNZbVs3GVSNr93uy2JoZ4FUEWStTfYVrqVWxV55GhfYzZVys4wRLekyUWQJDVmi65Zf8w",
  "key42": "37GMjPzWRbwpprTWkLgk4VWb7S3tZcKFJbDBUf759QvM1KGuGPzUHZBM9d6hDJ51EbX4tRyVBxTY7uZZBC1TYwnu",
  "key43": "JYbVfk8Zp33KCvZ1KrUSRvcmFzaASJSp97iGchVJepPMoeauJh89sQKdeTGibpquLbWUP4v2ZpkDZp59xn4LvG1",
  "key44": "5ubTDtW4bZu1VTLPG5k4YAsUhpzh2EWweh2X9ibzP6Nk5PaJq1kMwbYAf2DLt888V7b473fg1t1frxfsK63JgKyd",
  "key45": "4EZJtd1ADavmBU7arHHAJvZUmpFX4XUCNJRkpk3TWQuSFWX3cndwupJgxLMS1gzXUNvgnheeq29dkSqJDMcv8RDp",
  "key46": "ouwZp3bjBWuwyuJUAZqHaqdwfcTr9kXYRoTQQLd3abuBfPLaCFcQMmuV4Fuyj7ykCAveFV2avQkTBYn6vrksKjA",
  "key47": "2zSAnZjJTMSP3FHupNtXPMRpheACVJZH5887ZWVQYDhQmCZ6eydi3rbQk5GbzB26RD8Q1mp5au9Wr8T1jANQcXg2",
  "key48": "22SzxtGk8X81S2MtYo3WHmnKgFomUY5j3gQYCUf9BHgsaS7de8jtYus2uZnCYPYokR8qwX5DpcDm4m5qc83QGwvU"
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
