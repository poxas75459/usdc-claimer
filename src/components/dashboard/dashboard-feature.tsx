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
    "3Dp6jKt9DDqVsV3ToSJPpzHysAc31L9wVq5kJDM9GeU6n1rPznzaQTte9obLKe1zHPuCtawEbp4J1wkAXiGAFTTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9fvNTXTSaimUPdpk8FatLDNJvf1uBbxuSXTing6mqnvQXKdhm9cEhMuAExdkNUjo5BPEUBKXMebPGywyuSE5w4",
  "key1": "w8k5cvTJsss4hNUKWSHxSGv9ugqdSdpLq9ZKJfevEKW4MaEukGwaUDQVsLNmYA7frSHpXoYKCcpTgn5wK4e1UGa",
  "key2": "3ngKQxdkwscVNSJkTAUvM4NQveemTRPq4p1gZhhCP7WDKDFxNof5vPVaLE2eJd2sfbBj2axjsCqUEyP8Ecrzv6X6",
  "key3": "647pDSMzF6R7PJrdyB3xbQsFyHzgwJ1RCT74N2dErqayoy6fkgqPuHTiVCGAjHg3eSdkyY6xtnHmPYRU1KYtEJAh",
  "key4": "4XHJgKoVQCNZzygrYBaEzRS81i6LsLBNCJSsHHM4YbaAf1eEMhcen8nxtRQVUgXzrnB8sGT9vdAAMjzosfEvmMYB",
  "key5": "3k3V2F6tQzyUzFSr951c4t9UXp8g5F5rqMakb17GnZrnF7ys8qeSiCsduQzMHLdwPN6T8t7wUpVXbVcu5EmALEQt",
  "key6": "5S2Sxig86cPt7foHSxX4hLNUb3PUCAMP7VVxnQNPrnrwv4GRrykcxM28aEgYNVMdbzmTKPbt1qHeuy4PqTRq4UE1",
  "key7": "4LjZnGmYtQimCsgkjCt5hdRsP8keZtQCzUyc2tHCDkSVeSRUtkG2K2zinpU3EgmhD8KCoe1g3HJBmGVRevzDH4iH",
  "key8": "4QzkUpKvMcDz6HsBCgt5d1ikwb1H5UGqyFQXuTX7PWTrrtHHZhj5qpXFy42RGzEY91ARCFF4RorC92zDT6QXB4zk",
  "key9": "4QsarpfWgan4zvT3b4x8svQBTCx9SvKKdu7nBsr6sT959UNxs8tr5mQGys7GkSvgnvh8s3y1aiEtFCySoEDMLTkH",
  "key10": "2GoYxP8e9nqmqHjiGAhDUvxTErMvawd2YZVye5JnymJD8d1Dvvd56VZqcRM3Nmcs31cAcpNKxXQkn1ojBCxq4Pze",
  "key11": "2Y4uptQMBposRFkVQk4JDrcTCTiipc43TBxZrwDWqqZJVX3yWsAAMEeESZL3RX6uKT5a1EKU8wuUYoRwG5RTjw3F",
  "key12": "4TrkhEyLsBnidx6oTCx7A6NRrNvaLEQ2KUiZRLCrmfPMewJGdBfK9g2xaJoPSTBfHJ7yttt1EQdh86UMGDGchQo4",
  "key13": "3kQkS9znjGTg7wuLonB9rvUnLFGc8ot22bZjQjk5iYdyoP5THhz1UudfPPFmazxPAF8fWiBwLiqSWKmzBCjzToSk",
  "key14": "thL6MMRHua9bYW8iCpsd8PeGn4HWPGWGQgbAvreRWPMwqTuUH2AHyC5CcyeNZcuD6etFJvTXwG9areaAvocKhs5",
  "key15": "3xA6KAfCcb2Gq5XFjsbtgyktX2L45cvrV9ZrbT1VpaThUcDg6yv7aEG3mzMMbtBX7j19XQZyYp3LARY9Kz2KzZY3",
  "key16": "5auLtPMexWL4btNpR2LzhbSjqhASxViYv6VASctMS2v13dwZFkcFx5pVasL1oP6kZvrxEZkW4be7oNVPg9YAEnes",
  "key17": "2s3YY1ivLxMbZecp49rJicJF2ysmcnBuqgEWutvTpZ4UhxKetUZatv7CwW3vurQCHzPntHNnAR7hVAFhU96EHekc",
  "key18": "ANTDwCTUCf5hgbgZ31JCxWJR6Dz6dZtPP9wF73nTrkDhqNoyWyNwzVVux31poTmxZ4WpLWWZF2b4HB3qLN2TiPS",
  "key19": "4PsjuasZrwC7xNdkEVrHqCkyDh9bbdeTzBbRiwuU7QUjgyHJhS3y8kgesxYjUa9UMzz9iE9pxZGjVgRewBmdhjfP",
  "key20": "4NByy7mTY47AKE92EQCWPf5nCx4kGqX9BC3kCjnxvHf4tEq2FRaWjs7N5WUecT5qJws3GgB79n9NQtCv8LUTHdSu",
  "key21": "4CTnJiZNY1x9yuFmm3CHonMD4AziT12wW9SeLqeTbUUjyebfnXeDPW7zYXdXYRjfJsfomcGc72Wj8nWPHj8WumBN",
  "key22": "5bpW9onzVX3DHk12Ec2DKZrF9ABiHXBU7WJ3NGRqWbCSufDtRzmq6zKKxPWUEYvSqFXWyRjtog7HC8aN2ShmGySU",
  "key23": "5ZZ97K2oedRC3zsrqscF6KbPugTyb7WMgn555uVmfHF8fvDNJLU2hE7f1irQnErUBqjakNbzhTgTE3hypNsNc5xP",
  "key24": "2GBW8CaMSnfXvudiD592wcN2stS4zF8EhYaq2grBTacukZTtfKMsUF7eAgyN9VSuGczzwpTHxrD5d5qSXDV87zRo",
  "key25": "4bMapDjswnKKbLqXw3QwPJpJxxk9YNwnfdaxUYo5uyPHCerwFTN8irRFfooQTMS1y425sDSBo7ZULpXMf4E2Vojt",
  "key26": "sWEyUCF1BjhZUWH49j5nCshbYtYfyTWXyEq1LjFco3RT2yDdr61fUdAvuMpAkVpVoeh6k2xNJUN7BFteFfRotsx",
  "key27": "4EMg9UMArVB5E8hJdN8HQ6x663DbxxMaPG1WtWzbGpn3AweGgpSYUiVCyu7YYWYPx97JgotHoXpQmNKGo87kS59v",
  "key28": "2uKJeXhTVapEfHfJsFGcwrLfTZw8gkGSrqg8G5VnptC3kjhMSYanFwzoCq5x7UxYoD6cbJqjV35pJ7qBjRkedmvo"
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
