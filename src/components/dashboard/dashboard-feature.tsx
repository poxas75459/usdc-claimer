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
    "4g3sZnuo4JS8DcGneJCuoy6MoG3a64A4WACPzoMLYpJPHuufHQXmYo1DMSaSiHULjzj2YbSXD3pXuzoEXetEjHYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FdZQzE6AHxBuRETAZjh5AgYNWY1zzL6YxJZB73MpyoemgUaF3xVryhwEzinrvk9HZPCfrHF9gs7M1WDEeZjVWcF",
  "key1": "3YXNQJRPSZKmdV12hFbQp5q5yZeZQNcMvwQ3hTehcEbo3iah2UPCsBE1v4dFjhRkq8zFFJ5qfp7gzQDr5bYTPABA",
  "key2": "GjDpeDfzw3zzHsogiiFK5K3R9PFSquqm6AucKd9DusND2Vu5wxdUdHyBTA4YJFAE6eYNu4JmASRGLVJpDnhf6Fn",
  "key3": "43tDx71dQsYusuW6wZZCEMS1K77RQudwSh2E3KBHmzjCDNLtDh2Qn97h44qDQxaNdJoGibmqAbwJB3HLCmPTZRpv",
  "key4": "2eXySFPc9EJoqPEJszfMXJ8FGRe2RofAucYSVdyoFzj3pZZDQtZr4DpjZqhxdw2Gf2rjsVuB6HiFoNiUn2E7fweB",
  "key5": "sh5A6LY9iYrVUUM3x5MzGN2YWLrJsnBuwkvPmd7FAF2514yTWXSDPAiKhYEHttHHSGdWXHnAqqeAtAH3ykH34EL",
  "key6": "FYNgvHtTu4gtmesYpkbkZJhqzyKNN2hBpnXSFZTvS5EUAz817A1RUYvPTo2oR1WPp5XiQVSpu29RCasCA1vKtZh",
  "key7": "587U6T6HJrANhLYZZAqoyqzGvFDow9LE1sxXVKcVsYDfKHJXLF4wWr7W31WDthQiUKzp7GaCCRNuJncPqhqhY5SN",
  "key8": "3DHktSPfG56KjnqbBNb3jt7nPHKuoDFobVTDo7myT7UiqYqsmXR52kfKUdmHWD894F6n5c97RuDmNJosmBxUtr3K",
  "key9": "65wpeVirLjf4wuYBdPiYZXz5XnLAsC6QGK7P7buwDfzimJTCeaaSMsY428vWvxuxn9kVVE5ajHDWwv65u3MMVpM3",
  "key10": "qM2qagrNdzDU3JUSrNz1QupGpKgTCKvZ1de4nPoouTrtg3g4h9coQrnWA8rps7kGfreSnBkHWieCfAga3k6aDBh",
  "key11": "35oqzCtnhWzPbH9ASBr7K4M2Q6A14whMnzYoXNX935XUTGtVyJHCtNhFp3TqdCrSr86X6zvhdQoJwkLJPoeknRBv",
  "key12": "Lz9nN9zMrk42EMAgkX3pBHQ8bbFoc3i9MLAFcK137fuZRYSoMj3P6iJgEZ73EhXwu58Sgz9dXYaj8Pjz9oJc3iz",
  "key13": "2zzUFTLUNHfBvsks5SsLJzVLJnub8sxC81j5ykkmE1LR17ufJDk6BgS5oyspFjCtTR3HGLmvJPDf9JA3hjSgCS6V",
  "key14": "2H5s1HoUqk1HuPxdTCvDqRcYLV2VkNkHWy9drzRkhTeZqhx1VMKiffh4ELQwFWgtm1UVBa7SmMPAevgnrT5F5UKd",
  "key15": "2A2J6M1k2A2fkWv67Zu8dmF4j28AhYJvNFNnjuQqQ99XPtRxgbomRKw2No23KPTxq5sj4W97x6bCjkxQHB2bkkxF",
  "key16": "5oWMtjnDoxUodfVdyNetTB1sVX4Av15ty9foML6wjSVbJCFuA3Lmp1WqeTo8LG9iVPqPG71dzHGNPkP3Hjv3EkeL",
  "key17": "2JY7KvWi5NeBXEX1ExGexNrcdqh579qPPmcX2eFN9LUjzKH2Zcf4nGb7Pkm86KSnxiSE2WrrryDUHRnb3kbtJAMF",
  "key18": "5SctR6CbYuCT63K2oML6YX27n6jbkoSPs9eh2jXf3T7Wxkggf9bJXCwu9X3J6kGXLJLw2FQacfhrmRmfrBpkjbZb",
  "key19": "wbkg1We4n4Jh4gi3ujvgWx94Re73jVHMvb7aBQu114NfekQwPEfdyCpwBRZimgEmB2FxEibX9GgFTMwRbkZhxgE",
  "key20": "5tYaK6NcmRm3bEAzabTQqZGCGUHGnboxpbQdVyBnfhDizG38bBGHfTGrSUWf9gSktsD3tQtjc7oUoB5TxmbSudke",
  "key21": "EnBJDwbXEd7gmRS1nsYLEHzhvfPkamjtb6jxdw6szknQjCw67FbT3M2gzdp9FNpqXvozM2Zcq1F1csVkgQLdobL",
  "key22": "4ngqVAArSpv7B42KNbYVgjQZu4JqDpEMnnmKwmF7Fpkyzu6wHGTL3Eqfqmzakg5H66J6y1JJheEn5DyjSRx4ryw5",
  "key23": "4jXVUAyVJUY194EpLUyzbDPvCbYAKG9BLpAoVGUDEMkQaLQk56ZAAyiUdpwLhL5L7Z2yLtsYxdai9Dt6xMP4ADKn",
  "key24": "5U5t1mSKjW97ksioNLAqRNyB67iyWeuxLrKGDaGs5bQgvGem22ammAGFeQH7QEjgvU2Eh4aWUt7r1r534vF99M81",
  "key25": "3TqZqKmRe4xRVVX3fENaQdD1BkLKD4YiyJdFxe9t9WqbHLTdDhForDFFKWFETKajCEjn9inYRfzRj8JX1cqVKqZH",
  "key26": "XS17jU34RJDAUBNhTNhhsk4Zeu2d5vkKDk4f9HuZ3rXQP7KN3QxSynWcUQ8Pz61ovgwb9vEaeF4oCuXQB9g6JiE",
  "key27": "3zLiuSVT3ePcaXhKXSHSWj9nuHVR42Zk8GMG2y85eTWCooDV68xWkpDcCB6sjqW4LtZc5p1ztGrzaBaVF9ZGJJ3o",
  "key28": "4mSvxbSWGFfZmSypmbgAg4uBLCvBpDNXK1KcFhx4dubYZuRTnsvXEge6YpPnRXEdT9B88eVVmMGsRQCqGbjkmrTR",
  "key29": "3zN4aiLAihziMPYYKK1GC1A7cLAXfocJKPXo14iq2neFTJFHQHzHfXTTBsE5wpgZghJn1wqQkmv4MH3RGqNZkmwf",
  "key30": "5B4aj5zpCtJRnh8Cve2ZwS2qHej4ba2BSAJnuq57M1Vq6dNqCDKMjbYQ6XCa6L4yMKY1xaj4giHN9wgyGqyD4XQY",
  "key31": "4s1VgeiRwQbSQm3XsC6cFQi8e4KVUnzZgGvNhpUMejAKSPExmxHU1PfzMqSjz6fujwvh55nAQNG7C7w8JWW7UJPN",
  "key32": "s8YpecM9sBRfzGcE7XiuxXirGfuXeazzzs6fMtxbhknUKncQKgpWZe1mgWHc9KDbXqVdmv7ePBoUW6Uxqa4P84A",
  "key33": "5zHLtFMFq2z8nJgU9HkzRN34GNkzDVnyXQ2Woou6G7eMJx3mhbDrjmKzyJcvGYA1oUKAv2Ci9iViKLxE5bXGLQnb",
  "key34": "3jDXoVygn2pgzb8k7A4sb5eexxt7bAvZCVnn2HyS9CRBZf39pbrdiSEJS2y2tyDZPFEjX7p1MmoCj6ddnC1yxgzD",
  "key35": "uhrm8wZij1CQB2hZYmeNiuMxXKCLNKroT4PZvrGEm3C3hTNVV8wFiWRo1JTvm2x7fDMLAShaHjga7nkb3xut91s",
  "key36": "21B4BvV4fHvJCZFiC5oSw3YBEDwASJhH3DHVJ7ZXkDoEbQMTfVneKvQsvzUybTqC71ha6eACVHHgUrYDTxmbgkjN",
  "key37": "5vRWHjLi7sZmHzmo8SAXgWsg76iCtLLmdf39Fu4d9WKsCvXaDdf45KyYaBfpykWai3CSi2S4KSCngxCYRTm61Esj",
  "key38": "pTvqs2rdw41ZNHV3FzbAbhhgrkGSSmTycBm3u1QNE9wCard1xN9azg37Uh4rHMgUipajJsAkHqpDAuxZ2xVwhFC",
  "key39": "4ydfTuFJMmw7PdvwzAWthYtx1PnAyHNXbg5UYEfZtnnjpjiPPaGkUzPSnd5nzALACpmNsTRLzRP7eHgU4oGGQAd",
  "key40": "2WtFFSAkkPwX15bt7iX5f7ioPzcRePmYeKaJ8iobnme6BBT1ee7RrRBAWzPcRaGTSR7BtoPsxWw9JpwXhfBuDuth",
  "key41": "4VhzHBzdf2WyVbUPX4KHNfxUxoxuhVza6PXMABUt79swfn6UM8VT4MigCLTNkAX3Trng1hFiu6A3n3psffRKXsft",
  "key42": "5dLaSPQCbeBFU6wjrkvrJXDPiWLChuqENB2x6y7icgr72FMa9fqkZRzmyGmwKUDPtnUVQSx7HQjTYUhaCchc4FUd",
  "key43": "5HEk2tUNvWPasPCFW8xRPvsuWo5SY6Tyv2pnCqX62dhstjC8d5eE9EtMSqpy7GqC1wp9WhSuw7YD2gU6KeFoLRAt",
  "key44": "5m8Ne2YBPhLTqh2jGwtDGzjx9NwWXFZxZc6erDvGrVxWvHto8pCoYLDbpuWaWiPqjDakMK25FESU5yVFXdDZbj4N",
  "key45": "4N3hYMNuyRLPeZggMR4o78QWBnPr2RgfRYGp4KigbngUQCqtax2XD8tTcFNMCv9nH1v4AzgASvrMoDYXA7i85uw5"
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
