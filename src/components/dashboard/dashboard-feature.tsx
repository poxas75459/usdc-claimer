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
    "3FpR9dMzjzHhzAEXtJ81DgqAt6CDqsS7Uh7uwk4U28iB9yQSFthAApXPiNeVNCRh9f4UnSVHPfN32CCP2ZyWPdPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LFVX4qwrFEWnX8QKU48LdLD5BhbAdEnFcXPQG4ucR6nGma6u9nxN7XDTjDW5D866asMhtioHK8JVD2RvJS8PnMc",
  "key1": "4wzzrsPjJe84X3x8GVE9dcZYaD4jZ84xm8QaBtVfbfKRum6pZYXFrf5jwHmHedvgcLGsDYNV5PeWaGCBJDyUQAki",
  "key2": "2PaC8RukEmZWdeepYZtXHNL7MgFJ86yo7tVNtMeEz7SH6ss13WQwTYucN3sSfnuDzFmrGrhLwpnNtfv6UzvroG4g",
  "key3": "4JteM6g1ukGk3ymR5WQWfupj2Xm15eFY9DMEwPGUhCdUdwgxhJjUKPT7eGsprg4jgwQ6j4F2VnthJWLPJr4NXQnH",
  "key4": "51VfZZyREKATXfWFftjXRfF34D4RLHs9iDova4oEwSvkhNmpNGUfRn5CPiG36i62wSCQJc5tK5TqYr5hWNGcm2rw",
  "key5": "2GNNpm7oJufuRyezdGZn8Mjgk4t3qCLu4XmSdQAh8y6aSFZUBLW3TnBLCWUMEhbBJVHZ8AbHznQfqpsCg78T7eF7",
  "key6": "4Cfau6d7dHyLvAuvAY5bCoFR74ZRgrhvR5PVNpPDQkjdZf5rRRAM9CM48VMHptXQTfpGUmms7aEDsxQagN6jG4qA",
  "key7": "4gLLuxpqkPqNJ51DaSBoxVLzJayVvzfu7c4KvXfd21je9mtWtiZpGJZhZFE1Vx23qQKhBGtyGpLNPaxNBDdxMvia",
  "key8": "2nyiUjapf9sqKYHwgndnDAFKUEWJLBa26HRA2XTBcqw15tZ4vKZGXmH6ZXfBe61vpK3e2nRJVHhuBXBS6K1oufmP",
  "key9": "wbapD7oirWjZSS9q3yPyyfnKGPQ4ytzjwhEiKapn53foNvkxBP4ShcUDpaRSMeYDiXbr9EzzhFWc3W5HJBKCrQB",
  "key10": "5ptrUsG37LUd6WVDVVJqkf3XjVpDXnwGVSXMBQKBC4A4F6dGz3Jp8NSMUKnNqfXpWPXes9y8f8ZhYMGhkjudcAQB",
  "key11": "4n5cJFbGBPYz1kdk7w6AwDxJcWyAE23UX3EW1EUNQQBQsCtfKQp2aZjHdjMnqoinvWzwg9pLkHzCMpZNhWeNKKjC",
  "key12": "SEj1R3ABrY6y4Rnm4cVZb8VRLHoMT8qF5UFUgeDc8YwEXtF7hJ9JsL8Fe5wHofqWxH4KsUyuNSNHXXs5pWi3yHf",
  "key13": "2zus5rshQjMvjmWFUM5bmvxJRwV6U6ncFDsD5ySDm1UrKnznLdBtecA8Hqx6HaYHtPnZAmsBy7xdPjxVarF4ba5K",
  "key14": "3spNoDaiRQFyCa3yy8TkSJoPKoUe8mFjTY5wKQLcZpUnVpicHth5rnJsiQDagB4wfUXiExxEaj65PLmnFvgpV7ae",
  "key15": "4hR3GKfgX9ze81fkUxy4rc2sV1yTYrFKKWz5fyfdNAAfvBT6YRcRn3wuGUrJxmkJ8T5eQE4rfsLxSdjDWJ6aZPcf",
  "key16": "2KNdquLn7uBGXBRNwC6zbgQ2sfpgZ8pva7Q1xyauvQi4GWYxGorMDrjNdSksAEDSfwUSJEEgakTSupCSkwHMs77Z",
  "key17": "QTFMTvwvGq5xnCvyAtqZqXrQ3FGiRqTzWBG4bxSRdQVB1s83xU8KXAXftr7kwq3KMTN98PyKeEjeHKp4piX9w97",
  "key18": "2xNVhgNgzTJXkwnhvy8qQ5MLFyb7pf5bpWru1D84VWuoZnsNWBfX4VzmMwDBxc2WGpwFdLjefEQEhvxiLf4LFXSt",
  "key19": "3uZo88GpSUULKjAZypnWq2co9iiZ2QVc7FZZHKR3DwET3hidgvQDA332hhL4xuzutoKXdK8Qh62qA62VgfmB5Nbc",
  "key20": "2HbfLUm1kd5hz4W8UaMjoZzQMNyS8j1suf4kQHH6tDU6sJGpxph6Uc5jCvjTYaN5hbJ1ECZMtky3VEQYLdKiq5QR",
  "key21": "2MGr5k4G8i1SnFhunNHGRLDwyk5c6GhdPed6NgHv16s4zaaCaR81xVvS3VYjLzq9zfVERKTn5x8w5zoWUD3nEhp4",
  "key22": "PKfczbrrx5oRs5RRSPW8JjSzGHmwdMcnarJX1GBZ4QumhWSsECJirHCejFXR9pX4RNmTpufEgGJRCsX82NchG26",
  "key23": "5XWuz78DPjHCS2F47c4HLmQN85vsZBYCemK98L2ZAB66Nf2PrRs1wjX8gPtBehTM2jyrYegvr9XFyPPPqJsv4C3F",
  "key24": "2z5n5E8fU6wHEgDeNuAmgBMu7GWnTWbijLLQ24Lh1FLY2jfXEpX166iqwGjiZ3jD6eDJZuxZNLwhuwXHX2Fou57A",
  "key25": "n2FCy4AUnLDcXbyfSnrFBoXeby1KrEo44xPSjciRDnhkY2Y5GVq1hCpPG9z7xKqmgdaAHHVsvkr5drakoJuM5Hv",
  "key26": "2oUaaDCErod9ucXYyuTAHDMt58h79TiUWDKqznjDBovg2zdERZJfk2XTuXvzuhUcyPN2wVXNa2cktenQJUgSdxiW",
  "key27": "5Ly32narcQtKRCmtzxtf37ZbZYnLFPVh9osxv2VmG88y5YMmsQJU8QFJ3FkZEcdTZvq7H6wi744bcjebQLkeV7sa",
  "key28": "4EkuyAByLhX779c6rL9KDeVk2JKFN4XvNcxYPUhkrwTi5NApshGk3MVGweYHJzzUwGD6WpN9Lk2zpSCNrSjvLfJy",
  "key29": "3nzuToga5Ecb6ziEmCH83RkkE2Sf3mTZYWkDfnbGUwKDAah6upZgtD18BypbpM8bYduSTfxys6UpW1rghEB1Mt5m",
  "key30": "2aUv1HxfwDpAaM8wsXJ9xUTWihGmQgEhDwQJnAS5oGanupTBZKYVyrs3TQv2dueYGCiEVcGQwercrFL3RT22tthP",
  "key31": "4Caxgmpao5Mk9pUxG4YVyHUNDSACsEUoEKmVQsn6T4Uxd5p5JM3L7PXSYwD7WVYyTm929Hh7VsUB6T6Q78wzqNc",
  "key32": "2aS44QsKokCoUCg1SzRmXGqJNY3fb1Y5aj6rNNmM59FJLUTeoqChqrbDEjR6kxKHimgTxe5jJzEbponXHQBSdAYC",
  "key33": "NxiUUxauXMbroeTzGFvXCFrDt41SyvZD94Cww6p4WgxY3AuoXUbTGjiBmN49vjYwdfDDtJH2T6xiAhhtZTE8spf",
  "key34": "5dDqbkqV9YyAycDDLvF7QKtpk4Xmp72onfzXdJLGUkgYNsjfSaKbpcwMPunE1T19EuRHV7LApp5kBGwxV9t5teo8",
  "key35": "2nsRzizajPpu87GRJvqWf8WvPXCzuwNQ4uuEm9FgnFX93zLypUogW3L1JV6L8q7QqoFsnvVcscGKVQoBvXgSUDzE",
  "key36": "2BGaH78q5DyVyGnbu2qbz6uzzmzFMwmRLeA8uHSH2fdRYCpUH3WSJm6C6d42ixb491gxdYRpb3Z7Lis5oT9qiX9u",
  "key37": "fdhRxo8VGcCAFdGJvjnrwtEhGRrrb6UBJKGqHWAD4CfkHvM3QVJBcp24U9RAbUufu5mfNU8W14EjutDc8ANyFDY",
  "key38": "3hVEGJSdjqKSerPP2ZdAusWTynNDxAKsZALUEGeZWBD2rcuNKLxDDjHFi6kH6F4bZR2eLe3teCgkRZwswCGXEcYC",
  "key39": "uEVWhALf2vPi8YRZqfpeNKuEnHTAGKqtSXKigm6kRjC8NpZcVfCY5hrZt8gmwZy86og5xww44rKppq4aowHk8JW",
  "key40": "63dHv8WxTRZPDGvJ5yKfxxmMEKkhLErxrFgL66kGJCH6aDa22Ev25PntYSrovZFMK3P7YHsm1VEtjuYXNAxEd8a8",
  "key41": "1NzNwSwL5bc3Q2uMf94iHbrLjuGXJoEBzaXKKHPQ8hbEWBove1BHtEdvCpso2RGhWFJQudfxJK5ZTZXC3AN4U8L",
  "key42": "DQw496JjxpZ7keAk1w7uJbrPSkGA4BgtjrkQjNkTJus42TGt6g3dZEPMmXgL3xkfBtButFC41E2rW1CEbTY1amX",
  "key43": "4o87y43YMZoTG1zxo9QkKwCWNDg2MvPTkpEwhqUPYxRQYwTR73eFrud6g32QkkfEibcRst9mqFFZjZEmxNK8VDjn",
  "key44": "495Fcr2u2wc4cczpXDN9ix6SUan4Pf5V5ZTWnFyNnqdHkY4Rf83Zs2kSp9prSewNxiSzEGAsYDqKaboWa3K4gg2p",
  "key45": "3Coxavbu9M9DEQSCBXQpEJNo74tyeMLdtXPANS22Zf7bgNiVwaTQuGswwyv2djdAyMpecA9xLdg69LGYzGtD1Mhc",
  "key46": "4e3mjwWekQr2ShtUSZmu3ZYD4o81PJzBbtqXpZapXRhjyAfHFFjGPtr4ZNLVRG2tUd21oCUF8CDejKFzgifMXhTD",
  "key47": "3Rkp2P1odURNrJc3ijxpKrqTgiPVG7kAQ4LoE5jbDyKEyk85hfddbznMier6VAAFyDE5no96bYexSLGnLj3EZmE4"
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
