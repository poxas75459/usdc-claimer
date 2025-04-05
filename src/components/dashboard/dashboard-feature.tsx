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
    "3TeCYpYt2VFnMnh9m8A9iS9oGfoavCFc1BLRSWR18azfgVeDFkL9zUmZVrr49cB4FHdBmKWA39ur4izcmBMWAbjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBC87L7PaJ9pke3dFxxwxxq9YDarF3QqBh4Xuzf9RXZJcgNi6DokR9fEVPPjN3aG9hthzCXnrwYHaxFHN43tTq7",
  "key1": "4BtE58xJ8dTaoDpGSeCU1oeeZU5MLecJ4Z3yNj7VGEjzMvAWeQBPdXCeDAzmGj1SPEEj12pCTj5WxsjQhRtMhciy",
  "key2": "4P8nsPEgqvnkMcTcqECTBWFfMeH1evMqsDFWx3YBmaVkamxaUqzQjBtb7UB1n6W1jg7xXy4af9YmWqW7qQ5qpYRD",
  "key3": "5x9zcEiyaAMjQkcCuQbHNnJpztm5nWuPbd2AbzJW3b8wqGmKp1kFNWAdtqUeDKsacepycjXkAyXLuqfxVxWsmauJ",
  "key4": "Zad7aLmhGMbFD9DmS23dAp7XCrNW14xF6aojf1pdbsQJP7sEATZ7gZ7ynfknAim9nMeucNMJxoz33bhCKhx6ha1",
  "key5": "35d6RSzTSu1BCVxzGVoSf9q75xjmwAMFcgM1Hg2Feho2GuU5vhh35T4kXjSTTLaTJ8mE1X3kFVCfb1QmwMcJfcwo",
  "key6": "2FigNQmEJ7n5g1ETDvXVEHTLNaMYJLkK1uFh75DZpkDDFZQvXMhD7VsqT6dRDLV8myuRSVTBDAVhBdR5eVoXppr2",
  "key7": "63PKSwh2P4hxFMwNseJoXtzezgscgzZcE2Gci4fJsyqXWeGmmXt3tRNz3HAsscFextSzmkYa4ywvk6oFkj4wvXQu",
  "key8": "4vcarnciVpPazmpy7jznoiKBK3p12Dy7eJfZQhBA5EGGYUDsErjEceRYeTYqQB5hZKnDaZrMz3HDmBW4S5SNPrYp",
  "key9": "3osieTzotNMQpcuZWCgubPQpV2sv6p2U8m3Bj1JZcw2Ca1ouLfodSSDYtjJZjz4BRcJLMAXzD5KLVXm8A9NsCff2",
  "key10": "2bGCi5iHsWx614XPRhjK5Djr3WoJjtH2SVftVR5UMG2CSvz9W1E7hhpabYWyVzujpsSuCJqkgr1dHGQSoyPZiCUi",
  "key11": "4EPUCNGopZ3RGF26Tcdno5fSH6AhRzGkWiGVSLRc7q2s768GnwNFTsEnHdQ7NbCd7XzbErqdGntixJrnQhZaniFv",
  "key12": "4upSJHwsKmiG5TrJTz6BN2SSidSfYLBvcr7y9DxpwcE4KSBpxaejFqZ7Gd5SNZ633in3oKnJekXGgFDH6qrEVKw9",
  "key13": "RUcW8HhDb9RHNA7GQeWGUFfCLrLgmM6op3XSW2pCPtGNh9bUHjeSMvqduLxzNmEeanWbMycpQePiuNA5zzx1BjM",
  "key14": "5URK9VficCuLugfNHWf1793gS867tbL5J9y4i8dLiDPkECFc15pmHAZk7161GtKmG5TqDxABWDKrJShW5HGqP5zb",
  "key15": "Sxrd2YtjZn9jNZ2tbhTLEiWoqMCJX1WTC8ZNyHKgVHhU1bnpRVxRsbTkXKJSLVYqzeqtLXdmE5RUVhFeerXEfhB",
  "key16": "cL6XTwcZiw45aqeDNs5XtgZeUynKEycv26nxdDCbixJPFE1iD39YNnge1G5NLuyYqr9Kfca9nWyFvA2zS9hqHkp",
  "key17": "3VgD51HPxQsVwL5njZopBAw8hc5YeviAFxEGCricBnyEtzAPYLEFc7CWy9p1BpRGBUqwWpEDj2n9L7DrpHLaTa2q",
  "key18": "3nZcpsFWpU1Mwudn4VgPerk2KHwKuEpb2jdcZwAa4RHKR7gg4PVm7RZqYTAsA6E8dJp3rC3xBtNZMgJb6varuUX5",
  "key19": "5nBeDz7PZmDs2PGESc5J5wAUUQhAfNz4pYkre9RNZVHcDnpMmoydPrA5uW11DmYYC2PhPFcXejLNfmJPpekGbHe9",
  "key20": "4gkx3Koz6KdnhYAZSb5DKE5TgTc7EPuzoh2UquW6kYufJBrUxfaBxr5m1wvTm9f7hGNHq5XH6jzbKFpgpo2Pg5nN",
  "key21": "4NiAADLzurdZHeiN89aiVRAd584UFb1Sw4KiM2E5HCAvsEkm9Wjm4gbMCr5YP7ozuauTcnWXitdr2qa2rZtLnqVw",
  "key22": "4Vy5bSYYRtEkBKo2n2ur3nfCd4kFP4NrXJpwoyBsr26fogJmqjihM2pRdW9M8rJLSF4XFPuaqu6W247opUuQi8Ju",
  "key23": "4c1NR457j359Z9kVLJAM1kk29ZYYJBikLpMg2Y813gdQZ2q6JqARQZ9X1Nkrkzsn1dQ8UFhDZCgYPA9ter3naUQF",
  "key24": "5htUfTxptgAYNTCvqE3Po4Vm9A3LM8BT3NQcy7iKfcDauYUu55SLYyhDNhPSKnruXn6UNNLq7bU1LLaGoSWfxvQ9",
  "key25": "2oE5vKYM9sp14JUHteSZFV61aJXSrN2QHhFWTwvuwArsEwb9BgM8eVfDeydwgNupJz85aBTnYXeKXX4rtxwvicQC",
  "key26": "49AwdmuwkAkFVUSXzsXzE4nwAwXM2Pi5Qz8jPQh9UpDGWhbHAKx7k6ovhBz9fqEvtheDe6ebNioENNT2vyo1QoVB",
  "key27": "3CVyc31WsMzPxWs5qQ2hsCYBFAcWyLjooAx2aTj1BgEsE4SsveKaMn3BBRXL57WYKgBuBNPKyiShVqSp7v9EPVPK",
  "key28": "9KtLcDqyNKq3YMjhcv1R9ZRe64Bs72kuLdz9iqkMr9Hj335LXXYW3rshLQ2Js4pYzqpFiKytqJn5pG8k1aFUshK",
  "key29": "28NaXNkBaDrJxFSv9YD9s6euoPwN7wyN4xr7yWNTWe5DvnhWfZSRHysDZ17yonpJ6yypoBK1d8pD593WP4cL4b3c",
  "key30": "sJErksYXnGa59YhH9NHpf22JocRX2cyTQxMzNRgHbe6AhvzYpzxHj1ZXznYBY6mNJfDWK2zwvBjKDsHVPev2fDs",
  "key31": "3pUQgdaxYQMMeEoPKL5i5GaHwtTqrXit2tZijtRfiihSvJbsF3YgcAwENsjsFi61PoCTT4ym2717qsszc8dwpwtB",
  "key32": "bfnKwyHYVwBgPGVYNvycydJg3kvCXhRMvi9VJYvmNAstGDRL4KJShT7RMrUXZKw6FWZLdpSKHMJL7iYWEn8LVYG",
  "key33": "4dXnaHVhPnhdKr5zDRJUjoK6AwDkGiyDknguhxjTAfQAJT5MJakd23BSqn6Z9DTkG186F3aGmAsY8nfZJBCHxuew",
  "key34": "5fHmXoitnc5P5ogjwsoXfSj7UpAxY3CkqNtf2gnDQofZLg3o367FG3EoXkvJK5KhxEqxYwPKG8R4aanxDVHCYmeZ",
  "key35": "4LD9xtMwy7Ho4oaPHGS4gYxQJBsegEALq8ZJnichLeXunrPCK3j9J93v3opETbidVb8iUiy5CEe97TKqAxu99HdQ",
  "key36": "3Qp8wHbEdonk8feUPmnVhgKHwYGDCt5qh3Hap1T2RU3t1YzM7Pug7zSdVRhdy1HHw49ZsBLPWyHC5ySHzxLJK45K",
  "key37": "5CotY4AEVjDmHtQZkAPEku7Dtq9SgaoNm9TQUF13nYH1oAXkpihdjq31FswBdBYQNjrCgmN4s2HS7XaM9y2Uok4N",
  "key38": "4XxLP8jCJHWR1Cz8HZqe4QqinhRUQBgPZfHXvKsrKJtY2iQNd7u863VC1RpJW7aLtXiYJWmEh8Uw6EZzdunN7nPr",
  "key39": "5axHe28rUTtWPZeWgu8zdRheMKFDYduDc9rTP2bNcjNmaB8EJC2e812r4HArK8dS39Zn6vw2XupXA4FG3YKB3BZB",
  "key40": "2XTbLZ3ZHyKcgdjxfLMY6LDKJwnN8ZyRYRrLQnTrHceGbyG3xWJRrfzCDr2fj8ahxM4HdiHWCAVTmyYVJqTvcghM",
  "key41": "5zUG5bbqdrwo3SWinU2MMpGTATdnBBUiX7wFWnR2ioT3BpTch5KxbNFwkpakA9rVcD39WUSFSvRzUqcMyjrJbo4m"
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
