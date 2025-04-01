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
    "67pjUEGEJEpAVNpb9BerQwZS4ewkzMDY3KFpJoyWh42AmkD1T7ttwQCCntMYxsFZgTxJZhNk9iyuwiLqoejgqtzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ughCAhN9tz5PwtHS8X7pR37uQWkmq9TRnThq8m42xpKvNWs4sNSSd5UvNA8Mp7X71STGyL4JRvzgwZsxFMDoXES",
  "key1": "21M9JfxBTY6UBp6mc2Syyb7Vf4RGUoUns5QT1QhPq7MyGEEMwRSbrohKdU7hS1PF54izALfciePtkoAg9ATYjW14",
  "key2": "5DcheQ8RRGjNsRQ39tSEwMA7GigxRnPMi2b1HQK5NuA4yLw7VEqU2bwaxm3nZtqTePpPYkgWLut86riepiRbCyPt",
  "key3": "3amXr69DU9wjSvBXe8UDXt5MkNaCxr9STkyhyjoFAT2SePUoYGmSfQPALyPfLtX5rPtJoLmNKSoci1Ve2s7ZAed2",
  "key4": "2mhiP5bFsz9mS2umGaUBfLiwiUa6RXmrpRQe6QXtw4sn1XhsUqqzjb98J1R6ejVa3uqJqvuvshdWUxB7WZBp6tYo",
  "key5": "3XRqsXG76oBiDg9Un3bYmZpcAczmAHkqudF1nNWWoMJxH19SmVuyBeL5WjAjig95UZfsh8LjenkC5W8fC4Dt3qbh",
  "key6": "44NfB36uXeiibNYvtrVbsJe1vHN8H9VNRpmhWk5BkPtRkF9kH73vdsTmw6uw1fq9YJpXFveRcY9Y9WzaH79or9T2",
  "key7": "5a9eyatSAV1sVE261P8Fy77WdgWNBLJ6bd76FbkE8ZAhi6T3JP2sktMDKdPNhc6ZMbmjwwmdjVwsDWXCxtGnNbfG",
  "key8": "7kD6iFuLL56BQPQdmzUoa4nhmtRhasB324jTTnzaZR2iBdB42TXxqtBm9H4kH13uqAEY779VQpYsHrVuMMKGNu4",
  "key9": "3Nz1RumsYwJL1pP7MywyEzv5mhAYfBYLVZTEkFNk9djm2XGSFKyF7xzdzVytQqnJeP48CBmoYAAvk1wjGotuZasT",
  "key10": "WWrpAsqVL6YHaDQefXrdwkavKa4XFvPTAiCdFuNcSVUz6R459tK9gtHTUHEUMSG2UH6BQkJagUUmZ45FntEFi17",
  "key11": "2ho7N25RN9f8Znz7ZujXrJYC6X6yRTHJzferTkeyTHdNvStF6fwByidmyQPm8dDCu2kbvuThdhPe1qS7GgPuhL1c",
  "key12": "3kw1DUHxn52u6FvzUuKQSC2rRuG4VkEw3z76TdU69YiXEmxrJ9uyQK3K4QZP6NZZkYsSRGwUDXYw3ZKzX17Td2N5",
  "key13": "4B9Cjt6rJcFtmpgDyWBg3pSnDxaTLUvJn1MAByZoWJ5GE598cu2oDW9V8kAfFkF9FZQuFqH2K4xVK9B5bFr8SsA7",
  "key14": "27MGXGb3sSLMcx5tMaopXAqhgcBnmEjfK1YuWv9Nmypmvehc5crB5aPt1EXpMmkDKTqpKc7tSBFn1oRUdGScMhyw",
  "key15": "22kFAQWXmQkRTy3QWfdy14eEQvVtjLXeZeyutWNDTjcFGZsbMcULnUFBZBQQVcdoXKEBqrYXKgpZEZnfHmurdkp9",
  "key16": "2Z1UqSAc9YQ1L35VHZTGA7LG3atiKRCnqUGpymGBFdNG4bjBQn6nSknPnJBgTTtSMHQmD9MbXkyhVX8MxnXcMRN9",
  "key17": "53dJuHp1FrUzfSXuxCktfH3pY82dF1zgDLv9XhUuk4o9TcjJpP9ZWLZ8ETSXtXEk6ZPhkeW2f4L4o63AoMXQXJbK",
  "key18": "5QATLf5hehohyNyXmB4ecM3xuf2zFEKb7GGPckMW9LHkEJUcbTurXVBQKfX9LrurdtF1RDwWui6wcPBEK5vcwFmH",
  "key19": "5yGjtjupEccvcr3jAjPdiLfhtaztho8CA9L3dbuKDSvv9C1ejbEowvtLhb1A6RMsPtu25zf8WSzEaFHAkvRFaRDw",
  "key20": "TkGkcnCG7J3Ag96tHPL4c8Denqfrhs2KfLnGH2jJqkpVCSRY8GzH3qH6Wxcbt5bQ1m9Z9P84dwpw8vFf3yaCdMM",
  "key21": "5nqgJHWFL7379NEdRxbJfFBdc1kacWu3zCDfHCqVq5Ssb7S1Z62vtH8ADeToyHReqyk4kctCC7addZm4WcWh5Y6",
  "key22": "2Exj1ayX7yur8J8tPa6HwgKm18taYitSGohVNgFLxooeGMSPJ2yXXCca482StLSqEDajRScS5ubAA9wFWzHzGC4N",
  "key23": "2sxEpqZh4Jo4j41DyBEnwSbWGpTDoc1BdMZEUgmo6dFRuya3ScRujxDzMNYmHigxxfWZecC8KrZdZY2G9vj4o6wQ",
  "key24": "5PsUXNzE6zN8dTHewH8hTmNHpg6kWyLGLQwYKbyBL3sH3EkB3KNfSoL6hfoifCaGCiuitXmQX81uJ612rwKFpT6m",
  "key25": "3yCXCpEdmbm13gAYSPvGbtJVBwRSTBwnaC5mFzqdhESTfxWosTW4diTc6tCTozHT8pdkhdWCwGfjjFFKabPcmxcj",
  "key26": "4YptzbrEeZjCVnDLehDzf6WHKDhhsUAcJZHnAR4rCXBfCwnAyG1ts3JqN1rsNRW4Zbm66cMXiYb5xjoQk5DsJEKP",
  "key27": "3rNCsmJfGm5cWJyfFSPPvtzftt3qiEw5wnHH2hu3V4KzRCTr4mEVPg3djo2c5CSgm9HSJVgFGBSygauaNML5e6DR",
  "key28": "HdqWPpATyeXuq5WwAE54HUMz4aE2zWpzPbgY3jx3W5QoY5ALWSWBsVRuj6AMKtyJ9EyR3aV2Zh1UFhszuv4YYJZ",
  "key29": "5QPZ3C8WjSeaTNbrfzTMSLWdUGRNBo8vNn6gE3CXswQPZn672m9b3VENDq1UgsNe2gJiHd4PQuXorbfycSWwoFuX",
  "key30": "FCn6SAaknhkJpweFBawZhLwP19sX7btnCk7uaG3u5Rj7LZGtuezeBDURCiNFLgfYTwPxeYxvk5m9rwUZj4JcsnG",
  "key31": "DoaqG5sfXvHcx2pFZb4Lg3uG3YaQPjTKrw3GUdWrXJ3SpVbNaoCB8p3dVxZUpWDs3Wb2narA2qooazYLZLsKgmh"
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
