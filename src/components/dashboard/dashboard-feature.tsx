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
    "5kW4mmv3ae5QS393f2kDFpWqbKynBfJD5eNuuQ7gwjcHtA1rNuLvsgvse3YkVYJQSi9FGqM28L4gKkrxmrHWWiQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTwHVHaB6vEs87tmJR3QWPQBhRM3am17p8WtTYkatSC7XP8UJtebLvCL7QxSJHNYa7HKvGoznG6DorTjuwtqhdv",
  "key1": "2qxJNAfhsNCQfZ4pCRFPhz6tTBxMnuXmc5dio8r5D2jh2iD4S67scQeYdCv6QCQHJ8YiZMTmuWG7vxWjpK6saVt8",
  "key2": "vD5XdDafhpXpUZZvaAkF551uPJ1AbEA22RaZCzuYiuYaHEnZCMRNcbDce56BahPwXAz9PJfwzWXVXMbb1N3YVAx",
  "key3": "5xNy6yLnoFxSWuZU7Wx4BrEvqCknEjKBxNWxusmPyLhV226626SPhHJEYGvK46bAtTeWoTmVPuRaQvNQ5gayfL4a",
  "key4": "4oajydRtSkUG9R1htnbKrTGWmHcxghqLfXzt3JtkyGvTR1K5R8mm1wvtYq57nLtsXs51gcw9RCDMdRQ1n1PvTErf",
  "key5": "5qkJ2ntqQEC2tJJnUwbMavBBBdGbKcrm6vpUM5v7wpCDn182fQ7ToucPdgB2doDEpVn36tBCaEvgk9ty7Trnz1as",
  "key6": "2azFcrga1PzVDWGnLEx1c91ZxeUsJNCx5x5ZEyFqGFJcGdycyd6cYd2MzUugr4fkDAMYSLSorq8EaJvyyi8We4Vh",
  "key7": "5uK6wG1kgtwbqdBYqKxNVjQ85KW9SE4JGdBMBvJ7j2KJ86GfiGBzThs2NWCPLnBEMJHHsAZwf6hty4YCxADXUrd1",
  "key8": "5yXHS1jPPMiiZDyLmB7CRFnQZ5jdmxkCfjcQF6eSugFU8pqMTK9jXyNCJ3dGuxjfGaRHbmmdKJYWAqug5BimcYsw",
  "key9": "5JHGeVgFJgbweGJiUxUE6TDcdHSzSPKqgpSTfeLsjguxSZWbZ5fRipZRGiiKp3vjusXEh3VqthL8gNnBjD4oJQ42",
  "key10": "2K5pBZWntv1mVc5EUv5CvAsLNgjNtvvJUzeVhEis7LFxVowPLBnD7Mx7PT1oRPgu8jCCC3EQpCvFYoyWrLe8otZp",
  "key11": "2Xnwve4PeDqTeuAYpUXvMRGYgSrDs5SeAVSTDxARw3gy8aDinz2dgUhxtsxSSKe1F3njxRK8uf3CPPmcLANxmCBc",
  "key12": "3KvXbsubCyp14cCqbzV39caUu4QYQRPaJG3DN8nLR6SZBJJhqS2eS34WiEAABL9AcruPVYa5KJW4eudCTqX36JUC",
  "key13": "TEFHnrw3EXVSP5EoaADAsabboF6tCUjj7LrDjWLyB8jxYKqJVBCCdfsFxoDSAynVnFiwFngQRJzAfV8eEkcb9rx",
  "key14": "5avBihNsiCFUXyeMAfcwV1J72Q4ewkj5SJdm3fXoK2E7qJBSAMaEimckTByi4QLLxBWNC14zsy6f4hVwoeS3Jfoc",
  "key15": "hGm3yWLU3Dwo4aG3GsLmuXUZL2C3E5mhGQvFciLbxUuAiTeNBg25dYprmJ886Krogc94Etaj5hHJrkYtySvzxEc",
  "key16": "5SizTsqeWefATc3cijPSJnut6TyUAVE7FkskZhNF5VcEdYBFJS8JAxKsgUW3eeyakCF4aHMBxoWeb1Wyjpidy7b4",
  "key17": "5D4tUAhZmt7xVGcf1rH5vev6M4JkGxCRBsYYToQmPbqsWwB2ALoq4TQxj1ufKZtkEDPaUND5tnetRN4CoZqFr5NM",
  "key18": "s7LzV8gXKkCYtwUzW1HkfvsQY3wzuAAHWQLP2ZiGptwu9P4cQHrQ7cRn89RhMtM95cZPLZAYDpE4uUBdjVMmuhj",
  "key19": "4hTUjKZwaHDD8KhnRpHKVYtrsgNz6cZNWWBwGjeYueC9G4jCgAGZAN9u86N39xkVxexTXehF1eERzxg4GbfdyDAJ",
  "key20": "5s9Z5GoCDZ6Z1Wgt3t8ffMhoGg71fd6bmDXHuynu4Y8jWKiRNkPWARa2cwLRFFp1ANjhByFymd2XabDM4quRYyYq",
  "key21": "366nPskFcrXibHbQitrpCgdVGB5X1mfe6X9RXaE68QHpcfV5kQLjjxNAiUgCbPzapCdHBazDar2U565o2WAdm4UD",
  "key22": "2jWg1dM6erYaPkgom8EWAeji5CtMmBRuo48SHjuakwJ7pnfhsDCpKUsY9LJq3RhbMPTAomvGht23Df1YhKqVqFn",
  "key23": "49kw4nhDaSLSeiWx9PYcxvAU6NbGXCKNTeAcBURfhQXoSUmwmkM9XKreneVZtqcjYBDhhP5ExSuN4GtK6ASv4L1b",
  "key24": "5qVkVxCJCELwqDjfqQCkE6FPCRwavP5eaitbi9yj4FGV2qdZru1Vzfmv6aWKJRafd2nJJnbaMkD8KNHPScygjwXt",
  "key25": "3y4UTUeeKvFNqDSJiaicJ3kKhsE9gEtPRvuAFwQBbPQyxi2SurFy6ksrKRaB4jPUsNV1ghMvxbqNE2PV92yrjrz7",
  "key26": "2bAofupNQN9HLBnGoGkkJFdNKgCsanAWea28HAZvbxHZRX3uVpRTwJtW57Jeo2SL2U6QH64MmBD9psiwK4pVJ5Kt",
  "key27": "3GYxWb1D6AkV2nW9nppjhHfagvvYta9CnB3ShBAgW6jasyqHYY6HH1miu4Z1aHmPFv7BgqvMkLQLBwYZsjk6BCqc",
  "key28": "WWBsmk6ceaB2PEgs5G2hftS9Vfp3QDEV4SANYmDCAk4CsUsQBi5kzRQFCrShjFwD1UXYsq7kboGkHYmtYNQ3gFz",
  "key29": "4FVgp86r6DWHXVnw72ieyhqh8sNJcf6nrhH4G79BhAfG9SapsovEVs4WYxHDvznZmr9ML1GX6YS6e8Zu7hGxBjJJ",
  "key30": "4B4ztgpJciUz5ZmfauAcbr4ADUSKoSU7nwFuDWz83YQ2Uo5QqgSXkWfRGBnbnRdpugnQNL7JMBASAzvpRkXJ5XpL",
  "key31": "X8DmTWoVvao9g1VKMniZeX9xFtjuxAX1bUcJGQ17JRd4vcoeuHgvn8pNWAySMWLGtVDTZYLzCAPEAuc4uAYA5rr",
  "key32": "4yek5xC1gqo5NN98CVFrC7f7qbTzbdYBFijjG5j5R1jnJfpP48W3Z43rRkCZiDB9JrNcqqV99ARrpZxFPpSKrLVS",
  "key33": "KNa4zrFgnNxHKd4XLg3RAMg6CvoBWL63wGwnS5pq8n9au92ZRyeRw2vcx4a8Pm4SRrXNaMqHauvqXLyRepzN9T5",
  "key34": "DdCxsRZSyhRNUnGgfk1iuHGjg62RGexW5LLpzUqYZYSN1n8wJLG3Znr32eh95L9W9KnNNuZcXUaRgdtnyTLkCLV",
  "key35": "2qpfVP6YEHcHiHAxpJgVkCv6sLxKr8b4qT2ranV6Dn8fqPBoyNaeoD4dxNa6UjjJBdjuKw2L1dRJLdimrA3GpN7T"
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
