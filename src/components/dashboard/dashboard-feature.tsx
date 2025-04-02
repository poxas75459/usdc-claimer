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
    "KYBLKnUg9stW5ig2cKvDVyBck2JLUA7w1uTWzbbng6vpN7v6pwTZgZKtG398rvbiMUvuhpvUHTcyVBxa3kSmbdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEBMvKMyCtG2EwPKho8sm6JeycEouK3GegZh6MjSind962AiZJxhg3VXHUf34zJHrehKoDU1Sw8ps4pM6bMkJZj",
  "key1": "3K6L48EEhdjaoG1HqD3yLWJTxTLowzDeVEcvcGNDdGsXvfhLcxKEktysUn2XNRXiQ3TVEzR6y7UbyiRxhYvhR6t7",
  "key2": "3oWurxgWyq1HiTrXrktDbMbF9n6vJiyWu4b2wAmddpaUiDhsknW6UX6C5zSWBtiGp9xa7AaFMBGc5XxaRkxqSnFB",
  "key3": "3Yx6WQ5wa88JMuVGn3LmQktFZ9rexscBKkctRrHKhMChsgR2QPPdisj29GitTFGnnj2sVeSE55wpfKK515MGxh2A",
  "key4": "gUARR3Mb37dcb3mXbK1sbz157CTS2rZWrr5wwZWAWDkJQ64m3AutfTAcbAUeBJfRFs8S4TXi78kkvhyWtD2cnF9",
  "key5": "JtHrRcXDgEyZVFpYGdLXa4p9ibDr1tGK25B2CFpJaSykWCNAsboQakcn4BJjvZEPj8HuzsebUj1BzfB92sGLPLp",
  "key6": "2VuwLseHYcZL5Zr2HBK1QRZon2kjFxo9fZt2FnFYicMm9iMGALHmWEhryoszzKRcmczdt4pjQXrjWdyF7ZDjopS6",
  "key7": "583MqxKe7z7pVRJwHafnGwKzEnDzCag5q12ufF6jfrqmphiFUYgPNhXFqdd9T1au2PHrkDjRa9Hu2C4vvMs3pVEE",
  "key8": "3oBo1oLA5bm4iYgoWc81bExXs1z3D2k8J99xkkYHtWmsVejpkqxZLCGpqfSwnWupqZqzBC6u9jSevrtiBztMNyF9",
  "key9": "3H4aMBYwLhUQo3h39kPgPTiz9qzTF5eUjViVG9HDor5JV1h5wMEPnmT8X7WBAWiWscJgbGht6hHiiymoCfyf7fJ3",
  "key10": "4Mu2Y9UH5Ni9BBzswGhW2AwvqqhHnTMLkuBeUwwW45gsafuTezGSwCFUYo38tJPNmANKktbAxEVy72wApdmPR19",
  "key11": "67Qz6Yqe8dP4qawwaDDReva2GfdfNkC1xpfkffjuc8c9CZwj947v2gweX1vyVuvGSuDJdtSGo3MtGmyjqLx55xeZ",
  "key12": "rfUz8aLbdTudGpcTWpHvtz9XzxCJAfppB7efkPU4rDC9TZPFLqMWwAWFQXVrrnkYy8UzRTLUkarJoxX6zZZKMmj",
  "key13": "5vwhhDxZoLrtZwtCnUXpJdVdAvaQczB4kq12wmKApSAf9D54FdS7MpYqkhJZvpzpYDjyqYgyVTMUET37hi3iEkCy",
  "key14": "3iF8qrGh74xyRYTwhDkyWnazuPLcmuGrsN3LyKBEzfctpwjewJmAJxRMVTXahugEf2WLN6ZuzxUadENoCpBYKBAR",
  "key15": "s5S74hhrPUaJLNSRxYAaW58zvCyDaUWCZsWpemueEJNcvVfDELYv38DvLKafGYW2AWmxoPNrR1tQSZc8csGNWae",
  "key16": "6647sAT1omdsyCfzgws8RvKLurGygX4WKE9U8t3v3VCXaEf31M8aQyCX2HtUbPwrYX87uFqmxwcxU1AszRYWjhcz",
  "key17": "5tHt9ZYkQPPxo4ZNjs5GH4tgrUy22MPVKrumRncVPvnw4vyN9Cz8BASiFH3WC6wwPLGUmCjWfs9kyJMm4BHXxgJu",
  "key18": "2nsjsZciZYM1qSZfkPSvzy7hAusQMbf47XT1MTQJatxw6jc4iCWsugQzAjHs3TPic6xRNm7CVWsF9essw7SmUiWN",
  "key19": "2SrUaWmDWdo6WcDMGYi9us2WXBc6Fu5ePQSrPshy77kzBMG7eR8Wo8hd86HH3JD8H3FG4YGGX9NTXamM9ars9TBn",
  "key20": "3Ybr58nsykm7xZz2uoZF6iCxmYBMxZ39wk5vPhQMHSHyK18jjmXZifjdNu6vRz1brBWN8xfPZh8u17peKgKmyXtF",
  "key21": "KJT7hgFkMPfcayWv9UrKTZAFBdjNrpMFFgYEqW4o9EY4TSUdaF9rD4kCaUX6HBjEDr2LkoocAEz4M4zU67Z9uJJ",
  "key22": "3CL9D6zU5UqtFipaamWQKCpgb926gGJaa3Sm6ychbypeQ3KdByawCfV8kyYATz4XD1PGHidAfbraFAe4KCUaRvct",
  "key23": "5UAbirtJ9Ws1fFqwDAxmoxf1Rn5GzP7q5U7MTpk3foidUgxTimBaRwLbwgDhByko8xmeUswcg9Ahc3RYQYF7dqg4",
  "key24": "3aXsYH1u6YHkvH3E61ewckDujXEaMYqNb4C5it1sySSoWbdSeKWyDLi2bMrhkkR37UuynKTUrbYgS4SQYEpXvDmm",
  "key25": "5Z5jCmhfNVkKgqMJwdpWfJ5KrTxKJbUw2wUf8q16r9Y7HhkSBs2ZwFDLxZyML6bZVXnqEBH7HrSho4dH8L1PszdV",
  "key26": "4SUdXtBx84KojQ9q72HDUkq6FxJtBFFSKpS1ZCmicEELceZm8bFNuspjXk9s2kqrUi9C4YKSnEmKQGL1xX8PZfeu",
  "key27": "j9Mknweqp7WBZbJFfsRtcc96FqUcWNADGkGkw1MPtDg6N1DrAMjEQYML5Mw7zKdMimUJbU22b9fCjGrrsQ146xW",
  "key28": "4pW4rR6f3vG94WiJW3aCrMyBEYEokzdPu9MZr1uR1XBQRJPt1umw8AQe6a2Gx5k8ppywvLb8gnpctmwx8Mp2PFwM",
  "key29": "3UiAXYWGckw8MvTcd91ZLrUjrn2yvk8sFTPkWWstf4ijkezpsTEyQNmYjQk9ZXYzD1nfJst6Fbsyy1JECmhv7Mii",
  "key30": "5ypXFfPVAFKvLFwwV64W31cR8hRCy8JA97DgwSqwArJQCiSkmmUSViDhWtM92n4tXR9rxBpVQHGMwzGtptTyokwB",
  "key31": "2RvCc7gKLZqLijhtVCTDdvmZ9NUhPo7R2M1iU3CDbFSaDyC8wXKBqKT9VMhxpyZRrV2tsRxacrtiQXv2GCsAi6zr",
  "key32": "29yMy3HMGHS4WQVqHxwoK4ouUNKWgqsfpviPRNMhMbbB3KMC7Zd8nwo7zLeAGcom5Jat5ZiYkqoEh57cFwhWiVJv",
  "key33": "2D6MQ5nUq2FnnCEJ1njzbNqi6qvcGCMHkc3LCWqnjaXKogMQMCq2QDeXM5RVPHSTfQYFMMD6BnpQXFFqRgLyVoLk",
  "key34": "5ECSjJUJ1cBgCD7eWrLmDtyAYJzQJB776Pr3LBFc4A9AUDzSjkrdmBZ3T69qbgE9XG33yyuYWkwfPag4nZNaKRzV",
  "key35": "2YNReA8fGQrUk8tGtgmuLaVTu21CogRsb4rhYea2JkReox4Ya79QDEh2T3dxbfMz3cChPSBMH47oAYgGQyXai9ca"
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
