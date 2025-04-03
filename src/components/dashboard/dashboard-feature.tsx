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
    "28EEegLGVfYKEiYiGTbjGrc3QH17fCGXLSo3C8wmTr7hq556aEdFDLUcyZ6qZNheZNiR8tkgrqT8HGasVemTeTg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqKg1KamZjhQBwXgyKJ3b5ZkVGxoWP9aDRyTpXvewwEjq1Za4zyPyvUCTTCVem9x2UoVBrzjeB8kQxvQbi7EheP",
  "key1": "DATd4HKALHTPBBJqHjyEcgSSp7qxu2jSK39KDnXF9mAuc1xu2qizu86ptCuoZeUS49WScHEzFkXHjX8VdUHfghg",
  "key2": "5XuxpUwLvjdNV1EUkEcEGxwfEgXfbygbXb81T5xV1SU5trE9F241XaKPGn1vMTyMGZtnqAUJJQ8CFNTHJzk8DhE2",
  "key3": "5gTRsMBoquZ49MphjwpoMkj4wTX5XcKyfEr5Dxxjng5oHA7U9FjjVM8t6y6oJHGwx2oC9rjMEan52eWBwSewGxQ6",
  "key4": "5K8qjcBrAibAD8Tv5MxVJkikxqbGmvHMCxjqRT1tpeN6SNQMLFJK85CHinSjHCSfEHK3fvmvN91dDJ5Jyq7nHxDD",
  "key5": "3SyfuKbpcmhnvcukErDCU5Fg32GeChboWZPTYkZV1q5NnmaJ4iqdEcFFPtbsbzmAB82gZf5rc2iyRMRVmFcVcwgg",
  "key6": "3c2tPhbfGZW73hUo2tTxAVKB1RUC2aaokxgn6DzquB8vPQhY5R8pfpiANJPjryTDfuQuSqQ7Bp47rAD7k1YJfu5a",
  "key7": "56NwXoDUHHZa14j3fFnu6ghwx2wxkeRd9BszPNjSdajzxXhZMLuRYxomsXiCEsnpfWQ8xHq8VbHC5fhu6TsfnNJE",
  "key8": "3Eee5Ct7vAitj2Mp7X3WP8BdJS8RA1yhAReWHcHe27PgicdbigYnCVm1633oPy7GVcLoM8ybk7jUZZfiDGedHNAB",
  "key9": "3BhZgtu4FjXkDk3kuf8amafjcnomcCw6xomTsHmnxwAJHNoTwD25tNStZMNJkMDQqY1bXJVJehLLxc2t1eSwNGzY",
  "key10": "fXV1ATLSg3Lh6sT2kDjtsbCdYaJGK9BrSGSt3E6ECBQtT71PqsAsEPobhGV1nwypB2QUaekU9F6fDadzBQvgX7a",
  "key11": "3JFZd6mrxAF3JFxTx5dg2rV7UYCUSXKdNZELJmRTYP6YxqST1G2KCqVgDj78A3vsARgQRrGRrGrdgdSmaw4GVufi",
  "key12": "23VRxbD1xf1Rr8LaX8uHD5WVjvD9SK7N45fFhFRYdJD7EdpJ1Nvm9FPdJqyU6pjteYTEyyGvuCeCwisHMjVpX7fY",
  "key13": "3CTqbvYqa69JaadMxZwvxAvL66DurAi3gckLd9phi5eESuh52a6FPwiUN2sXrNEy3wsxVgojaiS4DMeaKraz6HrV",
  "key14": "41hYRYJtRucTNqkzhZtwDWqzcS3Y74pFzEJLrEfChcJhv1j9afthbmZCxRkLRY3F6r1HjDaiyRshe2ASZVYzywww",
  "key15": "5ArjMXh4AqhuXU1PZ6kbUtRM8dGpDX7gTAvAC9xzfc3hQeDV7rwdb7ZvTF2R8cjrDYjCU9M8UwRhqbcdckZF1ctB",
  "key16": "c9krW3VvM4wULMCucjkcekiMGgHwTGvwZAQSUAc3MYoY3FURDTsEpoxEsCnp3WMKWoNqE71QnpPwQ7qo4i2nFMH",
  "key17": "2d8FmniULradgmBe3SA7S9SKCuSPdXcTXDETQmQsDNLf1mfgKdbwnQprKaEKsBXFne2Kov9rj5rvqcxTAJtPUSeH",
  "key18": "HPtXdu7Afs73wmBjTeX6Py95UufHN3sPiXRj5BLe9vBtNE3kwzaTCD5JTpxqMHbq2XNq8PNFjGAH1TqXQBUh4fU",
  "key19": "3eCpvaBu4TuzGTXcyJxNT8nxSXZecEvxqNz25xeaWW1xobkPu9rmajmPzNETLZuc7tySiFK8c4wLUjWbqgFLJ8Ri",
  "key20": "52Jf7xdY1errE4TbfWAuTCmLGvPdopVecMTxYPz3zBkFPpMdHjbupkVZvLppUwP1pm9wz8LUAfxPVQ5XQ3cDQcZa",
  "key21": "3rXDLNrsSChiVigMjdYWaB3cp5M423LmALHcoLvVkXEUEYju9p4FczDPTnEnHwNjUGYdeZU6j9HB5uQUe91cEfej",
  "key22": "5WAXHj5CLbWBUBtqnWctHUE6tHEbpwGd9tRZrVvVDLuYhrQAanhEHLFrEvQo4fQeizz5v3RCp9NJurzGDtMjYut3",
  "key23": "UUtdkEMnUcQLW6kTMk9eXY7iqAbYtidiAwRyvUBgAwhe61n4AqWoEdd4sFo9t1F2ZH1wFtt12ksXzjeJP2VTunp",
  "key24": "5iq227BZ3xDuxTuHs4kNmDKMFWvCwTi8EpcF57mbMYybSHnKnxNbcZWKY4j1Svtgcsis2mTk6uvF4gKAg4jV8pW6",
  "key25": "3MwDFweLk51ACPJcP3ztdTB34FN8RSat4VjzTWnvKKHnW5dTneRseJgPJEy3n3Jp57KGS7GEgfC9CrXGr2cS39gL",
  "key26": "4UWkEzSHKeNumFAryVV3b74L7MwpBLUAjSeU7KTMD9atbfMjrnWUPogcDj6TFhncEqu6k7vJ8s4xrZEvRymN6NHs",
  "key27": "4rJebfyeXi1qkroUJYYtN3R68RSR4QFm5MYx1zPXejnJCfNV4Xy9UykGTqMdcqu2nGzGqw4NiPsfdNr79GnPa36V",
  "key28": "5XqaWnoNtsyTQzwyLyCFGsPdmfF6twrV2VqiSxKy7be2CkLjFGv9VojmmF8W6VLNLAaVbn7PA3BNoggJaBBUW4Ec",
  "key29": "2a5BQk2rcc5pbbHRer9qCuYKxPb5jnXowHCALsKBx2LXqNK6gorcRdGca4zwqoReMEVbayQonHnZptvWzCC8Pd3K",
  "key30": "sngsFwS3czqkjUqyDRXkup4Ebyw9x1JGdJU6SJrrbSpCgX1FXdW6TqGP2HtRAXKArQhFZEZCVwQB4X5M2ypQ5ss",
  "key31": "5tnyAdiawtovHroAncJDrWWBMZPFgymcC1eXUyAzm61m3p81wZt6mUrMVCyZdoUNJCaRvfMzn9GeUJxZ2g8AV53G",
  "key32": "4AiaHRtnd5UD7RS568JMrZfY6ukeP9WR3HeqmA4xjNu64GztQ1ZseKt7ma833m7whrgtrNFAhkT4Fu72JdtuP1oD",
  "key33": "34QfdUUHnFRA7TR22XmiL9o6XMmNTrp9tzQCQDcPPuWzkHZQ7Tqprru9GiFEYXUJ4XjrQCizfAXEPMoCrzs4tFmx",
  "key34": "36m3EbU15TyG8zzVvTHAR9w1URo4XHzew9cGST9ni1xVDBCWrht8fGrzqLqu96VvJ7KVk5phMNvzWnHxbGmjnnmU",
  "key35": "7hcAwCKyQsaqDuAKAUfaZvBtuzB5cvvm1EUQ8HL5HowVwRgZHfqKttsu64bJsoR6iSeKYFinaWnWoLYFBHySBns",
  "key36": "2SNtnAmuGpK3QbimRtdbgiErY5qf4MsjqrkRKN9Y3wWrLvM6EbCsWLtV4mXU4nBu2qbSGashEKDRbDxSZ3SFkFNy",
  "key37": "4yku43bKp9Z3kyQFGwx87e3PkHDLLvMda4bJc6QmbfP4DYF6cswNtwyfkzSxoKnxsKzh5uoiVJpTkFvfjG7VhuYA",
  "key38": "4pt34DyCriPzF71aXrC8UmFLtA47iQB93BvbTdDqpcgj9hzaJfzbjdxx3cheiiJGspg6VpKyrjeUhAcRv5STLkPo",
  "key39": "Rf6tjhWZWCHMT2bKY4TDGN5pGQibQQz9T7N5CQULFE69KcAApJUdFdCY7c5LtxRoLs52NJBEfBCTpF4PxW62wNS",
  "key40": "66Pv9Lx9TQqt9Ztb4voEEYmh3ogQ6PZxPierK3Df9NMi849JpKUm4yzuEKaR6BUPhWzMsDeskRxyYYd2QT8WigJm",
  "key41": "5LRQNMwMd9vK1fE6iyY9iyP4gNaHjCvE78SMGGmYQMX7SaEPiGcr8cYD6N1BtkPoAq5nYH8qMB2rFSjQnTq4cehs",
  "key42": "5AzEzy58Bxs4QZ2p7pY6buTSQhRtBtCufJ79gK7vV3Kwg1XWnS2nsnK4YLJBzZkhEzmyofhrkz41uKA65u4oaGzV",
  "key43": "5V5CYPPaByZ3iGkK7v7ZLMgsLLar36PafqacHBCfhCgpoVZ9W9rr8NbCZ9vyWL3rGkLLFUMEeXAByyMeQYaU6Cz3"
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
