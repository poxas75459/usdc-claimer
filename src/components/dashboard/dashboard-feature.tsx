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
    "5teBL4Qyap6uvtdvPMXDQRu2Y77h4YR16QQYGTVsYo7HRkAAMCYZYxEFj6ZWiPR1X9LRdzJVRjg2TMVwoKFdZrGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S34w8JdeSGwTijf2c6BULffCdNVGRcwWvrVGtTbeBEyRHUoVePeHPFcnpQJcQzebTEmDEQTRsTqvVJ9Se3hxq1R",
  "key1": "2gXajbwYuMLWTts3fdx9sxuxTUa2XR1LPnuXmwEwXwWZ8QKm9wfV1HGodQ7T4K2jKGBhrifKoKPV5oxNMuN4Jqe2",
  "key2": "5CSRsfRgLroyRUCGhnHWVejtvCkK33pKy5m81MnYkL1ocoZb6UrX89qUthR5KgE1W8NLr74cdVdr58XmF5KqxXuc",
  "key3": "54tPRUfypaGB2XgfErV9j7a13UDbxFjtPodJVec82ewvzL4HxcGPyjnoeM3aYwnqRNpRFoEoefbVS5JEyz2gGFes",
  "key4": "2qWaLHG5FnwoHcttfhjE8Q4wSmq2mrauHSKPBAY5uWiDHGEiVGbVEndGLkDDhcYxbPAkPEmDcDwp29uaDWJPbho4",
  "key5": "4VhUKZCKd8ybPs8V66R5k3JHpmtoFmYVx8vEzs3GW28ByRVwL1x6axRvzqEa8QveB9fmPJtd5WYKeKWkBXchrx35",
  "key6": "5V8iU5mJ1i5jp7idNx3MNHsw3khNPewJ3LZcCUnhmdWE9QXPRx5ct5iq7JHx75fviHVrte5Q7rVkajRKj6GYMvYq",
  "key7": "2bVUroHyRYkKExwGLK6EL5fzoQ2uWzXAZGLw8G4sAKPoVkinLenKefS7fQGNaAfM7DA8mqr14QVTcZY6vAYUNSQd",
  "key8": "4V7FxezFuWkGJkrn5uoLF6WKNoXBhERneGmU2wxq2wLL3mQTSjn4kejWMwecWKbEHKqAq91dBah3P9B3EqAtv9Hw",
  "key9": "21DWQXGzzF77yYTkwmzKLEKxt391hDPPpRhjtfJFxz9bffNx37bYXF4WDoVYdDdrRd2rxGgFRVqaim6EPRtog6tL",
  "key10": "3Cx4StSuSr1wP9KZGtp1cWKd6ZmYCLQy7nmcACSMocVSSRBPj3puMzg44hozcGRzgbfx6wmPy15iCiPemyWhdfRW",
  "key11": "26QdXHNBc68fNaQja1ByoiAutvfrKkJKMjmUjFhxzwvudCBRqfuqnytp6VgxyUqA3onQWt69GVc3ztqyqHakRLi7",
  "key12": "2VmR7vBZCMPPZCocEkN1cPxBzpDxHM5PMr8XajjwwcXdwGEjYRzD99LpCycJmXMbn7QuP3ZVUhaFQHABJFboLvF6",
  "key13": "2JTyBMceUkfdMfe5kAucLFfqvkhvsMe7dEdctoNrrspqn9K1Wtsovc6WnCtHBX3wvCo6pCWRArw9bCXmdM57aBKH",
  "key14": "3S8pEk1WYcy3yhzVbfL6T1tdmhKa3d86ub1s4YcJymioeGXyj9FtrCMgXNUfxkk8DCHjyR1fs9yHCeRhi68m2cqv",
  "key15": "31ub2kk9SoG7sek5Asp4cW3yRSq6EREdcUXrhoefJ7Wdfk5qTtg2MGGq1Q1w1kQzesasHupWFzzB1WQq8pU5W3Wn",
  "key16": "2rEcx1mCDHnPuNckk8EaYVmvzywsyJEnKkjrN5cRCCxjaS7cwhycag1nSn9o5CofcmrtQfziRvYu9e4cWdJS2EV2",
  "key17": "48BhJd5dc9MLbMU3sQZcEjwXYh46h3XhiuQ77aTtGYA8FBzNuREQnw9LARS39PQN9g3AK4fBJAsxwh7ZKe3iCwrQ",
  "key18": "36cJKWeyh9yZd1ACyScPWD1BNCwcrgu258qFBFqbinmd1LuuecFiB3d8VjrqpXDm1e3EZJHrUBiqvpCu4xJt9Cd5",
  "key19": "4qJgGGZLkRvFb9X7WnDzgZd1zvNjFxMXSA3zZkoTzR8meUTouaiTRpatHSYATTfGuN7HKhZELJTTR7V9Nr4jpr6i",
  "key20": "aeNvQdhP8c3G5yHVm13yqoZN8mN35rwoS2CszDfVhoK8Whxcq6GRiXKYiDzbVx5sHdnUHuH1eBhAZRz6EDtGJzX",
  "key21": "2cXqH4S73W8fCWvhTisBGm2g3jKBkJcKmSALbSHqCN4oczmGTLVKxG9s2D5c7fKfaeBCJ6QK6C3LGzabawkrqPLA",
  "key22": "3M5grx3yRK4JAXYcgBJuYo59QiMEybHD6gsfY9esmtVe4ZWHusS1rZi29c5Sfc49uHd5RxPSpQ8bdbu1Q7eCjLYj",
  "key23": "vUznosH2UDCTzhQgLaUSzoDtBo6Ka3ARXTgTFiyTxrzC83NWr58zw9FmdbpMyfw5JG2GBZcCPJZK6tor1e7FLep",
  "key24": "kGzf22DUe9pXUVsaR66x52doi1PkTwtetJHyM8mUhzQDbskDAREejkyzSBf9YVKmbKcoLYhYZqKMN9NmYyFpwDi",
  "key25": "51e5NTuVC38YHnbNtYdhQnhE5LEDPTe6CTiCdZypPngUEtxLXjJnu6K5n9vfpSiR9n4oMDnBuFUNu2pfyrNCznKz"
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
