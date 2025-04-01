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
    "4QZffpieR4acRJsq1v7zdJh8ZEhmnqBxtdTeRqgaFDLXeonKspdrwhvuo3GEu78yHcVCBJVu6AK3TH7J4S9bccBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hdm9d5Uti8N4ZFy4391SvcuhEFE7SjCNfYQNB425PiDqvMe5DwfyXTx8bNFBYwbVDZpgaju43D3AwAZtBxmCQNo",
  "key1": "5nXcmjtQL6fMeaqD8PAfPjPjFDYdB5c1nb3dSv6ZD2pY4rzAjFLxeSaV1bjsp8oraXR6rk51xyRQWWciqbc7NCFJ",
  "key2": "4GDHg1Dgd3Xkncm9hNxbRELYckGqxX3ePpxhrdV8aHE6juSjADka8Ut8FWjw8scgCBqBmhhb52UYs52Q8nvR3BRS",
  "key3": "4FVg7yfZHWkZw88jrZ1hQhUKtMfJqsycjbknoNAcXwnrnEsv3By52nrMwk4bev4Kxs33AuBXSc5n9RioPSojK3xs",
  "key4": "59srWSg1iUFBWXzNn742vmcbeC4BZsaZ297NigtNaSNWTWC2aKXtMPJbc7jbLVr6iqGvDwtKbtCq8uVnyABmiFtr",
  "key5": "5fhYscAdPUnG2DokZQTAK1Pfw7Qinpeuj78M2X9gpwzgZnQY32imirDxc4FQ1mgBenLTj2jvXpAD5VGfTskJQxES",
  "key6": "7diJ9Sd4kcTjTC37WQSpC9c6UMsGn1EsefAzffEvzE1ayqLdm13oLUx2SQVgonJAhH9BiUTfNo4ikfjbq1Z1WjH",
  "key7": "2MZoBLUYx3skFJgiWNZeA93aPqnh3CT6kV7SZkw7AzAKM65bPDbfwn2j65obMrpYx7ZR5jxk18zhoh5RRJtihDze",
  "key8": "44psB36tc7ZZm9pPvjx9jmtkPe3F7iDfxarQkFTSgeiFiMLyAK9456QHYMHWJyo51jdn6aQeWbkkDxjjRXoK3Rjm",
  "key9": "5EEtSn1d6FzPeQua527z3QNpucJ8hwLYPAfkvKfAkG1Qj7TsVfxuKh5V1gS2zDbvKvMHUyFquqi7hBNyDKMEd1GD",
  "key10": "5WHEdvZoBMmWv1AbirnsNEqPJTWFq8eUroLTeQBCF5ZFcxV8bno7sFMBpw1uWGgbRmQRy8wYL2TQ3djJiw4pLzYV",
  "key11": "5EC4Tc7G3nVdWjj5US24CpAJEXwaEUtSChs2vxgAGoJWEapR7e4X3Jj3kMH9y3SeXERxqvyHyGhrk9fF18L7pAAo",
  "key12": "afH6pB2CiMy9GKnC3m8ZDGy6Dzw7LmriXckmsRBDWN9Phr64V3v76PyUwwhq2LdeQegzNeERSTB9GpWfmkczbgd",
  "key13": "ANbvL9xDszWSNsJZonHjRLS78ZeaFRPL1nrmHpes4i1yc4fEE24t5cC1UtQzkB2r4xh4kuaRauUXgK7vKD1j2BJ",
  "key14": "5sGUA5WBSb4nQtpPYy2TftN2q9W2qZmKbJmgdafg1UDBK9FLwkhdRY8ptwJVxq7xNgA4sEuuarmYkXdmLNwQD6CW",
  "key15": "61MeoCtz9MTwYF9VGJYyoN68bSKskLwQgTQY23qKTnf42zMHoaD9c5J9UZUmEyZwfn2BWg2whMBSuKmfDdGFPeHv",
  "key16": "4j3hbsEav8FSvBKyo8oFLNLMwYaAo9wyiDzx1T9E74UKPg6tEz8gCnNNnDvVkv5EQW7m92x8ncPAv7PygNzBLq3m",
  "key17": "4xr5KYo5s8smgjHhcYhgucnC1mweCGZQwDARWtVLnMvWQq4JfaFMq5isVBZVoWnArCeYwL4YieotLWE6j8riFVJd",
  "key18": "64oR2fmGP1y3YsP4K8o73qJfYvmfcTbGWGUL8HwXxmzKFbcLQGxTgimwXTP4ciNnMTdXNs1nwJ75msVuhk4ddsFx",
  "key19": "61f8BeuB86FSUHJjv4y4ViDajSgSJxBBf5p5yzY5tGJZJXuhL3dPrSXwK6ozvJXdABiunvxLhbk6bjmRLvB9KktP",
  "key20": "4xHaSty5Lw35eG424w8fCsP83AkLh2JPLNdBn1mcseg85enMCREFaQKmssfTYb6fi8QMgjYMekSJvNPJKXEgySxT",
  "key21": "67qHPdMpVy1ALzvuZ5KP8YbmtNcvUiuZESsffqSq37LBEEYLYy914C5D4xSwEuqdvbNJr3Zcpf5QeTsdWxijm4SA",
  "key22": "w3E4E3mtDnBqFhGN6yc9fthR5SJC9ZKx83PEBGXRpip3RtNcJbgimh6xUBoU2c7FZzZgXZ9khdmLecB8WixfNsK",
  "key23": "HxQ1JTAYnbrShP2FvQy5t8BK6qABPZWuH3xgkBiMMpr26U5Hwa681BYo9hZkaYhdRd9pX81GgH5xoBxWYUKtj7U",
  "key24": "p7vyyU4oyFFUJpJ6JoVbD2QU6dyskwTu9R4UyxGFz3ZAgA8Ps5k2w8Dx2S8iKQLNM2KF4Phr15KCfQcF8MPrG9T",
  "key25": "4dQRDBVknZrVhyo85K5rXhWVdUXnWrfGJB8U5e1jCnRCJzTW7HGYBkwDtR8kwEvYGuyMHcFTkxEokiRfdrc7AqG6",
  "key26": "4LUhAaDgBD84rdaUJQvtGnBRnLhgdsLrSyqzAQwK5a8CxjW4RKn13gJ7QZbtVTgNnM3UmaWYLrdNgtZ39Bezpt86",
  "key27": "3AmgCorY6pQoRgXfhL4SVeL9RCkeDkBrZGGJ6vuu6EMNBAYSvTUy117RqJ6k9Ys1c9XrFoejM1Rq21icaFos7Doo",
  "key28": "2WquA6WCXepeGyavz5hh99bpX21cULn12GeUrQqC6nN7C9ixmvZVUGGPLs9HP3firiUAvgxGuHiwwEXTWzuxYKd6",
  "key29": "DvjVfJRxy7cpCP2DkgV3PxNEVrYrQn8jevmNBc4MRCPWEiQn1QxKuSyb1ER6ZqWrwAMNkvgBmUFWtodDTyaDdSW",
  "key30": "5G1bpg9cim4kNkFUdnv37bjVWY6zTkLqaa5kRWJzDDeeC9sdLScJ82eW6U1jbrBtnK77QHj2hR75DcNjApHnotpU",
  "key31": "2dAG4kqhGU4hSJBz54ccXE73WjBmYGmNGqFDq4EdKvPbU4BmUcr8QsYUNBANs83vGXYwj9ggo8XcerxRxMuyghzk",
  "key32": "36gMYbXkJFnvLyztjtLMvvUZSTLTWy7fiFjYNP55koDJEiNtucSiccdwsixHgoGXGdPeUdwTttg1X3AjUPjqRyB1",
  "key33": "pb9KzQhFpuS6kWC9WFBfjGNWnDoFahrZF2No5hkc8rPS2ToiJd3ubuJ4aouNbJBktFqsBxnm3XKcM2DQmVJE2G8",
  "key34": "6AkWdtVEfRvKJHJiWxaX4HWgWqG7Y4TevTNxCi5hSvtCpLpSjgwcdikgEavvYk9eBJZH8E1NWe65PYeezXoAoaf",
  "key35": "2iDX5g1tErroFHLP7HeC1985HtcWiBCmdocUYoSSvM2iyp3bq81kB8FREisqVJRMAYHGfUUd9YRs7TPFSNQXAChy"
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
