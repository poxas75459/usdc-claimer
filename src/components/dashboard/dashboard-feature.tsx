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
    "5dbQmnviSNJnjQLu45kLG6JASBqRMycnfAYDCyAy1DszKWPT5x8jQiAacDTeDzg5BEgcqPzo3TGUCw5TrFht8Ka1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ta8h3ARZoSEpN7J2PeVvttAZenBmZtTpz4gUF4rVwna2fomNCzZ3e2qef3hZ4kurXn3qSTEGWhKzek56mFaTVj9",
  "key1": "2m4B5Q5sBZRPbv9t7jpvagdZXetwRSp6BFL95PfjGHo9NmoTEktfPTacjLKAKwbzsMKPeCxrtfJjjs2WyurMbw8h",
  "key2": "41NCQyM82Uzqo3nzhaNuGqs847sURHUQdM3FoTRP38s4GFXu6y9h8z6tMnLrN6ySWVrsYEHmarC3mgaUSYgv8ofr",
  "key3": "4YHaLbFRQVCUYkVPMsyKeiwQfKtcZ2b5aeJVxwcP9YBPnxhJTVrcvg4giuSU6ah3ApWbZr5PwnjrKVw6t67Mtshs",
  "key4": "2KHUCmg2HK9VRCnrw5DFd3YQvAj3SbuvgBpjCHCyPVrZ3oTkfDR468Dq13Tzd22ZX2gLYUMfjqMzg1GZih1ZmpYH",
  "key5": "2wNC6hSwmScAoLfsKtHWoBaMyGFEAAsghy99FmH1gMeDrsVepiwnF6v4uUD5W1s98TmqzCPCyEM82KnVT5Jzpmym",
  "key6": "67YCuyr1ZASPgoyu9mvEGfHgMQUdipoNn1649mCL4U8sFJrwZRBRGknWhCWGjpCuGT45zacgF32MRDzbtmcZ34rZ",
  "key7": "2WS3uRYwmGhAomexuk4kQn7XKKRTALFWDq8Yt98UZt7t65k3yUsYnq4W7skUzQbtGLQM3QZc1BJJ7vgKssQa6fKX",
  "key8": "4GFWU5ZGrCBp3efTzWMWa7dtm93uDgSwAMZDw46cmLLGaMddr4RfE6ua4KbfwK2LsnsuN3zhNMnjdohuXScxXKDq",
  "key9": "PRa5d5khesQ1fGmKRLfSR4575GH3WeAsCLzE2ACWriKn8Kb35CJdgutbVVCc9aC4eZcKoWeeg9VfbJ18RLNYRJq",
  "key10": "3virSjRow5tFJMrevTPnkAUH79Qa5t1ipKbxS3fGV9e96bbAa9UY6QxhdSSpjStwfJsAyrA56rc6wDAreUos1Rqv",
  "key11": "5aFozpACXvojYgLMkFRNTcYzdWix9k1VszQbjCAuqUTHdoHLMyoiEQ1VePYZg1XQ6tYWVCu4zpcEXn4zmUsFHq1b",
  "key12": "5YoGRjykxRfTMw1q5efsy53QHeKFztP5Kt1acKNYfXki26k9P8z9h5jrJSjEaX3rhTAS2fYXV3yczgd5gruMzvad",
  "key13": "43VhQjzdwsFcY4X3NLTqfeo5Ju9KREMt2xHV7XJiuCy8YU48r4oDdvUeuYgh5nwU24sFMx7n1ToSsUQ9i8W7Ngp5",
  "key14": "2ZF4fyxcVpwGCNvioa9cWfS8MSUCg46YiQBGL7MQUXPKCGxBXg97Ne1BocYo3tCvThPqKU3bKjenv7FGqjdS8VDc",
  "key15": "26JkQDWa2u98F9RXhKraJ73e9jehUbCdPUYBHkSY86rXe6pFxmLFissqCTAvzR7YAGvCPGViZQKHqA3fPZfidFj8",
  "key16": "51ChbXKS2jqYF38ZXrM3kYYQPtjjR8X9DwLTADdKSA9DmphFTzkaUt4tQBrmY7A15ggEMN6RuhT2mkNb19EKAEjM",
  "key17": "3NMNvYVUQRaqYybxQpALRduyifUNK6vpYjpyjFvAu6kePu95Twff3BuHzGB6XcitEXSnuZ2jmW7ecth45wwtJUb8",
  "key18": "3sXwwj2GKSRsvvCF4J6iRNBmgCr2vk9g8CW3FMh6MKie5g5wsyJD2ATx4xtFqqfTdPVC37gFRoT7Mw1jC1gA6CTY",
  "key19": "KjPocACBd4fxazTT2YaMno784c9KTc4UMZC1sbEsg2jUHkX2jtLwGuu2Q3x3kC3YNYk7uwPixn18rgdaj5EZdK1",
  "key20": "62s4gQhjPVu9vWYs28Tm6fXCx9cmCkMr5cwDhxHABRMBDunqSmrqTFP5kLDgW4S8P28HaJN5x7fH9aKoBumnvBVc",
  "key21": "5GMfz69hnBQqZ2zHnhUEznhx8BRyMjfG6RWcQJbk854RUMvnyHyTR4A84rJu1KBu3cHCaHRMLgj5PKUhgvPgBaAi",
  "key22": "Khwg8qcmHWzqC7SuFzz8bAyJji1oyhjes7RVax2LpF7vS5N9bZBozwrMMf2eRVwf6KY3VxuH3imby2NDN8aQ2gB",
  "key23": "4QDYHBuScLjsh5gqgTmcoP6Kvk6d1nLQGkpMHP9Ej1mHJa2rUs1QF9CM2qK1dsEXmm9qmgQBmT7rxaSba99gcYoX",
  "key24": "3jemKnytJ6ToW94JR76mQ7gjzYjLMdRhL4PhDnbGG9uD7c2MKU4jAGhb51ocnBXVWUqk8iAgcctqp3DVVzvnP8sS",
  "key25": "4zpxMef9BByCa8vA8hRQt5iFAGV6NDXZa3QbMUDHeHcEvw9PrPvrsXy8gvN8uN8Av4LXGvrky49uZMQH7EtLatG1"
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
