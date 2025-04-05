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
    "YQDNSFpwpjHSUsHUMWbbW7SBjxguqkXpGi3jUa2iJ7Cz23qjDgA2ju5w3FjYfhsSHbLR9UH6kbnFBcFGQFM9dtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55JkqPS6kh9SoTDGVgVJNBUR9zM8iT74T82Z39kxzs2Shh8GZNkSFyE7ywwH4kpM3CcXzVrAZ19q4D4PXRgizaBE",
  "key1": "5a4wRuHSNx2E3KGzKLUWvYBTv91Zf5dy6ujfvmQi5S1SufkuJQfvNeEnm75Zd5PSfw7ioPiBZnNuRgCjDqGeUhH1",
  "key2": "5Vcct7Vuyf1H5WTmCQgZb8i8mWpy5LvY4wnhNjbfcgqCBtdNLh24nkLYi9jsqF2LvcpBoWxdJQJKouV4N98ZJk5C",
  "key3": "Q2iCAn8rP1nWLhYbARWW9u8yQhJBPpR1Re4MnYKubiaaXZuYUMeWdfjo72KpYUq1WkEc8LeyUxn5Yt4yHPQKWKA",
  "key4": "2EPXtkMhaCEqFgXMFFUuGDdV91vwB8Eya6BxTznQrJ3QDzxucmBMuxJQhFyQnWjjLYHaSWRFCq4cnqCuCi8rmtHC",
  "key5": "4Uee4FZ4HuQQCtgVZubMVbFaheAV16kfDjwQ8oEEC9nJrmGcabZT7QA5Z8H1VRUW3arWW92TfnS9R8U1QWFbh3W1",
  "key6": "5cA9AtiarNSz3kxdS8XcPhu8v2BmFifZcGjGcsgBqkUuaH7G8AN4fAHdGz8aQcRAzraUo3wCZqx2Q1NZUY5563KD",
  "key7": "mz3m3XVmnr8djiauTMEpdUka1HdXosaQpkWhcUBQnDbxEk2FUEHdckDQBkZ5nJewMkg6BUvheT8JVu6tKeN6PmQ",
  "key8": "5NLuN77x4BgVizonP13HxaHp3hJpYbbQpKPMhGxMbvP2592AVPSTDcaqCSuhPQx5Qdx2gk8BG22yvvLKCdSqy713",
  "key9": "4Pbx4QaY2cy7ikH6gLGECMFZr5ahHND9B4ymuxWUchLyiBTwTpb5HgaHrQVYu1TJQAvuDUnP7WXx8djfVjf1XW5N",
  "key10": "rTZyEKReFD1LrChEYhf9BZ1wEmdCXVJM6jYsuaNsCYv6Yf3hRm35DiXSCmNH4AnyYiJtH4FVPrdphnwCyUuiBuU",
  "key11": "oaFNgD9SkitXxHFsdvJQXMsDvxsXdPvkA7Fk31cXitiskGyS8wCfYmz1xnKucK1ipnUnfNuUHEmXtqQYDfiiTtz",
  "key12": "3vU9S1sGAzuFwFZsAhiVu4J6mCwbh6Kp5G4MpXj4rPuJ8GEb3FXfxm2xDnic82xpxbaUHzFF7vJz8kR5y4KK8uYi",
  "key13": "3eyKjCcXrqrGdUyKXNEPZV6JHWochcPuwdUW4DpHKQYJn6Z3KEnshth8b1GZBqNBeMaRW7kPQReCVgjLaYGYuva8",
  "key14": "4HcNYZwdNhAw6kW2tJvZ6reQzq7jURMfKAscqgKELCSg1Gt1bT4c2aV276C7dqNKskkDQfzCvWvuziYcESxYmaPF",
  "key15": "5qGRVemRqf1swqBDRj9QBV6imJ1DWzHz78AKvgB2SXzuvsTJHafUj6w9ehxqi3WEpRcbxWycTvw6ijPUpEKbUrWi",
  "key16": "2Xn2H42dGfGsM2b5n8RmmkuTx8zBnonaNBBd7A6ttPa7AdMiU5AMTvzEDRqtd12VhDW42pFq5b2U5qZ5PhVuaihf",
  "key17": "4yftru1uLvEpUKkwaiJzrshnMbhDtxLz4xCknu8cJkX8qLF3AAZbiDyp9xSGrW5zT2VS3Myw6nmqqNXVjaXdamJm",
  "key18": "35xb4123agaLnM2UzjCsFMbvp2G82nYcwbFbZ5SrQ6LueShcnMHpabEaSiuass4CAQGpnrx7r4r6Zqp1qgqXBmdV",
  "key19": "iNx9wpesSE9NSm6LMzZuzmuGt2FMSLrZcy8BpCgP9Bbm5YjaXGWUtVMVbJ4VB5m6k9Zz5axRCsTYE1oj22dUUQD",
  "key20": "M7hs3kosiguLpdoGMDf641fSj2QHWtYxSqmkVh6SBPAz8BuLi2VfYB5MjDHEz1Rhhoxfa6WsJbNY2xaWkcid2Mc",
  "key21": "3RiVQ8WbbKSUkBaYG5d74EJRNiAexE4YV8cchWnWtHzXLquj4HwjV9L1Sevp42VXrbNnzf5agCBqF5S3sj5ipRB1",
  "key22": "2zAWcdZQ2xdp43d57yJptpxe4gk7M6ZzGcZpoQzduP2LR6mXnUXqTzH5QsUwytWKbrxKNjkzq6MGVDS3yxA5t7f5",
  "key23": "T3AJPyp4QCCsGpvGnRiZha2XSkR2rts3v8A6gukRXHANwZfGUqhmok3NLVCQdxr73wWaoAT3TTEzv8ZdK6FZEbq",
  "key24": "5qpBdrGHjmVHZdNyakfaUXcbEZqHCEqch5ek3Q2P4b26Bo2oZ2uJZ73mEhLaui34GhRLbwQ8Dw5baKwD4qCRGGah",
  "key25": "2MZbLZ4ywR8X8aPwUPczRHn4Sds4qD5Z6Y5sCqjc2W7tqPM5gUr9FFbMrfEf9xtFukw8wjtgF4fKroL9Ec88AjdV",
  "key26": "4TAjrpX2sdW5j6yUrpinRCK9oxjVLiRxo9kVz5mZ1SXRbJAeBmFz2GtReNdxungZAFyH8CZqJMjNt1HQZ11pGfHw",
  "key27": "3LQDBuXRwBe1au33a9sPbg42uHtPjF4grJk8dC2qK6HBQFF2GFCCTXczW2BSTnaN745h1fZMivrjto8gcMFTGpCE",
  "key28": "3HUwuqz9xFWUZVqvL9ccEd5CqJ6cbWVnjiTsJ8thJWYfi4T3ZyxshPBfwtszEzxYhcMmari3R8FBxUMTeGkG6nVm",
  "key29": "5SDKEjRU4b62zJR9QHYGViNcAM5Q2VcbtCCPdT8iHZXWPPJ9EJynWNxgT2WsTYYuX2HKdv3SvwefxH95YX8WNMb2",
  "key30": "2gVoTb8jKKTcxoef3YJxvrzibP4EW5F4QTUtYr1ewjhbX29KNfCAknZvAsukgXayFBQdrNh3DhjUX1gPkf37H24T",
  "key31": "4pfphviyVUGTXhfp2LUP1ecV5S1WCgiLoXBMA2ZaniBE665szbZ19JZKinU3sF4SxGPhinmFXhcV3CJe4G3EXRw9",
  "key32": "bw4diyq3ETtJ5D3PD9BiYbs5vSdRwczC3ouKL3TonbBgrBhAZcMXD3B88CLYK3wjeetakvmEyEwnUZoPZAgbVi5"
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
