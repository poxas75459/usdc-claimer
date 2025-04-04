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
    "5CmG91eoaHnrUVTuz7SXCGkyiM6NfgCF13JdrWonhRxN4Hj7LCFmeSxpqHcgVa22bGG4gUVY5HTRj5eSS1cYuBRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bH46F3vqZMXr5E9SeUjxUBD7nwWz7nqUPJYDFtKMjAAwdaaEvymwG8yfnG89ENs9or9wij1NvDjL3s8qLkiBm8T",
  "key1": "5274yrwTX2j1YaUREsMvg7sFjrx8mS5Jn6g2ZwgfPDLsKLyG3iUjmP3Q8ZuaGywRN6KowyQjbc8CXWPeZecKff8C",
  "key2": "549o3berddJwHZzf9tCnzcKrHxbt16ifFdr78XvYyy2iWqJXdsqHeFMUfmMmaTfqW4mPXFXXVXdU8ofgqzv37Mmp",
  "key3": "7kAmjvDmtU79xjpAvy12i5riAhoEAHjsjb74vkGVKAhBG55u3ABzK7Lp6FwZDf1LN8TXskPSfGZJpmTgS12ioXa",
  "key4": "2kzuzuDXhzanPgGMAUk1FasnycHXT8PpB9UBbx1vTTq63K8M2UfwQHBpxaQTg1dK9drYMaAiU2jPLzA24JX2MB7p",
  "key5": "54N8CVgL9tSFvhWAukd4PS5BHiUgUe3ggG8Jk6y3YSt18p3x2C3AmVzDVpmskzGA9oC7A7uKzo3GcWhLfGhyx9tB",
  "key6": "41kav9UEjetbqosdFw2Q8LFuLkUnRrbp4MxLCfqv5jPHVEGFCWezW9eUJm5qX9SzmdWP5pnHL7MP5WPYjzmdx35M",
  "key7": "5AVG4WtnMHVgcTi7nH5tB8UpSUHQp9idDak9P7mXbnwxFdctiLfefq1e9GVRbB2UEYPJUm9TjTRZJEWUdAsbVnHj",
  "key8": "pngyMmNrESGof9SGR8o1VQGUGJLJnqVUSPH1zgQyYbs3vvAXtYuFgssbctwffH7FVdmz8fuepxJckEW3qP8P2LC",
  "key9": "3q7zEH8Bxq4fdr1bADdsrh6pu1HAmCMXuicKxKuJ23rWAXU6kR5W2EpbfeNDaeyw5baXWHB1cWZ6xNRDXND49p3J",
  "key10": "5aQyKRQ1S3wpigBpWTmBn48imXbeLv3eZSnjAgsHketF1Yos5pDNaaLEBJYzy5cEVneZMgvAV74c8mCgUkaYG7yB",
  "key11": "3hkbChuiVUdc5w4fC1cJb17L7t5tuwaQNpyk4zA22s76UskDg7ibfmo2f7JqLPgQBXVmnk3RJUTff7MRUEk8sFx2",
  "key12": "9XfsBW7SuK2y5b12QCvrLvUJTwPSdGFrQKrd4ZBtsKnAJLJLTsVFufJyYCkgZ7kiAawAZhq8YaxNczHX7iaBsvy",
  "key13": "4KEGdXowdspXnr8VMf9h3YvZSiY5JBDE9vvmMxF1WsqSgFRt4hQU1JopANLd39HevDnV2Dm7TFLczMqBNdj7Q5gu",
  "key14": "5zSFKtiU9hQ54MQiWkAXeTRFZL9bToahR3xLnrPyZGPQHhjKFLokifhiKUs7Fy8AT4hpGnXJDVMXC2qWmBF1kycv",
  "key15": "26nijyH9yYgU3GUQPuaLBXs5rbQWxjoDWaVogMoYDyw4rYfSfectBPRdsRmYUjs3kuLbd6Qc6upKLzfkreNWhYAZ",
  "key16": "55zLXBcTYgRouNppt5ivJAypiz5bCjEqHwQrsTmQJX3mfEppZzcSj8Rw6JhtwYLYE4UFfv4sAmKXxfdvQS5dSt1g",
  "key17": "Topxf4yCbQzPjHsRnP3hnp9JmrS7hYFsh932P91MiJANuuNLtqFkJkTCjASaJ6gjEEkGbvRxsywzFpwNRgkz6k6",
  "key18": "464yfNc4ABW9EHpQRqQCdPe6ZpLjZ7sodwQgLX9G3N1gzDaNJnTnWQgFp3FvTCKiKs1xKhHJTbZnNwnH2D6LLuo2",
  "key19": "38absGtWxP4oNZiE7Qo4kJ2FGRvHfpBbKv21oLvAm3RmpxBL7uyfUPDVy5rXNpHQCFwMKAVKfZwpTF1C6dZvysrX",
  "key20": "2t1N4DKyTn4dcPm35UTVHbo6Nt6CxpZmPeUEfGTBVTfa7KTuZ5kBsba7x2DGGmY4pWZicNTkgM2eFrEdM2Vhqcp8",
  "key21": "3nVEEkfjysc2kgFM9mtGqr4jPgQ5CkCSTL1Fi3D5K5NFqBjh3wVhJ7Sapu2Lt9ruRDeo5AEFwnwtrHtmKgiEuUAV",
  "key22": "4pMqriC52CjLmraEhatct9hPfYiPzjkynzHaNiSxEwQaLpS1bCSfidMukN6fpvm8bHvgNP1P9ipGK1gbysXT5APM",
  "key23": "5ju8MmSH5RFWG872MGnKmNTD3tpy5PgbFZhJPmDCdk4MBWcjokRvTFeLpzrXwme1K4pwQCinmcheVW19HafmzHK5",
  "key24": "3AVA3UvfTRy4U2V7nof9Er64B8H7dcyJZnyWNsRd58PzueJP3bHHJcsSUF47DXUFxb26FMmCLqzpYmanYHGc9fH9",
  "key25": "3wtLPG8U1vHJf3xZgBups7NkjHYmS8LwWTAHAyXwKjZ238KqAnFSKuwykRmRUoMjFLVBhbgSwHUZZWx34X4e6u9M",
  "key26": "65tGCVzaQVKXevnbhhPcmkv2t8AMf8LsijapqPnZeVDRxmivPeCXYWVgsBqPjk7g5WcKyL5mHG6RF5AdPpg64oAw",
  "key27": "57SDYtfXi9DzJWHYm8yNeWNymZtcNgpZZin89ob778mQQdovjaKxqqWYayBQovqTkeyxn7n42buTXiEtgAeao5D5",
  "key28": "53demttBGGK7oBwnEJw2GJWkD65p41Vd6REiNQG54pjBcmKbp8c2xcrD436W8Amo1tpUK1bX5cuE3VahpPB6kYaa",
  "key29": "LPkNSU67PW1tH3qf4u7R8kwCLM3beNYRMC53jps1Lqb7bTXtefAo8zyy7nU5jGjj78V1CRsWM8gHyNdhAxqP4nd",
  "key30": "4FWwY2C7Kn5NqaJy997FQkN2MdH7hbrMSEQNRe9aQCmk1wDZWmwtARMFSUUesoGGE9ne1hbicstFcaZ9jNA9atGJ",
  "key31": "3r3QNq9S2imUX8NcA7qpbzCZLRFHMxVBFgZtJmLfRZJUc6RcQCHWivNmzVNKBTXa1spUAVZwEhDBMmEMgKnx2MMj",
  "key32": "5GAVW8cEYPCtEEHNAXpYmVGhyNvt6xWwgTV28JsBbq6G8uRnqok9kLtkwwjv7mTdyFiZvmFR5nUjT8p3xvhBMWED",
  "key33": "eWEcu93nUsvJTrjXVpeug6rRusibABc6PR5FFK2bz87Tu7nU1dArHYNVcxJ5MUHZCSGTESitsroqcH2TNyPzU4n"
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
