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
    "katDGAuFymz21VPQ2iHvNtvxXCPqB5p9zmiucBq9fTbEBjMfyrUsMNKuekhhM7eiccaF8xWzy7PNFPTExXaKG1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DDHrJ3ASHFNPYnDwjdYYvVqUGq84zRTgDVzePpGEb7Fe68qkgXpKYJb7bdq2VgpYmZvhdJsCvhwVbLeGUEnVb3G",
  "key1": "3mdmonBKHABQvz5K5bnU5z8iB9j6rjYV2qiAEEu3DcwaRpDdsZpswmut5SyXeMqALddNFEu5a3UTjYFeemC6nm4m",
  "key2": "k7oERjogLtCG18UkCyhVmFZagC7hxM6PVwsKSoGbY41ZZJmvmxs5jrrF2JoWGPzdb7HsuGAbkWZL5k8oyMfpaK1",
  "key3": "zoNXq4Bv726wR5NSwnAu6fNBD8MuWob61GKMY4JDoNpu2xoWTGVM5ep4CHHaZYRHBPeBg9HWzrzKvJs9HJg8pfN",
  "key4": "5ucH4bqacn5FJXTt2vwnUaFnbegNfrbqcPDTqiJpQtZffr949ws7CGSmDaoTA3wAAGHo5ar888KV3jfjBi5yhsf3",
  "key5": "4Vm4qYzdx51pK2q5A1cniJwa5pWJc7vMotirEZnzEwbNqmaxiX6TLjm5Zw171AAsin7Q1BzWtiMLHDGrwHWZmjM",
  "key6": "4TRvLVMpbWFxSrG9BjRoFrhBPxc7MaSdiT87CArNfeDf4hUS8PEeaAH8g5KrbA2xujFatNHhAmGvTtqnuLBvWAE6",
  "key7": "2xyZHCtx3yL31FdTfVirPgwnGXPtKqjSZJc9jqkFGTa3Cm1D6w4j2av26Uns9obgNnYyZRt6PzztpyUUbcRHZQmM",
  "key8": "wSWQqoVSaQo5VUkrMigScTRmnYXpEzQ7FLXFWq6Cbo16Jv7Vfco2BZ5iZ8BisLDyMhcE4SeXMUXPkB5v6919Nmv",
  "key9": "3BAbmZLba42h7FfLH2bUEdRGCvMdKanUBSUK7mGdkmUYP25AwSHRydW2iQYKuAtTdFDv7yFRJJFBRuM1XynMvJoj",
  "key10": "RZ5z2v6PaWastwqRPhuoBSkkhHe6x8rsMEe2MSmVxJqWR4FCxsbM4dBThh5GUGZ61aGXjvbZe8cjcFt6KsvGtkH",
  "key11": "4AGVURzwHyXsSsvZNF4h3HktSdfehyJ27QSQGvSJuDTfzarpHFhKjv7JVWV4zcw2WpEuCg6Z3xH7ynxbbpn54Cug",
  "key12": "35MqXmWRmLLZdwvsggQJDCZLdsm3DK19k7KxBfEHQbxrJynpKujseZtHuU14CxoVMYLNjoN3zFo6Q8HqTSXFgjDx",
  "key13": "FAcF41M2P6ZtYnthXQY4XVctvhLHjVXP6cegTVjU3zqfraD4Jf2K6sA3YnyHtSbuu879S9Bjca3sD2NcKJut9Hz",
  "key14": "4E1i8J342Zn4FAy1ootv54fRefukwPzau9mQxzaMS1DwhYn2Kd63jkMgLuzSVZZ4qjUfFDS9C1BnFcyM8h8Tzfdo",
  "key15": "3tHvTqrp7a4hAKCnLG9NrXnRho71up2kWmoq7XTuVywWQjurZ3B7PHvLk2xG7XtAfxnr8m7YtBqMwi3WpbPtrTpn",
  "key16": "4nBbscp2EiGXxuDaJ5uqmwdVcYigZvgf9dL3hQECYjX6dfUtLSZYVkKVCx1z1kM51PzwjBgW5j1YaKkojjJAuF8C",
  "key17": "2tEY62Q8AdeH633nFjrraNjDrSEZmEva4PEDnny2RHxewccTJHXxU4v8Qb9Fg8eRqgKkQeBx6EMXbPxTj2ujrNPK",
  "key18": "57QF4VHmwi1dzn5v76R4yXfKg1iBJ19KqNqbg4WgDzDuNZe1B2PsvyHG6D459bSBJ3LrfXUmvZQKyP893TfXN7JT",
  "key19": "2VksFvaJBSTqv4ZxkmhvDiZgTD2tWsvAekiXbnBvhoGNG8FDSaBfaUVgFSybyXhGpPQLckJdoX5Kifcq5w8gb4JS",
  "key20": "4SNEAuRz5kyLh3mwYNTRVvXdXSSsJQxU22fqbMScd6nU19dE9C6xomHSfzJBp6UMAHrCEihSLArZwyhqHwLuBC7q",
  "key21": "5keiMzWuo8XdBo7eoac3KYeTZccYoquMfuvgZYEnCRpUFVDu5SusFN4nHLCb8PpnsJe1YnxFiyTGwczPEP8xf7P8",
  "key22": "2FTXCwUM7kiGRFZmSSv2S23Fu8mbULA6xC3RAvDtXGt64mqAfjdsiV2w1akbaCmHuQLjc692DW9ZXPf1GrSZGknZ",
  "key23": "2Cpj25cubDBJScZwU88yYnLD8zvHXQi29Nxe9AqPU76Dnyai8zvM9FmxVMBmxWPXLUoahmAAEXy7w3yfqiYuPKAg",
  "key24": "2zvYexTkHex3sU3NcFVaLa5b94kN4KdCMX2zt3s31NhTN5DZFmSLSU2i7HN2uxqRLNG61MARjcc9fdVMqTEG1Ys7",
  "key25": "3K2MNU1UVGHDkLDZBYAGVs7CLmisVLAbFBsAe7N9npawuJuEBx3Mr7seJcwdTeba3XhcVnNTfUvCPB2RMYcDUx6h",
  "key26": "5XS9c7Q8k9QX75izha1qhzLHoAtodfZz5uBvpponUjZaoQKJy6A5J8SY79CYpxsp5WKtAH9t2Mv7ycYQ1ZXZXqNY",
  "key27": "r2CJVc6R1aUGfLeGjYGCDDp9Nc1i6Sn7sApzqxVkzRJLRBHRP1YGMHhHhzKodikYTr2JrDBiX9nZ1wRV8RAna9p",
  "key28": "4SXuQZTPm4bncR3ptkJ6dWjpgx1qRSNp9p51knwMSwE8MWY6L6vxxdkBvRAZ54jatLgKrELJ6DS1AAZcm4SpXtQL",
  "key29": "3j7JKS6PusFSNKnoEtLyMpeuRobcnTFAAzadEQMviBti4JE9x9BHpKrCDUj2ZasgoBuW1CpJk6mz1VADjmzvH8Tg",
  "key30": "4hRTFh8cvo3giWQNmFji8Jrswk81A7RnQG6d9aCrYD5JdcaxZKzALGXygznqMywBpBQhnBZ5yjsmRiSJWDkXKcEg",
  "key31": "5Y6VngVBM31AXEh5BQ3GBvuJm3NGabmwM9mNjpcND6ZgNWifBRWGs4nAdERJBGuBcs9KBXo2bBhnXoyEu7sK1bY1",
  "key32": "AF2sVwUpsdXT8uhGc9ibKg29WWxj4BiAcFMB83bwUaPDsCHXtzH7i3WX9Z2JNdNDABGhMkYqJ34MnCTE3PDwLhc",
  "key33": "vX5ArBP5p6nNuWKYJYtfd9xAoS7eWsEpCa56aWcqxudJpnQrVLjfPwPtWjNwPP25268duzk2z4xxXzdMgNvuKzs",
  "key34": "5dmTaHSj3bLwFoidvuguLEKscTJmeGs5i8H7qre7T3ZEiAvPtw3Ufb582GMGJzKpmZWoH3ZeHP71Tr5DSvwWNcZg"
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
