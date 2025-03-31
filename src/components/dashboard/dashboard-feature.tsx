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
    "4PQtUPf4d54xPDdnjWjLHpKbVyF2M8JhEXL2khGvS4JznNbBy96FaAcUktSCWqjvaV8MQj69YA7on6Q9sQEnETEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDPZ65EMe8i2fCoiRan7qXzuNwNQzfXZx2DPWmJNEQn7nzPrCTkB3eFP5DL4VtYKcbgZ89eZ4m3dWahugMT3mRy",
  "key1": "42LtgFeW4a6fB5YtQVYWVXVqZZY7ptUSuWR2T95oXnZ3ePuMM3uTYT5nwwgV9tLDTcPakaNpAgxaJLK23njmtDGA",
  "key2": "22nWQFHHuDFCJ51y2EyhyysQPtJD46iagM8D3H8zcFym5NfmStKMrPpeGd3VgwC5LRnyuFvF5BHPm52miysLzjVP",
  "key3": "37JFA44CozDKFdJp4G4iRgfoaef41g7jSCVQf39nN44PUWbP1FUit4V7CMSMFUcVB9GQP3fN145hHSADDdeK3mps",
  "key4": "43dcst6QQdpaeeXpomGAMLkWmZYwtqLiunC1VpdwXKazUhMYBocBKmrNF9wDZUySB1UTrNDetZkQr2YP56XzvHv9",
  "key5": "47hzdwfvtEwirrKgPS1GJhuBYLwBozHfDYxcCrhXM7tS7J6PtBXsVTcLs92ZjG5z4UtfApgqQXv9cR44wbFa92kT",
  "key6": "2ZzLxt4gmZKUVnxaL274eFjHTFaMHZhsHWskNjPUiQCBZ3pLytagmhwkqqjbyMERkuEMTn4MUbDdqiihxru5SbW9",
  "key7": "3E9GSsS8KCGmyfgKt2rkDfMNe4Gyu1u1Bw4Uwm8bgAVPXH6iPNCh4fR4HVGXfpwdhNLGKoAYJU1dueTrkmEHcAYY",
  "key8": "3r4rkokWTauJGd2NuMFjVNM6ge6AUcjnWxfjhmWsKMvNMbLptw8hFkmJiBGxKSD4nWv2dwjtyQ7BZm8G47dpbgk6",
  "key9": "43ZjLi5kBB7U6HMVZqPFLNNnguyGhKbDosEwvXxJC86PbSQ5LQfDBqRwDEArJqpphaBarAESe86xQXZhLKzjEzXF",
  "key10": "3Suc5S1JehR8NLPeaSwL9tDboYUzNBiYCmeZWSPHCxkFXtMhFRE9zfFetuXLSaXkrQici7Um51jpLM6ZnUnwM876",
  "key11": "2cV1QYauNkMGbigN7pHAmo1JYKrB3LeDKkrEogeNQjzpZnYuUQd8udbYTKU8dnhE4v74wWt9ZuQeEoypx8gw68L6",
  "key12": "apHNmvRM32mQ2hrsrSeiFtfxGfJ5QRnDnxx9iHXdtTjRtBUYFuUzYPpwdtBVCzdfe9JkFmbZGp7NftAVKNSzQdr",
  "key13": "2TPHBBS2Crz5Q3RY1KCfofyFgHSDGdQqTA33tXY6LanT8MDgyCSqW2p1B65aGEpWxzKkJRBnNwBPk4XTGJEX7m5H",
  "key14": "2EmjdFxu6qZhNakZaMwq5G9Ym4YuPE3C8u3VxLUDbUPWoPgSRi7HBNoRget6NwR8eC3HczCeADRwCq9mR3Btex1f",
  "key15": "4R4NsmtWJAhmQNjv5bpnLDpGVTUBaPdsmrUc5h8oDu1gYqdjfpMHRYmbrB3czLuPmPJFFd5pPmBv438N1QTYGFof",
  "key16": "5y8HccLhbiCkGnbCF9MM6AEvpadqyW1BbzyzGAaM92UhFPB2ijNczbK3x8GSjWAq3ZF3jKmjvdyy9Hjty93Vaj39",
  "key17": "5jjJKEDZs3AzGj15ZtyHGSE2kqdbZuUXYAyCFh8M7cDyzVKhND96v1C5FhLmWwV6cbGrjaJF6Ku3sGUByYkMQijr",
  "key18": "2Q54C84MsqitTaTTKxFMavuBNtGc6goPMjoEk2dNS8Xo43nne1r9axLXXjzGSQYepGZHk3k5z3xxk8b6YtBVxPJ4",
  "key19": "5DYrdiCBYbomQTJzCZcxADE95hnsbEY2a3trBkFU1g2RDsFADknSBWitjotS7M9aQtcxpxFgYjgXwwMqVComx3KD",
  "key20": "3Enb4xykL2UZS728MhRK7HGwRJAVp9a3M5KwJ2LQkTvPk7zjnSoVc1yfY2UYCnY3vNiMUuk5Xouh7Xzxj1HiHZ5J",
  "key21": "3TaVd6kz5e1RkymctBURiFSZB2aUVBj9hA5Xh2NvCD7WaC6TMTAX9g7xWBukSnCYkkd3Sct2JZRosmhCdpw8iU3i",
  "key22": "oKTPAJBJdq83yvXsXGngVaWjJEQaUGEC2LHjwayGYAtqT4tT6r1SJCuYuTxL1hJ2MBEFGYyHtrqE82QYkjZyntp",
  "key23": "4mwxPZsG6eLGAA5LG8FKqoDTnwDfygK8nasP4aceYdoV5quhxRNctjUZngGFQTFH7tm6k51fM8N5ParBT5a322me",
  "key24": "3viVGvuxQ229Kk7rd48hu7Uzc5v2cDTCS9ddFxfwD8pTAUUrShwxZap7x3YVJ4qE76qGBWbbVpNF3W39HenRTq1g",
  "key25": "cVmVYMuQZpRmssuTTnzbN2UcD7bwA3ehv9s3AKBhmPBMbwwb8VeL9Ae2sY5kXss8jAizdVReVtVDAuHALUYHwFV",
  "key26": "58uq98KgDR3mn5FJ3u8mK94zjFUuBig1BKb1BZ58f45bLHpS9VQ9FCvzuNp71ts87ovRTxb6r5Mq3bmapAyJBHvM",
  "key27": "4tApGGnqmzwmxwbgYj6bHHPFuF9MYM2LtewMf5R3a9wt3yq6sRiYWbvUS8Cv3jsmnafPhwa2dtUQgeVBW4b72cDh",
  "key28": "2Pe3ftycFFQcHp7F3A4GwCzGhkH8YMzniPEpE3HHMnQxQKxGJbhrDrKX74m12BuBUyAXRa96L7a4rBXStso6rNMr",
  "key29": "2TVG5LJCPQqk2Zsdu8DMjsSghn7kgkjEVGds1F4mKBLmqTjaaJ5g186D2vFRPzCZwg3tx8Qz1woRGgLx5D1demDz",
  "key30": "GuPqZrY9n9YFpwhCTwNqJzwpW94BDsQtGiNeu2ix4i9uQ1UnQVtX1wocVpEyzUNwtKkF8652Ezs96FXntDXCarm",
  "key31": "5DjimEgwqvYvpB8wRoSa93PQ52voyFSMdFPKipSBVEKvdkkxnYmufoiAwNchrcFpbupLGrWnxCuPkQ5usKBjxLXb"
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
