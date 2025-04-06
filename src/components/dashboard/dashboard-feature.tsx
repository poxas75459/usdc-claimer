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
    "5wWMbSQFAXjRhhNgBDJg3UmFrxFzdTiP1cq9pKt8oSWhEYmHeZTzXitzhsJE7QTKqwga94zZ1iR6NKMvs59fK2cB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLj331s4BsTfV2g2TudvmpNH3NGWqNuGqrLo3dkE5zqSRWw6jHdaqJSP3gY1fGHEW68WKku5u9E7os7kpFut3xr",
  "key1": "5kVYNFPr5b7rhSsYthUqun5zxyKXaQgzEKebKe2z2kjofrhcR6Ug7RfdytvkpoJ7VRCw2u3DCJzcfYbT8N5Q86Yo",
  "key2": "26ZWnoB2ZVk2f4NosQDbHSbaP4nbRSDrqSrfdjGsNBBcchVFL18L1Jgi3dfhNjoykQb49YN2ABW1udH3z6Q9pUpf",
  "key3": "2MHihp6yhND1b64DP2tBnufdFtDx6UKZL76UrFXku5YLqSZ4Ea4F24a4tgwqnEHWMiWNbt3DXFTxm6WdriGWepYH",
  "key4": "4AtqMjTxfqdsoEgXjpb7M7vorz4VP9zwDW8cjDLU2ZfVxx12rBBvAqoeRMsea1tPXUmvq2VEQnoDdCWSmbzhB1BW",
  "key5": "H2hpPJZyFPYeGzXTmFaeSQaVZPdE5m5MF8dfqUoniMwJ3WWhvn1BKRRNCAVHA31dMF6rAZaB1eus8HBMjfrFR4w",
  "key6": "4KazPfSfepzJ68U89yRunN3QbqsykWhGQfrqbpd6tkxmdgtwKpx64CD5eTokyNaBR3FZvi5x5xWzxgkS523incsb",
  "key7": "5qh4zK3PmWMTBWR94uiFcJeBCTf9XH3KTF5dxMXvpWFVgjx6hFQZonJewtNwiLqiNSXFGq1g2XohxKRyd4M6f7ix",
  "key8": "eBTFwZaft9r4ZWU56rJgCWqyqw1HUJvZGXkkZ73bFHCzCSeEFxQios7PV7ocrZtDF5vbog96NwzcUPwpjipiWow",
  "key9": "7zQ1YenvLge8nYoQxsQvKzGYPvSqgNkMvKRJFKBoX9VDiDd4vJkepuszhgu65pUyvUKeB2p5wGAgJaGLDybGNoc",
  "key10": "3TR2rJdCvSRrr9Tf1KbCJhT9Auz2hN3mwik1E6UiexcW6T7aB3hoUvQKk6vsXZa4JbqwQSCkygmurohgCw73RAcF",
  "key11": "24VYeyvp8ihbyEgMA3EqhX76szztPMHJb5Nz1tBxtsNXEsCP3KmcrTGEMmg6GtRqPjKerSoWtdY9XtMmmHVktN6g",
  "key12": "tarGNYSDkm9CoZmSEMWrkPkU5ft1q8FPUGReCUY4xQd2CcCAxAau1M35mumLvCZREEXc5RDKvDE32P3pHoPDEwP",
  "key13": "3nLjUKcDi7kPvYMFWx2osa54oma47WkyTKKPB2tVxmWYJAyjksx2NbaJ4jaoj7gSuHcqWzZ2seqSFtqYPn9K7LQh",
  "key14": "4SCR79NiV9Znbv4xP6tyD2QxRNdfUZCx6Pt7ap8C8YLFFSyMfSApxG9EUZARdu8KrFr3N3D7N46EpisVGEUbPzHX",
  "key15": "3wZrPkuGywRQzZNnh1kmGPFHVxRnjhT76Y2B3Cd1tf4AMWBK6yraeZFfFBGExafXmxgJ5sTu5wZJ9gDnmaGBjvuF",
  "key16": "3Z84dMJKKweo3frcEbvrSi9zuczMoVz53hsB1D2QRmrrB6ZcPugr1gvHoPW6oNwmvjfJy1A4UTp2vPzuYKphzbSd",
  "key17": "s3AgcWX2YpzQoCyj8q2i4d8ioyqqFuX2t6M9emDUbRp7Ay6kfJhfoYGhAWmSvVF5eiVexfjKygKrtnby9VZZzSg",
  "key18": "4KQjiYbBwnPkSPj1TwpvqNwKqGLr9EPS2zPbwcj2vaYDpmN5jHwUWmLNBUnpZMbn3SYajU2537JbPVidWKS2vnek",
  "key19": "2Qr5hoQBsV2BaVFRhFLid3vKP3XnCySRDfw4yKi66RxRpfHkPuiiZBwJXXjrNK2L5KcSjqvdAvnyfVXTYhkfnRYJ",
  "key20": "5kjhG4yQKb4gXa2PquitWRCXy8g3UaNhTwS2RiNgAjrNjMJU65QG3YrvfUoapXVTTdFgFvx8oCgyYDkvZJHRANXt",
  "key21": "4UN4ogWrQNm395HFXqfYDwKLzqoQML6LsQqLYJgf1bWdzgRxzq8EhA2UzUaUdkubcybpeyh83jxqZJH9UKVPHKX3",
  "key22": "LMf9PrPe41KTLw8qbZ6ujb2s6XhE7u83R8erwd6xS668v9TY75jC42fatVu2CWcQ8XAPfLr52SYFCGJNnXdc2KM",
  "key23": "2CPTvx65JzYKjkzvRBmA6aoCnfREWMojQNDoabPPXeVFsnLNfJqZmGPqmGLUYLJ6nVWixUAePy6otcj34EzR7yUD",
  "key24": "5QGcR1HJeNyqxk1xhwNAno2BFYQcMyxEi8z85L3Fi4d1fLTomZH8piTzpjuUXoJLCdNYb9A6ZCxC7Z5vAxA3d8am",
  "key25": "5y1PH8QAbC4Yfp6DiYWWU17uVfJRDLTf9MjqMgU1K7CRKrNAJbSmYAPrkW1E4ZMn9ovMkbdgD289jkYXKiHSXUqK",
  "key26": "1hPPYviiURxDGpCvDG7jHou89yLTPE43NXeefqEBSXWRcENqWqLAtKe4JvEmHWvgNuYt46Wiq8dXMk4aohdd2d6",
  "key27": "2b1hLoxKEYaecmKULpA2QjR3uPGHAVgbbTtUTCXWpRTSz7e5sN417FmAU2eArZxwNMUUUf93FnArHHpTitqH15LV",
  "key28": "nzbC3Xof54BSRBEMCAZZBxsDi8LDx6t5L2u1EGPALnBAuATMwcf3WLaoa53sgobCQgsMLtCYQ93zBe2FwUKFtBj",
  "key29": "2abEUgzgZNxJCYGX6369HYtT5hBnFemwV1qxFg92YA9vxdKfGjP5gmjg6CxHAnocTfoJUuwnM8XM4JK6qzsryXah",
  "key30": "63zHrp5U3BKvsyaU3utnmp15EsYfWCAzyY3CXZxmMjSQvmFt2zbeUPRyBJ4pk9mXYTu1oPvqMEND1gfsFyzWNey",
  "key31": "53dHKBcntG2BcutavVAJ9tJVii3kzGt4xSfPGwv6x3zBwTUovuaJ9E8fSCmXR4ubrHH5LwrWsrRUSWygoAuMi9Uf",
  "key32": "67eQYGJTA2f2wTyUGMHjsTCHvrHaXTC3SAPfnkuH9At5B7p7J4rCj7qqhe36WEtjGZBntNAWwPYT12nggbX732R8",
  "key33": "5wcvrV1kK1ftxCJSG4ft6DXnyAkjf1xYFAATHawMPjHyvWzNPqKgcnspAMzRRwMA3JRjnmfKPihgDoGNFAoahkmL",
  "key34": "5j5C9UtzUYP8dvzA8McEDwJhTg1jNqGZ2WhqA9f6r6JeRjXP2UF6eGkVG8jN7QUTe8GiVgNT63VdbcyoNfjfFAGj",
  "key35": "4p9ZngFdAHf3LXNYqEi4oAjU1U16PFjXqpmdfAyaXiTzSrApo1G9caoS1Yq8v5d3ppneFmWzB64uWJmgYnkW9ewY",
  "key36": "xtQVtSo8oybTdPQELT2hFsLbR3QsJkgC1JoDGW6NXY63qxWgpJSf4S6g7v9oPGdv8fX534GiDwWkHX2sYRKfvTh",
  "key37": "3nSdiZiRCVXZz9QD5oMqh3U74oWHyULv41UM8MYbRFiyyfBhKvpN3fgWq3EsDei1TWVtmtqfgSwbVYBLfygSxvH4",
  "key38": "2hiH1dzKFHMWBaxYPGsxRR95mAoXY1uZVCQoSqFH4QfFprj2DyvH791qzhc6DQ1ANUuHeEfDdrDFGgBs2KK8pRF6",
  "key39": "5EvckA8q21ifZQiBKHCJK9JHtQiqbwwttoNPbxeqxfT2e4HURnFawT9mJ7JBxLjPwKYFoqJj9X5mRn3s8UcmtHnF",
  "key40": "4N7WPe3Ggi9WYagbR5jEjV2JWF5XA9zpRBpuP8xkmq2djHbmb33X9cWkmQQLjsvnrsys732DApYypp9D9PYkQSwf",
  "key41": "3R6jEXsfBz2yTbtnzkq2HRwc7TVYoVSb5TMzRdGjN1ccpAKnq9xXwK9gJpwrd3VBFip57wBadJBtRNsiGYcfUnZc",
  "key42": "9sy5uG75J774Fy367PGTFJT9mUe2CsWFwSP9utis6zGitKMucF4qve8oPZMRPqx9Bbrs5ciQX536dzsyuPL6v6Z",
  "key43": "4CQuo7Nkkc4qgYNfoLHt8CUaXR77Xb8BUnz6pa9RvwpV3nm7szH7L6NuLrk3VwxSRxcm2ucyGj8Ed5mK1QJGXujs"
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
