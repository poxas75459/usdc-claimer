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
    "3mJDhKSmgVW8TXe1X65mtaDF98gco5GpRtETw9FkpXTyKut4VEVYo9PYDGY4EetKbbewnrsknPDa8VPekcijJ3Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUKfBdBYAoUVJT9VjQW2pAZLQajkV567ZFhxNBbNvAxTT1jyYDfn6Lgcqx4v5Mfz3ePLkpmwJ4m3EePL6oWhy2H",
  "key1": "5sve4Q4ZJy9XpfuvNmAqb1f5bRgJ6nAH1Y19ThmfNa5s2aJ6DvVmEsPwDTpMP5iJMNgTotzXuCT4PsuYjy9K7Wd7",
  "key2": "4obKW9juC88t5NsCQwmP4fys46nANqQHzxoyNem4vjL1ka63qVhL7uJ36xedBPbZHFd9C6pkuE9rePKQMZUCTFj6",
  "key3": "2yP28fFryLxqob97HAgQ8f6iHbkZJ92YqXrqjEMQwbKitXVXCWoVcmkMkRKLfjA9CVfnneSkBYgQDiSv1jvG5qY4",
  "key4": "4keUz1LHirRSjRFNHmiv2oDtKSfhH1DuULoSsnUrBfeD8ayZ3uvvCunCj1z3aHuwG4r3kHEKkShjd5XBjBvwcFeS",
  "key5": "4HyEeJhKZoU5mNiwQrFTY22P6yegK1Dgf1jyAL26o7m2F8DmJMFrPDMw4CsP4LxAv7hgzi6c6JWiLkmMLUT9AFaN",
  "key6": "4UtnDnspbzA18eHK1focWtNEqoVW6hyxZLGteW4EjGJ4kMWhxgbqTz8w6eeCkxGTrg5bc1KiJYMZ4S55PzeCg157",
  "key7": "494tnWgcnTCkVukPLNpgp926D2KdasqhbaZ4DDRgynYcC9mQdHGj7Cm6nAFyeY6GFKTo4SR8DbTcF1TvSvSPkQ4u",
  "key8": "4ffqtXqNYpMcQgGEhd9WuvSxprTQ5VmaVDTH9VKQVhx2GBybLgmkiYGaK4R6hDGVsv88tBAJ742YZ1y4RqMiFpra",
  "key9": "5t8QWRCwkZpN1yr7Qo2uGNdfbHBdioXMP8fJdR35UF7dWTekXX2fmad9EMeVNpZ1VwTThiRtnBJNBaQYraT38zBr",
  "key10": "5YjTBaAgZnZmbaSJwnHwrGuN3FAcVUg4AyHLhChnMQNFCwpjrq65yoMLdHwMwtcyws7zZSH27Ap1AHCacrE9NNJD",
  "key11": "5mqswsp4aeb4Lre94j6z216ZAYzn828dzbYBZUP1XKjEJpVUyTwPbtVe2ycG8y8wGg2Ejo7wquMaJ8EBgc2gUHJ7",
  "key12": "3Sdz5tjQkhCVoV9D6TnHHnX62AVRWFeA1QH8aykLCfqMKjWqakNrRtyFouoeTjfc9idAMs6XrUQuXvgCMovu6pdX",
  "key13": "rY12kQXx6TNEjDv7AHdoREmzFmf9m2awLwpiJ6WmZGPb1P4fPtNzE1zrs3SK6xpDX21yWB8b8HK1YWn7wnjojbJ",
  "key14": "4sHbu78M5CiLgB82ScTCBPkBiWwj69Mqo9nmcXTjHoHngka6FGiL4hpgeJFcWKAQhjb1LfMKu9qQGB6fohRxyYP6",
  "key15": "4Gpd7pcN7TYDPhCUH84shzyd2byuR63exVAgEyNEo9FqU4X8MJj93Eu49iZ76KNLpaTJVwT5g33y7f6k6mLhvtev",
  "key16": "2VeiGbNKeKska44dnrTaUpGyFJbuddbusrPjjQyEq2XLjFHAVLMoVLDze3hMK4ibRwh6Vf7CAQRHHUhZV9anELnT",
  "key17": "57StT39CQU2SXXzaP6ncJGa3naRD5ZWWQzL2PReH3hQYD7wXbzLGjSE7KwP8jgE1SB1c958RiTDWqZnsNxVHqtXF",
  "key18": "2L6yByY8s8vLeuKtrpVoXczbQhuJkHCQqZhAEeZ5z2ehSNGxsgbkKJHaySd8cghK7ibJ33ZfgFpB5Q1R61Edvw6Z",
  "key19": "2wmqsfqo6gQ7amxVh2sQHPuLbVavYFtt3UXWeH28o9zmxwghiEmuSpeMbQHYr5GYfUJGfqKxQWpvHk145rdM4sqj",
  "key20": "5p17t8741iAKFgecFxtpEXxVX7SkywF4re24DP9oEkBfNB56WXPfm6GH3RuQrN9B7cUY24s2a7MMDdonQ3LdcWXb",
  "key21": "2MEYu5bgdSEUJx4DXpo2HULYhyHDsFbr5iqtnWTp63DrABZ2r9QWsBTEm1EJftdyi8P7UXZL2yVU2BE9efNVgpQh",
  "key22": "4sVmXXZq94jCj3KUTzjmQSXHkk6EBNfiZugAmM6GVQp4CnnEQYTEXQSe9ACAhY8kGVxM1N3f4XDy5EzF7ZLfKf5g",
  "key23": "2BbmzNbHMyA1fiMiELc7wwbRG4tpYRYh7PqfsWTWpikW6DywHz7xdyrbu77n6pY2q8MEDZquRHe45Y1EubMw8aRX",
  "key24": "3H1rz16siSmUgc5CDxGRNPGyUwYdEuox7UpRhDeLSxVvtj6orrXi7WBhXWAWuFhiGStPqdxBBPXwedQzm4LKAsU",
  "key25": "RTfskpdWcvLfAmy3Hhup3aeqTDKhmratbmM4MHA27zfLgbzvRzRZZDKFX95eNRER7UNhGPBZurZGEnux7B3v1nt",
  "key26": "4LeR8UeosHUJPFCAP7hdeSiTXS5bMkgmTeGW8HRgZSEorL5NJFXhRWUQmkeozJPmBRWetdssizk2hTus9tyAK6TM",
  "key27": "3xvT37GHiBMaErrmwa71EX5JzQZYeBbdCBAdkEpK2qYmTpmATbMT56akzEngAjKhENZHwwn6G73AZnkjvX6rNBM7",
  "key28": "39UJ7iFCquFNsBtsCiFvYYTYTwroTXaj8mmaBvGifsTchCUSztvDsNStRtRrdHZ6cpsCRURVwvEr5QrNhnu2tFee",
  "key29": "2r6ZMV9NM9j6ULXVd1jZvte2xuk5QJbACTosmrLnyC1GTv9D7XEmceb2Fg3JrJ3AAZMYUS34fyuFY21kZTvGXP2",
  "key30": "63qz58k85eAVME5sSheri9e1xHSPM6gHcM2k3GGy3WMb7STkjYmDqCy5PwYMhqk4Z8ndJX9UuQZuxK7sZQ8tg7rr",
  "key31": "SjbkTqMcjJaD5d5wD38fXEtT19QB7xDzo3fcyAz72o2YUWtmd4F1PErJAQ7CE8eVnmyotbPqiJtefCncpFaXwL4",
  "key32": "49KhXfuXZsGygab6HaZR4HtokWPTj4DsAuHRK9KRfPrVUm9vj94RjhrCkmXsbKozBrnuaMpmmR1QEAnDSua7GhLG",
  "key33": "3UpqYZPhnapWZs8e73ruacYA4UyMbSnLXenbvSsmXDtHBkUpmW2xozCHpoYH17CCexoyeARmm8qLtBp7iiujVmXB",
  "key34": "2af8r1YreHPWqdBfEHJintzGjmDTN4wLt6maHonpY8EDGfSrfMCzWg44RycZnLU4S1uw52WL3oZbEG9X9s9iYB7h",
  "key35": "uCLvfnEVjFHXgdzLptgvtgpnEVafxPVUUSABzXanzW8XebKJ6bBSa5sh4p1iPtJ1Gm4MM8s8JSwstrkn1UDGNsS",
  "key36": "3T3ZNrBmFawvXcA25zac4gQM33RhBq64gogUeAuTehqrt7mTRR3iMDMPzk4HwUjLaQEy9WP8uy1Jz4gkUez491rd",
  "key37": "2pYgpMJgBsEUJs3JGVvM7qbk537Zb96yCmz21v6E3rwx3s4LBh5eg2TUxJxFDZMRxnZZWtyCX2NrT3Gvtsux28kd",
  "key38": "3AV7FcQbgpNqQYJJG3kd2oiboeMCisKbf2xpe9QVSQ6UHyqj6fd9ffLqhBieRruoFEwNVcm5hSMvECVoUPbfc49d",
  "key39": "kUU6CBo8uy9JU9uFNXgRfmfnNM3SZgJuQiFLFU1tJoGdyupEksi3qwCfWxLRrkj1MasCQHp3HdHSV1RQPsBhzEb",
  "key40": "3JsEMn9QWcpmPS8x8R92QFDnbkpxLsT1hMCPiRizaikr4fvgrRfvSYmP99rEpHpM3VY9X99gC1wPkpurKvq2aejG",
  "key41": "4AcnCWGQLBjbKyZiqodyN1k1Nsx8XzEabDeyss2R7rZM8DVm3zzRQvn1Z4P775Voov2GLVxyScKUYBKiERSEccAs",
  "key42": "2Ns1hfNuNQPNJvFDHsfcpQNf8wUxwVDGKENR1xj3aQVJVPXRwFqyXBUZ1fxmSdy8fdSkL34XktHT14c3FNW39KJ2",
  "key43": "28qJ7n48sLokwXPQy6qAgLXpXdhgduESZPgcZQe8HKgcPVv4RGTj7LCdQG6WHsznyGqk6bMFrM2fs9J5mVjSeps8",
  "key44": "2ybjqeimCJMuaPXChTm94ccT7MwZ2HDJKoo1kAuaaekTbdda8y9ULKzoduW9hXeWzEtvaPbthwkgBCux5PQ4XUSy",
  "key45": "61oo3WJG7Hd3p12SDGdyKCDBu6zER3TaZf8aX1d5smuX91i3qFDgFpRf5FsHdMaTfkyzYEAaErFLyUFSnQG1HBXx"
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
