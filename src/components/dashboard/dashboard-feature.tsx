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
    "3A9YvkQZyqkyRiQgWiCsQnarSpfC29pnhA3XCgwJsZNfYJyfjtGuNJHKBAMWP2ZyZshWbBwTQk8CsVEg8LcNDeJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z83FTr73nVA5DDDxh1Fx4a9FJEMbyk5LnX6s2pQqxrjn3ZiQKttyhEoXbmzZCv3SNyLTLHdwZ26KXqqD8BKjk9i",
  "key1": "4VmohGwC17J3mZ2ixyKhYVqcrCJjVeicxqL2M996TxgirZce513roQXLkXB5mkccxTgyU8vWyBWD1dR5nPuUMbHa",
  "key2": "2Jw1BYJVZH4V8nWyTh1eVaDhMGXXb8saUJafs3mwGtkT3h9ZoZZRXbG44vroxuDSy2TE72cPBM42A6BWYz1MD7yS",
  "key3": "2mXUy6g8EkXVNECTSa9DCjYA8BoQ2uS2jiRGzFgt78dgcbp9ZwooMiNFagF3CxFqqhD2sJCeZTfJ1eKurTH8oD7g",
  "key4": "3XZQQd2mB1vonMSCQPLpUSEgn5nKZqXVseSJvNB5jCJs53SipgzWxnApvSJyLCpz58ftaeMV9fyz1h4ZV5SpBMSu",
  "key5": "3cvCreKG2AwuNfEjSoLT1N2S3AtVm6okWzYsrD9dVd8cepiALawpqYd7PLsodYoyy1ZPbhCaa2X1HE4rvxyi55AZ",
  "key6": "3yExmBB6oh3hheQeZ9NvNP2cbEeFdgzYQnCYN6ZfyYqTE7c6jZZ82MHAwy69yHz1Q2b6nmf9fCb784CETiZoqxfX",
  "key7": "4bakDcgni2ktJq9N1Y5YJeAT2Fp22hDX8JFz6xtuum1ymsLBu1VQ4BQG2YevVzfVHpPSwc6cPoae8okdhgUxpsMe",
  "key8": "2aANQ4XBkhYa2d9wHMGZSkxsfEcbCYoMeszx9o2EBfpXcBGbXthH42qUURTj7rZMQLGdWEdS3uu7jeX79iY9hK6L",
  "key9": "3VxhqxUMrBPp323ZspjTsrWyKBWJBxMyQQyq2dktKEi4PsCuXrCyordZckkLZDJiPA92pq8z7XXd9NsrFUqoPppf",
  "key10": "3UNjFqkMGAtCKWojpikj2YP5Bp9WBSvPWRpmekSWRYz3LBq74bK6xne3Xo23dDT189U9C17RDpqGZZcu1Rp6tnKR",
  "key11": "5BczGK1VkJMDq6m84PTDTHNj3S1GuGBLxthq3u1Y4D1CTgfcQNRi8M1jyJdQfMAvCW38HTHSoiXvu1pGuXDu1jJ",
  "key12": "5dbMMFxBF9YbDjpPhMUm3eXgHwV57QC28TFzGepuh8Po2jo5F9jEpJ9TJUPnfbG33TsiBeQdfXUoqUZ6WuL9Yhzi",
  "key13": "ac34KBbkYaAxFq1gt25hd74ZLb6KL85CFyxX29MvXtUQfULKuN79QBoJnJtGxdBCJLL7VXDoKLdnUoZcYR1dgSf",
  "key14": "4g94gcrhmP3c9w27Bm4pdDSRCz947bN37R4or1EN9NoG6fstyXWfrJSyoDpPgVT1bpHAdae6FauGU7eqyvaAYKvK",
  "key15": "iAhzTKFX849BNFWT6umBJM5VeuD6hgGGwL49GhkMkffwTcZSYdPncwacWHBaQmrMM14hy1Z2R7sETeBXvQcZJkp",
  "key16": "4hr6inLAFTc2wnjUpkqs4JriDeD1Xp2opPL3uExjxJP6XaDsczrP8NMZ74wbUCTm6nK3qu1PZM8d9hKqWNw8MN3b",
  "key17": "4iPJyT5soZsj1L5pNfftYkc5v4uvDSNk86hUdEDrtnJFwhCjV6QXjKvJ12ekgC7ncaUp2euuipq11hgWEDTm5Qwr",
  "key18": "4ULZELZvd9QSmBLfBGtQ95moqvTC7zaAvUjH42NdVKJuVtEvwmTkPdnThKPaEV6CHAYac24VmAGXjMHwMfrJbJQq",
  "key19": "RXHy9fcuJ7phBg845Bx98jmgsp3hNAxuatTZ7mfbFnBMmHLbNCWjBimXUwA5dFvwDuvXwobQ29V66zn3NV17Wdk",
  "key20": "3uBRrjH1vz55UZtTTZfpbLvqEtoNwXum6Tqp37V7TDtBDko6KXHdeWJVoQH5XBD1mF2og6fmzCEX7meNDoG9gYGm",
  "key21": "322mYHboCxeUF1pk6K7464zkZUoYbY4ZdQGBvBXTWo2Yi4u22V9X5gVZyNivZxjA533rurA8FbsSmqstWmSSGxRU",
  "key22": "3QvCMjgk2tbTQAg6aqQKK9XLDnzKsDWQD6ZURbMN17TsRND5Z9kD7yKopdDekFazFN2yMJmkZntsK3YvCeYENHj5",
  "key23": "4GfV5t4gg7tQUtkrLaxZTiJQTpdhzA9kCeH4EGPPpfuq4PW5NweyQvPRp3Ud9tmBLFDF8wLfWBYcS2rjkszzFasX",
  "key24": "h27yeenCc1a1CcEbnpQ5J3T6XxpgF9i9djQmuP5PVLKi57dnn9CReGHNZgha8Dzio1DsfBCaCWFnHnjJc1YthAB",
  "key25": "3JdpEDzrEq6i9ZjcWhAMmkAYiQwJ3qqkarQTXEtkvFw3QH5Fm8Cb9xdaPF18qqXgK31VaKFTMA1FvWTCptNj5nhk",
  "key26": "2C7TwkqRWaoXga9bcvh27WW8hSip1CV6HxexrbVMpr8332yvDYP96aKJcT8SHP98V9aPTAtm9eXCYh9mUq2HDEBc",
  "key27": "5nWCDESPXDYbxFSdrSEqhjyopu4RPGTMBhRvfWcuLseP3vA13cUUPTiWxN2zPETMooky4XSVqHwhDmbKsvmn3NpU",
  "key28": "5LK5CsB5D7ccwRKghDoz7fZ5PNG5zanG28kveUu1s6RUNBa8NR8uFreNzb6XUDappWpjXwtNmdYKmQMXJDjCHWEo",
  "key29": "3VZ9feL8mfYzc38RVR3CmXi6QodTuRzwgugzBxpa1uPSUPz9KGqbwYGbdpjZMn6cmYfrzTfVmNGMnPvpCazMs3i3"
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
