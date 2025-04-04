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
    "1oW4eHnWr7k2Q5uyasJMUWfjRz55xogUZ8LQNp2kyrZZ5WGd7tMyuiLZCRxwjUEjJV4ehHm6DxW7QkyBy3P1eN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQGDw4eJGWF2ddmrEPe1sECRsYWShAhGtjtaG7pL17DbF46gNr1ofDrAjgvm1csK3tjfdid5uidu2hXgzNfGtrr",
  "key1": "3i4NtP9rS7ZpRkjmCxjqjDZokb6MkdGi6MthacsWYJ8Vc62jCfvZ1BAQ5zkUStNt5GkTfqjPgsbEtvpZYaXPfzH8",
  "key2": "3wR5WH9mPXZk7NP7X6HAw8DYqKshMvaqq2ymQMAmBMc1Sxw4NpdEZVMnwqLr8tQfSBqezrJKe3wnmUExE9VVpJiR",
  "key3": "3jsyPEvkSth8CkrW18ipnx4weT61SVDsGjgvZFyJkN8orpkUzPJn62DWx5XtjrpVXRCripX2wk7csWXjTLVNYtJy",
  "key4": "3Du317wT5gR9LkkW1JYKWyDNg9cySqhDw6Cm6v78zhFrNqeaGDYLXjJpX8XTYZJvXxygaJBpyXr4Be6awV6qgXws",
  "key5": "2TkUiMxLDcYQjLCit5cnspY2H2zWXwbxHMQhTrTTYVZvJqA1mBY4JpEagUYYjR84tH4keaSzTBhDH57bnUH6jm3d",
  "key6": "5f77Q3m4Z4Ns1PEVqetj1vK2efUGupQGG8ojFtRn1wS8cSHrUDLes5DFiwSANcD9hLNrp89zyhet2WvGA2U7jZKU",
  "key7": "2veqH8NzFZENoVhD65hbs25sFAQt8XJ2r6nfZJk1bF9d4iiayMaTpbsNEE5PkFk9rRDgbBt9HcNugBW6pFm3aFn4",
  "key8": "2ZzwjwfqEsTnNXQNKm7Q14rESvNBx7X32W6ieLKtGQDgTnT8c5d2bMmZiLdMcm7h9xfb9moeoAPmvgUR46LKmifg",
  "key9": "2LmfKTjxQq44CTA6RHLPYiE4rjWYCVqrLHPMxUjrqc6FoRwDPWoqn42T3qwQR9p3y2iEw8Pv69GRJLJ6VziJFRue",
  "key10": "5wh7FXXoo2yxLKL6n8H8eoZD6FuyabCmyNqS1fk1zSCEv15jmy7WSCbfmrriKkaYqt3Xn9g2KbfBE5TXVt6DEUUg",
  "key11": "wJYqHuhB1WZkZbuZm8STpcn2oB36JMHd8tEjVy7Xgy4E9aDqvKxC4NLFQeZXA5cZnzow8bMRyW9vTMizQVZBYMH",
  "key12": "2LEEr6PUDMydgHDRHAPxtoc2L5zn6VxpLB9CFFgJyFZ3VfAe41A1hXZSFSQgktbW6Frd7T1SRTHh2xB3pdqFQ2NW",
  "key13": "35tDLakWqA7rQT7myNVSPjDCTrRhfeACFeb1VxxEXMYkt41cpTgev95QEWX6wbMS79A7w3BZ7P8EHBn7VEKFcGno",
  "key14": "2djs3Wg1T4W5s7ykQwe6yDww26tP9iMrP2uJYG6H3r28uaXFUnXD9QnE4b7pTCj44pkXY8oBDuP6SwaHFGR9fC1P",
  "key15": "3MvAhQTHP3DNoTrkDMgpQNabVNUE6bN7uWS5Nob3sibkswPMuFidcQVDCoA1DrCQoM8gySbagJR4Bk1NGnt5dyqF",
  "key16": "35bpfENSPfARVNTEK1K9sNsHQm8Aq27QctH5H6xMNpGcofzjFsiUc4X3vvthEyJv8YzDFE4WZsoGztSwegT3eeiL",
  "key17": "3UN58RpVG5B7HymTiEgvxxYmsKHreY5oZvRAFNqYTUMwBuQYDi75oLexDmxRQDX68EY739ymQ6DXUpfCmyitt4xL",
  "key18": "e2TTGxJTcD6Ch5i9JKo7jreaci4b7Dr9ZzyVn3RNKjReHKueEUUhoh3uE5SEieEgwDiPUN5ijmtwoABDNJQD5sP",
  "key19": "3KYZKyJgtE7PxTTCUmk3o763tkcCfL5SmwHUePsPPtccb1EbqRzbvDHQkM4RAMPJohor24hfNVTzeK6GXgAwYKmG",
  "key20": "5obkwHNraYBw55cut6RTfyUrNjRePkeMLXVEVK2WyVSyx2bgqVjx4xDhfRDT2nGJNfygVqsr3aNTW3n1J7T3xT25",
  "key21": "3ngBJKZjdiyQRB3NKjakfv8rNDJ1Khssd8hYrfdk4n23v6cQnG5MAUFyk4514ryWuCvnPQftJAhxvnGj7MLLwNam",
  "key22": "2A63zccX3agnEc9JJw3ziLBgeLUhBQS3AqpNp3VQnL6iX4cmHuL9Rj6W5UamdAEJgUL6om4XzhgojRxg6aN6HgxD",
  "key23": "5c3RU78rbcCzBqHsru38izmGyBLcM4Zs1y4B6BviKbqWfEyfSrHXVKDT43GVbc14YomuMMGHNbu61yEWU8K77w8c",
  "key24": "mJT1DEn4HktwewgQHsgb698EZxhsf3XCS2TzDRNrnjjjtPUCHtGiggLtjYoYZv3jgNWUHrYT12hRxq3TQT1rJzK",
  "key25": "3KUVLN37SesWLFsb29BkFfdCn9vqCzNBu6m1hgTHP7got9CExZQH4C8YtAbMFbbFrwMRYBLZcohCyayZKqmZzSwy",
  "key26": "DYyRqLjj2MX9PH8AMgHqUtdBY4Yqk7w42XjuTfhdzvMFk9wg5BrdUU28ozgCT4KNDMv2jkN1DAjKDTv6WBg3FGj",
  "key27": "5apjng5Ys8uPrK4khPwvcqBkWezmcZJxiNX9kRERhjyr7iRXZxGqyyK4J2BXhLgmd4G1QDfuHZsNQtptEiDWjRnh",
  "key28": "26FSJCAPoQPMXzHZe4BuuogMDKsvGKFFpYqZguihhrP3KVAH1TFeLvwRgLuaBHXbBAKvuTrox9zckatneKBSNnvH",
  "key29": "fcQP1LqxUmujKB39oC5r4mvv1acP8k6LkkekXLEXNbmaQQ2yKjqH3nhzCpFJNdvngDr958T98cQbuadKLsjqvap",
  "key30": "4UgHymYKzLPXUSjgtETZBFM1zzT9y9p4VCiKBybKY4ZQKVuJbwfXGLodpxKFuh7xQURJtARyNUU4XNz3BRTowNAa",
  "key31": "66cbfVvMUqq61QZysfir4qSKzr5ZVUXuhfPHREtWEohzsjXbr3uschfDdqcpiNfziCwPRvkq1ZYKsrqdpy1SSjEV",
  "key32": "3S2Q6orumMnf5Wu6oSGCttmsmMFwaaxVuwGDLpdMc2uoHjnxnndov686jFMNiFNEhbBqtWKuvJQQSqivYu1y2hm2",
  "key33": "2JuSrAt1GBrWcBCpfs5EJTgKYYMeb4Gd3FYRF93YHq7pTd6tMTvUXpQuyh6DcD4SHoguArjBJPfjezAdmo4Sjxsv",
  "key34": "4h79fRX3iUTFE9mV2tKCZn6Vz39RmGrNVNr5kTRukabGqdfh3SFAS33vQuURYcxmpdy1iyTU2wnoMsVW9LskDqZd",
  "key35": "4MAUdzRgBCBRzB5WPpbQjkSn44MZpmW54AXefWgPhgXGr5NwZETqmZoN9DBs3EKcwu7bJ8zABuau7TUcHvQhHTiK",
  "key36": "55YZg7AjwfjdVdvPBHii3K3VcXjocSRAF1fX2f2WFeeEb4PcXQJ6iSjJjNxwfQgHWdGzoXicrkqoUDiCJDruvCcQ",
  "key37": "2ycekGKcAP3rHsJdn7mMSg5DgLMjN3vK6UKvjY95NJWgNhSMTomWtJcP9UaNfQmdRV3BDCA77wMhLCcPHikKyqJ3",
  "key38": "3AsGDw1UmStni7bDYfW8dq7uipJQQM7eEtVcHs1BdghFEGtCd4dhzfJ23NwmBudXKgDmaYxwc7KWxNWUsSQyyD3D"
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
