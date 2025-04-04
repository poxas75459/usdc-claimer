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
    "32MQgTEBBpEwnkFjdMDZomocseo9pdKfiheTp9pcsQ1NwAc5gED4yqAZdLVMHu2AQneysPsQrPEXAEETGUEWAN9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crDDnhw5BhoKJj3x8rK1vWwCz8Fd1agU8DAhNLzJYuqyjpF7PDbXyEqFKsoBznnY9QRJUr5xBabCU8pkR4e47gP",
  "key1": "dSSDVjCMqBg1MEMa1kSb2y7r451qtFjB3sssZHkuvEy6Bx52iAjDnGVyjwojbVxSXgWDXGVbv1CaUVDVgwommiz",
  "key2": "3JF4G8nrEkuDM5TcU6yKkSJSELSyj7QkbUMS9Rz8kXQvc6BdaHu6Bnve982me72FYY1Sn95msfL13gFrChpH9oq8",
  "key3": "2mzVb2ahgz43tKK4WXtFb8Q4wTrCxgNNBdGHaA7w7y6nFN22urL5iegizvhdKVb7ND14gWo7VSejRQDbAVBFrzHq",
  "key4": "CsjiqhFYuq2L43Jp6p14XqMPdoU5hMc9nRmm5M67Z5Ug9RbXoY8TUwn4mS6Qm2Vfn3sk3nCvHUkDq5ZDgmqkfKM",
  "key5": "5sND1XqThSyERv5xh6SqqdDoNgkKaZcb6ThA1GEfNCDgnG6K9tjHC5JhKdg2KvLCqkQoaXsF8FMqpxedHbCRvSam",
  "key6": "2uaDwDoTQTcS25a66HJCjTVmvkvURX2r3ovFjnT45ttS8GogiPaCk6WEEM91UmMocME7THWF5QiTVhWwDPYT99Vb",
  "key7": "5MYjMHV31GKvakUhN1G5d38dUCwn95USrghMRSNTiQRqQJRPAwR9LN5KefS4kPM92fY5At5mj3NwJXZkywmjnVdh",
  "key8": "32STm7frLFCkMAEBySSjK7SxF3Ek3kEE573Sn21phdkRvHNf5TkhaaswJWX1oGPvVAR2N8GK7LdKrDEad4EDjG6T",
  "key9": "8joVSDAFxnYs6QFsmooBTyjNUjmufwRCNVgKnPUE1ZkaQtpfaD9jjGCoxQkZjdjzwDJUAPuvjRaoYTsB2MwGVmv",
  "key10": "5Z3S2mu2SgZ2iPZNtAe3Acz3eCk6iN315Rk9qa1yxsAU2tY77ZcZBvsAu92oG2hyjocQvcv9mM1RTazH1JkGnQR1",
  "key11": "54msVnuKvzvUnKGT49zXpJnw4UumbGQTGmCTqXy9ncsETwsB79BZLGXVDpMkdKUKWymBMihCXcWx6LeMgXnfqTjR",
  "key12": "3hGHoH6UXBb7inUnTrC6KcpYLaFpRWyZqgwZsivhgdJbezPUfyWvWB8ahvAwziM7sNa2zKkSLVM4JpfaLUXVwVZu",
  "key13": "4TSCgfxMado6rtnPTfsUpdG4nnchGrHUrkdBHzVUnXutwogmv4XNgzj24iMtEuiZWgCuTs6TrifwVqFNukKMzySN",
  "key14": "gkF2eec2eJChV6QHmATQ2yLgSAxHuFKxW3ewQcDrzZdQoaxXJ9XaaFxm6JY3LLsmwn7XskfQt97mUt1o2UcrQXr",
  "key15": "3uUXzHsTwmbxCHFma6p8gwXgFEG4JDDgcthqTVuEXTrnRbBrUF4kuaJr8pdYBy6h7uqXgeQctRWV9ZYparC17hou",
  "key16": "3pSwvjjdMofkRbtymsZPK4vkffKugpKRYkKBa3dvkzBJPkpUpq6thBUVVJsvwLKZKFYs21scmXiP2nKZqe7tvnZf",
  "key17": "q62Zw1y48uM6XufqPgbKvvHV62RxAb64oGkcNqqPnJZT7oHe7yQRQrpTaj8GqvMdXrM3eCSL6aje6NgByMjBq7P",
  "key18": "5wsMooD2EihmL4S5wLVo7dcYgcCcXPF4iAkiuqzWXnbdyu8j5KNTnkopJV1d954Ps3VgAFMJDLuRVm1FSndGj8JX",
  "key19": "5hhQQKfsGhFT9LKuQi6FTH34zK5VDQSKfjA1vmCTuLzFBxP48UE7iGPwop4MeJzNawFWKDfQMFZYPTxhpJQXYSmk",
  "key20": "HNJVC8Nn9dd1zSn8sKQdNcx1bqvMy3naiH7N9msQkXHhA4fYyNwCrLuYpTE8hnW5Jv7rtCcUeQKoSqKfiUsdQi9",
  "key21": "4JjSwpz9QdgFAzVSem9y4kShavKvWcot6WW3yRxPYDEwDiWcq9MFwiKC68tVYoyFHzoTypvt8PxQExugdS5g5gWB",
  "key22": "35eafC6kxCNytHzGhCUpfFoCkzxmvmSAHSKfCYnEecc65e5E6FzAuL2LYSxXDEJeWuGWhhbHb4N8n7kTuWX7tmb9",
  "key23": "4HxJrKbwNAfL4KhDZH4RoqT1UYwkxNgGQPgGnLN89wwwnvoK4vzQu6zwiCK7cYnF3tJte6M7NMUoM4wumM5FNQAn",
  "key24": "52D1DzKtWbPFcnWw95CXBR2cFkWK8zhhGc8Xhuo7x1TSLhUkMDcDJUQAnV13711RQwgc8Rzua9eHP7GLnqTY9FXk",
  "key25": "4SuFaPxTCDk1nKHXwcrMkCQgJdBc3YdfNrqrB2Pd7wWZ11UQVVh7nWseQN7n1ZwNpNkavoCDMXougKdupm6oS7Ry",
  "key26": "2QApp9f2Jur5PnDrgfp7qJwHWwX5DMsNiDFUQDnc3teJmxPPiigqqGAhvXrWKD4B8jkGmmJCybE6xnvissnHHQg4",
  "key27": "YzAFchEeTrc2epF4mjz4of7ZsAcJbihJoFA9Vv2s7qfCEjX3hhbG3xw5Wf6453AciLpjfQStczetSc1rWPL14aT",
  "key28": "3ZpxKCymaBqk2ZeZn8cGm5a5PCNpAfTmEBabaBVTAktEuWkjv5jM2XHWCDMeZzgdj8WXREMMevkPS1h8FVSAn67g",
  "key29": "62sUqaE8aKDhYTh48oifmRT4TBHUzyHW998sf7qVXNV9WstnXn4wJvqKC4JPgjKKp5hGBWFq2N79HDRXSuZBwVqK",
  "key30": "3zFyfchXohp36AaNPCiTrwaWAWGmX1Hv7P73XkUJXgKHxmY3Hg6ihdKAEvhNpX7yYyZZoGaVtZYETRCqvDmdWvac",
  "key31": "3PGtDCJNo7ULgnNAVdbzAbXHb1APxi64NKMR7Rt7J1iujDGXKJNk71DPGjcSfCmgAUkyRweQSDjXJcv6UX695Uc2",
  "key32": "4xX2XRSRQebJkAwbEpCd7b6X5t2t9wR3mcQ4LizgWoVqEsyNX5EB9XHMnYhLQ4Znej2vfp64BEe3VmJsr3Bou5Dj",
  "key33": "3etewMR4Uf9Sh19n1Yj4hovK2UD43X825ahDb5KnzgWWeHdQjsvqnnzCvEe5SEfQFXmMCyN8FpL8MnjVCufvJvoz",
  "key34": "4BsjcSPqM4vpqbv8Kwo5b5XrGtfydN6yhUDTGyPM1Gb1gXxFLMkbEBeZDKs1Pttb9jyStMLWDjTmQtRVRZ2MKJca",
  "key35": "44vMhjVxzJ3oApeRjR8VSENgqthpzd47Mwvppw7MiZW1FB6eyKVC693rPF8qKhYUitNFfmgjRp2cosdTppD6Ve56",
  "key36": "39cUKZ8SzXbGV7Jj5wasEyHt9HMoVfm5sWEvzBiMfCmraxehpyHjzDtfBk6qXR8xUi2zkN5rftz7rcwgEnTbiUdF"
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
