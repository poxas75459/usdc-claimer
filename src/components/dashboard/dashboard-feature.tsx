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
    "4Vdu6nwxPbFmC2mtac4zzrqsdFg37Q8dWaKfFzcFPaJYnLbjCF7JTXw2sjvW15ZurAGg6Aa1GV45Yazhgz2NpkcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rjpMLxViLRrU5cgFGptoTzRhpckT4LKrNaV4FfWHCQjJAfZ58GEusgwZe1AwwN97KdDZoQ53PeMmkjRMZ9MzM87",
  "key1": "PnNF6DqJL53F28vhtYqJaLgiDFj2gfCtsw4NSLk16S2qADcwcwfUg54JiYQ43bHUsVk3jmdxD4VRpUG9DGoFnvy",
  "key2": "T4DdoLHTehfWqKoCzneU32Tkm244qRygNWsLJtwZerL2PQYxesdkJ3xnuKeKjxMVkTv4Z43LYoYStsEgYUGMACL",
  "key3": "2U2Be2p9tACS73zcFETG4btJD8bqKoTiP9sHGEWuBSLVe3BjdPuFEx8EHDD9kG3jFnpkCVZTdPWaN1keAw9n3YAV",
  "key4": "fBs9xUmadX6RQexteMzbwXWPF9yU7vxgVR9KhHJ6BU1G4szRH2rwgy6ZcTsqnuZx1FguhURWFEwBJeUxJ4WQYRK",
  "key5": "4zCr7YsRG5GQqQjH7oQgis9StuAjKnsRaQ4FeswWPAiGirZReTf4dHdshv1ccdMvEoPd7YGWEzVexg52gK8hdx5A",
  "key6": "3fvyt5QYbV8qX8YceMwjqyEEFwVD25Yj9WmCHzkNQvBzRT4HiSr5GN9PhTGNA42eXSJLwmpwEgTPaE4KMne5x4J4",
  "key7": "3DNsLSFeiLnr9Y2hew8E7xLQXocfVjwuivPk3xJ25tYfrfsuv1NbJWAQgZQ5okiUPsYTJ29o4zqsD8wu2bNPrVwc",
  "key8": "5eRaCDq1W9vxzkT2JiunsDFPrZk964LciQuzXg6Fcue4tBjxrq7GDnV4hxKiTPRW7THN6XxWWEYkKkPHe7BZPDGG",
  "key9": "5Apf2qw9H5eguQ9aWP4ktUpXE7FBvxrft2K3PMPJjsQ4CCCzn3AVrJyiLZs84NLZ9eg7HEDtQHFSJDDv1XHdrwKd",
  "key10": "5DvKHpWN4cjVgtSD3Yv2njMAMgekZvKkyBMhDahXKjVyKVNUEwvwNMLn449MstGkyRBbEfSwWt8mywk6wZ4fAyrE",
  "key11": "3rXehFK3ZGdX2eptJawJ2yPLptRHEBWdwTimMsiFDjbiHbc7fidyZiToGtAZjQGUCwsgZ3ck2tJ8z599HkpgXTz1",
  "key12": "582eJ5FcKxA8DYxweNRaRkSSLjsXzQAme9nY7Vm2rcbmT7m9GBnMMxd3EN9D682Sq4ptoCQgBEq1YjRfdDZ99uub",
  "key13": "5u4dyzZAHH3nVVovJ3xhX3sf8qXLh9ssSUEP4KUPrp2j6hkvxNcyqoo1hfpZLrJb3HaAbeaoE7tTZMULEWpnbKh",
  "key14": "fXPXtgasXCCUyx7cHCphao31zL9yWCdhqMTKupeJ3QUrGhn5Qc3BH7qk7KX7p1PfWgL38cBK8PqMxqmYZ6ivYn6",
  "key15": "3z26EnBsbpxPokK2nQqKdEQZExRfNnuzeDTQ7N38Kas6dLjMtCpx2BKPJnvUsoR2TVsmzvPuSigKaV9LjCnRMy8K",
  "key16": "3faD5bKQpmF8sUnsgsp9a8U9pwsyQ3PvqGeQV4J1ZHMHQaG4qssSWPF4whhYSbYveyjYZJX98pVJbpkXr8fvGEi6",
  "key17": "4i4gStZMtaPPRQBTnDp5rEeJTcZUGnFbnKc9m15qdfz5VuKfhS3D6RhD2bx1iFZg1E66wZstvmKUSKEwwgZvNJNR",
  "key18": "24MWUF8FCoVYJE6aukBTJ1qPRggkAqnikbAiTxALWwnzE3JyNkxyZBd42mXcKvMh8chacVFEa1SGjo1zUy2H32oo",
  "key19": "5rfZR6bhUZ1CxsDfHXNrD63uPB1jLYsd8W1hDMszvJSReYpsagodta1fjavhPEkNgAkbRma9PfbZ7C5S6gqvFMb4",
  "key20": "52ZTWR1MHDsvCqXem1a2eqS8mzMFeuUbP4nwnTFQLWMeyvJtsDSu89fLViR4B1j2Kbu2GQbmXAyGyFTMWpd3Tv6W",
  "key21": "3nb2SFdJmN1aBU1tcoR28twuHkTusgmQEaJ8KCNNcSZyq6sbKkjRgTZVbDPZ51wPeJjQWEwLdbLkLwZJSEg7CB2c",
  "key22": "4wgX9WNuv1EH4eUMJw7cpea8BMtDHHHefSwbL3HeRGKyVG5Td9bZfm3TAkxvTBDoirffCJxHmaKcDNGzaBHVhztw",
  "key23": "2SUYM3o3DjoUs3EAJZEqQgMrvvpbWGwb4Bi396LpZBuxXp7wUA7s4nPNLhhnasmaQiXWL5myNo3V5thFn9CUAwsS",
  "key24": "59AhmZBneq9cnqhYG76WcnkHXXQnoRKd3JPzcfbYTG4JC46Q9AxY3ERabrcNWMWRAeccby6S3vnxZfVzFcv6xcr5",
  "key25": "3Fi3QXVzrbpqGPSPrsU4auToCRo6sRwmrVj9C2czeDwneed7hMTPEuAtpwFgPfJR7DgV5qeRW3LwhTktV9eYmZzM",
  "key26": "3wakVQU3rRE1mU9CUhiS1Qx3RaaCj8XvGExSQW3wvRTQo3r2gq8nXZAHVoAZZp7trAAJJaxmQzLLidh9aqVo98i7",
  "key27": "3HHDZTPdqPNhLQKsTMme82aLsVtWUW3exWwcfWCQAT6mrhTmbfcX1gHR8MVBR3PHkNVytQbaRjvkD1J7LakUN5no",
  "key28": "5w7tLDfpgF3GGkWPHtmS3uwasvhuCoPBSRsQmEgXxoG3oJnjvimxJq1aSxEsTeBmaAzH6gq1B15qUtBJDkLCTr8A",
  "key29": "4koz4T1VfgWN2CtC9nrU3Y27V6paUYtNigqFyTGzaScJvsTf5rwhFFvcnxhD1RJPGQKMr5GRNNhsUUTxitXJmr4q",
  "key30": "2xUhFn9PTTdnpym51r9C7VjKb2gyz1srimSUqt72ejp8rw4BzhqSiZTSnv13KHivnKKruhmRR4cng86M3r9xTSJP",
  "key31": "3qJCAn4bP5FgoMaPr6dgYk27SNnmQHacR7xU3VrEVt6JZrEWtw1PGLDBaPrVQoAuFo3oDKV8DizXt4UvEfwCTem5",
  "key32": "3p55xzSjdhtj52JV5Vzbs8d1gsVUKcMoYAgR7deaB4yELAQUEwznATwRS4gF1PxCbd9TTssxc4zLpK59LWMW6nnT",
  "key33": "4pX27fbGcYyntFqxz8Vx5ti4wqWaYbQCcf2EGdJojs8CFNAMZWwUQ9P2kgkq6SYSqENofDxqPugegFuqZoMheFAg",
  "key34": "5XKJcRn4QW14MN3AbuE87eYGKgfJ6wAXYXf5u5WVxad38nYormrF9cSUb4R2qUNZZvp5veSyaBQ1axW3dRfS2Mom",
  "key35": "3Jt6pxeYe9YbBxwo2sbdEAs81YwHUUGWGHfyd33dX5ym7EcKJUvvmPLpKALVzEcRZ938rhsR2hGc8yYxDhEH1FaQ",
  "key36": "5wfEFvQLbrB81G8didpFyAkRU1gfPMv73TEr5JK85CoKbFQag7EFm2pLnna6PgS7k4htNwDwhBd7MFPpME3W9dsB",
  "key37": "3G73CL9VMZih3UkswknHaSVRvqmh52LJPyC37Yton7DaeLVcLu6VEZVKmzfLxjSs4eQiwytK8do8SDudgKf7RxYB",
  "key38": "4sVpCRNpy76nZ67AR5yzRNWTMdC6of6B4ftHFuE9WjXJX7PkT8JvB4g3qgScTpCv1Fn7wM3CuXhjjjwDWxKg5rvf",
  "key39": "5cntC1Q6S3WG9hzLkn6892AnPTp1KqR6gzxyv7ALHTpHbNNsuC2kqzRsgf1m1Vq4LtC2dvLcmsaByTp4VnyGfqs2",
  "key40": "5PymMiBj5dehmvgdexciCanqFrh38qdUfXcjB3ezw1ge9E71LwRzYxynzAppCzoKjzJxKVkMomzQ5ho7JHVsZtJX",
  "key41": "29dSdf6uWZBjJRDAWvQd9n1Muovf7D8Fy6PtjYfF56rHcNYZuYtvqYyQqeeaJECMevwhR46rNk7q74LuB5SfaJXp",
  "key42": "5JTG5nkEFATGVPNcKan5x6t4tGqrYfWQ8TJyaD5YJXEPwwempeVVEsjT53RJxfrJuLc8GeZgDUSHd9TyGdg1zATu",
  "key43": "2rSgJfRBUSRi5HxX2wBggkf3oyGp6smHD7BHX87G9E7E1iHUbnYZ1KP322k6eTocSnduKqt3ZCEFfKrJGX4nz3a9",
  "key44": "3Vhnuy5TTGa7tb1dLxzZ2rRzsu1cmYtK2uHpR4VrFEoJyJoZauKHjex5SzJWh6cpswnVZLDM4wo9mkY8mQsPwdjM",
  "key45": "2sz5rbqQdtQ1BgpYtyHxbSFNZiYvLoQvGgtaEa1GWnfy5KZ9UWkMShjR1ENRz18SyABWfz3SGMCQzVN64X6BbQma",
  "key46": "2szzYBsBrrnod4B2536JspLsDmw9C9S91mf6m2eaBPnBBEMifYEnEHQ2PCgApEWe5Y8eEUXxjaYHQbxoBLTQV9a2",
  "key47": "4LnT2zNqgC1Npb4Z2aXXWR5eDaaLvMK3gvDwiJNVyMxNEJmhzCr15PRHsyfJL1oRjvj2bLnuEbXGdcxrYSxppeea",
  "key48": "pxc8nMoB96ey9bvYb7bnCK2hpzE3MQ4wFoxPxbSjDq133HVx1yNWf2aK8VF5K4zVHeGSQkUhpBT15Kt9j3Q1jG9"
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
