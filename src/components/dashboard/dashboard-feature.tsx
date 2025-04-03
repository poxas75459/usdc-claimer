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
    "3KnwbyjczQsP8jDkmHPKznZ87upPsjvUNb2FFBd9xGYnkegESsAc52jjAjod3Dj1GEpCzdguoLsQgV9uJForrmTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWvtxVcpoMU5Rj8KwcAbRao81z8PaiEornN5xGzdU2P6QXpDxAanWj3AmDLQ7SvJosixaizyKKGg2w8VqAAxzB",
  "key1": "4quvbaDKiggYtyuibFvKodQNwGJrafqz7iTkjxgaQPYHXWjkaQzpe5gLLmX8oNzHLxuR4YoszBJzpL1kr2mTPEWR",
  "key2": "5u6eUAUvyM1RAPDNpchTJQnJESEhnFHqbN8djWjjoEMWFfTdivGG4fLQxPJkd43YLdFD234m94ZTsRNoNDEndrbX",
  "key3": "5rGy3nfw9JR7jddWWXAdgf5RctWAbLdweiNfK21crSWREbBEwJWkGXvRUrbQnCFsw6apfoAWTB7Awj2NkS5waZag",
  "key4": "5EMzJDU9E1ax8oq4tChcSGfbMyFxeNaszbm6oTg6hZCuU6eXhySHWCW4CkNNbeYSTz5mHi3xMuXjPXF1wRuSxm6Y",
  "key5": "5FtU3oWGTSPbr5nYYcHiphhEfShdidcS5K9wuQQvTDuQ6SQTEQdHmLGpToUFHydcanLJ4J6DwEcKZNFypLxDGRfn",
  "key6": "2pPT46k1FsybDaCCPwBsH4ktBqN2itCyuw2T45z6xetukhg7GtfKpzMWLt5LiFrcU9nY9p5ZAaUUL8nBFsVq9C5d",
  "key7": "3wE1ChYbgx8gjh55UESv7nezJqxNsWS6xqH9s6wMXt2HyHVweHVKUkX6vMbTR8epee48hwkCjksHfDwtXWjjWk1t",
  "key8": "5AdTEmv4UnbejS62Wko9HX3xwMTK8TKDYrquV5bq35J6iD5mthrALgVD2tzh83yZZwMT9q7mLPo5AUegbHRwxKpf",
  "key9": "5LgjnVoPr72odQkj4pJCmTw5YZRrWuL5vKXrMG8gmv2btXkWUoZXENZtS8wKTQcCM8VSHWXko53Yu5Xhyf2J7zmM",
  "key10": "37uz5Ce9KZiFmcDa2NTrZutrSqpcCqLnfbsakcZdk9XdxUNPwX93wnPkvqDL5vnMkwNSe6MjAw7eee3WYGLBLkje",
  "key11": "4sRUZq1ggPFmGQaSFi51k81rbb2fNghkECiDVqEjGE76edzLmgF1dwvhvWzwyuH1bDwGVPUuVpmrfFa2zqiiuehX",
  "key12": "4ZnHQFLpAWoHBGWNHsoxioEqYAJxHWhZg6LUMDLcsytawDC77k9jBrEa9qubJushdCHwKgLhS5BKNrrWff8CZ7ZS",
  "key13": "TezJRouCpodoeuR1jCiPGHFcjDinW9iX6SnC3S585YMWWNzxSH8S7rKEG4phyq3FVCnYwYsJWShGJmzGTTZdxjJ",
  "key14": "YC9QidNJGUGpwYppY3DAKtFXqsn6Xo7fy3GczsK8pXPhEvQrTCAT4gKJnNGE1mTXfowHWaQturh5vc4uQjsJssR",
  "key15": "25oDFxocZP4BdcBiF9F13CKJz1FKLNQ9jKFTXVJ7YwyK3PVdaXQpxMKEpeEKoy2XZ1AUV73fnpPDsDYPQmkSrieM",
  "key16": "5Eyia7AB9ZASLgQ2SX2EvALwVYbGwtdmSrzp6ei56YCmqvDJfxNBkWBPhpM1xjn9HT8tPbdnM3LmrBRRxa7QDH41",
  "key17": "62nY3NU2iYTixuX324JoANy3ewRzy2EHTYYX92BvU4MSuthmpQAsX8uphKjtv3vzKnjRuaehNGBvTyN5fTonGqYV",
  "key18": "3WD7aaQHBrGdsAYj4q3keTdxqefHPc4UD7fy8Dy3JJyztwjryv5KA5chxBoFxqTfhbxXJCxrj3BAe3g1DqiV2q31",
  "key19": "2SBGtKuV4XCFbEQbb46qoqKmvQv26XcLcVRRYDT7KMZP2RaAB5ZBKLxmFjqBZmX4hXHEdbxMnLMaooXJS2onrGTF",
  "key20": "2Vz3eZTcKUkN7o8JVAuLy9fKEGFbJtWKQaFaUXYwrn2VS2fgcYhpzVHQSkmsxy6teiQDKBLnucaP1B6Ug3CaUPXD",
  "key21": "3NDSKKzkgo3tWP8X5ieeAn4oa5d2z5BP4wQr2gvZPFG5DwHfcAXAz7Z6YP4hZHNc8qvc9Y9JYEydb62EGn2T4tS9",
  "key22": "23DjWeorjewxAXBRJUMrHXty3fLK83KZoFL26R7HurmczVsmbUpUkUba7KfmGftPRR2x4NQ5odaT8sA81t1SS5NB",
  "key23": "3RWsETzzvboq34Fa2rhSR6YGjXms1fBEL9BevdVcUstFREfmtzyDjbyH7JjM1X2YByvvcKL8V1d2dzmAVnY6ycno",
  "key24": "5kw5vV7vTd4z4ziMxcjYe2nAZJMu4bVVjq2qSJuUB3JwexDwW6V5mbAq6TQ9TKPFsutSkXwRo9o2sPijmgVg4Tfu",
  "key25": "412UXZWsxgQEGrwEureWhBPDQMbeStuEFKEKtYknBnpSQKJiwwR2SiFomaRaF1BZBSmREuD4RgovnJfAKpGhAqG3",
  "key26": "4DxMVdbNfqXePEjHyFDTy2zV25dP3y5CNd1P1aAY1ouHSMipgVHW2y4mgwQDggqWfmh5inW4m4NP9HYs9NS3KweL",
  "key27": "WY2W9yJTCyR4tuWpnswTh9MKvMk7K34gGGkuvG1AFTPgb5UBtHdf9cvkYn2fK2VjwMwTsFTcMHyHgsC8qWWgM45",
  "key28": "59LHYC5jNHJvxMXDdWiMbRBM8tuz81WZRxFGDdy7UpRWsWjbQteZ2tkSHymJem2uXZsqtqchv31UKvsgbabrjJSu",
  "key29": "yWA7qCiLzBoF4rJY974ZMghGrScdW16uK8Afbkmo163NvJgHGRCo9AyYng7V6i467jbg8LFUs94GDFutxckebsx",
  "key30": "27cEzC1xV576PQguCYmcbxvRfYSZmaFwTJnRbx5aNX7MNVYr31PLvgbqyfjTrGvUvSceD2AWZ2fJDJwG63gmeo1i",
  "key31": "2znaeAYqV9U4NV7GwcrY51oxd1SBNo2Ce8HyvCTBDNQMT83a4yCGih9eV8yFrDbsFtjpTH7zkN3TNaJdnLYsjTp5",
  "key32": "41y1MRGRuKC9BZiCCBGAJbYuSwy1Xgv8Q9ncFDrZy4XVmhYV1rUX5sYFr31H2db4v5hkwsFD5jSn9ZKdni9xSg7U"
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
