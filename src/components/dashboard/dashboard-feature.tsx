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
    "5aSWtzsMXMv6dm1yCEAHZ9C2x97SNzEC4XzTsLCSnMJUvYKtdxZnf9uGrntwNV65BJPFeKV785pLzpW5QToZgPAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VF91dPj1KXTvQS1w7L882v4zeHwjhGD88AvPyPsDiN8iYqaqC3j6HLFYmXLeoxkDqPiYnu6V97LUk5YBZshfwU",
  "key1": "5a4xvitSWLfhKoD26Xn9b9veZbLUQTWs9KS3EJfQM1oVwqwULdqyKojQJ3i3DazW3N6b3Kho9mSMZQ2VNJM9ZmxY",
  "key2": "2rSN6gZUBtjonUco5RVZ6QZF7MxMXkqEde8n7C6rLMRD8abj3TLekAgGubweXYg5FjdaipX41NpRqnPvNVgL1JtY",
  "key3": "SZwaM8mcrvdZJw3qbpnvZKQbv9pN8Bf1XmiqhUkEnhhjdYWfQzQWqQckf3bwytd9kkndWA9gsHsEDHth98sUsk9",
  "key4": "A2BC85qD7TsarvfGrFRLcCaxn2prqVPJfpFGJxXTd52ZXRSreY9XLuYMm2Dx5ujEX8n5A8Rjsn4S9xXHKHsHQHq",
  "key5": "4vdkE4V4LjKhwkL8r2ommkKkRCvnYbi7Ainom5v9aWiZxyUc9yHFqeVXqfap1N3FEYcvHx7J3FUUj1y1uUyvzrYp",
  "key6": "5sM6hAJF6n9pKN7n83SiBCVf6zRpb12PBgviRviiRfuEwQBHZhUsXjmQNqQMes87pNKGiKvCX1cECWGGnVvCewjy",
  "key7": "3mF4QewwxhAqAhMxNSRRK6cdXNobMxwHXqNtsJSzBNg9gtAzneEffBTa4EkWuCj67Rq2k5c7zcJaGUN34Eyhmvuv",
  "key8": "3ycnfPHVMKXgG4q44Qr2t2VXN1LSGe9LqVjePLdn31dS9Grq4ge8bjypWaAnXnm6bWgTuw1kHesXDkdkFf6r537T",
  "key9": "4zZ4YSh1Nu5wPdv7W5zr9S9GbrNriSH9QjZaHKxzYLQr2bjz1qjuPtszRp8b9JcZ9N89EipRVFVzkNj8n3thZ24T",
  "key10": "5N9WhrErq4e2FvBvxvmhLQG286n2JQdzsydosDSvP5sBCK3GWkKm1arLh8dqtC5z6EAft9cX9adPpJt4YY83TUG9",
  "key11": "4K1HZxbLCRRrcLiHBu33kYv3WnhAAKDhyXPQZytp8g1oPiLdGnnURaPkjC6WHifnzRzWXuRFtqWbkk5DCocmRmy1",
  "key12": "5ctTRQHXhSY1MWY9sQQzP7gESB6ZHwyFjiYryq8dSH2WJtcU2eDuHBWr7G4aeqknPyncmqdsRuRhmSe7tFvKNriy",
  "key13": "52eBYGYLXeibur1zo2bh9oUDkacfMokd541RBMLXFSvUv9kKCDcVqitDWYGVUwhYFZkpD7Xwf77DKdH5LvXnjfeR",
  "key14": "41scYbmVvzr7NoW17ms1oUcPGSxBksBJwwCvUZD2TM5zxYw2hzp65TCHCQnS9xpSEmHktjRBRsB3gsdGExovk4En",
  "key15": "62jFw1HoLMFmcvXBu1fhRpLmeYqN3z1W7UoGpbvZSXqsbKNwXGm2jut6i5fSENQwDPgEtVLAWk39ot9gJSN5gArb",
  "key16": "4numjw4aA7Vs7pg5HEL6N5NXAdFJjSa2R39FqbzfRHpAufohgvVhD83XW3P1MacPFwak8sjJ1MiAoyePk1pQRDU2",
  "key17": "3rFC2yASMectSjSw6NzsWUnTqn2MDKVzBhgocP19CkWQ6s8Qx8Hn9zGzfN1Dyr2aneqK39burVMSsoQXjV3MXw9j",
  "key18": "2RAot3SCRRpmcWkPef4djtGvnynsxKzUxzo5WwGhUifcnd1KmNqy7VntvyQJrWDENHZoMMoC9d61NxNhhk6uKys8",
  "key19": "5NfnVpdE9XwWALvnHsqfQAboppExRpGNXzECXu1q52GdcY5yLsBdNqnLFPwwfSgN15j8Kv6CjjDh8pMH5jmsB95Y",
  "key20": "GoEihwAgA9r8DC1WJydJBT2C6MKaPkfRh23WVtpAV1HhPp51An1i7Hrk3JMiUE6nsgdcQKJia9z6UMdxAiY3XDW",
  "key21": "5Yju5J3GD2uJPFjbKYnbbu3bMrDJqJ6YzVwia7xi1WJ9yqWNqKntfswxEKouyF981fjv4bBBKCfHnem83bu7dVkG",
  "key22": "2KpetQRwK2bro1zrWWVkuS6MuN5VUL3PHepr4eNgoLA6hU7rV3paEg6xEvd7qu4CAvFsHik39sNg2s1dfUgjnrGG",
  "key23": "3xvTAtkDLLztNYg7tqkRdBMnC7fcVQcfjXLj9QFBpDFMd4EhmPigudgcDts1AqU3ugPZ7cNdBQaVCar5oQ4u4WZV",
  "key24": "5PTBosij461BS9gfXi85rWwwzeeWxhvCgmN6qM6eLEMyKcrAeZZBZ4suy9RJAv5aZAR9XDTdvw5WBj2CFNQjZqoR",
  "key25": "3zQNuUj2ddM1EVb8UL6tgzrjoXogSMZUWfAQLxP6wwfuNZHwSjATpGWB1i5QvazNYg6C6gLN71dJKe2LNiAmrpLJ",
  "key26": "2KqS9dQxtgV61LVgAWoVHG1WpRPoCTnxFyLrSTb7ymSmdFTgbPANYxTXTWkNgSeMXuL5WKsULhjthwNRJzDkF1DM",
  "key27": "2fmo2j7jzRvED4ugP3dzmhXnQtYShksAx4C4VpvFQKVUDMwPWxgRZvAH1SjgW1Huaq5MozchBFvksDeRNzkMSwZb",
  "key28": "PViYvdVSxypEMDSMG66ji3PLQ5YaXKkhQFnd1eYyqCFSHwq3LyhpsvcCJahuuHn4q4stMTTp5Qsdd9JeNc39PQz",
  "key29": "5BF9wm5ZtfHUw777RbNTzEfvbGdS1gMqEj6tyzSibrUtYizn7ArXbptHyJr8jYsUeDTaD46fGmJssBBEhpYB8nmh",
  "key30": "5DbAWH3e3p9bjoJrKXtgxV78xZjwddUS4SrXVD4QVwUYc7VQpUDZxjTRMvH9JVfZ9eKCwC4gEp74fc9msRhKbCuF",
  "key31": "3BtkLJX6ck3ZyaFV1p28H33BrN4HbvELbYphLjWfzKutFFVHiSCR9AtcaS2pnFNFwEFfYWhtLufFMvmLn2shCwsU",
  "key32": "58mbzLz742J7Tk45QkgAFtjcpCGcbTye3mb9D1NPGWws8mKbA3XAcECQLNhrL8L6X3QcPzrVdfygipjUjmTzYhJ6",
  "key33": "5PAveGf1ifyUqQFLCTwVuAzo6JKehC63RLWmet5PceBsMM5GhpEUCSYFZDcpaQm2eMfAbcg5AfrA5XRbwds7CHA1",
  "key34": "UAoDPhjwiqCur9c1rNHNEePPZGGJBveaR9uXMaXQwxPadmffrKdv39YD7hgYiRLkhdk6FMEHTcViQpgaa7BXM12",
  "key35": "3koYvkS5iWWPKUq66s8KQWbTYcLt2DVoVmrp9Es41kffygrKf2RcijY3ud1CTtsfeFvx4DGTfucp43MZaSj7yFcS",
  "key36": "4BvMZGykEtUshcDTy2fyjobFUFe9EYSMcYufX2q9HXAuJyLudULo9PMth3YkL8jvFAgYgSoASgN1o67Enx2jFLjt",
  "key37": "rXQpBxrZMDkVeBpLcgErRS5x1ewS6M799R6wxCynHnau6N8UFh3mDoxvaZBtp7x8vYBs9w9vtUJ5two42WNtVXu",
  "key38": "2ewXZW6zdoZmoktQ4tfU5jfQUPrL46sgxwBSTmqB9aHZWX24QMPucB93asg9B3egReq4SD5bbSFDSh6HujUpMCpn",
  "key39": "3efneRbDqAspun6jwct1bYqy8TLabTAudLc9dTkLuiDHRauUMj19hHaJKiHoVa9rxBuUoXnSLNm7YAHBDogR1NUc"
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
