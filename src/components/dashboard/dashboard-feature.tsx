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
    "ZdnEELAD4KyqmUtpjsyHwDzQUbtL57Q3ws3gCrNoK4nSgiRVXV4UoXPjyw3o4Nmb6Twjbj24cZdCa31iz96UYM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UvTsBbeAJSc4UKweok6LSC7SC7UR2BR3jU8JLsBwwwbUeeHzPzSV354UDCsGCojiGENCULgB7Y46yGUuweZRoT3",
  "key1": "52otpU4WuSLY6AxoYvADwCLpsVep8z9KwvMcGh2j6ufD9c8jPhyYX8ZDQu4gLWNhAcBTs2rNfN6QcsF96MgR2psP",
  "key2": "4UPApfdm2Hpof6iqnXAp8qDAjgEYdKS8rnev9cvgtX7uVNqLgurSEVVjTA62MMULx5bQdyB4Lk6P7ce8cKdQNjPr",
  "key3": "5cvWUQ9X5ETud1PFqHPuze21EVLzqTeKsZBDLGmMbKCHwsyTzHW6p72Uq5BXkAr3mKc35KQzwuzTtew8xzeoM5qu",
  "key4": "22YzCfhXdpSbqJnWLed85hGJbaWEXX198FVkbVqQ1KEjysVDNmFhn1C2ohXBnAs8qg5F3bhCVhMMGc7jPEGZZWgs",
  "key5": "34AXDcb3i9nN9TPkp2bGPvuRttVsqaSeNNzyVFBrku53qoJ4r4wv14ArSsBmUNEJfVjoYeqAeiwxwFudnp6oTUvi",
  "key6": "5oUHieG6xo6NMB1EzBR71CNt4VqozGVDkM7qanQX1xdzbpPDtfzMxV5f4bKZwvFEvLY3yxZgAr2W6XvrAnrNHTc4",
  "key7": "63t1AdndN9y3zqr6dhE3z7Y7akj2UydiBdGA6ch5A94DasbfHJsANEn22YwYQBGYiuC6ek2mCBGprWU4nVRmjZjB",
  "key8": "2bCeGL9hwQZWhmcNd3p82JGy8XF1NTBTXE4BFcWgc2iGWgjmsLr8ihb7Yn9mfvxTaMp7zsC92K4FHiDkfT5iGuCY",
  "key9": "34naHQjd2zx2RbjTF7vmofNTHwf4xLuerLJqHNHh4hXXrHZq19FNxTrRPJcmgiQ7ZBsmDxQvNovPBtiEyTXegGyJ",
  "key10": "4k55wc9fLP1RWp1yRRXqiSRUAwreuhCWQw9ezC1mqZsKBXdqzwjhhHPFj6dd79TYYkoFESezikRu6jjx361qmFVk",
  "key11": "sEfyJAUBfFauC7dvtKpS3wPRPTyNKvqNg3eNneWfrwikcGNtqjkogAiqZmGprBBv6KL8SKpuQVv3tYLYav3mrYM",
  "key12": "ywsybGW1xymC8P5q5mPWTYLhtoAHqB7uuUMVjdWXEvwZXXLK1GJoBi1HsrNoKSsPcextGUrpFMUTBixAmdUUNR3",
  "key13": "45ZTZ4Ko1uUQPCTzPdAvNQ7ZEWM4mfVu41z3RpduwUQbBKHa3oQjGyymW9BAuAB6yn7C9VSjJu17PcpT4Noo7u1t",
  "key14": "4tcwC1uJCyxUZGABow3bXCHdgfKBxi3cz3CeQgrQNNruxGrVQAWtJkAP9dgF9kbcyj3eYEo4Lhbc4TQTwHwFph6m",
  "key15": "5JT29HwwYPFBacMa8WvWZNqZS7c6UbzNitNCyvbPzLydGAwaEGYtvdzpBwbdaethLjEVupas6pYpRMgbrHwFbSzE",
  "key16": "5zEXA4UTiBaT2jowJhi6kWNQV1sQ7cZCGZFpHHsjxFS8sqCSKvzXW2Z6fjZcCtSDbyiKjshCvE3qWrgumtJQtM85",
  "key17": "5f7cqchMpYHJYxKmaXZMx4VQyzSW1FLUnYVv4CZMgVNpjUvreP2epBnqtmtrHk7mV4ds9tUWEhnMm4Jn9rfec7e5",
  "key18": "56toijKu1j6P4DMgTwRp4RqCu7V9U73NAQMB6HzgS57czQbA4Cdcka9xijDEinQ3j3Q6332VXBCRiZTcXv52Dgev",
  "key19": "4vHkqRecvYrKWFMkQMotyuLGT4s3ESobBZSDtJdNLxuEvcVtXRPA1yENx9Y8BzxL2Yqf9ceBDKbFCr3ZaGnbjmS2",
  "key20": "hj8QsQR7RazE6WjhJtjrGsnWCXFW9Kw8BPLdiuN8U3eD7JstsL7fEkWy28U8NtgNaxxkMop36gieZvseGngz4zd",
  "key21": "5L77yzsYV5PucahmMjPwdfA7ruknNSABQuXBZkLdbK7G77TnwXT7UCFof1YtSSBZtErUVBJvK2fjwwBT1ByCDGsn",
  "key22": "49RY5dpucWQGNDRPhPsQsLssogXm5JGM7F8aH3PvsYfzcPiNeEzgks9iLiCAzkheBdMXtQF1427BLzMWzeYwc3g8",
  "key23": "4gQZgCm8TTxR3qMeBQtwpSLuAGbyPDeZubjZbu6WcCFjsDeZCC8DsQz4RZygfRBLWi6ryfWQvq5nuvWjKxyS9CYt",
  "key24": "2TFSXtgMtHsVvcc8KSMQsvv5Hk3MtLb3vGHB2B5GA2cdhY3J6sVNyDwAG3iiwe28pfiALdm1tapgntHfTeEyT34p",
  "key25": "4vy9ofK4j2uKj2jHwkbfeotYCNgjWWuMzdWMFZAXq6yz2zwnwAf67MRJuNvpwAdooaaPjR6YrFrFS3mMv817Bwtf",
  "key26": "2i42uKFVnEcNTPpj456PTmeLWUR6Ds3e7Y7XVhUj5JKQu4KbNWBcRE6dZJR7Nr5zh9uWepFNstd5u4QntfQ4mKxD"
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
