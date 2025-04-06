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
    "2Nr79si7WXwBY6w6D8z1ZWZgyfMza4gTEDus9SABBTVuvWjHABTwjSt8HUPPuf2aemigsgicT53X9bJjVSHvgtNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJsmPL7gvksh2HKWpTKCzpuF9jwqcyPVcGUZCEagJVfub7hMDnJYoT25CKTXE6UMkKBeUnQKjuYQdvXzfQanzdo",
  "key1": "3mLVgsdLDUBtup1SxdmsugwFQt28xfHiCEfM923PEMNPUN4P4qecnUqrSEVWANnKqYopViHFYCNCRSFkn5EgPCL6",
  "key2": "3RZH3SWyK8cPH1m1q8S7BLRtn8gAPgrQ9fRvQobeHD7k1jKnehK8fCvg2HMjNFnusWwgbowfSoSWawKa9Je8pBMj",
  "key3": "s2SA7PcXSDPgc1vD7uHtEteV4LePAbtTcEQ4HMVdV6ZNXFZoVcnEcU8RVQMYXtkJqNeRCbhoxbf9noa3L94vbbV",
  "key4": "3H8733e7YvAX8yBPHKFNr4Dkayw5hZ4muP2rn7fkrFp5HFi1GACUSR7tS4gmP7ZVyevJzFoJJw2HizrMeUxAKg2T",
  "key5": "3vneFZDnmE44wM9RvNqzA3jtEcsDuu934co53pAnSz1LxU7TtvfzmGtX5aDaUcwLFycDE2ud5GV4reZmGdG3J1zV",
  "key6": "3gFdnMdQ9oumuYnKMdDeiAVjqCu9NGUE9yB8akzCHze3wraq6RuBYvLxGu3f1p5FZj6suhFzocJL6GbRzkjEaesM",
  "key7": "3nmj6djCFB8ayWVw3KG8nwduUNVqPYvoAcD7oEBjC75ZCsrN1i11SqvTPLZqJ3hKqnsKV4qRp4pnHSYuHbnyNXJD",
  "key8": "4utNHHAZHNrB3kwxo4ogeFBh44YgebCMpUb7rMKwpjysHRk3QVdLU6nZvZ4QqtRx6FujoVaUyPosSzSY1A1GghCq",
  "key9": "2wggJRV46KLY626bZ1fDDN6hSmuCohxEYAMa8UA7jj2ZBkpzXdRsyu7mANg1Z9NVyXo2XvoV1UiMJ1iYpTDStmdL",
  "key10": "5SSRWYDTU3XFqTq9c5JnCwupYpBYwG96PrPpY44An8kbApFrtLoQ8ZTSS7kg6YaZEN46R2aivKjPZMGLiGsk8fCF",
  "key11": "4EisZbNdXNSrzPihLHhD2HJPaPGY1ZqABUyXYC9xbyPt9Amd284syqdMS32ncLEYSEUZmhaNmdb4VBwjQP6gQHUR",
  "key12": "yryQamzgaQYri7e5A8by8ZPgC7bc3U432a3cY3x7JMP3ayne9SvbqisAu3pnBfjKU161Q4p1SN77Qd5g97Z3eQ4",
  "key13": "3bkEf1BRYRGoDCzPEGmDkpk9eUHBh4GUGHFV9eFZQ3XTb7EnmiMFT5qqmLL9mhZjFkp3fyuZq9ffTjpU6Tv1NVYD",
  "key14": "2Naeikrs2TXh8JNQ2xAkfFXeEnKBWGxbZL7WyqLAdaDmHJMCkVzYHEvw2RCze3UnFi539SsJjn49rMTEK9RnPezV",
  "key15": "tNofU47TzfBdRHA9oYCghKBjsBfhutrwLMAPqYFL8cxP9HAadQhKf7WqTQdkgLB6Cc2DgN93CjaYys9fv8r7jtu",
  "key16": "4DRFgpBsKkxuiTy4CLD8PiL3n8Hr8iJmM6K3av6jYwEh3wUAif1TFTY66zAzWcuxDAWWXYYQwW9PfxtKR4vaJp2H",
  "key17": "Ad4VAdUGy6CgCcLvkFGYyGUyTiPvh6KZLDri9nvzcBHzGByoqDADfjoFCaCuYfALXLDhMKBGBGaEgcLzyxsGgGb",
  "key18": "25ha7YwqgnKnxaEivEcnz78xkpvXy4Bc5JGUaadc3FqWHHUp2JWDkDok7invStkY8GAeG5gfgiy4QqPx9PbBTcMi",
  "key19": "4hAfDVkT6yYW2zy8jgGYjLEBfCzh2MjBMXUfErkBZ2FUNH6RoRrDBxWhYo5AFuXv9WdwmmPe5fz4iaXjW6ykjqua",
  "key20": "23Ma9HSMLqo9snVbWSUuiAsayzJWfEcM48m4i4QXejEnBmGQphxv7pTVYiikKEAnbHZgNZvHiLpgqSwLKhkQ9uNw",
  "key21": "5JetSN7E2geJBro5uDBiy5zP6RuTdMTZfiPcdgCVfn55aEb6DN6EEmwEieMG5sxobnxWV2vafExbunHetnn33AuB",
  "key22": "5f3bsPp2fDLxtXYpPYxu3PUCQBufqYoAR8YsQvg8Dsur7Zs1xhpisEjKgKENEoa2TcEgoCUuDpkpFutEMsDWG119",
  "key23": "4nF5RfGebE6xUfV993MtvSGLtsfdYu52gWuYjPwa8yToybfaKdWVXHN6rynuyAB6y9GyQnLy7RRMvUsi368epZCY",
  "key24": "5cyLCbjawb68jzVRB9HrTzuwxsGE9ytDxksjcmZignrTKhpWT6PRinZrJoX95yFAgv3vQKaBZiHLhGwy5BJ2mrRw",
  "key25": "6fbGeeQrDGVei4dwm1UsK1rbtpfSRvzkAbQdjohPVcJKLe6AaqTzsQYup7xhhRdLULvJc4aPKn3MmB3UYUmji3o",
  "key26": "4H6jJMCWpEbS7nnzuoZT4ryLtpFFzZQNofN8SPEK9c4fAHNk2kkycU1sCStsAsbd7CEoBUWcN8fxmyN8d8o15EuX",
  "key27": "5nzu3PL5AGNAas1jCPVn8W2LWSsxDwokW49A3ruydhD9pJ1KLg7uk4Ct2P27MxdMmT7zhQdd8S2Qf7cFCcMCZK3g",
  "key28": "z7PLEEjCgSzqkoFUuaMKtzEFbPBRFRkYC6BHkmpBuq7MaZQBJRspsRb6JkZJjEWawdca57ooRnnofZEagh9uaUt",
  "key29": "4zChvoF41LDzCRViLr7nx1U5DMHCtJEpVTv1EQRsf4PcTfpXpykDRHcQpzx9hsb3dcxeg6vbffYWWaWcJvVcKS27",
  "key30": "2BQUucgdtF14y171Yuq9W5SdnEaP5PEjC8yJGBWEGBbobjHa8JcN8AdcdfvDUcvCyVChdduRsc34vopR8K7zkXjE",
  "key31": "4niBKM6ZYYckZGFmy5ueGmUxQ2eRs5uD9QnaKcKyKt2iU5ageAMhqWqPvVN73hfkUCZZ3jBWPjux1gDe41FkUFAC",
  "key32": "5WXp4JXCTpMVSGYwCjMgVddfZ8eF1oPDCZtr6BCabnkQiWQjyNSVCzzSEgqhLJ93tZYfuht6XPsHt6qmbi7Pu3Lz",
  "key33": "4sas2eXQKNSaSGLNHnTuAWWQzaKyhLRxHt3AmeRXrbC9Y8nZ6WjYxB8aWVyJr2sfUTfa3rzUiAd3EV72Qd48U9Fk",
  "key34": "4cqMmVfCZLEbbno39ewKJAJ3MrF6TTmW7zWvkTFT6pzKvMJPUWD2Z8Ygm8GGndfjvnbTfdL7snoourzR5wDdPfAA",
  "key35": "4WRSS57P9RM9D4S4iz16DjbHLC8bjJ3qhxfRcSFHNm7KxofXP6SXR1WaiQhDpXQ4C1hvY6mFs5BzmrGLfUqgJ52o",
  "key36": "5UAFmotpx1NADid8CRyQzuzFLPJ2CZDmj16tBffBJxdZGTF4yp29eA7d3UpchkRyp5NK9HFyrcocUwgpKsweKNTg",
  "key37": "4ogjb3s2dJ4i25WefsNBvV9Z76XMJHwYp59S7KByEq2xdN3JhZ1B1nzPqQvEHi1YmT6PUCWwnryYnUwacJqScn9e",
  "key38": "icAiQKHJw8aKbb73f4hMc5MDhM5pEQauDsh8Cyh97a5TCvzxz9rNmnKGZNBjpvwE5NUNbsG3btHYnu1vNzUSnmU",
  "key39": "5yY96vGNUxXFCLFzmbmDvkKsgj8q1zEbvpAfgB7QHo9RayzYJUAtpMEnez2s7ehjd594DYMzE4wi5n2sB5Sg1n1m",
  "key40": "smDrsCP6JoPiixw6zzRtEaABCMA39rKp3jRUUmA5C1hAZ9eriUtAu9fRuHHC6fAzSHdWN2ufvunTh65Zvh2tWWE",
  "key41": "5aZxybnvsWVTSUwxKkApfZQPw2ohoxMCU7JSXWM7Sz1kQXmYXYfbH9PpYU16JKrwbptCTtFgPfFXqtLenDn4y2Lz",
  "key42": "8sjtJULwce44cdEUrvq4HXmefSLpCgnQ97xfCZk3HV1xNN8FxMkpYBNdBMZUyZnWqLam8GD4cJankZ1q868m9ZA",
  "key43": "AKhupMF75nBQB3YoJwL4stPBR9ZhDV3DpcggCCTN9caUAm4rpzhw7Wi9vR6t3qtAyNc5yFori8Jc2jPjEUqu1xz",
  "key44": "58nb6K7c1vzYcBhDpp9Ead4NJjkknAfiqteiwPTg7RotU2x6iKkVuuPJqioq5K52TWXUg7eAWQALvuG9XmYviZXf",
  "key45": "4ZbaHebBTYs8RGxdoqR3G9aYdEQW1xGjqT7ZtQQa1zGQU1VdGkQhAN6d1sAHjrTbnqmidQVvJDCCZo8dKeFo3Kwk",
  "key46": "2sU8tpMzYdgEwR2cMgEo1zNred6XNaFV71KbpufcUHhzVYh3SBLGfACGMUjUKSf7GvVuRUdeByaWcXx7MFzRScs5",
  "key47": "2MkJFf1j9KHJBR6VLpKErrQGfUBj67pg6SDW7RdeFQmhvDfBAnFMsDj2rFnPUQBxSgJH2goChMnrjaaxqhbNKMBi",
  "key48": "jo6zZuSwJp8vMYPVVdiKzZM9McYvmtzyyNoFWCVmdDQdtZK8vi4BTARacg2dxDbVwFZNA4CuAuVpPzqdq9VEbCr",
  "key49": "zkVVubW8EVbxF7WXHhTEUeimojxVt9zNyocP8upq89aFZqBeU4kBYvXH5jbQwxt9eAVoaJ8wdn7muhEkVZaSseF"
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
