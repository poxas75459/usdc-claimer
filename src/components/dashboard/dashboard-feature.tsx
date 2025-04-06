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
    "34gfZmkmHvzZSNu2rfHWt8oeThxd6Y9c7zeJm3nRAZTAA6dyfwSehZKcCXGTqvEGLBXtKK4NswyeMuzSgYRKSca6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GPBCU6FjoTndat6RbuqombbkoZUiAZZ2UMUZ2De4fvBHruJHJxr7bymagjW8oq1ovy9Drxu7zHGKE7EprLXum11",
  "key1": "5qdByp96EJTzRQsQBwjHijV8ybueNrWQqZHDnjtc8Tc8BmbgAx4jHQWxE1VZJBqDm92dkuzYtmE7fs7t4kXvYM6s",
  "key2": "2d8bRy786L4zmxJASmNBDamFahgvt5byj9rwYpFxnsNwAhutxxLAyTcn4jjJ1WwRyfE14dqHGA2fRWLrCx6NVGVs",
  "key3": "3MJvgucr1uwDxhKeMzVgProCSWE3v6Gpm5ikvvKiVBLdduqB61gcP6GQtDgxYvcHmPyYsaqcQfwZ75XUWrXWnQAc",
  "key4": "62CKKQUHMnY8oqJn4CUvg18DUmUniHC8iGNg6tFp6MfNfwfjDbM8SKSiBbyLRGZP42wj7TffcwFqiXeCtq1xGMVj",
  "key5": "2H84EbJRfjoSEvc7KCzoSe2FAeQFXWa3viTfFo1T144A6MnngRwLSoqoVWFro2uEXqmigcLafkpb65Srez6Rsxey",
  "key6": "tvfw3En7qSpPBzXpvCreuFSmpGam1X8JoXa4bB65xD616mjkDWkn13ieEJL3BSMqb1CzZcJhvbbaGZurDag8U6E",
  "key7": "32y6o7iA8BHPWBhPa431DZkqfm5ytFtGdKPsyaaMy1pezu4ipAudTu6JkVHHJT6X12dZdZXV6pkjNdrmZqKz8LWk",
  "key8": "63SwU2Aois1137PLBjprdw98p4a6xzkmUZiWEdK7BCRBED7q38LYrE4AoGBnsUfnqXwdzj32QH689wFYu2ZyAZKN",
  "key9": "54ZeC2nLogPAHwcoDXNBjF5s6Tsqke3LjF7dviaSAnPqkGhNHuhktaAZYJiQhREvc4WhL2pmBupBvoFymub5guPt",
  "key10": "zsW4CUAZAgJLfUjGPCLvs9Mh7bQ1mj8Axage6A6nVhoLdRpbE71TbB6P5B4YDPxMa3n1DNV6cRjXXQNNJkVrq25",
  "key11": "3DBNx6TdM9vasUzGpCaXNfWD8AYrRa5QkJRD13bDGcSebFCKvzQGUCfHKS1TPrXUcq4nYGt7WYzhZPbhZ7csWont",
  "key12": "4QTCKANXyGRipXzh3vqd81wsrHBdHENf28UEZ6CK7ExDZ27kKdE1W4RG9W6Np8wXzPyRYsF8xv24vLGd1SC2z4dZ",
  "key13": "2j2dc5MveLH5bacg6aNaYW3X1a5XZhS77nNc9EVL2bfcSFfx1L5nbD36xDXQsdWkHLkyUgH7nzLuLyKhRyRyBFCd",
  "key14": "fWfQsMDtfPiBXVFFks5VgT4zcbMhxarPPny2FscuTCdgjuPp3KACkUwXr2sF4L9SLm2Nr1FspvhKvdvXckPCeZu",
  "key15": "2z2UB5w9GkS9uH2AowiohpiZezRMMrXQsuciFjwP3WT61neAGUaU3q6v6wo1HnW6LwQprFovFdx9sjoAFyv7MVs8",
  "key16": "351zoU2VdEqsBmAeCKrZdLMUZ1Zn67i7GAnHjdiA5e5m4jZjFfiCvVfH4fBk35brP9xpu4MwLczdL6NTPa213c8p",
  "key17": "5ZiUnkySN5pJMdPQBdUNU33Ycbn5s6ck2eK9aQismQqaWwcmkzzCfG7cigrVa8G6RzALRyqrt7pXZXFcXzX3fBTg",
  "key18": "3hQpisQtSBmqGZUaqxAWgxnparDc8DS1dw16FbpJ1Zwny52r1wBSHJZK4pJqDVgvrZo4ntLA2QnqB2gTrgX2pcF7",
  "key19": "4VyAewcmTyBoVEziufHRc5A25bMsfTqqfDQQCeYGUYKvJchabosGFuVaiDznxb6yqU3hksht3YNiKRkACSZamgCF",
  "key20": "5cf4YRcMErTqPRra8SWEZ72xGjR8C5ibAQxG86hAu7ZApzHYMYrfLagbyoa7j8uoaF44EaLu49S5ScjJPXrztesM",
  "key21": "2Ttc9n6a1dHYyPGAP4DZvA9oVTMtgfft2zBmoRtuQTTbrHYESTsRHngMDP2mi75ZeW4iEKW8eAzQY8GdDcgyJ8pB",
  "key22": "38S3TqzyvzKEpqN3EiRFc6DSL2eWck7vD47WbKzoMYVBdJxVH3yZd3xDJg9qceaoHBYS57XAs1vgoXBxFD6w1rQe",
  "key23": "XkzUmTFn2Y5AAwvNK1XpwmNLSYRzWD2PeuqPBQrn6nYtezyApTHo2wi4m3f2yoX56WaYSG8ZqtmAWu8KK7buSN2",
  "key24": "3ipBS6aNvJFhoPeeVgjLqy7YhM3bShR9BHPLUYGWg6kqpkJrS1TeBpZS7GwQDvuUaegSiNs5A5GP3mtK2wQeA9Nm",
  "key25": "2HH1qxZG5EYzaJcW4MoZzSw6fomH2ewQtucLi4wBWUrXM1gFzG9eH7GtvrLWt7HnUURPG9iHSHFe9EGewRo5Y4xQ"
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
