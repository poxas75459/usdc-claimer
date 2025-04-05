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
    "5miSGHU4TT8f13CoxaSpHp1oL8ny6RiSzBPxfL8Ubvqjtjr8wx2kQWRroLDoqHkZTDJezjXHXPBd8Cvq1UJ5rJvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GgexJPvLQRjjmP7fUfySN4JvNRzKsfjeDmygKexJUQABwcQZMajg87rwb4cjDZp38KJR8wNNgmpphs5nyg6krt",
  "key1": "Z55YY8wrdShqm4yqvrX63tbJJ4X7WRB55RKVrgW7AokdfuAbPvBHMUAs5oi6zv3jNFkqbRjNJ1GzCyHTpLh25PA",
  "key2": "tne83kpan2TMZV2mb8AK2aFmvKQeK8G6FoRxhCtUdaVWn1HL7svDyq4VFuYCaDzbQvE5Wz25U6qj4LX4vW7oUwy",
  "key3": "5gnwkLuQEos17oYcpo58kGVeUHzS8Npj9td3MFHnjXbSEuSGA4qr4wbxgYpoWNScsg5tgFBxYvKWnBwkrhR8Hw88",
  "key4": "2f95sGNhLm3FfR5xEDGgsmv2aezMNPbPSk1y5yeKtg3zLGTBqCb7uXHEwXtDV2fvwN5kZzntKB9d2GDpCqD5mtFg",
  "key5": "4uyr2uu651rrsgqxYiFYz6NkepynDEJJPRBAsgmssf7ziMaidG5dtdfoyVn6fMHkzNcpu1axrAA7JrjQD7t1vfKz",
  "key6": "4a7gNRGnNTAJHHkRXPrqnCCQobgXgATnNZX5ZrrdJPdeCJ4BUPDZ8iYqVC5XrReGEnbmjFcE1aeD9n4yNcbC4z6H",
  "key7": "2nruTMNqbYsmPbzkPh9ZhbbMynPhvK6db4EsK92BrooyAFWCQsJxJxeBLzSkcGevQnaVbTkcZsG2bFfJXkXHE6e",
  "key8": "4iDLtJoQdszzHXkA2oXrKRtt9o8Wd91xSLAFeThRfoR9RfggxNsvAqRZaBr7TmBTH2MjQQTeUvfLq5G49tctfofa",
  "key9": "2MErhtLurGce1gTX4ghnf37a9cH1uafqTbfNz63zuqjS7hXPrMx4AXGKFN9LYD6sZfus1DKJLvogsN396nU5R9tc",
  "key10": "2DTkhcBVnhRfSFFJq8wpEB5CbAoTFfp3cAAgH6niPQAtS6v722kPBvfD81xjX2MhsCxFKJvHLFaChWnSP4sWNAHT",
  "key11": "gLdiVGsc4yd8L8re1ZHBtfjnfdgsk3dCuPmArk6QGFaAj7QTHyLjNfCCXer5KXNjKqTrXyNMLbbYmTfDaE469wA",
  "key12": "5cziMJKUWybUrjvizDairMwqRPkwvebNNd3hm5KzyaZNMFUdKrQm19CigawftnwnvuLb7ku5H9RjWMu8HJYVce4N",
  "key13": "3zAFYdMcznBK7r1oNjfivDjNcJfZfPu81HMy544NLUEQRnqw9ZULLXjPdvR5FkM1Rx7b3Q6NYL3janDePYUV4eeq",
  "key14": "uWesPH964ANX1aJ5nbTFXuwh7xGySZe5Ug75k4LPpBxvmKbJHzSADVDHkTBq1h3dpu6twpV6f6LyLNcGxZTryA4",
  "key15": "vZn8qdHUTrg47vCTdBQU5DofstBzY8xPSgXQx2QNxbaJg9bRVHerKeAGJ5iuE7ysT68K3G9QnUB3L72ys6xXMis",
  "key16": "5oiEsLdVJeeHd9m8PUyUKXN3rtHR5oa5xMKpWfMhFfWtEejx2gzTWXBHQp64KdEF4Yj37oL1sJKtjfk1yVznwtDX",
  "key17": "4q5md3YozK8xHPSadjnjVcHvmk9V6mMyp2VXR2zPH1waMsvJKoWMXP8qTFksbkbjEaZcFVxFZMQzuLrvjFee8MQM",
  "key18": "4FRtpdC3od9VngBLZnaVXSKFeTsYnUqNo2AqfEe8T56PnkbbUqbkTPUW23w8hbvZ7BgcNV63QVdG2VsuiRKd6cdL",
  "key19": "39a5tUxkkNnCudvZG4MvdUZawCa5LXxegm157mpqwTf9Mz6ymAUfssKDgSQ4d5jSLAWNNnFvsRUsnNRJNWH6K1Gp",
  "key20": "4Lbocp7XwBVUVzUjDD6bCxakaUuYrGoLZs7i5KCgrEdkyd7RRF6YVWjKrmtaqDRTqzZJUZudKTdtdrzqPfdnu1ap",
  "key21": "2Wzuvp1n49hPMZvUjEZp4q5bf2j87cGDA4PjGtuzHfkHMBJc3nxs2AQhk1z1a59tJAwdJ8Zv3NaUmdNe44JppWkE",
  "key22": "3X6R5GcWNG55Cu18p2eSEAE5DjbnxE5XyQxy3TdWh1umQJxkDm7mrfdFWkGoBdzUu34Pp3p99MyNMUqRkxPwpoDh",
  "key23": "2mRGWPwHsnjQyf287DQSw4QnvV1ePgdC2rjS99azxYvi8dJjqH7vGjg3aqxeBycqxTR3fc9ZXNRKBXiFEus2KTjH",
  "key24": "2W7UeFb1SUK45cHeDKue9hXR5w8bRhQhE6prkPtK7fcztg7JWkkVR3n3om7LDWMdYeG96hdbBRpmxWwRuJhnTVxg",
  "key25": "5X5Mt4J49g9m4fsPEA9CG9bj7zKRqv3y17nfz3vBPemCoh8YNvLqASUNyMxXSMJJ85pKogetR15E296r6sfw2uFn",
  "key26": "4afwuvdLPrFf8PRSAYEnmLbiLsBomUYfHo989HMnK1LA17wFWvkMSM2P6aa4iDoTmdmLGUptYonNi5Vg24Jn9cVR",
  "key27": "3zgc7LAwgywJs4ix2eQfCPaVdKmMnZWmet3z9qAHyNE9SWgimoyoYKAYEPrRA2a43zxpK2qYMSM7Gs36D5npKZMJ",
  "key28": "3UmpvqKckFW2sAVLM6SFxfmNsuFy95VYfnYE4bntZzbCRUkxNz6a3pfxsngxpHDft3Xub6FtVTkzYHt8FfwAez7S",
  "key29": "3uHECUfooerjZAw4mYVau5TMvx4a1ACHNBgW7VqbcVU2QfU1sRbGn4pt1SrNWBSpQ8PfL29kEVmNSwXF5dKoQYKZ",
  "key30": "2L6SMXgFxiicWBu6384P4FHcDr6E3aWSXmfHuT7QRhcF5nFYPUmgjpHF27hzdU38GNtHcmSRpVxVneriK3yRFTL2",
  "key31": "2SkABe82k8Br3LmUmTmbKFB9FyLMNYKG4kez4e5pxpC6gEDBungfDC5KKcC1H7LekqQv5wyrvRS9heJwqRtGZCoN",
  "key32": "4uNffHT1xEWKnFGnMKGHZwJyBuNWZrnLNR7NiBb1brnxVQ6XAexJUPuep1z9RKo26Gf7MVUrFEMkyrXXSZBFdeUC",
  "key33": "y9ZmqZbKC3opiN2wTJtYvi5BJ8wCCRX73LNEdKxQrJZ8d5gg8qPj8ddiy9cXjMBZnmz9eNme5paVuebnGzAyNFV",
  "key34": "2rNpCUHjinPgQ5uRGqUCC59ebrpRQxj75uYew1gvNt45stdvehzWC94dcFEdi9pbdhdnRTnqJQLxpbR2v2XrSxa6",
  "key35": "3TJxtdgQ72Q9GH6BQaeCbdQ2kewAYq8tU7fuNgbUQ2GGQzsew76NMXQozFrLZPyEWnAWYufgDTePfZxwcJEDcnfY",
  "key36": "4dNiQnp7F1AnQmLdD7baVm9wKRvG3yAqaDYCxDn4bQiN27RJrdy6wm7sFn4qZ94KYk656AM74ekyLQhNPeWdEZ88",
  "key37": "3EXX5g2LvrELnX4MBxBsV7T7Lbzd3mqoaVp2RU6gdnkXBDRq1XDXAMxRtS4AD8cpfwNN4e7J3iuAydeHssnqmdje",
  "key38": "45Kzd9iyT5xR2oEMQA6YVFVPCBcGUDKwrNvNcmMbqBBbLfoC59NNtAe9cpMNXuczRHy9de3J9UTzxic2qJtTThCh",
  "key39": "A1vWTnQaDbrKtbqu7QnUmfzVkCKHhb9LqfWTYPH1xRyNADZbsuALaqDUGF6dkGoB8brGBKyQwfQTQDCpgDhdGJp",
  "key40": "qmkFyZ8Dra8K7KWkTBLvGtf6Juvb6A4ZL5d57wfbpZtST7uKQ1ukQ34cVUshVE2gNbFhTzdYJ2y2k4gSAyX2Uvs",
  "key41": "uabANjqh4qxn9kmMvakG5N1YeFrw9pnrxerXXt4Ag57hxyoibRXANgBrg8kroGjtDriuTph7zi6G1TX2Bk1NKUH",
  "key42": "3ek9F1Hr9aqx9YYbFgNHmRMiUNEM6Vp7AZjhLwcLhWs967jkK4DjdTDZPYvfbopnKWDHsHR2aBx6KyREVsuvD9Rt"
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
