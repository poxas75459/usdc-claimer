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
    "2MGu6egiare3t6ejhCr9rdPYPNGB9aXhanrrX8SwpCAEYVR5SzqRE8jC7KTkhzfFwWbDDo4bo7in86priHUdBv6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oK21mw9xfMA5BEUwiMmNeTdd6YSnsrtAdidWLndom6bspXWkTZC3BFkikwNeaDY57FJpGcDFjbe4HKCxwbYKFSZ",
  "key1": "4Uh7FDH4fZzobHVmRZfs2GPxyQYjtF7xe4t71pXwFKf48y2g3SsoYGaangRGbHb7qgt5XCFGGQciCgviR8py5Cpp",
  "key2": "2bXZMWQfBymFYuoEKWcyEoy5DmaTJHwHfLBAaA9nF9uwnrqFS3beS2d2GNgRDiRciV4LiBjcfLxue3mnYWiwmtnb",
  "key3": "4YhvXd9x1Uk15FpMY3YfjdHMZZ84AW3KWgjL9U4xKuGJitjewBENKwHV8mtPbWyYBkYBPsQacGQZjnGeQChNXczS",
  "key4": "iLwrFXSsMhvb8TeePK1xuT1D8DvVxoxtUX8wdkMmzmWpdv6LhrYkVtBGgGzDXScjWcAbGr48wn3xW6cJpR3Figp",
  "key5": "2VUv7eBVyncUBPKGugSHPPcSBc8RbxLr7YGKfd9DyiHoNkQkAikDFrJidLCTQPx5ys9BECX23hdUrxWXozbYcewn",
  "key6": "2NWr4QwPBKRHSAKfQPxRRqR9anL4i2pMfwBkyFvAD2j34wBFT7Bu6k6rCcuDGYZgujR1Mr5H3vtFs7bS3RMZRkwF",
  "key7": "2XruQPZ9oM5nB8oT8z58nQ6J8SrzEJgmWGavAdBUKGbie8oUJmw2reevRyDzityrjJJfYFm9yjKB6paP2DvcH8Z7",
  "key8": "3VhFevRg5NFPCj6THBBp5qVWuQoCFdcLXeSeGkzLZQnmT4v46hb41cSp2dgnWMPYdtXaHqMk81M2rGfduwHcfb14",
  "key9": "3tSn5KHwoeMKi6ZfqgGqq1LNvMJ8Ns3QLMxbURDyM6jQ6h8H6rGLZSzhQ87KbquSre68vdv7NLhyPKKNxAbvrjhE",
  "key10": "2poNZZkfXtJmePFWtn9xS2kCxJf2ei5mKUA5gHg2q8q9f4Xo4wje2mAoFbeCEstSbpQQD1CJWTdtDr6TSYeZS8aR",
  "key11": "5cgNq5Zgx2bW2je4ViiRxsiM2VEbHZLrt9JVur42uu6kyFKQ4Sm85ZDfeYsZczmvePiMY7GR2LooParfmaKptHs4",
  "key12": "5Qbxznxz8xQm86oGNpR7KDHDyELoQ4zfeqP6FELL7kCUQcb1C7vwTmQkqas27cTfyjXzUkM2tT8YHeN43bZeDrZG",
  "key13": "2j9yMED2KGo4AGKuQKv248QA5xG4Y26RcWstAd8tTVN3rz2RPaDeXaCf11o5i4iT6YLvWNyKzGGQ2BJD2rR9T94w",
  "key14": "4Prn4H7eDh9SoF5QXhbGGks2dcX6xjSRNkfa2L1Cg2mHCPEdu72UR79x3LgLLWbCjndPQMehzgwFruq7JyMzcLL8",
  "key15": "3ukPtryvEcuTMTPHpCapmd7isjt4zK8u45DVpoFAXiQTKJa6NCznWwSwwgEACsnt3A2Gr4fgxoNFb6yx3AfhjN63",
  "key16": "53HX5ez3a4LoWM1ihTywQcZqxpfojsaXc4jmKvw9Rqy41rq3Lk4ZdogRkxDdTe1yzyRpYieHKyQNGANXgTye4XVy",
  "key17": "4QsMRYizx5t1HUFJpxxQxEvDbnFPemiDSqr9WKYbz4628TeNZAuvsi6UCQLo9EBifeCfgE1RCH1kxQtujxKS33a",
  "key18": "5oYWjZgYuvL9XQwvR2nXXQDHDEnrLZetK3E123e8YSUgTx7w9LnjnXyuZipwr39uxuJ4gHDbdqv36J1kV8S9FasL",
  "key19": "4gMuPn7sfr7PcUfkgcwjmau8aFXLhGpr5RX28fmQQcgygiXQgfV7Q736GCThJnfuZrYaFi4yFHMy4Gp4rs9Q1RyG",
  "key20": "4rqfKFnjncMXPbsrS4DULqupdbH2kYWS1gGEFiJirJEvFMFgkTDveGZVDxR4DvYbT18uPcLn2UTgq9hLQ3kXKNrq",
  "key21": "ZJyt8QCizNSoVhchpXyGDW2pUfeHrXD576BLwxCj3QkQJoHDziK1Qhyjt71cKxAKZdUThCBuVeu96rf38WSy7QC",
  "key22": "62uFF9mtErLerX8968WEgycfoVMU4JXsY6BRyRE7dwNQ2ECr9D15FjcRHiDshXYKc4BuKTVbPExDnCE6YzNibT7N",
  "key23": "4apkknnznRftMDvi7N77iyb8itU8tveXnTvd2HkgiunCiRzargUsrgtX2ojZmH9tdCZSPTEidZdjwgKuxB5bXfLR",
  "key24": "4vUixQwxNonhJVa3se7hQaUNpiJBaTS16peD1LgDzxWGYybPpCYNwXA9eq3YKSuWqZmfNPUbCsYz9ZKeEq4NwmKL",
  "key25": "2hB2JUVU7HJSRjNCcmFLb3bJTKnhqEzsdB4AxMBxng9RcPQLxTYWSCEK87Wsd7EdNJC7hmQ1bxKRfYSfYTP92ybM"
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
