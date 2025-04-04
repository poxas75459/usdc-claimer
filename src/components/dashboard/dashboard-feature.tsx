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
    "4v8oyZ2UpFvvoEWaruT3YrtUnEgHUCFAwuiGaDqGR71daJPhW85W7hfNfCecm9uFosUixRB6DDko4GWCpzXEekkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9i7iNEiZAEwWjDb22VXWDKQWKraNQkekm33wRdLSGw3HDYXxPZWtyED9QhuxMoZKMuXWuUNhozRDXvBLyRhPozg",
  "key1": "2winDLFcSCBh4ieuvQ1q7T2wPRbMGcCjcomYxmRzMUuTVRyVQFFwHNrJG5d1qKaLuYDk5qt67UiPGWUcVHaNKMuJ",
  "key2": "1CPdZn7nF1fLBd8YDvLARnQVRzuEBKppvbeEDRFQkDdNdYf15XJJPArA7RYnEnDCwGEXz5f9tdeveUwfi1rQguB",
  "key3": "41oovKtiV7so6bDDbuL44pKZYKYuBKxPmQK6RHFNZ6V8B8Ng2sam7dYPe8yxGwFknC6fVUay6YRx3XMd3tVVvccB",
  "key4": "3W52QmBZNSAuEg6G3HMV6aNVTU1WqzsFKJDhjGkZAGr1HXhNEDDdkZBUoYxPkiELk9Wdkk1teaRp3rSzQQfXqe2R",
  "key5": "LmbaLDZUt5kCFdvFcv2fyDMUvcuVp66MaHVhyuaKfTzgrdEabG5SUYunam1SSk9VFrQYxVyXTLyfyPZpotdvumi",
  "key6": "4LcZmHzvW4rTVeq2cojKybQszZ7xNquavE4VcZNVhbenbfezKWUzpDAeR7fSYxjxMxcJpDdg93Pts26XfTRuJzmu",
  "key7": "2f1nEayjoW2ENJT2mxtCxTRuSZQ7nRKUf8SKzhn914DFaMGK6BU6v5x3U7UoVPpEFKEFF1DEeReRZJURCEihsH4P",
  "key8": "5GqmrcYUFFkDLMqdj85mXRVQrgQR6unhkwAzkjqcD7EUovkFqNWp4BCtemL6ipQgP5LgR7Njbf1ttEgfvndfybkt",
  "key9": "rbmctdj1WwKxXwoQfKxkLpUTXE2FuX9CjGKTCdEgEDWiXKqUWP9Eg6A7xSJvSwaH9VQ9BP85XaZ6UHZBnBkgFY5",
  "key10": "4WbAvvHsG8ny4c8frLrZRvB2PFFvJg12877y3wYdYDaLd6Bjt5pvkGW1N5V9742GETEzaaJ1J2L7JzV1L5GTARnr",
  "key11": "23C62pfR3HyDFwvnjbQvP2FpKPJk4b2rtBzZHV8auhAEAoNcBn5Sze57s72iA2SPMDZecT78THKoEsrE9V4xHvgz",
  "key12": "2R8mnQbqiT1cK7o7kGyM1bp7EsorKnTxw4xH716TPs5K1NQU38Z55qCdfwc2dXjKzbqNmDtRzVTZFSPx1ZFyf8wx",
  "key13": "3CVZtFNrNfoFp4T9aPXVrVGGXDNBd2isGVeCR2ZLPNCm6Pt9f3akYLQ3chvSc2wxkrJ4pmo19NroUqFyP5ogXwqN",
  "key14": "5zbS2SB7C17PaRJ4Brb76R2TQAYLADsSFwWxf84pRPe87NxeNdCEJzjoNq9QrdfB2VDrjkaddwrKARv9RVtnkkaL",
  "key15": "2q1twbtVfFBLTKG7pr4MLGwHj3Z1FqtNvz2QgTqBRsdjWdMSAf8qLgduGXxSGsJ54ZnfcFF2LdBRURjawN1FuSQq",
  "key16": "4c9zgLTspqU6ZEgEDAVEm7K9ZtfYb1dwGjF48pkQQ5sgaa63p5unKpgjrThNzxQy8zuRdGGgnqG2Qdfz6AJ8mGZV",
  "key17": "5G2MDy3BPr2wqftkU5pFNKNFLcMhFpGQSYKfsbovovH3tXUwsCxDGxE4XKWFimQLtiezjUffL4v2n2cLBd2wNDwS",
  "key18": "2rVDTubuaahQ8YasApX876bJ1kxRhgwduGicT4BTQD2brCjScHtzw9L88G8X5aNpBTDb1SCZdy665AkhH9vTummG",
  "key19": "DQWHmLQfc1o2RijzkCtQGtFXGY7d9Qo5mLQVGyeh9TGKoHHoR54bDs4UVtfDr8Z1mhPKe99paEFviKtM6uKUMCU",
  "key20": "5Fcnch1Nhg3Kh2w5kGfMzabLVh4o43fuEvXMXbTqcabkNQEneFuNBLgPak8We3J8Q9LtZpVmCkdDrRWDko46Ro2X",
  "key21": "2CMggNhf1QJHvBgUPnv3KUpofg77DJHSbspB2mau1cFYoUF7rWsrPxdVUM7K45Mrq6jNfRHtMMJ48vYVHYj3VwAB",
  "key22": "3cR7KhXTwXWeVxutKwJgwRUPMBgeqcLxksgdA44gTWpURMBUji84LJ1SCK3n6TWEmMkxKNVa6yk7r7itvNx63Lp9",
  "key23": "5Hsa1U96W44hqp5RUeMD9zrfcnJBMu1BxakRdq6MjpzPv8ek5LThRUG41jfUEV5a5sPE1bcHzMRKMRSxRyT3Gha2",
  "key24": "5dLQ3vWu79Hm6E8rt4NRvCJHx8AVneoN7dshBBro9BuWvKhXnYA9ue3ZJXVAK7bMVQc5QSF8cu7p7is2tYkKG9bf",
  "key25": "5wA99cN1MLV93S9p7nuSatcWob7KU2deqqxphqx9b5WPDyXHX5zfrm6iE2i5QpaJb1V6oPpbDVkxk6DAeNaztd5g",
  "key26": "TYNJsmTa5vMtyLWbhBXpYfpkTnbhEcgV8duUDJkWAfn8YoStPaVRTgJMiMYXXSZNdfDVzftxAXbSgE73pFfLZLJ",
  "key27": "5i7RcdzRoMzpc9Pn43MQmzVwf7wbGCW64vGpoNj8ka7GoXwTveWqgqpXq3EmRxD1zV5TZZ7qjUQcfaNMo4Pwaegb",
  "key28": "4S4XwgaGsp8nsW3wnxLqfb4We2BrKhJnCrPmZUR84cjNBAi4adWvXHjRD6iP3jFoxsQC6dYUxKWd7QDAy4a8rm9y",
  "key29": "2eYwXYQQAnB7cGo2hKhzUzPiBnorfRFhfKkEhXdZGmwG78G8qcVDyzKSiPorLDTEcK7VLXsubzJ12V142QocZKYR",
  "key30": "2nnEkB4nQHCybXmKj3arpu12oCVfWDm5GN4iTNzVc9yLeCEgjV2t6aFXLrFW5hgpfXDiXLbgyT84zivjSuPv5k2Q",
  "key31": "62cP75BWurZ2LL7kKLM2ZdWkJARugUdUTGh8aGhNNi4DBHqsoAZnLdLA4v4PDEcgVG5sPnCAwLLr6ccd2uc5ySRD",
  "key32": "5GZptuES1QA4amy9uHPmQqcFHHvJ525mSA1sYxZXJEsdAVtkWRb46JybRyUu22uvutDeDknfRJC1VV3naKsoK3zH",
  "key33": "3io5XRFhYQThFNQkBL2YPaX9jd1WUnW7adhJZ6txHGUDfcKT6JJBNdKA1Dj9cqn4s5UTLJdT4xN2Ebzf5Krw7ULv",
  "key34": "35ARVx9JQ2MzZZFq2MB2PVmNqAYX9LdKMJzxSZyU7J8SHw4GV8UP7b8ApDuNv4mjJJZw5cge7mYZNupCDMPd4iVM",
  "key35": "4tH8oX1M24MjYczdn9BYZ6EAa8NvwiK7pbuvTybi5dCakgicDUwBhYzQ8KukHBvCPL9g2cT2LHPe5L4hown2WMRP",
  "key36": "HfAAxRa9uE1m1eckF81NwqukfrubnWC2tQhVniRsUKEiCWdNc1REpeWQ8qJT2y8f2Wk2ZFr1QBAcSuGt83m4JcM",
  "key37": "A2dkJAZvnYHsf6HaTLh5xiziUP9BUfuaZgssFRA2GM95TbVW3cxJ1pdCUwgLLK3DwBKW92S4hR7Qok1w1MY38KV",
  "key38": "44bkhtPZCCPXc7CkxUXziQck6QKBVs5i6Eyw1jgBhdTvZrTf72vx5LfPEHoP8FaNwBxRRZQ6sXSw9fScPRjZdBSZ"
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
