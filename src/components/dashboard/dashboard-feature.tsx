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
    "56o1F2mZxm3Q9sBJWzqsV2wEZJxd3Try1b9uSooZb5mqs13v4RUsi5wZnzVbNjFkftZc13FG65ErvLiitxuMyXnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BqvaHWH9V8cmQyg9baChm3DpE2w4EVzFfKsd7p3HeLqHu9miRbWXveBt9rX18XtPWQ3nBocX5w86WxFdy3K6xhS",
  "key1": "4PqWQabsjcZQ2SzTjKFojigzx5KqW5jjsXaB7NgtuReM3cuDRKD7cq12hbjLUr8Jt66Ry64KWw8CrvynA7RSzfwz",
  "key2": "1HRsi4rvkdhZ8xvNuJF7sk8eLo7jnh7ooBH83bgXPfT6xpcsPnh22nMQpMcwnSXkWsdzWcUBK4bodDbZ7GJPa5Z",
  "key3": "47ixddAqznTJtsvPnZf5YDKUapYEiYmLQwijWvNQtQWXB4JXiadpnqzFX69MkXedaYf4pUjLcqETXWnVNpK3FKee",
  "key4": "2GahSfDVabNJCfcg7iZFCPmcDxA2NhrBFobr4qnpw4EChfrtVAPXxqK2D3pFjk3rSXFg2dwW35fiGwZMXofE29Ai",
  "key5": "45e27oceSakgihiqSCNwS2TW9YRYGZv6QJwejXMz8cwNxyuWcYZe51zFJSXKV6f5aoFCrF7poKTNeZ6Qjmk19Lyh",
  "key6": "3dA45qpZDkhmhKNchMTr45WNDQhofaW6pwoQJfoy35acnSWb8Ci4sNYkqsbwNEKRHUq2K8qBDzpq2irLTZjW9oPx",
  "key7": "2by9WLNBppPRtwtj2KWGji5uWHbaPWn7rQeTQ1GyC6ZQKnGPXhVsf2UXG3yMTVVKX1nUaueGEC7Gb2DJXNoPMLjG",
  "key8": "452DtGSSdSTbRKHU3q4zcPta7tnYjigf65ie8ssBSpvirwqByWz58SCHAg3hLhVuLJb19pk65GG2iHX2Es9RH6yr",
  "key9": "2e6zMqkuZ23n2QqRE4gYWFpnzPagvhEEvoiRwgetDoBEsekvbNNNECJmGT5Beqe3J9LNB1nDMfDpKCM9WuLE8F9w",
  "key10": "2hWop3sXskXT43byXNwWXrtQUdjNkKzGvS94upfhWrRmUYz3rKDaAEqRXp53KjEVsQ7TVGge9SjSsifYbfjgrsXc",
  "key11": "28qvsuxZ69PfjdiVVE7cyQa4tjNBk74sT5xLhxVryh41NSpqcHNhReK9VGSLYjh2orFbXZLHHY66NawG6pyUoZDE",
  "key12": "46NkpUCHZkxW2Xqgp4ww2CzhE4Aj925Y2yS8WELpstzCdPFWDXqEnggP3b5bpkjLamdVxDqUqcDUmZhbgxPn6eFH",
  "key13": "5SUabbfyiTETGburmFwWskszS3R5mmADDWYdavf25e68WR4uWZHXCBL5KGVnp8xDwCmBgx4rCgQ9ka43BxWGgK8C",
  "key14": "5JHdUN9jxDza3ivoxo8qjRTShKaLVhxgNwR8LeL3J42PgyfTVcVTBAMRew52SD7eGhgucAKSmJHeKtTHF7JKqy8e",
  "key15": "5JZYQAGvPFh76kQGnpLYofjPPDpqZrZ277nJm5Bw9r5rGCqqEWtCpCtPHta1ZMzuCYKvS4eJDcGwAeBoJhwf7YHu",
  "key16": "2xUZ44ML8kpWJrKry4E9VYSUJ4R4X5VyaaXSEmZsXpBVq5n7kgNvCBHS7ij1oJ6dnw84N5wMwJyi1jfp3VNkSEM8",
  "key17": "5dL181frQm5qPBa65vPLgjGrqptiFJBN1S11eVP9HwPwM5QLgT2z9NG5LffxxmEqTaF1FPJnwKmTe5z7bCRkDMug",
  "key18": "yzAvt7XQgWLKtwahopqaxx4JBUy5TmKZz9nGmigKFxRVWBLUyGnJ29p5Rg1YDnHtD2RbYkWqNugGzUrKgofE2gV",
  "key19": "4Tc5RXMPubKhaBwEYKLsA7H6P7KVnMoCKW4KEiiGcsiBrPBMwGHungcuP6mCaepd7MCpTgrRBxvS1cLJcgUUCbsL",
  "key20": "VqosH962Yut9JM87x8224BSpF8HTchNGs5cpggyDX4FYYmFa6y1TFqedGH411FhPxDnaX5coQ7iWttgv3yKz1Xr",
  "key21": "42pVFh5V8UJJGZdUgynJNwnvrG7hc56VZaymaHEXaGJaja52zMxXCHyCmdxvUcpu3cq8HPcrW5TqMtqxKD7WYT7D",
  "key22": "5T6knw1wK8QVKddjVHwUkzUdmmnK11kofwDVVLkFfuvCkvF89pi8QsLPm2eVo3Rdatpe6Eihwu72CaBqJdq1vUBj",
  "key23": "4sbZrCUFzAA6Pcsfb5WqojdLc73pCh5RSdUqkaoy8GpVWJk3EA5THxY4jrF5cNm3dmzsrUTgwqVKdUkkpYMvJCw3",
  "key24": "8SMdboVisy2AmjCDSE2u1q9WarqFB9okQrgD7FxAB8TK71JT6aG7iitLK1MRZV758yXGQNQi1ZLYHFZJbjY3JxW",
  "key25": "5S7hyXtAmHuMXewEFS8rVVML7sQxqQJWmskXP9Yjhx3yyVFAfoUDVyYiYWBWbT6i67Row73YjM6frt1y9TTGQEzk",
  "key26": "4jKMQfQcB9TPPy7BaYiYdkkHdGzaQhoBQMYQuuWiPWLQcsg98226BrkEBodE8a3W7F5sRXkyNEnVd3MW8ixdE2fd",
  "key27": "5HfK2Nzi5uMPi7ueEWbwY9EDgn1NtSjiUpP8VTgJp7bG7rK4ZunMo8uQfFcsHirdpPqNxfWdzvCuFaEmemZDCxcd",
  "key28": "5NwpactCEzxiPGoUvsyk4xmjxyWoasTLHqxGwoTyMQr5vqfAEQ8N9VByZGQwYmG77bqGXwvgZ1ipgeQ5t7j5GHtt",
  "key29": "541H5HAkrMGjUXjkDduAH4b56gZupMRgrPphec8k9fKsfLoL8kWgU4QJVPCpwXDuDp2AbgCtp5u9EC2US6Qjbbd4",
  "key30": "3XYwrEkhLjZPt5XZPRwhigkrEKFqD1PuY77FGnchsC9MyjPVGkEM567txzUkEYXusUQ7KdxrDKgrrRxVPrGDeMXQ",
  "key31": "2tYUQD1YU5knC11eCX8M7B2rBdwQ3hnKmVQQftAnZQtbYEAgvAJEccbroysTp3zR2Yij4747kfcHbdGzshutkc4S",
  "key32": "3rDSM7XRznAUwneRQ7KqGjazUq9wDSAvXoirsKa2G6rwWJ5cV7Z4kCKM92VfixAfiwbL3qC678BnguMwERo4Gokw",
  "key33": "scaoPGefAQzSw2DA7ZnDPqTsLjk29ih1gLW9SQg3K4CrAGbawN3QwFJxPAhAkScNEBhVz2y7sfA6Bi2K14WqcTn",
  "key34": "mpE77A1iL8SyoTPQxqSDKtRDCHSCq79QWEWQtHfchdzdAgAKUdS73vgjCcZoV2MC2mwpsCwapiTFonFdoSibVaj",
  "key35": "5gEvtbALH1qjxs6PVQBk4VwWEKUkoVgBS1XFthfvULd45vDfk7MJNL3hVsDpP5mrLXtwBoMuhK4H3trBvBdY4Mdi",
  "key36": "nNKuxAcb2p45ZYw2yy5P5ViQN3B92MTjnUFrqMzLVdnr4egJtp4D2LPDWrAqRB4WnfhBNoqc7hVBFUepPvJngTz",
  "key37": "2HehWyFhnArbUoGoj8fDbe3oL9NUiX1pAiAKjG3hQoWiKy1exhfL1WzXL9chc5QtFpgZffSeifxymaF4DnDtZcCd",
  "key38": "4ymqSj8h4o1zJ73BEUWYvbkWt5P1mQVGWAsNnxE3KxBoUyxQaWvz1wNW9qWQNbByWiSczgrrCw92wTHctxDrBcry",
  "key39": "5Cc8n6NypkTVin8Kdyc47Yn3ZwJHJTmhnKaF8KPs4TSX2wwbCcwwcwuK3xwH67DeE66Hi2fK9CmkvLpd7eMR6CxE",
  "key40": "2wWNLLS8x4DZzNy2CWcEDiMFZ4DwVTAMPiAtnUMVwymgSpm31AKdsCWxcuhWJnxH9YtLs9GKBQsmnbsRKU69VtZ7",
  "key41": "3qaN1fXLGiMCEGJpRm86fCxxbq7u2aj9Qqd1WWEQVuqDiE2xSbTwSWmN6Quh93dBCJWWj68CMFKUgTtsYHUiMWhj"
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
