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
    "3uBMGw5ikwMXUchb1chLuNQmQGRQJpA6N5oF1y72ScDAFjUumhpsW9TxTWJpKsVi9nxfEwhTQGy4v9Nm6N2QR6TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648MVqcui1vTwyvuwp8ApD1pWwgJX2icsHRYauWE1omzRnYGZiWBeym5uQxTtXxQaEj2oyYg3PnqyKBsXCGQEEDA",
  "key1": "nFDYQU26ePh4fdiLZiVSRiMKuJND4cYncgvB3BV6Bvgb5gUKfqxBotowtN7sq8Ze2qN9CPpjwaiyLYmVueoc5jj",
  "key2": "45AFN8oZVRs1fmg3sckPYdBhAFTS1KHK4ugVFt5zfmP6Mjf7Mb4vJaZMygMCYXBobUa1AkJzP7Voscc3krmo2dcZ",
  "key3": "3ifCQ1fUFAgsvfWsPbYfsZ9TucBiy2sk3zZ6ABxo7ht8NVv715w6HHFdS8pNER7aPR5H8eXumRHradv6Eo7ZaxtJ",
  "key4": "Mr5EotHdDBArDd2xt77g9QTEjv5p7xYEWXxp8HcCibrXzaXixrf477PqaZ5ZgE89M1zvTdTWBdZpME2rqShu7xx",
  "key5": "WB6AxcARnRjuh5bfZmtZMLncn1o2G5wtTmsYUcVSxrba6igke7ne8BdQpJ2GHd5fAs1sB2ktW4pDYJe2Uqd6JTz",
  "key6": "2QzpgiG56CWnpCyKem3HwwY2kifgdsYVYz47AfjbvpXBW3m2jmdgEv2tR1TburVkPjoekzEkGPX495gUCQkxdwtf",
  "key7": "5uokZcxo7fMBb1pFvYKdGYrxi53xxM4RfkALMbkadsUrqoMk6KPRSLv4Z2yyUFtk28FAUx3CaabvfbLmwGsUmz7B",
  "key8": "27i5R3yuD3f6Uu9A2GywdNt5f7GPZjSqHjFgiUGqwFudp3Bwx8cbGEQ4EDNTJ4jRe475pzanMHLBWZd6hRXVgxPv",
  "key9": "qLoBxCK5Qk9BfxmfSUwEKvoJAU8aXgdoQ3F95Sva1QCRjZczNXuH6rtPqJthVbR7x8souw1VtEtgwoDsmuYESjg",
  "key10": "5j6qh2gRz4YENUGYzhgTdEyZCCTGS3iuPEmfEeBjHw3WEqQMbdcFX8s2sWBVq8suyHocpGLZhB3X3dJ7WmQP8UzE",
  "key11": "5vLNDniLFJThdJtbnpvbH6omaDLU3A9sHFaiKGbu2g9eRwD31hvFAX9UTdjK1aptJaCaRG94K1j2csnQ1HZzgA9S",
  "key12": "2CtvgCGo6zjfSVUsS7BAzx5aoHa795WHfVuX4RkrP2kr7cedh1YeThbvb543MVxwWt9xeWyG9j2QCEsump5H1ak4",
  "key13": "3aGew2wbN8q1P5eUMbNV41feqQ4H2z6egmhg2f97E5iA1B15BEnHecxRwiJ7yEyeenoEF41zo3e5dsDHWH89Bbf2",
  "key14": "EBpzcxsuMJFzgVQ5e9Bd5mUVFJFQ9pnZFXwZwsSXYaBParnt4iBt43VMSnLjM4C3ZGecL25tj6gYK6PDwRLjqmu",
  "key15": "62pS7ff1tpaTYWK45APiFcksZMrp1tdasTMkbFZw5jhtqHKGqGGKgcKWbs8QSzEB5xrPxSexXbxMdak3FFvM6nGd",
  "key16": "2yPR7zd6XZuahEf7Jarrs9oPi5S1EiSLiGPv1HBS7594J45N6k4hWCeGkrJZ8ncE7FvG5QqZn4NFfDpoXScqW3nc",
  "key17": "2MbwPZbZAnjoaQt8oV4rtCtATmofaH6v6cQSyfeU7yNs9efC65Y5xPU6JhaznDCNdcaxVxDtfRMMwzXGjzXAVpqR",
  "key18": "5VxsB1TATo5tRNDpMABMeixp4NpG5ABb44n2ebh4L82rES4raDfcYhLf49cokYN4UtWGCFHfTny1EhCv8MHvDQYL",
  "key19": "5UJFvLZRNTX8gTGTLSviQAosDLfA7Y2Cgn8BSTS1iA4WQhNUTUwy9fiTYuxzfKCt5QtCgVzvsbaanj4qAf2v8VCU",
  "key20": "2qR2J4KMrtf6KFrdSR5ccdWd2QbQ1hANVuWCSm6PHsSUtLjXLk4oZmcsakjrw27X5ysPxjcG6HNrc3ePBkpfyxzN",
  "key21": "63T8LfVtBtuaDXK29u8YfnkxRHSBAXcY3s7icXW6fZijnHpbkjUHnsNtGcYXC5K3kHxiuhECsXHZ3w2NMjPDWxvb",
  "key22": "4K2jgPxJfkYiuqSuiTy7wwrJx3P2ttvCFUooD6qsxCsCrjHWT8At2w5J4yda431DTvmACkmbY51F5sRNTuWhbHkN",
  "key23": "2yYoSDzAxHojpNkZUdTaqkJ3x1XK5rLdwdjmChhvWKtg7An2Kq6yy3ojRULyfwn2iQwBzkHzVeU1SisAXSAvgzX2",
  "key24": "6iH4Tvhj8Md2CjTKiyUZ2Hfm1HmXfeD2mpmZwhEbzwXGQ2DDd1nFb6Fs9pvvy9yXW9piirkFveBV2B7vXanTE8x",
  "key25": "3JSHnsBYULUYK5tVuL5ynizo8EkjqBMJvNK5jTuiuKd2ZhTZFQtciYJpKHP4pk5NotFwjemPGHi91B1VGK81tEvt",
  "key26": "2V2yqnnyi7HLkuWASfiGagRhMAsTCCeeK9d6JGgF69v6zFfd7iVHpXdBaQcNS3NY6GTYEy3tkpW6hzEbo6pG5WDw",
  "key27": "4PiukvTqsCn4JQUHsfBgV7DAvJwb847HyQW8BQUf2YPXrxeaTkY8vH9fyAZzSuPzmGx2YjaCe8DUyyrAoNaWUuqQ",
  "key28": "5Lagop8b83gxNDWum9BafPbEqwv3tTBjiMqboSYPb9NJCcb9xZ7v1e6UoVwQq26YDPwRFbp2BSZWwxUVXra83Juw"
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
