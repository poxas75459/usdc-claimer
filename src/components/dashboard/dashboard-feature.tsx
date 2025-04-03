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
    "2PSc8Ag78enCHvQkANgqna9a3tXy1iBUTAddrnYkW42WJidU4CPhqjkDPASsC1q9Wn8sB3nXiFLNSebnh5pnESHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMNSQUHqowY6TjbFNaFbHpAtZDd9E6i1JWzuLujXtomhs7HYjR3iQXeoaBnPckatPB3bPhT43ehC1SMHcfKbdeS",
  "key1": "4tQZkRr2WKXJHNBdMLLEcz83TAZfXzM55HH7wvrGrBSSM19gCcBY6khM84arySySpnB1GYexgjNQXp3nBx3vzQeF",
  "key2": "648tgsAvG6JEqCYHvQHheA5LrvvB3PVuq3pMX7w55a9ewsNpKx72Tech9TNmeVwmfdqnzH7e8Tzt8oTZon1PVQJv",
  "key3": "4eqiiWn9yc3r7bUACsCNYgxoUqG7KaJywSZKg2Qkd6Nqy6DqKQvEZfJGF4DEvZA8vFhCPV3Q2PgiCmAZqosEicCm",
  "key4": "5vZBEuThBpdmexxGiBirg6mMvY7zNfjPasRvKCmepgvHu8v4qQpnqx88rwxfApfqymk4mzESgNEyHEvgMKtXvXgu",
  "key5": "55ZG2Vzsugx31r59hKpfqMfa19LTH5yCDR3uVWZTEBrEaj9vU8LLAnygXo1FwqVteMEBqccabMoow8rMtrZHRLk3",
  "key6": "2yX8E4kzJYmVmX7G4wh8JDK5yzPLHkBU2NZ6Dh1CvU3f1JYbe2w3U1c46yDSATsd7xhai6nJrRicEePgAoCxZ6MR",
  "key7": "5XKGtbm6Tt9fesMWwKWu5rE9hrsAiYBBJwp4FkMT8GSk5FG6mgebD6wEFg6Z8mTdhCqzfy9f5zr55jQP1thfYAJe",
  "key8": "5QB5R5bYnGwJ7rj92VRSoa5N1eej4Hj3E9jw7m3DRBuVBmoVzcCWTpTjbexr8vRdgyLoGEvwim9JgiieDkFZrgiu",
  "key9": "5KFg4pAkw2Qfn1ohYipMXm8oWjqtwwX6iqbDPoWSkJCyRuKYLAW7VMWWSkAA2ZYuhkRYg9XSL6iQKkwwjqQhThWv",
  "key10": "2uGVkCnEZSbhbBUEL7PpReNyyi57AjjFeoaSNQjECNR6Nu2JeY1eqoBUdSdYk8eLqeTQ65pu2xUKKcHvcH27biwo",
  "key11": "3Y7gXsTLkXPbgjkJhTsYeg9DxGqFrACKZqkmug5rs4qJdpqrpJvnLvw4MC6YQD5fygsn7hFepiqwkVreK8Hrpfr6",
  "key12": "yBJ5vzXeEAPuxVoW8YiKfX4hgDDg3zZDVMZq5gGrYcW5wHiXf4a98LT1GGAhuCiMkp2jdE5AwKciqUk6xuURCga",
  "key13": "kPNmFkdq7XubPZpTB7iuWoQFZjdMksUSZCbMht4hax4PQkpgAbND4QPuxSb2vXR9uTsx2FEquwatQwRhVf6tZZu",
  "key14": "ogMbUY2jbtgrQm4heTUbGPwBChfdGaveTLHp8idw5RzgrASywcAhHqdi5qpMrWwiykwGWnJB9TrtEwXQ8ft89L2",
  "key15": "kf4eW7bUCaftXbybcTeFdpw2E3A5KmxqsfmN1gERQTmrTtanfaNjKLeBcNUeoThBgyACPCtibAcAek82syLjGN1",
  "key16": "31WeSHzcAXCZdULqzyt4qkt5G9jk4q56JcbnqeTsrkpxeLU9MAXAH124xR5KVjArXjS3eBH3FSFDtDiHNKEuEiaB",
  "key17": "WtUQwQ9AKeffAyBq1LpkLVy8FRQjX5mccWUJD1RqEppjoL1yBz91YgSspb9JxC6NkqjHktGSTR3g2a6xgdHC72t",
  "key18": "2SrnDoAZ9bAaTyVWCTxyBddu5MxywSpz6ZK76U4VNq5kS37HcXmzo3HcoVh8g354aceCP6eJAFrRLyZtM9yS9sQT",
  "key19": "4kRG9yGQT36qwWmCZiwzS4E8U6SfFwHPaAFMgDequZ8X9Z2G4ju4GhjLHw7WtYjnfGqCazBKB1wNvJ6FEQEYnSMD",
  "key20": "2Jwun6d69MiGusZMpj5mNU5NbzEobX9YDdgxpMLXDAaAbVGUVGsfyACoE6BJLzpez6oe1ETADqvH9QxaCxx7ja8",
  "key21": "2YDMEdHBRfMUKcJdcSdTh1obL2odyJyTJpMAHy2YwkjC6BiFLMdyhdJBH9XyBeM3f1kuNvwXQGN8hiydBxBprhLs",
  "key22": "23muUcXHKt2gU4FUhTDKqE2wjbQy2NMifpvb5Xdv3z3eGKTL779r6FSRbJw8oFQarDjz59S4SvAWX98rAi9yjZaT",
  "key23": "4FFXhu5PfNtF3cs2t8UG4g37FDcDixhdbHgaGtU4yKxqATgDFBSA2eknt6JjYMgbDFTPvHjD66zgqixHhnE7Vmw5",
  "key24": "4zPFfYSNdtJ3eHhEXVKLdGS9UU4AJriYXmS6RuBMDGiTBA8n2ip66D6xrSkh66kTHyXP1geV43vGzEFTs7giu1xE",
  "key25": "3awyG53A5eonzwiV3u2dLGbP33qyAFKKgqTwBsm33etgJMcScp6UZhQqXwJjkB8LddsvTSvLT5Qr27QbmYm6XxZL",
  "key26": "3KS1nNnjKUUseJMrppv7Km5MMMnctFfeFMBb429GsCHS7aUisSytGYmHdEZaAtrKihg1fVzeGFxVCQPKMWrN9HW9",
  "key27": "V1nJrDC64SArT6hH9UrEGEwpC7gLFkCPdmEZTYMiqoTLXykxXPcBXXnYQBabcx7fkdZxHD3bxYRxtHAgxSvco2V",
  "key28": "5S6mwDPfK6hNJsBrujpJCYdg375hVMm3m1KvtKKhWfRL7Uq2G4UHH6wfoQzT3oaxsd6apu2nA8gSEtb6FHTtxkLP",
  "key29": "2LhPVZHnsDHMrAHRRLdi3cwutUSGgmRuMxNAMKD2kZQwGJgPDnXGbz5Gh3jpgTJ3L3jGUeb6kyN9nTpk6dvwcrHn",
  "key30": "55yPuTH2u2BfEdwkD2JCC2EVnDnMLp7yyBzg8WCBNBLsDncx8D6mkjdqhy2Pr2oFyLeAx93scWvPEtwXKd82pLDr",
  "key31": "5HTJuewWYUDtMWjZM2uytrRURXYk45zEiBfnsRnSxjJAED7nKyA97WHQ7ZaDgdoyHBLrbDB5VYfDtvRKZTb5wrbB",
  "key32": "3B79iz5ZXfYJ7JkaiB4VzDFgywnybKPWM9FG79t5WqjLc9YENfjoxrYf1MvTrJ1du95auRDQS5RB3H8d7jhdowFz",
  "key33": "3vJz8yzNBCygoQoP7BuHSKk8S7VghtV6A8UPZxQh5W2XjBnKd3RzjF4ayZxqc5Sti5AfgJp83LZkyKfcPZsiFJ1d",
  "key34": "5ibUbvpzqraVGQFxpojUUfhXWbJtKomahiLG6Yr4TnZWdEcxXW1R1DU2oqa8BWSTaZM9htvnW9xqcaSKjPhGS9Zf",
  "key35": "3kX7x6acDcP3YabibEH91zU2PKDpF9k1o3RJKt9BCiVDCcjwdGC44nhkJmnM6wjnjbKfXdzbvJYAnuUmXRhELjgc",
  "key36": "4L2jRXoPzUVs8XscwTQzrp3hsxN3xTsq7ZUznXFj1zfmYxXwcXXYMzRqCbAazeqKNto2iWsCmg5NZR62sMYKAJmw",
  "key37": "3UEW9D1LW9sZTHfrXAWNyNAZovMtv56vLW5Rf4ZzfNTuVz2YVQDkwxdz4NPjEvSTufJ3G9wbVHH1A4XxATQm7zK8",
  "key38": "hvATAYXf7Tsop6V2DmRszKrmWfgXZGNB1C6aGEHTcfRqBmEQ365YvRW5vS2CMvkJLJTuhCdMejZ8ujhfJBMcekA",
  "key39": "6gEMjPzVq87Y8sLXn6fxHTdDkuje6CqyrF9XErQxDJGebnJGaMkVgsJcRCi4ZayVJh1TypQ5P5XhKMN1thJ3DSJ"
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
