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
    "2QQsJuWgniYbao9SqcZh8UeZjP75EKhomzAJYdWVSGkV3QnF6KfkGUZFBqAqazZ1XyU9Nx1jkk8Whi2kf7zg6qK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uD7VR9cS7vN8fUArHo5AExETzWT4XkUuYoMjWv1Zjh4C5bUd3mHXSbGNNka2mpb1EbmM81ucxReDEUB52ZtV8H9",
  "key1": "3VAtygeHdw8GG2d52iFsfWXbAUrEu6SCqCGF3nNxvvTTzph7rg5BbBNMyGffAzsTKgNkTZnmyqCXHEJN2Qq75iPN",
  "key2": "4mo9faH2UTq7c7jdniAQ86GW3xqGfw1xbXouKKHVoKB3Jvd7sZVj1ZncPo4qou99LoH7eHhz7jG9hvNGDPw4DzA8",
  "key3": "52pnLPmQLBPtc9784VjjNMDHTaW37pPVuku119f4DX2ZggpX4YUeNARysLu5tA8TDpJtdZozbqsjTQzZDPWyMU1g",
  "key4": "4cxa35WSF7U6aT7dzDoKi1m7hMW7nYecWZiM9VSyCxp3ASfZ3vnRvUAiPhfnRDTf8wh9gWsY9Vj8tbCPwGWPHBVT",
  "key5": "4KDz8FxFEyCWeFKURmhSVLumYMf5KuUtMN8gEZX2hBRZKBVfBEDpZQo9Thk96FVGX4i24ftvdRumw9BauaaVpzpi",
  "key6": "3eKigaQpVfMVS6C8zEcvDGT33EpGESRaksRCYFw6LKiWv61xa7kM1KszLPYpyUvEy1AZ3ftxghpUbUumuJeCxVdD",
  "key7": "36hskJX6UfjjaPi9pWyZ753KFERKHGn7BZ5cDwwSuVbCeTVedtVn3LgkqVYGGF48CgqmGAHHqcqgWTaVrmBWyExL",
  "key8": "41gL7yEYWRdjRepoQA4hofkc28NKBzbRJhAptkSrxBnR3kXuLr7RmCU1SWirG7eAfg6reRjFpGixJWaeWDn9S7pQ",
  "key9": "4UgBQy4QouNmhfrKwqNxU9tJg1Ys3D4gWWJSJxEPZN1gJhVcU2BjBbEFQcuYfsSisVUhXFiPkGKZPWJZo3FnmkKu",
  "key10": "2Ft1vTy2h11t7hLvjYQzrkG5jVFp5gy1dUcHiCaCb2EPnsUg8dAmnwRQV8s9obZ4GZY6P5JBVzZ16wm6nWGM8Azd",
  "key11": "mFQVV4Kj1nSHCseYgvPaV5SqoPz9Pj2s9QDWouEzpnA22JpCwCJRgu3tFphy24T7YxXXhCvJqaBkCYMg2cXrvv2",
  "key12": "3pTz2xn2qvFBZyGHg3N1rUTfVCLroewLfzj3M2Kt6ev6roEQ5CCEcUSyGK7wrMiggHeqVWe6fg8QyBxuksHKr7xq",
  "key13": "3jJtvkrR5h4jaUwTM7v7fPNbE8LJxzMmcyzJy5WSPXjw7ffihwzzrNA5NYdsFs9JbhyyGinH6HfN3GuJ5iEgYpar",
  "key14": "5qoif3a8GSDLAAwi48PwtRNyVaDh8maD5rWi9cQn8BBMkajFHX5yjNsWx6Whim4HjoXZzQTEBPv3AqjhUBRKreTa",
  "key15": "2SXDueXnaJ2UQ7REccKsnpEVrH1LcJ3zDgeSoSSTb3K4JSm6thGN9hYtAWw5LubHTcHfNbcpyLySDCaxZHb1jRBF",
  "key16": "3evcCEafwqFDz1dtLzm4YMrsmhmN4EEQphtTp7uurKDgaQXtFQdE6S6aqVjMd8zM4RSki2ZmfiuWGofv1KLurucp",
  "key17": "5VuNY8xp16mg6FoUg2tehyJjqPityDJ4nHJonKLfjnLBg6DS4ERxdBAYiKquNoFhofGzi2V3pxtmGpo95Pb21BNi",
  "key18": "48wAVWDaGVXf43yRdcVihK6T9MSno9AidTYKTwxzrU9oKUsyCPcHHam6xxLp2yQE2Cd3w6zuuApwDsS73mAVYdzb",
  "key19": "4NrHwQMmqUanWf5k2WFk7fyKQmgtoMRNhveipxPCcpC1okFzBNid2Dd1akcgCxeGMmnvtnSrJQpDaDsaA7SLLKiQ",
  "key20": "3tedoeE4vH8JSNQxwC499MRr3SY9gETYvTDMTmfxVqhBM6ELvhPCDYKynzvmHjc38SB8TsYMr8bEY9tk9VvUKejk",
  "key21": "26yNNy7GhRLikLbSPWBLkNQm4T34x1QHrjdChPNv5GysxPvzAJpVsd6xzLnKiMwLueRwLoUuLvxoVEnDFLEovTqd",
  "key22": "4Wv4rr57JizYX11SGDekmKeKwh6t5P6d8XaBohVL7RCjrm1hffh5sdvnbsL71h4666nbVTwgmymqMcjbsDYF5czM",
  "key23": "WL9me8UJusCAz9BKkBP5XExosc9FtnczbtpdYe5R7AaGyP3m5sKyvVbjw5QQWbswB7mEzc273W2tYF6FxA7G6bC",
  "key24": "5NXvEwMef6LbGsJ8UCHnHDr4mMbWmP5WqHoTUJ1d3qJpwxVUXdAy4E7gGo62iBF5BePfg3sbThGcUqRoUAFJwazE",
  "key25": "kS6Y9fdyE3Et15FB4sp5c2Qnhs96JFNe6xpU472zXXbqS3RC8186AC7vd8RDjz8SWbdeF9q9JkTLVFA4a9DfKGK",
  "key26": "213uR9BL951GicSTvUiAXvNaoRm6vhPqLpHujZDKPN19ihNX1qtRLisErJEEGpyajMN4qvs6C1yHm4sdP6Qi13sn",
  "key27": "2XrSw9u8CiunYybLtpdrgTsJZLQ2cnazq5zC9N69DDSCorvQ55Ke6txrrYAp7pfnRKGidZm1qfeuag8nopz9fVDZ",
  "key28": "3Siw3WNJeo5fNT212yjxWfrdzK8kGAA4g2CVEZp14ZzZnLTRGZKZoT9XCfYuHgxmnyKtGHrS8tG4npuGttKhLCx9",
  "key29": "3Gh32HTKJmx3BBugwbU9GDaUWCtHHkN59t9D9R4kLtT16371FixDQ14qsrfaALQYGD2vMM1yjMyUkxiQRdk5piJH",
  "key30": "4zMzZX61hiKtBDo72WMjCYsSSdeZjrzXhzvRTtE71w3pf7C8AYy35AmS5a4Xf5aD3NfCzoHEoVkCu8PiFoTeMznn",
  "key31": "4WDUSw7Jybr8fkQRj3B13m8TBCjq6HUo8KqEtCMoyQZPZJMsHJNUvdiRzEiVXNRmCCCyus3JCoTVTxFnqhpwJg3N",
  "key32": "2uBCZnPXEEGNBirNiAGjWD5fAYUoJ4GgpDjiseaJYmjcvUBfwwmhq2QZ8wVCvAaEL5yG4Pwxz1h3qtYLc388tEGr",
  "key33": "348JFR9bvSBofvoq412Q6Am8aaoSh4pXWRTEdrVf3B9wnr19UBz4WwEXqRo3pniRUAXbi6WRiZwrwpLAn8KrqVNx",
  "key34": "eSZcVR7NefBeJEps4WhS6U52bXCAZH4DhUifZtibLtCuidbEYAT6f2xUGY3haHsYEVPqaxJoJVFWfz4A3SXDB34",
  "key35": "59ujQXj75YbVokRuBa43U2pb2gT18YTdaUuwbnViSXVLt5rLnvDabLaKgVchxbeSvwW9dqyK8jg3h1ZSugjLDsSD",
  "key36": "4TMDD2w2Jsp67TbBPjU7weizGnLLFinTMwjoV136wBEVo844xszMxLje38yyrqnVJCDhHuW42BwcqFnouvUFXdj9",
  "key37": "4VA3cccyPSDUru8otjsuetyRJX742Br3JqNn8AUmfgD5YekbGgojuwfPiKu8v6kLuquybTzXCboXzk3w4iCkpAyU",
  "key38": "5uTcdKayyqpwAKaT2oeFvxGTg7sAiUwH7nCuAdBRNkkQAdiAqiCsN95qoUhFH4gxu1wYsN7WM8wafRY9Quk6UG98",
  "key39": "5ttV3Pst8CVoJTTcKE3R1XUcApbMn9ZbqdxU48Zy2XT2d6yL7kGYA6gdzuBZzQrgYLWA3raH3v5R5WVYR5g8Rmq5",
  "key40": "2dPxsZ6K7nQCo6JfYhcT2cNhE7pgkjspTZvyN2a9CBZtMEZBUpd7bK7P9xDFeq7ZhJYXfCxGA2NYMrr4mxHcXGPZ",
  "key41": "AcGZvHZt6LuNX6GWUmK28qFQGzjMBxRjBtZmhWawsqFcqZX9N81sX5LkW13FNsYQMEWNzn9nNYLQhz57fLh2fjA",
  "key42": "4whfoe5cBZst9Le6w1GfqF88fgQGXJQYgc4ekHFDJ8KqoBM2YQoVbcbMrPPNSTXsgd8SJUeCNAnPKQ6hg9KXNqK5",
  "key43": "3ysheHaqcSt5mdjxLe5yAC2omjRptFikoLzU18QbvavzKeoiyDAsfsThQrVnJrxjZRAfAGkYTpL35c5Kq4D9whxM",
  "key44": "4P33RYEYPUMg692TMRH8sP8fbhjyvbFYErv8H2UwBH9oYuJA31CGGvJfuWzn7ya1PiGNKQCzMYa6PP8hsvH4wisd",
  "key45": "2N1F37CoosfsjKLSCGygh5JbxeLNenffohMCjQ5TWLvshaBj6TwVLHrCzWmnrTnUYEv6FWxosHNFqoeyJeo8nzEe",
  "key46": "2NbhG2gEin878pG1GXzNqG56nLwvhKUxUf3wNTCjxm7bAhwZacm2iKQZDUfhusuc4wrYaTgQ8jiqde3LcHuZAMkS",
  "key47": "32XGN8vuUZc3y5J8yCP9m4NGErZfgkqxZsLZwfknuLwRzFf8VdW5gAqsx7dS77DLbBymisx9HTRq929Z88u9xNy6"
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
