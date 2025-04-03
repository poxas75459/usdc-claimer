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
    "pjYBXKZVwQMMeMT5VTH9TaHuh8AvvEXDowN8GGvn8KgAp1Mtg8dXKPYkA24rugt5Kj64HMAexJhtYQSMcy1AdQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyJvBFz9PBsW8FCevbQavaeDb4QjSQa2ShBJ5rNVdrZrsohKSy4yeX5EWN37QvTrGDd7ucBrshrP1SDt3Sxmup3",
  "key1": "4uYzQdBbLPHBZZBscGf6PMup5KhErNJ2CuFRLznp2HGznNHK3HQySGSxu8xi5bbYzP3Fogtp8h7v8H2VdWVfcfpx",
  "key2": "YPAc3vNG5kxho5ZA42F5vj8iPZvxCXPYAk9pUTkdC39p1CEWRVjpaDthBaZMB9kRG1H79ejUnvNmPqhVxPzeeM5",
  "key3": "4VVyVnwKm5EZp27vJ4QAuxQ7qhjoPcj3mpk9tvfHFWDFogR9G3KqHmReHEkPAcLy9cJB1TXNhkhcR1jfw8CrmaZg",
  "key4": "5LPHtniAA29SCkmeifsXtXUfXqQZ7UqRu8E5xNm9jTMRQwkqi1ZnjmJW4v1jR9U17dqH1Hwa3zgrje1DD1azkA1c",
  "key5": "2YaJMLdkucDai3oMcgDBuUYMPiwmCgDNaTk6zjf6tky85fo1SXiyaXuv1ebnQhvyS2P944t3JvN2ynaGinuTUfNy",
  "key6": "65CT7DkdPkc4K2LsaDWcJdwW3cLsoDM1N7MwbuEupdjGCzGWhpHDLZaJQQD5xtkvSGYzKzGRdCgDcm8tCK3nyG7D",
  "key7": "5GVRLxmV5NZwJHhUDPkjiEnN1ZUbdgkPngm14iKQTYUGhfK7UnpZ3UsEtbVVWQFwfqUzmLrBAYCbKxgKqkhfZAnZ",
  "key8": "4c7yxVvq9pkzRxykDrW4Ff4LYBYNc8wAtRHByKFsPXJQRJA8dAhvqaxsuwsDuBBzGyPEK5ToMwNzRBhvQCaMESw8",
  "key9": "mcsGdB1DTKWwxtZ2u5XefcbYf4oiAYit7M97KTqk5g8okE8sNkM4roxnuxCWycKNYb2mZnpQGjMxnr6NGJ188L1",
  "key10": "5NzcWkW9RnWdTvUhynQZSKqe3XEMFM2jZSrfhpuZPAZYCF3ZzUhLqRS2NAGMueEPCmXwZeMNHub5aWveLCG1sMHd",
  "key11": "3XT6mQt3sBYccNufiD1smhhVupr9TpHsFiVLxmhN296qDrj2AX8uZTpEDfXEjPBfJWMak4htjWT1zL6hMXSpbEzY",
  "key12": "5iBxScUNFzdwkfXeTTLogtkrjBDyYvC66qr1fbEeZvmKtnxjxKQQ94qVb9phXtcu52LC9J5xXXt8nt49mgyMVBHd",
  "key13": "44iQxQDJKvhj4SoPPBHpzRovfittGWn2F1uNU13ZKHMRLmetEZTaDrXP4iG5HUffXsMm1eNNk5Bgdg4ZGCnw48eg",
  "key14": "41RBZo496Ro6wCTE93UvWEQL1ddmRxd1C7Tt9VPmkwU17GqY32BE9osAFoJzTyK3L37uzkMmpAuPBg8iGNCqMTJv",
  "key15": "5tBcZzmN83svz935oDaMsyfbm5fAmHVHjnBYihxJqxTwDtSD7tQqKszinCd4ddphur9NkofHMcgzsQnA2u2SA8Rt",
  "key16": "ebKcGTFusy4HjobruDD9R7pRNZ9gqkZQvt8DCpnKwJe58SyT7kct1Jqr5sZ7qgxYzYa5dQHr7JdGWSU2nVF3G1c",
  "key17": "4iUBwe3JXX8aFvEaCdax9fpGuVLEfa7EBueAF9f37QEsNoBwVkkRBA2HBABKt1o5ca5SXTqRxVjTwFQ9Kh8bAii9",
  "key18": "2nQr26zBTGNWxJJZep7bJk9ux8Doo2jaHU53VZ2FLj32aECy9Y18BYiv7i2JLgoaXWYmMjz4vn6VXDEZcai5m7NL",
  "key19": "Jy25KavhAhw7icMBm4Ub3PjQ7BFVn5j6yE9c69ZkrY5xRUa9dWHWiBHPvNR8qfF1Zd9obxitnibTU7vy1yNy9MC",
  "key20": "o3emDVGXnvpp2dpaZU99zWNzKxEMdmkHiShUBBCQuABjP3CfwXgFywmKGwVFt2taE5ShhmDziUMoEWhjoU6NfjY",
  "key21": "67eiKNKjAwcL1CVHq5Ff5KRvTzHpwBd94QcimqZZ4qwaGfrzT2fVWuWBj9tPJJkJwpCi5Drz4xHAz1pP2zE4YmYh",
  "key22": "4ZQzaE5QjtYJoozBhpjho48eF1p75wvGqb1QWDaVrthLwBKrq4EkJLqmeWWXsx535TWmAHFMZcXsvYwAGqnJ1qzb",
  "key23": "ckFHTub2GVgr4rvSEfXswVCLwhVZ3kCuBsZnHSVDdwXgrHSEyVnbzLVn4RKDhxnUDhzthPHxhBrUyJ76YorAp8z",
  "key24": "4BvR8ivHyZrDdTfdR9vPWYRgmQvnuUseYhHvGsGcXxk2U9m2h28eyKu32aoQjfUDpsavPKagnJnVghbmeVy2EaM8",
  "key25": "4sZGNuuYzRYAFndEeiR6wnqo6mqA2TVfEJbYbwQLXr1bzbyF4pfgc2Wiw1a6EsRGznBwRS7zYqM9y8yqinvXAnj",
  "key26": "5ZqvGFZbZ81MeiwsAPpBG55W34hdyRqzoCxgm4L8L5jKeru1AAVuWk6FQpSZRHmxA9WhicZr7P6Qp75htrEmQMHB"
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
