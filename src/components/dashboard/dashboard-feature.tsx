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
    "2mmLWXwcSpxPCZgy92ZrH3TQUUkpw54vcXsH5SsQRCQ9chkUjNaXfLwQRy7CmJ8ZXVQdnnvUqLPhfkNdqyLxSzA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLgLGQ74gdTgoEBwdDkr33f5NDf4mPnJUaRN7ZqZGWF2TEfYRsJzar8ZSz38Y7JQRCcncTgtp5oo8TQu9tysNbm",
  "key1": "2QGQFwgNuyHYPsAYoHRa6LHfFD4pYfakgx1xBzqEDTBzu4KZcqbrg1UtSLb7y586xQTtRAtquvBabsC3DUNrPvcr",
  "key2": "2drXZHqcXg1uJE6jZuxFW9RcADX1FWk7MVrmPPdceL6C3bXgq7cQrH74uo9T3iyBMcJjqRqhCBvxex6Qf9EmSFpL",
  "key3": "4R7FNP5zGqn4wJvEd8JKGk3QWB5fU5L9WyYNRwQ3Mn1QMAz9RQ7HcXsEMGpqVqhwacyddNKgVYptUMDfaFt6cH9N",
  "key4": "2115LtfY8FgsNey8PXoSgFxWafNXetSFk6jhEJ5XJ5P9oCyknnWJ93NrPsh1nnjXeHM5eK5oMKC5gRfSH1L2L8z7",
  "key5": "34yNQZYByjNA4eMDTNw8y96vYAPSJttripcfiaKR576dWMJrPrZvmHJqRswWeBo8LA694GHtfJ8xi5d7FZ3HYT4x",
  "key6": "2otTyZcJD5Shm1n7SM1CkcEmrJCKNGCcSxvhybizBYUUAzhxzGA1W2bE1sSrzyMm6nmFua1PhqLjauhDDQ9nV4Mr",
  "key7": "qhxg2GDA1EPp5QKQtKqL5RZWftsFjcsU1SHX7XdreS7z3zq1DJgabJoiqufn7q5MxqEe3bshC2UHkVefYhXeLpJ",
  "key8": "4ASJpBC8ZYShQa6tfa9TDfz4nuWBNwTrP1ywdypNYUXmYTUv5kLRhHsY5H88SYgcwenVBuJCeLZhsX2cbERepceA",
  "key9": "4VEUirZdXdVRoWjr3JGqautPr124RNPrEm5NkLtsfKoy8TZhAXUsFVt2gkHW8cYvAoi4DF5fTwVCrddYAKvM7Rqm",
  "key10": "5WMBtM7xdh78imr2fWAQ9pYVS2bAX3BE89PzuhYA3Q5FR9pngbDkq86sfByWNfcDQwJm5r3vcVgM3mcBZCUefo5g",
  "key11": "4sqUpzpCfLP8yCqJkWT7J5Twqau8oM6Uzw5iJdKrWYFgyjvdmKnfWKUGsVxbtpqoYyViuEn8AHjr7cCdkLn8YP5L",
  "key12": "4VupS8YfED3NBsHJ6RebNEfse83mQjnSbVgvWTMD1mE2cqEh5J2Qrd8bVXZP6ZVDqACTqUcPLm3F62iDQvVrGEwa",
  "key13": "4AWHsuWcvmWzRFJcREaR2nCj1QM7DUFV5PYaS7vGxyAeA165Bf1oyGSUJwvyheaeEXJ31UFt6wXgDBLWRde5By6S",
  "key14": "4LtELqc9eGXanBkLniEnhy1UMEQM7m7rFkGa8EQUxknJX1yYyzNRKZhQkioYbcu68Vnt1KQyza6Z3BngVeaNHVLy",
  "key15": "2FQR5S2tqmRDcc7XzUWZbhhDRixN6G6zziqXapNo4axufdeVJTEygcaLSDZ7hjKmaRfSqfYVGP917aw2s5L3aX9V",
  "key16": "5QKzUzpd282iZeKPf4JWiWaHTnXZgijRiZt8NfaaFJTB6vTrU7hTj38qGXW4vvGR1j7FS6pFzpvYfX2EhZZmRvCu",
  "key17": "3jmyrKBrW43gfgiQ89jMmNK7Cfc4MHEMQqQJ27e67HXszQmDHfpyD94bdDxFQTBgg8h4qDyFk4BmuLsdhnc25BW3",
  "key18": "4MSyM1HuqWKFd32s6osxqKA9ewGmv7VVYvXUChRKuY71PF9C8nwsWKrwFN91zr3Y2umth4ozxHYwRydwDtroKLDJ",
  "key19": "4gj3dzcqMnuC2w2TozKBPBfz2rzu88sjFMTXktH5L2emWoYzozoq5KTgbixqHmCWrPxwPGQWzBoGKeJHFfyB7FMw",
  "key20": "5mKAzukoKawAdeCx6NfxhfknoRpX8u1cc2YQjh1QdDJNpyTd9MCgCezcdBwMErgWy9m5WGxqKEmi3E1jJuabmRGa",
  "key21": "2ZJqKBkeVfkwg62JMPzgos5YexzGY4YD7p4NXwbMspM4ANS6mHKEJR9nGBRpDon3KDQN5q9uWRNVmMg4BDKDPtCw",
  "key22": "Wu86xFuPJc78fWw4hsYqLM8uYnRUBdF2nR8EZR9rxboMFZCdizHESdsSc256GPBVWfW6Hc3WTcdujJDaVVtaDMq",
  "key23": "5ymUS3TXDoh9wKi83d9wRBUgv5dC1VGxMgL2KwYGzejJB9dM5bujUUv3GXFAB3KRKZg6NemPXcHmZ8mNw7CzJNbr",
  "key24": "24w9TE7uvGm4y1jBRxVysnAbGKZyJTHHS3RyKvHmJxNdHP1wVfiVFU1utJFFDHU8Bxe6UfA4eFg8iEkxZbbymmFK",
  "key25": "41iv2KXixC5VwrWW9FL1oVf3yknDpcs3Hy9eBUZbwVHBKAa3Yav5ygAFCxQPiJSqqtYhartoEBMFZEJqUUyWPYvJ",
  "key26": "5DtCe85pL8M1taeZQnJDyBSdBMXeyHbBZXTb5mKLJeVmiUPNX6w3PcXqSintHDgaBHTrkCrXdZciQrgVFUYAqrca",
  "key27": "4rgP7nmnJ4Pb21pVdRk16YxpmMU5uwiNa34EnspAdAqkKMEYufiwJy1j57koMnZ4xxSZDARBQm2asARGb4TNed9i",
  "key28": "ukxXkJzsUtD2WsDP88UVqdPXZZ1NFmvBc2jUakqvUdTdJmvfYh14N6mXSJdafUjbzkkr5noL4eibf82DNN3zzvN",
  "key29": "5m8ML5aUpfmakhg6beQkXYimRudpDbYduWJ4zqsmLG36t4cxzCyP2q8zRPmg3HEeXnU4xUVYyiCuP7vpGam3AVHJ",
  "key30": "5M9UBMkTYr2h857AyKH3ueWbTEwRn2wiphZwNwSLyY1WL8TTTUdG54c4oTdTMHRY7dFu7VX95FbSViBLNb1JpnoA"
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
