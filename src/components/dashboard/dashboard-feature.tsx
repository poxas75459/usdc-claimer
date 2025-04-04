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
    "QpE6dXCxLCS9Rn4QjzaFCLXnHQGqQjL97nuay4JzmTchswvxZspRG7qGyAoF5kWZrtZFY1eiPC8rzF71yiAV5f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmwjxagZsmnBM9bBctNswnQRPAuuP44tZZDuGS6xBHvfAeK1neRqxPEBEHdLLUq3kFT9tT1ff33qqAjA9zuKe9T",
  "key1": "2L9mSu3eH5x256a3m5368xMHpfwsMJ9UYXU1dAU22yCejPacp6cU97BvDrRbpGHsmvSVrxvK2wNVM4bZEW4UgJBW",
  "key2": "1ZnrnGwf1xDJhSwGGoaiCa8mNmn9XJtLo3fVLPJ32TUyQLL3ZUM3dskq3zQ7WU5gsRP6CBpVE2yRLPmKkG7T2N2",
  "key3": "3RkkJqNFNi533v6ftoP78YWf8u3LSB6TWBJAqKszF9H1cVe7YefpFeSqYweQwhU7Vm88Xmuoc3uwKZyTAdnVzGXB",
  "key4": "2He29W563rfuikXLkpsPVUmqm6tviZEq1vxXubYWt3bd22ke9KyggXfKVHKAre7Co4Zoh9BHJHariz5jvsQx4kKb",
  "key5": "KYF1f9X5ksnTRxrNYSPcpCpoe23FTRqex9F6QjS84pfRGPRJYGVASqMdfXpNdogWiVoGFnMA3bM9ASkcyhXWnjR",
  "key6": "mMn1FPS4C1hV7yVsEvHVzMk7TCjHuz677ivDFaTZU9MRovuS7BMsSvcRyREnqQ6KvWxTvvrVqNZXB59fka3Bg6q",
  "key7": "3KmvDTWZKV2pMq9WiJ2JRSSRqwS6PoVZ9SGE84CFJv3PUUzwaLUbEsV51Ezp4gkVfHYWeCo4TPatiJTqPV7GFni4",
  "key8": "5i3soPC5SXyShjTmrX5iyzoCgQbmFspjYZfP94gftsYHsNKhqY2C21dMaszJCJzcWwvLym6mnuNRmEimauVqn8KG",
  "key9": "5FBUvJ2yDt3qxQKoA8fqh3sZArur8TE2HU3z6yD3iJMG2FUsi95GvdtTyvYXY4FGkLqTS7vm8Qw3QVkWTKYopveV",
  "key10": "3C7USV9RxEKJKoz1kJCWfYDudv2ZppNwTFfaJg3V86AfArt5fRtTSyrqsRimURByCXAeNEtC6Fi6uytNf5kfc1AC",
  "key11": "3HQ6bRMZ315LD4A1r1sYSGEmsreAvmXtpB8u587cSte7qCFsJDWKsdx9oqhtrT5SyuW36LX4i3m8zcv6dvQFN1k8",
  "key12": "5h6ZaF4ERNSG6D98PcZBxV8USqS8tqkpPBvQYcj2VRS7NPyMwvyyWE4YTT7UZdbHGyZhPRKSTc7KbQkTpdyH2D6p",
  "key13": "3XNhvHy4XmtSsz6dbaQZQd1aPgfUAj838xJFGe3LCigDCvvaugYWJyQAvEUE7zt2Tu3wc7wUKUhhU1SDPdxsC7KT",
  "key14": "7T6cNuAZjD52Q63ZdWmQroU2v1JiJHzwmEsFogC1LZYREoew6N9N6pKW9fufjUGht1vXpPg4BPkEoWtsXCs3RcB",
  "key15": "3gUMwTetqiX5pD2uUXAxYAv5pbS7TBrtxp1MAPpVoW5ptkd63p8XjGDhk5aFi56EadMQqjiTD5dzf2RD4fchc8kT",
  "key16": "3z1soej8PsudTibxb46ML9qUhFKscQ9P5868MpjsZw7hy8K54tmpRfwYMCftfs6mrah6kuPpp5j45G7B283dS1RR",
  "key17": "wNMza3Afq9BQ1MfuucSFhtsegLZZKBH1r4GycNLeUavjzEPk4muDsEWBqbgdHmQdcTUxue4N4AaGMnaCFAvCkK2",
  "key18": "538Vfssx3xZYR5C7dcEUs9dmioZHB2E52GJCVZJjykdsFgyteJLvaedFcrGgXewnJVCTaCh23Dhm4Ta2gCfksJPW",
  "key19": "4LLs1bt74Dygig3CNGnn5ghizK1KrFVY62jLNij1c4py3rNxqKWC3dvtpb6gE6zVWykGB22PfSZbHe1nfx5tRqZN",
  "key20": "3geHXcDn2F4eRCYtFpJWhJQAPXMJeDALXYHAFReEfdVD5MqKSxbdeszUE98PHaVF4TkEJMDeA5heHpQmPb7RtnDE",
  "key21": "2oz3pSwuJva2o95ENnqxgdUtY6Ek96z2nMTRX5YW9qpXtPbC9tE6Y24iffcGEo49vKGoFgKCjAuFWVwUtoQ33n4t",
  "key22": "3nNoZsk8TWND68immaVsDS1bcEJR1UWQvkgQuV8fYWSSSMqUbXJB2PWoWCkoMMTiyeMh4EucpeDnGhPm6iTMakCG",
  "key23": "3Z1kznSf5XmwSaRmmbX53kgQJaHtdUBndHFscd65ZTZwfC3XRZWvH8LX4FnppREfuhfoR8j6BBXFnWx9ZyPrHCXh",
  "key24": "3zrhbGNQN93foSBkBsjtkF9oKjttNniApEXGN6bJrThqfQJs97CCFAFBNUtZbbLQATn2fT62Pj7wr45zoNTRUiSy",
  "key25": "5GTYTP2yHTSrE8xQhgQ8S6tzXsqBuPvEcer9F8YsrQM3Z4eFskZjBWQqv3JVMyYuJtxHJTsfgWe1osof74b6qUCh",
  "key26": "3McFbrboRVXVUGcFoQhDRSebYVQL4nzRFiYAszkN3wXLwsFxdV4FrS1gLW7HsiLAhYLqvyFRHXnsHsHfzxHU9txu",
  "key27": "3RCMEuoABwmusBxdVoQ41ZaY9bmSVStAhbiJmNaAxayLZMK6PnVWMXouMbXEAK9bQEKCwgY4BG7PTcEvtGUuWXbS"
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
