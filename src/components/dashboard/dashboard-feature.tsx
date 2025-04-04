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
    "27Qm7z5onpP6jaJYpJSFYJf5sVZGrmpnyVHtyqXhKBgqw9EfffX31siyRaNDCUMtuXNkfecdMb5bstEJ7gVMEAVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kPCoLxz2GwC8jiGZ6T3ZBLgEifRdMRvndrs5hqsyk75mXpyantFRe5AAHF7Tydk3NJXyyLgZ18gVoph3Zt5bdP",
  "key1": "2AYcXTi1HMx3FuDRVb3LGnxcKQugQG8J9pV91NjtZDiMtpstDcZW8FVhMzj6MjbyuL8YqHrre9Mjxcf2GbkeuDXe",
  "key2": "3VT56hLyiEkZDBteoQ3SGCFKu1BtWZL2uSKyYoxEtpBxiArmMPUuhy453yH7vnwcntJzr3ZxqYBrUC9T1Dafdr3q",
  "key3": "3o8zuTqwbpgJ7TWT23JSwdDXKMLu8x5XgSZhysQnxRYUk1rWStXNvQRTfGZyLtzqrkjTvqjPR6MZjCWy8j4fSUKt",
  "key4": "cGP2Te2jUs2bSE8NAm2ihoHBzdGogukTL3Kx1TqNGSWt2fZaXQjywAJj81hZXSdhr2ubP3hhJyoE6Tf7nug9eX6",
  "key5": "3qA2xDmM1bmgrcP5P1vWaoz1RrmexyGTTEre5yiHX1GcfapF2nG1YCMrLKa3BrCU5G4mgZF4ssV1Hn6WYjqnPgkE",
  "key6": "3t4xHqcGw5mVq7odjQpQJQppfXu7v9zBYBPxGn8Y79YJhChpyHkrNNQBZAK4uiLpvw1rm4Y3imBAsQyRYXbAUBL8",
  "key7": "4uw6vQZLGQA5DkYRXRm7FSf2bNsV3YJVorXxdSrCnKMAKabZLLM5zjEziwenkHYzCHVSJR1JTFnfeJqiattAGxDA",
  "key8": "5sG4yZMJjs881YM9Xhp9qme2yBA88tMBPviMeqoh6DuUJM15AteKpkjpr3pwCan9LzccowjTbv1hFzzByTA4nBA6",
  "key9": "3n2pJbihAzRBVi1R9ocfBGx54DgRqwmQ6S827ykCHyWWg49GVWBob1dLwceJZDbKsq9Ru9xngUTanU779LtYFh7C",
  "key10": "nfcxSC4hBTV7LASTDT4em13dX4zjhYtgbgRnEyErjhsZVP94ubvptc7vNs2DEvBwn8EmR3Avb8ytagJuQWC7r1B",
  "key11": "5rCQgBvERPNHmbQVGqYjR58dU3gg1vW5DTRE2iHxrVu1sYEKdCu9Fpw9836mmNfSUa5FFY2GxBwE7ZW9ydHr3dtt",
  "key12": "2UUJ7fjdbxDWgJWn4Ax9uu3W5Ubb5wN3sdVrUQvAQnBbqPu6zRxRTidS2n531mbYNVPBTuhKdAV6WVWv9TrcYpVi",
  "key13": "2hpbaEqDWESF949NM7myxdvJiSrtRDMYm5APwy1tysidCioctCH2oDP1LMCnafS8qPWtu58jAecTg42DtENBBTHf",
  "key14": "oGUPqDrhkTBNWRY7yLEMRt1cZDWiWKXQATagFFCtQkimB3ZsBk19YsXGo8JmDYRHd9pGRcKr1uUy1YJ3VKKdCUr",
  "key15": "3Bvi2qhRnDaMPF84AmjHx3reVctk6ncUJbqsq88ZzW1HEQkokPyB8fsniMfAtk59v71KHLrFuezebfePpoXM2Sfj",
  "key16": "F6eDydAjVN3miom9vgycvVQSHMsvGPdeCxd89sPnJSSsB9JPTTDKBEmyz1rT8dx5MyM6NxWUKTWxpbxamJvaLmR",
  "key17": "5eqqk5jctYSMwt3NaSAZmJ97xuXfMH9GiucaW71iug8VtHdaH7pT1CZCDrMBF13poP72ifCPaZ31MXfPSGPBBq52",
  "key18": "3tT8uw9e9iyYQq8PauQoXzfL9Q9ioN8Wx1zhQBhxsqLPaMp8dapzTq2x9ueQsuysZ93fuqF8Tb4fdneR8MRToPAM",
  "key19": "5xWJpY9TSiac3HJWvLZAgX854KWxmzYbApN8jW4enzp389CQHq3jkukDGdPLtnMt3HcJu9GaxzGomqdNUzEL76sD",
  "key20": "2ptvLFehALcBmwLTPhC6c1oeJudstQ5MEPvHacJ9kr9A5dpUpTtUVRYgyaRkrz6P2NiEXMapWCnRpAYsrm4T7o4F",
  "key21": "3px5S3DuYMyb77kbNfxAnyqFjjnfFNM5zyri2LRn1tWyNW1jMnrLEyQGaAoTt9kC1a725TzG43Bn4B3CZNtCUBur",
  "key22": "6RfDni2RNxKsBUdMjA55PQi88BBWb5GjXd8SmqfyFkx2wHAMiXdqGu7TxxcJkUQtnvWqWieywzu6CXnMPTqHwBf",
  "key23": "5PphALWSRFAVAYb96NVfaHZRLKyVMcDjMqApTUGmz4tqJav3QQic2yoL4SWEdJq8hfJeVHF1J9w8RvqaMGN8ki9R",
  "key24": "2eV2VEzXTWPEgUcCgnoxK5cGpLVNW79stuGsJxQSmdm8BmWQxiz8mjNQ6LiGTLi5AcCCUJqHMchLrdjWU1mpFbzT",
  "key25": "38c2fkYDvUvnVxvtScdpkkeV7z2FgHr7ESeSbzHL7zq3WmvwqWtL2kQ78abGtJTAqQtGLbwYnndkhzJskvhkLBSu",
  "key26": "2xfSGhtdHHwk2qZ2uhShCnRXEuPHoM1zcQEsrm8B1YPLTQbdYVgXLjTq779JupeRNe6cbNujtsviPa4TM262iBYQ",
  "key27": "44We89BKKEfzpi97awFaEpUVvB3tGx1JKnmjUN9J1aFBr9NgcATFftn3LkyZ9uv28BTbY1kMM8PkP74FFMb6Cyc5",
  "key28": "5a9xWK1dQBZSRpvqPtPafCjqmWfsk1eihp82aCSq5rPVsMGJAQbSkEmVi8CewyVHwJ1iEYCbJFoPuZeRYST8E5dk",
  "key29": "5aLu1y3pE6toNE5reKD2XVace2F7aJNUEGQ5Sii5uvmvv2yKcFLx2jYEqLJfq3oRyUWetxY9oKyYXejVQiT5WUrP",
  "key30": "QJ4Vj3kr2T55vhV5VhturcuhRScHSf4Qn85a9uTVB96pGaMKCoj28ap3H6cdcrJ3xox4DANQ87mfNCefwnoVzhK",
  "key31": "2UGPa7gx8ZXmnnPiffYPUyEvLehMrbY4uvMkvr8zndg6o3jw9L3oiQbEDyuQFtcDynKLT64KaVKFrmY2f2Ci4vff",
  "key32": "4YRcRfwyJvX6dXYAds5BYnMztS6r6NjfLEiopv5hyvX24qp8QM9SDK2e7LG9rrMGmKtw4NEpcNjrbDrToQyt4R6n",
  "key33": "5PYzER5s36UZi4vuGMRjet1Vxvnhpp1B8DPLXLrdi2KDzHm3vNMsbNnrvPPpmrB5rGHhnXyCW4QvLCSCunFQHW3X",
  "key34": "5ocXsgrFuSvFGWsUPui9ZG1N3862bP74ku4oqwHaC9JBnVafJVGDToXxHTSgJS64iuhsoEk6oxrGr2pE8rW3mnBH",
  "key35": "4vz4hkkfa5HE2StBSYY5UUiidePmaBYb3LoiLQns2G5osyWUAiE77Vn9yhYEMHsZpEWX1cdYykCKe96sXDpcgFK",
  "key36": "3ufiVySyanEvLScfw2HuzGe4xw9n8Ad8ZTXbZZAcPgPHuLbtzVYHw1etqRDXzochRuxA1ZWRQi3yxogodxVc2nfM",
  "key37": "4CCJgtxKSbFc3CzAemMaJGb6g893bft6Mre3fbzFFeHqkhXq4cRZatxLjYART979Bugwsc8uTaRPkTJ5ikd61uSb",
  "key38": "5tMkNxYXrAKKb3r1j7XGRv4vZStZXCbcvY2m5ANowjRXDAFU2Emous9emGD5sxBSXSyiburXXRDKG2nYdKWemsPT"
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
