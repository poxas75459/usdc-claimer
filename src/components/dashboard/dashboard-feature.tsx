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
    "2qVCHnTrnpZbRHrLHiGL9g7axoAV8VA8Ge6JCzWyG7Y3WsVDBSsNNS4WbxTVEgrSdeVrdPNDPEoTp6KtPDhaYDKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "joLG8L7PkyDczNgZnwSVrzUhwJ18MdwSijHD94M6zAACNUjNhTTtuDdQbP1LnGCJFADf6GnYL8GvqHmqziZQeCd",
  "key1": "5eNebsvEd8aXmDmT8osQvzn6nWwRyGQCiwKJqFA57yTo6J1EHixVdiXq2zDka7W1y8b1VWvMCr8ZSkGm44x8M5PK",
  "key2": "dGcXizYe4uFpG2vNG9Q4Hf996H6p3w12Cf9MFvF5Z7CVV87XuZtyq3xzykpTdgDKbJUH8f7CbzxsSGQk3CfAc1g",
  "key3": "48rDmx6rKakjraumcnVsXtq3oMrAYHhhSBEXCConKZfuy5ziM5uvo4PM6EippWuTMfB3gkFeQhxD3gddLdNpqkZ4",
  "key4": "47fKsXWYAqFsVx5k8eUTB9Fm3tLaWC9TKZzqQSRJP6Gevn3sp1HrkdABGbT2ZJD1ZFoGkjCPPwCwyuhpfQvgW9vD",
  "key5": "rAnqviJ62HzSGwhsedVm1cPiAjPXHLqnzotycdp7nD4xitC1gHYbKLSj1sE8Tb2Q7rJ1aXQTCRC83hLPguDjZnm",
  "key6": "4FgssueGxuvCRQputDXMrNJZHF6Ja4iqWM4fGT73KULu2dDQPsnmC69Hkvp2zSHJs94YbU4Dx5eWc5uF3WkUCeLu",
  "key7": "3GyZXmKkVW9Cnkiyp2smEix9q62zunxwz7UHkyFx1fbP6LnckbJJW17DeFAZupLfJnhYK6xeBa3xJj6xEuBJy1gv",
  "key8": "5JFzvbzdLotjJ5YA2mwU8sQYaZiabGTP73cyVFnB8p6QvEpjXy3ojz1qkkyo9J7UviVYzTVuSQr584HdFxQwrYT2",
  "key9": "2DTSUtcD9mPtBSYZYnchhViJSAibm73GPdoW9N462j47NGQHwqVoDCB9TNuz4egqPyYA551XHyTv3FVo3i6SV2FC",
  "key10": "3FdihHBLqKPSnRFKxwYwpguVXUjMDQWgqiZ3LvATs8vGKSPSt69rB15V7BEXwXKwmqGKGcQBXiJ3RhbpAgvGYeqi",
  "key11": "5e3afGw8wXfqd8DFTQvvKpgJ8frezjVb5dLJxUXEEj9GeyP9APqRGbhyp8RtJupdAZGVvnZ2G3tzij9tLtjMWzzy",
  "key12": "2iuT7spVkZfGbGbEeAM1V6giZUqVPg4uxRCMNgnhezrDvjnjB2PTgofBuyQvKx7rGxRH9wc8KogKCQaHXwaxRC9x",
  "key13": "5w3PhW3gmD5as8puYb2epqhbyk3TnGsy4A5K5B2bvZTbynjsuJ7drxGMzjjoMqm6pgiys4UYuvHbAr3BDoaxtZBW",
  "key14": "YKb6sVXv5mSKP6Fs5w47DyqUJ72LNg4iazzDZDwifGK5sbL5vkbzH25iJiStwuZRsPPUAJNYXA6z27i61puB6hs",
  "key15": "4kSVnJToe6GYWwne49WpXzb2A2Mv7NrkKx772tsCHXnWVqhibASSmJwQuddiCoauF4fmmRz4WsqkRz3moGBu3c9G",
  "key16": "FeAt6MvD5JunVYyp2JPQ2h8TPnFb8HU3v7gEbtE1K6JytJdmZ1KXg5a7KNYzux8FRSs51B5UC481oBEvdy4BmyC",
  "key17": "262gxVn2EXA4b4rK2tHLC1esagXXc4JDqqFiTcDY1K12FAyx2Zv9jN4aCvVURNtYyPzyNBZrWKZEnze8u8TT875B",
  "key18": "2DmqsrJdWeRuAnixHeTCLZiBjv9RxQbVmYZY4Y39P7YfCM95zCNXpeHte6pt5RycGBp8WjSJTXmzQraNWsDYAmt5",
  "key19": "35ErqoNVpJ5xoUNc3yiUQEmMHBt9fMrvGUecwnruELmCRG6tmQiQFsEPtK2Wvk8ZYJg3vse8tfGzphwu1pQHxEiF",
  "key20": "5iCiQEpK91tp6UdTRtHFUgAJssQJ3kHeCFi7WqecQNo2DF2kvNCuyvYJ9Qt1vAWNFvnrhBgxiZVBwbseYX6jYZeG",
  "key21": "3eGSj7qbnRauk9T2BUBY3cEypiHGpnRAHYZ4kQN9u7BfGsKD1zJGKS6Xqq2hYfTYoZUmjrrqak8izFE3fU8MqiM5",
  "key22": "5gp8wLdezWHvioAWbRgr4mrK265EP4h7Sq4HD1Ut3GwCbhCB4RXfJdU7zkirqNAWuQqM2xwhqaJdNSoYZ95Pomp2",
  "key23": "hJD6oB8yaiRox6ch7NV9o4Qbbjv88RtuDTZGZAoteWiuWrkar25YstQ8HXeRfNxbTaQgAASK286qV9Wfk8oPGnN",
  "key24": "3b7BWNN7B1DLG9TvLiFFMzEYYpUmEKWeiXq1DGNqEtd73ZXfw9yBNRWgQ7avGWn3aif4bbU4LQ4EAQeg7z2o26xG",
  "key25": "DXzpJVd1CfjxC9d3hvKeRW1oCo5E76JiQxC55YiPjE53eCFBAJ2nRm4xcuo6ohmRQMkWbk72PurXf1wmPX4VkJh",
  "key26": "4EWcM1MQjGNAQXVK6L3CAzAZuG3EAvKcarGZ9LnGj6W3TMepn41BpL4fqAe3swUN7cyVdZC9g3EtjtiGFFdZU1TD",
  "key27": "ZUJTmcD4W35TGaVvC5FPagpWggs7ey24KnUTx7rbQcEaUCvLZeqBMryxw1C7Xd1i3fkrrdDBM2FEGuUQn6rRvRX",
  "key28": "5dYNYHAYFrGhLfwQdw9DzafkLU8PeNykyBeju5hyWLTRAqFWoiYChgXynC3qiiJdxyYGpb9H8drWUixUuHnu6dqb",
  "key29": "2FRFEa33LdUteLckTB16U8vizNwTC8mCSeWbTLGhfMdi9Dz9JaZyjEpk5ZGmoKe7bD2pTuhgVbEJfBrnJ9ZnDFrG",
  "key30": "CFvxVcf3FTbKVqZLLBGy6bmqEC2ELXJTLyZpwd7ayfeZ6x6eNm9JFeF1rECYk7bSznF6j89ZC8nYBdf2umq4jXC",
  "key31": "y7amd6iDp6wqj9qTouLe8djdSM3qcFAtQhFiS1Ugt8ikLJPEbVDL6n3QXJ3uJW2UxyWmTznHTLrmh6hJgPjXBYC",
  "key32": "3VB5JB7QvGvQuJXc9kk2kBQDZQWoPRPHt72YinMZbJiVzjozXHFFTnTiqx14mpYo4W1pM8wFiBzngYa4uM32LL7L",
  "key33": "mRTohb2Mg5fU7rnKoBC9byPJ5ubcoXuyinhddmFQFkNKoTHVLvjvUuPhew1jV6ma1uWE3x7ZFBChWz5Bowt84Wd",
  "key34": "3ndQoTvVGx5s8WigKpe27MnndZKTpwQFmhnTes7ksbpNGJtc265AW8VkxAW8ZY6WNBkTAVmjLNmFcNeHBw9JxCaS",
  "key35": "5RxzMoDA6nKFCyXiBRi41zQHkcQupYew7HX3bbCzGotP3BaBkpS6y8oJAsV3fFAudcjvWgcC4hADpzixKY5pmgKi"
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
