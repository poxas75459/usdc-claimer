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
    "24r8So97pC7tmGQnaWS8pGvuJeixkBH7wYLwzFhRmes3hEuK6p8Liz8MQqdLFdwutmAr7fe4wcY14jBZN2yz3gF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gUJYo5di5pTq8Sw89UTuMJ8k4redF8uK4H3PjkGVUaSiqA5J5e9fysMvwKmPwBPcrKwjG8zXDYEojLYUToQ6WKi",
  "key1": "8mZtE2bMcePZRGtsrEXmpnkMgdompxcGBwbXPoCXSBdr3CxYkF3TtjRBZeNxcQ7oT1NiuaRN3KCNMZ68cwnWou9",
  "key2": "2f1B1TqsYWSpv5RFmCVxEYjiFigKJhbpNqKeLfCqGSX5mhPC4gYzLpJuDLLKyNmGBSDyyUGvgMY9A9dEiQdDWJz4",
  "key3": "5d6iMPCD8JX5rHiEN9jrhKYSu5MLZyWie1Vr5UMuEQohwvC1qaH5upXXDpsufzVc7FcNrSCuXr6YEcUrGcMzvfcq",
  "key4": "4rAAKLwghukBWNmGzuyA3cJUHXbHvjsvJo5hXcLcBzJcTuFqXkV82G4MdrLCVQQno9BgzU4Cb4aD53dr3TvPLLLm",
  "key5": "3A8XhGNHRW96gNTVDRYb2k9M2xzfgn8aXQMJUv19kqbcXpZyk6q3b3vCbLEfBku6KQwvkNyCWkXubksWQFgGVZXX",
  "key6": "3yg6C4wk92LtNvvGeiph9nvjPtWzGSpWyNzBXfm2q7PmY12zztTsD2wd4b9rXg4tjV91LCGzBNq3HGpTQDADxKwW",
  "key7": "3gL4xSexQe68JbZVis48xUqUBSEM1D2dQrTL6GAhsgPS9XGemdYPCwdjqau291KmfDa1M9JyKiaNjYrWqiKwU3SX",
  "key8": "4YfJHFLGuh1LMipEJ81t45dewgA2noGte7Ft2Fnfud9ULSGzoCpZEtS6ZVVYyrPSUsiuo1v4269p5v1DhRnxLTKL",
  "key9": "599Vo8Wwp2zRSBEfKsndyq3FxkZ6rwMSsMz4Yd8Ajad5yhdjUA3s7ASnaBs1hUDVcMmmtsLMBndqfJU2Hjn9Q7e",
  "key10": "3cAxJRWHifbH42XcrQ4JeYsnGkftWJKGs6br1DH3ek2FU2ZxbSzA3gXM5mcRwoNp37RAEgMaByJsBkY5d7vb3MD9",
  "key11": "ibqPnrwECkYTUuExSwLMFZRc7PtxZ6SnzAZnahM14P1jEsbBJjQ33MmVQtLTnC24bTtrkKjjUcMqT1Dns35fjNk",
  "key12": "38RJZ6sg1W3T5FgRFrPRuguQdBo4fQCzVCkpeuxzTQsW7J7JDwTTSyQi4PWXM1v7QsEGoJrxxvKgTxyjKfKBkMSF",
  "key13": "5qa2DdWWtZQBgS8JnwcCgCfof9q8WrWUc7ezpBgo6zDBxA3rowN4nqeaM5YZ9b989EYWpuVM6TXemTV95amYqdCk",
  "key14": "21HCaf7q4p1uatcixE3Er4pyXkCGDEHha3cUpULxHDzJdJfzjWpqap7MFJyMXhpj23nuFVk55UiX75NFdrzBvvMo",
  "key15": "2wbzUUeNzELbewHaaRugDDL5z6onme57xR9ZJt5yryYZGZVKdXdPChF58Nr2Eardv8tmFh2ztqx5nmjfdjX2c3ur",
  "key16": "FWuq4mEFwK9o2qPqu3a6rtQyTyjvWAXJeVNrzdQ1phwMub1QUgVDZtyWFUqQRcHoifFHCVKVk354jPPgbmXtUPd",
  "key17": "5yfFxaErv68xe5mQ1qRns39RvTdYYEdxCANhFPudUFmvw213P2BFPoXAZ438EQEdg14cXgbWPiU1mYWh1fmVdbDW",
  "key18": "25EWRLQq4RXAgF7LnNJ3c4BNti2Hmj6LKHioRMfx9wbjsENvxt2UDttH32ENesDuMp5zsVw5hfmcw7uJtMLdw62t",
  "key19": "5CoG1yEcq6r6B8gJENE6bvC8ACHsPfpQS9DMV7ia4KPhcryvgeUK7dEJQzMVSxawpLz3gJstqCU6AVt7xyzCA4k8",
  "key20": "4YSqTG4hqtrsHWDDwuZ1B9fxumkvfnpxpmNs3JHtmn2uPprBXbc9cnaDdXmayVEMpUqz8vqN2ZR5f8JYATb7UNG3",
  "key21": "3PLKCB3gX4ZGpEYy3ctC4rEw77SGzHsgadMiidcsLAuJnheBttEvMCK4EbJqnkfHDHnDq3A3NYX3Mi5oSeg1N7rW",
  "key22": "viwEpQydptNmpczLjn8Ufw5kR3SAmsL8HsT5C7RWcQhM6K3aQEaMU2pDDfoA2xp6hCo8JvjH46iHavRaSfgDmpK",
  "key23": "36mne1HB3qBc2RF32Aqi3Awnfgm8NyTFwPTTpdQ8tkXfStjHnZss9Mn3cCiLQF2f7CriwD39JW5tvQDsK6qfmz9N",
  "key24": "4SHcQmAvdkrBy81hn55uqRwZEdKPASdaYYzPVDtwbpzBPP9x7d51uMYzcXxZTrahmkn15B7CoZ2Qm4DA4F8btq9D",
  "key25": "633vDPe2zRye2CJPpzQpHZ5kuNyhdQjT1xncUJmS45KY1uWwHbBmMAUTY1ohHBcjkk6DeWyac1ZwqAr8Tua5ACzz",
  "key26": "3TRRVBtLfjxju7km4FLW82xY3defKDLrT7UfbWBLUS1qSvd8BYf9ZxGbf7B1K45owk2hqsXYTesYVsiuz9LPm8PC",
  "key27": "3GPbRxVZ8A2V4AR6mczgNgMpwghAp6qf8qYNsEqzZWLDfHu3fFXPCSq7wppeWtpW5KdcuuP2ng419FRKfhFi32sd",
  "key28": "66zEjAjH9THQZgJeuTGHyhWWJmkDEqAgSHP4TumnzGLkDjZzWygqEDwiEikTk2X5SZxoaqxcepPyf5ks6EfTC61m"
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
