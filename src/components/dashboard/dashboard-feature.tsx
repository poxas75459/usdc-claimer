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
    "426Q7Tjhw9thqL7YhD8jEzc671oyADEfGqpNujssz4PEpLwcSMBsNcY29hKRCx6Qb8zzE6CzQhkRytoGm8JkdFxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38EysJWkAygAcaa9HS9U5URKEwP47DVPW4Lt2UkUeJaK4Fm8gKnUSUiKHxZKbmo8kGQWjKwbgm7TYQXJW6fmSMFF",
  "key1": "21xLYMCLbMzcAtPE4c8sReyCzKnMmZ2HZzi49MjeggfMoHsCoPmcwDL4JwoYoLPDqoaGwy4RLnccpzTtjbp4Zv76",
  "key2": "3p1VfJCWfnBF5vt8Pk7iLDD1wkvEcvQ2qzc3tPQVeUbF7oApgnp2zUqjDVmtkrnJmsQd9Yn5jrSp8ZoBsebZjnRP",
  "key3": "4nxPAo914bhZUDfhdXDnwJUu1DBdaVKoYoayNxAgtfAhRBrCFVDfVAU87iZqSqwGLDy7wh5f5ZKXyNwdt4fKphEL",
  "key4": "PK5EibC3tHB3KjjoF6TVTKdAtc31C9mj3kWmoaa3HwD5gHHdEfkRpvrcbnuKuPymAdc1upDuyVVdZs4GFoFRAhX",
  "key5": "3PGGeS83kP3u5HLVMzwJkZNNmrSCrDwcniYzgjb3BNAGmdfpAtW3pUqweLsd2mkoTC6M8qxKMVrCi6jDxC4LZ4vE",
  "key6": "2LSj7Cy47Cag6BPfCe2uwy2EttPURrCvkB8DLbeWu3g1CAH8t2s9S1ct2ThtD4uLz9hPTCi2j6UTjwiVL2tmiMbD",
  "key7": "2Lmoa8NkF9z3U8cUkJMhx7zmKMASsiAwvEygNvUGu3xHQtRFf2fYRQ6yVe6Yn289oZmxjaBidU3oLkyThgTePdHE",
  "key8": "4hgHstV9gSMcNyga94iwPqqP64bVXh8N44KognXkyuhb1NhW9qb5cXWvGbQNS2gFqh18TWFka89MPG2VTB58M8AE",
  "key9": "56aJsuhkRVp6JR4GvAszKcPY7VQK34rkmTHDi9a5XBsW4mpxPuREQCGTYFm5ZwA1z1QqjKxLL9i3NbR3HLhtgwpf",
  "key10": "LFaarXYoqY7ZQtmozinFyhCVXQ9g2TWZiphq2bcqKPDzMHmdcKpQ6hwZzvmqKBvpB81sSmXQ7RmsLFuBJjTHubT",
  "key11": "6Bn9TcFrzZTxoVq7YCdfTD6PxcpL4xGMS5jXVEKqF5zJXkU7ACoJ2qecSPNioA8S8Ut5uTdXw6WXoNxadpAYEFW",
  "key12": "4Dje6mzeiJ6mT7LqaY2EuwaM3mwL1K9n3GEL1YXUfu8FJCa7rxx9ujAUuYuMQhcgWeMZ1L9RpdTYy6HoZHU4yRdx",
  "key13": "JsTYXFi48JgTaDXgM4w9gGoivHKdAJsvjuVzEBWJp4axnG24mLBtebLVhnTG3ZxU1ZoHbSkMau7WW2te8CZpcc3",
  "key14": "272rQAdGC6FFeZ9YVJfmGeZ6drh8agXDEY4SQukQx7gcFmQ7DeuofS3AdHcmR3hTijjkAodXfMH1Tfu8bsnReC4v",
  "key15": "57doJafhiBZQxZn2QSqCDEWYsdVvra3wZoQ5yvqHBNj4qE3qxQ3UudE8ivUbfgcezUTLYExdNuGgmrVt1rnVRnvq",
  "key16": "4KHtuqHbGJKtBM7syAGpF3m6BZV6senw8b3kKdoyUQCJD1NtLHcfaUsYKqi5hkC5MLC4rZJpZFJUq52k1qSyWRaT",
  "key17": "Z23yNRg9X64rDNZjANx5zbiPffiURqoZtLsiDcD1f5kBQj48Fbh8LG6gL5LVFpNU4rHqSmXPZP2DazA9mo9brsi",
  "key18": "5h986dDuXAeBMDgrPijmt6EgtAHiSgHUHAYCdgsTL83D8mrxVYEKGrMTsdmrR1xDWnZMyyUzq8ecwHqfGAf3gnT2",
  "key19": "4kxTPu58QaHFYizSK7PPBZK8pWZsS6DsKg2L2iaGNmg7e89zuzYsb4tw53cYa2zUPEG6Pr841A6EchJMe4572EYB",
  "key20": "3SCfanHtaWvr5FL1tQNuUukeB2Zwmy2bsJGqnPPADKaVqKYiDE6t1A9i89YEMeeQiXFhgBeEVjakNWjEDgxd2sED",
  "key21": "2vozaDpWHm47yybh3eURFkuXcjV1qMvDpGQD6dQHgjCLNn3mG92dYnK4Ge6QNXZF3rMrEV492GQBoiUBE8RMuzK9",
  "key22": "4YCruD14JHjbSHzrc3uQ4dAvFTWmwpHTtX9BAZii168MkuwWN7x6fTC9naZh6b8xmzJ2iQ5RuyZaGFBrNNZu5mc8",
  "key23": "4HPp17ewipKGoW14LMQT43ukg4qTKyznTFZuHmHETCr8YAKLEy2oLYWnGRu2emyCAmiZTgdsm7SrgjfAETyo6p6B",
  "key24": "3iHBHn8koxbiLJ8UBgzgaCwg3iApaZ4cSVn7HnRvvKbudmLUpUV3Fc7BNuZ99mQ1LpFUqgocVcZdsiQSDP7dhcaG",
  "key25": "5BUu4yCsggiWVfJZRVP8gKxLQadrnriL8zeTSCuFaGmdNznJwLVMhXwJsTSqo3F4H6YfcUNBWpfhZVv6U8aFfUTu",
  "key26": "S6bvHomRg3oi9q6Dot2qrJkoUWcmGrwrtBsgm35LaYQKD4qRr8AyeeWcbYB1KYbSe9d4VFCYhD19R8gAoVdfEzH",
  "key27": "5d2AMmjbn1ntMn3uVkJRf5Qpups8r8uQmedFSyXC4u6QLZNypqDKGrppob51Uxg7p4dJ6MJnczKPo91Jj3ETNSZX",
  "key28": "SkoT1jwjszQxsVWQtEHE4wKAUWBVt4Jmqwe64FyED3SiPF97v6LZBRkyEjdDM3VwUjuiWcME7fWnqtGSua7b8FJ",
  "key29": "4X68d4NbVNvFFZcyx71g7eQ6Erd5ffXsaghg9qk1XMcKwkWwjjzGEGF6Lx4Z3h8cSGv9E1nzpWngD6uPAcS2Rv5F",
  "key30": "3ySyy2W2Gu5X3TJuRGDoKwETktjz5JRZaRYCs8qf4QRN2YvKJMWXSrxdzBCp71TUf9RP1So9pbvhyQpD1ZuPFPua",
  "key31": "5XjV7mvVH7XPY3MnYTBssmKRqNB5ZkyjNqxkS1sABovQC4n7KVcicsRKuvAckf46vfYnTEh7Lnp17toSF6vXrb4h",
  "key32": "2LPHUbvdKPiSRsJ42YKYcHzJ4LdQ2PFZAAi1eHtGnFburGVZcyRCPDvYFY84CxUxF17dRgHWnkrjcNi1tTk3tDBB"
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
