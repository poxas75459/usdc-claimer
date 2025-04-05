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
    "3f4F9V3YCTLTdT4eESPAw45y6o1roKEPS5dMD6H8xgGXxZioJvPapVVkxTEGAmU4RQDiQB1aMbFvJwHbwhGxv39S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVsstn53a9Q86Lzm4ZDcrjSkB776SHMPpkXNwne5TWnMKk3FFcAo5UMh9mzr8onzBpdUmAenAKapAGJw8YkEWGX",
  "key1": "3D1f1xY7xJ3c8M2zhGuHzZPtknnMSFUD62nfVQ8dZuzv1GSMLJ56kNhKEDWMsPv1o4miDPcLe9NcX9QcJygDvqH5",
  "key2": "2YGirz6okC7drZEZ9tTAiVDGMqALdVNyTeqodSLbQLLYSvH3gDAmfkVz1fdNp9Ji1XfMeSvTEhGZbfJoYcLxK5b1",
  "key3": "5PQkeHrWPVXMCoND5VV7NmHNv9mDLrdEBb7mmFAtoMZbPWkNzjHPAmzaEr3uNJAJsouowWrDHtzAq11ni3vACyud",
  "key4": "3HwXWEHdA5ZYBfrRibvm5BH7VV6ZM1T3eX33QuG4Hpn9ofdnGP1eQ9pLj7uyZsYmnJ6BBEVVxDWzaXpbUZMpwhxm",
  "key5": "4ZXzCS5jARnxvwpdnfBs9vFykiv3VmTzcZKvYkYnPMNS4LwsGjf1XeqFySQngTUQ5T8YTMnonZWkoQnHv8SDfU8h",
  "key6": "4vLgtEkF7Z6163RZHya3xHDxzLkJ8r1MLTu1gRzS36VGRpd4bzN4wdszE988NJH8ppaeASj83fQGwiZbz4eixssv",
  "key7": "vv6CiL1atAntBg8SKuePXGqDtFV6FBMUg9e9FsC94e4M3YdUTyP5gLfHCBWiZhzeDTC5pb66dftssixfgrY92Gi",
  "key8": "56DpW7HhEXT9uX4CeLHpLW7SrGXDbxGFFXr8NBqepDHVh1m8dVpD8pjL5q1CiEW5n5WC8x3pDhumSRXZdJGMtxGQ",
  "key9": "5iVWmhXsuuVG7U6HMVwdLBb4bGMpPkGTqb7FAQfpgUMgXb14vToA4uDoDYixu1bfDM8ihGixsEyeiSpcDZhj6rCZ",
  "key10": "3Hqzj2pFnu6fUTtg5vEav8YzXHWt4Tv6FvXBTdfEiJcqmfZZcM4JgX16ZgxDiRAGSF4sUUFK3RDXUpHyCDpV7JoW",
  "key11": "5Jkfy2kYhbUdx6EpxAmiAju2LoudfsSFMoYXRDzWjXUSWiBFb2LCVeCDPpPaY2AVV83RejCKZytVcCMQBpyeThcu",
  "key12": "2ecNePigM8aZP3WVvgaFhNu6YGJ2qdR4igPt6Z8BNsZYNA8ixUrwH5j5EKrXQ5myyiZreAUPHjLycZwcTeVLrwjN",
  "key13": "4LVbm137fFbMDcMUfsnYQHUCSYq4TyJW9E7ri8mquTQy3PQNsmzcoEhxcZ32gXNoaTmxHeTDLRNyzufEPYn3HNMf",
  "key14": "4Am7zuggM4Y4yAYSR98T5U3pUht7hcBCSxWj8qvZX3xUmjsqYR1HAmsH1L5GpFHhBbAvho3JqxEuP86t8p4xvpHp",
  "key15": "4KBBoWzD3XMDwuBgKcBob4kzWb467nT5jx4JC4PfHtihBmYCn3GwzjyNp8Q8PTTT6VMLrBUpf4R35EFmo697CaDC",
  "key16": "5tYaPBe9uo8WqybUmag4sgMXUijbevmvJ8kzr2cach798ABLo6jFnH2SnqQfizZWXbRpnjgBRdAnP7QPVDeXAYbV",
  "key17": "2fnyghAWSXWSJ4LVEHZ2Gky5NqfHM5T4WQswmjsK7UmcoAZ3Rmy97g4Tz99xCpasYjuNp2upLSM42cP3bSGitfJ1",
  "key18": "3xMzrTcjWk2ubDM4XuP5kkgEdQo31isa6ah3BE7YExGTHrfYvUimGmgDt7Sm5KjffDFVxkCgc5afPr1UZHtXRHuJ",
  "key19": "3vBmx5ikkJmjWhNEuwngBG6omPirwFc5KsbXQfJUZMEtnBhJa2uXuJijVaMGWo4XbMXaRJZyPLmHgJEVRkaxPqak",
  "key20": "4FRQdFvWWyvXstNSmWfz2p5Up7VwS3qsjJSPkdrHT42QEJfqvw9K9JftEmctFbzLCy2DXztHe45PGZQ1CoPLVbdK",
  "key21": "2YkTVzCRW5Qq6r5dVhaHSs8nFoZEBRW5UhiTtui9F5y8347RGC1ZBsuazUXtk4LkYhsnY27khozhPWgrVN16Y8sz",
  "key22": "2MmjjghAT5k9S3h1VsiwM9F5JwZwFaAnRe2qwiUz1XFyYUoZxEhwxEGmLsHeczD9URefJnDt2JmZCYbRimZQL3cx",
  "key23": "2FRLoRWGPciP7amefqC16w1n7TBvDSHeXv89EqSgxUwVkcQK9VnDt9AXqMB1iLfsv5R536q4hC5XzB1H1YnC4p5P",
  "key24": "KshauEi7iKS6SKwReLq7SwLrMKgZK2QYAWNXDRS5Cks1U6bu1mPe6hc4xP7yFSd5Lv1VNZ1UyCRkijgcd6cR67w",
  "key25": "29kV8SRvbXyfVd2Q68YZixTKSuqGAiWmF7f6UsPEmRQ17AnMKx8bb7vYbHVR5nNu5Dzjh9icYHHRavJq6WDs2G1Q",
  "key26": "FDej6vee4d65gAVDtScYshhGiYek2rsXXPbpNzr8yiCsAMc5oN9tNBz9QoH3iM2RzQwTZvcop4BLErqq4j7HgNV",
  "key27": "BngZn35TAAW639zUncFRSHajDWztktEH8ZKie8PqZn1XwJTuj1ifXQ7YDxqzVNz4vNnwTXTdCebcqdrgitFqqr1",
  "key28": "CCjh31YmPmD8qj79g1T5F24zFQ5vqbyB7NapfqQdgqFq3LqJeRiPWUVxSoYVjwD3eMALHWDaKeSr58XHSTj7vz3",
  "key29": "2CzP8qZv4HTfAEwwTgbSznf5XGwgZcLo6nkedJN4kfM4WzPsgxDnecuv4r1TwojWEM452ZeXDi1wKMEz64BEHr9",
  "key30": "3ZRdjmzs8QNhURwcuiKTY2pNMxczJwTDca5bGBkeedAKix2s7Av2xAjozSukYeekgkAJXvxR3Br7cbVarQSRa12w",
  "key31": "7yST23CyNF91bMsntWWGqQN8esB1Awym64ansaHRB8y4R3FfC3RnRqWERXDua9PQ3AaM6Nq3xaH11MrpqmDmboV",
  "key32": "3QVszKDVMJTUHyxQCNKNURvyedtGjgTTQTQA9NADHtpb47jfcXSmGgTrXkc99cWXhcCtdZd9XJXCNAnLSptH9WJN",
  "key33": "3WHSBcU8KxJhPH58habpSbnzZyBrdmQyS413kcgkuNn837teJiZDQV4VgLZBpTkPzaUK7WdEDaY4trQi4bMSVUea",
  "key34": "5LFFE6eFjB38MGt56D2xHvC2XVpU8378SrCRtkromJjSVztSfHEDvVX5hy3Kf4Y9PPpf6yKRcJRHYm2oimniXNYr",
  "key35": "2KsDUkF9VoRRGdzk7j1SJHrWksZFVXMNtYKTrrCZ2sTNNwzbwuCT4uGdD7FrrDQQNBfopSFVFsskJpo2ABiFMArM",
  "key36": "3HBgXvd4yaDcwz47PQ5vAg8CAp2GfYjDuwYYsZtLsVccEZLcKDLKjBWPpRsxVigqoN565kCMeEfwnBVbvbCYNwhQ",
  "key37": "4VXg88MUgrdFNQYeZTwaqc4rCXoETth395ZhSjeJ17dzqCQAULc8bQYzSVjJ4UeaxsKByLY5mvXwU7vjZSgYmzJV",
  "key38": "4dsRuWpMDd7sxg3B3UT2Jh2FUejRBkoD9tfLFAvEmdTfPtkfwaRcVAKRf6zhHVqNGsXU2f8jQraJd5MKBpvmZZU6"
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
