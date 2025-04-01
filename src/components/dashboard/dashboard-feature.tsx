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
    "4kYLVWrihen7BCPuWvrThvWCLmM8HXc63gGydDnD77NNHpyXftTpBwZg2SXhqxz6rrkVwUR8kWChg7uDTyhP7J2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2951UPegmaFeHe3ymKcNopvWYhjcxv4ef14asEHaqXpoTQzUeP8nHGvDkvtH1SFCQc1UWuVtB5tig8RCcZErFpjk",
  "key1": "4ct6M1LJVYa6trx1TD5rfrCDtfcaMdCSdCY1Zkrj1PmqqyZzYCP7dshfHgox97LUWqpxTGWC2c1v2in5zq64wjNi",
  "key2": "4xNDjFw4cHTehvoTsyZTPsdcz1hFYHB4oRpgwa6UWmce2sW81aofwYhe5Kk46LMwxCjKa9yysa8T75yabCuqjEke",
  "key3": "4LPTNcTnP8d6paTtvBNB5kkqHGtjgYyAsAjCc7LyZuc53o4YWeR2ikz58ie3mcGTTYTNYMFwt1dze9PWZE7d5Rou",
  "key4": "5sWht3GLHayznc4nunHyiKGwvcM2n3ZUkyZ5WXHjuMEhw7NhvuARuQKw1W3XnWkg7mWwx4tAAmebqaeVwKMEuEdE",
  "key5": "2bdmu4Nh7znfhR7xKZg8iayiBo2weL65ktisdJWHkttoUPsX7BWwSJuUUF5p1sFNjH753tWwWeLwehr2n7J2EyZz",
  "key6": "4w9kRyMHojRgTuQC3xtHxnBHMCaMYHnbbQViVCFCoVzoipjRySMKS4c2FfSc6cfb6vijsH3bEAnugvJsRifqULrm",
  "key7": "3wA2WVbXa4dRa79xiAcbGSZeV69nvB8nbZjxwf2JmXLVNHbp1j2iRUUvhqLTSLGrxyZaaqA2EZUzUZjnHsychSCv",
  "key8": "37fSHQS78MWWgpKBURHdCR6St9kVQG6xHLTsFQPoCJQAQe3LqTsLf9LvApg63yKzgCjJgWXPq8qQS3iKpX6uSJFx",
  "key9": "2dCEJJT1jxDqhNjc3E3WFqJLjVCroMN7k5ycfPf5iv3ZCseF9cjMWrpHp2RdwSWK7ELQVzofNKkVH4n5CDdD2AYU",
  "key10": "5Wq4ZGZWf4Xm4Z34HVnx5aeqYaQseDJu8UVdwYUaogRysT6ZpsVQeBx5V6m8iJKJHTUACkxd13dM3FjkqPrf1Yqw",
  "key11": "2ZB5Gsr7C5ehJx7WjD7cTtMYKLffNYsfwaeDwHsTxdaoJ5TbxsyTg3f3K2ztFjJ5HNgc186DdSBGHZDxwfd5srCs",
  "key12": "jFMxrAyctszwEDmsug2NjZvACsywdY6L4Pn8otoDzjKjt2XZT39T2JQpfK8HenDCFptGP7r5XXvmbyuYVfTPrzc",
  "key13": "2wEdC2eAeHyRQZzGuoAh1DeMjqkrauNNAAnjbZHESmvBeYmvBRkAszwEiHveUcKB614uCzQq5W3ahK9ensC27UDS",
  "key14": "3sNLeMfg3y1MQbFzygGKyJvSjAotvWk2AWkeApyXuKFn7xibYyxnV7QCdhCKwQpEvxca3QFtfYrh5thdG7g3AWUU",
  "key15": "3UenZDu9nGJEx3LFE2g3tvbWAG99kXQuUXedgzdS3mCJDdFAURPfWV5C6uZT5XqTiZhNxgHBMBdQBv3N8E8APGtX",
  "key16": "3LJohhFo5xktS86GAsMYvz4hZVTQxW8cJEiKN9855s9ukpjqAagZnwWtK1rZnnyd9Haxpo41NnffxrfQDfs7TQ61",
  "key17": "5U3r94N8t3pjjM4eWYBuqkJMV7kYAWBREpyo11dq9d6pZJFZgw78FPmVMXQxah5pn8nFri8w1ittkwPrDgo8cTAb",
  "key18": "VgdvErU7kgsfSHSVqm5Zg9qpn59iT3CnUNx8PhcMTu6xxVNescs5GU9BjMJe1ww9RCGrwt9CP3zwhKx8S1hgU3X",
  "key19": "4686o9XtajcL19DZmYWPn7uNzkvtuoBkWvmxwJyt6afchYkbo36AgMucNTs6FER5Jph9MAKMxhrDfywteWPmjXq",
  "key20": "wu5r4tGCDx1FEhmsroCYGR4Jg23aX44Coo9tCxShdgv3vkEwtcZwSrft84PjLT4aiuFoaEXeM8zQoeuK6pBNwqP",
  "key21": "2fFgiNPTokrJRj3nrduS3SMdTJz2Xk2YzuwGcksv7yuYBVADbZ1GQpNGvFjBph56MGsHzG5eBuPphpryrbrNaQ3o",
  "key22": "e72UesesuXtGyAo47pVLeHyE4sHaJyx9iqWfDhzjy42o2CtGWCZ8Ph7QoU7cprA16DYgzvs9VZmMA21U4M6e1bR",
  "key23": "4UgSuaKCNGyDfuA71C2CxjzAkuapBhbdk1Vgq3eiGT64QJ9B3x5qLggWoXbPuGYoCk4Tmmio47cvu1sQCZbMC3EB",
  "key24": "5bRVtRaR5QEkK8MpKPNv4sPZicYFEfUnaH21xzEEgpE3Ujw74L4c6SxrMsbrQteLULdEqHhnBQ22o8egMmS2HrKF",
  "key25": "2J4EVRKKRhGHk7vn5d2fvm86VxLXe8mzDyUKooHKhVoViECknQXXGmWpukSXvmqxTsKpN6rTwdNrpR3VaETsuqLq",
  "key26": "44obaCLot8qBdGxjJd6EHjXALXgbZg1k1mwdqp97HvKrcQFMK9PKx8GyK2jsoEL5GqfazoH85hf79AFBwHCAipAL",
  "key27": "5sz2eHdQfYhKMuvCo6g2qRKgd5ZEE2izoXbM2im6FGEbCnGRxGgTwDebHNQogvcfsq71gPbR34zknzfV5Zz5iG35",
  "key28": "mHbQz9uziuS9qHqZ3s5YmLHbqn67EaigE7fPrTjFcybXGuMZLnGctAJT7YPRdJW8JCNw1kR8vTusNymuAViU744",
  "key29": "3DvxpTRB7nLUFEdXYkH9VRcZaAMyP5U7cHyBGPMhYeojGFXtK42xR5yJLgA5vqi768Q7P58FdKUBvcwgMWJiUoUy",
  "key30": "4wCynGtWe3dRHZhGaknqEhpC72JQGPTt2Uv6GSXvVh7toSFsjhGDmjiVBZbzZDtUkPZGohg2cTfybjx1vtNKtnFS"
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
