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
    "27rWGfr5Zq32swNBA1Uz1GcDPXXbSFfvfxxcatQw6sPNAAaC7LZ1EuXBmsUBCBUKkywrWz7XW4BgFttKaRwG7i2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xxf8gjdBP7PrfyfKCTMsgL881pv9NXxVAiJSDwVBPHhMBikxGMew15GKQNoCqnunELSfvmFLLENwLGx7dA4bvkq",
  "key1": "NYM9L8wpWjMbCYobDheeyR7Zg35uuuXQV5F3pdGk7zPHxMWnGidHuFm3g6b3b34aJAB8LBweMDrXdHzVUxpGjQT",
  "key2": "5nXHyDFg6Lyq2eHyqVEjrXH7KBMSbQ28VbMMEHZKrivgKRuJGANUHfYfjafwxMFeCmCnHS4dmeD9QDsQRNkKwAPr",
  "key3": "ucPMy51zkx3fLyk62XV9dA8zeoedx724SKDgnLPJArE94dNfK5NN53ybaxZeybRGoYdFtspMacDLUD214vWXigL",
  "key4": "3Tpnv4N6iq1ZfDQBfBHNpc3dWTQvbUtRpz9dUCSFhkmAGLzXQu4C2tyobV6sQ5TuN71GisjDiS8rQUspEe7y3JJh",
  "key5": "2j46JegxQiy3QVUo7oDpcKzCi8dxvVFCDXBZcGXfLkyDqbn2nH4HKG83b5DCRV8MxFCMiUUzPMKyefWGEEZ2eJRH",
  "key6": "PBbogC81mzaPnAkwYBAQAyZvgyi2HZAxZqtz3jeUCeZgP5uJ5gTqnGUVb7JtAP7pqSiwhmn9Ua8jcN4ArgajhMy",
  "key7": "3MYobqtQRqrB7DeGHXFPWo92eKBKaqopP3tC8K6vX4ENmKjhXmhiwZx4tqCTcFw6bVbnZu6hQAUfvp5mYKh8mavF",
  "key8": "4SuxKewPN51gqUaejaR6xWErYeVFfuwFZ6qXazCPua7uAnWoupxJQd7pq7oC2shQbpFqpgnuC8TDy3Ae5LhRbkSF",
  "key9": "5GhXbGnC7JHpXn2D635GByJrJp2eF2WZVcLzGJqUD5hcjATdoLbrWhAaV4wMdkf4Ez6Um8AcwpWGo3QoeMH3wLFZ",
  "key10": "ehwnNLqiArvvivrGkEyjCAwGugE4Du7DgD2rcDdZRYpVtaLcUqMi8Ka6WR7rBkLAVsXqfpUeWxR73aHAJ1tAisg",
  "key11": "4cHwmtzvby2bDsCSq6SJwJoNhMZtw5pLo7SCKAermQEYKys1bcu7cHGJFquYeaKuJp3wsxpM1TuG8gYg4ZLpHpam",
  "key12": "4cwUFWFStp7EPwn7MPG8mP7ippK9NDtakMEw2f1Fv9q22HKRU2BimPnQRBCysHtu4u2PvPXNd9VzaRoeoZ1bZ3m2",
  "key13": "5fvqfEGudv2TF6zVA9RURiBpBFtBm7iz3i8xT4eEwdWJVf7euifw7zJD85pK2L6FNGZ8ShE7RcNUoHi9NMkk36NS",
  "key14": "3XyYBWBsqJDwd4gqf1AWwAXcdiTqN8pwTY87MknJ8RTfEjEbw6uMDYCt18ob9Tetc5LdsW3qwGhqDhXm8CMRrixQ",
  "key15": "3QvCCXWE8Soca8KAKbPsKMH5fxrN8iuAu2Zqrh6qL3h8uvVjhLmqKhk6cCZB3cWzNaZtwcLZck2urLGhwMUzoZaP",
  "key16": "36tBSVaBXuAyMqVr8AFMYCJ2LLoicXrDaRQjc86mCpgvEUa32JYfAYDaeYcrsfzGqjFuCAXiPUYYewwLTwxod4e",
  "key17": "4KPTDmvcpKPsDWBUoNts7LVVqTXtTFZzKbHQ7iFN9fde4LYvy6ayHjuQDFKUrd5KLDWt85rR95n3QncNrLAwEvAP",
  "key18": "5K93ZwV3zRtP8rsrxmEh9T3mHh25cu8yNXGnyFhpoBmutXPnzafmU5gNwQcWbk341vEh1tD4V5ZDm3FkPwZXffUZ",
  "key19": "2ieiPonkwtMpi1SdZWeHThFmVouH56sADwGCy7brq3npts7ghbk2hcao3kSEhuJNcGYdpnerd1dFZJ7RrwZBpmKN",
  "key20": "51tQfQHLQ1gTeRpbsTb5SaB9LijZPRmj8BZim9j9bxLyQgN4AZMBzPHURfkSts1zauR4PRkVnDrzcoydLSe1fW7E",
  "key21": "2wbN3QUxNqHYjjWQtc2w28tLvNMdqAgNmabFQyWYfhLxfgXQgbpCQcfMXuyCGyURJFajyfrRSqSYYXgY1ZBQmARX",
  "key22": "4Dky1yXtvP8dcFtxjNkQwCzz1w9FZXCtS18YoHshmUxDWK4NZMVQgBMgGuCXHLBh5GFMh8DgmqiEdmPv2TBxumu2",
  "key23": "2A4FSSJDLxTvjLDh5WhrP5QN8pQJKpEn6RfRqu13gnFudEpG93qr7PtUR6ywRQcJjYSPiUotrGf3dcPJYRzJoGD8",
  "key24": "3oZ4WzP5J98JxhBLPv58xWTJQyipowtXgEuTWYddRfvK9bAZUoKHYdwgr3EX7JqQn83vbPnoN2Dq8FRdGLbkhfJL",
  "key25": "28ZJtWx5AxG1S3wnX7tvxYPoGewhDxRXt5Vp8mSvcFfUyKYZrQTbo9AaB5QxoCVBgadKGLUNCnF2yFi5x7sLWny8",
  "key26": "27kh3Xyo3phFoZoasQYf6E757kMCpHcLcoxRXKqyCesPXDqUatB41pqE9Up2uPuPWn9JVvoSdb3BGTLh9ek688hM",
  "key27": "5AK9ztLGcL4Bb1yPjAz9VBuCvJeZXoUg3qxYYXxq5AkwdU7tsAEUrNyNxbAjDXqj8yjejxtiFoHNxRVeWnWRa4xw",
  "key28": "3C97kqoGw2XPnYGfqNkK5d4ZCYyZonJsoPMxp6E5VkX55c2qfuVbPnkkEbKLgroDGF3nquuvobhoY5ChN3RYJHMZ",
  "key29": "2vuEMtm2rH3pu4NoFhRFv9b8bs1LDdDdNzDf5VkpbtSJm3E5PoRsFmYQJy8rwdcSiNt4LJi3tBnJgpKfYnycKukQ",
  "key30": "3yWj7YvXdHZ8Qtkotu9QHM8UkoPtfvoa7MeM7qtA9uZjAUcpoYREhZg5tBoGZittfTfp8MEBtLQjj13eKFbLafg4",
  "key31": "3bb4sZtHzdKvjAJtAXRkkLegJ3r5xtM2L6psntCD4waMgs3RTMq78d6zALN7rA9byz6MMu98Tk6NDGeac5a1REjd",
  "key32": "3XBQ1RjbxUvzuMZexQoFAuae1fFMUZP6DQKApwEE8XjA2QvKxtihvdCrH8ZA7XmBAc1hXxHZDSM8PbZxf6u59r6K",
  "key33": "a1pNbuZMpBkHgcAE3LSRHA682tryrQVfcdcK3BXSxReEW1wKqvZX93EWcj1A3LhGg4R97n7vra6NfjctgaTr3ou",
  "key34": "2onGeeFhWYLurHmkfLzLX1bo416sH2LmERAhb5WgGi4GuWXmkPKf8JUuaU7dSqqFNyfzR72AsYZioB4s2afYgoFp",
  "key35": "4xZUcPQahjFi4HFgTeR6yXbYWR6PM1awbYVsTDxKgj672cPs1mXrzxYednfrYS7RpGXr7NDRoktvNhoQNURqN9B1",
  "key36": "3CmL2iPFV9aYUyGL7swbM8caubVDCNgzJnWyeNdD5gVSTKxRwez1k14dAgebCt66tARBoLkVPB5ZEHWqaycQ8ryK",
  "key37": "87pRHRYELvs6QyEubfpNZ9eyAHAmroRpyGMhLYY4kyvZviU8H2pyNCw2pY1it4DU21Tqba1Q7r6h1TQ7QP7s2pE",
  "key38": "5wGJvaYbNBYtG2tHzrRuXoof8nFCWxXLsNstJJ5YMmaCQWBVbfiyRkbzk4S4sJryBM3tz3RLie7LepHKbbjNjfax"
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
