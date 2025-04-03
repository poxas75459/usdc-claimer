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
    "5dWEPVTJ9nNwyimdkBZ3ZUR6tcHXj4xabtaz2D65NiNfqs6BZwpwFX8DP3TVGPuQnBfLn9F8Q7z3eqJY6HKGY8T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3vvehEM8eUV1jECzAWFnSESn8ZVsYxewFRjqiCwshDR7DgB5teVjHGmGe7tDTvFQZZayyy7d5kwcoAoP5F6rVT",
  "key1": "3tXu5wXrEPeZ3WgvZxsHJqE4za8NS3Z51De3py1FxDHQfUNyWCQn7JAiSatqyzhTcZuyQYYwgKkbaFtHVPZh4BpG",
  "key2": "nLFAUYhQVdZ9Q4DVvJiXhuXrY3i6GFg98VqPNvRm1FaW46PB8WgkViPubv4DkAGiwG8AKLihsErAJprUb6pZC6P",
  "key3": "4QaKFoNMGhq8jEWjsXSTKWpj5ACUwHbnSCsbx4a1otmKSnvvvgCEPuaJMiG6wgFbkieSq9UTdvh7NENvEj2dP6Dw",
  "key4": "33QUoU3MiBc38TA6d7YsjmUaxNie8g7enxgufKDdzkv3xA4sqb5hM7TQaqWwzhYJoyas3i4L3yju6zjHpEMA83W4",
  "key5": "5A8oBaUi8DdB26ZuFxoNq5w5UX6MxHPqZzuPf7YCigcWmFnaTRAHwTzxJBaWNvKsa79muz71xDccXV11i5cRaqG3",
  "key6": "2f9rnZE9WEVMUgd6FSf6ctzp49wLNMHGCbN18nYLQbEbHMehvyg7mKDs41u9Go3PjXMrPYtMeUXeqcZJhVFytTS9",
  "key7": "5PXyVHQgXt7wzqsENjru9jPZqJ3B9PrmZsfMTjMUiMf754WECtx7LzdDgZ3ZUGWJPAoZ53qaYGgXitZ1kZw6Pivw",
  "key8": "5o364djpHuBVfRtmXapZKENwUM8cVQK876fPDhZbBvikCQZCNkYPoKyCHKYVijA22aFsU34w896ArDDqfeukroG4",
  "key9": "4Uvy76VGvcPNxQ6oPbEfK2TgoF7SZAznJLU6Gwbewrv1B5Tt5XhSMKpQxJ3ng5CBA7oRTGz8Qh61Ftgz5PYLWxMp",
  "key10": "3HSWQZWVZf8KbQ89Vrh5VcxL6QVFd38YRYenPaK5KYge5NB4fc8fVFsfTE89Y4EN2whGEoNjcdREj8qzwVSmSu8w",
  "key11": "3KLazb5nEyjmuEzRN9SmfUuvn8fq7fvuJ8zLoEiGz3PFucziRStqxUQENhhcHG2WSzs8EF43uTh1RZrg1wdV1AN6",
  "key12": "4VekuvLmwfzhTktD2bvqfCboLeymbW5wzk8iuwMcDtUqgZfB9nHvQqc9W1PYrd1KtLTKV9two5mZa3qghV6U4fSm",
  "key13": "4sr6mfYm75cS3r3WnFwyGEup6QcJjvYzWTaRKQcTJSHEgnPsyZpLF2K4MSsEKAKt5SR7e6QeuLbLrhxq5nBnKP82",
  "key14": "2qnTcSkmGihvKQZM7TKYyTFwNhvsX6SKcXHBefd7epSwx8LKZsVE1zzExUpZCmyKnCpToBgfcedrnQBmCozSZZER",
  "key15": "5mGJZwYJrCsnhv1zQoub4uxLgx6UgZAETPL4SUE3okZjJqmqvxAgvaQQKbZvyWonPAvNfgureuoB8bXwySCftSxd",
  "key16": "5ws9E6d55prfiSaRu7HfCLQkxy8Z5FBaGhZSvD9aSNFGTAaiaTyjUjU76ycR3WsCv3p4dzwLH5wZ2h7ihNTeCmqZ",
  "key17": "65j3sytmXjiwnBGRdfTTmuL2LMfYSCVDyjza1ogyDzEewYEgFmX3nV765T6Fhp584dzUhSdS3273wx1oot8u5DzR",
  "key18": "5Nw6ezhfGczAWHi9iorGYp3wmucELeDf3ePqbp5rBMXjChB6DJShHC5Dhzn2J1kLKJm6sb5PcNGfJBcZrBGRcJao",
  "key19": "9UwiyMuUfQiU6TaUgD5LZzSFR8Ed5DMdhFzEZJaQZ9YvdSfX5utE5QZVGpiFRxM1oiKZkzTX4CgKx7kga5912Kq",
  "key20": "3Xgefy6aiJT6AMWQLYAcuJXbeBRJEK6LbDNcKBnDSEgaHqY57pfeKRiFZwJDWXbCqLrdDarZRLNLSTJHRoBuhg37",
  "key21": "z26untfqNMBtx4MRy2DcXrgkGezauhdwRWe5Z8fHuWht2AxGeTrcK8KjTBELuDxGjBku7eHzzq6u1hoYoa9AVSH",
  "key22": "3rMwkmVt5XhsE6cKHcCQck5o2hrpPcY33DUS5rScyuz2AQtYHV5DQWbJWy27H1dvYqEp1DN39dnoJ2deoNcbnMFn",
  "key23": "3h6TizfbiVP9J78J9Hcvo1gXftMERqvxRX8VFRK6kGj9ZnQvXJta1vvRs1TwBS3sqxt3a6N4QGLMnu5YvDF9bqiq",
  "key24": "5PPRE8CQdz9cYkYuwcvC2UpKDRPeBtdU5FhWUK6zEm3CYkSgLteAKsTULbzSX3UbbTL1sJr6Mf5JpwAzNyDy478P"
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
