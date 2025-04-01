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
    "2DSRtUVYK2Ma3VuCa25d13K53JNRUqXdGJtKbxCoRwg53AmSKHXEHv9TTrmAQMeNWQbU4rUMUmDgwGRvpG5Z6Lz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9qpP1S1SPZ8LvA6B7EN4xwrQaR4EiKJmi8vJY8C4a9NXoU9VSXsnd1uEaWd5qjTLoqw5XaRT5KbQgHnBS2kaPo",
  "key1": "3JfRqht4tB8XGQbKhZa52w8pNk6xg7VmoJ8DGKYD1Vh8S3mMqh8JouojUrjFH2QyYGsmYzdzJMxVd78h8oM8iE1B",
  "key2": "67RNPqqSYgTdJmP8qaXtmLHTTagLMzDMWiie6ofgj6DSfPWNHbfDzKNdsrBFi66nAcndS9hWv7fgpDAVYWjgEW4G",
  "key3": "4uTDqdJ5TqGyTnHeW2GDmPUtTX9Xd8RpmPS4WFybNEdrfgfyDsrfu5RcDHUBEbxVN3DK5nw7gRf3KNnoxsDDaJv1",
  "key4": "w1oCHf9cV3DvmRm2fxTs3BZ31kKK6MBhzmDbyUTNck4n44gHtbixdBDbCZp6uYGc7xhRFvoPH41esc2deQRoaxc",
  "key5": "2jZAh1SZi1ARv52wzAQmZJvHySJigQcfGsHJG9JgF3yC1gn7jZxwCavjSBeobf7Kfto1M2oxLTFifbCosdnaNXSr",
  "key6": "2eFyiEjkDRxyapmLPrpymRfBa9kgNsRZ8Eonzaw7faBdy9Z9Jr2HFCqkhzgbKJ3Hev5XGRCzx9awZWvcPS1DWWpd",
  "key7": "YYEjUxC16bfWbaeRpRF8tYrCLfkx4i1akCbjrixpTJjFmFn9pGgz5FkLsnFLaxi4EbXavtK438n4M6eDxUMZTjG",
  "key8": "3dzsYwKzvKfv9HfQQekHf2ragJGQ7QQaN98z48umtqWUoLBzWhgWY9NRqtAwJioQEqbV6Du83EWdnLZSH3JeYexA",
  "key9": "5GoFj8tXvV4hyMsTtVgKLDyfPcqcXYyLjC5Z8VQzjR9VkUEbeCBK9VG4tztnFMFhXvtzqcKRVfgEbK7QC1KCB5PZ",
  "key10": "5a9zaENYHD833xRbwiQdSTQWtvsWAgxWqTXEtZ9SxXS1sbDLxLi5hYojuNpPULUo7N8PiVU2wEQGRofXkBQE4maD",
  "key11": "5unEam75ppFLkNewcS2ztQwS8h1Eog7Ax6XGiASMi3R8rHPY7qTAK1RUWoiCBtEdBf4RkDXUGE7Gcsp33tTihqd4",
  "key12": "55nMNvRYYUJ8Ug6ALaBsuw23i65q5g9pcnyJAfomyb19PgTvFauUE6YrAJ7nhPQrAgSg2T62U8zEBr2HbnqyrzZk",
  "key13": "3UF12UxG6Qorp4BCengt66N6Bhr8nkQ37wyekwrouL4G1UDc7yx4ooL1P1ysCppjTew1CDYW4Dy3SzWwoxNW9UwX",
  "key14": "2cArNDQcwZ6ruGSPC1YxMpkdMS4kbBGe3vrLZ9PEoK9GuaSp55bafoukPwREbbaLKEJGRpA8QgdcybVNB8zEaDnC",
  "key15": "56pfocdnZ1UNwycE4Do82rqjHZSAAntTdhEGcEEYBkax2kLV1XtSqo2cvwhUd8pGLezvDzCFgASpjCukzZUSZ1sR",
  "key16": "5KaCQb4GZcYyz7rwfASPz9hoFLY9tHpouEem8pvnagLgnwGAASphJhKoHddY2x8piEsTg2Aq2avFW7RFtk5YxYRA",
  "key17": "4Y8oW6yyHn7AVxsTHpYf4RAq6kNPxjXdetTj9TfFSQMqzhcbjBsmRe9wEkww26fs58FrWwZf15awd8WYHvo2FZBA",
  "key18": "geL3Nm9S69oBV4sb3cRub8nArffd5Utdk4vMpehbfgcJ9UYAgQFDQxdySmFYc3Um5cuyfCuu3um7Z4HgeE6UkFN",
  "key19": "2SWexkZeyWvUAYhTx3v985xhp1SsG43HMv5prtUNYKtoQsELXnN91mAAYVD7A2pybLJziMxu5tbUSDR49RCWYm16",
  "key20": "2DDnrT5kytoTzaAvmY983ogN9BDvcshbaPvNw7oignr7SYKRCLDME3gthrKTPZRFqULwjrwbL9di9BBJ9g5K6yRd",
  "key21": "3Jfuj8ML1q85aqe5gD3dHCmmeMHT8CqJHCwvHmNo9p197AZti7igSV22rXLy1t5xX7rHpP2AMaZquy29AteWdWa6",
  "key22": "a9Xy4khGrGfaafZDYjJgL9XobzGbre6jgLeeEhhGJXFP6y4BXJ1kK9aqLKmB47mpyN6YCCwpwzhmB7yq3jMByt8",
  "key23": "5MhvKXYJieHkNzJ5RNjb7c9i7bhpJKyLnHws3Dd8NQ9KFvhC1nUFWMQxRUyjAwy45wPzdxBXUQbJXEcoWz3pJF9S",
  "key24": "2N2Gi9h5bWDaF1sDGLnUQyR5w9Uf88HFPQCmv9AH218k3FtTMGrasmivqEHdkHYRqu1jkAjXEb5kTUVLSg8x3Bbn",
  "key25": "2juCzDYYfUsPYtwGntMPGPEZzTnQn2bP4hxS8QAE8JA6Q24HPMhrNR93Y7Lnbub5KMD62mJC1mDJQZPMsYwW9VoY",
  "key26": "3Ju9Dpn1kRGrmMe5B5sBgrBmAmMTKPHZUdZLSfEjD2svADjnBAqiuuwG9jkdjGtXxfWHRSaVetTrnAGtywhZBwJa",
  "key27": "tmkmC1i1hvAtRtX8GQETsfgcC1W4QLYP9vqNbCF2eu613K6gFzA77WV1nVu8qnvnRXDCRDRZk4aoh7Arobt7xVE",
  "key28": "3uqPCfH61e6Qu1hhVh9m1hUmeUTxybXcXGoQhPXPVXtT7g8dR6GmZoTUBc2nxd68StJKhaRKfV15J7SGF1G9J7WC",
  "key29": "2KR2av5xU81XRLxWwgjepdRUynpzdfeYYHYur6vPMUzB39XQ4d9q5YfPFK5jGLvKWXdrYcBfVqM4gcAUGq4cM723",
  "key30": "4gzV94q6PRNjZPWRae5DCsfhRqiYSDuXmPSijUBgwbcr5qc5EqFKj34RsdsdWRSGUN2bujhZ7iMPoJFAsDYm4N1Y"
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
