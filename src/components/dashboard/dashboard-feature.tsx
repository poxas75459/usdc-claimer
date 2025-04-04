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
    "2AZ38mZMwTKU98wPsdK9U4ZpuBZZVuvF7CABeqeRAQ9CfXn3wLRrv7RfwWFXYbS8EgxhRnfeTsCJpwB3C8ZtYBDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ofKJAQYJm6MPGZj1L5rBkMFUuXJJNkGSCuCsR51R92X4WGZFRVMuYT1t72UVXLaD1pwJeYNkBEmRA72nSpEnd1",
  "key1": "4Hk7jP8QS1NnooLTryPorgSKVp1rnrXsZdzgidK9sDKxihdosDLsxWdbcpcT1zzvdKd9U1brqTizKUxTjYAq13kn",
  "key2": "127qXd6MPoQT6c3bAGqrcMDSRaq6BG4kqGsDn8GgBJiYDvdCMxQaL9UACGTCNtXaiMTjni6sCBCFsgPH1cVePqsH",
  "key3": "a7qZKUa15pJ63AJgwSX5xmJY5r5wpwEqPBaNJeqo8gBLdDyvthcKaXqDDLuyJ5KufeU1Jtudb3B6zsbzPa6JSf4",
  "key4": "2q5TATp4EeqQPDsRV24etrQZNf9749W4AyWQDY7rwCMVouddmauKYKibfAJZnRcjjZpf9AZQDsEEPufmkviKE4dp",
  "key5": "5KmPg4Rmbt2GfzcpXA3p4XjkyXaMaGF4YcHzqyhpENu9xGNChTWZ9gN6rB4zcbe2mApLv39pPoKuAD3zUTFpGqnC",
  "key6": "29Lztq3hwGLt1uH3xqFTcZDjdwSUxJVpG7KGFTFZXWokEb79eckxPdeFRF7uTSV63zZJb2YMeJPGCUV4xCxJsjhc",
  "key7": "4ZycmisGuEAU8higi3PZSVxN79MYRdQGqeVibxbrrMYpd2MR3qjCis2CrwuvwzcJ1m8hPSszhqMKQhZ6yEPV9482",
  "key8": "4C1kRJNyQpW15TwYdi9ttiLJ7NSZj1nn2FBxb2FzRBrXvAFtFjcJrWaQHo4Km5CUA4qUTMx8dyvyyFyKQTEse83Q",
  "key9": "2UpgdHPvgSY8fhJiwqnyTjqMTek9t8LRemTgUwQ1jqtQZ72TRv26usoqF5Es7UqPtw6nXt2faC9vweFn75g64KH4",
  "key10": "2UQXE5BQMtM8ERv8GKFwtBPp7dzAciKtHPEb8ZHN6ZUZdNmDxE3vxJamcfn2hDj4QMy6qjgFpHd1qf44vJKjt4uC",
  "key11": "5quRwaSTFeegqrP8q731jimDhJafFnbZ6HHdvvKdxfLvSdq7C1D4VUEe4Tb9pQZeySeDiX2e4XvzYWahHCBcko3G",
  "key12": "3Hvps6zAizd2YfSraTrFzQFLmp4MwyjwmFWJeb6r3uhC31pBDa7a112J3QkrKseexYrt2TNxH9JwQifmCLCY4guV",
  "key13": "b6QtbsN73eVSzR1Y7rzBqS2pwrTJzE76cwxTcLVyiXDJ8nXeByQkGnwU5eTTYwnL3GoWVHfhq1rWK2DU5hEtCp8",
  "key14": "2caWTHaUuN9ifntfu8d1f2tcrWwtsMuspaEBPgFNzXcPMKcKyaSNoVowJrzxhQvzHj8S8jLYTTmXsdwSoaPyZBsc",
  "key15": "3ByDYHzVHoZnZp3SV2tyfVUHUo38xxAD1pDoDik8598jzfvuiedJaTjcxRetYCDx5qjV9kXnbYt5fytU4B2Dzyz3",
  "key16": "2bmS26Zs8fBGeUeU1CekmHsufWhWhx2shcpLy6Rc23PqzqykuQskT4chHY7evEBtJ9rrvTUYfrHKuibET2d8U61E",
  "key17": "K2FiRaH2CwhnRRAHvuh9WSxnXLUqD8DrtxkMFfAFsPfFBoPuv48s9RntFiXmr7ZijbUnD5hwNWzctQGGcVqqUzt",
  "key18": "UjfBxViZ3x8yXpLy3p5HZYCLC2X6ziRNYdFDPwkpLCpzoxoipnCC1u5KDUSGAewT27qr5wLbMV1Ly1VaqdUcVJS",
  "key19": "43QWhRX2tbw1uDpsebqPjycB2VDeYdotHeLcLNpr6NyEvgVTEkjb1wh3sSMHnFU3FQ7uGfR6Fuurwr2XTmwSvqux",
  "key20": "1Jd7yycyJBvfHVpHhQPLFVZLxTCprKq6SP1MgHwubtBUqEGtzz3KZmiJX5McLktkW7GKnf8e3P12KXVp2SpEvYH",
  "key21": "4PnHZak9VVC1CtypZeSMLkedgiMkkcKg7vUWvhxK8Xk3JYNAu8stTi4hvJFN3EpsTz7zcuMFNWwtNWFK3vQsaNRg",
  "key22": "abFeVxw54j4mBnF5rtEdUeYNjbnCiJexLw2MLxeG8Pbuh8VP7hvsDTw1kJ514gQzBy4DM2sc18rq86CjqTGCPoy",
  "key23": "44hehaqkTdkNWNTvGQLErQPh2UUamiXostMhX5qBQRzJUbM9gjDkkyyozxo16Yg78uE7zXH3CJ7kmNRUFMjWVs3f",
  "key24": "2o1hjoayHoWZnWp5rd1VmbX92FvnvLrhg3WmGSyorq4kyvZXtaCJync8FYrFNXntdtPm2TSZx2cDdUnMszZazHHq",
  "key25": "fsJWDQMtf7WakSuUBWAhD1HkuQcLkUaE9UifSPDGUfm9hgoU28CryFoD1PLYn8SLpAATLBr4uZ4VWH1o6YJx6D7",
  "key26": "259KtRWASCVPZuMH4e6GXoCnH6B7jTkDmUQLDSMaiNugJEM3kZssgs4RrdkkWNnMjonYbi1ZGbKKbnNGnqLsNKyP",
  "key27": "5vaJ479dh3TuUynfWNJQnz2DyHEYhkrDEr6NjrJy22XTAygtFKvMGHQNTiRLoigYUEb6h8eNooau3NayzS9uKgEA",
  "key28": "4frtPg9dfGtptyxfCayqECsajbbr1oiwdQxiurb1eXnDzZMrLuHXnH96pNPeZj9xzf8n2jpGTftxU1NJ5aVedkNG",
  "key29": "XYKMBSr1g9ZXUEphYFFr2scyPbsRs7Vty4T5W7XHWGoBNnqZ1yAp6ea4ehQ9qV4ygXUtj4taUkddEAtADStYXeM",
  "key30": "249rzsCwUiGsFUoRqgYQeH6n1SQemcEMAHmCrQMcgaGBSDmPZsMk1THSPHqStN1pct7VoGaXoGeskiLrKvEiM8Ef",
  "key31": "3nQW6BMjZe4QmTGubaof7L1y41ifo4aDtKrMvDtch2jXT3gvyPnpgyk9hVnV6UAFa9kEUkLaDeocLjxwotUrerB9",
  "key32": "3xbgf3DTpTVKuL29pnKrsqxCLnXwG2FFxUBtdEwUgNCp3nbuBE3XikfTRbCneVnXCvdyPHDV9Kq59qY2vbGdJL9D",
  "key33": "3uVEjCmMKUP4S8FHozGQwt74jP3A41Y4YyB84xmT5jS4o65EiQhKeQtbCCdXyzLT7QASypLND7DxYdegW5CosJWE",
  "key34": "49y6ZUUqJf3ekjUJ2BRuc4UePfiHyANQ6GVTqoANEHvr5xDdVPX7zbVDWZf1VkSoTinVQg8HDbZKGx3JScbpz9wy",
  "key35": "5masKQD9zVt4N2ujLnajuwChhJkh6ZWFZiGPEpm7QVTJHBJDDDbeQidVvQhN9P1HRMSrXuAettzXupRC3WUDEdcL",
  "key36": "egZgH6p1UHKcMbzjmgG2uCJps2b23x9HErRvBg5SQr87rV2kAgxu6hj5AB9Lp3Wxd55jdiGHoNKiVj9bDD9vz9N",
  "key37": "YWS6NWyKqZDKCfK3zdin9bJqdmWF3UN1bDBRmzVKVN2MoZnXfbhYAHZX7V6WZwUXti3ThopZfJYQ7P661BLigCx",
  "key38": "41dqfcDPe964E3kFpfzZoGh62Sv6efv4AYkYHAJtoBLq79FDjpG8azUNAoKnybwGa6Ra9FMAqgMBf3YcKJy3u1cv",
  "key39": "54ifq8Gt698ZuBKCuJLRs7VtJaaYCjKBCJb8RsitZPRpeTfsr9U48hXYBBsB1XYGhaH5oZAfmUFC8kXmJQGKjAFS",
  "key40": "2mRwHPZyEjDX2bTWb1wH7mvb5q2gSy3vJo3Y9tFmtgPFBrFpGT8nojkYPhgU9YFawXx4WY9rgUvcncGpXFi9mBTe",
  "key41": "5spCAapLPgk8jYyqb3b5apeYNeSw8vJZVZqn2uuuGDWY4139KYe4j7WzENfbw7577mZouRkLH6S8fCkrzJRBKsbZ",
  "key42": "4jyvu2a63D53GHRueQmNrK9P3kqvGyvZsGcVkmhoHpfxDN2gppMVvibjp2WEvFXwXDA459MoPPEhBfPmeTApnhNG",
  "key43": "3GAGiETwKFKki6DPzJXxpxfWWtEzicUvf5QwvappRJZbBj1CGg2ZbR7eXgZVwwAxWX6TrfdY5RetiEKjfrFUZwty",
  "key44": "4bjiAjP3M6h3tFeDF3f3qAz2Uxz5XFCeqff8PHZPx5emdh1xjqAgxBcMXi1fs8ixU7Arn6p2TQ9aNyRYu3NfXSWZ"
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
