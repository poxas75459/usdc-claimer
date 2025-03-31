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
    "5vR9R59FSWQHnmDhrB2aUrVJFLPN6GriAjLAPTneRvqPLM6PXkNDmEepAorB5PXE2n4KYvHEfV5fXdmnumZVBHgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEykeCn7w14CgbqQ3avoeoHVisT7AK6cevhhJk8n9YBMYEq1AyqoxQ38kHnzsTiibZ49m6ZDooEDx8sYH36o5sZ",
  "key1": "5ThyikiQisNCWAvycfDqrd2W52sMavtEws7kTjjTYVQBsiWh31eQ8KTTYYsMFZNTqKVKUP1ugFuVcgy26z9o3ab4",
  "key2": "4XZtUn454raWi5W6yYJWgw7NSqCTELHXhAus1q5ASQr3iis6hawDKknZcPHTbs1VrKEwyxD34HXE8bRvqoyXZjTd",
  "key3": "5wZR3LU8fdafqqjXQVQhNPm1kADeCGrKyVazaL4BsoFXuC9ykwHrpvSYEnoaeh4mg2o5BqbTRa8nXFjAKf5HWX6m",
  "key4": "3tTqKHwNEAXyWiBPxkyN68Kjfx86ZgX1QHYZ6Syi6yQQMdjzJ1SBYsCWVxGh69GtrCJAeEq3KUJYgLCSYg2t2iXe",
  "key5": "3ftMz4Vfi51HG9RBEkr3eQHj2JvH2UM1sC44VKAcFg6PPqtjwewUy5iBjsDHzyLGVyCoF46FjeqDkXo2SEFNSJHY",
  "key6": "RL5f1RcDm5zzpRWxi49kKsLRYJgpzjSYtUo6Qq2iRrcG9nJMQNyCHcvVgojKgmvEVqyETdJkgr8Rh9QTEgc7KBD",
  "key7": "5v6ing3GLPoZsdRV8FxpP8q3TCiYp9CRSvS4FAfp18znUxepNnCEN6hE11vNy8WeqPy61yZFkEw7uKiu3K6sgt6e",
  "key8": "3nwJbc9ribvTjTMrNeHNt8PXyC93cRP24JthovgL4CAzCtQ1K8bVAG79W3BK8pNYEAW1hdXM8HK92dWHDB9y6rRU",
  "key9": "5AEDX2C9suPQKTbvgxLxP9DycjMLZdDWihqGHHdu34iTEXZz5dZLsnkJvkBZCNEfgwK5vzqoMRbBApmVBRjaPHh1",
  "key10": "4TYnsAELu5Hx9jgUR8x5o6YgB4nsnKLYCM6ts4La1NApARGg9jaMi5sv8nitpHxMZEwm3SYptMBYem5Y3nc3Pmpf",
  "key11": "3hcHjPcaG7fqpsdYUe5HFshi656xSRSoUvafjkSRJ2hiSRPe1yJeHtgoAYeLdhFvRU9tzWam4PckNe8Gkh8TZUjY",
  "key12": "MHuKRR6pKFhUidWXGASTSQSA6giuAgTUkJqQGcWzsGotQHaeh7ymFRZQ3uRE5ht1rWFcMY2GvKQhSGQ8f9eRYHk",
  "key13": "2Jvhz6Ps4qdXnyqaH3kKRJQJe6WFC7NZBK7ooS86uoCjvZ5n82isBapEk9yN7P8Lcw8M6ncxkq7wwjoMXLZCJ1jB",
  "key14": "4no9A3wVJp3vHmMJKk8dcsu6fVfcDPKkEZ4JUMWZ48ToGr6sbayLe1T7iqwVgkmmvSHtQVX7DPptyjE6f1yQJC4N",
  "key15": "21NCXMRkY4mEJZq63fYEgkqNtuo7MuiGGfTgDe8PtgjKbJEFa8GMQq1hXoydkt3UwiLbQeBJfVsWC1qNEYDFH3Jx",
  "key16": "27hU7MGmbW5DYTAwcpifeVe3MuMe7vkXNBrPLa7HQCUAxngSQ25i8NLKZ7ebzaZvutC45jF1SMuDmCowpjREHEwZ",
  "key17": "2YbNa9zkp8VVxPXHixvpNV5JKmNynSh55iJ7ZmJH5VevSbc6xoJoGawzFsrNZM59aT98ZrD1Bv447AYGHWpqSxK2",
  "key18": "5FYRiKJfsaExHpMuv2wJeLFeMBtd4S7ZS4BLspQY2Bq4dg3wWtn86sBU4CA7GBQjStevh8FpscoiNJGN2724RnRU",
  "key19": "yS1DSWmGmyP14pHKLLUiggLyM3M53Ps4LNcvao3VoUF6jKWozqju67W1p2zGUYEy1pa1gJCJmNzcd8EaLTzYaUW",
  "key20": "3Y9PkpuvW2JDbbtPmZS9T9x3McJGhtGdHmVCQbDkziRqcna8J9pAWN2yzzYBEQDVJGdkLHvz9vHSCMXXPMeuaoJ5",
  "key21": "51jH7La1sYwdRGdnvssxU1w2d3GpWWrbLhgJqDKoUgEp8VMhfgyAqPgzTxJhAoXouqBDTyeNEn1v34851e9nxYre",
  "key22": "DSzod6vo61NJfQ5K5uJPF9GXoxUE3MMFcgxffQeP6nad3ZRJ1bodsncqfWRzwGG8g2JhXM3utXx8b5jCCZZnfCe",
  "key23": "3RQ6n81UruijgCy83LuEYVo9K9oXqw8Fnxm8E1Si6sTzfmPTRn45GLfDT96rXmDcpDNfa2uBQRDrsGdNGyXnhGS9",
  "key24": "vRBH3f6hBKvoVkH5E81rGLFoCqRZwiXkRDi3xgfjRtP25KQ7sgrKRshjPPGvxfBG78XAf6VgnURYuqdyx7N6UtM",
  "key25": "5xXCA1LUK1TaETpubwvC8Y2BYP5CeA7vQKAN6MDFPuSUKMqaijGyp6k3iSkE4MDQkgViTVF1mUzRq5P8rxLiumXR",
  "key26": "5v4EpmewWSfpZuxP6b15UoaJUGUSzZ7bX5Ry76wqhcyyZkdpPQYv1HVFLtNvZ2edBZQdvFJekJe82aAKEPCTMdT3",
  "key27": "39rxfJrQXQEETx9tAmYtFb5uMMk994mqKUXX3SagMzz7DX6bAupquBqNkkDgBWUHnRugchEZ2wq3Ps3zXz3ZAmcp",
  "key28": "FGGtoncrcybdZaPZKTUZCVzfMd5ZmpXYhWGAKHhk8MSmGthL9jgkf5YezxqyGs43AFxmPcTAYjHM4bVwzB2HUtt",
  "key29": "4GxWxVP1H7Dh8Xe5AfMLa6KBwKn3fnmHXRNrmRsygHJ4c1DRtLSmkxe4N17G7gdaiQuQfNDoZ5hj7TrxGaPHvPfR",
  "key30": "eByjewvQ1sxvcV5v3PstQbHE4bb7AazFLQLF8gdpzdB6XwUucBUMuL8XTsVqt25EoK2jjekFH7UxdqyEQWtY5Z3",
  "key31": "43jcHzzdQFLaVDg5tVWGpYRA4YvNuPuTgbjTSRhcMXBEoWkYkdEE5KWK75TQUmyRN8YJX5sfGPt5MWQgwCLC8DLB",
  "key32": "4SzwqodSqDBGdqF3EU8PwXCrAX5MQQX6828SwCV53W9w9kKE2E8maigy7DMiR2LHpiJCJ25zBcSi1mh4f5uTtFLA",
  "key33": "Ys42hCQZA1nBAxeqEhJJbuN5M4Tej6re9osMnTN4cQJGw6ofT6CTodRts3gEHuQk6D5FzqYH7jCs3oNRoqiSYDu",
  "key34": "3FWX5mTTSctN4okTWb9Yrh7P2dTjz4LUERPR4vBRa2yaGbQnci7cQi1RZPcMyqGZHCsRhRZUySa6KQtgKqLWvoGw",
  "key35": "fTazjJrGo8HDGdCNKSftKFrYqjwgUugi2hA7ZXGu62Wv8KosA3vgSYmxkNxedPwXE74bei8EKFSdyaGGj4EMwTG",
  "key36": "2mMj2xhmJp7PxJmPePcvwnSsmM3Csp6vyca7jEyqnWT5yNRvcLDQ7Aq65YTGqe2pv7hQUuyPbLL62H2Yd6tSTeXf",
  "key37": "2KS4HmtqzYsN76MXabHDVxKk8q7KwvEWcbYuhGSS7WMWR952DxvXyFRwcA5TqU5ynwHrY4AFopMzecbkqgUZHKJS",
  "key38": "ERTs2AEs3ueZxsEWwZGGPsNHSE4tPhFcQL6xYnpk2BQfqva9EDLrhNGU21aTXeuRXVcvxAsPMUZk6LazKYpkuWi",
  "key39": "4Qp8SNPKaCae8ghvv4FPZ46eePxNWPuHLAFcqFLv4MXWBQi5kPUBfG4VFvxFkbQJQBtUc4f6nGAxpytugEvUzaCg",
  "key40": "5zSRUK1ku46fLdN8pJX4QmUJsRBWHLCC1CeFg9PNyLcfo7KAT5d9nu8wz4tRUurEHSVLaLvFygrJ3r2rMMPVJ8Z6"
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
