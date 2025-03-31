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
    "4XdbTmB7mTND6tPL3YMxDSMTLcveRwBKDACdj9U9Q4cnpJat7h9NfStG3VSHFieNT4hfAmzxG4fA6oiGPB61aoPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BjABretF8CsibEa4WMqyowYGyBmCkYLx6rwDUieTN9eA1vahu5NKr7C5aWDXPuwGgK4Qwmqh1LN3kPhcL3U8626",
  "key1": "4BQLqtaNenxkW6x2g9nSWgmjXSwBL8n3vU2T9dADUnoNtYiTg4jxnXN9BsgTUGSJXxgryEa9buuBVvXiAbJmgs7K",
  "key2": "2vkHGG4pCtQrxjKCrvNoqSshHU5QLNwzJSm4uyJ734Z9Kuj4hza4GViRwrxMqJ2zzrtbq8wY1TGejCC2Xv8tDf1m",
  "key3": "5MSBkE6UV3wLbo1PLj2RtXUNZpfF2N82jCPhZAuPyzNW3NHGQU2bUcENTw7cg8fFkBNAEMcbbGPtUNA2Vet9n3R9",
  "key4": "2jeehf6dbxkDQ1vvn4VCJNCGea2TGjFQRnZaWyoUSz4kj3zEZSmEBYbevHZLKUps3afy73E7wF4qNNGCpVkUJybJ",
  "key5": "4Pi7G8idrZpTsQLxW1wnosmdt3muxGDhmALEsU1byQcsfipoUnHwaawfM5osPZmWc37JwyTXUvrtudYaE52NpjUg",
  "key6": "2i4bZv5aL9qxeb9gP1GBWeSeiFXuoh2id9D3CtP1n1qGehNNhauoxejkecbJwTK8xu68sHdvEfnhXNfatG6j8Gkr",
  "key7": "62kCGJzyEBzLT1nqLK98UFZuFBCHof1Qg41Ag9RrZwKLY9VKZkCLvaC3KkEZf4xREQ8UfHJy57GMzT8oJnp2npxf",
  "key8": "qnGJmF6fgtyGhgEaUq2UdiTaH16JRocRdYyM8uQfH64DijYLEb8nuLRo6dsa6bwsJnQVLYVC1qRg2HtaMWVqjvm",
  "key9": "5DiRr8sMPC3oTr6fp4LBR5D8egFXT35yVufmV2nsuYQ2H5Esy1TwPCLtNqTUTAhMXAo6xsya6PkbcdwxpoHG35z2",
  "key10": "2ghcAR8Kvi1pbfP4wGD8FmYUBqjnmfKRus3RGs6PWbnvA2sjH6fkV4e4QCuj4CSdZagcC642FQRKqP4PnqBEi79B",
  "key11": "3hguVKjcBgejC23nc8cbdykCth6nH6K43sioxW2RBW6K44DaUQdPB3j42t7FjJAoeTGTfPMHXsVGfumTYvK7v2wc",
  "key12": "3AL5Bbfc6AvyAyhu9AJ1xbXS8huZmFxS1zmXDHDtq3tPDTWZG7q9paQMmsZBjxdH5C38jmCQPbPHKdq2izJ2Niks",
  "key13": "3Awz6san7DqmiEdPC7jht6df47NcCysFUKqfL3829nbQhdicroD9jJBc43AzKg5EzVxMDLzVQdVqk9pBQrpjuMyH",
  "key14": "5YRFpuJxgxkHibj9WhdcKpAxe5VNMXWqmbiUyM2LmcXnbghvyCmEQmpMesfBZwKfz4B27erkiZv5YCh9wpTrtYri",
  "key15": "56FR9NQZUWDeNfkTc4T8MmBhKKZHv53byWy8KQrg7y4HoKADqF9bu1wDsJoRcXXJq6kwdhBmz6tcTiVUcagGKyBd",
  "key16": "2RNC22MU4oRvJpR5gTzpyGKfYM6jyAD8DggKu1uXeHfiiMGyKvgcoLCUWqvYDHEhcw16nCFTmwvW26zJPtEcihEY",
  "key17": "64sXcBs31RUj84tVQ6q99tpW19J5iXPppBvC4wmZpCQaRPkRf3aLN4iphmD7pzu3hpfDowGu8evUv5ASs1uMy9Vf",
  "key18": "3PkUKRAsRWrRqHFnhgeeoXReMs2AQ5Hg9RCRKziAGVqwDwji88MAEaadP5yxdz3rzvEBjD7uXdv5y7v2MaA3DSQh",
  "key19": "ZBnyGvHXKd87jyyoGvf6wgvCYfT5hBVBAQkf6CNvZzUqfB6S3cQ59WWetgbxYqHfb9GCd4j1jUzNso1VDmwmgeQ",
  "key20": "2MQ4fp9jBY7WJN2siwebGb8axGfaPovSSX9rULuxh97o1tMiVf7u6xA8h7AdpbV4ews6vYmiG2stZnnnWCUS2uhY",
  "key21": "35qegYv2LT39Wha49W4PL3DKyJ6X3vbrRtAG9B4pK1irmKbbDKeU3tELbWdyZHUyktG6CAayimF5gyCHFNTTS8q6",
  "key22": "ciiPPSKKVqi9V4DedHwz6C882d5XkXKj4owC2xTYkskY9NvUnkVc9p2xWRwYMk8BttwtdRZGFQ1kxTbMtqW8PVp",
  "key23": "5d23yidXssKtHcpqte54pyYWmJHhP3moQoenSsUitfqpc7Di8Bhi3xH4nLYrGnZg7UJZj1rX282uxNzLJCD2i6DK",
  "key24": "ki7tQXz16J4JYAVbAjVWPuVKxBkaJceKMAx2hpov3AdYauCWJZsHKZyw3Q4Vg7Eavsmt8Mv9v8Zmimpbtox8eiE",
  "key25": "4g8vxYyyzqZP61AC6Dq4jziNhoVGZU1QX1Adm2AR4zoyecCrqrKPbAjuC2MkdNcYnaze6oNfXVsK21LkestmDY6x",
  "key26": "42RTgG8teRpryusmPft73LMAkgTXmsBCFZ8ChnGZkJMPQJpydTPocm1Ecbx48K9dHunMcZS4w5yS4paoTm47TXKx",
  "key27": "1cTuBs6nQxFiMnbVzre4myY1YzbDvaNHwBqk9bYCejpMtJsFUGbTvzY2JGbdyo4gFzZ9cW8uwkfZ1ZBFuSwSkMr",
  "key28": "5B4sacs9VQFWyzzyP28TbDAjbLgPH64XYGHGZeyYpMauXvmHTL8yFemB5iwRtgWRjTxFq5MDqci2ZhX34aLzj6UF",
  "key29": "2XCW8kFmqVUdSogz6yRfoeZrJihB9BwfWDuRRQgomJoSAYrSjfyM7pJVitq66VtGJbLWBP6ZmfJT5gDjPzgWGJjK",
  "key30": "5hHwKchQqFn3veFWeJwtezvzKpdrgY28Lx9xEL6LAZAoNJV2nnSq6E9cxwa2ZN298ArJ4iFjef5yevSyii9rYu4W",
  "key31": "4FDh89Fxc7avDVLSY9M3CN96yHbPd7Bz8pLoqXY98nG8Ur8WFGMgBibkLSmMPGKXfCwLEtr7WgqTKUbqLZ73wwaq",
  "key32": "3K3RszvTXeBMPhR1Gpfc3sUmEN5iDAMnbd5qsLb6Z3BNHK27CCjfbZKkkgpeXtBSRdN97i5aqXEf2oqBFD2TAN37",
  "key33": "3mjcE4GDdLz9DsZ1Rm59M1c3HDmXnhj1GfsvC5CX1kK9hYEtPkXrgE2zBpcYpAhgqgQR7q4Z7U8K1heXRNGr4uE2",
  "key34": "4szkk4BeqretUZQts3MEnP5Yfn1YeNBf1S4goynC4pzThNsM7yxxrBmymKt6qzJQ2BvvdbKkyXiCN7uFnj6VWDLh",
  "key35": "5CAJVzQVBgyBXANQpj83R6m7W3xtGhPpj17K15ydUEJFjRKCpKmPqHvL8DWk27Hqit6vEnsCTQZbe1qXb5aAseE9",
  "key36": "3aym4rQaFVBF6G9bKqvJcEEuZtpNvtLKFr4SiJDbLKaXbq82bzYGMLNw1D8tqBbkRMnRoYX36vf8zmhEWG1stj1B",
  "key37": "4PADUGSL3eMA69UEJ5cgoHjzcnt395xaYxQZyJfTK4MHxrvyVhLyT4gaqXLsGL3fhUtfUUGyMGnZk7B1DFtKB6p7",
  "key38": "2jJ7VSHksgy9LmPa3qewpG7ieUerhSArTKbhMZPSAw58L8kk7ZQ9J88EbeqFhbYX8t8ckwphzH7attAJHxuPxbd9",
  "key39": "4Stoots6Biv6iVnMrHH8Rcgg81UZXApZV8Jh3oUu4KfaSrC9qL5dgVE6Y5j9kpVmwBbYiFs2JViE115ZPjmYEzob",
  "key40": "5pztmSTjpzfyyMrXMy1bEN49Qz32R6hUNGCjbYKDsqM5cFNwLJoX3px2fyauqyHqUnpmni71XSP9fEDpZJXY7C3P",
  "key41": "2LBZ93mkXN2BT81CGKS7rqwbiEJcUKQdwNEi9GTjQB1BAVTaLmqJyWvfQJW7o1Nfe5uBPrRe7ADeEdjFEV6itdSC",
  "key42": "41Addxo4x2tjYVX9bu35x7bsUvQvbrRskyTMGBipCw2Tfq2J6ThCmrymAPkHwx9Zn5kZLrdH53yvX2kdjRCTL2qQ",
  "key43": "4j8nUTz2PCS4VSG3K5x2mm25dQKLMAFN5S2YsGUzfAVQXzcDQCrPn2RfxBu7XHEnQCWrqaG1hYgUZVxgZR8kJ6Nh"
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
