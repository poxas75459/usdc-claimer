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
    "2JRqkjHHBqKqZurzYuMhjGyYgkyF2MvPoPo25o57J8V4HCECUx91367xSqBCt44wkY5qGFkwVtUynxvT42gxWNPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtgqCUoYJQWJqkQthYknr3XT9yDBvicYU5jVSEvr5xpV2h86wYfWK9Vabr8AGR3VvYghB1Lb46hRxusbEeAXu2Q",
  "key1": "3zLnab5pZobNefrYdgyi4HkrcmhSCJrgf5saAgnqnU1tomwnnPqTa7iV2f5pGU1VZ6ys16XdfczuJwVQ4W2hXpTB",
  "key2": "3rMgsZACtW863HmeZFuBykaTz9WzJFu7Z53tk3fMatafGov6cC9NF5mBKy5akny8JYrrCX6e4H1AdqM1CXaUiYUK",
  "key3": "weCqudEYV5k51LD6rm6uXiugWrb2wjXm444Ye1dcphuAgMh8huGot79z8TWnWYjJ8cWR7FjJt7ZsaDj9K7MzEXX",
  "key4": "4wkqtKFHkKZp2jf73ErpEdLha35u5baDXCLWnN1rewWns1e3RoHhnSd99eTy21tFWSDKBW9ARNGYzHxFVGRRw724",
  "key5": "AJgZm6uxDEevGj4bCfPVyD7EJwgw55yZgdDt5GBRSPLgTmhmQ1pkF2PNQCDwn5iDyXRmNKSdUi6G9g4XJkHdMUc",
  "key6": "3hFZ1njJYsWch3natwsDpvTFAfrg9pnugdUV3rCk455s63kBjvGY24Jm9cCR58hpgYo6cRjavXgm2WAZ8wz2LJyS",
  "key7": "3nvVqPqgJkYZonGQZoAdDUo1gb8zubDKscgc58iWFrz9Ug9ztM4VVCGpYi4nDHpzq7SKR4xHmT79Y5VExGRcpmq6",
  "key8": "8MdgmGSVVUdCRoNQ3FTs3LBrVbVFUTnJZceifKK5JM7fVwpgCXf5HwUoWjMapUjo6qS3eVnNu7CquTBZSeStTbi",
  "key9": "4YNbKkUx753bBWD2aQGQr2VKpjVY3CRqQL4gGgKUovVQdZmVqVe3ox2oE5Je3LwVGMcV2RqdVFQ55qQDV6MiRmhF",
  "key10": "53Y8H3VvZb942aSC8acKz4VS2MaJ9tKnq7YaegzXgDhj5arvGJJpwa3u1YbhshhsutxUZYvguksDxpnhgPgXo4bL",
  "key11": "6165Jcy7i3cUcg5gmFaJ7asDR6qJkUKKWwzb2Aj7aHyRHw9tUdTT8HW6zEvbep6d4cVvms5rjysH4jWuakUDjSyH",
  "key12": "2CTtnz4T9pfhrASdQCrqemWC2L3KVdAwGKgrhUzFAsqV2uCg1ovArqBtaNonCAUyHneUwqAxtPFe7v3HZ1NNgbKp",
  "key13": "41fm8Uv274UN9UaodYy5UfQd85bCktv1NgKBAFMhDP9igUScNt1LMgPxTgZv8PJJopjTKC9xU1DCQQtvj8XzNpxY",
  "key14": "2zBzjD1YJceRrCoKjx4GR6PW1tKsfxke8ws8KcSXZ7Rs3hP5fDm6zP9QKkbMojM3eWcHysZg2Nh3rSJBfKQnezso",
  "key15": "3n2GBWGMqPNa6S1K1D8VuvPuMYaSz8Kg5sn7nb63FTBvJng148NShsnSzPMMm7LPn3716CGgT9cBynn62zF3698g",
  "key16": "4VHCnHKwqZ2SMgwweXfLGNHZY4sU4DgGbw7CxQH9irVjRWVSYE4BhuGzWNndPVxx7EWuTBth2zBFar9rXwrtxVRy",
  "key17": "3pnZZuN1tvPA3qqZWfNwYknXWpVt1fy2CcZWrfiH9KP4dh7w2bLS4yntp8yNatYqoHFoVjpoEXooUCTwbCn6NHrQ",
  "key18": "63XAarqxbWyJteFin4H4EUM5e1fhe1JJZ6g7DNMW3KFMTdcjBmQXTgS29TojUvh6N4JsV59Jd2fT2f2cM4csBUem",
  "key19": "5pHaEwAxaBBTdUJshP5BfgC5zTboGY7sd7igQHBRkPzc9NyoiNJjwpxaJCB9Bk5omTxDgUq1rNTjJiWFNtNLYYP8",
  "key20": "597Mas3YfWG3jZn6SLKKjL5mfs1pNoUxqA3fEpukm6dGUixXDEuFEhzk1xSoqYqRmpyMqEeL8Y2sxm1DwmUcqgRo",
  "key21": "5nFAShcS3toP8wqpqtE27e3fQKLpSACxR55sumb3x9Tn2K7PZaANrmCg7vVeEW6A2MsN4kJbpbx1tBdLrpXktcvd",
  "key22": "5LVBqsDSWc3x8dVQsJ9HiGS8nxG2XAKJetmvs3jN3SahTdKmywC5TPE5h991eWYAHHpSXVWxK9LeJCLsudd1m1kK",
  "key23": "27LVLFswdYUDWaPni1VGhUbQsjWEov4aBbc5zY66tZ8ac4oVjk8YhSoJEGUux4fMFbweM465cgHdZycZVuyii83E",
  "key24": "4hTrtLPaizi3QnNXz9QEou4yEvGJ2AaV33MheUFi4kNqA6g9czKZ57mDGtPxnJTuu51ZYUTMN71E4McQ5c4t1tWK",
  "key25": "463GsQHaJ9B8i6mbvmjuNrKknvZ4Tf4imnzanVqGw19VR1Rxczbbc6jpzrJd8xYndJHQJ5oC1yhTDcL1hNg7s83x",
  "key26": "3qvRwLkvz7nu7mA7t5wyJ3wQXo6vBsBgSfnbf7VAMEycJCK8vBQHurjmnKvMhnY2n7VDUHUzRj42XW5a6Etsgd6j",
  "key27": "586JAtTKdDKLEVhuQopsinFwiU6fZcMvXXGNTogvG5ussyXamGb9ZWD9yAw5b3N7xz9io8Vete3n6gGgeL4fKmhb",
  "key28": "2PFB2wy43XiP9GpXbx1EnKZYsTnQZxeEAhcTPpdzquae6hPjN9Hfe8PJHeo7xF1hfbp7DXqt5kcphTyumCkDUJKM",
  "key29": "budYBGnQbK3pvLmrw6pDd1EBuRRsrYAZhcqYpyh7WquDnscLFUBKPDXgVaRs3AUZ66PpcVKHPnuasqZTd1L6hdr",
  "key30": "yqsP5czvPQr2hio9JoFwGWLEkmKuXF6VWDuEkzjUBDkNbcSjAidpRunmEg9bPKVz3GmsrTETcdXXxHXzCHtkLSo",
  "key31": "53DGZxUpBKwzaT3SkrParHBMS4ptuPfr8ifz6x1HXEGQMNUWW3sKn8yUCfTGejcCmAaPAR3wv8GtFfy5VbrFaYP1",
  "key32": "RxcLETWuNDecRpD8irp9gmirDtoAYUTQC9hmPmu2gMfCJPBkKfyuQBBEax1DeH9RHyRevT9icoJaXbpSZVpmyUJ",
  "key33": "ZVAoQuTB2TiS81kQcZbDie7LFT9MZCp2vo5PneNyo4fnCjWq4vauipRAFr6HqeaKGhn1ZBrSFSbJhiethBt6PTD",
  "key34": "vHMG6JwucQnczknr5Lee74DBW8aCH2BzmuAb1sv3DHSrXdQH4JzM18FqGEopfA7shxtpTqAfwupBfzPMoFq1c9X",
  "key35": "3SYCJevPcnbF6MLvKbsak4BEtN5DomcKLREj3woK6ZQ7i25UxS99bBj5BUcvz4ciV5ZKQHzXp43Tw1ya5nJRjLq7",
  "key36": "3GMA6DDQ5A3a7PiaSuBLkyiA5A9tppcJSfECVpEfVycXzrhDovziWDB3rwaUK5JWDwPefshDJHz3LsVZ4Mpep2ZB",
  "key37": "2me4W1JRAnN7k3xaeLWbiBs3EjmQEeF99ec4YerJ1K7dJ8rvteawkwrHM7ASZGf5BvNYmKxtWS6wRG3bsfsQZUhA",
  "key38": "4iUXe7kNe4nCgNdCBFYoFtHHrbTkASBSj6BuCTFcFghC12NRJvudSJaFkgiXhqAPpseS8Rq7pqW5iGrnfGcbBLqd",
  "key39": "2skop1EA8VCVXAzmi3bUXsVHv8p6iHrY7BBEBQLLo9Kzd2fJF6eBTPGf7KMT97feDgFScs1wFUUmKBXYqt6St6xm",
  "key40": "5K3ZrrqZCgn6V2NikGmuWQXqXJxZaKHyiiHSmbaUVQVMA3WJy2mYtbmqZbVG6T8pvtJDXFckoCKo6PjWcb6rNed8",
  "key41": "fR3Mjc5iN9Ym6yRLJBwqa9F7LQPM1gBegVpXQmiSZ5w5s9FwNkPxwmwWw8BkWzLN9YaUrFhuzyrfE2ffn2vsbUS",
  "key42": "3KPNMn3QC4pbghSbtsZEhggyCiovBdiQ87JY6Ndt9zdpQ84PuD9AN9pRrsCKPd6Xu6G6dP8wXzErtmL5zLngWXJL",
  "key43": "4JiDXv7XLMKWQwk6NpU17ugCnBgvVhi5L27moKnwBusNJRDV9JnGvuRzXbWii5PdMujqqGorn4a44aMFU5sRgUuF",
  "key44": "5m9FtuQoS5JwJKW67gF8Ukv1e1q5xyJo3zoPj4A8CHmd3L8XMXcmns9ZuxNAZ1EKZqJkBAYTf9nSQh7zF2YKFV3j",
  "key45": "4WG6v3M8jnYzfqkrnmBz5PyZFWQe5SMt7vJWTZMSDGDRgafDtnKc35ZPFrPHvUd4iRGAWH8cHyDSKZs9UvrEpoZg",
  "key46": "nb3CjreaspgyrQpndB9aSyyVgBXEqiEYp5L5bqFpufeMQdYnR6Z8stPYW9L6sX5w3vh2k3XEUhd1SFkavb1Mtpi",
  "key47": "3U8pGnztzyLCcfa79PdEXijkMz3RKDihoMLFWhomSwdgXs48xrR2wyrVGYDUK9nDHfK3JG2U2mfC7EE73p1fzMYM",
  "key48": "5eFpihPTYWxJfYNCJ3sKfx2whJHYZXa7okmG1KCRspYXPaS5z2jzsBLQ7Q6cHQrH97pZRoRdDhgzq9Luk6TiCkfn"
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
