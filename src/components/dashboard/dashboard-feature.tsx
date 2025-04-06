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
    "3zcyF43Y81rUU8pMHvBCLuH2qj27qdzxUXNQ21QMe86Ldj5d8HS2j1gwYBABtN8PjgFatfaeyRJuyUh6LkmzNiBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFRyyM9VseBvSqPExGSPqyisKQjTvLRDoBA66PErHqhuzGN3WaYinHutnQsxb9RJc8c7BB19YY7tHBUMTJ3oFhc",
  "key1": "4Ln2LjDzXbtFN8SbXUJwTT4e6MHHXHbFvqDPjvmRGRRFYsNoj4RCT5QK5haPSo1uRd3hD4BCfMnRmFNrJVETC53K",
  "key2": "59zweJ4MzBoYnBoLaQWdkzhMpyWE4DNJeMD9soBfCrmfDtMgc7qQqarRMRWhUjbTCTbQq9o9Y8KeUXK3VYn2mLZb",
  "key3": "356FigKAvpZoZyeNv3Cr6j36Jav6DuzsLkf3x9ur9wQzGFSBj7S7gY4hcPxFrvHJLZ6M3Y8E1FFe5hCMbnRtbcMG",
  "key4": "283aiS6FJMpSN4rFUStMMQyWTEEewmxCEVhiBiimKn4YkkKNFkmwTwMaoxxqJS8f1iuNUyznQBoLfxHxKGQbGEqm",
  "key5": "57PuKGFJBBDRTxaVzPdFn4nkSmxBJKu2yNurUdy9eFkR7xgbFmujgCQnpq77FMMm1fphYXFrqxAvv6NvLYqFjHjB",
  "key6": "4kNkaqGQDkrNEoNQWzE8YiLYzEignUMbBhwWkxNiU5UV4gBo6JKJfiUEM28Y2RLgs3NfK4BXbyHkL2MvUAZdg13p",
  "key7": "66bWWMWG772wr9rwzFuxKwpnPtV4je9uQTkGoTSvgPQppA8dh4qoP8MVW4HajvUW4EM2QYBevNgZgEBsovGe4QxH",
  "key8": "LupxjEGQnFUbFRzbk6C8Rqqcjn1KzAMUXY5jJrD4EdQnTBenAE8cTtZMZpmqdyLuk6RN5baDVePgZM8HqRDWtVZ",
  "key9": "Npd4G3gn9EqvMzYzWsPGBE3WoJJsbWXRQ5quwELbHBpNskHiZ8bAumr5KN1woChmZkgkmywWdGhpaRgKpfc5C8a",
  "key10": "43iNM33ZZoKhUKxnSuML7x78byJZ1MhBZRKTSdUyr2ibWELifB7y5AUSF3cgFUZTZ4d7QCnENB32zm63DLSKJP4V",
  "key11": "jApmiQV3prntjdP38baNYvbDDCYyEn8GJZU37z7DwYffTCGs8ng7CGPH1FATyrRJsdpR68nHQWFHE4F2LQBNtHc",
  "key12": "4qKA1CbdFMDuhxvb9aDmuL2UzxsqjNYd5WmGWqLhqjgABbZUv886JbKB8ruKwGcPi8zYHKoyUu9Agiv71HxpJDnL",
  "key13": "4NaJEizwd1fXZL7QUa96VY3CW1pu8sLSWFAj6zWbVNYxhfaXSqhMqgGwuR7g6JEbBRv3mgAQddZJ1eXQ6J4TfAFu",
  "key14": "8ELBaKr84gMYBdn1E4YzGpGXn2Eq76UwiY7RfAH3zyHN2WkLyS5vGfGmCzHmArRSbVFDML4Jg6DzXU8wYWxYiYa",
  "key15": "4zPRBovz6irc3BUv6xay1172Z8Mh31LgUcwusWrNRWodxLDf7V9dsBJpsCLS2HsQA6obWaQYLFQrihGRJy96Ta2y",
  "key16": "RSRMtVYLDXK8gKyAYQz4HfS4K8P1BGVShRNGbHhWBULx9VHxcnB6PeHoWkEFUwCARZw89KBrh3nJDk4WZbbpLJv",
  "key17": "4bdoC4om8Mu95qkmjfH3NmGTjQdR82Nk1YfaJyNb9FaBhoAw2vDGVqpKXhLRbLMdcnWem8R38dGYCChCVaE2EpLU",
  "key18": "62fW3VAbUNoJphXS5LmyANVwNsgd2aimPVrZmZJ5Nq4unfQJVpSmu36vbvy2JtRZfRj9bVmp2aNMDsN6kabuCnra",
  "key19": "7ca1mbYzLJUh7kMo4PJwDftYpJSWCfWLsZVr4WLdLZDxvg5GHfHFwmfbM8n2MZ1GoRzSwnmTaraxgFDSZ2fLQui",
  "key20": "cEiMUGYuPR9XbSw2Vn4haKn7hDcAf1m3fGMapZeG7wRc4us5DKiCCFuAHapdng1xNcNz2CgVMeS3bfTYSbnsjA1",
  "key21": "7DyL5i5RnZnfvX2HkgQZR1w3fKqA8niKGZzwybS3dhNy5aohkEnNcDhbYEHpQt9KpapvySrpx7fpw2oYKbxAZ3e",
  "key22": "5yLw33ZKWducY1atvLx5LT65aN875wdxQxtXSRL9huXvZm1L2RqUgrt7nbp7253NYm23P6fxuouGMGwswjfLc8t1",
  "key23": "T5eV1XzqPHnSJ8HukN77cH3thcNyDpcifxHiw8zSACQL3GBJHhvpEEeEACj4AkHfV8fEn6eLvCPh4EM2PHvSKQc",
  "key24": "3RxSK5dFXcMyouqTQhprrApTfNVY6PDuqpSpye7BFigVLqYqXuZZ2ehPuFxKWiNntRkGPDj7ivgefKnZTBjBoo58",
  "key25": "2TUc3p72aiVhjC9Auv73pAUuPfvh31ftVxasovgYUBJATb49tKbpeMouGDc168wzK7NHiuvzcEWDC5TDR25LXcCZ",
  "key26": "3Lp4tsu7URjgtse2sp3mCHUTVS5n1MRMLpnATnkbCRapJpgEncBU5kUfp7NRw2Y9UsfypB9SWnPLBR163oivXvK5",
  "key27": "2m9zCCq34NqzjF8M5uAThd95Rk8eXUqY1ZzKfvds7BPFbSGHh63qbbv3Fp9p1knRPTb8LfuUWY478EE2zz39mdMB",
  "key28": "2jwuBZXDGSc4WCbFgvJ1qiQUUWmhteLDh7SjeWZnXus8pHLu415icNrHJH3sob3aF5FCAY4fR7XXHnPXEVnA4jKi",
  "key29": "4RMcgLA5qDvaM5R1bocbsjNsR1i1VS7cBKkMGdmjeXmtCBdfQZXdR77cKh4itXShQ3Aw8rxizDuqaY3ieX29mivo",
  "key30": "39JtoZaLsf6mTUMfLphiAQzHLN3PSgZpMiHeJWwJy5iTHr9v2ySN9ZKDsPhHi2UGus7ThAktaNSJ7S514QjSPdrK"
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
