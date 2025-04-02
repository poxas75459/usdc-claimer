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
    "5mo3hocQMgvT66BxB7AFAzuBpzVJfibnDv8KEFFXMmUPrkHySV6HYGxpPDTxdXiyf4SWeGPjFKAYvBhsBK598TQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbRRXWv5v2f8dVSrW54w5Frf2LD7rFSgTnAizuqYN2rULRL6VBLwv2yvAmZddhP9cDLkCKUgmzBUNgTdFqi8mwg",
  "key1": "3zUvVbuUrC95GUVKT9g3MhHrKyNAAxUuNn71v7xBrjageK6SDMq5NSBXEpGDykDRKokWZDKddTKuUnFg16QH643A",
  "key2": "3eTQQ6oXVM9LSeDeCydXF1achZvNdP1vgFeqE4LDohUuyxCzAMu26agZJwctksMaRciVmSmeUPpE5Yfcw5ZDgtSw",
  "key3": "eDFHBBePZ9362DTo67ujFkhkb9fMxWCcS9cHwnERmLaoUQJSHZW28zsqCSoR2r1fVUqAC5q8aSsGQKBiUHBvmvQ",
  "key4": "5rHx4btsqZdunrVYNVddNLJxDUzr58PeT3MhuTrFaceQDQZbehqvUkVbcEUJ3vSNc3r5arV62wLnqPJosAJJAaim",
  "key5": "4yMd52nuN2CtWESQU5DNR6rB7Zhkb39ARBfdoKk47Lk8bjXsEUpVKB1arsVbazLnVLr8yV9tetuqzUbZEG3xXoye",
  "key6": "2G3sNm9LozL27LfoPi26nzHj6t7fth7VsT7yhf63h9TjCqbj54mWLJy9uSB4eAF5iuYxf8m2fsNMsjwkNWVkBiFK",
  "key7": "4PSayUC9J8ueiDo1TyTsfecRM5LLaQVW4s3QtbjATcNi5VZv8CDfj7x867ecJ6Pqz64HEdFdTxhiYZpeRTScLKWK",
  "key8": "4vBkDUz4Hhg8SHty5HLffSBsueqVyXsVimKCkeyhZ2bRwQhbKXVn8KqT8D2MSaoqddEehQKDm4721ZixNLD9qAPT",
  "key9": "3GqoS4PqCwHU1TW33nxkicyWib2H4yMi76Dc9CBQVnt2JQKYJmfKCn7mRJ5cDvraeL1wRbmHLKRbVtTTtiRVwjoZ",
  "key10": "5ExsZEXKBLKdqHNhyeXjkU5YXXLFWJ9VnTS5oLYmqVvfGqY2nU4uW26Z2UbAkhkbce8GSrf9h5wK1eYZ6TbjRmSo",
  "key11": "3WtcTCv3KKhMSxrdp77LJaKq3W8d9sRTmco6HwgQ26vrBS2HZ3eP4CjdJVcC9eFwrmicwQU9HKpcVB1KhutHUDjK",
  "key12": "4bQg5usuCoxmabAP79JjtaknT1prVSZ8NKTHBpHrnT3Aq734cK59nEMbbFfV5wgjKN2WqRCW85qDpZR2R5iYhAHM",
  "key13": "5Nw16baQ7NwNo43RJdhX7ei1hTVA9tX8C1KXHLX3wrqroBAAwHBFgpohvFGLfMDvFwcwPoMfUmKHQGv54vsWtvpk",
  "key14": "3uDvZsWUUcxxQYn4EbTbr1GFfypARvHNi2E6vZomEvnGGHnsDW6a3soNtFhKfXYJNCFjeVntRMi5UtcmAWiAv9e6",
  "key15": "67f9hSYR1TtHrBAc3YxpGjHpefumuJEM2mgw2eDy5gvb8JjgxiE8KxzFqnuo3ULgNP4WRYaGd9MunmxYypoBajAY",
  "key16": "3UBYZKNP1VQod2vpCVh3xQKqXbEfKs579b9zW2Rern5HwA3RSvrBjfqpf2BRwUo8kHncSMEsVFFzDTZJL6vimPCy",
  "key17": "AThMW865UgcE1WaXUpUizb3BG5GqncEmnVZQvuLL9sj2sUdBtive2WxD92drX2vPrESeEmyHDwmmodcHoubeVBS",
  "key18": "5eBwT817u16ReRAuxWPM5WVweB7ZujkT2bMzgZy9954SQgjSRaAnqbzAtpAjBw2SKyb6QMKvp6nnjfKF62wG5bPF",
  "key19": "5Y7LSxhjGaMpH3hyT1ixm5ns8aaNguaQQoDycCJqeCeLCxAFpED4iyFZ3kqbctBvBi5M5pVF7SCrroWyoTiME9Pu",
  "key20": "2y1Y48Ae4LX87hk6GkmfoyrBMc4ShxtddSqsiJYEQqUToQKGT9wA6mAXMMeDk7WrrSVH5uHRjeqdz2WT9qRRd2Qp",
  "key21": "4rWLyDsyXbT2o7PFJGMamkMqVkpMtN64gBTr6fzD6fUYvPe7dC24xeHWSFqhdB65hvSs3aEdZGwijRMrJrQR2A1U",
  "key22": "5EGzfoVkCkudUqdyvGZDj1oacKNDnFBokH4nVCM3zCs4UptiKYbTr7Jik6YFgpxMfeofCmfebbnYZ43CFy1e7gQg",
  "key23": "7AexPiS8quYAdug2HR9bbaMaMipUxbHWnbFNAkdRNfW73V8YTmfsicrRj4Jwe72aw22cYhkzYLBbBgBQMF8He8i",
  "key24": "2QfED1UXUNS6JyNG4xgVTjjQF7o6CgqRaPPo5BQdo22qMDpmmkXVPY5o4EM9MgAi7BzvTMfCrSuA4D9pQvxxepaS",
  "key25": "4mYoC9YeZqZCBg1q56ZYju6TiJQGT2GP547Em67XYpyQDFqiTZUSCdsVhMwXbYw7p1HgtTQtVLpyc6rPNoJEEWLY",
  "key26": "3K3gDJJVScEDFBxXe9L6EMcmwbn2fgUEwZ3iQ1bCdvEMi7TWSrcjp4SPGZNDagbZiBiXbVC4N4NfK8mSxvHFnvs",
  "key27": "L8b8S833wkyf5gULpQJxNw5GWfDFxgCzsXWghEBrK9mx22dx4S6ysVfDcv6qX4kttefwrCwn2RvxbLM8fBUwA3h",
  "key28": "3UVzxN1UJE36VGo9Zp3hGvW4m7AhcuZagV8irbY8gJm27S7pKbnz8hdhzr9JSM3doDYv7ibonYBFGhRiLVU2d2st",
  "key29": "3gDQ4twMkHwRAnSqLNPb2cmYaw3XqNatqXCpV1QztzLTWGnSDUpJRCHmNUU5SzpPXNg9VmdJooCStmVDWTnLqR3M",
  "key30": "5fv1ZVA1eG8d9HW4XSfazm9mAdDwgZjyBC7d8tepY5vyyHncLjecgYeAosPXQ6aCiYCNdSta67YRF2vXPHMvNUNe",
  "key31": "2TqdGUjwHnMDSwM17nimS4SH4YAFeNAB7hHC65PGVeeSzxUbsH825eNwV4Qjzzt6Dfv57PweMiaYyrP9K1EW33BB",
  "key32": "2hn4QTtdrAXRrZDvPcNz7sFcvRQB8vCueySeBfADhii7yuPEFqo6DjSPDuF7zfUytjRUiZ9AmMAXQNhK5vv5JdjW",
  "key33": "3yQxcFLBFRNmBPccSft3CMq5pQost63x7boqUPEsiMkW68VbRT1LPRQRytfXnaJMUhJqALCMV1CYA7CHPpkHeGEV",
  "key34": "3bQCM6gUsuLNdb9LDmWJNvtk59s5sk5T8wnw9CBxWveKbAEzpmnvDxDfbdtDuXyyPQ2XKTNwRFT3KjgvSfw19Jtc",
  "key35": "4n2vjGS8pp3tzp9LUQmfc35eNnxB1361empwK7BdrVmU8bSvntjQU27Zn6wQA2M2kXukdDM8kYKSFhszc7AmM69G",
  "key36": "5ttpNd5d4VD9ASjufRCe6kmmYvV1DuDXwrRvAeza71ptMvcBWmKy6cB6x3K7UbMM6PseCkk6aWGQ8YpnNtQ2AySy",
  "key37": "4VUcnX5qYJrkavZQ43ixNTd23rfbTE3Fr6axbKzzmaUH8ty8eKvPRjC4WXUnr56CewVsiHpJDSCw8F322Vau1tPZ",
  "key38": "41H6nX9eXcdnBxN5TG1ssGPGBNy7u9aKLkyqonfmrQ7xXkE8uNpiPdRFdUZcjj3orDVjPKWzYP1beoFLDVDTubUT",
  "key39": "8pvD6tRZJBr3y3wKCCzGRUSyRW5dRH5JaHrWgws7SxpwmVkALJU9uKE3L5gscmKEjyYH965syizs3Ghp8j1Fmqy",
  "key40": "61c7KT8vbPieRxg5qd818qJWqap9XoJHFtpr2q4izbP3CZGEJzbHp3yXRnRVkCvZpoNfRh19KSUfK2KaeYwNjDp3",
  "key41": "19eD2ZagyQrxKyW1HMg5UqEKDq8Mrb5byambfTWCcFGa6D3Uuh4NM6huwBAeeVRxWvNPRFgKiwbqvR7hSsoF69k",
  "key42": "5N1F7Gc3ywPfUbevec9gvyCNjGRsmewbTPeHh6vJNU2mJXCEAro3u15vozBpiz2VXFvw1YN4tu2fYht6XeAWNzbF",
  "key43": "2fMFhEYf81kMJrCMNdb62urgUyPQDiXZunTesfKWkVACeZePRYmkWL68rx4DBvV7MncPky4R3unL6AcdP8uBjqBN",
  "key44": "3d7CUBGzCcxu7gB4EA4LX7g65TgKB9bQtsD3nmZyAigyJFMycpR7FhPzrxGsYpggactZddL8vPpvfcPqqrpHnfNh"
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
