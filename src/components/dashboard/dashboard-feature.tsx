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
    "35DDTvpUmm8cJVzJFdy17KpxbxHqKNUFHEaW29V8ExywAAqn3k6mp1fuzgsK5MGwM1AsDzVjgZuPxgevi8tG1wZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DMSEfWeTXAWUt6KWatSfqKqXWjTdgPNZahfjTY2DtDx64EfGgvsqGZGU5HupnFQ1vA6z5ArhWaLUQxCYhASuKtD",
  "key1": "31pxS9y8Ub8FLjS6f9xamx7xwv7r1EasfcLUkJYcjNAU5Cpo6xXUdB9TiMwfCm2gogkv2So1Cfy3EcevVXfVcQyJ",
  "key2": "ND9gRNqgLFRiENEcvYdYSfkc4un3emJNSPteVhhnqoJj4YCZEJWN3NjvRvUJqwGJHbCbNhSA1Bkrso3VBWtzJdA",
  "key3": "CBRBPebyVVs3XUE7UVdqNMqGQoFp5e7ZSz3B7AwTZXEfd4vvmLefAuFe47ZdmLBUeKwcVgGF85RduG2qSgjC91M",
  "key4": "5gZ3HWS9KouH9nHtd3E1Y8RWquvgMtN4DGngxMpBxYoNiUVqHKjWujy1gWvGFmETMDnivupHaZ7XSgdJSuaw73dX",
  "key5": "eq7MwWhLLmnJbXQPZwccaakFEpXQqYK9xu8bHZDs29Ujy3mjvKzG7Hsx2wYf28YFZM8NYUKKFSfeu2uLgC9K71j",
  "key6": "27ZbA2VxuA2iCpnFZTaUM2ong1iFkW2Bf9VhYnM3zRPBt8hAxX2H38U74RqZmDe3sNQ1xmY8BLcQPvDdphQwdLSj",
  "key7": "eovZKrKiCkvvjhf47sumAZxZs2LiFEZhhTqLM4UjN6S1nL4cqALQat4zmuAhQxfdtfkiotP1f1yCfrqUDU9V8eN",
  "key8": "QnC8bqHWuhGT85ETNrTazLTwLBqq3EBGpDfC457nfATdN6TzJPcsuAo5HX6zygxAfpwDHhJKjdWapCxKLswDdNJ",
  "key9": "5brtmKuGrQ98WweUoMXUm5Hn6PSJafNHKZ3cani4SrbU6GRZoGspa6x5ai7Sr1gjcS37jCAsdgTyXh393ehHWj9s",
  "key10": "37A2KA88GLBzPTFf7vVd5rB4WgrUdksBAe4JLrRnPdUucDSj44X5vKha6sX7i5GeDwejwALrDgd2xYBAFMwSk1u4",
  "key11": "3GDfAepeihb45aheu1QwXYnB9GfCcZHSXSKcJ2s2J8zeSKjeF8rgEEqmrhs6XxvT7E67QY6pYTrMXGG3QiRcWQ8G",
  "key12": "4yqzGncFnGKyg7EowQDZrzxKsoeR1H1p8x4GaUakT3KSs1TzDM3qYRkeDmbE5exvSrzX766T1urZs5JpnmYNJiC9",
  "key13": "3PukmHJm9yhnZoS8XRuhsDKzsPPdHQZw2rF8fYvc1TZGa8HMAeC5AXKZ9e5Ks4z7SNWY1HR9WwRuKmvvCnqv487j",
  "key14": "3BFCqX7Aa5QsUpBW2t7LvAEbfdmEUkDZV1hUAGL2XEXagBd73k7efbkD16QzjRMWz4PuZ4KVvTZz3xdCGU78hmXE",
  "key15": "2v3nY7vukzy4zbFh7xcKxjGeSzbkLHMfsBb81zMQJhH5aYGu5aSMmzU8ptypzDHBrrySRE2EJ9X5zGqHz4mjyk7J",
  "key16": "sUFb7LV2aLpAyxKfvuE8eiTYj3wZstaZG7JXtjowmtYbNbEEWmmtX9f6PyqBwBZyyx9HhHdWe7sEQRCDAq54aPK",
  "key17": "3R4xrk8SJKWp46oBa2iBZZj3UuGK1fbhzfM7UCskJquZFjkWyWeqNcQDkT9CTbsASUvbUuZd7wgsv1sFWSY1HfHp",
  "key18": "4Z2JubG2veFGv67PXKo1DAu9DPsTZ8g1GFNXH5N3k3BFru4TJLrbg5X2FXptGGGmFirtrkVoCN1fsZFZziKyf7qT",
  "key19": "cE6sfJgAcu91JFxSDkY1kszB7APNShPWoMzZ4DpZHQYWtxB7bnbiPcZeUntuub8zhgRgL8dErZimnPNV4XF248s",
  "key20": "2m2HqLi5XU9rLhoLof5XHySpCe8H1MSfPLR1S8VBbyJZk8Efsrjo9bvPbxTymNZx16KhSsvZ6TnS3BRV82svAFJ2",
  "key21": "pQeaZwUkuqaoj8PdfJ23ThuVHvuYE6vNKZkxbVFVRE78jWXczcZxQQDBiJF8gjt5NkB3hYDqWA49ARM7NfS7Hoa",
  "key22": "5NzfVu6yPfvYKEGdKB8vKPDsDyByBqLupoVbGcv2KsrDPi37PdHuRNGTYxur4D8TfWLAUt5JEbmYzHdLH8j2dC2",
  "key23": "LhLGa4nMEiaCn985ZJT3oJukVsoUZW18Dx1B3tTZU7JTxHvS7jx9nZ7Zg2q2panFsgWSc2vxddXmFcDLts2Ut38",
  "key24": "484xFKp89UMp19AKNBfqqqPxLuV9Dcd1gdTWcYZZzL5bbfCA2AUzpJJANG7mz9vSzbGba3JTeXH3hQRZkEUMuusS",
  "key25": "619ub2pQWFJWXcNgA2pVgGv6XK9tF3pobwg4LpxWGW13vb4tk9JdnyjPtbyc8JGu99Pbx3tLj9CUiKSAQfhEWb9g",
  "key26": "32bV5T7FLy9DqSGJQLqf4LABwUii33ZxA5vgWN7cph5yFKGcUViLe68NjzeqGvaXAAPPn4GxSQsy7wkaH74fZbnd",
  "key27": "rYf5jaubYo4VfQexDWVdVFewyg14BS14zD3ovS1hHX4CMZbmvu5KhC3RdrpgkMEzLjapvGPQk4a62xQTm8yRQAB",
  "key28": "nMgmfFDVKNEUoZ8kTDtEVzrE3PcuE2WCw6goGUBFBe3dF7CufSpd5npdZfGMrySGUVFVaiNZZ79jHk6jEp2nQXM",
  "key29": "382e6YZeSqnzhmqwTiJSzyyuoVzTatmP6TpjW7cJirSiYcn1X8JwvgwzXzKvBwVQ1EzuZYPcBE6JwBci1ySugFZF",
  "key30": "5TQb4W8R1nzGNhyfPKBHsmWvGj3XzKvruRc7rAH1f1EE1dvfhLHNtX9oDzoRGQZHHFUVveB9axkoLHzFMEDVnrjN",
  "key31": "4DzGqtojG4JqAa3soK7xk1cxjykYBwtaa9N8c9untLqwrW5vEjGegJXqNDnh3VpE78hVCZVqrfq9gnKUpG5P4Esv",
  "key32": "5hYLnNAuirUFZwDZE4wmUzuSHyxUrn22YEqK2Ew14Pw4wG15TnQMJ2of7LatvrRPbenr5xGzQJdZ5vtyrwSjCsVU"
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
