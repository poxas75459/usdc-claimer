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
    "24ysQWLm15DjBzGjN8F72cbZiR8T1ixMyffVJcRQip3qiLCKTbQfcDsRSYwfiLyfkX39GgR5o6wRtnWYWSY67e5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5megwzxbsXuq17WCH7FysWiUsMmS1shkfYaap2yQnATYruTNfRTMeFPKbPArMzGFVDkt3KnhnHp2vVweS56KCVJw",
  "key1": "4YkRTehSpghSynFVuJZw3Ygx1boFfFK6Fp2b99jmYLeKZukXGmLug5RfN5uxw5929ttdQgSujzwoKJmtCHXPXGaK",
  "key2": "1ebWq29JfV2MmTTYbHXDWS7vSXG73mQfKZjv6ubBi1dCg6Emkc7BQ5DFu21g5VgfZ6d26na58GPSmYtu7DHR8Au",
  "key3": "4V5Be1kYY6p5HG2Q5kPmBkhqUVfftHEy46BSwJQV6VYp43UXfXX2wLuUQ84MegNgGHYNqEF5S8awaV7uoEArPxcq",
  "key4": "cBAACgL3zmciaxW9H49j6CWsg1bWJvpHCGTBbn2uL7i3sCLUChgn1KaBSHxn1Y21Zwu7ubMcfHKSSWdrexhnjM8",
  "key5": "4vRvoCdkF85Vj4WPmoqhocfqmQzMB326AuDQHkUKRQVEZLsGurhvskpb9LHczP7kEc3okhLiHkEb3k2pAPTDWDmF",
  "key6": "qgKdNFd9Qqpqh7uRCcmTxoWxXftXHAhKtZ4yVX7ZK86aJnqsRfyMrEfTsEGFMBtUjRVzaV2Q5UJoUS8ytuCaC97",
  "key7": "4ytsQUacxZRyDTejiLZmenKoJp2QzzQEE3jdj6UrKy7mjTCCbzY4vLUjniRku1Dmay77Vb7hjcwCqE14RWXpEAmY",
  "key8": "2gxdjZqvHqxhq4F9i3qJT3792mjZctj8zY9UiCFCqBHCnQ8BSzo3SfcuKahhpu3TVfKFo97CDLdFa3eNXYtmhn58",
  "key9": "25BXVsQm3TWFXP7SpTeVV3UNvVaya7z2ybDGSjkqg2bMUXPdBBjzmYmQspKXYspE3KDrwuHoo8nmFkE3mDnvbamo",
  "key10": "2cenCooKvSyoRS6zF2gejMCqmFgrerN38JgCXEiLRPwrCXqeTW5J4BjNn1Cgvtjs95he3bgwoDQhFmQf1VAwdWFf",
  "key11": "2DCgDMZ8HapaNFyXyPViKNEkyfwhsCgtToUa569czTEEvuAt6eTYRy8VNgBzT1Fap1MSTvtFjMmvPb6KC5yQhgVV",
  "key12": "2mHpjFRDrQJzJ9iLh9D6T2hrqT1dbmfQGQNqDkbev5499Y9UFY3jo5dH2zFnKuvnoyfMjmPiqnxV7XhVVnWsVH9j",
  "key13": "S54Spo1EKY7MNAaugrXEXprgAeWuT1DpkVuNcHj764Cq8cAWtajwhdFaGQXpnquTtrTPwnMDDtYdwZbFyfqWRHD",
  "key14": "67UiJSKiRxVW4AG4mcGJA2C3qYb7WnbB8NQRGieUQWoH5tjq22QCbvGJhKC26mmKByDwDHTtTpQN4q8V9JQA5q69",
  "key15": "2xv8gXZHQGeL8m8rdGgJUEMh2rwvhpVuuvByTthjZgSDsEq5ZdtG4czQg2ahMa8inWtdh5c2QGowUmqqfNvP8ZJ9",
  "key16": "5cK68sChiiuzpBCHe15p6T19bTPyvC7Mb5VtGG88ikjXQY4v5673YvPqnY61g38zH3znfqxRS96D9LkcSybmXi8U",
  "key17": "2L2sGUCmjraUVB6dhe4KCGSMGM1Xthf8X66fnBijpxnjTXT5gNniwciLz2vrY3PAD9mEcS6uk4AoHpq7RephyCp8",
  "key18": "5FumAbV5XsWF7puBHQToKmtDGJGEMQwXkGdhAWXBZ5wrejjQjfPRdnTu3a6G84fDuHCUqU91n93PJraXuA2tD8rg",
  "key19": "2zKeiWwvWZvtD74poQJirFRFVd7z2uHpmCg9VorHaTj7Qe4tQzqxw14mUK5BV9XWsvrvr4asnYSbJd9QST6jKpqJ",
  "key20": "5H6pDHzwwqqE7aRLZ3tXsCx7zmXE5g4uismqxKDQGqRAzby6h53CQcKRnK4eP8hWKBAetPZHezwrLkdegmc1jAu9",
  "key21": "YHeWd1Dn3YYzqJp1v1gQ1dHHH1eRQykavrndpfq2bx67XVBDTTjA5ugBsy6Ygw2hR7ViTgFSbAtyYNqSuf6HbjU",
  "key22": "3TRZHVtKX9ZgbNSZQzHLepHNCdoRjzjgRCrDzVk2tMuxxBLJkq9XPr7y8yJEU1Gb7wMME4CQCVydyHhxrBE7mK8H",
  "key23": "Y9o4x3P9wAsXfVUS9SAZmcXiC2LiP4noEuMdHdZYVopNJtXWfwYX74kMe14kRqbMhJvVNZ89VuscG64B1sKENbK",
  "key24": "3ewRwGtjwZQAXJHjqrq8ZgbhUdFAxyHfzktLSRhmEyj6gxFL7nk74qkSg9gizUMuxTmrXNgryuqynzMWwCsubwTY",
  "key25": "49ERhL3ct8mvKdU6cRj5myB16FYhFMCktHUSAcFG2MgmS7eRJPn3SAit99reyjThTaGumD9yHzUweiUueZZyud5v",
  "key26": "5MtUrnogi23PX9vJuaYNyrZCX9RJUosMdVq6UGYxsjtDRDhyu8EdarZwHrXELNLsiQSSS79WwfjHCU19UJtimpaY",
  "key27": "4MNb114h8WWg7xBz2ZHLjVAsVjd9uFwERNPdNQ2v2VoQTN7wPLj6CuJkhadMdCGtrzG7SMKAPcGHLWdmdvWckua",
  "key28": "5tVogBQCYWJkFCU7a7FHXKTwNt4ALhvTY7acf7XDGVoLHXsQPE6nUeQw22UTV8pUYjUHouwj73tcLMmnk9c9wkjE",
  "key29": "2wNcFFoRQ3o7nwF94xBdzT8KRzRsTMUBS8w3KWwtTgNxhChSYwoGGi2At36j22ExCF41QTi44b8wPc6N1h3cT6bG",
  "key30": "reKsEmr46nMqg66zhidk9Av1cRCY7SZz8PJYNQMvi3SwMHEzM6DMQkSBGBZ82NvyHEUs7rimPfShma9FPDtFp4G",
  "key31": "6398NsFahoipKKE5jPwY942eytZNAoW7Ti4kfknKkNAE3WFa4dcsf5bst7Y7rizDZNz6mdPJzQWBqhAW87LYWYWj",
  "key32": "4VCaJTRyEKfXPmNd9zRbvsXBWG7HDuVV1zsF6FVqawW9PgqPU9CvfKakW3pEMm5w7aR41kVZfGA49Keb939P2hQB",
  "key33": "4R9W9bLsgrZ6af5AbooY6yKabdBb23RaW6xnaV8gMksu2b9a1PWiURVLSh8M5EwsbnB4pQNg64DyJm9HvjoQ7hAN",
  "key34": "5KSfPDYjMQ9oNQrtXpjKiUxVDEFGggAS9PLzSaAAxYtU2kpfF1gpcWFnDoiUYXRbABvDDcWy5YZZj2375ENqx9s4",
  "key35": "5kXu6wgF8p3TxtuTRLMzAxLXL2NED39sEweqH8hL3gkaDv5B63Sx4hChepJ8LWyQd1iDP78pEHasfN12iSTboosj",
  "key36": "WSm7TqdEFC9RA46HfQouYSuvkVvXyYpLSTnSnmyrVg2fmE2TvEWRAG2189huHuBjWbZCWyKi6yAkwR9eFLF6m4v",
  "key37": "3FLG63UTcitHWYDHorNrnj8fRrSaGMCKvrefHnpzL2dSgGmhWaVyye6eso2AFULBPVbAT7t3Vph3w5RVGXzWQ5xt",
  "key38": "5HmEtrqpPtQ4uLPoXCKDExExv2QKJaNs7BayrZJAGVhcj9bpUkUKZQzuqWcu72nop98yFym328ZxvojHuTtAtZCC",
  "key39": "5YW7DZTHiUts1g92XHZtUUuKDLn546ZXBpQQBRUvQeZCVET2aN1gtQvDqEuzvPyz12Vz7yRkBTvrazWKNmmjkiij",
  "key40": "2JYpR3Tkz8CX44z6hqWba1cNhukKdnEaSg8wkwVJnq9BSkWpF68izey9UF9K1PzjQv7rT6h3E1D9cqRpFGwHnfeF",
  "key41": "j5uxot1FpQFRRLPEGjCu3tK2e3A15FqnS8eW4BtrwDkfZADzNvhysNpAyQonwxESf8tkEryYNLFcVUQymEFhLW4",
  "key42": "33VNX2NBF2dKNrL7XxdjRWKAfz1xqxnouyxhh31eWEC7kzARbkZAyz5HMSMMr6RQwbndg6B3s2fpZsEdSAzrQKtC"
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
