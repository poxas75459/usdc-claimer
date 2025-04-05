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
    "4fc66tMmZzvAAWPHPkxUEtjAJE9xSBA5AanHvPQe2Fvet81wo1nvzy9MJ6rQdfF37r1iTzgMceNzcRCjP8GR7kci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhJSYrYyfaJPpkz5LnRfSmARyDtmAieriCBBLpAjGnq1nrYMq5Ztmmf6zJSzo8qM8GdVxg4PLE6acZxUhemXnGL",
  "key1": "3zjH5ANaPqXoNEjTkHRvyXhKQKVem1n3L7sbfwsawxdJ9xWX83Recx1GUmrXxcuyNVcwki8jvuzaRgVAUQoa34S9",
  "key2": "4y2ymHrNSMwytKSeYWJXscq3RG2YWx9r3YGWUiave6PYBweinwqBzyL9CnF7NQMH4sHA5aLCebFFE22LxCCLxWpN",
  "key3": "2Mx2z89uT9aEUy2zxSAWrgMc59D6psJCZCpfQ54MVuVQxWae6MFRQTWQWZ7uj59ywG6bjhvH7mdRUP3Jz6ZhWhBr",
  "key4": "2Z8RkKhE8X5CLaX5ACCr3kiAu7P7aZXWCDoXwSZMum14DN2YDVvWzqXWKdvPQF7pHhzrHQGt2Lad7Z7VXMBgi21T",
  "key5": "2qDZKCqK9ApHJkLzd1vjZi8RsYLEGSyWwoQUTAPEbxKdXtBcg7EV9hqjsv36bN9Fp1ZXZ7XkWDZyiJy3h3xr7Umy",
  "key6": "4FppqvTgYHQvCy77sQdjSzKL47ha1a2aw6vQKtYYqsRMigJbEQwzJK4EDjxcANq1xMsbPJ2NUDrzxf4iGZXwqct",
  "key7": "2yXbDYJk3X1QB6PeR11nT11qhzXVjCuBQ26jZL5gxrUiNwWGuCBJ4Ku7zy9dkyCFoP8jCGsGCMbYRNGJnYNditZa",
  "key8": "2C1fw2phQRBqatnTvUb9kuPKhQeiBMaFkpZTqgbbughwn1qJX2uQemJY9tfrnQR2e99424rgG8EeDusCsPGDaxkA",
  "key9": "21W3T5rjmBi9aGozmMXh7UDXJkwmiR4ASx9S7GH1VTW3iQgD5aDG9UCNaWjaHNQRsdd9GJs1wwaEM2g2ePtQTyZE",
  "key10": "F5ujarKFAsVgZ5W6sNbYMPLf9UvzFYgo5deGFJW6LpsP52Wdy5agGqZCVysAkKtyoiLsJtTSfbXgRFLBLQTujqB",
  "key11": "2C9Z8hmSmyb3d5hN9pgrRBnmVoQM4KieS2QdTLWqpCBSNs5gt5Uit6rz2dLEpcrjz9HPXz1TeFTsTy4FcD5iFJgh",
  "key12": "5HefnT9MeXiZffsziqBR4ZEhK4wjVoujrBrrryjFqVjc8bD2HMBjuz79BmqmY1PPD3heoquctpziqWtde3s84grh",
  "key13": "26i3dzXZSGhUhZaXR6FBHaHbHWhuhrKbTpEiWNTybESKT7rvbFTAHkJbQRRtswehfPUBu36RVW6fkuja9Wk2f73T",
  "key14": "zNM2vApmVioddVx4aVPKS4x8zqMqNnbUuLdNs1CHujp3GAbaiApCYN6hq6YriGJy157j4Q7XBcW8smtEwsj8SPd",
  "key15": "5b7RkuUz3iVunRbqxNxd3thGcymCuJaQo4o328d6c898CM9Hix5A6MFMiLpP8jUHxuDUQfBq396q27bFM1XdNNuK",
  "key16": "2PbTz4MJep2DooH6pLmnBs9s6aarAxkUGk8rZkYAEqVPMYiuTd1oxBMn4gMYUakkfRcSD2Fcqe2Zzzqrzwocmu8n",
  "key17": "4B4H9vS6Wc9vLCENAZU5YxRcvC9yM4XYYARiJ3Mu18tywUvsMc4KSHNjRDKbNewCLuJzCPo7U49rk1xBhYqGk6jB",
  "key18": "7i6QRQf3weYTUadkNBA2fEr4YaqE6vWUtgUwUAeZUu7w45iCnmBLdhqakQjiE8ykRUdj8kCamhgnmKVf9DVWfqY",
  "key19": "4UrRW245oYgAFCD5n7L4kv26wjK5XHfxQ1VukwiQRsyMnmXn8gPjV9UoEdxRTxwcubGRETk3MEXM8HSu1SYS1Zwj",
  "key20": "49DfwijdhnsTZiCyNCaCZquiJX22Z74hrQTtix4mKs4v5S3EzJL64cv91zY446q3piWm86xNhiRBLVAt2nenqafe",
  "key21": "5MjdqyiBXGiLLF5vz2bW8Zc5uFKZTf1KwAVGvBXfuz7pyQyPUzWXpZdhaQmExLrsDo4TFgxvhchP3SGJWSekxEXP",
  "key22": "5fezY2WeMysGnGA9JEQPdMCfmE7nuNA2HrE5cJEKuptSgtrfhwmuzerbhhZ64gZrJMUXnx7Ddrq9H6oxpnVrBub9",
  "key23": "Ub1KDEfPq9VdPwoEDpubk2Px78kKnvdYBuD7cXSBeYP1cXGYwdkTJ9rjVAw779PPnWfJs5mWeM3wRGJdwZDVagG",
  "key24": "5FGDSXyC15V6LrNvpmmVsKGuarb8Db6bNU6YGEAPLuny3nUQefypad6vZVHtbkZZamriEotmTkyeePPvJi8EwaUW",
  "key25": "2qax8AEfWu5VBtDhtpewJTriVygcxX6qTebeKVhV7wMdyu9pwNT4K8oiqa5nvHg1ikcRnEmKbTefPHPnAv3rCr8x",
  "key26": "3Khx4u8eRPvieU6uS59DJRmKvRHbTcDuXSvJDVvdBEBs9zJ56qGVLuaw1TdwuaUPuBdMzUNpiTmCQiEJZWpGZRGZ",
  "key27": "4pyUD34XQ3AwQm9AD1EKUiJiQnZVgDAqzhj9afVyn6UAXGZXfhEb5xLJvLHjAVt2VT6mS7BRUHFa1EPicrLY1WYJ",
  "key28": "2EAG2N9ghmM3LQBcXZvpG7thaJZa7xm3x6bgzBi2mh9bT4CGKvPezYbeNt3noDNchnJEt1MmFqfY5y1A9KY46eBR",
  "key29": "sqAnwc5HY6nyD42b5sBn6WWiUG8jCvUFDBar7sid4PMR9hLHxx9Z4UAKTb6Ex2csjYiqfXWAiKDBFkP3i9qi427",
  "key30": "3cBY9nF8XJkxmj1Tdbtk2gPDTAJbVc1KjNGgjNkDPFGB2qinRNTjUW1LXWz75tkNA39ac86R6478Gjt5yrqDFtqw",
  "key31": "2GfEcsr3f5QJS86vetDxPhKdwPokwK9frN1oqsfg4i45RRwGuat9HA6ccbfxJSccqWDKLeghxPENJHL73JH93WmY",
  "key32": "4AM5rCKVfKfXjpu8MAEN2a2KMfbHczTXJxBqrfexmacSaxmVwwPf7rRmLwYZEvzRpk8PZ5Zh4TRqm7RfP8Tp53Bi",
  "key33": "NXvpCdZuoRNWL3EVJSZmkdy9rSvG8V4k5NgdJLCYmYSNmfAHaqDhQcf6eVPrxyGT4dSf1sGeRSppxMSAyX9Shns",
  "key34": "5FXvMx3yeREyiBiWM4QrQavHabzArg7bRWKYWVAMHpqqizNwcuLeycGLNPiAJDLnzaQ4TD9awcJzUM5f6CRmFfMZ",
  "key35": "5NWScahKUXpR4YHYiQABRDjDEkGC2af2KUjcYSt2N6Pd15BM8HCt3irEZJSy1qotPgQHtuiNFgYqHYACHsQrqcut",
  "key36": "3eYzHe2jnZgJasy4qF1kBgXQrh47tr4AYcTt691rgJbNVyTPCmSPjDeGsb5EjGAJpUEff1Utrsvuh7y3Ry6H2rPt",
  "key37": "5ywsZjXshG7t33o7oiJX9hiFGKUjYPMmkaBoph5aon412oZfZFRho4UUBNRnc7GdDStSu2KWTB8aQMjr2ZKJPk67",
  "key38": "65EQPkDgNgFA6dsHVapP7YspspS6ur1NPfX9HcAg1ig8NpdGRz9A4fgczhxc7UBZkiPF88FKuqJzzfLaQxWn6tGP",
  "key39": "62awZTm3cDwYv25gCLmaDQsqguR2kT1Xb1S5sySLPu3mBiTx8wYL9AN1CkKr78kNRkP92qPfmbrfct25kRXGv9Ln",
  "key40": "2P35ZQ9ijMT5g7W78XUyu1sXLAeRBsnYapg7oA56fVQQyG4yksqgqmHqP66hQj1myRHzT325mJkeRvdM2RT1QGb9",
  "key41": "25BBuWcL2bWLnw9Hoo5GhHnCZnS9vHu8hQRUUESnFwRsGAmqCECcugLg31Yps9FiCVWymQ9QvNBhWTRjBgeSy3ha",
  "key42": "NAcLpuxYjEj1jCanQmepfmKhZhwKezAekepuMGecGRA2ftkMWM6vGGrkfMLkxSZLiEczvE8XMaWT9sq1v2Ls5kr",
  "key43": "3k98SUopw4iFy3YTQbNe9tknmTUecjzRF9QMZ7VjG9g3VkKsuh9su6W6L2JDSGDkVdLLpRKU3rdmTvCNoUtj4FqJ",
  "key44": "5MAmzikF5XMwjKE1tHJFffNsdWJgRRpKAta11UTdzh4pk2oorS8d4VWooDnSd29T1q1dgfea8oQ8wdTFgp7j1rPs",
  "key45": "3eKeRiReUv5TyKBZkZjqvX89kvHPLhoQypqppFAUfmN67rHv1x7cyDkikk8ksiASbSXArmVtBi8zbHPn1EJW4NvV",
  "key46": "3PyVCckMGMhmUFDjnwK2fhfKHvhjJ4zMdH4eCwvFdY84dLCC3ezZiXe8zESjvJj45XKhdVcT2g36jSbgJgEXP1xo",
  "key47": "5MhQMTTthkTG8H8Pove41kgfSJqxbyDU4kvqpQpV6fw461uNwZ8C5st7KAjwhMhQceLgRJt578NR5Fpk7Bffsnkn"
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
