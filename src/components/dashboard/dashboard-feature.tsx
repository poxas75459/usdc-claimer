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
    "zQ1pd8sVekuiVBUcZfSGCbnERL2NsfnffWF9ASxLFFeFkCkHGQySeYS9mcSEXVV6yaudniAgHJeYx1vh265Sqd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZudX3DfHAQvYv5PdewAYMBf1C9y3AABfLYQdBd6azDizDSpGBXpGefPsWjvW4aDi1CL4BGmjE9v3nPscErtAZLP",
  "key1": "5ir7xvuScXoZCThLwcyxnENF3N3jaJKo3zVaxXWQPDnbVKhhSDsa6LAMzqFYTtccY7Zy1d7GvZydF67h1dohVc7V",
  "key2": "5bA9GfJfPYVdsUNUUfigwCAvgK5ZZJPYnJfDCvwJN5PyzGX2dXzBiB4DZDxu8UuvSaLiPFSQH32kWkn2dB8nhiV5",
  "key3": "3LfFuGrk6U2SZKJghozdPqxb9zdgm1Xi8obSVJm9nJBYQhmhN4qbonv9WRM8yYhXtQmBEcbmjKsPixcSULQ5tXuo",
  "key4": "3RJ6H4HiiFjHytQaNcEBFTA5kosmNEheo3k9yKWUPci2aw9gvDhAJ84VaNdSGo8M5yoBvDGZaxJCVT7xxwCN3Bb3",
  "key5": "4KifQ6YzE4mHKAzaby6GHKF82GMkneC22da4Dkr5TSnKQH6m9M6zUdaHGQv3yNADbXaa8MmDxF5Vi1p2GNqnWtkQ",
  "key6": "EQXrgPT4gURRpkY8k9x8rAPRMy45jhrJnKfeX5bNNMGQMNKkkDWz6JkBXTRdbHA8hyQ5aTsjT7qT22kWAsSA57U",
  "key7": "4LAq2t4QGgsVLpnTixwMWzbjQKMn2cC7KCDNbe8wCZrVRbWZ9MEB7q7TGZWyPEojBXLds4QEQuHGUCtDWpjKgS3R",
  "key8": "4di5gTzRZ8dKtB2GAHbd8xudq3XcDpUPa7z3ZsuxrrXnKgdf4reXLWMTshHoBX9symwF8K8E4ZBjQbK1uS4RowxG",
  "key9": "4HnLAq9VTw82ZSC4Rend1DyL7g7KAM3jf3RnCpWeh2se5cA55H7ufBboxq2G43ESsfQAGVEeL3CMBD1QJAXr2UCE",
  "key10": "4tihKgtY6GzBFHMYZGuSmenVrP53bbUABpNd9MBwBuUKQcPkg6fm2XTBK6oJCfyX4fsCxnSDTSMwcwJxCtd7jXYM",
  "key11": "Y4sTftLtqKQ7AV8ULSm5Ju7cEkbnaaExsMCbvSuBNezJrpJp6TZrjjrpU33j5EhZxrCN2Vs9NJK8W4DQ9Zuuw8j",
  "key12": "yhrfxUzd19sJHYc9hTZgT5jfwVJgJ6byn79eX77oKixB9FU2iDC6UaxBtaQmqmYA1y9NjY6C3hvNaUWzEiUFZo9",
  "key13": "ZdaPEpBHgXyzfHeFzyVoGCXA6FvoW3srdiKUjY4Xp8XafshmGbdxKQUb1XFyeXnzQ9q9KcC5LtCMSnm1uwnRVEw",
  "key14": "VvGSG3ksfjYPDcdHY5avidMucCBJRn5vrijhgKd5m2rrSv4Ex8bijixHCvgVjT19WUqhWzuTenSA5Qq1NbKohWo",
  "key15": "4D4WoC5CdKSzBaV8GLxD7rd1rKPTRsnsjRKXUbof3t4sQeKEocYQwop6dfWLJ4CW49pt5TiS1YKCU2weY31sHWys",
  "key16": "4UF9NADBaHVJjdNrT9NBwXt3kA6UNxNEL9Cu72cvg8rL6J7W4xgcGE98Bibw7GX1XgZ7s8R5wGM3W6rjvqGL2WwK",
  "key17": "2KZ7tRnxWgbeaBJxkvfxdvJx5MXdxHyUGsg2yX4GvH9HyNtLE9S4U7hpeMNop78LNyNG4ZG4bqHaoDQdyZEQZbhS",
  "key18": "5WZF493QKjxbQdNaezwue7HfuSjmp3vnyhEXCz2saiqTBhxznRJMx39j2sKfp9VZx6uMBtVfFYw9xHSTFGALhFqh",
  "key19": "5NQrwtZ3Te9xxGjnhT5qA5EetJayS8PU2CvGLr84YxN6YxqANyR3Vvh195r5tft17vRCDwbdCiLRWuWnkUViEqKC",
  "key20": "54oWC6FExTESA898EvD9j4TfUWjgGfDFWG8K47npF5xnL7GiwdBqSsgMQ4isxm8ts59nRbztHD4qjdfangXng5VU",
  "key21": "3eh1jfLjH9prgPc5Y7tdTXLTKHh41bJJucCANa6dyLLhtJuzntoK5n72XFJUL4BkCFgAX1fJDDigfDKFvSFx9NjZ",
  "key22": "2pkBDfjAjacCDn9dY7PNMUrnqAAqaVohKVgGvhzRSvrh4stLSbGDnHsd21gT8seskbf9oHhGhznV7GfPC3H1PAK8",
  "key23": "61reW9i9tS2P76R3m2VYmvywB7rCu1GjU6xyajY2qp1gVv9Xo9i3ytDHJLsCxwpFmgNxuALEXAf3gw9E6ykfYzXZ",
  "key24": "4TRq3jnLfPLAUbKz6SBHF8beoSLuB24Qk6cghkrCRfdAy5RjzBVhpQuPiA4Wb32eTnZpgLki5wHTbKq4KYPdyrK6",
  "key25": "5zs4rZc5n2KY7M4Tqbujb3GjEMtKzNDyd8n2yMkFCEvrAiiJDNRvvv4xjDGjipcDvtaAYCbwmEGAuJ3G7jeiokw6",
  "key26": "54ZbXNXYdECyvhuChSAKDLM9biAwts99RrotNWr2rWMxSyRFXB6ApDojwdzE2RxH5bYYx22dYDhCZeTbYtVhpuSu",
  "key27": "4tdiaqc5M9JnDGSoaBFbXnXnYv4cyFmesKV3a4vdVG36PPdYETk4TsxAvJFfdNbByA2TokfndAcLnBw3Tu4BukFq",
  "key28": "4A8G8ZRxuGQLJSYDejo6WvwudFPGxe5bMSxTuiFzQvkxczoouH6mERKzwJXU6QSyBzx6PYkRwq6mS8tno7tEmZMv",
  "key29": "4eu6NMuKVyriAGkK6BYpuYi666vF9Jd5sG3xkSoVYMJi1PqWnyJQnaX3APLJmpW3H5qTHuFrc6qyBPPB7yCvogrv",
  "key30": "4MWQKif6QayGaWnd7XKXm56g6FGYc1DzDcveDHRK5MeBD5D5um3ecfqYN1ZjWsxbTcdTWKp22LCjMcsdYp4NNGJs",
  "key31": "KDuwUwE4GFA5tLn37b3z3Qjxtpgwx3mPFRt62iWZcCesFSdNm87UYUCg8WMoaGqbQHVBFyt2ZebBYmShH4wR4Qz",
  "key32": "22sbKz3xCHwzujc3kARS9eRdwM5L84gS27h73Zc1fowB2v3AM1TbspR2gCKuusDBUvxFqLX2kmyenKjAfFCXiDXk",
  "key33": "653QYquw5ecBKWoKkg45CiPrasKfxhJsmpwMFiRiVB9ygL8t6MkiJuXwTYC2nPmYvrZcEkqqdV1kArM3egpMaJZU"
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
