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
    "2fMRZ9VstZCEqe7rLVwshoAa36YLmabxXxX8CJr4sZFeo7zJspR4ixj4FRuyjA4ztB6mqsF9rezcy5n3MLCMm3J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1JA8ejxNYm56QuxrppkBkkPSNvisucP6hpmco48Erhp9KYv8NxLDXnyv7eMj3ENwtCh8CwhTQcocCiycBgCiKP",
  "key1": "4TswAdizu6Ft2wyhhGjMCet6h7fP4tZkmsnvswAUb3PYXjinbpErxbRtN3u1DsxThBCVJtgcNpUNNoBtuuqbNU9R",
  "key2": "5SicBVs8gQa5gqmpvW4afFemD5ow4eEYWH4rhnTpZymEseSTf2BhphqJEenBN6SFU1y8o1hCZmuN1p15ZVBgvhLJ",
  "key3": "5fUCCkke6xwoudmrvvVhLB2swHGYVUevUgBN9rQXeo1PcmzKLrrJVNZ6zPBNBAaStuuLZc6W5TZCoL2N6wSP91zH",
  "key4": "3rRWUvRW2EsAT1K2e3ECHKoxiLNUDe695nnoHMcFyDQ3zLPAw572ZErW1YtVFRoPUuGz4cV7FnWCnXGEW7f6VqkA",
  "key5": "4JpfEZhg29AVJQ2okGHEK9fNDQEm8Y4G5pvB2TWTfNN9fi3deCW2wrwNAAmPeB6dsdNRFGLyR3LA52StZQQ561h5",
  "key6": "27zPoBTSHBSe9grMDHEi7hZevhicfoXFxzeaBPDiiZKajmKUJd9i5X5gN9NYqVefev3DkAGrBeD3JTET8fABBRaH",
  "key7": "3CahvonZ442jUgfh8MPBvLkXiTBSAk9PXteUra9HnBDH1e9donr4tZ3fLiffExwThLvaM2GGpK7TUHAWYiAss2zq",
  "key8": "3hGWBdc7PoUUtB8FZup1RfLCtVQv4eVnY55T349HQ4mkHxciQx7dMNZpgprWZ1u6YW6awoifQM58rZxGoRH94NZ3",
  "key9": "TzU1frsjyiz3BS5ViB3oSBamb7wyoRtcd5Nf6T4seb43A5XVJzS73R2MEhPjRy9qugUz2WW77Zbo1zzNZhPcg2N",
  "key10": "VemU3FBZ8944UV8ymS3sfrroVSV9jLtxrPPTJk4JqeMRsEPCbp4G2gy3Z2QgGZL2nchzT6dgwJ5mB7Qr4d1FB54",
  "key11": "3bwCF9h78SKGD53E5LfYPoijusU9rAs4k3ZZ5QEaDNKoyra8Xe9nSnrt9Gof3HMbKFfZuoM5AnugF5Hv8z4wUkqB",
  "key12": "3nmNiNyFThuvJWJamkgz78x1o2UiJyHe6TGQFxpaq9rE7Y9FgiMUDL1TY8ZFjxk4YfffXdPP2v8PzQrpiaPEiSmK",
  "key13": "5eXMB3FhU1PfJnbae87GPN4VRZg7xQQbpfvV5ibJsQcrHosg6RnU7JwtS5d94TZLGpMjbfy3jCUDD9LR172JE97t",
  "key14": "5tLxW4WkewbtdnfTQ5egv2QjBDDB7666x6x8LMcp56Tfa8Hm1vtnXfuPTpUzo5denAP8Fuvbodh2YhF9w2rgMEn8",
  "key15": "UBRFsAgFQtWpJLpQBuVsHd8PAt23hAVk68KQ5SBoG2j3vftjybsG5ZEUvPxkHP2j6it879oRHHfWRjQXjtUcARF",
  "key16": "4zigDLgqFWjvExdpWYzstQ4sbYjsBPQS3ossFmWemCZhvPAqbd2B9Hqm5mfykSKmKVACF7yw75wPHi9VNhrnqyPA",
  "key17": "5SWEkL8wjFFcGETbeGn1NVgXhKtrm6WdgzSBVTZ4M6zdhg5nDYQspKmYkRSkAoSrUXR2Rs3QoZ2tR32Hwpu47XL8",
  "key18": "2X5vCAQh5AnajTrECKuJpt9zPRYTqP7jpsESiGDj8wnwbZzpaC1ebZyLzEAmz8sQhjbXTJx49y1biBuUejHcApj7",
  "key19": "26etPwwBpngMLqki5gLBRPNdj2Ec9FbKuwNCXsWyb94jDTdcZMXEhGoedV3rk46vXv2YkR8kYB6spxVHUKHtZmBj",
  "key20": "3ezKoPaoZdvzsxyjFPvqMtoUbd2tvBqNbodRfQxmPpfmRue6B2VUyr1eGaMRwQameyjduQmW4sfg7y37m9gbkReM",
  "key21": "4rScZ5CYGL4P5heY2QggVDmj2wP7UaRWs1K3GWG5dczdxXYxcGFMJg2JBYXiBE8zCik8jqJfzqUV6fQjGCEi8S2s",
  "key22": "4bk1iNbsoLszmnKFNEXAz3jJNnxn4HopFrWDbrALtH6w4fdVujYXa3qw2YEDnSgzWSCAg6SxPkUBWQJjUsnWaCrE",
  "key23": "5vBKTC34Jct1vPzASkt85dLojpn8o94PhoF2C9cZYzJyMpPYjsKKd6JACdANUqBFb2h9PPtKnvJ5SNu52pfNtFF2",
  "key24": "5sHxpdFZyWivsP3cP4fNN8edrHw4mnd2PTLHEeTCsQv3C66mgMZ9RcF5j6GUzaLWGKjz8i9x2Fo3Cg4fiUtX1qjD",
  "key25": "RvyLZwkC1fqAVgLXNoMxNkVCoyAWZJq3UeXwyoXbbnhnLB1wt94pJdvYPffU16MDqbF1sEXps7YVFgQbvdj4WyM",
  "key26": "65auuXviqua4GQtPVYazccGQmqtkDRPYPx2gDrZD1iwG3nu7e3s4re8yDDLHyBwZAPBcWQy3FEGmMytz7f4Ff8Mp",
  "key27": "WxFck2TNT7MiyGs9hfZK2fb1VacWxrNUkzuEgVJFYt6qpnGBwv2mNeK7xJ9SKB3C7EQGbJroP8FG9M2W4UrR3cb",
  "key28": "3Ap8MNzGjLTKXoZq7g6kFDKcWD94xzSFMKNL3ikjQ6tU3SwhBg87raJ7Zw1n87iHWqbcLRCwPTPXQ1PcYbP8pWU",
  "key29": "4mKL2tmEmCPB64x7EDJCopbNe1oGXUjjMdBhmKQtekvj2SHhwxKJHMHw8NZsiUDxKwknN4hyWATJZ5CRHasA4AsG",
  "key30": "2DqqW6npWofC2x7vzsnetNGrNUrtxM8NxTo8gk2m1A8bnxZY3yTBqebG9avkPrG86E8qt93V4Aq4LZW5rRVU77Qs",
  "key31": "24UgQZRCpmA623YQxqavrUD7Zqoq3WtC7dSh9sVRN6SYA7T3J1uRSV9LrEAkfCA82H2uWGKbinN9NSyo5YyVK8SW",
  "key32": "21EATbfuVvwsA2ekLyT5cHM5vYozm5xbxTCQ2DbzyFaE5BpnZhczMb269MjggpsRHw9SaM2hmsEchY7edMhsD4wz",
  "key33": "55QcJ1vhBfjvtjEw9us6qzDx8x1tHFhaHANgk2oxeTfEE18ZFVgyz94yZdCparbs3eCZLUAYfiZfKqWYTSX2VERx",
  "key34": "513ZPvWe8jyvb3Vu1uB2VaxSDummgdnNvcrFkb2sxsTCWcC2jMWktrZoUKWmBN8QfRMh5dN4gB6WF9BvuUSSy9FQ"
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
