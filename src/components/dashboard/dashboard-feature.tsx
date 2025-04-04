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
    "59YwQqkB94WnNbtxxxcn6WgGbWgiCgXV2jyQrd2axCm3YcgNWMYLKzaEnHEsm5TbpXEgX6iUEdjQV2bYQGkbSKwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KSLWLsc8bBdJ45GMZRdrbydZYp7DGBzUiYvUs5HQo1WZvUUma1c8XLhSKCizXZ3dfM2GpRH5fxS9iiUvQkxZ2wx",
  "key1": "3DqFPE3fWjN8CJhzqKRniNNegUpEVs2CYaBXwkiX9gqGoLGTgvLXp8rtxorZBpaqUdjiGHGfohVPtoAi1E5983UM",
  "key2": "4DgUyMEryyePTJXKSephEWqioN8JN4YwLmTsxMfgNWkpokjCK3bFfaqWhvfifmfucRssy4GfmaEuZA8E9To64sKv",
  "key3": "BN8SgG7xcfLtZRCLbzT1oJVBAovy21tTq24NUyVyk37hwqEit9Kr7r9M4wANumLqQf4qp9XkFAjai6kbxKJF1Ji",
  "key4": "2D1inn49S9NPYiwy9WUHSeqyvNScWeCSrqPEYE3KBSBjP1tA4hZfc7HbruSqiw22mCAETDcEpMiGqrWfaEtHqUWg",
  "key5": "5oE5peWiXQyv94UfLxa8eBGspeMt4xkHakhnngc9vgWYTzV3YQyVsFvpgLhYriAkPAPSqb61kGRABPCQf5byxHUy",
  "key6": "3uDM9We9h1j4JGUPMS4UAEXojpi4rXM4FfVRr7AEDyYNDfJFGmnVorp3BTAnBAFbGitA77AhsehWRqvckwciKb8t",
  "key7": "3Ci7je7YuUaQ6XLt8y9y8d8xBzmhQZwDGByFYtPPjroPc7pBVZUHCW8VftKDc4aVusLFLeKyfsMyicj7496tjfg4",
  "key8": "3kC9G9KXjXKeHWggcvhXGyc55zuWg4oy3zjiMZ73mpgD41q8arCCxCFrckgreQxXgDruMy8PG3bhWpqS5ii3aL3R",
  "key9": "AWqNWgexhFZhz44mQo7jqar12WJV48kVcuL4n8HMuzKU4hYvyMgFMCo3DkWe1W9m7PYKRR3Fz3sWskWQUJRSSCV",
  "key10": "3FtP7c6gLxXsSD5zejdYTsUYSuuYi1aDU6XHjC61ssBN7A4mxbudViwb3SX1TDHgarVbLXbt5LiHT7AjbhfUgdK5",
  "key11": "42cFXskSjTd92jijWeft1QwXoZWD8QobjnNdtW2kZK5pjz5YayuWvEx8TAeU3NytXSoQr8rDa8KiUF1h7rWTvrxP",
  "key12": "38KeD212tq9vHt8op8ZoohGyHDnHBjuzN7tGDom7vYkyLrJhNdXSRCmrcUy5RnffKEAFHJTYUTpAvBvfqQgwWnjY",
  "key13": "RWBFnN54zRQs44Y36SXSPTaTw4icsqXCVg4AdWC4zuCMd458vmVXcMpVu3pGfz31SSh8LZo52nXX34RWF6UzzZz",
  "key14": "26iroqFALK5pL3VGLYZX9CAeFKMsQMAKoH5fFWBwj8MdtqpzMag8cFcfG7t1Sqm1KA7bQoV3YpXnrCNYFvWuakMU",
  "key15": "4p91LUobuNhs3vTQU4f4go9z6dWyo861job3p4itXb7BngQYSGQX9Up6d73rJ2xqx5wWKx6KPFTnTBCQSpBQBECN",
  "key16": "4QrR9tXqAPJvknVtvC6kBgLdtJkN1JjNWXMfYMxJrLvtsPLpJ46U2Ewxf4xMJJQkycuT5gxAha6HShZBUWT1CBv2",
  "key17": "2ScBvkWKwA5b4dVJa51Qi2KVWYeuqZq1NwhL4aKYanmUUDasQcZZVjYDjDu57Pz5LTSg1LZHm4se5roAXBV6aoL6",
  "key18": "3EotCbH3Ak5fFgeHDzXToYnnzFDAeFbXCzwVjVnt7pbh7n64RquDnwmq4eLuFMaFzuFir81eHWZRHyrwRcAwtUc2",
  "key19": "5c4ZhZEK18hf5qvSfrqiqAxLpfgBydES2HLzpMGutnkHVtfz57D2mXQ3vkTSWvkimH2yRqfVaawX4PoH4nabuBbn",
  "key20": "22ewAKbxERjwtZq7oywZzLxgPjS1i9AkLELAaE7fZ2uDknEGDferK4N46WXu1osHLyCRq4MkDHceBQVHjw1ZCeot",
  "key21": "5FBPKdBf5Rx9neyC52sgtgSoLde75X2zsxB3DBudoZWZcKG5t1WZ2jaVU8qP1Kk3f2jLzYM9QgB9Bg7sB1kp9FyH",
  "key22": "3LLadknkYgDmHthkJ9X545DWYAj2qFh9pHgsza2GeTwVJs2tT6UK5ZuZraNVkQmWsLcPJ8yATtqiRaG77tG4MAPH",
  "key23": "516gVLRzRZ2nYY2tWZHmNdF4fyTbY5ZvkKs5XYJsejJjcTZ4exXUEjrmYjakGCSWGTfrHLMmrRLFtyhSYk4MycV9",
  "key24": "4Xkr6qs2osXitxJ92hBNnTRxpuB7BFydcuBu4tTGmCKFN9Tds59jdM6XnvaxQjxZyJEToCp5xtKWNertZEErj7xP",
  "key25": "oFZgN5bE8D2tMxpVDrZyRHykoXQWTiW7fKbRjmFDS1FF3usR2KNmz253TXmVQkDnb5uX4JfmcSy2vWv5YtVbNjm",
  "key26": "3h4hsHCgX9B9McwgvTQkHybvuw9CneF2oxi3VSC1ShGL29hH9Sb5iSKk5d9Zx37CkZgHpcpGX7AEbVEGcsuQTTsm",
  "key27": "3imkC9yG3Mw78x48XbsXoasQXZj7xaCvZLPr6pN154fMxQazZakDcW3qZnYcc6bgN4fguxfXveS6WQ7rr6qYYPBJ",
  "key28": "3NXTXn3y8krKHuAToAza7sQDszUm77JtuF7meDCYvcLXNY2WxR3VbNvpjRSUkGj9JvpPipzU9gnQXr3GhzEFbRRA",
  "key29": "4pxxZiCXTPTYovDbd8FZTNBg5PMqwkbWrEtFTn6HUnfQdg7LrwU2SD7WpR1c4CBZrEomzHMvSZRkU9wLDukmyYFQ",
  "key30": "idG7trcZMYAqdKL5cZoeXaRBWPX5zZaS166yarayNKPYPzpvYkdt5QUxN7aCUkn3JgFQeVMArZL227vDdDwk336",
  "key31": "3fkNBjbnkGgqjjLEXxfjF2zLMeBWTVmEGcyPA6PT5tWYXzAEWgwVh8m49D1UGLZsULaMQm4YL83NBPAMpjzfTri7",
  "key32": "5DGQNY15FJJqDze9gANB8VNU2nbiDEpC7mHDcCYzis9HqtBiGiDiv5PCZHNy8tEEqZ79yUYwyFurPktfJpFr1HjG",
  "key33": "2M46REQ7K6MUDznCZV7m3zBmYrfhNhXH4Uw8VC23a9kxybmmnHNqUxGcbtzMf6vQPBKS3VbsSomNL24PMhLdMgFg",
  "key34": "2AXWAKFR5A5ZpdXnLo9cVtVAr7LogUwwDBSJ9wscBBMm19biTG2eGgDo88SwxchHtk1zBe3ZNvCrKThb2bjUPC2s",
  "key35": "3hk4J8aGjyswRsKYmhBJKsW6NAnJbVMTzCdvmiFUoLDhUFf2mJLF8UACsCRLCZwHw6jsXyMTRU2M7vSqQpaB64ZN",
  "key36": "2J2VPRUWnYdJuAgd65A69gjt9g8TQkvvACPd2hUikJnp11kjpZxzrCraLUeKKE8mDmszwFDmVUhTKMReceU65XG6",
  "key37": "YuWVDfST6wnt682guUuNoRAg2KAksq9TXb91S5H1yW6PUHfL9vxsUMoFkWn8wBvFF5n7C4jSsy4NEyYpAEfTakL",
  "key38": "51N6BGwvvUS8J8MRmpfWNRqHk8HQjHQ5hdFEu44y6e7AePAnvBfabzbLtsW23acWA3PFsXnzQMFFmFwMgP9VaGRi",
  "key39": "4A9KApNbDmWFYgf47mBUWsiu3o1xc7doFfuwXmmND7NVVYZ5Gtx1f6ZP8HpGuY21JnpjPLtJVLrTLSFzkb7iZqmo",
  "key40": "3URCui8b42WbG12mqthQPJpbjSeQMoZa7ChvdkSQBPpFMT2qQpHb9r2YC5Koj362r9x5b2QRPx1hwCnQEkg4iLAD",
  "key41": "3VhprCBckx9hu6x61Wp9jsequ7UsCMpVENQQvD3ZWMpAGKpTQJR8uVTaoo78Fdiw32QUnDRpx8naF2KhKi1HDaBh",
  "key42": "3m87mbWsPdjiYdnXwgZV8oCrW4S2F6RtDnjbHLpJafumZJKHVgLKv95TngjQa99UJoy4y1E3b7MP9M9fCSenFbmg",
  "key43": "55moWnu5vS1hnajfY6Tbu2Aqos3WvuoAUn5Uv9vqZS8m3kJNSfH1PoiBRpHFuk6rqCnkJ1ZWCt9fGuLDS9yqb7d7"
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
