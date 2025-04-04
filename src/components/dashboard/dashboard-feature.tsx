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
    "4s1QPD7TZyrfGBpUnij73RoDzaa4f2BnEsBMZDNwkfrvpYD2nTzmSbEi6kW4ViP1SzJrdYxkCeWGcDrDvW865UBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijKwPhLYPd38CgVK2xwTjfM6JYT7QgojQcdApkBDqfcUgGup58LeJGn6QXrrfX1JxLyLzvYU2WdjHEqZxjsnnjD",
  "key1": "5jvwMb2rYNqDC2cGqtZCqostJWkxvFdU4yhCrBy3FYodX6Aw2Ptu2Tqnc4dKvbwnK39P8EjcWEhSbgSw4GU61MNS",
  "key2": "2gYQea4rtgAdzvKBUhQu59KDXfLRTFUynsu4D7iBeEzaNWFRci5ZRSKKQJVnzCeEShYUfPQUng4WDooJqvjF1BVk",
  "key3": "4TgBmA8wexTH8EhAWwWMBwkRHNLBzgdzvbFhYeN2WH3aju59MusWvthqoDtXnAYxM3Tedb83Hq53CV7QTKswxx4a",
  "key4": "5hwHpkSdYFwez6k91uYpVfKR51XiGigBv89TJdoqWiPGW9gWXzwTLvbjv55CmzDozZikiqLddkFZUZroxVezRmCJ",
  "key5": "346Xj5pvPXpWwiuRxTL4iQpWDcbMjpJ1w1NaiYKJMvpMfhWyT3J4atVso7GzvmSLR2WjovadyfEci1FNWK9Mnzkv",
  "key6": "y75TqY3Je2XRxGgW3Jm6McMF3C5h1s7XzCjF6cfNubvz9pRPpinjKyhG9rSH6uxRBC5JL4UtKSMC8PDVfdsGwYi",
  "key7": "5xwQTat2ZSxTNAGBTrF9SB3Bra45T8UXdXu4bujjbxosm3ZjFRtwxV6HbCNzpyxB89DnHnsLiRC4vFvKhpeQwA7n",
  "key8": "pn3Bbj4sNVBcPE3VWNCCuBmuUynKbJmASXpzGTUxewN7DavwXcpQWFq9c36rGxprQ1HtnE44oSxv2dnB5jhcRbW",
  "key9": "4CuFyYULA3xHcm3Zy3GUZ3VtsLdCjbdQPWk6uWnNirpafwpoNEP4c7VHEbxPV11zt7GMoxMD4n9EzFe2PY5o8NEo",
  "key10": "2Dy6T4fMiEoq3kmZUg2dcdbcnJjHVCfwjPeeR9vnn9gnpXZwNrsfDk7trcUNR9R5Bbu3gg5KyNJK8WCXoi8uq2wi",
  "key11": "2DWNhY7rPXDb3jhBLpemqbE52gekCscdsh5CwS2zdPJSUxRqC5W2cH7xb38M5rCNwvPtfvEPXRg7qznE3DcnPTNu",
  "key12": "4wc3xrZ6qWqDs9AB38ettgH8YDpz3WrB53NNcTbD1gCJjz3K8h1A4sT3Wfa4SZjQfaenfyfhK4P6khuNRNFTx6Sv",
  "key13": "513kfD6naYnNh5PYKW3PZfSVsaHbJ3kWTckxzWXHmox1nezjwXh3opEKVUKGFAs3iDNd14foCsSVksTFkDRwhB3o",
  "key14": "59BH8LKvV3mPLn6ev5Q8qVaSwhWNStfy8Tgdn9ZS1sy7wyG9GxN5FjRC2tYbtmCqCBU96NWdVxzZhaspJGcu96af",
  "key15": "4cx3EZx5uS2xNcdu9Nwo3FhdHJjCWEFxTAtKPseNJqdLXdjFjZKqFct8gxP9zer8xwb7DgZjxpDjbhGfmHzLyu8G",
  "key16": "5HGUrshuFE2zpKkQ3BSsEDNFtc9FTePR3q5xRH7XUDYomqJhm8zFe8wUmKCTweQKqEkLGXGqqATLPYQ5ruv7MmL8",
  "key17": "4YTCRKtKGwMEUvxWzaMBChiqY4nRx9E5Ghr5xx7ugubh3HkbRKcTA1HGxFnxzvDb2SUikzvXGnaXBeYRLBcvKu2Q",
  "key18": "3j5dwLHNTJSUAaThJgCT3BDpAsUmfnhYTw6nCPXHgBCyY4LNfaUrjrw7UCBfYdLMm6gtUZDqoYHvyoUs81xQrSMS",
  "key19": "3Wo1LBVCg8PrdjSwQuYzrrnc1bSXD7YYovWGDtFjmdsAvvsysD47UiQsaMu1Sy8yGtiHLW6oPJ8Dw4iVD8mbfmJq",
  "key20": "NAHZT123uMAD2Z3KAoBZ7cpzpyqE7JWJ99oPxzXTrwzU9bWfp2Nhm2djXM3SsUNqkArUn2BFj8xPRfbtvKPDoTe",
  "key21": "5oCsLk3ZP8pwvEsMkX2ZwxyTQxKxMpdGpSwgBZtL8orEzVcmdd8HExx3VAsS8BNQ9qDRfNgNCFWUnFitPJUcQ1hx",
  "key22": "hvYgt3iAJ3D98HkPpB8UJx4dYkbwdL3DFwKcWcxEMP9uSCgS9gmNwrMrTrrJ1vqBD6DKwGcDaSHHkhMbQCG86TM",
  "key23": "53RPA89u4peFg5vThKfkrhRrT6T8vq6SmmEwArzUs9JrT9ioDG67MmWz7yu3cbf9p1fPJLpFBAfQbKib9YbnjohC",
  "key24": "9icK9WP6qMxnFtn9QgLzjwr7kxhypLHoKawWnrLyvpfoZQNTKgoiKgFaf5hkYN4j7ATu5KbFaN2iNbt7Jn7FSuQ",
  "key25": "4nH4GKqZopg7ZDj5TCdfitVWrTU1Rr2xCx1m9uHKMFfVM21De1gjrVoGxjmrANmU7JNndePvzqec8uYw7SZBYHJR",
  "key26": "5bwV55KJDDVXWKY8hSN7KFauwKZ7UpsVbAwKwjEeMbhtKAhMPPwAVEfNpDwEMaaaZ4LtFUJBZcAzBMSr7GmdRLhZ",
  "key27": "5ZvsbkXsg8gv5gzGu9NjZ2PF7pSBVUzFraQw4tVUSnjEj5rgZvqb2yEN1nzLWY58y2scj36kUtuZVoKaQ56SsuhN",
  "key28": "5Hk9fhauySuBnm4d4hFAymLQbu6drGwPYpgFegSTxJrQNVpM2fDUCHF7kmmd4vmKQjAtCTfVPyGo2r9mMnxaDFg6",
  "key29": "fw8pSN4ErrpP2m6JutwhgbTKaEnnonbFHnqzGkzFRZnG7xwh4inKJpjeakdUDGsUHppB5Dh6Tc3tXkzyDvaFh5M",
  "key30": "j14NcjYbkp4nAmbkkedC1Y5tvJq53of1qWF8qZ6EtUoggyerpCUR6aTdoYWThnwKLzkbNmSKqsLirt2vkPmU6ys",
  "key31": "5SrNAqPDZW39whgtozRQMuEeeTsB86z78UQWiMfJAjprgxYjbCuSTHs43De6m1aEyjjjUrquYzU8phjuJ3AYLG11",
  "key32": "5FTHhzoveiv7vq7yj9ja6NpuGb2bN6X7Y1rGuAgEmMBwgPZGTTmheL2fKEhSTmvS8CZA3v1K7tc2A7ChqXPtcrA7",
  "key33": "4Wnk2myhH6xXkmhUBShMWFxe4GDwK5GtGqsY1t7uoBLSjEK9JLeQFD3eieWdTXYfRgBHHtkRL9JpVT9KVS3GMTAz",
  "key34": "tWaDzQLQPyLv3RNATKehnkNBxexuEqu2EJmexC6ADD5czhqp8Ba8xKaZKLEWRvQfvQdZbFVPzZJu5Cq3rJz9Gwy",
  "key35": "2X7zRjkSKQnFwSuoWXv7KgvsSKukr4DmDavaxBtmhvaiSYUqkgSK9UEqGTXUmqYwFZCMKq5mLmpSeqt33sobeQt1",
  "key36": "5vZSXgmu9XPijUVoHAck7CzZ9K1DURU7zXeoDDq4NfMzP6KTNU3hJ5zvZv46AvxECaEx7KayiwrJdNVPQu8eYV2F",
  "key37": "uPgwf4WgJnq3c3ssqN1P4VBzQFfpRAAGZoTDrGoUtw7ozcqsLaP9Y2eYDMxsHfh4hfauLbTJciThD2xUKRZzdLP",
  "key38": "4M6gZHzZKhZbEhNAUJFJLWK8FULCqYy7bZUMQKbhtztPTP5X5BXowFvFyDyRdZ8toikvt25WXduZaFT4W1FoCgxt",
  "key39": "5CuscZv79newwHDEPXGw4UGbnXkaQvRvihe3RiFyV7KFUCSNTbk2x2AXBGkJXZ9wRP4NNSFTc72sjAdDjwSKzow3"
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
