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
    "3e6A7DHFpUTjqjYqLTNWnm7ndCqgqayJ4RwjWfv8Sn2ZSPo9bno86STxG1JQ5sQF2pFzouCe3fgEH2ACHPN4CMmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RjoxhJe5C5YqRL6LRB2sGRpUopNvPzuPm87kpqppoEZedbtBbTWnDDQRHXB29eFkXidfPNGWNSztYZqHcnhNzXP",
  "key1": "59CUDDhB8ibt75dHL8j9JAPgh4m9T64uth2S94SSqZphCbAh1RBCQmEcJvX58qdsGzRJn87ZmQ66raE8L8pepjRZ",
  "key2": "2M6QDCz2ffGbR4szEuz9wNmcvgU8tjQCWg82Kx225DELYZfjvQqJQt8xaCR5dmEZY7cmrWPpJSCFqKF9THG7zKqn",
  "key3": "3gaVTTdXUvrqvE5PgpfLho7h9JLaDBaE6yMJwDYuRqDHcP2trqB5T8bVNKPLFLvdVs3W6EQGaUCTrYsmoXKMWknG",
  "key4": "bMbezbEaqovpvU2eGievKr1H5n6aHdkPaHHq9ADKXHKY5T8CKNLhSEmYhgWswtfaEfH6DMrS7Bqy6R7yEjGCJNK",
  "key5": "2jBonFqxwS4pnB35vVTnxVAvfKxpjvhCaL7NDSYzZ2MzKXngfVk5SSZBvjM4F9k9W3EU9SpvbfRNCYsD5S3x6PkG",
  "key6": "48McNhydEZjKdDwoE1u5JgJfoDYVfDtPNrmqFnctRri6xshkjsMBSpWDuz1nv5SHRLPz5fUZMptRiPGdcUcGeuB8",
  "key7": "3QDJ6FGM8JpQHDR2P8kuZHNF3MFonWcjR32ozjE38ECMXwny16ozTy7nJvr4sevQjM1WuJJSMKzJ821AjfKUusyS",
  "key8": "5SiY2igF63PQ46p3SCtx77RhD8QSces1gXHftpXeXfXbLYfQ9TQorVSyRHsXBS15JqqyvGQeRnRpgd8Eufk5pQbF",
  "key9": "3wru1oqLoVPHiigE1YT6RHNgSh7KHG3HERKvswQZngBoa3xqebJ1cmgx9Y2deeeURiy6issTZUBqyt4tXmJqVmft",
  "key10": "3dS1DsxL5N7owaAxU4CkPVQ2uZMPF6zETfw4H2FP9LAR7Zh5gwxrZhzyuLGj7HParVB57S8bs97FZxpEzSvv1xVt",
  "key11": "4pHuPAp9vAx7Epdj1q5kf6hnYoPEN7U38o4BeJkWByhSePJPq3nRnvGcJZTMwfnpzgvo7FLLtEqsfbRPwQCAu4Km",
  "key12": "5wEyXrEKe8YLzgrCgqdZ2Vw1gxs5E9Va2ATrE8maMDnkhUoMG4nFsVFLmPXmvi2JyRtZmdKmzrEXSwizJzD6XdjA",
  "key13": "3g8JnfZfRG4FiJWboSyLcPCyQGHdSmYrQ29UaNYZdHJwUpjk9AgNFTjLcGu8bqmkB4rEF6B9soaamcCrBrwNMin6",
  "key14": "51XNfo349k9UNZRgSuPjQApcsLMasHbTjfG6Yc4V9UmQvuZwos8EUEoZZYxNeFiVhxMfEYDud4a4KT4eQx5P4yZv",
  "key15": "iHcgrpBC8S6WqcdtGahz3sqfmc5tcHzkYRtsJ9E6W9Zmqqe8ENPQtqZnq3Yh2i4oC7nMypADmEQLjsdMsca44Gh",
  "key16": "39gCiDKyxCrHL6hxtL9HhyyxK3RRiiKQrZBsX39NuFur5k9GLgGRbXikGG3eKwRXF8rc4ov98bsCmJ74FYEVtAt",
  "key17": "44AVa3vpgBdQpEi4WUGFmj7zrvz8nVDqsdDnjiZFcMZ5KbTkCb7Kzzs5nHnYEznhCBS48C8BYRADymVrDoKKLQNS",
  "key18": "5pNyCVH3eq9uJAD6pkfdV45mELgrKvup1Es6iw9nwebmG3WbnBcW7vrvWykEUH2SckpDL5RoHT8t1wCyZwHJqZCo",
  "key19": "3hiCMrUdA4vSnjn9B9wLgcosVQq5APrRTUzeSYCzJ3Dkda1bCwQp2rst7nyxjcX7TVx7Ya8Tw5aRtoMjiA67jLnb",
  "key20": "2b8QEYDU6Jb8Npg973iEnSURsUgXYwezqjmSSC89pD7A3VeLeYDuGjg7ZYfirt93Cy33pL3HFGYyW9raDzE92kbL",
  "key21": "3ip8KFDUESzAi2HVw7rUtqeUPuskuPcNZZZkMDXaV8XxHXhVuhD9iPyhRP874koud3qR7KzdzVqMPwXeyMc8DfPT",
  "key22": "57fpS8EMJaWmU7ag8zqvBBx8Gj5CQihs1mcmYS6WQkgK3XnimtWKX6u8FsjoqZCt6ZKAYu6jmxPt84PpUGwe18rq",
  "key23": "4FySBouDa2ZRDxYpwdfMfFk59xPwhLu1bvcPR4qTQvVn24nTSKDS4sRkXm7GcjLvYF8AMuAec9yYxemS9woNRzRH",
  "key24": "4qPUjswEeh7ziU6z3pRpHDFgK5q9zSGjRDASb5kvuxLgkZTzXTCbeXpPqRTxXSkZWjrceowoKv4cyKAEWLDp2oru",
  "key25": "5tFTHBTu8nmaWqWCys4SqeTm5kkbcNGDdzU5dFN7z8XqSouJfogo6SMM5CytcNBi5KFo5GivhM9S16AK9kGZw3cE",
  "key26": "xSYwd6HKj2nxMLfQwr4W5X4YPbziPVwjawEZquXxzcyy9hweu4MHVCpyEGqVh7Zbh9RNaYJCVzGymHjUN9cNSPH",
  "key27": "4Q9AoVgEeooZfewsmpfEgu3gyK9eARKjv7ezxALXJY7xr5vPp1wV4LM5bMMMvv2bTm7VPnk29984sChtzEzyS18t",
  "key28": "5RUpQNQDhWE4NhtQDFZkh6m2yEFFtTKUgdvcTiZwJGPJWf15qxdPbpCLRYRgdVXEoJq8hXtBJdmqTJfG46iEh8a",
  "key29": "5y4tKXiYNBhfai9gQ1muzGc9upbNVJ4AwPe8HDwu48kicCcWdJq3ZcdRuLravnJ66Y7TduSKGEJGhxLc63hmkdKm",
  "key30": "2aiHWjtMbzCkjpXd86tS8pDUWEa7SWiuMevEaV5k9gN9kMrHAnAjLo8SQ5jtAEfn2djGq9Lf5h5m5CjhKWbKZvPi",
  "key31": "2Vm3mEMX7sJ9t9gpQ3MtSehNTBHWdni6EeF3NHSTf2z9yowticv3w72nCn5AHyZfNdDHWuyPVvQYG86JPXDyyLfb",
  "key32": "VKBxWMAzNECXjvomibHUBPX73EMzqB47bhRfj1rXTenyd1G8MYuda91B6Xqvq8d8bebaPJ2adhrRdHiuXjUiwDu",
  "key33": "3YoaEQvfYtferpKSJSHM3MG4STbaasQSDJYigyZGSWsAfunfjHy23HTMkQUa5BDw829mXcFeNgV9MZxFKd9uKW7s",
  "key34": "SX8yCexgTZHM99VFs6EpPQfqzcFq1W4AsrRB7mSVe88MPLco2YwziH2x7RBWUWQsm1rTNEacrMX1y39uLvriGV9",
  "key35": "5iSyESC1jcpYS7WFWVoZE56tNMrz18p4mfiWVGt8emgSwe2jAFMZnwvtNfQWVw6ePXKjEW9HBGQns83Jrt8ymAXt",
  "key36": "66zY3XsgMWuysitdAbpTkcboyzYtpYzKSzehCXnkM16cVxTqFhUgmVEGFHiTxBAcpMDnwdGXRmg7WvY6yfB4GbWW",
  "key37": "4BfjQavHGXss9BKV6qmXbmNytY8nPwUuZ13qkjyMSSk3RmCuUipVhXAZeJdqPqGbKsf7zWVJBxWVodVVMpmfQ1K3",
  "key38": "34gQCR4t9wkw9xWMh8T3p5ziQmdvECrPYHF4dUGPCVBKeBPLqgyUotwh8oXZmz6MW4ChMyeo5N9gptuk6wZVCYNr",
  "key39": "3RfQUPPwHK5AhteZYX7oYQ17ZwpWQWcg8M7LJ9QvUgkuRonAX1vbqr9Z9QF9TiPahbXTF8tCbovGncRxEbR6VKWV",
  "key40": "2HFHXK7tiPWtTWDCJcKW8ffCnCqeyRNq8cZVaUtdRi3GCW6DJagFZZr64Ra7CJRMfLW85YVXrGpaAcC1oaDD2xrQ",
  "key41": "5CAi9wHcyRD4c2htfJ8GSmcPJLcfJpo5p13RTjs1qphbSENbW478wcsA6STrPkwFxYif1yjkSXLoXw3dgpkfCEkA"
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
