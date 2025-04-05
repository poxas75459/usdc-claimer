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
    "KJsD4SvU85HwATN6N55qsDybMxcwwbVcwpi9XSAV3fkZF2ws8BNojZvv8nAYXB754CkiamZY65J8xTjKLBHXvdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "585W4CBQwjocx54R57vr6EGbjvaJrJFGrkyBsTj1U3av6N848Ccrpv9A4pBPoy5FPHHQ8qRngHnEMdTxZS9oUUsw",
  "key1": "5zdhLgkjv7bgQT7xbTYsSv2xGTwrE8FR3BxSE2o6ZSKgDjfHrV6rnDgPvKV3aJfEnw673vgKK6AohZ2zZhkBQJwR",
  "key2": "PyK3229Vr8KmoHN2CSKUHZTgHeg9u53ajbngAy9zN43Uf4SJxdkmQjaZBrd2r5wMJ73M2ukVsYXXn4bY1pvDjAf",
  "key3": "4UFV2ZbbdieSPY98D4V5KojCAzekgHEqzW5xeo68Q49dkpYgC1U2V1YTZpSfFPffeEyiWaYL3ZRsaQNecrUPyePd",
  "key4": "YFG7xemv2LxTkqJEu5UKsaA9v8trTTU1mCecMYThKJe5RyPf3teD78DeSMMiiNi3VyF2dykEhepF36SZ3riteJA",
  "key5": "2mEVAZ2Xgv712cDELXgmhiTy2kKQsgpagT74UgzrTASTj4myb66Lhkww9YxwV7dAqTL3bc86X8AydR5AgZT7xQLR",
  "key6": "4VY9soUivmb4Y9LZWkCxudb7Wjd8phA5GVYEoWLEPgt4wsuW6TVRA6wPfm5fJEqVR2petPwPDpDQJvyu2CnrvqHn",
  "key7": "2wgKyRLNYxib43FYNdfuXbCdSpLK9ivT42cYswtFZJqzyoR4rUQckNW7vHJw5xib2szSiSiG8uJDwWgZGYb7fdDf",
  "key8": "5SHQ7rTnGX36j3g9JafjYQyc9BKu5sCEvT3XiHP4R5XPiNYpSk7fzbxGcsLyHUCDXoBYJGAhfJ2QYxdNSa4c1xdE",
  "key9": "5NGYdr5EcCRG8jUiHaqoFVPxSwMRWyvDfuvYeecnR7ss29Nz5rTzhwFyxVmKdreCF8s4xkitBNjB89Wf6L7TFaoF",
  "key10": "2HM5QgUcaBqHkUa2NzVBeen5uQ9iMFWSBs93D4uTFRGDfUNJi9yurxgjtbx4dK6RX3PamQRC8cjVU5pCUcNSaq4i",
  "key11": "3mB7xK3CMWc6PwrEEtrP1BpjWTNES8eg7i53D4goBfLgaxif4rDW469SsihQeDxCzaZRPzAtoNVP1WCtBcEtMSW9",
  "key12": "65yRUCfSCrwsgjjYesGGwqtAW6vSD9PVy9m84ce3BpAQFt51usLvtnPmznrhKvLHMjHoUg4BFbh192NCngmAmvcu",
  "key13": "5jiruxM4pasX3tqkCLYi74hEmKsptziDFuZfHxHnhSUxLor1qUJAgJq83WbeEepho6L5xj4ewPAygfY6MDT98GHy",
  "key14": "tnELpvPeYCjS6YJuSpasYptY24Mdbnpg8QjKSHV7keqH4NYyhAYaZcCuucf871rWfbXEyyeiLiavnK8VYuKTCGd",
  "key15": "4t9Gux3tqdkeU9m5odvyXRQkVdAi1rnmPxd7enxXZcFkExki7D9dGxXLJ1MVLKCpy1XKf9PrMaP7usniA56CF9p1",
  "key16": "3264TyCZ3nQHY4tsgZGPMVxi4MmdJSfFrScpvU4diJWhFVZjbn42UanKtD1NNeyreqvQyX6WofaTSd92nc215HPW",
  "key17": "qd1Z8Lq514hb5xjtjvs9NjU8gebeGsJJHdjMRBfM6LRFeyBDWHHPfMU8nSgcVFndHMcpJZk9HJyg8DeVum3rMRd",
  "key18": "9qJwxbKtzBnF2u7hyr92s7u4RWQcgar71Mp6PAURtZXq9u9ogqvBewvXza8D45nG6w4CjfvuBADGNpjuXebQ2kC",
  "key19": "4LQjKUdemQmtWdSN9MUioLtScpKcfBYEnbh5NqiZ6HSQYaZPCVbnbrcJi7vpd4NVyvnbFAEgL48WohK3rQCPZvHg",
  "key20": "5KeZGUu7Y9YkbcEcSYqaLedrqi5avmUeibG1GFNZnRx7odHPQWpmvhp4x2U74WjJF4KiZ5Dkjkf41cm9H82WGqHe",
  "key21": "kMLDUjm8FkRY315ndfTzVzrB6S6cZxtXndABEsuw6xFQYyz7WVBjF5JNpV4KH33LRjKNdJ8XwD3TXyr9VYBfDZZ",
  "key22": "JiKuyJZy4YD7VySpfWu6sRgVA5fR8hG9n8TcAvTkUQ1ewhWLgunqfZUkc2EZJYi3BfNVaj32gsVcKfPn1h9KFCk",
  "key23": "2maDTrkPrz31MAtjfKsqgmxvY6Ss9wwxRK9WgJx1EyBFuXYZ16UQxDtvsQKHyCEwDPNkrFTSyQp4xENyDHUuhjL3",
  "key24": "2TVNhYQmfnFrYXBQULYNESyK4D5Tr9KA7YVnq7SCaARZHHcPUcQ3BGuNgyT9J9mLtYsZz8m5mFHw5WmtZzpzUDdG",
  "key25": "st79MGgtYovNdXVGsZokfYCPsvoRmMbAKThAB3xDVDfdSspHkssyNEqZdHKTz7uMF9VCdzKpkKnnNvY8m92kyGd",
  "key26": "EHTXvdhUg2u1cnzEY1vqP1vfR6V5THqtaD75FKnZCiCgEGdZR8qJ6NiR1pkKwAhxUyMkATNHrftxwMJPsQwomxR",
  "key27": "2MYrWQQfrA7kn8gmQJrUumuNBCzrh7dXoXGzX9Lfeq5T5x59RxUPyDUS2QsbboMYTkQsN6RLJbaBuSBwwG4b52Na",
  "key28": "3wTyDR2aZLLcQjTeiqE5q5xWyptAjoTmPDad8X3Ny92uRXHiaVPVWLyhbgNajuo72XYmPNr3e73Ergqieh47PLBR",
  "key29": "4NiJHwi84JPQ8gdyEMqG8kgeH1Emg7X39hwgb1R4H5R2yggroxWcerc5qj9qbfZfVPizHBAVYQWigvmfhxn5mt7d",
  "key30": "2hV1teCqdQYETJfKLAcyjchJXaVeimR7tg8cg3dwBTNL4TJGXuSfsUYMjDFyjd7uecYC4pMHNidt7mqys8LpSdbF",
  "key31": "5bH3eBTeT8yPgJqS69qroJib63Dcd3kRhF6XEdCcnzME7bPooNoSvbw6iNrLP2G4boraG2VSgK2HWM2NLbyhXuWn",
  "key32": "56KrZe1A64xKNe3eWtGrDrKi2zKQDGJzait8YzcSqogtAzCriPLVke1qUZp3A4YUZFMpf1x6C4m9zT8FqkWYRVDd",
  "key33": "5S5jTP36o7k6nbKr94MVreZAVNyn6YNWMpJzo4FZg84DogumKotWYXEriSfb6EZdyUF42vxM1hKabquHdQ5rCHch",
  "key34": "2cDzqBnGA6pXhwoRQSAwgCBWgk4AqfJQRgSkTbNz6mWjkm11NtLWQuLCS3ytvXKcGnvL1FrRPn3zqEeRvbQihwfX",
  "key35": "4z2yd6A8szNzkahu5o15eArUo6nfydxi4pyvrsz5DLPvSYQvYigRB16xkdFVCvcidv6GhLHV47TuYddEsGBXZtBz"
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
