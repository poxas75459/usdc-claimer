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
    "NmZXNMH4yv9xysDey9RmRr3cj7BoCL1sQrdAgsaN1jkFUJTRnt6vchJffGCFP3ja9XUwcMw2LqQ66RS69fFZKbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fsWYxEyDcgV3aTcpAQCSPiF3dQGYirWz557Ec3FtTmVMoZiQohrcCGQcPv5cimHvmojQWvn6hrjccJtyNEdKBK",
  "key1": "5kEwbqEmAavFYzGogsct4WhhmqaysR65B3PCYPn1Yu2GPuBD7ZA1aPa7AdSe9rUQkUHZJpNY2qRPpPaj2F4zETTR",
  "key2": "2hKWLNhmXBsGUx9XtDfnGDDxsFBkmPLew17aTvCx27UCUhvfoYosn2UKT6miLzYDWnxVixKzc4rTL2yehHyLFR1i",
  "key3": "3KRU7AnBVFJ5uUrVuS83NcLaaanGvnZs5LgzVP2Tukq6YVJ4wjFWHAx2ydu4LcC7toJDnCmA9GVXSkybzKtRVT5k",
  "key4": "4Kx3NmmhagGEZXoATro6a7gYtVnJ532Tq98TZzkXpDpuTGtpZMLe4xF6GyGvF5rNwnXvTMH9hsocaQeA6x2pyV81",
  "key5": "3AdtzTqLNNkCNjHZsTf5uXcX78jdMwpn8AR74W6eTQbYV2kB8qqxC1EwiujmEjvtQDoKmyGi5cAaJpiv83VYMFFp",
  "key6": "5AyaA6BsbdpSbJ81V64ERumDX78jtMaQcs8uikMQ77LTgmcFvrz1CwMjb9EZab6eU1HmVnrLCBohYb7UNNT1UdfM",
  "key7": "5cTr592bXEgkdQPQd2iDAEbrB4rVggCowHb8PtFLQSPyFtrq9vo8RSbT3syBXEaF8ZQEEnagAD6sipfQdGBQj3LR",
  "key8": "3RrBGDB8ugPqDrhYs5M2sVY8fSYAkXiadnDJd8Sefrvten71bs1a6nDsvM7knXx4WNuL3CsVXbdpRtRDzC8vU7Cp",
  "key9": "4RszBQnNSY9yJuznGT4svYXPMEWxFBsZSpLKWN6Q6cTQFxT5R2QU3ZiuqUudn9bZ4HjCzp6W59pHYYXfLqCYyRpi",
  "key10": "4JKBwBmdABa76pr3yVhPmXwSJkG2Z87fPuDQuVsWjF1QiSbv2tMkpodJX2UReWvKRgu3cQXnnzXYnaBeBRYHoMgW",
  "key11": "4JcqFtgCqAGG88V9t6ALCnfo5fon7vyZA5tas2HuDFxYdieR7c8BLhcXiKNQLyHoyxVhJzcf4ecVtn3mbT7f4jV2",
  "key12": "2tNr9esuX99utxXhr3x2cbFukgVAZdwJe8R6zutLqftjRNAk4KT9GGeMynyhmrcbvmi1En9KMXYkmcF8aDcFye2T",
  "key13": "HnjxpoybJSSmQh2Pz5aqk61wJpUsMPodaomU5XVanaGXJQJCUhiVTmVAc2H3MyotX2zmjvFyhud1QJYtv1EkHza",
  "key14": "okGFGmcayGLaJYCy43E9PTk2H38HLPLWZBKXXVwkpQwjaBwotP5tRQQoZ5TtQKozPDT1AHk2L2hUBC1B1Bxr84D",
  "key15": "3r7ng1yYr378jga6s821M4ZfenowX1kZm35RW84tzSULiKESX5oTpv6DMCSsmKVU16WqEdCKAkfjJniiEGUCMaiX",
  "key16": "5Lbr1QRfS6D7ZRN9gNXCYsFcSnre2PC6dy3gBZDvgnRm332YaFnPukMwTCdnFgNe9NhLEomXb7Cjk8WZaTMAKsJA",
  "key17": "2dnxSMwPNV6cbTQUJLULqryCt7WACQdmSPsra3b1UdEPpZG3iNWKEjzmPTS7YgaBeQKarK5RvXzVwSpHeCua6eQm",
  "key18": "4BxwNTfR4vHCXUZmaR8JZSooabXRV7dmPkUTJQ9bhUHFQcjdmCDUHHoDTyz6bwKZd5k6dttDHZPSwJ8RwX45yzLZ",
  "key19": "45zcTsWooYhqnkpwki3hWMZhSNuEa7LTHm8GsjSgdRcAyz5osxmYieabYMZa5CPmjKtqeiy6i38UvrWjZ3Pfzuw5",
  "key20": "5KtStVsxyyj2R8EB492VaS5Q55VYQRNxj1QMTJTUEwxiCVmCmabSPtYrCBFWbJk3V8wn2vvftU4EDsgNmLNagzSc",
  "key21": "3frxobkLB8mpLVB6Jh54SifZcPqoAT2AH1sHdS7CQaXFAfkoDQgvrhGtsnbfd5vCVHAm9s4KzSBjKV3nvePMUpr",
  "key22": "4biaepSyigZk6CmMCz5PUNRHhdBi3QwaPx6MbXue3UduqEuJyyHezU8kdmiyysfFP1guHEtdqYWNpmiqr8CEczQL",
  "key23": "2fxNnFGyfZPhcFuRunUNdDq8Xf1YW9atsK1EsrrDtCtqC8DUvDT5TPRAZtgymGZjSaD4LGxGr3NfZdLJttiUxG6h",
  "key24": "jMuKRqTeweSi1C88Gd9kD7VMckX1azEDWPzxhVybKizYFNdmWLimwf7tMSePjQ6vmKzCoZx4opd1jupyzhCBKqk"
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
