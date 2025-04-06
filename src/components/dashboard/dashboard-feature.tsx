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
    "S3rxxoSC2hrqHztQ3WTQSJAU2umTa1raRxK1c96QGJgA2RNf75NbVf1NaLzgr1jA8WHEptyJGT5iLTjg1i824sF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrtyUjZpZkD12YgB2zcPpzPitncZGCeyY1ctvfhhaj1nyDNuHvq4mDErUJ6JdevXrfPBy7X4RvFHpcYALPSK8uY",
  "key1": "4XLgxLdbXJ3YzTHRCg7PPXUpGcqVYWmkX68HYmhmS169wyix9fbRi9PaUSLyKLMWxyiSFZCHeE9SzxxTcrA5eCKp",
  "key2": "4Ss8kDcjKXEWJ7wynyQWm3p4wRU4qJtLsNr4r8poWYhr2qSCi32P2cgt6gshnWbqDUS7tDXNFJxXz5to41snQ6gR",
  "key3": "2p5eEcjE7CW3AZgnc4nXwoyYLJhiaYT7RxeReRfGCJZ1MnNefMN4be8bThKS2rAL2vLBVz7mSjyRbSpMQau6EvxK",
  "key4": "xaKnUEPN3J5be8f3DR4yQ2jgzUHicraNEffVRCVyX1MbHCPNtKK4bpotL9TFxPrczF9ryZDzhbpoPiEYoKLwNjK",
  "key5": "qRHK8LJp13Ez6dC8w5ps48FYjxSD42YMb6nz9Xnnz3XsZVL3NCyDzwKD7YR15PoGB2b1csTuUn4gBqhuxEZGn9x",
  "key6": "2j17H9EAkjiGhFRmn726o3d6yYYd2zSFmMAL778tASvWp7Wrt5a7HPmCDvgpsH2HF4r2YTNjEeoVhG7QuXWe46xH",
  "key7": "mA9FTNG4UZFLWWJJP5HYjC3Ufv7jQUz45GSWDPx2r8BWWoWPEdhS3K3exhfz6j3yWaFgJGBuHSUXktBeTARqAQS",
  "key8": "49wrSkJRBG6XMLncQGPnnhJsNUv3MDpCHUrNeQvpha3EW6AknvweYijHezovBG7AsJrtkVeAvSp6c3izADveA1Eo",
  "key9": "5CQS5JnVLDfnfyt2JrP96b3jNPCy2xcWoy8if22Hi2GtUqzzUNgofxzvHz9fehvD8gf41rEm9dgpk2HgZP1HcquM",
  "key10": "7CdgCj5octvKdDan1NG5JPNLv6KiYEDHkWAxPp8tLqvKXQzDJoa9aYVhHRsBqt7jwVPgugJZmUBUPpeYQvcw53f",
  "key11": "4eMJaP6kWxUGGaEf1dTHDWubotq2TEp98nRCTfFFZZiPLur52LvtMqB9knwYqRbT62k3jaYHZNszvSZzjkc59aWv",
  "key12": "5qWHMr3gVuCzMjytPWTZv4MfZmSYZRGxJ2E5KoEu8T8pVK8VpZkUMKncCXu3J1LtMy1WV967YjG2yY6ftjFbJJ9C",
  "key13": "46kQmqyiphewDXuS9AijxFHxPU2EXoXJnHDViKdAQ9Ui7oEjFsWV32hJNqxXkZ3FJTspnsqMyz9TG9GFeKkftrAM",
  "key14": "3RpQu6wHBR2p9jBs99MuCRJvhw7uAeS4WHqGA4Tj8gpenku4829cNKjmTjYMsWyEkaujaDE16ikKURD4pP56sSw9",
  "key15": "2MpVq7GEbZ5KSCkbYMxo6wATRQvRnGPAgq5PpLpevipjryxEkyJFxVg1ACySCX99nP7VdPDYwSWSAQkk597Gcx3b",
  "key16": "2ntFga7yNSwdkrf61aznfFB9cyz4Qgss1eTnMvpZtnr5QzMDRvrEu5aMVjmSrWHnXman4bz53m8inqRthKuiPokq",
  "key17": "PbiwCiqUegTZP74corwUuZ3dFG87h4upZAx2Ke5UiBLCvok2yhh26KqY9KuuuAsKgGjvRbwkV8W2snbFAwKXkEE",
  "key18": "3c5qPRypWMjFSDLKnGUaA2jdcnW56MSuPUDM8PPxUWN91MTQ7RrVhSSjDS1ni4aoa65fXNf8BByLGaduXgPcJ4Xw",
  "key19": "36xV7RH8MMivR7AAhkkz8BYynjCUjvCEzj4rzwuTH3LrgB1aoYEbsyb8ozunLdNHET8reBDFkvjDK6nFutZmn4Gy",
  "key20": "31JFti8FADxCTAS3iZUQ2ch7BZUkxkf59EwZ3AFC8BtGXdqLdmaF6RSWsFDtZkvCxSa5kvLVNCF8fsETXSYR1vEq",
  "key21": "2Sky8UZFYD8uCjzDLoAynwUJtT7UAvcLxjhSTQX8qMNe6ZuNkdLQqVGtdLGUYPdu2T7v98wVXRrecEKzQuyhAj9E",
  "key22": "ES4R1yJzsXzxAdFwXNdUX3q5nS62Rpdmifa3nXj5VeDQJGvzUZ3Hzg5kSBXecHrachc7WX3XyS24xFh2ZQqdjTX",
  "key23": "3mpC4Vskf3fYpVbGcmbjtgzsgrVw4QNoyM8zJ2PdLLjfi7DeXE9Ge1cJ56XnfFmBvS19MHq2evs3ycwv2iRouGHE",
  "key24": "psivcA6Py99sZSsFB1qsEmBk6MFofka6mRjiGgGFmykC3ne4yqenkWLD1c4TBf6mMsvDXRJJZdBdFSigtUH9vPi",
  "key25": "5aYruPw5AGU1J8MzmsEFXJ4u36USJwQA253Dmimcxju6k4ir26wHCduuJDekME6EsP7DSPbS8y3AxVyHzfJTCmFT",
  "key26": "5bfvZhpjz92WTYWKv3oLqq9K2yBTDuvSYcrgw9yPFdEEk3xeFgicMSkUsYk18C5pDgdV3kaSi7MhNBvw4zZXP7zo",
  "key27": "67Vx8JH7htocdhxVzSMVbBTjotBrdayRN61swauKFEMdoLh2tST4C4nG5JAJEWJ4bkNjUbHKvQbS1bfmfdiNyCQ2",
  "key28": "sas2E7gXD23AZMmtyjdWbDaonRs3cxQPjefTTh5ifYQRH7BYD3pNchq4s6QJzW7GFCocyEur4ysrwMMhJ8XKiXg",
  "key29": "snDhzcay3U8VivdQWGNa5gaXENv1VhomqHbCN2o29JzQwFpxTKtW71oTvZeDX3w3VRLGsm92kqEZBXU6VjbUBrh",
  "key30": "3QxGn679pF5wGW3dfGtc6TMk1RwTve9ogonkc7YCRpNs24mhqCVKyKarjTymavXtxavUmd4941XJc6fK3afYpwoR",
  "key31": "BR7R34snHAvr8YPge6eZfY75EyMWyxNB2xUcBk99xNgBZFw1q5zoRz2xrLEgavwy2zrqY3tyhwN6x8o4kh96TXC"
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
