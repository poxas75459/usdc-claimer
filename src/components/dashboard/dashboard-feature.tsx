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
    "2DXQTLVU1RL4n8cNKFNzQchjAQfJQfizaY1WQwDhHzEFHa8a84CbhEFzZhY7wQE2DZsGstVaHq3P25heJjzw462a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjivY6bHTdm29LgH6arp38igqoA2dPutA9iKbS44iDCmXEEGgdo2uQVke6tHZkn9zmWt6yz7YwXkwypMgNLuag4",
  "key1": "26sYTLwV1VVLFSTTAjgGEr5sDSDfnoFPfJvvgFkZJR5ksEaEtb6J4k3HpRoSf9HuecyNv1XiPt9g8xzivkENKeaQ",
  "key2": "4yb9DKgv1MNWbkZ4EdjDvZgY8SjtXzWwFHytQ2J75NVKvfpAWG1a9j64s17wZw6tUeEVWzyyuz12kDKnxdH2M3xx",
  "key3": "3oKcTKCvuHM4DgFVkTSYjWo9Cu4yHh2yKzHy87nXN1zdk4QwmWPfceVp1WkvyyaoBE2oxUxLwDrmy6jFd9RJz5gc",
  "key4": "5KNuPPHEw8kEGRyi9AwFQ4sZfj9pe7fC52upWmiPKAxy6LmqsJHhMLN7KKTBgCoMY1cRnfDctFMEbiKsy5ALQVvy",
  "key5": "3uVJx2TUBZjqY59AsKQudNLk9sPhdT23SsHJca23DCvjZch4uTP86HdQ399nZuSK3Ctz8Wfjb1AhghzdSRb7JFYu",
  "key6": "YUUktdnQfS5kg7JAf5jHix5kczWSVQL6UXXNpLUYv4UsKNdQ22phJ4XXGnT4sxxSepMdn7bjyxKBZk2SdgT4sdx",
  "key7": "5RtNHFsbNJA53t9Tzz7kVnnB5WqRUp8EUmG2rEBXCgbMv2P1hZ1BCccJ5FqwzNiT3MYB5D6VuixiL1fLPVuydTwV",
  "key8": "he5zyD8mPZFr1ksczcED2QJjLJuG9w8sS1Y6t4Z1AyQ7dJMPLaHDgKjsCexhKamVpnAYEtgQ7SmJpJfrTDN6erH",
  "key9": "5ur1iwtXrXjk1G7zed1V6GF1eTAYgUhbLMWUdufxvV6CsoNCDDFaZkiWpuhU1kik9MET38frsbUJ9HLJipaQbChL",
  "key10": "36pfLb2s4qyhVbasG86RsroVKTSemBLLUMHAuJAuzZ7dzZkB2iKYAMgq4SM6QL5tTEh5FFK3vQzdc9aweoDsPqxv",
  "key11": "59KKMA4efAR1upGitUecSALMrko6E1RXB4ogsyLhoSGWyCZs1gTmurpKLHkAMbsZPRbsHHkx8RunHdjbFGzZ2nsJ",
  "key12": "2GbBExe7G7rTt6jCa5Yzr9hByipFrHzxKcq1XG5qf7rbjVC6MrSw1TkKv29Us6qL2sgRoFNTys4YaqqJqW7PKfY9",
  "key13": "4Tp4swRBfDdF7wPbFRzWgatByUddbg4pXQHnWdn2xwYSkL4MQg159AkjGa6dDkL5GFHxbVuVXfBQD9nTWMK5FRCi",
  "key14": "5Cb8sCBfBXPVdbmUSyeQKZrNr4wFcuVDYeGAPMqBQ39e3T5LrJRL9pcWFTqdqnwd4PWvAMsUN5umWBBAcEZgf5H5",
  "key15": "LvAFStWQys445CDG3fDPaeYcq1jgPiYFmcJa4VBPRvir4UVkXBnrVeTYewRP1jppgaGfFkLJaG6nEYqDy1JxKoT",
  "key16": "5qxP8KqHiH9NjaEHwWjVWdpLSCwx9aAfdpBHPsG7NTGrBmriJNS9kW2bs3h2eWja1RbzJxFZ5tKGyyaoyvbFHwsj",
  "key17": "51ZJe2oGRsaX8eVz54dXG6LLNzURUZRHLy32oNK2Qer6sbeNYZYzPYWpxxyj7Vg2SWjuN6yhjnSrnEKHtLHsNds7",
  "key18": "2Zw9NfSwcp5J3XWmAXeYLeip9DYGy3Qn18ArQ9G3mvTfoYKHMNbjydDRpDHSbme9BozvywqwSdiAuDtqE8Vgv6bN",
  "key19": "ugNG3WkwSGwkM3zA1WcJizScauAuZqBsofgtSRZaJr2wSbsa4GjRPWaNXZnpEsdMuMRgA4UnkTRJiC3Ah1RAbDL",
  "key20": "YUoEJfo4oi9aVFVwSfNoCxMhPzHpaUsbjSzYHKZBpB7ZtoumFGjwJKUbyGftShi6u3W8UZDUZdPTPJJpoqpFvb4",
  "key21": "4LhKMHj9AoumK5pG3RDEZvQrwD2sfymCLohQE9pmYugKUyeFkxnkBcMhrLMQm5VxRKiqLRjiBBHuGb3EdMYEccys",
  "key22": "5RMsfYc5yNN9L2qGw2fdcfjstCd3Rke2M54aFeRt6ButzoUrNcLnFVMMxhzDWxDTvgL9Mzo6HtFbPV9epyrSWD9F",
  "key23": "z6S6xDrE79KK2kRPJdmWDRgYqgmKrmXYVhzU3f5xYEitdrz1r6b8s9UPrLB9JHuZYkhusBAN7Bryr9X4STTq2S9",
  "key24": "2C9VFWaYpDHwM1D8rBWmAKEmTPiehH7J9D4DdbPPNKnTVfH9XT1sYdpn9K5dKanoXPpxZv54KVbS2rgKxhM5q7pz",
  "key25": "3XBrGyaApfwWEGjBxcusaJYL6TcU15RnYaW3ArtdGSkGT3vyd5esgYM9y9h4GDPFzG2aeJHRWBib6QLo49Y59Nwn",
  "key26": "4GMkQehiQ8wmAeKGo8qkQ8DJCiAaNkEvZoxtH5vZvcKFDmCUvB66EujZpwxVtWUY9bcEogewG9M8FTTBE1HEZa1E",
  "key27": "5YkmuhLbBYFCXzdE2jjAi8CfyWkf4q4eoeS2tbNqQejdLHUfYSQynfGfRcPtdxMP5eKA55GPPJgy2kW4Vv7YeuQ7"
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
