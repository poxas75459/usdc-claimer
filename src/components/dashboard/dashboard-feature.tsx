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
    "2SPxWWN4PfuVeNsBA63dS5hKVX8vVukCY8AKiwwcjNBL1sKFvjCPpJczxFPLSWo1hQZk2XaPF6afvkBdH974JQRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQSPbY6aEZvCEe3vSPArMqgyPhb8fGkeuAJzfnhhH2D6FWNg2XZYkuf3DF7oQ63oZQAqZ5VhwgozWi2GUDAn6ui",
  "key1": "2hVFtNnd7jy6Q1tnM1pneBPL4NAHK1j7c9zVzrcmndBJqG6Zv3cPiHqPve1UK3c7HShMRQusytcZqQKhatrSSVNu",
  "key2": "2U91uJGZkuDaz7PdfiYmDiX4yLTsAyAGAi3scTLk2xa4536wmuVACMNbA6cuyL7EpgsgDdZDJ5m23qzVPc7xTiyN",
  "key3": "MGor9hhjf69BPFdFut98DPHSQjUjp89ZBYit6Z9i2uYJdqZMGJJKNdqp2gMVRiaAx6J67yTfcvLbprUvqdUDj7y",
  "key4": "3Qsn4dG3UbmwLrNfCbHJUGsEzM5eQL1J8navo2XpS1Ap6fP3XFgjjC8XND14avEfioVsg6tDwA5ECn8FUB8LdLfW",
  "key5": "yM2W1XvjfpnmqVrnQdWerTTJS4ZQcu79qaePEYwiiBFzMsmgJF2GKh4Aymn7DnKfX5aTf6UukJ3HNftv1mmXX7L",
  "key6": "KYJ2ovho7DTswMDSTYBKh21neszYK8WV2FfbssPch3GKXbrXuAunnP5KvP19xJAjB3P7NuwQDFc89RKLRoJGVfZ",
  "key7": "4FqDu3couHZhrx1gd45z4vtvwXrdsf2J7LoyfKob9AwQ7wc6CygsK5uaRs3SDF7BBoqqPVb3GjR3BrS6X2RZftbZ",
  "key8": "5S9d9QeGEveuEAAtZXJDtmVd4DxCmAtKEzsfLwTAVVCLVGp9ZuR7uERYNSpjm26kQFJcNjash7x8GQ3CUjguiEtD",
  "key9": "4GTBrNRQwAJbduqtuUfSTvzR6ksoUVhX9TtpEGm9PQ1tXr2Hoz7eBoLPm8FcsL9mmK145jbxntRKBio5rihWW7xT",
  "key10": "2sgkM31QwDY8vgA7zcjnMkqRwzYDNjCKdhHHK1CTh71DeUT5nQdP4j21KtXp9KFYRNZAWnEMdmvMR5SfuRiNee7K",
  "key11": "62cuqGu3ig23gLgB4PJytTaVcU8E7YgAwuJtcr8uRHeQ11CRY4UxDBVJfEY6MRkRwqDd3htp2bSSoKs2z5G8i5Qv",
  "key12": "4ZzDMCtRKs6R4bWNGVZtuVxq5pNvPzmBvJTK5FsSXj54TKCKpszfgvQe5HoUxcjPz4ys2aAKhSthZ47bYHn57GME",
  "key13": "4vssb9gWHfTrNs1m58ZV4Fvi4Us2xfHEtAUixXjNHFtccc9RuRetKYBaXpUeXhee9wijSrBcUq6ASsRhqNN1UHbz",
  "key14": "3JVEYtA5NMvUQZtPz8HekfQsi5YZFfdrZbVpAyjuzZjXJJnuHVExUWbHJPkCbCezAD5mSNC5BiWctotoJxkUgo3g",
  "key15": "44nAkEqHyuRXCdDLbDxUpEZu58dwRHmXxF8HrexuoRDasDepTeCHW9xMwbrohPrivxurwgAc4ek6LX7m8t9LtBTa",
  "key16": "27wN87qeYYen4wY1KBrcDVy6xR6UaiEBswAbgr9Y2Gu4pbLQtWHVC7RqzpmdKWEFYgygRgKrRYSz6pe7oKuZ2ydY",
  "key17": "nmJ68jCJuZDdF9KapXm2sJnebDzHKWqJhuTCUfQSdY1gtuapyF5WVbuiXmnYDj5R4DAVNQAk6VZzmGtRQdpYjiq",
  "key18": "BzRPmvj3RfGAJF9HY6d72xgHVXq6trdsZo3CgpSiUBj75GZz8VzX42ew7VsnzHy27jNbDuifSQ11pzTdMuP5BGH",
  "key19": "5sxc2eckpstaP3Enynjb1Zfu5h4N8jhQrW2MvfxAsfe4vhTwP9UAFroWoNKHrAo134nG5nEmBFxmoxLjYrDsyXnp",
  "key20": "5DbXcjdynjgXYw98FqLgGXijgj7rJzSQZ3nogWS37XkcNaZbKichKsnMyYUU14nygHrzg6XsoCYCLf5ZeVnzjian",
  "key21": "2PMFFLh8iBF8dh4AvsKK9fFSBH9LPB3tfzaPRZpYLEzG6VXXsSbfCL7zzNAkxBc8vPGNoc87jykLyT4qJpk4pXq5",
  "key22": "3dgT4rMqtLU3Dh9FGZQSy21PThkc5PY5UEJk5UvJMAVfyigBdjKQW4xhCLHTmeYTVDu7zkituuBqCqT1b7MkcHWo",
  "key23": "3DoeVr39PN7tkG8y4uyNYQvhZihLxxZZgRMdW3gCxeJ6uE1vFokGYD9BshQYYaesknfDdRT1qDB8RQW9vK2NduZF",
  "key24": "6271N1AzEBGbnTyjmP215E2PQGKUHT45yoG4hC15Xjh5S9BG4nFeFCcYvc6kF7b8QaiqnBT2YXFHqsPjkUzWe3W7",
  "key25": "3neyDy1CvWSkfwFTC2r8ZyjNEYkRCfxzegdYW8uXQL9kK8os6bAy35oNxLqBeXWhpcK4w7MyxFKjRYgyJp4H3Ygg",
  "key26": "3S62hfXAaVs3L2wAEHamDSCU65p6so7FqWc1eWFmpA9PFfdquoRaoTzFpVzeK4qDsYREhF2aAbVMoGtkKNokU8FG",
  "key27": "3Dt5d2seRT8qeZtkfeVjZz8KxMwSdVjhPZtcbbUYXnzXqQmDxGoiRpqSau68TAtXiV1rMcHESvtDkYrQzVaRBV6P",
  "key28": "2ii9HhjhCfvGoSC1miEWsivhf4W5epqUzeJ8xn11F2jVhw7MYB6q5SyXVQt9UT1z2NYD8abAtbGdzzFFFC3YsEEy",
  "key29": "4KWv5qymNLtP5eaxWm3cFpHdtkqdigMUuXMNPAHjUSgJt3HCJWrR7yYg8zPAHczinruoPQL2UhQ5786y9jJdghHi",
  "key30": "5BqPKQkooSy3VKUVwsSFXX8YnbpAfQLYhqnKLP9pekKBa7Q6vm8RCY5uxNoUYXfxW1epLWMRRLi2NkcVK1Za2Jxd",
  "key31": "586NNsDDMuj2x2qBKaVcraS8N4jcgzrYhVgJ96zmwdbzV4XTPCN2RhPioJ6iHWv9BQjyEBxHGLHXbvvovnhJuCW7",
  "key32": "5bzWzcV2QENr7MKFBCE3fV9qdzC8t85LobhgkjWZYruFvdVwqktGJFbSfVXBRuSq8snN3qbVTo4Uc4qtxLFtN7bm",
  "key33": "2epQA1WMJVjQ4r1ZFqQameShec42ravewdfKs7AVuXfZtDEwiCztAJwqjY3xffLhVf7MYfk7wQ5tz6qN2YyBNkZ8",
  "key34": "59M6AFmZj111Th4rJkHqWKAv7mDdj6spXyt9J5Bt9RVxbgidfXFf3sF4dWm3RysrBAmxFETHAP1u1PxjHQuCEC4M",
  "key35": "33H3Bw3NbHRPN37MfZKL6z73Y7gwRSWu4iS9Mbig9KAmHiHmH2eUTzkfu8ys8w33kVLLH159PNRY1p7mFpTYFJva",
  "key36": "54dzexYr4a9SPiwf5FkPB21o4WZcc1rYgaV7Xr3npjsnH4Bhb1Z3ku9xrQaRGKoCmtJsnHmavWS4s8utjVCyyfgp",
  "key37": "268AjM7m2PKSQmM16p9nPrJjR75GYoLuhHS6VTGvSat4cweziDfLTh17bHKnCsdrvguSzaFrGBAUn9cYttAmtJpx",
  "key38": "21Z2CCvS7WRqYML7gX9AVwRz4J6S3FkvGygpm1vkZjHe49aBuxBFM7Z4xBoM32KBBxKvvZyiCK8d4iuCfiGZWo7P",
  "key39": "2JhAt1FThKNrE8gsF2dfZ64Jk59LPdiDY4cfKw5JJnPEAXfK8zo96iuiRwxJNhi7VhWAbDV9RbsYQV7AvYFrsiRA",
  "key40": "3Ld2ExBdUex4HTUAj8CVvxVfZrTwRkLChzwm7DiarUQeM3fcevAfXsKnsEiAAhEZNy5JXmbxYegRNG2KjLxw5swW",
  "key41": "4VJbAG3WMzNdTovJ3hXtwsPtCRwNeDfqAatw2WzVUy8AhZXeBGJ5J9jP5kE313t5RRfWBqowgkNPoxmoev3dsAVh"
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
