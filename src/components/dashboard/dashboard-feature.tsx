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
    "4WSSDVx7FRDTTY2HiTu5jEzCTv22Hi56mgVMBXC5hf4wRuJXk4wzudmoFridZj8yETGeQnsrpRQcwXAC87hhbnx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDnFVhB2egrAB8SsYaQ23c4q29B12ie8DyD6tXthPs6qmRupLmkwaP1bqn9BGp63dmMG7dEQRbxPVdLLEeRBy6r",
  "key1": "2AewN1yu6w8g55RwJURtJieqy43fQtVcCt6mayEw7D3LYbn3CnMwnTvdpuuvbnLv7e6QZbPhYodD8vHVBFhhuvRM",
  "key2": "45453NWcED9U431o2sVBhcfYxD19RftgTHRivpy933derFzC3TDBdZcdYAs3oxgirw7uD4x4Xkfq3xTKEJGu3M3U",
  "key3": "4JA9ucu5AbKURnB4rC6qufqJTLQ9Y3r1sEbp7Xpj86sdgYYEzurpve587JWfsyHFYpJ7FRsH6LkFESdvsbWCVjv2",
  "key4": "1K8kdf5QBrpLUBkpiJdLcMvhiRm4uzBULRSNNDfzb5k1kH6mvsog6pJeupEdR5kvhyHnz7fxhgqjRYoixdSDFh",
  "key5": "Dbwf9nLrnyjCK8KhK6sSjHDu15Hx8z1rfVZ6gLBdSzZmEuZYzNtyvEKwkVuLp4Ht5r1hvHauoDJsQ2BcJPZMofq",
  "key6": "3ucM3wdrzatBvAM8Gaa51yBRmgDmrwqpQn75mmZev6idASjJPFf36EKrenzUTKLawLd6LLrMRXfwqGeeE9oDK1wV",
  "key7": "BAr77YApBxYwevhkNu1xvazb1ADMAiN3C84rsr8csmE6oXswsTQmoK4Ce4vhfdzmLdsPeUWec7jiSPhcdApYCJX",
  "key8": "2rYeWacX6T5XaWMSLydFg9mdG4C3X8DokTtUZkZEzANUF5AZUVmy3Le2cKyfMxFUQVdn1dujXFjeYXXtYgvVQTt8",
  "key9": "2h5JC3Wte3H78UYp4i6ixuBxU2fYvwemWqLV3zPQAsQmNn3Vv63nyStja2D2VmM4jJSM8WD9pGs8jg1Eo6YoC8rh",
  "key10": "5ovV3Sc2i2yVWzQY1ufFM3ETiKU7dWYAo2w5DiDntcDHcieLuv6src1XoGiBEjbWaqezpctstr7ewZkxNYsq17Hy",
  "key11": "5XESYEtKExiinW2nU3u3GcSCSrfat8FStLFDSdFVbRwxyi2WjZp5qJWCi831FHyCsA2DDuJmWH114MNeQFv6Jfqw",
  "key12": "3xrYBHtCSLVbxYAs3EuCAJFd2U2tCuxcoeP6cUhmBtiF8cRTt8JrfuYfs2BD5tLcY6oNcRGKdemma6KY2qyRdN3n",
  "key13": "25HTxWbbxgQupt3ULZnx5A5zWe7Cv4YUcyPRHBEfsG1GXzfWBhmLkM6dPqbKdZGRWzH87osoG4pWPD1KxRyVDwnb",
  "key14": "54oWiUu6XSwsvWPQjvhVigGf3vr7xVuSaTmFQh7FSCShgiyXwYfQTiGrNc7GbxVJgwtse9kq294P1EHe4Qet51Lb",
  "key15": "4ZrXS4YYoVh52zTPmpuMjkbjMrbYVNZaoDsEvNSqb1TchWK9eocK8kXXV541XpTvYTedPfosBtmPS5jhnn5o3ZpZ",
  "key16": "yd9mSiKyw3X3MjiepqWgY9vxNzg2iuff4kiJCc6JJ45pP8t15CUB6CDN7z66DcFTYsD1qGnJHTEWrjPmQ3UQyuk",
  "key17": "oH4SFMCjXysfb2C4PvqQyid7qt63bPwkWcs8T8BbdhPTdi2UBAqKNjDrJGzhrWjFT2ihachH3nMmr6NpAaLxe3K",
  "key18": "2xTUwWaLArETFFcSkRQjmYQSgk6X67K3shkNcve9mNdUzeTUGoRPZktH21WS9QJxBs6gz25xEfY7nBBher6XR7W4",
  "key19": "2ZWvKnCjoihSws7SPZHQg9VccT7BGbGsNDsDtFBb4vFFHAzzTeyDDrepC6m23TabhBdaaKtmgENVzbETkNzjz6xb",
  "key20": "2jWjJXAb5s21ESeey7afiX3hohLLiqKfTGD3xwNRpmEVR76pZPp7859c9nWgBiXQmCoajW3A8bWM4XodzpocjpWy",
  "key21": "3supNrDQU5cbMpdN4u6FUBewmN6QYTwnt8TmsaJhXfANvffdMPjs2BXBdJqFNuVbiS2La7hwqma272CnGxShmHh",
  "key22": "31EfRovbM6arhy3j1t9BNUAfKCpXbvBBYDBYnsJrCRVf9v33PjrDwnsxKgVEpTSSCj2aW815h2bwZ9jGKEAj7fEu",
  "key23": "3RXj2TYmkraqsMjVjGpqpHoCAHuRfZCYtJqwWdhp3HuzBkxSdtBzDbAWaGeZRADd5KPbbhuPb3zVf7LLt37VTFZr",
  "key24": "5AwNVmE8QdriD6hP6vKaFx5XsmNpR4KyDBwkfLkQ1CPnB3yGzB8mNnJJx962MgDjq1JmUMt1MK7Ja4jCB52fDT5J",
  "key25": "5WupvScgwwPGuymxXRYxbyXJYnQ94MhSFbNd9Y3GVTGcH8BDuBYbLy43xqgHhTuHSDQL62mZbsvFoGn8BWVEhP72",
  "key26": "5zvXQBspBkCp2SvAhtTfJu64dBWmjTEeonUhJLKJ8gCDPLo6iEYu8me6f8TJ5Wa2UrJFjjTCDfPQf7oYyrkpMJq2"
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
