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
    "iADseLEo3wopnGV5afos8EswLfCKpCrhMaSuVHc9N4xP5iSqNpkzqyjfpWWtNrdUwE5629Wavvi1zjEJXnLyFST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gf2ZBSaYhH83aRuXikxGuiF9do4B8CUVqqky65mpd3m3SRwpi423CGUfmdG5nh7xxzNEDefzcYmujH1NMqoJQXY",
  "key1": "32yjzd6YR5nYvkLiZPKjFG7cY6ABK9NLsmoBwrQr2GMnRicnsRmLByFHcVGDYxsyrZyf1QHnUHxGXgu4693sSd19",
  "key2": "5q1pjDXaVTxKLiNcPHVx5xP7kXKLP8HB5qbUekd6xDhHe6N3d2akQfBUfvdxDNvY3WddGWTfsgN6GQFmYQVDuX48",
  "key3": "22KNucXVxzJV9gtAsQffegGZmgi4mFz2k6dpZPyrgecTyV157VhtLzM23HsF2SZRBNbhEHQSyQqEDf1UL2i6g7bs",
  "key4": "62y5DRYuBBea1KPsEWjBijWbHaSo6NsMXcfYhLCcDawe2ECk5BbBXfZeWfDF2bwmbPX9BevMYLaooHGwYgnvPFpE",
  "key5": "5iUv4iHAUouTiiSHwNVAzDZX4w1EfEM5tRMEAv8vRxdvL1cePc2Nev9ydVLxSC5jQ8euncrWXFZcqzk5FiNpsnnC",
  "key6": "3mZEBeBsWwgxCaX6wikdNUhZdcNPETMnuh9i8cw2M5DrX1Gm1YDAyTnQuWhz9KqJYLvNZACx3ctsWw6nyQcxYY5x",
  "key7": "xzxNAuWD6bstZgkXpCXAxquRyaCxhCBwrG47h69ogqPfAvyS5FgXrRmwg46vb4pmaGYZYR2KQ8JqUy6xH6vLHYJ",
  "key8": "4hAhiZeh1t6Xbg6tZizcUsYfTYXdkQW21bRUPiYG54ME7CMtwWawx2RjhCJ5rRGhR5r2auN3SKeLY4vis3yWq7dU",
  "key9": "2SQSFMfyPy3kM49WavXb4GpkXwhGxA4bhkYivDepoZjDFP7qWKTFsk6UmjrRLgW8PwYdNKbtsGVx1L4XAkAZk1SR",
  "key10": "K2zkcnFPJttafhY8KWJNvGF3ANvKiYpxC7JJN9S1UkLUmqnGiHWMPcC8YxFUe7x2C5Nn84GH8xko6bJ2VYNWMNh",
  "key11": "2BtwZS9xnvvmjitWF3BRiAfqbRoo75XJ64cM6u98gA5ZLP9PLg8i3ZN2KZEipe8Exs2S1s1SvXQwk2sH5pqcNdqj",
  "key12": "4X7JYSBCfiCoQmQqLuYXSP6RfENti5z9CENUhq1fXNHWnoE7jHaso6zSbSyaoE22fW1KzfW24FBHvDbvXHYs7C9t",
  "key13": "58TKJ78hoBjV2x3CWjz4gW8MYaAmXgHtMV1GJiTUcDrQkTgQZc5e2W25FwnPr7FWe3p5fJ5VAaPVwGTk3S4VSSw3",
  "key14": "2eftjid9WX94BjFRZMi9JGs91ML7UxxH3dKc8y23hNhgxzyWTxY5oHtWLQkyLKsVDxAutJnLDFm6V8DYYdgV47xX",
  "key15": "9vBP48r4eH5uoZetiPDBz1pydhn7dVQMNwaxRJE8j7kx15omU95MZSch7cK11Vsz392r7yJB1mYbSR64nCUFBA8",
  "key16": "4aK197hkS1s2yDWEgzh5hMmRfi2BHGYKXCRjm5kpa6GvMDLMab4n5SwTmQNPYiR7TrLPFKnrAiJFDmyoo84DGpF5",
  "key17": "dxh9QRU2HREhmnSomFZCz7sowBkQKLuCqTJSqEJxwQe5EarZZq1xzVa7Ju8AwQvs7F7NeaoiJh31FiVairW2zoY",
  "key18": "3XoLpdSVMsxJRjLq2ejgGi4NvQ9AYkHTsQAGwyxWX742g83pMaHCXTcceAsiGCdRaKhUtQRmdmhHRiKKaZH7hoTU",
  "key19": "5jxpg7nmr4w9LDhzi5S8hXFdXd5Px7vdjjDPTsUdYowwtizPfW6ru4v2SKkx2axgjXU5ctDYVwNCTgjbMMUXG7kT",
  "key20": "26YUtS2jky1CjPz8y1yyx9m97XS5gqC4w1R4MNjcNUkjG7TThPPvatQudGLZsU6GKgZjHZSeRmW6mWZiYsjLZ8He",
  "key21": "4j7RmACVQr64J9kPqL8ZTPt7XvToKA9kWgDNRxqGLQfFEuMk9KnxuGRBdiHY3kTrwuzSvezyHoBwrSfnFKvcMCX1",
  "key22": "3Y2n3pMuB9TosGZChXsfk3WQPJ9vHSj1A9quQKxcz8wvaGCdTtiby8kdsSs2htFnBcLG2h3915L5iMJeo2yhFqSR",
  "key23": "2BztbHgV23NnExHMGnvGBhAzSZHDcxbxD18aTaQbLQgUPWfWxYic8U5N4Gs4MA6o9pydSewESnqDX9mRihyETuPD",
  "key24": "4MXhHggrkGvEEu2RrC8aY6Lnzd6DQVJhyKAXcgqM1ZMvJ6f9W3SaKyzHbWpMQajMEUUZyjiT2L2cdvDykm4KTz6N",
  "key25": "2Py2BTCCYX1731SFFVAgmpx8ysBbA5dgbFfAU13t6R23fJgDY6g6s92AGoJpYWS4i9jcMheafLT5cdvjBpcd27xy",
  "key26": "4YvmSkLpunivntPWAFVzaG2CcNXxvDAEvyNfazB4ASPFPkuzwSK7wimEi1SfcZwZiEUiwqbd4UQdyzgo1kziZSC3",
  "key27": "62a4FPWQXeKa67hqUY2fySKNfAbCLZ7JsuvcPqzGJch8vNBkbn3nN37JYcFFdydjM1oZGpvpCwdB7d6BRiJxhvk9",
  "key28": "362m3hvcdowDZDJcRwpz3z3NpXKdpF75TSP7L9UniB581NP39NPc4UzpG3hKJGrfaBdBvF5rQjM8RGzefmLGn1DS",
  "key29": "CPcLAeEUvs7mGRPomgAKdSHXAMmzkQv8zJ6hybybXkkj9k1t94BU4n5kgqKXRTKdbH2hQLgGFSebR9UGZR8V5FX",
  "key30": "5oBwYD8ohzBdPSWdNL3WJXvBDLP8KGWanjBbEqVUFRQG5GNMH11WyW7prL36cAgoi3NUv4iDotiSS1HAaKJiQ1SS",
  "key31": "2h61iumbC7R1U2cGyCCt9dFUtqTwrpjPKDJZbWa69x5vmZJzbq8cbvTRsPDiVw1DyJMfF7B8Xx37EW1Tt5Loxjqq"
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
