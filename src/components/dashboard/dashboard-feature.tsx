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
    "2VyXAQnR3BfTLQALt3uUUPS5NTjhKU5HBQa38T3EK35hGwUzFctxWT2eRtftpodTjPRMCbDZJXFr4VGCELpz87nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62u1opxYpYGfXMbYVbhKFbGFZEcYFdEZ4bT44PGiU3DcurU9UN6GK1bJsc5223z9DgDYuUfhWBmQq81Ksf2rmD9k",
  "key1": "21otYJGRHQZdzTwjj172VtnFBTzFKR2RhKwH8p28BUwoWh2z3QZwpUBJ7QSbQrfqb45QiJiZvRCR1aWiyhZBoQTo",
  "key2": "JCHtx1W5Ae7V8UkfUvsE5h7HaY9CCe3sV76C8o74NqaXPBaAXBUnWAGaXg9VihWKv8LQPPjMUMqRkfb9j2ZQXXC",
  "key3": "4MRiB16ngo6HUYwabFG3sSzdYVgHVHCdaFk5bExoVMQ7bnqf8xkj61Rg2zjSeFipUrN9uaMbwy2Sko11cyR7mqsj",
  "key4": "pFbExGfdzLSGzvkfvoRNRQMF7m2bDqzpj2SZdmc7DDK318Zjn92xBhTMQ1yeDXn6wRY9LEPDUgDTeKVvcFYtjrV",
  "key5": "25hZuaukWt91WNeW2VBDiJ5dz33tNSbMbVcLr44Fj8rPUD8U33zrk4WvSPjgfNXwsBkU95mCqTZ4DhojnKs5GTxV",
  "key6": "3qntGTyAJFz7gTvo18L3AW22cPg8czUikinTwaqcvotudt9G6Jm6hDngbszMNx6Xs9NfyVyk1BEM1TcFVzD1XWmb",
  "key7": "5ki58x2JYUrRBrB9NKhxURnosSg5ez379Pn8DznhXbKhXmm9mQAjbrz8Y8bs1w8PL8KPS2LbSNbapEW5ERtsU8Lh",
  "key8": "5TSxxyuEohkafTrPJgixa5DFjqUcK7fZG82kv4NmE8pvBgv9jDtDd98hVyvLSJ42kQsbpcDUm8jAt9JEAQnBtjpD",
  "key9": "26NT4R22jkntCgf9AeRSfdCMcW8fhUUTYd4vx9zTFazeiuWCHDjEFJ282Vod4wLmUzqCWMWGsigsLmbnWCNWfqaH",
  "key10": "rx57gUYKyvVQxd4QsTG6mpyXaA8ufpZPt54tTL5EKTchXyw3G7fmKb7ubU2YTBLSs4oS5BJMKn69Mw3f31eggAd",
  "key11": "4RRgjfujkiKjtTnBcwSq6g35k6cp5EfR9mgZQ5L4ekzF9nFeAuoZbMcmbKwDdszXTUQLLButLyUSxuFcQu683RxM",
  "key12": "51cXgmXj2PpU1fECsKWLKgXNVZneG4TLqXVDePWk4hwdyfDUUMZHq7TEbTPdbVrqKjeyRNM7WehwuP6B6xJdZFxv",
  "key13": "3SHKYYRcZongrU6qr14uwUjvA8vAxFS6VjNr9g6F8zH543HpCZB9PUdARL1GfXM4FrrXN64NLNaRw3QhSFu5vSVN",
  "key14": "41RdAAVX78DnN5WBXbh5yS3wMTncKeXSMCi5rQR4oJJBmsJiCt7uk1GcvMfHvsjD95sotKynaxE4Ax1WmDJjbC9o",
  "key15": "33nVyen4LBvJSmnv11VPEPQS9pMbBRzXtzdumavJcAsbDxhC6qXZKpTVKsKhmvjJjfb4QaY8y9k1MKfWMxUksq54",
  "key16": "3RKSAUoVpCumPoDYeMxCLRog6ydwRCYDxL4NZy7PaFdH8ADXiXTFqNwpUEexHkUYj1MCCpUEwHKAeRNciZsLRTFG",
  "key17": "2LngHKP9ri4A6KcVdifcQYnueQsH9Wjqw3h4wSWiM8obQDEzJXB1bunV2bkSho2eyxARaWi3EidAoibWMJiT7L8G",
  "key18": "4z36jjXtkRGVmqdp27CRcKmt9LQniCSDtcZeN9MyPnRbeBtXy4JUBjtdoC34hzbtCJAsMSZiKvfneyPjzm9ahLpu",
  "key19": "4tewcpivSk2DonxFBb4bzEvUmbeza3byuuTEyxPRM4NiEWM7GdaQ5EHzNbgUBjBNndNsqL7TQvDwiy2S29y5tU5K",
  "key20": "4k8kQZyetBkzLpih81Ze5cyHXaAcpAVv7mYbhFzhWt7EEmMoq9pt3F7tYpvyv645uwj8PnWUreQ7dmnxYLbovtrH",
  "key21": "4bfm8YRcYDnzXqdLTrRMwgGbD4ZfhDDjwrTZNZgCVBJokZUbEkrGWvH3f6qzijNbX36wtAvuLHr9mpsmCsStWVrd",
  "key22": "3VsZJKn2aGrMxuXsSYEEmyXHKQuDrV737y1nQxkMCkBfRAs1k2zibRHCAPaUQhTpH51szWL7cFLSFTQLPqYhn8ZF",
  "key23": "2QwiLYtxX4xQe37iE8s3GKcfpExDybknYpcQy4MgEADTj53BCqxmPjagKgCQJXivqXFHYTiZ2e1CKkDqkzXvn3dF",
  "key24": "2oAtVhZAbTrgyE84fHfKnKbUVRWXkgWBEWryvkMqrB3MgfPKtQ3JC1cQ2g37koHFkc6QfE9rq6DKn7FvyTrTMhDt",
  "key25": "47Az199ks5gU1iHHytcmFesSWdMCpSXtEoY8NT2EDmNYeDjfQSRuCPUjSht4c7DhFtV9ffQeGDi7cdu7mGAt2ajM",
  "key26": "4hxqyw6ydmqAkYQRKrVpPjZy8kQ5LsHM68FmrDpJgmWYeWDVtBDS5uY5GDgG3siL5tRKcVCcJimcqVTXJL2fVCNW",
  "key27": "J7jTF7yL4T9Ua16oMNthroVpTHY4wXL3vDxkXwWKSHvpPaDWPCNGqMDTBuz3kvpELUPzebu2GhnSjthyYCaVdtY",
  "key28": "3qPCVM2wQAUAv6n1RTNqaLi1Lu4ApsxHibT7knjFAr9pNdybJ5KJ7Ch19aJ92wXbofpZkbASb1oaeakFHuwHRfDb",
  "key29": "y9eqnZpWubEfoRPmEkVpFaCqsHkF4hFANFtbKPWJzjrDGMuzaaJk4dAmR1KXRvpE4GB5AFbr2WGTvRVNQrC8HW2",
  "key30": "5L4xc7VAJqrPUqhavkdcX73WQWCrWuGEsHmk1zBrmymiDWmmA2XQ9CC1zUUBFSMLy3pirE2aMcFXWGv685JEzHzQ",
  "key31": "5vq8ZRuqAWFfxgcMLiLVhsJmSjgLdR4DSu3oAY3sDEfy17EitDNzjgr9N3ygD2uG289ehWm7LFvegFR9kz4zaSEn"
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
