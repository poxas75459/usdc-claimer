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
    "1DedeAwop8xkGvhHUwFgvGN25xr2SnBKppEj9YLjs12TsXYJxQE93FpdzUCZRMQDVFrSa6wYmxQNdUVoQzhpidQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ivqKvsECgr2qEXS1YskTCwKnS4q2Jo81GQDS5L1LfUFSodiCfHsH25NxGjsvLv7iz7qe698G9xkrTFz1nfnAfk",
  "key1": "5oKuz6pTAw8ojJpva6tF9u3F85k16t8NU3jNUwsUaoN4VDtZbLqfJVQwGnK6wcLq1JCtYL4RA4kGaf3SHTBMboyq",
  "key2": "3hWrAs37s3UbVVoE7FKfK2KXcomMYvomBc92vjeDe2LP6wk4aBjL5DRhL97UpQADKXdAYS89e4JzAqEMma92eksJ",
  "key3": "mtMTiWx8zYscQrNX4ZBtE67XiZ5YSYBZVo9pTEzpoZpF6X2J5VMB3u8ya3i8ULZ1hAqktLLcRH6oELbwVGknJ4a",
  "key4": "3uyWevePbvdVPsk89EhNMmYjZaHHAgzg5UXsvnvCHtjUEZAcAuRqL6oBttKDkM28SFvBC8igNQ6ygLYWkVrvU2do",
  "key5": "4pJPcTiz5GZ9cvmtSZFthryWhoER9yjdFyUoRCCEH2MQvPufWWS6wyB3KruuF6rRk9GGrr7GJ84JY8Sy1J9J7mUW",
  "key6": "arihteZ8V36QbRprk7QjcfHnAK58GvULvJthS8ouXWfopaQKb7j3n3xqgG3kxi1C33g4q8Yyz6M3GTcMTU17iYy",
  "key7": "57CqT1X6qtnfKt6VbbnfzmsSvgCTn3ivMbPxZkiKbx1vNuXDRNe82JdJ1SjX3yJzb4phLN5L6ACedhGc64GpKz1g",
  "key8": "4nozKfnd9UGu7Bjpc5mty4N2AhkMqSTKKXtZ7gpZsYToja3jutrxGKBTrvSB1sTFKfGiGJay5yrY3iE9qVh4vXtK",
  "key9": "3QfLuPbA5rjYKLBiCottVM3h8cpVdfwZ4fjRDvtjCA287aPUjmEes2Mo7JTcKXYuTQVNSiKbKdGihxpCEnujLZf",
  "key10": "54Jk1cyH8TgBmmVo6KMjg7ufSCcTywb4ESHCfAQB2xtxuh93kvAPXQMwQcKha9PKaZ3KVjSV17Gnj5BdiMfsHquq",
  "key11": "4jstECUE89oXfQXtCmSd56BnD1kFmRcR932Y3u9bWaE7wrUiwrii81wimMyWfADN7wiSJM3cTsDAUmThG4VzbMhi",
  "key12": "31vXbYSXjpYEVMGgwJh8xr5eztUj8ZWMeAhZZG5hjmYDyGYMbjKFeBovxbhYEYbZjodcsNafbJgMXN3yMr71FM4H",
  "key13": "5B69uhfB9k6q27DiUVxpD3dkEKNNuiwg1c1mG6zMXbKU1ZGRGHth4QPeCPwR5q2pGuL65varuXqFQzTatx61g2vE",
  "key14": "5YkhsZBUmvQxPoD7oyjF6WvwX828MP9PRVw6tP9eAcYdYD6ege2ZKWrGKBR67gK9VMNsuAW3i4NBUUopyayzC3ou",
  "key15": "35dF2PQxngnKWocySJrAhzghr79fD4ED5fNhm7RMWzBzLnLM3jxjqw3czw5CQC3Uk1v8oz6uUAfLbuB1n2nvsPPZ",
  "key16": "2kJTPWuH9uxZbMdz3ohdjGXQBHRacK2Rsrkd6KZkQKVmgSsTvSrVNbcBkPty4jmpyTi54v5Cr6HtXxoLkjYNBN5C",
  "key17": "5w4GqvpQp35PUvQqCbcXHfjxw647eP7EhXvNL7Km5frRdanh1WUg6FHuQXvX46anuzHPonu2WfXN9EKfEdHXuy5J",
  "key18": "4NnMm4LEvKQyD2yfPcbWKhaoGGhmSbJKo79G6QW1vV9HoqqS4E7pbZG2niFDifGKccWCLXwCkZzoGi7Z5aHgKEUH",
  "key19": "jpZAgK76TSGuiUPVSsWfwqvshXYkw6owioJnXXW94Kyyo9kCq7pJBt7Kf7JE5da9coVV6ijCRzSVrocGvYMPSqg",
  "key20": "2rQw4moPji4oS99edPKzszQVcwh43szBfShLp3BBHyH7sEbSM9efbSjpjqLRj4QyoiUMsdKcD4czybaMZ1UzSNBb",
  "key21": "3mFrgfFtgzDMzQuUUFEemEfSE42F8qtoP646nm2SknKtqh919xPc8wNtzVUKrBZhrk7kHfNorMmD9Hmh7Y5Tf9Fu",
  "key22": "29b4ZyDW1YhqQiJoThC6yMTK7LzBwEuiYr3go1nxfUz9VErWRfdPhqpXTMnqEdjpqpjKNaxBm4qkyBeqyNGjp18K",
  "key23": "5KcTJDFYQL4bDnngaTL5GyLtqg9ZfwLSz65dfHaBgjbjGjeA997xQqpGb71cuE2a9R8ZFBEDCdigH1tP3P5xvcrK",
  "key24": "XVVC4XnyZw71f7tdVqkRLygPHQ5SuPWKNVGH1YvdDRtK5DRvBGTtHq9aN6NGnZtpvVr52ux46xoR6Tr2B4bBznT"
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
