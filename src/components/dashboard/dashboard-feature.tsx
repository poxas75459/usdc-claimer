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
    "4oRVZVUzCL4MMQf3EcUXFgXwDzFyfM9SqJFLmYF8fv23jbCt9JeLVEhrDb5QvVku7kSjvztcbX9oXMjf9u2Tbj2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDS6uNG5K4CuqPnfURpDEcZLVYNvCWdsoeWpFX2UiMKeXJ8rHzHwezsWzGmJ2nBBcCSyKLAHkEwcUDuHtzH8ULM",
  "key1": "mCDNXtxjH8WuyW4F5Sf5aDwpwEdbwj6kY6CB5eDyqfG12wWJbX7FXYP9F58umffGa3ukV3QCRWKniU8dUVkrt6v",
  "key2": "43YBYCyE6rmPGFP6TR5vQwzuzPAHZcxqUPCREUMSLTMh4m8TiJvPKyY96FbCRLdPUm3pw7ttmDcV5YDyq73iQkW5",
  "key3": "4qvX26jTeRBeuA9aNwhqbarEAorjjqQH9iTmUa3wGdFwiXkCQf1Yo4AMW7Bt6ycXfAxcfyKqWWvQi6XUQxSCWdRk",
  "key4": "261cYGAyjAhyVtaB8EwWWuVjxrrwgJLDwkd1hvUa42r67U76ki2ESa6uQCM6eTtJ5kpKC3kNW4bmbEDUaBmuSFyB",
  "key5": "YzNeptpdEYwrqVh56T9k62fCCZe7b9uXzC4jwAJP5RrtP8CTF1ZvpPaFw9dFQ7RX9m7nvqiK49hzoaZTHrVmb8b",
  "key6": "5BTyAujGfFCtnRVgoseb7WKeEfXRyyGTMhJqe9zrua9Dncyy3EwMpa7c8YhgDbFQokAY9YnLYzfowzZSLpbN3ycT",
  "key7": "5PBZtE5mB411xUfvKZxyS4fSTQk1vUtNK8G7xqJvaBQYroaxEFSHLpBPLQq5qDcPL7FXJdjcU3o4RZoXdq8fNyXn",
  "key8": "41c76NAuKVRcyY2e5KV8Kg2L2WTETEuwsSQHcEUq1iAT9EEK54LS9GunC3g7Je5ZpDDq81Xu8J6gE8ZgCGKPSxUG",
  "key9": "3AumX4tXfYMpcE5h28LPTTHMSXVBHvMPSf4fqLV3ZZpqbyo2Xhmxf5XwyReaRbWQytjwmU5duT8sjfStqVXethNe",
  "key10": "4cHdQ7FuazT9GFgoQodPNAAsabE7Y43PkCQXrY6GKbSXw7aRadfgBhzyZFxYzWdWAE6h95ZsF5GwZcWuKYHLm8Hu",
  "key11": "49Gcw5QCHox21A75tb1VxFuG3u4wuXCuBapH9fpPNVDAUgRJkEhCkw4ngdpug3qTvJQeEeLz2qeR4SPhXCEFaoLy",
  "key12": "2uaYkqTsp3BzpMFm6gAPRcyvS7gZRqLtAy9gg15jweDW3UEZjqYmAfZA1rB555MDaZDHyn9BPFShyf3M77fh7Wvs",
  "key13": "CLrD7RmZKh4w3Ju3uzSDpPZmxv5pLKiq2Y8c6b9KxQi4nkFcsoGsQhMT7t5ZhUiifxBCCMwG9Vo4xqzHYqY183B",
  "key14": "5kMqoqgLgPQBCv1Aff4FvznnPA5AtfcD9fRRqGiFsxY6VxYmCqtZ76h95nVLX83sFkAHoR1qS5FE4Lv4JdQpx6Gx",
  "key15": "5EQHU94xqsWnh2LZGX2ZFsYphDyPRSeW3FATiY6FBGnPFgR25cpfNWhnKVf7n6b3686TAWsQs9evs8aMXGpks6QW",
  "key16": "31qWA6rRZqmprSouieuK5NnRTes1E1niYbeciHHL9xoDkvyjwKKXyLtW6zUC2KtKwNNFJ4ibHdgQWJB3arDNB17t",
  "key17": "3CjiDC8bzGKYxQzLGqBr55aN89SCAFNsbXD5kqNGAwKEufEjwbLMhJw1PmUBswafQN3PiNYAkZpEEZSuTXWX7F2p",
  "key18": "NLHCL4Z5DXBuahfgvyEGUdcyEmgD2Ms3SBHBuYwi8XQcEVMdbbSkkiGQSrqeNDq6jatXzFQF2qHk4tBTnLzczwB",
  "key19": "5kCV2uowLPZi796imTn6dB2EfGFCpmYqXQbbWRENEU81DT3aciXzXgyuHiZZ9CsbCkEsQ2zcavPimXu5cb7atSDN",
  "key20": "4LY4Qou6GrTHDhy6f1J1tTYrkxFG9pHKDkhWWqFxMTRUBrKc6nnTfctxDsi2SUMJsb6E85Va3rqWHwVugMw439zi",
  "key21": "2pDJHfhp6z5nzr82TkxKVGhtVWYxnBcmmjqQSqcePkFmr5ccKbEJzhqhEBEYDyYgkCm7CVoLSSSvMV2jrAqo48To",
  "key22": "CrfrqrRxa7mM9vxFm9xjSwexnQNfXSbP24DW67u6zZxH79h6EABYhFEwp6kxcXLj1RAdZDD3oBheNVQmEh3YkLo",
  "key23": "72Tf6KFVMB7yP2qMW1zDNGK3dt8sCKPjhbvCDxLVxxvG1ddWVjW1JQiRw78MSNFv4JUdKD3gCjFSLtt23fzyMxP",
  "key24": "3ymfRTXgFT7CzEFb7s4XEKEDmxM4NquPoaLgu5RBYCosuUAV435adRkMfny7AFBgzLbs9ioQv36P4JArXfbE4Ypb"
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
