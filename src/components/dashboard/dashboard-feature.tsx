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
    "5VeX2Nw7Q9WdKTQsLDC7XD6L5oyTUAZUT3szj2vK1qXXxTvcFc13W4kZHMNTVsiv4TizeLYKBwKiBpB9my5T4GVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCeJj5CXpx51uuzR8hCyta8WqL313B893MYogYZ1sCEvMkKJFN9kiC6dooiBSwyE9vaUHgU5H4czVv9ofNhA4Tm",
  "key1": "3X3SqTRjkgtwTFAo8UzyShNZgS86gY2cDQk5da9WYbfe2yr4vzVXP5eQs9NeYwx6kH6Ny5dM2RJ9j6f8kN1vh6dr",
  "key2": "5Q4UNeJnSXVpXH2qmnxDR6HwPePrJ1WcCWAg3rKJK7dMKgh5qvXubEgekNgaG6M2o9BokCuRvgYNzR8m3kBsNB3H",
  "key3": "itoDRBENMMU7Saw5gth7doAMPBZ598ddJg84CKpagEgfA9JkZKthvbapY3Zi7J1uRNYkG7sbvo7FFsWo8o3NQT1",
  "key4": "4HFwAWRPcq29ivYGTanAYCqo59zQU7mnuWhhYYCYJU1gMA1MQrksDMDG8wCLr1QTYE8KZTWwp4wTEo9Jb7wAhNPY",
  "key5": "D4K1viA7yWPv2bkRdfg1g5Bkx5assjkEPiugTjodEMwaxFfRUK3XLkw81Kg2eiSpgagKzEPAFFz1oFKnWAvHLjj",
  "key6": "2btQq2dqS6MgKwNHvFC8xbLuUDbrPhTU6TnuKZCpKyrTsJosCj2AmW81MmDbDSbv7qu1ju2DBd5dbA3pZS1yyGms",
  "key7": "4WxCFQwKWvUQ1kSVXApvVwp5B531yt6bf3buFqTxDDPgvCdENG9kEWjhWDBmB5RkC9acrmrWV3Fx5pxYC7Xd192y",
  "key8": "3ptt4NjqkXcqzYJNP3uAJc4curATXbiz3nxkKC6ct2h5hd7N3cQ9qgesGJizsMQuTavK2NrWpe7c24WQyivbH46w",
  "key9": "21tj5Ppdf6MwcPyg4Lq6mFD6p3Lxy61c3fNw8VeZvdiyChzRbbRSNYrgHwFfNb4R6DcnmskLvEGC977oEqBZKnAw",
  "key10": "616fPBfvvuRV66LBDnui2qK8N8rrGfGjLxHXexRbsjjQUpvcTymNNe2BT5iz98JMxAMzmevkZpQmdp6EMNWxth4c",
  "key11": "5BLw6RM8YrLwZBakXbZJkAfRGyrBVcMAF3C8opyuB54E73Ut9FLgmErRvXvGqPPEAPhbdeFDVC1HYp32r4jNetoJ",
  "key12": "RfK21g8owQgabZ1kAAPxcmxgkkW4koUc2KuvA2oS1NGcviEDBro4WduKM5bZS62x5YKo97pNtJ2txvdCBJHDcjX",
  "key13": "2BUizijWZSCiiN4vVTzEzabKH6w3HQDqYdgbzWsvQfQyhkPcLDxc28tk8pebnZU3EvGzM8GdKobW3h8v1CVNqp4K",
  "key14": "2bBnRupVTFYbU64cGJhxUQviaCuAxvb49pEngvMyzjiXDLB9FQYcA7BqLeeV2Np24ehssRZ2GCGqepbXnsqypuFx",
  "key15": "3F2SPLaVhE2Q1WWRN9YVXEYmNkeSWkvDw7U4hdc4ngJPDwqznGQfMzmh5znS4aXqqh98XWk7R2T5HZxHa2VAzMv9",
  "key16": "4d1HkQhJH8KbYQA9c873pLVWaxLQscAHLDz4u6ppxuxEPaWqp4bFzia3Ymz2a2uxMxivA932XPN9rsDwod3TniUP",
  "key17": "5736kAyD9G4zDhoW5hzJTgn3i2MTQMxi7JvXaU1wgUVjJ5UYNRUWMVF13AY3c4wGXyZNdnkCMfFxMcjYRpDxdsnK",
  "key18": "21V8RZUXKTUH1hFYdXubTStRLZcooPWVf2cbD1UwmfQewLD3PQs7wRSQe6pKpkV81P3kgFLuT59aYspMrzjzEApA",
  "key19": "2Y6aEu2ktzbQkYbVRmZLz3eo1E6MStvmsU7rtF7e5PfQcKdA519fYswTdGZecwJXnDFPW4ShGRw2W4eEvzRGNSZw",
  "key20": "4xx2x4TaUdmfzQM5cSzZAmufK1rrp5iJyXGfXJby6SC5GcPa3QuCrCxiQU59BsSEDZut9YjxrCkKQYYVEbNqkJdg",
  "key21": "4LSs6F3GUqcgGUWLyNwtHQyVxQnnh1eKvKExcbmLBQxTGCJSJSSrMDxhTFXPAPVrKe3CEECUdMvWtybPQwqyQrMe",
  "key22": "SFaAfqCXKm9mPQDpyQQ9fsqbHe39rQWvUvEXFGe86HHuPXLmLT9cvwUsrN3tjZqfP7wKjLuiwbViM9WYipri247",
  "key23": "P1EfpDPFSFrC6YK95oRLpmB7tqbqdcRuZvS3hKtxgygommKAdgWp9M84stpGZ4moEdAMbT6TofniWYAU4tyGWVQ",
  "key24": "58KfSM7BrTddxNveyQ4WP3zmiS31LYcT6nFZjNssX5zwB2AQzDc3ucMwa1T7XZ5XAdEa8qQUnovUwwMRCAfvRgnm",
  "key25": "4ne31oN7ASmk4EePCzDKpG43PexJ5Xc4miqrnj7VLSgdK2BuMoYNxEauLFB3sbfg5tPnSjiQq8Bh4ndwYZXzmkKd",
  "key26": "21Be36FTo7ePmMk4GMcG1QTjNBFcPvYkipNyzmdba9DvQVwSSjVxMC45Y2RNat1JZv5iyrnJjazsrJby49oKjifm",
  "key27": "2cNXMfQotdFg9uShJyjVTGaTZQrUNi8311J5UiesMtq7XbvRJSVui99nuf2TQg8reUyn79AqvQawP34vDh82J1dv",
  "key28": "5XtfNb38igWTNPsmuvLc7uQuSJBv8Q5iYz6ABq5RtxfQZe4qA69Rm7tgm1fUGDCL7XTQMY6efhmVtTogexUKhMcv",
  "key29": "KJTmuwK3fcSAc8xNYQNgnHmmNxqZR6ZUczuvYwzLMDVWmHjuAJNcQawQvXstEctowPorHAdryc8iEnjsvqG6jQV",
  "key30": "3s1fVCzr5fYptSV6CBWjzoh2tGFqFfhtFf7yzagGQCbjntxndD2GvSC4Q6L9mWaH7RrM21M69XQqqDGsJxfBGfPs",
  "key31": "4cifnyxcmTR2wLcEBi7gsPd9uHkR1g2EUScJwhc4JZyLoJg6HWHhedUVRy81q4N7cmJJxRL9BMJenx6SqpKZ9iF7",
  "key32": "2NbBRYbnHvFEzZS7NiHATDtdRHN8JSbaeBf9kDDDJqBWD7pttF9zt5VAk2qQWSBUsEiCqPoXuKiHNpwVtFn5AkTG",
  "key33": "dvEhA5XpdmpVoqJtfLWqCXnNuNk6gn8d2MY6Bp7UnyCKiGpFBP7XJH9MrVMoeiZji9wV5dDk8hxE6kG5qa4xo79",
  "key34": "3k5cn78psdqGQ7v2CNXFGLJkNWFMYDbup4bucpeLoHRM7bwtAH1TrtLL8ruKDXqWzNk6UED86M7svm644qySHza7",
  "key35": "4GnyVzEMG4wNYN1gd41uFkLfxMDUXpsidCLu8roycFivGu8skNes8usyDDADomuBz3VxXjXjFwcBAyaMf6MWV4iV",
  "key36": "ZAwHbPKHDjLLtWY2LtMuvp89xCZ4pN8nnZ51pUZXomG2rhxKur9iVpRgaNyHn9FhoBYNSSwhngsZfM5waWxKHrx",
  "key37": "54K6f7QVFoLcu22RZq418vACu5qLQRs9tFfD5C2wUf7MQ7dWGPdUBUUBdVMxTCSWDsjRpEvnGQTgTMUv6WaXnD7B",
  "key38": "4AEaK932DfmhzigRi1YCaw7AzJVvDXbpoPsJ7ks9iCjnhvvKX2Y3vbCdDUcY2U2t7pxRHcHbsxBH85dHpttAwtyT",
  "key39": "3zdo57MbRmGcDRFsCGVqFpX3WcBVKQJy5LgZ94JMS15Qgstqj8BBxFt8M1FB21NVruBtat9vnZiHGJRAu8asUY9A",
  "key40": "2Wmqm1WAW6KG6DQQS1EVLkBWA4m9eJj13XACqyTydvPrmmbdnEEPmKYct1FQYR9r43rHzbrX4iLamDhkyE1h52i4",
  "key41": "4aAdRPFmtqrqhaZQBvtezXD2r2Qc9Cp8ncCF2b1wNoaT9En6yUYAne6K5WkqAhp4iCVJHBXqJYDSrUWQ9ivdXyNW",
  "key42": "52U3jdeoLBacUgsSX1Ho5b4XxRh92Rk2NWmvxbRiKfAD8DB99m2NETBuuG58mc8GoQNuqyFRA3Zo5UujRcpLcjQC",
  "key43": "3mzmc9RSsf7kfHtn2yajDs3EwyG4L6GR4XiyMTDRoHeEA5bsgzJZnhSr6ZPWiR9tr34UmNPRUKmvo7QgvfUf8uNs"
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
