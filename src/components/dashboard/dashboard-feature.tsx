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
    "23Fektc8ivEhbaaYxa6WybX24cbLuevcyxPwR9fuL9PnN9YeM2GJqrgPyLGBUdE2oJkgyLwcDjehUxbt4TWECWcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZA7LeFWuVdfpC7gToCDBdysdSfRdhbW931GNhtgtRrVGLGWyGTQ8yxWBd112pbWoEHYmB1emBwDZ9QzERFiZQYV",
  "key1": "5R41SRZksvfoGkNezHBKiroQk6qUsPWsmvvjqwGS5pP6W2zY8NMbyjU2zdRoe3Tt1jDfLpLU4at4dubYK2DBpy3U",
  "key2": "4GywGUHibF9Xd8HktQTzTenfnPEHmPVS4rArgE64AjMoYm87PgX6jjYtyJd535cyornkWXewJ452f6APn4kWkHVu",
  "key3": "3fDx51fXPBKMv9dm4s9DcZNJsGEdaQzLmRWYrGHhytgnAJVW6TsXKPBigJevZgJBmC3f7YYJF3ana6cRsC9PcMcv",
  "key4": "2hFdTuv4dXrmCovvw9vsdRUtVKr92gyHfjtsttpER4hEwwj5hgZNdHMEEDsvd5HmeHRStsqW2EUA9wGNQdrUsghR",
  "key5": "4ryzbGjf53Tqy1fqyYnUo3RSKgKtxHoN1ZHoTgjhWmKuTvtMg1z4nsLNwUZasH1c667n9WtdDwVwMK1oAGuMKAJQ",
  "key6": "3xmJDuXGqRH2iduAMgH4ZB3aJzEFaT97zyDQt88b2N3duyV8NefAiHeuBxLVtjzUQ54XyL9yrox6KvxzpdZyYUVH",
  "key7": "2JmsUinx7Lkv8qktU3dkxGpoFw1BrVPdBJFp8qiPxEmWB4YxiDTWvWLUQ5Th78bhSNwukfWRQB7T3SjhA95kLAaG",
  "key8": "hqCmNNRkT5CkvFUx3RN5FQLf8y2dMHEmZ8275Mu1Ug1yrjFcNDPfvQnySPd9gh16vRTHoVqxbLhzmiWAEsqUsC7",
  "key9": "5ZZcN3vwhSseRvd8Ga76S6SAy5h6zM4nFnB1YBDY2Luto5B3RAwgs6BiP2NS84a8c7Cu249EqkD66Mzeir5T45qC",
  "key10": "5c5v5eWjFJvGt5q6pgLULTAM1G9sh6z9rhGFik5A1CmqVeHoiwVNBjM3zB1rroVJj8qaTX4ek8QGTLvszpJzQ1cq",
  "key11": "3uT4vSzfeWG3cNTovc9rn5hXH5HmEgYJzpowrMQcqELdeurvvT9DiVk8QcauZzZ3XXGqbgVM7HkFHBKFsSsgdEeZ",
  "key12": "5iM5Xfr2CbRzRfXevuUGJ65vvRT8pBkDRmpL12N5oKEcZ4XjESmZwpzMMWDd1LE5V6ehcDmT8vE8KdVs6cAd9Nzi",
  "key13": "4aX96QK55dHsvMZNmvrxU7G2EUaK9SjPRB3W7SGkRX9RNdWA96iQckx1FDCsEZneeiisGHXgWaZR5kGXQFkNGY8D",
  "key14": "493C4Ka6dGHz1biThFT54hgxVR5BRuBhHDugbC4aug46YUKhbQvUUkUEPnXgJJrRnuP84rZHtVVPeLz6DfMvw1uz",
  "key15": "5QwvYzUynL6qZdqZ6eJVhJmQfYrWkowvpc3TXsBq2i5UxFWXS4N6yyUYZFLXzcLTXgVuajQkCBwBZbnyb7rbMxSh",
  "key16": "549mSc6XbQnytFKJVBbVxCNhG1yyq7hygACNNC3AAu9Gp5ZFGxShkwfk3MSpFtzYjCWEg2WrDpczBnWkJBYyPGyn",
  "key17": "4FB4g8JKvu6cBhPpizPYKQQsabxHJUbDLAph9vk1LDXnjCf3frydGzmnaHcXohJCfZnUVVPprBzmHGaXcj3ukZS3",
  "key18": "2cMJyMMBiEgUh5WKTuPrAndsWQHrKnpKCv1KYrFBvrJWMLenExiR9cRkiucqd65U2EdYSbGb5QDMXZ14r2s2H6wh",
  "key19": "3jH2esCm8UCGFHK5kYESydK5CJYcVtdWtSjb4NiUJ5Appu4Xsi8QaCkwtdbsQVfLikv2xm67mtJQ5VEAKDcAxQ9p",
  "key20": "228qTQKw89ZeU1xjnSRHJL95LiBVGma7bT8HECpmmwipzNxDHwsmAnEjoGaqDygjNg4URhaywLzXAYkX4bTkhPP3",
  "key21": "2q773LTPrwyyf4kYpaNcaqwnfKt3z6Wej67LzdH2v2cFKTxiM9DLJAnLC7SRMEyQhg96uxg5iQNdPEkBbkPwk5S7",
  "key22": "42skZjbqjnMirxHj4hTvLYA5RPzcdLgyMLrEMbuBiTeLv2ka7gebdegmDG4CHBXTL4FiER3CbD9NbH88Zhmm3hLM",
  "key23": "21eEcrtp6a9QVNZxfDAH3inHa1fBqdg5JuM4AWWBEcYA6gGaL4WBoNYtjw8xHmqwUptRAq33fWyYqv75s6wgPrB3",
  "key24": "4D49fGbYuDZjWp5P7tgXLQjGusNPYLQPCNhuGK33Y4C6iUcF59k1GwZ2ZmmvwuQv6LxpeSThAbEyaeChhvK9TxFa",
  "key25": "3pPEh7CW8Uik6gZJ2F7puAzi4MiS9uJ3TJJtmSTFhDXCD7gwDoSfHq1oiph4U7JYw5BjWtpzMvcWCPsvVfa7L7ob",
  "key26": "4nSQumjN2kHWpmhDxT2xsWs9yqLyJnwpNmzEKfLiG4aXhzVAhBQbFjuoaJZFcsTQ2EkH8XWSQFfyYnZ4bFJLYQeN",
  "key27": "52pRp4Ya5Hhfzp1EJ6eDV1F2o1MheshEkKyxu59WpDuHLuj2hYeRVeXhu9YAzasWoXvpXag3QRj89xQM98FBktup",
  "key28": "3A7PxwbfNpPUNpPWeDoKc2mmhs3npbPHKo2RLz8tha9yb6EqUSR8kS9Aq2zGF91JVW5cAX9uDvBfsHuH8nZGJnVP",
  "key29": "2kZpMeh9Y1HDRKkuUX664NfBNGSztMGvqqyX9hSUpU9NjSiTyJKZZuPKD3XPrwjv6RJ821pkNBtkAur6DNEppPab",
  "key30": "4xsYYr6Yi55oWnrH8cVMhKWAEZtpwwrEbD9SpWFgoBLGPPswjs4n5mMnNxPr9nddfYSffL6t2WQbXUXhCDEcBibE",
  "key31": "3mkRkiMcx8ryg8tyFLcq5N2s51KWDWTTJmv4WfTGj2JYmpaiEgY8fzSm1qQQJ6QFPoSjKRzD1wEPePe4QrmEzSVc",
  "key32": "36xFDnA8dQpKV6sqSaacGjFHCCxtfW3SaS47Ft3o4Y4inEndaj1vQSrb6STCDFGp34Nna87sXTD7XWmqF9U8Mt5e",
  "key33": "EEL9LR5UxpEPrhAYa8bFjrdHDaTktQinC8UGuYjPMaoTYRyLzfb1CX4awot5DjivzRHR99EfqKsSTWuzwKk2HmX",
  "key34": "52fWp5XVRBFXFd8gsFMTNULPkpHdUN2vdfo2p182WrimEdXLMGvwNMReXppic2iUw3xdYmM5xE9qt8eZhktjFtCE",
  "key35": "d9Q8dWxA9EJ2mggkgqsQU8ExCs1Gc1tPNrGnE8VVTXT1ZS2H3KhLkcbRg38nV2GYT6p8VjGJrA8xybhYk2hhCja",
  "key36": "3TfmfsjbrCpVzySjjzuyqicLJYPCmNh7FXiihEfttNS58rdswVrSyaNZFG3NXyZjRBvVmY9QYnhK34t49sd2JpWN",
  "key37": "34B4C4DXGmZdyVzmduu1j8oHenVbQGvWcVyy1j2TuTRsNnRi6zXsGS9t6pAY4QgEtrKfWzRjP7oVUpUcCqXWG1wU",
  "key38": "3iANiHnJ4gNfup956jaXqxJZomehZd379HGhL2QXvt7nUyzRNFBruGUBhPwkQwty8Qu7UeBGGGmqQTiXk6nBM8Gu",
  "key39": "5ySsXH5ydzT2sWyEiLq5CWtgsJHNZBL5aX1wtB3LF1Y4nv5gn7gTjCSc6Ge4KSqFu4tSj1Lu7bMjMLmCe8wvG2a9",
  "key40": "2uZ5mF67xp4mM5ebiT1u9PZTf68KnJu6uAMsRcbo9KEnwYVRdTyPEJoATmQjHyQgAWLjoV1XaBhorKkkLTcSpcuu",
  "key41": "4FuoJ1TwetuyeWJMVq3fym2QhG43QRSzkVA9rhkBfrEmyQo8sM2i8F3kA9R1JEG1YMoCag8cN3pARBmstBhWyFPq",
  "key42": "s388oMnbeHCfNzW94RkneuHBiXecKzvnRRZkxhSUtRNCZjhvw3E2JZJnLvrFnRhZghR5wNUmU8LwLWQR7Zp9ZXh",
  "key43": "4WgFMZdZA3i856kDE7LxkzcXkjZBEKZcYxfxVaK8Tb5zPVXRdgfKmfZfLB8u9GeKRcp2F7wJJsdEay93SmvFw197"
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
