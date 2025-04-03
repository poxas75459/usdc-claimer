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
    "5xNtTjcviEhNCMxU4ewejmNisfvGorNjhruNYNQ9gZU6UupnXNpJrqq32Yjjc7HKg5cvRF83n94Lo9ugjRt5VYFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKee7D46UZcfrrG14Z3HN9wXAUnNUK14VrKKEtNd6qvpav3ouGUqBC54cPdM88hParSohFarrEeBLskc4vVr1MH",
  "key1": "umtUQzftLkUh3YLJ3YZc9tTXmdtc8L5mQJEvrnUExqU9jP7W7spNp75BdXRf85JoyRW79EP23UW3DgygShR9oiv",
  "key2": "2NAqjg4m4Qe81dvEo8GqxhyecuE9XLBKuhmiYJKDs3zfVJKNnFamcU9cZQKr5UrViUHHuJWo2s7FLyJN6ZbmkneJ",
  "key3": "5GZLzAhyagJFj7633YMKEHgRC3o1cXLH6hiAGgVLH1jUK3PVJF4XkzTh2EG77bXbGvzr9vDWzP58n2JAtvaKo6h4",
  "key4": "2RpC41AJ7dADemnp4AiRRUnjFYKzR2CGSa8nvMXV8cdEWRH2TrK5VTuDw8VGZToC9VbFXSgokxkyabmdJzBBpy4c",
  "key5": "2hp1DsbBdYTurFaqZNKN8Cif5ZN7MHaWZd2YMnNLGJvvEY9jePq6ydXpfp4s6wthYf4bEx6aUDChKXPzHuxanEyH",
  "key6": "58r5iyuqzKhnfaj1PcbgH1GsntJedoSxQWpBZK7KbaVNy9gcv6EhJHCrztKToFu8KynTfojqQAXAbq8N8g6TkLZU",
  "key7": "25jkHT3XWNmk2pZ2anmZP3MyBeb5aSu5a9bUwcrBUty9M1uFZBvJczreWvM9X2NtiDtjDssru94ZLewrrDqEELYz",
  "key8": "5knvMT2fC7DBxNNE7sYdcwdkyPvkc9X79ZRkLPNNRr5H2WSaJizfGqSHzQUUb8rXPFqDgCHCz5ZW56Hqk4RD1vZ2",
  "key9": "3uSarnjxPTyx6jcfAtmK6mbhMvk9TLok4gCb3yszrhRG2fHKGr2xHvUXJDw151wamPpBK82jfxybGesrzGX5LUi3",
  "key10": "4eSYewYeiqjqhA4JpaUeuGhhkJBkAbR5WVcBTAEfpeCP4YwJCyhQGkePbHqybg8ncBJnvJni6cgXitP2VWaJ86cp",
  "key11": "4Pr9utdKhxeRiTiF63Ci8cg8CBJ7qVf9L2AASuiqNCCWedhEyUFarhRsEGpEY9RDjESjJNRX7pnE2KtA8xwSDdVU",
  "key12": "59vkkdiSuEvUK27tj6vWGM31t2JW52KvyaV9qg7S8uzU6cSwAgoUmjEL3r47iscxdEM7Hb4FZKKR9Yo8g1N59zt3",
  "key13": "5tdy4XxybxAKh5wrgaM27SXuuGRhPa5FWwgrJWhJajESK6dNK5QeSjuBMZ6aiPm5wPUNjUmfWGkXF1BQjdL6F4d",
  "key14": "5iN5UP2E6UZKcKqeqAySEuee8gQCf7M9iPcnjRv6GXjeAPY684jceD85zobufwiUbSgFovLKKa2iVjMHZwZEZRGk",
  "key15": "2cKumpo19uc1v5n2YSkAgRHPW3ybwKe1DgET1HdjPLbfqShTq4W1TSn5M7Bva5NR7wuaGYAN1dQc4B4u2yZRC7gZ",
  "key16": "468SKZjp9Y7dPRkMPKy2GRnsBmd3G4Aox1SPTTvTffWKQyyFTd9cfVm3vCxc6Qqhz7mbL7mWNch3tNKZC3s4gYK8",
  "key17": "4sRSGHPo18nGic1BMV5D4mJX2urbbpw1vY5XSZtwnCy9so7yKm997WmJVejgXNCvA4tR16dwJPjWeLSw3BcKG3kq",
  "key18": "Hn812xeUPc4Wa2J11yvHcNHGYLVJ5S5VmAsntuSp8cKj2GHKyve2Ft1PLAePjr6nYY65vFukWgHDkMT6FH66jQi",
  "key19": "ab3r38efmSeBhAcuhrG5AuGXXhshhv5HAHqFJbP5CSxHRVxDVBQN682KG7sVryGhuh3ATWU2dic8vSrw3seqZbk",
  "key20": "2tZZuX4Wdi7jpPBRKuPQcRruqG5U4cuymkiFLq1n6BQAKh8Hd2MAP8gyTAwK6tkGEMvWSmJQbRDMq1NGTLV39YTv",
  "key21": "fyLznQP6bNsgE2XD3vUF52BGMjMxMwMosspYB5PCaAond6sLzDvHdLZEe1eDrJmwqrB8fr3ZTYPAeHPsqR4LnYM",
  "key22": "5VvtvEAW6TPUgNWGp3NJLS5sEdVwKrfAsWB5NDkkjEV5TSU79z2mBvMa48zfFXdP38Cjjpg784742C1QDV8cs1ZY",
  "key23": "5J6eDYhW5XUfVphNj1sdSZ1FJxS1BpoKMtwAUX6g24PkVW9eLCRUkcDsecjPBJZwWWQ3vaCaXtB7VmKi7xiZuyNm",
  "key24": "2qQYCYK8Uean2aYgC3LcDr4wvMVXX9z7fwKiJVgTVyZHFimyEftWiyvU7hUQmvjSiRppDHtUpnXsNmbqVQiRZrKZ",
  "key25": "4mfTa3vrvv2oZSRefpszxBX7JxHBdNwYhm54pHTBy22TGiqgoK9AwrhECFVR7FAUWuGfax51tLaTPR3bCgKBv3ep",
  "key26": "39XKNt1jwx3HUCjBZpBGfwt2FpCgNhPtWcER8R24WxgJMxQj6GAhtbkSD5G34Fh1tvp65T6EmZrthChvtHtCtqkM",
  "key27": "3nDaSspqQPFfPm5f9vkQXoZVU1MMpgJHcdtBfQAmQ4TjqwAu4qzmwQjYR4bWTumeodShCdo6ZgbrmmoQB8MCsrNJ",
  "key28": "MeATs5ozZ4hqD47JAJpVVq5dByCZ6XzVMUMnT2kTeSwmoXJzSQwTyzJDAx9LUS75wuyyrQGTeJcjw5MYxJns5si",
  "key29": "4RFANLJ8mBByXuUfutMNQ7wd31ZZGWouGZCxERyCuZXRHrHs6UXgYKS91xXfDTpAvTYbr2Rz7KuBCxKr72EEFTGi",
  "key30": "2jRPT5GvZWa1nxJmSQWLQRqBPg1QX8SAsncyE8GN9st8XC3EbDXu54fnsFnHgn3ThP7azB6zTwUiECyzwKx55CXD",
  "key31": "2KMTNx8pGghRw9Ykh4VFfQCCq3bKQw1zzCzHowEx54nAWa4oRd3tWXm1Mx4KonxqaQa6aSTgGjxQAYtLnZS9HAPd",
  "key32": "1s14svrPbMpwZHK1h1ciuhLvqxKe9F2E6zyp6uZh9rHW2XmgH3NxcSKzRPnoMcfjUDzKtWPe1dH4AtNcoa8wwYM",
  "key33": "kNK4JuV9MQ5QPmegStZ5kyEXerbxAqeMJ7dcM35KUguotWQvzVN78CZAi2SRq1zXDP22pMrJG2jG28DvTDd5Poz",
  "key34": "5VHugkFH1Gy3QAQB9facbiLiyHspzzbiDTg45NWqXGvHVgkQgQrj9vTfJsmmFQGEuErxA6YfzVsbRaKvvZbeami9",
  "key35": "nfWjp25TDxEbQPt5cBbnmix2uu6s2XUjLwhqCv731w3CUsuEMZkKwMEdCyK4fatQzRaEVV53wo1bkfvL5SmyPyg",
  "key36": "1tRqp5WYNm9GbpkM691iZLVNkBVh95EYPZBp9RUYRwHPYNytF1cKJw8wnWRQNXWGPfZzbUEi4cspEUtPAukGog5",
  "key37": "5AvTa7qmdbBZm1UWYcKKNaA4nbN19TnNzS2WEa3DgCc6zPbgA5K9hnWGpnpiCQNZgB127YSNSBZJe3tBQYfBB5Za",
  "key38": "5Gm1wLrJRiEYWci6ZErqxBTKhcBC7825gVBdWS8Dr6KSTD9Amp3mgtVmn95fxN1wqApdgy3GyLbfZZv2TLfTNZbx",
  "key39": "3tbfSJ9Zzhtm2Xca7zQ5Wwiz4gepnMexKHekGPQRfDAGNQnjBweddnrPjaxi6K5VzSwZHPi7rkzdRXrbkH5h48uY"
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
