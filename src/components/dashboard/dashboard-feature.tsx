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
    "44oqTdTuKfMsnR6vFBYU6i2T9HyCV17Q6Npp9VxRJ48PpsX3ivCzNPjmPGDsfYedbHZkd8Uarx2m6nXBf6m9Fy9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkHZBSMs54gAhFW1jY2pus9n8gHYxmwDvwuc5EyVFxqouUtrqqUZwvHTPfnnBGCFBgBr746D9Zj8EC1zbw6Usj5",
  "key1": "26BzABuq3jH2ff5MG99uLMXVxJ7CMXz7NJu3vK7TirpFC6z6qhK17iPLsUPRikZjQNUfwTyrgLuDuhuyD1VCbWMM",
  "key2": "2jX2efbAaftsK6cnrXHwFVBApZd6hcPhik4x8R9q4cGhmNGq4bidTZv9FaRnzs6muHjeGidYBMvPwq2fw5wyfygt",
  "key3": "RmeywyJGVLeZbVxbJkrPDVG9zMGX3vd4b6HLY3cNdZEpEzhnZ1HwvoktAyM71fAbNciQZMXSaPmXYc6ifPPmcvE",
  "key4": "2sYVAuJDcMfjBykXgXZbA27HjzA5TuztqG5coGyRe4yTYRd4emWJSn7KvmN2bh77FtFrzrZ67KKxvSnAKsvSeFq6",
  "key5": "35DHTRVFGNMWufjT2RCvoFRt5sz3TNxXXU8wFMupQa61dG8njz5XkcMaWGyR14AibYHZ9nvs2mHYtjVDMniZcoP7",
  "key6": "5rYZE6dumC6y2moZz2QpGLFmQZ12P4LRRxSEcmDQGQEEaudFmMpWJUbYr6nTNEYNisHoeGNxBfMHwSkCBz9u25Mc",
  "key7": "5bPGWZNCT94H7hbhnEB4YAfo2P1fevoD8f3ZqStGymc4qMBDWcijq6GYvngKeFkTJUszkiPo2GvXPFhQabgTUpEn",
  "key8": "5yu2MUwi3vrXNV74bQxfq9PDD5fUgDMAsDSuQ7ksJ34Shx2ETvPNKDyERYrKuSLVU43rosvmxNwoJGr6qQHDojM6",
  "key9": "st17wteacG8r3taxVhhswffJcQZyMYrtEU8htk2Yw3oSeE8Uf5e5iVLNet8dhvHH7eLz2YEBEc7ubKQoijDYZc3",
  "key10": "2NXESzfF1H6DuaeVNNyjGQuqWFauZqrbNHNJej3X42AvKKu4mPeHDwWiS5167uvteiA9BDM5DoM5soTLYnUWTN8c",
  "key11": "2st4h6bUw9vbtkR5way6D8GYRQwC9vw2yqGDbzWfHXWCVmourX6wTyNtDDPnYmhGvCfACVTZczVWSZ9FHzAz5VaU",
  "key12": "5rxk35wDRwpNBCTcFMTXsiwuYMSxXqznffQMNFtyzWoQdNmSBSxhEAiU2bor3JHvPFMi6qDtJxP3etBxdr3LqB8e",
  "key13": "4kTw1vyTjJbTbJAkv9oSPTinoxRLHhXvqrgBGXPFcf1368rBCSEzFQzu86zyJwgS6nbFZgjRnP4KMpEqbEEcznZB",
  "key14": "36gTJiAW279rhUahV6pDPCTB6ve6zYH3QELH1QwfQDz71UtCA7KDFd8GYB6yWUUEf3mbaPZJ9scAnkaTwqHPKFaz",
  "key15": "2fTWnmj6vkRoAMNqdBrJ5c9QNV3SDJVS8W4XTva7y8LGDMheB5yQRMJpt4dwAAAcRa1nq2285ToahNSGrR8MBJmw",
  "key16": "heZHLo297vD81s38TJzYy65Qec4NU9BM8nnwC55LAPVK8PbUKxVHviENqp6rtcFUfjVKHTnKa8XFrwtgfPNemVJ",
  "key17": "64byHGd2kQNKy1t62RHTwpgeG8WMzJ5rFGBz4orzwhobqPfE7Wgb8eU3D3P8tRmFw2pFAfNTCCVrgFPf6SodNd3V",
  "key18": "3T7KKN7oLWG4budGRCqnUnhaXC9sozoHgnQXdNej7TgtkySn6cFktzJVksbLQiHCfS2EZdsqJFqmApw9w1Mxsoux",
  "key19": "48z88ixro3Q2RZTFvAtD8FJpKf98jzcYSUNirS549yinrQvGm1qa99dmjALuL2vJnggYTVVKCMTJMSKpBim98rTj",
  "key20": "4ZwBHcahhU2QnCJ6hFvy8UtmSGhqkahKSqHoEUgvjMcHgHcDLGPGhwCiwuYYSeMsjCaPMTZx5w8W8MfGKEC4Ng1s",
  "key21": "22gPzrLricWrtgKs9MPuyoQJ7nLuLm3sCr1CxZSvVMs6gk4yYKMtT3tcNjz9AU3bc5CLaVJSYsHNrovRGuD93kw2",
  "key22": "4Qyt82oHgDHp69XuyuLwXK7tN7YSaEt1hXcc6zGDxqpKAvRtzVgxbJaU6qzyonCpeT26dVD3cTkcbG8GWuHWkv2r",
  "key23": "2biaZdpyfpMR3cBH1B5CyWjxQABCE68mPvWqX37By21a67cV1ZvwUGyPK1vqZy9SNNFQpAvT4Tk1HRn7FVPU2y3U",
  "key24": "57ht4NzpbUZ113a9p3a5X6MaH3PDKDgttGacwgtV6pYeazwWipo2hMeJxNoieMMJyKssfibTxiYK2q6MbcFKoQxP",
  "key25": "AUppcn21HUiEpoGCU5rwhGug99yS4y22R5aLd124c3Voav4EWuAPYiJXaJ2fbTaG42W4yP46617vYaJcJAvJRyJ",
  "key26": "XaSfsiGvRmvpkDE7biNqozcynhXYidAPqowWziEPiWFtaJY6WQcA6TLBhmZHCkoYqioy4UemWb9Z15SgDU1o8Ks",
  "key27": "5AvnERe7ALe2opxqTVNwGw7LKTaLTEEYoChkHWSwW4cVyBhjcNN6LhFcsj8YoEpXzTpqwM1bfgAanj4mhf9oDSbo",
  "key28": "575kWaTb4BPZwoV2wyYoCcQKFdrAWBES1kEMKQjxL12fanynLhASzLXrKYzfB9yaKCcjNNeUdqAQ7nq9H4sU1Qt",
  "key29": "3d9Z8AiftLe9zFjVPA7WVPGR4TW4ZhZRXUcpGwk9kqRCtSHSLjNFHeu72KbN7WWD8Bcd2UkHNNssxFRitiPQXjED",
  "key30": "5mBeCF9QeYeHa5ZoZf9oxv2dTvCmab4JLMdGsB6oU2jNu2wXZ8AcgZkW8oiY9T8Gm3Q9MFS1c2RGKtGLeBYzTpfA",
  "key31": "2XT7Ywd3XvzjXfzeCgQbKUsSZ3NZ97xQW2EpNV2hWLyACcGy1vqcCUT8kysGuhHBudjktGouEWjGdVJF3xqFkDV6",
  "key32": "5zW8PuWPTW6zXxEAUkxeLCv5iNafkGh5qJeb9BCyuuc3MvYcy5ZmDsNnYHsWq1fFQSjqADK66W4QEXqiWoLDMsqT",
  "key33": "4MRp5hxao4La5aTgfqKFKaSPpYe4xxTRfiWr4jKg2MUQqnHiimc5wJD7EwAVdVJQbh1Wgz4gTGvyj5zGe1hs4Cqy",
  "key34": "22QEjmvzBdm4PtkyirdmgQHxXJNRcZ3D5TtY1TKqwkZDCA5h8mhoK837i84LPhTXxMmr3f2LP9YYcoewhgHBiHJP"
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
