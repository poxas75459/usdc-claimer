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
    "4JDfC94GUDF4wN9pD9y5h5GcZgsoRohCFNSAw75NeNWuBmPECbtS7uG5FhN2uZiAc4KiCCKeXMrkU8a6sRDU7nRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mbj6F7qwAUvphQDk1o8a7HCYf1PcQas4EHFmdw3ENYcKHSkrMNuxg2jDHdfrP7qJWWaaSmTqssMwboPhWGE8ga9",
  "key1": "5vCnA2LTJ4oFmJxxjGwJ2BufXiGt9sdDcvvJiGxWopwjPYjayvDDAdm79SJmgxfq8KdoTfBuMVgtwhEvGoCZQRyn",
  "key2": "3j8mqDTfMsEmVpw2dMGJqDwNibcbJW9vcxrtPY8eefnv4fjvFsAz5HrCYah5PNB9TpEkZT5VY6LWutU4GJMGSiD6",
  "key3": "3yefnY7j9KqTYoFs5UPMHuk5SJYdDQfRUNX1DCva8k7viboKMakgD57GbLRcjqtWumr66MqopNstiMe6kMKsNFv8",
  "key4": "4mvF2rtzsHFbBcZcah7XKmyJYJbn5S1fLzgMTF2cwHVhDEnuuApVqbcrLG6kRs9GPqhEsVSXcZq4ygw8o8NHpAQb",
  "key5": "3Zurz8F397oXdEybCLT45MFqbpSoaBzqVtZwQ3vv3gvp7VAPoFfbooDV7F5HCB4r3zyxdSKy3B6fynUiB4dZutz5",
  "key6": "4ySDUhVDaFfJghkT5nVic2pZfabVVoTYm4zZ7DbanMLAyDHdFiFGkgYC1PHNuJdY6T8HDeoiFjaD1wgpRkrJBjK3",
  "key7": "2ePxcC11vEGZLRFjrwnLtJcpkm2PBRmcHG2VRgrM52aUqLVX8Xey3uyUcpKULyQZdaxu5G58AGxpt4UTRKna6ixE",
  "key8": "3pBxdYcnx6DojV2QBSFoaNzrz5PZoPiedgzTaAuey8v59dL2DTnHkaL28DJb59ZrCDJ8nznN6z87z6UWTtD321ux",
  "key9": "3hbUoWizuAEjyFaTpkquKuHenGGetZey4WaatFSKSCN1HGHH7eq7CVKNnAvHUVNDTod8WGiB6wUJxtGrGdqWsAoP",
  "key10": "313KyDcKqZZUCJkt4BDhEosAbbQyH7yBJiFaVYZiBpdgGRWEEMDAQuooDsThLundXr8GJ4vr7bC8Sj132M3wF5wL",
  "key11": "5t5XKaZZCvqXXvZhe2QL7AMv2EX4qzfiW4f9XgRFYPExiNZ7aK4J8wqX7kLFtwQZDZ9qHBLK6n9xR4cmsaogAgAj",
  "key12": "3cvJNjA1N7YTVpWhLHMJv6LEXbSyiETkqFsa54TK4wA9NN71izcVwn2eA5H4Z9At7FBWWCEGHkQQ8M3WUx8vHmq4",
  "key13": "4UFSb1QgnFsZ2zSFMrK19ejXJtnyBx6LKdx9zAuTw6deBRoHWcAruz8VQe81h8fHaFBN7Lb5mSicq4fh9ZyLRW3W",
  "key14": "7LrNY9yNe4T1BCtQBd85rGCjNp2sHyTqa6K7K5nCcSUUu1kjPpYPCQwYJSi8UUJfkvLkJdX42VvpjsXktG6eRG8",
  "key15": "3K937jguTHZoQUxnVsnUQLjw8CsDPxMAPP9CuoNeHYGKtfueLZpjwH2UWbR5mjbUZvfgVrvDh6ELU1FQzu64V87V",
  "key16": "XYbxQzqU2nbvfzsWKcPd83onbBr9mXoQaE8Lxq1Fnibbz3sRXrg5Jwsuznnaq7Yn5fcvMaZLixVDoWBrtxLJtiE",
  "key17": "2QDoYpJAPwDJQU9Q4eyzNgitzULSiJ5KckAiJHJa8CNjydfK5QkwZ4dJ73UqitgNFW4eJeroMfqhcgifLUFBQDTL",
  "key18": "33Zu8gXL3Y1RsThboVAsG2MjEzpCpy5MCcjzqPLYcJHn3d4kjhDStDpvGf9n7YJkdbj4kSwQx8usFr4TDy7WxHr",
  "key19": "Wqjmq6FBo2r5DaZRTVo9BVYpBxfAu9EDSAi3rHgrjMtou5MTDqeRZXfq9JBJkWAPcpSW35u5Rwa9h52rE2Vp958",
  "key20": "4z2iGBWdb8MsLyzw1Y7T6DmjthvZw8xfsfhhoazydehSVczGZNUAZimXRdBgdxoAMZTXtWgqVrCZsBeaRcdtXip5",
  "key21": "3V41tyu8cavb5x7zphW4Db1NeLvzLtMcaQJdHrmwP39Cs6aQ7TXCRFbu8EUAt2JpgqCSZ2KdiLWAoRhc5wKCEgRX",
  "key22": "5jLY2Xjmdz4fwKLJ5qaT4w4PqJdjmd59uai7kDrG9WuJJogFFPr6CB4AzaKVXjL2uvjPP27Vt7dP1m2mQBeHFJqo",
  "key23": "5XrBbNS4WYxoPTCa6ZBFCoXecPEU9iDXLZyHyY9FBzRxUbni9XrSwFbuAu7XJFiqRLkuWMTwHhbKhEkQpKssC6yX",
  "key24": "2LFvhFLQFLx4QU7hM2f54H9cJWVb2dk1h6tRcJGjFuZMefQAwK8jmBHs6BHYNU2DtMjnTqQyR4XToeegBk1ZUMfP",
  "key25": "5MahPcjS3c8JmCCNXJijTF2nCDrj6b7VaziuDEiHXAywRD32AHzseFJE3vHiW3EkqeX9eCMeDSefUyycgDJkrBpV",
  "key26": "8YsP1mRDz41rctbKFbNcfMMj4CkkPtz7apifksk1cSTQ4NZBhw8hnF4BD8yBcYAzkR1BSsdRFjmo29vREs7jJ2F",
  "key27": "51rfrNBQ1yyp4dHdzwxVPfMW52yBJUijhiYH489DGBcRdDLrruHMxUSCDS5KFNLZoSxvq68pKvhR41N7ocvUDBKz",
  "key28": "5ZKr9fHS5diQDbcwH6LAULJVZomBJiiggGDmbSkSmHCpTqtW61tRGJuq82k8aRinwd1oWJGoTw3drTUyKqXrdU7v",
  "key29": "6pdp6f13F5fn8zo8Ks4uP5QFnkiGpMDZ5BiN8RU2vokm8xmED8MJfHk3g13pxv1HkdNq9m2CALKp4xBnHjg3aBF",
  "key30": "eJMi66LhiJob1vLygEFrCnKQtJaBBXiUjwnA2WLus57vt8dQmQ2tCME5N5uttFktbZx4DjXFjXQpFqnocFMc4rZ",
  "key31": "5V8EARXphveyNVtnSnpmE1ZonnWq1p9gbCcNQHYnyuUpzT4jBmfWduRqB4ZJWX37igqYeWsigPnRnMvm61boHDt2",
  "key32": "2adW97acYzd9v1DGLTMBvf3Bqm1CdtL7U6Y3ccERo7n8G5sEP4DaG5i1zkugU6ESgsfydkVu8oXhiZhLaauw4gSM",
  "key33": "2teDEnoFmAosQpQHuXedaauxWeus2PwDVeu4LckGDEDo8x3P3zN5Vvrp9VuJpKdHaV72b1zVpRfUFeCU7VHJvtA1",
  "key34": "5X3M6d8EybEuPteQVyoQ4pBBNVmE84YeYf3RQ2a6xpmfQmBcbRNYBjPWjixbZemRCQrzWZdXqmEWyvsPLKHKiJYi",
  "key35": "R8pNLqmVHoeRFBhxAgr3AUvd9Lpc3TyP4NNSNaqgrbQoLGVshuMUD4yswYyMZRhy448H9Q5BPUo3fzebiWdU4px"
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
