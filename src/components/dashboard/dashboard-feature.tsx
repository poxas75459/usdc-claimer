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
    "2buvPV91QGDpKD2KCSLyvRJdLmwfTbGtPsbK1HfWMbXBscGNKrWEQpvV5VfRPKbFsDK7saJGsGqVjEZQH5TRgm3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HbtkF4c7BRDndKYdfgx7uqQPNFcSuhfefVMJPnWwytkxDhUHwwXBzn9kKdsyG742LYNmK2m4PDfdL5qnXCTRGFz",
  "key1": "49RoMCyTPUcwRfKGrcinkKHnvTbUGs4rXsWt5WbduMFHNTXsqPqj7HxCKBcXEqtnRYsmtdDwB3Q3v9fnPUGg1odv",
  "key2": "3DfAPB6U5gnRSsmPK8otsaVWfc6mz7xvABuftskW2hEUyiVNaXsVrbCvCpuMHZk2FQQ2Qicko4utcWsT8XyzBApj",
  "key3": "2ry4Y1AZHnmCuzR1LRgpQH18apjfDhpqQeSyboF6uNKehP6ejYbby3y1SqY9tABR98Mt6h47uG8YWPD6dVwXWBXJ",
  "key4": "cwgurduBHuA5RmiZ74ELEEHY7CLJPcJZ3ggSB4oweehNPGfbrZ5Pu9v9zjdpoarzMVAfHfibNxbHdrfKpNSPJFZ",
  "key5": "2qxxdPUdzgd4FwNFYaeNALpbgusph9QDP1yYGkj9LBT1PTsgdGwRqDE6AG53BBiJyP8NvFLX5GELvL39WQNE4yDx",
  "key6": "3bStPAT2VNbEsKFa49u3CKLNZKACU6UJCx622KK5Emqwk1MtPoTT1uwMKxPnvZ6vER1ZcJAkHen6913umjMCkMqo",
  "key7": "2Y1wC8foJVuYu6cVwb4YyvcAKwe83mVgBsoVpAQFfJrxkQYtZPVi8aMQ55VRZ9Fk76zivmrFT1P8tLUKEjfohRaL",
  "key8": "3ry5UQwuenZCpoXPQJsAWDB3WioCZorTV7V3S53vwvV9y9XJeuweYcXkmRTXCPGhDYTfvzgqYdJ58Rj9iF9ac2Re",
  "key9": "4pUXf2Zktq3PepE5ACHr8aFZtnLMopCP3SeupuTNfY6PuFynUR2wz9CxGd2sGpZvbEV5Xz3z8SevpucAhjkFXwH8",
  "key10": "3XvJDx7ixETMANJExwzhxcPAwqjLijs6HBBBWpNzf9sAv1kcHoCiLpNXXBngMkEosGGEdjoaZeSi2im2hUA4Eg5v",
  "key11": "66LkQ1x32ibiNMZEUoSH35xcXhisi3B6WfAcc6M94uqtoADvYi4xiXVzExfE6RzSXSy9swa3cSaaBgW9PPLFRXWH",
  "key12": "5DZjt7p6fbWityi37hGkfPzUcm7fXosm9T5xvvVH8reEWGLJg4ccGD53F5s21WdkntHX87V85ZQefnve2pFGHmsD",
  "key13": "53DbvaiowTFnNj2cRFdvwnrZ1nfEFjLkE9Ts52Em49NFC9zxcGu3vMTJGk3RvRQDvmxjJhBRovzqWMqkiWBVH4JR",
  "key14": "33vCKEGrcNzNd7ermCEhBaDTnWqzjj8vLg6raQLKK6MrmcnyXTVFSJQEsgJkqE2zuKoQ3HWBvUoiWHJ1Fw2keJoS",
  "key15": "Z6uDckLuhW2JnRwHsyXGC9fw6MjPrRALsnEMnp3WMoxmwhjNtQMayCuPZSvc8TA2oa4iVfyhPtTZCvZPdbrz9Ce",
  "key16": "2ZTaRHjg6d1AS2WKBaH59mr46QFAswZxdzoYXHao2hEoVYGLidK7AhNSruRU5ssgfUPGiVz2Rtzv8q4sX2Koexou",
  "key17": "59BfsADTiyoz1MB2UXiUSGkUqodYAuNwY1M9CKyKAPaaJzZwA6GdsouyQ2akdAEj9zCnu2FgAMHAtKjrWf73U4QG",
  "key18": "5hx3CMTUuHUka9dQNCCeBJ2WYdhoCjiwBRBiySkGMD6rq1gwd3P5PPzPBVMbjyU2dJB5Cs9c6vh3EL1Bf4fafrVa",
  "key19": "2Ln6TFMj9RL86ihShPh5qax6dwgCAr5UyYZWmQxi1J3e6mGCMV6CHrrz2zKvnfv5Jh39me74CbKStSSe43fD83Rw",
  "key20": "4ud4mDxu1mejRNBmaQ3u4QhqKKCBJK3BVJBC4LqXPqsYQztAAJ7P22P3EsQnFJU7wcgARXzdzGsNeh7XS7wtoWgm",
  "key21": "Z8XUFkfZhPayFpjc8noxodB4NTLX9LRSk1vVZmexMJdjG5wonF2SAhXhYzdh1CH6WWDWsxdC4xnc81QMNfWKzrE",
  "key22": "5WSHtW11mJVaGWkqMTsgUT9SUrDRJXVQMUMb21NtnHGRkzDKsuFqXp1U52rPn6NKFQZ8NPq7Psw1SD4ZnmEfys2s",
  "key23": "2waPuVDKRns9DibfRr3bA6ao88d17hrcrRfv4uaT4ptp35TrhLJeEdd1RxDoSX7QUvgPtrBDKUMYDmqaSEEyAn3B",
  "key24": "3YTphwvSg8touUyJEgjeMr1m2Uxm2eW1yBjrHcWbPHojk8HBe7h4Tq5cHVuMMfXb3s6QBmBEhKY2kzPMQoSv7iNG",
  "key25": "3S6eDBkAq4ddyp5dSBznDCChEw6hTJLtTVfoZVx79u8ndh6nwSqak1VZQqN2mkMKtmjoviQNf15tkPTdq2FQAqMX",
  "key26": "5YLJPrnHXj1ubiVV9b8QrPpaWPxt3ARdBZ7qovYuyzBHVssz3fN2RScatKwn3ppP8wdXNfxWz2si1PNtnbJR3TCX",
  "key27": "4w2eo6UXHabfy3YbffKa3xTfvpekDRJEzRXzuoeHFGPhMKCykDLhjB9JhjVteH5rc6GRKrxJ8uMF6UNqWZLveq7b",
  "key28": "3tR1VMV96aV1vYAH43LYUEWHK7JVKkAbBuLDSXYyLrZ2HnfMTL7G85tLQbQ3z8j1fLKdecwjV2ZqvaCL6ZAjKCHn",
  "key29": "3C31kVEZrRZgGfPSPDFjWwn3LMQRcqpo9ithsTvnXgP1TnbGXNne8N8waUpFTvMM9QEWPWXjCigbyU8SJQFJgNZA"
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
