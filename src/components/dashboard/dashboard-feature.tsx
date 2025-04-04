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
    "3UVTtewGmu2MGXUWMYqBcnp9ygzhMyeXprMt39atXx4DexXvdBsyg62wtXNw8wpFpjaHZGeHVCZiLERZTRX8Mrpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24t5fUrp11mB8oJPpinijC2KCQXYziZjb5DTPA57tLzbDG6z8sxhGzmeqhFJaHYDVzVdNTxSExhJk2XJD3q2PMjU",
  "key1": "4imRm1KqVwXKppyxLagKqUDJVVHFKPUZZ4YWDV4Kcrq6HCR36zpavtK912Sb1WKUT4Hhs3iQBSVHD4xc2NwmKVqQ",
  "key2": "4d3WhXpsg1ejwWwuexyJbcJD5UcvWU1BuD8x5kspBK5LL8nakmmMbGaSQQNq95eMuisoe9mZfzNdfadYM5Xf5uDt",
  "key3": "gwQ2L3tWUSQi1rE8YKkNus74XUYJFhX6ES2uZtkVntiFXqjjKdCvLKERbW5miGpVrhTme8Umw2Yt5qBx6Kea55G",
  "key4": "4TUttNkwiyMDwR6VCwU9vKytPbTFiHNz2GYLPSUsAm21FJUhd87PjfoDYhFikbRCR8wA83mRYiHwZB8sUesJgnrV",
  "key5": "3pQqdHo1aDfgxdTeadQLG6EgzrH8sh51P87opda3Rs1yba1kfWvmJUcz4ZbVKR1xxL4tGqd777wF91SnK4vgjySj",
  "key6": "3mqTUiYmN6PsBmz6cc8kY97ZwwQNDPee748u8y9XC1wTFnx67krMPtgddbaP8UFyYcFxdZ25ZLFnahaUDZaZ4UAG",
  "key7": "2vDkk4sZyWUFfGcyvdkYSj2yKRMgqReVNwhLQ1PKZJzzd3DECoiTchtugxu9knV3Jk3k7XssgsdBPRsXn7UcpKvK",
  "key8": "2FsAAFvU9HrZ3FKMqg2YAyrpHQ5Y9cHaP2eCBb7ZtK3Du7F5wtW68cmpkM6e7WdH9hYZ6xRkdLyn18XzF7My5Tfp",
  "key9": "5VhXMgVpxQudvdTpycn6QKe8nBu1WtYFk5HQr3aB15iRBZpTynDBqAH1G3ettiGwoauxZ7jYv54UTaxAcmqW9z8S",
  "key10": "2EKM2Z69oT2kcSNcoLndLvwJj1aPijm6fWwqmq9yuFutqFgpkAomQEDnNeowYee1iZJDi6EFQGsjMRRmdDSp3sK6",
  "key11": "4ZTsYxqdKrtEuMZVruKEuhQiiHbLzEaS4VMSZMNGToA26hq8L3RZTw6aAkAit6jB212i2RxjCb674cmLGtFCS7DK",
  "key12": "3mZwy1rJGJPdULejgy2ax5ShWjmEXYMxJFYgbM5zosesyiM46Z5sxfmJBEB8DvdRxmKvsCqkgeV9myxYTvDbNemE",
  "key13": "4PMP1zCzRRM9jJ1ouahq8peWpCno2racDCqx8PgtCnKXocaayxKuADfDWnEcjta1p6RfFzJ1nBTEfZhuuMHEHCFn",
  "key14": "3MPWKpXWhU2kUw7GCDcpCxG7FgkuHk2CL8iaMvkNWPdrZxxHngE4CkRwLneP4R8KqTwEYhAmZLugFJkUHWC7otVo",
  "key15": "gqDj7QGh6mxXfLXvzfVzcgxFPFL7SUcdgKJDNEEAs3ZoA6LB2mLCs4zPGBSWwHRXqGhk4GGKyQBxBz8p9mbjaxH",
  "key16": "341GW7Tum93XyDqXkvXh1RWy8ZCU6EpoY1uWymDdh7jitS6MPSjmHewJirHXvPoSeBNjQR2MDTpHPaAEAJ8nLcyj",
  "key17": "46DbxiiTBSpwhYPXB5hXbNaUf117EiWWU9S745aKfXhjmZGav4gTd52XSRv2twe7c4vUyF7NriutNRvujT7yGRxq",
  "key18": "5VLrEw6Rts3x32Sq9YDpZmcUHhhxXrYBAEQdM2LKZNd9LnqGTAsdFJ4KmkZWxcB8APL5ydwjVq1AbkL7G7ykT5hs",
  "key19": "4ZdhFNjNxPszeLvmgpJooeuYszZ4G362S4tm5WPUmjgNCXLyZ3TwvRSefWAC3pWLmj938bX72X71uPvFTpeAW4XK",
  "key20": "ot4uv3H8dQWfkcte8VaLxuBTq7kYBtKhneSMBXfemJagnebaChC31xxB2xAH8ZjxAyyMeL8R3sTRwm8ERkgha41",
  "key21": "4yCf9oyt2RBvuEaLGUowpgxFPf9pDGdNLGhqYqFzSdfMpMNY7gisNq9Z9zURbzGe9pfozA3ge3TKSLhuY8jdfYQR",
  "key22": "2Cehy2KqNwBkbDLrhi5iH3JWmuPSiJqea4KEgvQ8bkJFaXpJCdUiM8Ac9TeR2dnbjfhzVdy6A2HEht9otPMagD4m",
  "key23": "5XcQ6HJSUyqLt72x7Jpwt7inkYMH5dwzFPZCBGBSkcgAwnpTcUpuayzDWD961PEHHZV5AjwjezCAEzzYWWN4t5U9",
  "key24": "gsMBXQXhBdigyoDJxbfdmSobRUmrVdiNqJjVBcWAwmAzjhoWSeugNXZUyW8ja11NgZSRGYGwZK2eKCyVhWiuiU4",
  "key25": "5Z3QjyuW6dnspcKmQXw8HAcTFBbUiLqb2kM6m7gUA4U9J5yRsHSKr45Dj9fJ6gFdP7RjViSyK6FrFwXPokxWVGMn",
  "key26": "5XvxvYHrQcctaz1wLFN34WEXAXoELHryY575LviyaHCTX6j3deTRyVaeBbXS5iA418aA87GJvJWpsYhNbD9umn6X",
  "key27": "2debENTSwvnqdfwoLUurD4sJ58JSkz3t8qGcj79rSuf9z4STDm5px4PYJXXJcPQ9Vtoco4JE2ev6uoCyYLMmN25h",
  "key28": "5GMvkusBKGwgWz27DT4qkT5b1HG3f16hcu7YRDocKtDepyfo8q4LLLqjYL6NRqBBgxbunaAJZpE1Sm3YWU9v3xPd",
  "key29": "2pJN8ronWc9beGc5v3fhNUs34YJGb44HyLo6xyj4fK219QXKhq9zt9cXwqbsF6RYVVUuVb2Cg3PgDeT2U5Msgsud",
  "key30": "NLYAiEPg4wNLSnZUZLUkWXDwePtrGFEbFQoLWbnjzJJAFU75pfT5QCEgrUqFeoeb5o9bXemwXrLt8v8vdNQaFo5",
  "key31": "43pGXM3F1vZuQo2VXkTQ9Xvq4G34KYArSWwGwoxLQwrdtxz98ipLaCJadVkYdmjQd83S3RWS7eg7AjGyisFYK6DJ",
  "key32": "428brbjRT4AQxKwJyEaBhjj5QT6WhptAuYahNRuvUTvVeryG7pNX1RckuT4rm9K7hYdkm4ZzwhrnGAxKb1Jp4Tj2",
  "key33": "4DSegEWr2RfBGdziK5UXuqDJqVvKB7bQmLVvuFxhSFTubUzypj8rTXhLGnHWwT5ERCwuZxitpabc2xZZoAQqnVHb",
  "key34": "KTsCAHWPHodxKkbYJozjRc9EB932HNS3fJ7hBVtpxncF4gmYogVhb6c2nNfki65BkGTGxiCHS5LbYP1jLhtHt4T",
  "key35": "uCVsWgBcAfKnsZ4QiMxTMDAu6DmzfvqLtcCPzW9DKk5XHeYfsiKLzT6H4zxESwaZKn7SAGtCn7vNLvRnruYBjUy",
  "key36": "2TiFdhWCakESwrLmix1NJBxEwUtfjQ8KHXgtNTg57QHhie5zxb4cnSDbmLW5KEzSUiuFewStf3W28FTuBKiaXmi9"
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
