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
    "5ZEaRVR2AfQaHZZKPyzB2idBwLWoVjEtHzxm3G4Pf1wQd8AvajjYt8iTFBDT88UeevXaZae2cj5rBSejoqNfYDYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25P9d8tyWmEYiB9CrFowFR3Yk81U793H9FWVQUrJiLwneonHqBXVbWqSwabjcUSFXDwTVjW24tBSeUumuFAknJcC",
  "key1": "3pUCLgojRw73LXB1UXPJp7QGGEe2v7uEKNvd8UXUFxqjAZHPixFhRShy5CN3WS65315USYM9tSCyNRjJxyASgKKs",
  "key2": "n5Dkv2Pinytdi28RRn9hoJd7RRp6KKWDSjfKTRDLJU5W7KLgEm7HcbymQV6i86MoxuGxXEcnMHXymD1nvMHAX5Y",
  "key3": "2M51oPjwv2xZArXBQFvJ932UZvGV3ip5RRC1rjsE4Ne6fwbUCUStdLVYChRJWEuHRX9PVYordJf3FEJErkHZuckd",
  "key4": "3PHwspVKYbbsXMomotwGHcpYY2ZySSCuDqbwRmqZAsbLw1PpBNhbKxYKbha9ZaSzbLFJcuqZpcXdb4voVCZUWeQJ",
  "key5": "3YKuMfXN3ip6Y2RFG6PUM8vmooq1dpeDcR2ZwfmG7WQixZbv7HtWwDZtit27J3N1kuC89d5Zw9QxZt5VV7GCqidW",
  "key6": "5YzXQqhQwNbwYXGZieUM1QDrCeaTwwiRPNY1u3VbXXBJHEhP5dFkqjrJs3ucD6VoJ46XieL4mXZuZjgnope2jMgD",
  "key7": "wM825AWpTTRvBDnonvmZzM6zaVCqauBgHFgyuG5RKK6VL2px4A1vhZ3qc4nA1Cq12n8rdxxUCcja6VrdpRnx1B4",
  "key8": "2yDCHQnEyK1dfzNBEd9wsNFnFa7NyBHQMxtiTAJqtBU1LsHUAoMVRCXPZ22fkWFgc1XuDRuo2rb9t9HQz6RVCguD",
  "key9": "4UYhRCB31mqJ4yPvzaduabEiTrVcJHuNTJQd5wcb5yQXEfGHSJfccng1pAfweK4fqZFzmWiTe3wESySmtxaKSqUi",
  "key10": "63ZnbXuFXAdvFSngCwaiouzbqDS4nvU2MaZoqU4kBMKuH4JAC3gmkYHvPxBEA9ze48AJpqmWKYgBrmz7e8Ffg7kc",
  "key11": "4BxhDkH7UMNdoTrSU2JaL5nvyBnCizrR46JgfGUKJaxmn3VtfyazKBihCFGDMc7M59DW1HGKAGCZZNVWtKz4joNX",
  "key12": "58KwrewBPVYH2zPbv5Pn6P9K1hzC4EC33ptgXDWnSP9XcDxYeC2x3PXetFykT6dt32ZgX35wsu4SRroBTRe1KUWn",
  "key13": "5msmtTNNzdUuEtYFM7bKXJac2GcSriZ217JSSXxgYP6NGHTrHvYjBBRHHz8VhGYiNM6gdmQLadw9WWjuZgL9PERM",
  "key14": "2e2VcR2f7iAiZArfr5srz8gZFrQWAJxv4b2kgSHmdrAZ8DzAkj2fKHupeaGjtyT4xtmUHKTW2YYQTivJwMhhPmkW",
  "key15": "3oXPUKWiDLBrFEgnXAr6bVayMywXmRR9YrpSdjTVJ59vcvNtpYDNEfAQqBCUJy1dbZYMaiWZP2nwEbVbBp9iDbep",
  "key16": "5pCwjwU2ebZXh9NdXHkCTC3Q88Mi8cKn8ntePERfzUKCCK15SHb1Gh924pLaybozTcaaC4DDoBCiwyqeEa9bqhPS",
  "key17": "4aHZ2jZypMLLeiWvW3EYhzwT7iJtYfYmF5NVAXQkJmoph4MTwrEHhq1L3udroZckCz17UykXpdsyHcDBCc6E4Cs2",
  "key18": "5U2hYACZiCgJgE7NwSKmoAa89nvw9TMeWmJynU2Q2fvE32mrCAnLUWaoH1tNewZkou2NetHBhipuJMDpWANFdF8D",
  "key19": "5UbZPnXxACUDpCUsL3An263ePGomtVMkE4j7Gn2ZUpTCAXCVmWRhUZfNJrSRteQUB2Upe9NmogeQomvZ4moX9jTz",
  "key20": "4U1TxGdWaVr2JuvBkyWrvNwRY3xW8P6afCrDUqtELUY9Zq13QkisPHGcky7NVjRZfunbuwGdKLzBGRzWq45tX1Dg",
  "key21": "2QdQnjpE1uycjdqE7DFhEhKtgYJoVT45gQkwrDSvP6G9gMS7yqdEMjFZudKqtjenqpYGrAgXPnpyygQGmwNF8Lpi",
  "key22": "5VFUg3HZQKnLLAEwjcBiYawEeto7rRDBPQVGMyydwHaDL2QKwc8TpKiavXGteiFshA3R3pJzPu3roL5kwRqtTFb5",
  "key23": "5XjBDz3aCha3hCv7fPVQKXMiw22dmbNAyM36iS1p8CxgorrjjZDbhtMCMHV1u9nXvKS1ypvunbGahEudVotxr6wN",
  "key24": "2YECVHmTz6yzVih82TqDPrQv4qEPm3wXmiY167gpBpnuiiE9aR4NKpw5VFoWstzhmchin94dn8TSANoLitq9Dz7u",
  "key25": "cvqrCG7pC456gsQnNNDjJEcCtT8aYywPWCiZFnJxmF6uPK7Jwp91cGLWqbL3JD7xmSwHA4BvNuHrqHUtgSJmxA9",
  "key26": "2b5c9vbx3oNXQm6WdjShwhobWLqvMfayfuLgPQ5EKFRDxJpiKJZeAXAk9dmrbwFewjafcFns77wFBYDSZtn1rDq8",
  "key27": "7NawnEgFxNtGZBhzupAt7vQZyvunckymw8Xuo5gpkaEhxpoi7bqJ5qfwa5oS2hMiW9w8FnmynuEFkhvN5oRLrpL",
  "key28": "KPLwySAKtHvX9EoQjeFL9JYcWuBbUXGqmzqHMfo3ejusHYWeVcb6qTRgxXrSR3aQa9p1ABNRAhquxWJTQrk1FLv",
  "key29": "4pw93BNLSiTPkaoDQmQfE7rS4Ks8kPWKV8o4p9N5gG5Z7u994RhMRHgEZwEEeHg2HPp5vQMYV8z8r4FHVNKQykbk",
  "key30": "21cvhQM2AXX573fBzt75aUgh4ssqC7jGA46cjVYCduwomdvwE1gwLrSXrJLYMrVXtkkQWhW7N8JHkJMpNGNu7JBs",
  "key31": "5zroD779bdHkKMGTTtb4Eaipxs5At3gGhhigWjtRzZaCPo3CazUNUxNYaXpJaxXj5ms7Ygy4ysUTLmvY3x3Wg3k5"
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
