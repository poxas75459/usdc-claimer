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
    "3LUd7xLKSYA8SXrP3PsFo1PDuS97AscE4dU3u8FsRTZoxXjW8fBhG65MFBY9rzRPcNVWFomfh6pMBaoQmU7LiJYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j4nShSUaYZfBJGyhzFLHBBjPAaNoLDXFhFnGnWxMrsLyC8Xta3uvrPsmjnetb5cDnVUeHSjuyTRFKPAvsDWWK8R",
  "key1": "2a7zdJk12SNTrCbbi7fNGo9c8YzBYf3CsVCjPSqc4yupNNdqdh2o5pNB788yFxns19j9CLruUCgvPfWT8TNQZEs6",
  "key2": "5NSisUERtsvRxoQrp8d6tSe5cMUAtxGk88AuWifLyGy2KfKpnBVULqApS7GQhxYK1UXQvXbjdjmGuvYhThydmPR",
  "key3": "4FYgjALdBvp6SiHuuPUBDMUXpPxdRfx4VSjTS6mkFjhYzWQoqCPPicPLZQ9Ev4WtjtMnmuWtp73ry5UBJfNqfV5T",
  "key4": "51YE83raScbpewksDDNbb7y4RKAHh2KBhafKWAuPtECBEgFDmXJMG4Tx6yckVtoaW6w6s58P4TEzDwy2imfXZy6i",
  "key5": "2hdWL49rBRoNkKY8MuaE8izrFGCVESQZejdAYxmppLuzcUZ3t6DYo8Qsht28tV5R38yJo4itUbU8ajVKGi5r9qG1",
  "key6": "4dvAAeUYeFnLS7vekMdBeFdpDFTGLRYCUA8QG8Si8Th3hNrRnc2rpdsTog3LgFCEsHTnGdeiwyKb48vL5ypTYuGL",
  "key7": "3JBkWWLgkeGziw2QEPGEmbdxpfhgmYkYm2U7KVsRJFCL6vmpRb1dnkJyxo6oddVk18zD6v6r9ko5ratrqaN5VzFZ",
  "key8": "62qQVPEMw4BH3QAwWb1v2qSL1NwyZioDm3MjBz9ztn3oCzxLrvMrAHxgpg5yVkDvHPhTzX2jJJJvLTYUQ79E7wnM",
  "key9": "4Ng1qjYZZYui3hCbhxEHJtq1LmG6KAX5edWc2qD9ST3P1pNx4Qe6K7jHdWMqm29ruYRUqHmxUvmR8DHnwXu6aTLZ",
  "key10": "2wwxk4T5oafoRoACmy7J2aStv3aNtbFBfWLTbrwxJBq3WhaGGkrBP2yStknDEY4HA6QvRy5a4BN2MzZXyQAzRaJd",
  "key11": "CKeG8vM2tPfTLnr15sr69cXtahLe9mAuDes4VrVLdKoR7FP1r9orPLXJmeryjFPVgp2CiRnqZUFo1GrSWwhwoXD",
  "key12": "2XXNFNhNFjAQ5YibMRmHhEw3G6bvpH1iviU82EH3EwzPfSg6Fr1xQhH9iYq3CL3LtAqjsNTkJjLf64rstzhrV1aB",
  "key13": "5nphKvGRLi39YoTaxZEK14MyuS3aoxPyeDLGpsWVjFeyUXVhg7NgZuZdHL88KL3jxHDPH2bhK6baCrgtvugWfvES",
  "key14": "5gyFSVSZ552peJqEy148ARtgcqqc1PBSY5pFUkb24MPG5ejJxTzgH7GUnpvo7zJc2DPTe5BJozpAHDjnrFUb3MSi",
  "key15": "3wuiEh25DKRe6V3roRsowvd4t6ybzT1Sikh3UuqsuPzPbuWRNUYgYWqth5dpBLG9GFCr1x2YFCp5PZobqnkQiwMS",
  "key16": "558yeL3evSJoRZLi88oEKwPo6cqKwpLGEYGESneRV5s6BPp5hVs1DSYrLiBQSspRfkn7VNCNZsWXagBwwnpHEpA1",
  "key17": "5VnGXXBwQqJQ5nSWLm9CSPxoQStfrb5RLwQERRsMAjEHYhRzTuan1hkt6PxJtFmoTLzbbT6mASEa3um3cdg7Dzx8",
  "key18": "5pQpyUjLeoFnYMvRvqV5RPteiQevcR9m88GnpaSGKr5cENCTX4b9Nth7JjaXRxZmJFbziaWupKLwzfWRSV2JkQ5p",
  "key19": "5m5miyndaaAELgH4eoy5DHYYbYRTMwDbyWYHBm48ZuXJ3oZuAg9F74kGRpL7MnmB8VAowM3ncdM9cGKryW6NNSzZ",
  "key20": "5b6hwzRPcot79BsGySgxMabhYaR2Sga9iyDRYvUt4qhWbZnnbYQd1z4YthK9BBNhiGLC3eemBEh5FTmDfpE7tCC5",
  "key21": "1sHTQr1eQxAnbqjr1w8xbXQFVwvFeQAspXwyRNoCBmqVHM8sx1xhFpFazNVYVvZUMLUwi9twRbZkes1bSKuA3oU",
  "key22": "2R3VBkAH5PJmx45ZjiZqW1eAdUK96bspSHjV1iUaKNYxnoPihP8ApNRaMws2tEAzCMYJ6kfgKywvth5YabkPK7cs",
  "key23": "3UCmumm4ujXyhyraMnSgsVfh7AtPi55TuDL7qqRd766b3NXGNngMKE2f6rgZi328TFK6G6UG4ybRTGMg8cyBATuk",
  "key24": "4Np9WtNcHXmQETSXwPWewJf56tLeTLr1ZJ4dZBHYWo4pxpKbcwdNWN2bZk5yCQHsoKHkMfRzRkX4RS8RqoDP8wjf",
  "key25": "Cow6KGVEYUizrWNSsV283ELuzECqjhWBsXnii5RW8W7KZK8nT7C7Dua3vVEy3DULNCiHaAyvKWHtyJhEX7raXxx",
  "key26": "3d622qVWkTzhzp8xcj83k4c4oLZJtw67b73JTNFcKzzuHfpHnCm7joZZRWSsjvycRNBZw11KM3xDmdfrafN8eckq",
  "key27": "2snhwbwmxMHV14H9VNGU2bki3Txoj3i7LQcsk7GVU5P6c6Aqqpd2TcEPiTtoBv8fPDecqHfD8mKGoqY5NR2i4BmR",
  "key28": "Bkv6CvSu2Rp9nuKxcjs4wmvZXcC8kokfBKwiaCmq27cK1pkk8PjE8qzGRpZvPYq6cdvTSDen5TuQw8cSWrD6okE",
  "key29": "cAyLpVyWXMm5YybobYiioLkRBAajZXC8wmaPwERfNZjQqdrbMt2jjaYLqi2uhJWGZ1wiq3uL2sBkMcrQqcAu1DT",
  "key30": "2H9JacdjjoY2mFbTzfzBjKjtSPMPhyGafy9jdXNZ5ieGJxZ2UxkivjrmkQxb9KbAEAqttAb4VaWRoWdk82SyDr2P",
  "key31": "62LsrqvYPodagBKLoubH1PGmj1kMGvCi9tZjsXdCVV1hd2aJiLxheXkubz1CeqPwosksg7xwfRkYAYhFkcNPWehY"
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
