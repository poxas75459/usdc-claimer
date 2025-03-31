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
    "5oTZ6aMWPBLy5jdwzFoCMni2usuWzW23zcuD1EVu9GuteenbKKq283DpWGm3pSJTDNAL5n1yWPXFJGfEJ5geBN98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJK65Q2RyWrveETGA1xwpdsTFww5wkMjYuMhhKws5SC8VsQoHoTKPmb39V2LwaMje1PCUx2YGGbi8btP7XBDSY3",
  "key1": "2urg2du2oYFAnRH9TLTBGg9i6nyXnSAAZ3J1BThsbeYqZtsuWu2aa6UeRWzyv3XWPzDLP9w79GbrWwTQ16LHsCL1",
  "key2": "24NbNwYdHb9EfRKvvYyzifDQP1Ns8hVTvAWP83Md78xUWpKBUDHry7MActDrZ9dKtzqsoyTzKu33eXvgxZu6oj3D",
  "key3": "2JrRDTQkcvKtpifpxY42cRWsGGM3Hr7qyJDTrF7kTS27brGQgKGYi4x4aTqdzoF7AdWwqZLmjEyMNbzow65h39nf",
  "key4": "2UYGdAmxEVUmhjDLtPHabBAmrRD1c57dEXC5jSMWYou35kuXqR4DahYbkLsnU9ULfYCEqarQpcctA2jihHBbLS7Y",
  "key5": "APzqhh9rpHqdzoyxN2YiYc1awqdE4LKEoy9sX14inLquoykUuYt6BjDN6ym5TpvuHAvHqNXmnB1HFYiJ5bccySd",
  "key6": "X1x9sL9aMz914HJoGP7fsDpYxCS1ysbn79oJv3sXAVUvvkXcYPh5dNUMv6DDcVgPPzH6JSe6JgQ4qJUr9E8Ph1B",
  "key7": "S2dAeNVrNegtkoCaMC4dtn5MhPYpKgrMNiu2sdKTp4KGMdT3FmXixqJATHSM3jRNXM6v97HSAZtsnDBYdHxWBgE",
  "key8": "4P1Xd7U4CtDpXk3p72jJ84TvSErxVit88vasgHBhDaMeT2UxqgeHNo79mMvSwkfSQJ3kSoq4CLXzfN38sUsi69ws",
  "key9": "5wAgJcCtaUijhdLgBo4EdrwwaXDzhGcCmKRdmZsihEHqtEuczHcxu7yf1cRFivEAY6C4fsVFjoGdwFbE89C94nzt",
  "key10": "tfkrxU5grePU9B9JXtT9CPLDcaSwyHL4M8PBH7PSzUMn9Em8WJDUkxjzbJtKPKy9bQtJL6jgVA9JoZFqt37kpdn",
  "key11": "4WCv7cMaZL8F7DsfHen6aW6z2QPYTJ55Jnu3qz8rXv8AQU6KDNR4m61nwNuoyFwV5PJP3Wif2ZdXehYBkyHDZdGj",
  "key12": "9D6wj7uzh4RmE8ZvwKKNAKsAxiMi7tQWsXvALFQgSgSSSAk47riP3kEF8B34FTs6s5sg6BrRW3HrvyRtDkTqV43",
  "key13": "3fnPJrJno97wynMorZ9pKdxqKT46r8gkEEFuqPSV4eE4BdW11jrtXozGZ5Vjd2Nw7yj5GPyEtzre7izhtNVMsjLC",
  "key14": "1HmqH3NDXavJARtNphQhM3NrA59DyNg4NfjY3t11BwcXTZafDdarJqM76HDMRPAeymFHj8RqH32if6zfkHmsvYY",
  "key15": "5VZF8JSFXDme1V6tHyTpySLFprZnjbniwayYnhdEu6yYrnM42rKcKAxyyV9TQTnRe6JErB5QqwJtHWFhZzLvUBpk",
  "key16": "3nG1dWHywfzrFak4qEkjbzTWZ3qmFwHqErwksAmXU8BgAUxt6xx7g94NoxwWEksiibmWypXDgoFhyfgZXfrvHeRx",
  "key17": "2ybzfrHSQUuSPfTUn7aREfsRWbxqrHVsFoDq69FAJXC5MQ3ixVyZuh5gQgYVzNGm49WvJDfVv6s2SzuzzK2wLKjb",
  "key18": "2UihAZ969JKybD6uA58fMZQXN1pT6SnZ9AvW5juJgZjNKBsXZraDqTViCstZMGdWasxuFLGc75WAZqj9X3oJYHrS",
  "key19": "uKDK3eoAERPz4hBBBZ6JgubtkQibWycGdcaENww6XHsiRLeSVaPK6ZvJBp9GeVLGu82tUCtCsHc7QaSaYbDtQmw",
  "key20": "LF16ycp9RSHLDnEapxKMfgdzbrscbpuKHoxv1JeTSQzzYfwy4Y6Nou2jir5eUaLFffYZrjm52ARXa74q9VW7TAc",
  "key21": "59AcdUnHznYQxdZw7aRgK2aE3Z1m1gfi6mx9DoBaCafALTUhWA5YKN2DUTuQWtW5w5ys8USepVtiTyoA6gj6Zber",
  "key22": "2ZGjJrxD182XzMebe7ouFwbGoGo5GcRZsho18WAdZ2wyujumTsamStxb6tnW5bxUc2wW5G35JotBoFudYWQ7fxyU",
  "key23": "2jFrJBW4Sn8LdhLVEU1mh5ybCQoVQLP8ZpTJqXPzethZnpw3Cru3Qa3YJ5kx2ucB9Ne9Rw9PvPYApYk5cgrhJ2fZ",
  "key24": "2uuDBTnpCmjhfNTXnfw2oXvpxAf7WQorNd1eCatdTCteCba7fVS499pqUah5pKBiUQdsnKjqATxvfyo5AD4dpB5v",
  "key25": "xpeZaQZNy6296NEknANLd6hXo9Y2cQfkfUMu4sZG62DsoMjEMDnjVb1KhmYxkG5JVMS5WkAVGantVnXC1DDoa8c",
  "key26": "3j194xf1hzcmD2zGsfKgo6kruPscWfby7Lk69TQHbhC7b3wfs4EwbpvXZhzragfm5FXRZbx8TDqrhVbjQQukvLXH",
  "key27": "2NxHYkahXeoF8AX7ANPSb9WmSaf8rbxzPetwXcc4h73PPhuToZmiqfdfqqRA7wo6Xqwu41VdcG3ZVBf9fpapVAHV",
  "key28": "KwuDMEbjX7Kus8vpHao5SvqDbRdy5d7ikqxoESZoovAD2ED2sZyNkFZBgeqDswgKTGfrA4f4vx1vCjmskSr4FoW",
  "key29": "2SKomjEZA4qzhcFwphzmFkjsAFG6zy7eJCxdyKrU24Ykvg4j8qpdTYpYpwaKxsUP3ffKDFx3XMyCeSaru3KrPxND",
  "key30": "4pdAPErsE9nAEmZtvy8ukFgtymTqMDUjkv7ethMp32CkU8N3TmB1JKPhXcWZmH34fbguZJyqDGiywMkaQ9cVGJii",
  "key31": "4UbA5Yu1dVQBsKLV16qYcZQQsnAYTVLg6P94Dge8jdH9xj8GDUG2LtaKr3foND2gmAws3ufwMLt3D9FzyT1ZGvQM",
  "key32": "NwC7ce6CpMToUMx7hX5LzSgCrVTWnaL7d4g9DVatPf8f3Th95GdGYQNjx8wGZwbB2yeceLvQBJwKM4DRm2LtXFi",
  "key33": "5qTno6A6gTp8wHPERWwuyB3CAwDpYZsjxvTiQ1LeJycdCSohyfMN3Gy5zqKCbdqjUs4FBbaB3e4kBuWEsjRh1Ji4",
  "key34": "3wJcoHnafkXsW7mPuGJag97phqcNGcTQVKtGhXmqWRGxfHhYvRvF4FqWzzmMBp1t9eJQb8amietDu8vMXK6Z3MGz",
  "key35": "SpCkTZps1HLBV59KbF51snhi6C5oWHv6MnsSBokUtHRCo68SjmGxTm3FnRXMdpPrAN7dpx5dBaWhKKFr8TztBx5",
  "key36": "4YGkGVgL5yUYEYcbK46CfX6fbAXcRBUd6K8QUqT5LPFWTBUet1cUfRDuWLSR1MSpnmXgynSKaSeNvKL9LhB29Xu9",
  "key37": "4anMs1oAxYXKRUjjsLVPYJQpfZZMsYBLg2jKdGUVxoMy9gGAuFjT1NBuquGhn8WrYS842TkWGyHE1wWL619D5xQC",
  "key38": "5pCJ2moKWvJSMbA9AzuZULXiM2KTaTaXi3hpoFj5DKE81GFXvKc7Cmppn5BZbqWs1udcusXpzDUPU5HQixBafYYa",
  "key39": "46mXjWe93vBmu5PrfkinGRsgcqmRZMDEEhhgFuTdZbWnXm2cX1Hj86wTqnzCZs7L1hcMYMpx2ZzQqVFT8ZMMLoit",
  "key40": "2HjH2Bz9hP3uG4v3DgtdqTWie7uLExMzUZN7KjkfuVdCPUtYMA4k9iZ1K8VKmZwR3ui9QxjkWzLKf3ENRubNJcGV",
  "key41": "3qpgm5aiDUL785cSJw7eQNZTQp74KU5B4J1ACUsPXRPVHQPfeTMYydj27VwwuBo5YpcX6ve7qDmVPvoa9Ww5jiaX",
  "key42": "q5cjWGZeV1o1vqJPs1mJeVxHWpDFSYiafwDVqeSp6Ggp4ZWMmEtSbbTg4azr1gXxaV8qYg5TU6USjZQ1jSEKJvU",
  "key43": "Nw2zSi1jnxx64ZFbyxxP582iHdqggQvUKPmxyBqLVsgD9BZibZKao1mGatbhU2jzqKg4PhZ62sDLgUZyxtwkSAN",
  "key44": "5aETNjvBeniARx5xCtkXdUiadYjmqZtmynk5L2RVevm8XTxHALw2FcAnQfJKNAzqhtXXTKx1HEBxS8gSUMfdHezk",
  "key45": "21B3Y71MbPX3uc3Ts2VZr4Yiw1FjF5mQcY3XnHmn3Y8Aw4SpQtTDLUE6Cwbk6xhT9jJPKucJsnQNWigktTxDqGjY",
  "key46": "3UShiSqYsg2R6nDGsTejYrvFYzY6LvABZ8owdfmTdDJzwzTufAjPTXVzJ3XYo91EyZE7FCq4H8dnkuvLsbntYM55",
  "key47": "4XD2uJC6Tia4N7fsxLL6Ejj8Zw8xaBCd9NKR21QtCNWSk3LJFYc29pqdMot89YijtgPbKJqFp1m7KjeQvrRHzTBq"
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
