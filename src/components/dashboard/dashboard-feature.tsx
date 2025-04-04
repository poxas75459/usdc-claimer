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
    "2WhoYQwZ3RurQK8Hf4SeoWsMomWpuTDzkznXhRQkchX4MyjmN1urkNzz9LB5fEwov9fdepWU897a2RoJBQGaYA2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUbq1dUXxeX7hZpfeUhTR3Atp59VcTNwgGdTzL7c4ohqMfFCfou3SECFXToioxUfzVKiLZQ72W1bHUaYaqxpJV3",
  "key1": "4qdTH6xCSi5LzxxMdchkzenxDXY5MfThmTngTRmPR6S4PQHEBu8tuqkjfykgPKw2koLkoNYK4EAHQEXuGzZ9gd26",
  "key2": "2osZAvhSmYVLKAGmgeP9v8Tv7gncipeY9JfoWnraCjeXytREstQQsHriQoYfffstJR2V5HpHkcDXzaVfPGF6KFvs",
  "key3": "5N6DegBb7ZAUgfapFQhv1Zr5QySJiNFBjo3UbFLGmQy3oAHUPpUVqhrostW8hapudMMyETKrXtRFZCbyvJzqZA5d",
  "key4": "5VYzpdp2K46qm6vUnPEzF7uWr8cJafGWTRMcBgi1F4jYk2U7YgxzXuH9UBCvBqyxfs5Z34Rw9mFkvYkb75cDaFjt",
  "key5": "21UDsvp9M8oU1UHyZcSEGvjczt52fHArsq6pVitBZk7nSTHXfLN77GLSDdmymhf29Ma5bP7W1YNbNzKsj3fJSdkL",
  "key6": "2h2W6s1VXftzPhGDo3bYYtGQAwPcW1wrPijKdFdtLWujT2YN2kXwJPDyQwMW9nztdpAo4EfbrYAexaFcbv3ER1mB",
  "key7": "Y25SK5R3BEnhpJM7NXDfEkeDFCQd5ZuxGNGDEyPrUCgDodPeJZkeJBCucLbBJvWJnqFrnFja6RMLkZg9JijR1aK",
  "key8": "3pzQhw4F65YgapDKygBhK1BGMtRteQHenwtoeGD3mGE4f4CAg9rAHYuS2gwpkMtYw8K6uBiacZtW86ybD7o9AMGP",
  "key9": "4HuuwyxQCdREtUmSjAJsmaLcSB8GGomUoqMTEuWpSFPqojXZw6zosXF9A1zDVYyi4owG2YfDcuSazKM1sxpQWtCG",
  "key10": "KTLKaFyz9vFh1Xqmm5mnBfMnXGztMJLfazKzajuZFNSRWSSYrcMc3ym6V7FGLswZoUeU6UjDh2A8NAo9eku97TR",
  "key11": "2zfvegb1T6UWPKNqMXJseFLQNt9z1JvDWxB39tAiMH3fBrvVA97YViyUSarWiSjaczsuwriadSU5akHHJN6252yo",
  "key12": "2JR6BfkzjkMUvjUHnhAAK9QkMmJfEKUh6Quy8wPC3XM8oxEAX3i8nLeH1u11kfhaNR28qD9s5RcWRPWPBpKjWx2C",
  "key13": "3EGyboAsxR8VbtjV1oK6pVBDi54ddEk4EM9XEqUofpqe3VXmgckESVs1mRNasqhc3Pwyu56jrcgLzqheyubi6nPa",
  "key14": "2MxQ93BXqMiwu82P8ABiJKpzvTY4HiEpkLrCnBYmtU5qSt7ujaZLcVodZ1pjncenKSBHrZ5MHoyERSy2XMbpMSNL",
  "key15": "31zMzUQfrXKbXwWiCzLNmKHHzKnfaKRSMuukPNaRwkdYocZegegTxLVT6xErL4GFsPJyvB1WE3VeQ4cZbzXqHCtr",
  "key16": "2avLboRUKa9UNahqYLAHWZP8yKEY9PzNRiuKUzNrHyjGHkFFe5mBpdCLZbS4791gbnqWWXcCte5D85CpWzXbDpTJ",
  "key17": "23wy7SM9PuAxusErFhETG3URiJhTev12mms4CYLsAkFDgXsQRtGjGJzvX1ZN37BSZjwEevSvpovAyPhQ3o1xYJJA",
  "key18": "2jPCidpMAzmrx6zfhuNdyXZNny9rMB94PhsKfNBjRMUctHBzXkJPuSaycj3ZXMmwkFi8HQ4PLqu3paJKEAZxihn8",
  "key19": "5N9bkgaFhzkt9X4H1Hy4gRTA9Z29zdyhcu4f7agvo9SMdi4FuXPfLwujQ6rvJdN3Xo7QTCwjgqBpMHi5AJSbCnRQ",
  "key20": "4n3ZnGEuWgWE4g7gHvurPL72euDdza6mLw6VaeqvLAkBr7PrApNxLZFW4UDcCZqwdN7j9w3mmsNLqYh6EfWzacUm",
  "key21": "5JuGu8fuRt5UKu6xshJ8zhET8hT1WZRWa9BQknkcoCjEPjZvjbfzRZFexzRW2zL5buVtFnQz7ntg7Z32L8C46kpZ",
  "key22": "4mtKavpaZ9eEA2BsvPwgvUC1rXDBqVu1cMSNs9Gp6M8mRkV8nxPZc1fDWt6ChP5NZBocrEqGSEvrVovMqaYoUJkL",
  "key23": "3BqEMmEswkfBxk6GF7EjKYX2prSQJvJkktkZSDYPkcT9X2FVvKaDnbMJJHTGycVPCDwju5oFWiKzLgUnEVGErGNE",
  "key24": "5zG1mz685VjTPgdiuB3LHCBELF5tNAFwgNSzUfK9rtAsXLKAwAa8VisFn6UqtRJAetKk3aVSotgGM7UPPEQXN1eL",
  "key25": "4DL1i8VSsky3uESYj1T6xPVt36MoTJkTYkD5RERd38VdjZoL83GoYjCKzRtfMpHZ37zWYwsXXvJUuWszkgRmfY9E",
  "key26": "McLLzza6gU5ELSFeVAd4WDzHy8aHy816kkR4ChVnPMCpW4uSGJfZX97AostigprmgFbn1WoTF4Hhf8DbS212AZw",
  "key27": "4rpb1SSCwBJ3nrM7fScWZX828kvmi8Z9K9d8h4GE8rXgx5cYRgNRHquBuCkQjLmiZhMeSnDeFCfFVuPSPJup75vb",
  "key28": "GbmT96VPjABhKuTWYPEUgWHrd1ixJd3y1rbLqXZsJWkqTKLYRMSvPyuCJ4TtmFvg7mF2mFvRfNJASgCmrDcb886",
  "key29": "2GrhuMfMPZRVQfUqHam4UYtvPcL7Z13PXULTYTsimGqyxDNY5Agxju1TMBTQt35ej83RCSrfrVwce5V5bB1Ju7S4",
  "key30": "5fUmFaJHLHdgTR9g1TQCm258ebcyb5sWP9d5te2owFqT3MGzjaHdBCFAsXb1WwWbQhcE36qXmdZdrcvgFuwr4Jif",
  "key31": "4JbNtZ8Z9en3iAwvAna6fj2HCC5dpPC21KZAZiZcLsY7rjbBbj6auVL3J4qp4LSTHizAh7FiFUMqN3YWEVk8WrP7",
  "key32": "1HdtpYCvYCsu7yNNA33khNZDbFF3EZH1VuprHbULGUK34zEGTY9cnfZNyviqD8bSuzeNgywyi6WQVL7gYJgwNtq",
  "key33": "2BZSMDt4K5pv6NUj4ryQnAyBwt9tQspcvcVizYzsu2XbfrMZd3Sn6kmA3a4k8vJkkV4zDk7W3kVUg9b9igo4DjXg",
  "key34": "4Ysro6whchiY5ZiLgXMY2LkdVxuj17hmo8HvmN2TCXQTR5ycjfUpZeaZeYqQW5d8tdAUTkYNk6QAsiUdtR8yPq9B",
  "key35": "2oXUx7coKsch1YEDUGsBZ3RrAwteYmPqbycSfrCPuHyGuhq6Ajf6nHYpJsFkqpVunF8bgLk3gRVa7u5KNvBXT6WB",
  "key36": "22Qp7knjE5AqXp8KtFRUcFsVRYHT5mjVG8VVmf5UhwoYvMEBCsbwjzPb6bPBKTGaHT8iiPj1q4YRzC7yRQZHPmNx"
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
