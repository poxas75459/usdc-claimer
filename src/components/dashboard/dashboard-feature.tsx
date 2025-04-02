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
    "267XqQFww8ERTjhq5LRw4sKWawQ6thpjvfVDY5zpaEQ2NthCf38LcPuMq5tjktq9E3Vzz22VS2LYy59N8K1XDWQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wt6W1EtUgTBJFFWpbNgmwCMDCtuVR5JADK3vbfPXqumb4CrsAvBmx8xPgqNheGGFAgJcrBitXtDgN4ntEwJY6P7",
  "key1": "YxKovnde58R9Djd9iU1E9fjjCQsmQaz9odf65k21zJ1iuDJaipviRKLpX4MDC7VCjmwpSNcvRML1q46yTmfqbzz",
  "key2": "5XkGexh9fXEZHapkLC6SYVqS5p455e9JxYZkB4owJJLaS7zhDp9CGyStBhnXS8RoBHSe6wmutYQ2NzpeniWdVFZ9",
  "key3": "1kfNSW8BBA9YhRJYuFt43C54Dsv9wWGo4VWUgMmygyM4HzeFP8zZ6AzDaBMizmVddTD6vHX6uJULNprKTtuh9WY",
  "key4": "9nycAzuCc6tBjdy9HN4aYbhay1km7vwBNkEkbSy4jM9N7yYs2d2icaQsQe4C5voN1JhQZaX3MWZBJnVgRqfbP8w",
  "key5": "4dMGkv4FBsYaumGFbta7KgDydBZqPHfK6uHZC2KZJLagWdESmoZLD1nL3gUmc3safihwtxX5dkuzm5AxZQXxG6Kp",
  "key6": "bNmcAzMCGpm8f26Ca4h2VTis19bopKhkxyPGwCEg7vewMAjZowFTzveukSQPGSLbnYDnK7BcJhfFaqHq8gEugSd",
  "key7": "34yXyjfzRaXEtPLZxrkvfZypc5NtGyjxfj3wJVndoSnxP1bBdaK4tmgXmvBLaCnr9HTejrygoApCcvutpJ921Mqv",
  "key8": "2AJMJvcJ6dfHZj5CPh28quJog9drN1rHmYnJBygaEJky9kdJmoQiBDegKSbf975Fjmzu2J5y7beoLMzU6QdWREt5",
  "key9": "xCGvGwnf6tBNxMJgVZCGGbnUyNKPq9nFU4iXzhW2tX9jfzxxzUDNTUDA3AayG4XjUMuZd7wTu1acLS63ZtPVvTj",
  "key10": "2o4AFi9PNkYjcwekfyoGvEE9mLpK2m8DWkiC61PVtDjMTBC95mBXus84Le2vEdefrP7mMVnUvGLWjMrBRRh621q1",
  "key11": "53Hm8fKge1J225xmkCxSGEPWXjLKGzvavDwkupkJ1jC4HC43ZNJMq18eGMLr7Ukvu2BMa75WvLaJD1TnV4p9fpFB",
  "key12": "3mUkbdavq35uh8NcQz5UCESUSBY2Ufw96jeR1wcNd4taRfBTdtviCVWpNWe3jyf8Ezkffgw1pXq6TyPHukUmoVGt",
  "key13": "PqQQe7mMjxqSqn6412aHsojAPp3EWJKtQ26m5CKe4avitF4SKzbD5npQp4uJrsjBHe62W4zSxfsKbHJ5bcu7kpd",
  "key14": "4zWBePA1XsxrjXjg7AEHTpZLuwFE3taYHREt3MPRP8mX7FwfxHGrfEEyg93gJSQZice8hMd7hhB2ph3UYYjFYiaj",
  "key15": "3ZGdq78eoDnWkP1N6dhCezkbfrPBPrH6LzH7QgqXqng5ubW3sahbSVe4LKvmyY2EJefMDM73yytk6BcJRF4TGn5L",
  "key16": "3tsrTuVYLdEH4z7zCqiJkd27my8b4DQ9nR8zyzszYnnJnS5fXya2BQYLQpjG8kXcxydr1hh5XC5y8dzLZ93RBHLv",
  "key17": "5J7pr6r628D9PQFFUQ2J41vVWZZNGW72x6uS7kqTNjXrWqdM54pdcJNUNJs5Km2kscbtehyNCbRkGkgct8afg8Fm",
  "key18": "2kTRaHb1CtnTKA8Gcocssxg45RztnZehtXusv12RMhLxataAtcV3MAEko2X6XaENBXzDNqzZhGMan7pR2Q4B45Xx",
  "key19": "dAbGuK2MNupfvNwhv3sMx16UHcyVpHFCwigpBZe9SeP3FTbF2KprbCUVKWzEY9DzJX7bUgU3D9jsBERkQTXieHi",
  "key20": "5cBDxHcJqPeUmgm8dtsyzsKvXGcu4QUNbb1JfiSUdYbsfBWkZ9JUhFCuf3brX3secY54CNcqpDMwKRLY2TYw4nDN",
  "key21": "26F7J8pzywgjRqumyUa4zaXbf7n5iLZwGfZsqhKVSVDzuAMp3P58YJQyVAaZiNt8wkArqibLYo5NvVnBd8h2ZzpT",
  "key22": "2k5kWNVwTsuGkcTf2HHCrLwwSSf33b4FhCExnurcPsPzQKmY7pdzz83T2KFL1vLAyHptnNSkthtJ2Pdih2QVCeFt",
  "key23": "44q6QP1R2CsBZmpLkvosKW9uGMW3o8Uff4ipKk3KMt3nj3QoEwRru2aZqc87XD6NdNEde9NW2xQ2V6iWW5Mbzipd",
  "key24": "2CefWZZ18po6xDSzqFD3GzU6N7DjJ9rMJAFpvAQRXwWULkExAqpawjywTT5nwLTdf43dphxRhEs9MzryKo4qRrHD",
  "key25": "3UsiDHwQ67czncKnDH99tCYaTKnGTSQbVp28dxU9DmthqBnABpoD4ttb2H1ejUapozyQTEcDYWNnhnxa1iuqnnS3",
  "key26": "5NXHX1ibex7bJz2HUQQntR5FgALV3i6xjnP92fxxDJDkckAwn64gHuqyvhbNEMBgWT2zs3VDExqX323S37gafXNo",
  "key27": "WTekzveu5qqMsWeGD7JLMiSt78YbAJPQw8tLQpE5Z63L7cnb3B6iw3H5ge4EYzkS627DWEkRA27CtWeZFDqUmyE",
  "key28": "65jqiNYXvqzRPMoQzv3h2kzcVzu3dfs5JERrF5Kj8iC8Eg72Re3ebwMPc34bj3Enkcx5LyjK6WweUGCjzBqFRvtB"
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
