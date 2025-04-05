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
    "2jHMx13TMGxPeJkKfM98saRCiP5fLBW48DdKincs6Aj7qTb5SidD4VCrBcwPxDdXsPfu4vJafWTPTyERo2zCZFhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vD9spyw8x4q8x2xnghnouUqmxWPsyBsBgpxLtEEjghLpwwX8ESHZrnMWBxty8pBLk2j37JKVsCt56RVQWJTkD9",
  "key1": "5nunrda7XUPmAYNdNQLFFiYG1UKmH8LvzwpzEMPbCgbJzM4ETSGoSLfaFrbqXP71AGJwHLzy5LCcWyLCK2FTRBaD",
  "key2": "28psshWQi7mpo8iiB1AzugPzFd1ywm4j5SBseBrsPtkVpQPkXtHRXqUxmgZcEAvzmBYGm5d9ufV1Awu3LT93aYqQ",
  "key3": "3UcNHcumRRiYBHm7MdaSJUC6CaXjeS5KCnKfKYBQCQUQBCfoQApMtrdGELSct84y6a6MNHLgmHYWA82wvQkwLyYN",
  "key4": "W88gFfwSQDT8xgTL3x9XXn32y58USXqrda27hfQjBHtffeaKiVNya2pWNTC2sp5txnKkSLeFEuoEdLgBtk1BDTt",
  "key5": "2Pps7c8eGmNcjQqGThKhV4p4wR53c34oDw3o1rt385GZjwtJW7VCS48zcAcRkFtmHUuKk6mDV5gvtMmF9WYh3Ed1",
  "key6": "2WcmHatUwiSBUyDGQRyGSUYbct2wAFhqiQkBhvDJ8kSEChUUapmPLkVodJmzQzuerWQWxZA3kaExFYSq98tjAJYp",
  "key7": "2Xm1eYyoG9GWiXkRFexm3kRetRnYk9HzLjkWUVGqq5FsDcejjwMdjMxgC7g5ZKP27JJDMGQyi3pay9f1jgppWuJQ",
  "key8": "4RwRJBkKjk4EX61Pv4gPtajDe4H4oxBAGtRaevf1j5T9KW5YQy88LNLeofnHHi4DmwrL2xQypMM5SEXLxP7v1Krn",
  "key9": "39s1Hsv1WVjnJFHTq7Eb8Dc7kGha9SpJg6UfZiij8AHVB8amNnLLCjZtsTWEzZwE6dmWWtREYvyEA3Xg21nvxZqQ",
  "key10": "KUx5FYgcDiEJFr2bE1BjThbomxvRMTCHNtKqTMXWtE9tX5G2M9SKC5j3pXQUYn36zyw6o4P1DsayvKDhiD6rUKf",
  "key11": "3gLPdRWi5okkDjcPgvxEEHdFNCNuraeLQmttBM5557dTWpshwpBFn31fzCNuEsCbn7vDr8zVe8UJFQbLAxftUEs3",
  "key12": "55pw8QXjrHm45kgP6zn9RL5bzEgvtQgjQxuzNnG7ZU38qiQ4aci1k9MTv6APpLD4UQbVm76a1E353hncJw3up9zg",
  "key13": "4FVxK6MkHTYnMEeeRSRXcG8tWu3FXiGk8HLCXWKAZbmKF4nH5kzK3zJ966vz38e25BJRnMHwx1Waf3khNEHJYRPg",
  "key14": "419x2mq4L8iKttFLbH3jFZ9Vob1YUL3Bm7eyXi7HCxcyXSP5Bsdy2GbHvFLzr8bJLSxFQQKJ7PNr6KbgDLiicNzD",
  "key15": "f2B5kxeUob2kSSgctmbsTvzSry3tsziAceNn3U2BQkf4coBByNGmLUw4AQ32vYPoVLrKYrMBpsR7v36XeWazpMx",
  "key16": "63D1DgUJHbnApoE4j6ye5mpABqBkk859EBqxuEbBg2ENeSFApeLSSWCrg1xAZbuJgfzPSpdF8fQVSw214EerVkth",
  "key17": "2kRQqxRLXGHZWvbuJAJh4N7MWtsjhGnE2bgtKU4V4XYFQm6AYHaE39dyq78mHFAKUVJNFvduPtTGiJnof9QUTnxX",
  "key18": "3r5K66VZSFMNnNHmY8xgvJsPY7bspufYed9LEb8KXMUuV2ZScxTinqFzvUYajceQ962VGXpABGh9Fmxhs3LdBsb6",
  "key19": "39CL9pGycwLmcCDVGNYyqi47gEhGi4RdUtAzMuHVvff5ov65yrFo5R3FTHRo6rKzNgD8DxCbw1Qb6eiySDNrcgmG",
  "key20": "3wzASPXibyaN3dacjPoW5YQbwn29KPAyec5L8Zvhe9nXrxMBBdNEkRV1tf3N7xYvWRMJCjtdLSNyThZRLaa8zkxz",
  "key21": "4bP47ytDF4QenZm6EL6mWVU4UacNfPwiyGdLPpR7T84Aff248nRRs1Bp4hBEARnjMB5gmoJwFsFabWV4KiBo3HUX",
  "key22": "5Awmw2CbNkTsNUgHsYr5KxD8hezW6zUPebnmqQAqmHWnvHeGMELomR3Mpd4K2RmvtJzcNVNr6o8hskSAVKPYotCf",
  "key23": "3B3FZxNMjbK5tQ3PD7w1CziGVsSXnoHzKNJPXsb4LJ9zBTu8htFrPUWLtFmV7rixF6fyUCi7eHFJiiUzhRv7ro5w",
  "key24": "arxkqntkEztgNmmW9qtCBVzMfrBHyWqppoSfcbwHBnNZx79YNHpa5ous3PMSfHLgjaJTy2WrvzmKkqZFx7LEpim",
  "key25": "4rQLZdALgndLnjE1MSwtopvRqbC6ziD368kG6SNDsXbyy8MzQPHue7jEu6EEkw4d1KJYv5Gt5S2XNMCdQoajZMT7",
  "key26": "2rZwUJkJHeN9RUf8SHcdQZxrUgkA561x2Z2C9aSVML3QXKjAiVtfSDQHuosyqSZhXdakYgzp4Ui6k8DamG35dC9Y",
  "key27": "3ouZR7c6nEcwFyoi2tM46f2TWco1HZQUvyT4vQB4SoCVMamDgU3ePCVEnVSJUr729oexfjWtbXTtJVW1SmGL1vWr",
  "key28": "33KhjD5iy2Zet5qDrQ4mkZWLHzppbDTMf46r6pm6uevTcgYcnDePEbdhn4KHk3LPzzuS95UPMMk9kujghzaDEg37",
  "key29": "5QUUs8V5w7PFN4veGSrvfyj4xcp7VWMzzEBxXwkGU3hD8LF8yX5y6wRTUzbJQmKWhDHZDitsPMh5qF5Sfa2paEbM",
  "key30": "23WaWwbU2Tdjeqqi1esbwdJuCseAhF1vVSBHhWiPsABKgsEYfZ8jvewjMNt3XvdQdRStEJ6WdqhCk1urZ1spjx3r",
  "key31": "4xU8VEPcjqsUwv372ESyfxyHNdGyPhWFpdwrQuU9pH9pZVTGd2XjGgJDfzmc1AAdLjKxRK721k594NE7DWVFcpfm",
  "key32": "38trXewL4GCPc3RBTGzSMG4RngzuzmWm69nthfacpDQ3YmifhS1HKq1X4qdycQSB8KRBeENn3ZbcEo8rY7fq3z2q",
  "key33": "5kL993HoWoykRW6QxrWrGj4d12WpjPLb3EPLSmxkpfMBbFuMME1ow2kMVnYKmtg2Raatqeu3ZaCyDm164tsazRCu",
  "key34": "48jeo8hYox6h7VxH5HUEkeTWinqCkycC5ce2eA2B2kzwyhWKtA9V9bAaL1JhZcSeKxnDYo4inQpSpXcvLa8kQ6LM",
  "key35": "3eKUZQimmLf8FNZoHYcfMf1JpP9tqng1wbmM7tHEKHZWUMyrDsDYwVpMUXsqQcpGQFcWtYXoroceUcCBB1KAWL2P",
  "key36": "5jUjdkmDbVJNd4A5jTB8fe5qUPZmRWLBVkrkNdtLKBaym41vVSLnTUo9f6JBh4mEtWtrPEnQRW6gxriNQCcKu1Jn",
  "key37": "5xCKq2MTQfrdw9RSUujBoRLqW3K3joLQPwiuz95tCSYixcfojV9BUh4S66c7sTvU1PHrmcGfgsRAM6ZqJ1A5Typa",
  "key38": "NeyCq3nVMxAeHNZ36eQSU5Sxu6ixjbYEA9nL35TUeQpJQDFEeNnWerGhcUsvPR76YrHabb8xYfbuDcc7kDJgkr8",
  "key39": "2yEKyUii5wUeWhr1AABnkUHMQkfJJqdRLxSRAc15eMAsjX9FNw4vesKQDMFCLAjifCEgvJUK2NwdQaANN7hQ5RRr"
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
