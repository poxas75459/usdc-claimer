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
    "5B8pkfeQwWDRjBPC4qFEjh6w9qy3YmjTTx62dFDojhcyrJ38cNi1A8zMJprommfYUevQrh5sMHyEV4dtnGR9W7jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wBhUnJMciFzUsM16wbuwtAyG7LseacUZecikHsvf4eKVa4uPaUU4JaJCcKRR3DjCdF3EMWx4iyXjNnPxUwhN7d",
  "key1": "4vV1deTCF2p8ow8rZyAtg1gK8cCktvX4wouQyAETjj2sPEQdQDsJedntVn6awsybpwB2Am5qNUS5iS6YBWKHfqQJ",
  "key2": "4t8F9VtnRZAni1qNMBDfy378CVMkiRQKHDB2NUuTYzy1hu5o45Rs2BEsSruPAKLPAaBday4xq3Sp58HVjjVMKCL1",
  "key3": "GbmJKMATQYC4ukBpmabVUDyszhdT8GqqKKQoP48X56XY9nKkjwWrVixCjjM2sKEDVrRCDLWogvLSnowdG7i7fB7",
  "key4": "2eZ2uG7G22FyTWzanQAQEjkQMxFcTbrjm1zS6fH7evK7qWMgzTGDtUK3Ya6LrnDwG31cxwMisZYHDbxkGvPyKm73",
  "key5": "4ykMV7GqQL1NS1nH2WF1UBqJYkvaWzsuM632Dvqn8L8rZtQD7MfB7cTm1oceFXsAovdxpymZ5FCMz45ZoB7YBS5M",
  "key6": "2ZJ8HuRuuoMDf1PhHQXxVnqrRPQUTaNutjd2Xjsu5DtAD17F1Lr2Tfz8VKjVujGooQj9FLJRoKXfwZ8mwvCBkc1a",
  "key7": "2trmyXW9CthzhFyshnk49LwAJzXFPvaojgjzpnefn4qZ6orofQabEPZFJGq8tECBNuLtC2G3xy2XTqVahPNfD2KZ",
  "key8": "55Tiyxo8ySDFVqfikdRBsLg5PB6C3wg7CMHkk725KrUFDiXZZCxsAW7VLgZ5JnDupKjmY6Lae4Ue5dRg7dsaZ3YT",
  "key9": "4dYtbqzwMKBeLCMnGFGjkosoSdAUAzouY1qwyvZ7A42vh85jCtEppGZdtf3iEtN1Y1Wbt6MCpzY7Hye6NgwnNBGh",
  "key10": "4Fa8NrneF4yPs49DcTSMRhHt1daig9vbRbNTUHyMcyFwaAc4TyyW6TWkFUsEwnVdLZdj4QwzLA9xJXsvKgiegCXe",
  "key11": "4SobHHKrgg9KbAejLJpKwYuGmBbvjCBN7eb7Pxr8vNb5zQCkjmA393XopgT5VAE312Wg6vnqtrHbjM1fKoQeMwwZ",
  "key12": "hiE6sxn1nv24m6umW9ekXYBZJQEWrxVzCSKsEPnjxK8HxDNmaW77XBpsC3PP5T4fgDq86fHynjSh1cz5FpS4Mm8",
  "key13": "4q8AixjFENw56wRkdeDN8jNAw4sUGQ1qktwxwNPWY711PxyX7teE2UpycNUViBUn28YaTGEPnPZuXyASQ3uBMFsb",
  "key14": "5EtoKTUEKeCBiCuEgmbCvHuVUyoKErBtLucbKkLLrvBUSMMr5zZoQTk7NtrS6FkamwWZhyHxVg357KdTbB2adHqw",
  "key15": "37SokTSTjGkzQ6cZxVUom9b4iFThaHsnqqV8n58GdYJfFyHgXvLeCntt1Xd5ViFpGupAsydFp5omBd3g7sWbeBVx",
  "key16": "3GdNKQVBU32WeyuMucZjHRbNujTV9A5GbgHVyEnprLYpbmc2QCRsfLTdXwZdadjADp8bJkQvvE36KC4yDdMpm3rS",
  "key17": "4wNexWSAeUjFNMRmQeqZinBUXZTRVNyitWXBkk8WxjC6g1S2krgoBzQKqfBUaoCx16YVYnu2RKw3FxT8rvvDuCcx",
  "key18": "bMYGWjDehKwBHKn2ZFEDrwZZQrcnmDJLcfMWxN89AwL8jAM7LpvjSyUkhBAMwt5W3xADG2rTrXjQgqYvcwqWuGK",
  "key19": "URzYcdkjDzcopSnkFE7EEf9ap3GVHGDaVkSV85192r5yGvaAeXpK73dbtcnB2CW8CzL8vNPeyKMSqyj1wcq75u4",
  "key20": "2UmXzL8qjgK4QqCgQiLBb8q4KGJtfztMB36AhLkMSDiumSZ7pXgavwJaK6XmrETfopm4rfRUY4C7Rsmh3kiWK9JJ",
  "key21": "1971oqED5117WQv9e7T7g4LN12pPzSx4xdQiPsXTq3PfCZrWcZx11zBELgvnUDVcNpP1UWoQQkWtkUxSiqd2Fzv",
  "key22": "NbEYPiPPU9AjRoBmjUU8DY7cDwD3BPM6W7Aa2cTYQ92jTcTfK9bDqFWUD2VWLUEjisHzMrCq9pXuVPukvxUjeVT",
  "key23": "4ksfc8XnR3ygQKFMXh3ut8NGafcP5Y1BdEviKKbveFkJzAUQ8JjQxiLZQR8oTus3ETEjWtDbV5todTwpCZth7hYH",
  "key24": "3JTFSeq8GF1mfp8iQQaDc19aisdn89458JaJsbbBjvjyBeRgr5BYRPy9La4Wc873rd3apJTpLuWTXBEBYvpgHyE9",
  "key25": "2ik8yAmG27L3noBwpfNf1SJeHuxSGqQ7738pjs6SPKqdmiEqx4AY98WgjeHMAuZMAfWVrd1kEedRf4w85Mr432iM",
  "key26": "2so1Qcc6pXRF9NLxTQxWS8rGGfZ4qupb1y9AArojFewgi3UDg7kqww3ZTyzCUZB5sP4jSbKS3bAGfAWfiPCDe8YD",
  "key27": "3GCsuiWdhbwZPQBwsXZ3U3viLfbT4GiYtK4HSNvx2vmb5uMVd2FyoQaT76UtLCfoyBKJ5pMLugfJtUFybSXgZxY5",
  "key28": "2R9LFkteW82yL134HC7hRHrgMZ1ewqozCEZAVCa4TwQbREY26uRAVRMC2H2GSzM9fphC4sZpZNRAYFiM9MpwMPpU",
  "key29": "UHZAHahCjqPywquQfaDrCPTmjUUPd9L7fMbo5fVLnSmeMvCp621rHJAf363L6joRgZbaRwobj55FFvULENP5pzL",
  "key30": "3ZwQzsDjh9YMLtFXyTyrDg8bKinLuj9LcAfCkEdHhTigEv7kZzCqiCoGj9ZfavmL9vTznXy8NStFZEugjDtxCPvQ",
  "key31": "3wYPQAM91HzxFCWcNa7JsvdPR7Nboyy3oUhNKhaxoUzWNaHhMQbyGNwUQt91sGDFyip6EJqrhGQTVWMJ4si2nUfQ",
  "key32": "56ZpMshUZuUXjVzLSwCB6ZYKTy24MJWCf739m9jJULwHVnmBCJUBkcEejMwYGFyXNJPWS6txEQSHqdCDFRmZGD3z",
  "key33": "4Pr4vfeAFLbhudYgwao2mKkSojkH2DSD6USX5uLEDzZVeViyFLKHhRqbbgzqhrx4Z1oqjYyuVASGq9WEErppke8k",
  "key34": "2mfgQn2KJnS54S4dTbkK9WKt6LCrL2u21XtPay21FyFhQL1Gg1wJhT9qLhfkT829T7nzMmtR86vdNJJAcpyxYLR4",
  "key35": "3UBsDm7qgZpjFL6vYksZFzCYGDEPtycm8Fjkh36qtuUWSvQjvBFHiLzgje44DQCkUzqJgrK9ausbsV3S5XrrkdDA",
  "key36": "3VqDwv7FgcGxfBu4CR4nqtpyGqheo3bxSuVLhcYdyRTBtjhXFVsco7xqJS1KjGxdYLtqqNBYHYxeLk5JFg9Uzqb5"
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
