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
    "3oZD2ERTHKRuhhGDBRCBBYRCGzBnUY1PD7bDAxYHD7U256iBPpiRxBg9xv4SfSruYyasFuUgLBwy3qtjyjEQGyT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMyeUtYaS8WJPDSD1U7GPMbMPGr4kbdcprUM6Z4f7Bv4G29vLMQesdQrULrKnXSKE12Cv2sECzLsxW9xrmwKttA",
  "key1": "47rD7LEssZ2wsvYRrB9VoUhh3L3uinPd6aXaHirKiAwax2kyy8PF7UntrTcenBbxpC11gWqmppfRdgSm3z4hcuF2",
  "key2": "3DR7kzY99S76sfgXozhbi4Fpn5zrQoxZNYM1f1Y1FFGUB8wUERtv1JDoFNs3YhM4e5dboQbDZzSfmNcqgq7UWijz",
  "key3": "2Q5xYRvW34uHiGtMKXvsdqYKcSMMxTrHdPPcrgayTXyQXfUAB48V8a3iSttApGhc1NgF7RyfqrodX9298fiEEmrd",
  "key4": "5bU69n5xyN2neG67bvVhgZBWEZx8g9NC8bTEQXjZgok49rNj6fKgtriM4JZs1KdNbk3Ag7kBsFrvahKVCBEKE54S",
  "key5": "5rEiAX5wfLe2csAsFc8F4Kvjs5DY9cLSKGAWik1TwjVCbSfd7CYut7Nz9i5WGmvHZBD2VNENMMDiQxoKVYc5njUY",
  "key6": "2ar6AWxj4YEcWN1uARhXR9J9tKcjfJwPiZErBK97x6HUCaLrkzaHk7SR2v82ZqpXwnEEUBnhddVbFzaLyZNLzB9L",
  "key7": "2KLDfKu16jQDxALKjuYu5kiJ2tURbKqLBGRmWqmeHpfwTcDEYyC9TtajRn7pJarQLuqNJiT1kJiJtjVUmCswssC7",
  "key8": "5EYQfLfhKR62PrpdX5bsYMEjRnqpD3kz7pJJiGYdwYcQF9ZtNnAmJRZH3GMLKRdk17hSRFCtxqmCgormqc4bXXo3",
  "key9": "3BV24wuozHKhTmnjFKsu7scCoSSM1CfFJcGt8Zysvttc2vgmiagwProG71ouiLkQFx3YCHqAUp4cm3mSpJ7Rx9N8",
  "key10": "2sRdSsiuy4yAEX8cnobEWphA7iVdhhTMnmSMNvnCP6EsCP6DEQKdgqHmrUcsdfF1vn9iMPwqqzF4ZHRizzbj5MBS",
  "key11": "2BYGk8NJiVkhmgW6mefhM31131WRVQZUiHN24VzDgvhTLLZMxaP68WU22iZKAUkecyjhbyHC6ENb1aKeaCx5bDYA",
  "key12": "27NRYWitazQPUUqHD3qESPcCXa4z7MNpA4dweaHTiYMYxUNUUeyHESTT2YWhu9xsByCT6sBMAfbSxpPrPi3yfnSu",
  "key13": "TsrtHdcLRUveL16rN4Fs5Uw9ravhhHqNjzksBPiFmhqQkt1yQbkRfdjD1LCX1w41W6eKAxEfrTUKDYHmoicRKRp",
  "key14": "2cY24YFU2Qf18yJJqjGwMejs8S2wQPAToYCwCRS4ErJF6YfTppoCh4S8ZzYKtrsVq3sAGYq6YEGRSq4Njovpoisv",
  "key15": "3jZGm36Zx5BKyKoauTdW5JUBdaz8RfX6mDYTb6ikxYu572weNW19Nv7fUoEyZGcu11kQPEPMpMZNArD52EuzjCZ1",
  "key16": "4tzfS38uZcFPxJcnugUtv7naiVuwMVs4AkKKe2e7xywahvvgPWJhBzuwHoXUTKcrrsiLn8WDxyTCkPiaJx99K7dn",
  "key17": "5BPz84dVWhnNF722MUA4AeLtCHoiQiLdKqLu9jUGAHDC1p2x7CtZf96HwQ8DrCcPCRFAaEKswvcCEW7jtvWfvKPb",
  "key18": "43bDCnnL6CwKDChTYsxxSW6jsdsReEKUFwhAo57uG56yxSJsBV1NCXYJ57EFJvHvDaFaP9kd4TJJwQ4iygfG4us2",
  "key19": "2Ufipt6L1bG3wipX2r2LNoJq9o5RCq5RRemjMd41h8wcf7QG3JW66MfPkZpP32gFckFx1gNoEgP8VYdq1pyAXVoD",
  "key20": "4SQUqCq1sxjFrgv9jKS67taThpKnsUhZN4eMoWAA3pqoao1Rk2i6fa5CkJ3FRU5GjUQcB8dWMMMz8AYUAXNsALsc",
  "key21": "2ZVmLvWKdsxd2GWrUFyHuAxCGwAXqefN9r1QicdxMAbSNeLsALAfVfbDBZWocRGD3aSsRGHbWG58GghCr69Cs8ZS",
  "key22": "2ppnvpdtBhmtNWMwGYJ5to328FNRfbAyHibCXHugxX9WZC8f4dk7qRRtX8ySAohuwqTiuPFmw3avMUW1G8eRiaK7",
  "key23": "gSwb949MfDyEfhGkch16kzXGd6Pd9fqEzdyi93pKUs7DRfwBxHE2371uWJyKMtNWjKqurdkkBoMrX7bnehZudDr",
  "key24": "3ZEimxPT5kumZ7J7qGvKPR1K3Vgadbpd2JTRh3yG15rYo9R6EhYiGmbmAaiHr3oM6u6cvmm9RCJstEXgpNPDovw4",
  "key25": "iHJ3dQzDCtrmkUGAcRqSjHnL8EjbqeFm6CdoYHMGYJypqCdtFTv9xQiQMUsVur291Dp6cKVVFXBpBicPQbvyGQU",
  "key26": "5jp98AtVaPHwMXR4iekinPu6ZoQe7R4BiejWWwM9k9J7yU6SZFXm25uJYYyTqSGTvzPswwwFnQQNz4cuaVutxs6z",
  "key27": "36UnkA6fh5Zo2Sq8krWy7hn2vYzNhTU45KMkXvF692FWYV31G3LdpxBC62JwwH7HmwCzXj42qJVgTjvAyFyYR7mp",
  "key28": "bwxjkF5ihCzDH4ny1o9AF3tUaZwKV3KtsDF5Lsufwu7QrzfpaCcM9eadrHFxws2JQo5fWVtNwEt5t9mAAqyy212",
  "key29": "2RT3FRXh9aYwwkQ2hEe9hL4H5sEQP9jzCdyAxsmnmKA7miazfVar93EL2Z3mLLnfFR4K7CEMeCf28TCyZbVwR8Ka",
  "key30": "qb1DJE6Cqc9BfSq3ZBiFKej5mucFHWUt18jPF68sXSscCgS1s4Adf5Vsv6EfsZvovTGjRh52cbPtKkiTTNazhRL",
  "key31": "448TvSmhnyeJjjUnoLjjeYQtrzJTEXvvrFxzVArdptLic7yxpJUzdWtCbdD4q9fKxYHsZfxfGd5CpfERVfJrWBBp",
  "key32": "28qFqQrGUUGU11P4Q2duzpSeK1i82bpxJKjEe9aRsNtYyYFMmngN61UqFoPaV86wcmyQicfQXfN9omD5zG9pWVpR",
  "key33": "43ZZZVVS9bBxQSWXPuwMZ3dddw6ps7LU5BpNJ4JfPw9f35Lv4KsRn9z35jKHr3xVSmNAzPS9RrXVSLXBY2MU83Lk",
  "key34": "4hSEE4RE3SMzHVM34ZJFEwsKinhCyPzvZfry6ox9T4EXV4nNHmFr8kVcaoreCj4AZnD7yAMhiXynMFo4x7LYwY8d",
  "key35": "4NTRZDLA2wWymttTYVxcvCu2oTsPsdrv11NBb2mWWBr92XmT2BSvv1fenS81DnaccFkydUM9GmKK3yA2Ukv1VYE1",
  "key36": "4VfZRts7q3FPYFMrVoJkCJugqMASTJ7SNoEGjBsgwxBueR7DnxAUDtFnmDeujjUgVN2PzfUpJw617iN9E6VkvRpH"
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
