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
    "2wNbNiFRp5QPZ96sjK2Wbewrdhj9knpG8q4MwVtPmfQtKZF5u2Z2FRYdJz8f11g9KmUzWbmjn4BmfoNesVTg9Vdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhpFqszLyD7KMnh79rQR4USJZXQu9NA1tjqjXpCJGyrT4PvLPeGq73wR8yU5iJaVyykGVmjg4y9wcas3txSSUun",
  "key1": "xSovV9NpnZuV42m89HyJcPcLoQpevWgVVWRxzN3dpnyaYMNPNYHDSBZKL754QzbV2NgkxS27PDLmXyPCCr1ekAJ",
  "key2": "eHzHe9QdqdARTniLaeJDdJcKxqLM78ggBksBjYy2aKZbef1ptPRhoKfZBpJsp3vfBLqZcX7fxsVYh6DuwBzGaxw",
  "key3": "2FrL5kP2STvPkbqDLotmwGEFDGLnnhPuEr38RZufPmx7VMnf4gpokmeZujH5JmnGgxdh1TSreTCg3U68mPgJnqLX",
  "key4": "4MVBKw15MisK4DasNXbP13JSZ3gZ91ypovwPNUG3VNxkicVyuXoguRdyubAt5gZVshxnzn4hW15GhLiYUgwSSyCz",
  "key5": "4E2anvKsTNGQ5uspiVuY5hycm4n81b6ibqEFqBF43V3k674tjZ6p9LeKH2RvGXtBsx9DDA4rQHi7kCF9kbYHYVGW",
  "key6": "562SyrS8NiMgKRHp6XnPFxw2w8xgfEw5owD7SEX4iLzjT18X4oQ61E8ZJVkXfDKMHNefTYrwz4N5Sy86j3fe16bk",
  "key7": "2vBVTzErdtyDpKvqM7u4V9LFy9wwABV4cmZYTQrmCvTmecat5TTM8xUnKALm4tCzt9t3bvbtBBKASMjn4yAQFRE",
  "key8": "48nJAMmpv1XGifbqgum2nFmugWfFmai17URMXZk84D3QWVVSFiw9c3LDMbnUBqDKAWcXvPR3qqhs61x6pcCkTQsa",
  "key9": "3Rmm3cofRRthDsQW9uNqYHkVVyG6AqQV7JajGnWQhgNoLncj6xHrYWikuWRmV9J6e4hwAvb31rDhxjh3cVMuzeHB",
  "key10": "4EqJWMPbqLKP9RAhZnx5guu7fHN43apPGapijHC4HLvzfRKMxSM9KponFW549fJ3eoLdzWYbNhwdugucxTrvQm5J",
  "key11": "5zQVwcqQFCbcVBR9pQKVqgzkhiBFkEiCqhvqh74KLDYiGxG1JJg6HXaiS2yf2JAj4Mv5eczpDZyEUhbXmTE7obDw",
  "key12": "VqACPpyC8cvvj3cZNVwcBjphNmLavEFAijGcLjkBNXRwBb5uVaGGSmYUnGCJfsKwxZH3TFXWZU2v6nXbDc8S4Bx",
  "key13": "NjEqi3EXs5D2NmYbXF9uygBPKyG6AK8VNHjj361wFuRVgZHfHmTpxjS81Qw83JxoQC2TyL3XZPK4W5RSv5Mix7w",
  "key14": "5FVaVkr9ntyrzYPyb1Lqc99UzpwMuLsvURgDuyE2ZPKVt2RXafZD9q45G2npW5yvwDbcS8Pe98fdvtvJYiTu1nMs",
  "key15": "5MbDhqN3wbUdyxnWo1gUiPDusVqiJVhYRAn6EXXL8u2GoeBiJY5gcsWi7NQfgcxmBUVCjYWApxuao87ssCkM3MiC",
  "key16": "5XLxTQNMF9VcP28bC6kWhVVJuHsY3esLJG3Lf8yNwHGS1qbHXtELa5xups1VtjvurcHEdDwi5KUfeHRVdyw6TBKC",
  "key17": "48qfgSHLXsnq4AVQVorgYY4M5C3XxyAUEHt5oFSdo3oh1pg4EVgvZ31heYei7P4suUX6tHCwTeqpYTQAyijKxNQk",
  "key18": "jaaw5XootttkHt6GDxAGvUokCi5uc5XYm8GXjfh5qZiA7txTkXWFuV9GHi5itrm2FhcnZM6hbQVhPKH8vFEZx88",
  "key19": "2c8tHEsPu7Cduff5vvmyJ3Wm8Dgbg3FMM8yGEg66osmRXgWZFbGUCoikZcVi7pkrow58S4BpcafRgURZ33Vnk6kE",
  "key20": "5JVUdgRjTwW9v8wdDWRfArEE696egKA6PspHyr3c2iGHxPW8JmGz56JZjjsdUtFzWVXL1VRMMwxCA1VgoSkD53sa",
  "key21": "3afyHxDwRtaU91otwfi5uQTJdHGaFhQQ8tdriZTm9LXBnnup3DspHu3x4a3MnkdkCeAXTCSD7N7VbkemiSvb5xhx",
  "key22": "2vpf1x8svm86AwpXzUM9qFXpoFdhoyX11jfjeKrzxL6b8UopVxz8yBAiDxcf9onyogUEuXdqiwg6R2vRgzFe9tF5",
  "key23": "XcPM1k1RmvFLqqy7843akwwPkHE6x1dpNMnTMb7MGgAez8cT6FZqa4MdbqpfT7b8r9vwbU2GyBukuJigbWos7Kw",
  "key24": "2VF94qubMDf9Kw9fMYUqKidX8nEZwVd3MRkjt63u5iut4w4RRYidFAocT37gXWURqG5KFrCXUngJXG1KLRbYBRce",
  "key25": "4HH2XYJCvr1FZFd8Soic4Ygp8CLV7L3ZmsjAEygyu5CF9aFYnPyaBBubJoiEBEAzTss2vwaDJL4z6mwp5eCDLBqC",
  "key26": "4Czwc6CJjqF7ecjHhJ9J81iwHZ6PSRTcD6VGhTKGbdBzimBAwS4yi9EWLtBGVmPFAxjvamPtekcha3854AgvZfyQ",
  "key27": "2oAhWm3eXuuojCz8RQYLagvXejouhG6Etvykc2XuK3ncZK5fHqrFsV5fQGmskraRqBKGrzcWZ6x2Ly36P1Uab79h",
  "key28": "48EW4jh7raBcKoBzcLpgAZjB7CQzNTsEcZtq68qi34wyEbJcxXGmXwraffz9W2yF8LGCAd1ZSgJ9cgpHpSWEyxRS",
  "key29": "4UXh8HDLTGihFAfLqqSPKEogeTvxv5mqY6CMjuruA8Dr8yh2GkhueqTtanFN4C13otJjQyLRxEanb8VfR3egyV9Q",
  "key30": "21LNVD599aYYnF8iXB5xxCCxybvSdkgCqqMGBcccHcxfxXzbwVBD5Q9WBGD5iDYZm2x1DumEqvEhnvsLBZSyu4AY",
  "key31": "4eJmcnLLDFAL5AVYMmEtDnL3uHHiXCxCibBAoDLto9iEBEo79JdhToVfXP2eTFXpw1BzMZ8hDGA5xaXRpPcjeDD8",
  "key32": "637z8xfYiLijnL2bzeJQueACK2jbdd2LEt2oYW3Jcr9bdSuygCsjf9tNxxPaz7rkz1pUpdBXRuk9DqkywrafU5RV",
  "key33": "agSraCYHmUMKWcYwoyBhmAP5ku4VGAgpAxuWvAN9poDQXcxxmehKdrXdR5FyQFo1e6hjtVGuHLsxB3TUMnChaXB",
  "key34": "497EWMzPysS7VwRkcPyHgsDjYPg83QGyLUTtaUoBT8Vr1kSFYMbLsya6FUHTwnwzxeC2CUcm4JqthXHqcjUkGyNJ",
  "key35": "5AFUSSuuu4iAUBMJhccqEsgnCgw5Rm6qfNTYr8ijF7pewhzTVd2ucsxHqKSxxWdqFGUxBpTRoL3S4e6zv4EWdVoP",
  "key36": "5CNeq43waTQVuvDAGgkqeUFYtxrxXLXpFcjx1n7h4hQECar3L4hGsjqQEFupY1vBqCd4tnXecPCpA2rpWyc96Lxj",
  "key37": "51iU4udy3hFV6NfJ3yNAX9YuHcX76ZfRuu27V1H8HVCyLwVbAa35oicVH9kL5PHZ1otQD6tPzf4GEiEedxByQeV9",
  "key38": "4tYV4DxUY8nUv2i5X7hYsFA3Xh5CYpYZW79Cxb1TBXN2kqksCmja1z43ww4mJyrrYUSYbFSfKGGGPzmw9bZM36pE",
  "key39": "A2d5nE94QrwX1eZLN5PUWTnXQVje3LC43oYt1rSzKFi2AMfnVLk5t44iTX5nyxdxFGGuweik2UNxm3TJVCG3xwA",
  "key40": "qKuADkhbuKmZfPtajaxrgdk6LzG3qXnNx89HHa835vmC4kE98AryK2254EH6fFNbatFRkSK3PNCKEvuN6wUfwqD",
  "key41": "4tGppufDyhWMR9rhKcHE2Dq9rX89NY6UBqywvnz42forz5bPeaRTjS9sretUd3UckZqjTTv3rtekZmZKw7N41nRX",
  "key42": "4h3xSyrPdqHpZUptLmue7FRvrEZhF7eh4Kx6TggDSdssFAUphjomwqusBFQ3JxEMvgbj3oeqpXSohGpWuNFMiSHr",
  "key43": "44GXtQUGTffQqx8CFxZ3SyQ4HhMqaKNmmpjzeSuLaXVQqn45gafM7wM4jj4mH3bUa7rTzkCQ7PjBC8jXS3qnS4Zi",
  "key44": "3oGZ3XimZVMhgNdkjAPhjz5kKwetDaNt59mhyXCr1t8C7c8STcrULWKNVC6VUAu8ZDnFhtQnQoyWTDDveEkR6L5y",
  "key45": "3h83FF6CjTvbHnBGrnb6ELjgP68boG3uyvEp7PXUSVruhbJVDNMpxnZW8V2PEq95tNFMTaY7cYh1LpKvNdjHyxs1",
  "key46": "2XqCsZbUMDwTMDuV8gCX6ZEJuVRNK2i744dJdcABRh9RQE2iQS6HWDWwyp7mnyjFqyzGQXWXu1v9gRjmVb4XtLkc",
  "key47": "4Ykc22GVLo2x1SquxRnNWhcp7TzwFuLBUJ8r7ZmAA4ywyQfoZf4JU3vjyp1yT5orkH63cL74SzikVzbQpJNi48Ho",
  "key48": "4J1wGpGihg9Z1i8R8R8UuJnw9HBuTs5ac1sSLYBcCTURuBwwmGKqoUfVR5YAEFvBMYKaWGyY7DL4aFQScoUc8Kmn"
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
