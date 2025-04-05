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
    "2iaVCWN5BX3zDARZrrppUS74AKftQwn94DQWWRSvUghJYZ3v1Egte79YuDScfF8RZNNBNtBhkZ59g1ucbaVTGfta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGKtsDggXvrMYcfeMUevDLwXj5CDN1YcJRPP4rRgButXSbhy7XAbUAixpda4B3K9HcWbTRa91bqLxxeu7eRjXcS",
  "key1": "3TfcSc7bN2Yp5bv3RWKAYH8HWLn6uLJXfxkkoqoue3LfUwWBwqxCBXoaWec1JMwMwjbow1zrs93EY2LtjHcz1JSw",
  "key2": "3jtcZcqJjCZ19wDJXwCe4T4XbtEJFJMLAuzRBFeoWp49c3qVHoACRgUTGnnx1MNbU5fDEexgXSRrsaEWkqXPzRrp",
  "key3": "4uEYwgqjADjuF4a16yt5y6s4tViJA2BCfR4hMu5JmpwTfNhn4PJ3RZ2HyAMvwMq5jMe4dgnN8fgRHUzunph8EJfu",
  "key4": "4UH8dDHWXKMXvV1heu8aQXRzapprVECak4qumYBB2qqP24n85mf2BmucUp1g21p6VV5Qfai5FHmVPsfDJDokYHXY",
  "key5": "gemRCBPeii9YsTs55nnrD4LjDju5TbDvrwx61mcP7Hg4ccHNyKMZoBvbG2K3y4VoT5Y6qzBv1seV28byn5PhBPP",
  "key6": "3ETK7YUdAUCnjEe1nUo4gzpVQWu9yLv2KMqaq3c3W6vjLcBnenh98PworiYFmyfadypcQaL4FLUMdyt4kd9hFaev",
  "key7": "4VAmjy45Zyr6SMVj5PD2msmqYhZiLaLBNoAeWTZVyTR1NS2r9B7pYrCcvURLcK2CjWk2zRUEiJfCiBjpddp34Ta5",
  "key8": "4sWPM41xfH25j5xndt61sEsnRbK1Vc1C1uEncPdZe5kxQdXyHcMsmMuLdaSMLvprdgxByueGJ2LC5ApX9GmdtYH2",
  "key9": "2fmzB9KPjD2oRTduytyyuYu2Kq6ubP7Ak6Ja6uNPPLLxHNPz4nuSaKEw6gy8UM9SreYiXdNdA7ALnGuvcJx6iNAq",
  "key10": "5BqZkNNrqXgEkCUzpP9FisrVbZ6a9tQRjbjNQbRZ3Mop1S4Ng5gGJTh7o7u3PHiERhsPYSHdA7iZmQczrA7DMBGc",
  "key11": "Kc5mG5pnHg8BF3asyWAaa55g9GdG8fsKN75xDgaiLf3nsM9VJccfEB1qbuYZedx3NdKWYnMHcumJ7QWjPMsn5xu",
  "key12": "3w3DTtHcGL4hncKqneSrUwzXoUFbua1gaMg4wYQmeS7Q4UtdxFBXmSaWsngA6GFYuuWtzNVjoTPHMjQe7SR5dWFq",
  "key13": "2xAwSoun9NFXSfuACCXRcevnXBhtjGdcWnZ6HdPtMXVHz2LxsPXzf1aicne2d32fAaxrPr8xW4Tg5d85SXhZmfWN",
  "key14": "5TpqVZsBKENt7WetTCXyQHFN1p6ZMHYjBG1x1oMu2F3R4dwbi7CTP9RwCs6CbcDHDZnbiR6B3M9NYjVt7JrNDkjF",
  "key15": "5kNbPwjZgbt6QxPaLLauEpzt91hBF1DXS3V9qxQUeN5WDDsRLEKpTnmnv2Re7x9huEmygkN4dW4gcfjW4bQN6yCE",
  "key16": "3wqd6X2b3AEaQf2iohf2MamMCGDSSXsdqzvZftQpenjCvDnLCqp8WrExk8i1ZjPEKwsU2QUwivG2MdEdQWccw7CW",
  "key17": "2aai1qeuJ25e8eGbrnE4Laqr71uabUkSBL467Q7dMgJkbBfk4CVcF3vHcEB7ekJnkgoSV1i1i4Q8a76B4u1APCZT",
  "key18": "49wTJQJtkNpBrp5wSpp2JnPYkfFFwW8YYgRBpybXu974TPVJzCwxXXPDbv5BUSJQKQvtNuMht3io2fDYJet7zCaA",
  "key19": "2yW1m69kBSFu3YKbBuMh1SpCFnzVGWYYExB8TnEMCjJm8E2JaZxrJQ9j1FnKTcRQBRM71G7NvbJ7nuFPTka3sWQb",
  "key20": "5U2AK8XFF2mkhdgwAmpxN4Ma2hwNGDL4eLaKvt7sumbBdGSz8ZW37DgcAESbkJy2vNrJoEGLDbfmsYS9b6QtYSAV",
  "key21": "2SVHEEwE9qsxTyuWLpDwu9ajMaCP2v6UBXfENB7TVgbG2KzvQQDNYjrZwuxKTGrCiUauzq2DD4WMRUV7vfgrVwRN",
  "key22": "3P9scfZH571VFnUyXHZ2bR8V45AtkcxXz5vYJ7TCnsnacsmfHibRWLmQNyKjwbF2ZhefBbD5mHkr12XaJ4iviQFP",
  "key23": "3XrhrkWJVVN43F17Z4Qd2qwAbGecHewFB6iD8RNYpmnCbW3tjfwuAW5k5AtZohr5UvnuYoQDBHHz938J1jwSeNp",
  "key24": "8qjfV7kQTZP2nKfvGYCnnArh7DKzLpJ9p7eyq3uJG7sVwEjeZBZ7wt281PvzBgwYtjZwZnkCei8ucZzEWvU2Xfc",
  "key25": "ZHowF7FshwSDjrpoQXCq1VzQKUdFt8mDyStCCKZPknRxVqotskRJVdDxMqPka23Jxc9WdBFQzFn7xMeWwvNbKBr",
  "key26": "5Yfj6UX2RZ7jvwq2sP4tCUFQX3q8kFhCoKCuMNAmXyAdcJkp5ZdsjAwzr91dwAJEqKTimMWTdCJKuwfqKhVBQvfQ",
  "key27": "5BnykC7ouoZ6UPK88h7k2Fobz14UGLVjHTsnswHydnZzqDfRxT2Rj12eqTpkpRcSm7ssAGbLXbnvonMtvaULHCY6"
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
