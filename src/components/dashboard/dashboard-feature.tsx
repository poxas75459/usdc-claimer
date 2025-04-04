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
    "4o739zWKvRXoKjkX86NLaJf5HQnWZMo5xmyYPC8KCsDPUnvknY7uQwAXctbTtKJbqDNBuJyUyrN8sF723JvWQnDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pu3BEnvSFHXT7BSvTpuwprEEynhAgLqUUbNnnP4xD3z9qD6s9eVFzfvjuuEaQC9Dm4cvRQB88tsBMpb7quPHuxb",
  "key1": "4KL9bVSGx9ErGJSmW7gTLdnqRaaCywpXder4HQ2B2cuCTstvpr5tmhxq1hKQALyPC41rzKvehHiRW5MDQkakFoq5",
  "key2": "5gUyn93aG8UvnzZ6Cngf6RfrYeJGiAimLvrDdg3c5TxvtoJjXjsd8fythumvi3Zsv2SYV1UZnp6bspnGzXgEDq4M",
  "key3": "XQxCrFDp44DNcv3ig4AM5QXEEY6GCY2PrgjDRoaf82CSNAKHWiBuE37BMuYGzhp4UzvYxUiv5JrjfP21kXTf4ti",
  "key4": "XQjAZMrjgdr6x56UtzhxRksb9QvfncqPJ7Y9B8pFXVinNPkTLaN8LdiTj9GiGNppZRrBUGmd9wiX8LS82WRKEMb",
  "key5": "2fYDszMFoxMed51DgYHrf3Y1QJwaUrxRgeRhscCsyBtnHnhaRzq4ak4pD3QAWcXyMpAQTgNdn7c6wEva16tx4JSt",
  "key6": "4kJ5BLGCDGabryxaC9SoNwghGm7DA6uxFKC4nKWsFJ78EVY3hGcArJeVUmMbEJ2vtpasv8Cdab18p9piLtsysnwg",
  "key7": "5uFQQCpWJ31eVQ3rV3Mn38F2RWkrrxCjRtdbC3azAJgfKffHHX4jPGLViNvYcmfChFR4DECs5zyu4pEYBdudXwRF",
  "key8": "44hMQAxXN4Aj76jzX9EmJvq2F2ypbRZuhNC4qjozRcSFyCNFB5nt4ZvdsCNbPddNDCRqbKE4BMb2si1SASWDbxAu",
  "key9": "YrXDfzXcXFfuRgHvs6Wo6vgKRnKWVgDaDzUgMVbVonmL9vMiQRg5X7BCyPo8F3PN9pe7Xr3wTyqg1T5NHwjGzGs",
  "key10": "3w24V7sqrFcUcERr1qqr2yAM8UU6GFkcK6hxPmxtRsiiEDVXu376kuBgWbMRibjDcesfpaq9eGyaK2cJfzVe1Bvc",
  "key11": "4GhgGCYdD5YNVMApPrXzDpv8ZQJsi1CLcdiaoKqXQLJCnEivktN5PWf4fMU7utUujWkKYQDXTYmKuycpw94ij25g",
  "key12": "2oytMoBCb6R1RwKKL3c3zkr2yqM2bcBV97rPbSxbuUV2EYuXcytJHXb4Ndu5exUhUeZxS1A2KBpRyXvwuTfEBtDt",
  "key13": "4YqSVto2TMhgf4PAo3XGpXXWGAQyvH8LVBE7g9zW8q27Fp175EQ5vWZ6p6PMm5Fx81MA3Y96cpmHiz3icJRwSUeM",
  "key14": "4fS6S2PYCXQ3qQY54XGY8boMoMsso1aecrvtHUBSrwrL4utrAxpikshQTWCwkTLrHsx3itC2suJt2trzKWkCmcP",
  "key15": "2rJVAwC9w2cMzuhjqKdpqersdZMM132jGRahtFpKd6fkCNvbFwmWeYWMYf2tHJyu7YBFg2f89NyjFQ69WsMDMoEj",
  "key16": "4gKfKkHcK4WsK3muLXZYpVMkVFeKyoDCX5ctN5pKYH5JHJJKJcd8sXUV8DuEDR6ETzWFjDdtTMoRpRJENKRmCiUK",
  "key17": "3gXrWiiTu4wcqQEco1MAenj2rmFi77ackNWoSTKrFydcXEdNJE4tSJ4JDRJxN8yAeba2wwHRsu3VpHyyQjxfG79j",
  "key18": "2Fytph1U7m8YodJcDHQh3rY5Et11PmqQkS6WjhxxoKyboZmWDLPmcujLPJUARrpgQFb1Vrfb8CPXYwz1Pn1wCYGy",
  "key19": "3eoSBmRNo4wthrV5CqqMD5rVo8BXFvRGoD8cNs23g6La6DiB5pdfYfCohTAXfZM4VCkJF8ucnJtHDe9VvQG64XN9",
  "key20": "3RRr9ZWsx7uReMfXcKTPZSS19DCvwFKv7vvuHsCyfMJqwbmMFofT22VxVMEurYbLq8x6NPET8NHxZMoqNz9C7qsY",
  "key21": "4Yso5WrfGhZu3kvSSeaHnwLBs6nEg45sUUGC5FYgXbqvUH4BkEFnc7d3S95pMLLNDvPaM5KyMMfAHameHNjfZ5Qj",
  "key22": "3wWmWT3wsxQe8ATyJ1rhUEjMxL1ZaJGmNrh3EYaccqaHXiLVQCo1eNS1qvpykax6WAqrpciyxu4ccR4H9cjPxJve",
  "key23": "Jto2wNeDtSCknrPr3sCDncMCvRkBVJGMds5BCbc1Nc7zGxsHr44hP5VkpEGYw3p23qpJtpYEe4i5taWFG7MQ4A5",
  "key24": "5wC7PrQhg93YKMWPeHe2uF95uqp1m6EywBcwRSRHRUWPFMQRZ6XVeRMhGeW3Ka7P5AqoCaxk7V9hSSzKyanyQBsT",
  "key25": "4LkLKb12srpSb9aKayUMWChWn6TuJrqFGTzzEU9XBXb1n1BW7nMoLpKdHBQEUsuZhXL2c1Hhq7ExXymiqnkQT3MB",
  "key26": "5vnSjtZ9dH2Nqrbc8ebG1e1PjiZi1GnFfzYPh7rR7MprWmMxGYVvmoBhJMtZXrWjTi2VoYdmXyGVoz9uVaJyJxL1",
  "key27": "5Sr52D9fZ57XKhFcCkV1GqfU3DJfQcQmKwPyBynqiXGCQbaBVuj99vER7DU6iSMxwQoKWeUMW8dbLzUASogmuLkb",
  "key28": "5ZntdQsaUN3kLK4yRADAEdkHGMdgVSbqumUSZPjASsab4NJDegG5EcAsFMeAyQPjKdqsXutqcrNfaSAQCBPt9mq1",
  "key29": "5RGYe1XVHyjXwYgbHpccNryzQ3mVAkBb76xrWp6bs1ce62WJwhBrVsU64Ka7nee65Y4itbVBBCYKiaTv9rTU74zC",
  "key30": "qsd1zFNG54MTT4t6LmNJg5BUmcr6RTYNfj8MNyECAPmfKaYCrrcxvqhrfQceWP8wkyhVcjF5cCqCnogQ5V45YRf",
  "key31": "3yHyRPkRRBXHJEQEaDVRsdZCiquhGJiW8hexL52TQpHTE3sYAfmZyj8ZUeBgP89Ep584hbDAjjSjm8EGmBnZyeny",
  "key32": "7HLhU5iUMRw3gTzVbNtq8Z4uZHYPB9brzt267rZjw33E35DRkJkd5qx9n3DfnHsZmxPeDpBDah8jyMoPyF2yDFX",
  "key33": "5fQS9yGn6sVW3GNaNFHruCN9hUdpzSyNFpQHEqEk7AuEqnycFAW6vSs6qCXc81rCvUPwA2j2KjZfTAJDNjJz45zU",
  "key34": "3kxhPJXDy3bGqLDPzVuh2NfrcthFR4eaDEKbJXzdEsqgrVViF4FHdU6pgWkQDzbzU3TrhPHjQFfKRW9v3oSrTPUv",
  "key35": "3PxWv76zrQEPm1J4u8ykKMkz2ydWKo7VrbCyA2i13vd6qnj4sRHP87NN8gVP5wSfNk2J4x3vGbWrKzfsYxC7RGBg",
  "key36": "4VTQhfmr4eJri61qKZFFeQZpwYeTg4KAwtHxV6cXWbeADjkw9tTYB7D3g5imHmBwGc2WTjdxD3qv5WS89pvhppih",
  "key37": "4ByQZ4duYypwNNvvN6gxkEvQE16jRJwKdBW75TwzY9HX93rtYavLsKGhQDKdfc1VHtECBTWJ7bmJN9nCv9qDMy3K",
  "key38": "yWka3oUeUNpgBoa5mc7CWScKapbNeBvqhJoZE65RpQAA19wJfyga6omVpxZJWZijRKDty8Jj5knY93H3vzZn7Ld",
  "key39": "215stG4VwWN6XcXcXMbAE5m5tKNyUdda1YdFQHE2YPhgUpYbrPkC4w4E541Nd6tgkVQn7hyBskSqVhkNZ9XdVXnN",
  "key40": "4em2DKuK1Q8tMLft8NW4cX6ji7DHV1HGRRzzUBq4pxapcJ5WMx2RHyVCQFpg6DKApLcnSCL38BPecR2TdowhCo4Y",
  "key41": "2hPEH26mcQLZB5kbRjugZtWtsZ1rBYY4YRp96kS8YZyBuBZRuRraUnybqK8nCMRVWyYX1NH5iGiSgYXX4D6vVQgW",
  "key42": "4ar8rR6VGMkxswRkaY1Va5yvWaz4MQmdEANPfEosdoVnmKdHsGf2wp2f9RjS3e943PT4fG64ZhCsS2ukPB63o3fK"
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
