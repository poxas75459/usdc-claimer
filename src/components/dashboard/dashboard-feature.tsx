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
    "57TXDrR6TnJtFPNrZUEiuuTL7JtspWoNHc1Kbkt9wddXH8jfGx5QwFJZoCoN3JTSJJzva1PpUCJMN3RjKr8XGLWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFXW6bYcqbDjTbndurv6ZFTmwRvp4MmRk5optVif9x8F3WoZcEZ2gECa3LoB79htkdvb3Ai6zx7P9W3Vp77BNvf",
  "key1": "5rmnucB7SgQV6sWKWg38Rk1tC9V8qr8yTkkkS8LiL2bm8ggXo4sNvh567ytRdCM1jBnwPug1oJcJcpfTGJtAeqQq",
  "key2": "2GdjA6jYKkViKXgu3qGqqzUnH7wNP7J6GyDyC8sozqtdyHFChF1c2Gg1qM2JJCzQVGPaVbVbExX7TgXLUSYBSrD6",
  "key3": "2SeXtqWa6SYYMWomDNCJMi8YCpkqrYhjAHvGq7wPmZQPAAVwSfjzU2wbdsYekniCe4EneqtqdzcyNvghVvrXbBFL",
  "key4": "3Y21rBnwY9JxtNfuAs5zuGG92hAAoFgmPk2VTcfPVv5MHgP3upzaqG3d3Q5XcHK2Yngw7mZ2FruDjYwuDC7pbQp5",
  "key5": "3J2ya5rsEjR7RFK1RuQkCWVcKJQ1UWohxY7CJp6JPpy9unA4ZrdahsGSBkE2b7kUyLNQF9PYbPr96CqQS1TRsu8S",
  "key6": "YkRb2hWY56iUE2JhbSSiNvfQw8E3oWdACgnj9gEaCWvtHhzQQjRRV31myfuX8SX1eYfGt3KNk7Q64FWoaBrekAD",
  "key7": "51wGcuqk3ahkSmksgRCN7Zz5PwucSCnQ2fCNCSUTCcFGGE5ubhtCrzGBsEkXgSnMgYKktAmc73azf18ZxCXmyHWo",
  "key8": "2t54RLqAqZbhtiW9zFTsk29mjnfLz1CGgJqij7tF9EduXc6vJAcbQR5pL3cxvdkRYpM99rWRRko9p7ogiWyEki76",
  "key9": "63DUh8NYNUsreDdExDagtaVvkVz2Be6z2VCvqBa7H7h3wHTaKR2P1EWrWriGUoaesBDEyevrvyfkagTk54WUAKiv",
  "key10": "ZHtQ7TEMEXWrRWRuVcgzi57G5fYUgMsRfs7wyH4ab8v7qfyYu36CGNvo9bLoEDcExKAw1nchwXgmY1kT2Dk6MxT",
  "key11": "473hhRV9wyxih5BD9vbZRXmMEzQFgjgLe3TiHunrKpi5DeEgoAAdaztvwVZyB5Rn9ER1nMVkZDzgzbWrx6Dc1SkG",
  "key12": "3s6GGK9uLmekMoqeRa2iCRMxXs3mRc43wRsfU1Fui3HCngWLw4qbyUuDYySDo7mSjLxkoGyoW3HD9tJTTu3dMkV9",
  "key13": "2G3dPoKaSQfBfmCF6gZH9qf1juoYF29TDRAL9Pb4aqNH2uFr8icMMDm4yyV5Yk21mqGNv6A1RmhuNwBnxtByCQ4R",
  "key14": "5yLj1cX98SoPJ1QGVmt54KeVwxoiumLkdJ58DzCWsHjmD6FiwTRBwBaKqx1dmtKi21Bye2c176fUowDHu3fDbReC",
  "key15": "YDzJuPR7S2UZtMb2YcbZmLYbVfCB9k2fHvYctPgng6MnTmqpzhuwTtguD833vXVYdM5y5qfsvQ1FezNSqUjnEX3",
  "key16": "2bkbji7osWzpaitTWT3WA99PZJHajf9iMjKjmyTCcKUS4sm8y5RcpyMXK6WGYmJCV6YTMzdQDS1wj36qRuPognCm",
  "key17": "5A1Noue2Bh9ySvQW1Et2Mc3pVBrg8vU77BRDY96cxtagraTRje2WTSRZJPHPfJxVc7f6cfTwkjuA4FJbZ674a296",
  "key18": "3ys5swXs7Zba5e3Qzw4VjoqW1mTiqHzMX9kV5Ho6EHFsNEJWfJHcL7NVuPLhtnNxfE8C4C1BnPHtx2V9ScaR3ua1",
  "key19": "4NT3VYYgQPgPU2L6Dt1cToMF1LkUWsBwHJrFMnLGKCBoaTNNT3VfhGChdrQ1Rm8fWYBnfssmA9G48Vb1Xc75C4oB",
  "key20": "4Vcb96iXpGgfzEdxQ78gv3Mjgyrt7s5H8GhxcKz2vAmfkwLpTcMFrun5ixbDVutmXbeetUDs33fKfhxAj2NaRLxH",
  "key21": "2xDGiU3rSGxjCbuk9zzEKcNgHRZC49dynBVXMuChVYcparbgBnPNsWgiAHUGnc9nCu1kWxJxUB3Smfg47fNEFcLH",
  "key22": "2X5fRGT416eciTGyoQoes7hhn9egtHECzDQ1EvNRDEZc6ipTfcqciWS4sMzdvwp5gzcMKrauyBP2REJqBirweRPh",
  "key23": "2mBF3aVuzyN8eJmXTNZwq6jCh7Y6W17uhViKBEN5svmYGwqzBxFPZGCJbTwc5KmUvtcxDMDnVsGxApiDTgGGN4jM",
  "key24": "4STQLfyqGbH7MBniW87yUULfHJdMdoV8vVQiHxK3XuanFopd5dq8g2swJmgT6ehRz3Zc5FEND27KRBh7s3pouj4H",
  "key25": "3PgJ7K8j92pmorkVgYVpqPttB1XjprMBTpsjjLtcWJt5t2vPVob3Lefzhv9Bccd1bs5sjXRQ1BSbuVn62GWnW4t1",
  "key26": "3kEg4W9ag8VRwK2G34gQjfHwZFyoRtEZf9zhQuY4zfoShPfEiVP65Pn3ibZBNBQBeGudU4djRbGFwDJn7NBVBPJD",
  "key27": "67cK8xcjoTjowrEkSapHwvP3QqzuYLRnj9WcMcJPd4KEKTuiHkPbYX6Vr9K5XvoDTwzmMjPYt4Gj9pqH1YEnroNf",
  "key28": "4ZD6Tj9mjn1AtA9RrjAZhTBCvWeZuWhvCXoTQvJiPCNDvkQSotnSuoTC8e3ArvHAL7buugYptSjt4bWrii4b58WM",
  "key29": "sQ1w1LFsX1kTvYH7nEwWbieFwPYPBiSkBEeFFmsbKHshps1yRfdEZL3sDkDZoGbDNPqjZrMv6L4ctvetEAsJGfA",
  "key30": "26fh3za548eF9kDXfA6RxnUX5ZrBnNXM16K1mDjVGyw1bsTboy8CQPmb3VvXtAvN6eW8zBBLgVY5EPEunmTSADsZ",
  "key31": "7i2nJznqvb4zTehwKSUrmtSA2Wa97Nxt3xvmuGB6oBEm6H997yMXEiX8krp4auDkC7WUFcym5CVL3GaiihoNLhj",
  "key32": "5KvzehPimQvXWtzYX9eghDKbsbRAPUJgxmv3nt8r8FdFGTYXKcjHgv7QV5fDPVgzTuatdiZpAtVuzrZ4NUutG7u8",
  "key33": "2NFFRmE1BdPwpcLDr6q7K9JJVoUzrcEL38bRqqMfSBBewzxiozimKdobYyBVtYF9KeAzGKmPq7eBoi8KrqbUQP3e",
  "key34": "QpSf9wgH6LJ927R93es8AHkGtm586BeXPic2jFUJ34iJpw7giCHatoEp8q4cPxKQ6p9kg94A38ciZ1zrdj6dim5",
  "key35": "5a3aLG3x9t7o3GWXewznacDuFmHsSmoeSfrbgoFDuwGj32aQjY4MuJQKT8fTKBRusuQ2r1Hv7TZnS5fk6hckaCeV",
  "key36": "4ikkgbhWZvRMA6mtaUhkb7AYvYQchAsN8FEyH7bubpu1cHueaD1euvmzPXift6eZNHZ5qaBoXjysvKFYADwvLyT1",
  "key37": "5FPu2aBq7WkSiHQvkUqrFxL2QAF2ATZ6VtatnczWMQT2pxKS9Xxu9fUn987QaeJTdodbggy5uJVNVzEdf9tJpMX1"
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
