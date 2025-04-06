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
    "4We6F5CRGWMh6TGkZNrCAMMsYj9PB4xn6XWCS72WwBgrpnG4ZCYhJGUAPXsahTUQU3oKN4X6LqyPY77rTnzEHBM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x27gFcoi7p7mAXpEzUB8MpEvbmGzQgGgPWfSCc5ERdTfXWwH7u3Mst5mP5DEagMsjrkyFfj5FGx2ft6RsWtb9yD",
  "key1": "2WKY2HXcgr7dviopYqMzUFWSGUbtaBB27xRvbN5fbEsnfJATuXYYNyAJs32F86MxxKg6gPhzaWYztnLffMzXeow2",
  "key2": "4RydrH7L2dA1HhwCKaWhTww7YkNbveadcauK5UJzeh4WR6NK5CLs1zqTuujkbQni3SfbNiV3NWsM1FEUqdDXXQfq",
  "key3": "3K5Y29kPsPkstJvngUWe7JV2GAfDs5hrGxVDFMR7w935MKZQdqcwusikm61n5npdeM2rn4VqrUqiyd7ShoERAydm",
  "key4": "AgagCG1kLezMfxgM1vtv4964HhWDPbfwM25ZHwvGW9ttKkB62fsrzgX59bhcQGSE5C6LKJxQR6RctwdDBWDNwyz",
  "key5": "cwSk8VaxbHaCUbKHVcj3dFEjjnQY5Y2MTW22oNyEXfLfhV8kdRaMyVWuNFGzkMbdTHYP4rWwQAWEE1svNybzdnX",
  "key6": "t8y6qALwaqXvVNBemLm27X3tY62zQhjb9frxbWC9NjTHpGGhGJoanFUiUiNXetAxWn38QSMppWsuKNLo4zg16ph",
  "key7": "5J7rAAKjNCWMmPSJnA2dUEcKWoHfXkS2aR9WhfM4g5w3n11gkwBqsQawvhT6jbXtB2k4m3NNEWsSMCdBNqdmFBN2",
  "key8": "umnGpea7m6ZKKF4FSe9W5W4hTPkiKLJ3gJMHgJ8e8zVdYq9E37wpu47eq1nxSBrSLikWAZQB7NFx5a7UDDoyqjV",
  "key9": "EM9pfMoW1LKU1CZSPrszZk9ZzYe2KxELVPbXyTShMi15hnT1zNCcF8ZSuv1AW9bsTNwtPGXJXPJKbNzY3GzhVje",
  "key10": "5cPKQHR1FN3RDYSgyuW3hQpFfke1CxRM5WvbbyCqV4H7YNYndwuHhLhoXrva9V7RUZGD9o9Zj4Zr358CGeTmMYVU",
  "key11": "26XYEFHanSz3cXFp7WQmQyQpDBBQMruPTxx5y2ar3g7LybHiGYwwAfz7NmixWwtDBNEmWZqsnB4tgRK7xPdwfiEx",
  "key12": "2Nv8j1jH6SdTSWo7uchfFSGtUgmHasnaEY5mkw5DtGFz9d2cvm8DNSGA9dpDD49BeqBPHvFa3N6eXr95mFWkiSRg",
  "key13": "5vrJVnr7SvaVP8smSBuAhw6gPLMZrug4HMQjuGJQYaQBBu9RoMq6CAwCKWZ7JTRTQD6GAJUQZJfeZXZFaWBcK4kt",
  "key14": "3cdoYYdj7KH2w1cb4tBpTNtB2K2YTgeq4uqotBWe8teZuYo5cxF3pzTrV5EFnqJvcK4DVuBgK1sxdMJjcNYs5jxD",
  "key15": "4hixUJahX6t2pAkVDhn6bD14HZ6nXku5urVEh9F5XwJvENhH2DSuB5z9BWdHUUJKoxJ87bQ7HWnJaW7khu2aiDFe",
  "key16": "4CQmZA3tkwfbUtcifcndhVDFr1TW51eXFiWp1DaSo3MeCmpRJEJnxws6e5jdVNAgv3rxAik18c3r6Jqsyrg9JEmV",
  "key17": "2hFYdCcfE1vVVrSVaGQgpc72MB6G5LZtXTh7fUw9A6biVA3nYwFaDmPBrbHhikHMnZxLgbumJZN6ujFT46dLVdMr",
  "key18": "27bZ78GC57E1QjfyCsFJwF3RzoBKFLEVpk6ZjWKbbzNENQq5HGjPJ3fg38vCkJCxZgwupzherpLTe7Xkgc2UtL11",
  "key19": "3WVk1LnAngan61Z5KgiCvuVaR4M11nnoFeLfULZ8ewEJmL3FUiyHkSEwARRUBVEnoEHT3DymG5jZDskdpBDufzeW",
  "key20": "4twFdobcFwd9mMt3jS7feEc3haUrtLRxKLojQFGSVZnMp9EDrhsfu54GNE3oNbCbYWuu4FFnCy4bPHoaR9RKZ39M",
  "key21": "3WRGz66cKn5aFimaD65rKDJRD32GQNZcSGAkqiqaRz7A5nbx2eiz3X54kVzhyUvcDt6zUbS9yBpJC3LU53dVKuei",
  "key22": "oThcb6QRtrzQznnfwBcQwUhAFBFq1Ju3yTavo4gw2YXqa6UkdPWdsD5pHMeVGsxgdLqnv7fWHHJWDd5KpLJs3wC",
  "key23": "3KfEpXZ1PDMfZYQRzywVTYbSz7t12zbgH4kKGxsfV3CN9fY9RD6S3g41Bjhb5VcZNF1sQVCzeBXtw7nZ72ESYAhC",
  "key24": "3Ees769d6vyFtCSMyGnqsBipm4anK7x3Dv5kZhdhreNxRwd6YZnHTYejyLq5oBmHS3mgX9Gt1CdLF383FBKDNMLd",
  "key25": "3bmrN7MnBuXKo8XwVsJnTnHhEq5zuBwT7Bzg66MeVHPXEB4rVPP4LDr25k2HFfAjVQZQDvQTjkJ8THS19RK4RzUD",
  "key26": "5NNSeoBbZudqo4PzVQ5SneCfZ4iYctSkjQVEwHY1Z1mLgLx7A6rVP7JgTQRMtpkiYHAht7KzxbLDt2JfAdTzqBDH",
  "key27": "3Z6gmvgh94awgKC5usnXoP3sfreh118xqyp8iaXD8aQUirdpH8o45z6VMC6inkBAVaSt6Rjf5Xou8YMNAnwLb5Mm",
  "key28": "2tedrjuHWCaq8scq2RRFEqdcQMBQNFDh13pvMW1Y8U2bR5BPCdGHyDaR7FKYcYitbuhpj4HSLWRZMLJmGgUxt1VA",
  "key29": "5kn5vCsz6sYzTAZNGDpFZgpRpF7y4x6AhZRr4ghivPGhR8sop7kVoSTqhjXP7mSPotchcuHEXkLzQTirhkDzPKxG",
  "key30": "2cr9QqTrRJJFCEHCyM6q586qBYAnrXdGWdZmej5Zt3LhQBYE4hPD6yAep8m6GKv3EEqk6utTGFCzNsH8Cx3ZNFwi",
  "key31": "5wLMbQ4CQ1eB41rUS6ZnmF5hFi2xm1Q5YJG9pmCCsYgNrZLBU5QoFqDaqT1StEzaB6L4wzoysmjcrD6pKavRCS8y",
  "key32": "3JGdnsm5MWc54h5kEjPo2gVCHPzjxi1sTm14o5M6Hca9bsk1JXrEQ8Dv4gmCdVfM1cAhrS4Btp1sPmUnSxNAUEQ1",
  "key33": "G8Lrm3Jt8VTj2wVWsNWWvw955qfWej24SXXyChoKzoatJYMLWpKvWZTedKrc7P8dLnMc1wcykwG9Ur3twsfTZg7",
  "key34": "58ECteGhQ8C9arEY4js7KzoYgJpTwxJC49ZdQm1HVwX1sWM2pi8gn689TNFiH1screeWygB7D39BFHzb2tYk99wF",
  "key35": "2jSMpUTMqKTuaqTtt98njheYsdQhx7m17EmuURxMLpz9A8ZxoDej81av5xpiJf1kQRxKKqqZpVdp45M7MaiZ72VR",
  "key36": "3y5RgSs5xN2nyujcTZrmWiXai23ocBDtEujzuB9SBwkGzYRMoZgbB49tEdRqSU1BZ8Uob4jNafeCHTkDk6nVTsFz",
  "key37": "5DXstZADbnEVMMTCYGRpnYjjX7Dw6ULku7iZzEb9ZC7DgusYu5mkoevTwdyPMFQALGqsbkyHFpMdRSCyek7CWRMr",
  "key38": "44wyAppNWUAytwFa9pktz7ZHzJMEADrSvxN69y62hNRJQKZ4xaDSixsBapSNCwGKMojeE2avUr89Qn1cKQufw6Kw"
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
