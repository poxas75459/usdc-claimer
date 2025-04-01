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
    "oZL78uv7Jxec7x8wRRatiggsHorDMH8edb3j964WCUmAzKY94RWdntauu1dhNYhj2J7kQYsqwiSZN9be3oXmR8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7b39HmnzErt2zem5rXzeGJooeJ9rNFqErSpyjrQ7nDR1G2RCywAYfX4J5QeKpGYmLLwBThFBDkBCuaB7GpKzpD",
  "key1": "2QKXAnG5EUdzd6jSFhUkpRcMvjmMEUP3LtN39MZvxfUtjZ1ZPj8GtKWXFQ1uA8S3F3kG21EbuWgYotqPKZESZ6qT",
  "key2": "3XNQ9fCKDoSKzMnBcJjEauNbePfmzQJHxbzUquqQLBci1k4RDrvFcvnUhJwLi1oPo4uXfxLH4iB5RDBLkGEwGDr3",
  "key3": "61XH3hjPYxfYpVUktzVRchaHdLQkBrqNgwti7itASBztU8UGrUK3yYV2pJGwiWfVxDT8jxi2Q6MiEAQ9tB95YDxS",
  "key4": "4DYwLECCjnML9wRAAsu5bmJRdAerQTfBhNbv6E264NZK2QpZkaKAHi7cvRmSvXAgwSJTWUwjUEYF1ZMTi6CVtEXX",
  "key5": "5bZShpwW6SxTSKnytrTRYwU7PRwiXYy6179dQWunf1HsStXZW9a5qys17ZN9EvPth6U6pqRDX689EJCPRZRKDuGj",
  "key6": "51Qx5GktFkUF4MiDDKLPw9WkB3J9kPrsPz2qD1vpTpGNsweTB7jqzf7MsYtRBrHUuwCPKaVwJU4UpcxREEpVoeGE",
  "key7": "4TMaVW8uW2NMWws8UySxkJtCg9zSZpiyHRsREoFYBtWnJnQdUyXw3P7qG6ANVekNoVZaawqay6YdD2w5q2gDoGm3",
  "key8": "3BdKLSsKPiWXfpGcgjQrVGu2cWubyMWwcCaqD3DjJuhtMLtsSVozSsfea8a2ZfTBvyBCkTzjs1RnSMhduCMi8e6k",
  "key9": "UnEafbFRXdiHqhZFYHNaZ7XL9yFArKdhmLUJQMc1hs1JgarNJ7foKiPZEgkyxKLiZxQgCY8TrGvrGyXm4kgQM9P",
  "key10": "5NT4RshoTMKHGe3Q4aRfGFt76ctfSEQYKePTbsHoRmxCyZFz3wzmKbPVcv7aMzByzakKJyPGyhhCN9RnR1e3b1h",
  "key11": "2AckqDKQSz3zUozWNyNtfrF99KtQYaVuZhJCmX7NjFkVQ3ek8QnumHfjBsxTEQx8Aa35UK3uPHCqMdgEHX8X7z8S",
  "key12": "5uSU4AAPzu124JjvH2eVHscVdL4ytmnkUrK4ALc9ToETyXMFv71V2LjMNsq1GBDzNDZVWJ7yriwsC23267bEEUrx",
  "key13": "5Kauh2jigvqDi7uPJEnnnWENbruJ74QBmqPDYLz8E69xwGQR4Cgwwwni7nqVWqjscy4zTn4JgrsYhnwqBqHWCHzM",
  "key14": "rr5v1BRaHGCHvm7oB6xez1GZCHSMmNjdyZhdXyRZBXDdeqS1jytjmDExRssMb4CCLZriJLuPNXwXwGdnJF8i3AZ",
  "key15": "oUHnjAeJ6EfuWBFcAt8W7aML5p6wVvK4CP45VYgQF5JhRqVZyA83Bk7P7Cy8pH1cqEuL8p5gZqKMvE256QvmyGL",
  "key16": "5Q4PgFc5hrBQXjWAtcNW2Z3JFqp3B513jU7STBJp7sPzNJtuF2DW7qqScTdsK8FKEwMRMnKjBNkZB6ND7ug93Scd",
  "key17": "44Kqx3iqMcdBmQJ552188FPQX7N9ME6jGU6qtwJ7y1axsjKyKYmaH1mCkthdgBKhvK6koGs13cwv4ay7cMAnjMJf",
  "key18": "3Pgce9cGYTfn1rzpfXHU7qWyV3kB5eQpN7KZRG62y7Hr19hyCVXFNFHKo1St6MPmaYdo4DQ2YRapYwuaKWE9LtUr",
  "key19": "4QZnWiRXQvtz9D9JajrtVkjB4WB1yU4kV4hUdr78Eka5uyMivhy2eD23Y6CsXXL9LfPhkpT2YmP7RdvfnvGv3Mrr",
  "key20": "4fKaX1N528qfLGTHWJh3aX1pXjDxsjSrF2fLGkRJdu7vuY941bueKSPFMdue84ytoBCYtYsZ3usfJLVaQYZbAqr5",
  "key21": "3Pn6qt47cCdVdUCtTpE5Ns9yWW6hepKvJc1jB9WWJkqZtGjayW8cGri7FVkbR7WgfhNWsidqa8QQ1bMtjBSfS2Fc",
  "key22": "4vo9wUb3reDx1CQikduSytZeUpm9LbhJuVV4PFMqVxLt9ZzU3Mtb3Uxb3ENQrFnSt9L33aZewPcrcvaTW4sKNQ1M",
  "key23": "45XSS3J7EFNMSLXr8q2JHkdS2A2DzN4xAXNVWvgWHC5MeYwmutfa9fBiSzA1NCf9g6TRs5rWktPoekj638G11GwJ",
  "key24": "4G7eudKjFvnu2HPgQ1z5nw4MvS8Rtdfa9ibjJ1vN3D7tTH1SVgcZ24AAQ8mcgXbp3ZmWvbd97U3ibEoCWCAb356v",
  "key25": "5tXecv4ansxKjL2CrkwhxTL2W76u678fxMyHN4WpcnW2WFrWnYAwv9wWrL1JVWAVF69CZHSbkgsxbcuoCw4gWNNA",
  "key26": "3vh4D5WBiTZ5wNKkHZYCNUdU8dCR6R8RP2PywE1AXrWLs6p4GYEVo1uG8tPYxoeR2PgJ2Q6khmFn8UanafLEKz9H",
  "key27": "4MsvLNwk7CvU51FSqPt7MBEm5oC3XnrgsokBPdcJmb1VxZpQ7XQ6VwGKpbQH9DJJF7GQbfe986VcHSBxAyrx6veh",
  "key28": "5ZFm5Y4RKaq4SYCchHwhQD9jYUoNXyEtiwsU2uLt4fh1ADQ3rBZ963ump7MQGWgBvUKHifRrzpa6VDq4SdND4vbK",
  "key29": "3CbvjogUVf11nS7JAAvLACm1qqp3j1kaP8j3vajy5d8ZsYqTxy3bRDpQXAguJZKMJxoNFpEaaDNMiM9J3mmbXqLr",
  "key30": "31FgU67C7JHDDUSCoNWZZTVndx3VJbgh6Mi9iMw7bSLw57cf9xQLovBYHfdk1LNNNjzb1Cmtn33DFHCVnxLREwJQ",
  "key31": "4CbT3eMLryr1WxDNCd724wJmCb1gotY7jRWzEX7KKQJvM7JywYQ6m5791hkscyMbv947sNofGesAqaNMmWvptRB6",
  "key32": "2EhgNpWVPvEP7Wq5wYatkdq77shshRQLAspd4Bbp2p7Rc9Bz1e9P9P6LBJN86nYrpr1d3LKoqKRZ7SsritSC6a4r",
  "key33": "3T1AUah4gi7ysu1CZ9m9LCJP43QWQZvbccG65wJkqPN8D1KMcEKjgGPFf4cKi96nnCt3qtwj7usJ3hnXsHTzU7qr",
  "key34": "45X7k6aXrpnY5RqCc86qgwMmQ8VdbA9K2vfzhKzT93uLRKJQ231Uuwp2gFmJLzNHVZYRzmcvT8VeZGzd28ZCYAu8",
  "key35": "2Kr5LVvu9DNAnQZW41qTwXbDMZHSYHdcvirvKzjgfygvhzn7dxaUkB84oLgHXYL6dd7G5qbhyaK6SGyBp1Lkzwtu",
  "key36": "3NheZrzVRwLVusSPTFc6kqhaB92tqibJB9drVLN5ShambAE2P8Xn1oNvnw5APsLD5togBaeTnvWZKgZdtQ7cP5Lb",
  "key37": "3ao98Y7HuCh1tDyBXwDR6oFxc3dV1wH2CyFGbB7vHEfkpzdftgVboYqw7Eb5AYDK9WozApDvjvWWkJFmPQzfiBaY",
  "key38": "e7PKth1STmoiMBK6jDHCw9qbUTksPp8Tq4RsZr9e46mqB7DznheimPt3kNaZwQtMHx9uD17fmkC4UwMwp6SA7dU",
  "key39": "3QdQGrKup1szE8CjYDxC1LUtL9dvm76k95TZcrqLFq6X6Q2gjZoKYviqjUpn811fxUmp4YPE8udVmpJEHYuV4ycx",
  "key40": "97ihxK9RsLN8rtxUgjVVVzZHcWWcw3b3bbFyKcESqiZL3TopqtAiBhzU7n9AaZihzgs9pZPAGGWkVWEV4R4bRJ1",
  "key41": "2PLSHURuG487hsNbTf9XWTcX6NxrW1o6NF4oxTDnbSE3Rbpebcys6TpwBZW9ZRXu9sdVwJemGmxNaK591RpVc3tj",
  "key42": "2o2tWgSL36xszecFKGVnHYYtbCUkNfc7HVaues2W9S7cAHKXANM2Qn56z276pkSVnVTtfqCKe2Jj2k4tz7pRhErA",
  "key43": "2Pw31Yjoq6DUBgDLGnjLUTiGEnHoQJmdvoP9KHPBYjEs7Wms1jaoCNchndHbWU6ZRREVyCDRazo3QH1z4ZzfCNnq",
  "key44": "5F711oH1cmHccLD7ffxJQJTcuDXSV8yjrxoc8jo1YQEM8NwXDeAMjJA698Q3wv9QYyJd5VJ5DJzgBYTRSLM2WrhH",
  "key45": "GFbB6Pemw7NrLBPbjduqbhtZThu32LdRLzZERzMP6doib7VXy7KSz5Z5ueb7T8fQX3SxfFdUW7oCSS2kTiby2se"
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
