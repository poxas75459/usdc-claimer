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
    "47tLzo61ZsQnJoMtLYTdUXGNyqZBYntoposBPu2fSr2P7N5MnBLsVxStVAJMob1vkgVjki6oypyd2k42xcT71vGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LC6N2wbRE3G3LvpR27aqSFvFXSu99494TfVpi8GZBsDQwrCDR2zqJB62zgCyf9wjNm69hHHghmAJvACo5PKaiQK",
  "key1": "322CJD5U2tVVU3GvVtAe4H8Wcqa6apjB562kCyuptxSnCdVtMy2zSU3CgebnEp66npGgZLZQwNszYsYTdfESDm2q",
  "key2": "5pgh3YdsiCjY6JhVPArmzp8Uoea6HnmcBeyFxTdZw1tCBUrQsXsqwbkKhqEFfqM25Hfg8PzeN8SGcpLbrkAQLP3v",
  "key3": "34wpvkNbtY6gyW6UZQAuqgbFbDHPfZSEC9774f3xegUbRGNTJBRKnxW4HAjqr4ghDR9iHFhmsdRA565sJFgNq2kv",
  "key4": "4MKKfwD7KfRhByqts755rZFbAZGxV8bWEBgiUUemTuTUt7KU5rtXcQto6VeBFZUVg56n4TmS1GYdJBCx2tfUoSfp",
  "key5": "hbZtiw3oStm2sXKUg5AmWqeNNnra4BnN2uwBmxZkywko45R1gxvZiqjc5PbdxYAejnd4hZcFawc38c5jhbEogYz",
  "key6": "2b8esgmkaTjPaPm7EwLqxXDsEC82kktZTzmfaygYQKe14yXvd1tUHTJjdkisnYBB5kUNzLdm7F6gdwmSg9EeJ1Ss",
  "key7": "54QCriomdkTtw4QS4Jzt3uayCrZiFyw9nESbY8dy5SWzb7dMGBxFDUXnv4bFnaEiK3Be4hBi43Sw1JPGsy7fx6LT",
  "key8": "5XWm6aWxwHKoAJghRhu8HKqhGeekoSL5djhwCgDGFe5RjvMPbv23PFYRGCjsjhXSkAWBo6aLrimfkyKx2BoB7ME4",
  "key9": "4HyjLZaQFhBHDWDfC7kGa4usfV6tuPwczsFBFwfXNQmssxgVJv1jeRLWgQQC26c6GKCHntWZ64YCYPBs6pJvFF8a",
  "key10": "s6fiUHk5TmNf26HMm6z2vT5ruyPFwkdL9ayBsGHRj2ZTGBmpeD9iWnQqXPPcCsERbs7AKMdaDCKD4gMFgJUgVCy",
  "key11": "5apWi8XfBr41VMTK1o7dgzuJAScqD1eueandbVJCzUVU1migihGHcQTjdA8PyLUsgm8nqV6zfgjWW7ACVXBfkFx2",
  "key12": "4K5sHYsKa2QphBH4dZuw6KefWNYapbVBpsiRiiVybNP83aEk42CQWzGyHvinPadEvnaTmNZaxtboR9GHTdHzyDoe",
  "key13": "2DzG6WU2wP8tkKCY44MdeazJZF2E52A312JrbCoVK72dgmgLxqtXj8qBSG7w4Nk3U2CDFKzDC8CgLqSt2WUPvECK",
  "key14": "5cDowBfi2XQPeifPXDNKhLAdYfehaDyybAQ27XvQzC3CkexYttojVWuxBM7w1LKe3p9KgFTyNh64nBQgv7TJngPo",
  "key15": "5PkYGVR4dUjcKRU5Q98uVom2N2jfabRJ35dvqvxHpKd2tKtn2qYmt74f7n1kBL7JHEimFqUHuELpDKLujzs1mfCi",
  "key16": "3DrK8tBWaHUr9AiB6VUsVazxCHWqR1E38wNoWf3kv9deY87RXF9wTb55xpHuHxAf3AM6meLwVRL9zmcoFgycEJq8",
  "key17": "3FKSdE364tpj51FXJNFsX43hUWtxdREemuvdVzpvd7ftfo42VGpNNQGWnUzvHRfsAQBMPWXb31X97ffwq3gPRWDr",
  "key18": "gT6QEPkXzqwmGV8CiwzyFhrVMkrGYMEHj6qwwVmMdfb9JxEWWHNgigRDgvRmfh7AJfzDfUBJuXaeTCphoVxx8hr",
  "key19": "4DVYHLcYxL6FTGEkTPv4SpA8qqC74Fa8LeEg9osDq5y3wKqRrXxoGezoteMK5Btzb3F3ArvuJassFiYV1CFLoyWw",
  "key20": "4hBbNadYjJT6txoxMvxFVZ9gGMtNWfnGcpkVABp5n6pBwa4RWboaYbTaeoeEoanNXyLAX1TQSpR6MkCQj39uH3oK",
  "key21": "5swf2XkXtMGHRmz2T4pmpaZJHsnCVryk65aA4mrJKPRyUyf5ThX9sonyJLrFzYVjeSpJuoSfeEUEBCp75LohERsM",
  "key22": "FZ8vm9a4XoexiKLnkLfW9r6nFDXdoSPjB1Cgf5reegNPBaQd3GRt2BnwYfHkTFnJisY6tzyP2SnNVCffTcXv3Ui",
  "key23": "3tnwcmP2uG5UVAYwWmPQCvfM3N5L4d65rRmLB4Egp8WsWdW2gcus8Kpg9afkGjYvJ9DjmpXFTWXYHpjvktk6R2DG",
  "key24": "4AcfJCkkeD7qwNMMDcQZmwpH3mxLL4FMtqKBaNmsaKECUMjqoBpogSjGN79HDhuBh6BvWgrbpF66KyDZYN2NA3qf",
  "key25": "5WHJvxi7p6juBXjZNutKMTFdyfSkB8GnaCAGWd5Sucmw7B1PfDpEFbbYjy4h9hysKi5FgtcVwQU9AZLreaxpTAUN",
  "key26": "yHuBkxHvhEGYELiubYawNVJ4JsrC3JJXzmi2j7izkVSH8TNgURuiMshhyQ2FU4PwEgASFoQyrvDZ4mLTgCCCS7j",
  "key27": "28D5eELroc1NP6PfXuLxhDFDeE4z3WqH7dPkFmfCQBZdNYp3q6Kp7CNsUGSHv5MBitrj4yEeqhXozmpK1KgeZPX4",
  "key28": "3pCHsgEpMT7p35vLHnfd1aNocTX7AhcySD7w9dF9rgMmY7RAwpUNk5JJkpNLZuDbtR6mMYETpvn6TPYrxaedFZ99",
  "key29": "2AurBXQ5G5dJiuNwqycL9g27NTs2VRuuxPqekMBJnqiqtM43DhKfktymmbdKTwUTD99BAWEpqT1h4MadK4Kf8pNu",
  "key30": "5BUqXFoUbjpcB8ruBXTEEphTp4ZjYv8BuCsEg8jFFDvLGiVrnBtmFPc3n5Gg9bfzB2EtpjrEkvYW5U5h74vmsgWe"
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
