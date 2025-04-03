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
    "5og4bTPRkzRdXBcuepZkQQuk3iBULsXiqBPHQoZWfZDcVjX7PeJdDC1ckZYdMF96rWcejWdBAtyxgGKgANeX2bkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HbdZCz25iTYu5jtoNoC8HBi1q18d21gUTC2UvHhnorLswDrwgt8762wKHQTsbiEXKqJNEtMFC9vTJT6bNAqEeSx",
  "key1": "3Y5u9qbRn5ShuutmYkKZ5rvt6QAELc81MvBFgLZXihKZdrbx3yiPgDvERDzrQHRJZdmfrV8TKBy94sGxPFU5S4k3",
  "key2": "5DXD1PKEtyRwaB8dgjQbnandej7gtNmDs6FALZaGoz5CNkeT6ry2ifXrCwQ9BG24yfGrw2T7X2gzXeX9g7ZLYnHM",
  "key3": "2c1hQs43M2woL1sddPPkFH12Yfk3E2ZEZc5Pqu2sqHneD29p2RJej1PsfXodMX2fdjQoWEaGMp4GFNYquxa7xKiP",
  "key4": "4txcM6JqTnky5PYHAoKXqcrMxHqiLAEVH3Leu2PtyZQDekkwnbFB1ggRBQ8jvovSiL9uNrumYRBi2pTqsyaX8L39",
  "key5": "2ZNrR7Hbkr32i5vzkYSdXgjWrTmysLiQx4T49arvpS2gFjPyhULi9PfNEoXgD5X7Ujg5mEVg1pb7GitwYYARoKWw",
  "key6": "4ybyPr3j3hwZ7tDRP6fa4yua2hYsGGrLHmkfAZrat5bdKjRXFH3k4Kby2UFH9X6VjkhRcnxo7bZV4i3qbHFZoAcW",
  "key7": "3Wx9pVmDH1azzTcexPjiwgbZSGHqvHCQkeYfRk12MNo6xmCP5VdoBQnhnT9YinWrJbpY4Lu9vPFxMSh7J5GivEUG",
  "key8": "4fdgB6evLXUcxxCEK3XrsSFhoLScetYYZEaqT2rs4edx9ZopvSMP5fCHYZS5KTjswNpPr3F2EjZcz9krNMuB7Xdc",
  "key9": "58QUqayN338ukfZcnKqKgX9Ns1NF7cFjB9xq5ZGosnY1GvszsXLc5mxJi46GVikWHpSPMLrqmburohMJnek8uw3p",
  "key10": "5s3immPw4aMXtFWRrkHerLmR9dEzDr6atgaw11yK745DWGmTk3UF5FkBucouinxDPgEt5qmkJaoTyL2nBcsk1tgw",
  "key11": "5hCE4SVHQbSckz2VaswgwrVjuhGwGhLgfUYgTTLCsuT9tt3ppLMi1BgQtzA6Yftm8e4Df9TUptHoL2tcDUf8oE2a",
  "key12": "3TyJpSLxd4Ysc5QgdiNjBn643KrQpRFuwGDCmdGQr6HydDC7DbCTtHGpM6qqgconiByKvSWk8waL9nYkHpFUBPij",
  "key13": "5nEUsJdAJ4rfZkEae8f5ZKyAKC94xjPgHjNHcQjqRUmkVWG1A4ewmspH4VrdBvjK6H2B3mLfRaeRucgstgAoi3bT",
  "key14": "4axTYyU5ARD1du41nJtRdPrW3ccRZBgsEWX7f25RyvnoyGC1MktwP8F3WYa8MHbJFA7ua7nfdGX3tnbXoPYMZsmV",
  "key15": "RxgRN1k9V55BxfhR7WJMdKGR46CXLvFyE6KTW1EaDvUVuoNv6FnVcRx4TRxLWUTdxfJoaAPdFjgWfP4VMDBDoC8",
  "key16": "4vcsEcL7pQSXnkcGiS7z2E7p1bn4JEwTF1jNrVigprmmN742bNwKsEF9H2xrsrZD685e76gvnxBcYUL2aRr44SGM",
  "key17": "nAwgptw5JNRtfGH9w6XbMUjgSPPJazXPcYrrRiEiGCzKaQRsR1AobCWqFSVCCmaMS8U5KEDsKbRn5JS2KmwCxny",
  "key18": "3VHoG3r8zCoNmgg4dUP79aGmd83HFMPbehxeAvXer4ypVyj5hbA3KNfvvesVA2sZ2S4VEGx8EyJQ6ATxFwXUwhk7",
  "key19": "3Fy6GukMh3dYfKB8jnpJG28dQzFjLzcsLpvTvQbt2gBvyaihLjpCzLbdHEKTx13AnNkza5tVadhcmEvm22WRuLJE",
  "key20": "KyM5toYCYjbeCmCpaKHZgZf6mN2WUZzvmbAHoshxRXmpYsWqPhET7ezRSuy2mp6xBjqbMbpFegooL6FWxPH2NsM",
  "key21": "4v2EvZdcg1phrDxoMkX5d2SfpnS2GWAWCDS1ZS8WqhenU3CGtNVoK2pfCShuGrPCo27QBXJbXvX35h1w3eeRpNCW",
  "key22": "57rah6Zn145swSSA8oT51A2w6jFRuhTB1nQPkevACuXrS4xbahYEobmEf7EXhjUnmwtQkYqDwF4nWyfFuttkezHn",
  "key23": "2QMgqpN7of4mBnmi14XEW1WM4tZ6i5fN6mo73XUuidSfTLAoUVnSk1HNv4qHeSkSbfDKnQGBSMxjuKgiKEURqjLD",
  "key24": "3HoJFG3WMK6kkD63XpXaVjWpKcuJNe3JA2KGgCnCkgST6saBkYFhDeQM5zp3DtN4yZYgYZxKXC1ssfbEqkdhyWsh",
  "key25": "5h3N2V11BkqW53rft2gKWVPW6YRSu7Xx2DSnNfxTCvsJXnaG3y2zYHVS6z8H79oHbT5CakZLmy2HCyuJeBd4Zsie",
  "key26": "5RQZKufwfvSvrM4zYJ8NAqMMRucnXUv2bDv1ALq6ua1xxXNzrh1UMHqF2rpQM8a89q7hMqH1cjJfzsmyNge61FoW",
  "key27": "5cNdGXfT3pHYn6w252n8SqTaLSxaBZHyiPRgCtR7feyZ577X2LxGNx43sKmbEqTwPFowht1NEaRVXZVZHsPDWHA",
  "key28": "3j7kZXJUCkvzkvJnUmrAMJpMhVwtRXz51tvrHnhPuMxak5zLgVkCJnp5ipzhe4JxCwqSWv3Sq17bv7HHrWab5RyM",
  "key29": "PLTu6quY63eXZRvBTqxtFvQCn8kGwby35hcLvPr8vvykpDRPZGUpjxGiVVsZbR4JcWFd8aSrWZjjWjQkX9GobjM",
  "key30": "4S9pWbff8JwgaCx7cNwWgk9u3yJtaKdkrnD9ovzLabXf75eLGvMmm5AjeZR36Nu9rffvcqtyaJGTGnYoK59rxzje",
  "key31": "43DED2K34DxDsxxAoHTbrkduahF2sD1EtiAQuGr9QQhUNSXH69gMyM5EGKuLTnca713tjjkZ5cMCjfyHfHF5ssM4",
  "key32": "2cEG9fJGrB5pqJWE3ZR2B4d6dCDv1X3kthshcCB9umrTzKTc3e9SStJUjKhXatZi1hFLSpj3Cf2XQZNYpibdLmk8",
  "key33": "2cMs97XxVUBDVC7ngooT6DzAAJVFMfKtTC93pED39SdedqxHqz1MqggLo2TLgxTPdWiQSp7JNNJP5HhX1yxLcWEq",
  "key34": "3xTbQ44znqj5xEPHME2oQZi8m22EQ88ysZDiXe8YV2T1KpVRDpKKJXSTixj9ZpQWZxAEYGZEdfaUyo2kmgkPp29e",
  "key35": "2cn5hZ1ukjx42KzV2Jf7KSxvLk72JQpqP35ytu7jGz4rKh8TcQAV4eqZbg838uD3BrtXSgRoGCMaxfS8zwqwQLvW"
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
