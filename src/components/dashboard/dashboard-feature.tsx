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
    "63NX1fXaeuWC6PnR4madumJqXUzZ2VH6kvbJoGoDN5vDkbKdXU4MG5tnP8kaDbnWgiF1oft6XntuWUwbWcPYnqNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjaQBb3Lu77oCYzbX2v6cUujUruojbY7afphTAmxicLHdhMfYNVEAbofSRauC91FQqBGq7MBbjxpHNgTDV9xRTz",
  "key1": "vfPGbRuG754osUqzgw9DiWriuDdr4jH1Jb8V2J12UuaD7rqaLT5PzHQi8L4oyG7616SraYu3UETHqb8Ns45234j",
  "key2": "4eMRKhDmmhshZitwvqkvRrMtbiBUjYNKk8AG5gh4qGtBuinMdypTLwJsP4tK8SXFoFdzccty8gxXNHa4GveHHEpp",
  "key3": "5BZj3fxiQex4um4GcGzPTBgiqv1AD7Ab2unqQsHud7JV7PFLHfiCpuKm3kx1qQQTvTMdCsgMWiN2JaYo9KMPCRzK",
  "key4": "4esxFcSKiSXLo4moBdL6ZEGu53H6nprPmjB4YKhYSYCAoW7CTCy2qUkfFS5GFXRpmDUuP9C41LjVBykc9WwCib1D",
  "key5": "2CRihECLQmkoDUZrsv6adghB64Yfu2kPG1jDKEK1u4EN3LyY82bj7HD8Vf1Ss8UaQPhQ1GzaNzgytNWDzpYEdqVk",
  "key6": "wsZmRMggFAFWpCXgo7pikGkeXF4RuqCbTuAuLF623UrdjALdC4VvPPEPjJLcqFGWs4rT3oHR9wYYpRfJ7HyM524",
  "key7": "5JSNAdY6PH3qfHa7kiQoDN81UFAorgSUqSTzMrEDWMjgejchLtRQZ7JRVjb3u6JHM1ityx92999cwyvosqd7UFwC",
  "key8": "59Cg3Gtm7QQ7kzswep968xUDAQNUFMxMUikCyU3hBhvfMLR4mxXTwfnBo5mneQffobMUHsEsU94jfsku3z8Xvjj",
  "key9": "4SpYYG1tvDWocydYaMmSC652UJNaEo4ts8kocGB6sE7SQ1iBVn6HyPdMSLQXdY92JYaafPJj9zoGzVZNtwpHQXRF",
  "key10": "3EhFmyKUR8jEAFTPtnwUpR9sb24ZCWeNfj3qnTKKukQdv1TzuGxq28vQzRiKNZCvZhV6LW4STmRpB6CJXFJA1Aix",
  "key11": "5W6D9hCmJs33piNnn37DHrx1xK1z6rBX9RkQuXTsU1R1QkYXTHhj6KW5dwX4so4SieCUtzKuYBsAiCySyF9rrCwb",
  "key12": "qUYKpD8ZRJouw9BgmYHaM9sU6CVkmsVr2xGciNug7hP6d38s4guBj5QechzcKe6MQL3J5aXETn4RSJFZfNSz9Pg",
  "key13": "4okyVPeNpCaawioJ6dFKMMPpQcRYMxU5eAJrWt2TsAVmP9VbDzaoxLVFS39i4Fj6boEegf41jbccVZx1fsfF3Myo",
  "key14": "yPjMWCRbJgMqyLTE98VBJYDB1wwa3qzgfuc7cJtxjRjd2Su6C5PYJydke7v6d3AL61K3WDrKGZPgtYDCNEyRqd4",
  "key15": "tx8ZzbaNZ3tv6RpmFrKNQAijSZ9nKLTvY2nniaqgbQfV4ZKXCuz6KXDn1RkgWoxGViGaL7a19rqDj3ptTSJ5JQe",
  "key16": "2kYuwLPB1AU5z9FvFrVxXF8hX1sbXabW16fbTSpFujMSe1SPk3CpyCMBxGxiyKHENMTgWzgxTDMdWSrkTfTUB6Bi",
  "key17": "2tWFR3XFkUfx5mSqCZLbooMuEDoxcbgYcujGrptoxRdXW7kgMN8teyD8BUmxus92Qi9NbmymkKRmCN5MKeFoV1eA",
  "key18": "3CaDUDyZ7j5q4zKvmtDqZnFbFgBHRTDVt7JrPDMaCvLwn2S649DYwtmWemU4Xr6yNRQHBzBtCHx91GE8vCuRGJB",
  "key19": "51kRrsPxKcwT9kGnE7ayqpZoMiNj1dDLRCJaWtKrNfeqrgKByTkg7bhgJH6wpctaChpGUYRTo1EA1spatwqvPHSb",
  "key20": "3tKPo8198o9DEzZPPCgryNa4DShnvZZQQzoZsPUuycuKwYBx5dtghvzvLkZaADX5FNidpCWZEoeHfzRnA8P6TSFJ",
  "key21": "5j2XjrtCe3qrtioDFHaNU7pfVmVXthQWoZBxBLoCoxQnisoxw83mzeL3NPUD4FzmuiU4qxxpBfHArQ1soBgMbiQs",
  "key22": "3vAh9nxz5ZfoFinCWvjdvhR9TLnukHza92975VarzoPm2rehJbKz1rq6egjvGXCFuDzWUZVTQWFhM2EFuhhk5isN",
  "key23": "Eie1xnj8syN67zUT5Z9PQ1DsjS2LuDbBy6dDmy75i9mFBcg1b7dzifpd77DH3ryALdcuNMSzfkG2Sxj6uisWNjQ",
  "key24": "3eyUx89xJ1JA9ezY9speQsnS5m2zFNmGGWFBEiNaUDqU7SLMVp5dxadEKA1qhD9sS1Cxyjw337xWaXsDvmoJ2kPn",
  "key25": "3bMo9asHeT1ede78YRbbnBqwaDt5xS9pxokHWuktpD1LBjmMW3REzgAiAUFsBQtzdGPuYCeuuiwvm3Mm8bGNM1mo",
  "key26": "4A5qBGxFWtJXEuT8reV6h1wsZNozp9xur7H44dfhGX3mXK7KfCBvA42ErPWhRFPPr3VhdcDV3kUiLmU1kqL38vD4",
  "key27": "5GMRUv3ytaK9Mk6aZ1kPT57jBgYxNu8keeaicYsXRvwpEZBru3o3XJndQXAvYzmYMmUkutN4eSNMy8pqysWLwChn",
  "key28": "4kSWGYVKfjEAGD3jNWRtByisA1niw7kdBcg3jydDMFTtUd2U6UJQu59xSCW2z53n8eU5Uxr87ubSzvFP7vd9EEg9",
  "key29": "2wjfuD8aUVcAvsJrorCadX8ZJF5SfukAiNBuPDWQfyeZqyHp1ckgrXot1DTqR2ijDryNxKndJFH4VzyHestQvgAk",
  "key30": "UyRccJMdhGdRPNwhMtxgfXvLX3gxs68aLRfapwzoZnHoqsYam8vq1mvX39YFjdK6qyo36SVUQG6ezRezHf5Skvo",
  "key31": "zpq6zTT7kawTMxWAQgRQ3gRmW4fMVhYbV68V3JHbstezrEsvqT7kkiVLXYqGHd1hMPFFBmFctacUVBm4eCPdNRj",
  "key32": "5FN7J6oXDwNXiMdZQFYdBa6UMXQZoBVa7NNthwh8567E74AQ7ZAKF2znoeBXhfHr2to63QLaxe4ceGnJdXWKTieC",
  "key33": "3Gxv6knpXhSYmKBHdG6s7tTkyNVDkZx4MhQQeVyouvx55pEjAjfKTEngXcvTpRa4nHiKPsrPG3AWr5MaD2XYD926",
  "key34": "5nspuqSsWWGtvJwAVbPSZuVK9GXYxEpmNx7ad8Yg9UN4PrJCCWCiACiS57UMswitggcb2N5ipVF9Ycmv74p7jWpk"
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
