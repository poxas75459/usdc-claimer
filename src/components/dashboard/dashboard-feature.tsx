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
    "2fcyo2Zm85dP63oJAsR2cJ4NLhN9g1WsG5Yi3ZzZabTFQeixam3oZCHvhj5Xni8hFFjWwYuxegK1wCcCkjVHxM8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwRg1x9aTMFvsrtZKbqkEPunLykGTfTL2pYj45CHecAHZ5A55SbxetX4AaR7em1ZxD77AK9rxpyjMmAwNXNnTAZ",
  "key1": "4ULN2A55zuX8x8CL4qnVbAFxfTKZhL54yv1xAuhhjbsH7hDtziDd6jcRzP19RtQAo9EXTSuzyKCdBkAQGdW2ZaYB",
  "key2": "2CkeiFcoHXutnxdHoTZPEmwU4CMT9gTCvLGddQXeGZN9mj8K8D4HQV6KMLo1vQ33k2G4V7ZYUBUVEb4hv94vJpkH",
  "key3": "5nzwghQ2TdaTTZsTysGSe3DNjh3gXb7GkhHSVZQq9pZi68YDFgRHFwihH4uaY7FXupyHFRZCs5d7eGkjajnfvqwK",
  "key4": "8vqBhPheBMxRKJKPqvQKi7iJ8DjQn8HGd2rxCxEUu7o8t5RaZoD2Qm2SiQnzbx72WAGi13Soez3TUEgMFmcbyPu",
  "key5": "5yoQfymkGcUVgxHUyLf6TFnTkVg5ajEk1wvjZsL23UgCAiyskCQMvLzq7CyC8mYSTdToJdctZ9opas7xTCizNzXj",
  "key6": "38B3yp3aScoGLxZfULAnttfxBDwFvEgnF5NZLBUUozmUyfNX9KtzEC4MJk4exgykHCHcvxgrR5pbpnCj9ztUqyX1",
  "key7": "5kYaQbfdbmsk9Xc8UD8KXfrr26y2GSWP6o1s9GkHWoFYpWcSkpkYqBjpNvdeTFE9fR4VNSoPkQCiAJtVnQQEBerr",
  "key8": "45W24JCyykpxgANyqFQmvBgNbuAJC98k54ApwxuS7CRhvWqaaVtJ14yQyyKi2V5hNB8EuQcfC3bavnBmTDpNi8oP",
  "key9": "32HGX2WGqCS7u6ztR7SbrHgRwFBiEMRiPeEPHzjghnX1SQL1ypwx3UgvWbjtfBDCaH587cdvpqUMi7YYNsU2btxH",
  "key10": "2VmMcMG5jEKfy46GhLNNSdK73xcmnqg1XKgspMJUYnF8amGzjPpU2JKNNjpLCootAi5DvePz3ib3oApEemnCEgtu",
  "key11": "2qjokstcZbHBbdYBnvqPj9PpbYvjbN4CY5APwUXs7tfLeQRF695GpGUzNTQvUPfSkaoZeEJ5SauSkU8tYgsaAhXU",
  "key12": "5e9xxdBadxJDxtuE5WEjosjwpr2Foz6sQtqZWcyksPVBjkTpLziZ5hFzeKKoKFWPUgKS6fy9dg5i2U7ozu6HC4jB",
  "key13": "3STSfP7FFyaEqC4Mtq994WC3soXRsPXYQSimcHXSH9DyYN3LK6wvUMRFAsqUYQgzh5j2m9mjN4sYNbzZvcLtyHFz",
  "key14": "24s7vRP496M4yVvKj9htfRw7XjuUpip7TRpsRHnSGYczYszF79CgbaGPXuA3MFZYDfZmJgpSKNUn49PLWT6iCWh2",
  "key15": "4zBXraQfpLihmjzep1efCJRLiKwdQEn1efLJgVDe2BVZZ1RpviMn6sztNvHnZ8J9EsC97RWQaTYf3gjyKBqtsRGV",
  "key16": "4gYJN6XNw3emdEHBCWN1txt1qSxVW7g1SczNiqdSchy8CRwctMYuScuZaHTvhSHMA4P94K7cs8WH5rhKTrLU4c7s",
  "key17": "GUE74tPQ3A35iEtsEsbw1bZ8RLpinFWMFo7J8bjzwP5h5G7ycpLCeNzAShDJy2c7dbvRcgLkyqVfbKqSiEidRKS",
  "key18": "FZtSHMWht56f9xGomu9zdJdNRJnzRqh8okaA8WaakRAHr2vcnUjfvDpqwGe1nNDGUQuAf2Ja6p4Bq29HXAWQeXW",
  "key19": "2dLR9dkLeLTb5EgreASetf6WeFr7MpxQpPsv8zHptAXiNh5u7C7JCyzQPTwdB1VjWTgt3nTxXRY5cKdQj4SHQS9k",
  "key20": "5yMdaiAYnpTB7rSNDtbRK13dcdj73LViNP6qXZp52gZ8me9ZVbJkaFR97aE1yQKi2Rfnm3aBBtgGor9mwdeX4Pi2",
  "key21": "B1eG3ME2Y4dvPbu9bB3Ubu6rEsM2nDTTmN411BofNiV1SDyZMM2QGzFGyW2KbmMunCUW5xQrNUH1s7XPF2LNuEa",
  "key22": "2wPWhRbxiCspTSKVJLB86nET35U9uwAu1sHy2dffT54D7HDjmVSL4AKdoqNoY9eSaDBESsGgtxtFhQbP85rfbzM8",
  "key23": "3MUiCvuQPoty9z9hmR5XLQ1RkbBUA5FbnBJeUAugv6KVq8SBzSKrFejAbe7hq2s5oAkDvy4NNJS2he1ge1Ad3hF1",
  "key24": "67iqYe9weRQwXaTcBiK8oUU6rVtg38creYafpK6yV822HZwpGqBSPuMUvLrQ5fbzaAKyv1C915Lo79qgnM1Yqm5v",
  "key25": "5SAhVKTgNu19zeZNhBbQJkyKJ25wWoiFoCSd9B6kUeQChD5q3RyZ5scWXtTrBUdg4J1XcjPDiqZkLyo8PoBCiw2o",
  "key26": "2Ru6UCN791oRsggriJad3FZcXGZTLbEVRZocU5KZzMNQdaB1cLaHReAAGchW6gPxgrNKM4UubDKWHza5GZiNNkjL",
  "key27": "4Pw9URSzFKSfoGCeqCbt2fxApHeuqA6ar31UqpkxWBmEHy4UeXrDu5q5FoqQ3HpBxgxqiYch4kQfbx3SHvqaZh7F",
  "key28": "3Mqn73KQ5zHda6rD69FN9itERZ9PYexD6PfiaAUZgoHq4gvxgA9bMxU6KPNoLq2QUq8dsegHpdjnHvoPYGvAw5Sv",
  "key29": "2F6YzHTnkB5owaKPnQckc6PeXMtL3RCkpj1jAT8i2b3WT71iuwPiBeTVAaSZrmtGf2DayeSQkb4FMNmyUGYaDtGw",
  "key30": "5sGTNmqs3nZhSwtie2t2duHLZNq2eNkzN8T78NvDudg8Qzpq5TjfDEMfgu43a43vjavgKyeq3KwpUnzM2eSCPNYU",
  "key31": "4U4BdvdBqWcZxQm4faRtBjwgue4oPCKwvJXNzVhLeWhBN1hSMwrwvt3ENBEbo5uB7tSCW1mBHrfB2EfKPU81Rycz",
  "key32": "4Vo2ZpRCpqHUcpbcxm1pTkp7rvSLtRkPX7xF2wfA1vgXdsrmRxBJA7NA3ctuLtEnyAGYG64w5xghwWQ929TynLko",
  "key33": "Db1EXgA4akWwYTE41P9CGmDjsHrga9BwKqCP8yKKRmnYsFvQbYUNmQxfDTak9CNf8okugD74SiC5YTUT35heAt1",
  "key34": "2xCF442NPdPkbkeBtddxT3ibMrp466Ti2ALwLWik7L7LHkf4PcM2cYykiNxKfwo9ZRFdXNhj3AU5AdghTxDr22ec",
  "key35": "7LntTEk2LLLgiNjzyv8dtU5jJso92k6wTgMdT1UFzYiMScTeMQcvq61nC6ovxPDnSSmz3Xq9yMHwuR4atehCDnk",
  "key36": "66FKUBHJtYrFsuDgaVvoNZDbAyiPrftcip2rGwpkiGBegP2tkrLEofWivFFs2H2YJfKtC4EDzUkrVVxEfLKW2dhF",
  "key37": "4BWu2RA36ABRe27VYdN2f6oRSBho6okdhayfXvWnZHMQy27wCcZDA2kq8nzsFr3ZYRFdqRkLx9PgGsMNv2HA2KjJ",
  "key38": "5pUf5wDEh4QBVt1Cs3FmZUDzRoURRJY8Rz5176AYuWSse2yMXRWBpQJzNC43mCSuH7jpXpBEbeiHEW8pHow2vJQf",
  "key39": "P231u9oSJvsYcf4YaJp6hV9W7Umz7EVUVwvFQFW7G5ZKKKKZGHo7uMkNBQUaKDU3xSot734UBeTcgJ9P5WjnaQj",
  "key40": "4fQ1fDXErcQ6iSLo8u9tSKUEVfCnQ9c6Dyf2vSxLMHXbjPzQCKstCim1jBUFt8cQavLKnrCvA46D2PNtSet5Rbre",
  "key41": "5ijrt4czP6pz4CZcQaXyCQwwWHriyEBxpXER8iMTp7AzmwNuoW62wNBUJ3mYJjvnrSnPoATFjdhcXuvWMbhsGtUU",
  "key42": "5JDhxHpE8cz8ZFjV9Jww2tMFMxfVxDGpi17nBNL3gGqUewjrB5YxM3nhqMcpDDMrxnF23WwK8qzMm8hEKyGTXS6Z"
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
