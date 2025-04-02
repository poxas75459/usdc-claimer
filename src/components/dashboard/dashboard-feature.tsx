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
    "4PM3q8t5SY5WyjxB3Lo9WbvjMUQ5EC4TFfioBGi2NcsWkiX8ei9xGLiUn8RemyhstnYic15VGGVRvQ8HLL67MW8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iukptf78abQDVEJN8wrb4VDuG3i82iBWMHSaUor3gTSKDRgMyuMoSYofRXZpgr2zQcHdFVXMMz7u1PJ2374AQj",
  "key1": "2j4dnEPQx8xeLZaE5MdJDXFwXuQJw2GiWD2QrN1M43VFvmZKwiAp2hD9Twr97UBm6JKcGYsjugHyoH2S7XihpNTi",
  "key2": "eSuJPzLSZ3q2o11nohc2k1NyP5vACwgRiyLdFkGcfhE9N6Jp7RqjGxG9JykXWE7VF6x4397rTLv4ZBWQfzcSLPm",
  "key3": "2tYUtKwPSiDKUARCFTaVVnEPLHFQRiq1gabCizBUHo893LULNSHusiwzA5ff1FWFokTweXMdFhjjDMNmoUJ625wS",
  "key4": "48RQUM2xDXt4Tonh6v9HXZnuMKEJSHUKVENw882H5LdqfoD2rzzpvDZgt9pQHJHJhxPASmMNW7n1tKRE1acWG1Rd",
  "key5": "LgRKpf2cWW6UxwdKVd2mc3VGW398wyJPTcj6i3y1dAAt1qmw7zB8nZrZi56GN98k5DBZDJe9BSM3o9sLjVGNWFj",
  "key6": "3iqgcuSEJ3NtEChz9Xp7YyAAZDzBoLJXQfzhM5ws2FhrqXd6f4ft5LhEZZSNMxn6X1rbkxtxxaUNNESWkDDbZpwZ",
  "key7": "2iybxKUFm9uKXii5PWX2gGqCFhBkDPKHyszG7oACGS9egjUpTPqwrEYmk1UtQXpyn3F3L3kkDkFn21tvUewuCYHb",
  "key8": "3WLtkTVeR8tpvWEVPD2xQheNdL8pCWVmAieNS34SW4e6DJwnEkHmURTJowRDsng9i1JnP8RsQte2EY7pnwWt56CT",
  "key9": "5Qsc52VmnyKRHCU5txDFkornKorpKn9ktSs2WHoC7krGnBzzmuQDwxTp8ryd384QMk2U4k9bS3847Y12piTqwRns",
  "key10": "66GRR4XcpkQumAuYztvArj7EPX17M4ruMkvoCPVUa9fKDumQvodXGG11Spanb6mzwPavTCC7ngsMLgAN98gwoVXY",
  "key11": "2d9dFnjmx1tSVaEspNjzwbXqTMRDVT74JG3QLhn99Gz372YHXnhvNk9KFHCaw3qHBY8fNsJPnibvzR8cv6xBBHdJ",
  "key12": "5TurTjZmseMQVVXkBbmnNFsBzDFdjcK4fTTAgaUyumY8h4NRrGoiRSLSRFHnZ2uHu5QnAVX8Gnr2DVrzvU7xCP4v",
  "key13": "3iHRCgxfVw9t3RCrjxMzbh55jdWCmP3gWQf81CfnHGSbvhMeKQDRek4K3HHqh8phwsgLFffoKcEoxpy9Zgm99Ghp",
  "key14": "21mFyNy2sRpK73fELXnd7mkV8BzorTknpKtokHc4Qqk15LE4YLN2grJDswcwBrJ7iVBC58y2nVuEQ2em3NfhXRrQ",
  "key15": "5tpFBesRxNcnbLnDZrnFa4cqRvhSCNwKECu5hjsTmHWDPBNUTfPSsFTUWH5QpbRfXnE1Ur4QRQoyVcgt8pPJp1Zh",
  "key16": "2jqW4pDQmzV5TWVAmmykkP5emxugX863f5fGq6xckoU3QabTNVqnM1u27gscXgNAv8KWG2XMVDg5md2yfN9sMKfi",
  "key17": "2mgXyVZyYgictT2GwR3nuDcDDimbTbkgoUsjuWAqHiRqH8XN2m8Ty8Xg7sau7GHiBiMZE2LNdUHYMTpSPGZZGbgx",
  "key18": "2gB9rPcQ6tALTttzcRcgfRVH8NsP4XaL7trHmsHbvY49XvNwWHUMrMKZ6koEKDTR8kYih4PZpMY6zfiVqq8D63DP",
  "key19": "2ZWcc5ABRC6auJd9oV8eRGYPoNxhds1D6D4RkkNE2cHQc9wgHHZrVpa1HbPX1e6zyJoAwkF9Pn6VLUpWFaYgbkP8",
  "key20": "5A9ZzyTXjM4TLUxV4wD4rf3M1oLvX1UtEiCXxhAR8xis5jkaXTZFVq6vUKPDBsGpNW6NzqunKfpbNeP1QJfqv1a8",
  "key21": "4FFGYWCa6EuurUhxkQH9LjxWosj5FkrrcnTGHie4j1UHPVpRH4cr9YiJtg97f2WENAC7ptmrcvGmXtmUdc1QnZk8",
  "key22": "sVS8JkfedBSwzFow9tF2N6LsMJgBfy9ugCX4AhwTEVVGN9NMY1HFndU9fojEAmsro2CnXJKn1JA37Rod2nZoA8M",
  "key23": "5e54VyWSsjhziUpHft62PMXNjHdaKnNrSwrboh1KkrbTvkgerjgw3yy7FLDFN9tkCccXoTBEgXLAcYkjijJ7DFko",
  "key24": "663e2U3z8Xwh1LhdUJjDg4NhajRPEtscUJau8cskES7Q3T5PG347MbXHfjnyPLMDBDiLWEaecUh7EGM7UnM3PTpE"
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
