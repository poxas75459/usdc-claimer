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
    "2eiJfp3eLVM6ng4YqFnHcrUZPgbYC2bwP6v9byfHwHgnX4fPkEr2uJMUsAmmAMQaXAuE5GJg825itTPpzsJLgGkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNhxUan6ngmoDh3HXwKE4hXonvHadNe42t4Qi9fjyC4z2kDoYEGY1gjeYxTHdeuxDV6HS3DdL3otLhh73yKUkzn",
  "key1": "43HLuKmuZmwWrEt1RZr4PUm4V1qsQiCWxUf962A1B6w2VR7BCFQhjRFZ3jz5XWGkxcpWduBKq9KeLXUUiwHmQAN2",
  "key2": "2Yg9yfRXumdZGHcupV2jRnDxNgxzyYmTVriyfPkoStHfT4MEmZB4fDKHTB7stUs7CAyK2aSi9dpPu4QaJzjqmoTZ",
  "key3": "4UtH9M4jYnHaAohQgyZkP7KNpgtEY8zTraxH3KSKkct8TPZjCDVQNUh4PSQZSpKhdsjbopRvr2DUdrtZmwtgTot4",
  "key4": "45zX9WZTQokb9SBwFRaFKgUxHWQpWUjMx3Vh6Ld2CYvuaPsLxWxhEy7BSyzoexd1hUW3pXHqH3yyRisactz6qQoJ",
  "key5": "3iEJPpC4bdGJkPsGSxStGhvsKMxsw9u6H3kNP6xt71Rx5Riyq9GvrEfthe4m9Qu21BeeM36ioZm3GvBeMhJjZBUt",
  "key6": "5jPhp3F8L1SeuwdhKaTGzdhGwNpCshbAqn3sc48KvwsSwxysnyz63TyfYeGQJpbdSH5HfJvbZHHbNVU5kHcv9yHi",
  "key7": "3CHrZzDuQv4nv2tjgXhbR4UcjoecGb2VXpJi8xce4J9WMy1paGRnzKddYdvhMtVY9paffGhXUQSRWGo6tcGcvp9N",
  "key8": "4L7SC2K48hedLtUmK5DtijdnwLFq9hMzxcTF27H1Jc2rdw4zCRRX8gdhuWGQWvTgsimwmTWfmKxbS4BsC6d3Xje1",
  "key9": "4Mau8mMhmthUPYZBGm3a6HF3ZcpacVchF1U2S3WYJmmqczC6qbw2J3wKRz8RdRGXjf84xNhL8oGBZ8HWQy7nTyrg",
  "key10": "2w2zihmw1QoEV5mvW2Y1RUuaGagsmGivoVwWGDRK2ewVx5NdZV6pYPeSPaLykvBfoQMcnZ1q8KBtt515pyUeuBdL",
  "key11": "5qHb3dy97wvVSAgfacBdZgghRya4886GuXjbdmGTuuWH22NCfvTMHU6j7gmxQRSKP17S4PpuQdjrGwnVL24GsWTT",
  "key12": "2EBfzRZXhYPZVabWAXskuBJammbcTmA915ay5k1BgWCWskSZf6pBq2EdSaqvjSZQWXfXrafB4Z3sHUpY9d2zQpRR",
  "key13": "47tEiuQbUyR7knrwER3D9HwL7oLR4qw49KGCk4tNz44cpqJjEx3roN4AdwsD5Zgt7CFxi2hJ6oVya25UdfEmRuGo",
  "key14": "2eWuLFTfmCJcoFsW7SepFfw8RQEuhzry2jwEYguxVu2L3Jvgn1LagKyx2deYyjxsRShFfqbjDYzT8SAEMgZpQo9x",
  "key15": "5AoNbobDf9S1e9vaSJkT7wX7HzfQSFgiaxo99rn6q99hWcHZDRUAcrd4yY7FXo1pXV4uSm1HM26s7GELQbUAt5yd",
  "key16": "4wsk1f5JgVAz5dFTFjSyHcPxJqtgn51e18sojZS3sA1yjFo4UQkX53QgcomRJvdUyvAeMNJXSU7cCyHjCPEx6nYQ",
  "key17": "5ZebQzAfkzMGyCrxdhNwDCykdwzw8anT3SmxtA2WGJ8h6ehXLi3Ty4nETYxG9P8a6fcafi4J1hqPVtTcQAUoYtak",
  "key18": "48jfP1FaAq8pv526oneFos2mALpFjcZukqjAQZuwdGoXqawmXqru763Re5oTWz66ULZvV91t85y2od2vSj6UzYvq",
  "key19": "3x5b71MXjHd13EH433ZBCdvWAUv9b5WtWXjB3iYdymL8Tnm1V7SwE6Us2Qt4nqAXVPoc4Qf11sSetmY483UCV9fJ",
  "key20": "618FQtD92k14u8H7viFAqusNs45pGa6wjEprUzxxpwpDT1XbKsW6VvbGm3YNxLMPUPwaKFDzye5sJM4HTtBA1uV7",
  "key21": "3q2Gay4f8SGCmW1MMEuTgRMyduPLEkWNsQiQuSjWiWGihcZr2G2fYNTsfZn155E5hQU6fb7XLndemLudXSZi7dqH",
  "key22": "yjfesdSQdbR3zr5rLUbrtVw8U2qVx7LMKeGie4UWyX6Grxg2jX8CTfunREJ8tAXX6KrYbgnr5PcMJU7BPcA8Rm3",
  "key23": "3Er5sPh2uYXpg6pctdMVrfwfvWYRoxmC3Kj6vP49JmiVo1hmVQcqhqeTt4RWkYfSQ2dyjLR76yM4ax5hPPBZCeAP",
  "key24": "5cTJ7gZ8kv78bjFY7gLv3fyrMEebmyjfS5zjNVWQJsLscvcwRK6YVRTVNcY3iyNBDbJ3p4egd3S8qvE8GbRVXBX7",
  "key25": "4GDTg4huB4EWn7AXbU5443zWQRCtDqbvziSgieAq1ff9Ly9Pg5TVBsbfZUXAY9qf1eGEyxHLfLQHhi8mLg7SqinY",
  "key26": "54Y4QKac8TsjdZSE8cxAynSDZngXE8FXuPnA3yLrSpPPBvJd43sSDd5iXmYsNGaPdy1ET7KBx17gWo3YxJUmC4kz",
  "key27": "2UmGMUVXXLNVSGsxq6dfVF9GTcogCShxhesAr4ws1MWdzWKn2eZEaZudAH5jrxny1gtFWj4sRpwemq86ezGrbPtU",
  "key28": "5S1fdKopZz5kM7yeMX7oJTuQEymVnkWC12491huxR2jP9UAUeMP4TuqBT4jjKujJPiMxjvtvU3VorDrC39h1qzdH",
  "key29": "5oKUVWJZb1aXaaYfRpiUvAXe6x7pw3ZdmZdzXmwHpnswoBEiGfdSpeYWPmKUSEBcDNZPvhWfC3TVNhFxVjBApWmn",
  "key30": "2xSvkRDKsAMNEFQA3HxLyZxKeZg9PKyJERoHjVD7uS2Nf44z4LRgrNnkJ4mQa2WxZVMvixUnqJBqKENDAf4Cuedw",
  "key31": "2afS6rtUtcN7eBeVPKPDt1VeDkhuinw5jFQ1PDofMj3qHkFAFdFggL9bkNZadwRJHUu91RHvsypdEJemA9G7F2T9",
  "key32": "3yS1mz6FPx85UwrPSq5nP1rdKEenA4VVqzUL92dnhDDohLsJ3uyN9aowJaPPR5WcNE39ZAgfxb5NVMCKN422G1Ap",
  "key33": "5Ja9RCszFeKjbA3QexoVJezgpSD3dG3vRHS8KcAA2LGJVgW29FhQTppKdYGaNMTA9LP2xoqLCGUzU8X9fHGoTdRB",
  "key34": "2qCsnG91sCLfPxgYn11aMNfKHLzSwNmPpVEwoNberMFLJJaF4bMaVkBoE5qmDZEy6ECYKanWhb376UoioAxZrbJK",
  "key35": "4SrYjG63b86f3rxF4mBuLCyw33c7WJH6eAMVfUunxmHTX8pvSy8dwW9wkC2LfQyx15X2FT5aZgyzr4cY8enjWrFS",
  "key36": "4LTfXSuP9C2hxT51PwgM6t16cYe8N8xrTWpJuVJVDCHN4h8s5Z3Paa7HZceXF4MfV1jy7eTJNCxS3Jabt17i9819",
  "key37": "dYYvD51bWKz7KZmemFyx3JUkE9iwbECAGh7GZjx7xiY3WQF9jjaSqRni8RDVVKs5vFgMG1FYxvRnmmKyV4KaX9n"
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
