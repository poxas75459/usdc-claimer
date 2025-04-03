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
    "3HVVH5Fc88tS185UBNKEJ5nBEFDKJuYxWZgPX6yYoUs2G88uSa2dzJzRe9yAsxB7Z2jKebCKuZmzPZ8siYMvmdSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CyKPCbJgF2PKJuaUCqnVRYEhujU7xRbqAUbMymWaanQ9x3nQBS3HAF43jYPxCGHrhizeBtQjzp2tdzzE2JwWd3c",
  "key1": "3DAfmpj6ZrzAkPYAuMC5Vi3GDrYeB5KtT7Pj7hNV5catNrSL1sriNKqMPr6K9nyFkcDipL78b22Lyj5nWq6cyhyy",
  "key2": "5csTKPxAfrMSPNPHwi357an1Xzbykv45Fcg6VSMm2R57Gk9WLgagkUpnvJnMGt8CmbUKfh5gULbFCdk9KrrSDeud",
  "key3": "4fyZ7Reb9WT5kS58hyEmm1P2eD5Laix6GVHDyAaRJkBUrDkP6rZEYdrqHDaPybeGJL955xec5srdDGR7duNMTBJz",
  "key4": "eNr1ehFdjBnmBAhn4pV7mQxAcKhZci4sdb5i3vKsiesiKNjtoLX46UQfd2qZdWfE7dhCSAX2EXdXsMsojLDbZ1J",
  "key5": "3NVFXgz7KTBqoL6tbrFtxpKFHXt1ZWQvaHNkAZnQ9RB9xCfEqGbSyXURV9W5UznDoSu6A7XMS4wVbERP5LfM8m7n",
  "key6": "65ALZGW257AtoY8ERdFAYm7Rqvx1nDFWSCfmW23PmXwqQCoaV4xuS897UjTfDnsUgKP1HxeU2SAXKGWCiMzhwLUF",
  "key7": "4E3DkNn2mv8qkDyrqCNZ5m5tYQLQ8SCQT4iQPykBjF8GyfALpfRVikYzF1v7ypBdPHXgF6hVJjuWbHJ3nBnRamy2",
  "key8": "ui1oTuYWgWBUtbyAoaMQwQ4HjxiCWdvto3ieZkVRS3B4abvewvbJeWFWzoyJYp3gkVnCNDft27Ato3ygkxjZcKo",
  "key9": "7Rekfw5pZJTRnq7TNn4rP6EvHKKQEuMWkWJEeffe7276XX5WgkNUtuujzQoPgmiqj6pqGsQKRjK5h4owpwWABim",
  "key10": "52y7MvLJZN84RQJQKT8TLfxGuNo6L3EFAyG7kjF1UUVydoLpPnoTEXEX8MtzGTUnKZBp63JMeqAe59DXiaDeCgxx",
  "key11": "GAfxmbZyuK4nU6rcSEHcxL4i5YWGeJnv9pHDbJ6s46FnmXCqcJRbmcDP2HCn7k19PLnXcREdrubi8YmoFACdCjE",
  "key12": "4u9mwtWX4xboS7wcXKnjJGVmjbUQyCoEjAgfTHztEzTmWhSJJd5e8j9iYvSi386Um4eCznrpHZuUuiCdoD8SLhPg",
  "key13": "2oAD8NZCHRwNUU4vUWdcXM2zd8PV5s7v16QnJVPuPn2DwTMKxbtSrNeBNcvxcDrrxaE34ADS3MLC3ujV6iM9aGz4",
  "key14": "XBfYD7cyXubP9Sju7vskmXLM5eYqAnCpjrjAKESBvPs24cz4wRvJQC1ueYPwTvm71CiR6xRL7h7Sk2h9FDXxMuu",
  "key15": "2Qo66BYKE6BJni5s95JqUDkscXZtdbYxRw8nTMz9bmnrwUUrNXWh1qJG3MB3p8oveGdLe3dP1in6Pt3JP8AMRTYz",
  "key16": "5nKsfdwDNVMmBszoJLpLKiwiDHfiELxFF1DZJGcjCqgQwdS3Cy9YKGyzA8fF2MCMt5q8LigfoPyp3p5GNDXYKaCF",
  "key17": "5JCEnBvLy61LmnYiKysJBE6HtC2mapcWCJRLnBQ7R5HDV33D9JWxNt63i1KupRvXxjK9fKXB3TEoBxsXBZG646jq",
  "key18": "59A7H677brHowxHVpNWXymZxBamXSU41D7Lk2fEqMbUtL9pKtsoZxt5MaQgJjTwMZu3ccMhzLE8ZRxfTbSNSxLTD",
  "key19": "2rVkSuKBS8a26NQjrokkqoinirf5mGH7xbHdaZAxwBR68XuRep8czqHinNejhYX7nR5ziZJ6uD2evVeKN34bFsDS",
  "key20": "MSQR4D4AvXnZ4piacnWibVD4cYV2zQ3GGnv5SUjGCooKF1HXGjnB8GL5s5trWKeEd8GNzv9cx4Woh3i6HCG5HQC",
  "key21": "5eTEtaBuqEdvUVpdeELhKJGKpt6GQLxNTLBuyskSTRHrS3z3BwcG8QZSfp7hs84MSZpoDxXFoKCHJUnqufzRdz7k",
  "key22": "2b9uR8xYn9efwQbycjBK1EfuofFcPmgZWnb6p8Bg4gEX9hTbKck3EwQKEUqnETMzZyA6fbVEWiyVXrBGMu4eDHcQ",
  "key23": "62jwcVsr5Za31F2X8wpt9u1EEEjjf648tnjBbHJpTUeJntPeEtjiGsMUGeZKjMbLaHoCqTad6Pb3dJjqNpnVrVsX",
  "key24": "4kQGiSYs3FVkpaCMkbEvQKZVZKgHG7tKo9tkYnbCKWMPxSUSwUyqyH7reMvc8LqcgGspGPCjsJ5hMUK6bN4SqK4N",
  "key25": "5b6FGCLxBuZhH8vJTK3WtWaG3HiV5PZgUUFDuejCWmF4rVtQbC9VU736cudFWbqLWgwK8ZY7o5R1H83EycWMChwv",
  "key26": "5E1JKsNSt9kjgJdXcwbgXFJP3US7TGeLeHxc6bsVDvU4veveDeTgdW4qAs6Yvid1BaPyTrGKAdtCRfXEgHBHKAFc",
  "key27": "rYB83k6vdcX2XfDGaWsF9HcJGamYwhUCWAuiCTqSSnZGoJFSLBSpAJz1Y5H5wdJFKkpBkWbRJcCBhWez772YxVM",
  "key28": "4axvpKnBgHQp6wrcKZXnvyyvugsp4WiVPBQmKFempk2orZ7Qtcd6ttRkVz1wZb3wZgTe9fdF4uSRrp6c3dQ9iBPQ",
  "key29": "3YuftXWycJPXNXhoVMrV5kMgcu9ehbHjPk3JRiJnCtuyaRoGa67wSCdaqByCC4YPx9wQqtM9YevkSgd2vGBUPaLK",
  "key30": "1dEkdC33owvz18VdHYVPWWRvwbKeG5Pn7gJhsRVAsSZd7R7bUgLPnjtdXVvjFzndSc1uaE4EEtR6LH7vXwEVzdZ",
  "key31": "aJXxfowzVY6zJNEDwn1UGmwgrhUPttfHQBQ8PgCDiWEFmmJ7cR7pgPwtUH2eWYqnbSTCDXoQvtrMAyisLNZmZUg",
  "key32": "4er2YtidR3ZXDmz6sqCDhzqrXUTjU8KcUByMFEKRpMDf1y92SquYovMEAnnBTrE4y6pfDFasWmbhgzNNchi3T9Ee",
  "key33": "5ytWSSiqhdCx5xdmqCeoYVHUZZz6VUiAwu8E4TVFDLiGxTYwyBPSTJs2nEzu25m9JpAct58P5o1HfMFJHL2Yao3U",
  "key34": "3UE2VsQrAXZ6nrKUBLVLZiAVSYaP7rQuHpgC3vvMZFqau7ZM8MEF9KbDunLdZPBYQfSF6ycw3HxMNuSBe9hk7UVa",
  "key35": "TtxVMqv2VzF9hGKpMYbkYEM2RgVpii3dsm3LMc3ZXWEJGZK6QsTDNgsyok7TvnuYZ3Z9vd7iGFxJiaCpU4pSqxy",
  "key36": "26PVbxdqsknGNc7xgyX45HBzAxieKNvQApB4QgmE6qmejGsVm7my6ckys3t57CNr9g7AZDyD46sSi176TB6DhUnx",
  "key37": "4JKhM6vdkzG6PW3zLvMvVV8mJ1WUuu3WqM4corwpP7aBbmK69F12kxrTRSu4R97A3bBMuNq5WWjhUvGGYBid7zDu",
  "key38": "3iKjUyXALQJVZ6ui2ku6mCSF3vaBv1RVE8zXMsLBX9afXuGnbP9U7yt9hX6RL8f1mxTCS8WsEKzxELD6Ej6xcPyy"
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
