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
    "4rLfjqoCDUAmWGnzFHMawxzkENdBUt1PMXN7p3Rf9LjQRuAFz8m6AX3emEwawbNiKgXaF761nd8nFQCTDRjP9MuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DksNrFPskLxNUgknrP4VdmyyNu5XiNLXHW8af9x5eRiEzejm7aj82fc3FNpgpt8DPhYBJ1HSJh6vC1iGEUSUsa",
  "key1": "4EMAbUufYKfUqLGp9DNrEwQDxjMdk4FfTnV5eZf6yKmwPYV6bcCsjYAPLmDBpTHCmE95CG7bhuZqzpat135ryGxs",
  "key2": "5rXenh1EGwXdSJH9ysZoK5bfF4vVWEscXBnfD8AaAxe2DkcYVVZuXsL66ykwKjK23yYVzmJNYymTN7eViMfom1Zk",
  "key3": "L88TBkK31WCzvcg8B4AQE3X9FffxR8eLLaUWvvbCAskofBKExGWvhGibDtugV8RJi1rG36NeGyHJCHzt9qdHfjp",
  "key4": "4Juam6fFiBWZKyRuCU5p4RXjZ7d9nGBhNq2V7Z6BvAXUr2rW8W5CnfCRzhRJashtZTUwZTSGbLYHcAFsYApUGgic",
  "key5": "2M83WpHEBBZbva4e1WZdaYgVgwerijdBFAjJhFYNTSM4DNnzE2mwFYvp1j79ZKrwNY1aR5NefqqWSSsL9CgxBD36",
  "key6": "BLc3WAwutntv6mokUGWQvAyvRvVFem7xF8WxoTGTV5PPghkZLDh1NC5sFXGZu8h1Gn66Losq2Ho4JezRd8UQqru",
  "key7": "4zZQnBNe1N3Xctei6HqQZfGnjH2t6SnQyPQJB8MWk9SjBi4TPiza3TGEKt8nivkaXvzm6mS9EgUShsdDDW1ywZ7Y",
  "key8": "5ZgkjbW6YiXwSjJTKhCx8t362se5L6fF72FxaXY2cdw6BMjiPuMjXWwxU27nRrBk25MU2r4jF72wqsvGcCStpixD",
  "key9": "mLjAJYvcBPQpen6WW7Fw4GGQre91QMhanaK2euxzHeeekHcjBz3m8PyCg9SJoaPoSyitFrvMvdcPn5hdhq3J5KM",
  "key10": "2CDWZBTzKBYdBnaxUkZ4GxynaoFqSzrHjZoyu1FSJ7Sf4DGjDFM59DKjsGPP4tUXsEibfqZnD3Y5W1fWz1TyUPcc",
  "key11": "56vWRfenzjR3NoTf8Gq6KtLHxPgLz4aRbdeGdYCeJWYXSSt3WA9CbV9fghjVhvUA74fYfKHZXxvWZQyqamqc3GPa",
  "key12": "4WzvtrjTRDqqmrXYocBRSv15hW3ZQeQ13oE4nHtnjNuGS9hchS6tN6qetPb6KnehNUxKYmw6SFDgop2Gm9r3KXRM",
  "key13": "4UkuT8pDyzkt5aJhWz7Su42sQmkHDEcKKC3LatyVRQHWms8p54uSUGecTiNaEBdYuHQiZ6NMxPZM7B1QJddvRwjm",
  "key14": "nybxK93X9eh7QJfs5MhdpXAwzyfZsj1bSDssRCxZHXHmtLvMjkak8HC6Xg3TikeiX93ea5QhiXiR5ECEAYF79ky",
  "key15": "2b6keGbqPtpR5Zk5m1GaCMxyF5BvxAma5mKUYeUq5wLdbhRusiUi47X4zVNDL39kj4zv3BqAQVpY6AAUtjCjpAuM",
  "key16": "2PcQuW7ZgFLnNCNYt5aCYsWNW4qpt3PspavJrieqxhFqsuKXZMop8qVzPfWHLVADxnZRFVwbSpub36rNE9C5QfdD",
  "key17": "3ov629SHYrCHsw6SzhmVBn7gtTCQ5ax5BDdKgy2Ye6UyXVyBQ2ss4EBUgg4tY9SzYuqC2NYSZDwtCX2rZS546JqD",
  "key18": "4yLgMTrnFAm5JZZjE1Fxm5PcQcXeSEpDvNTPzb14f6jh7Ed1BCgKqrhRANRxCXcyTvUqycLatyi5DJv9VwUBGu49",
  "key19": "3YLPD9yMUW9eUdiviRocqeTgiMymYBdPMtfxfqn7yfuA4PDgdhEh3vTrQu9HJBQCfYwuh7z5iZoNNQBu7XtS39nN",
  "key20": "44mjTaAuMXYfx6Uu6mn3eQNrqKbze7AZNrAQP3pVu2685PPhaarEpKFMrQhAzCCmczajrkjzX56uXZXujJPo9Bbm",
  "key21": "4iPhtMMPoTBuvWe4iUSpqrJntYi39edNCqK1JmFYGrNijKHmit6f9q75SSprGUBRq2VuCK6SAY34XK27V5tsdrcK",
  "key22": "5MWueX7vLSmdxSZG5c6cYNeYSSDuEjbQEE2oB74RoFdyvdTxHujYjdFt6vkVr8iat5AstrvMgHKzwJat75CBtTQ",
  "key23": "3zxYJa7Fc7b3pU4jdV2zFLKVCXdumZsSrco7o8uEYEnpEfEkGaekwMendfm88B3uiXo7RFHiNf8UBC4VRL6EfCpw",
  "key24": "2gtVHVKoD9vGEHEPpW9PmArZbLXgxeNWv1WzkRYmKddDLj1o9dWdjiTgVVkJS5zuH43aPx1SXYUHdrhZBvAnYd3h",
  "key25": "3KtocgYjgjtcUeS89vTKfRcvGAn5XG486UxJd8VGQUASkhnbYr9bTaXsAGFmmQqvgrWEe6YZ1J2xYgTVXP5mk7iD"
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
