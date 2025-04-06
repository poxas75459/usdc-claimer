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
    "UPSKFL363m254M2cMiYdYpG6h5tCnZ99qvJRDXTaF8g6m83zx95oFTwgMQHBjDyVKwf7gfUoD1igSRCydV11X44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wwwRfJV2esU8miidx9HeMBTVH7M7prwGkKUE78jkeEocf1d8W5CpJXubkXjy6Eouwq5hyQVERSThHP9vt7oqNd",
  "key1": "UpCRG1DWhWuvMwoceWTBxMhuKHReWDRdbzD3HFs4yq8Mirvj8XqCYWp37aknGSN8wLH1wiKvfDzjZTsSXVFJRQH",
  "key2": "ssnpvnRvJKbkBLaMpBTQwCV4crnmSBwqcEeASuNkrhvMcT74kAt9nrhBpuo2WhvqjpC2pxM86kZaeFPtH3U34ji",
  "key3": "5hMLrcTmPr1rahQpNgj3M4KXbjx9B7beGSwH79DpLBfSky3VpvaZytBUSxPVEQvfkAcnNE4TqH1kprREFnpy546o",
  "key4": "23waB1hWXgTGpBjhjwATCVqctDEewi2rm7rEaZ4gBejm9CDzsArXQMmtKaojx6SUBuNioq2vAeGLjMgFnPYAKgth",
  "key5": "3DpueqfpYxKmftWzEs1yXm4FWCtjJjkEUcbTEe6u2Rqm2FXqTPive863t2gVz3uE5AoMptooBNR1F1w8tgMr4V8m",
  "key6": "5e2kjMgFg793GXkVyeyYYyri5AnCFSGtC5BbbyPxdoP1wnkm6AAeRXZT4vcZeDeqrLGJXN3Hu1yKnWEbtnrWH4N8",
  "key7": "n1YKDzMjBRCxTd57HSbYpqAnwduVxePSr5Umhb9bijJ4HaTqk4bqDhZCEGxYps96Fubv5ngnzFY8vBQ8EEXCWPP",
  "key8": "2P9vwaW15fihmGWjnmLX6xyxncSiCAjYtgCyAJiagxF8wRmSfuSC6ntExFjdUyqucLz2qmcGpzkZqp6TbCDQ9t4D",
  "key9": "4Bx6zd9qaiwnTBQoLmcbo1iKYgrj9hwnyaPE6cj35z4GBBJywQbG1NwqHNrWFbG9FFETFaMYTS8YhHTnv23bEqWg",
  "key10": "3dL9KgfG4DTfxiyFTxMHhX3nWkUH5UhhKr5QiLFBRZLSxuUsz7H4SEf5RHox5fD1KQzrofXkNUFUGXSyr4cHF5Zw",
  "key11": "4UNWG75pMiapEuJ3LixdDv6RsSLAfJL4xCdFDyuQ65ZN8cE1LxZmc4UYz7d1r62jxWxBAsNBBMevbmYx6B8XcysD",
  "key12": "A9QgGNDnahepk5YJK59d9p2cMeuGLc6Gs1wACgouNG6gpbfcZTvXAi2AEhTtjPYrS7Vu8mJntasgnnSB8W7gmJV",
  "key13": "3MwCgrXMWwvcanjvVrc11jMdyCdmM9qoSFXAQyJ9HKV3a3t8M94LeGyAyYyyQVnSi4ztHXBdaZCu9g7j11BjzDU6",
  "key14": "5x4tTNUaffE5F65zvNwKUJyi7LtACMBYhxd6aunckEhwa47frJpFST3NHcUDQPmSyMiLcL1BnfFboqYeST9dJyeF",
  "key15": "3BGmhntH1Ntus1LcReBcbhEXnpuYpM2KEVoh3gCYqhic3NuNU1TkAd5pnb8y7vRBZxdAKVj9wa5vByvqsDbG5bDf",
  "key16": "NmUTU66t9bd2BbhgaK9Q8effuTUxZSJMhU3YFvvsgdE5EFYJdabaVsHmjEaWLSZ17S21F9JdSgLge8Kn1Nwa1Si",
  "key17": "3PS8tiwFjGNBUUqFWGwy72kSq7ZcWNSzCj3qsT9RvW5ZbtuK8VqJ3M81gv8XXLQVuCtdNE2VLVvX7rqUJiYshcyU",
  "key18": "4eKs64XhovnpZXjdp5Va2nW2n3scYPjUJG2RavhV8oX4HK3AR5hnkzegouofnvE5t9wwW7zWjR2Vtth6HVmQvHAR",
  "key19": "5Vvwr2DGHAra7ScF8pehkmwnMcUCVfjiqmJcJgAAHipRRvYVqxN7wNxemGxdw4L67TRXB3tvw2FGNZsmsaw3J9wW",
  "key20": "4Cs1ur7RYNhdMopHG3qUpsu2S3T9U43dJY8SWzfZzLck6bEjXpR2HcSBeaYf3QfemTfnuN6ktz4D9Ui6rTrrxgsp",
  "key21": "5tEfGJExo72XeMHcDATxVpSFQigupjbVtmqQRZddXfiBP21ucr2bGdmDjkKDRkhjX9ULRi4jHqKcXfy5ZnXFXBxR",
  "key22": "2LgWiJinuXsTSbDnFMWptjxMk3esvVhGHNeL5Cmsufs8qGFJnqZZdxK7DjxeyDE5MLJFkiytJZZHT6z6YCswuZQx",
  "key23": "REJF73gnkQcWGepEJ9QV29CsgndJr15JwGgumBnEE213Cf8heinec9fvqthnjDPcTRQBzpPSkRGXAtAJCmfgZ4e",
  "key24": "5PExF2MumC4U7MFY1c5RVK86ycKjPgURNqQvXdSTogV6WNtkYvPqrSkG5SajNbkHQMArT5mWyShNT41J9xYQDC3L",
  "key25": "54stT6S9ZZVtSDSxvgiNC56MQW579yaFyA1DDnADovcaaMxsUbueY3uQRA42xYzZMAotEWPtyPTXxfq4fB33QgG7"
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
