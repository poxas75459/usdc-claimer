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
    "4ae8GnEy9vAbnWcECJ9o8emWiEsxP4uY1Gqi8stYoqbF6cFRWkDXajyMv3bj1PZitPVQ3ugJ65gG67LfdfWwxNmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JRW1iSpgZHBRm3WnTLgkkSW4poFnsdsJHoEjhbEAGyAcVcBZnyMBGJ4qihKbeJ8opjLueLdn2VqSfWaAtnXtXAE",
  "key1": "4hQjQ1drc8BzhGgBqaS1teFSUGymm44sa84cjmz6zfJbcpZgZ1Vf2UZBF9bYRBMMXwZjWdSM65zPoEiwobduE6PW",
  "key2": "Ngpm5b1vUetNW6TJTMpjTzn8JMfXmWgRjtEwFoncvy6Nr49DTMDKeHRP3Pwic6dHj3jCnn3DAChSZQaChkNze1X",
  "key3": "yt61tqjc11ngWbpYsmJfp1v3MnvkDJaGzQsayRWM491JseuGknJPbxFnQy7sUPDMZMhint1r2oiohhtJcsBX8Zf",
  "key4": "4RfHWs4c7tvbWzM7mc7XwKsdnSySmW56yrrXH46Lc4JcTyrNLZZdHE1AEWQzJopRUP31cGKvByH8s1G81rMiZBUc",
  "key5": "2HuM3PkDWb8BP1jVgjrXE7Fm49r6tFdNmu4yn5UKJDZRTrT6QWSNyTtrf31KvwJybNTBYWpccd5UhQmaSEF1fCix",
  "key6": "2Z3LgopPs5A6cuyR9hyLkdtAw7zHKSksoc2Z7Sb3CHhETvHNAVpChqfQ6HCHPFejbeP16xr6oFXiX6HEaVeqYPpJ",
  "key7": "3vmn33ztt6tKVpDNY9MDoK91NEmHZmE73toiKuzCqFU5wA7oh8KPzwjumWpY7uU9y1hLUobkEAYBxrVbie7PhUdT",
  "key8": "3mSw71E8kYMNv8mCgwhfL4xQAXQSea22JjtsG1FE4u1thZyHTL25sMZtNGGsjaVfw3zVEgUX6sWQ2SwK5sTokuhU",
  "key9": "3bQstMtqbxLhJYEecW26hyZm7Pki1SDb3xWqFTQUQdfDqAiWc3MJmCBHJy6CSY374Fyp2iNwoVssa9yPAwwVw8qt",
  "key10": "3xR39dbK9NsekyWvjMJDWN8T4zBb6B4hU463QkgXiLBe7Q5XQXHruqpjUCWythiswnabLRCeTdW2KHN8p91ZjHYD",
  "key11": "2Ta5REUFAMH45PnkseTVK87cEZdPwX9hqxF4BEWkzPMtAi6KM3Jq3oKR4zSAbKyded7bbJ7xHVR4zG3LK5e9FKr5",
  "key12": "3EjVgSG4VVuR8Cpbyk8tYNyGr7TZiuwn95W4X3fMRgY1aAZDt8J5HqV3TjWNauwRJwkSz4Mwd6eRnUPZmbv1fEZt",
  "key13": "4nCtF9UT4z6t7hrvvGpFtMTpHuMi77e3uxMzDKB5hUpvxJXvVhz5Af3FsWV8bFqEbxmANquR8Br1Q6dkvdgVRJ2",
  "key14": "4mQQuJKBs7qMAfmNqX6cwsDyKKvLzLWc5BmHNspBwQKE3PXWcBPiKN6HFUKCSczdQrSNx8vd9fNbXZso3hvx9z2G",
  "key15": "PNpUXynfVrKbTukZiaU5CTx6MDFj64E88VGamY839oYM7wkeKn4MFGCG6KmnbWBK8gTdmTaBpLYBLcMSAfaoFbS",
  "key16": "341H9wiCKpwkrsd5ahCi9Rsfr1JHPoGRMKzP195vQyncPLefpHkbmb9CGcT84hxAXzuSR9r1qAXpC4MJ6zzdq3gC",
  "key17": "5E2Hsp3YreMx9CJS61n1d2KoKNBj7USFzuqS4Gu5uTRA7R2NFJ6CDG8GRBY2omQzaL4yu6u1vGXRKatz5WCPnq5b",
  "key18": "5tQBxB41qBAVYSL5vvK5umnLS5cZ8wGg56c3z9uxVyWHfghopGHcWA4yh3tp7UJ8xaDb5XmbB7ncQPL42wJybUzq",
  "key19": "3cJ9yhDTzpXUgSdgWr2PFDybka2JejSzpdGg4aNChqPwnHk2PQ5yNZruuiPRfLfrWbeGgGbCs14PeL48KBZt1igV",
  "key20": "5Ckeo9L3iBMV9tbWTUvRpdaAkrjSBFodHJNwwvhHD61VNdgHw9kASbYeoarvbw1iT3EVLZB5cyYChHRCEJXWRgqA",
  "key21": "2B3U9CkEr4P4w9rEfurMNbfHVgPQxB2Q3pQA12V548DfmgHfNdZsrYqFUj7hwNKFoE7CTnQXtGBtDwRBdcMiTWFv",
  "key22": "4Ct93AC8HcGxVPkqQoJdNo4HRobmBi1mFgyUnLyNnq9NSsdPGnWiyoxqmL5ADSMsua4N4p7jf7HZYjVjcbs4hckk",
  "key23": "4WX8Heqy5aXjCauK8MiHR9zXkbeAbJieWYxhhaZqJiCLEyWnosPjN9NdTzgkAGQSRRd5Vpnvn2cCgpku8WLzqKNX",
  "key24": "4VYKc8VKovmugezisQcmuKuj3DjShFhqsCej31pJjXPuQym9zGhBNCMMWBmdDu2N6xyxRPpQvnc8Qmv4dWeZkWoz",
  "key25": "2KghRwW7HBv3pUSunt4CgrnyKtz84Abp8R6vgdFszbDvBeGo5fyFqDYHdjKjdptWMDms5entAB8LYQqsCYP8sLrQ",
  "key26": "2cRQsaSobn2hMNmtU3jUApBQFM5KjRXQpPt258xJ9r9rsJWdb7VkVabAepnNW1d2eV79sAx9pXqLTcexqqFNtYMN",
  "key27": "4kvAGGHr7F558ff85DA8ENT5N4DP8ooDoNL72zC6VsuAEZoKi19Wf7LoiKSqEk1cjWqYCzxwtQoHQhgqDur3UuC8",
  "key28": "8S3iPhLPc36mjJu8VRPohSpGhueMKCfecoWUnNQ5v4kfrtCMDdQS3wdNRPrf6HwN7a4htVnSjUD7Kj5AHmaSwoj",
  "key29": "K1oXmY5x9Awa8eKAqfirTswADVfiYey6cxu5EkhEh37BWxGsKVTLUDK9ojha2r6uxPEsoq8t8Q3XFKdwsMxuNau",
  "key30": "MAL3RtTmcTimHLc8MvNs9Unt5bxgrpdHNxHEFydMh2DVtGEQCypT84KjqkujYdhGQ5TY28aWch7Ks55hWFoqtC4",
  "key31": "3qhb1Fk2ZVfE3EJ1yNyiP7Zta6jQXPxiRGLiQwPdj7e8WxAep6aT97MECxp82JA3451yUnoH439QZtz6Av3mzb6X",
  "key32": "2QiTVmjdGQEriZWRHVs7o7pG2XooVkMfr9pfrzrNKr82FvHnT4S6R5kqX8zcwnFS4po6NwNRsMT5rbF5Rn2jciFC",
  "key33": "7Q2ciSCijMPc7RbXYG1JxRHJwURPiG1hnTpRXccGpt31noYUvRZN4E2drsrKvD62fwTR697nN1TMoA7jgNGQJgV",
  "key34": "2c6Kw1zZ5TNME63rhPcnsNLwyV9ufBqrCpgmJuRxtKi5e3jvxuRNbp2eJyPQnoNWWBXcM5kG1R8nGsaKMjkbmspY",
  "key35": "3DuwCieSsAd1BvX6YMqfeKYsF1uCioZGnT5PUwQRDQ7VWTnqtrmrnDveXpMb122g1nJAUQY3Fx6sH8c6bn6Cherx",
  "key36": "2gaTnkb2aCDEztuzzJHsT7rFTyZDtrtYKS6UxyKzgsoH9eRq8ufdcVVY6L7hzdsH3XcwnR1gV31Hs3pYLeT71UJB",
  "key37": "5kH6v55PgLdm8KtgBcmvmWSsB8qjF3Xo123cyjKVoYF6SHDNQD5RvPvMRWuXrrsRFptjpRc1XapxZjkzbJwWt6hx"
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
