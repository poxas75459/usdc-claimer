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
    "3XjKXyGCtiC3iYvXG73327uKd3byiD5cEuJdZhF6hwwFCHtoBSkZq2Td5zLGXtMLjV7CRWHjhSDp3aaaqf9vxj2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQcjumHc7ypcsdN1kLxKXBqm86eZ9jXbj43kKyfESEqcw8XVwcQwtTRtVPWBqsKkP59C4HEuTmNUeAczj7WMe5g",
  "key1": "2kSe5gnbAG9yh5VtGgG2P2CdFR7q7zdqPg7Poz2c2B3VwxRJxQPCg6LWpB4KtbftzEPZb8ecm6RTEJXFYWRQcm1X",
  "key2": "3PYs9n5Rd43DFJyQGziiikPzPpox79Q2eQeUKFmj3EkXQUqorb42gtRivbMA7c3hX5mcFoW4Y4z85Gv39WXpUkAL",
  "key3": "LtbF3G8JygMRD38tpXaGhcZsGiYb116YxwQMp2Haz7gnAi6HPFRzKMtaRUdQViUkD8JEvm15R9S2nrw99Lo8krY",
  "key4": "3VB8UYFAHLhMiWU2ZDntwLL9pgC4wQF7JgNoSAYYoz9NRySCFQSufB9a3tyXPwQBpyUvcw7xhuYWsQTb7L8MErYP",
  "key5": "27ANsqPHj3EonJfERiTwKuxm42XMe8PgLqkwF2uNQjb4erVGFS1HmB4tQVsE3gTtDiraMT5vEnoZPcwKqmLyPUSP",
  "key6": "rFRhByxbQHV26EZC5XrPDyHwozoddDL51yjZxuKE8ihER4H5x8JAwVGA7sNXDidPMJVXdawdw7XqkHC19QUujJc",
  "key7": "63TrQwHRGxLHSN1A3MpAwsTWpA7oGt6fvUKsSXspcnh2yHp4gmrTNwCaFShs8brbyBc4YPUrvGkLNjnsfd2dAkhS",
  "key8": "kFLirPMQiUUw6xtxmqwbqwCQUsJBciAMfqXLYRWAfG2cm5NUwdjhytyT8yDu8YkHvYXuAqrkP5auGidvWShrAQ8",
  "key9": "2h539D76KM36PaViqdN7SvrcZCV3fBAqsMb6CEWvCPbRdqt9gyemYjZDhkmJUUmT1mLGyo7ZG1kfu8aR76iajF6z",
  "key10": "4bh8afKDUN4XSHGqPw9gWHMu1ewGj7eza5hR7VTZUyEWKir7hvABXyiCMEu3egB6mXs9ycafqnKaVDBMACdPedGL",
  "key11": "3KXWmFx3PC3zc2181pagDrKaJZ3KzNV6rNkEYrG8oQQsQvNpCfYbDpLkifB6x7iTCR5gsxyiPnVSZ7yMjsURWrhR",
  "key12": "37BrJ5392rvegqqLZKkxN3D5RizSbB1rLbVnG4dDuht79w5ahyzGQE2t5urVUznGwSQFLtguADVgNb4gXf5uHuXE",
  "key13": "4uTdNHjDaikKRvvit9TNwe93Haz79y4ii4pMjX2Z6WhvMHi16uUyvgyURKvxusRYyR8ejgk7FxHjCwcYGePjvFv",
  "key14": "61oBgWCRMwu3bQgUiCS3Y4Dsbn3qEeXgVhnao2zuxtFb3yE8ZzsYXttXFVQDNL4G4Rwi5RuJrHebEX7ZQZang4r",
  "key15": "5tbVYv6RosSy3X495Vua7LnzoJQadGAnyU6CF96CDwREXgtzw5h987zEAEuntttkWod9JbmvkZNgFWaQmpLx5T8y",
  "key16": "28dNtuPJUtRVWC3wY8Lim8qnjGUkkPwGmBbCZBZ7TLtXedcHZymvtMCeYR5VRomtjc813XTmzwfHHiM3VpTNXGZM",
  "key17": "53HsNa3PpvY7h4Jnh8nYg9LyGyVFWUuWjoBARZ5ZbBoEKqtP59MwSEQqaQtLM6tuypPHgZpJ6oqaBZXw2tCrA1Lh",
  "key18": "2t7rwPQPJGLBthCVMpf7ZnhM2GZn9kdee1bNg4tjQZNr6RjpRMuJrG27p33LnNfjcgaDzriZ3odxwNp3go6i6KaH",
  "key19": "Rtw32McrhUDBVRvuvXZnv2LXeXVdK6MfAGpRUksAKoDKaP583kCaDGrzMmcptPHKipYaRBV66ei6mNk4ZqHdTXE",
  "key20": "5KU1gq1FptxAHdxXah9yRR5xe6j8yAZgkcBBXYwhaN2HXxtRTcUcFpX4p3wM1Hq6t5MaoYo72PPkGUYcfwYvPJqj",
  "key21": "2wBsK64stKsTMgDvswXt5sNyrYoXD925rq9ojKoAmpUYGQAdFuhUG59BYUsNGEUJ8uyivd2E94Ch9vknZ5jnq85e",
  "key22": "3DzikSUN1FPECx3cHKfmy3ByCRLZMhgk1U41zvids1dc2xjokNDySn8eVorztTQPdHY4Tb9umN1TU7sCCxwEwoX3",
  "key23": "5QLddz1wVRi21KjFnDgfKxULuvvqKwJk2ohGo1dH8MV9oQTsMUnj2r7ndSKhgzX3hpY9dYHQzt7ujwUUTpzfFy4z",
  "key24": "4WXzvNnGdZZRmy2kmQJyGz6FWKpW4BoZdKxktmTvkoKsyrW8EdBtJzQmts7YaRsf3zcoNy9cnirz6rKaCvTkdN1i",
  "key25": "4ydrrWMxnpokABgTvmnjSAR2CRjBf1SfugwyLn6hCJbVkboN7HHYn1J4u5cUwRCeVyvqiZ6imuxJKwpxtKCJuzPx"
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
