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
    "28V3PrGhhNbMeCKrYtp783Rfq3itdZfX6axbjePmanDX6hCwixLhMtpP7QMjkqnK6Y9qhDegVRabcSHoYuByhnAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ghauf9DcABb2ESHi1q7ADUp7nADtDups6tuukQXQeeWmYv1HqkCvyRJsRrxD5pns36zuf8XU7Afo2QUcjEBbUr8",
  "key1": "2z9cdrsDwDGEdYomodTopeA4guWaw3eAbnYx3KCbGytDqxZLc643rD5rgFpjrZ9pnhiTv8mNKX9nbZYdDHgwkPSU",
  "key2": "2BDPgXtyWC2BiUUGZBwaT3FhwNZZ5DvwdaTS7BvKACh3YzRaRG3BvMz2y52c2D81ySuyQ48HYySmCYS6p5J3DWgE",
  "key3": "5NZG51mCn1LcoCt7u4ky5oqEvE9wtxjWHn9aeXgVdeeaztvJaNZcNAt9EFTr3WCSF46K1r1MgFs1M99Gv1Hxt952",
  "key4": "2QpSb6VtAf2tkwUk6HiHuzz9QEPdNqFVAaD527DHGsCFxfxPH78arB4y7u8n5Degj9uRESRSshW4v6p6DZDF2FzB",
  "key5": "4c49KFhTTZvdycp63rXvyUj2tj3JqUXYjpBxba4kFjrXwBa4nMT9yqaATvLEWpRczCJrjJf4F1AccLABDsspMALS",
  "key6": "4mfacibZz8kFxjMdeud9SEBpDmuZRMqcVSfXg2qg4mCFymkZsB4jTwJRyabPctZAejrbqmEx1pj8dsydMTUNy2BS",
  "key7": "4KdfiUxKtwPS4dwDNmAERvw47wkGfvuBhntc5BXLcDVPg9jhn1FZf5UoLW7rJVfMuKKdMktzpYFYoJkvcHLc5YoJ",
  "key8": "3qpDabdoUm5rSCjxzLpgECfStZRzDfw5vNmfX8PshzYXESyJqgJQ63rubpaAmsqBTtWV1bimtz49QCLeVYoRZrmh",
  "key9": "5S5PpQc9x5TWmE9z5F3eoBznU6CR7z8MP66keH811F9LSkTZdv78bFKh16L3YHjgcQ8RNkjFE7ep6967ffSGTRb3",
  "key10": "jRQK3UKB1yC6N5tYRuHHGbrfbnpeoqGupk8zo49SaGCDJ1gHDFD7RacAwMsWQM8rgdv7J8Q2TnUa472KZnxGxeq",
  "key11": "3dvCRjvhKMr3GdkADXN9V73GTdCYby6CALn6wMgaojXqRGzZHLdwnc6KURLnxZM4vKGdSGxtoVQ9wQ7ZVMMpTm26",
  "key12": "4owFJKmyDeEii44b5WUPvb8MX5tVVeQVXAF3FzjGbMqqd1WAdB2Zs8j8i6eiv12Ud2EgKS9o5KxKrKQux7cB1WFd",
  "key13": "2nxqtfNpbfozhd36Z7Kgqi2KixcN3KmVGAauME668mN1gb7YtVHxhCLRAEsq9s9T5rCxQJ6pTXWXeZeLnRzdfqkq",
  "key14": "2b3Q1RaMW5bMX6BprksPrhfBvogW9M8bN74LQtA1SVJg8EksX7K3qMMz1rcoVHFVtqUZPWfxaiXC2ULnn2Uo9hES",
  "key15": "415Q7cZ3H3xpM8FL7iL6WKggJYDcDNF2hxpzcjNGJ5meGcLqoyyijiJ52wQconu6awCe3yb1YVibncjB3134Dko2",
  "key16": "3EkxJU5v6ycytcqjt5GDxVhjKpQVSeFokv5Xa5Pf3nBvNdbJoNzFXswe4ADPMbw7J7YZcGXG85oYZDf5SjMfLgkr",
  "key17": "2uhFhJhGrA4HkuKf5yuXjQjFLuFPfPRWih3DnQXvv8Gb2RvQ4Uiknaw8mgXiFgEEppsTrWBbM1C49i2uYCgKYEr3",
  "key18": "4g7iu31X3hydKZrw3VFkUHb12h4bTvZ7eLXQ6hqMpDzFYd5FJJRB3bXVP9dWXjZXafJvwmDHMeeqkEcomRDRAdA8",
  "key19": "32JLixR6iZb3LbCp6fiMWCupZeqbKbTr99VV9UZoYMfDY8YFz6qYyJwPZTZnzLD9uriosLmVEefrQDLgvEFBBohC",
  "key20": "589Men3cU8ubnGTVDVnAGsnYNtmNx2s5bvAmojKVAjo3hxZkesZYnVDFH9wSnFRDNCKcvGjUHCeyCBgaKCt3HVPG",
  "key21": "3ZhLGQWuhJYHYg8ts2U647BKSDZgrcSKvrmXb4hfBXK3wHW5n3Lyw2ZqPKUxoYpNDPttGxtW71z9rC4cmgHYiByf",
  "key22": "3PN6HRg9TFbUPUhERyAc9uF7VYYhPtA8JZsiQfFFPbYUnJpuBWAcRLaqVexgMR4LJezt6h8j8z9cmtf3ehBGkPhQ",
  "key23": "2N6d4RsD9qujUJ2RPw77xS5thiXN1Xgp8pqRw9SaBmWKymE6EPHLJsBSBybzfUASG267se59qhusW689VC6wkBSF",
  "key24": "2LsePksJWMGkhtcDL8v1q7MPZri4AC4NsnpZHm1Nh1ywrybiBg6V7vMBzGcaWgFgco6gD52E4eCtHaAyYdXWsu5H",
  "key25": "3t16nzpjdZPX8xwe2kycdkTTe15984JgoLTy7DTy1592N6yqggk3khyifSkkuZkMp9ETzjRpceW3ZWYcDvrJgDrT",
  "key26": "5LUeBYD9r564gViak6kGCoHgHtgW9sbAXD1nojxosXnGjC5HrHMm1KnMhxWQePim1KjAMmccaGxxkEogAuBcqUry",
  "key27": "4cyHsFQoEV5tNQCDbzkdpYvkcoMXQCTWeU3tAnWHakwD2zpL34SHx3X5PqJdUvkPNRfoynhpzShFyYYFLXujcgSD",
  "key28": "3sD5JaBcGP9A7xaH9WDxYMRf56fsS9VAZ6fjyDTAXAGx3hwn11j9eyBG9ibNyJ1SQj3GXXr9CTVMybNk7eFFW8Ch",
  "key29": "3fXtwRRajeU7kE3Vz8BTc2VVwqWvoJHK6pbw7KpGGrjMXQpzhaZ8Dy53Yc7y5bSTuvt5FzBJpWsxeb1crhUfTRST",
  "key30": "6Paycj4A6PXDmNF5p69MPkxDGSNgbvvJ1t6xwY6wGENwFXQaV1x4x5MRnDgpc72n1VR1u2scrEJkz7895HLoGAE",
  "key31": "4Chbmzvng36x9pwrLXPeiv1q1ty8ZvGjZukcQWTtan4nyZxLY3aZfnspmsR4LwCj3dwnhLZfPv4KGyyykq8bpfbt",
  "key32": "3sRapEy37M7AoxAs1Heh5SyXkja73YHnQZcXzfuBif7YUQg7HeqLZuo7bATD6aPmZ3kLq7h53PZvH2hyR8VFecpy",
  "key33": "2f8LTuyNUk7ggD1nUekctqHLgzf6YkCpv3RLckrRnpntrpAv2YPF4ckTs3WdnYagDUZFZcJw4XJ968KgXcJ4pHJG",
  "key34": "4aynjDDqh5TJ5wWFSbLnmJb4LGV4dtT87RunJzw1mt65c8hWvaYetgwtYpUG1X1UQmZZ7ps2fKAisVzDRJcFk33N"
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
