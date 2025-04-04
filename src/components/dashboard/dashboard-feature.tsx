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
    "66tkRRvp5spATeD4KYmQMmm7GsxkRaHMLZK6GcDHQNTY3vdWXe4B5sxh2ec8HVXk5bcxJLXxSNRRmScdnfqqzN5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEaJ2F4145aA6C1WnHe5wsQtDsti6uT311GLCeRCdGYekwqVQUN5e8sk2NR2xB2LRx7bhydyXpnhNQrVvoasUbR",
  "key1": "UhMKEEW71TdQ9xQkiHA6FQd6i9QufWQXSznuyxyaWyF4CjHJZPvNUG9JpybZVLp93RXVyNWD9H46Q1iDzrDvwz2",
  "key2": "3wqqUCjKuuEhtkyVG8eAQWYcPrnPaMnYiEKNbF1rSf8apbXeDfDc3diRSPCt3fhdJ7zGZEh8BkdFfT3subkT18gx",
  "key3": "3h6Tu2HxkDmFMzDCXcDBXFQ9YEtkDrGiUe7CvYcM8SAtPafB47pSRpaoyuJc5JewTBArjvXsJKPbze4EqMKrhXfV",
  "key4": "3YLFfaBuMv8vTyEmfRzgh7K2zrMBjd2RZsvYW33e86Xs4hDtu5hiRiZbxEHboBPTA3QQVcAXnJ54Y5aYVXRwL4H6",
  "key5": "25zMsxvzhgo33JuMydArgrmoxKAYdKocXVFUruQ68JrPWNccUDYTP9Keg1unR6GhQzfvBWJiyKVuLR3vmi8K5veM",
  "key6": "N9vJg9EVCyTkpCx9dW59KXfQbvi8vmPPw6qqRjAgZnLGKKsQJzKj1gsnPFH1Anshpw6qk1vCKNortt9gQvHDy56",
  "key7": "5Zv28Y4YNQpqYofmx91P2gKPGCDc1XS6oCnpFaF2ePXrDqVsbXrLczfYYHcYmX5QqNenBcehecDe1BEJXHwk7mm5",
  "key8": "5woBeVscis2yhfrJQaGHGVDUxo8M5Kx3a8FKUxh6cAz731oQGPagbrzs47PzShr1wvnU5XxV3SPo4jUpB6aMs6ek",
  "key9": "21hDMWAPYc6my1WdnjbYCRQzivRtxUGJiKv43n3E2uNPyLNq1Lu74BL6LavwjEA8wA3X5HaBv1kmHvh3F9c4fYMT",
  "key10": "3KzSp433Fw4mKFV87c7quSgnMpRkyAq1exhHRMm4FTT5FeG6svqUkCAeN1fqH1iajLG9dg5QU3gxagY6kExp6Xq7",
  "key11": "2MtJaibxhQBEum3CUv4PdiFr3RgBJyLhVAmKfTiDRFsbX848gK7dq8PgJdJdd3DxaX3azamopSR8Ts7By262Bszr",
  "key12": "5pW5i5BRwLZFaryGoThaoHiAERm1sX5LgGQrkTxBFJ2mjuzy6x93GZfjnPQ8Fa3iC2Hg9hDsvwjR1M1rZVusFGqK",
  "key13": "2593Ji4i4bYsTTjhsuD5hR4KdV5ErcVyu9wBGx66j5LFCWMug3nWvEb2aWLX86y7zBNAB8o3G8VSLmjR32akmMyT",
  "key14": "4LzBT3dwUVouUGDiu2Pb3pZaAznF1yajiN7LRBveo3Nfeo8yCkLgE2RkvVWHBji4jnsdiydZTKAvJiCcAbYeVeAy",
  "key15": "z8p21SxEYh42c7Y9rsd8TxE2RRMfwQRJPLtMrfvFe5UvQUJVYyTdBHMLF8QmrFpARX52gjzWP6jiha8d12K3WuK",
  "key16": "2f9Us3pbjmSDPQYhdavg7HGnePiPmtk8bWdoMTqi2t85zxdjXS7sYjhyLzAiDeKH83bMtdA1SwvgZGtd99MbzNxQ",
  "key17": "5Ypy86NLCKPJtYxPMMXYiUWii8g26qdv1JwesxqXtQu4LErkk6fLGNNix71yiKdpuhDZf2BGt6XwkJQupJLJ5gG3",
  "key18": "52q2ExC1DbALYyEafjvb4vXT2HEBreX6QouyZej1RvPpHSvRxT5jPcf7QDBf94YToQVfdaPsHvZicyPhzdSAKLfR",
  "key19": "3JapxKJJpJTsRyRRhjZn3U4DteDY11jVSX271GujF5RF5hp97mKHqJjttfhy3iTgu1CwsnnokCkxgifRU6XrEzoC",
  "key20": "3fxX1L9EwHCzBp4jCBuNhnbGNWuZqTXeVgoQnUzHRaoA6KwRvoy9HFKsJLsoqDB4QSw8RhLdP11XGeFjgUPdefBg",
  "key21": "Xnd1rcQNduJLZ28mw8jUin73abQknf4wAwrbfiW7ip94KYdscMTbd3MzWmR8Uzv8zWWoTSx6dUHPnPmsWaxC8a4",
  "key22": "BNQ8z4wXkScD9rwTv3PSmTmx2QxR1VB9DarkUMhdMAE2VPAf7636FNunwrhmp2EyRha83rdvk5vn1u3uPJv6ZpS",
  "key23": "4b6ymBbYvdK8PTeRze2FDdqL1L4ENoopLNHG7JsFBdP4TLkUGGYs1gtBRZrUkSFAWvoaqJoPhRT78a6eL2hn5GAm",
  "key24": "5K5z9sPuQ67nuZwuS3yLeJv7wj51g7wiMcVuQ2D4c9KAVk2cSVM1QcxXhu5Un1dyUtfn4gSXBQEhehMmCFhmrf4L",
  "key25": "3qkuyv2Xj42Bfs9kQwUm8bS7vew8Fpmz6WCG5Gi26MKDobMa6pCYsfDVoHHPqTrWXXhWq2sXQkLLXV6LxSPG7ZuV",
  "key26": "2wgS3YzVp3ER7ygjpTYQsFYeZHyds9zmkJ6rBjFqGGBhQVnMJtKwLFmW4Wv3PCZH5XoPAD9vPoad2EysbWHVUcEk",
  "key27": "CisyqHfx5HAtK12gtM5aTw8y4KuJLxxqv1WR85hTiXa2FK8ZE8xJaDH3F2jmqyWButrx51bvqekCdVo8SmLS9mL"
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
