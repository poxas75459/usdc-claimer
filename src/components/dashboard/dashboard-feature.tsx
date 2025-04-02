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
    "3gyDWLnkSYx9FYbFVkqpnSPcz9DfpUyBoVgqDkiujsGnm8iBrAX6xDNQaVXnzc77H3CAo3xcJb3DyaCWrjq63Bj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDXDA7Bt6zG4UBFrAvMQKCZoRFk2WchctSQq7dpsV318d4gDL7tV8ZNXS29ue4RCo6grGJjaxRxDLcsrRF8o7jv",
  "key1": "2C3GKX4cEFtPQXQhnKbSHhLt6BgXtsVaZFGeEbKNCJ3ngR3rKnhDXSLLSpVxAxx786xSnnAA5ozXaxWDNmGv9YtN",
  "key2": "2QiqjWGaXpU2wV2Sr1csXvrRS65Po1Wz6YbHHEgkmYCw7no9h7t8JeynUJnAP6NBCTSWpBJiywP6U3YLm8mRWGb2",
  "key3": "2NjLwFtVMvej6LhzC8SdjXPmxF77bYz56zWT1nmpxiMAVPS1vXgMWMr8Bcez3qzxrUHV9cHqudAavvqBfRYXcx4u",
  "key4": "AoxGUbCivtPYDiXj73ZhBqUvzkw8GDb7D1kcMhyCR1KxKiZiuSswrLEyr1FgzBXi4y97SisQaBgETFApjMuAB6k",
  "key5": "4gdQjqDTrbxuKNLZFj3vMjmwxFmj3SdpVBgZuVu2d7yocuezzt7CZ64gvKoNxSLZVxXj5RVHyPWREkpY3kfdyU22",
  "key6": "MyQruUfFoCPFoQTiA2NTGqHaPGMWRZN21dyamhAKaXxfNmJNgnwaET92AKHr33Ljuc36ZYs1hLP3vAoDPth3CCL",
  "key7": "23TUb7xubAPAh9gPduyF5Jv9fhwPotckzpvfPkrKWFypQUDjbiJt3L9k2P6Hx93W6r6MfnoB9An9qqCrBPjF1QGX",
  "key8": "5KgFHjFhSaZmjWAW4dBNQ8vnavPU8Gvr5Km7474HieRMpiZRVoSYZ5PSN3dutGLdN94AZoaB141Ss9cEskxPH5jp",
  "key9": "7gJsdRVn9jaozF6TNZy6qpJGSXLoJsCcqiGfnVbNgCQtHpoKxVdVAMozzWx2YmcHvjEPpuVn5EuY9q4mXMpovQ3",
  "key10": "5d5qY7XdYwZvjNWEsR9nhz9rdwcjvVJ7StK1xCVcBPjhqyGgn1LGrwsLeXpvRKgvNuPuGf4MFqgStpcGtaDXjix4",
  "key11": "2hphMoA7zP4T3Hw7HydwxctJg6f5XxB19xmYxFCLGQ5xo5zxYwMCzUu9HE4qyhnGqwWAaLQUNMfiGNBfRX1NWMfv",
  "key12": "43nkFNURhqnFYCiaxQdU8c4zhTB1FqDkj8A5mR9nXuyE5sHdpFAs2iLVUM3LQuXrKYEzsQEmagSNtR3jKCLoVAzj",
  "key13": "5vdAu3pry7w45iLf7PXby8kRpq8RKMYG82yN95YEiTqEwqBppRzB8JGAQuzkEPiyhoWg7XRmtxt1umjLActcEXkj",
  "key14": "F1zHabvaK8wxYMdnRNBn7iC49RRyEuSv7f6gQ4eE6sNUdN7iC8tiXUy1vYUMVdyz37bvsDUmujoSfCyQ4m5ds2e",
  "key15": "4ikMGLg87z9WBHmu2YCyUFzEwLFDF3wwmVcUh8xdbv9AWxMnU2BGECcrgfBj1584QxEGTpitTwNaCmDPxyBCZVTD",
  "key16": "5kuTyanypmo6B9jyMCVKfsSXx9wcMhU4bYiifwVYWCdWMRr13XtZBcpj7uX4tX1xB372dV2rwAb15qBzoXrTy8j7",
  "key17": "4TFAcSoSsqpXPEy56KcESBX7t2LFJYRGEerhrmGJpocCY7RspzFR1LnvJDHrawbYcvERDhReT5V241tQ2sapY6ec",
  "key18": "5x2anLRrcpyBWavE9KtFzDuoLQDghZmmmQd2rMGhTDqofBSvBaZt5J279dts9kYKJFJrQAQRPfVGAfRyNqcS9EPS",
  "key19": "3Bx2VSFSSFCTdSirPNYXZSaWvhDimpH4F6YE28ggQKnDnzE7aER5cZ2DbrGoCcEKZzn6N6c5NVkwKVaqhUhTHGCL",
  "key20": "4zh98fcqZnrvxacHUNDFYVNZdpjqZhFR9XcS8NCCK9KNXRuCbVk5PG2ruEa7KUE71ooSY5LrZt22NxYqq6t6G6Y9",
  "key21": "44oYZFEfRUYmNZaKwcAXLV6JqEdz8DpKUT5PwCgAGStAwctttytUXRZ9Apyv2eayc2FSbDPCEiArB64vUkSkU7QG",
  "key22": "3AWJa38s97KCsi4m9QJLu5CjBaKMPr8kHieAx8oHHXHcysct6n6ffg4pPp9yAk3G2oV3eVpcahkNnejBWWfzuBEu",
  "key23": "2ZyaNeUJaDESnAYJKbQuWEHb1nLkhffpgVUWt4rzUmHfhdwwBgxtGzuo1a2e63UFHLmnnbyrCiQyyxMfUhoVRHDb",
  "key24": "4J2BQ2fibmCanz5K8PuajZUd5Nxb3LA9frLWbTtHesEut83igEVi9NEmnPwN1BhbiYZbsatxS3vvimR4PTtvu9xo",
  "key25": "2qgMHbcEwJEudFJns4p9Kw2Eq4uUcqERhw3stRFWVCyzQ8QEc1JuLwYrNAN3a6XojJTm5FFuF3Ya6hUGSKnAn1Fu",
  "key26": "451k1qxJmNAgrdjoTh4fbGazp8pzGvwevqQRRGqGEAmuYuQnYSvLoTiRoT22aoTcLUjvvcRAadQXt99SNnDVB6pL",
  "key27": "2Wc5d9XkwUoM5jyLt1sKegSapxuAu2pQcGsLXx9sBAMxaBVtsxRfyK8kpLcx74HVFicgjm9Rdwyp6pdAtnwwzsD7",
  "key28": "4hF6hJrADpgVyVi8ZQcdrbtCFPT9GY54ZT8V5wKk4pF3ZZXAvqLdadNqRDfCsZG2irn3JRGs57xo3pJWoxkMXH7K",
  "key29": "2pez7TUH1CcKuWC134CKTvhDgpH6S92hSwcwn7c2sQM6eQfUXux918YoEhSG8E7L1cZKx28dKiXpTwLLVYjUDqUG",
  "key30": "5fVN8eDsN3XzhuB7d25A8oTXkxCF6VWDGVhscHaKaSPkihM5s738Huqh1mJmQtTbMkbniJH49a8BaB93D86WteB4",
  "key31": "55M7euVXj1UBGCqSgrrD61xzgPuVausHXgavXY539AVVetpN539JrqDkzH6FNKYUakvurun1TiLxjxP6B6EoqabU",
  "key32": "42a6DrP2zPH3eL5kKC6DbXCpdmiHEFcJigNwhudvUzNcEe6drqxW3mxotTTV4pt9HWxifMk6876XpPzMS4NEDL8A",
  "key33": "2eccBf2vbzcWcHnZ5yK6trnEK7Kkbbx4qs3hjVigoCiQqn2AgD9rBjBQkDEBMCxp48j52n7itg7krVizrZXb95CW",
  "key34": "3n8wBS9FC71rZXBLPqaaytE4gXihvgE1WcJ3awwLqmCdhiANSi2QM3P7k13QnnUh4EVBhrEkbVZpMqCMK5V57meK",
  "key35": "2cVc3hL7hELJE5aUuZxy8jbXuvKSPyBP1LuHhDCJdK6iHkU8KrrXq5zstqUA7dPNLSW9fFGdykwuUKdMJY8Jqiqq"
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
