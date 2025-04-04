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
    "4zWudYLGa93TiRBEz5GJjrRjdxLeCi84pKLdvYm1pSTV1hYpsmhzpLqDgR5PbSEgPXTgw7rPuU8v9cpDns3wWNkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNBHkHP484ynP6r5bbkCjxPAbbHvSaZ1wVWcFjXiBVLR1B18fcGr2fcevCtdUEnUES2EZSGbAnenYtCTuVoo43F",
  "key1": "5CNesYU6tWLrzT1HEdwwJR9GiTofQfsstEaJYQUMVgx8PxbvLeMNfctLRgCDA45nLt7sZWHpqZiQyCf1ejEKPBMY",
  "key2": "Ys4cSxAF4r947C2G7MNTJtRHQgs8EzSYLLs16UPrLonCaPSzUpA7QfnCPSx4ancZjGAoDd9nfKbcQdtzup2d7xS",
  "key3": "5WfXMQq53TMquputTQEFP1rbtprFRM8JXhGkVj9H64awDZZEvwSGStpTYQwjZyqWMLrVUaajuRhdihckbjouzXsa",
  "key4": "48s4DkUWFYzMQ1ib7b9GQx8YgNWekPiTaiJUV7L42r3HFwP6ExoJAe77aENaxbwRbCuYmtc6fTMfhmpGH5W1GbQD",
  "key5": "5Pk4ndFEkWCQJZoyvLYvgcNaVYsQdDoaFtFy8bwj7xDhZPbBmNi7EzPQRguF1GgskaY3TpfhRYthsBDZo2ZNcPyt",
  "key6": "5VXcNtcVkeqWy7z8HUvEoZjCXe1ULAPG9jtEneQBnk7PxASg6LqxR24kmfiZQ764BjMJe5eZj5RnCbbQk94TcX9B",
  "key7": "5qL7DYQHkgthXVSNGh29za1QHxDNzL5EvhMF1i7oPHPjnCDCuv2LqaAMppwFDk2kmbkSHJZUGDusgjXUwGaWYJGE",
  "key8": "bs6K567op6hjKEUe8DW353ChP9MwNCyPi2QwBTDX8YRcSrqk8yzk2TGF7wuYyVv3zpPbRmbary9Uzcx7Xregm2a",
  "key9": "5tpjJyqh7hct6wdRhQi16ATatyW2m6bcTfTZMsuLcbQe7Q9seN83Bm665g7okqZdw2Gn78BGy4y2G26vk1pgC7gR",
  "key10": "3veLzNshh41EWqPDmgy6iT35EoQKUcfFeWYcJP5TyjCHXdXzwxUYfCczQTJviRs1iibzh9fNG4GuWaZ2ZiFZpT6L",
  "key11": "E6UoC1pZQ6DuXrtDNSoH9xBAjbfJDVeGJEh3Faj1u5PCnkHx1zuQA3Y1an9eitA6Pa1Pm9MpC7S4hcifvwkrNim",
  "key12": "gsbuef7fJQYAau9bL6HbAFhNB5XyyczhT8tq8WtmBWhyCJ5WuBjLSJwWWgxhBLZg7D2SMkh9mDJVTscLjVdCRRc",
  "key13": "chD7jhusyorAtu5rDYVbx73BwhbxjvPkQg9FuCAMF3PgjmLSSvES7cVe7go2qPJh5EYhYgvdJwvh5mYTeRDgdhW",
  "key14": "43BFjyKauzREGWghzpNGx1wSNtAim92k58KujYsTda4sfVdGqksyYjvDcEfdcjdb72tC12X7yRqyc41ahMpfahGc",
  "key15": "3br9SJKXZ699ZM2JT73GnzKS9TYrt8YVQGKDy8CCsWuVN9CmPHfBp5EeKzteu2U48FLfuZXsJ9TwgTQ2geZMfNTX",
  "key16": "5U6fLesBdcpuw6CcyiD2ySrFYUMKv8ximiDoMGezUS2oRFfGotoiLgo9zy3Jrm2MYVz2frDXg2ddEdqpmQXgr4RG",
  "key17": "4eoH2y1bwMzafeWr4G4ksEB7VPQdFD6yRBnBL852orMWfuis3GoXkmHT2mXAhDnrUQHdtEFRb7FxeBygzjts123K",
  "key18": "4hYELdri1tDuNLF9ZcqFJpxSzMpFHaBbcHz2Ywx1dLH9p3k6AoucG2iALnEpKHuF1n9NkYNVuiRo9SRu3mgTpCqt",
  "key19": "4o7UyQWehWB6ysw8Jn21x5BUsGxzq75pXjHd4seg8dRLGo56dCz5oF4EcZNPHbZCeApprTQurE3GwZMKqC4x3FFs",
  "key20": "2KVdPVhEAbpYvUhD6dSHPjhBGHEjyzcoTacghkKAiSH4XXDNadSAtQeMrur7th98EofGumVEGCyY3wzcM5NCgAVJ",
  "key21": "45dvqv9qex6qbckVXKShYUjLa6nzTk53V1umYCzZx4EPD3ZZdkFzEFSLQjEgSWQUw9VRnAQj92cLBLWJTptkiFJo",
  "key22": "fiTXctxMT9FXdNUYbEZgkv4PhZAMBkzAFPqs2PCVt9CqihA7gau5kg3b7iMVpMQgQbeKnrnpcsp5HiVRcNKVgCS",
  "key23": "4wWgsxejTFnJtvk64zfrZgqCqsrexfjb6PxpHy3xrHW12n4DixwK5n36aswCrEHX4EyvL5obd8eiAaZp5VmbXZwR",
  "key24": "4ogDFs8yBAa1eY7N9vpY7R2DtjL8yvMoNv5sq3ww5GsUvRmswoVdzSUe2zyD7oRgxpGrGp1wVKzTbU4zHrJR3ef3",
  "key25": "LMqgi1VvDaPp8RdJHgUEptoHqLepCbiLj7PLooFLFBbZkoEnM4wVYrri4RKmRBz1Ciikg44545ooZxrNLi2uXHW",
  "key26": "5KY7v2v1mZZX4zrtvG9Lnjbtwk7NdCDUXi2UYNnEC1WWhcgkUZ1We417E5Aj9i2cuRaTtPHJbV2n88Kujuo2uC66",
  "key27": "35ciZGJxDzpW7Q18RqfqXCahYHUoabMoGZncsRHwNRnF7YDTgUUuX3cuUoxdSMEQfaLdStLwEasc2MS5VKtQR2Pe",
  "key28": "5Ft8Ypp8c5v4JRAG59MHt8mnq8hFTz2SfzRPvgsp5mZkeQSfjqV29qXuSe3vjbw1DesiBqXzw5ivsaAGbPjQGHD",
  "key29": "5nEZNKM3Eq6bu9vBQgaFZ3DxqCh51aW9ideUNsugTqt7uHivcWmYG7FnfcuPPkaF872yHTHjiu2XuDf8hqFuycGZ",
  "key30": "3wkucU3dshk7kK3TGAgn8nWMRW4M3ingkz7uyVqCwiY7f9eNoBfuzfA9bLfx59T937qqXyLFQuZ4RhTA75pUSXDB",
  "key31": "wAbFLBk2CN3tm7z2wveo33QtdDWYd4RLhBZWymtB9R2joLB94cUZt1wH2eJKSbQTEEhxw8wYdzvN1LCZ2obZodL",
  "key32": "oEqvzTD9m6SDHchUfP1nPVB1QK8J85fA6DoazNQ2Fc4bFHnDnX8kkvZh4kSoX2wVnKB8Dt5dyNZzhatqp2aCKpu",
  "key33": "3WGXxJ9nAmBttkEinbdnNMKTkaVFVQBPrf8vD3RziHNkkgB47KCyYPm9jhdsgETjxSdd99w6KHqVCMtawBkKfxnM"
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
