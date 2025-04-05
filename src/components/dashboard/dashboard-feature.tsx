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
    "54anmRYmdYUEXy1vLAsqHziUXusk3fMPYb6duhmuPcKvTRMs9MiS5ewiUA9s1YzJv826npY8Jyt3FjEDG1GgKAGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29d8vsTPjDLAzQBktuVasdmSDV9prpzVocTkJo4c2ugSW9GAL1GVeCoqmf19ouRkrDjDX58Wa59mo1vDVntUC4U4",
  "key1": "5kz7xKeEYXNGDL1mXAMCQWyysRysgpEg1zVkCf2k4DFnMESiEjKWdcniVJdqa7LnseTLzxdtspUGZsHbAKHHvuPG",
  "key2": "4Sn9pngiqGMQDajogVjgt5LNmLvfHDaXFgYymsbFPd8PRNXq1QwhqDMz4J6NTBUUuAfcJUQtUxaSteczpR1ruAcQ",
  "key3": "3sbVaVwxpubdLewmTMXLLeduaMudtp4ojYuDdgFXkEf7Eman312EuX9Nb2a5RhnzCHH5Lzy6it5cadCyvjRfWogc",
  "key4": "32K2fG3Ht1R5PpKhRKShM2SRrKMmL2f2U9rY6CPPhmP9avLCyGBEWtcUgam9ixaQAXNbECXhShAvfyJ5czkXwedN",
  "key5": "1dM1ktNr8CJdy41FMN4JTkYAmDwSxhuLgtZtaVkZgQMSKB6yHbuyZwkLZZx39k6ZnksswzXXGm5qq1UgqezLb3j",
  "key6": "2ScGoVbKTGva8S45N8SjEV2iXEDH3dvjEqscV2nLfwmsybhbESGw5j3m3KVgaMX7wNrCDwPEwX4RRffCAb4RJAg6",
  "key7": "xgAnPyKHLHVZKQKZmgu7SSRkdVcq7Vq8rQxsBzAjgJg5EPk1LkhRXTZKkSM7KdXqYHYJczBhCiqnG1SBkvCQjqj",
  "key8": "31sdxNNXtFsqCJyPs96dCrGd576UfgmENv9S9ospenwjw7GVMM9fYE8EWnEy8SzDsumoTiSPiKLEe5tXGE5z3Wzw",
  "key9": "39StJhPNsSjoe35f7khrjNnmSe4F2s4qvFTt4oCAb6tNGMpatZoED4Ni15zmDbvtJcXdeoD8rVFMQ4hKSYnVZGtj",
  "key10": "VSWPhRJfNpmMxTtaQcTjWA4P5QumSjCiX31qkpCQnAc11GyRLbb3iSGF1ntjXKCX2vTusbebpk5LXhXMjDz7s58",
  "key11": "2SNNt7BF9oCmPioBjB2eBrsF5yLUoYjoAMRwi8ukzQwqSK1ZKbHQ4YH4GCcHHC7efdLvUeWfW9WTWUhmf6BnjJkN",
  "key12": "FwbszcLuNVA2zBrTN8Nb13svCB7gX8omeiaPv6CGt4CruRvS6M6T2KWijoXima6YcmCzQax25CdfqgD4KFrcgbu",
  "key13": "Vv7NjEcWQo1KbmdwjuGivbaT5fiuykVCLRY4ZPcdoQM78nt9p3RKCQ99G5vJnUB5FCRmGCjzXR8VWDbh5yJA1u4",
  "key14": "5AYMDebFqdsvDGnuR52Xx4gdadaf3b5jb2TWEbbXpkBNL1rjL7ymMN7Rsfr8E7HYfMn6q9C8iGuyUjW7TWLf8fKy",
  "key15": "gCUo7i8gtSLJw45khhATfivB9EXHCAAYYGiSyyjEDmrJJxkL4aymdioLSCScdUR4CsGcVKBA34KT5ys6HnUw8ie",
  "key16": "4SQYXkW3F36bCMNhDEjtAY7ev9Z3Eg3dqJJ2hrCeMa9QCCFrzAPuiX8e7CdhL1uszQsB43DrupkS3sAhEv2iB1uV",
  "key17": "3miLqrYzYYAcYN1d4A7x4WKeik3rPh2RXNvhwMETZtoEDhwatVRvimgnxYZ3PADRbax3FxwXa7rS2afuva1V5v8i",
  "key18": "UiXWWegLTzkxqEaEPHCJvEG1EURLXD4feJDhVnsh5Y365w34sbPQxTWokJEkC5ufcqGSvrg4novJfXMka3sAMEz",
  "key19": "5XsCkwkZQb2aBY5tLNV2gU7FcVLhohWQVtCm7rwTcEDZTwFaPL57wLSBmGspToCUosvDxjBFvJVtxTb3PvrZjVNs",
  "key20": "4wVBD1UB9gpqfD3Ew9KysyVE5gqVACN2KYKaEgsZc4zr2u4yEwZpbuPXxwMVsVJbRMZSxDpTJKkEKMnudYUtggDm",
  "key21": "43xn1ekAyARzrnejgQFHZfW2QTmD1BzYpqnyQhFt74ykH2n4MnwZWPUCzgTj77c9x3gcZ3MAz132KDKxBAduL4Bk",
  "key22": "43gfRmTv4uMpfjDGBCdx3gjMDE5QJTNznHbWUjLyGmYQberhYMUi2VYsUUxN6AX6JWDjdUkgrDTTXG4UuhNwNmfW",
  "key23": "3C7Bq4fsKJdqmuYdzo4XzHK8i2yAmyk2iPGRtyQ55P6hMQWkcWZzH3KtvMARmdFJghWpnymJgLRxjwva4PDXSyjs",
  "key24": "5TBTZWNsXHE1tnw6HL687Py2ammSA42WcnD6sTPJLg4tnioNfrviY1uyVHPNEYeDEnfUZrtiMqZupsEZTFMQV5h6",
  "key25": "4SWbRHhpPBFNtFRWGRomkT56aZnXmDhe9CTxLmW9YuEfYNLM1V9n2ivRmqGegYu8XfbV6u9YsQbpJvKX3hHfzKAy",
  "key26": "3y5kM9cc14p5UBqkY3ijZz4FdxJU3NK5GUtCUE5LfmmKVcHNHazGWtJfubJpZWufLvyf4QF8gzREXzwzoYn5gb3w",
  "key27": "3V3X4QFyKtsdweZVqtkPwT6FnrL72NEffJFXobXf19d2g334XQEPSobGxSJNmG6VkTByRrTUoQPzV5u76g9Bdfkn",
  "key28": "24LMVDD1ARK1us6Fv92EEyPCvTZPrvgWEbgwJCSmbedBEjfcAPKYVsarPCQThyyG4ARjgUWYaXAoSFcbpt9PYDBA",
  "key29": "3yK4wwQPJB82kStJDPN4kftomv4vh3VuHKcXhu3mhbKAvjwGjri4geLTzd49TC3pSHaWGG2KYrC68yc26pNYqh4n",
  "key30": "5PKEgkEErcQjYqd56u7eoMe6hjRnRi8AFxZWPqXA9spzozA8zvYtiv5h7ayFHhTk9hjxnDG5GsQyAJnLmuzPsfk7",
  "key31": "mk7q1Bxp2b3DdVmvSuJxFZi95FQgrfeywrTFhvcvAFNLje8ibrDMxmCvCsftedQDnW8cr25wJBMsJ6jh2pMXpkk",
  "key32": "4wUXoj2oNgKJxaXHD4W6TZKDrzEMP1p3YKNvbXEX15jwc3MT5vzejYwf3iHg6LGjEXfwEjUy1CxWa7ZXQRbSZsiR",
  "key33": "eqVT6rci4uVsawNzvXdGYMcAop4bTm18XKoVhy4MaVMmeeV7fCCaM3bFLaPp6xJ4tFS3HmCogpjrUzhpdXnjEAu",
  "key34": "3AJbzkVxYUpAjMB2mhE2BVNzq9PQWLha6Dnhya8uuSPZvfZvSZgwFHqpDS9o3Q7ngv7AgVr3KMiph5xhq5iqekNP",
  "key35": "3EUNYh55TEnwQXY8nRc4jh5TGSEQBA9iKs6JRyN8gppw48SJt9xLJxBuNvhx4zYBDv8G81vcr4JvSvQ9oXG8TNGh",
  "key36": "2dG3YBPwEhJ978VWK4cbDRKJBRARRydzp3DT98KzSrFLGAXcaF7NkcXqU15T4TrxPidH2W6QJ7xpFkARcQBwJJiD",
  "key37": "D5uUNz1wMFykM8KTcJgjkeTKMJww7xRnJyuWWxcmdMt4jiZ3d7fYVXT7E54WLfNv3EwMcPVHPej418sHgLCrcBP",
  "key38": "3bMLk5o92w1WXgf8CWAYat8FcvoK5rVnENCKsKDrk1N3cmZhN7cPjyqsssYfBWCi73uNX86TQctdtTiLWSbRLxp3",
  "key39": "4FBjThZJUpU95mpRfk9CHf49jFepZWN7yx1HaVE5Qc3DT4LkSFj9uYfimXzFZ1KPfz9511DJxEhJ23c28Vgrh8GN",
  "key40": "UbjEaGUtRsTYKik3aNS1b3RRMc7wZ2QHhSXqhaSBwEwr5RJKgP9yhmNbPAYwDWGHPauNx4dAwBJn32xo1gTAeSw",
  "key41": "3rakh22GASh8Po1PwF5nr4oCx415MiqWLdriBDpBcteH3LHWQbXKaYXyZo1XabmfgtGnrY7FS8yGEesNydLBvK5o",
  "key42": "21cZDwx2Wy85jtxGxtGTngkbr8WbBaKwEQSVwXdrfGx6qZPZsj4LQdaGYWNtT3bmmxkjnYPTBzkatf6tmnKQvgfj",
  "key43": "4XrfNeRqXgPksWivdZDnPG3v6iHJ8PFPti5UxWw8UNdayC3UudtEtKX1psBh7KxuTRMh3WLRCApPKP52ViRebFWD",
  "key44": "5ygaRLrsbi9E6aSDqQH1H1jwmKEZACErrXf4TdR4dMp9JdZtUcmYxJt8KUGZK1shYC355FfoGJMEb7MUG5Lf9U6k",
  "key45": "27MD5Pca4i9bTBXJzgLMsUf6benSqcbQ9DS2Bpm98P6mjp1i4QiuF8vmrukdM5iEEnq917iycdtY9fxEreXQdfdX"
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
