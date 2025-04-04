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
    "sJ1avqvLhdkAjiNeyAtr8w3i88v7WvSFzbRYTHnhEyrExtRVLCyEbc6coyLtJUZe7XziWsEXmchtCD2mCUEshDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pJ3R7a5QMbKQAhrxJpMPhj6fd7EZiTh8C2kys1yEvpiJc1wHrPLBxo58v3Vo9h7jZHY267c7bomLewkkz4qXGKC",
  "key1": "5L5NqLNXR4j71EsjWkmGLVcKsVgWraTRf61wUpEvzp6EA61poG1zpAVdB9DiHLjRzmjiHwPztkhzu69KR8tyPZKP",
  "key2": "2fWLNNGdj8QtNE4UkzhticfcEqefTSoypvMPi5oT3HCjpTSBTTAjPJUsew1zZ3b93bb8MdMrpQ69zDaEKf4moT4B",
  "key3": "66DYTamKWgZdyMvCMwKyjJ4rZdMP8vomSt3DLBkh2ZKbsTqng6kGYxivDudCVacNHAD7TbHzsBupWvaijgsXnsK3",
  "key4": "34aogWpih28HcvTFf5L9JaR1GkdvnZnxZCCUNBKCX4U2dhTCFu9kyuEC73eNxFYrV4tYdT2v2inqhUjh7gJ2DJKQ",
  "key5": "3BDMXWzQyXnPbbM1afpTQpSN1eBpgEw6QuU4sYYJyYFhnyDNYmFNMLRmJdnt3snuP7BT5KFXDYxv4H8b2ERaHptF",
  "key6": "nwiVdeL9HR3QTBvpQCGrr4WQXnQMaewH3NFR1B4HNESnhr9JK7XwyGqW57wSMyKeZtY6DR5SX61seiti56aZCE2",
  "key7": "4XBJxWAqJtAWmc9JSx1F8sZiptTWyFT4xzu8QPFB1zaXm3PDjxHP23HbYfjoXGs9YKMJ9386V8nVZLyLs5AkHCCA",
  "key8": "31DVNPXeZjJPfVz1Mq1uvq9K9MnWJBSkKR7CT5VDMo47Hw4AXKPZRMoBVRAdKCFBER9SGpR384S7e6bzGwUW5Byg",
  "key9": "5nPfzQ5fJbe5qmZjcBXGChn3Q6GoUNLVuvRsQb78CdKxHGChWu87ior22gigVGx66fVsQ6wAbkJ2DHJaVkA6p5Ao",
  "key10": "5G6VGzXyDmQGpq14Yph7xkqSbjPWymnk6o1TMDaQ1yMGBR6DdwtJaLVQRfcD6tnVQNaut2sJ751b41WxBdzXGRt7",
  "key11": "4WMkpJw1YAJ9QXZgRq1FGgULhDFyatjUnHHvfu9EBKugBPt57Rg3XAZe56MqgaNaxQqa6429fC8D3h7J7rFGQqEv",
  "key12": "5eFqRLjiVS2sfgXqaWxhurthnYdMgzfSE86VJv2Tt1VLy5yW57yY8MtWSjwD5xxK9RMeG5NqQbfXviqN9aAs2VA7",
  "key13": "2vYayTz5johJ4yogRAyWrUnkWFU4g6REKagj1mPUrdmag6KrwcLDz5xHp43qgePoSVboekaScUrSQWx4Z66eUrao",
  "key14": "2JEFS6DRWFw8Aq9HJH13fphXkK3Tuv9fASfQsUXbWFzqsqFtK8KDEiXAYq8CaQ8Zsfj5TKLfUKoCU9ucgkRfm7vo",
  "key15": "4z1JoVv1Y4kyd6acfcDypoQjzQBEBv9VmGoMk6uurRBbzgWfvZ3hbCE48L1rLjvq9tFP8ZQLnwLCTRrwSJs1BTye",
  "key16": "4K2aadCfpCdy3gzfvNwvFUteKwPAFXnEnR2FbQWVuGiJyytAvHGuwzACnu1oYYMfKqeUTs5QVmgmb5u4S9nGRdPb",
  "key17": "25ycdUSe7hQEyWTbVFWRBWGeoSMWpFbXvFJVCMV9kD1DiiHjV1Lf3XzWvsCDYDUz6aZz4LyxAYUfmyCdmFabpvB8",
  "key18": "3hM8sGzZvTRZ7PN126p5x7SCE91KUnmnSHUGqMtXX5xkTVKtuMdVKEj1re1s6Nrxhyud6Af6tHYB3dJKv349ktJq",
  "key19": "5MiiFzJZgMgtbafPf1RDzyK782frAiJUrKwHBGzjuJ3CmTjQFmrXWqtAk1bZPVVx5q2EeSQGGt3QMgC8KAaMKLzh",
  "key20": "5GAy2WRCpTjnqQXJWg8uaZaT7SBXj34cDAMaeaxCPgwipMq39xyzJFsQ6bE35akMhB5wSxV2j5Cee3m4sc9Zirxm",
  "key21": "4TfBuhRmNqXxTUS3JdnTEVcoivPpHX75WRptxLHwaYsJ9eyg9FbPJDgkNn9KyFrKF2AThAUSu98rc3NjkPRxsjnU",
  "key22": "4mXB3sszdDxHjXJREUqmRbEGXvhJis2dLtHoKzzNUEdctajPdPwkvyu7QqKcApvLP7v4jzLmJi2tyxtguPACJYLR",
  "key23": "5c7rwPA8tUckwz9gHf1TyB1k1mpWezDXYxPeou4bE5JnYPXG8JDLjxwgPH3iATaucrKEMJNwW5BUd4zbhVUQr4Qb",
  "key24": "VvVnr3NcNJaU55acxWsNVXT4hgfYSFrQLJvs4FcXCgNCeDrP3M9UHsAsETSgpUrTqGEjsn4Rr197bs8uv8vfGKU",
  "key25": "2Wfn9WSmY4fL9JTVfAyVdRXVr2yaXFihxeqZjrfPBtCEoGvBb6mVhY5jUg3oWws8QrJ3EZXDWEFCv1ZvnoYPkFrM",
  "key26": "5jKTz16Mi2Gdvy3KNSF2uZPkkZh3H1px46t79pLh4VDzkt1d4G78nojvcgom21LgmnJp1eqMVbRkF6d8aB7oeEjN",
  "key27": "8fawqoDcqJYe2LkU4VbAEXVH7K1z2gmi9HQN5rKe756RWgLd4UxWJV9Ly9J61Nef1QGFhknqJpYuazAcqP5Ywmm",
  "key28": "5URUpk8tifp3GufPtsZXigxWL1dgrqiZv6nGnWMmXaCkJmAaAtRjtbFkEtp6QkWQhgsnea6Dxk4JNnu3b52eQccd",
  "key29": "SZFo6ct9i9G92ZM1n96fQYqajg5bu3tbCcUscHaPkS6g9nD2KydPXYYrXptAFaeQzYZNF3yJ2CYquhbkHkkomHh",
  "key30": "4bkWzXwKw3gCrKL7PmpEo2TyxiWZu7G21kynMRWWtAyyZnCAyZFAEXcgkD2iczVMdQwZajZXZfMbsqyH9cNeYAFe",
  "key31": "jYF8jDWKNkADGsKtd1rDn8aocJkdpGBSdkV6ZTDfSC7guQ4uc2zgHR2afynxwmUEfa8R23itykn5qJmLhcrVRHG",
  "key32": "4WcYEyXNcqraWkZxidyA1JaPVj5MzcZMDeP8JnZNq9yKVojTnK9QeiHftJbvC6kKLRWj59FkrL35yUoAHhMSBUMn"
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
