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
    "26QFyzuz78ogjyXm195TJFbM4gz4mJFhcPjoqNyttcC9Hji2QbQsYZPReH2aeAnXLuxbWPbNkuVzDJ5SToFPk8Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29J4a7kViJnVVqo4gPLAN2xersSkQLL3A5gAtxPVRiuXv5vKc6bkmp9LJ6qwevvgWx6hkELuwbMBCTjGvPjT6uus",
  "key1": "reRxwTsPFBKRwCNtWsZvKrixbiqssnnFBE5wndP5GJfCxBXxwaFXVCSZRPtNgpNQjQD4qdxvRWmGAWA3BXtjXL7",
  "key2": "2f9rKfTBdehgE6XafYGTSgCvzbYmCUPioa7EhEGBsDCef8kaQsJztSfzMxHn5LNHXvtZn1yEhwBmvVpzZNxNkrza",
  "key3": "5ff5D3WD6CeY4eEQQ7he9Am62gDinte1n6gjLwQ4MtDZaXxtV345AXwWSqkSpV7grqbFupuBxjtAKJQAwvXX6Gik",
  "key4": "5NTQevbWLKtgvPM61pqK8hvPwmLUQ5QepxHmriL65LaDrk7LnMfdXt2HoaYvavu6nmkjaPtgpCgGYP2Rer5TeJf8",
  "key5": "64E3KkhdDbVyADzvPkM6kBvvWeKxrSNVARD4bSk4f85G7i1DTZPm6gwuu5sKSo1X14KDCS9RGRUztz3HsAhQdrNC",
  "key6": "4a23nDKMDSnmteymsSeyhvd2pUGsKHjFtxJQKyVLpxKtPvo74Xj9mWLyEVmXLGhZ8SwyBuEXZTCSyHHAZCxV5jin",
  "key7": "5muqLggJo7FxVyvSUujEx8R61TMrgBYogogJDJBr87xiwYbJRjqs1xyk3HeWeprwQseoUKkDdZPoX63UZEKBBZfR",
  "key8": "4Ju6L46Hz8UWD7JRNfsyKkWaLbZJ2LJ4qEyntsauh7XG28Dzm9C3LorBGzdUF4qFJ1w6T5BLwbGhpAdsSXYPo1LU",
  "key9": "2p2af1U9iVSSBxwAi9AARgFfDc93UL28Nh4MRWKptp2ajYWg3UKh6wrZZRahCf233KywpeZaR8htPb84z1g1WhAK",
  "key10": "3UGtLx7GrjchPFGbFHcK82Gr6zA3jJFJeb2Kkb9WPKgBZu7xEwtB6F7LhgXSGqexUmJwJr85oNU8jewRgqJf9BDC",
  "key11": "A45FKqRhii7xm9vEbDXZZwnTw78Uru6L8qxunxFZ2rJWnk4eFdD7dZW1KQeztp9asyejGssW41pD1az3yVTpcdT",
  "key12": "2Ng7fnSmQfoJrLbNznZVZnW3XLSWBE6fUUQJSaMUj4CZKgjzmkpVSfmvPuackvsh6wWKamxdsvBYzUoLNN9C6XGr",
  "key13": "4jKQrjAkMbaGGoz3bvgipLJkTyNYMx32gvtYkq7mSGfWXhgv5u19jVFyePBrfr5GkPpn3vRUk86eFgrBZqxTqTa3",
  "key14": "4cjxYRXeDeTLW7dRgzEvrNGwNUTVNe6bEG5FLJbpjUJMpiANMFMWypcDG2w8BHapAM39WRdATrEzQZ8kedgTDudC",
  "key15": "27s7bK7vH4gYhwPzg3ZiSX4C7CGXCNdmtiuAfBD8N6xTzbTPKcgLQzNqW8gVaDMP5GH3fuod1EK4J6CJWycDp93z",
  "key16": "PMj15tBgJCgQ1yUENQasUHDAqc5Aid9gyoRsgAAivgDVFtcJNwiXiykm2DP3ACFRRsTV9XqZ2j5j3HSdGXMGd7d",
  "key17": "5Euurp85yxXq7p1RnAx49yG33z2WBR9fE62khCd57cF5q9teqzVkpKCsV1YN1CnbuqCasQ1utBUDNpxQHTQyA5hG",
  "key18": "4qySB4yvvPnrcm3nAC9uHcvDDMrWLiEBT4MWWvPDnMEMtVvC5JLnP4nwPTbD3hJXGaFBpTTLNgBU26DysXJx7PAB",
  "key19": "5bQxBv2hGZ5VGRKj31B7tbwGc6xXAcLPBqAwcoXDpWVpn4PrPYTdYW2nv5uohkwsYxKZ3jCJbf8ZQjw2eQ7p32TP",
  "key20": "4ZGzLuxVu9a8YQJKPwHwGkuHJhYKFTShmrJBbgANywBdFVxdu3Jpbby1o2JsVrdjC6iPzXxY2LkHjeChmK29ggMs",
  "key21": "LPWzkj44KV76pw2dWjoJrRhVnQthLLaj9wM4BK39UVTuLBL3SPbdoKeUoH3AwYpGD4ro6C2iXJjkq3FQJ5NtJyd",
  "key22": "4GcWTTb88Pzx8A4FHzbHtjtofz2eYk6Yygt5YknaAn3tCcFDD36XFsA5hgMdNrVZKgs5cMs2cZKMmZ9u66BoWJCf",
  "key23": "5YetqSD7c86ZwPhodg9mtZYLFcFXBoJmFkkzAS2NypK8XZ63hUhwJbTbNHfNwQ2VGkNoe96TU5PpYYjcEBzeQzrf",
  "key24": "4n94Y2cDiuARrXsF2PXeFUZ78zk73ZpJaM7uTSgWtismi7Be4DPsBimw6hVnBpekntfc2JKTpG9Ra5WPzCwfJdKD"
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
