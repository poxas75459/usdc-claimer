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
    "355LL2XrhDNr3A7zxuVj4HqVF4hWaj1jEcYrP3TfNHJoxeZiXuFRNkUwaV1B98LhuQThuwjBKhUUUb4rKbVBxSrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5cNqfD2bHBZyL2CTtfxSDAqNBiHQ9ZbiPZXPQ2a2JALdDCwd2we7VsbDDeuXJXeLx6tDHUpP89DiDdQNVywY51",
  "key1": "531JTv82KEHTY4AJ1PqJpBNjWBDcSdRmrWxiw4gdkqopb9Fy4yuGM3yseDjRsnGNeWrU7HRzbdPvqxA9FMoEofxd",
  "key2": "3fnYduWYm4PN3KGQKWG6rbq1X9RyGL5zoMxYNBCGMMfTYF94MGSLRDAJ179dAjPUnpmF4SAGr5Y3rpTRq7JPnoxL",
  "key3": "dAC5NULkjvAD9jgYpnBiexzad8Md6d9mKLf536nq6S32FQkTCbcP8AdCXZBwiinQaDkM22ghW8EEWkhmRkQrc43",
  "key4": "4Fz8pHmWwniPxLY4LF4f7tX5kyomaG2SiHBWkdJNRx8mjsmb9dKQtzFvY4UEBeETKmAVxfNYeCduSsasnPojxjDA",
  "key5": "2aJVtBjjeFz7XsdQbZreaXWXq4f2ZV7JKZiLZ9Gjh2vP7pN3sAetBhEMsNyZ8hJWNnLtv9icjNkktUKcaMagZWP4",
  "key6": "2BQwQKkJ3nSHYcwbYNVcU9fyYLixRrCvJmCJXSkGnncaTA23ZFEracJADGePTZhRGKBcoardisAGZeqxMnwGPizt",
  "key7": "c2qaNciFbvYJbAHGkEMjAF69972ZcR1gz5e5cFbNtLDPhWGoLgASMPhGrTW8mxyJpFh7dFntYNrjUmBrQvWQB3R",
  "key8": "fXB8UXNJsUTEAAABLDiEgTygX6dnTTVur4B4ymENwKAj8pDqSWEGnrW9c8pffEAyqLZSpdjWHVdERVd6QnyS7U4",
  "key9": "4UPrCg2Bi25f1nfwgvNXiF6i334mGuEjoUTwb64L5reKGsJfPawhU6NM7US9qUTUUo3PJD3Vj81rPk2aXkwAm9VP",
  "key10": "5YuSBpbeGXTnBQrgW2h28sNFQkpdNiWKhRUoiZQPne77txPcSEyAvj3zApyCv2PZZwTEcw2zeKEzxK2aPtadiAqy",
  "key11": "Mm1GMRSswm92jWfhGx9KFtDuhCPEGSuJ1crP7ha9wTyqB2rZppebwd9Jx9UTMXdRaPGSe6Pa485EumHpCydxzHv",
  "key12": "44KSvhk2EKmHTMeysAKkLou99cvafb8Xs4zLZjgN9edfXcBAccubyfHVw8uHScHRnTYFty8TZVD9wvfu6nBNRphy",
  "key13": "5nfvJbGyLYg7urVALuN6NEs5WtjaTvcx99hWdxZagMqjrgBSpNeqhzygg5Fjudv2ez6394HbYPMEAZ437huReEP",
  "key14": "3dgGBHa4hGHGrnBsEAt2GhHivwbZBtg6jSqjiorbCqJQsffstTdehUBxM1dAskcUac2iDZqARzQ891AsHHUGj5EY",
  "key15": "WyzFDwkzX5LmsG4PY8ZSqt1oNqtgVmKQFZXbtkseqJdQ2N8mAqczT3Rk6TqMZzhWREHMeuGA4jM5a3ngBoFSJ1v",
  "key16": "gbZP4cVstissUzLjM7Yv1cgKcpthnChddY8rcSGsW7RhY6TmH7AeMjujXZu8bzCWTp3GQ1sWv6itT4RqXQbdjVS",
  "key17": "5ezp5nStsgxXjg86DYm33AUiYP8cANLcAUPpv5Eo665pNWVLWkPXVBSyrer2MnC19L2dQx1VcVMWPTKqGAtmbZA9",
  "key18": "sZWyksyQVtFMaMGKK4qf2L8BJq1br5gEBasdgMGGT29CA4QzLqi2k1fBAhZ9DqZfCjVngud48HBrXbkoK9mzEqs",
  "key19": "3TGei8SeX2WcgfxrKZXaqETWkciJd6FxdwtSRDvk4gduLACvFCcs2uQGT9gvdyQZheksoaqyYSw2Gd5Zc81JU7SJ",
  "key20": "52WmsoD1ASjnFUgVduP5n7cq7PkgtYoKujKBjJQHEQksS1rHvSJf1s3HLbsVVQzfpvk5xA7SYkpaDG5SvfaM2MxU",
  "key21": "3iMWUvWFLhhujefKELzTFbCPc7nDbYwkJCN51ocmJoeeXKTYamHPessuSVWWexAzphNoT846bZLAgjof8pQWqBka",
  "key22": "41L4Xr2vJMfoi2vgV86CDedBDkbHhzXBhW98GFx4P126ZfwsqHhBeY2PvGwP9WnmyzgkjLdUpESLgtr1bjWfVDEs",
  "key23": "dRnNyrus3iYdDMNL7Xf2rSz3ruKqeWkr7ohQs8UNRf4Eush38DMYeFPWqvEdRxZf1y1tHNdV4yvTpLMN5TLQC4n",
  "key24": "26qxAusYJpsewSMWtGHcjs4DqNJmpPjrWp1yy6jXmtCAQ3N1p2bt1JvTVAKMej7UYmQfZQx5VU29JTgr1fgmXegd",
  "key25": "56N3j8ngdqUcecQkrkdZ2fxDQqHtXUDcqYKZhRxhQo8imD247mYyvLZSpDwLDzXHD2NptEw5rUpVe9DEoEVFUDqi",
  "key26": "4yFqGnpVfzw8MFpM71gbZ7vxUN6qnvRVsEP2T9sKsRmAmB2Yiafir1KvHaYZVBhtyvZ6NwW3vPaZzN1MmywqnBRM"
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
