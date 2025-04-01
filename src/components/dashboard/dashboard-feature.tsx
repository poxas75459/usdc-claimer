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
    "4VC6eP6f1zJk6ahR9ZhMuFwgDafNXwu6SeVcHowV2C17Qz8aDbTmYdUHFgFNNVNMv7Q4jCX7RYSDCj114ZqExUN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaxEBTvY3zwuiNofop9xx69S7dRxjtBGxiHyVN7KsmUZ1qpFfi4Rd3tr4nAcSAaReBqLmhmL1UvSzUQDqeefqPT",
  "key1": "2GFDVWQudfMW6vqvMja9cof31qUsic7AV2pv691pmP3bjgWPaPAso9aYfiWippaXDEhw1hvr57ZQuN8ti3bpGazM",
  "key2": "22bBZm5XFB7zWpvctctw6GKjNFq7g8kqzdZGC7d1SjEbAg5hLprF7dAzq7ma96bojfFDdbXxsRStiGyMMdqW2wyw",
  "key3": "3MCX8qt9ShjDdT5UkfxXesjYJvUYdyTfhbcafHrNjRZc61io3V81c5eJ4aTTA2yi5swfAHoZiu4aGeQwCYCkAXwG",
  "key4": "2vbivJW8DXKY13EZ4ZTAsKHvtZz2ZtgwRyjcEfXSNmWDBdMjVz1dPKkKggs7dMoFaw6CDeWoYk8bcFBfkgdgAWzp",
  "key5": "2EgN9ev2GrLzgVkX52RtWwvJtydwtkvNnofZtY9yqHM5mJt8mPp5WcVJxKG4DcX4CrewEMK1BB1NgfGnwsckw3Hy",
  "key6": "hBKQB9tsVhAWQCd8uppnb2jzrV2WEKykCHRCYzJepywmCCmpQvWDTA1nhVcuwFwHwj538TPYRkqAVV6UNH6xUhk",
  "key7": "5EnCCEjGKcoi6LDvwSL2UhB3fxey1NLF2xV7TKetfwst7AcBerHzZSEEg65KKTqUCtmwcs1G3TiX61VRxmQ8KKni",
  "key8": "4KNcjWd5ZNiGsaXpxRNphph6EH9bWukRCAVfZBzcfHJyma1fiGnHif5NNaGqxb5X3ThWdEJuC2Wt1bMoko2DiHGQ",
  "key9": "gZNiKkc5MGkJ1ERkaxQjcRnywcJPveaoRVm8vwSvs1ozBCtohp2bTxN2RU5RRm4XUBmJJJ43s3y86AJe88Uj9ge",
  "key10": "4qSVoXcLx8331obx9jd9oH4CQAqiD2JvvSoU5CGEVbuKetPJpo9D9eqkx2smKC8uKbQUq3JkLvU8damTq1ZJ5jNt",
  "key11": "3Xn8gKtkDVgvyGZsuA21Pc9zhd4fZFn5K7e7FBU6PcEXsrFs9fjHAu7qAWL1VmjKBzvehm1rEQR6CR76jApUrCuH",
  "key12": "5gxFvDViDcPpa8eNTy52vu2dPe226rKbgGgXo7NmwcJA4Xhe6dBbTQa2Qic2PnMpwQs1KeCRozHHRbfVLn3hmdPg",
  "key13": "4A3BdcjZMmkCEkeXVtTEAoA4skLQQ9jgL32p4oAVwz6Whsi8vKLFz1yFW4WkvYD6ruSHQqxXA4937K9szcQMkxbr",
  "key14": "3kE6S73Ddb2ThMaKbiVRJGsF9bMStqaYXxMjeqYXQPzgZMA1NqVfypbjvhdtefSphhAAFPU1rnsdxw4R72Tf3Eh2",
  "key15": "4Pzqp1Vs9fMs3rWzwitwKnrXAiAktHa62b8iAUPdoRixCCgkKTE9L15FqGCgfA3hb3JF4eFsv9o1akGpsyCJyQ2r",
  "key16": "N4eKUrs5RzbdACorGaE7Yk3i9GT84tVtqLWTNiH74wUctG9MB6pc3TmTzdBC24DxVKEkGqAysUhAy2ALzQRimhC",
  "key17": "32daDSKqKDtVYywgwdHuT4seddKQ6Th5t3hdXx4kMZLufdJbvDxoMjh6W1a5HafEVnnvvmZMuBpuaPnngsWC2cNt",
  "key18": "269KrMuEKRSzCeQrKS3mtiq6ru3bwkipFuMd8r5CBahSAV2R59EGVr3KLA5pKHtKZwRnbQ6LAuKR6Tc9s53ss5AC",
  "key19": "3TpgdszY2yF3YwQjkhqxB3eXZZe3z2GNcsApyyVTpqSoFkni3ZoU53cXGtyQqZLagYVANvXDKHHYnMZ2DfB84RJ9",
  "key20": "43z38QvyRPWXis1GGB6iW8FuS9GMeGTzNLsfFyi7LxQNC6G9PFuY95xiKaWpy2ULhDi3S37Q4jcANUA35buDnSvZ",
  "key21": "3viMEXxq7PXwyHvLYnV4Ue7QCB5Vwyhn88ENWV8VyNzEHSiJRhu9fEbVAQ1n1CusdAsmaqYKM7jatZppy72QFjsn",
  "key22": "oYeFbHt42kCwQ9YkpWmcUJLt5fnpAqgcjWSQK7sHNhrDG2rK3jJfdPrBvUpbGy2RRPq6u5hHDnSfEfMMpZEoFwz",
  "key23": "4T4tr9RF4wtiZDVEpAfyH3xwkQ4kyKw2vd8Em9ncFqmzDYY5RUaP2K32PULrWVZfuwMKCSicN4MvcydpGoHJCM9f",
  "key24": "26CHEHLjvmzH1nKUfRbRpHM8wiqyUv615LTwucBdkbmBZ8YRuUQZD2T3SERobLarSPMVV5kKHmmS3E6bv3MfXtPB",
  "key25": "RoEr6w1B6RWENaJPHQjqRbG68DUMe8C1XqGbgo2x9EdPbrF89mD7wj9QyoTDyprwP4dnH9DsQ2CYUqxSnZ5DkZp",
  "key26": "uGJE19AKxbvefvLwXE2wyCgZCnWjcruzNgRFJzeC7o5T9SDrVeFwjM137XFuoGewxVrbzq6E6RXxJ8omZfm6w2F",
  "key27": "GeUvq8bvvAjKAqxBsmPgh5GJGYdHqqMsaT7X2UnGDCnNoh6kmvvCStbw9R1zC1qsrZqrhAutUpc13Fmo1zApXmA",
  "key28": "4KVgBoBRbtjdWm6PBfBn1oKPCRSmU4HnEtGHbQWk2oLVPEE57XoxMDdqWcninosghHsWcmNghEh7hXLpz337Eyb1",
  "key29": "JJ2gLgpTtkRfteidqhChCH4FRDeUvhtGm9iq9NLALyQuEHAVUQBxEjyzRnDdJKvXFZZ65DLbyEX235d84JwpedE",
  "key30": "66a1HaRAw4PzgsThzydDYS6BNGwpPhXj1yRgHoLq6Y1Z9aHvRynWHehh7C4LSq7wzXhDrrBwmoSwREfeYn67eX7L",
  "key31": "5bNYq6Tcwcc5uW2fxY5vxAJkrJmqqdLTZaurcXxVHLUnjqCBgabbGqvBm3G9PoLR7aZ9We8LpWEA1v9qDGKtvKkS",
  "key32": "My6YTwy2CU9vPyEjJqGCuqdCeyyE84D9LNgELSSD41LLUyS87sbg1DspDuF7P6vUgNaXsgfmusjFqhtsE7ZPZwc",
  "key33": "88KvrCrZtaUre2bT7eD1PCHHpCFhbaxxvCfsm67QovaYY1FhrqEuRnS9XJtRg1GxNYxMJT4fyt551ozjUeHzG9S",
  "key34": "3wxPsecv6FPZ2ez2zj1maCP23Lnruow11JHs15LazcGRjsAwmz7or6cYLN5Q8vtxJQP4AbSA6LuyivsBRFTNKkev",
  "key35": "3p63L1aZvqkaoo5hvQghqqLfEmYKXTXgc3obLVu6yGubYqSZ449kyyuSVxt8f2M2F7L2PvJj4iYWuCtbCRqKUq4Z",
  "key36": "5MsLQ2HHKiEBGzXPLzMPLo2WuJTBkn7i1iubiuW1Hnds8Vcpoy9bRNTou7nd4HggUFVguVpwsBYx8AMWWTdzDk9U",
  "key37": "5mNS2RXdD1NLPK3z6mBmHawMf88XQXdJanbwEC6aLPsA6DQzWp68vdBHsKRpCgPh63G71jx5bLJi4XpFpckpsAoR",
  "key38": "4SWcAc8TztpqeAvALfhKjUCPeZu45mfNRtdcYL1Vgi3HN9VNyM3ZRvDhrefDz5CbrBHaN9paxMRyaJJVnodrRPKG"
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
