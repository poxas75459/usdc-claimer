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
    "RhMKU4g6FgSPJFq28sMknTh23HpeSgYt9Q5Jv3f6jiwXVgtFDhAd6t8LVcZHcYFMCgTgitVGiVB3Lka8WoQCtpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BUWmAexBTCH7Aei4dyEDAeQX1Ak4BQD1VabVjKDszQP98AiG6TrJNJSddwz3sQndan9sVuw3645e3M9S4a2oNQ",
  "key1": "4jbpJjdmZkPbTiinimDnbUnSUCz2WZcM85AJWDHAo36PJpBtCdmhKykCj42PEt8vaUAHctjWpq9pUeAsWue9Dv2r",
  "key2": "4D7jcYyiXvd5kEYauKAwtRc4WY4FCZxD5VcjLzTJ9VxrgJuZu5JZUmeZUgy3geqVSAbVKKhsz4UXaNDC1wgBau5u",
  "key3": "2KHtJ8qwJ2jd1d3bnkRX1p8YrGso7u19QJ6WdBKJR3MBwbHbXHqfSKqPYyV4uVctimMuJ2AmEhyYLxgbXJnfkVg2",
  "key4": "37Ug8fvdGGCZHY3ewjQgZYpH7jjvfYmXhMjUyY1J4eEr6nqLuhbLn5u9ayLn28TjSphXBUikn7MLTFvqKfr3LKWY",
  "key5": "5ZBRBz6AEW7d4JE2b8LoeCHCbSyoiTETKuC1D3yErMeK1YHW7X1Xo5aR2AbR7hkKuELeFbg9tGWqs39WvPMErSFQ",
  "key6": "2TvbktqPNvGRgou5kaSQkd5pYiEk95PMRgPDwQugW4YhVJX1axX9Pp45jLXzDmKeNzAAcQEF2jZ2TCNBXL3FK9Nh",
  "key7": "4QxgnXG55DUdDLorqjQLNJU3vVJpujnsbX34nDqreXWbMzFQmQKAT2LnpkFZzzVcDTfzJxiCxRzhoTMTpYT9yCc4",
  "key8": "2JQVjMvdurbVFdYSMNgfJdLCZgrDaiAeECxmfRq1o5dKCgLdbnqW7FCM8uCXbekAyHZjrwTzJi6m1cHssa3Gfi68",
  "key9": "gtJNyywR8q1Ltr2Cwmbi46VJuCibFsQDG3iNsjY9SYaRxM5xZDeKtCGsSbDPHYwCcKwkpUgopDuXMGwHbojWZYA",
  "key10": "yd43zPDorV26EUMFPdKoua97CMQpscMsCoabZf9jU7DcoKUnELnBEEqQQ6WmWr51VshRjRtyjYgkhSCtgZ28whs",
  "key11": "hNfzyQ9aZ9fFJY3LcPpHPradNf5W9ikuhmJ12ScmWLECYX73Xc3tvA1WjAvF74YSbEN7oy1tmoxXRRrRrELN5Br",
  "key12": "4ewTqZVqxqSaboa4E7ZBfY31h9tBNaUxUi1zGHRALoT4JDeEE7qZr43RRs5FJZ4BYVy317NTWeGstn131okgLaUS",
  "key13": "42r3b4kEGgTTZU1K8WuHqB3QGFciL4jMrRCfVUdap3sRuEbQhn8YPaphVhkQvCSAfJeGj3jWezjyoBk5dKSuXtbu",
  "key14": "31tBDo7nVtE9WjHotL7N2rDggXVuPkJyt3XTX5GcBK1XzCKf3DgRxfjFApj8eYDjYJYhfX38oHBG8DsWruCNJdzo",
  "key15": "hTkmQfU9xNiKYcXBSZhpFPdZp626TFkmZ8Yeztgm6M4rrrHJbongYmoDqbmLcxaH67qAHdmcKoucL2MyAwuC4Bv",
  "key16": "34EmnTvVowLKqjtDKPVgdNk58iUTw2HA5m2LF1k1yRArDt1yAeobXe8eE3t9Vo1rFB6wrmFTct2iE9mQvHsuBycC",
  "key17": "3wdKUfXbrAS66KogiLnQsm7JJ85qLBgu9rwYjwNs9Fv9iaC9i7YyiavLVHozQUrFWiyxhzz4PcVazDtTzQnNoEeK",
  "key18": "33Q84vAXMDiBjZBMsgWBRAZtV4xpZNLHFVz2JSD7DgypYnEFkgSnaeDurf8CfyqXGYSUcV63xUgmkko5kFtfF4Lk",
  "key19": "3AGyJxsYA9jZn8vxGybgqaN7AzkgAkhBkXJ7XapVSBvemhEqFy9UMB2Cp3AUG7E9drtmAje14jem6XymsDwouhsM",
  "key20": "4FdY9fRjEJCzVuB1vMtSNgHRnhmagBJNGuxeNBtnF69cKyAZFpn8RQcNT71iwgcnirZ6Fcf9JEUCyVGUKiFnnPDJ",
  "key21": "46bfjyXgwCMqm8hYDh4UjiyDu8cTEdMR2k4CNJ3bYgCDSZcXTtTVEbF9eTah9XGWqQEAs48Mm7bK6dRsQH7jM7E4",
  "key22": "21ppsQKtzjPZtzuH1ukkvq1wfn6c292YGCuYtpCRxa6fh3zP4y8QCenm75Mw4BanrrhbYFZzCFU1352Kb5ra6hAb",
  "key23": "31c1LrrymYrxctM1fcu7mH7VWGAa2yvez7Dynf5FNToPAnjV4FZt8unQU9WvLz3kqvsKgAeEyUCXHgF1WD6kizYx",
  "key24": "38d3a6NSkLY4fKnVsqcSewpEHsXaM6SnnRL8HcJSXgn4dpRnk9UgEUBpZwi5MWY4rZypWgtG89mqTFzBEVEJYChd",
  "key25": "4bbr4VruoD3VcNRD3s7qVc9Qk9UFqHWjHo88JMr6nzWsaXVjkNQnf1t8B3NkJzzC6Gz2Yjqq55jqREUEBoAs3MMi",
  "key26": "5DZQgKUzQXnK4WM6Qn1PgfD6YTbji6YQWu4LptdDeJF9tyV5taawxsxsfRCvYz8tELQS7RL47Ux3t94yBhG36NSL",
  "key27": "5cYym8j7CUs2xstyRw9WsQMvFLnLkCJyS8tGFiLcXpVWE9D32UJBJDXRmjjHGaWY2w98peHGfQgb5FC2KZZYGsjY",
  "key28": "2YTEZrwWaemxpBRPjrK6xUXpqNsGpRh2d8mFGdXKfxZZuVDEwiELi5fAGVV74xjY5b2oZzmDbeD172rum7iW51ie",
  "key29": "4wBYPXZTAsxgdg4K9mk65vGYvjF9PUBFNHH3khxsviKc6fFEfMW7tuaZU5DA1grJfbFfg1TvhtvQYHPnjKjYumZs",
  "key30": "3pDwFYMbHvvF9P2z6xEd2nAMYdssmMfMn3UnRtYeaTiqwZ8LdCkQuyHwtBhJgxY4MWHNTWecBNQFK2n3dUbduG4X",
  "key31": "5ixU1vMauLyo1hWcmodMKL8zgU7JKeGphiZUov5R6iUWKoGwRS1fGUs34RS9HmFqFZp3tGsLWFwbwkXvK3kpeimH",
  "key32": "4fRCif9ihcUbW2huneg5J9QJ29DsQUmgaHjST9kFUCGt8UrptEcRwQzZ1yPfxAhKDBKWmd7XuBFfkz8Nvats83uB",
  "key33": "3wRmokh74AHLJZPGxwn3v38GccL292txsUXBfgZnjJQyZCeHfGxwEHUYvk782MrJVv6me1EN45XDf9Q7X7NBbUbE",
  "key34": "mCNzdx63X7XgonDGJy98cmxr7fF8j4UuvtBw4PjG4eoedz88dwmQhvncooakFYCVtVTa6NELG6ppMynoAfv7Xzz",
  "key35": "4VxyP1jCpbzyacV1UcabmPsaMCiRUFmBJkDbLVpdhJoAEEHdfEE82jLiZ1b7z188eUZkrWAViaFmtCkqoyJWMmDy"
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
