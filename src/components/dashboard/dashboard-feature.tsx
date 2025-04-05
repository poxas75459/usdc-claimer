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
    "4MvWAKMGMMiahho4jEPYeoqLcSjucHhL6d2P14RS6f67vDZSWRoio6ctXUFMuL71WcWDtGdKrG7BBZ1QPS59c3hR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FhyvHBSG2rF7o7JjFPD7mnvuGjpfXR9iNJzEMn4eMMaTZrBa1mbX72UfHnU8sx6zcsSx9CNrVbP8qQRwwpvGU2o",
  "key1": "4QiHBDeWvVQBFfqBFTh884b2brtvbH2a5cDNph5ztg5cCSU94TBqMvHtnYr3TdxahBT1uPPbYQPhToH3qRZs1sR3",
  "key2": "PBVr2TEvQAnNu15n7KQvbRjVsvmocAE32anA1AT8qVuVH6q9sxuC9fJqSzE9Yw1qKaFHd6yjDhdKVYwvwkAWafE",
  "key3": "2FVmzhcyErzFTFiS5RibWpToEGzww2DwmjTs8zqSQedJ6Mou6JaeL9VrTHoHKAPDwoUVH8MnvEUPyKEipmeiwuV2",
  "key4": "u2J3zcdKe8QZ6mQTDswGXcS7LwSaAV5GkXLnpLeRrjw6A38dpnwZ7kwYxMg8eiRyKkfcHdmUzKJiKb3W3Uk68se",
  "key5": "2SgniTVmPuuXM9AAvaCsW2cHFUyR35QrZUfqmXUZDS2rq41Su5d3Jjp6FznNNUYkbYeb2agDt5WFKcWzfoMsryD6",
  "key6": "BwZo31XfHECdG6B2feM2sfSuAVBg6NHQFASx7zbKno5x8F2UiWLF93HYTE9EXzvBcXsKuXKUDhPVhjmXrbK3Efx",
  "key7": "4n1oGqiEYSRi9CjJ2SdaBfxnYAnWTqeZgv179TA53FBXQ1xa5oXuSyB77EDDE377Je9yhfXoBRaWEQEFEMUMz9AA",
  "key8": "5eJNCUv1Yejp4c9SZRBwb8Uy4wCg3Z7x5BY6LbQvJ9QQSBFEgxg6vFwsSwfAz8z67CiRG47oXrjovV4sqW8GsE6Y",
  "key9": "GjFzg9njBqdk2uEUE8CbFmG85GJ7Qfcznqm2vasS7UGHc5YAb9rDjq14Ry29pdtd7kZttoxXcWPyMeSeiFtAhA3",
  "key10": "2MfnEQEEEftZd68QduEF22C2YpVjEa7HCcnuwGopRPLrx8sHecaeh2oF5YuN8W8FwXGd8dbTu4u6XsKT8SobTLbh",
  "key11": "9TcvNaqBUjkH9tVmRh28SfG5PmbpnRg91guBqHBHomBVyaCW3ri8KmKsoy7rP2rYCZz4WRqSLojUTM1dhMRzGZa",
  "key12": "3kWr7gFVBXZrcLHbY8chz8JycNcV4Wja7dZYmLnCLCiRHurQfUaUWuLtHiqL7QstTzPTkihhA4tYaFDRak5Xedko",
  "key13": "3hh8K6nyLNYdehrhNcpZtxkRE11q8Gw8w61mrCBMqLATcYjmJMi2NYzSvCG52ZHB96DMQZ8WpRMS7wbWnBzbMug8",
  "key14": "4AvA8LRJGhmsgLfw6EedH7EGwd8CBJhSJGxAwbP5HZDvQqjq67tivxfBoK41i7t4aWdtdSRSwpFK7royTRAkYv2o",
  "key15": "2UwPMhGumEuchcC3B8sugSuXKSPyRAdEXeg6QsfSWdiNKV8ui8NtsjpDSX377XvhRFFcmtxKYqAXAvDoFjR5T1qQ",
  "key16": "2EMvmdJr81yEsmsS4NdHzbCRsN6A59RRrgyXhbzKMXr5PVw9SH1nNTpTz6LNhT4ysKyXFQ8tZPyTw4vAh8EtpGTS",
  "key17": "3qs1rcvPVpB5E9jqNNseNHW7LRp97AEfnHsnnDAJtDxx5PBBPzAVp3J71M2XG7s5F5JkjREgVLPvsdZ9hWbkUBvU",
  "key18": "1hhTD8hKPAnyu7y7SrJUqt8QhL2fFuLh6cVxb621ixUWgLwNnBaJZ5Ry7b4VZTZYCvRU9i4WGWtziKyix6eog5R",
  "key19": "WsAort4ASY3vndaHfFmMY8ZnjCxYaMDhL5BVATUJmpUUiqs6nyPmvyQhgGErjWWFktLWArAeuxMcotePZddSyLZ",
  "key20": "oMofj18xLbqEuxdGij8zPG2UZ8am29T8XqLzUqNqakgtoQ7LZX35h2hJe9odeXboPh3jfr6x16i3XSYES8C3MA8",
  "key21": "3cpL7uQgvopRY31NizzXL9RmCJfz3eaYLymwjJhyiV52KpVXD4mFdN4UD2WDm5qMfhWJtoEMianwAeDpCevXPVRv",
  "key22": "4D6WN7Vd9sTHn3EvJcW1JS1oLXMWeDrMjzNuNMey4dWa7DhiM913BPQcDCkAysh2Tz1nvaLWy49uSxXDHXbGKzRK",
  "key23": "5o6GzFdkczdbVL46hxp1yPUjEJEjJhAzRfQV3TEys19yo94fQnJYgWiywQCXRcaMUsRtZXHz4GKHFZEr2VZNWW4k",
  "key24": "3W6LLukBWkVHsfymf69NLNMbzuuKehSod1HHDvzinnquhGzavbTDMF9ekGB39MUduU6cUHV9CfpWkWvE41PdtpAu",
  "key25": "276NcMxp53m6LVaEhsfEin6f91MBFszSrvEir8jeB6kztWgWwhxQGAY43MeGR1W5k23c7WC2WMqhqkGr3LAJSJ2d",
  "key26": "4YC7rmkMBj2X3K6iDBgyG77xn1oEFRVDCQAoeq7LVcrR5zzQchs3WU3o1EhWvpLhdqqmfK5kwFKLLd911mVBn7L7",
  "key27": "4H7LPWHLXy4dib6ima5rwa4otVjh12BdZfT3bHEX1U1wuS9x7d5tfybHpwHrMex69Sc9ZnG1kjc9DQky2BnBrVhR",
  "key28": "5y2VF5AgkZjwLxRtjXpqJzFMXBBwzEKDgtVSbNXVrqNDszButSTTTNoPnJXRGAiQ2CokxthULWmXigMTXp3PM5U7",
  "key29": "584u23M7WDygjQebRneR7Vxh7gvDA8yRvjVrwryGcwpNPNCNCSijdFJ1HKGYNq4csikXR2go6w3CeZ9WXihjq5vq",
  "key30": "2GkSQB9M7QNJMZYHqfGXK6dqqw2JaQ247XXciUkAFv1XcGQ7WbZLTWwPe2rzLRQFxzzCBzWxQz8ZCBHX5VoQeQMZ",
  "key31": "5WZWpXkMmvWUeoVzCnRmKErZoJTd5a2m1XtYQ25E91MtdKo8eu456aYBCQhP8k17tVFC34xpT3JBWTySE6PH4Cgg",
  "key32": "3WR6NUbCRY5Ut6evKsaQ6Jb7RQCXFxxycHfFfACLMSsmxXSLctfT7SSvT94M4dcHmqnZhBCq7E1APncfJ8eKvVys",
  "key33": "4fVct5ukEsyDGkLqHaqfnsMH5f7zte1Guy1H3HPJWRKQ9HfcGGHjycC6VZgrhgukPSHg3ktMo7iHWBceLncGt551",
  "key34": "4iEiECqvf2GhGbxXLb6BhqKXktjFj9A1FkUii3BgFBDCPZVC1hLubcyqtAtQJLAt2Zrsd5agBCGGzit1pJAUhc8N",
  "key35": "2xHcB4h1A9HjUVjMHCMTpccaxphYA7xWtP92pwQQ8ctBC3pqWXsSMAquQtRmRXkG4jxffvzQbXidBopkteyovCFD",
  "key36": "1233DoGnFBzWV7wmYSZ2m1G8QMWukMnDoFo8nuYAWpMwEcLbmrcmStPxZp89zKNM97BXAadpSZRte5psRPTR5giD",
  "key37": "3vhNJH5oH8ycGtTT3qMrbX1etKtTXAPG2D2yXxYpMLp7Nua2iKrkAPuUqvCco2wAbkanMceMwhz6CepvXnYE6RDN",
  "key38": "MVw6Y3LFLWsKK8QoCBt34o3X7FZidNpdzvRpSaHxhNWvTjbbf45dmQUiMYox9Qk4e4BfcgYHwzJZppXCQCEPLCL",
  "key39": "3xCNwNrQD6QRcHJmphZ23d2XvMxSoKmpf75q4ZpjhYqKdMbj7tkRdrE6dgj6f7mBHsZ6dsyVKi2pz8o7z4gQjp75"
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
