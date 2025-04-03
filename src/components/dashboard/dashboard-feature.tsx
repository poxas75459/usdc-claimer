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
    "5gZFxnYBMW81ESN3cKHfsYp15gksqV1sisufnALBY8g937JRQPH5Dkyuc1XS8dZgUNfunkbskYfmkafvVmrnXYZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nTky1SL4jo6HhKNKjCDTdDes41CnpwikWHCBB4pZNqpPGigoaEk851RFYR4iTY9N3udAwKn7JwpnGZNx3MLiFEL",
  "key1": "3R7yXyNv9wbPAhzrhVCTSkoHbgeoTVFKhxuGtGN4aJb4SodxeXnpT57tBP8PJdaHncFgZ5u4vC5egYYsLAKFJdx9",
  "key2": "5ZpzMdtTSC54gAkMmZWWsRFZXrXdRR8oHm87BBxLw2utancrDYrdLouNYVKfyYrPVCxhrCrbUN9ms2VLa1X6F2K4",
  "key3": "yxMLWU5rahoXv9dg9zLFfEtf3zzT5hXXFigNdV5vPPAcdgtXV3Tu7Yd6QnAyjoiGyu3zonS7gZnDH2F7tG8LAW9",
  "key4": "4t2qFCfT33EESCcU3pYaatKLfLiqviTW5nVc2cpuix5axG8UEp1j6gcrRo1UrtBhJxrLKEJGLD5emgwd3FLCP7fn",
  "key5": "ptcFbppnX2BVAVGXyu95RcSCDoNhm8ohGm7ahmvtWjQGxXTN4Wq76yfgN1F716nAz7Z6Sh3jpXwQGyrZzXJ4o7U",
  "key6": "5c8sS3oM45dNVqyvUaesnLprYByALuCdC1dSikULs2B7Snqr2gYLoDzCFUotcBQVAwg8EGYX39erFL8Yg2XgtuXv",
  "key7": "UBuhqN3orFe5BNwXxjYhdAQSbDtx9Y7i2CoHxTMdkRZZseJXtDrBk8UnKSbskWqhtM3xKArfkzPByLbpw3cPNNC",
  "key8": "2E6Wu3hbwyEE6iKmAAqGi7VLFALWpe9F4dL6rqApd4Tro83VzAUzdRCUtrcAcCZx8eDKEozGpA9nLp7JhDQrSDMk",
  "key9": "5nDBiEJtfvFhezSRui8rdcYrqj47fymCYoWnkERjw2rLNur2p6Rv9maGyucNpcMADzeRmzBG7kPL8wm4JGwD6yvu",
  "key10": "5pb99mEg6N4ANDuNbSQ1pUv4vH4A4sxDtziPzzQvbERvXEbkXfqwY28bKr3HJsdXCB2DKHMTLPNC4aS5gSYddpQP",
  "key11": "MmoJt5Kma4nCQDgGwwSRreobJL8hSfCs98EZY5zExJgvhodbD7Zv8WJQiZZ5cnnFXVFqBMtMgz6PUi4cYevDyTW",
  "key12": "4YmPqauUmEc8Uxjwyr1k5V9n8EwU1NfSNfJwa8gWxEBbu6iNbLRzppnzwWUK2BhpPngx6zNndBxKLGN37dqD7m14",
  "key13": "5KqoJVGDPLcLtKYzKuptaGvv6o4NbnJxkNKRGvEm55MXiXxrLe3z9ZP4nvcQGwx5EucBDSY92AkRotPTgQAZYYBK",
  "key14": "2xZmG7UUa4shr18yzngkDBpHKvJHXGoS4bBpSXTKepC1THbwP1XMaT1D2vPXg5dwCPgn3pGESRdZp3AkwvpgAcQJ",
  "key15": "4RSdL1zr7A21xnKSGY8bvf3Ek1DLr1z7tNk2Wrbt49re3pxT1M4JKXvqX7kJRwvAhLvwSK7PUnQshtqgpr66dDAo",
  "key16": "5HxoJLG6pV2gwTBWgZw4ftmLknxqfDbCB7wvyeLY7fqn63y6FMR8UVqkb9WJvbAyYznMxjxgnvzgSZdYe9FtvX3W",
  "key17": "cLAkS1ffqNaBXnQSX3Rjjkjk2QBKTMxjjZMtgtAq6tWpuAZVtxk6VcdKA6LQNasjpgjsAC13MEeNDYxncmMAtUj",
  "key18": "3Eun4vyvVxVBSceE5uWHY5iumrjZ4rUmhuCuovm8kYMMGrR1x7dPbA2Qy64f8W3Q7N62teucUynp5WXZCnDFvBiS",
  "key19": "2Zm46pzpkHX4Lz3Xp9yT5KYe5Li5urGwVbeXxVC4BTggY5RDF99xzMafkA82E5FQv1BGrAWg4TLCoX2Wqg6Nj9pg",
  "key20": "5Si5izxxMi2AaLhfJ8FiMyFUxTzvhUCccSk9xNqdXA3H7iK1J9AbbXbP3dP2e1yadRrrZD5Lbz2kztpvVMdjB8W4",
  "key21": "5LRRFnS9fyuvxVH9jTs5kZg86NrPPG4CBkD3CKdtH66qJ5bCAU2u8SR5P2FFWjt9Y3WwybKQjDimgzH9jdqf1epN",
  "key22": "jrHuP3H9FKYjAdETV7jauY53yN3wmZZGgiSmUxUZNpuu5fnss1Yi1cKFeBJB8AAhesc1dLjc9N4K5sXc5zc8Rbn",
  "key23": "4J11L37NAd6ivL6bFdKKMHzMGDDJY48BgcUAhH9raU8C2LfgEBVagAsn3LczRyuuYJ5hHJBoxkqWYVsXtkZHxFgQ",
  "key24": "3JVNAVyZYSjEw7VPKZamUzFqrv8rvzu8nWdfdXmwQ6xCyACvgB32yaZsoYcwyBcDwHELy5FYPJ7SNKRKG9y9kVxB",
  "key25": "4xdgvUZrfEDR5shToHMDLUpgAS7MU4mCb7Ne1ojdFTHKSbXJ6Ph4EfTzuiUP9z7GQ5XD34BJjwLUHExDD4B1XAfL",
  "key26": "2QSnsbb33MAp3KxzN65ggKkWGvKRGsKepbS56boiR31rziy6Emv4USEMe6X7KxwstVgySuD7wRJzDD7x3sx68W2i",
  "key27": "5wJp2JayjNa4wy1VfjXMWd6Zzh2mFk2cRR6srMNjwBKYBirbVQptQZ1EuKTeu4R9naHUhvhz291xK8b3Gwv6kjLn",
  "key28": "2sKvh1C9jaoJ2r5DZQ98JQUFD46M3HZYa9xfyJKyzbcEozcE11m1YUQiRqRMfUynYVhhomh7c8bN4ofXTBxcjE5j",
  "key29": "TRhhLu2vF9EN3eGJZ8Hasxhe9AmTxdW8rJMoNtasJ3ax4VzLStqh9wqQCE7EYfLcKAQLReZZwoijzumpYKScA2x",
  "key30": "2eFARWwX8d9SK8NXRm89NakEasnBi7i6btrX7YX9YromPJyC7TH7ssGQT24ghZ89Um7KTPufm61iwdDB5SSf1CdQ",
  "key31": "47sUDMgtHAXvXj4dZsPQ3FzrPUaDJTwft5Gqj5E8xD4YBpYggHRc2NBgHdpwQR67sUCWCuRtRLvnMMpRAUVhdpMG",
  "key32": "2c3F4GHNDWUthGu6vPds2aZNTrnfwFYLTH7Gpxh1dRmA6dauNhFBEkzbNRK6evdwsySBbYM5Vi73GfV2iPvcWimQ",
  "key33": "4e1e3B5xYaRGPjGRbQvTh8GdEqUyvGvoN1x1LM9b7Nsa1481bpzQing3C7J6o5pBPnPgf1qnq8fQMMeac78zYrup",
  "key34": "4MzQ1KUbBnUPizUW8KUJh6U56RbV9TTrHYN361hbYXmMkYVFGZmuJTePNPRi23fqWnz2ofacM7aBQ8ZM8N5TtkK4",
  "key35": "45TshxWzGvhc8iDFKqQMRZRZHit73xEGq6CQCJ3QYdSdN7pojDocVZuCwiU6QDoJ7eZsLYcEYDGw1guu22DkMUCW",
  "key36": "2cKTyZXVUobYLvXUjpvauGW69yVvPxsBKA1wYAGEUEWN9hGn9gCFuhyrs6nmCv7HUHNV9zX1tvZghK344ZECqpat",
  "key37": "5iCgx6otgZYmUmiE3tDQSnmyUsoYWvW9BrWbhbiDGgQAteabsjDadAkEVTdVQMZ6XpZYNDibQxhvwXaM1jV3Wew8",
  "key38": "2wmdtPRHkVCMUxaRBRqABrec6CQTRFtxmvuu38vuncBRkkBgS7xkAEvQimqUuDr7Ricpo1TmqsW4yvzb4yCF4JTc",
  "key39": "23q1mjRXahw2FuSKmofGmVQhRKGphAGmvdNq1cP9TBKFSydR2FC16hGXbQnYhno9bbNepQoQ1NiSVz8HDUTLiovn",
  "key40": "sKjr5KCduyDtobRoCseRS4EK7vKLpbqRgUNjTbX959bbNAn6Y7Au1ME9aQG5YEuh1T2Qbt5jkgnmjuyP1EnqKSb",
  "key41": "5Dx3X5XMKD53TYfcjMHrPAzr79DKsGewxJ4gsStVhUyEKZ3grNDC1sLx1h3U8kh1bLeSXbQkFE9aWqmeabztqzSQ"
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
