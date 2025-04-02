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
    "Nz7KeVzGzr6VS7xNnHdpv3TVN2X5MJTxkAoausqvCsTF6dn7hQQ7QcU4JhLhT3x2GrfKNUfQT3ksmjcBi7TjaGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gc1vHgrCuS4cwhKgka9PQQ2VFtKnTyGv5Xdz7ZZR2x4WKZ74Cr78YZs4cA2MUpji1HwPupMpoxBcSn6UebhTRvt",
  "key1": "HK2jPDytU1yJKXfFnzXfqq16kecgxR4YNtRH6YroV2hWE3aCzYKvuwA7arcNWurwZiafAK86y3ordZy6oqHdXRM",
  "key2": "YWu6XbGbNqnkBsEjT3wg668RbWfiPEnizE8p7cPkvEHFMVKmGA7kosGz14TK4CSCjbAYYRyXEDnX1kk3RwH2iMe",
  "key3": "2r4zQ6DEAEoh8WX5G98dyBsA9pzuShjJW74y1zFfEViR5175D5pixKkqwvLot2Hyuqg98m2NTFyWqCRSNQGMUtbf",
  "key4": "56jPbuuDnovX8wX978wvcfGL5vSBv8SRakZUPGSVXpSH27QmYBvzTyXVBbhqqhchF2Cn8MTQRGuHXPde78uVDjJS",
  "key5": "2cjT5wQpvSqhbxRpWBnthDHRiMxXaUBNURu7bRNjECeq2MUayHj8SnaMMmwnmfrKDPBGQyboTqG8qt5UwowYSPkM",
  "key6": "52z5NyzcB3JwYwZm8YrdSPqRnmvXqxWTonLcfQWEcBBL1LFey86oHhdawkRG6M63q22fAD5AoGG2Ftvpx5z6ta5n",
  "key7": "v3hPJ4HW52iPMoPGVu2vGyhN4kjVsAoakUqwxw5Z4cjz6QkP6ziDPExcmzhrfHkthv384HCkpeWB1fFrbw4SwQy",
  "key8": "2jJVXP5xTk79fu7MQysgmWEmii5VynAVM5J1FHoHU4U1PH6ru4PjpZzZjqAAe94fmgDs8bz5PWSTErMLTLofF3bW",
  "key9": "5BDpKmhiQTWZ3bsnM9CUcHfk2qd9RMLrs6QdWFfLFQHSt2Fc8Fegdvpu7tywtV1eBFSnPMfFc6kRWhzc8iKtPMyV",
  "key10": "4B9AKNuQUpH8ysdJp4oGVf7iyxXkEawH6ueHohp8M5MhSw3r9CAuwZWkqMbwZxW7bvu6p5WWFTZcWKmEoWyo97Kq",
  "key11": "3W5Tx7VuxfdSXjc9JmHAA3uTZ3Rw9bvEwQfWwP6wuPHGtmiWNgsKiUBqLvAgXUWuJbWEu7kgak1zJvDYyQQHB9zX",
  "key12": "5Yi9wCTrdv5WUwuqz9RnFudx6jgJKTy4EWxMmJkAKdR4pA1TcBauvyoDcATTqPQdqPHZqKvvooZ3Vu65WnNTgDot",
  "key13": "2eo4UMepwsp1V98yJnYA1wCwGaDbqyz4JfNv8AKp1JzU6Bt3mZje12CftJ6yCPC4AnLsqiTWvNukXaQcp5QK2eBW",
  "key14": "5Dp2ycHM5DTNyRDWd2aMvfTrEVLC5XgxtuqrjrNd4S38CJBUDcbkdw1FCGKg8skj98soqxtci5aZLV6QoGnoprWR",
  "key15": "2axXDYifHqAfVZxqZwvSTPhSWay82rbgVDNUfQ8S9LYiUcnjcLod82egcoLcN2XSgPBSWprhfBQubzzqMQauF2by",
  "key16": "54hFwgRhPh4SYwX4dirnbf2dyNbTxPiQ9RPkw8L9WJ5YgfxFrgdvHydBBSjc6U3uP6wRMYsWadiNPXN3JDwZMcKc",
  "key17": "5rEfgkaX1hnteKvcNBrbUSV1otCQMEvShNdbNMf9pbahZFRQKrVHo3qXraYiJDkVtc7MGuJ2NrAy3X3JWxuy1DMV",
  "key18": "5Vot7riMFEkYtGd7qdYGKQKTsg4wnKjuVtJMjLK1ZBusvjkRJaBTgQdNcSwbcqrgJVSUe1sjMfN9hBjUhBRpfyVT",
  "key19": "27DTM9LJ4vRygLxJGMqc6piD6gXX7t8eJf1iPRHrW2pR6Km2kjy4aAdmjhDJWhkG79vqjwhNTJ7nEXKhYMWSSiLU",
  "key20": "2ifEibxrQ5eyNYmUrkREQsxGSkzCPqqxG3YcMrkaqxuQazePaxfQWGnAG2K4Fi7Pi8sE9AAWjxBJQTx2yrfxFafm",
  "key21": "4Q5oqU6BR1mWKVxpSMHqc1uy7D4quCDGXeckxfuceqt7SY1eotzsGhpDFeuMxXyPqYEGUmri5mF2ajQCUhv4cFwD",
  "key22": "4VtxKJiiAdtAibcF2dckbLBih2UJUvoYcRZht39GPofU6hfiZuhNBRPiQpa8rGeAjJV4f32gdUdzPeJcwQTnRLPq",
  "key23": "cLMQynmkFVMKysbij9SgKEmvyMDoe3R3hf2zKx7GQsD4TCCMKF1kcwkUX5CqxAhzdtP1M77fNGPbADgKVLPaQwW",
  "key24": "3gBEQqbFQMGDEzMgqVQ1XdzhfHrCqsUbBXkJWhKHBkwLDx17QW3mtDDNRp8yi1ugNcQaLoVoPUUohb1ndaiueA3H",
  "key25": "3J2qPo6L94pDgYXdkgTDRAHWY8S4hwhv4JZXR3gnsqeHmrvPRu4J9LRpih2iaKaMz94QiLWsPk2wXCMQ5cc4LnoB",
  "key26": "8yRbDTmsRtPtMwKWyJFa6SgAgeszAqCW4tXz7MaUF1ippywf5sW777vNzvGAkyJf3TDhTFB6Uyp7g39XMyqdeF2",
  "key27": "3a91ZcVqTgFPmJpCx2Gj8mPBepug1e7wj29adokUbbepqjWPjByLPRyKmxTyqhSHeWv6nKpe4USqHz3PeHjKKD7z",
  "key28": "2QvqEFAiJ5pbj6BCUaxztwzDgiAXuYAnZuNpNkrv2qqkMVes4nWBTJzP4yWSYsyHNq9E2QL3CrR92wzzQE99gnGo",
  "key29": "5jNLRhqmXJyDthLebg69aP4YdckbomxRh91YVL1APT2hEHUQ6AgUryrcpDTdTXtpLM1ALHKbVUQn2UfwcUj3GAjc",
  "key30": "4m4rTHHpStimtErR428PqWXZ5HgLhm4UYSzxXJKnEUbwEN6qTwG3YxHLexUFpJzocWm8hMFtMGNLNsvR5AQufeKU",
  "key31": "2T4FJaegQyZwEUUd85gbBfdgfb4DKvmUr6d5EwisrnPPKDTyNXAeT6jqMTpiWbuWegNiyiJ4Kfo5fSUKFq1Aymh5",
  "key32": "5SSgobU8RZMszCnXoCaRQzGtr4ks9p78nyMpgK8C1f9cYHPYevvQnLxRbasMS1M9AduFnLgXj9WktDr5w6k64xX4",
  "key33": "3qNbD5JckG7E5YQmSfrWPrirhfkV7pVCmi6s9WbKfEP4wLzUm8sZLzHBsjtC2yehDX2XuQmYg1Mawua8LDWethjn",
  "key34": "3HVvK6ymjmr3jZaL1RnKw6z1Y1cMWwLHsjDjXyCzxhNU7VJnp7peXhmGxT4Tjej8Baz6vrmcXM9T4e6YiTJFopNk",
  "key35": "23AVB1FMsy2w2ekoByDSGRcFkaJJTTnMBvnDn85P7MCd5gyPp4pxea7FtXDAHQsMfT1UKYXTLyVfqXmBT2QTpVvp",
  "key36": "32RYm7AxEbW6kYxj1uGNJTE1hYf5BPNHSf4hw9QnCZUPePJVHAnmRXrpyzECN5PpKGrjj63MS1UT9E8UZLxuJjY4",
  "key37": "54K8Q6rA1DAGD9X7nsxiex9dj7V7vZ1srUU1zTSF9qpzWJepqqvQUAk2euWqXoUp2teQuMFkd67mikuBHw4WYGeM",
  "key38": "yHudMBamE78FVGzfaSUufTqWa531f3DEnBFxintb4WWo1U1ZARbtBJPhyZuHV62hVfFnG8u2STyqski7DYw9VTc",
  "key39": "4rg9rSkN4SvWV1sih2aPpXg1QhqS1gh3uPNwq63Zgvaajajbzo3i6g47W64NcQGKRmT9PMWGNXomQa1xdoH2TiTc",
  "key40": "3kD9GWM5eLwvbMmQwCqV9h7kFb8YvvyjoST9x4YwMtD2GwQVvJHnkZFzB7Ryhgj7MhfALpSmLAhPGHY6v4fa9W5H"
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
