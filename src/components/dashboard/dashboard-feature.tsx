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
    "5piK2Q7QpepnXAAmGit2vTBzJsV9mrbdzScd4fyLaPoqkMG8rxQjuAej5pFHbAgjqz2D7BfVz3F6GN3ECgL1uVGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVbtpu55ztAo7rsWj6iTQFuGKLQf6Lc12eqf2Z3KhqCY9H7J1hcTjPongv9Rkwy87PNob3GehJDxPDkAxr6o1PV",
  "key1": "7pXvLJ9bKSgPRuf3j8nFoPUTi7JsSXP6njSkC3813x1VHkYxHwWq2fVZef1doetk7DRnf8cGM7aCuhhRVSRA2B2",
  "key2": "2iFQcs19r5eTi3HzWEuZpAEsku14uJSh6VWuAmffB782LG1D6qPkrEV1MCdxj7zsi3gxY3PoX5b3LzzvKMoDgAzo",
  "key3": "4LMxUMZif44mUfpURQ3VqJt91k8snixW2ZHGZ9pKZjexUST72ih83WnG6qjaoEoMhBRbTWGR899BfqtynNqaXuq3",
  "key4": "4thyjJs8yk7vrAP5nSD814SLR2Cke2CspbLBbp5BUvhHr3DUwXDwpLM3ydHZDmvS7TDrEk91amdmPYUNczL9Q3rf",
  "key5": "EapjrMPkbqzovDeXNhCCUehfPStqdqHdQGjtCFVTgFpPGXyPtDKN17gUWm5q31jY3wQXdMi8XD7C4T5mxRCR1MJ",
  "key6": "5QasAGgGYgb1c9gqtvSz6Ya5hAAz7MpwQJTBoTu1ksZNgRWbfToKEX6YqDF8WYyAPF94fMon23yTrtgbR9iS6NME",
  "key7": "4RvZRDqbUd6UChu1iwQgQdSf2SDPxusE4QgXaE59NwFC3aajeoF1ggKymU9ucKmtmY85eMUiRWNS4MYowuVLnXFG",
  "key8": "2Utex5WEoJcW3vseb59revG2horqHz1qCNmXesHzEXuGifSfTPwKMvMzHJWGWq8fL2DPZcJiEtHWvSrpzjzpmNWK",
  "key9": "292eET7q2WdjxD6gDhuxzKWtUdi8km8Az8VZvmZAQzsJgY5H39BgY2tKoJGqMVsw7HztyLUkRdJ149Y6BM1p2wy8",
  "key10": "5iHMpfJ9eMyZSgHj4X8XFgrxRXVgeZWqwZcqFpARGYAN15oChwwA9K9gQfx4B7nBtrop1Q6rHP5YGpZiMZ8RDGGQ",
  "key11": "RRxLbzgraQvxjcVFDwJLd9UjxsLqHGonsmX9EiCPZunD9nWRnKcVapqj3Gx1LZPP1zxiw29cPmz4rXDwKE464f9",
  "key12": "2NDEFbZMs2hHvKYYk3dZE7NEv7ETw69UYqCX7sZuEoBzeW4geG7UnaqcYqiu7uECWQ9TP7DyhQX1gLeRqXUgwt9Y",
  "key13": "4M5P2xY6yWpbMis2ucczXcPz6bR9ouUTw2mAgPAmB15xcKtVJoGaK7oBQUkBeaSrc4Ro87qkHvsvYpZ9cUXNQcTX",
  "key14": "2NPJ8NibnoKpMw8QCArVuBN7NFDxVTPZwSMAj3zdUVW4qnuGsJpMw1V3rPNjBos2LQTx2XKM6BGDRvVigjfMWZnU",
  "key15": "5hckqzAtUWgQsVaCCdXbjpPMdiQjJtT5Z2ZbTYCUryUNbGFtATTRfzFiKtZoR4s2EhqczoaQbMtycG7yMHtP2q5M",
  "key16": "SuiMZCSq41Q4LzACbTNV3Wjai49wKgXYoZLy3p6oa2wFoeGpyJ8ksW3J8ARs4FYrhWL2UkGYuPG2CTqMKZaCbws",
  "key17": "5tNztZpcEsgGtUx8rKKNioRNrr97pmJeWh4p8euxETn79NxdgH4Z9sC3MwJgWGujtfQ4Wrx9HwvVTKm9gvXBmKr",
  "key18": "2v8E1xh3fYrBk1fGpHcFJ8cHQmdq1UWYS7DQ1fpWtpS53BkKUPEW6XGKbamZiXQfaZzDRhEAPaDzZe61e5WxXKkE",
  "key19": "44GZ8qFTGmd6drzLMmpYhuxzC5PGTnYyCGqFyoHZh4Sa9pjRDKggFHjh7BSC2AeaE7dJXz2mSXUyFZBin1Zppzui",
  "key20": "29ccnuYAfytQR3iAPU61xigQKzf5UtwYa5KHGcegBvFkMHcCqzU2EXCaqnMnZXhV4hcZUt3jPHd8miUEjxHKhRwx",
  "key21": "5LShZMJBLEmErfRp352kpDts1Ucscxv9YEVP4AmtrEVP5drtNdRjegr9dfTZbYA9s9qopC727szXLQhcQg3A8bcY",
  "key22": "3x6VJgnRorxbDHvUWB4Xz4x1A1ihxzszPzbFohUX5P6zEriQPxbgbPQ1hCaSGdTyDMPpakoiG93j4vPeLRjuGFVY",
  "key23": "5ozmMPqUQBZ6anN64DndbLS3DtAWcJaLcfj9myVZujmgFgoeEzZoN9LeSMCzyAzyEkh319S2yEJgjUtDRJAGGoZT",
  "key24": "2RqyhCQADF1BByq39FdtYCYHQ5fYunXsJ5b6B6XKUcmMeyRF59rM4EprcCo7bPb8w6HFCvKrmvm2a5jrcL7uXka4",
  "key25": "3EabUtupRMNRPFsX1cvudiMVprNiaLCJBbpJJZy6TpoaSYGLrGYeqVs4GKNJisqF3vEzFViMALgKEjXYGqhwYauR",
  "key26": "5qHsezunnQn4xqbGDpWoT4raM9Gga4E5RXydxxZ72J5EU4rt2sThU13QN9AyRkBJgriqULEvsD3CvX8EeGdPS8gw",
  "key27": "2fKwuu82BuEQrYivpUL54q25CPMDjqKp6jDgYpKhYdoCdCYHKVmhf7dhrEFf81fVUt9zTz8KakvctD6ATqZTqgwm",
  "key28": "43PZ2Sy6CB15GrM2r1ge8zGHUqHHdD4S4ufQAucpHV5M52TdhrCGreJe2F4tVuj7ZxcsmMGzKzNsPu9xgw3Vn1QS",
  "key29": "51wBcn3262Ti9toJh6DqsPpMLjnDpqJmWPA2rc5XnhqUue2uX93LFirUE65ayEoQXf5UyKcN8qokAubyzYaQhY55",
  "key30": "4tnaxACMgYF5adPh7jZYxyR3v2U7jUKEozC7D7J53sMUWiPdqTAiDXZoH3hLiJ8BEdHLxBWKyDiaugBdwxKLgkFY",
  "key31": "4XcFnAA6SDiroBKhQABRkXH5LDxhedNL62dD2znhWjRhDAnUh1qmzwSftHz9UPmBQyAAhugDT6NqQ8QZWYvbyN1i",
  "key32": "41cRQzhLt86zntWNXXJ3H4QWzpoDUEGp5ybzDRG23uzSbBB8U4hKt6SjVWGjU7RKhpALq5Ft7nSethxRVL1uUqjz",
  "key33": "31fmBW4AGa7krCFyB9j7c8pbYAPa756BGAuaSZc6oSsu6zJG8jnt73nP2Zb1G3wTgU2QBTnZybvAUVotTepEY7QQ"
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
