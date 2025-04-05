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
    "5FjtVSRgR2am5cLErxYsHPnyUS8q7MYio9vNBanPtb7Z7ZBdzUzmrbHZQE78Rr8EsmmKN3Pu11tyTMS7zhnGedMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VhtfbvCsWfkpJn7P7M6JnfQBkcZ8swa8qBzS93t1CF1h4tX7WVsRWLUsZVW3E6Ry3LBKhCNgFE5SBzA87SdGp9",
  "key1": "3siNJFThe6GeCz3YTmZBbtJLq9oZWi6UNQgmiU5bL9gZ2MEipniHAX4FiUNPaypMgb8dZZSxDp8jM2zhMqAsQb44",
  "key2": "47f6udPbL4muRzQJ4tnbfAFD98NNUXCogEDakwSR4TJtxbWxjW3ebyRwAfZbgzYwaUyAEa326dqZQ7mv45KoZzat",
  "key3": "4CULczhYu9YEF5PD71rSCEmCyvSMSsCfhZX56i23MnGfotvTVoyCnDyAsVXSEcEAAGiMZhHQNkTmHNZRuVKEmNiS",
  "key4": "tgv1HtiWV1jw4Dx3nCG4Gg7yFk9MZhyRs4quddai6d7B4toZLU5hmBwdTPNZ6YBZRoJk4j1yFcWAEba6ra7m77E",
  "key5": "2pXCtVwdcwwevH1waiQutbsut4tCmhaMsPCVvbvomTVnpDUjKKE3G3F2JQr1jYpEnHVMYZKCHLnmk7jSKsmfBb3b",
  "key6": "5b34NFo8K5mMpHr2VDzGRhvWJ2bhvSTGDf4tgAxn36wGQsmYsmiFDkiF1Mb2jxQ4F9196pXGvsgYUc4keiPb67Ur",
  "key7": "5VeUnoVotuJRPZafJWs5k3cFwaBSMbFnmghBieRzsbyAXh35bB9Uxc9vM8FdSYqTxGDCG76a22Ht8ZNBGqK49Nk5",
  "key8": "fBzjdwYcVP34s2HYW2iQxzdoCmxetGAcJL8pMCfrwRdz3C8GstksQdV5PvxHeAH2ikKJ8kzg7yoc5jSF1opic5h",
  "key9": "5dBQVVS39YZBiy1B5RXMxcdX454mPJL2twF8uN5EdEbUzAtWQK5BFNeJDNnpwa5MDWf6vzn9UVA2GkKZjUfpDaAT",
  "key10": "2UMXYKfoLsH7br7mDAf85knSTyfBAKgRDfN5RkBhXeKTgQvwXR1r3c5hux5D12U3hiAncjjBRFwqRwQEZkLFtfxp",
  "key11": "28aPZzboK19xSRYqVPp8MaAHSDwqmNYiy3v1rsq7Xc2X3qRSVd3X3ZLBanf6Fda1hpCCxVx2pzKyDShZvD4yivb2",
  "key12": "3GuhEM9G689AH3D4HhR1XUArQwj3pSGFCDgfBgQHKvwNxnCShs74oy5tvpW54eQFxsvTiBwx19KYwBwbPCYR1U6k",
  "key13": "5JJyUGUFfesUkaW6HaqCF7iuRXmKqjRsb3fiQGysx8o5unH5wAKHqedRKseXJwCbxgY8Qv9ox4k8CyrYZmBNnuou",
  "key14": "7Gqthhu29HPKKyh6pBaMYJhYoTTu8tdQrQeGhcKhWMYJiGXHfoE8BjfXWhVWsRTz73fmQtsHtyEbijmghp9kxMj",
  "key15": "2711PZFxLHb88LqmicaWVXkCPmQ6eKnuzi1ohkqf56TM6KNhBcXtuLfxL6gRyBLSmDZf1WHRtfXZQ4pJociaXZLy",
  "key16": "3KxMJtjaMhauYfxCeV7dxW3FhyGacsZXAKhVnic7r2FCX5MzsnhhSMQZtEGEUqPdARwaGkmmLbMcPGnFgjdoku5Q",
  "key17": "2SG3yWwHac8SyX43fBgv7Z8qeyVxzg9F4DzPEYim1cxJb2KpB49ReRqVF1LEAF9SCy1o7wkzuKsqSRW1RpzJKrjC",
  "key18": "35USvt1hMM32BBQBFzSXGUPequq9DG1jzh4RcE7makeawU7rHfFK5pWi9imP9zk7XnSvaxUruGyP8nDTizZZW31E",
  "key19": "3U2Td3KDst2n2gzWmhu71mWVi7LfsmJttzpPcUkSDnKaYLZzMP4m9kYGvMmcSCww2gqfGbZN4CB9rVjXtYRAz6Dv",
  "key20": "2zBUwPRTMjWzTV2GMeRGchNXh8QhhNKkxbon6dEAv8GnKMNdTMQs8LocmMUcki3RTypN3DJytEafs122VBnBX8nM",
  "key21": "4PeCtw6z9kbvRW6wQL1VvcmQ1SBKeCKubfxxzsuxmU7KvJ1aXJw8A7t9NaT2ZZaEVrn7k1FyYNG3rNnnmmHoiuem",
  "key22": "5ti3rXJCoy1RZ5rc7gbpuxn8C8bULorAeKYKedhacFFH5UZRS5CSiGXpWRBqwhFXGDjKmhSvWPsoApF517gaPsQy",
  "key23": "5kVnjZCd4S9FMNxxfjSQAKEef8NNWNaeYzGEPpCoy3Pd5YY5ioQsLuDfi57qxnaRDEZkeTuiHTMQ7Urw1ahTeAjs",
  "key24": "3TmqGotobRJCysfCjMb2LoVFWP2kfN4QEi4LWeFUNwDdhD22wEm1mVXvkZJkTHLoC4E2BEJMweQd1KpQ13SHyWS1",
  "key25": "3FdL6yY7KLA45uHagKGAYgfhZ2JzLgHXHTMvZ5tsUa8Z61n5FXsxV56WgR8ep1E3s5LMMAK4MnhKi91Hp4JLWhzb",
  "key26": "6s2dKpmcS5JSJS2xne2cUMstGhsi6HCUGotVj1jTz8Xw1ToC24fPzz13DUoQWZrmZurNT7p37FFCvXsxSmJJiLE",
  "key27": "4FbwyTWryX459XyXBuPedyDbZnpxuf5TP7WJyWMy7g8qrJmXMJzsi9ZUwoN3dFdecgYk4jgPLNBhfCt7RwgPKmi1",
  "key28": "5xMMjzH8sreeRyZChYC3daKBdhNtsg93hRfKSuiQq7LreYzDe6b6qUoH7jHsKPnZ8HK4kNxAtbjTwmBEdt94Fkh7",
  "key29": "56hQ8RcNW1LoQRPbagmwYg49HPcaAhEJM3sNjzPm2QV59213mxifg6xhoSgAsZDc41bQLCsEg3wFjwRcSxCa2X1u",
  "key30": "3K7fV3V8YwxwaemQ2d6bKWc3yZhMFTMF4nSEDn4Ka8KGdSWdtJFCWh3MieXydRiyxZ7EGdpzT4BZGf3tKKrFb7ov",
  "key31": "54xViYuSJoERJa4XzQY64qboWo8KzefEr9Z2ZBcev9TcbsYiCGh5euFMsA4Cu311VNduRrNvkPP4x6qBJh7oGngu",
  "key32": "2F3YmonHi9yCWTxYZ8PYiEhRjQovvym47YdmUG5fsgebFcmtpJSDwLwLiQNnw6BAeJrVUKMX3psLGCkLsMEpnXuF",
  "key33": "hYuN8WsDmv2t2BHXQXFe3fC3z3xX3nnAspi5aXpqhe2fZ3KvDNPRApmKK2Tgp6Y4Mkf6BWAcJVwt6hs8Qm4qibQ",
  "key34": "LX5UwfnG1t4VNnxTq28Eg2LiPweKW4cqFhSEtjCQ4StkjwMKCR4831fcSEwkS7PEbD9XiQAgqE3fJckWBnWvZvz",
  "key35": "3ZQxWn4rapYDwKq1ekVd7LTgv1YgVq3ZqNWn4djxETeoceHxyjtDedQvzLwSh5x6b96cGDYU88dQ5SraCapdeXyX",
  "key36": "dtB7WaC98AerNBRCGLvxW5QW1u9MF4yL2Zz5K9y89ybzLhyh6UkBbxz9wkAFZoD3TGcLeNYxLKm3phhR97an8hG",
  "key37": "4oapECgiES9ZdFZrwTBbfCHgW9dJNp6aTn9nqrWth2hWywZXZamFboiafkhpmBnmdbGmAuLzkmJL3HXVNjFMXFLH",
  "key38": "DxacCbdz8WRwviuYTSAg6wXGMgBMR2ekmAQ4crVaYkzNJoxiMmaDKfQ1syogxAsX7xvVPwoATZgbGmd3Pi4bMMj",
  "key39": "1YZqFfceAQcn89DfPRDN37EKuhp6NvM8HSDJqLVABZNCtG8eNixAjMTQZDeWAdG6QMXtpxPBj8z86zSn1eTUX2o",
  "key40": "KqTXyx4c5Xrig6w7NwP7ZQahWB1JmCMijS66PigT41pUCZSPgiY6fT6geH1cWZZwZT8fps9erea42H1vVdsk4Ro",
  "key41": "XcxEZKn4zryQQkJEKLc63gnZVTS6oA7KnvnTTsuFG7vLd7XvT793kx9yvnJqaoQ6HcAbSGm1uaBQKLk6Djj4MtN",
  "key42": "3b3aKSahdysEfv2X76Gbh6qZxT372RabR8JnS3DLXjnffdm7pkaMc1GF6u3JxfrQx7KL5NdugZDoXpwuEWYKUDEp",
  "key43": "5Qf1Fainm3pabBuc324qrSxWfc4zB37KGtURzDaHVe2PZs5Jvq8pNEnv1wghqrgScuVKFUrUHNRybow6MzK7uhsz",
  "key44": "3pX5g7nDbQiFVtXAhRP3C4TmNK6wDmXVhsLDgNnb71LkUDBYrCBJnjq94yctAohWtjGfydZqA6FTUvpqBrycZ7DC",
  "key45": "FH8nC3EXztBYMUqXx9PyGHduzi4LgcEKTSqRCXBDws7TkY3nFk9zjLSk3aXGwuQYkmizD8P123V7GT3VqLPXgga",
  "key46": "2cqzAXK7rFczwMcr9A3jAsvCiEZqNore1GkrcT1T8mmLaVjHmuoMLMRSaWAGMYhovcbagCJuCBRK6f2ms8dnZMAW"
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
