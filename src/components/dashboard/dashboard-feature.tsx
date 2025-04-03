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
    "3tgLhxh9LbaP6hZ2K2ctGzoEmJ35jnh8E46A6ZPMeS257Be63RTu57s2b5gcjZEjYoAKFmNJqc5JKfnKRtY971N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ryyikY1U7We1P6NNbjmYhVoiQBLwZ7RTWEVaTGUN2bV46cj49rwLShhkkUgsJBXEKEZiTs1zDBjRQouCmf845Z2",
  "key1": "MX5gDXTmJ8n3e2e5R7xGhS4jMLsxfWr3GwJd7MC1Hf11rPC6wqV79eByCsddkHi2zNJXPSPRbarWJd5vwetUbgf",
  "key2": "51SrfjVbE9UVf1Fnuv4fadvFCStc26KjLwsB4WTzwSgzfsbh59K49vFbFUzf2T53ZZMGAZR6wNRZdNTtxzVYi8vy",
  "key3": "3E5cgSsZzxiufHWehRAEaYMQK1i2JW8Y8iWf5PRUkgMLU2bLQUkE8oM7Ltg13mDUtpyiYFG6oweCL4aV6b5wiAYp",
  "key4": "5XqcLzsfhoFFH6ryi5LtX5MgE44SVvzgxg9PoigihDW2pNU6pdZA6hddQGjEsCV4VVTVxeVnTmkKzKhoPcu7KzHV",
  "key5": "2K9DU8DPY89yJYqa3WDXDAaaWd1ks8NTeUAzCWR9j4uPBYnvLCDegQn5PwekDxaWbuwjeVA79AN57C5CCQFNgbFZ",
  "key6": "42DeFvA39zEX7SMF9oEFVoyojGoBnjmH6d19EQe7xK84J5bh65LzK6kkS4V3eGS8HhvjbVSa5RgJVshEHdczWdRp",
  "key7": "Fdx2QJTeHS2HKnYg6CcTFSfwg3WsWMu3jAFof9EDMxjA5g7Zy9baozyfqZYAurhGjPS6sWhGanWmhfzdmNFiWNX",
  "key8": "5BUXZjiUaJhixBEor4MDN8pR1oBGWSB59xNLm6ZF3PjQLqNyUJ8fMvZzSPaujdV7wYQ8sSjegRzcCojBQ8MSuXwV",
  "key9": "2zunHaAp4aXvdkpVYn7GPApmeHPFbjEduRpGQwa8F1NvqpeuURSZk5puiyPYLSbk95Lj8VTyNkuPk2iU8MZ917ii",
  "key10": "3pLjVyJHgk46Q8jcB5NucMNDJur8x9PNdcH8BP3mMUKxCNbUNC5XHVnGSX65SrJWuTqKsNTxPon1NPT8He1Dxyos",
  "key11": "VpRXqT17PMZBSjvevi7M6oAsr7M4NP5yufK5iYsASQdMNQDWPefbVyrkWAYhYFriSAnVbn3sQwqBhgeNmxdmDem",
  "key12": "58hBRj8jGmyMJQhNwa1CN1airUc34YXZxXLesjyXd1ixsNFyrJDhro31vLt8z8FcmQLhEjhZzjJd6GooupA5EHG9",
  "key13": "4hp1koeJ5fFeboguKxsiRTqA8FjwjqCAg4kGxJWXnHhXgPWsf5B7URkHwhrZ6Ss4e3XXLB7ENPzqknf4X7iXW2rn",
  "key14": "2CAbNceMSacAV3HD3ENGp5vmzc5unyAScDSzdrwuGEZc5R9H5a2eJELJEfZ5gPUQzYxNWfYaTR6ocmTGieSSnhDf",
  "key15": "4nRRkr5Bun7PK5oirnqdSrQrJ21KxKpzjcUvv2JK3NL9eipaiPna6H3Dn7GNKDn1t6r7FJcAyygPVdxCr7Kx83yY",
  "key16": "5hJSbikPTA5pbornc2fXYL9cSr9ZYm6ru7CraePMsNzYrJPyXjYXc2fAU2krAnvXi8Uaecvce4nfcmjpbszGRDkV",
  "key17": "36fhWRQZhtYroFPb3ua6J4h1FBtrZkCQ7SY4ycXNA4pAbQbPukQq6o3kVkbAwRSgLvSsftuBSFpqYxSqAyYL89XG",
  "key18": "mKqcBftCer2nKTtgfRxWVwYrPd1NeR9eVi8m4yFCf2TQhFo2RPBKF3VjVJmhcskSw9P4erm4Fhmi4S1NyUtRDKR",
  "key19": "44qPx7N3PZTjckF4Sat71DAfo7borJvP4bZJ38tN6YKM1iqiEvzVHB5LrgM1K2esgfmQhgDikqf9SYeM9hM2jeeQ",
  "key20": "3wJLoZQ67PH1XHdAARoCAiL76ra5SPErU5bkbsCeFbwSCLaTavEThN4dMuUZYwH6qE7NNWJ9bito5FEvpHtuKdGV",
  "key21": "5tQTBeRpDeawMjBgeth3uh1mBaX3sefW7QziDK2rYnJwgK6q1XaLpJKHTT1R2qRZtBJGvMhUTHaDusQu9D6gvR9U",
  "key22": "36oU5HJeQYHVgr3hTPus12UwnLidt6xomzqBkVs1YkN4eCVYqbNM6NPCKxfNkuZVSK8sP7rHncVnRokce8qC899X",
  "key23": "2oa8GSBNVyTKLnxPDb2N2EpYGqgpz8BhXStYq6H6cYCDirTtMWeQjd36dNCqTT43aahpkQCg3oDeWhUMVX42HsGk",
  "key24": "4Bostf3kZSNJwvDfq62fUsSSUkgjdjskZGqsommkE2yLYTtvTYMs7n4Y37wwUjoAkaUf9MBtuyKKVe5q89XHHjnN",
  "key25": "3GRYn4LY3y4CpuMTN4zStc6h6jFAS56zgzyUUCK1CoDbRKBbzSbsXtcurBfGJuWsyooVckeZKUhB4FKM53xUAoKs",
  "key26": "61WCQhVce9qHDbHzR91gqpzPrZwzKuq7ChPjGCyMNQjjvxkU3sWBeYmzm719GtxYNRVatEsmWtPBjW8AVBXk3k1u"
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
