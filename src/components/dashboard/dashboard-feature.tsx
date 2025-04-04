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
    "3qtXvSjNyjDmnHt6jBRiJ5xqMmTurQn2C7z2rxP6pecE3xbbGiSkfpysEUqfKo2GMTU9Hs6H5CLvM1fP2umM8mdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cuL5drfeiYg7amiHHAXBx136CZYokHTNiEwnh7n7xP2xiomCEHDmDzA1rjdXg35YdSrhCb2Z8GpDgKeBJJ8pPt3",
  "key1": "5mhqS3e6D6jA5PUnGAQLD24oNX4HvjZX93u17LFXZssyN7aXtRd973rLic3tm35AxuzuGtNiY9WeyD4qKUSWqje9",
  "key2": "2eDDMUFRaETTbPTPzTMWyfkNLun8AMkV82j9GxKYMcDghH35VespXFRrNroJG4WKh5LBC3CwZU7UsJfmPM1YUHgd",
  "key3": "5oTX9Kbxq6Be1WTQGc3urFdkSYnetxuMeDAU3iCZNNFbj9pYpiP1acVdtAaWLVEibWiJdPwF3okRz6NhamfRaA7K",
  "key4": "2iRsukgtNh5xjfeR1c9Ay62Z3q5zUdzCDNtzd4LRVgytVKMvbggVKpmvPKv2y5pmYkHPeRsD2FRdP9CVvQjtCTxe",
  "key5": "351dTBetjrUCf85sN2Q2gd5berwY52W6afqqs64EwN6reGx38siUbTjGjM4y8WQZSiqYARuKz1E3LZSa6KbkADa2",
  "key6": "5fqfEyDSyKhyskUFMYcVdn8EmwLxKWnbPHHWJYoDRDzuwgpoMwqQYdZxsQUMBQhQpu1s2P8gQE3rV6PugPJzpiv3",
  "key7": "2gvsHmy8hNiKVDL2Z2t5sYatyLmDmw9B9VBPY1YwackJHig2ANFw3u1hV61jQrUTAW6DU8ZHdTcpXLVnoEC2RMs5",
  "key8": "4kV4XqBBuXbSTMtv4Byy146hwza1W4nmWEoXyAV8oTiNkbxuoi9mj25KGPjhYawoTtcUunKwXPUgr5sAcSWhuRAx",
  "key9": "5B8T6z8SS5vdJ9sEoYCa54sLJ5mm7wNbH8MpWoEYeq4e5qvYTWNNfRYp95knvXA8gf16LBQdMYFYgMfxBMGUtYoV",
  "key10": "2B1jhHuCiuqPnufjTmy6J4w5GHEfdkHDQzBKCCDaCWJkha9LANfwvdXBncVU1wokYVFvHAWeTH7gLpsStkszymFF",
  "key11": "23ztrpFsEehUaDXmEb17xGmAqqoELgbX7L3kcj698A2YLjsVey6kJuWGEeQuzjDRmxagkYRX9QtvmjdgzRGpbyiB",
  "key12": "25122gcWc5TJsRXxgN5PwBvzzXgjTAfum6LrHvdZCNa5Xgj5zwKxzUHnxjGx5ev8YZN6n2NmDTUwwvbHYja85NSn",
  "key13": "42GKrGf2cf7Y29btxRHAgaQdiaiRRXseToVFWH5TvM8mcmmugrpwBXn9atuVXiu7BfLVK2ZQcDBsRCZZz3uwntsd",
  "key14": "2MVUrngjwR8V9eWvcpjUoGA9kuzbmkj4Ub8Cf5UX6LHWeQxSg8LdSDoSu5k9uCZYYHBytMzoDpZeijzdvqgjSohk",
  "key15": "F5WWBUxZv55ZAimdJL4cwgAJc8atRLYySwoHCDweNoDzqA5SPZn2v1NwWyxtEiVjb5Gp7r73bDMkZbouL1nzTt8",
  "key16": "2QuXu4Kg3oUX29T5rGTzLZMmBRitGq9NNhmhZ8mthS3eXZstNrAXrCCPe3FYpZHkErLeG1qe1hWxxrSj3gJvUohN",
  "key17": "23Xj8nQc98FD7znomgSrppRSrZmVcUrDTAt1CTpKjZcdEf5Z2s42AwsC6VEGnULbLUnpx3nVsrGM1KYoHDt7C75S",
  "key18": "5yzuHUFFabFY2FHcDkcAVcSAz2kMppdLh92kSodZ3JDaNAhjxMB72gM4rWKUPVQj3o1X4xiiSfgAxbHRLJzXbKqK",
  "key19": "fZhC4o4qwrH2AY9wvSYeKcwkYKjnxncrvePZgytAyFhoygyJJZGRKqDjMXQH1xrGAGYpbu4ywvcuZEZae4b6EHa",
  "key20": "5wo6gvQdZesxbysxpNMCznvNmzJbwxkWBVrc5oTyHujPTb5SEuu8hDyCbyaXaLbvpgAhszyTdQC49jAyxbGAjV9L",
  "key21": "5bTbM6RUhn1zR3fqKbraEJMNjNbrbwMEVJYg5uVztoszbWjebiZefg5Myn1bYtPfxwRDyZbbksUU7UiHfNHHiGDD",
  "key22": "5C6Zu5wbr9PZkMhTewWp1QCStN9E9DP7PE673FrHdNN5b2ezEeMhxWMjKAstWZubraUFiWEZuyxF9MdjC2LBcJdq",
  "key23": "aBQ7K7Pe2pRfu12LF3pYWEXTe33M41yCPV6gS7gkiWtmp6yhGWF75EZD9MSsX6XxqRAVDbxgZjaWLvfG3PHxLop",
  "key24": "38mTNN7KM7M8tmp2LTZtX631X64uKxP7ue2MTHHiurCNaQKfnST4y8WyR9xrD78fbRBAPmCS71xkdUudLJtZMsvW",
  "key25": "2fQZ62T1nPzbKsYwgrh83TgyGg6LByepHfrKhYcGtKntpsmwsVbnzUFfLkoMrUsbzW4qaUdNJXMzeauwcCU5Y3W1",
  "key26": "3ArHkJ6eHi6zNeEHVGgxUvvXCowdtBoai1Q3vpCgV2Z5m4n6jwFQcDt9utVHuZmQy2XpyieHpwyUymqJonoMzogo",
  "key27": "5ruaJjtK4EA2Vr1kDiDHK53Jbq1yu9pW4BL4AZ9MezLBHmqxnjDDAoa9HezH6wzCFeKz7EbomSFfi1sfM4mMSvfB",
  "key28": "6JLjiVWTsgCs1Scoo3AFormE7WZpdFu8Uhyh5uESNZdnn4R4JmtABy6NW83Tq8ZtRitawExM5ZdXuhzTsHTYkyr",
  "key29": "5Htd6v8jhY4ND8qJtFueS82FHM3ptgHdmFD6fzGuwNXk7wHENQnRrKhzK1WtGNcQ4t3tKWSswtYvCaCKTtT1yTxV",
  "key30": "7Gis9FkaAHcPNvpAJ36WNCJvwytAKuAeXvFu6yDa8KFPC1zz6kbNAKUkdY4KF5hAbWxUhY3cxM94ifhom2qA9ax",
  "key31": "4LBP4W9AFT8bBCEjgtyYMhFrf3wmpA5Mg2WqJqXyzJJ8Zri3MtVfzvhaiXcupLchEPTJEBjUEASMs9wMhAKoLYaS",
  "key32": "3i9z5LAx8x12mF34QSFMgzmRMEgMuMAAmpEF4S1W4LmCp7vmq9Lgx3NdbL6rUbEEFrem73cn34Rz8KB1qUKKePzC",
  "key33": "y7pfa3Ui1cJ8DcJdCCzoEznAaG7bckuk6XGHUANyf9MbUocnrHs6B2wdDfoM94douFN6esZt44vgo9mz2ztFJam",
  "key34": "2hcPVVwdkSS6xTH65SbTT63vrVgsbAjsPiYoiQYxy8GVufr5siMh7vwmegbJfUerKQrLYjy67tBy5cSimZnnWTXq",
  "key35": "5nhbGPv3YjJgPs3tAx1bhQMyq8CpRm84ntj2RntiTu9jhU4j7JSXGzmSoN4DE9jR4Xy8wh8w2JaTcRihPeLTNqqa",
  "key36": "3frUFNaHCG23SWBfRbtTL98Pr4uxNrH2K9s91vdK6eNzGDEN1jjRCKympaVYN2sjVZFdp77kWJktUZ4WQHQVJE4Q",
  "key37": "5mk1LE39Un4LTpafdXq2EnnbD6nSpX1yEvz5E3QmSMKPLFqFTcTZJ6bQb2ypGxivUragcKDv2sR5YEsnBgPGxtXk",
  "key38": "2p65wgQzGRZhYcr27gUn8CatNs1otWQbFteHf7HEFB2S3SoEY1Smefzprth6X6sWeFeKgcZraRgpwkn24s82HHLS",
  "key39": "4MsPsVauKyvzWs7NGdpvMk8SoZVpCmkWB4xWsKg7A6Y4Vyvn8auj9EWYciN3JjPtvuuhVurHLDstEecRcfCJk2x7"
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
