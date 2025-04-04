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
    "4XeTyWMTWbtZAVn2X8FaqaSYbKHrfuuPxdjvuVknNRhJZJiBBmtSAx5973HQMgrt8pdyedHEDxPMd1ecjBdefxyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkNTuUbuuqmTtrjrAg9JRYvT1WEfweDRqUCVBScN6EYjguR1CAJy4wie5N7hSvAe3y8UxsYfReY5uV27PNyWLnZ",
  "key1": "zADKidyUYE2HW3krh65Hdqodnd5CqZYTJyZfYynLX2Nmfu9NUu89j2hPuXguVeuTHLzkwLZxoWGqjM7JFmcASbG",
  "key2": "gME7gxUnHHMaQ3j9A6pByiL95zQCFt4Vs9nxiXTmx3Yx8aqLdV3BMZ8HFXLoqCMQvY51HXyo1jAkUjnSoWZcLT8",
  "key3": "2uNMC4pMSXXdxawvtP1YwEfwLUDqeXxX4xezcJUfHTFT6UhAWMrRwbL9Bx1dcfaKLYdB4aZg5Gfz8hYLHNVkTNgm",
  "key4": "Sm16DqU7dBBDE2Zf4CcYhCF4ZX8NWnnhUvYgEqoCLgNxx9BtwGHevMA65jUK2pNx7ndcuW1uLV5ykbhzWLDa6k5",
  "key5": "3w16BkYkE3VPVWvTqaCEmSm4vLHvt8uxPyZ18X7yWpxvgbnBsEviujh3HBz9eGBuACvFFSXESBThGHn8t7GaYive",
  "key6": "3daupbSkthw2hfBrtNHS3a3vTLSFXXm68vMozcNsPTozzNE3MUcxZDsAMYU8BcPEwfWMZDxKeC3zYmzSr4mwxiHn",
  "key7": "2NFF96dMQSzLDrXw47T5dEM8xHoizEG8ap9qDDTdqakAxahymoy5VcGL4QYt8yDh3sWXQGeo8Mvk7fFuYotdSS1p",
  "key8": "2miv2iadEafBCKzj8EfHHda4vP7YuWk1sHcVh7STRcbTc2YREmud85jJAsEea9C2RSFWVvzAeyBVCkXYaibvsqRm",
  "key9": "31EN3XS3gfF4VmVTR6pw7zm8hMAmmysPrnxmK6fx3MH1WpuTksxtCSgoEZ7scv2MjEqiY8DFgFDueTy7aPN7RQPL",
  "key10": "5rimYfjrBSnd6dASwQRjkrW2qxj3c4Fjp2zVkay81hZp4tZiVr9WnHr4i2NQFyBdyww1TaToFtZi4PCbbQGE6A7y",
  "key11": "3qurUETk2XhFgmwTFMWzM4e57BoyoofuYXyN7X7WqXxYN6scXXd1Gay577fmZcmSj9CBSVAX1RHuubCjb7S4LRck",
  "key12": "2sf8xM12CwoN2qyY7gjk4MHUhXMnXzmGnicn7yLwpDjqBccykPLqSFSRtCqZZYiMnUaX7iESvmzWxbzep1af46eB",
  "key13": "2pgwfXnKqF6yfYGyqj4CgJ3eHCn4HPHrXCVL3FzUkGgth54ixcF33iPckVrCp2xfgTANYTWLyDf16DMVfV377KuQ",
  "key14": "49uSfDdD7LCsSsfm8m6EnDYjkir5YQkF3tQqCPH4oZDNS6VxH6h15nJfYZZcFDypHEHaftTuXWwbeuKX2sfTNQch",
  "key15": "5tHnHoXuFfg3chuQgBUsdVBJPYsJe3JvcTCGriz1qu6GQne1maBkRshiGM1URg5DamBcsS9Da4qHpged9Cu7kuqm",
  "key16": "KtwiVjZcxPBfKC1FZEE7d5Crka5GqL7sxq7VYRxf9kZfg7bugoowYvG7iS7vvG2S6uvqoDQFhHRDnTBws8SFZXm",
  "key17": "3GsGckcbE9ejGmqvuf2xyW5vVbJS6Tze6SNNNVUneQKswEdv41ubeLPsDJpV7Svi752hDUxirephzvWk2MdCZ11Q",
  "key18": "K7J4yiWL4DC9JY9QYEJwTSw8C8mdqmEZ6mka4RtG4A2NaT9rDY59a4Fzr34Q45Lh3xYPFYbK9Hgi7g7qGMNDrb7",
  "key19": "CbuvAoRm4n5qdZqPEiW2USVjjRKcwmzxz9CYddgvf7TnwrCEKu9v32oE9AF1sc8zWaCtpyZvbL6cxibYd9VmiZv",
  "key20": "27cv1u3YjbRb4Kd4QjVgjVY2eshicU1WN6rYgg9PyYio5i1i14gfnJVxS6st9Vf6KFp6k5hL2oPCKKVaUXybz45n",
  "key21": "2Kz1E3JWiDYmqUkis6J1QARj6L1wW71wYthmYRDGM5zctLMN7oLLDUKx7EeU3VoHgVt5H4Zjpo5qq9cRXHce4adq",
  "key22": "2XxGmnukX9sk7gkabuYK5AnLadQRF3fLcNgb3qY8tisbbyv91VmsE3ApYDceDbHcVya2qeJSC1Wd76KNN2kSn7xj",
  "key23": "8qEqxZ7WMafsrbXfit6PWg3Jqn5Zi3ERVY7WCMgG1vkmnWCdH9ZxUXx94xUCfhoZDPbpzvDXn5XuTynpuVtEZ5L",
  "key24": "93afDfLBXaTkYoEfwTZC5BNvw8EsGy2KjXMyfBRng3dj4gYURjoWWHZ5Jg7MyYF4gNSBHVZJSVz5dA8Ed7YwxMi",
  "key25": "5TgTm4btUHSP1G8xqFrRHdKgXPs3tKENu5rMKt9CRUBLnXSMsSyogKMp8RR9Eemenf82XEj5wa1WaMUCDy75uTDn",
  "key26": "8zcX1KEAzhKu2ek3GjhEwk65ikTGmkoMTKeqHsNmgz7PRcu5GZndv7JND7PYQerk4mbGTxF37iBP34nKVZLwGoo",
  "key27": "4zesoECQ2h3psUHBFpKDVcvRqSnuSWDr5txufB965sgRNuNgKS5jFzUFniQsnrvnZfuRbFvt2LaPjVsZA85XdqCX"
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
