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
    "2mdwnKJg1GyYWSeg9u1EAL7u3hMAS1KRV48B4AQCmTyndzaE3CYzrvfLhuK5cVzkHfJWYLZkgmaNRBb7cBeKrQ3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bty2ZHtzYnsS98EDTyfgtnbpGChf4esmMefHQMhiQUoRyGirZTKibKAKY1HLpc6rMpWkPVhb3j7SgbBHJ2Jozoc",
  "key1": "dgnwd1ot7zzyG8Xtnpr9Lr9ECFcnEshbbsLokd51uujbRZUq3SWmP1UGLPoSAzKJfyMdWfpMJtc8fRDyPUKKpbk",
  "key2": "2keFKg4pMehXGpUsB2nG9G1p8iosufoKMg5SH3cfUJpbmyxQzgHnZaq7eWJJDp2zupBxGmcpA7wvjg44jD279X79",
  "key3": "5AZLwNXgquMHwFifuLxga74A7qxZzGukddcNUTVHzgRUuCfEyUe6u7m3AP2D64ZHCudzmmirYWjowEdScBefpimG",
  "key4": "2h8zaR73YQDoK8cvPrMy6GXogxrzvkTQYHsuMyWW8YXiBp6Vnq2YGCwVcfr4QwMNXarY3KpR4hWu8FgSDqjmToEL",
  "key5": "5hXt4YcuG4acdkHVYk61Pvdqg7rUBwarjjGRzMFuMt7SdjuppcgR7TGiEujjm843TkSUgVy4D1zQz9nvoYEcmcDs",
  "key6": "64maQbDef6KXTEVuKFe4UYfqd73jaV2Xb5tES8LXLLXQX5N6y1TctjJWJuXsZ28DzK7gnC2zuW47Xzh75CxH9MFp",
  "key7": "EPQoBbTB5jB3rsjgmHiK4JMkGNB4eGVCow7KW8ie6p1DSu9qWvXdNaLrn43XSGrYrEQvkE3kMxFR8pjnKTzWv8J",
  "key8": "4oUfUC958uC5KR7TN3LRmrjSWN1dnqHjmMiNgcD5o7NGWvLsKLqxgdc2rwU2hBNuvkoKyxjYuhYEvjee8LPZW1nQ",
  "key9": "3kkjNhsrEa67rqDaaWsjCVGVRoAcr9XGHvKJhQ5xJN2w7ePpfjsDi5v55bD1xU4YsxooE5kxnj3LoW34QKdhqory",
  "key10": "2SNtbNpCUMNNfeSathGuKfsLcFLpqLoyEN5WVM7SoBEJpKwS2kKeCjPG138HeZEZVSBp1bqyNxa7kBfjgE8VF8qH",
  "key11": "62JZQP4BfTiFCWp2rqzA8bfiYmTHfPs7X66Ynwj5KNcsLrm6Ck8jRHetCRQGKXqLVGrdP77QyyWDBrvXmSHgx7AS",
  "key12": "5wZYR6C3xY9Eg4u6rEaN5YecWAmsN59jtZrJbEJbZSkXLaVeVM9XCYegUM39VGLT1Cery36PtyZiU1pmHnJeavn7",
  "key13": "3VZt96o6UUshCCpmSmb648Src6TE6ZticTsFnZnMKkeztKUAcqQ5CuUCtoKYDe8shYUndy2hG4JPkqUNDj9USAGR",
  "key14": "23yDJHXSgpnLLZMXQhJnAfMNGw3Kmyux4k4E94tjmzGTWVBWxxJB8vn8kUQaS5ogWBooHXF49H3QPeefafj6aHgn",
  "key15": "4QCVRMssX59dCSUqzGkL4HhBM4eStDng9AcuE8CGL9WiuwSWTanzcaXT3yNwRGqArgy2GaNbgjbUv3gV6L2j2VcY",
  "key16": "4JKQe474pUrHkUPVkCumnrX6UBA9DuucYQ4oKxCrR35a9yjpxxoGF6Zx3kCTLQ68yGcBps2hLZ9PDfZBZpNyFYjd",
  "key17": "KhDFwEjTwuFfQvav3ZrMs36FKnqYqqT7qrgGRWvjCBotjCtBpNLCUDvnjDfQDHN7GAd2cBhPtNEXdyCneg1phRk",
  "key18": "5iJYGdgHoRHgyygmFYtgjeL1Cj7TgCN2Ua9dQ7jzDWpacaCmzcM84YPb1jyPT3fca8ib7d7aMZ9kK4e19vkgJZMh",
  "key19": "5cQdMTbnX8RUDuX4ioKnm35sKKyhsgAaEAjuxtsHPApXjA4Fwg2wos2p9HHSNNWGd6k7tg1tLHtGoaE5S1YsWrLc",
  "key20": "4MZ7taTXdh1GgMBJB1NeLetDn57J1rKkStihT5Q1iFNphumpRn5WQRm2nMQowWzjzvPuvDUMaPWUyZ23BHaqiv6T",
  "key21": "4NdgAVYEtrEgMnWetTdn9VKtrFtaSLavPnD6vbJPG9cGRBvdzanQoMkkoHxe6JKktusub55Dukmw4gE8NSSUgoeh",
  "key22": "3Bi15JjG9y4BPvYZ1q5X7UykSwn1dPi5g3s35VQXfMHHfauXWm1NGvzaXppi8LfosY3WPa7fRX9wuCqSYrkJbiSD",
  "key23": "3NtPkXArAfr7PC5ePJasTWugXVZmfFy3pzLdBhuME18i5woPUEo7hpAGZczkKAns8sD66FnK5JnwJRgbw8SMgVjj",
  "key24": "ByVkxyUJLWBL6EfMtrdAmdSq9dNpEtFAftb2qPG2ZR98HdtdJVkbLhoSW45SQgQaEVCDpG1evy5ZDEFr8mHFboy",
  "key25": "4ig4NZ85FJdcqJs7vNuTdBJYbqjiurCtYqHNqqK75eNY6QRUAjcTnAxQbN4AsrzkwcrkCNqF7SJiWs9NRMQS2BkW",
  "key26": "9etrDBvp31WHojtAMnjUovfkiQVEykc134e5KgZX7yovXHSZbhHCDApm5fQp3smYcN8ng19Xmo3WhkwvbVmmz9v",
  "key27": "3NAKdFVqyjBogQEXFVPH1tc2AcrrfYShbzWdtS7u99SYYC8eo7cFrsBYG368JhK91tVoJpzpdrvACPCgsW66Qzyy",
  "key28": "Ddenp54ZVX49crmSeFDHqafFrWdo7U71L272nnrqEEHvWaxgusVzQrL2xGFeXbkZXrdvrdNa6e5T4j2WDC1t2VL",
  "key29": "5cDPnPghmWyFLJFY5CqBqspQ5mQL2gicxKxPJWYwT8oxVyP77ShU5LHdnTPbivQMkF2D2TnJ9WX2qCsDN2VZvnNL",
  "key30": "62bGuLDZYqmPc8K1YJze79fgZWunkWCD7QvcUbKPvUHdPJMwGoK1noAcRSuA6dUdVgeor1GdJgSNXTk21oXnaVy",
  "key31": "41XBfVab2H2ud1THeYKgvnrJiC2rcUzFacJ5MeEFdXBq7JuXym7pVGS9dwjTRsSTSE8y324qTqdYWo1BTfRD3yWw",
  "key32": "4Jzp3HujoEyYWMPZ91q5Ywoov2mVK5amS8p8uLacTJ9UFbxPPtsafpWSVorxKXnzBehTGHNANRjsiDjddEnvwC7q",
  "key33": "2iAm1FaNhtabte7j5yPoayyhyYRhG1XS7tCP4NNeFrWnJSSdpSsAVKBtcS19YuA9P9eYnimu3gMqFwGbnS351ZCs",
  "key34": "43sBxuNQBGfsU5ydwwT1B1oEGDJPRNJTTQzA7rVa3Yuh7HwF5wrBwgo6FnZoVyQ8drVvaCvv9T1vqwQZ1Yd7wFgD",
  "key35": "363MGpUUSmGiR3E12eMPaxoq7EEFeHjtz9mE86uvxxdDjFsohUbgq21wRrcMWvHQyBNFxKx5tCGvjTGkur8kwPog",
  "key36": "3ySbhDJkSPzxtuMFRjFEjikpFdRp3cBF3FVFRQH2d424smxMQxYRenqhqk7G8XvBhMmZA5dHMCwmt6DnWyKqKhPZ",
  "key37": "2sBDAdJ9wKnRdykig7iMJB9mJn8jGf7CRq2gR54XojEiFkngsUbQxJwmzMs7PDnqu9iTPUfQo4jSTHhnGfunUTFM",
  "key38": "3mDRHJrtGb6UbGdb9G32LcvPMBHL1kF6mAtsNRDSfxD3BbRUV8y5BygeGLPS56myffVN2hoHBsXA8EEXMxj3roo7",
  "key39": "zrqwMHHHzdhkJgzwxVavVa3inRVtETStaW4cQ7KsQGgrSFCf4Hzp81whww1ADv2VErLAt9a18cw1wb3acqrJxdQ",
  "key40": "5ajrv7qrjWShN7t7roMPpg8qEMgbtycaDRrwANJYTJq2QTx5CxAhdsAnbQsXmEBRHP3ZesFZN9j7NHZH3Aw1m3JX",
  "key41": "2ve1NgtEreJ6Krn2Ygha9hV1ihMud36itc9MHhTMyVegnW8a5dBQ8zcCRvPFt9nGUxqfsKuw4BK61He84xNHKwkz",
  "key42": "3u3Nsg5XTYfX5g6kUYHX63uXHWqeuz9ZwmdyaVgothEipSoiEzKnUVj7HjRrEoPJvzt2zUjBJVBZs5a3fgXitq9Y",
  "key43": "2Ahhv5NV7QgZ7mBQt9fueM77Rcut7bQSXKX5DL6ng29H2nMM2C8fmZqYtj36YWypeSgSJ8xaVj3QCHAhrdDLC6MD",
  "key44": "4ayx5U6689gTAAQWtK1hLzbBREpqyACPa5WmzqLass7r4NYKacTSUVssPVK1tj1HfiqhrMJjATz6QNuEaK5adx5m"
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
