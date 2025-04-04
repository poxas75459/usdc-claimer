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
    "Bk1XpNBRM9cxnehYUrUjUwLZEXyPheWeabLf5VoYGvHA8k2Rn48qCCZXE6RENrQPX5RcfFv1Xd63kp4Tvj45XCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNgZf7Mr8i8Ctn62zzGNEWVnYghHBNe6QMUZmxEPxJgvrXwXiYugb3jSxZ5j8pAZLWGm7Xg2af5YgMovv5oTEdP",
  "key1": "4y6J2kxaqWzEhSH2eAD2Ddb5fojUPAzKw43Un7mYjyfjTEupnNNtMhXPCHfpZ5ou9hj3NnPn7zhMbHbDPT6MBTtt",
  "key2": "WSxwXkMbt2H5Y8r7Axu316S4qYteAvPzdiKoVxE8Mb7NWgS8vFm4WWZKJeaDnqXmcRAj3VoHUkx2t2R3wNeTEUz",
  "key3": "p4W8ZcjhXsbMYhLgPvQZsZ1m3YWrDrdhBAy4kdre4wuD7n6pMwW7JjyRJLgkpatDemYG26753vMhWEYokVxrSXh",
  "key4": "5eofDyV1vVTPL7DfTwkrGCA9KqMSfBQL4gauZ7rUiXxbSYTap7QeoZS8R5GDrdx2b6umqsSyD8pSpvpLJfU4tA9N",
  "key5": "5phQpcLW8MXJTCP4KnikjzPUezSgYj1YyfwUYSzCQj5CxgGvYG6GhXbifzm4dcCkzvvrDXdsb9QLhsJf7beUjsbW",
  "key6": "3znDKBm9PVTW3cS8pGjCmDGKw6X7BncGWEBnfL6LR8UdgM61iwjwHFovHuGADDRw3PMzygSKmruTHpZ6iRQYuNkD",
  "key7": "5kxRptMzJoU9jtqeB5u2t8gJjqqySivezHbSMJWafS2s6YbfP7ND61eUbmizRDjrqrxYVu51WjFwDunxLyZ1oggw",
  "key8": "41ZCpEabcXeNS2nwbcJEKRgHjLRB3iUrr5cDRTJ5hYNW9rrdEj2r3cdUMsxJP9XEFtosPUoD3TyFaDpyRPD9Xu7g",
  "key9": "48RS6KQRViz6uCJPDu6Xc6oRrFG3YotFgJS2wEzVTj89aaDMAQrYsysvjFfWYny5PPqZAZZdevFyJU3XasYansk7",
  "key10": "3B9JYepiB9CKNGdmwQZ5ct3JGVBAPn91yQcaxw5Xin5xFngjfjFr6gVVmGD9ET3RJeRjQ4iCdBpbwDR28HxYNWcG",
  "key11": "4osV6CiZpHYdJNdD8oxjEvMnzxYe9j8Niq776oaZhkf45qUv74aMtFdBUaLXTCokKtqCMLAfBRsDzgn1A3zUsvVx",
  "key12": "4nts5zRvYNuW3k464ESBniM4r9jzUt6GubaiA9xBFfAVNa5q6UnB5XTFPhsFTQyiGFqLtoKRWkw4ppi94yQJAcmL",
  "key13": "gZ1WC5UnQ2SEyqjP45PKFK4nHe9qZVQ69YUR1D42sKXBw7i7v9xYo85LsRtY7wDkycgnYJrUzYiDtktSDuTJMHC",
  "key14": "2QXBN1yAjLnDZ8GmqWndsmSSDSnwRgCT7D7BNCscRwVY6PKF15uW3HcwECKhkAokXfdgrSDLvE3Cn5CeKErSkcdE",
  "key15": "53zaWnYFyHQPxV7iCnhwcBYjrPbGqDwT3pnJw1DFgtkUwt5B8iZrrHn9RqdpiJ1iBBAsnp6ibaCdyQsKVLQEfabr",
  "key16": "Uh4NX42SoHXKNABTVVkix2EGhtctJhrsABMaKWZaptvgdNw7wMAfsfCftt4kVH6XkYB5MQ5VAhpQDceazHX5EPj",
  "key17": "hQdMciiBAWec9tvoPSQT5zQqnPm73cXtn2RETnJ6Jh64aYNntk6v64HwE8GFYvkng5RDMAyGqcVLNSsNigUbuej",
  "key18": "21VR29j9uJmRcV5poeY5HQsviaWHhrRtJYF4zrGY1DVpjuRGwSLLsTDvGbnFPnPzuKCnisRnamk8xZMhFsuqKP2M",
  "key19": "36vCwYbpd4Hcvxt2K6NktEfB6Yu3oMNUufMFkhuB4roVfa9dUM9QqLkNCgZTTBfX6HrxE28D2rJMe9pWZpQbox3f",
  "key20": "4NHEVZ3UPFrVhJGR2VjVXFkQcCM1HTQRCsbrLm74o5rZaXLjN9Q9MCy2L8KnkZocP3iCATBkwBUA2Lp6RaVjJVaS",
  "key21": "3VD49jS8rd3NNsm8TyVBYNophsbeF5foG5eEfiSYqASTTQhjrXMrtiNbmx1uaQc3iiHDZiZ9vp6BfqAjHZfufeJv",
  "key22": "4zpTWLm1wNZZ52z71xJGYmLtiu51AEB5DhY5zBsSoyrKCXheCW5LR5woqBZJe24EzEjLDRhhUL4JTG5HMV2VxJx1",
  "key23": "2kdwVTTu7BQQP6JQEC5oD5hiaEbp5Ccv5B3aKg7EGGiShpSEUdHwxoM2rn6HrAcDVAgZYDV5yorp2KEn2PNJysp2",
  "key24": "29S6zAF6tzcN8M1Rzjd2VFyd1uSK3xwsWUr7EiJcEmAAssERkaYheLKZKc8hKEQ5LZobcMkk8TjmjTJ7yibTKDC2",
  "key25": "BbwacJC7zoSxDiUc4y2Jw9KgKPz5dDY9ZmLnCQxBSP6dmdFY5RRKHpeDzadBninF4mSKVzatDv1RKeTnBSdz1nE"
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
