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
    "3uk6jFZwnSBbfvGz3AYk2d8WkmXPaE45uUXhmD42HiffC4rJnPcBoEp3DzG4jhYHJnjRTVhCcUMuVPLaPS2F1yKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bN2e5NryvhycigraSMrSN7BVwiEmjcoN8PFY1nCZtjFP7WrZAo7NS36rmhTrMFetx7vtBoYXLXeDbUDok9JXh3b",
  "key1": "61AXncdp2zeg66Pbwc3suLtpyMkRJW8G1vMStsSaQqgdiJzhJrL4iSYUY21qJ62doDzYzijnR1zP8yuvmLovVuEN",
  "key2": "SxCCMgi1fvQtHjYK99srdBnYo5PBfJxZeoG4quVSt7bvF8ywPGiv2gaxxNDz6XR5TwUR1qnYAcNuuzm1gbx215o",
  "key3": "4qacauEWzDxXSWvu6mReao19at7v3KRqyZSqRkqbbqgcwgGMgKtiCEbaHcHnurt2X4mCkwy5xtbnkgzxhzwPPHeS",
  "key4": "2atzxZPor1fj5yrQRm9XYpdATdnYKi8j5kBVCZEteKwdvU8YyQkVWJcJo6BGCn77C1ZrbTH4eHBNev85eLYQZkYe",
  "key5": "29Kw1ENtpGdGCrE8JG1DV9Smp72zDa6tvYgxPPUL3Uz7DWyQwNocPjF6yXtmK1pjyTSDrXSRzsCxLpviNbCmNUr5",
  "key6": "4sm213CQrq31bjULu2f51qaMdqSirP5EyM3o3s2V978K7NZyJjMggKhsYoSBYz3Ho2BLPzXAVdfgkfZYGKgeCzgk",
  "key7": "3Zxq9YcZweR8krvX25yALR9HNjpph4BQkrrh1JEo36Zj2DfTjRGbEYcKwBCLqiykBA1vXr5YdhFb5aQ63dyBZCko",
  "key8": "2CYcqKmmwtPrdikEKgypAPE9toERsEkCr7uny2MkYMmQPqNZh6EegAHvewrfud5tRtahTgbvf4RU8tcwjxUh6JB6",
  "key9": "pCVYcufHTLig9nBLw6kR4RiMD1eHZS9EqTgP6m2sGcvqwgqLqFswGPk2CezEmfVJp8wWkxVktra82Jzss51Q7vF",
  "key10": "4oThHV3FMyJm99NNVuQr3xySQPkY6EXjqBEBC4H1C2pvuoiehHqvahZwoAQuBGunzg3RLiGYv3odJfsbnF8nmtbR",
  "key11": "5BqzQvkvZTDTRoczAMZwYXCeppdHxggTLD5zz7J4yiNTbi7EuHdp2n2KBdrpZR7DNNR6YNu6PBw6FEWhzThYLEVX",
  "key12": "4EfmEeNbEsAtY3dq3P3Lx8vCBtJnWjxxTZmEAfF7YNMdw8JNNHM3Ue5dLKBMUfr1d2qgKjkdsFkh9uPbUBt8EaTY",
  "key13": "P8uLxwcp3DjcTpzzMd1kAxiyypnAbwejUqfTfokxmEAyZf1QFuNeeoVo13pizq1Ri9itPh7jLTBtVdjs2Vmxy3u",
  "key14": "3U74saSaUW6A6dMb1CrD4dxRRBFZUpR9hcFhrSsmxef1T6FFbgwvgUDq1frDLvKCcGmacZB3AcBZ7fTNTvgZCsLb",
  "key15": "2v5ZAAZqadUKUND4pLgACZJrXq6bfxTAaZqF7XeswcfWPXFhH2VekwcEvqKuN7Nt4r8RhzrrTyGixaLb4Bwfejhu",
  "key16": "4Q3eyNM2MmfdmEfJ9j2B7vaVegLQzwT7eVVx2CADTtuivd42pKpcg7yspqi1HELoaCcbNL8Vo7x8msEpdpp5K7g",
  "key17": "5CMVkTfwM2LsHgtzC51Lrp7oXJEZYH69oRKyFCzTwDnCZvt6Ziw9VkWYVBroEXgR5GpeMJqgsPRfYkSh4Xu6HRx9",
  "key18": "4iyiWv6RY8nicsBM67kEB5aKVZQjDinWJLGMR49YjWyTBYBwAeMshjm8E4Nat8JJNUumSCR4c7tycqwgFVTBPpkc",
  "key19": "5mZ4e6KTqLGCPQntDHh3VYP7tMekc1tpJTA9o4Pe3xoGdRgKFGb19iRZ7eYDHPVaS1pzZLfNandke5XTCHzyMsDR",
  "key20": "31jZ6KL8J7ihB4HNfJV6ytg8m9geCNNaN8LTzbN2NsgXd3iVnb7oz3ZKDAyPZw5AAh9VN7VRF4HjYdUsvk6QqXYc",
  "key21": "3agD25RhJdbfp81QGWoz1zvmNf7TwnPWHaWZc5KHh2A6PEGqua3sCi8WnxejHvpBuEwcfDpvNdQZgb5W4qDuFR52",
  "key22": "2yyngZK9teNuLtvgRdrmBvkvcptgo5DZAZqRqwBoPDvqX1ALmXUUT6PvGh9eXKS2MG6J6K4Bm3o6ogGYrcTeRVsX",
  "key23": "mcg3mU5JTRKgCD7kg4oYj62jPpMN2ZarjqtdbfpqGcjg32ASf2BQaKZ9n6mRk4yiLP7okj7CL33JEDfZFzVcgrR",
  "key24": "64ws3dLdQfsC7V1scUpf6xVYy4ovftPLFcxbm9r4iNFpzyx5LYLt8iakLBwjcbaRnZnUsCcTXoe7FHKa1WboBkEW",
  "key25": "2vUvgu9q4AL6cVvKiKZraaKqSKaDZPLUJqUm7eZTwgSqS5up92aAR6vC1YU6BRiuF6d8hemuyw6s554kPYf1wwxE",
  "key26": "2XSA98rUrk2tcJHQ86pkeWCUQB26Ac1MCQK5ShdbUSsGVUUcTd6wwHoFmukU5T2hxYuyRu2tJubyEYUvRviMpnFP",
  "key27": "2FRJKk7zXqmb6PVfJa6NjG8VzJewKEkoaqh38FDHzoovuNzkzZypSKsRqk3ksqANPgN2KNdMVadLXBBZaA7Wjtvr",
  "key28": "5n6BwopyzUHW45jZtXivdCqPJC3G7KDhiWNFGpK1cLhU4JfP5qbcL7nF6uhUQxs26uUhmiT1paGhmX2LUbL3e5sr",
  "key29": "3bq4aNpZYDcPaGs4wR5LboKAzvYDQTJpmxjnTrctkRNNTWp6dCTSrs8FTv8Q1z1bDnfWiaooAYWjwvPSFzt2pEuw",
  "key30": "4BaQy5NTsrTgj8hE43noxcVNp2XKcaEBEDvMxPN6Zmg3AmmkJcTHiQaA6LbaKSZagFSnqAEoAL4zwR9XGTtGf637",
  "key31": "2hX9qdZdDnfm8AdXcCjJnU6GGZ2HRU9pnDcuZyTYmV5eyjYWrVfLW11fuWnMqiAA6pNMgvpfStqGJH12WkKDVvdX",
  "key32": "2vA9tNfoWD4zH1tmreoMGM9SUYkvaTBAKNg43ApZCVxrPE319cYjktgGi7YhA9gc4Pfkti2zj8VDkjkRp4YispeS",
  "key33": "4hrYumDwnxGEbJ371iEXKxHfiJW9Acnf5d5PN3LBoL5Av2HnezQoMQZYbdjk2uEFnoywoXh86R5ij334Kc1gReCn",
  "key34": "59L7u1vWtaZRmupmFr4zan2xBWsPKXu3LdDnX3o5Kq71gEUA4UMEEP4UEuF4PKZJYJQfFcoyuK3Z94BQeG8ywWL6",
  "key35": "3YSNXUKeFsxJkbaU25ZpsmXs9uzXzB2FhrVreHhjcqxxbqRfbnPSNAY1aa8KNCsYuG6metb217ogVMEqV6Cu5wFw",
  "key36": "3TiKwP2EJjD1e4UDnhSKrCiieUNCjBvxANfEwoZXSxGqmghHVcLmKiyCr38Dknjyb8vbBRUw4cLTANERWDgKeGAj",
  "key37": "4nyYcjGfC4BR1ZFEDi1sUJs9BH258rxKMyTTPviVuitDdCM7tcvCsoQKUcYcLTNggqNkBw93mEhadQGG5xXCpR5A"
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
