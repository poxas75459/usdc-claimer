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
    "31du3FM6GUcX1vnPteV15kQfxkmo2TpNGzezRLmGCSuFCq9WzStpjvxLsEBGYWarnvzvPBEHPRYNgoSahUcYK6yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSYkv8XAKrJ6TRdm64ZwwnxqGqGyxxst9eecQDjw3d5QeDWpeTY6yFVUU2ukTsRQ9Z1hYjERhLvGmCDkPT2yv8Z",
  "key1": "2ZcZYq3K6RGLD9P2y7ur6PrndnXmu1eZygmAuKhBPRPRyYmfzvNBpVv1pqFnHNJ5eChrFF4i86xFT54enm24gQJY",
  "key2": "48X5Q7oVMrkaAzgyEbXsfZ2kxrUZgTgtspwbvEkVocB4r8Xq3J3ZoUjXC3Be6e9o4WuvTTeV4LzELRnZ1WnHB2Gw",
  "key3": "5MzNxZzR9ARGXAzyBg2gWaqWSeb5Smratp4FLXNbdP1ucYqcwCfiv6DzbFnEyHrxezYnh7YJKVCrH4DSKj7EDqSH",
  "key4": "5vF9vdQGH1tkfwSFjxNbtV5TXeo8kM3RmVRfpwcV63d7bifB38uux78TDLRsTtyy4GsGVQLSmPM7ekfiHK8ZZyZ1",
  "key5": "33hLRL4HiYhifEcD3kVDUL9DowvYsy6XSmFPBwHGxF4oxFMr7nfWJ5cxbY5HiUEGth4tM7Y1nqnxLZ4tnaLds6dJ",
  "key6": "224VQpgAtrUYYf3BHVkKVSoLqdUzNJ35M8hvGz8kqsiZvhAg9Kd6jw9NrmsHGqpPvk75oUxe1DEtjNcxL31RGVDJ",
  "key7": "43WsyUKmpz8fgGqtbPGjoYwP1XEzYUhdF2zCH6RPWdF1j96pt1ChptutXmhPHNRC5uYaFWHmvL4ciUBcttLXiXap",
  "key8": "5CyqfhJWUSptivrQBtqjFb1g4Q7BQYugmeLDSjSFWSVgSYo9HBD1xcsrTTiNKvY2TmJEWmdsoTmUiYU1Xe5RUKFK",
  "key9": "3hz8fEyPDWkvdSVJUEaWhYGDDJkqAgXCHzairrcvP573AxQJwrd3TnsbMG6bqwgWSQX7LkFAxkhLyhEZ5ABKKgRb",
  "key10": "5wAJ5Pof54UcKE2FJPAukeg6pTYp3tz8XzqRx7sUhpWu6HPFuCGCNdtw7pH9sZB19XpAdGwpwqT8ajewJUcnUQ5F",
  "key11": "5DsHTX14w5pH4p1Wj4rBB9Fs6LTWKc9obbZG6rrzL6BXvXJR2afrGejYiBvo4QPugWJu5MsaVBs66QcU6un1Xjc7",
  "key12": "EefJd8nc3cr93tKkwUspEdjDQ1Kx5F4xUd5QKU1TAifjX5MzWAoybw3dxkQaF4111eczDv4cLRbwSX8T7xkNUGh",
  "key13": "3xcTBYakBZNeh6DC9dHjahPk8iR5ZkXRYtbjEBofUaRcmRvxMdfgs83zLitf2DZ1eoi1mAWGC7sfEeaVbMPK4C2i",
  "key14": "1mW5y3XLiFr1ZE71Y4grSaFJHF8Uwn6vPdoSucHJPLDtv1CJEVP3WJWQL7MmpNuuA8SX7HjjqixpGVuKDUXUagJ",
  "key15": "FyXYcwFTNWuiWueQNusiNfCS8hdunQtRxuSAWQ1Fa5d5k8gJywf9Uhvbmmg2uSGVjVXUgwHzoQdBh6uXx7jFFqs",
  "key16": "48Hf3kAUq5CfjnvMjfzes3Ty6GcWa9m2ZC7Sm25o9CQ4ZTXtVCeD69ySifmV5UYNr8B9WsGQReyKrKuTE8cRa9C4",
  "key17": "zrD3Vk4nxnvYm3UkAvmK4VpqGdvNvwzXdQvNELVjYAMverkP4D8nxZMfSemZdFCHYPBXDiSWQVzuY6pZ2NekxtN",
  "key18": "2YC5c88wqQXMLLmZh5xscXs81e5zhbm8S6WD5VqWE3SPA1jSE4UvDS8jnSYCm1WFZDDRvstJyyseGUaQox813zy1",
  "key19": "5by8vWRGaXF296X92h3vnnJnH4YDbt579rcEVL8nhqqZWbm6zBEAVaoeBWgvWqxV7dALyPWKmEEroReGJAWKWGDd",
  "key20": "4YG92FE98rHTgTyv1EKPyg6ryDaa72wgCj3KegQC4jxY5Wc8qwsem3Q24LoMMSKLAxm77a83U9HX1sdmMynB3a6Q",
  "key21": "UGpQy58CkK9bvGRWWHUEZS3wDWujxwwn1mAaGPXZtq2ww3pxEdX4zH9JsaJ75at2nxarE5U3C8LoJXsNfev47k5",
  "key22": "52xTeGG8PHuYuiErc4ytZwkP4FcSJG6S7xBCXETUHGnRN3HYo2T9k48P7kSQZfnnRiHHXBTiTowRHGxLWRsWrS9p",
  "key23": "52VbX8TqwrWYHHmV6tJ1DAxzv3CKLmVFgcXAeoaKHhipiZWCDXw9uJc9ATmxRixhgJFhm3MTgDanJcpJoBdR21RQ",
  "key24": "59fUeYa3NR3WRSDQELCdyNsL5dUzrvHp8T14XYwq99oNcas5LWMxe2k8N5h8vBHbGxHp8jubBMoi6Tq5zc8t9UNM",
  "key25": "21D68MmTuiQ6nQFuagXZWLW4YGNdMxXVZoWPQJzuwRQWFgsX3s38NGxoDmNiwsndjAU17GiaFEdhwDSkg2Pqi7No",
  "key26": "4nrWMoJuYNMaWHHAf3LToRmUUSYhCjs8NgZkrzCT3G1pu6rRTaUvcrfjwhipoQwVhw8LZDZvJf5eCG1APLUtJpg9",
  "key27": "2S9j1DsRRQ86qEJjfQsRcbGm9xsSt11iHaavx1pCqs31T1XCJAC2y5BqXQosBXaBUmEsSzKWzrZgKeQKKtCQrST4",
  "key28": "Gxx8sKpbP96hwUGKbJGsqDHK771yeLpHxbPdiTWicf4qVvBt5StMSZXqEa57vsrLZj74ySror9jPsg7KyNvCori",
  "key29": "2UnwQCKgAcUoTyWRhkLVXnELof2pGT9esxGBJrLkDhrw8KUy9Moym754qTWDs4TgkzLy9dJSdbJBc3qtijtcWdhZ",
  "key30": "5yKqnArQKekT9ZbrtW2bk9pwUrmwtkiZkPm9rF2LLWy1SfrRirGjUX6UX8Az1a5Ef64XQRESWwcDxVccwvCvYtGW",
  "key31": "3qTeUebxB6RcwQaDXHYWFixgW2rQqjY9bdid9TbwkCT4Awa3jRMbTMbc5wZNdQv3ZGdRn7Cr2pznqaxEbgsUAdPg",
  "key32": "3uCB1w67dSsaeQ8kF1tM4Kd79b2zH7dkwuC3vYqUCH9YrziDBUeTF7sUmmEMhCkCAVUACBMzUEd9FK6mLj3pqqhU",
  "key33": "4DtJqdybnFo9CYM1LgxBnmMc5MmuofbW1rirKSnofwK8ESVbdBj31meL2Ho2srW71CXkH8EQSCv9MJxvwHwKN86N",
  "key34": "48fHr4WV1T37RBXVFEgQgRr9DdKdpGGXzYb5ytpsBiMaqVs7WxDjirnjvwoee4fH2bXQgEZRSXm1nF4cbqqyZ2DD",
  "key35": "qABADQjSqRztsV11ThHMSWrn2KxqvtoQHhjfwoGd3ZSWFiW35foVtWD6oBi5rNEpLh1UnHXCJTYnfjJ2M49rQKD",
  "key36": "3eUPuWsqaqrdhwdZH5KKM22K6uGfYwmSqWSCUvf48uLQmaXs2tfGe6Q18wCH5kD6fvkz7AoHB4pRCGr1RRvqGaFZ",
  "key37": "4LZwSDRy2VqXnNLG39DmbiohEEc3iutvNpeoQ1aEfaeMSsYSqUoHEKZBsczsRy8BBXWEXxwcEcdKCgRqHjEUGuXF",
  "key38": "4bhJfwzyD3sqssYEbKhnsrwErPZwE483pDmxmcD3rzMHAze4bY9K9EQFUK216tmycUuHhqd6YbtGmQMVMuqaLh4e",
  "key39": "x8avUQL8Ffh5SeRQpd3HafbkW2n9AwkWbcw5WvZExM1jhptkcUQbqknBrpTuyvtHJomc6PHYqjd5w339uwNySqV",
  "key40": "gp5VnnF6xq6tQWJdFecQTNcZL3QVkp1yiwb1USeSmjdu3k9fe8zuFEuZCsGLpU5TcWLALBEsqHKNabykad9DYDG",
  "key41": "mMfZvqFHCWmQbxEa11bvYyMgiDgSA6QjgqqW18NPKWp8VTAStwJs16vSBiDERbZcf6TiLJwmLa8rxfmJB1ebv3S",
  "key42": "VA4HZvhYwD1GeA7pWYaEGitD9iCyRBPCvY5ikkVu2mHQqQnFSYfZ7dWz4iC7FQbmxdG4KzB1MVHh6pHB3RW8Szn",
  "key43": "62qfDY9F25Pu5dV8Mf1mSeQpkHkaeDAmV61WMRUt5xsUnymkJr2kKarGac7ZZ1oB3shLxF2AEizgJA8pAs8Rfvj8",
  "key44": "67n37rGMCgn47R86ycFiCCXjqcGouWSZ1pzDNQYafKPxoAXx6vyXcAYQRFaqhhxvsLAXAkHm71f7eBeZCFSFT1be",
  "key45": "5YKZdkCiXJvUapoAbEhkwjgfeSqScdMUCBUK18Q354A3ekJoxwnVa2m66LKkxwZATpTRd4Me8pKu2x6q63qsExMS"
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
