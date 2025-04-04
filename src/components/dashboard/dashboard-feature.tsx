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
    "3UhewzpgrU8g26HaUcuWNCSwUQ7EMNsMn4RNB6EkL9bCrdAijZw2ytXKwnGDcG4nLRX669UkAMGmAo1d4kwy81CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hn7nXxzuw7uzXYYBw5B7PGbTyaNqVCDBKaE945wxkDrEmiwttFGquyTjcTMCVEKAyuxGwwtvrr3Ke3hzNQkySiZ",
  "key1": "2oUqv8Feom2BK3K12c6wZ3AWDNForL1usteRT99eXXCULBgeVdQ5KvhDKZNh8BEw6qHozJjuRxwRx6S3XbSMMgfB",
  "key2": "5UH8j4HjLXCUAYwpUi4T5q2dKLRVrbb9XSLug2AnZLoiwvuwrmQWLth84rMcJtZgLhNLryDKf995LJuY33A3K6VK",
  "key3": "3bopombEKVyhmfuhbCqztsTfwg8xezX5hvpWA6s6QuSxCpiCwi58DyK1VjjHrqqrR61ck8eoJiQQnMKehcgibwz6",
  "key4": "3N4vV9VZgtAHaVFfC4Qtk9DopFuYBM3rLCyx5MVMebVTg6v8d3HMzZgxBwJc4gfe5tu2u8Uu3ETnVW1W7CeiyJpH",
  "key5": "2ApihNpQGwzFVgxCtDNC5VcrPxFmBbkHHhigncjvpkvb6S1ajsL3sVssp6HDP84HX21Uw1oEUGzdMZhFY2Ks2WiF",
  "key6": "5cPfk7MEFs3QEYMyKxc94P7aKDdbHbBYJb1kYAsRtGjVZ56qi4A96LnJjiPV9XKNFtoHTDZFsGt8cpaS7QFJFKea",
  "key7": "3dEqcSzoeggsBasMgM9ZGw1Ckuyp2CocdUfp1qPfJeaPKDd8Vk3JiKxFFdtC8P8a4jp1pvMmafKzCHW9878sEKUY",
  "key8": "Czbh6QMQ4uEZaEuhxj2aaZMYQoWJERoc6duPBcjsXTexBNYhk8TSVX3F6E4GGL4UWRVBWbvpLntyRNkBE1Zk2e6",
  "key9": "5xdcyPJxS5q4Ycknwp74G2qtFMu7z96cL9te3mjxexncjw7e9znXJTihRCLPYvVC6g99vsjiAe3YVq1jZntZAVQC",
  "key10": "2kjaCyF7rxZFNZ2AqvTh7GQScLNejsCmnXbgiTB5H9tNtC4rccW9BZWR4oJf9kBayPGPPfPMEGc4e77TPo1XiNfn",
  "key11": "3BoKQ7sYxdq3xsMZJ4Qz5SqiGoegPXRgGy1o6T3nvWaDo9XMC4qUAZCV1UvSLgjQkYrKajXUyHqr1kQYxrm1kNqq",
  "key12": "3GY2msjTWuAB46YsK7joPaD3fHECtWzu2WAiJ8w94RoBy1vyS8YTYKzD9jmK3A7L2Vdgr9bLJSijoja589c3bM22",
  "key13": "2b5TcfQTPWywYphw47AqUDe36YvtHjgo6Ne6kjw6Tj4skSZ6APhnsipyfisQ7T4vM6yTNL8aS3LnpMJPEucZN4Br",
  "key14": "1226Lg7eHPrHnr68dzJqvd6Ygq4tV6VKjxf8RuHrmqA6kxJgmfGUnW16rrKe6NEDapyvMA25HEET55eHqoFfQJSp",
  "key15": "H6peWi8CXhC1ZqoEEMUnQdTWcZqbDyupWhec6sW9z5U3LcdKMFpKwMHGrohmar4yx3L6PifY5KL6oZVybo39Qjh",
  "key16": "45SxCe4Bw6ghd6dGaG9CqSiGAf39xUyVP4hXzoiDSKsKvEtM1LX2t2pbz2b77JYjMZv6szY6aDeKapky1xfFxbmF",
  "key17": "5SHJPnA4mdGwi2saai5pvz21qm5iErub2vEwghDouuFaKzw7dQTjmZiAsn2NWaUnuUiAtbCCZiPQMrbwdV4uaWSh",
  "key18": "3mLPyMHUs7niJQkusoFJriUH1GjwuiakYKjYoLDWsXa4h3pHgwT6TQXNYd3jjDqVUqRQMG39NLMT5fet5azvBeUu",
  "key19": "3ChEfvnrRptEt86PVxKEkFeUcQHgFyNGwopd1TLPnZg5bYAM5uahmVo683ZAb5gTRdtkt2j3f6Cxjp1dCYtUknQA",
  "key20": "3oxiPtJjBRVs9yhe1E6dNtgJ5d3V5jxLTLLKiN2SVsZPuD8VjbcdsZfWpqLrjTqdUpVkbcZmPprChLrWi6BbVkc",
  "key21": "5pVRShg913S6EVdoAmpYUT32k1wcA3MGGyftYqm1Qxo1bFwb5LqWKDzjqRC59o9eyH1yMykD9Md6cEpnsMSSuZMC",
  "key22": "2BccA9MGr9VD55cBKM1aibygLyb3VjHyNM8LKqvANt31JXGm36tbt8wx64qVqg4pV8oBSYmEEtyQwvHwpX3PAwaJ",
  "key23": "bNZagtrQNVyCwh2aZNc4wXHKfU9Ggc7MAwjGYFkB7dugjfFMyxKChTKFLjwz4JQuFqzoPmQktSiQn2UknvkHDZU",
  "key24": "SLCpNEcWqbWdTFqubPhDShADhpZqXzwB9zCbNnS14xngj8ySS7TivYgXqRF7DCFHJmCnwnJGPza1uayfC5CpEgY",
  "key25": "3tEMPcQNbsq1P8SaUbHNAAnUVetN7vhaJWd9aT2jU2JD8CjNMTaPjhSh8fAYqEwL3GuWTSvVCYFmBgGd7RcH8rb2",
  "key26": "3C7bbT6h3Zsc4W3xmZjFavfFMquYygVCz6KERNmhqLGitgqHMrtkH15i9qQpXjELSZYurXGXAg5KQMwhY9gfforU",
  "key27": "3VioBxJ5hLLESACMjDdgBjQ16Y4gKn78hEujHnLmj1gnWUMf2zpSea2rvaj4EkFvofRrbCPZ27qXSuKEBSaRoSAB",
  "key28": "318Qa8QNJyn6Bu1hnmk5srVLX9h873v6C46fgUKiRBhyxEVKFJyszCGYzxqZ57Cp3mEDdng9gVGzqFP8zP1TrEHa",
  "key29": "4yB1ZkF3g86J1bByFdHXVcnUpBA4gMk9VmQtpihaXBaiRW6wY56nZyrwnNrbo4KSi6kKYDQ2KJJu1g8Q7N7Dqvcw",
  "key30": "2CjD4RuZrTiRZxPEms4mfY23Rh72WZEP479TXKCyErdD8BHtiGoRPKhHe5GRRMMj1s9pRfZwHb5cQtCZGRmrSfBm",
  "key31": "4DQDyd2GopWP48YsygzHShg3im79wXUv1FYCGVnS78ZdnKQxNa7NmYHTYGQBDs47t2iJvCJRYyvexwGzsmXeF5PC",
  "key32": "33w9v3pDmR5Ld9TNES2LPkuAjqzYoo1t5sSjw8g4RRKrEv5eKFm957P8cdvKunMZHhwx5D9tih5mGMGtQima1M3t",
  "key33": "kkbCQDFadp1ZBZ6RzGZb1LtwJSJVb7rFczyaSygTULM3ii5yeptbRK7hVUqBLHgRQW4667oic5AzFG1mHXMYzX1",
  "key34": "5L4EMLuhEHX8ECLdL4qxV1VPQ9J1gc9wRFnh7Zn2XfVWRtapYt6pkw1Ei1h1qFbBxGVrCNZvZ3GCt1AYvFPEwgXx",
  "key35": "2qrcrwvpF758tntETXWR3yGBABvKwEz6cRcMNYWoM8AKYohkgsVsRPthrvepFGGYLvCqHT1PwWK2TktXqfUiR4UY",
  "key36": "5nGCVo4dXnGys1NrnJvLxgHbcreWKjKdav3S3A1F5x784KiXfVP7hSEfSxDaanQMUPuHf4ox5pXSKkFNJHAoAZEa",
  "key37": "3Eou47VjeXmYZ7Mmhajp5xn8cMxXQYU411s2ini58QHjjGbcZsRACheRhXtHByo9tn8GE7gSSGFGBJFdLgenqGzo",
  "key38": "3twVGzSkrZizbMnSiPfsJxZfmBdoyyHf7gWDqaaiq9kAVdoNEyspHhtrddMf7Z9sm3CDY7P9FPGM4VgkwCC5RSoG",
  "key39": "3QTw3ofhJPJnzrswQHFkezNdWJqMmvHaHJg7LMU1hNsJQGUJAeC245MGX265BMc95j8jAou2iVCHPv5tMzB2Xtsb",
  "key40": "5heQjd2Ae3AxDPHeYsdVv2B1w986DvWDcJpS5bj115Kyr62ftm7LYETvDiB1Q7wxB92GRjNLRJhKosMXo2Vit3xw",
  "key41": "5HdDE4jHeT3mQwQ56u1Xcwm76EpREHFxNCcCYYStMk5DXgnfGMHfm5w3rscw8GjHCpU2sCPZhoojHm6b97FVNStd",
  "key42": "ykCvGbLwzqYGRcv3riibeMkrMY6UpGzrMrwLEWJ2fn9tRoCMhusr434FzJJUiM3nXVHT5GryZ9Bf5bBM5fEn4B8"
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
