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
    "448vZPgGtdnrC6zHDkJYckKHcfPvShuS1xk2pse1K2ge7xZ6sHHwj78p4S7Dah6bQu3gXftgB6ywhEN86GdYbv2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ys7TtozK8xLewYmgrLJ3V8wnAjv1JyYQs8swW448DqvvJyrH574k1rLG7Jzmw6KXHesfWzifgmyaTATcosyJGhZ",
  "key1": "5ywHhqRfAXV2QiLXWG9yvCa4y772sHTZgvhm7Y5XJcA2KzxADQJCn9fdu9AChSq8nXEupY1YxSq8bw57bC2HCAeD",
  "key2": "VZjQCK2oAegAKdpGVRrmBUBE37YztP9VmCkRAHLE2NfuuFcwnAaKCVjCNb967EmcJKkhiDMVotuFCC7qX1XHxMh",
  "key3": "zidnqKR2DjctGPMVyiTDWbabxqvQhZLvEMsFDuMTTpLpxRMCF4K25Ck2E6B55VQjj9aqmVfzRGdsqKkZopVjWtC",
  "key4": "2rJsmBAHoCtuuDkuRQCir3x9ap9q9PNcBd5rT9xf7gMFtCFeDkq9sxCBr7ni8Wjx1wmyWYf53f6vsq5TVH1KSYSU",
  "key5": "51ryRtQo6nVs59UBrYfCMRwN6siJVbjMmMg1nVDHCRxZjUpHuRAnVtqJZnXW4VbHNoXhxSyufrY4aDeMZ8RpAWSh",
  "key6": "3frX9BDdd4TjASvKqHULHNv7SukzvbH1TJT8YDjTmcqZb2htoLwBXRXypuw98saj8NxYAbYaBn4afWbozu3fh9S8",
  "key7": "9Zg6E3KhwigYg8HSxzZSajYzyvCh8ypfHKrSCwFVFUQEcNDqeE6SLhUGHruT8yAzpvnz6YsQLrheTXqFLsLmdvZ",
  "key8": "48Po9FgNPu3ZLCv27zPZSipNQdy4DhAMQC4kfhcP2C5ykhpxGhK7RoeZi1ziBCvm4Vi4faNvRNwZrC6B5DX3mfZm",
  "key9": "fjrjAfsuFJAFnSPJ97z62VPoyauM3yMxRPk2n3GK4rm1LMocnrehKkgCaiGFErRjDmXa4zD88LsY2vo3dKf7PvJ",
  "key10": "5GvoLWo3Ko4wEiafnMsUmNN2pHQEkRkUADKZ7V2CjxZz9YmQzjPu5gCFeJNwTrcm6dbWtRSZRAXdtrL6Wc8CiPQp",
  "key11": "31fNmQpvvTS7iVZ9HbYtG9LgkTkiTkNcBsrddVvZkTpCoH8AWZenThaVN8xUvciPzX74Gx1hb9bdsVNWJNDZgipg",
  "key12": "3Nmt2HJKcd2M6WjncpnzkW4FaCSCMJjeUtMj4B9y86LRrG14pVoS9DXX4dUKDfTnoWMGkNw7Mm6kreWToqotfTKm",
  "key13": "5AxcqA5jqXNr6PUZDEmRmaZhh9mU3Sct6MoXTMgLvdxaetRW24cn7Pa25iNFPhRNTMWESajaVH8JmyBCSE7VyjQ3",
  "key14": "RL9qwS5VF7riLXcRecgU2Mf9MEs3rpbkhLAytYreXdAN8HhTuNGHkcfLAzSRmzcyDySSSiD3qjSZ7gyXs73xbE6",
  "key15": "5uhsNxghcABeQ9hLBKJLdUZNoUweuMvfMgKnWr1kZiLnzWb66kF7CczYesMP3patfaezoxdw2YppVTG32bFm26x8",
  "key16": "3HH7uP3Qd618jSLn998Cida7kUMxQJJA2Ubt95qBKjnwmtWFsRQFMvrjt6DgxfBqF1SrQ32vYbyiX7hGNummVf44",
  "key17": "59P1zDAJTmizysL2uPD9x1RSTjdZUzCCw8TUMpNDdBArHR1JhRkHpV6mCw9GNMSEYyZszQrhnGs47tsdGSUnjzAC",
  "key18": "49Lcc9o8r4engdTHArTJWFtJa1rUFRVhfaSUt6KLJYpP8o1o39moCjWdyWow6m9BVtaWCPXdUBUFLPxE5idygQHU",
  "key19": "FwUTLQWuNi5KH3VrkpAXqCCTvRDu9X9sJc2bQhWeuMS2DKEt5mvF1UChNf8CJQeUH5yALv1jSixVRzh9KxPBPoP",
  "key20": "5K4JCSiUSxhLkAaM9Vso92pkVYfHVXBEZTx4NEMGMAsPkDmrZNdgzKr4pSFwbRGt56BGfazbF4it9Y48bZf1sQ6V",
  "key21": "d1BgdkLQiyNAD6wtcHBNLJNdyVuAcrbYAuJGk6FUD86hQaPA8rNdbRGctjaKgXy1sLcnNehVgaqXWxg1mUctvJ2",
  "key22": "CfM3uajL5hZxT8daQGMBD7FXBHys6SXkByT8AhGJfS167wp5MofD8baffT5FXYwqKyC6iSeXvkD83dMDnWTLNWG",
  "key23": "43CfzsPEaVbna1H4Jx2MrdTjSE4GEyAjwizFXrrRD2ma5WzyCc98LzLonjpesBr3ZqnGeqF5G1vhf56931yTEhzh",
  "key24": "45BYofrpsaxpLRWHzxgLv2oHP8wysn4gDgoFw4sdy8CqWYX6NWYaJzfukn6QovMAfZyzaq3mM1E4CGUT8oaGL38a",
  "key25": "2LXVb6nyqkBcqy9hmJEVDUQsuuQ2sBcCDMm5A21a5mKQwx3nq1rQp7SFnCCSUvt6hzebm8LgHjXJGURADKU3NWhp",
  "key26": "2Br8oPsJFSBF37u6c9BKRDSK7Zb2bUoh9UgGsWhYLv3bhJEEDcu9eJushTqYjVPdozZSn3S5CY7u9bRP72jwCYRK",
  "key27": "498oehH7H4Akw4cqxLJ7C8bcj6ZJhBFt9J8py1wFepYTYqTcg4DySQ7VHoiZL47svTmQZ3HQq69suxapq84GsNrN"
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
