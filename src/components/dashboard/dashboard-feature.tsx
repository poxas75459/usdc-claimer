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
    "3aGyWT5ZRc2EACZ3EoMAKXycZwg5yN31EVd9F4cjPeQ4N6vbZrqowkprchM5utbLh38MSqQG2Gm4Q856Kp5zZ9SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAeKrd9gdEm87hBXTuxHLY8ZsG57GRouerJ1D5L4PcNgbYFQw4xJQro1qxrKg4wNLWPTgsAi5b66nECc8Ry3nPV",
  "key1": "2BiB1g9UBBKo89TgfWbp7Qtcm4CX2mdbJny1uvs56vCFfYVPb8qRsq4ZB26ynGUxMad1h4hFRVYw31jVpQqqdhcK",
  "key2": "43xJZvVZosUorz9Mru1go96Yeq43S5DA3FFoEq8hgMxzrmQ7ytFV2TguDF4ideTDLpfpqaZVHsE8boxDsZV2vYVv",
  "key3": "2M3p12cxy2VaiZdG2Pzt7fVYem8YDvt7cmZVqrmRBjkhf7mAof9MRUZjaRL6XVPp946qFZLhhwrc1XiNYyfwjDCc",
  "key4": "5NgKHcmPQfv2cdPSvzfi4n7sKKihZD244PRkZyRSTSAQFHJLgRtS7K4CMbg9QQiUqHhtbTHJsBokmK7EuHLvbwcV",
  "key5": "5axzwkDzAEvuUEgTvdLPX6BczV1TinbPzPcQqM73HPTEMyhecRS2fQkWEa3ukJax68HgDLo5qVDVRMNFNe2JwwDZ",
  "key6": "3SuHUfxnehwpZxHwc6gH2y9gBMXKDdbr71kEoTBoD5DYrXRg7KjDTy661tvPGoLhTtEifVwYk6dsm8LPrkPAuKrV",
  "key7": "5gNwmXgbuDo2fEBxiHCnmTRKVRgejkSwUHdYgw6Hk4J95CWYB92gYwW8KtXK4pumAgQsYwMNQN6Dzz5rJGPFoPRN",
  "key8": "wgUXT5AfsuBWpV6mM2ExvATRBBEf78EyPyFXe8Xvk8Qp54uNjgHdAvyiCBK7rgjJrdHtnTS1CHfj1ddWp7UJYLt",
  "key9": "2f4rrzu3LX5vfusPWGDA4r1QR6w3oJwMqLjSRHR1mRMFD7XTBQ9zVgyNpHT435GRbLAxKjr8evNC5m8dHfwgAhqn",
  "key10": "5Gf2dLLYip8kQmLAgjMDtPB3BkL8jTwrDpMPF4SpCGaEqef6AzbfMJfx8eBXNiw3N6pB6UQ4UnWptZeYJFqFoH39",
  "key11": "2JXvF1Fo6z55bkRGsW13NMSmPbiDCkn3AfWpe81zARX7o5VcrcXYmc5eNqscEBV7hKqaMiZwNdD8BaKYuCH9MjHb",
  "key12": "2oc1ygEMexa8vd1KaouuyvzJPYGkDopHRQhQWp4vcNazVkHLg1Er4A2EfX1bxnAfNXZcjK2C3QEJvSFq6mji4Uww",
  "key13": "y7LtvUnX6P7bsDq4gfF3J7KUBdc3njHiHYJJEWy318yJnzGmu4iW4uhhVXLM62Kw55EC2He7Fq9LQcVLTFxV1ma",
  "key14": "L4JFJ9V28LyTUU8G94MskJD2CGK26NnYwuxa5eyt7ZFMNwNtm49HuEBBzjVSTDtkJ2oMFBxuh5GGzoiBaNN77BC",
  "key15": "32rZdMcQzHDYKeUtKyyCgY6QpXkhUgb7QQHAg8S6r9F9XerzezcSgXCvv1bnmoxyF8dHnDSktZeKE5Hpt4L2dizm",
  "key16": "5FfxwdJMDShNsX6ia2EdBGzaYFgVbqDvfQn1Yy2bUc9Q7Y5TqwK6rgnSnkLRMZDdAbGNhFaLjph6tYJuN7wMzCjg",
  "key17": "5NwQUekqsAt1XyFFX2g2ScmTeZAiZBxhA5Nrd6dSmfdgWfQKbJ4vPzM9HjuWhiF7GaGtfaANZPRx2KND6j2X6HX2",
  "key18": "2RK3YUrazwjaLbN4gDybZuoQgkWghh4WDAd3EXYyKf1nkLvBVSQi5WwYVhv72exSWx8a9Lwu8PxsqKpFF9JGQ3KV",
  "key19": "61o5srs3zqcbLs5hBDFeCifZJjXk9eqVhYWf1C5HsoFN9Ws5uba4QdTNRUjNfKVtZL3Wyj4EbaiiyL7p7dnTmDtS",
  "key20": "ZjdLGrJMRoGKyVuXB6zeXyHmvnF1EEszcK5z62iG87mBADURhe9evhqyzVGVkxX54B2MjaocC9VHk9Ackf2YJZ1",
  "key21": "3EKGJe8JEBxjBxVnEJNxj9MTyfErFUoPJZVQW5EGkKBQMHcrNuA1yYyAC2BrCxdS9seuksTshE4T8KFSoYf2u8Yp",
  "key22": "2tRdLaKzxwvBpjYFKUu48xgTpR5BmLpfAgb35P5b4Mu4DcR2gk3x2dwF8YfeeznucqqJWRtAQjYZogPb9wJghb6F",
  "key23": "VB83dssTAdPneHgopu8H9jxz2uPAMmoT5GkQoVckxHmajkdpzSxUSBrVdVtwyUJQxqFQM1SR6TmopH3x55Q54Vy",
  "key24": "5Q5hXhZcupiWk7vp5spY4g6FEPwpfAFNga5wdMzRwKBt3GyXU6QvNktdtMdk4WBAEtWq8vQAy2U9Bgch5vP989XT",
  "key25": "2BpTRPGocrswHRp5UBkwxGKxs953yFZ5j2A25iTZYfbE6JRwA7gzUqpBoqUgwhwXLwAu42uNLtpMpSgjoabNsZuC",
  "key26": "wrqwWnckzMPtu5Pi9NmBeBzuhW4VTuXBByhgVjTnZ9KD4T29YwRDCpLCMdvXVkKekbS6dTogwEtWwQLePAfLNPh",
  "key27": "4n8uxh1kJyxf8knyPjRNzoKVrhQu7LTHpvfypybmHn6WCqVkZA2kLpQa6bUFBjKhMeV68HF137uU9EnzXLRmUhSp"
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
