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
    "2C1xT7mr5PdouRf7rAsCRMLSCCw6eDReUsiiXH6Aj7S3bgaSKgJVeCZjDx8vyL25hnWPYf6CaJH3MSchgmEgFqPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3UotJAJNJbU1JjeZcVxJ183V86RibT1QjrTqr1eyt2PrjvVAFjAvyxTQRxBMDKrcjcKG7qUPUk3nyr8FU8SbEN",
  "key1": "3dmTzfuXj1NUUvwiGMWnGtAQJiXZBbjn2hJH22i85FHm2Rb6jtwi8zEaeayFnivC6MjpSnzBEqq9RHu3Qtih79Eh",
  "key2": "2UR8ZKAP8x5dwNRqkzDcvFV22pP8xg7ctjXVQLBBWdmxyynfJbsexmbDdvzLPAsuGKcDACcBQ2Bqv1nXfba8cFkT",
  "key3": "5QJ8FbFGefTQyENQAomdT6GNVSDkw4fpV3C2dzX8CZhit5cwV8QrNce5sUiYwNxARySTdkwMtv75wTn77oX2duwU",
  "key4": "5ywPmtrF8eAxuQZtnomZkBThpsxedTL3q57hMj8m1htgj7eNavtanPAR3yFNss43ouoV9VJ1Mkay4b8zcy8JPW5h",
  "key5": "2jXuw2WhDDbA54FmXYQ1ZBDgPjpwcXAoFhXX4Cipqt21NUAxGRQ3JNpQzZmyp9xJGycnWXKtNFf6WRVbZqTgQ7HQ",
  "key6": "5LzNW2QU3qApxdBF5HK9PUXsq7XzAQUGdUy4bPZN12R5B9mVBeKixikpkdCf9ikSLPAHDvwnXTKZ1WST72Hw3Ee6",
  "key7": "kckPvjkBbAzbsc4hGvjYUjivVManqXHaq3iVPmfw3y5CWBH9FANswJrJRJYuHnV3ZNjxSNXQJG1KgbYYEjtUwL6",
  "key8": "3As7tAqwvHRwURu3ndwhXrZZFAKdGuuYUsxMRM5uVpQv7rKVbbXpBDbP8uMAXr87VZHeoSe93KoUmL2MZDxFAULD",
  "key9": "4k8s4KH962TwRtzAedjJyP6BkVKSFyCPdiWYeVjPYn3TKxA1Q7LoJRdixbEz77kmNnKEamDafm89biErDUHnHiXZ",
  "key10": "3aANXq9oEHanFYq8wQ8eRyoqbuTZ2EmYfaNMBZZZtSrHTJekTwgnFuJpLGCx8SkFjqhaW2EreKqkaqYEGLACNvm1",
  "key11": "25ywYg2JLTCKpRJExpHM73KXmErxEtNdPsK9BsCfjnBd6g9UKKLPTiyRZXJgTLmT2HhymNTPV2WtvKebqdn6r1dP",
  "key12": "2SUPKYxK5GqgCEgnHywTBuKnR9vNyjw1xKfaZ91wmXMDyA8trqi68LfXew6o9424yxdvv181Q2pGbJXUufSd8N6b",
  "key13": "ncUz4FhAcpWx11s5u4Le1Sg2EXzUYmct1KXjv5BVTff1tE2NcWuMDNCo2EzpBs995NCR9kreb2FAG5NApiTYGrS",
  "key14": "298pw9JGT77NZEt1NdKpfGWuj4G7FsjVPX9iHomhdXUujCPvaxXGbiW3AxhSNaRt1yuP6szNXcWXEpHpCjjp4rdx",
  "key15": "33i7X3FpC71KT4wMabm6ZSMi8hmdsvCS8Z5QXsxL1BfXg4HG3LJuVY28NV8NkPWE67CM7cdw7bCkQck7FZXUX16q",
  "key16": "53h4sikF4LUgxbAWVgibtqy5cq3dEVUAtsDcua1ZToLv86js6SCQjt8frPwion3oNS1DmrKTL96SZkYx95DkMzxm",
  "key17": "3GQBuNpoH9DC3p1SaKfgdhcaFxyrjnS9TsicYjEtAxiDnKfZbffkHMdggHjBYUQgqbuSrSNV3qYnU68W1ZeSMVET",
  "key18": "TGAwFm1YAdkMR3wtz6KxCahLu7Wcxe2TyNwfQg9d246MsSKjukXV1y7yoi9i9QgEBY86tryyg9C3rGjFw3aqgGg",
  "key19": "5cRgkvoNck2YQRNEwZBaeM5FEFQSyeY8Yf9p8m54c1X7JPJHWsJDuBZuSEzxaUbnJdgXELcsBcMVRS13iyepB5X6",
  "key20": "CNk3QnFeePrbYxzAbpa2NrgnZkWN3uNuDmhcdXUKm5SMWEjvZZpuk8jeGE7JLBH2QsX2GFBnjACGXKLjKvHGdSq",
  "key21": "3MRjcQvAC1bA1xNxqYRuAnCDXogZa3Vm5fFCzcRmNcJRuV54rJ9ZcS2srxqXmfR5qVPWtSSMdh5X5RAhV9MRhpi8",
  "key22": "48FBExdxvGRKd8Q52jLFdNfoeW84fmavLGXyruLaWr2JTd4gSRQMNVfz9LTZJPHSBFnMfu3PLKrFyQY3WSLJmMCD",
  "key23": "yEY7KUs8Kmu6EhZHEVY77AUWJFVYx2fvMiAfECX7Lt3NiP8q4itAsWZXVqMLMLvxvXJ9YBtXV631hKk9ivPzxDU",
  "key24": "GSo4mssP2w3uama5UsHfZs667tZJTmHrVuDPuReDTdF8kdcshdp9naSS74obPyR3FVBuQqZcek68TnPbcgvdvT2",
  "key25": "583ywu1e9y2j2nV1AoXxF2rZAPRNKqU4e7Nj9MmtyonGyDZJTLAjnuZjkq1Zzm7ApHW7RdvA2tcPJCgFrmNeGyqZ",
  "key26": "3Mfci56HEhGBSDaF74h4HHicXNUCZtJbu1eWVJSqpy77rx3RYLzi71NQFMnYfE9Wc89tQLBiHaYZBcGWDbBWuobz",
  "key27": "dun3u2KLQCFtWbXfe8n7U19bDmTFNgM7JGft2n1HKk3MWkYhpfVorcjyvFzPDApxjfGJxmfQ8mF8Uwd5TJLaUVW",
  "key28": "2N92MAqKCv1sUrFqZXnXQXEgeJmL5cbap6rMdF8HLQZbfSHQKXGHUyMRDPnL9dzFf5tY5WTuEfQu3MmLTnySBcAN",
  "key29": "vNdCTjVaF41PJXoySX5kqtvdQFdQS2pWZa3TLDEAavR8997r4RFWqecYuAk49ewHH6zZSW9XZaNkdu8iaMh1XZJ",
  "key30": "5Au4RkFZN3jTeXpJH8Y4JXcHMHwsXKWX3BQV6BaPEc12SH1ZgVok2QXJZYV9a5zBafSH9UuXyxfwXNEdqA21WS4w",
  "key31": "5YN3da7Vm2fGKd3icd2sUi4CsynLwbteJWcAxSNYKAJH7UtRTgJc6ghYbB6rAK9fkFJA9WTJyQu1SGxLKopTAvkr",
  "key32": "2B56fUCZQmwc5zoMmpmTw5wiCkFQjxgrDLE2RmnBtLGxioUwCHrxoxYNxoGbFPoMfDcuaVjtbkCoLX1V7EKLPCRe",
  "key33": "4Byz8nD9EQNBeuM8KJuxuybxrUjTEmfN5EDyDhqRWx8CUexhEc29tUmKmQU57uhdfFgYy3z3enJDiv6V369M7gYC",
  "key34": "4YGM5YVmbFkDSGpqBN3fievsEQ9S2iLCN1h5pP5KXZnpSUCCXDUWAF4TpXGsE8UBN37p7mwbdYMDJYDx6jCqp1w5"
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
