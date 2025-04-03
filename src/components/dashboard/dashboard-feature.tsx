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
    "27afbspW7C2wnqJ52P53tehSHyT4d3KDtqtPEFim14NHV6AzmA1JHWwN88J7Jch8K1r6R53LCe8M6SM7TaDMPv84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obRw3sffbD1BdBPMByiNBTTM9Qsvf9cykG1a38XoF12kcuKKW2hHS3VKNibSpqvrM81An44W2QbHHifbEL2EFa1",
  "key1": "5YEip6FayeDN5XY4ryMkBbE6qvAbqMUNjLJJpzHZGhoGVKExcDzzr83rFVfQXr9QDLS8W6fsRDwj4SAVWtiS3JfU",
  "key2": "2saK4AEwdcGnRuemQ5EnPAk5NykPRppzo2wtfwcEMtHHCWVYZRJWFH351TSRxbELXGN12qbvXSCPozqj36e4ppet",
  "key3": "3iQonDhAfHctXvK8SBVDR96Vqd9svtMXEP8PNBLtC6JeGkyAtLRShX8WGRcCZdezZzX6vopuX6A18a8aYeXwefrA",
  "key4": "3HsSwE3ZqHPPVVJP5bfoPY9X9MKdsh74MFgskLh4Bbgp6ZHhzPSnekgkUwZF1VW87djq1UyQ2c75EcaZwo7gG3PC",
  "key5": "3EN4PdH87wayVsEBc98BGnFtPL4YqTTeUUdbdRccrGktQAtVn3fnpsy6VjLaQR2Fi9Chu4Vdj64EKiXDQtoueVfy",
  "key6": "VHnj54h4eNBNi1jp6XCc3wp2ZJmozqXEML6BYV5rxFmW9HSG9wKTLJTZmv9cc1Yt2zbdGbk8Hw3bnAjWo1jLUwj",
  "key7": "2QcatRzvEFHQdE1b4CJxPLxqm5wAEax3nf3o5HopucWFmk3U9E93ULczTPzTtkPWbFLA7p98DtjhUuqdYsMaNauY",
  "key8": "4fA8MD4XAwdqij8F4o3Y6fYQzeRqX1H1envXwJRTCweqCNVvmZTCvZp5NT2DFHsvpFkWmbmJdjv3ZzcsSh6C52FW",
  "key9": "5HtaPv7cn5pngVZjMw6GDQzbudsMY7yMr9X9mXQWrreBUDRa4mxsHMroKFYFNLNQRxaT2BeLMPPyPpSDa4EttHQ",
  "key10": "2bS3QRVXPU7ZyR3HeSqSNuXiEgGhtfymTABDWcnLmmxQxUdXvzAXr4EhsWD1JnrzpXzrdjgrkPWRfDCHArqmaU2r",
  "key11": "2SUu1eDnNjipCpiWLmTeJejr5ynsF8Tkab4cwb3J9nYTCLyf89etPDVT1AepmMMRG24L6JD9L2SRLJELJDbwvLrE",
  "key12": "4jc9bxTW1d6Ak8SdnXAd3kKoPkYJgZ22cBnyeWCdo12W18A88rKx3k8n1VpS1MhGXiijveze7a9FBmATdENYKoMn",
  "key13": "2UC7ZUM2URtFsY32g3sgaTT1ZiKjVTp4E9uFa6YZsAfknG662M6PkHkRyAfrmnAqE6BddYbKiTwviVp3uQKJMyUp",
  "key14": "4XhbHewPqDvo7bQJdBofxkn8grRfQde4WWcmMnGdqjCBpNr5zeMnyri7rJpj63HyCLZUrnMUvyHcs4saDvqhio5g",
  "key15": "NhPJzYBLrJbEwNn3h1RLkHbV9xt1goEC6RDMb9HpPLU6fMnWGfbRcuQu4v2FAZBmKQtymwmMfwM9vuq7uwM1xei",
  "key16": "3FRiSbLewnUEZNPNWCYxMkbr7CeLRVhTdLAQmepUi987Fazj2Au17qkxjLAKpF5yTaRY1H9beGZYQEYnbpxh1Ezx",
  "key17": "5s422uuCwPzn5B7gyFGgyYtXE9o2YYjdzJpW78TKeCLQZBMbKRSaLC1KpSiscAvWrRY4wYkNJWPdstzFAm4K39ns",
  "key18": "25q8BCoUVMgooAtqbFZ7Vkqa9pd5RBgmjFgL53UZ4ssYscZesDnEB1tkrrNqHWppLkZoSLPL5b2yUEmnq4HPKG2V",
  "key19": "xWciC5HTbStQjGPvab6uoSdXAHbhPJURahCsAR489JVH8WpKYWT4Qv1JABKTUfzRStBF8P2HdMBSfsHeFQYUGJ3",
  "key20": "648Nup9jKUuxJGrzZfDW5LPPg1kQNcvxb7ZPwpFZUmsEMb8Hunz4RCzotozwhu2z3vjFZSprMMyyn9ysveS2TRJ2",
  "key21": "3hH2NXCriN2YEeKhSJ5oSfwiw1mqXyQamv96ehRXwfMLgeFHJiYoeUMquwFSvG94Cipx1tHTfqVvAFeNs3TzTZq6",
  "key22": "2XUZyWCn3seDhdgusPrQHFJvb8PnEv5D2KMeRDf9dBquw3FdBoWCvkMLsrgpXvDLAYNzBHCK3sgkVXxyaUbNt844",
  "key23": "4bBDEhu8ByuFbMist6agBADuX1TfXW6A8BB57g8BtK1uXFezcPoRci9Hteqth3K1RHJZChNEvmNbg1CeA61Qm37a",
  "key24": "4WbYq3B8mRsesAFB8J1ZSQqKB7GzANYRQJxwzhiubYFAHcRnadr17bmFGzJNVzgXQPc64jTggGUN3HkvbPiGnQsU",
  "key25": "3pbaAnFUV7kWLA4mAyYH6BAgLiY5J62h2v6zBzQtr9Aq5kAy7v4Ucq5xRZhc6WG9RNWSBgNH6Vz4SpLxyhR3nLnL",
  "key26": "3DZTABcJG7u8XrkNARrYvZM2gawxxHqHSueiWYF3e8VV1RPDBSFfZzu5N2CWMyb25USwuwE79RmjpKxwfqsL1wcm"
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
