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
    "5AZiwziEk7wAbWZByp2udNbjuXXuqtuGmADGsL3uMPedVNMNAkyhbc82gS3ueBfMCTaZtRoQrb2ATFsynLdeWU1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w76adNohwFJBMZkwxD5i3MGvKi3Np4RjWoyvySdsAD2tGts1eSHP58YwsYNZHa2UXVsrAt4GnLruGri9d2Pz54N",
  "key1": "4Rri9FasGNjM2CZmrgSjgGyp9cjxJcqYWkKiXde2zV5UVTVQZxfCTN6nzbr93pzhzuMN7XFVL4g2T8FXg2gj7nJz",
  "key2": "2VExGCesnr84twtCzi4Z8nHyu4FRVU3phvqbL3MCn4zpVLJ6jkjLpa3BHTaDLUH8uoohSCSt7Q5vPZcZyaH9gAsb",
  "key3": "uF3UN7ZxDZjVRkwrAsLtAyD6ZsJnewrpkcqvGEoJmfoyqH3Rbsef9S7MSNmqGrjxW7xje4ypF9K2NXK1kgP5A8S",
  "key4": "59DPr9h5mf4EgFocyiBQuXwnYp85ukLLERu1dnBD8zUyy6wXgK4MdK9vuX3HwJ14gt5gNfsQtBSWL71bhEW1BRT",
  "key5": "3v6Xmbkd4RGmYxxgTJivgAsnkqgw1CPgztpWtXUSGLewPwrCbPm2PiTpFNJwXPwijVDp7tJ3JbziC3nYfkHgAKwr",
  "key6": "5LcyRnqyjqUT8Xo9rLzxHnPvYcG6LN2QBSNzPuWn8h1pegEWXmGpKi1XmdSSCGtwQm7mD9hGrT9sGoXLf6WkKjT5",
  "key7": "2kg5NwYfNVgUwGVc7NmrMP4t1R7CtDnzG6RUc54UMZxocTR7mqZEBvkVEfmit4wUG7Q3Sd3LQGWn4yZ2arDTpxVj",
  "key8": "53s8hm8A46ZWm4HDj9VsXehv3Ek4fCX4f8CyF6ieYNwC1aP5oTseZPZcXBqXLbGWMHTTQitii2XSQsPT55L7xFNZ",
  "key9": "3BWqFkE87QrQjqvepf2qxVtFoLrT7cBc98Za11yPCaPbZ9VvhDbDGf2YzVkaJy1XRsBU1ZNCanQd92c8xYBPzqX8",
  "key10": "3ew9gQWQv1yHLCgohUSy1KbX3B4id2vDj59cvAbRwmTQ1YFdkjQ3CEtyssTf24yuvoL3D9VoAc7ESJwq15Pxcpbb",
  "key11": "2YSLmUb9qrkbfbJV8Row7EPuqqQzH4g2vaE3v3yyrHreCWinVJ4PPUDjuGS8CSGWSUMuy4vYzUaAdzBZfE4ea2QB",
  "key12": "2AUT8sPrfg3EknP3YUSMH3FsdFdgJmjH3Tx7ADWbpFVqQgSkUezbLDazz2PFmxRFTf1BijCQp2ohPB5qBigKQ4zg",
  "key13": "5sjUcJUTeejmZZokBEeN2XNoRYVfDE5KuqxBtEAQGxwg7cRgQ9DAYciqchpuHAqHu2UxppnsEsi2DUBGFKUCspn7",
  "key14": "2dV3BzDFMZkPqjvrSunLZYJxWb5qge5urGz1oRuw3Jnuoc2r7sUNpM1RVohhJxkFWiCHfMLRzguVtgSccVx15zcQ",
  "key15": "3fvLcRjx1KryxMNqPrW3F6t4PogVz3n23cDRmUK44prRCip3xDigDeWaDj1VF6HfVPpcybx7qoz71wUitL4FbjaE",
  "key16": "4aEgk3U2Gbi7J452JaD6C7ETCuZsvbecMW67cavgiQrzRFHndLZRWwsJzE1e71HFG8exshzi7vUFXoXv5WwGsgjw",
  "key17": "AQiPN87Z4AKfhNV6Vb2SHd97RzSL62ZakcQ84MZLnGk44QDDyo5JJ8ZQrQzXcrvaVMehW9A1AAzxVvJnGPQobLd",
  "key18": "PnR1Sfav95PFaidezrCo5DKF5ttiv6RGjXNMHjPB8YtHNzgrvzRk2ujJHQ2SiRx44mQB1jMEFfcxA3gZKpdFfXd",
  "key19": "sRmUThXBCtVfktVqVHdTkecejufMx8SKZdiYrjjUVSPFV64MH7Kt1RcsK23qFHzTenYt48ZW7Tw7NeZGBf1UA3Q",
  "key20": "v1KDRmJCzg2aFiLCQNYZn7KuvHVsb3fHJuV3mjqgbDNrX1arJWtbn5BfEKBYBJCP7BVmreoB8RDZ458BZZPaWAL",
  "key21": "3EHhDkhUqhUztBpYrEX7EWwVvsibj9zR2zmTtaYpXzuvExqkm7Fxe6PgcHZ6tTbh3xPhPjdJ6ECic1cuCJMUjq3A",
  "key22": "iYWrHvgpgAGQ3b1nijJCu4PsgtS4A5qUMDGo7NYKSFJKcNoWK2GxVsT6BFRSGGFoufXDUWLtpCyU66geKbF9HPr",
  "key23": "3q3AYFXrVPKAa8tuHWdABDpyfni4ZhKQ6a6ZrtRwQib2KaGPpBXnW6EfbPAPtbY17FyYPLXjGay12xr1HMyeyNiY",
  "key24": "2mPmz382Rqfmtz465vDLZ7A1PkVw7LT96yDzBA5nPB1EKCWasMzMtygxPbNRHqgQjqvgaEFfmejRcMZLBxLxZy1s",
  "key25": "471Nsr93MkRMUYQ1CW47QJfGapmrwKiEsnhdRT2DYiLuRqa6Ap5dWSwR2ZNAtiYdPVWY67JaRBB3E2UHAjbniB9P",
  "key26": "4NHFJvhJJAX36Y6CZMiurJouhCzEcceMSSuBHJY5DpPcv7xb6Y2SM93yQkiqZ98MAnkgyeyE4A63ppL1u7J2644B",
  "key27": "2npxW5mrmi85yRU7fHrZSPwhqVnznb9WQj6zKQttdyRv5CpL3keKJVYKN6uyQZ5eJxZBkEkGMNt3SKBcV86pbCTt",
  "key28": "89uQVyTedH26c5tLb2WcscmreK4SrEspEqpeCiWm1xc33cqzDGTL6oW5uumYgmL1fAYewy2NKqe2iEGDAneZAw9",
  "key29": "NV9hwfrvin9BAabScATyqabNwJSdrh9AcHDtKtcacHQaCb7vPKuRkn3KZ8ksmgBbiKWPqftUAhBhVvgTW8EZqVR",
  "key30": "44JTdhEqg2aZc7W9nyxixWA1ApAHUveVdJmTKvKm81atgb2zinigWMXHyasa7gGDmh6NMKGX1sNGSjaTr4mPySBJ",
  "key31": "2NCVw2kcHQyebgyQwg2R4vqJSZTFt18oZAfmb8QJQ984oQmTMLQQeQYcVvGRQcnGibNE3c4bM6nz8fVcZg1YmzoC",
  "key32": "46VkP7A91Tgdqk5WxTeM4VaN4xZisS4NucBkM6REZiWDwwLNx7nA74tk638Ko4R4V5q3og4ZJA9hHBn4bKyuwQdu",
  "key33": "22LNkZc5ZFujUzGC9UFYLFwwE6LZBwMX5DrM6e5FX2LCDcL7XomKSvC3AkWeAZExnyq1uN2xWZPAo9XSvCSY75uT",
  "key34": "3TQ6XqDATyZfRronnsKnjPFYfVbZQSfj8FefajSjm8CXwUGJ2zRkw2S7z9ssJv9UnkT1SpKcbv6pnYePUQzWH1FT",
  "key35": "3NE6DnZSsBm1LkjMLjoT2ArMCoahheU8J94vnpYGQfcuWgGT1mjdYBjP31h1dokUc9ZgujZZGA2kdiSLAsBjW6T1",
  "key36": "2wex3PV2YDcwhTeWWSuLsmj645LxWn8BrrBmCMCWqTv8rVQWnr1EyjEqfqVef1vdEttBBKmFKbvtHuMjswc6VKZq",
  "key37": "PqGvD7mU1ZUdziQKDJvm8JrsWErmcYEVCAdgi3YaLvhLY4QpC4dwcwNVjuSD5PAbZZKcCihxQp7wnJp72p3tBZr",
  "key38": "cYpvccTamo4S93JGaiqbhvRimXdkSFApRQE7q4DBgWtLtsGw1exs4irrSPx8zPyyRatBxfSaQceYtagCENb1QNm",
  "key39": "2QjokiLffnHdDeJNFKE9HsccQssmT5LgfDsoi2Y9JfiwSJwEKyVwx7XUyQaPmQXFeK3eNDVZnzhhLpKV2HDgnWft",
  "key40": "4DHNjWE986UpmiL4eyRzbiNxYumobrDfTrYyhggfadC4uafKgTq8URYtZc2WaNofJs2Sjvtu52bbjUsxTvXejPfh",
  "key41": "2gF4ZnYvsooAHqh3cCMyAAuGC1HzN7tyvahMMGp73kNHiEmipqP2XcxKsjUBKe9ekJ8szExLhYnMzC6pm93qymjL"
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
