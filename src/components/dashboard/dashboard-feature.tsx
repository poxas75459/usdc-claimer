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
    "4eFtqPq1a3H8XG48ef1Jg1guUW9kvJ5rrTSmq5GGynynQq3F9wrf8viHwZRm3qo9SFnfjQMjcY49zntSbBKKQGGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NXDTpHbrEn1qW66j48u9xizTEkXuBNpF3RBzXVojqBm2fYhiQQ6kggbKqbbk6NzedmQS59jKy8ZgYm8f3zNyyrp",
  "key1": "58kMpc6kxv69cRXvXPfsAmYowhd3X4oasEnPupXpTHkfkqnpVeYvTn27RNhCSjZHu7JynqyU54Qsr6gWMtkVDsGd",
  "key2": "bD7T8JBWR5YpLsR32mgppWqXFeoNMXJXwdUxYwogHddcMYu8oQ98EaLjDonZBWVufCtJYtQ8FFkcpgor4bXhNHJ",
  "key3": "5jm6quQMJ7tPFWyiqJGusBUrizhAWED14BiLaow6g93kVrho5MfomCHYiDnjYySCQ4LhkpAV8VYjCTTtXemUthPs",
  "key4": "3VYxMc8BzFHu176iCqEA5WFHmLNfjcAaMQM3YQFSjz4Xxe9gYjnPawJAyKHmScFkiAo3jC6f2GSGW6KcZ6oZ7oAB",
  "key5": "3taw9cQDV7L6K7EUNM3o5DUt64yxseKR9f25xf3koHGVTaFptYs6op2QBVgHnVTmNPpCRgtRKjYsj9UzkogJVRJ6",
  "key6": "2U9hsD6S283t8mTDW87sovogDxfUNuhFqB9TWKnBEayM2o3ZGaQ7XD9qavAqGcbNowJxtcvfo7VQaj21TS9t1SHr",
  "key7": "6Vs6J8GcU8WpnpQG5BkM1JNQhwQKwJJBamZpiTnNSowrdUuoGFTBBhQekJ7KTAxA1XVkXeVSHantYSC9PcLHy4i",
  "key8": "51b9GB16c3yQfB4k2VdewuGETvHvx2Xa774YPhwyK4DN1y9e2zkyyiAfYoM8hDpsZJxEVTPCDAACG5s4BfR5Rp4Z",
  "key9": "3LrNNDo7m4DG3EFUkU6MBKqJfhms3dSQNXv2CeYYoE4sF6RP5CY8mmGzyLzKYVyz46NancdhiF8Fd82ArkUymE7E",
  "key10": "4Gtv3XM6LU56qKDxk7FfAXB6rwNYt13e8xe6TPoctgxdpk2a9qKZNY7fv31yFDU3iGvid8ZPbLnAQeBqQ1oaBKKy",
  "key11": "4xRTwsHsgE5yDEFT73GUHWBLN3TtFV6cQiBerSWUg2G5t46TyhursHXjAWAgBA7i98DCDc2Xn5UGAbP3RYX92XBS",
  "key12": "2Jf2pVGaBnBFQ9d9eFseT6XVaDujFeTA4NaTBLDsLE1CuTDVDn7GQMyssz4n7syHF1hu6LNk6NZDaUei4XAs68oD",
  "key13": "2eynwL2U9vsuDwKNGijkEVut8minCseAjwD8vKki1Hia7XAMU8xX1pFZhds751c7ka5hSEScMGAYvgc79KynGuKw",
  "key14": "4D8GrZCQRfeSAXTaRdu1nmLhevngteAwRsm2bQRU7iLigyTHPq51zxa2t3cPbcJu2PQBh9VxGvEXA9F1UrjfSvLU",
  "key15": "RkmPomnRxFYGVcFVk1fdGCFTJCNbtML4Xoo2p67mkKabPYJvZ1ibc88e6VDKbdgAbTH2s5TmxvE9LbKP3Trpb3p",
  "key16": "3QQ598dqKxzJcrotYMrGZbUFs6Nm1gkDp9b7F4C9juNEiCSpQkyNWsjvnm7YaYxDieKkuBsLTr2TytPBqDPcvuCj",
  "key17": "2VKVsF4TrvbFdaCmmoVyZar8Qc6vAgeToUYQGeXRFendmSVtRBoZTW9ePE5uedJVZGexDfCDT12Mqto5WsTniN8",
  "key18": "38hMVQXqFWh21jysZkC4TufSbEd2mCJDoybaToVcVGwLCRjcEBZuZdLh5D5cK7MQfoiyv1dU8w8gbmeCLpQ1e2iW",
  "key19": "4L9MQMRq95suTVCo8ymitHwdjhrdAQo9aYnKDQJzvmYZSqryjZqFYt1ArVbz4QMcU2dbYFsA7t1hQ6Hdp7fcGXTs",
  "key20": "5VpiGZfgGmd5tREPzyKU6xYffjN8J9TcWw4B4VWganF3RpXtAvnK9gRm2YkCMyKaG2WPycfA1X53jefw4J3iY2Yt",
  "key21": "4hJRtuwkZkzcTshbF5j38cEhJgdtve1ggHN3WsvAWBpA8B2h6Pn6ZJPkRH8cmyEgpj8Z4t5Yn5trWytJ3ajX6XoG",
  "key22": "2ibyLfU6ok9Vey6MVN9FdSVCVGtHTaUzNP4rjPxaCVoqz1hgsrqCZUroHK4spFChHnbKDoHexF1BHjej6s2KRoka",
  "key23": "5X6nbAWMDBk1wPF5x2wXumThHz2Rzvmvx3US45ZRAVbRzjk6rJ9qNDRdGnDbvbJAQWyVqgiMZC1ckqh4t4hHxymZ",
  "key24": "4AcyYNrd56PqtFzwC7cNWZxnMrdvaBgntCyvWATXrUpTyzrSnos7k6KgujPtRCbH2eQhiN2qp1dzMvXWuAReS4EP",
  "key25": "2uLsdgY5Vocz5Br57AQdaPHHYS9Y1auTRv5Zz1febxoH5qE874SCYgTZYhh2WC6iU8f9gSYQenBqZEUWt8keYLe",
  "key26": "26dpSMuRjZmjq54v5JdBV6YgQhLrogzHzpbwyNtrgAkX7Cawb9mbcoT6CSD7ZtmATMzjf5dxDi9C9c5jJcidx4MW",
  "key27": "4YJcmHH2i66yQNjHh4gbHy9CdY8uNvyz57hpqCM3nZKvTUuYADYXzqy8tcDiHBPcb5tssqpqSxxEkxYeiTWxMWXo",
  "key28": "YeVshhLDGbnLLkjRogYwNCukf8MNgxT7f8U33vtoGiNEcY76HCtRNNaSFuAnb5Ar22AmzKzJFTWrFGNV5JoVA96",
  "key29": "3S8MNRgP9aZNkSYCc1agGGpVMneXepP1z76XG1pQ5xb7sd6dNNXwSsXD4tEuEQMgZ41vfpnMKpskbdRdyD1j7bZG",
  "key30": "svqBuSrivRLejB8YCTZsMp9hjPGQpQJFgVoxFT348EH7fEiKZVbY4ib7ceSoL6f8fH4GzW616VEpVpayMhdoX9a",
  "key31": "45LwQ69QCuecdY5wE4xyGMjTRmGoboKVjA1yyk2AMDDUubBRcRPE1ume3bVeRiGfDyhzsHtzHuNCrXuBxDBW5pAA",
  "key32": "414QkqPBBMXkE8GGZbdcd2chSeAchFFJrM9w3QqaDsRoFREPHH5VRDnxnBLzhd8QTTSn589UfAVo4JRU5xQdjv4C",
  "key33": "2t5rRS7Yd2BQjAmyhXwNAA11SDHPX3JNYea472MGXCVAQijsJfrYZPrqebydN4cDSdriVdMtdPkojwpoYkwLRiMS",
  "key34": "HhRyUzka4uWdcsj5WhB1NPz3Hxvp1dgcojdwymYyVH7JYxni4HQ783ZSNU77So8TtYrdhR5fizbGKJceNZFicp3",
  "key35": "z97Jmdm812ECYZhDMMLZ9fQBYkN2K9SawryjhgstfcXgoHfbCrP9rXTd1246pcNbBg4tkcS6u7Thytkzsoc74hM",
  "key36": "31U4ufixu4nfDfx5y4R4FExvREmvDb7dEYCWbFRPtZ8GLh8bpn1gkxted2ttaktsUrFQiiHsnMHAK41vfZay1LLW",
  "key37": "4PKbeNYfyaB9yo69qtNXNwZCyWn4zq4xoZ6GHXASe3v8HBePXaZSTUe5LXpVQV3jFFZiZiaXYTa5SujpggKK4LC4",
  "key38": "5vV6fswh79AJKdwBWQJ9PXhBNJxLu3d9FE2Y48FpapCCFgqeCcwV24cYjz2fsQgadBCF3d6MeU5Qrx5h7YE57mtv",
  "key39": "3mwrB1wKYbJJtMvkyAtLs7Xk8LfzmYo1C1HaYJBRDPsxatLN4TLSqwj3S5xy9SJAeXatGijRyRWdqKwJcC3PGMuS",
  "key40": "29tZC94DjyBrrFDhoJiUUVzhPC8sTeCenSDgdZ9enokvXbhdcBEgWmmQuKBC7z6UpUTb2G5Yje5JVHwB7RfgELLi"
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
