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
    "g3GkEjXRFTuGyYkXVa5KefoBHUcKuJ4aD1uEhgRd7EycaY4BYXnCYHSoJCFZEfCinFBPET29iQD6zYgrEXsJhaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVTCRr5Rnw9Rv2raboAACyQuABL4rp1kAzXtz6PyNKdRybBZGDuXb3SmGNw7t3VvE3C39EtvC6UxgjQVyRjkr3P",
  "key1": "6655ufU5rbcsvPHtHemYL5rTpWr4bo7SUdbzQT37aFWwJx3f7tPo8puLjrMrSb5fbjDBjwzCwx1A5PgvFv7avRde",
  "key2": "TdGzis1sy9m9Mf1a2JHoBp8dQr2hx9z9LctpiQUg79Ua2mo2hmeh7WcwZHEP9MJEK3Kj2jJcTBVUvzEG8GCooGg",
  "key3": "35drccEjcmrpQPXyg8eDnTPL26RPnQwX4vCtRRHpR1foiJmaY9RuPLZRSra4makYsFJvz7FYrZMi6u24DAEyYFNY",
  "key4": "5oQX7DWsdHBsxZw3MteGKtbX5tF8EcLZwq6Asc3xLdbthqymXW1BMyvdVajgpiJ8t6r7zqnA1ziuXc1T5NWPsCM7",
  "key5": "5AjvNDfG2SJWSFoS6qQfRYCzGaEwMvwgfYZBsTDC54ipmHQaJFgu2SzcXjnMTw4K6xtsnhiNBjC98RoAkcH9gEgu",
  "key6": "3afvb8DBk5ybYFhdyt1ru26WzDyqMkpEzyn61vEGP2K7sgwzLWyTV9zLyQytAuxZrqSbycyJrZMzsoktfMnX1rsM",
  "key7": "2iKhZFWiPRVKiVbyNoPuowQFHuA6B73SneRiQxe7H895ckBujKQmncF5RHfoSzsiGNC7Nej9VB7bwP3AyqHVouRg",
  "key8": "2UkSqF2JabsxCHZ4xKvsDF39xGCqy4Z9qtKWN2oxzjSPtSm1EYgVFBqmSRRdrnsVxcz2GLPxUpNFvJbjxS1LUkcB",
  "key9": "4sYN9uWpjrzu36cHYaJVxMNbfEoD3NMduFQBX6fmhT7SefPtFuRpnTKVAXXTpArLkcwMfFyvNofCH3iDMVgjHoJ1",
  "key10": "41cNrTx9NDZGqk7mfPzLg9swQxJTCch1tVcX9jX92wzrKoSLYfVvDbjKfq9AgwPrvdqsj12dXGqjzwTwmr21WY3C",
  "key11": "3cFFHE3ohvnvcDW3etrw5gNrvzrNDAyMi5rQN6d1GRrfB5ACrxSLjgsMsauprD8XWDpuXnZ4TUHFWFqCiBYiL1de",
  "key12": "5fPjFoN7A3CK8cxLpce8XgT8jTZqbbC6J4p2qHqkDtPTNBA1RanVLfMbLf9cnsyVBu3ZDSaVikwU2rLqMKUuLuPZ",
  "key13": "3M1HpCZkBfhX9BPzouf3YXB7gDr92EVr7r7KWCqXjmcbb6jgLnp6g7eKaBVrrpZeJGxYmds1fM9U3cLkotyQjQT4",
  "key14": "2dtvvFgKVzMaKDjBPMAatvxRCXhhS4LtjEnB3kCLrdbVU7zrfdYpVm5zw6y7JJstz8fwZopCVeyETpjSXfEo8L97",
  "key15": "5GhTj6PKdNCvqaS1xANDmZTNrsqAqTWMGzC6EPCSuz76yXDYRisYn1SvMmeuViS5aA1kpNEnzjY5uuKfgpgSQMmz",
  "key16": "2pbMCrR2x1drUnLJiM5tSb28kG6KhsAKEsJ8r3HqR7PcyAcqNbQbNeUg1ciaSEsBbFH5ZR99roTtZi1GXz7hJqey",
  "key17": "1VMaYkwZrtYMb4VCvKrznhePChuQ4hfhj96gSaHPhVzJacCHaAdHdkQuyxgb3U382X2edHawAMkUT81y5MoZ9J",
  "key18": "zebjoY8Bbi79TFnmmnEVqAu1sizMvoFoNmD5k7bRPEf37Et4qKLzb6JY6gaRo6hAvW2tVK5pGXqYBgEj4oo9JeT",
  "key19": "YGtsudZiuqMU1AowT9FboPpk5MYKDLrnTY5iY9iaWwMoSBJ2raqZdefFtoqTpESTTHNEECjEAWfBqo4sWdD2cYD",
  "key20": "5x4wpYLCiPxwVAqNSjZWb27751spJ6wnX8zi5kj6fP2bg7KY3QzRQnt9E2DF9yqXYFBghSoDD3wDdjassdVRSsXj",
  "key21": "55Q8FnUiT5ScwTDtE3czoqaXXkdG6HUg7hfqjgt8vGFjPQtJ111WyAEeZdik9bvxVAo5mZNS3PosiCZiW4HkLDX5",
  "key22": "3tf6Hw6wR3dS1bfY7qnM3QaLxuQVykYeMYMomSvfs3kG8qiXzABM9NQjLE3tSpTZkGFwhuQPJPpo7W3FPpahaiFn",
  "key23": "466Z1ZXSXL7dJSa8eJ6NFg9cRPdzdHsNYg2N514RMvQn8MMtWzDQ94J1se2HM6h952jfCMA8j4JcxPC5XGJUx9sQ",
  "key24": "1a8YZmAw4vvjAVbbuA9HeufKmmTvtgodR4xRAhmMh3pbvyxJtVkhjtQfVHarSzRBKXnooXZAkMFHzu5HJW9Nj1g",
  "key25": "53EQzXjxyCMLaavQcTZ2vdxm91kdf6yNU1j7aUdeEyjv77phu1JrriU9eWzTvGDMDp3sE4k8Xfqm4B1K36jbp8s3",
  "key26": "299RJ2RJ6VdmKRY9mH16etsQ8LS69uWRcrgGQoBEoqMG2PYqBUzGNE4JFiTodkW8WeYcMLaYBSErHnE8S9xPniSp",
  "key27": "3GQBtneJptQy3ige1XynZTkmH5Mvdb5AZpi3tKAoynsabAhicMq5jvjmyRtjJm8SPV3BhH3cat5LCuT9PYc2q8ff",
  "key28": "GshfGzLEW4r3i3eSbrSywTUJDZWi7pBi5kMuH3znJZ1cXXaEopg7j9kkT6SZyb1ntZnNwZxAqxTqumPvQ5AwuAa",
  "key29": "3fEFnUHB8LXpaHxEqLv9etzTTnEfgyuEb483bycG1Su73DXY45JgJMJJaAUhPCyuhpRpsYGyeCixnE3ddyjktqMV",
  "key30": "2nc4eRyE3kSQ8YvqjRS5kVc6ZUmX6zsJGixFGZBHMvESxJjTV2tWSzupLjis94wSCzGm9ZPgxqeH1uTsH1LeL8So",
  "key31": "2VGenhRTof44CKoKf2F4uYtwdyWLJVusnYD6faqEk9i8uxU97FiZs7Yen5h82UP2LR1P6CaP3o8e5PDL6MMVGE1z",
  "key32": "jMQymSnnWhwihhR7V8kHvMWrmvz6i4ZThNWCDUv93KUxpEMUy1DxPPKRRCBLKUYd65oANBEisBBdY3YMR6f3bPz"
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
