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
    "5Wx8BgN4HtNsqaeW3UMKLsxTWKkPRuCrs8LCAB8bf1B84jddBYgHUMQa6JynVcfuUWMNyX9dSmvkMTjr3yK9uGWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SK5iS7XUNnkr86yawFy4cPMbkfZP4EgJaXV9MikjTukh1Ui1dzVtBX5dRuTfx9STXuGmVH3s9cNCBQErtDTJrai",
  "key1": "39fueYeoQK54TLxYwSvLVRLU6LTsgaQT5oyNXAZc9AEQiAHDKVDWnSRMrfEmR7tYUB3M65J7nYRwY2zQfNyDybQW",
  "key2": "2fW97w8d4kt8UENefdNfeNvNy8LoqAGke8jxEbkuvQt3HitMWdN5EAF9REjgxMdCb36a3FtWjNAUCvE6ZmYfjTJr",
  "key3": "4LqmpsvZCBnYWuCJQ9ga27XEa2DEjPcYt4zFyEmRwpVW4eyiE5BfH48ZeUxzpD8uENHUatdio8HpcuZQtN6JnWUK",
  "key4": "26oRJ8eXR6cyxKDwwfQzMtegbiBBbEPn9wdRJwYstBoQfPm28BHDq1eksxVDpzT41kFLgQPY1q5uaKyR43Er58fZ",
  "key5": "45B4mfTtzVrjotPZdvUKews9LV63ykhas8k2RGjfkadJEMHpJiz8z6jiiiw7zeDWRZ3AweWmgrw98DHEoUb5Ep2o",
  "key6": "3TYPxGBkGnhGYzJPm9dyefwPuTfynsH4zZXXNG5JwjLeC8whUjVci6XosLzuNR5YMGwpyw54QY7YeMgEsJ4Sr8vC",
  "key7": "2pCh1kXymsqc65bYfvHqjrGzkTeEWiMQAhdfkzujo54iwptKuiWsxHvAY19kf4uJyqJCc9YAHEyFpLQSWjgEi9J8",
  "key8": "85cNJo5WPZ4g2hu2nTB7TpVEXjv2s2gdUmqYyhi46QRi29ruEau5a6by8Dakxmd8TVL2qsPvULbYotSsxVuwxok",
  "key9": "5CmUiKMWfmCfFT7LGgNtnXohX4Uwx7Jy9MbcLKeEwAzrFxzYGT9aaRPD5aCdn876AEwwihYUjBKmXwDqGQPrkXnD",
  "key10": "hMpp3qQWv33UiuRnpLZcUeb7HbJcf7FFskzHusZ6AE9BwT1secmVJSdHmBUrk9M3LvxsB87NTPJw38UFtzL3WCd",
  "key11": "55JeT31ofb6uyg9VYge5UqaSv7AdEVpnVu7N8EkHUjMyBgWeWxejsyNwp3cHq19wAormzpmDdCycRy2Tks4tJnsz",
  "key12": "9B8AaYW98NLM26j4F7iNKtGg1uFEiyNoFHrsBMP5SkcZgpKTLKrrwS2cU5f3DkkYmBKNFBSn2Z9eV1HmGQL2JkC",
  "key13": "3pyAPdux7H7oEgSh4UJRz8Es9hLZqzuUfzSvN8eFHaPZS4vi6K43JS8XotpYzpFEwUADfs5sWnq6c9hdcdtccbw4",
  "key14": "5NfEKaWsUAUDQPMyMceobNqqXQYyVMwrEv49zUuAcLyX89EkNtvefqxE6hM44WrEVt8K5zoQqC9zxv8Ys665pgP1",
  "key15": "63m77qod3hgFZRziDX3Fh8zLYShMFpSg3FjV9Srrjdz5isDHN51VFLaRsExcNwrv5u6gCtQ4x95R5hnxpdtadV3",
  "key16": "4Jzr9SvNSmna8hWt3CcQLn98x2Vr4kRmskvw2EBqDPxNmJTkj71pxcYCf6rC9THn5M4z8B6sYk7kRVb8t5avmzpX",
  "key17": "UXBts5EQTRnyVReGApfX5RjrBUqydEy6ESx2ttbUui4HjCbWPRKaTbH9DgRKZWJ4rXvBVCumM6r4Ggbm68GwUGZ",
  "key18": "5LXQoTFh829p7eVTo8Yh7inesgdDA2FYvhZmYUYLu4rjyYdaCLZTUyryZvtK21JnJwtEErsdVasLd8vWGFF2wjSS",
  "key19": "5o1QpBhgkJ4eSbAbzSfovjR5rCE4gv6DUTHXgup5GMnZwmkLsXeLyVFYgQ5F8yxR8D66rEFDukQAMxx6Q7kdiK9q",
  "key20": "2C262wDpw84H7Wsh4XmnTKvgefj4ocVRpjZpVnhLdFHGsfGdVkxvo4ER2p3vjWVpPq85zvnzUgvgHUee7ErzeQav",
  "key21": "2vWojMfSwCCADfseLYtJux3AmYL5CTA2d7sogknWxE1j6p492NmZ8LvMBb5vMXkEL8fRRtdcnjoxA1chQSyMPhtf",
  "key22": "4VQYjrKb67XW2v12hDW7iELRBUtPSRUs8oVAVryiJ61dwFP7DmqpEnfWzp8VCG7KheKkM9jcbCzNao9zsaP1Kzmb",
  "key23": "2tk4yTvDezid7TkmgVJtHb7NBrAK5v9aX5D72tCWiD5c48SYSoAhvMdEFAvV2CkFiYBxhG6jYWfP9MEkftSsJ27z",
  "key24": "PsqDpEuUiPvfTAZ33WeWf1ahxi4QdjdGnXH6gNWRvsECFaQeBaRodX7eVuKcRkL13VSkNNqQ6qBvCjkxnRND1X8",
  "key25": "UenLABUZqa6foXeiHGUHfuLKkYWkdVfZvKo3BgEDuVWdv9HYNGYtsUyvTxQxyceH2r3XBJDKYZUseAyrRLY6My1",
  "key26": "3y3biydSCvz28284x1x1LCC9p9mW5qeEG7xRr8wMHyCeMchLL31BT67vZSzxNoUtEjxLsdDyj9uz1tEdqxzSRFmz",
  "key27": "4HeW29VKdLetY6DaSGwCSFE7XETLmm4LuJSXp1VenfEe26Zdgs9MttNK9aED8yx5WDpYyqM9xHeYXzVg66BAghnK",
  "key28": "4nyE6YSF9YMRtpxG8aC8pvAHUtNjXaGcWj3UbgfH3CeH95r5NrrkdvN6J1dD6ed9Mb7vDVErpqjKtd2orPeit6Mq",
  "key29": "2MfNrLhxKpHanJP9LB99UbsB1raiqmyd3s2W1xhb4iXSsEWYNUqLVxD95YZPZxLFvRa1Kip5oSjCzDcQfesUpwyP",
  "key30": "4FLd1rHFsXJbZXQhdMC7qBruadrHdkT2dkDXv2tkd9r9btnevYUHsZbkjKF9royaDBPgJWqGsUbT4GB2mZSs7tKk",
  "key31": "pYikR5UBmeqt6WrFiNd4jnXZ2uMwADqCvrVrB4uLtGmuExZ5sKRY9j1cLqCAQAcqYrUPRwhLY7qD5niGm1wx5ja",
  "key32": "TpTWbrStnsYHLsSiAJJ11rBVvQtEtqHurdMbm8dJ6Vwve7vtQekaMGC4a9cLDgw99uH8pvUNC5fUNnisLYqc6xR",
  "key33": "5JTM5VPon6q3QvmoKtntU2cJDEfyNidqKFa3p6uthd46vgX1ZmHnHkeEpfFm8Xcf3Aw9dnJ8sUmcTiBJMXt16vbw",
  "key34": "FoDMHATDY28NXPn9G5JMAs4FJTBj3aEGt9iLWoqqPFXGxGVxkGHD2RrPabmRDc9UNYbf6BLDfWmucjx9D4jVTgh",
  "key35": "49vak5HcgyskUNSfhjHxpU4wVJkjwucJreArSES22zehtCaM6Y4eeya93qSn3XCT3c1q6JTGDx68KrkRUdc3XPVq"
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
