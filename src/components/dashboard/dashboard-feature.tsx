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
    "4NQ8ofJGkcarz8ZGx4eNibcEkicpg5j8xVKA7FV3gW1uLyLS3u64JW35akmvMRQwVrSUBKkoEs3F9YjaUk8dxkxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ue19p2GXHDYQ9P4tSSd55KYP2z61HG7gD2rEYifKdJZbNspKjtYSwJwowaXPgm7gZ9PQEfqqri22qo1jix9fJiu",
  "key1": "3zAqJjfLbfTFQ1d1nXwzyq4HqAE7gqqh74utnZMnXXRRQpP4V1W8gqieD4VmWw3EQ7mKb6Kj6ruSy3S8ACVA7zTY",
  "key2": "2xiFrEZXnQprvVx3CqDMCwHjafkrreAuECVu7ttgHs8rjssAcU5Fy7cBQ1eRD66Mm2oewGytDQTcYreauF7T1keX",
  "key3": "5PfU9Tgv2mJ843mKBNoYwGQ5YY3LH3zKXgdjeazdYNVQ45zLDQgMLxH8vKKPog1BENosST8wtsXhstLjiWUXsHvC",
  "key4": "2wLLy2Eb1363oofKodWCL535UE8qLWNWxzqpk48JFyfJ9b6CuYGTLd3yp1jMjsiJLh2Hr2ZJFo6Y9De99SY6MWZx",
  "key5": "2GP3gyRRJJTyip9XgCzjSDCwjMKfSNijqebZtbJvHqojqmYyNJJV4dXe7DM5GGj6YXS32fagq3DWXTDqyDQuQy7L",
  "key6": "2tovDt8vUZmF6Byd9it8PZJf4aeytFcrfGdbrY2qf3orj218tg7pEVeks7wCSjgdUUTbauD5wG8Ai7nL8NEVQJQQ",
  "key7": "2gfd1aTa3LXb1SLxAooJTzsKMoXrfGdJNmYLqCEdzg2Kbsvpni3U3EuS4a5WBznDAsEthrGs6U5Mm5peLGh6U6iS",
  "key8": "xKvge2aGr5SgDYfN3qr9ir4PzdeXfxHAX9zNtbEMXHktUzC4PHWVuvXfp6tPKn4suki8GmanXoMLpnvwTgaE1tE",
  "key9": "5b5TQk1sxXQUndoi7FeyHGdLZkBsHE2Vw5WWd6Qm3ba3qDBtjewPcCKCU7tXJt66jzyLbp1oHmyc3JqgAR5HKCaA",
  "key10": "6zw63HEsmuPnKBd2Kp3Ffg8fd2dAL5iVx12qk1tjYk9nqgUBvtnRk4DGVWYTHBNUL4PZp8sZnPe9NXxAM7eYHFy",
  "key11": "2LYRXvwpx4Vy89eYj7kLMdSLuyB3FtrNJszVdDZy7LVcsorkmBtwgG4aV2qiGTeKxxnkHHw2ozZyzuLoJHnYDHNt",
  "key12": "66YUvpHBRmry7PxgAKXn4kNypDr4MxDs1VsEwCuiZUcBA9qB6wJ1WxVdy1Fg1sNxvGevbK9pBxpYnRLy9cFukZws",
  "key13": "5KZ7zwBEbNnnesqHJvi53FUGQ4RF1PFqePDNazsDsUVdmJAbdhgTdkUvSPzu6PyddU2LjjmH2MisdNSSHgdGAZEP",
  "key14": "47hXAFmgXEqKfcybdsfpfC48CmWv3Nz97gS7ki9PuqzV3PsXCkXNnteDWH89Q3ZpEGWqVPamwQ8Boffj7YUWtUzY",
  "key15": "2Hpc5wErzoRAvUrKYP9K3ihwfwvJAbt1toZnUqzCxf7Ytmz9xVAbobXJJ7LvvopTpf7NENAkbBJDg8LGjnuTHSeo",
  "key16": "3G5yyyKinBvt7whku7FXLDFJ3b4oWw1cDkWN3BUXPbcSx9e8SUQdCbrHA9iTbZXWoEfL7rbP8mzSfgKQtzJzpqcE",
  "key17": "Aq5vgpEeTHC4Hbyg7c8pW58yHpvUvD8in9Rw8S8jHFk4ypPQ2uBrkZBe859NsFfibg9EScfFeQf66aoV8beAhCD",
  "key18": "4EqMG6xSn6276ressk9oyhCzfGiSZ5Q759NUakzzwfZFvBTqrAAw9kiBCA8sKTHFaMbvz8jLH7daSB66GarcyeTL",
  "key19": "wH94sveEHPjnB4EFQvbc9qqfsMa5h1u1SpFJjM1BkhxmExZS1e3ZfpZ1V4GKJGoC7FMKMvuhGBavWvQLV4N5t4X",
  "key20": "nkvnmdR7AJavMpCnHrP1GyQz9oMpCELa11aHN3cCyMbM2afJz7Y2mcFHGchFcfEsUSa363CzcanYBbL8jYZSp31",
  "key21": "3hBDm8SYjRuomSCqhYxfM49cK746HCfF5Zzdvv7Lce19sfhgW5pgqwbgA9D5N12NdDu3ymSuw9tPx8gBpd7K7aJB",
  "key22": "2as3kCoGzxU33WChdwraicYxZaxf4kF8xUuGoBpAcSntfvgi5A29ZyViGVpvpo3EWz18Jgj6mTsya53TvaZtKSM3",
  "key23": "3qiAxv8UKoHD9q5hv6NMs9vHbKUZegAJGtk6cizQ38rnVjVXyeNTWaVif56as269tve1Uzdt8K8NYx4WYm1dQ2gb",
  "key24": "J1V3dJU179dw1nz3E4fjrEVLw5y97YNh99oeE5mHGhUHtwWcCT5bmb2MaHSFExfU6ty7KiDdu6XgvgEdhJSi61W",
  "key25": "5EmgWcZw9wQKuiXLZYJwRqdXmrCNJH7R5SPU4zto4EnzpcKTrDaQQQoVmKvC8tnZVL2UeNG1S3TUM2YoXKn5YAic",
  "key26": "26nw3XWvh2Lgaoe5WNtCguP3iGZ3giVNeo6wwxvRsD2oNhqjCvpWjjViGDN4vWkPj96MG9tEhX4yHqYWHJchwMBS",
  "key27": "3CjZny9gXfDbjwTfhyjBaFE1smdvQd9SV7zcDx1GAPwGM2xx9pYMajxhJvxJZGMindE9SAYsBHxEPzxPP6R2HdA7",
  "key28": "3194m5pWTr4VbcgK4o74Kc2129jMyhp3jE85Ewb8QF1Kvd9e33or9LmzSnN4HDcCCH95nyrKtLtfaWa1tu3m5u7x",
  "key29": "5Ls6tfxkd1Lg8P35YHqjFRCq2eciqbwjXGh4WAbFVJdeN8pPNFLo87oxxZVGihVkEQUNCrqwGBa7SriGuAnpN42c",
  "key30": "5PL6HdHzJastjZz34xxSKFdovFJJjdG7e2jSa7WXaiQi5g8GKGdZwftmyMr5hSYHEizRZTUdkmAhLJ9dMdv8ffc7",
  "key31": "4NsV5wPXXHTAuA8akkHxJB3fxS6mv5jJvNbksvKdF2q4x77P4YPAVz2Hwmvpa4eEnUc9Z9hJkxRGgixfjcWhDshd",
  "key32": "15bB7hn4J5yVMGCvSqMTK7Zh1f83nRfxjUwor3pg8VTy4BTmMVM9uP3c3JT9X84imdh29vyFQRLabf475JhF7ML",
  "key33": "QbswGBm7aonpzkqKVBdgV5LVAjFQ7Yoo9JER21Rk9u1WQFTZCqXH7RE464CFK8JRNWVAv8shrHRJB38PWmPRiqe",
  "key34": "3JVQAWNJYxheZgbBELNneMkCxk5Zk47iuUfnFzz8j4rXifaYph3xTE5JpfHpcxmtvE9xw1VZiqaPPDmZsUSbTi76",
  "key35": "3xdBs7ZGPXEzpdsETEWpcan5MJKPowcoDNqs2mFEp5JXBY31sZvwTBbsTPkUMHCX1urMzy1hyZPWtcMmR3N24rEL",
  "key36": "43uKp3yW659RmdpQ7MdyezccmZGGcJaSxDCspW5jrVGQNskVxMUHuiDGokEV13YGnfyVAiDtceisfkYtEdtP9iM8",
  "key37": "1RVrp6bMtjEnTDdJE3ZbQQZxaXGgJXBVM1fA9dpDkzKQWiLDRLbicxJUHbNcFQTG7oCG2cLD4JanRotq2mvSNM5",
  "key38": "3E7ushhs4MJmBudr3UxBtdFx7EaQougHMj4eKk6frUGduUMGttP7AahT9Nd91RdtuEffLTU9zunbgd7sVqzZfNpR",
  "key39": "5wKqdPLL2ouPk1ZeMmPQA4NxevFJQgx5Kxbo3YUtZD6jBgcgBDk47oMkErnT13L5spud7oeR8UPLtLUz9kXYmkjc",
  "key40": "2ReC2NzVyUjGiRVcCYzPrKkbV6x77aV5uNq8RwWPHL5ZZMbeXsXZvnt6EsewR6ebtFQZ1VLP1FVn5bWFHmmX1AXf",
  "key41": "28jivCF1FGuJGpTynNgYHoJy5hMrkXqZFByMpeTikPBj3axpVJJwBZ94tdY7TqFPxGyCGqXMuBvuFqGWQGu3K99L",
  "key42": "4orCnmTKWKDTuvuq7mF1k2FepdBfhotNYDp5Kqccyivv5KV3U1dWTiccFDBuajpotZXf9c71JDv36hZprZGPWoMX",
  "key43": "4DRXSqN2TpSpj6EspBqoynBaQHkg4FUJ8dXxKfBsdETtg8SgfoXqBkXXxcnmfEfvGBVLiyH6fM2T45eNid8Thp29"
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
