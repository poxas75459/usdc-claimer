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
    "64fsmfzULyWei9wzDm7HH9ArsxcM2TJY4V7jruduuUbJDVaLG9vj6sYbTwN5A8muUjyvXYDXqYybNB9SxW5AvRf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J2L5gC2F5hVmL17BKWqNjTubsyVSzWR6brzzS6JsPxZewBMA8taHwFhcw1zc5m3tnxTwvDo7Z4JXX69ZKHH5Si7",
  "key1": "fb1c5Yvog26fnWLmnYBqCYJfjCTj2HrQzPV3Yxj7Z4xqfqTmAzGeZqnYAUPr52Dg61MD4K5yF6xebg3kZASHYe2",
  "key2": "4csDUuQ6cEcrVSzhmqnmWqLUR58ajG9JPcDSi5Mvw7xfUBiBxYXWGrdh54YknZbC2uXnBY7F4Dbu1a3wfqnVcii",
  "key3": "dr2BRQBVim4V9PL4tyk3BKkYd4FtTD6m3vM1bQGXyYJgfef6zAQZgBKNenP2uuYYwr8SSGcj7vkSwYXNszJokhS",
  "key4": "679QWKBAHcMQAEj2QCUUNcPLNdrMWAaGNF5Yifc8HzKiWqdfQuXkoSVJbhQBZzmawpXpXeRQDCSy5NionZTtVNTH",
  "key5": "2yEhGuqF7N71u8UMS3zmj9qbSWRHiNUok9j8NhoHfU2wkxpJHVEjK2DmSvFzo7mu4BPtJLAb8qQxzyNDZVWJ5kx9",
  "key6": "23Caf7YBigPdpPf8PRbpfjTPEF3CruSRWy2KCCYGke3pmgPpuWnuSicMAikKVRKV1ZRQZPUxkdDSHT4AdLetLRJf",
  "key7": "3xJJNnU78y8YFF3iYQf7ViVVh14eUu22xU98ZkFGi3FTQgtJvTn4iuF28L49QiRZuxR1fdU5oSGhhsdUSL2XebqQ",
  "key8": "T9JivVtf9jZJfsJH3EWoxQfT1czSAPgCy16hoYwsgLQfKkGsEBHCDCU1VvvSdkTL665pEqi42ri3UbBvsvDfPRG",
  "key9": "41s2zrQkqsNpEx7Vyzm6t77QcGSGiYFWeWi8SZ5kCfmRm5gXdHDzXvD52kQorXYraYnyRt8UxNFSXuiwi7Jys851",
  "key10": "5ZuZeKCEKPPCkiWPLa3fyYVSNm52rzZrEX2whPEM43qDqkuUTfqhfJEiQhvyufdKvj5TXgGCxDpnSSSExLePgnzx",
  "key11": "4cuTGVS9Ur28YwLMd6MBxEFxZkJoBMFRWr4yMRHFQD54KouFfYtzmaFbfAk85tRMSpiJyyGB2pq2Z9c7TEChqFte",
  "key12": "aGvdKbi8Vu9ZM11LLRsTBrfEpUTtaiB5PEUoFC841X6EefRmwMF1qGtecuuH2d8qXgURpyLMfkbmas2S2amnWiR",
  "key13": "3Hhq4bQb7grHcTcebUFbPUgBrGNL1pesvBLrJK9NWzn44yqiXyrGS5k6cuG2Fz2kV4yczVUrsvStNaJaaBTRbKat",
  "key14": "2c11nRAjerKUj6YVoZE5LV9ZXVtQstCN8p9bv1KQXSAVpvrgUJbACk8HTMBFJSLD2WzU2FQtMs6DB92CzUjRbepv",
  "key15": "26DCcehLoKMqnoGGGuRpqUW2Q7SLgb8Sj2FUXxHkZKKVfuBrtyQEqrsb6v95Ffg3mC2qcGCF2EZtgv6QsD5FvuiV",
  "key16": "5LQde2U2c66AjmcwGCEussSZB7vv28WPf5YY9b8HK6CqE1zjhXWfXDnEzdcJ5rFLa3tJjy29AxsZXtubjQ41E8YW",
  "key17": "SEeqZNhVr8mwzfW3XLSykFr3ZkrLkjXrh5r6AD55c6RERmtAJUuNGYbso5MQdkZGAVNCwkZAvUEbhoB3QrZfFB7",
  "key18": "2WKvv7W3ag9XrakDqWKWCn8fr7EGizrmcH3d4MvCUKgeWtLFUgozc1Vva42WaxNWMJqYcKLCP4b8PHMkPYSFQ8Qw",
  "key19": "5jyDXddvS91ZrZomjrwPbcV457aw2tVzAPEJwsZXoeWyXrSMijVvp2Ee16fQLA6UR7HjDWzFQ4REgav9NsqJch11",
  "key20": "3kguw9kcLzzigpLRUMYoYfsSZxngufzWhLDKWo5FjwajjzzS8QUqr1xKVAyosxcxb5B4zgJ78fc3cHhFgamVTJX4",
  "key21": "47LL2PQQrU5UjiUzTXA7MmYkoYDdXoh7JCaB19pku8PwM8ppjt71wiN2bTsTxGCqoMXFdrymaRUvBypR7EkpTxbD",
  "key22": "272we23kJeNJWHN7UY81q3f3ZLzmais4gqhmBNtkWoJSVC3jvssmVHQHjS9ZNBoPa9J5dGzHF3689pkBJEi6ibXY",
  "key23": "2d8cjyo6LKjkrhN7aB9yGCiwSqWx79t3BDK73pmsgyHxfVGUXdDeVRtVHUZoGxYmxR54pHFws3qgbXEvpy8NjHT9",
  "key24": "2h8JAhxvs1iXS2bPKxCdHiZX1fUuE8bqnfP61tZrR5TaY7b45fVAGtufz78j5ajRp9F2w4VmofFR9ZT9bcmechyu",
  "key25": "5y1BifJbd7295oyEe41fA2xAxRX5iKAd8qH9CsXzWQq3T1xhybjt4hJVjMpz9792D6MR7yCLPKHQ6gtp5FxuKy8g",
  "key26": "433Q2jYEVnktg1zdWwt9V6bZ2osXotY1BnyEppe9xqLZ3cyCyhUGt93CEBxR6iPprUWkrwBDLsTfFqcW2BpCCYDL",
  "key27": "2isegByiEazEH3GYhLaDgPt4kN68JLfTsz1vcaZrBjDzuhzY9m48Ncy9B5c4qvi7ahGozdqgh1Xe4NF9FyL4RZA",
  "key28": "3tQFzvrizr6Yz6BmPz5H78eNbXgoofp1DxfcsyPqAg4gBmYZNZM3tSwqvEDwRWsFxTy5qkGvGPQn2R4H71UYuMF",
  "key29": "DWG9i3qHf6B3W4zSDKjS1cV3fW4pXteYqmsx47QpHSbUvSt2TRwCjCCX1j1orFuB3U2pCrB41rE7YeMEqHMAihE",
  "key30": "3JgKUQt698QNZm6tEshQqe9XgAaehd2zczQxNrGyPTvPbCk3oVHdQ8fyWCu4K7z9sZyhWSiQw3vfpL2335P2Lof3"
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
