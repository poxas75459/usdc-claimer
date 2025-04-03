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
    "5cB4fq1ffDVV5rKfomU9wJJZwffcA4joUvk1a6TFmMUPm4cAV6YR6N8qTMTehE1gPcADCYRPtMTmcR4JbVxXt3X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7M3gG9Jny83AmesTncgbxMxSU2MmenopPXRsXoo7WByLVprkyaijJyTYYcCJmMrciVPtduTPmvx4QjZ4YntVTr",
  "key1": "5E4oUUgCMrjfTv39Y71ofjfzXVQzu2G8SzN6C3VMXDQEF4W4znLfb827Sd4Y5PCvUWukFXmib8PxJZP26s9X4pKN",
  "key2": "27Nfbvftoy8X5WetYTSe3NUgMsC7DVtE2zeXPhs4aCCUhwFpZvf8Nehz9Fs1eDipZfSU7YcPd7qxDA8ECapgykiD",
  "key3": "Chez7tt6qc3yrRs6h5gY91KUmyiuGCEU47M5JobRjrrGGY2k4odvQ5jxFCj5eeLBSK76DZF6dYfBoRsMA5LAHtW",
  "key4": "5hgGLVQDNU6uJW5xp2Cc4BLRKvKouCvyLHSBB51ghgaKgCxpfHnKaZrapg2QjYvosAGohH4HzR9JpKWE5eWsU78U",
  "key5": "3PLp8WRjNGGBnR5R71F47uSV2ZqvDnPjNHJUFNRnHWTTW92aSCyjt2g9dWiiamLJcUBHEzykzCMJ6j1cRacqQfaW",
  "key6": "5uRtQzaX8jZWie5J8kqhiKGnHq11jwBCEhFGW3Ep4VZp5CtfxQr6RPnBLY46qJ4W9ywCAtjV7G4t3AN6s1LqNreB",
  "key7": "2GWNKWHxAFLuGgmp9UMajYPyiAL9wqZrjYNjXLUaWzXtL2moR5Ru8eCvaiN1jtCfatPNqvpL3ki3kede8nhcNkpq",
  "key8": "5bDwWba2H7nicVop7pjQzKfB1giUKGMxERZUvAW27z2Gcfb4MSbVy9ETYXAVYS9iAdPMCj99F9Gv4wLo6NRzLjge",
  "key9": "o9woV7djG4vuVR2WMiDTWmBPyNXhL5r6szSfHK8ro4JxZNghdbM6DsvKzEfXT3SYCtk3nhvNP3SWL34LnyvqJEJ",
  "key10": "ixxbtY6BwNHPdaCjDWc9RRM9voyFkYuLXWBpEJsd65qn5ibePtJxtfuLogQiKmpQzr6MdPiv9j6FQwGKoxDnmgd",
  "key11": "BedpSr7DVEm62nHcd18715EVeRNdyKEB2yFsZQ4KeeT8rUW9YjeBTKN7Qx9CQ5bmebs6U4fN2tTrukZQPE8cKkW",
  "key12": "3NWXp9XXWxzwkoTjHZ7iCRBCvy9PLJpjz4jo5pPNsJHoab663SaRAajJMiPtKTJVJyrDuWMXiswSMFjiMu9rRsH",
  "key13": "5wHoGNQfUeEyxZs2FVpqkVkMUc8DTpVqSYbNgDWAN93rhY81znUUR1wK1DP8bowcLuxcGVKxromxSdcpg6N4Wzne",
  "key14": "66QGWGbJrJDxcSAGM7q5G7WQWLSVCSpFfoRuJnne8fZXMxeaeziFFpDi5JKUzC34zTaNAHtWxZNrt2J3qt9Rnkbo",
  "key15": "4GdpyTiMThYQvgwdwt39ia8uSb3VEwatoCDa9SAP3YM94zK7tYAeu21c8MU7xhpGr74ntYtymRUmYkddLtSLkrs4",
  "key16": "3BnZk2JcmiNfLvbPGfxM9g7aUKAtDBYWBFnfihkoSL2RVBa7a1U6rS5c7Lrg2Ngsf6xcnBpC6iFDfDSdwr5SGKUG",
  "key17": "5R5QUaNgox9XtPjB3nzdeaYeSdYjjBAMCwXzaPWHT218WNVsEM11Yk24ReuzDgEBPvQdRhCZTspHhgTcHKr42LSQ",
  "key18": "5fcf7K7Ardn7iv1UBcvFqZd9nr22SYnAFdBMwUmL27ft7QuZfSPfviMadGZtDBeyCMvz9YU3dmgmvnHYWh7u3bpB",
  "key19": "28exa9MTd527N43CVTqA48WrhZW7UNnKUEcqYDY2erKot9SwYx3AYCLzePmMLMReY8muDkUTuYH3jAvytGhuz6DB",
  "key20": "2iHBjySR9GSow6KZRhpayLPpL8h1Wo4G24t4XquDUXFjuGJaMgodHDJVPqCR1Dza6SY8mosEZGyGwom7Mj8NAqnX",
  "key21": "SCq9idfsu8sQG7tqEWRuwdDVnxAcPEkvnP4XrS4nLuzNKfwv5AKek19V5zS3sWUgd4eVS6fEYn8nnKEFrJdyXhe",
  "key22": "5FXTptfSWDNzjDaeFydorKWkFDUWgjT4eQdsyZ22GNMHdKomEK9wtEW165fdrpXwhXbEcPeifiQuAeDoke6vKEVg",
  "key23": "eZNfkUjSbY3oeqw8XL9b4EiboJnSaErgfwa7pgcc6BU36pH6GeM82bDzbhQFUSgybm77pCj45yEv9zkDiTGXm3p",
  "key24": "2aQKDgw253b1xWZ7LXNe6z5Lu4Nqiw822mZw4JDzS4akCMLhMLMFwUWU68zG967hoLPvHY14whGaKr5Ms8X8WE6U",
  "key25": "46q2FwKAjS5DT3YfEE3uEr8UiWTefG79kBhz7fnkUkMn7DoMv4gTzpiVkYAuGxXy3ZUwjxJbtz7qYpF7nu8Vd58k",
  "key26": "5dYSo7Ga9zmaYXGb4m1ae2aGQLfGJVo4Uv2ZZULVEc2bQNbRTuQAcUyZwbTeLsf7W9WUqFvtwEcL4KD7YKc9MUin",
  "key27": "DsgkK47cm3joNdtSncvUygcssqqof3PhUbsY4jinNrJw7C3hS6BjAXonmpLGvpphcBq8sWjj63325UN3zWhk9AG",
  "key28": "5W2i6SXBKq9tLHX9eyQ5CTQvDCCaNWF9HNW4Dq6JfJ2mPgfouFCC6fHNCXFYAiaEMAx3RU4UNU1F3Y2xnZAbbHzL",
  "key29": "4XBbCLERPyGrPjxzXyY85uYR8ExugS8kP6bXqUxCMVY4bxSQuzJTD3fJ7vbzehYPqqJxJKpBYfH2VsY1Fpsn4P5U",
  "key30": "3kCcvsR5YSdxdvuWD1FiZayEAhN816PkBSRi5Lw1tC9UYDqbBA65doF6RH2D3KxrDEkTNWGRfxswsoKmbtuRnfXB",
  "key31": "5Cc4E5BqcYbxfqGzhtjEAn8HDpMLjhxi1umH96twpBprJQsXSwhaQdbMA6YNPewBYsAyCE8T3eHjdqBDtKraRWvG",
  "key32": "5ieKxxvKzLRCK8n2ABdEkV8gcEhQx7ArJgac8o9VoAU43F5Vy3S12b19YgszAsU9U7se9CADoq96ZFXirRg6rJjw",
  "key33": "3SV95zK6gfYRP2c6hpNuBfYt9Kk1H2LspPjadQcHDxxfv3RCUPCDvr7N12iZyq74Cg6Y2a5yjwPLZmgFmTPqgzNZ",
  "key34": "5QtNS9xcrKg1xLHmSyYvhVkMJCe7PZLd2hGCz4RiCUTSE35ziGqVbLPu3EEnKkTBosaBL1f6c571Q49nRRtzKj2k",
  "key35": "2UypC3Ti6Lt59BtpA4Ja8iFdkoQkE6ok1EyA1J4yabTevb7FATVGKhTwZLFivFB6DUd5iCiNUDxSgthkKm3XTi4L",
  "key36": "4wmEesxcc8MDtR39ZTqFzn4Sn7P9bZZt3XwQSSPnUALXXEg2TUhvDCTvc5ft6uSZhembbpDeKtWj6NFQBnZb3w2Z",
  "key37": "5sJtwJ3eiQsouSKHSnStCYcCB1eFQy665vokuvskZjAZrxbWPBmzTUmNgTDUsEAs4fTNyNh2FnMGfgjjrsiqyrap",
  "key38": "3RNNF8uYdZtfAPackotQ5wK3ZkaTpS3Vmpb8QKwDpja39rEFfkLz39BmNAemcLkoEk1vKfXBMRzqqzp6PK1oqahr",
  "key39": "3Reqi6aGQQp271cXgKoNc9ae2bkjhZ2jHp3TtMc3vpT4HjxbQkcjqXdfffWjkp9Fk5wTQwXCziQipzQAcFcC8jrh",
  "key40": "3PKVnqwgVZtA4Ry25qyk7riKw6ML3pAkgA1QSL6jpH8siE1vyHMoKdfdrHhpvkntCYLraRgmykKdcCVJRjnhra5h",
  "key41": "2pUZuzVLvxUeyB4S6PsUG8sUz5Hd2Nk9kosfF91FHhtAp4bWAHLmC3zMkvZJuEfrLmGAwTVnoGgretBCH2SEENXp",
  "key42": "2UWonMShNq7VkMwocGxvekJBW12xZoS3phu6LVofYDjQUktaggXdS9sYHiW9oWsyED8K62M2my7WzyBwctM9SC3Q",
  "key43": "5VxzjoRu24nftgb6y6y5BsT8NLRuPSLL3SsYx6CqR5yu31xWMMqyouUgA6oDRqikoSfLvp9c8UfxoHAT8RahzTWJ",
  "key44": "28hop3C9waKiBoi8S9SVkdLYD3nW8DmutdeGmnmFrGnjA6GLyAnHarqgZx6JsJ8ZVyWsMmC3BeyADzuzrhJjd3AV",
  "key45": "2wCbGNYUcxNCGSAzxVTsHtEAaiUJeUNy6XFy9T95CuSQMwDBHRvjeegvZjH6scDAsmaudWWcgYYGoJgratUMEBSn",
  "key46": "52hHJjE8rACyWSZMtj2XiU6s9BDKKfBL4M9pB8ZV5cqAbkP6Xxfb8TWyaKJyKsd89ewKJA6v6xUBD4yU8Z7cKYCv",
  "key47": "4sR6eUbmdMs53ebufRVZ5yHoKDtM9WnbYGdfL7m3MDCgAum1NqqZpDoDyp6WkVTXrvuZ9s437hZeEfh1jGdYJh5E",
  "key48": "CeMHHhEfiMpLwJU3K1YziMBXSqR6VZ7PbqofqkrSuqU54PpULT1axydBNtX8Xv8QABBkBwfnuxE8CYVvdixicay",
  "key49": "4yv5sNXitv2Q3PmSumxvd9B5xBg2uM3jmH3PnPXtEpQuZR6cuax6sL6mS6GdDFYd3dh44V73K46Lr6HJqXGvq1ze"
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
