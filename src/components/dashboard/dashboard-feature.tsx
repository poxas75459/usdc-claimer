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
    "vQqmn9XqtdXvM7P7pA8Edsyq7VmBdRWZiTPFp6chxFLsbRuCH8uVTbMbXRfvsN1FSiQmYEzwRiR8g8nxa1U94Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTsvrWYKp1vazqa7HGbHFXjAf8QXWL1f1kxZDH216d4coGiXixJ9EZ6VUCc4EoKySM3Ydrf5irGFsVcdZim8zSy",
  "key1": "2pe7hcehZGyqjni7wmXFdk5G73YYTJSAXLoDLxvZfnLQkuurhGhR6K6twSdhG3kXDDnXXU6dmazRH4t5Mw9eBrYG",
  "key2": "5hZiFkdx8a7GVVQtYDFntf2nXZFf8YJRNXaFoGBEzvGDUPwCwUZA7cxjWX8PXtjGb1ugwvRMUvwUzdZjzBRAcZGZ",
  "key3": "37eSPjnyk3qq4bNZQMY8hpRWdBdUeuzM2L8GbwETa6ea9htMVSfwT6W3eCkivcCv1GBJD9nEX3CrwMn6EbQL5xA4",
  "key4": "527UKPexVLUZvrGHv8F81KmcYq3RUmacv3HwMQX5iDcpbyE4mCWnMJeCKuQVrWqgAvCXJJGZBh3QHPd8dK6jtXhm",
  "key5": "4UYnoSzAHaxthNze5WHoJCeeoowB6AgwkZrsky65Veej8AsDCjqdNMYmavUirrHCPoDg2jUwejmKxZTFbScZYd3R",
  "key6": "z56rKuLGzMpURiBYgWM5fshZejK4B2Uo7HnKxkLaYG4bMh7Lx6YuW4BBnAPnA7XrJNjvAiY9H8guZUrbnq6Xeqy",
  "key7": "mLqKciWcudU8WADq631u6JrsRbPZCf6jDFnojsSi2n2MeMB13GZCPZCS96JZbawWpg9GkjmBJ7L7PrD52dHaAX9",
  "key8": "5yHPMuzKyJU9NoteBtFNJifMWX44KZdTMuFwTpEcYxjT7zyWBs7MEJZJ87SZczQY9uEP3sZVhwwwX5JJpwSt7aeX",
  "key9": "4LrBych7r7KytJQ9kXRcejCnBiDHgfef27iZCF831X29qnoEHe4vm9gvUkgTZffrdrMhfQYuzwU9wexv16B83VEk",
  "key10": "ga8LnoLt4MTEm2iyynia1bCw9QisabNsY1vDyWDbroBwsZhXo3jc3PgnZhnxQahF1R2LD5qYc5yrR82WgdryErw",
  "key11": "36inamdBHseDUtAovqE3R2eyS95H42Pd4KcMy3v7PRVFyBezareAfJrYxZoUAuXKTCkK6aGMsaRtSCzcuxGVAZxZ",
  "key12": "DmWMMJtZnBhpRAi2K6FZHT1bLxZxJiiLyBQv614JA2HY1JK6WzCDQEkCvxHdBXHFQtaPJpZvJFaxcLfKZiLmPhQ",
  "key13": "2k43nGeq4dcnjPWBUqk36MBkqJtWUWC8L689y6HLSqme718HuUngNWSN3M5jkAp54yynr2QF8Ju5oBX1Aknmeozo",
  "key14": "2nr5JN2vvgfn4aZSGUd5vBVL83Z2L321gjcpkEMTJtmfvnYLGzhj8JfM7cSrhVjmkiSzeLmBJ9CnieFiLAhpDk4u",
  "key15": "5GvGUJyYRgvMbjQvDbj2aHA86Qp7vProALor8RLMb5TJzZcM9FfVDVTLHhCP8ovKvbLxpha3mAUoGoysKvNskTaL",
  "key16": "3ZxqH2YNoGrwBDkUwnzTBiUdeMKw2aCjBefYW5eMcii7vCtb3NwwEo8FEKJu6oTPjkgZTwyM3YhhX6M87dDnfqRo",
  "key17": "21qKwiZoMvnyWtnmL1AvdFemr4277E5cxZg9kXeZfxZ9JaGLXE29yUy2YDhg7Tqbtc2Lt6okaocoepoa7Bco7CMv",
  "key18": "EomPGT6n37Qqs6B3JZGNSPeUfBFnoMRD7fxPmsX64E8MN9GixtKvA89eY3BZTSNP3jvZkRtRBD3E4RES8JRwun6",
  "key19": "46sA2TKNvG7XWktZ8jXfvW1ekjL5byXQpumWLjYS1jZPJbJvc4HyQs5geCL1eg82u6oi9E87x4rSadsRvZCW86DW",
  "key20": "3dQgaKn2k63VQts5uL6sbi5dLvPrPJ4aWz7gC73T6JBPA8gPLiCUtaxKd5Tta2yDsgqnNTm9Kc5s2cVELvcWXGpx",
  "key21": "5At6kj2URHJUtdMQKJcfctbSJDw3qZN7M9ao2MSoMXUPCHoxuq2kmgVRvP1JntdhqautooMR7TdmW8xfwexTLhQ3",
  "key22": "2gN4bs9cxyq8uPj9Ezb6AeTtT4L1iaeiHidwqJidPWswZ8Mk4TXLGpS949g4trU2GQ17jeLDSuUXtbLzPTk1RpPJ",
  "key23": "5P4QR3MgRCU7kqnUHnEQpuTA7PQQoNFHJz8cXzi4cpMaaNkGUqp2MWDS9PSnh3WmxEv2bxAdmqcnuN1cuiJ7H4BQ",
  "key24": "k63P72vrY7TkRsgwcMCEmwHX3DFpvab5gc4QCtqmJN7KNEfDbtqi1CeXAzRmh4VQ7VmkNwV4nae53Zo9TuPLqAd",
  "key25": "5qubWgRenqEDufnqAge1YrtU1JhibmnzZNMgQAG6u9dzQ7awXzcMXjjE1HxHyYQZ4ZjVQDpHXRjcDpnVL41rcX62",
  "key26": "2vvfdoomGTFKwSJNeYXxAKZCUvKRwm7DX1eDvNCFWabBb5nkvWhxoJEEwpe154ujip6d691fUd7A1WGiCgsLH4Rq",
  "key27": "5Rrw3hbSurykegXNJQh5PXKSY7Xwfq2dB2C2sp9wV4be2TBnsPdiDvbgFbgVWtz4txDQuk7EuhFgADGbdkb3zCw7"
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
