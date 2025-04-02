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
    "2Tc17BiZAWFQTwZLeAVo5vmGRonN93FjwaXGViR8L2WUXET5sydkWamtkMuXrPfpHETp1vY6kMwbd7Md7qcGkJQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BkE2tZ1W4VHPbwCjG1S6qFYkBNpxXjyV1AQnE9jAZotz3HFnQNvS7arFy1gfMyMwQ5YqXzugfQ5rbXKtc2XHt9Z",
  "key1": "5w2zELXTbCsgowP6Cqx6PKbupUVgnBHTaGuqwjJLPh8inFA7Lm4mQ4mUTwke7KZYkZDXPr2mpRNb9gaGYSbc5vvq",
  "key2": "3aDjzsTm37BG4mctEpRiVA88g6chb6cJRDwHpupcFYGKSYFwsPAPEZ1SngDBYx5R6kLKNGerXsdTm51D19yGY1dP",
  "key3": "2CLuKSnsnakx8SUMn5N6gP4z7689iaPL7AwjhXYXXMJ4EWbgHGPGmZowNNqgk5ytfEvsYdpwQzqQv2ysZ5GwCHii",
  "key4": "46UTbhpqmnvzzaxri2kTzddKsCjLeG8MvXoZ41XspLbn9gYZzgiGP2cBdgJnqLczgnedxPPvKcPrfAGuLT39WnzY",
  "key5": "4tREjqgWqBufGDn4u89Vdx1k9ixAiwfDBvjAkoAyYpbhawRiYSiNDTuKLmUNebmnX4kh8d9ea1ak6BCGZy8gQeCG",
  "key6": "4rCLdMjmz9VQNaLdpSi8FtBx7DMV6JXDNK6vyLW11SSePfBv6ze2QLU6Q1uknNSgT2RSUkxM94QByqcM7mu1Nasj",
  "key7": "5EyCXHrhAedyDAU7u19o4NLfzFr7fFpeGg2sM28SNJAc8yjFvSSnrFYRjVNjNVxnYh5qZwyeA5nnV8X7uUVQfSDs",
  "key8": "4uHKCJY6ZiNBJeejvGmYVWhT4ryWRJWujz9TQPsrZMsDUMCoZAetbCcb5r1nuYct84LmQJ9CGYMuguWCC1adp1S6",
  "key9": "4ujGwyroWxxRatHgTr7cMS7sYzWwTgG4jmRYeYCT6hdC6tMcJsCZzV1MSqThgmUcAQUp1Uq6x3c8GGJgMa14VTTq",
  "key10": "4UPb75pr9RRoJAQjXnkCegLbDSRtEzoPNYmKzo746dX34TTTxev34Qy1LxXp9EdGE28SmKbxHuNsn3RgxqzKDtHT",
  "key11": "2KEWN95pSkUjFwPgsHzbxFNJHq93iPiyTBW5PnkyrDb6tfkBHSPZq3MuGvttqXRZpmNhVN7FFRD2aa5RoxfiNoTC",
  "key12": "pHQK6riSWtt6pDXb951PFBKPgAJdkWVGcATkmyck6ZmkZp1uf95Zxhr1X7SppbwrL98TAzor11UPXUWxdGVY6sS",
  "key13": "VVb8pVdzMc6122LfqzbVB8B2BNt5cK9zLv2grUiFHXXf7nuNamKVShqT2aJgaBUbUPsTa7y7ejTYivWAVU17snp",
  "key14": "2chWZmSVUpPzMuR79YmE6cRbfUyMS4jwgcS2QnxseUYGxKpv7BeCh8at9ua75bUTtMY25ovZraJQRySwGzc1Bzmp",
  "key15": "5zKASSdcTmS35PBDMik9aidffpWqZYev1bunfGbkk25WcFMPpbwPEbaM5zukADWg4oQTJeZBg9TUmiuuv9KjVJta",
  "key16": "5L2kR6oeuTsPLATLpjNbPDXvxTJfjaXgH57vFwjsLvCe791xE2nt4C7CmygqbbPhZRrsVamGwVoZhAU68Qqyd6i9",
  "key17": "5yswDnLrkw9R6psgTnxqY9B3FAQXFDfQGMZ2Pv5iPoRCJXZ6u3Z3V1aWJfWwdEJhzqBFyV1dtZYMKsgRS9BD4cJB",
  "key18": "3CMtpHwf6knUjPUCepddK1vD5sfH8Zusv2rTtSiCT7u5NJD14qi7Cou7GAXXABMhB6GNdZ1imAbGaKbX3higFSwS",
  "key19": "4eSVg7o6cnKqcoyAGvxASEjSAVAjsZTmVniu9CFfC8gQMjughReS32gCQYAq2pj371Np7dKvR3nkMSbmSooRAiER",
  "key20": "3mmVCWv5WPdHSbvmTQDgB29oJjJ7VzAM7x5YmDnZT96V48jLxyxJdefGxkrNxCEAq3cAHoaSUeM5HQpstZy2K4rq",
  "key21": "EZUjxLB8JwDwQUdmU7trtaqUPfCE8Z3XZNUN1bpcMWSTpJwawErNfNGt9Lk4vf2zLDCdRGtoJTgydF3yJrkuY2z",
  "key22": "2xnzThH5i8SnN2i8aLNfv6sovjSTBLESzsDtsFzNHvYLHRfeazWU3FnxfP81p16TAev65RnxabBCovCsqzeUwcqb",
  "key23": "65KoARgCXjk8VUf62onG2hxiccRV82ByKqahfJuVmkdjhELBKCfvQczfaio6hSRy7PjUjn2zRK1BMjTirQSCyDiN",
  "key24": "4gXi8cRJTqKdKiFdUBAzqzMrRxFQmdAGCy1ThwkmDN2FDrcYFY7kxQdwyKowo8WHDaWNcZLtjpuef4991HXm9hAL"
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
