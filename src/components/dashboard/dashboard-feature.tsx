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
    "pZ5zB212fg1ZQyXLjppoMYRgoM9EiWdj5hYhLeW6PmbVX4mWVh8qPqiHykiUFdUajZ7gEwc4UgsnG1jRSDfotV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HetGYTjyQGUiFUwZfXoRyqWaN7ijDe94hC4osuTRiCzr472p8Ke2jZdyQNmwhZfAH715bPs1BJkhNwgiaEcHF5",
  "key1": "2XBGXCauxgfyMVqT6wk4xj4HctVEz2MXw1vF7vU4NjpFfBK5yNyWXKCoY5E92e9eUi4itQfNg36hmuvP1839Xx8M",
  "key2": "28EoLPFPBA9JUru5978mGg6fnjPVG8FwvpcGmt5m5uCiCHnopEbdbbarePdnmHFY4Ndb7Qr9jAtLPoya6SiyFYWC",
  "key3": "3NteCRcETCcCEAHSA2eVrcvTiXRD2Kq2JTbBCydDE7SeiWUCdxP6CNnfriAXcDU1y8uMveGK1JyWSEy1AjktM2Xf",
  "key4": "5MigmKPSVN5foAJz4KdhNCDhPoJDi9sZXpYdJgXhpH6JBaCtyNpQGmAe5PVW9Xvd4izKc117KstTCaDKBLFaKDjM",
  "key5": "4nAkx9w6qWbqoBXBRSARCdWrd2YmnaDynNBYG7qErYBs2TpYKpLDVrg1TQ7bvPHgRYTPLQpyHBQEGZx3399ykLWh",
  "key6": "5vVksPhofe39A95NZdqDtDVSbWAkmzTVmE3cmyS3Yz2cf4H3spe2ew8u6XvHybGndfxmtyfGk7RRYHGdQ9Hw2aJL",
  "key7": "JTkzACt45JU9JMTnaeKNvK6y8jL73MAYNQnoqqzNsAdAgGeNCGCEuQCGWBDgW1eZSqL4YqsVtRq53YLbBLSDZP3",
  "key8": "2mebCoWKkoCQub3Syj3LXdbwumWHBb5t7CF7hXa57qw2E3ZT1QusvTxzw7fv9EKq3rjDonjvf6Du4pF3VQ7i2KNN",
  "key9": "34vV2ue53ozo9XjR4HsCa2N7odc8pXE9BU82a81d99S78N7kMLhHJ9xm8SVHzRamp5B85gKXLpAqVRz3RnQv9aj7",
  "key10": "5bEZJAu5QHEnpFDar9XiBEkwMeyK6ycyoWbpuH5qqxMQTJC6eMy4SLpL9AkQseMi7gja1wyzibU3UKsGvTWhpEGa",
  "key11": "3d4mqWefvoic5kSEL4sGXLzS1zTyT338CaxGrmYiRkAwSXwHd4JaXh2BGj7sNaGizJkgoQivZuw9dHLdEjBb8kSL",
  "key12": "36dJaSk5EWbHWHrZcTesCFNvBHBgRkxfcyz2VdsRawoqC8MtoZzZLUNvqoU8KFUGbxAnMPgjyaGmRzWmVFYpvhAy",
  "key13": "4rypmwxSk1wyVzsfQnQdjx8VX1dHJqC4kjZnSKzAyXueMjJ5FgJ951gwpr2n9QUWDGMJZrXf2vGHQUt4b3sTEVHV",
  "key14": "5nu6j1kZJwWCmULRAvYCwouZBgeKApFNqFNHwqtWBWsSHidn3KsSgB185BNuoEdMVpb6kkVJ52h9byqaszQViybB",
  "key15": "5qxtxo3q89aAxngu4zEyuG5gTbf8M7qwQXLpoN1TdKdjqzzVanWrkKq7tyXLYNPpepZyzRwMaMLZ7vY9zeheFvSA",
  "key16": "5eDS2btm4SBSKwBRVhAPJaHkxbPYz2D2A4w2ny5sPhQhrTXPXAvT5oA8aX8tBGxJwZUx8Ti29wEED52CaUYuyAUE",
  "key17": "rv3C4qjEhNR3HLzv2NbPm4YHjkgVj4G5HTWaXQG5ZZBNE3xUbamASaBYQsFQjx6b18FZuBeY6X1wQE8p9nDqUuX",
  "key18": "32hiNjvpW5w3pn1QyUVZ5S14gw7zfjXeNH2iLbakyp9Mg8htir8xQwDN1WCy4n7yoZ5DQP6yifWgcN6Gvh6BTVt8",
  "key19": "5bEMHPobsjjVQWEgUyUx3GZ8nAhuY93zXiNRJvJ9iPGBf89hktAk3wD2hFkAYXiNtu7haky2KcBfV4G6JQSn5254",
  "key20": "3iqwQeXUUFnyJuVgRECCVcNZME5HqFykdfzs8HQUCG5PZQo2FKHHxwV2tjWEk5cT35WQiSJFb8vsgX5QgKey43T6",
  "key21": "2e4nDmtYfcC2wDLTZW2RLzv33hYK5Ej3T2oZk5aKhwA6XCi4NgWQLJS3D2eFv5SsMH3LnuiGcko3EXJ5Vu3pkFM5",
  "key22": "3Q7DTmJr9ny4TYHaJ8aT9Mdj6YtnnsxJjskYNxsp2KTpoHpWktEuQcdcTae7FZaLSbxkk3unFZKFRsRE4Q8fyUJc",
  "key23": "vVmuxiWUoQgK9iWs9ZWAXd8qArcwmDK28nsdXEdfLetc1Z1TxAH7X5ozFAZAFCy7wyM2uE6AmXt4dHqikt2m9hp",
  "key24": "2gnGwjoBYLGMzLLWJdNmKCQxCLfvYxQWQrMXyDnTT7HdUV1gGMTyGTkeSryUc1cpGgzgPEHvgAojZFNGzQ93nuck",
  "key25": "2rkFqEEos8pv3yaJF6qim24Q3ds7xFZ3GSSyt8ubEcJkuCZAhQSoM4uEjQVXGwZGy9M1GD3gPLJNtd18HqT8ExgS",
  "key26": "5XPVDL34N7n676sZvN7e6Mb3w2sBRfPGkugiXJGp1zndWSAbdKMvHSURCbh6zHmV6BF3FhrBXKgN2775ezsxB1vc",
  "key27": "3dcLEYjyyuf92DFXZbm3cxhVFDUsmChTo8yMUbgQsgmE2vhXvLCG4tjozbgyTqqBy6naeNFZ6BQmE61t8MBh3WVg",
  "key28": "58MAbRWZKabUggiHhqN9w9s6M3oSwM1anvKK7sXhUjhungSKFCVZmCzngSCnT1NzKze3Zk4RciZATihkQDCVPqpn",
  "key29": "49efEZcLZMFyjPCPRRLBL5mvNXaSzdc6jtiuXm4vaseBidjQTLg17XA9TLGJ8N4cq9axzLhahBXPSu8HJXF1DVVT",
  "key30": "4q8b8J5zHuH8Es2nfqXKAFNf68i88DAFsNVNB5sVYNwR1eEGDWkBndqMop8TT8zpUFa7XoWn2rcyQrSc34r22zfG",
  "key31": "5xBsKtEjXUyDJzAXk2T8C7PidkthPme8qkP26oeyMpxG33R5oCgZapXZvjG9REn9UPwUwHkYEiZYp9V9sd3GD3ff"
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
