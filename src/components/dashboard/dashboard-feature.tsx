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
    "2HMBkF2RS23DirY3f4vtzdkLCv6oDUvRK5VJL8jB4KjJKKQJBSw9aa7zVKPAyNkiPJxB7a8MG5LGsyc9kXPzj8TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkRDcjc5wuEquVU65tKhx3c8ie46V4dAR6Xb1tft3FBb9hkZ9Wn9X7qb6yoaJKbDzLwwgPLY8jtuiQU8BgvmJqu",
  "key1": "2jbTobkYfcNDYmFfJdLjT51rdsaQdWxWuXUyNr9So4f8ie6xR4rrRsLwR1yp3spTs3THjSwLxm3uEZrPRS2aCefm",
  "key2": "5jxXcX8D3otFkhH7QqmoDX4tZJ46a2mYzRgR9Vxd2y9AtGuyYogvXaX68oHTvcspnT8MK8xCyKdzxSvv4eKvMq3c",
  "key3": "5iTw1eHmhfuZrpFR6gKLCvAER2LQsf2tdRxnoKJaoTvEBfKaQ5QmuqiAwQ5FevBoQusoJC6wU5iN8uREhKHwQj8b",
  "key4": "4zeUd8VhXg1h15688y13s3vc9zK23oCuw3qBqCVRnpnkasgfCaxXVGGGEDD42pQCBBsyUrrTVEu91bEoJkEmzCj1",
  "key5": "5dnoCi4JZAPHdL2gLHyDk7bf4RGvuZqoAN5fjX9pWARTcphaMf8qhu8KHZqXrVytw9N5j3r1fCP3RS9oH6EdZrLg",
  "key6": "45rTEEgCuTtAnVxbAaXzDpEPRkwoY9ZENPDBvQrP3jZP9nS4xu5Eom8GkwFu1vcu7SSjzpgpuvaKN1qqat7qHaVy",
  "key7": "27xBAgSsCPnDiT8KjZmepYDdPxsUszgUp2erVPNDkEW8d1AHfU89Duix1MiHaiABLGwUM21dLLW9uEd64XiHi59e",
  "key8": "2UMMgrsPVWNq1182Av6ZzTGr5qrDB5hpRU4aBpBdvpi93GU4dSc42AWKmkpwFnL4RN5wnGYAzcSzyodtWUD687tm",
  "key9": "2vyUfuUd41NGRe9WB91Wd2DyZfWCzp1ovusgpACByK5cY5Uo5pQn9JSBDkvA19gpZDRpMjeKZfbTJpJ6kqw1u6Xh",
  "key10": "2m7G1GgNSGQpWJ6h5XWXu3T8qjwiYoKFzqzt4xThZMXD274bKc3i7p6RH1zip9GKxJbhpE2bQvdLTkjHRH3q6nSv",
  "key11": "5sN1jkN4CFuCH1dyLzucSiqCB1d1YKF6PR1nXsmMpStNV6sSmTmwRPrz6iTMnqPHMEwxvrKf1N5eX7qRGsFCqqEN",
  "key12": "2ouJwEq1SS8jYEirjyz1BTwp7cCux6YhvN6wetpfn22jE7k5REP2N2PTarcyiWxBNqquvgqbsDVSKHmCKfLyjnpc",
  "key13": "3pbaQRmZhNWNiiAfJuSA1ZpP5sSCmh4qk3Sy4xze3gnV8PrxzRYziEh4eUVX1dwthHrXr2eE6WtDN7ipmb2soJXC",
  "key14": "2Kc6KdDjuTXp2Wypi3BDKrjDMgcmfV6FfTQvKpCFi6KSyzfginQuoXXbLXwY3D9ihT1szNubLv3z44iekEKWJiZ",
  "key15": "23GeC9RNWEV78GoZfuY7o6v7uMHfajfVGzGNQMT2rzVNL4KKAZ3GBzWh4xkhaTmvpGbBfZp1GcFDP2YCzCgvdd4h",
  "key16": "3Su1g4aa3i8G4rekFrP9F6Sn7aoj9H3Co5pzs98uYd9Sv9oANaP9ymW3rSWF65LNsefq7rUiFL1VRexUhAQo7ZVF",
  "key17": "3U5JqWPsKdbsTp586EeZikvcuaLFv5wDcJADKeJfaAVJacvFrfxojkZNAgdjDsSRST2f3t9J34MxCCE2UQ9omTvJ",
  "key18": "DiiPTf7k9TsB3bnChzubD6jqYFEryK9a5XXGYidbVaNnEjwU31vj9suzJFfz9rWRyf6ZXtHxDDzwhA9WtYEzFcd",
  "key19": "2u2kK49ytyBgthg6S5Sor2jWFDCoZtnwLve9uASbZtKvdmNN7mY3qSC6P31fBGqybVtfak3u8WaBNWciz2yio7UC",
  "key20": "2o7B8PQMYU1GtdSG1Er8btfWFxnHAQrBiqTWu1o1e3wBxTe9ZV1is7Y9sn7sAqYKEUye85jN2jVFiwntzGJNXZ5J",
  "key21": "WVwHWmpeGQnnYKsK6oxwWcrdwhoR3zkNvbuHiRxiHcoKj6yNbK35ZVZQqWwBTi4fi8nj7Q1sQ4FMp8QxDgCW87c",
  "key22": "2qm2bgfsa1WxuPDr1ZHEd8xvtkmhuL5PaHnuPvQFPmvqqRpBgyjDJ82FExBvbeyBJp5BSYTBCHkQeaHyN3ZNaUvi",
  "key23": "4kjMm1xtY1CkiJa2NByKVRLAkrcQFGR9E8ZgZ39EEAzr6ZkrsFhnZTf64RA8kYZF1fVmjbdoDEU8BP4VeAYSrWXE",
  "key24": "33gbtDRP6CLS6y27HeDNmU3YdTKn27U36KzNt1FfUeBKJnuM6no7AaGaP1siRtGr9fb4xkJn6jCgBg2xihA9i3Xx",
  "key25": "43DMozuez6ZMarGpMAWXWnqbxodGp6XiRxhzZBSJGuggLCiHQnCKK31MMnFbA8FBQuNL6cQg9HRpaBz3hd4ZmPEg",
  "key26": "2gd9dBDJWkdmVxp71X2JPXpyFiuS5fBNCNsUQgjYgtaZrxiTqvvKrLtFiZW4uNn68vm9RGJfAcUkbsDjh9owowHh",
  "key27": "5xZPcaGQDRn1TjD3DR5qfjfu8hxF1nuD8Lnib9h2zWvBwzpU75bYS5TLUhLXygfNyLVpicjPfrm8e7or9STeHCrW",
  "key28": "4YCk6z24sqaJmsu1dDhWMDEAxcyrekABaztar6E1aTnRqRRohNKtEn3sM9oTWHjrnsTG2aBXLHsYojdrVV92jz7z",
  "key29": "28FgRAyi8kvpwjTvUEqptKeAueurBvbPAX3Q7KSvZn1qRoBLZQutK7RjWuHuhxet2u1TrBPF9ujXtjJpcTr4BHqh",
  "key30": "2gEZgHEA2UzhbiBqND6MBryq2U6YnUgX928poxUbczGJ8rnxMWM67p4xSL7U82GVwtUAKAzBaRfDePRE8JthT14H",
  "key31": "3idUcvy6r4gfSfWKMeCFhtrpCy9NxvcK5J1Lz36dDNTKxp4SXez8NqCEAHmNm4niveh1XDg9PHQHopjs4ZMnhBTm",
  "key32": "4GWtSeVWJK2yA2E2XoC8YQCE6ALbNoSFEv9bGUyP21NKXheVm1BfExXJyPQWzb4GLCts8rvtJPvYRikn7N9xSby9",
  "key33": "3hRj4JzCBL39T7bdFagiH99VbrvoxQN5kefxTHuNoZnEYhmCVankoQ2jz8mGuENNaYisNjLbMmMc2WZdJaMbuMnS",
  "key34": "dJg4ZK8FrvxnPKUSw7jvvAiAKKsVn7hsBJzXF7hWVQaTKrFWBZ3MoZ1ugmKKszr2QbKtsi9LkSMmtb8wu3mMCXp",
  "key35": "5LMBbLPQiPia4QnM9ufdqk9PSbJhEHgfLx5Pm5mgSxWyngiwtTZUdUNtpawaaXA4tWdZFFk5ncSbcrhpzpdTSFUj",
  "key36": "5pwHUQj8AH9PZjzutLYMoxiXrrRRPrX3Q4BSh3q8nMTqa2JSVYmCAXhaWeL19bz7r5XpFu1wSKFJhssJ7oELPLGc",
  "key37": "3vgpnzMHTb59UVLfjGikpgEjESRqx9MqhrZcsEtg3EXx8q1fGcGwcj2G7pfU2nh1e11Wqbc9tDPW63KA9mtMhrTK",
  "key38": "3JYXHFnMS19F6GScAsCbkxoZ6qWr5byZHDKuNWzdvLCJJDVne7yt7ApTGDXyYjpo7kL8r5ZZ7aiPn4iNkuFmSXc2",
  "key39": "3S6qsmv6AmcuhwMgyqRBhoGhTQmPrvGkDVuzQsNHpBpENPhpebfgshGMLT3n6nTCtm9Ri19EudLVfziKY315wXMv",
  "key40": "5piHLVaN3zgWMVrzHT579AkMn99hLjvXcXLbHZ2ncYnmnNSaxerut46T6KLB164RPfTfNsjeBLTvPGrhji1e1jKT",
  "key41": "3sNDrQP6TDKhLi8KyPBc2SPqu1nqJH3joxzB9znJ7KYUSeSLp1irV8yz2yCZTSD1hGBaTho1mFqAbmw5iDPfEZdw",
  "key42": "U2GQfMUEksgqGhfEvKVqB8CUsGqCPM1WMs2Uro9gX1X8sFaQuWtKKpYGmBqqSNLG19vd2cRtyT3UKHpmCm4giwo",
  "key43": "2eRCVaYJRGcGNmmfbFyWBjx3ThXdXZekzhxQ9jNkfd3JXAk9X2UadfADQ5XTMAojGayQk7SuDRzCA9Y6FWzPGGBP",
  "key44": "bPLKpYPArhF3d1T87B3JnrT7umeNaMVuMfBqgcypAChvz8fWaMaLsZ4XGh6TCyJpWkCtFqmxYtVfif1pGwrRw5d",
  "key45": "5WnsQCM5ab9kkJEcwWwRLJBGPbpd9Px8nM37NL2Sfmb4CW7iVErqiYQCTu6eEQNiSwSjKDSvhBCKUnMvHh2efbtu",
  "key46": "AbFNvYqpmrXfHmGw3DxG3WTeDC2ktBotznKWCexkbPergna7JmQwWKpsn5MFMu15NBmctZSb7mJCRzKUMC2UYHW",
  "key47": "5Xt3WYz3kZMvRTg9BVqqY5mN3phTwm9Sq8yXXebzKTRbtSVJXqUZxqENCgsvVLi4EpjEF47AUdZtnn4x1cLYZGdd",
  "key48": "4jbSNYenJCSoNDEMRBQBMn3y3a25KyntpXUmVKNzY5Egfmo3XUtGxNsHcKtbdA2BHfk5oPknUNttqLzQBBTufHpJ"
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
