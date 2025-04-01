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
    "2n26w6xDbLtJ4a3ubYXnEm7JqbxPnQHjRGumK6AgrcCXCT9u9T9cMS3dqk3tZ3HV1BDfViJ5vBtLtCZ1LRrJZwKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsYrBurfUDidpHmtvZ9EdhiS1hXQi5B5YVWhXYCTGVJsw9A92CkTEtuouMvAZpDDu72Huc7gnajDU2CD2gvDBHy",
  "key1": "3qQCC1xEFEcsxWhDVbpQw2V14TD3XEE6wWga8SEBM2NwP7kbVCMVc8L5qrmEWvMi1STKyZAvpQ3gXYysRSZR2twM",
  "key2": "62dauU1xDijDqEa9fSXEZfYZFyQsusKhPyTUnamNyCARFgTM7SojeRzykTX3nUenRNUowVvT4zCCTsq3cPqzgyiG",
  "key3": "4BatzAnDEgZG3X4zrEhiW2N39V57fFedDozWwte51fdrtpu3nnUJbecCgpDoaFVMiiSjBMaSgKZQcjtfLtESTPNz",
  "key4": "2aHSbgVqSVLPm2LX8TxM4zBXh6RF3dG1bM31RDSU7hDieSFLGukmMCbt2g7Cmqdd2FnV8FLD4qxMqazmXzD791i5",
  "key5": "4Eto68x1JJtgCrgf3uijmuhdCSwsdzHQPV6jfYnE9XBYSkHtkTZKR6kXRL8B3VLvVScDCnD2aP1jKiYydBQnMzCe",
  "key6": "2KF3FSBtD3xZvWFbwxuKucQa3xautr7RAkPteQzRPRVJSLJH8b92PRzo7uL7NdVsEi2oW2J8kUJfvmVrf1dGvtxd",
  "key7": "4FpoZriAJ9B7YRdgNPaezgiUSdRdTDFomQ3W2xEYzyep7bNxfd3QRLfYCn48LEkfj1MxG5ce41P6G8aFqzRpDh8J",
  "key8": "4nqtQt7ENm6hQnSC86QqVkztDwujS6RDxwf5PtWoyAs1366XVFxMpQ7tQSwF5BzKRqQ2oiJUBtz6BXtBN5yfJkfM",
  "key9": "5a7rVFmHQeudBsEcBErTx1vj6RxTtUphqJ3P7GTHk8YWWTJrKey3gGkRFYFbHvEjJQJX7EdE5MHmMhgavt67n9v",
  "key10": "2LYDtcTEuBASFg2HxmLySKLbfAM5F4ZAaH4LkGCNcrVX1YRKhE47WYayev359HB2W3WADd5tNQygFSAgWTxMvzZz",
  "key11": "vjNGa78tXRHfiYpAe4ZyNj8pLwKgWRyrWSrC2i4PV5vo7Zd6V2A8rY6r7WECFqByNNYUiWbzr7senjN8H2GwWTj",
  "key12": "47zJ5yvEzUjWunfxrWhZHz3QLJR6nKR1uEt1ifDAnPdYgejXwA3PZmZjZwUWt1CQbXek2nokN8Dim5MBTRrcu6FK",
  "key13": "2zyYyv5XfJbjLSwwXzMePBprSx6nybayzumjY6A4HkBZfhqbR9DMKkBgkxpPuvUHhTcn8QAuHnrJL2JtH1WTjEVP",
  "key14": "4mcBkS4tgc8JiNcuX7P5E5iNGqTZh2JPTjjrKUacwWBwFpYHqvdNm9mmwGv29X4dji8S9Du19YMM4RkxAakDReCF",
  "key15": "3xLDrfwmen2HUTNbC3YUYfmiU4fT57gs4j4yrfBXeFVFMd2fgcBjBdkgqPC82YtXcDAPSvUxstBqp566codiBhxi",
  "key16": "5Aq58THRSFj1iW4MgAoQtfE3TRXiCeNSKBwwpD2NZUKkuvgMkP75tGKoHfmPENxdRxWPa6baohUVsZoxjEVjYNw5",
  "key17": "tDNF85BUBW9y5fzcsM12CDVxLmDwwgrWMueTvobPtTvTky6J7bZS3E6KQ4NZNdazEoqt4vH5M8AX4Ji5yXFaPQv",
  "key18": "4238jWQV2aVzpzARFS4LVTEu3ipbybzqiuznYAuivRZaDY8zqWx8V2DgMgVrNe9h9ns9rPikt5CBrdEmqjivfENC",
  "key19": "3Yu1LVjKoUX8A7hVdUW1rqXB5jAcjf4zdvaLEPr1YWso17Nv2S1G91AGnbsZLQWresbd3MUUoP9FEMvrZvW5XvVY",
  "key20": "32Xz5a8yQAAEetrstASjgVbLT5FuSkjs96SDSun5bCz9zC2awDxTnWcE73Zsuf33bCmUD9MXq6Hb7h4QPZEAdFAo",
  "key21": "5TzSjjtkgGoE5xEVcpkjSebmN4Spm28T4mUk6FF5am24nLEedBcHFDGG8HrhPdEURYFesvouL8YZoyWTtvd9xJNK",
  "key22": "5yrjvJsS5HhbCgwSuf9wApqhSfNpRXEyMa9MWGKx4S19SY3dSe5v3g3PaeFNmH5VugtwwHyvGwNdhy7ANcm7ymW3",
  "key23": "4FL2xkv9jSaopFZp3PhmYiMQHSpBYjbM1D6UdtrWFmTCoxGiaZnKd8HtbF86V8y2xZTb4rWURTrCzYGvjjAzefup",
  "key24": "5BpJ35fUkGDoTAQsivQssDQEzvUPsbXTeJPvAXRJAb4yDqcWJdwJAiGbYZQPRszMhasFZEsiyGhFhL2pysgBH5d8",
  "key25": "TjcXTvtZrhni1dFVQW36ksG3rC4rKXwdEiB6Gwa6DKEmwaLiLix9ZVmNzyFgB1noCnejbUuums3feLsixb1CAUp",
  "key26": "57w3wHuwEH43276uwuAghWVJSgTajRZ4fJEEu1GK5YYjkrwLvbWPFUGpk3NX7uoXa1rfpxnPmuRZA5kCmpMLWhLw",
  "key27": "zinp9qFbuFD9zzgAkDAcyMAHRvy4t8FHwBt6ar5gBBiZc9suHKAnMyJLvnJtkbKMRnXh9bQqhRvZbBJ1H46HDWQ",
  "key28": "2VWg5Kq1UAJADYGYqAfuooy3ZtLL4HS1rdfPcQwFreKiYDCWVbQjtn1XMn7tLNuM5xrBn2LbQTFCHT7ybbescEJ",
  "key29": "517mKb9hyEyXiRgG1se7sT9HzF1yd1vHbSufDpXMDuhfssE9uxZnb8nj3jqZ9K39bNHdbj9kH4LgRu1vZSBePGfn",
  "key30": "2fh4a8A3QQxJZeucz1ZuecDR7i41EhJtMSvn2quMj1YZjXLxAGgGCmoQWwAv7RfUba1ELummkMx1P2EwwXeRLX5w",
  "key31": "4vQVyj1gm1xForNia5EifGcChoTeDfrx6Th4dyKYiHtY4Vj8GnQE1nkbQG1w8CiritjoCPy5B7sEDJmf1H9ak3DN",
  "key32": "4ouCCDTuGUK4Cno1FrM7gz54YQUJ5EJqdwMLqTVnL2jhvfiFQWgAetgR1qGg715p7FCL5H2EbxJaNZvkTW1ryZwA",
  "key33": "3tu1an1sSgdMfgB3SxwNBFidELD6ZirZSfyw3jU5gC1etqHqZMhkZNJasPiVi6RxNxb12rC48TfV7DVW6uQnDZeN",
  "key34": "485u8KazRTx5S9c9SWEhynGxnTvwy5PF119CpEyVK1yHCroEarAW4NJLZzDgfVm9LAoiD1x1HmafeosiWprjVFcQ",
  "key35": "H1cz9dHReEXns6GsEyjVzWiTVcUXcZ1GSsxSsmRWjyX4y2J5bAvbpMnP42wCckMtM3AkEqK2JpHGu5zDeW5RGzf",
  "key36": "5yfYAXZ4sgKJc8kuUFt23A5KepirqEjLZa3xNRshWGQzbbFgj1pv4cfvp7f6ibnJyA51VQXzwdTaByvXp1Tqwf6q",
  "key37": "4ohR4JUjp9DEePPKk698qCiegBz1JgU8YgoYze24paCtaruTVhUWM8W7WTG81g1vHZbsxnJLW8BJvrMBJTu9QdM6",
  "key38": "2KuTLCrSYKVMuRfUEb6PAz8pwa568JVd7cTKJwEfM7RSFo3D5f1278JUa3fP6eETHpfxzGMKHXbXPgB5DBrxRH3z"
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
