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
    "2EbsJLCnZS1bawSti4jDe2AnvDKqmuR12cUeMjdgw4ZRveL9oHmXZEHpZtWeix5okwmAbetqoeJwxzwz8AcRwYkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29sbncmbHoN5FCcjyeDUvAqn9fofbkNLvj8zvhkquHHRL4Gx9tUcwfAoq4JiMHBq3sRcW8C88Ca3duHBet2Gnfvb",
  "key1": "fbMn4jFDz5ZjD33g7f5uiWj8tQuB8P3zyfYnpv1Jod8qiaGPYhVxjBymHWcY4eoL2KWKikRiQfsLpMFbxygUbP3",
  "key2": "qfc3BL5Y74SqARXQWAvUtGMKqKpHTu3dpLY8NwdxzULzhqCdp11xA5JALfnD7xYTviMQxCRuXu48jvRwgYEEKKb",
  "key3": "27qkfrtYpAgZ7xrvPHTN8e5zpSabu7nRnTN7FxhVRo4JRJiLZiaDAnoHTr4afxirmE4pnKG5eGGGxF35ibaFpBhD",
  "key4": "3zWK3VEcAWnhd2UWHnanVBfvtuzJaHZx4HysfYC5hVAqTaE8EiTYn86KFetjH7c4cjrg4Gvs1TWQb7KeRprPe7hZ",
  "key5": "2tnn1x59aR5HnkSXpjgNZRZB9MwgRhn7NjBt2Ycy5fbRK16QRAmsunZQMNbSmLJE6yHbaMVrukTnTgmU257gSRkn",
  "key6": "2XNHwopL2W7n8ZXLGbcU2scLGrhUpdBn7BHy81u3FxodrJ4Awko5QMbBQeyzRyitZfDdfDhrcvd1Gh632qgGDqsA",
  "key7": "mXALw2fihnqAd4kJQNyVkXmDX1Yhy7tpRswRvMC4Fa83V2FGquux2Xru9wBE7dfKhjWw6dhsu7y4R8zDKTwkEHf",
  "key8": "556qGK4XH2DdUhesfavWZieSmQmAeWwP7dw5XmEPLgh2bAg89i2kzYdJgj9Zx3wAvW6B6ryZ8MExs6sVXHnLGp9i",
  "key9": "3YfeDEYxfRbFFkj9gscYiQ6y9EH9dWw26LStiNhQdyGuePigyNNs581eUWT8hV9rh3AqFLcVcy26m55T7aX5a6JS",
  "key10": "4EKP4rp3LbwnVx1c1agFC5ct6jf1yagifhubNBK48QBevQxYCsLgNERBtTRBwJ2TtzZW1DEbU6v8mbpMsxR7mv73",
  "key11": "5NvoABXckXcCruiNLjfedxfmCcLTYKMSztbsZEr6WEdd73jMMRJqLxxtWrLBCVE1pNxvU24CKJRracbFGAR9isSi",
  "key12": "3JhmGoVc42rKWrbRivP8TMD2ssWXoeir4pj4CjHKECLEewXsvbtSkE7sH3ZDUZEgqtutJFyPjj48S39Va2HmqHF7",
  "key13": "4agErsrCMtoMvhZLu7tyK8i6vrvq1kcEa34SxrNK4uhzyaVXWrgx3DBtAuw7S6j9tLJ4rb157iMw3myoKWGPQP33",
  "key14": "4Qc71VH8gqmgo3XYh9gXWcwQMjTKUckFzr4erdkpjz7rs19sNtjfkCj1AjrfSwnNbLyQspFsmMk7tcAFajBCYP4w",
  "key15": "EtjKLXigY6Bhxz75VKtYvqVAPTWj1imcqT3igKdQt9wNS5bxhee7YmCLja5KqdE4ZHjZTkDEH8KFZQmPdPXpYyu",
  "key16": "3JqhZq7bjvFFseyduPYdjmowtakK8yibz8HD6az796SEKYjnW2D8Uq6pxteMofSsyz8TgxaxtSVqMN4u6Mo8LbPx",
  "key17": "5YWJEQbMXYuigkVG3yJLy25gRF6TPvkpHKr5PwVPmqgvG6kZ73SGFQc16g2cwSmBXBo4C1MJjf1Bknzq39fvFXtq",
  "key18": "owrstUkNYjMFgPJhp34Zzt3GnvUqCfUEHCp55ubKuqwHk2gC75FYxNxk3g9gYHVBcxJbjc9BUmtjVdQBJ8Tk9D3",
  "key19": "3CJxK6qGUs7t8po88YNRe2SL5qHF332kPmii23JKKq8ND9qLwMP7YuBGPdqvphwzkSKPgghjTQNBCv6ShBnHpPYy",
  "key20": "3qY5yTuugL1ux87tCrxBPEu8s6Yvvvv6XqyWab2MDczf2z9FBFr5nEhB4v3SrFPKqq5bbsAMLCuHj3mV7k4R9yZK",
  "key21": "WFukieDf669CRSqxUi4Zy7CeeK9xAU2WV2n3PgrVRRZn2iWCoRbYQzeB3RQSpxdMNhXM3utquR4WDTxxfH9j1ys",
  "key22": "5gve5pgiKhCtSFEFZJevCW8uF1jVGBXLoeTJKRoWxVqitdGctTZZq2oY3Z9DLgEJ2Q6EseJXAgePRGMTpZwB2qCd",
  "key23": "anv2yve3Me9HmQvBubZRZKVe5xTvEtdxJgqat6eyL2p1evv7UDG8LkkAtaKeLGBgLtqnj97yNLYYQcnSTzYhBvn",
  "key24": "3rXwfx1FpNAd827KpjCQj8XMBSm5kQ8aMovVrazeNT6mbCMqpN3wazW8RQn2PeD75U48DwCS5SkHL7CzYBjqYkmo",
  "key25": "4zPg2TwoToUj84KnnFAWTKoJDUE3UejpEgv68tsHgrJxWiTcJxLP4JfY3SQkZW4snDmTtTf9UeMaGenbL9xAbfd1",
  "key26": "5jsT6Q4exdnhzGfjKLDaf8B8pgL3NY6QRKSKSLgYi2YQmCaMHER8jo23uPCsh2iJEbo3Nw47icxWNL8qUxzGHgRE",
  "key27": "3qUXdP8oyL6MveA9AbuTEpP4R29FQTnkEhzLmM4x5adgJWbUhpJwyY1okc26EnRPCamaM9wB32NP4S7CR6Fj7YcV",
  "key28": "z32LhuiMrPNTT51P7XUnP1VXmoHds14CCnG9kwgeG2yUMaXGPSTQ1attHQ27LSbfczZ4Ny6KMCKZZeE9brzBEuR"
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
