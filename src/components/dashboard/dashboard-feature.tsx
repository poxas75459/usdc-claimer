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
    "4j1AgSXa7pPaxjKgzg4NMy6JLsZfgEuKQg6aUw2BF1rcfYwpanNpTDCYj3BuYPEANK1CBNo7jT8zw69JkV2fmrcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMtoRxQrrSrQLJJDX1NazdnnM2dDo2N3jKNbLd7cVobmoqcM14GC3oxC2Kbh1f7N8XD67c4JATjGkzjYphotyj6",
  "key1": "2g3zYNAAZgXkqdr6kEayUaaJJW3AjrBUkzagQSEFfSYnEXqNbjSmfqwEz5kFfHcoBVmMruaPJ7oVG2HuVARSfgqg",
  "key2": "5E2V4jwUFDT2CEWvRobsM41kej2j378hodEei4zSTGwU6uJUx5e4ozEmpGaz8Bw7ecsB6E44xrZqg7N5JG9qWmqw",
  "key3": "3baNHAnyy8PGDwfGPp36Nx9R3WmDu6kaej49qhXXtXJAeFpC7NJuH7mts3RA7AiHzsUmCdtcxqksF9VT4NrZVb6F",
  "key4": "3p9F9bGc41B91QWmpmg3UcTbgttLWuFkK9RNDPz7gqUkdgZzU3nvNqCCYuFSKo1HEtn97Mmo97zQKPaye4piYjCJ",
  "key5": "4oVZXUN8e7SQeKMtAJY64ZH71uPZTXdVmMKU41NtrDKdBi579pevAgJr2B22JnhNwJKnbg1hAnacfMSQ81ZKFCqL",
  "key6": "5yBqYYdPzbirUtJ2D53tkG3nPpfxkxCEt4sMA5K3dU4P6RQNzU2M4LfLsvuTFSStwwKf71mV58u4A1U8E1GXMhNV",
  "key7": "4pAEaBozWNxArSPX17xcezTohHUULL7tVoCd8Fzr8eEUM9c2scZF1svDQHofx2i6FxCrei6ReTwPbXSiMiPdwuY8",
  "key8": "5Hz76p7uaZuKEivYFJZef1oJJWPGRguXp5j8TBderc64KvzoHFatND5mnw1gGsHAiKRHW5M8iD6C8Du6S1Wfhvip",
  "key9": "5wTWurKHJ3q8Cu8kCTw4VDL6hQUQJpQrg6AUUzhpu3eWQbuaYfVkCRcCmxoTn9EJzyNkEF18v6pZgvW4WvUkn4WU",
  "key10": "4eYcBezrt9SEH3Ha1BieLJfSvtnsK3g8kQETTYn47KfJ7yxzpPi7bLr326BM34xc7bmDLTtxV5tk86FagqFws9L7",
  "key11": "AA34phSQuPPydcyWkFr3yFnpsPnnqL8PwjWEEQK4c6WvePMt1xRay8WzJKyJTxiCUnyE42CuWbQYXyt2aBy3mp5",
  "key12": "4T3UaBsdKH3JAkfQX2FEAPKJMVRe6aSX89oLRzJhKZV271NpP39Dm5HyDivuonNvLUKh645nGFeYSJEfoy2A3nUV",
  "key13": "4JVASFYVGSom5xKcPiDzNELBGuzp5zV8zTANALLy9Atxfnq3evMpzopNGLRgMbti5CH6s2Mf5h5uEzE63Q5vvbJe",
  "key14": "5mVfQkexUKmnx7EKe6AjAUWN9rcGxXQ7NxMSKDVXKuR8A6LKEC6xNxXm7YkKJ8PMH6dSMhDhEwm8g5HaXtNzJU5u",
  "key15": "3MH3Ep57E6PHPAB5mGDE43pnRkjmCFwV94nN5MZTRW63Ds82BLVhLHCERfFbCK9UDkbZ8ECbpZoD7YEvgeSp8BDs",
  "key16": "5DQXEVczqsVLdLsmYRji3ZUQgXnNeiWxdA7Th1PtFjnrVYLYi7T6umuVCVvEp9PY5DCvNF7Enzp74WfqwXMAT7NH",
  "key17": "4Z17sSKWqsEKnr5msr5F87YJyGC4tHe9qEWmaomM5R3xyJvdLXBH5BBpaJBSgqvXzxHyb6mvLHbWG1mnpXnYWhra",
  "key18": "pDTkAQB2gsPN37jnkon8fGGcrXq4iMs8mFAztwb6n3P28LSD2Cb5ZB9NYJoFVA9nzmeXPNKbtdkyXZBxZeHNsEJ",
  "key19": "46CyhF3B62utiEuctNUsS21i17KC56S2j8sUqQbT7Ku3pZQGgBo9mdKZAQofmFihUM7qnpv6fgonhMBm4EgoUxVe",
  "key20": "3nrrvvUquccQo4tu4y8Ku25bnHfTxL1FxacjR1jt8rdTR1JH3UFNQA4zcDAup5auza5J6kZF5xReqJ8fehddSWbu",
  "key21": "2dub7eWVgWadaCUi56feZ8WdBqTggpoKw71xnpcuF1eRmK41DHLsPEaAqYkMePiF1VN1wtFHQXursKw3xu93KRQn",
  "key22": "R9XpoBXcGXh2LkAyWjk6A7Tr1jbvAEx7rVGZRFiXEpk5B9ZKUPjxZNCS7x1BbXgRGzrnFH7ThUcbTZyvdqcvb61",
  "key23": "EtSP3iHJYdw7NcKHBtDKMf9tHaympJ97DQE5AL2S3cBremtvA6huVUdxnHiug3b7ZnH6UCqihYjF1jWEbzQBuNB",
  "key24": "51T2y3afdk7bVGAnv9DdsyKExpwJbvHdMYiCEgACz6J5n5FdPDaQzPUi7iEixciZxmNE4TDeyoba2zWZHsgsmgMz",
  "key25": "5kDc8jYWh3reCU5h6bxk42VeRpnwzo8nRPYKVZgvAXwd11fhnmKGdqpbuzkZMUsdESvATmce2Aj4KfgBEJtcq1Mh",
  "key26": "K7buvmxovvvhwr5aaF7BKkYLN383Caygt227jSSBGa7Ln3ZBXEraFFSzJVoDHPLWRYAHV347SsnouBwBbTefnFh",
  "key27": "4GHyRfP3BxaxRmtWSVs6trvkMY64X2Dnb4q4dXNzSTHVvdBm1rQFDxTUCeJuWjuwrdF5dv2c7dQt7R3gtq8Lg9AR",
  "key28": "3j9ETk4Nb6KBKpx3xSMBcEQRZ6TLadtd1ZLYoxgx9VYEwiV6jXn3xxCumMzFDgJ98h5LuSJry8MnMjcErjX4jQBV",
  "key29": "NikcXwytAnBDxC59aHz7CR4WRdppUyA1xpRCEVtojAPtDpzkArpLfLT1SXyV2GDmtQCrFqkm15FfAeRxaYvZwS7",
  "key30": "5PxdYHpUGxC55J53vxv7K7En92qa44ZrH467qiaLDTRdeQgeCXHSs5jegmPzPP7CWrVSsVZZpdML1zjJ4dwp5H5",
  "key31": "tKYE4on6F23JTHesYxVgBNhicLwFd7fmTiT57X3ALL7QSawEd4YsQW8jtaNwVJm9UozSTJwLFLEtfhWqCz3ND9z"
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
