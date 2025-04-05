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
    "3bE8s2D875G9kykhQ3ceiFvRK7G9CeahjQm9Z9CPAiRYUuhm76q8gNvG46nDwvPcVztvgZ5E4RUmPMm15Uz6y3fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zk8XSExNdudSNjZ7ogSgMymxrudd3vPVemSReMbLPhsHDWbYDPjMRbtpxYXg2zWuTA2t3Pds5NnzVJW7RHxZpRQ",
  "key1": "2ZZQ5Mrmsz4oYKvPhajwdGfeVcpzqzxyP12uAPdQSSx54BkrsVLac1i6YGh6Ld86aGyf4AikLa7cPhTTurQ4GKGL",
  "key2": "4RZGJ5pLFam1hn146ZfdhovvKHEHMs72kBgZtyp28629SWDdf764PFM5a2imTn3fstVsVRXvTsJ1od4iJ2wRB93s",
  "key3": "5ptCxA9LHtsSxmZWkqSMRq2dm4S55BR2LYXJTwJntbVaiFetAdchC6Qn51TucTZegZAzxzTbMc5sf39HtVQZUd6r",
  "key4": "4eYYYWsVH5ABoWzyF91PWRzbEn1yqmzLHj187dQDny7p3WAJfVoHRsLW7N8o5dE3TiVfMs3mWafbSaZcfWU3hhVw",
  "key5": "45UvUp3JeXjyPTFi8i62WNvf1BjovM8g1RfdtKTMWMewPVEma386YVqYDQvSoNRtkEAP8xzYt2g3cbhsNnXamUX9",
  "key6": "5TjZrURJDqaKLsWvZsEeozCtS1Rz4gGnz8yS98rz2FSAvo3Qz4tjVP5Z83CDmGoiqphEodyH4mSVtJ1AZ2BubUgK",
  "key7": "2m3z3Fs3T61csWT5dTNeXEqBLjqdkxhYWzd3iTkQAwVT4mGoTtMtPE4Af8Aa68YQSKq7P1NUQWzBt3dNmXQrzeSq",
  "key8": "58mQPxaUocLAqfyBbsrUEWN1p7yuXfYVmHyY1i9tgtCa5JRmPNvhzjHjHZDa5WsG5yiULrr1v4dYSojxPqMfiPMp",
  "key9": "5icRSbxWBpVsuEg34dwBsRvpqQHUgpuM3XC75yh27jLogoPsE6sLXvnExZ7g63kEwe7xeFuw24YqjGi46xevkB4C",
  "key10": "5dzinRFkohmDcPbHMigq1y8XxduDKJud9ndiunpFqZZ6vARoQqxJCiWnZLw5S8rTUQc1LYckQoxC56sxgS7GTEXT",
  "key11": "3UbBWt5TsJkigN6SBEmkMaoZFmnYaJLvUddfE6SpefpoFwBmh5PUZKLve3jBGLjX6VgQKFTE9sBzWVA4ahWhDjPp",
  "key12": "4WGUoAMuSXaMLChHjxo5fpbh71hzHgzivJGEdLNDGT3c29HxiHbKCtJTexeSJrAXu8zJeFPQTNiWRmyxUe7ogDpX",
  "key13": "5CGLGQhS7GSriYUeJsC3CSeniehSsAqWjxTZrngE4hUMkpjJpdyo2ucqjJYHY5YEFbJUu7DrWTXrjzkzYgheTbEm",
  "key14": "dYB6oR57cg8D1CJC8Fz72PmwcjDQNmM1jD1QEmEr5sRnReBG7ZinUXYosT8z1d4tbGyoCisRNWnyXuvA3RXV7rY",
  "key15": "3avLsgKFL4E6KB5EwRrBe7Qw6ssHVWsDQW4R86s34fvaB2cJSSJcqNmPFshTARbiinmrbweGavq9S9EGbrziCfJD",
  "key16": "3RtY1viPHKdgA6zhtYDGrtNg1sRtgYU7etr1TuM5AeM6eUSzgevNUmqjs2iDxiTEFUQtjqPcadjcme1F8ma8ddcG",
  "key17": "3e6TKRUcYugFVZdn5pbnJEssenLMJ1KyyNJ2RKqnCSjzATrmmexDooH8Rtk7wPqizGzKiszg6iYKsqucjZ4usYXm",
  "key18": "4QEt53apRdQo3moto6nrZVUCumHVGmqB549AE4VPijc8p5sem6tgwJcoWCb4CFJyBFisEGA6D1bibVELYYYoYmhi",
  "key19": "3rYqsNEQrCUJguBaJgmzJUpV5c5RWW3SmRcyEPXuA2jxgUMJh6YaWNJN2SpoRF29pG8gV9GreK3aLfaFsWb44nXr",
  "key20": "4qvUeQ6ovhNJddSG1awZ1mfjDnBbUSvt6SWUfdmSEn1CVzSXmkXonUk84wyzrQ3XYQCTczPWVdchdakGfzHY5vfA",
  "key21": "tA9MKZ1o4SeznZZSqMPLyKcFZW4dq1mHnW2U9u5SQbyWcQAAZBjuCcgiB8K6Ne29MSBXtMTNDDRMkxnCyk5agAW",
  "key22": "4jmafY5TUfxqf4rgUMZ8G9kwqdki5skmE1sDtT7G3KeqxKb7xNcVLkVCFzNU6UxWt9zKVFMWgexwVvp7LfyvGYNA",
  "key23": "4dXQaNcApdpWfJMoTemEptsaQGqhYd3V5fRVJZ9dp3K5UeTXhSvXBNEA9DVRwDfHF9T15wovKj4XsTMqwh3bf6wF",
  "key24": "2hF9Et4WvGtkQSC6GF4g9Q36pFv8Mtew7nNwjv7VhqoXo8qyx8mhtZYegRBKnWuyBCCpXFvwjMriHgv8EW9HJdXF",
  "key25": "5xbLDrtDfjpCS1ykxJDAdq1cgFNTF9UdV4jTaXH6h4SqXyJ2VkiygY7gc2KhzcDL4VfrLnbxHPTBshyZWPDZnnh9",
  "key26": "64T3oiMJZDMhyxZwoueZVEZ1SZKVvsdBJZwT6AgWmg2uuJhEZCBC8eGkfbYGkgMbgbHadzfmDUuTLgUQPyvFqxAs",
  "key27": "nZ9nxMig7HSbGAcVPwHpsq6dHjSwE1s5xYjydpo5wP74cyaffeQ8o9Y3f2Nn71ZQRUjF3QWLZGQKSyL8bkaUBoW",
  "key28": "3fGn87eY4Z8VvXv3vGUod4WBa4m1XfCmJb9d9Ln4bSJmNvfjxsAau1yqEf2Dnm3AovRzYfGaWAuELvS9pdvnBcNv",
  "key29": "2d1XQLGtjmTXYTpKMwc6uzvU9CbeLJ9n8fakKZRrJ82VatUS2A7nAhUVXf4R6FeZCwD4aTv4LKMPFF82SDLwiBnQ",
  "key30": "5YS96tv9xFybdAYJh3tQDYfPYyXdsNdnof9d5brswaDQBZuTG8BxYTzkSXFT3LP5kaw3pqyFHhkByk4uoafiii5w",
  "key31": "4BRwAR3FoGaC8PEr6bxYMXAkH2nvtKLHtu5QW1zDrVBdrpcar6x7vhmJqa8unnACXwWkMKdB4Sk8vkBEBiyPpu45",
  "key32": "3somhZtAs4S68Ux8HS5nVnWKv6Sqebmm8FHoyTEEY7dK5eroyeYi6yTCXbVE6aWRcqA8vqUpbMrDvcZ8a7ocsCRz",
  "key33": "4j9rnLXGN6xjH9qwLVEV2y44idGKax3pX3zbi5i7eLYWgeLfNpJeB2LEJfy9PP7RQewZ67UoGZv37RqusTKPKZT",
  "key34": "42EExyUC5LfsouUCqKXpzEsCQasBpJE6Z3u55Nk26mW3W6g6YjmYv9tTQWTXP18bYq3DBni6PL2RCWUgyrnr49pb",
  "key35": "DY9HA1Twx36DV18RNsCeobco7mtQnNFAEyaAcCFrtrxM4wCwZ8CzJuLkndhTLxraDyZy2ZZrRURBxStTuFEaJDR",
  "key36": "3n7AzoNtyWmDEWZzNwkYu9V8kNP7h5YgYh6juYnGJUhNjhnTiyi1Dhtohtx7Ufvqkt9bZwtqr3dZdsYPNonqKmer",
  "key37": "3scLXWZSCMck11ghV6cXSZ2K73f8cRENQwEKc7pknWbTKAPS5WMibdHgpxmjUiC1eiTtHw1gPsizW2CMPTcw3syk",
  "key38": "5sqrQZz95W6P5KNmm7BjpLNn4o2C7xw1s86LZ3M6CE3Hh8RYacgg6r13decbz1m6QeDd8SAM2AQ7FcZf26ms4qj4",
  "key39": "33C9E8dVGJyHRDo99Hm466yUGxjpRiyxiWBokttmDfFKx4r4Fz71d8c3r34CbvuoTu8izxdQBCU9LAsQrpmFdYzJ",
  "key40": "3wQoUFaon33uctizguFhyv5UFHvzzErytATEL8tgJ56gMjGwXxwZDYGLtywDo1c8Q3txuuvViyATpEHKCBm5ErFJ",
  "key41": "54QBafT1GVHcdFM2M1jkuPMwDisKK9jSKE6xmJFGYoFTBzahp7CVygdqREYLjPL82JeZHGAc6Tp2cFodKaCxZDSZ",
  "key42": "2SoDbfrbh8zeuBJzTMmvmvirokPeCczRWNffW1QqBdLx3PZ2fzJtuBsguqPz4MJmfz1erwvSnwFkvDZzrtYVkqLo",
  "key43": "4FZEe9entccvnbs3aJbKmMa2U2hbeWKu4TTcmojgz684JL9eeY9q11trYZvY5VRvTSEABj3ef7DtaEU4ivAq9C7F",
  "key44": "2CMVpkANodPkHEMRdUefznnNRKf8p5zbvRtYYgixKjr9tS12Zu8zPVzQAjBuwBW4M4F7uot3Q4i3PgKrV4saaS3W",
  "key45": "3Ndo5oNyRmuLs5tq7BXBHcZ3DsXtEm2KU8F8y5swompw7nLbfHY3ajqzhjNx8wb8c5CLY6rvn6drvzD4AxPxmu5v"
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
