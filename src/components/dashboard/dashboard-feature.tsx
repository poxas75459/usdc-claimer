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
    "NnEYPoUzSi9TFMbC7sngkMMj9DYjDC6RUKcUibW35hV5d42v1ti8FiKMfxYSfmETU1frET2Q5TXMTFAucRkow7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZXDi2E4SKsorKdYzcFutcn7ZmkQPThiLjtq4KAR7zvTVwFWkESyqZrp6XEbveuMyJUgW7DGQ9aWycDKDc5aT8N",
  "key1": "3MZPpnzigV6zq6W7pPAUzaKRXR9x4pk6wFN9jEzWnqDbxY4kN7f2JtEVT7DchD4F98W93yGFKjJp4ZHoGghGXrvh",
  "key2": "5UTLRLitN5d72u2yurVxxRFoCr2ZES5R8pdhq5QhY2uHznXccHFU7GKbDJARXy2jLf7HpXcJ82tJwmoaPs1Jctxq",
  "key3": "5RhnfmPbkh9VpSboWxCa5SoH5xEGcmLEgbDEUmzP1t5Rf3d8GempLg6TW6b6ZF1AHuxrc5jhGadEYdC7PAprWbbB",
  "key4": "2rkXEXktnph3r7deD8RGCNvNwwkimzbypm92uDRxrRJx5Y4SvxpZ8KSs772dswFx5dxNVHJUnQA6N6W4hS3MgXVF",
  "key5": "3XZkPLrDK3jYSwh4xBUMHKSZCgVMwTfMb8LbXtbjeZq1gNNh3Tpd96zximyjebmXokex2unQReJYhnZWy2ax9zoB",
  "key6": "4QwNBqgnjVpo4oDxdQJzWjPW3CpTKjwpGrBcexUKX1zQeTNUUHPKzKorTzxV6Y4ddVT4To3wM2rUNxWVPyos8i9",
  "key7": "3EwnDGyAqoPiafF9zKPFQZUMXorMArQUcLCBthcMSN6vnZU19NABcJFJw2t8UFGa4ddXz7dQj9LKfxSDp7vsgNxT",
  "key8": "4C3voYfmoWxqfVGoKWRyiGh1x4985hBs1deg5htgv7Dw7nNbSKDv2T3qMzsiM9NuucMQPaBJQsyEBSqqydEo2pFS",
  "key9": "5M4dduDsRcFX6XCR6mgfAunpMwWTem5Xz2GqcwXkmF5FrniMEaHps1zTFe4HhSRRBTVBqRscqvYWrdnqhhPdn6my",
  "key10": "4rp5EQMvb5AiDVaB1eVrEDy1QQMvybo7dnQKcSzjkesNCMsbuZAk3GFyfQWAuCrC5GNg7axtnNRjRrqBn7ButMgj",
  "key11": "7fJe3hQ1QHp1BG2kJBXz1zTwhwge2Sn8DDpcGXZWGGWTwX1ao2YysN7Xfz8YdG1oErKnhxYnn72bbAbAn5aJcy6",
  "key12": "2AD8JVxbx23EN9pVFWiw17xt2VFXEb54K4kabfj51gRRCJZ3DLzb3k2HA47pSWGXuHoop9CVr4Aq4hs3xHQ2LfLB",
  "key13": "66zAzC3HcPJFWXBzQWPjv98SqJU6kmGCHALkWmKqwUffKRetvRFnLMJwVJQcY3G3vTi3t541ba9w3waakVWMUx3",
  "key14": "3ZU5ghf27TUrVameUvTG69A9E8BjNXxZbgvqywFWCNWcD697rQ6Mh4CTn2occhBr6wKuNDuCmKfGKVwz1oZt2KCT",
  "key15": "2pHgw4n1fDkpVFCCiY3is64mBFCa2cxZ79i2JEWT4t5f72TZKWqBhZ3CY4YMFKm3JXJjLLSHypUVE1nC7H67qCS7",
  "key16": "4yqvS3HCVnpjmo2GaxWT9h267WTr9EqLboAZvsbGfQF1XLv1pA6SvoHyCZQqhRHM1DcBRRQjXdgeEUqqEPoeobDe",
  "key17": "5pW1Va69sonS96wNbzKzmV6evujwBHS2ymRpr9PmhbD2mqW2qoHfAFSrYSUnU8AcZ9EGkGoGQnmTcRRixqbh6Z2b",
  "key18": "63WXaZs788a8QvYHB45CQP9MaoanpAEBqNtKVqaydmDUGusviGL84LRdApXHgFpMWADFyzaj7GjYstnMZtDvZnF7",
  "key19": "3wEFqydJjKY7UYs1gf8vGo7dX7f8Nn8RJoSzqKMVsdGBd5DM5PQYdk7sGm2Npnw1W2cbAsXC7jhCnJ88QCGcTHnx",
  "key20": "4At162Cbt9ZL3PBSVqhQDw9cjqYHDQsVXrrptkw8vYMzJc6f1PwZrRYLEyqNWVZXj3HJYFbUxjqQN2nYJgN5Uzbi",
  "key21": "5RQA8SCLcQrEgNUWEfRiRxLgLWy9fZrThHAVE3ktSU8ii8tiudFatznsQ6uyA1qEDX2omEwmKKtGS3ax6q2hbzdC",
  "key22": "2unViPWWgX4odM6Z1tujNo2iYM4s8qhrnkEWTpZY8g48XBg1tSszh9eL5bEmUUTbMSc9MDdkkTSA1ZnT9JU8StLV",
  "key23": "48eUbD4Un7e39eMeUjzyYxFr5mzNUtA9cjKSUodgP4SyZWg2bHw6YHQYwPb1DB29aM4Gxrz8fwyd2Yy71ZN4zUKs",
  "key24": "5M8Pif7ygDHvqyUUbLZgurPmHnU8oDXub7sojahcXbPwfASCTj7PipydBukXrhq9SWSqy81jLJsxWMxuah5rEmKM",
  "key25": "2Agr9wdYCkuj7QtCdZNpJoZdxpuJftX3ujp8VAszA9vD15jhtUytcPUW1cPhJwrsqct9cZSP65PbBCinxf455t6h",
  "key26": "3R7XopT7wsjx8kaCyWLKpHBvamCLguWpV2o4DnAy17j4vhKYEWirm7Ge9qPa1oVEJHkerjJiWhiJbyRDc8dVbkyd",
  "key27": "HrQTdVXn8xHcKabQskyhKkNKkGoy2abx7xced24dW5HdNuTDFbsMi7z2nsHMj2qiChFMTrgmfG9M2CDuAoj3QyD",
  "key28": "5URkYLRyqJxqpJv8bSUGVygTomUX6bjMcUe4iFdMvbPudVpqmKKRCnuJC59sQKNUKAo8dTKkRHNS3gwr5MuMja5N",
  "key29": "JKwQYn2PEMpccJJHsLZD88fGFfiPBsAEvpbxZY4QENvtw4HLqvvxmqnqjKNN7VZdcQAwoDSTMgpNkgqsMEik8xj",
  "key30": "44U1UMJdLuQUKD5te4NsuTkpcrovmzXw4nt88PpmwMcW9MpcBHPnG1sZ6cTxvWmKn9beiHnyjMuScykmK7ueQXwQ",
  "key31": "527g4qgTbY5PtqHiJWXVKudCWPhqq9ihT5Mf2buVqkRvLCGSYrJxtmxGy3niH2n9Q2ZcBDDyzpLwGVp24zEiJGHX",
  "key32": "wQnae7mpJxh8RkiXj8vzj8z9168mnArfiyyFpgZYBynAC9XMHYcP5cae9ZDNU5u7RHqAQRMatBPxVxdDEnGXkg5",
  "key33": "5bFYgRdKnGNzzutk8YjJhWY5bZNYpwdLDgvuXsHavrikuamc5Z7TwoJXtYULyheFuTqVxyHDGvWdKaTQ3pmc56Wb"
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
