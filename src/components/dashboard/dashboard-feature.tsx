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
    "5mWYZEp2w9GUJk5DfUwXiJ4ipAG4D6i43BoY6mh5LCCBvaa1nMayWZyBh8oLLPBRgcGxjTJymCiqJktcqPAhwUrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJrib8sMozzTRhBuxP9gZWpusGoB18V3SnrTVN8LnUqhE54RJLC95xRPD4LRA19KKt3Q2mrDknRqRok2bhwq6pM",
  "key1": "3LfusVSyJYh1C9ryzWrfeT4gfic3nxESh12k5yXxwL7HbDMRwq3gp4eq1udKfPJKVPNed7hoNwurdFht1xQ9634F",
  "key2": "2BxcmCUy9Vy3ri51sQBkSHLPYDf4a8GbGd3HQW5d3vHmAnGsxem67WEJgeUMg5rHGAjVaGodtHazJUS7RUgRFpPW",
  "key3": "5mGBpASeJp167yp9qQZ4SwRbb9wbynXzTXbbnyoMxgFmEsFuhw4GAyJbaXvkBeRW19fAXUekBAg5RHFgFqL8QKU",
  "key4": "5LrZzxHUAWcLkUu34waCL49r4puLnVpB15sRq1tcoxCaKjLESyaPoAX9NwM6SoLaVS6TSUBCJfurhcBrquYhoxnB",
  "key5": "2DxPMNY57czziuGfDgaXADPvBKssgGotbphdf7urjCQKT8Q1BHBJ7XpdgSYZtnJjWYZmFLjcMP7ymQnV9YrwCRpJ",
  "key6": "PS55KQBjSdLtbC2qL6wQ3tEuS2Bm4GYsAjxxi25AaduKa2cTeHF79RSn1rfZf4o7G3x4p4Yh1FyyEXrWy5XzeC3",
  "key7": "3kBMhAwdZXpTxFx3XsnDnskJ1suLhfp1ehp9ju5R4KwXSsZCpseeYDyLHrnX7nbXj2tX8YDvjgbngRCpTh6vKGNj",
  "key8": "W729bDC7hzVd9AfU1GSp5xtHSqM7ywLJbPPGMSPvd9vHH1ucrsGJroasem5iqDme9pocnd9Wj9erZVjxbPoRBnM",
  "key9": "5oFW2crQjsZVWP9ww5LvfK6juuDPFaHdgNVCiUDt1asHrhWk5fwWCbcgjvFGAdeyehvEj2KYZbXJW5eNsqKVdufr",
  "key10": "33fProXnQQ9VCb8qrYWfw6zBzErsXheb2d5BJJ2riHW3H8NBCW8AaFCFnfbYLrQQCKpdnn5dmY3cmoB8ZZgabV5m",
  "key11": "3F89N1CZFb2HAStLWYjyiJ5Z5excgQbWTotSq8JAr198YNVPyQ5qwfJgAbPGgvUu7qyzDz78kYb9BVGytbbL1foZ",
  "key12": "5rMEvVK1swEhRF6VhpVcWxYhrce9ZtddrbeXYQCD6PttgBAkXWWzK17fAGtqjr3Sk2z72EnngPN56Cyr6kmv3CAS",
  "key13": "tz2cPJrxibfkS7zDf6V73Bu5vrAuVWh2f8GeU3VLTvwjYVGh7oPfPUD2LtMQQN387DfxHCkvAAreWfa8TzXg6Dn",
  "key14": "45knf1pgDD8twejnpkRGAjcxxR45bHEU6qUpiUjCTLeBrUvvYbESRMJY7GykXoEnrS9dob3Lv1UyzQwj6svMQyDh",
  "key15": "5nvUY15Cd88ihmYtgZ6978k3eeMiyUzb3s6hpJCNhHdcURzvcc6zyz9jxcU4n1hRrqEeQtr5XHuf1uHWYfWwiMEn",
  "key16": "2dm9hAaaHFhQ8z2K9UveDCNp9XbGkhacZJFVSpLnneSNHWUrQE1tJYxfwPatuQ3jY79mTaysxDVKJviGDzUBhxKg",
  "key17": "5eZ1pfMwwoyxXDLJuxw8afqYsAXSVRjfxrpnHTXfYjUCTdhULXXA7Gk2Mue7y731RrkY7vn7H1xWbUVF48hFjAKg",
  "key18": "4K1EvXFjc2XPxfKbJtMminfS9xJHJji4RJ7kKgisYXhyvDfaBtpZeKonpcEg55Qgjn9Gp4HSoZ8SEZGTFjL7zeBQ",
  "key19": "5hAqQgQ686AnGgqPoz6fHtvETf2uKGZrsCkcNJDPwx95HFQ2erFZCRCA8fgNjhvX6w6fN92wv4AExwKNrVgMoYVp",
  "key20": "3BRjHZpot1y5voW4sXhWbeuDugTeUuHhk2uxLenoGwoV9ZUwPuYh41rFAD1WYPmV5Y3F15Af6j4ZoZRbmdBsAjwq",
  "key21": "PvEn7jN4wiGnLxpKU8ujVCNjVqxBVsaQhAys59BT3Epm5rrpSrzzEaz2Bj1fJUjavybifhTKca7sa9a4urq4nQK",
  "key22": "2hgDa9bnyXcj6JB7LJXQAR5FUYX5a61hzrphCU45U6RbMsErdJFQGY21AogyKnjXayyWTvey11hDXt2AgkyaVSRe",
  "key23": "3Px7veQaUSqpYZZPBGRHeHxUWqCjYDpSBnaagJ7hZfyRX7cw6su37E2DnLuPkmzDWX9X2VPjjLHTJpiFd3Q9HUbd",
  "key24": "3uAH6Rntm3NFFXvmTYKi4b9fPpTAAcLs5xAwPWGLnkreHp5CMCXUmUoqmZRHS4hUZ3CSjW32YTiigCsMTHLiWv1G",
  "key25": "M8rHmsAc952a1Ny7pVerCRkQth8zpVNFoZUFL1SePZeM9eRa74BRQDpfMCtASutMTJkhmocYCcGTqgnBeg6Nvvd",
  "key26": "5RLixMpCmGFDdu7VevY7uGFhWK8udwgXbojnfmg796FoELcfZEoWk8ofZLFjeFLw9vzHRzxQRNq6Exe6EYqiggD3",
  "key27": "3qxScHkVwEPmcQ7opMNeTCuDW5Nkx7kAj1XNYicSQNmWJjyRAGunZkDXWbqANjWBNdjWrPB8RHzTHeYAspZr6mt2",
  "key28": "31cqDkrKrr2rqVdTgeXtk6bTWDEfkB6nLf5Qoet8bxaeqqJGT5BU39gkagf7ryjXvm8fVC79ngmiXRUNvRiyKKQ5",
  "key29": "H6PAGxdoJuEpyYEBupkQuVowbnwiYrYtJ42ERH6vQ5AieHaNq7xoqE91PrVR7NhPZL92GHhTDAW6VLnoUqELLoo",
  "key30": "44era1aU62YDfxo3X3T2ESygxZpE4wRP7B66Ggx8U5W357kZJdTzs3tsx5r6EnMkyHQHBMmNjxxzUE2TDP1JjseA",
  "key31": "2wJ2mPdvgYB8kfYAiTAbcmxFmBSeRGyREGKvhMKkK9RUwY1QEyXrq5B6pmJeh3PMqeuy42Ft7Te6kxeRqtEVGNTV",
  "key32": "5PZBVum3HuAY2X6iTxDnZD6Qgo2wKbTHrsZigdm27SR5EtSH7C9yUJ8kgu9RfKqFKxhiBw2ChLaxYTakKwrsozoV",
  "key33": "ZsaHPLMiDkh87m5r2hdtf5mc9eEdJVm95upjdVSAKY1y9ZJQ5mAZaFxq6bUxjrBCigrmnYJSaEkbYQLwdD7vZrr",
  "key34": "3hX8CKsGZVfxJNwqpuNPQpekQHuTaFtQD8Z2crNFziGU3xyTk8jXLE8uWx9zZrZiCS4UKyWZQnWRxJNVbxSmdQK4",
  "key35": "3tCaEWyKVU6vUAwKJ8f13WbXrHXmwBVzRSDNizzuaNPG8Ya5RpwgLeWzKWQPQv351NZT5G9afKPPBmtAw3WP75kb",
  "key36": "2eD8BB7fRr3poM54NU2rBvEQAkAuRkpN5V8EzwN5QPQUdSxyukibccqbkqrTxzSFKsrRdttHWv5x1GJv5dGkyo7j"
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
