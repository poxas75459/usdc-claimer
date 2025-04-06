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
    "3R9nhEHpZQPy7FaPERExb9PpGAbHi8dqb28CQtQeJM3KHFwdLDwAg5kccrNDv6KNJSzgWpakuQZr58bCaHwH51oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47DJDsN7N7fUVLnwx2F7FqsuwpAGJA5htWvX8zQrzUWPQzCkg78tbU6EFPEZoAU73THKjqfR8fK9AcCGKYGaJqMF",
  "key1": "2SjU9egbsVRi7Bw8u1VVxv8haTPmrQx9JYshppT2XrkCKMsYbMcnQvBczMsFzmXZi1XS9tCC3ELpaxoF2yt3vNRh",
  "key2": "5x7DLpVbW8MEf7xQ6Ya5f2F658AJskfUg5u5YfJ46ust6N7fZFf5okLUJF79LDynBCGiCvLLhdFVtU94uXT7DyYc",
  "key3": "3yEXVuZ6xkYqf81zB4YT6HJya21qjoaF9VY8jkuebFyn1e1vx6nUcAKy1QRSStLRAg3PUkB1pmzhw2nji1FFtYCW",
  "key4": "2HA7fbSSQbGTUfec3cJfPeWmHmHhHtRNpHD9aqK379KSTqgBibdetB5pm5BXgVXyXfEQ6HCoz5svLH65fCcQXyTx",
  "key5": "4d1DEAT69yJDCArVmMc9GnhVFL5bQngSjMjbipj9Tg3XqxaiC6PhXPAtgZ3qLJ5HjfxAPbPXLvbwzeVB6Y6oGEiF",
  "key6": "3MTT35qKJYrHdnsRmcwYL1ojakaftij73GpBuEdbuFQaLdF1wQuHqMqyaridzNoqwmJjTuQujkct9AtCMfgPVBGP",
  "key7": "4UK4DuWsk5Uk7GbrkWHw8ineW472GdY6MjaDiv7DfVnypwBgn4huH8QWFkMFM8AozSFsTTa84PLwHPCeswk5At5d",
  "key8": "4nLzif5EZw15AvxWrQ2EWV6qEeEAFkAcXvs97YkYMv1dYrTaL8jEXaxNi2Pn4oSF9PYD1fthupLFoEYMmEDSBnV",
  "key9": "3aMc5D4TFzbFS4XUFmMA4UX9TVexFSg838ckLy43iLAC5rZr7DKKe3gpmX12HwWoKFCZw8soRW5kZqFJpVSuaBHb",
  "key10": "MktLXKJsTJmx4GHtGTVfaSuTfcp3gSaCtm9VmnHXCVYrRRS8jKrbbCMLKSxUBGbt6xAdAqm9vkEkGEzWJ6opYw8",
  "key11": "2RW12Su8Bc5sjs91p8W76EhJB2EDh67wSQTFQ9hh2A6HjDwswBBMX2k42buxPPiCDELoXwLBJq9kqgY3PPjzDzs9",
  "key12": "63feY2A4sygJjXQQhTiSxkm4MWqsEr2x3A2iNeYUhukiXXiUPPWp3SqFZhMf7KZ42yetyAmpvXTZ37akdV7LkhFQ",
  "key13": "tMUsxSVAtHivTubuoHSqFuwfofLaNb3r9YurYXsgM6b9UxqyCyRWsUJ1PQSfvzK87Zz9Px9ykcLxnGtmj3qe56r",
  "key14": "jgUhuj7qqfc1xbxNnP6pB4XyCryt4Agh2ANkjr76BbqkWcCLi1eZcetVrboCVSGQBvxD2yk4jNcWv5WUCEfFZAL",
  "key15": "2bjTtiVHsTTCmqBFgp88Dsv3tYNF4A24iJvvEdcR5YhXm5WGnbEiRyMWuNTvuAMh5nwuwfESagwF2BdRZRhbYWcy",
  "key16": "4uHWsk8ex9Yj2Mxk4Fm8A6TewjLinkMohC8RxYtDej5jvQfXmA8i987BD567kbBUfTJ1LVeg3z4xaqEPUAgGiY18",
  "key17": "xKigMgZy3rKhKb6Se3TtPHrLXdWswrEmhcxjpjcTbqMqQDqFjkj9k1FRkSuMpBMavCbXwv8PEwdHq3fxq7bWuhp",
  "key18": "3Ede5pp6otk4F45zEENdBRRAGHhjnhLs7oW556gVdbBq15VBjmftW79vx1HFqV9P1jrJzQCifJB2xkTFy5tfH8Du",
  "key19": "G1woiSrF1yRvMoxcK1gPUqEaJhzxYQabkwJ17QHGkTQmgnKMpmUrMerQzGhAGCky4XvM2iw5gDfgKi6unMednxa",
  "key20": "4uFYFKS3wLEwvXR98voMTXwYAwH9DXMWAT7QDBC7oxz2irc6rzGjfcypZXUNkN7cXwWoB6VuSqpRwEz9miCYQu8t",
  "key21": "4VaugkWDMR9VN4pwXuuUg5a6bWN3Eq1JPhAypoKdXDbJDAjTvt6e6PDRBXp31tzTE7QkTSYSG7NrbVYknZu3cjZT",
  "key22": "EKorvCFWxYGejjMMf4hbDp7tzNXeECGnQZ2tus6V14HRkkTApsVyqbUZhkLc9D3oB9ApSM5MC1qk2kosYZ8jRsS",
  "key23": "345oyQ3ct5FcecdA818ACjqnhnzLjxpomwyJcEag2C9r3iQ2KdPUTeZeUhzavaHeQpCB8VgVVZ13qtJZSSjXd5vU",
  "key24": "2Ppu2SKx3wM6oqWqycVHsaRkSTWXiHriFkkuHsCL7rt1szUqb5aJ5S1sdjCsqiZgAyVZBpsNYtqKHGPTLsp4fZdx",
  "key25": "2ZTy75EFoXYJzwT5PBDZdYif3pw2pckLDb8NAcV4vRpoDAbvFFrYKXQsHztzPX41vnCjxxjJu5fDBdkzKsJuhvNQ",
  "key26": "4R5ESjV7CBqXeiRzqNT7WCqmY1fcgQ5xxdFF7B7B9GmwvZUa8fbNke7e4naA2MbTTNS65umNPfyedcE2PHF6wg3v"
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
