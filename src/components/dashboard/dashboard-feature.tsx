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
    "4dX87zup97uVSqitAXM1vkvH8gjMJwaTWdtciBVdxTKu9YN2sn8bsKhiJbs4UJs2bHAJo1Ryu12YfcgUtKubMioh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S2uyghWKL3aVz7EJD8mG27bXttkQpz9ckexDDjfK9YneYSZweg385JnQaR5B1m5fYzisHdQbosLY9v9QJBVtrss",
  "key1": "M2YXv4dswNXnkyUHaiaBTBVrNqvFpNMNAg2QbnM7ZHcxDgtQbPKRBDW8TamSGGZkSMo4JL6cQZWVrgQPrDhnnJi",
  "key2": "BxwYH1hYeRton9ScFmE3kRwAm9QnRJq6G4wUoUCAw8v9rQ4r6uayU3AVBpzontBN914zYxUdKPFUtsCgnAysjFy",
  "key3": "Lq2J1asiFgce1xs6HSXAvA9G57CX45JhzYiF64ouGfpCvdJ2Mm6PAaduz8pLjBbTRJULDGdUX3uhjf5wcCbQSnN",
  "key4": "5kbNUFBQ2qUz8eqhmp4mA4fmrqjcXoF2yeT5sdDZ4tjWRhK1XheDmk3XxQnT9aobsUd2GdyV1ManbSR1YnJ4SGWu",
  "key5": "Hhi2xdLe4FJsvDh6GmE6FBzGpswTskyY3ErioBSQ4WiEjqrkuXc3x4kFXiRq4fSH67xFpYUWg3pm6dTi5eqqtJu",
  "key6": "5MrjeQoiAMDgm43qjuhdNg2KhUDUuH2pejG6YCNAjKRnVTKDtAYYkrDYFKVzVadJaMSuFmfgiNjCDjbCEoA8ajVS",
  "key7": "5c8JyuZAa6Ra5EWacGfPq8e4YFn6Wae7dKTzrbWoDNTv9Vi5qFD5masqHr167P2pJDgM5Qe3yc9V5yJX3x42PKs5",
  "key8": "3QJNfnf5DGVdsmS9Zzbae1VjzUUUYNszyYPwrpGmdHSZ24bXuact7FojwbJiaKRiQFM2LXpVbcdzzakmiC4qpQdr",
  "key9": "3gX2ztPrSZB7ZgeTPUYEWN7fE8cRRe6a3XBz7EWB4Hdo2QnTT9Cx9ybWQYafJhBJ51Y8wggFzNVWAZGqm7FgH5Yk",
  "key10": "2EqC2ET6Vm4JwACtPozcRVo6miV6TazqH9d23tknBMC47PfgDi63CkFdnEBf5vxhrdHw98op2CiUoVAZv9wEDusc",
  "key11": "NygFSWZQgzX9quz1yQepGJz4GDfgYB1Fa7qxiNBjNREDQyoGb3pZEwgWfWtn1oYqL295QUuZRCdD45GSMT4ujmu",
  "key12": "2E6KG9DEFF6Av72KYh3y2AdP2v8orRd4v9D4MD7Y2Th982rm82DSPtBkhKimj3PyHRomcxndyPRFnfAinWWqip6Y",
  "key13": "2wgRFNqiUgT42qNeZwrhWnBWgxMxep45CdWZiprSYyutBnMXQu2Yz6P4nsHvbam8eUbvGa5BiAFjJeXxzJFgBnsR",
  "key14": "2KV1KtM6PBuVW8Yyw4QpA3qcyk7dQHFNiQM3EwSu8cubZEegCYE4MYb4Jto1PCnJkZTCKNhm5GggmvXtqYwxCAhY",
  "key15": "ty3ehjoU54hH72TBqJvhVUNhXWTrMDfM936XhZWms23GWphudJfUumxNwdx3sqHaXwMgaGz6bXGfD74yLDRxtGu",
  "key16": "T3xn3R2Qhu27ZsPHUbLXuRQxi9Kk69jTHeDNPRuckfFwGdDUtPaP3goHBGTEfXNjULpZJsVVBT3SvHjKQGyuNin",
  "key17": "48WMwjrgXeWvvXufpUbvBndeHk967z26CdoBHwstbug9n4C1c2ZnDoWsHYHTjEP51NRb4WeqvnNSGaEJEDvPfFSa",
  "key18": "4igspXrpxib8BNJ9HgpSz8dHYH93wpHgahHYewTxzLBAP1FQSn7rV9pd6JF1ThU9ZvZgHVzWXm6sv6h4ZLV6eLLD",
  "key19": "2nLcffZrYM1tbiJcJZJpwJUzPoSY8smhVDAeouJyvtbjVj5ziEMB7Pd8UiSKKFH5iiyFbQB1WicLCuqn9bceJ6Zh",
  "key20": "21yVJNUovHANU3S4JcE7QztfX8B3wZTUrFFvdcZtJCSKVBi2fMc53dLou1c7YZuQhH3HeddgwkBHbZConMgYEpui",
  "key21": "5kxZbrbqWPbLjMx4xyyjQ594JbJQW7yXcz7gxBydFNnjQscc7kbrxgPkxrtnop5oehioKuRkovU8RmwxyiXU46hq",
  "key22": "3vS2eoBLuhiiquEsEG3UExZJS7CoKU5sZUkjXNhaYB9bQqtLdjqjttU62M9XKeQbGPsMM1fynzUfsFPjUXKpbN8m",
  "key23": "yPerhmNDUsMaqZSo5PeiNzkyq28No4kLhC4qWcuvt7rzc5WWuek6gV9cGUuiWDGtxzpHBKZNk2KzwtXTAsJ96tW",
  "key24": "3M9i15rDBhrPXqsmEYuXcHiteFHXhfWEsS9pdtiMgZTozGw8rfL4d4LnUGrz5A5xd8P7phmAHmP8SjTne7MCwcEq",
  "key25": "5qhMNdncVY49TMigGYeqJwDsw6Vnap1hKCCLxvYBzdkwRaX2imBZTX4Fzh7ZkLj1jDAHaYkKRya5J7JP4mb2vd3V",
  "key26": "aid8H22oALdZjM4CokCHyvfpKaTRrSVhYpbU3tCd2zLmtCpwWJx6cpteKqC3yZFKmtdZMMU1ey4d5GdsfDNg8qf",
  "key27": "2KLduF7Pz1csNZCSpFXAn23LvN5b487yrqZdNf9dzqf2uQ9FWB7ud9qFnPUcr3AzfJFiXewAVA8j3tpndnkmUqb"
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
