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
    "4vsGyVjk9E3kTNe9TRgKpufSQdXJU7TGYXfJejAvkrbeZyu7uH8o7wqH2NbtPjFNHBRB7hv6m2eJN3qh73u4Lxvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whLkX5XUAW1sj8mUAZJvUjegTSJCGQcRG7G2qKq2VbhWWVDoHCcE4iEcfDULB777qjwjeFFYbTrBpRMqPWwNbBu",
  "key1": "H3augC8mLxSCEPajibTbsucj2TjcziggTCWwSXiuCgLsyDji4iB924JvTTfjGwwUqr4Z64V9ZG3PScByFv28Hos",
  "key2": "3As167XJw5BsDxCxcWRPx7ox4xhEdTA5EFj8EL1zfydSXYZcMWypeH8wqA7QYmvqUYdFC6zX2yBwcDWgxwYLUPx5",
  "key3": "5uBTuytPb2C2ekJArgy9nXRreYXS4MNPCUdmvpACyy8b6ZAHETqRY25sEbsCS5psB6iRDrEC8ZPXLuwMzHLZ5VkQ",
  "key4": "RoSXxxHrpBrNiPDAYB8Kg14qgdPzBCucxcxgjwTaAdA8eM78MtcDq6jGgLjqXJ28nHA3Wm5MFPTzs6XDm11gYxa",
  "key5": "5FT47LVXn2AEaygv57fHt8XXa1CX7R9V8krHWXJmWEaLozop8fMs45efo6rxf2MHuqU3Hv28BLXQfVQ21Tfbhprz",
  "key6": "5tsXvBqMFZ6QdXgPuiUSyz5yucwZQnSZQmpUmqHaZ9Y4eLXjJdLN4sa3YoyAY9x5rQXzWkGsrkwZ1rgfDd8BhpMn",
  "key7": "3UErhTkX4ULayNiMECTsrBncMi8tLG6GAF5dezkKQJn9sgf3ymFKEfo5u2okqr3UDS3BYG6JRo9itQm45JzSeybS",
  "key8": "2intMrb98VBfiiPuT3ZLQBhJWanaNBUUk1iTco2WD8YTm9ZioaSw5jbtqWahnimMHAXNuPMFkGqaBKZqtbu8z7po",
  "key9": "5d7yq48FmN2K47xt2owTtLgY9HPmPzhfvdbRmEKXgLNfFw89YEXuGRy9qyfQ9wR2fWwJxDZbLbFgSdufFw6xsgR1",
  "key10": "5AN5HRSGu9isH6uXg6gSCndcu25nFTAFnZYxrCC38h47A8cR46WJyHUx3ymjmWmqh5jMaSKWidrvcCuZwicALZt1",
  "key11": "4Gc4iSAHfaMmjwSiCdwMPcoKwvaCNPAwRKxTFzc3XsRAsMQ197adVTMiLKrLmFsH3msstX3edkcZ6U9Ha7HmMrSf",
  "key12": "3pnyPiRp2YnCXPjHesWhWdHva5jwxjiZVS5irgvvpnwc1PF3qAGjD5ddyjmpxemvHHbryhn5WmbgZk8RmAjGKmdG",
  "key13": "5qUL9CguGZ4Qpqw2YsDqjq6EJPHNhJNueBchqxuTEEQSGQDDdaJPbLC6zc2uUTehTB1Wxs2sUUZ7MY7BKhnTnwc1",
  "key14": "RRRaW3JHMHaKpE1Tb9SzmV45iVRFozezpivxgUVBYKTR6ns1QUQj52MwsCvALw5oFXmDBKSPSMzoTyQqxW8u9FP",
  "key15": "3c1Y8ThPgWMY6RPqjSqjQ5PBJeKtBkCq7Z9vCD9RymucS2yv8tAK9ZKpuL4G4WbxLw4p9FYmYM7nWghUC9Rtpbf",
  "key16": "5bKsWMKib4QHDRt4HxnKiLesCq8cNjBHm9BZjmt3ncFRGVyDmKzzXBM3y2d9zgevfdqdMrbu2qiahjM9YYq2iXyc",
  "key17": "Xs9cdZ5NAkQmhtG8vYDErmypxkcLFzDEVfk2j9qbP5Hqyb9JY9tcfVCbT34hKBUDwpAoZnxqVFBdkDx97GzgF3h",
  "key18": "45E8JiaK3pdCoSzDguk958QZBZQQBMZCqi2WYe7usYbtgsjj6dSjM44aGXVWdWuad7CAudBpaaSueGEQjPxtKRdE",
  "key19": "RJoC7WmGhL3Ke2UjTPUMYYx2bzvWDtDwKtzUfeE874bb7QFronv1mn1pSt2r4Pbam6iFGxeMNnkM5Mnf4KUXSuU",
  "key20": "5kZSaNGMg5hGi3mFqtmASq5mXFv7Adz4QMK79xYCfwSd394vEWAK5RG2p7WgNQ96q4Te3KFKYCsxbbWvbRCryzbC",
  "key21": "gQ4Guein3H38tBW8DpqrteJn5uG9ThKRcZi1fXnC2tCKnD97AFMXioLKMPpukQ4gZAXeVnP4JT7N4dqEqWPoogY",
  "key22": "27H9sMHybSBQgtVqjpRDHiPtMR25xRVQFAs5CaBQV6FwecRnipDRaqGf7pU2BCCqPeHBP9yaSZgkfiw1HBEVHgr5",
  "key23": "2K5Zdi4rcsdPYZPFbETajG6vdN4VVm3keHSFwcB1Vt9uyepfLCFAbonD8oTBfXfq6wbBVBdRmz4Cmc9W9KEBDKac",
  "key24": "2r2RAizvMzqufeWHruQaevKscfJnmQATWpRnNwS7dGNP7wswpS2T9srTwJednSdkbKqgCTbY9VwUiY3YozxxYGpH",
  "key25": "g9Dgw1KzyLyx4vayBgBtWECmF8ymCCfa35HaX5N3Yr9NEMVnbhQZhpaWHRRmfVsZb5z2JkaVExPYHtG1YWjgUpg",
  "key26": "4xGbMeiBJcQznxy27bTSkGa7NSAeu7ASYm9KfCqw3tqS1sEKkzgscMwPCvzgCeErFCGc45MmEirQLytotDz4agnS",
  "key27": "5RCyCfhtKC2Bo78nEWdTrj5ALo66t649CewsNtdwn15bBZbzqdKTmWnDutcwtxGhG4BsXV6rVpcFTs7Q7Yadd8a7",
  "key28": "bKiCiBaavzn7wcwHuGX1HkvAvvjsQEyeGSNPJkvZqm4SxPi9KEAPZrwLinDd9dYWPnuvL7mL79hkw9B8scc3Fj3",
  "key29": "2dEtt84cy4x1U6J5nYHLTpSzbX6VjMCUBUH583yf4vFUX5cNKvgwkWVR7rratTVk7gWKxPiR2cJtjNKdnD88FABw",
  "key30": "2hFbQQn4hfy8QjHu3CMorbRVM75CH9U9aDvyBY3SZ5nz3qfVNP167v6KhRAVCEHYfYLTeERaAstAA8NomuJmebkH",
  "key31": "M99UUJtvUCgpaBZuxgYi21sQACFFpQW6rmGqRU1i1qdJapo3DxLBjDDMtQbeNihJFb1b3H8EBC63b1Quj5Ug6zf",
  "key32": "v2UeekiAsxgFBkA8Mf6L8yZBdCDquJwPagnkVCPHGb9i7dmNfTcZJs4q6HecYJP29E1d8fHJ4JxbsfJpVLVhmDy",
  "key33": "51FeHqFiCWYj7PraDttPoumZ3izoEfMX5ZoZtxPf9Hs1MSgEhhinGoR7DGfX15sg7HroBoY3Ch7GR2yxfzv8BQ9E",
  "key34": "5zC5h2eRYYZaHuxFC7zAUQsKyzEGh3nY5FyN6T2WG8VVE9hJ8SSGUZCYJUyNwLefW77CVtZn5PH9cE8jtiogBM7q",
  "key35": "ichz98ezEqmBaQfFJb5ATgEQUuxCwdpdyDtpRYuwUMCgJ3cg4KoR1DkFc4VtLza2v7UdpCYeLywjeeZN8Acm666",
  "key36": "TNbtb4WyvmaqMLbScmH7vzAXZQoyYtWu84aC9x6J7m8H7bzghb8Gm3rCgje6gfpiNtirGHpwsmgcxRHtsgXCH9A",
  "key37": "23wt9ChKu3RA8cAVwrES6VQGnDuSkcubY3159n9i94vBJ9x5FTDfXmuEbuc1GTSBBvnLNm2bWsRjwFiUQjqzE56w",
  "key38": "Qu1uCSL9PBWTMmxXLpGUEGG5JH2NqYAZ8CsnbWT9YTUGgPDvKcAXqgVztardjs4F6dSMhEkGdJNh4qc6hxU85H2",
  "key39": "5z6r3uT6T7FhAXfHpg6jFGKoHsV4UiEbN5rv8PBsNw4m1TTNZ7tRA7pK9RrbVuRdhWeYbEnKyCxQY5toJt5wjm25",
  "key40": "4aVNBQVmLvoMo3DMfkUrcHEqsLgandsgXUdwH3VdKdWwyXkT9ABTGv8SRgCuzRowNfU4swENXwZsELEm58VaZ3qd",
  "key41": "5ASwYspmjozBhjB4mVfd4ziifjXpNxHXwwyAwxYvtHmKcaREGE7mBFgDrkCn4Ux7mbSLSeuXfXpaFiJV9ku8bCHz",
  "key42": "2j8HzqE5GcMWVgEBRMScPbGnmiyZFVVFi9uSLass1RDaUUYBRkvQWnRBxd2ddTXZdxH9orUVzHUhaBvfnRgGoYeb",
  "key43": "HKHLPty1wEEEixyZx2UXYKWBa56ubQVucKpw8q5eWcaWqifRXEYZ68Dw2jNfYSJtPY3vza1i5cgy339SSzA6ryq"
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
