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
    "3ZZFdy2jLQSGczXZgKJEPQHpcyz8UHSdJhrhbvk9tUAb1cwRawkQAL1YAeEbrpH3aGiEfKtD79kgdm4tDShZATZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTtcbAWRtvoTvaC8ZLCQC5zHwiE6LPfYXrMTh6Ef2sdJQ1rfu6oa4P93f1zDoVmhqzk6Nb4m8XcyqdSmV65xdH7",
  "key1": "3yxDYmaqDaimRo37pnh2tjb6KTythQ3VaoBJMG96JJwpzUnK5vGkxUkMbC2fmqqr5wNUqLSXf4gpz1VkptibaUA6",
  "key2": "57qWyxSLaLVg8jNFMrK7tCtApHSKrGnCS6dE1muCF5fG8vb96dYKkcptDGh7Dacba7yQyEssnNyuyChXh9vioufY",
  "key3": "3YpypQ28qN67iRAyY8dUuijoqUbrZZ7By11WGoXz1ZtaBpECpruNhD4jKDoS2A9fuydEXacqdtMKY3A8Sx21MMfY",
  "key4": "3b25cLhJ7DjMtWgSZn1ZMb9GBceknibk77vUsnaJsJc3Pxx3w1E1GrGSzwxwHAhX8wV8PYxbxtXjqZhbBc8oZXpM",
  "key5": "5E8fNryoHcx5vxcaB8TrSg7CVvKNj22HhEaER3CwKhMevLAc1BibZ2vgPHvyw1chddZkRe6y8L4UEjv5HnZULsbR",
  "key6": "5Qo7fv5pZLjsLEm739iBZEAMq8Jtm4wrRbVouvMZJekbRmqhiN9E6XoDy4RZWKyiurayr4WWveNWHgnbvXncJeoJ",
  "key7": "5XpTvX5PrVVniopLxW1uh5jbPhYrNSRu9UknZoBmJRTjNr5d4vHY36K4ZpYJN6o8ZyGv7ZhJkN3FLx9B72CvfPpJ",
  "key8": "2uXB29woEnMbhLqMyCiFyPT5dqTWZFLWHDeEbXrZTENfzWdvg8AVp1tNsc61okpZwGJNzmnCoTJoYXFwnFW1pW9S",
  "key9": "kMZGiZXL6z4zxBK1VPSfwAtSe3D7d9g1avUNQ3sJo6qnwY49f7DJVpkofDFGqJhw7JrS4vbyhkhNn5RRdhhy4CK",
  "key10": "5ZayuqKofhRBSBwLbvy44Pjyhz2sE6gBx2jjSRWCoGW4igDSuv1HNQNLrSX5PcYhwRCPGSUtHWgxTpFMkdoJJ2mP",
  "key11": "39a2nmE1daym2PWhgpTg3rGB1thtzYRFxesLzwuPBk6cBPnAhQpUVp7U7Sk8AVnuh4T6abaSgYD22SPg8cVmLwJU",
  "key12": "3mP2aHdhzfHeGp32mithu6jZWMyWsqo56uu5SCQWnvQDGYbqeatFR946N2dkLwernZFSnkTLM71EQbces5KVXjAM",
  "key13": "4fhi22bkjvfJ79wxXGEudtPt8a1FxsEiEoMiVq1am4WDr3ZCuce7zEDc8XY4uF78QTfC4nVgrrUcR4idhrFyh9SL",
  "key14": "2JPwgx1YsQxxcf9yC3sxUHiQKnz3zPD23ALYhWNNeAJneWth8YpgdYbahPH9w6Pfa3nsM3iirUnm3iRVaqupxqUg",
  "key15": "4ftQizPXE6B3yhRefwYdonjRoqN3AQPR2PhpcHG1ZDRH1pqYRwDRW1krt34SbJbqS87Ao7FrXcuwPeeskdx2pq1K",
  "key16": "4K9KiR5jzKLHaABMFBKTP8yKh1uTshRkWknH7MZaAbSYMopGrVWjscVthSD9hKbQzuMMMVQFnwLVnnBN3MXjRWgm",
  "key17": "2CzNgrUaEsCXMsBt1d1PMSN9Y92yBhorMJHj1an6R8zeg9M5GVEgCvLrRbvzpaxp265bgL42ZA1uFUhZbHSx7msF",
  "key18": "yy9Uyquz3JPXH4FDW6uBWzNKsW1CPWVK2oyfrv1At9Tfrf3zoFvKw61rvvDkhkuurTK5t6uB7JRtdBNNQktSEfW",
  "key19": "aR2AadHNngtGGjyUMuakJ5vACSKEggZm6o9aGpAFdfov5CAmPMa55zb7aQ3kQYZEWiaAHvMQgLqiMtgc6PgSv9A",
  "key20": "23w2LBd1nUFrWPEbSjqUxbJxke81PkbtcUWxP1cymbCJKM3FZiRJpPTkFM5GTZdynWVJk5BjrERkdnHa4naD7nnC",
  "key21": "4iQn5WsSpkiMBkEYKG71FoALA2cfdn7hbAXMrr7nBrdWdrhjtSjmj6hSQvePh7SUCiXUEFBg68KafM9vJTyKPdxd",
  "key22": "BeXezHohuxa4PPDjNdTMX4bapVKkSZugt6oMxrG5M7odZoxyU5zEg9Cz8x6xeWEyweE6bcgfuojhQ6zuaVCVD7q",
  "key23": "3frjgozqveEdJ22za8tFTrscF8pw9GDTox3cZhM4S8tyxKEBxGXNhWPiQKi27feTf3TBLcJ7PTMbjAAAE5gc1DhE",
  "key24": "hEh28xDkUH9NTfMxFytARKcDMnr6QCjAaBRNd4VJXGSTydysPtn4XgyqoWCKbXqzaTJphcR9UUV1sHBzoreDEtb",
  "key25": "5gC1y8QJAco7CGLCxNg8mpGvsQkVR9HsWWKfXaiQsonGC3NdHcpvsYzs9ThUHSRwVa6nGK1ZwgoDLBfP8ELQ2hoC",
  "key26": "2ici7Az7xwsPWJvzokEu9ULPuZ6PybvuWhLosruA1sccp9xhCbUAmNZ9nReRmy7n7hjWUNE8PbSsx8KKariQdXuj",
  "key27": "3gRXnxq9PJGcMWmNxwpdbf11PpPb9T1WfXC3dq2Bh98aAZXAPgorHCUsKgLH7ut9tiRiXqZCo1kADYd2oGJhaass",
  "key28": "2ZDyVWymhuMP8D28d32jUjSgA3Dv8yxz7HAc8KT6s6fmon6D2eHB2fj25oyin4DUdkQtM1WgsaWYm1dnU1gBVVfe",
  "key29": "5ipgWxMP8XBAar8xTc6uEdCYpg4EAcrjPNu14C8f6gzNNZc1Po9eTZaBNGoeh43cNqwfp9ioCiP5P6LqiY81Rk1J",
  "key30": "56WrsxdftrxqounFtZfPKL13FRt2Wnyj8ewVTzB497Qfw3S8GmAVDTnE59tShrg8kQJryK8zyW3AbYbgvMzEYqeD",
  "key31": "45J2EYuBQWE3tD73j7KxhLAM9nhsDhT1LWVSzeFZRBEMQ8aaSLjndFfGzJcuLzPM3vbcUbbD7tvjYH4iL2LZetu",
  "key32": "35db9a4LWPvLp6wxKDAjgtokPW4X9Yp6V7KQDJXubQsN1b1Tgb4es83dLB4WDQrF2qiXRvQ3zw6kosSikDRBGZe6",
  "key33": "5VQMLWRpVc16K8x1KCymPTgpTWLuJALkGND72wTkVAimrwy9tSmh8D99Qu4AofTbyP2fJN6f1VacheHvZELTJ5PY",
  "key34": "3cy8Zt4Q6pKPSVV9QvpDxs1mbehs9hAbhh6gZWbhizVZv9PGURpZLWin6Xgaxzt4DoSgzihGxoMVk1y7XKUuPjbb",
  "key35": "4abK6SaWC4ipxDmQJY9DA56EEGV5Kg9eHWVGw7SkCvShecTzpG3ataYcso5LNWeZw6RVVXKyG2cQ7AGHidYqAUdR",
  "key36": "2ax6he2KqfKALH55RMbeDP8veQYELxmitSSShgVQJ8HDX3T3RYpMLftLaxhUsTU3GSLZfSJ4pL5Yp5VPYiu7MG1R",
  "key37": "4jg499AJzXsMYjagyTCnSEGkdYKALuPQZ3E9RbUaptmJ4HE1HDcc9CdTe5dSvt7ihmjwYMxLcTNdvT8jFM3UirFG",
  "key38": "QRFkzKupZ8iCNQHZxQ5iyrBusjLsmWA9YXWsrDaKi38natyYjKrSq18pB3vySRmBQRo4grraMBd2w54hHKCtAej",
  "key39": "2TxNdRqAnvBNCpqZdmsfzV2gLrTvpx9ZKtpgoYkk3nveP5simQLqRobAPaRUYYL9P7hQU1jCE6mtpftKJMYUgTm",
  "key40": "3ACW6nkGwKFTubRGPnu1t67zQpfDA8ZaHH8T7xpkWPYgnBqw1wNfhMNpFkoj6fUDQ89s9YdiCM4ZxArKHfeRfAbF",
  "key41": "5ghdnL5BXcBFdN44v8bQ4tuBbyGYiBBRs86trUNdLiQToA9LVn3zGpiSyiKPTBmX166Qde3KBsUnwWyzGeNXm7NM",
  "key42": "2tjv7s9HYRojcoGk53SASjC1cUo113Gh4R2NtSTWyrhuX7f6zGmf4TLKXiwnsLc5FpXV58UfLZjS9vmxcUWBohZ1",
  "key43": "yEnYF8KFNT7hH6fFzRMvhQ9mH2CJ4YGdpo8QtHQ4kx4uke5sZhrWyU7jR2zY2qSujWBZPTJ7yH3ECMzRqTF3zmy",
  "key44": "4vzTFGyDFZb6txgcfYgT9ENFHZGL555GFhXiQiNzznQXySgPwV6sg5aJJYRjVAoYt1M5rM6YEb7ZX5FoGW1igraV",
  "key45": "5dqAaY9BKCXLbp524UzheRtfvvGCbmsCZFXgEZTRTziTKdaNW1PNGk4rBhKQ9u9ZYMsUT7vKW4DHfoEX69cPBySZ",
  "key46": "4itH2UyxuK3kUNcxhVpp2ZnrDyBt2GYD3UkRBuNKq7E1GiC8qvbjX8pHj5hhQSy4mXWZAQ4HVgHUxvhAPzf8mnoT",
  "key47": "5Kna4jprT5KmcW8bstjS9G2bRwch2o8iUmmc9bZHZnRPBedbqL72Z4rnvXB1ig7dhKTGyNj6DTWMStzqbidJ1UEH",
  "key48": "2bkT4VWK21ypyfeUvobmFBCiv9p32M68R88sYA426aLyVxjik5csYRUveyfZDcHnHxL1XR2nXufonE3HHujMcpaa",
  "key49": "67CGUWYp5wHQyu4VC34JMVavhuioUenxsryiTDHGs3xaureHcJYwhs7Cy62vzLRZzssVxEiRRDudLoErN4i1p4LU"
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
