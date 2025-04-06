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
    "3heVQRcPRw2CyDkWzNUQj8mD7gYnk4ec1Jmj8pxHPUVEdbJMpMGL1u1gThVsiRyjEQjh1LC9khoG1BZ8N7uVmzUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fCHK1savBRTx3izSXPqEPn4XCxjG3WSdHARQXQwDqDg8eGoGq6W2X3zEfVea6sp83FDzSBhVN26gkDBnddUixR3",
  "key1": "2XT1bdxEmXaYfoCYkXRUFbeKcNKsD46yC5nx4J62nTxqpNzC7ajgNgv3UJutcAjj1rEgt7TmcaH2Qi1W6M37ncNq",
  "key2": "37QVZ3QtfncSCxFgb35PsAcqV7tA5hHtUSsTMCXWaLX8LLSKKjdm8SfhGB9u3Ha7mRm7AF474cP3eaGqLdxzxQAT",
  "key3": "3jbJK8wn1sQrnKrpXUspY2zFSUssTNDM8PBmLKEzy2WixMBqDcRMd4DvaJWQ5P5BQysYhB5cDN5F67PRjew2z37B",
  "key4": "3ZM3nYAGsXZ6QqnQs2Eh4BKDamfSqf8gHRhbvxZFLZEVs39Y3ri9mEJPMrMCAjBfAyBTQEGzcFxygdwGD5qgynX7",
  "key5": "4AxKdiaEU8wgUf66GRDviHn98Cv6rc62Cc1KLM7oiJTxw4Y5jJcwuLHmEATT75WATAsWXajotGBuArB3qEd4vFpV",
  "key6": "557vhcCTdhENDdpxpXYhKB552TxTzUaDYz5Je6Bm4YX5TcjhS4uWJim3ZSAdzYEojDyui6o5qM1AwMe7dFBscf6R",
  "key7": "4s2wgno21H1kmxZAzrWRopwsScwbMBBEE8ao9JoEptRnSNrbnqd4zHrRk1upRa8WDTTa4MMazctMKJrTQS8MCmS9",
  "key8": "2GQo4SKMLbtRY6sX81mEBuSZbncwSQkMaTPmRvoF18Sx921aQmGqmJ8BHrEybGPBftrMPogQndxtTggtg2EEr9Sy",
  "key9": "5EPRs8m3999oCHJHNG3UvTC9fQNi4wSwrAvL1AHxRxn1Uuv7d3bhqtkCwr9nXUXEHyForL41GkcivxE3U3CvCtN3",
  "key10": "5uKA6GcLXA8kckaG2eVCdRW9mZpFjtTD1zwGZf3vDhpTAQU6tx79e3yeZ6srtD5mxVEdRW2aNjiDigo8UVxjebWn",
  "key11": "YuFDZgTE2VyUAkUSMvaibk8i3BjmFPsWFKTid1gFeTxSg8ac28sHbf4cTqEhqu9EyEENy5s44AgyVFJc24CtrM4",
  "key12": "2nE6q5ru4kQHMzEYNVanTbrFioVNctzy5WhYKRv9ve1AcaLY8guKPPWUziYv4b7GUXadE49CFoLW8RzowbjVbdwJ",
  "key13": "3Tt4u8wa7MTBe5EfUP6wGRrzEBwe85LNSdc6ak3UHQdpYEfT6Au18jHBnhjPwoJZfuyitacqKMAHSZrt7z7Mj5HY",
  "key14": "5mpXQDrL4PtrnArWV7DSRR8mX24DvG7aAwjPhvboGNbCnJ1Ugwzvtt7TkNN9vgw6e5F191bKkbZNoW6VoFmZ9qmR",
  "key15": "2MMCpyYBHpvePqUGpMYHR8KmwMT82XaVZRZUw8ZFo9yPMfnXNJHFzRwKbsebcwMj6tfc3qeCzz7fLBDda37RgaDN",
  "key16": "3iydWtqzrwmuqhMyj97FtSnMSKhvpzBUtT3fFgwwiaKwGiBHoY13c8VoJ3tHShQLfgHWFg7B7fk15WC74ofvjYxW",
  "key17": "2Kyx8pexU26hZfyApieRS83D4uyX5UxgdnVwfMzHimBS9kD688kebKEmvNWz9mtNhS9nbvEJ7Vo9K4KqUoZ8sH2r",
  "key18": "4RMu48qihnJJSxe5N44gpcvJnJF8SqrhLjrjHoY6hoXBMS6q87vqw3kGvynytM57RVStyQPutXePbHN67Se7wK77",
  "key19": "3vgAMMaTtAEYzrbFmXhbVQx9w2TnfTy3euJLmYoWgYgDu4ezhePLn4tXPdo4gGVncvxMkECRCa5vkjTAGk2NSn4U",
  "key20": "pEVvyP3GDnj9Gb31NchF2MucTGGSzXBJAMS9sXvLqFK1AKxVS1PEXYqD1Tk11ZStgBRi8DFmApzWoXJPFDJ69kr",
  "key21": "taiPk2jJ2EtKgDV4gZSoRP5rxCgLgwZSjiiRAv1SVWCbJxfnmTANvos9vUMiASQFRXUM3RVXExVzvonmhyZmTTH",
  "key22": "5i12UHywaZUaceXqEtJ5aMHXeiWzEkJpBQ18LiLDTGXhrjwm6nwEhWjfdiAXDMJSbX1NA1ssBUMpVAoRHGaLJQyk",
  "key23": "5AeatunUhCQCaQH9rVw6C9dKF9uCWSRFiYs1NSytxuiEQNCCJ4LkhCu6Q7CbaRnJGtqjQF32d1sqz15JeALwjGU1",
  "key24": "kbuVzDkFN7FndzShKYkTWPyrfP5foKpv9YMNwcyCrW5wYVyv4o3WD3i2j5Yxv6fWzxq9XFa55izwtyx3iB7rfFi",
  "key25": "4qTauiusNy88JZ2MFev1aMrKAc9PYzhi2LRem4aKEECepPLGdkcLyKphbSZPyUTPogeDfX3BwexbAq1UcrMZunFM",
  "key26": "LxG7j7ogZ4Xf7NvULuXNZxx5dF5Xv9mPQcLTcB3F2CiT9cTow9enB9vpQKtSa7oQUubQHeUWGRzUadbex1ynkqj",
  "key27": "5PCRXQQ1yNjNRFihCgCBissjMmX5DkuHGRHmNmgh3Qa2idywxeqjU1kBZJNzduoNZdz6HZHECtjCXaqTRtwiPDAw",
  "key28": "4kTGKNfGFwUvWpbCdqMahXXEKiGvTuLorcYWizwK5y2uwg4aCTFav2Ht8BkKGoXchAP9giwRfCx7B6DyeqQbKi1N",
  "key29": "4p9ceg8DcDrGmPcNiTzr1nSo36Hhp32E6wsqBuYxibPrZGcbXhXCXSHJVNmaTnKPY48i1dffLxZqX9yGWTTrp4go",
  "key30": "5Qu4AMQhpt8nEb1J8dKP94ZZ5QCZJnGtPp1sx7Du9Q7EuECk2Jpx2M4TaaJRYo42j3bQdq5gADvVbt729YEWX97G",
  "key31": "36bpsEpABVfQhKq72ZmRM7jta9Tp6LQFbNw4ko9VfDXRqGVL1c8PKeQFL9JsM9r4TteSbK3hKvY6b6TFEkpr67Bm",
  "key32": "5NP37UdgHivdwazCtFEHCn84fShPG5knF5dz5iAhLnU1W5RAf235Cqhfq4W12tyNAZbbJ8teDtdh5oehq2Tr9xra",
  "key33": "3up6Ha1vecJJQtMpAhFNZFiYSCwB68B9MPqTZw6Qs8j4B5ZFmxWFzaESEn1bFCwdSUPkwXq4ymEKT9hZqadPBB9o",
  "key34": "2TE9sSf2fNRwgWSxq8H6jNCc4ivvMenktTJhNHs3mKqYAY5BdcCcjYA8F9TM1agTnqwgjMBzZCPsSXxHnHGVDSsL"
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
