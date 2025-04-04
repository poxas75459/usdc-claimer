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
    "3RSXxRY27PjWbg6pJ42ibHJXTwio1XY5b9Rao4YjPMb56RU6z58AyZNZvdwPLcX3VuqPYxkS4n5i9BQt5Sj5vr6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHFeBdZRgZij8XHAXaFMFKgp3u8gd6TkmReHAmH5dV4GbQGafVdDLbNnDWNdTaWRkAEvWwuvmN3ss2kWxvkv5xV",
  "key1": "2dAMoBAgn1LbfGujeaE7S8s2deURx7PJEc9KKekiwnJ7bF73fWQybG4AiSiG1vKVsGUYXit4b4yXio4rqJjAEvT",
  "key2": "pTRdDDFT4HA5viwsvA9uSFGhAGH1jXddC5KGZuBqZspu7PXUMziUXTxe454pnMhc2B5FJgKNgWap6p9R83FVy8d",
  "key3": "5gNLzExPNED8tKvvaeA82GonJHa1PSZJPuKJCaeTcpWVTsH8kvH88yBXW7zhuejQpv3CRBdBkwrc2uLLhjhRtsMM",
  "key4": "3Yh45kaQAK6PUFDJDiCm7EioQrHBePTYyrp1Y4w1m9hQcPgSQPjftzqDZhho7RsZ1QnSePFuh8k6EBL67WJC5fX6",
  "key5": "3BqtnVeeFDgx7892TiM89KadRXuEtn1gxwcmmqETt4rxKhgEnhyE774QR6RGVh4mcct1wkmLUYAKAaMeAaUxaPDy",
  "key6": "4cKHzNMk2HiJJtD2EJASKcdWVdWHvTzK8An5kWhh1nwe2eDzsbj2ieAzT2E9jMDUFkqr3vpa1NArUpPynLQAP5e7",
  "key7": "2Xq28n3FhJeEGoSJzmxqhdop5SoQYngmnYDtxKeUFGSc3mGCuL2Pa3WDnHod9WDgpmURbY87oCaGywhAqzgA7Rpo",
  "key8": "3nfmQXE5L1iR3GgPNymWyYRZd7nMV9VwqF8B19XeszvXp9DhYfptThuWT2nF3cfgy1ikYAfvjFR139LisgE553dA",
  "key9": "2CJ13VvhYwF1t64sBTjCuc3BvbF7peiQhzdiJ5SFcv7CMtrz9PaNurkaZe7Xw1D67PQr5daKUkGuHq4eYoDVcJwQ",
  "key10": "aA9akuj5h83AFHeKsDmL2UkmNnQNFKcSqUZQHD18UrNPaAr9dsG6j8opSQuCrxta4zBW4d7rKF5zF7RxiTYjwic",
  "key11": "4paGWtL6QtGcLLx1isqWqceKa9aZvYY9Yg7eECXeCxzN6ic1Zo683YTLkksF5sLbHjgst7bNkZkR68t5s7gugfR3",
  "key12": "4hokqkn5TFjPZEjDKqr6jpi1NkkeAPt57KHW28TYaw7UCQX65XHdrC1orBr7i26ZMK2E3ZuDWnvzvzB9rPdiaz6k",
  "key13": "4MN4TnQjtC3AaLyeVAza6r6H1yyNEGhEANtwpP1icJS77FDmYFxicNPARCFb9QDasqw2mUCvGxYuFpN3gSJJ5toP",
  "key14": "ABy8MmYk4mSd6JM6s2ZWePRkQP6S1mPQNVMTFxegG8QNZfrSu2qeXtwJKnAm9De2CCKCjyCAaAugudjQAKUh53o",
  "key15": "3pjuUcdbaujpj53DpNDi36kPyjAn1xQKLRHnAn3z8T3v4z9wGptYJEgJizgBtWm91LiwEfkg3toNzRKiaLA23txD",
  "key16": "4oZhRwShH6ptZTpnrCttZz7DvQcPKH67o841M2LJCQstXvsoKgA1TFqdg5CoX3EWQqekcgRoA4nZFjHRePj4LG4S",
  "key17": "5WUFcjmeL8v845gmU3KJkE2i7ff5bSfXemV9UPNkNQR5sJacmk4VepYbGWszqM8XPi8vqb4b9oyPgiGxqnkMKVU1",
  "key18": "4jjnh1SU5Cg5w3G482YFM7ikpUMkWR84xWMQPnfL9LFLdWr4dsyhF7kwUmoTe9BH72vT3C9qLZaDLGWgSDtX13j7",
  "key19": "3JEMqycWd2ZDeUuthv6jNRUVZudjeuDm8RAiDkVuqmsCvPGCY9ZNmxjPofXEWYgTyHq2CSNk5qCezL34qtsfkvNP",
  "key20": "219GL3LAdMgY1zHdfSQwZXLkiEYf29AczaAWikXsGMdryCuEpy69QC8gLU7mP6MPKui5FMemk7RTyymCyD3C2YEZ",
  "key21": "3JwJ7dJtfTSx545ngWA833vxpPiMe3eFwbQriyYos8JdCfUHaUnKyXK5KNt7PrYPwA4VfsZdpzsKc3TfpdH1TBRu",
  "key22": "zpcW8d13eNnQZMYn4eskGdo1Rmru3Ew8e5VQFgcxyKrqbWMGWgMu8g11PhZB7KWvpmEes5YTrJimPKkPZzqaGP4",
  "key23": "yXXsZwCYzFuMfq72vK7sEULGbbUEUB7LvphHFX8QNXjrQeUkXgofE9Murz4yxd1nFoTkjnuhhLkVThiwMUdsU1W",
  "key24": "279bbZMMSyD24jTevww5AGWBWyMhRmNKAdmN9wzQTHAGDFwF1AG3MpkEUnsqZ5VgNc61n4qCzUngH8iAFhz9sSGa",
  "key25": "5AHyN2FxmhVJC4aaBNAhFpnm8Q3iBnr5JYehubbDHavcGvccLGExwZTQwRduYuzvrvg4AawDtjZtgW5yDePxzhi3",
  "key26": "4iSwobU9PfcmBwjZmCZDANRpXYsuKf4iGZk8rzyDK5L4dVwP6BpSUZi6LjopnV2ueFvRsRJ1ZCzbtW6NkpeRxVkV",
  "key27": "4wgojwMZmq2eXmV3JAmZpyDQFsvzYQhH2iDdwJLqwNMFX47vEkxQjQFZi9UwRqRxQsi5n3kvwTJzy9LaXRmYxSW2",
  "key28": "Cc4kvCdhYsMUd8ZkNfeXWdKh2SfuTgdouTDtSAzH2w5yZPMD8tVuSja8M5Ssy8D9ZYKtmGXG9QgvbEG4zK3xTZE",
  "key29": "59HF88o5XXpnykKW7t1e2wSKhEtCL734yBU9qRx6cGPVgdbqPmXck9w85MykVhCtudXf4W565UYWdJd2Vr9rmqfM",
  "key30": "2zehzShTSxjSkdTtyWjeJzPUbhfx49wQey1r7gYiUgmMb5snAgaSekE2H4Eg7Jn4Vbbqq9f2s2n5DAEuHpt2DpX8",
  "key31": "4Dn5rVtvoKTVsxWWCZpVD6iDVdqJSe2SsA533GG8c3rB91BLZy6vd3QNipuztRxaNufLG8LJkbZuT5CfZquL4Nmh",
  "key32": "5cJ3Um1wpWQWSaLgYpUzEM3AeZCsJwUsAfiZ2cdZgW36YiHfZDGAnimApnJsftxc5NKqK9HFXVREGEPEDnwYUBJj",
  "key33": "55nzqC11PyJjXxng1gKDQp8BBzHQDzE3hqhupZ51LfPbFripYt7GyXQUWbikkcdqzYEcSQTZmU49Y5jk4jEHrhUj",
  "key34": "229kQLtUngh66M7f7pEHjG6iNvSY5MVyZ7XRMHvT52BWZLpsgrbQmGymuDWjNYD8yMX7QaBsePXrowV8tH85DvvB",
  "key35": "5tJfjScxzzWPMK4ftwirRpLVQmTzqpCGN2dwAjpMyNGDvhaqUknxGmo4n3LvfQZ8y3CPadhj8ACmSSgF9fBrBM4n",
  "key36": "E7cBmPjtgcQV2jtD4ophzuRUtvnDkseHjF1rJmz6bcMasUMkE57A8z3mTsGr6vdAXWYYQQHdgHMMsyoCv3W55eX",
  "key37": "3VLVG1GJT8uhTRshuUPQAAULP6qs4PX3tQGAB1yBB5NHBBgJMWxLaqbVzUvqhxqCrZSKusxYxFwKnnoWNUF6f3va"
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
