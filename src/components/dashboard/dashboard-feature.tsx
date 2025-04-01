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
    "2mJuhqRtatoDzGAC9NCky52K9HggzroV6J4PTPr5dBiGgsNmsZQ5L8PBoekV1eDw9pxPRBuN6WC8hGn7HHjhVwjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mBQRe4xkvi6Vot6bZmeEHBPoP4UGjgX9vZ4NfL62eLPcJXMhNPQqs1DCM75zLVGzFrJp5kneWCziA669Z4SAq9c",
  "key1": "416DkJxPL6hijgdEuPNh3uB8TL4ndmdbZWvaDAALUHCziTLNPHYeTwbd8fMcaiZavxKmsbRbDJ12NSwpXdy2kFZc",
  "key2": "3223raCV97P9QVas7bkg9iVFMgcTY3HcEuYneaUs4yRWqZDCKP2mH5jrLPk9aHP7ePf4e286qYPc6oM32EjKvGPx",
  "key3": "5qoiurWJnMSh9tLw8EwSBKsW3kn6iQ7p4z8DXAkKXobAmNhHgRyYPTWtjDsmMoYJtUqDxa9zsWWgH8bq1bTVUYC4",
  "key4": "TFhDJUcrH12NkoAGCh6iWH1zz7BigZjgcc6A5NeM9vJQLNNn56F5SLMoqMQFiX9weaUahmrEgfi3mpCEMAPugrv",
  "key5": "5rnJCgeL7TJQB2yLh5DwcKNbJWkdUhA1VvYRr7v9AWbui2vkjzZaqo9tcSWQknX1WtWXW4JMHMt15BZxg3CvxtXB",
  "key6": "TSC1Atxfqo6VmZ6canduSDjMS41S7s5csmgTiqGk8hXN7v5M9GkUQFcDhLJ8J5gX1TMdgSKpS6A71h5Vh4zjXMB",
  "key7": "5GLAWpSp32rxoQDvYnSgmRXnAhy2VSJzxotip92LAmMWJweRMumQrUHSFCR3joDWn3dZrWggN4JvE1VuXnQtmQq1",
  "key8": "5mTJWH5KL9Dpqg56KEHg5jRfAHRCFfABPWFtdUm671q1WtkRc45GgRdZTbuXgA4UZRqj6R1Wcizejmv7T7gQ2jvt",
  "key9": "2eLGtScLY4sQ1hbJdVoMncJdxd4hLRv7tUMdxqSvUw5jPzLhVDgybMgYzXnzbQGkQigRs3VfrQv1YB2D4wFHoG9K",
  "key10": "3e7Dov6qfxjUsobEjZyQLPEx61u3ZKUyoihjwGJr4Ti6kR4E1njBQGghnPVh8BY3eRmBhVi5gwRFuizU7GNJeNTZ",
  "key11": "2XD2tEAUPGGKVtRxonS1Ydu9bz5NM5TCXeazbmxCwhJ7teJEYpw4VDJy9ttTr1wcwbXNGqqWdyZa3XcAj6LbFLf6",
  "key12": "5N8jPqGBxBmdMeuhrdwhT5nM41ZDcafHUJbFPYfp8givjhSCYJeSCEf3U8nE46FCyDWzc2Mzotqw4V72Qz4DXVjr",
  "key13": "fgf2PEoScUrhawmjgmU4yhNpAyjHXqrL9mLkSaqztg3W8gFGzEpAofiChgMWpiepiZXzCYzJSYxoJreQJDcmaLM",
  "key14": "zgtVrDKaW6mn9HoLDiGKFQcXCMHCPhXBtfo7zeZ2Dyoa1JrAhYN7GEqnh1k6ptZbK83Wbn983ELbJxtqYwq3bRx",
  "key15": "37U2Ewb8tYkWUn62p4Uu66p873b35ZyFsQ2TGWk1Ynzixh2QA7PgSpzehUioW48FHt1HBJHKN6vepSWZRthnrFkq",
  "key16": "56MfuEtq7rPWsDdSkkdq6cRtHpBBTAC4FnSNZz1jVeMTQTYSygq2TGCnbdirTRsoo428JoTRdokqixVuP5aGSUcf",
  "key17": "49dqHMcom4g1SWZHUBZ8WFunRtwJ43qGhGcV4oyvPVzVbqA3f5QZpDwB75xG2sRuaUZJquiQuFNBuPhUdmrsF9eh",
  "key18": "25BjtWraYdcxddkxXFtFd95y47szjpKEjb2QqQ8KpLGC9W9gWXQbTh4PUn4UZQwiUETaJFBdCaV5o2JTPLHG2BwF",
  "key19": "3eBPt6ca35iaCE6Ygt8dXCHqoC8gCR5Edb6Gz2GffcGLapgga253ipbgtxAkahPMLGNFQbJHNfdgcE5hMyuvNCn8",
  "key20": "2zit3o6rR6N9gV6JMvbequxwwUPGgrgaXEr4VmE6u3CaeF9fe1xUB1gC1SZZjdeSEHwgwHMo9zExZLXr7gBEwo5D",
  "key21": "eRXMJJsdW13PpdtfYJoNSikXAJamNS7GHopm1BnpwB5DoGCPrs2JdwbdVA6uAcvbNX1pu667Q5ntrGnSrFZBN34",
  "key22": "56iUb2w1vo67Nej7qir28Saz2zw6aBkwy55iFjqvtUXzpeCg1ZpfU2qsgd4C1FFsrs6EVXet9jEhf5YUvB1RiVAE",
  "key23": "PNisszQvWrM6g6bRvBVfnsszqvPiDT8Hh8ucD2jVu8VyoPyYEfSuLZrJkTwSWoc1EfoEg2dittxsX1yyLYjCo2D",
  "key24": "JGFwHpP9fHuG6Y53oELywmaqjdB94xpAf9nkhGWJwTuexF4BS9y3ffpzXGHjHQA7NdY3bR54qc2hT1aaDRDY2Px",
  "key25": "5hSruEE4GviWzHSm1Ze6fZTjAYxFTwtVXU17JBuXG7HoF29CeQe15LKhfB1GCycHt3RBRMDiDFqaAymRGzT8uUna",
  "key26": "5WbwMeycJxtWDqZgjT7VdVMaNcGTw2S5AAjFsGiGjf3xfwB7EhXFThMw9EPg6ixbJQ4huQccxsiZr7568f32fZF4"
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
