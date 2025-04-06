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
    "25rz6tcZyxuSorngosvswQdKwMK6QBqxxbNJ9ARfpUnwM17B7HkobAb2RtQqt1C5nW5U8ZP9NAKhXZz2UdvHfZgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SrJTknuARcGytf4qu54ByuhF9rrmr9c7KQUxf9cVrrNzTgCCz7USGDVV5opGr1riX5Ng7BC5u618YfaYNSrFjeP",
  "key1": "5H2fq5xL88srxMkHL4jAwTaqCfyMtQ5FfZM9PbNqLgRzac8Z7WRU6uNbaEwdgu7kaB3hRDGfqnzpvJETHoQDiZKP",
  "key2": "Ch7oarTkYrXdBmiVxE185Gc3hUZLi6iHtvgsKYmsZznsb5YAwuvFvdjJQX84TCKrNLsUtXwgkEKbeQYw5eAVvry",
  "key3": "h7eNtQgb2bQ51Atgsz11R96jZiJyUTCekya9hqX5PjQr1PnUk8jeSgwqirxjZMvhf5RiyP9dSdALe35THAAe51J",
  "key4": "3mquu5wGjkjz4uKYZEs4timt4kd9WfEpTmC238QZoRD4i3qxU8UVkDK7D4k5MneXsbfU2jvLyxbHDmTbr3yZkNWd",
  "key5": "5FfvqCKzbKHuGjYnUQ3TGi43WgEPgpiDToXgS9ovjB2MdvRgXgt5avZ9Y7JZf4BNMR9zntCagB2hpM38m5Qhu2BR",
  "key6": "62aq23TFBAHpRBMBSMioSMMY1aeD5McYPF6YwKWYY4PDTCcdu2gQjkkNiAK2gfzMSGBBMjZ4vQvL8ZzXqucuaUX3",
  "key7": "3LvoJZYRSEYKpAyy6kt8J4g9tfMUBJpDUbkiHMuzj9VYcBp2NRbUUNk2ZqEpcPq8epGdrsb3k5tQCdP1dnfNAtZk",
  "key8": "65S6sUx6EKBwbyCRNVzE4i5Ggj3u1a8iAUXiR2bDC2fjadRs9zJQ8PUdQBMV96Zu5hsdja2rZsk2yQzRLbYKc5PC",
  "key9": "4h1NUvA1RLZWi6PYtnr4pt7dpQhfvnDKGFHvkBbSk59J3GwUfNqRpEQizU6Mr5Y4deeHmgx7pg4aTQG5Za7H1YxA",
  "key10": "2K84kDKqf1s7oiWfzoBMsu938Da3QGuMZzNb4b9CF8pEM1UJcrg2r17MPBAahatPdhY1Vmwx9hp6Ghy7NKaE9n5m",
  "key11": "1Rhjwdm45hnRjNKYsnsHBdkciyBAQusn6c8PsQY4BQ2g7Kh9ywtLE5gC1XNtTQoDxvZ1dBcstiwAcXz7XgwymtJ",
  "key12": "2bpa4yoKfToFEaKmPypAwpFtmyRtKLwWJirecYHQmJLkWdqh7FyzydafPnd4unsu3bcnzXiQyiJtCpPok1NazDE7",
  "key13": "5uLFz3ysfTicvRo7WhrEFqzTeeezsKN8YVQzwkv3DGbriKRWL2ApkXnTeu7ydhMDjEHpcBK78jC2QoXo1DoWx4G2",
  "key14": "3JtVgaKaASNGBrSbUw8ruSJSBUx9iwootT9wuRyzf62qMhvRuotKkVAuGJdmQ5SU6DZjKb9hqB8ajCEfcP3fYu6g",
  "key15": "3a9fSFxEZ4mC4DeJVGy7wQHq78SR2UvrGbGNJTquP9EKLW3rCdhbDn7YsP4Sj9thtr2afFD4nu6Jwu5ySmKknySY",
  "key16": "2x5D4aSokcUcqBenSdm3Yvqyo6aoayeESNUzAMy7NVcECrcQqwuG7w6WjKWSaSu79u19yGMaJNAcVgKbZtZW8k4x",
  "key17": "S5TPgsmwoZUc3Gw7svKEX5jMAtiXAXixEwhmrrSQ4BNoyYstULGTEPCdhAk9XzjTNiu3ZFVgPPGGjCqLv3QjRMa",
  "key18": "SVH2EMZQZ6ujzqGnJEYC6oDVFtS29uzLwinmeM3Za9BfguUZbB9vz337nP2pLGPGrbmQYnVwRVFYYogReWtjJ8E",
  "key19": "2M1g2yeXHNeQoXq56L6wAukebYALjQcj22S4E8U259RjzGHWtJ1NSrvTMYDS3SUheERAquMBrGa3av9cbQ27ZsF1",
  "key20": "5Uv1Drtk1Fm6F8DnxZ2HksJkLppjV9g9MJPSY8HTzwjZRnTxfrUNn3jdRWwW8pYk1qR4Qpm9LcMJL2w4u6PL54bz",
  "key21": "53dHgBTXNakDfHc5mPrdkBUUF7kJLBFjEPPfXfz1o1xs7m7oERRdVPww7r5jntnRcCw362egduuxCyMRJLdGuKwm",
  "key22": "2ri4fHVVvBGYUoFK2szS7uBM77E4FArcxfZbofB9sMTP8gLZcGq6BJarV7RJohomoupEpTAAG9rF4WAo9t3eqLbd",
  "key23": "2V7KSRGzfN3mSksc7QqiePnkCJjunhB6VvEt9LpjtB9P2Dfr1Ax2veWcyeUkKok2HaECbY4RqqzofhrCH5jJmeXS",
  "key24": "67k2iqsBB38fE3XFEbLeBM1b9PY4ioxCTEXRenFQLs5r9p92cVXt4XtnRufVUk24H4UCYHx6jetfCJkpJjgxymLQ",
  "key25": "grpjNfLpaEimosUctMjbsoeoWvX8g7ohsdsV5DaiRVYNFk9J8czctevU29ZKeaKXPTxGcx9wPnkscgHcvK191YL",
  "key26": "9PXkNGixinsSbdeWVYNKTDNAsvNnjAN1FNaB4YDctZUdBCWgw9dLihrXfRZaPo6FWwBAmfchAnJymidGJQrZs7h",
  "key27": "5xXAdFrVMJZdWnEfBgj8dNWf3Vbt14kvKnNH1FoVYpJVyUSXmWKzW9pcyQPntSxS6WcJtdpKQFgbPrjfx2jScT3u",
  "key28": "3xUthi92qoDDJoqPfqNDfqLn8xQEEahwxygYGDwwjV2GvxeznYpPsxntHrBpDgZgrMR2d9H6LmMuV1Qqc6ej492T",
  "key29": "4ZPh2sZwAEbseuT5DsJ7ZM6iyyNC3UGQWT83MvcpLuXhMwgWwetbNrVJP2u6xjuPfGgw5HmzUCaBaopxqyddML8f",
  "key30": "4apEnwK7siH4A1RhLis7vYDrqGrMmic36tMyYMKXcB6bQT4A2j6RTowBLFDeFj1rQkLBkLRbwQxGU6KMUUPnfGQF",
  "key31": "DyhkhDgR3xTGcNpEXarVhweXdzZhwo4g7ajw7ZDRSCh3ur168XjHY978BTesHTMghYnuFVGN1tajRdEdE2wmNUf",
  "key32": "JnZuVs92L8h2BfnjyP9iQqpdcFkURntnGgf6JWSXtcCAhnHZStPpChnDrvxDTNdYWuRTzorhdkWzfB79SHJzDgh",
  "key33": "fLDUtM8n2Re3GTgd72oY7YoX5pn4Hw9UJn79cQWP5CEQJrc3A8S4stLyWnSbqgPwPrBe2UbnBvAEAxtkycHaN9R",
  "key34": "2Yvg5gaYZFU6CxD8uUTsp2TAT8MDHHxCopYkf2gKUoPmuLsrCTfFRiJtvjzZBpL1g1xWAoRhJwRbVk1hNNQXRyun",
  "key35": "2qujtJGYE9f7HkaxucViyMmb1vQqMBwv3aEd8gHF3nm9tCRvVZJfXX1WvxiC85ucf6cfCsLXx2vvCFoX8potmG7R",
  "key36": "4L34Du67gNedzakvcxUz6NCdgxDUq9a2EPHPT2ujDVFBK1gRrYZ76dY2k2H6g3vjgc1ewNErGbd3pYDUWjfE4LqF",
  "key37": "52Tyw6YGYrAVtbvBwGiac7SfUYhVahaCQKN1nUbRL1emznvSbAk2qpFCKDUfhCWPuPa6D1JVNxB2QL3uZ2cpTndn",
  "key38": "3F6y4FMTbVkAYkqXFNRyhr3qG6fRqbNdoLoDdXjXqGJjrvw8gPEe1ewJuyFYXGhydPP66MzKPRvHFVmSRHeMFkBC",
  "key39": "62F6Bvgn4EPm5ZuFtQNYYV2hmuXJu95tXcDPjtkWAkyM9J5bCtptJNkw6XVBRRegzb347UeERJoY2i6KyJ9JYE7x",
  "key40": "3NZFaSzLfc9FTia8fQ3648nfMoJfYTuGjR7QFbBgwfwyzDDWTWhdLmCkgwRTVF84WfKUd4GzT6dizoYKVgLwcYjk",
  "key41": "5cMzmrrAY1TVN5mk8mFkgdUPtgfAyTjaqgqP5NzMz76yp49kYiA7JAoqbH7EaXFL5uybUSDp14MPet6anP5ZvVT1",
  "key42": "4VNwnRZaZhif4rynx6NSBsTdKFdPp3TMnVkwxLJ5KwjMVTdW9FS44XWDXuGSn3MeLpV2pBH1DBnc46ZWt8T58oYX",
  "key43": "2ajW2rbdhLAmfm9Rt4E5nMr3m8zn7AfCqYsaD8SULNiuW6DqVn5pRYGFbcnKMPPYibtJB7mBwxbCpERGYAc6ckW5",
  "key44": "FSSkGpbNHqpE7EEfvZUvZcWMkvNDtnBKJVYBGHfNZT3x5o4EJrZMi5cYJ2GfNCPJzXtJYo85yXsQZQmEuL2bFJ8",
  "key45": "24qMyrkHEv6bJcWGysonC1NEyyvz9JSBnLn6k3Rmv3rMP635UZ2VbexrhEwtj7bkMrip1EXwhbAdUK711YLjbWNo",
  "key46": "ZLJfPeFsqRophED4anbDLnzQpLFxqmSXyqUFvZKVAaMngoK2cSfyvjR6NYGbpDvotWDBWmhb7SERcdJfk4xZZo7",
  "key47": "5TfvUzVJbQYDeD9wUDbnuFQnCKakaZ9skjEfiUEbnS8rG16iMyraV3A6V7phAVjRXqMicqHLLfG9sDk2H5RZhRUL",
  "key48": "AF9nSfQZFc9qiBpUaBGzFVF3dNddNemBTQjrJWf34ou7a63Nc4Xprp2jt3vkRHCkhxoUUcAuLDF2SKvd3PRyHUw"
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
