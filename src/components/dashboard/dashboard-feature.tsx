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
    "58ne2BR3C8YpAfheHYL7cc2CcxD848xhDWu3ibjxwunXtn6UxZ8K6kzy7KzoMXH6oeuGzM7WtgSWg7s7bcWcnFCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KAR8wwXwMxE3dkvJRePqtx9zvCdRc5FJ2DMk7AdNzVid8PqaR1F1JJYPzTG1xFeuxnDj78XMrX9qTVwwokrQMjy",
  "key1": "5p3qxfjDnqznrztkfy18GZAba6pD9XjKV8FthdTFhsY9TiRjmXLJEysEKi2mbKS8FZyhkEPWe98vzs62L7kwqxm",
  "key2": "3WXj2iGSp7C9TjHYRcGkHXJkESHKKxT5y5ECW5TUen9AKSmxffahmBrCW7DpFYvHEcpGvrxofecWrLsYu4baQXsN",
  "key3": "21d54qeFXiakMLrKkuBEQ2MrwXWDxGL2GCHAWbMPW1pUicQr5tWuYb6i6codaJGAGWCZHGnVMKPxsuN2gWcfujNH",
  "key4": "2GxytmC4M6Njo33P7B6UDELsaEdGodfFWHDNtJn5qGmQjPwJ7eUCsWxxBTk1pgGnfX5C1ffhqxKGtzt5WX8DEfHf",
  "key5": "2uqrzWkmcZL9KBvYH3nqJa24yQbwNFezcvBEaHSqSkpHerm5HkDYCsgcjA3BZmbrCriY9yryuFJnbEcfqAYoGx7s",
  "key6": "2tKwLXXZG6nSYEmPeNLGeHUeYV13QbWnhdska2bJG9r6f8Z31ZW1rLMP4Vk5bsptaZDZp5bGgqdfxx68i6CCU5a8",
  "key7": "4xcoAMr7JCk5fLi5C77g8aRM6GQmA6D33UNqT6n4pJLCH4SbnhhPHdE2Gux9Uq5iFTDg93Ws4gXWngYPtWaYH7dK",
  "key8": "wyHFzrzUu7LUucaAfBbuMd9EuPVxN1fZANcVWaYXPADMFYNi6vMg2vvBxozdU6WJvrv5TnpRiZgys52yrRSfifa",
  "key9": "4dZDky5K4Moaexut2pwFw2ouDdwaSsv2CZaFfkiNqCq9y7gdnm4rAgsKsKz3uFvEoMwADDPU2bv3ihSrBRuBMkzM",
  "key10": "3MZ48Jq5mCh2tcSuoZ7936xrPGU8jCjFkDALKi1bFdvr9nokz39TKSUYE1ZcoFdXsTcgL1ngxJw5Vt8Duq1egSWA",
  "key11": "3Nh2H297LE2FjDM5Wrc5DrryX7pvYPFYktatYg9aK6DhRCrEDv3bmNQYLfSQ3w2MkfXPNMxV7g4j678Xot5gHmus",
  "key12": "3CkV7MqwhHZru72WWgXZ6UeynBzb5DkaBDafG6EMcAzjQemJ8kJcRvpsJ1eDrQTehRPCKAjKURk78DP1Mr7Y1maK",
  "key13": "Kd8QJcRRf12eWBa9KhQHbeszLwXTNgz4GPAWQbdYGgnKsbQxjKNYu6eFdoCgC1AHrXyXYEYKzHsixDeKmmAEqM2",
  "key14": "5JLH9R1MD85Y1xYs7UhG87JgJUCubLzeHZVYESLE2TBvUDCARgihF5thDNua4a5fbciubFmMuE4PqGYH2b4Pj2Bz",
  "key15": "2B8CGKLFiZR9ScTjWYwurcrsyELMyn2bR1iohzVRv6Cc9pfREicYyDgURFK7WjEj2NwJa3nueBP1ud5PjLGjVsx2",
  "key16": "3FFj9zCmCDvQphbi1Qdad2xP3s6WbDan4tW4ffuLpFXJTx2MNfAZxVy2SnHuEmbYXK6XWggRoA31Xjyz9YmDbQLo",
  "key17": "LL6eEgm7MdcjDpt8gdMuuLYWaLtKJ1TBDNh5RuzXvje4eEy9H9Wvmtf3fdXfsrS9WQMrHVGkoLArmFzGuSLHmow",
  "key18": "4RizfX1j3ThyRoyBfWbnAmNpwZoeqZEZcXUv1Jt413AR3wcQ6QC4tpMKPnTuMAzziZQuXtpsjd86vQ6FBJbYNYn3",
  "key19": "3CHTjrjCEYR8ogtvZtnPMf9ndky4C1Ydi2UoH2D6DjbC1y3F6EK5C3pdP76pNvzEmxWHxH3Gkecy1cDJRhKKJQKd",
  "key20": "5UnaJam4oPByWEWHBuuV8Vf4CVvWBqFizqGUNy5wCU6kZiXwyUtWA7PFD2HvtVMaNFHrM7QFsrVuCofXvSmg5C5C",
  "key21": "4bEv9q9eoYVnS16B3Rg8w7ay5T3mk9gBgJzwb1eHkshSWGrgZKjKQkx43ZpZSdToVjrvkocP4ytdh47XvUv2n6ak",
  "key22": "5411q4YyhXCnqwKS67hohU1mR833iUXd5AC46w1ty6CE5sqsCgYSxC7b4dip5JbyBcM6K6yi9VpD1M7HmczvBdNA",
  "key23": "QLHBMjHVSQDbHhKEJjRApYQFVedY2mRZZF1KdYFzv4JSj6YCKWuvc1KRdtpSjqvqAnrwAaaEjpscQQBF3tGvZ1R",
  "key24": "fdyYSpD3DKDXPkamkNSuN7q9xEqFF1B7bSaPpdTrdfz5VaRWMmXEL5kA5Sx1xdTeRn7LdQGNnBehuW7CrZ9gxjL"
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
