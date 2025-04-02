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
    "4d8rggDiNztLfDDHm4us5u3oCTtPibfUjdCCDNLQY3g8ABdeB3DWDPpbYoY5kv7ecVih5rMfqZdWzmXJ8z34RzVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTqwtJkWTCgYk5sDweLZy6VKzM9bVLCL2dXsRdEKube2aEjEB29c69MRRXB9oEunv4FnFtniwHbgLnDgW9g9JHt",
  "key1": "2yEwcEcdfWoCuurdu7wobvJh2P2kAaW614Z9WajyqB7KrCxmbSVeu7Y1dezMzvJEtNB21eh24htcLhuqyXJUduRD",
  "key2": "3xrMuNq4HymxgpZBCJikAAbKZks1rDSyPV3YzFJu7Lo12ekgnYmScp6GBmfrQxayqErQuYe5Z1z5cFNQr1RPwz2g",
  "key3": "2hzNZshhWpRAqgH6BB8dnn383RPwLC2pWS9KQ9NonJeoZy72WYpAzAWcchFCpkCDiYyjL16ujUw8JbgXZgXLtNPA",
  "key4": "2JnW2QE35aD5oZ5WKKzygWCdNgKeRPSBXjLx1tNDnWXvXZSN47v4Twmo1QhdLSEfT91NmMNtPanv91aNAh7JSsem",
  "key5": "4tFsDwAw6HXbL2PWXFnfiK52rL7kYPqwkzpbHgg9Goc5cxXMqdXUsHbiVL52t4LSpo9gDiUZFbCd48erAxYpcPnk",
  "key6": "31tUcu8jyKqPNRPwpZ8UJgmGu7XGGtuE6tpL5ZNKvRqSR7qwBBmyZSkVBVPCmkNwbdvcm1zTtozm7qkkQ52Vvmrh",
  "key7": "btY3tmripmWs6TsDGur5TokmEEh3CuW2zftbzADfka2c6gt6Lx8nyfYHg9ovfiazMRbnYNCWQDqVtQ5TgqkmX7F",
  "key8": "2S2cXQZkajPXWsRi9QM1naBiPKfd97117VbW3Q5x4frEAz6scjV22cme6KTjwfN1BvQfkDhcfmQXhFGecDQG81fM",
  "key9": "5tqZqiH3fLfKHPjMVzaSG5Usb7cyHMKUnbQH8QBvHc4W1s9zP7QyH9NNdnqhBJEnKfMTQvWd8Sj1DV1Qi5cbNGu6",
  "key10": "3oZCPmLbqgyGRixzoGJn5TtE8E3xU2q9nSkRhMeXrg4ANRtPEcqqpFNzqrFVczQkB8NGQH9KgpwatqzQWkrrdjk",
  "key11": "AKwJWsrzvv1A5bWzZ3rUw22srko14hsmLzkXp648Pqg1pQW8oV9awK6xkyHe2wJ4toGsW9TmyQ6BvcGaGtquG7V",
  "key12": "Zy2VkNVmv7xEmNtZuCpNc1Coku7c9utMVftFH4LcbXTHo8LxH2qM4kZyb7BAzLBA7R6eETLs81vLdp7USLPhShw",
  "key13": "4rvuXX5aAoq7UXJuXRAksvNtjfNywz9YqNBtGq7hkL4bDVQtxCjdu9H8VYbXvNkEpypTkeFrdcfbjwNjxBwztybX",
  "key14": "65WKfmePMM3dK8h4MwuKV7KVEsYbCQbPxneFdwnRdxj1rsEhUKNCfSXvGifATAfBZtLhgXGRhWXp1K1tE3dvQutC",
  "key15": "3ENufoJa8edLJwToHPtUP5KtSPcx8sf2cq4HGEAJuvnQa8FZz1kHfkjyCu49azLrtAcabBKY5kRWPg4yAvcS7mrU",
  "key16": "4aSHGRtaK2qF12tuxRPH4gJSx9cZyn4zujnmN354RTevYTKm71CXJg6dChMEPe6L7LEqZn9Y6YAriLxRbSKVzLDe",
  "key17": "N8m8QHMYpBiLdhiFveJEDzE8NRcKpjKn23NG9fWYXfvLhwsHjhpLDxg5wZ68rE4hnMe191yjEHdg3ttzveiS74H",
  "key18": "GBt2QX8CNuq6M76W8WvdnyyAW2LSTpTebiuSRDKgo75PGbcpmHVEzD5Nt3tRMC1wwCnDwAEeo8pdF25Y3azhK8W",
  "key19": "umJtkbRMz3Bw89MLr16EijAUbUmPvWNH2zCpct7ksMUDZUZXxWNdcw2hPRqUxve8iur9uR533gwgg7zf4r3QSSP",
  "key20": "jtykuTQwfKR8nHygabu4uMvWFRZ3vkXK3inpyYzcTpUTJ64j3gX3m3MKkPAaJujn8FeW2HPY7x5DzVkRvmmkvBW",
  "key21": "46n3UfVNumDrL2JcRbCWhAwfepCCs5oY9uCmt8xXjCJ1PEcU17uAqVc1jycB9kuA5v9wtZFzZgXCUwNg6QKMvn53",
  "key22": "5WzGbFtAkZeYTaEHaoFgDpXPxqkAa86VAjGvZjDWb1UAnsLSifMVMwHkKA2ptgjFHW7k56EM84KQYxfsDxwGzqFc",
  "key23": "3wUF65W7s4EDPBCQWUEWC9e3X95ZCRK2pexcrt57Y4n9KScG4kczyM7MPTiWHw4Z6sb7TphTNEoLmLdgv4GLfm4V",
  "key24": "3hCjwumM3SnE8vZoaNq8RKNXu9QCWCatJDKwkQwKjju1bccVz4QPKPHSYBuFaDUmqq8EeY6nHKbXUYMypxaz5mqn",
  "key25": "3DygLEiSNHC8KFBAmUwqdetA5WVscaZGrrDpjYKtrA5Wvw5kDTZ52QtTHzaUZwNV787uxXnETap2g2ywLR7ugY6",
  "key26": "5UMn5G8fd3QP21EhpispZiZmGfQr82FLpDpdymwaugjLkRzWmUqhmi2teR2Gj8kMjztHM1aiQ9RzdS4HFAeWxbN3",
  "key27": "521DF7Q5xbmedke9xfkREk7i1mnoEL5QFyrf2xEZuUbTKdrUVXE84Pvv5Y8wBfnQ4iViwZ5UqmxDuDa4JN4i6mPU",
  "key28": "347DYfcirGdG6vX4H9w7KVcGqgDV6JAzD2H88dL88rYyfeTyAkNfHVstUrZLrVhC72CTgUXyRRtRcnSknUq48UA1",
  "key29": "CbUfJhuN91Vd8G8bExHqTPzitJb9VebKwKnUfk6atqfNxALpqteeqgfzjq85MKHzUzjMEioFQLWxA8Zqd4vfwbY",
  "key30": "5sNE3FDwLRdryCEoeJhxo53XG4A8LgumP6wBmwT4MstYKS7LjExi6xkFoVZKoyKBWqazjgzx5fzeP15fa5rNc3bu",
  "key31": "4BMirggQZ1uEF5aGu81zYKSip1hLEyePQUedwx47f4x39NQiMyppcY9tdfS5bAL981iEk6pgxGpqFthPRwwJ75G7",
  "key32": "4q83zXegkMoBzZhF3f8eH8qLwJopeYbpfCNfxhTbeqpgAsqJSqMqFJuJJLXidT5VmrHHi4riHk32ZApsiTRmBY4m",
  "key33": "5cBn52KSY5sJ7bcyyY14DCi5ktDCpsAhnfiZdzPuWxyHQJRkcLf1z5AusRvr95FrYamMkd171dcKisaidqp6HoCN",
  "key34": "28ZN5C32Dsy69n8hTci7nTDBsV8rpinn5DyxQyko6NyT1GZFmQK8sr76p2Z8AvUDtt8FNjMYSKKSPqZAQbD6wHPR",
  "key35": "48Ee9jDivcUNSGgRk8d4ABiewLnx3kWCSnYKdDt73RY5rPxZQCbPHEd3XaHLCsG7ardUb3AqmUe1nLKt1tDEr4wq",
  "key36": "3eJBfhcyn75Bsouvor1RaX5eTqWo94skF9XtMWW6MGqtJppBhtGmL4PWUbk5ocoFb6RXuPpFr1tF2u8qog3DPTaj",
  "key37": "3WprTSN4bjPn4cxmQq1TY9DczLSe4ZewCgmQvAKEMEg557twYCoL8UBs2j1GUbezQ95DsZ94Pi8dLPECfy1bsd9P",
  "key38": "3yFyga81dpRNSgZcbEAAZFB2ryyJvetH2pXJpsQiT1Ggrcaf8Q13KTuno7TbgNbDoBi1qDpWKK1sQvEfy9atDAVQ",
  "key39": "2nFmjEK9cT4mLw8YXRWNmaMXbDBfznZfbApo51gkRnK5U8MtoecDfXqLNrFSa4fefWsSxk8sax3sjkrYB3Jhe5KX"
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
