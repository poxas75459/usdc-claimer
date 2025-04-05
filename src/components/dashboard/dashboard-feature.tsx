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
    "53Dq9JJPPTuLbYtWgj3WdTfoWAgGbxnMiVWg2LBDrfUmGAzV5Tv93vc8scj69F6Req3eNfWvnK6QAxxe1VWYFR6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pgBhzWMVDxn79EorA22EYSjhgyWGUSrFimQ2xGMANdTf5fEmmggKB3C7FJ35uRhaJ4F2QAswggsSBC7wuSkprvf",
  "key1": "iCWfo6s9j8zHrh7YjWkfDS7npAHbT7QZrTHrYvdjEzTnQJDdA2eHFfmZmUZqkLVP5mycJ2646XCCYDvet4WApV4",
  "key2": "4PUua3odW7WPYvHPTmT17txnoZmBG2bCtD9YgFHz1FaJGKdwz6qPe3MSgQuvAceEez9XXu25fXCrKqXyssW33mi7",
  "key3": "4xetfe4LPZ2MjBGDaCUo8sYzPq9JsVkSfgikyXiEEWijVoEDLDfHdTJY14xosGyD78QSyaRbqfkLT1pkCaaFWQty",
  "key4": "3JFCAf9ZBm3kKuV7GvBDcSj1r4Cchmyf2sP1dFdaBKqitTGLe9jaomV41kWzGU7XBVi9K4gBb5UYFCanz6GCv5se",
  "key5": "GiNeRnaHGB6urdwxvidKqs6wJCZVvU5oPo1r8tNVJSjHnyacQ877X8YvFyniPeAzrEuTEYRMwHtyYTgHoEqher8",
  "key6": "5jsufgeX8kvnx8gV6nyMJFEmLyzRMm4xtXUdarREnh7aUiq4xZbxKGvnMv24528bxT5pQwT3n2LtuRcRME8xzki5",
  "key7": "2ThXfdaCZ2wDmUtL7FU2ki89W2ygpbkYD6orSMGWvhkhg74y9pcLfm3wJ9Br9R7SPZwTJsmrgMTxwe1rcWAjMcSv",
  "key8": "2iVfe6cMK9N4yw7S7ngBBs55gTLkDuzo1xsBUbDPyoQnvJDuY9eoZcAy3dKSwYQcQNDAPq9KyfPvuKyiMULhGPtP",
  "key9": "4tWxzfDCxvbj2XHai5gNdRdGZNkASiMac9FicTVnzfvhv8C8E3G7SwQXPEXNbZZbq5UcSntNdqmqVDj9fixsZ21r",
  "key10": "4J8KCmNVZR8CDNoobjNYTTccAVABbAEU3WZVtJ49ApgMQ2S9kuTTsfXR93TyZV3yZCye2tqsnghTk7W5MyMznJAW",
  "key11": "3665BsN3kUnYtDV2L9STr9rF3ztohsugqTuTPU46V5wmVYfRdjF8he4KruRKfwTX2ehpVHVtKGYa2ERqAUYYmQfM",
  "key12": "3XiZV51vy8H6tduqwQdJXoSCWvaU6cwSwxQt81iBEnvtZHwAQ5BWw2tdVvGg2bAmAaFVudMitjLLXkCe7L4Jm49U",
  "key13": "26d35poH9PEp9MNYTtNLAUz6VGmauysPaHvkLefJeCEx6n8JyCZHrTmN7Nq1UGZNfLUspu9mfnRAJbrZUhUGiFtm",
  "key14": "2UHZsa929AXuzKAA5RbtcKvAz9HnSzqJ4r8tS73rkqbsKfEtNE3qjHKWQvksGPghAgbuUn4EbEtRP3DTZ52hH3H2",
  "key15": "2RLRQW6pupR4SGtr7qTKiSGrtBSaQX8Gn4ZNvQeaZvqBe446oVjZE9i4ur1Ns4nw6L57JZaSFr1PHQPhohRG5htD",
  "key16": "3rNvpHoqFscMzaH8ychNAGVwiVakiGJxGb8etMgPzXFqDq9NE5m2Da6idmVCevEhfzZbpFY2TZE9B9zptfpqdgzf",
  "key17": "2jSdK4KPzVjJg3p4JzrMod7818WZue8zkpGRFqKueQBu9pPXJVY8fkttwayiVWZUvmyKi51SvYqCEL5vyo55UVh4",
  "key18": "3hQ3SvJk9asppJKNuYje8R52iMdetMRGqRarob7TnYFmuFEoWWRjDv8syrHSx97uwkzYmr3PEgucnbkxyJssoTeg",
  "key19": "3Yq1QzKJmLEcQRe2zcE4kH8imb6g6Xk3mwKL7uyeHTM61oRDhEY6a1Qa6ibthNvvtMRNP3XiNJ61QgrUo6X3ZmY5",
  "key20": "5ZMFuLYtGtpixVzqX5JaqkBDcBmKzC559ad8K2FnhvS4dne9CdmvEvkhspXSEP96tWkmgtmCrvuYuyXyyMtE165C",
  "key21": "3t6e1CNhxrLwTJTkbZJNYYGCpmKwTTqWCEkzPZ5ngLgoVvuegr1iodKVsYpaxKkyK1fxdCLpnmxfmPJ58fDMwnAs",
  "key22": "5BYx8mgfV2PB95RdSjnK6VzUCFor2Z1GLdxftJbXGuQofW5yzdzbAyJZBktLvjvYAudkxweXphsXpBjuvxAxH1FR",
  "key23": "2kRgeKBeX33k6bVBkfK27L91AuJVfK3Sn6vWT6n78JTq1Pv4ZKgrcNmFnH32RqJSi3khjXqnWgPWFtMsQqSHY5ED",
  "key24": "45i5smyeRAGRAMG95N5qFWCBAvjnChLKAL7UrD9hZyYQpVEbKCD6hw5RTMJsCz3D6CjB9Jo2fVVbWDEhvkjJL8gA",
  "key25": "2uwTVwqCnmvfg2ZEa7i5wkFV8FqWUzHePX9MPZwmaFSvFnLXGxpruP3R4qckhKxkuCYCAHAAARCD3sR8rapunyvj",
  "key26": "3X3Y5ikC2GwGye7KqCWqW4Wi3F6kxBu9KUZfzs4mTJmp8BVH5vJ9sekPd6xXQnPeoJ8tcfYLtAZXkYKM8bfRcniP",
  "key27": "5RJyJ8ACf5bpWV1jtRx6YAq242SeEYz6KmmquRmW7e5YvQJzm6AdTSvaqFjwCYdXUo2JrW9cpqn9JmW8Lad1uCDm",
  "key28": "66xrXJ9D4c3iy8jnHtqLBKhgaNa2R4q48UXnKdBPu3dqtYY1QhxtDAHy5PbaNSmoxsTzkVHzZV6yYFXgVMiHB61G",
  "key29": "3ho2H6Eh6DeoT2tUY1k2TnnACqBpyPngJUA7V1EViw5bbrh5NL96anyTgLkHm7CRFU8FQ8hUiK6FTo4Zx9JYtNmG",
  "key30": "WAM4Ppb4GpJGiL5AbBND3E5n8x6nRht69GngUGbTngbMUHpnrW6ybwN5Qt9tgy1bFGAYghsZEodAVY5qyqajWAa",
  "key31": "3iFiCU5r3Us4EMrRrUaPjGNXmdDhYainTkzhnYrWavmN8EBufWbkrg2X74KUJcFZheKifiRmmFFcEzNd4d5a8HqA",
  "key32": "i6c5od5WUTZLTnL2i466S3TwqWC5souMTVbjN9nR1muFRGaUbqmFXLTQKAPPYFUaU5TB6rCp1HEvxQDSgJyLLdk",
  "key33": "2kXjs7roCVxiKFuuxzvfpMMaRyPLQxg17VGCv3hExCZ9evko3Wd3sXwNWkcCDiZifUEsWaGmcrUmr4pjKHmsr4mJ",
  "key34": "62EZQUW2tmVCUpcQdn7enk3RRudueLv2LLHMfNKKqf4V3gTJXjzRVwsNZC5iNLRMipHYSk7PQnozATGfen529ghS",
  "key35": "3nHnNoiPxb1YfRJ6sYABvvHdExASTDM1aMDBJc2KXh7QkQz4JPcd5hwrvu3NaoNfrdUFenShM9naKyX2SenM2NbS",
  "key36": "3BDFj5deysZgGhzCevKyTFwZF7qdQt1n6eoBo4ZnpjwSe6xdCtpLocLHr55w6tXVAH68vZqeFqgqUo8D1jSfKSmr",
  "key37": "4MrH9cq3jQdnbezUGLMt5P9Ks8qKU5FRRF6tAAs5YK2Sa67qtB7XKsP48p6cKTmjerRzNcnDxtg9Jm1ecFyBwiuR",
  "key38": "FuJSy5iawU81bDHYPtgzKS9PdnwWVDDLkj1fxQusKttBuHKbTx5S1LToFh9AsYCqyN3AgHn4sbCafjubamH9fWE"
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
