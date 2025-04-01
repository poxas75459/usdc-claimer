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
    "3bNRsTWByF6vb9nhqHafjj41CZTWxkNzYDB4HUn4gGaMibyiYoo5Ucny6g4ni22TtBLHm7ZoovqwND5SfaRSWvvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RBAvVE1cHu8adPiqFTkbEPmbmUSwTa7ADaRFhURf64zbDX9B61edm1aiaNLpMzhR1thsegCVo92oExM1CxrW7G",
  "key1": "2i4wHYT5DDSR6H8g2RSU1sMWAY99VCEaNd5nWTC6ci7LAxMVxw9Yuj7cGPzd394r4cP4VF6XPfgsZADH3o9UBecf",
  "key2": "5mVZdogUUweW2QfBcZQBdnXahEqktxd9wv1RSe37BmjBjQcHz1xHAXL4WCiadc1UAAv5Gq8C87mB2Yvg7yxrdiiF",
  "key3": "eaaBjfPjpQDbdDyKQe6BJhNwxYfgESqHDTZ6YnxycAoxXpsFWreVavdhmLB6pUqVpVVfs9bV7PK5xt3PDKzdX7w",
  "key4": "3rwW596M1TiVC2FFGta1JkHGBV71SEJNywZjdqhr2pKVQvMeUsbxCb2Em4qKmombYkFsV63URAq9GN5r1EgtiFH",
  "key5": "4SMF66zaJ7UVr8gKuxGuH15vqrN3ZdjsesR1JNwmoj5a9avprQxKm5GqAoScgHg36zqAWeqGApr9hUaozTvNu868",
  "key6": "Sg2gBmDnCQAmZ9yWrZ3XL5KRsp6Pnjx9YuJvxeJXXFY9tGXcDhxjD6P58VcmFHcXFadpcbQRfY5nYb14nwtQW9J",
  "key7": "4nFqHquk9hDqAPkfWWsqc9Gmw8HKvz5jbqAKddaC8USm5qXk9jwW3asWgKxrALWQ9tJHud7nKERJQP5Ms3hs1dH5",
  "key8": "2GAn7EukETmAxdKNcbnYtw9GQjiEmPy7nP2Y4aiUZtMqKMqyQ57JrfyJHp8WTN8yxpfLdpepFSytrCrtkvU7pnvq",
  "key9": "2CbsK1Aum97jE55VyzG84vc8hW6B3somRtAGRHkAWs5byKbAwvzfG1W8oupkKCbp4x231kA6zDpBoSk8Y3JDBcYp",
  "key10": "4AStTvLgGNAScZpaeiqATbdUqDk3iAKvXER486gejBb2TodQvRseTG9XgKUxx3HuCzEvZoj9tyACKNAtqHurTC2m",
  "key11": "5Pc25qH94cy1Za8kxFaqqATnVR37zbcLLr923oayGz9mnw6jRKUR9tmwd4YCYmfjutWR5u2VJrVe4PtDEY4DJoaL",
  "key12": "2tFTAckLZt5SvaCmGY2gzAVN9VHVsq5e2uLwBkK69XFgVvt1UWxHpagkw3ZbZUpCH9B1q1hXVCR4y56E7dakRkQX",
  "key13": "4SsCe41XCEKa2Vsh3NREdo9go9V48dnViQiHqTMW6mRvwG3tU2pRwVbZru3sY3PQ2YSLE7t2dv4tiUfW6z5xyfWJ",
  "key14": "2zBi2qSyZEseYNU4TspxkR2gXzTWMtraW18czKE9UX8B5CPs28Y76rJq4gvSCwh3F3PoEo1VbiFvMf4JvLBPAL39",
  "key15": "2ebZMjqJoULJM8NJ3Qt4o33aaRgHA8AZU554sT2sMqdBo9GEnwYbsrQPNxQ1fvyxEZYmGq5BNDC7qkUPge6yasCS",
  "key16": "4P51emvFc6wGjEWyyAyYUGWFsajMcSQVRCByUoAAQghsw2NvyuW587vjtD99HvUzrHzKHcggkaHFAEbXtXZNrxvN",
  "key17": "41XzSg5T5caixmnb859qLcRyQmgMg5sDTuMYXaWJKYLLcagowBYSPwcJ7XYJ3Sw2cUv1PSbQcVgGrWf9xW4rCDVY",
  "key18": "588hs9PFGkSy8iYDsTLX8gBfJfp6zughM9wLyvQ6SZZ2vYzZKBPtFdxHy3FyKXGZScDj5eEZVqmGtm1HTMdAc5gr",
  "key19": "4KAyj4hXvFVS5EegEPY15JV6bERrmd7XnFyNUHtwutxo8LbFBZbhY2XANG24UoAMJXAjs1nRujXWHL7RKWnwnS7D",
  "key20": "4dQq5JKgi8kGWRu9yBVyfMwU3KmBtZK49i6cYBYKx6v4khHeYptbZAfgVJ4ZpWjNucbNwZqyYfwiNeNBaRCrAa7Q",
  "key21": "3cktos8hzGiJFzjrxLcWkwSbiBHwb8cQwxKqKrE4yzRhxGcwwrkoT99mjv1FphJcB7AQtEpwVisQMwj2huZ7hThb",
  "key22": "4cuVLqCchGGthi1VFFHpSRxvxH1gyCFFvtY1DtA3x3LEVkT4ySyjr1Uvb2kzXVGaK1scsF8fb3UroZwBSgVWBp7Y",
  "key23": "5a9sF4UFXNxJmFa1B4c5GBCt7CwE3k6ogzSRemrfyo4x35wPXfSuWn3AKM75Tk3d449saT6sjGGXpViawVu3KuRx",
  "key24": "5bRCySJxD8UXi7aBgh9FPXZNgT2bzzE35QJu8kkGGTUNTJYc78QqTv2238bR2447eKYsRT9wLmA7aAs69T36vNLB",
  "key25": "3UrAUrGtzsy6mGhbqMFnN5sfM9xZAYRaG3xGpJrjjHSb2qkbE6KG8nHMzVoDXRmoSbKnbjGtwfzRg5sHDgsh6MtD",
  "key26": "48ftq9QSW1LX6g4ux3hjJ2DVLGw5c2peFg7qLaV4DNEjiM5zqLkSBthaP8ePY9YWJbdPCbw7jF4XT19QVY9YUd7K",
  "key27": "4UTtLVLxeqjwKjqsDPTKW3qv8DZ15eKFUbcDbdeEPct5c5JsPZozqmUCzZd6auLtQCE5uNfWizmoNn4PKUPBT2Gz",
  "key28": "57vrLbZ9DrguoX2PdFkb2FtevFhJgrE8Hz67DguMcxBssGFMvudUjPz8smf64ajamJdrHiGYp6RfhRMfPvg9jFWA",
  "key29": "cKmuyCi4dGiBgjNzNPpCRugNvttmZMbBbqfTJc6zuUeeueLLpj4CQniHm7adPGAxzVMdfGcbrrpHwptFDjJL7X2",
  "key30": "4FbgVrBLLWNUiGwjbF76PVLQ4i51gRH65e4zAMRCRxjg5rGoxzBiDNwq7rmoryWiF2NTnk32Ay4dZJBi7gjJFzA8",
  "key31": "33H6c7QZjAYq6L6Qx3hiVqA98LeVhtmLpe9LLMV2CrRXLd7yTgZgzy6HpgrTPQao97L6wtr2zZzMSa9zfsMUejKj",
  "key32": "64kX4CwsWsJSuW3nhpNBdREPMbgQCLXqXvCDaxLS9riu6Lj2NeWfaurh2LfzLNoWyAoXU95wGK5mDA7LQLd3K4ZQ",
  "key33": "3GGK65hbcYwVpU6rnMnmv5hBma7N5HfADfa647DbyvD9A4iqBrPwUuUnu3ApTyd6KF32kBjzGGSwTppCprrHnoi2",
  "key34": "4rhvT4pULZu4aJq9Xx9hUUZR4c7XzeHAJYpWu1gmiEaYJAy9yWpf7DyKVJFFKWRJrCE7RxqpN9sk5ANBAGAdFtfR",
  "key35": "3Sf4Lu2F24ED56Sk9S8jAsZt9qK6PrBkjhjuERHoeYYnn1nxr4azn1CSPLbQgm5JaYvTGGtwr4wsosRRap7bGGmw",
  "key36": "26Bq4BN5t1XjDRAvns71hAXBeV8EjKh5dQsdXV53mdwhrgb15sqNs7JGJ5u4U6nyFEGkWzoySsdeZEdvp9DkMEAs",
  "key37": "VU4co9sgqPcsjKcCnaEPL6gkcuzHYtiryJ54517mn7XyiA9SaktmTbVkCWFFHSZ8K8cXdtYPka5JXVHQ1gXMqch",
  "key38": "4maDZjkCkzmgiirEWCZC9LmwLm1GkiMh7bkoi3Qhhd5Jc9Tg3xDiGyQBDCMd1pXxjABwdSJ9RJqQcm9VP72pm6Ww",
  "key39": "4j4SABvX5FjMmZUBFPoqYs3qzHuZw5m2oNwo3pfq7c7k7eqYjQGZuSULCmpzfwPLk6LWrgzxgGs1ukS3zxt6aoxJ",
  "key40": "TWH4V5zWbrcLDozufVzswsHKw5VpiskbVwjpG7RPTbd9f3wY2dLiXBXzq93GsTZoDt5MCAeHfCdZ6YtREWabY3F",
  "key41": "3bPp59uhyKuUVZWv72JBPMjV8drEdLgFLVDGP6GuL5k6XEL51fy73pPbSsF1rN6yv3Mpc3GDJtgdZz6jdwDbqJ2Q",
  "key42": "54WzWEsvaBDgyoqvd5uh6GG1cYisJ6ghhc38Ay1TwxQU13Q3q2PHnk82a2dgqMZrwUzcEA8F2jQfnCJwrPapGVbv",
  "key43": "5SnppaQkJTRgiaaumKXeDvDpkjSLR6Dd8Pw8oD8SR72jUskED421brBcniNXXHiLUarGvhHesYE9JK8ipdKrU8Fo",
  "key44": "44eEqvf3zG3xjQpeee85rRH1VDvr24EecFd5kDgSA6ZuP14x3goeaqzocB7LVtsRkxHELNPZoDLp4eToBJkqhpv3",
  "key45": "3wfCeFKh34wqmdB7amjHGmnVKqcdz7MPfjhnBpC9f5sVzKp3AvUbsNANxgj2wvKq5ZuZvw7bzNjkgjfrFe2k4Ak7",
  "key46": "3NdK4ykhXWLdo6zbcRpVhDKqS5ekn31Fwu6zMeT5FQEFnWM22qTh9gvxn99WEhvWrwftaA32z2gJxWgwVK7N9Fve",
  "key47": "WXGvkVMqadggM4Sj8SF7o78jRKaBhYSNkyYHaiAhSD7t1rLwEZg8SerMQNL2uaawV9Mp9JYg5Qw8XpM7nXuMZHc",
  "key48": "4d9G3wP6vdKJL8qVkrkPHVyyom8wJaXxtaGZsgMhcQsTFsLJSVGCw4a67HG92wb3v9AcQqGQnuaA44fcPWA8RWTA",
  "key49": "4F192qmswy3vwjULnJp7ursCWVGhDi798rdLhADjJ7b9roVotD5roar8QTpAJ7mUkPdALcFgLkgYyxuATNi2he5d"
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
