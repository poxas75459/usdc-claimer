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
    "HV7csfXFZVJ8PmVBMgTsyTwMHigYK6dCu2yuYABBvcH8FEsCmrMHGdA3RKARwLumovyN2Us1kEMV2XXbi27pWvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hzMbkNLZigtJn8HWFePCLTkYzpouaKATiz1747csTuacmo9si7hEb9sftc6Gp5889obKe5So6u9NWNPDQznHGov",
  "key1": "cbLdZboSp2kXeGGuxvYGyEQFKi5Jk9Kd8BcrfRt7UJHuvEXXHP8KPdkMZHPYsPp1DzSjKkrxmmpLhBjpPw95dwS",
  "key2": "4QSm7XpQoFyiVmMy6s3bCsVgFCSR1qC6DTzP7cQcbJsBrSFAxyx6SnMtEf8n8zSDqdRFTURB4msjCLUkiEFz5N3p",
  "key3": "5svxy25fjQmR93cBjGPQrRuEfriz7ajoHtvZtSYnk4JkFFmp5ZhbTAAmnKXF2D1ZnTysF6iR8e1JXAaRkHiwK1GA",
  "key4": "4TwLExQwi21zQw87Exmd7syJgFNmU93Fkk5AvRpz3vuWA5YHE35kHmpYrkG9Cr4QpzJjfKTmVA6admKEAd4UAo6N",
  "key5": "3zP45eW9L8JocvTyE1fJtUaNNSp7NH1tK8CLdqJD1LPRpZoxZtFoaDg4pRFna8aSpyMcYetAc6t4gLKyAyusByR6",
  "key6": "4qDSqgW8QRDRy8CLuVoso8WGcXsK4GB2NyzgRFqUpskA3jH8h44wjUUWmR6NGPXuzi24K65j5fgutvt1ndtBwzrn",
  "key7": "34ee21LWSqr52GdeqoLrnzXXBDXjU3oSszXgYhsz1aY5ZHtGHM2kZBn2z6YhnogjBEUsGcEohTpoZ64Nd3JwALhY",
  "key8": "61MPc4fbctgaahCpfN6CkUEs8VcBpSNPozfi717JWbYPegdGWJiCgWr5kxKCiDDbvDXWaCUQyMwjgt2brxf5JNrh",
  "key9": "3k8upWsXJQTrRdpXwnAKiMdG7onfjzyrbnMkECMbJ3TYpdDCb2RiH7hCkfAtQ4YqX7mfRWwVzwzNuYttGsqavxYq",
  "key10": "DnZy1rksSKDvpePNx9yWPkBnymDew49Dgc8HC9T327GvBxCVRkp9gWrsR2ZLmqxbuvzQz8EWCwtAjtE7hEjz9GD",
  "key11": "3dXq43pFj5XEHr31p3RL8pTDvB9kTrjGexU1AetrZSQovsdrradJy8YoCY5CVPPAeQBF3NiMowWZjRsQvXE9S3Qr",
  "key12": "5fNJx6GzVq1ZpGzJc5SC4Jv5uyQkt8SzzmHdp2UY1FkEpFT3936VjHinm5TLBEhH6dHjfJFsZeqBWxdQ84LbMt2S",
  "key13": "5zR1vJP644T33w7rh1XowyKDWeHbvMbqDVFp6TGAcYYXt44wpate7wFC1UkJvzWnCkX8GPtvViVme6L7FvwyXXBe",
  "key14": "41QkdDQMLFNb15zuZzubQakh5cukNQmTWyMp8QbfaaQ666EgvDRa5Q1x7AtGuDCYhfNUwQCdW475QsB2ZiWX4ppF",
  "key15": "3FFDYJNMHd8iPGU4mFRJDUWGaaCXmyicEvBr6Tb2Qa1yBiiRhvLgMoSdwojs9caW4RYsH1cDwddgLcLwe7wN2HxL",
  "key16": "5eupAXgVBHKuyXAnFnioKMtgNrgR2LArunCUYxzX6zhMm9wW2AtLnsqwWayUGGcdrNzMLiUQEK3hQsBkN1VULoKk",
  "key17": "5qEAYEA7oXtb2mq9EYjDtM5cayVQV3qiuVXbUT57W1mXDxBKoy3N98YP1AwjyTVK7eStopnADZTJihsJWCLghUm2",
  "key18": "2fDMuFtKB883YkfRjep585zHAxTbufcT3rQBN1z8PH4Xeemw2NsXsgJa4KQeBUyjMqD6o1qHhj84mgmKgs58MpTu",
  "key19": "HoQEcKkbCRT5Pao88ynBkp1DaHoz1cpXHeSRjG2N2J1kMdzcfyJWbWBokmvmArmBGve2zHePicTgxJeWu5fs8k5",
  "key20": "vkUkP7DsKbXVZfvopYUvFipbRh7Dy4L6ZDFEnbXBVCi3rgJSSNKNqtDpaBsyz5D9adpSEquCZ211sZnMbZcYLaR",
  "key21": "4MJ7xD5GN9kHeCWFaantJfMhJraqLUZsmxu6pkuBoE43KeYX9vuGoEPPmv2CAhoZ1hYSpBpEYPJiXUCYEfBBgEEp",
  "key22": "SfKHyzxvpRxhGNDnXpiVrgQv1pd7HuaHQf3yBUJDitWHnDT1UwLj8Wit4E5jAjLjW1YC4SyyDpA5Gtvv6Sfag5m",
  "key23": "5W1qwkFqJvgAkcJA6QiV88AcbPYEh9SqeY1D2Gjum5cUkN6TbXfXVfemKiSdin9AQCQeYKNdVW7KSw9Ce5wkPmpS",
  "key24": "5XTbti7M7u9s8KbkxEkFgJrT1CdHtVe2sV5uzpStCt5pYMwEN39yYSYr7LfVHabYj5dkBuV8UVJ9LZygKv6eKJMR",
  "key25": "4q2LW99hnJZzigNd4MJgfUfXRWBuHsCUDGQM7SEHsiMr1C3ih6um5MonPEaA8bJzRHANhm9AzAojhPvT3eTXoPbw",
  "key26": "M38j9tkrQT8HzQ3UnhDw4wqWHm9tbMk45vc9qkY3RJ2pfPqCe6LkJTfegtWsiWHDrsjANbAs14hMZp62uaTbaTS",
  "key27": "4gXodhd92ER7BnMb15TziZ3HorHS4mwvEut9jbBnxU6QMnLZvdRhX2M2soMwHWiW7JyEt6npGfLx9Hu1zAkdGwu5",
  "key28": "2jC7bgWTMaYiWAutANFzLU1veejw7HhxusE8x6jhHfgixWbqdFrjEyqhj5pvJn9S16TYQiHt1BzHbSijuibpkKjk"
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
