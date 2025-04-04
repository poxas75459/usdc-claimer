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
    "2JeaJp6q4Jhz5FuY1VGCwLiuc9ACKqV5FS8brMJ7i3FzCU6v6fGpHuGVLEavHUnPYiXBUwvTV88bPkPRoERZaXqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gwpf57vHETJdhaPdv7dRFCmh3YDFJSBds5xJYNNEMDFmLBh3buy7YtZpEk7KMYFNR55Fex3rLzv4rGDSP9XSLLJ",
  "key1": "2qP5E53Rdsu661GDdPJobLqw8KC46fh8PXxYWmKLyusZbxFqQorg76TKrpUeNScZGjf36KWzesoHspv8WASsrJ95",
  "key2": "4kTL6qMLFw6htrFamCriXwvcic1vjH7GxoLu79L6H9idJFXw2xxHQxK4QcbGwYV8316epTiYQ9fsnUxihG9PpE7r",
  "key3": "5tZ9xH6iWW6paekBt4Hphtjm12HaKGDLoRhvJLVaSPjbvjUe6b8V6fibA6CJtyPtxNpF3CdECk1MQd8mifsdXkwi",
  "key4": "3vCBEkstHV4JzTE6EshqeVwHXh9NSyCNccU16bi16xpF3BxFbcRJkovf3PuXzdCqw99swVRuBepBaWnabGLFiApy",
  "key5": "41DbcCJeLTrfXd2ANCkA2iVW9sf2EN9kL8en7GPx3xrXMHxqeMZPfMvz1EiHPUZE8RakQnncEtBJSpFYwiGQ1Ri4",
  "key6": "HeCBg5egHP89kckFxa5MNxotV3R5N2czsNVYEEjwss47gksRpYPxHP5nd3vQCMKhq1umWRKZrjcfiy2i5xRjhsE",
  "key7": "3uRff6kWGMYGF7sXHYkToQaLiKL66yBN7Q7k4sARwrDSsA3nHLn3y6NzhAzGbCC78sHgqNqxMYyLxWMyGPyWwQPX",
  "key8": "6ZLzb7ZYzMWnEq4S8C5493LVAccuKvEV161upG2Qxycbf5RfngXoTWmTBpVvYeNSEKjr4veKBVso7RUPhgZmE8L",
  "key9": "66DRc9tE2CehfmKMKwj7NjLo5D6zE3u173EnkLd6zpyjehtCKmBmQqn9fRi2t38o6cw8v41mUmpJvHY14hodaJ41",
  "key10": "2mspFFNgrbUeemeUkW88KAG8ow7gBpTGqwwzVvyAYRWC2PnmKWPki2p5NDU1XiJWm6AdxdksznRXDVZzK3fS1mxv",
  "key11": "4Ry37BVbUV8JX6dh1fAZ2emm3eKihYxBAdAuNAHAJSqtfzMXwR6zGn9fAfqq7ocNUdvXHtZQ6pJ8R2JfWcwmZQM8",
  "key12": "ZEfReNVwR1LP5CXbYrHjtSzXKDQRcNXagpBqc7Kg7LyvwRUwokL5nhEjZT54vwsECF7d7EQazktP6j6u1mvdyUE",
  "key13": "4p4FPkWuRa6EKuaQCsjEXYThH2F9AoZ8XRX83pzkMraCmcsBneWC968qZssFrviHWYxBNZU4wDzgJTXHEcGxexFi",
  "key14": "31fseD7EAFjKFTGf8XiB6QhceCHRfdhsGcX7KHFFgaExqDTPDVBB17ADmJVFQa3wESBvpUPyx4zEpvbLLCTAogLh",
  "key15": "e45dLFM9aqZ96oCAkzFykBmCPcsAGTfWAc1XmyfNKYyCwxEnP5FeH2zzeUUJxDXsJASVKPH6rhctxEotT45CUEG",
  "key16": "4rxyc2R3Zytu51yKZ8GhBXmh29fftPiXX6ZwKUcPss7mYTmXMiEohrqVnPDaDApxopkkwJcHJ8bHVKQD4yPxVAHh",
  "key17": "57gA3Eynaz7x88nANTC2x5CHnj4zsCtAQvtcgcS2D2AU9NjdffJoyHKvNHCUr4FU1JX4TkAnX2SrWDrCzZqvJbaM",
  "key18": "753SkJ5J2rN7q6EQw7CAozfKzjZKnjJ5YJ9R5CUrZyvGBU69qvy6K7QVC4ewkfXNQAHSxUUUiU4N4aSSNQKahtH",
  "key19": "ecBm35MrgGzNexw79DpobG8vEnGhEZ8qbXAWUiiGKKLGUkas31FwKcV1vkeDeQPtFrtSaf71FiyC6KM3YjAF5pk",
  "key20": "4a8spsC2zFPfMt4TVA3pocEcGbvAD7SJ1PG9r1DwBQupH64WV1hjEHgcNhvnzHtL93cMZywAmBS6KbWGMbJh8Ga9",
  "key21": "26WsBCqNt68B7gyA3rYx2W3kGxpi1H2pehZVHBeDV4WiskbuQkR9F49FyE5NLDH2WWkjC1oxj3KddpKSrDw6meiE",
  "key22": "4iY36hXjKU3xjbibPnkTafz74w7kgPMbodyCVdakMrbz8C7Z9gxBqNveQmUwsQ46725kYg3cHDLeV1WNkB5KBxJY",
  "key23": "5dPFREaBVgka9ShRjsCUaiWLhmZuKqJ7shKJUWDQ4t1tyFxXQfAixwoXnVFwCpC39k5aReXBWhfVTpXJtdBDHhPJ",
  "key24": "GSJdi1rrERrg7dX2SEMnDLAJjaabrfEUGc5cD8DgMQzgpJ2615xD988pjD9wRbupQHHcZUcsB15gj4ZcKKdKqRx",
  "key25": "3uF6bNNaiFRJSf1arefrZH7iJnbi2Kz2VNHAS2Q4n5pcqDpNZQFRv4FqTy7uzRd6PbYQsC7RC6XyJ9QXrUtvqirt",
  "key26": "2pxgHEyK6EehVBweiAiDjaYyM4kMfWQkuJ7JMzjQM8jrz3GjE7uy22GrDibaEYJJZuQ4ZjArPtWaX17xdFPfhkdT",
  "key27": "3qiKDss1bMfqu7sxEQLD1kCkTspeg8yGbSAdWRDvyxtoYqFQsHdFdcdyDDjaQngpVn4XXc9nzPHsaM9C2CYewxnZ",
  "key28": "xVfhCSJ21g7tKsbuR4xgA9CFnUi2W5aYga4QhroYnJVLLr5imnc2SViNmdY7c33r42HstXx7vKooTG6HGjLkMTu",
  "key29": "4sqWrQecqGjsm1Hx924uuVtJCisi5ULtmfTGG2Zj8KPqwL1ogPiUumxddavpppF46Dhhe3hrCqnqTWUwKF7HkXav",
  "key30": "3KErF8xezkeaqN4BdFMbCah5bt7Y6hFh8XLbxzG2Liw3JM73U27qa4ugNanVBMUvn3Q7GuVEYT3HSQ2VwP1WXPD7",
  "key31": "2ex8BNWi4jLhN9oX8ZUahvkgcL9BXcWAh5prAyFzEaettSiYhDAyj4fkdCj8HAp9pn77V14DqNoFsioYnY1evpUf"
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
