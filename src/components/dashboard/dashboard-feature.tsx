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
    "3am4F8A6V2gBGTgkNKftBG8v5eQmsrpoTMk5pBqwoJT2YR9zKpHUuWVkk4nWDYfShcagq7SJsQoG6C3ksmjYeuhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEe5XVWs9XuhZTYRaWzJpHey9rTBvq6LcERJfb6mK6hgZmkqVZoQ95e3rMpbWi9dKYcosJEjR4pTC5npvEAQKXB",
  "key1": "2JoeK1Q7XDnfphZveSoKZ4ueu8v3ZciBMZbSS6N5WBLLBpQGu8cF9ALaEiaNecnr2PC2bBQB3EL2FuA7nYU4r9Fc",
  "key2": "4xqZB1rK1hpDuNzfpdNiyiVzy9xEUBnnaMnhjY7C1rHTTpSPbeChB68FBFFyYRDT2j5zFsMehgf9U9cswWGrBXk3",
  "key3": "2G3mmNTrNLB4ybLqyuRWGUy2NpXaned3THxyauZvv9wvtwhnscskVXXnMHvus9R5hTVFMkhJ23Wv3ZLrep7peJss",
  "key4": "FojbMNTGZs2df5zCSn9NnEL6kFraxEHetattjHt1Wn5xMj8YDk9AEcTsfyQRBLG74bQMfQr26tX3sL6eaTfaPGX",
  "key5": "3s3NuVwRg6E3r9VCXepnbSPcfaCTjSetTqo9mzpGY1rpy2jkvYHbjtDQ6dCj2XHFNM3WaGYwtF4g8Syoy3xKa4VT",
  "key6": "5z8fNLZuPyMFK1ZrY61aaEJ6EGJH3z5kkcfA73JRy9HcBnUu75KMi9FPePcU1Ai98YWfV21DKTUrvuivtAdampNJ",
  "key7": "4Ax7vjrRWqn7Di83EVswEGFzQdo6ydXe3roNoUuEN38chaQXTwDEtLrhKfRrRfupvHq5EjGZ42ftRxadY7wyoxXY",
  "key8": "4j5kUJwkjPJD5CfQiRx7uvYg5y57tXZAeBCxc9uwTFWrGLvWseezuW3sjBk6N3jeMcSEwcqAKPrQ3nQmdAZaCz5T",
  "key9": "3Zu8VYALjS9kt3uQmzatYYRkMrWPEu3w1L1wkGMFn5s8Fk7E4kaJq5UBPWiapEXYaCkx6i9WFFALoQoaR6GoZtZw",
  "key10": "ZLfNCEiUYeqj6Grx6riboxLAUjrBtbbnoPp438TboLy7YHFzNkUAujX7qXoPgBYCc2XMWz81J8vY3aPBKSQp7Rj",
  "key11": "5ayy5cGyK7MrV1Ee957oxdhUNe6r8fhbVTxn8bKTDQW6ZTUF9bZk6aSh2CAByKAmLrrQrfNR5k9cmjf3THCvFLUS",
  "key12": "B1gHujx1afXEBrM67u67ZuWc4gkH2meKCva9zEpXcbR1na1rthFbRYzgiU9xhSuYsTWHpaUT8REc7EzYt3ThDoU",
  "key13": "62iriybWBbS5oQiu1sUj21NXi7LuHqmiZDSYocS8xtvfLRMtjBjYmq4MtjBURKFNs47ccHyfbtArxXXLPUQrC8Zt",
  "key14": "R3syp1xYGz3hoNEJHVVtW5AiFG4k3Np96uTabxuKvsnT82mRx57KyoMANwtiEkYfvRaZzmWCATkRigBa81HxFiB",
  "key15": "4s2u29m15n3hze7CZbzoNTyYcd5LWsoUprUQ5DkYEthYNVccZVr7WRrZQjB98SpNzJDELzWmN5iEk24iYmQ76WTm",
  "key16": "2rAAQa2zcbPeQR8M9X9eS4VBZ5ySmvMENbbN3S1PG4xf4pxrAUa2VGChFteW8fpvVHGL3f6ZyfAQwtZaoC2afNMc",
  "key17": "56YWLpMNnAaFmmqdYrJ1bLS1ydHpzptrpja7YAwu4J9akH4wMqRhzsuZg66beaAsNHLNjaZ3z3RiuZEfkoFg2kF3",
  "key18": "jvGaN91Jdpg1eNYAf7UA5AjtCm7NFMnsYvSnEUjRsZktQULSPjaav5eX4WR6F2ceouLFgFM8FTqdH2Qe4S12STM",
  "key19": "5e4MskGewG8LA7E6bD6wsNL32vMkWz1xLxGfFb8qYKeJnYAwRZ6oNeHF4EoJNUgcKctcBt2tq6utGs5Sn9gYAUJ8",
  "key20": "DWCbLsQYY96CddGDq7y7cvoV9xYB7sYc4VUAGMc9j36z2z1TRsppoje3cfYpTPzKxrXQkY5G11FHksKjjRh9DxN",
  "key21": "2SJnNct2Dw22u2wDbKcVQqqt9rt93vZEXR6RNrV6wQBDEEpFQXH8ojxPovswR23RMJtswufAeiSdEirseMbpXmB9",
  "key22": "5cGtCLh2FDPC6gWi8d9rPHRuuu9TUk6TzAKUzSinuDRn2zCora8LN69YQd5GHAo5GM61UVwCwREsMHqjAJRHJzSh",
  "key23": "5GqKAd61T4F1NaNZfJ5VxpQqbvboVc1wDWxjVKmv4jaMLzhZry8gzA1MJJ6Bm1CfCquBv1yPyoRVhtNUwdy3DCwJ",
  "key24": "3uC1iva9rnxyYHHVkiwopgafWSbggHEmdVCmwUGCKMg8qV1h9yHZRCPWNeqiKanD74thgE5YaFo5MXDeCc4N8JjW",
  "key25": "3qUfUQZqtz1uohFVYziN9xNKuxdZxzgMosKJ3vBB1f4PPfpib5MwkJT8ug4o77WprStJ7qwemgHCULCHsJcjJfC5",
  "key26": "wDZFV4vLEbbFiFUT5rhqDxyZXh7f3DZCAaMNdMP6q3vEduCTjF5Qp2ReaMuq1C7jBxybBazmv9bswKCtQX9TEsy",
  "key27": "2B8y8cxxBzSzcJsGLocezcWJxGS5r81oV6g9Lc1PBrjrJ6pjCGWJQcPAFmmGPfi4jm3bfqvU5cm23orQ9sVoHnqk",
  "key28": "YCwD59rxXMzWu3Y157TWQdMSa9C9cKAK2LkWYeFbAs7QGV4WSrB1jaTcEcsMfQZ4Q1PRa1nNtTWW32hueFfLo7A",
  "key29": "5LSarum9S7mGH1eLddRL9PeEfsGPMqSK68EwqsyZMTkBgGH3uStQLe9GHLFWUwgmyZueeqk3U6mGzno64BannkEC",
  "key30": "5LTRutx5qgeEmzmHD7JdFZBAZVZoqeeTpdoGN8K2k1zihvVjvxmtg8u5v8aM8RM255LExANbTquXmRLFjjzkNUsG",
  "key31": "WEnbQzjeeLF3TZufXwxgUTKJWqEh4YGpuug2vgtnLja5qVyuYGs355LtBxDFhF2AKx8uymUR9dGt2bALZzYiQSc",
  "key32": "5iCptDA27oK8wszsyGGPv1AHxPx6b9X5yK8NWcqM1MdDCeteZGEm15RcHdq2UGubq74bUtxTx29vc2wvTLV6QscG",
  "key33": "5VxgoqcWCN21HLKrhnLaac3NiFfSmLfKcjvkjwBGys9qCw8J9FgsS6JtNVsf98QPPuYEKb6JtQx6QDvmfLgBkM4K",
  "key34": "4ioUrUbSUkum4Y3nB1ULbUYy42dwY5mzXbn3hgVKajun2yePAhVUiqpeUeEcYqZ1wx9Mv5vDQ5XiJfyCDCFcHtQP",
  "key35": "JNq9sY3S9wh7rfEewZyVN4f2f9jKUKoGELeVTPnEkTPfDEvFgeSfstAskvbDGGc7j6AxGqi1YbH7r8m2nLRKbqs",
  "key36": "2d7gRniSqmbc3un24GaNHrH1kCfsk4HYHL51kyb44u9Zx8yqjbuVWmArpGxPfhHTfHUzXqHYFt5xy6NBsWDEkSbC",
  "key37": "47GWYFKt7Ayo6tKySYPnBxrwz4iuF8ZhKePZhf9xjHRfihgNkxgQKeAa2eTmk1bEHiXJvTvNRvrxtQiqgbQdx3Ar",
  "key38": "98QfGpCdS8D3c9rXsW5wdZY4rLPcVVZzZkS2wBqFSB3raKo13j2GmzTECYtsLKwsCnNjLtdkPyXhMs2zhRUfcFc",
  "key39": "3cEGqFD9XVtYDku4SxTA22ZdhMDBFmzU93jvP8D21g8QBHomB8tPeDZ9LnWuwGdL7HCSbEyFWP8whc6Uai673oJS",
  "key40": "AHb3rgruAB4U7nzwU2mwiSDSe2rWkFhKUmvETR5qU8btsmqqdQZVobzdUsRQvrVBKeVghMEkF3MvDgj4xoJ3U4u",
  "key41": "2aNDxwzBCbpuAiueY56gBRpb7PGFgS8UeDw84mv9WskodgLGmehCtsXWLsT1Cccm3kBZryThPr7Yp6gM3Pt33V96",
  "key42": "4qXjYBBQkho1eGazho1CM4Cgt6JBj5BDveWLrnCKDG2QMzvZy6zFF1NuF79rdSkMNs9byAg6e3HwBuvRVscMxSqQ",
  "key43": "4SE2UYQM17TePpEuD9C3WXgPfz2w6g9VLpWBAV77Bje84o14jZKqicJuFKH56CGXzLnughgYXLVF4euS84yL8rae"
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
