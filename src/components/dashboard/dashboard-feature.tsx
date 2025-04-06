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
    "NKdnQc1JByx5n8REVHsztz7mNRFcVtwA5GsiNAq2ERnfaaSKBtAar1B43bX1cyxMmfPTwB1CPU1VVofvNLRnogb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWxy9ERJ6Meof19FdFHA2GtQjCVVr9vZoEYtrzvVGxPq2eT9E4vb2BerWYbWebZyMCTZ9uEwP7qu3Tnz1gpGpgu",
  "key1": "3Xv76Fw1cV4QbQre29E1TpAU11k4m5GrptAcLKMfr8QGbhqbguCm8FLLCs5oLYeXaJXSyod23bdyTs5BzFps2E8g",
  "key2": "3Zb9qMdqsYMu4HBm8wyVayVWHnYQdThD7HnyeQ73Pnb1ac1A583nacSpzBdMK9ouQKzaNuo1pEovhNcfxTWwZAu2",
  "key3": "5axF4YeJW14ZcKzPSzJvo8yziGTLbKb1N4QvY5x9t7a7MuPQv5PbD8m9cLyGEU1jtKBDcBBVfUth9cZghvdEaaez",
  "key4": "pDVdigwqn4C3yUnW7kCBApwnn5Ujd8ZGdxjzs7RcTqkaGv3WsY36jXmDrayBz7HS5iy5NL2H6jDWNp9SX6RBYQk",
  "key5": "bN1b2eTQGaRKS7hxtd9yuHyXzqdcGwnp112qyhocHaH4bzndD2URA4MerAi5RsuZyBizgAjWzKJrpgPhdHxhKSp",
  "key6": "35WxNmSJBGyB5njxXXUawVnT5Vqp1TyXk5PuwZv2SMLWvvvtWakS5YH9bi6YHrrLorQ2W8UGAbLEXZJTkLFMo4W9",
  "key7": "5tgP6Ud2M7u9nEeNu5Nxv6P6Cki3q1SDK7tRHMZupTTUu4293rnqwfWumb9njJDG9avFChT83Y9rr96tWKNBwJ3C",
  "key8": "4YCqTC9HWj7423JQrniBLqtMsJBRLDYddiQZBcUmdEdkmcPhWebFnzNinK9d5GPtXs8SVd6KWorFkY3B5vzqeDWW",
  "key9": "39Vr23iq2KXqsSTvjQUas3RB6REZiKdvS9T2yETJqPGxLwyqnHs6oBgEG7r4QBzEt8GpD8jrxEkfwwQRMEVnqSjY",
  "key10": "3gNYruZxWVVAy4CFqYuArgqyGio7JJK7txxcJnvGDuVKRaCMAeXzPE6f4Rb9n6fb8hvdKamupqNp6cMdQPzLAtUL",
  "key11": "4JCpDCLsvHSMByUDEvw8FD1NyazSgz454fakpoz97KL6zYDWWnu2X9fRKduzpigx7R4NP3swbeU7DDRDG5vU7ERu",
  "key12": "5YLHGBKHQScFGC4wQs4KdrsXdPZJQacc4aLsGuzFVrmtQvXcSWWoThjTaPLq6FWW5SHHJHNdqMyThDEL79iGaPEq",
  "key13": "2JAsr3tiWm23WCbCRh7xaEQeSxASwJGNuHS8eUAattB9LuxmnQVtSnykog5rWF7X7cP4MF6C2dE1rmXDdViszfHp",
  "key14": "2HBAuCaur8wPyV6bez6N73QnEUhynFfwDmQs6uicRwSj6gXwNzbYXoSKMRSG6pd6SA6GHLT6ULufaDFs7Rta6LYD",
  "key15": "riHYi3hr4jns5TQf44p9y2UhedwBSzR5t5YvFkyBYDTGe4fJm2vAsYspid2WukhRqnuRjd493hnTubC55Zzyqi1",
  "key16": "3nsFbKpNMJNr8Psh5eFDmguggHkUbWTMbQvDKkjeyJSWPEsBNTFGq85UyZu8Zwwcsw13oAHxAkrtpgr48TWzKoPf",
  "key17": "5kNFbWSvQgS6XBUbFjjS958doCQEkgmxpGNaRTiBWTkf6HkgaYbjcozSQEjbJAL1MwXzJjAvJSifu8wHPK1f6VA9",
  "key18": "5CGJBM9dF3ZkwB6ijvNnEp6p6GVJMoeTRGP8xAeE5jxStD6neuaRKoGbV9gF8GyQBZu1SoDRTqaziHUWz9xvjAJu",
  "key19": "4fCPY51GkmqgQH2qHsespcmA9xgSkfmF7ZzMQmAm1KWeNrduQyk4TUw167LB9XPg4vcUnTRP1BAsrGqMRkFuN3gu",
  "key20": "3Gz29PnFq9DhPVssyFbmQFq9ey2zUk4hdCYcN2LLF4wLazaqXqpAp5Q8LHQdTVZspRbxgrTJM4JnYH4PRs4SwH2u",
  "key21": "2nLpy5PGvazdTN77BAqtRbveu3RmgcruNoy1R3q9Wekk6Ge6HFtSnAX7sTL4TcKEw1QkfRKr5iuXs15bDrsQkPN5",
  "key22": "4mAWPZe4zcYQbnrAqSQeAvSaoPcXhPnpBNRto1VKqTVsp6ZjEbqoWum5JoKiEGTZPEBAwRttgKn7gzxr2ENPeQYm",
  "key23": "2ZBoaBoLJbvnWSsSB7CxNDmJ2YRmnQJn5KLwu93a7gLhRfNdFc5TwTaMidevDvVdWnV5v3g94pALiJ3RtmMUQjo5",
  "key24": "2YkjRUQ5DM8YUkFxiQnVonh4gf1pjZpz9JLWQTJLyesMJfmW1JpVeGfVMEMqvqnTRuvq85LywUnpBf6tVgqpAno1",
  "key25": "5AgP8fgyie2qVEywEbdPBBLKqGvMJZYjsVdw8ofFz4HBEksyKcECKZuoSLyTtiRsoRaczQQKCEy7pc8fRaCMV1Di",
  "key26": "4zhD8cBUoC81YjjYUGVNMVzyV81eqTV2VvvRPhcNyv7PPemEKN4tYqGCqFyE9iGbP9fFqvLQWhSgU2rNvDUtsdeq",
  "key27": "52MgTVaUY6T3FtUpgcpqxaGuWtGjvjgzQd82S8Y5JgwFiT8vigsydpizRgdra3bwJSAVGqXYQWA2gNFYSX787yVL",
  "key28": "4B4EyYareEsptX1ZnCnZ4aY85SKcLvVgsosnLm8tsLYTUUhi3JZec74xLqXBaeXZVtPyevvhbXxxigSaKqfbqWxA",
  "key29": "5PycSGZEw11T83uaYe1EaT4cwr2VDfTvfNbYrQgHF1JTpvSZRHqhie6Da7tUSXyCeSFdWgJJBiUck7ayohA7huVV",
  "key30": "3LgmkYAuFgk3pfeA9xZCG696npcbUQCXzUiLvWJLvWkUY1AubqkMNT2xepnDCTj9qjt64RLeZwcnucbNQ9q1pP8z",
  "key31": "c3bQHs4PrABomQiofjQrpQsAExf3btnLAAZazqFoZmdLPw9Y9vLRrid6My3ixK2ESNKiNwKJbGFFHNqudfgoCZg",
  "key32": "5mWWBVnWZDfxvigZ1ub8n9HbareP6pshZ7GwKEjqhzayjsc4NPNx8dfY4DKHRB3dXqJWUD8gUFyS9deLJbpkqqFP",
  "key33": "3nahqSZR6DmiFAqAXf4pbafC6vCcnvk74LRb2icvZJM4cK2BwHHDvwaJ8QEtbdJpmdAzsCjV7FhGFDQ2SpxkqHSm",
  "key34": "pvTFpiexaynFStJJbz9GqSGSHvjALWy8crxyD7PExMQeMec9RwUxZWk7YLnQ4CDvtKBxu8DF47UNBC71Avac41g",
  "key35": "2nKX5rDxCgZ8DDDDgBg5aRhk196qSqzY5DKE8bE7D6ddGztK12sBRwwYsuPpPgPfKsvFeBvhGpZoKPNm21Cp58Rx",
  "key36": "4NGWPzLM9JiydRZo75UgCKmhkWADoXrKA2QkFu9WxUMyq3eoQy7WZJgyVSyxWP8j3uhHeGhHEXuexYiAB8nSvmnE",
  "key37": "3DmurAcaK7Ebwmqfm9cmH5A9is1XZSXv2rssUC9EfRfMUjH1MmGZSQnUAWo7hAQjwbB2AK9u6ssowJJPs8TVTKkB",
  "key38": "2tgBpRVzdasBNsGAG63fBPxmimnP9agjdsAb6Ak5kqf8GeTKx2yQMJXa4avKhWeSMtBf53k1JjBZPXx4hMpdw9y"
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
