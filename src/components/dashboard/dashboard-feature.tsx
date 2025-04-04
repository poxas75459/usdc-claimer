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
    "5fvxMfDMo3vZ2nbnnobExigkcpwhF7SzZuqPXfRstKvtnzcQsZ1UMBvtPDiVw7gFYxtsSfDaBCMpe8armfjKPK46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYJUzjbykV4XUpHLAC98YG8Ba4PnLGF8iMwUWmBecbETaCXurpV2WkEuPNxN1YUhENDZ9KMRaE2VFUQuVh88wWW",
  "key1": "5PmuLtkxPUhiu1qQRAbdNg14gTAnjEa2TYCMyrpakFXdzT56FB3rsqM4wKYgDKhDLd84WDy4pT3we4bjrGxwBijj",
  "key2": "iH1DQJ6bEEtNfd2wUXRqxjW9aYkFijU1gsWoy2ikSBYuqowmzqibqSJ2SDyZ8irpteVCi6iNJsRQcMXbQtNRvEa",
  "key3": "tpAY75XALtHKXvjcxu1ChEL3jmyTu94tyfhpwjhyYMZwcFTBG4czkf6G78Ad1FiHtreuUreyszRiFJ2jU64jMdz",
  "key4": "4oJhgfpKT37DH89JHXJqxCnveJ5bx8jUmy5n3p3Vqgt7Dis2tMAMrAJeQRnhNYadQSDHBVrSUkz7KizXF7pySUZd",
  "key5": "3tJSUcq4vgFYxWUmGcrbVnTGniQgUCTip1tGQ63QQH6qwM6S1mHShyKmUi4eHdh7Tkv4yrekZCcmq7EzuxJZdWM5",
  "key6": "YBzNu8FeXeNks51NANKee7bL4NQCdhYzGTRMFugj2HP738NxyWGPUNTGNgzS51twwFFq45fPVz6n6RXBgpcfAoj",
  "key7": "2ALeUHLtTGS5ikvMJQ3L8htHKUjFLtRSms8y8aTy4Uk8xGTY5P8aMc4vdReYvwYYrMbCRZZncpomQgeXXfzF5b7u",
  "key8": "5cRmHg1iZUWmzXpucTYewSKRZ56SXWyLib3WA5YunYvL4c1UiHuL9hzbMdSxaamVS7PTamPJ37doQDs4CThAdKYd",
  "key9": "37UMMQ4Wgn41uFEYV4QPBKmSwMgMJLZg3VPEYf2Ck39GexJL3MuZh7z9oUaNJFmbC5GJZYX2M7Vs9am8hExbLJaV",
  "key10": "2QEFJDPiagzHaMvpsbv963buFY26Yxnrbi4nqbJVCz83MQDh6D6f8Nd5xjwN7v9katWj4nw37UhQw4F8jVci9oKQ",
  "key11": "2CivTmynLin2KKZzdgAuucHEVM7C8L9qkme5vhWeCUm113PtAZYKu8uDc69Xq3acvwFRU2yonA2akEPA5GVSAgfC",
  "key12": "4FcJLNi9fu92rU9ExL7XNk9meDWZRzxiJHti9UtE9rsZW7AywchTyj6CV9YVT4jZ1s1g3cPbH1xuu3V6hwy3tQA3",
  "key13": "4mXHDTjRaoADwcpULpGZd7gpbwcVWogvx4iC6i8G2nYMCZz4FV5SA5WLZ9fo4Z9i7deC9dXHdmaatPfEWo9PYv51",
  "key14": "5bboPM1mSdg32SvworCDHkfpFzNqSnL6SQC1bqrfQVv8eQc3jbWiTsKHXpcZVycqeL666ZBh5mk3eecMApXrN5Nr",
  "key15": "2b7oWRSvQMZagVkt6MYnMY9DkNf5N5a2LiqaX6qqxqfntprfDcdUinFRrBb1okFohN7taF6AUkMz6TmmKQCopE1W",
  "key16": "5hiQPTG1FskNUxz3cRdwpfVcTEjRxqxMJcrYuq8Kjn7wytrHhP2ycK9AZe8MtbkorEoN6RzjfhSsp1ce44Q3WQQb",
  "key17": "3WSLnc4py7NrjMUhf1qryG1bjWTBbZ4VCLEvpgtQkdHcyugXRNxgwSPgP69meFXMkBKm1kkunzgj5UsEoY469Z1F",
  "key18": "2xKTi243NECpKRHUXyXQ22UfTVPYFMhDqDGVhoe7UKA4SGFnsjFcjkwNJ45RxRJeBs47p9AyLwcfpHx5psfpxEgN",
  "key19": "4a8zx2Th6mV1YTPjnFzYcSCjSUftBqPTiYtq3yzLQdhT1PaGGtWgktpEoRZ6rroXD3AVJEwqpWvsK3qW634HriW6",
  "key20": "71gdKd37KYd7zvvCy5aN8qC1f8ankQjCaUtMTUJzhvvdFfAVf4Abo483D4j4J2ctkSspydqCAHBoZuS3k4z9dkr",
  "key21": "62TsXhmHK3cac1DB3aAcibb7thEtQXPe2Kdq4YAdDugyXsFasa1tuhnqWnEEqcLPqMJ2ZYxNACUkpUkM1CXpZEmp",
  "key22": "2g9L2VgoVHFnUE3TDzDBaM4WFL9JbrUqUjvCkZVVmNUA3BuqVyw5cieXD9wPyG5RCTTTatF3GChrrqdgRMaB17To",
  "key23": "23oB6toDV8MG7HzgjZn3d8M1qeBodPqUuh4G7Bo97YW6NLtiLvuUVsiMn7j82erKoPRX4wsgJCTFYunVWBn5pbdg",
  "key24": "AZNA82ae2TFt6C4CvwnQ6hxzY7aTBJzG5Vdm6bcwrZ9eQgQYaQs9U9mbwqE1VjypqehroqCqh5RWDwKK4PCUH5C",
  "key25": "2ErPjkqLkvtAQ8UcoSR5LxrTQuQBCWQ4gK7jUENDxdsdCMpVYoe3hmqK653Gi74wKMmvtq6W7UahHoBiVoMdP7ER",
  "key26": "jHdnnC46TdfP6zRotejq6zT6DdwEbXbCYKt7ZW2J7tFajWaecN5i9m3Q4emrQDGLAQzby1vnisELDTvRrMzPSd4",
  "key27": "3RqPh93WjUxHcUbVU8Fh2HHipdWxuG53Hhp2YqTEXzpE2HCaPSQPxEZx4zn2sEZTW5cGYELBm4aMthYY7pmG5zrh",
  "key28": "VWyfH8iSeMzMf9k9zafv5u1iewY97eHgV6RA67X83UyrckVEkGV4pqUsyntjJTWBXPH3HDQeeWoaczaAwKKJC73",
  "key29": "5qcG3ZSTJNq3v2uwD8JyAp2BvMiYCzZbkfHReRzydx2594iXsjXrPVeyfqtX8LUmxxpkxd9xhJcVH1iefy1ApKvD",
  "key30": "J2u5WJPUqscMyAR6hBfTKBwXATGTaQzjTjxBJdm3q7G4QcJn3mdK5yfVCZ1KcfCPRSyRqDpGcHEGeJB742iXJzB",
  "key31": "63vt9Qib2LKT4uv1WNGqRbwtm7jcnTfT9KW7PMS7yjHLWvDuFuDKvLzcVVopMnPrvuGM9bqM6keTdKNMRZAgrqbs",
  "key32": "x4TPJYFNmEbYCq1WnH7we41VUGc4yPFgh3t4d97hh6z5ADesfiWR6wbUy1Yyf2ACzcVvtcvMWjWujws39yUz3rp",
  "key33": "37Y8hjGADPyU8qbUo28Hy3STUJjurtXARdtJqHPnzrrVMJxdEoXrSkmovShsRjYQeguYgzEmsnNGdTV6p7YFqR1W",
  "key34": "35A57FBHrsY9Th4V1kef2ZAs2wudKaoUdxFDbo1oVNfFaM9VGTjTBMenVr3yUeapMbBFfgDowqhSdFgwQcngoh3R",
  "key35": "4r1paT7nYVKaLhJRgqwCh1aTQ6WwUEYajRsjGwCD1qoXXL33K257ConG1hdrvheHfp4r2yodWFj4qUcbrDU8QtdV",
  "key36": "2zEJt1PgEdR5mWZedxHuFQPCnS4231szUUx6guTfkyg4fwSS5ZktdLcp1HrbvcnapoQH6Hcd4vkZdg2rDa4gGNkr",
  "key37": "3rgE44ePsq7zTqKgT1uXUVYy23TDjKTu2UahTtFBGCtpXPo53kS19Muz4yiWD3YQh2U8MEEgqexhQGLeEXJVq9Zy",
  "key38": "2PpVev4KQymLDjWQAWMeUPcRqxWirexR3fnynvnjAvjki7QnfJCY5FG2kneweh7n3vb5RS8t6SstmqRXFbK7BQPP",
  "key39": "2U8AeHoYquRLMFnsFbEKwSbud6VQuxStx79pz53QWgc7hZwtcB7XZHdRDBhKvSqfWFuT3bWZGkL2XkPqHx4hkjgx",
  "key40": "kDN2gj2AdX18f7SJcS7mnZXSuN1kuQwm3p2WA3WoevQZ88cKJ3Cn9UmUrFoXfZgJWT3nxMpicqy2Cs4JdpVnD4T",
  "key41": "2yK7fakrvGEnZ4RDTPJUdbxxP8TDV58bYf9Djc5DQdsdCUYDkW1WEijPXQYL2vNwMHXzQckbFq6BrLWkFSNgoJfH",
  "key42": "CKVLH5YXcBhr67qWsPJkVuatYjTcrKdVSpB9iLbBS372T1Bmsg1PsDJt4iGiiP61E5aVoYPjfK8UbBPkD67eJ6Y",
  "key43": "3bjV8Zh4we5pFjdWtns3YTNzb5BpP4jCUE7Smer5Kk5QYABLsJxZjqtvW96tiwo8SGaytRNJ5QN1yeuXyjR7Bb7r",
  "key44": "Wr3QTx2inHBErLbSevg2fYkcjvaMFnGJb9VnsqYRdEQSHe4EXPWmUFAFU4yquk5vLQFM8q6J8u5S1ZJrjRNoWDY",
  "key45": "43JA7hXB7PHwAzdsoEQckiMqC7D7Afd357aiA9HPntFJZSnhmzqXUevPToneiT4j4rb7vnfwfRTPs7fr7rKRnbtB"
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
