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
    "4wyork91X7XNoNSNkWGGeZ9FSfVfZsmziGw1bTVQh26ro1EoK8ivEpxmqYcafB6Q65gUqRMgYi2xoeLHEV22fmW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5KX3ZFx7x3sMUbKnFmqhdML8vxrwJwAZUe1GW78MFjHPN4dwUSk4oCpgyetxoEJYxGXMwbUf21nzL7PjNjXPUz",
  "key1": "5N5WAvYCGiwNL6JyVN1SN73A9qcrFN1yvw974wFXxszunrWFst9K9qNR9N1Lg3YypcY6rBYad7BKYxnpgcUVQRtU",
  "key2": "tQeXFoGLXYQoMtmdgLLrGyThqGQ1M21GvU8ScYFe1dgyL4yAfMmmvZYqP5YhNCLxN9u4xuaBBtaiEstGVBT93Xo",
  "key3": "gHStUYBwHHoM4oHahdPR7m4a97CegRASNgEVQYLJXCQ5spSTPVobTjJiSXLrFt1c3SumwJiNLxgPJknANeaAGX7",
  "key4": "eyzdLJXnRYHqapodCHzyZAAh6vdXqZW937zNwhXyYX8FzzhLyAYP5Qyr6SBKwD2LjpSxdfB9L52wwYTKpxhPXPC",
  "key5": "5V4CvS3sKf8JY7qfu67BRrxXAhYCNRYTNu6DQGP6zuVGvBi38ZkemZmbzKaPwaFb1ueDoKamg3ELDdH1612goj1o",
  "key6": "4HqgnaKDqDvjcv2NCrkAfLMwb5ABGGGU6fGrSuwQVso1xfjajVTJDoEXTr8d5j1VarMGkkiR5RqTEfRNoe1EhSmC",
  "key7": "xEAKroWJckPR3NZZBojK45i98S7TrHp2VwHwbEqJ3HCfPsMBeecZbbxS1ESuQmnVcRRJ32CBHCQG8PPbwrNDp1G",
  "key8": "5psFXvo7Yg9TeLQPxN9YSgHqj5fs4oRywZBfkVS5XcZgydpo3BDcfMatSsupwS3FKsUtfKsdJ956XoJWkwA3ibdM",
  "key9": "4VzrRCf9xi7dN3wbRnkPmgNBBYKwGdS6QG7HWsPNtqV1sVRNjkcYPfzHi51UYhKNMUtikvY498AkMdHQmUqkwQjX",
  "key10": "hTo1B51peG58rsnY3HknrcK1KLu62Wo8jpAE3Ny7MuR3kZN16mD74bDWwe2tz9e5vtuKX6Uqy9KStD8nP3S6ReX",
  "key11": "4Vz3kQz8joYj3bZKQiZBs5JDtDyBzSuXUc7CKpuBtU9kzJjm6jgxTwoaYTKJTr7YBuAiuqvkSp8jS7yq3skejUPp",
  "key12": "2yrrxPspB3Xp5R1xWgDcsf6C76G1YAtZik5NSor6pwXw3aQY7cciDZqvhxozAJYv2GqyqD2b93jE2m5nLRDRdQqJ",
  "key13": "3yFgZA62nbPLVFecoRZA1SVh79BsW6q8Yp4yrngWEyw2Yb4F3hQ6sE8KpK5J1mP6H2XtDy2o4g17KY1U7Rvd6iK",
  "key14": "2Labj7gjKUYZyUSHMDcRm4witg4iTtqAGWfuHXyrKhKui625gVQiXWBcnb1AnroFUzidoHANuQhtenKZQJjFEJZn",
  "key15": "5s61zWuNSMvjTs6GmddFbFVVARyPVxAznkfsAzniprZ3LGLWsS44HZFNceTNFHdmFv2iHokVndvUykJGZk4Sa1Ey",
  "key16": "4aPHK8ZLgRxfWMepBiDPRzarnFH6CWAmK4sujSgS4tTKspbwYRRwMTTG6Zh8xNxGHWSju5bG82Hx2JCksNM95p82",
  "key17": "51oXvLp2GmRjk8qjGWzC7yiyWEkBn7Riyk7Ja1FWtVvazGCXUZgfUoAY8AKpwxmg8e21f1125oqKPdzjBivxXBcA",
  "key18": "2mHDyL2mB2n2Wky5KB5kGanyAwa2kmXUt28ouSREKY8BamRvM16P6xrx3py82otbtPBdVBQ4GwnKu1BFkMkxMEAe",
  "key19": "3eZHUfKXqSPmTi6RjaemQMhuSKLBnrpqMXXuecs85wuXMU5PdQ6UpqebDoBz6uRmK9GK29iRumN3JnhEoMu3zhLM",
  "key20": "47KDWWTgz8ovwR2DSAtmoKkCPRiH2J4b5VxJDt7JCynGYrH28dLtnkq85nZZVq8rFCXvn6pm3uXxAQ3z7U7TfYX1",
  "key21": "4ucCW7a86JmZJBtxFsutuJYrx2xXTgYdWsq7jdx4vwkEhDq3nrG4PTxMdQaKj8UV3muMZRVAJmoXfHpagrCxhWru",
  "key22": "2Ai75BnLgVKrBdMR23HBaL4mHv8M3a495sL8gHB2v7r4Ki3mWM3cAC6MWE9qMJy2aSwL4SUrSutN8EXdubfySATD",
  "key23": "5HJnsv9FfAyrmjQBCRV2ULn1BqpKYhEraD69z9voHEuyRFHNXnUuTPK6u5KmPRkJEwxxEwvSTv8SJmWysT9Z3SWM",
  "key24": "65FDbvQxacELvqneiK7kJquyTyGuEm4Kw9oTeZP573ZctJ5zAuq1Y1Nxr7yzQYKHp3b3aQs4X2kNqmPdz1dNm7WM",
  "key25": "4g8AbKS6QvWEYU4Z2QKKZNuMziGkKuJFv9n7uLSPxQGsCQzoUVcP37kYcoPhGvyFWBjoCdN9AJ5Zvg5CRqZwvgFW",
  "key26": "5URAPQ3SJz3ALv4e7Mrqn6NGCJRCXwz7LQ9gvzLEHB9G7B2F1nFiH6prUioP9FtH1HgQPgh9L5Ncx8KxSWE15bbX",
  "key27": "43WTFmT9ZSN8PVYH181GSB2fkn2626uhnGUUtKF7JmuTS7ztUBWWx2q7bWiMW7v7uGwRihTGzxGfKDWyb4fbP97",
  "key28": "x9WynjVmLzbwUVzuMFrxJNMmUWs34g3Yrh1Gfhj69Mrhdx5LJpcuBooWoPGBNnkzjAKQQWafkBpMwDfE8D1cMeR",
  "key29": "5RxX4ZrxgcLM3zmDz6Q4TJejng1D2f6mufFyz9KNxMCHNYn5QhCTfDy6pmF7Y8ii3srWh7KFGP9FaoWDWUAFADpz",
  "key30": "4eoSJ4UGderX2us5yYWpXg4DrUvrpg1rSp5abjWMTqsTwW1VssDa43fiy78zHD8XaRsmRaf9D821JU13KqSvmy9j",
  "key31": "5vYZejz7AjHs2igjzbp9qEXdFpu3gJcRTxDQKVEfMJJEEC67kkuY4BPqYt28Tv1RjG6memAoXiZQYy7xygf2owxj",
  "key32": "3vKwwwpsWhfW2ae7DjkPqPdFNhFv56rbH84HGZtUGU8bDMcLsoCTssq3EQmmDE6fYDWf3Z56KgdN3Ek91rZyaNJG",
  "key33": "3rzTuCsQ2F1GtHXP1uhVBbCVgDqKmdmMSnMukGe4gMsNKCKq2R135U2kTxHPUMGL9LCDXvpyXMkXXHRFzypuqBTs",
  "key34": "44MepFbPDoq2hUT9hhPgLHPP3s6H2x1bpD4vHtZDduTGmkoFweUSyk6FYU7DqndjKqHSwArJ4WgPVGzwipRc5DKa",
  "key35": "2tAqy4PPzR5wAYJEXwykeRY5VhMDXG7vyuri4LadNQaMPRaYXQw1ca97zoFGoCK5BeetPQKusykCECz3aTkoGb1D",
  "key36": "3HwLpGA6hL15Y2pBRgxyVNPVLn2v1orW6wzv3z7s9vHtuuuWoBGmk34VDAQjyGLRhCi8CBm6UXNDJDrgcEw5vE7q",
  "key37": "3zv7P5R8Xsjx92uTjkwpTNmhZhw9AxSS3gFqsNGJ7RGGYLLjRa1m6gPoJq1W9BHFpKjDWiB3PE9PKCLm35Qs2y3m",
  "key38": "4ezsfwE6zZJHwJ3dML2xKLRFHi6Fhkv4ACPLf3pbVc8pf28imu2SyLEHyQBVpeE4TTfnsfdynmHUvCNnUNeRjcnZ",
  "key39": "1UC8nyUq8RgcRiuP9fNnyRCegPYVPVhWHADYdnQfKiPpXEdnJWsoRYyrkRmpkA3XqH1GHFYHaqP8y6VbfdZg91o",
  "key40": "2jqLgdHrMxeGV1RAvxp4QutquhH9estL5XGPqcsbAQZcvf7C7rCB4QYY8K141wvbZhBNQwJ3Rn6EzZopxX4B9NbN",
  "key41": "3QeeYppcA3qz1zDM8eTDdqCSATiwR4F4ZNnM5T6tdPkzPtQcJpSHhbBYxPZuHdBS4WTxoHctHhPaGNzYHXFifazi",
  "key42": "4h7cadijcHPGszhpqB1JL3ykv9NPXYLLNa7qRx4QypsjUUpGnu9SHGT3sTzci8PFKKRC2RWrF2M221QCGw8Q4Rmj",
  "key43": "2NMVfi6WqWPRzUqPH74TDQt6d4KHptTK4TbfLSHs2DH2DkYweuy4fh83wGUw9bymvYfqEgY3RjroUWRRPdRozxze",
  "key44": "BeL1cRAsfj7eLVSMg2XgTmqmXZB2FKVV3bWxVYnxsjfXor9U1oRxMa7tXKvuULrnySu5ScnpeSwANxBVXCMz6Jg",
  "key45": "25cfwvAyJbiaC8G34AzkN6zuEp3EbM8A1ago2bPdPGWvJd7LkgqaNH9Vj7FbkB5RY859kUcwy4E32fCR2Bmtg2pS",
  "key46": "aR2ETfcSA9ZRDUMQmJG4npzei5b4DxUHhgKBie4B5uSSK4RjRQ5zfr8e3SxvVkRUADEVhwTAeetFeFtbP1VcQfx",
  "key47": "wKCX3NKimRycHMCGFSkrCdF11BBRyb9pf1UNync6AGj3gkdTd6jkgZNnzJcwxnGjbfhAgZK4kxax551Ppz75fuL"
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
