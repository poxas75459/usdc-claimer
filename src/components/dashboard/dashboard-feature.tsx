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
    "3ZpYzik3ydC9Evp5JPur9RXv2ufqrxMb4pUoXug9wcbzhzzku2SinDDiZiZByNV2pPZw6erSo5xDPb8M3w8eJ65J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nq1uJ37B9hj2T6pgtvrR1cmjChEhPUHDik4H3mwuh8MkokGL8QKCYyuzuPqKBmyodatpkK3mYpKxhLvykU2qic",
  "key1": "3mzNi8E8TzAcjyxwtEq7UtTox7vyD8Y9Ci5XpZPt5oK8ZrUZbAY4pJDJwtfanC9ZJqo7XMgppbVMaD1mCwZwvwsb",
  "key2": "5fAeH4yECsSJCW4SF4x5go59Zo2fEfv1Fquh6kJD2UMZSA9H5LxtmxkahYpwHvyYja1CLrVcoHcGpjX7gRHrkVmp",
  "key3": "4FCAZ2PcGviWtZf128qxZP7o6ZYtMWBv2eV3vecHjpEenNumUphCqv9LcJj7aXmiiec9fr6Xn6hv5jVZAHNYddqL",
  "key4": "3istpbek11PYatMjLpn3sjVfNeYFzpmxzWvvpcFsJCSFr6Zz59hYDJ8zwTZ7uYUMurRN8RdQoR8bprKKjCA8U6BE",
  "key5": "rXTbzfMWJW9kndG2dY1pSmLzTZFvnnKvEhJQyF28UCzgy1eW5RoLpKiXrJqLs46t1YAL3xQ2uJXrLmDHJtZs36y",
  "key6": "2jMxyYvzZJxXsWNQAFSg8SMd8E18DQRhGCJ6BVZkDpjawjGri7N7yh3DjoCVr2h9USpBaZLKG1mLRTPxRBovwjPD",
  "key7": "3gs582vucsab9Fegxgf31q7Qh4yrvh9dMt4BtJzFQ8Bg7dBAYWbQMRTCCB11qqXnWfbkuhcJ3zfbRVamgxdKEqJw",
  "key8": "J22EKm35HyEWDEAKVEimqyUAmYkRKBY3NLmoFLNR1NpdAeX9c7cZuJzXXNvtKoYesGbwAea14e9CsuSDnpedNhX",
  "key9": "28Vb8y7gr6UXbdEote7bZt4pTcguFKwwUfo9dAgDAxhZ4GQ5BrgrsrJhiBNVAUfn2RYSKn79uPfZ2LgRd416XDuH",
  "key10": "4hNgxnVpFpuJnXNQEemnz56kC6cqr58kZDH8d3X7nKhULaWrDrijR7F3ugMdRMacbT2f5uo75WtP6bNk2qVKuc74",
  "key11": "2N9uoCNEdifzJzLeEp2XXz2W74m3LxfD6HvwskM4N7vsYrfa8g1E5k3SoWBqeiT2ShoJtKbga9kASXxj57xyQnZh",
  "key12": "y12igEGtPnuH87CskX7h3nMEij4Pc2e9yCtrYuRaGtXFiZh6E7nHUsmmGbGCU2cHwMSWT3uVqr21rF1Jdhh26u9",
  "key13": "XnFzUzx8RacBszMUgSHAguyECwiVYmPwdNT6U2VGZ4tLqaCtCvKKsyRefMYmKd6VLyPJ9GyJeimckwyCktB7wmM",
  "key14": "3677b2G1sBqWJRTkMANAwEyMhoCVxNsu3TkKnMpFctfm6wjzCFzsbdTSLkKwfkv3KzZncLUVbLkR217q5XZDUCvk",
  "key15": "3jxoUG9nKr44vd9DTZWGhvZNq94rrwWgUs9Fe3JfVhRaDBTHxTGLe6Vm7iyqy8VJDBMtwSMNqDF13paYxyVcvMSa",
  "key16": "bx1DqtUJR5Zve7Bk3AXwez7KxWnfRLanWtq1gXKVCE6yzot7girv2gojPKkXTNzeVazUQZLpC6zB2yiKGgtL7wT",
  "key17": "3CiSXpvaVSCkwQQ2FhpqAvs1GW2BaiCoZSaB853exCuXxxApYdBJajeEsK3sbKLyNBjGpk8mWRvMdoZg3fs4bLNb",
  "key18": "3EoV2WjQeXCYTbt8Sfzy5ZSKdM7w5C7wCSsUS3WydPMKfJ7VbMmNWyn2GUH6JRQ5JqTjS3XhxSAvHGjNAqLdjfMa",
  "key19": "5J9qNU5XpU2idewVKgpoRDKpKDVgaL7EvTm3Qqi96FHbLVtszGnQJsc8WLrorHXaNvXWjYszJdsDDxGLPFnMxDLA",
  "key20": "2gLLvtswXp9oWz2aF5L3cKo2id1n581U2vgsytMAYBJsdaJpF1t5TxrtbcHqEngrMMeqinTHGaYKRQqsYnib4oqX",
  "key21": "4FnYUt4oFkjavAW2jHE8UoPakgQbhWAsavyxhqH29RfjtJFy5M3rGA5Qf7HJBgqE5J1S7GiXZMdcYXNXv1sCHw1h",
  "key22": "3vk4vxXkfzsmntzmR8DUeWmKjkssRsAbQMJXdzLHNvArfVjhox95JvfDNifaz9xLdEtjA6bqGevgwbtLZNHHqy7x",
  "key23": "3nBw5PhU3fV4LzA1rCZArXbw5Zq5QMb2UqbedRBRnYV4xnGWDF41SJcDLqPhRGvhk8wW5ERCN3YHqeqSxNAGH3b2",
  "key24": "3bcCGw2ULTFeKsAMrCGcpagoFGxrmJwo4XxnUMGjUK2eFUp8A2oDgTZwDkbpeZQFwNM9338hpm5VbbEvxTLNE8fT",
  "key25": "JqQC4uGYyu2teANZiUDJCMRJVsTVdeNubZQQQ9WDum5wyUv4RT34JMsdKiYLtvVUuYAxYpsZjfg9RZJBxGvWmsz",
  "key26": "2DDtjdPv5yX3XY22BaDv6By2Ddpyb2pPtyKeavgKZua2ovRHFpPe8BsjTQjNxveJ4d7jcD4AdEfjRiAkB9qdhHMH",
  "key27": "2ZkjK72pXLvZHq9VK866qy1HEy3YuxnyLWAhF76eDtUYCudT9ALGS25TNAL2Euk9vKsQyWf7hxWQmraUvns24nHz",
  "key28": "4cBWB3NAkoeQMr8YyJhAAWehUEk3Tw2nKqBWYxv6tzpmbAYVWfyooBdXXcWd3vBqHc2rm7G6t1L9t4ttRu794uWN",
  "key29": "5yKAWaec98XbM2zMRRvE7Kw5JQf5fWjeYQu7YiT4LUACSFBwNE9Eqh1SS2siEXfFaRXm7kUMgkZR3GyGubN8z3hK",
  "key30": "2dQu8Ar7BYM3NUTXaVPho7Hc2jGQjFZgCgPtnMTdXhwoA6gim8r3CWts1kaeWRDRtjFK53SXA9pkcE1tqDRg3Mci",
  "key31": "5QuwMCebZGH6frdiXEqymCBbdo9GXCanvsVMzpAbwjeMUZqEwKTqkALUWSVLNXLRmxWFUxmb2ZPVn8bsrL8ZEmyH",
  "key32": "5r2dvXnMJqKiEzYS9RPQS1wNiXPmVqm9tyvBZzTg4FDDUo2jxKSfZsEZzjP8qeb2pwxkKkBkv3jj8SCsM4SrEKFt",
  "key33": "5XcqmnETeAwaQXUqTJXoRY72BjJqtV7578YXCww9eMitrZnwg5SmM61KVjtfTPYKVmKyPNYG3YADG1dS3D1gutLv",
  "key34": "jx18jRuEtcsv5F4PeVvaYZQ6wMvZypfTZLWyzKW75tqMo5Ya3aBxKLLPis39d7RWUehPQFaPXxgSmBsLi4WXM1g",
  "key35": "5BdgFxQZqHG3jiKoDTfer6KjQF9G25jSSXEVPCWF6JFfamuaBuW9XvAPnVmehVqB8Tbzg9zv2FWxWedpfKuenZQZ",
  "key36": "VPeNtqTcXuT66aJkyhwP8VxWaqapAaFvSfJVzgaMfCg7fgNpM1f53zhYTtUFafADTeiVLzS3UrxufT88PewWZ6Y",
  "key37": "4FQPyu7ifKxwrE66cyAPUn9UPmT96Fd9eC2nTcAYqPHqibNAFpjcWnjq5N4sVZrFaannqUWvayPuM5tpPqWEFPxV",
  "key38": "3HwHAcbTAFqRh5Po9Sh3ALXhGbeSCZDXEejnQjq5UMUjSL88vRh1Dn9eED6vEr5XuQBPUjNeFrgoUK5A78NNxJoM",
  "key39": "5qqETboURnSz5Ksh5nrTbAyLZEaZg6eResdSJsnGLnranDZ2utfa7vuy4A6zMrySCaZX1gQqKhdWA355B4UfVZGV",
  "key40": "67mRTsMYCdPHqYbd8krbjKeXsWefunkNbbKxZVgwZjEmZVHw4jwNQXAZoxT4XTGUh2WZwtbcLqM1gRaECtUou9f9",
  "key41": "4GjG9EvYm3aXcBq8789ZX1AvFBS8rvoTXkvzRFRE6YxfgvvFnJ2FRvprsBCA81AbcW5oasWsk7FCj6QPEyjGe16t",
  "key42": "22psnH2dNfTn5MEDBVLPY3aietJmPGZfS8bcBxJw1P6aQTUQ2d9W8fRvgGnWSyKkBQZECrDeoukaFgjhGU4DiHvB",
  "key43": "48BgzP9GkgC1tDJmeh1JhqKyU3njj6f8Zey9whftvCJDCd1GwBKTgTz5c9oN8MiYfDvKaF3ZTsoecrxR2LuMyCQu",
  "key44": "5vKYE319HVmEv6Yz8BnnxkSRWMAcr4Bk8jUdGyPWW6DEk6aANdZvhucCN1BzSe3ZK2nwgNmqm388JWSdhuFWxxWv",
  "key45": "4S8XaMAPa86YEeSeVbFLGH7adgttPyskjoejdTxXUDi74qujZ6gwT344uCYZ75ThByyXfAHBcYNsWqtp3mKPNDGC",
  "key46": "87TjQzeZZJSXs2ePxbeFxUtcVnjfkH5oXuA4x2qCtFjYsoyFxt9QXgbNnkZwQRKdvFFXnYsTNsde86y9cPWLVEh",
  "key47": "3dhHPr5Jp3JyBQBwWXejhPGUGUiTYAMD5PuR4drdHjxRUWCqYwRzfzMHKmGpj1mngeBnTsZknNjeaeraoN4XCSnH"
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
