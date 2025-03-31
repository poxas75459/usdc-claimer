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
    "2RNnTBw9eFh1Yb7EgHbJZicPoJHtbwSTe63tpHRoAHHh4VjpSYqgRgNa1d1BU6Jxko4Wdyvafd9VvxxhGxMyMJqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyWiCzPW3HK23gGA159MJKjRHz8QSjD1wDHrF1mrFzmTYz4bbxY3jYtbw7QVdVHYxBJr6qHCzuYNWKzA6YTrbGg",
  "key1": "55mizDTGkChRXiUviM24MMDipNcG6hEzYrUivMA5MicCPGYMxEMwqMyTFNuknNCazFEgpmBTc1J2x8yd15nE4FWG",
  "key2": "3pFPE1R3gyz9Cktr776GvSpNVgERriChTyzVjkDmqx53AatZdsGQLvtG53ntBXJKrMy9R8NEF7EkJN6CY42BmhQE",
  "key3": "24RhMfdPZQAwN1PoXJs5i1BdRW7b31Hm9DXH3qzUfVRMJC2VTDdm3R6Dusy7aheHYS7oTgvsqqFmCgaZvv4ckRrk",
  "key4": "3BWSmXKXKfDm9uQqZ1FHXKrJwfPDXY6xveigWHGpdkt5hAhyrv99AvkpMK6YcnyYn98g19PVrWfCZjHxzzdqKU1s",
  "key5": "5izPR2T7detAHmXbkfrFKEwf3YwvehJtjkErwcPNXrg3A1QufyzN6H4iUAtr12HzVSaJ5cPob8DDHuoFqY7enJCf",
  "key6": "L15Wvr3H4FafzYRH8ET4CzVe39VtnSwvi4tUgCoDg8ZsBFnCpjVi5QYpeWwDT8kRqLb4xBZ7pTYHDziHyV7s8dm",
  "key7": "4C2rchRFJNsuvG5rpWDkLEtGqCJ6HkB4eUrPnpz7WaqjgBsBAaAXDjucMMbux3tjkEcthDSwFf1TpLMEDeMCFECg",
  "key8": "39xGQD6Rj8gcL5StVj4jnZ8GzFmSjMDfjR6YYASdw1Cc4zMmRY4CYkKVAdFW3eVJD5cQnfR9ogn6v6z85ykgQWxN",
  "key9": "448orBYHDuNPHKAsPsFjNHUDMtcy6oYcSEKmRZYYh9Nhze1pHUp6VMPdbGxJA3tG4g7Q4jfVJLWeEpVTnLtgtf2w",
  "key10": "2Q6k9nr5dEijPmQtSLA8HDUP56n2bLPt49DbNxCH6rmp4nbqDSzdSUqaEyiqFmJkYFm148aUDJHCiHqZe2yHK14F",
  "key11": "XoGHH3rzWN3qNzQtYXoakzQz9VdRQG6rHWjTeWFYtrUFB1moGo2GBh7tn2N4bL1UruhtF5HNKJ7DszuvQGhpU2v",
  "key12": "5RgZZFfLyh9ARLanAU2Ph4Ed9jJy5wrUHR5Vgjz5fCsf5kd9wbLBzhsEq2QhgfFhW45YxUkgc9QQxZ9JMqahEFfB",
  "key13": "5Ku1uqg2x8yVjKErySXrnhTW7jPzHEJB9KbMmrr5RbTGWBr8VeEC6RD5pG6WxmZcQrBDzZ8o2RqL1rdZCcheU5gq",
  "key14": "SzBKWaBQea9LtHjfmmnH9XU1APwvb2cJ22fkcgjMuMVkKYqTJpHPLM1SnVhhisU3tHfi8w5VwfbQ9pawAWZyv3k",
  "key15": "gwvzbaan3ZTUTvpBsczNg6reaFGg4BAsgW9KmURbeura3YEdP5DCzrYbmQWwaBRtDVyXy1q65geGyUGtht8DJSq",
  "key16": "hSYhiJtNYtU9Lf51du7ximtXWkwgaT3LHQfnmK5kmMGEvpf5Hh58Rh8Vz5YZEL4atprbErE6pKE3pJ1H6C9UV66",
  "key17": "2QJBKEuXoNra1pPz5aHgtgdfKTaNTHPRXSVvs6iZF3PgLtzaRwUDTUaiosr4dpvRAw9xUAHepaBWdJ2R2GBsBCrP",
  "key18": "2jdj9PHbZRLmKNqEYEtWLChtEZ6mddc3rH7otYghuiDGAwbuVMfU3TRw3NrLGnFE4qXvcKYZnwW6uCXaX21HTLZF",
  "key19": "2K3kG5B5orDfTLjh1HmT7qwdg1p4LscpoK2cQMs4VEwcR92DaxA6BeFysF59TCwZnimmdmzjHYyiE8dH5XcKxELG",
  "key20": "3oFiq6yRRDMst5aLNqEsa6QMKzHqABTS2D8FBJ2JuBDu5r8Ni1XkTBJQADbTe9wms1tPVc35jZZxFzsWHsSMfEfk",
  "key21": "ZdZ8mgBUJv7ufAGoxqvmwyiH4K89VBDyEHhuSiq3A2x4XMB73JQZLJD5jXqyKofpcnXyYwYv6oYwdRWuBtnZ5WU",
  "key22": "4QUtao2MSiKN1WTShK17r5SE6vuSC9RxWHC488sZu5UKBJK748byr2UtmxfF627it4stsNuwf7M3m8AFeCoQeHJf",
  "key23": "fccVDssUXSwMFo9ej8e3xn8JNgYug2ujSjk2sk27rr9jdPLnhGk59f4JACgqzWpEUsp42EcTrFBSLLyUWjsxhQB",
  "key24": "4hz8tTUReQnKJQ8RbEC9ZN777TiSdhoCPKeYcEBYxBTk6XiNHQ3kRX44M6CLJbVhknYhENWKDvoXPUnmeLXuQFLt",
  "key25": "2uNhA6urfYVZd7MhUTavAxmDMteEStRbYRabvvpBgZjizT7GQyQQ38hVVu3bGvbkmY73u64eYm84Z46u8mrh5rvT",
  "key26": "SLLzxHKHQwTfwzZaPvuP6FaC56XyfKc5EgfoGFv6GYS2uRXQhqK3QLzcK78f8STK1yhEVsVVVZFShQYZ2MYG7h2",
  "key27": "3LBbHBJrGGRo6cRkxQ2bGXGfdpqmUL8k3hyTKCNZ9yxxnAd4HmhfwuUJyzVWFUriRcvNiEx38dgoDpdCsJPCi9yc",
  "key28": "3P5FnNeaZfQFRRxS18TQm7WzwWET7qkJdgbbnZbSGXu8LTwv2zMbdt49weP73FXjTfVqEh53HWzi6f3oFbH6twvw",
  "key29": "5pfqLjutZEDQdLfcygyuhD14DhYBmFaNQGJr2YyPieSX6obZU7i9KhDkLYViZwDSKm2hutJCDJsUteN5sGccXayy",
  "key30": "5euddVtdvzCCYsuncX7jtDsP32LqRC76hCw5hXjHmD9ed6RybxstPbhmjaZBh2nqyeWPXxZkFtEMxx5VES3YZqyg",
  "key31": "2ocbQERcy1BwKqL2zpXU7ZapcrnpMypVzdD3nCwN8fULBrqxFXnfQgJPJeEJtkM3bajiz7KLB8x9NJEVhQecSVMi"
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
