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
    "4aY7tEYdfPURMt458d75TZWX8rcAo7scujV9dzpAyv6SbD5wB4azWmPqpH8BgT4wSZostgjy7HyVknkj3rcAhx1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAZ79k2PtBeEkpjLwJeHj5f5T27bFY4XARXFrSWU3nYVL3LLEJMvTpWin1xXbrYEj5rAbmvX1DG2ktFhGUaGbSJ",
  "key1": "kEBPiMcF9GagDeFJioYZYDQNGqNfy7LyfcGZfRzpMbMvmunTr3d4nhQoCtRfuLNE1r5gbtz3xcPkjtJpTLBwihW",
  "key2": "2QQssaUyiiFMZXJmFND84afmFoce57m4jhbb5yUTeQDtoLufHVtotb2TBSWqVqY2QwbJMqNsuaJpNjk41JjS669c",
  "key3": "5VQHeAicLENFw7LNwbrLqukay4jtBtFmMfpCTqNj5LanMZL4xGDs9FauGDqpfJKAy8WMf2ZHEf17FWvNRoy86cZp",
  "key4": "QymwNee7yiLzFox2AdrTgC684mHshcaKaBaRrLhfiDUfHC7cjbDNDmDV9hkb42CQYkMPsewe6kpWryEGvi83FyU",
  "key5": "5aLgVBgECE8Hff2Ugo4QR3wDtELAtuESNFkaNavpBJsuJbKUwEEK9YBarpgRg3KdjxvBq8BDPEB1SLHDWz9JK7Hd",
  "key6": "21ejzy6djdmfbzbSro4gYn8BqB38XjBaV2becrpwnoT1jPp9VkT3TyUsk26J1z1cjP65URLMYf5dhH5FHCgVLj95",
  "key7": "CXmDgJTVgSYsosrQHD3LfZ3QKQHDF7EQcYaeYJwSAkyMHBXYcz63AygMWe9XnYz2fkiE1Pshp5SSw41AsMHmPDY",
  "key8": "36TCqKkbS2zMtoQNF8pSffGXHCu8gJdv6DHe31vorWBD9iFtdU1cZ5VAwFMfzQLTEHcnqkHz7YDPhwaoFD2GnnFr",
  "key9": "5TaeHzDdzAzUEjDkmdCvjehz6tHYyreaCJxLWEu46yTgppQK3KjRJG1z8HCwgLAiBfAaTFGnS6aWMBc91awUhDkc",
  "key10": "kLGwH1pDd8ikPEFK5E1Qp1TTDVneFKFJWDtDyM4YA9Da1mfZK7n6zQdHFoEmZWzsZ4n3MibHYG7MTjQHpFYCN6n",
  "key11": "raruvQepcrq4ryfxHb3U7iWugvuH1dWQd9kXX9Bxd4kjnG1pX5R9kCDfhgtu5HyhXR9mEiDdPo7e5NDqJnxbU73",
  "key12": "3BKq8DBze2Jo2HVcHZA6q8KyJnMbhL2oTqwc8jA8xUbXUy8ZHrH4PA99z8sJZzXcw77w7UUWcTYVEHTtwbjSCTb8",
  "key13": "5pnCB8b3T957axjcsD9k76ETTpMaYnSDVjcDRQeCkTqZZYznaCLqscapL1pScwwdzbRFzyoyoYSn1kTgwkWHGxFh",
  "key14": "4rwmkBk3DAZBNxY48zvGm1tRPc8WYWiYCEm3bFeZqy1wv4SByq6sfpayzr5PtwaLet79ZaAwGpJHVfdAz261mxze",
  "key15": "2ncafjZbu9ZdtDCiN2WR1XVRAX6xrPE67MV3xQp7kwb1vTZiytYshQNyawbEdfEBXgc9wFYYutooHUTQjM9ANdGd",
  "key16": "NYqU5KuswVn6hAgf6cGxZJtei5Q8n5WBNFTHbEKHRvnc4Uw7mvx7CvmsBZhxkoaxLtfyvd6CGjd6o7jEqL1vVZY",
  "key17": "2M6FNCpHi2F2axLixr6h1sQCVNBt3RhEDg9rooxQtkrJFtEdEiDtiaEpoohekjBcpmMprEzjsPhdhWDosFWXeyS4",
  "key18": "SaFarUvsW6TprkurVSbNWtzJqLiqcHR9SnMi2QyDW5i2tvQ6n3yK3RMMoY9ocYrY8DS1TYAk5uMZfW5qw3bKhDd",
  "key19": "3ekUznTbXsozcBNDzb9wmRY8woR8oS1sLxPKdH8QoDCVCFTWy9bCGNC8SVtUtHUbzPjrcatPdZE5NZ9EG6zNCMpT",
  "key20": "3akecj5Cv1NBxQCYzrfNfrFVEkkgQtRdFz9qj3bMn5kgGWffY92Nf9shktGXsCSXpHzrqNcLxRcNTefx3UvUhd6s",
  "key21": "2YNebp2iQe37ud6WHq1CFPJR13ocvtLfNcCF12MPySM2TJE3yenradVwk7iSj2zakYXhjpgzZvgsag7iaZmYFEVv",
  "key22": "52eYtUBUtesfWKUwUEXsqz7vu6g5fUFmkMhF96R2LJFCTJy3Pn4kRnYv5bFkwkATZQHCP8xs2fcEPzasg1ExsPUq",
  "key23": "4kUTdmPSRiTqQ83QgrN1c78LtrCE2ipBgbuMc2wxoboXxqxKd7BCiMrkwTXg3r2uAoppKSYVX32B6tYJwwMwuXnv",
  "key24": "98k8gX7XqzuAAMguSLfhAApyJ1o5HtzmjZmKDKWAkfpuuFGLGAaWf6mutPkfhBDRJ1zqSeGXnTj3JZvvrDYzbov",
  "key25": "zpdRrV82VjYS6aUwnzEqFiknFmGLSWMJj8LcuBXTrKWyGfj2isVgKB5xx8QA8WsknH8JpWHhVAaBdH7vmgYMx6N",
  "key26": "2w46mFZHFgw4NdLLsypVo3ZCBRMw4P1gqxBfkWP2xGYLGXUSF4V9gZ5yeknRgpCXgT4xBeGYBuEmTSFSwo78b5t8",
  "key27": "5fZk25FZ68y5LE3Emh8rquYJrSrsbfF7Yowuqqecf47YjNKD7SyLcUFtvWyNzb7xqLv1oe3a8SqKZdpKScJCYJAA",
  "key28": "2kt2G1PVm5c4ziKmuYWtPe9Dd8WU49K6ipg1y5nGKvdJ5SrQsfG6nWYJ5jYaQdAuQo85b8TCDo7voLMH4wB6VWeT",
  "key29": "2RS3oP2C7JZeKiv6Sn78eaLZVvWyGsk55CtG4siCFGjeqkJcA5QnkcPUtmsxxfvMb2meQAFzN4qKYpG3w7c2JP2a",
  "key30": "3g45YoKXskoWpwWg9WP1LYEbQoNvVVvf9nP2PojpxL753T9GZEu9FDRnv1qTPVoex5jcNSgcixKmjoFRXraF6w1P",
  "key31": "4KaeF8ATjBeZtfCKUaktJEUFoHUvtRPP564usHRd1pP6pRkX77xK21YpyiD5k21tCWriRQDBnAtqVSNikqvJ7QQU",
  "key32": "51hk6J2KAhAmMcFokjVMYVDTDgMvgDCFox4Y6FgEhT2pn989EsBR8oxnLnHTdTm8xbQKyXTgr1DKJXiyw4MzgV4v"
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
