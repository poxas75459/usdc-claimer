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
    "3MzzgafbgoKbeEG6PsmUAeUo6sPL4GWPeWKyha5c97qBBeweZPBga393BKMtk8VARbfWfZDhaNFrJ5qvLeCGpWoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZ5BMhr4Nukv1n83JYJAeXmYqHPSiHB7FpFzbGQrHVwPCZsU14bc7Wzgx9pL4Z4b9nrh6ckUgpd2WuSmzDfzArR",
  "key1": "25oBQnSJnLcv51sSUvnm8p9DFXSfqtQQhivRv9pQ3RpN2R3GxWx5CDNdcbdHcd7GYkEq1XCEK27pkiXXGaNZ3Btg",
  "key2": "5kyCNB7QoJDtvdMjuFA2bgErZhF2RMRc5jqs5Fy3bfTkMZgcjbzZ5Vv356K3C4nLtsMBPRrKxhunRR2XFzcc67fX",
  "key3": "242hQ7kb5baMozeAskx9uc9gxTXQ7WvxqonNEztZLu9JNbgwjwnx3AmAwxSdpHvtAk3ds3TMsG5jG2H2WvA7WCBN",
  "key4": "4S8AvF4ZgdoCYQSsvN48YpYAZ2oPBhfkfCSLTn4f4RBp9Hxkn8km8v2JJucsvQiSi9jg7wKDZmSdsw3vWWoiFsRM",
  "key5": "2UVFCi9pZbpKanhJUocwxUPu8pWB4A3r92xyfGL64AcvQjxeeKCm4tTHd1N7j4cBE1rwWSUyLzzo5heeQ4KimpYs",
  "key6": "2Cde1DLWHXUBw8Gg4Vnginad1J3XBeys6KZwQm4RVJKpD2c8Nehpq1eGiyBH7dBkWT6fqH6X9HFDdYeq4oMDYV7x",
  "key7": "2nDtukHhf5vy2w5pbYHvUh8eAYNbgCqDQUJwaTtToXC3XedLeEirWkib66SeGpuhRgjcdf1vB3uF1Jcdnm5GhuVT",
  "key8": "4oPoWf721eYCUTbVHAjXkA8QTqTvpVCkV9WM5cYsp5J5oebgdz5YueXo7tePed564yyoj1Z6HeYavPRxzQrMbMe6",
  "key9": "3nGMWYMQ27YN4mtRtbwuxWHhTMd3khisqNaRAQxqJ44pfZhdhwuLeaWkzAQ6euGqKRXSVFDtKXcT1Qq6UyArbNW7",
  "key10": "4qnf8w6MhcumbxJey3LXPCpd5G3Wq87kZg2ZvtDQHnV4AN681pg7uZC9d7XEPKKsxXe7xXr5qSKDahtNDHLGAvng",
  "key11": "4XU3f34MZsjYyocYCUZENuh3iZufWMAMzztyAHVf5zUBaZgZ6LqsFp9YWuQU4jmz2a9s1mAnL3C46HX6heopDnWp",
  "key12": "2jmmjewo3FBj4VziVbNfNM5qAfS2MAWmuFhE4ZtqxkcFD69LUn4FPE5L5ajYYabLxNVq4ASFWFaMFpCoCXBquLLQ",
  "key13": "4ndeQ379nY8g44o46cb7skSFsVU6dTZCLHNUg6DNfnc6nc3dW8CN8Mq9g2RttC6H9yCbZsZ9AWjPRa4A7fcg8EMA",
  "key14": "2LtibG4DQVM1hYGZw9vQ4fDW5v8YMjN4ZCqpjGxcunGZJhH6vKTT5t2uVjdnpE9FRP52Kiok8N6VjgWWUtbZ4k9X",
  "key15": "5GmVj6MEPBZ5qb43UcMSBjniTmLWtcuLziaPBjZJb2qVpXZVi9HxZ6MpMc66KJUR116pbjVfnXW2Q6Ek33qqVfNs",
  "key16": "2oRoZXx7WcAoiJA58uq3d7ERsh5v4Fd6qoo9saDexr4Sgb7JF5p8ZAnM4A3V9by8wHjmNvKFWz8Sasm5EQ6XsKSK",
  "key17": "zez6XWVNQaJEUhEE8PRtcyv1XBKKSjFuWE5VFJdHpgXFqikGHe3vErVJY9xmQSiHAaitbeUbARtH9JPtXi8TKfk",
  "key18": "62mhUmLyMU7yLEwpPcXvDDk5DWRTxSHj2ipN8xLxvbF3YCBJJnWUmractKtH67PNNR6Wb6HRsmqHWKbNhpZmxgnm",
  "key19": "5pUBJYkvcPLV6nkAnDHKifauzmnUhSXztp3kPmPZbzN4axUZ1qx71TgMrMFeFabuCKnZXuxc2VYBLgbLhYAnqUJf",
  "key20": "2fEYD7ZZ47MVpvd7Y6iM4rLeg47REW3LU4u7hToSb6wYhGgcumYWhiEGKLk4gvLdBgdkRHyvNJh2tfLBpQkofWr8",
  "key21": "5T7TjKrT8wbVHodVrGNGXaTHbZs3L7YU1DbsEm51bgRK276hcRaAZaRKmWAFQP8hg4Xayo9P6isasZTdBid7pDR1",
  "key22": "557GgGgDCP96WfUWJ5zzM65wHPoCK3qr6RZbZcMutM5daiBzfbjYBvLZ4RQpfkq6Jb82YR3kphkM5Az2yxVSkAuv",
  "key23": "3jZUzWnwdhW9D61Q91XcyMBdDy2QeM4LbmAfcgRBdHpwgxei9virDqLVvTUHQnZZAu8kvx1tW29AcH36Z2eUfqmf",
  "key24": "5rh4LUkizY5Jp8HJ3HW5PfPRZ9685fhARsXpAqVQohwbhPzKuXXre1MfdrzG5aVwzi8RpWjURxNgPzGPX2WQ2y2D",
  "key25": "R3DKRBv3REpqS6m1suE6wKP8V6bBUiNYi9aG9Sa6MPUECKeHnJ1SWrd4Eux4XXj61ebiQFnUtK3pJXXgUR2mr4i",
  "key26": "5GiQFzspTPPQ9PPAa3k3sMvVri3xiKtT66CakvXYPFNzCqVtekmgvcGMa5Sxyb6fWLZg24hhu2hYGrxcXmffrKR8",
  "key27": "3HVNCK4KB9M9SNWf3GYKD2Diis9tPviw1pGPAc5b1V2QDJfXAdhiQ5gkBKfGabcyp6HJFyBqF6wN25dCe2gDTzH7",
  "key28": "3ABmuenLFwTKmkth9ewWX9VjnL2AvSXygqv6cM7jmPkredQphYPdwXbazPm1py45hJsVCsA9rDfseAWErQBdwMJx",
  "key29": "5N1AZfvEGAwoa8fqePu21DVzEhRzoAPNXTVc7QHujvk9r2jcKAENpVVMmsQhAskXW8B3qH8UvyWv93HJTw4MiTc",
  "key30": "3qwvTUYicR5PHYkBJ3YfoezohrNsLSMsPbEtCR8immGpWDyTTRiasRLvPSYSLFi4vG99gbVLokJYzjy4KNydCYD7",
  "key31": "5rz2sFT4YucnZHkwpoFEJ3SMP21Q1rmsPoQMA8YkuXwnL1jZZR4KomuYSwpkh9FCwx3bh1FCeWeNFqQ3wsJya2hu",
  "key32": "545fQjqBzn2U9Suxry2PYKcKKgNbDRVk5zi7a5qHRriwBmiryRAb7yqteiMrYm4mMjEABmNCMa6x619xPcr3Um8x",
  "key33": "uzBMX4v4WQSGEy13BDVd2L9yc6bRieR9222Sssw6yWYqKHq7E88FpEaFuyuRp7nxeEz3BrhsLStbXSnWaLoQ1nS",
  "key34": "2kpVXJZnGukuXCHxy7TnvjHRZ27BrSQU97uQ7atpUSgXcdZrS9CNMryL1QedYKxyY4kVQfCc9fkX6ToyrE4maAWR"
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
