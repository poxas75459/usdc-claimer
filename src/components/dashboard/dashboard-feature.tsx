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
    "3nsBDrMwCW8EhLMA4UuavWWCc8EhDSYsHHSpwNMckpgPUeMRRvddh5fuFsJAFewhfU9ftCAfhZ9A44oCZfLzHuMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxHbQ8JckJEGSYoaD6wHQMvkwuutpFccHg4KQsPkkb8rQ87QJ56kmknfMP3JnVGxpyu6EmE16F1vfG9ftw4xTeS",
  "key1": "4ntdHLAj97Xdm8BR9yP71WkL3bZa5tZ7kQgpB9R2V3LZcLHsWpPc4YbZ3RqjKiqNwzCzhB4hjZYbtZFgF3uXTMG4",
  "key2": "4CHhndc5HUSuaDZD2T4L8XTMz7DuZ1Wyv3nrwVfvDsibFhLwXg2iECB83vpyz8nbv61ERKhzm1YQUGpwwPPCzjgH",
  "key3": "3V52EAWA3CjP7rGXBAy3nVtqe7zyCdbSQdTHVXgLnWg2RkvqTtdGyyZdj9TrSVYT51RSjZWac7ZqNr4FsTeT75xs",
  "key4": "vWSFGYeboTozaTYb36G8839WyHZdHSKB2DwQzW9goNkEjNGLNxSczoKJptBhAiV8sQqBrKh9QJ8cHhCq2dQRXt1",
  "key5": "5HnVAhjHjjNPwgMUR6U9U7PvsTcqUe1cLfNrKajkonHnWhBALrB2g6vdZDGR5tD8Yq41bsmzM4mG6YQhpXbhnuNt",
  "key6": "5U9o85aZpQmR3AZS5Z7Nf8F1xxu8XshUNJjqHP656jUJyicnbHLDVEmrGHYcd6QgF1FJnPz1FZZHuA33YQjWZj6N",
  "key7": "3zcmdWATRts7jrzKMvdF9kKQVi45sZKbuniXTxewQimx1CzGDxrs3y8ZV9SAKPVN7Cf78YvzwL9qCrG5Sm713seL",
  "key8": "3p78K4PdhWuFALsRYogHJ8BnyCYjd8F9uCg6aHCREMb6yZh1fXF1sZGRemvvdaMedzQAmHPvgF3hgTSQT9TFwsA9",
  "key9": "4tWivTschaiPhgDDdBZpSh6RhYDmdTqJhWJiK2N162XxVx4giYY9Azw1JPStiZJ35ygWxXFT8CbXiAzxWq4sTQsW",
  "key10": "KifNb3MnbRs9d2yAxZd5vcsMvVkS9bJM68dW3UegbU4tXfwrxSKJ2i9F4t9Z79JxdEnndMPzU1ZQh2KqAJhcoLZ",
  "key11": "2SnLw7x4XqLg1AkC2pFQt3JsgxL8EJaG4jmLcXzqfk2hSfjfKf22U5uiFQ8kduaRStn8eSmb3Wcj7DkD2kCnU9WE",
  "key12": "5gWJtfDU4E4YmsA4XnHpKn6sggP78MF38eGCvzGU63N4XrWUJtnivtT1SLxv9N3Anh3CTyAno6m9GQYkiWUkT5YE",
  "key13": "4TK3kEcNZyndPYUT7k4Gn6o58e3xvGeHcXS96JYq9scE279E3FtmtkyR1FiZK6qL3LWeqWTos4cU9SCPJvS5NvLU",
  "key14": "3GbbUHUNgcK39FgEsf3M4s3A6drjXck4nacDVzf8B7VPefKNSgtAVGKeoKK6kpYnHZESBtdL6nBHYCxnbZBjKJ1W",
  "key15": "YkMJ15LiBdB1HiSYDA4vGtj6AFvBQUK2LJz75oh8P898AP5dTZhmNeVzcz9E4kE9MUUYaJMdfbqS3CwBTYUA7FQ",
  "key16": "4bcFXfVBiKAoiwsArRWZZCC4tip6KkNNVKxfxDJGzdWVVw7Ts8dLmHXAo5xAseAKnBaLy4x9fSLyywfw1DQ2xAUg",
  "key17": "3UPaHZdvm2UoUN1GnxcYVe55nBNnAeWNaygeVJNigEizvK8j7wDakv7HTCBoJSg4KLJUQcFMURiL3k8x9zEDQwUu",
  "key18": "pbXRn6BfpX4bYoHWbiQjrK5YBQ7J7S1vTtXmGhY2XqAF3UvGeBGZCd1kN2HKWRq83g5aRn1UurPWzh7HvN3dCD8",
  "key19": "26Kaah91mLZZ955c2n9rb6ztyqzd4MfSw1hTVHAhW2rR6DFbrdjRZVrVFQbfNyGyYCnPqct2tEhatEmZqmSZxXx3",
  "key20": "5rvscsuPoJwtT7vKtGzzs19BGWUc5abXiT6fSp4pj2qxb3sPLByqQyFqsQFw7BmpT3bXomWDbThV1xckZnK1cRo5",
  "key21": "2JHc75wxMtvLSjb3hP5uRfxjkBTx98EHhVXgZ3sqwMFLee1zvkEMtdeC4kkpccaEHmm43LrdWtDnRUwHSNrhYkrV",
  "key22": "552V4z27iS4gE484CHhC7NJLspu2HgepeuWcRiAH2B9qKkmskdpkAKpFEkEfg2P65p58MY47BbHK5kwm8rnt1E66",
  "key23": "UbD7bxsfaJDZchX5hdwBJoAw8vSsh3SVJS2TaHAKSeDBogjVMDCNwzbBt9mDAWrGihTDDtHaHMun38fwvA2hqyr",
  "key24": "4b9mz6VGHWkSzkbs1W9RQ3FbgaUcbUtkJYsRCii8eM793ZZbbkjAjRsc61q6njJWovpLLDBqgf8vgDYu2trcWv4o",
  "key25": "4amdiK2uJWsd7fz8SHPiPSvai8coKNLckR9B4qVMFR2WDshBxF4ULCifuL9kYh7mviXcaTAQFwKbEBXjFYfDPr7D",
  "key26": "3hq1Vm7xztETrZ4ocVhketLDfz3ugwmTP5Afv8wBwrMgxkHWbuVi5F1ns3c6hDGm5rrpFrx4YXa6e4uAMzZ87GPz",
  "key27": "rm5zSm1ZpMQv2gTtFSacbspskUKhRAYPdFFpukYavRFz56jB2x1NdD7omQpViiKkqLh1ZRiDrBJGJ8UH1xc51a5",
  "key28": "4a29JdFJh3p5bp6r1DuNqcnpnRCDLb7PkeJhuF1dBXMq5uK8X7YiJfiGzVjsxL5cPPWpte8BUoZexzdNfH4NJVP3",
  "key29": "RcKoqJj4nXExeuz5RfmdpsVPVCYkVbc2ZDVbBmTcJCFAojguPftcAQvbZjAyZTZeySYi679owhJLUACu6SVfrqy",
  "key30": "5iAnSBFajfc8AQsb8A3ENM8XuNkV5exkrGqhHV4t3AdGDDBeNEtjDMa1mr1k9QkURPijPnjGr6Z64MxMYd6XbHeh",
  "key31": "3CCMoqt2RUiW5zznhDNpGfsoWs94RMUBgDrFFzzDytez8N7Yy2X4Wn6mXgRKbm5nwZUrXbpiMz817iG9Yy1oN6L",
  "key32": "3wn4TBoDLgL8J1HVSMdcxT4viL5uTot1bLcodjh1fgfHyzPWoomezgZnkLMvdbQNefd8MzoRFVJhk3WW4F1XGGd4",
  "key33": "5cFP7xxom3e9yAkftc3SChy3HKAxj2cHFLDBjgjrGfdfDtrJSDJUMhZkLhXRP5vaJaEMrNnnt3s46Kw3YPhSW2J7"
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
