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
    "2HvmCTsKUDdFdt6cufpq8WbhuhBztYJh4Cosn8Gfh9j3ibKtb8aDncVdksDZb8YpKGP8pXG7NEvLKdMVUPRBwqov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e72gt3abK6wNA2kyuXfWZSwsW5qwDFti6yGNu7QzXwNAYjAPqFrhPwDVV8dPy512huH9Sin57X3W74pQhC3Ak2S",
  "key1": "2srczs75k4fNsxHm8qYLEZ6ESjgM7mbbCXFyNXk7uDB42Mat6r3929cjw6Uw97zSh4BKhAjqvybjacSVX8xKNUbj",
  "key2": "2vZbEgSBy6CpYu5Cooe5S4LLLKSBj6Qmu8KgqH2brqc3BVpcjv4SWEkJCpGqsE243ppa88xF7YPh4f7VugDj3V15",
  "key3": "5mHgyzQV7smmENQQGXcqnbaWzL4w9j6UzaNce9oaGio9AD4kdAnXPZfdtqyVneWCkNAUrwrRR7A6TXvjX5qEKzw",
  "key4": "2DrmGw4LtBdm5nWWvCb6H7HvNtmxVoDdfuMrdwfcMhxEYb8i3K1VUj4EoCEM7SesB7Sy4uKmFufEUqRSiJ3BtKbj",
  "key5": "3mfUVRn9eFSC7Mh5Kz7HJqRPznPdAzoLUJwX8fmLLW7LfKdvxtPYjGvduRwgbda2Agiyz4qKG1UG8W7bo2D9MDqa",
  "key6": "5XDxSuXP3geBVGU7nyXQwjHvgzCjnkThnRyw2MyigrA9JcbhoiAQnbmSwB1wPqq12N42PRQ1YzJbUNwrENJu35U7",
  "key7": "2nsru43B5Xir2WonS1jviAeMSb5GvtGUsXgX2etfS61EoQ41j1LCEfYVtuaoCZwuBdWL7QF2sxPE5q7tHEa8Ni11",
  "key8": "361F811KFYt57x9kEDkkDmFiryzhbM213HRVeqZMZvaGdSjZdTGFw2RDuDLc1PsF9h4GCKxv15tRNQWaBu89Yzpn",
  "key9": "48LExbHvRW22J1JRwb8iCGEfYosoPkC1TfBYnU9gCLSBrG5CWe5XfATLaWCeWLoMYBwWuyXUY5DbWycpThbSX92v",
  "key10": "66yXDYcXqz4TxMwiPZBhdpyQCVixSBim97TS5bWeMeeJD83dAEjkXJXsmy1feggi3DkyFMGau74KadJ6ZjL8ri6e",
  "key11": "3BTL4rrXt7z4RBzCq7dNu9xy8DB47pUBf2MWmeSnc6KWRJsbSn8jPEhXvxFhWCVa1vCntmmkiARjNZQSjcerq7L1",
  "key12": "2MNnBPnW67WV7nMh6ztBe7amgn5desEzogzbdjezQxUCgCXctnfa8SaFGCcX5Ar1iHrYQQs6MmARB6PNhiAdZr6i",
  "key13": "3RFkZipe7qeARSbaaEnBCSsNwWzhBp4xNMDYH6JuXm4zcmXSqxRaGgUsoc9paTCx8qFkF9bedUhr4udHaYamc9E4",
  "key14": "3T7NjNAb4FMnEhiQ3mxVG88XZnQvYTEg2gRgNHrjQPkvgt8npkAfVEJP56UANpciFLyL9sZr1e3Qkdzq7ysxEChi",
  "key15": "4bZo6focR5Ra7o2jhinno5eC9Nj3FMF9Q83qJxULz4m2qrXTTxxMSrafWaRMqNCAjP3sWtAsx9kRe9eN8jo2SUSF",
  "key16": "4QxjDjXyUnzfJo9uFqfyTt57kPumckPcBgL5MvyQEd3GQcBxR9w3cccwVmY4LQ8QDk4eeoifDJJD8a71JnNcRoMS",
  "key17": "42PC1KNWAG6ydSCngYAwJLeLAtxY8X7Pz9BWgLCUsqMgTU5wNKRr7uNGvorR7dQjAriJbXmfX8f9DcSzwuY7W28o",
  "key18": "4uEKLmhCkQYJiGr3QB6b7cb6nYdro6Z2wAAHLTyvDinWuFKh4Nb2YKedKG7xAVCA3EtE5mHJ7ACjgX9rnxiDcRWu",
  "key19": "3z8Avop46TP754wgFoRH4AkVfUjftBo3i8vQfeU2scP381iVaPSRRbPM4ozDAUahJ51TQq14TvTKDJ4dn8n9nPvz",
  "key20": "5SaQ2GL38wXes9PWwuMVbeqpGtzagV61BC7zuBaD48Vf2H5hD8hFHBt66B8cgYMMR9Mc6JPYApEarbxKACKTeqi7",
  "key21": "W6J7HM3CMbYAnwQywwh95ozjXdVu8M5CJ6ZBdKE8bwswdj8yPEmZ74ySDo74hkAzZVtLiCeSUmuxNzjg32bmwXD",
  "key22": "5q4JTuCinokyf5hSbdkX3qugQrfsZX3zbcQXMYND2s48qD2fXxw6EoEGZmiBJdNLcueJUT8n6462GYH3wj24YZpJ",
  "key23": "3oQUPZmUv54n97MBjLFpMJPd1U2vHE56YvT9zi3ABe6bUZxYT9n9md9oUWpka5NdQmqYHAnRvXsGLSkkwcXdVBpn",
  "key24": "9GXdFe1kZvuuBatZFmWCyQrMB6bEqhZf8VSX77R7vNxBTUeKcVipwucFXt4CQBeE2K634bTjifL1rtrY87PzCie",
  "key25": "udgkYEyR2c6FBPT54fKRtxEx1zkdk8wuNkg6HYeUEz9v1Q6AozyNdacqNLypY4bAuWrTXU5uW8DtVK3B96qDmRi",
  "key26": "2n2ivXRgeE99KcQh3rt5vijVvRQZLFqWHL5e5kH2GPW7wxbpYy5K3kp1DpzTmoh5dNkzELFdV7h5Th1Gf8iV9rV3",
  "key27": "bqiNqj65WcuLwYD1PPVqY7hVgyKJHSYHjKkHSHoMCN7cGcX6Nqfn8FQTxNJQHEysKZacSEFDswXRphoFE8G1WSH",
  "key28": "3bK32Ve4iZj8SHFjaQWfgcTpWKWP9XLLXdscEdK3SCHPhNztLNrWqvADAW992X4Z6uBirSPCSrqseKG7NkDWdcmL",
  "key29": "5CsgVRYoe1STRVdotZkQwA3c1TPG5YQY5bHY1MJiUQQ8GdBsLLZZFLUDWtiR8agcS84Nda5Bt1jMYk9eDqC4GGwr",
  "key30": "4AXY4TSZUhiEizqCk4bwf9DFsfKv9RbV6E8MjySkCg71drPPrGmcEQqunvhe8owVxFQH2HvzwjRQPw6CDtkFxqe6",
  "key31": "bSMqM6zPFEdoTK1BTftXnemM2f27MkDAmtSSyTZuXB6de9qZtSuu8vmQjkXxWCHWqpssfCKKa8iNXYNJVi1v4Er",
  "key32": "48MazKhBGBTX9cobu9rinXzoBXea2Q2Chjhw9Na9tBoKd38joQHwWVzSPKRY5TUKec53eAEBXWmw4n4f2JvZTavt",
  "key33": "3RZjwDy3tXa93psyuAQtX2Qmd1VP2JaNqtC8Mutp2Se37z3dDHZZ28ULGurCo8c8phhFSwHBZDNWZHbMBMNT7yFo",
  "key34": "3a5dPU11x1kDKKMyE8GkeJTfFgi3uVWNnYrjhU9P6vGHv9Ck8MPrPKHmbUJzVYe3jsSrRY9eZnRewvtmssCLgThH",
  "key35": "bH375GcPyYBffncMoE9hbN4Voi6VRUs4bCcyEB1q2owYXpeQdhUhGtbTDHrtaxdtnApuTG8vZrPKvoj7fPagGGV",
  "key36": "A9v6gMDbT5VktmB66yo6TmVC8DPvauQXJdb5L9mSBbSB8io3G2KXADxRBxRA3GLqfSCCjEHjhzttskSrxznpEyH",
  "key37": "4HRnEUgcg4auVB7iiACyrx37iK3P1SdqCCeobD5nRtJzYWhunszgo47Z1AgziZ3ShqujRxFJZkbWHFuq4wCUo5eV",
  "key38": "4VerSJga5bKJUWX7zyH66MiDTet9DRPG6pnkd4igCv7JG1AKg8bscPwezexLwpJZ6phTWnz4akwagxC8LMVjN8L3",
  "key39": "2xCbG4fbMnmKyVCjbgLJZzapXyoQ63ywKKgqgWeTNrayhz5tNZ3HyLDUQ25yWqHDLRpA2pFkJu69nHuQaJaWxBMw",
  "key40": "3zxfgJYJ5i8cyPEaizyNYCcVY6YGWVcu1UzjzZ8VDjUu2kMFoz6XPjK6fSSfXRsqKqAZ2Fyeba8rRojSLiuSFf3N",
  "key41": "4AgvaAVE5cybGEkypq8uYBfMppaErw7pXSHnwntjhr2fhe9z7NxRGeLo8Hnk4nEYStDv4UgArZBr9382McyhtB3y",
  "key42": "5iiNXoRoy43RAFajmzPJJW252Gqn1rHrFSkhMhRfD1FXjm7x6e14kgutfD4RzUhPEKuNtjXCDgPF5rnwxVpCS4LP",
  "key43": "3mtuNbKcgbx7eNPV7HAE6NXxhYYLfyuxqVXctqqHj2Mkx47UGG8jsyz6tBYhhsrZpcKmcYMCEinu8XBTMkszBhJN",
  "key44": "4FC5KJ1ezRbFs5GiSf4JueF9RPK1wHCq41rCSQiHB3wBDsvERKPg9wTiEHt5eV8d8VRtvCqC36ZVwQoNXASeGhjM",
  "key45": "3Eg6ycUMVgyxwZkW8ZQCM9iHJ428hf9cyAbu7Th4A3szwKYf59nLREf5Q1JXzvbYSAwqA9CnmMKTZfnN8HpsNmni",
  "key46": "3VYJH6hwhi3mhL8ZPns1HsXWnAKdc7rLFouvUNsmGkqFEZKyWK3pKS9cG7qS2CyCFa3Cc5DPTamTrmLpEcoVjHib",
  "key47": "3JruVAeu3GZQUivUec6jB1jJsLJKtfJoKVXpGfaW7HCcEGkFoAbqPXrADapj3AzowKuBPRR6TYo1h1TUKrRWTNTe"
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
