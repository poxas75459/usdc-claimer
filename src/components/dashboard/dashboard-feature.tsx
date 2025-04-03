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
    "38v7zHFsUk6Wq5T72R7rV45cjd3QrXRtUHhefMZb83jKGW5k9nubZHoaa3GYqn72uRgHoX7VavVYUgM27s4j1Zdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1L9MyawHZxyASD754anjkq2UifpJBAjBLMNd4rumwouMhfz9q917q4zMZSJAPQc1Ms2voKfQkoSvSnXxxFHVLbd",
  "key1": "2Ty5V6ystZsnYNPydxz7Y8XRwbb7c2Fv3RqWenCbuRC4iWzLp6qiUj6J93TEXzk6K8bu63MFzS7Nznm919JVa3N9",
  "key2": "2JnEQ9ThphW1GnAApVpYGuD6VGwrGndFZE4Nb5gRCp8ZZ2tw8XXw3oQyLAPKnyMHaGx5s34ztU7JPy9RDRV5P2Gm",
  "key3": "J7TbD2soP8Kk67r16CzAN7JiS5GMF4L18q3FH2ycwHW29rdhc51mG1AGBuTxdECH6U7H8DmbXki6LNa4NW5zw1h",
  "key4": "4iKBgoH2k81WFusg8VE9cXy31hkAZsnUg1akKgoGtCAuRvgyMeBdWFekFB49jbqbVF9hkK31J2cmieuUxcVxk4Qk",
  "key5": "5f84fqqwrtZaqqacZoQUCREPoYYqU5xVTEjAufzgRxyznXXod7HRq2JeA6iUWjWiuK2oxn6h41T3dwxmuanaKDDi",
  "key6": "2RaCBgpM1RuPYVptKBSgS3arHCfgacS1BaWNy2yQSsbVHcStEGfce2KoQXiExEeeCAXbeEEkJki5cBfAKenYgLan",
  "key7": "pR5oNZAPhkdW1ZNUDCrgWxpvV56quEjhsfYYxWGkRuLSp7YJGGhP31HBVDtopqFkEnfmXh4mcdVg8njbWEqDDJ4",
  "key8": "4KpEHc6mTQd2Mcn5Hcrw7fLM4mSzReYaEkhSikZadK5vu81ih1UWuaZfL5g56gA8MXEhpaacuE7GHNJymsB1d4fq",
  "key9": "ZSwsUWdjjuguoCM1FQcq88yE6vXkSzytSPz9ff96ndR7c9dHDmRZtP2JHVoGMfGuu6SKhEabg9xZovYNeDJ14Qj",
  "key10": "5DQ5YBFJMjmoX2B3jJvsfKNj9pUDyUsCwdyCCehEkWbWiZp11SrjcZwN4JnjVaf3jDeLy98ChYmJcFKWLTApC9mT",
  "key11": "3pr8cduNk4tZME9bxbkMmq6gRUvMRLvehhZDiV6T26Zc4442GuudwEYJXT5zvnYFni7ArmnaR9ukSWBxxsaWERth",
  "key12": "3ho7hezsb2ASXHb4AzN46H7ejS9s2PNtyQYDHvkHFZtSCSvTrMnqpmNpBcT7ovhWNuoMzxMCQ57bbb1EYyyDcEdv",
  "key13": "5PBKVfxPSXGP3UiG3Q9o9YpbX57Gv3YgsEdYW8mYf6PjNT8e9gH6zAMgdMDJQYhmL36bo2hiSDYkEiMo9qDnVaRr",
  "key14": "3WnVosXndxSVRDCgxziVZmHuVu6xVdJjf3TiMKmBECQFP6am8jgeQ2fRV3Fe7Mrgg6xBro5RxUnrt6P3K1NLYDP",
  "key15": "25qT43td1PFDp1pPY1rUDndz6WdNNgyCV9CFUE6PJYQeHum2XqhVh822ruLSVBFST2FXsGUvJ5tDMVFaUY8SV2sn",
  "key16": "538tJT25ch19GaUs84ns5h5B36nR484w6J2nKAz1BZWo7avj9aWhX2j3G2MYBtxEp56hrXTQFBb9VAdXDdnZQ6VT",
  "key17": "9UpRuiXNdLkJMDM9PE5BhhjanTEZEa3cVRdbLB6pty4N8DPPaQ4fxq1oHmzbzW3nKZTwKVW2WPKZkeukPBBUKvr",
  "key18": "58w2CnAGZKEo8AVoZ6MPHDnYt83vXXCCWSbCPKrNGej5u8h22jzR7au1mKw652MpifQUvVToA6eU1ExLgMMTGviN",
  "key19": "5bZQi5L5anNLpwFdTqCfJfCjA3eYUo9SuN8qRgQiqDMQwscgdCwN74LjoM2QUrPkvxsP5wYk1yVq3gRYyHLdF8bL",
  "key20": "3eEfRuctpv3sdFJxRW2MkYu7o64tSKbS8geFw8e1dgQoypq2gf4HJ1iHAProjHVcCjdS3QrjekGEHFHxLFZmP67u",
  "key21": "3JFweKdxFbi2Sws3GZ213hWZmXHnvN88k7XmdYbPJ5MYifDpnGkNS8pWk1gTbjnyEZLygvna9ziNS25rTw4EvzCV",
  "key22": "5M1efPCPjxvC6agQU7bLKRdPWtsv1o7BicvwYEWcTNkw3cYbHnuc7r38sgQ158UVzMbiLQ9nRg5ZAw2gXJFTawEn",
  "key23": "AU66XUZL9AAB4XSKqKGNt7MHkLni7WXnqAZqgK1hAXrrBc9pTfgqZVGisEfAi7GUPyket4oz6nVpm1gxvoohDgh",
  "key24": "2ZuA655cyYbWHzNfrc9HBHfbRMZ6Y2pcLuMvXHisMXphJrLcFUuHkjmyXfEMTKhAdMnQx2brpt2GYVbfixLFD2AJ",
  "key25": "4rT24YYiXq43mYXMRftP6WGEE5s3dYUuTXqr2icw4AF2ves8mrj3JozbJVY1jY3sTXAANLutDZ6KDkYwucg4qBtC",
  "key26": "mqZxQ2bgvKLuGJ7pEVJnimzoKHpjqUFjtx9rAyswqT6caJR5ouGjnD6gKrPyx6xaQbN9F7gKJhxrtawxvfLPnH7",
  "key27": "5b44mUTm2VnTyGa3hRFmgtGs9QD8LjP64YMY3B4EFKTig74CvmgSoiW3P1NGPbG6XxKJp2CjnzZ1BKVGVRyfLFNh",
  "key28": "3xbGD5JuxJ2cs4tdwAsQSQQkBeVAX7QAtzgVkZSimPSDkGZcuZQg813xqS7wReXs27FwrVV8Dp152gEZU2Ngi5Ro",
  "key29": "4AKvDwnn3sXU9jVf6YcjX98wV5MytMeDkVCdaRrEyiUasUxfsizxgzzMpwjpNKhT6huReZjB7Xaut81fzBaqP2wQ",
  "key30": "3g54pKfD2ZH7TXCzEXXd6Z7MRwcE4C8jxDpRCNjvZTsfiW1zeSsYerGvbcXQ6Se7q4K4quw1UDj85sHZMu8kKpQ4",
  "key31": "5u9zZUUbvSq1vWEtZ2czacbVdFcMEo8pH2ivpSrqWD2zCZVmWwFoh2siWMbdFr57DZ2YgknNGZziar5br6GjAjE3",
  "key32": "4k9AeEJ61CzVGoENHiKdi4C1i64A22wZHN6NPxLCNXHPbJ8MEQxzw7URK2AAHGFEjfnzFXzfDaRrqk9EUZS72E5P",
  "key33": "3NLK5eiGwwsvxDAY6444PHwwcwuzrRmtjgjTWYrjqqJGdrGXMPtVkgtPyrDE2uPNtnP8udrJMUzt5Nck1NHg4YsM"
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
