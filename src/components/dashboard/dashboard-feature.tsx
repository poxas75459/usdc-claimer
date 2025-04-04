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
    "5xJq2QKyW13mKTnBtAbsDkJHByj7AFrNsxfFmnY4oWY5kjyphr7xiMr2DuNXrSpcBt9urXCkkv82NQJXxbAyV3ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67C4SUNziKUKiu2PwZtRnzKcKNN9sWx38TtbCEMuArF119gVEMLqXsoHqvhMbjrtGSYADhPLbLxb7HnRo7TY8Rs8",
  "key1": "21mfV2WrTXjX1w1dDn7v7F2FQY2GdpyQTdz9oh7TuvRHpanEcAaixJw4V3hJp91hGbcCCXFWm7UZJbMr3sHCgaum",
  "key2": "5A8rccdqB3JBF8dNBpdvfTJitg6FGHJvC9BBGYEebgUosNJCyfKqWuSJeCBZWVzpB4vtwAkbg8EYstg73fbve69u",
  "key3": "5yQ6hwFsZFwDtaaxq8tUjDTE3PFEdyWWUYiNPWFZy27hmk6ABesu1GgpYU2pT4pwPfV4xatVprBmTwZa3UvuJLtw",
  "key4": "5pPsQdCBWntSGMekoCBYPqHHkPk1jc2DhiL8M5N8wcECEwq4VLuu7DidSTf1sYDA3pKzstAeucaWB2d1tkvaX5bz",
  "key5": "2ff45yqF6vEFBv6uZk66jBS45PjamJuXp8g7YN3Pny6zGj1UTCXfw2YFnEhxhsDs3xHeAMSe4Fyaiq2imxX17vfK",
  "key6": "D12RxG8Qi6GBFBuSHGsc4ijayjUC5Kxv49oPj4mtYpHJUU3hMt4pr9bznmJ42bNBd2TWsxm2oVX41Nf9Qq9fiTs",
  "key7": "r4qUpw1DZXJidAoEkvVw4giQze8ogaxhDysKob7zn5JUsPV39bam73Bw125zciUPcXeQUVPb1T51qDg9G9aPMwY",
  "key8": "3P3mSJWdAicMt4xwzMF2k1vjCtbEat41JWaih7WPRAawokREiutUYv8wcde5ZmDmCzi7UKde37avDioesvjLbS7r",
  "key9": "4SBzu66B4yUwqSm9cgKDPM8mkDaKPxW5Kmz3jwLHH25uqNCt7UrKeHjyVPM6LmznbVSDRJFfMGsbhxXNkgcSmz3t",
  "key10": "35svxZ4mjrBNzmQYuKTCDJXaA5hMszUJGYfAXfgRwu78aA8scQZ9hu1mtePVRqVVkcf3bwzetTVvG5NwSJykXAoo",
  "key11": "4LCPm4Qr59vJpqD9tFBNyVE3zksdvgQx9VLh2Dre5VjKPfK1CX6sDa5pLXGn6c3X4AaPia6dWRpiKkxEhpCLpDgX",
  "key12": "2zWiva3Vzgdqsca6xCW8RZqtrQYRtqX1Fv9nruGq2RKx8u98YN5AMGakmJD8BKQDzN3SoQyzYuS7sUbMiuy8UgAf",
  "key13": "57vantT8EjqbDuu2AQ8gVU6Yc6bcbUXhyb7XFg2Mf4jSgQbgTRApXzgqUHtHfmD4LUkKQmcTgeM6cc9mRb1cNysz",
  "key14": "4wMzpFqBRYgoThqzU3xg1vh52QadVXwAwd6ekBzzRZYUSy9XGz7jpdxm6rrqRTWcfNTdKP6NNmF5R88YxFmjnG44",
  "key15": "LzNUrrdcJSJoQKj7C63KPkw1shcqQ6bhRuzFvpjpocBMwKQTWoCPUgPkSjwViL6n5u1Z9Gcu6afrXY2uMXyYoST",
  "key16": "Rk6CDWL1qAzaLwe4oG5jqfVFYWjBuGBtAf92FMCANvSgfmg9C64z5S6dwEcK2F1nRe99aQL9CEc31jBPpc5PmpH",
  "key17": "axyg9LYxSp4fRqTR2zhHHttcvDgS56s3qv8pV48hEp2VPrD5v5WuvC5y7x6V8sbrVWNzTAij4tHDZEYGYcxWAyV",
  "key18": "25TowmiYRiDvYig4Gqi38QRNUisdCtgRBa1m5wJDXLcxpEh48KXCeABQZT3u9xZXC2n3icyj8mGvLrc7H1tfeSpR",
  "key19": "3ZB63aXtEUZFH4z1YC64XJX676K2PS1surgfvrwWBGYiJSGLgjGEPe2XG8xk4cc2erDWXhRNmqudS89Qqi289gHC",
  "key20": "4svMncwzs4UhbTGhNnt9BcEqbCpxpbS1bAhY7FC6ePMes72Xuux3b8Z9x1N3tVhrhAvfxcfadCK9jXrd6VPVAk1X",
  "key21": "id9Tn5KFkNLwKdRizh2tAKmCGwdtBkNLjmDomw4CQkrcXKkMoAs4KQrQH7Dw86kC1wAat6oB2Hbnc7M8SXq58T9",
  "key22": "VfK9NP927rmXJN38hd1NHVc4c4KxqMGg16Aoy74H1EGCfd1Fujag7sWrC9TRc3AMmf8kx1DzZPvWeWonqS62Dab",
  "key23": "Riu4DcDGMcqtoaw5VUsvwHmyN3o2jt3dFKzRNgPLXL73665fsTvzYgQe8jcCgZDfAn3dszB4stqx1dRu2qW46jq",
  "key24": "2gSpFydJWJPogZDB6UpHtV3k1dPdfDZKqWPBKipWQ3mEAN68fBVBn6mLvQ6NJL8a1UMgTBQUugMa7ybt86JjupM8",
  "key25": "87kERHpp9yVoPK46V1SnE6tJawsuxUUmdcHqSE5LNMaSbFwGvhouR1QRu7HckKtTJJhM8J2JZq3ne9E9hgBgjxS",
  "key26": "4dbjyb9c98jYKkfTxcs2E2CY3s5T3cYWiudHGyRWeztkqTpVA1kvaN5oCTyswLtU8dBvjxmFfXrbf2FMNZ6awH9X",
  "key27": "36fiVfDT75L3o7rDihrXmZmEnPqZXNzFhYzHQhzAeJcNfg9eVSX9muydnctZwJWZui1jwMauEcgSgyPznWpReD2x",
  "key28": "58eMRkM7JPeZMULtnPqzDR5UKddsgyVsiE6DwwKMKMxojsTZESXcQVsH9eVniWLjfRaHMQzpW7ZKqZNbrimpsR1p",
  "key29": "3ctooop93EGGYZz39HdpQwLU4fEVEu2J2QEG5UnncYkEEJgdTuqsXNLLSpKDpWCFZURdk7KG93eQDmEg7QKnRzYe",
  "key30": "2bopkt5tVWgRkATD61WWmac81SVAAbYmAWjgLX4bCjuVURrrm8ADVGZ3NN8DHtjCgy9PY9JT4s2Es8QprJ5XBKHm",
  "key31": "BtHBGsF8ioz7xDFms8eNMvBVxZ5oTHCEntKZwkEaEsuAy51zVdaAn9Cn2VBktyaemZp9vZPabAVdmX6DA64Rbqh"
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
