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
    "HTqadu5ngRqNx8om6HnYkumfSGbbgHM1uMfdJeCL8Tz5qBNovDtC13r7FYREGUw4Koi41k5tJZnNbvKTFrTAJrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6g6U15RAj7THo8Pt67h5PYLFHCaRNeW18Gh2zbo54nNFr5NatFoqDq3hpHCkdrJbkguFjnmHqg8WGeK4K1htXF",
  "key1": "2Bj3rDPx9dj3M8UNkmpigKCEkhQU7DpFroapqfEPm5Bdc6ZWmYCpWqNE9obQSTRe2PmC4AVKTnUbYwUCMnfWEvmD",
  "key2": "zFMKKoPagKtgnDfPotT1KWCRZrD7PM7UtZ9cwFXS6kQJvvUp3UFR4W9q9pqTk96vC23RHGfLVmVVX2W5ktSsdPf",
  "key3": "2rpjiRhgrdJ5HzUtbnusjMST5FqE8JJU4e8egpByoHZA5sgZW6Bjxw285ZZa71FvHeEpeyvQWaFWu5ftdnD8HXqe",
  "key4": "5yX3tb7tCvA7dkboR8vM4KcJoVkM6sg7d71aXh2kQDfZes8zKQmEpETffACWLBZneYya5YHLHitnSjE3uyvUyYhW",
  "key5": "2kQNNZd195r5H2E27KjBThVHyateA2Zcn38AwyaxVBprJqoJBBUViSs8D5iYPybrSW1DVsswTXaBJjapCpxXPvbP",
  "key6": "4X8NaDHgmoZdqahUYdfT6ZRf4rk5py3BMkjraJvZBe5wqdJQ2m7Pgwm1xGJHZQkNu12o8jmga6SQJRq3MPb4KFv7",
  "key7": "43pUuqtzoiuuCS2UcYQacxqgGFTVSDhqM68rZgn59cnmMsMmrX6VTCpLorheJLRH9Qc1zYzm2cn6mQUPJfuJTNhA",
  "key8": "3impZeRYffncqqb6YKERYicD17rFv5VqLnMiWnEziSmdxgw6zprFSu2VouuNBfjzLa8zyYnEnRxo5cBnPFvNkm6C",
  "key9": "UP1ApFUFvPQ2VLnHxZm3aBu6tqJFZf37FfXbTyE8rLX2yUAH71U9Nj4qVnscJvKkoBEuRWpVyk2ySYR1z8y4qWU",
  "key10": "2aN1cfe4c5ADdwQ29ySbMcNuhm65RociSN3yy4GVMcLxA5U4Mt5qhCML41DpuQCmNYrwW7vaZZb1Df44cih2VMf8",
  "key11": "T3h3NtDCeo9KRd17DAXDYJPvTwvmhVtWj3Rdy8adg2nVDYFoPWL17fqty2S2yXBTgA8wC5FPgr7jWkZiRPkjA3S",
  "key12": "2j43pLtrym6HQZ1AkjpRVXVYzW2ktkq2hUaxtatLw9zacpwjrfXWuwYEymdq7Ps5jJvhVAB5wofK7SJNLfFJ44p3",
  "key13": "kKhiMos3hjPoifheeJnnFqg2L5KxoLrW4EWkTLrXwh5CjknXPKUc6WfWybX6PYYWiSaWLaV4LpU3WfEZCi3SsVq",
  "key14": "8qQGHC4RmQBbmKvUs78nrXdT9qifep3qviMYFLMxmbsaH9sDw6eobbpTaC7Nyxbe32M9ZJ1js466ZJqaGbMRo8N",
  "key15": "3jnLc3Uhx7ZmZyvxagbpuefCVuPXjiJsyDKJe3HCTdWBNZp3gz6hoGKn4FtXgPHypCM4ywXi875spep7E834D8p1",
  "key16": "48pNTGTEcRsYr2k21KMYRnTcAfxtcyRXkgkUWpEXcVaE3HLTYfWnDRbHVBg7dNAw78BH1MvgCiFCX6wR52AdbSrA",
  "key17": "5ittzxxCxd7bEKNAmE2ieh5b92uVBnc9EVVZxLJvtF1UbMgntvPvfw5k34bpqABM9Lfu8Q29GJgWe4ptZVoYntXV",
  "key18": "2kpyyeKnd76CjZgWnhsffvZj4EGty1hrUN7DH1UgaWVG7fCXNXMGebmBrTpe7LQ2QYUy7KwyTwnpAkSLAcwnbYaG",
  "key19": "3Yh5FhUu93sfApRp3wJg9DPVGLuj8sJ4Hy6AMpDU2DES2DRzGSW9rwH4VnKxxDuQjquUgsXKRs9jhnLzh2ezrUEU",
  "key20": "46DFcwbgJD2UGnd32CcBrDmzG65oRFZERp3PjTU5ZS3KT4zC4wSqXLna3x3PqfPFkNQ26SSu6ALjVZrFqNj9oW6m",
  "key21": "4iXya8ad531f5Zu5ysCr4RWLJwkP1ZwVQk6DBJqyt9ewiCjmKcJUyB9zzNE7KWCsQSJBi4VyfPzzjCfNhj3UD61M",
  "key22": "5vzfg5pCYavu3626kPSndovWunXoLk4SqrnVGaAmdA4JrBmPLyRykxpsUNYqbXb5oCesrFKRtycvGfEwhhDXR12j",
  "key23": "3mYt8vBZQgSMfEzyedvVgntCYL3vKunRZLQTrJrgqvV4qMZSd5zYp1mu8NvtMRzmYoGKQpAdcSgi8cqVfsHYgexw",
  "key24": "46DKDtLj8dTSpkXSXqk9F6tkbFy3rZZin3pZdG8UsVEE7tJwC4HBxeEsdDLE6ndPALj7dXN34hjyD4rZxjuB3zPv",
  "key25": "3EocfnF49cwzPrNnFVgVyBRrMbfpdZJa42bXhy6Hoz4Yzq6MHKZFgMBPBXGcBFGu3FH3mfoVqtH2Mz7tiZvcCCKf",
  "key26": "2RCmoYhNY7LkHkQmo8AYZEcahKmsP8nWnTNHWdL4gLedgTtMdKV593noXKSLJf2Rkp2unrSU4NAySQZxgu2hELmG",
  "key27": "2DGMC3p5vpwmHo2DAnLbGVNrRGSvcvh47uVmhLMYJrKjUkrbdXytPER78ph7EPuHHJm67LjKgwUvNBuroVatT8tE",
  "key28": "2QHji3ZT8SfSLwr6ENKBW7PjhodSXgEt3WPrNchsUMnqGTTJvhdDKXWqxwsPSZX3bhtYGcx2ecBrJ7HdrwoJgaTa",
  "key29": "5egqdWxcbwMAKCc6iNC7kLAsLt289rNKnXGdTLX63wRDJZQ5k5eFwCoFSAHd4rGRKtF51qNjxMSvHdHdi4xg8Mko",
  "key30": "2N7MmHaytFyouRTdaFZAA4nGNqQvsHE9zCh2LBjZ1ufabzZuUckMCuJq5Ur8nDv5HRCkQZFs8zRFJxVbhiaW6syd",
  "key31": "2JQPtYnEMio6UjTQEycRVcHvqC4TX83ecnc44jKVooFkk6EVFzdnvF9or3Qmqv8x5yrFgTnPXQ2d3B6cBSfmKfFJ",
  "key32": "86bLcMghCEDPrzL4ScqQyCv53mCTXAfm44Faghs4VVF1CX7juEy44TrZNiGACC8RGTL31pWd7dg8i2znvKhqx1M",
  "key33": "a92PswkXTByKHZUYu4zrGTdQ6ya2yJ69Pa3qgcAr8mmW2V3VbndrD1ZSWpvFNA6i3ADGark1oeFYQQcbs9ZQzQv",
  "key34": "4ozmjXLc5FB48Jnh1huG2E4uLZ4xF7xj9EYJcHu37MeRcerVebnnmdPh3wUK8cnN4u7km3EKX2CcvStZmzWE9nJB"
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
