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
    "5zxQG1mkF9QEMfn5cXbnRZp5ssad951KuEPaFFzyQCypf39sW6PJaiM3Rp2a8FS9VTXfQ96D3RFuJKnK32HGvWvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdPDYAFSJ1kukhDMCDS1MKwaZsK8nk8qAdZuorKBGVC7JBzVfnsca3qEkLSWgAqvcdV5hJo8CuGZFgVXcJqwiMR",
  "key1": "2MUd4G868v4dDX8UkgZm3AhPXKEZxyXiYhTQoo8DMxtPKZEkkwhCEnbn4jSiDBvY18sMBDn7DbmsMxp1TvVQXgTV",
  "key2": "2FrbAaFL5Yyynj7fo1DGk5ukdHJZb6HSH1WLcmEA7Q332YANbnBgawCiQUHj9cm1QoKAFpRnpiQB46SfabuFqoFz",
  "key3": "2tfz5GgUAFi8A5J4ZiDZ3uXFDWxck4PtByF7W6a7ujjRPrBGGZawsj7RrWu1P6b6uHdpJyASTB9LCYzKFN65qGWg",
  "key4": "3TMFMmEZige2KV6DjsQyuyUh7qWd9hbkcr866E6tRfW6DvifXC2SkTHqYfiUSt6ndAcKBiaXNigSsCjW4UxMEqAW",
  "key5": "4UGpWLaD1q9JFgeePNx9Bh1qPxiRyZFGZRCfCxPjsFTLf1AzhqwFtyu77GCfEeAPXWqPEozvj4cjLo6FTAcSkRxJ",
  "key6": "3xiEHzFuVBTpqfZG195CQh2hr2MJ9GYJ4gmzpBqDSuniDUq3gcD2k6UHhuEdqNeiE2cB9RDQ7dA5K6gLz6uoVsYS",
  "key7": "5hChbjxdqhGGYtWmPoUW7DCau1pUqztJMvLP3F2GtcXryYswvawSsyLb4iebuWacKvvKmNQNVBf4DAScQMAT1YHZ",
  "key8": "4Ubo4k6fg9NoyVmUexnPhtoFcCJN6ai9paY2Bh5QwXbnoQ13Ung17jVvG6oXjqdMCWmXazgsHp67b5qG7gakFwSn",
  "key9": "5Jbkm9KtzrTB1nCHsDqGk3ToGDFccaR3ytuFywzRfucp4bhCi1Dgz1ix8ZpxH3neacsdnCQFC5Xh5L26GMuQLWSC",
  "key10": "db15TWfnCL85iuCzcRzghRrje51F5LWet7ht6V4nBA6gRVeE1ncJNfvzm7tx2DDbVV6PNNrqt4AEZd2GmUGTqdt",
  "key11": "5YpAm1XUF3tafQVifnbA7nGBSRfVtc2i6i8Z9HxpbRmdRWxER1VQUWgi2ekJqc7XoPjkdgoZw9MeCfVCT8BwJQ6V",
  "key12": "2StEZmy6xvZPVH5FnbCH6y9HFgKUyVCfYRRbtnBCoYCiery5KWJtbf5ucZ1wkjVzT6GtHXsK2MRijC3chGdKPRzJ",
  "key13": "3Eqxk9oP646tjQfWC4proHSfFoeDvgu7aqnmW4xBLVRv1pT9XNm2MgzmYJ6A7axY5aJYdj29m5kBmC6J2AFDXMhd",
  "key14": "4YEeBB3qWXH7bJQhGL95bPYfdLfigy98xDyyusAwMNemDN4B7FdsgJfjYohitrU4G4x6LDNL46RMhBRXRhH94kvm",
  "key15": "wo4vCddmh5qYQRjTMMiCXzXcpqGQmqYJbMpWvPsPuUeHwERtShhS6kSinKAE3d7auREigVE6DFaUmDMhPsqEgMp",
  "key16": "3cPgb4hBNbDpUoxWyp1fYtfXjo7DzuwJ43KVdrk2vbx6E9HUx8P37YzWknfuCbJJA2eqi1JzcVNCAUmWnt4jaNt4",
  "key17": "79vsySavseQZDB5P769aN2Vce3FJZxqQRGq1CiYdAosvCeBFHBdFXFq3EHvr9d4KZYCS5QJ2XyErPdJbKRj7NNf",
  "key18": "4KrvtGq6F4G9DJGVXa3aC367nwGhJGDCkr3Go32yyPzXPTB8jKuvRiSuJ8QdKfAX7rYau1m1XxW49BPhpLZMUuzf",
  "key19": "5iSTzCcitCaBxmHc2FLF38Zwcx3qvYKDTL3NiXJbVhMCwseB4un759s6m5Z7LzqsrCzrwF7NQDkvW6kTTfCzbEdi",
  "key20": "4P3iddSymqVDBCe6PHmfe9zMnBeLENj4yZ4GSMNT9uncJHu87XbPUcJANLQ74AiKC8BXQZyaHTVRQCBCheV3yHgJ",
  "key21": "5KKxfF63rwQp5SvMMt5NXV1kwxt6tJ3TpzbKg4Tn6inKANvXBoXzfqbJPWNMnKpSjzWj6cwhUWjRXpYmKG1pgwDY",
  "key22": "4XLcJV1UjWbNCVdFikAtdRgCacc7i8v2TfHhFS3iG5KQyCMiTuGnrhZUmbnxpYHNrC2BzawGK4bmBUVc8MLWUisb",
  "key23": "5ZUuqj2CabxQC7UBpt5j6pSW7UaqPkg4kC2cVTSdbgkL6ZoFTbhMv9gmSTX5EsamNm7xCGrQ2mtrSRHLE8wafvsV",
  "key24": "tpbC9MrguJ9iyAinTStXEUwMbb9A2o1Rhp6BN2jZfeg9KY1FNeiVEzE8u6Y1GddegDWeFNLMN2Lv74aGkxTe7dU",
  "key25": "5d92oFWD6VEkx1SLeWDWGMBYJG47tuP4Sg7spXNU3RsLGbxBnwD2XrqQzrewLaLJhbo5MgVDj3VHtJgWG4qc9Kzq",
  "key26": "29iUQpTismZG4sN4QACqcMGjmVNBDMd1WpJ8N8kFfZPPowT8jv9voDGMnC7z6H3W3frJW3badvzuHqCVwbDu7grp",
  "key27": "3rvLhenW6eKLt71ZbHzqi941RTduJHZX3U3ynoFCtnKQ2tHvLyyAD9ptcxqE7gQj34KL7sEE1HN9qe8dwQqB5eBj",
  "key28": "4YKJGEUBCHgjDN1ckcTpLWSFAeqnw26DuoLT3QaTddbns8yKtd6TbNXXNjCkEbscfaaHYgBvRwCm76KedmgYVwbX",
  "key29": "2CtJPB9FAtzrxVoHWCdEdK2xjC1zw4L2h1djuh7DSmdtdte3uf2phgdZ3RotESYF9vKxf5ismtqbWcfuFaNunHkL"
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
