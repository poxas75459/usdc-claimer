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
    "Q6bhDf7tjpdouqEZE3a2qXpFX8oikm8xN6hv2X51N5ThcehMvY9S3Ch7pN79YWd7GuNZXccRZerBCsxoHaDnqa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFYQByoVY8FzRJJK1wb8bwZjtmAxTdKsu39xxBCgXvMSRuvQnNNyfmhnhajrDW6ZBoDxW8cteqhKorM29XthpXG",
  "key1": "3YYC4cXS1YqXFHZmKgB2hQwbDRHWRy3Cb8LNS9cjdXeKrnjRwQwnnu9NBxx6pFSVSTqVtCAG1SxDcoKNqXPjyndH",
  "key2": "9Ugi17CErzJCnuUvuB1CYPjCxwhadoTD9BBpweT5GdQT8tQeXghm9Nbsu62jU4QqXvDPXUdJ2Srqo9xHqhjr9wq",
  "key3": "2PrU1upsptskNfEJNWuZbot57PCWLKjUs2Gk9f2VCMKMSxxUKCvZpbQyTfFyizyhX2xvZGZLA8siDYc8pNv23jAa",
  "key4": "5ap8q7dGfgwTLWmHW8i5Feg4i9kJpNRBrRhcxSBncKVeiBTx1cn5diPzJCPEqPt8k7mWTos3DQFNQYcUuyb1iy26",
  "key5": "5oy7JfPQ9S6YfPD2bojatcr9dURWRE5RwNSm5otiuPkYbw3U7ko1UhpKRK9xSYxDhZ3mY2R7ZqntPHMBgVPfHyF8",
  "key6": "37j9tQDKV7BHaPucdq6xef7Qa9K5GNkYoW4yxsyKhgW6XdCK8H1ikHgHFcbotoAphq5ZKS1jAAwPagn43E7wcQUA",
  "key7": "2pQGC86op7KEnTSTbjYFegxnXsj46jgsJvk5E228Xy94w6Xk9mMiPJjGJ9aX3P2WRXztKGN4sud9htN3uVU7VLbt",
  "key8": "42R5NSsxuDR9B3y8jdjbiKAzLBsStgjpnTMZMYyfWMAYDR6svRC5ccHW8KB6cCvQCQHWVJcgHhWdE1hUD3XyzDLs",
  "key9": "3V3SHMove1p4jR6wumzg6pekgzPFbm7H7r81ifgYsBX9ge2xiQEPX5gmXNSp2n6hVgRqXFi6D929XEucoo7LbQHz",
  "key10": "4JL6HZzd87167bPGBDWZ2hJ9Ud8w9WVB9bBXLERYgGRBGzg4h1vxUjuUffZgeejgacjtJuazEpJ3xeVWBGzvwy6o",
  "key11": "2YF9KoGEme3asLSWDQbSEbz6iMBqa7xkzAMgzgH9ksQhRaZhBztjP43mZe6vifLbCtxRvuxtNdtxVcW4jj1dzA1h",
  "key12": "EbiRHQRXZeKw262Qi4kwHUoVxZNb5EJ7bDvQ7iTTiqAAVPtb7VEMDsJQ1rRvG1AxAaJREc58Cm9BqLwn7uR5NsJ",
  "key13": "463jw9PYxkDXUX2JdNadHw57Dfxfuao6gGEsis5Lwoh97B12EKFroy8DEum9k5JBESZdqDmrh9Yin4zp5XdCMcob",
  "key14": "4XLTFBBS6oT1rYdMGwYFfNUHoMLQRixNqRcsNLACPj5uPYJ4R6UfL66b3CUv1ZMQLTmaX9E1iXrWZRzW7BBsEPAq",
  "key15": "5RHw25bX2tv7Wnmq5SxuX57Kg7BMb2NNGfSPX2SV2iWy9TZfHXbZa7SV6MU9TmyGyxY2iuSd49b1v62RVxQGjBk3",
  "key16": "5ucuN6zSNaybJx7Zmg11oz749mBkLykSsReMKXa8tH871jKE3sSFhnWK8vMGkcc5YJj1H8VwM9EDrzzkMZmQAueT",
  "key17": "vM1XQ1rf6jAMdfKREkv13GB7NQN41u6BhEy9QdNjnvmF7fRmiT3rrDBNcRbpPc6ZAVfbtnANZtuHWQtAF9A3pWb",
  "key18": "hYX1XCEp16Ph5Hg2w59uVtHf4Tk6wvPkij8nH4uiMKuV8i44j5XEvimqeyr2fSWCj9duSHa1oYDyfuzRGzHkUW4",
  "key19": "5G1S42FwWqdzUxPKwgFYS3kD33nJ45QBZkL4C8FBD9cMba7f2KKkybPmcc5UwJnkshSDA49UPQDJ4yCZci8DS26E",
  "key20": "38qyA43Knodt289n66cCSKnGyZ77kBgFVuhKoHt5oNwXrP2xFwEKmezCQ8FhJZuXQviGB7xiyjHt7C2CNNa6yBRW",
  "key21": "5eysCaMt2cbE78C2viEQbHjbMLwVDRJvy9LkzL3RQDgdWfrB9htryebTpE1nGR6cwiaG8PZkUnpXemPUwKdafo3A",
  "key22": "Ha3CzcXLcvRNwLGBj1Bida1bekaCQN1fJCdnZaKWAZgoTDKUfYNP7HdcDERdP5btHd7wfdVRW2vd4hS4vEG4PuM",
  "key23": "t3Y7aPYLqgXFtKyhbn2QGTqEK4dSnEG3z4xoy4wjyiLP8aBMSkJ8W3MVCVEL2HdjKQ9ScRuSFVJTjVWS68T2Lbw",
  "key24": "3ZebRirxxHHLnLRABQTz9nJXQoKyAhWTExPy2pr3KgY3DDmWJe3zyx3fSTJQLTjn3tN9jF54zgy8PkYYVMcGUCej",
  "key25": "3vVkot9mP6QfwumzhfnPtpAix4V8P2zgT5K8TJXnFtD4mHAw7rk4D8htjsQKMiK1c8VpBPwiTs9uvBW62Em6qEUm",
  "key26": "49YHbjBC4BZsnt2RoJZ8KyrCNKmUTjk518jHxUKhMhvAdtXjcxwsr1DEokJMgWhcL3gZ9bvrzXAe5KmdJQ8f3hz4",
  "key27": "5qvAQPNQTrSzQNzhB1538jrHHwfnMuYgDUeAEr6WuYDhn7tReok6PPrDymMcShyCX9RnYxcM9qAkqr5z7Lxq6McH",
  "key28": "awJ1RXhoAkC9nTUd1aKKmsiuL2oxiaiRSL6S8SvThAPvifH44XKJ43e6fGhHk47pxD1RtFBhUFQ34CacvCKWyy9",
  "key29": "2PAvwRn1dVMpY1hwrDLtNKXmMs51hKJxDNfiicMnSEBF1iBWvd2TqSCcXhd4MeZDKbNtpchvuGKUa52RqwDpLLjZ",
  "key30": "3jfzcp4dEGkbpq6FHUm7X3bfgSkA7SKkCwBhPsR4cNik1K7GhcicZZr3H8g95fXnJ7L3EwPZxnbMhmdhcDMKZ8CD",
  "key31": "2Fr3UV7Y4n8RWRcwuzanW66vhimmiq9fgGm55GX5GjmVyhwMNiVEaq6YZZyKLi6WN7LmsNWDhNGAydB5YGgi2xZr",
  "key32": "5zftgm9Zm7HMZqah1nNNHP997HAyhn3pnMDpwf1DrkmNZpocx8UHAYJjQjwYrTXmrx6TyPVocnLp2Rb9dVP1LAPE",
  "key33": "2TbDTWgPaBXs6kA5DUu88cNB1BYFNnW8zGhPWDLPJWGhCMHF5VpvzUhiJRewxqeEEuSsAwtdj2KgbDfQ4ahxFkE",
  "key34": "xN4apWodNk8HUy7SG9hNdvokrgeSUzN9opBYFaBDaehcFrRNiET6qDTUoQtQiwLGCymrwqF1STYdrRvxKyNZQSM",
  "key35": "48zo2xQkztbpNurEfbS3RoLY4EMjAFCZy5WBmBH4XAK6XgczxhwGkDVVQFgiQCJztH6xvMWRabMyCfoDoPRT2j7U",
  "key36": "27mUfJiaGnyhK2sCyawEvd4nv78NXNQBkciVvTaUtEzFhxebh3CkRfQZYBfaGx4wFEB8B717dhxQT5WbSe2YcErN",
  "key37": "41bVCs6qhAFH2jrGPD84UvA1DzN3JoFXAbGdmoPwV9VMWVwyTQRLqTKQ8fMMxo24nfeeEPY7yy6buTbPgYqFxTJ3",
  "key38": "5dca8TzkNdXDJSvWXCUqExCMCswr7GjBbzhjhnDUTwT14RtUYi2qWCe6yHXHW1ericPJb97nER9Hc9P8NPZetzK6",
  "key39": "49H3BfwmFC1owqxM2QU8HYMDmq3q4zjqYjtBVy4uXCsFuMB5RLDf7npqv2Gg4826nNvygMc5kpEo5feWza6sr6SS",
  "key40": "3rEUKVqd7BrYjESJKoAar3xawdG9rNMxrrD2vjTQcdWVoxtQTYJpMgEeLHWyn3AAZHTYuoMuEkV7hyghcWNdcbKo",
  "key41": "51Nsz1NoNhBWaCGfWKBkUJQoFHBT45xzPVtRxHWqDcUVZdmQwnjwkQkDnUoRtZe3aHTuQU2Dxo2A28RbfQcvYzML",
  "key42": "5YdCLGnsrcRrdQArCwj6YguQAu4CYzCw9ggFFAQZq2861tid7Vt2dkvMH3auZpvtzRmiaLt5VB3JjY8zCEXfM2T7",
  "key43": "5YygM3LGCmHVBJEdPxoq8WzacuyTqohddgKAsNVB4ZGUGDDd5PnQgY8MMFQdre1hHg6DAmGbMKbrVud5YS9BWzTg",
  "key44": "5qj2j8HEMKB2hwJgams2FeDyNJHvrwHcqXVYV3G9i26MworYQ2Jh7yDrs2YN3DnsUyfocfuLm1PK4w6cFmrG6p9x",
  "key45": "4ZKm54vAFiUrivjaBmo6stGS89p7NL3DrwqxqRyrKAamhVHWD1g3pi2apJdXtZhEQh25MCjnVa7snjt6LbPvZbVa",
  "key46": "2T4bxrmvZ3Y7Ez8nD1QAjDSLudkSbzENLYyagjKbSaR5oymaEpUGntEWsBRmKcseiQUDrnoa7w4YgxWzGKd48eT3",
  "key47": "2tigi51NwLZRWBXLMPe835B7ebbvJm47aYYj96gPDjkq6MTkoX6D9kWtQ2136oA7RrfXeHvcueVrJL6T139VpDQX"
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
