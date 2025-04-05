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
    "2eoLuUBuXXDBZwVgknK36X5JWHbKqTesHALRjUCeNkmYzADANmu1u9NW8aDhbSqSvAB49PzDRHGFTBHoop5o9K3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psh8s2Q3iLcSgeMDUFThnjmzCWbAvsy3KnVTZM1wf2AM6jSWFVMtzsTiFdrSSbQXLnFh1e1b1aqQJWTcP2DpQMJ",
  "key1": "5nMRPtkGBZhsaP9gbv5XYMSt5afnq8e24p1SFKJE9rNmJ8hSgdZpwiE9xfR5YbHb5y4sR7BSLo4NrpvgYNbDsMmo",
  "key2": "3ifu4VBCTU9sWqkYNsXszvCJvhbTMsi2rBCzMxK8sjUr4SzLrHq4HxQAvkyVjURqrFsAR5XGdDWvuKj5Q3xwb8gx",
  "key3": "3HBXM4zLikarUBm9pygc6UY7VBosxvnjqr5DiMCkaMsZVbiDMQ7BVGkrmjSV77wphix7LV8jUCUY99dEuCiWR4YH",
  "key4": "4rLb2uEdntieDr3rTRB6CafcXkNfCTXncDYpr6TU5d8dd65Vcg9pQ2NpKUfQwRy21p4viwien5cNuqQgEG89XvFo",
  "key5": "29RdsmMTcvmWPDEJZy5oFvh4khit3NPZ7eQ41aBjRTruJaG5C54mRLGcrH9zyokyGSjtnSrZCpHZVFQycTGh5UNa",
  "key6": "YdoU8hrdsN1jnJsBzsYp3PTJTx25AkAp2Zh7QPUY86BPcggq6gkwmtYBiLxQFMm6fQGNxqRwpvhz4WyagGdQNx7",
  "key7": "2HPwvGCS9gEDC91TKimLnjMuaUEN1hfWgPfQ9vWy8j1hBTvWsiJLpcpWnjRARRzpkpqPNns9dZKm3KsvCqnrve2d",
  "key8": "gVPtf7aPZafQMDd9W91zVeaRdNDJA5SSNLgb4WzGRRed9K9r6hactaZtGQnkZQw82okX9sGxfzdxYnQLAvximfh",
  "key9": "2wg7Hrb8ecd8e2nZppCBpJYjuEUZ1RPE1CZCnAN3Y5F5mq2xcnERb5snGb7hctmfryYzX32CsXTipYBBaSZqTNTb",
  "key10": "2f6QR3bVNZThJtRyuPBWDq2fZV7RwSV2WTgjYPcqDa8VM7cEVj61t1mB4hkfCK9UNQQ9aCFyocPb9rT1XQZSUHHM",
  "key11": "3sQRTMhMEJ9Jqh4o3ZUtvS4E3ockoGytE8fyHVvnCSDefurFxzZ7ePxbKUSrwRTSnXyQzT15hBbeBJgFgFWxU3CX",
  "key12": "3QRBXdk8DDGeK7ZZXcdsEZcrn3xdZj1hBberFmVQ6v1BXumqEoFCdUvwg2fuEZGMFVKrpq3jMmZeYjY2UqCsE6qg",
  "key13": "2BUJs8QK4iQz8FkiacLVaiUFnm5PdoL2LNxbbrhYNkjauP9neySnUs2MhfVrGAu57jBUZtXQrcSGM7WyW76Z4RDZ",
  "key14": "2rUtG8BXejFTJ8NH51EE93vX6vqTD4Tm6wAzKhYh6bDLcnMJacs6haLb8y5ZUsFQSk5XZFzoXwxGE5gWmbZWwhA9",
  "key15": "f99EW6kbTtHzmXy5cRmrp3Ewkg3iMtw45xEi64UHfpFBZjxUPDTTQw9At6LEihdDH832a7ShbAehEiiexjpvhpv",
  "key16": "4gXuBxJZG3xTnb3AXRtTPoM6YsEq24R9NL8P2vpCaw4JTzwyADFNEmDgjhqmsEJcKYkgDX1TEQjNhsbVMv3QtjS7",
  "key17": "2BxEAQFgAfkzJtfJzMbT5u4fRg1NA64Yno92d2kfiNxCwcn6AhozoD5bWz3seQksfmWKv3WQzvQeVgZwT8RpGDdG",
  "key18": "4b5owQWcdSxiP6WBo63ghbgpFoWAbjEhjtKz6mr5C3izz6yGNhY1TBDwU3hi1zai9kRKJJKk8tGxecg26NctmSFr",
  "key19": "4VmLqw1zg11MAT8XtUuDiqnHdkKpPSjX6iEqWnSsdBnbtNDZsF2L48dZCugghA24V74FtEU4KNb1DGdLL2X8A2gH",
  "key20": "6kfFKAKnAP88vAwWRcqP3Z8GXNQUF8PbC1q6dqqK1t5yN1zw9JegymTYxRqrBZJGHpYVxsAdkkEe8aFpfZee1dz",
  "key21": "3mdL3d3JD2DsKuRgKLH39W1R546S5cxkXXiGky8Kx36wezgM8Nrby9ifnx96uYAjQj8vTfFDmDLv7DhThrjxa1ef",
  "key22": "4d5yXSwayayPfYDEGKyviHLmNW17jEPv66aX5LoChDXR8Be5StdK9bz884z3B4mKNWZk4wVMaV1HoZhSp1oKogGd",
  "key23": "2VvxKrzCHqGWBsH4YeJsk7FXfvmqdCoTggr9CCk9jiVqBwZcqtRNa28znpmsUV1hBTnY6UXYctP3xNrRengqg8FC",
  "key24": "3sraPi8DbuKZ2kH6nDDLC1SdwTFRGrbQ74SQ6RnhGxrNZggpiwRFMdRBZuh7s7CtAXRBUyGEVsM14HrDykeHhVDV",
  "key25": "5c4WhCpczUZRJoged9mYYvMuQhVwBiZmcd8cthohxjFcFi9Qpxo6bZbGfSdwv7w8PJfRK8YJwsr1XGr8vomgJmdN",
  "key26": "2BFYfvCDw7qK8HedHkA1b4FNWUGMNkrzjsCnuJmNS9bmyT2QeA6FeuHRxeVCQbUcWb6xWbus5h6fEZMAAaP4dRsa",
  "key27": "5aTTAKCkrtUXpzSEZPwAdWeyR7BFyq4vDoP2hjXenGt7GrCoiBPkmVDfA1WVNb4tHmf68KW5T29ah1dWguqyNVZt",
  "key28": "2tFjkV6FU5BixP7jHj4DjDj2WUMXZepzyS3JQ7M3KJKw9YVrviAWo4rNHT5UMmto8zsQmrFkauQrBThNWUTm8L9c",
  "key29": "4ckChnCFUicw8y4DCShgdSkKd7Xdirg7TTWUASXdjy2SE7AQ7EABHNDjTtNS3Ggz7HCvmaHw4dGZGiz6pGPuCjae",
  "key30": "4q6BugBumnc7px36m46edSkBnaqfbnBoiyasiriw9o3Tn5yg3KcjJ5DWP9bYBQYtQPrYG7PLPZqW9ewYcjmGuWh3",
  "key31": "5Cj9aVMvvaHj5sgG2iAbrpTixJKvq84VeUHHje5DYDYRtmJqRNybcs9XyVXBxziRKx1bzRCBrVHXyZDNsCxaW1qc",
  "key32": "2cDfdxy1DmHv5nVgUza6dVqF9UWSobc3QETXf3uknq9YRGHs7b2QoqymKZmqqT5ur7gTZk9HxDNbv72wRER1ZLBj",
  "key33": "2PNiw4pEyDVGtEueJLxVKHBaQfkJuEEKy11QC97nAVqMAjzuFpAWW5Qbu4JfBeryoGZy2d6nh1MmUaE367uB4PSA",
  "key34": "3wBAMPyiWp5Yt2HqK75Y4tuQVyhxJVmU3vZ2yc6G8TQedaLUAAAKiCXUx1huXg3skvKeBu6Qeh6qc12f1AGy4r7x",
  "key35": "3gTT1ES5jkbs8Qwc2Luof33Jf1PVGkJmtymK2xMVGwfRUa9mWG1g9Rj5Yh8FLvno8KAFx1idDqN3DSyN2YvUUzuC",
  "key36": "muH5dJiouSKPuMjP734TXrkDzBzNi1N5kgjjZYcN79CyBCLfMexe12PvP3P7y7178n11rshgTiKuH7Q85ffKqAc",
  "key37": "4KLqT9HQSVeCBZe248khAb1X8UGPXXPFfHdcz8YubCn1we3BXBrbDnm6Bae3S1FKMz8PRVUbSThYEhstHBPuBfVZ",
  "key38": "42RUu784kNqf6xKortsVNUP6LuUCanXpas5Dt65GeRhpcFaphPKDX9gxEPTdPAnhEfAhK5EqUJJuwWiLGRv1CDHs",
  "key39": "4c3oHaKevneXCphzGBXxThdAdd9oCJrff1p7qJUpMkuQ18VeEEDyLrddz3aQB8Ssyb6p6E5x7FV9PfKXewfthwLc",
  "key40": "2WEFDFoXWLFoKsoJNVgoKfJuus1PN6sEBeAMkeW6inxVKPtkN1HFjEX7pdRhkKTmXeSrrbKZMMEVQpvhF6UL5kVp",
  "key41": "43Hq4toqJ6deQRfJudSHqr1oALBNWzFnjCgwgdL94arYqS3kiveMWMoxEHE9TBPdVyM9JNFZSY3xuuJd2UAFBcN3",
  "key42": "yafxYaLKnak4cwugU24bKjNSzjEaBqqQWagFN8N5GM9igdfriwWx5DeMns1YwzAazKB6ideY1hW74aDHYfKFkCh",
  "key43": "2gKpmqkFKiQEX1MgmdAdf9F6664ZVTVqNPhpF15snGHJC5DFFkBfvybVTByj3L14C72vcd5CYAAgijbfC3e8gzC5",
  "key44": "4wGxT9tMyXjaFr7zhSJuTqdZbyVQWhhktopWnjMGoCjEdCfZy9HuxcuZrABV3ino5FcNnNBTmwBuQScPTD1FXcxA",
  "key45": "u2c8h2kHxdG9HSHo1GmkkkDzfUj28rgv9hxDxx6Ce3LcHwkGWbkqy9GhNLRGYmN5FLx5BnV22qMhf5cpmSN51dd",
  "key46": "2CGYDYgW3Rbppcz2D1LhuoRydJbBSwGMxzNLkt2KVYvByaZjWnZ19Kpf4CtG9PgcrhGGKyP7SFKAboBXaxdLcVvy",
  "key47": "4Sv4fZKPbRyH5TNZHD1nUmVkMe8JH2uVcGwFvTV2NAP1GZnqPpyvvnpTiBvS52Mr3iWi7NiWW5U7jj5xVfHwuqFA"
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
