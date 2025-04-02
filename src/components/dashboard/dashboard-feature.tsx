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
    "vZ8e2Sy53kQJfN3phC3LTrU4QJZ4egmuyYmDwuqtxkswWta4R18RjBjMMBH1vV68sMVzoowNATzJPaAQP96oJ9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YLFMTuSEh2cbn7NXN5md5XvEkFbwtciDt5o8azWSWRb3GmwiZBerHjokVhAEffMzQX1x3b8NMMVknMQ5df74mB",
  "key1": "5DrpYDZzeVKE5RXFw7G3CtfTmMyPYktBCZda6PCVBPdDkYgpqLVi1znGD7mfofUGWK4iNXe8Ymz9AymBjrQsfiZ8",
  "key2": "51g5Sm7LCLqcmqXU1w1YdYqLHUJ2uDcNyonkX5iPYigEBiCRKAK5Mh8FMG1d77aoP8HrLKYPWzNAEPkPfzscm9zn",
  "key3": "3PxQGQYNY6hkApwvH2xxdfGfpLtE1FXZf9JrMHpJdhqsQ4Mq6ELZjz1kCSy4wsWczTq2RtnzgmgdJYzbFSgtSRet",
  "key4": "2NRsB3eZCW5PsQNRgQLRawkbh2n5mcgjWve8k8GxCC8Fr8TN5BPnexk39Jti8xunMyYYpuxf3oqKz3UnDtpbNRPh",
  "key5": "64LTMgdEdinAPmBBt8GVoDCkzbgxUttdDsYhJeW33EMeYZuBdPwTVk8QSnf9pVQZLpkqxftuEfqty2xcnjiH9smh",
  "key6": "51PKhs1dgAk7uQZE3vq8JtY7wp13JMMH2RCMbUuExVdAU8qdfjbUuy9mqwjwnJeVUXbis7WGSD3FCvYgb7LfExdV",
  "key7": "4ZrMrsAz2QdW8HDoyMFycufq9LHYwxNYDSFAxWL9PuNftqV4cwe7vPPRBgUF9n8NLKTcQ5uTKutDv5qUBv3BWJJT",
  "key8": "5BwGbv1CZyygdmF4dHpTAvsmeAdzSB5ehgK4BxMAkgC8WirtNVtW9VL1PgeSpqgok5ejZPHtSiZejqmD4GDMNfgJ",
  "key9": "PgiZF4d1Y6YzUXPFsweHsSXzTzEQiDAKgDoZp3YMKbmtNf37A2vw71kxHFUnc9oCvA3VMipRZidTmN3CQFUb4d6",
  "key10": "qaPWU65rDYN8eQKvs1Ve3xez83GDVtzeS1ArwFFrZzRJLmMwrc6MzoSrHL3DBNRRR8mvvAJrUsNbKse1r6Chqbp",
  "key11": "sQhSoJfBGdFLeDu2YLn7XwrYNUc6qrhVW72RfuWoiaMUBeo159eow8tWtpcNW5fFbTKNY3szofRCYLo4wiuQkF8",
  "key12": "5ZrmK6CUgx5g8jry6dr5cZBR4NSbqas4UU4WCF7rVt5ioFVjHDoHRfH87zFFSgw64qiMKJT9d32jCk36aHJEy7J4",
  "key13": "35XZK4S4kJKnMmSEFwNFihuN1FeNRLD63LyWYk1jiTDqfGk3eT5JvtUZsgAfYNcyZLPw8eZZLUUnqjXUZcSvyouY",
  "key14": "UKWoHXfYDHJ4veuTd8VnwdZru217sG2isVGyYtBhvhtxsQacuZH3aYj1Gmwi5efbeBsd4PME4A2oKnw7u9Jgf5c",
  "key15": "62tZTtT954uBWJxRNbhVXo8tYiSghwanEm2a5YgkCE4oZkbEsD58R9N235oyx9kYBYDMQVrwBohBTErtw3o5mgY7",
  "key16": "4UW5NiFakU4gEGNqEX8DCgHsKQcVArs2eGbDo7wddAn1dTuKYCr44S27RWgvpjxDhgA9VnEqLtW999iYrQs5PKPU",
  "key17": "2fDX6oE4dDQ2X6KfbUfdxnxQtko3nNURij2a78GoUe2KWDJ5jgExrMyxydZypUKGYHnv5HbFscP4N3xjofhn84G4",
  "key18": "2NCymfwcAa9BFpN3NwZVEKjSdvhmBRDLaCPYUTpxe99zSXFRtaHdRfh272UuKgRUk3PXPx7PHjvZcKbKGKSBsfzr",
  "key19": "27nL6ETGnbm93vKdiyFut2zLskVrBtnH5SxrGZ3APLgDcT7N4fpynwdVVus11wXhTFsGWygEYFx1pGUsHenHajHC",
  "key20": "2eTXZ5zYMKRPh9n3P3dpWiaj6mUTEUfQkBAZ8xkQWNuBBTuHv5J7jTVRy3SRgmNFpn5X3RBQRD7fHtSn6UGBNvRZ",
  "key21": "2R65yxzGMi5pLE3j6Hm4d1dQd9acBg14T2UT18tXJxbvFxP4DfRUicTWoERb2JoXHH6gzzxfbjHpS6ehFPdUxUot",
  "key22": "3hY9351X3UT5PUE9rTxQNm65kAtrFdBB1T5ZUZHDF5DE2dxhRFgU9R92LtXnkB31QaPwh2EYwDP19tHNFEJYcfs5",
  "key23": "3usTWjH5m22JaLb1Xst1rPQ9XaNJHHVbbwc9oCeAoXNJzi1PndwHEUruVPuaYq4doohERKXNiAbwr6cKv2Ca4xbp",
  "key24": "5yfYCzPFiBNTe3LH8Ca7hHikovwrKHeGwzehuUDtjQR4E67xSMkWGtieaELC6WJC9e9zZwoHqgFYm8ffawhexavE",
  "key25": "4yWyVtYpwmrmZNRvNuKnkEgbGLBr8CGDgsLLy8Y8KQdC4WwwT4RrSXa1W4P4VzrQhZmaJ4tt3Yt2dD8QsymtKWcM",
  "key26": "4PK85f5hHJN3ugrJ4Q77ZL7aQksL13VZCAAqen9d8T8nj8EUBtCfcon5GA6Qw9bu72zYtoFsvqhiAXevwahxxLMH",
  "key27": "3Cno9KkjG7DMxcSEYekNM932eGGZ3rP9jWEX6Eh9XujpjpRUG6L2KzNbH1yqCRGt1XPwksBCBZTUVK83Nta6so1b",
  "key28": "5Ed3DbwmewLL5XgkzsbRzhdo1j6xvoWkrR1EwG6he2VQaWhjdxEfqc5jSy73n9ThKRdRaG3zA6YCJYuiZyRFf5VD",
  "key29": "5mgMivMbBq84XCCFQJe926Mqd1ZwEc5zRAWEDnFr37fDnemxETUA4YLQ16qnEF5Bc6ZAeF1RriKYjbBwRvDdezFs",
  "key30": "4V53ryu94M3DQATjTryfMZoRRKYgYVKwLNB6LVz5ebGCNt1ktugqbWT35RD23UFoRnVCXfQryZkvWf8DDVZ7xFPr",
  "key31": "4GAwMT3zsg1juKpzcJpxtMscqY47kJYx3SFc7ir4eXR1RBJbz4uEzkC5NChQnk44c3XnGpZfKA2WZsSmiSsXM86X",
  "key32": "65nCTnUQxhAPEWY2WHXk1njT5wQR5SiNpxum5QZ2L7sdqS6a2WVzsMVfb3MWWoDTHxFUqu38xjwYaAaCsG5KCEBV",
  "key33": "TTg6NAeaRWZAdbEmpdEswL4h2Hch3Hbv7o9vXCvNqVzBkfjob7PoWpVBY1GQ4Fmwov34AHKbfKUosPZnhzLwWps",
  "key34": "4b1At7fKn2dyX2ePsm8pTKkymZSxoz9UduiRz1JXNJ7UPYMxTj1w2ucGL47TVuDpnU4MqpBZ2DHJxZ6kB7eXKarV",
  "key35": "o7v9u7q3NC9CkphK1t5DTPozVbvWW6YHxrfi1yPCcza1HrBcDs4J3djrrVSPZ2e2HQaUqo6wvbEma7Zij84rNwM",
  "key36": "33QBui4DhBPBkwhwwX8qBirZw22LqybfbHLR1UDef8foVeRidZnmT7FSJjw5sMaszDnHjWTWGhwfSYnMyGtzQVNa"
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
