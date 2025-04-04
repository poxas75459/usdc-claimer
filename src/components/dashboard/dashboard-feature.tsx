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
    "4YYGsNAYsr3yMtLWLYiifZZFfj6eCiahSi6mN4cV2WrENWhtVCmTtd5KfAn2Q4j4uiUTJ9Dx6vLepBgPydtCyAFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbauEeo8JZJb8ra9ePtM3q7pNnyyVfrJME6MqP6RtrW1zNSnK6GfCKFtYFzkTTjZ6UDJP587wMCBjfU9A93U4R2",
  "key1": "2jcPAe6QVtC4HWhfGwqbZwU9erv9jqA8hCogtKNAmHaugqNgG7aQeqLbfqEVyYCP5h1yVugWTvUbedBmW39JTr1w",
  "key2": "2tEfxkNQsRNbk5W4FTpE9uUwCruYZQ87HuSwZx852oA9EaD1JuSrabxPiEuNuVXJsz8EKNpxWxJoVsxyCSTcqP6Y",
  "key3": "kft7VA1YfwPcxPmYjZunrzzrTcZWcbAJjiiJQB4pv26WMHLEUFH5fdVPVEv8uJippn97MoihkBePpxiVQQ475tp",
  "key4": "3F5NqxHSY1PdDXixDpQvKm6EK5UMfT5jgnWWChqaErgSnnhTJvnbL5ZjQ9av8QTHWVA37i3HpiFu9PoxEYK2P6yi",
  "key5": "4e7BqadLsNe9TFwELvA2z8jSZx2oUqUtzTeW7BGaoQTGdG7wfLpwZCdvKKYdHi7sAbpuLaQnFMdYJ2EaQqxVYivW",
  "key6": "4fBJjfKo1VFrBE4XzSZABZYuSyQv7G3ru5ZM9cLH5GGYgqYdKRjMefviwjK5wzA3UJRWezPYutGVxLuoVkYNXbRh",
  "key7": "58XaSve4z4qkzwNpFcX4Zpgs7PXmqeCu62eH9sqQAQWZP3H48uFuVkV5CDCFaJBvtYL5oim729SWoKc4MotxbwUk",
  "key8": "4tpE53XMuZiojGe1AtztRGKYn8Yop9WGpk5mMxkfxqztqSvYwU7oJ7LRHfatRj7gxi2BFeW36tesYpVwoibThvmb",
  "key9": "5Zb6UHawyR21jJWnH8CvTdeY6HqkPb79a9yxNdUdX4kN7abtKGmTwZ2Xqyd6zHhGm5V56q6ssqQbT6Fi4zVeZeyh",
  "key10": "3Gff8P8GtGVdzF19Dx6zA9KoX4EJhnLboxrKV436Ba3mGZ3ZnegGL579KQ4HwCQUhKMuzUBRKRHgho5SMUAntEEd",
  "key11": "5YwanTMQXjXjY5TXacVcHAV7PwDbt5huEdYWjo1B4LmBaZiDB6GM7F3RcGbVzrdL4TyzjG3dCsM2ibK1swPLuCFH",
  "key12": "4Zsbo4rQsKG26BmBU5UxnYSwwc6a9dwhbCez4B1w9u1UHZeu58exniAKdb8Sf4sv3QUAmSfnTdr7oxZ4in1z9stz",
  "key13": "KF4iKMuTgrA7666rGme7ERr1X3W5oyux6MCovytwVVdQrvdikGK3ZhJ7XsZ7Zv8u4S68hHBuyJ1VYsUiWgfoNbJ",
  "key14": "dc4n1UyMdSAn7vDfgfnQkas2j974y7uWsQ4UxBT9MhHSNk9Xd7kSzMAB1XXMJUSYqx7UAqXx8up8mm5oNFGFL8U",
  "key15": "3QVsmxKp7kbG8f1FNoHgWT9mSrotzakt8jk1zkJDHSCN6AigeftBkrPzUCEXnvrAUgCy587qX3gWQ86a4hrGBbhF",
  "key16": "56x35Ta3fvxJYqsmUn13jpsrAscf46G8UzL3TbtRrL73JZoD6ncFHmsG4tsPFWjTPNcPWBuNPaAUVf3qe13ntahK",
  "key17": "66B5k9VofJSq5eacHZwvG7nKiTkCBEyhaSBfjhJLffugZDfZ3yEMp4xkcoXuXqEsDGCfJJorLBYQkCPfy1zYrnP3",
  "key18": "354y21QY3zbMt6BiVGFA14aw29NQQxw2Dr3APV57hHbd7bZCnT7Dm4RQWyr3ppZbSGV5t1uiZ8ZhuCSg7sPjR4eq",
  "key19": "391x9NNcyqUWXwK4oxsBZvZGwgmPjhyoPGkgMYXstTY6a3wAV5tiYksba7pfwgVfjFqVjxz5PtiWmPMQsrc399Cs",
  "key20": "5QDhaKrqbFYGBUjqox2twe4t1c7Sb6NqDW2tTXnoSjPsxQFU3AZSWY8xxRXN3tbeqTmVznmexBgnCgo1VcXK1Efw",
  "key21": "3ofRwsbTfHtiB3ezCxJy958u9oTEjqATTTPqfcpWQEww2oex95iRMaAZa4YCAVJKiGQFcQkhe2MtRadh2S5oPtCk",
  "key22": "y9cRFwgECzFDwXkHVvherUUQXunh6LDrfnYwdKjmmuhfgaNpfkP46xdxeG3PPSUdRfYSkehenkjFWAecRCsAE35",
  "key23": "33L9Q1PKLapskX9PqN3LbtNF7uf6ToeoBdiaW5eWNbZhaDCvuBm4EkVm6zo61KFjNZyBb5sY7JYoJPABevHubtf2",
  "key24": "3fvrDkYZdMo5zSaQPLG1yJciyF5LVLoA76PRb6CHsZrbWppv4tKTTqcCB8sNPHWxsscpFoNnw8rcN7dYcSzxTuyA",
  "key25": "2zofiS7WHRSdsC2kk4vHouAFZHyng4P3nqpumsbnzGxpP5VPn18SL91JtQbKMaganExP3CABCVksgCjiEj8htqfp",
  "key26": "31XWhCWuAYfRm28eGc3kpz9UAAzXi26owge6UEi23QNFXsvBTaKbHG7LUJXsG4ZAZNvUT9b1jy2NbCD8rFnWWKaP",
  "key27": "3StY5mSyRDv5e5LLFgHAqgxcVdNwRnyFCYJgLVwzCWgWHBfP7TM5KXSt41wvPCbz9tawzRty46hnevYx5ebtE11u",
  "key28": "3oY78Wczb3JjCCAqm4gRyQ6TDgoMY3tdctVLqWJ459Cvn1S2r6FPTCChnEp7sBHYAa9ufWKpSRrf6Us7PzCLjark",
  "key29": "5S8X3qNQsXpy4B51GmmTqNXP8LWCSg9eDATHXScTACChAvoZpTtWtkVZVh1CuVBpx8C2twYUWFHSXrbQ2hi6h8xN",
  "key30": "26ia3HaPhSntimphKJm5ffrnkjHAgbFDKszM8MCeQ5HF6ZhxZK8X9eprVjJhTbBkDbpBgHdnRN2TorPMhaS6uJJa",
  "key31": "4pRqmwB759iVa2ApdXc6cQ5TUnfpCjNXn8sAWgFVnDehjrBXELoVEhg5YNNZszGT86mCVmr6uFk9sKB8qF7N2fNi",
  "key32": "5DZetEmnYBA88DLjSnog8BwvNEeo5KWKEkqVhK2t4rSjZ9zQDvYetxNtibhFW8UtrRj89oPPRYQRGJDVUYERS2Ga",
  "key33": "3CwGf4DUksokp7rJpgzAvASCKsug7YjGABLP7t3WTRjHyDxFyt88HzLCr5XPUTNh3nZVaEGdzMD5RaPWrXKXcpjZ",
  "key34": "2KLAPGvuDAs2zs7gGCjcJqiywMucy4FMyCtt9oeWs9EJqKxHhfuRAyN4u5CSKtWYMTeSxJQK3NGcAWZQozuYCvuS",
  "key35": "SpCxo22DKRA1zCCFrtNAKyqYSKYD7WwS8sGiCy86ZaSgmSCRpDpbDSFeccA1mavhfd3wib86W9R6cWiLkJ9SmQi",
  "key36": "6671YQRarcXVSU3Q9eHMnxXEo1TRyD1fkvN415sHhm8ST3nNsuuvSS1TXi73jDyDdSERE3vE2Jd9KqBucBVHdFES",
  "key37": "4GqF4zve6f4kVU5sR5nSTckEkVakxtHwpMRVU2q7XPuz2TNuTGbGjBY2bzeBcbvRwKi9pJUrFGJ5Biyz5y7qnySD",
  "key38": "2HbM3kJgGQMTEAVE4zuGDdW3dRcrW6wjpHFZpqKqXt81aKU1X3xSFQuJHrqqkbknJy35MMsFuBcpCo8cS4Gp9qRR",
  "key39": "4yui5QECrbV9m2oRBJLP4ex7KNjfKmEn7vbztJT9fSLE9zdwDbZCG1e5qvj3LDiGhN76amzkbQ735Uv4W8EhTNpw",
  "key40": "4hTEWhv9odKzdRKmeQUTEo2ugk1pHwKpAdE5CNqWby6s4i9W47s74DutiwMx1ZmN2hFhZTwAAHWNpt1LYBfV9XMj",
  "key41": "63X62KXanNBoGbpz5DKPngHgVBAT2xLkzds4Q1tkG9iBwMQHtPptDYaQXXrgxzRXvANtCnfrQjni48FPRpy1G2kN",
  "key42": "2W2u6piRjK5YNWaTsckWZG7Mc6fHq4ZyBQSVu8KMJbficVRhtdkVBApVPzvBUHQeB3ZN4q2UXgCC1Hf6DeUp5iAV"
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
