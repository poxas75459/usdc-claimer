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
    "5n97FSXp78wbHetsWikXvqZpSy1MmaYgYr37XVo54w7Mp8SrpoYP1sCcGX2fRxnSsjhf9CZKCWrcJAHAmdFwmrCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCyocNY6nj5bFFb5aXTFXxhMJHVywYafwwbCUMSad9n4D7gJpSmPwAjonkJby3peY1FryxvU8PoQgaz6iXg76NQ",
  "key1": "4ZVnwAZeKXPvkdNceFkza6EGjT2mMrUGV6avEPAdqt7LpZzNC5Jn8mGnWinEm3rM1pRHCrH1Zih5HQgzNokpMu5g",
  "key2": "uxwYSFy6RHacZ2W18mqbUQ2d6JQv6joNtMor7uaFcrhUSqTfNzoemEird2seuRsKrxiQzZHfao6tYUmERed1Lfa",
  "key3": "38dhBQRLPiqdV7xCZy5isQLE9sQQTFG7uZgKkiJQrRuYcCaJbXYKfXGf8aUTQmxoKgHvJhc7CKQcoFan9hHhmJX8",
  "key4": "3FRnMKJB3PXH4SighcSvftf4uQaxBcddVU2urAHUG4TkW24qaYe1VN3Bfq3dsHMGeRmzv2aG71GoSPe1b3qkaVjF",
  "key5": "5KmEgQgBAZBycgNCLkqzn3kndCvCe87UBv13K52oMTkDP6KLHPt6c8JpR6WLyAsUayjE4Zap8xuZetNdp7NbMhQy",
  "key6": "ex9pm1L6yPSP9U9n9pRdmoYLNFP1jZRv4szBziv3bxFE1XjS3tiGvggGYc1v6kgWAQ5Bi9hxkbapNV9CkUktGpx",
  "key7": "2rVyAcV4fRBsrxMQRUyaGtQaSVsXja5zxYwuDxxdE3X2V83VqYaEspKP12ndJpu8jUNGe4Jy1mvoSyfx5TnUk2jt",
  "key8": "3ipc27pxAFTfSbeb2WhKm8DxiPKjQnWZMzQLCnc2qqVmdSNWMV7GSysuhDKimdzd8qxDSSSS5JpmqFakvjjSFL2e",
  "key9": "626xE2WXNoMToyreFaKPyFwfVRsBy63DBKvCAAgByMYRbXHAeiH784QHTwaRxgnGKkAMpuM7DTZwXLaTtUwmSqzv",
  "key10": "3Q1m3euo6MAHTbCESa38oYe1YvCwQrzkMeFm71fYnzYVSM7xkQbGKbsKJXhvAxXQEyqg51dZB7Z4XUP1eegSTBcc",
  "key11": "ZJZ5sNqk3BaQBTGMNhwCJziCN3rrHfFG53BtTNgGnLeoKw8ggQQddnLdL283c46QPFN4Z2mWjXmcxTDXCmG3Jx2",
  "key12": "eFB8TZhVrN9AzB3VhigzPLVrDkvLkRnQj4Msz8hBSHEVzTzggS6xHZWZ2xVqLpuVbwMD9NbaRibigCUCNMXTG6J",
  "key13": "3wbmKZBrGN2bpFXApAGZiuGSRyw4gCVm7SZa7XVDyvBWVt7cxpTDxkTrNxBV7mZPFREJGUEB5iMfhbF2p9oETF7r",
  "key14": "3CEc9F7Wed2iem726YsKWcawTsFddkHySj21i6cbqbY3HWt8kVVdDw5NCQcBxDiSyLRaetGiw1B2HmcRX1esd3Zx",
  "key15": "619NNABZ6gNjBX872cqDTf4SBKJ87YMNpepBbKdSonG6Lqm9XMcB1V9sCYNL2Yx1F5F8dsoB9xmfWAXLxjzdnb1m",
  "key16": "2wWFhMkX4SLUzWU6YBnF14RACwUKeSJQ1HL716yqvJKRaceXsd31nN2TRHNfuCLZuDhvotWctHhH4JjASg3msncx",
  "key17": "BgvF1t8xcgFPjxWqd5ZWx6H4sVcNpfeR46Wdq9e7eFxeicbQKuK17qJAeQWnUtxrx33NfUav3utBQF2dPRG5VkX",
  "key18": "625SaQYp7vy3DQKgjbZyKQiSScSLLmhXWY1aWwjpNP4PrtHJ6WPP1Mh1xc8pfTQtWLd4EW5be5u3UkkDVH9KxeRV",
  "key19": "2cRV7DtCviLAcT55XfQtnY44z42FkTHcqgbGNMsUArwwBHBDFxNpAYWcxB5jNaHLJtjCgLcZbFB8HrWb3J1mJvuU",
  "key20": "43hc3XQZM8qn2gne5DgiHBehAXABRe4QZXNGX6eEArzv2hFUo8KqjudUtruzayE3EC7cMQMXtd8LbBQshoS2MXJq",
  "key21": "4E31pTuxoij7JJVmCNHKmVi385WMNH3Ap64SZkhEz9xSse9F8JWfAiimP7ZvVXteidVSFPZuXQp6jrFg1L7b77cv",
  "key22": "rVuSyEEC8kAJN1nevE7PZUJa4j7L8ByE6D5xpDJJ4nmwjTBwg9UBQfMf8jwxxaGJk4Leg5yweWXVF4zJk9FTwYw",
  "key23": "2uV2Rp3aeUpRr3ReausHEG6CXCeCuGw5Z1CUAMpLKaD4rpo4vPbVLef7EpqLuu3hrLuV3HFxeb17xjtAqvucCVZ9",
  "key24": "31J5zG9NFHC3E93jxgkBYpuZabJkWCvKpKfhccjz8zZThwET9gzS6V7vLnx2uGJcri6QKRqvfPGQj6tbweLbd7Fs"
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
