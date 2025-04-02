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
    "3KE7WQKY3zjtzsmgdSirN1k3mukrHrN12W9aVNPR66tbs43HyBiexqdQQ3fjy34L79JfDnnQsFUm56bGqy91qn2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHs1Y6EjKd1vkg4qQJeP3hfM6refqR1ajgqzCAEbpGsbSwrtvPaVEzunajF6W1AbPeEouftwsdv2RE6swygZok2",
  "key1": "4VGgaCXHGBPcYnKNmaSP3DvpZeu5GKeutTpF4rgVT7YpG2mbpqCwxX9N8X7X5qGq9JL4FZUNHR2zPMKNvk7EFZcm",
  "key2": "3MjUST8B24RzmK749nWdN25qU5vgVBn2NXHEpuN2pRHLE9QiVfRRDMzT9kygeEQqHRhNXaRAZvcQwvYXTNauJd1k",
  "key3": "S5cXh3ecGDdD11o6RYDg3K8mvq6JnzrRJCs3ZMRSueYb2ZDHWwWZW3mkasVD3j7NadGWMMSG5Dtb1n7smyEDPy7",
  "key4": "3Nuarvt3qujiSKmeaTWWWhU5tsvKaTENpYHdA1z8Cq7S496UYgW83SaopDXppQUVFEKMvZyaZWDzk8VzBr6nrUsY",
  "key5": "9xHcPPWC758A9ukGsHGwboC2S1f79DJcFgRV87jdd87QaGBgvy6Am4ddPt5AUDMaQdtUBcSRxNoccKNnjh82zJU",
  "key6": "2CS9XN2cNsBfkZNqtarrQCgKR2fTyso9CAx3ub6vFaucG7VVuLYc3oFokhtxQo2F27xVFmop42g51jViAsY7Pqj4",
  "key7": "2rxBkcuVP2oew8Xf6EYZnd2KsLjyEkFbXVxd3HxteERgKNeR8DnjYhZtGuSTHtyuHfxGhNWhRUN3RcNc5UQjn8Ns",
  "key8": "cYGPUi5LUaYs29ciT4r7U9DEjqExceGW7KLkH9hG38Gj8gpWQcpjAm3MdeoU6uDv5APBL2qYKMGgJYtbWpSB3Gr",
  "key9": "ZuNqWZBEWgfjQdYfx5drxygcYyxDBe17yxMtcVkavhvbyjkuAZ4eQfepC4Cee2sZXE3D6ff2ePKMgkLdbNsquSH",
  "key10": "2qFzPKLUzZFn5CRhbGuBJgzjnVKubYXmxoac4EtjVn1jWZtS25GmWKc1PmKYL1NdnSW5tpVmdY81NQEDZe4vpkps",
  "key11": "32ocefeKh6jDvzQ6jirp9aXnFR3zwmvhbcEEbt19SN5nPUdHitPecPCNVBzHBoQXcBPVcFcvJ7L8mr6J9oEVhTeH",
  "key12": "4Urze26knhhcZkta2doW43fupS8kQExvX1wDnsB7V12FVx7HR6FeTaao4LoBEmvuMGGsUJ9WzXjGE2QDW29n9HHh",
  "key13": "dqvxu2U3XxmuJrin4ihaaaKooPUrMQEu9nj4dQohcfNG8D3MPHN8GCg6wJqWC3HEA53bBz6Fcv8AXYC9AsVnd1i",
  "key14": "3yLfpxXgF5UiSqYE6qUoNnBh7wziz86HMQFqZwRPrKGE5J8t2XqpCjDy6ZDwW4bqH7FM7S7Vvini8pR6uv8ZLFC9",
  "key15": "2nm3E4kLY4nZus2snaDZ2G5FVSfHqRZDjHmMGjETnYDH2Fi1ec1y7pqEzyWxWDPhT9dM5xPKY9gZF8MCzZ3anMZ5",
  "key16": "3ucDQ1L4bQQBdBk7yrD6jg4ED68vzKYaFFRMWzpSh9mEQyVGNWkLuzocqo65FvYcJjrzUeY1GmCYyWxz12uQepz9",
  "key17": "4C2SQsSZWhjVXE6xbtr2Ux6Du6bp1rkmbw1nWWnPeoEKwnNQbR3fPmn4s4WqeFnufYCQGiUBuNsngyGhbNCGD1Su",
  "key18": "TqJZsRWwidiEDTNdThaH7nUaBnKY3UTWQSGmRiBx1KyepDxNjg114k16na4nVyGKvHmNP2pFoGzxp9ri5sjSJm6",
  "key19": "4FgHeAvbSZU3ecRxyHSMaCfFuYyPaoGUMXzWbSR9KASFz5VudwhPUGDeMtS1CxML3xWvqyKiBTbyRxCq86xtt9VK",
  "key20": "34TCgjkhRFCpZhSGTaUwP42HVDZnNdjbiSGVBKmH2Q53ku3rw2DDBZEARQzhGafq8V9NDn2erWgtRp9fKXiLtG4N",
  "key21": "5MHYG2a6R7CMMN1ZqrbuGChxn2AUejXgdKqshbbCvWWCfZmjPcZmPvVaiEYLnu3CqphxzugU2Nn2n3qPyoTSybgb",
  "key22": "29dTgNRRVz63rzxjsNXPVFxq2f2vHjySZb6q7NMGbwLMjgGEvNWP2fKrrHz55qVh3azUdgNe2mrxwdGsXoLhgHdB",
  "key23": "2mZ1NLbGq3tTB9ZBSJ2jGNcTpG5bZ1Yj35Tkb8e77usMUCSjT5UhpD5WdCa7LvUs8QMVgKPCNsinxV9s753hj5WL",
  "key24": "2z41WQBnBAhoDtJEXTFqrcdseLEDiMfHB1FQsfoEQPQRgrjuxw6pzcuh3EjSQycXswgSsTzrPiDKCvrLguKuUFCe",
  "key25": "3FyGNiaXetFa8A5yWTeCn1VX9NNJnn3VoAVsoj4hJb8hYNcZgmZDWDcK2dy15scu57E3PDVqwYBMVWuTq1v6DdWh",
  "key26": "5hCL98dQpyd3kELMhkJUmuudShBBYJonN5xpDQH9EqLQpSNXhZ6hvZNGChY3MrvMEogzE3ZnVXRwBeEYR7qtzGyg",
  "key27": "GoTTePGeqmiSABXV7jYse3T6wwNgppZJ9gGPcas3sCpGvf1Adun7foALXNLudB9nUyAq77nF3hmRKVzmLYSpkLY",
  "key28": "5K8YzZSxNYoMB3PzxYy3WV5c5tiAYmzcEeodnD3LzF41kH167iGXaPh8M2bBojqGCXwwGNaamhPHucsKfgqhnwrM"
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
