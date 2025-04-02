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
    "48miJZtSK16Q7ca3xpYH8gLhu4zsHsKquaS4MSde3cacZHuLB3iCwjfhfZhDhVwgi57a4mZpCTL1YmPzD7RijmFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27VVoPnRWW7u1RtaD4XVMzv45VYx6eqB5rxZ1eo7UvXuyfAeFzWsAenquES15FiFvNW939V77dFrwtmYheL1wU6v",
  "key1": "3zqnHHVCkjS3MPZvqnojTasozzMcaioKnGoVKYRnTtP2PVooB9b66KNdXuaUWjo6PPiPKCaeV5dnQytL9JkFSY6L",
  "key2": "4NuzH34bj1t1epWbXhf9E5BcAVzPoJiQguX1NcU7Q5AoVEpBsjYxSQJQrbZAD8mPpBhKJCMt5qaBooGYGhvKBAib",
  "key3": "2ku4EGoUHcVb3AV5VwShkr3RWjqD5UFbXytoPjNEcV2HcGord6zikbckHguBaQrZfCMbC9cmWrcqtjzGTvfvXfh",
  "key4": "3BQjEQDKqpNHsZfE5y5rm7v38sM82fJyUJRLunTtMUasYLJtY2FUQS7vh7cPDDqp4e5XyKLLYrkQwR2sNww7a9HL",
  "key5": "27fLHnr6F1YUe7wAn575C4uD1TEFjmepXTjicLKSRmFDS9W3EbNBx58QEnNSEyvvcytMMreAX7StcHWLA3wXXU8e",
  "key6": "3bru6zQsFk6vZs3rnQHPrARYFLhHT55gn5j1cHUQMFNk4KR95R9PEwpEcJVLxUhU7bzgFYLoaGrgYFRogvdUFsFZ",
  "key7": "5Som3AAzXyPxTXYdNswN4QaiozDK4ge1mEzygsF98zeFUiut3A57QL1dMZMb3aNezU67TWbQ1zGNnduJH9jsLUDv",
  "key8": "4ncJGCmZaYqwUVTHivS763JtCCDsqzjcMiF25SnxB645KrnMEC4U6NJq13QRaHBxgkH8UHfDobB8nrhi1nViDpk1",
  "key9": "4oZFDP9WHNJPZhFMWfLQwhTSAsFeLJmL3aprCAg7wWsz9fQK4ojV3MtUF7DrGRWwHJxqrTP1UF3GKJXKMd8QdSab",
  "key10": "4GdXs5usdYvbxKoToppNPSrRgDWgrNZkmwooqHWd81cNyagPMoTtt1zjZyVg4uw5HsFnRf4sU1j9R4ydYFQqavgq",
  "key11": "4QFgY48P6Y7dMo6a2nayzN52vcm7YpT23ww5aTyjjvbXfnKYu2grLkxF7BdnhTyupAJBgjrF2qGbEjetDTiuxLxM",
  "key12": "3BYJDKzyjWMKDtQ7zFC3v7afcoNHHxbKYxhEPfPDsbJnY2QZL6NLXQUKVEhLgAMuL9YWMvz3wSgLmNuDk8GXqiZ3",
  "key13": "2ZK9beZ1MGTYhig5p9xND4i2FN7E7EJ1b1g1hq83SQQMNWMDcJVZiaRnjDTqkgKNzkEGAuTNjigoNyqgHn9Wv3a2",
  "key14": "371sVWZ5g3vLubid4Nygvg3qTVaTkEexegZcS7Cw5TMY6Tjzy7UnxZVnmQjphx3LHoM3C3RQrvsURPBMQznkR33d",
  "key15": "2GmxU8ybMifxXYV128gkGbAt5tBggCK9T98XgEfgkpVJ4yBB4PnB81Brmrqprb3bytFsfNLwifBVNdj954oxirsU",
  "key16": "3ykgHoinTMs5HtWkmUNfiteoVWafasUquvooizVg61HcqC669PPoASPHA7iMoBRkA2qRg6izdeUBbBeCnTPrna1",
  "key17": "VoF3DoRRnAUKX65dRrbtqy9Eb9t54RriW6mdaHS8B6hzwzCuUZD9ApwKcfJik6B8sw8bvBW3pQ7Gpfgpyj3CHtk",
  "key18": "2XcDNN6sRjJkpSYyzjSoeLjafFe3CgYnQbxN7PVR855C8TV19XxNyXtNJSz9rNJzUmT5jGJMRxbd9D635KcrrVWN",
  "key19": "4xWCYN629tuquhgnEQyo9zLEvQQw11hkmRykJBW2pccQTTq5nLc234yp2visBaXMc54BH9nLG8sTH2tmon9X3cd7",
  "key20": "4HjS1GoJEpa81Ej3cwesp5x8gEomHJbbVAv39vzjpEG1WMdjv8bNJaZ7oPzmEvx9BZpFPTskwU3cFcmVyhsNVz48",
  "key21": "4Nkcpaoi4DGwJwQnZjUc8TrVuVqAW2uq1qYBDr9RKjrPJCzaTzLYptGLxs2iazGMCUCrLdDAUJ7Lxow8G33KP4wk",
  "key22": "EhifG1DiVHXNC4h19asJh4StmhGVJbHEG3Jiq2vbpnpExMeQGZdyDBYwttbib2Wdr3Rw4eyAkNJ343RKpN7QAfA",
  "key23": "95VAXq1oVC9nnyGL2dnrGGrpoihCBLxwdLcvbdfNJjAst47sVdwhWbzdZdwboJh7Jo4qzxQXxjckBQqUWdeEJmG",
  "key24": "5nXR1CFrSmJrhLpaAjGcfWdEBkdSWdVrrHDhF1Ve4UTBUMCgVTs5aV8TASA6BF5jsJnBYkCq4F76UKA78ygDPWXE",
  "key25": "5xkTcWERXZ4jacoGAzScXuX5r7qFemt345WmfC8qVEG4HUsUeSVXn9xvK8mVZ9N5QYakv8SgN7VwcwMuSoTBRFJc",
  "key26": "Yb9iGstBXE2FHxxpHJxq34SvxACV5n3BbX2bRjvjyoWWTiFLiJw9H7oJRv8BJPJAYHjLVkXKU2SFEA37amLxVS9",
  "key27": "5unCjKDKQKVq2MLvioxUDyuAX7Peam8b5seM8kBQdTzyrKpbdjFX1MMNiGRLRnsMaHUzNjutuXJaUKEoHp1mpcJ1",
  "key28": "5GGoGBJoCRSqpahHs1zvXnNZVKx7NzdTxxhup141ZnwLRpfKajLzQd9TfSC3yR1bAdt9diGE3bNGgur6fDgMavJn",
  "key29": "4rxJsMfh2hbhFLiXgGiXJYENuGSmAMtoSqM9gLMSisBw97xZeVUm8NAW6oaDuWoUpTHqEjCWFeJDYvKBTshMtjhp",
  "key30": "4PHDc6diBMGpm5xVeUTu5SHFfssWPs3i29FkRoN5smgz9Y2sbRJzQBCApdyaxPteztSVyALeHWNZ86BBu71q5XJQ",
  "key31": "2u55F3sXKvcSDa1WC1sJmMaZm4aWDeNPRqyF5UNkrd81T62syFvyoe5Tjso7FFCm3hXKfu6KVUTYiBdnbXX4yV9i",
  "key32": "2J7niodvEb1UzsVsfeseX3XEsLFHBAaVGsqD7RVe5Xh6gTiAB9XcGNd8uUXM6T1GpwszrTopYQN7LdxMCpFFF3TV",
  "key33": "2qg8xuKarmiUKji5SgVRGDJg7w79ZKpyxJbsvmxDtCzzZKcAAHZkhoj92WwqAtk4z767UrhmtgsFhrpxXVbwW7Zc",
  "key34": "tr1WQQ9wLBhkms4H9LpBN6hNP8qtCrksTX9NFGMqb4BbTsdsvTd7P9kpsehoyB1fcV7Hm9nEsYTGm5NunUc2nXH",
  "key35": "3BNLW143k858gQZUFdSnc3wNuhUqaGrpEEs7mx8naZUiU6NACdUNNN8aKV2v2rT5tEXgSQDd4QcRWmD4L1aAuhAE",
  "key36": "BedZh6enCviNfRd1sRmBVoftxWGEM4byd9aa3AJwPKtW6NS7fKbdDgn7KPB9qdxwxiWZzQsbWnqn5s6d7MfxnSw",
  "key37": "a6MABV7RW84yK5xSDXzNqZy3JKf53g4pQk1w2qoq3cQkqc5DxkXcTEYZEigUPHnhwiBU434t5C82hiV8Fc2WK7t",
  "key38": "65TWwKAUscUhVXPEPFJJtdHS2izN1DEs3LgzT7FuWhtLC7Hm97SpeXUrfepyKtMZbR2QeaU9NyFyTS9BHqJwS4eU",
  "key39": "xqMpK4prQ2p5GxS9Lqb1ZzQPjHTdCErDnGkqREvbCedarD1mXeLZe4XfjiNSpqYfLSwBUek8ztrbath5T2eat2s",
  "key40": "4zzcwLkHB8H3rvPFuKyFH8STZqQco442NALQbCZFot3cLzH5g3VdDmb7a3dYzSii2XNdX1t1DYpXUW8dLADGStGX",
  "key41": "4cT1Rr25CYehnfcqyW5oSb2Qgxukh3nsSUWd7oUyXvAfia8u3qeZcJuMoYNP9ktJ6FZ4Puv3zoVWgjUxBHgyR6HH",
  "key42": "5epYcxy1rjjuE2eedsAGkgBuHuZGn143TpQ11atcJtbBPor95TddHXt4R3JC3y1jDuiE3EzPRcmUfSAiiwAe384A"
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
