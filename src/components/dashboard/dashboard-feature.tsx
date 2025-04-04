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
    "49o6GGGUXr3RRzPC2BZAffUgZFYpq586etAjMkre3an6yLLvZfF4efesqFVvSmsWt7bvgXgRsczzEZ8XPw2d3LdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCQMhCqme5n3RfxiyyxYgNwVaVzwCpmUJgwc8XNw1zKYbBYhBRdweQwDuraeGtayLRUbaH6oCPn9u3BcKrrZkGi",
  "key1": "5KjHH7QLX9zCgsTvVjsRMAXVavuTfa8RtV8BjCnYBQT4ApMhVRGRCDHayC1cuD9VkDPbKA8wL6pgwwT6VWPQqjD9",
  "key2": "3TFra3gTHv2Wt7zSih4g7Z6uKigCeBYTSusmtAMsbaZDnCA5d32BgULsfiyW1Bh2eGR9yafyj3r9B9ZYJmKf7VYu",
  "key3": "5KyhrGYHhz5Qjquc7bLgzVo6hSmC3Bk3pECnivpWmEnzuM1oPzg1xptnmv38NbkYPvu81dXBi5d7NRT1iCqZxqCH",
  "key4": "43jY2KJWkz34kAZCmEr5u17zigXNXZ9pBJf3Qe7PCZf7CLxRwXC1bir4ZaR2uZGUr8c93YDn1QjhyZQhjqsMFaJR",
  "key5": "4GbmTcDLdBuBHADnsu6shcTCoSxY1xQGh2qFHYJrjyQ1W4R2U1ngrfTLsKaBHgzx7RAoAWQYmGuVhoQ5k3rku3XP",
  "key6": "UsGxd9hyEZTihSkhNDDzhQhDAyMs2GKed91HJGpWjwaEogQ6t8WuuNNpdhCGqnkdXM5KNdQstYNWneR1cJqfGhP",
  "key7": "2G566CHPK22LyftfSHrBH2RTFkqRDdtnaqV2495y9bvw9iaRdxucWXLLqvN2k62ozd9Uh2k2Q6HGb3KooQ6WMdCA",
  "key8": "4B4pMyK9eLzQLKSQWRn9n4Rpye76aBgjDhqxJW75FCEbj6AWjHDETXs2xX11m21KSa3xt4xUPQPRYcaLgCy7augV",
  "key9": "9qmTa1aG3epmSdNYAaK53fbBC6Fy4uFpRzoESg4WfZzmC1iYkDB7o4KzQjuNHuRKzWzGEtQaLNEvnpxn2BydHbc",
  "key10": "xV6DiCJ5ZGj8vShxu9a3D2cWNBXDk53qPihPnKbLsLVrczmAPs41BRJrG7WR2EMHrwWp8K43iXoa7SFnefKhxhN",
  "key11": "2S4VF3SuMmXuN7i2DGoGZJun41CZ3VYmYq949jG3iHyCXaoXEcu5729beDh2gZokrUvF3BBN84dLrCrtfkxPsbax",
  "key12": "2zqS6cCZLj6JC24jiZ3ZieKLuGJtirndgrMu9NTmWxXoEXVxd8oa5fLtderxse99yVyLqX17oL2pirBnVqHqm4Ek",
  "key13": "5t7ash6TeSYrBGWfwXtiM7nQ17yvxSdK7ekPNatEZGxUwNGVHGCvmbpg3A8CAUY8SWp5orbrU2FkQhynsbJdW5kt",
  "key14": "36qdCXMcEes1H5KBPYkT9QsXT2xNpWaNEHyXV5NvqE1bZShjy3FT4ZdDTHYaBmgjw9FFpbWDP2UiRHiM7k1YQA2K",
  "key15": "3iHoRRCp2foT3uc4kX9hKLWsTPJS9X2u9fzBx1628iSHRMJqZmVEcsKGWkoLWityEnBe6kjWzoQtPWtimunDyhB6",
  "key16": "2mJsjaJ94pWfSkui4Tv8qMErD53PBMAfpAS3LD6nJFU8b9siVGqE35DER4BvXuqpRWpFzpH8xYjt4GgLfTmkQZuQ",
  "key17": "56RyY4hZqAsNM8VVnjhXBwoh8JgBFy1WUtRAN5vXGD6rAg1y7jjLNNgbKnH8ZNCvc2xWqaa1LwCXdJa4Koe2JbsX",
  "key18": "4qCBVGVyhisQS6xgZuPy4dQK5fFJuzeBkeZ5h6tMCC7BYBx2NoDMdvKAg5kuZkZFqWzFPpcHc1i5BMpQ7qQq1mnQ",
  "key19": "Ghg8UobgngA1jHWB3WSPVmq6Lq1EM3iZqXN2v8fDtfxtQ7oCdvYiYCU13PwtKcpfqbT8FNDghWxVmXFvW7ikjj1",
  "key20": "4Rx8FMVtXYoRazvmwkDCJdP23MB7DFJdkxWCvmmrhULXuzDTXWNinUrwuDfSmPS7jab29omB7BRFULANLBXYLyDA",
  "key21": "3fWgPEDB7LTd2N1F1hY1sKsVANenT4u9r1nMnrGGbvTvtHfhMJwuWS659oktZmYKFCSh8m96H58rPSq7jJyZVtkh",
  "key22": "5eU47EB3WZiJZ16ZfPBoaujizxznw6vetu5pzQc546HyFNoMLKmin1vJHLeFfHTms89bWKyEAkC5gZvoaDUPNrik",
  "key23": "oKL6Uf3LzM5FXYyC2VicoXwMP2ndP1nLdSWtHM6hGASavxDMtWRdXx3nvFwm23KGyo7UdHqzcE7Y62TFtQnnks3",
  "key24": "34A9RHUUwrfS4FJ4dgo3ihwWtYm9NE9Jo2WYcGjdmx2g8W9zRux37MmFHkVEJthUW8qrpo83y44BvJxXEsJNB6yC",
  "key25": "WdquBD3wuk4g44F7WMsS9EcjmEuwZdimyfiRaNoWLAqQ5Ne6nUUomCrziwdHtv5T5WMH9s9soQHVCAhF4C2aFn7",
  "key26": "51a6ZU6EfXK1XqFtcWMEXvWKyCW6uZJ1aGb8sFBRNjaf4JjCRkUXVXL1YUtGP8oiybStwp5Xa24Vtdqr3HR4agqQ",
  "key27": "3xJMsMajHjU8ufd2wvX4U32WUvq7Y7rcr2zibtr8w83EPaw7jsxp7gS1ZaYsQW4WtMCMgTBZ4UGQhFsktxFNfxQi",
  "key28": "AWw4yNU9nymjpZY2yMPEC4kPBAfRnz1LGAEcibRahtKsLjzaAh18azVgE8KXXG41fztGDoUuXatDSTMpYPZdbBa",
  "key29": "3zQmMPtkqgdFtj7fDb3BLifP6cYzEZsXDieTgQa9b7LRPe9zorqkUyD3cA7z9qMAtE5AqNygPgfxE1wz86mhmVkQ",
  "key30": "4stSM5SFLXfFhetSMnLm2DHawDmTDK5uzZyZztdxVexzw2Jjrg3EsYYWQUS3wEwfoqnjipdPPxBeR2kPbw8QwgR3",
  "key31": "5K1hpcTJnnEfP8v7zSFWbZHSr5dowe4ApszLJoSQraVtnjgLGgbqkNTBgbZmMdsUninXXL1w7XeNcWqzeAdv4o1Z",
  "key32": "8TLaZUifNTLDTRaKjYc8QmDnVM4BUkRH8m6LkMQPWPa9sbyRhEhVYzMs3sGqiXkPivbcqGr38SeY8ovNzmb2brg"
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
