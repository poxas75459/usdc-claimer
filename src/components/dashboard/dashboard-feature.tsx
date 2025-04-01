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
    "3Yx6dUqqoVGMJ2yBp3rdpiSoMdB2fNnEECF1xNV2sxWxi3sw2fR5kEhuUt53BnVqAxWKs8ZT1Xbmi4jvgYNCDLkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppxbo1yVnj53cDmvbdpW2zJPW9GNU6eHqb2e7hpBLRvvfDjNQ6xsBC7hcLFJm2NMtKGM3SGbZwuCbnfeWde6RMd",
  "key1": "5XYMVU7cGcnEgSzjf4Do8RKsMkgE3vcVcYdUfP7dc5BoYnE1f23javRS7svr5xbXhtfrp8uzLTTLtooCFuP6BLQs",
  "key2": "4m76a2H9k5hJmaEWF27aA9Np5FHDehuh44t7GxRpBDS2z22Ftmoth6z4Zf5T6sYwTvWX48CaqHmPDxg6nUCTp3CB",
  "key3": "Jd3XQS3NqGwtsQTarbeu5U1SKVqMnMuWxsRQ5HTiEoTuPjmToveqMG4umeiVQuWVjp5Mc7YESfNtyTM8acYTZJx",
  "key4": "3dgfosaG1iCk4kbirUN6rfpmNcmkh1qHpzKGRG18PD1wXdhVDXwcuk71u2tG9xZRf5DZHHek3peb67maX6Yp74jj",
  "key5": "4RTLBWTA2BJduynnNpeZ2YXLj9eqPmTCgEo5BonerdgchXqnfY7cuWc1R8xMePpXADuXw6o6G7868Szgq7r7P1Jn",
  "key6": "3cymsNffkZiY6gPWDpZXpCs2wAehvPf3UGpETjJhvMp73w7UHrRBZpwgEL24wDPcajkopz7MvntP5rY96WnYHgZ3",
  "key7": "4Hhf9tsQfKp1z2R5kVq7E2gwSnr71v2J5MNfGpHczGqqsQTReh37wTQR9CFwHpTApik46zrnjdmR7FueSCJXXkbF",
  "key8": "3e6tpie47nRr13mEF2nEpvVAUP5nQk8H2XAm8zVetCjsbC5YQSKVQCGVqtMxZfye2USh3eyTYxB5xDgsx4iHuJnd",
  "key9": "4TfbSDMPPbLJ3MiASKi1Ny12UcE55oFUzSfdaRhsCvpqxFA8N5TayeGxGFUVdg4z3qFPjXUDcNXvqY31PFGX32vb",
  "key10": "5n7NJG7tYrDDwojeT3SMmAQRcjRLztsAKVA6Ht5kDZ69fGibticHTubyeEQjf62Gd5LDmNrjZwmvHYUPmdc9aYdt",
  "key11": "2AjNetfF9CBUv8YigrK2Ezev3pXXYgcsWNF6wEsmLasZpDf6otop6ZNddf6wyj5hhXysdtfvTFQhXqzLiMETrUz4",
  "key12": "4fEMwrRWC6j8Nt1mV2ZRtXi5uPja4pKzT38xE5gyKtFvAhhjcqRkG9JUWSXvMJJ1S1yGrLV2zKazRsnDAn2FK2uh",
  "key13": "342FGvNXQwASiwsawqgJtTAYxeTYefgkYfh36g3TJcEE7TCYpfG2aWHeemdkWqiVSjh4kUaH9Kr3wzHs7L4YFY89",
  "key14": "5NtdodFRa9fknFvGoRv9QJnYWgFMQNxJVCPtu7t8A1o53rBSLfmdFfbMJd7gHw3xdAEYoW4VLSdu8BsvoR6bk1kf",
  "key15": "gifXTCoHZ6P9NWGd4fvktjAkACY6WuVop5oHiZ3Meq8uVWj4spEbTthpLv1HdCgfX4a5kVFsXy2xRsE6Q6P94Ea",
  "key16": "5qxuSfNyqYtL1JfVaMwvmKYdVyFo8rjmuwLUnTLVqXeiK8q6qbrf7JFEAcwKv8Yc1V96xweWKKBjDatZjUeWCH1g",
  "key17": "wm9A8PqRRofpdQZf53b2FiHogmR7w6gRyMwuue916weYhByxk7d3eEvbcHwWuc4gdLhnb8SXTXnsKqcSfXJSFfk",
  "key18": "5oCqfsfvxZSdjJz7MLXbrDE9YqvqzxwQyjpUD4Ngj5UUJYnkW6P2HsvHAgJcBRC78KRvs4aLjmRj8ofXSVjiCSNq",
  "key19": "44WcE8CSPYU2EHR2rGz7g3MnbuBfY9YYkkm3Ef3hM2QFrjPoCM14XW8zBfRbezdW5j7mK4bPoypAAWYajbqUTsUP",
  "key20": "5wPsmxcDXFxeL5vTfQvgwZUx4Xv4PD4GGj2KTXDHnDvb94fkijd3XwJdvE2vYCraz1xZXn94kNrg7HKmz4N9CDUi",
  "key21": "2uewuoKsLPDdZC8NYNeTE2xC5EbiofE99JhXisSqeUuSM1ks4XD3zU7HsVXqt5vMNPkCaWnbm5g4tnyYLposrciT",
  "key22": "3p8ShE32CgpDscWUV1Fov5gkp4RCQ5uULVC68ucz9WZ2UjVESXD3DEccjjYTccxCN2iM2ZMsLF2aTQAGvNxTJNKZ",
  "key23": "55fpq64XTCvJbCRSuaAj5hqb2hz4yfHfCJNqPUmFTecWbL8uVmwJc2JHN3o18VDdqaUEZtyE97GYybRQ3YLRL2mD",
  "key24": "5TE8rtpybBe79DAxqGywcj4CT8Q3t8zCT9hGYQDp8XDbRwB6fzfTbnx7Brz65k6wFdVdv1Kb1QyZ6NM8V1mSNAYy",
  "key25": "4q8jNtAXL6oAGyWwyT9h5Spc67GJUCyN6wGGk5gtppKXZSsaeccF8siiFMLS5ZNw31M8xHgEazzh9R6ZBogTu56C",
  "key26": "qymWW4GZeanpdrEZDFP9E3cxFE5N6BnCndjSwKHXA2zezBNhwMKqbX9p3YQb6gHmJkd3CAvDJ7ayWR1GEUmix5Q",
  "key27": "3NenmftqypD7FskKCLah2ijxwpnYVsiKHBmdQ3sy79SukZJ5p1tHHqnD3SSTMbH9ZZSbXsG1kgj7nwdKGz3FjDws",
  "key28": "zC1E5vrKQDQURXDdHXVSuJZ5fWNWPwUDxsPkS7uvqJM2L2bV9XZqZ4RqhnuJkZ5x5c9taZfgMN4iu68146e5Eh1",
  "key29": "59gHDZoDicojgJoCwB3p2jjUfhGpqzaTBJmrsX25rm3vUonGKgoaeNRjqryNN8pP5zoLY49teksP1iNiuU935xtL",
  "key30": "33BA2m5uuXECiKDUB4KsCBfk6L6pCsWCt6Ncqg4SfmAY4xPHXqd7dneWJxect31ippvZziDgwdCUHPNR4imTHjBM",
  "key31": "2xr85nikcT1R5GqkdR82WNm7Y4ExyxU1abSDBJGzUXDVjCN4XeKg8cLZnA7f4YbRDWUH2o7LeFWntzDrFUqA3Ryt",
  "key32": "55A5tDDLdqwSjcwLTioaL9Efe4soh49kGsf7GUvSKePBqcut2BdqcvMnYcMTkntYDt8zLKucy3FK6BiSxBee2rgK",
  "key33": "4KCJyPzuW98QRw9YrBcYWqkw4CScJYetjZnAuNxFF2ZZEcgSvzvMGNzPWXDCtAta29FRzcS4drta4jF98bqNDrjF",
  "key34": "4dT9Jx4vwP9iTAQsadWcpah8CHJD4UyjmEej5HRZQVHhUtFvnjFUQhPoN1JeC3YGGAZUA5e4zmXDUSdhm2nAvS2C",
  "key35": "jDimmsoWuWD7ir6SZiMLA1aLTRZZ4QgGjKfbdUrUPMVbiotaaPCUzYCGwEqnLeMjE5NEoT6eHgBonXQTUzzMmmU",
  "key36": "3KDzrkNGoVn1aUAF9CT7PkihpPdjrBimmUgTbVVum6RkpYtKD4xHqR3kaSrevCopb31piSvcE4A4Ty9DcpwgSNiT",
  "key37": "3w7wZNvUrWX4jFr7zQg1VKFL5h1HNnNsGLbvq2CLekyCGc3LFcJ96Roy3yisGvjNfJPiXQooba2dmBbBfgBXWVx8",
  "key38": "dQEmrYsaWEMUQHLu9ND8FViZCi47PUZ4Atsot2xxpB8sMu41zY2unQCaEQ7SgqM1iRgXTD1KVLsb9VCQ7NHWwYw",
  "key39": "5arZ9W3w6GRZEpkMo9yGfyZx8QiFWzNKnVwU4CJk3GTizYmX1cmb9EUacWvnPBv1CM2xUZ8VosaN8x7dzUf1YpQa",
  "key40": "2j7zxCZHtcdpvfvY1esx3Zsg6fiekNWHF7Z3V9iAMCEYG8cHdyBu6hmRErgrGNmbCxc9jqg65MSFgsLNE3Tu5nAt",
  "key41": "fXWFj5fzqNjQbjsxDHeodLfrRCddsLAeYSSYDe46AmCxaE8xxkQz7RQrBU3of1RHciohTNT5dZ72TEPH1u9w6WZ",
  "key42": "ExPuDY5TZ5FcDf3yJUQQZciEZUqg1uA1ZUTGrAExAjgo3t5YgDaongdaefzTuaKQhY53g4t4oYeSRmhBUGByC1w"
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
