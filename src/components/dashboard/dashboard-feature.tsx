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
    "2ZujcESBat5o4p7sxDsp27dHTiRaDPfachefMQhEoVvnGkZEmBd21GaVVBWNLXEBahEVk6gby2fhQ5Be93o5E7MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbjDdiTuJjG2pKoKGf1P4F8vgDTN1Xr3HwJvjVRcw9vQWm58ahF9UrGvxuNRtDRrycQHs1BdZpJF8o8ZmyvT5Z1",
  "key1": "3ypGD2uj5VBJF2mWcdcXcVZqRMFnYvogNSugc9t7wRBE7sBvmxMs4sMaJ6zeNBDrkrMwahecKtVHpjLhoxrpJymC",
  "key2": "TE6ZzNY4XrDFcrSqLkwD64W71Fmq9XVcrEg82YCFGLkGDMqBSKeB1JUTKLF24F3NqxFBXWvKxLzuRUfuPDhmxnm",
  "key3": "4g3zv91UBV3j6BZ3EdQTNbRmNUE4GCqcCGaxrKQa4g6oEc9NeRy2c5AWADzbFHgEsMcJ7fUEVWpsnrb1w5h5YNoD",
  "key4": "3Hq6bjSRxVvpaQqmhLX7T8ZKhtXnYxxZCPFz2oshLoF2fSuhJbCgXwXifqxEJTMY5vXzqgdZjAyMbJxv6aJzSP9P",
  "key5": "3MfSyRJjdB4ddV6cemanJX5ko7b9AksLWtCptnVVbkLAUXe173a7cwvR9ZqwsHro8K9v2aMG9GiEBJWdXmuSgAE2",
  "key6": "4yh4Eo8YvssgoMYbKSpPtAFVYtoA4N2szYGXCMuKGgT2WvXvQ4dehaZvbg9yszFzt1PQX1rpp1pTfxoPiYYAh1Nc",
  "key7": "65c9hsd4DbffJkqRDPHhpibzcCW1Jjocts9xTehK2aXfveDsqdKgMZBQ9h3cTfdtCRyxB1oszCmGyLUvRddXjKtE",
  "key8": "xv4cjd51hGWYkpoMcVhvh7CyoUqsxxwrWHPacMYxmHTdHUExkCETkmc1gF5Tka3p7yiNB92TXMcMJVj4VaMu8jW",
  "key9": "3ofFrasGBfn4Db7yHULNkKDDbNZpphZgtWNBHaXdSARnfJru3Aic5S5VTA3GeXxR71X5eU3KHqfC4GetbjcegP56",
  "key10": "2SG2ThYoJzNj8KNhuXtcxjEchRLLpDaVeUL9SV5FpMZ6yyEC8jshqt38AbjiDqUJLcUXDrom4ntWjbhDW5am3DXT",
  "key11": "5cGpvkSeqZseZjMWNfaNUAAcNcBmzFhu1XLXWWKN5xpnbbPMUJ6U6822gaMjka92pQeMoUvuyTvzwVob4hxh73yT",
  "key12": "3GEWwzdNuYYnTpjYcWWoHfHkaThXur9Nprs6Yv3PKBugsw5E9DsNcoBvdfacfGZf6VxPRquk18ZV3uwuaUtfi1mu",
  "key13": "3cNQ93JELk2CvMfgc26BA9YzDxhRPsvtMKnV7MwmAkYPgNj6TrisUQgXKXF6DzuFHvwrgRebCDJ9k53uxhwLhq4B",
  "key14": "4VQGKsDheDF7WX4vZshHAmAZrYb192BTXEtKLJXfaPPQTk5bctSKWdNg9vhk3EtEaDiNSfa4sxNGudH71zVZ5k89",
  "key15": "4RgaqBGjKAYM5zQxsGH6UQSfjbgTb1hzPbptgu9WuDr3Wuc1wXZFt9Yyc2zHtTWA8ezipSZ4puuc8ddfAoQbag8j",
  "key16": "MqfMXGre7gruZc4djiSMdQYMz1MetyUebd16z6JGns58Hog2r6JwYV9kGMZL6B9mg8Jw5povgemCpAmUWnh3GLb",
  "key17": "28aMkwr3bTYbsSanDW8W1EEiWLesrrmrL7KX3SD1Zsa3ETkEFRgQUcJzcQTKN16xk8URC6Nof9FwUkTSinpMjU5x",
  "key18": "5mpkGVCzeTyT1vWJbPMpxE28yriyrRe98Hrz9496mdW7bRPF8K3orsiVLP2ouxeUnrMm3Mub79d476LsAiDhne4M",
  "key19": "6j9uZJxQDiGFtDRSQrkYrYC5AhRgXDPRdVcm8EtawxuuoaijEu5vaG12WkHgs12YHANDZzKrxGMpn1fmwiSX9xm",
  "key20": "648L2obrwB3MdDuyWQpLmdayDS87xvusZi71gXw74AH1qgDRUKoKMGc6A9as4t8z1fqB9kL24fC9DBeUgGQficd7",
  "key21": "4bqQVXrn7LwhQtV6f2xqYadg3bNvR8s7ofCLE1zTLz6xVNV4RrZTfBv2GkENRx23kxnCEUNgsGaB9AXZ3GE9yJkL",
  "key22": "2eq4VqdnbssrRDatVLN9B5skP29HFdg4Xw69diaa36D15ApsSzX7o3ZVPv5Uw3WLsdE885f2hQVzYg9hAgQNHchy",
  "key23": "4HPq1MXpw7fZvf9RM25riupjMhJHbnJDkF8u43B9puiPsBUy7TMq4L3V8U4vLokVwmyeCzxWU9HfgMWdr7eKzRmG",
  "key24": "3GwSfvKAZ3a3GkWejwUGYNkyg9AUfvRM4Dw8odP5r3DiHnuKDgUcN2v89JJAYT5sGewVkkHiCUu2ZR29putQ2eM8",
  "key25": "2N491Eha3wzBqN2nndeegQSRtWRgynzYekhxgVufgBfTYoANBcwbdZRVd9hnU5xBhzsDnpXhbezKvt7s8kcCQpUL",
  "key26": "2cESufGXpwSN9b19zszsqapkCdD5JxVbGuANpgmAbotpRPdaQAQP4EvHNYUn3Q46BcUo8EFcrbBxorMV9H2q6eg6"
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
