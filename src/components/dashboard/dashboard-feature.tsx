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
    "4bMss8uGKnCPqnqHf8512pJ4RqiiGwxN31rnCS9SNzFuS6Zmh246VpcxmstuS2Br25pGKfPWa4A86or4yJ5DzXxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RMcX34okKrdS5YnRUTBRZKiM57z5Ee8BRNbcwq8FBt8v3dTRcx2Hnachr4H7NnchmXTTkvrAh4pbgcx6G6Y9uPE",
  "key1": "4LHPSxq98Rk7BQgENWanGEdRfJKEFhAciXd7cSovJoKeCrKC6K2o6mkjY5579JStbasSgjiwqDMdMCHGkgEHBnwh",
  "key2": "29FT8qWpNfFYtdDXMCpR76pkjBhCqaBQwS1pwRmEMZa3TAWwyMYV44zDzV6LjNRzTcBniiAoB9XEU9R5PGjT16Nk",
  "key3": "51Tsqg3Hipb8QV75LGD15edLLNXobYJkLBkd6q6YVBibYx4ez6rqp6Xg51RHAGt8n2NZ9LtJDu8VXSm9yHxWE2Ts",
  "key4": "53fCqfu73fuSWsP8KXwyYFafqwfzhRKmQ19zdPDY3BwNcLaH7pT5ihHSRUwacvZqKpvWXKFwECtUA6pcSVsJkvqE",
  "key5": "tDC9Ug69QkMyz4mU2mQ5a3NbXELDytf9iyiLD4df2KdgMUyyNhCatFoPdFbzzk1U39uUo2hLqN547gg1KushSo5",
  "key6": "5pCY76JMixJ3Dpuv4at4UN1fp59GU4ue2dH1PLKHouZtZf7jwFj3JLRUnUJeJ5VRndYqEFhj2kYMk18KzvmXR2UJ",
  "key7": "iP1Ewk7fB7T6H8skXsaHyjWMtrUZiMgGQHcTw1p5PkYVYVtrMViy9L3P3evAaGyZi8DS9muq7VhbsYgKN1yTiyy",
  "key8": "4smUcQaXiX6nKZV6uvgVECc7aSww2f5dmj2XZuaXHLcyHLKsf6o7ReDJ6gCvrkLo3BXdNHxJexPN4UwoT8rGbPDW",
  "key9": "211ztLoeWANoJp8WFJRRSHJoryEMh7CdDc31K2bhc7PWkAWiv4fLpVt4owuLYjLzkvNfiBuspaXNAE7dfeL3eEde",
  "key10": "3zC4zYCkpFesMdRCu2SYvKbho77YsthKQUjJoXGNicjN7iPdP159duNiXV5qiDgPGQ2A2VEFNg1obfD1Xx7vQ57x",
  "key11": "knvGWtRtA6NP6HCwBHQjqSjAQxxGXF5zCgDKbrW8jb8Gr7bkqgNZUQR8tvnXQ2L7Vg9uRFZLk8XTt5EhkBgqjAi",
  "key12": "5Pu6yxym8K4NjstkVjmHD2s3wwEw2uqc79N1HfYZHFQsTdXY7ZbzKx4NG64CpwuhxMyyDz2o5TcfqwU6aijvQcmw",
  "key13": "3e6EAREfnaknWW6N3KY1mDr7N1CLJgaCBwT53m1T8XbuWW65J9AD8jkYVGetFYFYMDs57sn1WMhwGwbcK56ytYFc",
  "key14": "3QPmSg3GoZuFB9raGKqsJ1UwFEWeVZjXTZ6reesEztMoRuY9nxp75tahPEpMa44pDFjw48sY8csQvNB8b2LNah2x",
  "key15": "4cUKUrpw79pRpai3dcYBNj5H7NSWopPAGdQb6GiyJoha5FMQbxBEGjaF7xdwdwFPDsNJH252vPCQ6wcx6zJCB1PB",
  "key16": "2nr2zZorqJKRtseBDtsnccbeqqnhpXifMDdfUghgXm2mj2F9xJxK6aqHox2sjReMQFVV4mLX1NS375P7E89UArcM",
  "key17": "yWigQkdagznbnjJuRqJJs656bCzFFudtttb5sm6FemCwMVt4Rj6bTZZ2QyQyySDuYxwMLYTuE8oMiheNrCAsSwX",
  "key18": "5V6fRrS6w5tBLorBqxHc1S8VVre2yuBwmqs8bhjWePSZudYmFDA23aKPhcZcUrwuru3CQgnCk4dkQXhHz2C1rLCT",
  "key19": "366DpaGDnavEbuP1RRoQN4NrXN2ZFAcH53udm7AboVWtkbU2pKf1xy3u3NoFUmq6cabwYtLMH61bPDpxPdVx6tRU",
  "key20": "2P8F1vXSWFMwmtqKfRBMEDbPb9HYw8xvV4pNCPWp6KBELhL24eXJGBYrJAcLbBDXqhSLCmy8dVvDu2AdkHWdRTdL",
  "key21": "3swfZ1MAiwBfTBoVUMpW4eMeeB9y6ZYmdHVoNPPWDH2TanNZmiWZBhAynPWFhVDWK7qt4BseLoUKZTNFMxzfD4pS",
  "key22": "45i3FgEmqzv5iz3QaJyUgJtWKyqwKYZvHkzUx1ajatAFDQqFZBRSBFDSi28goJR1ga92PFErbrQ4KcKb8wWhp7Zc",
  "key23": "2e4Nc3LSGpGMK49JY2qxDXrtxhk9A4BkSqmJNhk7vKQsz8M1SBcsX8ktMxq6jZDJmQa7Ev821vnsfjn5CYvwqaha",
  "key24": "Bp5aLZBJacX8nKDryz2vzpCRzQD89YJcA83wgRgMXYj6nQE65onucfKqaXV6SYYrCtP5Z395mcWiMuM2oqML7YV",
  "key25": "EQpXdKvu7rtEAXKozdJiiqRpQZ6Xv3cKKWNNo6GSxDyBepMYzm5okDVijhV5j4ZYG2Qc6U7xqAufBFzpyKKqXeE",
  "key26": "5e5SgkkDX5rjFrhFRW6beoA84nJKcc4bf8dqfm8bnnr69ZVFaeZ5yowcxaqDWBHEDUENZk7AfuWXXuVEb3tQfM26",
  "key27": "3nQ4tQJL1jn69E7Ykqv13B3GsAzQ5VifGkzviZNcThuQ8NCVzS4Ad9ESpF6RHkiyeaJ5dfKEN4VrXx5TdokWtSDW",
  "key28": "4LmjzBVpZtGbJtDRWwStZpngb2nz8LaY3pi7yDGkLWfqAWUELzR9oaEtEQ5a8M5hDswCoihpwNJg8dKvrSshtamG",
  "key29": "4Qu4TQCBg7QauTJ7MP2VBcpD76qv1ce6VzWiiwr756adPEBxkktw6chGPW8ZkesbJc5efb4sWj7gPNeGzV4EGbFt",
  "key30": "Q9GvFjaaXZpRR7V54Lq6CxR9FeAuYemVBg7vrqu5kpSBi4mQEAR2PWxyXfc3QYYZuNkmR6b2nCA17E2ScxgBsdz",
  "key31": "5rp6cRaZ7cgZU7q3AZkt9S1ShaRtkKc8to8PcuYAM1b8vb4CrUdaLVJqRAhRZQuEdVY3p9fxsF2SD6jHKyHqV7JS",
  "key32": "3qf5oZqxJrKbyGmvzRfCfD5PaqpTiNoNTtDANKHYL83JTrXvQ3U1Py8tsedrw9JPsHNptPYWgFBJJxZzSPh8gtw",
  "key33": "3Ze7zmzdmDG8Lz36QehydwmghxPqzoATgNVcJfgP9jzGQymoNNqmRXv6ZFLoG43a9EjrVedj5Q5r96wP4WhDmJ7t",
  "key34": "wpay6miCq2pH3A2iawifZwq9pX5upkMwWVchPvYMKsiVug8YuwesFm9snK4yZWbccqezCTQjXAhuDaqNkd1JhiK"
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
