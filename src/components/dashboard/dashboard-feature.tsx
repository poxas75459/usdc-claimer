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
    "f1G31x8bj59smE2ataaYfP2wSFTGu53RSrNiXm7oVJ14Ke6NYT8v1qsdfpRXmt8w5pTuP9bM7idnWS3yhKPbEWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpSyHDMQYh66BWKoKL99stJwzwFQLL896RBE6c6QxLzZ7kQsnfyPvfuaKvEhLZ5ECo2FDewC2BVYRTgPvJu3TYq",
  "key1": "2kitLhwKV5c71jgYiy6tjpzW3vzp74vjCmwivL92NLn54VS6J8aJ6PNrewEDtho43YxHA8tyGUAoidbEaXJfzrG6",
  "key2": "5L8kRNogbfXRBtkFcizxk5haSbDSXH3RAu18KBxvxctUeejiyXuDNR4812w8Bs1AdiDEJbSaorV2nd9Atw9j2aGh",
  "key3": "4EvacQ3DH8HmBGFxx7PhBk5MtA9gkWWJG3uMimpT7S8qp7tBhicDts18PTm6npEEQhibgjJFNMa4EcMvwZPMp8q3",
  "key4": "2AbTkm31GbmrEUUWiJ5WxkMwMmkUBL684kSc43DRZsKxG7QsaTc5ckFpKCeH7NmJySona5Kca9ZEq2ACVSdRCA8f",
  "key5": "2MaBvLbphzAikRHqg8UhHW5damNUvZ4xTP5vpJTZ5R83NfDyE9Zn49enJMXT6e34SZ8eFTqHN6Mz2vjb9veMA7w7",
  "key6": "h5KiU4ehHyQWxM1rs4EhdT8NJnoJVeuq1kfFNNMM64qEoDf6Z4jCFvryTdXhRZKz7E1yi1hZpgjnn927rn6et2n",
  "key7": "4pqNk1vpnWZti8bVUSLq4KhAECzuBhMJviNMpy2kmMGjYq4RRVdiLTxeZKDnMEB1W1xdemHCkPzVy4ASMtzG6F5v",
  "key8": "3yt5pGcnibdLSHDxcAZLQo2eU4VYBpjnnPwJHqBUvoHtWwypun4oiY3TrbAxZhs9yoz876une1hoP2hq7G6xwCq1",
  "key9": "2Fu6G8NMEi8k2AzQLE496eDrd9JU1k4fmXtPuBJKGXc98sAqraop9mE1dAeLKv5abgunFZXV8x2gLZmHdxJej2cP",
  "key10": "uLzLM7vaWb9FfN5jijfG9TGeinmsuwWvBCyAUaa1Hn9W4HJ6idY8MeEYMLKyXW4TkjHKwqwCmiGPdHX9sKdiXcc",
  "key11": "9hLTArmCAQiqGJaqZBgDwuFeYmmEn5C76vUwLBsbhk7kyPKuPYdty3Fc7VQkAvUBCcbNAS8F2nTNvtwtNSgSEPN",
  "key12": "2aUgF7TxJ1fGrFR7e4KFx2xn9u2DoW6ArgwsAsKNN3JfQ6xadSfHWY4ukQtXZMCCCcUJxpcPzYXKqwWTkECvWc2W",
  "key13": "4aEUSZM3Qa9YqnXQHFZeH1tfRVokjGcqZDbf9dZFf3k4Q5FNHz6bt4cKB22MjuCtgekFLxCs57euiGGxG25vdgFW",
  "key14": "NxiXhNaYpezFAZK8MgZXsyawZkQCzYe7vCeQ4gbNJjKCNWw2Fw1W2aS4Srg71d88i3zK4RHY4TBskDo1vPQoy98",
  "key15": "tnUqtXpq22WsG1cM2MDC6tyVLZsrLkU4pK9z8kGXqv9LkW6FBjceo8kbGM9NTzTiK6YepRCCiLuxz8Xkw7Fg8FS",
  "key16": "3z4Sy2An4MmWtXgLrNm6dib25vHt2oP5PCQALBsGRQ96YQKLANHfSo5JZC14NPg55HQQhsJK3a3ypyqQXGe9eh9Q",
  "key17": "628jwmG8aHZeb1XHrZgZcXNvLnzWXhpWz7VRYpZh3hTeczVKg575DjuRfZZNrii4cjJiH2yjuJVeiYpMMLfErHAh",
  "key18": "4ST6cJBZUrseTpX6PDQBySu3wbAx81BopmWBm59vaiE8wYLk1cfv3JZJAzkNCk47QPoPcw6ttxWnbNgTDuV2FVAZ",
  "key19": "4ZPqq95HaoAxGUWKfwQgVtCMytJAFv54Rin1iyUJd8eVTekNMEcPGZEqGLPhzqQVGRR1b77Ek7zoCmuvAZyduBcC",
  "key20": "3vWcRcgiqsyBoxVjBBdf7ACvnCR6s3G4sHFRinVAsdy4woSZQfgX7UmVezvaL9RLZZoXuqMeLNQKTSLPUK2v5S8T",
  "key21": "CwdpE7oEvZgqXn44QtPTs9RnDEUNvf4YNjBz6JqsuVQdjF4cFyAGeG3yFVhWq3cLGP7cxs9VgYD4FofDnwcPCN1",
  "key22": "5qjftzcZ6fWeZZSsAkyA2wDdcLbgvGBy6ujuuK9aDQ9Pq3Sf83PPPD2MuSdHb3mJRSyyYpjBJwd2LhcA9YPvh1yB",
  "key23": "G7Gg9QapfB4hQrDhbNxBgm6WsjJjLzZiWAaGUpcXpU4NuJATsiwd2csmrPbdqFF2UjMDJYNKGuGHWTijYVe7kK5",
  "key24": "2Q3hVBJnvbZxabf3hyhjRz4GiuXthQ8AgsAzxEFYvQof1f5jwpzLJY9ovNpLwPWF7Ddb83UVuhjh97bZWohsNM5F",
  "key25": "4gaih8RRnQybmDVAsZT1bnHJsEh1iBDVEWLsgr2x6hJChPHyo98Dwcu9bNnuJJZZdygbRKdikkVWBabvCDAAa68F",
  "key26": "4B389ydvDdL5KRmnzT8w5HRdKeeGEHgg78mrrTbGTBvQRXL2uXwATk1SoaMWPBrZDtyzP1EfeuUCGGumZqjwQowt",
  "key27": "zLjxwRQWyRJmPWufUXrULwhuFUh3R9ogZwfKcn3rNKkyvamNvuDhMYgkphHnqPzJKNbU54u5EdgpwrmPxGQuBNb",
  "key28": "3yiCCnzyXqrxWur5H8UidxZL7MRP4krbn3JkbFTnTPjZYu6KeWUdWmkngzmUuydVimkLZCsJYyZX2e6krnMad1dJ",
  "key29": "HcoyLtaPsiBnSEtRYA5HVBWQG78akd2LSiuWc6yPYoe4FWCVhvnKAy5LbxX5rFL9NcNnFr2t1yfmgb4eQK2nsPy",
  "key30": "4ikt7brc8x23D7qdGH32tzsKAzitPHaeMzQAbEdWwqTpJ3uZenou8y1PTmEp3GXTh32WFggsQPkzWCxQzDKhpd9Q",
  "key31": "92BSomm1NjopHnzhU3EEN1ZCuQGM2js6BMBHpKh4HmhqDQytwk8bfhmUeJUsKUQKC9Hd8BrwkeTfsGSc2eJNvjJ",
  "key32": "M3bw1FfaPjeSiaN55o6gsXU5yZcaiE2VAb1bUUqVYp8GnMTjMhhJT5W1qs519sbep1KiyvQXHNc8DXTZne84Lku",
  "key33": "fm6J1svAAsRyT6mW8hJFspZWBWZeSkqeuJC3kzFCjGLvmcdkYdrrRz1Ln226mUXUtT6zuwoPzqVsmQtBVqkrQFA",
  "key34": "z1ZNTMT1abUsgd7jucyHvFPv8kTYBVPBmMZrRNoxhrSfV38dYha3PPazDNCg9ASA6uHYzUv3rEH6aLr3mUvWMKk",
  "key35": "2R4iF7HC7eW5R1mpLjLxzfkGqJPd3kJZ2Wwixm7cAzdRHQPVocMmfXQkuTv65Zuxkkj1uJgtfkqpr3mEKHuj6PLx",
  "key36": "2xYpocaw2w3Kw3VrZTLLmL8ZyKPwSBNmCSBsKsW3sEFVwrYKkVt3q65153Dbt4c4M6WgfbawBkEZ8vTwyUp6KbjR",
  "key37": "3zSyUTUnZNPqaSnvNianUtNamzpnHy9qe4BmX1Hs1tdDdTgAWNxB2AEX3SQUPRsEwvVy6cimqDqxEZ9R6tNBraCj",
  "key38": "4FTYReJEDsH5eTkqMjPLU3DFXXBHf1nisNfv84wHf4titFjfMpRrXE7hd5xgWa7qMxMC8yNivC34FaRTA4G5grVd",
  "key39": "YcJPKzB9x4Lah9cHCvFNXhdjzoPu1b1A5HN9pfbdamQZNkmHofPBARbDDJnwFgazDnJxJXnEgyAFZFUXRvNFci1",
  "key40": "4sB8GWm8nPg57WhiRPoq8M7EYUabRx3eXBbkWacAiFnCH69E2yCFHMi4x4jDNPLCvNU1Q3rWQr8oZSgmf8sMan4g"
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
