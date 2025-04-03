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
    "AUA7m1rMYeDniGLhLWBVRgpcMecWiGMKBjUaP5cyc4XBBofzsZHcgGF2voQPswzE3jZRU5wof28GfyySEQj3bza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDEeEtcpwesqDGwwThdRo9FmurXdP58xZVhpHVjeqEwR3e4BXmpcjhkPH6oME1MxEy72rY7g4GGp5izqAhcBkGX",
  "key1": "22mheFp6aXkChFrP19P9KpoLbYM9VcwaAJJp98iqfCZEc9TH39JMz9kwEBVZygWRFp8vo7J6KRYYMoBnZEQR7hqx",
  "key2": "5YWbeGYQoMgWygPnSrSBbcFgCZttg595SYoTJDHhY74bpUxuxFigk4WdwuY8CYwCPGA22XfP21Y94gnTLph42x9h",
  "key3": "5iBDhmstghwo3G6H4TWvhJuggUpuPbmTLHwfnbJej5bixWpxdNgjMc5QMhWnbMQDW6S4PnJFa3oiKjjLzkeGR7Qj",
  "key4": "5PDH2Tk9UZ2cFnHb8ri7E1zmLG1JWSTkH83DPHAaFPisxp1xCRK2JJvV3qSQKs8u5o4R4de9bgKNRPbwwzxXxpiA",
  "key5": "4jjrs9pRY8EQ3LBiMsVdaKh7kgbi35PXz62v7aLpq51GUu8hi7tLfZ2Wrbvr3XMhBqZTPaoiqWKA2hjsshrrVi6g",
  "key6": "5QbJD2DoFw39oafP2yhUG2qqqFedxAreyUCNekyKTSjZsjJ2CohNJeMzi2zwJh38FbfPCPBhT1oU554Y7hiDgKfa",
  "key7": "5xgU5jjfPKxSCnecjUpEqrbVHbSsmcGXZyGDnEnamDB16VeLMEj6sjM4DHYnBzhGjFyXKPbjcJZLXGXRJY23V8BS",
  "key8": "4dH7SB35PVkcJCnrM7WwHynb848LYCdFvLX5gWd4Z1RJAXvcBmAvxcQvhWvZqhD1jmU44hRVcm6HSmEwyGSm7CzR",
  "key9": "5eZrcWTg3iNMFa3eB3Fb5oiKe678qR7zjQV4mbydg9nebV1repfvUZFa4gRRvE7XAHNWtC2dktRiLatyXsKv8hRr",
  "key10": "5nPhFoAVVe1pUVeLkBQNsYpcafaBMxw8hyNGqMTDsrdTbxeDZGRDsz3MSnk5VX3t2RMrDMjeQfxLZoxzHLeJB2Lp",
  "key11": "NLjMaM4wDkQ2WktuLxPEKsU67m13JiEvBaBMUbUzg7TvsLVMxH7e7tiMTJzsfbunP7BNAkPjMbS5P5G5tMgQigq",
  "key12": "41ehgTdaSVKQmMQRn5rVcszBdPdnaSwmTZtz2ExB2nu8RqkgvMfGcdZfWxBq3VqA3G9MpDAd1WUdWjbfnDniNJmB",
  "key13": "2wopRtsM5PoSpJY9MXZoMRSqR7JFarZXHF4i5NRALfQajF594SKGJQYW93PygtLQ2C2ByksLoHZawc2cpdAjCykF",
  "key14": "4UEMhGubeTHS8pP2Hnr1RYJhgrTvDKYut7cWCGiE7HjodsGEAT25AB1YVjjjurnPBNWfPgM1TMP83PtxcwKtrFhg",
  "key15": "3N1BRUPw4Dsjb9GtYDFpqVS9Nfu68b1n8gzvMqBU3FJS64jDetxbWuRHgi1ceS7Tp9dFumhANAYp3eUTGW3HHAWA",
  "key16": "457iv5kdHwrZWCcSQkJeihB1KNbStwcfM5HAsVrE8XGWFupuHMi1ecpU5dHJ7we51WapmmFDCmgQvsEkyJRkEFNi",
  "key17": "5FCzVnnf7VV8hVVsXFXQ7UPrd2Hwon9oSikSKPSfJZEsR4mpJvqShaq54U5JFkHdYcAHygAsYjvniYs8d2HcofCS",
  "key18": "4hzumGMmF9tNB1Z92XAUUiZZ5zE2j3jgLR9Wjgky4qzfTvMehfhAwFzYMV6mnkVTpWBrnCbcZCNr3USLrbxZxHpS",
  "key19": "2SdidpRmfWZt1VyLUdDYpj666J7hkbwYz4cQAqWQa7oCPcw1d93jgmyXwqXVchzGtE4hc3YwyJWCkRZqcW7SJWxi",
  "key20": "4igAy3TrZ73EzLGN6xnLHpm8eTH7CgnV5z2MPSiDs6idSbEW1hCTagew4ypkooY9PpkGPCiT1XYLTyZCwdKakD5L",
  "key21": "4hYQe2uSAu7v14aEjWvCZtG7DD5PGCtvnnLjtgzuq3rUtDyGB29pgo9MVxvYuHdoLyR2jvGUDnBjVCHkS5qWYhmX",
  "key22": "4CMpahsxp7Vub8VJDJm1DfY57x6xcMAJH9hbf1Aid6fowByHgfyuzjd89gN7bhrmXxyf9BUyru8CEVPDQnFb4aNL",
  "key23": "3wfHNB26Ye6CmJaJdzi7efmPr4xhxDR2srzdYjfUFFzuUXwwkEc64ZFcnzTvtUa1t8qiQuT3NpLtEkN1ea7SPGS9",
  "key24": "4rBhYFYcoZzQeKbaqZ57BmWQBR4kT6j4df8cUvtgzo6gHLycpDY3xmuuhjCytgCAfnQes8RAjZT8m9Ln6tpuKHgC",
  "key25": "Ba2T3yhq9TNv7skKuFME4Fw7ex6FVA96og7s4cw5TCW4gG1EmU8RvttnwjnVmp4xHozsVBax5NQwDTx4oKb3s7D",
  "key26": "48YrZ6maFjuX5LSjhDcmD2BHNNDMiFkJYCoDnoVdnh7VpHfYgxBJZgUb7ENpg4Pyw1U6kn8sbLFfT8N6g5krW4v7",
  "key27": "4G7WEJC6S7j7WUkJUKATf9qeRS8Xh76g3yjkue6hR1MACERzJNtT6L1sXQwCcamLs9Qr5R5NbRyqDVS4STXPmcbs",
  "key28": "3ZZcqmJAwepFfVHjf5ThoWDAmfvxLicCopRqsUPiDGkkb3ZZUeeVqCPsWNZoRC6VE4FVtWhfwN7gN3bD2d85UhU7"
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
