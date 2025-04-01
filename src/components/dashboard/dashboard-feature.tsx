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
    "5dfXj1yPkWg9aHVGaM93UeUKuH6gAFThjcWkDot6Rmf9dWJ7uidTBPBJwNtagTubpoUQpwaGGVcKQXyL349fFSoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56TAghL7i6Kwoi3Sd1VqVznaLg4UQNebSz1PF7y6CHr8nS33huby5zE8jDbnEmRqWRGrBWKgMdH81RArEsFJthui",
  "key1": "4qX5TvNQvoUYJFsfCDRVPHFoeakHhb3UWDtf9wijXcwV16rD66qph5hR5h22De95ZKs4wnqG1hSkm1LPQjdkTUPi",
  "key2": "51nzq945TWeut9jXaBQLGH5BwC9sHxXbCN8N7Q1VBasYsS1KJWhRTYkghE7XSaVNra4hXgFxnZpuh2d4n9d7TEUG",
  "key3": "3xXjxfZXiFkk7EPaTScvFPNJV5f1m2ywwizyAyrYHSwGSXVPTwvyHsBuRQ9ufmaDMgPpA6mdFgoj5DZje5daewHM",
  "key4": "29JUMSD1xw6jrTNdsb97Lh6CgnKGCh4GFpk43HjEpHcG62DtuTuyY2Uhkn3YJcRqGSpdKHsLTnZqqaFwcgmuh2g2",
  "key5": "38QVWfdBTFGYP8ceVUVWNXRXLQ5ZmWJbQhdPfR717Ht5WpZ1RCwfqZTA55Ns99YLnXzyf1zD5xBfmZWf43fSgtYp",
  "key6": "2ReSRutmeGkd56BZDxs76uerahFHWTyvbL5qS4ugoT9ciXEX7syGR4xZVWp8rutPmUpgL9e2WgmCk9saoFPE8F9S",
  "key7": "4cTvcBdDmEpFfrA6EAYHcCVQZ648PtkL5m5miK7v7idHPL9AhKtGC87TCkAsoRPWiiypjNiiraFY9MpwDqrUpmt1",
  "key8": "43X4SDZK5ZUHj21NUVewuFfk5UTefpDYvhq1hMSR4zzEKiXpQmzi1DQSoEZ6N57nubZoY8BvFkmEF7d6Y7TcbGmb",
  "key9": "Chhz9SpjrcxfypuYTnh9wWye9hKx7qqszqYeuw4gnHgNQpCPqBtxgXVruAYEFU8o52fD7s99hmMQ58Vr1wHWTtL",
  "key10": "2pcyeQycrThnFDPDpMPqTShksDBSY4WZzsAroNBdvagtau7PKg5Y8ffeP1hhRiVe2cV6ATY7ZJLyWRZUcFRShVyX",
  "key11": "kxHPnysChwdVVj5mxDHbeHiXThSwnoEXBKJooYQaVet38ruNzj5HNaAbK9zNT1vSdD3GRqYJEQydfG2W6doyEAg",
  "key12": "3QFDkMpuMqJXdfQLVHNxexEEGsVZGTxe81Q4XSLDtbwv5y73KryVpT4brFwwUJWDh6YigU1jLkfe6RLUZJmFpEnx",
  "key13": "5qXP7HnDnHEKubx1HSnELrACPUFthWgFqVzEgVUwmPQebyJdMHvtwZiH1u1AfjfWXKd2L6Q1hffvTWrnVQ3NfwYJ",
  "key14": "31S3Qi5E7TtTsQovE742rjDjAB7SXXNE2RLc4b4imDff1CaXwUShzG4GGgTWWicFD7vvH4KAFZSqL2iDhmmxdJSr",
  "key15": "57pscBSATWiJt4finYibcfcPvYSMEehD7QAYyQmWSLKM5LyvwjrH3M4mAqPoCh47UiLLuZ1zjCoidXX2oME59xe",
  "key16": "4wuqK4Rzzj5KivThFWsFwT4YFV9UjwXYZEPWu4TVCg4AwYmKYTCDsZJiFq5htVAfAamGuJp77ynNmdE7DNUi5BCG",
  "key17": "51PnjGRNBhPkiLAu8FyGzZmU1dFSwvT2rYScY5gkPvjubPhEFgWN6qiqtkKuBXLw7E5pGDyQwwyUMLiK7HRyjcRY",
  "key18": "4LroG28Un9aJHjkooFa5FC1zZpndxX97jXm6NZphPpmCj9SFe9ToykGWeNdmQLaX8CG8H3ovFVKJRD46HGX9v2aH",
  "key19": "3RFEUUvgXyfq25W2sh3SMP5h4Zwq6mVQPBAjjyBLp1fYgNoisjPmAJxk1Vzj2w4ruhoZQShQXZSp4zkxpMDz13Lw",
  "key20": "5LZoQh4yTDgti7ZcM4udaj1SL1MWr7KB6orSJEvuTx4buV7StLsjZh4NMgXbtFZZGKXM4ZmUYbAnBk8vRzD7X6Lg",
  "key21": "3gdSU38kXPycBVg7duHbWvAgB3heqkbY3sqiYxL7dKPKGZpSfiw83RpMDciuqCV6FTWxmk7pTaW8SPhEECznxB3m",
  "key22": "63wpwHFgd1cVWBGjHqcicWU1vQ6xP7arbuEo96DiEjwf4s9UaqTTP5sxBkaSFiULJAGyGYJvDskmVDHXUrKhH4rr",
  "key23": "4aqLNjf2bZ6SYYaKRTPKXB8ZbRjVCPDrUzYRtpX11HZX8Gs3HrdVRxvtgEYDupKdFKV6eyPGRc3xbRm3W4JjZ4S5",
  "key24": "5xobvxpo8fMrwB5yuUExb2VvBNxscw5HSV7Pe9HouiLws2hGDuf6yWe7aKo2x4v9pnh1T9yZKPpcT7CKgmYTEWCV",
  "key25": "2u8qg5EMdqUeAgbUS557PGox4QLWJzuybztEkMNcQsgdGb6GVpW9fr3NAijUREcWqCXfK9DAKGvc1PTnFtkASh3f",
  "key26": "5KtZHSJmR4ppYjjvpZvNLBwbJeSuDZ2wDTxMu68E2kJCiyQcaSCcmgDw8ztVyiErHrEhdbDaEPnPd1qtsFnuiKjT",
  "key27": "3yhGM3HNfVgxNd2bSKH5qXL2E9AWdVn9LTSbb2yNn3NghEPeARevrgLyb77ZSuH4vfco6ZKqzBov8Xp83b1cHsHt",
  "key28": "3QQFDSxK7kSMDwekQcfET6g5EYExoMvmCF3o1friSC43boMgFdTDLsq1R1yeSzjH1DUnBvQwCVrgeJNQpDza7DgS",
  "key29": "2kYL9KfoCKpXRUjxRyDRR7sj6xLEwZVTknZ9DVEzpLZmZ9Gywz3JTaBkxh35uh48bzNpVjkZmcmVABnufYia7joZ",
  "key30": "4nfsncPHVYBuXs7rxSTrQhDVzAJrWCRYYAiAv15G3wtwGFnaiZgpcFJnZwxP5qFDXdEQeyL275V6d4NaPbsmg6wW",
  "key31": "2LmmiFMwufXM57Yx3wZg2HYwRf5igjK4R6Ljay7G6vMUREsFqGLUs3fqUofzsiKmHGKaVBTSaLuxhMmec2UuEGTm",
  "key32": "3hRzXeoWqpfY6xqreC2svR3DkWLif4kXtCcQqoyVadXa5UjYnnQTnJKSkg5uL3eT8JwRwPeh9xPNwWA2wzuD3ngG",
  "key33": "2S2K8NJdN8kAuD3ShoUXmbPFNGK6GXDYqRKWcoe8aReNgagMwHkh3aRn58rcbBzd6zw5gipGyZwXE6HuT42gXi66",
  "key34": "7TE9Y8M358rW1c2gGP85i67pSneW2W4HAEo33Erc77DA7VUk9qowN2UB8jjNE5pBP2TbWwZcp5Nh71AdhUy5YMe",
  "key35": "5BJZJ4VsE52UdW2cnVFKAr8JWxevETs4NPpb7CbzdUzeukrahNzAghjQdFzR5rzbF9AFuQwL2YW6ydTe2YQw38dS",
  "key36": "8XQsZnmbs17RRqBcEQqjC6BgRzKJJ7xTwYQjqgzaUxjQuvBs7bhvwUVDLL2wHHkiePVbbt2XZJxLPUyMBhjJEFJ",
  "key37": "4SvVeuVu7SRnZT3P8q9AuVCLxzNrGkTpjRRbw6D9TXmkFahEs2xajYPNqrru1vrLWB9cyEr9ewvFMQxqeHHPgH9a",
  "key38": "5z3dipuHyUJoY3x4yo6EitcNT41wmBPkyN2mZBwiJueSthtQTtGpKXWEesFFchjEQiKa3vcwSRkJqMNSgaNnVmLJ",
  "key39": "4VY9L3kR4ZtJiebAUr1UHRii439Zk3coXuYw6p8Drn3GnmK3S5b132NWxLzmzXmQ9ukKBLEABMJFqaiZxpNontE9",
  "key40": "41XkkeDVtnEJYC8sqBgHqMZfYwHLC18G6qwjqV8bAeH4fZkYZhVSv8XH3D2CuiA5H8XqU1zGZmBajwmtmFAxPYR6"
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
