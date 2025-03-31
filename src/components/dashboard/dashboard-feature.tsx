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
    "33HaCzaUfM7NiriMaR3h3apMeoVgGxadKWwikVBSCo7K27Mh7L5T4U2fsFM8upENb3rsaWEc5MNpSbAf5HNotGUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29yjuPMe1GRma7UFpEqh5FTcCvKJGodSRGymTuaTBjzLa7e4JR1ka42SQdSKuRqVbdnw3ijyHYA3duuEYX1k2Gy4",
  "key1": "UcWV6sq3Hou7yFJbKssSFCXfxp1NnheLpPPzKxtMzWdcb2Yg2N89qFMGGbSh3561UwbGhn7SUdnfh3Rf58zgJA7",
  "key2": "3VnY7mB9R2BLWk99Doedm4oX1NwFNuNCtG6RTVzRJVB3t7xHWmwpTFBpbjFWVzcNNZP6wJhk6QZANPJmCNTJxTBz",
  "key3": "5AiBXqX8QccA5HbYYiZLQmjrMUbSzxGgWF2nH27Nr7ZtJXe4mMGcQBSn3fwrazqiB2raMN6rD1JJPPrF6K7Lzo3E",
  "key4": "32cCH72Ey8quMv3uZdesFwTweYqfPCEkgoeyATFpuccR8RMJ4noiUFWnBg7JteyopFgn7vLkC8yFNzxRfzNqs6Bb",
  "key5": "4j1iu7d6ZkA6jNGdZ4dE77Wg9AQSFLGokJxGBVkDgroXqz6K3fivgTXsp9mmMhc3QvUYMnTgGiK87ecrmWEmqwCr",
  "key6": "5Ua6MUENTSn3KeSNQqvPjzXDFW429yiHXtNXQnkdHpwK94TWFWvf77hayMBdRozDyN8DMnNKRSfJbDREvxS67HBj",
  "key7": "45BCRe1r9jMcMWyrqvyDr9eNNM5wdjow8Uc5ywqpfmKv57MZceoYETGZbwR7YstL2GEXpHzL7Nmbu3q9iQEsrPAJ",
  "key8": "5tTUDkjLHYKa1ajWjBp43QhUwPKiRcZEZ46VtXtf8bD253SZ1gXUR1Lux66M4sq73Yau2f6BF792bPD6P1HjMzjD",
  "key9": "5dy6SVLK6ZfWRsuVcjuX6yFS69ACpYPsQCsyqH9YPg7nbX5KPh68uRRAzuLSh4nSqS4ScZ1BM9QccoXyQ6C5EdHy",
  "key10": "4F9ppAZVoUaZ2D8jvrZWKZ7jhTjTTJJndfmmQ6S1AqthcLEKwTsSkaBAcgw3hesj5MSEepyaSUgWXLm87i8LG9C9",
  "key11": "45C9djS8HMaevVCnKyyc4b62i4zCr3Lizgt3qNsG6XYghBNxnR2NfADCUJB48a6BL9gFmQZGJwmCQiN5KCKAhM44",
  "key12": "2ChNn6cVDzgdMWF6xwEa28GjQhgn2kywjo2y2xMb6cNYA34PLRR554eRfdeWDBRjLFUeB42uspoJCfu9qCz8UYyH",
  "key13": "21zQRYW3H6E2YF3FHHQpSco6zcVekuviF2irnHTHKiShicFFUUNQc92ed8RRYx7BpCGqDsMdcZ4D5Qb6qT5iQGgK",
  "key14": "3Y2TNF3Ujnn4gTCipDjat8EDEt2d73uvAd43q2drCoizb91gDu4Qh6dRUnHnE6cvPkDzLL5C8KMi34LZoy72yABo",
  "key15": "57iQ5hP8SE7dvvvifokkyrXAGSsL1KAk2qRQeP2iQ9m37JqDsKqbvsKU8f9VR8sFYrCzczzzus3o8SBtNuMtsHh",
  "key16": "dSVRRgky7zsP68dVBTPFxwGWZxrgzf4VuQUzuHBWgcBNzDAnWCcgoYz5eZsu7rS4hCswGCrCMmiMx87JR8XLNFY",
  "key17": "4NVvmhmBntMfAJfkuJyt6KoMyLTP2Rh34po8cmciswtHqVFJUp4paHCYMv8jU99uHazpyRKMSXxHciqTFAqKFvaj",
  "key18": "4KEFcQbDi41otJUxqJS45qj8byJMeLGpx3u4813obELyxZQJtizXZ7MfdAjXfpkA7BvjN3nZxRKMPgDpFfAREWB",
  "key19": "4fDcEpK2yEfijW6N26gS1n2je2bw3Sq9CBA7iJJyGR4M8yHr4PfBzE31AKfjJa7Uu1zW9y7cZGaTHp88vX4yWscD",
  "key20": "3FEWZqsHp4s9PKT6qLw5oWreHReWPwu5HKYXKnsKSdVNq3AwpYWumhQZHGjXRDT5i2Fqc1srMoyWdRRn7Z83ByRQ",
  "key21": "5eEeMq3MsdjV3hFn5rh9E8ckAFg4UYnFceYYcPEiozVckAzpfWh8956k885n3FueU2ZPPRWErLWMrdFVgVq2GWvL",
  "key22": "2GJyF7WmkQKMNUjCdaKsBBjRfni4NvSEd5fABdQjQ9fahta3snqytKWpKaXoUZvNKZvjctkpyBaezZRSe4i2QzwA",
  "key23": "4FBQ4d7CJeA868T53Jx6yaJNRkeYAzFrxpR31NkTXNsbiisZAUT3WB4Mvw7rZUL8DzcRZnFkyVc9bhaYnNSr9m5z",
  "key24": "2WMEGtyjqjjVwRhv1bz8kU192BZfQjZGfeD9o8sbNLD6oxnEWwtUimoQCmBaz5RbHurGr4eS3Lx3hSbQT6ZZSgiP",
  "key25": "b8tFDc72b5MoEbXcL7xGbv1MfFt8m7tsTMbqvzhKEvHdZbiLsnMMvp4tcuY4Sja9C1RsRzDiSfp99iFVDkK3wqB",
  "key26": "46nCuku8M5GGgHLzH25pRPuiEeWXRsN9GAN4zPinHd4JxTV1AJkrCEDo5yW1BPcedP1TbNsrou3mZFh9r9s1o8ex",
  "key27": "4PonjHqiVKZoQ6foJZpFiuwW5nUSeUCiWFFtRAfWmAkJaZGWuYwB48rvky4xsCNeaWNtQqMX5knSfDHxr59pibQo",
  "key28": "rbPAFGoPQzdynE4mYAn6JnXpFMLEZUMUmWFfySkUz6MMixviixJQjWkcCFkH5tMD6iVcgYNKU2kkDCpruqHWV2B",
  "key29": "4CSynDajaR7TPua8Wh3bYWBmbDtQ7zauAhj8eUVq9K7Qw4fP6AxHUPjgAcZxM1TfEfWKSZvU2e8wgGdRWw1mJfBB",
  "key30": "h4emzXFL32ou3mthKA2KqikVqhgHsx7P1aLfbUdqh2nsAC4cajgjVDotoYkZFCJwBBivUashDJpC3Daj5PUEj6C",
  "key31": "5AriuaAcL6d1tkzRihXLf8s5GKasymAYWebzFGkCt8pTFM1xz4RCyhrdtyriTj4mL67iDh1FNxz5JNXoSeoRVT9x",
  "key32": "3E9qqepkX4hSVU2fSjUipc7QjkrThXdx7bYufm2rPYLhEJgzfnQjH6rbFG5YfBdXb3B15QSEqRSzArLYFbRfXQ6",
  "key33": "3JW7cFYUoeQjPs43RXv7NehowvA9D9dEjWVqEtP1R3SfaYK4Y4k6jSjmgm2hKbPd5dmvHFpiMh5iujLeWnWNKA2p",
  "key34": "jvgxdSVDNRE3koReJpTnWE3AH2PGqXp75eGQkM7EEAbJHMHT586WaWsgRTK7HzT1C42SYKZt1KKo3pkuog9XszT",
  "key35": "2xsVpCCXzJE93SBnN4VAzajfwfMybHtap2DgQvYPoRwfoNVxkxSmz2f24FoYrfUGzxqbp43Jk2NWgSUVc3V3ps5W",
  "key36": "BcnGFwMDqzHiMUrroRy68fdrqgxg6mckj1RYEtKzdSqgtYM9XyPxB4cLwfCt4zCtGBYrQsGn6tU9EPPsAqmwBQf",
  "key37": "3zDgjqQ9NkffW5U63PN6ZsvbVf7GNd6LDSWdB9vxqmg71Mpicf34VjahWopzvAKekgC8VraZi5CKscYGc3PebaFa",
  "key38": "r3AXZ6R9pGk1LujgoQmgPcqhrLiFiSJWugQte2H9yG24ZTpbUXH356XYKxW4fHwg9dZFaUQkXFpgFwYZ7uNWRwG"
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
