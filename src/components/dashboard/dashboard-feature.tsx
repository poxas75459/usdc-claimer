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
    "2tuehofuPAcGiZDQBWaEV2QtfDppng43PTtiFxon14r1M57mjf7s93aBWS2BpCsr987r6STxGHzhpANi83FiJak3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tL1pvUDM4fpruparjtNCE2h8tc8c6GescPKB1ypZ5SjTDqi7gTxKtoZndzdbG1ZcbLjNz38NroD6mMxPBKRW7f5",
  "key1": "3WNCvUjrzw35RScj8Duv27g6MxvwZaqKPhfwww8va2xdtmRZfiCE6Y8BicNo6NMbQZt16zUxPwrChQf7W4cmisYf",
  "key2": "5mU5d8L6jqvbVXX7jmZuxHRuKJcfK9mBMQKg3LFBHs57qA22RfsRpuRyKhZRq9xMxLAi26BQ4YiJJdyfwTE3p9Ps",
  "key3": "4V6XhNhLS4Ao3eGLFdLiy2qxBsdhKr1o4HrCNC23HAhgQrS5oR4k5FJaXErVwxkZbAoEWSKoneX8p13P1jT8hpPo",
  "key4": "4idK74CYM7BqACX2Eif1LpEyjXd7BgTLPLHS5dEC3bkQgkdg2v9gX7fgn6jKVrmQnpx17tMPDTMLN7BR4zvkUn6b",
  "key5": "GmLFm9P9qMABSNGMqMeKpj3Mk2PgatsmmA6uxgYnUeWjJ8kSUqQUrueA1bhszzWbC2PvaTDv3eg5EaQ5sz3ogCY",
  "key6": "4ivDu4ehBR2KdMyaNyx7hQ4R5eHy4hJZ8K5TfqM8ziHbnNhNuHJuyS8fRp76x4PrDHNjnmCMHJCftzzaFxYWsZbu",
  "key7": "3LqFzt4Y27JF7oXi9XupA5xYvauK3d8v1qpHt2w3dUTixgomDqfFhv55YXavCs9v2TA94DmCVeDTHJ5qxLdxrJE5",
  "key8": "3ShewLLuujwKTLXtYt7s1yyQ1PiK4GvqLAr9MProDP5dshvqHwkWmbvzyRRKqZPZdX8Q12qeJNgFXVNvbuPE63iZ",
  "key9": "4EYkADvT6dYiZBTA1xomoQMgFPdscikEcTpMQqE4o6f4Fbo5hc5oPaJTsFPWbtbYnYYtXcst21JrD6sTBfRBwSZf",
  "key10": "E7UMnwUUJx9HqXyS3Kra8sMMPHXipRdjVJ41V2CuL7FzidZFTWdS6RZYEknDpa2nQbwNEqaMdZB4koUvhwpi8vD",
  "key11": "1YLLaSdqHzTNvNHmP9Bz1xxbny8vAk9f1DqDfHTmZoAafbk7v64xjr2qYD9wjVA5todbpgMdsYiVpvBkfjX6o8h",
  "key12": "YN4bD7LMgtgMKpiT8ECZuQ4oKxvgE9WtttbBwuQYzYsGhQJ3gLwPci5y8NnHspnvGRZeUnWdMD1ye6Pm8V6hHHE",
  "key13": "u6ZadxDi3K8PBFQBTGrGeb716QxfBLc7Fm6uezG67GeyMXE12RTx5RCdjwYkaBueB3NQ2VeA6qSzT56QqUhiVRF",
  "key14": "HJZd1nXWsT2x2Hy3pirZgrZA9H2HQY9N3oTFfCJtb5EXrLnBiSKzycfJDpDqgC8uVzHwA4qTAYSxPbwd8sSkDbM",
  "key15": "2J6GiZ7C5fq3ARHkUfpiZi8HbSBJhwYVfKhCHgQQEYwAY9NTPZNd6fsumZmtHkazzhrJg8T2CBLv2bSUMbWzakhG",
  "key16": "5CFLLRd6L9yxjajoZepwwd3cVB8gZc92X8vzqCpezkjDvqAc2yjK9Sv1FbCKfpBZaFSJz6TKLZ3XEU3uT5dfWpfJ",
  "key17": "4m7FtYHf5R4urST8sXyBkyuB8LftwceLmQTfM7C8kpPXT1ZDwcTiCfvCtnsD22KaYoq513ZJMAzH9d4S3pomuTcU",
  "key18": "4Wxm5iPx9xFsKgwVK84fVNdPSDy8fNXtYKxgLoEhU9WHnkzvHkapUxb1aj3pSfTPLLKLNmo82CDpH8vwE9DxLxP6",
  "key19": "V8jMhosZj5LLvd2e7PjMEXxWmYdnB5ZEVB6kJnGWyK8RnBg5nJgxEYUW3SQnxGnGVih8171aQ4W6WbWP9grfscz",
  "key20": "21HDGTmVKixRxJQNMXy9MEkhRk7XRYQGhcfG8Fzc2wEP4zC4dN6QUsEnnrDAoY8qmMBUbJMRCPU6oG5ppaziMnUK",
  "key21": "5XQZmnqkFByx1HW4EyydxFLHsjHysehvb7kyGsKEEeMc7Pzt9icFdzw3pJybyM3Zp1MXDbVSPz31The7fC4jf1Xm",
  "key22": "5ot8wFrjreVzK1aWofRAMSoBGY61X1rHd9J39qff91EG3T48HLh2cDdKSxGQYN5HoUc5bTmP9zcDyBTk2aHnZN9d",
  "key23": "5Up8P3hWHs8Ycb6FjrZbbgBsGvDwk9REBxww9vb9eDFnGNMUNMevfyjX2EU1kYSx5G3nFUbPyeippnkfzYYYdnnj",
  "key24": "47mvP8xpJCVcw9omYTNCxQRadFqEmMmD6JEJwiZpHH33EFLv6NK1GJDejxw6N9VfjXHGcgv7VbzobzYKqn9h7G1e"
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
