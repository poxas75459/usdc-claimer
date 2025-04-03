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
    "5zhU672NW9wo6dTi5a9BZrtvo2ViZcyUAPaH6LZiVHXj18yKpihfExnBVc1RrNJCWrziShaDbspMiLkBgLYimFzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sx5qDDnhoVbretnviqGMHhpDD7F2QFkDpGHAGgNih8hbhmmTXpz4fLiCxJPYryGpSKwEcd3x1E7Z9Gz37vAeTMB",
  "key1": "tTW68zvuqLK83ohHCqzvy8RFEYvUeThDptaZCB8bEr2YSjZK8tvYnzbUNkDcbp1PpCuBqkBHtyPE6ipe8GHUx8X",
  "key2": "52Qp7gWEEgHkY1WTeSoVGn47NiuAqR56Toq4h4JkACFKZaFjtj5oR1zcaWMZceXeQus6u53cEJ2B7M5MUXusSfT3",
  "key3": "2h5LwUkiFA2Y5Cda5Kc94baYqmzasXzNfGTQJMFUqw9P34bN7j92TufUHXXiUNj6YXMggPcj5W2kvc766YPsuz6D",
  "key4": "3taGWFrhz2mubTr1x31KQbQ3hvajE8EPAkQe1WVPZ9Dyp4rVogGCrxKnqV29izvWEYyynWDD26CWzGE9VQn21nPk",
  "key5": "33xnti7eDthCYkq3GxmkBQyQH44eMSzhVRUqKXewtudFSA1HzsXX3HKQC8zCEQt9WNn3YrnmFuRwQgB5bwuWNhrk",
  "key6": "52xNu7z5MPUtBTdA9dE1MNrEJNpbUVmwdZmUSH9jEb4fEkNZWwCJpDQ3YvNPvKK7En8Lo5qeYTgfgxqd2Tmt86JQ",
  "key7": "3sVz9yHJe4h56SykXKmkC6z4ns3LFmQoiShRRyisdA9FUfUTYUcLoMVGydY852QRD2ffPbmGCYjaaDzRejkgMHLB",
  "key8": "f8AGgbNgzWJHMxukZQF6LV9f5vxGNhZDVJ1wjbjzFMWsUA9Cc2J44be9rNcMciYtFtnqUfHBGYT6JrQZgm6KC1G",
  "key9": "4wWLCStPrmu2B3eyjHcZvHX2GX4SG5huqfbZuZjMQbVJe2Eca8XtwJRiwVfmuBqma81wZpCEQZB5CQ8Gn7Lzz14J",
  "key10": "2nfDVVqb1iBRMx7TvJida8VpEBnq65KWu9SbXpibeiUW3FMWueFGwL29sH1aL3bmo525tDFN5tondLh4AQTT8psz",
  "key11": "4s5dbqXfxj7fQB8ejfUJ4rZU9itHdxB9yibXzRJUZUma5NGm2wxzQvdECRqVhLSUoKTZ2gHaGR1SNxWC8kJUcN97",
  "key12": "586ee67kruG6x76ZkMF44npQtPRWyWuBSnLjpKC3EWrQUrn3Mb4yaEtDtMtosQJYaBkg9GcfS7NeNeB1RJ4qPFLU",
  "key13": "462SLrqSrmX9jEE4Uc3eigYoDsuyaDtg1UWBAqbema3WF7KvaB9JzHCT1zoZYqNWGRvNZG4hMij8s3cTfkEdxiRv",
  "key14": "5uyqTLZmaBiWYQsN7J62QgLCg7XEfSFQPT1765KGCCmSSNnvSJky4f6ErpwP8DcJNxgwuSrgoYq9DhEMd1YzFq8V",
  "key15": "3mgyLdk2C9hUM1VT8q1KKGZThE5z5atXwSYAHZchvkuUSs8wVBJVKb8sM12n8pzz7V2WiXpqUuGfLqo89EDNU6BE",
  "key16": "2jZTYYhUK64gASML58cVVkfMEycwoLWL6f3amnF6brXPYrnSnP4UU1dsPjWHNumNej5krKZYc5HiMuSy1xJWha2z",
  "key17": "4EKXd365YcdPdFox9uEoV8UGHYX2FVLZz1PoMPegXfgsphEoek2SPhghddYs214PA2s3GifVbC3H6asBS3G5Bac8",
  "key18": "2RSAXP9bSh7y5wLzni9ePisDiwp256SzSrtsFmvMWF4ZspYZ2p6judNz4dM12u1h3BQewVKSHYMqUhi1PgpJhbqm",
  "key19": "51Ec4TNcqC7DT26b1MztwUYtFhPNbSdC43JKLLe5hjtdqPGKn1zjQ1paCvFxeuSm4yDz3JSuExcVDhHBcupsnLEJ",
  "key20": "64Cm6TTacPV9W8Z2tVpxsCM4macSvkxLov7tssu4jniwXTNKXTYYdfezs6RCneoUiR29vdxCGynU2wF2qpdp3CjH",
  "key21": "2LgD7ZrUZGFA3zMF6yNmEwDWt39dFaj8adbVaNAHwNAVcocrirfXkRygMjrTZVzdUpySohrWAjFQBkzYDuNq7JKt",
  "key22": "2BqnCvWt6io3sVnzn4MgMEscPvpd6MzZUDZvumxLnreSZAjJ2wqUYD37StxfFA4sQzUvYr6st2EhuuLzfFkNiwdC",
  "key23": "5QdrFWnC1TJxZn9buoQUkaPNevy8NJDdU3ADsAeeEJ9TumjNu5ctwhtbTHu19jzXvVcUKJqvbBC1pQJf33WdoDA7",
  "key24": "4X1sZW9yoDKzSGYiXMhiwR9JxVhaf4eyyVhstXD2Q5QBRTspsCTat2KjuuQYTFUYQuSJbXS68aKriZKwz16jkvyp",
  "key25": "2VWFRMcQLMigG626gKW1Ro63imRdwHFyX4Tmmu3igDSTJWRprJfrg2GcVJGLhJoPHcPnqi2xHQZ9NiYUNiksXvBn",
  "key26": "28x34hVT8AenkkRXB4eNfEWgZrXe3UUv34K8g2sSDHMZP2z91cvSAeKS2C4a5Gbrk9QFrNNFuCZBSeZYMWi6cRtM",
  "key27": "XRDnfkpxyAiTwP7aDDN84HymEEa2syUvxyoqDC9wK181xzd6ZazunAHwUxCob8boKzYtiMb4zByr4QKm9UTmiu7",
  "key28": "26tNwo4qcqQ2eshq9bVu1uwwrWHuhXg7q7AJdLj6GVFpJ8kRUUxx7GSerJxi7u2tHewoCP5Rg13zkrZJDP2Ewfav",
  "key29": "NvS5Yb8bv2BMYAzbr6Q1ZVkVJqh4swXosAMKThLpREsTCuvgs6whacmXnAW7TWz8KFPxUPHVrCEQfui96aw32Gg",
  "key30": "2NukBhBrrGMQwYAVyXW2hbGWvmzhUV3Lv6RfgwcXMR5DJDvNZdMCw7mJAjkPg9FhPi4Uz84UsEPYfPeFi3CzZtSZ",
  "key31": "5dYP25r5tmFQMfAy2fUyvSQYr2c3R4U4bUQXrxEURzJR6C3JvGRxynouqaAmXLPstvWtq2YUmoSFeN24cqExoUgH"
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
