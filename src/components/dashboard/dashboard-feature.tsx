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
    "3d5eqA5dKBDUUyTHEVc6zw2HRQFCNVSp4cWzAmAgHCzru5vEjtLkuuVV8ZCBFGivxUYNQogg2trL7EAAsxSuuDN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJSvq2pLVXpJYHAP9zQ7zf3UjGUYd9JeLEg1jSLiBwAvL6gKtfruxC9UkGU2Yko9mwDDBdhu7wL9TgiEopEaJyh",
  "key1": "4cyM4DXqiEGK8659MGMMrBntFvsuZwekGTSHWbvq9RaVNycvo5CD8gmUjUHu2GCwm9Amjw5X1qMmtNnxHtBiVANe",
  "key2": "47B4YGBg6WEq5m7LNSL1Rnf5p2kWYcJT2CWrdqVecimGZyCQPejpkxpJTFn6esiZ33rdMi3pPZ8Z7LSyJyiTwLyL",
  "key3": "2bHJaFaueMkFKNHeG4zihhegxCSpAgj8EPup6jLiSiT9hykMgiUnJQyYpdbp3uVMmikGoFvMfrc4dZdLzgypva4f",
  "key4": "5CjW8GVwbMk5Z1VTX3Ya7LNfGp5XDdGX5rAwpiqHmGDzovvnfcaiuMjaMUdNLkNo2DdRzweSJjeJz1sBGTTMdvWL",
  "key5": "5CuFU16Uvx5qdyuDhF23sYD8Tup1KTHJDViUWy1Ly2s7pHipEpctx9cPEQKV3Yqb3MB2FceUrU1ikac8Mz7uRkTV",
  "key6": "4paLbJTVUpAyywm22XGPrtdd1pYcUV5STHmUsPbrg6vm73pPabTPnEp9oQ5DRG94gWK6VPXZZDfvTr19biHjEYgs",
  "key7": "BUEcinCCxRhpTLQnkZrqP2ybeF8bm9uPE6nN2RynB1haKu5yeKAagqvtMKMK1yDKjh9kNAGaqx6bLe5TjmSq6jj",
  "key8": "2JxQhS9weZGaEBCDLyfaynJTYsJZnCp68W8yrHzLuF4drFGfeMWYNAxwHG8p2rjQvX19Hr6N4jAi2x7JK1BB3tkb",
  "key9": "5jJVGU1bTCYyhEqiNiJ9eqE4r7NW2cfvK1xzpW5eU56Gzz3SV5cV8VrQkdNVh2F4pK8z4SkvNgQhND2pban7tTLU",
  "key10": "4iuXSUrKL1iDHc5QVe8bWWeupm7wokgWeWSGdWFCDtwQap6NH4nFijDRA5zrjSrxPTbDqUYKb2DpGzBpYNBcrXi8",
  "key11": "2kFhE7MbvxJcqBMbDsyPserMbRzLoaVZUUikR8RykLgVkupr4Umb3BdHdEDfejXrer35TG3nUSJ7kxS9F1Ke7Mwf",
  "key12": "63fzNjq3LzABiLAnEAvBhuWp4JNQZqBXfub2Gc7VUk6uydfwUoDPUg6it9HvzYY7iHLfYJhZP9AJWbgMfRcprk9H",
  "key13": "52Ni1ah6ve19fQXCr491aKmSz7mLWW1cwgbYRP3dgZy3MoUrAzUs14zLWNzuyrUttV61a5C694k92vKsF9mB6ec6",
  "key14": "5bEwUwGLAazzpTLJRdseiNxi7gi57mKZajr9gAASNwwEC1sy55G2msWJ5aLtYLrt62cgMPrH8Pyk1vpuwaK11hp5",
  "key15": "3vziLKTMurrTyHmNQGgoCddnQod8UrenaaggWGRQHcE4DzqPzQxZrKxwBuC1hBNN3Sd32v71t2DAsjgmU3j8iKdG",
  "key16": "5ZWsormsHGvZZB2sN3SRRebRACieXTfokUW8Bsmdyz8u8wQeWu9WAbG4b2gNSS8UcncjvtTswhbHmSrvhEqXgUCj",
  "key17": "4W24NgTG4mZrboq52gcC4kRohukNVsf6HY5h8TBAzMuP7SoDixCr97n4WHN85jegquw2rDqznmv2oH1eweBgZTFi",
  "key18": "3kbmoBBuehR11xZmino6LfXdxatyYb5zbaBYWNziLjDWVcMdoni4H68TdFqerKsy32hEDduJhz6ry1SHq5R1BvGm",
  "key19": "45Rd1hH7hGoQehLDEYtDv57Tu1pxj6CYuJoHjU1BXQqzpFUq1txSn6eudHWDFguMjowyKbbwQzfooT1apmpDdxeH",
  "key20": "3PTbCEgfoRvL1ZM9kkaifrvAF5KWhBz7Uw71Ld5PFHnR1MXJMTUJv82j5CgqGEXTXseeNbRwfieENZkoEfuVhz9m",
  "key21": "3vqiKE7gvUt9TE1bbP1zeK57Si9pAcPo1jGUS2hyNQMyjD4gRjNaYQGBjavCduN6BAfdjmuzJ8pC2ykwnupg3Pqz",
  "key22": "31kNc1pHSzMd41QrhVmFwyNFAAPu4suXTPv8sNuGsqoHKngoauiThfVEgFhTq9zTskVc83hLvonjkgibnjpowENT",
  "key23": "x1r1si9XVrS5iY2wXSSZswsmAQUw1wSvZwQumrH694erp3gbDZXQKXUiU7xHUVdRSXsBM7NyR5MTkGeh6WGAjBC",
  "key24": "3xznYagMWPc9xVvfUfJ7GAh8WsEhFYEdGtt4AyVqaJrQVq5eJZfuU44EZpj254h6RsSK58J2KVUzE1pHdLgm4eSY"
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
