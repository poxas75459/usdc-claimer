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
    "2hD4UkmrRuL1c5fUmxFTaLs9vTj8dCRswMHrVQkPUNyZCnPwFd8givSkSNBrEhoj8aXJHUwhWc2j4QvtDUCcALxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57iREJePiTuxSRSSVLhnXWTe9i9zUf2TE9oYALS7pt64wJMVkzoby1xuS9qJnV7yaipMHX6yoskTPxg9Ck2thPqf",
  "key1": "4PYoAEUS5mm1N1yYpty9PeVUqwhSmc6VFbaCU4QoeyAhvwY1i2Wxfppc1AJQeyywFdXUE9Hyor9kvAxfV26nBngA",
  "key2": "4ACrEpyaKJEvwCTarzQ43k6PPGtH2qsX4bTrf9YPYq77SNoyzuPoiXRY962k8VxevhfJuAa5PYtdQXRLPMEPWadn",
  "key3": "4JkZV6e6Js89Q58F3K6R7zYBpdkiYbLMCy3hJsbD7YfqC5PL3RK7xVvQASX6sHopyirghegCJ2o1pAGEz2DbKZEh",
  "key4": "4j9cLg9rmmT1cagzBZGmq2HYNtW97aTruiYWuDLxNoo8oFSBUk5JMhj8jh8uAdgcgtpo9tL4z2jvZemCkM73qyFJ",
  "key5": "CDG5EfSpwYe7zfgqsBjvCrAqgVMn9FW7HvxiuhBWLxuBYWsqVWHmSiCvgdZWZK4hWYJBWBJTGkXFYftzfu1AAyE",
  "key6": "3P8MS9ebTG4CkhiYPjEEcZLvytPAJy1DX4WavMQciqifk4gQmaVYrAgU7RszSzJGhXg2KALPEvmPJkB2rVN8JwrY",
  "key7": "3QVpynztPw4xYuboRtKGK3UsdYXy7PXuBda9fzttBrw8ecaumDN3aFiUE1RRkKNnbVkQa115accKrJGaEtEEDqt8",
  "key8": "3zNER4bt4mFmJofJ6MJe71KL68FwBpFH2E45twa3MxCmBRQpGzjMmxZHj3M4dGwCcubYQwgEctXxWyUtFoHZ56AK",
  "key9": "3rkwLKeEYjJGieLCCXygvozzgy237Q5wC3L15hoVCCxmpszQssBD7TjHYzeD7YRa5mcagRPVUNdW1SiiMruTPTRK",
  "key10": "4WS6qFriPvDB2Wyzb9cUmKXKxXTUEvnXh7Bnn4Skr1hMFXhbs4m2fGKUBv8zEXpv5UceTgAc1Fa8cNQUtLUnMn2Q",
  "key11": "5kTmV91sdJRRVXT1h9oRcbopqqR4QyxPDULiFrT6KGySWVSC5kCi1bkc4QTF2Bd26r7to4BDRLLKiQ7sgiZ9U4xF",
  "key12": "5GsPX89bwRx1F1RstxWMFYazAUtysEzTCXBAGanibx8mB7AwjbRiN2sHVkscP5ZjiFRVMpcvsSiqDy9mwHnA1Tdn",
  "key13": "59Xk5RaUAsD19gLjKg8nkyCEF6f2NmLYEE2t97srgwPdCCG6ytPYLJmDcF26NR8j3N9ZYLBRrmoEHJNnJAvjntGe",
  "key14": "4YCLgv3vEwpianTaEgQnEdyXFiAnLka31yysbXGfJzUp9dX2bqBRyDn7anAiX2aMkWEBAXnzm4X6gkhvS5T11f7v",
  "key15": "U9Yyuvb8f99FH7uEJ9NncboMvwnJoeaCfR9gq7SPESgCJgqjhQttFYiP9WxA1xivFJRwZdDfUr3EXJB7C7Pxyjj",
  "key16": "pMt2TVnfmRP8Hph4w4YBPgCc435i5UXSfx72KVJc9QvvCRgPdSdtTuZUjpfqKM97tyhxJKGiHstE2DjZyoHvcLs",
  "key17": "62Va1mBMrwz9fa2CJmiQN7sRKC8M89iXmQqNXn2VTmzbPNk2gqdw9oRtzh9u79PKmhZE34zAHSR68sdDfkCQ9eu8",
  "key18": "56p6sUjnG9HkehmdPsgnR4b66k9bTw4yN6ZTz9m25PmUqKqRafk8L8msuM3zbz1zNtLsWFi8uhTHoeNeXUEvEzJA",
  "key19": "FpQZY12kDrhrjmqJ5QUocuY9V2Hov7y2QE1KfEYE3HS6FsUPjVav15ArHDZ7sgiPEMLYHeFnzoNY11kkZBL54f7",
  "key20": "umXrJ3rUgNPwnQW984K5cHEDLBAmMxR16rKZ1XQ3iuUPUYgm6qEfm2TDGpdYYaeXfqNaTPY6memdxAV6Hhgoagi",
  "key21": "2eUcXw6gSBKdCoUmQvFQeWAsnCRsdAZdGyqVWiERf6rHy83pbwCgENvJaFDTg6RwS7pZmNXqEpQy959rvwGeYVhD",
  "key22": "3Hcb2XzUWBrqqoqhdbgy4Lr7mmNi2X37U78PSyYrdLNHT2joCKBuW91PokwT2QyqXwTeAqF4AnymV552GtPNCH7d",
  "key23": "5ik3VWzcosrRA6cBTymUdEzny4WnFNV1ZoPRh45yWZGM7foNkb4Rvgbs5or7xe29tGG7M4WCJmR93dVw1vpN5egx",
  "key24": "32n9xCaaznb25SzP2RWf1WeyYYUYu5iZHD8vhzhuTeZLFhMM8FU1xfGFrM5ucKnkEpfoxvf95rFfxVkcJ297Zhut",
  "key25": "Dexn53g3Bxrj6TGbjnqG4jN3BvvC5ZwFEggAgqncFj8xjRc3Km9gi56t8Rq7DNCJbdiVWmCsaqoxDu922H7dMwe",
  "key26": "4NTaS6fEk746srN1xBRr8Yz3WiKm6eY8btHzai1HtML7QYHJbET1NQwEVJk5f19VJHxcwL3qUrsaTxBFchPf3N5W",
  "key27": "4jwwbocHdjdHAC3t8GCL8hwW9bmczxvNKTT84BZjjuGHNxuzjdvEok69fxUisPc9KqFyQkGcxGTW1B5yfqJhYhqg",
  "key28": "fkt5vvTtdDuR7r5p2eLfeFEqGR8UgbMTdDQTNFbwCCzKPCkQbhts9HxVciHwjejbe9My3fYqaE1UwrGrZGnYWVr",
  "key29": "2T6bkubpAFddfw2Nbty4Ln1KHBY9EJRawq4qBJrMhmDmAkEu4oyGVoQK3yXrib8R6fecZ9QbDW2j4UV5gzLmFGMT",
  "key30": "FLHEKMiwCn1dj2FAejVRNm8Z1QyQAhC5mzqD85KCujJ2Xqo6yPuR9JXsR9KVjbXLRme4bMyTY4bvAwwdCfnWdYk",
  "key31": "4f6qHXD52ByxcDAcs69LhTATg35fnLJctaK16K2CToTz3MSQcm9oURiRGqgZdgA4i1JBfhZ9JcrChBZb2Wqdti4d",
  "key32": "2Jg4b4Kke87byVPb8ysCYFpEu6Tiru6ENXm34wXrBjS5o7RZZc9iKvZQChstrBkXiJz2EAfDVA5RvrWogpzDbN4p",
  "key33": "4e1nR9GKWeC6m6aiiJMJEwnWu4JnRppWniWFKzCqeogy8Sy87Lko51RAS8skpSuVk2X8R9rf7KPC8mMWvJ7fi3af",
  "key34": "4wfMohQBdmh7WM37AzvJtbTKGaThVoc4spkqwjPuxgVZfY4MCBPCx4VuX8osZH5qTChqBCeyGWYE7pdedc5ooAMe"
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
