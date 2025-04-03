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
    "27hKrpH3ZKtjzALNfeoqnSe8vNfQnWmtv9qtYG2fsqaMhGFJNd1UpsRNrKQxqgMXrjDP9Jgj4UnftwH1vMEJ8miZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpNYjQhXYAxfraFqQtdzWHLoX1MyQW14Hg3gQoDt3zdjBZLNxqUBdKjjqfbTS7vDQyb4pvGiYwaLZ4fZu4mchxE",
  "key1": "1NiqiFTVmXCa6Cm6N2WbWxgzi8mBJGVnpeK5CYXF2UpCdJxca2KsRiWLueBBtLv9SXTzG99sKDDDVf28D44gsLc",
  "key2": "3GwV7m4YQjKxd73zBavtPGkd7hR6vcGEm5UHLKhZtqFnj1QCWxqbzZqwXrcgFBWsoEFfVSz5HymjF92d89eAk2oU",
  "key3": "3DfSGs72baMNQhXeySwajmUKFGNzJavPPmxz6GQLmfrNSBAwkJCefcC7m3Crto9S4Yb4baZNH1KerjEL9baQqZfh",
  "key4": "53ivSwenKZhYzgfPwKpHiRFwNLu9wMv3EnYG57o3mvyUCJM84s6ggrrbfHAtEy41CAVBo4BdyGgjVUCRQ3iGb3LW",
  "key5": "42otx72XWxdsFxwoPtC9CXbuLn6uXRa8J5kPoLv7xMpcHGJ5hw2o85eLkxQoRV54kU89PvZcHXjnBHqpK671YsxV",
  "key6": "4xfCePThK4swYNhgJAa9iM6QWukoow1XHjLMwjHXw5XNVc4GqRnWjW4kkQGmui9ePQwfe5DQdqYfU3H1vAsq6J3d",
  "key7": "TJJuPFBLkcuxN3CMe5kfPGn9KxBBWzxvPfiyL2rNbFFsJHDcJfcwsoJfjJQv4tquHa3T44Va3Fy61XggwHwZzYM",
  "key8": "5q39ZY2KHAsysVA5gbbUKYzbnTYqkH6odoetZD5GV4LsqsDXx9j6tfeVo8TLim5YJHzUXSfSMYZmT4ghtEAUUP9g",
  "key9": "4K2acfUFugfA2DihHwuBcGazzBP1hh3TnyLVJXH7evir8mtqeqQ7y3QLDDf1HpgGEYGQo4m7yuRsMXb9s7JsKxzw",
  "key10": "4qijTAQu4WsJnz7e1LurwxJ5pbThuun3HUjEsDomUHMdmJbxs4eoj9KbpCWBLq5VnLXd3hDXnjU8Ea2ATqNFf6vq",
  "key11": "5yqBc14GFqDMabnTaSdZNQj13KQLNuvdjQgXwF8K4ytLHcC9oRu7iLRm18RPNfFVwLT2H3nKfD5GQ5CkFPzapT9V",
  "key12": "2qi7HXB5GfU5n1bUEVbiRVhiEyuzk1618rKGh7iaucZFbgnDsYxhY4r1UvMsTB9Brjf8n3dDSjjj7WkzsoXGGww3",
  "key13": "34ypjGxRpEqsBc39ykVyTE8kge5QG95imCH72P2GoBggx4yArTsvgRjPvLaAPyNkNGZu39S8n6Wjr5c2DmhUDdAP",
  "key14": "3x5obJMnwAzPPCLS242Km9jeiZeu5LvcddtbyG12xAFQNQsGoGA8ZdseTnju95efLb2c7u4gX9MLvaobQf8rSu3F",
  "key15": "yt34ifyuU81aWo18JnuoSxXWNxWjfC2ntZawVvG9rjWm3DnU4w5GYvNUYsFtJfWKRPYHp7jQ6AP4tZLHN77kb2F",
  "key16": "4vyUFUoHBZVmsn5NHo9a6jD1itsxuNec5VpM1DANihHxi3SALZu4i4h3SXVxHJ2DH7mtEFeWeZsPNXztZwWUPzPy",
  "key17": "3obP2UThLC1hX6G7TrNiUw1pcGGn6QqPEahzupcw99d7Zi5S7KvjjZFvMt7EetnQt4EZaM38eM5p8r983VjfwWJV",
  "key18": "62GNpVPx3TBvrJSRMx8cwaX92d2SdSjx3KyoXLjM4rXN1vLSts3kUCVaN1aWVwyMdeYJC3LPwbRtBSdU4Dn7YiAK",
  "key19": "3xsQzWppRveBHqYDutcH8pmMBNEfBCrPyw53via9we8txQ9imH2XBHkmtM7DdrhRQXEfQGnsg3p76R77ND8uytdQ",
  "key20": "36RMRroJY7RzS1HRFcV2VjTsGiPTmLpBjG9HZzc5hq7at39tj6dbkjihcJF1fUWp7SrA1LK8izCrba9Cs13GtJ73",
  "key21": "5MkufmZ8YHgvxV3kfamQU5yUQhsocaAJca1QM48FWG1rgjB9AGJJeuJdMbcaAQ2oMMqJ1cmrKRm9UFMzwJjeMXhM",
  "key22": "2avHHeejRCGcXyXW5MZ6iEaQ2ib7CTK4dKWmSGYU6vsXNTUU8pND1QvQAAEHx4yiij4mijRg1qAMbfgi2ZRiqYTN",
  "key23": "673aszhAmp1zJ3gRdNaVugh5UAn5ygYkYrhH3bf1Wo3GN4nM6D3pWK5Hn4GjHT2f4gYea3uYk3JhJmNbsRteU5dx",
  "key24": "5UL9Qef55RhSrMCxdnnizJx8LaL1ynQP3FefrWC6EqSQcemToeYzGF9uV9o3Bjj5Tw5KGaRNa25d4iJrkHxMKDsk",
  "key25": "4QVCt3d4HHM4SbZoqC56MkgGfF62WCMwydi5HT4o132NBAVK7pJiK9gJ738u3ZUByxdd3AXSsDFh1MmguLL5z24N",
  "key26": "251WPMeWmXw7iqEU6w2Ms3x9TMEkJkBkFr1R75jbmpHPosvhKzfJry5LdHDaKwGM1s1nwZ7ZtzWBbKjmPwRpCU2v",
  "key27": "47WKkReumpNBi8atAtkk53LKDBS7BmyV8hBMwJUkBVMdra1dePWHRyszv68LSJN9T2XS3JRiA1t9j6MuAjcKZM5s",
  "key28": "G2piAXLXayQZJ2kv4dDHx1J6iphaZJtJUWVtZ6uzivDhB8NsCb9y92brqyLTZ9UrXRKpno5X3zTcLo8Yak1zwC7",
  "key29": "7Vp8JffY8ZVForaBXdtw4WuP3Mir8o5PKpzt69qB1HqVYuQHc7zJEGCLyqxJhJXMKBCtfAZqTHwFjLLCY6B4eDK",
  "key30": "D9RxhDnXZ1SXg8gc3mnWpmp2jqDSLhhK6fECa98ioCEbD9m5ZYxadt9nXeo5piNvne8oMgXAxbo4TaT1MePwN4A",
  "key31": "3y9wciSjU9fWrG7xjzLMQTjHx4sR2xLPrhqPrinxnNTahdJyRB9uzamBn2GPfmtti6FZ7TB5G91jwXGGeiRGz5qp",
  "key32": "2u5iJtQiG6NFMeigF9nnvLVy3HCF1p1rmpE27ofnP1J3NrVP5Cm61cgpjGCDAZaWD5Ec95to4G8jsx1pFJ9pXqKU",
  "key33": "21oFXQGSC33Jrr2pvpzWn5mrmWyz8XcrsPXEtdaFkBrr2AvF1Yy4f1f18nm6wx8bo8cmJT2Di1vCWBERm2oR1vkP",
  "key34": "283xVrn6w1SrRWFMebpCtpS7RvBcXcK1Gr6MCjNq3xqQr8fHjBvEK4LRsyqXQ1ZBiYq2RHZCTJkjeModTvN3Le8v",
  "key35": "5G4weUuTuQFP4ZDmd9e4FipVfqSDjqUqHwVM8Ta4UXN52LSSsKFRH9KeYxJDPf47DME1id9zY1XarM2Mi4YJzhv8",
  "key36": "4B6ZFiBo25b8i5n5VYEc4qHor6pXVHiSCfkpReeYNiymAfki4JSMT8oEgmeXLxfxSvyc6fbFiw65vXaFD5azwSrU",
  "key37": "2MvuixcucYDor4cRuosnnPWVwkrdfhpWzyqTjHagPjYcA1x42UyyswQ25BJzCtiSYUjfuMnKWNQdGRbjVYgaA76g",
  "key38": "3yJW5npFZNw75XR4Mtzm3mA6b2u1wRaqLQi1juDbNFWcXiUkUgZ86uQAz158MwDtjC33qac5q2ThxtFdL7smjY5V",
  "key39": "21ybFN4tgr9yb83JgFgo5iPQwsa5Ewatp6pTvB7NwqanzGUbypcZ2eWmg9Wv7u86uLzsjETEvCSzCkUoEW7PHCFE"
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
