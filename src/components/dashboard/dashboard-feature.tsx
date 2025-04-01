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
    "DXWzE28Do5Zq2DwCWGMMGGJ91YeVHG41NpBkS7Pp4y2cGPYWFisR9jo5Geo7vo66ehzwRZmsy88p6YpSyXqqunK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ubywijXL6FaPo9bcD9ywfBrrqr9afNAR7s1GCLKJKU3UUYWP1opXpDBrT7AAfH1BG9GEkPqjkxpE7qhFNJ3HnZ",
  "key1": "5rt83EhNpfDkNZvydqBWKQVPUeqtsCtmyttJG1FPpe68uK4axEyAsGvZPLuqBgdhZ5D5ruY28nXcu9JNg49poHJx",
  "key2": "3hdLE9MJAqubaZidpy8ZKs1HbnhzXCwHZxMYnrgpA745PNjdQxCFZKji2NDLeauUhhHfvz2VGhhgQBaVV1ZdXsD3",
  "key3": "7LtAdm7718Shw11bPo8TS5bawLvembzfW3SGpc6cdnNiFr4ciXj773d3hbXmPcCEwYJjij9NL5NJ5CPhL1kh5j4",
  "key4": "3hv5GUEhkiRgF7ZueiikagrVwNhNghge6KQn39hmzbrz8RBG2YRaNKNzxG1m4jMGmRYpyF6pvoQz3KvbnFEEJDPN",
  "key5": "FKWqGohw6YQ8tp9esK1118Avu8yuw6QJstveeTFpYLTaenJURwgnMU1dQNpXa2oAtR2fpfGvCnspU9LZ8EyKY5o",
  "key6": "48ZHhMFdS5gf5eKXSivt1HcnFzD3YcyERPQsNU65MsToKKJgEfWtLFdB3F9nvKXFBghm6iFbssnRX6awBdJLbSeh",
  "key7": "3ZV9cB29R3dPFdKr23vhCUiWBe8dVdsXVQE2ugeeL1fasfzXuf6wPfQt9ETPbteTm4wmTL9ixwJkGWP3XtfCeFKg",
  "key8": "gL8iVMnSWFkD2Zsrdnoo2pZSe7UxLXweNU9nsXW95i5DZhxiwH2UGUFcuYFJG6r7vcg9KFPBGZT51oAMSSLa8FH",
  "key9": "2z8nP1rMfADd8Z4HbmAxJgwNuZ3m4aLbW1F7aMgydwTAQn7oovvxhY5kTPvQs1AbujV1hS72RPM9EnCnW9YmG64V",
  "key10": "Ln2qihE3HwDH2CF3wYLoF1BsHZd7JbWem9VPKTMmQvNuxLTaGjUnXraqWJXwQFtQebRwoAmFpZfVetLBM4nPRZu",
  "key11": "9dkb1VtTirGiUQCAPZG6vtaXAkQh41LSztkEwija85zPphVfy5pf6yggCDood2VUcLcUg58MCq4YvL9yUcWUB3X",
  "key12": "3yuRRQdTeDLf9wegFVTktjTCG4g65EFCgQx2pW5UcPvmbwySzDSeQzmQ2U8vv2RA8diQAQB2AAHk1Mx72H4acXsJ",
  "key13": "5VpChugv7d9LVBcvjmGwmUG2NKQ4sF7MBKQQ8wMPhE9GSJnXQZ8B9wDg4jwQHj9r13TNtfq5VHypYVvep4zMrXh3",
  "key14": "3rzuSkaHvrTzyRYPqqiF79m3DD2HuXymvUj4vRQ7BQzAp8zDV73MzmZZrTQFSUQTshB77ohxtZ2v6zRNjSSwfqBu",
  "key15": "5pNPwtBDnDVDrp68ztkWePBuaYMNg2ZdVSU7HnATtC2PYuaMmP76rDeJvXfZKYXW9hRPJZhy5jRMcShAyvgjLS8S",
  "key16": "2Rr4N3Mo8FL7HAEBKH4SMQPGcvN3GkpyviB9Me2ob9n3taZwb4ecg75gZwEH77MfL8Gswxfn4L3nQYS24AwWbvbz",
  "key17": "44VPcBuA2MnU9VTEy48x2v1APe3i6jMwZsNEfjnEyrxAhAeUm3HoXqe5ejeKAgGu9wPupbrLz5QsfFySR8HhSkt6",
  "key18": "5hNd9KGf3nvEWyEvaDM6MdLhiJG8ENBJ4M6ECHYwwTeTJEqgWb5nJkd99YUKtXYYsRFN96mEEEmZhEtnBT9jpH9X",
  "key19": "SmPWvRUW9VEyRcMrrac1kcQ7wK8eJVVVbXsPq3UeWnMucgcknbpAiDMA6zUzHesLRa8hLtFJTV717GhDt7rZzeS",
  "key20": "HdP4FBwRnUgzfRTeLK6vJLDsQr4jowWwqKNZDsdh2tRith3jYYTYESCmNPhB9soNPa884Mxabo7cELcHzF1iBfE",
  "key21": "3rBDVtXPE7KntGiNe5V2Dsmi6bWXkHxCaDacRCzreEazifT5XSMKaJhnUdhYMVE1fzTJagKUXjhf7YpiPB8xBqJh",
  "key22": "4mwDty31qPBp9dcYdLNa8d26Q3qsdvnqWGrRbNyJ8PiScS6Atz8Jrmuf2j7cwu18tWhJ1bPbVZu6y4R8z5a2amDP",
  "key23": "5tN7FrWkYCQVtf2a9fQkuUwcJH9kLhZPLY6Q4PKhoTYaVWGGYbyRtQXmfM8ZMd5N9jP2MdXeL3xAD7uDsDAAJv1c",
  "key24": "5DTR4vjHf5qtJyhtE9gcQHicrFRWkuYU8uCvcsSQEtZT9iYxAgPtZJ8SPxkYCd96kJwUg85eB9Uw6iSGLoiDLD82",
  "key25": "2NeD8KcLzf3ayBMbKW2uLJGNL1QmrLjCLUYNiahdPrPd7sV6iJX6xukjZy74BiiHsx2gyXsYe7raPiopT5vzUJtr",
  "key26": "35a5FRw3bWFU8LuobFJiYFXg9VvsdWdzPjqTZxES6G1Csyk2jTGtHGWGwwKfZFZhFmMzbxmvXkXsTNf7g5aQ6C2t",
  "key27": "QW44dMji932hrjbyBoRHGRqRbAY25fAx7XeUoDJ8LnMQYbiPRbeW1mZdz95zS1GuCk8ucZTJxcBerq1HbJ4Lw1h",
  "key28": "37fVNjJ98cbR3p7FZ6NKP18jpJfaTKJ7aZ55ukXr4KqQiJYAjVQjZUuChE55QbY8Nk6y46weKwoFotcWjsxQAxYT",
  "key29": "3yd6GSAXtcdzSFwdGFiNGDvCu6vc4BPXR25Wx5G5FaVTDhxWRuDxaTt6RskKpuFb3knqZAxn12LiDTWUGdZshs16",
  "key30": "282gS6zrsuKkxk4FDZRnBg32aQvTtNH65fpVJTPvz8hCVUDQwQyeUiA1iLAGmgj7EKtYrQApEHapNvTu3Lejo3SN",
  "key31": "5HrETBgSk1gyXWu2NBpacdSTTne8HaysVfVywPpGXGuRR92cVKLnsx8AzkN5sxwn7UgrWNrenpV11GveqJXRH5Yt",
  "key32": "2wRVUyYT6kVAmFogHW1P4gJ43GZ1tzkiAfBAYUb23Tvh5dTiNgLkuzCuQXoe8FY2puqRNYosB87kRvs7gRB2G9zZ",
  "key33": "3fJU85ZBTL92Bam7MLFp7r8VpGYJS8dt6r6nmziHgCJPcCApoBFeK6H9tyzAT9f6vGqeiLZVhGdrgrRktWEWYqkW",
  "key34": "eNQPFXr9iUMxk3KieHeP5r1efFTyBie9KQmeUj2qNYFqNsiqUxsA13QQq5T5ZmWCpXj4itishqPoiHEc5rRc3jg",
  "key35": "36BA81JpiUqNBZaB7NpjfgX3oJzX9sQBi3grHeaRuKjWyiEcub228LdnskuyiFwv2yZo3zerkHpu6gbAGFLEfv5B",
  "key36": "3A6q3DqELcoZ4oQaXB77quc5PUJc8Mw8cLYF23BhzWMnnHw5ePPRbNHxKYq7rTe7WaYBjHqnGkZN1qmNr4DHJg5i",
  "key37": "3e5Vn5JS9ARSWE6PXNkv1HmQGVUuvoz9tFBoQGXeKdGsPDcM7ZKDZaEurKsUmy3dYX35Btiv3LTaDXMoDGqM22U1",
  "key38": "2pUeNjW4fpuKVFHcSGUGtxJzyCUmb9kFa1WgTg8aaRSDKyrcR9saEZhqDBRXuwhdBYtG2uL3TjPD668pLtkMjjcN",
  "key39": "4bGLy3fKh17DZgzK5Bxwv6HUPozGStLL31RNkWASH7c1LEbdGS6VpoGzEuG62aTha6mUFkM6PQQ5X93Az3swDPKr",
  "key40": "4w3cgQYbiDzaB9zKPTN8wQzhYt8hyiCKKjNmg3wEb4TMkYhkcEGoieRonYAEi5F7R4YonrcepBxBEvWxX6qBaeGN",
  "key41": "4f8PPu8b2RsLcMwzj2CwvemuUJ2qjNdCkfbHaGb9PjmmhN1HajZvUJMvikz23Nz4BvDcyHayJUgFUC1UC35dKubb",
  "key42": "2q6PkVbkVA5vJwq24E7RSC9QrUF9HhtfM9xCipimCbmaVSAWtJFWzvCQHekgsF5FeoKZroDydTYbrX7ziBsvEEc8",
  "key43": "3k9SKGF6PGbkZrTdHSQEPqHgUNGRAbztiRSPDBoNtR6mD1vzymfuyC1ZDNENFqpVkroy6xfnvdJ8M4ntUjoS5DYd"
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
