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
    "35uH65uUEFKm1jy3CWJoVgvHF3YYZq4mvjZRP8kCNCmLXZ4NEJ3KoAQVPFAFy4UEXkywart8ssQikvtDVC7H9iZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQibDYNpsuU6NKhHaChH3j8TEqC2qvgaKeG4Dk8VyGpoUjSAteTYKvggS1rqM8qDqyidmPC5xmEL9nDgfj5dSyf",
  "key1": "2DiHbFNeyeRtvph7asYB5ahvi4E7oghi2nqfxtg8iB4B55C3kf5iLVvNnZPz2Q54oPfHL9viZR68UYW3FuyzHLrC",
  "key2": "44ZPM1CvCFcvpY5AqCJ47MDDnrHR6Kav9r9s2yT3a7GJvSWpnGp4kuEfzPDZyEvvgoDi6Lb1vnLaJ82PnCbsuNge",
  "key3": "2Q8dcP7fPcHFMYk9ES5v1XPthK1NRATnHturRXEGYARRhuejQ2UL4VLwKcgS39eXaqkd1gf3NU6ahLYBXTjPGopA",
  "key4": "3dKAvBNuXzvZoZPN7bU1xmfRQKcA9btwSQaCdt3rDofwP1mdyMiLKX7Up84qWhPkpggGMW5SSJuTzK7w4Ma6Z6zt",
  "key5": "4TLV9qi1pZ4NcGvHstpQzgz3Cpn97CppmtiEZ3G5e4P1EEVZyXvGv5MKdqpcYNT3ciS3qBVfELdoxcDiUvJ2TLgp",
  "key6": "4hfNwtdtNdkDKQGDuYqZzKwkwAUeS7D79ETbtZov72qtdxJHrGjELwJdW3T4hsw6tiWbfaLMWaxjWC9kSyxqVPLV",
  "key7": "2eYDTK7sqPhjTB8Uc6kFKUvXMt35vhV88Sk7YWVoEEY8yHrWcbPEEzfe17vhxR5Yvq9ALnE6Hnb1qazmXSnsfgJW",
  "key8": "5CqZ1PfTpMfj7Y9o5vrB3C1D4utGfsKyo2ExXwWqQbsQJUymxQFP6T7xJ6J7U33EuUcvPr6wFTSGMUu6vyNQY3RZ",
  "key9": "2WRLrFmKzEZWPejzVwiLRXkbBjFsJpVewRgfGLmC6hjYREpWQ5PbF7z1cLies6ArCYUhFP2ZXkKeMU3Ci5tpyRSW",
  "key10": "4TQSSZrRNBWEeXe6ea2KKGbvDzV5Apg3AcqFzETFgHTu48G24b1eDjfuEwMcmg2gSxryiPT3zRD3MUSSiNbXG6y4",
  "key11": "3pxFA72L5kYQ3MnVxYRVJE4w2MNeiqpHZsruJeJSP83cs6PWvgwuXrEhwCkrB2zcv8EPzUpBq869o2ZNZsqvRz7p",
  "key12": "26sehhzQj69cUQngmG57F6hz5xGdYDzc3ia8mb6VFUPD9KGfb4TY9cgD4jzkZJArpJTZwwMSXLpCFDx2dMoLSYXF",
  "key13": "42SeMNPXHAiNy7Hosx3MRcT1utx1pDUKo9Xc58rjvYf58ju6RRaMF8aNEAc2fwUPHtkr7xSbj76weyjpubWWyAV8",
  "key14": "3Emu7mYuQ9DKSAF7xnZGTjmxgt48gYfASNxkgYxFDTHevcbtmbeeUTHrTxefJqgfceQZUye1fZNUe7YGXRyw3X1M",
  "key15": "VA6NEgBcMa4K5Ge4onPPXPH7oi8Ti3DbNUsYxVMs5nJssPsKBBQxmxwu8DbkUm3fVxUbnyQXtTQEQpgw2dCtoAn",
  "key16": "4QdeLaeSLDf2seAiNr8gzxdWNgVd4ygkm8JdGN262W717ohdWp4p6CShH4hrf6fp5MgEp36LWmVtFCpWQGfjLU2T",
  "key17": "4Ab2xVUnPjdxMq4GkpkHiuU9eVzvbTX8PSMNgRF2y72SwvuPLEUVLRu3FPHN7og4Yt1Z3QNeKY61Umuf62Whd8vH",
  "key18": "4anPFGfcQ3BTN65FTaQ86zkHd8S8avPBrYdAMgupoQzLfMMSuVKy6qVL9N98VG9yYoVJxRqPq76wcnYbxw8ZUeWM",
  "key19": "5VUXa2sU2v6Zt2pBn9J2oyShDLPnniy3HyLy6XWABA29oPkjL23BsptDht4aKscB3Q1ySAkRtc1aNUX2EoMsxcd8",
  "key20": "3PRUn1FqqXmjjrBEPMjbtSTMPZKEV3bPm7tvjyPE8cw5zuyuPtZvBVzRPoXM9tDfTkZfrMrPK384Lzr5BKoKpLiP",
  "key21": "4uRsZnTzR46HatT97GTrKKCjxEp6u31byvfBpNFhqP5gpHwWrwNKS3awjPGcgQcHfA47eKpeutPuc2HbZzFrfZkn",
  "key22": "42FfCef8kAmXUMHBtkgjh7KmsNEU8xGfbL7M4uD4wJMYffue4Mq19JP6kWR9MpNcRZdoFRzXaKuNT5jZmuzDiAqc",
  "key23": "tjexv58nfD2WzZB3Be4AJUSyhXQYDiKuHmm5vmSm8nFvJAaTajwvQz2skcG1jsVfbvzu2BRpEL4jnzkyiYYCBJe",
  "key24": "2oaNp7st9uosQSuKoAdrPFpk4URJUzYArMrxXY7cgvQwd72GsWs63WgFFdaMYjY2vBXcEiG1gTev1eGua55Rsh9V",
  "key25": "2yS89syGqo9CLQ9fSK5nMkuAreTkLyrW9VD2XJZ4eB27evpj9mj5x31PHCZbTQmD5MpFjuNYh5uKgd4ELjVDgGUY",
  "key26": "ZTqc8yzW7pZQkCn7b222rT2PWKj4pmcjQfEyr691FZhx5swy6183GhZg7METiN4d1JugJkBRwDga5uFiGT3zD1U",
  "key27": "qtrwoH4xWJrD4HTvtAZs6JNBqWN4eppuERSWnjkyahR27nrcAS1JQiShfJjJAgbaGheA2bKz1RMpRzu19HjS1bH",
  "key28": "Rb17EDkwvx6cjaWc8ZMakoTu2zf8G7DxGkU3sGm9TUNtiRks2W6oHEVtk2nJBgaY5AQmJbxx5gY12o5ZLDP8zsq",
  "key29": "2QZyZXYaHR3sciqsmQoskBpbrwdz8bYGRH4V2BSYDR5CjD7p5995XK49X4JoJj6z46nYobPnDBN76ToqkPwvMhsR",
  "key30": "2B3EW6Warjyg9RwSJKfR8iefoi6mNELm2fJbay3xUwHdU84Sm5Wwz9ieDktgmAJncNbycDoaeNyFsnvA2JxRh1F8",
  "key31": "2EWWspkRCB6Wzp7enL5fwsJupwaXzLM8S1BTSL7kqvRqjMGRmXEHaLUpesjbvsZT5EbKnMstgMEu6YjDV7W7BV67",
  "key32": "5MBPbvBqRHR7o2kD7bAD2w5F46CPA7ZtftQF7Ho6nqZAfH4V9N2z67KKf4Ga2T8t4ew2WZzLkMvCjDd3S3eLzHy"
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
