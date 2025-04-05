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
    "5NKMyMsTaahwsuVqBCKAEPa6XnXKHAe6uEhTKGDGQwB7f4tYmrN8m9LRSXD2XfCHWLBSG4TDq4cioxcWXwUYdkaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAg6DWkNL28mBuZj2GtEPBikLVJRNcNuWy7Vggvydth23dRLpQxCmoSCVSZgeWnHd6y8tLUjcX9gYCJAtuUg9FQ",
  "key1": "5eRWWd8A3YWxthg9rDxNxZimCNwXQaDPwMwdd2UV4uZEgb1Q7avRTvp8XkkWBtj4CsLDjH6naM6dkKZKt3qrT7ud",
  "key2": "Vgb3KL44j2gQD6eM2VtoRXwUUZycsVSdM11Zy9sRjgPv8A57ojmbPmRFtLxDRbBxamn8Jx71g7cQzDQH2eqen4H",
  "key3": "2JJVxHB8R6RqApuLwHYj6VnAAra5BAxTgzwnpKWubQZdgLaNE91SJ8JuR71gX3qXBnESzo8rvc4bFhf8bgorRWYg",
  "key4": "3VRB4tpH5qmqJTxrzA5h6yBEg98ueSvfVBgVqYePemhgevCGBqhARP2KbFEqajKwLYcCtVQbiShVgu8gUkbMbiQU",
  "key5": "3NqNjF6eyCjTJKUZY7sQVWKVt2AJ3HvekSYHh173YXTe7fFpGiTtWaWTa2natvR96ZCH82dXRQDGNGbQ7oy3SJ9J",
  "key6": "5HBUNGJ4CqAKvKaYd4xrSYnMmLHaC7X9fKjphoxjHJuarqAgx5MusEgEsS6nMDgDejsBrTkT6XNyTEiNP8N38EtD",
  "key7": "2pNzqjmawsEdzKT5PuaQdVN43vASL3GoajTfoRBVMt1Btg1YpT33ha2QbMCVD4gN6ySbi7iEqpaFTCWsGwSmbXvy",
  "key8": "3AnJGLenwqVJxP4jvAa7CfZM2dGqQSirySgv6GhFySjtnm6L1DkNcAra99C4jjEmX4cda89UNEvzm48urtCpcUhV",
  "key9": "4bA7cGnghMaZtdZq7pvQTTGA73xkqkLdJ7t6GUWSZb9Y9Jw75xfmks7wD8zq35MYu8v7ewbTtPJLsiFj2jQpTanQ",
  "key10": "3HkP69fFbfDULHBrxSJ8navV7sxZYwQnDrwQV4Qy7nfJiyiLFcBnZ2ynKUR9VP5m3W3uh4N7jbTqU5sSzCsQiQNz",
  "key11": "R55Cr8ee82YpcS2eddkPFdnvzEn3hVZuKLEStjuzNpTUv3SH2xiLP6kMsxMAc6Atvd9Vef6NccqFfhByMj1q7ru",
  "key12": "3SSCyDFgjED8uSFAdvUdmG39mgPGjEF6DSxrdVi3HdCiVU2EZzEkRMGehyyqRK3HhC835jLr4asemFCxWJKHrScQ",
  "key13": "fswxKh4VUWr7WuVm9fBdwgoWZT8XxPzq1VdT8uoi7kqo5rBYQ6gccRj7JT69kFj8Z8CF4wAySdCeuTurW9CfeDj",
  "key14": "fHbFUFJnSfAHZVSKQvbLFRowPDbSd3tSv2BUyEUeVM671NgQx1PfzG4bH2NHwoCsPzVSUr3eS4AzcvSAEzewa2x",
  "key15": "3qDzndsjgmDuXcMTXEyBByuFr556mTAbydRKsd39g8FfTVnmd2hFkguV4pAE6o1k55MC6sWhfxkJhWxkxmbVsv5g",
  "key16": "3Tf6d3Bj1UMckCD78LhJZDVGgvMNvFoHiiHjDHDwdXUH53s6cbVgh9MK4BaD8zoEtKHJpeDntiEAScZT3qy5fUrD",
  "key17": "4SbR5FGdMfFQQkRmQWwbFtofvoeMgzmnBinNvgX1CH5coECxjjMsVNfuWy2FCPUCjrUqgfwM5uUkuEC4GaQQJja6",
  "key18": "4tvUhKJtpxEUJABxdYxtS91tkmD5F4wARTT4GGorg5USHMQavC3ypW2K4YsmvFyRi8HB9mSLMVoVFug81Q12uMDL",
  "key19": "5u6rVuwr9wvs1i7wJotw6d65Psxg1xs4b62VCHzUJ3oZhCAEwQgJY8qW7FoPsps5m7SL7gWWYEMR358SzgsFkcMG",
  "key20": "3twLQLpMUpJBb1vjBH5iEJw1C6Zfcx4XoX3VDYWkahfcqRtRRoWzVqaTTom8LuxH47XZU1MYnuTofZUxJXR6wyN8",
  "key21": "2H23wskuwBWWot1DWXoiWL5HHyCHXSXHtSP15r5mH9L1UTq4k4KqowGpaxZtSZteo8fKkhpzgs1zT8Z3PnE4RnA6",
  "key22": "2SH4oZLdLGSjm5wMxU1ZF3A4ZpkrkZ2xjFhTaWJQrDxDiS81z2gULcHuaPReQeEXybjfsnG8bAAdra1P6QeTWZoS",
  "key23": "4NqwGDwGDdLsZTJuDksjKHR9DqzQQ6whgKiWwFECLMkSHFa6FBTw8BD58hUHJ4pCShMNtoktxjX1rShZEKqvPppL",
  "key24": "4y2F2sFJeXA3LzT1RD9YGG3cyBVh7CCHKfzwe4Q7Wn1FE2qmVeD3bE7R7Apt1YY2taYDyvEUYugEWwJHQh8L9B5V",
  "key25": "EmHmzBKvqjMtzyxVJPBugVEzo9xpVG2PRixubjctqjj1sF5v4Ube8mzPhrEuwF2uHLpTyMmw9gwT5jH6fMbDaLf",
  "key26": "5tJRegEtjCqdWBMhS4h9WMZafGV3FeDoGmbZ8EwQ6gmiTxX6dgEJpPhrgrd1UQNrx3MQg41SscuLZxCkw3ePY2Eg",
  "key27": "5KaeFQiRQT8MkNLRFD2fhnZwh2KN3GDXC6qkDHttKdHvKhuSoJMSLbLH3BBKkWceS7f5XkdJLQyXmziJVMHTvkUT",
  "key28": "4fEqFWeEVwki95vYEY7FnuApJgkWia9EF8ayiqJFCcCjDCzvKzBjFvJVjMEevgi3DKP2i8r1R6SBCRSn1RxbNqPr"
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
