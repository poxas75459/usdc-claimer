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
    "2pFjj7fURcPatXEz2ZJmNuuHvRckD5HmnwDVe4Xyi9HX85DMiS5QpN5zoeSNfZaR89Fj6aGV4Nb6mxaFF29GrJYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zihW1CvWqt3k4oFjufNHrmMTP3sUTwafPEFj2UmJmHUoQwJZPYkRruNBFjS1E1Uvm7AKxH3aXqYewy1daSWEGTB",
  "key1": "5MofN9scjjgTefB5USQhiqoANJJdFhqmrFBQvL8uwvFRjgtweU4SM6vegfWWLMXCxrrKQnvqym9v7JxpjdtqbsV3",
  "key2": "5TSgb2XkbuhbE95NmvHFJExSBKmojb6deFghqWKw334QTrL2hQQJpsiJMYGB3weVDR7cUkLf2m6YoTN3MavpXMTy",
  "key3": "3MoQCBP3LkT41p2qWEK2euSF34vhEQBpezK3zYyaPtce5UU6PmFxw5uXGoutnQz1KF33oi79yn3Hz3MCsRn672cU",
  "key4": "2PCJLRbbnEkurGw3i2U56qUGVCugRVkY1HB79PadbMivwSdfJJEegHFi35ovpuQuSnf35MudJfcM7sNj6K4gzmwG",
  "key5": "41wYBdY7fXpD5emWirtT6ircMAXTYaB9WP6mMmHrX1aaNdZq2EN1pWrK2vtWTKU4U5r8WkqZqawnpPCKnqBiZtXL",
  "key6": "4Kdb1iL6Rqq25BDyNwDPamYaJJ4w8SKSU4c1Mx36GhLpcqTdNLoEhCPjt3e7jWefPzLFAMTdfDxZUaUkam4FY18K",
  "key7": "5BKtVmqFvGffnnPTqwxpz3pHTrUnszuSZFZ12YWh7TMY6D2GMQE4WaLLzWG45WvzoMQ7381a7XCfbFuu9nnyd9Xc",
  "key8": "LgHk48N3LGYw7sUN9B9bET5Vuyf7bXpQLkEHx5bHDfq3Rsanij8GBUZVYXqqnLzoNLHyxceR5fatPVrk6FNk6KA",
  "key9": "4yo9f3L2kDjUopQQgoYKpFThsCisJWp7dyKkSv2HA9vQFwdxaXCu1jKEYWzqhqPdqzAqMtn56k6LUSF8Pzjk66W1",
  "key10": "7ndaLnJ2qHtkPTe7SBzJcjz57SDKjRk3bz75KJiaabfYiXvKvDo3SMfyeuRgWyyFhADHfPmYYWipqrLwQwvuAec",
  "key11": "41CCUv6hrH5P6SqPn3t8No4WDQjQsgppQ1mepRkNinYYdtcUFDGH9vt3VNGFacXYDWTsfiSjKHcCbJFUfYUZSof1",
  "key12": "4932sG699JLhvvt2wCRLZawtKYggct6ssVfGTs7ZrJH1eB2gCr7gAYC93vxjMn9x7grGiuwZ9UW4dcXfPnMaB77d",
  "key13": "2yAw4ohGdLjXV2zM88DuR6PMQwC7PFqNdz2YJPBpwjrMzCmaq1YHcJyqbtranzLJvRF4huxqEE4Tbf1wFYA1u9Nm",
  "key14": "31JBr12AFfs3gEJDAA7VhdwkuLWhJEtGTBPKpVHXWWjnX4Y2E8JGnmGSSawtXBnUFZq2r6CP8Mco6PmZGhwvWQgf",
  "key15": "4g3mgFmDGX1u1kq2Px8cBcmT8X4ANu8cHk4Y7f9a7De13KPb8e3FriFVCaL7mkojwQjF1ACvqyDj6CNazpB9W5Hn",
  "key16": "43qyfj3a6m23pW6enpwKfaQirzkqshMBxgYgpnmtPzSVfxHNwxpVPBWysEkkYXdqwjNA7ZBDSW7YHt5XtuK5oa8y",
  "key17": "3Fy8GsnZk52K5FgnjnWorwhgiB8B8n7egpiBLnYcnX5fhroWAvGX5M31c3aiSBEVasZvaLL4yniQELUNksN3i4wt",
  "key18": "24BYJv1scbGJ87ra5rvApBiu5nEF24jGUnpQhguYhkSVvyPJ3ThKomfbC4J2NU1vw3aQdKoaBwURy9Pc4MxzFxGC",
  "key19": "HpMEvQXJJjrL8peJa6WM28nNRKQ2cb8Am8qdR1FVwuKE7H44uojj94ZFzBXc7CsLV6kHCAxCHEDRkHaRqNdXX2A",
  "key20": "4u5Ds3T25yDD61DU69cckN43jpS6mTa3aih13DFzvfN95JHwGunQzZ92xMFqXmiMHmTsm6Ye3nfnPe244RMjJ2np",
  "key21": "ZV1yZfibPnA44R6kJwyZiZgYEhE3a3JXGzc8rwgaTAHbFhYFanuU9NUSkq5yZERH6msqE21qQGc8ySe6h6fo2qD",
  "key22": "4aAnn94XE1zisaivw9CBQ7YFdFhLjjCQD8NG2aDKb7vEwbupRQG7QGeiR9Dku1cpupjqBo7n5h3sMPa3W41owt47",
  "key23": "1xVk4bJe2Po2mbYYmvFVoJt7SNV9zvf1gUAfTjgc3KBXWdfCgKUvFueRqzjp16AsE8YGj9CLfutRdLjYqmw5XNg",
  "key24": "2PtT5mUgHaa3UYSfdG8NiCBVvAiL5TVGbzzDArCzx5VZqkW2oCVFfEemUj5b3VNw9abZJFfXHqyYvWXPkXfT4Ljv",
  "key25": "3NYLsJ7Zu4TPhckA8EX5ooLk7W6sSbj11iq8fjJfWqgZ68sTaR7i75D94pEuJAjwEyPdpgHE4MFUZ9UTBqLP7wRa",
  "key26": "4SGwc8Phvk4Ui8qcqcdrCTsJPNQZM88JMMg4PTndKtohMk7K7rr1N2EnyTLT89uwg7TdnKY1Dt68jrXuEPHCu83k",
  "key27": "21hUa8qjzz38D3vpjKpwN5konK8NvnbBTKCgYTC6j7U7T3zxYPZcTKKbyYS3NHAtBZTZUUcDNpjTLwXr3ELsUEpE",
  "key28": "4pRR7Su54NNSjjtTFnEeFWjU6z1fZtBcCq42j2S5sSbxAe1YuT4C6Sc4Z84GtSJzUaBBm2uJT7u59fnkVyDJXvxG",
  "key29": "4VnznjYZtFC19pMJTweJDWipE5DsRNXQjn2wbpphZCUNg6bRs386wN8jMvtSP4DJX43wvrijGphdxRQCQfBx2AgJ",
  "key30": "4PNkwqBRGG5PgTzto9xJiud6FMwNYADH9VshVLaBg5WiNF15RXDqz1AevHF27CQmpsGuKxhbvNvbk4kBMqryAMyc",
  "key31": "4Um3tufAQRAXiV2c2xyfudfG2x3Df8fp3EHUEZUfkRAaz5Ygcb9Re9zqTSEFLooJtoUNTUgkZAabDVrWQyi9F7w4",
  "key32": "24BwpsKjzCndbNhjHHqf6Hpkrht1vGEYMj29mMnX2r9w3W6848g1VEuMEMXXYTxGqkHAWc6ifY6SqoRc8ToK17i3",
  "key33": "2RqNGKnfs4VPCwJU5AJkTSv1XfgMxninT2bBAimh5VW2ohyk4s6NYfW8SgKJ9oseSSc6UX9Qaceey7by5b7TfL8r",
  "key34": "2rHBYxMVa6bGatZfineP3wH2vK5Mgt4caBvZafufqVqHYwLtfs2BY8wbzMVJBxX7LnW9H2FyW7KbED3CoXSU9etY",
  "key35": "5si67FtHfKJeKnhepF5PDg7KdraUsdEKxaHb4X8FLAiGatkTDaNk2kcd2SHcSwPYE1vgcsWvPne2zXoNBpMr7ZHy",
  "key36": "25Th9Y4dDrojDntj3tALnnAGxJAyyVQLwbeQRmX6wxrQMHmKaZq3kTBFzipasf2iCc8Bfyu9945EioBcppQwsGkE",
  "key37": "5xVVVV2LiXZLwWgnypSwosww1oJ1bvZ5SHFrzWgHDxu3QRfEXExpXfbQdkPwS91fz4z7gfdr3kNWFpZG4VMRvuRS",
  "key38": "5PEUu9Ls53Y5LygEqQiniTYULg6rExzpki13BfBhS443hfQKPubyxEuXpykFE5N4wRTHkLAkNPzYBJpimJPYSdWW"
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
