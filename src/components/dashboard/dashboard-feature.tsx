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
    "5SJskSbFMzyoyF7y2TuariK6YWS9y1zGy7svtmMiF98HNvkabUHZ8jxXfFF9SnLP1etPJsp4ZAoKvFmCbd4FKpc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUR2Gp5SVQnTxypQZEs57L8yrHJPDi1yCYrrhRdFsZQc9ykrWneURieNUH4AKHexWt9pFKdMrQida8nySM9PZSS",
  "key1": "3EgiokNQmzqVWtrXPanyDFy8wRDNuJbUFSzko6ais5U5TGUBi919H7Dvg8zkfZDoC7cat28nfNEu38vxDFfb2Sc9",
  "key2": "5fbCzg4xmZyqdpZwRcNU35KEWvqXTpBJ55HmaSVpuM9n5QLU2iJWVEYXf7wc58v4RfJyF4nWanPeW3WHPJmAEVGK",
  "key3": "zByQowWw3mrobbfSHHKFaMd91gwf1JWPz43dr44YbykkGWb9U8NNjeQ9JxzXBXky6PzKYhhFhZQu6xQXa6FsWs4",
  "key4": "2L1KhudDrLPr8zR12nwZwwRamBnfbsxMuDG8pRoahgJNP8QYYEsvbn9vetFgrBK1jpUREowU3xQMwFjNECNnrcEv",
  "key5": "2xmyYgXCypXjYjettK9SaeeVQNPhGUfyRfk1C1S1omuKzhmuBRzWjf6ugBohgffAjdeYvuyYZmEY4ueWVDNR7674",
  "key6": "4Fsh4AW7UUB3JN7HNsXKS3nCXJ1YUa5Q5d4mSWDboFNbVZ1Zh9TYFyPM9wFdWH976ug9YGqpNSB4fQHMRzWQ7Ft8",
  "key7": "2H18bB7Eymr4cN9CdxHY23PvA4eG91uk6kUGjSgbKFirQAk32zYaFihZViCzehJVYfCYWuo1HNpAiUzvdBmF66u6",
  "key8": "3UFoePy2CJBKygG8ycmF2CShsrUTAsT4YZg8MdCyZtkGZnaBAx5ioR7ekNFPJdiA8y4uQE9LMWxEMKCJW5KmpgpV",
  "key9": "3BWtUjWD6SEdqiZuRwUF83jFb5NiLxzGDBi75awx7WBVtDkk7XHf3fcsCRKySuDPmgS3Er5rnyhPYdgpPD3shfWX",
  "key10": "4f3nbcbpJYjtKMTUUzcrWcyggKr6ZqxUN2txUVaSF6bn3sACTc4vgKEpPSRjAeZKVPa6qPcEWbZd4sRWo4n1EFmx",
  "key11": "4gs3yogyo1ufoud55iLcgoJzkK4zd8QC9FU23PFkYSbNwkuvnKngs8bzZrvebvKSz8BcsXS52A29topk9HzfJgj9",
  "key12": "3CqdNYF6tPaR3dNArCeUbD1ScuhkHassnLvpZzd69LmsEQDecZFvndAH4Tt6iU3CnBiGRijuh2hUArRKVyJmnJqG",
  "key13": "34T39goVnLUQk3NxK3x6L4L2Bb15XWMMgz8cJnLqNbx3ME5kP57u6uyhNAE4sGvwyFdjV1bwXUqT5sU36K9rHfYF",
  "key14": "2KHwxtMRwL7y6QrDEPCioXMXcaT8P4cxkeEwPWQVtxeSKfUC5D9bXLL4wrLhfEPW55d9oFzDyYMu1bz67riRubBq",
  "key15": "5ei5DdtAxCDGtc1SJHNKzXbzCZQoEwjCN6xAiH24njnHwBoMu5qPwvEDfkU7BsKp7vEvV9pVNw5g52Xpa9aQ2uUP",
  "key16": "4WpZSTjymvPFpYw2iE3soi6WyUY35io94425DnWuQ6qw4W96CFv7yupBDQi8xTmBHdDqp7GtD7wsaczpDvQj5JtG",
  "key17": "EATTFjP1muRW4uHc1enYUKYXdLn3b82diXHAo2kGhzd6tZdY1cxKt5k5WshvkH8vSQF1tVfjqLQCHsSo82711Lj",
  "key18": "3kY3PwJY5kDEajxDpujCJs5JaonQJXBKyqKJZv9vWHXCUQiUPxSL98zY8k5FpsDyWdnCkmgXrSTuEwcxCx4WmzgE",
  "key19": "3XRuqCrQUNC3sXL8HCgGXmgPizuCRaHMpArCxE3rm5MoAYbspY9uWPZ5sj6H6AMHqvqfNyyFTEQS6qV4d3fy35Dc",
  "key20": "2Yzp3PFZRmZTPKNcs5ZwdYchyZxuHTwzEvK3sFPVqFKQwfQgtEgFLjv2iroy633oxWi6tVgmwTa7ovUUmHbcA2uG",
  "key21": "2AiNN5T7qySrXA18gBvgxUjUKkAqJ4XjwnapG3N5YkG4GwoXSrwvdAsKqLnPLNPMvHqDEV6WZwYQ8u3Z5AAkFqEH",
  "key22": "dte7sUFWaFMSakCCynpzvpZpa7TYcTinyjYEV48MXYGHCtgAEmnxrGh35csiXBk9ohHi4s2scE5CxpVBZZCkbM5",
  "key23": "33zUkAqvHqq3eUaj9RTq4gWoYz7ALoUHZWrtCJC3tmhFCzvriXrQPu4WMrf8t1Ms172D1oTzGAs47XvNEN4LUUba",
  "key24": "2ET7mh1TxeKuqukjFeWeQ5sMj63RaW18H5ZSjSzbmqwxysnB9c6YzAmScKEtWF5pjjuEPRTDDAaWtzcAmZMkEBSD",
  "key25": "TVe5m9cPV3UAfRucTiujRBz42NtG2j7P1QJqypTeqYGz7FU3gb5jphNQHXYEHsZ9YD94LC3QtzGkvR36kWtCioF",
  "key26": "44ZcdwxDMLmkgbHVtVkpWZGqo7iuewcoJSrL17XZdksTn16JHZfseDEqqacizibdJFe58CvKmeWs7Y4HS5H36JoD",
  "key27": "3Dmwixs72ChqSGGrqU9GKCaMbcnhounXs9mAM22BbmrJBvTiak4tFg9NZJat4S8YNpgRdotSBBTDLjdJ96UJ44cd",
  "key28": "2GWrzTP8X7ZSX8F4bUYVPUT2tyWvZPizvj5B9mCNwd6ydVnDoxa4UaANEPdMizhk2JUkmtMkRx5Q13BhwP3mZddW",
  "key29": "3ULwq4yqSwcxUrXiVcXPnT9hMpuZ27jyQo469MmHrRFwr6N1C8uf3uyj9xs4estRa3KNYkpR9hW8GiPQG6ni1ymK",
  "key30": "3xVZzngwrHJ5HxXUmcwS3ymxsCXYY4dGZGdaXQ29VmjffnoqhvqLh9NJLZeYePDLFVMazfY57rDbtFdYvwY5KQ9T",
  "key31": "4Gze8JyPLZsgJmNubquiBmLwaWXUqb6mD3MnHiYodZ6E4ozG4UEJwe144zbAwXkwPuE2k1Lin3XskCA3b4BpQZt3",
  "key32": "3yteRSPWANNwm16uu5Uids6HmvAtdSATfi9zKkgkosRiuRYz7wgVBXUFhwTR3eJpwgjX8KVgi4FYXRQRjot6nLsa",
  "key33": "5syYvinaf1n4puCPypvYw4yNRBJwMZqWYEGFwxHGaQRdw5nrqzYF6zpTDyuYFqn78dX3jmdgvBoTTYmziNjtxd2x",
  "key34": "zbMobwumELCXQVXjvPBPgYK3z6CsQR3CdAGbr4ueJQM4GqKwhMjhw2m4z7j2jXryb7shuthnsgBpHH5Kubz7DNh",
  "key35": "2HvZgeEf6WxszdD4RYKqnF2zchbDjnRyNaArN9NDgTrxzEvy1RUM6aSqYjuo3AE6gCZuddEwckbrYzPYrWLR4wv2",
  "key36": "5XxqWn537rZPMccQe3TRKJeaZD4ZmKy747mWxJNpLvfLbwZBsLVdiLRgThzHBnhdqa6BECe5VcYppB4wBw7NG2cL",
  "key37": "RycSUwMFZnEx9VtEihw2eRYZ7XJEsvYH4gWWQYoSqQPwQuMasfcs11Ec7tpDHquUzri15nTsMDBf7DoXRZnRjRG",
  "key38": "53eMtoQpNz2WeCT1yLwFPyvoZ1sBqogG4XB9wG69D1jMW4yAn92QL9qjekFDDkktTwrYJUM4ChYd1k5Kgs9bzPXF",
  "key39": "2APPjLpVH2PNhSHwzMEJeWxUD9cRj9fqYsmQZcNCYz8MJ57PUAuvXxmBfF3YSFrc1T7hRqWGG8AJLcVJ5vCofMGG",
  "key40": "2Z1fJoaTQBWqRwm8taVgoKn4xw9Ep18Ev5jQYcF8hsjJxs2QzZPFBvPtvRRM4cJRSXHpTVNP1rWDxvkNYqCbUhL4",
  "key41": "4tscY7H3EhAp3JEe5ooY8JvdJ5FrfGQgDSuD2CfmTfiLceqXU5tT2UvPPGcjtAXsnzmEoUyVUiKd9Fk3BfHntmrR",
  "key42": "4FDrAYahP5qaCRfJkeTAEkyaGbJu8x3LER2jtvB5aKUSYiD9akgq71woaUPdYToTAMmUqiagnDy5nnbZuLe5eqKu",
  "key43": "2uCDEpTRUb5dhFFtVNHEWPNc1tpejphJuPMiqEerU48kuxqQFZyYHsVyN6odVqfFuGJQAVvukhNDGu5ZvaMYrTDD"
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
