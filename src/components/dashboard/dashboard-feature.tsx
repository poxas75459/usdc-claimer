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
    "5YgSWZK9X4gewBZJYckyKHGYwZ2T4bAgJoNn4gSSUDK4N65cNbk89vT5kVT8hQS6qXh4a3KEVYPbkuN2sV1Cm8Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DyDFYHpgf3CAFebBDDbbsMuozLJMoR7jMMHbSJEUK6YBqGhQtvFta1v3BBXLX4WWuLavzLZEXnvTGGGZ9gVnDF",
  "key1": "3YELe4KjmwytbokiBUW1qdqaTzfasAGf7BJ97ZrE2AWr5jmiQtA3cHsJhMBiVm6mZ158i4p7WSFmggMYRg4vubzk",
  "key2": "58hMJNdtYEZQVvUMaqLNNtevX7kB6eBUi88Js34cBDu2cRuuXCXAurcBpFx1T84pvFFrBFkqZ5zwGYwYSVjZDXGn",
  "key3": "2aATbtrghNiK7ApebpwN9iZ3Vsx497UKnba8BeNjemKAduhEMbahXCfdXUHjZW4Rn7akvtnSF7Ux9mKHfT3k9PV5",
  "key4": "5VDXnYvdhpZv1Nxr8yQe8YkD8LdHPcZEEwGEjc7YHNBsN9a6Sa9WCt9k8NXZSB7cERiDuMe1XYToMmLp4jt5Yy3g",
  "key5": "3rnfNRpacCnA4THpeRsA6ipWWpK1gxTHaP1iE8v6iqbYJEaWcgUCZG9DdhEwDv8vQctbMVQZr54aiHDaByR6oYx7",
  "key6": "5zVhAug8ab5667yATXoPGmg1pTfPCNaY6UTkuAVt2QTCfZCBFSFcJ8q8mKVdPbfUY7whzj5J9k7Rff4pUP4XG4A8",
  "key7": "NmraHQMwEMkmAi9ceYnPMUVwfSgL1sFmKvsz4Dv7Q3pDZZXPynWhKjzbD9rwmcvr5t2uM2zjN4YS9u4uAZK2ybh",
  "key8": "1ez2cVQ4FGEVbnmTHpWZqjpaQcy8PBm17wKtE6D1WKFYGYm6Q8ra2M12nm4VrSDYgSpMqsGBzdK7ZKw1qpif1MW",
  "key9": "2ifRYneZQUWG4jag3L1fd9Bn47i8KEqN1TpfkFk7vtNyG4PET51VLd5ZpcYybHhfa3CsbVxSfMauRa2dzJeRk2RH",
  "key10": "5U3PPAhM2mQhkv1wPsnhvXeCYPW9CUHJUSNRQydk8cerAGLCu54Mm4jyJiYtNUWu75evkUeAS2xDcT89uyws9Yr9",
  "key11": "5drHHhaymDqKWv7jnRMyf27G1w5yJFJz6J44DsmeE2HRq1TomJUUvUcXJJZqYeTjJjPpqRjRLe3Rn9xXdVLBPwAd",
  "key12": "zpitnjjGnbeTVZGDMR4ZSwn1bUNK3CJpsDePMqtCAAW3M5DA2aoxUMQ4vuEPdU2Hkteh54srTWngvdxjrkUc5dx",
  "key13": "5RP512UXf1ZP1izEpbcwyjwqGrFEzxvQX2sQRsbMjvhc9Y8V9cSuvukciisvg841Gw7L9BYs9LNgMeX4aqMX3zxg",
  "key14": "4uswNQxADLCSKnzrhFiDvpEX83fzgHfZfXZXAHrk1XkcbEAF4NLRh9y3PqyCHi1eggkJmkNZadqMvGxLu8kXXi3q",
  "key15": "3FkLtER6aRNUd4qPVcG36fNurU3o7wFmLA8CzfUXNmCb58AfhpxddzfrPK8d9ZCDjkLPuSKL6hLnSaaUaZ7GgG8F",
  "key16": "jmz2jP4SdGwAbkauPCqRaqKnMXc9bGad2W76WSEUmAqwFFZDwtLxtfM8jkiWKJEGjHs6MDyxiMNtUG1DKHvPtkz",
  "key17": "dk61rNwsUgCuVgB9sTbvmn8swxWGP1asUno29uqHzLqNoz9qPc4qtj5C8YZViaLJ4Gzwaa4a2m1vnAB85b1qGmH",
  "key18": "5p3NkFJqtKgfWLeFAXZkpohrc13t73qanFCEReBtRhRZNZmUjKe2UVM4UJU3oB1xdaPnQVnsqKm3MqTYnvVLPwL9",
  "key19": "3H8odby7z3TjSZDCbja1fNRLXBmpnVrQ5ogt8eW1ZkLSdbmShZVEYRHuhxir26NDGf1kRHM9PVrJZUc2wbYVVRqq",
  "key20": "2YBZUVpxc9RqhLhnoqr8hDHE25E9MAAzkh6uDVRRGhZtTppRfCmwK6gBACMbfmri55mDCJZkeWLVihmsMG63bfov",
  "key21": "3LszivHgnUBXzfGsgUffVJaSGGXhpsqRGfB5LXhyFRYxtXqycRzFq3H1Yr8wugWQmc5f97JJTHd6S3JuQrkEBGRW",
  "key22": "3hadEoymgSM6A4JauSdzRX1632HVCvJSsfVq8HpsunWYrzTANfpDApPZ6L3446maThdHkdWaMZRgMsTQBvMRscDc",
  "key23": "38Yy8T76WFCjdjiXwH72616QcVY6Q2SpSayr2Uf5ww1xoEEXZT85WTCLiog4Xf173M9Pq4BS5ra87rRAHfooAmbr",
  "key24": "3ZGJR73wGdy7fFUs1jwFLtK34T7RYTT3vWEMZsgFmpyrpkxXhbDGFP1RrcufnRFKecDM54wh2zBZGrMVhYpevKrE",
  "key25": "ngmbxC1BkAKcUYNDHXLLL1Rjdps1jf8vRsTLEmiemsUXL3hFNYSaELWk3LEExP5cvdP71bMUgvZ3qrW2Ky5nNvu",
  "key26": "2T7AZkSLC7nkGj15dfcp8tgo17vCeR4EHTdBzCm1wKFHXVVEWMt8RgvoGJS4uxw8taMFrHXS7w88GgnBsf7VLuMW",
  "key27": "53AzoceU5cuBxEnJZeiZ4XczBrEsVFLCDwdrKWX63RE9tgUvau1V6cRkNpBmSKfHrAaUbzffDc89Ew8UU5YuWEae",
  "key28": "p2PJSwarSCKwgNAvL7mNNZtaVvsazcHmMw3UXZUFXEYKLUkSRThVX2nrFz6L3UkaWPoa1cB7VYzGH1VAyLQmzDF",
  "key29": "VyNbco6P31xQHoJAxNpet9WtfGxF9y5HGjKB9HWDo2YSrZ8Bu8VnvGT7TdLLXe2ufUq8AX5wRPNK6rvhyCUYYz3"
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
