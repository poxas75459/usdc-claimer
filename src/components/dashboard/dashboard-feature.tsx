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
    "LTfrSN2sxMn7fTfp9zf1d6C6cs1C8uxTjazJM1uodW4KX2zYUPqbS1zF5qJrV9Zk4LbERi613vLhS4UCbM2RSCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fAzcVCzpDeN6Qbh5ML2FMEWhzr7jHeHTN12AJT2VcFZVNeAvyfDQQZ89wsH4xeGse1fe15y712oGKUke1iHhRUw",
  "key1": "4BU3vpAWL3xbPiQkjizUFZi5zZVKPWEYnk4sodPxfodrVmEEmguqGVatb3MLwKNaxU8cBFukoPLPW9cWkAwdj7f5",
  "key2": "66jiGM4ennSsoR7rPwz9p1x1sbTpAotdzhvr4LFPw8Zn7y5SG3i3mcn1cMxGHHaWxvmPRahuZG6YQVxvCN1bzjUa",
  "key3": "3iT5XGF8Ux7GTG98JPXcKKUJV8R1nbWRfEBK6h4CNFf8zPsksmnJ9GETYdozEDxfJ7M16CSaXkvuKcuwQHipi3ck",
  "key4": "5VGHcYEXqUZiHeCrkkuEeunAHQCBBSXWwA3wjXne7PQmHHshhQBbZs6fZEDUTSeWhjkLKsEGBngKqMUV1fYMVjeH",
  "key5": "2NCnZZLBbGTTRoxYSv6BGwVN9Z9FLu5dF382nTJ3ahUjx2uf16j8xD891LcnWNUkZQdqked8A6kLnEJc9PTNY3No",
  "key6": "2oSrBAQkSYWdibjTT8iyWRbafipiKMrgffByoWbHGuzqKn3cgGCLAgjrRVjeU77UN2KZS6rMrHN48xbE97NdarRv",
  "key7": "4R3WyFKmn9zKvDBhZY9o8REcEfdLNVKoEK8FKgdKxvpvBgbh5G4qu5dbBZHQpUGhkw5ZX5VEC9epz5jmzxFQNhd",
  "key8": "5FYq1D6UdAokrzoYPQFgzx8jHBcy3xSN2NsHC44f1xj5UcCJxUz1e4wfM7gCTyw4GYgBxEsQ8swJdYhuKmCrqHBK",
  "key9": "3GR6grvmhvGBh9EFu6YMfpbnNz38Z9HXcDUE2XzYs1k7oaaV1Aa68ETaUUdTzvniXUY3fSPo2kj43ysA5sGpv6J5",
  "key10": "3UDPxkEQ6vzyVvA3N6ZYZreDZf17evK4B8iwApP77iXop6FEVjsr7e1t3NF1XF27UDnbJNqQnnVWPgibqW9yKadS",
  "key11": "5oDZ3QK74fFRKN9euEszCvyGKtvKjuQyz6Yj27M8P5D6giBgx1AWL9up87KdegJE1sxbkkCkhLhvWvsGoHkx8bTb",
  "key12": "mWWhK3Q2xx6fAvqyfHgrqVBDqnpUjWVjHnWAVaqwzcajCxk3EZNSLnGkzfTBH7Wg49Kr27BDAjEYLP7fdhcm99W",
  "key13": "5BiPgzuKodNvEXHimTTXfCmGW8w5r9ybnk4HQdb6PnoueUDywLtfY9eWsTopRABLiyWAGdStQVaa21cgcsCQR5CJ",
  "key14": "ggZe2hGgNENKyXCxnaiKQYgpWcPVCgRpCxDjC6eS3UqQ5dHLy8tXySyFeGZTj1UvyN1MazHM5YYML598j3UqszN",
  "key15": "4XjgPkkBMQkdEQkjicr7Uima561VxktWE6vUC9yFDjzLF9bHYLTUd9Kuk2VcTZoyohsdEwtfrLxho1JpWYcWVduU",
  "key16": "4HkETSpDASrhVzKT1rvnymUDW77WhUd5NFuDEYhLKrGsaJBBaF1X8UR8F76LJYk2FNtLGAJBPu2ECQdaV1mx5oab",
  "key17": "uJ7rTeq3MWDC86MDT3fXVK2GPZzN9FfPaTXoygvGvPNufZaoUG8m2bT6JwF3uch4uJtfHDUYaabUuqwGs3ppXwP",
  "key18": "49hxUcuwsfPbTzvMc76GPooVR1a2Fyo3vpxxWw3Zeabun9TG72SVNxpsV1qUsWKWMM8DyfnZykF81wBt188CSqdx",
  "key19": "2rRkeYeXgnes57GkcBz4Hn4WmKUkXW6ufts1Qej3nKbTeSf6T33hPCjcpFoaTAGsWCvUrCkvohhMTunZeFYhXhSy",
  "key20": "3kWkaEtvVdR3SkMvJ97DGuiamWEVMgLD9XrynRqT7DXEXfGQUVVD4r7n4Ggkghn7oTm6wPKqLrPbyPdxahv9exKq",
  "key21": "3b225UBSKk8oYP8pWuhMbePew9EPSjy7mGsjQ5N1XYUqrairi5UmeNs2cATVCpwS4bz3W6eF29aTCqaGB47K87hh",
  "key22": "3SyyyykeZ3hksJzQEz3U6sudATJfJGDM8YLh5D4DZsudyiPf3vnv6wPYjGtXn1jCDGV2u2W7eV5JsdCGbZYaSkm2",
  "key23": "49AQA5AyFaTLopVE5zZTWsCxQiVNyTGMH1HRrSiiGDwS5NPeH6A7SuvePEnM2bZmocpuYQ5EmukMTHQDZMvnjay6",
  "key24": "5dMJJNvR5nq6XWQGh8GFrgQXdLme3aE1WoQVL8Ne9WjAki1MEnTSSJYXF6wALDybs1nTMey5mZr98KLqYpoe3FwM",
  "key25": "xMxz4dsLeDj294rtr2DzSDrjQpMRdE8dYoByxzQpaA7hcWbu6hLrbd86Zp6JkynixinMMsApX3R4grBVF4hQsTS",
  "key26": "zRxgWw191UYEXcs1MK7dKJqWHHQFs9e72PKjWwLg7u4oigQRAjHXvVqcuLHmvR59r7HzC9pj43VZGY9tK6KG9PM",
  "key27": "41pUowHsimrKabEfhgh96Um3JLVSe1ZvcsXvaUUtJQBSkqxpYao8Rw3bucZFVXJ5yRakcDrtW8wWGK44UecVUQZa",
  "key28": "2sYfjkKWfGztHh1AbNSPsMr8vZMJYbHYCgE14VrGDTeBFB2f581kdMGi3Y9TsmafYcrMhZptKQJDPB6eAvijpb3N",
  "key29": "4Kks3HGMHPfp7qUtvtiMidB1zFLJtpepC5PehW1suVfzxubZEm3ucFa9CddEBrfvN3npWoNhAb1W6hDLRzfKyL6",
  "key30": "4WPRSREcD7skbCMSq6Y3LC9nbDXShKgXwH6Xzgh7funVmLXFjTr67gpLrbT3dsuYpjER1cna9yBhAVRJhqds79wV",
  "key31": "26EkNdreRagGwLHdLfqvYcEM22jujwWFV5XHAUSgG9kzZqyfrEE9DPEWzmAGZDXEpLZRAcV8QYFoUo2pvDkZeVCE",
  "key32": "2NPy8j4K8YVpudUEfoDzeQ2iVcgiUERkJLdipDAC9WG99zErpmfnLPfJrwrK2xd6w8xGuZ8nzURg6EMyhJbL7PDB"
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
