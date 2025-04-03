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
    "2N8UtGwypxywK5yLb73LdmW6DJMHHFxB9K3r5ip6QZJWcV2mk7dV6oXQGDEHeBhP5hJ9dPBwcmNE2ZXNNMF9mTsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66w6x3skR3tPgfbtUSQ9WCtRhxh5Nbevw1XLofP7Q8bPr6deA3WQrspJCcPFgiZgPzKNrfwjXCGcdtmNMcZjeFiy",
  "key1": "2csoGZasasuQgUsZY5E5HB6LNaoJaxHKLUNcmmjMoZoR5T19FmMDnVjQSquNVC6B4h5CYQfE11U4kqeqsDUA7gSP",
  "key2": "66B3XTf58GHfCJhCncWaCzjxZXvB7eFswRnwCnvZCvRbhsSoDr8QN2iXT46hGXrXUPK1e4KAveDVu9ALCPsLTR1h",
  "key3": "4LSQkMAstB96v3cwHKLqpqyBnz1Y3TMwLxWvE1ZZznadkC5PRv4MP97YjjNmhNAjoBx2reukGxHVQFTwL2S2zjBs",
  "key4": "4nRsiJMLCd3iHbsWMbnbmkwJzMymkGszsmUNU5KPRqAFG2bJB3Ksiv3fnXGqvq5qDWBQXa4qxab2nBn3dtS5mPa1",
  "key5": "2sJVRcjLzCwVzA9K9HYLYtAo259TdduEkQpwWi8uqR5ts8yuEVXu74YuQ7rB2hp2iP62ieQr3XjF6FbEWziimjw1",
  "key6": "2QJw7QT82WvVpABDqzeKXspzVHyHrKHoDmdytj9hfrAw4qzqAS1YmJff1c41bziHkkXgbK3GHemSJHp31LLBev5e",
  "key7": "3kxBBtAWCx48jPRKYuUDhEBatJf5eAmR46jEDGgtieLrPfbFYZ9RF9N82SAPVHoYZzPU8T5FhBg3gjCywjJZDFth",
  "key8": "5uXA9g1iJeVSybrM4eCHfMjzhmXMgwKoV8zx9w3PetztRsFFEM2kXqKYj8j2uXBe2gKQ4BXJHr49nK6uV4qeBHKX",
  "key9": "2Kqdk96xAqiEHN77yJzp77UR7NYJJVbrBC6cw6rxsjrtjLq9BXRyESPSyiWEuG2q2Y5qtE698CtTWbC9CYp8wXNq",
  "key10": "2yMHEhoWFmPfKWvZqAL4NFB2Xh5jf38Cn7etKuw5mACe72dPwyYQH75tewopbP34Yf7V6MbC4Xc5on5qJv8vHYjS",
  "key11": "5BL93Eq34naxpYYbXEgNwQjBY8M4DRhbwLe1LTLTfmAjK3i8gRPF48RFWcLJAG3kS76N2Dian4ZviyZvEWfoUoiT",
  "key12": "2okfftwWitfZ8MqS7y1VayvzEhZHkSAfMMLVzUPJUvM6fpGiujL7DxujheN41hdZ8NQj53EiEQVTDnqujXDWrjaw",
  "key13": "64eCa5nZJCqQWbBMGA65aD4mRr5xx8KhrfXhcjDvEUa7Y2RwLfcwhV5P6pTLjJXs8o24f7egcF8kMnKsYoK183xV",
  "key14": "4V3y6TQ6WTwSTnKvXDbd7kok551dbXkN5yetYb98QzrYruXahcDNd4BcqMvePRJioSzM2tvUvDG8ZsjJLLwzez8P",
  "key15": "DB5qZKmGRp6AbnAjGn5NmqpVxKQFWKbG1o3YyjMc6qPvhyf2xx1eGbokd8jKwyMUBoMQU82D8VoDYFNVqeZZEgQ",
  "key16": "PJCDh8L3vQp6ERB2PR49RgGBP92JNJhYnTNVfpv3aEYVJhKNqVe6kiDBX6HTdfpXHfABe4PhFLUbNNwYE7vJLFb",
  "key17": "2WMbNzqLp9XvUgqjD8Bm46PKn6T52sAudNc4pLTR3o3Fvby4mbM7YhK31MBc1A23EuWUke39QBQS3w8kB1Uw93Ex",
  "key18": "2EDXGE4AnzSpEuY4G5dvU1qox1oWao7yuNKaF1krxN1tLmL2vDCz1xjqzxqNbZfqYcojLSSCTHLkixUhv3mBfcjW",
  "key19": "5N2tAvWGPrHWgrTX1LGmSgeJ3nWHjTu2NJGmLvrJH5EEZbNu9M6YrUtgJ8uY7dgAtTCgzTUJexYNcp5u2ocBugCv",
  "key20": "4e1FtBdbBtp6A8spuzLTNTEdp5BZsm1aDvsN5VconmF8PmojFruo69xW91jBPthPuw5MQyAotcbF1LTsAiMTXWPD",
  "key21": "4UTD5xebbxnbc5PxntZKFyR8zPGsAt7wmsAuGcA84JQverB2Th3FYzQeGtpTQNndo9vDm6Egmyx8zrNiEAoeAVDo",
  "key22": "5ApLzu18txugbVvNunyt5sSFxGseZXCqXrpm79TWH7wAU6jmQEQVKTwrBPZVDBHRKwVdS7PcM3VhvfB8NoKvZg5j",
  "key23": "2xLMKYyJYvnALGvRfHG3m8he58MLYZsWhCd4SZz7sStLAqK5XvER9MiedaiKotf3xdfA8K2yMQHPmfP6iqMJmGh9",
  "key24": "eQPi88BjZRuDbAin6fPNRCNmnzhkkpKac6trHYNYptsjCnVzyKSYfEhLHnMMCgusKL55KQ2MRxgBq6GwAfczeAX",
  "key25": "5K7UZa6DVniqx7nTPQRio7vpvGEYRzgZpv1JdK5qYgtoa1FsTNcVHtm6jLGyHTTR3d7ubaoMMkdMqpMPGDWYbBDp",
  "key26": "34fHZTbPzshEEYDiQRqZCP8sFZ9bHemzFjJqcf1bwRr9FqBEHrLZFjiJe8XiXBBZHgdsroE8i38tLfS8WaokQPxP",
  "key27": "52bBxow9EaaZaAhumEKAK3DeiV73AZ3i5xJLUYJRpZXRQhFm8sueUXw9JoeP3hkwmvzYwSEPFiQMQSuM1ioYZqZN",
  "key28": "4CNfbvyLRFwQTVCpnLo3CwVWogmFurtgvz6vCxmqVDdjY8sKDou6ZuLrCQ94Zdu9WF2pT2FRJY4gsJLNoa6GkpNG",
  "key29": "ixYs7wXaQK28RgyzExfG5ffSW5BaUEJzTGofHYEJk1HvFHBq6Cdz56Sk9hx8kXxTvqHDVYfvVVs63QhPp3AW3NM",
  "key30": "RqrgCu8s8Wf7EtiBL2LMfERNHqXWnQ9fXqxjkx6shsJS6ksUydKkfEt5BDGwunNC23xux9YnbmuEWVhFLenWq3M",
  "key31": "Ssw8HEftQUWH6xC3brP3bnbQQd6a36rDLckxcgFhAYK67m6z4pauZfSRDeqaUyQQy6wBnAxB2dVVuieUfcrvHpt",
  "key32": "2kdkmDtaPGJ3tUcwxbyHoRBtopvP6y4e6hkLHLyg3gx6xEhdXFefjmhwh6NzK897YieVHFmxjbdSem7Qe2DGBPsq",
  "key33": "4hCbRwChkdpLCbrXxcFeFVDvqBiMwhJ31J8Gdd6QhshwXAkT434SsandmxFR1bByaQKTuj2nSmMQQZNhC4h7apED",
  "key34": "5aNiCF5GQpxK5gKk4t4FVyeNf9DQKfQvMT5kH2tsVfVk3fXnBv7Fnj22M4pgaAdw8Tegk1kb6vbzfR3E8MTv3bzc",
  "key35": "4Py3xfQzjCGjo2mcXf7yiQEruT4RX5AV3in3uiDRyo6vMJAHD6XLL5gWnoTzp2K5AeKKFqgVJ37QP74yGZ4mXKsT",
  "key36": "3E7czxGh69uwp66E2rakfC6VkVPjm6qEcriGjr1aoTPe4FzYFEyswCv42qq3QNrgSaq3WL16VKiZJHfjkhNCYKTG",
  "key37": "2SkVCPNxUyHdYWFXXV9uqGMooof8P4rDEdsKt9KciCMbdmXaqQgoxfYWt1wTZcFfjHu1vFvrN58FzCPN7gcpgFSM",
  "key38": "3ctaBzyZZvAFHgj4XevSYXT4AZrGfryPpDooCz4m7vRwMe33S6NGDo2ZA7DCBEqiPJMYNxrJZVDXVd1ERDF15Fm3"
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
