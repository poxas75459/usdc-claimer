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
    "2ZTCmCXqSaAdBPrZJAk24mW9nezwexyi3xr7DGu9wXEnahGUSjS31C8U8JKicMVdfrGjvrHpN13ZN6PtKQAC8R4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9ZhjcfTRf3deYCiqicuuYM6EhwJJrWRP6EwtcJd6B11fVQpFGzdAbtxZ5TFhSntok38woL9BF244suNgD5TGr9",
  "key1": "4zZ4D3H8C2nnaTBQQYG7BMT8wtS1exiMQTa9SjmySsoP5obE88hBeW1TDcuSV8GCaPuC9BCs4wZrfN2a5GdeMTgW",
  "key2": "2pW3E6V8gtcmcKJ47muapFquwsTNxjowZ1sJc7nrsC2todpzP1qP9w4KwYFcLmqkTM5eevm6PSNC3bnt1oPPbtkC",
  "key3": "46ziPtrB2jZM1EPXjLvEyMwveqJiheproRkZWEi2iHBuHdCyjeQVw8gcmy9Vs3yxTMca6ScuwMUg69NJSewPQKZL",
  "key4": "4ksvmqDjGpQYYj3165dn1mWEeCqj8XAEwHmBSwfX8apZqRPL3omhZ5Nndgt6nb7iRm2g9SZiEc8PefY1dVkGMt3y",
  "key5": "58b6GPbMYt3YyTTYq98PN8yNBMccEFGDXeQUY9VzuJiBGZRJfuua6Ckyv2JPu5wz6wrdjCQ9yn5kiUTFRnHHA9QM",
  "key6": "4ZAdwhXnmgv5g9qMKdNix7o91gGz324zujhU8bn5t9tkGpKBNSQ8B16VfWYtS9SesECwZxzPpQkRiNVEGzMxme8i",
  "key7": "27fVTSaD2CD5PaUzWmgmVYTUoX17GSrZ79Grg5hVMrfncjaeDhy3AnikJ2EgmQ9pJYqU1vo7xHYqdsdQyx6yxyai",
  "key8": "22iR3UyjKjuiM2AcgC5LCGnEMAZ5dGgtKCLGyknvSkaPsZgzJ31cWuyMSvqsHMryzd4oQxdFgkcbdbQLpFDwbBow",
  "key9": "4nk2wvmwMPEuhYEQr8oNeuLN8L3JyMRXgEFCr414zQAVLdHPmUwqjWmYoX29zJmTFZLyQd8grzFPSTx7q8HSQDeR",
  "key10": "n87uEvS4eVPHexTbvLHsoUEqXa8M1N6YbuprsNUxXMK1pC1Q1p74Lyd6XGMBZ4ocZTuELhZf5CsQEBNxVDqbmBS",
  "key11": "3eip16d6mbx4M44aQg4iVEdSytri6Na8C6fCbijbof6HmCciTWkcBd9B2Lp7wjUtjGPdVoUGCeutKJooeSHY2cYW",
  "key12": "2ivACTmkLDUf7Es2WUkfhtVhEGYUmnkvtceTxsAhZoKionh8oSr5hKBrfTyCM2XFJ5eBPfbkbD3Aqdkp3WfKrExr",
  "key13": "4VNorY9rSRMg7iJtKNfTK4fRMDBNZ7p7nK65wfAiVQCzphqGCcamTqXpqQHzAsKGWqzR6YjhZLGDiLMX1nSXGjhM",
  "key14": "2KUaCM45k8k6L9j1AUzMpns8ozPP7oCXg7rei6DWrjFgiG2tvPpiHT4h4NJMGyKFotgaUTaC9pqj1Zx6CC4Jme5c",
  "key15": "3cMVXVPgnRwbXF5PQ14DUz6oX3qB4TiZHduJMsW8LApWewuTh4VegZBHdNqXAomDUihKYUEwRhy7ifn6iL1q7SJC",
  "key16": "2G6uA9PkDCyt63xaET5niQdvRPcxurtijf3pjoQCCJxNvqVMadj473aEDRWNsMY4N9gWxjYcDCnCCfgw4CdXhRNS",
  "key17": "RXo22rBsjV9RsABL52Fy9nnHXnfnzH8PxwuVto6VycjNXZXnCUK5mDs2JBn8PZ7fBD91LmZKR1nmef3XxKJp3aP",
  "key18": "3ZFJU2nZvMQUrKA9MZJ7hAwQJQVAU2TxUnokN4aSF1BsndKcGEpFKw6deaY6TwUNeCwQaqQpfdttnc7uuW9VsCJa",
  "key19": "2he7CRGk8HSMPm5N5URB3GLuzKg8Uk5ycN59kMV88JLkzYaLWgsdcQeScccrwzXGqUHqaxBMbgrWdXkFsYcyxHgU",
  "key20": "5ADjZEzXk56yy1bAWL1Agrc5rRW9wknH3Edhve3qAUt12xH9h9jkDCdVSvcLgzkYJJSXi2xDMNKeUyrihH5vHvZ1",
  "key21": "5ukVHqQhYWCFp7bcpcQqQTH6JMsbCQPJG1AGnmPQHc6MGHrm6LRiLtvm1JP9tZBzcmqh2mPCpos9ZYnfuhHeT52",
  "key22": "5ePs66LwLhoPUsHvPnB4VfnuDSzoNU3CzgEY3DKFE28BsXX81LPqbW4RxTo3CtxTWdStXdgpdCzTaHoM6wZLFzQu",
  "key23": "5Cdso8QtqWaYi3V9uHJWDBzsw1rY56DaKBE629Ko7ytE1FKxgzrnZ6qtX8sqjv3prE8hdbCsMjTiynS29fgezJyp",
  "key24": "5at8eA66qWmb9XURSLxhqvNWFZ4PB4kZ6PHF4UET5tPrGhzCBwscFFgHcZrbLWfaJW2UKcst1tF55n1pnGUMKa5u",
  "key25": "2GGvikAs17V2jHrifAaHbAxFwWvHr9qLxK621ut6DCDdUYkZzVTYQgCk21UvhpfCfyLRvtwJs5NCbqTZnh9wMsiZ",
  "key26": "kJExvUvrLkfAMbwv96pNFJbRuqYcsAzeZZjUQZ7P4HktXTjTHwy48Y7eGCou4YjL58y41XGbvQqcefJD4vBdqHq",
  "key27": "UoSFFUKjLCkHtjwAS6xEGR82EHvqc4pTgMdur29BTKzfx7yrnGSH1zMDu58SKFEPWMpZ9bVWmFDxajd9NyihhZn",
  "key28": "5AT5WJ5eEp4CkMndVeFu5T1SHh15kap3nRT27GxWkiSRWfuZdYA8DmtZeBM6Whc4YCu2ZVYMvfd759cPjFdEnDtN",
  "key29": "2kxiV7fMrvYXQbtw8H3eGC1z3AbA3jeLdBWsUx7bAwH9CeYb6wj2pXVY5hzHcUDvX8fUE36iq6XsbaUA6afNyZZL",
  "key30": "35pBAr6tTqsriPFHSWEL1UJr5fVr7RAA4Q9QMFQThzsVmCvV4dEY2WBzizHfk4Mf9eR6E6seBKH6nLPqWFUyxC4z",
  "key31": "21LLYQcHauHjhivKVmYkYqyS71PQ4yqGVWwgRYHnjtorGBzdm6HdK9oY9ZSkGisvioEe2zFQoWgLutzGj7L55fqg",
  "key32": "648iAiRRxH6hsh6vJcVjshLvsYs8kuFLTHAM6ToyRcfFSJ2LoRSdXyD6UeyxUyYpT7h4tk2wqwmotmHV1z2p989a",
  "key33": "4AadDr5FzPEMQK3TzHM126BZPmJoFhbw6o2q5g8uNQto9zPYz23V24nrswxmNDgSz81xwwZvYSxrLfPBYfKtsxJK",
  "key34": "31qsx4WnjjmDLDgdM6a1TJNw5S85DLPGxGKzmUyvuUe57mWzXSY4t7QWZ6uvRyonoMYCXDeHwtsZxLWf3yp8frd6",
  "key35": "3PxtxCRw3umtTwRx7p7SZH8jecBSjqsY8WgynwEfwwQJqwrP7YdEim1gwRzXyMvHPunZu99xqeGeQ4hZ5B8qf73L",
  "key36": "3ivSsweXys28PHJN9osGDZcjjCop5UoMTre8eqBtZQ2osXAPi1EScgQpdQnUaZ7BvdtTuSkdCqe9J9E7rNE4NRVV",
  "key37": "626smhLit96rWbv5VccUpnFf6XSq4WWjbfuiqcKAwMjJyextedJBWzCi6yqxU3zFsgwLyHoQhXn1sYWiZNhZm5HE",
  "key38": "2F3UKdW1wbRPVNLYHxVpW4vxbLL9Hj8MxnBG41HRKppBGC44LKUYV6S95Um8HfcXdaQCNZp85Fzg3pu89t9MC2VZ",
  "key39": "2k8PmQcuBPzoWk8S7218jYCBy7LttqmUgmBEoe9FyeXVj7DXGaryCjLDHG686ARhghu33UJnfW8BkksHxkeSG9NC",
  "key40": "3Ubv8FGqnauFKXMPSQidv1QKytcTyYT3nd36vm6qEmYzjdn4DAGWp1pfZLw2N2SRiAbftsSc6hu9FF4pHuMKDe3h",
  "key41": "krBcgXnqEUQ3WnwdRGZhz5bmPB34m1qkEVFbua5VVDGNRN3b17ttWbknyrwhPC9P8XTvTfYtLqDcWnnXaPKTzdW",
  "key42": "GzZYm7ZedKDGv7vVVAqxDCjtYy8cXM8Px5nVDBvJVDV7u13HEaukmC5NmzjLcXpj3UG3V3a381HYfoFwmRmNffq"
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
