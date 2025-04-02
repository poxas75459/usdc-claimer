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
    "2xFBbPuhSZdNrwvAHP9bq7NHmLJb8heRwMpkVi95msWRJLimdtZcYcePbqWspTsQLn8wauzVoGrd7sxXtnC51Tmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ezwC6QY1GMMdf7iAZHhxuuVKRofByZekzSnvC4W94q9tEj7zbJwjUSUg1ncA81HtaG93EChmLErwqK6EvBoUNxn",
  "key1": "5gLZgZVXPdsyenpPBsgsKQR5ic1up6VRCa35J2cq9ivZY32TyWPNEaNSerpma5q9Bh1jyTKKYScupiaM6D7EYdSm",
  "key2": "4pRv7SmHAsrTFjagxPaSXitLTcXh6kG4FskfeitMCGieLUrtTuYgxPwuQVsnJeq3CrxSn1kLZUxMYJPZfopZiBkn",
  "key3": "3iipWu9vq8xSauJJRGctzeqpnch1ncjXg6nSDA18Ni2eYtJVgz7gBpGVRneRqVw7T3B8gytua5BzEx6kHihDJqzo",
  "key4": "4NgB3kogUd1c2NsFLzU77K6qpqr5zhVkJvTuSo6Dmf4v3mT7owAkEiudx8L7ecXen821YYSG6xjZFiWCRz5BghMZ",
  "key5": "42WP31HrgLg73HcnD6yiBy89G8MW5LiFH9P6JbxkFdbsyawbctyxVKueuhJBRd6zoKcrA25F6Q16z8Brh1bqDyvE",
  "key6": "473XecX1mbwtZrjNMnwVTp869DfiDLTPfAP42LGVMxn7YYEPrBqkyCZ6F2UsvhpM44waHptTLdzPfyEYKpYSP4KG",
  "key7": "2FEjUHPAb1o8iMFKh5AowxFkWe2enXZJp7VajKirR4ngLMNDDFiAjBgTefkk7aFGrV76S4Q3SXK3e64SaQ5mUMAm",
  "key8": "41Vae3rCHrJoqcjMuP4ARwKSfXyK4MDhTT9pWq8tzDb1kYTmfj4qzq2bRkUsZvyPr5eKzEoNYrBWiDMZqcUCxKba",
  "key9": "2YpPLoQsX4s6YTGs8UD8N27XefpEGQDS6dS72JcCmTJcXpGn53P5qp6UrGahLdNpRiGcpEwRYu3ZLLi2BmJA6grw",
  "key10": "5dCG3SeN8t5z4tFStt4szp7RZWmwSYYxGB77zhZxQwsKArxRnMeovYne9f3ZuQ6PUaVtmKDMv7tkSXmVv6XF9K2F",
  "key11": "LePhk44q7RLTqtqrLuiRiJGHpGbgmvMK9UMdMrHvZJYgJyuojZpcLzHrz69SdQiLZ8DtD1AbjQevrdZVK4BGidq",
  "key12": "4GFwAD4crLkeD2oE7u2iY94nRCsM9x1Pp5h1ZqXuLwAhKFkdd7rVvNVij8puErevTfVDL6YkwySXr4EhpUoDNJk4",
  "key13": "Q4yMxooJc5PsXXAT7W3b6N8czSUykWW6mjsvEQy6HxTQUn5ZDA2crTRFEiJMC2XCVrKRZDr59h9QNX9KvGhHXK5",
  "key14": "UquGyLjyqTdymkkpxG5gEfkuC7LkGDaDFw1s5gTJK8mgBAqeUVjMPXKoB4MMLXaoM2BGTtEUbH7RztCCwMqXRqf",
  "key15": "2B1sLY1g5VQMWMcFtLwY6qXAuxYQFwREbVejvphszrJud1Ccmxy4KW4zvU793YGn6GkZbrBWYVe3mXYAvr6GaxMW",
  "key16": "iTDXq4siNBo2sUpKDVKEWhb5zbGLFtMeYNvekFtZErw75zgb894HvL1318bseC3W1DdEXFjdhr9KDbRiifjaPY6",
  "key17": "c9MEvpCpuUSiCeNRAT7KkNqDbPH7oKXkPQENTpcDdkoYHggoV7a7FrTmpi4Y4Es5afQouyywGjqAKXWKK4VRsS4",
  "key18": "4Lf7q3MMJWULJj53VDHp9j7w2bWuXtfw5jBrtMcB4sjCKYTiDiFWceTrt4jsDY4DmeSzzScA2YHnACcQ391Y5RqW",
  "key19": "5FYHB3iHueD1oxsUpUgUnLA71UyYBdKZAxDnBboSMJVvoa5QGAe5Cd66uJz19VHYrdTLXgy24TqD7HDmXHYYLei9",
  "key20": "5dhVU5bAUGTow9nSevM2MAieUe5yvqcfsMaBUgHtutbYwL91woJeJni9QCMyL3XMrKejmF3QMgXbCVqVWBYgiHgT",
  "key21": "29AE6xRZTHHFnxvfzAN1KxYdmaRwMbxi4ruUqTQgMibQr5iJhMuivJyhRP2ghJhddEYz3pnzAHUPJgKbQicTyrVm",
  "key22": "C2nk1dc793xck1qXAZh29VWLfkrsvqWffWMtdhFk3v68aHvZ1Q36jfAJtX9wvYUFeR5do2ypBTmA5VyBJxQ5yEp",
  "key23": "3gGLcjtrt7RCsrgApktK3KC1f9b2v1x9VaHE9VoduKFDxV86xm4Vo4N8gS32uCUTEcqa83uP5griU5HFEfrqpuK4",
  "key24": "4UfUTvf55MhxcfiUj5paeKjqB1qPxVXxdmSn26evA2Xqe2n8bo4E9e92x36r8KR29frqbivsRaSdKpodCttgjYUB"
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
