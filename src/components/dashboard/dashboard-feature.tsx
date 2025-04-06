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
    "5cPodPX2sXQzbDrEXuczs1fphnWtHwfX9YRuHZycd7Re3SLLmSJshSVETyspTSxMZdQNFWFEkkikaxytKsqCsTMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vcrVgussmB8yNR3HLQWPLUAxzggtP9CdG4PGKXHthothLvc2MLTxD9ED9rNN6xGW2cGquRYEcSgHz57VznMcmiZ",
  "key1": "2qrhzxgmapKoXw5Sb9Vpfhz3LbvuKcXwwDnbHfnvCGiPtp7nyb99WCRWKFWf92eRHkN6tzvraSjgywk7g3QqeUTK",
  "key2": "PwhHgwDm23ypddYxqxEzZ8j8B1VaBKHevRMmXaqDvKWHks6uRR4M6pL21g1iDMAgbPLuKJkMCEaQd9erFmnxqwX",
  "key3": "2z6dhyiiowCnmHcDdMfocu98UGd4kSW2f3YWjfmJzhgupjj5Xeas4EHJnDg6xzgRmpMR56jzFdyHw6VZb62sQN28",
  "key4": "52USabmWHqjxhypoxCk6F8JEvXaS4korWH2GAsKraX1RsxkMJeP8NB2pKYnr4ae3KAWS1HGm4XZFrBvJEh3qaFXZ",
  "key5": "ucStzwVZzteqb4QusUYmpeehL5KcaE1w978pGZ3SZFkpYrRX8zbqVkb6igoRUCDhbd7ekNHQ8ndGcvyCo4ipGwV",
  "key6": "348QQRgaNYUF4BMJrqrwAEP8JP68TYMzEWUrQ7TmddRcdJZ3dDYgDoobY2ejzRnVSNfvitzn6KoZuRt6a7P5y5EY",
  "key7": "3G1rn2C8nS455CxxXnt4ELULtBtXJcEbXCb4Tyc1jW6UniWJWbv4PdnBAuJdvLFCFWC9ft8DzCEmhpu7d7Gm9eBx",
  "key8": "4GWuL23nB4Vbd19y4QqisL13xkpDWs5KzE2yG61YgFC5xmHA3iVFZpyneHSA88WNaEQQJTMuNxqJca64CHgCvStz",
  "key9": "29XB9D8xV8qvGC2TvRYexL1mU41kX93YSmB483ogc2drhfBFw9h4W3AidnGN8eVs1vBmj1rmFo57RVZiYf6fqfmB",
  "key10": "4Mz6Bn9NQAaR4BdZpw23KymqxbKuZc3YQMQVhQRKsKmB2pchmdyDG5V5JQwnL9Ns9AfUtP2Bks3ewM4FVJgJJvXK",
  "key11": "3MFm1DHi5hFJnbDBQtRtZep8bpYRQkJR3FB47uDNbrzpiCTF48vqK9DcQqJoLib5XRvxdUnSKY2uXeAG2iMX3Zej",
  "key12": "sp8wZzD3a36tDkvYdyjBDfAVby1PU7HZXkL8kkWctaADMUtBhH1NpYcjq5M41JbRQsvYrHHJ7qyYvA8mXZZMkmB",
  "key13": "cniA6n6jrrFg454bEsxXbpr8FSnfWKxptGx3Cb3sAe14ET6XEXckzZebHVTgQQ8zHuqbzyMniobDYvgTJdmcv74",
  "key14": "KD7HgtHpwXfaTTNxRXe64jytvsjc3gPa3XTFPGu7WuKNX6g1AoL5iHCdK89qRLymvzYVqmGnxU9EkVzcmamQ19C",
  "key15": "5yp7eijg33ezSJhsMyiF5BXxc8JfMb7A6SKToPVsyvFCNDPejtJdipsjx3ZQfdxocyDG6NUS1EThkpGPqodAhrDz",
  "key16": "5jVDLhpskmtAw23YZfbdGCfprq26399YX6UQJg1QGGvoiYm8LFXB1eazx6iBL9pNYLnuvBg5ZwY5oDr4kKx8Qjoc",
  "key17": "3LU2XzE6YizP5Viu2TMwUbYZBsPgFU5Xi9Ciy6yfoFNJ573VQCzF1kmY82ctH33iH4bW85gPCfgkfFsB1AJaCJQK",
  "key18": "46CNSd2AJNdVN6hM1WjsFyKGAoTgSGUU7bzn6WkQMn9WrHuM1G4DfLGTiNU7pRAsCT6CTBE4mioV3YfoFJQmVTMV",
  "key19": "5eVGggwCPhBCoEqgc2LAAikTjCCjESxtFAsCoyS279EKNYr9hsbRumKsvC9muT9iFKbM1fUvhRPkC1XahanoeLL5",
  "key20": "4N9NvvVMp6DVeGoS5mmGWD1dVj8fzrf9bDq1nfnAXimCWYL8ktxg9XX3NJxASGbdwQFcwFMrrxsweTyAt2U7a9o",
  "key21": "3dLQZL8UNo1bKzcAVG3kuUXCMgYhxHbeZFY4mLmEVZ91Wemiw4A3Na7G98nJDLEbMHZuuF4Gp9ZvDdPqNF7a6eYn",
  "key22": "2eorkW5m4gS2pBn5v3o7ufGWASQLXfNFxNQjPciz5BPzpfZPC4wb7FouezuqXrZ3zXdYkQzHjjUsBkpdQPNmZsVJ",
  "key23": "GBaVWtb3ox2DMDp6weazE1QLhCJkA97RCRG63FhnEmYegone2ws6vqLDfGXUCiGJJMFt88XJZ1imbjCfKxEmiGh",
  "key24": "2f9Zu732ACsyBUZwtdLvSdYUX4F5rAtZSM9HwG3Abvsp1F8xpdAktdwHiin65EL3wgMyhopJgLujxpiMvYtkNxou",
  "key25": "24m4m45wsvaqCsKNYq9EqvzghuTwZ5KoZXj9gkvAaYjJwC4y29CQZzpaw6dCATKAkT4khgwzkgC5u3FXC6SWzocF",
  "key26": "YyigrWeFRM2tPnqSTi9Nq7GmVdRYojSxbx4nfPS7su7ZskWHr1SiWmF38Rn9WaBpDdaVr8XgkgTxoU89wvsLfFF",
  "key27": "8EQuzv8SEAcPrTXE28wm3NnQpgHn69dEqqgVzTLUt9tDsBHttJkgxZSWd8YCALj2zh8uERtyMqBXSCdUVuvz8je",
  "key28": "43Qn35Dog2zMQPFJXo7cixcnF4STGtyAvHEnAFQZCnrnzFBdoZQVZ9trPmoxKofwNvUmfqoAAVr9qW1LUddmu516",
  "key29": "5tJuGCzrYX7bEAwTDpvUg1Em5EVRUAAEvJSgYhmHBhSrknwcRCSnnvTw9KKiZ3ffkmeZ3dzmeVLAR37XuL9bTCo4",
  "key30": "4eQkf3bDryD1nfUfeptELiesLwTrv6h33cwQ5rfFs13HaEe2ZNrZCnHPfLJ76oz9aDYTTLuuxFVYwCBFDLxrdxd5"
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
