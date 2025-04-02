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
    "3FwcFsKcRqFYyANvXCeHpgZYaUZzreeJj78HeMZTAncPe9ajV3Qa2feQME4PTvrsaUypZ4tSxUu5Fy9nsfRx4JZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TeWqwbnHxYNj4FBfKtgt9ydpp6J72E2qNJBeYgkwone9MMGzZXM7Y6A7trUyuxaPE4jnHLGhM6oukEr4YPMvAoN",
  "key1": "5oerNeyfpqEMvQ6ALBqMbWWuLty8JM2siHtnZvbF1RFemHxJQ9xcLb4aaNa9dXHhG9ft85a5rvaC8wR4YEdDDCBa",
  "key2": "76xP4ZK44E3ZduhNHfodg9wMGkeRdeEwkxF6aPpxJmTYJfdWgVxXb2iDUYs3rajZKYmD9u7rTbARyXt7Leiks9K",
  "key3": "2DjZFtdcb4eM9DYspJExpBL2tHeK3c2zZiC8ZeKxJ7UxacRnwCbFT5AiwGoumHSyLFAybYDdGK1H2R6r9Vq5vy7u",
  "key4": "5S15CjmSjTwgmWG7LqbbSxvLELjNx1G5y7PADfQ3tgU7ZLxg3vpmiVb8PvGQqY8hW34Mp2cCDFCtfyAzTVErpD3G",
  "key5": "4ky4s324uossGaCUkJBbH6nP5RvNbVjivzoVGfBDwRm7P3bjSUNGJVncXbfFWPEvdtNtqGzKrkovbkKhTvSVwvvC",
  "key6": "8qPaBX87ivogntRPf2zHMcCkm6YMZU2VcJVWMx1k7L69vuLBWJQf2tntH9k5NGons6QkZrgaoLgBoDtwSSzQoi9",
  "key7": "xezvCxFUBRdXT1MBhcqC3NKkJ9wZRpaC7Czj3H7SMwht9py2VDeUSwW6KbahbFnFva6S1U1WTTb2qzFjdFJEaJp",
  "key8": "L6sa8fBDPU9hi9MccxX6ukizreHzr35sgEoskQZRCHixFFi5TESF2jseSNkjJ4n8BacNfkHNp5gfcS2qyXEE5KB",
  "key9": "3VWm6iHKdHeJLfLQ1TmFBU43piwGaRUfFwVbqTJWWDGrkfWVmFXvau49DgS3q8Z3o622BACLysw9PKRHN58i9wn5",
  "key10": "2fUMBxycb4xgStLMmPcT6qzy4CCWRRPFE6CEJakuvq5813Gxn2H7m9T1F4CWyt1wtbn7hEmgmoD3uyeSrCEyzRug",
  "key11": "64nKSoJ5kz2VxTTNydJj7tc9dtV1zkETxP5Fh3bNGBoveZpc65WY3kmuNvTYTdMe8z4w9nPxtaQ75iXXDNMbTRrP",
  "key12": "FQpqNaVRCZrpbBA6VxHf1qbgphZwAGDPn9WCVAttL1tVmobbA6LmDMLAsnCWqnjK9ZQFvkyP9PGXRjaY3Kw1buK",
  "key13": "4ErqeYXRVNcXV6UsqRHpzpY9LUMiNdDFS7AKUe9N1brEZQ7rJjAiFNT4xxTZST1LTCBBEv5eCSyYFAuLifFXzpht",
  "key14": "2CvpNzJo88D6yRvn5MQmUDzi4UUNDSjNDw2cHZM5JouJPdoE6A6ehDDCRmfFg5qq9P6vPCcorQMwQbgacndbdbuw",
  "key15": "42wkijSEtgJv2NoY8MsVwkner7pLjCubtQ2UNLbGfMUrwx4g6eLPfbiUbSNbGopiZkWDvRjddZ5xuArS3Z9pwNvv",
  "key16": "3GXNid4VbBvVJrHETzMZYzwz3HWkEasKLjmgU4EEgbmE9QpzbvyQqkPTBpyiBConjgCkWRaeHGbRFMyWYT4eWwnW",
  "key17": "493p3b7psovi9b1emnBT3zU6u9C6v3taB7NKUicBVFAsvdtsqqksoDLo1tp9vhJvgWauJpAnjqErp7T1vfjetPFh",
  "key18": "4STtUGs3F5LHp1kXQnJKRid1Evt45ftLKB3tGG5JaCK6rkoPsEpDHhAianGNcZpsNhi8VpBHnxskMEC8aq5WbYzb",
  "key19": "62vGyjcjVZfT3nhx7o1kr34KtXbou72F5MBHaz78KsfaLLQKJUebn78jHZbNFNYqNrLQ9dhnzBdeTZ42y5oBfGVf",
  "key20": "ciDFT26oexBzLVrnuSA9xHF7qsGnAPPDiaBryKLfs8R9Ro2J2yD1WsWKGVVNaD21wCaQ5juohWbwU6ozNXrNTk3",
  "key21": "5ogzzFTuyueuhZCiNdKoWzRvAf7bAHsAvZX9P6hC4mrLKxEfyQobdrxYtymoneyGyG3WcMrDa9cxUdspxU6MVumC",
  "key22": "4Z6qRmdiMxFX856D2DxdmfuxzBLFxxF2xepC7a8KKKuqD9MoRLTobAzoLk6amJQGFqrGd13BLWCzZmt3zHHoMHiw",
  "key23": "8fEVAXVhQdLnHCAzkxaN2fGVSnUSUpFKhUF9WqKz8TTgwEvgWBphvcKFwqFGr53XcZYX7MyC4C8zo2YCjGyuKJJ",
  "key24": "4mReHhgZEUK4jnApsPiL8JTPN28FRwnX5LopJ6E11jLXrtoeZKTzXujFZA66EZAugSkhVWeHf9Kzhru7mGfoGt8q",
  "key25": "347TBKhSp6nmfr6Vjgx4r177Afk52qEBRLmjwGVP34PdvBcAYmz6jVEMAFtMTcFvVX2JaZ2ypbSUsRdjTHJD73D5",
  "key26": "3b9eB4VY1sgWgHrD1dRiaPBfNmkwYYkE4Hfd5ZDnWMdcrXBCs5VEG7b83xGLzyfz2pfJymZAYoYiuDM9V4H2Mdx7",
  "key27": "3Sn4a95WX3XXvS2DbnVBo1B8Qr9gWA4RTUqbf1A8NFF7CUGP1FJ3M3f4eCmwNtFNUTYiGajCwqFB1P2DAcLwJYTH",
  "key28": "4xdpPeW3HaSHrngh5UgmCSTqv7RWUgUghgxreXEqLCndZpyK38vsbacEJ6cb85Pv8R3VYm3JdN8QNBxnZNbRf1Ga",
  "key29": "26LRcQPSxiBrqyBarRceid44jBWWMxBhhExwqQPaCvz6ikjFLSAt5qABnnBUDgiaxni1FpMF9By1nt8ohgES1NwP",
  "key30": "5VW8KryMxiDHDWKAYmL3mdXobNz9RPPvwWxZ83vLCYgZU71G8TDH4osJrTomPn7nsYQKLLX1e1Sx6mgozY7wCi9w",
  "key31": "397EfHqS3nLzKfDA9CkCRXfC3k8eTsR8nseQR4ETKCjA4ghvMT8D5ggEgzDU1FmpVNSgC8AmvPJ3N5Y8R7UNRwkg",
  "key32": "53zTh2YfPnyeQrUbiVebCgB5vG35b11EKFkZD9DMVHQJ97dd4jbXioDawwWWxLvEEj28156tAUBKvXCz2BzEVmLq",
  "key33": "5PEYSvAxjzXCADha1EzVBU1iAZGqW4Bip7FkJTBfZCRmv94uTwhApHDkKRqKTAAiESGngqsuHwSmXNVFhnoBKVim",
  "key34": "66tPM3sMNPXDFvStRwNSanmqm4ots3YgTTJDaaWtbiFtq7TagRrhuYQkmNegMycn162G368WyCvQMVPKukBnvcYm",
  "key35": "2ZLd6rhpTuuRu7DxoAQW4RHvhq7nKchLN8RgzcELRTdyQ1HDeTwwiFuhtCCUporfNTQjsypjnwEvpepbMuEhCiMf",
  "key36": "3uCC1Pm1w2VucLMfVnZV3Gn4bT6Hkh2BtpsJuEz8xJMFBtSx7Ve38ZWi4A7Byzts7LxWnfvg5fexUSbzBsasp7w5",
  "key37": "438thPnmYmMvwMAv85vxSDvSaz56R453sagcXyNqWvNv5FFn6nivRbdCVzoutMMGaM9AGW54MgckaS9r3eLF2Zf9",
  "key38": "2moKBUPwS5in4LdNjbr6R117VBZJqv8tXZ4PKTLz6Lz32bDA6V232AirpKHMvLfi82TviiG1mf3HLXKucrbZrXGi",
  "key39": "4vEAfF2s99MwhHGXFUutjUr5pBZQmiZ6gHuDhwXGtcUDX8hjCJhuo6ymCx3HYCDbVpTxiganR3q8kjiqFpoQWnQa",
  "key40": "5ycfBv3M82HEH2vwrKPaX5y9Ugt6QUkSyuw4upmZUbacp3tYed1vcqFAyFJ22c9gQkkikzUVo4qtiDGVUuAgGvJ1",
  "key41": "3jcETYGbkt4b75vVvBn5r67uooRtCtyh2qiDhuVtLGkY3HXtq6MQta79novkyjeYBafKLtvERtgyTx756dnFBgkV",
  "key42": "3VGKHnsrjCKEkcqW6WAScGquFqnmwLgvS15vYrTeCNVKARr8PUQo4mjBYumBarUbXEa8yo87xQuha3TDBv3J9e1a",
  "key43": "VHF44swpcsYwdpA1ZzT9AVhxdN86e8ruvgZp9u2JQTyKFdKsVLHN8WmGuY4gbkv7FhiwHFveEm24vkicEf769Zg",
  "key44": "4J1UCtxqujg3fNH8vWrtpA15Sbmmz4ZUwDymKRYE69p8DbiZHoEFvwVJTqKryEczNSXVEwyZhUPXTyU6UNVKs1bf",
  "key45": "633GFzUrqrjQuxKTDRRS7vqr1v7kow8ed1ky4WdqtbzkMPQe6oJe4vutFfpYPeXmXuWoupNNDxtie1hHCkm296W",
  "key46": "5XEFAkzFLzmWAT5LurcnefjvT1UR8UxNiYSXxg9UCXkLYg6vdsbBFX91NNcbZx3jrGBP1MJXYBrNpjtTiprjSGEk",
  "key47": "2FwQgTvb7SxPXLM98vv3rzqBiyVY1NP91VEJowqMq4eesQa5jyEBFdhNXLCjpyp5zuVTCyRgLHyAVz9gmLiVUAGd",
  "key48": "2Doo7iUPyxMjDokaaabHywFE4LqLY6su4Fp2bFC4w6iEEBvSpfZtssXy7Sc9pPvSbFtbfv7sECsrmjtjJVofxUnL",
  "key49": "4B8f94YELyyW95vQQBobJ1AuUieF3pS5u5eDcSaQxBatxQ2TXXSPsR1fFkmQoWg1K1jSNHVUBvzg5ZAhzWaw4Dhd"
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
