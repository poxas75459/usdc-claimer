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
    "WnEeGJKgxCRpUyCqzW2AcPer1okh1WoztBPbTkHgPudzL1wAis2em7GdG7UM3tVvvgbaeXNnVgMMzbWCAXRfFpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7CkZgfoZSNf9TNgehbieuXDCgnxN6RT2jqDQp8z1sXiDdmXj7SXAoGhL6bGZPbX5NvXvxv3YmHZicnJJtX4cPM",
  "key1": "4MmSJaoLG3gWUHLejB2uL9uZc94jmpTKZbVToQoWZBFh4Ay3qoqgoN64zqd2y1ncVfJAfR44A6uEweKV1jtU6YjM",
  "key2": "5mVVWZov3KbUECtqCkHJFvAf2mh95RKa9GaJQUYHWDRFrYdcokvK7AQRWURjpVFhMNRz8WchjtLYXEJUGHcVqK1V",
  "key3": "5CLS2sqhaCpsQT2qG9HAEbtsfXct6kJLaQXsCkZvTRwQPhvXUqu36Ra6v8ryBLyKeCSvUvT1TGbY6wSBdrp2YvqY",
  "key4": "Q85Fodkq569TfhX1vzjAF9AVMV4a8yXZyrEmBsvV12VyQ6qu6MuGvQJPsQbfyeF3MPCwyqXrkDnNfCHAK1Yuvoi",
  "key5": "pjKYAG77Q529wgtf2LnCcaj2hogsxpQhCwciFsbVbeKCw4ScifvALDH6MFwe8mMvMrCqKbVwXw26TN1Aox4BRr6",
  "key6": "5H3t8HwhRM8dUPdoK9aGoPm8Dp4ZSy2pZ9vYCDTxHrnKDDvQBMf9emqqyNxVhc4V7mPd9Qetc4HSFXNsAtRNrWns",
  "key7": "3YvL1KQs18EyGZvwBXSnAuiKvxzrHiJJWMvebEKDpk6de7r3SQJu48y5CkRtjmFSr7vyeUw8itsetUEEYD4PKGpz",
  "key8": "272wYqQVVWvrJ6c1d4HDFi2kuMsbM4wigTq4joNB3Bj1Ce4DBgwrEN7k5eehTraa6jCUUWbrJ9jGu4uinom94n2b",
  "key9": "4t3wSeuDoXEuodRCBPivaRHDehZUfs8PAFz5Yo32uEEZkqM12h4VgWBgFV29qJRpZag5RFNCbSSMRHmQkjT39vTx",
  "key10": "5gaP6RNTaZ9J5WsTjg7ZwAB76kac8xtDTbca7hWuKg66rh9B61SW6TUoAEmSrG1N4E72WoBiYGiS4tqBPz78XUG4",
  "key11": "3FVucdFvecr4SzDDdg8vCmkYzwWMbTnhXbB1f5MwXNzQi2fWVBbvmGa5FbGZzFLLcwfApBSTd9FdXRADt6xYdZP3",
  "key12": "SsN92tk8BXGW4qkRT3zZRbwuLMnn8MDEMeP817eVHUN6qkNbvcksLPGBPoKvHMUKjFxKgfoFhK1JKz2mvq8wwD5",
  "key13": "hSRnPP13wR8z8bGFArG2pMFNuj6aLD6Yp1hUJXyMuPNsBvMtYNpX27pNiahfkpoJmfKty31xxnbzFw7rrRrwnug",
  "key14": "3hhwTrrFcSCP14DQ8ubKBGYF1aDpzL57knRiNQbgNvqGUcr6Y1FBTfsv7X1UFrXf2GQ7UXTKkBmUDATsAgkx1Q56",
  "key15": "4znVrredpodc8UjLacwmBJpAmoAExokSUpYfFsgpLGSRn1gWfppLgTyqjLqncQwD94qDWVd4E5SJwPQUWbWmuwo9",
  "key16": "WVbpQLVeY5PT5ZnAZbHrLqer33CUbtCbEhzwQrqtRwD1JWY7pDhgurzUSTDfiyY8M6k2GrBWvkjqATArrjNv3mf",
  "key17": "4SPBhVR3kX7eatgN7Hqo24X81GoeNvxM9XnERwYpbnAQDPTaTpT9Q6MfrkUzxicoDXv2FRHr6KbxFFpA6bSLFdzL",
  "key18": "32M1LN4BjHMQBh5weRB5ouZkQB3wjZ5zEPzfRN8b1x8rM2XF9L8M4FNkQkVCTd5icRW3XRNWo9cbRxnxc3touwi3",
  "key19": "3qruW8Eat41JVvnnnzaurTYPC8fHXjyiBX1cojuzmTaTaLLJra9rwyF9E74LCayueNJU8HEGJQSwBLv8iTJ2Lga5",
  "key20": "j4qUWRmNSnw4EiAo5dA5g4AJFjVMq7EkUWxSTCp87fomzHfEzDn3SyFhS7EUfeUXnFYYR77gr3BzBfLieitM6Yk",
  "key21": "3dtyJADd39DJAJ6ntGLHUDPQy9cycz3493CxNdKyuWdvbRhzz9QnYQAqn8eZeUBNfi76CCLrtGqw2P5TdUSfJRZb",
  "key22": "45mMwV1vGmp1GMpLyaebKKqDKNH3tuLwSGUDTqtKEWCKric6nSR7EymdV4rTeZEvVrvvS6Fucxb13qxyFLBbWXh7",
  "key23": "5rHgNCrGEpWJHDmFWw183HGGbBizNwQ8N5wdpBfNGc8CWMhJ7GmuQBGkkcMmTZ7Feu9nCSTF2sGuZ2dHX1Nu1K6i",
  "key24": "5TG5z8PkGkqchhYcSUiCK8VGHX4Ew9p9EzF9UUX44uSF6uqaahgrkoWW85PzFvazv88J3gX3ZjfUPMHTqCoUrFxX",
  "key25": "3SEWdeacMTFBXHxUoF7SzRdthHZkd6znnL2HQiquPimicyiZ8YFYRpe3G8q8JFRzMSjYBAguVexeT5NwspHFHsSj",
  "key26": "45Xf2NWwwgrCWZjm4hJG4h3e6AEsv9uC4wvdq3DsLBZUpYJjvN8E5XhQLnUWnNkfjdBoZ4AaJ7PwvBoP4BXMP8LH",
  "key27": "2tAc3ie9M3gAShpFDHoxbdSE1VSKWXPzU3ZQHNg5k3aVT8SgREJAaWZDo7hkGbN1WsxjqM6nbBZFmE4YF1k7d78C",
  "key28": "2P9LKXb5nF327g9YpswKY6XBKmteXAzVjxZ7atWz8p81TBcedFGfeRM21mhnpLYV8xvFdwiCTyERozmvU9SYi1iw",
  "key29": "5Vx1bVmcavSbXoGCATnHacD3yeu5AkTQugC6JmgZEd9WCQ2tJp6L69nowpHSiQr1B7nTw9hK3JQsXgr4R84Y8hf",
  "key30": "49QQpVLVnU7yjuVoLZQL42an3PDZ1MJrVFDVH1F67QmKXsLBbKabKpC94e8pjFze9m7nUuFpJf3NhpgC9gpDcfMr",
  "key31": "5MUb4asCV7GbbvezYKVoDeuRnqDwWLxqiuSSEE54mWdQp5kKrGZvPxTRu4QM3G1Dyr5MV4yKX6xQCGzxikj9EZ3S",
  "key32": "5g4AxpXf6WHtmgnhNgwCA41UHc23eVapoqQk1q6d555YbeCGYyGWoWVGhDsJVZa6NKv2abVgvmNTGo8NhBM8Zk9A",
  "key33": "33UC3jZB6P9GfbX4bJWot5Qsi2vx3mNZjLafe7bSK5UdLb5DujSsupMUxqzKeSpju9nC4W38htVtTyQftkBd4o2w",
  "key34": "MoaXbKHwuHqtu15wo9xTBLzmYC4by41PRwCr2uXEsAfchMp14nRAmBGqZ4sE9itaCKHgXAVFFKMnwer2iTfvsQB",
  "key35": "5y1g43FsQJuwx8d7An2yfwzJs6ke75MSVz2j5EEbug4pNcQzRQbAKE8w6BNWB7JDR65KNSvjaFSV8tVmnBqtGFet",
  "key36": "58yQMukg7AgzTxegoJxVcus3gf4racRc11crUQKV9u9XEd76FETDiBd6r2WxY26gUwtgBDEcvR5MHQfPtTP1qYA9",
  "key37": "3qKFAq3xmr8nmesTeByzygq3FBcz6YdxhqudnzySur77K6hbSxsuPyQfNs4orcG3n5aAHeEd2XRTR6e22tuDdaW7",
  "key38": "2FZYHHtcjENowjubrKdRSXztueuro3asX5czFergHQ92MJt6LXcfHZaa7JqHQ2trRT4185bBpzMkw1M72Z2A1Kgt",
  "key39": "xYG5HkGnKLxDZEVL7KX3ZSHDBy3v7t4RqE5QMQxZwu9oKVqwgubaEwfWr347CcKQ3Ke5TSa79zDLisdPpe1s7F3",
  "key40": "4D6wXEJ99EeJmhefBZg3FrB4YigAjGudJYKsYMNttPmUB43m9kF3h6AYz2Jz5QeM6rhC896NczZTQwt7PLeqps9i",
  "key41": "sdcDSMhhE6MwkN837WDXXhZThPJbVbcJmX6Ao2iAp674MoiShh9psPZSF9wARWKpFGQxRx7WDsTKJ7ii1k7CWqk"
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
