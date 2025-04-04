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
    "3cxqMo7TTiHdsyju7VLHLwaXWow7eXpegTG96y8GuXmHZTRbd4JjojPskyeRQcrJDadzngyScwQkFE7DE5cZATyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XinBNeHfaR6NbZwYrWMPJ1xbDE3aZVMbEdLeK4Xp2EmEQtEs7VZQALrVq3j2jzrV8rUq1jYFrhMwRAhTsQmeM3s",
  "key1": "4LgAfazpgLx8xKo5yQwHZiKEBRrkwBsY4Sb1h9wL9F7mVnjq5gL9ApRwVp4b9X3iJZMkTfyXu25nPhoCi5qkNhEV",
  "key2": "34R7DxxXnwFruPvpxs9HURMPNF6qhkF5evapUJMNJr6nUWKQapH937RwwH4NvG1UzVttvTDDe81uLGFxYR84w4E3",
  "key3": "rR7fvW34JG5W5HriTLtFjD3L2bYtzjYdo6eDK4V3qrwSQDg2q3cG7RF488ukXz6iQEDHytj2wyRmWHNkFs7d1KF",
  "key4": "5mpojxTVzrBhM5sEXLF8PGFGpyEZwCqMk5UW1PAWDuEHbpUnapduyg6it7NhDnq6Mouopqt43Y5uBXqixx3W56NZ",
  "key5": "36wv2VrTcTMLwmikz5Ue2dCEGCuH3kRxM6GNGv2CiYcBfQKcFhDy61ba3xwQ1pNR6QNwWoKDtwSnZhZAiF8PUBVf",
  "key6": "38ajMmYhB4ffX6qZgti6poUJLPq24kSsuuTDuaLkw9guHpzXGauJTGktgMQMxAcTRdo6oLMyguz1sbuPNoLbYpmD",
  "key7": "3zQUGZ99LFj55ZBuSLtcCkMSAhZ6SPqZAAmczuRrNHXphttDYEzYWF7QSHknMuv41oPLH3KVC9wYgzvwmjbAgaBg",
  "key8": "6BgEfXayjE6X1iFq5tLPeoq8UzTX9kGouRGbE9QnwtxffBFJSHyevYn7Lj7yekRUahy2LNDWtZyb2burteUYfRA",
  "key9": "5UbpBUfy54MF8NPgnhYaSeehjZ2ydNUjLaZ2g5Jbcucxoq8U6k77DQPjN1YGkp2S6wPbBsoSqn9pxaLtfB7yQxxm",
  "key10": "yUFNw4XFSm3Lsunqojhn8Eeyz8fpteqpUq56KrZSPCHx6Luwg9yvtBqKS7ooJDTVVBppmosm36sCa1RoiKKMuhF",
  "key11": "4z7iUKMF1Di4iV3bZF9RAdfeRyoye4xAbzD94cScewJRVGk4xNHRy5E9eVZWc2eaDe6UQTnaNrZMvZ8rcU6Wuh2G",
  "key12": "AyNhhDiJZvk6BLdGnaFJC9W95R8dQN5cas7vCx1bxqGaRRAkx8QBrbvW9C8r8cAR4DM31GwLyCBiSCLxosq82wS",
  "key13": "38chA8orcZMNVkPgJCvstGYscvPDjXWPegF5DjhZFiSg8HrjGTjS1QkWyvKdEvTHyxTvYhsEuj6nYnmNsk3giynH",
  "key14": "4UrpGmScTacxyqSwxG2xprvCYGFw6hVxzuK6PnUDiCcPWEkBBezQ1ZWmLcF259hQJFFswPX7BMS7aczZzCJZEait",
  "key15": "5aMVMyfdQfQriLVBcKCuosoaTX1CXQzWNZkweVVtUs74oaEmoKKqS32U7qmRkHG74egNAzoqDpbJU9ybj59MtZJJ",
  "key16": "39iD4pfRQX8LR6w66izVYHneNJCiFUrzbFqo13nXp9BgsRjE1bBwcHKJPQzjtd1iaZSPHUwsmEax6w9AAp1zcBHa",
  "key17": "46ZThcz9zXGnH8MbK686YTcBRyzQgKnetFeCVv26RBt8SXtj2ZQw6kMMHMiua7hgjaZ2k9sJLpFoBxsss9xncNEY",
  "key18": "8UcxPxAiEZ5cFeQ42Ves1BvJAEn7CNfvWiGR5EE8BJm9h9EH7snUZQ8foxYVXH7bBKDifoTBDbJaMLrKuHyLLbw",
  "key19": "3oGnF9KnEPUaGLJfssAh9gKvMSuK6L5rAqRLj5Eyr2QkCzGmFx54STCQAAUqLB3VbX2hTypCAqBHWuRN2eQPVvRG",
  "key20": "5gvLpBtV99fAuKRAN1bvf5okDgM125GMTsUuCYyQsFCyhGkrYXo1uoLEnMZWv4RDnoNvw6C3G2J4SGgaF6fghjtJ",
  "key21": "2CNSVT3snH5Xb3kWdDXMAbfP8GCSa4AZjAmnrcGwgfrVMnFPcfaFZdioM7SL8PUgxuXGZZ19MYiEZPfhPvd6tqgX",
  "key22": "5bgoutYHA9PwKRDVCo4yxrNCKhKZrTQPggxTdAdGnonC6gwXhoeFcEmBCYcsAMiNYkpumZF6rGWXjagg4mmPM6VJ",
  "key23": "Ba1xAVsBsbkRHa9tB67YBKesdGb5efAH91mn63i9zMmeUB2xFmdUPaEoHmuaQ7e5exe7mn1HF6aXBmLKBhaGQ2t",
  "key24": "3h8BaG3WoTwhKx9pvmQEpHKFfCcnsAoGmY2CiF2CMpjQjGoZP1E7XgBjfs8Um89cUGsM1xabLeEZ9jMqUPPA3CQe",
  "key25": "4HboxQFFvB6rhzkswyxVzGNWEPprr38zu1MiVxefNmzi5PmAvfvgJ5qavffYXrhyKut3oqYffhuobRgTH8EpyTZ5",
  "key26": "66hrvwSMZeiZByq94hGNgJ4LHES89WyBUvEmqLmg3zPVa4653QFSBptSSzMwGq4eVMpjUWW4Spn86eEbc2KNWAdr",
  "key27": "61SdVANF2k76M9K9An1ygaEvdNhbz3SCMg8wx7nwXCHzVz8etdhrqty9QfrTDv2JsgjEz3zMcbZZrvjoP1Yju5j",
  "key28": "5pHx2h1gnFC251RiXooZ7UzuwBgUrsPXMYKFpbcGc99us4MdSuCDkouSVqAaBePieaCgkyuAm3Mmcn6R2apsXd7j",
  "key29": "2atHwBJhpAMufL6eTJBwKVLEPAHtEmJPV6tKebPRqRj7o2GBRSQsSkBHjaffEsGbctMxFP6KQHuY2xXMVD3EX1Yg",
  "key30": "3JJuXtRSFfs2AjPN81U8rB4umeFzr7qoPHBHjNeHvPuuBvTvGxJ6B3EHiuam9dMCX9gNaUUy5TwLwec9TPDSLuYL",
  "key31": "64y37zHEbEL7pYNSG1jpvzUpTFSBcXr9f1WkJG7p5h3Uw1V6s6rVjvq9dMz4Urhuov8uwGBQe81hw4YiEWzR8Ane",
  "key32": "LnsjFovtd4mJoPgLRfcXVJgchTxeRq4yREyb2NvHXQHhe3whu9BgYVKQuLBkSz8JuKeV4r3dXH1ZU3VQGvRnKaf",
  "key33": "456xpwSXmD3ecXSMQDeAWEFrBoti6QFDTr5JdM4iftutU2n5hCXzAzLgqxK9hCWoBgxCNUGeBnRb1xATJxoZ9Z5G",
  "key34": "54L1ZiRvAQcxvjDz2n6oLWVnNYbppUn8q8e7bUwTcNfAJPJQGv9DUkwnwNvzLD3HQ17gqVHDBVSRKEjuBHqauhmk",
  "key35": "3G2afLn9uMF5SDC3m3NkMZgYmF1CXsRAx86KJg3ZfPBwtXQvC3ETH5AWmRCsv9Q9zmLfy6qYtUdkEE9xE2jyjenS"
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
