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
    "3Hb3bLP3D3Wba43dd22SFfbQ8CvLYScCDmhhxtVKaTGEK5wYXnAxcFTzzoKZqmP1iQFKbNjBjRxtF8zkfe4BmbZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjYqXTAzTEm1iVPQcy7K89vQzQgUX1mBiEB6ue8McuQzqTJWK5hpVfp3HcbaFnNmSn5b4vD6YujToAg5i7cQsSZ",
  "key1": "P2xZURJELVA8XkgoKAkp8shnXWSN9EMKKwmBErpNdptSYz3YUKxd9inEq3ZeqMcvNdBTwzKuHCe8hCnkMdi1Yc3",
  "key2": "4RMdrXCHzd27tgd4YyBRkZWs33KfJyTW3kNP1B4A2EoRo6obk49ywiVuywKvSe83EzhvQ7oT9EZpVAVu5Qnawecn",
  "key3": "2PacAAxrTYjbmUPUJpDR6qqenNmyDiEKzzRDiaGTYFHJUTsytDc83mgVxZ7qeTPZ3jmp4fQLcDr7coMDv3MRLSyg",
  "key4": "5UPCUF144betmmm24bbfoQ97EJSpB84KLE3t94VYcHtbbnTLSE5fMnzYzFV1wbjPfPNsftKNjPrCpzp3WsRNdHGH",
  "key5": "5T5WDUL8LCAGvGXjhksSnpugTd1TLhTSKbt8bxrxubv3tAC1pPzvK7LqoiQ6nNsQVKVtoo2Xz8TWsnNamzdzSgTd",
  "key6": "2U7Kx37LE86niyXhpbkJ8dtwDArj7jDJDZ9FkFxvhhqWrhnvjG7zoJgMhH3KzadLph2CgrSgS7Gn7MEU1RBVLeMr",
  "key7": "46UnZZmcLqWWyzg3qx8xjnLkpP9BJy8pF9tb9Tps46fucf4mrB7XmHtaM373sDMsgR7aFtMPnyW83izyHxG4Mhaj",
  "key8": "3yKzymaiJTcMF1qFcLoAV66YzZGURjpcYQhdvmcERrxqnN39WWAcuautLWDwtakcBceeuod5nSvcSRP3cb2mTNBC",
  "key9": "24Ue5dvm9T1NqJiZ152m5PD4dVshjzsTEi36A5cLiGpQ7W9U7sN2UvgdWwDHoLnKj178WcjxUF8411C82Yumsfnq",
  "key10": "4eRM8AZ8B13HBapBF452sFe59JZsqDZQwZNC6uUJAKEwhXfeuQ9z2pQpBD4sx2kiZ3NrVjEz2nNhz9XSXVEh64PA",
  "key11": "4d7kxTba6TSt97jbE4LSHaUq7ctuWp1kNC5PgJ2pXiTjyuN3pbizsiif5PP4MjYbCe8SYWcuQWeVLUTWVHM3wzQP",
  "key12": "7JounKiSVVrhcxnLr9qVesEeYSXxwBFyFca7WCFKnYYZYDNQhSmbP93mUazodRA1p6xDt7Geu5zNDJTZcQsQBM6",
  "key13": "3yEV5hY3qQaZXzMYGaE9hDFguVudvWVMQLP3qwqHKkF3e9AtUAiAotQYyeqP1Mkkykwypf75aeWdVnCARimraABe",
  "key14": "iFSLENqyrX3VJ5QR3WK2w21nT4AWx4UiEQeSm1UW53CQt9k2gQ2u2WMGTUMdPsufYFRP8fDFAML827SB3AAsWHE",
  "key15": "5p1VnmyaVPPQP9ZHimcNGaovg1ctHY4L6Ph8j5bmz3Cpbj5MYucd36TUA2RWkh6JU1ZRM3fTKPNUf4kLh3tU9qFZ",
  "key16": "2CKggAcetnv2MAf7gXx7B3WoXnBF5rVCaWEYd69T3mBKk2KKCwYyJuDucju9qWd4eBsc7voUZsrA1WjU9XFzJs67",
  "key17": "3jt7ZwQkoLGpANcYBZUodmh6iabNkSgSiA8yEEFDtKzYHL1UpDMSrbctKNFNw2Cn8kvFDiiZa8Y5dsGkdx1wyjxs",
  "key18": "3R87uetcHxPi2TjgHfLv6H8mD9SxAU7aavdC1Unj6CDtVpbX4vhQQYBPunSkqwMaJZ7Tvy9GQAZPDXHLNjCGKWTm",
  "key19": "4r3iQYGFxA7Zoa8AUirxxjz2ueCetBjVSbJdXgWjVjPudpYePH7rZYeSpKSM5uMLt1h9w3ZRBMDZKHZgoSPY21mj",
  "key20": "5fC8H2h84vWBx2L7wutHT7mV8XVUQUGxQiHvwbSAv6JFXRWkBvMvvbE2NWxr3RdwMsrAyza1py2nuUAxcd8EEcow",
  "key21": "4PzkEghWaT7MV9YC3U3Hy2MEK32Sg9stSyuhRxVWC8ia71L7Gpouxn3zf3tUUJsxxfXWykGTHLp1Cs7j3nRZq2hP",
  "key22": "4uFQvNFcDr5c3TnVSGYfTjE2kcbnhWoVGiRESSAi62Qq3Ah4cKLXc78frd3y6ajQUWWKsxruazDUbYPemgLEysNM",
  "key23": "4vModdLWEjYPiMBbpwggpCaK5dAZycFjMrUNjAZbDRtddCjBx5LhLpKuxydfXvFkV2R6LzC2aTLgiACWuN6FvqYP",
  "key24": "3bYHrvfufR7ttokD7L2D8CaXhDTo9hL4fbCcgEaWX1CMPdrAUTUyAgHFn8JR2GzykuS3YmuyPo8ND4twQ9twqyNf",
  "key25": "3D54ECGYUFxi7LaS8hjcrCMPdFVzMyskpXEXG71F84jwQJwxbD54MUxuY1d3sEH2svNYj2b3szdSCgvfMv9Pm2qU",
  "key26": "3FYD448C2ikxFPn3uzHVw4tAY6SjG7U4jATantcWZDSSSaJkUCaCUxSweGC3v1oca7bP6DMHP8VP7xapvo62kBHN",
  "key27": "5VZ5byVYozzKHEAvSiwEUyn2x8mAJLsMyTEk4B75UGcSXUxU91zu4yS8WKNgkY9cjb5b1qVUG3agwvFzN8iMmaax",
  "key28": "4i6Ed4d3dhjqiPbHk4yYAgJtKBiAEiq3Re9qmmhBEXuLGhcVpVq85xNvoTgBzmKqrfXTL7Z9TPsXzymPSTn57eEk",
  "key29": "2KfExZ8T2zeRsm4zEjzSfwXzAUPNo16vQ5kiyJPrQyc9g7ni4uYNyfqBEgkCpx4ZoYsUYWRK4fehmu147CYk3DfC",
  "key30": "2mRok6AgqERZDLoPkFc7heG8Tc9qbbmDcvM2WbFuBpfVLVBLU6r7GQNP3YgJdgtPK5Uq1k1KmxHSzefCk7DuxqSz",
  "key31": "3pmqejjkYQJnz9rNHsY7uwATpnTPm6LKMt6L6DDywHXzEn6utKKBujp3muKMoKXCutXrRJeENabf8vusgbsAEEht",
  "key32": "5eqEvk1oMwS9mTkn6BrYuKBifiU5DipAurfPbi96enXteqcqDKH3nJZiHZ1p5vw8AypCVdth7dbjZy9yh46k8V5n",
  "key33": "5fxxuYwX7Ei4x4QyctLV2Mx6s3WojuNspZqMuAuTYbKLnbGPsBTkJkuzAHhfvx9mvoc6Vg4PGja8QLVazvza4mgV",
  "key34": "43PiBrSC4Teo1UQ2KmkQ77B4H8276iMRGDVLFtqLZcPhLXMrmxY2DJqebRwws9zG8eQLKcKfwoWR1fjJzoEZS8BV",
  "key35": "3rdELKPTz8oS7ZAaxaz4gku35X2uYFJrQsvgNEbSu6o3RDXRQDBHPazFxVaYWM4HgMYQsdviLvFzXvdzPbnVajCn"
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
