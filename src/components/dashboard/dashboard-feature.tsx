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
    "3sDMunG7ZUGPoNFYSvM4MpS4Jo7Lg4xGP2J38c3j6mE6V4XBFYLpGmcWFqDXWYA8JzqV8TV6mRJ2nHgczyYaBHgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6WRLrUJcGpt8s4HMz2NtfAkg3SXLjFqq6USKFpPiiHWWqUzoW6EeRw4sAU1MXatg9EkD45DR4Bp9SZbNcVkFcV",
  "key1": "HbeVEpBUdeGJk3BLwrLtCyqnmo8khJuMvU2dkpMUv2PLZiwVdgRzqx75gxNQBYkzDcrCCPAgBHafn479qxEfguP",
  "key2": "3ctZshfMKeSETduhcqKByi3q63nbhG43D2T5u3ppsiaAKwVmBLMQmgh2RxaS9WbbJ888xEdN9J8FN1xuFLz1VvKu",
  "key3": "4CqCpB6xJ9Mi6zq6D7wrENGc7uafK5HZRoqUWBsdtSF7xTU32Nw7SkhAF7VDW84f84eHM2krK78e4tEEYSwTXRnu",
  "key4": "4XZvyDDgi8EEoL6kwzKFj6wcFKchQj9Hokq3vSGthm45UzoNTeNEFtWSKWdT9XPAmCXT8odEEwGa95bmcW1Xwgyo",
  "key5": "4p6dnZwKWWRzdue7D1fXusrEDtd9s8MBRQZUXAoEK3Amnqi7TFCHC9oYvKqdQAFGAtbmhAn7QMC2y82L1aMh6UGR",
  "key6": "4dwNyRiTSPiu8sfvBMje15RDUsAQ4obi6WEP4NyzQoWLTWAwxgAn4PzcHoHG7p7dkRAX5Pb9ALbG7JfFn15viygM",
  "key7": "5AoDTeEpQrHwyqjf8ewCrSefgpZqqtVGJpdCv7pTNqUuwi4zQWfyS1a5SDtgffTAezbqoxLFqk5WzpZvXY2R9TW8",
  "key8": "3ZCRkJWEy9N8jhpLGSr4psYJxaHRHn4QjNHhzgqGecbSaexeD3PrnsEpxowwuawMfC7D16adtBZirKZShZKEVVRv",
  "key9": "2HxmkD1G39ZnkNdNv6sKceGyfkem4UvKnnZ5aLjkCtpxaVpuvsdCxiUk99YhbBr78NPzQUxVmooptb2Mx56r9Ct7",
  "key10": "3CLsuwYPtomFzcyQjgJRzHjWhk6C2E9Rzaz33BqFRWofnxNYqdQ8Mdqj6V9LvkSV7UWkUN64gcJA7qJsc93ibLQn",
  "key11": "tGpNcnRUq7qPoMcesWRRRh1NNNGXVPR9e2CjQdoGDZ818qHe2zn3CASpZPRKw1X9Z1fnxoPY4E1HPGFQB5rW4b8",
  "key12": "1oVZxTokd5CL8BPH61GbDgebpTYaE5kHybxDaKoYUjNT26yTsmYPyDSZa6fe3AzGU49wBY76dsT99iBDPyKxUwm",
  "key13": "5ELnDm3SL5bwcLSrTQ5wYWaaDnMzAd3rmfndGkBoHnWvSotvNRFUYKu4mFEBzuCaRthUYsUQEAGTQatCs9S1rvnU",
  "key14": "3CuT9tS6vz5nLn7XKcFP17s9oU3L1juZndVZk7MGkbv37hw2HoKbpgTCMLSvaSNPhRgbLQW7K6aAPPosKt1ukJMk",
  "key15": "5UVNySC4YMGsHtYBHmrBNBYF8r3YwemeSuJ3ygcMeHGqQ6N13SxRstZJ44Z5VLxh5KAioC6cXTh9wvyDA79Qsor7",
  "key16": "3xv7Tk9PyB7N8wo697Me49sCAhfFV7eXXso7z4crSYnsaFiVDxUSBcUm633j9pD7hxssi81hKqdkqZE5yqryhiSi",
  "key17": "5gzvyefqr7r8uvL7g6Hr2ywUtZMhzH1Lxem6Jf4erahLguufGFz23H9F25AtCo5Gr5fk1tMB3jLCmmgTXkZQ41cg",
  "key18": "2AWS3SgcvWYwtYxeSc6BY54f1RGDPiYixk4pZS5mRbRYg1E8z39z7EcDWRUXWFE254swG53ipnz1rj7JXsG3MWdT",
  "key19": "3xbkzVMrxaVFPKCCxQaMyo2fJuPevcdksJo8RDbGAVVz4vudtjjmjEWwbKV2JfHPjPh9b42cy7ocMq4iFQ47bwoG",
  "key20": "5eSahbPYd5MMeduJt9sazNNSwtQFP6pj24pgBQJ56fVxJqb1imiDsbfznL6VRY1NihfGKocCdNv9MQmkj6taPC64",
  "key21": "2MgFZLm7asjTxURoSoh6h2hwtVD93RQtzFxNk82S9aZnwcYJcWhdTZ1WhPb5PQ4nkTt7a3oWJMWxJHHqCnGe3yvJ",
  "key22": "262WJeTMCN6stMhiJN6VZAvUch4fKa7mk5r35c2sRz3Kw6XUu8VhjYoCX8WBzgeZR1SZ9eBndYmE2ipihpJeMwga",
  "key23": "3FmiWkmCiiqBbFzfEqXNRCPEVjDUoLDcgwTEw1ZuASbLV4g2ymTm9D2tbCBryNAkC6WpwQjN9DG2trmk9KrSGGN8",
  "key24": "33kcYSnRmN15mpXueQbNHw6uKX2HdFrU3sK1yFEfohfREBhGA3tHW7b1xqDngmobCrxpSpWZbzTKfpv5v3kEWoRj"
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
