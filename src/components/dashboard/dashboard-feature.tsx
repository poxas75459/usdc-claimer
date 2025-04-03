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
    "4iiYfxdjptqwVEsuAMMG85voYB72HHpnzGteLwvKNmdLxPAmeSd4XspbHc5T1Ybhbnpbga1UYkhQk8wcB4WATfpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9Gbro1pweaKxaSa7rgFRr58CmTKKTjskoYLyzByJW4uUJELr8SXynA3Utvb5HG873BDx34irWjmnqPHxJ1ECGW",
  "key1": "4yJyMwgAfuWZrRxAZx4wkVBdZdyEdYbsv6zhxMyjMNq33YXDwyfF2ufXgrYpbnEX3f2gDG4XnVJ7BLLXsTgDBHiK",
  "key2": "488MhrjFTZHBN3Xn6REVNPLFS1pffrMhnS9qFWP9pQaxWCtf8BgvCto73gGgTbdYv1cXp4TH7HHSSptRBmHqfHZF",
  "key3": "s9MjA3QL3nuiS4PKBNqs4fD7e4AZMXTZFPmLV1ZQpSZTLpLLQH4GXwE4TP1iGyCYGxC5sgZ2aXpmkWZFvxQbBMU",
  "key4": "62wQBtKFBipRjKqoUbP1XqR5Yd76e5VMvoLZNbZYsctaspoRqrFBRZJ8wFC7VKGQzvtXakEKKtK5c6KxR3Zsy5hY",
  "key5": "5fbM895JkRqhfpkuGAYVwxHo2damdWYcTMJVyje1cPYjiZpHC6TMwCNZhQZY3h4Z7XxjHLAt5Aco1Uu9TwuBacHo",
  "key6": "5cL179eNJCBtv4hS8ZaQyc7e2oMMfFjqt52qLUur2cJFXD7PfcpNnoKs1zzRsswFy9F9XAcERJfVQh1oxJBrGEdh",
  "key7": "4rehGzCnbUnfFuzgCdjq8V5HgcvrPd8WybP6hprvgbT3VrFmGg9edCe4MHtev36zMwaomUZ6V4vSpAB9C8fqigCZ",
  "key8": "PoTmD1pYjnaFxmDzPsC6AEVpqMpU8F3YuTesaKK6vvrDZpGLwX5HVq4NbH2C4JMXkyL91kJdeDMLbcnJAD4aWvj",
  "key9": "4HLi16QoPfLQy1A8YAaQrkjacS3tGvJ7JaK3hbDW4vwvBVHqpofJrQjQcj3nbifsxk6kzDEBneWL5Epdi1UVh8NX",
  "key10": "6GcB5DAZq2jtA8oZUMPeLzkgNYyodJrRGS9ccuyakE7bJnzVBnQSJ7pDYve2YSka6ewhyirmB2dmJWnEJFuCZwe",
  "key11": "382Ro1Ciyg2mTw5bgvM6rnrjPS2dh1epC47xhyoepWNRDLbSSmmb7Qn5AzjcasvskTZvgENQ5Hg3Qj1LeaGw7VdL",
  "key12": "Fxt8g6YL5UyK3mTFK1hBtgDugWoDTVVw9ZnUujvqtHtm3cicw6Xf8Hqk983euQYRxE5y2LNDvGZu6rwBrps9Uhm",
  "key13": "5S5ELMF47C5PzhKeyFqhVpSrhEBifkA21mq53Gxbogoi4g7bfzezTPc9xGwqi2bnWE1g3ibxBgifmAjH66nnWE1g",
  "key14": "9phcGMS2acrRaFBXtAnGJw5TSzpYGbw3Ca22b1HfrUSM4uCdWgxRvvrQS5xYAH8tLdTiTcDZ515PNatBr5ddAQt",
  "key15": "38jEV7C2ptGaovcFeKdeSvAzdbfPgLLE84aXFUhrsrx97oVhkoEWJEEf3yxAaDBEF5DxbLinxWmyQWmTqQJbvpbD",
  "key16": "25kqWESAALBkLq4q7rAiFyvbEzhuSjp8vRoypQ6RwaVppQUiXCtnSArcRHAF3HEaAJg1ms5RUUg78Z3dtbjDxAoF",
  "key17": "2AFXXEbA6au1AFt4qM8PHcsdxkE3TTpRew8KNdD6qY66qTc2eMu87pTE2e5EgiYoGpMLEUwcgzJQwVJzL2R5muJ1",
  "key18": "omDmygdnJuuuSj5ffD1D8SERwEqCHTec3to54wT1BHiUNcU4TnUze13UPfGWL9yQ82mLk8UU7917hJm2h11fLym",
  "key19": "qwHxybwh9Ksm8ZTd4p87iA5XJhbzxebrxotJfr7CLaoGgRXsmYE7FVmDqj8U4oDpe95Gkz2JeBKm5YemZgiEEPy",
  "key20": "38QZxpZSDmrDzvBNRyimmWR6JrpLuToDgJkazrVUzFebynnCwCvUVfdfmvYtoA792PL1GVWZKKFUuQUtdq5t8C1U",
  "key21": "4NoZ6JGCwJCa7UqBDyi8m19Z39KZEvPhFfDk8dGrD56MXY8QhbdeaHqz3YycZSoQ4FnTjFuS19aNaZPsd23VQYeG",
  "key22": "4EscmdhnvTQw4K4XdH1QNRZRQ7MPTLi93meQ4b5ZowMaXpz59wHu91Qg9PS2pNkeWGJS1h2TZCXc78HBXkG9itFj",
  "key23": "8rJvvgRmfzhnv9sKqEQMcL6wjkeDexbsBhqybK7xe7Vtn1p1Rd61pm4dZeXKHrBYcZujtdVd7FcVMxWHKViixY6",
  "key24": "2xDT5uxAbex3QU7VuZgHQEZNL7H7mp1FrGeafuaXPx1TUdgV43sPvaD2mwh7z2G2KMoaUnuiNUxHgTsE4vx7dTkE",
  "key25": "4LH3GBmKnNaJRBsprvRSsanUodiMsPp8KHRBqpWdDfom9jMbLXiCT9FBAppCEFP1YF4yeEJ7mDfLjvLa3Nuhqw8L",
  "key26": "66xG8etNFwgdnicvHp4LwCFF9nLkCQ1nKCn25VwX9ynCxERWUCKCKCqvUytvBwgghWni7u1g4MJQuvXZdWk33wgk",
  "key27": "5ByfFdfUSQgsGQgv7cCkFH3Wprc9JG4mfzf1LSKxstFPWzafpUT1eanHRZ4XH6XgoXSVeNQ6zkmpnoFC8nJnscMB",
  "key28": "LHXt1Bvr9shaZU3QmjguBpCfws8o1kTdS47ThLaL2rpwjsnEKJBvudcsdbMtv18a6a2iJLXaNVBJwMV3jK9TYxi",
  "key29": "4KvGifasv91utkTNxLnzWihr8ymJXD432ZjrouXSfKoER2a2te3wqqBGuqJi4ZY9Bqiz7FYhMWmiaXXAjzyjGMuP",
  "key30": "386S3fu9KgxNeBP621tjzR3WSvsT4pRav767rHtQ2FhCtoEw1ULGDorqcorgeDEK2Ug4DdbtZDkQJRmwREsjKWzE",
  "key31": "2fXtk354HHvATCDr387jxBx6v1tPkMGVMjw3cRqiSmtEANga9L79K2FSYjMZnL7nV5Y3iMCeg1h9NsUM96vDZ1DD",
  "key32": "5JMXyF9pSpqJYfNDJWEzNsnupxPiLSSeb1oWTqiCyacNkzKihKFQ3T8Jask5TfksTPKY9HGbPsg98ACY2PWfTy6S",
  "key33": "69NuegeXBdjLBpnx7wsknz5rYdKwpQX43RH9Vm2WQTrTHaYnDKtpYrorbQaTGmsMRXKPWsgzkAHQ3GRgVgVS1Un",
  "key34": "2AEzosN12qb6E3Wn4Tr6Ky4JoxBj8DorTaE8KP5mVvwCdT35KrkUWnEyLxsvSrFwdStxqh7D8pQ31aBBRHMcaJHZ",
  "key35": "CTkxZgBE8RnPDJn1u3HJYr3ND9vCeU6oVVu2RWFnxqUo4dg7bdNLXf2r3oQ6KEKpkgGxMkx3mqE2nMcdxwKQvXL",
  "key36": "Mou5Fd3JCrKLFPf9ENFQbuJhHHYaBq2DscdDsDCf5GYdyZ1sAq7UFXr2d7NM82HUZXtoVgtbf9euvghvSctViuM",
  "key37": "3yffTNDwwNASq9X1pMVYTRo5KmH2qZYBYRmJWQafc1BiTPBgDXR6dNH3FDpyA41UZ9Xy6e6CCqVPimqnPb7oGmWf",
  "key38": "2mA9nu1GQLztx9sGd9dt89LJ7nptBzqaqfbTS78XmXKkVoK7otPzkYpjBtXYnpjGRkeuFdU3rqJGJQYDXsMvZong",
  "key39": "5Y8exkjjhnv3mVUYs5UQweuiJ4uNfZP4tyqJjhdSmstbBcwmpoVebN6mQJiNZb24MLg88d1Zuzff2av8EfMvJeiq",
  "key40": "3qghAW8RdjxeZzB47mTvDinrNtuWC2zefPqN3Ms2Cn3Fs3DPjujePxMcKhhXVAcZyFweRKksT8aMKKc51CvRZkuR",
  "key41": "25munNvRAPk5jL41Ajpb6QX2oeVMhJaodKcAZzCyNC6uvcqL3AP7vRzRuRMKQ2nGs8fjRrwqR7XRg9SfHCeNF6Ly",
  "key42": "3ZNW7sizxXpiEFKnZqpoz43r78AEjXxbS95LHi7P88kaC6K9GCf91gvwQDiF9FVefRhNSUQbPaA7aXDwnLLCkbk5",
  "key43": "5knPeXEjCXi6WgdScoHoiiGKnAEzn5g82qJBMoUUBYpHwLtihUYeh2ui9ZQq2ZGTzjyD3PFGVLQz9V5apRe9qfWX",
  "key44": "yqR99i7uaFDNuqjNZnL1BmZjBktzZ5FmFR9AtVZEjF7wbdQM2vqKScQyd1TgvwueV1mav9KnWa7cYkCEeRVPNAy"
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
