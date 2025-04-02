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
    "3JxfZuFhDHeEZWRf54thZcPQKyCc7iGeaUt8YYgXUuhbCbz4EWado7ZtWLeJu59NDqeLTWoc5yt6SWDiZcKMwFtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vhL81q1rrHTQRsW18Hn3df2EusZoyLEdhqv5ukgKe1y8xbu6d1bcvEkndvmbDAh48ikiRrtn4fziduvUtMs5yW2",
  "key1": "65kvcpTBjbyGxpWywFfgz7EmXWx69yntGrq9xKmbnVL3HmiK2oUAbovza3YQUpxhy6wYPFWxiRjuBAGJCvV9hxyu",
  "key2": "3SnF2APpTqbv5Kv7AJXgQqtEDCmjMdhTkv4PHyAPQkU4hfYhQSoqRua5PA8hi72HkvCvFBVQsKMo4eUMndSLiDDr",
  "key3": "5QTYhTjgoz9irYb5ebmRQCxn5LESecyEY8qoXRuW2zc9inTWyZBfiAEfKTCpzvYmSHnM58HicPas2P2BG8ejUk8h",
  "key4": "2QGsUGtU2pkGA9vURvA4WQuNJuSi832DYnojn8E6gR3KeUMNPJ926CSrrnTB9mDj1mCmFtrToTPTrZuFp33QPWTx",
  "key5": "4iMaVRJEpoAXpQtCRFcbAKXT71JmFC8VoujoyBCJmPLcuvjg6cnadpKwbYKbsDb9bVhNr2DQyDs6ryMouKEu4LmL",
  "key6": "66ezk61uMRa5ttR56xTndWeBdXn43iFpbzya6faiGkNzqTcBXX2akaDmgUR2GEqPUWZ77vR7LzDd3s39FZAtL8v5",
  "key7": "2fvZPtuvq7QqrE6B1YVRxJ3kmzgDs6KSd4E8GRtVUhxbHeAEZxEaPJdgocBS55xqFxwRZiAk11fHTB3MHcTcgNuS",
  "key8": "QY3wL3XmXJd3sMjNM5RUeNBqnqdHoGZnLzj6y55AEjzah3Ynbh4XiYzr3hD8pZiar7QYnYFdkwW3BC6M7XYnHA5",
  "key9": "3FHGcX8n6jC6UEwvdQq59U2tSFYi8swfD335w5q1Tg39PsyQmNphFynpvqHHAptgqkaDt2wBa8hqYsEmowjQ3bDd",
  "key10": "5LALZKbTppGJydvrqXLDQQpQk7LPaGuqyDpf7LyyivLsMwYNUFbiTb7xvcxVedCWMLLo4D3j5cAgQaquBR7JjBiC",
  "key11": "2DGDRetCbByx2ohCjgXn4KackFKrNhfwb7nXuB5rSx9QGUqgWSDKCFr3PZSuBbbpU72FtPnnUscWfariwXJEDnfD",
  "key12": "5GXzsevhzFuQHUom3g15LsbcxQBuy9FSLaHQ5Y4byWf7QNDuF9yrzZLdRM3q85a5thC8eG2CQfBZr4rkSm77X8Aw",
  "key13": "3We5z9HpryTCxYeaDxW6fSUsnp2MYfswBeXP5RUyfTzY8yUSwvoWVTED4zcRyQrgpW7yuQ2q79z8D18vG2sde9HD",
  "key14": "FVye8SiioTnd9kutY4e4bCC6rSocsFwoLQgA852f8FMnXayADYcHr44ofq6W3YnPq16mWZR5KVMQT3jNGxvC4nw",
  "key15": "4eUAkz5DWqTzGPszptkL6DYo7Z2A1PxDWgpu6BGyRnQNoUrjrDKRYhVgwS9jnXSJEUNZ9uACmBq2emGvW23hmAYA",
  "key16": "5vpBKevnH4uUvbXBegEMaVVzXxgkqVMdeNEAvypZbYqNaadpriZ1AzNcx15daADL3t4EDQfnJrDwa3VCfMkgtYDp",
  "key17": "5GiRXweHVzt1MWCw3rdgFw9QvN7wDLurqnUq7TzZ96229g8crCbk7gBqThuanfs1FZCVeejPRRgCWrP4LjwPqhL2",
  "key18": "2UEfxdWQzVjKX8RBsiELsHnHrvitaq8fnDwhW8MukEsdkoSHNSXUkTkDvWrLVkh13FmJfazHchoFmdmBAz57tcpV",
  "key19": "4R8vU2JRHmaaHB9E3KPGTjWQWH9pHKpPqC6RisJBxwwkWd1tRLYUHU7k4gTdFaxXrTLKv3MesuASZXNWmppS65Pi",
  "key20": "3YgUC5Y4DivzVxwv6uCGWJE7Rin7Xfi7a8tats5TKrkr5KevaBZAXJnTUuJNaJfnMfjJfYUySefpzChzvzCyWduM",
  "key21": "4awcTiYovsyDA9FnqXDorNCS2Zr3W5MHMwyCqrrEJG5Nt1a8dSm8njXgWnukyYwLHtmzURMxtqSfEeP7SnAEre8e",
  "key22": "393AwgeCdJYmoue1TuZqkU7mfVwP1F7WnLjjobNheXQXHMA5JganE3LtunJzpp1QjoBXVz8g6bxu7BcddDBttxVX",
  "key23": "4FLjRqXdX25FwJU9Fr7oRPzeCofKY4eKPxCw6kY9opx6QCKpiVfgFRcr9vp7fW3oiJvbFjapUFWEF332cRjQnkn5",
  "key24": "5TF83XTq53MCNUwWHT2X2sdAcTPF3U7uYZfsBGAygKmczmTBFJBkGZtwoZB52j1CD8dTaHEkjvZ7tVQ4UFL9Tw2c",
  "key25": "eBbm9HV3BxMifxmFwznHqb4t5RspRAzycayTLWTKAkLyikCr3DPcEg1N2YWELMm85sURcJQV2oRPTmMhchCSrZq",
  "key26": "oZCAVZ3h9YNkbxn7q9FMc87yipKP6V2F45avAPty6oDidASk2kQ1mckeuYGNUBcnwuwdrn8qH14pBti9Yv9hULn"
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
