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
    "QL2dnEuvwuFjsnMYLN5mJrskvTK1SjS9m52T4a3BsvUzqx7pitVCnSzRafRVABGzJKZMkDZaT3soVy8bcxupaBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AABQaQae5UJFT2c4PLH1nDuSQ8svTB7W85ZLV8fNQWni8tJb8Yd8D21Df88a8tiSZieUQBoQxxkxeGpB2WwxxH2",
  "key1": "5ghKNCVhoK7F3EU9Kdyv1BhoDN31xau2UMUntBs5ksYWCvP2PvUmAkCzCUtecp9z6rT2gjsqUwmpXRkK2FBAVbGp",
  "key2": "5aqLo4iLEjXhCqLymFXPMBADjzbr7i5UfuM1BbCGvhchh5X7GXWcDdqWPsZDLnDiQerYDNgtgUbugyJ1VsVpHzp9",
  "key3": "2TJgRuLGrx2f6zhuTtCKMyncFgR17RqUx3TdQvpCmDDo6usyVCV4rmZecGNAf9EvFua6FnfytZAco9X63yUrjX2R",
  "key4": "3Wi9iewHDRs5thY3cfuwSjEeUeagSMiAYV5GXFKM9mSsAXqAwMv44PHHpSVA5mzj7rTKbpuK9g5zPrBFuqCLFzGr",
  "key5": "628KgrByStLcFJFgLe87DDqPzQ87fqTWMNxFTnpHJ64YZyFm41HsoJRYJurB1w58ReoEjoFnK1dq1xTzoFXoQSH4",
  "key6": "62WXKYgisNEfBVoP9sMWj9cAy8QmHfzfRAQShhBRqgXvpFnerSGtNiP12FUFUqcYYVFyVaYxW8ot1pff4dPEs88D",
  "key7": "4BNqxzQCbVBkajJcMYYwVpEdqYcLXeBff1fiHyeB6fqqYmDxtSBxeyoGHc2V7xt5k42AuEAFmy6tXwah8FSjjaNH",
  "key8": "SayYdqaEJHEcozAjgwAPP8Qzcaa3GXMJejThxQhLSEZWhrTjyxByJhxByZjQjPAzvVWUq5kMPamNF7MNbK9UGaT",
  "key9": "2etPNUzQhn1FZMLDUk55wv7Jj73tmL9L4pSipCx9Uej3nYMtZeC7UL2ubiM9f6Ve1jduS2jaSVS6xxYgn8B4L14w",
  "key10": "5JAPAkFETkM4zM2fd1eqYBQt9sYGABppsC7pTs1ujWqEPXbDQFE79drRxVbYFmF6a5SVQaJc5eY2qtv7DaiKvuFW",
  "key11": "2ZqMJdb3VKx3QSBvGsfhA82ii1T3CGunbfs5o4nW7NgHk5UQyWFVXz8FQej9U923KDVAiVk8YSGMJ2CnNJHi9GbP",
  "key12": "2UFMnCLMp3gjGNbntxWAV6ZChiSH8bzFzWz1TTBzZXVUj4qe13QmNK7zPUa5YB4EyGMYyXrVA3p4XKHranshnFy9",
  "key13": "343y2WeEpFgD7QcfKMSGryQw7RViRhaXupuaQ2ZBbawpZrfywxWfAMUeyvQWSkmonz4oR5W5qPBrvptwLt9iGDt4",
  "key14": "BxE4Pfr2iVLfrg9ViHYg95wHYkyvBpru5ZrGHPDh2QN9Ezuu5p2efDX9YfK8sL1ZwNssYVWx7bKCZZzJf2vt2Jv",
  "key15": "4LYLAWVRFmBe8PuCCX2tfinJe8Q7Rv1to1eqPb3kR9tEiSQ77MkeVPRTfPgbKGQiVAbQgN2N2Nirf4qvb4f9WQfw",
  "key16": "2oJ9KxkxzFds331xXe1UpDVhKUQLD4UrcAiEVdzkY3KYEUfqT4i2QSqXTv8UyomRhJpSi5S2cBRLRpLpicwbrMuV",
  "key17": "5MFwxtFkMRTuHbYe6G6LwfSKrAE1f3S55ufVKNVHCbaKcqga6fp1jXPUBeoh5wU3zy4Uc51p2ySetcS5EKLfz5o8",
  "key18": "4bXGtc1zTs8mAJVPk36mi14ZmpxTp8gt61BHJtnJ4qEmFEae5VMRcpYnZLE5CNsDR8WVUF3JWbNRAxhzu7kaPUZF",
  "key19": "56vRCff3bicsoNsMfXDxBLu33fv48vZAe1Lo7hYvZAuTTKaFYCE4oURj8aeogAyeEhbzp2CLtd99hdC4RVtHrTJM",
  "key20": "265UBhQty3QAX55EJumZwcvBwt61ABv9MTCPUCzh6AenWsnvSqLkHGgMZTLs3LB17czTvaV5NHrGb8xJN71HiiS8",
  "key21": "4Rdp8AaS6SJzPZ1XHE3LQ5GveAEiNJcZBys72rFcXgtLrceWT3DujmiuXbvZML3eNGUVQZeBi28Cpvh2nZvXQfL",
  "key22": "21aTasMq7JsSMWbrhrN5PqrJiNyQyUYUHcMR7Ky1v3PwcMbkAgv3sX5aH7zWwD9BxwDi7riEPcKC7NpKayh8otn3",
  "key23": "2LvRkmwpuJF8wDQ7bfwCoXHjPy8oZEUG1S7fRMRvv6jJVD9bEGCHJpzKcde5xZqXCGsvQDGiZK3Wb2BZ8MxzeBtT",
  "key24": "YLmZPjT4yuMYFJPwR618nTXB6JyZKDyG6mC1qsEAEPG96gw7PBMo5P4oHff7UP7WwSvKN5YABuKzGioEzuRnv9E",
  "key25": "4g1Y2k6B3VecJpfQBCYvA31HWRRJksHxJ5HncAXtsJoNMwZqE4jhhwkbDeaP3ZaAtA5R5mC2q3E5Xyhh7RJhq7kv",
  "key26": "5df9kfVYbcqyjBJFCWenp6G8uVh5qiid1EMjHY1maPTvbd7BGFp3kjXfSKWU5SbWemqB1jZbijtiDC5mYYUya3xf",
  "key27": "4dW82L2sTWLZVvGxFaeMHujML4tWQ5DsitctRF39Qm9dfJf3U3xg68nSuQMUhPHCNfQcdJs8KHAjsuZmLXDN2zS4",
  "key28": "5KZrACwNeGig8UnmYj22ANbXi4HTM3GSfM511zVbip3ijbZwvBCgi84HynSCKReTYai5kE5wQQRMTT19gKqiMB5j",
  "key29": "4hgyLtkUeMMjHaiJnLaEqovz1zAWM4z6V1jqbn1jrSkAk9nQ5H4GijSdhsmVY6B6etobxgfMcKjVNbMVNzXvzhM1",
  "key30": "4VHA2NrQnnpJCZt2smqxRWJPa233jiA3DPC4hcRLMxuKzypJu2SmoZHmS17UyUJ7Hg1qzn1jYjLoBtqqTqaYywFi",
  "key31": "gyGzxmU6E9VUjHxppe2VFfBXbMSf3VH1VJkAbGY5WAT91sLgxYXa5ht5WR9MqxxEbfsPENAifCWCpY8e7y3shJ1",
  "key32": "2MJ7uZ1kN5ThUuUArmZraujoiFz2uq9pkMbtusGdx5zdKtbWCLuYSZAmeVD17TfeiqAngVGYT7Pp815kQEmRyvCZ",
  "key33": "5wbrgThmzdB5PuTxho8pY9BmeB18ZTBr9vSVsH5bkzx1QDobEFy3k7Bw4JnFs5oYnEXLZBwuzmkoNSFA566kfN4R",
  "key34": "31VY8Papnqbg2Jmoa3BCemMvM1ACzPZHfzVfus6HLW5HFAizQ7FJcg3yJRpwcLsGZnGtyhrVYRZKYss6jzamuqg6",
  "key35": "J1T2FXWbqmviiR11j5d76NX4s6TqBcCxoEpahfKWnFqsNKDciNSEjNk4NSY2JNosKUKfTxYPXtt34vyyvH3FAvq",
  "key36": "4h7upXV9MHHPrfe7rwEfg35qh17yBynutdC51oejYYeK8qxTZRvxdi2766KvcLMMcHy3uzMMzQQesEsA7bYeTf1h",
  "key37": "3AUewe56ziNNyJ7rta8RJsdun5jQg5qeSw4Z2wxe3gSacscSYSMpz83M6tLxocub4m1b45rnVsgK87Y77v33NTsc",
  "key38": "52KpeZNQwAhVkYdQm8iA5pwZoQQGS6zCeXrCZ9nEfdDRCf3gsN3n4LxQr65bizTRTLgJdDW7MRpviFkHo31Sfe7Q",
  "key39": "4i9ipVpNHKYHuvqN13kxrKYy47gi97A4yzizvzPiLXdKKw2jTnuQJXv9CgX6acsxX2DdsRhTSpN9yMtXrA1NK3Z7",
  "key40": "3xzDsf53ryawaM5pFbnWNg3XEMDZcwFnKuVgkQLisaqWxCYDHbKYJ8Nud3pTHF4rBVeDfLcu5QMPYmPi1pvGJuEG",
  "key41": "ox8pDMcCUnU7f4eqTMnhpYm4yq3YozzcbbppvqG3VcysRf7Enb3bhyA4Pku6wYzrP28rHHGLYntwMmGapDLNnek",
  "key42": "3Qefm8Q477R77AxdbbQdGmTfkWMR9x2WThBGFXUdhzQEYX5gj9VDgDxT1mbP7xcHvM42Rn9o8FrJSFW1vJdNZj7y",
  "key43": "bL78suyMsQRFfneeR912wGHL4rkbQmLjVjyvngZegcrCeH2pbdxCoCgeJQApPjq5ukcbrC19RVXedGFSkKesdih",
  "key44": "2WvTk6wFoqmZbZg4fE6W7k3AqGhyRpxQr9WWkM25Tn5671wF76SsrfdZTFqb2L7JcMd2J1AVSJHJoWSEGZAuBNx3"
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
