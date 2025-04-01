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
    "3MhEFShe4EcKRmF99RH2DiZrcidiZKzMmn739gMgisB98nhYdwHKgPe1GNVeXj8KH1e4eFsAPkRUTFAFEHNn1o9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeiXa3RsQvMAdgB6YQzNpKjFUZTGrN4B6CvTsoQAMHtQGYsAaNEt7qvCibtYm98hR53c62vM55euNF6qobURy4K",
  "key1": "2D3vc4VxgrabnNZ8KYKAXAAwDpNRJteoahfVGMhAqckmfxQB16ALneF2c6vT7DGFTTvU9mh34V4rcEAs57UxrBGG",
  "key2": "46DM11nuN8bAdQZvh7ESuY6EY5FGJh2RhVUojEU3gdaRgLvcYtuERgaJPpPwc6S43wtieZwWYakxZgSM7wBXXcwB",
  "key3": "4bLhy8wYASbnKJCGdBWZqqkWPPdWkiCmDTpeqdyvsXe8CsFVvM3RqMjWPcJURANn5qPPiczp4wmo3xpani7ZQFJv",
  "key4": "5DUXi3wTCNaM7Tii62qXZqQFvtNYsiUMKqpq1fDhodGkEPjYcTzeheEmBCkpzoTb8mwmM2zb8rMue2U7UNBKE5XN",
  "key5": "3LfCjaUD3NHEbAe1XTxhhJSkz7Bz7zScfBPyTvQUz3v5Ftgf4UmuEyqmcnEtDjJ1jgnjza71xmk6qSDrpUvPdqAA",
  "key6": "5HHzJnnwxSZKjnEDJVEHBTHes3qku7e28SQHPu9a6Kcw36FuRMRN5aD6KfjCmskAQUu9xD5MLNDQ2VrHSFHdDca5",
  "key7": "2L2ByAZiLrvyT3ANuN4pQwnzPYZUCq3kZUY93quzuPhmUDtmMqx9kVqBZDbRSuSMHiQ8N9avgqqqLCjkJemffo2n",
  "key8": "5vVbc73jCyUdLdCJ7aPmigmmsb2urtkyvrikmsHH6qGcmKMNMWKVjvF8B1a7q1HjnX598adUN3mTCkNBXKsRLyE4",
  "key9": "UEgaDiZuUCmwKLh31WgH9ZP2qrjp3mgXpANmRbAeTKhc88g9Ac4eMWSevAaX3mNwPrXUrfogNv4YnD67e4VQytc",
  "key10": "48WHXLTm6b92XsUJBFhbvwrWkE82Kp7DuFCDkKAiudzMp6ypjcY84D4u4rxGAoxDwyut2C1gpfhSX8S8aiiLQvoM",
  "key11": "2Zq3KfcXHaH4iissozuXWx5aM7dZf3mq98r5pBy6spYEWsQAYqo6Ye6Pgjb7k7y3SBLJp6LEqZUVxRvwi2Hgzz6D",
  "key12": "jDTKniFaL3C5fPb8yYLauFBDrMZmAunRedm8e65BW9qxHddgDJB3ob5hT5vVSWG28Q2RpnXGD96Aky1ago88hBv",
  "key13": "AXLTdiU581isnhwZHPMc2EgokXf2MUZheKRytyU1oL2CQN8e3V4sSAvtr12CPiLQAhrk8bnKpRXxiifwwcpottb",
  "key14": "5Vt4YcnHzHnuVBPMwGi5fb48rtrbRuiFqZyq4FyXTy7WvttpfEEJQjMjbC2S99ak2dPw2exECpwfp2p7sp8AgFPy",
  "key15": "4GPXVjZoRwYzYWMmb9qcaWZSKg6CS8nXX3wKJJSFBK9CBqfCCB1anoiECuTwt6Cwf73QcPSwnVxyzaJj4sBi3wSM",
  "key16": "32WiSuUfXjajcSSz1QoS2XqJUPmAVjKNtN6j91KJicvjNpU8XqXR2RKCJtwUAzWM556uF8A8qYwmQFGHb6EAtewL",
  "key17": "41jYmsfh7RHMdRxdtdL9c35jUi4fjb9vXGffJ6HyHSu8pEZ7pXYy6edHPztQeZcSe9qWU4bG5dgBCkcTuiDmi2kz",
  "key18": "giJGErwXZdBniwD7yq4unvXUH9vTFLvYPu3y7aoVSAs8o3p34t7dFC3v58gVx8VdPGkZ4wiZsjK8iV9NFqKMWjo",
  "key19": "4Up7sLsxti2cBPjoRtPiJFcxvbXTrGEv5oHxqDLsxXkD3brEgmka4f7Vi2i5hhVk35aPBtebWfvxLH81gyJ2UxHp",
  "key20": "2SSrhgq89RidhmrLpNhMWAofmdVV1WnPafcBbB23Z2P9khX1W2v6beNxHq2uRaySNUsBWxVrZgfHkUr9CJCKcHma",
  "key21": "5HWEBhz3byuTCBc8YUkG9rDdM5i6HqW8tDMsN27giRpLfXBGUhjWKVB3Fi9ri7QHdma9DASUptZHYDhMo96X5jha",
  "key22": "EW7JsEWpjfhSPfY9gH24oZUi6AvoTGcoeSH6YdpdF7xBHop3vUrkdmXVBrdMDjUiShPBBDPFWnN2jkpXpB2H2sg",
  "key23": "5zJ2oT88YRoXDFN2dRFhe9kUUtveMZHysaMSBHMRyMnbiH3FhMfzo1yMYyHuyF3gAndvgNjLa4h3LQwJJHq7DhZ5",
  "key24": "s6F76rNarRgefcKkDmW1phVWjLf26AVaAg5feWGgWdh34UFXrMsFMjB9ZHWVezhhhfCFQtc9Q7xe8WxPKbf1ukd",
  "key25": "5ZHDfQagWhvevak8jYacT6zTgSBt4DbrXMsXcp8gvZXd3SyyQebwDtcF5BknRygw9uJNFJ49nGfN9gXaFe7bFFwJ",
  "key26": "3KqS3bLBJqTi1WHK1RZS338vxugSmvcS1ZbKZLyAmuU3ZabaeiqGSss1nXpuKvevkT6W7cZgYZeb7bFvfkZUoKxU",
  "key27": "5fSkueu9YkUbqQuDHB7xxs7iCvGn78B7cmBqBdGpdZ6qX6wbKPmZ8DfBfTDHe4binhdVjdwXqmdNRahb6DoxZtBd",
  "key28": "2SkmmiVXCgX7Dvtaqn1gHGGZ5ALBb3HZhRd2AFJHAGXvwP15J2pE6bwSb9SWFF1i6ohkvbMkz5X9Q8hnpZfDPRS1",
  "key29": "2ZvrmUgdWAnikUDqyaPaTwtjBREeZu1aqLFrPJxHhi2nugrBt83cjs8iACLpg7i3N58RpVviANfZHuGfkriKHEb7",
  "key30": "5SgoFMF8iufSuFvfPe8SXiLDrLjg49ih17npApNtN8GDkakcnaigrPYTFPKPDj4oCgDeo7HgDUsSuAd3BJpH59Ho",
  "key31": "4URWj2jL4GYBiRqpTyonoVc3id4vSFFHBwQUGoRDe5eoukA8nr6XYqUt9CnJT85fRqsCSMbnwWzNRCVmKFg5XgbU",
  "key32": "4JnceXw56b6fbHFMiWXYBnevApRMZwiazZSoTYEKCwhV3spxxs8L2aRM2MUiSay2YJDv37e1YDJqz88D7LFjWvNG",
  "key33": "RMVtzget3XrP22YpGHqpMpRBaEtZe2YtvuZJnMFy7Yxvg9NGxNcyxZfTSUCy2itBKJzDHqeLK18mBuz351QFQ7T",
  "key34": "2jkySgBqUDWyU63FjGRKD5RfTmYfTm5s5M2zBznwGJ7cEu9k67W3n1WZCBJbKBWL41bQY9ACzeScBXwAi3hfVV4w",
  "key35": "4sBUUAcgfKyNnBx1nHR2VQi6Wvipti6ned1tEhWvzSut7H9tJTDAZTFoyuncJJjFPBRuwpY86jnQ4U816Fzf3hXE",
  "key36": "4YWAh2e4xAjw9L7BmiHazfPRNkKtyk8kBshTcHKkoh1cE9BY2wyKroaGEdoWU2XbuW3fA1A3cAtabsSsfHMeaXE6"
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
