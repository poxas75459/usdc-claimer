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
    "25dcLRA8Cpafe5nUh4HLWcg2yEqJftdv1DGWDZu4RPythaX3efEiBpXD3AaiuR8GLb52GvFbxx7bKE3zkc48fCP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GutrGKweE6yBJc3eeBrhEkZWtxfieoL2M6Tvi2Xiox6xyXDT7kr4oSz3f6TS8g9wJ1KQt2MwYswAE4idPLdLp2o",
  "key1": "5nub7jD3ro4QCMQgHYXaCYk71WpVuKdPHDqnjU33cNrtwMTv4pkk38XrMF7J33mvbvQoZrVPoheW9EUrpm6MU8zp",
  "key2": "5moQP7bLMb7EXXUdbzxgieaZbrsPdLEH7KjnC5gRRbq3ZAsGhhG8nsbYm17vBQDdCqD8qFEjnfQSvFhFopPsWtfV",
  "key3": "5g6Dscku13vgBeRRHHkU96avGTjRcpTXvFTUbbA4SmCpphZXGgsD43VErmffXwWQNdhuXLGAbMkC34YMCQ4rtMqy",
  "key4": "4uBMx1n31HzamfyGGu18fhtcVajfzyP4U7FvBA4x1UkY5kFAtaoRppRX1sddk9BGnTVTnar8DkUFoSNu2VyijtBK",
  "key5": "3LyJb4fmtozLdAozsxsfZLz8croyi86HVgZMYFDUoCWCjFipNFPpYK5c8oM5RbPasFETgD1nDz4oEg3fvCTnQtcq",
  "key6": "5pB6s5jtfyAcbNs4f2pgPhcfeM2rbuXRGU13JSbKpFz8xfkNbKVbB2QsuQ9AtMz1naLhxVVYEN57vvrV4QGuiL55",
  "key7": "5C9ShQGK8VvDn8CmazejEkRGSn7SnC7Qq2mGyygGzPXar9LULsN9tF4KnGxhtuzyJj2Vck6WvV9R7Yp3ybyzFtdE",
  "key8": "3LRytAWpnGxt9FzzHeuf8Ngsa36KGdXoUuxD7uwufHioX5DzyXVwFW4aSMVjNnpNx3Ro5BL45uDpNY3CqNw5n6m9",
  "key9": "5BTM2byNaCZTKsHrkbFib3RGsEfJbiAzkD5wL6NoTPKhnvamyc3xucd1pNMykUFi6Chfh1DPio5qdmzwy7XkNWGE",
  "key10": "21dXFGiNd13pKqqdcuX7uFEXDRYrTJgGmw4yEzSKf18o85L1LUZ1BiUE41tv6dz6TTvBb146EkW6NY89DA3ywKn9",
  "key11": "4zhua5seuKPosDczgEJpjHcYgZWuQWZwD6xTm1tnDtjQiXpEpgMqMUsRMLrRV4zXNN3peDc7Gzd7KHhprynSvsdx",
  "key12": "32bTxTRzHCVhn676KuQr6W3TwqPTmJaNFpQHn43fAQNy4mQjwDz3ZofettFiUzzPS6XXjQdhUKGTaBLAUHT2woXN",
  "key13": "2ywRkHryHsD9mG8wJSLodmYmJR37dwLwNroSU3ze14NDaGXmkqArVVaViAuMCY3rcC8Eemda5KjkK178YxSatiCc",
  "key14": "3ocCr9UpZxPuhqcFACrTCEAWe44K68n6BbREM7nUvAWm1w6hrcEBR7gLihNAQhNbwaEubhUSCfjpiqaPJ3QK9Hph",
  "key15": "4hbLwUs8uw8r9RyMhrG3cv18P7EHY53NYL3eEczfb6rDsWY3yyendkoX1PCoDKoarDmXynfN1PMwr9ebweU5FydM",
  "key16": "qiih13WxcU7bMRQZ7pi3zkvjjyLFG1mmmWJPQLKfaYnxgQgyps2HW34bejwVtbLLtS3GC1D5rGFvGxVGeHJdi9u",
  "key17": "5LtDsJDqYFm464qhvDM9NAGQb4mLGbmHB9p4xn9bGsVtAtwqgFDcdBijFjELWVEhqKbxhXr5MDQFN8kdbnJcCM7D",
  "key18": "3XMjaJH6LZzkPcv6GCm4AyfuDMB7wQMWneUn1pC1xdAM7cLqj9QeCxQnU5ThcV4MA2NcKSxg83UQFVvdYHbhCqcu",
  "key19": "2zV42hQHo4eGBuYi58k7mbeGmCr6kpiWEjYZWkGyp6k3Em5FtqtJpy1UjmdFm9SG773CGQYKTm18dca7VkJzN5Pj",
  "key20": "ApYQyedeC6Jt5GBui3NARCfvbybmG5ZCSvBEjrQ9T2trXsctkty2c4JJc2XCt4Nh9cLSn5ENNbWz38kEgML6vcT",
  "key21": "3wPz3X9C8oXJYi9V3YKG4gxPSMG3T27yu2CfWFak3kzF7nzamtizay3i9C5j73rUKDsMrZaoAVsACHTDjMiRDNAC",
  "key22": "rVmcyiV9pwLibP2SEJQYj9NZeNdvn5uqLQyN54kpmcexNoDfFdsVpYfTUX6A6CEnvBhgc5sZ8XU6FZoi4P7SZ3z",
  "key23": "5ySGE5kBL5eALcyYFDjPj6bBRbbVy7QkiK9GS9wSpd1K2ve7Q6hUYiN8oLRKT689Lvsr9YZFXnNVmVXaiitD98uk",
  "key24": "3TLrxyMNCAwj1WjEvmCYrMQDY9VxZkAJS7WEgeau7PnxmtuJ3RCrJ5vec7HFpvtBtNtufhdARKEQJZnNuXfqzaV6",
  "key25": "4cgPrLtNJQraiJNE2SZi5yk2NSTo21BUcn5PDeSnwJji1Uroagf6F98vjvmT2YGgsmjf3EUr8xJCVNW3LgFdcm5R",
  "key26": "3F5ZM5AWZNWA3qmz2E8uFxb1VZ3XyMgntV848cKHxRHYTvhXi1vBcqHfFWvCB12djKvLyTcP8xc6YSVAFBEFT1sq",
  "key27": "4cFyzgai9JyiVW43BvtBWSjy3wnkhkdbAePVZuxhCMdbh2bHrU5QpcfygFvkkJ18jqnWH7mZzfghHYDeCxp5132Q",
  "key28": "5ZCvmGnaAoquTpMr8EeF7zvefT1PhW5K3Rwcndn4PpeoZMpNs8uG1SvV81ruzzACz6JZQT8TnAnTYEVnSF78fond",
  "key29": "4RdH3hUTKpoLZW8mFkFUnqvyLSagknsu8wqMn72f56p1eSwmdZuWcwwRHhoitSNvsHh9Jae1eQxSjMLkK8oUodyT"
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
