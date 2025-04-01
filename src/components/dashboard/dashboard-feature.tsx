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
    "5WmbvxLxJzwkLwEkF6NqjvMpvSM5bwivcdFrX4SLrjEq5AUZRM3gMYNvMJg5JDnoxwYR66QNuxJE3JkeNULLrumN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nj9vhwjAkeueLcvUyGPYoVrma64S75tC7V2Up81MNAoeHCz1NAhABYEhAi6Z2EveRUHuqxSZM26xUemqNnw3Spe",
  "key1": "5qCJGgn8zfx7xmg4mdXX4NtxpPrQr8yZhnMoDBnkGzxfoQQ9nH8eRhk71DjAsdk8H3UrZsACxxq8Dn6TG4XUELEw",
  "key2": "29R5uTSoDmD16fmAVfNC2sDnhuCbqvEF9GR6iQkBbUoYfMQQyUWNTPndBwinmPQWz2rneiZA9hP13aHj8tWo7Nyr",
  "key3": "TwqtejsfpY7aPfh7uvnEssYVvodJACA9qtKDC69YTC4og97dzVY8BeYQpzHwZP8rDnpznm5cV3ZVKHyxFaggkz2",
  "key4": "5L8Mj8ZpCCzaQcCEFX3aFMZRcMcubyuJAQEWTNjtVBafcsMBvYdYghyzKD21BD8qTFeNv8YbF5ELyYqRUEMr5ys8",
  "key5": "4oZaoWLivDELHUs5VQVXfSPjzDhh6Zo8t8e53ZAyDwkTv1k1Bcn42ppa7GV5UmkkESVeEE2YUTiwNfX9gC7EifY4",
  "key6": "52iyFg2FghLML6j7jLsgfdT1HieU6DqQTe1X6xkFr3JahDivnSBin4HfrFkswpRLGM7ANqWaqSLw3CkSmSKofZMm",
  "key7": "2byKAdprpYXd5kLrh9izu8Qdmcs5DMCuhQvg8CiPmne9JLA66V4NkMTVJLxhwsdfXNq9h9U9othHKBimv5ZTbdQi",
  "key8": "2A4ak2uDiHMyNnqNoZBN7fxAxhi4PXqkLnS8734RzgQ2y4dqQAiLH2qgKHQB27cnBYo2pMxs2sMsxWV2o9yDtyfV",
  "key9": "5e9beP2PMBDBJ2qKi8BJg67JejZJcdypxxEBKMtHuSR19ASq9LxL38YeQsmKkZSGsTCUxQ8idaQvEGgewex55fpi",
  "key10": "2wXkknn4rBnARMmBqj5UNZaeXtksa3MHMyLUoSN1GQJCmtViYfHTzQqZoWn5DQkJtZteZoGbeGuf8eQ5SSUMZeTa",
  "key11": "2MEw2dsk6xsTFoUdZMhvQ9kMbU8CBZ7Mn882Pkk5yFi4TEuvgtc1pZ1CkEshdvBeaarMGNdBJDZCWj883CXYr9t9",
  "key12": "3ALEa1Qe8nrdng5meZFjzM8Rp3VX5e4vh4x4jGxr7hhYDmtyc6j9a1TPzqmdyF7raAg1MywBmBfuptPih6z3tzG",
  "key13": "dHqkJ1qWrtXZhUng2PkSP1iYk2QN4oPngHEmMcZgEtX1a3VNDim8xvC6wRCP16sobLmKhMwxK5hvYTS3g2jCAp7",
  "key14": "5RbsUTfyAog28tuXbactk3Vx9xK9GaqUmecjb11v5X9cDmEiKRgM2hUu56HMPN315KbDbrC1tFEec33wv1KUPwaU",
  "key15": "4pxJo9Ayu9ueHTx1sC5whRf7ptrdgHsmkvtFgfVcYac8nTJZsMkgwYnLqB5LzP6EUnkRb8CVT2choyXet9x2poSk",
  "key16": "3Mq7q4Ftoiao9PpiKdCRbj1Gj6DJD2FQdqUvhV1KsgHNdRWTzBUyPhhYL7DSaJ7XcGKNzfhgMQuhy4x2bghh45t8",
  "key17": "3Pf41CpN43bv27XZRQVX7Erk3bJJDXFvp5VpQwWWeWJtu9snaU61U73HhHQXT1NpZzqPHFPH6CDPNAzE7RwjN8H6",
  "key18": "4bHM6tyj6cmuYegsYFfkCrKw5L9h4TvTGfSpDjH7tA1ww3aRwWBJyFT8SZVd8rzu7p8cpXM8Goo8RajKbezPUHca",
  "key19": "2GZ4QfCFkvQqdx2a7F3FYKw25gHyJUPqDhbL4BuTmYSaJYeE8gXa7c8V6WmsFd73bRg1EcFt61sQLFSN15QqXGe5",
  "key20": "3e21hLhEbJ591sLx1ysssgUebwJoB2x7bBLH7MusAsPzcSY4cYwNCTwjxsRGvXutARcSmYfg6xLr5ZiXvccYBYHw",
  "key21": "2BvQCUC9Y9YhTtd1UnNzppuWDSmLKC2RYqYaGn3Y4rn67gvfgaDWvbUDyXpnJdXbiJiW6EMeJ3Qv5ZWY2wFWxYiR",
  "key22": "4UkDsPYF13buaBNsk1ejK3qYXLF3uMbhYojML1c5vQJYhWr1Vc4T4XgkKaE4kPdV5bvA3KdRDnwmsc146GgW8xQM",
  "key23": "2piChojYS2gZdeS6Jok9XTdvSvkRNbpUkHqVxQUGv36xF5TXVR5MMFqxTfoCPXZ3FVTYwajn1uHP3ktXgi219MBY",
  "key24": "5WzRnL6bQEPYCPjjdfhsg5niAjMAV16RTtYQVZnbYvxPEQKMnc7zsYydvAbJji1dwNYG4bmkzKhMJkpxymEy5Ly7",
  "key25": "3Tu4Qpeuiniia3DjZsWPkUsUYoJYKARQDzuSAKAY1WuNvSZoQpyzHsuFCFmNX8C6B7QuWkyj7HLQquwTGtN8X9TA",
  "key26": "3KUGtFXzj7wEdiKQxYPiipg4JhRYkUkCtcUSytvcGRXeDJ69wNEwv2XQ1tJ4C8VSZegkw2ddmJ7Gifnbp2PJM2Rp",
  "key27": "34YUgFN1YCx9RznWftizikbYYDytR1wkyhg8pcpaFWkDd1fS1kizuMLVruzJNyUnNfTrjLJAmNQTxJ1SwrKtUXyz",
  "key28": "61Uq11GgnNPwFFXwQ2fu7yVKgQzmtpUve4poMwePtzrfW9WFDkTDmtu6cv9GoRhLGSaWtbCQCC31CN6so8CU8bun",
  "key29": "Rz88qv5zGF5CXf5DyTwBeqCQsLqK4pFb1dCRZShXsxi4GijUukeprvNHNLDqsoCVa5nJzVYir6t6SWJ7Khm9JmZ",
  "key30": "22SHLCct5HvHsKLq1cUz11e8Cmx4muHSHZyRhnPqMxvJ6vqLkwd6KJJFAFQCbRhBvfJmboqBaqMRgxRtiHdY4h4f",
  "key31": "hoQtYeMB2N423W1r68kfn6QvHqaoWKB2dUCKaDxyicQzEdXNMW32gwvKUYUf5neewkm5qVRJ7mAWNkN6v4AKtKG",
  "key32": "2dwnhxw1gsN4WcJyDneAj1zEaPs6tErwGmHEW4qKVm7aJvi6SnHWv3tqTFkfvwFGGVGoAWbxg5CUnEWkFfvJJ2K4",
  "key33": "3J3Nb4j87AvNSA4Dbq4TwZVTZzRPog1FX2v1AGdNyFGwMRXpwofAka9iFu41o2wy7nXFJsk2dcDcnDHsxYqpxsA2",
  "key34": "4t5E7CtdTqjEzWA5TeGj3UBu9AZrJ8Csq3Cp362oJghuuceGhx55iiTp6CPcQxs7nJNsWHFAzVQScyYKm6ZTAGgF",
  "key35": "4nKgbeTdAMtWV8P4zXvVzvKwzZtkqBJJzXGtP5jr7tjzUYq1tyPxvs7cToG2WR1ZE5CzjGbRVaZx74EkWjioZqnx",
  "key36": "5ML3ZzD9n3LMiNpbMM3s3yN1hpmRfJbjsJQkYFo4eS3srxnkozEa6JmUPCwTSUfdrbJZhnZr6QBRLVgrzfMERFbL",
  "key37": "2pgUpcP6ToxnzWYH8sDTL1VrwmU7TvQysy4PajtKerrUtUSXAGckqQt58sFjR8PLPKGp6ZVM33L2ekHUoDx8PNvK",
  "key38": "4c2yVUEV2F2z5ve8UtTaDjowXFDCu6ipa1Tv9DLWfRZuTxu38d2AL1zQZh4HShxPZaYVXNd8wvbHFK6HHTabrjvV",
  "key39": "3Rjd7SCavyDUJRk8j8hZu8cAFVyqVGKXQMVGwBYskEoc4GuXZCZGYysKwZZqG3vPbNzQNVQ9uM1wk8ZYw2tMTnu4",
  "key40": "2T5DK3dfYUhy7PNsaxpg54juxam3sami52xgu5FL5cYxtXLM3PNzHWooBs17bY1FPruGzDgCNs2J3TTaSnFkMX7r",
  "key41": "4RB1ZqWwqCm7TDggNW6bsvH7uNNtD3gcK6KZMdMZrxdzD7DAMjkDDxDesUc2mUXGwka4T6jBUNEohCVb9M3cLiQV",
  "key42": "3zgiw326o1XqphoF38d6NXKzBcppmTC9XCE82j6YATn7WS9LTCfoFdjGe5rhJ8EyzwYhpPbm9ucGgJMfLxMTuF3P",
  "key43": "2yiDSX8zDbdZb69L8ey59yrPqphpjdJ1hhopQs2Vq4mzWoCZ7hPYWL5X5sCap1SmSQb3ioJkenQNLk2QoxxVdsXf",
  "key44": "243mYq6B6AS2btjBkUvt9c5SGTjByqAhvjWNNL1JNS8MRjwrGm46EqujvAjqGbiWPSM9kQSM8UCTW17FgK2mspRG"
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
