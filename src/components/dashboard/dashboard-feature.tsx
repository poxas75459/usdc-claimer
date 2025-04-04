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
    "64w5zs1vQuNH2nxTqPTvWG88G4WEAZv66zYiSDdAy36EeAP7zkhxYPaPyaaGmqQs9u2tP6WpCYssLkqPC469K7Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBVAcnT8UmoSDBcRGCiixHP3J7sPvgnGdHQTHKSqM2fHVigXtENGkNqAxU4EoxtwkhuUVJCbmPJNtHCByX2YtBR",
  "key1": "mie8zuXyy8JsmoieMiQfvkzprc9jvDhsiBRQxSVwhreh1yqYEdEyj7QX3fGnNg5YrwcNw1ZvWjKBZa1rUnyeFiz",
  "key2": "2czrKuBzomRB6yD6naXSKHnsfQJjmTtFXzN2yAnKoUKSmrTWzkQR6apMvj8KWKTzJhTETQFaBFWdoKWKyWR1yHBF",
  "key3": "32KvH72NySTdwNwyKBB5weLGUpstzLa3VEVMr5YcAaaeUqWpXi6J9JVDGrvuwpXYDYFLTLCtycDMjxyJ4K5eA4EY",
  "key4": "5Lx8jWmMLXBB84RgKsTESxNZ81v2U1hoTw6yn2vf4nCMYbJWhHeH4GjDuaoMLfQh64LhuK4Db6z4x1ytE9HDw7m1",
  "key5": "yJ6UyMpvgww5YLjTgUXTEw8Z3jM8eqqFaBZY1LKYRpAnbMUKyarDJQfGpDXLMgzcN4CzkeZhDytxUUoCabVD21j",
  "key6": "33ys3LWtWHxQzfg7sD1nFgYbu8BpJvMXnUvqR3aRC3efNwN88vXpFKLFkWT46dFJHZtuqjmD9JBUvzLk7tZstXBs",
  "key7": "3TWQMWegDjcv6CtZBpix9thrFWhPceCUpRM6RRWZC7rTMoidMWaCb6bH62YLcziUJVsFTQpJQqDrft5jFEktnNnK",
  "key8": "61vt2u7XhB8baJ7PscrVDMczUo1Pq7VP8QeGgzFVfqMBMCteoCRrGE7vnYcoyYBf3csfSsfJyJvNXCXKsbPwVGPM",
  "key9": "5q4CnqZ1m6rGcYM1PXsmLxA4r7wLVJqcZtNPJyPHj9W6ELdFpE4ZbhV7njnuSfnGxZy4ETfBAYsfGiHQjPYuwaGa",
  "key10": "2Gm1YmdkC1RMAX7j8NNstVWkRkhVoaoeYDkxaEruZyUxivs4L4Cq8zjK7gqFVskdufksLhUgatgEgPXJye8e41GA",
  "key11": "5iG8oHfvBVqDsMzpKuJxRMfqRz371EwrBBhnz5xEYWvzv6C4uudGVB4kd34pfG9Ny4hP5vjzA6YVKYKPThpdzHqY",
  "key12": "4Wj3nW9eePyEDb7S6xAfTeZyuyzZyGNtDJT9HUQG3ww7VDUqCQsgXbaBFu5Au4zd8SXtJ8RE2sDzUuYDFjdi8v23",
  "key13": "2j8cdprgHWJyqbkzcLR8ZjccdBak9BD9652yRQe4Cuxq8FU7m3URGUzfxZX45PF1ywVujLhmtYikcZ9AWt5wcCW2",
  "key14": "5srjpf82BX4N3ozxJJSvsTWfpbcHDmJJCwrDQzQcKUy4upWDyHWa9NwHMFb88yd1BDP5BefZn9RHAGjSMAHyJ1p8",
  "key15": "3XUaYXEa4R5dvHkz879pJufcM2xYCcP6gg7upoU6chMGSzkgLwsDmvJJVE7kYYwhNX5f6YkzQ1TMdFr1ar3v96eG",
  "key16": "Q2p5vcS8CTcBgKB4Zv6XjmZUfJf3ecWGqWmder1LJJVEAbhCMUpotmRTajdN1SRUiAkJ5bX7NM2oMXmUV1cdCxK",
  "key17": "2PP9PNHqafY4SbGhQ2XCjLjb4PuGTudkxzTC3atfDKdndYeg9YnEfmEzSWZUe2JRmfKdACKNoNL1gseHtGBp8yZF",
  "key18": "2qtuWumjSALKieAAoVJHfi66PoqKAumpjwGt4Vigv7NHMyHEd2tn4sDv2ERGckp7PWnavT6nywePbRmGfzbmLkNH",
  "key19": "URLjAMFkrfVUA5aEh5Kbf1JtG1umeMaKMAinmk3E2Y7Rmm7Geuh86FWcarnMLjMGYKZgLKwEZewBQ819wrF1Ghq",
  "key20": "3yysYtSECHhZfA17AjQaA1mg3audmKub4oAvcw7uAsJKNc4iMRqkEno4HeRTs85ERw96dfGgibhvyrRNxh4wKqaa",
  "key21": "3Pp9BLjxBaGUcRPLqfw1CFSyprEtm2N6T3C7ZNuUQYocUSGBgdJ9dPNoDPrv6rEGup17oJMiUyqvbVD3HH2WpiVr",
  "key22": "QHDRvMUuMGffhmyxtVd5L3jCVEoLjj4pv2EdTiryFAwvCcxBCiiYSXPHZckMUPR14JMUsN6THmY9W859CdBRJTG",
  "key23": "3NYdm5Y7fNbLKxbbJGTsysTaS8seig5zM2ktJPHoWZCJjuxbwjj1SeDGUxurRaE9xwKbhJ6MsaxbLCJ3bsoV3uQY",
  "key24": "62H6gpcveBPLE5EafVnBAgKtqf55EdhRxNoT9A1ub19R3gAYowmfnHabx71tp1X3oa8ZYuPJeK42mHmkbE7NmPjr",
  "key25": "4QQwggSerewR3RL2d4ap8EY6ykQcqQBs5FfXDAeFg9UNQ1JqRujokfBUbH5ZzghuunhGfK5ZQrYmZVLuzjDvN5jQ",
  "key26": "1L58xyNRvqAXP1mapSu7NjSETrhYgERNPt1fKedfWqRD9B4zKUBBwZ5AVSdKECkyiHi9vWq4TxVVU2PJDL7Ahr9",
  "key27": "5f3dVr3FnfMpkXpSfPqjueocXDP8jAKHnoTpv2dBH3gk7dYGomWBHHfDsM2LckYuz2KvSNYv1oBTN7bYrycL1gGg",
  "key28": "4gDPnsNGUcf1d38XTTmAr73KcxMCnLQFM9GX5RVBQqF5pUfphimNYhaiWJFF6BpsZeEvZs8JwAhnZtbiDXN4S8eT",
  "key29": "2ejDodZQJS46wF6ZjpFbAfkEyLZag2Y7wKyV2jBR42us6JJgRgVTQGdJzEcqUvPVYDqEQZhaVCzQokvREBXnJa1L",
  "key30": "3ezcCvYZeHpC7SLntg5sQ78FTf3om5T9LH1GTmiXb98C7uVsMZPFao8V3tmSGKUSfT25VgtUtNDrG2uR1Tdzcc5G",
  "key31": "2nBN9YHkwAfcnEGmX3SSETGr5esT22BtTVNw8aFqi5G6osDV4BeJYgzkS4zABAdMPsz6Log3mc4Nxy94z96CUCeK",
  "key32": "4fBtP2WAdmvbW4uWMFTbRxQp3GGi92oP2pXpSBP1fbCUJYCFVZZu2AwY25BmMbcHWf6PJij4t9gqyPMSVy72mUQy",
  "key33": "5mBwgP14Ds31XUDDAGUAsqmS2HjJ1HGY6wyWkhnje8EBqmYvemoKUM1cLNzC2h1tKV5Qjybcnutm4KoymfpFdUmh",
  "key34": "VgTDBTJSjUFsvoUTPwLV2hr6tdcmc5FakmZdobS8i3GoMf4KMGNGe3mgemhuD2J49mB9FC1wcL5faPBeGQRRGdz",
  "key35": "4KYX4jkDfrxoTj8fFaDpwLmgw6xA4mC2gy3iSpDgd4Pk1umo3VTaDjgnnFoU5EBsDG2kEwRznHN6Db5j6B9nXfJu",
  "key36": "58LH1UtHdFQ5Kgt7ZEziCaiLeP4KC7Hz97dTM7QBjyf2PnbgZ9JLpDeKBig1XXgjMfCQtyojrPzMrNw6fjhJ5GmZ",
  "key37": "4mdhvanmw91XReoSCy1ce4KXb21oHhNsXugbsVVzqQZAGvgNgaqCrvRwsbFh5CHp4VGKWHDYZKjCJws1ddr5noVH",
  "key38": "d4MrXYxkKQZGjWXwErEJE4JXYh1AAjDf5qQcT96zTodsZKKGDWTGz4V3xe4BFtZ4og35GJML9KupvppQS85pdGR",
  "key39": "2yCHkAyms9dMrH6bcHKPY6KExEo8GwTsdUcdosuowdi2JKu4WWQUxyxcLMnkGL4XFgey9UDrGHcq4oPr1y6mKjym",
  "key40": "2fEJhoYWYkRG2WRXCQqD1karBLfkq94X62XgiRjZRrrmT5htDMFWn4PZEroYfNsFoZfaMCBWxqbxnKrRkYbkxn9m",
  "key41": "4yByiYqY1NGM4KHUE8sXj9M5LB6CWM6RiHV91a4AzbUp6Y16PEoAbHje3bYmm5r9iGqiQoEkh17WzLVzaF7tonLZ",
  "key42": "3dovtkRjcPhb7yMkw72yo2ctqWYHm7D5N4rLZCNqqVXFutC5fz387DRnMgRozKuMFSGtpqV9yTbasYmXhQWksEQe",
  "key43": "WknhZ5ZEAzkFMDE7mZTPbrBtu9RAq3jgV4VsESF46bJg4GisegCL1FPxRYcZ79mry2q6vkeuSordBt7rNCgmivQ"
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
