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
    "3bR6YLN4gzbqMs93iT1RPWQckZDdb55XLQCouwV9JGQzZqw7ez8qG6dreoWa65q8RG7yhBBMBA7NPSFrunPHSDcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBNHBXu6Exxhju4pDvBS7fzPh6NGBVWGEdPSSwzaDp6dUF32Wo7x1PG9AjGrWvMYnue6pwj6PqgPYGHi7d88k7z",
  "key1": "4UFGtVrKfAazJXsR7LhMywXGeGbxrwccnBzPG7vKeeDcSDHCSVwNDSbzKKy8f3BBfhLCkXuyxPtNeGajchnPsWAa",
  "key2": "2AsDyhgDC4tTHukzNMcxTCe3vsCC56u71ZinANQQxufKan2pGeGFWXYKvhbKhV9tmejvzdGH1km1HELVbbHxpxgV",
  "key3": "wtFK5NVxP57JNQBkLbsFF476si1qZmVEZqrvhjhMbsZHnDqd6VYPzJzdmF1NYggjenqgDJYMy126mJL8QXscQ3E",
  "key4": "54UchdwxaEufv9JAsMJUwSoan9kB1HXqJc1NCNk7q95cq5tPZyz5cvbtxZ6fMJNpGhQqBzsVLoqbTyeSJvm4KvcD",
  "key5": "4xmeMmHPSxoiAkdrthUPJbGLyqUTHbus2MXythaasiujGS2Frj7Zs3vLe2mE2HH4AXPgMzjtNYAYq687QdA2kqoq",
  "key6": "41ZY1zQ7AzP5LHBMLDjthF1GCAoFzCUKSHQuEubzAEtdX8PQRQ8wXBipEKbgryhT2nLvHCjpTS2v6Mf75y7dv41j",
  "key7": "3cgN8UTG4PR5sKZoAfe74hrLRzTGGsyXBdz5bPAYznTF1khWjRGr5qqHpeVSqLy2dALcgLEqPdoR4EXSVjVKB8Bk",
  "key8": "2tBti7ipuNCWnygbGUCYrUuJwqTggwhUusfuSM4oArpMQCSySG3V2V5hsnYFxoC3WLwNr4hca4MpAfz63R38efvm",
  "key9": "5jUidGEmRQ7HTd5xYgHsURnMDu2qGgBEMiZCcmnCCo6HmEByHMnEjUumvcTt78SfpHNCDXiXcYasaYRS7eZ1ckBg",
  "key10": "nLWoEUgDiggHwWAvbnotWB9Uf26hjm7sThNknVTpAddJ6MpS5H6D2GKGs9u2uFVJRZ7PqfKKJszqQeUcxxWFsXE",
  "key11": "2K2qrkeCznEQy4tzg4MzUBiDM64i1SqXu8Fnqwv5Krzp2tUp3ezsarQvraftQkrgAv8jqHyPiRuZZYkaAUyCQhu7",
  "key12": "49Y8QCf3gLosRTjSH4qVKLdMNL6ST8m5zvgKCcuNhGTzSww9gcyKgu5kgsHXBbvYAHEdKNuuu56RmsXieKcWrxQs",
  "key13": "7NaA6mZ6jj3JRjgd6tXR43MyfSUMnexK2vefWD6aV9VDtx1KfnLeQpRDZsMNL4P2QurhjXezQgY6ARmyeSTzLY4",
  "key14": "3pEXPWSAdcKMtQ221Kmws8mJ9sH6oB5fbUmv2NbdoXDEUJJnbgRoBFwr2LrkHmnSqSD4sH7VTogZFxxXtnyhrQhS",
  "key15": "65RNiTheDL2w2TkETtHctBMg3erEuj11HyC6MYrPhCSQrBSiEPfbB7F2CWNLCoHqzkDSDiTMHBvvywfNQ9Ro2tgG",
  "key16": "4phfpJKKNjswekEhnV1ACQKuZJCssKSUYmADmSyDmnZnWYo4UVcLyRStet9ypzML3r3uPUfKEPyzKB1DyXmFTkJ",
  "key17": "3nN7YNnhic2fn2GJKq8pFAe9anqKAFHVjg46RcJy3o9NRVbYQAZxMVJ8LR6dgnuUDy8ZcZM7ZMSaiGJFyRtp93QX",
  "key18": "5ZXmn3WH6q6AdiqC5ZjHK8zbiSNev2Szffxrje2HEJVe95eUtm9gN4EWUMvxwDAXpFW18wuQhbzHRTCWUSjCGDTG",
  "key19": "5amxuye2yQkZv4apWh7Sk9UVvCYzpNV36VPFbqp6qpqofZakLGC1r4zRyXejzthQxC6GYaoJzDJasLeog1RkCjcx",
  "key20": "2avG6FmP6Ei13rrH9mSXjTL4DobbNWejdT2rCPi6MyRfGaghuooEvCsivE6TK9xd9hzMZJfe4irCRL6yCcZhNBr9",
  "key21": "2XB4S3KQuBJfLggk1s4bu4qHYXERQJ69fM5TuAKhsbyQtRq4xtvYE5nMoVLyaJtP6B1j7GjiamRQyfhcEHt1cfWv",
  "key22": "jcUvoLFJVZmZobzSy8k1b8GS3JHXFb2rf5rVB7CRMSu7BNZ9XoDg9kU2sSFwm1tTLNa7m8X5HntjHYNt7LfU7fk",
  "key23": "214kTj4Hp6PSoLJU36W6hYHsXbEuGX4exbe17gL5k7Z3Lw6yocvC2UyPf7ffLAKmk9Pes3UEDUJodZYAxcGprVb8",
  "key24": "HLatUGeEmn3d68iAoWuiYawaKXgzwPxdSg2merRtAAH4SYKaNZCxhx28dye4Uciz1oLeuutMw9k1B5MigDq9gwC",
  "key25": "3biFNU8RS8wZBALE2edRQHwnUzUu1emUNHnn2N3zBSns1QMEJFf3rYrMDhD7cF1WfiJqUAvvD1XA4EEAYyLMBYjp",
  "key26": "2CrmdjyAHovxngqXgGrSnHzSZTPYEWyDt1hrNaiea3PkE7GNcPh8q2JruEZidmPY8tsaib7bc1L4kURsd4EcucGG",
  "key27": "5oxRX7CE9tpYZKSQgSqRPCTeNZkMj7HENvgRd8fiEAdH5d4YSuRaJ6uQsueV4iYLUnH4AiVWHpTzvNThgN4kXLTa",
  "key28": "5gBroHugsXC2UAWrEionH9dKcMfKSoE8cTRsDU94ht1iyT3p8vVL3dtKfsaajZdVDKSWoZqEmu2sqRpP2qnhbt5M",
  "key29": "dyYKdGCsTPARBUWc7CchKJQoSoxudsptHNEnjPf5cCx3fW6sWsuBTTWVuTo8MwH5nFHfTQJQYcCf9PdY6fPJmZJ",
  "key30": "2rNMTr4RzB1nCmbdJXGWn3sszCRbejR2jpbKxwSjwVssXhpm5ncKH6fUfUVYnSiGRTReYy2LwYEiNa21sR5tcEE7",
  "key31": "5ETnvmAg2eznowkfxCajw2gkJLqBXdoxVbjKuZEp22jn2M51jRWq6CC6UGAZDrMV3atKyUDfSXbH6g5At5yxBqVn",
  "key32": "3GYhtHPEFwx7HLPW2g26tCi7wMHeuCt9vLVBjZ5P4JqCQkuu8z1A7SDmqVqAR9BpgB7ghXjuyS3PVij1M7Rpycw1",
  "key33": "5G6jaT1cFLpUPiAKCAUXmUYNdA4Q5roVH4LHHSTT2T7qQFgbdKNPoq5ap3MGsUQ3wHLYvX88MxjXFQKcE41LK6Hr",
  "key34": "2hB4jXhShQYnCB51f5ZDC1MDLrVuC1zMdidHT84LVhhF2mGK1373TCtwnY4o5FQwY4bY2Y8xvsZnRSKsRUY2S8Qc",
  "key35": "3yHNCiatYkmBD52arXsQt7dfZgjcmh3mYLgMiAQfpsHvvQHpEZBoftUTfA3PZNWNZeFVr6BhiXWNpnZnr2fC3wQf",
  "key36": "5VwmtFnsuSnD4suXHoGUwNtKjf8SXh4SGztZZE9zX7Ku2r8SiHfJJGhpVfsMUFuiL9MZQhevptFaqDJqYtL95fi8",
  "key37": "4jFPgsS9EC3kbDhDaCBQpNVVogQv6gUHdYCweZEnwhE2vPAd3grc9ToT6DL3gRJxJmrqT6Y3Zg7VS1TogTbDUNxq",
  "key38": "3KETJmW1sUF8Wm8MziqSZwuhL7kfmGiE9nnnrNrx37vkM5NFCUST93UyFAX1fDKPjuzUeshbrMuPzhD4kiSLsKVr",
  "key39": "21t1daMqZVh7iW4aw72ACWrzrnTZZ97sp6KfZ5bBsYxQnNeWAzGVwBFY532f32dDKwo6H9ogNAuUh8jcha7GEVeQ",
  "key40": "3uyz9BmgQqX49qL7wC8ydxcp5jwb8Hgw8syVmxdZhZnCyX2A9aU7oibij2Eb46exDWAASFzYa5NVtdXtc3X41g8h"
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
