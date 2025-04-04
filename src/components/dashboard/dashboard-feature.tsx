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
    "3mr48KjVjSpimHWHMhvZ6eTpUPkCgvCH8yboeawsLuGLDo8zcq8FsNEFm4E9E5axT1yx6WjS65fy8UkxbXeuwkAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUsmnjMwyzozs3c64MHeTDY5hZk5YvfjqsrbUUmYqE4Vtop4NbHPqz6ewMoSNKMRmh28LrmhZQsAzXemxPhcRyt",
  "key1": "tbmDgtdw5XjNRkPTUASFvhBEbrpS2ZqbenpV6RympMX56JCEeLCX1qZHLo7hcZgi7n3F4Lqo3fi5zj2Mzv9z5C7",
  "key2": "5dcy6vCCTfZxp6tV6K2dSwtodhCdZ8gjnGQALopFLaELttkvVdChLs31wPvgp7j9MvFmL1ntXGbRAczk4ZPHnpmb",
  "key3": "3inp5ETaubG3N5f3G62g5JbdJdXV2R3VoKJwucwesfprpkWhiPxL4ov51iAKwRG1BGCAgRsR33bk4rwxAPxo9q2c",
  "key4": "2RHVb1agRtq8oz5xk3XvFxCRVz1XKDfU3J4ZKsnPu8gmJK7X5Tn5RecK1zTLekuDBx3xyW9eeKvfkL3MmxoHnn1Y",
  "key5": "65Y61frf7Ju1KdGUqsZMXwmVcQwKwo1hpFU4aRHgdQcA9U5AzuWPZq1Gim9DUYssSEdEK27P88UiXnuHeVXLCr7w",
  "key6": "3S4hkDhYdkojMD1z2XE5RKhoMuMXP9PArbxJXpQFjE9SosXgpWhXuU8ztWQok3SHtd83iLtijvp4LZauTwbTkP4g",
  "key7": "3uNywfmBSA4zoq4mu8npjr9rzTiXkmbxnD5yuTqmgBLZgi9Ua9WGu5myF5Zvuhz8Ag9U6hLMHaPGCJCR87ugL99h",
  "key8": "6365hpj6AYtx6kW4s6T5kfJnEbpcu95StUaABfDqMHV6CceuccrkF8VDNGB4W4eazYP6PXFPnaZKTuEixZ45EJRm",
  "key9": "2vxz7kVBAGwAD5WrJCSuSLS4tyqF4FmS2dnWFtseHrUktgUuEvo6UXMkAmKC7sG9EvF9EUjzA8q22xWuaJaa5fF6",
  "key10": "4SqHivsHrN4tunR9WTGPrpQF7DnT6Z3cJAKrGkXg2B6RTMPmquhx4YrzPpePVcidyV1S3WoZu1cn3rfEcBZ2zUax",
  "key11": "JcpwrcVgAHBe1w9erj1htv5gNg2RAKX1LwgeeatVn5E1UjFdRkS7gehABfus5VmBfQzXFBL9aJhwg6CggVcLaAX",
  "key12": "5mv9Nnnk41oCkfBkiw9NVqMwDSzstJ28VjBpneHUxjNwJiGgSctZhXZiCHuBXfu1McME8UvoJP61mVdXvZ8pdtq7",
  "key13": "3ZwXvuucrqFThE5FWf27Eqek7gg3CQau7Z2vsPPXaUpZV9xUBwXYBxEEUSTJmkfTuCjeadpK8EjQRAEB9EDXsyPa",
  "key14": "2vucLyvyeWa4ughwu2qJvx6QGnnhNrmYY8HADW9YNqfpQhmXsC5rRnJJ4esyn6NagCKGemchunL6d5EF9BriSxD7",
  "key15": "3tpPzSz82sTmbYwRS39cC54ydnDkpXeB8tDHevhTeDVfuxuB8p4RSEAhYiMYfM2GJUkDWxVB3Eg8oJodd4uwz5qz",
  "key16": "GF7XWhh6JqWE4XJGzqxqaJ5DMYcdyYoTe1auYo362TiVNVCguQePvpoan3wc8Mggn9MFNYCFbac9zhNH4UrFAaq",
  "key17": "VHTStVXPxPvPAhRcrY9HGhAYmZEvrLrNMkJrL5Gc8VR9GT13c6GgrrwR6bgHtFzZod3JqQ4cPtfebUT5iGK3poe",
  "key18": "3pCbHU1ybV2fv4dht3s8Gf71pgWp8hvkhJcSf3AaJ7J7witnYWTTQaTfnWpy6Th6VSLwixTV3LA99RgMQbPnrhZ2",
  "key19": "2DBQSZRsGqpPHbMbcZ74ZiRkbTvF5Xm4JYvsi8DonEFFSjtXjoZvqoyFajCVR2JK2PjegtnQshRjg2893ArLRU2M",
  "key20": "66oaefYDFge5kNpyto2E8DbdMVNmGynBfxh3NEVwAVpZGnbe5PJGo1WPYQH4MQo1Z7zTya6HXaSx94s3yC5GwQnq",
  "key21": "Aizn1hFLFRTqgKb2N92wrsbjyCmj7qHCM9XxAqd7yy5wkCCrtoTaCMivZvs1YybXAXehsdZxxUsDiHgT6mrJw2o",
  "key22": "pLzHkxGkaqD7q5WmS3hMGcYikBdmYPGVCo9iAcVLsbHsnK89wnn6mMhU4mEacxpPZG6Fi84nb57BP78PEvScgeL",
  "key23": "3Av31uvUrZXeCZiEFmpNKX2Db6aKHnnfDmkyjQitdeRKvUnxj2Vonj6HW6UWhWzVzSBoPwzSHBepFcWYvCo4Mtnt",
  "key24": "2EfSwmxL8HYT38wEMXgpRWYkXAjuYRjuLvrUdCo47a7wD86nq351gapNMBs7QvuEfzQ8hgxdy2iDUDWV67ntmMZ9",
  "key25": "4W9LHMLRq1T9um7G78FMafdyEjUtySyHPuS13UPBmB4y5FtJWRj9dwYmFycJz62YBNqeTYwEG6NRQHTpY4WWpHKV",
  "key26": "2wKjj6ux8ZSRzcYfq2UXdQRf2Lo1g63ZuozpvCm6rbzPp9tKuJLHLmZW2bqiiKoWXTbYxNA1P2jaLvAgBhk2i6zY",
  "key27": "2MWnAZ51NG2hYNBiC1sfo2rscBxaUmGGtQECVR5sdzusxxzDM6W86gp5HESjWkXp8HCSSMZyY9GS8KYAf1bdS8aM",
  "key28": "2LB1GF1vfEiptacL1pfTevGyKM4KFBZCJDSTCkx3y4P6HvNrwiaNWH3FfvfwBYaVjGxB6nnfAHwBczfHGwioHwet",
  "key29": "2m16CPEL2sfo7gfo9anN7CQL3Sr5Egpj4ok4U3kUCJwGnz2CRXh61ceyyVKpxYjdH57aqrkGfwnKA4oNmHY9AQAS",
  "key30": "2FuhSvksSsAqqhJGwh7e3TU9ZAKGvAkuw6bJugz8S56Q3sepcaFPfjYHeMWHF8J5vNgLWpkxmqFgTZjAZaaEUyz",
  "key31": "2eQBHPPi1m8KimiK2PDPSwcWrYgEr3yfQV7Qc1utACGf8iAJ54HD3KRT6ouQEpiWNkrdBLoJ64UuYKB3rue6s5ae",
  "key32": "3gwnEyxAundMF8KEVWHvpeAnUjeLP9iWPpYycUKvP4D6MtSQvkCex8pr1DSWAUdRYK6QhMWsKN3hvph2Q1rrPBw4",
  "key33": "4MURvByZnLK6ukt3j3fs5gpvdNubguEWwzv4NuxtYe3ZXTCapuW7ZLvMGdZHZFYiyNP52PcYweUYvrbmHjGjuFaL"
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
