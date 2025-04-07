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
    "46iH3dENMr5mmPT1v9QvofWkECmLeu1nRtjWC8G2pas4wChiowyrgDEYXfae2cMq13LV4WnUNAH17nY3WDkUCyzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFP1FoNDirqjdUfHJfzFsZ9AadCCSFDNFDVGNRMgbV8z1DCPHGVzSaShyDV1w67HFDvSg3PvHMjtoBGcGepqfsP",
  "key1": "3AGwA1Q62DHkgmJgZvAjehW5XNpx1FBU11J843LQDrkZCUgESAbWua7hmcr3kn25tbVowhXNsyJJ3kS77c3yuxdo",
  "key2": "32i3BeJZfjWYQFRUwfkAqQF9oWLT2MVyKhohPyRaPmAFPv3BkkVxcMffd9v7XuaSafS5v7E9raNQ56oMJSnyaqFg",
  "key3": "4kArQzZzUtodZeUzF3hjmr3q3p2uaUyJ4ReYp6oPptHV2myprwNNxNDavYpX2xWdmWhDok1fzMNB7F51q8pkfMpp",
  "key4": "3ui4fP5U9c9T3TpphjtdMq8vdynxZu8o2NEMasxYc4smsXn8TSvREXdNz1HQZ1W1gCQKWzU91jZiULwDgMdgWqbw",
  "key5": "2p8LvfSivGAkNpgayDoZjvb8tTgEuLS9ufQWEsqJaarmqQ9tYM1kjoQpNZrCus4QJPC37LmDKoURodjAy9GfnA99",
  "key6": "3zg6DPqTawL3RpVq3YEYwuButVerrq9J7MquVp3YffTdKk8FRsFkJ6KZEkeeW5nBYg9nL2JsZtnhRV7gMjHSRk77",
  "key7": "5zY8Jgs7HHTFfEeE8TC18zQQDofk3Mn4yP3XNXvpgp6KQV8TZjx1ALNQKMqcQkQhZt6rcebbe6AVmUXefWsAmMUH",
  "key8": "42t3SvQwUqTCWGo8Bm4LPadofD2NGKWHMHsXGUReNLC6V7LSEAvPscng62YYtWsjDfpV8uS6Jw5Ti7CUwuBcmL9y",
  "key9": "wvShiQi6eCTLCEPqjfnJprRLhbYvB2uNntThxRARwvbBRX1tSWqWHB9C5SJPDarrPEM1mKKXXNKPFH4bdbkhTLc",
  "key10": "4iBJLVMQZSxZEFhGMrFTuWv5sAN8i2nhkGjM34we3bwiGU5FfZjUBuud3x5xwpfkjhQDopbvuC6aYQtTMmfzwkiS",
  "key11": "2od1aSEWwGvjnVARfw52sBNbW6bwEEKp2T8abAz2w3KLuPbanTdMiNMv8Ucz9CahgSW4dVaHFu1cwBKUQztfbptT",
  "key12": "5oZAZkx5o6Mr41UZMvSsqAVvgUdZqeVxV4tnmUvRoJGdNRUaH4JcnzLoX9A9qPoQgueRA7EszD8EahAsBXSe9Dfn",
  "key13": "5cbomEuWt8YZQyEGwmWF2riDTtbvMDsi9BxL4FaTcL7ueqbj8BceKEkoshE4NnofArExh7Rte7b9ZuKPmaZoLyYE",
  "key14": "5QsKxq8bQf8ZtJqVbaYEzABQywwfGXz1fdhp1yR7GWxYnRApnrrDgYYsQ1Bo8w898RjPwGpm7wTp8u8VbXq3W2Qo",
  "key15": "5bP5QLNfiX66kapVQ5xcLQG6WvXVjQLkX16JRLi9N6wTRy6pxn32BFSauodCYs65zs3RipWgXpPVuNp8zPzzRPWa",
  "key16": "5pAwtqUT2hn4wuGDEMAn6iyndUxHzAkbf3p8rjx4Y8Gru424Zrz5S3RcmKvFYcvZxUfgcyjqnZ8RRCHy2n5HonMq",
  "key17": "PUMG2maQPtBrSnn55FvMMzEUzCey6MjKcdGCQjDKoSfL5QAJxfhA5R4YKRutkQJCte9HYNyN3VkJYbSbDAGpa7y",
  "key18": "4hhdEHmjEMDASVNSjdzqqpMvXZvAyaU7EZGy51XGoxUDAEpjJjHvNsV9MFuXyWJcYYGuZsQJbfP7huKoCfNSVwFK",
  "key19": "462T6r3K7x2kgo4CmDxHcbp6pGBGHJgtR4w6rpN2XTSAL74vXGLkXm7J9VMAu7bN529vLQo6M7fv3SkPThB3sVga",
  "key20": "4ygcUmGtd28gM6bvkoonc5DKTLd8ujwheJDPyBCq2sjkScKry6rExF3wdjfCizVrbLHc1aaHNDEKzNGYgcc8rQzL",
  "key21": "56VsPePxFDZJ1tvNEALuxk54LMkVMyXyETjBHC2GjmPTrpMwJHcmKXVjHdh29Dp5dwAMDELmA5ReSF2QE1NazM2f",
  "key22": "4xXMY6mES1M3BtmdX3H6d9j11aZoGGX6eCZaXErNLK1sXzP3sMp4dvp5GeMw181fscb1FzRi7PEtNfFSkQvBUB8d",
  "key23": "2Tp7wFJYi9KWpxVKTMyqcyycbP9EXyeYQNNqqomomLHcv24t6tAZkn9ykJWEa9gpqfHrjXHNcmfidzTZBmDt35ju",
  "key24": "5yope6PvyvBR7zr157RQ1yKWirvS7CQGsCufs2LCDdn4ijRH9UNHuEsdpu9SX7UcLUMV2jWx4YAUNS35gwrBFoco",
  "key25": "2sv1X2sDa4BMuSzeprzcFwkWnFXBFRyBtFLrpbrt9Z1bJyTfEgxXTLWZFm9uLLgkVd1NCo5eHgwabAHcfEW6eeUJ",
  "key26": "5tQg5VVQCCwWQCXepF6xyzBjNLAFJ7Wno84bLTvmPh99yUZAR7JC6Ung7bm6D43WCeiwL4gQqjWLSTPNEKVW28Zw",
  "key27": "29D4nnJ7CzkRyoE4XukVB6VpPv4Fk43dQ1v9VnVPbM9E74pghvm6DEKrf5L9PvuK8Z5vKDKx2LzkJrTJPrFw7fho",
  "key28": "4HJD2JvQghJ78Djsv1MG5cf1W13FANmvn1UjaTfkVTgHzrjrgqNnTkdm93JwFVsBuBynZo1q4xQMEtUeeEHMaMPJ",
  "key29": "sqfDP183VPXSvrUSnMkWib4dUeSx824kQkDGy75HyRUcnGXJZ3vA3MyKmatg6CocBJxmbn4bgfQtcgVeA5A7H4A",
  "key30": "5npJQHFAgTgfJnU8CipmAqWTaGewM1Qg7XhDc86jYwLbrsPn9jps8dSLXjoYKXWHszHx1t1P1gesLYgMFdKeZQju",
  "key31": "5XF4fbPxTRo9RdjYKSKHPq7bJusnVG5uFyZx2RL22SAgQKiRAJ3NuszEutynczpSh6pGgMjcotRH3qJnrkXmAexs",
  "key32": "3JbXPVJUS9RKNEdSuvxax81zC9gW4wwFGNNqp899USd3iVi2rNbTeRJrc6hJ9ywB5skPCKgPaQY221VkiqF5C6Nv",
  "key33": "2ftyzqG95REWpZGfDfHtNCkgpHaumLVUsKeZdXBQE3YpEvDc3FScUDEZyyRPASJdjksyTDuoDagbWJaVUYA2KTxF",
  "key34": "4SeqNLg6hGHMSLnsLiDH5rL7r4ZV35JQbVQcGKpNXrJdvTaQR8rYtcAeug8UBhxPchwU6F37PnqBXcYRmJhGVp3D",
  "key35": "4hE4Urind6mknfaBSUqW4y9p5hoM7bUD9dHL1Kx9ENozFiRCF47X1Aq8QksTWRH4AHdwp8dX5b2JSwpR56MT5LBT",
  "key36": "YBLfXu3hoNgTCab3PhPxZPppJS1Dc6n6vxGf1YqroYmAC5eo8ob9ReFwcJQspot4Cn1Wc9xwfR42dz4c5yeBQ4Y",
  "key37": "5zLNtT3V4a5KYdsPPLTNjKhs4VDKEhTWd73fFWLLANvaozr41Ak8BuWXX1CBb23voT3AgSXQbGSZHjM8C4dLsQv1",
  "key38": "5hMZjuWdJ9K4C2eSpLJpHkKgZbbit13JvXNSwH7YsGY7dkuMyKYA2SjSnBq2Ht7YCLpHCfExKNg6UPuxqEWMhzPG",
  "key39": "3bg8JedziyPugh4QSNCH6vYjaeqGKQrhs33y3YqcZXSWx5oxcWhp8VrU74oWegxXFzjQy7X9fkEr67eibdhBkeku"
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
