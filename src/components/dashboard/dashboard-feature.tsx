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
    "4ZpPdDzrkH5ZftBnjZhEZ1BKYwJnxmHECdAdbzcxx5pyaimCAcVyQMRaoEmLnfqtgon19qiLUMixjXvo9QDndqVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3ya8VpQtRVKrxaiHynixhe9u3XR7yBaHjDJbAWJHUReMgvbxQ9RK9YFFx2mFHhLmYWeWBKr5qxLpEKfvZ3UQXm",
  "key1": "2r3uDFcBTWa5Gb8zwEoTNXbqb1ZCG3gk52CGGNA39JM2R1bYYZWNpncLw2PSZNaSUNfd7qCnE5zMRjLL2wcHSmqs",
  "key2": "34FSjBu6DLsGDfWh8xhM92X6HT6UtXz6t2s71ittxmNrGAjwvXmQvRuTsSchQcpSENpsWAFRkGMuzbWi7737g6va",
  "key3": "4kE7ucyPhxEWdEKfSbwa54rRFcSxpM1DgJQrwzP2woqkg8z4eczuxW5FGGMasjQ41BWjQRDRHDcExQ74YPURJhhj",
  "key4": "51qwrSY9WuE5BLnLijBZYguJymYKZgiL5CX4sBcLDAVsLjgubtyuMHbHmgDAvHEFgeuvuhyXEZXXZjFxMBW6vgNF",
  "key5": "VcAm3JFHTYpR6jmW6KRFnvzEuX7Ms9yo1bhbxEktuC3qHbdRTkGCU6MHV4nQp5cCANTb3PK8iXb3QvZvnuW1Ddw",
  "key6": "3TaePSfmDnvbYdFb3GAtUGvTKforWyYbrUonBQgYb4tz4dnEe8TTsp8ZR7utJk28y9TYtSBiZ85tHB1kEvoPTmB3",
  "key7": "xQHUrSXkr5mdTbBtgSvRYkwHAnVPuJFEwq9D9Nkfa4kxGZR2L5UtrH1MK8HMMYk5yKX13PDUJLqxkTiN8R9jPwR",
  "key8": "FTqCN7N9MMKTBPpuH5yvgnoYkuDg2wAGBqmbkd2VrMU126mPh2LY6gxhmaDwzMPgz268gFcAeJThSXxxPJKHGcs",
  "key9": "45oxSygBE7cfC3UVcU4tNZRxBoQ2cz6iZCB1wKNEbkwRPHgn14Sjjd2k3GLbmqDLu4io7s2AJmRaC7M6U1oNdkPr",
  "key10": "4nRHqAwGmhZkzMS1gKnDLwiFk3a1brSyHnBNhAmXMigye8h2sW8vYxtLBdb1skJhBejws77FbS4niscFTAJktV8n",
  "key11": "4kMqvtTD9xP2n1nGVs3xy3CA7Uw98nsJMLafJHaVtxvu49Vfko5RvKbqvUvAaNqgL2dRcZdDwrFFujiCxNv2N3ua",
  "key12": "4y2U8K9zWgdZJp87WHSdaPDmX3xRj9ZFA9237qthPQfZQEfihKSVJ5iU6MUhCKH2uqLuAx2tNd8vzzvZQj14q9ji",
  "key13": "CLx8JXkav9t3FTjCF6yAGaQfJwjWXv4jF7p7FxWpsfsUpuLsjpYAEHV7NSCB6C2svmbkXMxick1dZA2vgm64hoC",
  "key14": "EEYo4qYVx5DAYbSwtcADzUYtvd6NCrQgfYzitn2CBGc7Sw7GsmmtLsipLMcu3uAQaHra7ASoYxqjAWhGAh5SYUb",
  "key15": "Mi5yapwMcAJPbdNLk8q7L7tsQeK626TF8h41QapvnWsPhTaLaAAupmJcvUvG2SYu6GH2ekfjmeaSCeqZ9Q8oKMp",
  "key16": "2EWzbS2SjwrT8EFtNZN9mCGCo6WsDxAMdx1KDuuiLRPZFN5WxTatiu9eQXGbYHMDLQ3oAi57E5CQy9R9rzqtJk6x",
  "key17": "3dRuoBoFkpges36vE3RUL1msXaiepGyqJRrAdDnoj4BnSrgm6ofjGhzgDakbWYQ9NKiCo6MzwvEf5i6XuxinDAgm",
  "key18": "5TodHw2DCuKLbh5rWseHJ2sUrW1JFd9utQpPR4ZwC7tabHUAujLixdjsWJrDBYNyXbCYtcryvXKvb3s3FVQJ8h3W",
  "key19": "3PDghHU2DPoYrLFEtDTwytMPBp6op9k5DGiJweKKD6K3AJJDeZwci1FNGxPYaiMN4QXR1EzUR3HPGPZdHsgoENL9",
  "key20": "4WKMsMwAiDM9BFFTW6PixNXBFR32zvYwf1vbDypBa2oyHiZ2nA3wJfZFD7qDs9ib1Y6CHU7SxSG72fXqDhqWd3E8",
  "key21": "2eU57sM9rUR5ErKG2dPFN4mMkaMZ8ALHHWVhxmcdwMENtqZwyFEYCvYwJ7dBAfrkfSXmFSVy32vsYxH9fXLSaTHd",
  "key22": "QQgTQwbmiLZHAf6dQJheb4ZB6RQnmKZtEsr9cJVJLT2AsRr2ELyxiy5mWNyZLXs38fXEPLi5YcuFQaTG8atWczD",
  "key23": "2BYdACw61PQaUS5rxg2rQRNTaHbCbAVt1eBi7gXftyMznFvh9ne7Asiq1AXDfMgZeJnwM7FQtFyp9yVLuzKoPwuh",
  "key24": "wmagTWB5iQmQsGb8NcfT1qz8hytGUMZhcpyMgG2wwnsK8mQ6cHM7j9kPXz6umRMMznA8XT1d6NX9UifZCeRZRio",
  "key25": "3t8BpRH7nhwSKka5okzNoPbZMVRPTgm1cuZx6MH2CzC6KSktqMbnVFfjQGqKSieWsHWDCpk2T2kTjGUmc8aVYQmB",
  "key26": "2auCqXeHHFdWvwrpECfPxWpfFD5RiLJZ1uPd3d7ZkMcepB3uUD1iFhEqSSkGwJURwZdwM1G5hhyywHSSd3aQ5kvg",
  "key27": "317oJgDpdYuR7tG1BVz55eEWAAGC1P8uziVSQ5cxfq5xochoNqMwNbnMborbH6UzFYD5YxFrEai9ZWvtbGYCysPu",
  "key28": "4rGhbvCRFRhuW5QjRK26FvpNk8r1JRGVzfC3unFeXPLhBsNntUyz9PXKq39sNX3oWae8QYiqLPhAmGPkddhH7Kyy",
  "key29": "ZJjz3xktAUii7N2XsRVWdvugQP71h23XMAzE6MgzdwzofXUAXfVjKfQMQnvoZjy6g4groF3wAq2W9hDu1RxZ3xz",
  "key30": "5ovcxvWckhnTf3NZLNSvbf7SUGPpqTFQbTnXMmZTPVeeXV3SrEB7jyZ6sGQ12JXCAxvKYKWMR3SdSwm6AFWzPX3D"
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
