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
    "2TE6qGpcaNgaLDwZ5P94zx3D8uKCtHGEyKcxi9xLQDibAjxmEdpwjNWJ1eZ3hDQkAApiSWLUphifStnwhCu5jU9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSjs5emccKhuK97Z5K8hKhBd69LojnZKrkcw7RquUsh4vmd3RxoKeRyKPC7doMdg13QHrLxkN3FBfs2GwsXrLws",
  "key1": "XEJFTdNw11VGrkEXdTDxeXFVVDa1CHT4taKxDf6x4pWC6bL99USJBvGjwwLBq6njiEezSvm69MGptPV9ptjaj2g",
  "key2": "57bb8SYVvXwPufBu89D3YTdmUNuSAeFkb3DCLH8eZ6hgA6Wrt6fiz2JAkSfDCdkkMJwvtbcHpENZF85qy865EhQ7",
  "key3": "2hw5rYPWEdnDawwSGtvtbjKY2bePD5vfwhc8x8KrqsNu5cij21btnSZTxP7YYsEpxiyZYUp8mMq7ZDDpbgakskvx",
  "key4": "5ACmmY1MmcFn8wC5C1ZAC8M4mwmFbHRT4ku3adCq4YJn1GN3Dbccnykhhun5vqjAYLVbezJE8GrJ1a3Bqw1XVR9s",
  "key5": "4jqQnUBHcEDq5tzvAWx2sGcvjavR6BdhNMtQ7KbUYinek3vdYvyyyKEHVPjjnWW8dXcbuQKY8aDLnutAFin9xQgt",
  "key6": "4HDxSsQqpvLxYoEQR7t4sE98iiUSvZnyYHcCrSRd25YetCkSBDwgH2vpVLuVuWxNVpZLr5fAujGj4J5FzUiGTgjg",
  "key7": "2ByWADadmw81mWzTZFrqHfR4SnHyk2ZkfBkQoSKca1WGijfWdpHSTqchk14tTxAkZ8JJadNFGqC22og6HPsr9zWG",
  "key8": "4RR82RdiDwb6tYiEHLaZWGeERP4Pe3NqSXbXU7Z4F66eJYhMexkEgWNLf7YBZeCaG5iSyj1ddhr85xAmBAWDd5sN",
  "key9": "3nCdtViukHzLf9zVWewZsw9xC5RMVjTFAR85vRGDigDzACvMPXvThY2znJrvv37jWu5wVkqaJW3Ti7jfgwERcE9",
  "key10": "3y4Bj4kGvxrv5KLnNvUv4yv5Kb6bdJbqmEvUq4gQ4pqC9D5PTVB7VnMYb8C43GGMhsn7bdLDarQqWGG4Dyerny1B",
  "key11": "5B1Q7usKfLKJxnx5JA5rYmpNAWGdhqkF4TthtwUDpoegZ1xoM4xYq5U4BqCApjDtBDt9sFxVNjDQ45shKt4knsH6",
  "key12": "5ToiaquL9PARbVPT8tjoqQPVQyYR5jYC8djxrym9gFJKeKyfE13VSuEd1z89xY9jRzNLvHauzgHq1J13tXCjRi7y",
  "key13": "U8h8vt59tXgePZtG8SwBf9J8CVd1NBHCFst7GLxwKNz54ZmvxagzoNw2rESbZEKwRvbkc5P78VLvKauL1HWVs5r",
  "key14": "2xXGYcv45cn1dYeDqwFQr62zkdAHKWBMoBTop8KNrCcPqmSrNgmxEfvAwYMezZkHedjEsP7up1YRPR15CCJ51Ld",
  "key15": "2QbPeH733FJd3YNJBveAHFQC1mNzPhnMAiy6PPCwrkTxXtGon9GeTbB1iX3QvpZdh1knjWSchezUjFPhmk265cgy",
  "key16": "3BQcmTqrRz2zZxnyy1iSPuxWLgdBx4DVu8aGtgNFKWGRs8uZwcx65iXCyYs1DuSYuWicG5zBGeCNpvTXFBNnSLKx",
  "key17": "58gxJkEAwNvECVbKGnhKAYmXeCNvojy1T8ciWWH6B5ew1nQ4vYkYoxJuQiRLAo2WNrabupnpKqW13bhiom6kVZvK",
  "key18": "2smZug6KKQZVq6rnvf1mT7vkvoBrY29VicoGevNH6d4Uku6VWRacnDEu2bTdMmMh7667cwK7atdC3iBjukCvAam5",
  "key19": "256dq3sjn3eQyDdAg6H68eb5oKZfY1kL7GLLRjHxwnjpUASa1gC68vBNYyUSexhVCCatWwbe9NMi7DcakzCZC5qd",
  "key20": "5gPqsvaprBgMgJVYjLPTEeLr6EY6zmZY2KDdybEmdm1By5YaqmodGXNBNGgkbiksjf9gW7xTYzdqnss2E9xqhn8X",
  "key21": "3wtwkRJcncFPaP5HLPgGFWYJdAVDxFt5bKX79VsSUDeVqjD1P484gXz17mSW7SAip24XGrmGUoz6CS2Xwfo7MtAr",
  "key22": "zLo86TXvZV1G5MQdGDYvxjRf5QLLZWSo3wNkybFtTadgPqRxmSmNApd2VYFvTvAhyTahPwSDVhtKfHwrGkHwY3M",
  "key23": "jUaDCcKHoySH2VCavQEfS5pUgbHbnBGk5n7u6jru3oc5NVDpcgcsKiURAWzLfMeVJh19vj7z7D9uSvK7w567QN8",
  "key24": "3GmCMU9bRdXvnuWP9jVpLAdJJdKLqfJs2aeie5w4LmVNgCsa8KjQQo6fuNc71XJewrX42UL55bRQLgnHcQ44z7TD",
  "key25": "31oJeaxcj3tUZHMkTMpjStRWc7Ta4wjsM3QHUtmhYNkSo5Uouca1zcxgSARdWUZKwRtYcUBNPNvBZrJKvzZhLLq4",
  "key26": "2TpiwbNHnMuA3TtTVoW5Cxk7Moa3EonAiEenGsvUjqGonHYbXEpNH4Mj2eYUD9Dh6VJVuuXXaF9yav5avA9JdBTw",
  "key27": "23YLrxKuqZnvu23CZSiuDizGw74aQyyuSLaGBf4USJXb4KVuCWjAdgs1rSTgKwgavVipQxu9y8PRAmL7nHCuZyso",
  "key28": "Hp3n3hj3vgYTccpx3TuVUNviz97SDg6eEcXUnevZNHeDMbcZh1NpywJwjVLt5cE5UQan2sLQwtRzeGafjjaYAsg",
  "key29": "5QEMmnQKZRFvwf3oiYKKiUQhSsYd8yHjPfa2THcw84eyniskbcDiVjGeyFPec3kpUyxe767X3YNamrE6FfNa4dRA"
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
