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
    "3DAZPpLWhYZ445cMpRKX8wZmfvf2JSixueU7wDo85gJ8EsjZYcGfJo3NjLoNQDwaxiaP8YY3piKCsN1NxxdDJhhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmieKrGtCuH4ivr4q9dsi11NFKGgrzkKFJAonEJhzmiv1dE5Rbdbf9xqLBTdLxCc7Nzv6QEd4ovXsM6jq8iYPLq",
  "key1": "28huPLJFUnrLwg4mba514mfYrSxFd7PVvJusFapNbsVwsiJKvKdLoVGRwRkRXYu4ivhvKD2mUKtnnVGistxjyRAg",
  "key2": "2XywoU5iT51R71rnovYgBWQU4huBKAh8H83QgAEXpqwHNkMFKGTzChnSJwWfhhjkTZAJ5fDS1WA9cuKrya4M5j75",
  "key3": "51uqRxKrkYhK7PpiedpAKTDWn3kwpnyjZkuydLLep9Vt7xehdEJAQj3DezVuep1i4RdiE6RLGcfDkn7Gmy4BdPx7",
  "key4": "5rHp8qhyeSKyCaCAoyoaEP8GKnZSmjQW1FYqQRaAJCCoodZLqapFSXM79KgmAEWEUdw2jb5VX3tcpyYkeP7geE6",
  "key5": "4Hk1dnug9ppzk4T7SHrtG82TgvnuvDtFsP4M9eR23FSmCsiujAXvLPPxUq2JyBqytRBHLoNganuUspAa3dBTtDWH",
  "key6": "5upJMVdpnsVKxBjEVp3vPm61uZL4QqaLAqUQEgimMSEo5a32UzRFYZQjTZwemVPzG7DH8mxqJskxtHEwpuiWJaa7",
  "key7": "BfkJhABZMcygx7CjL69vkNGoJf4UYQ1igC6Z8kBgtQBsf9EuTswmj5xFDzn9ohA9FXzr47cNaFbmfXQSYQJez2H",
  "key8": "45cYAicDcB8SiR6LMvyFqZEtq6BrACrBEb4idfx7CJiYsdS5cEc7cHJx1PoG8MWakjbqMebs3YrQ5tSjVe16PVXU",
  "key9": "23nwMqJGSoXVFYQXh5ivTnr8V1i7b12x23LhwsBZvKLa5gSNuSBmax2ic9dNc8CwtqY1ZPJ1cwnKGspLcehxj5ct",
  "key10": "2KbFd1iTukSGR63rDAS6XYxHSY3pj8cHGEEtGStG2Fs8nLUzQd38sw6xHYXTS4GbWUHq6Y4MWvC4NAWBQAW6JHVq",
  "key11": "kiXk31vd4rhBWBRZdapK8xhGfDLiPKDLJ37RZA84yzdWXVCsnszfskFyYpfmY9Q7yJZhobxBdNGsQY2x9ZCNERR",
  "key12": "4ux3UuuzcsgcFzoPShSnRXAyDbiLGRoX69yjSARaL7ujQau5x71RXe6rQGbyriJnpDeseSZoCfKMXZTANALZV7xJ",
  "key13": "3QCfmmCVmRfoiX6EPePgt2nHercckPfyCnEVqbMv4J1h1VMGKb6XKb9swPnifpQxi2p65imoZWJATyEzKr8UaAq1",
  "key14": "3pbyshDj8vbsj4ENLgbcNtY3BNhstHNhnVaufiHBZLw2j8NHZbFs3SqVNEZ1rCnGKNuXVZjp3F9UY5AjXBSZUWtC",
  "key15": "q1rgNQmtH152ALAQPmf4h3DLZoSE4eESNRrowdCgVGbSGGyg6BYE9oHrJcuRQi3C9gbNMVprVz29i2sntbsTRzz",
  "key16": "4xaXBEAL2F2dLrGem7ZzaX3c7G7BW3KFWPwjij2YR4E3uvs5JbmLnsgW2LYcqZ4AuRVZ2c6s3pMESpUgG9mnKAok",
  "key17": "4NQJhdMPqR47naiBCsvTG7GCeDqefPtPaWNhp7oTNVcANUyVpBfuUpnf8FfMtLCmhfDh9pRASTsJeFKKtmXJLRVd",
  "key18": "39JUZpDgLxNHx4hPfWgzjxnfzFsnq9seWfQWU2dnsenSgFuQoaCP2V5HP6ibg4wQvfueDaG7qMX9iL1S8zgGWd9k",
  "key19": "38ZCE1DYFVqiKkob6WmV4PvzWXc82xtqhR6Yu8ZZX9NMxcKaHX2K8eAtSkycKud7u5mzU9dVMRtuDMZwnegqybC3",
  "key20": "3k3ZRbzqUUrPtvpRCqdmCDLJZGDohtTpJ64Hzj2S9WE7fHpFPZeN6Ny5NbNzfUvMqJ9q83nR3cubTiMBS3mqhaw7",
  "key21": "rdG6a8CQEgkdt9uaemJF3NogjhBBs2PRKETbWdYYvAutgzWW1tf3jxVk2oGDWHUdoKYXiqZM5ZGTgJSZG7Tobqo",
  "key22": "hn77Zcpvj12znhtPwUqVjhWznKTiyB9UaWGJPaoxajnBjjhS5WpeaieXGAWHjAuZtAk32tsJokmx4fC9GDL4gEu",
  "key23": "2hrRSrMskcEeFneeARyTT2mzk2tEaavCmZuiEvE69Us81WYdx672NEmnW5XK9Ryid3rRaJ5hn4dfzvziYAmjf46V",
  "key24": "tLmThRNVCYHg8yC91uWSs3kiPGoC6BaXE4w7h4N4FV7u6m3GcsqBzYjs6azFvxngPhjb3vz76XkAPgBe2SGZsYz",
  "key25": "62yQEa2fhhjFKpC8HeQyHdYSh3nawN8hF9BuoGFSNtFphUvYc6VGBvhW1TwxpE1ve7LPQbdeSa4ZQuQiTZFeVLju",
  "key26": "4MBhKtRWPPhQowgEz26ipV7PStmFcCdCCVi4FKAaBhUEiKj96bNn2CtorJpksTBUmb6RvY9kjNKTRTPBWCpjCkEb",
  "key27": "4Fq3QijvoDDtzh5bRuStapSqsYzeWVnG2iNAUp3tBmyuBKrF5SB2khfaRCEMnSzSFNkk3K4Biz7oQiAMqRRoHNoE",
  "key28": "3Z5ZJ5k2zRpeLK2rsZ3zucwzG2C9JvtgmF6m9HWYXXwqeEdLS9fEC3imRYViHkgWh9fx1HNtoi9JA4z8BpYkisW6",
  "key29": "3eEyeskQU6MckWP5jfen6Dr2rkzTjcFs2R2pLgcaSUaggnAMGX3DcEsA4xLPtVxdVywtSuBsnurzyk63DpGN7hzp",
  "key30": "WX7eK5cps1J1hpzcxNi6x8HX9FmroPkQnbjyQZ8vFXWex2r63GYjUoUHTomC4wqP3c1Z5gUPQracSbRXfQrAWC1",
  "key31": "2dQkSQHFWYBQkAy8sNGMeHyt7JkNhDWSh3BzW1BXazVdiPJpWBozT2KkgeTf6JNwfEVN9K6DvmqZUWZZznyiRfMK",
  "key32": "3JEiNw6BJZ8Q6Dg8VPiFQHTLDAs6CFAsXCSXN7ULJFsdMhoQYDtFCtoVnHiKvsq7GBYH3756scFRsXBkQFhyELhA",
  "key33": "5nDeV17TnQ2tnUSEqPgmqJNiuXWJM8AsWpWD86MMwiuTeZuoThWxbqMmbVzUGUiFeQxfBK5e3QPsSUeTfHqK6CJ5",
  "key34": "5EfQ9DfK8GmyYSHvsWyQ58w7vmofL779H2UhTEShswCJN3jNyPjTmjrasJbkMArzyVfuBh4qxnvKtn2U7fsRYYFu",
  "key35": "2ME5nTAJN3VnLuvWEQPpL52ZqUCBy5hofSDJn1UnPFjw8N38VJtwXvX6wcGLiew8iNaN72yQaE3RnHjMfip667Xh",
  "key36": "4pPYiY2NhbfgdqXTyVg9PDPeYvTL4nEKi62EYA6veU85Jgpr3SDQ65faUJm9A1rsv2rffAo5Bo5ExVeZZtTrUnq8",
  "key37": "34Swj6P1gnAftEQJMSNQbxZktiQUSGAjz6oRobxqy1R7YUZvQB1nATqNf7QXrVR8fjUebZCesW7MXLkNaPudrgkX",
  "key38": "FPapndb9H5n9LPz3psBcuqGKzEAUKQsnrXE7fVovpcdUG9fRAfrYPHLkpF6XsA82NgxnhN6L9LzSHGEwzrA5GLy",
  "key39": "EbFtiEj8BYJVNmVkUBcVP9WXVCABoKdxKkiCYzLx5y2x2ZHGVX1NqE7geLxDDaQCdZEatUCQtcyetEsz7HEYzma",
  "key40": "57w6h5daf9iodyQTPQpwKqoZ7HRzgJZQuFfAyqDoaBHzxmoK5do8vHgptfrv8cWifNMy5QMuEQxT7gdgmdkc3nK8",
  "key41": "GWr4QJx23S6PJdvu8XMcAg5GD9L3EVgMePPJyc9gDoJKdUAGigAfSJKvHsqdWtPRyC46nFgPK9duTSB2dbDDK1p",
  "key42": "5hKRMSQ1xyHSZsNbUQGz77mV4RtMrQR6o3SbeyFSMV9hPrehmygqiG6ryQ9cwuPAviBS46g1bgMvvskT3y8r2Lpd",
  "key43": "arCozCsTAKLxd5t9xWVkG5zbWdB44Bk51Fw6NhZUhTJHCCPY4cYFGQqqc3Ct7uDRCyyX5oCCkGo7M2FNXUijacu",
  "key44": "3Tps3sBsZPTWUyjfXHGSmn17mfnrf7woxjucGNdozMTGVD2dWC4LBJnxRTv6gT4CfSDjmAtLPNacxP6fzJnmgA6R",
  "key45": "2zBBm4euSiiTQtgqBjakNh4aod4sh4f1tDaoqvsRPzEY7sx3L5YuUhjvEuduayaPkehNpR4r3j8FL5eaoAEoGx8j"
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
