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
    "5mXiDdASFuAsnSvVK3VnFDUAexy19drRZBVqzLzHkvxnjqYG14gyB1MtbT1q1zrmFYWUXSuU8P9pQAU8bbdQyh1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rmq72UGqErE1YqcRPey8CpAdCDpUztfy58Fw2jo2qJ2CN7UC4y8ShjXoLX8366utQHdASBCao8vuteFzLdZqc5D",
  "key1": "5tqGhCmjcPjmUXpzvsVJELmZob1mWjHC3ongqNE2bqNQ2vvdhmfqKasxTkNbp6opAo7XihTpxNnQUS44GWvsR3uC",
  "key2": "39bzL52qSoQKcsCtJ4uKiPgYmuHDWTojyyEhbKzwJoQoTxVH6vgd67dLq6v1Q3scC5BNs6q8hzThebBVeSeKq8h",
  "key3": "3XBrWt87ERjvsbJa2hcyDWAizszwjxeHboakwZayimNqErkGA4JfAxWU65hUbZmi9YHyiku5zFqgiYm3znwuEDcU",
  "key4": "WjonCaUCKzQtnpyZ56AECjxmUEaPvRGC2NMd97HqHGwAb9g6zqyW5ao3gjnYUNH53vCT69GXNsYxKqukUYX56Wc",
  "key5": "2wpxDcqfVLXY6y2C8sojG9cXjFgqD8HnZVyPnkX6yQFgnKrLp18fQupRci5dS4VboFBDHDg51YgRhV9xoS6KBjbG",
  "key6": "518Xy9dqMhXZhyPgTUunetQBtJgvpnnmXPux8XoS4X6m8nHkJ4DYiWMGDwqzWdFkEXU2bEV3FYLyDUApGxiGMbYB",
  "key7": "3DAgshrsr2cQAEbxdQ6Cz7ZBBmnzi7SoBLf7jKUohLUKiRWfJmrFSerBXnDDinCykjQWuzAscLkXQqLm151vTdwc",
  "key8": "3byDm4BU3Qvy9xvLfWwX33NfDLzLeskoemYcWN2vntDqKhjsQ1uLaooP3rLc1WY4mynFxZv8uG54A4JdexomAUqA",
  "key9": "26nt5UKqBJukzqbN7DYZKEPkKpiTS5cuH5piPuBTug8wSEoZdxCDaY1a2F3bAvgfPcqbmMxHQ6gkS4AXvvuk8sG2",
  "key10": "2fUK8nzJtXFxMyQvYL5XUqDyGhqEtWMHfAnYzEHGj9fpz5eHukDD9rUNEp4c3Q5EPSNBH3f2B6q6mLHJNH3Au7Ht",
  "key11": "3qCFsaxc9T2kRtDJWk4QPSSSCs3cWY5Q7kLfdfJLxNBbKs5ENyWvTKaaJ86jPDsZJoPZaJm6ZXW9uWukMmBnARbF",
  "key12": "4BEwYKPoWjiCSc71NpD9BPcrJ8xNzpgAhL3VcyzFusvJSkzzkL3JVDdvcMS1KZLg4UUzbsUgmUzZVJnUEjvtw1FK",
  "key13": "3paNSGEfNj8xGakQjFHskSQZwTezGyoveAopxGHjks6RQtuC5MjtWb9o4TzmpjHeL5dBLqY8hNY9FATobGfFYg1S",
  "key14": "3D6CyFdCAPdCyN5EwZvnCsMPcG2LSxmPMsZ4kXJAJH4c3nhsxaXxjBwm8PikA1uA9KcBHExpPiAmtGTq4sBScga4",
  "key15": "22J6d14EUqYVVaqgK9cMa5z2Rc3k6znRT7JTBb6JpH7gDjX716WfegYeLvXoKhDp9iuLPTG7Wa4WjgCCKT2J1RoV",
  "key16": "48uSxSw7rQHnsZQMN4CHDrUeZSf5aXhRPrjNXdJ6C4RgrSZEs4ESXPVSfws83eRhXUSdGNEuxtyyaRsa17P9QDvh",
  "key17": "4KRBu4z3j59aZQ8obKukEoCevDv3ezmM1Msw47bRz1XKtzU68WHAUwHZxemijwsTwStpSG3BuUpYLMBYT1WDRMUE",
  "key18": "waACWfRasbTtzyTenExNwbGgYq9J2gU8idwCoS9jJoxq5DiWwkXdJRGaivHbj9FmQ5AKaoxsWkYaVxANLDoy2QZ",
  "key19": "61agnXTJytVdWcmeRwC5aEvorpmAMuGzDvQyYKpyNhjvJ5WBzCGgw8hac9fFQyrvDek69RF2VHP4ZfdrWzGkjCrF",
  "key20": "657dtKczYfPfztnQ6ppzf2jvPKp1nDF8yrVNdx8T9GHBiHrqRFSrdc9tF8TT25tupZZMChvCUEN9PFpAU3jaztwu",
  "key21": "nFuFBJwJtWxCoerzS4MHMiHfYJDuw4xXVCztUxf5dxU4EHzFGu32FMNLb2Jzr5Y7cLdmKjt4vVqsBSQYV7g8XF4",
  "key22": "2ojsHGw1BPiA1qHZcru1WZm2Atx7aKV5Q8jgKAFRV1KqG4YKEcTAtuZQ8X2jwcuwfPz5iohotrAougnjeJ8PkMzv",
  "key23": "5VtK4bMnAHB853ecFwa35CbfENCDpT1dNt8x1dSTxCkjEppsUfZW4B8ZrDkGsttRcPmBkr2AqsnfEUwpWMGNreXw",
  "key24": "5tQZnHJAwpuMeAbotfFJ8xRL8E8JygaArY3s1aZpnSpUpfedM5k2eJsi5sX6nYpuxqxvNKwviMcYwKzXzLbG82oX",
  "key25": "4sKBJh8yhD5jf2f6YJkh1FAeYiCaYkArtu2BzXxUtLyrAVTCcVQ6sfcvroJoPFLip1ZYPJ1ee6SR5QfoGqd2LVY2",
  "key26": "3Q1TRiCicPb6DQPUYHxdh2E6DEMpWMJD1HCsSkNoXic81ukyFX1ZhKSjQxrV5odyC5VAw4z9fzx1fz5XZApjsvkU",
  "key27": "4YEpZKQ36Ysbt29vAs568cyhZkUkFd8C8PweHicyWnUwaf4P6qHux6LtDHX9zAb1UUBCUcuvXWCwE6YhBzLpdyBi",
  "key28": "3U4BD9tgfc1vGP4K69a6mjbj6tH15wzZkG7Cpa4Lz6bz1XFaAKKmZorJvpLmy36SLvTUx4geTLg7TDgsimEqUHns",
  "key29": "8UPncfro2KMGjzLa1H5iaUdk8SUnN2e9YrLot8sS5sm1eV4hyEcyUtM6Ncc11W532UUBktMNYpA99a2i2em4D5v",
  "key30": "GG1cYikQY9TeUxX7NJRbJxSpKqiC8sZWTiXfSYxB8pYh7AV2RQqnMtVxjUafYPBkqs5gv1tsRefuzTybKgYfZTJ",
  "key31": "47cyDa5Q9huWZ4ocAA1VccA14TZSDRAw6JuoDngt7ubjiib1EXafepw6jAdLzP3Hvye6sNToX8ReZFMxYSSaMJxu",
  "key32": "5NDWYKZy1g64fvjEegAWdBPhPgEBzkyFYNRybdpV3Hb1GnLbEHZ9zjDarqo8T32AWaK4e4Rq3dFWZY4enL5fYvW7",
  "key33": "2Wd2FRhdf8HjYrcPxzA5CqVLdukXFaw2uGK1zBsYMmFMf3s6CVHq84k5RxC6anAv62uNsJbMNhomX2ut5GPV7Nb1",
  "key34": "4PC2ipRKsxYFq8WxenNregqunSfMqpyX6WykuH49VcYm2sCxAn6j5trriuWZhcUUYgH4vNxicwfzpYRHcdVYfvNQ",
  "key35": "2njJV9dDtxcHxbcErVCgweUzqRKQbgR4FXuWcp9RaPBjrE7JD2MakxWVbitm95PgUWUs7rySFyamd5W9efDNgPVM",
  "key36": "3QWutSTzSGNwaVJK4fauGYWCNE4xwodgD6TsXSizV12aELRfxeyN5VTXgQf1fztzVRudWiyDS4R2w4JrFfnjufQ1",
  "key37": "43Aia61Nuc8eHmMwJSQEZnrqSNuxiURVUWaMQhC1ZYr5G5YeTB5rR2GKoVS4RA1RpTRSB2hXhYYVQoTSvkC7igtf",
  "key38": "4cP3uSN49GS4X6ncXfCd5e4BXWF9pGcs9etbpCQCWwwqerTbhq3kugtMhGQaGMkRarrX4qQ83JQQaefAJynkb8Gi",
  "key39": "5kCsS8DDEn46i2BstwHi6rV3LyMmkbJdU8S6jDE9pUD1XwXjhgfxBcaVKtgn1eQsPQk9TaLVMpTyEzhHSEEa78pU",
  "key40": "2YdpV65JFsc7Vn1BzFK1GybCBsysASHPqtYy4hgSH8GXT5CX9gvkeMUSbsqpXnbdEb5zn3MVyMdU9PeCkQc9xcWo"
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
