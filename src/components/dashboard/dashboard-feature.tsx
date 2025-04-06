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
    "51BZvRfKgRvWsDu4iYh7ghpA5STpevn2iXvdLEhxerP7mfzfegaHx4rXEypUEcVtR6YQwBBMvxAMEpRdmATe7xpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yTKcWnZzrG6snRP7pssrUZ3pvjkCRwhmjyXBYQa3XLKbu2DsytUgs3PnzuaYYiaE1ubsyBiwGKbSsfZCrMvFsW",
  "key1": "2eTp6DxZzgX1vMH7DS8ACDMwUA331YbLQTWqbVS486s8mRA3DKycKHw6rfmbADZ1g59AwwceAjfjUSzifEto8w1e",
  "key2": "vz5reXRxMMRrE2opuPb81zC5VNt9iUkDVRtxTNzN43cuyGZD6a49c2WCJYqiwMD4Z7MwPS5XNwB317pqdHCM7Ts",
  "key3": "R93JJz7eBUaZiXmVjTz1etFyM3jh9XNARM3rt4yriomtfrmF9qGLUNfGnepkKkGLY31UeMkY1arYw3oo4rsWv7P",
  "key4": "5X1afVmMpTfv4zKD1QzZZFYYSoW51kgf2iCaXWntXALKm3tUr63FerpVzzoU8DuYTGpySyRmGVbawDzkM9AsfnFo",
  "key5": "2QUkMpXBPzc9gqN8rKAgzj7HYG7BfTnD6A4X9K2uYwyiNpK3wLuunYNgMEKKBGf3myj1YUDkDdUj4QCAZCVNMz91",
  "key6": "4KenW3q9x3Xsb7tBkpQ2JGdVxZqCXYoX87eiBVTUzkfRwYxjcqczfTbzHjdRJzZAunfMZHU2Jx3QcHo2JqVxjgaR",
  "key7": "2KjGZVsZpLc7xhL4sKcv85DxmUQKiCs58Tr3x7GtaQFcb8m6MFkx5qya9JEbzgSdjej6c6iyVQjhjB4goVGXiwHi",
  "key8": "JLTN4pRqppi2t7uGTHgEC5i8rVFq8EPYBVTNxUnqmrioipLuvQPS7GTGawJvnBx8XVD3mkMaHatHfhSVv3cn61G",
  "key9": "QMgGzNJYmB8H2mxTM2icdGQfqnJYseiavPzrtsBZatPB4P4GfLb1edeJFuwguV7Ja6QZKftAjnbzyW1VtSPRqmj",
  "key10": "3AQwhqbxwJKNraZTfG4LPz6G3ukUHKLopGHT5afXeswhNk4k4ZNvb9g2XcG8ssgSDhwVRxxJHxnq2BSffrMbzRuS",
  "key11": "5sWRQ8DzUeGZ81ptK9Fi94RfK19FpfLQzgvUXp5vMA27feZ4Hz85SBSBLcGDVTTYmsqpg1ALSzcJfS5DqnpvS75d",
  "key12": "5gENcfHHbiAnzceYtwDHE61xBqciJK2tZcjujtcP2HX3Fvgaz5gWNtV848e6uhdAX35gCSMa7Qkf3WeA2ZVR6Szo",
  "key13": "2H6tgCouRfT4VPxxf6qS7BTeNw14y6KWFDtTggXbamaaCjFk1mmvsScF1wqgedUXJK37ST6PQ6FFXoaoRBz39eKC",
  "key14": "5py5Q8BjeoSxukTUL8hhSFy17Rbx4tYAst2k2kWo6JsAT4gZBJUzdZw2dZnRzPACGJD8RziCHf5HZQoRHtuuCrai",
  "key15": "4qiMvPj45qqifErwckubuXm53KGcgzgzSQ7oxNWR3rAgLUAbQBq7H63NH9MKfpKYLBAjwLtTXVjdyBPTEZSbpBMz",
  "key16": "X2qoj34h1LBu4SYchtGvaCdVu1ytuANAgojZEuDvvNHAt8G3HjDQFKPtnQFTxNh8sfv5ymuygxNEAizaJP76fVG",
  "key17": "HThByb6vjeAJ6ReGdBEGJkxXAqmwKPAx6WcTre2dhYkC1EEPDodxywJTbNF5k1iwQRT2zUQSVd4ksSPewGootFe",
  "key18": "xGZvUJfPJNMFtGcqXEYCxaHNGEQKpTKF4ajU1Ze2SxX6MrwqoKaAx2LbNGbXByG1zEeXKcVNkvvgG9aoRLunF4w",
  "key19": "54L92rJg3bAwQkSfs5JLgwkEBemknAsgVEx5nNe3M4Zz3LGNzFNa7iXvka4SGULqZoooSaNMoAA1WBwxqeo2WPKA",
  "key20": "4e4nL8S7ogiBXpKU8A83N4JtcQxe3tN9y8L3YQv56XixAjsHugg3q1pCL68cJMZxKiZAWoSarAvkBnonL56zyAfj",
  "key21": "5oM63nm6FeLNpE7xLbcZ7jR1umuSZLWtouoKotDTtZfaFbLx7ctrcDAB1q2gbq4eEH2MojTy1jDbuU9u4g6ChiRs",
  "key22": "qfbzdCHRfE41ZnTePgTFRBRYs1y7PDzznRXRyJzpk2d8sGq9Jn3snAFvymCKoeqHM8rdEy8Z6B8d4Uh5Ukx6SEX",
  "key23": "5LJSekJUnGg3ET5g6PzLY4gvx33cLB7VwEbv8pZSEioNnfEYnf9wArAJC1QP11rEfqeDq7ZhhVfs1CPgfBYLcRCD",
  "key24": "217eLyCW36EGAauxKJ7i3P81LEqmbBM95FkP7NCg4AWrDK7EcGAu7gYRWYsnW3jVNgcBCDyrxZENifBhTpuzCG9q",
  "key25": "3NymkuvD4mNi1E48u5eGvbLRZ8aQCCEUK8GH7vVvSxgiWsweAYBkFjArsoY8DDbLapBRFtvpF2L8922UoLVQrJwP",
  "key26": "2UaHm7DDQHVuWXf8W8d6s2qJKQ1GrhJNj9KiNeYbFZnz6fYuNjBfNfi186h41STBBaourNmYoKpR6AgbWCrFKdTM",
  "key27": "3RWGGmRHQhf38wNYdHV57C79t4W14mwPUWkcVYigUMUGrCgWW4NUodyKXTeRJQhRUKmoXD13wM76SbB9mNtknv7z",
  "key28": "2zPfCf8yzP1Xxu96QLhkfiLU2C7BkyzPGEpLT5jenEQAJHTysaKXy9junGfnVCdihCAxbcZUweKBQ1HqXy8dqr6b",
  "key29": "67UbqVXyf3Do57f9NiKcxRCfV8gaxiUEgpwxw6CHgXraV9af7hE38GBDr6BG5tnsdbU247dcnr53n4b8bgQKJbPr",
  "key30": "3jCMEpH9CWN864qKemo6XPHxaRaN7tD28X6cJchkYgAXaKSqUHtiSnaxSi2cy6Ls7pkmZF7UM3PpEyue6SSPussx",
  "key31": "5gLmBAnE4yK2saDx5oKGuEusMDEXA6JqTtsgPjtp19Sc1VVB7tNoEqCSKk5BKvuFYbRyg3ZMZLpsrXoFZwHaJZ4Q"
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
