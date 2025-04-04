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
    "5GMCf7pUeFsr3WFHNqjngPA2rh5SmDkprBUsqnj6STudFGzpdh6B6aHEu5SdX4WtmD359ch343kK3ERdPDBYwxc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beutFPa36VPzSbyZeZAQagpaKMFbRChj6XvNJeqNDbhekZDyKuQFwb97eDdZTbkFZ5nmhpVpiWn52eDL3TX8UB1",
  "key1": "4pmZvV6VaK5jDD7x7VDAnQHWbQ9sXb785K8SHXc7GxBSyfMhMPm1S4M93qE6mKm7cS9y8gdFHRo8PG7cJMtMWrgt",
  "key2": "52xkSxSqaJg4sbywW8h2u1FjT4LSM3i5reNinRXqBiMkWhQkEqY3fxBNNyje1QkSyFjGYCyHZUnDof8PVTRTeq23",
  "key3": "4dfUxF91U59xJXRS5hTihp97RJye8qzztSngN4dULWRGvqgrmAtZMt4kx3T5axQmyGkXRXQMoaosD46i9Nmd9Nwb",
  "key4": "3UmGJsLeC7YDnLDyVEz4AAeP5wcqSME5AMtfa39XnRhLKHcBaDG9skAPMhQznrXUwVxqNW2wKW82qTVx2EnEEDu9",
  "key5": "3QD6nSNhbbRrDeCz8wh74ieKger21xXXycNpY5VfF1QHCFL7kyp4S1DMDZBkYjUASdt4vNFz7jFBKLRu1hYJBg3W",
  "key6": "5GXZRfT3o1iH75PfbrXvGmdJAQosFSnvncaouhaddM1V5u2V5LJcBSpRdsngY5zQ8o4VjT4nxRt3qf8DZ1qecKrw",
  "key7": "3oKVbvp7opNiD9QZQHxUzsuKxneTZBrwjb8mFzVgQp7jHgiJPq3BWq9vsuycWGNkhZy2YqGXR8c5wtLNRgS3KET3",
  "key8": "2RqEHKs4tL99YruytoRxbsCcNqNTxNDSDsz8A9rLcHos43QdfDKibBmuPfuWZsKwiVfQJSxezCjDrzZ5ZgXddLYG",
  "key9": "4xTPX4LDKiW3sQ7JTEcCtkfnppBpZuAy6JqqhoQJ3TZy75BW2YLBKH9jHX9a1YmHDYwThdJWBzM6JuBbVsuBsJW",
  "key10": "2Gme7bPopQQozY5NAVDtrJRypNojbkSoWMeeBp1GbVURHYixSUJ669bR5xsv6288cqgdLQ8fGv4NoMatnLYaW2Rd",
  "key11": "2m2WrB2YkN1WNN6r2TRgsdF6hLRuAZz655xEQwEWPuSnEC52AVE6AERjGit6x6YUvNUDeQERL4QNjp4QUugY7LFt",
  "key12": "2fwKU9RG9N1tLtJbaSiP8ibKM5vVJfTbxJzUVfEExrbbo73HBgNRizrV7XFQyyPcBkc7mouB1DZXKVKZ185Lqo95",
  "key13": "2DVYph4gUKHKe1d3CQJhzaCVnXXbG7ovzhvbZNG4r3zT46MXe9c2N5by4cH8FjJYLpMJtmAcdLarhCSU8fYYitiS",
  "key14": "5SfwEJ6EhFzqJPUX2Nfa7bv9vr3M3vzEnctuwdvMN34Upyqb1nwjQayWFDWZ7kQD2hYCUomNKwk4PkCgsG1CAUoL",
  "key15": "5akXvmHgqPQqE52iK23R3Mrx16LoWJLPJasm99UNRnwKeX3h7YXeVS5P1JBc6tz3HUWdBqXMEkh5Zee7PbFr9kgA",
  "key16": "2WQ2Mt3Joj62uD2P36pjLN8YDFiKJHqJcecnfeqDfoFvWdMCWWghD58iW2nGrwQdnR2TJ3QHw36DWhDAk8X3ZUUL",
  "key17": "25vMaybzp35SJLyrRr31Ehiq6gMY1xSWNyeKVQEfuucVyUfG1RWA4pYwHCbkYGtnPKevujNfx6kDXQpCdCmQ4L7G",
  "key18": "2U6eLWrqoqAVN5W3V3oWfze78E3eENAaByLX8F2gqWDRL2pQANN3N2SWzBXKe53XgTSDRvJWpLPUxKZpoccXaWhM",
  "key19": "GQ1VjKwvb2cuiggAh2d9t3bKsumxCTuAQqHjfeGSbjfnM6ryJnTcXDeMP2sQjSforaJN7fTQW4Qn7gKbfKZeoWC",
  "key20": "QqARtGL7jFoZ5L4zqLYzeU9gwjhdn7PCXx6fDxuSC2uoKhi4MyWdFc7h3vrg8HkjUa5JwbS4DS4jEetTmZLzUmU",
  "key21": "cKt1nbX1PaZbxVdV9tRQSbMMzjcST1yEssjqfT7LPmz5T5xXx9LnYBvCinonX9rEnfHtMotJZ1nhSXarhxsCfpM",
  "key22": "1Bmpcuu3eEdEyQNk13VLfg9yBaF1bc2YpZu747KRFBkhyipuGvyVKp5FHJEongowqBXX3D3NEfYVXHME9s82m98",
  "key23": "31hXZjHeJZEv3qK4pMtQZ6j9ECokyVh41ixzr4qmRmkHSEHioyrnfwwfHfY8QUU9WEuJiUzVonCSnbzkbsnM4QzY",
  "key24": "MBhuEepP3W2YNSgsfFspn6XCkiB5zDaSQDAZoBGTNbwt2qfAdo196geL1chsEqFAZH4F13G9WCTz1n4epHpngy6",
  "key25": "35tPKQFC9C29CmKSMGQ79k4HrrGc2Jnd6diifXJcYSfKMKbrYa4sJK1PxzHQrMpbrfxFzbFFNWRQqVZQgqpmVDs8",
  "key26": "LWjzm7nSpx7w8SShtGX8iJ8MwvZEmDb8e2Vy2qFSmnVsMz7Pk1HHjrQ2AuYfQ5GNtXffZzny2YpGFupS3XaZ3by",
  "key27": "5ZLCiRMh7cFS8WneiQGEjD4yozwry4heZkEsGqUUX5xKH4AKNt3kfrBdJtZtFmCgCcPC7cihXyf6qdhuBMF6WXHt",
  "key28": "fQXqbehTWcttLKxYnrDbMAneT4ndD5XcG31b1ka6a62yF8md9C5vwCV4ZPfaVKXxJLL2wGnFrLRynYh6UeFjyA2",
  "key29": "2NXBp81JcwnS3Zeg5fHqvkhN2MAChwNh3pK1z92U2bWQxVSpiPV4RcCjnCK1Bc69yH3nHgWTE2vtiLerde9qBXup",
  "key30": "2auuCpkv1BpkEquEeRM17FfSWjzrED12FreTCxUhH5Nm7wn4Ue9BRAdvjgVTw5SedzeUMHT4W7fL965JT3vuDZcb",
  "key31": "3Qn3tXPQbWMh5TPbpu239c5ASVnhp7b1x8CLEVQyBP4WFBLaN3N3jPkpi6gptdsockSLciSQWfNJ2NoAiSdcTjkn",
  "key32": "4ewaEN1Da4EE9V596CUYPzFn9B3wawxJVRgRJeiTZqGoXouFsKSqzi2Hgg8AqSyRib7BBGp5tZjFBnxYx8DseQBe",
  "key33": "5AammvXwV1KZTJgqs4iJgN4qjhRs4fN3aaruAQap5N2kcMVQdX1UFS1ujhcRFt4CZY4ZzRXeAM2PDvYnvnpq9TGn",
  "key34": "2PeJi8j7jWhz9RVwd3rBMx3rV7N6nB6ijaxvS2cPcyG9wgT1SbNjKCW4DXH2dH1JsbhLRv6NZjN8bLgZjv2mAgSR",
  "key35": "2nGFEfPkZFWgMzhovKd2oTKsr6ehVptGmjW8dC9GDD3RUy61E5rABQmbGkeZYh9os4wbyBdYM2ETtPQY8fiYt4bP",
  "key36": "3NjH7iTbzryb1fmYTrs82MFdPgtRQA3TxpVhN73fbUBNu6fHXUjeByq4vPvP46yeP1qxs8exGE482f6abB8DxGgG",
  "key37": "5oGjTk7VZaFu2yChDqMyxgdhkvVe7Cx2ymJEKdhTsaUXLE4XHGMRVpVrwretZHnFPwtoJ58mMcSKr9hBH986xKF2",
  "key38": "vraBm3XC4ZGjjbFMQfGiLUZBkcZt7vP5fP6jFBm6sczSq8v6MWBVdfnoxjAaxxZY6eXJUb85heyFbVhTf9T7akG",
  "key39": "4DLv532FLVnCv8QhqSYwcYW73UnmMBpHFbmP8UEWtfPrhz5G39mcSSgnnv1BbVJG1s7BRg9PcPBqjRs47ccH3fQN",
  "key40": "3Pbh3JLedMMKJ3YPAoEuj5q3KBLWBTr1Cj3KAaYJeYh4N2B88NZGaCAGahWG9yexBVCu3EMiBTRycA6FJaEwxekX"
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
