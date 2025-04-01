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
    "5U7WoUyY6dmeXwaqXB8Gp6sVK3UfG3WfvqRT64dsJhdDiNDV1h1kVAgQ9MgwD99Ee9qsZZySYhykm7Ec1vSJgWuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54A3AGj2frZkHvHVKnqWu77WZirj1jUnudge4t8hue3taNSYUaoAnTLN6xPkkVqDqu2rQeNtKkzfNYyNnmgbQVgs",
  "key1": "4rBQTFU8tC8mXYniNZ8q5DirXdZQtX1wp26tzmNmbizFu3tSQCCp1CuEEaMmV1YcycHSmXzJyGteJziN5ZLmbBe2",
  "key2": "2jK3efL29ZqhTrrX9zapJr942MzBHRJETLoByfprCmfXBTpQacgYC3MWWQrSqrhUPjwNNyqgpZmbuWDBcdNhobmD",
  "key3": "cVQM6nmf2sqdnSFdif7v9TXCm45qATMfFcoEJ18n2mnUeuaG7BQ77Ra1XdEhMcY7GvSMW4jqA8Ltp6W2gRWeMnv",
  "key4": "2dKjZ1QZxySD5nDyuA6rh17BSxqyr1xjirxJF9GPvPr9Bq3wvLFX5G8Td5Szg2cW4mie1eFvi9Ruu9KHorycuC13",
  "key5": "4g5eehQcccMGdzUntARZLCRMotBVQvTMHLjEvAvtt6cCp8vW11kuC5ALerDtEYvzvRBTNChTz3JtcKPaP7hfBwx3",
  "key6": "3pziNvBNtfjQQA9T2eqjWXrBc7kmhEKTaXDdYgjMVMUVwCJt1dJzFpJUqCUdsaqTXwxatDYJivDWPwZrZbDboqvf",
  "key7": "3yG1wm4faiX1n5PLCQBVj9bim4spGJSxMUpCHV7JARAwNk29nEEbY3NC1SEKPG9qPJpi7Nzzsfn1JjyDWAECgp8H",
  "key8": "5GTZj7jA7dpahRyRQSxpjpr2RwvEme8NbKVyx8unTWamDRZeo54XaVqLxUvD2cQ2PPmJcfWewr5ERNkrqaghtqYH",
  "key9": "JFjUDZmPbBVPnjVL5WhZMgUi2Ec11q3VM6eBJkNhfAmU2hDF96KubsCDCT7p3WLVmZonr9Fv7u6N5PEUrhceMeb",
  "key10": "31MWHu6pSHPPGHqkcJpK7AmFJG9VZqLKwf9mWdbt8Y1h4yJCoTADEhezNubzaK84G74gMAZyzwLPMVqn1qC9Piyg",
  "key11": "4UzEV2k1dQRAFrRyx6WvkE2gEd5tCMcTSZ2GDCHWj98NV3gHUXVKdvSf9aShy224MUuJktE8sABLQ5XAuPLDG2yc",
  "key12": "5BhESayeTRDZQSu9mcDdqo51QkYRSK16WAw8Gr5SXi42i3NqdnSgreXzJRuTtev7wTAfw7DyoedYRapF2wUvDH7g",
  "key13": "67DBBEhyvwmr5DciFQ9LoZzx5DbkXnNzwLAx5nqSWCHvac6xgVxUCyGwghk3qeVLPjaF32B8u5UikfZcLKqi1Zk9",
  "key14": "24TFN2Nn51vokqEHxrPwZ7XNpvoEFNtvjztSKCaSu9efzJHKyvyN6Tm4Qf8FCBFGSvTs4Z3CQoJ6cvJSyqFoW9k1",
  "key15": "2fgp5T5TgTJsL5pTSwRX4mR5GSrY7DMFSzaC55xhVHJzWLtR5ApSqkzqJovct3icAauS3XnuxiQNe2fcUMwMWtAH",
  "key16": "5fjMdCk4hWembaMabTeurJF7cstUMvm1CxzG6REkX1HozNWg5BvUqB9oujynHkxjAyQJvMjyzTyVoM6wZoEYaZH9",
  "key17": "Nr3UyjBuCc3UZK2Pv76mmTmH6pUMSUgMK2y1EqSo1BAgQzwWm9ksBW8QUR4fJiHzSFmXnAzXFiDfhonP2vPedJz",
  "key18": "5CqSftKhth664yE2dgdTW4iNoto4DvHR7J8oC6wp3ZtDdEdmBxHcWopDioVraS38wS3FwTjK65YZNK1TWBSGhedn",
  "key19": "34etEE8vBZ94Pw754seQWe6YHgDDYRjiWPzFw8qo8iBWq9Z1xKav12ronXbGqiScnzCeNvJ7Sg8nKyS6i2ZKTo9g",
  "key20": "gnNcUMjJGtSHrXPwYhjAuGgK21ay2oan4k5fgr51bUEyEwfYvsZF6LQv14VKGU9bGB4e5hiARuN5bt2fRTrL6Pg",
  "key21": "UBWV1Hj3gke67dB4Az8vPUeTontTFrYtLouukV1NPBiyqUXy1T1BXyb13Z1UrQzSo7dLuMdxRJbkQUtcxnu7C6N",
  "key22": "54cTYXg7phqKf9gvogWPY3oLuyzz8ic9tCJ2hNHrxHutWicfGZ2DawE26U9DFwqJuRTbCJREK6f7e8v2vhnrTVFJ",
  "key23": "2kBQ3pEZLRW4XAcazjpwcnUwHwreqFcjUES2BcTASS8iu1BMcYWw16ikJ92YyLwrpX2fDHyjU3Pj7zJ7MevvKPQB",
  "key24": "2VKUNvssbDGdLFS5agmHUREuuw4W5HtpVJKVzmwqi4N5uPEZveeLWGh2mgYgeLJS7e85Lz3qZ2YKsYcXvfsCTgB3",
  "key25": "2gB2eUMaMX8p8VUgeXvuEnLgHVDkaLweMbX5opnReBHbkUciZE9Xw8xjunavLhUvE4W9Gu9opsze8cXK44T15qKt",
  "key26": "2GKePamAjUANQbSNktey4fjoCscwuKWJpMSBmX2pnYLKnjVsun8vxEdKcxxXuaQ4aTgySdF8pmsHmvkYDti74uY8",
  "key27": "5gyxj5gtwkgfZhpiQ5HYcsozurTTKRuBHM1ipQ9NfQJ6S81UnivF3e1jowaZuCYGMfJPQ6gzMH9z6RUybfJXFAqb",
  "key28": "4FDcAMs6wrNwMVNeYrnrze852j5DWx3JR28hiUtK27ue4gavw4FnENkCNczX88kJUjGYec4GLtPMtxEtPRLQGJjT"
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
