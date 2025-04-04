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
    "496pkhMThQL8vzCJTDqqjyLqX6GWKPuF6J9L1WtrTVHW8teyfts513BD5MZWYfySQGF7dFoXnF8ugiB2oajCtVTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YgkJCJVTPdw9ezpr4nPQqNRoByXDXNK3L2EXS69yL3Yf2vUE2AfBHbxJZ4nyHRu4XqjA7umf8gaxbCjtnYBmK4",
  "key1": "o7s94aCGw8BMwfabUxGqMJKJ1zyDzoD5bRurFi8LzxHAcUTfPNe4iyKqd3wPNcjk3TBwNuMD8kQsBd4rwy4yPRx",
  "key2": "4P5tQXK1o6wehaHeSG3yzzPHpxuqTtvSnzd92kf86yvypoSTjcB4Z626WV4yMtFeNPVoMbjmK9deGRPhKMtB6JXg",
  "key3": "gKGM1VQycK2gkDrwudtaGSFjMU1Hj6S1yPGUpG1KzAfD24ibbkLdA9deCWuC8GeX1EcU36phbWvchgtkj3Z9bYL",
  "key4": "67VFkPF6JfnoLYcaMj692stu2qf18c1Ghdo2Q5iYbbJcpDhH61DRpERyVsYXqk3ck6FTfMKeKb5LRxrUybKRbsbi",
  "key5": "5rRTLb6oLtUoQ3ou5RabwfRXn452YAn5jGfosmJNAC4JkRpCX72FgLaxhFU44dSqDxXiBYEEYraQ1kSPgqNZNC2G",
  "key6": "mReDB5gD4VC7pyBCuU4ieFfH932EvyGS5UhXBQcFt5fYcxik184CxM44djYFECJHL7sfwJ7P3Ej3pQjJFXGeYWN",
  "key7": "4QXweVwAZjps5mbJMRMrvyUjZMzKUkx3wCX5RzCMwhLJcmDxMA5Eah6361KfxRoNgA5TnvG4xhQuf3gkKkTmwcHA",
  "key8": "467TkoUZWBEDHbFuDPrSGdNag629k3f92GyfYRiucFehJYnhTsBqqZAmmKwvPkWqAdU2bjfrcmenMiq19towCjTr",
  "key9": "43eRcvNdJF2xAHjUidhjx5KA9163GFn9HTQu5j24NpyPEaajsfTi2PW65S8BzbgvCLv7UR8beG5ugt3N6xos6ic7",
  "key10": "2qWhb4j8JKf5X5zhEwiK58EUo2R7RfNF4aErPfh6AwRvqeW8YvpfAxm6yAQoQGH8cyaYq3PuJSUTc9jWdAw3p9pu",
  "key11": "3F3UFsoGJgcT1ioFAR8K2gsfKTRbaZXjd3hi1wYVz8PSLgocTF7dgMEGPvEQn4RBMdNhjjva7PX6KMoP4ezq1Mif",
  "key12": "4amrPDCSmfER6in8NUoq7SGcfyxcPtoYeE2uamb9jAm7KNQq5XzKQVPZdQVGrnq36gLeorr8RJP47MQ1LuDAMrUC",
  "key13": "4eEWhRv5anc5uERBZ4GSuxMVv444EuM4ZLWwH3wZDouN1xCsJxJQjo5rEwH3iz7ZnYCNrupVGZPYD7Atk8v2kJA5",
  "key14": "3xak95q32o9Q3bMAe1B3zQgUetXua2jqqs341n7qYFoktZk7eE3D4kjHJsUDapvWNYAs1fMaaooRbFBtECiEWWMm",
  "key15": "5uHQGveotfmHZdnmkWQdCddmGPfc3S9b4wyT1JPmtcJr41LfxmgpTzULawT1xmHZkxcahsH6xhawqEuUAAemccLh",
  "key16": "euE3F1yCW4c9nS7Fyt4N3dQR63Cc4eUcgBaJvvBpjsqqNqBDce4zPfvKurztNArVyuuKcZUdjahxHErp6gfXqhL",
  "key17": "3QDGzHsLJUDieHkBzHJ77nNuJu2unPoEr8BrEukY72fNYyrpra4TagCs1nshH4VPac6Xc3PJzz169Z7PA4L8Xghk",
  "key18": "3BrKGgL9NrECSTzPLK9KVtwyDp8mk3tJWRc242phSJbYEFBspBTHB3oWbFzE5EDkgwPTNJys5pmsL9i8xcH2cYqR",
  "key19": "5WCk9XrKFxycbbKWQs5WXzFqTLHAa2AvWbNA5iQP8eQpUKJrZDzbnbC7JnXt38sxymyQvGAoxab6RwC9iaX5SDvL",
  "key20": "4mxMkeweerJjdD7iCSmdW8vch39oungXUYGw3rCJ1ZitAWx9aa9namRSCwxGBC4wCx1Y1A7oAbapkRdZAAT9dkwu",
  "key21": "4foYTEHgJmTw9NYvBdquxZV2DYMy4To5v2SKMijLrarnPnAKikqjsAjS9TEhrH5ZgTbYa1eVyQghMVNt1W6qMNtQ",
  "key22": "2PoGjm4etd1ALZeuimewBc61u9gtNe8UbzjpmhS2KT2LTHpwccYquZm5gYU1ZQgyomBuPfT2Fkjj2zwhd6DVUwuz",
  "key23": "619R1963jxnytqpPPwb4yxQJ236RQi7NaC4XTzyNhYq1fZQy6WufTVQq9xhpARJXyYdAtFPn5iCw51Qip4c7uNbJ",
  "key24": "HYFbak3nxVfdbcMSywTHLqfvM6AWbchYQtLzDgowgmJayhAmB58gymzFkob6QKiAQhrY2Cf5CQQ7jBToJrUXAgK"
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
