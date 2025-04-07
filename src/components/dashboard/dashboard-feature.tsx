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
    "qRghNyTkCJGRVSyUZqs8kTAjSNAQcSbGygxC9EtcayQAhg6bpNsgtucj1SmRGK4q4h5YracDuUm3y7goydXaxNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfK7c6JTvifSQFGhMCCFksnuhgaSwLtkBVUmRmni97tMhR61aZ35YRert51vXBnmSS41qhRdLmgFbuBf1vPb6MP",
  "key1": "5NHfPZTmJeB2TnDwX3x9W1xMdWbM2dSsEwPmR93ae3XAVDLjjxhjL2xxeMTerRUEnJgMiXHffBQFp6CSbG44yKRV",
  "key2": "45hU4JmS85ZsoSosGQfwKm6AFsarHBsCo8VBEujrhVDswdEB3mPPcfVxaRncaYncqHnvvdacWiojiVpyJXRh8op7",
  "key3": "3ag4MMPsVows6CVN7azCCEJH5BA7FEmWVhrXUHR7iMeH8LFyDQY2gc6dpPpzZkGzKdxnR2F5SYKPRVSDomguveJC",
  "key4": "2z38vXsAiWcDVeDMhjk9KdQooi1wJbkC4htj1dDGFt8TvZ7SGP5sxhNq2zcbPfWSJLaJ3hnDwocAXxJ3uzMV3CXt",
  "key5": "2xLtTmgxGfsuFFEPuaoN3yqn22nGM6NGujkxRgU8ShzfwhhoE8BT23CEqkN7z4mxhy7CBgZqKe3iB3xkNnviR5Xg",
  "key6": "MZgEuzfVxugAJBBnDJtKiiw1iA2Kacx8RNFm4ewdKTd18jhM4mbZNPxEyerqTQYVwVSZnYCN7xiUnvP427CczDH",
  "key7": "66gSq7oLCMtzTdqqeC413NZwcbjAuf9aogo6RaGHK3Wp5UUYs3PRM2Mt8PNJnANkuHyeskNiW8DnQQMWUQpnc9HP",
  "key8": "SNvp7SWYzkTbF8ruMhHfmpeYWqBXfACEdyGXckzxj8wBWZtKwV18AUz4fEGPkJBRyTkTFmikV6rcDfJ1rTQTz2u",
  "key9": "2U9aaZSqtEzM19QVAKJosAbdB13RHx8eAne4YumwJxdNqchwwcaZkPNuSZfcy7Y3jSbCEceoU17RzRUj1ATpBhWr",
  "key10": "5fPFe5BoqdhBexKVGozpYad3NZBa75YyFNxrwoNVAqSrwFCuSh6UffixKoY5CfQ4txzsmiPiUsz76r7LSUa63aZB",
  "key11": "Mqa4WAXn6DLDDhz8VcidNfXLL9nCftXqa3K3c8YiTVgngjsw3Mbgn2mjjJmFk8t36hsRg1sXNDVibNtWju23caw",
  "key12": "5RqYhUnuc4NE2SSht6XoW1SdxNBCLMMt1zLmM9Ec2dDXxBz5BMiw8eoJ6MKHVdpe7bwjFaieusdFVm9Xza2Qhac6",
  "key13": "3j4khFpbeuM9iZ3sKzqLPTWi3JRYtY9msJrpda8jwust2MRCdJ8yu9VfYoM7xWPA8zWQESSUzurPe8pz3MC2X8Cu",
  "key14": "czJbEqwc4DpxjYZhnBswm6N3oT4JxQgZDrnvsnht3Qhd3UFKCUTLwwooyFUzVzAdMqWaMg4HKgGSb9p6WUrQSQn",
  "key15": "qHCZqhrmjimsFG9iqfxerbjdyBKY1L11TqdwoyXLMgnxr6wn56tc2rzmG5QJqxqTMBeHNytR6dq2EZ8aVU4GwRa",
  "key16": "2zcPpgqgMiDKjXZqMrS6UsHuPtnmcZ8UXdn9LL1SKPYsSdVq8reYn3JWPFU9Vvm49sTbaxwvtSmwNojnV6RmEr8Z",
  "key17": "5QCi4JBPX1c1gAetNEbTqnYKBnzPuMcz557vr2jSFBb8wNTNw1LFPmgZZrfQofPcz3WAovsGNtcS8o29KksAGhHW",
  "key18": "5sbf2oWCNsVry8mMvm249QkY9imKtXNR8qoK887cf3P1y8wBhvjBVLLK2emyWVJWXWqPx1xWvxiMm4vifpyY92HD",
  "key19": "b3cnimz8YebX8h2SNzoqJf4cLmtDzWtVL9FvGp5xo8JdCM4VphqZqgGKqLysfq34hNAeN5a5ys83o3Z1kdkhYfe",
  "key20": "29wsxLsq4ib9TAromByRjfUojEu39AymXvhLEQzfzyAZCoYBCL176Fb7pVr3YxCM1NQjCKULmQ1axBXsgRUpyUjA",
  "key21": "3AdrovKC4Wh8pasCsf37KUnGAJ7tvp125JkwpmGdCL2HnHATdPsbMozywaegRQdwqTiH1uKQn6PNXRn23Q8YtyAg",
  "key22": "77xV2YTU3eF9mseDBu2YZGqzmN4Bou6pRC9JE7wjSg6SVY9D4HopQCHy9PcJXgAobdyHi1xrW91QXyx9CQEfG5G",
  "key23": "3gKubRUZQsokdQiRkZC64tdjFoyjjFjXY51gmR8mA1kzXKbnye3XQzdB6zAtZfXMmyqHHu5SNAf23BZTrWSeRtQZ",
  "key24": "2LFiHac99mGhugLfFopS8uJ1FpmRntCN6H9oxuEZyPgU26msf3sRYWwtHyFmpodVTTjaB8xHaazPzjh4AqKm5qnD",
  "key25": "5t15YtKy8fnccjLUVKEq7RVVwERXxgwL3gp3MtNHKBVgvAFtKgL3iq2jzaSNDHjtQxWGLfBV7msgNNHE1vBHqVTf",
  "key26": "46FffUrSQW8iw1EtA3CRQSpdaEicdkZCATSA2XMNekNKRGFW1vgzjGGB3nr7LS3r4VD5hgqbUDW8pZazXVqdBzrT",
  "key27": "3bsNX4cH5ECe9pNEzshsvz9rLpcSFxEhuY4rNpAgjKdwHd9BKsuhqR7yUYRQ6XEgJEttNtPQrKCoTk4arqVdd3B7",
  "key28": "5PG7MKeDHyomewMheVbg7XSKqvjH4R2KJeMUfyFykzPrrUz5THQ4GNeWbh8uewbARuZy3pjE3koiwkNRZhSRH3i4",
  "key29": "25trQ8RZDKhTsiCPHVeP4DKZ82DKdcJYYTEVVTakCoNVswWgzgtHsGW3hbnPuLMdYjvH9UDAtjV46J5VtS3DjxAd"
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
