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
    "35mLjXXDFQ8hxBdPbgmasnLXyMHFNMuDRzjTN4QUxBQr5NCNrK9pz4wniBKDJQRJWthExG6A9BgXumhNLMFUshCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcpBCF2RytruwCtsQnQX1WHLEQSMnynWCjY3jqKQzHhj6aamSnGknaTtmuBvSF1fQZ7XB9tT27ZiFqZpfMKUw3F",
  "key1": "5PbGX54L9XtMyRgN3PvysELqPXG4QAcyrGsx2pvWP9ketPPMv7xSmD4kTgojRvefw8CeqwKKmRpnqnP1Bt6JHm38",
  "key2": "5yPK5aRguKdveomuetqjvLvwuo4pteLPaaPJqhHkiZCn9TsYScutzjWHWZBVvoJyoiYGiKMMbhrvj9PbPfW6Kdbg",
  "key3": "4bWKnq6DP3SP6BRowuj7yipmSfGnq2fX6XwD7dBoKSFWE5jjcrz2iudY7yC4MUQ5RRc1KjB1CkbsCbfURuo18xwH",
  "key4": "28RnJuhTGTAjf7LFgwU5iB7sbzMR97EF4gwCRKsf1vRxr11kHHH657uipbwhksJmhNFgJiToqwqqXvR6M2B9aUsC",
  "key5": "4ubx9vbLw9FNbzmwQys2DPZ755DEP8uw4QiK9GWpzG5YvNBeH78vVoW31aWB1wQUm5mmoeGdhgG4kmEqwmnThkmd",
  "key6": "2ZhKeGq6jSM21L153Fu6xgWAWB1BfugsE124CM5DqsEgdRrzg1Am93S46bkiwGuRJCfXWa54yv992vLpteSotbub",
  "key7": "564tu9n2wEKqHS6tMDLHbQdnretCSbcWvinHVxsB4kLEaCu5CJ9k9g5M8ojVDzN8CCTA8E6tGDVQ1GbKzCKKq9if",
  "key8": "4kJ5LPUuuDUgA5Mcnjv5vs5bL894SnxKdcLWPFssqNuaVkoJddidNeAo2cYdEibtgfzGxJhqygfAf8yPcL4NkdTV",
  "key9": "4PVPxqNDVtucbRSTud72ZWF6Mdb6sKBSu65fnHf7xFm96QvK31R7d8XZWb3BAVXFVn4F1eqLvcQi3Po7PERYbnzg",
  "key10": "2oeh3kLWF6QRPfnDR1sVsJj9N9gsMakK78e5nfoQnU6mCorz276tAwfKUpM8tCVfzEisdYewsdg7JDeU6sjppYie",
  "key11": "413zQfaGPDntVBjkWmKdFxZwWZHQqiHNhkPWyc5iHYjRz33CsVpdEYVWMXQk3Lf6F4wKhSWFcHy6ncYme7guwZs2",
  "key12": "51RCmpuxj2onnpmAtrR7zWTsodXEv1ySc3BPAAYv1iChD2yZ2JBf2GyRWxQ9jSB5izVRps7Q7UUtbEMWuJDiexz6",
  "key13": "5vq6vRFmyyhQ4yw4i4ChgDT44APFoYjVqNaRLoFtKoQFapEewBbPyRApQyZfPgGEuXaqhKgq64QtBtAiM87LQzBn",
  "key14": "2Eoj62Ymv7iaCu1AafXTyDvJoCPKRfD8eEjvkRCwp5G7jhbPhjVMdtoJpbYVU5M7CHkvWMvdR2gmsjkQN1jPycJ4",
  "key15": "5k72C4YtHb2iXvEL9yqeHVnkQKHzDQeEribazzmMW6WUZoFxadCKQBMfWEdigggnBHhVGXTqHwnB2Xd3tAce62XX",
  "key16": "2hGT1Ca32gLpUUyoTYUFpzBH27vNgdpRFEqBfoadK7Zfny2f1gdYMVgj2n82fLhkdZyACvAgukL77QSc5Qf5RAtC",
  "key17": "4QzyMLb2GvM2wLUiL5qTsbf9btFEKTPFpBM5wWAcF67tSP6776EDuQLyVd1kAH1EpGZjcyY4H7csQ5iSr5sGyf8q",
  "key18": "mPVD4PpkELMbuSRs85cupUfXMreUWFXWRJCkuiXQ8EwrZ4BRGYcKvhVAtkvwDrov5nRySDQSEMDknRdGM5kgFnA",
  "key19": "4bKcMnVw9oVgD8HPnSWFFFhtUa6fChg4DJ1qLz9FSSfYPY1KvWnfVHmFmjdhy6vKCPwCA6JWQm6P2YXYhynasmsy",
  "key20": "2jVtF1b3VoMvW3Ke22oxte76Dv42mHukgDHok4ksG7f7bZFfYtGCe5cs7ApvfPMz2gM7prc5TA1UcANdPmFVh1Aj",
  "key21": "2YLHoB9RzVtF7MUGEyQeRdVMrLJ5nWoLYpvq6qe3LPuLjGcHLVKGTZZcNncPJC5cRPJWkvZmuSUJJgVucTCGJh4E",
  "key22": "4WMB1GisUxvFvTovaHkFXENRCpWt5HHUExBY8pPuqyyzrXxt1rhac4ymZDVC1mr9TEnBCHLMrh2qT3NfcEFoojR",
  "key23": "56mmDteMDwcdcuZfFw5iGmXPRkaEZojDrvqg7MXMzVM5T9EeMak62Fd6ygTsQnjre6q8JTmXchFccbgqcBFjSfuJ",
  "key24": "phijZFuz9e3ZWT6LdRvjBtQCZ8AdBkun9DjrnYWUwrU2338qCJjxPSqVvFvuUisMbGoQK2RdKiWWFQ363nNEuet",
  "key25": "q7YVC2iyHXKSoBD3dmgpXY9aULDMeRP2EtFc5g2pMKJ9YCoLYmaQwugyPexY3a8JnRH5A69R4zFi8MMQjanLoVK",
  "key26": "4LqrutR9H13imQ8cGkuJX5Aqggmsc1qJSDg7HfC6gKd96BG9KXAxzhX2G4rfaoKH313ZtSH6LPdsv4mu58KcY7eG",
  "key27": "47uj3GFfczB9CNfLJoroUpCF9nUXzreizvUHR33egca2Jy4kgsnsCYSgyoXmj9MTrQsiXVXhBq2s6xo3akH7hy1U",
  "key28": "5ciKH2MJi7CuPCBE27BmNXYtdUk1hWrvKLvfwioVTY7qwYf4zHbayAYDEgqnmzzJdtKKT6CtZWckA4pDLnVvDPcE",
  "key29": "FELbzbbaCJRhXmYPgBZR7go7YbaVTdQXoaiGSquRiFLZLkkK8Gmw9jxPeqMVeZDN2Qwnhhynfvbdy5ssXoKYoP5",
  "key30": "35QzuBbF2xMjek89Kwr9eNoey9fCPi1dWdCxQJ8MWHnwjQ6Rvtjzc5d7YtM6WT9zdCPM8mEYgpS5pzRZrFsSxzwE",
  "key31": "2y4K6YpmzptqcdqDLFUBucBGtommZcCg6463GVuKNqXyLUc9MYkTp7NrMSgoQMxVjPPch28MqrLX97vE5kWvprJL",
  "key32": "4FZXWJw8W447ZDuWADjKixXqJi6BTcT7jaJYRS93ZkjD55qbbdRiHxUoP79SgQFeZbD7qEQHcoKFjFxdrDn8gcRG",
  "key33": "29qokWT3zxrTedJPLzUVKtEN7m3rdrc2T6fD9gJoawp1pNErDa3vzoP1gwQAfnnyHv7VzvZBnW8uqmLCdhokNswM"
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
