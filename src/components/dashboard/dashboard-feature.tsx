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
    "4kmjh4cvhEi2Aa4Vt2yRj137AMEMMQqngN4zR25gZXs1jAa7RubftC42X4f7rEectYPNr97F9HfUZRXmrkcfND91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJZCVi4oN6rVDCSCdJGJhht6Cws7ngAf1ivR8xq1X4Bd8PAYeCELtE9fmsurncJgwbwykR7kMwdw742BLUdoYNy",
  "key1": "64S5K6JhCLnhUvbmr7q5tjNC9vvDofaDF1Zju6xVEMTmdtRNt3g88RsiH5sLyNQJ6Dfw7sDUEQeVanUbf1j9PnDV",
  "key2": "4QrhEs7VDVZkqq7AYvuMX4mayTT4GSNqj8ANQqHu2vPemYR6wt5HDxdBB1PgfYYVufCyNSqbGorsrKFKzc1WKmuN",
  "key3": "575xSTSXydHp7afk7nGeB4jFFMCe8ewpcpGnTWfh9MhpFqNpafqpqqi5rskhfwKSHPZMZRZ6p6KV61HydYnKw6o1",
  "key4": "F9Ue9AKyArapBbAPpk5ny1tiBsLHqVH9aEcpy7QRn9nBN689rt14rfDNQQtjNPB2joR5g9mmNtFWkcpKvHkCQ8M",
  "key5": "5rDCom5womvr6cR419DbpbYoSWfUtTZmu28rLMKQgR5zNWajGfXtFfPwVmARt1x72TTbiY1YPmnPm7fJpUe3DS3v",
  "key6": "3LToG8ikbca4GdEhXiwMbxC3UXnWB8pu7qkSEgpfg5BVHZPyU9TuuwLFsZy5E7L38FB89gMF7scfiSTLHGVUriSp",
  "key7": "Ka5S37tP2oB17pXxAV88PDPiEZ8og2kodFE4SGE4S9KMMdKUHvTcFfzSJN6o7XpmggxR1Nt23zFyCshbQGBsgiD",
  "key8": "4KCWTsPCuMzn2K2wcYKNW1YC2LHAj6Zk9k5m45Eufbh7qHdbsyM4q5dY2xjxyxRj4PbofS5XR6nq8NzSf6PMiBhW",
  "key9": "4X4KKNsNaTStpbiQmxKrnTuj2D23hRE6xevgdNvZGGebDSZtbdT47QBYRLChUf536mNqYbNxLAzgDaAF8AZAjQzK",
  "key10": "DgtECNKfdBrUtEjrGg5funCRHE5mwChR6NQw4R13VLRaSnSFwgCCsLxKeHvKFiv5iaWEjoiBgoXpabsN9Sy22x5",
  "key11": "4W5ykLVetNxumd5Dhco3249Vay49qLyNQoWjU7ceFyVSBp4gSNeoRBRgJZT6aEvef22vhnrXoPZRYPBoCA9izuH8",
  "key12": "59a65nERYwMvEM9JDDsBE7BQHYudm8CGNQUDLka96X4bCUZfsZkCdkfRHSbem5QRMUD63io9UiS6HN3xqxdWwiQU",
  "key13": "LLzanAtzL1GeMnSwBf5WAf7aLWz62rtt7Usq8YQXjf8TBCs3rGGhUPZmjX9zFsYBVQWoeMgaaQWSV6VjewZHrjb",
  "key14": "4DXgif8swS8P5FrEryjgWXFoAfY19B6ZZ2rGUxMiiL2nHXwsRGubdN46kH2h3P38mLdmv2THQ8Uztk3V7LrD79Dr",
  "key15": "5cE4oaKmHpcLD9QshSDqmFYv8PQN3W8nGnVstJLCTN9gsaoHS2pb4MNJrZvJf9mDqwrpikbQzjjrS1BZbJszuku5",
  "key16": "5h3xwh4jFwmX6YhtFf73WwMjPkeh24t2mEuFAYGM3xBLNqsGztUe566TnENC4Fu8Fsdsq8doASJHsH19AoJJjcuh",
  "key17": "3Szwbakr9Hh3tcgQo7hjg5vZP6EghmGEMEvLtWSDBjdHvwJbmhvrGkaS1NM7q7uHRtXVrVitNBsV2WbK6NSTqzW5",
  "key18": "2gNQ7FZajqGnNzg4LqDNX2cxx2wbzU2oVGLPWyygYs8Lps9C5aeoeCqwpZaMEy5wFgLbE5AQw1x32sr4L44u835A",
  "key19": "4sGDZ4vV5YR5uh4EbNRCqVvykxBCHAb5uvmtDuLxFaTrVzDY71xNcFE22bPsNkMbsqFsAbooSfvXF84B8Gnwwi8P",
  "key20": "5TqVPLrbVY7VjYJtTcPaJDJkpo9a11KZyW4GwUopf7DHrm4LywNhEvRUi4k4XUri7V2NQHJjq8q8HkWfmd21woQ2",
  "key21": "5M3YJYNDuv5ewXszCdt4EcR1ELygGM4RKKYuH2u3e3AzFZgtbafaQBmgy6NpB6jfmZpWhqt25XK3WMEkNgrSJGhr",
  "key22": "5iM5QhBpCGD8qn2YUSTvMT5gRG7T78Ek3ZmtTxy919GZhy5nf7KgXtahuDxBiAQRfpz6Uug7bRLY9z14xUzGbj5B",
  "key23": "4nCrvF91howexUmPGfFF9zKyRZRR7BYVN7KHM4FmygyZqbGoA4fs4amkvexTMcQnQBuARDtMAjB2vfR2e2Xeqcgj",
  "key24": "5ccE8gDLVQLPrcJ5qidjL3dm542tde67vSNxHnAsCjF5C88jhMQpzyiPJJepfDxb3Q2CngG3exA7QbkvQCJ2F7sf",
  "key25": "y5LoeXcbhSauf8zEfNEWb1spYmnUhEoidGpUKqb17qCHveSPgYvcNbgQ4viM8ENo2z1gZSYXa912V4JPNVKf5Kf",
  "key26": "eQj1EaEnuKTUGnZhHNi8N9WW53kXv5DqdBBFrqLyEGTbCYEdeT1gDjstzt1CHNV91ALEcevjuEF6EkhGzbnsnWT"
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
