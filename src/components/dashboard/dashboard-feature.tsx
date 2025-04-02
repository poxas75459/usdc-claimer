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
    "2h8Xz6aF947qpEWaYUGK9McUuuSzic3PrckSSA8Ba5ptSum6VFWfJJNYhe3hPkUufovui81edgvkNEicEDfNfUkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjg9ZFM5SM8kaxDEKX2kjs3zfdKUFagzHNQYEdM8sL6M4CaHjw4Z2Xd8SEhDeB3R4cGcju1emD39LUV7g2bs7CW",
  "key1": "3dLYANdEVsT7j8EqC7r36D5aWf7Yx4hYBvtL6nfgQfVeTUg9xYhKDijSDuEofYxCjjkjgxduVCpix3MQeuNXTKm1",
  "key2": "3GFUmqk6p5DS5x9E64hJCHyjGFaMRHKthyZMeQwwf7qeHqEYErd5afFqUMYsiU9TuKkBGuzUxgaQ1tTRjNCjvrh1",
  "key3": "3Syh6fx42vDYp7LTeKApg5NNUNUwrofvb8ea4n34tFEX8HtFnsoYezMRm4Qpg3EbVpiv1xhFkzjQWAzEi43Mvid8",
  "key4": "4b1ap73wWTWFjLQXgiwRd1H89U5FLiGQ2fAQAr1dGGuzj8UCCHoMzLR5f2CDn6HyfBdZTo6aRpz5W6PXCFKiwFzu",
  "key5": "3aGmfXb9rcj9baTNDZ7pFFWNarf6APtctGnd4syvA4ip6F3r4Hv3Tb3dqu9ZJsMPHoRLtRT1yFrcWjone7pNEgXK",
  "key6": "cx5vrPQvDLN4NuHeH7eiLXcwmEL8dyx97NHg4S5EJYfej8o1Jk9f6gSnc44kar8kNHH23pNMWpiV4VsoqHSJyUH",
  "key7": "2VYva4ci7BjB6zjkX2JYzrvz2oThm1wtcMVubvYRZPGaKbHGZLaSeshYQxPGGBzaDnZGnsYE7YnkAQffQX15kvd",
  "key8": "3THzuwyUsXha3mGNd7kY1JRB9hhAwqcPEh7DwJffVzTUNDdbNpLd459PJYvyLmgYqE5a8FawJEXRvX76mAgrggfh",
  "key9": "2Giw4aT9ireZPu5TDLVWcT4v7NNasj5Feg4LnQTSmAH9vsXLUcfncuZHiVjgfmCBL84ZS8NQUWY36iMeHSk3GNQQ",
  "key10": "43s9fiu7HwEgjQjaEpFbWUp3GeeTvAqvLxfrfx3TD4M4XqVSEeJCo7iMSt7ekv9NqiW4o7AKJKG8VJDkTYnJTaAk",
  "key11": "287YDqPwYjHsn758fidbhKKKm1gVwJnGK3z9G7zk2qzR5QzBFt5jGgyCyX9y2xB4xUdpaGfFkEA4FGxt5K34y7yB",
  "key12": "5wS5g8ZCNksUNg1avnNJCu3brgv7jYDbBVVhkdh4WAZjJ2wkiPK82vBbghFuacVjzKbntWpzQFYAp97sckjGHt4v",
  "key13": "3N3qu6jcBa31UgN1TLVddkCHnottRRfE3qtCxbDnkkoimaALJvhLG5btR8Fj56G3fr4gKvBYRb8MJQCi7kztwDot",
  "key14": "5F8TetDSnysbSqoc27USqcDHrAHJLDJ7rU15ivyVUDbukRSZcw8pqR5jZ4ZJFZx7WJGChvp947NGEn2c5iFQUvTj",
  "key15": "3FvxVpmoGpbV5437h3iJeZZKTm2TBwwejQtZ8RFNS543UL1xyxY8Cq6WfSG8vWJnGYvYFsjLHuJTtLErk2vbM1zJ",
  "key16": "67JZKm3J7qnQK7ZNdpLKdzip7r9mU6C8a2UH7oUKKdiV6JqFCS5tDVinhd3G8Mr6tqvtgHtqw8jdMtARGVZrr4LL",
  "key17": "3g2F7aapn7jMZDtKjkskkHYddcNMzL9iu1jPJiMnXfa2PzciyHifYNYJpfxbkHA7XM2qTCWegv5VVMqwHmkDs9n3",
  "key18": "2ky8QJwtTavR1UrLBgR6j1NUugbuyXbGCv8sabdFSHNXgKYVPmXENdVPTqj3pXiMMa7EXH13LxJuzDUgnuMGsjiw",
  "key19": "3noovH9KGaiXgCYYUkkMiPHA1W7VYrhh2LrpVfoZpGQwDKb6Uj3XmqnbV4k5LCL1gh1UKs8qiT12bdVgmCAHr7ht",
  "key20": "UEP4ngbpZDLeEq3Y4qUcuPSUcGyoHedDqsZFfKVg6nZNxL7edmDP4b5sepsdE7nydwXXAkQHmn6igzeW3XQ6tcT",
  "key21": "4wgKuGPnNdQcuCSyqtkFZMYfKb1PBHJJoRBQj1nLCKdraQQLAi8JCPTytmfnYTeogWWRrcb9z9kCWzi3RJMjvDpz",
  "key22": "F1eUEYuJLiA42C2zJbSUWUp8FYbuZzeNjcbRhhaJD2wtuDE93U5eUJZSCLyxHN8sa5YXK8F73YAFoBtWKyiVxNb",
  "key23": "Twi18HpksXSFSXsCUFpdA7BMJXEnfHDGWkRiAsxJf6haDoT9K9wYU7FB4QvRpSndnhhNozeqdRmmaFuFqv22ZJF",
  "key24": "5Jf16NjrpPGYMZaPGHDxpZ8T52FHBbKzFMsP7mh32akWnCp7jyKbPU3BtDuXDsEjWxZpF7JqEWqu4QFPdgw7x97b",
  "key25": "5X18Eh4H1JgAzEQxYUkvBVg6sSrHqiNZteLPG6BBvASaQGFDVjcpq2eZicvZtW4gvF8QryeQHWUNmxW19WoHNY8y",
  "key26": "T67ELJYxzB2Ta652TLRaY3RDdA1pmNFmrbztx2Ydujg3edxLQvbp9j4Gwgf7ct3B2JAFauiNLZKFsAyMNLPufVf",
  "key27": "3JU7fqZWeULnLgw94fZxuDXarrNAZx2jYbrq5MmffJpGrrjCzt7YJaY4h95DTfi2FhEBriyXXJ9beoD4Ay9hKtWc",
  "key28": "31Wz6WZKWYLs1fxBp1UohJvRo3zfqzMpJibmccjBUAqAj4BWEGoEhRa2Y8kaRnWyDhpgzQniY97qj9qdarpN245H",
  "key29": "3g6dLHdwn3syrZiGWjvLjrYvhaWSJyFjhGWp7jbrtPwSUSYmxstp54fVkgdumZyXTWoWZNyNfmc1rHQWbf2ScNbD",
  "key30": "5okJa1NkJrErToKgWQMw7bf8CTKwBzRSHqJjN4TLiSMTbGBLZfLbtjHQooru2N9cn87pCwgmeKhgp7yEFNd3BSFv",
  "key31": "5n6gPYZpctpxA47j3BEGEtqbcPJe6V6aNjqHMXfDSAzwAmYWRZJZHRojQys6qkqKjZ1Hk9wtDrwBt5WrG2exdoD2",
  "key32": "5CQM1iQzyRnyPCMaQbikgcTDRQrBnDoZii664xjam8bXDYiYB85ayV5VUiCZoU8SabGbksVwTgmyF7XF3u3VhsRf",
  "key33": "5Mdz1xKGE71yypo9kFoeyXrxevsvTVLbW4WHSB6oANT4WHs3k1f16yUPW9nW81rFMJ47bETkxaFG4kKiDYFjCioA",
  "key34": "5NgxRkkxTtqiHi9SgARe2HN2NXSB6tyjkh8w1GuSwob61K4TDkrhLsfKAs4wo8Nf7eboY1DFZDGQTc8JLCJjWVug",
  "key35": "5Fwvi3qZ84C3rbkKXKAdKj3U91ysEQUVxy9SGg98vo6yENmxMRvhj1K1ushVcR6M2PaMymGcdbCb3FYpSD4dT2Rj",
  "key36": "5gwQdfWDRdGjAb9XNim2YuQpRvgzdtHggpTQ4F5WeJgyATsfuoxgK7QcFcJTvRyswpuaWe8vWJ6HwdbhiTtmJitG",
  "key37": "b453WzEKjTiSU9j8pY9SpS7ncTYn6XCWHNW4p7tNSrHm1KrxzBkJdQLsiRyFthhPv8e6vHY5TBcCz2DsXjLdwuf",
  "key38": "UejbiS2VaH38Z8KCi2TCi334F2G1iZ96Um6zJuUeoE8yRqpn8WS4wtudXPeE6GYDdFzhF8cStjBeybmrmcLJrBK"
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
