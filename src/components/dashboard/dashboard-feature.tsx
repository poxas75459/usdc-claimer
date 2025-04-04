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
    "3JxFRsxPifnowtFhwC4VHviZmhzVVNxRHZXRw8zXZommGXw8ktBS6uD9ieNGLSqeFttDRSQkraur9hF2ztP8sqC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CogVVvSQLMz2i4VTf6nKRE3roHJZKDqrFgWid42WZ6AjUHCCKEE1h1nsCzNh2qRmPobNFR9V7yiyWdaFTNSG8MA",
  "key1": "EUKM8sNMCTehHGDvey2rgET6tRHvtFmXnLYHKb1UPBuYfEJecnrxjULMWoRXT36WdkJbX2ANAjbVpczvKCjtWVb",
  "key2": "3zR25dKHUqoFUywbHX71waeTdrV16z6SWGYg2tbR15LfXYs8M3TCCHXcLFinBgnH8PAWzFpCygzH3TsF3cNctPFG",
  "key3": "41dWr6PTDEUKXoLPAUq1YcaMHnV1VwMCNU7DhYfEBcBMqAKVW6JKMZciNhn14FXyecnFoi77DHfV5eWTkR8ASwVJ",
  "key4": "KGZ9chpH1rv9JMEfmtNceid1sBCQb5e5e6LGUVG8hZcRQRwEdEXB5AwgJyySVdSoWqPnNfWEZ5RWCiUfwFsXdJe",
  "key5": "5hKb3Ks2Jk16imL4kQZJ37P8kszY2S9wRKpSrjaXNkEN2LbbpTG8Ay2TXuTVuisfB5WL9pQa3G75rYHxKtr5gkQd",
  "key6": "55Eot6V3T4Du7Dnb4Nph6iGcB1vRY3rgeNVhT19Mzgs5KxCqjUZiUeoEECkdzr1gJ4dxCxr9zMokGcUYncd6KVQd",
  "key7": "W2xrX74RyyJTKWN693uyZkGxjRgxd7DtjwmYxa1BrRQtiaaF57XTj676wtXmYpr3b5G9WWVPDTzw9RDBY11Vuwa",
  "key8": "4UarmfBsMkB2WyVibRmLa9eFMbu1YtK9qQukqfAoYw7uD4voFu3YHPSNzUeAFULLZnHMGQpqWR7iFwfvwhxXreVS",
  "key9": "VMd4FKSPiVeDz15NLzQ9N4F6cB5qwTGzB8bZdCkCNoC6GktoTQ9wgnqsHXwo5YPjk2jgUowoJaDDYLNhAPLMMM5",
  "key10": "5ShesRcyS5HV3t8JWVWRqkn5AFNoCpNnFrpUHFkBumPi2JeUbDxPagHf8UwwBNWmSShurrc9sv8XwtAZXQotkFHK",
  "key11": "4VUCy2fa99h7WNXVgdmMRMKiABvMeEzTJnRb4yC8byC3D7u3GUJvtjbwvUf9TSvBE1VcHKUYAJExo7mczLPDEzy4",
  "key12": "5TRaDdBV2rYVUuWrCpYFApCqcV1DusqU5vNAyshj1EXTeNJta4R4gad2XAdaTppHnvVfCQLAKmrhi5u6Xnd6fg61",
  "key13": "AdP9X85iXHvx3ZDgUiFNKgZFcvDrnfNhXMbf4n6FHzewuVo6daZ32onMfPoyL5YmGM35NKrBq1ah55gwpT1jSrL",
  "key14": "FcmMNEPC3emURDqDjakyLuKHdHUSwW3ZG9FCEA1car1qCK85ayPXHh8izWjJV1urXY8kboLzo2DDjoeMhQNTaRX",
  "key15": "5AccssVfRVErwJ9LTYudBHP4gV9fiJsYmocoay2db7GQsPYjxzFS45KuQyk7FpuLwBFTRETPkGjp7UmFmK2viCQq",
  "key16": "41QT4UswbiMLn47zZpKg3zfjrRRKJcEZ6twpEW5aoHWz4CvWvY4kpfDdatLHESPPdpAUud86nx6XRCCU1k7Ttsyt",
  "key17": "23Z3Ebvsng7U5NyeDte9it8trWSEWDUTCbkjAuSMSJNtTdgHbmFK8RbTjafnmdixmb2iFTnfRkYnV6jRtYZTM7Ji",
  "key18": "4bsviFMBBWFmZCbaW1212GriDmQhErGLSCUrChPJBvxeYxLp8bQCFbXmTV9r5burUwDGzoVsjqyjMfifpFh5zzr4",
  "key19": "NtgHDiw7P7Tg7P5r59GyTVQGDA1kcEhmZchrHndtY8bXmAdGPzhyXEo1Kb6DeP4DhMAmcdvXcrwJEqgrKTZktHB",
  "key20": "44vGGxjE58nEnGjPqbYr5G9wmADh6aEpBvxd2aofWYwnhLMDUxHn2bHnUTnyudawDnYyptnxxHrWazAGCa8MquRd",
  "key21": "3CDYMR4htNxk29ZVNEmGrtdSAbkhiJTghuDXMoPgRhVThRxLoLwjJdvNSFk4uzgforbUC574kSxW4QKRgp8bLjNK",
  "key22": "2yv6ZZSVDDdRKQNPVUPkfLGgEPGEfLM3gmpaxRrYdo417XrjyGmobfrVMbN63NkzKtnvGAauUQLqPXPemhMQNXK",
  "key23": "3sSB8oRbEsfFYywCbGiwdEJ9u3sVWyZLn9KqHQCykcSEBTyq5JR9XTZ3wYM4uCJANQLVAqcpdwJtborjL5X4ye7c",
  "key24": "5YBwwSn24g8WoLJWtAMVzfawRsMCinQ6iHetnwjVzgsktsv9suqoAYZQimX1QUBS5c1CsMDBm55wkiX49cmoFNMF",
  "key25": "4W6tjNEtgSq7suiXJK9LAabKMBC6gQRFeJNoD8jRfcWVGThSgLat3WdEc6tuuAGaW7rboaxKSqaGoJu2f5SFkn3R",
  "key26": "2L3YBtXpgRV3anQjXUL2rqSWbHUBSg7zyXdZpuckVR4wGbEiKHYj2fpg4w2SGYiaJgXZC5jRDB5ZjWfgsrN5hxrX",
  "key27": "4wpmRk5SRmX5gYXnecPewSSG1WuyJTuX6GMBqUjaAHhFutiTBZ1m5HnoozWwFxbNRzsS8GzbjEHsuXM1Ds8ziBed",
  "key28": "4f1zhxCxFnKize2krUt3HMDWJKtug6dtcfsNVK96Q8EtGX57sUSRMd1pEuAEvsd5SmUddtcrmDkfnnnBrj7EqNYM",
  "key29": "61Dc2SnfcF6wtwMq7EzU37t8uYJZH68fwpnaLk3b2HfgNRv6uwEnB5wsQPqanJnCsHcFLczzx4uK7CSH8K3htZRH",
  "key30": "41SKpSzzxr8iwm6dHdiz3mKhkDKkzCso7ZNk51799KDuAnw8sHTYrs52dM8aaRybrpWw8GzMtiwNQsxc9BrXn4nq",
  "key31": "5cPEb7aRGEARHq2KKXswQRN4HFUCepep3pN5TUvAN4ri8smCUFAtRC8r69trAjAViHAWZbbjr9qGEXjp2EtecPhZ",
  "key32": "2ALPoGcSfuhTuRfzffyk7je9PeZroYZ2dVA1skz6kdBc7oAVoWJz9t8P7Sh1hFm1ckFYYHeAfUebdZBpTsATyM9C"
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
