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
    "4bxdUzXQ2nypEPKBhoL9q8eDXN9ZXW82VmsMiMpVsNvFmooC1oyTvFjsq8ynPT2eNZ6Ui5ufnuX3YAY5wfoUTTHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PBTGQzKSNFNx8Tnfuj18ZxvemqvrNYwQ236wbouiDDNULuqaA6Ltn5dQydm2xLTRe7H2PXKeWqYjm5tXeSNixi9",
  "key1": "39vmk5w12NiWXbHxon58F1wFpRpNtBTvaCsB4KX1BqmgbjBRDyAndcNvMHuc7o8VMS9ZCEJt3NenvVNVVesjmp8J",
  "key2": "2pdxCNzwbd42YLKgWiCzE7jQQEFA5WLAcToLG8uPdXV2LgjUHfNsybbuaXGvZFNGiMCVasypiGEe8fwjxcE6s24c",
  "key3": "XVMkEdS7TfDxNZgyFfhimWWYxSvRjxUk9skrtjksfSYrGp5nXG9oDTDYSZvDAcUQEwD1sFZQV5HWx8YkRz8Qdmw",
  "key4": "2QtHoR32NPJQiTSNKjmbk4zDFs2SVMdYPF5nFk4emMs27Fqn1bHPrXenbddAx2hLnSe5euMkQVDQLpmf9b8S73DF",
  "key5": "qtUNuCAcKEhqcN83YKK6jpckhqT5YHxd39vFfVsNyN8qn8oqwwLn6gtvWxQmfFPEPvwC9xYjzedTW65DpnVvgaX",
  "key6": "rRSoGqKdgmfFkp9YW9pdD6P2MQ7hRAjhbaExVZt2S3VK67anWfneSgcaJQudnvNnu9SiMNkW3pDtenRhgRxhvPe",
  "key7": "Rq6Neku3LkJzD231A9iN3AbDXSMGwETe25xjkZgdD4i8pEpPkupWxJzYrEm4Wp8hVjh1vHfUR5QrtL88qETjCZN",
  "key8": "4qTv4yPurcgUqQYX4EA6zGdUTv2Lz4Y5saq6ogJ9Qnb41SXWq3LBWCvDXs63B6CuFyj1xab2Bhr6NHbFitFxZDbH",
  "key9": "LnRC8LEJHkU6V3o3g3GnsGuCKh1YNDJMLqmRHv6vVy9gCQiWymYZvEj1yUcrNDwUJeGjeBodPNU74bcVoY16kU1",
  "key10": "5gvxQ5Mjdsm8LgcmRXRCAj46TLAbQxWTVNswCJdLgtg2g89RPk5hnEn3mH3jvG7Jge8uAJ4jBXHXQXzAJ2e27iyf",
  "key11": "2jvAWBe8ZH4nAeGGFCpi9PuHABVfKA7Q9nS1NPt5ZMQZWLPrSk9uUhWt2z7zo1UrF22vDeiSsDSaXiCj34JepLyn",
  "key12": "3YuJ6CGqPqyL6D51Gq14sVgnXzhUSpVYBB7dSqpA4rWbhFLTAwDy2AccFjvhKsa74C7kByDPxqKRExatY2P5EZp1",
  "key13": "55QqskXQBd1S5FrXaAkYxiDH2KuMsNsXbP7YrotsFAx1bLJXD6knuKSqhviiYTG1fNGowFhbGcGbCbEYaeEfnaTz",
  "key14": "2f1TQXRXr3KWXzE23uXS16X96NSAFBviDsMsErJfQPJqgNVwzeUfVTN2AS3xe8fJ1XrPUj1ZdwaEk83TwA4PcbQ4",
  "key15": "62JzspMmi8gjMXhyTDeX2LrfFTizk2UYwQwCZ6uVENS7tV13nEjcD1Ko6UnUmJq8S4ZmhN5MmdrXLmYycd6vkXuM",
  "key16": "FKSozgZefLXFWSzWRyHpgbFue5Kf1uGCBw6ELhUNGymcjScchhxMr7wuBU6ouANyW7xQiK8YSvgpGSf7CHm9t3E",
  "key17": "66TKvP6taHTXgmZaVYJxhoEQUoeh94H12xo1wgECrHwHhvEr3jY7HBhDGyEoiVFnhDW8qC8M6qN3cDCLT5xXboNw",
  "key18": "4NBWfypAKVePYgFMx82f1ATuhknyaqpzhYcwuGcyiTbmuZtcHumNP8tcjb2hEhQY7bh3E651XEvMGjSvUTkCMo8m",
  "key19": "2nsAUssfzwso1QS9y8jLEdarURDbu2q7kbEc4EaMSMpT6o8YH6ScLKGufS16RoJxZcjXDJrLUeawALNQRnNRrtvL",
  "key20": "3WMqbnCKgRVDtLnwUHTvumGytjzDUHkoz8898bYS6NgoPEmV6N5A2WVNYbKQYDswpBuCFYmL4wVK4pMS5Gftebuw",
  "key21": "3aumfLuYwvCJDsgEyKADmrrQmJbLh87VQd2BfGjMQnS9YFBGexg5nfSc8xogaatCcqBY15TXQ6Tq2517bdsd5FMD",
  "key22": "2bbbCHevawRjTLbFnDQXkfvHA5P74SXAmw3kpbQX4SL1PbYrVVCXhwqoqUcWrytzDde5VKrcVQh7YmVmrHD62Fre",
  "key23": "sjYZgFjt8z7RHd9GA1uUvUx4ptAujX14fY2XvypAFVaf77i8jDo2mg7rBPeB95oHJJd2JPqoQ7yGdHRfpnqqD1s",
  "key24": "44oU5RSJwDyWd5cJMkVNtQZ6JnBzXTo2Ea8LgD3ZuZYKn2u4cCUJ5pb754AY3pU53jGr2F2oLYC5uxfLwzbk4kZG",
  "key25": "5DbGDxWANd8xNJde4MmyGd6yrSgq2K4jGAN8hxXQaVsJoTfzWDyFjcrLZujzCg9y6eGeSbPzNR59wpqAYDCF4GeY",
  "key26": "VNeV3Mt6WD9K4C3HH1ALkwerpTZxzboBJjnSVcLUJtZUsAgZxsPkfXERJuabqbK5WsxfF9go6YHLyi1P1Vch98i",
  "key27": "3q8wLfvjrs2nVM1aRYwjnzWKw4L24JVXBSshm76wLkAehkqn56KDdMzR6AifUyUtc8dzaHF2AY58VjBbhdNKX7zK",
  "key28": "3tELErsxQdghaqaQgURAc4kLXkKkVYR7KzfP6yzPt6uyacKf2j8GAiUWYX6xhynDmeBmF5ddPZFGoxLWUFDTPQL7",
  "key29": "3h1B2Mo4BeNMfSD9T7qixTRnCQoMiUuVHG4iMDQXX9vzZ8nC3K4froa82RArdVeyFcWWUeuuNHfgURHRpcxxHziq",
  "key30": "3FYkVEBfGXcQzWstsrPv3CgmiqeQ4zTbKJ8xsephNXM4cafMCTZTvXp8ST5JpyL4vjuB2KnwTTQGQJC67gF1BR5d",
  "key31": "4EMWKAf6aDtCkmH6gDDsEm8xTfqtErbfuakqaBKGPw24WMBDb8DcjPYxdXbbTZXThR2NvLKPYWbAoM6btAFN8Kyf",
  "key32": "2GLYT6ssmE65yp6BGtnYADhypdeBiCUME9D61dPk6oYDeyFguam5bCvDw6H5ujyGW4gFau9VbNNz8m5kH88Y4d83",
  "key33": "4FhPvSwQwtaWtrt4TyiijHngFiK64uh2SFqXv3LBEfM7Z9UYvGXASfA6pr9bzizfjSVZmGt4VfpUaTHDHLvHH7mP",
  "key34": "VyD71iY26fvzy99ua1Woo4gGYfz2Xb5gNUmEAyYwZBLABowno42o4LXZQibxyGasWwNQAxpuNnnNFZL1TwPuWSR",
  "key35": "3yymwHd4Bxggy5eeEEBKb6UQrqWHoQ1TDqaAyWpJYNQVQg2WE25vafPEA6w6A1grr8XrtKQJPeMuAMnVruGHej7i",
  "key36": "jHyJTVC35otrF8irjsKEG17gmGXVBbkyQ4W89TXva7Qe1NHVVdUEpziWGBeTTxaqerzczkMPeCWZHFbws9ubKyr"
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
