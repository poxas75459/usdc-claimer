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
    "BPJTKYHUeHLFvy38qi4QgGrhVtymX7FGqweakaAjdkYURcwF9pUvzHivmUEQF49rFPDQmjJhbjhmu1NtKRukswa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jkQ9CoP8DmokPi8gT5KKvG6tFRsrez5aLMZPtUkq1wQjjVnEiY5Ty8Ej7X2FCQvfLWLBTWNEpjVtbXTD6XPsKuM",
  "key1": "2rkHZn2X7iKJUadPk4xdS69mvE4jcDjishJMPxgNgr3MsdxRTo7pBTncowcqo8RYRRaasN7p5Rq4NpKLHahBbfqi",
  "key2": "3PJUHYQNCRASjTr52nBVwvzPUs18hxPLTKKrurznAirfju6GzJ9Gh15FHyXdbTuURX8M7jdu5arhZhPeVdNmwr4u",
  "key3": "56j3J5Whh3DrpH1mWsAu92Nq1VZBHdXA8gfrxVM46EMT3bqjT4BK7JdgWR41mwBy7gZ8mmiZrecCbpyrX27ZMznW",
  "key4": "23v7oh6uUXeqXjagqQmkAh7o3oDSGF78raZZz2zR15h16wwtirnex5NoPbsD568WmoLBySa8CGKvsyAFQRXDq1Tm",
  "key5": "3aVtDoCe2gCHDSfYLeZheTFTXgLQNKD3smgY66itbAJhsPWyGjz9cJNQZC2nf53W3ftjQvP6tGUxceaWBoF1ws7d",
  "key6": "AksbwQZSvTSCEXZFffc35kUmLTnBqKrviL1NTbhyqhvAD9ExGktg6CWz9U5hmUczvKpiG8f3QKV1hfFNYr8QhAH",
  "key7": "3faEJMtoN5XXcD6VxWF8rBFYLJkL1tPFbVHQAAQ38jKjGZnWdCy3qpWP4JsV8i8ZMKh1Mm5iVbUkdnUbCrJgyT3",
  "key8": "295jMmbvtaXXCZZH8h2hQGCwveX7Tdg5MMPfGPjdMr98G3HaNA4ewTYYudFHLSceNMEY86LjjwsAJXfDhg7hfWUj",
  "key9": "4ZTDyXnRiTchGS8eVLNXQPXPpkGM3tcvDRXtzgqZjzpgacLnNQBeirvr35izVxJTWzqvJx44XYsJak5ckBN4RCqc",
  "key10": "63zqsZTaLBu8bHAMbiU7odwMa7pqK6cRdyUe6xNN8fFeGdvN7hNi2kmtexUFwB2qDrQNZ7TNvd55bAGvVX7bKUzk",
  "key11": "4H8DS32TAPF8vFx7wczrNXutrfcBmqNgac1n8fpZeJshbpy7XEfb6jJ5n6knar1S2yDc9SUi6e9W3XdU1xK8iHpc",
  "key12": "5ofHBhC1ZdPQqmtkVCjaJSYnmnqq2xUFmagrQDML62YEXC7QtAhNNhztuadxK4n1u1hcnsWS6PbLA8nTAcn4XrKv",
  "key13": "3bynaoXBBe8eshAr2wRZf1V7dybC1EyL4mn2uwcYrCw7gwNWe5eHih9w8NRZ4cVMGP6sWgcMiquGXr62YAn1R2pY",
  "key14": "4GEFGBEFmt6KEQYBDTKuSmnRHkqBsvYUuo8WJcTgLcNJn1LkQaLPEfNvvYEuZg7LKnnULPEFv9AHPXxvykGqaFau",
  "key15": "4qSEADgBKy9Tm6yLYoekFs3hrxGeg1Y432UsLsMMnhtj9m6pJGA6x9f1TCG33jUjFxKYiHZjcagvnHpSSiMtMnam",
  "key16": "pKVRtCDXixyhnytVg5dcEEYcnyj65pQMFa7zCNpZ6rBTs8hQwNehcfQ9HgL7PoprznK1BstUrK92yeeoLKL4Pzw",
  "key17": "kpAqdPD5NScHPBtub2iWY6PmmnX2aXeTy1SZtMbTdJmA4o7gXAd4RuVikrcJw5T2KMqdDXszLTZHzyN7UdRLUuK",
  "key18": "5j3JZzkSWcJpAnScd7ZsHCa1bUJEn64m8G4x8N4fss4Fzs6Y9VKJRvShUqaUrh7ftvRYmahnkdeNxGs8YDPg2ZJq",
  "key19": "2J9Dn2EBtvcMSawvTqmMogaAYQjmMnDjpoqGezAvdgFXwZSXFXrTbGwnXx9pwrVyMrx6iTdxffXHgQJ9TNY2cVxA",
  "key20": "4itA2iM6sU38f7BfMVBdhBknQfMty49t6owQCthcU5AMAmhraxL2zH5fXfo26cqHk5k8s3s67i5fmXnXjPTaBdNH",
  "key21": "4vsru3pczyA7tTsBVqJBMFLhLmFAFcYLfogpjv8pXwyuq3bQEjz1HEJJNX5yPQNhcEMxMTXNT54p3WuMLf6XBG7A",
  "key22": "2mT3dpP91d9a9Lu24xw2kuKdtTLeziC1mCqNcF1R1FcwRX1p9fKrFtair86MX1GVcUjRmUide8GV6nAMqf3SvGBP",
  "key23": "2mpDZLc7ERN51nUNTFgqaFEb3Sb34PGqAgufH6rJMVoySfxf6Ho3o2swmUCdHxeUAFFDaEySnXsaYBbcuVXvW5PQ",
  "key24": "4Bk3LmqhLw2sPdZEanaYYmYceAPN6oqePBWcHFmgwJWVa8iAPvfHf9z1dvchfscC5nLCN5JST5R8nYES9a5jvy9g",
  "key25": "4X1WR4f2B1MkXeSYzehLrM2K3qESkTSQkZ8VV8V8WBC8n9rzMdbcaM6dFEKfGFc76n71WojjNv4DKMRhzh1UEz4V",
  "key26": "3RjRx3B5K21pWVHLmhswBsCWbBqwqzmRkSP22H5uxh5Kc6pjoUNmHXTu6iU2wjdap8X9zmxQ3FSht7pj93jWFJmx",
  "key27": "iRE5VsXx6dT7jeuo4z5jmYZxddeJ9dDhR415VuWAhNPnfVzNtZM1yhWrdupPzJWb1Bd7FjYYGq7P3z41b9Yiphn",
  "key28": "5crpWkTzvTSanLehHQSagNPbwRywJVnjvd1S6wcPpgoXvFAnpoo6DSym7vbKyTC8ZDymrDzEpDiEfpkbJr64KeUo",
  "key29": "4Xg175vkQvPC37NViRoEj4cWgfswVaogj9jzqHD9ffGRuoHjemAe2VuDkcDKL3RRhAdgujTrqj87zFGbAfJ47a4Y",
  "key30": "34HdR8SidNZqjyi2e5SR9Bd4HAeGKtupKnwqw1kbMbZMck6pzwrfYrioY3zQqtRtbfzZqZoedLK7V5Huzor1Ligx",
  "key31": "2ESV7DL1HLLhtsFSQtuNmabUqgwUhGRr4XGjMJZ3rHgss5LcNRcNE8Da4T9bYoiVGmk3gQx3apTnkUWYBsyVnPfk",
  "key32": "5DVHPEEuzdEPkpt4F1gWPk8K5wpt5i2Def6LTh9MAm96Hm6FiZmviF98iEkQvw6WKqDLfWgNWrayrzZumCX52pRU",
  "key33": "3JNUpENEtSKkPpRf5j1GawhxvVuSz4mD6vJVMc73Nw6cu6YCBH6y6vGDizRPxrherEPTPxENRftFVRs4LgjMRAyS",
  "key34": "38imCjzBb9bAiYsE5TUR4zACp8PBT5LQ5uUaFhacfcPyvSgJAQQHT4UCzcgX4c8DTazVZYcbpXN2kq3ciiha9Cmc",
  "key35": "Dw9c9gK4f5gib6MTnY2a4NNyKiHtMgL52dVW7VcHk2zNwaV31arszJkMjwKn2ztf7SJ69DfM5iujwkJc1t4aTxa",
  "key36": "32c7zmqi7S9Di1mRASNrUTpH98REyVxxu3RpS6NHJygGNdRfGAmRQ6u2eAt9oJPr3i6LTACKRKW3GVU9KqxDxowS",
  "key37": "vuwPifwG9DvkBQAzYUjLm5f3kiuN9CXDyAQYvpNsFKN8z3KVFips5fs3sHCsXGmgjDLn478GXge4NBSqAAAyF6t",
  "key38": "4id4gw9NuqNgUUHQjiHJ8uApb97ZELza9aGhnCLUecLARCgvXfjBaPqqW5dL9Yhwx1jyBXf6nM8PHvbhEL3ggyry",
  "key39": "Dawsxkq688br3fRLsGUNo4ku5Dcv2rZYRMzmvtXCafVwmqMZAhE7ESXgAeyFVad2VCe5jTYAMmrgR8iXJXs3dkT",
  "key40": "3xM8x833xYmRpmYuM1oHMqTB94a7mAgSNX78hiSsWm7kJQUZodrZKcHPcK89uAK7i5ZgP1G9wtpvw4EmU5BWdDmY",
  "key41": "7D9KEV7XbbjvwLSu5HfMm98yJtvodfWckjWBUpF3xY46oHe8s6fzXcrY3NM8nTiss7piGDBgwDssjLyVv7nC91B",
  "key42": "SYpXXDYNYXYNrbd2aZdMeAoSyN9rEPmKms9t4cUwxYGoTxfxLhs1uvjgZQFXgwNmNvHvm3NfzWJvVJHmueeysq2",
  "key43": "d3x88znLfXk5Hs8paC1PvBaB43QNtnkgG7USFhnTnSSUcMN4TcQ8Ebtzxu1xMSoQrck6B3vGFNc7xJURVamW3Ux",
  "key44": "3ksqZyLMQg1jTVduHiLqFQ8bDgsDdREuF2ERExQCZhuBVJAkwSeeN25Kzx8WGzF6dmReB7DfcnTnk2D4hXbaLpkY",
  "key45": "4jHWJAA5JA7yeXykS6LhZF2DsNAmZsRVDSt1PxeUoK9JnyMCjAd29Sqzb3gzBETuMXGXTiN5kWhQWMXZgJkux9cK",
  "key46": "5SEpco2kG2CjCRYpdb4M8VBExw9xyakHEUrb8vekFJkthJm6eBT2eowQ3fJ8d5gFy1kCYyQZfBMJ88bk5KBm6mTW",
  "key47": "5EpwCFjHBFr4USzNHUsM5noe5nxbhKFgnYTfn1rviE9Q6V46wamc7bCFZkCS3Jin6HvFzMC5SX2dnJVdZzw8UZLj",
  "key48": "3UtK3rBFFjMEvFnCdMahS6PmgaNcEBjkoeuwFDJkAEY4tbABPnSxwkC5QXUKvobkgp5FQsufP2qBTa5vTxfjnf3f"
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
