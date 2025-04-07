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
    "5GYSgouJ7P7MpBDhxGC34THZzmBgj1MHgQop7ZpkkCrjfRjgMxmkoDsgsti2Ruohje3Y83UvKP1UrNhe5EkfuWNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZvqV9ms4XKiHqQzoS8zNvM6NuPCckkbxV1DqQWpRDFrbGY83vps8FsvdBgigz62RG4rrAdeKeeQfVZjXPD7VtoN",
  "key1": "3WKyM7h7R9aUWD2oubZ1DPFp2qUqv38qc8B7kUMxKCcUV6t3LXQ3jGe6j4qqd4FSSKMRSnE2zptfBdq1fpRkEuUz",
  "key2": "51c3Dp2eiv9R76saqdepsYp3NZaUoFz4J4jPKL5hrVrZeBDVKHuvTj9B2cikExrcfCRHi8nCSpkeQqFdFVY1d9zd",
  "key3": "6485NLtef3LVQ8wGV5pUfDjgHSWaqJhYw2bJUVLaGgEAW5Dagj2H9Jbb9ajnExb9a6FqMmyvpejqNz9D68iyq1f8",
  "key4": "5z4jUCZanF988h3fp6pLMLFUmHDEV4o584EZkDBU973AS67GezoQrzMmq7gpJg2uhJhMgTFsFisL8foZKrcwtbcU",
  "key5": "mYFTEzJcha2PgLmFHRgoquUkcPsvfqvkJ8AxU6tU3aUxdo97r7EVVrWRE98EEwxk8wkw7qH8zEgBzJo6L1g4R1t",
  "key6": "XNo31jfcaarQGAA5E3j5M22pj6tPG3FJ5zFsrcTC9ypkWLRvruGDbAJDpdkmku6Lga74DNHWc9ByweAZz5NHhXe",
  "key7": "5VTAokPYBQoZPxzFz2V36PNmSxdJFeFcwhacrwyGB9f6ZFTr4HgpGdCiNLDXow6pf7Dyjg1B2EKtTnBahwiEFtRA",
  "key8": "3C3eQWh3h42VWhDqhYmDttGjhbfA8cVGdyz8bMaoZw3BFRdGwK88G2RFbSHZMCBvLF8T6bfHbc26G3YiMu8GpuuX",
  "key9": "565N3sScH18GWdKnAg9jXFHCjwWwHvxScpiENXJGWGc7S4GrmCamrdgHbeYtj2uHk5XXyotxfgR7PW3EUYkNFCj7",
  "key10": "VjFZE7U4nBjLgJfXCfhtCAcKw6cSALbGVKcbrygKyCDmnuPMcV5ywLmQFe31jydGXtbuFgkDN2hR1W2n643boSw",
  "key11": "tw5p11pqdspnhpGtubaoSFjZWxyd5CGezGCDfFe5wos5raDjcH2xLoxBm9U2dkQ4bTRWvqbWhxsV5nJ3UXL1ija",
  "key12": "4wc4eoAzDwuCcYVneLtKZQvv7Ey9UbdDdkhBpFiZHdQFVymTBLe5weH7GgY1gWmhvUW4Kjdj5LEssHdy2iUak7q",
  "key13": "y8jC17FbDESEG25ZNJc6CUmhhBo75whhqgsuN12je6ZTsErRdeHWDRjwYz8qK77q31L9Yno7Zpppjcv1idYTuHz",
  "key14": "2QJzb3gANXxEa3uY8KMc74NEJEW5ZEE7gV1BspoVuzkxvWxknyA9pxsmzYEKN86XDRUFNaZGN3WpKaNuEJN8SYg",
  "key15": "2ZGpCEHpUfh7to5SambjYRUD47UGkjd6fZwFzHoHxFFviXcDMdQ627kTN3fEzVWLnQBHigpQW5XAfXWcXiYbZBhy",
  "key16": "5ZgXag3EwYZB3epRgwa6KttTe1eBbokP2r6f13ZdAn4U38VVDXsd6eHPv1snnq4teLcRAsuAXqCGK6VjaGM54xQ4",
  "key17": "3ETjCmS3yzVTiL9ZpgXxMtjiCatY42XVDUi6Btz5qS3FwcBNEQCuutpijYK1Xt8XZxoBi6ysuQvfPrmSmPVpjMec",
  "key18": "3T9casLkxUojEm3Fi9Y8rbSteLhuCrCi4NaJoRz4X439aDDqxBvR2JHfr6nk2D5cYPo3VpQkFGmojgHsQcPLMxys",
  "key19": "4CAA4dbAXgUpJLHVpZYmr5PTQtVWXPi4HXXMJZYhS7BZHUsRiEx2gkYrDdTqNHt8PKiTTrP6nBximzRb293Q6vEh",
  "key20": "32FXpHUqTv1dqEzSE16Hat4t7dJJzxNWJTk6m5385wZLGeSg57QRCy81aDYUHG4mmoTiZJ2An5jW6QVR4UV1dpXL",
  "key21": "3knDAm5LCmXWXD4Gtws1Go57ghLR2aWSUY8T5RwtdM4oj28xg3P7hZftoNTEeZhgy6BHPeuG1LK3pWxK6Ldouk29",
  "key22": "gKV4ANqpbAmmrowunR9CcQaazT8aftUZh1Hc84La8iyvB5hQHEdfK57dcSjwak8TqN1Gc85rKa82byzj4cMepzS",
  "key23": "2MCuTXAEdeoKqCjTspVpmkkaPw6q6AfB6XL9NXSQeYgKVn4mMiBaG9pZDEPonKozK4H9dGJof5cXR91tLwQKqQVk",
  "key24": "4L1ae4q2Fyjm94XxeGVo7bDiqVUxDREks9eXAEf8yaR6hHy7os1XgkH8XGG4wpnCrRt4ojsUPyygsnbpY27M7bE",
  "key25": "3Kowxft2YMcyZTvhE1yhCK5LFbWjYDD6ZdjwoZheHsXG9EyQHY8UknS5imZXuHbdptTDRYCkfG8ZzAGpoWJ3of17",
  "key26": "BfLg6144W5mfcgssuc6T2FKbNyiXZued99qmtuCEr54zph74Rh89hDKBVATLdig8uQ1JkAnVnEJKyhABGjQyaSR",
  "key27": "2etmHVAQZGqPiaWT6n5Syg6LzbMZE2fY8AxMAEh2Vx94iv4w23qMf5PSJKstRADVVEbF8MtCZqatpK1Gw539DZtv",
  "key28": "212xgoUxbWczSvcvt8r5bDcKzgVzPhV9rDULGw8UoSr5E4uxkBiWTwXA61Wye9B6YVNFye9p7vg1bykJS8V91yoH"
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
