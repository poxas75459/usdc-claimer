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
    "Rm3ZLb3XiqQGogAqS7xwCon3B7kDvzvxK2fxk3NTzALNdWa4jhQV8cN1VDJF9CLLTkbxHPQ5N489G8hMT7Eo2L6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVqvxmUgvnPkHGD7suj5tbAx58tAWoy6UAq14NMcK8qznXkvKXKtKA66TUid5eVQ6MyLPJ7XA7TF5X4zGSJQvdB",
  "key1": "2Neb522N7hMGdmiReKf4Y4j94R5Um3AfrRqY5CEoJy3dqvSosUeV6i6v9Ag3WfWGQ3kC8bDbT3oEJYmYz24QUifs",
  "key2": "3Q2qdZ9LhxmUzqws2JF2duJsNBNCThJqKMenj7nDXvW4D7ZG7D5jbSWpyw2UmQEs9NiTSMCMYjTymZR4sGiNpVJ4",
  "key3": "2bfGguhwYAQJCYJ1PXzhd6n3LFDsEq72BKNnUPXqQPE3bmRoaU2x8RLtfmfM2CLuBC1LLXuEEPuA6T8cp1HZmk4s",
  "key4": "LuszUXukPkCZduyBPPPy1QHg4sJk3juMmhefzfpd62rFXq4yLxiHLqHEMwgpuBtE8n4wm1S96Cya66i5Y66k87n",
  "key5": "3iKH3UTASiMBpTYEafEHbtRWbgMnWrbLRUD6nhhEeLcd6iE4a2Z4eHeSpizw2QyN6oMk5gwBAPM7jRAurKWYLEat",
  "key6": "4PDyzMFoEw3MuTDqdecvKESzAeJePFzHhXuwqsW7XaxmpC675L8S4m4MuqCtDQCcuGJ7HVXaUUx97ZoHCvMviuHk",
  "key7": "6292L15Uv4g79CuKToUs72mw7EJ87draH5fEi2jjmKisd4yGNQtntDhMtHVX1CKRBja7SUVd6uiaXNBvziZvDCqd",
  "key8": "hjVfxWwvqJ1jgE4W5PCVxKvRXdpxdtHed2dxsx3oCcxNYWZMU8awfifeSBW9oWnL2XspaTw3Tmh5QGv7YTLv4vE",
  "key9": "3JkEP4jBUTNnzNe8Voq8Q7Brx5SaXUyDgxAoYGR9G6FyVQwfv5aoHemqcPXVeNcHvAmCfaUk2AAsww6gRTYXsxeU",
  "key10": "32MHLcBGWZFko9JMJs91mHzgTvGjHp2sMjDHjaNpUV83cjtfca3Mn6JQKdEu8eTaeNZvQ7zR2Rbxt87bnfTmy6YE",
  "key11": "6766wbEZXUCdzpv5PySJEXmjzVuxZXUiZuffe4scGb7KHHevSsBNmZrL7fWxSgXEWWPRa8At62UsdPh6dBeqr2Q9",
  "key12": "4iWL18oQtF31PvBXMogpDCrQDn1YJYFnhg3GLJd9wgeKr8c7s4mnPTdAXH3BDrjJn2kDX9igdqtdHbBGX9kzAr5n",
  "key13": "4r2ATcgNp2hdq7UuQ9uXuYAbRNEU5vaz123MjCRsSqvpgqjmu33q1tSsWkxW5ybgwLneLTZxGRiC8BvBQJ9qdZBB",
  "key14": "2ShaEFPTVGfYy948LKpcVBStEAq8UFXJqn6WxEcrGjmULjLdtkWfVH3Zt8UJorTg9jLjUjgvfg6WaFu7kRpvK2Vm",
  "key15": "3LutVFhjUtyyRydSKb1A8RBnp6XtUZvins5Ukfkgq7rjBhxuNGZpYGnwQyvVvPVvXJDtTD2N5VEZtQK4pPTStUkb",
  "key16": "JtEinSuz5meo3nvULXgzVLhPocMbxH5PCfwqgkojysEdAFKPY8vX2CD3wQvwiAuo4QpsKfeC35uwwN1FxZrXsfC",
  "key17": "2J72yNqtN4C4CxisFPgECaW4EoZEkNLy2jZfJAVi7ky9iCWWwo9VDAJM6CWBDgWezJkBpaJZSXXL3uFz35iKtRF4",
  "key18": "5kfEJTpN1Znjq93BkAC9CjLC1zBayKcQqRuyq2k6rVW2zTnatv8Fwzbx3c5wfdYzJVE6qY8N2S6znYAAD3hALLDJ",
  "key19": "JN6YrAvYPcpJLrLNYdhdiQTNaLCJGsfB2MXTjoMZguzVNU6nJRGn3wcFJNtYstbmRZA55EQLnQ9wFt19xtTCXtV",
  "key20": "31Ffb44gQUB78hVaYV9cTGVpnxxJFqocvR9iLWVXiVVcdZtMW5mAwFy5nrN7vM54rNawCk9djN7UgrmHD7fokRE8",
  "key21": "Ahqsn7rJaUShsNxSAwbZ2915p42qwzBZjxvgRPXy7hzUNY431JiAPrYR4NGS5ceQoGs6tVFU9Fd2RhG9ZAAERKE",
  "key22": "5ZAR65pZ8A4Qj7eQVAmyNmn6TJGd1gMgVGYCAEaF8t3KE56FmEtaWebXD2X8dCALWgjDVbxragTKXKznwK2TmLUv",
  "key23": "2quaMrGq6KKjiHsVWHbWyWq7oWHqGm8oqyVJsAPegJUi5NZMTpZJ8tUz1SoxEaYnC38LWFcqYaGhZWWa6BukVJ3m",
  "key24": "smjKkdoEZdRAzjfjESiJSaR8NHK7z6hsx9TW8pUycuF4MpymNAvfFbFjGSBFEaNAdGbiHL815VVUdMF6rq7zydK",
  "key25": "3nXAxLPiqDg6iHEsNEy7tD7yfdtSPbuuqN7DUMAAW5jZLBB9W91risFv8tALNF6EJkFswJzzTmaWk84w8a8BgGAs",
  "key26": "33rqS56L7AkA2HG4EN57wKCcDqS7mmrNvDdfza4s7wVQTdXgxbxGER3tUR42nSVtqoZ4HMUj4Qv3pogo57SWVYMG",
  "key27": "4knLRydc2eTYyP3SWFFp3crukyTSybiVyPJQ2HDE9Ug3RW47R4KcTdfqdRVbg9Kt3B3JaYWoBDCXcpWcdTuGiTwU",
  "key28": "3ypfk6pKSouTQi6fQT8Wo7WRsArXToZokxvybS9Tt5KJs9QeB8CMiWoogWQtjEaVBQKNE1rP3LDXBjL6cEtJCiSV",
  "key29": "si18MjPqdm4spJneffSEyrkpisYcMvMLbWfGiuVmpQtSzn1pZmeuvo1CJGB5RHTbGd11PE3bkWEAmHhfnubsaFb"
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
