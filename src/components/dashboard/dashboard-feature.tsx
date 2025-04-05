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
    "3joF1FTrA52YHakGUr7N6Ms3KfuQvxrEFCigmbd3N3nUZ6F7hHkw2EtWPCfHdtj4s2q8Ji24YeMQvQ24vd7f9833"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pfDfUiti2uQKquFZC9ZawujXxhzakjyCXsqupEBArTPSvrEGUTs7mSCQumewvHu5BZuKBJFH4DutC6VnpGR3Vpa",
  "key1": "5MDH2LWYn1VxvYVVFWwtZ1BsKJGbGkYTmFvKBujMMJwJ8vKabrcG32Md19q8qt4bLgMg8E3x5d6pDUQXbaM5Nu3K",
  "key2": "4bkbNB6ufWnP1WWUPJU3L5ZXiYyKvjiP29UMKvS9bT6MtPTugavYwbn5kWtYmb6YsMME8W7bK9DaitaPce9HcqJx",
  "key3": "3yeVmLzWrjCNfXSzymHGPQEZV7K1Cf89YP71enZJpe61tS2PYeHY3zDdmrPg6iBveq9JxXxxp1cT9VQY1uKaoA5g",
  "key4": "4o5gW4Yyi8V9qsUcKoYHNyB49XZUCKi4GgWCJ6J7i4KdsK8eAUnED3fYnSZgdc17N7Z9ufekKQEcsHC7bbyef7mc",
  "key5": "23bo519QVaRzSoe6qGjoGWPgZQZhZNEC4rrEJ1DJUbT87VwGFkSJoER2XtK5Se5RvyBq9i6hyT2FtnLhEwm2eAAx",
  "key6": "5ujbrXEciKK66QeEtBfs4Bnq15zJ4pp6Ea4XKd88Hk8V4T77mosomWwHEjLDumhKdmGLKswUhdMwGoQDoykUJrCU",
  "key7": "3EPQmK7evLJWKPT4Xude61qq8LbShzjb5P9uYBaTkGhEMMq6komdsXyLHQHTuSVQBibLLVqAuFuERTPr43eZJ4F1",
  "key8": "36wjxVmPLrZ5a2wwx2XtWkoccSLMDWZjBxnn3ipVSRWPRwPwTc5BbMJF4Lbosw5QUuskGDXCSDvcwed5TaCY4J2s",
  "key9": "4D7mwyXGsjvy4XGbeF2e4MQdC5FBGgCJWfSoF7rcKqrbpLZUETSWDo67tLxurY1rvyCkjCgrXUv2GNBEDFzCmcyp",
  "key10": "WNo7Mj9D4MJBMYpxx5FF9NFqJqd87GzaQyTTcBdg9XpYWzjWmepw4S69AR7oJf2isgPwbZLUUU6UtTVX6e3SxWx",
  "key11": "4QPDyPNV8MzSqMtAzD94zVE2x67QgzkaXs8ZeWzdMXXEfstisGWVsSLEz16xpRrPW26eyE94DqpcgNdVrJ48DmQc",
  "key12": "4Cra71QGCRUfNiykWjXtwbmR52wSbY9Zk2ME69o2EHUYreEMvdn4KXaKGbrfGLTvsQgheYJ6zNJWmBNCmwZTMsMX",
  "key13": "5jViXBEyfmZ8MkpH5Ccvfo1VTL5HDnP8M5YG7YmofWeWgePbVCQvVaNPHbTYd29XYJNVhG7xp2ySVxHxZ6CFX2Hf",
  "key14": "59GrmSNvqSyoJmsSoitPQch3GGCMfvQkG3uJhwAH9UU7Miujg1zLTH84621UsmC3yEbhKR9U3oe3Ej5SzpeH98jt",
  "key15": "5DWQzMoUnG3hWoUVt3Tsz58es5k93o7myq4gvCHmLyktog75xxciATnUgoLb7QgKJofyfKpPtm2Rsi9FusHwsNJs",
  "key16": "44x3ZQJeweqe2r5LiXNjGPuqkTagisNuWC3ZufjpdCudVhKjHCB8RPZaDetS95GfjaAKShb2wjPsTFHeQ9XMBg7X",
  "key17": "5B9dLN8XypzSXVmN9TixWUyQ8juDA9CwKpb4na2B332ns5DYX6FC8x1fMRYwYYBgHFJEpz9zgF2UuwG7QLRVSWCK",
  "key18": "52iY7pXMAjAsK5jdkDmTKAXep2p2EK82cgyoJbGjS8L9xVmQfAbQmXeJaezFzfLboKjSdL7685gra6fL69V5qSGd",
  "key19": "5FBZEQWT4VnMb6QN5i9vF4mEk5JzP4AUrk3xJ8oKea6cJQuFKXcMB1Rkhrf1x1YkrQM4FgkhaHaohEqxHB7sANHs",
  "key20": "fqy4BBTmfmE84FAKTpeysU1HWUrEKZeue2oNYEwRKu6jnpeWDavkVmX84ah2zG1Q9xFJK9VeuF1SD5uMhTBtmoL",
  "key21": "2AQWaPW8RFnHkKiB81qzpn3AQPzYPFHoYSNwoYogTYTSEiMFRLzz1HCEhbJZajZKc5aWYGctX5EXA2aKHKf2p7oE",
  "key22": "3J8kjoQnTfgURXsi6EwpEe3efU734iZcYvz8MmcLLKNEJnD78QRd2CYAHaSEEXSejKQufUHHCsGMrHNeudS211PY",
  "key23": "5skxtVfoG9axxSdCZP8H9MojBUCjsmGVuq9JQdiNCBsAKcbQt6LEjV7oBD2QvviUpSJozdpQEpuimPwWdfd75Rok",
  "key24": "4bKmRqrVLf2urRUWFcKdwmU6qERDBQcLzUC3u2TzeJMVyvPPuoyhSNe6rGQXfpfPhercf2xEQuCYdrP8isBtKDCE",
  "key25": "2X1HfYcBNGbU7PdRA6gDBsagGqiPz9dnTEZWWzv1bbbnkuKUBLqGE2TQsA6Vip2spMPEZ6nEb3Mt7VRRRRCnLD3Z",
  "key26": "389nHQgQUWkLS7RAW3Qsn2dgLTJkDj3kMbZ8MQrL8UiaDv2EapTjQ8JQDxLdk7Uxn6iPJqjoT7K93fGi8rv2brds",
  "key27": "2R6DkhrBjYj5uCmt2cxaU1CsufJTpQvED2tUspD5ffLnDvwryv4DxhGu6utocMVkiSWzZDUbqK6n7kMorSwXBqov",
  "key28": "cQjEPSd1oUnaxNfRERjEEhAaFpTxx97sYTyPGW5TAbDARDAXY3ck1jiAS5yFyZNku3jTjN7qXsb5iyRNazrTqg3",
  "key29": "GNqzRkZXpMSMdQwP8SKnEJyvq2rkKYRgS6u6DWumtPWK5E94N838csJeZn5wMWvw92KvUEeBNdJJEf1hqHuqQpp",
  "key30": "5BMYidj772JocZudghxsNeVk3atX7LKnNJN2UM8D1cKmtUXnY1MBhaqspg7cn78z3nPA83zGb3twc7QR59y6YCSy",
  "key31": "5kmMK7e3CEaqCSBV8JZGTNpffT417G8MDp7rT23QG9e9zd4BFXnjgsDmZ6ESWDpS9gRZn4M21ZoWioB5aW4wodtR",
  "key32": "2PVjYK5KRcqvYhDppQ7mnXRh5EYS62Xafd71QaU1gdW8n7WFg2UFTZU8C1FysSk9KspN9G6oALtuUhJ1MusG5eCU",
  "key33": "5iB5bbvYpyNnxrasBBURBbc729xC1A66eetKPuhDJhoqzG7e4cpjVKncVQMwDAZzKmdgj6zUqaamtMhp17PouofL",
  "key34": "4Q6XQxtyKDYc6qKoCXLXcjdUHzJaEzibCVYwJm4p3VQFUnQq2Qyc8XLe6rZtevfnXGDa9sFTcojXxNprPgMLbbww",
  "key35": "65tAM8scHWzKm2yQnfEq2Ng89rdTyXgy8eZGxrA6uzW8jFbw5J2qtwatvwyLPPWrXh22cZ2wbCLFRs7auHLF1SUb",
  "key36": "5prtQ4j67QaBAqYqLkUWqGj25jbzdpniEdXktkhNisfWsrpMx2vLmvWcaDZsCG8ZU4RKXrU6vwKnwapquZuQH2EH",
  "key37": "27ywd9aRFRa8Sk8hFabdwip3gE6sHWga9Ju8CCLmmRKxXLzHCYCmnUe8KX6wGqYbTqQZHXkz2ZGoGhbV9HTAEy83",
  "key38": "2kJJALGYqfAymB5rtncdDySk1CNMt5CWNDoWj7Wc3x43ajZrUzr2XfwTnvhr3rmKhczvV7z9P96EknMTUw6tUBzr",
  "key39": "2Gc15JjfNgRiqTWBE5KEzL9JhEmLNGbx7kA2cJear5WGmTG5HHELPoPxTTY52FaSPv7QGhij4YND552beu1dzRmF",
  "key40": "2Ev53zeNRgeB8kdCijgRppYjAWXYzY6qjc29EqNQMumsQD7PpivjmGfz3sC1nmQSBKDSxPHeJaLJQEeWGC1u62Nk",
  "key41": "PCmNqdx3XzXaoH88v8h36YxvxPa47YdhG4mNiqgs4D8uf5B7C1jZQoNXjzBALHjainAoigQ7XQeW2n3kti5bkcd",
  "key42": "4kz7PQ2jwkfDv3DLw428g7kRgbCBrdz8GcWZMDQde89aWvqag8sQwepe3AWc2ASFtyUcsbQUYSP3h78dU6RPdreF",
  "key43": "3CE9b1jDtVUG4uVU6aiyXw22K69hVAxFB4Gtd25BAUWYQPqtJRwYsghZ6KTWQxQidj3CExAhrB4V6pgGRF4XQphx",
  "key44": "ERbN4heU1K66Les4def3CCySZWywdwziBoZegssqu1wHDQFLPHgeBELAxEwkf7NzDB97YgRqoZG9hB8FYWA9UNi",
  "key45": "2ohcgm3RKZ5m7uX21t3qnhetTnesXjENgTkE6yozE3QtmSuFMMJtozCX96SdfwiTefyxXNTzt3AA9JhE3KB27EtR",
  "key46": "h3bPHZnbhdMC32any4B536MFdrVnfkodf27H1oWu2Wn1MU6EAvuui5T6pupGrZ6ytXJHRGowtGASfWsM6UySeGC",
  "key47": "5bu6s1rMszcnGJQQkjkjPTGqdre6u6N87rFanaWr6nkhnwFNdKsAghbEHhH3NfcR3E3izVV1njKEsQ1HvULetU4k",
  "key48": "3EnBfjnocPJTdMJ5qgiWbXaLehVENs57sYKCBQvLEzuGPxpzkygebv545tZRYrsVyLT7T33jutNwp2PUz1ie8j3b",
  "key49": "5fD3ry37QJqxCYDKyyooi4R5akSQ27mw4xVE1hmBNrFMnWboA1TUMsfHpc2pSbAgJMfkdk5uzsQR4VVXganT6oFD"
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
