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
    "NqBd96xRJPA77ugu1FZryATwem4j2yKFsFhUm1poj1ibLvgfEroXGJRy81CHAYBmnUV9yJxrGDP49W94ivzygXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DnxU6rxnGJZCUS69eM7buabdRYq8YHkgmKbuvY7svvEYw8vyMoJFnwBk3vJJtxTL5SkcN4uuECCNaRGvk82xdWb",
  "key1": "4PXb2CyqSab2dMWYVggFfv5a8m697uZgHDkiNomJDcGk2cFJB1p86LUqTRmc18SAQTQr4hQQ7i7pNyKFn6Zk4d7c",
  "key2": "rSwdKGXTpPimV8arxD3Rez2mRLUjzVd7bidG2r3dFMSvRyFG86NGJZkMaGahRrGCQ2cufcEiU182iAYrTwKS1v7",
  "key3": "4mGg6meS2w3q329jKznW7wsBfbGNUeQ1VGUfuvUfbkDe6dAhdnVK8ni2onNAbSAAebvHsxgeANETV2Mw2c7DaFCC",
  "key4": "5AsBEwoUgwkgG7FQ379Mh2vHBf1RdJmJ4Aud2zrGZrRdJoNVPZ87HbJyh1C4jxUNN6y57SSnQCMWfMDksaUgcFtY",
  "key5": "5DAKn4JhYZaYL8jqc91ZdJtAif643XJvWtXpYayXsivj4TtN5h2rhsLAAQCNRwNLXSvdWyGVxKFnJtBJzEcxKNHP",
  "key6": "3xiw9oqwM2esHsvf3Juxm2pP2EjBANsjdbWiMjdFrB43h6viGK6tt3khz5PJ9CqE3wMsrf2Gy8XVPLDyuAEfY1M5",
  "key7": "2Q8967LAJ2ZhHjEVnN8NrRPvSLqaGvExe8YmPWL4MUPZMMuzSPc3a7QAbga6pvGoVoiFQEae3wjqojMRE8eCddZN",
  "key8": "3RRdqW2TBitCwneKzCVhc4s4mC57AUBZqn7xCyk4sCAwM2LusFjvt3kzbP4wQPc7gHE19Pj3TcCMrY3cT21sBzto",
  "key9": "EccqVtFkNzRfunNut72RbKTMtpBNwFgt4yTTkCVCbuWyD7ufQs4XBHHiLdYXdWjP1MwRi79SYvkTeQcJeURRd12",
  "key10": "2bPoysEdsnPjPPeL1k455gsg5VWMgfjqPaiSD9zeExHgADBnsfAt9Vzs2k4Ffe9bQ2Zku4dYTBMMoy3kMoR3W4EV",
  "key11": "5eAD1gDa7oeEgbyxWr7sA26EEmbg6U6Y6aiBVtj9pzAzj3XeGU6cfEfA7qYpLxYUaaqZrytxAPsXjFtqmdyHdNQZ",
  "key12": "43LSp8qCpkMiNeBKdFvoskb5vJ1PcQU3pXySeQHE68aSvqeZ5FxjJMjWA9n76XpgZz9bq4e72iHWd1qTwYVHGHZs",
  "key13": "3MqeHfXBobwRoYT61LAbnVGVkexikwba9YFai7nSLc2zpaEfr6TEN1WaFPvkjhwC5Vza1cwmawkxLrqZhGFa4gzL",
  "key14": "5PLcgPxAq199nDZcjr9qKF8vLQNHyQvyfRQvwNKTZiEHyz8a36VBmbaLxmsQet5xWPTq2g2sRekDs2WvF8uvYM2C",
  "key15": "371fp5kj86JWtUBpp8rVoGfANHLugwo3JKW24JAmLqfWLeirRXK5947KBakFx5rWyLLnVHR5WrCFxygT56yYPmXX",
  "key16": "469A9Ai84CExkMprDD4g2w8scXNsbfWSYwquQSYJmevJMTfuVQcZYEZJvvYmVGwFF3rCzE82EQVnQBD4bNvPDmRY",
  "key17": "2J7cFtPKHdmF9FyLL9uUYVjaBroMixiey26e4rCfxaNpdeoocN9DXEMXioYVsByaoxuutpHfxZEHZw5qSeLt1ovL",
  "key18": "aPr2CsWNibtNBCD4Hut7C5ZjHKjqdfrxHrGAZgFnedB97PDRjwwk2JvcpGgzyrC1a7jGzdQMdAyPpfFvKUGJ2Ze",
  "key19": "4SABdFPLFe2LAQrdgSgjz137kRXVVkuqjYeUGGYBxkHLQzp9Cti1UteKFbZhif4sxYeNFbfkY5GxCpByZMbSVBbo",
  "key20": "y5DdZy4DjAURQHA2Acb1turp1DdZpjyUY887q6hD6eYECXt1r7VJDfEDVVp3CzLtzWyJiSE5A2u9oWJT1KD4pkK",
  "key21": "2t3f6mognxymKsJ9G8DKcUKpZkBq3PouZFonzAKLM3D87NKuzhb7mqkj9HZaxPATrBMWF37Sz2d1uaQu4cxiDbF6",
  "key22": "2Rork4moPqnp9jWD3VsbbcpPiLxvL9FypKnnsyFZxX6Mxs7uGiFgFmosVMFWmdxkc5yf6NyGfTAwhbyPx2kyGd6v",
  "key23": "42ZAQHFzKqN1XLzGP3EgNyZQcpgYzFRGwYRYxj8wnGReG7UUP3HZStLbJSpFnZKbenAsk9hR9ngMp6ohHzSUN2dE",
  "key24": "3qdsD217Ex69mKYqE7CTtkrdVSgABLDE4zkzyQeBy6A5xgXcAPskquSDtmADr6CDjwXirxAJeB3N9NsCZ7Ahax7Z",
  "key25": "2QgkvNRtSE4EbZAAhbaBzE6TAUhqmLZStxFtanN9dpqDbfGjsumUb9pWiozBrBEoPVufNuhcN2aJ3raVA853kzN4",
  "key26": "3n6QQg3La6W3Xfb89wSXe7K7xMx4rfLMvMMw8hSu1gwVkjBm8ez9JgdQUefRab5t99Fbb58gkMt2aLNxd4wGyiwY",
  "key27": "64gd9SAqd7afb9QYaodWwjrFynpVHkqSXyRbvdvpNb2br5dJpYakUFkKzTgAWFzP6JPkdjZPg8BsnxyrZwHXVnpm"
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
