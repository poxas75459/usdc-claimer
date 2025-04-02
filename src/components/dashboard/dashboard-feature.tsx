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
    "37khiJukkpak6i6HTyb7G9jRfBKAKSTP2h3raK2p73f9mYkCymyPS56PkLU4GGZ8KfViaXHH8NGxwYdpGss4VxMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Kt5Jx2ZcySdLggT1sFS39nRGRiy6aEofvN4m7N2SMMUKghqsaBoH1STLQRprCMWWXcbbTXvS9znAj1wL3gNNJE",
  "key1": "2WftrKkACinGgMLTsKWYH1AiBz1rTPe4iQYY6iETUenzqMmUChDn7p1FpmkjiBPk9dGb7JpYnW5cLVntie98L3Hb",
  "key2": "3fYFTKTSxzBun1iafztU4riLDXhjpSwYobbMWQLoyUc4TZAxz3Vkt9Rbji6MZn8ZZyRif5ReXsqdR4FYq3HWJnxK",
  "key3": "kwdSRgNi9X5TzYz7skKLCZPtSHeNa6a7KQgxezBSih5EWyuFF3vVifCB38x7m3Dzv5iDXL3WTk7GKFFFbpfjuRC",
  "key4": "3kcHrEc9yoxji1LEHYDdCQGZWv5VzoYuDNdpePThekRJZgukj1UQyHMz1995fTBaKJnuqSixgFvzUzYGifd3vT8H",
  "key5": "ZXz3bTxetChgSeKaRbzDYsHnzjqg6Kr1jiZcvqoZb1Z2Rnb1eT31X66G1SDtkPv6C8W8Cf56ZejohSvw5BMFzAi",
  "key6": "5xF7Tv2Gr8KMdr3YPNq3DhxsZaWjrZLGPnvCXFurdvR5YqP1NdVpxufDw67KcwuoYAemVwk1eU2GoF3CXwtHGchP",
  "key7": "TZcMmhS416iD88QKPuej1VbhGrAvvxBeikS2BGbyBdxwJoD5Hc5AYi4QgXk5BMiVUd3RapVQtHP7HdEU6ppKP6n",
  "key8": "3taWXZZgWMfjBsCvtXdUfGPH8YveSFVVGxaXq5iV8jGJKDEZ41MAwWxrTgug2sLyxvYyL3nAmcixJJRxN5hAXEw7",
  "key9": "3CLmsFPWSMx3bvGz5WxXXcdjtp29R5d959DDUe88aYsjZFgRS1ePoMDoE6XHRB5GazvgsvCzJNQUEB9nn484N1F1",
  "key10": "4n1M74N6KuSEvNctbskukqScKBudzNT6Q2ViWJiuXKj7zbL1SG73f5kxyGyBjuxn82K7y1jgdsbbpG9hAXQnyVzv",
  "key11": "4txWHp2KhESbEjyxkSKnoanf6sXsAv8a1cBnWa9eq9UdgvDYnRQQgTYuh9T4J81AsxHPHm8aE9pqznbSNwB3eGHm",
  "key12": "2AgT6cXg8mi2nASDJ6vdXsMJAp9Asv4tqwkxntZH5pmwq7SM7YPBqS1chmWas94Hbr8MH3mWQKZ3mPpUST5umz5S",
  "key13": "5xEG2TgAP2RUBetRhkWFxomPrwBNJW6t3Zpwn6RTKDCbjw2UW4RVX7dS7vY89nPHPt6EMVsd41kWF1p2oS1so8Sw",
  "key14": "4ZbwbMkB5k3rR1vHsJbfGCiigBQxnVfcc3kQmdHKtZHTavghtsD74vZayiixVg3iBpoE5MvCKvTDxaaax4q9ncJP",
  "key15": "2PddchmmfLc1kXawiTG8V4sVX3naxZJfhaLu4kXwZsQE7ELTaTkmvAKhnz66iFYW5xF4LKybcyqyMbvspSpiTv6g",
  "key16": "4Jw6A4oMm8dQ6YiQfDAfVRyLPjV7wEGayntFaMuLZpgTpzxVHpvpPbxyGszHruUF81Py3ErfTNnPTnPp8cyyPH1x",
  "key17": "ox4mD8N16M2J4RaG1GuuQ9UD84kYKDWnJYnkvPHpzCJ83yBKQd3YAy5xZbU7L8V2WdxyjUzEAyrdf9BEuDbz2Xx",
  "key18": "3BYinRGb8T4jNAP4WyEN5WXuSVLHLSuwoM5VuM6ESVGz8Jjonc6vmmUqjwwnUYce4kgrG5gSP5PGWkoV9X8SsR9G",
  "key19": "3y1sGhD7qCbyHFtKiuarLFjHDrmjzhjwRj6HsooivAvyUBTFXayWXMv9erWf2GBLH2gLTkr7DyHPjCBB38zf2qSz",
  "key20": "3Gh3n2YYhBZAJ3tbuMg4FJe9oqHTmSJKhUkwBeBuuAQU4fFP9GaeQyW4RSdKGK77w2KhS7sbnFTTeKXMSYqp8GxB",
  "key21": "6woawtUhMi2mwh9GX3FAJtVQhSKxhHSgA4BcNKs5c2AfgQkbrP68FvLQZJ8uCgSX8EmETupvLtf8yhmVkDqktQP",
  "key22": "2rvbhSLh2UxLhMovCqHmUB2ACsj49noYeqaf8KTo6qh9CKKUjPnFVWEwZ4XXrZefdkSWeHDozVkn6zDwf3nzZGkW",
  "key23": "5N5iawv4HVFDbouP684HxYogtK1C8XpmBXWwFuhzCzEX6haWFuHhhDNcLTPwqF3TyetCQQdiwsrBQCjBCpidGGqd",
  "key24": "qcYDm2n2BANQVAZQ9hEorDoqSNdM6KhJ4irfFPz7niNwadt446iKV88N91wZ4nBJwq7dQEdfamNk3BwuAacUr1k",
  "key25": "5xaoV3AZ2A3JvqBKSRk9NTk1iiNygKdhXYQu6G7Z4CDVFMYDitM8ng6XT9QSgbr5P39GUewMibb46Gek3EkbcRnW",
  "key26": "3CMxsNgpHAB2Z9Z8BKjcbGm2SGNe7veJSDKmPVa9e1r46BhWF3mQGw4dcFyXSimApiyDqpi6yrQcfhm95jtirMyW",
  "key27": "2Fok4fxfnxKnJi6oA7wCNVpYyMtNHz8GKZ5mfJFDcCTJC3GhKsPGhphWbYwcLpYXPiZ3MEGWcBABjbQHniiktndq",
  "key28": "5qA1iYEbBf2i7PXCsZkjcRKJx8jguDP7fAX99zueQpzhw44QaJHXCThVyMrQpVaJ6sJQFYVUu8jovKLmVh8wDULY",
  "key29": "VkKwvVqU4hwpzDA7W8thMEVpQyXtKxLQUyvf4JUn8DdNnVtcsvvN7YtkFsfn9uN4k8nqL2rbvRrFbXKgxMhkGuy",
  "key30": "4rAxuAwg5Pe9YVUTnhekA41U8eR4vVDmc5ZnJDjqXVFqCviF7WUk7hbgpP2tV8niJ7oae7BKHioPBAqZnQAW7nQW"
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
