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
    "4qQSU1VKb2wH6eo9wb1LREZkPjR6CnASqApRHJwT1DuMtvf7FkHxbNUi6h1cU8CWyXmqfmC7CE8TTAKQdaaNjbrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqVqPARgvGuoS3wRJAafeP8nbREk2nTzYkJ25KeoiEqMccPoYyMuxamsst57jWfMccVzTG8gkPZ61hvmVhNAG4V",
  "key1": "2sGNXfnrB4mdAPd8dH9CWq5yQvP2ohj6dr1xGYfZeCrjHjAE8y3XYMA7So8ia6BkcKxrZHm54Xp6554MWeQnALWf",
  "key2": "2VYBLjdTj7c44dmtrwbwB8zzfPmgebnZcvCkPekWDQ65AWeShj3A9msMJXHPpJfjrJjotqbqXYCzAZfcxRMfkWEC",
  "key3": "5k7mKnHQEdyMmSJfzBAbzrWmYMpXEFU4nP3Csi1x2jArvN5aq2s8H4HvNaTHHM9fVvpmVBN2Ms9cBSatcnK14iur",
  "key4": "5fdMPBqC79ByhUc1qqxWXw2jpFCTvqRkFK41wourjyhn1T5mcoV7xZZGb4VQfC7wbN4K3Keb1oz17kWGQt5RTWDn",
  "key5": "2p9CoXsRkh5W3HoU3GcK27SgqvCcVyWwjahZayPL1PataTpCdG3tdkkNFWk7cMC138jkAQVoAUBmDQcPbU2PMULE",
  "key6": "4jZGS6AzS8ZYs6cRB2o1GqBucpw9xrNzAJrYYukAKx1Vsenqbg9UYeVTP7MJcTHHkFtwPoqM4SFKrTCeJMgm8sSN",
  "key7": "3WaSiwSdshxFD3cfT2rnQAPuZm947HpB69vPVupQM46PVyBDs7zbD2evhPNiHaAhCCr5turgRzNkwvq9Us6uZAXt",
  "key8": "4EtsuJ4Emj5Yh2iZqPfwnVspu4iKvkeTb9dLGkDKnG4QrqdkAzvcqZfgvCP1ZdCBrCANo8mac3qwWh5kB7Rapvtx",
  "key9": "2U9hka91UjLTYjimfsdxG4tNgS92Aj55uRDC7StBCQSVm6xC4XS8qRH6hZtSoqftEaELCxS7UqRrWaomrU554d5Y",
  "key10": "HPo4hGNaVZ2DEh6eW6WHRxaGHdAuN1R1WDfCq8saVcGaNC2qpfQnN375QdNeWCoWrqyjwAGkEQ3iAweQWBw3RSw",
  "key11": "2EC9qmSGo4a7PKFe8fhbTqzmQneBatMnq56ymsUcUXwmZpy9XaiBuEMpfC6yZrFCUyMAJ5tq842YJ1Q5YNnu1WZK",
  "key12": "5F1pAzj2ikYPU1DUTZhcFgG1qfkwnQ67nTcg2RLWVD3Qwioo1bZx2AmMKd3BcNE9Z64xA4KHasFKxpVNHVxJ6Tpz",
  "key13": "2ka1df7RJz3LEiPwqb8fBrRiuit2XRS2isKcskniwN3YpejQMNUpyLRRWapT7L83mX9bbHVWkaW243S3vT1UjRBN",
  "key14": "3PwjJTG8EH5pd3bt8BR8czBvkmMyAS6ucM4x7PTqQiDD3CSHttqNo3EnU4catxx4x4HWc3omgstdMkBF1gpE1DVN",
  "key15": "RuYmYQD7XspryADoDwpxN7e7TdbPxiaVkqEqrBEBy9J19kvFMEDSnhm1VZXgXbjRdKvaaxWVcEnLsK5yNhETEQ5",
  "key16": "ryBKwgmBUVUS3RoerrM6tv3ENg53nYNvsaqvC8r6YS7kjFP9FNB93GwVV8n88eyE9K57qp8bQtgthM9jzJKYbV2",
  "key17": "2mFKz6Kb1tXs1tahwsb4qvjR9SwivLVKDecwTfvpdnKL3UoSJY8zJmBBPWNNd2PUpLmnKif6ZkWEYRqwF4SrUnnX",
  "key18": "4FK2RDKTfotvC4hdur2g5iuaSvVBwUmCuJbQpyshqGNiREqj3rvFrS44hxTmvg9QZteJa4qVaZDxxyPa4hqcx2CE",
  "key19": "51ftFkuSwaiNVHdDe8aEpK5PKFJusL4mJeg335x1pa9tfzjmv86rFwocTfoo28fxz67UoiSRg1KzDQ4SZ4eVsp2m",
  "key20": "3keMZRM5ZqT3irVmFBuCYDM2T4QbEvANNNN4yXJTx1RcDhUR9WqDtypiN4Tfjd9Ugyy3NbFoXDjJa7UGrzvp7k7W",
  "key21": "3sngR11AzrpEGNeSGdk3hufPC7zfXrk2zR6JGgMbC82ZeV8iKRjgCcXt95HqMHKviL56DNk79uNxXDNegm2BAg4q",
  "key22": "4rB1oV6Fd6XSQj2cgsujQDowPtTN6ftBqtwaxJd1oUE8REm3WS2wmp6rFXi1KUcR8Qad4BLh7eZ4MKYwrWd6wjG4",
  "key23": "3G7LbH7rv655cwQ329z2hoGppkPc3qpcYpH35U7P9GHAFYxCAqRK7ZrbvvAyaRPQzM3QTnzivkJpE49wVEks7BFq",
  "key24": "5vAxpgU8niwW8HPyLfT4VWYQVwPqo2ZFBia6RytgF3Q894xwLBbC7obK9x9UKCC93VGpFCsQwRV4Yd5SsPBf1yDp",
  "key25": "2guGaLTFgCke5uDaxLCiZr6EdTsrRUbUpY2y66VYCAKeuevM7D8BkXa8cKVvXY89G6hEKpp2bCuMjQ4sKoQDuiit",
  "key26": "2iAgxGR6NbbQF4m2qCrM6uX3Jqdu5xq42FeAkQM4KkXxyEiDDxRs84EGbRh4XZStizChtpHJ3SXP79aH82vRDCWx",
  "key27": "2U9w4jErBR4fZMto61r4zMtmiptBNdwCU3P8C6BPafMDZqmmNgq4UN1iq8BXvgvFgeszBZWj6gVQ86J5fYwpmYty",
  "key28": "2w1LaP1vUv12snNRJnnUuBaydNqDHC7fmhN56tu9BH3JfFJuYjsmCxAJpSHzYokyqgqWJ9VZ5GiMh2qY2gPC4EvK",
  "key29": "2Cr4DiWuCXXvLfFLmNavaq7kHFjnb9aP97WNMcaAtabwLLUuNwxumiTqhP3fh2Dv8DH2KTNMzF9TH8myMgKpweFp",
  "key30": "29RAULX7u2acNVSSvAesrEyveXAB6qA2YvFDYpyq2o2K8BtPoBVZALxqPnZbd1scd7pcDGSF9ygGr6hvfQT5aYEP",
  "key31": "61qx9mCZHkQ85sNDeQqt8zEWiPegpNQqTNY9VZCJkPe11zxPC6SrsYXPzpL6rXCMmWVyLm3tVDuYTUgnS9s83feh",
  "key32": "4MDiTBYEsuxQ7YqMb2t5mrnJFtLcq2MNSPCB9NjTD7CSnN2t6hc5oQaiN1YoP5VVxJr4Yc6TUhc2mBGFtJSnhgW3",
  "key33": "3NyvgmXGaTb2juNiCpn2Ztgdn23Bu6vnYsNy9uMbroaNWEqQjKU9L8YrTwafR8tcUcexcLgW1VCEh93Hoo628WWS",
  "key34": "2rSx34FdSCiWrGf5cRdaa7DFMCeV2Lp2fNJxJ8emRxZs6dTQh7mZ65jWpN1N5WDk1yMrL3YSXZVN3ZcmoLyieva3",
  "key35": "4xSpM7XKppmzKoT2rqJMy54B5TP6tYveUq5EUbQmWGaqnvfokAd1hyvXgvrvw4hEyyBje7toGDzhvbbB16ZrSmai",
  "key36": "5ahMWfXtH1ikU2ywD1QVA1oo5Gq5gVXCz1nnvPME13AtpVzAQu8ZjMozBC2JDTg3oeK287hKaLXR6BuPY8ABSfYZ",
  "key37": "5nj5vbEMTiE9ALP6P4a2qCdWRd1jE8Y9Rgo66QRoMBGi2k7HkuHoWo6MjFsrqrDR8GZcw6CXYNuvg9BRNFdAEWTZ",
  "key38": "3jEEpW6zzYxtrAUrYq6g2CKHZamVb6wxbMFYMZQizoLSRT5Pr8iEnft1v7gsX5nixXZu7onwLKPf1mZb3j3UHf32"
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
