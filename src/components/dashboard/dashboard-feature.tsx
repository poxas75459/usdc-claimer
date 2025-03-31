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
    "48qTjzGcnuw9jpu3Ey3UCvZKegPPkXDepg8FbW3CisswckXbY4hwZeidJGSywC14cwRuwC1KgwYG2ZAf4yDDXumU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpWihezh8yj4Cn9ZTYZVkzX1WjCvX6GNZhmZNVig3NULwScyAAyaqbJKy4eVfRkhnxVcszGRN5ur7H7vCYoVAx9",
  "key1": "4n2GV8nDYuRRADvRWN2oP4r78i6PKxEvPBMS6yYLVGnqGUzwjiUsRv7rKPjq7DjgjZMrLJUvD7nUcGWC6zkYm5VX",
  "key2": "2cb12EKRCTm622dgzrVSJaddQjHukNcvKKpFE35wns9Rvm3E3krdK9gaXRBaGXi2rTEJ1EPysztre1Xg8fGBZG2M",
  "key3": "WCRc8bNsPsWSjoMt9QS9y9H3gfhTurt2FUJBpjiQRSJgxxNW8HhHQG7RGwmFDSkhJkFppZcSMVs4Xv2WxgfmzDw",
  "key4": "61ANLVAcZeSMy9HwYcaW88WCsPNTYZWYb5cWEpn9jg3ThpVBosNsAXXeyPinXhwFvu4jREZXw8Fsys3zM3xyKHeG",
  "key5": "24rNMgAKqhgiKnFVxcCvk5QcrvziLQaNtDCAVTBkMDR92R1tdnZRdSe8xRZCHAnCXkoPh2pcFCpJpLAfZZnZRrFn",
  "key6": "5TEKuqnvpEAkGiDnBvYnDaiAYXn38e8JhA8Vcx23mHdqV6WuwjT5ti3ANijQ4bfjkXh4pVzNHcYSrn14pSTcFxov",
  "key7": "3M4PrXsjjvEYodSnqb9Qwi21CQBgFz3iCrRYxxz5DReFBjuKCMvSBbCgBDbvKCdy28WNUhSTfLsBnPGEUpbDLHMf",
  "key8": "2Zc1bEo7hsLBrrBznisVjemaT5YYNqsWKAKXEv7BVHE7t4rheHvBeyob17jj47xSsp4etu2aNHdd3ntUSjv6NvwT",
  "key9": "2TGZPN7tnedduTtobQawtyip58T6KH5WrBXgRz9hKa4qxtrHRKBLuofNhpzNqwJ5ZfWqbKRJfrcvdzkhYU8jtJCc",
  "key10": "3P46gnN3eFHKD8mjT5s6s99nYTL2r2bryao6osk4fv2sY9X9qPdndaged74RtgCNeeVPLdQVjufMJ2bbGFkLHjh9",
  "key11": "5RjpmepXCTUjva2hWG7Hs5wijCN3boPUmhXpMeaek3joDuDgmnTQMtJxD4UrZ3rNBGc99fVamx6q5JFXkAvqpvNm",
  "key12": "5HTY8cJA2oSdo6MHsEzkM9Vn9FiNLHVSvnidArYeioVDLN6KPg71GQZNGrd4aq8umTpkC1A7uA2dx88EAuqXUh3U",
  "key13": "2GZ4um7yCfEZLaaxA51fYvYSZb4EXwheAjqYyeAJ6Ko92y9CFTp2zYEFqtbZErqLmvsbgEkZgFEsFEQR1KxVybhy",
  "key14": "5uUFRZMbFmJ9Q1FWVXV2EoWNsTHjCRYgLLcbs5q7jEexb9QXunEy47ot2M8yLt8QrfcCSGLFxucvt8KhWUeQ8Xzn",
  "key15": "5rheFHmPzqpTqshQFvE1Pokq1RUZ5gA6ZLzr1r6qP3nVPQTzoawrsxRmHHqznaTX1VcoSWyexL35x7HPFJQfBk9x",
  "key16": "3sxScj3kzkW5Puj9yVKmajDuwDBPuqzrU4EpJqCwDgaFPMGt1PLLCSpgaBnxYH563MWFMWHmARXT9bAa2ojRX7Lc",
  "key17": "jWohxyAr9mQZiF2ZEvL7GqVV7WGucvMBDvn3nqf4Vz4usDXnRUDGzH9Hbw1QshJjEMTtc9sDUk6tnpuLWbHtCuw",
  "key18": "2muPMpiVNUeXq9THaHak6cpXHwLW6PxF5Qh3AbqbN88S44hiFJorqZHDE1AY5huNjv2eXmmUwe1YMmC6MmWLBFnB",
  "key19": "4UBSoYrawuZKApC6N1Ny4gWMaRXAM2y2NVDa8jcXZ3LESBiMnKRdAkpxg1N2D2ke5QGc9NQ24VbXuWQEheNZunTz",
  "key20": "3afBa8c5eq4sXLbyohAknYK8YtrMecAU9VdgeuwS3TUxk6XBiQTtbfUbuk9CpnKfws5pzxY65jUQnFTMFrdFsR6h",
  "key21": "qvbj1SvMKj71wNzV6pjt7KChwnFBSipwgWUh7JMHmn5Egsabnx2Giq4MjEcKRMpKH5mnJfKBWhFuMmBCgp5ydhx",
  "key22": "2cBJxkRoJ8WcNpiWJF6ppxPBCWR3CD52jj2pxpTu3etvExWcrx3dspHN1M44Bz9CS2Hv8AhwgPtZp4LLNXU7sQEo",
  "key23": "2C2238hn98bP1LKmkvC4hQ6Wm852684K5NC2hZrLCJ1saZv3oMmCcWwFhF8e85vanTg6QXAcuCJb9mcfHUim6pEx",
  "key24": "5mgDtrjcsDLfmTjWzS36tamQV22pjTBJG2px9aQxjaqFyHP5NeUiH8as74sYbf4RsNBWDLJxeCkGsxQMoL1y4Y5m",
  "key25": "Q8hBY63W6yRp3NyrYSpHuWGQzDnvaWzAbRqE3jMPTHyjwBidGmG3YCTgqPYsPCCBSfJLuK8EaGcrXJDkCSHLmVr",
  "key26": "5L6eUJGrP2GLsixDN18NVCgiiwqqCw4mTvTDmokS1ZxGY2nBNJbQPrpT9zaEUXmDd8ai3n2XVqS2EGcZT477gaJG",
  "key27": "3iABpyvWSqQSVfMrUR1gT17HbB5MTKyGPJEzRFGA5sdUZQS6AaQ8zMjADxuSzx12Jg8QGTrPqmbvfbXur7zPa5dz",
  "key28": "vvdEHt34UbZFx8EmXG7F1Wzw94tXsERWa63TDbH1pxPSeoy58WgNPApRXFa2XgLqBEUMhxooGD3ncGXUoB8xH3n",
  "key29": "zcFHxjTXX4jznb7YmKevmXqK1HbvGy4YPw9hXZPrzb1fyRaiJU5SUTXPmqHNWUV69WXZCe69Q6N9jwCWrGCd6nF",
  "key30": "3osgpF8q7vo6Cnb8e55p5aqNNS1nfrak629eFxVrwKts9gZphfVrXYpkdzxg3T2VgRtd2bNQtZ1SNoDNQvdoDxMd",
  "key31": "3XuwRBH85s1WeF1rFr1wiSNkojrWekBNRjm2Ew6YHEcFEw5CCvPMUDjntmPnQSbb753LTBXt7PAvoLeQmM8CKbtm",
  "key32": "4NaeDSnkqTZ5d8JzFFx1pe1K1oTdnjaWPvbYscWGB4DrtjU1JWhhEYHE3JYbHZrWT23K9NWfq8cb7KKaSYLNUZRB",
  "key33": "3ZynnfdgqwuUxew3a2uzbJo378YRPogi1JHK5YzXz2XCJxEbXDkTk5Z1NLX6PotmygQGsBT9mewuNr419qz5R3Kw",
  "key34": "4M7orbFJDt8t9nQQjewC1zshQonh1hLfnXhLT8PF9ThQNtxXF5WJpYaynv2tuRx9EFgPWriKLqwWcbWxpgTj8yfF",
  "key35": "rCx4sRPZTi2SLYs38AM9Q1ZiUo3wvQjF5WpTeLmKG5L7384X6uzfMFJSUFPwzBTmNcyUTFVqQPb2fNVAHg1hJ3g",
  "key36": "5QxL5thwp1CMJgVFR833cNXXyEQ7QKoYT2283tDP2K8Ci8ZMhJtT8xhTXJzK3yQsfJba3wo3QqNwvgCQ6tkZdUV3",
  "key37": "37gNuhM562BqwHDV1X9Xkzer4hfQJbxvxY8pVPvFUMj9TcL7Q4bwPV5Xu9DeE3ciUdoS1GGRXJekigU5bmoQ9uZ3",
  "key38": "5irYQuk5GvGF769EMa6D7sa6CA2ii4UzMJz39hWXeydkYoCoXeSrfgHy78bVz4VpaNSXembVRA6nX2DFV78kzLRP",
  "key39": "4uurz13a8TzHxAMbD6nr9LX58sbfDa189WsdW8onLAzUyUmzQu1TsZgA3JdNSmssX4iBz5RwTJxFeFCpA8Z45km1",
  "key40": "23eYzYJdFe7zJaUVZSgJDNyBPdxyq7qR6wu7sYD23fKk365HksEFddAmMShUPy6ByLZKAAiVbZxsyVnsMvEtzXRT",
  "key41": "mSB3fR5Fd3UFuoXqQ8ZGwBqz6Uej6cLs61KfTaQ5fdayK9SmkASjWmk9exQg9nXF5rGSb67eLP5oEKyA58WFJi4",
  "key42": "2UWoxucKMDe3WxZpJyFcuVJeRWBdPmgJKJy3qDpttenMH2Cr2bpXnm4mNQLajSfqQmz8KeFTJQ3AVwXityy4uBdT",
  "key43": "3W4cHJkiMX4Yswi4xVLCrkbA2C1buAgjXnsHNg7NbdEEU89gBma5aBNnchEwqDofcndRJoJajYzBGawHRR9f9fhC",
  "key44": "5qxexYWsA3ERUmRcovSX5EiNsPvPteUmDGcJL1pTot4cFircCnAA9ZoTwzDpTmnToJ2unL8ufqNJQGNx5XxfTk8v"
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
