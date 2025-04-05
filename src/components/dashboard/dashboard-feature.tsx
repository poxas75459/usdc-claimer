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
    "3DsMdzagpy2EyVpySuoYQLfK6mPLFdLjjENyqCUw9C2rJCuCBbtMKf6VuHnU5bhtvH7yT3APdEsHzUBwnhzcp3Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SnMpVdG5k4kFLAfUZQ8vRA9M4AQ1fqDJaGeQh8zZEcqrCLbgjr8MNYMQjhRHwyVRNnCX4u2vfrsvHTQz1iedUxN",
  "key1": "XqLeNjdn4bjLHphjwPV1ncyyiBswLkSzEtJfXnD4c8KeavGmdCa3vWDP7zLnznNaSgr2BmRaF5DjZKppVNs1aNt",
  "key2": "4F61yhSLoyyYmexLCzJrg6WAn6aYeZ1WjdU4kRXoihzCGHMVNh26YuN35XomQMWJE6Nz81ByvQA2yUJsDGJb7F12",
  "key3": "28DykKxgx1127d3x46wwBbswGPtWopYbAZVVpjAChA83JcMWXQaLCJ38SFcKY3ctjG8v4J2ZipT14YGq8Bq6S3vf",
  "key4": "2o8BU7xUEvoVVmXe2VG6qQegkzt7XdCkHDZ7h5axtrZJbviatYcoKim8S6Bu49ZwFeLYuH7cZjqfZ3wX6qAjHkE5",
  "key5": "36pwbHvoKsaGZZCjfQqQY8rbkPWupRfLQXFqak2PbhjzbjV1KXgzXrPkwosAEkfxgcxvTGNMWVHkC61WpLST8y7k",
  "key6": "258YbtDZXLHo7WvYLVnw8WTZBUs4NrDLdYECuiTTLgA6RR8AiF1WzMp7oQWiKMpzFY5h4gG6k2y8ppjSg3Ed75TA",
  "key7": "444YcLsMbrjNiShtAzDc4hw4At2PJxfEdpQcND4JUsjaQ9HMxcDTrhHWSuyFK8GjCTauqbdimhLExSKkxdyP8W39",
  "key8": "3mHHrabFgEw3YYAqdXBcFxVc9vxAGxToyz8yRscARADe7zVxmAum99Jqnvc9qiwTbZ76S1uywMjz31wi2FGEHM9H",
  "key9": "2TPak2DP3mjEEwLp6DePEe33iLWEPfwejAPoWgC3WMuByXErDSH2o6GAe9hqmkbbemsxQNK4U4GRXUhWvyV5644g",
  "key10": "2pYX9mREtrWn8WGdmgvgFx9mdtoTtAaAVyVKginm2DsGXhNVbFca15wKUd6p2Z7W9JyuXxemvgGdBJ4v2EMP6dYP",
  "key11": "3EabDHhuL9Y2NYARwridm1DPA4DcociCzJQjFABMow4jwEyaHhdD6kmyYzNULig2cSynxeSfStmf7CgAVrn9vEDe",
  "key12": "2vXMeYAo1tjk5vUrutueXcpx1iP7YqQHHu8W91BY6WgWwCSS8jfdGaSiPSWFALGeCMqDFz6EFZTc88xvtTkWPaah",
  "key13": "4LjpzqZxtwmoPn5pS71YzAdvr5SvTVY3Ju5XJ9Vd3TU5EesxjViG3c2xNiVBs7Gp9A3rSTJsfVHhmP16H92KbGZp",
  "key14": "2jXkgnJQyHUnzEinJqqh7UU2noHSiiDSityCmNikkQjgKvAzbN1aFqoaZWySLsYDC9UQgHwJez32uXKughdirFo6",
  "key15": "4TRpixALkwfjsqi4LR3KQMyXkuLRLEgz2pVmzFz43fh6TNCxEUnKykTinWg3QPMK56UYt9edgxtqJgASjqufo4uv",
  "key16": "3qd2FbMLFBSYC3cWTkivVKPKJ8e5q9chBZ9GbK2EzDm3nteRi99KuMeQ5jx6AzQchAgkRYAhsArvPBzHhoW5Exb",
  "key17": "3oHchPcM86eUqT1vnMadNw9BCt7D1h3yD9igDHJf5kmpmFjsV3PhHpA8oKiwx7nLFuB8XncP1eU3S9V38pqxJ7K7",
  "key18": "2SpepQnJDiMJWAfMksjaip4ZWXQBeZpCsoxsU9iWTsR9uLgK2YwrjC25UFpz8CjyjpJWFqsFu5gyQ5jtUPGntmSG",
  "key19": "BZhpnxEYwZuMRuNMzdi6yCxiyxxpgUwhhZWJcmPYBxEgYV1772DGx2YxHpBp3n1APouiX4hwPHU7LM1EYRSMtaX",
  "key20": "m5rBhx6sUWqQHi8E24wwdM6F38zZY6jQL4tSjGPLmRZt1dBVYQQYBy5tjpvp4w27EgHcE5WVFpqtKAA63WTYFq1",
  "key21": "3JTRxYW1zZb7MdhogN5qoTsap1aTFWNWRcwM1Ynf7FqQ627gR6ENMWjShtxQHVmcdvUhCgLjQCEAQZhMx4tuzopP",
  "key22": "2p77z5d17vxkSfTvjuJDnd1j9ZhdPaNpvXP6GbbDC5nfbVppP5vsFS1pNzYwwJHCXhQDc94vCqNobANFWag63h6f",
  "key23": "3hUohXuiaJp4vPBp7FzosmKKzXMoxa9hjx5mUpLvafoKX9YV2FB2kEuYDM9h14GBxnGi2u5gAW3B82JH6a7zU3tM",
  "key24": "21Z2W2BCx7NjxLTZB7o2dPrzUQnpkrPbofXRMFT88n6bYzoKKWATi7v1BFbzQX5dbQhrFGojAbsmZpRVqQCnaLTE",
  "key25": "3dG2dw7EGX45QFVALCtYhTUvEcsi3LEtkpLUG4k83yDtgmZZ3RPx6UeMNnceP46LAK6XRuBw4KKZ3po8Lq768QcV",
  "key26": "JuJqacbaMetpzgEnjMjwHCfPVbo5zAxvsnGFjsfDWU2pcws7JoALot3dnKUWYg9mmqrkjdxGsxeerBXrkn4GNXM",
  "key27": "5Uxszo1wgGG2tjqYd5g1d5Tjt1wwXLiVUN1KYKbmxoeMtSqP65P7Fj9jzgu665c6U111XfgHh6km6CmKUmkAAnii",
  "key28": "4gHb4vuNuRitUDCNjdZBeia8BArJDe9WNomrLjkosxSweLNWAy1PiGRPzy5yR8puFAtoeB6oBf5zb622T57z1Mca",
  "key29": "TQbQnkmEdkq76jkahhP3BkaccsNTzBXVpJRspxYQMgngpmVuPEae2VNEVckZzD1kU1TEdi3MtGubCHDjD8wi8HT",
  "key30": "4HWMN4fMuyg7NuVM6UmsyvhwDkk3ioa5TLm4squJzCeTbg7LcthRrTgwEKbexZqhk3zKja5cjJ7vwPvefM3K73BA",
  "key31": "5iKFJajTgHynFn3vdLc3pmdfTACZ3x8xB5RCYfT62jcCu5ii2BTomwQkkpnjsoYhZmBRDSHXeqbTxiae767UNLvT",
  "key32": "3sDNhxJfUyhFbvgHGn8VTMw9DkGkC3xP46hZwSwghsNUT59HZiBiA78x6Lqzn1X81SXW7rkNZ2hyAbuwkpxd2Cm6",
  "key33": "55dVpjtVgLKWpbLDadyMUrpbAMCB1QUVMqm32dcd8QsR1enJsM5RBnV6ZFquSuSCu9Fn8of25UqfQQdJKip3aJEJ",
  "key34": "5eM846XPG78M31xRjFZAdXLs7TX4jZZAWwyGJDx1run8fEjpnjkP1iKxJLZAe8EJE4nGziTgp12MMxcT8Bwb1cfu",
  "key35": "kR8s2rptPLUNK3HorP79mrTmfbxGdRP4kF6syucmuyigH73Wz6BJFb5oiPKTXZb7VaKiZuiVAAGXXmdR1zAuFWS",
  "key36": "svn2zWYZ569GuciKciXmGV5Z1EJUQNrGEeVgwbmpWC3oL3HHA61ux3v6GzE5gEsoPpzRMiqjb58BTCdYzL9i4j7",
  "key37": "5Ey9yLZRBJDLY1C3Nemo9ecSHuPqdQXtkRJ9FDJtkVUhsx96p3yQ35uFWFeMsVw8DCCrQjVJStvXMNQxGowYRr5s",
  "key38": "4mg6FQ223z78a4rYjh6xBDBfVMp67jVx64dwvt3NFBW44JsNhq3fsdziSD8NJacN7ar9DEpJra7FjJihFwpgjUU1",
  "key39": "FPHYWYYjch3vNGyKcwtbCFqzATKWd1rJLqh5rgVAQAUDnBQtiZhsd3W7gH9kyD2yxsdkM19opf7ymjaDU4aeRqi",
  "key40": "2zVVzi11PSdELDzMDRVWhz22xqG2ofxw71Ai9dbKhTReAdwjWRF7yC6HdT87unohryHaKWt5bFQAyhS9DpkPuHkD",
  "key41": "3hbizhSWA8WUxn5SW3oJwjZrkrKCbG6AAPYgipiVX72Cfd8bm5zHLPkJ7fYiEfNwFxi5S81EsEtYW7bKQ9HknScm",
  "key42": "3Cs5oFbV9kpDsmKwok41fU33op7JKj2x9GM8E2bEvVyWVf8DViiy83skT4hNno2gWhxHmVcVqM5rj9vVeTc9C6wV",
  "key43": "64ZizvwtAyraMPGx2YhmaTDUzXAwXVBk6DKJ6vzNYL38rWvdvX9MvAWb2FSf3xYRaBJgnjTVJpP2ncq3gBKGawF1",
  "key44": "4zDTcooCbZ5c6gfneNLCHYrHQPXryeLxs4Uxyd3DuW9gCVnKAFx8EW5y2iB79CmU6r5LxRkFDTKZbzdhoEH8XRSu",
  "key45": "dLra3k2dsdGyC6vQAFC9GKEbnjj486E1ai4DpFWj3Q4xJh4YbtUYQGPieyaCF9szC4QJA5dnXNRS3wFZ8Tv59VX",
  "key46": "4fGhS2NxSV6f1J5mSoo25LShig19kdetuh8EqwZnVh89Cd8zUtdk7SF1C2WHa6XD1EG8dUpY6FTXC53f7HMLjRvJ",
  "key47": "rpD2tVHtbgPxHyg6f3UmFupNR6qUuAYyZz3SHttKW5GMHu6xnhVqzmcDgcg58iRbfaUH9wDR9eQeAKAKUQW97AN"
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
