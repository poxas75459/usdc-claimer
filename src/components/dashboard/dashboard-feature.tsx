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
    "25SpQzsLb65J9TfFvjkP66QpGw9kzzyrN4vHsinVJg4CtSds8qqLsxTq7dpCLFuz8NgBUQbzQxsw5WhJDxzHCLxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVziSutRxHKboBVPsc21ed6vSN3xLvWnekGrJAd8b2pcA5wekxSjjzhER3bGuh8yyydEHrFjYMycXWBUtes97Sy",
  "key1": "5d6mHrLjfGKpabo7CGK4Etva7477TH12MxPSiuN3vmtAVhJeks4McPbykdPB9uQHSXvzCmjDghJ5P8C9zmkADV8g",
  "key2": "5UkihYoZJGcMqZUU4FAxoyME89F32vK64fETB4MimyYmxY6DvV48RPxNhK5UhWgVcCFsqGNBrv1MT1Zd8EW14FtY",
  "key3": "5yFgX7F4PzGkUszMpDLAF3r2NEpPqy9QFuT4ohudSyCJZKmWMZWh3vfQizb6Xj5CyZshqv9pj5H7YK96HWm6zEe9",
  "key4": "2ZBEoX9HrB4PXgmiX3Z1ibB5NPLw6F9der4RpPvgJEEZpgtcdGQ6MbUD8wHFfHsueR8V5Fj8v72cs93A74EbS6da",
  "key5": "3eVFQuuBSa55hzDwPxLP5ZasGzEZbuAvWrYayhaiRg1ePiH4gScZkAytf9ZcF9UbCXKwVcdDSP3HcSjSx2a4W83h",
  "key6": "2fiah1sRqein7eJnrveizdrmWKV3xSt5mjp5hZvW5k2nFDd29rbpHHRFDr3zawWgHjLeuhrUpcyrqcok7x8QMZtB",
  "key7": "3ThSXgYV8ESgxfFn2mAUkdi4XrwgnCEXWxyegFzcJFtMb2xFYfmvkdu4FQrjGH89VUcMXn4SmyNjQ9gSWVDpe9Ef",
  "key8": "3rB2j3mKT2zwBvUBukxGx8krpRHYg1G1B91Lg8k6ch916cGGF7m1BSNj2tiHHE6QvyKhdK5YshSk1bdDYx2qa4jz",
  "key9": "KULwwd8KSeas8Nx64pKs6unQGih8w1Tt8m2xSjzSqciYMJUSG7QoTR5KkTnT7zF4M9mwzuRvQ2XxJvt7n4GoUW8",
  "key10": "4VLTCggNXG7Bmg2kUUZuJqMAHg2Hrn6PwsS4D1zPb5Fw4oaKqaGWaZgVLEu6LCQtE54hDfLJJcGtyAGmjWymNZCo",
  "key11": "5qux9TYgN9i3bwdj8NsQfqMS5sW63LJ52NDcD5CwyLg2s4dpWSvScaWkEv7KxGocWKowWtoJh3Xa8xhbhkiAasad",
  "key12": "5ZBc3UpT5H7ENsAZjJz3rj2gDpkGebo7agf5LxTnyffGDrv3QicUV8eKNmr3kBDTMw7bud1rt5gXj49ntVqVFhth",
  "key13": "ynrMHCfVaLHeVHTqB7oGtLxX1D58NEDGw2Ep6FNKrrGcpL4XQt6Aze7nucidCDrFNAJWite4Wbee8kTwcsJCC7S",
  "key14": "4rYnbz58UenewxaDFFfm5Ke8jCubNxBfEnxXccm9oat74Avj6Gex3AvCyA4V8PFRdE454qjbWtDFZBuJrqjHwgxH",
  "key15": "rSaMybSpuSWFAWY4gqMwCkmoQnDjorX2AvFs9AjF1HPfb8ztaKYkDg9pb1FNqP5ZsPjDADcmqqTKAweYvWP7c57",
  "key16": "2221gy4LSfkuvPbsNfhskxWwCLxGSfPqQj3nrAKDVXdoti9TinxgiQ5aYvveoSLY3Hp8EbXcbJaw4X8ZV2E3hwG5",
  "key17": "4DDPjkgzUn94mvzAw4h5NFBNAAPpQB1JMPMgnxKyFosrZYYVeHQZgZx6nrnMRmfZFqKWpKnbYJyEC7Uihs6zEzfm",
  "key18": "5cpFJvucq2V1L2oYViGyF3fqrKpNx4m3f5J87PGSSXA8bxaRys7sWUVaMZzTMgap6hKPfsMfkQbCRr7rMTRjNTzX",
  "key19": "3EsPMPTMHM99KYGJoE1sKFtL5BwgFsp4qzTBC8PpZUbKv7hkQtARHCzxsfxmZXX25V9iKwzCESb5pUDZfmd9prpJ",
  "key20": "3xMR6YhzVnFUAerKXKVH8VtXygzg2QgHeWqxMJWBbTqPbuEftdUAzVVmMnoKk5Wjw4tB2tPSBUvgCCoT6ADDDp3S",
  "key21": "4UPsfhrCssNJ5bw1LNto6P5RRqpVnEEiktrnDL2oqViBHLFz4b8MNWBS3gpnoWWyU3mxCeNjTDtUjKwr3JxMiwEh",
  "key22": "5pXj2me6GvsUcKEyVRZNjhN9HVHL9CVsVHBQhKzoaS6iVvQW4ABu2sBMVAnJ7Hmd3RwatjzqQ8e7iNnA7q9qCDPS",
  "key23": "2Q5RMZPjpasC87qBCGPNcRZEYYrMs8v8curtnbKJz21qX8VLbb84iwTvEy3RM1hHU14hPcNwtmpGHNBDikaqNGPu",
  "key24": "3ZsFgCsZdCG3ZpfFySrnNCD7ciSKh97B5Kr6NbTZ2m8uNf9YqMMY3F2cQonPVasWaTViJw2ek5qu8wxLJZ6EsPAX",
  "key25": "3kaa8yXaFWRc66NdS2Mp9ATTytcMGArJR9za1tXg4Zjrsm9NGidJkPcGmvGoexirVtwL1uNTDtSsMXHLPE9Yh43B"
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
