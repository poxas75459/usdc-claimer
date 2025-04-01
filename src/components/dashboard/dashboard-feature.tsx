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
    "3wV74oZt33ZamRTgMpAeeFgh3MW8F8o7DKi7bgLPk4xytQtHCDS7cjHCEKttTVEBFTYYowtwn97VwnzW9cjLqe3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1nWGQFedLSmNSMEWpp2DaRudzd4mJdBYiFiDLYq3iQPru57rjXuPsciNDobMwud73BiCx4qq1E9cSWJgkA3YpM",
  "key1": "2iQxGXG9D6cWbGeMZE5LhP2VEwFwyVVxFVmCGZ47jtbV9VkC9MzRw3TKRpFRboZDcopSSWKNjXwUvDZnAsW2Qut9",
  "key2": "3Z5dqNnMqre3hM9PBZp9zcPhwMVbWCMfP5NqyHgyuDnHE1RBrzJaz5q1RACgadBqGkMen9wvCw8heaRc328gUF1s",
  "key3": "5dDVpVfH6LpavGieD176bBcLC1vLNxbsJHwfMFLDHPAtsf2LNQ43MUjWWTjUc5DwMWUC7LKG1mBZfgFQWJM6D757",
  "key4": "vRH2dsyhtvmLA7sEJpDnG9u7CJp5t4hjKryG8VecUrz2BXzPCR44F5sEcqavWXbfZPeg5JLzUQZaB6DPAkHKS2u",
  "key5": "5Ke7vNEevefrnrBmE2i3eiJ3sfzUULAo6HtdVoqG9nCwystiNuqF4pDFvgzn6nbVB6jsntAAZXijeBjKya7QCbRB",
  "key6": "5cgNRt6zuw5p3LUWbyAzTjyMjgJMBDRPjsNjr2mJMCCKdQk72FNS7v5S44dbLsFVwKiotPtU7di2eQHJ24Ts34ss",
  "key7": "5HYqJZ4gbRFtoWWdhW4x7CddM5VVfjeTYhfDJUmHiW5yTc2cLLPjYdqC61D41UzpPuydveTqWvkHxAGdxqvMBmLT",
  "key8": "2vpFPFsbBibngaYSr7PQdQ91567oJZr9a7ww7xurPvJtoRMfXMFGgsyM3iiywAsdoZzcz5eAMgDuUJzTwuDZkTku",
  "key9": "3oMzyShwR9gpJgKsmkWL1mvPHxLze9LueoFfZzJnPWSu1iZPWgXHmWieJ77H8j3N53r8P1VQZxogUrHUVoj1DG1T",
  "key10": "5qWi6bcWH6iZJfEayQ9MSfdDpCkmu7x23dUjNKytgWYiMNf85ZGuCVDe9ST9syJuFawAKs2iDi1hGHkgirTNYZGf",
  "key11": "3vtGmRo8z2QwL315NMaa2BYjpXr1pjSDVbZqgZxdNj5vMYvw77d5nCTT1LGEDScMYf6SXimkwj6yftjVQ5VZyqkv",
  "key12": "2Mj1K5C3E6JitDMrzjYjuA8bU2AsPfw3YriSa2SyL6dvk1oH7dyxpL3cDTPXisVzsdsjwxC895Er4goLCmrfsLWt",
  "key13": "2kzFezd4KqafJXqKQaS8XNaxQ4KUVXDUBUD579DtuMsTDfzdomiCygyGqT9u6Aes2mhFbJrLZVVn4K4aou2i9Mok",
  "key14": "558raDv13zFankbPfHTEVDFu8VYbgpkRtSMKH7rqBQR4svz4AnbQxgagxVkMSi9QqQn6ifCcQkSwgaM7uYT2kQWq",
  "key15": "2zMHntCRZegmoLtKSXwP5icL7WV973SnAnR3P3tDnm7KYyazt53gYXavyGj5SXAx8yiCBvVmHogbtPYexaeH72Vr",
  "key16": "4hFaRK1nQWs1XSnwC36orgyopgvoKoueYDA1ogPqZDH32V2T6ezskKMtHUCoxWDh6tnbqNbrbwCBGgE7zPXqSauz",
  "key17": "39geVYQm2mfqLDcH32mEoopEiNzg1JXPR6tbnHKXo5ghGuzcnXJiWyHmiEnDH6GVVM8gddWtaY5JHyVvXbuGxwiH",
  "key18": "4Pa6qTWs1ZuDweNBaXsTdXJdcDkeXubz2SqNgv4wrXxtaWXWGQpoTkRFsdDmmwqKhYXR2kstuSHgVrL18nRJSmGx",
  "key19": "27hLrHSvZybRnnx8UTfQHTtmofPq8SPw8ALaiVNXbnzbghHAtwd6XZAwxWCU6LSM1hf4WFMEG9YrYY3mXZ6vLCb9",
  "key20": "2NnUcC4f61HWLwtLFquw58vLsQ2Le2t3CxoUZwxQhBQr7J2M38coRBemNDguyuBX8PNHnrPvDmRAfRv338CZUTF9",
  "key21": "5jwN7Q1N4iF9Xy19f8N1U4sVEHjHddx9HNdZoXRpR4i4ZRn3xdRgd1yAaT2cE2y8hEr9cc7rbViseyGZjkVG94S6",
  "key22": "rzb44u7y1SgqYPf13bAJqd3jqdV4vQxENCqcEUGQsUFPiofQSAeYhQLJXKDHtQ8DoFcynLtzPchpLwW9g6Q6ys4",
  "key23": "5EFqW1zVxUbWgiuHod4LfC6kt4ocextc8oS6HXu7XLJaRV5AAs43d9APneVwezHkvJWoQ7QWu1VsYYUXuk2ce8Vj",
  "key24": "3pnZThmjvBV1yc62Akqm6uakYjuNj8ZmEyZK5wkqGCUq9jPJqxts1fNhLgoTthvmby5Y3vn6wpKkeHE5DYuo5WeA",
  "key25": "3CvzcLDnQ9Fnptc8J4vPVZvZNzTznppSnht3shMmdbxSVDHxY7JZGjzAEyPoykfQ2jGb7VHqWSa2TMJhz69ZqnwM",
  "key26": "5mxopaKxJNn54Dq8SNxJUH1YNbAPu59RpQqHtwu42tiwJrXi6ykSJusLMaku4Sf86ckZy2vUzR5D9V4FTjVqKkXx",
  "key27": "452EmrqW12WnTTq1gQQpJ59wfsbMmfiAneFatR3c6W1j2A5WFVgGg12pgvaiUV2e1nbRZHJv5wueJYZFqKkua8Wa",
  "key28": "2o7GFj5nM9HrdCQwZAvLHmDkvXqsiU6NWE7fbmBjRDVZLEof7VfsiFsWVJ5m4xhTtvejbtAPLaw8unVroT6DeeCu",
  "key29": "2a27UGTFBWMMVkffrMZ1oKcX51JQxX4T4iCBPYLjHvCjLnbHhwMRM4gMtFHBb1ZqRncfFDhQaBdxtrQBwFEVL49",
  "key30": "4c87MD8wwR4cX5MZ7iQQvoEpvb7mJsFVowWNrLvHFyH1BzMK5As4TZaNdvxLdGw2GaSwx5FsXVobAYaDxxofnyB4",
  "key31": "5LmJgBRzCT8Ntj86oD6G6diwNNLkDvDxR1uAZwn9f8wmaQMsR9uLPaDnSgjvBraZiF5xENqtSeSvuihy11Edq6td",
  "key32": "4VwfyoCoF5gdwrN7GdNQQn9zUp3AAmbYtFdn8hXN4e6CYAVepyMJDvPBZz3Ks6gaikSfNruiRFS3EGcgp2cT47a8",
  "key33": "3n1G5NgjZXuzbiVVEVy5ohkvWV8PoCge8Tqj8Se4jM5fZhiCi19kXevy7X4gYg4L95q9cj4fqCCCBHGNEUtDu6Fk",
  "key34": "348r2eQgBt3eHcziqfaid9T9Uzvj8zMLQArkFG9oQkxM1t164kKHUHDZqtQQYR8JfCPXDyixqdZE437FiYa1B3jk",
  "key35": "2fJJ942VVJPwwDikR6ftdF8c8nA1RuzWMeMYGcGHcnGAsKB4CdiLvLrG1fkot1KFYZJqtBbZ2xkxza5rp1Vi98sR"
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
