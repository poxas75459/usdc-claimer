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
    "4QDuWvwqimQ1fNTyEK6my7rYXfFfGNTPcqcEXNvPcdNxXnwQqH6uh8UYPwETwNyNGGZqTnkY4U84V6xbetTRAEhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNa1hxZfsNPuEcn8vzQ2FGkNg7cq1N798ZYsb35WLaLY83T1sBUAxM1Y7288U7fb1YJrJeGWGccHJzB53eEBbPp",
  "key1": "67WzBgC3E1ERdvZL6SUUCwMtyWkDuAhX6gSCypjCPddDXJbBu6d7b5uqzch6TEbqu98pj5omRF5a2div9Xr5HqNR",
  "key2": "46xfeUiFMytqPnw3e2XLyCVycRQHPfscXH5TLtjs5PgnnhK4YCokQXzHQS1yURL6vQYiBysbySPJPEw8jsEg83Qr",
  "key3": "2CkrJN1KeyHa5sMWqNPRgBqmMBfpE8WVu17ErKT146b8wLeFovDKBHvtPv75qFZxSievZZzT6tKDxkXP5sD5p5bW",
  "key4": "54NK1g2wteP6dS6yyUKP7TfpSMeo42o2PHQST6H4CdzDauLNsiocXDSfR2nvRgVteE2JUSWeLCgBmqdz2MDF3fds",
  "key5": "tGp1X2Drbji8tPeFJv6ExpGxDjtxbvoF49aDeWBS2FRbX1QXqyMwXSDemuJeJPZaVRrA7x5vbLp49JVbGFrVjaz",
  "key6": "5ks7ZFimX5TtH9Zg33iH6G3MPUggU1LrDaivxFRS1mjBRGAjvKZ6nsuBiMB582K1zugZsRTSTwShHKimL2kJnUV1",
  "key7": "4jN7haohdEZpZCwFgdmD6oz9RNBXUHWcTHTu7nXAi9YdqHLrW8HRi2J6sU1aH7xcsgqFFc3dLCozhnk7BFiHpVAC",
  "key8": "66tksqmHRxdnnnn7qwXRVtS5FCpE8m1MfTS1M8o4xUu2UvCQpfq9z2WLpeddxx8Q3WjKCGTwhWNSNoeFZjpfrDwC",
  "key9": "BhMPbyKeLsAqXxxHHZ8M2uhLGeCcHkf9kGG6UpRLDVj7c49bFANKEMgf6ZZDFgeqM8SCAovVoFuLbfNPCNe2G2M",
  "key10": "3EkNWY9rK6QG94BtABCNw39GoD3pRxUsM7oTrC413kgpfA8vHXqnutEGbGzTE9vCRbDXYfqxC1zjKXFBRftfM2rd",
  "key11": "5rcxZARReGmB98G85o8poAqH4jxSwYw1QPPUMfasCtNXkY57PRBfDagfQ3XLw7YEZFjCdvQH7KQ2nq7ehiTcpGAg",
  "key12": "3dehKVRFEeCKTwY9GoSbaHoPU7PnZQK1PStefza6J1YrvVwtaDDajpzCVUXT4xT1njaMvzXRhwhGMXW4SGPbDywP",
  "key13": "2LoreMaZ5zcoqZagV5kbrgQfvGTH7agZ9Yq96YSVv69WvmKuQR7cwn7iCy4TwpToucGWvRgTVonA26GJjFVscTPG",
  "key14": "3L4NZuaV9Aej8wJFSc57q5c294FTsz9F4Jm2opJMViuwvH6ah5n9TV5k5BY34YKocWvjqCwxZ6Asm9SQf6zDXAMd",
  "key15": "3hgH6jtTCSgTtoGqoZMdu3bRDFffY8mXuwZUukTDMUReiTka7khGwrhtTKiHqXKgXqKepXqx6EWsGjApt8sCvuYo",
  "key16": "2wTQf4wdeW55RLtWn4bLyLFpiHcvdeya6hFxwCLhCiSLZ67u9tTujFT1JPz9JVwJJVUQJcoaxqjfekBisoTxwcdp",
  "key17": "2XbCHV1rWRLXi5XymW8E9QSxpkrLynDdwxrvAdek6x6X4YHUfffnpTXDkuSrxYXWVBEbRTUmydL73a1ztkGGfJTK",
  "key18": "JGo8TCvGT9biawze2L7g2MdxsFZRBppPzhahKVNpcKUSJaKaYorUa5FkeNaYyMMvFNpV691J6DDooy7cY5yW5Mg",
  "key19": "5DKQxhgiqEHL89BPnP7XKwKCQMg5fkcR7gqejK4CVtWBwkkJ6smScvBXm9qrCxKFcBnaiUF4n3x4tQ9sSuyh6HQx",
  "key20": "B6uaLUfBdoPRTwigd8yi1LERZk5ESjFLyTPQQJwcfCZHk7HWKgKCEVd5dgtfZZxeH3MU8DioQutHSjmh5UqGB8J",
  "key21": "2Cb5fDMvEtkhT9F3meqkFpiXRTZHAMR5hfPLstizEARxrPacjWbpovW37HNryBSDtqkxoiURQzbAfbDxvP2Kox1k",
  "key22": "3zp9sMn9q61kLpR7TEcxSE3bdxXKApkSfUWURv57vcHWF68pYYw42GfS2xKekL96HbKF65Uvg6hYYavJPa9DLGUG",
  "key23": "5RtKocHXTCSgoKdJCh5E7SBuYP3psqeQw1sZscfY9oCv3pM5K6pabwGssPNUUaLKstuEegVh7LXv9cATSkHHrUhf",
  "key24": "4FXLGXRdFUVFP54edrmqGRJsayWjRCT4sv2tKhoimgEr6vLMncRQyfqP48L9SFWjpmQ73c99zLpa9dMb3r7cySx1",
  "key25": "QnGJgxqgqbNrbtkipCK3QupMYWuS89qFCaua5vSdNKPMTNJEfQDT8H9iwdW3KyXqKDoKcJFUqKUC3mkMgFWMEb1",
  "key26": "4krg6883JdXFPzubE8Rzsd68NgP3CMSCGrSBzzoiJB8Q6cfmmNDHGYD13qQNhaYQ1D2sGrVoH96qoSS2Sz9qmsy4",
  "key27": "3F9EKZ688LKkNBaTKKkoqNhtGjCpDSNj7QU4MrAuKiZhJxabMAfrNqHaxLhjtgQfsXJBTb3mh3SKUtNYEmxo5PhL",
  "key28": "ZTe14KETwU51fMWbubCRYpBuunp7tasqyJKgwFpM6fksDKGshFnQWFkCpKwwYBcLkcY7HRQ9LphBswjksCF6trU",
  "key29": "5B7y66bfEHBoTor9ZRjuipWKPBEtSEssVvjB5WP9SCm8ZttzPCPnPbvgJbimMpjAEvQv96gPzEavnFzdskvNJuTe",
  "key30": "3d8V7fUwRffigSiR6K36qFXARSPaAPG2vHoLTMwAbxjgbgVNwKT4168DwiRFm1widuvfwXn3Y5tAwj4udpjkyXXn",
  "key31": "4FdadxeFkmkevGqhGX82BkVEHkP26qgyFz8BoNpowSqPiFxDQYXCcqMtBQN4xjiwnCKs2aPB53T8bSw55JezjB8o",
  "key32": "4GKHHwm1pp25pVm9CtvD37g7rwH3CB689SnAfLS1JUGbgTpUM1yZetDbcpmAcVE8DcvVph7eRK1mGuF2dczov7ZX",
  "key33": "56qAZoBkrtw6ucbv2GR1iuccnEkXMeLvPW1jhcesJcTF3GgvFHhK8wXBkTWewp4EAjSZv7UikNkMALY7Ac5CxbPA",
  "key34": "1SxpoJxPGAyDwGJMSPmC8ChMQbXuqN5tBXioug9jUdvZfdMWUhEEo7VLzNNXwaP8GZA4HRdeNkuxcvQiNUzMmK8",
  "key35": "5bz4KrkArUNdnz6KBnChqADhyQeTjBuLL5eVxMcBBHW9M8wkPQATsKDUWSeo91UR2h43mR9zJsbjQHky4UH6mi1M",
  "key36": "3jT6A8jTmSHvufLQmCkgLF1ACCQ4JGgWeVdxnfDxQpnraoZNJKZfzQjC9iXQsX34BFTYnJAYwSzxQZfsGNWwA8Q1",
  "key37": "2RAH3pNDRbsg7ygYKFLJUtSm8W6ziLhJSfVHKVURpdQAnMVtfhhrZDPdT4Fujst1jHjkPvxw7kCT5wJJQ4ebJhWc",
  "key38": "58iUEyEtNKoD3KSTjR6kMeiLqitPBZ5D75jr1p5TF7YHrguaJShZgVmxVLWpJnd8sqSTqCrTSwtR8uUJdSuVi332",
  "key39": "5Cm9TDUk85pYExK86JQqTdVcgrMDBR6qEp1vDAhSihTPxPM2XN3VJ4QKPuzVS4izpGbrYRgi2P71Lg7CuS8RzzfV",
  "key40": "rJwi3nQh8kdruBcpSgVX5r6argHuDDyHcrMCk41CW4oq91dq4ejqmJhDThmQua6HEFYCo3qZ68QpQiWWtboueoA",
  "key41": "2B2qvpE5Y7G8xUmFxAyiojPbZKwPn3FdvtKy6LM2H2DKrGvwZD9eEHU4VYGZo4E2MLKKN7hqVP6KaEUAVeAomzao",
  "key42": "qP4fQT4sM5CGohMakMCxeAg6281KzVQbeXANQM6GieQ3EqDLxTwafj9TbQwzgzj8oKpG5LfWgzNsoehcPMwxYV9",
  "key43": "39R5DLei1zv46jp7ndTSQagmFhVEwJv4EKS3rsvoSAJ1jPLqfQgfN9fFrS2noz79DqhGx8EnwZcVdNLEVJFAFKfL"
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
