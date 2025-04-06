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
    "5vwPWnB6MumKt7kcYS7LZ5sJkpWW5YDbbpovM7BsJqL14NXEbPMx6E1uVFJG3uYjUJ4V2jAKkBnYHPzThnWhpLgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsNUFXY3Wq527qCNKkKVXqyfrGJCbzHJgRn6SxBxPx5AwvWbdvMF1C2EtUAxQ9ZHKeS536KeVkSXoeqybEGwqAC",
  "key1": "4Ed8Gz5rSxho9MtbPWGP5UfJuwqQTreP7nHdRVvJ9kMETF2c4THc9zsQ5s2waE6USjMBbYugkzz4pdNqyBNtXavk",
  "key2": "3f3d9M9nb3BfEeUGrBBn8NpyurbUVk8ktHtwPnGa43tZwsxCJPnFjDjtMih9T2Ld3EGruy6XXSSGedVxP3GtEYGw",
  "key3": "4VqdJMq7dNZn3H6LUfYP9fFH8qD6BjwmCoWZA2qj9ZVZK9XbGLkqwpuJFCWjRVe2sYNBqUt4ny8u7EoyhTFNKHQY",
  "key4": "59SYLbk6uWrJsSCH7XozCt4uCuwYKaUmZcJm4gEyewvrQcygkqsAUUPYr1qNvb23Rk1TRKsfytmTkwNa7qjRKeEv",
  "key5": "59XMiEjoyy6Qpf7fYyR5FhB8dMvnDAgKd3q9vjfy8K1Ev4G7utXaVY5n4oMeVcBsEhhdQLvBz1vjTi24Fft2ajTg",
  "key6": "8731eaB8KdDJgbFBmbPik4dPBLNM3cu273MHzwJSKGHnBkVsEV3ebf4Svmz9m7AZLv9jjakp5jEvQi3Jc4r2UCX",
  "key7": "4esGksv5U4oeXDqK7zagpsYDCmpnHTyZQWGqhyYGuhqgMYfHkCBNykjMvT8CtLSfNxQSEakCM8BeXsJFvE2iWZsu",
  "key8": "ktWLYBSAvB8Bd4q4L7b2fZ2dFiutuWU7LqdKh8iNgH7rx3G6xcWSqAFENcfLfeixnAw4aMNqjqyriPBoa41APAK",
  "key9": "4R4Pq91UwhLSmygZTkYN9t75uqTfDDdcqUgir9kmj4WGv4wG7vfW5dXo9z2h7WFsxr9CxToe1XAuf5MhbaXjXEpk",
  "key10": "5xNFYrcDAvKydAysA2MCu1uSfbxxF5kgpWsYiFsWscunngpT54xWBBjvCYjJKsDkQc3MDkNtmya9CvEgPWKPzUFW",
  "key11": "3fvA8HUR5su5fFgWCijSTgpFn4EUHP1QjGFMPqUYHLWu8jMxksCfRZ1YWv6goCj1L6VufQ7eaVKC7ptyPZHyUUQ7",
  "key12": "2JPoqMTuN1p8i6w3H4vb5kh8KZDQKsKG8ohAriYKBH3EQEw7fGNQta5heP11cxp6EC4nYgA9EP9RrRpmumtcx883",
  "key13": "59xeYVAMArU3Xq1ptWZB1gtxQycuwXf1MfXNbEyMzrWFs6xjRTuBEHsSdecVKCxvHvgWrngMkZMhN7QbRxD4TGX7",
  "key14": "5XJ1uHp1xc6aggo2jyAJmAH4iewrUqF574BbGLxSCptWnFaP5pHWM26NQFLb2gpvpzZ9XsrxzvH6i23i3FBwnVEZ",
  "key15": "2JXzEWJd7DY9nYm6ReApXHJGMzfPS4V94Hq9wtVYSRGQp3MTmZMsGYTfemHD611PmdscABqAQZ5casjzSGmx7p8V",
  "key16": "2ZZ2DhvWBxNN7BCqx2b2Bs7V6JV79gTFcgfVu1DuZMoedPCeXwUpinwvHo2J9ftZsaFV136bgK5QoGbajwVZtX2b",
  "key17": "5HNm66w7Dwn5u95LgYqTtf1vK8EF52pbafJz4yEyfeAU8ZG33Vd3e6EZJ4Za6bC5Zh4DtvdP6Jei7fLnGQfYwynt",
  "key18": "2rNLird55X5ZszwJHAsd1FYVQh4Za82UMpwy11LYgdvfaSka2kq6zB2E7QDfiFneWNkP3QVeRVFZUTu3mkdZnYMD",
  "key19": "4WMFRoiNGCAozd4NvgMiWsb4yCwPc3HvhSv4kQNexRn7xgpbsfqxFviT8jUKexai3XkPKdrVATkZjgvpiSKoCeqv",
  "key20": "28JwmqzJWNJYxLvmJrTxACHZBzDMETKWTxA3iyn5ZzBjAwHoGCiTdHFfgXTH3YFzMyFkjPvfkVmeigPX9GPVK2Rp",
  "key21": "3wQuYFHDGm91PLsmi3eWZDbey8cNRF5GpYFcxq3pWAMTo2dZHYz2CvJPgLDR1MmZymCc6tKYni5CpUMQBGLXeJUs",
  "key22": "ABSUb2pqzcG8tmbsJtWnbD3NZV2AMqoot8LRd54GgKLKxX6xYPYcSCcavqhQRo3XRtVsCCcxmL7t6QCWsxpo5Rm",
  "key23": "62JAZtqthVWUxw93bwSAffyiQ8Kgn7U7yNtQA9SvxnCBJYnhkJrPmfT71RzGuMorDibbQbHymeiwwXXFF7q4aF63",
  "key24": "4Wmu1oVUMCBxqLQEMxvaWcDvb5AK5d3R94X7gtDJxNLA9pzQaL8iNRXXmuNrGCfS8twy2UbJfZvBHq6uwyNNLFf6",
  "key25": "3MEd9kpYS2Pp2cgymzpW8CqNcbXavWPae7Sxhk9Xmk1PhkT4yNEUxg9xWEFVAHmLQxeFa371Qt2yMMWFpU57w2Sx",
  "key26": "5wzmijPPDLNFeBbhKCJs94EvVc6tVWXQiquuE3WWKYVnN42MUguoHvhi44xeEtbTaMVUuhDWgvot6dowbzu1fkTj",
  "key27": "45Q5V8Gp9CP6kJDTX69t3Uw16WyUQ4x3tvfEYq6qU2f6DjDkh81vcqgpw1FuWyQLA6enLfmY4UEnLuD8Wno6Cyrk",
  "key28": "3NAeE1bFFCG6oUZNmXti84iM6trVEs7QmsYvSAqskRH8dAKzvsnkuJLAAGCpB44pLr1keGwCZvqxU1keZw7KUHnk",
  "key29": "2eQgdPYjXZRLuvicYmEYycLGkMUJn3nJ9xc3XZUHZ9NV2zk7QrH61LsaV8WrZ2st9vxd7mDMXXtnbptnLT2z9mPa",
  "key30": "2ieFULQM8rRpfstSBDhhYPoQiJupvosGWMT4DBKyPaEhQfuNJNLQZPKyBQKSbfrqq94ZKjSEJoX8jPy7s6g6YNcK",
  "key31": "mJpDRE8ZmEV3dcbSeS3QHh9ePjth5hLtvQyXxdy63gjG5Pm2aWGXL9RtTcmhHxJuZzMQ9UrA11KDvmbhQ67VCRf",
  "key32": "51GGnHrajUqjedPAzNQxj5ahEHU6PJ6jP2DTP3nrAnVnsp5nPcvs1PhsDQaz64JTaCHUaHc3SDGPNpCcYYhc448R",
  "key33": "4yEHzDR9WGiVyA8LrJ1LdtXaM6SL76dvzZYkF6qHVt3hckTW4T3TmmCjjjCrrJRvp2VfV9e8WFaSaFEnhp1UrwpP",
  "key34": "5dmy6W6p38ku3EuZxfwQuSKRuMGfmighVJurDKynyGXnBxRELDij7e4VdfmDVGrwJEQYWjRcSVa3dm9cFJXkh8pQ",
  "key35": "2csA16LCFNzMsb8VuaKhnc8qnUSALtJHYdA6rRDXDPzSHpLk5ZQWzjPivS14x6sduBCE5kPqbSCjcQ3pf7zFZbB4",
  "key36": "3jt6GzYZaQVDPCWUWLtuGb1s1AS6fM4sfuSdHdXyRXzo5zRN7fJSwZA3C9brvNNvPQugd63BEETabFTqJELheNCL",
  "key37": "3AwEcqSwWeeHGPMiuz4XeUC9XHDRWV8bSzva4ySc9i2p3xuPcDDRtouM6UkM4JEnzBZFKYATpqWeRxctXwqvNpgj",
  "key38": "59SjEg9ZpvfMz3iEv3mU2VTQXGpcNAjRMe198MtpCQZTzDcATPRNQRmym8mveZNsKL97wLwdDVwWiY9fe7rogZFw",
  "key39": "w1Bor3PuRrLNFyZGKNJcQLDZct1BjywiN2ByaUGMUCuJ5uwPbqAe3cyBMsZ3u85Kavpb3XbcHU6RUWcZdra6MeY",
  "key40": "4ZZsrAsH8XsQKhgDmbfgETxAgVTfF91pibfjscVV3ft7j9RGp6fVV3qTeWcz4eFxEs7CtkcDyKiHve4cng8nMDzP"
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
