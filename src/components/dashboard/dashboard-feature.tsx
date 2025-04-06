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
    "351CW6E6UhDmqQuVUQWqGANRxFoXuqSNYLgCeP9UdttScidJ6duGrdviQ3isjk8Q6NE6zediWf32BvDmbRt66FWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVj8trQ3ZR4BUHXckhTDR1e1JDJreB9eyntmQgn5Tkze7geicXkdK9UShDtBRNrjt4Ah9utRc8QkNWmAYjZTT7A",
  "key1": "3MfWppekU2jiMzW7FavppVk8HzD2e4hCTvCHkHwarhXu6mzhxSnLT4nzzvMF4x2o7B6mq7dW4rg1aZ7neFNy3c8W",
  "key2": "3zmciykyBL34gxaocmg56WerjgcqYkFyeEeRyReT1i4YGjaHx7h4eL51QeU6BUknqntjm55DqXdPNL8M5QUeypdo",
  "key3": "29pRRycUYn47EiUP3N7zsePSez6WbDr7y59K9iqSo47FxTLSYuN3a3gp88sWT7QLMrpqoa4VJHprqjs9WNtGq16q",
  "key4": "5qaRjCfA6UhRJn8Ne6po2Ku6ZvS3PPnaLDMFL7N1x1rh11xPSuEds6hXXzaBqpB9VRDHFNVp5UHTmfKrarTHfBPQ",
  "key5": "q87gxymV572g6GgngL2uct6CTYy1392VmV9XHEnoZqfADbFE8HkDMsdnE1a4wXfkQmKQxjLecSpHPHzYQLSLGkg",
  "key6": "weHUscnw7ux84DswMMdhTFrqLLCSkTZNfijkhxWiaSLiGutcYCy8xS8nWn2Pkw5Hc9f8XZZVqWuvPSn92xnaXvM",
  "key7": "5DsXt7wmQRNJX4yVE8GKrE5hER63MLQMWgTa6MRxCqUnYpSxyf3Bf9iHbCEuchkeX37tKFadFmym1XTaDhBoYXHk",
  "key8": "3oqBppGZJKVPaLaRXRXgWWX3vyJ5RwJtwoLFWREMQfka5hG4PqPuu1SAEK1sDXFW5YgxvyGMZkDsmWxPd5AtA8Wy",
  "key9": "V793ePUquJiBPWXhBLQuUtKs7sPPRFDqd42RkR1j68BnAXycfL9kbHimcRupSfNUXjpLGmKwypdCCYyNLuFEExX",
  "key10": "5JRuXhG4WyiueTA4hQ7fPDveZjrSHNaWk6vAuu9FJV5NLuczDtJj6rAHzJG8RbyX5T52mXRKCxtTMiZVUkkYQupL",
  "key11": "5c81SUVCmU5dCVtz45XMJEaAyDXto6QAkdF9Yw5Eqy6FjHqkCEpxXCjQtP2AcuCa3v9yAUeah918cFp1qMnFR3mV",
  "key12": "4Eh4eG853Dx6fnVGVwTTKJA5RH2fjePMWW2cU412YSLgAixpr8SNo3VCzP8C9RcDXXDzqcHUJNuf4yQknU4x954r",
  "key13": "4QABKMFSkF3CMoNT1eggCKyWEVxEtub3werY3FA3T9ZArU8ENvmy4AWsMyzH9NCXJyWkK2V8jS5AUbAE71FEMJJk",
  "key14": "MrTPwDeT4tNQFBuCoUJAZHawuLQxYcb5jWrp4BdGDQnS1MvVCmpHPhGWubNLQztDrGHsUZfrmwm58vWJnxgMCiE",
  "key15": "4vmJt3YgAT6BezoQC4g6ourgy2PZNv3HY6A9R7nh4fwWkjqbzKWvmw9KGsZym3cuQY1cg1WDGxYjPp5Vzy9kcztb",
  "key16": "5bFhqwsttQKcyye45qURR94xPS8m89yTwPagijnh4KabKvL3QiXkcN1wuwhAbhuZSZJtb2jr2a5qLSBw9ksCs1Hk",
  "key17": "5JvFmV7ntnmLMBwVpUYbR3tVf6JX1ZJViLV3Wxoj8oUxVNPsZ6qK24ZQrE7HbtKAHZwFYZKje33rHZ9Bk95nRZpR",
  "key18": "ALhYQwJPz7peNGiQUHRtpUZGCwSpqqFwtgkbaRUggna3vArFPM9h7Yez4RZzKktTzQXvPPK8RqA1KrKJnztgGFJ",
  "key19": "4SVvHxiEpq3uCh2w6voq11V1yXn93JsY3Q6XopfoeqoMSp7Fa5V4LFuoMtfCyrRaLMBHnNguBNig2e5tWiX4BCKA",
  "key20": "4ERomysDppuuFCHfsDANthmERRayeqsxrfHbC2bErPvrwhoWSC5gJtYHyPf4q2sBsCCLdqAbESshWFVGUYYZbW8s",
  "key21": "M39kCXkiFBkgqoUeGpqiT1MG2ejN8Pm5cMoB7eY1GaMcfpZ9hCvXRJzzSsdRxoEEDseergU8nBteakEq7h6YFeZ",
  "key22": "3iazf2zu43egheuMz4wGWxvrRPd6Y6uVqwkgSQNMPVXxenPbCnPDvp8wbceWaJBeU7e6rAKSaSUsQkPp17Lcyddu",
  "key23": "4QNBwaUeqgsBp8qaP6RDAyC4bnxmZsySKDQt73rp9TwRL8C2gqYg17Sp8w1DdE37vMb1uP8XmY9bkjq6RgP3dvw6",
  "key24": "3bxkQBQnEpvVxxuQ7RMtUKmySeCd5eBXZsxMpgYYrBGd4fXa5o9xjwvXjvKkiJWctsf2GLG6DhjVo9ZeWkQkGgVY",
  "key25": "3VHvVLSgEB7chLR9tbSFRj6QBtPkMQeH6LDz1mQSgxFyUEtRF4qDJmgV9Au9XBbdWXST476mfvEa5BXqgMwcCrL8",
  "key26": "45UGEF6McpjW3dd28NntaZqiTDcKppGUUSe8D7kskXnX9ypTQG5HCdgfdjYs1r3Z5jcMNkGwCnFEQL3jRUn6Zbjm",
  "key27": "31rit8TxE1HN7QCjk76Eu3fN4FNfyGJhi1N9fWY5HdoZwKEoPzg4LEBrrf3iXdDofEvHRbny3qBM4ujnhzC2eh4Z",
  "key28": "2BUQAWDJAzycatMwCUwhkrdYLucP2zosy1EhBVynLuCWPueeBhaqRZ54bvBEWa8ZMBXoR1dtEKRYcSBU8DFoUmyC",
  "key29": "3Fj3t92Z9kL3WfWLrLuBC7tLUP1e5p3MzJ8Ripoi3H1hfnDMcYHDxu6ej3YDSXtS4uNoyMNNkDmrjearrN2t32Zt",
  "key30": "4ZovmgGA6x5CSHwpxfz5ti3grxjccswB88eSvTe6AJeKM3TfdUiVGi6H6MUBTiqimu6uCc8UR6QQxbgZZ2x75HSA",
  "key31": "5Lr8RxSK64rc7RfCxjwUSWi9ARMQ3UZofN9HwFG9CSduoWRptamfW8GRiKKndUQKWBYxpiAJdrYWpeU8SyQGt4Xj"
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
