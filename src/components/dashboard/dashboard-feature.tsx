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
    "2iGyg7encQ6g19apZN6PtfzzX8VzTvJfYDzRGPqdQBE4g4wdCnNKfU1jR6V9ehHnicfZyhx5py8ftxg2oyej63Bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442zhjJDH45KTeRXH8pM1LY8qyqBheCSqxdXbkoCXqEW1sPfzdc45zAxTSKNrvLpTfu3SbMFuctmnFAbVqFN4mzR",
  "key1": "4m9tmyhBfk5xSR69nn29BZiRwb4guXJ8huSdqcEgJeNh4iwykh9LyRdo5RzZBN8p8axCfRQbHHh9R3gvXNQ37wax",
  "key2": "G5DQMbePqoEAnyBfbJVeb7kn7e1qvmWowVv77Z7TD6AvheqmnC651JP8339UtZ5HYN9bvvk8p3DVswuCVhQPqWf",
  "key3": "4w8aYCoWwVN3LcJvTSVjHvXx59VgTKdxA3s4BTDp3dP327ddjpZDfFe3iQJUx38RnTWbQenaieFHSZjGDoU8bPdF",
  "key4": "67huYNnYhoQ1oYCW2mrnqmsXkFSHbVKc2xq8SSaU8aPwQNsdER5xBSaBeqCsZSC1ceBhhM4z6JqNkXUD7QKA4P88",
  "key5": "4qpzjPpDT9neDC77yvzdnPLetfmV9aq6hzGzddRXUYYTZFpyory3jSmTHaGi9NeLD1MTqG5ZeAUnZaAwPo4gR51t",
  "key6": "5UArPpMyYdJQ66YzmobESEepS7X3JYXGDLmakPW4xKSh7ApBvYzTXeR8qkvv2DmMWk6k2mkKaD2m9dK3d1V2CKNM",
  "key7": "53jZXstw5cmGmm38e7Rctguos6HzRSmfRcKpNRqc5Cv42duE9tfrV5QYcd4iqaCaNhbk3bsL9dWWKXoQTh5AoYSL",
  "key8": "HKDzQAMW2dpAMGSo2YQhYyrsGZkRyNGua9H1yUPFWPeBrxVGdgmeJy6doR8X28tch4ATVXXFcTeWNedt774ukcZ",
  "key9": "3ECXdpDjAbVxrYuML61TYjvMS15QJKveb9yJBMdHybkxy63tUYHC3icCQKys1KL7A388hrSfmkf7ujfuMHizEnmm",
  "key10": "3ptdnX1LJjWKt96BuKsHitGwvnhCJYsbuP4oFYp3Bshkmmi49n8cQVYHFHA1foMMnudQPMzaqdtGXs4HutvhPZtW",
  "key11": "54NTPYQ8RU1vmjrE2aBz6ZMjqKoGSZKNb6V9nRcfJJrYPfkDjmPTS4iTjhFFb8srbijwfjRzyrsp4goUdLkjBjb5",
  "key12": "52Xw8Vrgfqaxv84xx5wddwxQ5Q9tsKaKZa7VenkvcJ1HYhJu8XveZKhsZqqsxvkiceDgAKSpmQcZbS7FrGzShQiH",
  "key13": "5gBZaoty7GNCvRkgULmoMj4J4s1bd5vW3xZ9DDRewkuKZqwS1cQnD3gjV1tWEF6H6EgYmFVGCTPSeuwZvmoLTXKW",
  "key14": "2j99LmhQryNLnFv5jE1YFuh7RshJPBzhs5SD6Pqot1pTpbTHdaHUeM2NsaHsyVtwxr3iHpUxYtBYqmkACZu6AeaZ",
  "key15": "aEw9djqthjd31v7PstWfHp2b5q7pvx75MSivmNoCm14PZF6DTDWZC1GAEEhfsr95uxbQWMkW2NgUSTGGA6hTA2B",
  "key16": "2QKXaUNJYxgr1Mwj7Qz7eJRDuihRaDDkJP8qdjfq8P2fPPck6oPZ5sGDgUfDTfzHGgorpEZ3oeuZ68ckZhK2Szve",
  "key17": "FJUsSs88k4k9xXyf76ZmCPgnR6PK5oZkWpcgfqf3w5xvhvGzLxcFwjz5BdEYvsVSGEvzcXxco95jpWsjMgd3Yzb",
  "key18": "2KuBQ8bMy8ta2tJQGP3W43MQTwZ5HLerfmQvhHVi1CvvA5LkYhz1iL1pmcxAW2pfh6VMuTSh8bZ7gEXCAjZi55u9",
  "key19": "5ZdvjH6dUmodHwzqErumGhMtRcXHNXpaBTGTNcNzw2keW5h9byGodM22r3hfNxsLD1dJtRUKzJVuM4NvLZZkNjGb",
  "key20": "5gfpEZFnXyyg8y9tuJy6w5DY8zbtHbnrcYdPeQ3wowqvD8jiL6f65zT7JhCDmMGAuj7hp2FMwH8tq4u3sfiibFtQ",
  "key21": "3K9DMzhqkMcEbttypZ6H9kkXA2U49a9LfQn812prpcTBDTpuY6Myd9qMtHFdFkw5ZxWtJEbJ8812whkEFebjRxM3",
  "key22": "49ZzoEnKeREUKjekrB6FbuEZYuT2wdBF4NjMA7C9w2NFTxGxibpXLCUXDWeKN8VwTXwF25hyaLNYup7CrAVxJJ2F",
  "key23": "imByYaezcXkmE4SPn16D11k5J8Feiiz7N17jsLwn5LByqQWbw2arxW1hr9AXomLaJdWtmRHzto6j8SvS13wAi2y",
  "key24": "4UQMNQLJwd1vHVDfQpLWiBif9kZ3eL2V3k2WgsTGSA2Lbr9fgy5v1e75t4Voe7gSHVNxnFnphL8G75Ne27vuZo7j",
  "key25": "4RPJcSwkoZ6Q2D4nQsBYedjUXmy1nwsqi8FbfRcoHjPnm7zhKiFk8DYqxmESrqbtWE5z7j6TJLH1h5c76Vqtf4dE",
  "key26": "2MS8F4yUMY5h8eRfrZ7gykJGyLVD3DMwvxTPgpd1CBgg3tepneAHWDwYRGhXrEgqwAggxPAozAMruJ9eqswtK75q",
  "key27": "W8PKtH1sQGaXe8LiA9kb7xbhFMdiwthEVZaCu23gBbhzhYvFrKRwvnEk5xhhXkGFSubyYtckvQWqspFftVv9jfP",
  "key28": "4gJYGDhcgwtcm1Cd858Bc8aAF46JjrDP8vbiVxtrTs4AoyomVw5rbkf7m45uuB9AnLiHupvJGQh3QDGAUmD91v13",
  "key29": "2RhV8nauZdnuN3pbqrg6vFDgFbLmXeYvqsDpW9b7Kh5MWSTB67PqQSQhZTmQAxhGf7XRrh1EpiXAhCyaJmP2a4Yz",
  "key30": "3qTvH3v13jxHJLawVvz4PQpysbFDrwyfzr3cp7FiU9quqCgRpsMEt4a2ohkZNjmGXa6xHU7kWx1g4byozkvS9x5n",
  "key31": "3BHnDKuGvDa1qWQc9b6cTrMj1DDZndn7PKJMV47Mq4cGur2nHedjkcXW4F4meL2Vkmzh7QJiWLRicFqFTaAQ9TAK",
  "key32": "2C3xm4o51nYz52KMTFeBouh8w7jXT2QvyJWYpJ52bTTj2nLiehh17P3Qv6rUfTR31zCADuLdJXVTdEd4RUGqWoAX",
  "key33": "Hrgv37VNwAYC3s2YoM7o4udLggMKYmNdxGLQ1EKbAhSpAKq2KeLG3WFZvx4NTxHLE7sAcBZG3urLcj3hrzcVAQc",
  "key34": "5JkRMxwvprVs6Y6wF4Aj5wUvz4JAWCfadELgG9AshYMN82vwhD8vSFFnBPWBDnjYG8zk4QmgtTpw9zjCjb36kgUj",
  "key35": "jsFqjtxk9Bzapq8fDZu9rY5SfNSpnMqGApiEMm8siFSQzmUTqRCgq2mQXoPcQky76j24m17btbAPH9keu6pvrfV",
  "key36": "4gCn1Q7satk8rqwnSSQwXGHQSgXrj2ehDpxpCHQmbK9dr5ZfjRWKehhNx3wySVamGUFK2yPhrzq55sPE1fuhocKh"
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
