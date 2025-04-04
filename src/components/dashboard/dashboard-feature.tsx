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
    "4D3bV1Y6BxeKJnTpTxnCTyyriP1cpd6WEYAFXsaGTZsN3xPiF8C3htpKMGLAV7PZDHbLVCSU4aYbHbFxY6w5RKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z5MNLoK4vqCLKY5RXiaR2hbX5w5XbG1mgTGoDL4MpcfEPQF1uYQJVN7XZxwT5Qbhse9NGEem4eW9JNhDvRLsFKq",
  "key1": "2rt4HREWAk27wDV3kPCynd4nT23k318PdjqTnpnmTTJrrDYEnEXKLkSN18cx2cKvh4wCrWSmW7B6QrUz8uie1ubM",
  "key2": "3VVYvLtTDgwtKzoThAbpwY4ELerP3LdSoKXaLVm75zREpnuUMTddBYVhAMtM3yP9h7CgPn1ZMt6dCWz4kpBGnPiw",
  "key3": "chRv6TS42zPUHikvHPBC6YgozLsPK9CNy4bkCvwjnJgXNUAmzUJSsJtFYxFEUPPoNSBMpDaAStrbLxaWfNUJvdx",
  "key4": "3gtuiJ816JaX5xoH4V2UENZxkh8UT2bp4niRUpcu4tvuxxgoA16SddrTUBd5H54VmTXYFv8M7drpuAp9s2qEJoJU",
  "key5": "4F1MozC8rrb7DDeuvHRLGs4JFZmr4sWJzM5E9YrDtzSXp4PKC8W2z5P5fVWk56jWVYUay1qbT1jg5m1myt6ZHTXD",
  "key6": "5MNCh2n49GMeotMj2sAmZ9ZaTrgFeq3mJwUCmZZXuUJijDJ5nKpKSWNiU7KutqesDC78sNAdbWq1tViT9KQxMAwv",
  "key7": "2W7mZnVspkcHPzQrjannGsm8tZ7nVohdDb38NiDfRRhSDRuDE7Cu1vyyBdYnHaM6a4TWihtG6JyjefZ414LqZp85",
  "key8": "4zkcRcirtTQnpUs2xKirmXJrcsH4TweQLrXTo5mYhjeoWyABR8VqMDLcciRmCjgGNFHzmbQPj1qFJWJbxQrC5hLT",
  "key9": "2NZFDpFFJy3pW84GzaQrw8La3Sok7tEapdxsyXUAXsBn9NmBqXf7t9vyFdYGdaEDfSXHSdnN7zir63EbA7agwtWA",
  "key10": "ux6MkFbAqFxokg5uDX7m7ZC69Dcw1MX7FpVaDuwM8WCCsTTzrA4wn7A6C9vRMV8g1NVQ9sB2tkR8wVkuhpmxG9s",
  "key11": "2bzfmoNC15pKRRNbx1Z9GHsKSvL7tzV3mv2fHanoydZnYbwvczdi4ENeZ9w8ZZeij98y574ugaymbasjofSP2D2r",
  "key12": "jYhyVNLqvbA2zbWX2BKqBp8Rjfr8qzZsceidtmBBDnu7rXyo7L3qtxuQpvhicpntJWhasJrkVZJoHhUBx4cW1HV",
  "key13": "51qXzjjqvRPyC19DQTE4rKXwNxdiVSqhFX5G3rqejefSmSj1rjxsyr5Jz6Ac4s2PUuXieR5cX63xs4Uhcx2kRGEu",
  "key14": "24DVPZbfrZ1jhFeLruvVrNZM1iqQZgKHet9824nmSLG4Ancd1syNxJ8e9yoAMAvTDEYkQqLND7uUtikh1cFjKYrg",
  "key15": "2m9aVA3hwKfNJ7BRxfBozWnXiDLqcn4kzr9vYj7NnjLyHBoRSJzuanpEcr19fySbR9o9yxdmweBCAJqZYe9USEzr",
  "key16": "3kvwPZeBBfKV4JRr7HPbCf2T8Yv7S4zBp49wFCEcftniiTspBxCary4SbtB5N9UumkECj75ooscVu6Q6yS9cnfvJ",
  "key17": "5Uj9FamGf7TrY9ReC914Nxo8rdf6r73jULPthXsrxfe5yxQsau6xvthaCZ4nDKeRur1DACf3MCM1PqJnF3yLbc6S",
  "key18": "29yD7HgjiubpX2Uy1MgMdSdSkrYt6W5wpB1kAM9wyUiTksn7fPRxRAxxPMpgWH4jKtnNEXFUYRf5Sz7crMNCxAyG",
  "key19": "3jmZHZNZsGPwez879GEjQbMCJMnXLQoMJ75ogwkv27f5VThcmJ1EEQsP7jE3PZfg6UhYPav4ZirkXy5XNwxr6Lmj",
  "key20": "KQyuVUp1hJp5AHqw5yc6BeLnsF6NkEMXeFx89wD7DY5T6b3xmHvtnuUtiRSGnbLZe2B9vGj9HSeSWKwpGw6eZK2",
  "key21": "3PUG9uvc6Z5hT1tbTEsKDjw8E91ABurSBZhZKhkWztr8Dv4167vUkG81db7uqczLyZ9v78NcJFzg5upSbxHu2AqF",
  "key22": "L3nxCiMzqm4QUH3EUgcRzWW5TemozekP8wzAAb8iVSchBnoXCBodbCxiXK2RFHK2ttNvjYWnENCH2iVbawCVjnC",
  "key23": "4GhGs5oJ5ZHEuo8KqQvozaAgBA6RhPSYs5UGsZmUJggc9ZHsCFtDe3x9pkffxz5PNutUSbPVYtJXdc5RiSeLHytT",
  "key24": "HkjwMCSThUYFgWxJUDvSPmAx5xocqMZE67K3Q5BS5os92pguTdXerqMAL8EUipyoWpsnqq8xypDTCQLhQq7nY4w",
  "key25": "4SKNR2i3y9uewnMvMFLtPWyArfbzZZmh7yV7RzDozNJvAxxEfEi3LMNKMXGYAHPZYGpVyQo7BK4mjngjcWVuWgL8",
  "key26": "142VSL49hiJPFaznkjrugEKhB2fGKALjJQQEmKfs8xWerZSGFK8QZPXNXhMXqyrJYx9aaTPqb9KjE47gyWMhbGD",
  "key27": "5V7xuSTGaDfyrdrEWTgz92SFF6EpJNMYdkeH6v4vWJVXMbuMQSKKmnNUHTjKxHijfm4X3ny6sVS56UAjLpDNjQBJ",
  "key28": "233R6pLMjKsww5jo4Fih3nJzgcjhU1nxosaiCWr4YnKdXn8ZYwRbscNcXp9vjDSNR8xddcTBB3jrRwZVJFqGSyDE",
  "key29": "4W9Dt33if7NC5pmSK24zSgMnBaC6Hw9Qa7VVjRzFZJZpWmcyJ9yLhMXFUiHHqfXWdKaA6PXRSa8TqGYfZdmTuku6",
  "key30": "35NhqVsaXWCAELE5GsoSPBEhp6EkuG8Gdh5DyxbpYqCgwpsShbwYEhV8yq5v3C4EzzqkyyBvoX98RqagLYJnYMrs",
  "key31": "38qGRbBEvqZidewhJHfehSanRJExjveYF56Wd71GUdHGc4nGribPtVmb7hobqJ8v9Yu56BG43WjdPakD1NugAWpj",
  "key32": "2Gum453uyxyjVkTo2ojy1EDmUeKGqUikVZH7FBW3udr4xRdjSGoyJSHxCr4G1N7WPQ2qpJtPhBm2gMx3Cu4QrJwC",
  "key33": "uSp7ameFCScPfMCsxZRXM8hzpazt45ybNAzQoyMAwCbrn776aMR2bCgPRmQ3FdQVdWUR3qJxPAmVfmTHns9x9Xn",
  "key34": "26dfSBTJKtQziQ6XsUyD2g1UNwDiYKCeKn7VtbZc6M35qGhbszpeszrNcVT2srX1mRuJM1mkNNjGSvgMEJt8RBNJ",
  "key35": "jauLYeZoAq9zLKbrejsYv7JYdfST6BCdJcMKFi7XrVYhHMzRYfZjdhVeWUPyYcZQm1wUZ6suRqx9RyTf73EBrwU"
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
