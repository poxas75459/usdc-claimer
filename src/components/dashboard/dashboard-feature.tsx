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
    "53Bf7o4rCU1pLp1zBeqzRGCNngDY4LNhZoqwR6v9uVr74QPZCpfTXT5A7p3385UYHMNZHqZ2VswnfsNmLYxKFe2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2mLHm9D49MiR55SR7S7bFogHxqRGSN5ag6BK5yXRDsn51GAAF2SPZfgM232vnSDQfGCZeYa3BU1z8HhXGLdVUb",
  "key1": "SFXr7qyPaPQvAqvf9q7GDA2MGLtG4JyE1i8uAQWYW46j869P6DZRjXb4wyanLL24M975krpMNgVSa9Baauy8nF7",
  "key2": "2kYipStsg5zigptPyG3hsxDXwfrcvTa8tJmJyCDEAkoLkJhRkvXntyq46ogsXQtbQDVvW1BHUzeMUFGaeFXDhJf3",
  "key3": "paLQt2dYkyXRUF17HQPPDNDRvxwhhSBUcgsupF6PJdndVMNc5Qp9Lh5nQo8DM2qL6o4zR6sCYhzyHnWyuHvBCaM",
  "key4": "4NYFHcd6pG5LKbjHyfCc8EV6AczNrhZ2HBVkWAyPurR1YiMLvPiscaCdV29HHoXmXzMy18zohMmNFmRGEAEt1eW",
  "key5": "3DGtvJjQjnKPgt5mPL8rijTtDhSfNU9DPMiaruiUws9XnJ5xvmVt7S7BdngrRW2jXNEi655oAQpSPh9BhNL4XquN",
  "key6": "372sP7hmtXMnBajJWHpu3Y5fMSo11MYTZWezsZuiDhDBYtg53aTpQHhzra31ofxLWzhn1MHCFc4qu6zWW5hcwbE1",
  "key7": "4bMeQLovv7uuBF28GxMdR1SjHJQXuV85cA3PjeW1XMYFNXxUeb9LpP5Ac3dSHgJ4WbE2LvX8PZtUYyHyhZnioq9M",
  "key8": "3Ye3gL65J6iE6QWqbd2qS8XQviPwpZE4x9xoShYECNemKaBJrTeyCXGYMbx2WBkcxxCE3RkUWbwaW7MUbHVgPwe4",
  "key9": "3Fh8rStMm3mXvaDosde29BZFC421ZKvn6Yof5qABQVKqW9ueWKbViTo6tfMJjzwTvceDe39QKB4fY8Hk4j5H9rXd",
  "key10": "4TMMCePtmLU7KuqjUe9NNpHGMvqXpY4eLuY96Xi2vVp3z1k5w3LJfgfYJV6j6azrmoMZu9egnLRAd6Y34G1MpV2k",
  "key11": "4izeYG829dp6sNZxy6UcsvFU2ztrBj7bsEHRhSzaixwPm8EA2ThzNUajDdEMDmGau2jkcZEoeNynqDahTSWMrCiK",
  "key12": "2dYX3tnyA9GVsSkniU9urCdLWy4JDsbvSSG3FAJsAmzaHCSptywrzTsMB3DKfMmmJfUdSwLLxdjLwQRAyyezHLiJ",
  "key13": "2YVswyKBDdCZipxRdN2nnMtMwkM5qQjqsDBd8cjAWcTLLwcQJ5Qpyx3XnXedzSafi5Dagp4UyzBJ5EYHn6ruPVPk",
  "key14": "5cjRm6f67GSdduN1dmMdTXZUSEfGF3mUj8MzBYG7qReDgaXso87yzxMHEMmKkcyTXAG1JdXvTzS1ZWKGcCgaN4iE",
  "key15": "5S1X835VwF4diTa9D4e291Tf9DuQBNpSJ7iiGzj4gzAEmzNeJghcsRDssjFC2nbYnxRxVFZaujpaRgipfSk8ZUbA",
  "key16": "5KNuFE4PpcovNaTEXXS4jcCfRUBDBoPj3VzfsVB2kbLaXYZNHoK3Qm9JjdVqBXq8NVJ1VG8kP4MoemDExNJCU4Fd",
  "key17": "FKvwL1Yj2mwV7rhRTmn9LycDzs1hRxpzBEje7f7y6jqgCg2fEaMSPcRqB4F3V7wGHu9LwPbWBDEtwPQDcjZCYY6",
  "key18": "3FCkcBuBk7U4CjH7eXwo5UEkzbQ8q5o3BoUdQB4KNzZjqN4uHr2yNV185m6B9CzxigDKBE6kdVKDiYwtoXDofhV9",
  "key19": "iuYp1CmMyKfg9RrgiPhVcTF4gdgE8YawqLnd3RftYKVgr1u19FMHTAHJp46B1LRBRHA7zxuQuRfULy5p8rSqPTz",
  "key20": "2N8ghA5cnBz6w29czewcpqGG3wzLJFH44n1HyxHkVwjebyh3TVrBkVEjd3XNDGDpspazxARKKSJPwBejPocNgHQH",
  "key21": "3RtG1HVLj6BpbzA599GgRoquZgTFZLJ8rrZDTEQe5ksBc1TrdozBaS8GSGivDV7hCZnaG9NhBCjmgjWpAaNuio6G",
  "key22": "2K4ereK3S1Qu572S93ZtcAoexh4BnNWW2ygGN9Rgxs5gN2DyXK4P4Yiv12CDCa3KVWYR46kHeT4f9MNb2LsdAmoe",
  "key23": "5fSKcQiz9kVXMZtEixnTS2S8npNyksvVKsf8HmxfezMN5x3jp6YzaWEFgvGZ61hhs6JJhEjrbHA3cyorbmHpsVxW",
  "key24": "5dnL8FVsoWyJ57NoTwLYBxyHwavMSZnxWajdvWQ8U4JptSYV7gRCf4wjT9BhXdAcHfbWPtcq48XJFuAM4V91bu5L",
  "key25": "41ddKyeZtzRnL9xsebNbPKZUSVwsHJrhwrWrZ7mDiGHtPopK4rjv7ey4zSmwgHStnKpuUYNEjutEyL2eaVzF8MyW",
  "key26": "qN1B31XeCyYoFKgSupp5ra9oYrcsnNaa3163TCotoKmYiZp1WP8J6VT7nYRK2mybaDthNvzV39AZGhX1yk8qnLW",
  "key27": "4fZqYqXwbCQYjoikVMM6sHjHxcLsPzU43zsTX5YnVT4cSCFWaGKye1hVLGziyH7EP4V1fqokrodx7qq4L75DeYbR",
  "key28": "4Uzmk7gEHFQg2gMJRBUvGymd58yzeRoofHCvykgoH7uLJpLu6zbbdKwNyf93GoGMaWEDekJKsYZAZVD6eQA3MvAm",
  "key29": "2QR4dRdRCFLDoqiVXeK6MWZMGQSawWGF6cBE7FMFT5L9yt22DhrfgvC2CahLXAUNQhbvTp7x3FdukzpXdTcwyvsP",
  "key30": "5Pgr3pDGb3Raym6L4r1uh9im53EDV1Cj8kyuVvDDu1kD1cM3jV22iuHY466fZuXzqEtFq6LaR64aCEeQihUeUNZ6",
  "key31": "55xvkZtk5G3bNYrz4sSYmVdAG6dEpX9V8vCazRSEP8wkXSBVkpLc9oDwMHsxFzCrCMpxCnrGBV8ibbu6cEg7wqFM"
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
