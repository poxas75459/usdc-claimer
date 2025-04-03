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
    "59Nn4Nz6tWmBSSyidhDmn2JZEMWBPFEq1y9XtitncFAWHpRxf2xNAd2QC6znECf12dyBmLWo3wfigfGW4NJ5Bm5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kcjwExVpNL8NuEg2ockr56AX6PNcaw8kGW427AAQ7F8xTEaXC9YiZztHzQkyTN8fzoGRjdrYoaqB9gq7XxW5x1p",
  "key1": "3bqmftqkMQp1YcLLWd1YPkRZHc8icezYYxDbX8BXLS1tR412dFAvBofXz2MhivPiGiko7DJ4fL7EKTMPmuHXXfB4",
  "key2": "52hT17E65TS23d17dtcLLf662UxLnzrbtzqweenEQCuc8THNMkFJ3Qx2q4p5PEq2mT7yVGK1YorzEfevx8Yu3jrv",
  "key3": "5EcNpPMRp6UAdeqbF6jNmrvetDxZCjDi7q4HVxfVAWmz3jAJx4iE32d9WZKJqxyHJCZ2drW9BiArT7R6U6g6DEhm",
  "key4": "5wkDBRRU2udFoNUTadQ46mgarFxN5gSLJRXUJwNTsLBx2aT6MCK7JJjmgugQW5RY5wBsgFLYF6pfBTetCzrmWyiw",
  "key5": "2GcPBprKRpNvVsb3Ghf3n28GmczqnApQBTNC9kogUyyDAPBtCvqUexYks9yevAMhFxNSn9tBZ8EY3CsgCPZET6Dv",
  "key6": "2EmZCHA6ptUSwrCqPgxRyqxNdEWSyjSrXjARBKPezKQgmTKhAFzorsdSPDErim5SS8rXVYL3PK2rHSLZoHU3yxN1",
  "key7": "F2mV6iGShDrsA9S5graaKsvzSyB2X2Mo3qUBYhz3EisNU44GaHzUbx8B9xYYZRyAX8g8JmVQV4pdatA7Jybgii9",
  "key8": "44M6M8BuUeTCjAJhQzVE6kXXxcG1oq3U3ddBnWtZ8kns1UJyVeJnXZcZpFdpMgC4YDh5XTYMHeSN4iJ9AzYYDSCF",
  "key9": "JoVGsNXSj3WrWZkFc4Wuub5zUAK29u6zPAxgLwrT8E9NqTFfnaWoyMwWfULT4i9NL6zD9YxdcugZ6S9SHLDkZ3T",
  "key10": "2Nyt56aENeDh35evwCaxQip46xyst3yjGMCMP4U8SYgsHQcAYuYxtVSRPB8hwjTezVAZXqMKnnaYP4PyMwe68ZeX",
  "key11": "2VuHfofZE19UZ73P9gnARHorcebsutotzikDsetV1zVmgyC2CNt7Wf9pfWwTvu1CyZAEZM1Fb1jXCmbMPzwu15br",
  "key12": "5zoyMbSVNPdfvzr3TUUyh1taNVDC72S7KbbVCEA2v9HdqcbyqcksPWHnardFfgAQAUmcx1KJruWowyERANt487jo",
  "key13": "42ZEMs3zjxnNZpJ5wyqtNMnVBGJLV2y49FKXqQkHmwM714qzv7VxyNdwjAqfX4QUHAYHQLtiZiC2b7UaozWqtYVn",
  "key14": "2txS3GwKzWkUa1ddxXY1DLCGMeVV2qAgrfbgr5Mapuh1uqo2fJ1neceebmJB2jB6vnbkfxxLSFyDBHsx3nu8s6PS",
  "key15": "4nTbCAYf7ierX8trxvC3rof21CVJdH7tk7TGevhzQTbz3CQKJG8qk5Amxp8MpaGNeEqK9gD7LWV7qEctQGBKYyWP",
  "key16": "4RwUkDKJXkNSkdVVDUgH1cDP5MAm8opUZ9HxyP592yA9YpePZjwt84C7RHFJJLYYpSVL1Le1z9p26MvfBMiymhiZ",
  "key17": "3ebp6Z5iZM5hFXTZr8eS43tyZQ7JnCSuSBNXNkL1PzVs4DbZsgN9VzVJ7eKFiaqrwNMBNpc24VjCJRQD2Csviigj",
  "key18": "4ULGRrYufW7tzyiQNH16hHe17rZ52FVjroGKJbUvBxyEz1kfJUzfLZ6sMYkxsyrMwBVTMUmLNkJLyFUUKmNMGFdQ",
  "key19": "5mM1aqdXEE5vCPaJQ2TXhzC3wDwP65AqHwoUg6DKu43eSza1yfmgP94mDk9t9uwGzRc6P89ucgyng54TjhkMa65V",
  "key20": "3ut9BW1NovCXpSxRwxXuBxsS4ULdcsDCbpB7eXCkbwtm3ujadCLqk7Lmtc4rsM3C32pmhGC1ARMoKGBAcF1eKZSM",
  "key21": "4MTb4tpiGA6H6KAeU4mieugsqbKWC8NP4Q24QSqiPbHCD6GqP9okqD5mh25Kaxnr1w9fwcSj5jCXUHiLsph96ewf",
  "key22": "23ejB2k9JCbKC54ciKFz2bY86gstHY55o7ipwGnmKrhGibyCkd4ba8TTQRJVva7eM2WZg1XMvHiGxet91NA96oXY",
  "key23": "4DjTQZekFTSWoDh25AHuwoTsAtu6AVy3amkToRE1Reg2Gxu1whoNcLGByuGvcXtbQhcoYS1HYvB3WWAmx9q22m7A",
  "key24": "2s83bVuUM1ekrRikpvvAPcX61QT81TUWNMdsHR1HvmN6gLRtxaQirxPym5AseXdVtgMFNTKb64pYsm8PwHRWcwxz",
  "key25": "Sr7KU4wQP2dtX3M72ofWsAk2otRHm7dR1oL8VqcixzvpzuwPfAk5uXJCuudeSCBpvNB8ZD6uxXHcE4pcoLDWvKz",
  "key26": "3WgG6ZHyzZH1uvNSR6tgaci3tfQMmVpNTRLurJba22BDBS3uVkefiFX4rAgVDJvcsJQXRR36wSrehZnYLWdPUKSr",
  "key27": "LYXPrjqF5feisin4gkpdptzB4P6nb56mwJyR1SMgi9uDLQT8n3ZoZni4mN3s9okHWQALqznT6vCkUsa7NWzLazL",
  "key28": "2bpnYoaEYXMZtTNmFnCAHjVu2PMS297nejnxsCjZVZKbis4p55zDvrgXaquVBiPKJ7nDatSMWC28ajdC5dE6KmRW",
  "key29": "5KrsKEAr77fvUxsh7fg4NgotFcYvt6XQVWKLasmMj5MKGu2ken1aLh9xr2SvPjiFuuuRz3pQWvFPfu1vafDb2JEz",
  "key30": "4CnUKkt9g5nrP87eCFmMGco6NqXHrVSjfLgHvDigJ7rYjDSnj3K4JfF8qLXXuAbM5CiCnWF6TieyByT6LeTs5wNK",
  "key31": "2in2uENh91ZrkwVxy3hQRHhhcXmTXLjzRNKz1cErarjqJv4zkyqJ3zyPniTq3TB2m2Ghjp7fsq75U1afv4bpDMcJ",
  "key32": "4X1pz9qFPFvWnUNGbcM64rgdGM3DTQarzMhVZQz1ARX9mkQd1Bp3MmDFcKL3whTR3pgRqFZSXVp12vCzQjPWhpEV"
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
