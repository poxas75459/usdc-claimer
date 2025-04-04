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
    "68MgS31v6VzLk1x2BBcQhcohDBuHJzX5BryKdn6keksv6qCwuzsJfxgh6CsZGChxU6r5bkk6uneWXCYwg1sqdF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JfkoCiSBEZZrXtvnzGa6XF9MAGNXaL59DyQj2joDf28yvcXTCvpFnqHdhPHTGWE1FY6BHEh8GiqWHs2MiLZNGku",
  "key1": "FUd5CvP2Tc4cwNfhngj4a9YqVx7AM7AdKaN717eRPzeapxFLuFwGMkvnPNN3vwq9uXs3foV7vqzBhiNus2ipkFU",
  "key2": "MYPW2PzFR2EGNf55QM1zNX1XUHJsQiZ1JvzBJz2d4o32Xk2wYH12RJ4QLhoJ81w4vTr98zbwqQnoxi4FUatG9x7",
  "key3": "gaNmPzZ3Zww51XXE3Ayps5LLEbBYbowMt5yFS3EUzGNpKBT7b7dpw3LmMLbCSVkp7x32uZytBfVyXqX9m2GypdC",
  "key4": "4KExR9pZc3BfLn7jCsu1tYVToNPThB487guMKSEUWzK99qWSLMV8oEPYNJSvZTrVKKu9U8E75RsYsfdsKLUGHe3V",
  "key5": "2UpoWjkXznrkGiYBjgGRt2QC6hWxZakAw9nmPD6zy4Fvp3pj4Uz3Aqc4y4r66jzW1QLmzD9e5bs3KxT7HQFKdbiU",
  "key6": "36YWfJQjTNnER51FNc1G49s9WjCmKHqcfMARmqk5eaJFmb8BCqYDNh2azZjxHLKFo4UBLkF8q1wA1HLCgsw1HHra",
  "key7": "4kPfszaq3A5SuQa3FWFzCZr99bMyKSRXUhqewbjc9bSzJ47efS9LNeL3kL72pfjeusXjSWFquRwLA1cSnYeaR6Vd",
  "key8": "4yQ9znStozSxQwRUz5gsuB4qu6tKsuGhZknaV3q5uu8BYc3L6RXVj1PyXTyy4TzMwqohpomRTBkATrioGBjzkmMM",
  "key9": "43i6m4JxeHjz7TKDYCyNJE4SSyKnhhZJeiKM71EDT2b9813S6amcVY6PNMEdok8U9jsCCao6By7KYVURCgVsVT7M",
  "key10": "2cszXJnWZkUjTAAQanygvKuR25DFYEktbDSc5dYujQqrkKuPpm6me6Dhb6yN3GHoTmegLsKMNyMsjaDsY5x65qwP",
  "key11": "3YeMwjYZLug6uUBT7UZGDwaj77t5fAFjRP86QokdEqUwbL94Sj9KU2esQXKrjxFkCG57QMNVxoueUoh77JqKQyCk",
  "key12": "3XdndpUCGk83fguCYmHGRRRS68wyPQkChtXyXD63ZCLn3AnAtbU9MKtjBAWpPDHLJH6FysQL58CoFLDKK6nsutkE",
  "key13": "2f5gzJZLtKcf4DkZLmCQYA9sfivnYthxxms6Pci3HevLRxk8S9d6ww3boCn3AWrL2qKAEJTVZvqXJyaEYVgC1bYr",
  "key14": "UBpAfNuxzcxtjk3SFEN87QVp5BH6FCdAzz3pwH7KVSFY4wd1odHqbNY3cPfeZ4iuc3CmR2KWgicP4yREjVt8t4s",
  "key15": "4Tgc5DPyjcHxDqDeN68sZsykU2dibjE2xvvbRWY3i2br6q8xMDZmJXWR6irjsrFwL5FVDQZXJU3fPmC3C9cY7kc",
  "key16": "1289wZwVoJZB2iwx3mAKWyTHPsFvdvGpQFLTCMJi9QqDcAFVCwxS5PLkSJayj8tHMFHr6DC65wA3QtRbMGn53AtV",
  "key17": "3jwpBLehU9beimmkPsG5RZ6Wwx9D59dZ2ntsdjb2m4smpG74ajTBGCREtquV1mAzWnvuBjmFkBzm8sRWo2fNz5eB",
  "key18": "3jkrwTjyStrGNPSMSmrZ9qA9jab6rQyjDfXSrYfiqWKH2YxsKukhUeyhLkNoUshUwqtJzd2pAnwQDaYU85WmjcTc",
  "key19": "AyQAX5JUpZcxaGg7CVfD7tMwVNprb5Uy8jUnD9zMzutMHiMCGC4dHsQkmHFNm3kKV2NTCP2bzKDUc4FXJ2d5aLu",
  "key20": "3GiMJBM9yEqDB6tadqnuNnfzZEa6WWtkMnJ1Maex8FfPCY42ut22Pu8JviLLn8mxBp2MQvooGm75dunQ8kuxjv8c",
  "key21": "t6duCAyVzGdAB5qt9rsmzLRNmcRVvRnj7LuKR1FmKjTY6otqM2d4jksiAqrVrFaVxU1wTvGiLnzBrfoaaWYq8S4",
  "key22": "53Qknyzm1qcrBTichqvUMHJyQmKg6DAV6nAgfHqztBvvza6s9Nd1yZyEmg8SU2H6AcQ9PDZu4BtQkenZgbjCGoUy",
  "key23": "465zaoi2AvdZMkq5pDBx11R8aWXb8JLAo1ny1KzL86jXeuqCEvqmDicWDquPANvQY7wMftrAMnNNJnUf1gDs4xfP",
  "key24": "67MSsUAi7uaL4koC17YFZtc2TRqHoQaPK5aWeyKeBoszjsQQCNKu1ya2BuMn2NsNSPkCd7VdyB9qeR29ZXQiWACa",
  "key25": "3ZmopfSxZEdu8v6Z7rrzgvLMxBYj1YyBHD6MUp1hKHsbPcmBohCUYYBEsZL5MPH729tJWXumzqvWc53C7LhmB5FE",
  "key26": "5csXSqrTde4Xk2bWuNFzUYiGMi5moo3RC8zsB2Ha3UgzhAnMc2NyhTXCFTHM8XrBvXdSiQCy9Jn2bKKU7fDfe5KC",
  "key27": "jQ4koU3YfHNd4hNFR5XtgaLMLRSwLmV9gWZ755r9FJQRC4BeQSWWeqo17S9dAtFHVxwUBjvxmdaQB1V1HcTYhzy",
  "key28": "4dbkqu5VpC17qH31XnBTWKqEBMVeHZSMAExM6Ld2R7hUr9dhB4tPvk66btELiMjF6F7DknERwmxzRPRPTg2cjduk",
  "key29": "2rrrTru8fDZ21xMSu7jF5coFZr4AQcrrAY1RFgWhBSM2PjoPebmLgyLj6ADKFd1tgpFdaPbqsUuj14FmRmLkJBZQ",
  "key30": "3ABcboBcCh3gX5tJN5CNJ4cmb8CThWgQiQSpbqi8MhU2qDdBGSqZgVTU3YyrH1ogRFGnS9tkFQVfCVwgGdiEG9Zm",
  "key31": "3fKUTbA5YzZ6435BwX3S6FNoW2ksGxmrcR5ZujavjzyTFn1njhaLoa4gSf5faexT1f4hhEGiEsmtVPRrxsQct96X",
  "key32": "3EEAstpojBLboF1v3vq5JgBcnM9PFtUSpLPHncA2GA6QU7YjQioTCKQgXGRQ45XgFRet1tbrrU4jDY69fsABUWYx",
  "key33": "i83b2AJamRcwX4BpMhRpsPHg2qFBt577kYT7Sh6ADnBEbYnummLmrSzs88dD3rbDG6MXeGNg9BN6u4DLzUNXi2y",
  "key34": "2iT5faae9VjG9dvyVEHMGo5QL7yTjQpKnokkJvgZ6KNM4QX8jMcjmMzdxfrtyzhQRi4cQebWwVeSMudxeeyKD49D",
  "key35": "2ouEbu2y1Vhg98E9Pim1vwxpQbKW2XG736N6PLc95F3iARWLAJ7bdy5PS1orkaTjTRQAYgqz5skLAdoLTLnxLWyu",
  "key36": "2cfeFGCDnTSj3zta9MxNFxnJAA396q6r3dbcoDPDJG1iA5jSZLarR7T7eMsWaQkaaM9Aev229sM1RQUAttZX3hKF",
  "key37": "4N72WezxgUQMXm1ohFhDKXTvKhEV5ncoHUvsdHvt93VCHEx7ZaiGyZLvV43GsSEDfUhunu7HGQFioz2FV5zsXLq5",
  "key38": "4xQnQwo2oH2DRvZRWqxZBhE3XWUnYV13cUtkPrL2N3vYctArdjSNupjoQeSUh9DAFBtHAKPSWKdAJr3ucCigyraL",
  "key39": "2jBghdi1JKzwqyHgwKjia4e5i8bAsBPgjyLn1vzp9zHJKbJCrQLw9NkPpXTJ65K69Daaurvu2ovo3obxPgXNLbDm",
  "key40": "4FqSzUFHhBCUZufbtjyZwTtzHykknPEN7CVNbJNydzEPz9qbHEKAuxHgN7KczLv8zNoydwymPrtsVUF8RXoVjn9u",
  "key41": "5msKFkTPNkEgugsY2HpfCAJWq2JkkbHUgaexbTVwCBM1qV5GsSEkwXHKm9tpHdwnLmuvhn1sa96Uixz9Tjchrudv",
  "key42": "2PprD19McGuMk2TGcqkvw8dhBHwh8fRf9JfPpT3XMTz3W5fFLAx7PBNPvg2kFXRNhXhyRWCNeKAJqXrXC6HVGVM1",
  "key43": "5NAyvod1fyAjWqTGCUvkJErzVy9P4rcpUoxENggbYAQ1uTiMWQiKCDe7zLmcPgGNWBXqgvGz7FmKS7JRfvfLodae",
  "key44": "2rFFFAqeWnpcsybcpHhvGrruaEAH8Xm21bfGyvE5z7ewLHHp9pu3g9qWr2oBGgaCCHyRoAyVj6hZfAh2GrHJAbnW",
  "key45": "4y9u7oeBD7nKtGnXGcLvBVM9rZzbSsF9k1xeZ46Xw1J23uWmA54sbD3nr7dBm4J8mzYR1ZY1dpbe2vvnYfPGYQFY",
  "key46": "35EoAHJpi4QFCdMynSEhqQEMMkwBos61mrT2h51pBiENS191fRHqUQVQyhFAhSVgVB1ESgmBaJTw8vFVTupHjhHb"
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
