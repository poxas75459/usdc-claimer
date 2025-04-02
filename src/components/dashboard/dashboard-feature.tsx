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
    "4BNLEyPgnxob13wfZmHnRFptvDMBdfFoXY9tPYu1tQv2Qa8e5kvQoiUQS1n5bV2zGKU7yL4DrQG1APPzR4cWbCBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DFtXgMWVj6HHNd4HAix3JU5mXCZvkd1Ve7wLmrEi5XjRpPrc4kwtBDnCuAyPqnG5N7frhdCDMcww7B6RH9VReL",
  "key1": "5rBc36VCHoiWQqj9jjRXbxGGW2JjqgK9kxUtczbL77SVioNMzgESPBccK3Nk5X5j8GnthynNQU82wBMpZ7PzUHRN",
  "key2": "rKgtDj92gQ7bMBqX2ZJXcL61PFaVa2X97Cbq8HY4abFRB9gN9sDdVWepty864rdw2Mga3RqLPUPwj1a1wPSgf5h",
  "key3": "3DucRTDKbA6cpqTcNRrAMr37LcPi8M8i94jKtegnG6KZ1zEhwj3wSWnWxhi9rHBLYv6fcLe7YFkqXdhfYx2QrRwd",
  "key4": "5y8tqHeyqftdk1FSVG9jwavUsKBq7DuKpPqhdLUjmNxjB5sgWoDZX9bhkuxkGGFHm5Mtros8nU8ExJPzTJQhrXrr",
  "key5": "4xws2fGge2MQS5NTKNjqJFPGwUegJx7K4n5iG378EVpEFWqVCmTLHGmqMGpEgpVDe9eXaujUbHjnMDuMgYXbBweE",
  "key6": "4GSygRQyRCSaBuY2pDyfheZr1eWqkhS8LyJAAC8jaJi2xKCtCTGF76ZL7rEARSZgQVmxo5HbKwwVg8LLjd56Kf2g",
  "key7": "xqTXsmNAdf8f9oNxwWcSQ1MmaW8zDRGrkLnkRSwseeUJUuXbqRYJywNDdY2gSLZbSZBciGgFn8MA1h5RBGEb7nY",
  "key8": "62rKVN3phNXszLA65eQ54qnLjj4ptpCSG5d959ThJamYnKaaTP7XiSiEZ5zJGw4r3negRVCaaNthcp9uyByR6nFu",
  "key9": "52175q1PCwktoZpXFupZ4cmJi2HNjAiRxFkHbYnpDBMYjXBho3Rs8z71RxxxgNwse5vGD2WRoyM4pXykS753NVT6",
  "key10": "2hRfH2BCFhX61i2GRCwEEGcnLWat7PeATZZRQCJ2A7ycUN6FRt46p9Wzg3nF2k52BK9ss27GZ5snfJsmknFon4my",
  "key11": "5BZgmKscE3fM1cAssL87h7Hh22H1VRYC3EJPuTDjVc3eQQcveCADoYvNQM27b9knL8cV4PVjde6HzHCMVnzHqRiy",
  "key12": "2dZUJUbbMHZDbbwynT2CRhMAwLAEXRJTGDt8FcXnserU86DHwrGACAX2dF7QftWusmnmVGB8YVhu7QVDX3FkBVnP",
  "key13": "3Qrt77Mrh3zRpoaP1zSgipjsD3KpzSKNWHochEcL4XNXfWE5LYHHhmB1rNKEo8Cwb6G2fWabnKwstDy6bSzUKegQ",
  "key14": "dTC9xdLTbPHB36k6EjZaeUNs6X8hHYj2MNFqiDYqCjJ9iT2EnVNpQuWANAmCWVjd8FoCX2uCaneyDvdQKW1Lqng",
  "key15": "4jLWK8rjZfYjDBoWJMoJ5cAqtqa8yYehhkRvXwqEG8nBnoVr78baNybQFNFJ8UFsvJomrHa3cWWnADKSfCFBKzLw",
  "key16": "5TnuzcGtsZPkxkHi8u34DPnAobqPin62qGThdKfNzF8upJVPBP96RgJ1PQqG3XJUJTW22dMW9GJ4P3vCjWwxDQQE",
  "key17": "28KGn8a7kp5fsG8BGFbM7VAdJfPBXxSLwqXgWVmAuUgULfQFqY7pdaRfCcer8MA3Fatt6NMFCsHcsCEejyeNk8bC",
  "key18": "2W4njtSuD61LfnfLKxvNVq91juKB3HhRsk1n1BkCXuxUPYUiDJJopRG3MDFpHSXVvr4BsCWUyynQqRfXbhKCF3kf",
  "key19": "2Q6K88dP2SmSqXuot2iXCxiRA2aESSqxe6rqyMru2KMvyntufVtuKx8MjTdoD7XgP2h8hEdU5HYwyG9DimSksZNo",
  "key20": "2BbAsfv757pFLQbm6U2MQkmDh8qBc6i483NAm5K1kd1A9dtirQ3LtVX4TezWXHE1eUUVNuazUChHq1Dpk77q26jh",
  "key21": "2WTCps7bhtZWDjh6LZHvLbXqGjd2dARpddCar6cwSwNXU5g75NfLX7zrvEzVgQL3DCcgjJVAxxnkkMTj42UNeLNf",
  "key22": "57hHobjHpeKM2ACaY9YqEty8SDyoE9jHrDg2Gm6UeGWFBdLgM6QxiZtiYKpJmBPHdRN1vZvTj5ZB1A3ASZDTWhkd",
  "key23": "3eJQABYVhqsigkZPQpyejp7v425LTE43ZRyrSKDDdcbQY3RpDXMitKpfCqAF26iD4gmWC6EQnSqFMVea6pRwTmTx",
  "key24": "382x5yVTUYNcPSZ8Yc4HakgzziFm84pxsJsN8NkjQnRQFhYom3vzAYWitpXvmMiT26yqNnMTJPZos1eZA1kzpV2e",
  "key25": "3gFyNyiT4S8TN1MmsBjRXP3yED8jXbVDYmaicBCij19EYsURou1evxDTyiXm3rhGvNCcLQtMBiEUCcKfWLBitGRU",
  "key26": "4CMkzjnT2qNKniVFKbnRwoyQJyvG6Hdhak3kd78zhmZoaNXubw5YpuSuTn3TMYWoj65xHXzP9WAsT7HvoDa91oKe",
  "key27": "2KU72qn2sWwWK5rK1rnitnTDLBmTSE3PazN1eZZiV2TanwSBAEfTyQB5iydhR8kQBjXJgdRg4WZBEFnLUNQQLp6N",
  "key28": "RPQtQhHGBTpvRT2a2jcaqD4u9ZzY3AwR6q4uDpc9Dnv9FP1uttbiayU6m6pbfYuMacLbk5yCxsCmd9D9qLwFTiM"
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
