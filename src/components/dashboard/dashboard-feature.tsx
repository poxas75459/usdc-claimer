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
    "5UX4hh2Bx1ANFYhtCnR5aVWcHX4vCK6PszVyEvPwYbrEqfxTqTfb3AgsQEVjxKvMYJY31GUwubuT2hBcWZfguYG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gn6SA8u6UgA1EZxDc8hxMVGvRoNK8VRvgdZvGqTkshYmZcpXuRvGiKwD78J3AFbcAMc3pAgEB2FB1vmpPmeo3Fg",
  "key1": "3aQ7VhWwVPzhz9u8seqZNdbunuBGXUk5M7pSPiYQT1En4HA82cZa6oi4GNxZ8gxjXukPCHjdafEumdA8G5AkqXjn",
  "key2": "kKHZkyz55zrB6B6L1jXJxbqH9qAUZhtegN3yMo3Z2iegBDRVf3sXtMK5SdTAdpyp98D9BCfM2Xm7sTULgQE8eTB",
  "key3": "3ugmDfgiuk2uWH3gM1bKKBGdnzSM4v3dRG8GtRcvUVrffRPdPmi6H1oFCfep6MWgU4SHtwXfPfKaAR867QFFxq2G",
  "key4": "3woC59iSLvUvE2mxcQw25sNtgS3P8vPg77G3RALSNzF9y2UowZ4m6VXrGu7WWS4KVS3V7aXLiJKggT4rrqDYp6Zt",
  "key5": "4tEjLosBzxvao4HEBkn2zEvZ6d276D2qNdM5Ec313iqFBGzK1AZ2KGxDRx1MBwnSQyqRnBrDrETwK5j1ifrHzQuq",
  "key6": "2c2vJzkQXNKxRHB3zYQXx6EFpu7odaxS8uXY8JAnvQhJqb9hXDZ5s3aWFaJMjZMeNot4o3rzEvvi8X3mHpTeZS4d",
  "key7": "62NYbXfMYTjinw8PoVKVj1Czqr2ARobGAx3b8oTJg9Ub62comRo4LmKb2D8RNF8bqHdTuau5MJaFRfAfKdgwXLnw",
  "key8": "4Seq78D71s28tV3hgRuhNbuCwCTvFcbViqLM6unqSvEiHv1TUiQxoZuaFg7U5KdKeRVnypfHPAuwHXSMVFb7dZ9P",
  "key9": "3wJT3Tb1x71zmmLqhn4y8k8TTnwaGN9ToHe7Z2pyniUB9QiUr9rCuqVrRhs1cxbtCVqHyR1aBNQ1bt8GjXyZgWRA",
  "key10": "PzisSmMXvrpARAuEkfnEkJeoGtKYWFRXRGN4dSS3ozbidVkHohf9BixCMmacRDSztyHfngsR7BY8AeuxB9Nkwjy",
  "key11": "2tzSSCCL4SVr9rTL7hc5b1AWf828Qu2z6LaicALwkvgCzxTUacQv6NufpZ1LStgWzUifEwpP3fVnFfYmW1fyVzc9",
  "key12": "4ocJ4k84RZoVyPu2hUwXMgBbh3sS3PXFQHf1vCwJs5faU51h15g99eQ9ZPHXNT7vw6ty5oJsBg63yg3L15buuUhW",
  "key13": "35XEyBLWbLL6ueFQbkuUE46EWCGD49wQb7Aa1ULNwtJoV3GLVytkQuA82JBQsU25hchCqtbzSmnnT5ScArv3m2pA",
  "key14": "47Ru9gLeSYLCZyJcbexjY2Zrqn5W7aASf3QFAnYczsV1hoGCwqcB9CFJtXrcovwjBWeRAuV5bxC58QV7hwi557Hi",
  "key15": "64YFrmoM613BEMiaKqaSQB5yCCFb7ngH5gLFirkxdaAZo5HNyr6xrJfR1p13WzGWipxRNebWH3nXexn58qtXWvMs",
  "key16": "fsxMiqNLsKvwaU3Jo9VUQLYEf7pV9ZQUbbLPqDVQfNqVV6Mq9mNg2Z1NhxczP1CYm9WssusH1xk9Ub6mjyrFzrg",
  "key17": "4ku9VHibmuKS3uDHLuJaw4uyHv6NmaMGWLW75JgMGQsjJtfgRijbF7uGXJw21S7EDMHfpXDqfoaGnAyH76M8aY1C",
  "key18": "3iTK7fdEm66ZyLzStKbXC3anyenqSkSoRF1bX2WgXbB8kdNEPDxEoDntPUfKJJ8ci5frU3rxSZvTdRLCn5N72J1c",
  "key19": "3vsJWCs9uNbqPUgQRBQ2en6qPimLC715ysqMNMcGVKqyX5aNBF6YVHCMLbBnBmoYunibC4aLCZfVb6ieGSy3YKZ8",
  "key20": "5ejV3TsbBkxUh4EYXmVAqgJVfqrGdWcsnKouUqqBB15fs1bvD7KtpwDiLMQri8FNkQwsBuDDbavMPwx27MnacvtJ",
  "key21": "5asVUN6Fszr96aKa4BB5jpK9jn61LiCMxPfBJzmATexdgBALjhBAH5ujJAdoCfRRuaiXG4H9zVqehRFmWCcnL33g",
  "key22": "32vAMTgL5UdyL2ePri7gFWsAX35f9Hnxby9mF2R1v4M9S1KaMqR5kK43cE4MYUkdsBjn2jc95bWW2UD9rKwdmm2U",
  "key23": "4v2QZoG2z3VTpthQjgM91DEQNG4mMfudo1a64FZx6EpYSzyKkv2T3ggR7hVxV9AhFYQAK46NhBWHg1bMx4sbzm9s",
  "key24": "25DQcHP8JYGYaW6cSSrkCdgZNimPP38Wb4iLVMDw1fXthefhQZmmPU2b6UwfXVb3Ddvi4hDoWt7Ymkci9xcQWvME",
  "key25": "3WWBjUi3EHWJfEqMwanmfWSnjuDPKrUqnA2WPQcrN7b1rHiitmzgMj1b4ociFywefCqUGn6D3AeXKskFCFYkkqro",
  "key26": "HpPNfyYTFTH6AW2ai3bEwTUPWokT5bkFCiXCpMQEiUHi3JveVyvdxcxkyuYRuNznpqrrV3nfMtFbgagLM1JRa9P",
  "key27": "xqyjb32p8p2FY7gtm2Q7DymhuhNqAPN7pHQ1UhXbU2SYtwp9eWtUfvoXz14XbXnMCQq4BbeQNjXqQWWuP2GeSib",
  "key28": "5j9dGxcsexWTUVKUzc7BSTmpPTPKpjSieTqeSfB3D1fjwNesdt5q2Rx9NWARfwG2vVLdGgGxtPKrQoJ1EqsN43Ax",
  "key29": "58NDPdC3YXhXAfFVALLnD8EQ53v3ezLYarUrHrrrdmSBaXawC3hYf75Hyj3JhxdXmftpUkQRYYqaCxZtqB7QpAqA",
  "key30": "3iUU5tEdEhLf7ggNLxsr8S4aGNSCKDjNW1MxgAyDYAAJ9wrKEXTaJXXc6DCMc3Ln8hoTEGdnN6ezVhuPG4tQxok5",
  "key31": "3qHJ4kNNLpk8aotrZaU2V4vFX2EAU6S7qKkBaGU6dHifBiDZ4MGg6uv3WEGqxmLEM3LAurDiWEvmzdb8LQTsbZNM",
  "key32": "3GeQcyLA6r48ezAQPJbRANS2s2DLvfYQLf4obsr5xjKc1sTnhR6SS4X6VzTf3BoApuoVVXP7kch7HoGvYVyJNrpa",
  "key33": "4h3B3z97gtEyjG57p7EWN1UoC6SUG4Hqz9j9xpgMe5Rmt6dMDBcB4pB1nbZEpcKscdjU8WhqVwpFuKxS7zr7c86W",
  "key34": "2wfLwvMyFzfGskwARvNx5jUJEXjDdxH8HChmF1PKVppCPKfSF4dEDXJaduZDaNHNVyt8Et5YiC4JhYsg9CXBUy3W"
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
