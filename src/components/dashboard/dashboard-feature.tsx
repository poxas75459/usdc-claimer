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
    "3JnCRsRQTMgdM7UkDJ23MNP5AdLnDaDy93WgutTvLrPZimMFiS29DL6CSXrBKsponEf5o1fxFFiebcXnyGpABZLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsCPqUokPGW5hkebN8d59CsAzSNdbKnB55VAXahDd3PU9uNGz2st5gQdyAj9G4yZypADEDQMpYmR14w247kv9k1",
  "key1": "33fmb6wMTzzgLW29W7ovuGZT1JqAtJWDBBFK9vWdZVaJ9hQayuUp84m2HrvL9a5ZR9kEAi5iQ58X6Rix1JoKtMfM",
  "key2": "6jGRfnk8S7SrqAVMZqv3hU8ccefCpFaSUSfivX3PjEosr32xK2tUQEriVvcAVfuSVwMph1vxk9CcED4xRcyiKsq",
  "key3": "5VVrrKA7fHC7QFfQWgc1wA9wBVDK5pXEGowAZAsyPNfGj2wYXqzsWfJuLWLUxjDJegxDPUf9NSV3aNcMdse95H3D",
  "key4": "3qfm94ba82Lr8QwFtioeaeE75uEKae3UMjg97vDocdFShcwzuwvfYuTe2Ut9J9PaPLHSaeWwZbPxqBmWQ9VLDdb6",
  "key5": "3v6gBY8K6EZQtFk9GB7jUCzAqpQVgF4ZoaXkPam5HLJV1k25DAB2x6xhMxzmP22c74DVUeGG534J4zf9ZLZ4Zgkn",
  "key6": "5XXFK9VdJvgGwsTAXAhmuhsduwCNiyb5VYw9cU1T3y94x3BisSUeyR3Uw42wUz5wb1WUVaF8LMz4vae2bF33S4Gz",
  "key7": "648eeiKy1BmFPqkQvV9u1dR77D1pexBgGkr526DN3T8Aaaa53fAkFLtc1CJBk9E2cKCTfLpy8DrvAuAJVQ2hGLDH",
  "key8": "2BeWzjS3jz6ytemLiCfB4FAFueKbrJmNoDcrRckSQnzbPKWqBvitvCZ5735wrQrSJXf31YF9cS4oNogJe1JcJtAc",
  "key9": "3V912ZUsLqR8M4kyHf2tmeVPcywKn9KAgiRBwmptYszi1LNJ1uSm1Z89yYK3x52XSPT5vBTi39D1uYT9B5W6PPbZ",
  "key10": "4b4K2Wdmyp9VZLtM8KaRNczMNJncR3BTdAZpuc1rWyogqzF5e6Uo4Lx8C4mEWR7FnrwXvbZMGh3VKusonzEVFgTp",
  "key11": "2g4GukisHHYnKoJ1NSuMWFog8jHNjvS79dRL23QBSRWtHuVNZRYJo7Kh8g1PZgsVLQgSo6DmSuobfYamxcDHuSFU",
  "key12": "mQc9UJEDmNJxuscV7jKvrUDCKR9163aaUxTnv5Eb8bu73EgTZ3oQF8fq8RmQpjN8AbXP8cHD35uNhKb8kTWoVqK",
  "key13": "4hwWZo9Fsz82qFUhemHTYn4fqryjSYMMSzEmYYzKdQHhEiFYbAcEyqaGyXNMYUZj9TcDSRDHgE9GS1PcQc1KkEUF",
  "key14": "64EUgt4WvpJo3dJFyiRq4uSTbg1gBDL3wVDHTDX69SaHT4bjcKzW9KxZLm3SJdx3uUbqMWLayKApYJdqR44ewSUS",
  "key15": "62JhCLKt7gSKNxKEJZzUdaDivTB4K7asuT4WdWadbCW8nNSwvKJBvLC8nEDMEfQjPAttZ3vodKT9Tcd1cvrjPZmR",
  "key16": "4FPGEMg5HnsSyZGB6gaHP25f4w6y9GtGtA5oV359E87pLtfgJocRMCjDjyfBL29c9bFEw5LaAiteh7mJ2cPUbYq6",
  "key17": "2v3vrFVecELgrrETeL7ioR7uevofcFsPtQ412zutAvddND8eH5q63GeGGWh8JYWcP6oYoNKoYq1StXX91oU6fr7a",
  "key18": "2kgHX3VRCdoVu4cX4zwkuyCWxwiohqQ3aPRDAyMxqQ3JWSxwJLgEenVCH8uU3hdA4bX3c9YoTgSwaHMm9YiRRLt5",
  "key19": "oLMkZrZYuE21k7F8pn1hStX87q26ErQkkvWvJBJJNaoJfBpV3XuK9ZhgoY672bLGotUcyWzxUQN1Xvc436wLz2c",
  "key20": "UbjPHBMmkhMG7aY4RcT1QBqKZPa98QYpRzcXaowBSNgDyp7thdzLLRvmSr4spCtuYUXuBwV5CSU9KNku6p9cVxL",
  "key21": "5eZat7bqvrLW6Z7eCPfr3hwsrEcDXHWD3mc2QMzEUTi4jiKwk3wdAqboDF2pjznZk4jgwHEtYZRMJm9jgH4njUSt",
  "key22": "umw5hU7ZE9ecjpyBc4DAx4u9FYdWKk2qDhTLucRLiftBVx8zz6PVoHsSEqw5JnEReDQVyFufHCx4HdMhzKXG5gW",
  "key23": "64KCnMyTDwbPnxxcsZdjSEhRiahc3swUNL8sPgpHAL2m13anNqZdXF6QvJ13SEorcPTiD22detqx1iynRJyiqmkE",
  "key24": "4t9eRh7G91nqLH5G1Zp5J8eLEtoVPMz9CbnNZztbb9BkKkjC9HPgGodj6UCxisxcRkjnu2gaWCF39wYPhgECfozu",
  "key25": "3AUUtx6ktcF582gtRUVLmWRaWbVCcGmcV7DHChuGvAAVEULjTvvb2JvTwBFeCP44htd1AU1PKKv5t8wwSezpvRXq",
  "key26": "3VvQhCQc3LnEiTM6fHqCqfnVfwxWpq6qFoF85Ck5SuriWz6zTYhVnD3VKsiLuou6aPmofss1PCisJMAtYWZ2Hc9M",
  "key27": "4oTqsnrd1sUAp9KXWHvXs1S6jddfhuhzoV6zMAYdoUjF3rmuznPtziUhe2WwqnxWCdUfswnZ8gptaBgfrYH44Bf8",
  "key28": "KNwWZKhru3zBz6ULXevxsWGhw6nfqVWurK7UGhYYP5HKx7MgMnYJhQn7x2rEjjLCnuyaMMD92zXBubjdGjEZEmG",
  "key29": "4gp6fZySVZcrBQyDHyb6rCv3XYNSm55LnTVPB3RqhckXji8bCckwwXiEtEuwKVCv2pD64siqsY3UC3GwQRaQwQUP",
  "key30": "4gw1Kj1KBDwx2FiSJM46cYcSASfpDKa8wcwEeecWbpApMbEUoGJ5eW3ZCsAevKpaqzMTnMrivpCiB8ChsBRLTR6z",
  "key31": "5SnB4CHqWcbffUN1mKKki5RDGUJhBL3HSjThoU1G8331cUzhPHn2sDLfdzDD5BcX1U8rTNfk3CpQt65DZntbBiVY",
  "key32": "5xFXNDQwL7yb4FfFuru97oYdNbbE2AaV5YUeQBePBRBeGKG8cn7s65Tj2XBdR6WaKZvNyJt4af5yuM8rvzkZmKr6",
  "key33": "4akYJ3yfBQPoVnDFB9QmHX3EmHxhpVe556Lp9LQPaBYsveQzrBaisXbvcuPBPuQy5nTuRvdTnvuNeagRschf9PVw",
  "key34": "3RtGW9kchn5DCGK7AAixZ52NPZ418Mr3fFTkFu8AbcCKgXPjiduFgPdWkRpPbwUm8FeWFLzpGKhu2Z7q5b4YPc4R",
  "key35": "2U9PTb2u4Cqz2Nj6zUMNTYXBSPTxTQt2FKmkj47c6DqaiMD2E9QuHvp5GTK87BHVyzEkoWDi4qCwgofh4pRZtZqd",
  "key36": "2VC7XgqiQG9KuxehFw1AysFFnmBq9DncxpSfhkvvsuMc6H8PXG189zd6Yc68PMx7DjABseXXAQxASvnPo7mKq4L5",
  "key37": "5XoE3aUcoiuzFa6XycDGiiGvCyQ5kzSKZXNiSoNFfa7xhTqCv9JCAxnKj1zm2if61GcvhaRVitaymdSofHwkDSno",
  "key38": "3bD8BXvifQtsWGmPahE2rhkFQiynw1rc7mNWxWD7DbhsLnfbGNHDjSKxaPZ2WnME9TGJYdFgTJJmD2EwdDaXmqyw",
  "key39": "2rLbeURyd48iBnnhs9zg6eue2cp9wMKYxRuMxzFCeWMP29eYLuH8aJW1S3pa3Hp3ENEQ5vHpYQNTYBsMiQu6JfDN",
  "key40": "rz4C4M3FnfURUk3SUCTnyTe4njjHLLTguSaAFiRE7Ljoyxvc6ypzPjpywy8AvbMeozted75C5QJ7epQhTZLGQor",
  "key41": "4dHb2xDiww84SPJRpknw8uFHyLUDfUYuempFhNnHW8a4WAZSdrS8LP5oFvR5M3MwGf1tC7JRoQaU2b9Hjm198GYk",
  "key42": "5kEo47wbuotQWjRqtPBJQDtdhPjANRu7akXsygbzb8P4zQi673i4ChoQtXaoyFfDYE3yYGnXHvfmK2phd9Gtsdob",
  "key43": "3JLjiRLUjwNsJAeEvYn1CdzQCs1TrsduenksL1NDNQR6kU5zA3xpXjhCS5ieN72XpkEt1WNAk3AxjwU2z2vX9w6z",
  "key44": "4ZFy8Yg4iLPRG1gnkncA3ZKnjq1kZWJP7u1HzbW72NSnTx4VpeHCjGqkcQi2kwJtTPUrqE7C5Pn63AvBanNwJtNK",
  "key45": "2t6v927n2w1FXrKQdGHp6Cn38ajxhXuEsjDEJ4rb4J3TnvuJX2GS7aa9EcjZ7et3s2KBwKk1zHkV5EYqmztqcFpk",
  "key46": "4VKLFarRY7J5GVjZvqz9FFir8WZgYcgpfyMGRD76TyqGKXiAC2FVUMYta2vfce9Dpg5wKWHXo8i4xUuTWVdFfUM7",
  "key47": "4aMKoDtpZLPwUqm59ncVf9NGZd2jhEwjZVSa4yVZ24vaJwodSEMrvMsx3Lbem8Bq9pjxrN4nRYZvdok7tQgYtXo9",
  "key48": "4jy8insKpd8WueUxwCPWKDM7TeeFEJQs5VmuVaE5CcpBYCURLdJCeTYbBdGFMTvvEK2GDvwFMJeG1n8f7DNR9K2t",
  "key49": "21tBX6iowPwnzAnPmgnrzfRx4g4Htc3nV1TtRxoMpUCAxsqtECB53s7P8h1Mr74iJZLb1NzG6yFnb75YLBwyQNHo"
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
