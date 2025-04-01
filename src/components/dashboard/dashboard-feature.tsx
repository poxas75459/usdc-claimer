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
    "28LZieoU5TqeR1hPxCtsBnExy2W64AuQKdk4Xc7Z9XCUvg5syTcv4KpBAV1PfjMa7NmAKoDanLhsMK7hv2ja5arf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAcsyMkWPyCjSdmV4dPfb2J7dfcwZTgoP7N9jcorYk4YUfC7ZC3yzEzpd4LRteuAiqF8evbRrLW5eTezKhK9xBj",
  "key1": "3EJW71dWitHWLiuc3HesDZy1EpS22FSrsjmYzsbkHGsxsswNWHyUbp4wjxP5AhSXFrPSvEwUF4zw8nhuMn5bktwW",
  "key2": "2GcGkYcgWbvAFQ1RETb6h6xCxdroFbaFepPaNRMB9LLHQNLZ6XhYsgrBCPjWiuYSiRQAurpMwSAt7PEnopeBEnxT",
  "key3": "2kN9a68bEMkwFQvk3VkR2FGiHfqf7FY4ia2AfuSpC4aRRLL6Eo3wtkZHLpPtBjenAgRNP1UxikK7FQGh5LwmLzKe",
  "key4": "3jcW4ehcNoyeASe2pFJzGDVPQ6VZFPVbAKrDwcs8c4LGfaTQFLXFZAfGDRktjwk9BFrHfmk1XrX4mugdviLimye6",
  "key5": "3RyjCEDTJQYq79eeur46GRYHEXKX3NoHmNW3fgRXxdVS9Y8ErrBZpb8J3CKz3gkTXeS81fekTawwtuzPr6rn8HgJ",
  "key6": "4Re2geCEYdU2yHsuueXfSKfTkKoqjLwoG2VNtuCJjDsGDZYS6jnvDg594Pq28AEjzV2hCS7DBA51L3DdM9aWzkx",
  "key7": "58R8wD9UpAvjhB15cmhSnJxmvtpr1K1X8bPBzmE5qrM4ZC3UQZPVRRJvHwXtd8LsF9BpZPFDC5tEPMp24UxnjYm5",
  "key8": "5SCajxBb39zHug9L4W8QuaLMXJt9BM9HbGfZ2YF1xJjZqFwFz8gBefFLAxgiTbbC2pcR3f23GXt3sHe9xhjSDMes",
  "key9": "3mkcM8eBXhAZSqbK5qtfe56z1bMr22aEbFsg2Jr5yF2AL92sggmee9DwKbc7JD4DL9dv3rSr2FPP5JD25g5gXWDx",
  "key10": "2Yiw13CeCvS1ernGAYFSCsqqMbkZUMabhp62WR84Scsa76dw8NjvY2f3tN9c2xgCf9ZYnMJkQ4JtP8onGZwPYh52",
  "key11": "5cHvUhe7v2Chd4nCnqytC6sjLzf49uFnBbNZ4vFdEnnY4UAnVLem397dN7mKzahBDHdT3nUzX8an3SV8AmYeUCki",
  "key12": "KnPuPqnoei97ACCYoQXj9h6jH9ieow5FfL2vdEwqZD2KvWgifyzJCisUSAYMQJRApuZoTBBPv7Kj2xDXYhQtFvU",
  "key13": "24KjnL3e2FU1S2qF5phLgWNUaQwpBSYMoB5mnM5aAF47FFH6CdNZDujKknaHEHA5PDwe4RJwWPVdMbS1reCntdqx",
  "key14": "4SQiDUT3xoNnAd39vHMde4bFnz2G2E7rZFg8ynhGH7y66eyLnHAbhmy9Uebytr7FgkymMV8kgLa6dTtpMeUwmv1M",
  "key15": "5M2GxJd99oeEcuGUjKjVbQA9kV4MvuhdZKpAztgTZg2qLwe339sSv7NNdc6MGv4Cm9so64FZmodGFQp3nbfjL4H7",
  "key16": "2AebMqEwpZa7FkxcyuukmZLt5HiVG2mgfPME5StCNvHsFtfLu36SGAvSHTZ1McST9Ftr17MGQKitzjPr8LGQ6kEj",
  "key17": "3EpEy3Pw9NaZ3JKyj7Atj8x9uXTWuuRauAufpLNHc7T7YvPMY1r8wJ8X6TbTwgLRLf2xKDuVkabLhwenBjDtkmx",
  "key18": "2oi3i9XGEbh5Mu3or2eTerXY4CSmniDcMTinsv9ysDmRXKUWDPXSTGa2QyZ9LG6gyg12AkBEyzsrhna7j3o159RH",
  "key19": "5G7FkGq934BQqBqKeCBp5z1Yr87Khu1GzBepPYzie5HRYLWsic18a2SQCJtzYd3k3YhuvnM5GCwdpcCmb4vxf5eq",
  "key20": "ogkn3P6XExB4t3BvtVQraRh125zL8JKifvP2BATCM26EkctnyXKbDM6oikuN6QZNipQKV1gAjqxoQfKA5HmZPKs",
  "key21": "35DGmgaUkEaE2CZuJoaaEPvx6E9fME2MRS33snecV6ycPiAFCgLGWmbfh4kSVqnDNy4auezUzweyBjXRMtVArLUc",
  "key22": "3D2SBdeKLW2thCt1jRR8ZEdLXEJyXKDn3xEdG8t2QiVUh83CsDZ4VaNtAiLVsyTH1rGuKWuuKpEmdKh8kwWXf37T",
  "key23": "3vHAH4AmuF1ogJzisVVBHCHmsm99HuvUumd7pqTq3TPVLqVyExXMhxpr4x37XXj45Xpjw3Vk52DUy9YgRXZ5EPe7",
  "key24": "3iC5rFgb3KCSJk8M8XrTPCnbdf2vURc6twXDjYScR26ULcfPNTLra67CDfM7Pr5DETfzSTmkuzJA8GhjxToiXT7X"
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
