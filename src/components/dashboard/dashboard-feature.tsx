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
    "7MCwck6jJBZwwiir1AqaKhfDn28tchkPm9Lad8GVA7MdGfKRCsAUosrPgFQPCaRXTJi9BvMW9fm1pqx3A7LgRop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjBGZHXGpjRpnQ2iQMYEVcbqHMHgD7wSoier9F4NCmETgrE8fcKsCecGGhTsSBPDQfRPP9piQk3KRVEEdTTNZdm",
  "key1": "2QZVC41wws9snqwY3RZdhNsm1NLsePFziR2UUgvVJqKAte5fypzvvaasufmMifyfGbANa7cQb8M4CJY7KXHqrjZR",
  "key2": "q5eaR7wmKDm2pzTE1i1QkfnoYUc9Ta2JoAZ9W6eEDhT9nZgg7sMzAuwZHqzHpFM6i1tcvzxDu2tNLNocPZKgAMw",
  "key3": "5RURFdT2GRLrVMS4RT5FhWxeuXrcwSxFY29MRd6yKWovRxjfxvxyBPC74r9qNqxDUDyJna75pwHtCmVdmHLpts22",
  "key4": "zMvh6cLWMEAZHgKHWRr67RBGbYHbwmohJAQguBibUDj1i4GDYgnS8Yq2DokHKGXKTiHyW7BpD8WaNVCxt759w42",
  "key5": "uEhoExgnoRRtHMyErQNUKkK3soxv6RkUQkeBLBE88AZrYnPS7zkDX2gTj3HNtzsUnpA9BeAHfBKnUkzzkCitZmG",
  "key6": "4c6QpRoW7VMkBGSujQSfV9davn2t1XE1SYyqS3FtyVJoVFqABCLYYikHznazWULPqsLtDohVtSyFh6xxseZu6LwA",
  "key7": "4UgL8Lzj57qgwFnuMe6srg2AxAFbpuTP5QSyuSdqupTN817uHd88myMNvjoqaFgXw5PXXcXgsbrDNQ3ZyEJjFbZk",
  "key8": "8MT5Yysr3S358Fn7bt9rFY5FvRzvR3MnEQXvmfQ9fc9VqhL1hnrb7eAZHzpGBMCfCUh1UBFy6Dd1B6fTFALLc2L",
  "key9": "5wTbZtTqsKASCqVZazdyAoBn4H97zJmhgRVMvSEpnZMXX7EDD68LFNehWi3K1hU1p2Jq9v6pRRPQ9QjuJ7d1bmgo",
  "key10": "uTDnZcowKzsJtmYNsnaZfY2p2UnJHehANFYUryT8VGFKu7ttNFcFZ7suJSB1pJsG1QGsQKa6aSjU5vMg2ipDnw5",
  "key11": "3eAE5qJagVXn4NBYDjuCGibH2Humg5qMXzESVrNiNn4nR7qhj5LtaQJzBjK59Csar9xRk1Rx8gx3ZC6xdoGHdbTj",
  "key12": "21fcFDxoNPQ1R83d9f52TZoMfTBuEsrQFyw7aRDvNJYenWPTq8BWFzAAJJZahStMbjcHcCBmYnKhXnPfJX2U87SP",
  "key13": "tYrFtnk9Vr2fayqHTCBQeHRN4zJs59p4yc4Qyp4nXBoyqBiuXizYczSg7FH7A4kriZdNxnTR2rZBsnazSeFVvs1",
  "key14": "5JKxM2JfnioEU6mTu6ywqc55Gx5ECYi86wtHevMZ22NH8a54abUfGHeSgPxu2Kv4w2TxGe98bq7dgC98C3gJeBEF",
  "key15": "2wkLWUSnj6c58JhYUgpp97twFc5fUN6tJfVWcVYQnwcRe66vwwZuZkgbuU3GEPyLjt9Tsu9XRMHwJ3Zc42FGNi7Q",
  "key16": "2ABavfUvZ5nLypjmiYWWvXfCZ4pJdQ8nvgktGbz2h1NsiDEhzNS1U6FnTszKUJFceAMVdWfhtWGF1k1id2LUJMVU",
  "key17": "3SycnjABMhmBzM9noZHr6zQRNsTynKbmyVrPEaRka1XnttvkouhR2cyjwrDjKVpWcbtzq5Qn92DY65z3nuBfKr8T",
  "key18": "4Z3DwqgwVsMqKDJ3tAi9YJSVtQnUM86CHrHG81T11cX4x4VDcuxXaXW81rVFDVGqXzMDp9ztKqabCHso7FbQjAYZ",
  "key19": "23VWGWukofDprA5b74dk8maxjEfZMGKeuvq8tqjC7MFpbcG87xqdMxNPLeFAzpaFNuTnXD3gUmYbkKHF87sNmVj9",
  "key20": "QYmfhvApEFJVDCRLy6nLBcoGENPhtwVQAUVEgshGfwG7WczkNL5es9u8t72odad2bzuPTWEUX7kjQ8YdnRMWZ9a",
  "key21": "5Sb3k4aua862bLhook93jEDcusaSuacmWpSvWpnaA8qy8cVATaN3jSvjQrGXXqNMUyCynXfM6dNzw4kHuGRcWDyr",
  "key22": "KdQXb1aTUgJQr8QUzWR7t4v3V8Y55mwMhm2k41MnmKuGWAvj9etayavQT2RHH8CFGSz4KHj99uRbeaayhLkmBn5",
  "key23": "2HBaAEexYWVL7Zd7iYEsQx1siTsYE2yDcAaYSh21aQ9jKEACLWUYQETdsBKVGSFgJrytry42Ada9BB3cSnWsn98z",
  "key24": "4x9pxj76tSXvDGHXYyAg8oY1rayJtZT2m4qC3eBvDUzsXg3NgKptbDVEJPkRs5FisLhmmcuExBxqUQ58ZmyxtsdC",
  "key25": "4ZaniDzrhrd7MpGn91CBVWb5fHi54mYP3AJYNb2zkGR2fPbRHejzjV7QaxFVmdvKFMgqgB6ds3APpRXp43SUtwME",
  "key26": "4CthJB765NastDtx1h8aeDn8tbnoNj51ehKK4DmfC8MxWwbfmrvusHou6DAT75r7JA3TdwESRvVspgqYHxLgTRxQ",
  "key27": "2ARe5py1hG3evs3QkqZJ2ukgZUTpVH2j1zXKhoZ1mYaMo2WCM9xeWbtfrnUVXubvfiQLYMYnpMGdp4XirtWD8itE",
  "key28": "5PaZtwUMYp9a1CtPfteYMCQVtBjHtbNurR5dgTGS8pfne8qpPmAB98ZUsei4xFNY98AiwcBd6ySpBygFeRGtfta6",
  "key29": "3KwKAjtkz7zC87zUwusH4bAfdACYyAxpuTLAAy9yCU2kru4eab8M1PMhHPLWqDANhu3PEQQUjYPbhbLuyJSMHdKJ",
  "key30": "3Jxjx9AGCcWXvzeGyK9HfxhYQKQDz64JMreK8bH5d6xxwLpAMwApNRpB5yqu6wKUsMGQg3rTM1ZRfFLZa5tDa3V4",
  "key31": "UFxffnNQQzKxZHPDGg5uuKxkhhWGk9gqKgBu72LVewi5QjXPmzcqoZNtbufMMHt3uvcfURxYjReSxFUai5H5LRX",
  "key32": "3esjBubwundZdGaVm6uXKjVzPshzSf3RRj4MBDpnSWzcvfPbT5f7GQ9g7ct4syEr5ZN8rdaNFaYgT3JVp2zRN9tF"
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
