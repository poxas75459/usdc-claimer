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
    "516wmcUe9SGRgczCvdwmB2yupFnn6RZoenMQtz1JkNYdfWGqfyp7yB9vajC2mjjz9QG5bCtSfiUecPQNqmh816p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hx13wMmo7pCyMfRHT1xEXeqRdqUz6FL5tjysiQpb73b7egd5y4Zhw85k3sVrfnFeMQamJpSHkejUVqW4mKqMSa",
  "key1": "2XHgzzDtXdMdUcKT7KZGGq7Wr3i89ZHJjm4tf9gbqFkeJujE684qgnGSg8zX732x5KQKQ9hCNmwKE5cvWsbqHuVn",
  "key2": "4VQGVovXRCFmRoxAgjpMxB5JxFmRyQkxfWBWbUCCUjFjVXuHWWmtvBKzENDcfguVrrB7mkw73d1j4kzoMtmuMhUy",
  "key3": "36Jxz22nS82hK87ivyuGCWxi32dbyAH1U6dEsGMkU5RAbV62yV6C52xL4hrg7giep9ZkGzp5KjS7NkLXCwSr1cYn",
  "key4": "5LVrL1UoL9NfBbHwdgX88KgXxrbsnc65ksEe6TorNzwgRe1WXxb8ALX9DVzyBxP6VZPAP35PUNW35zUYZcv9W2Sy",
  "key5": "4n1WCJimg4piDDkYugWS1oFLVk9smWqob5ZsLiys6aRZyQ7VvtR1vQaVrTC5bSd8kYZCd9N93iAopoVHKUiuJVBB",
  "key6": "22adSMLpWMuRcge582q4sQQoy7xw6zmAzYYZo1yd2DzVjC57kHk8TdQRXg8tAMUDNnEAiRW4s6MbtKGKvz1d6vpj",
  "key7": "4qdAnjDUjBAqLnkCA68Twko7Yvmw6gtux7My97WL9ZJxRDQiUuop58b1zGcRvEj2gZq6Jee9LDLMxETAqCvu1S2i",
  "key8": "3UYvKEx9H6tZeH7HWGhBhfDGBtpdnqXu4ApGcuhScSgjf7gitX3RRCsM91JSvsnK1d6MqXGcguPZmAAYQNwmrKyA",
  "key9": "3nxEzWyvyXWSuamBmsAJK36vEws7xHxjS9csWKGyFnEecphdi5Ugj7yAPgLv2TiogQePsQrDoT6oSMTzDgA59VUr",
  "key10": "398bqpHrDGLirh9mBmoyWRKrVtoJCbbFdBBJx5ynvADZecYKJhUVoK3Sk7XWLZMg7D9xGy6kaziGZ6rggP7Aehrf",
  "key11": "3fSZySS7xwJHWikgxZpcVZeF1cC1P9KAKs33nRb4p42pL4wgHtYyScj5qYCSg3ZVSNa4qMo5Hckq6v4kLQ9uYDWS",
  "key12": "5ow191eS85atjNPTVunFgqqV1Ab9dVGfPs68x5eYg36rjaoW7wSgqftkRWN1cMaehjvHpYXhU5ab81GFATSAqFXi",
  "key13": "o9bprRRApvEUBmMeE6GsSzchjsnT7sjST3VvdJ4Em13VGyQwavjy4MFPgqb1jbRQVxzXKJYHPTaStQVS3QEwYty",
  "key14": "R3rmoD5y9N4nwAnQKPkEP11ouEgrUFxZVRPq1ZVV5XVQFauBHZfYzSavaV84oLsEpg8x2EuzCAKFbZLjGDbf3By",
  "key15": "5FZEoxzwTtfww6f9cg1RusQGWngS9aohgLZ8wRNgxhALux9eiVFp3auVkCyyFzMUfM8gzyv3zEanTmbgJwcqszhh",
  "key16": "394FrMryoEZ41kHvjuYBYcA5NZWSXoSbX5HUPgmHgz1nncrEckdnrP99JNgXNGKYB4gS7vJbCcCLf5JfxeCtqZVC",
  "key17": "zQrAURGHhr5uxE8ep64fYC9Zx7VnzmY4WzTwFPC2mZqQwKkLqb2MmPquvMQD8nCGedvY3LNL4hDbwj68zJijVyW",
  "key18": "o6ZrwacNnWLFT4ztSzfFjvgomebvRmi59RnmAwdgBZpyNUwuZWfSH2y7r5EBFTUjyETL7B6YYU7gBCc7CGVvsod",
  "key19": "4xQG2R4Nb6NSjzshxod7AouDqemkVkdjw64KDT9MkhD6C5qu8eqJeEX1J3cpB9gv8WDZeJLKTJoNs1K18QsnFWzk",
  "key20": "2DoSBwo9DgRGQmG169vChYB8BeFexxQuF7Zx8TyDHAwf1KvhzPATydouhMjAPTphf1fmahKimBte4P1QsvoU3ZS4",
  "key21": "3VgenNiwb9azmLND14K5jMK7rq5YGpQm9ni1BxNLnS5YbEZihAtHtJaFcHVcNyPQqcjYoDq45D8eKgTiNFD5fiGy",
  "key22": "bgLZT47JXJbwJMyvHBGAjJ6haicTF6Geo4y67ukYq42mabsU33hPYJuX8VDqgtAcYQBqrXce1NCFJYrSPTFMUiV",
  "key23": "3MiwtWUcJ6xvwe9pMNXzwsi9Fq8XaUvjn8uk48DxFwxLy5as7skCJWicCYzAswNm34YjKej8kMU2iwhEEKjtkQhL",
  "key24": "AJTHJgdVGnFLu23Kkc1QaBCqDjDhypDwAiweQEKisqZLhGe6FKkCxHonhVSPkMG3FRu4JMkYBgDBdBxJbmCiWzW",
  "key25": "2KxFyAbQSo3y8SMktBCfavBo7GUCKoFpwKMtaPk5X7F5HJ1smCMMdtWztkTvbiFQ6KMHJTCG3SZTrkMW7LnSeXma",
  "key26": "5BRYaeyB73n9qW9zPN8WsxMCxqnZQ61UxTbAW8A2n9SgoyogM8px4MRfoGNR7YXp1Mncd96g5quJt1WDZ3SffaPb",
  "key27": "iDEUoi5Z9NxiTpPqws7GGQrromDoPsMrBN7NTjDkXx2qfShmcJpPMj4JmFdC7CnULitVJbYauZtrEWZJ28zUr5g",
  "key28": "2KU8iudnZK38gNFRwJeVQFbs5pCNyXNq6CvK2TJsKSpACFd87a2pR3yCkxCg9pJkZfscHVgx8Xp8L8oxQoC4mHXo",
  "key29": "5n8V8ZNFaN6fDxhoy3XXtZjEE3ixtkKUKqF8CtswREHJqdTHUCaEN1Tr4GV4cNdYaUppMWfudNrnWG3ANpTj8jB7",
  "key30": "4WP2MdeLg2gJ6HT8FZbXKeTrQQhQkDj641xRBGPR9TabYCtu4n19Ru5gg4H7Q6KyQdyu9HGXDqE4fnoARp1sw69Q",
  "key31": "2PcvckCsdWYNFFccu4CUz9nKS6Eu1CGxbKUk6MxbD9XoR5hz1MCvuXrJH9iEuNutRDeu7ewUQPDFzVbYReJT1fDT",
  "key32": "5JZEciYFyDvnb5SkPGBD1DfrEgsp3gDpsrZHZuSaxBCCPYCRs7zdQyyQHPXCcsStPXS3aLsNNVHQHWK6ToRjBnz2",
  "key33": "2mB19dyV4uT6vFbZ8LzLPjFzb4MoAPAu6h79K7DFbUvwhw2xGir8vNFHmZXLx6edMUAeppsUk17fh5Tj7HLTnp3r",
  "key34": "3eSDABV9kYGwk1fWC3hP6gfnvdivpz4WNx9NcHWwfUguhnKW4G2sG8AkyNkcZPJRsnJdA93khNDLeyN7Rwr1BdPj"
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
