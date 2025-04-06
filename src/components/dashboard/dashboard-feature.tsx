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
    "2aMaXrHvGoK2cogrHTa7r3H5YrYDi6tRFmgyQjCBXnA7ppf73shvkGBb7vJJnjS2q1NzgGjYNUgcaxPhcSbPC3VE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j2niHfJteTwZas2YDJR1CvFYM97qDBs9UzHzkLWmBm5Sr6ogBp4MFzYkH1r92NFYkrhRmsXcmiMRkT94Tjgai8K",
  "key1": "eQmuou8D8K5MehdgMALrnqAJkxdGRn89BaGe7S1gpfqFU8qVsxyqxSjAqKN9hF2bxiLpGKZvbRqnRGc79urDBmd",
  "key2": "yLzSu149McjkhkqU6E7AyFSht5m8UtARyQoDFqMvJwRcstLACsAifNxwcUJSdkhFCPRTYyptRY6N1g94brw4MpJ",
  "key3": "ayWeCqiiAKDjR8XynugjjvbP7JbB7mQa9CkJR5GwRSySVvBGYyK88shPeJTSswrLaYDmc7KSmH2U3jnAyJCWMuy",
  "key4": "JMqLRyCEFj3is9DQP8PisHJyHT6uMhb2h3xoAffStUTKQQzd4b6eXGUzejJn9hXHjzEVXjqTb8xJcG1ir4fhEny",
  "key5": "2b7TXFFFMNMF3ridEsu9nXpvjG4M3hzVEN8YpGJBUWxFeu7GewMSZPAWk3GH7ZUfh4yCqXfA81h2stBQhJmAgcui",
  "key6": "3ak97UAsdU1sjQaw4txS8CXvRmoRctRM797nYzUpXNJ6XkcLdC43KXPyz16HutxQuWDrW62CmtBaJ6Q2QXpWYDzC",
  "key7": "4nazBgXHU8khnrj7UEnLychNNsnmQtCL917RFfdN4KdrVdq8ZZHcZMuVwW2HWLZ8HTvBxmquAS7eYY5HZ9sfGjTy",
  "key8": "5x817PFsLWCo6qeg4B8cpLDLqjuxAa4gyBejC6Uv2PBrFkSJMPAk5uTeSimWVk5z2GNn7Z6jneJVmZJMhCLJ6Zgi",
  "key9": "2dsCwPurEbepBkCBoeSkajT8kcYPxtDkntw8ice2JP4Yp5Fw9HG5TCuNSHA2U1prEmZUhd3WotZ1TDXtBM3DXkNB",
  "key10": "4H9pMQsSXCix2fbniZMhoJs9PnfhPDzmbcsV8b4mmwm2eq3BwnbmmaWnWCe4ZSs3yBjSMYvbEy256Cr7sksVtDjN",
  "key11": "4ZVrAZ3hmo8YFiKh1FHB5Ac8EkuzjLhDSkznqcxv2wxQwmN5jnS4UWjN2xnW5LnMFrU3iWJkTgKwQZeDjtxfD1iA",
  "key12": "2cNQH21xENU5xSvNqJNzDo5uvWNpTEycFNBZAWWLZUyNVkNc3sbG8and9JgyGoXPdxmnX3qCYsnLfrxnDR8RmKzs",
  "key13": "2fsDPvUNy7UkmneRj9ybfMRwdRp1d5FAtU1pkhAhdTwkuUXvoKctBC16XQ5j9RyEswan3RF2TtWE39r6ZMFYbyzP",
  "key14": "2eepgwwRwiCvDJjeMSBaVYsxhGtkQf7P8GtKX9hnPWE7HRnrR4Te21Fq9XvdomuehRtRZXbzE6VpbUiKJRkKUZVr",
  "key15": "58Ub95CkRCotTvduKMzuzYseM3pLd2mBmBGyr5RUEgJRGJVhhDJEujHUhRhT4QbtHDfvuTUSk7DsxHFMdaZs6Hza",
  "key16": "5atMKVhWxNksFmsSaDkyhnQxoxohWaMVibA2QEC5wPRiUuF1P3ZnmRDBQkTAesqYFYmHQQC9PaegrKR9p57bVW6g",
  "key17": "2GRaPvY3dfvCPkRaqZq12dsykCf8FdUx5n56ZmaXLfuCtvUZJdybQ82E3kVA53n43Dbt1exLsqWPx1GpE1YWdqCq",
  "key18": "27nXtamxHENBCP83JJNAPUJ5YmwVXKn38a9aRM3mnUvz47JHAuS9CnCQtyVVKKMfBLKugpyH5in4XQogWZ98QWFn",
  "key19": "3D56WwD7nSeufhw6p4SUb8y8bQbuSfN9WBWAYMjfSU69ZTaXHvKVVSYhwpyTLdqQ11SdinUFtxYkuzwxGpGb7CxD",
  "key20": "3aXjtiEvbyuS3YdAzMXitoDhS6RLZHAFNnwUH88HfBq1cFzpmxLGu7R6KLDovq1TFfqqSWs4vfvitDSQuj1bbd56",
  "key21": "5KKCUnn4jsBLis8bWhbod3EcWx1L2QyUxuKDThdz8ePw8g34AJ2VsBcnxe8kLvMo4hRJXFSLtKVVFqLRdHw9VHSp",
  "key22": "4pbTbUeARRhdJApD6b2maJC7acqATSJP5XbM7yXkbxbwKniLvy3xmz6vE1DBmqzSYtCF41AzWhpxyuAjMz1w2tXN",
  "key23": "3fRKYqM9jvrZdpxA8LeymKB3BiE23Wu9ZwzkXRnQ1471zBoHDT6QEYBT5iWJbmmdWWhLvnFzbhcwsTzDxaPgvS8D",
  "key24": "5AKS3SqwCiMxpPAQj9E87GjUeGpERnmqZbfags78WerXi8eSUkGJtpgg8gFi8ZuYmnR87YnytZmRDRv838Wfin5f",
  "key25": "2FfgxEroJqJmA4RxZwtvs5QGSGG4sdimGqcHT21fScSAH97UAhNFvX9DrSPM78Um3X1ZeKYYHPRUhNic1JKfvKED",
  "key26": "zYU3jhv8siw1zXtNUnfE7PY6bGjhe48w6szsveTCsZEK4h3Jbnd9CUnLgF8u6aeCmU1zqyBzDpw4HJc4V6Y1Trs",
  "key27": "ybj6XS7zPzPHzzaGDB7p1svvjswh5tmLJFGQxrvQXfq4LggnXy1hS5dg6gHbSXQyWiUndJ9aNnDtCWMNiLKmRwm",
  "key28": "4Gq1oh8j84jF1AxU7XYah9Ny4wQ6ty3UwKd21dAUemxDDqCo4sDQGRpP7jJUCGmRzdruKUq18GqkixhBhsmMWY5P",
  "key29": "62Q3nXY9HQW2dHz5nAPs2E6RGGiPktu8PfKUTt6K5fNo1GZzByyfc1bV6iSrNLHCN1nJCGdpSkcg9bNN3BYTQiQy",
  "key30": "Ck8ftonj6sNDPN37AejMp877hMKE9sqxVnvL3V4pjf6BEnv6KwB7vDWE5kx79vkzzHLUDu7zycGbxDQx586pzVV",
  "key31": "3xhUBmVbCQvCMU4U3cmn1zQjDSd48zXVfEHPunCoauqmizacGjvCtdSXdNL2bPZsyJvgdvrfQu6FJZGKZskD2Zaz",
  "key32": "2VgQEYHbLu8ZTsbtRR1L6dEuyN3rxhMrFd4zAwvR1uCepZpCJtKGWXf2RTg93ceRuDpB8nZgGybr6jzTQSXVbJXm"
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
