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
    "CFcPLovqLCV2UUfygoeQwHv34o7gyd9vMNWt6MtzDYGPd3xtUufSzsAJwTKtLiZKcMe5sEGYjXxSdBrRtT6nstx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fBAfj3s3wfJEQecBQt55x7wzFqvMm2YH27S2Tbdr7zYY2Wxh8A8v6azYVKpszuaj9k2YVUbGsZtbTTu3T2zN9qd",
  "key1": "5vGNAG3aM7LjYWfQFhNYC9nZU3NUmQUBAc9NCNGPRWWyGf1xYw8MSVxuXhkNo8HK3zG2oNn44Ndrjc2cFHHaKfiL",
  "key2": "BkgcTMyNdwPiftTobuuGao9xSF9uTm7nJyUuGJJ9e5k742n9VrPMu84WFcoohKSiJi36MyFnqLqLkhG8hVWjMui",
  "key3": "25KTHyxCoiWW6ruefBkr1N98rP9jHHZqHLANWsWJawMsFMWCkQ4k8dg3kLHFYkwjqkxYZWpCjmLLXgWPR6jktjh3",
  "key4": "5j2MwMLSeou1MM5XaggxAC3VKVvPzKmiaDQh4AMKrvguCcXAqo2T8naKTDfoo14ELakqbqX23CscqXRLwxVeLUTS",
  "key5": "t5SScZgqCUpztX8WGeexKSaS1ZLZ4sUBD1VWsxyGaoZiP9XwEoQRDae2qdziv6AMb1K8fYvVsuBomN8SGZDTZxC",
  "key6": "3Mkfn7GQV3FcaKxMdnMbtbL54zviYAtr39WAjQzKE76SLaEtmFskYczk3avoZv5KUNqVxNxsubwoPk943hmfHVSu",
  "key7": "2v6KWk4LGiAYf8u3BwJBNG3d4rnoh5ESjQgGPCRdHFn6bJLP43Q8zbMuKsFSaSsRWn3hdkq1yuFbeV5WHVC6UsjL",
  "key8": "5DjfVnNkkzCmQtBQmAEQKpEd2FTdTUypzi1aBoQPW7jYzeF1iK9EE9e5Vg2dqrZQMrzg66NQDpnFpxChdj8gXtE4",
  "key9": "2uoP1accDsUFFad7FnhkVEu2XNzXWsmVVyqnbsvkZSdRKbE7rfKnvDWeVa21oNzRyKe1W5FQEB6mSj9NPCi1xZFm",
  "key10": "2u9A5FDGeobN56yXXDJrFSJeNRFzAqHPLmnURw4Lguo8ujMKCXUzppGqt7AUZdkuu7Y78JQXof77bwufJjxrz6k3",
  "key11": "3iNmKCFshu3xM6BXFP74gUYLrDTvnidufGCucj3TPj3z3mmuCQHxhvNHpWCSpU54n9Qwm8b8vJeMjWMAdJcgpUix",
  "key12": "Uy5F57XFL3jnrwmf6d3yUmWukzvECAc5TfG91KaKSGgTuP3EEy19WC1s54RgEJDmS8ErJX7gXYNkKmfQPebkDwt",
  "key13": "zrY5kyve5oUGmhrMRW9m3sDM6BweLes3hervx8UwxxQoNtDuv3Pb1MbZpZPagSMTjP7yCzy5iAyfexUKURT8wC9",
  "key14": "2UdgAU575ZD61jNfud9VvawkzmtAJAW4Q292CnWLLc7GERW3CH6MJ4EVZhTSpzakNM3SZAckE1vHBAw6QJo2YbNG",
  "key15": "2N6B53tSLaNcLXXyeGgLxvwJ1iceCtqC2gfTngpeg2GbjretSMeuq1zFxFFgJ1fwnVo8B9fG4WvzcaDBN2Bk8XXZ",
  "key16": "4N6cah2Y3i5Uhz5dv5eRc1NQKfSZtfsKYs2Gf4z8FgDF7qkqXhg6wWhNEoDDs451PWRLkaMP6thrKdptgkESEg8W",
  "key17": "4FCFj5a5QXtLc3nPBVW3vNkhsZK5Lddbk9DtGJjWbaq6LmxMXqSFhrFCq9Wgm57ccUwc5Uq3YQYb8Z5kn36Lc67q",
  "key18": "4asetuwPjn36pDAvbFKnPboJFkHvkKNWxG2mmSko2FbqWkdcCj4RePGBeVE6v9oRg3GPLMDek6NCbN8S1gnnZ8gd",
  "key19": "2M4egiYxkVr8JUTpmiLRnY7XXuMgFzy7YZpnKYEkZ5hbCCpfnbcfrRbwFbeyW97P5jYzowmSrWPPgGxQ9EwSyq6H",
  "key20": "5HtjuSP7c8otJ7Agd1nsfCa2UeSFqKKAQyFAumqZtFX2iS5MY8eh7H9NhfVVWtcgN5QusVZKRakTLxL9GBThmKaz",
  "key21": "52xK8CbV8W72r8cp8Qfw61gNsA5uPT8UEyM7UCLRL8eAuqxycYWtm3zzG6bhJxhW5nSaZdFz2qCmEUopT424G4g4",
  "key22": "5hE4c9EfxzM5Zz7HUhYFyCqymmpEgfA6Ra7p2zZTFVTxcEcSUJN3doo89AA3WQN1ed8FfmVedPobdtonCTEd4FJE",
  "key23": "v7fyyBW2193Eon3pBaozZLfMyR64KSvtn4q7UcriVHzDvePQrz87Z16TBBPfaHST1CmPcps2j65n3LuTUW7Nv8m",
  "key24": "4RcHj2F2q8qVS3hmqTUH8B2wbzCVTuNArgKcsoWnLc3GLJ3UQpvpvDt2YPv6Kcqjq2zZwpQihxrKxJexwzc5MC5B",
  "key25": "2mp5MXGuqTmNw3sRBgmZn8yYNj8Hs2k7CPJb23NRQeGhxGFJbjwsJoJf4TS4dnw5toZ88wzNxo5DJsBh2eSTYStX",
  "key26": "5doib7TR9DfJpqsRi9PKqppZPAzzYqvCbTheWXWbSoX1Lp4WCPazmfS98TAaHoxMnNNCv5jVmdLagZtQiSAY4Spw",
  "key27": "3BrfXQnYcKRoXNtmiWC5rmqT7CE1u77vC2hsyc6XLzbPrH4cGeXDHBoZnXeXDH9JRQzKQBgytVttStJkWPAoomXc",
  "key28": "3kWtATKDaEW9VkowGx1fuYw5uDAhZBXE75WFL6Nbr3aUADnLExWMumuThd8PUgTGsAt75hdxJDGP8xUBDUGCfvbC",
  "key29": "5ZBZg6MTP2cdJLqmMFReJ6X1b53ZUbezjvgY5zAgFSXxbcuX7g9h4Zognu83WPM6AhwsaGgWP6tdtGNVsJ6JgmgQ",
  "key30": "2L31EhyGAsucnuf3ChszGtapK6nsU4r97F5XEkt9ddfHqW1nLSZBPE57Rviqy14U7bcbkLAX4NvGbLw2gfwRyow2",
  "key31": "BpWNV1cuqUNDDxYmSthczXapwfx5WWAVxbueTNVrehbjfGLKUPMFqeAw61q7v4cTket3Uct9zF2FM8dWZ3VXdCi",
  "key32": "4gooxhynZ5ZxnpZeHXVSFPmRVZvpKLHnXr8zAgKRQYqxvUjFVH9zaiPpcj8RdkB5udE6qsTRnsh2Qi3aRTJnpvmJ",
  "key33": "3oiCBuEskoBticvanF6AXBBEY8ZtKtS3PZ2apQVVtNjV7Jnx5tkvuSbCzZEgzK9zP4WgVXvtuddaoVUbd1oB97VS",
  "key34": "5t8BeeNw4Vc3zZtRhCdNPVWREtwBDpPwndprWULbnVPvEWWcMY82WZi6DQfXG8FGrKBrcrDJFjLEmw8qUaWyJCbV",
  "key35": "65xYuu1pH6myefXiLmNZNRUA5izzfkQXrpixXR9VbZDQhYvz5ByoqLTATKZdTXbrZL5wAVofgc6N7c98mHZzvQHg",
  "key36": "2MJdYN2RuRWJX2oQhCZK3PkL8iahGtsK959ViosP1BV6H18NkCQucKJm52hbU5waHW9qV3ZxrYVawmiFVyKqckTy",
  "key37": "5sE2KCAYFdxLuHU933kWt3PH8MTnNzdfTbJ9YmiRTwrvLCjsYuSXub5R3uoSeSjyutiGkrwPhsoGWERAnFEMR2Zo",
  "key38": "4KL7Qi2i2d9woeYtJjzbjoHBzXreD9i3SsSUC9VmE84PM6E5k1n6zyX477E6YAiZQtvPnJg29kQKWpLVtWP8oSYj"
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
