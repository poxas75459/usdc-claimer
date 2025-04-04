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
    "So8DZLYAnsWXMxyARFBjdFbwzvLcoWLtR6JWcTf574Rdt77ge6EpsnNk6nA9rmPG3FeK4DbjvfFHp5k8wyppZf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mc1DAL823wZVcd3etkoPUCcahKtZwEKXpdTWY7ZRZKfhVLSU8yojQAnN4vCRMgn4BrTNocYLT24b1hNNw5Daocv",
  "key1": "3SXYHCLHPBzyYKQ17HNGrhBM2poWcFHSDw6zEBeg3UVbPdjDr6tAvKSVFZjyBP883deiDTZaXAikaKh8CXPbz1ds",
  "key2": "47fKqaWanEzipS9jus5guduGpgmoaptgUXocbqLu8yHdcMjd4t3EMS42FQPLxQ735UjZHRqNEJUqaiNoVFyHf6r",
  "key3": "52vcLoCDCbbG8icooXnTSjs8S5H7SPeXP8yRj7MEUcyzsybswHRFmK2UQdTySrT8MeGmA4qqZHAw4DqAVHMbMaGM",
  "key4": "3p5nEw27qZd5faGrc9QgdYAa3UsQbGMuHA3hfmNnF7yYJ7MkjxqEiqZrKFotm62PFKhLtrXPBfSN93PVJ4BXd8kL",
  "key5": "466LxV431THVDRiBZ3EML5fxuWixGv9iXCXaQtCVfrsqUZQS1QcvBpZUXKDtqe9TVi2wDhxoxo3F6KYGrouPQdLQ",
  "key6": "3qYKqw5TVHVvmg8HnfQdpLA3pyjyjm9jAjx1sHNTJpc3nb9omskM8tvbtSwFm9PPWtgkFGV9jYRswpmVypuZo1m5",
  "key7": "57ej6UBWZzNNHeWUdxo8PygZC7DHi1XgkQoMXkPLmbL1zcp4ggTUHNFwS5dDK6ffMRdqRNs6KbM4PyHbT3EsFmwo",
  "key8": "XFNeqGNgob7xEA6h5RaR6dead4jQF2QiYHXDf5veQcmMYWDRmFGd4UbUXTmRqmAhASqRcmTUSKoFQEuhDJ8CScL",
  "key9": "3DASWnyxYR1RNXfgbPdSSv7jsxXWfcLsGjE7iV8XnqGwLwoK4b7GREGdXrZ2N9bw8ZHcTHxBY1dTGpFR7A2VmtFt",
  "key10": "3BktkugoZncn5MkJEboDYcxtdiHmyVV6SHDTqtbbZSdzRqcGJeDDezkZhPTSQwYx1FtAbDSaoC8WssJMscUXYE6o",
  "key11": "2qGuypPfKvvDXkYyHJwzuakWM6d1ca4dNgPyDHXvnGDAoxRsp3vUu3xfyAqim3fkdXpbyAegxcMj2oP3TNQY4GWV",
  "key12": "2kqnEWYkLLxpXo5fexkei1M9m1MsHYBjPxxigbrswyjJQs6upeMZz7XG9KWpot9RRpVC3fUSTF1kL5cuoCJi36TG",
  "key13": "2GVqaTobVUQQckemYNpKuNr9itvJ7aJGShmZCdRaYvXNwg13Jqd7EDZWkuxhySrwD8Gm533HYxGbonHbCM77Fi7N",
  "key14": "g7LPsptojS93F5jBTru14iwGLCagPqGZRfv4Js6jN2f2n1rZbujEDkzVDQqmYzj4bsWgitoea4aZ5czbRSA1zDM",
  "key15": "BX3TYj9cgeEmDQFYch22ddMqF8REhBoKjJHu14A6HyMc6YAtwqLy4AzVhwoxjzFFqg3VMAJtuT2AxnHFJV1LPsp",
  "key16": "5vAmianAwH1UxQ2T23DfEtdGVYWyDjABJfK1GS3P97Qn4TZCdEKA9rEHee171kGD15TMwXHsFEtGptkYkx74q1kw",
  "key17": "2aApf21wsVKFfu3Y2KvWmMdJmeBWz9eJKnT4Xo79rryLzvnWYpXg5ReYpo5gxr5UXT5xw9STTWxiwGBMg5KwwnCk",
  "key18": "5ZUdKRhPebZMUEBvPhjHbCNjmxTkXffPM2dm7cDMZG5bgeh5GvtE1UzHjDfqaceyc8mN8FhQpEmj4JKYbj499t7k",
  "key19": "33QuU6XQ3yzixCB5azh2TvB57uzRQRqQiy1PudGF5nvDParpkhfEM6JSN3bFT6qYTj31KDmNoNpBYEPvWMGubPpd",
  "key20": "MjxMkZGhmn6A2Xr1cf8HCVpbxAvqFBa3oBKSf8uPsDDCUCEmRNQC3hQPCegZmbAkzByuBFdBhJYBpMopczBwRmV",
  "key21": "B7DdSxK6p3at8eXN9arGTNXiJpxhUmzgP4DcZZw7MNxqhPrLFrwjk6mvaL8gLQQuK11BMSePXVZNqNyjK327Ma2",
  "key22": "5pizVoVqaxjTtg2er7dMS6jEL8e1vKMdaNGsS4tKnSxSha4jQCo5GQuyhTQu5Fya7Ev4DsrtUPrrdYDxenxmzcR8",
  "key23": "4ypYqyLFbLsfXgGSG8mjJQrMEuMJvDJAuh2WTZv9iQ9Q55qmfihu1agBpFQuBmoR6zUTSws4UyhwXjucLDC6ZR1Q",
  "key24": "2kbzZJHMhgoXc3tLAdyLKowEyrhDZwG9FUFNGbgQfaH1mUieEQuX6HP26DdTY4eWJ7XiibV1ZYHvxoQyfRCB9wjB",
  "key25": "xe6nqfYg8wF1yqas3JZRaBRUYrfKfYKjaH8g7LtfVazC4YQo7ceVrCYGauvLwxTR85kLCUu1DVDEy7KCkVAAEmV",
  "key26": "4vy1Kx9AK8cQWAfK4QTZPgaj7d3VpoEdQqYYD5mch9MiqbQ2MCr1U2omfrr8k3S3U2ywRnwrZiquZSGfD92JVWj8",
  "key27": "3mqibfwDNZpsgJq6x4VB6pgoLAmifJM4gP9BkaY3H8oAc8h2uyRKHzxugNfWov4qPAXgC9KbSmC8GU8GoRoH2DG7",
  "key28": "4de5CNUvPSPic7UQQvF2cTXx2AGVFJBWegSzC7wXwPWNbG2e5XG42Q8Gkxnx7RK9onr9VWCNW6HFNvfS4YCRGrpc",
  "key29": "2yqS82uqvLE3GSKaX5n9yWjwWSU8U9pKAEg46rbGebSkDEZencNkQHn2o9fQN9Rs3SPggVa8aNQJk2ALdvLXwzpg",
  "key30": "UPjGy951bgE6ua5BiTHWiWzR7Sn8YgFxJDXaVa7DPChuudQHcFEGQcF2exLpdNsMfmuED4j8EH6k9HN8LBz4fNc",
  "key31": "4mu2gW3M74Y3xMhTpW28JtL13FmuSdYCvEsuWu8pojSygSAFEeqoa3JsR5ECcPS7AGBTCLzDdMKtuXo4WSCiownu",
  "key32": "62zTYYKDuf7FfUPoG6ZVuoajTqKqSCBVYUwPEZkqLuPMwXnCPKg5FiWkcG1UsnbKug1rMHZwRxHUV9dQiAkASk6m",
  "key33": "43fWrGjXphzfhApc74BCVAuDae44U2aNQAapHcFyqRHSpvx9RvZ7UevoKsaafeaKEoS2Kyb5HyrupiGuvnokPwzU",
  "key34": "5PFTHaDK2WVTpvoqhGMAro3BnDXzXcPwbXXjTxpu48mG2KzNY3B6o59YM1fafBded34krA8qC2y22HweVqctBcpw",
  "key35": "3cyxaRhEJ8aTTxSwaTiXFiLJo5roxMuyZxNFKTVKHMDPwmiRdDbdJtfHRNLAQ2wTj9aFvGcdK9JixL9vq7jVfBTM",
  "key36": "38m2NfefYJzNk9w3qSkTzC8jrWZRNsGtNohtHLmLoqzzKKbbrQn1H7mu4BqPFd8WcdnMejFp1MhqoaWdagHGhbJs",
  "key37": "THLreY4oHi4YeXaezZAuEWefMRmWbbTJtTxk8svrg7vVJmfCoL55JeGBdgMhfAu9xeCAtYNH9v2A2hpdy39dR7L",
  "key38": "Znpz5aW7fH5xVSdEjVP8RsrddBG7h3LLKbECoNXAEihFDNQ7QtTU7JMT4rpKtabqwgzcFhoQzq7irwoQwZmBJiB",
  "key39": "5xhakGTx7JQCfJtMfwkb1yoSr1Fy8b4XqqLzRqEgow7qvaA1iW4K9ajFJD6STMnSNGGuRprFMEYMrR6viBP3gtY3",
  "key40": "4nAViy1YcL4D27wZd9QAGbZkkeW5oD1HtUniVChs4n6SpYAtuPc1Ujc7NfWjPhecAUN1rPQ1iRLCWj5dDo7TRgWY",
  "key41": "3SnXu28YLfde7rN7ABUNs2Qad9WiYqfvsK7cAdEyZutGA8iDUMJjnyJw9DUjZwCcpcWVisQfCjYKeA2cJn94vzn8",
  "key42": "4ba4JQNF9Kc2XgigCCn4VDmVeotwhh9pahAm3adaDur8veptpVXUS6qFUd5aADBvqUQpK5fi9YtpFXbctgtwv6Tq"
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
