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
    "4cYGNk5FtMMMiG9FjqW68sZm4wAyHG95s4iRrCxPgicnm2BQrWFVgb4MAnF83UwfdEikjLdQ8efLLpzZKujy7sr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqK4E4817Bkby4moLH6ZSaA3MMbHmuJXmLzSGzBXrdh1bzdP89tZkqDMhX2H9MfGda5ojpR1y68FSmvV6wWRKvm",
  "key1": "4RatrwSaEKiCnVc6EMRyKZiWe2ooKPY3MaNprnmTihsCnwiEEjzVtZwEZC6XJMpHHBoFnzVAnfeTdc8Z63KDndjb",
  "key2": "3YZr8nT19gmmcsLb8jP1gCn117oDi9LRBJL4aqXFxcyevEk1oERCyz49z7gMSzVpDr9qGuxtYQ5sLbc2k4NkNmRe",
  "key3": "5CpgkBb4mBsEfCcQRba8875R5vC9ZULeXT8KqbXDVEkAMyWS7sMX5sXZ6A3Y9tuX7EARADZ7iHeNJ8N5n2LJSoQw",
  "key4": "4E8AZsanGDq2r1WbzqBvseKGUArgy4AsrPBLKmCQFugob4AWi9UhpHEfNC6NaUJFkv8qXvzPbgnf87JLDG4f9Q9W",
  "key5": "3mJZQrPYAkZ2jhqNgczP6tNcTdpSD77KsZ4ZzBSJ6xLLzQPewojY3NABi3VCUSqumgwk63mSM1912ybZgYA7nj4u",
  "key6": "4FFT3QeMQbXsaE2JP8V4Y3dJ7ptAgcNRY62mJNirkC9ekYDp3zPAqoWery3Q6DfmbdzsY74SBGs54LDqj2tsYHHN",
  "key7": "385vsEhAoEDLKG7LCTtW5GpxXsbFny8VhLwsxbCEGTwy7JDLJ5xe8V8X46p3ZduaXTDWayC7UHkcZ42Gce1Hwkwo",
  "key8": "3xdN8Lxant5oYNZ6gu4f8nKBptaSBVNqBuRBwuTD3TckCD52E5DRYN9JdV9WVU3oaBC1V5SZZuPdsRgYe7V6CLoy",
  "key9": "j9XtYWdbPdfop8e2pSgrYjJfMM1puVAHvqiqAH68Mi8ZCjrmpS4fVbnb2UENiEx68mkLr6ZPR6u5zUE5GRmuXaz",
  "key10": "31RgVGhQTab75TUDWSzPFscgqqpopVWsUcZypSMjy6eWMW3hsRnj5oytx3ovdzNiq1VCkWTdsSye9n1JGs876WkU",
  "key11": "5FRMw61qx7wnKXA8NP1F6TCFoCryvvxqDE5jEf6p6BxAABmmkbcyHwkwgc1j7DK5Un3z1Te6PE1nu96sVKgxYcid",
  "key12": "5A7px5yz2ScHySbUXXBj7iGfYjpUcLDtnVXhZ5v3zbhmgvNjiCcP6u9J2XGA3XxgdFCfe58ZrGeJ6bwRocXQZ7KC",
  "key13": "4o651qRAEWyP1TYVDzYQvwfqAxqrjtCJu52TsnYRLUJjkBdpufaL1a41QSw6JVy1qFHRv9XoEyChkCcNRM1q7Xft",
  "key14": "5L5xk59pkck4ERM9E51xKYLK7TFNHQaHBNeAjTud6xMzHpaagDzFdWKsoSRkK8FMQ21B7AEq3QGQDWN2ETW5FmZg",
  "key15": "2Sb4mT6X6nyxe2nDjgAHA6b5Wzv69nJsquo6xuB4fuy4ro6CC1Uu25xnaowEK4P1tRvaX8pNnE6CGKhjGirqmFVE",
  "key16": "4JZExscoVbeU2oSuEq9J75HPxrBXQgYiC5p36whV6dPmsJ1v4SMwfc3ATTGULz9djFp4VHpN6EN2FTvQq7r9HqKV",
  "key17": "dNoYWvECu1xqM5xrdRjznUNHiVMeN5zR6dAAC3z1QUQY3xZ3SXQj43ERbgtzR4XHJcxcsGjW373ujitv7ieSifd",
  "key18": "38tPgyF1TeMMuxVNec9JFCFpL4jQtXrrmo9zAQuTK8KuhsHoBZtuH2WBP3RkCdsdv4B3qf3upbLDhqfcQ7qTayQu",
  "key19": "4Yi5M7TW8LCvgLcfG3qQxLexSxYw8vd3K9Y9nxD1BToTX57xL7qW8dP1f4hRKxzDLV7ZfmSGc19cgHgsGdXYC5FB",
  "key20": "v5VS13jYw1btSv5S2bSDxBfnvP4SarKD7thnzBeuaJJBAxrbX73EDvFPuYEQSw9CbrZeExZtyrbpYyDMXUqfLxv",
  "key21": "3KfaKhDdXrrwhg5bQJK6YctQp5so9YEhrXKdhENXs7iEAsu2fDFs4draYrRPpyDgbBEV8h6YhWMqEtAP6AfLP3xh",
  "key22": "24aqW7SfUPcvfarFSdT6WpRFoTQAMe7tcvZZE9qhoktGJU88iy8hUkxzVpp3VknE2VGNjkH4uxZwkvNhnSTm2XMQ",
  "key23": "4bHnqfK7K3PydGirDn5c3F44stwUsyfa9CC7115pET9ULvjjC8BpgTaCLG1JxgyopZEaqcKncX4xdMXbiEYEgrNf",
  "key24": "2mdYtS1tE2yQLz7eRer2TTXhp9fqJzWqz5qMjGA738vDNGV545Vm2HimrmpNXVQiDKhqZ9nrQw9LfmmAgSaTF6YB",
  "key25": "3m3LAmgHGA3NsgbcQkGEttuR9tZjENajHhYZEcphBLCQQR76wi9VhbHNg13rsNL76Ezvz7i2GGAgvmwiQvjdXeP8",
  "key26": "3R5Csjdfiio87gtbW2qM8xDjnDnW73t1rXHooiYuYuP16RpcpR9Nhg4v8RWrYq1zM37GLjCcLTdbQ5Xi7LXRbKNR",
  "key27": "3tY1KqnvoLSxjjvEv4xJyWuwpiyivY8xHXzV1FnHDRak3ReBSfzq1mAEQHWMZpuT775z6k56hQWKKra47LwncHuu",
  "key28": "2A8wfQBXgcBnvx2tnHp1Doi3UCbb8ZDoKz8JWjaLLEkeLC4WdzaChc2KbdiDd9dZKwD49Q17a6m7FXHmdLVp1WcS",
  "key29": "3U6rA82PzeDYVyEM44tXZWwvGo75VaFqm9U1qqUfnPPnojDD8USUVMwV4bGwiSERahVDLeedPfgEA8Q4JrAgsYRB",
  "key30": "3Ue83ExXjWWqx6YxFSruNsCZYzHteUmZmMurAwshQ358guqUb7sRBJi6SQBmSjRtxHRM5GDSWTQ5Tn8Q7gTm79Q8",
  "key31": "3VnN8kRTFhKJWa5DBq9Mm9LvC9AgGbsXWwbHrhokfGM3WkPjLLX4RFZAqVu6in3gpLVQbXzMrV74avmeLpsdF2n3",
  "key32": "9Tr7kVNZyYpfZVVR6XXZBiX28mwmBxYnE6tuP3T5mFsb8FXDyPMKxdvyhPBCeRd1R57spPNXNE63dYDP8vRmg6r",
  "key33": "2q7C785a5CnH8i15btCEpvZVkqtPozze3gh6CVRnqa85qsbs7H1HZqENK7y6CsLHDQKsUcs1huff7BmjcQLLK1T",
  "key34": "4d7L7j8UfdiYA93efM5QsRhKumK12DCdQBcCVH3ahw8w4PksNVxJeabkwYa3B5aEqVbMmxsdhSRauEHnjjzCshq2",
  "key35": "52CLmtf6zrEcZfL9o7Hxuabp8awDt5ufj2yAkS3e9FtNsuqRuSupocJadThUmTgMzhF87Qr7wmXAoVuRkG7GV5dT",
  "key36": "61L8m4Tg4Rqerq9LvLNYvjdBDPw7p47KnK6JoizLrzL4he7Rj9Adzkr6ehm1o5RLBbzCpP2t7FhBSeEJkbtfGwkT",
  "key37": "2AG3jHHAo5tpuCSWtT3W2eDegej9jx8h6d5Aia8BC2NTCBCjK3Q1WWR8GGpyx6iR1rkCgSfbvK4erJG618rpKqfj",
  "key38": "2NdSGQbmiwWxpoFpBZs1m5sBgHkFT41vX4XSmMz1AAZfdPnEnETcxq4Nk5mL9p9p1fp1JnHhr54N7XvNBXWPfF2b",
  "key39": "2EqLvRmNEuzAiGR4aDkjBq5MdVYia3jde2zF238Ksy2QzonazkTgrLAcnRK4ezZPo9Rv5gosDyxm1updn5FQWdKW",
  "key40": "5u1FcJdjq1cUmEHcJuoVHsT7mFipvgRqAvSpuS9PwFpCMPFovsYv7eWSM28wf4PQvs3kJ8C6VgkYBL2bRfUqxcnU",
  "key41": "4iJr7aoH5NYQCGDXvKEJG8SJnF7ZsJMAxZjMDzjQtxBNnqzAQ8u2M6ZLYbQq4jTBmp27pM9eKR2MLoXZggvSr7Sv",
  "key42": "4dahnU7smwLfoZyzpZshunqGj6m7TGCSG4G1U1wUMhF9NLXgsCSTWM7fwZrE28mvUkc8qLMDJRDNTWyCWD9eKtMJ",
  "key43": "2itjnJ6G1mhrk2HhjxmrGYAFLK4SsNsoF9kUdgjESc461cSus8m6Cc2rXSBuR3i8cX7XH5iNTCSsr22kkKoVUEZy",
  "key44": "28MzgsjMYCZweiJB6e6Lvcapdxq4XzRntiLErAAwkKvikgv6jjdw5mPFhoiy2oJxLxRvxF8MN8CnKVWF1HcojMHD",
  "key45": "mBg2EunCHQmLQCkmQKf8x51JKsSHPRCM53Yrdrcy3W2Y9p9hfcbybwW3pRp9fsLM6VALsFDKMWXdbcBGjnfd6iB",
  "key46": "3GDpPjwCDxzEHytc8FRS9a7LDc1s6RB7izvXH7S15AmBebdEE5zdbmhnKG678KLVPsbXmXyTcG3pd5ZWTLWdwgGz",
  "key47": "3GX2ouw4CAxyVEBEuX9k9MmxxeiUMwxqCp7k7x1LjaVkAG2omHHNauCyrVLmRLsDUc9a8YFT8bvkuqRinpnMp81S",
  "key48": "5mNTQ4QzyFYFmWRrsE7aaCeaaiSDBPkMhkXEk7qaGXXb7WrQme2yoGPwNw8FwsGRGeoZUXcUsDpskzcxBDeyGoUt",
  "key49": "2946YwdWwMXiDCVfYos1M2US1tYNnjeT12Nr3ig1dP2tZFdLoGR1byBJHdHnSc5wQzFd2c1312mHX6zySzP4g3wy"
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
