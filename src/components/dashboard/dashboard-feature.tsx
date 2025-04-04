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
    "4BwzhRruTjAaH6RvCvSocozFWqmtEYG4wg5PGCErSLf3mSdcbJdURdhRtB7DrvbVZCwMienkb46hdTDZDav2LW7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8Ep3SCAAm43FX1b5mMTJpiR2MxFdqFMAJdJ69ESW2KQ9UNUqGCfe8nWJEd2YbnnW4whNhrZugNmZk3k37m4JRP",
  "key1": "3WRqze4aZ76hti4Wm2ggLZUbZRNyfPEU5NSmJ5u9U2NpJRvttY3dpr5HnDoNHbG5GT9ZHyT5bw8vzanRRJsNzoME",
  "key2": "UtGcKtq5Upp74ZyQmzAkoThFH3L4VojQsLVEwosKDfoXbseFEZG1DefABQUxDqeEGiqgdjnZSgq2P9yMK7tsbYv",
  "key3": "24emtnAYpiZhvRRH4ZkDp2NHedcdb17mVn24KRHTRvq2css1ZiBC65DQSaw6sJPtgDagnEvzAwDQrnbXy4WWWzTQ",
  "key4": "3mTNz5KsBEKWSptV5W5xVbVNXvH2oQZvxC7EEdRdwqcwnqWdE4fQzjbyNpNHPnav5JLEU1QSnnG6jGyfBhXC2n3G",
  "key5": "231hN54QesRoTgnSXLDRhYgBYgJaVpnL6aVozaGfpeJFJW5NWwcnjaP6XdiVuNQg3HTnBJmrewavEQuo1aBLMpkn",
  "key6": "4cnT9BEatYCDoTw242dkUwsXpfMnMmPQijJDNRQTDZBxdrBVsPSQC7CEmLKHnWKgFPkUpnbRmMP8jVyzg2j5aUFU",
  "key7": "5Z6j7YpY62twztR27mrjoVpQD7ptSm9rBYeVn882qLCbrvgKoGwtU3oGXGzDtuTrfHkQyQimZEmdePTGZiDZkhx8",
  "key8": "bspMDaFEX6o6HfasK6g675UdoMr7rhprmN1iUBtGXX7vWwTh6AvmgZBgZUB55GAznyNf3Ch72eMwuKaYD1522SM",
  "key9": "4cQQzS9v1gdW7o7HhoQaanafR8Nmc3ci1Hc5piZjMPy83zCHyMENUyZkpF3hGkS8qLkeTNj1XkGjLc3V5rwrbrHJ",
  "key10": "4BAQhCgQt6KuPSgKsE1ccYpLpwQjobVr68P6zQ6zmpueLDaNNVyW6NPDGznY6aUrybUFdgv8wAZ9BTiLF1GiKkUg",
  "key11": "2uT6NJPaaYbW7go3eN8cK29r4PuaLyCzM93DB1jNjWarzNxdAZugpzDnvekkuUa2PvL1BdP2VsQUK83i3dBEVAwR",
  "key12": "614yBNTX452L7ZnnRwUoCwZfXDJ6fNp2eMgHVm9g7jU96npaiEr1Kc6vwmB56H9fEsN2Rh1J7p1pQWkywLAnWBtH",
  "key13": "3rapVTf4yGpkQ2FfqEvAbpTjxXLX2orNnw4zCmfHQTWnsRZXV56FT9NKuDpHnqSxiBKJBFjKWMpvZCSPs2DoTz7W",
  "key14": "23SoiMXxBX9PG1bEAaURfiBRpiWUntaJBPTpSjYCSEf2Rd186gDWkRPdwFyXAaaLWMYvywvaToPrxtuXGGRPiWAZ",
  "key15": "63dBkWy5zJjEXhZUquHZf8GCvHkQN6qCdkNJfAyiok7p4GD445Gbs3D66yd4Esed9eg7NXzcBCcn3ooEoPKgNoHG",
  "key16": "sdLeeGHuJe3xsSMXHgUXoAJjgkckTJnyqXSpYp4BBqEWC8x3uWcuf9JF8L9E4GNoRHBP32uGAc77siU7zVgMxMA",
  "key17": "i1QwmEK42LViniqs4fkHBPnatZ7UzFyKqaDT5z3XNqFrC9amweCKXCjpa1PDYtXR7rNPCA2vN7Jzmhu5rZCqVwo",
  "key18": "5sjpteioM7goZN74bojexeG4oaKWRjPMdrNwCPorFjko6oJeVjtPD3bfUngTKDDreqh5cwEQyeroMJiBpo19VsFA",
  "key19": "5Pe35p9Eaw5mSbGYYaJEcRXtqJb2xitwR7FzrNBezJRuS3dGozN3JNyxJukC7xG1gRcwaLg2DRTeWcBF2KLsfocs",
  "key20": "3qK2q1TtacLpNcLZaLTudV1CqtxFfytVdmVYLeuXnF2Z2RnvMH7ZswBmnSfp6HNF64gV6gsx9zEUeQLhK7m4Njwx",
  "key21": "29LihktVsuTQgEVKNp54c3UMabXefSZtZcihNgVfHvsupYvnHCSPoDo4dXsMSQXgr1SY74paEeYGDgrgWHGoAQRY",
  "key22": "VbinRzZ8Rx8phgk9xRCoFDPUVo2iUW57fAJ3VCzKei9VitHiEfvWMswDZCZogvh8pitPDc5o5WJxRrVLcmX6dVD",
  "key23": "47zH31mViTBgkyFNWghkWnh24C5U3UajsGUFydMd57nfMx8TthzyrW2mniHN15UiF6qaXjBiBQTxUN5UiLYJrG7W",
  "key24": "3Up94ev71wJ6UTn1NodhGQuXxjhhSSm5JPetKgc3NsDMSUuMNWxNiaTUHsqPapn6oMDBSS3aRk7bM7QHFgEzmcrU",
  "key25": "4LEY2h2FxJNQu5FZsAzAKbTTYXcH7RrhbJTtK65KZLaZnHtH2Fgm2SNX8ykoetdasNhgAX6pQHS9eqGVokXtv8Fv",
  "key26": "4iki1LL8R6DwTjQfwighqcukqpvvdmsKELDZTE65U7wJwtLCjDy9nshWzstCkWDhtmZ8a4cZoAjZxB1bxz6m3LyA",
  "key27": "2xti2yqeTrgfjhXwSjLLWr92nLKJmaf9BEpuATcNrpXa52TJ2cXxm6qfvkVvEWmMb5rvWYrg8PXNkVQ3tn1h6a4V",
  "key28": "vm7LvCr1vzsEn7wdAYsq6WLKL2ir7ZXYn4PJgBzHWmRS1HPiX2xXHAZBuRmZgH7PX4ebYthQeakunFNKPf6dwgS",
  "key29": "iTW2X6ibQeoYgb2sqaQDB6pe2iWBGNVidgBZj3HQYq2dmn8o5VJCZqfjEWH7rh7gRP6ou6JjBGS1Ax9eRVFNyB5",
  "key30": "abZTZaHjQv1khRqQ42xNQdXj1ieFZZS6hDrhBmtndVMLU8me47BkL8BzUZKhakUSXDYBGRd7SMgB8RcfGoaFd4j",
  "key31": "31xgW4w5sggKt8sGYGCjzNsevBEeXysCq2pqzYYYs3dXNZ35vfgieMDpuScVtyyzv6LoNdJshMep8EmPYN7t6hN9",
  "key32": "5Xk5sb6RWs3jgtkWzQWnW8vFf2QCHTManmB6UeEN2toNsETsLiGjXoBQFexb5skNG8Jv5JQx98YCpvx3Nkz5iiFX",
  "key33": "33iNHTv3zhbxGa5GSzXp8Z1kNcJveSjGHxHdqBAEbspC7avoCbAhvfLVtH2mWKnVQuUGcfjRamuWpZuZ6UkdkYyA",
  "key34": "2bJ5vrxeDtvJLce4g9rdctK9ujowzwSvXmDR2HCpM1GV7a8X9nDRb5LTGM1pKvcJRu7h1StgzNVNDJtJRxW3KyVV"
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
