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
    "2A6KU9g3aib1AqWLoe4CWEUr7bSYdwdVoJ1xUQkoVotKWwjB4zxW5YLDtZDz8pdiTY4bN62zEGByBUFJEmZLDFGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZazDqwCU45V5ppV34dyUkdE8DkrD5Bg2UcfuzTyaUi5B9dufwJTvdnHqtHuzumVGyNxeQKvk672Hhw1y6kzVrx",
  "key1": "4HhfeGVq3kz5gRx1E3uKPiyohoWT5tryUvNTMYKoccFPbASpfmUZzHdUjzxF8n9f52YXgF27iRwsGbWyQSvqd1tU",
  "key2": "4cVHdVt6RYBz9czaT149EY9ojBb9uDoPoSNStYAGw5AL5UNqfRcXqs1VoaviwJnMmkj7fdaYc5eCxJJwNw6yokoA",
  "key3": "2xgfhytkLR2Tz4Ps3poywU9L41Kc9Sg8SEp3F7CfRRnf4bXrxFTwPojrHGRxR27kKmhP63qoG4eDB4wkGNZn3vQr",
  "key4": "4F8rKi2ik5JeWasETSYGMAuyR9bnKEdnVd32GwKFLZmE7uodwLomc5wcNdnTbpCYTwToMzAgTYBxrJb7rp18RnzG",
  "key5": "2x1mRtaG6Pt8GauE1X4dYmTRaPEkhc7E4TgLpLeDems6vxWZuFmPK7473MMKFzSP2t4sCKEFoW66iPne78UAFFZy",
  "key6": "5j2rDuKzaiTMHHF6MaULT3EZ3bWCU4ukig8m8iErMFR2bxmyVFz8Di7E9Myk6GPD1HEg3A33EtoZsi464gCKmxeG",
  "key7": "3NEaoXWBVNNBG97ni9eQosgZoLdxhPvVMzTKvdgV6eiyYHf7kw5VRhg11UgWD5bm85xA2NZ4LwrYtrLB9apuPx9w",
  "key8": "4vzfUwyi9aoXjwQddExQfUG5Hb2ip4t34ugKG3NeV84direzgU9uzEYF9DCYg2EDBuC1RxtC1wVe5JitdBb6AzQW",
  "key9": "MwUaZCKKRCLuKjjDgcPbQx367vGDVwC3YEKuGpXbybeqVerwZekNvJdRS5HyViThYEHwA8vod8SHJ14CaSqWoPG",
  "key10": "2eHLkFaLXbSoSY6knAg27byRb82EmReYBtS1Gcg6YzvDNUGMeYs6zduEMXVDS7Qa28mdec8yZJBfCFsCCigwfc2j",
  "key11": "5NG4R7nihhLJ9jZcDco2BMypoXeEoAwuCkXHmKefjxW2A1AnNQBp6fM1Hj8kbaHTE5t8TyKwgPZ4WT9XqgCfm78N",
  "key12": "KwrKvQox3xaD4djJF2jcpBA9cP6x1wYspHifFyjevRFsnf3T4fUpFhgbWoFgpEp7i1MhU7j5qw2ZDY3WcsfhehT",
  "key13": "4Yf2Amfvy752JPYdts1hRcySp26xRwpDRytPMWgc4mxUJ6mUtHhYcVYp4ZNHiPiFygVkzMHs1HxAvsWfRcVcnKQe",
  "key14": "7i3RT1wqaxXpyaWbc66jGAs6DaWZtXKpMXsGpXXn8Khw79Xksui5j9vXwxmwfd6a4AodSv4dTFmxcuwmqxhmMrX",
  "key15": "33d7csAwz9s4phddqNbtjVfz7EMopJnRCSmYJkZshvQryznvaVDt1ShVJAn2uKYaZQ67tcbyPgBJYfksaGJhLsU1",
  "key16": "og52GbhbZTx18YnSbJNoHgftLbVcwvu1hCX1CV7q4hNnN2LaUqSQ9wVJE16EkB6BaifibmS24w79FN9DFrm97Rb",
  "key17": "3e65MRfMDUMReiSD8mKk5ses7JVLxumGzt8yQy1utkGsnfLB6DPrAdCyrkZKEXUhZrScv4ghjBZs8yxNE3JVZ6L7",
  "key18": "Hd6JTeCNpAkRx398t3HT8BpL8nWGrSpQjA272iT6U41cAyCjUD5MMkLUunXmkJKLg7kiD4CExGjDA7JFocdeUuf",
  "key19": "66bsFyUutU4DM8yoVMtKXZ4te94rRbFEoRqVTAbYGFyXWpFZ85veunjTS7DuU7XkS7x428eGxefzbJbKhPbsSMJq",
  "key20": "5GqTyngv73yC7k9SEvXtHY1xFz9R44eFmqyJT9FPJzGtTegwAf9yCheCY6yPeT9kLFoQqP8QtbB5d5FQyYhQUByB",
  "key21": "5BmHM5jLqioM4QV5ZJxT3UCVjBjzE3XamrSPe4EkV8LF3BvGcnKokXUNycd39EGbp1p8UR8hVWLY9dd6QHg5YhZg",
  "key22": "4UAeXpntf2GQtfbv2wSXYjtTebAdv6K7WVSycJrjxeFY1EoZb114e76rYmirKt1RQsXZKiLpKa8f5Eeb2u3dGgav",
  "key23": "d9HznogHtiWT15ZWTXLvnnGNK3wSvP4WX4vkT8HhvRhLvNx4CJBkDnn4wcz2wFMnA9qd412bovZzUpymktvyP3W",
  "key24": "EuEQEEfdvEBuNxRY6aZk4FvFBtBeJwTKjcUmrStk3bmqUpTcDmNFASQmJyNExDP7FoesKWMrni4MV7oJFBzkeLi",
  "key25": "2ehw6j9stL7MpUg12GB3GCqjn2xrGsujBtfG9312umEE8ui2s427GCeVBRvh4GFztbwq83sthjRMMmBbhB45pN3U",
  "key26": "k8T355WNpmErTawExXUtYv3uAPdoNL6Fmur56omddkpqgaJukgRSubXiLnc7BMmBshRVvcz318aftTWyxi1S4pD"
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
