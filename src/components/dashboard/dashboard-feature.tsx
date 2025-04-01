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
    "4ScD4k1vAm22kxVSqgdZCLghZgbvQk8FqsLeCooSZeo72MPXM1uHMg8QdVKJLmhBmC8zzwmbm7JoYFmuUCXar3SB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URu5enGBb8d11rZ6TyL2zzSQnE7a875baQN8ySpQcYmhd9dXnY9LmXzLqeHPsfemR3P5BXnZwEQxbRBQuaVaUEL",
  "key1": "ped3bHA2KUbWuRgDEDD5UcQxK6ZvwAGFBwHQEUSUjPcGoC3dWcAu6HuLF7WhC5gy2SzaFnKmNRstjhsRpDVdAsr",
  "key2": "3FqzESLDXpxhJNvSDxKzUEz7kAQMu83cX9e97PRwBe8yypLaLzVkf2eiS1SeNiLx7awvjqsFj9UUZ8NwUSkjPijw",
  "key3": "3TASoRUwXemHwwZAzhmiWRAtckqAVKVBD79piA2DZGRJLt3Ss1JzEPCADMW3PxngnJkheaF1wXEtQakAVR7fuGFB",
  "key4": "4Xu8qVnQ6DbSUsQbCQiz7N65xaXZK2RVvQN8yMYftPayDik3oc8kFQBGjs3gv1TpPJ8Dhj3UyLiN8JFcLGof7Fyx",
  "key5": "2cbPANexZmZtT6AAfXBdByvsfAMWaqewk5irdFc1rBWF9rPMx6GSGeNt1uYqBmkwNU59y8iJ8mbXn4JJqGb5onSU",
  "key6": "ejqi2Jf64S77u4Z2PPFPDCyxrFfxtjUEGRqjLyiicFAux2S8v41xVa4vLgj3giDNSf9P7eFEFRiavegEj7rDfZ1",
  "key7": "2Tv5oHuy52GPggQyTgnXHjqDhsgsQ9D3xaxjUhNiEe9DnGct48R9ZECzBdUhn1aKgyDyQJaudoNkJMECzwNzWBHw",
  "key8": "Fxa7mvu5jpvx8vpa2Jo7LsJCaZFsL85rj4HdfVMCF8hMsUXJu3Vf6V4wKp2mfaidJ9H8EakXv9eDBKyUp6zirrx",
  "key9": "V4Na4szugCT9r3fynSNrEoaqJyHMy4HqQjeEsNaERFcWLHVVfA46ugQWpqm9ykxPdrGDosEA14viqZQJgLkAzXA",
  "key10": "2gf7yj8jJXHP1edjzXf6oYywWqFbPcsEuaEtAhx6BxQDgtqTCdZ8NP5Z1fSQVVR5XF9Lt5zN2trTrSqnDByMjNTn",
  "key11": "WUSngAAGQGMpecJjTSGqcJeEF56JqeKEasKhniptJef1dXaetnX6gf2LbBwoX4Qrd6w2PXNShGXTJK5Gg8WgMnd",
  "key12": "2tKwmMxuLs3LGpTh7qDScocJvP4sL8Ej3b9SFXDnpWbDKdnKrkqLD2ATDyKZCfGnfYZNkwLs5rRUKVB6VL8HUrTi",
  "key13": "3euyKaZ62UWXYo7jjyhgZGJkSuoxZjk8ZCvd9Y7MDE8UTvWLg4WetTeMDvdeYQNE1Gw7xCDrnVvMzWs3EmK1s57p",
  "key14": "3FAmkF82KpALyDN1Z88XtrfYFSVJ6pADusAbLokKcKGWXpafD2GdhWw3upH9BZq6VDKNhUKggCakNvwV8XbS9SHa",
  "key15": "MSxHD2doRnd3vFCkvzYHmMzaUejgAeMqTy3eP5LfRsrQ7sp1nfGNs3cviACTe8EJ21piS1gkUTmD8h12n3nZqps",
  "key16": "4ZAuaNvaAwN8btwa2Tjmdb3Gx7eFCqTjHpKjrQ2yTVfLwtEHYBWqymQNUaGn8mVpGEr1UMVRwLTHyGoM3d3wmsH6",
  "key17": "5NYvd2tNCQuyskKXEFC3M5w1XHFXhewRUXxRUQnkvZkhVBQkYxfrwz6zwibMwPV8eTPobgZyiebDT3CrkVtBY7ex",
  "key18": "67SNZXkk7kpui3ubdN4jap9VXh3cY26B9hwHuADkQodfnDKVwbc82c6cXaH8wfeEGFt1NPjTLXGCX1og3XSKSB1p",
  "key19": "2weQpNMm7YTCTU1NfuLqqjhFsxt83Xaj6zFk2SePMsyzYRVhBRw12k6mEfHtKxpcnjm44DXpAHJJfgheV4Gr7kYx",
  "key20": "3eQbAs9FiCkWMEp4qQyrGUeDgTE4wFzrzkKBynbjocj43Md7BBdryUKGQ4hzLcxzXvyzj4qeo17p1crYdPsSfFTq",
  "key21": "JtcPkEMwPu5GiT3eecp6VYXR14nkfjpUcAcc3mscuTLFbUCkrPCGkqjLUR6S13m4dYiiokg3QVbFtLUtZw5vrzL",
  "key22": "3Wjs95UBezcr5YPqWLgCQ8F24nLManhtoN99m2fKwMMFMEu1a8JMCRNH6qffrUbEVgmjw4wqtk4DTKDvezsZz9UH",
  "key23": "551tnNQQDSmL9jn4hRZu4Nuq1CM38taoswNtwYUoysuD4i5Fa5bcgQJbMLtfLFRS1HQLwfTvtCBq4UUxpY42p5Qa",
  "key24": "4DSxtYUyejiZH2Hhcao1qjmujtFJY6UA5PoJQMMaUVjKwd73VkFmHEXhPDiBCEEnzAEkFajYJCHWrQqoMBPm97DD",
  "key25": "3C7DHn8oixGyMSsRzQaLY5Bjc9q85KNNwP3yb5T9CaxbkDMkTf22j2TwMehjpc3Mdi8guntsP24bjRoK7rwKGJEG",
  "key26": "5cTpZUfym3SrXDLuLJobLDe3WnW78L5xDs85xzhJhAWYVvWwt27hnEQZa4z1XdPLi2GoWYGLsFA3TkvHAPCtwaVD",
  "key27": "2TLtLYce7bgRTiSQWvFswU3NRLSkEwtG7LZNLoWSD1vtdpvYHmVW6p1poD3RozEXULgxyXx25DEE7ubQxxuV4ppv",
  "key28": "65AFqaEMXqeQ1pRU8FJ6z2KvisSSKX2QbvNZ5te3S3LSuULSo485fwfRFGxnvCieFpczxCpPnaGCXn5WVrWWzb8d",
  "key29": "3pAkm7LPvEwaX2PXEAECQEq9jvX8BuTZBajCMACmGyfSg32jmfe9DfU7FLsqdLfQVGzvcghm79mZsLBDz4KiTrCL",
  "key30": "1KhTw5rT8pZQBbJVW5PfUkFY4vSv6jfqDb4mmhYrNvKMzL1b8QwkwA5K8nt9Gtuv6y8VTzPmGthZ8C5sB3uy513",
  "key31": "3ay4qE81wzUrBzNMKigHM8J5kQwaQCBkN3zyKuTqEh6rTYkNVrYuJhAGkC3Wj5zEGkd1CiisoSUcHC7UN3r992pJ",
  "key32": "31iCRYfShDhoQTrTSfyQ2vakJWWLRTP5aeUoqvHGJHCqwEDqivBA8oH2hXBTCGSwqq6EvfMgthT5mGdKEKgpNxTc",
  "key33": "2DxUTaPhmDoJgWMvpNqH8kDZBEkEXygaha7XaNwAKQmA5Cme4fkh1Phky9aFNsewwPBQkRchme66zCbTneijvm5u",
  "key34": "5zrB23rnK2ZZK5pyG4UqeA2CvAwPrMmqPnPC7D4aNAd1AUKmCuaMLN71ow3mYF6R8iT4ZrSqQr7L1Fy9Ddnw2AGr",
  "key35": "2kftZrYtyQbvZhMLNNkEJJH8mNQtqvfUNysZwRuCFWJy9SFvb76Zba33kmZYAYUYY6kkH728gqbCzaNjqX8KqYy2"
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
