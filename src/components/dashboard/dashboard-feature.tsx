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
    "3PhoqWTgLGUEFGeavjEsojUXVsa5YWABUY8tWWs3MeEF8zzMNpSeqUBtnN5tGeBL975X9S9nAodPyPjryr1G4aRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmTdtrAcZW2pNAsmBZFpwCqUio7NTAZaWYxnosFVpD9bBHsSCUHxQRWEzwfdC4jNJjXoxVenxaUHpRa8xgZGgWZ",
  "key1": "3jWUgTV9JnpwrhvmY272cCV5sRfxYusDbSz34RT8duSveLEfcqxa73F1CdfNVW6YuDSbXGUMLaZiibZwe4FxRZ8C",
  "key2": "4hfxeesaC4Pcsg9CqSibV9XrNbYwpmM7nQPomEpBWbaNa8cQn5o8N7R4Trd6BSqNq3efG3iPAowaqfjVbXvXTieU",
  "key3": "5UA48zrjWEJLF1Zn9wQe6WobkMXcrCAXVVBL7bx2QfEbMc4xXarWGKwXoY1R4PufP7NXGtku4zaErd69h7BW5Wq9",
  "key4": "tcyxs5QdgcPsdh5N8z6GKEmFH1t6igywSM8PgDYg7KQ9Wi1M2r4SZZ7BE5a7qR6wxCG3Zk8q6MbkLxhaxdPkC5q",
  "key5": "5iLFu3LPPpJHusbJCSKLz2fHgriB1xv6kpVLwuHAuUoYHyQjRiXY9hJWAcjdJAFgxq29Xa5ycmmQWHZReec6Na8",
  "key6": "Uk3PRRT4p63fBnB3suUZTcf2sWKB6uuENM1QqAEN3CHojUgimnMR1dVAu19kWA93i7fHqSSHAfqC2pjWq32h84M",
  "key7": "zgJLuKK1uTuq89Q4UNFUZNb85Tk3VrDwzZqhVauGtqoVk3yn3DWnHvQW2t5KwWy1MsBiGq4qdTeyTpWFFTZEXpB",
  "key8": "3yN7P4CvsJwytpUmDChqJNpPi5VAmBQbeR1YP39oUDbS9AeKEn4biE3QcMdRYyuHQrXjNwcdfx36jX5vap69Hpa5",
  "key9": "3eEskVXB2qd1DU25xL5P6buVfsmb7ArncYu8tqEUmttNSkxmGYdjenTSPgxbedmpwNQcyminuJk7DAHr1b48bCSs",
  "key10": "558xSJM3PVMtLUV8u3xMPzkAyJNpi6nWkRtZ7z9xwfBJs9gvDmhy1t72Jz7BSfaJmBsgMP83yg7kFR4SQ6CF3T1k",
  "key11": "4Kbmtc6jkivkgXQe24SPnZBXDPiKwrDxXucmRbtbYgBdVRHT8HPRuuQTDS2cDYwv3fzxgZ2JcL4ZrWPEpbfRXbaK",
  "key12": "4Czaq6d6WbHhGPHVeG3zzhFTWZiPSzE7X7dq6c77XE6Gti2RUAGkKzzeyazVfBmSb5LvRwwY5ffZV3X1egF4YUfg",
  "key13": "2ryb6bTCKTPNmNREkuwFUpv44A2HXef41dcQQPMQUbyns1NSxnwUcsDVw7UHZruuDnMDhzJnbL4q2P1N4y95Uh8N",
  "key14": "255rCwVcA8Zo2qVUHj2AX5oheYbh31y35XN8U9kgpiEzye4c29xvmLyPTwu8sEfkzWvkKH1GuCgtagVFfU8xtnUL",
  "key15": "4r5yZiSFMMwpdXjnNpZqYdR8GVocAxTXLidG98ioU74DicqXmppQfrikJUVSJibPSssPxaNeP94hAFGprJDY9SER",
  "key16": "BioqZZ6rXc12x39bRXpEoXAuGQpAx3aQG5AjbBndUv92L5sSRU3FWZRosKadFpJYzMFzUL8kDPeXjkoQDJ5sixJ",
  "key17": "qsMnrrABCdfRZZhxfzmm8Lup2UydVSaikR12Eyogz2Nx587MmrTbtoCmFffwbLSKEEriurnjqQM2DfxYwWnJxDT",
  "key18": "3gPb6mbY2YMpMPLngFQyQDysjDAeWqrj1JzA8Dd3nUB3c2oTxbdWb9B6BonwvsuAYEw3G5o8EzUHc5JkqjPVLaAZ",
  "key19": "4MUr7wCG8tDRKXFw79rWy3sTJBJVGgeKBMD6yFHfGyHzgA6sCsSmLgyRKNafG85LqS1qk1SM6ZuJxnoBQPUGo1kW",
  "key20": "5ittHFz2VqXH38Hhmy1kCGsKBqWj4V3hLBJJxQVfYJt4Aq6drr4FHLSUemFu7EEbaEZbkkQQQp994dhpsayHijsa",
  "key21": "51CeWC14eT5zG8EWCGnXrXMXPa23nH6UpHxtxCZcH4EwChWUxBXnh2G2Dqc5CXyUYUd9oAygAQ7gaqXa5BjGkyZZ",
  "key22": "23nF7g8rYUqN4XuB3AMJrpWGUDR1GfW98giWPT88orbg9Jb3wkPXqq7jrbqQ7ckxi2RXEGX5yDwxJcKs8Qy2EjsK",
  "key23": "3rZyrQwKYFcvFaJsdgZd69QRrML9P9C49SFkdLwfsEhDJ2Hb5LkBu7TX6YgZDz5Q2it7KvrbPcteNoCWrupmqU89",
  "key24": "46Y5uCf3gYiK2PyPt1rj2MH4X6YnygHtjgy27YZ6dMLWp29aYREXB3KTGA3iLu4mvSrJLuWBxX74AXrKGUSc6cd5",
  "key25": "2KAMKy2sVZsGj2GsWuJndCGoYBXcJTWVJXo4NNfp5jsGAKcyUEU42gjAtmgmXpyvw4CDmcB6cDkiojckSE9wWvh4",
  "key26": "PmSRzaeYCVzjU3FGP99JxMTbjUejbNV5gURU6YtdY4ysnfAxCqEMjq8z7RB2sK8sP7ieqKngTdbX7uP8bQBAsZk",
  "key27": "3V42PgSBYQ8A8DFWq1c5wXSLKbWT5VVRSmALuPkJuQ9YbnyoWg7DSpFo8TLqZ578yzayUus1CpiUBU8CTeobTmzu",
  "key28": "4oVX9i2Krsjro7grhq85zK2XnQBeuekpzoYcc3GvNtrxsWCq4auXCqHuze1daQceExuouC9BPtpLrJp9qtafjdBG",
  "key29": "5SoT4na4pbLttrgyzj63hT6ZWARR3JtWRsomGWARFNKxDzNLmda5syifhkpQbduPnQRLDmzcqEVKL1nBdy3ZZn9t",
  "key30": "3LKzT8j2YH8Xt1X4SvaFdLrwuFQErJumc24MaDobfzV4Gmkx3BJyMC8g1euSVZiqKA93sr32L2EBeUkGfHavvaFy",
  "key31": "5NJMv4cWtMK7pMiiHzVaPzR33QdG9BwQHN9jG9V11TBdfSgXJ37r8JBfSdAsK3BMvbtJVgF5T6bU1SaA2GP5SXG2",
  "key32": "4ktfhXPNLuG1rEPyTnmvvGLzC4EQTvDotj1g2xVsQavk71EiWYZ2uiqD27pEoR2yqNpB5EZUK5ccfXsDFcDJnGQd",
  "key33": "2XTs88FaamVdRTuXfWoqhivqXe7NjWHFn6NysgYbnbMyYz1QkiDrQ6qUHfnAgDfqYHfiiZTBWpCUcUVjxaQjVo2k",
  "key34": "4UwWDSTs5zHZSDMM1tz4d8bBFaXufMoWYsiKiZTrLDYa2hhFdwMH7iPyqyqyFqTPmqpETm3R5NfRU6scCfdKHN8u",
  "key35": "4PcZcfHZE4MRDwdyEJnzpJfqJERkfvcrMNEpJL6HtgPZwwh8fF1KTeh6q8ed7qy7PiULeyf6ZKUpeBm2o8JTgRBE",
  "key36": "4vE9kSfkJmPLKJsaiCT52viJi7R11X9UrEGYvvGFKYFG6SttwiZXAGPkDY3eupbefggi5r3yVQBue3LHus8Xdta",
  "key37": "32yE4UqVhioLNtaMD8BtHV8vhY9BqiQ8Hbnk7QMee26BkSEHZNw9jgK7hwaKAQ6GBmb56bvvtj9Wfh4qFhL8avwW",
  "key38": "56GmEqjPaX6TqZPgX7zd6bxXFAxkRP5TKoGkHRrKsUCGoXvoGYx8QXnSaGD9H2HbjLqsBCpJmfbTUVi1tVjx3FCP",
  "key39": "4tKBMnMVi5kNSjwKN7M21iKcRf5C4u1dQwHKJV7qWgX9DQ2pq4XDGvmAZUM4mRNmM3dii8z6xRwLv7Rp1edhRi1k",
  "key40": "2EfLYony549PGdxi4Z3BsgfWJnz7BUoLeDxthLNpbMiTvjK6iiGRzYupTXxozuEqUWRiJ6h381FFUTxTRbXwvjoh",
  "key41": "2278E4QvkmPSVQtmi8QFSPzJfhUj4zdU52ZjqS3CoHL9vNgdgmeZfQfNCH34PPKj4923MDdSJ6DkPcug1GwuoFmD",
  "key42": "3SkBgHtX6yguBeJFYymRfMfwwwGmzDBmXsB8iB1WyjzW64oQTV1QDKoxNQQrAktJsmNEbH4mh5K9QXk5UrQGYzXq",
  "key43": "LXmryPpKAexzvwoDik11ckbRLTs5Jw3opP7oLoT6KecL5Epn7FXEMVuTZekDxbMiPc5HAMhR54KHZZrpnniNzG7"
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
