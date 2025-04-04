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
    "5MB3R6pEG3Q9oU2qBtSyg3W7tEtTEXY1LwQAHG9pRBdjEwZZTuY5LZb45n3pWo4oCShd2YS9snfgJm8z4EmbnfgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVxKxhwEyVZHF6yDRoWodYttBVubhcnJSjtkPNKmVptQnrbjCrUYDxknJ7VF9LTX4KRArEJ33RcyYRGxFHoiL58",
  "key1": "5UdsSM7jbcTuuAVh8C7yh8G82FUDcBiBFTScVCLJfqgdYfkKrmr6eJ7T2wBECFw9NHbhPWvJTfcnTby66f2XZB2c",
  "key2": "GjKUJaiYdpYKB2EBgBnz9XW4EVtvxgCWKWvYR777ieX88ZDNQgVwvVrktJi5MNuYC2qB4AF3yw6Y3t32u2W7cDv",
  "key3": "8dH5VuqDauLHKTFQbqJHuGBdxgwGWWmcqgq5WWaRf3vRHtDoF6xhvSg1PiAfKL1U5Vp9goANGsynuwXnyGaFAf2",
  "key4": "4ZwgGEfFRf1fcWdHQ1NeqQhycra5eWAPT58vBX5QuU83Savt3QWi3aqMEMBXrBaVW4SNXVW6JhWUEwc22NtqtWTy",
  "key5": "3dFpz6s8BX1kzHq2i6Nyp6ErSk1KTe7BBoraSs8bDSHfKuSPaFdFZDYoX8JvSwaiKX1iKmkPxVidnVfRC9eZyEEM",
  "key6": "5x4YYrijNif8spu9YqRWndADZavfRj3imTV6fDPRiqtMCBgosj8eCFcBYNczRGzrXt33KdvN1uw7U684CUzY6VQd",
  "key7": "Ug8ii564siyjvwukuePrLrkso6PTgzhA4YV6LDQQ4LpanPZettovDXnXtPQTswHt5859K2zgtLQoQNwejuHb1Ps",
  "key8": "5ZJgHVT555fkFaTZRwbHPVT9y4r2Wu9aHWEn3xo8ode38agsdQRf4G35p9vEUVDqrEh5cNFNRFib2HisKzVegPTc",
  "key9": "2G17t2RvNhew88Mkkk5J7EVHsapHRA67kkNNUHSLshgmSrpvvaJfghKgfCyvMYVwB9YoY4XHtxojeg4fan5ymHJF",
  "key10": "2Ewyxy7ypCakHJgRw3mRFMpy9Nzk5rDaoZuF27ufx6KmXy4eye5TXRv5Hp6XM9LE7Yx52VvdgmoUfhpa5JXPkmM1",
  "key11": "4cCH97yF2cj4HPgucRu65uE2Ssaw5CzZWu2LF5YjZVSRYQwGFnKiFoccc8CZRuHSN6hWHSsZUUwNpWtyDXVmdgmr",
  "key12": "254B43Xq1qSSXyci67T5JkzKMGUv89MCkkgj53s4mMx39fNNNo9xFDsJAov77bP7u4kMyR5beRtjhx9UpCoAAW7R",
  "key13": "4HuXi6y8TPxid81k4meSmdt4dfyc7mb4kM8XLf4jXzbxM83oBdDsXyRL1hvTNmdU2r5SuJfx9w4LogEvPYbG2HiX",
  "key14": "3T5W9t1rkXrRr7uerbH1mmKyyw8HVLGH3RyNjwiVHVXFHCVbbXR8yeB18TaerzrU2BGRR3cRMBnNCopWCV5y4BmG",
  "key15": "2cz7SMoLdgbFc1MzUrexuPYKESuhnr9dMzaAoN4m6kp4RtxRiNwDG9abJywjqemneNvyCMNTwTn8rTR65VP2xmYL",
  "key16": "2cArwmF2JYFwScakEMKsCAaBefuBuRLNEKVoKuwb1ULqmhBUbALps98gbqi35sJB7B2ZxZYr98wyLyD8NnbpMCDo",
  "key17": "5cYmzDxdq2PRvoi3hdMBkDYPikoHJsst1q4gi5iSsR8rNp8AMDuVRME9dm4RLdEJAr7S9ZeSqoVzQpHbbZpLWQFj",
  "key18": "3vrLyi5XNUdDiVqXAM3jxAoVEQzZTBcPBMsfD54QMF6jRUekaNsk8zRquDrQkYxscgsWXLd2eX4725zQ9fyXtSFn",
  "key19": "5jodNMZbaV1daniYHi25boroD6JCCQGGbLN2cn12LFEhSqoCBRGJFNM7h7kFrd3knPUArSmDhwjek2KZ1XF7rrS4",
  "key20": "5o8tfzBtGNhDzkbc2CdLW15E99SwVUsXN9MTgrvQSGS7s26N5E76agauzwFvrCgYpsz9cMnErLUUXKghPcFWpiT5",
  "key21": "YCkxaXfcYFSRL8EqxUHz1z3bQrNUXb15fXt53TvQMcip9ndBKP94vs8YHuQsBGZjAHjudpj9uLp6FYCSYvLyXHD",
  "key22": "3znRBn2Ko6Q4sYktsFcuVTtZCtRPbqXB8pYTDpGi33GhGS9VDwmUkj99bAx28tEmeWKQn9tqdtvrp3uy6sWAfnpN",
  "key23": "4xfMrfsm4xT918dGU6P6Xqray6CDzFFWrubuKgCpq9xrWceMFefS7UC7qanhZhQvWvM4FRsMWqee1h2SvKMRr3Ed",
  "key24": "2pf2F7FhdU95jfmRj6Ez3BmzxJv6uURfW6EkWveGmLBycgek4bUqCk8udtUjFqTkkCRgsy4HwJFSxymj4HgCDKkE",
  "key25": "4X3wYx1UWJ7vVciqat3xGs9327YgPo7Vdp4MLE6ygoKaLt8R9FGzAu9oP4YuZifVqiPfQuP66aWs6frTXGnvrqRU"
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
