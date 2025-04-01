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
    "41th3LrZDGRmeXuPSVNmYQA8eoGv238nL5P1t3wFkwoVPiapFopwhKYcWZkgY4DiXvKasXcCXVXp2ACa99MkS7Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcUAwcuCtqU7Qadizo1PZBeDQbyaNKwdqVj2H4JVU154BiQZLHh4Rj3SCvHsKXTrsHYWjwrsUoZL1d44iPhQhXJ",
  "key1": "3gTncsj2V59FhAR9kPEdRBAhER4CCX4rujU6FuCJdnw9KTz7rF2FYT6jUVQnjiPmL4DZMYSN3yHM1GvU36rf4Kjw",
  "key2": "764XvJxDcAgoMFRC94QZ8xpCmwCKRJnDkSYeujSgKYskCtc8p9agq9Fhbxvh9bai8WjsY1oWVig48ua4KnDVT74",
  "key3": "5toY3Yrp9zpD2hPaSbkyqFopp15iV7D3zgYnNBvhXDRwtzQZq3RNfi8rZdEGfFMArbNGfkdd8K7mgaKq8i7GZEtX",
  "key4": "2m9AAW7yzDm6Wy1wMzm4m7yog7xVdniUjeYan3svPz6nEq8yjbRPha53V3iw4om3JgnGu7ndArurjTmi7UNX2qSo",
  "key5": "EtCZrePUN7U8oUV7XzyNSQRq64PVNZg9nyZKcp5YnBCTRV7P8FAsq8wBoXCTb1URkFheTCCqxk94Kb4gfq6mTQ4",
  "key6": "erfQFMSJDXnb4EeC7fLcfCpgZygsNmBGMv5BY3LrXw3gnYfmzGGuf4Mu6QgWiBHzfR95253r5PhqFXRxWwhAK1G",
  "key7": "4VJVgxo2rrEXspn55h8XPRajg1meZfjcc1jaRMJwZ5Fb5jguqEH7snv4yyET2Cw5fPz7zVXmp4rwPbQ2bgexmQY1",
  "key8": "5n9JLwCVyNbZ6xfhSitq9SznawCgBn178DV2m9pnxQRfhLDqFganRt3aRjyJxzync9trkeRUdsxEm3RPAQSiYtDg",
  "key9": "5kwi6dgaJ2ZVr7nGchfEeENVQ6ymFyMJLPN6o3jnxjQGDexje9iBEWKmbnbfugUhuobwVA3L2ydBzd5yL3iC4G8N",
  "key10": "2Qi89vaC9KNfwerDmAHvHUcko6GhX71g4RMz8ayT8bcnRPStjhHxq7K8p3B4yrwBBTxm6HjV7X9XrYM6irZE5Ge9",
  "key11": "4VspBjMgnQqhFgbnywv4pQbiNXX6spp8kXttmod66RcPqD1kscvQkCNoQREk7YvsV5naCJQpXFTevSwrvzQApGxJ",
  "key12": "2th96yxH47aDTnrTcK5EuyQCyhrq5xAkc3gv7nv3cVcVPmZoKeQCLPpYdAnWPmmeX5gCmrCGVhRaTNCdyAocb2dv",
  "key13": "4DniKqzxjZ7fVBZbkvAupJPoYdz7zz7DsVhXyHSDipt3jKfSpSx96Yyc9kFCRQtDXz25FVHD8oQjriwGb15qLipe",
  "key14": "5PJHMQNmw3jBiZ1C7WSW6V7T1kDSJ2VUfZDfvncDKSiJrEAR1gqtK4nUuAePVmw3pbxb6511hYVXyg2sJ5Qam1Wm",
  "key15": "5L87ByE6PmLmFjebaeYR7gDndZ2MUEFnGYq8u6roCnDnsajJNSvQWZ2YegbKRv9wioMkd8NrZAUcjo3scy1U26yX",
  "key16": "5f9aaar1RR9ytHZ6BUJ8uuN2rbfxwQ3ProxNzku4eqwrGieEW9xSQn4paPBA3yS51CQ5iMjTPv8X2Nkg1Wf9Cqjc",
  "key17": "weppbpD1TdmSnLnzKX487d7CcSRbSxVypaWGBqiARL4CwPcmdgwEoi1qdizmv5rip22EVVUukVA4LL9UjoY98Uu",
  "key18": "4B26D9wtwCvzhZdfv85JUX2mwSu2MxyFic3UdJFmsXoKYcLEgxz3QcfRbapsSbvuWN1gYmobewUbf9K1Z9G6NN5r",
  "key19": "ZjascLZ1g2fiUW4KmAGxzV4ueYyCbt6aWH6NxcpY3UuMSdvYLQqH5q8BKThBXT6ojvkr4ZPEw1NuBhUuuZANEsa",
  "key20": "3WM8SWKeKC7K3aNhEoHd2E9BSVo4Xxequhh4m4AvbaepsTRvo9YDBbppCFfkhnuBmErhbuAGZuhmBqatFCqq8YqD",
  "key21": "VAGwcare8Y2PU9CZKzf6GQrhjVRyZzA85Ryg2xD2Nk14wRYgqf6vs6bspngXHchMuVKDWUTUxpj9Eid2XjmmkGw",
  "key22": "zJz2zycfiBLPcfDzAUsBQkxQPdPJ9Nny7oRppLEsiy2mivb6e4QbseWxqaquihcUA9ZvMXamMSK3vLzJmZrYJvp",
  "key23": "3VynQf9k1qCn6vZ4cKyrLWyCoHrkuq45dnRB1X94KV3f1BapRkHWMfDkqxeVwuMsFo4ys6oU7br8YLMCfb86Z7JE",
  "key24": "D7b2f7MKCc8bgNK1gqU9cm85w24DSR2LxPe1jnKtHKjKExh3tLcLL6tDnkKnd78KJ1JdXTf5YpWvf18bNjwT5gT",
  "key25": "3GtZ94AQXAHcYADjM71zt3KVv5B8JcZizzuw6RrTZtuLjpPNpDoffsKYLXXqbgiTvU34E9zm7XvTDnufx8mYhngm",
  "key26": "3pVcJxufcatWzZrdX6VAnqBjUtwnKkRewa3LMiEasGCWivDVe5U9S74saJR37mXaWSEYzXR9gUbeGfFqDmdM6Lmh",
  "key27": "2pCiHeXVR4YoKhrtmhirBEEpgN4enJiuRRdKJaKjcbXuLmonoL1qJ84EXmTCZExDsQFpHvB8MUxk7JHLvXAHHUsQ",
  "key28": "59T8AAQXjjMdcb3D3PkddV7SC1y49en69nooLNvX9MeHPu1Z59i1g7KYzgP3o5Bz3GPLGjV391ccTsvwW1RQXAmS",
  "key29": "5sRK6aToy4xVrzTA6QS5eeuy7pVFQZ2f9koTqLowdFZemwM4uWzHtCLrJYJ61bMAhnNtmn4QAbZVFMpiXDtruLwP",
  "key30": "4xuuHuSPvf7sRUDAAPJ2md9eaoTtLZQ6pmxPssCPhw8ngL2Hb3SXWEYTBdZBE5CS1pT9fok8EJ6rJwtBeBD2phFB",
  "key31": "5dTf2JNkev2pdqegj5UeSS6AnVbi1eKfGM2jM1FDBZncGeaL4FqTX7Sj7nYXYcQTkMage5rAXiMWj72p9Q3FFAqz",
  "key32": "4wCKDyJYLfUWwNUrUSkFgYcyenaR1dZbKJipW4sAFc73ddQETbjHzdEaTUZjZ3u6QB5yZruHYR8QqaNYyJd2BTJh",
  "key33": "2LCeYS8h98jqzuYhCHmkkwsPt6EVvL8eWuUPapWYtHtXUDrXrjVJj8M1MwejZfvV3eZpH6sXawfXfHG3pvYhGpkD",
  "key34": "67RN4YynSwCEdSdGVPqnF64rnrjsrScrDDuBPe1PCopB3NsDad8moFZrdDRmhwtV3B5Vbn6PpivCzBPtAoAM4XTr",
  "key35": "6797zc1CpySypV8yi5a1DdpPG4UMNzaPKuL2s3ryFTWvL3srMPWDZZyPARFwjL3XH8cFrGFzsXFhaQ4mGGggegbX",
  "key36": "31Z1ia5BSme6aZDb8VZfd7YUFMkU7NfXVYpmkBzuXi1fuYyzyvnonjXqgc5nJrxhKZLxbttbDw9gCTKVDCaRhJ7e",
  "key37": "5PpjsDg5pBTNQYzZ9bacPZhVmkcNnAo8yjL5gRVoWnxvpg74LJayWqSWnpd1c4dnEr3jAT5XMDDe2kHQXr5SVHCj",
  "key38": "5jNqpovFCq1tKuRMUZucWeBEUqdMJRvbCtPNBsKKR9oZKQuEpXM4eaHJYXHVyf4rKyscSrxMbreXpPDQVucGJoUG",
  "key39": "5x5yafwECMNrmrxwWUWqr78YDhA3NE6xcP85SfCpod6t925ogStHgZSfmUYWQJnjXzdUEJgrgqhae2EWyyPkt1Kh"
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
