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
    "3CHKo1yuVYLxAD5kYFDTkRr9V8YZL2c2cfZVNef1MYMwrNoCaf5JtFUTmAs9yiptfbGesoNjptwEYNtaPCuTgDii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hx3dHyKkworN4M2hkiUqSsmSj32rAuQcM3nE7RZdyYP5AP7Fbikup4Tdzm72rkaa1nHmgouhn5op9NK9FnkEF3K",
  "key1": "2jokk4xS56FFg61oBHZBEMTJLG5ik5fRXBrbNTdJcfzynQj7NQ5PEUUaP7aLsBsLAWZ2xzSMja76vA5oCTw3WFz3",
  "key2": "3CdPN3CjWDfJ7pcoAzHw9SLK1TVhCADJ6Bt5ZCP44RVfhDPcSLZ3obzVtorBdq3rt2wEz9qWN4fgAaGvphE6vpWD",
  "key3": "55qoMG8R8E66pBfMC5LAx9M3ko4dwpCPiMMiHfDX5WLv6S5Kh1Hymr8Yp4eMSnyJaSrxofEPWwQZZHPFCN2YQFay",
  "key4": "3x6rg9pRMrH5dubstgn2m7hd6DPZntCbMy1okxnsoX71tSDzcVZchF5LJvmieitV6H6gpbEpxTYfr5DYTpvj9Q44",
  "key5": "2AJjDqkMJKGEpHdieoAnzZUE7yFBP6UuE7wcrJ4qcjMjwxDVFNpWJ614KCLgubyzJKoRhEsCdjzMGcTpS5RfYkuu",
  "key6": "5DzB9Lcq77xKZ8HiKyPgZX8fLWB8surSJdFiBHrv3P8JU8torTyfGvaaaDFBzvthCft8kzkzNfePpzoyDVz7aVvT",
  "key7": "5Pgp5Jx145YUjs7sw1TpcMa9Kh7rw46B8nwvxQi76Mgx1ujLetvvt9bRts1qPBPPjwS28pFfHsBKSs3UCzvCrWaH",
  "key8": "3LEL5uKAL3kipCY2Y8Ras5KySsmM8EdkAqUGLXh7P8hMc2dniKWQtP9nkBshhXa5XFmiYv2xrguYfzFnK8TZyCxc",
  "key9": "9ff7z8ZgMf4Zs45KN41peYbQv1AE4MfxxZntzZ7QHKtR92VBDcyuQdQZZYDBEo85mrTwVHZFoRgMYG9tyJb9VAn",
  "key10": "4A2tPc8Qgosr3QH9DD1RDLbCSRV7RE1bTgeapdLMRaRaSf8bLidXhrhdvptaTLTc4M7Va9BAsDqzvvvqJNFg6WZp",
  "key11": "2YR9cnXPTPczk2Xb7Jnkj4nwsLH6DiYabsmCfTbwGrhgZJVFVJfhRGCsFeFHKH5mhqu9Gc29vtMYLMZ2eg7akUnJ",
  "key12": "7tJanntU9KAvw9wTTpW4pizYAexkZ8mNT8QaLnEau5KZqMi9uno2avUGDCgrzvrYJy4w9vrjabaVP8KUsEdP7Yn",
  "key13": "3HL4fD7XmP4wafZqk7ixuy8493SzUniZ4sa9A2QEkzkHEv91mrwzMmPGkzsvcc8jXuK5u3NWuKHTuhp94wj5wkUf",
  "key14": "2W4BEG8qrvaLPNB9C7DxQ7HLKDfVLXNrsZNsGvBRXBbtDb5Tvbdehz5JqB2SAohB9RMWyRiFFZraZUwV1EeS2gz5",
  "key15": "3vDyxLgJnxKtX2m9Vmj8tpCKKb2AWcPCmz5rBiJ3L74k1UL5YaR9HWs8cG1GQj5tTaJmzUY74GLYV4nfpRMpA9st",
  "key16": "2EgnLMBGeJRPdbquH1BwV2u5pWPCppMFtxXen71gVu95FPqbbT6HSGWNvjATHvSbLqyvywiN8bBD7MuQ4sTP918m",
  "key17": "3Xf5h9WuiMd3BbesqFdckCYZ5gSBDJpNzeanktcFHpoqJtwXWcdVFvfUDriXWXp9FLHEeyA93N4EyZnjd4nwkYv6",
  "key18": "64QmtHr9oxxDqMPzHngNjhRBrAbnce3vFBMNyipMZ3xkGFYAag8C54PG7xsXDD8JyPJewQLku6syMnpT4UMSEkdq",
  "key19": "2RjFsLQUtqKhYfC3q4JAe7DYrzbLS3a8Z5qQHAYhxciJGYUhvHMnUgdQwhwetjSQ9XaAqTGYZX5gDD3qNeqS21hQ",
  "key20": "4e7YDeSxuJoiXMx9MRvDuhe5ASyX99uwGtwgBCXHL4Y4T3RM3YWMFFu2BTm2ubYQa3PUqRUQYktPqxj3fyXsaGL4",
  "key21": "5kaCeKJtRdafqq833wuH1i2Vz1K3XfURaVtJVHya7xh7n3Zajap8pvss2i1vaUcpEjzGDgD3iGfjudijVxFH48ku",
  "key22": "5ioPc1L6gLy3jLaU9XiduPXfKDhWRdEbb9RduJqhtipGTCoXZAuoUA8DJxHN5raUdJ4SvgQxyLyCRA8ELSMLXGxQ",
  "key23": "ZU5DHsQ1wxJw7QaAgJNfPuBTvqiso4ioCE6YPVjsushZsXR2BRXfsVykc55JXfSGcMvajodPVbKJWdMj7uEHbGE",
  "key24": "4D9YPVtkfbJTYpoeEomWMNtQUSrZeP25HuhxEhAozie3ioq71dG5cdJrEZ8CRjeC5MX3ZMhCADvrioqswGZ1xAcc",
  "key25": "4P8rpp6XCBsh9mumxPYd1afDijxDKyJy5h1oicpYRx8HuyD8kLTCCX6QD3vEsDU2m7zgk2CNuvzba2ipLvpD8vKY",
  "key26": "3QH7KTRjfGmcTq5QNjPhoxNcoN49yVnZ2iBdXnzjERMQQChrqdtRnAPGz89CpaJ8GoPkSQ7d81e5MJTzSXH3WhwU",
  "key27": "26cktDKD3DZXTS5iRrp3HzUEhRF1wGimoZZug8J3RPgyV3dKc9g5AYKGDv68oT9EDPqPsKydbcEtmwtakVAb8phB",
  "key28": "2Am1QG1s5Fut6GMtEYuSs51HZc1K86ZyMo3mUrgFJrua6gxMgywbzQw4WL93VCpUJ5zBkPDWroPbPZGdpQR9WcUe",
  "key29": "3QWgFVSRE5UEHPWGQqPu5j1VRfcmxNys78Hx8yWxSyAK1nZkoVCmwwPqGLvGECL5xjocbo2comYDJg78A4LNydsG",
  "key30": "2AdSpT3pkxXT1m94RUZh9sbDpDg9JVAqbiYhgQye5zNosSnATeSNSKnhLK2TPm7K38HUot9GPRfSZkqAKaEGrFQ7",
  "key31": "35ACBmfzvztKyCWN8n6BeGTAV1Pm9zKrgnXnUb9q2Hsjq8pJfP4LLDnyFnCF77HdaCbnNiAd2HVu9UmC9zHfDWVN",
  "key32": "5hyAJ96mDe6N2PTmb9iSoyqTHgZbsQo1jHkAhmfKjBeB1KS8D2fHNueNEA34RwJxzSq2CzefMzFaoxCB6Wx7mPbL",
  "key33": "5qia3U1xchs9E8a6afaRZi4Kax5ZvdLGXxKgpM8BsYXPGDeywxdSwJaos5Cg5vdf5Kg5X4M17DQDC8zGw4B1Yk9Z",
  "key34": "hwy1i2MYKVE8E7FrdPkW7GAHe4rBDNbykgSxji3GXhxiHukoWstrGuohZpxPzXgoB4ixtw8eRa1AQV7NfFBjWSg",
  "key35": "3qqGMhTERuAyQuQNMaTru3SJeJG7FACkSVCK5eFS9wRTC9K4dSo2SVcQ5DxFbMBSeivozuMSuWq2GEHwSmpF2GHB",
  "key36": "47T7RTrn9jgyMxyvsnrjD6wqD5CiFaRcQe7FVFf5jRMyJyN3hbxuyr1V2fqgnNTqEKKet1ETFYE4GCS3JWLhSHcs",
  "key37": "2NvZVK6XoLvijDGTf6MqBXU2S2XsDpFzUcA8vdxo6XroeD3vyrFrVf9c2CjAFDUXAS7w5npxhhoL2DUVDnHd6FbK",
  "key38": "4aQDcwo1789zA3dTDBLxrZqQykrLqvn52VcB6mMpmTbEhCus5SSQYr6Z3WKTMFozTax29iwzoh64Y4gXpCmuFawS",
  "key39": "6ZsjCNSnnNQ6RkddwkM1q8qRzrykBoH5W82VfAxJWFd2eJu1QjxEDbtE5g8FW5CVqGDvrCyzAkRa6qp2VjbssDm",
  "key40": "3C5koHeBhyjboT7md9mF9NiUo9uGxTk3jmoUnZ1J4b2cPwsEY4Jk88AK8DFaAu1yNc1qSZ5JRYVR4zbFhpRS4cnw"
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
