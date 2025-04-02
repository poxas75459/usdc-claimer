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
    "28bXMCZPwNj6N5yB98qvjxTrxmQMjmpYnhoL12rr9PLDmBsMx2XNard8Tnhr4cxLh8ziqRnPyvRxDXDzDZn2TEkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMqZPDvQLuD4Me2WrGvaeTHrtD84kwWCMySkJmdtnrXxSrMiHfXwurYdnoZmFdE6okyymEk3En2etJPdBz7aBfd",
  "key1": "3anaGBvSiJHvPy2337tjiwT645S5RQ5rwzZzyFNzqou5dje5e77wNEeaesJUfWwZLzHmRb6os7fwGC1HXAUX9JC2",
  "key2": "twFqwh48mxC4qctcAZhKov5aEdaXpb6Y4kxS14B2W8Ax6N4kt7c3ousPQm28AhmTvV5wzttqGLfyRHJVQyT971V",
  "key3": "5gKCj5KKdtRXj6JPUFdAZEp6Mh3qsHVHWYauJa42WuYcW4UYign8m9EKNQDR9NPUEAaq86UkV34XbibZGu9tWXhY",
  "key4": "xyZndfDu3PNoMtUBVvuBz8s2roMNfVv4Z4Z4c7mqQVCnT3yCRFTp9QgQuGQ16Xstecq5UeHoKKqPu68yGqCpF9M",
  "key5": "3BfazKxHXiCpihCbahJFKqXAZjG6sCZ55u2uambc5E7ZYWm7NS6F3eWVXTEJmEbdkTkWkH8RXNk46qtTY8hJyKhP",
  "key6": "5bhAi1NQh5LdEZpzxU5iEo9b5SPp48FT9XP29UCDyUgk4cU24NCYCzJcvBRcqp72KSED3TWkZD5iVzGA6YkSo4Qr",
  "key7": "2aoKJw4u2xyfQz4oEUiJvuUYcAD6wKHcFRY2KPW7htPymR8KygrhbZzHsJssZHaQB9u6i9YHoiVft3hTDsmeJySK",
  "key8": "3KfSaBkgsHYqgK922qujBEQ968CSdCyyWuew4GSNxbfwz8CwRQ56KEfp5LGB3KFK9LkJ5XDrXaZtoJyjjnkuxtLT",
  "key9": "4vtBEhYtA3Sjg4p9tXrnZdt9RhSr1kNuxGveo4ATUzxRfpj4e4RMjrz2Cn8RAurBakE4vthFsdqBH8TGPdaXX2LF",
  "key10": "2ncfMsV3xZEmGrNvqbDmGseDzq5nUa3124hfXejAexJFn9uYQh2vHZwEkTgdZfUhfGKp8hQKrfEMRg17G6BxSUua",
  "key11": "64tW8rDoY8k5gPinQjihmVtwNw7NqpP5tsf8Dso1b1fbd7NpRmdFSuDgkaeEVxFVGdsVUgxxRvEJC1UKUud2Gdm7",
  "key12": "2F4GrUtid5uqqrfiUFfjxiqFw4Lmg6NXAG8GNYVk3nK6J3LuXGYPWBMepwUYjqMSBC3f1aL5NxqH3Lqgnae854UG",
  "key13": "43vKcqhSkhXqnBSycJqiES5niusvLtUM261gbDJ4HuyLtv3CA8Si6QxaEdrHuTevap6SLrwrMc28FVr7t2Fd4k5i",
  "key14": "22cvtwJ13z66iTYzJa6H9YaM4D5w95SgNpC2g9bGdKrM3jfXHdAKmcekd2Prnfpt4bFY6mSDDRTm9nhVRnEshmD5",
  "key15": "2kDgQc23auUHyXdCsKbimtaHNVNRwK5nZRkk4iJ6jYBMs6kwHqPJs9eJFZGALuwdwMKLdbaU1SKu6php1KyoQEYm",
  "key16": "3CAQScZR7pELgScL15etBFcEmej1nV3F2K4k7AhFBBU9E8YUndzNc4jcMZ8p4XWzSPDJn9sVHeQV3fz44ab5r8vF",
  "key17": "SBpju3fSJEVUeeaJkAvtWZ7hHC78G8TheQLwA3KEe4KDXPiHapJYWtKmHEp1HTn9tTNNxfe8HDB4TM86H7wiJuN",
  "key18": "65wmtuxbkZXRpPB6LTCFm6MXZAnukqPaTQRFzfHdvKx4wvqLVCPdj5z18SaZfLPBKzs2SbgJfLtN884gV94uZmtn",
  "key19": "66vC3Z9Zdu7fKFef2NfK4vk7owmhd5t8MDxwXa6TxjSUkHXR2hxhT8KDTRZaa8tw8y4dcoGEdc8VPvgErxpxb1Nh",
  "key20": "67gDR6UTfBonZrrRcAs8tnD1YuLXjxj6FYyhM9Jp1Xh46xG7TKh6iWDcdkfC8fx9hY3dyKzYq8kV3ixr6pEbMxaf",
  "key21": "nFyQU1iVgYbvo9QEajUaFJFf8LA2YUsquQE7qjsVMFXpCYaxJwYJLPYjZpzBs5LV6mfhL9mJoAm1kfG9FDZZ1ac",
  "key22": "57n6mCY6F4iwzLS2v9VSQ8W6EPbYzTM3xivYSKtxWxxb7FA1WZZmiQ39hLybaugo9WeGBBYZMa49AKuP6bVZ2wDe",
  "key23": "4Aohfo5b5Etg3u31t88roHoxkzd28e5hH9S9MtSeDVaryWyQMsp7Cmwu3jAAp2CCGnV1Juheb8wPtZaunXQuy1KF",
  "key24": "3zTDagUc52EG6rVejCvPFtg5S5BaMkQcuCGJpx3STQ7SWFYhQkvDJKZyW26Wp8QCdJ4MVaaS2JuLj6uPSZ2yGgMX",
  "key25": "5jqiEttzVtvvnNerR77JfarXsbmyEjQLEDhAYegNYqcBk8RHUeG6T3BqYtM87sf4To7dteaJQJT2xyhrKoTTrHjM",
  "key26": "2R16iT12Jz5jihpx2eXFJ2aKmJXj5LHuuNaNa62TH8x2d28BfzVje93267VwgfPZx844BvZvUaGyQc5qcGL5A1so",
  "key27": "5VLVU2eJY1pw159kzgKzemZT3ckGCPBtzJaDJDn4RXGyNeNXvY2Q7CQzwtV81nfpbsEdvzRuLpeuGvdb6UE4gZC7",
  "key28": "58d3LgRDEuDQvWQrNLaVAWHttgJ5LpQp25Skw4VModkK7V9qARS6xHtyqcbJM7cdg6A1EdQRyPneGQxHG9uVrGLr",
  "key29": "2eMkZFodFU2dg9fA6nCmEq8dhT5ByfgmCaCnt8BxNyZdyrhBmiaaiNJMVxynVigfJfkqG9q9WDpuRtHcQAyEj7az"
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
