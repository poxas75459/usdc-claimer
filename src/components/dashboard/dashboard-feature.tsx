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
    "2WUVix6q3RntvoufDwkx1wyJEZkabiAYMLWfrVQWZdhWv26qDbbZU4k57hNMejgELTrGWakpw4C7kmdTHknsAaea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zoccn4Bq2SqKahEmjcB6vnRPvrENn2k8mocLrtVZkde5E2vNwMFQQ45eKLUYki6Zpqo395xvBVByCFunrWBDaTA",
  "key1": "3vTwQnSMTWJfUsnxuLVoFx1anzY8ABpfnsUP1FeDdHBLtCgX6vDoWGrE7yggd5RUnzZr7r4gH3uHarmrsYpsFsAq",
  "key2": "5aHfFM21pDNuYin1ki6WGKj7voUNd6fNS5UxwgzeKW9sVn1qR2uKqWYAif28CgaZjjhSPTTcZ1afZ51XghkDRoHr",
  "key3": "ZTZuj6XE5xRvfbq5dMV27UAaYqx1HRJkGwQwrf3BBHGuPcP11KLESB7bKv3s39JQcanRBGHAN5L5raP38b2UGS3",
  "key4": "3WiBBbjSnjmmD4tYJHt6RTEHcEa9mhEn6BRzBJ5fK2L9LY7Y8VNw3cnAo31iLdwFp9HxEbc6KZnB7FDK6AK3V8sA",
  "key5": "2LT5ACh6wCMK3efYmiWUgvAD8JisxAWhaf5GHaA7iu4W3noBTrR4ad9FamLtW2Wkf15jgMXNdxefmeg8LcZMX4CC",
  "key6": "2w6ySUPch4UxkMudW6JMxm8gWLjnxLto9MkpukFkdcMVdBWVoP6CopDCdVog9LYZ2z7kD1PKujYdMbqB8m8sL6oZ",
  "key7": "4yQj6r8WxmE37MykvhvuiHicJGd8kSkmUgUQw4eZPse9z1rgZtGPbqiEip71JebNUGARcEfgNmu8QbMaFq569Dsx",
  "key8": "22b9Kpa4fsCxF2y1TCjEinpjcW49snLsQSiwmiHxJ5spT52MhSTuFSE4XHZLWV2uS92zZRhHQSsEaDzvdiBB18VZ",
  "key9": "4KbxEgAxNqqRp3yqWD6EyiD7onM25xnhw4u8JGW4H1yJ6MxHmLTi7ve97ujWfywa1N6mezEKuinTsTZVPV5RkR6r",
  "key10": "31MkYFGhkKZ1MtceCPRwTac6XPt4bB8fBVArQ2hs9Sx9TqqVCUsFGcSaB57BusxkUjrCTybp3buiA4gj5zEL9Qo2",
  "key11": "4cATTabafKbuVC2G4x3jFwm4Q6548bqcWGWstRw5LyPKSvBWxhCuVFYFtmfaZFeYAEEaCsaHpsr8j7JiGZ11x68H",
  "key12": "5KJDBrEzSR43ogZLsvH9sV8cqfkzgt3iN7GPKfvnhqxEmoE4R1U4Z9kMbAyv3ribk5NG65gzPbHD7GXv4feir6QW",
  "key13": "4wCeCMjmAZwZEfxUjXcrMarAUiD1NnmoMZftfWdfLQLHD7AAbxky6mDkYsYKMf8YGMDAdEvaCwXusQampHN5Wtiv",
  "key14": "4Kfbc1A4QZ6P2qEMrZpXMULHhzh6B4udsySXDR7JXznG5XPspwKet3qVYD9hgippRsmghTphSmxDqryMWrDk8raG",
  "key15": "Tq6TAiZ59K99KQ3V6j9chZ7wY72nfc4MzgeUTxuimgoXj17LanN52x9KwBHwPwB714ZEyEqbusK5seGaxsM8BNu",
  "key16": "2iWavWAun8xP3TqGw55cDtzfRKnH51ZroSSNTM4HmKk8HXkWMQ2BGNSuRBTgNj5Y8SD54unke5a2KmxkWmkMzfL2",
  "key17": "5Jjw5WezRTJ4hR8qF8dU2Nsys2xzkrkCoiLpnkDF7BcEraJG5uCvX9ZD7iqjwECP54ufurL5U6rKRsMsgC1eL77C",
  "key18": "2dn5tXg4r6dLquZDEH9NYcyYK7erfB2324AvjC1RJS377pir4qJWgnUHBk6FegMGtvSjyMee6zmgzU3a5YXcrsAd",
  "key19": "28g553vB4ZVxHy7Jd3wA1AsuHYxwqJBKqMvfm2Rfyr5xzhvQPY2FRhoLnNWHvfTr4kb3dAPLmUHgw1ydCaGoLdQJ",
  "key20": "2Lk3Wgqwz5xuFZDt633cimBMK7rsHF91jQycMoXi5JxWH5BgxzsTt5eyLc39f7y2yDtCqGwQG7NdfVDaVZsmbAmT",
  "key21": "3pf62hovDBFtZSsmG65VJJQGheHHQNsiUrKXruk6xP1SDJPMNYatvnsfCNy212bsHeEQ9kkFGa7Tsfg4vFbNgqCv",
  "key22": "2fwmA7rwDyCeequpKqwrP2SWRjzXQhcPnrGXU1gAmT4SsqQVwvL3B5pKL1YeEsmphbJ9PAtSwAYBJ4rkCWbQdRSV",
  "key23": "3tE2TK3AA1DYg4cBdogXqQwWaKihegNZCK8Uu1XRtP1vofbvnvrVsAxvCehGuvowUJUjoe86ncTbM3YCgc235TjV",
  "key24": "5Qw5eC4fRUGawiu4r4g7VYN9qoV2Zu5TNo92DFnZmwNeYAFgnp84Zh6w1HTozB2tqWbjn8pHCQBbbR4tbtCt8jF",
  "key25": "2NtEVLsJGpnTEw96Y7Mr4DBKmpgphVxMMyauK2hVhfnrygNSdU4i852WEukrCJ5mEWjGvroiGXxXXSDrtUWUKCMx",
  "key26": "2vg84C4XJ5m3qtdmSssLgXGrmGtSrJu7cRed3BhV3ZdHC7doWjFajomtH2oagCKXQbMp1VTHoUWs2C7jK43QGtXN",
  "key27": "2Qq6DTe5tn7aPspmrc8wojbh2G9ZHTqgo7SVkHUfdXhYGigAyQjuJmftLcATYhexUyvEQRnLa9Rn4MgJiXQdNsGe",
  "key28": "68pSntevSZHA6tmfdsj5MoDaEaiF39urQ3nJdPxM4A5UNfUxxFGNcbnzvUJN9pDVWzMkTm88mFq3tqLXAzQVG72"
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
