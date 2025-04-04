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
    "2cqRF1W9ce8tfqWFsunAfuDS8chvwtUeLChwqqqMQYCeyUGYQs1Y4UdQFoqzUcv54gfqssQtLcRAFKPDSSka6kny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SkmGkK2ysdnCT8Kj6PoaLiPE3C9rMBJyen5MQdjabAnwH73xgJYxPXMDTQLaGrdCf6agVMxBKPWXcnyiDryG3y",
  "key1": "5mmyfSJNwqC4hEeaqJARHfLZaHdC115q13kSRuk19Tuj57kgKdwFojgfrWi3b33P5Yyupp2BoUF7q1AWyNKT94cc",
  "key2": "3gtctNig7uS6MNzFTTVRHaxpa1aTcQFVHThzgBSTG9U3pvSq4x41Ccfu1XKqWYFovDHFM9zYXBGND1LvrxSr1hM8",
  "key3": "4987dUm1xY9VX8P1uHUnF5Ayw2rphum4Xr1XnmdCeYZpQKoo1PbXSwRi9zn7ernurQjrgVeckWNoUERxGafyUUiP",
  "key4": "ZRACbQJZvLBzp81coj8VrvFV1NBfDqYLJQ3Rfo5ZfUCV3MtBqc8BUStJXEXyXsJc65HYyocZ9xuirostk7x8GBf",
  "key5": "3o9XwkXZS6ycoFHhWESdRgyAFu3WqzxFf4itvxtGbvgLBmxwVmqAAS6a1prc6DF8U6Gae3thy4FG9kT4z5NqtmX3",
  "key6": "xNYhGwGETw3KGUSMyjRYykMLEdtHUppbviqKckGZNY3SMikGPtegyx3j7GqD5p9upepAvxhfhWw6jeziMC2ZiUE",
  "key7": "3mBCfr95DwmETG97rbfFXanCERuriXNMrbQ8h2SgwXfUMttiEgvBrQnCbwpEyyj8KWC4SaBL7EWUFggYKhcJhT9y",
  "key8": "5vDFvAF7jKpUN3GqH8drhaK7dUNVuRxHyi5z4yQkCWcC1MEkGEdDc13YMgy6Daj7YGWTiPudsMY3YDb5TTXxVn1v",
  "key9": "39c4reXyDo9xrHTHNdVeKb3EuUcejAF1jhbEr9EKYw4G9udBVkrvZ46gSLiCJMnr4uxhxavpuAVK8s3ow8rmT271",
  "key10": "4VFuo2gAU7EKwe5kVNwR5BLLjKj3f1nFuPE7GrmLfW7qd6jZts36X1q23sAdP5Z6NA9JBDvV2YCXxKjBqUehHNiQ",
  "key11": "2NuZwatKZbfn9c8Btk4aSa84JruzVtur3MLCnp5EUMoz8HTP9JEEs5QE4et3SM8wVf5Y9b4LDdJdipmuXr8LPiCo",
  "key12": "35pCSxFrgPp6HpoWDTzJeGPeVE8qEk8ExCt3ocE5DGDHX5UQArqxjrvnVKZhPQof5b8EDffLTHjai47c8RjdY4Q2",
  "key13": "2V4USQBmjh9xwFY4xP2FQRUm6NNyr5ovzWtSDuay31dhmVfsUyD1xokxjfizdM43mL2cbJyK2sYrqneoW7saqD2E",
  "key14": "4hkxwG9Lq9EA5ovcUjkTCxLVkkyhkJPmjxu2W4N7hKXKWZLBLsMUnZvh2WAeik1vx9CEefvo5E85sYPd3nrA4fTX",
  "key15": "2QrFrHrgopW91QEUuqu4ovpdafxdypfAtJHQQau3Z3ZMJSVoQ5HvVcnp74wHHKMgu84yq8HKwqPXfdqVi9p4MswM",
  "key16": "fgy9Hobtp8vyYK3L61h9zLgNR2bScNFAGPVUqwdtyafMrtMuVHkWQTirWCSd2W6Mx6z2qee4tEsL5nPgj6qdRpV",
  "key17": "5Vfjg53ozKGsYehKDtKBjrqjdLfQU7PiEquisx4fbJt25Zuxn3RuUe2HBqbQ1wbGfoc5ovcKNyPGLXpMj7QuFine",
  "key18": "4aAFvwQGMUgbZxFzXbYPqjnyFJHJa8jUUBWsvgHtHFvnACCeevRZyne8kwJGEomFusGYvsLyCA5xMuzSLwEZ5S2w",
  "key19": "5twr5LcuvnVpjpJ82JRTA396UXDHRBFbSy2NxkdHkj7uTG3nGJfDjDohnyNnjaZtaPwzqsV1Qxn3do5pozjbPnxz",
  "key20": "49r49Q7dyEWJbeXKqUHrMvGoPFX76aq1J73p8b6j7RwAa1B7xb5fPLxNo3o5Z1Mg7y9hRcGG3ZGALSU5Fr2Wv5Ms",
  "key21": "5pAqjchkVgbk4ckNCMLKAKdoNKvHijzSQWFvfTn1WKhRq6ngTy9XCKYzUmoSHjWGcRP2WBhYQqYnotbsnAGiLfQ2",
  "key22": "4RSPPdDkjvTL2V5Ufp9FEg6BPtn2wH8FjCc3tXEfUJtA1kdxRAMwJ5u5vvCMGbPa2kupeCNvGq88Ao9foK2uMSpr",
  "key23": "2Lfzz4uPR6PwtK92nYHJ9RtjqeStDb8VBUJDeMfNbYUtcxcn8j2aYDNS1cuxhVp9zKeDtvnNGv4PobnidiD3dKPd",
  "key24": "46bqyqz45hgCDjQSVPTuugvWHHmeGEfWhGjraewCyibx96nzv5DsK2r4fuuxKkqv6v4Lo2tjFpbZNRNCPc1mVvpY",
  "key25": "4iv1fXyrchXkjd6A5u19XTvEqxBxmGLNwiG6bpUzkbUvy8ReJbP5TyjpwdEjLTXgxmmUamk3J2FKAx8EdaM7heSF",
  "key26": "2W7r4FyomfDqgnRxoh9L8Af24cJDVyMg7xfqr3wdV5CUSTuSrxSTUAopcqavHXdVW3wxdMjmzgDmRfwnjkQ7sP93",
  "key27": "5WCmZaVEVTpQGx32Rmyc71qXyqSLaCdvUXzWENGZBcV8aeTdSJeSAduDkcp2xBXeNWWcNeQYTFtFKrNvWYWRgws7",
  "key28": "41bnzseeqiegxaHEezNXqWRksMFpEa7n3KZ5cWtBCetQ3RE9zjsUDygUKHyt4iFv77fePTa6mhCN4JMUCzgt7y81",
  "key29": "5f9SzGqAywbnXkUBYw5erjZvF1xmREoqWFdiKXe513PbknuSvfgKPP17aEpvhXgQnCnmQM4KUXmrUvVNcscZ9KM3",
  "key30": "5zfJiPmPzgqzDMf3kmUZdjeiw5tchgqi66hnB7RZnDAPCt1g49ZUu2e5fweSY3ygfULFCyeG2sVVTHUMjbAE5Sdf",
  "key31": "5ZURGbHf6TBLPKmq83v7PhEizHihqC15kvQXtMVbwQLLR8GQLQpZ1ECR6pn6MygbnV9vH3QtQJ9VJLukgwwuhFb9",
  "key32": "54QV6GZdC678wJQjhbF45bLD8UpvnWWwrPEshtYZ23MNbtcGmVAS6sguDPpM2UAgYxfyYqhSdgwg1MG4PgqDcFXa",
  "key33": "64kgUEQtao4Ep4BJhaFgJEBvHjHXQzT1G1R1GdbBwjjMLXtqXzDiNTj9QyXCn896bzLN8TavomSz4BM2hv2boS4d",
  "key34": "65q14xBCfHuVUwh9N74PFeGyooxjGCMMoBPNCwkWeWB5v3ncueiFadiSV5b7tgU5YAp6sB1trvf2xU6nmQEN6AQm",
  "key35": "2q6Qra8nytWsj1YqQ6ptj5kT8gkWdR6DNPLnxPb8J3fA3nR98XbTLhcAS1TwaGs7HAkaBaXUgZ6WTkonLjbgunp1",
  "key36": "4XwWj6QRX9tayfxVEJ4t42v9jLdhKRGt447Cu5dJQnPFALYUt7cJsJLirbRe3xJD2pXDAYZrka6PufmHdJUNt4mv",
  "key37": "3qapD1V85cefL2D7WC9zTYy1qEkWgJKaPzZdrKdVWAVWUsaWVTzM3RCFhzz71Pt6y6twA2QUdtfCJeqRrLxdWnCp",
  "key38": "heNJq9dX46kptYsT5fiSfUVWfXMvN5VmcwHzy4qPGouCR1KB9RTZX1kwNxhZRLztCh3Dje991c12H42L3B17PLN",
  "key39": "5yz6q4coB2Xu52EV8JPdWxJ5BnwUNWWzV1BZinYFsqGBPtvp8uPaqFEJTbgnakQDVW81o4x9DdjhU2ucBrX6in89",
  "key40": "3mnFtFk9jSvbdwQPo92bARKPft455Jvdn5tkXzk6saHBPTfoBeozxwHeX6CnVvVFx1dUSM9HXppqeYtBgmLVqjfh",
  "key41": "2mi5FZbmLwCaxAVH5nyHBXbjSi4Ydti7t9Xv5E9SL3guQ4Xd36a3PH2mwTUNzUMfRBrGhd6gmR8DakdUx5WyBxMo",
  "key42": "64psy1BuWKtxRHwFenKoQHmvqByetcwV52SpxrHVWKMBmanDYVydmUjDmq88VadWjifpUkWRzjGwXXvJD5GVEujY",
  "key43": "3jn1Mza2Tnx6ZDuovkqQFShLg9443g8ssLem8BRbXP4UNntXw5G2yK6rMGxGpcwN8VGEyM8KXsgBtDbusXb92qbF",
  "key44": "2nPJbivuDBFx1fmFnH9q3zScETu4MwapgeHffDAZGzjzSPGRUqsG7oYEJmnxwMjFPyi3PWSBY5kLjvdASj9Awmvx",
  "key45": "5EaReF1EBBXBRPMnn2gJsFk5Zs9for47izrqKTe4Q19c4ShCt98iFDRgaazhjP3iVazwReEw4Yz5spnxdnbKYToK",
  "key46": "WTPpjbz1zijdM94equmTNPaXbpg8zmFL8Rn3RS3xa8LUWavHyXoLiKYwr78ewXYGYtW9cj2mrjknDamRHUCu2pa",
  "key47": "3YPM8Nf63sN99F63NMvavRJZbF4BLstSQDJuE37YAcjvDNDhEc97cnu25inwRTBC4fmUuksBoMc8vmDzxr4zAGvb"
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
