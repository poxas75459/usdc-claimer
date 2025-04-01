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
    "42FBMjQ5cxzQ1wXimH4bbgrdCJadgHkRLVTxcxYTNrebycT59P5maN1shd3VBkFBX9ugK32SgekeGYGwoV3kHtJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "75qRyXRq7tTXvFPf9EgFRzyXZqPGgpow65rKVMbxQzkcxjMfgpUY5RD2UfqXxDK64h8q9Z7u9yMMYmg23ZhXbq5",
  "key1": "4h4HUtkHpcyQZmSVBvefcuReFo9QvecVYD5d8dYKiwBhmLhs1K1AdUV18Bw38hcpvdE9RbKXPALU51pkSPsTrncH",
  "key2": "gruKxPN31yQq4RJStn3xmjDHvoWxP7KYhWxU7q1N3eYsj9JqneBwdA5NKJb9duYenS1bi6dJDR7o1JJ5D4sydwV",
  "key3": "3fsmqbQ5n5tHjpxowcN9yCDkFWbDCMPGMvrFbpyZeJrhv68Tu7vyrvphSa8VoApyFgip1jYXqayFjZJVDfUTAVUg",
  "key4": "dZot61xU4wE1fh146yeiaXbhGqoKjhJ4UMF9kHHTz6ijwUxAfDpZWEAF1BCykwraCsdtCVVDutr78KgLLUrk3t8",
  "key5": "2spNeFt9tn9jLSP9bVD7dDgjqdNF2RpvPq8B3noAwonj8WTuf2713GT75kpwjV55RBboQzjFDitKbWEpD5ctNvks",
  "key6": "4Wquh2JP6gLXCiFZMCeGpw1qHkMD3oGrsMvEDCkMF2Koa7RUNDo6yyPvax6ZsMnnrVifmrqdLhVts92gAe4ucAfM",
  "key7": "f2Etv3hFxSoCvDPD3Ka9QdjqjLw9xt7M6Jf9qrSTRqEokPYv4aL2ej9Ef1e4juEmAX14pYdyqAX3WfhZXs2eeVS",
  "key8": "4pqmMZ6BkPpembqrTwcKUckAGwBGPHZ4K5e6ebyUzUmgAJn1UgcyzGGWsNZqSpKSQDWjhX54ZLNpMfCXbS9KssRQ",
  "key9": "5HLtp7zFBpW7R4LnWPaFfFX58CAWH41L59sYYeS5WUpm4yHDfBetNRfNZ2hY44W49owtQzP15c7R9avYDZ9bKR2h",
  "key10": "5Cas3ShfLUTbro2NL5tnmAjAkF31TTkK1QEh2FfjWY2F5niztNzQHQeHknYnMH4BgTAs7QRKzMwyH3HsJCKhDTqQ",
  "key11": "4pCFVeSmkwVcsGqnevnm22VhQ3CPoKPugRdmitRqyUneeNvSk5dhS6hkExWiY1a1zrTr4gjCbJUJpr8Xz7Ch7qcz",
  "key12": "3QmnchtitXFRpuGmGJ7K5e8nPZYbV3VjM91r4Z7aeF891sfuf1uEic316SDd7kFdSYuCeprcjBhzbzQCLyETEAob",
  "key13": "kvYPZLCRgmvXQ6HhNkW5bUR8pdXLAbtgS1rmvuGL1uUUZy4jePehWwhmEDtXb4cSnGSV2SVK7M85oYN7P9yMusy",
  "key14": "49fQacBsyJAoyRCKFsV8iB7Cxx2x4igyxoZ3nbB3om9NYy2ndRCRBVRZKBNRnffXDHv1RHU9XBQoStWVh4HP5Ex5",
  "key15": "cbs51XdUdsDBUsLRHNSEvWogYwtrd4i8CULrbsUTTQjvXSBoy6CDzHaV63NZxFAEFjUor46X1MELpwSjNQVei8w",
  "key16": "qds9kt4nbfyTGKPJxBogJsD9BqyASJKhabdGTwm1t76bemUPYrTTZhxf5J5RM6VSWqJdYb3E5aB5NCDDfD6tnsS",
  "key17": "g8aQuDetaMrGcEanXzf9ohSXrGWp6Gb8tT1XKPPYChJiMEDdw7D7o3QEKMjJKpWHeXhSYaX53XaX8bgBUPxiDk9",
  "key18": "5443iTUZZzuKxbLR2j4FusQz2YqjMv7ywbnLWyvsCubVjunn53kcsBYT8tFPt3ijBmPWz34NtfMu653GGfEZ49VZ",
  "key19": "63fs3h7WyZMpxYucbGUPNAYQ5cPETpnG7dwEK8BasP7Zd9bfvXCQ6wdwwnD6yojP9V37qoyat1bJg2otHxPx1HVU",
  "key20": "KeKKJxvQYc54JePvLCNDogYtbZtgLjoxjXCNHPRXryrJNjmB2TnXmcbCLvc7K4A11BNLX5MnYvMuNtpZoSCwz2m",
  "key21": "2kxt8a1t5Pr2wM4r3Lwjr6nQXZCCcWKiYyNk4P15xbTJZcitkRRdHY3gWHVuGoJQiK6GotTfW1h36i5yqDmKDoj8",
  "key22": "2Uzh8LyXFq69YC1oKzSjqmKZFEdq9ANpFMtWNVG1d5nwcHBKun5vaDSjQpTs8NjnABeSTgWQiFjM75eGsuvgx3xc",
  "key23": "Tb4DLpNx4mRsK4EFDmMQgokZZfzCE4zDiCDsKZKges5zYGDa8MGDiy7yEYbktsbSiyYaQzVgCfdtfyenxKjyDXw",
  "key24": "5aoxTKS52gjeB58PbfQNMFE3oYaepmktcv5uFNkRUUBQMvMw6kHS1ESEitjmxY1CnaVwQ5tBHung4UKg9atdc94T",
  "key25": "4UJKnQGZTE14xJnynkRBwiLUSigoxTmu9fDgxa2VR6G8k7Ax4hXdaaDg76HgMMb6JSVkFFQLEz4S7GLs8SgnqoCs",
  "key26": "26xvssizMJuSRB6DJdJvoA6c2WEWoY2eiC7sJBycv7RWX5pnCj2XDyM4cj6t11DudpULGSehkQKv8robTDtmFTKK",
  "key27": "3k2B6gKbP9kcxYtX7MvENm35xLmYbf1RFs23HgcHLxH7QhvvNm2pcuS1qh6iuZ5bwYqCGx9DZnnzQh2Qz444qWtR",
  "key28": "4WzcRUttCgkp1kUo7AKEFudXPqyw2CCUd5nqq7JwexC3CuQb1fQoTCe21RQo1WJ1oaBidMkht4dtstaqX9KxN2bo",
  "key29": "2uZxGf1xLrR1NFbLQEmNDtkWhN6zse4P6id7pAF89qruZbfJ368NgewfnC3YU3w7H2LztLPeATcxnPhedhu2h41V",
  "key30": "5FWo42vJ7HpnBv1dJbuxscW374xhwsjhREbUJg3UrWZPqAm8kYTYngqwdmeYvcnysTSqwH7aExzsETzg3UwGYBdR",
  "key31": "5B3Yq6sSHLsVn7PFYAb3wzWGzdXbQiqrF6GSa4Drw8J7xitU5pMrSRNoU3k4N9etPuGZ35MGgdJzqKpwCu28nMA5",
  "key32": "RTysCknFcXMAmo3BPM4RWUFuEBKuehSqE6NcZzUkPwDQv7PrnGz4bzDjQpjn4XDJN1mL2STYDxWauVT2qtYZb6y"
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
