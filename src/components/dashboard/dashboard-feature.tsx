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
    "46PuX4eD4kr66yPRSU5kJPqZ9v1L3bc8LiQ7sqPLCssLCqHZxKFcXuhyn4RG7ouBu2uqGf7oxPEEzFD8cdnT6cnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57PddCdztTVFVwWVLSf6tLFwEeb1mC68gunXYQaB52FwbGRA9fPmihMvZ8apoiLrGdY6HpVJ17Uq1PDN4F8jYnTw",
  "key1": "4Ss6jYq6LYJvvjmk2u2DRKtUe8ZjdpNqBRKmV25tBBwtvQR81hTGf4apWvNjpfrDJEFyrKKDGUGYjtBYGnTkgvHe",
  "key2": "45k2x3XbuKcv4kJUaty4ubFdeSn8CLvpWdUF2cee2tKTBFxDNQBSdddvgCdDdNUVysfDcPMWqyHwkA4GwqSmJezR",
  "key3": "Sg95TkiSP3vgZsQpq9tQw5MbojZwg9PfpjpaBaM77HvfQef1KuUjTk5LU3uLUJSpBZEQqy9me3TjYMkD8qmMFKr",
  "key4": "3vGoawRW7fpTPYhDptvT2JrW5JdXNtGoYphdY2PmqZHS2cSARjWff6J5pTUmhrtQK6iMwW1xsEAYosQfA6kmqsNd",
  "key5": "29fnmbRJW7JRhsqixnt3NyY4ufDRz3kh2kE2rp9XFCEFva1rYTtTUtfzZoucuFNqvSRMx7321kq4cM16SkwL4gH1",
  "key6": "4oKRoXvPNg4cyPWtBrycuxM21wuP61GQn16bfCxb1dyLhTgTVpM8wmhvHccwMATcYYWaY4X32KRSnWSRUi3wAdw6",
  "key7": "4pB7NHoN3TzEi5MTHtWeVRVaQ6Hp7qAos8PAKtfQmaeKJbX5ZtdaBtvcC4CFhXSXJDbLVfJEpfuhhRrkZetkf7TM",
  "key8": "3kzDxDJPACMJDi5J8H8ugU1qyVUaUqGLwmT4ebQKGGvkifPfg1BgW653TAqfuzHzfiSKSiCi8MvqCRsKikA5GcK8",
  "key9": "2FepgmeEi6mTyHM7MAA5pYsZsW2r9o1jcYDnz46NPmzHJ2FyBeW7TQCmAZJBj2Z4Wt1JZdisamFnEAHyFBDj7UvX",
  "key10": "4DS8mp3EpKZ8wNhzWTBtdGyGJhPRZzDh6B1K136LpWAMaofW9krDT3a4aBpieRnPUEU4NxLbcoiptWewjcWgFphv",
  "key11": "4rt9Nq9Gxf1nDt9VqJWSAsyvRkKD4ctq9wkKqSciz33M5gbjyc1B6xvtSHdPnHmsvCkv3QYdbiXhZZGbVqPVNPXf",
  "key12": "3kSMYR1MKcRsNLepUzRJ1PbYzX54A71C4iBNzsfb5PmcQM1h8PYKjPXQWks5w2zsAWNR65oDKy3WRvjaJcYwR8gv",
  "key13": "2BtHLv6YYzNuBQ9vjhNA9DLGp8i533xSZUfRU41u6W6cww5pfgmeVjY5689CqLSXmf3yepMY4ze9kZr1fXtHWyfK",
  "key14": "2YUWe14HRKxehGLB9R9ViKitG2iE8d7xRWajTdMg8fEJMou96xbTxpKVtqgF4QYkMGGCzzMgScu8wg5R9pysNMhZ",
  "key15": "2ZeSaDpKhYxcpyYx6NbKP9SJzzBnxELKKLAqWL4EVV6yUx6Yay2f4VmMUfcoPbXGQobZ36V7AHTWDpiX2qP7ynS9",
  "key16": "GJeuF5JSfMUcMi6cVYDCnyYpjrDgJWvkcfNHyTtGzaw23H6Uq1sLT8feHFJYFCQTfvU5cmfErtKScHv5P65AktL",
  "key17": "e3jwf8NXTU4Sg6fS2zGJdCd2fRBiuKPsM6aYqUeELp1J7j3gijx9LjvtFT5rkiwuF92s1ijVDGY2eKASForMGUN",
  "key18": "rYxNyQDH4ow1DHP7b41FsJknmLDTMXtaXtW3EQrpudq8FSdvPnTy7MQ5oonwxSJq8bmZEpoGwQY98rv8VYzXgDq",
  "key19": "2or9kdKzR3QrVZrdQA81G1qLKLBtW9fKKwxUYjDNbXeSoaUPW9FJQnAkLfyXiJxzq8cuTGi4F9gz5HdZD5TosWD2",
  "key20": "3W9YHFXBuF3PVynkoW22A8bWgHptxcoHgftPB9o32oHTurMunMJ2tgXLDcGpaadQHPcWo1fPWt4aGjCBVZcfgM1v",
  "key21": "4ayKKK8cdLaCjdYs8njLPmkxLFwfjDF4Sfsa13o1EKFF4LMKfH6a2KSc8icrU27ApRf6sVRJ5VjWaomnpL3oRVa8",
  "key22": "5ncJNQuykcqQQm5DUafECNudCj1Tc8Bu4gohEpsSfzoK2CknLELr2ya3v3SFEsESwokeKegnhAsnxUQw9RLcBPbJ",
  "key23": "3yRZckX9qMfEXE7G5GYKsoQXzhVVQHPdNbHnfcKNBFBWhRDBRhbK9xyXDiWkbjPjjKNGsLg6CmNSZGpAmbygmc22",
  "key24": "4amKvh8U8HC3Wrx4GVLeKPtd3vTayjBv8c9GS8mUgjXnotuEh2XCbtJwF3YKkiir1sLuukAdGWZTSYMkrHQ8QiMZ",
  "key25": "5ctAUyVVD7G78DUoRbPpoEg1zxcuwZW8h7xr6gfwo6LhqsLHhdjD2a4SkyqPWZouUjG3KNgaqvcvHLtpRJnDGfia",
  "key26": "5YuxPhCD43fuWUdSspTSnJqe7ESDEZexqu9hMv1XProSu4mgCMzSf4nUjr9v1J1f1XJc4yyqvSprxdPFmadhYRdS",
  "key27": "VjZxg9VqDwVhFuoCLW9XjoaFbrffCHP3xywct4pc7PwpcoRHKGFB9FHiXLXY6Lqspf29xzp2WTPTx61szc6bb8K",
  "key28": "G72rsNpHCAftcQwrbNxaWEgzkgqMu2MZZbcne8xttQTQRWURCiVVEFPG8RaRfELHAuVmN6BV4YJ6yDSgxzVNH67",
  "key29": "5BeGMuAy7sUTZZSE1e4k7AbKj55D8r4jg3UzRbPm3NpmfPmhniq2uNLo4Y1vLgDw1uHeuHQw9M2C67cnqzFmJs2w",
  "key30": "LASjhctPFYjiwaGr2hYBxjFo4D2vugUy4hQmoJjfVm5gEF4k9D5MNkmXmKSoCz7nxXGLW6PwycddakVMcrKJwaV",
  "key31": "3DXQFf37nV4sRT2zWfJ15FXTgQkxctu2XxZsuZYyBGzZQQWuq5MpdLyLwi8C3MxfCHZ8F5n3dsEkuT7Uzrsz6S2q",
  "key32": "46aucbi7GCSzo7NtkTsGMMSY9BiGPQBSXtD9fsYxh67NLXMnQJyGVYxQHuFQAnaUTYbiPD2QD45Hx36Jqcn7q429",
  "key33": "4X6r1yHeUQeHbPTJS9aKyhsGTyHcBDSUHzFtsa8uQ8RXG2SATqMkGwctFVL618Ey42KZjca1bKwCf2Q6t8rwCLYT"
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
