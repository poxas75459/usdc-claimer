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
    "fBpwc48QreM5KdbYXpvRQCCRH4pBarKrkYV8hnwFHjrotVkRfrZDnVvbm9mAx9wDkHPufLDiQ7U8aRQF26tzPC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uhN9a51wasSaYqTCGynRgHgpeuaLfJierjZqXHf6Bi2jM3hCpg6pXSQ5Dwc8UhHcMYWP4u2oVvuVwkoF2PAn6XW",
  "key1": "4SShD4qKjGgXaukEkVGuPtrZzYSCxNBRGjkfsnahrtDqNVJo7NBPLc4viBcHw9sufmi9eovmkRy3JCoUwX1AQ1d6",
  "key2": "ensF6aWGPTyX5TqJdj3QiQCmg8r4aSDjfkg7rroww9f2kfQwBKrj41TkFAM1ffXYR99n3Bs7dpfXXusBHjtmAoN",
  "key3": "5cSrcEKwxXPwhQs6Uohf3AWQ1enLwTXxngjesBugHj8TpV1t7w9xiMKCw6VkDvqB6U84sSYJL455At7kNQ2C6yyf",
  "key4": "5m1iGwhHJtCdi69xeaFGeu7ypge5DrHeZBfm1dvkmMMpSkLePXMQsw3hRdZqdmTBmSvRPLpT4E4NXADy2UaWqsFS",
  "key5": "5yEo9iJdQQ2yYxnvwBwSJbZ6tQ73TffZmGex14ucggrkTVUaGQGAJrS1ZcCsWytYPA1iEhYSmVNH4T5SheqmDAte",
  "key6": "5h4H86mFVU974QAJERWPXDGnYCJgRQyQigoobCu5kCNiCywfa31fUUfHZve2DMmnjTUx6cvjS7vo2mRC3YRvzpYj",
  "key7": "5XVwqRMms6jb4p6Su6ekEWLt3HbT4uLm3uNbSNPzKDJ3MGdWeZyYAjkShj9SVFsty4LYs4246VpE8r8uFYmTEoLQ",
  "key8": "2gbhNaXiYgUiHZwKw6F4rwtUQwZRi4VrBr44hQwNuPA8uQT8X6b7a1WnZXf6Cs4CaQQ9MSSAfDcR5VQVTbzNHJDw",
  "key9": "w71qVtBuguytd78SiSP34xxD4REtqUGzMFYbvyYNhtJVjW3FiD3SpjpEvKMYRzsC5Q7a3LW5HXqiyin2oByhv81",
  "key10": "5rAAHxD33HDVLY5Am85zSYmM53uqJ9kvqzWJ1f6hQ3Z1KJuj8hg27JRoa65GLQ8BVmVQwkp8Vvb7DzUtZTZtH2po",
  "key11": "3yzvUzzTMJechearWPET8e6MB8oZBdc3GaPHox9PNAmYcimGJtb7PoHZXo46mrrXtxLEZq5ndKb7pDxWKcBTt9nZ",
  "key12": "5919VLgzyRy4Cguoowo4QqbiR4j8dpaqU6nSRc47qfWGLNHsHb2LmvzyPQmyNjCNQUAemDCKtDiQZQXzsVzNDEJh",
  "key13": "5xLmyDRF893VXNef34ukZbixuSkU72PvsTUaTV3i2xmum2FJQhpsaXz2Ktu5LHfmVgAbDdaNujUkGRsytQWPmV9Y",
  "key14": "sbAJkLgEkrKNDLgUqe2kc5qrEtkQkNohn6jE3NZ6fjmU64aSbwuJUqm1Winr8M2LbdeFXexfuxG33U8L352kyVi",
  "key15": "3LeapfJJV5UuTtXPHrB6C9KB3cp3q2eLJWSjnNmZFAqHn5eQvvnxNPeJoM9nc2zvxJ1zk5EA3hpX1duGkmCBpgUX",
  "key16": "JUMej3WyYK7rYRREvzoQSVg9PcCtJ4qLgTxjCyUgKTJTVVukAtWaR5RP1kVVS2Eks77AVNbKYLh1tXc65QTf7gN",
  "key17": "53pXywiaDxX9DLJYa7FDgoYTRWEq7iizUS7LyrCdFrtpPAUKjtJiVTwpmHA2cmevSdq24irrxnLyQ59AXbMzbLj",
  "key18": "4ndnKKQgsALUqUfdKWBrjZmdRWa4rdhhkeY6yYcyXAGp8bbtzrZGkwx4Zrc9VVybBVAmjmzeMkK515fD6nZW3cSG",
  "key19": "2WCs2KArzpL2LLJvaVY56K87j2SksYPJP4P3ibrwDNy2HMXHcBEtbcuL4o6LPcpcXTWmxD3yaNgH6nCC1SXPEJFu",
  "key20": "gYHAyT69UuFdGAS3RKeLb7bdMQFxaDQc9mx785GvYR2wf6UJ7aBpWozsMVk4ds18YLJt14Gqau1Vp3wYWPeFPYB",
  "key21": "5v9ZdvsDLEajrZNWdWxoTzab9CBxhur5yP8K3g8qu4rQDc1o8CiJWQZ17vmKEFfvfTBD7LEZziNhVZAHRXvbGdi1",
  "key22": "e7KDKEoZ8Mj7bWQWLrxTiDbarnYGnwWEWspGUviHH9CA4WZMkBB3bSSx3rXsZLKcGdbNoBqXJBgrzVtfCydP6mp",
  "key23": "666BrrTK62yzFhLLQzmU1rcBg4dwR3Tssg2pdZMMMG4P4e8T395xX7sUqGxgWg2JBMXSGsMRvft3Vri3sP6845SR",
  "key24": "GrRzCAoWG2DCiP4en7NsEatZjuy7ABQmGEPa7N3BNDQsHR82QH7G7JZm9cBxcUxsbJYDAXfrk5zSV3S7oe5ehro",
  "key25": "46ZT9WuiNHMhLamPrS9H2HFG5cMr9exhCGBZUkHSm99HW1taoQS2myxvAMv885Nzi7nqWu7uSedxtFZ15uHRGmsk",
  "key26": "NCdw5so7sMAkzxQzxAcHtDJwyfpf4VASJnx7udufQMU4NWiJcbFa7ShHRxLQbNhthDB3kZUABVku4iAECAWqztY",
  "key27": "5VYsN7aWQCxTBkQyaTuPBybtH51fgVJW6iuuhbDxq7jwbZuT3A3GCak1U2c2ni782WozZikVmFdJN7YnTiPyMpGW",
  "key28": "2XyPkXdx2Jyzq4Pmm7UznXY2fN5eGiCVRn1aQtGZpXvfzUgAZc7fRQKe8CF8G8Sp4fb7rTLG4qvMD8rgDt2PU3Xv"
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
