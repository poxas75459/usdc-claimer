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
    "5WgWTvfKGaiMCPKGk9dg3v8KhkNP4YM1v1NTjTZdvRscuY4CSnUvWGSCxUi7Qyhj5TuzQCrCPgiBg6697j8HQxF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LdZJj6vgFADiLUofi641dZhg6XoantKFeVcZEyzC7LkA1MxqQMDPK2iq1jzzAdSWbjNSoho8Det8SnXdwdHPnMv",
  "key1": "3C943tMZBndYpvjUaabaeiwNeZKvWG5jRjbqewNw4HA3z2MyQ8VbddTY3Meb1m5hdNBvSJrYUensyY3XDBdwuQvQ",
  "key2": "3q2uLq7ZqnC8oGw3LJLPWjZMe9ARgY1TGmJbDXpoJiA84YjB3nRVjaMyuUjrz9MfQyZcPThAWvHSYbAEY9VPZKwE",
  "key3": "3UKLb8pD5LHJ7a48xyPz9Y4vLGqgnJvVvoZL7ej1cRwTef83PJUqHGZ1dca4k2R2hwgegG7aiULhb1CaFoGXn69",
  "key4": "MvntZhWfQmUWYNaK5y1KAAnkfhpqtT2tXrUDvJr6pS6KabW9SV3AqFDcDMvrtXKwaz21TkFvGHT2Ru9ahecnDce",
  "key5": "sJjw5qmxDZUwojbX3vLe2WeB5uF8vkPr6dvFBtxM7DbXYV9M4oGRKDzK4eZpfzuqjeicfhUaK82ng5ZDBWRdubL",
  "key6": "5Fw2pGDPrZbmjVXnkamHTu6rYxiYtnvEL9Uqn1FD5TVYKagMFzWw8jKEztoY7e1u6Sts7j8mbM7PLV5xH4aT6E1k",
  "key7": "5KEYb6ZG4ACzQi51sVsfJQzNJpeP5TayVuR9voobxcNtmT61hrPwrfUdVu8zc1eACCerADQKLb8gEzQKWqxowRbU",
  "key8": "3iY14avWSR6gsizEnpKeeWpmmqFcKwGZGnD6Tsxfjc22e4mGr8UyBmdTXBFE4xi2rnBHMzX5krWwSejK5qDpHTPp",
  "key9": "3AyPfFWAtAncxdE6MuytJGkjzXTK1Ahr2C1AVmC75teRvqJxFNijQEEUF6xu6m4FWPMzAKu1XXb51tSu4zg9UgUd",
  "key10": "2SkjW73N6ZvLQHXFWjEPTmwSZ2qWPzS1gPmRvn2pYUnSZBacnJo92TAshHHhRbhqmbccMwXPd1au6wvG5ARF2mwt",
  "key11": "2evvJcjx5nbxquXTqfbBGyqNJszWDm5E5xSN9w3GCT3AbAFd4XhpnEQRCMTNqgAtSPbKVpknnQFHgfrBt1msaGJK",
  "key12": "4bdi3PXDjefY4PTWMjrfmVjec7MRBEEMesi6CzpHV61HTUxdGTLHJeoVNzXxKCaBcwG5CbjEeR4twAMYm23crPmD",
  "key13": "5sPebLxTnUmQFY3ABco5ZWDW8dZYHUirDdwjUWDPyN4pbXFpYtS9SMvBXC53VrErYyQYQDFbSvyVyXtdt6eVBjSC",
  "key14": "3LZUB4KznizG9JRB199xgN5NVJczLDG5XMKtQF6THhNVp4rRrqt5z1TKYoaB5UPBLEWHKjzv4rZ4qBRQBh7nzuhC",
  "key15": "5aVBxzfLLZYheHvHws6urk6zEkR54m145vZBeUwcCNip1Vkq56ihiHyzYHEK8Emjuthug1hPDGYbVaqqXijwhKig",
  "key16": "1269DNm18bVNQJpTLZKP76cwaf46XMJaZQLfPh8hp7UDeqg4zGsCwRHGBjqPnGuxmdkR8F1TeNUFTY6mkxopFnh2",
  "key17": "5wZxFPUcV1XM9UKA7jogrcHMC6eDSf1hXfdxZUcvvD8rz3kR7cX79GDwayVyc3MCXXgsinGLyPC7sdia341XqgrZ",
  "key18": "3f66AWhd8fgm1sbr9g4ULDu3sgggDbDsTjJ7cUpb8D1Yhmzw6omd8NdTH673ENuuJBpHwaVkKjMqZCquSXstPShu",
  "key19": "5Go6MvBQQR32penZot6LXq3GnoieCmR6DxBZpVwW3mXAoGNkG1Mx7vfs7vwpwYn6NnccZC8D8ymMU4McVWfTJ9EP",
  "key20": "4CtqWdSYGMkzG5K7HhiFzJFaNmRFSVxaWTCcftRkiXumxPiQkYi1qdrVe76Q4ocxa3tUEVMEFMHhGzrMixvxoSi5",
  "key21": "qMy9TbWLyxdCKYncFpnUjyi4jN1QxSVnupF7wrNh6cXBDFN7f8ho4xbB8WKkW8kcSToHtLBDEsDaNZyf1YrBVC4",
  "key22": "3CR3ciapzdEgBfoqJWAeMv1bThsgCkDGFf29QLACkFEpL7T7ZHgC1TBWgwHUhgF9cURKA3yYQW1BJDVMMsg9nPYS",
  "key23": "RAk98Lt4BNAXUVMmHMs6QtCSabo3d6WUAzubp6PVrnzM9cetqio9BPCtxp7PD1ZnPNNMaKJP1V3oi7LHhxAP1dk",
  "key24": "34zB3PFoeFWRMnrQm6TaRgitCXyYfaPJ5MbxWLN4EWQpCC4Br5Z6kDEDu4VAzs4Acfcay51Pb9rHviXAErWM8U5R",
  "key25": "3YcoyjgzucGcYdyTWP83Xy3V8oLkz31EPTKFAHmfVJNGNptG4DY7Q6hMjHu4opJrYn8Mx7jACS2mnANShYsQqpcY",
  "key26": "7e1WmMHZZaSDRUTyfAQhULABtjdWSepsT1Y8vQ2w1DUdkYu3L9GoKfrFvxVPidL6qTKWMRs2PgHV5SKrZFa7twP",
  "key27": "2isbXdTroiScBRbrKxYFvkrvrFBLVt4kVoJ9ob3HN2aZLr4v9PqbDAFnHQU3zj4LEfdaqZ5iqXLnuXLWyHLB1wPb",
  "key28": "56RYZ9UH3ZMA2FYFbU9LdrNQbuH48BnxCn4NVK3xmybLLj6tUPRCAnYBZ651vbKzHAT2262aLW1pzmG6ZPvAoCNs",
  "key29": "Hx6779pXYLKXdJ8bQKGcDATgKBg3Gcs5tppxJdojxyXyZ4x4wA7GuBsDZsBbt2uLyY4dAMX9Jm1z4LaD8Uih7W8",
  "key30": "4W4XYv6fhvURXhpjy8FRqT3PC8rtdvgUxn8LwYDPKswh5yA3BwNcRjsmJR1dKVkB5SvPXpygZQz6BawcY5wuWPiB",
  "key31": "41EKqLZPiJR8r5v62PSPwy5N6Uy3CoM2WHMKJbVLeN5vgYbYzp1gWPiap3VGFb78AHdrD8V6J2sv2SvhRnJX85Ly",
  "key32": "55FkUGK8fhzZw9kVJQd6wD3K6GYKB3vEpdHw5bkgUDJLc2nbpfagPMeYQiZNEigHzXsTDFBM1ZEXrmzRbU8M4uii",
  "key33": "3Mwp74LBa4o6jevWPFBs4yQqMhrff8RYcLnA1T4vWNTtMDeF8E8Ktjf7qrLkw5Ubq3KHYUYyJKZenSKZKHzEazXf",
  "key34": "3ATdpGZ2r1JRHuyeRy5RCM6G67UnMjMdLqszXvJNNSXNzCZb5197DsYi3amAGW1WoVCvPnH9FC4xBt9kSX2DM6zy",
  "key35": "2j9u4aKauggCLuKaBhViZTS6VVW8JdvgMTbSJ6V7Eh6n1YW28wRoDAn7gKshREQ69usVejgQjgAxG3HW6DAh9GZW",
  "key36": "654KEx1YYMQ1YWgZ69BkBz6o7BkdEXRHqLDvD2gngyh4kKBEpFfu8W5Q79ayLuFxxQixkSqrsF31fzUMK1CMxD2g",
  "key37": "5mxVySY6yegHuEZzhpc8hxRqyBti9uZ7NHGKctBjciZhwLVhaHQ9SJohCpvvtjaguRq1wSQE5GnfiXw2WfsRg9tA",
  "key38": "61SnyzbX6PzEZQpNgPeND2PruacXZQTgStqJX6RFbtxSmmTas1tpoFSSrshQAqSTGehab11FmJuTBEZfP4zUWcsR",
  "key39": "xx3LirKaCQfEhw1jPdTB4xUaWz2UoWpZnwemi5DAn6d8FmecyEYqz6hvomN9HNNjJxSEkd9hG8xkwBmKA9bhaaU",
  "key40": "KTNoSGpqs5uwTAMTDnZAC9jWg3Xj3C73Y7iZe9o6m78zaDxGVnduDeBsfbBTxB48i52ZDDeK8iSnSiN1VWFncXF",
  "key41": "H3dk7rbt5cUwJXyfTFkRTZt2A1bg71gst5ahrfa3M61AukmHA9KzJahpPAmYMH1QTJnCpT4Cadc1rM63PwoCq8B",
  "key42": "4gJdhHmPaEQTZcCGKZMubepcD7jBvdE7pQi4fgCfwQfwh9iE6jgLuQmfsGeukgnDqUK1u5vcqRBNMAmybcnWtc2i",
  "key43": "4yhrNMXZgsirhKmgDWzDD5VDfEAi5isLWL2ZfYPiSMppZZMbL9Sbe7gApSeQJJNac7C8B8gTh81mjMdCJFN94afK",
  "key44": "2HkWpbd5zRCALFvrPd7CBG6T2PN1W9o3ETS95dBKPGDkqBtskxs58QFSRkGHHW4FjMRDrTufvSTT73MXpXTwuYrf",
  "key45": "3jLNr2PmBYWWbNqktfKjwzra2K2nqtFtqQprgazKMUZGK6CkuPwgaup93bCEVnCcEfRcvTHqT3UwCx5HQ6pubX7q",
  "key46": "5CTSR7hr9VUtUfyiGrrxHqd3bQTcArJJjQwt6dod1HRuMDoF4YXQQW7tC16JpBQ9scQtCTAFPLuV9pij375VyxsU",
  "key47": "2irHrcN3c17Bz9GsNqaZttV7RBSwat3dYTfzE96arZDtL86fCM9MgYRdYbj3jVpFx3KNJUG4DvBBg9VUjxRx34Wg",
  "key48": "gSkHeJdyjQXibVUjvNoFnADJvYMm93ae8t255EF2wBby7XReunCxWGSJB2CaQgZJGRcmPVWqMRL25Eab5ej1nnY"
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
