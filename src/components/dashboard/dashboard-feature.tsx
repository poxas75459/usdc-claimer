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
    "4caJ9ubRg5mE2ZS18CfKn6cSGEYr8QMteyfjheHPayNj551KandCbvfLfbxBCqLkFAVDC2vzKEeETJk2wb9aUovL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QJ8QzW1mKtAJiUv8F6rH5sJwBBRHUnf8SP9XAiUBYZrZzQFFPs2Z6J97PeErfUQkmNKLkEbQpHev29eNLxL9n9",
  "key1": "49HorNkDcBrsDGFFcK7tUMTuUgiN6K7QdNFB9PLoE2SsrKMW3daTwjdqVPY2sR3LZrHjscD9rAacCsJazvwN5rox",
  "key2": "FBJ4ptHLG9bvJyuY1ZgZ28jsXKFcst2Ng6SWiCcxa2KvcMQqer4MV1Xv1on3Ja4QvXiGDnzihQ5pjsKeDPw6UMB",
  "key3": "XEPLSyq2dJKqr5f1DBY3aX3bGvVpJdRcjM7dEmEdsCrVuzMjfEZay1LsoRWLAMMpnhkhEFuD6YoxeYZBme2b44b",
  "key4": "5MSTPFHLoaVxZy52p7f6HbePCoUkwN6kWqKY3X9Qc68TLW3spGQMPUEZ1oRSvzvBhYsH6h4kVv24vmBpXd2nQsE8",
  "key5": "3fhB2vxGSxAsoN88zLkx1o1n9fD9C59GFoat7YSEGBZRbc84KAkCSpmkkUFEPz9sG6KsqP4a9Q3i7Y7FMTtZB9vz",
  "key6": "4KpP9v83FSn4XDvpUMhEg68oP5Em5txXXPdNqvCz8TMNqtiL1tp5tHvk1f8qr59UsxSKXSkP2W3S92P3jrHJLwqW",
  "key7": "3Dr7wJvjeUrAkdnZaJSMa2tZayaNqocULiGpmBqCgcU2j6SGACXMpURUmi71xkbFqQ8B61hVtcdMbDQP2hhjqPWD",
  "key8": "2x1ZxTL2G32zavR7CLJ3yPPCRGYRVMNkAVU5M1a7L7eoettGyis7x7UvvKCdMcBaNpB34UGg76rPrAz7kmzu9pc9",
  "key9": "29whBsdaS3FKnDdMMCdBr13GBXC8oy9iN6yvd7G47XvYViVz8SSkJ8cBcZTHRGAPC7vE4eJk1BtfXfG6GjgFMi5k",
  "key10": "D8eaGjZbiMt145dTT1rcc4YAFsqctrNjWZrNM3PENn1xtZEUE4qEep8g4UwHqrqo9bn2rbqpL1sWmW8L2SZWogL",
  "key11": "3VdbhoWyFhNZvSARob9S2oD7WyGpbWc9NvauxzM4mNQsS6oiKS6m8NqUhFPrHnkGhbsqnQ3WptfyzEeoJt4b6uqQ",
  "key12": "2REp69AZ2WateBKRS6PTmicsMBqR1XtEMTnC27kpEBWxGnTCPw2R9dQEANVCtyXhi2mB97wDpGBRezL24E4cqufa",
  "key13": "5n9ijWvJijyysWWeiGzmaaypSqQmX2GPTMhFZ9DsiYCydRx8VKjVa4zQVQHL27AEP4Mps7EyzQ3utohgkM8UT4GY",
  "key14": "612UPF284se7Ssw44BKYZfG3VbFNj9g5yF3M6dpasR9dwpZtbk3XudwSyvow4vQ5QVPzAntfxCifKsFRAGEggLJq",
  "key15": "4SYGRpUtSRTwpP9TAcn1w8uPE4HajLYUPH4yjeWin9TtNanVesKfQTZZUpW2Am7zoKjn2ieAhEkwjtwc55YTmNU2",
  "key16": "3QSJC2ivH4nJc1wTCN7apNJmyvVDUbmUFnpzsWaagkWGtw24jAFMZ7hkPpTNnTpJyVd6KKNmpM9du5otw9LaGkLM",
  "key17": "D7WH2P78w7VzHD4jZChQ3G4M8UgngdkHarBdgupjAYUpKiyx78zRcwxoLRgNdvygg3r31FZBf5TMashFHs5rpiv",
  "key18": "5USzxVoN5MrYoKpH25LtG9xGUXXSrCG3xBoTN5nB9G7CCjYdTdGZm2arCgcnTJsVFKyHYSUfd9MDy19Ftm3CiJ75",
  "key19": "5oVrKC4Lj9NkqjcfEy1Pc6DNme1PRDKTeBBMpPUYhnGyY1NDaqAX6FM9vayCiu6bj7aZnQTrte21EZJ4YkMuCgiE",
  "key20": "2qVL88rvbbR7iF2mp6tBKrRNcXTFTRXXkRxGbPyfCwnZ9HZjAwHYiptTj4o6taZi27aQnbvLbYMoMFXoaTiYMcpj",
  "key21": "4b82TG93ns4XQaJpTXmShGV3u1ibvsrsQEot8v5hMJKa3tWxs76owqfWZQycJx2tsM3fwnt9e45hzoDHKE9RiY7T",
  "key22": "27zP4692LRPuGsCYfdQhYrAxz39Ak25Y2LBiNZtY29zYM8XiTvgpRrgJtgcVRLp4uA7MUnX6v9YFEesWm3QJUB9r",
  "key23": "2HRs5PXfimeBK6FnGuVicNHWbsxHm5jJYFEYzxSm5XdCWT636MoYnKvcgHi28DFLUARu2M4ZZQJKxpRWpFhGmzcW",
  "key24": "2Cm22XzB42uudJjL9HHDrueLppa1eUiGZ8KRVe2mx4aEKfyaZs6oQtnzsZ6s89e1BVAD6hZnwWXxzPL78vfYz8gx",
  "key25": "2yfnQoY42JCP4Ya341v8f6EVwNn7jCjzqHGajxtakJ5u4q5xMRjvXKU6uk5Dk1Xzfbvsv93eUP3jYbvRBYwCHbFz",
  "key26": "467hqZXDaSmM9zpb5EpLpqweWQknpMTvfmkWg3k2BC13yEnNVkmEzNfmCDVYxtXQCTutf5qEYcsBVmzj4rsKfmVZ",
  "key27": "2CsFUNx1MZsTgfnz62XdCQg4TPxDC36QaV2cPmWJDKbqEyUEgemrUhb2rYZ93A4wBNShW4c4jgRHuaL52y5AMeVJ",
  "key28": "vZa5gvZsGjuYAuKbMTpyN8Lu6vYNdP2U9VzTGetiTxeaMSmu6bAUZVqzokGcsUVTgYHKEMURtSkXxDpTpinA7Y9",
  "key29": "4CmnRGBDFj9Pzu9jr8Q8X2WqKSHEHGJAsdWALYvt2pEtwAv1NjAxuwAC5j4Wju6CB3Qa2B9YE3EFzS25Fk5kEuff",
  "key30": "5nwtkMt55NHiZi3PMX97Qvx8E6eSgAbyiue18juQ3sVEbB4SRoYrWEbEAvTWAFbPEndeJnuRB2UC8bNuAtjqT6YY"
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
