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
    "63Xg8NXmHnwAvcgJS9USdMGC5Ee1emamApqE9iCUdxobjzre8LV6v1MiGiEZKkUZWZ7rMHeLaiNTFQpc9C7oQ81V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNCJkWW682C97mXaq6Dfn4r2fL7hp9v9XTH4ivukB8Yqp12RzrYiVpkTjmx5cAiGh8D5LmdrwWXRrvJDRE1kvhZ",
  "key1": "4VrLLokMUxGcqzMnxaBm4coD7m6M4iHwU6XoJW2cikSXqCVLJ4zRd6XQ9i1kFEc7DuNsLJ8EbSVvgm8SffSaenpN",
  "key2": "4EixxBZZQtS6XsgCLUGb8LF7ndHGfZkSmrEWw4dfCbB9UmZGERhNwHfC5n94nJugoGRKeaJexaitEu7pQwEKTzEJ",
  "key3": "52EzZzHZhsMqKScEWeu9izqh5PoRoBXXbutkiJzxEseyp8MUvgcwiojbc69QLP2HZFFD6x1YQpmtgeDejmTXJGah",
  "key4": "euTQ4EFrELQarK3Zz944ydpT4Sfe5nfDxwk1YnuTym4aLL3aiW152Ze9wkjqUj1fkGZxE3LGcQU8nioJ2oZ7w2R",
  "key5": "2J8HnwTcwppkC15BN5rhr63LzcDM9R36cFoirS73BRcErMuei9PZNqs7JtRHKo7AwtjeheJ2Z66f8cQYRcHYZX1E",
  "key6": "d96SuxS4gJbNoZ2Bntw3SFHC4GKaDYG9AG98E8gJR26fPPDhXEFDvaZvAX5DxnhaxLDAFbuEKRx9mCwdQXMRL83",
  "key7": "5akJXt8CmEeJeeDNde6Mj6ToTae99MS1UD5suW1guXQrMRefBtjnT9eCXwt22mqQJqGJbcM21dYfESyRrjaRpKgj",
  "key8": "2KcdUsUWJ1pRSB7YhFdjtsfgMzoV4LnieRmr7DjrJG8siZjLWyyL9p4MjPafUbnQ9xdDuX8GPsuk27U1RNemJFDy",
  "key9": "4icAzaE8ydL8pjZ9thKwyFFiXtWLHze4xRKuLHZbHvwuPWSDFaeZCdEMfuX1URsCtJ7Zmq3sEvXLDy79LpXB6Ca8",
  "key10": "qAX3oA25iq4p45raDdo3N4sQGq8A7aoubHD7EcayaZy35SYrWAS3XoPvzaeLM5oJddwht9WYj9fiin6YhqB4e5o",
  "key11": "2UYJ59T2s2XJ8mAD7WYvu18pyk8ZmEi1Fvxiqzb2fSoaWdaEixTiMg4D6bUThzd24eDqVtTKefoZABA2PnsqBG44",
  "key12": "2tShE8e2DVA6RpMH2Mb7d8s1uBDkragW9bgEvSvv1prd2hsgSaNKXivgm4w2xPvu7KK62qooWKQgH2bjQGtrcM1a",
  "key13": "3VQSXAUYwnNdLMvLCAJHGxZjEssSnUVpo9kFubX9fCKcZtonWgnYYTUcFuJVF49qsu7QFR3hMYN5skKCYrUUe8Gn",
  "key14": "3k6tK7QqXZS9KtE3v5w6Q3wVGejn1tNui7swY1cvGCoE6ihr1C1QoULCVc2dJWJGKpmAq922kbJihNuScT8VXm5p",
  "key15": "4KYAR3zotTANGhcW5SbgAZNnfv8JwESo6Yyfi4rCHUdDiacATEZwvz26kLhej9f4F21njJKFhjfiizEMaymMBgdm",
  "key16": "4u7TdayxgKvk89CJt9cAoKPe9E4jwGLDGbjJJNzYTMFerJJVASqJL6KhgJvJLVvziDCbCmSATr28TvsdfwiTb3T",
  "key17": "4HN2HjV4APG7W3Ntey4d93JjJkhGYfcCMw8DMnXZjUu7vvYaKft2D8XoBAL9hztWks6ncdMSMSJtvePzeCVxUSp8",
  "key18": "4qnH9W8JZPjxA3xQpQcWC37bFSNvUL4wso2aDmU2kLS1GZHYiomjGB9YxYLNt8qVwVgc5xwNtmep5vKgfkCqmBGk",
  "key19": "3Jh7aMMwDZLEXGWuLJtfagnofsypxMsdNpyxGC4fRhfVM7512dnjAf1gshWXsQxY17cCWhL24xq9XfvtK5SLb8DG",
  "key20": "3zSPako4M5ozNAx6dVfvb92UGWJhFGkpjHbDc6wvLoyJBv2c3JH7U1Wz3rdgCkDTLvuJG8Pw8BngEUfUtDPEnkWG",
  "key21": "2WW3abduhCU6ECqMx2AkCaJYqsodccpXsHioyV6jz7GUbX3ftkyLkgN2VV6Y6jn39SZVaarR2KW6jAwnA3HmTqJb",
  "key22": "2VUFUmfYAadm19oyBgC4KToQTafGvuDnsZKVEoD6zP1qJ74ttAaaEmkm4UPdv2DZN88muCa33zurMc4gttpPAczg",
  "key23": "4Xw5hedTc9GBsYeCzYpoCeVmFKVNpsEHAYrcgqbyVf3fFBoLwTo9Cs66FmopqFsSvF29zQvaBSriifcAy4tNKPYS",
  "key24": "3Q4wsrUPgHffRVhjpvTvif2eRdzxiVuiFdYPM94AH4QiVUAHHvWsGn8BmL2b5GtUEENP5QiFuECezW8QQx4dui8n",
  "key25": "3qrty6RmaxJAh2ViBoU94i2FSq5bqxeMzsa8NYCxzpzWSH5jzeKm77SJuiYUWmKSk8DyoVhWX6HYPEWhbccd4mnW"
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
