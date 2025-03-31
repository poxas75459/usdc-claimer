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
    "SqqM1tyKU8QmorBkzhKiUMy5Hp2jiR97P1jytr5jawvLzJsdB3DYUpVVoLwwXLkNWHrTnyx6Hqn5mmDUsnAhFk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwHjpB6ed7PaibBv4CMn2kAD44KwuQySzxWCSMmuDeGg9t2PNb8PvqfQaNjwonpXpJmdRyqybKTjUjjxPesE4Xm",
  "key1": "2aR199ES3MoGHmtCHRWAPQUnkFw933H5ENbEseRuSX1d1rc5eJM8i2hVuWuH7d2QHUXcp7e448N6y3d32pyBYNZi",
  "key2": "2nRRYrAtDLph1RJGMD8HiJFbfaWhvrtzmLAN18tfAfisQuNUWRuobVbCNzogizmrtUVK32h5sMYB2sKBJTrmt17y",
  "key3": "i84CUj1yBP9FoHFq7T3gvEgPpjEyYXSCtFfd9JkAQrtbkMN6itdGqZoULes8jdqV55rwuFSVz7mjm11uTZofXRL",
  "key4": "LQeuBdnqa23VUvgamd2PgAERcZE7AjgsvWUtaoqeQQxS6ESSM8X4Bh3uWvn6d1NmRkhbX4rXF9wB4CCN22iUr5Q",
  "key5": "44osqp7aaZmZsskqJe6NJb24Yb2hJKgdxe7WgUAW11W1ghSmKxywg4cS7oZM96kAHZaTpJ3Xc3i4P1Lpbo6eWwTq",
  "key6": "2GermTVkedfMXNkREQynN8w3woP6BpvjTVzzBTvXQR45uik6PsoHc9ZGkRtBdw14LK7XAqq8M7JVRQsAzjjSSMyq",
  "key7": "4gQC6p9b6eD2E6GzHGWhCVpERrNZozFbmtLh795o7fxNSv5qYGrU97gvDzeMU7AmifyW7htFACV1ZLuEi1BPE4Vi",
  "key8": "2HEU8fbBdb4bM2jQe4HEE8zM4KQ6fMJwwumnkzrn6ZwpM7E9uF9udZn5KZE3VCGh4QRfvZ8TEFRHcD6HXABePGbY",
  "key9": "5r5KP3TemVqg328i6ig4nAkcsCvBBfzMNJKhkFMTFqMxfT7921rAiatLpCoKqk76ZaeSYYhatXBU6KYLwEd1C1pF",
  "key10": "3sdc2AgYGm1YFuJcV9mEV5tkSvp8QixQRXZGYd5DetdonVLEsU5EiUKV4NCou5WE6kyDPwQzoSCEUXnr3k7VXUyk",
  "key11": "5Xs3x4U8n5zyTyjDNDyqLJ9mNELgE9xzu3Tr8hVsSnYXZ6TfLcbCfmCUKSBQf91zBLrJtbaGXpdtanzka9S3ZsPH",
  "key12": "67kz6F6fzN9i339JMx1Nz8LzXQMknyGVb9LcvbGDS8hUa98kHgSijy9ZR7n782bQRQobHY753bXQXFikg3bZ7Jqp",
  "key13": "3irt6bKAwTq34L5ex48NPxaP4yPrHzBXYZu6nWa1D4qRpu3cGNbQiiWMBQTpy9ZHQR8NYzjRNuzj58NoSqrxk2dT",
  "key14": "4KBjB9ZVpDYF4WySQYiDxvAsqErS26ZUQjVhzAKxLpwD45AWBPkY6zwp8DFSMTA2ZnzZzK2te99k66Lbzq5mEzGB",
  "key15": "3rvTGfkpgZtqUVjbhGLSkLhQKhqVdQtBivdrj8wDfPPhDpCZnLucPbkXaNwUmYQ44sqsdJFvtnViHVE5z9UuRkkS",
  "key16": "c9AeRcktUTyMEetVKHepXuPnZfSvXPrwtUzwVj9YxstQS7efhu9su7JEUMJmqqcyRXQCPsx4nt121sF8u1eBYeZ",
  "key17": "64jsUe32DppEZieKMyxP3hjRiRFXKvnQSuUp9r7zyfcRbA6meLrMVrhLRNDtk3kx8dnx8mmYnepGMDCbwwX7UPiQ",
  "key18": "5qceSsPQfHyyh9grjK1ieaQNf7FRCvAXDVrga5E7xwVkSEcQrbWuey3mq7W16APLXRzrGU4WF6yykAh5ZLdo2qXB",
  "key19": "3FATFCaJAWjZQp489FeJGbkHgRJxrQPSjwg44zvgCYQZzn7hBsCeyhxfAxF8XemaBcaEDE5ng5jjeEKWh2rBwxmV",
  "key20": "49f1omGRdXFyRo7KEMoNcmEJpS44qpSBicPbBMxaqk766FL9UxpcKXGmg5CsAzk9YQx4CvR3KE4QFsAfznsjsCSX",
  "key21": "ttF1q323LUCWNQeNUkRgTN2r6h2pL3HhiPvKuEDhXi2WSenCjpQ3XaZV6TkigTLmcmeRy6UQJKZ9XNxykzWyFib",
  "key22": "NiHmfeDjeuTzYJ9EQdkNq4hn7NLsi22MqqFjbAC2ySqbCGGTjznN4uUCscR3M7Uz4N842TxZCUBwTWrJx5zyD5P",
  "key23": "tKYVXKbkJbwfMjmswDcGbEGiWeL72r5zefvDAJEt51SWgGLTfPrFsryQ9Dq2XkXoagSAxGBkxupzg9oCNRMg7D6",
  "key24": "VMH4GZNDGpHjg6GnoRonw4XgiSB9yB1tskMZzujTFHwVEPxcw6JHbchNbWri6aAXky8NeJTKWKPHhFBTxbhTTj8",
  "key25": "3L2EYiz3VzcS2RbykDVXvFQxUujRH4vcSSwqftF8sLDofrZqZ6hcwr4V1mF3YnEvKU8XqqAvdmpXiHvVRkVtSk25",
  "key26": "3YWXWkNCGz4Y1N6jG4qAy9qhK4b8DTTfoq1PZ4aZU1tHpTVnPKQVeBjdV8oymkALkeo8JdFFNA1XWNb4rsFWnk5y",
  "key27": "3RrZnaVYfzh5nwsjCc6mcaSY6GgdqBrXYEuQd2LDsurP3wxTpGbM8SW3LtRwPs6gGgsyuApDAZ475mWLS9cntx7g",
  "key28": "4TdA4QYPPaKrHkDadrGi8GYyTpkQ64hpZYFiGGi7572z59xU4Upo7HxtChjBFia7BbG3wVALrC5yrLngtCyA9FHA",
  "key29": "QHxCKAJpJTxHNNswansQgLB9aShuEbRwzNH8PX3Z5WvKwyQKHnDCxjagu9fWWXMqtSADZvaLVzFynycSoTMjQsH",
  "key30": "3zAdikismRmQRbTy14BNwpKA2Fz88s2GLTLfsJFzJWHKrhSiSNKaKL4AKi8wUm5JqsbEyyjpTeczS8Ue92ouiKga",
  "key31": "3DUDxPZyM8YHzKj13bKpUh2954QzA1NNdsCW6ZrrDDyBRC3hEmhjiriYQRk4x6KLjgkhaujDDzx2k9Nfwo1yY2V9",
  "key32": "24xoRH4Ru1SG4C4UgRcn8EbN9hqKBxYUgcabm41R31uhvWkDnAV4m3nPRZca9FVW2XhuG7xknsPF85YKECRZc7dk",
  "key33": "2btSFNLU9mtHZGSTM7YrbdWbe8zT4wipnZoTwfv9b47LFXw6vwTgdetyHsJ2xTtYdsKEuipHrwrJktW653VWtEWd",
  "key34": "21pc27U1Utrjb9cNLxsWsj3yoE7sx6BsbbHWQc3TbTuuZKmMTA43c5V4DZBvFw6odp1ymaQiVBLEZpqAwoBtwUyX",
  "key35": "3vgiFKmsc3WNfD92sJpfd7xbd25mkEV5pgkBLfeRiBonWdxAqsi6DdqhHM1wJYoihvLUQCse165qjxa4SG7XcHzS",
  "key36": "5ddJ4JuAWPkPfxWLPCFjJzBQKuMzHp3YmgFr2FTMsrXRV94pRXcNe9QDJYCuu9NTV9bYB4NharWBqv5V3sj4pM3p",
  "key37": "a4b5ePuPSLhUEL7ymFwbnciTRMBAe2ZbTXTkmeEuXiVMmkPMW14XtgbVe6GrdC8qEPtpJRHU6FaupgDjXUgjRsX",
  "key38": "5PqtACpMVrtsbyke1ZK5osLCENqmWndMpVm2KhJDgdBUwnkJLFmu7DxcUmpvcr3EtGqrLAdsPz2T33buZLBdrb8E",
  "key39": "5xEpu5KsGp1NFjY6YfnghH9WxRtvbtpUoZJmagVajrcTd6xcB6DwAf3qvrnDCdbfSqfULfNeepR3QdHrzTG4Fi82",
  "key40": "5hH8h323gmToRnxvz1hMbYFrJDLgmvJECopzF4gTZXzeTFQv7Q3E7SfGCePCRAfFKo6GjdwwNaDkePZ34S9Loe3H",
  "key41": "3Dn23LBpQGzeScy2Nb4P6b6L12fNJ18dBwJe1wLzgNdk9GoC3kToKgVZMFR1mW3GGdhe7eCCyMDdr9vj7EYWWLbL",
  "key42": "3vUJHAdYNir7gTpbdf19L8iW3tC9ir7Gvd3DpBzA5HRsZcqurcA25hBpQm3camxL8cdzCn23C8tUD5WUad1C1eCV",
  "key43": "3FjbKCsBvLSdzee2f8GGWWXXSQrcdisX6t7NR7dUVzcYz41s2VepuKyAimeh6qtMkZKAcmXkSD6AgYN4XpQAmd6m",
  "key44": "49DDR93dwch47J95KWH3FjX88n3DjvEvGTGyB6pesuRxkuBmh2aPEB6eAdsZM4AHogRiayKhgs29LDCbuuM8rG15",
  "key45": "6d9mREwve5ZPa1yGqTvMrHTEdLcGYwqrYzFJv5QxF7QJBeSJh8EjzhG21XFMfvBzmBXhtKYnbTTQ6hiTAKDhXMQ",
  "key46": "29REyxhmFAqKsMJ1tU1BLMDDRXY6UQDMheN1YxKEM7GgSwn7BZt2h9Fr4XgXryHqcdFEaM2rh7UYhhCM6mGzTSJm",
  "key47": "7C6NuUu7NrbHowVUhAzPKz8KKzjzWZnquEhgab3rMAKhjb95CwH7p37XpxCQ4xdxPi6ZhjTVfzDGG7vyF8UQJ6C",
  "key48": "Txa9Ric3D7J5iEBPtJEuQqkctFd7FNX3qhygiSRS2zEwNVGi8VN5zijrgw3r7bGjh5WghAP4EZN9kLYCYN5hK7M"
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
