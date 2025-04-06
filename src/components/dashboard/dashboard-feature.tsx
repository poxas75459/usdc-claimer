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
    "qw8cXQDNeKMQ1dtxK8iJxMX1bhhro12PVjpqTRC6DZTH6Fgy2aVKZirLAwSULsPKRf59TWNeSCMoPaob4bJrTVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLskL2wrfA6sJVv8BGhjoqU69egEdjy495WmWwgANbqiYH7kNMvibvikqcqzQT7PRSbhNv7DvsRmnZDwvtJNJH5",
  "key1": "4DCvX7RLUdem2hU6t8Wsy358fXHeviKAEKjGdkkNFYpT6rntvwz7oVukGDGh7T8JSBRjX8BccPGTfhWwm91o79qz",
  "key2": "5RaSEtBWuKDhjudvKuRL9y3Qo5hrwR716dhuwmYLxJEyvnNxMLqrfYjbTE5Vj1RhZ6Xt3yiSuUE9KQnjz7UjDVG9",
  "key3": "2EAohcZwNkjnAFFK8wmYx7q35xkxpFwxhpURTrgBLn1jXU6j9RwLroMfDm4CqyV4GzSDLgs3NjMVG2wXa8DFBgxm",
  "key4": "52dfMFSGYiu3Y26BfkDNLA7tstiRX3KqFG7Kh1VJ6asNN8kNnrAGH3fiJ3edZrAfR4yehmJazwQ9yQU1cRCA7MEp",
  "key5": "3tGuG7Qw3jo9xfxM1XAQo9yZMUJh721k9VeWruHDBRzj2EJyGgRQ2DyJiG1WzguRuYH17RZbjvenjmBgQEeaBRZF",
  "key6": "2X31Sj7V3q2BUM44HbJWbCmcxBSAUiH8zf9b2va165FCrM3vwEvuzwajDHFZ4h1oC4Q9LJfwszCFg94FANxyHhQx",
  "key7": "3MBvo4rxTsAn1sJMGYfR9wxN93CcmXt7Pzbfqmx4TgjdsQ1yRaJ75PQpu8XWjqs2MvX9XYFh3Tzxm1MnudMtfcfB",
  "key8": "4st6YaYiZa18AAWio7e5hAjJpK4vvdzyohr994anMfKV56ku1FvzULh6rU73HnALJaYUom3M1iPsd457UCbrzkJM",
  "key9": "2NVXRviLHvh2V9z3pyiJJd7xQYsxjVuQ7JXvRyAiZE9nufr2D3zSJx3wbqugkBaHfVgmHeaqzNBXPmRMfLHc6GFR",
  "key10": "3NBBHujUSYNhcidnsXhjmTx2f7Z8kEBQa3dfcyjYcqgQjWp9BNJuCDJ6aXz57oZiSYBgGtchuucYFP4JiNC7S1Pd",
  "key11": "5jfooNTKfxXWGcEKsAGMr9tMSDNzcFPhEcbyjLtTdp3arYEwtXjCJbkt8hZ5CTqfvGjyhj339Sg3aocNrfW8xBnD",
  "key12": "5YkbPRZk4ruK2N7t7KjrW4YDeDbGB42gNUPpGg3BcyHjmgeYMZvfVFRQDDtSqiGJm1XD5q3XNJ15gTtfzfFMEjwf",
  "key13": "3jzuCc9MksoQRfvjkvuC9vKfUB8mrNaH2atVfF3C2PjiU8RJHpxsud6qbTa1kypvLE2HfmS834yjebvQeaiAurCJ",
  "key14": "4WYMHwVv82hQLPx2zZZUZwzCvUnJu3nkhEhnZazpV15TjUW95NnDh2hgRAU5BPKex67eg3DVktVCy5gcHwATzJJv",
  "key15": "53tuf6vBGNXhoycgs8k3w7J6UmDZhzHS1FBmfTKsZFgxXbNAJ1WNGVTDG5veeyAJuBZP9HnZuGRqFA2enniECump",
  "key16": "46rqbhHxsmVfwSbttUfNnc2nNfvZpcebqQCCcJnkwueBcgxuQxCJ9xWiDUtumQwMRiDGsdTMLJd2aL6qEth56YUt",
  "key17": "42hiTyb3Q3PHX3rt9XnxELKcA4YKNrbiTU8tXSHUqTQ23FPrTkg9rbrq6XxTsddsmfUynrpmsbwd3LVUGZWyecBk",
  "key18": "2qUavVDVVuZ6PrntewfrP9MJgjeSCi6AkXiSA2uXJ9QjoJo6dhosvWLHNjHNUw3vwq2jbXZxXmVbVFqcy67XbNDJ",
  "key19": "3wCbzetErv54CA7s6QNC3CqcLMvFtwdG9aApMuBCuxT3LrQvLrjT6mLPXArhDZEiPc2k6gQPLhhiRQLnkmk91xA2",
  "key20": "356YM2gsEJFnqXHnSViWJhohMs7qZo8cDuNnUbW8pFaTsXvP1ADHM1kCVt4VSBxe5ttiyrErGp3LDLR9q2aL63jF",
  "key21": "3NLgC8syfLFLqwPgzj9LEn8FK2x9ibJEW8tYetVAvvRGHfsybAVBMa6uULgPvbVomjtY8V5NaXNpKUUpEkbQRwav",
  "key22": "3Qdd1eaMxFcLDcDu8SDofRLyYRHC2b98VGsv2jrgpyB4wXroD6pij9FYKnYZwuh5rR5ZpVbjZZ4emf9XvVBQVMjC",
  "key23": "3MpYFDj1kYH29ThCGpzTgDC7oXjBP5CAZ7Rs4s55XNy3vaZbbXgzr5YCzgMynCqGfYHrxzi8mVBjiSvosJBFbzR4",
  "key24": "5M5sa7bjNQe3eQwAL4kedKNjGZJmGxzfZ2rjDR33dRYaFnJirKkWJFMsJ6RThM4821CK8k18DTEc3GvHZD2hFE2p",
  "key25": "22BEamydw7Ys3yWiw2eZfcEE2jA57CYhBezrJGga8BxVoDvtTbuMDFcm53NemV9qDtK8XV9xs3rkpi5m8DGsZNLs",
  "key26": "ySVhaNEbwDdAC6GeYgb8nAkbpkzmEgVoGifcAUGPNgT8N7aSEtGNmmmNtWmGtQpfitpQjy33pNTVbYCYDYUGXwT",
  "key27": "5aVzSgSAa4P6xxhbtm1sgPScXPHUpLkDffCwahPuBkmbaJP1y8bUapcfWhrneWAA8ZaB7uLDEceKrf2iwmiHZM4P",
  "key28": "3RbC5Z2DYG2hkHbFqmiNeBrNVc8KK6oJLG6zzcKJzaF7g7Vaiaux6MPaUvxNuUR3utXpQiAGu6gPjbcEEhKibNCJ",
  "key29": "5FVBhtNZp34qGbMbPL8GdXUkrWAJaP6Jqj5EHHRkVgWDxQ4BVUGEditr1piAs5QbxkinQDdpNhQ585VkXqTqm3Bg"
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
