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
    "5yJEw3FFB6fQP2sRgNbVJXfFFynLvtm6n7PMDdAwfQk73dmRHVfRKehdm11i73enXVG3kwHHpeqo7TWABYpHDsQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmhvvYdrLoXzS3RFbwnJJ3tDMiszCzkw3BkUAH6sRRnKcyhAWXtewUXbGHcqTr7NRtPHc43PiUoxWuPLjdWg128",
  "key1": "Wjce456A6RoVvAyu3naM1a372p3GVaFvtFYKhmyPWFD5jZbhBD7QPEvGUR9Ni79Ys8cB8tKWexvGjrViGjHUwUo",
  "key2": "2qewdx85VgHEMYiwDSyPCY9SDCZkFnR719CtQ9gV1irWi5J6U4wznDtjxzQWyeyC1jqUeZRz5gzFkqtV12LJN3WW",
  "key3": "TTApR5bzMwyaTyfiaFbeyzZywMt556gUbdN6GU8FFp7g4ttcBhtJQpCPGkfKjmpwHE9N1kTqSG4ZDQ3XdgrL2Kd",
  "key4": "4HNRgz5RrHSSX6UCDXAAhipEsMibEZTzYbSyX96Hz6TdZiqXkkJZRjY54QZSwkxVje58hQMuQaNrzyBonoj62Et6",
  "key5": "2Pcux7FtaMFR5Dzi5i8ADsBUktSCbz1PLeFqRK3XszfmunmzpaKTJdBoErjnRwUU6M1WgvCXaSsVMKc58sBYENq7",
  "key6": "3Tem4SgYpCXnnfPqbna3SdvcnX3WUU4ydnzyd41nFxvhxmcuhthRXRNuhk5rbqve6zEzz4Fi97dHXKoLk1ptnEga",
  "key7": "56XCriq6tLWYo33nDRRBjawmutVMutmGQQzqqYGRq4ezXRqSvtBgSqdPXuPWNGg1rtyPGxa87twwcLPc9gumtR6t",
  "key8": "2aYG6KYU8nhCpgrEtFGbSgKnJNQFQr5hF4vKTis4ALXc4EujjvehwHV5vjXTZ3HP2aLiWBJ6eJQSizpD5yw8RfU",
  "key9": "hpPHP4Hfa57ZeCxcKzWTvPRdhy7remeXkRTBBWayuWbpzXQyxdfKF7vcR8GckKXLZCVtJE6eiZNNQCSkbNunCgr",
  "key10": "524gk9LNyb9NsZatUiQV66ZTqWDYDkwQvRyuLbGZEjRbvKmx51R9n3jAwa8DQWwVhmy6WYeFRTJ5sktEjbmoScoc",
  "key11": "2TmFLy3gbpgEH49SMUWk5fu1cEDodv6XaBPqWkBP8tG8f4vZ2p2NgdogBSRWf2DaPLDX4ZVt8f9Xr1GAuLo4eEPV",
  "key12": "4QjMgUdndasHgR72J48nphhnu3Dm4EmifThaWdvkR9YNZvLZWACdwJUdTWwkq5MwKFtNcC5nqzVQmNYi1PcCjNDv",
  "key13": "5maX3s1LqxuJGdxaYM7YySEx3y8nLLfwv15hnoRxD3WVPYwTybjbDE6xU3otz2M8YnByEkmWT6tBX43BY1p6mRwE",
  "key14": "2YpcqciV9TyUtohhxdRuchvn3dXZhqE3AvGdNMCCmT7fF72XFdFrtr77oUMqTnsYumTPHeriCRxvQQrhQgGcjaX1",
  "key15": "36QRrH2f9oPdVsaYPqf1R99BF1vMH7ZaLdUJkUj1hJeGvjax7zVwCiJE4kot384Y6PpBGSKrKBj5MqAbek5Fjtgd",
  "key16": "5wCntPQfUfCdkbNYFtSTeVVmjc6zWkyHCjotrEwrnbq6VVdV5ExF4Kk37taxKQjvjFnEfMrsqqspG3qpmCxuR5iy",
  "key17": "4Z1HpX7gfNLfAcW3wQH9nReJxL6DSddQ27dKj7kNB1xkf9AH9NPP8CNHky6X9AhH211Y46i6MBmTFrVo4dbipXDx",
  "key18": "62SVkDqvtDNQAPMAcY5bQJ1pEW9bFZvFEDFRGVXRfLe1MsoYZjc9ed668AonGoURuvYKdAfKLwF7UonjvnRGwaLn",
  "key19": "2QiUSZejyKyXR1BrbygQxu8WstEZjsWmpT3uX8V8yew9K3tpXNJXuWPPPedLm1tBfVD9H44F6hfs7ZCniGqk7cxC",
  "key20": "2cgKYzphkYQbC1vLjVqXRNDpUnRwAmCJZkV6ynrBPYbFAya7v2bYYVtUe4X7CxSQ9FqwXszJwA3mNCd1et6giJrn",
  "key21": "3jWPercHdofXWWiqMTrQpFAoNTsGpvxSFaGdhqEKCHWMLmDqrpS1tQFZ5ZJotn47prig9ynBnMyiufWNodkRE4Lr",
  "key22": "WAJfVDZyHmPDUP5yvzmohqMRyanu97yaLJjwA7Js9DGZjcVqvCkVUpNXDHLmMEhNBinpQ2pdTqUZWyrWhcyB1Gy",
  "key23": "3Tsk2xNUF6qcNmBWXh1JYNFqPP8iYLHAQnnBMHYuVT5xn2Pd5zBVTTaoYBvcWFiaNAhEXrmLJxkgtmadksB8iKiA",
  "key24": "5oS29Y4Bxgqcqwg4hxrquMrhfJbj1WqLeRsoa6jJw6qFncpd7n9DTxKUCNgNUU9iXykbuehQteS3nn8rEJVNb1Nq",
  "key25": "4DqRVHkPUbBa7rBpuvrikNQDvYKukqhXKmKPrhWuPZg6nsmmjpZia72AC7JJbj61y5kW3hLcQyfLZYEetE5xCHLL",
  "key26": "5o3jLedNSzkdpGBasxfnCFXKa4cjLyVBeff1fHmAthhoARWePbwzk6mBoTW5hHuagjU7eWMNh1SL4YesQmfe8GDb",
  "key27": "3N1sKqKAYE43tQmgc8c3GMyZXz6xoCWC6zA3BauGEaXh6JBYVcKmn83mzaTCgpgGhRbS6cMDELXWYF5BQmVcKhsX",
  "key28": "5y8viZEBoxsfoBHVFdYotu6wN7WGe41S7jZUJYDxzx7Hec4MFCpLFxu3t4ZfUf9ssxcdZUJVzg2MqiECPhc1wXbq",
  "key29": "3ZpbyACu6YrEjNJNzSTTKrUhQuQE3RRguAt8BbvKiFAoQU1De4a1Ffkaqs8zrssVDgifnGYf6zEQA2MGdNDPZWgK",
  "key30": "2KtUsT3ezKHufBFc3HQZZoBFkvwr1HPFuwW6SLTGsf57aM5Hq1PCxNQ7YZmnyBvJLi25TVm7XGEwNFcnSwvZNqk6",
  "key31": "3qMpwWyaiZXtymbbZQuXUacoemxAVo3NjTNyUDJWT6XkYDRwCMac3SrdDV4JJViMEw2Ep3oysC9KeYVLHnqhd6SP",
  "key32": "2K6NRpVKvyLaFC9AHPEPgMccPoQYw9TC3w34WpsinseCK6ViCfDTZoPLibnZFQUjhGDF1yQen8DkNPKpqDZGnut6",
  "key33": "5uyhcYTAUebi288ME61K4L7GBKL759AHaee5BNbt6eN41cvS4tzFkCnHNrKcA1DDmb1s8dYZBbqHwgm67wiTzijr",
  "key34": "4qoenvwU7RySFbU15zmU5zojvwyqiHi7vqczFC6u4a2au7ASJ6GG4BZh4yD3UrSFtc9KKcaqno6w2CMXCz2tm75W",
  "key35": "2zVnNKr1yKaDRaSmofkCWHLwRne64H9xe4bSPuF9ZqiBvhs9hzNTYhpB2MP4Ax5vjPosScdhTixAM4m9iyqTwK99",
  "key36": "2CRuRjPV6Xt17r5GGkVvfwnx1rnqQK8udNtqNqJMgo1SyYrJc9agcsWJs7UG1qg5gVvrDLWmMEQubZy5Ryb6FThB",
  "key37": "3VrJbcPF6oYm4NaJ7yQ7BvToJ4nY12Y9AzgrWmmP4pZF182M4kTKfA7kUP8UGLSwUAQFAujy4YubcmoC8EBXwwfP",
  "key38": "1fyyazggiRyuu22ZFKqMi37Z7aWFRy4bsphkiptDYXY48ywaZ2givAZQjs2btdGUQfKacDGuugcB9pTTf8Tu8Ay",
  "key39": "31QRQSHWuoTzWMS9DGjdeCrb7RK1fKh7fpxHss6PigtfZzKpSMDZYqTMvMPWw8vbQHNFCMnXbDysbfMbKAQPF4Vm",
  "key40": "53gqry2Af3oMfgvek5zARDgrGksLSzLouLEepcsZ3NUkiyexAmPwksa9DuZhDCvHp8rvWGQjhE5E188b6W1QP7Zm",
  "key41": "2gnrcW2mGsnUEC7mXkNeKdp25VmqrpxqC4Lc9ARjAz7yasWSmKSooGepe6Vhpo6CM1ZjMV8rNN3dCY4wRpRv7hWA",
  "key42": "28AFmfBNjVtP8g5yv3qxHUDG4aop5QsSLKUT8caqmMTnEmwhgC8xkEbqLAPUMTTeTthMSEJ3o9iP9opoVeo8wrxi",
  "key43": "4dSf3dyBvBmkYqRK3zqJRXXCcKSdWGDDUENWw6cvGYqr7ddCJ8wmVe1uqRghGvsbGrzfU8bwrivFXNicc1iF6fHX",
  "key44": "55dKZVQhL8VtUCgiXsj8eswd9eHXDYGzeBKL6hoJFKbKAgKqzkwfPDyCQLDzW9kS5oqDujq8wKnKzMuUtJPLP5J2",
  "key45": "2mr4VL3FXzet13X6ZbDxN8hN5mzkC7qpd1n9vXknTmFWwZwTJxhAf6KW22nMPzbvbwiKqmDRXdzhK6W6EFXAhocu",
  "key46": "5jBaufjfbMnJ9wSTSWkyu3ik71iYivqEVsvpZPnEtFFHL4NbH7j22ZWuWmPQMLK6kt5qfupYF5KL8e972qKvZiAu",
  "key47": "4orfEfF4kPfjpHytvnyjWgMetDds3KjgB5K3Jr6WvUG2JLnjJNSkvRUxWdFEVgBJGH6m4zkoDTvs8nrtYBWwVF1d"
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
