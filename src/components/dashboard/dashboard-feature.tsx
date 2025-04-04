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
    "3KCaFAbe7phyEHd9JM2u6PeH9BeUVQRT74ishMUgg5HJbEFvCdG1i49xCtA8n9gLynNk23i1mxKaDMuQQTamyuNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33BjEggBtwyQNxH2yaCHNsGXDeyPiSsLdpdLCYAtWneMf6NuiqX7SUxxmzws1wpzC6FBzJjatDdTDmXsWYo3hZJh",
  "key1": "mzEGJ9E7j2iNVUYTD5C8d4MwZ19v7djZb9GY4G4zKQXPR4L3aDWj1xRkysNuhSnresohhoJuQbe4KcBC4UWxr27",
  "key2": "4tgyn2A5C1o5yahihCBMtnt8yLbEgR4KWkX1swmfA5SxDJj4fcgCh3JHT1TcBWvmvF8yPm6ZXJSqBDRbnnvN9f9H",
  "key3": "5Kw8BtSQkN7zjxsk6SjboV5KdceAnnwmn9wcb7x5g1HmbKsbLez1fLxT2cNhXtF6fB8zoj6grK9XqhdmGLysEpoA",
  "key4": "xpshGVuZfzNqzne6Bh5Jvh6RTdqYnCfhQFZm3sKghGQiKEqoZ5SCb9kGi3YLbtgjwSK85y9uB6Mu9nCfLKizmt4",
  "key5": "5PVFQmZrYkijqecLZw7XenmogSKs7MFqjspi8aMtqVUMJVkM6AfgXb7JR1c7itWUNHeUd4T2TbAg9mN2ToccTHFg",
  "key6": "tpMPFezRryz28nQgpmZowRCBJzV7yuBQ6Cj2UWWTKq52qXcqXcUjjAsxiHJMCFY7c59anJqiSTVd2qb9diBptgy",
  "key7": "3hvbm5boCrAF5b5A9Gg1CbpR4Q7b69tPRHyPMyXH56DwYrSsZq66uVnYNokQ1cE2Y2Xp7FhXqVFCbabwn8myzKv8",
  "key8": "ELxCnVe9LsefAUXBuxojvGa9fEqfq5UXvjXkWnhvbEsDFA4Eo3MxWQ8Br9okzEybccDmKcchGTgcW9BZzcCJLGB",
  "key9": "234w8im8xzrqUPmiQ5J4zmF9cz69wCe1xC5oXUGGD2UzVpHmWvcSbN6hcqLYzMC3SCyVMbS4BBxhkWtYpybb6aQY",
  "key10": "3pwoLcsfFBmeVx9BhPNc19diTFBA5rxtNyZKxX3D9iQMkBBokzKwNu3fotQeUpajuUFJLwaEQ6Nc91jr9CbQ8hWH",
  "key11": "gK8yATnBReAqiNsRPNGu7wfCfg355rUe5AJ5gHWNem89fx5xHFofebM2YWgXCMJozptq5K2KmUUPdtJNhirF8wd",
  "key12": "2YVQe2RL91y3nKRjCprhhqtFozorgEYcTCjb1gPz7b7vKZwjCtDpv4TKZExs8ZdKuT7i2EJSM5gMySXT5h2YoGt6",
  "key13": "5sag8xGnzDS1mV62AbdXRdPtwBwKwHo2ShFJvkX1qUWY1YZ4EK3GWq15pSsZZ73vC3XVy1x2LSL6JZG9bSSP9qJD",
  "key14": "3ZKGhnqUQf5hTkxioEU6ZcECxWdpSvJAXeDLRcLyXqaTmZeGmWwN42ru31Q26Lh1Pb8GP4uSAxAJjLXb5JPPGVPK",
  "key15": "4MTAkjjsV5NhmKsWhmRvK4FbXHZ7igBXAuTrUBhF6TNPGDFsrim3mmXW5H7NUfFUmCQGYFVhks64ranaqFvqoJnd",
  "key16": "28FBgJBZxHes5ZKBPuwYSkD7QzNsKqnAfkssEcWMjZJwyY6Stkkz3H4Z9M1pQtXMvyDTyv97a69Su67kUpSXLvz8",
  "key17": "4pGL5isCYfTC9g1P7S7GfxYT518Epi6TWGg6raXQo2ajLAhcou5NpPjQqXUdQJn1Y2tV1fgX87eAD9UvPDoWhvhu",
  "key18": "4oDsC47xDAZk9xs2ZJSsWLXHHfWJmWGz8zwMVFJowQWtGhK31E7HAU4cx65JqrowZU7TM478kzmv9pFssGbRyJCD",
  "key19": "D4bs5hNWiFW3LgZp8omtkHeqfe1xS19AHwbbTF9mqFvFguHjxM53pjVgHtBwb7k69hb3GYLN2us9SU4sppbA3n3",
  "key20": "4KdgoPdjX6RcGq4yWRKN3LVjG6LzcoDpTxSEbAQ1BZacZzoMj5YPSTbacNiC9kECpktfbPCqWeqoouCFCrvmsBhR",
  "key21": "pCnVyh45YHPtrBk2N1ZAEGLBU5b9LaRZuQL7Fft8n1ferKqnnZx2giczKMa449UeMVUVWESPrCNChTSnrAmNGRk",
  "key22": "2LwRXKtwMxftLkVmcUeuBnCmf5KbJNtJqdsEisSqap2FrBWc4DeLeHDQSbAh4BuvHhugNdSN55zTxMF136pVyW87",
  "key23": "hc154C86SBWrSQEMmstRHNxj2AKk4veYMFHyL63sBRPnKk6WEQ4WuoUvKk1RYYEJj6Beuq5JJrgnXdY2xpX77vT",
  "key24": "4vJrUHW8XrSXwy3PBhKTBDe64unQZ8a3KKyq3ENTxK5Ai2q7ndo8PB15ZebXKVzw7tUPUnXhKj4K56J1B3C2Tnve",
  "key25": "62T4Jo3TpT37QfEKL5aDZQxjCLKqPUPxALmPd3SXZxcUj6CsABzWfFPPyUBoHLVAiD8L8RDj25E7Gxa8G5zwWugj",
  "key26": "2rcYwYtA7WWxErrYqoLsXf52hXqXMDhU4eKKXus5mi8qGGiuQAg2eHvnhhU93wauD5xZW8e2Sy4EyjJyqHXjgvsJ",
  "key27": "3UziPUTeCsfv1pciyPV6PN3FDfPijfP5i6yaEfspqRf5HYyADYkgmx1rbiaK2QzLxLhcE9fTQqh2XG9b6Zyd51Ua"
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
