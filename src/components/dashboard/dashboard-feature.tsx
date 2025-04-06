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
    "5bT6sivRRAZWUewonFhtRBkDV7q6gfsavZBkHtvQGcezfJ66ukzxKXnch6YKPqEeZutYMjMNP9csa9ub4w6WnMm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YJmAmcykJFTZUkdZXNAB5K16CFkBLVJ4o1xdUuR59j825DZosRKhLsMiqwzcrjkhXxx4dUmnAKe7uV6UPuS6Xuw",
  "key1": "63QgR5k72ceAvFoXc7MgeYW9jm1PiFjvZ7sMGKbAKWUtTvsTWXmBqHB9Esrxf34pGnBq9Spi6zkfGm4PLQUrV7CH",
  "key2": "PUaosNYuFAyokY94aoQNP8ig5JRakR35Yap8HehTPupLSc4Yke6iJ2YNfyph3HcKCX8quwQPriZJnSV76VhT5zo",
  "key3": "4shTJYLZp4kcUjHfjSfgVRA1zNLMhEigaf2YWcias35fKcnRohbuLMovfGC7qdzxazXFare8AbpcPRoinDcuWJL4",
  "key4": "519brWRms6rNWsBLGVC6fSZxfDA3UGNfEnpAw4UWEPdLEtmFTwujmh9BFJ5bQUn1NABF9XU18f7g4G5TvvbJaT82",
  "key5": "3KTStNPUR1dDN4TAxeBZJyKxgr54hEjjMzRFXnSFQTK89AWkW26RDhkSsspsVc9iQwgeddkbFRjg8PdiZhnabUXg",
  "key6": "zsfPwTj6QVXfRxGrtLhrx1kEzW2UNiMUaDfRFFHhwSZH1DfwxeVFzCbDSTsj8S16AjqXa81AYd35STujq2UxHDP",
  "key7": "5fT1n674oPwQgAgiZDf6DnC3FPnZo6RiMQApdrkFfjUYUpKLewG3CpTNCDrqqKc7GdyJ9M6yPqLQxLLMFUgG9SkK",
  "key8": "SF4smkA9spYPPTXwZ7DStSnHwA7hMA9GBXD1ZgQH2AsFjt5m1mHnPcwBs36TJ6bG7aeTwV65xuSbeCqNB2N7oRd",
  "key9": "2JTQnJdNKofHTGA5BWb9mwEa3Pi2AojA11jBg83xN4f72KW8hiBULHzH65xRAJKYjTvfrTeAm9qZn8xANqAN986s",
  "key10": "641Liqggd7KinsT8fYhsZUBeZ9viPFL4KLvaCKjqdF4Q9evhx4KzeyvBnRbDvgk9AhWnDGGnyDw4XeJuiaZ9v8P",
  "key11": "4Cqug1btR8oqAe6zvsdZ4uSKHXmA57SFkrXZxtM2WmXh8FoUCehivhGMgLwHZgZ5bt8Sw5Y4yP6D784mmQB3TEnz",
  "key12": "2EMcZoKGZXuyYgodmXJrqhxovWhfuQLQLsfGzcfF53QELW9YMfjnkhvrdg6QgVzTHtcKNxBXF2CD2J1Sy6z869hZ",
  "key13": "ZKpNp3r9izwMsaWj9irRzVnnRXHETbnDgCPB4KNTtTYmaGNJsSqmecR3dUreW1aK9KYMDd5Bn2o7z17vmD73sQR",
  "key14": "38cCRaejskLCnNkzFvzeQX9yxNHrMdTkU8rReuPBVHzJT4tuQHD4LQWDoqUwAtv2eLdFLLWMZCvMsyxPubmYmT7G",
  "key15": "3Tj1PaQK7uuuSCVDPp1rCwW2uFad2NotdrCgpWLdwT6Xqrn6vXEuBC1jpuxgShB2z5d6UyW2AZn2QgxWq2fk43cz",
  "key16": "cU5XxnxRHMGEadHfmTv2ARfhCaFy1xrnT6rt3rufTGSfihj2hwVQjsq7ygLX7A73NA4h11R7TQiiJpcbjN4jZmw",
  "key17": "3JyQuAtBisZ6yhCTsSkpqU3tbCs9jBHe2uVvXR4RCvaSRGxHVGCSRomVzYwoTi5ZVHgfMsrLPuLVmXJJTFLyDs1K",
  "key18": "ozp8WCN1f82D67f8FP9HBwACDZvb9cJBYQPWN8uJkz23Wc74XiMdZqoSG4L7TC2UAKXLYVsvYqRvppggKKXEfxh",
  "key19": "3Hy9harrARSxKc6zdUHmmSgbk4P3T3kjJrfsLMuCXigJYm6B4QLSabYskp1cesUWBtEUd9BWYyVfkSE8ALHcG2BR",
  "key20": "84Mq2vCyjQbJq73bxyYZuRYa5TKBg9FnabmYyyzL1XegU4Y763kN6g8keL8WFpNJi3khapU4cRvrnQFyTYZSB5C",
  "key21": "4a4fagvtAnYs1ueRdZyKNCjh4tUvSyxKGk54WxLmKPBWfrfj3kr5iAyBYQwvz4nqSMLzdj2LXkjQbeXBzGMVhZAE",
  "key22": "2UswQ3PhrJ62vkh8Y5tekYbKpRjGb4PuCRbcha5pue5ZxE4gcptYHfNAY1TMPapywcgpQGzAJeTagpnTZNN29mP5",
  "key23": "4yWyc8fWauuCj6aoG9j2J1BkFnmfm73MZES4eig2uNjARM8G4L44iEmtxyyHWS8WE82DKTM4sxHJ5tyftcqdtGcf",
  "key24": "kwxynT4VqJZaQcyoZ8q8hwKB6mE9qjnB2XGB77DsJNkdLcDZ2Z5upUdDa8PzYb8pe8NTan1kvjE7y5E6AbbA2im",
  "key25": "3HnjXskn4TFhfwghG4iEshykaKichJBoXCTiugyinwUJV9NGz5W42c3BWj8qs77xABTTdZsGmqFNL5A6dxKnndhe",
  "key26": "2oo4gheiAxV8nhvfjtVisuvviwcpP3qxFTKsNerLrvZGDwjFF1LvnKXGJyjEG8Y4wk3UocjYwbV8qD25GD96HK6w",
  "key27": "3o7y7cs6ZtYgZD1ngGSyiGPKh6d8BgEn9teFtk8oPUEa28WFL8jDc3NVqLYUn9HBuNt6esZdDmQLtPfMRtVVE3NB",
  "key28": "CTLd6KgqAmgCvaPMRQWT3HGrjN7oHouNpqf6iSvr8Cyi1UVeH9HC6HSergLER8RXrh9yxsuUDUAMXAdWY1vAsP5",
  "key29": "mBt7vnLJ2u9LMerkagtNwkxQqXUWoXhK5dT65vzHmnuR8uYzJDtdysrhgUZB7PGj1rYepWYzWrAEsGAPmTzpKCL",
  "key30": "5Cmp1YwrPsUR8SVSSJPYwA1nCUi312g79t7YceGDkHzSWhdbuW8TRCAv5WWXYrGxijkZjTMziQ6ZnQg52rj4yaED",
  "key31": "3QEqJ6bCaL5Sr7qkytJyeA7biDb69RvUWXoCorsnWP9VnJ4mNnmKihNcdvW4kt5PrpBk13YxjdRnr6jZM4gCF6FB",
  "key32": "66YabReSt4EGgezMuKCJQnc58rQxJrJFme4e9oTJ5UK787bBwGiYVHUGbfnzeCKfyg21a7PJmqHv2mC7AuXYhW1B",
  "key33": "5vRQzCWfVfxPZPHaxXoeoJv17mfbgknrh5mAC3JzDbZGgYokEkj2wEhoUxYkUuRmp3uEmtDXBF2c6Javyd64cxvF",
  "key34": "57AH5sXUAxG85wvzpauBntZXhz5wm1wgBWLaQiEDvNf4usFhG7JyMhy63c9dNpwZ3XqKnRVGVLVvaB7RLNWSZ2Y7",
  "key35": "2oDDRg1aDQFvT5DkWydhjdcuyveaDnwGLuDHk3nsPqNKUaXHLnFY9QokibigXPENPZjMhUBhCqveLXQuSiULXBZJ"
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
