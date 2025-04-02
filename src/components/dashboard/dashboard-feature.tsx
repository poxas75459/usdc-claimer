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
    "4dM6775zSQh5xKK5qfKFLMNZQR66rd38RzhTC25sf1k84eQe2dbuZg2nHhtwhKRMJHrJvKupamMvL6PWVTNxBwoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86hYWjbWB6GzoK9y8ayan7LdCrFToSErQsx8HHktB6vFwY1BuEMM3KC8eZsxPmHogFVFmezqkKL3JMgoXQ2AvC8",
  "key1": "b7hzJjRGEqhYDbx7e7zLn92w3DFMSbkyYZg9M4J7pryn1A7ocGFXFCuWQfH1iUcsL5wDrUqvqEAmpx8od3WMgxs",
  "key2": "4cDHKnjfKh1TXRx35p2VhbEa3GDucp2yxrMT2Qgdyq7U7vHNqoNADyJ2CKiAcD5PuiSw26Y4itCpdwen6g7hSBug",
  "key3": "3k2MsrETZoThgeJCYzusEkTvjKz7eb6rXBr6pUgMmD1vXyc7FDRgZmFWK8btrFBp5sbmUCC2gff8SNmzjzsrV1Lb",
  "key4": "3UFJHPVXGQHZyJovLk4jRrfJ5Y623d3qbKxqTJEki5yTer9bYkNQrA1gY1xhiaJjyNGDEv9AYVBVSryDY9hJEcav",
  "key5": "32G9qB2d1KnjbsgQXsqybfAqsmngiS6urt2oBEqn1BvKkYMXDBoxDL3v8ztm2WUFSEPxCPKwi4rYkbKAJBtTbSLz",
  "key6": "43hjNQRoG9uonsY15xBXiTtXtguE15sh3AG1gJy343JpFSL3zG1uEN2zdNSX9L5emHsW1nSstmsiVvsUbV7Ycgdk",
  "key7": "3oivw322K8yoYJYMpZCUEtM2u9MgLWozcFgB8qmnKAwmiAAX4AABSCunKe7M7DMX6NoCibWNqMv33nB8GUftDtyL",
  "key8": "tfF4jSSnFQfRE2PJEDTsMzqgdD85JNAqZHs232kqLwqBbUHfkCyx6A1ub8H7p1TTSVAApRYiMzDHZN3pycbpGNh",
  "key9": "5cRe1tK4qYb5cqBZbWRdX8ebJQ1wT15vnxP9rYYLTiF69ocLB6ptFHpkLLeCTD1E7j1URE2hZfFMg63XdwmwzDUq",
  "key10": "31ZyE7WzNmJ49W4sabeDVJ8b6mKHoMS4f4CWi99G37ga5rRTVLrMEHr5SmgHGtve2AaHj5aFjB6ki7bMQDw1Nrp5",
  "key11": "244nk6wHZLNNLEws27swiMvrYycEYpFvEdgTAEhHLXFNVdn5QJQ6TkEs8fpeppX9QNSbJoTvPkNrs3tMNsrNr8M5",
  "key12": "3hqb6i4jMzXoZBN3UAdLpRUeMC7c2qkVD3xr1a8wVbbRn1g8WbQoMX6z6fiJe82ZJRkC59bruVv3rpM6UXiTCUKW",
  "key13": "2HFbDSHQmF5t7oNC6CsjtJjcZm8xW6ern3PbF3ESryNyQUsD8iS3dTmMRVrW2EiPXGgckKvhVFdGsvQX4a3zNGAu",
  "key14": "5LAVQtv9akXF9UwQWoADxq59BqmVxX6of9TajyG7QJmK9LXJqMTnyXHvMr9kVG6uUVk6qWiLyrM3o9HXUm8ziFye",
  "key15": "oMidNDtwMbL6mzh6zWRjGYuSrVeH2eNjNLjjQsoajsFZNLDUZAjQEsuTkVZdQgJ3jnm2UvFKVPTZUp7brTpb6K8",
  "key16": "5HfZm1fQAFanV19P7AokZKqsXnDTv3CxdbjApk1bKW81BFUQizCVdqMDVatfH1iPTM73oE2PvFJQSHJCFVmc4PK8",
  "key17": "2wtwa5kwJVzUUX4E9aXhoDWJhL6QXxzaXxCUkEjxmgm9AGbQyVmgWCJ4p7DoWV1np91PWw19QGnwEbUmM3M4mQ8P",
  "key18": "4BGfjGk6PusE6h321TXcKhyCjQvRwqk9Ts3ER5btZGYvj52rNBmNypRfMDdC2GSMvbaumbaZqgGaYjL9uLRU9UKC",
  "key19": "55n4RaXZTFtxJKAvdED4zLDhXCZzV177HtL8MJm4Vgd9WesdjA76Wwu6wasqfba9UDPnEFS12MSjSqpEDjvjXpPp",
  "key20": "3pg762nwUz99QVHzMVi4CMAip9D9GRurBLAvQAqSYt2eD6Dhhx49v7zyxGpDBZg2cS34yTjy2meDGY8jQTcnLGjM",
  "key21": "4orvBwVRPz9QpfHvK2GMBoefGNggBDN5RJAag4JKyZTJan5UpgYLwt3Cihjw2msvpEDD5hreeXhfxPrEHpZCnWLr",
  "key22": "2uobWBenfHyp75DvnuPY1eaVazb7y2oefQJgeWic2tHgoy7bKWkgrJ14jaXSnrRzmstQ6gHjngpaXFGFBAsBgyyC",
  "key23": "3GoRdCT5ovHGqALMowFzLxKu58wGY3Wx3pP8T3mp47dPpS7sy7J4En91WQdZPni2iPAsmkhCWDVFWmQBXtYSszgN",
  "key24": "5phUxnUpvvfqrGiDuYYSHd5aKBVzkQv2SL7FhxSp7cTUCHrR7xukyfP7S6SP4pU9GMVauncJ6REG2uSfs7pVNZSk",
  "key25": "2P2yWbjuPVbyqkhEftsawBWJZkAVHPDeqxq7aWExnFNUU8pKt92XR6gfafWEyi12Yqh786n8T5rJ5XjQQuMpkCzr",
  "key26": "2QB5kpx4XW9r4PtLG58AM4sdtTdEttwTGokBZFmEEcTYGW6kSxUwUx5KoKdoTaPQhVXQ1TbuGrmr4BLrv5FCkb8U",
  "key27": "42xXvm5cUP1YFVF4jFeHtmw5vmm5a8M5X1j2eGotfipG9TpQZBsA8dxXzmgAoFvfkbFdKt2SumE7ksSPCjDsH6af",
  "key28": "1dry1TTY83GAFGk2aUQeRwvjBhqhd23xDw5mswiCd1wX4DeKDum7uBkdVn5Gown1vGH5iu8pDWm3Yfnwj65iQvx",
  "key29": "EHVCNnNfFCJ6u8dAPps3y32Gk95cqKQvNfgLXnKw6pKvveCiPMfCM1NHwF7XwJJKxbFvWKPmeGaSn1d4Fuspd5d",
  "key30": "mtgq4Kmmoja6CjqjeVZvbHB919TgyruUmgLH2RCk6Zx1GFe9mE7mDLEv7hiEoDMh9nEvBfVqzWu55mZcBemkmn5",
  "key31": "GbEKyQg3Vna3Qh2ZBLB6U76XE1s7es2taRhxANkkvdrMv1pivvE2W4se6YuriDjiiQkLS2rFTGreWCAKRF9BkaD"
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
