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
    "3NDacHPmokSbTJeYCxQsUnXjR8jnJHLf7x1GZFKBJkLRiDDZep5o8ZoNhhB1hFXYEEgNtWNfytBhnLxbPffYbh8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjeidMBqrHcDe3r6okhTgzAtw1RdvjdVMF31WPQ8A8WsjGX8DuKjtFixS4HRvkeRcKdeWPZk3hyQbsXfqtLdRUJ",
  "key1": "GnNbeH7giCXRjPKV8HsB2wnm6RaZfqfipttcbRocVbjnxuL8T5AtiXTwFxe9pshPboSznTbv1pADkMYNtQDgrmq",
  "key2": "5ArPyxZgvZ5bpDo3dvy3s2kSo6duqPtAQbjBpaAxfvCZug7hC5eaaKf3fzXEgtu38KaYRpNDbUUYDr69x9Av82bc",
  "key3": "3cqZ7t74HY32Ph18sNiviyT7T2YrfPUAKf3ykgDSFe5ueR1To7hkV2nTi8hGx5RRnaJnJdbYziQYq4goAa6qQRFZ",
  "key4": "33dqM3GAhbz8iw8aR1pmA8t4WniDSyiRadH7RH1633Z4cJQuDxE5MDfw74JyngyNLxcoZdAtVY3AfSMTi6WEJ8T7",
  "key5": "2Ed44BGZXv75zXdooJa9sPm5nGzA3jPYyTHM2n8wYbLoUboDbrWfc1zyHwePvS3XwEwrG3TK5HwXhaZp7P1g9Jxy",
  "key6": "2vJAVSj4FkJkiLysf14vWneEKTWzdDqcVTGcZkS47xXvSwHAprS3RYxkZVi4ZBBGu8kGKywU8feHVXvrMX6EmPV8",
  "key7": "5VLvQwcbBCoDCRMCUBE5YDAmEwnCWEn5k2u7SyY8agsx11kvfjQavZr9nFSFEp4ztRLPy4Mb6m3H1hzHZNkudXfy",
  "key8": "UD6RLLi6UhZndGhQRZekhnY3PTSF34DGYq4nfh5HURfTTwyWC16MHykzD8KtUbh9oxFA9bEyBBLSLUMTGXtdiac",
  "key9": "3FEje7rgsJGcpb7esmEXbyeMj9Fg3dmw6RCS14QZnobvHzqYRCL9rTrp7ymMtMTZBDkiEVmmNcYADoUk8zdCGwMN",
  "key10": "5LyomMCCywR756mUJSTnS1wYJSiUcJX7tGsP8isC1XaNWiC3Np2njrcaBEHoNPGfGKWTnHBVuXmcatHZy7ha6Ln3",
  "key11": "bEUYDhoNzk3ApnrTE3xEbTbZXAa8dUAsxF4Tp4xNASnyMyNEWK8YUsc6ZzYSXELgBoLsdTPNEqr1ZV8iETLudRN",
  "key12": "EAfZj1GNDAxA5NnabFnhNvfYBa1BFnJSfcgVehroy1addBf11AbLGhAEB5JP6GNwihGdhUQZ4PepVJ5HSTz71mT",
  "key13": "35J5s4LBmkkK9Mb3JikmFaEK7GjZrFsi1yzr1y4pv4arphc4CPU71bWforB15G3f6KNnBWp9KJCHLcEb2tugo34H",
  "key14": "5rbAEh2bE9Y4jtp5zGbkGrRD9ihcbRGnTpkGF8bMcKkVYL5o3YnfVAncsW1k8FxWENDkZMQr32uPDXXCyq1VQu5H",
  "key15": "6ZACbv8JWobFV5zAsqaRpj3Qv4nWxcZtqpCYsiuNPPKXqYHBwcnRvkR5KmVwMie2CF3nT1CVKDEKVJtcbytrvVK",
  "key16": "49JDe3g6vBF9Hxbu7agDv7rm1Mjk42vatxrBE5ACBbW1C4bAsGLwsdj6jnu2PXiBizLyUU41BttTtq65epgEdf9a",
  "key17": "4nZMfHnH4psoFj4kDMKad7Fy7m8AZFmWdxm2Zq7b52HyRVg2UhQ1KxorRQKB5XQ4Pwo3RT4dVQerzw2ibhur3Tod",
  "key18": "3XUF7Pxz6W6CLdoLGfFhHstwB8oCn1ZTTZ5zgep7uxdszWYU9sveMg4nQHqtXq18jd5LY7ANXTsWuM2PvxgML3Ha",
  "key19": "2LrwXjz4hUNR2fmj2seyseUuEBnJxxdCcgQQdLScrfy1SqnEqa1nZYfHeGgfLNWbEb2GeFz4dUCSmSR6nR2d9YRN",
  "key20": "21ZyM1mbgGHHtpLwoyYRw8Gw9JVi16yvCjmPUAAi7JtaKZkCmiWMPiBhSoSn5PWMvHxJLXxoWQ882Csi84p7rmBd",
  "key21": "uWUB7FVcp8mbfc4ikx3DSTWN9bjmqjHQxHU47H4ZuaTDU3MyRJ4ZWmdJs6PaAtURV9SJ2pvsxzrGApbaFRJ9Z5g",
  "key22": "5WYW9FWwzsqRmrrZMLsbzSic9pFpuNnT3i1vEyEVkDPeDQLQYtP3PSqLG7DpKXeB1J3yUomiZgygkcaYiiib4FkY",
  "key23": "3UPyzcPvZMRiXPR2PCCJxNXtJP6hTsTf5mi5uE6hibUS4tUfVJzxkKM9NMzNueHmYAxNEZrpi6QMKqhTBV6Rv66G",
  "key24": "5KqZV4cDvLvTLrnNpw5NMB5Xha53aQFV1xz4GW1DZvVD9BFGsjstBWqgQCEx5wHNymE6ZgyFJwRrKCkqawWX5WJA"
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
