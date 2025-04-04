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
    "SLBFqdxB6eVVt7GLewBCrL3X77FxTQGfVnVZou4D37PmTRvZnVrWxyU8hRTmn9uyqg7sMop7WMo6QDQ7CBQBd7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PNZwE1TLf3wQ1uzibLWxTsCud1SE8K77sgQ4BfBDWhWS659a76yW3uVdi2iDU1DyNq94y37n6NuQm5nZxGtpBKT",
  "key1": "4fpW1jBGpzupmUuBiFb69F28fETCvXFSBu952Q7EsA7KrofwmkxonTnt11Cs14Vv1NuB7zhdorEJYVjXcSApiKmA",
  "key2": "27SsxCzYJzi66d4eR6mmuwgCv8b52H9FZy4WjS15ufcNBfqsRdrKKgJiZavHSU1aVY9XdVVaA1tLfjBZg8QUzabm",
  "key3": "qYGNdStDVLVWmhEKE9gubiN4EAUQMDaceoCcGacTkf6vC67z43fVsQ3Y19J5KGG2G15d4AujkcCugEfAGQ3Vzb4",
  "key4": "9fXPWE3D1SNKWf26kzBUhCg5ofEuQ8HQcb5nuFBxqU6RE9BpjL9YnyEaN5iJjcmENQA1A1wCS9sTLhnJMNJwfoT",
  "key5": "5ZhhmUEu9xcczjXmyJnFgZCgpM86sMxKuB6r4hr3nz6n1UCmXApDYvkfURfwpc1CrMxBpaAWJPufQ57sW8HRjGgW",
  "key6": "2WzSVUumiBnqZj3LBU4PEtqbsS4ixGhfmMkaTiRzJ34zTbUysQ7VT5KLSApDYw4FSrfznYFmhi3PL95syoz7SHpe",
  "key7": "ZUdrFrecjvgiytPzyS6orziQqQ49Kk6QxFdzt4oR7pijAu3Fwv6ptnSutt9QuirRjbqCrHWJ6sWUTGM9LL4DWGK",
  "key8": "5tUW8itHj3vmPVZ53wfF7V6GBMtX8PdBJveAueaHmmJPhc8EaevtMu5LpCLQgBA48Nn7uPCMTrJzK4admoPLzpKa",
  "key9": "37sYxqdy6F3uC6HSh1yFRkd4nRE4dvaah5jipRvWxZqiBFSroDSyv9Bvuej2tLgpNi5NbXhCWu9apxgEphtYpRGv",
  "key10": "4iqYTiHUds4FNxcT1XNFqVtkYhCnzuMjXBMGvKT9C2c6ZWGe2dNqPLCdGV5NGucM87h6e615HPFvk1rzpWuMNrBg",
  "key11": "3vv3ctXmTC39eMXSbDKpiDpShWGGULwMDgEW5EBFpTjVSX3QC9tVJRKMiDCQ3YkG5QitsBKemBVQkkUf7FQQhDWV",
  "key12": "3LWaWTg9ntjmwS1J4Qon5JAYigsDmmD7HiFVuAwt1is9TmRD32pBUgm9LG3tv6hPcKuBo5EdCZtuXCRPNrhiED7Z",
  "key13": "64GSBc6e2hrrpPcsAnykrU5KtC9KNDWbb8tTnQ8CcBFtizVUcP4cyH6NpXZ92SMPqVi2f1GZRDrpD6YgiPNdEHim",
  "key14": "2S7Xi34zCvqoWUSfFMj6osCMAcrsXi9uytNM3Y9L2RDN38pRNpG72o5mpcQKJt3Q3ttMi7AC5DVayXF8qNMH4jNV",
  "key15": "5DqModPzQGBQ3syi46fr7BwQ2oiQ2N6e3Vv5iNegnTyAwrCV9GBcizUKA1TvVv3ZD5fQCRb54GX3dBEfgj9dxMPE",
  "key16": "2CPMPYur6q6gy9KNR8gqTgUXg1UA8TH4mz8HpVzGuD1FpxoTc68jZqrMHnLZ7o8yF348mopWX4ZsegkVqmtmY5fq",
  "key17": "gyFYz14Qe4Gxt1TaVVikz6jgNGWfNkLHU6P4f4T8MZJoaW6Bnxyuoe6YbzaZpWr8rRfneTmbpswdxTJ9ekKvi1V",
  "key18": "ThbsV6bNR3EsA8HUiD79rtvCf1i1kuztwucDos6NZF6rWGTfCLt3haykAtkryfUF3mBi5Zcr4wyC9QF7ymVVjWw",
  "key19": "3WyBTK3PSMhzYFST3wwGTwComjYCtHo9xGKYuSGriUJRUfRgnAd4QKN8YTUUuTKBFrUb2jzBq3ya5CDkwjaszvAG",
  "key20": "2jaNF1Ny9HVAXMKys62qHn7f7QGwsEpi22ZqspkEYCAcuU5CDTjKE12r6U8sEuMqAzMZCkn1pXhuGTxM8asf7BTU",
  "key21": "AXKiSYNywrBffXb7uipCjAk9EuUWR1o1iTmHFZdLm6EnRrvjre4FWJFotqEqM3VbVt6vfUJXY5upKieE4b9J8rB",
  "key22": "97bdU93jPyh1E2CQouZHbXUiZWd8UePbcJmSeD868SXougvZsgu9mk4woJFZEGzusbKweQii8aCjHwfjeg4cY2w",
  "key23": "tMsE5GZxnY3t6DsjwWomEQsmpy8Tx2G4y92kMetyGegzyPd9cxz4F4TeRkhDuy9MpQNq7vVxEhRLgFxLAMHmGDG",
  "key24": "3skmKcV73Ucwu1q9fUiq1rZEemwNHNFq8pqEtgM2dznhHodCk7Pkxxi8aaSJpm755BiHeSdQSLDpSWTmCfD9j8E2",
  "key25": "4VvzQA1YP6peTK2FQ3CLQM6amBF82k48HT8HMh9vdwv8m5JVBvPx9YypPmTZUyBwKFpqBLDdt3Ktts6QmnkusT3g",
  "key26": "2wRp4pHfXwiEqsd7jPGcc9vPcgsDZjC7NNKJqRvmUdxibseSTzCYzYmseJz7U7fr6GTr5cPgQL8Mh4ZnfEstxkig",
  "key27": "64F7vpQBuHCw7k2UEt8kRPW7ALzMzsoDW8QkhwMZEUkhEeLBVFm7s5WBXBCCVyNQvmja8VQJ6xCFPDmeJywEcE6r",
  "key28": "2p4EKHdsbEsZ7aeriCVYnbU3RUsP49jb1h85sSPJqtfwzhi1NkD2UjjGubxeVae742AN9tvCy3XepswyrGuyiJyG",
  "key29": "2v7Y43wFoGnCWzDxDJE5oLsM92GGBThY4QDv498jQhC3B4A8ymuGPbdAv6m3PpC2TQA4XhVYHP1aYJu2xKzMNJGe",
  "key30": "4t1GC7ubfj5BQcaZrssb1rN9JSGjsgnHv9TMKDNjwU8qauFm2gAWw7ZantACKiTnzBSDGQoj3isJ9KNQwvW88p6Y",
  "key31": "3qM3mq1dYu3nPHMn6cVFoVeUPi3Dsi71xV7jPJuXWXwZsSF9Xn6QxPN3uFCBb1b2dD3PFQZEkwahDXjnP1uoEmbs",
  "key32": "46UKtbXpGGXSJW1jWKmFSAR4eCnWT2BUh3feKiCzgX2nVcJeVkrZS1uXrpxrLNtPSKHjneQBszoeStb3F9gAbuFp",
  "key33": "kWj8tSXDyNicKcvV4yL99PGR3Xm5KyqQfA2EhDCXcPTPRbSvVNHH2y9uSrqu5VanegViJgMJaiJfCt8wkfEBArZ",
  "key34": "4zSHW3Lcdwhw3zeFuMvZREAn5KPSt6wtGMZdvAPqcS51Quo9MpVXPw8c6CHK12L6xC6YHYEu75wMRBEaMiu9rNrZ"
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
