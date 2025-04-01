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
    "2oSNmTmk9EjRyvxvAdqmcyvHy3AhB44shE9LPwNpbghHGyk9ZJEFBD5VSuzrcM4LdN4A2YJkbrSaxM5cry7eHAvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Neu2u9BqQXix66LnZchEQwu7N1U941UQjmapRcjFzjm5ohPmqo7TnNhKwtz5ARRcgRzKzZHkvXD6pZZui47w9cR",
  "key1": "2Vv9kNfuwJDDHxGvEVbp18bf6Fpmod7uibxkgfBgayanxX1FXuc9EKkr1Ku8nXiwSt9qgDyqsGUuj1oZsEjn8VML",
  "key2": "63WQ8AmkmLK6abhnAaMRQNDSzmEXEDRHREY47ZdzVRe5MxCq99tmDV9z4MDHScqANaf2TLjJmeSaViEpwnfPsbh4",
  "key3": "3e2r8cgbVvBQbPcb2CX3bfGPMptReNanGva3MXKP5bia2xvwohW8VBbzidp9K5LzCkwu8UAgfXR1wh9HQSyzoo7y",
  "key4": "5JDLaketuGhPmwTUS8NXNi5mPed4kL4nRMxhYR4sdNKSP3YWSYw1TvA46XFw5EfdL3Y1tp4UpnzaNJaAaLLiSTjJ",
  "key5": "4hovsXqhjjno8pXtuV7bp1be8i5QimseeMvN8HqWxvrGGirYwtexXzpyseUWV2ezGXJmPqz9DJ9nEZ7SEGyeehJ3",
  "key6": "3RuqsixVdEzcAXVDtsL2KT7Btztb1CdcV5u7foRB3SmEkiLX4k2rZwyKtiGht5F9krexwZy8ErJLaK17D7G6JKk5",
  "key7": "3Qdw8K3sD7P19VMoag81VeSxyrNiEGKvwqsUcfLBJmJXck6MzQk6XcUoHtZEFbgkhyPpLfYwVbujiVhKG2jcsTys",
  "key8": "Uf93iuFU1KNq2y4tS4gCojKAigcikhbXx4H34avcjow1s3VWsGBdoH5Uy2rupgzVP25HGS8K291ZVbN7ujgTue6",
  "key9": "3gDU3LiPne5LmERf1RKbx5F76xft21wT55UzoDmnAtHjWTGoz7to7yttMNoHmzyaLbmTfdwYme7vy8kZFiGe2nMC",
  "key10": "3Fa5zyQHDiDFr3YmZoBR6uMa37KHmCBERe98ei5XShxXuxZ8q14UqmFYYNcbMigPqwZTiyNwYJGNJ66Vmfe3s4Bi",
  "key11": "3FVogbQdFEQzVTq6ceU82kQGjmaj3zuKvVn38vvCUiUJj6WQ3fL1G5yXKaUDoN2p2FxKBNZEoFVqaE3G4jT3gGzw",
  "key12": "6ec1hupeM6DwLk4tw6vtXjJYjBLcp2S4KEEqcoxm2NjSV41Bi41WMJXxJfH9VHKFgsgmtaVu76bPEhCqjua26MF",
  "key13": "zrWe2Xfc1cc51nHXx56QMs1MWhTuR2UJknJrdiv9TmiKkCvyNvV7xhyVY6JnKqc1Fkrk3Gqfch9C54Ni4NsmkSC",
  "key14": "4c7VjojDaEyNPoyehRahJfxPKrbuCeh3cguwdoWLWzAbxTBrD5Dw3yDmmiDJLdtzXWp2MZiuVUYGDRQ6BRuLPyCu",
  "key15": "2tWyZRzyaLu1enSJTETDUpNEQHXMTw5HBTjjkmLwLrJxauGPVSV2t3FihJunXcAbFx9Yqv4um3nAGJi8fTzF7t3T",
  "key16": "KZ1t1E42RUPtNnaMKhgXkmGWGbxMghfye9d5jG4zvWv6e6cJWC27CzcaxE17ttvow16ggwvN8yTsn2AbZUFW3Z4",
  "key17": "3g76yem4XxJTG96YykzDfgYvGnUH8rRMVYXmsQfvG55pdkBTA4WEPVEUPKBXUkjcnECnju8fXvuWqXdLU5ZDq9hr",
  "key18": "39vXtkBDb6K9MbpKCn8EspfdoRp5DhyYCSkvTZe7ASBPr2iZREg83Pdh7yvNqVvFNzupMccxBtKLQuVbUvhKVc9V",
  "key19": "5nJBwVg8xDuB9eUvndhkoiycdXXwbkrRHaHoqeWUEPw9dWnZ8CU9EUtF6uF5YcsnvjuJciNvBWjFvqzr8co7XdQ1",
  "key20": "63CRZm66NjuwS7z4pW4FQSUt5xeUvGTkKFRZ5yFYYYbRaRdsXboA35uVUvUfb8kVuBHYqCT7SEpkGwnyF2HPzTWD",
  "key21": "1y4nR3HtY2xgKFKJLKJEhBeEYXLpLrtMUybcNoroAsZ7KwTYyWnHNGZPkDSsrDPYWdBwAMZVdqhHyLVSi2i2MwZ",
  "key22": "ohVuvbxRv5EpQzXMP8AVwqmypg45K7bwxM8TiwnqSQDpWmFLiGVnugdxMtG4XBTv1eV16SLcev2BGYx8WQdHnfx",
  "key23": "29d9yip5jJ8oogaSu6w8YTp5P5vEfWJ9DsYysWHDHppquQP1re9oEGzbQYaaeAqpYZFJHqCdqr6oV9en2KCGnatD",
  "key24": "5YcsrfF3SC7MiGjt8gaCYvJcjy9mZrgUsAv14katm2RtCmVtZrea1PyMxt5j96oqXCgnA5wSqXowk8PtoawaKusX",
  "key25": "MFLXGjBMPFVKe4hyqKr4ohskjwu6gwuWkTqkswrvWjp6Fifr3GTbPaQbyL8D6NJCSWqjUH9y8RzMr1vojuVKiRn",
  "key26": "pwfcMczDiVQYAMF25EZND3f2dNaSVfjAdNw8mFRUUgFKrBCwXtHuTB8cT2Q7S5391gWTWgJrgf5qkA8C9ZJwz8P",
  "key27": "4Fsz98HcMJhLPHW72pDa7Uga2fGeaQ6Kymo6aRSy8rjn9uYuccxaUZXkCu4sLeBbxbk8hVbqDAUTGNjD3KCq1pCC",
  "key28": "3NtKBTvjwXfsLUZSRqNmhpKzWg2ueuAuwVuKx4PTVDr6hCGM8T6MwhBuV8cCLif91EJEbhcPsBe3hZRE2nam6Eqi",
  "key29": "44MmpKgB3BGjrVvMSnXSpSQT3XrwzvfD2Zo5fsmv6LDNmERuh5KV3DXdkmWZ3QRikx8GwYeHP8bK4cauN1r7ohHr",
  "key30": "26VNpAJU9BtTCnJYCQA5KjwQFgDEtQa2mjZqgahFUiK36dofwXfwJyqURffUhKmp9AwTV5YqHyTjYtGCL3uarYuL",
  "key31": "caXBKxtG5LFgDQ7htK95xcbNjkBZTdJEApoAhmrbTxQ27gzx6b3i7JzdMAv5oCxSpCdke6xC3YnWGKguziZgESv",
  "key32": "4n4BPrejMKs2NsHN15a8nhySoW3xTLQM8jVoT8zQdmuhafuMc97HgYbzKSuM9fGWEsiacHFBDtq8pZ5gB1F8Y1PN",
  "key33": "a66dawk8KdErEXh2JzLyqSajW5HworuCZzccMYRLoy1DfbXW8WsqKtKCbAzpoBCMMYK9j1sg9Stds3oyWx7QC1w",
  "key34": "4G8jPoNcrVu5esGwGFx5oKmLnE9YRH8JUdKMm3nyvbHPLQrvQktTfSe1PtaV9rFC1StQ5MpvKGAipfVJaYjBCYAU",
  "key35": "5LCAfWWmkQDNsEAgR6bTyzZDXX2FVtNEh8MtvpyL26wHtZ7sBpt3EE8Z5C2fQMetWgdQipxGjfFwyqN8bd1PJKA7",
  "key36": "dCrkejAbw1Pu2VuyRsYzXw78L2qXZTie9p7eDaPq28McRTdUu1nWPUum4RAm89izsxwbiYwsjeWjReHKEUaQbut",
  "key37": "5c6dpRee1mrnze48Lnr9Bw1cjpujWAfRhWQQ1GuSV8LmzNTcXaB4wwjs7W7EgtcibviKyijn6XjfaKAQqXBCPw5G",
  "key38": "3PbXDJaGSzuFBib8FRvFFDBMwSHu8ZA4Y3ubufw4m2vQZCxoDiQ8beVLQPYyo5KQJoeAzoDxwVvi9FNXZhp56pue",
  "key39": "499xFnYRpoViM9c7Hiar4Ub41oxvhHBCo3dzU1QDKwQZ21iKvVUTFW3FYCwUw8rQXrR3HZQLShyZnDRHB1mrcUJK",
  "key40": "4qKeS66pFbZFVNsM1wMKKaNY4tkQqEoKrc2bR1EJzKF2MH4ZsHGiwiDhNGxb7GcRo75Y3eGkKy4tNXz7oR552vop",
  "key41": "4G1kEUiSRPDwQiwPW1X6q4Nb6As7YPZFi4uJR5HDD31REeTyamTWoQW2C9B4KDewR917w7qpnx1c9SsoweWQvoeG",
  "key42": "4Aqm2xsXDNxPzpB5S8yaandH4apYekG6KrhqepiydcbzqCvM5XQpRykNTZ7uvNBg537pErEBcM81bHHjBJnm1MVc",
  "key43": "2T6tfmBGXXySEcC1Zov14rtRGvW3eC18HErnYVguaVLrSJtt1A5iPEZEktkZvU5gDfk3cP2KTvYb6yVai7fcyEoH",
  "key44": "3sTUHgEQDpp5KDCQEZrv8sNci1YgTRAWUEpfHYKiRfVvDWiU55XK4CbmuTi78pLuLynaQmBueM7g4rkFwPCmBQ7b",
  "key45": "4Xgc53ikfkKxKncpLwiZsy4cHJbKh6Sq5iZf56if66Kgftn2LAXwpT4E5udjFNAUfEKzvUw46yiFQkn9xNvir3GD"
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
