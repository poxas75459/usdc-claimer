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
    "2ZdjxmXszUdPFa9LJaQJJE4HRsKbrV9757L7DJ2YX7JXUmVeVEGKK5y2sGwTWNPm9e5nfsKFSJixgLUcXN62JS9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XCcYdyyZKC27u2bvGzqWmSSg9oup3riJSBcXayvaH44EyssC4J7VxtpwmMFddRE4ACSsvYyBqP67Lf8bb1wFkz",
  "key1": "3812TSTk1Nk1M1SK4URisMmMmtfbAkFBuU8xsp3D8oBfL8YqarRV4RHeJARhkkpHa26C99qit598x9YwzNMmxi2u",
  "key2": "2rZvx715VQdfear411ePwQpvjgCCprrG85RH5m8M9Ybv82qoF3LyTFej7FXcTJSRWTqej77FiwoBzePksrpoboKD",
  "key3": "5bnDxULJTNQUKqcq2dESovV8HbX8WPCGTTByjv5fRWgCCrTtsd6CLxLGJnXHyGKoRTiqck35pPZkDFS1MuSKk7oM",
  "key4": "3TLYbG1qcGtEogusQbvLKhhrrEzbvQfXeF3NJRkcrHAgpc8jLzWu5Ak6W41ccnf8FDQbAvnGDkp95kF7y95SJF59",
  "key5": "5FZryTAuuo9sYS61JE8Crijc9cx74FuJxYaHouQaRd9Kz1AGyvguCkzZHo8uYGKVR81oAPStFqEy1rtdZ3D94PkU",
  "key6": "3qd3yaum5xvf2Kg1tkYskZFGP6cM1sipn2Xpvz4r2PvwmJphpkSdZpiJsogGa1MzxgGsgjfYg37EnDnyyvy29KCS",
  "key7": "3ttfLyNjvWBjM2NgtqQS3FmvaGs4WfohUymBg6W56CQwMZQiGBs22wDJCwDy9w1XPMucWdYEyqdCnUJSc7CcC4mV",
  "key8": "62Nq45KXqhYd86CA5i7LaPRVcXcvJibVMhzebHrBdkc9jTLkTCQ6qe4S6Lo2yN6CPVvM4yfUbYzSSLqxx13WKezP",
  "key9": "rBCrnzjRMVMr7BT75gcAwRzot4nzmXVRz7XYLmmnbAFnAEYacHwPNQ7jBRqnw1kJ2s36uGoc4GuqrjWSyHL1JHN",
  "key10": "2cjRe4X2X9MvbANGU42utnFJtM9UPzNKFUNaZ3Li87tHERUnyup83Xc56qh8PjyiPdDSkafnUvgKMac8VSzUkNfB",
  "key11": "64JzR2mypZ6nt7QxCrZBa62U2rWrzotjfhqrS3t7i6sh26mALQy6BfaX6fjLKjtyFzK6AtRTj7pkretLfXVPQrvW",
  "key12": "4EC1xLotUHvgpQf12nbebfPLJtqBmAjJ1J5FB2r4a1MXZBTAoxcMaJ7BjZYxUSZQSBNMigwAb3TUNCdmpeMapHap",
  "key13": "mkyhCRucnoKxXaMJhAsfn2z6Nq3Hrp5ZxM1LNcQNNdFxxfXUh44VNN5uiYGZ1hdaWusPu9rNWUhfuXCX4zJRnoq",
  "key14": "31xzPGi2v8jCfFBjVsxUGBwTjygtd1yFiBBwZCgmsiqe7Z9UDrUKMkRYmpb3T2koA6KH1BA4dt84LboXRBzLdBrc",
  "key15": "3AXSBRMd2Qb5kFXdfU6a3MgaMBnfbLzu4Qk3SUpWpfpGA2fTQ7zh5eGRovFRfxZBE6UhZCKcSDyL1ViCUTDLKi3g",
  "key16": "499PiXqVMd22sPFSy5LCpz3YvvMVWDgAJbBCi2iXmtLLu2r9WXWu7YeYsZAUtVyZrefnpE5R62Es7xVKauo1mnj2",
  "key17": "33tb2AzocS2UYP3GRP4sVopiuypRYAY8XM97uKX5Wn43gAtRjh1AmTF5ENno6PLu4sRdC15n8HCid9BzBR4CNGT2",
  "key18": "5JSotqZS4qcBHQ1jET9n6QTUFL9NrUktN2XEbdNshaHDFwm2XD2Y2NfwhWCKjZato73md4JWoe3vjhyw7kxjfpWg",
  "key19": "VEP5CKqErYDTusPvruGKkvQvwCjmqnq9EVtTt1FX8cksQu4HTbTKYS9gVQLxMTj41EKAhYAtxtmrv2dATiPwZLR",
  "key20": "5P8MkSBAiitLTia3BTrSkin7JT2cSwkAmwezJmfHxyer82PPB9yogWgQguYKQRuUCBRYTtpoLFzq9pPbF59XQQCK",
  "key21": "2hszqLpK4Gshy2NkNuVJJZnrosUSvKMK9sMwb8jGcS7EDcM8Van3BP1aoxrWjYKb8LPbxeiUAH3wPuqkJehqpVHP",
  "key22": "5Hd4PHyQJCBM4AiA8fMwGHWBi1UVk7KyYDbUwSLm6VKkYAFX6YJnhppr2BcccpkQjG5x9dZyJKoA9GYj1NSPm4nx",
  "key23": "2gN1ZJ7QoFjMkCXeVErDZJs2zE1q5L7bkdKj8qFNiFAntraEfNsEDgCR1EXZ8yn8twa5P2aikD17xjwPNVwnPMvf",
  "key24": "4v3KCHbnsztsUJeU2UD54QSUxsBnJbrdA4JHCCfBvB4NgW7LvR5eX7srD3QjcyG8BKgeHTaWiqu8BtzKpAq46jSJ",
  "key25": "3PpDxSbRbyF39CTz2Dbj9tbV3A9wwWBCAiBcawD4MyxXDYY149H4XVKKJC7LAm5A82ZTb5uFaH65KYjWMdek9RRC",
  "key26": "2pfiAkTQ1EThA3UF5eAGx8Y73e3Srd7WAB14bojAREz3Xu6EesAZTqdHVng7XoUsW7jwWaRPwYGboRSwwfFQ7Thm",
  "key27": "27cWcpJ8mYg5AKSF6Q9SEH1ANNYHMEFqcPkhAtjfBKwsukofEAW5hmda1iTYiEi61G8wtxLtvaGWVP6zdovHGiPp",
  "key28": "5xw4hhhocC2HEMaBtFAJM4hA3MByyq7H2kTe5VEVctRLRV5UExa7dqKFtSxCsCmRZAkgouZbGfbwn75xcT8XfcQj",
  "key29": "3jK7vJ4GNGx7sURzFF48FFuNk781Vot8b31dYXVUjvvbFUSqjHAQazDxhLqSVKofnZKszLqhTdDx4zhRAHzwGYi6"
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
