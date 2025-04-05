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
    "3xZkyAictH1QZDLjSVLYjL3cZuaph4j1vHGxwcrW6N7ckB5KvRsttwGPeRBgDaS6z7trzJEL9Zai1LFXKQLAVkFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KH2L91NxRTd6CFKoCCnEyeyMJJEbE82dxxkyKTQdXSqjeV5vVZEofshgCiaAH6nt5V5BWzkb96qYPAaxXHy8BiV",
  "key1": "53JhVQaGhiRJ9WtjHzAG1dhrdytKTARbHHmSfmUGHkFhnrKYToZA1aXSh4kQV3ZTufhnoBaPxM11vBF7jFE5xpok",
  "key2": "26jRKzZyBm8qCFGqjBiXhPnv8akwEPHvHMDZHFHqmDgaF6PtG8NGJdM3mwyWvq5e5VBYNmmpm24jeFnbZzZrWy3w",
  "key3": "5U33HucVxqu71SrQV5E5kCDx5BNkdhjwwQi2q7yWJkLW2UkAfvtSZbZkRa89CaJn53SzebPJnHpfcMXsENo8Nxto",
  "key4": "3UA41jKNfK5zxueS8bbNdsgh7dA3dNSz3PLQWh4bghoySxAAee7tq8cei9USa8mC4PtYULxDGdNyqUugmNLd23Qt",
  "key5": "5PesKV4Amod7WDVPhwKfVTKtL4KzZTemVi6dafHDWkQ3sF3sEXRzTi3yFSpKDSypa8rqVXkUdosL5fSA8nsaehaU",
  "key6": "4o5x3PAycKpzHRMyMJV7yXP2FEP4z2R4SsF2rzyqEwwQZwmiZMr6iFtwphGNqzgFCMKrEQK384jkpj96AEXUCZXU",
  "key7": "485pFnypQFQqM96e53hPxR8ty2LgEKLmQxzCCuQ864P8eU8Pusr7dLSyMGsvFmMgZe4VWNcdDFi9T9aWS8YtTAoY",
  "key8": "2c4x8isKG6Q8b7iGWS5knXdutU1rsJrn9aPWSrabrNGW4u1Te7brjLtzUWqSrViopzp32tk12Zvi5E5BBSrtqkp9",
  "key9": "5Ktkz9Vz4UYFcf7tt1W3FRuvn8LVHa8x1GTJzr4RNGLjaavNpPfJdyqrkmqjcAAnUW6fSgHqN3LTUESH6xK7EPSe",
  "key10": "5yhjfRx9uyPtxequY6G7r4bymWzHQhqrjqgKQDiQWr21ETpJ2V5KvDgf3G6aTxrL2tA7Msn9WyWxk2yV69qTXBzA",
  "key11": "4QYyPhMHTJid9tWyGhdj1SDukbAVnnt84qwQS321DTjLKyg5XiXRXF3zqLS5TAU8hmvVaXtFvpt7GWPJYFJ3Rp8Q",
  "key12": "34DY9MV9rdLmuvzNgKi1WFqF5mAZpFyFPALSddtkKRotasn9FCkcYSnYJBCeTE8Q2sYMkmmDbeWn6SgSY1st6wUM",
  "key13": "2Q5nEVoqHbe3mNvsWo8wtFHP6rMfTyD5s3yDSwrsJDTKE7TgwHbnm5jE1KzrbFC4FKHnGNVaTHRnhUnmcDuDKHMq",
  "key14": "5CM7B6TwG6oZUKtEJ2akGHNBm7PUzGGQkJG1Neob5YGiuFThV7mdbDrdRuuUrLSpayxFGRShQVaY43uDATcuXMSx",
  "key15": "2kzLTqgU8Uke6rw2dqZyQTDdGLmEUDCmfrsHey4cdbBmDKD2XM4ZsS3qtvocwMvWqrg1m7o7viySB4NLb6Jkm9BH",
  "key16": "2CbdgJ78qodqgj55aiM3TMXC9Ht62pYxnStGCGtV4x1TnFsgRaJobC5oCCsc6KdWeEYgCV8yA8w38fJHqDqKhx9K",
  "key17": "5tz3MKBizhvQGrvaWePpsm9oPuusTuN8LhH7xyfJRDXFYhkAJnEriySfXG8tKgTwKvLkedF5WxMeX4JQxrpRfooX",
  "key18": "44GS8zkgmWWujuuZEsDeX3KQxknuQt4Z3sYUqRgKhMNan4R45hXwtZWduBC4tqosVTVeYeQH9w6PH8fsd62dFWof",
  "key19": "5tXn899hc5ztqn1egoVS4t96k6baK4UPsEfxg1Q1N26BtfmzwHtHhF3mf2Xu18jzuWhGJNQHjwyfiTbgPyGimqAF",
  "key20": "2jR9fYYuVM3kf48YUJca2SAa9vTAT5MFRm2sR8edmEnsAz1zZwEphW9T1L76xipCnRHmB54yKgj4Ei9w1UwCHwUe",
  "key21": "KMUqKSnJDgBajUndwTotVbvgsNJQFni59d4KABpicTCdE8f33zLac8oiuKar1BPtqAmjTiCSfLcBNDTMUEr3Q6m",
  "key22": "5zEVY7tbd4krDGhDKJ6cahgUyLnXXYZQ2itfv15DDfEDHDq3F2uQqeMkibNgHZs72cFLFseLKDQShrzsoLaqHvUu",
  "key23": "5bEB1CGWkoKrhawaRqfR5zKNxQHCJYVdwEpazXncFXPTkhkgkrtdJkcM1zg14ShiSN6g3xgH4J93VCqYi1fnr3mo",
  "key24": "4UtAurxY36W4jcX8k95rawR5deATdQTny3Mcq4d7RJrNzRRNUDf2SZ4XpTs5HzsECL1TC6rmLe64gkKwtHNzmLYJ",
  "key25": "3fJQoPpjFwZmMu7ho4gG3GjxJcBpHCXx3HbRKXjZwJvxouDoFYimefVCTn3HJYg2fCBsRAfN5Pd2N9HxDzXjwbPV",
  "key26": "4Hk9H3ceB3JmBmnQd5aCvpSVQWWVCm4VTQdu1CemK2ncTwgKeobKfLiqZCsARJKGqmkBWNg93p16mLBZW9At9cpi",
  "key27": "2uwmQ4Jj7Kkz1yVTmoLJiVuav2DjmV7SNniHxePaPd31ev2ALtDikAQHa8ZZSZEMViAQtGUs1eX22nenxskeU3nG",
  "key28": "4fPEELetjhngtNp9bjFwCZhr86VK3bSAfWPVxPMBT9BFEYDo9kp13neCE5paLG36UBnePgP2Kk3SrdQnB4M1teRL",
  "key29": "4ihH3PchoLvPCzc13Nca7EaLpbjwAVXPsbgjKE1vi1H6h2eEvRyLNyWwoQRhu35mChuE3fUSi7nZZ8AsZpsaVqAj"
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
