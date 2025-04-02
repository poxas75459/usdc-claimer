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
    "tyGJNCSXgyUkAA4AgeHuBzUoBbrhW62WvQRpkESBG6FHeppqGiz7aBscEGaK9SZ8vNBQ1A8qEdF5xdhqeTnraka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5DqQvZB8TXZzJcGZWAgNwYAKv45AmaAHGt1HHADzn4aebPceBzip4MLU1veMhxyXJsGgy7EVijVqR8qUSyQLvR",
  "key1": "BtfHZu1THWyqNQiAfBfSMDjXgUqcy9zPLAw3nayPDNoWNPyLRYwCmaNazq1UMAnZ6EBNjNorWA3NSWNosuZSeFS",
  "key2": "3XGDCCF1DpKAbGn7rhUzoCZBxpsGXjnE4VFFBXMYLJwKMXXnbdVyfYKEjkQseigKPmLzwy6ixokpttqPdCM2UBsp",
  "key3": "5Nzf8bh6vA3dmqUGZn1YSm5znpR9AiGWRbwGtMQNeTsJ16b8TUsTCmG4Non6YHveqGsKw9tfMrH3wosGCJZMvckb",
  "key4": "62CfmoHnUr7hjE5frybNnaKvhy8HHNt5JLdLB41GvNUGxVsU7WNbRxGod6YezycNzXhL9HxEpBbqDKaTMQo7B7jT",
  "key5": "4WoGoSwj8tUGVv5Dqbjs7PmR27kHm6tSusmHJtqkWDKR9nygLv2gpzQDUuGTZbKujBbJXzeeUMkmxZfkyokKmyin",
  "key6": "5Ci8UeJY9s1x6fZEfVSKmnYnHpyBLWmaeUHSMajzZ88grH7vcumZK4ViUFwm3tS88bd57AtURvmQEbCwcsbEnski",
  "key7": "KgPsHvY6GUaHbfqh6QxohaiL1kUtAjWbartNnML6zabJJtGTSFgTynoXtRW8ChQwCx2MLEXwyA5WxyF42qAvrfB",
  "key8": "5A4jb7YvSfx3aSSMtK3K3Tit9PYbnVVNe2bLSsmcxUtTrM3aQ5MEeLiz57kQtZ4wDPnNqDupqECFcDQMMDYzhEmz",
  "key9": "2idoZt1YiZJYCFZJ9GT3Dgv1w8FezznHTNAvnLx6TAVc4X4KZzEik5wJme6rTdmfMJKE64dBSEs3UGc8kimRT9CV",
  "key10": "44z1uiB1sFZPkQKkrDTRigbAD41irYcuuyG9AcJweBoPoCyLrbHmqS7RHrspbqzbJGxRnRQvJHDi1ZAo8i78XgYz",
  "key11": "LZFBynXHMPgLm6ajzSxd3Dj9EzVV88QMqMuEpjQbv8vwd6fRdsKjN5cbMtm9xY4URFXGPJjuk6gUXZMXv8o1PmZ",
  "key12": "LqEpWtCwNB539f1N6YGtWDM5wbzay8bS99BmuRR8VY559QU8Qv229EAZimxe8rd5e6VNBj5pFnBrb9nDTKksetu",
  "key13": "4fvXZKnZ3dfywiFo4SDp9GndKPwWNYqg2b34kxC4wvxJu6X98AJ6wVdXE6g88hATGJ9qfie8zx43M5ecdwiKxd4K",
  "key14": "1BxsPpoX9wTDzHHDTrQcyfLYv4Q9sEmxrqAwVKGXq4rGXbnwRnL5axY4AHp24RB6F3AhfLTNovS58KyyjWdR69n",
  "key15": "4xosLk49gGybckXtNwDGs9mahngSs5dnDvsaKePGCaAUY1whxePQWXR4yg74yC1UR2CtWHKJCq51HiJLxJU6ura4",
  "key16": "3fXVpaUZ4SSCFWzQ4KTJkfUzSEpokzrWfjCZkMJrtg329RoS6DdVVDc7rwJgSN2VmevLERR2PeBNxZHRPXgALPE6",
  "key17": "41ujbQ3ybgKMaHAcAtPrXgXVhzJaHiYmkBsqqvF6sA1zsKudYpwH7QXYXwmKk2SvpBnUNwdqrvR36zF7wjZjcSb",
  "key18": "3FtVX8HT41Bu6RAbSkp7vwdbqQytepAxb21tVV91U7zdrsqJ7UqviHZTYt1r7pj1azqsDwgSMtfBdosYuwCXYMWC",
  "key19": "2wZbTC4PxgPXSjEoTbJHTA337FSXcsZYUqZGnXUN4DNqFHSp9oEp2WjbCaxuiYXj2tHjyqnBvxcLBXUPi2Yj2b3c",
  "key20": "nmzTEhCUBwcFspTiCQeRuxHm1e1zzxPLdHY8sXWcq2v3pPhRoyaaazUceAvtapJsZEWvCtFW8kXyAm1zuxgoDXQ",
  "key21": "5cvVDFXx6EV49upkS9No1wwAWSghy7fGEgEgijNymAK7X1pAYaMeZKDqensftESzbVswr67d4cEoeitv27Qh98At",
  "key22": "No5gHHk91xtA2dmtSveyUKjkYi3KjVYCr3dyAtPYoWHNQ2ryxRLsEDewyg91bn2TDXGKNUpGAohdvmXAqQcCHT5",
  "key23": "395K559nhqiWEsAg95B49Tn3X9pzFaqdDTQ5N7BP89i1t7kX1e9meEwjKvRG8hxrDisEactiZ5SdszuACAWcMfxi",
  "key24": "sAnkDrrkDsY5R5LdYyHNfTx8Ei115HycMkDkimxfrqqyZhGsgfgxAwfQHkiGpXFoKQ8jYieLjM8mDzFXEycuJRw",
  "key25": "5geL1vdDdF6wrUk2j2gi4YBX9WmoUmnbi25qqKKzWe7JzckT2Awus2GhJKrUiPYzSoPYK6mEvvUHsK7ZeWWuPgPX",
  "key26": "4nTUctgANK5qHZEAQgYjUCtSLxLSrUSiCuBzZmKwfgCPiFJTnXbHyJwhxazD4i4sPAemt73fcAbZkV5r9w59tBeF",
  "key27": "4QbYoJkc8Ev4iS29YEoGA3jSNCDaxsJ7TsgW5Xns7gejQfweEmLheRzp9JEbdZYr5r5964NtUKCoFtCPeaxH3shu",
  "key28": "4dNZT9BjXNxmsH7bYRpMvrA3mAEfAF6f4phYXEVstQ51sqqYghToiejagqjdSmX34KegpoxHnFStXxZ4jxu2qsxy",
  "key29": "3LDBmBhokFkEFDcqpJFQBYq5YUkqUPQL3eLVzx7f68cM6YNi6LpyRK6zrpP555aQQFW7Yc8CYL2YP79wrLUkLqsM",
  "key30": "2UkfNanabw6qqQpkhVo5FXzXdcQByyuhwRExMEyN7BiQkD9Ab34SeWqveX29rpX7LfSzJQgBp1oMYxP8cjPs6tyj",
  "key31": "5MYRCdoTp7Yu5nkznsJyRNqrfyBrRGvo3sXQW3hycPqZEAYYeZsR6tzkiWs4w5sFUMGxKwVvXmi7Ed7jQBps6vg6",
  "key32": "5hELjb5dwigR4URssoXnrRzHHiuUkKiMyG9AKKwbaCqA88Vhy319vnv54uEp6b67MY3s6kHMRbqyYm6f4APugq8i",
  "key33": "42gPgHPMvhX4KU1TV9x5yVGibcaQkrQK1bCz5p13LGCtn89ySUgENbgLqB4a91W8f7F2Yyt7S2sj7yhDtePwLKf9",
  "key34": "5cnLRaB9dWkeUmL8RPj64h1TnuGb8Fy4wcaRdtXd82DL31cMHEHzCLgtkkU1JPzEQngQYmBsDNjxvyCgBaDFLJ5R",
  "key35": "62U5QZicJLdyoLcMj3NvpxrraVbErJw6uJRxhfZeoFBgE7ufXZWKAQGk1qUNFc7MzJjsMXRKHGpMJSc8YaMg3an5",
  "key36": "5V8CeuSyMpkkhMCx4RJLPocBP3UBsHAkA9SscrypjrguBT4AMtWyySALZWxdYFL4G2GUJbtrRri8RzuyS2tySESg",
  "key37": "4gE8Cvs53pdMYy7EcP2bBFhJ4xY8t1ibtPnaGpw5DE1AgHf5JDWyULFpre9FkhMv4AcHdqk3FtKgk8YYGWgm2eGj",
  "key38": "YGB4GyHPc6anQFm3RrGc6sRvEjzFcWyByyqqH7xy8VZXQUCtJ7YW57Hp7yRSgpY4aMb15E4AQEj8gofWLHuYtJH",
  "key39": "2JQB6ymNohdnAYoHLj9QosmvjBfF9U7xgedb5NJq8mVG5apVYSCq73nFHdZs9aBwb5gMahaWFE8uZxXhRkHwNRd1",
  "key40": "3k2HzBRWBTc1KcnE3JezjjnXpDw9ymk5j3p2cPPyGHEUhFctULeQ3w5Ms4tNXcEAWQF6ja1peyjF13oKE6vDSi3C",
  "key41": "4FaMpGkttirxTE1nKoxNJh213iaBCngVfkCWwc8D6wCdJ7EG6nbkv9z23XGuMTAKpTVpoxKTsmqf4hMnrc36txP9",
  "key42": "2oqL1pR5JGzyz9pCsiJqSWkF5uK3E9b8gpTxxpLQoLMapzqDN4VsEGjzztxVq8RQs3msfbcvZAEnMsNBpCbKVwUi",
  "key43": "5uM1XfY87TeSYykHVRvmRkSpiw7Up5fx6v9zqyZ8Py2wQVezPNgfBaMvidfusaR1qLYTiLLRXBNzckRhqpR1vQKk",
  "key44": "2PfwamxCYEzAKWbMhcAb2LZdUnMkzX9Sr7gQFfU1yuGr1MGQxeh51HoCp79V4vzJNt7ksouz5hSkciqRy8wq788X"
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
