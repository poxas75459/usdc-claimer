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
    "QZUURkXsGPuHPtn8tuZP2S8YVHgfPGaEN2zVvFVrAPP9KqH9t7CLLeYUvzP6JbhQt7hmfQjNSkR74bW97DGqSse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YD6BkZcf9oLTQSZqBG8fU9pr87U2BucYfRPpJSdk4ETXoQf8WfKzWzVGaEqvKPhru9cb6aEXCdh3GPSXa993K1E",
  "key1": "5e7crdeN2XeDvQavZ7KYBqWr8dkyuKHxJcdAcGggGWVVyvbn488mDKEmqHjFbqwsi8y4yrw2vbZdxXuvsoRZYY2W",
  "key2": "4uPbTai6ADZVTVQzseSdpvFhrQd7tM6fLtgQq7uPbDk6mMMGbEzHBrRjVcMHbSQTQ97xJm5CKvnQntdK4m8TzJua",
  "key3": "5UHyF5puqyrh6RFj2ohbX9mSDg3Eo7tAx52whAfLvoCaBT2wx1ninYNaEFqMxVJC2QYL4BWAwowCBtYJZWzH8hfE",
  "key4": "62ftYKgnYr9cKZGjHRRhw4KcqJhmbdUqZ6C29zwz5HAcoifcbiDbY5iyRqMkem1umwSdwwn69XvL8sbUKBmGzL5h",
  "key5": "M6EgjTXsKxFgdBUTsVMpcZjt6tvmavmxFvdCiJDGupWLaiukBwpoH7tK2mEgQiAqJ5ud9xLn6qot86uC4NHuaG5",
  "key6": "3AV8broAaggw25ewiRrLjvax5psoQEZeht81x7ueueZ2mpsWDZrAZFvxw9JcEW5pfvqRHS9DK4TtrzDhDUYeDeob",
  "key7": "3jYxyp68kcUchgsUGscGHQz5585yWGupNewFnaFhjXjDrm62LNvv3vbf35NuNMjF1BFQ1MXWhKuDPx36NpN4goHC",
  "key8": "3zvA5nzTKschdaWCb4PgttEzvwzwi93JnSTSD5btdhFmQitCZqGmmBbH5ooVKvNpyUGvg5k2WLLyMCy9Ve3uKNas",
  "key9": "645UWKyvmMjU42XERjueru4AJdibuS3hKXZZFqpvkT7rc4SmaMCBnUVvzjjQQyJQLYw69eiQJFgLYebSXBwK6KB8",
  "key10": "4Kwc8oiTXguT7PZ2E5WVnVkLorgYAwSLGbJpyk7UPTgVqsCMAqxiJR9g8YroR1MVuG2zt55Gzs5ijevvV65qSYhd",
  "key11": "5Ry62UqXtrHSoerqZEcx89jB9bUUWtMGLbJgCzexNsKcJGU9sC63Lg3gf7bx1WV3EE8nAaEgqfbtn5iT4igWrjDn",
  "key12": "5KnBpSBiJ1VTt7d8xHLAotRCba2gUkHoiFXduEZs3rNUFk6QhUb57BGPtkPA1S1FFrBNYYGDkYm61DAKtqdaY9q6",
  "key13": "4RuVT7EVU6DjqRD9HGA4VVWX5WBeb1M1Z7JtRRiLKyCGoUpRyfX6ga2vrsMRiK2Eehx6jjmvcS3dqZT1uFgX3nZN",
  "key14": "2tkjP3WB62XPmS4d85mDRgZ73uJV42yDA4udbm3F4isHLes6AzD1xgioQKrdbnngJzC4FVHP3bK1XQdPEN8Xmg9i",
  "key15": "566AsNsR73Wj47zBKMuLQJNnpaLzznC4ZQ57j5jCkZKfGRuU7Tz4S5WWid7kvfDU9XgxAveMShSkmHU1nkQhdfW3",
  "key16": "3E2XxKqhT3NtibutkH5sfvZVjpkeZqTsYFYTgYwU5mU53f8E5NDdoJLGqD9kkqp1bz8qieNPFVvVDVZrgf2CDpPE",
  "key17": "22k3n4uxgp8BXV9egzhepYQ9ZG1ZAsRJicMAyoRGA346SHsnvWR36RwCkSmcaaSz2ZMD2m2AdzVQyuoaaK1E57Qu",
  "key18": "66u5Q44fsjDXZm8DmSUpx5M1tvNitpxTmuimPVA31URsKSB8fvHfPcuSdck7kyYPyE3S1ktvyfvS7sgn3ikVsBHg",
  "key19": "5Vab8upU6nxeF2ZmkX9enbAZXtyiSW5s6hyb8XhCxnwrys43GgZ4Z6UxqH252TNwtCvT1qXztVTF6jXMUvbA3e79",
  "key20": "2ZLVL6irRrUQU1aqLWXUFvy5TU9Kx6cFUqnSRtKkEvJWrfGc92tqrbpK3JLLYij1kXSLezYDC9YxotXkLn2ygn2X",
  "key21": "4unPYHBsC25NT3FsNVLrA5wwidJZ3nNKSuyHmh8i42AJBzYQhCB9uYXnqtQ5GNjbp8ZsZURSVZXTsmvGzo9f9uTp",
  "key22": "34Hw6hT4TCsSF12DpjWEFh8n9GhkvBbKk8NGS6ySNgwQFJZWhzwHa6sW3zZvbpkyEgBh8VuhGh3GCDteVDVF5X6A",
  "key23": "2u1dJzzyRyB85En6CNs7mBsWoLb5Y4MLzkDntVpBsqMJBZtHtNuE1qX9Mug4SEwsCPvdTwnSzX1X9LNYgxX8vz9L",
  "key24": "3NAp9D296nK8AVQV5uggebnZobMGnRT5ThewnBgLYz462gvpNAWMim5eE7xPw9mrspCannnahh4rEcd8UibLRpt9",
  "key25": "2ub4sGKaSu8S4idSX7rVvhKJXs3QqKJs5gTHmXQqAe7SVByQY78fubWnwdS3fzdyZsMSoRHvMV91Y6DX4oBGEmwY",
  "key26": "2aFDaDLEcXrvDWGQT8iB6LCywUNXAnvnWopzqAj9fw4Rx6DaPqfS6MS3bnFzSEohqZ1dTcDBCcTv2TZKpJQeqqv",
  "key27": "3m1z7bo4srmDQyhZTnPHPKuWnuLGUXvXmKL3aTQQ2wSKNtT4HKWTByr2LeGyMiPfYZTigW2wnN835BvQ3uXJmvao",
  "key28": "5SaThpm6C5oc7fjt4BHLtfAHkgCg4PWBDgNp4wX7FSFH5GTG2vZtmRzcfn8kPAzx3AFhJuw6mhY3pWB7VHefAmna",
  "key29": "2NW4eN8XPsSoUbidBYa5ibFfCoimYYAYuaT1vSyBVddniMVYkvutEFqfdxRn4fBBsnQXtsSXLJjjqknSjRnytiYn",
  "key30": "rdLMh38jYUmdSST3HoRRkQ4DTky7GLSZNeeifQqqo1PwqTz7HZci3MZnNYqWaRNfFQY8hzmuK3WYweSNfGVoojj",
  "key31": "oWdoz8LJ1Eg5Va4fLvT8r9dMas5v5BgfRMW5wH1cYmarSLZCJ3pZTaGY4vYiQgepw8nzEWrMARUqby6vdHNAYGu",
  "key32": "4ZyaqjwWzPUkY6TpeAVGmwHi3zYzf2LdjCegz5XUssaGYHJTfycGus25xpK6AjASstH3viJfFiRWxAGX2UYU1Fzc",
  "key33": "VACJHuFkHjiG6CicRtE5d2j3EkiUyAx889PZ7DxHFPs24wJSeJrzYfqoDfkzjH6bzzZoEfvNVHkcgi9oAaPDStK",
  "key34": "4ADsxZ3mPEQRhgDYxsyCYrgvx5EtNvAi65iZA6c41tiuXsPrzBWsavvG8HL5AiTK2bUgDmJG4nR7ZH7AGm2LB3y1"
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
