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
    "jmq1kkR68MuR2vhMSRq7dokRMrYyKr72mh86by9sBMuAYUyjcfirVVfA8Le4rE3s5dgjjPxE1aKr8x8dGmK1857"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duq6ubQXJPy7yCT5sPLc9wKZzjoP4aDcrZerrD6HxF7r7Naso673CCtxEiAGpMehyBM24K2gVh93BQkhnFmZwJ5",
  "key1": "2gaNNXFBLiHvJGL9VdyYicqPUNMjf9ie2M3BenPmzQW2U6a7ECSqM13ALZW37dfRti7dsn21xfNBxjNgofvSUhXf",
  "key2": "2zJVmac4hm2Hed1wma2XHjddhpEWkssbJ6WCK4455rHP84EebEvBsNeM7QJfNHSJYknemCXYSNfyRXBY13DtDDpR",
  "key3": "zyNDeQKmAnTXZwUfxLaMVKnx5GQ99EqVngugsKU3LTv2ptv2JWSoxi9qzR7yD3if8ZUzYx5AjWHByyGpcNT6dsu",
  "key4": "3DoumQVYdMpPjjksennEu29anVP2AjXaLhU4tYRq8TpVwYNHNQsFa22mmykTVRAN8KdMuVH55t1igjdXPnReQGrg",
  "key5": "2MBh5HCtbWoL5YsJG5zy5qtsWWa5kC4cob3geNwvnT8qmW2ed3pnRRkdJPUeCRaxCjbJasKYWZZVhcfE2yvvuyif",
  "key6": "2AzEWZBUzMLBqx5MeysQQ1qL5YCt25fUXtMhHpeQJ8AXvj1CAd6Ei3vcd871VGwyzrhRqKAZPhXeFe7uB9aaxJig",
  "key7": "zfzVxsbWxcUyRMJfb29oF4hqRYh65SWDWPhLyrRzvH7K5P6eaX4TNgeSXrRdrttME1rTUQKPz37hJeWo2V7L7Hc",
  "key8": "3ZQWm2LVprC4gPdQA2qRYs85kdq6hxeoSr3UNo8ACWLgASZWZuwHywgxdf68GtD6btsL4oTfEVrWrrF8m59wiCbf",
  "key9": "2ArvGLTuFE7Sy89oQaoNtm545PRZtkvXWA9boy4sYkikCH8zdSgwM7wg9AwEcbcaV7G32JXUdKxHbGecCy8kfEN6",
  "key10": "CLZhjCVhD1n6T2xtmycL5ZETEZkKgsxZprpLmQdHT5Vm6ZRwKMxPHRjHRv7hMn8LnqFs4iykBY1gbybNq1WsU5W",
  "key11": "LR3yiz1w5DenbDd3x2uUr7Sj8T8Vy4jFWwTF2GYeynpwVSrz1aUHvuRLi1xBQ3kvayC68Szf9eSCo7aZcNKWVFD",
  "key12": "57Q8NMd6tSp7MNDstan1ZCfx9216rUkSviFJx9fAAXxtJebXENFtF1oFns9z8hdt3mK8335iUxNBFDhu66DawUFM",
  "key13": "5MN6denHCxfcXRJ8GVnWDqVJHG1S8zyARBM2j1aSprydS5RbJnYRmRfSeFrCfq86GrvFPqq42BLPNQwbfM6Zj142",
  "key14": "2J6PDjNjrX1rcecWXYameSp4Rc9vH6JmfCtVV6gZparkyVBbbZjsPqs2LsNcM2XcHCvV8nfbadm4djgP99KNmqrk",
  "key15": "3zH7Kani8JC5AgtAkMsUXEDgHxRyf9NWWHQCTTA41VX815yALTPLk6dqV5PDpwhSbt9DdhhnVtf2ECvQmqfFHSGK",
  "key16": "38NKTsk6yw2ujPDuQDG4E3pzHKkMmN9Gnvji8sXGUbGSaAUJuiXWoC46qJQ1vBzx2F3KGbKu3jj6k6EzPuzs9X1N",
  "key17": "3zB6qH52wozhXB9CHsWdfLutzdukt8e6J7XxZUeHngbJ9zgqbtW4A8SjhPRcp3hWCSjGXP1ijfmJ9PS2UhjqrYVr",
  "key18": "V1uuiFedET84nSwzDFtgjsvgiHYGBrmnrerh6KNk3QqJJxsFVBGi8MdVxsdiQYgbVZbjR27W8tvehV1AwJdMxRn",
  "key19": "3W9BpU8Cofc3mckW5cTUUaCszfYCzJEzo3Q69QhNt5j9SR1DSJFKVtvV9fVA9tyh4AzD8o1dAKJEWVHNNoEdfR6",
  "key20": "4cKXt5E3pQV72eWDr7KZUZTWswux5CEmesdba4QfuVsBfz7iVpcxwB7ssyD4weABdVqkLFQHTJWDDMNWcVzUCrWa",
  "key21": "4ojJxPHJjMCqNRVEAEbH8Q3xQtCn7p6KjFif5odJTyXiGq2VQkzozZH49yYWyYdHG6h8fPJeMxro2hQGX9HdWh95",
  "key22": "5WPiJmuhhc3NrULS3EXyNsBGyH9rtTDqcLhicAMWHvZpsT54aUadeAnHKRcSnLe5ZzFA27hcDpb7vMVgEsULTR8p",
  "key23": "2DXXToE8EhLCGoLAS2CviCo5RuhvorXRnDtUi9vwEZeXVhkDgTY4fpbX3tfNDVQgzVgWt5YTKWKveU2UYSJeLXMj",
  "key24": "2fWkxdAp8U5bFXSVWhyX2MvGSrrPv16wsMJqzF1r96tsVEKPkENpsxP7cM7PjskLamBJN68B3dKhWzyK5b2mV1YB",
  "key25": "wo3RxqbcV6Zb6mX93b9sWdQ5Voxc6s9qi9qSLz2wtgzRFQoex3qRhFnQf8cnTF4UdZY16d9cwwAuMtCrpAjXNdL",
  "key26": "4yqHb39RRgPpD1t3woMBvVcRUMHaszmZrZLZhJVQ7iSYKKozB988Qx5ztt4qcBVzb3mcwJPLYWQBVSzQqgSrRnLJ",
  "key27": "51Ht4aQJdHCYA8xVMeyxLjVrLzN93UKV2i7TM8Ed5DoV97tWxR5hiB2Xb5WY8L4x12MBEoUMziVYWWhKK4L5Khb7",
  "key28": "4oF9M8aHor2NPtcVD6kQqzofjQbj29EK1mXvjLsuHQJ6D4toE4L65LGeJ8oVSAKKnUCtDsKetfV7EPVKepnuWJpA",
  "key29": "388rdPLf4hGHL4atVkZZQwkEzLK7VqWFBj9rHXsHhSoRfWdrPZbVQe2oPP9FSp2zygVTYXomyjsi3xta8cyYDEru",
  "key30": "aNgGkXCET4VgeY2frJpiAWKzpeB1yJQ1oM94zcAYd3fGcJqHPWWifXJkd6K7R2NKUgc4jzTxsHShtbLnmShKmJU",
  "key31": "3SWT5dqnEWFxVLxQCc2k4cpyYwZYwF8SZ2PMKssCMDFBPqaNaszFVaB45V6X3uvzcePCSwBoo1eFCWj6vj9mXvyN",
  "key32": "y8HfcEqSUK93jSqtCEptGvf5Egff3oiH25agL4HLrs8gqZDbN2CthRexbfC9eAgFPHmeafTKZDiWi89vHVfzbew",
  "key33": "3EJ2DhzNoJxbazAKUrkSCFBB52c7fSJW2L1t1LqYP7vfb7ZezyMCBnRQ8XtwCqtdKmhdcwaaUXTTENuf94V5koMS",
  "key34": "6ZyB1AE5zM3WXrByenr43aBoxCdsaWqxwN8RRf3kDjze7JaHR8r4A8Li7AX7gUgZf1yywmka6z3DdZvNxe7jZ8f",
  "key35": "63TmwAAs1Syxpvs4HNvMEnrXdoNuE4NS38g5pCrYN5ExHQdihvAtx9TqyJKkqzXAZx9RX9dUqzCtgrGTzPXhynQW",
  "key36": "3HywuiYerm9dDdXEzeALmB5mE3Jdt7519SpNkAHmr87LUxnLBYbVrdJKa7Y7RWJ7EakpxTZDbqfXKwkCQ2dQLuYn",
  "key37": "3v4z7RPJYrqtncYpS1fFAAbHFhwkEk8Fx3p7fXFXToCkueGmw8DMyG2uGxikcG63GDGKNx9quYLWWUZm94MWfApp",
  "key38": "5WYY99rxUQa4AFwKrWYDxhJS3QrZnM9AQJVX7sjZgvF9q7BoE1nJEDx58Ai6bHcHL7bobZJ4fsZ26rUstJ4ZP1cM",
  "key39": "YDooDtp9J1rGRnxpyNQzeG92z5JR2KTpGWivDPCZktZsEvhiwYotZXV4uL3SC21CyvgQNLxohB71DiZ1mTHnCrV",
  "key40": "wDSd625R35XTeN9qbBrj7FivsV7NqSFocJZdjHr1sAmV2Z7LXYXHFcL7eQQSERVFEWNUJnVacUh2kQjcumwzsQi",
  "key41": "2h8muPHM6NMkFD8qREg6ThpoLiM67q4pFZenFLyJf432DjNhLH9cAvtbVcEixqwoDPvLpvVMfMz1VrZ95xx3mm81",
  "key42": "3YqoDeV2KRDBnBorBCus2yPn9L9tB8BjJ85wHZhdTkoi7UcDwZA1RRnaQ5XXtSEhMxLm2nW9KdoSPSsADRhQcxsf",
  "key43": "2e8GcVpg6D6fmkm7GnZGfVDgSdDsFdRm1kQqUy36JQAUzxCYrN8WuAZqB19ChGGuQ9mnLeUEvHhPupS5As4iWmpw",
  "key44": "KUaoEG9dZ9PK7WyTSbyKHHwmYcydTpeHusBxP7HFv1R6ArfmAtQ7HiyawTJd2HTmyE9p7KsoptL7kUiRheomx7q",
  "key45": "2nBhunc3qNvUM7NdqVZGcbtQDURuAdahTRuAgHZuD7eqmxnXfUe2WQ75Xapc28bo9oumwwqoJBi6tbxgQpUEq8Fd",
  "key46": "WQ18XfmMLBdAoWtBMAJzrwftpveaYFGD6BFgg1vWf3RbAboarYysAAiUj5rJh6mZjgV8X7gNWWRKKBhr16mvR62",
  "key47": "5nWCJ2ZqwZ4acPs1s8enHeTYzbk4Fsi2xuB1WiZ5nTuUNPPi3yVLUZdPYJQ8gSU1ssP9EoP51Hxnh16niZKpEH4i",
  "key48": "3QiubUdRYXYi2omhogNr9DgUSFZfBzu2C448eTiC6WL7H8hs7y67HxsWyyKCwzfuE7RFJB5o4uj68ZEgUMqVtN22",
  "key49": "3EnXjyN8GJHXeAHeAyQSpezAfUiYhHYoKyGGYADXGaPUjiLhRA39YReS5uLSgqh2R83gYBLsu7CxNnMP6KhdihJ2"
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
