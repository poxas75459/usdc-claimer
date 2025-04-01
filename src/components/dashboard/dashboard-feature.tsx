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
    "4tZeSBHUFTnrJadF3RY9D5Ch4byUmGmrUHwpuszfBBjQ9jRpW1T4pucq8GbRmVBMdrS8E4jNYnaeMLpFaiazpVC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dsiviLvCFMspo4gKFb8UnqvLQA9NBiEMDJMieGQW784iHKWr2JTCNth9BG6wwC7mjXRC5FB6DZf4V9bmLM9ZGAU",
  "key1": "5mnWiaauhdchF9Tqx9HaEdm5DeiyULnDqxpPeQrFoeM7Hiy6MP3ApQWw69wGjjbvcvwNj6C2AoZUpchTZpBfCwzN",
  "key2": "GBeiYFmR56HYdKRxnRgR6FQwWn7FW8bYpLm69SC19YkPSqe81QtDFj3rffGubBqcxFCW9MHkk1YptipZTNoi8cs",
  "key3": "4mBu57AFRXCHDmRmuWHm84dRATfKfVrny2LKe6gKm2NFjyWLhaAjEeQvCVJsoCUyTPzgsParUdXkiyHy9xZtfufi",
  "key4": "4rULrLNw8F9EPvB7zjHGer4gJhnimSNRxhLB9igbfSs75E7K67Sd8AGp6bJ3CuMCoaQ9oDkFF9EhDnuwj6zkDAYd",
  "key5": "2WMQx89YLANeVqQgDjV6r294SP6HS4m9KmUiqSySwZ13t1Z8B4xej9Sn9Zkar5wYdbjjYohk4chre7b1zneXPFBX",
  "key6": "2yKpUEAyeLrMsbQTtxfxyJcj9Ny8Xdj4iEuSrFiRQ65TFGHt84JvmpxQShBfh47jC4AexwPBvUVjeHsfvjKJUNUz",
  "key7": "AAc21tamNrxY6TmyTUMvEwFmh4Z34wRsUN3iCKSqXy6b6z6PzsyESakRE99rCiwtKcYQWJU9WdtbEFUNjFJ5rij",
  "key8": "3CJNURRXYWSFmRmdFzH5AvkcPsxcj4yJ4TZxHeGGpEFjmsFZYvCbNHmAb38g5y7wHdKmNgfra7sBP9vxPtapSmMz",
  "key9": "3tok1y6QULTxAxiyiK7zJZifrhVmnUgQXGCsfXHAdjz7tNPgzNPuY1M1KMfNCtvg6pSCSLt2QYsCsJLahuVjp2DT",
  "key10": "3s1PjQ7cE2tG8E2AMqL2KwaYzhaL1NrULxh6Wd6Vxfoen11aQuuh8dUwE7Q5Z5csWTXTgZdKokpGFSU1XqCsFJaK",
  "key11": "FaiYSFDr8Wy6KjvHt4sVU6YtdZHckz1W2FTgGS7NFpgoyJu7G96t4KEWRUEdDNHo3AjcUS7NLmZRuHTH32vQeEL",
  "key12": "3EjRpweLVseGmBuuMD7X5qedoFmKtN6P3JLTxaxvYtS24cj3NebRGrv17KU14SijxZbVvan1bWMs7mhBfyAdrJE3",
  "key13": "4m7gKTSSBMJ8C3EUJCPBxoZ5iuGDmn8CJV7cAbT8fSVyrGAw8w9kUBgBq2m4R3czaRJ3eQ3x7zc9cnbXieei3n3R",
  "key14": "4Z4v8etdapEpwd7vdNTjZwmnPhXqS5aqPsGnsxboobCycm5FDjFJKayo7VQ5qFT5ae3N131K2iUBrskZHakjrHob",
  "key15": "3dwGcMLzBj9p9nr6Zka89CZYEAF43yFukzujFcRCTWwfSqSAAo9qzGGe6MUMtoMBwsDis3bvRWCQT33qgvMr347d",
  "key16": "2jkDbMExdbAaGGBfLD9CnY9DWmNSpTyuQpSazS4r7RLxUjyryDjHNYAgbNJFCs2s4enb5MqcCYUCDmeXbtKxZpVB",
  "key17": "KGi2DtKiA1sNtYR1MQx4DUELrSDprCfJcyVV7d6v2CB8BsWbRMRd6FTyiV73d5ywoRfqNX4bCDC4uyMdHHkR1XC",
  "key18": "4QrCTjRtkact3AHvUgXc87BUmr2M6gWvBfGkhyV1rmbCsB1j8Q8QhnM42Xa1GmwKoVKghNYgrnF7nsp9VGTmRD1z",
  "key19": "4DvBNST3RCxUvtrrK58f88P8pMssUdWAgSrQ1vBrtW5w48hYTY1vDpyEXSDjGbfeV1XtuUFsg1TwVNPkDqNLDnQv",
  "key20": "5rNYZkLLPromHeYcvwHcu32tqDotY69LLbE8s3rWPDcptoBL9sfAFFLBx7kiDEt6vTMCz5ct5CzPqZ5GTKZaJB1r",
  "key21": "46eoNZUENUHZ1zijfqHS9GHK1j8BW61yzHKpFMBxitNyUAGiQvPuY2KQphpjzhKBWE6RCdeRaUWfVanHNYsjSvtH",
  "key22": "4S5mCT7sezcgVUuwnJyQgViYNrXJYE8MJPUv8VAqRT6ZvCEAB6LxmMmCM6H5X2fJAsTqyZQksJKWM7n7ErQeHGay",
  "key23": "293dVV63GNygvmziPgNyuG8a1bsGs3VTnYQCLnMBRnXpPS5vLeV5p3yHhxb5NdhFnVVSWP2gjkwXRkKsSJSSmPay",
  "key24": "Vxcqkc9Ru7rjUx2fU7a4DXjP9hSpUrLs928oPsuWhDEkYexyC9GDpZn2Ljc5eMDRnpgCnjXivmBonuVU5yuyki6",
  "key25": "SiYaq3zGXBJ1yA4d4RcStvKDtACMe8pEFLhwkoxDmktc6ZqcmzjBc3yeKuMqtQNUnErdELmHTan2vhs5apjpudy",
  "key26": "2P7AuSTuFJ9y19gH8XrkzrZChbp2CExw7gvjL19fi2yyRSbaGUWpPf2Mi7U9aFhs53P9Vd8V2oGjat23xyHYhHNr",
  "key27": "47NaKj4xKPzTdvZEmgWBuM2MBx59cTYNWEmq5PxXx9gXBRScfSYrY1FSwvDoqSKeUMcWPTTxNsqhkaqkoYpBV58e",
  "key28": "4e9MdeEwGcWPZdn4qRjHv3DtgvFkJ35NpSTZRRxC2WNGxpWPgToyc78uGVtnHS7UfmqvRvmpbMBQaiEEME4Q8bLN"
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
