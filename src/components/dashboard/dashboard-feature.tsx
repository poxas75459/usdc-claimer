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
    "4hqNURkammdzi7dH7vxMLeJSHQoYwoV39hpzmXyXDntCoAAkR5Y87LMyaDy1VxVTKhC1ZitQ4JU7TzfbK2hUKkXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44K7xksGUA6aaNmKCChMohVQYh1S1kWZJtqZj5ANCLmKg8ad9F52s1dPAorwqZP765z1YLwJGW5JVEQXyxwNcfV3",
  "key1": "29CgYgcms2soyhzPKpYeMs4uTZtWmsmZNTFNpyZ4kzTH5PX2pAPmVcCKmFNEzDvKDyNbHJ4tVrZcpMiS3ByfX3jV",
  "key2": "5QCuNSTLHVdZvhohKfyiZYSTv8VgeLHxEP7CuXmhZSyXhxnWZVQpyH9NPVf4oJk2YiKvfCnjotiJJhW8RsmxP7QH",
  "key3": "n6AVNTSSSQtbc95eaC2BumYiZaspSypfZG2zBpnbZZmj6kkMPFCfpHS1ZYcKCXyM9Xzq1zwwwRsnzwAuk35yvnA",
  "key4": "5Mbr2NzPrFdQFmyJFCaSofMxuDLySGKGxjJaR9YTar9gGY3atAKG1CvVp8oQRVKwSAhCyNRYBjtwfu1q5hDV65YB",
  "key5": "2xGoX4vBLZT3VPhFk7buDEp11EMDCxT1sx89mxGP4zvrSHtP8R2C2B8ic32UAS43HgYdpZwcJUKp1MGSTAMA7cKk",
  "key6": "5E7w2etZmrax9fuD2PDryxXBnpwWoyYpRAxWenUbQfAGnRttmFUfrNjUe3SE8orbTc6ME8NjyJkHk1awBvhHXkL",
  "key7": "2jSCKTxdh2Y7xmXNKpwXfSpVAKJxDBAUidL77H2RxuuhJikwN4YkfTk4sp7pa56fPSKdPTFGzREYmN6mfHdQds2W",
  "key8": "bCk2ctWkP8Vt7nmkoVqtSEHk7rmfZkF7BRV8WeXgd7Rcakv7HKNDFXGSAFdUzHpsvugX8kNRkV36jnGWTUNh5rC",
  "key9": "3vqWuc828EKYB9wU1cUqLe2jtBLPmsr71U4SVD3SBoXpurHVorFpwtHddD45LQ7KLBUrBj3gNTX6UX4embfUBUCw",
  "key10": "vGidupVWt4tJp4jVVwafKGNZQU1w6AZfWC1yXbuHr2aSNdQ89S19nok8fpHACsB5HmpLrb2UgCDytUn1a3QrWHf",
  "key11": "46UtjToSJfqhmC4YEnEuocUi7zPehyae9qvrke6tkeGCwPTu2YkKZ9BUEcCE4rraysuTBGDJwripVpW8PPRKpUta",
  "key12": "2H64bGSKxZLXzk2QG4n73fLE6u8rAy2Rx5JkJ53rHxG2qtbPz4thWBiXfjEonpx4onwUTkbRpuFSNDkzd2YfwLBf",
  "key13": "rvUa1QSLYnEhtCK7m2hnvAv8v6pVk4Q637nZqfotvTCRVz5L7Cwy1uKZ7cNwmeCuYHsPukdN6dbQKoeZYJyh4S9",
  "key14": "HNMC2ZgdsB6oVkGwdexck5EaWFP2b7ZaWAdXwj1NZnXR5URXj9JwdWNuZimgNjBHcsXYsModBSAihUSEchhDEjc",
  "key15": "2ZXsfJg3zQkDfcFaok2nQCag8KP4RNM9egGSaZp3GkETnTB637urxbzY42o8BFDoAcFAQvn7jVTTb2iAE8jRfj3E",
  "key16": "3x88dvmuTXnJeaZ2xSi7ivwbazKcvBMsM8XBuLFinxxsw4C45XeGFeUuX72HW53mt7Pk6V1z9NBfmGuNjATuGvC8",
  "key17": "3dy9N8R4WKhPRt2aezrTTuLWum41M91QgDvGbZviEkExJeYYFkwSaLUdVEupDDPU7rTu33XSvfJrf5bidJfYtsqC",
  "key18": "3msW1rHYKa9YYXomxpVpVTi6q5oatNziwvfmNecY8Yd4A71d25Q6o46r7XsF3vf4B1YfrevQ7k71RpTp28BiuAVn",
  "key19": "2qE2mEQkegWKx9Pdcn7V2e2aNFqBhv344toXeXLj5UH2APxp2ZNTryyHXEPyCu39CGqFc4E6RZLRvjkoT42rnCwH",
  "key20": "4Jc45VdBMBQSTvm3FsdsGxBa5ngfk6MDYy1Hph4kaPGXfUc6XKorvP5b7j5wPkU5CsFpVgWB4yW7fsBYwjtDRRaK",
  "key21": "2e4A7JEv6AmXVjtiqgU8F4QjNpFxND9UDq19SNQ5ry6EcS25A3yWMDq7z6TBaPZtidm5KsmbQfEYfCPMxqJdVBX5",
  "key22": "ZGJ59sRkB2f4r8vo6aHfAemH4yxWaxDftVXhxu4eMpuuXwn8uyGGevMsqQ1q5qkdYjz4bZBmCKB1zkfieF8oLNa",
  "key23": "4jp9ZSNJ4ZhQUK22c5AhhZZUPdPsWAQmcTw4MQGC7AbSX9Hv6fzPVE5dZErbdAf4smbTfEqFwawiqJfcgPCHdtBu",
  "key24": "SgCJH9WEFcrJeZ3mB4b8VPLHB3hDA3kaMLhceWmPjwPM9LCT2L72pBM7KV3o1SNm4Lh6aNDJKuEsi8Kp4fqR4Pt",
  "key25": "2BB6fFaze6EULCu4x77hskhbnNuJzPzbDRK89rgPm8FKEtVux8L8cUVxiLLzjvUvkkRGVuNwSAKt3yDdFtCULu5y",
  "key26": "K5Pw6SWMqbALko87JaF6SPeCMyX6CxZzLFdpQMuYdmVsikXgUFHxFDXztRSZwKi4iU7DuCEffpJvPFY2YjJYuNG"
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
