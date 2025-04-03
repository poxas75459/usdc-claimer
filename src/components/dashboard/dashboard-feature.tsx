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
    "4sskag93YHvryJ1ywCHzvw2By6fZPPWwH9F5LyELrMmAfyN98me7NFEjNRfqX3X6eten2NrqHdFnxjE2is4XCaBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U3cQzez74w2TbL3WGEEtTc4uEeSBe3QVhVfNncbf8kNzppphYHm4FxBwvpp1Ca84G12AcYqmGYh2scYXwrH4vtY",
  "key1": "3DUamNdWU9XrYWpoXZexbUbdfjbzBY5rh14Bpime7J7KDYH1Zwkvi6g3Ru5RTsCU5GPz797gt4a1ca732n4oaXbx",
  "key2": "3M4GC2zkUY6JzypqJbhZCPwLo5VfAdX6NRXVDsB1QzBUKwtuqbSZkwYzE9CUJ9Qxe9ggoPFvABhjdgXmxMHDjBYk",
  "key3": "5RFRg77rmjTt1KGAMKnRzaVpXWDefHN1VhCCdJtrPtJ64WqA2Ggfvof2j3WM1jYW5X2xhAv6ZjttN1Tzu15Y5HMj",
  "key4": "2FaPLxFmCkRys97fZtcHHVKw34Uvyiq6T5td6MqrJAFYBniX6YAVMacmioKiMnEqWCCTYsYVpuFk1EiPfYmLtg3R",
  "key5": "4qJiqwqips8Mu47LSZmzB5HUPALsDTYgpFTWEBQqgRkccenui8mtcyTjHCcpAzp59n51kFtz9VQkMZbfWJtksftq",
  "key6": "5v4jhCqP2bTHZAyhDqmRD46tKpugkpB5S9RJzNByuc4M6WB6iVANmwCZZMHXTisuibn2YsSvctyCtzMQ2PU1byy4",
  "key7": "3BPNZxQhVgkJ75KgJBAm9riZcX9nfcAY5PRycMKMLJcqQW3jMxmXJJ8eEZDerPLYqdj3BPXGKsZghAaj1yqZZvvK",
  "key8": "RA6LrDemdRW3c1bpViUsqeQNWuiN9YZ5p6p51A3HdVk4PAjgqQriZ7aDMqFaQqanb6UcusJL4yhsdevg4JfQbx7",
  "key9": "37PeNvXbYsXThnN5DyKkqMWcL1ZZbPHLsiAyqz2HovZY1W3jsuGsuAoV6GWbaqg3kWmD4dQokRfpg7aF2Yr3coP3",
  "key10": "3mE9nQ9N9LHbg161NzUTV85ZnpbBd2oJd18HCBTy43BJ3J4WeediwpToLuPTCHz7571hJnTbKTHQboco4CkGxHmG",
  "key11": "5uv4Pvc4CgPvjdRN2MXx8wo2EtbnajMDYDdAsGALiNy3NTCfzseqvjY6E1fPYT3Sf1Y3Q7XyLo5ctBYWEAoLxszX",
  "key12": "2t4Cx4pBhuhqJnqeLwEj8Aq2UZC5ei8WDeMSY6UVgLUnDoJAMDCmqr93x7qNc93JhwWivQF3o8MkH8WJbA9pDAP1",
  "key13": "4mRNJhdyhSWY9ZLNTauQ8NFRcZyMx1GtN5WzZ6q6bJ6M5hbtb2nLusmCcPNaTeG1oiQgHHg2jnSjj93vgc1QvJUj",
  "key14": "23V1A1c1HTPSPLyhZzgnjB2xUFKubrzMFZU8BnLzwHc9dVGiMLnM7cvsTybwrM27z2xtorceNeZAxL2k2jdnbTmL",
  "key15": "8Wwz4gn2nfemysLSyup6tkiopDP3zGsce5cZZsZd59XYY6woUUuMqWBnL4eEU3RYrJPkiREbDXSRjkVVeEEamFA",
  "key16": "7gTXviinBFezxjpkFGB4vv97HmJrwvovDdqpjVkoBrFQ6bhAP5XTXyJn21Y6aqobN4hULJfWsw6wvemN2MSdigN",
  "key17": "2GCLUD5z4hm79w3itPinFtLSJHoqc7qYbvVtHigmWr68zg9P9qJMYZy3u3w6UPERfoD3opok3nWMZw6cdWo6Q8Y2",
  "key18": "4eCGu6NUvahHy5ufyHQneuKzo2aq9K2tgeJvZD2sWt6TCQNQaFVoVzQax9dpms9oYQ4yH552NPyq8Wac1Pwx4LcB",
  "key19": "5xmqHTQ38RmJaj4w1UcZjDNAdxzX83XRKYR93toDxEx175SfguHfmXx5PPewoHEZEztJXp4WuX458wEdEkz4kjWX",
  "key20": "5qwobBKNwCyVSHvNEYSAshVzscrF8jvYwzTaFenhePyNm1FpcdafA7F3S5XRYuPFr6y3VfKz9drPovRUMYQ6qD2c",
  "key21": "3bBU4YAnUR3LycrnfCCx8yFvi48LW3jJ2pveQmJLvLfz2N5FX7P8LaPpYbYBb4Q82ZqUzEeZT6NMDPbUbk51LN5n",
  "key22": "2EwA7iDy8ewm9tatBVA17yzc8anJMYzzL1gY55JUYwwGEc33Mowio67kf2tBp7a7X6ZJ7eNGUaYvi36vmsvFibCi",
  "key23": "xQQCMR9xSjQVKdAuZyirpHaDDW86J6bLazuHSnA6QykfjFxJzHdqghWGHnGdygSKu38C8cVn6N8UhftK1rvBeT6",
  "key24": "52ZBwmFng9gDNB6HQJEeVnanJ49kRonKL7Xbp2YrbTFn16dnW9Bxantwy9sHsLAwukpvTVsWQ1tuDtwMrZQ5i6qM",
  "key25": "4jctKTRQkhectd8LcskNUJNmtopsjXwG4rCU8y8Qmt2VH2Yf1vA53bsKFh52uhBLjk3yTGocHPpkTJUAcBawc5Kb",
  "key26": "6125mEKgW7rXeyMbcdr8Vpo519MkzvYoBXauyn7LzsHpSiARgWAuBFLuZckajJrwuRGZFu6VFhoPWuuPpkuthPwn",
  "key27": "2LRWfRRjAsZitZkUtTiQ21furRYbMLs6NRkpxwfMNNDGkwFX2mC9H6pPdLfwfD9SJ3AA2kzFdXA7rEaPtrQtR6eP",
  "key28": "5FmVGAiBwAy2V2g8EZCTg1r8PcfJLtL7ESX5agpB2FwpNxVrK1VAtpgk3ZQGXSv3hH5CFbzxu8oQtUtjSykVPRKn",
  "key29": "4h3aa7n1DUyKmEnNBjMwZxB1FEmYxzJ5ss5qrQZTLBsV1kMwraN3TdjqDQpbk1ofkBScbLbHMXe1bbncNRcDeF5k",
  "key30": "5K1uYZWofv5DrmPvCj4R3JBnJUBrWJnh9FWuWdSvoa8EiBcphH6RVbNhvMkyTbBvN8N66uJXWZw9eUswfhaK9qJ6",
  "key31": "Ta5Ua5zHFGT2SPTpbd2CnUU2y4muE5oF7YfXGJSzD1uZHAddvDDg46yvu57trPynSvV8dHmhXHWRHXgSTGRQj16",
  "key32": "2estAmpP2LHTWqEmYF8qsY58PFCh6Ae31d2NTjBFhngmHDNv6RTt2puc2gWA2nDhwBs1NKTTiEJVvgsrKh4h6FBE",
  "key33": "3UtgVXADy87SnsqBFzGjToqP6ud3cYCV9TUnYrxWDTbkCvHrSdmTdbhGRUX3jpA6pRfhbBBWHtTG39ka5z53haHJ",
  "key34": "vqxjAZCfan7wNfztjuoCqvSKm71DHXivhuTGVBH8fBRoKxXuX429BTJ9sLQFG2JZPUZchbCrw7vxH9mZxHJkDtk",
  "key35": "5sMaTjhPqN6H3C1iAR4j5UBbd1Bwm8isSkBCm1iM9mWcPdkfVzdkdz2pUJbwSgFNLuWy2gKGvwcaGdDnJ7umstMZ",
  "key36": "2LgTsd3pTpZs8Q8WNYo34c1agppXdVv3hMPg8Yb9k1RmUbRoC3EGuCCT3V8adoX42NKok3ACDTqzADnVygZAXWcx",
  "key37": "2dkW93eGuiW1MQvnpAveR3fKKHKCiSFcSsHMTXvdVm6uF1bHFyVj2vuGJSKd1oCjKdpAjqjC75gT42W2CanJhJvr",
  "key38": "61xTRBxtcFmyyBXZ7M1e6CpXrkAaFBporTLVDiQL8B7WyfEg31MpyMaz1eBa8TZFzfzB2ubm4qSDfWVp6cZ4fs3o",
  "key39": "3jVWhyi74iNApMcc2gYFPYjGLCUUcxKiJw8C2p3dtiA7zKt2kYyySBQkZ3MjYpzcTPxD4TN78CVjVAuLPbe9tYpp"
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
