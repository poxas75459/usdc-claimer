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
    "3Vbt5B5mxiDio6923qQo7JZbt4pDAgUeXuiXd2bTPmcVdjW173LNaL1hChg1otMWaG6DNjfRgiMt2DsvLJpBg5LP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mwyGCFMffEV4b8TUT84chbvXGF1bgL7SxR3fCeSjqcY4dy5QdsExcdVKYNqZwiayWtZh8Doazra2oXmDvbpfnws",
  "key1": "4yApEGWiwB3JPjvf3uA7DdpVvtnTvZZXRW8dp6847GDXXURPLw83hFrBZ8Zo5U9jSZV5XenuPtzDHy7M6cw1nTMG",
  "key2": "DuhW3XzQdgmKs2YuAoEUGfxHoRgXDyQmSyeXCWAyyhUpLhPvdXtsJTjexLdVg3SA2S39JcDfWGgyyyjqtcRbRZ2",
  "key3": "3Gy47or7VFS7GDP5Ci13KW4j51qN8FwMsip6RvPvnZhA1eWM27wYptDURiKeU3kh37amdFpRFMXYCc2DAm3UwfHW",
  "key4": "4iHuaxerV5guHbL2XfV1st3YD57fT39m85tiX2U9tWo6sZXdBY312h4Sf8iWKBpLdG3PAjRJ43NVFNohAf9Rok3k",
  "key5": "4u7a6gSj1dvGm8fFYKXVLSWXD5iTWgwoS6BZgcY2aqTXwidBHiHdZRL9Ay22evfExsZUTJutKvA3qCSDW6GcUjqB",
  "key6": "ra573Ct6ptkBs1ZnyKErRcuwfyXAZrLWdQT3DxPKJLPWW66wSGwRaoW4XEa9hyCAyT6UPaR3PksQCL4qaMw83s7",
  "key7": "2APd5ubnf3StxgUMsCS5HjHaJQhtqJFVfVQx4JL6nmHEPdLTB4Q4ZUXF2fBgizGcwyEt456novMbGZeWCEwMN41",
  "key8": "3foS6C9ZvLo9UF39ZRNPCGa6eD1EQK43eAdXHLC1w1fBu7arwMvzP99Vh59YhEEJzKGWutqigA41URtUryQJJxfp",
  "key9": "Ng3HKJwPTkVpPC8h3WpPJR65CYhwHTLArSRYvCpwNfa96FhhTVTFQwvkrZPzsRpqy5PdJoEXZxF3k3TQ26fPzZF",
  "key10": "2SK4hA9NTBXzXspr13D1HxfhjPvJZ2cwuspahFX5rvd79SR7wbMsrggcQKRsdwYZbyjUKGc7g6G59e8aDsrRC6vq",
  "key11": "s2GPro5GVhvpKWaRnuT9jepp1epTUPfGRGTHzar7Ks7aYAGVwmHtQEmyFhy4vNjzyT198Z5kSDRTKt8KxU9tWUg",
  "key12": "5s5u28zeePcVBUKN9PcT4h4AEaZz2zy21te233mUW1e3DRGyosjUS8ook5WSdMMQANKSb8ihSkFTVwcffzjCCNd7",
  "key13": "2k1GMTHgNGZfXCfuTuxv9Czoxz5mvFfffZmBFU65XX1JP5BBsb3uKvGdNXVDv6ANhvMxtQomjGF8GhjEvPnWzuRU",
  "key14": "4EMLKNY9Y8n8sVvTzbyXvUccpUsAo8dvq8QJMmEa7iY3DbVjuSq6pQqF2vda7Tr8Y9AuD9PxPbhe4v5sLmUTShr2",
  "key15": "3G319kAD9F6bDrdMdYwZLWsoxa76d7ckuojVmpyBgLFhXFGYbS3X7XCdrHmU64rS5ccjZtvUd4wx2FY79aw7nXe4",
  "key16": "3VCgwThy7HD2foyX1x7AAshNM65vXah1NDMQk3jzP2XZLvSkYeYPt6uvRWJWiffh1sqNayiy8RLjaqbFny1PQreY",
  "key17": "3USQuxbsfgdCUtV9LDstrg8x7ZiCxbge8GS7asVfTDUbeNU2D3UbPJMMRMYUmmdm1nzQ5uZw33osDa1cyMdyiGBi",
  "key18": "3Vh1rvnCS6YoDmQXGsEQ6AXu9ypBrY1xFJAUhmPBVYTmNEPWSdaBBPSGREcBHfQnaEniQuSe4yWxTaHkDAdzam2T",
  "key19": "5qnwgbpwFg2pFGZW9zwLPyxhBas62ffLL7tJg63P8YecccCWyCU3T3nWRKTnbMcvp4JNLnV3oZMugBr12jvgdvoo",
  "key20": "5AnDzkdREP8PQseLRqRopHEkP8PKyy6K9PBDm2b7zUx8kC75YgGgPxNXU4GgFfbFCgqPxh4pmHXNArpF5Zzg5jzX",
  "key21": "rnKvRYDvSEoyAMeQrz68qdwNy9XmWustysKqmXfBYEWveJ3apbyE2V7M64EFPEWVBJXwEjhDzG5mpAhZVKZcQwa",
  "key22": "5GsppTn2gofJLtwURUqGepWto18Uh77mENb4U1LaS6V4NRjuis3QfxXH4xZyLPejFGzkLARfkxuywYkPwrSYr8r3",
  "key23": "VTNh3nze461aCjgqGoAiBWpnfBrF8xtzHcHpCr3fwT8GmEixmb9VqQ4HPAswxawiAR45Z4ZoJmsCwCqJUB7W8ge",
  "key24": "2C11uf8BCpEVTJTwXZ7szgpzktnMhDTKYaxekAaruFpkvbyjY1RTNxmvkrZg5LJVeqEhPKnzKt5GYBXuoZghA4PQ",
  "key25": "2gWYdEYmhczgzxWt1weTeCv7b7p6dro8SMUd5y2oTnwtz4mM7sB1aJ4qpPm92Rst12r9iSF1dWdD11yEdeDsh3Nw",
  "key26": "qroHBm5zHFFbSdqYKxQanKqgvwuAQ5kDyraah73YS618n1tgUWqKiU7KXBaHu5fDXNbhZrPAdSrparkv9gLzrm9",
  "key27": "3cqo5gCUzUKYrLDjdSWK8WLWXnyoDyXP8hVfSEm5G5opeWnsjuhSrs84j19TbvWgJQ9KfVdDhqXyG7SyNuDf3HxL",
  "key28": "4JGc4gVPb6d6p744B88uQGXbw919S8XVwSvQXce6Be5hY6M57hseqzHrbXG6ABtQrjr2LRG7LtPAXopxGYvYZKML",
  "key29": "5jkRZ6CbBPrkPq9C6ENP4HfLGqRKvbJ8FcDxnhoKcCDfBeq9YzJGEBs5wh4R4V3wgWGARDf4WQmrUJCsoMDKhTYr",
  "key30": "5j3tFr4fzP4361xJ9arHT1KFWoQVV2RReaMW8zCjFxeKLcenmTgb6tp7PLoaM6vRN9fPpCKaqzHCjEwHw7vVVW1c"
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
