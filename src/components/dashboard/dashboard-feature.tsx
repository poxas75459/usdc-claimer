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
    "4ecq91YPV3BPiHqX2M5xH3AzsJNKYLxc5SSgfCrAYsfP2Uud3w3jsoiR4xCY5dKw7He9iyd9MYvFiemrYVBKCHbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tjf7TRy5nWfDUjhfP7XAQSuFuwKxjUtj6RJeDFNDwVKuJ2YUoKKCGevdJTZhAWfPiHasH3FGvREGUDP3u2PGPp8",
  "key1": "5Tp8YuFDJKZFuoTTmZg2okcCZEN1uYfKYQH373F6MtNCTvvt7e9WCmApbTKJirDPvdHL12LWCumtjW1gGyqyGXJM",
  "key2": "VfWinieQX1Dp8qbffvMjYcNKnojfbUBD6aa6ppmU2CMs9SgXo719ULf59vUwPgm6hX4V1i2j219mdtLLj5of3Ey",
  "key3": "4VNf9JhzPmwqMKAEkqf8gzK3frwrnhkZLBjptjXajgHDskUi1vR9oxrk3pGcJofVtb181XEtj9KcDHAgrH3MRhKU",
  "key4": "3LfJ3TNmVWuqM8FmL9Lk3zaZEJZtDJSmE1CLvVepRcdmAjpZoLpujPUG2N1i6C5f4GYC4TY5aGWw5XLjfBMLwtYG",
  "key5": "5y5tR1EVn5T6acJ9tm3xAE8U1Nc3GNnogMNxJYf29mRPXyv2MJcvKf6zV7tcpnv5ug9DaP7pCV5VHhy5anadEsxs",
  "key6": "3coBmXYNZPDEvNCY8Zpaz3HrrDY1HjttQsvwBLmckUoMQLGk9pYPr94vLKHcoNQeScjUcJzU4TWfVbxpLsDDap8E",
  "key7": "4o7c2m1DXGvpdj86AVDJGBT4yTEnb7Fq7rL3cCJgkXo7YYvv1xYiJHthnXbtpqYb1FbqGhs1vsbYBn6T9DPHih4U",
  "key8": "4Zu2JwAJsQfxuqyj9rZjQsvPr3CQx1bT8muqgQc2KBGCreH7qryagLgTdxZ8T2FxVs2Q4wN1a12Z6CfQFbMgSXQ9",
  "key9": "SrCPAcy8Vn7hG9kTEvn3mSv8TjQUa5D5HRYbcK3nwPdbgQKcxKK549igdzg46wB2mwLvLZnx3CFHY5xkHfpLSFC",
  "key10": "2ZEnb2BnS8tTSq5YqnHibS9SU6eZ3AkQ4mTnJeEjjYo8NGfaFufWpHRfDvBtbR27jRwyRG7fC2DvYHW27W5XFKgz",
  "key11": "3uhk2eNzfqQsjoeKGxpkG9RbsiPx9RTKN4g4htV4bB8mjbtXUVYsGg9FHx9vxP2uWiMeNXWwfwMQQPSJwhEoVnzX",
  "key12": "61MchaNxynNr2rC7bjsgPwtLrExfV9cqAyjYVFn3S25Q7xdgSkDTqGKNZtrCQeSimr9Ybx95ChAsoVDSyDpfNJJ5",
  "key13": "VjMRWQPyet7V2YCQZXbaDXwhJwxjnBqsuhzMiYdVMEhmQPBeQVR2rB3UJQk1d71W3WW44pCjwvk2LqbY75kWr1P",
  "key14": "4eSQzwWCu92agNdjVM5UqBPwsFrAsHiNKBA355XZnf91AHucE8m225DviLqJbvTzHvcXBazndipqGMVfyVa9n2Di",
  "key15": "5TnCK9YpEcYdzB2q3GiW7f52j9ugurfHxBxLTBD2yxsRT8DNCackScqCyT5hP4pJBu5mcAnZWXrUiKx23jiFZRFe",
  "key16": "355QC8656fPhLN7jPu4ceMRjBE54U6Z29B8NdcjdVSEqhdFj6A2u8gji4eETuqHpywgVY2dnn8sW3USgDAdVbVyu",
  "key17": "5p8iRyQCAH1CmhStXC1STgWaS6JcGhBKEXMyeMEoD3d5w8YM7yGH8pzi6HQ4iWuUKgqaMYdXhDnBsEkk2wcYUZMe",
  "key18": "4nXynMQchQ3iDiAVfVnLLqy6Yno1KoMQtnzCcP6fYqFLDDGzFDyag7aZnj86dVawwGtTrKWp8GkcirsP55p7Kera",
  "key19": "x8V62nPKZnXNUjokeGysTvTeSGp7wnCM7xPDD51NCddovH5Ez5v67UFEQZsurXG2tDRnmBMTqAMbuaHV5GrrNpg",
  "key20": "2kZ9U7MXXy1RYBsaMUqHwKJ9P1Ei8b8pmpnHWGmhjbmBe7r1yKoRv4HcbyjGq2cnjDdrTGGQfGX4y27LCQ4cbU3h",
  "key21": "2Psjiy7UFAURW7nXDAqevZrNotMvXSYDwAeEpRwK42Kiz3v1mnNkXCk6ZSMsgwCfk1Tgq2421kGRQFXguD77GoCL",
  "key22": "2jHFhK7JwS5xT4BxdjW3aZwLvJmtBr2T2juXP8fMoXj6iAR5E5ryyE1ABhP64GZEynY4BQKKw7MDpC6FpdJtV2b7",
  "key23": "479Xout33EGtXt7K98atGqyGeQd25CTP5c1mGjceZXZxJ7dSKZq4S8SMrUFSZi4MyPQRAwXEJjbNaGygVK1QKp9q",
  "key24": "4NAgzouKTGbLmBNifjmwiM9itbKPcp6r1t2ahcApJuTpfJzT95qfLcxZsgz7ptQWHC7oyTn8Vmyas4GyFZx6ypJL",
  "key25": "2GFuWxX31MhstfLRJWLNT8wU3Xjq7Ym4odCtub8LYwjisBXNnVkAvBMwYKQ4V4mT3BCTua2yvN8RM1w91kGn4NUn",
  "key26": "3Pjckmm2Y2sDRKCGu35Kom7thDKXgyGcMwF7sRsBunmiqqU2n4u7D5rdRZ6J2SRYcV3edKNPdPXpSWzU2BDgXx3P",
  "key27": "2PtrhAmMADYgf8BsLV2rrbg2aGYovLj9AbRSrePVANWFNSsm5uJ4Lm7JrDLMw1Uv9gBNmVMkVLS8YQRjLZXLmXrJ",
  "key28": "2DcYJmptvnhYuTi8eYB49J832vWxAg6qwCVn8QC1yhgqXQgmNzEnvKpXkDAUgx7dpqJVv21p31svHV6ftQFMMx61",
  "key29": "2x327ruKjmi1dnZ4ewcMXxNHWrs7RWjy42uyAyxRqAjUNB7KEnbyUgcazTnoHFSqVCH7dN6kFXmiBJ6MfCMCKYP9",
  "key30": "3iEdmwrpdpKSVXjfyvfuXyidDQu7qDa3xaWmEk9eNFK98uwT5TKRrcpUjgQwRhsVzY4Qx7t3FWUby49K33qZwz2z",
  "key31": "3jY9N9XUXeN7xA4R3s7jNAArm9181RgNe7A9ZV6KW2QpBQywbkVopXhfWmG3pkMDAMKPbDwJ8Te5SLUBAwqEuYU5",
  "key32": "5p3zGBB1JakcRH5z8v9W5xZfXicqrfBunXcTkV769zuscYCv7u13X3azJMgnRf3wSoqFb43fnzuLd98btDLVvwXA",
  "key33": "6sGvxaXYcToyitKB6YneX9ztJdgXSYc6NFiNEgLdiPsB135KrjXh4CPN6UFfzEzxBk1dEEcNyrooztedEJxrhUa",
  "key34": "2NKYEDr2tEAEzpL9A7CFQFy7iczU1MBCWhEJvoo3cDASuTPfqR7hzbHuJbvTp4LN7XviW1kZM5nXXPUUX4ZwfZ25",
  "key35": "3kAz6SDcNJkZUXxfZcvKqygrNDx9xT2GXQUfYr7HzUFmqQjzBZ7gLkfnEkKv2UUzVxoTcJTBdsqhTS5fVygzofDQ",
  "key36": "91nMa473k8Rs6y3mZcLh5SM7mNPFo4kcLdisXbeRJQQii31hM3VmJwfDEy9Sf7Q4uvFGWGPJu3UDqrjC12pXVb6",
  "key37": "3ERUaYv8poQo1WBmyHwTkQtfr7gpUSP5STFXiXXUxpvoCgX4CsZhw9acRk3UFzJqq6m6c7QwFxG9tufj97AGjrg9",
  "key38": "acPPKwDMqYBbE8KFQsh1oxeZypeQqJWhzfZZeSkB1aYMBaeFk4qzheRiWqGDvVgsVQKJQCr5Usrt3Fxxk6TGNLM",
  "key39": "2e7ro9AQ1ZkjhP3U95xA7hc2u1oRsnUjhhyhRa7dkNSUm9z7Gq8i4LMg7ZLXTqibQVLTEbhCdtoRRzvLpf5RR5kJ",
  "key40": "3uPU7Z33Q67d6aSvXbnnWsBa8MiW8THuumw2oyV3cUqui886iTh243oyZ4r3sUpHdJUiCGSyRjGLXUjCpdT4r8zT",
  "key41": "2aqEDXfW1nS56Nexpm8NyTjQs2PAXAKsyt6jdp6ugo83uPFKBWy9xkkk2rTYyLwaKoUBVNAet9bMSRJVxrPej8aq",
  "key42": "3C2NQjeWxD68pK64Y8B5Qfdh9kqJwL13wwN91us3v3kLcM6nkCi1JUGCnhLMEqQDgXtRwPoEHTCqCz6nxAzvU2v8",
  "key43": "3GaVAYUoR83eWkgewTiDvzGwf7EnCqfDJqZWswZY7n8ahc6G9LRc8S4HSguCBFYkHnWrHf72NBcsvyUj153KsoU5",
  "key44": "2VSVDnTJnuY6SFYy86y6TKfYZiTzzj65uBPbkZvxKpsu8Hmfk965xjgYWSTPeSGiRmJcMRk4g6ac8zoyV3soP7Mh",
  "key45": "3BP8SyJNevcJ8Au2GRvTkWQ63Ho13oU8XAFxkn2xYKS6sYwRAzwepbTX8dZ3FueXKAr9rmudNDE8np8p6ZKez8Jf"
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
