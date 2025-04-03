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
    "2hA3jGuHvHxBRmtzV9V984SYjBdNoqPB6s2E7xGs2qt8UDAhWE1UYGPEda2dgbogxNLVPGT5G3YUf2fjSCQfkcV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57b9La3t5cRMLG9wqLr4GGxg761Q6FupoXk5eQNE5BrcziN64Wh6BDgKoa3rbL3P5ZLB3VWERja222RriZyQHS1G",
  "key1": "vtEvwTmubj7vyN6nLxnknsx4mDr1vvSNCgvkT2CHMXEyPPCYuF5r7fXtM4pFxzRsjaNZBEMZa4YBwXzFdEFDMA8",
  "key2": "2ooVtWfXGiJUvqCkSursjRy4a2ca99i9biNJzy1LwWGCd9BGBxw19wfJoNpfDg8EbkJiTP7NELfgXsuvkH51dqog",
  "key3": "4jbrsUKd7NrGzd4esuy7vXRBG46Y8wpabQKy1ntSJyMk48ex98xE829TBTvwyrd1dq87rGSRPFrDXL6KtxjpUD2U",
  "key4": "4E1KcGQHF4R4n4CAGJV59ePtGcLHSBgQotnTzbrt4fZsae8SttmY7D62k325TACYAQQZxCTeHZpJprB5PUnEhfvR",
  "key5": "4c1gucQm1MrqMK15XkNGAwkfuRABwMkYmAL3L9Toiu5jHmtYa2GhoFTjLmKSmzoQF8vhU3C5RKkDnBjJfBAXpBFa",
  "key6": "3P9WkFghr8eRwPGrRoLEXygD3cMS17jsDV1S4N5NhCpmwGBqTerLLye1erMbTPW4YZvsqm1Rkeiiy2bjiKv6tbrV",
  "key7": "5vuAgWY9oAEWTGyxP1iVyXZuTaR681tv999E3ej2YTBxtH6UNTv3vBmRxRdjc5M526kFtqkyVPh1JMs2SuX4jfwe",
  "key8": "3gd9HHhjLWPwVwR1MqrB5onZwFdF5ob9vMWtCAZKQXVNkK3fpJokvof1wYXPM9pxxYsaVdH9A96LYbY9icuNooKd",
  "key9": "36THMbmemMhcHwF5PeaFoZiWV1zQE8q6X1dH6btiDpyykewnEaUQsH7S5vFW3WSgih2xUDap9qVWe9DErr1XFvkQ",
  "key10": "21CEK4CTzym39gMijsbtCfRaVqUHHoEejpYPPaFXXr8Dk3DvszHrtFQvRWwphGbViwFVQQ35YdTJNRVVPFJRN7r4",
  "key11": "3mvtmzajkpkC391aPirvSXUMi84LdWRLFZFXYoMeW1hiKBsKWGfHCjvDFYJ85DEThNrR6eZQvvcFX8cjokdYfywW",
  "key12": "juTtMmegd6Ssi3hzrPwAhjFjq84ZP56EUiTY9FKNphm9sVLq4Csq8dN7dpy2Vkc85VwySvqm1g39br2s2ASdWBY",
  "key13": "3hzsF9eWqtay99N7hC94KgxdTsoHt3haBaZ9Uzsy5Yw3XXvG6fAZm8E92csEkPydKf1MVRkxFMbr9bBgPpCWDmjk",
  "key14": "2tF58FthQqsFZfw4FVJ9jXXmjXTpXYJNVwiyWX6qkf7taQETEbqHKaWb7uck5CzKASHtWpm5CSfVXFHLTw9u5sjA",
  "key15": "4GK1tuHw45xCohBembYAEVMMDM4k68zkRzvegvUyPySg3rknQPbis3HTzN8nZtnUeYrMYLZ1hyiU64yHRsoxgJ4h",
  "key16": "4npYoqj3kPDZwbAmCgmdCafJPiQe8TV81tKSBJEy8bHy5ZtW4sLuu3CTPUm7g65tWZcKynW8XsCRf47RJBsVhukt",
  "key17": "37WpGL58FLStwCz3HoJxSQV9pW8V69D2HC1mG5vonU8CmBU37w7iyiYNWakek7NGbptWzgzTeaQ18t4JmK5CaVWP",
  "key18": "2tnxPbRMeEE1CTNSpVhwqD62dAvUhn7HDb6AgzyFkknotmQ7rE717xWAan2M6zvivsQMU6qWFtJ8z6mYTwFTgscu",
  "key19": "Xf7N12Rwrf93iYGu5kqzUK8fmNS8R31ERMR4Tq2SYJH5xqPLksez1kWaByE8kUtASyTEsqwM7d98uq46ZhZ5SzS",
  "key20": "56rSH1T7Kr97YdMNPcEJApAYJQx93h1RNPJJ9CrvAa5bZEFChTCkCqRbqPaXqiDpyaG3VwMwMD9fPqGRX8DZsPkN",
  "key21": "4jp8XnscsbproTpSQcSgKT9LLU2cRPP9VJes3cSFLPMnuHciyMuiAkaK9iCkVZG5w4hcy1TzYNPEZLxv2gS3zSta",
  "key22": "2faLtNdNi1axLfwg53fDryK82F7oUQWpcb4T28oLfKSXxSksXT5qSoKXzYBN9c4V8ZRQuBA3Wro1R4cdRupcUUny",
  "key23": "4GSiwuvTDMUN9dfgJjyyJB8t77UtJ5UHPcMjSDMoi9TGrFwG5EbS1ZpK85SYG6tRRtmiZzR5kpBRVUtq8wZMpvtN",
  "key24": "5j1tRErpr2TUJ2tR3zS7SicYEZJxRdtFP2GoTiUZzL4p72bQNByBc7EoeWYjkdy6G26o3gzkiiXiXLtfj3t6mKEM",
  "key25": "5BSSTZYRaUVQY4QhWtPQRtRHeVirGsLbMRZU2GGELrKTodyoUVMZFKSEyP2X66nDAuEwCxAAnBytFXsEEAsJCvXM",
  "key26": "5LwvKaC6oS3AN1RLR8CqNLhuSF2341PsmHDQvos7BAFQBtnhkW7CzWqru2sei5ToQEXDHcTHFuVKYJr8C1zZttDN"
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
