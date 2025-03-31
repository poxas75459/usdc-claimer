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
    "61Z5erB5Sd6EbHoMsAvikt3M2uLNcKzYHj3hL4U7BvTryfusn2ARCQjx5Djit84qRYkknzqik5kMJJe2xL1LhGSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AavomAiUHMXoCb7oZ6vyeAn44A7eUF9CktkoLcPQbFtjfmrTzh7PqNJ7FKG8Pt91iTAedWvDSN3rYFx6SUonSDZ",
  "key1": "4qqmFZgkkNGKw9FZ1JJ7M9HgSfejv6STD5myv81FgnmiCeqn94L8zJCcWuYWmVcLwicFANUAkYvKwuCNnsLJ9AbQ",
  "key2": "2XKWHEkZDbyr4uwQAZTgYGwyEu1zyGCG5pT38cxQokntX1gJ8fnpAaXa6ursvEn2ZCkqCda2YTSRx5XLUM7Ev5sN",
  "key3": "5Xi4uaSA8wsGhcWAtvViVFJdNAY5VSg4pBaCkxUxXJ64QfzQFKJhuij2YSRQ5Q6BBTsSNXncvvWqY84EP2cXPQKh",
  "key4": "3DG97uAf2u69P7nksMxaKfRjpUXwxmUAajfyH1wLN2k2YLH55bWDKjmtUVv4JL4vQYVPpmMyhE9VKfzcdLGcT7zd",
  "key5": "q4Xi2Ng1EZmdMdkvGRSoKZJf2QF8Gnkq2bxZ4G6rXHrXmo5CVgdYGtSdQorT1kaBjHoCdRwVbha3M5CiEQdWiPe",
  "key6": "5xacu3uU7zh2VBdwt1A6rFmwoYaSm88PXKKjBG5G1bgJggKkcZRb9CvgCn7FTFTLREooBJWav8SHwHQoV4P724Nu",
  "key7": "278K4vuiuYg89k3yj7aWzTHrXwvEUD7DzejYq4JBr5RkSTTfqfbsMEjHiSa6tjeUSALypFC2G5Xggvw5N9XCnJCY",
  "key8": "3bYHKjTgEQcz8CJwshSELPksgGNQRqEwdhykBZeaYKCBn1PLgbDBiknfdWLNzZP31kizp2PQPD4Mzcvw4RWwesTa",
  "key9": "5xxGWNs4FD3ieBwyqs5WeY4UZ3H9KzGvF5zrmam7QCuaKwfwDEd9DPcyXB78PJXTfwFPX6LzZoWh81eZq8A25T2N",
  "key10": "3A1btkKr2Ywif4jUhyceACAGN27jCEd6d22ewUtN9MWyD9FnmtqhicSSkmgyJodHsCgjNcqVcrq8xKzsJKNDYah8",
  "key11": "67BNqSinqCe1GN5eLVTVJfpBZtenoiczM82zVkQtgPfxnjWExS83WMnvFW5CbigQS9XsGDaENuW91ZPn3sjcKgoU",
  "key12": "4N9rFbZ7etsD6dd9qayE6CNccu1CAtSwDE1w2hCfsuzWG8AmV8huBnDVKmt4J857FesSikGxahzj9XJGMZXe93Bv",
  "key13": "5yB2Zh88bef6tkyMFPyMa56jsrikfz1btEtxgQHdrRcR5KX2cwHQnE4Vf9krT9dwVnjEeFNZBxGD9P5eFJLZrE9c",
  "key14": "4Dapboyky3YRZyQrf47FoBJut2kzJgWpSPt6ubXE59QtJmTSYwyLYhZPMtUZdrpAWDP7sLTp4z3oMpoYQWAWZQVZ",
  "key15": "r5iX81SbL9gDsGBtSLpW8Bv3nkXctEPWzQTysSoyzkAhNReeNEGHj9asdaaN7rmjMeh3v9z9BJk62BsZU9CUZh8",
  "key16": "ofCPR3DdUkiiUECqQkHGfjEwdSViBYKeoz1YRYrL3BLwMYkmgVe1R7D2P1T5fp9LjcS1vJqC3qsQzU3XmjJhWd6",
  "key17": "ZD26nb15QMRHHhGtp5mBdfTt9cA6vLFj2pxtL6SpCnjEm8NJxxpkJppsMvtg4tbXMhbiskbKih6t5uJA3s5wt6A",
  "key18": "5FpEJGy28WPtzuEqrAMzAqZc3b8jg6AnExR5D4vdiz1b2zi4XnJkDUp21ByVgUSyt6fKH5RvyM3f5wqSm2Fiv73V",
  "key19": "4vz8NzWjadcBcTGYuu3sCuV3BQ6U9N4fenTs63tHSAzYFXPa6TP5QcavDFehKRTBNw6vjZFCXemAE7ddRU6rsWvo",
  "key20": "2auduSAspWkDAy1rdrx9wyM5hM5D7mmeaWmQviPrBSyfpCFyEvVYprRAKPDCEiLZw6A3LXS21A35Lzgo1Xqb6Nvh",
  "key21": "3UgpKdBqmyUzZwCXhcEcXdUpbwg6PjirSY26ZrbeFEsyHRmiyuKG3tUi8hFVxrsofLuzWVy9mmLokcudciiuSeLU",
  "key22": "3gcNMtQU99KkcKxwM2r1iYgR8mQ3rbj5HrGhSLUX4kGyXo11EZiJfVzVPrhJQUd2ZRA9XX7HbGrMrKmsAHjZWGQw",
  "key23": "5Z8LfK3wCMpydt4pf394LWzZ2Z4BwfEFmw9FxvSnUsagJDNWnzJ5j7LfFzaU4obioE9DfraV5SLjznUFHX8PqfG1",
  "key24": "3rtb7BiBLmo4rnaTgyXVpwsWdr67UDtLaxiFTKzQu3BMnPkXDq6aaxdkg2Bn5YAzx9FrmZ1N9r75FuAx2LnS9ftc",
  "key25": "4RL7QwfToCVXoXDsSGywYrphfMa8CZRbEHviyDPxXmQZF8xmY2MGM9B31CDrwVHP3to96fqjtUVPpHBDNh1nHrgq",
  "key26": "4N13ZJFmTKwHXT6tthgmtBM4GYr5Lv1AKmkB8cZHr6ydqTAwo3eEudnCbfHtyDF4mRvMHTNb9KjAR9bnY7besPah",
  "key27": "432Fpecub3MLzfZggZ2xFqCCvtCAkoQkttN9JcBfEGZaoyxzhZuV17rqXrB2KHkkopYNMAHrfURWqftdJqHY834D",
  "key28": "53fJGjDutwa59t4LwBMj4cZ1p79aE8PfVc76ZdQXgRWfzeiKK6idQPXEPVvp9vYy6AA5VPY1o4Yn7Mp9xxPjEd4i",
  "key29": "4Ke5dQUHXGbj9ziqFuGRNu4ckZuToSHU8zUcfFn7jNUFAie4wvtyajpFYWc1Psz4zdscUrF43fio5eU3WuEboyQX",
  "key30": "5eyqgafwBB3WbMhVtsZrCTqddk7Z6gF7j6UJ9SQzRG1BTB42bfUJ1zdEqxP4S5GbAf7CKtL9iiWpNHYYgxiBkZ6V",
  "key31": "3ForyJ5iHWGHmCpekb6bWhVrhCPqASojKTVbQYV4b65RXZF3QoHZS1kDFNfbqkoxehYF1ZdayP1DgWg37ndPo7Ju",
  "key32": "4x6dLRkjfMhomHf11EFa94Kjj2vVyyciq4LcfVpPECgVFo9hgpjhw1USbpH7yjfsuq2yXuJJ6ehez6Yj1khWZntR",
  "key33": "47RxGHjNwWSyRS2Yr2GwydjJs3xKQDtr4sArHgpPejQH8xpDXx7TSTLs8pz9LzS5LD88a5XDTWyP4MWmaEwNeZz8",
  "key34": "3nVZqxuqnErT2i2SuKwCPUjp1hjFHsdZqUMtdcGsGSD5DyywEybR2z3K42EWYdEmnsLSC4Ai6HHT44ynLsftcPLN",
  "key35": "2fWk4XDCrWYYc6oUb1Twvv9RmHqcSPmxDZJkxAzqPk7bNRMuszvphgeZdesBwWi6b8rExTasqZSGzHJXcBdj9FLu",
  "key36": "2KGyAn5Po25JbyL6VQB3gTszWzZUdCVJcjEE6M9NAEJWPKELXckfBzJBhkYNeLuxjSnJHAKw5QLAUemoq3pyR1Fi",
  "key37": "2TZZKbc5RbxmQzDxkhcRP1f22wuWodz9NMtsfxGKzUzk6SnWX8ukDeuGo11oeFRfruqcNaYLPwfDmJdoTpFfoBdx",
  "key38": "2wFcqVTLhhZ54hAA3URaM9oYE5r9pMefDRo3mXe9x2dsrKH1oMuydeCWb5FAcZQBYzmaxv3iQw8ShcPgwgA2Nnqs",
  "key39": "YXSWYuhu8YZJ3xfufSPzJv14AwQYypu175Z37Go5DtwkSSMtn4VW8tPJQQHMyL2TavPsqqf5J5wpKnqiujcwqez",
  "key40": "YgYwFVkdF2JzBjKQ9G518ZKgwzkGfX1wpLmXqD6Vs9GBG2BE8j5LSv9ETmzWFGd2JFyq14CMW5Y61jd7Rgy2Apz"
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
