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
    "3PDLNNTL5hTBnMGoMnJ5CvzhYVLC8P4fLyKaYmokmQ9xHZePa2wLtjgv3NLt7igZSToZQ3974AoWunABrBw3bDTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9n3SmRfDVKwibptYfZBq9bt5RzdLH9w7ygkxXRJpWcZLFKVrkZcLaKjiDtF3ueH83NJsFhmN89azkGeffaz2Dx8",
  "key1": "53eSAZQsouj7aLT5rsvovXHGMrwvZVk5gVJWFP22iEV87yijTUY8jyYm2teo1Vj1Rvz8RGyMBXK3gKuDrQY8wsG1",
  "key2": "3ksKzffrDjUu88Fwqhn1tWhpaXkGRzYt61bKiWZVCoEmSRPT27Ur5wWNGmvBQUZE6bz7PHx8Fe24DNe7mkotr9d8",
  "key3": "28S8HeynRqBymYZZFm2Hd3GUFDU9A7LuqdrZWc6o96JLHmzHMuN1sLPDotYz4PbMFPEGLvirEjzbnzxcNnXrTkKv",
  "key4": "4K7AVHr2tJgB3jLarogSxcWPTSEzLbF5t7EVS9XDhcmZeFGZ5bxy3u3KeDAebKDC6C3gjZYywn8kVgmQA6HudxmH",
  "key5": "57n9ZknBpCiB8vmuQK5taYfTZkSedYNcKKofHCZcgbHYyKUprDTw9JyHnwumeaHpPc7ghs4kBg5vpVrKAtYvXQYj",
  "key6": "5E7NPbZjv3N4awJW9M8WV5qmDMrAL9iBbQmnLb5xt2JJKDxj5nHrRzWYUvHfedEzXbV6Lu8ozbwUDfvVfter6t9i",
  "key7": "5uVBzGxL7ripr4NMLbTQp1zzRif1A6amW4YjDHHCBvujE6W1sccyJGZCJnLcoimtfa8Un53Q5WPQyTQHfbtTmUKg",
  "key8": "1SSLcGtrA4xyGx6HogsjraUbiatBak4GuNeaX1hDrHwdDg7XUGBSutN5jEc9HkS6vLYQNjvTggj26adycECfQfD",
  "key9": "4YKjpjdfUgBo6BjA1Rtz7rUPHxXEWjTwujtxoq5T9nQzgFwM98CcrK7XcwQqp6Jivt46EaSXz4gssjwzPgQwHtH3",
  "key10": "3Niif7y3RcVuvjyYX5Y7kjgaJ3Dk4w7w4YS9GwgC5XtcYTN6hKXf5UUvzTmc4iQifSgQbAofVsgVbRiKmK1mZcgg",
  "key11": "2X8sqd4tqYtsj7kkW6aFpMhPK3FU8XZAnLQGvGQKTEBfZsEw9CsbiAiesXJnvVpukumj5digY99BvAtkdGM7toPf",
  "key12": "25W8WTLRa1aiTcWkyR6LCo4oNW8QYgPAbPnfakLcpXU48n9AD9gJJAHXp52y4fqExzDXZwGcBAbpBtZjnjEgrmg7",
  "key13": "29eKrx7JxJ4GbCpJXyrVstynW72KUJ2db8LP1t887x8SuM65bFs7n5vA68oeDPo7YMRsVM2hTTTqnEuEi56wrWU1",
  "key14": "3UL4R9nWbcgrXTXfXqn3Wx96JuqycQduqre1UH1yCXQBwwTt4Bbwg5MkxQs6eTWUofnJxtVxdZbzBvGVhN6zVHim",
  "key15": "65Zsc76CajZ77Gny1Wh5GaigW9QFTPawrRf4HpyYEaNs4LCHFT6zqh3gSUNkJZ17EWDqF86NynhNf6pzGiQ2HBPB",
  "key16": "5YpQV3re4UYpNBTb5zooQ6rqV8nwjC2M7qC4P83nJ6z1gpjHAynLy9naw28KH1t4wCbutN13qspzB5VjaAFE4zmc",
  "key17": "T4xacH61Cfk5YFtp2P3SZPEQSvW7AqidPvZpLCpA8tnhsnh2BMSWW5DJ61WFGJcFGStvR9uwNM9XMZpUEu4pKWS",
  "key18": "4nTjnY7i9yzfxfv1YBj27eBrKoCfgXWhFxWWv4XutqTouisU8Wmyqhrdr9a8G8e2N7UPv4auVsAaDPnB4aHDsKGX",
  "key19": "3qH3S2PcNuP2s37abGQQ52UBchjK6XfGy9q3WzMVSUWf5uxb2GfChwEwjxaCKsw1L3Et2CSrmuQU89QLtNJPpFCb",
  "key20": "47cyBGskufZLrRMfNkgsWUn1XPYNuC7EuyHXM8fzMgsypfnZrmhV22AnUpNKujZLLLohFSXu2tjy4f1AP4uM5fzL",
  "key21": "3GWGucP4ojbct6mGCpBY9v2Fk3Usb5RV41Vv3MdU7UBcvQAcdUaDr9vjnEM37T4RqtK2wnmjyaDRkxDCyNTTBhSz",
  "key22": "4BS1bfWTDHdjf8FNSWasg5Vunobg8A9kLuhDMPgzQAtKFtZfm7cSnii1kSAhe5cDW8r2aFQw7WiVC2xkvLAr9Euc",
  "key23": "3qabYm8wFiw9zXPNb4a8YUpi7cFi9dcHxQQi9Pmdhm9RWbSvw9eYDPm29uRVcqzfLTaHcoFWcnk1GBhF15aisUgG",
  "key24": "4R6EERxghBTTbFjiwGvRzsgbwDNubmXBGeNkZzxJS9i3FyaQsWd3X3VsTfae2bre5sU6WdgSNNiUkkJuMmdbMeBz",
  "key25": "5kUCwqPS4hdbXJYqS9ZzwzkKCTY1Re8J15GS5BoCuPGWKbMpdmVK42SVSK5chSXm6s53HqrVMkoMsX4Jw5WQq7Ud"
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
