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
    "4kXqrrXWv6ekjLkdfVbj4qe18BRi1NehgSnH8NkKZSvAGyPMWniugxQ9YSBBnxCyLgLJBrVYJ93ibA1hvBcuNyNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnrqV91oVkakF5TZdA98mhEwMpeMmTV88G6m8YEunCjkhMYUi5SkGiUmN6DtyxJQaQ2p1EemFDzQFVo3YwqJFJf",
  "key1": "4uc2yT1uSKhVvBA3r5AqPMd9qkLgLZ7MhWSrBJ3PpNMjYfAVBXGMXmKhQiY66M1Qrd4SzcbcdsAqMVBX4DfE9Lsg",
  "key2": "ZAtu3rVsbKNuFkExBwmzx1f11dZMxx3xzPY2JoZSv7xgQu4uotcjYBigsRoQ2sdph5y2jQUZiu84bqZoYStM186",
  "key3": "4c7qCosypS1FpoqDXiSVDmZMZSXiodwK4FWfrAyDYvbMNeYmoHQ6MRFsZeGvQPqckoYqNCTdDzy429x5oQEsUQBJ",
  "key4": "enKwdoaUggiCgbYwyChMN3E7LiLfnJbHbFKQS6nRHnrdEuMXvdk2W3imJF1bevVTZ6GsPB3sqKxRNB1eSSpYhMK",
  "key5": "sYviiTVF5TSBYgGARfG471t6N6B4BWSXvrUXijpwsbN5ETRkmS26ngGyambVpgm7SmaYuaysMGa7B9tYpzi6BVn",
  "key6": "2ePEt2Ss45VGm87DW4SBot2f8HzDE27GwJQBGLQgP8SExV3yeQ3vfSKgPcquHWBLCvqUR8EkFkjvmqTtFTokR8fm",
  "key7": "2Kbvwft9YEWTaDCZy9Q4akGjyFpBj1UVsGsm91a1BFMUaaWiBpfz5uPczqzRyKuZ6kz2yFNHJAxixRScRH77ehGw",
  "key8": "3NspbSyyA1FhFsdP8Yr8DhEd2998Ys5mTptCfEMHszZKAd39UTQQ3xQzAs5ZnkPdYjDjgynmwWUn6SQEvS6evsdz",
  "key9": "66JFdysqgcARQnsjwHrKzUeUc27Th7FcXzAFzSrPftDcuNfMfFvTNgFvtVs3cidJjZ8fSAfCpUJ71A1TF88eq2QN",
  "key10": "3Y16hPZFsVhz5RFTZ2ePcojwYw5op66k75J9Nncw7eDhS9oef6PGBA999G5yNLaPe9xFLv1Gody6hB8MCDBQBJUB",
  "key11": "3CwBm17KY1fNvd9DuybAX29hXHKHZaS983DtmPNPfy6iRhtUTshsNtbhiSyFydUSVWBAUQ2JNVBqTt6iakmU3NGq",
  "key12": "2PnerBxM5n2C6UsqUJ58owdyGVkhFbTxr5SbBTQhJ7dc8LZBKgeDto67EBsGJJLwqcMtY32BGwyFvQNMnB42FXcb",
  "key13": "XTZWP9znEZxRddNfLRVfnXnyHP9UkhDEoSDJqpnkGRwFV428ts2q9kiJvohSQ2kA3g6LChKJAurHZyV4WhoKQmm",
  "key14": "4snwSacNStkqJjZQvcP82ckBysLk5gTVXL3PzTxWCVNdVDXcxkbDtvVM7zMJwZ1cvp55fV6sUDSYDbczczXESEMU",
  "key15": "4SsAeJATgG1VB6xmf3CetcrDAoi3mJCRwHSva5rXTLHnRk6XTRmVfWWNy7tfXfPbzCTuBm1ydwvfhX4Xwkme5iMr",
  "key16": "4gZZM1Nvgg29L49pVoaAvqnjqsZTtYSG5PrC8rmS1Tjf4ZCnuaUPjopEK2oAe5rVUAer2gNnLPhEAsKnXfu7P1mK",
  "key17": "CqUVwyEKkyVn3ccttHeayvwoyS7RhLuTuQUsNJKGYQeQkAuqzPNYJfrfYivi7J45zhKnbxEuBomFgFb6tiv69N4",
  "key18": "iDCGcQjcw39goJqrGRET3DKuis1cM18KCrngZy8JXstt9AGUYKo6bMpbWfZrfM8T4ZXkF7jcLewpouLkjKw8Rf7",
  "key19": "4T5X4qMefdr9adZTGZu6ne2Kx9mYG1fFQr4QnRVUP8e9NDWuEHnVK8CnV3cxsdU5nbZ2uf4rw4gZC39N3UPJqKkU",
  "key20": "ShCFNVKfGoBBFmz3xkKrp3qe4NMjDfR5me5kZwa9nZgicSAVgHGaPcewmd3xcPfnyEUTzQTbwJDQ2gwBgyXVMQe",
  "key21": "5HhHyoWouKwqucRjKmMAwo6V566XM75YtMAPTnQZHsZVpzGfoBTksQnsfjYRwh5wMCCdtEkrAFRgosn2WWASQJpS",
  "key22": "3DvoXQ4iKoybG39hviaEdUSoj9CkMJmWxRcTRzaK425NUCKMijoXkxLHuhFy7nFD6wVXCf6k5Tq4hQy7fgj7E8vF",
  "key23": "41rq6Q4nGHSGP7oBn17FcZbwrNJLALVUp7JpiJuzNPJPbYVKSNbhSyCms24wPoabWjJoT51LeyNwgX2gT9XzGreT",
  "key24": "9PpyyoqKvyNM3sz7YnjvJLCaiN68ZNcqA2TQ2HBbpyjznp11ZbgQ63w51RSdj99SbAgP4Rk1UgFms4qBBPmPidm",
  "key25": "21X6ebJ44ZSsWGQN8ZCcyCZuXjqjt9AsKV1ALtswmQjMrgaNEk1sph6LX96KWnKs2YwJcumVLH1F9Bne62qwgEXr",
  "key26": "CVT5o8yMEHcdxFw1rwaHXJbixWttHXYhhfFeuEkWR2c437XxacLo14PA4Po23fXPyxm5KZkoWzvrw7eYJkKGxAn",
  "key27": "4QKYU6nHZoJ64rALs1r5U6Esm1owxc8AX6zrnP7V5D1AEQ4KBKPNjuUz6mmRVBFMY53pdZ31mqncixbYdBXmkr9f",
  "key28": "49tEKxqHCMNx5pYNUsgMkDyTicav32dzHFkBSBTzZm37A5ZX8EmhbjV4Y537EkjrroujusjktmqSuQQNvDavMDJm",
  "key29": "44P2WLxRKRtBxhCRo91L7UnHk9nnrk3p6TpTJp87LBbTbuTvdkcFyuHwakhso5i4uXek4eUdcDiJhvay6myviL6Y",
  "key30": "38iggqn5bWGrVRSSDhqqme5zj5Hu3XcS4jQ3PwD5aS72UzaQG2Wbduqs1ZttGpkgQC2tGvYnN1XyqgkHkFqVNZ3j",
  "key31": "62uHw5ksjk3ngRdeHtu2HiBAp5WTP4cRfA57w34yv3t8jBthfaVuH8WrXsDfKdgsHFU8DEy8Ayao42wZbPJp9rhx",
  "key32": "27aeiwhPUxVYLgKDmp2AgBtbd5xfNdQyy3teT1ANM68p5BDVehytK8SByxLVRrTtX41YD4bcDhitjRFTsFyqkjwh",
  "key33": "3QWXoanuUyAWUquHnQprNSvi5SGSyeuGATAVvaAP8m4qf5DWJBgkZebNK6UrRvbchiBC8LFv8BPUZRvLcKiWJpjb",
  "key34": "5C7F8Z2x4fx6dKhPRmZJE87Wsc6S5ZehCs6pBMtc2CyRFd1CF66iJSBCdXpekhXW8dVFyPuCGMC5gA91y26Bvztx",
  "key35": "4Vejwzu7C1LGN8BSXVEX77PQSbAmABnET9miuaToGSQeCr3wYGvnB3fBRi2TdBKZRpKHgjuD9aHNc5idoPHheyWF",
  "key36": "5VJb1dgeZ5vg6xWH1jzNRGE9fadw3xwtdVygMwvpTYkUAbxm721E8ZHhPRacTqEQLRvyumkdJYfWkj8AmAW7LhgL",
  "key37": "5mbDZF6GZeUJtZvHWJK82hyFiPd4nagHteA4UDePjsZob9gPhwk9tS48K7rbujP8oCZ3kJ3j7XkDNS9H6EwQ4Rff",
  "key38": "5d6m17jbEy9gtuDyU6mnNxNKEpsZxRz64JF8TCa2RxA5rJwn7fKYbnvbpNwxvbyJ9PcqwTeWhXGSejj8tQdYcNAg",
  "key39": "3vwPNofB98H9E3qv3p1ULYWSaFwuMXwKGj97E73Cks7iw8GMEp7wvK9rz7xQpuWjqTcHfGLyCkwuBKuHHPnVf4P2"
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
