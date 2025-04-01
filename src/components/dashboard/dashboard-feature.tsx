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
    "5PPMozAAv3wSDVHj1P75zLiY8uPhTeboijuqvYycb6tyAHP2dAWkLALNcH32CgfGHMFuwexEjVoHHphLg4wcLtFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bk4Pm6VGAGPUN6GASACz8jnfNWiL35DV33c5RfWysimF2ecpTY57Vt8e6gabN8VcGWixG77UArjvBgcdyqVg78q",
  "key1": "2c95KNToj1cecK1hJostPaQiRPbitQsAzjrwhsJLMas9hVhFFvrjH6y4LgttQBUt1BiM1UBH9kcMYRJkKzqBJ4Rw",
  "key2": "4EZvc1XeYyYQGqjottW9pnNikhdoAy9m9vMUgX8frXMnB9xmJavSzSBCvwAdXASimWTdGb3SXPEtP7jWszmMHY4g",
  "key3": "3wDk6XN9wZzQ462Jh4Gxb77eGSNa66Ct7H8NYHYpc72wnHrxfa7C8VXWjN7c1Mtm3yb7MfNedi7JhN6172XfDVPP",
  "key4": "5GRQYwbBRRUNRGL8E4v1Ed1aCsmj4h1tijapRjAimvzVEc3yn735XVyRVUSsu3HADr8b9GFPdoUnbLNSMBtA5n6M",
  "key5": "36JrHVNPrG9jyQVFf1DHf3e5uVcTW1MrJxU9koVEePc6bwKt8dtx8YuL8Fpmg1vckcXBu1SJYxFpFJUHJ8D6PnfX",
  "key6": "37RzbgCLTQBxXQoWCYT644F91b9VP7ZchtgiNYHq4LNKsAdkcmKh34e2jAaFm41RheRWMVXUB3Ma5LY7tDGqNqgu",
  "key7": "J6RgjLk6HfRNKbAYNrhtnJ6z1ui9q8qQaQDJbLJnnqTg35yMZyhVvwH6FkuE5CpaSirhijjt1z2jkYjYvStEzvv",
  "key8": "5qkGhU65fjx5pwwuoMMu8N7fZ765LA9vNHm3TUZmMjfg3fC6x91xf18pjYk3YYBA4zFkE9NCroNmKvX9fCShurEK",
  "key9": "4yDQyoN8f5RYEWjNfeHKxsV7MYpGCxAsuM1NE5p6uaVfGNGSU4w6iS9R7kDP6RLNG3q9nKviqsRJjrckihiNqAp9",
  "key10": "4FgiWCFHsJKrGKn3vg8xQe6PHDWhNNe771CM6v7Tbm3qacDeqhWekLnXG1mMs24WmTrgeLXsCiWzxaTiNgMBM1C9",
  "key11": "33nWkZqGdc783289XsGbXnifLe2UGDdMHbTztbh7CRtUxEpSEKndPpPyTSP8NAmcxPXEPdyCfF4GHv8ypmcWsYa6",
  "key12": "y8nVLEV6wNTWWDbWX3tTWQLSzJE5CcYqZn6v6SFdU6iBrrE2jtoKhEX4QXnee7aDV8hAv1xnnDCEPAsR76CLEuf",
  "key13": "4c51zUpL2RPiicAuA9Fo83A4w8AiELf2o5n4uq4E4xNFNEBFw5jUNxmwnUvVqCigiLQrNPTVv8admSzuvZfmMenR",
  "key14": "4ss4GRC3uEd4FpneC5M51Nwdfwhb4T4YiGE7DXNTaMuUrmdCGDQS4ZhWR9vBjuTKLXDAYFsimPPdd2Pq3sTs6mZb",
  "key15": "2fQhDo3r2Mvv8APdN6w5rpJEUFnwhVx8w636VyCrTzjBnLGBe7sEiNEQPiiLZ9pBjvS9haC5NSU29MPzSi6DCjhY",
  "key16": "2YQtj9ZxguRTu5PU1XU4BUPjEt4VhmzQRE4NEh1v6EpuraYhP5iCFQsSkV1kL7TeCoM9yztSpNqKvXkPiqGBFyCQ",
  "key17": "3qVpyEDpK4pWTT6aeDd99N4SvxT6968cF5qEYs294kPqQs1hM7nEMwtKHt566NuiF2rsSGsUkXPom3WhzcXmEXXL",
  "key18": "4Fk73yVSuPd5HcwETSkzd7v1hp5kCMCQg1cGd7Xcp3jQEuWqBvCsNiT1LSdvZm1GXrtLwaiL6hQR62tiED7Ptf29",
  "key19": "XibRnAYkB8bj5AtaJe3tVG7VQXQ23vyxJFDEagQosSkxgRtHhHuFSk1j3zTqN4eT1LV69BgxQdHuRPp8SCYAjZR",
  "key20": "5DoMiTWyqTTYAcSNgXt1ZoCuGirTxANBwAFq36oySLtxESZrshVXsrTHpxb2RY3TRCxfXFJbbx2XYgBMAz5An5J8",
  "key21": "31TNDC1D39pcM49GHkZ15UXTHrFjxYWCRJo3vEPcf3EiGPW29zTEWaQjMnq5pwccwyyELEy8GkPS6wkTx5Zcyvji",
  "key22": "2mKVqQbnGrEFNPjuiFFzFzWNRrnJPDhRpYMPfT1Z4VjYMJgca5i48prdMD8ATbkZuVXvNdExY4zAmu3TZLdTrCT1",
  "key23": "2ytE6yBN62md2v6vFUjg3SCzrCUtt47Jhs3bpd9rKCA17FZpZ8f6zKYvMx1bBcuuvTniqThXccLNs1TaoQamF5XG",
  "key24": "2xaVi9CkAN845zH6kVV3tBmSCerP8vfUsQYSTGyim8bcXtFLUNSaRcyKj1keokr7poh4A7HnSDF89PiDEgk6Xwr6",
  "key25": "FiVJpYGXvX95oivRiTcK55xJvoQaiBvMQPtY7bwC8SpJpzStysa6AajELeFnNYY5aNox2rz8etDs1pWVseWjLrs",
  "key26": "2ds8aFn5LDAMax2pvfQCJpbTKGNCuRdJCLRHznAeQxH75BnCk177RFhp8Z1iGyG5p7FxvCR2jUnzx95kAb2BYLTA",
  "key27": "2vM2vE5x9TwVgEqP4ynQNctypYvpcQzV6bYhESfcaxXiFWxDgobx66JVvk8etLHrrfkhirkNgFHwnuogKyJhqF9C"
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
