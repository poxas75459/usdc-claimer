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
    "5yRaQA6Efy7waEoLK1LKakTvnaLb8K8BFWxXXMTA7Wp5DUa1tfz7HFjEm4ULf6ydamyfPWJLn8hcW8b45XYvbUw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kncpyvLYvdeuhvMnxd9EqtbinY7AFMFkcuTSteULCzw7ypGrbptEiK5Vb6EQgKXRxX42rSR1VnMZ9g2cJDS1Da",
  "key1": "5GMSnPDS1vxBebeXVuLDrbaxPGBYPBzh5GAUG1RuEyPGsQxjB1QSwXs42gmSxu2ADy1fXw7mpJU7nRubRZDH4HRp",
  "key2": "tf4VSz7r7L2nQ4VXfGZCTmWXGA87s1qZYGJYtGQA3CtrkkpgoAxoyG94W9K6Hej2wnadEyE6G8FnNDJSNYWXmVH",
  "key3": "59RXz66kpAM2JrkFjsSDXeMusoF5sPo1gnm2ScbDjrcLKvqJ4fdC133E7BEUFApJtE8u9ncg5hajWucrqLeBUY2k",
  "key4": "2hQRDShyJkaKN4FZFWNKK75PqQcJfjkULdzww4FDGnNfeofWEB6L8hurafLnZCvDCP3sjHQHVKHmuVmfsuysGxa2",
  "key5": "3ibyitFTJ7uj33qP6xWtE4QUj2vpE7mdWAg22oDahzpkC5Y7A52PMDfZG6RFg2e7p8HJZ9ppX7Ub5WGK96cEKbwj",
  "key6": "crhJd2jSXvWd6sbAosBmnbpoC2TgbPFw3MS1UU8Gd3nQL9inAsRFW1RgAYrGH7r7DGozsmKhnymZ8hcG31C6gio",
  "key7": "zBC2mQBq3k3hsGdaakxkmTt32X8DsRo6vDQycA1eBPiDgxYtzr82ptpqEZ5f35JWmRcP93EALRWdajJH4yUH8vE",
  "key8": "TtSuVRVwVbvAh8nvUG33tqjNJYcywTJQjkSn1C2ahzBBU7cw6VAZskUXLGZ2sPFboQsHxCuPdZoAY71sy1GuP3c",
  "key9": "3fy2884zYLWNoaDLB4AUNb3TEi8oSVPtLdQPworiLU1b2Krvc9vLKeJY4bauT2P2ApSp8P5o5yVS1sfvYWiEtBsK",
  "key10": "2DgAbnNf6t3DXns6Si9SiBu6dj6i9nHBTuJkoU6DmMsTaNUzci6RDnj7szxHW2kzyQgPY6EZs7bmg1rLHkn1MXCo",
  "key11": "XKjhydkxybNd9aMoLrejSvLLTN5YotPbUKAnFBPZ814MDxFHLru15sYvzeDSWo1pNutsgzBTSkcp5Ni728QBejX",
  "key12": "4kaSjeVHw7UQa4Emmuo8srCSLtXKivhZ2DfNsWJPbmoe7wyTkQF1qdBgmjbgBUw97Pv6GGaLdRosAXFZ91q4Rmq2",
  "key13": "5YKVji3gUrvCTXZL96TbkXPP8ENwqCuVQAcPznSr7qEt5RcmcdDbrw5aKBHJ1jQVxML11R9EosD8r74mDSTeFzC6",
  "key14": "sHanwVYt5KftbPCbvxdYKNGqQLLRM52TCyEN9EgBd8QsnjpqBS2B6eejgXNCrpaRvnpjZsQeyojVhvip36uJBXp",
  "key15": "61W1DAdno2DF8zfC5w3nf2Y5XVxfBeL2SfNNXmbXU7LxruKMuTLZ8x8UowkfZUDtt3eJvFFWp2QF2LWehQryVFap",
  "key16": "2LXi28W4C9DpuvnCzrch2FwrSM4uX3jsbSpMnnK3bGWARZRTQ8JWZjGF1KCm7Ybg6RdPpinUsRMt5JUexLNZqak5",
  "key17": "42PT8q9XPXMkBnPSf6boehZnhCKVNGfKALkyu52cYKrXWvysB3ZiURF77E4AU42tyKWo3paw8A7MehRhqkPmPviQ",
  "key18": "3HtY3uW2iMbPXtjrun72TLkUe1wUAjhNe38pRZH1o3QZjXbAmzSvQ8CB9W3NnRMYeBRXjXDXfy1D7txsArjWxiGG",
  "key19": "Bj2LhSriFnEvSZoDxJKTqzP514axXEuJTyW8A3cZFkMzUoQ96hYumzWtoPbBCTh9o6YKScbHkg1K9pkH7HjrZn5",
  "key20": "3deYQzJkrxKVDGV42tXRYGzL8Ch52xgQJWD3ZFB676g3zcbugQQZKysjpDq9dupcz7G8riPKC1T6JPewRmNSC21w",
  "key21": "2Q81btSUDHyXc2uWcECs1VrtQ97dBidUudbfTpunVFK5maHfhUgTmExQr88YjNyWqtuf3hJwdLXobwWYi3Cs4Fs7",
  "key22": "5djPVm4f2E98EpVytuahsjCc7oiqyG4wgcWLSrNLvhQhKm62iVtp6Z4NffjtXBLkUpGoEozD3xrjSto3i8BnWqcS",
  "key23": "3jE2TbJqcD3fEdETC6pcSb3rCNzVtUneGZ9sZ869upiWvfMxmoCa3SoDstRzHVDSUakFG2tAaJXdvVFDTq5ioJgi",
  "key24": "5ZW5rv2WGccNyQ2wYbXSQyc4xfWk3KgdjRC7HzRmsK5hhEpoXke6WG9PHF8aYczknGTUjZn6TVwuDNVJmDm1f9Au"
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
