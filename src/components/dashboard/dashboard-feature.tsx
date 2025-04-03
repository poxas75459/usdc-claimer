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
    "3B5c5YvvuXEAuqJXNhD4EpNSZhP8XbwNtQuBfJKQjCvf3H4zZJusihjikvRcg4aKZaXdNVpPf9Abkgd7ED29vLUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gtLwvzM269RawDN8C3C1UecH9mtr8Fv3e9SaytFspDDWC778pFjWtbQ5mwwiHhXCdStVbeYTXCMH9VGgQFFmdrj",
  "key1": "3KGrXPn1xuxDWCRRL5FNg5bX4nuaAWbXNjwAANkh9TAKdWsbWrfUiPoBwDow7Cxkxyhf8pTziY5tMwft4sPkTFtW",
  "key2": "23RjTgdgtPtGLqmFLwE9Z5ppPLKehJ4PjCftULDw3VnGcWTyiKug4tLwg8AA7VCg5Wa8hvwYopdLTxedCqjwbAcm",
  "key3": "VwDoQgkshrdtKdsHVu8zjpmgmEx7qWv6Tui7KhU11vHgToyrHovyAfU9cYf9eiogYTyoQyMSTHG9bsyXyD66r4o",
  "key4": "4ZFfhFiRFRytkxh3HNwJDudVUJTzqXGWrRbTsXHcnfivn1rv2nJsiSSVfPeJccucLRM4aRN63seJriewDFQp9Fgq",
  "key5": "46h8R9Yj4cLN3jtYGVp9AcLCU5Urx5ypbez4Zug6yVGtKfUpy5jNEDKgZ9tUcoxgf1tgsnh39EkCfMcJp2HFoyzB",
  "key6": "4t87icUA14VkuQtZgGU91vnUFd9JwTuEaVQZS2TrFk5h4QqXBuqxD8ypTYy7Fph5z5xyfDQ8NREMihsiMXwPpepi",
  "key7": "3MnuMmYenX9TDkrKyTpooXqKTN1ooaKZRZcW18N68Jw3NLsWJPuBd146reR8PQYJzWiG4ccF7RuAcpsZfBNvmE2P",
  "key8": "2jvudkekYtuFaaxpUExM8xmquiYj2Suat2aJ8XMEzgoB9YBRrKnpFSAHh4YYBm377H4Rk2vcNUH5BAZP561X897K",
  "key9": "3BTUtWv6hDYMCMPSanHBWdiTP74Sx6fdBjXLCkYM2gAJu71x1zTKwRg1J2nsQGskeFmQR2PGcA5Sb2SyjqLgHtQt",
  "key10": "4rKsP5TDi9xGwoQ6C282m856Wk6cvHdMfeje4Row4msxojGU5XhmnbABhZBgCj47yH5MfoneGAerULtKhCyTQsMn",
  "key11": "5M3iLUuBKjv5vQ3x5kJ2L4DBiKLWKyk7DBTiZARKtrvP7iYJmYuiR2WSWXg7Xpz7qjHutCnKZnphaUSbVCiGSWoN",
  "key12": "127UVXL3eHuPqmi4s7bm8aFcWTqwKbvWdmdRXdpFU6xVdCpaFAWoEyXv5BCfnjwhGtZUVJBcGXzyMmWmXpw6USJx",
  "key13": "2qGtxJpVXncwvQLqc4P4PZapMgcyxobfkXZ5uMGbkT2KVYKchB7h2PMDjeueo5GU4q5ZugRD6a1RUGoUTFDCDqoV",
  "key14": "2iUp2iGN5M2oAjZMjzegHYevModJHBkGqAo6cK3hB5mzP5xmTsdLLzEiYNJrAoiGJC3NxJvcjHs2J6Wov7KsdHb",
  "key15": "27D4CUXXMVJFfe2CaeqGN3ksUVkt3pe14cmhX3EoL3FfNEAen4PbgKYiJEhPj1ALAdfCi4viP6DpQ4gbvvmiVjEJ",
  "key16": "Zs6MK2fNhXhsAnD9e6rsG8SBXk26Kc2sPubsr9mqFbf7C8vb5MS781pDLQMieHwfqbY3RqEuVh71CgyDGExkXkB",
  "key17": "4QKwcVsKhWrz21cKie9zojFDhTFfXVq7UZ2FmnuupbfE82o2mtQki5NFVJdge7PjMBv3vJTxGeXk7z6urpgmUc7y",
  "key18": "42P5x9mKwvCfkqj9hxQZDpgkx7QnWCZXHJmB3j8zYudTmrk4Xn8JZ8GcpMAQrK4RQ8N5LznZB3kemtCr5iEbaGr5",
  "key19": "5Ro7mUBHGBMcDQohFaReSnvkF8VCWfMVXb7weFbmVCakuz5qGJCFS3qhZWJTZeYFvrrtcWeKcEqetEp8fzsECXZF",
  "key20": "2Fr3HQgQpBMEVHXqQpkPEiGA2iZrYKxb2esRuwX1AawcWsvo8JLRghLhGegNEGgatK3jLcSXaZsewzAZ92KtRDiK",
  "key21": "NXgtSZyCWbKNSPfM3HjmgpKorPcVk3bg21i6GUcjQkxexaTxzxTc3KuC2n25AQKFXEfNhoFhLtJvNFDLuyVigw6",
  "key22": "4SDgtoehwoGw7RDpeP7givntzDbv6XsK4g8zziFszBAT8GcjHLmUNz2TkmuhvkUcPZNJXfvzGJrUXkzJ7PQ25SoU",
  "key23": "5aQ1UqrYWFWbqZwh5tsS8ETdm8yt6Ha5SJfbnSgsNC4n1DZbijpJsQxeUGdo9LJ38AmVMsVcVyvYCUHwfSq7Z8Vj",
  "key24": "2jtmYtrnyn9GTUCPTqoi1TYQxYLNBJCygND6tiFqdFfPigXqrWZiFQmLGQm2i5Jb7AEhbmauZfKr1SnqJ9phoboM",
  "key25": "5yLPoJ6oZWgBB7eTau4Wm13B4UXwugbgctjB2hjArXRAMVBE34rAAFGFmymtjr6Cxj52GbTaVmbcJT99TPdKDWuf",
  "key26": "5Ywtq5aDiTGgqSS5QhA2FxSUNogQ64mSVUKt11G9wTDhNBKc7KtWAvPveudAKsVLzPksQjFwshubxB2N6HdotKR5",
  "key27": "67TkwAx18mPQb8uBDdQxYobiR74nhAKS9REr1gW1me5c5ta9n1frAbftGHCWdG2KRH4ff8YP7ZgiA1NBKuZAtnes",
  "key28": "265gLwEY29QbstAtVtZzLPCro3DKSZV6SYawmTf4DjkXrsZC23R5Z48AbQpzeAp3J55hYMk1AGjwrnz6AbKrX77J",
  "key29": "4TJzYfUPLzRCRaVqzNGxjmMBYSNHpbY99BNnC4uKiWTKQxD1J3SXEnyZpvk7yvCeXJpDF4cdX62Z5fRvGrHa3S9C",
  "key30": "4pfepdjp9eDTs1qgnmDG7fSeD8vR4H1hEC9F4ApnQGEYR6NMXfq7hh76Wmc1oeihoFosKXVGkfBXc4Bj6uhJyDB5",
  "key31": "3p5QPnUqjKF4AUda8xermpkdVdNxLmWEEtdC6Z5nj24awX5mbMrPCickGFzXU7veNzu35NR3KxiEYVvovv2GFL9K",
  "key32": "298ZWJBCR5DkxNmwLaE1NtGXCjXs1sgkwcCHjSv3bUdc8L7hQgPhaZZHPHEWqAjvm9JUmcYhtd6CHYjkGsMNHMH1",
  "key33": "5pKHXQi8ZcBY82V5qQPmDXmDDLe8g83KLMh27Q2wSDKxATyWayo1h9V8N9ZvCsNhCsAdiQjAQSbBq4hWcJMmCFkp",
  "key34": "63r6QY7zqxvkTkyWxvweZwAYYoXQXdrAV3v1QpoqiyC8Sv5mBFMdkJHKBtSE7uoczHZXvdvEhpq3aLwwTHv3euXp",
  "key35": "FNDHNWvjH2ePw4PwhWEewg4iwC1WrdqNWQhF9i33Bqe1FUvnP64CyiRMYnpmJbgUViTyiUmq8Utcz9PFhuFq5Jz",
  "key36": "bCcR99WPQ5Nx7TgkDk74fQubLhQ7FkxfvJ1MN9rh7bpCWBw8htpj7KLgnhzHYZcNzQgT3VvzwZ2TqhmGahL835J",
  "key37": "JAiDoEFibxnsn76n3fpViWbpHCeWdHZofrSBkf15sAdYiGzrk5NQ1isF34DFeJZM5RjpFDLu4tKfYYvtTN6dajW",
  "key38": "55CGtcVsi4RGJZqNehn4cE89TCaf8GSUGNwabn4SBpdysGbLsXPk7Tyj916ejBbp6bhcc8cNc616arVWfdRFtJAN",
  "key39": "4HTp4EY3KKSduAkhfg8PmKTr3qnM5tDZ9C6W6SyJsKXBZwW5Ui9ZkiC7XT361MhRDHDYCdiEmkvuentfnH9T5sUY",
  "key40": "3uUTFvUK1sNUWHY3h8VHtRRXeyJR2w2uXUPJWX8arBa3qzE6aauNhi6hKvTTB9T41G7Z5J31mjLCf9XghCGSC1us"
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
