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
    "5CR8ipMKuRe9yoEEUqoNobDwTQwZyzWkXniuCStZs6bB6bhgg4WVkBZHQ2Pt7v5mqqvhGTYHdi4JffgXn2WjuVPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLDGY26HBQ4VRjGD9dHxaxC9J4nAFs1o3hXCjxreHGyxVaXsY3Mqew81VuwNcFcwJFBvnBxq79eTjtmy3dXq7E4",
  "key1": "5FobjiXbaMbGMeBkkcuHvcfuhUUiXoemc3bH8qi9EwH6XRkewbqJzs3LziccJLtHrwKDrLCjpcJHrbWNpY6fRLmJ",
  "key2": "39movgPguzZ74ieZ2YYh9acaiK11dfsyomurKWHmY7dnHswQMjUeHwwiWPgK8nQXmoNqDfr577m8LpdbdwYVxvF9",
  "key3": "2MrW4EaLGPF8JJFHGncnCmxRK212eAHshU9bE3eYz7TTBQpKZKuX2Zi5VN1dahMboVEAHKMMhz5ViNftGuoeyeW",
  "key4": "in4FuLNSXKFqHR44P9MjcUFxzuXSMoAzTfq9gVyNgtAV7u3peTXfPUpYwwTLnPeGw79G49VobhdPuTZ51W5Sk4K",
  "key5": "4hitkxpcp17DscBzRwRbwAhKG2kcRfR6fERVRM8SNkvtJZ9XgdSpUp8xhsbiAAHRmBwbMiNS4v1g4D3J4ndPBSSw",
  "key6": "5TgyY3q5JfZ4GhYh7cYghC4LBZBGj33VgnMGXFPW5Z55zYUcCWFcxWo7MgUEKBh9Tj5P8ripBCYGiW3a8hXSgJYv",
  "key7": "sfxMX4xJJP9MDCbRxySrRuP4gCnpXm5uwNrdC9kEsQtZvexaFFVk4iY444BwSEo2GcFaTQYgriFN88cGTXrWVSJ",
  "key8": "4698jX9n4NuB9UokA1S6qS6UoNeCYoU3W6J3iw5sGNf1LMzZ1ACQATcKthkUDnfiN4KuRduqP6mmPNPEzMtd7G2g",
  "key9": "4k2H8SDxLDVPGXtwf9y5MnPHns1nt1p3yrLNeVcutYUKqc8ZRRA2yMNrrRMqLCycoqaLgUu5z9gR8HyKgkXSGiS7",
  "key10": "3dhDezBfMZFVvLode1UaLw5mHz8Jh3hAyXVq5asHnuSrcDVieVwrN8wytkqPUPC6q5DBjbmqHgaYa2fN9kqyfdTi",
  "key11": "22FaottRL1MMAjPYis7TCkydix5LZFbyCpqrDqWgTRsnKwpBgNirMy1hqmHMrAQfSRFen1D4MnxC6TQFsNdUwNnj",
  "key12": "55CGit9JnRE1sXvCpT2Prx51ZSiMW1gA2fE9MMRSEd5RFJG9swA35E3Tf2M7VdMHoVngaidfWddikg6ykgtqG6v2",
  "key13": "2HDHr5MwW3WSsBrkmV5pLnkM7kLCuyNGEDpN9WHeNuqzAyJfyEwJyZpdQT62Z5f3hEnEi2uWyCPsvVx1qXTDg1yE",
  "key14": "3QwKuJPD1NhEo3Gz7bj4fQwp1zfpRe2iNxdAqdBAZN1iVsb29GdxPUVY4JTsetpMXeRonyrBhELEVcxhR7a9Leqd",
  "key15": "4AehZ8CvDC4WLUAdY8G5EqUCig1QCnqKKferVs258A2Kx8Rs66MHL8oHH2ThaguUWJRTTbAGdG7g1Lf38rnctqhq",
  "key16": "5ubdMpDu5y2uyYyAHEEevPPmNRuSGmZWcp35FYJ3Lb249DWe33WrkBzXfnGLpKSFNnd2ExfLaZUtn6McP5XqLvxE",
  "key17": "2ra4ze6gRqULyJmqeuHbvujEgnpLo4kKRHDvZxXzHD998W3kg7mDvgcHV6jN6En7FuhFpMncSfqSAXSuJN8FCWWw",
  "key18": "4U1ofCMsChbCJPBfNqAw854RVt5RC4aFWYbp9VZGmhv9CKPeqVKum5wTVP6ti5Pgs8tL2QfudAdosGvVe4B1ZVX2",
  "key19": "42fiRGMywGtbyiBbMGz5KGF3jWJEJDHXsBJ2eqWPzqRYnt3uwugFb6c6VK3y8xZ3ifnG4m6ht8NUwiNqrJNbd7DX",
  "key20": "1PHnzeqUuCLPZejhSPPehk4bGP5MGuAdmHvxZVaDXsLNomneeihwRUkjzWzCz9EQroX6uM9juWTJrEoRjE8fPW9",
  "key21": "3t8FejuFMMcUcrt3FVJRTWzq3iAKx3bDCuGbDH8cGqEKToAADGAAoH45zMsaActGtwigFcxE8CpAY8FEhXpQjvew",
  "key22": "3fzsg9279iUCdk5xfpN7gw32jgYoWK7DomAQH35YcJvYTFC8HdDQ6RN2WkRc8jo3XRW15BB4BQXU7B9tPMYNxPav",
  "key23": "4Y7bTMnMtEzSBKAeeoCcpkM7RigDDK8htLD6jsPfbkVMWU947bpe8GkoMaxprkziVTDo2atuVDacZmPyXUzbGECt",
  "key24": "47gAEt2Khob8r2ch2YH2DTTysXtQUsiPEjPt7tW11VAzShNbd1md1sw6vS3r5wFLSrJ16F8UmuCecSqWwLreRs9q",
  "key25": "32RdYbpo1mS9KpcqLAFD6bmf42VzfV4dqsXnm19vgi9bYbGQLx4iinEit1ggkPEaiQd2vzu9KmY35WMgNBemxTQ4",
  "key26": "3DHCRsKKV73BFf7yDjZQ1E2r5oeLZdVSP3ZZMKGzmT49b6znQ1omeCf7Ce2Bcx7zNiorpLjGGesgiiCbVBSeaFu5",
  "key27": "5fUwp68yEKM1EDibPCoK2mgbPtF88dFPxkHg1iLDBxu1JyMYK7RwhhNU7g8MVyeDySZKK5upsuGHohXRS6QiLaPN",
  "key28": "4jRFCzz6jGVAqeZLXT1EUaXXeEAPKyd286fgmQeNxnoiNFPfoduUeGdbY3GW392SJoU7xmTP4JbV7FzfoyPAWx9a",
  "key29": "51FyPZgAWbc4qHhBhVXswCgyNmTHJUAUvo6U8ofg3GwsmVAMnooMt4NbZJyJHKJzRLavPkRhmhmMaRpPdk5ZJ3t8",
  "key30": "CKV2SGnzGVbAetb5jZrmMBs1R1fVPjcnaZKJZxZFcrFsrBCzkTopBv7R6vuJsB5yVam1pDAbJRghm9GTNDyMwxb",
  "key31": "4gSxPy2uRqgeucTxxPTu3XGsvJBQwmQ1WJ22ywjVUEWTTYnYbtXnQGbHLE1FL5g78ffp7bYJJ53A7WqNpfGYUXvy",
  "key32": "55HYj7ezn7y2ch2vM4hiTTQXuwWfi55GXcTiekxa1j97viKvxvezLMp16aNuPFuozbroVv5pvcacef6LyHuJs1Wt",
  "key33": "129oEvmWfkPF46oSUVGBFQBF6KBhyNXcWyoDTCdPKAoqD2ZFMjYAPDYuWYU4scs14HXkTcraQCA6irTjH8Pub7pQ",
  "key34": "3qmFLTF66NvPS8r5tpU8QBovJr7eiad4NtFGrokS3Rd8G7g2BxaJ8DRXcVFZDjgkwuZhPth6UJCwErBfej8Y2Gvu",
  "key35": "4gtic5XfAqxFJs2GYkihMEH9QfEEHiNUZE3morFtcfXvGwFjAAZVgGFHq8Pg1yySJ7L3JvK6Fx3svD5x3RzTW4tm",
  "key36": "tjc33X3BB3hs72J6xNhkiAxSS5L26YH1xyGVAJjSngumD3ihdjGknzoTemBGXSo8y5NdwcSKLxqtg6VbkvqJw2i",
  "key37": "5H5ZRgbk3DHipgBjx8xDquWe2MFhhy3qeNrdsawYUoRGt1x4J8EodQcnYLxkHNAK4NHEgXm7zkquMHCEbAQ8XeQs",
  "key38": "3meQAa7A843MnKJukteGgWQwwok7pD5zb5NChbBs1PPE6GqKvcJXDGC7KwZP2rHtby4r5FnQaHkfBoeTavdVhYQJ",
  "key39": "3UWsqMGrP5YdH8CexPdCuDwnXU7ufVSohAJXGTG3WSAU79oVNkR11wGpYffd8A3iKrs6CL6kVBctC5CNLDmHCo5v",
  "key40": "5fqkxDP1y59qrEL7aUc1Hb3C9TPcytghVFg3yzqW645hPhnZkTkvaiuRS6KqP8CoWeGbo3aXEdrNse3NLVvTnCRY",
  "key41": "iXJhaumqicB9WisWRaNRaD5nS3jYFMf1mdsCSoqix1aScc4cDADYkRLL1dK2tJQh4SSNCY8bJuxUeJMt1pU8yte",
  "key42": "4swMAbrEDT5ErZKCEym9NH94UgDRbF32CwBw2ih2Ajek2uC7yEYv9ogqUWVZ4W15zHDUa1ptJ5HKi8dGo7375uu1",
  "key43": "38T1qp5cqFAbKBqjKi1vHggR6yBVih4ZFfgqejX8RAHETNxLKaXKC3dVpsh8sjUf8gJhE7B7fbrBKocrSiTp6p6w",
  "key44": "NMEs2PxeFvwr7fvYogoYHvuLEEmPoVTDY6UPeqGsoJkDXVAyWcDQsQ2qSgndhGKawcYDmz4Ky3YF8yz8reaZYcc",
  "key45": "62f169K9znRucEdui8JSnJrRsvdLuVRrqPVM33e4NRH7WcEtfpe5QkMKJziH77keEToNTYCRKL9NrfFEoVbRPAx3",
  "key46": "3aZFZKkL248MJBdg6kEPsU51WteNqPuBWQeu29mHFvyNgLsfEjpifx98fus1C5hcxpBJTpbqL8hk1KwqjMYfDLi3",
  "key47": "4DHMAh6Uso3YKVxLuWAsvcEzjaCcAsoPoVbfYAWQEovgu6toCPDRxtG9wD8EF9eGPdhtwJyCBiiSrF3q3fYeGydF",
  "key48": "3NBMSbimmv8541QmBAKbqpSy62Eoyi1H4qaUsenoCGrubfYHmGuZ81qivG8bMByb6o2jbzjYQMkAH7DFQaxuLNBj",
  "key49": "26qk1mbHeVETbekAatemTn33hZAUBQYHmWeHNdSW2QsoSupJmPiPny6go4XLHs79eddKY2NjjJ3i74Xkd1gdVxaT"
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
