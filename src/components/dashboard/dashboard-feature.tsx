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
    "J4c6ZuYWFkyK2APNHCjGmAr9Q9vghBtVFdagiDtiQF6tZWPFQ2PzWBCd4sZvVjmPLGb1nN7FZ5ZUJcdTDz1zFWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rU89CiujK7J5ShEbQpNGT8DLCKkRjWkTHydAT59kDL2j6MpCXXFKbihRpJaa373V8D5hKyroer5D4LM5i9gRkJD",
  "key1": "44ZPFHMCkx92faFiTvtBBV1TYnUjKFj4gi4eYFavtZ6VBNAByqc88JzfNHTNHjfxPLLtHypvYB8hKRv49XH7XRqB",
  "key2": "5FJgkWc7i6coqKFiZ6YgQ3PVsQtrCeGTxRYGnsQy73sX4hQPEkgtuDLLLqYgDKXgCromXKo4XQxkYc6ywD4F8y8A",
  "key3": "5o87nk259VnBQthp8JkKxLk16UpMeUFErM4CnCpFRewKtXJ83H8G73yUA3B17qZqM8S8xtWCxnpRWMR95JbB59qv",
  "key4": "38L4YJoN8WD7bTpygTX9XnGjrHCpsJsF6pUCEdsiMTTzLgqBj9mVeyxSDthVx19pYp51VpyBHMh2gHt5FLYNjoYB",
  "key5": "4mco8hAexXbZNU6ResnGwVMvB558Cn5pw5VvGfmr9eW7ym4oD7hvzpFNc8oYUhc1AJtzQqmEaCN93xQ7K4UvLrKC",
  "key6": "qocgjg93kgeiiMMsNqvMAH66Spm5qkyT7Y2orQ4CQX3R4iNXURuUZhv1PLMt7eVw8Q5XRrgrKc2fLP7Gdzz46rE",
  "key7": "41p4qSYavNMGybJqMam2nT9LRrGkJ4Vv3Vq1W5Djyc5QeDevZE1BqizbgzPg5cwmb1bhLvpkdKWZDVXBh4jEJdoi",
  "key8": "MUzxAiHfyth8FLhQu3sFJcjJXtNqLCfkAbVMmhyeE1R7Ww6rFNoWX7E7oHz4ZNj8DQG1jft4pRWgtkMkXbXFQpy",
  "key9": "4zqVtvwxZpYzCpCuBWLjQtuN6NVrvA5v6qarPWTmrifjr5uLghGpBHCmtbTKPXcibo6QFhV3JuY6jtt6jN9NJrwK",
  "key10": "59tLK2zLcVWgvBBCwSYDUFLYwnQTDQEctAr7ygyHfRJFpJxYttstERbxfwRpi1FfYkVN4vSywQp4VSbunKW9X9Ce",
  "key11": "49ANgT1qiTHUxMB6ves3SJmLYrftfM5dfn9wE1YNSJ2Ug4jQ56eX1xmgTYfDQMvq68jP9aRbGk7NqwFYB7QgCLv3",
  "key12": "3yH4YsPNqen4ycLeFwGX59eRWLqJW3Uz4JRd5gGeT7rYyUNZorqsG2NhY6uyZGXdfPgcTLvsVK7do1j2tf5v7bGr",
  "key13": "4pj2WKe16q47aB3Q8u1i16qaytByvhmMvPiQjgSDdweUbedge6Zv4k8wXPuqR614arqiUhyaz6RGDSzGGMi3aUxK",
  "key14": "22XBksmPgJ4qr3rH7dtQ6dkiuK2VFS8CDAb52Bt5Zjo9QQogHjQ3SfKjC9yoVRifD7KqGKteBr3yQ77xcNtTyMQY",
  "key15": "4QGCLFqzg1gdNssiLJNoVG4HTUNJYFabsaaZvBgz4H7gp1Rt3awmMk1mtsUFVMw4j75yDnbxLmNdzNs4Ngkecay",
  "key16": "2V65GuiUrs6C4WsgQHEUysS1owy6jW9SBbsLxfEqL8BmdT3Jd9kjDfUzxbZeUhEbFeVUGsp5fZ3Bj6d6iQfyFmPL",
  "key17": "4Mj3wrk8HCZyP3Hryg27LvrqiQj2UUiyBCrMFW2YuwyqtVtNYjcz2LJ8njMXKi9XULjbRnDPTPuWfgnPzcpmqE3H",
  "key18": "313kk3B2m5fDnwS7WL8VPtVcvgjv4RWiYDVYL9ZkSJnniSDN1j2Sav64FiYQVP8FcFQBBoUnR3vckwJjcjszVykg",
  "key19": "2SSPoHZjcXQf8vZ7MEtouB7hKzLpJEFnjnxzX8TqLditij6jo7eLxJFpA4XNUBdcQ1baPTpxsqfBx8Ru9fUG8Uz1",
  "key20": "o1RZCsjXUSSzpnLdN1Vejzv1oBsb9H3Jg6kMzuVhDBAKKn66dDCF7bVZdB11aWmS48FZDCu7TSe4i2FXcFLMbmR",
  "key21": "2kwjrjdV7zMuvcrUXLXSMvHMNpsA93A6nBosajC1GMybDkNPUckFza4oCT8M1GjWAppSa35yowQLg1bmdtdwiAJH",
  "key22": "3p1M52a68RkDmzoXVg36z6mHU9TzEH5PVCpjkAFcmLEk9KuvBnkE2Pc3zb6nY7uMqLebW5akMFWJxeXFrSNsCPqU",
  "key23": "2SGnGwKkPpCaZeamV3e9szL3vuhz7vT6vG3hySg5qcnWsYWSTUf99PAud2VtTss8iouVcg4FFxNUZT1MnReo9Vh2",
  "key24": "3Au2CtWV7f9rhHrCcTveTCTSJyZMHRkmpizFkKZe3YTvE5d3DDbpzMR5Vihh1sxr4ZRAgSiugA6NeuFLkCppQeYc",
  "key25": "61ZvExJgG9V35Nc4dhHei8YivTNXwQoXZbxgUUdTa3mfWoKtYRCLweN2Dssij9GCTEfwJQzQVtvxDXEPAHa8zSMp",
  "key26": "63GoUHehRxbTV25XkU216rqAkqq5QXqfJXHCd1FTGv6sAN1RoWVXkFKm1BCXGKMoGoRX6sMC2CcGscEBz7QVF2h5",
  "key27": "3PCS3z7KN7BHjGVPGUxrpZLtkCUdnUSmn9vxQ1NVH6pGTUhuuuLhsyHETwjkhEpQbqBpXBDQ4qjcvKAkjtTNZknX",
  "key28": "4G7hDho2gy8GchtrQqgV1NMFm3iy8tZuWpByx98hJpFWXZLpwxZNQAyJQCro5K8LiHZ8bQmip8Xd2fjK6RSQq2Xj",
  "key29": "3nrLmFZSg7ghTcMUhDFsbCgyKfdashEb2ktngdTb6k6Mu66G4e41TU4P8iHLBKLyH3RkFf4msUU9ojnDPovaYCgB",
  "key30": "46RS57y2EAqsTzgd7hptirZpZQF2jqFBx4Pz3oa9R4WCfmhfxgzrDQJZ1ehry3Hta3RpA5NksUMB1DQht12URaEC",
  "key31": "2icKXt6EG7q8GDs1d8WSD8UmudsBucFm8uwP8MM4hAwVeD2UtgKWi31rpMVXdzHqWBKVEysJiN6zqK4nG28YjK2J",
  "key32": "2vCJdLNgdb65JMRAsH8HMrdDNc7BKBaj9rfv7GiVs6A9U36jbuDAxmG6h8hcJg8hu2SsufAeVHS5SPE9sC9R5jG",
  "key33": "2S2aLUkNywMZz3xgzrpWjd1oxNNju1WSHenbaVQ99PwqqXebnSZjHZbooZ13bj1PsEExhzAZybxDm1voJswmrozV",
  "key34": "2iE7bHFfNy4tTPvevSaAry2fGabmmoGhTjtTgjo5tdcSQkUiLU5hcVbQDR3VkpQrsdQ5jMsNmWSEZAc8wbVS3i82",
  "key35": "4xrdWiLqASHxgoSTdRVf4jhC9C9daWo2DEPnaTCN5kogy12EW1SiNTmok9B8BVJX1tmqmgcKfWZVn5pMHWuRaG4Y",
  "key36": "4KJuJym42pm3B9Zcwskic3fFJwCwNUonU9MqQTVybjJwh6LzZRWHyDmwgjoxLTeRhFJ5Jyy6SQBfNUqdwqvvVbwe",
  "key37": "5UHidKfSQFW3fxXmWVF2tbhNhD8gM5SLpG8brC8TxT4aHTF4cYEL821oLeGZqU6pi5gpxCzhgyU6eTucztpdEq1e",
  "key38": "ZcioBTaLjQbKxhTLGwizsV9v2DWfChksL9WRL8x2dn91NsnDGLGwfJFfQQn3MYtvf3iE2gXU31bUgV5Hez2KCQk",
  "key39": "NYsRAtvoVLaphFbhUBbHtryy3XswPWYPA9TRvfDgCCFE7MGj7wok16Foe1v5jRQmujF5syZNFkdJmtSTzno7CuR"
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
