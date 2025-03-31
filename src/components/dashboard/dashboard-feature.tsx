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
    "21jQXK7h2v8VaugnLc7obAaPrFzEMr2xjqwG9kN853DYpRw5bKnVa1txJhDziwzW74YMGs21hj9E4AdzYGdP1JcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLxVm5dtxTsF2QqZjFrTPMkLprRVbLg47kDLoFttvAucCjrPQbgiuKUP4EDpkCFQBy35LojuHUBtioyGtKQaPhm",
  "key1": "CBVaJXKYG65T7dxoaxRWZMddyjhoQRBN33G2sQNzRQpMd532ud6xXan4PnPkQeKQkBbDD8QHzNKRQBYmuebbKg3",
  "key2": "5RfnGyU5B3Y9v1JqcEKtcno3uaaJeAir53AKahTRkonuhgmZedaq8okzLHjh2zkysrMCRuJe8YVWUXyEaSgfrPQr",
  "key3": "4VccVvvnHP5QS22XSs45awXiF8ybVf4zHNk1ktuQFtr1LE96LAEhiSDPPeXEj1h629jDfpKeZtDYUQgUXE48rrLq",
  "key4": "29Qpx1J7F4PB8fzSpaaytjx4QwiWLzGmsdDvKARCXKaAvEhSAxPUgJcMyjFtF6khpjGtU8nRrCyctNyHF8EChk9y",
  "key5": "5a57343MhnYWnGDtJUcUCCdUSuLN7DphcGtHQBpkZgK7qCMo2Eu7nLDmWPTfgSJ95sawLZpCwgLHKkoc1C1SvvPH",
  "key6": "2LaXg5KQTAqfWjVZKJFeJdiHZaStuX2Xq79hZi1n6EHNjQ7vhgdpRF5hbCoVxetoFjwY5XGqQ6TKhEdcnghgHoPX",
  "key7": "4LX6pfgd13GTuXnfFFDL8mFAYmKwTGz8KcNp43L4V2Csy1AMEFCcCJgRw8rmj8qczYGwCAf91EPXzdZretNBpcys",
  "key8": "4oYRJQ8n7EaLH1T23Tu1PWX2TsGQ2ZKYpKvFdW2XCrpcF149xhWRcPCZoQem9vgAb2YQo85ArJcQFSb8fSbeUNcP",
  "key9": "3vym78RYJtfkeYNQn8iWJWEny7E6JeqnQmNxuw6oKUxYCqw34gc2nsFATRcPAxtViAeSoAfX58XDb36XjvcHV2iA",
  "key10": "2bM5gHsT7x3W82bPEBBzs3vxn5L63sxMBHCxwP4ssyCAFGGU6RSj75gejVFx9BXezxAgKLmjotEfDxNRC3JR3Y15",
  "key11": "PqcPZCSPEsTUkz44FLbnfDCM8CiKrNLzf4dgjQjKw1H7KZz7ZZtkhCeyksJQVXzF9tVAxyAS1ez9tgnLExR8y9H",
  "key12": "5x9QhDuB2YxkWfV4v3Qu1J1mgaqdEajGZouFpaoW7jU4z5PMsj4FnhAtmHP8gGufpixFKCyPu8mWRmGheSuFeTUq",
  "key13": "4uMjgUMFosFm95LkxfN8FiaSk4nNMhZTbB5m1CcbfXtye5C1WjABox48wyxL9GqhX1Eb8PNwfwPvnwRva3Kwwa1m",
  "key14": "Ku7oCrCRZ2jtyc5hzpk9a5pJYtofSiPpcBZzZM4XNuWRkAZci6tEZ2cVhXY5t2dPmmJ6rGUJLom4eXP9JFaHoGx",
  "key15": "4qjkxwBjoe2dom5bnqCke2omVNkadp9D9AAbMDQPJnps9jFSQLxN7hRhj2URXCxPrZ55mV6UhaUU9CQmJ86GDYZ4",
  "key16": "5jJTzXDdojpdscsU6toqMFrq1dESQVbY3aSKgs4RXdryR1MHJsFxSy6XYXJt5aQtSFY2QYkBBVD4xebA9QWtWm8F",
  "key17": "3CsrYyQTFnpfwQDG1hhZbC1RTh7qmtKF4iLNZe2jak4jwFK5YvMNCD8JFeek3uFiSeuzSZFrQMZZTNqKUiR2FGEX",
  "key18": "VWBDnTWAh7TeRTyTqihNnUG2mX6C15Ga1te6WcoWnoP84tubdZUkCfgDAhc6Mq3QRMJU635RJawCuLsKkqSD9yL",
  "key19": "rzE6uABs1m1GLd2RiGtngEurLcpLD8atVxifWgMY6w7uAJFKkcYiAmLNVdK6g65m3uxEmKbFLSRB41KnamntaSM",
  "key20": "RF3nxGnon2FHz2JWhCycH78YitJoN2QYedcgr6V6xAbhvrCoHadujkU3U2RDuXh4r8Cg3pCZEYUhMBH6yw5Yttd",
  "key21": "49EF4Bfkx6nofHuwXN9psf1yJki7ffBM5GDcCoaiUsLr3wVH5kAkGcBKFmcMZF7r7Pin9wSnhRfg5eE4U7jhFcwZ",
  "key22": "24XzEg2QeDmg8wyycYqCYDPbRGMosde2FBkPrHPYiMwQTyvjj6XBCGi9K9c3RA9LtQKpxvihWThJjXXQgLeKRUFB",
  "key23": "5eRUqmQJSigHtwXTMb5R9xavPai3Eb22GPr4Ypw6jAA6TDyDQbXdgA3dENNL988WNH8uACpEMfJ7rZUHSAtyMrcD",
  "key24": "512a77rKh9eseepiRBkHviqjVwvtu19qV5DKjhMztE3qYEDFf9PTK77nHoCt3vTMS7ZYVsbQdn1Z5SziHTvRLATo",
  "key25": "3jrTG45qzXjphDFUZ1w88famzTKdRKc5gjtqXQpGwEN1AKF7C6MUc8mkQpCdcm9DLjPvFCL2mPrksSQAnxmLcW2R",
  "key26": "YYzVHDMNWR8UKZBiZYJeiN9oYujwX77TQyyuYgoWrdm41M2T7zUS2t4A7yu5enEigNZ4oDKqNFToSCsr5nJQuev",
  "key27": "22PjisraTVfD1V3hHNCxYjibWgdn6ZeRtqdNVGGzCbGuzYeHtnmKsfew2K9bwh9AFK8cwbZPH3zsARdKo7Eo1A44",
  "key28": "2VWMWSFjZZ968ReD1RtpsrQMHHTHs3cytykVUX5PJhYDmAzxyqKWrxu2i9ywm43WKMevH5YRxw8S7xn1Vpi7qgQo"
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
