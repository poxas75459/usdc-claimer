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
    "Xxf65Ecn9Tj6JQunfccXmZW1UbsbaqEr6CLnxkoUZAfNJrBouXdRTjpnUQMhnnqTAD7S2oZh5MjwAxU2mbduns2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rx9PWi26x68bmtFyzfY4bin9jbhw7iZT5p62PRpJ8f6yuiHRxfDmXCAJbHchefL3pcTSqhG2EygmwGGZyvUNbYW",
  "key1": "4G8wpRcFxSzTn36BSTwejJesFaMVSufRD72GZ65Z42Q3CAoAUX2ZqnPiuu8pbtYHnDts9drPFwxPTA36RBSXBKGM",
  "key2": "23a7vk353TDbHWPuU1ReM3Bz35mCpxFyzqkuBZ3hfiFxnvPvvdft5MSf9Dh76Yx5MA8SFoYPHcczSGz7KDUBLrnr",
  "key3": "4ykoNyoerraaHgcJac1uNCQYVoaw4LNx8qidgnVWPeMqR81X1ahUpsAF4J5Nyan7mjQHoiSN9Bjbj55CLUhZf7Qb",
  "key4": "5yD3fKeiy2gcCwVkVLeKxh7HyLrBkLDu6UsPwePkJDFe9fi1hcYrUqriag23QFyvFnUtSN8Anb7y5ZEcnzwKo9UU",
  "key5": "3rG84SC5VbdBKH2nb5ESWX9Bs27QvwM17y2YtgLyqasnRX2q6Mr7DD9JgpJkpXZs3Liu5KAFsLh5b6YvxVZTTjKg",
  "key6": "3n24e1vSgtpiWooRdcjY61BCPqoD8r1LvMUqECVMsyYkJHxJugodP7krccoFe9Z2ZFjxgyzAVwPk1f3NRBcLNWej",
  "key7": "ok3w6LvQxGSqoY5FZ4Y8jHpFzaZqBi7phpQHSYo1n28z5LtFJGr6nmf4ouxghKj8sX4GBU2sNXx83Ni2PGo6hgA",
  "key8": "49fsqoLoms3GNi9N5xQoJZBbdqhy8A9eVRNJaApopLbcr12hHBd1dBTKEW3QwY5cZtgowRG1Jf8Q1pBM3Em31NHj",
  "key9": "2MAZxTVbKMjnCMdkseUBLvq3Z4hhZUZKi9uaHYtks1Cx1qXuZLJ3z1778N6bUnWHvQugoKGMztvdpnNUQjan8gg7",
  "key10": "3hgao4PrP1QpLBxpvc3BTCBC5WVxTAY8dp3P9yvmx1bg1VgMhiK9kBniBNvmk4DerRh79KQvF8PwXv6dJHPpuHPU",
  "key11": "HiW9KSN5j5xk9GkTGxngc3uACnVANTkkcfpBwTgoDLGbQv3Ygsr5Q3o2hkseWM5se8SMfCa8AFAZQd1Fy59eTkM",
  "key12": "m6Cu1vJfRG8nEWnZRphuMD9ZxFSxr8FyDV6jpdTbhRpM1bGogQYk67mgG6SELsXWsoUhzd8JyxBHvp2ZhossWjy",
  "key13": "xkYhmmUG4QsmkoQmU3MqcSJ1jStWcdE1aauyJu2Puaz7pRvVRrLxdjL299K6nCpAZA7CuQXquWG3FN9QugGU3uD",
  "key14": "38uanaNQC1yLiQ8R7oj4r1HgxfJ36UYTZ2xeRiVT6RaX54rrHYB7r5LR6m3tcbUvsK4srZA4XDw3pbxcCcYD2kYV",
  "key15": "3ppbiboaX3yTCx4pYVvJnwtcRRjSaipWs9ZQWvimme22v3vCaBVVgTYnv2q3FpaeRt3nE71S2whzhRgCWDmTrh4T",
  "key16": "273PkhjzafpTZmAc2bMbpmTudspvUP7mAhNxKELfLg5XqC913abLP4xM3Yht8R4Qibiadf6RNUVeY81Vh6deMfd6",
  "key17": "RJovFfUwANMB3tAECZj18rVjPbXW7nWGUY3FPpy4fXZZVf5doumwSc9ToEzdhEqd9pYMiRYAkYNKQLXfeWSi6Rk",
  "key18": "4JUBKJbn68CssD5J2cTqeTjDBEKqptoFCgEAkS3SV7q5F6x25ND9pXp6cAbCZr4CGij6bpx1J9FrW2CwBRu2qDoi",
  "key19": "37xR1d2q1KEspZhe1JMEL1pBPn173RWZBgYeT4vtEzbQWfU1PzNzXAsiAbiXeaxuLeLaiiryrnaCsaaJUgBujqPj",
  "key20": "5pNEjwgQgfHb75Jy1c55eYmWGA34o9rowFFYZSztCNmRKtkbuHZCsYSZ1wmgTbPVRUMLFBtE86XezY6qameX5sDp",
  "key21": "sN5orY2moa1SBAtXpUHNdGB6DiorsaZqoN6KmuCFTmLYaepBDX9qvKWN4yi1a26ioW6wX74pJuT9vfjGfXA3fEB",
  "key22": "3M1iaThauKBSVjKFAN8cvnxj9nKk5tbqFKcHXKzmcwhFJ4ygDuTzppGeLdk3uHp7uuvqMkZGweZWXyg1jkkmeDUC",
  "key23": "4w3Ut7yoVNavt371dnpdzcoQaRZzetNzayVcff8iV1DJunP7ZSzTX9yyfE3uTAMevjLBnKcYCFudMW3UhxPEs9Kg",
  "key24": "3N25RBmb3vZvHDZSXBVzL5mbegZwpeju7jue59aFeUGgMnSg7a67q8xLTkf9T3GpU26qNQwuknvFLy8adm4Uo1dR",
  "key25": "jGrfFbUeCx96F3nniqUxixdpqjAesY3gwisAfFaY7c4hH1xKjqjNkwrjVs6YVgJxzFkWUECJcEW2bDaqYUuu77v",
  "key26": "i5iXr4Cb7YezaLk1KZW4P3w1cLcTXSMFLBV9XWYF7ZVHhPdeoAPTkFNnKwjBkYv8MLCE4xmCZymRdQcQwW1wjvi",
  "key27": "4FUWEvqHXrUbW4SvLWdDoERoysFaCxEW3ihK4uJXeMY1MTvoFp3C1jQ7bp9c5XfPpkh4mq14j1wvAH3Kjw2Dp9hb",
  "key28": "2aLbuK64ukzLJgRR79yCDhELUU6S8AX3UCJt3dky6nK6r8HfUMdj4ZAUwZBvZo4qfFoBbwdiEKMTkDgEF3fRjUaW",
  "key29": "BPbRVos6tZu5RJtSk28dWHHLj8NEd5kn2sb9E5CEZDMpqEX13pB3RjeomQTAooSFMQ5KkZCXtk9yRB5jDUbto2W"
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
