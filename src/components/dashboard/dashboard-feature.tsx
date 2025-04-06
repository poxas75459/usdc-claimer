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
    "4Gb61Kmu88GookFiDXAraJfCouUP3mBTervYGapSyFkZvAfhK6ymsnqHjpBviKPdEwzdof4AoGdWpgFSPtMhHSyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcEQuoJtPGmKLsCxaqMpj9MburierPSgjReNeMY1up1K2LWitp4hnyNvTegBjrQezFytdLd8w96xjiijDUDjwCX",
  "key1": "2BixstaK3M2rKBm5LJMEjPFfS4obMEVwgkpKbBDh6M1fPDPdyhU7qoGuNQSXf2iqQeqqzksFetwzvK91mMnoyXcK",
  "key2": "3CJJtGSr3Ynt9sJWZ5fwbHxxS1HjbRVaonLPvQE1ikpSKKafgdRj4FEc4uJvfXwwCm5QLQE5SogYxRv53JUN7vJV",
  "key3": "Qfig1e5cucA2ijuEi4t3U6qnmJrARoT1qw9ZppT6SsxZHCUyJ2882V2yqntCrSprygW9eD2PfE1KUvUx1uahKXz",
  "key4": "4bVVDUpCCnAJCsJLtTpFs63cDiBQvcLvdqSn38KrAdDdawznjQyzBR2rURzT9WUgMVPqwcdZB9ayhJigbfiWaBpY",
  "key5": "4NEzs9F23ZVypQprF3fXd4SAEAtWBLW4v8pxYcSoqqoqMYuR4f1reHhKVeLSZBsaz4bqwtz7Y1989emQ7NVb9Ytr",
  "key6": "2QCfFKv5fUSZVqK3fHjiNYt62QxYcPwSUFhSQri2exfryL67vAdmCyjXdT7ejp2LWRcrXhnpQCJzh4MV9HVnDGVa",
  "key7": "4X1aSTZpFDeNBKkCtkjJmW64nCnaiknm7vrzBDc12VqnRZoe62hS8U1AvennuXvWZseGQ8PcJgs8um2FRXuPXq7x",
  "key8": "5eXPosUmGcD8yEMZtR7hgHbvt28paaW7UfLGdtAQnuAV5qkoLFp3Fghy8wE8enEeY4XsBsWWbwiYu9TceHjg6is2",
  "key9": "qz8nMubmT2qduVE8Ke92aFyB2P4tT61wUTGiSFusB94M7svn4sX71fuKNQQPwkgGdg3cKN1tM8cZD1nPvV8ps3C",
  "key10": "3o9YzfvEUr2xpDh7g2ftFd8H33dzvV42T98rz7iHvCSzaB7BUP5V8AXqC6KdgkS6jkd3e4qyt36CBEoqWTtS8tFc",
  "key11": "37CqhgeRztXjB4YKS2EEhEr7Z9dtDHvMNxbSjw2ePfsLHzE7DQzN7shZvYcd7Nb7MsJ1MgSdjysyyGDzxdUhy2mN",
  "key12": "DGw8df3kvVGX1Yp2GGTU74LXUw55hzWGP8FTxfXavFjWyXUZc3QGNg9WnWic1GRj8JnpsStE4PZyUqfrgQAHzeC",
  "key13": "27ey3UagxJc4jhfKYRbi7FLs5YU899gXnjvEEpPkpEySWnx73ZWcHVwG9DgDfptZ6UcMv6AGAjVQzE7zn7VpLgyF",
  "key14": "2wyLeDSMr1J95x4U1giWQx1vhQpm2AvMrxYpk3iF9eQJmiBbepDSpPyF9NbTb5oJ7ego6jKLUf7HS8WXD4pew7B4",
  "key15": "t5CW65izXUZZ5HGLWupXynJQGehmuHVxAqHQ8wESLUpcLC7rC64Kye5EpvgaCQXxzWehQ12eBg3qYYJXTGRMEqf",
  "key16": "2pYDi8FDA9nFpo9g4DSLcgE4EZpu9Tz7ZhVYyLKqtAPSdUg69Hztte5sA9DJ4vyF7FPQYE8yeyw5Hm2hNhScVatV",
  "key17": "3LWsaA1ruzVsHzh52cDQaEs6hbQsaVE847D5j4hyp2TZUMWRuzoduXvoGopaeadns5o7eU3PNaBpBxcpx6Ne9iUN",
  "key18": "497iFWjgnjWoN9cCivoEw3YBs5iKkS1EPsM5GtHRRwz7ASnkfnQ31iFKkirp2FLWPRmTUmgd13GvjGiZJfuNtpui",
  "key19": "2hXSndH9ogLUihr8vFTAApp1QjViAfaXyuTNywAwe5VhRS9DQrjhh3m57nA84dKH3xq5tRyGxtJo4oRhZiYY6nXG",
  "key20": "4s8pkcYj2mVjjRhsEGk98f3Fy5WYr5EcaaQWzeRe3Uf7MjegNChtyGPRfweHd8mPUz4oUfqnNzJWtTq2vDJxEYGi",
  "key21": "4g1SEMLawHinr9ZkAV8kYZCF7iiQxAKA2CQb9P1ScGkeNREHyAnFvp5pZ3JmTX6h4MNb9uJ2j7vBRNbwUKDiBC4d",
  "key22": "2QYiTLnLijbn9RZ8MQrfpWndqR7idFcNw8rQPeAxDutyLRtFKCxpEp1ues1f1HoRChAcemZzQF1E3mE2yVSUbGGH",
  "key23": "4t5VuhtsirQSPtSJQtoio3XbzqCWzo9Ci1jXg54ydmUw6kciUuPcBziMxLhu4tWLbBeEAWDNeA6LhkCDGWip63eB",
  "key24": "4otsYEsk54UbDxdMxNZnnp6rxGi3ssHioPb3u5c7xBe7qYwVCMN3zWNLiDzu3YQLig2b1kGvSmhevY3yUDECVs4B",
  "key25": "5JT1kodQRsmjawabG7HKVN1Gx1vG6j7QXG7NaJ5gpzcjofGCCts1B8FzDdK2BPHF2W5yrgxHtvGofVrFdJJmLFDC",
  "key26": "8M2vey3T2r22vXbzSBuRVP5gu2e5r8JMi2tRKY2xbdYbV4ET7DpMp7Khy59xt8NWvd8wWXjNk4CQYWXbRuUo3e9",
  "key27": "48nz1BHd5ECDuKD34pc9yuR3d2SrVzU4zSjfzhcNdN6WuVdMXHMijgnta4LAmxXmhWrcY3FgvdffrUx4ex6VybMn",
  "key28": "BKM5vbLT9p1M3LvQeFrP6KBufzo1hHoTwMB5JeFutjqRWMdCNU5CLCnL7myRQ9fkCTUKBWqbJAsmj9BHrkyphnk",
  "key29": "4rRTyqVJyPbFaqofCvR6r1gm27UdKAYuyFLvudVJ3DqdTxJYh4WTZ6QMeqEcatD7LSjuMhq9TACDZgGDopm4c3bN",
  "key30": "2CVBPnJaW8XZRLgJngZTv1YfDDrnmeeCcGa3MCHoZLqWRGDLHtjgMcSeojap8vygaMbMWdvgZntb9bNp6Wg5t2e9",
  "key31": "r5Au9oTjDN2mTzvbMM3z2PV4QhgewzKv5dd6PY1zapRZ2nxtdcCoK2TqPZQVG7VBKi9qHKjMcq339BWQxFxxZSS",
  "key32": "2Jn2wYdRcGADx8rJoJTqMzCZtSy88Lx4w84DnfWdsrv657YKDiKh5ijN43CFiVrY6Tu5tebSqgXkqDggHbQMrmdo",
  "key33": "58kjSq2HUCbkysvYMzg5SCuLsuK3DCn99jXP1MRikPvPMrArzXsUdubW81eGjXbrLdkY7GhfgmAStu4t3daQvpaq",
  "key34": "5xixv4P4uQ5kUv7DvC6bNMSKykyQQS1yeWBVVJHsDnY5dhXcw1UrssTM2EuvtjA7Gx71SBURjdvfzBHkfGg2J3Pw",
  "key35": "2SuCy8ZqSZMrW2paZZ9KXUzpVSV3qH16GhVEbZeAPyR6S4cYAKk9pu2KeJbgcS9DbHwC1us23sXLBMhaTdyzSujo",
  "key36": "gVFiCtNnazACZ18tCLC5RnXCgHnp5NiMbdUs72syDwswVNcku5hCr1GdyUCAB7Fonuv4xPFKjGMJWLx2L7g7NJ9",
  "key37": "5J9evHwvMVfHVA9r85p1QFBqJjSWakWgtxcFvYpx4XGeoSfct5qA7LHt8owSfXUAzmPg9Tc7e3c9k4bUx76T3XwB",
  "key38": "5pjNENbUvt1RPEcNJHiKs7oje6GFzZdJSQh4skC9rsZG2whGNUmAc6atfhnrHX1FjUGtPtqg7PZLCnfh291k4LS7",
  "key39": "2e15G78sXR1Hrj9rcxM8dHHWJv5LDBL2P3vKaPeanz6zy3wxXGd3MBCWzELY5tMkzvvpDqRprWJ3xSuVX2CERwBe",
  "key40": "127HeYW2wHFE8fWR6E6w3x3i6ppyzGnjfqKUya8tjcYNrEvtDHFn72Re13HeViVxE72ja7ahPAqkqe8u35tPmpZH",
  "key41": "2udti5DhmEiADzSPfAy6B6rMEheQrNWePJKddobnfkgvKampyVWBziDmroBSczjVrEZrj3UYQdb2Wcc3GnzYmMrW",
  "key42": "3aN927wmGH3BDHuYCAYz9PDS6S4mGCrbx9Gfyh2oKrtXmMoCb6VnjA6SSPKRTyKo6fSG58ohfbdJnApMGTsXju3S",
  "key43": "3krgabzHriRW5ZNViTpfTj2bNyAgQz1RzvyxiiN36rorTSbNPPtmNqexVUq3tMntxTEZADAFBLbAoHye8PZNCDFK",
  "key44": "5vedGL6WkYoDAeMAyYvqWHt7Dycr7njhyWvdwWjvscMvXPjKxr1f3szdRY3ntUa3bpaPPc9P5BgvYQ7EztMjg3F"
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
