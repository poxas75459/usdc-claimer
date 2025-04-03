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
    "5BXLmb6HmUy2byZdsCb66iTVTewDDwz9PmwRn7fz7gkkN6TG8hfbtF4EdTDJ5c88tc7iDXaKFuL19KNj6Nd8noPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZJrgWRU9Ex3adsNrfugkqSg5tjHmJGX3WSjnSy9Fv7FPW9VuTfyU6QmRdaZBgHAHKZMQ9rQUwMV8csLR8myqsA",
  "key1": "TBvN18gsiDtYtjndcQe3YY2qNDNKqQ2t1XBxit2SE9R1qsQMgvbPrfhYAqiCpSvS975rrz8GTtAfzL85GYWUMmj",
  "key2": "u6yJWAbNQwVawa3BUrfZJarg4rxqWdNCELD14a8FYn2afFyzd4jajxSWeMtfirAopbchpDWPNRjCJJpJmtkHbtM",
  "key3": "ZYorEYHRDr9EUiFuG5jMxbbKMLCM2kMCSEK197AU4EadNNmgbZZGc3waC7WVrpTXcxvdSMBHhUgsqB38EidXxJE",
  "key4": "3PtwXBPhT3J9x1cLk4U9GMt16qQqcXtimhQK5PCGEAs9Xg62Q6pVdSrQZtvXuAzVX9boUu5meMfbxJwQsgELdVRf",
  "key5": "5hbGM1NoghYokq8aQFLaCP4EEebQWh6ay1qGMRWD9PRw4RAXyrqCVM1tN4axphXgxAdsRAdgtkdgtQpnS1MBXA8w",
  "key6": "4tTsUTY1NHwxv3eLoeS33SK7jZZk342UJT2J424UD2GUJLMBypuK3WB4YFn8WMRqDG2KfnuvcGXg4JLe2JHbKkv2",
  "key7": "4FK2gqTtFjpBPcvbJofgNWb8CcPFsJzQ3JForjhft6mhYfNG2fUSXvkf2J88aRvU1ErP8zQdNMWcB62KHTBtrC9h",
  "key8": "3nEkfWT1qLpcdjo6V3SRAJ8QbA9YUkFmtxPrUTLCicPrgqAPYZKrj9dAu7h18X86ChoxfaU6jTgQsEbqneCJDoWw",
  "key9": "5VWAuxtSxtvbYgVWpNjwroK59469DJP3zBo8cHrf5jr9GsXmaDZVbyWrzQNe6pC8ZNDq5rdWVroQb5f1gbSp8NU7",
  "key10": "2EWxnjDe7TKuA6S1vGJZdCk2wgYXA9Q4HUu9zc9QMrzWcWpW3cGpBjjDtkx5zQ2Q9KixLmZvSNCfwvu5oSu6iehh",
  "key11": "32U5gKZokgbGJDqLSs6JEytBVT6hnUVLa872L3yh12rMoTxcyurJW4AnWtpBaXcLbCfozNkhtuafr8zUoBD2LnAj",
  "key12": "E7WXGkfqwFZb7pjTtNfUBwicJv1m3yNMM18aP9ZtspuF7e2umZRY34Uy6RQfY4oQoVqghxvcbKdTUVEPKVhuW3N",
  "key13": "28H8Htu4BfDGAUz7ZNXYfocjd4J5fUyS4UgqbSJbvasJAtJu1p9x4FjrtsM3bBMikvcLnV3U4Pv2Q9nTmp21UEZH",
  "key14": "5AkauKzNtGCxMdoEtaotBYP6aubsV6ySdaJdGxwUACjhRsSSEVGXScMdnF6ddeBuZQERDd9p5iLPbn3CtNde9hmk",
  "key15": "2W2x9TyJhNosdkw3nQNMfEMNBo5uQVGV2y8sBLV4bb5yYKZg1Q7yWH5qrqoZfNU2ti3oRKcg9BbRdFBd7MFN2a3h",
  "key16": "VSEWgu5PvxZHyBXXxNPVMZhnw9rGgEXFZyxMvxKtwMpyq7Xcr6khdV2GWEQ4s2fLRKeET9ZJfypyF9sg3ZxmdBU",
  "key17": "2XWxoNzNGhrBAumk9HLazv9RHsywGNSVGHeZAhRdMEMDsXSdVeFtYrKgzcYB2V7zjvKjvw39pLKTWxV7ETSB5dLJ",
  "key18": "4bjzQrpMeLY87CE1F5bpEyWjpziYh2YMBCWCjjAa15qvMd2xdw2U6CLEhDAwxgphZ3f3r8eQC74KUWQ3zVvFeLz",
  "key19": "3eFvRNjEhGggzL9AuGyif94LCbWuw47ENbVLbKg6sY7tJToeWMvagDoaMSBcrUDA5iYcKZkoASQj9eL9wMBYD4NG",
  "key20": "5ECqawD1xov318tD7dgzdo4c8JivHN6AzM69eKFHPck9UvVpoJLFEMAs9vg6GYXyLPX5scE1KVWUqkQkzJ8TpkcY",
  "key21": "5a5E2f17sDvuURRnFTSjcdSNtgLYopeEiN5sRqiBbeTz6mNUuTFh6oGdEfhHWd2BAak4u8JqY9EwjiXySzfhRbxn",
  "key22": "3hPXkhJoQLrztEz9Dfrva4t7CjAjc4AK7U2gvmiRHQFeVEFGPgLFDMq6Vp9Hp5YobZvtydj5RjT9bc5TqqzMsYyv",
  "key23": "5kg2rdXG2UX2wqsQ8i1E6iJYzDTPFRUBmDhwdQbG1cCy31acevcZZ27Z9dcUEoYgqAiwLJ7t72AhJJ7qSNzJV3XF",
  "key24": "4SzonBgSiWa1UFuSYD2bTjhfxhCaFvFDnRLtNuNqJ8PsTyKYnLv3aRKWVKEfEYYTfK7sEDP6t9hBHGpr4gHmx5nE",
  "key25": "F5VvHNEzpfGQ76WVkudZjgoX5VtTmZLdrQbYs8xrQhcpbVjfU8mfGqA6FtLieRkcjT5dirNKqjVF1pwUzMEXUtU",
  "key26": "3qehLwkcDQnaUJfrhASoSMZjS9XdctdRForyw8DXyzAjhNs25GyZzVRrKyHYbPRxgziGD6Cm42783CcV2yxJKARi",
  "key27": "3ox45K21ACeSHAnwUqgUg9Znxtxj2NzgQN7zMfFRsyYXEp1HtughzWibCQ8nF2qMoZSEYmNvu4cJ47wxJmUBs2qb",
  "key28": "3fh84gzjHyJqvCE7epHMbonvpvQBB9Ys5VV8vVGij3nCvPpa2BQwf4Sn8s2nBHmTxLsBJVGbpUVYo5Rttkknd9U3",
  "key29": "2CuYiDkEGNxaggxhoRpdTD9ZrjXpkefQeJCS2ruERctJuuQ4BKs3Pg24G18qM1D2xgfrR3KtCtayGCaXmEoxWH5S",
  "key30": "4Q2CfPpzS5TdbBtXoSboFSQCf9XrakcUcHG6jk5aEwub3R8xsxvYEoRuwFXHa7WEWnRsbXSbKNX8edpCb7qxTaCH",
  "key31": "4F99B9Y1Pfvm2C4yRLUWChPD5YnCeP2yqqcABE6PYDnVUPWrW6AGvZABiFP39CX4voekcNnxgBMNpsz6PZzsiYmN",
  "key32": "WJqNQVXwCgeMsXXMFSmzWzSve6W6kbm4hqbjQdE1yBrV6VkKXd44QFG5S56NefaVuB4ZJ3SuQgDYorvydHPjHv5",
  "key33": "fqs8ukQK4oFtVJuVypgjov5W6pckXDMu3VU5gzTv5FmZC15JGH5FtH1UZwMgV1Z6P7JDeNMJt9Ks76QxhqQrSpQ",
  "key34": "njoCpM4UBJsFhUSWWbDodyZb3a12f6xqEmF2ve9XmXrYJK7zqoDsUzdgoYTkDVzY3ijABqwupXw8ArS1k68TBED",
  "key35": "FFUPQhGj1VZnj2Ba4xePYgKNEfzQ5zZ5CKj6QztDELtNRuPFgvxvtSATscJ6RCoJwPzrLKnjbwDis8tWFLetEyk",
  "key36": "qUfmoxQaGPUTyEKME7HuNoYLDqex8ZNr6SQdsaFWdWD7JE2CkNqKf8BiTw8nwaDz2H5VczL66gp4xAa1nMLzvxF",
  "key37": "3aUjN74QgbuUDG3bHZS8tFx3PteXLg1Nyvka6tPuZt9c5j3RG6Ey9CTdE2Vjapb6Qy48mg9WzdKPpo4SKGTZwsBX",
  "key38": "5wiNp8buj32iMXf24C5r7RHWyUtdUwV3fe219Gqt8BSpq9y7WMFxNmVCsyJtruDr7wci7adEc8DizDFGonxqi32s",
  "key39": "4zNCjvuxXJc3XtMvfoCT3X1y7HgXtZV74VESbtrSuUmGgBYHnSo4pnWy7sWMCSHFFQEVMvVegMHG3qq4zQexpkHK",
  "key40": "q6Px8EQfj38nSW7rmaGGjg8MXtgGxxQLG2WAux6sYdcHVzGq3YRN7hrSWTtBcXDPo7dzoQwqqyikjQ1WyX68ELM",
  "key41": "4rgJK8TB7CMjJudyh9w3q7Jh5sSpawbpkSJ8MCHYAiQCQa18KUSH9LtdSkmrb9BM5NxsFEEstntfzps9SR42MdxR",
  "key42": "2DpJXG6GJZX93huexzsh2YHx5PGXC8Xviej85YFHhHiDNuuxK3qveSq8cDgzQrftYVGsYp5DS5TVWna3RUzQKq4g",
  "key43": "45ZoCCk22YDzJ9neGNTgxUie9FmTJazWKtYZbMKNAmtysh9wC3CzhgnsvcDJhwkk4D1uAZ5ZT2JgG47GMkYCk3Nr",
  "key44": "53E5vH2UvPMG5KmBFEvBgAiPni1gsLVpPp3F42XcJTdVGHt1CkZDHxZu2swPQwLdMu1yUMXed4CBZPYtsfDDAC4j",
  "key45": "3PTG7yMWa4Vhw4HsADWVrC5fVmAgYZKSzTLv4dTtcRQkDSaURZN92fSyaZrYgZPPt3KQ5murotMHUrRm4CUUPkbw",
  "key46": "w8y2SSU2AYBt6YRrpzZznGHap6UPttcSiPjpXhgVMwP5Tqe9QCG4ys6aBtV94wxhgeMTEvginXYmRbVgkJ6uYmy",
  "key47": "4Tph87cdjWfFZaUa1ptRLzJRURFXAyfLYAgiSHnPAxASu88G48G4Re4o5xgixV9QEV7MgyqqpWx7JkDPYE1WaL9a",
  "key48": "29edLVYBtXLpRUt74gKEiabKHKfHU9PMbGi3fzuRdWYSjKSCL6C7DAba1cTUZQV3D8rHoKUGqeh97CkThExeZiWL"
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
