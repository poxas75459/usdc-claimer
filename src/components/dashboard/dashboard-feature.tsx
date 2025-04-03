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
    "4zfaAnRvfoZ9maJfwyqAkPtTiXDBPKwqt9GUsfFaSb6BKNf6oezdSBJdodnzQGSPYNCoKUvrrp7JQ7Mr488QNJJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Y23wX4u995LaSGRAddXPUPsvSaq7z4QYxhkotXC69hhrF1qbB9XbVyNc4cmBAfZ7yrptLpBB71ebh712HdeB6M",
  "key1": "4YFF8ut95UyaLUpVw6cTGh33v6zsMw2NW1p5yg8qr8tetz7o1BMyhDNnA75UKMibUXSB35paCTZaU4sAXp9FSKT5",
  "key2": "qc7MVMoP6TKCmp8nvw23TXUc3rDrZVwjEncVdoMDyoCi4atT3y1PZ7FqR68zumViPqpWf5wrTpBQCxRZ1CAwBMA",
  "key3": "4t1nPhJsSpqkr2wNEGuH12d3JK9CASrZ2D7phsaFNXobcBtudgk9EeSNUWVPh4gas7uSU6XVzCSjjF8nZ3FqyVtp",
  "key4": "NrShRe78rexTZyjjnt3HAGZcsNwv2XbMG3ckJHdn9avF3MrVdAYL6RgdWpjbE8KSLrb3EtBocyvM51r2XMWPcMS",
  "key5": "2xyzbsXzDzKGincbVd5mdVutFGBjW2VgMgCdcG2fsmNAsqfMdhVZF1dyJXwX5XoppbyeuwoTsoAYkd8QZNtUF3p5",
  "key6": "3RaKSFhwwijp3zM63faxWqryFLzJUyQer7MWLQVAsSz1v7zKtDfHjMNUmRwHzEnR7233FEzw3PGT6CZVM9jirNhj",
  "key7": "k8M13ytrH8C54d2YcPK7boiXeVQ6v2bthtM1NsRVKSn6xsayjMVgAJFRpZnHcBafB66DPRbXPQGADA9SpaT25fD",
  "key8": "4zMnu1TputRYSDKAfCeesNUXZv7w5UufznmH81YqYgvWHmkhWHCh7yWeTszFxAQd2Yi7MU3ECYfsXigf1yfMvHak",
  "key9": "2FG9e1A1j81DACvRND6FuBveTrvy5kt6T6vvHeZPWeSks6NnR4aGmn8wfiecfKjv521nKvQQc4esFUou1LW4786n",
  "key10": "21ca4wQFqcxe8Y6W4oAK9xLMo9hNc8PjXVtoxVLq2GJobRZjruZe6vzxqdXPM4bKQ7aZs2URkggm4xf5grpsgPa1",
  "key11": "4m68AmQ3qiMvAHC6KYfAosnBoBgrKeDogPzE6fVEaWpeSF1ZGXAMK4p1wk5wxrgqEsT8oVqeBoVwKHWRubSCdrq6",
  "key12": "3NsYDv2c7QDjtWbnqsusqWqJHdTvAgwDqbdtAcUrhBEf8PiTBrB7X25DdKghcjsjygESGpMmX29MzCudJFn5sb2u",
  "key13": "4e8ApP47Wf7qGbfp87aoBc2Zca3N3LehuexHcqpMK9GvDYEjoDXiP6SkL65dHMT6pPygUxw74WzzfyTYXPp1hmrZ",
  "key14": "5R12tb6j9mTAQBnKVQKXFKCkXJA8GZU9jX6VMw7ydSubS7DeQX4CMKNdN7Ys7gtsYVh2J5EAyY9moWMPt4bVxopS",
  "key15": "3YibaX8YW36KHToNExac5vqQVjMPcds6GzMgFAPKWo1z4HgT2No4hW4Cw2p3kneAYkUg4NwFBJqTsNPT4mwPF5by",
  "key16": "ZND87ygenJmVP5HaH1EoKCPnyWvKuCQ8JBHk7yxRcJEN5HRstHM85xTPrebwhjXT5h7YWqYP3MdKSXoYkD7L1zx",
  "key17": "4EyHdRhrdKy3hGDShFCik9ZDjtQWMNmkTGjWPV74S5eHWXHQSuUUxprdL9e6DHUgZhfjb3rf47JGpwNHgpoQcvzG",
  "key18": "4rJZnwSjABPdX2YVTrMdaz7d36PjzzkzFZBa4PCMyJWE6PddHcZXJXoouG7EZHUEVqLS8FN3Uue1JMEJKXUMw8dR",
  "key19": "4voPzD55tvbEvrWThN2mhCatbxKsoxhBTYwZyo5R9fFUugfsLBgjtJgfhDuLaddQZJez5JqtrUgK3BmgyMF4WMjk",
  "key20": "uQKRshizPn7meCJ9BuiaAabaEULD24xrKmNYesW8BMZaYhkJZznKpJRXELxuL59GY5SqfMb4ZPQdqEaGXHijSRF",
  "key21": "5pXUM7eWWT2AMKaXjumtDPz2Jk7N5t1mHDoSpHgpNAPe5uipptiYKiGAK5fGTiVYHe1CDncinePVFXC4DVbZhhgd",
  "key22": "5uzu5r21Ntv8GuxBrfdXBaePUsBYDiBJ1yS9iPtH5QNT84f9JyHoDrYnBj3u3apu7sb2WyKwNg5nUhZfGm6kQSzM",
  "key23": "51NS2QNNvWvrNU3UfxQk79kXjVM6hxFcHEKQAS2U9b5nSVcDgm48BkuWX3oxoPworEqfkDxJUj1nzH8FNmcBqp5t",
  "key24": "VCDyi1btryWaGnhPaCiQy3HrA5x93AMZwSEq6DwSfbg24Xt5MLupHakA384jv2sDWx2XWu84FJX3oXnWaasRs6J",
  "key25": "5H99zrQv1Zi1n83riSVvwDPHSh2zzVxSczo3ELGJBzoPMvJqWo5LJpsVBcvhe2HV3VUgrEnFpbJGphV5PswwxDs9",
  "key26": "5euDY8HFoq31HE6hxJFSBFrqQTWngN2TujSHyURnUuce3VLcTMV4wRG2rELdxg82bGo5tcU2Gf7tS9SpeXZJh51y",
  "key27": "3FVH1WzEqRNv63tzGt6MBj9NcXn4qXa8NZvrEDYg3qD4L8N9QowtbHhsk6KZTD2diTp5v7hNk5r8sXEDhjhYDRcj",
  "key28": "2qbyiDLq4xVRiP8n7Uz37NB7Sndv33krBK3WoaSmb19qNG7amdAvxoBr9pXn5bCMWFPWAGoG171aj9z2mXJR8gUq",
  "key29": "qnnii1L4rhQ57EkqE3XYLg9BEJJVbguUb3J2vbqmYKHHTByjfcYCUqJmgUH2aEvZ4TrgddACj9fsKUz4ZnuooYi",
  "key30": "2AEv3T2NrqY3GawGTGPkwox7RTMCksv9eAvEfubZZc7DtNvufc1RSkU51mGWs6NXFXVMBoEMigcFVRSAFuCH9yzy",
  "key31": "5j5WJ98QgdviMDn9GA4umYNxsAg8tp9vx21bWeKRcwLBuYZXEiwgYXtrybkjxyB9AaELrHBdV2yn6hXTa6s8Arg5",
  "key32": "44tRGc3S2Qz3VSbbb5eJ45cKukTPKRkJcNQq5CNZCWaTK1hjrU4ffkJLZMJknsHkbfujyxtMzsU47EMnkycdp4bB",
  "key33": "4ZTG8snhFSnkSohiis2axo2bKdjfB93NifVmeigKiw9zW5qnX9KSGB78PkqeKGpNz1jm3mF8EiLZ428TY4MYWacy",
  "key34": "2dbkcJG3rjiAVPBNZ6EkvLdwAXfnbHrpc1AbentsM2bNgFMQGWRBryd5JbH96HZdnGVxRNTLURU5Aa6zwpqavAgJ",
  "key35": "29k3oMv1gga3fBNjhAKDqKPA4KBLfUY48pAMhGyabrKUxEBZqqzmw4iHN8qFrYdLayMx3gtDySKmhN2VPx1yE8GA",
  "key36": "5xMm6GHmTobMvSDte2yB3g5RAm15UaCysWXLXe99tvByjKQp6EJuDiJFaHRRKxWiH4e3ZsrKtVwNXatKTUQMFriW",
  "key37": "62CLypqPWYnjSp7JGWM6Y3omgsoyNgnzit7peYKj2HTMzJYcLuMGV76kWtuW6Q62aGTvBDJYkTH3FowqdtqwssKk",
  "key38": "k8bmzrgLWmhuvjbV2rwMgVSXLdnRg3AVFJMxhW4osVDZg9Z7oC2jUZtXmB8eFu4N9pbzqgtGkbWRw5TC75mvvmC"
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
