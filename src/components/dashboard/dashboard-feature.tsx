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
    "3j6N1cnm5hULgDiQUHEa69b5EEgLckHJVeKffdyPiw9mxgDpCqxstLCZV4Bw6U4tvreYR8gk6mqq1GoHbN1FM1gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54CcZVjB48KsXkoBJg6uCWY3jEX3sVvRvjHN5HmxmMDyhLaWSrovZx9iReDp7m2SrSzGGn1aa78b3qLNhYv3Xuei",
  "key1": "2vzQ6tJoB49gsqCQqRFUXNExrY4NAuzmV5VMdpkYKWXVmJDvMS6t7StanTu2y1BfyfH3XUykJmEcr4e8kdxqUfzj",
  "key2": "3wMmuusgssvFRW2R8P4fTc3ARSxc3xdpc84DSf7z5WwymBwHVy1m9zJueTh5pN72JxJirkW9rEGP1D9ohKZqTHft",
  "key3": "JtQTHJKdgqpA4j2FjYoFVRJTqF2yCqJwVrfnRp124neDxdqNA3SkevuUK33jCecGqdZLB9T3BVfi3G7DGnqxbEZ",
  "key4": "2pFPwzf4k2sHDWtX3xFeK1tF7wHpQiW1sSP8tjkM4iovemmGms3hJYGWAue6T6FYTDoXDPauk3rBjLgpbegGC8xP",
  "key5": "4VR5NF7J5cuXZqisRAX33ukEsAfoRRrHywrmdCUbY3ehnU8uGLvDMaMzYqAfHGr26SngbJgNQHRP8DBMe3xHUT5J",
  "key6": "51a37pbRBi1KSThMUUVbzn9iXdJggZHf1Jp2iLLwUbDHTgPjqJPb2yW7keJcNLYpiwLbm1RCZNSQk491rALkZ4rW",
  "key7": "5hfwQVaZaAuw7urcGXsy3QohZgpZd2xDipCs4WfqpCGuj1wES6PS1eaTU6RFNk4eW1d1LTLztrpj7coKRkb4XFuS",
  "key8": "64pPTPTSXdXvWHse3vF7CqdYurTogqA9i9mrN1dXJgdi9upjdube6HzSwijuo4eCJEv1ZFgFFPu382B5hHhxHEET",
  "key9": "5SBLD9H7FoGj2N2cfMK3KLZiNK2YxpkmB2NqPeErGdxrjkFK5tHDZaLXj67vDkHgDe1kwRwFBprT3dGGa9bmZWcF",
  "key10": "5Y29HkJXgA24vQM9FeTgBWfZZymNHaFGdzaktNwJRQ1RMZLCnh9jYW9ANuQkmED3tJQMVugNNGThYeQGjNKCnXZ2",
  "key11": "4srvSTXwFDm7DDKwXLnYNAEwQ4TfF6yYVQnjSBtHsgu2VgNkGq6YyGJS8P9ZdL3i1QpGaHWKxvANfCfuByqgTfs6",
  "key12": "2hqSSezmcPvsSxgWBq8fDZ6QzTs5rc9PDWVxbYMLP8zqF1fizN8tvAw8t8TSD9TCugZndKNPpHQmv7xZvFQaW5o6",
  "key13": "DjuvfcqGVpdHFf7epkGEcUkUei7wctrUyKDsJ3rpkRAuRMJECiHND4Z6rKYKdA7YRqBezqLeL3BR5xGWPkqXCRx",
  "key14": "5m9N2VsvStghh3k8ptXrZi1UjVmXgSgTYyw2tZxqiwQmXSsE4aMNHMPrHMNST1KZZX7qVJALWCn8ZMrXzig6WYzX",
  "key15": "5UN3NiWHPXhrmVQ3gsnsm1qEtTuH7mFvsDKLiGfTEoqLuwPkYneQab8mHPrUobdcqdjbCPUJ6JUcWByJ5WUSrNgS",
  "key16": "5UuV4Ncfda3xycR2zNH5dcZzNu9bS7ypP2rJE7URy6yh2dW7YR3aLNDhyWtnuu8VK6krfuUGSBfgYEsHxUyjfymt",
  "key17": "5RLpZ882NzAUgCzBaRmm8WL47XetF73rqmJDALVSffTzYeE9bxteYCRNBJD3mNfyG8F3np8gbugjQQ7Cwxf3huDL",
  "key18": "4dsTEkTT8KWPdPGFuvgpisTELLuXNC4hfZVd4Vr2TbGUtSYPnBMu5EQhZ2ckkJ9nFgA8CzyLvMAwHS5HgVh3TAPe",
  "key19": "4APvXSSQ17aQhKSBnconaNpuJRVBztdoczF1LAUh9odNxbVcBSRsKfktbQDRnhAvp6tRZx5zbkDvzLQsg9NF5wxB",
  "key20": "4bMoDcThsX3boy7W2i8Gu2nMwTrEGWzBc1MGe6oEHWDjyGnQQUeV3UbAxNuHsdfUxG5BA5hYoFXR6RCXQBsc817F",
  "key21": "5LDtBGH2cKTbmdejjzm6wrpkNpc7abykt2sSh3cQ4QCLUWjuFVKzauskQNMHMJhSX84NJ2vN91qy8ESDWihe5W7D",
  "key22": "3qqZcuBykiC155VBet6hZLn73t4qzk1CDr5D1LQGWFDCGyyqhmrJXDTu6STN1gE7pvMzZ5Mwh2cmswVRB69523Y3",
  "key23": "L8ag1d1yuLHTHWkFkHfbBk1Sd8WUnCrYfiG89X643WntfsAwnNBKNrJvbEM7uvefpJNXvQRJ8QnABcT78Reiorh",
  "key24": "3ygmaotKdJoe7j5kMZM8mMozqJtEpbBkeNWzumvchrt4z1GrkLTJ6cKeTWZHPZwmoGNzz4XPPfhknqcS8Xxkxo9J",
  "key25": "2FBF1a1SKZL6FGB5gvFPSQLj9Kr9jRWhSd4WZUzeKGKcdJzNJA1ikBi6Bs8qHpRSQbj7S8eveznageuuJs6Kxdom",
  "key26": "3pz3B57VTiLoaGBbqMYFJTeHHPYX5yh8EAfooDsnMZgm4dh2mDCSSq9RFnzGDUHQAezsN72x6M16VGDbHNSTSqyM",
  "key27": "4CJNXApU4zWeswjRke7ULrzPPesV2i8qEFvNb7vtoAzdMxGsjyo85PGK4dr6RiHpaKNPZVpLHYjT82ZRFEsgJ7o3",
  "key28": "4u7Vqk25SdKAjq9Nb5sfUwX27FPaEgyQBCGzWSWeNBRok54Cfygq5suKphb7Ap9edSbcyVm3Z1rL4LujkmR7zeCU",
  "key29": "3bUFnt8Ckxgze3kDNX3EfmMNRSk4kspZiSPVuAsPgkGSKD3s9aLyzU9u64V6JMX1QhEMH1yrcZSfr5x3oTVXkTSW",
  "key30": "5e1y9CqMRcHQ3XFrnsiLqsRMMfPzMWrRTLKb4CRJg9p3CEnGmTjZS3mY7XuCJnQz5MM48bkrLtX1Ndoaon1HMunY",
  "key31": "5brRm8GD6p5DsKppwpsFFYxCBtsUgKeN2AQofeYbr3DvYfAywNfeh6qoxM4DTw8Yo1iwZwu99roUVwFtvX2VjgjE",
  "key32": "46dDf2VmBHYPA9tsXvLpPT2gNheVgqj1ssdqcTcJD3UMPi1vUgzczQy2qyUyG5bX7LKQoUs9mmzjc9B9SkYLFB2V",
  "key33": "36QXvX7gdnTojCNhB8DPnjtLfh3Gy6bDEnasnyuxta3iACTf6sFvag1Vftc5CZ6nJaRJcZ2ekvsAxFoedLLmDT8c",
  "key34": "3HDtiq6wMZMWZAVL3bw9J8y3hVSEDsdSrLUuEsZ8qMQ8KiWmqjE2pZsgktPEfeSgZyL5ritk9JpweCkQ1ycBu2D9",
  "key35": "3auT7N4NopmwWkrucf7Z9HsDyymp4T9T1rfs3DdW9fv7EAjNhNXV8Cp32pbGZsACxFPXhQfMrzxKM8hUgx9GERmc",
  "key36": "3wzYzHMdV7MHbQp2ELaTrz3cyPp4dGGz8xKZwkeAHnAKKpBJwGQjicVHT2H3wSTaTWXuNUy9dmBmafzx2YGHkPb"
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
