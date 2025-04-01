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
    "cxthUNhgTatasAm2jzyogsvk2DZhXwoTcxTHtW1xShqyeTxtiwxFY3ZRzBeANhgoaA7VJKM9JHiKGpNm7GYPriN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djiSv46u2RJZBpASPUoMxYjZUppPc8kJ6YQd4HaYj8jjExi8SznhLEYtAn6coE8pXZPpScGiGfSXBgWVPVpP6Tt",
  "key1": "4YNXRc5iH2aGQBpRb9CstewnZCRFtBkMZGkgYPAvDX4gRKxBTi87uBHscey6pSFSGWS4E8S9BcsevWR3XNAGs9jE",
  "key2": "48N9HRuNTAdJVbFSWV8BHt1uKoBibKKrq4FaLEE8iHsuKT1ZR8hV35cM5jzN936XNSmzJAfWzL5Sy9UUCHtySgRA",
  "key3": "2FxbZm5Pf6mgBkckmVbBdj7zEW5JysJsYFVw1jUR5aRzvKj7c23pBzZsLJyYa2xA3YytzQzrbDDGpN2VMt29icE5",
  "key4": "2Zt5LhZRsHcpG4XzM2wo9wV4RL7pHtfDx73LQVpNtpMzXTHSngQEkLRHk2bNRRxFV8men9H9TR4dhek97Y5YnrvL",
  "key5": "nr3E87ZCVmR8setyG8weN9i2ESWZZg6pg5LNZAW9EaG8qbFreedad8AQ3iLgsxfVbhcUPwamRA2oMyPUFNwHUPE",
  "key6": "46gvxhcxdHK2FBovYFReVyfGKTDz8QgDuC64Wk9LjM1nnupzz9nwwhGoiVohrUnjG96SetPPibUpTuAkP8ztwGTW",
  "key7": "p9rScmajdL9DxNFgFQMpQdoWmDEbSWdgrYWxRfnGW5dDRdnGR5HaTGqTV77Ba24bFSxJFCdGaHQJqyJ8MTt6DjK",
  "key8": "3sLxp6f7ezYvrFRGzuVtYQSTNc5vRkYczoD8UvXYosxAfg237mXvX9RfPCHVHQFQfmvPcWUiZgecWwh9sCYCnxw6",
  "key9": "PSG5NxpFULiRKKtoU9NGRKPqVnt45BtscDBsBZ78NqNBGKguRRjevNjwkitur6aCKg3rXdASEeTj7eC2pa1TDaE",
  "key10": "4p5Ft1zzndpH3G4XrXHWiVsjHkHRaN6Pct5ToHCrC69taeQuusit1N7kixYweKurmz4PtLkWLEFJYDiyV8eZ5JRa",
  "key11": "29m5HeZfCy9yU8gNnAGk1qTiybWWmr1woSkjutFhYFDQy3ZBN1RQCHQp1mUG7QyEHmNyfbGfzyGe6NS4Z9wh4Z4X",
  "key12": "2x9GXNbnW5cYAYyQpbuCR5eWprVUYz1kraM1L7wQrJLXQEb5qnYfNPTCkmuuAEqmMbsW86AZ7Y3w8nyZnU3pH8tb",
  "key13": "5cPd4NtM43ficFm3ivbM44oxASfyQuiPSMzNP9Sq6ourFiyAUTNp63NgmkY6kDJ2svq4grpnJ5CpAigM6wyGWN9g",
  "key14": "21fUDcxc5S8Nj7q1B1Sokc7eeN2RmHnUzdyLKvCWDXKEbRGxNcxCjKGEQz4cHxGRzyQRrxY5NUsgCwVvNr5UnZzn",
  "key15": "5SUtWu9zbxrh6tiLvbgAmGT58CbkyAY2NPQ7UbtA5wpYMzCBbV7ZeSZJpwHhQZ9bNFJPZHw9x6Jusfb3B2pXtBHD",
  "key16": "2gJKrpyqDKF7BPBpM7WCuhGh9Q6Jj483EpKtZydfFZYQGzK7HjMZZ4wgNoWbRjpm8MkabKN3Wk7x9DzccENrAGCz",
  "key17": "2EE8nh1QHXRrqQMX4rDv4HANaXdsFmpjvYRYpu7TBmDq7z3L8R9LmAmFiZjifpxfMRcReJeviY7BUBP9jad6ude3",
  "key18": "cG934J4pnNUgwa1RK169hDig5aPGGgWhKddnk2mso4Qo9rxH4fSzQjtZdiMxcMnAfmoT99kZ2dCcA9XE744DVsv",
  "key19": "2iiRckcq8Nk276yPn6BNAkxRTQyhEeSHbJmFtSWDUAGiRhbPv2ef65actkDgeDZFzPgfPuvx89392NzAD7Zypefc",
  "key20": "2oTi2d4kmUZvp9zwDJMSVhWFzbZdKHVoNYzUbfbWxnCnSk7wTZc95v8Vqm6MBxGwYNLTLgpSwAFUSfjWepqAoaF4",
  "key21": "2goEbNim8kajfpwVftnnRt9Phbxhq7mzMDWHZFnLJscFpeaGL2i6xwCQNcTRwZs8b81NtqnbAUPWpYkn9Xgc5CWY",
  "key22": "5eK5ejHkLccHA1ADZMMoi4RyT6CBGoSY7K4y8aubU6KxKnf6GeFVHFKadXrnR3CKNUbAWGjALJgia5BgHg8FDRFS",
  "key23": "5nxUP3g2JtZzMyrhDnXqYgNF4D4N66AebFQvKfrdy6L8yhKTzKvXqNt8X45oVG7C1rmi8kSFjM9eEbXdzMacH322",
  "key24": "34jGxgjjViEy1W42RkEZorwiSoP3LYVkfGFhvXqZcmm3BWaHNv845LhGW8TNwdajyPYfJnpLij1aL9NVgL7X11hG",
  "key25": "d4FePHkq7yH5ZwXNrAdnb1gAEk3rr7js1361k52TFDcSn67FHkyBvn6utSMJGyju7zaF5mH5S32Nb4chq1a44H1",
  "key26": "5hq4kWk64NjhxAgasfmmSFj6M1PE1G2i1w8cz92tQMGxbbJKfec1xpN8fmGvcBMRbdF54VidQPCZSQ69j74j8Wmt",
  "key27": "5sqTS5YVbtTx84yGJ5HP7eqtwY29aRyDaKzaxYYVEUWue6VE8UVEMuDz15Bm116fVmgahShHx6xiLs44oiHoRR1u",
  "key28": "3mmS9oBZJJXKDwZBT6n4VUes48yzpwjobRgF29c9t3eJ6HGdsuKPPg4DLG9r7jobwAyNPyLYg2MNcgSpcNvHeMkk",
  "key29": "2x5nd1oUo6yVs2A5B4Bokk86Hf5mfWSevJGsCQxpxeMWuRRiayVtbNiMDJQgbTaSzezC8Wu9gshh8Wk6rpoPWYF9",
  "key30": "x14ueoLhcsUvrCrpWgPVDbbueiDcXwPU4JBYbagRnHy9cmPzgJzFaphWC7vSMoEsLQ8cktJVgAFiQYDAcPMk163",
  "key31": "29f3Qi1HvDvsBP5am5DEdo2C84R4R3L3RmxdyTD7yV61VpLnC1WjyTrzA1yfGaTBgwAvBkxHj8CHjvge6mNmzK6e",
  "key32": "4fADrqZovX7dxiYomK3pDQ3r3UPeqYx59jGiVDZMrCVqzT9D6tFBHZSQBbKMsTuCjot4TuxNNWPcr414zjUzSYJd",
  "key33": "2NP3z8GPnkjNbcZaDGyfxSKuBGATTcHGSzBCzTCs2cBkHJWSHAtMza64zvKeLfw9HJwykKRrpzjiPPixZ6CaxrwD",
  "key34": "3RBhLN7hKCYtCcDrM4WzL64EyREHA4vGgsDKGPCvFQ6NFmJnkGJHWiUby9M9LFUUYKq9j7FHFJcTYpJ6tfov9Y8j",
  "key35": "4ojDtDNRZaJcofcKHiNxozrow3kjTvKpMCE6mU3145evKbakbmUwWiZgvRMpHcNeHis2A7RTJT42JyXwPdgsKeey"
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
