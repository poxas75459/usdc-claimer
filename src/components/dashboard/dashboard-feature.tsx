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
    "E9BK2m2SKSL8p2C3j2SsADqjSEXoVJyXC9kLd66HeJrPbNom4B2Pk91qx4hCE3EYVLwJimt9xMQucCkPnnukWdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66G7A51veexmkWJ1SYuKLNpoh3w91PFaihw7QGSzp7rD9KK8j5Q6RBrwVXxtnNdTzfLey7Lw9M2o4h7Z8Nudbn4H",
  "key1": "3TAJMYC8NMu1yM8Bj2rG6beSitYs9uRNzGvzFMqR9eZKrA3DppC9M48FpbqUgdX45mRWfDseUFV1FSWKkWUcb9su",
  "key2": "3hH3FbVCYSHQE85zQmdMsFbj5nfAnjdk3jif55tRD8gFoPfgA6Q6u9TYWhLxKQfAikQNGZNpdbbVjjwXRDWpmQs6",
  "key3": "3snbQ2DBwGreo87diZyCv65UVWuhiNtvmF9E5HeJThz5YdKkgBSukFwGdDZWGM4djTmS6QwHybRsFrBzjBWpkYu6",
  "key4": "2tdatnugFfLicjWSVNUfzfrLPoqv8oUvhYnqbMDAeaYSMXEEjRX5J7Bd2uoL8mag9682C89bLecJYL1eZ1ceFCxK",
  "key5": "5fBTttonMi4nSzZ6wBuGCJa1mWDYZmhNCwttdBFbzDDpUorB9fDGYL4AJ6Muh7SeCQnjSXJ9xArGcxBsd9p3VVPD",
  "key6": "2LCw7LGWcVUrSjAjubTfV3pdYCCLmVanjV1hRpzmdkYBrmFmGoJP4gZPT2gFkSWVQtvEvtGFDSb2KL4UPSwbqer3",
  "key7": "2p7kPFpVL8CFCBytXc1jrWkj75Cf2zFjRnhyJYjRGg5rHbphNtu3e4bg2L9Chd5NonrqxGjhEDTDrp9obBr47Chr",
  "key8": "og93yJtxiPCSztbLmEwD899ePMefwDCX6v1fuHJ6gVuBt5XhmN78oJ77YMbrwSCsMD4inwNAWNWWopCYfmLrSk2",
  "key9": "3yxsrHcDRZr4mGSbumo9BhHhSdrssEvX7Lr8tTgEbP8az2xxxcpmHv8jPJc5FyGnfiFW1X1CH7vifqKTn4GHg3JV",
  "key10": "3P1jzBDUneD4vZVo9grcGpBnE4ocWNJucHoQRvdN36ojoKQm4T3cBmKkoD2ynvnHauY5uQwsdszfsZTUNPGf1j6s",
  "key11": "5rZybFkW6TragD1vg1U3y67BFBfJrj24kU5eXu26Q6pQpk1HgCHv5Vh594w2TghdNJTMhSX4WzPJvR2oBEMA4f3n",
  "key12": "iKsC9BhUMwh7n8qnRf7n1WW4LqnL3Bg4Ek6LWddzTGMoGkrfhWqjoPcf3dPg8Ywi3hw1Lm2KneF9w8HqBQCd1G3",
  "key13": "2sxiAFzT7m7kXmjRcKGJUVv5jGoRvC2dyQsycQCUgZNQxzAbHx3UB7zQuQxF6SLUdmBBdQa1K5nnxef6gq6LHsa6",
  "key14": "2okGS7MT6XSa14ehtWeXWRytgsDmhcYwJsWL4LyFuSNx8193ASv2g6qunpswrWY9SHhH7RqiG8Hxs9g8DqSDfGMK",
  "key15": "i8gqcUXb22frsx1gQ7giab2qRChNLeb9oHQUmWn1RighUNeDU5kwzu49z39yKZw9ff1Ru9DZE9d3kPcAjCiJoT5",
  "key16": "5JzR2NaGwC5NbMpGj65bY8C6pQrC9XJMA824afzYyjnf5fhYMT7tT1nU6CAtw16opxAjaWZaBPkNhSRRzAhXcNPd",
  "key17": "LQmYxQwYumQic6sGkE85DSDDGKECY7v3YKMSRE2GVKDrz1dHZgPjJ5NM2CUSHoYtGpEBeEDEsAkboUrQspeC3TN",
  "key18": "4i2Sf4QUVYpnHxprbSNc94ZVre6578zXdqH86BkuKhwS1EXYxHNWKPqQo1saRnCWjpypmTgNznHQ2zbqaY83zgT9",
  "key19": "54XkqYi1KxSMdLJcvN3bYr9B7g4UfpkCP7szghxSMSaeQkSj7Xomr3XcSjzDhYJDdiwDtYervzg8TucmeZWU2dLQ",
  "key20": "5K6TM9hmuhivfW6VVmwe3TVM8bLtPC5DbvSsmxs3pwzdwjrfPoPrUkX2Qp2J3wULkNvd6968nCV4Kyys95pTrARG",
  "key21": "25yydp6xRQEA3Zx4zd3WyccfA9rMpHhgPgLAi7cW1FttsfVHw6zYVhykZGswxwk5UoiVSMjgRzEUeuVKRoo3eXVf",
  "key22": "3LJNvGbm63D4jXvacc5wBSsKekXagR3ZgjavkcdrQjzzbiY6eFm7Nym853VVKKYP5sCwWRHrcXjjgfdGfNUTHYP4",
  "key23": "5ZqViVzVpxSgZFJ9CAcKVYC4NEaq6V8dwLezkAXNuiAXjutUBP9uYLZjNAM9hnKuBo7jyuEKsmpwkFjgU7DQgGyw",
  "key24": "48zW6FHZ3webMyvSV3XFz64dydutjCjPAWRdzUKphTw6Zf93yEdGMGc7Q2jHEBAMFa7SsbWTnfaYiMB2Cnpogjes",
  "key25": "29LYiNtYdMkHczJTfb3XRMWHVjoDyjNsAshWKrHskYmzURbGLPgM1TjzcZrcefL9KXLNLS9DBox4VcnUAJ86RRxy",
  "key26": "FGyCGyg241K8xLrxS4TTN99Gy59e3NbjQXAn5qiA9yxeRWZjyvA3pdhYFYh9cw5NQTFVkEAYeed3tNkYsE5tXyy",
  "key27": "51Y89dpBoYozRBfb3PCV6c76WNTbqjRpAJ7JZAUTLf3p5caUnAUL92beu7cQEx9TcbZPG5BRHyo73rxzCzMpFXw7",
  "key28": "5Mc8eiVBLhnQwjncSxiiRruZn7sBkbeQquxqiQMz7d9DssVq1nx71Mn5oCUWbpdiUBTKBM6zhzMLuEbd1TVnw4JV",
  "key29": "5WQmbWtu4sZPKzN9Q9w1baMeKwffEviqwZkyX2gy49GZYCmvCnnbnosfYvmPAvKaK48pXZUrTGc6vUCBe1tY6mAV",
  "key30": "4smUWNpM7fiKAmGdmcijACh8SaBF6aiu2Tqcp8LxE3FGnLa8h7vhANDeZCW1zxmCNCeE5QCFTvEdpJ1moJAANZb3",
  "key31": "4KrQk8zwtvkLwR6QfhF3zJ4Rk3d8XVauHGmtYwuPKrF4DWMLSNBVvR9CXwrNeMXgDmM6LzGymo5j3zFCAbdwV9Jr",
  "key32": "2m4XgoYH14CDfL1ezSnTaAEBzmRZrMxKT9dxLZsPfpQGLkjQJ3mVjPM3TehhG1Y8SuMiteNNbkN1XWp2apPHjPE4",
  "key33": "39FL3CvvSGaLGFsyv2xTpjh2attaoV6Jy1qUtRfFqhfxuwzHJRYprZViCpyBKiSoUAjUfif3kmVTbwS8QnmnKhtj",
  "key34": "3zk5PUc16PD89YaLgET5W5sEXFzp7KETgXKtadSr3EUXcSRMhpnzDMXLVgTn5o6qmekC6K3B5BViBu7rztKv7B9i",
  "key35": "3eWpFicA1FWXG81UKCChe6wQhvQck4WJ4NKeE39U9gjqWCn3XFu3WDRUhrxCqcsuejJtXZZ4EvWcEERKeX1t59re",
  "key36": "5FtDn1tQ3zFkgGCTMeikyZoyEcaKmnhE58ozVUjsyLLVgGUzddhqUfBEYTKeFwm2WP4p8wtXLY3RtkoJ7JyTFCrZ",
  "key37": "5pBQXZjfs3dh6yjNxogsTX7YgNUXxV78Epk8FCrbMXMfLLSpNgw3D4sSDASs3Ht2jGY4SFEb9MmRmPVLzBbY6MdU",
  "key38": "35EwjZYkSED9kPcQjje7o3GLy9gbJpA2XhoWzPZVDjAQiqmpd93vRxJkaqXZ2tqoRw44sPSf6Yb316FRpqpxbFzZ",
  "key39": "3x8efo4d3Mq5AFKYt2G6ZPuWKcVcbT8cDoEwVrZCag9XxdSDS2R2hznJWrFjHXngreRGp2qqLhUwvo5DJGtR1j7x"
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
