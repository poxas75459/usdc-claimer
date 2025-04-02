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
    "2W2dyCmeQVYqTmv5Fs1niwZL9vNQ3NcgUhfH9bkqkhLJHDiNFFdNV5fTWCsGEyyjE5iHwCSLJkGSz7GeCsDyLPC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V8wG7E1p8e9e4yzAW8TaVcC37Y9sfW3RHxZHm71p8PPXim9trKA3UV8kMSFG9TG9t11ixVawrFgA4Vhqic9qDb3",
  "key1": "2SRWu5AH9aNCTiVZuFjs7bRihtgLjSZQfpocFpeyc7YsC45Xr49ToU62yzfGtYML8jk1VtNvnQ3RALeGpYAt6Azs",
  "key2": "5iUeBup1dTXL7pyoof27tJ7Gh9HZrQsdjtvhh3sw26T6qoaHzgdS19tp24ztZj8QNzannXvXEqFZb81zSJ7PStNo",
  "key3": "3YJH7dwH9CF6GHoNAv3HKJG1o7EojXDtKYSrU7GULKw22cdyze7Cm1deSGM2GJoxJ7Q64wfwE3hdTJ68iuaj7Vv4",
  "key4": "3RuvnTEx1vkUKUtZpAAVdheK4whgoymJphMQ59pgoLDMrMUvjfTRTBdWpC9EcqMD7AET8D33ZyyqnJLH2tdBpvrC",
  "key5": "3qFtEK86dXUC5Umjw9XfHNphA8UFAbZdyjxAzEHMHhzbBczMRH9S9pxhxMjT6NzZpQfSB4CPSp5HA4yd5afdQDYN",
  "key6": "39GdXBJv4irarjuKeDo5r8qF2yafDSySYQscmWfcKybu57sorXCYYMyHKwhs8NHARwhB93rKD94sREi2tRciwqUf",
  "key7": "3Bi6zzNHuFCHjgVCnCeSUJ8Qob5nCCvRppJosT7dKf1qNxtNie7um1kbT9abYkvxbm63ZpGHtjFkAvxJprfRGQHu",
  "key8": "3xAUx62o8snKtpzMbVpQ9nGwnnfpSamk7AxBNCbKuxVBbw9fd6cBwFU23TpkL85huwbVXy9WCqd2MFv95ggBmq1E",
  "key9": "7J9sDe9w3LFWQrLNm2T9NhBbLxrLw9M8WMnbq3uUr5poGUJhRRrqr2pGtiDFM6kAy3LteCzvcdPqkt2miogawvC",
  "key10": "DJR73nuVGce7D1X5mvgMEA46vtVeQWMpS3AQ4Krd5pzoMr9U6hFygNjLerdYny6oZn9gGR219GKAYV87pm8waFd",
  "key11": "nR1udb6PhRs51E6X7Qj9P26WA8CHqP4TZ9qUe5XXmSknN9nE8Dvjw1p9bekGcaieAqs84cpkszLcviMQxU17b6d",
  "key12": "5RQ5tFQ4JHzERYSxLYQqPy2VVCBYLfmSLaNwRJX8wWTxRgZC9JGBKGKHmmp7o4nifsvVPwJ2J4s3mv4C638woaJ9",
  "key13": "3bG4PkmT5z2xdCM3WVnJsfHAdK5yv8SE9E35Q3GrXKiyDQLeW7jUZpADwUw9ti1kcGvqw3JYuxLkeg8FaxpXZGVc",
  "key14": "5rP6VjrPbew1o2U7nN5eujmW7cUUfQhhDaUBVZwvDstLGGM8yziBuUa6ur5jtiU5Ay9qpNJ5Qvef665SSqtwSiuz",
  "key15": "4mPnVdfsD2xo9u48J8qderJK5nvRE8TWNoaMP71cmkWcoi47m59U7fdagVF3Hm1LHxZnr8XhWZNYgq8br7pCu1Hh",
  "key16": "4XVTbsQuoiPnNDoy3qDYg9xfDqemcNq4S4paupCvQD2qWHjGfHZvS5e5JzX7b2c8TYKRAR6BRKVYb63CWfD4YAfF",
  "key17": "5hqXLB8F9QC2H3eyD9st9F7nXgfFuQU4X8LwhENoSukas19Gc53BpW1BzRh1J3NNR9wpYMN5C65LEw751wMCQXjc",
  "key18": "4kykZLg7fCUEwddrobJjscMJfFcihVVDXwwFFto5G96uRJXZ8W39hBfq5dVobZDG4s5bWcsELWQo1QfgZ7AC9UKo",
  "key19": "5UErE4A6cnApWMnK7b1J8vJnEMj4LQHi1jQ2jhURTrqEsRtxusk3bFJkERgZbZFqiuUkTiisCFmvANXPCECpvEnC",
  "key20": "y8wkX7afPKeeJkUMJfPAbM43AXZSBc9QbttsynUqPwJ7WGxe4EriAy2Z8hEHz5upUEPrgPcA9EFrMqHdQZAEpPn",
  "key21": "5hMq2aVpMuVP7DhRPh3eNy1W6a4gn7pe5UjutfqEHm8DVVVdXJ8ioY9Am3AkU3PvTfKnLThN3EkeZdVuCkLkwPrj",
  "key22": "3uW2TW7QLHMXN2T41EnUmWM1AxJ4BZnvz9BJv4FtXGDLHufFZNpHQkNniC181nUGBv92ongb9jefoTkLoBtr1keh",
  "key23": "3PPBi2zUmfMPaRH3Lu8jzr7jZiHM3BdHKfcz1ERrktfVwPuQMXz5j6TUT1VPCik9vaGNXovDSn4WnVQ4KsN1tVQL",
  "key24": "21xqBDXTbjgybAyXbPbcr3tFzAHwud9nJ4CrdYHnitJuHLaBFT1SZSawG5ekAQ9LHyr9Jtqt9kqfdHrFUahGZjrV",
  "key25": "qYdHp85zHfCA5wcEojBkzc3F8fUBPDM1pssegKo5FanARcmHCMNhimxHoq95sUZmxZ9KFHHXisfmiYfrX22R46K"
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
