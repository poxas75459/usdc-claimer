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
    "swFpy9EDqqPxRgVnroXLvQaHkdQYJccNTXg2msRSWxZfBTNutF6NnKJdUsAfbZ2fbrAyWw8g9ZmgR4Z4ZfezVxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZhZUbSJZHminaPUNy6EguQFqiju34XNZFsqo7EwNxr8FZrwq7mkXAGTS8KZck4hBrEJQWVQeT5rmFeVTBjaNjvY",
  "key1": "5KkXZmU2gbwuSesSHXcBiRavUtsE97HaWWXhKytAqKj17Uj2PLGmzHXm7DqH8XiPqJJGQncFMLULRJX2rLStxSFF",
  "key2": "5ey47xinYLhLXnmHTv4HQ969pkXTJDgPXpLMHgXhCvWgeyV5k1AK487qGf4ZdHr9kmn5A4A2YYubrAZnKitEzDEV",
  "key3": "62vgHZ5ab665de1cmTDLXDKS21EYjyBgDd1E3iJeK66iG4VAWpNf24LWM3JhjHwQM3gWFERzQaqR2hkaTZ5etWxQ",
  "key4": "3AkJhTysZH99ZRDWXHTwz9dE261S7pmA8EyCTKKLW2SgDr4fuYnWtF9TkietVmmdVUhkh7RdaQJX4Z2PoMa4LLwb",
  "key5": "4jmbkEGPHah22XH5HnRr4Wt1BBJrhiyaJpgKk4PFD5EmN1acDpnrrpQYd4m8ZNQ5gyF9psW7nFzBxk83DkPcE7He",
  "key6": "3N9Tne5cHowVwGmnuXEBw58SzwX2bZAvz6mBhpKvDuibLTUDZyA4LopjW9Fn8K5DzZKkQrJo4HqgaNf5YLABmQ5o",
  "key7": "kFL9BKVtbheThV7oroqHqiDZEf36JyiHVozVxTE8EuurxZcTLhfftw7K4thoPTtWe81L7LwJTA9Kg2VwkSaTSMf",
  "key8": "5ThV1sGTxSNk3pt2XByBgumDze4K9zZQaZQe3Dv37eEKGbjhFSm6kr8DQQ86xysRhKam8diBx3xsVFKxiFsGsqxy",
  "key9": "5RVoNEw51cx8agU5pHarLAnHrT9Y2hzg1u4SyMbT7w4cy2qAqa1AikfEQGxj64L8KnFobTHsyvnhMNuMaLb2woWM",
  "key10": "2cqCSjByyVCGWPKkiq7cKEsGChQLSiS5qu1CxWPbjzp5t9r7TSrbKv1SWJYG2vV8ZY15aa1XeidXdXzJyhGAprzm",
  "key11": "3jEtxrRB5ZXWam5Kb1774kq1QLYK4iQi9UPGNcjbi2EY2Rmq4Asac6659Jipc5gFBXMP1pEGa4y7LDtqV1N9eNnS",
  "key12": "4xC5ZVz9MXvDuPpDBfLur6CvLkfB9i6AshgcTK3McstUVuSR5rKTYYe9PYWjTvh5Y9mwWStNuCMBFCE6WX4dgdce",
  "key13": "38b9MS8qzP7Bc1GK7koR6M5yg8yEy3RRM2fcwU1NgvHVeZLaA7tY1EgUTjxxfwibETSjoXQzPy68UevJKpZZytJW",
  "key14": "3ntQKea38BsGu6vNJyKSoGuYBQ1oH2mz1j9ahs5R5aoUyRYR7MuxoNWQCDJpQ2M7RhbpR4tMLn7VY6GwFWMCgtE5",
  "key15": "62NpFi3CRceyZzUPEosipMk1khLghkwNSBgxTudgiDqrAxpXeo2THAx15LCnzYxcK1giYbJyJ8qKRmXHKxNm6Cau",
  "key16": "5GkquDMk5ji6Ao9rBGyPSRFUBqdLbEDzCuhKe6CYccEeUs67MABn6wa7gLaXSu6MAGx2NQFxtnmQznkKc7RSCFSx",
  "key17": "36sgwpbYCDeew7y1tiHZdhejy63jYQQWGirefMpASTpHALCCHniZVFa9SwKcwtQvg5QKYkY8egUZxZ8XmPmvTqB",
  "key18": "35rpUf12GQsoSF92F1Yzqxa5JkwEhKPsUEM4bLEk9eWxSPnXZH7CLaAATqdEnttj2qtwj9czADHJowT5EGsHYjrK",
  "key19": "2FdPTPavDRoobJRHyLdWqVuoTnAf47WWRthr7RmSBuDVX4RZmPjovGJUqHwxsPzL7PUvGm7SuKC29J38RUvLASS2",
  "key20": "42yBNRnb8amMc25GR91XGE5HDVc1Jh6jGpPycMH4tVk5xcShvVAemzPDJ1RRPps6xbogXmntz87xbHqftHJEfspy",
  "key21": "2LLKVEzimhvXaVhTkn1J3vEmdbjCrV5ZLMiunjLDMMc1YY72Q5UGkBNi79JXDbhmxvzs8W4XwcKJXCpyokqL8o4x",
  "key22": "4xAxH2L3QNH9MkKZ8NPco1xdj6T9agH1fcDN3quMPE6DnzjkC2MVs1NGBYVFK1cpoRwj78oc7bztDuPgbXYnVVH5",
  "key23": "3TBCLdrFHdBz68tiZvJW2rW4HwEBY2YvkczBYNGXHmZ7hJrLMfmxWM7syJU3hL9Cdq5DFzaCwTnZSNd8Xv5Ko1pP",
  "key24": "4UYVykEevXZrRxuxjGAvA1niAhrL4BrZSf2D2xAvQG416YQbkY1deRneLVyZdjF13eyVsF3CEhb4b1LxKjQHnMts",
  "key25": "4dhQXBT31mkPV1GNy4iqqEcQrMG4CwzhXny1aMPjwiZxufHstRE4KariNwj6J8VLtkro6JurYnvqRYWb9dDNbqLL",
  "key26": "5LAzAk15vy6CNBPL89RDc2UL55WhgyKavfYyFbkg16fuhfmyMXc6rTgiGk6kzyWi5sLhxwQYaoCGbPJJYAqrmusq",
  "key27": "3nwTfHgSPVnwF91wdJ7dYC9ozvGK89QzB4wa54MmBLZXADjUAojdbCuFfctECiwuPJSso5fjYZGiC19ZUBBcxXhk"
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
