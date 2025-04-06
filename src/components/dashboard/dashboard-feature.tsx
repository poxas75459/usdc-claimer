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
    "5SAasgXBPJGV2LHN8he7Yb4VodnMkPA3hp7gRVWwk3VW87o4YqkGrBHeV7SPxbGyRznYYMzPddxKC79yBAVdcW4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zm4QFNgqJzZoebbTHLAMVQz1fWM1rkhaqvpVQZrMZ1phbqHrrzvEB2XpmbbSFj3vqanAqFR4if8VERUCysvrX2A",
  "key1": "51f99GXb6hHWScpsRGouXMVEm3uQPwocz4ACqByt1hw5HhK4tPwZCzqPc3nX27tZhwnvSrzvdrnhwvcBv9FgWWtZ",
  "key2": "Bk56ugzAqMrb75cqS1kHnherWWe32YiwSNgitc56aZH7QJVrTVRQRQKdeEwnB6C9XaJKNxRpMvB8LcUCXzaeeyG",
  "key3": "44AMMQsJzn9NQqCTzw3kqNhPDjuR7pa6vSxbAwULgobbz5GM36Zh2Bhtw5kdk7zQSQzuX7GdkRLDu5A4QomgHsyb",
  "key4": "2P5ck5XV7pNP4GF5fhDzCz9h272Lf6SQ7mqVS4vUtFZ9L8zzAkRGCZxxZyz5spZfobnqSC5NXAc4grgh2x4GxSAn",
  "key5": "2fGN2JWSFWEe4dM9qLE1nqQJeBcWipkAhnoR4LpD9AUuApcCrccEgpZ2gtfTHhXcGLWqFZKMBRc5nwW3rmay3YTp",
  "key6": "5XKYQyUQiZKwEiyb2eTdh37i6WMVetwLeZckdToZBq5kn1z91VprR9s5tCEfgnNxCuAfo4mxKRNaW8cz8Ef7U9Zx",
  "key7": "2nEHXZsBhoZem4f37nKaUxcPoKNV8kBJSz7N7MvrdKLrEutP7Ut2D727EXAica7omCAEYXxd5UtzXfpXzc1iZVsg",
  "key8": "4u49U8fCYfBrwEmhSsfCye224AKhpueAWhiXZnVK23q3pg9YNgPEgP26wgbAwFrJyNLsW8jyBaVhZiDBkpRieQWP",
  "key9": "5CGQovKZ6ZVYkgT2G3qC5XpWBy8JZWs6L1AXgJMHT6h5Ca9ABLHzCfSdzcC2qN9ii8jzf3HY3XH6epJiNMaumUeW",
  "key10": "2qnvEo8s6CyGjQ3QFz5T8ptzNeeR4dhRC6W88Sv6K7B4ctNoEj6kUG8u1pfqjUJmqxSRnYu7sKQKcQZX9cEBJsPe",
  "key11": "5pp3an5ruaZdEoXsr2wQj5ZioT9UVeacGdAdSqiAsmLfEzDMGvrw8jyj7EyKHhsi7royTMW4GYRoogyn5tJT1aCj",
  "key12": "2ypBNabky3vzfoFAq6QjMDPZY9iaEkk4A5TkKUzJqdB8iq9MEhH6hjb2jmNB3UWpbDgeVjbsdauuyTY5DZbvoKRQ",
  "key13": "tDJcAqruJAxpw1aYhaAdD14TNkkCib9z2q9QUV3WJikqehtm9AsgHqazrGvw6R2w6HrPL4PeKjaDpuuBMg1suSB",
  "key14": "RBGWqDuQXR7cpnaQa2VoWQtiK8oaaDa8FtNLu3rCwh7PY29nvdFvV4W4AzyKmrGj6uG4VfyT43TJDTf45yuE3Ad",
  "key15": "2aaf7iZk5p9NeMkNRbiqPChrJVgHzQYhzgENMPtywui4Fy2wwE2FMX8cXfLYhuySy4yRUtJUJrw4sXA2zELrvCW4",
  "key16": "5Zdj3emZRvdcXXmTfSvb2awEq8ioMwHUJJR8a1uS94H15iZfX5fmA8VvP43GuGCnMzJs7XLvR5yJTBSsf4cq2bih",
  "key17": "5JRh3ChCXCSNv6EajPytsVL7ThomBwSnQ2zpzMaSdHVNGq4vSiWmtQQZ7AUH7GtJXCnZhAz35o5XdNM37MZXpuxL",
  "key18": "5AtAns2q4rEH19TGcwyyUxinfhZFjXWXzxaspvAAQv6AaGzEEuMZMDKiEBswjduto4GhFyg8FZUB9aTFj9WGHGXu",
  "key19": "39B6XFW7vfWSYp44naNhKwcFHRe5hTgqQxiDFCKnZnSFYCfgydkRUzxuF14u3Y9WShHPv4FmrJKtZx5onn9jDsFp",
  "key20": "3adVKC4Aq342VE2dEdFCqj3ovzbbns4HkFruvNzFh6GGqzpqhwnfDLuSpQAdFFwKqe4yZxqEdyn9YwNRGivMPqop",
  "key21": "3SahEJNG63Qz3kLWyrxW4Fg67pZUTA1MxpaZFJ1gfL9CJBhrfmAFFNiWyTtYXHoMehA5ibD9VWxCKh8yjZji5d6c",
  "key22": "LyYMqRjiANo7S6kC9vWinjEk96aimrjWLqZM2azs11BHK2Kpcf1WoqHi95ZhbEeLeJgxU85GwvN2DDdrugdQqPK",
  "key23": "3aBkTbTT6gZtqcmv5T2tc3vCRGRnmetrLuas4umBhfaQkAHddVk9nZcX86GSsPVNoU3ZkdpD8hveCdFXMKYhZ1mz",
  "key24": "3U3GzTwwmBb3R9rtq1zYtrmY78eg9UnXByU7TCabr3ziFLZsNEjEGeENJLa6qqEGe4VY3GCJN1NpQvMBqssxw76e",
  "key25": "2oEzHrtMSx48nFDBpthc71QXQEdUbizgqzYMkBiTPQxPkDxUxdrapgTnnS9wD3vqKrg677adk4w2jobTy2zs28sB",
  "key26": "366kUBxP8g6GVtxmkpQQGZ6yAYJmxqaNTEsBFvLg2eGgQt2QK3GCxZfehxcsjt6LBfH2fTq4gAK6YQi4ZtVKpye1"
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
