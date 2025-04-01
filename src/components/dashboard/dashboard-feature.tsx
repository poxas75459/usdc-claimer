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
    "2KnEr4x8RokATHyH7a7m5Uu3Fc342jR5UugrmjegkRCHaQmyU6YVKruVxYdqtVgD4ngucc2T1RyV9q5srTi9rTTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtpiqCyJBcVjTXHtShaiPcLjcnSnjnP5tqng6FFG4KHYdCCScgVfM8bna3USobacYvCoYmkm1Y2mA1YAf3fPBZi",
  "key1": "3GoGigh7zP6uYY7XqECqeTq1PsTzK3TS3PcfeTLEoSfx6TFfftfP2YqAAKYpr5hN5rYfeZjYgf8j4LTtiQheS2rG",
  "key2": "4W1xCJwpx98dHqkzFkGkLLkQqjuNuEU4ALarX76PdrhkRkwhVyZJCZR4xeXT9vajFkPrCdpDQLeEvBaCLwiByD1R",
  "key3": "sidHD4rP3UTCkUYyHY8zrkuFkuszfidpUWXCdV57if2h1BworodFJ6qGuWPVNQHz6LwiYHzhxSFXMSMLDsaKBgu",
  "key4": "46ypHGoEEta2pBbTAtLDgXoUPjwcV5uu8V54d8TgvmQWU3tmsiAv6opfbApromXVvQ51arrUxiWRzdXX3UiwgLwo",
  "key5": "4MmdB2edBQ5fCqE6hWB3TKuGdCZ8h5LvrNBse7TzHSzxdC8FxUTVPc9JCSD8tMJYRUQPXs3vLZRBHfoyt6A9BGyj",
  "key6": "4QutL9V63ybzzsPVgdTfc6dQ2t6UHnXKpdoGnQvGkr7Xd5kf4yQKZasFf3pDvb2Ehgk9R66LBNVVznXzNa3gdBFF",
  "key7": "5RfcASr3ziy8pLAChigbuUJsfEhpCwCvvmJJpA7qUPJPstc51gVg6W3imMQ9MdErZjwAtW3iswGTXiNojq7Vndf1",
  "key8": "eVQURNYj1z9ZSWtaf9x838tUoDeuc9WAdKxPXrRw5YgxeEgafZ6nEcLUPK1RksK2FngExyMY25RMM4s3FeayvJj",
  "key9": "4Xuyda9B6YbvUNWZ5SE68AsesHYZ8RaSscRA89TUedBpnk3CLVqwW8UHQ4K8w4durMWAcmpWkPpBSrNRwoFwWebx",
  "key10": "3hyyKuQKwhNFn7fdFfCJiWYgjRhZmszZB4RJRsu3Y3vP4KaCocedY34DCybfTDdPpjZK2S82ajxWfjn48Wixxkxe",
  "key11": "5eFBHq2ffBeDkjbysW9qu7jz4o45xD1dGeUmBHYBCo6mWFHR8t4eXHXhnFPaGv2M9M8Rp5W1ehCNirQHeqZe9Hsm",
  "key12": "5AiDJ2AQN5dcYgQrE1CzHewGEWvZ4sfP6DdR9G265UHWCHBSq5KEkKwsDJbnKfc61xq3fUnhEPkNFqTFRETEYWWY",
  "key13": "5vaWzZsoeXcZkVVK8SnnK1Pyf3nA6zYqwywcUe3ECQbFg5KfF94XY3ZfMeGTT6Qx6k2SacujbLER9sTrquuxZ13R",
  "key14": "3T5t7C6ZoUduqb41AkoDLXKyUmYiHWLNkAVT5mjgLhnJz1s4geiJDSdj7ppJyJMmpL5UbaDZ8xtj8Dr4GUWG5w8R",
  "key15": "2GXicUEeK4H6YrtRuequMhwwfx5DyF6F2HWwtY4Xfrw9gaK7DMRVyvbRetCVVjBCtW54eQiwXyjFTFjV5ppMSwfA",
  "key16": "2ZC77nrvW6grmQne2HmjG2ce7hP3HwGfmMc9FTdpidZEGwb8VhdUSM6B8F9H1CaP6qRDbDX9S1mkFcuwFoQvtHk2",
  "key17": "3sVFQzviP9Hmd8BdDVPvEawy5PsxP2irmwdBbXBsqHuxSBHCBwZh5WUU42odonx3Qu3mRcz45AYSRAiXdbgaR9Qg",
  "key18": "zVYdVegn18HY1tJFS5mcERzNr7TjHgd7LRhyyX6Wh1Xos88Qjv9vht7jQKXpgYmY569YKX3A85t91QweUxTtbaE",
  "key19": "sb4bJ6vkueVFWYrMu5t13SGpdw1aFWzTKtKcZLNSiY2erxngvbNxJc6Rv5FvwdgcBvqfokKu5d6fzLgPuRVvADS",
  "key20": "2BWxMWoujbiZtWQw69MhcwrTPuD4j2Zewscaso6ihfARwqt71v411dn3LX6wxmZC9UkvsFe619Ys826RUxQEqGTh",
  "key21": "4q8Xe7uiDftvQMpYFHAXXGeuQwToG5AMhiffVkCSikNxmvFjKyhFugA6h1xnVVVPqHGKCeNBPCtuXn1RhshVYswQ",
  "key22": "3Ci5vs7F8iTRiNf1QfZELqkLspadnNgmDJwUebxnnMZYNRYZZBQa52EsrTm15TbF7TmQ5ka5FTaySDpNUhwwkPjw",
  "key23": "39zkEZEDUDVERHPz6Roi19cUvSPrDQ4QfxzgHvuFkqtn4gtux26JV4uTsSmWzy9HNNeHcNupCExFpSCrtYQV5AGW",
  "key24": "4jyt8s2kknh8QtDhzcAjQscYdxmV2HysGb7AJAJFeZwv3NrbHKn7q1Ymr1X4GDjCNqNAsy92GHnVEdq91aUs4pKE",
  "key25": "LYUL3pNFx4yKuKR9doztzBmy3R1fsjvQwv3r8YK5eDmQhwbx9ar9nr1UwG5Ehor2cxVpsUBVjmi6DVJ8ywSYbwx",
  "key26": "3aKyYivuAppWkfZiie3xH1vFnaeAwFmCs7hiS7YVCDgeMpzvQbinytjfpRhLRXMrRcozCqu29YTNfCZZBtU1AuF4",
  "key27": "45se1v3oQNJh53cBeJ81SHdBGcaDcGdA8Xk3EE43WQrf3W45dcyo4xfiyp1z7vgZTeC1Szjx2Fo9h8tqHkW7vr49",
  "key28": "5T1GMb5bboakrdvtsVabgBTDAm8JZBwjRfgnpURcNp18NYPQcicFCVAqWJ4wMTPh9czdkCnCRJmfYgU9Hu6e4Vcq",
  "key29": "5KyEbVc5y4QRh1CgW9Z2U7afiSMYr5N5kqdK2S8e2bYf1u9LyiLaaJ7UVDVnw1ctVufJohF9N3dgNwPbGSZaAX5r",
  "key30": "2ugtbJNbP6i5EPopnFAjb85Lc318EkUSDS9VLAMULCMbKR6e9UQJF9xEyiK5deRZ9LtUFRPXVyt7TqkZmgBGqhSe",
  "key31": "56cafHsSvxYQEvHLAxP2jjKQTfcR3ERUoqxkK5hrZMru1EkXRV17KZk9raJDBYTL1rD9L7iYbmcQh8k7eBTSaEdJ",
  "key32": "3Z3jFjD4bavmpZDDzjbFbXJ5Mt2nBaX6MZaL6hfYYbkkKjDMyMher3pCGfLtuht2LXzELQomWUWzMxoD7L59obv6",
  "key33": "2EWD59N6nnpBg5VGycXuXCbiDh3iYjJSjq5onQnDPe6NcD13XHu8cgRUELnKwuSNc9gdTJo9yyHaVx8hw5imq6Za",
  "key34": "M6R9P1G5RFDDtnJF7vTxkErpfPJizfGVXsG22U7uUwbvxGiShGQvsrrVTukgieoKHNaEqwv2d7JAJToTMf9BooL",
  "key35": "yrWy2BKVMuc7qxEr7CRXjXQ4fq6KNnceNxEBJkrRKcbQ7iPkKuDowqmM5F94pfYMfEJkGYkNmpnq3BREeQ6DjrN",
  "key36": "2UPGvHpoxve7awGh3pNsp8uex5DQ9jtXpoUoX6HGw5yKUXuNVdHgo4j2fn1P9Sqd3ctW6aoMDN4mGarN6ZutFQ5t",
  "key37": "XE1ZjjzUc3inQL1byD1n2pUxAYRYx8Su6qwxPnn5cwHCMpiLgiHH8xycfcRfhMhCKcYJ6aTgK3XvNo6opKZRzEz"
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
