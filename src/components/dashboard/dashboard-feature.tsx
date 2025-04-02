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
    "2TED21N4xtKDgWXnSkRVMnaEBfZzmg6NNQfoyJR7v6V3r1CFVBYyqXrBhVuKJKj292i3nPXKMomXouYHmgTad3XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLhbeDBijRok276xxbkQGwmaaYCSrKS1HUHEVameHg8w2qiaggk1WHtJuHk5racHsJPse8UEcquU7djupvZV87T",
  "key1": "2BiKgWcp2DcjF5B3A9gNJ1yNXHoneKY9Sc9CX8QQjAAm3Ho562quah1QgycDNVVRpqqWnEHHJCchCKzgfutE5ZsW",
  "key2": "3uBHtWAek31yVxCaUyG7Qo1PayQU8xCZ36ex4T7dHbczdXYbhKaidSk7DChmMkZo8hLAnTgNzYpn8qiGZNpqqNuH",
  "key3": "4ehVgnRgrPXXCQ6sbAGJzDuWLxwuZJpG5uMYhGsdC4NvN5n1ZTjk65C1arLmkPtTZ3jUqPsRdHPFa6ykMhyshqUH",
  "key4": "4Wc54PbfS7gwU2XBCPCG4mvgCRv5qCnSjWbxwU3F9hbVt4TcpEqBMsLfAiobdyRuG8r5Ts5hxpeRbA7S5cvRCqJ",
  "key5": "4bGGYkiNUnWJFU7yAXmB4AqPyUcgvFqWZ5tKmkLt1WBEkCes9KiY8gEdnza7tZhoKtxBfc3GJCHgNUpTJFmKTCLt",
  "key6": "2RD8yfeLEscuuwWh3DspAJPkZbzkeWiiPinApMVxBE5fcJg8nk3ESrD3WpY8emtTxi56ZLGMfnkQUpQWt2hNx1ZC",
  "key7": "m3D5QtNnCEHSq2Xafq4WbYM4rQjnm4XU4yjKLgR7H4qjt5T6f71CJXJYdsf2nC6VkEBEeJLGgDTVpxVM5XanfAv",
  "key8": "5Moo7AzkTe1nJD827z4ZbA43dDby8XD3YXbcKT4pGRUwceydgFnmSLN8HCHMxfsygmyB3kcdi5miBHWa7ytDP98k",
  "key9": "5tW5NHCBFE7VPJoEfhv25K7DWo3Y9MRXpWrKQAHuCMrjwvJFe3bNh7cGcBSrndxLMqhHPPiNWfqd25BF6Pky1ACC",
  "key10": "2gAFq6X4sD5Z3oAfCshncFHbcQ7bLceDQ3vNfomMWLhaBYrNjSX2XUHpbFp86bid4rX9Qv2jPabMcAHZg8hGddpY",
  "key11": "2rZMBhzTNRFX48YwSv9aWS2F7n6AuFc7JkcAkFgVygvMdacUMN1TukU7Hwc4t4F19CMFfhQt89EhDACh9NN2Fcmt",
  "key12": "2pgav7bneBkLfaWq8HCnMdGjkjJu81eSfjHKhGHLayAYh5c1jBZTkz2QZT91hjBk8jm4nG5U6DMq9JJAfKfKdV6L",
  "key13": "4P8fGqWStd9JBda6CUk4cUqyak7qANw2YzNWWGQdBGojGbCPp9134Q9kTdzFzDvxmxJby2C1YXsHP1piyQ5DbQbD",
  "key14": "m1njvksWtd8td4yv89dYJqSwBAwzTK7sdJdaAAYxZ9vPUN1D9YcV3fY5588dAC2gux4d4QarFnGK8PkSV8G6swY",
  "key15": "4rtqGgbnBdUTgUAvs1EfZmMQJw4eKLZm9RMJYUScxnJYNhZ17Tf4S5yVxcbwQtiQFShMe48QhFU1ZZW4LEtQXGGS",
  "key16": "5qUELf6JA5dHbCfwmYnta8Y9ZHAouzNz8bo6pbS3aR5Gv6fn8D69RdrdCJUNaCXaYrFwNiVJsrKDDY4yovjENP92",
  "key17": "XqhSMWCQLwUGzai1VJ2M25WBxsFo2n1NXQRMrX2U4JdssEoSN8PKvfS8ruzCY3AcZC6osSg5mH69WGNjJqwg2TM",
  "key18": "4Qc83gzDXS1T7aWZW2xGjQj2Vp9uj7gKSZdQMJjVssDYeEM3LjaNrXJ2pRRe3EyL7tiBChG6JwA9L6Hs394AM4hW",
  "key19": "4C8p268WnHN4vk4udZmi98XD7niJXC3KV9m3TMGKXuQKBfhzV2njwfwSxsQfyC2TqfftoyoozArELsQqbkazFzAA",
  "key20": "5gfSWmEDvUtmLQ21635Fd4XVBdq9PkJKWZrtpoqRcnLkZPqKmsowPoofUomA2X3vZoN2mM6kZsgJB7N3zcwF4P9Z",
  "key21": "5oEaS3y3q5PQUzu1JWudCBx54HfM2odfAu4nsFNCS7EcDVe4v1W6my9t1EQsreNNYdUqkedmvX7PccH8WVo3tpUP",
  "key22": "4pBGyBhrznZHk2o8PaAban3DqpYNdR79DCuLguo8PEhuZhpiKb2QxRcE2XChHEPLMB8pRR6Ydmpqk72tnuGxbYbb",
  "key23": "5NePGxjYo7oSEDr3fJvAShvKVri9YpJqGTRVifDhtZFjFJUnpmiBs9xMdNtaoi4rb6Gd9ASdk5HfbVF68Q3BCxsR",
  "key24": "5dvjMsm7mPj3tj2t1fArZPiSrjt6ebZ2hFm8qwSUgTxiSQhW7FfNFnokxSEsB5LMXvz6ASEnfiw9tDaKJybTtM3x",
  "key25": "5kf6oHiPHAqae8MDV2BKbW3FAjKEnZwec74UNxveqqyfb2cXxJsBKdUdF3C27g55TPk3yiNBCX7ihFPaPn16Zkja",
  "key26": "wP5qivJnzYUNQt2Rr52ofHqS3oZ2WvHYXbuUd13DWU1aTghQTxmGSr24VrY2Wi32RqHUfad9RaMrCry84L6mTJh"
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
