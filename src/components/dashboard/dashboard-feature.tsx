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
    "4uo4GJ9CpS6YgXdkYg8Eime2gHCuj4bknFoJQsRkwdZWd4DVoM3xvzVdd1JU2F3Rheb8W9vCHEaQ4rbDtVN4t37d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJR9Xybid6ecQDsnieEWYGcXMP1DgTAA6vWz132gLvrSxYzr8fWYB1qWdSmqNMetJjq3y3BYMdsC9KuFh5Xb1UY",
  "key1": "3k3gspgk5Q3pzuVWCzuLdMW3GJWf1qwEcfsju3Z4sdMAvL6ePQJ7cCdaP4BPAeZqRhSgi1X6M9sezwiVGznQTVAx",
  "key2": "4meTCR6MQYimmghVyPUE43gUThwK4sVCMY1uLSmhvZizXRqgA77LUqdDB5ysNKsaVgXoXCrCXtsZ4pkVSyekoGgS",
  "key3": "fjM13yhAgXXAzRTmmJ16ins8jgxRZNpvvLjzSGoeQwAgWxnxNWN4sfqgDaEUWg2abzubGVKpnYS7tA95fhrvRfF",
  "key4": "3CcKb7PgCtsukdcmoCFCXsf8wBkYgMz3aDb1K3P8d5VQ8TGb3sb5Moqwzrebm6zaLJZ4ksXfkEFyfzJ4FXKkfWYQ",
  "key5": "4Sp2wEe2Yf6NtYjWaKc6KmjJBcjZb36dY24AdHiRhAxZe6eGQ9NG6hxyfHJirTcwNrTcspJkDxcpiLeu6fDvX2aU",
  "key6": "55bQH3faQ5TfMNhFhqYH5xcVdAat72yTS1g9V7JSvixBKgw1aE7JQD5gCXcUfrNB1cgCmFE5GgSRb2Unrs9s14Dh",
  "key7": "3tcYk9PCB7EniSoyWmFks685cMyVUkQSKSBKzdfKBmgD8btgckWE8Gs7g5ZExURaSJaBXAUYKoP8qni1WNXtZQ7t",
  "key8": "25Y6Nkn1EZFDvBgeSzKvx7quC8FCR83NVm3MSjXu86Jb2TTuf48Gtw6pQ2JKsxKm4RQSvtMbs6rfi5gcKAXV3C9r",
  "key9": "3W188vg7Pd6bHVJAhkKywYtzzgNwSbKpCptCvBMu2HsoUGurrkG1AKBygSKnVfC4kQwWopdtmGgxuGDmw5cKBYaR",
  "key10": "2wQ9PP5VSAtu39MXUC1gLsszUAmE1GAjbFM4kSAmpg4ARaV1jEADJhDTRupTPvn2BRutFhkmSxwq2A3CMsnHvhRf",
  "key11": "jSNdWFPTRqNnSRMV5NdYYAHk5mYw4KUzMMGNe5NinC32kJwbDDQj4krw214FzZM7XrfHVgdXY1i5bwVBfkKXXB1",
  "key12": "59sQvngvEyyiP32RvhfqZtVAegtR9cxU5d4zeHiufQ9RsezRvw5s3RKhQ8qdz5NwnAhmHyKvjEQoYUsv9kqqgQC2",
  "key13": "4LuETuCuShP97gNCNjaADwJAxY7zKiU9pEA598CD4V161L8gDkLVyyY58u3FKGuvboetEJGM6F5WAs7VzV64V6Q6",
  "key14": "5UW53MdvfUREu73kCwcE9MByEwMfaB5NCwP4ncFWQ1LLMheRRenfmNq1mos1aY1hzbg1CWqxLPkJf1oATUAwj1w6",
  "key15": "2vN6MmNpkirNFKtAkdqEyhnsg45e2MLrBzvyeq6uyQPDYUdcTZmwoddRSp8z7BpH7hVUdq7w6oz4JyAFHyYETKCL",
  "key16": "bN1NrVcKb3zcv9TruknP3LXyqj6apsbLiXJdpcZ83eQ6A8rYDKF7bhf3LJzimDW6bJqyMrjWZix11C5PGUNRuGg",
  "key17": "56u6dJrFvXndTWpYyvifK3rKuKsbzHaxkrzar6Cu7EXndUyyJMFgn2ckkpizo2nphLKL4XY2gMNETwiTEPf2ufKR",
  "key18": "3snBnuoXasMphKoX19fD7jByVYHQ7dFbrVue72siYU9jqAbK69uHabrRQBqFvpXZfXcWidoNy7fDezGCFoYFayCH",
  "key19": "5XXiWLzcCh9hTtDxxcS9Q4gXJqdFDtVhuzudZYWH3vPoFufwDTkPNcbknHumBVTYdhgnxm2TbLmhKe6RNFUG4AyM",
  "key20": "3qsdijNBmPZHs3hMnoAZtnvuajv3zgrf4yUmBXDGNYcUi3p1rNzSbLBfkyWs2ij1yCaiZ3bFT96mHh6Qj3ZpnTLR",
  "key21": "o8cvZ7iAtc9fz99zdSSU1sqV1cMA7GL36247rod6UmcqG1TmouiAoPyBdE5dTEQmg6eS3mBLUMyiekzBTLYiFpp",
  "key22": "5TnzPoTsS36exvPoKgMxjMtpyJgMuZ7eqbUcMkyc9bdLEw77nMw3iMqQoMPZbv2xLqrBsk6JZ72Un5XfK6FRre6T",
  "key23": "4JMmk3AdhSQARB3C9wp6EPE6vvKBG1AV5bGw8YkPqnMf3MCUimSHe4f9dyyqUXUgWrVqbw4yvHTNgJxA32GJ1KAB",
  "key24": "3Z759tF4kucA5PKQEjSf4CEcE7Eqpi5NTZPXQUshiMbgzymyeCMK5htkCVFkd5fziPUfjZUTWXn8JxfH2gn4T7Db",
  "key25": "3Gzy9ffSJZWeDwEbGr5PkptzjWNSN8hhFLnWFjZoMVm2riq4gYTerwb1dduLQCvhpXQkK8oAdbPNxNijUXaBmBiG",
  "key26": "63xsBQRCixKsLReg3FE1e8SLbAcQSzaCR2MriwB1bvmrbJ1QaE2JHDCAjDssaoapSKMHgiMdmFdL671HxgoikcjB",
  "key27": "5ysgSMbndwpwgYTEmNUxh4jvhF5uTLcknQeZkDdVYdfryJjru8gZooQ4K2jMU9oR66vCUTMoWvTSijchvy5QvxWY",
  "key28": "37JpMU4rAEwVzEaxAyFgnBacsxuKd5mw4gmFqHM7aBArzBE9NeNhonpUaJnca74rjXFH7hRUN3TWP237X6UT1Ba3",
  "key29": "JQnyvwQWEkXBfm5KGcD8Kv9dkfsPALbQ77cUVTbb1VAtRGjjsZYG2vPT7WhM2NtVfwTTZuhJpiJMcxiCHDVhNku",
  "key30": "3PNAgg5aVfeBEJZ5KKib1GVvaDDMj9SphVDgubEmt1JXDRdDPPDWnESjggcYndnpgFsnV6vBqofxAqxzuvTKc9Wc",
  "key31": "3LnhJ2ngHb44XnRvGr5qfxYZnobLchRdEUnvromqzPDYhnzJkqy3PC99t1AMhPRb4oo6XRyvw5Q6TS36agBituk5",
  "key32": "TucUkTHn3MN7qk6Mt1FkNBhMGEC1HtZ2SUD1WqpQczCmJBtjho5ZeCQf2HMXTy67J16SPfKVC2EowHaeNMWM5Vt",
  "key33": "5MeYEGA4Q7abMNVf43ktBh9ZHLnAQR6M6tJBAv8jPDSC3t9Cku21L5TpefrCfUQDKBqopGL4RDJ58vMNFxxy5V7p",
  "key34": "3pyMYtNmLUxsmg8QjQam26DKiBepDSxHH1u9pAffHLJSwPz2Ln4QZbUszrJysMBSBfMYWmfX4D1QtDrHrMN825LJ"
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
