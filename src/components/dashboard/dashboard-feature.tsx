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
    "4pkEpXUgZECJDcVpAWjkend3faqH1oAACcKShmaApY7p4qVCSYMFKU2XDzGmFedNcruKY6AENE7kvaLxVTbAPWVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ks2RY7CEPsUB9RwrpPY5XoTK2kzkE4aUas5jmovgKdrX5pptEdLZrroHmArSqNE3URc4krQAv7j54qb5Adshmhj",
  "key1": "5aiLkba37y2SLgALL148b2n96sGb2eKngkhvcauVac35Maw216W5KW2GTyBmjswnw7hjkAga8MueFruCJWQsS6fG",
  "key2": "2fxSKPvMosjmoppPbHPJHqkpfZHYDkpPZKbnHLoAkhauWAbLzSnULWS7jTpSLBnAUPt9khk9rzrC92GvRmieL1DR",
  "key3": "3SkFGjarQx7gFRHAewCyD3KVdn9kj91bRRBP8n1iyh87SzXtTdAm5S66fC1j1MviQRntibEmTWLRqQkPKdjmySyQ",
  "key4": "5M1vqJCebPapNP3GwBZe3YUKkDLkp3FxGUkaLtAK7q7x4LWhmu5opEGwfyWZxYR4a8UqZxS7aHUBJry8eka425Ht",
  "key5": "3Y3CzRGVPUszh8JR8CtVLRfiuns84iMRkwpDfEQCX8QHkBY8vhabgkxw64JFybQTsZazzkkCZtv8q3C2Kf1Jakxa",
  "key6": "3jFbK1aLLtbLPYdA3cH8Lwro4Yp8CF2k7MUfTAT6yu5ptdiySDKvfm2ScYHUS7jxr5ioepqX7hKZiVg9nDURLR8t",
  "key7": "4MuDV2x9BXn933z4eHsGLVaxHrpiLf7YCWNdNVzb76G1CjF9xdazVM7ogRnH25rNbCinAUaWXSZgzSEVqRFxfr4C",
  "key8": "4mCyiMjDxbd9SzbSPwgmmapYEAuEnd3Q6F34B6LMzqAy7GAxEWWioic9fUFqC8WNmxCrBZdvRLCRxuoyDLWC8JSG",
  "key9": "3XTLs5BKrZ3QAMrqwQBVjXiszBbZfa9dNmiatvN2kmz7Ho4CZoucHUNrVNUYYV4mhRQsFDpmu2sw5FwKdgfvEm3V",
  "key10": "5gaNQj4nKp15K4DsBw8KWuqLGKsD4nR9RB35u6tZ1wQEbcw1QsEqnCULTnzzfT9FwxxqHQNcUJqk6Y2wXRuBX2Bm",
  "key11": "4MyoHV5Jfj6S3ZatbZ5GmPmdUnQTq1Bw1zg1FCCJBrSQGx5BpWnakPSvSvJ1L8ui9buwpNxYhZeqJMeM8Fm4RCTU",
  "key12": "4HhhLbJZXVYajQpGoyAHfKcBdNmMzKwHZncSt8rKSMsNJqghZUCVgAgWuNuCzHE2yqNqgWmtH24PR9izztD9GoNU",
  "key13": "4k3mSyh4dP8UqaBW2zNTx9U4dPPW6nKd2DMPAvKizaUNG29xBsQYbygBvWX4f7sZyzvJYMzXTjj7zBRT8Bjuu3W3",
  "key14": "vFKuBn1bmLYjyuvc928zRCABjhYkp9X235Z9r9DTYa7bKWicqP8v74FBA3GRNHh6EbbMB53NcAKjPo3xcaN3WLs",
  "key15": "43kKXCVg2gapMxQX5kMyAFFwzjcEvokd6odGgM6uNWe68XdDDtn6pNLzU2RZeCdZe7cRppQ2GHBt5TCwetBFpR8J",
  "key16": "2gwtX9Q1Hmu6Abxy55FHT6G7BkbVXW1zSxnc5VHKg3csPc1hpYv8VfMCshYGSdxLHfspaJ6W8xSke1Wb7ReXn74z",
  "key17": "4crQgJh5KuSZkcd6DtbsDmAVpQUr64v7T7ayXfXMUYWQ6yrMeu1MV8Ro96wfgWCifugWJhxQ9qf4bm2PpPVPDj5F",
  "key18": "3qieafxnwtdLd9gQGDCsihX2CYeTrPz5pm1TS2DWWpqnPar4eQfa8KjLJxdSvb3SX4BjPXuNVmnBWmrmGYuUuU1j",
  "key19": "22vVGJCeuZN9LEuRvvcjJC1fwwg8KJuRuy71vm5TiAj8Tzn913ozfggpXvECaJet3qwmqV6GE6iZbG9TwjBGa1JV",
  "key20": "4jByzoVfYf5rt4aPrvx7kEptRu4RfngHJ84DV7A3z78g37xtbfZSesk6CJJtcskcdNAXinUbfGGi9DzuRvWzfVhd",
  "key21": "5DixedBhEFjMyVC5PSczNBQyTgR2QMza5zSifhnKCRtj3X54CZfmQe7LAHv8QxdWdgkd99rMrCp1eR5PQ1ASe5ok",
  "key22": "5PTPfysp61EByKmzVmVKBqiMwc7SR1zZqjUtc3mTy7mf8npSNp5JK98HHP4HETprVG9ywoom8n5PJmj5rmL6xz3U",
  "key23": "3DX65z5tnytYyNNi2gf8W7RxzJmuXFt5uUES4yJ4Z7DzFAYCFkfrBC9g9RnnG6oa8Fc3JZuKceZzKTezAdzna7Bz",
  "key24": "5MsjF9U2tpdksQDecsj1to53xPJPrNVxWzwr9RtujyJzByqjvr7eAgkTY1iY7k4SsKzc9rwqpMNf6kHRubXGDVhR",
  "key25": "5vSwqqnBk6Fg33331SiH4SZXywkENkkavJiqM9z46NfFhNd19rMaUaBoWqtbVtr18NPYQyvx4hEkRSTN2MAedPd6",
  "key26": "eNHsUatEMRQH66y2DhrCXidsXzM92eyAqQHK4xFvShB2UHi36xTTnAYs9xFDpa3W6ZUQdJnag7s2ZUCNhDpNb9b",
  "key27": "L13bht6cCsPae6BRDRvy7oGD7oXmqVbVDQcExMXsjvjzMAbZXRifVa99JtN9bKMRaApiFYhTizeNzsoMTDsuort",
  "key28": "5HXUToYgxMjYUpTnunL33Pb7NhnZRh4oUVKKupdMwTRevJcbs8riQyZG9GzgYoDqsvphcjSG8ye7VwWoLa7CJHt4",
  "key29": "F3gSDpe2sUKHQ7K7LpVUprUCZ5DpMDSiQHvS76NHn2GQqRcbAYf7CrEbGNKcBPDufruZZUYCvVwSE7dMi2uQqWx",
  "key30": "4wfCyZVPBkhcKRqKrV3AekPx51RtjwdEM4qsw3znPSDzHsYzMZYaAoE5LHFmpmW5a3PUUwc2a4FePViBUxKZE5FQ",
  "key31": "vc6pqRzkP62K4fYXWGZ5wdQdSMHjZFaVZyKuavyS6kZCsRXeHn2ZQZRGr3XZNL1esLVU6FtkcFZv5RJZdXwX33d",
  "key32": "3oGJkBH6L9aBMMBstmoQvx4mEr8cEnXT2FmcybQVEQXZCGZbxWga44Nui7fAC7c3MHYjV8JP7BJhtSjNNYf8gDKM",
  "key33": "ZGmooBmmDJr98wjJpVqwMUkDJLdtLzSNid2e4ycRx8XGDDRw1QS9U4vkyJqvXsmKzzcy6gSiq17yAzEZEnLrFBk",
  "key34": "3PX9dm5cM4o7T2fNxf9nP3HvBCv4w4rmodJjUMs83hgVjjfydjNupMwGXCWcjGVMA6ec7oGixtCYUgKNAtUaEFkH",
  "key35": "2VArCkmqdsPE1mBQrcET8HkYmrsPudtZAnQq6bNizEWP2rnLzgEynfYgnsU6BdMbC9E6ejyc7Un26db6pUNbLWyd",
  "key36": "59ezHD8BdfDqve49H27ot8PfSQZuhV7tK7VrEXUwnmYYuXHBUbpXiuJDH4tsJQdRv3tcfkJS1nx9bF3hpGhnmY2y",
  "key37": "4LJmPBEeNt8G9GHGPFftPYHhuiwV2urnrwxBqgSKHUgSC85GdgvgPGMguov5sjRVzTKUvGYULk5GEvra2FvmzkuD",
  "key38": "5JWPTpAiSMnaWzf4DGx2ZbrExpoZfvrGxj3RdNHMNwV9Pf3ffqz74QSKeAPJuq4G8KpowCEeax8tCrrqEN6zPRwW",
  "key39": "VASAyTDWw1vHEmnhKUBG1bTYfRRKBeEAy7B5Wu6Mzpmzct1dNLtUZac4npiW5cKFCsa2yQdBmqoqDpM7VkCvvxG"
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
