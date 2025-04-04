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
    "5bFu1xyxV8CUjeBLkvaGRwDrJPra3kTAUhU1CGqTDgVWVRsxRjZ1R7fohxNTGNsY6KoqtYXLxBcLnGt9TSmfnLob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpPs4doz8ECKWT6jVRi9pq78Pkahgf8APDXhuzdkzmZatUoGwZqFjSjT2vQhyU3SZubW3239idhLUijfUFWQU6r",
  "key1": "42b8Ca2ESrmuxHdu6y52ums1oU3AJu8YNRoQXMZvwN9k9r6QNf2TsDBBpcEpus2WEgmZ9djG7eMhfprUF2TiDDP",
  "key2": "3yccDbPumGxtBCUqyxZkX9bbSHTwoLuRiaWFzJSoWxG3t6EXBzvUT2yVSybfoDWoU6vUTB9FbcoguyJypPYunB8X",
  "key3": "3UMDjBtAFJVjVsrCSLrQRpHXwT1osSDtVbKBzNkD1DqNgtANG2z18TBAx7KCK5FyVYuapcYnyaFLgZk9mqzLRi4Z",
  "key4": "3kVZxVvXawsHHbZYeJ3gAX5ieo1c6Rq1WuerYQbQBRsAFKx2NdYFeSZbRgjw9AEe8EGmcC9zzpwZmYUCGxv2BbEM",
  "key5": "4yqawiEm6ekAW5KY69jE5nme7d7rsPE8w5NE56rY7oauq18Q1uynSjhcfWj24hYuHkTwjvwTCx5dmS6Qvw5PuHs8",
  "key6": "2mviNNW2Avr6mNxX3cW8brvS7iSU37kEL83WSk8a3u4k57Gibpr7zAEK8LxTtbrWJWVx2p5t5Wx7dMhxNMQJpmDT",
  "key7": "4sK7g3UP2iK5vWxmtZFnNTg9eVB3WXBf36znLZjkpnAr6kV1f1cECZs1fm9YixYQePcM24ubMY8AmZEkjVfH97fa",
  "key8": "CRkR64kyS8Uy2uw1RGuPX7g1zSRAHFHTacKPo9QTwu7NQmh7rgaNPyXpxMCa2TPGHpicP6PZd5QumBxsw11CMBG",
  "key9": "5f9NcDJJL7aG6kVGxN7nUAC36MxessgcxTtpnKkWPfRsBpYLfthixk3NbU3dDmAtP9NoVPih3k9ZaoLXPL2DuBME",
  "key10": "2m7TrUdGPtcEsUCFWobgfzLFXmD3bu8cL8CVmEsYHCnGnZHrz6jEcVeig1BQfkY597eBPsX7YaqrjYnehuBvceSG",
  "key11": "2ivuUz3JhTfev629K9iXpqoySJ1gvibwePYvx2n9su7fV86yPSqjF4EqYE1o7UW2B2eiv3QndU73UZEBzjm6Ltox",
  "key12": "2SyZ78u3FCgarUUskMmxm8fin6A486v1wiYW255dtupL49EnJNrQSBVvANZbYFU6Kqg2KeKniJ163KWnxcEXWG9A",
  "key13": "4DknrFNh3CzixuS5ykqj2tURQTPJ1xH7PEM9aQcRzFUHjXyVH8jX4azG4NLyKAMtRbZbcouCVvdYPS961zCCEpHx",
  "key14": "54pHTj1sbrqVn6G3RpsaxF7BtFL4kjXbzP7TXZ3iUpYTv3Rtyax5XVtYLo5c4ncmxHATHPZYTVM4S24BD4PiU3Cw",
  "key15": "2dnUZ5i6ofZgcMhu8sm4YeRi8R49vSNVunT5wRpZLhJVKmg6HwmP525M1gRMx3tcbnbrHkdcNDejXuwhG3oH8UgE",
  "key16": "3C38WQaCjXKjhBotHkV6n1tbXs51uBifretMu72Skta1vYLEWMqTjG8SpsrACSQ4948WVnLDVPGdmBCjrc3a3PP2",
  "key17": "pRShwNeibun5Uh8sBi3mrUrG7svRDW6aqux5sajdnQrPJgCHzCuEhsLTUhrx6PeVVHc2Ve6WQ1Tyc7hxW8DKpCV",
  "key18": "4JZ7mVvvBsEVqLonrPNP29EEBqGVKaqgJKqoRyeNh81QZ8YrZYg1RkSGYpqfaF5UoPm28mvqmor6CACrk4hQTFd8",
  "key19": "5hpP6FVyhtE3RgDdocmfwMrQ4xbWeBmQQ4MKn1YDv1azcKEBHuvHuGrYC4UCqgUbMuGpkK7qPmq66vJFAjdKBfJ2",
  "key20": "3dDvqwsxbKNno9nbdDTUAr1ECUmp3hvBNGhfDD83xbhN2xZGjheFxnhGocRikmH6CPZHt3cWcfpDL799KSKPG8XW",
  "key21": "2kvx6LCJEYWjvbkBKz9ZxRkj2Xv2SNjWQ6k7XuJeSwHxvvMaoc2dTwoCCYc9XdiwnzoWpfZhXmnR6ie4KZLacjNx",
  "key22": "5z5nH8RAFLphfnoQv3eQSoruGefizubya3vax1WCdvNZD5YCzuQR8d5hnBcLHN5MxW3gUgZPWLJ3ztSuHhiAYTbi",
  "key23": "3jbafMLgYJSqwmmdyXowj84zbPHZxaaFa1tq8e3W28LEPE1CKQFSYyyHuHBHpqG8Reaa2J1mGsyT6azWYfEfGr7V",
  "key24": "3FvZq65FG3z8RegZJpqwsYZUjh3rVAJGP6N8MHdkJAZijLJwvRwqRjGqciW8HwyYK3MmjbZVkkKc42oKiTEMbdsx",
  "key25": "48eNdLzc6SWoFKK9VcnkRVRVxzfv1bBe2MdtWX9my8oE5woppyCTNmR6qmLmTXeNSAkLH9KdupkQBaVRjqygkHw2",
  "key26": "xpk8xePW1e3ziLvyfx3mqpTdADkFAW4ZTi6qYgxZerRgnpSpXStWJ9djVg5FsbzcrbaVUCCJQbJ8MF1K7qtgqQg",
  "key27": "4sgtdMZiz1vHe3jmYXWCmyKfKpK9N79PXqwq9QV9wX6dums4RJ2MiWktaVRgsohqPfHbdB1oVNso3WmxSnnavYp8",
  "key28": "3a3SFsz6CQkqdGvwiBC3WhffnyKgDoBPiFmNr6mXKARVNLTR3fgJ571ixaaEErwjk5x1r4BbcAMdEZcGyjYSsGhD",
  "key29": "4aLrCjNPPdUSB8D5yZTAGvJ6RCh2FKGekw2LJuFfVTdCVZirNK4Z7mwBGHN7a9STN4c5Cyk3rm5kzZJjoCpvfAcs",
  "key30": "5caoDy3Z1LokPBGeYZ3tegUoqgDPHsyxqCQA9ne3CEs2bA6XcVfy9i8gSSZWnpAFLm3i8o3Wf7Q8iSVmf9SxVrjH",
  "key31": "3PVXuLeFQ8LLxunq1eTMdoJaveg3fkX6Azu61qpkC6HUzbcb5Q4Rkf4nb6oeBQiJdkecrM2BBTopnsnvwHSt3iPs",
  "key32": "3YqkTbWwz9VoWQuFnq1QU1p2ff7eEWgAfYZcrptmneAYL2MpedVZGULMt5FeexCnHYaY5B48B3Qw2LUWFV5LZoot",
  "key33": "Vptt3gS26De9QLqGCaoJZA9dxwCnnDNHSdcrzbaLnzJjPAgS347Qyuuscu448FDakwXiAdkoPzAKeqX3ovvxGP2",
  "key34": "2c5BbXxXWMkC85rncp2qNGVWPR5uwg6emzTk61k7GpzdvtgVwgU6tG81YhLHjDMJH6x4JqjbvUyegne8UuBe46d8",
  "key35": "6TM9pmYgddBjzhY3tcA5FooBmgXUDKJMx1A8wZ6bqtLXrazvARFzcGEGP1UGLBeKUKexHgGbrA7QDjKWaMu5kuq",
  "key36": "2ZwoXtDA9ituMxDMVfrZ2kwG1bxn6fapaF1p8iRgHaAGxmDr9g3rWZKsVStaFzRoeBHyhojY4R4HPwiQhLkSM1Yc",
  "key37": "4BioHiY2EGLgNrAFCh26PRaJH7CzpaqodgbmF9PG3RvZWWhghFnyGt4Xbuc9XJTi8R9KD2jiz8rnnUq86jGrMKHc",
  "key38": "66QhatZwgFCJB2qVxGTuNjRnBU3RWQHh5kLsEVy1GGkbjSy6o2CeWkd4AJMtdz2NQsoUNqnfobvYcKbNaGMK1ySS",
  "key39": "2xD6h9y7BWqAqXHe47aMGaZkMzrzu2fjFACSyTd7EdbCVyUWvu4Kp24GwoBpSAYP59VY8BkZ6FQQ2dF5TBonhAUa",
  "key40": "2Zs6eFvFrPRYqtistmBec4P1RVTNaUK8F4eKE5ebFNV1LVmweCF2kC7kaC4SpbCUMJdFRYQfyPEay38nhR1yEZqS",
  "key41": "628DdSh3nWpS9jahm6i9mmYxP4Qqiu5sTq8bdGqwM3XenauKSgbU5ATzHPaEFKyWwdyab1tVYyodcfgZxsVg7hwT",
  "key42": "3uTL9kDst72UZK4LfHbmeXzWsoAL2c8AwohfcCgCJLQDeZrbvZm8d6FiXqq7X7ogNjVNJGSYD5vnagHNoRxUjfjo"
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
