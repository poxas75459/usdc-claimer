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
    "JdDA22tbnLyFhCptTVaWVzbTwkQUXmy1BQQPR9vN9ugkK5qB1x9SAQrGx4Nk31pXkJDnjRiLkQN1PuYvfzP1MWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MB3GCTn5VZJQ1foDgLvenQ1m3ZVqTUXodhy5WzA8eLfScVt9vG3kdTdGrQnGtaDfC7Ko7HihuvH1xQmpmwDRKSo",
  "key1": "2aY32sBefLrgRY22zSipuPYXohV9TXmDaryVvZNvxsmGEQHZcEppckuZKJCPDtz8DweQcQHT8TaA9fiWgFrWn4R1",
  "key2": "JmDJZLqYJbKJRiepXLMbQxtJqcXydR7jRP6zVeJowFPPMFVBXnfYEv5As7kdrjJByUmVWyp5BDcsz4Kiv2JuhFs",
  "key3": "4bcX76rgMAZd3PpQvN2SgrXkNGamfDVWPE59Mk2t5L4mer69mC81uhdvJEV9gLEKPjWS1R5SYUAiAd4xvY9JL9jp",
  "key4": "4Q1HU9HxRF84AUiKQaFq2mFXH6QMLVKK7vZGw7VaxfRz5Sze6Kq5hrxwpZP89pQmPbtGCnPpxGDqMo8pFy8dkp2K",
  "key5": "3z8Xht2GavqibQErh1fg6SvG5DqqfeMP4rTKt93LhFXBEuh19iUbMojpkvJBKWP6ie7PDjBzC71Rfdsmn5k2bdhD",
  "key6": "JHr46CFxu84f76yiLfChiRCrzVmhjRuom5xPjtL1K8FbE6L9wa8dV7k9kkCvnpmGm9kF7osUHhWiVGDbo1KfPgN",
  "key7": "2ghGRnL6kY2efaCv5b1DRDZqZBteuWv6GC8gWa5PQPYdwjWxAHmCkbj2UCKDbAK9v1zRtxK72CXB1a5BPkBEPF4L",
  "key8": "3iaKBpKV1NfwbavFfkvieKrQBPMNzLHtJnvKav16n7LDwQmM85rWzg6H9RYPny9R9RAnnnAGE4YmQPSr3U9B8fEo",
  "key9": "5cisVJkewsxSVd7cyNfRhwdBJ27mXRtEm5NojiKJ72e2nRQjERVZcaJHGgw4o3ACwnDh87dnz2omtjX1VQ29Qhw6",
  "key10": "Qaa6bWnGCUdfrfcPbpG8CerQHvpeb4dPtEwDZoMDjMZgyHqjxmZDRWidpFq5t8FYoU5XUKhNY9YrXJKT6Yq2QmE",
  "key11": "59Yv1ASr8hMZLBzc7a7UzVyFdxBJS9jNjvUdqSjSAGzX4twGB1WwSSwGinmd6aZUGZx2NFDYEXm3a2KA1N4Bb8LD",
  "key12": "5QmRBf46N3RVbPCXjfdYkEo2KrR6powMKsvNQ5V3GbtAqhbmM7qNt9MFrv8Us2evLZSA2dp5ENohCi7r8tR7QHt8",
  "key13": "5Jr8Wmo9soLWzVam4Ur1GzBRsbdVyTH5EF5SjrisZnULEEj546kPmuufNCJyAChobfJs421iqgKDro3C5HUkJLMd",
  "key14": "4MKutkz2dbSrvvzJhmWFANuq37JVLV4k5NmqayApC8fKvDZ3rXhXxVmeq9XPijFzCCTm1gn9MinycHryDtGTqtuw",
  "key15": "2SWNtAiivGJjmP8SUMhBbLWwgaezAfZdTVRub7RvhMkpUYcGCEYsVRdRM4LheG4czEu4vQN3qAwSQcakfdTazoPJ",
  "key16": "7miznQYbPbmi1q9E3VtTRgPhXE1JDhQn5uZx58V9bBbu3ih9essUBpFRfwy5vV9pmgrSbYU79vtpXYHp8Jj2YFe",
  "key17": "2i4TJpngt8icFfkXsJ2df8paqLCkG6Y4HDkFzChh7g9RJydAYUcRxrseuHkRYkrmMTQuvUBercYxfP6MAcwZ1JXf",
  "key18": "opyNZeC2Md1vzK6Y8SP2vGKXEQ3AbVBjzKbDoVMfSxA3UkcxGAyFMKgg7W2Cr6TKvc6HCfGSKTkemA8R4dfArzM",
  "key19": "FVwfCrXj9P3iV7zofgw1KvyZXVzuk4oW122d1WwWC3Fd8Pef6KTEazEWvuuED8eaWotdmrav81xP9MhoqyifDjh",
  "key20": "42vijgAQE6Dg8jYxXxAC7a8TL4omHWpRtcbMTkUXqSRRAUnsvgoUVxNNoAs7EFsurUYSWvyE3eKfHgcArRyrCz7B",
  "key21": "4zpZg5nKpsCpaJvzruUYANsv5Ez38pCNZdVXHo7ftDDeHGysrMnCaYr3HZ8HFT8p2SmKs3ZFMwzFRGTvZyhcfeS4",
  "key22": "32kMw7qZBAxwytS3tCggmRjm65RQvenR9MnkiogrG9MHX1soeeetrMXxZhRzkK9uZD1fJ9NqrVSwG9s5ownSR9qR",
  "key23": "4JJygY6agnnB1K6VdF2CPtUCnyX3iFd9RrkTwVqBgZ9Kdsjx7f7K94r9afaKaWw9iuGj9WdDyMP9WgUDBQ7PyhME",
  "key24": "2TFb17SCEdjzCawP1mZopvBraaRyURpebEG97ZqAeH3coo75EN3QT9tx16H8g8Z6GUinqieEAUkrrafN1hXZ1zMb",
  "key25": "2q1hzHEnZJv2SMB4RBGqh4PayC8DiGKHCD1RWx1aoRZ15PzU4NiK8NqFV9ivf6sAXg4JLpZWVwoAwwakwCXfDwWc",
  "key26": "5QZuV6Uttcm9nNtsHqJoAFJ8na8jtLtmoZ3JBRUa4LRcTbUhQpV1TMoRFEA1LJDpSE3iX4EB1PaZQHWneQazXWja",
  "key27": "37dDLEYS9YQevuBTFCuqdK4ttdQNTHEer8zumP8WfsoCCA8yLbpHgWURuSGp5keGF6Jkp6mW7BhNtcGgzhreCrzP",
  "key28": "3HXpJ9zb3FgEGQCeaMVStyHaTeK1SVaoK6eXEv7fFC2kVaWYpPCX8V3Co6bM24DDboMQCE1sMvCgGM5Fvs2mPuzy",
  "key29": "5HCp5N4NryfXycS9SaYVh1aiVbUL6FQyD8XKyF67bAWQywVksQxskX9HJqSEa1nU1y9EqHPDVjXeLKvAZHcH7hsj"
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
