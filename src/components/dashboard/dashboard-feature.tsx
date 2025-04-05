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
    "5gw1Ph8mGYAdLVWDGubHHeyPKs2VMcxqJ1nzUETd7Th9mYSKwSKTztbVXgn4As4rzZRnF5zVMabiRDByYhsMGZ8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5QPNbdEMYMiRJCpGxyB5mMoyTKp1uT6BmC3vKz8yJiG6YpBMCJsZTEVA48MvBHpZa299ZBPt5yS3Y321myLbme",
  "key1": "ob86eCMWXd99D5TxF1eAg4gAkhKkdVYHVXKdbQeJbFFR8MoVWdU9J2sbb8MQ9iSnzvLNg6Tdm7RVSTWZEYSC55U",
  "key2": "2qmSk5JB83tjeBir3to1gncM9mRr8v9YpcnjRmDf2m4d5yV4XDDPYv622N6TqzKhH5V28ERRKq6W5essT4mzkCoC",
  "key3": "KPFKnEQ9smbvXtXC2fcs6HyxdzveEPACsVf6veQJGVPJNujPHuFSgcTE5h6ibjCCLYjyVrXWPbbhfx9VSWTsCi8",
  "key4": "4hFNWYAhFM5HzHzSpdj7fQ2vtu1D8SaV4Lgq9XeN9gu7E1FvhmGD5SeApLcfdFoDehmTk9ZzskCRmniqeo5LyAfC",
  "key5": "5TW58nip88A8WjHSEXwF41kjgEicgoeZbiQ6PsparZhoqc5XSQJVq71u7uhCha1RBMotnBdJmw2r733ckayJjur4",
  "key6": "2sqNM3TNHiJtRrwVjJ25hnVtCwDdnS4CHLNBohZeWxNJ3EZRHtVT8Gg36FYvXwZaNMQNTrtZQoiF3wrQbKpWSpcd",
  "key7": "3X5czJhYHwSdtUp9wVuMUoZyAJobMK9DvQrCPao967Vf7iyG4nSNyMGLzMujZABNHd4fY64UVkWEyJwytgC1Cc7d",
  "key8": "5hS55jt3Bp15NWDZCDkU9YojewqfdeCMuDueBtuak1B1oRtT74VyV7t98HYUmHzD39pgLHn7P4nDKrqWPRe6ygEz",
  "key9": "553fNKczrksbvq47AiyVkWcS963PAA3VcXSbY3WtU5sWhRW8sFhmpgjxSMNpeChJpBB8aq5mxeWyhNxCkuUh5t39",
  "key10": "45g6gX9Mq7a7YUiohc7WbtuywKEgYZcGZFjpMw4PMQbbzRqD4yE23ayQFqY75Pe4XSbGhuU3rumFJS5jbynZ7HLC",
  "key11": "5ZoCf2qmc8MbYYCvS4tvVaYDPAVy53t6ADbA2ArJBqWydmjWKcWpBVeYFY7cv3TUdh9dQCH7N3523upF2kZqbbDg",
  "key12": "3579BMmhbEGJzwrkNM73GkTrDUyiT8uHAmRgZq4Za4CdRnQhVKifit9rXiEmnxsgYSS6m7T8Pz2j8f6QifnhXTHB",
  "key13": "5LSsaFzMpm1Fv3zRHUgWqY3Ewk37NurkfeeF4KXCVxK9oV1MPmXdNszj2aNfbYe2a7JRY9eVEpZmn1era3DGQMA",
  "key14": "2WaoDSezX17LMRJmsRXpwxrsovxg8wWov4cr6fAzSHSKkkSh4Hwu3WShY1kYHdThLMJxvS7DpbaxH1M5mebWHjR5",
  "key15": "33mXR3dNyASv3w7NJ9JuDJV9XAvJnhPF82PUFVVLETrTar2UmCxFgsRcpdtKJy4irtHniYnuCF9HLoH68XKwe9bn",
  "key16": "54mBPM84diTJKFKjnEVAWAUA597jTfr8qg23WNu23VaiSaHXHTqp3VEE2CSD76EEaXFQNi6vd6B6Cgp37eBXNP3e",
  "key17": "2vGKSwnsC5zp54zxmsLYzAHkCMTLzW3goutWQGNsqfo3T8M2xaxoMsChwoAj2TR9pT2WwnjD5nGkcf2JeECMbz7u",
  "key18": "5qV5z76EoMuUUrUZGEneXwP9W46Wg1KF6XoAYEYXpJCGPZkJ8YSRieXv7Y4j8wRC9JnSoEtGVae1VRD6fFt23p3H",
  "key19": "3fRW7KJ4UYyP3osS9gu66AyZARzpPT6MoCnzuRL4dNK4TP46L375cf4JNkq5VjjyKV3A7eFJyx5DtT124MUb2Hnk",
  "key20": "AFa6nj2iqAdSYQkFqaaD5XBG6NTXwWhcQvSMk2c6L31m7WCWSeMdGaPdTmoqmzQNVvgidxShWFRUA9AXP7zP5jN",
  "key21": "3WiRgpyfr6cw95eVFvEoRm16VzPYebKNnaN236i2VSbeYgVovE1xRQEcMhDudbXYdc1ngckRZyz1NXkqkrxUVP9g",
  "key22": "3fBfmGeyHsssRopSBNztZdS8CjbQqayvCGT2MQXEtkNu49vWoc3fK5FQr2MuvahxKKkaYbUwnwKXoe8ph3e3Wosh",
  "key23": "3zgV8cgTqYzJ4nU7QTsiYn6kELXpjCL8v1je4vhmvM13ChZG2keybpH38BQJagNwit4pYYrW1ZXHyWBvszL2uYHs",
  "key24": "2WibjPeatMqf4V2nivrPhGto8AYLkfHmPeKc5sXjQK5mGvBMoahwi1BZtK5FbAsqj3nnBqWk3cJ3MEm2VJAP9VPT",
  "key25": "46XHbwgx7uv8fw4x1XYMVDVBRXh1y5DLDECp4sYrQpRmMqH7q8XqwMJwmV1q15gYxKD9KDhyzaMMrf6ZzNrGgt2M",
  "key26": "5La37CT6yTRRqGQaWKXkGwLWxvF5Hh4JkASQBeHD9382WXm2ur9Ho1NV7NHwrV9Aa2VRVR9sp1nxjjddjdCQ1tKy",
  "key27": "2SeGpe1LYKe8RV1GnLa3B6mqhYF9KrPTDJyBfMXC3oZtoKtMJL2aKo2sExeh6LsJVtEJ2YVQYhfPmT2NBEwFrjgc",
  "key28": "5sAdnx1SNAVv6Z9U8HuqayRBwkBXCkQUgUedJYobRK2N6hdwK56BY5YyESzMHGeLac8XmA4XhhRL3Yiy57RtP5m5",
  "key29": "5Jomc3Xp7aEsMq35UxNRK5HY8aHVHQ66SJspgPR1hRWf7AckB3CB4RwzLcq85wxyN7oQeJbuHH3Ff2QoVx659LjP",
  "key30": "3bKarXbocb6MucuayzVZPXEfg5Xc9sEcfCSPLWkeC5guNkvVTSYu4zVodJsoz3U7DrnvBkP6UTTdJCCZjHp1aE1n",
  "key31": "2UEiLG1FL5rJ8aF8GXAU6Z33fQ5fTxZXvjwnHrNZCbuorYuKHHuhr3PConMHzpY2hz4Wjtz1VknhgG7Uw18u1iUi",
  "key32": "4d1XeqWmwzvJf61ACT95jLuJ6duWdaBgwa4YjHAwf7gt27e8ZjQZu657K2jwkZrPnD3ZjYZ7fVWdVErMCBm3R4gP",
  "key33": "5EaJzhGEEuRABXVQg9xmabnuSZ9DtJZH5bMYprcLkNNf3f4KYBoBDBbzqZVj8zxfN52SwTs5xUwJNpFH1u376mjs",
  "key34": "5GffzBQ97XCc5LJnnvSqBizmUu5vZQbD51vRk1rgiQZnyJj7RLnWGVaDfxTQN5RFUL6i6i3pS6KUhfm8Ctr4CoSB",
  "key35": "44tdCL5KewDydS77GVBjxArNuMaoHDdR9zzUfsEvwoQuacfnvsKm28JDxiXe6i6thEmd1k7mMukrDcYptK9YKimr"
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
