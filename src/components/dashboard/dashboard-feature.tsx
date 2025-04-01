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
    "4aWx6nThe2NjbpMhQ8G2kXvXzFemKZTL9X1A8s94M2raz1Z6DLaaZ3YBxFnad4w8RXuCSWSYJGTmJEaMDgCBNjMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dgcZZNzMSGjP3BtiVBNbmj8dRoPtpA2qT1hBAzRRnZ5Tn78sZVwHtWivm3Ars1xLaeLR4JQQkK7bXKWkjfikvz",
  "key1": "39BRrQubxdqpmQ6zepBav1BD6HdPaUzR5phmnAHPKFoi8wAjiYDESLq8iWzktH1xAPBSWrHgKfUjg8UtjZwJJZH1",
  "key2": "5AAYsuGLyh9Ws3AHdUitXsR5dHwWQeCYzLUPkrPV3owdJ4Cg6MHLwg5GT17ajnqTV3ft1ujCi3bWhDDPssvKt5yo",
  "key3": "BaNVYwGDwqGvE6kyrFmmJrkDiX5ZyCtzTdSh23KDdPUPPPhGV9aWLmXbbFVVrkcjFji6vEpJWzuqATFUJV7daxa",
  "key4": "2RXq64mCLQH49XqSSgWhaAzGvT8E1z4d4pGJuToyDCRLYtWJxUZ7yqXLYP3E17Tj989chkLTcttX7tsxsJvsM7NG",
  "key5": "67dt6BB2YgYVeTFpVkvi76cJGoqgZiNMmgJ3cXyzKCWe1eBxhxQz44g41EknXqoKQ1YCVdehTqMgYH79jrgg1K4P",
  "key6": "6Hfc4bA9JXq4sQf4T7AvWUejGYbJpJxkLvETX1cVos8ALocZNwuTtRQ7m8hoHZV3k3UZNbiydJGhz39AnAZhfPp",
  "key7": "5pEhwyrmwLgnyEu9gnNcLkncqgTxERRTA6dMn4TG4Sria9Kf1g1raCax6ghM4KREqHDX39Z1Evgs5kYaiQDSybyB",
  "key8": "4ZJm8uE2LxVs5Jeu2sr97eCe379LHFuVcYRCNybxpHJ5J2UH8ZxCU2wQ1cSE7824S8v9tUY1fqe4K2PUh91sznmX",
  "key9": "4rLsdaMoqtXhDpxgfsV36HWEEjqB2p8WcMnMryqjsz94NKroncf2UhnSEr8CkN1Zu9ZsUWYsHAF9d995m1xhsUKS",
  "key10": "jRYeCKmoJxD9C74amc9xYGfFwHaFzzBx1g94oAvw5Z8ckCVnMRsPPaTfPW8Y2javZ1tQ6hpSy2BCScSBDqdzVjN",
  "key11": "4mS3BCbjP2gE8RD5MTuVZRjRFAgXfm438Dsux9ZdMQ7tfzguN6hFhfgfQnXNRa1ML9yWnNvFG98etuchmyJXcwSb",
  "key12": "H6btgCYnNAKSLVK3Frxm3vqBWFkj3MqGLvi457sA8rzgWdT8twHRwUr4wttrv8A4suYSDo9trct7LApoKUbXbJ5",
  "key13": "4yHNQ3C61hFBb5RDRsTbftccYTsooMP4VWAxnDrefkD9nrboMoBvXk8sqoCR78MSWShaNe2HeNoMgvvS3aWHU6GP",
  "key14": "5ttPigSGSKV4vCocu7EFsjUZP3bEkhSnsvLb64jPSfGhwvRm3USet5yUCmyoGK4qaS4VDAYPjSZV6cM7ZCyH1Qv3",
  "key15": "4PJ3kUpE8nV898pYexUzLe1cEjVHrtSBjquARRB7szUkQNiQNZ6PfWdhomG96RZEiJ8AwzyBsYAVWajxWd8GbrjP",
  "key16": "X1tg3rjzqfgAboKr6x3pxxvXTCsztVXm4agrRSWKaQ6oADrtnN5zGQqVe5Po8tNUoRta7pouXUaKMHYnD1CWgy7",
  "key17": "5tp5n1MB9BQ7tyaBFgtwSGfaZ8kj8tPwsncgFCEBeW6c1rNQ4XSCkNfM15oVQ1ymxFSdFAi9HHSKG22DkPxZJ3Th",
  "key18": "5dZpScc6HR7tQnDAPK3jAGawF5cVzpmSFENpXTqthLF7SSgKj6NKDWXZWnSDPD2NRQB6Jwt5f3HMRqBYYGt6Jizc",
  "key19": "Tv1rmgNL4gDG6mancZYjQpTx2eFqEfXLKMFDKtgtp4SWor3yC5ao7HUj1pMA2r4KWDugDAa5uxoa8yMyJPLqfDN",
  "key20": "56Qjosub14qj2WdguCTFtbynkaJYz13zyLjngM49maJSWZ363PLiF8QfghQ54ww82g1z3NW7Fa89FU6grB5Casgn",
  "key21": "4bnfV77LNjqMzYxy49iRhVweLUgBtf52oEymL4tnMXKgdcVbX9ZMjY76wnYPvkRNZGTNZav4r96JbnMpXeRuv6kc",
  "key22": "eR1kCymCij1anVhnyBdkR7mJMTAyrEBanRAqqjfgCgnqv3VFfcHHY2nwMVu5TgR7DKJDQgbjLRpTRWNuN38PUV7",
  "key23": "afYSjANXKe3MimBNoyXiZ2CbiiXAZAM9XkH1JwyjaLtwo1DLGpHAYK7JbUf2fyLTZ2AdmT2EYjbWLrV7RgaFUc8",
  "key24": "4CdyHb3VQ9WCcZP1JpJR1NDTpVKmQa2spRHhjN4D1h1LpBAe4zLAx6QcAgeVfFZaukg7JLQDQAdBb8z79bBvJLhs",
  "key25": "4bELvKPVq3N7bdACESuTHTekESEwb2ZgXKgzwEZWxwWLpG34gcQsEuqWVwRpi2spm8mFEoGZTJ3gdvHYnn5ub2hp",
  "key26": "4eV7GETXH9p1ei6nVFVHTq6uE1X6iRtpPmq2gVLwfgTNXFL4D2dXjwqgpPZBNFXaCDBNXYMvbWpPnp7cnvTswJKg",
  "key27": "2gaA5LZc5CDGBWdSioxwB696tM6FSXqgqHp14BNnHsDjE1DvLGZRZmQrCUdan48M9cyEd9N6By9VSEYv6wSC7bCD",
  "key28": "4XaopuiWszh1MngpSma7SeokeqTeGnt9M46XyvQWJSk6dNaEwHzhUa8vgBZ9tw37m3y8BcvYi8ukT5X5fMPHdRTa",
  "key29": "3pBzWLJtcCP7YM1VftzyJbbAh61XvdqqeJ85tRCV7ZvdLgXkBHXfjPtf9pZb9etNhtf4gphe8j3DCz9MJxaVHoKc",
  "key30": "p97UcYJVRXVwJ18RpTTTJKu7J2B6ck6uZBpGd1XnVwQwGHf9uToNphomE87KHT2WFxrU3Gqv3JCoKNXyPiA7y18",
  "key31": "3vm3CDKBF5zejR26frkJFcHWGQTePkd5ofqJ5e3HvVsBowcuUi7GDYvVjzxJcg5cV7564NbYZPsbuNfaMevGV55s",
  "key32": "245j2DmG1zs6LkKqKuhG7KLTGY82CE9TcgV8LE2Kkd1wwJHh3XnDTWkekjHvG9u95mQqXAxHnYnHsKMKQptv8jEp",
  "key33": "2VQgRo3sDzc6FFkb42FP2PvRUw6RBYz2qvMZbebBtvhHmyr28DYizFHM1NZkeUjcPvWDqEDBV6qbZphNzbQ3uBrk",
  "key34": "kEGa8LuF4omWmiLTJZXwucaJv2UGgdbqe72k6GWfgdJTM9vj7VxMjkjt2KUqoLwXXhrss6UoQvqWZs9262JUKS6",
  "key35": "ZKzAKHEfECqk5Pi4eCbRiUhsTPreB4FJ71SrtregpHqnD77UgaMmrqNSXy2VtdQiaWXrt5YidepijfjfTDeMnWQ",
  "key36": "YAqbTgSqrCC7X6yn3cn6NbbGMqwpHU49SV2DBygHV1stMcqphZiVJaF86cmxUMPUT9oarfNPWVTc9ZdQ2agzhtB",
  "key37": "3krQymoJTuncubaqh721N31PfxHWNn2neUjv5MfhAFv6Sikspv4U515VWUe4bz6ZvpCSMJjhXoX4s33eTCeH7XT4",
  "key38": "31iNASDrDrpBuc7QuVjtSG1BNzFSyTAR38ud98URbXa5VutT8AZAJ9bpmRXHAyHvr8ufTUJxGcrgD2ZNQWo8GqWU",
  "key39": "4YdjitrFZik4ecDnDTUMAayK1nMSLDZuX5SXBLzvZCat4LdS59Ty2exqtpZnH5RS2bUtLZjZcuFynJJ1PXGPFVQL",
  "key40": "376Sr2MMGcZUauekJU4knWJky8SPE6nNzvWxCz3FjKFLAD2DZeXchTKWJ5SHHVL4BJn7BzsXvBHnJWzvWHfDhFXW",
  "key41": "2UMwXqusPKeVDQkRe1uiPy3j6X9vVtx9FLKYeAUgDrJT7m45pxUKMKXqbAkAqwzSSgycG2ZTiN7PfBCy68dCTfJj",
  "key42": "4TUX7wLMp37Xf4T7KxBYBjpGCZnyfP4DpZbQgcKLkdbicxJrpx88Zus6BJUCs1KfbtyTev9gQpe6UHzx3FvDNjS4",
  "key43": "niiuSavwGUaQwXFiC1JPotiByfS5hLXP9ZUiofn3PUGXzrNzFKkoNdgQ1scJXruy2BgjPvHGcsbKRUui7bbDjVu",
  "key44": "2e7gXqhhQjpBxyDo6JRrdxocJ2agzTQS2YXWgLUer9QGKJx8G6kwEat2kzLnGYxqyciJSUnziPderw4jWucWCgfK",
  "key45": "29BNzasQRXNR15ZBbNTa1pAeXYBZhHXZ1RHscRFjsTJzxvbv1YQL8D3qWU347acH71Srz8Mox63FcTRgpuqkS6Cy",
  "key46": "4mRnHLbmyXUBsD4pyE3paYsX3uhCTSoNYXHtQxw64LaS38m6VjJQsa1ZL48JzbpCACaseM85CxV9uAKTdw1oPBUR",
  "key47": "pzrzviQN7exsLF3dihzEewDFHjW7zCDUd1vetErq7PVW1jywEJavNoiEi5mwRVDDswMpfnhG8SFtes1FCPe1tPC",
  "key48": "4F34F1KiEwrrgmoCbgubL7iiFCCHAcLXqDNWyZAe1tJEHe663dK6LjMAesxeZGNhFGBq177TcPL7ZSa53aPpzNR6",
  "key49": "2JEfhKPrWWgrarPA9Y7sojMcKJZV2jMyJsRi5sU3k48spEdwSSLE6LH9wv2ZTuaFyPuE8U82s6QdCaqZwZQR1M3x"
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
