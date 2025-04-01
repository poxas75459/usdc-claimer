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
    "2NPchGBWG8JBBM9EFecSbCtwiBUmVtzuyLdT4VHWjwnJZLuxoMU9DbmSZCtm4h3iD4fWBe7w7yYc2o6FWk6n81X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLQKq6Vh1bAdXasCvRAw6csggnjY2UyJr9sjqvDupeuFsJSgNxLkdeC9VBsTrkysUngEmtJtahjpE6SEzGwWoVB",
  "key1": "5T6jCtmXN7hMGk3WmQSoD7qcMksrNjQUbUNv6Zfkb3JQzYpkr7pcNaQmakb3qTyFjhuX5SWqxvS2Pdn3W6ttzMXF",
  "key2": "3gANevtQN7YXrL6h7uAfFzG9JFbpH4WbUQpzLb1xGZjryDDt8U7UC1pWhqBj9xEnfuSiWGS4kpzJ7VD98HpNKYqe",
  "key3": "3qjHSb2SHF2upWALkcHTq3kpmcXvQKqZfayDV2korbjpLHw491FXdH5aUXTjJH5FDdEnLFHiqa4gcmLGL4iEkwR7",
  "key4": "3Ao6WY9HGrFSebGdiZ85KzGSoubVYXfr6rstsAhNF7svMzvh4HWQnUWBLou7vmN8fV3eioSSyWx6pYWWteqDyuLb",
  "key5": "3XG3fMPbk9by16yt6ywGj2dmDxnr8mHpxbKMbd94RnowyiKhxndahpCzeJ52cyNbSgyYt1vJQi5Agtoc38pVNvuJ",
  "key6": "oHZU2SoGgkP6RsVNe6VSvwAXUf3LBD1PBFBeKgqKXKFmA3nMuCc2haPtBNPtfzrPBscUCq3iA3dvvCTT8Dsejcx",
  "key7": "5ChGRoyQM1ujS6zk1Hm4W7nYqbv3f79jC93ksCoBryk14PmpBXBy4FcGm15pKwhX2NetSrN5DH72mE1S17sCTwci",
  "key8": "2gCFyif3BijDrsCzmj196iJBg87pozupCzduCyo1sGfPPoyKE69nQcrvU1uMdTttygyyC5bXPopJP6nusW6b41Vw",
  "key9": "4wKkPvwohnaXGyCMhHqTe8EXbrQo49DoufXNUu8j2afGJUPLCMmUFeHHfjnx1zS5wdWVwpReMoNFMrTU5PYy27Sm",
  "key10": "3c1V2DNsNQrmWPcn5iw4aJEiyTZtmriLBmGi3nzyPi5XYFpzJV3EndThY8tAAC741uDizUMH2rNtfrk1t67XPNvW",
  "key11": "2ht39cdwtv6kRvEdBcXv3erQXengNs97A97oFHgTba6kYp6RkUBAeY4gCrwb1E7XuWcL933CHBjUytHSRwfgSNBP",
  "key12": "3fMvj3Gvjtvba29aZeV9UG6eg1YVcNuUmaMk2PiLTt4qjxyxvbkxJgY66BQk98iNfzS4eC7woasg9nVShc4o1aN8",
  "key13": "5dk1u1tjqAzFb1EedfDadchQyJfJF6H8mR8d5QoTZgTgEFqRicrUSKmtTXAZwshaKXJM6zQHj4ThkzXX6uayuipd",
  "key14": "5toJv3cDhfJk34ystF2HB37u4UCreuT5vXtW5LoCetzhWzTUKv2Cn6hkLYTjWe7TCycfu8BUZY5wca5i71a5q1cU",
  "key15": "4aWfyk3KNXgNtB6GWKcCJeyBSHnxYi3HKNhMtjHLQintosRcVpcU5oqzXTU5AmnHab3pqcsvC2H38NaB4wpvfRFm",
  "key16": "4RLXmqEaogWez1gCrJxprbbYwynhpkKZ3C9jMktG2QBTqN4rDZCrHrLBYBHvxcFxxuAmfXV7sq8RLXFE62SkH7Uc",
  "key17": "2xC1r5kmV7Lux6mAQQMDWRwMzt2URxqQx3kijeZ7qshgNBnL4YxHcSotkwUZWDzRyDeRrnFHLHWvQYHmuHN2JQeP",
  "key18": "4odjkRvmobLunt7hz8HXhwKxD31kLeMBNw5jgUs169qEi9uxXS7EMa8Hc2ghYbW995fbRT8PNMHkmVjdNsx4k5dK",
  "key19": "5LMNbYnjCZDWGXRhHJ3jqSgp5wAsEf9k4z8jeFfRvRpobZZba5bG3CTmUV9VdxmgNc4tdpsk8u2hjaf4kXdYX9bj",
  "key20": "2DSouv3f3saSNJArm58sQEtyCaybYZgXucTDJPkegNuNVbiNV5NdZmPVrVyRUKg4C2eMXk8odTaMXqXoy9hzRBWr",
  "key21": "5CowSpYHY84KEvc4b5tSQgyNEsws2JDxsMJMSVhx1g6LrkUUGfYoeW3G5fjpuMKBuKoNqjm5mikKtve3yHwYQycv",
  "key22": "4AAyok8xtt5z2ngKWYdF17Yq1bTcrxDMbmFiC646iohgggdLx9HV9vJVokLjHDZggcvwCzWap3UAA2c1GE2jrnVi",
  "key23": "56jfAMJHika7vYnaEkFYydWdSjKy8jJKUXtbGiLsB5ga8MxE7FDskGt9miLCHqzLCkhHJhCPgj4LJ9SB1oJqZT3P",
  "key24": "2N22jKE5HkM3EwywVM5tvzBjpfscVz8FbQy3Vy9xUAr5NszpGwsSDJsHLaqFsBefYB5ErDGPmTD3ciBfPyURcJMW",
  "key25": "4rVKhbiA8MJxpKj2FZsoVPp1BNJwn9Y4q8J9VLVaBprsQnwbXg1Ytqog5U429kwKeWofnLWLtwiexA9dYmCh1prV",
  "key26": "NuVyAoe79gxDbaKh8eWCBmE1K8RbKKE8AMa66FRbPyDXAtw1xrGNXUh6UWsARiq69gUiDtrbpMu5hRdKwCEPyJv",
  "key27": "5DfmvHpQmM4JwQfhFYhqwu1BfYUwnLe3MtPvP4LiRT3fWBAV3sBCpmnHqNoDAqQroHeTbmWt2g2bUQnYrYHnwLNZ",
  "key28": "4QSz3n6E9nrW7reyxi32u3KBcNCT3H5guF4d5UvUGhSm5gX76igikKD9XePkuMBXnhh43dnbmyYAT2QCbYpCSMz2",
  "key29": "4CkVgqQ2SMUwg7FNkvP75wVqzg2Y9ZDpwYMkCxuYPsv7MUDAT9iKqZKU8Cny2qRr1GBnCLZrZyVK4mxaicqVjNAS",
  "key30": "3NAvFzh6b5Z1syZ9eEXEA58SwnDrcuBvrZSLz56mcB5WFxQJ6rpYftPa5vsMaCYQN4bYcEZJNzyofnuH4dfmCbJU",
  "key31": "3BNGn8b76TKUKqKhj8Uq8JjHzDehwYkjRBHnWjgZh9pwnjJF54itGQ3MkVGEkq87UpwFuf2TgdFNeJjgJwnTS1wK",
  "key32": "52rekTQAqQKkL9QxhLrkmpSuDoZEmkWyQY1ZifLW2i7YT9fYAkzztzYVVodSVnFs7nqXVspMupRZGUoEsPYiRCMM",
  "key33": "5pe7eauP1etzUhfwE8N7se4bwvdzU8KuyAGgQEGJPh58NSAi9vdzHmhktuHMdFxkHN6XmJoE391dBZf7eiLHAcZi",
  "key34": "r8FeK8YdEpc5LrL75CKo8HHGXcdnBKNYovSSQvgvJc7qWMHc6iP2UfzwegaoXc2KB71sFQesXXF799jaJViD2gB",
  "key35": "3y5RwxtaqgLXkrp2a6XpUG6fXsY61ezbK3kvtzT7x61PrsUu67e6N8bHeV8FabC9mhEXQLJfGZhBMnKJaw3RYVBe",
  "key36": "z5187rxVXr1t2KXyCuH57JA6GvgDtGkhz3gRZXaMqV1ULVYfthPuHkzuDmY92rX7d5M1otfssrbDtVFPWdujkU4",
  "key37": "5NhTi8figvsCUcQAyJGAMR9j16niruc9YB7JkZJzbMYC3VB2mGShsYEkCwGM25fvEsCMsvLz5fzaRz4zjsYau4SK",
  "key38": "2ZvjZ1uPEvLZFSMu2FHqWHb2Qr1XwBMq8kwPca122gXk4XgCYv8ZL5ZPCSoiX13hCDChvXLgxvQgueNPUKmAmWSU"
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
