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
    "5zZ2vhxscwhKcLrrAz5u82wH7GXUmUqsqp14n1E3XaM4DcJ2QiWfbmXFLSRMwt6SjtvsZt7SLwkBRneKAaU4tWtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apkdjy9yGxd5FH7Dc19JtfKKTj9AsbahjKyLBauHGi173LXLMzYKapmBkMLr8TwTVk9mUHdQsxsC9XbNdNPrMee",
  "key1": "4Gp8rx8BdQ4EPbez7CZPT5K958v32uFgumVCdUuPBSDJkKft3r6NST4HwNvp5gyZ9Mb3FEdCvnFb7KK6CZUwNFZj",
  "key2": "4CXmzSh4kkofRiCnV25gSG7WYqN9xj7o42Ag58157F7ZS5n1fCPAVYiCQaPNqGaoQgVbtGPrE8kC7CMcGXAbpgRE",
  "key3": "5dgmCAb5TZa73rw4J324bdAjhkeknDY98nb2NiMQppkbinEFMik5855gEdwnaoZ4Hq2zxR1Y5w7kq8ogc8GgWzc8",
  "key4": "23m54fr99wuDejUzormpdgD5NAzGAVAC7akJzzmSjwA4yATAVjKby8WqqkD8MbsEnHN6srs4jAHQyLxNbbJSaNWc",
  "key5": "3mveHs24cJU1PtzDznvB3LGv91bLX9AKd5xkw9QynAEXdNzQ5qaHGH5F57vZaiJP5G6hF397uoFu6kLxW1w9aexn",
  "key6": "2vfgkTzJU3JZxu91nn7F9j8ZT9e9Q59VYSLQN81CEukQt1S9kS5puA1HEdBSKf6fbEm7NweeXqpYRey2AJmJRxFQ",
  "key7": "5XTbuNj4EvMf7nnh8SfV46q4DG4AAocbr5S1Mi2WJwdoZ4jG6cWqhMkHGKQpELjsWMq7kusZz8vUuL2sfQfho272",
  "key8": "21TZv4PiiYXTtVzeQSDuXd6FvxVrSMpqPMDePcAtgfyMc7c7DdACnjHurWHQkgCrmfcBfQXeYQ8DTkcGZ4FVNybY",
  "key9": "5ikCdgUFwLyxBoUoSADBjTiz1D2LbxKEppVPcD6f9DxGcpZHzYkF2cVxXAF77YKnDytYXw5BEvUZWBybjQ9RMjie",
  "key10": "5pWs4SJsp6yGN877f8D4eD32jAH9RVBaTRHUDhe6F5bS6WPUcmQmYLw5Km7K8GQcWCosQwsSjgbEuVB7MZ97jp7D",
  "key11": "4seKUxF9uxmdU87N4PhGaBQoKzkDNTMf5Cj2N5vyUVKExKE7afzSwA1TEsVh3Eap3foBVmF3834sg2t69QhAhgZZ",
  "key12": "4ioHsKLzgxpmq7gobM1EvSJS8SkgPd2kx3HKbttSU8LGRfdj5gZhyfQeNsp3C6NFkNsJwk4pGGjfQtSpNWEYMSs8",
  "key13": "3jNpLzABJUtK56TjMxzCi25SkyAzsw6CpmFcJamU5PojhdPSL3MKSbkW6V7MSBLX61pxp9UxxAZ83NaTBbA9Cpkp",
  "key14": "5WGLReHWDGr8gcMZEFdPnNN7C8yVSba5graSo1gk642rUFSUStHaxF2PtgcY3FBv2oE8WEnN5AXQyhG4rM6PnWs4",
  "key15": "3CNJdTe4vcPgKJn38QM5TL9iXgkV1a67xq1LsttFiX1SqyRATu1hjkvdvJepSa2TKQZauXYVR1Fy53MVPsqjtC8M",
  "key16": "29zj17KwqX4c9JtdvHsnFpKCtYt9U7qsPS6FeryhBQCU69MTtoEWt4K2j6uyv1F1GWrshhJ9fZEECLpwi6N5TFHp",
  "key17": "FQQgowQXFuNVBgRHvVDLXfMHzVMmPtJA3qi9HTQTNfSNpFwv3V3T8QXoubVGLeZ4LQ15Z9LADjhSxK4Cnh8WtoE",
  "key18": "9xUoNu4hbD1jMEmc7VXyHo6VqJiSargrtj8wBSG5WyWvEVW9xPC9rk25TaQJajD7ZXZwreRqLe4agH8g7Bg9fkY",
  "key19": "4LytnAeGojfKRu8H3YnjxajzhdX79U8piSjfPMo3WpGMq618agGhQQXji6vLdYQEwDaHD27HSQPas597UH5zUSdw",
  "key20": "2PR3cPxuL47Kh7F2ZFTuqjho1jXTwLWoRYoHEUtx1J4t3SpNvcHCLdYkTZzsVhVCrXhwSUGja3PeZiNcjsuqpGZx",
  "key21": "39M5j7UdUNyFxYC8BngLRuDL5Mtt4gusa4QekY38BUAm89gHLjM72D7ARncaViho1MZPDD2Ggu7Hw6rzokMR5jS4",
  "key22": "22GTntdmfktSXgNop3at4ZpUXa5vzcKzPSrdXL5xiLqmcxfGtfF8Sv3uSyGbeH9rG8wcapPtrLAV8LrRXBk7ooe7",
  "key23": "4geo6YxcpWs5socW5gZ3FzYrBtFSygjJstDb4KE6g76mXMHWUq7269diAX8GVq24HEagWT3w7JhYmcqFJMME2G2Q",
  "key24": "66mujrf74kzmYMgHLryHE53VAKPoXqeJefpD5Wk6cqtgHbbetHhw5TwUCzkvvWGN8FtH7HnEaCztoZZAGFvHu6BN",
  "key25": "59j9YgUPmh7BsPM8mLZDkjq978Ct5GH2wSMWZuj8nH4t3Q64iVT86bPVQH1TN2NZ1uHhj62GND1A1SvuGq8M4uLk",
  "key26": "5V7BU32Y93uM1WXY1cwKDoNxE9FHjgLoFYTCXg4ggzTieWQZ4RNau54uxUidG4srrK9GyN5msfBUoa5fT1Q3xWGi",
  "key27": "rwh8kBafDJqi796aZQdWT3NGeAPnTxVFxnJeVishA7hWLXwLPTEAsA8yAJpSWNdGJmBrMJAjwMaNtkwevFF3F9F",
  "key28": "cYdX8LLNb36LdwuobBnjT3bFmCJ62wR3it72jJRJ56ZtCMV9rxYBpvjkHetSwgZPi3LxPwqzo9MNCFaNRePrDnw",
  "key29": "5QHskcvFhFdU8ewsePS37EKB2VEVmM5nprSuaD4A3vWp5Y4zFQaQXoKh7SW2jKYfLqPEoTLFjYC5JW6NPka13Gyj"
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
