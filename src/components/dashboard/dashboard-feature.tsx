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
    "LdNzQGhM5USy1uaN83sfpiGHAk1dkR3D7oPCeRiWR9pY5SsNNikYTPuYFRF6qxmeur58N2qx9T5c6kmzhFxCVns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiW7h2RjUsXvXGzHEbmXjD2cE8cpmNWSUWazUrmw6yQnpvpVJnzc89Y1hjxJ8X1Vj5wzxoaUP331PnwDrDLQxfW",
  "key1": "34BEnE3qPHAVFKLGmDKH8GEoxwXZQA9J66MFZxR2REjfRE6XaJ5cHCSf6vs8oU7MvwYQjVYYXqJJfK3m1xqXntnS",
  "key2": "4pSnxth59A2Kbh7B67cUz8cqJgh6JXW8VuEDvkvX6h1zW3sZFUT1sHNhi4EM23ncG1XxwwuKoSFek4frPAfr19Nd",
  "key3": "3D2X1XZULWJpEX8MtiHBuq3GbkFmdsPL6zeSsLNSVbMnGyL3ruBqr7yibWYkJGoKMA4zBBM9NdkXcwttZkMmN5Sz",
  "key4": "2B2t2i9niptPabWDTzofDZCocx1kViaU2ykFxRRQQvsx6fUQS6y5JRy2h9Q6FCHYLqSASRjoHH4vjXPKUkeroMzz",
  "key5": "61sZN2a9c1Qvbqq54SRy3VXrqA875DKqq25TeCVZipNn8Vb1AxSiiZxaQoAbaBYXLkyt696BF2mLpsjQWhPeUT1d",
  "key6": "2sks6qJZ1zh2toRpFruB2QJVMGBaKnExAR8Rd2WujRJUK9QAdBk3WDRdcFfZR3QfBNchhqYZMy9g7XPYEm7MBjmj",
  "key7": "VzKuwcSzV7CdH6qd7hwSxe7mdPwFKHNgXZYafK8hVeyKQRimdQvhQnw14mKuryFhL1gNcErp44HCL1FJ43k93tr",
  "key8": "3m4fXioKDsADYC3YRfCxf9ZjXSgNpQKhExhxoKj4kTMNhDWA11Qw5Ezyw7wDWL6YgjekFJtg6SeeiLjBN4Eq3Lr2",
  "key9": "5eNRNUhzqMYSKHCTrjU6eX2xD4iXJSeVwabBowQPJuByoc575oRsbFoEML1W9jUcLiSK6WZkip4HKtfegxDpabvH",
  "key10": "5a6qFAhY8cuBTqFLskV8uhh9HYB4YnsS6gA1kmKQFjRaTsF8gsjWTKHew2K8zksBT62sotUFEb4W2PGGrDKyFaWo",
  "key11": "2Bd9wAQjVLxXt8h6BedtsdPuaW2wGcaqNjWAYkhqoNP8xRxrEzKbtu2VQrZgZgarD759P3xzm8Qn7JNUVzaiTAnu",
  "key12": "BF38MTbDvugPccfzLEp7AW4qVxjjr79as2QUDxG5pSccpB9JnxMEM86EbjB2uoSsjui311MUYAG3b8MhQ4rHkY1",
  "key13": "54Xx2HxHa6RmM8jRJMDk2tFKGB4P8FeJvUFPSZBXbGTCkbmDNZgx3nhEVCX99jn96cVj2iJS5g566Qzqwu5zF84D",
  "key14": "4u8wnmXZAs1ke58EHPy9CE4WWTDaEnnrarbA3oJ5z9XY97BpQeREhFbjNUpqsimKyvDwXtbD3L6yxZr5tWL75wRK",
  "key15": "2pWbVc9euWfL9BUxk6o3txjY4KxFZenGE5VqmrkbKQUMYANMHFHWEnzEeVzm8Y57f5y8KRj92yTyb11cr2cWBuf9",
  "key16": "64AJiK3rZHjFJyxpzcAKKNWkGJBvrxjSxPE6Goqr4tDvGGGYAoFo2oBizuap8fUQjK169cvcFhV9B4fNeFs6K7Ug",
  "key17": "49CAaymrLSyTZFjLmt13czJ29Zr7rPgNqTom3XaRUckeRzyQWkT8ic9Vzo8gGfngCWJhYPKbuQfnsmTdFdzan7Jk",
  "key18": "566qa5iGT1syuNsykTgeJZYN3d8tbXKNX1FvjDmE4hdz6sCRWsykCr3cwGAk9YNdAviRmF9AVvDBufbMziMsPRET",
  "key19": "4Rz4q6ooazbP32xcezDvUGt9fyVtZQq8r44hueAiKd1EcgjzvZKidEdgu7QhoBQmjptTCLYrhycG9UJpd48kxSu",
  "key20": "66Mu9gUdk4uxpwHDcaNN39tLZ87MJrdyca4NXPMv1aH1dE9ibumWn9H6VwxTEx4bRBrACeXu3Y8w8tbdLepMq4vp",
  "key21": "2EVGrf4ZxY7Tt9DRize9ZwzW8VMUxon4DXgzHxKCkfHcYJtgMEQoW31F4VXb7YBf1mEVr9BNTAtHh9aFgxM4Quoi",
  "key22": "4XB1XUD2hFydkQu5vBZRr9gEEi27gbZxx895mGvHNENj81UJcoMaC1Bd7u7fK2AaLxxpXXMqYYtuCYoRef1jan7w",
  "key23": "Sm5rgaR6DvfKFhHZK85BpATVM7xRJHg1u3shy8QvWmPpvgw2MmBdMqjpFi9JA3cU4uRvHVodkZr6fbAY2evbPbx",
  "key24": "2tgvz6Dww767d9ScwzVDRTcKcBnUmESx3sjLarThkZf2CKzfcnq1Bgc1XcrnG5TwL5WjZsF7M94qEgvzQKtu6icC",
  "key25": "TV2exGmLAAQxvLERn7tU6An5autxoVmGZeLkdT2mF59Keoph5senxLF8wVmimD2JFyp5aAMf54mt6YoBJpW9YjL",
  "key26": "GFHKSLhQqDAU5sWocGWuLiJPnd84yV68NxdM4H12EiVxx2kndpwp7Awz3GDMg9SnzDj3cX9FLnimy2ttA7QF8pr",
  "key27": "3oDAHP474SePES6gnFnMZGACWVQ3Sh5rfQZMMtpbAnJd77c8hBRJCn68TZP4gLxnQwm3UDgRUaZgjdpJKsMQC1DL",
  "key28": "5wLzPc73tmCTnkSug6uNh7oV5z3H7Qx1aGXZYa8TUD41sUVRL8Bgpq3VpZWaQR9Ld46QujgNPzzAvpcgLiA5Qvp"
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
