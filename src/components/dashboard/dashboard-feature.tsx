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
    "jbP2Y159o9iB5XdWWbxEVCUrx1Mvu5svhiMxJaboP1vVMiBE268RUYA2ou4gR8HQxAgP4YststqxRAQXDqCDHUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMswaG44GkG2PENmfytjtvvrjmBapcBYcKB9MADrz5R3hU4MvRoQABCSGs89ph2veBzBKqahbPLHd3r8ebFEU8W",
  "key1": "3pDWskH1ppWogsMXZfuZwqi5A9eg9jx3Yr8aHWMZ31mGhpxfoHdB5pqVsxzTJgwx7ZoNQMCBqbZBF9KzKrVyTi9X",
  "key2": "SNUQjuDs9iJLNhxvnFRtdPyvhVnbGbj4vM3Exa3dkrEfAMAoFgb1SauJu2UWzgzYRWJ5WjroarJwmyYzRrfob7f",
  "key3": "4XJqkw2ZXzWGZrz9TJLVR1MhAw829kQEFC1o9uJEqcWwoGq3bWB5bTF8yL8xpZab2Si5c9gcL8dUBrdBpX5T4RoH",
  "key4": "2PBmjvAFUFoJQJxQ5HVaABvv3m1v6U8X26VUj8kHvnqgubUQ8z9PGvN13yatUZqG9Ax72qcmJWydktqn8rKA66yb",
  "key5": "5DJLN5VrSCaNwbdmpyZLXVVWcFzKrvkcvjvZFocKCy157WX6fVfkHEhzz5etE6w5vwAKagZPty9YP8oYyeMYKHDV",
  "key6": "2sdF7RANh76MU37JB1yg7whbesWBryh4XpwLLgUqPfSRaN74sbTLKH89Lout6FbLVKUD65YFeZrb52CHYArW2qvB",
  "key7": "3Q525zRHVBD4i5SoSQQqUpotCiY1jLVDvRgPwHfAvnKA7p6tf45NUCVfTeWVFev4nHDFY12s6UB2EB1Uj1pka9eQ",
  "key8": "m45Ndzof6vXrcLSnEgLBfmgM5TtbCZW95oKkaFk8HajL91g6i8xQv6no2iwbj213kvAh15kq5SpLqVzGmrTtFbg",
  "key9": "PbvzmXucrjeRJgu796tdHS4mn6C3oD3YAeCFa56eqHjPnbmoVpLo5dZX8KCJB32Ua6hGgtAzsWrMAyaMVXDE1hr",
  "key10": "fmtPncMx5DEPbFmH9NotD9WLLPBE4sL79smfUnVSrZk5Ba1UzGJScZ3RE6DGPUrGQYaxMD9LQ1pZZ5oL93ErmaR",
  "key11": "S2ceegSQqKpQ7Kw6ZU5McSKjosg4tka8bgY6EXHhT4u6LXLghBg99nWfFURKPotX5przdAvAAk8yaErdMxYRhvt",
  "key12": "5jsFpHEvw39a8HHiYRr5FKBEB568cH1gpgb9bWa5VJJp7d9pSaHEH9NYY9pAUF1xogTuuMhcoUzDxqHUsWSd5YiS",
  "key13": "28onCa8uzfH4hkj2TzQWZSFFvzx6ysH38iifASGW77kvh1Jm2SVHWpgDm35BeHof6Dtq8rzHmE3XozbXYwZa3pd8",
  "key14": "3xGp5hCgzCWQ45pJaVcTqCP4MUm2M2KuZepozooxYGkPXySPt6CzezXXdZhadgj5t6HXskPxxAjSbRJLU2kjZqvD",
  "key15": "5GD9fmLiH8SdUDaqoi4QWEJuAFzibfiq5AxFCEg68QPxosXDA1SgF19WhPbgzUQX22mhhx2wN2ViRKx8U4bGn8dC",
  "key16": "bdDWBjWd6UPaWTNDSvfJapYYcgAjnhHGBrX5aerwhRKtanuYNtcbeqRu8XhiQaqUgsmAcfLX22TUspVBVio9WaK",
  "key17": "4e96kEhdGxjQ51STnkdznvi2N2x5mM761kksRivP3gZtHJMAiVjmC4QP1g2uvpqEYXkYYzFar4R2PJsL5fTa6Jy8",
  "key18": "2DNw5ZZCorA4fsD6zgUxeZtyFGkwqn3dYkm9sstjLivhDLsNvBLjxa7oy4n7fWTQZ3jfaMBC3Ak5GRt5BKctEJmm",
  "key19": "598HHfjARTKFPPAUwAGi4NZfGFTpdjBwV1ELE6FXEC2J1u9TMzuSpEgxP4jmVTLnk8f965WX2nfgTvMssicu3uPQ",
  "key20": "5yNw4XNCjQoVJeRwjEwEPUahqxNXrXhLma1iv2J3p6U1iqrRr1CJ4iQv5SNx73kRFBJcCgybXfQE9DWb1yQhAWkR",
  "key21": "2EUB9TbiukQ58JXPqBAeBxqu8ymEzjDvDjfwe3Nc2ZwrUM9AEaauJpjysBNpsJneRGxumWkspB2YKCrDQtDTgXW3",
  "key22": "3u7RB7KHNGe9gMqczkiFxpm5LSBuo6iBu51MyTxVXsjMhFMDZ1nMEChQTehAfoYZEFM32TpbZH1W6tbQRACGQLR",
  "key23": "4Jgr6HW6oNKAMt1cMtDFRLtMNcvhsh88GuvA2QdxyuJLjVPyjCp2U1Qgk5uFLQZ5rMTPYr2KYwc4upnyKpKrpYx3",
  "key24": "5pG76ZPTceYhfKAN8CGdrAnpxdeHp4uRzWzSvaMPi6T2kfv1SYwqXHESR9rJ3VxjXd4oD4xHcc86xwmuSth6RpPz",
  "key25": "3pdXCormGMHxFWhXCVPnTgXeFsSq1UkbL7pr569iJN1yAEauKXHZ53n8ge7DquSiEr1nDfzM6CxZs9U18ZfEStFS",
  "key26": "2jkkAH28Xikp88UDGzi2xJYc2ij1koT2an1bQ231iW794DWhoTRGScVTnrTVvTQLjXTwNWADyVAt6Fm6YxRkyUTs",
  "key27": "3Ta1tTVqcwA35UaGaQn7s6rYBV6DCkyJN8VfqiHqerjFkJ77wvqjVR3kWj6fKnABRhGxWYnjfbtXqCuvArT7fD6i",
  "key28": "M2xiQKCeR62M4q1DLFWPJ9oHXJsAcwYSBr7kgghvd1G6zgN2dfWfmyiq8z8Dk27sqk5G9eZi9bPe7HGA4XQFY8s",
  "key29": "CvPiTBehLLY3UxtLwYL4MLdgauLvnetnu9gB5U5afhSCnmDkurivuByUNEN46uBbnoQprQdv4M3LjDTvciQr6ns",
  "key30": "4xBCN1SEkVHDJAk1agfNPate9omkh237SzVkRT4o1usLNhYdq7oc9n4YgSbdboopBh93e8iCNrGJkCrB2iJd2R5o",
  "key31": "4DYv1BgUpy2SiPWtGj2uFPsLXLjT8b9fMtK8FVH5V2YNA1Afy6fKNw6YauYrBmuQo4ZinexmMVycUCSPMYSn3kjf",
  "key32": "2BbycqzEbTrgzj57C2mR8GeGECneaqLpbwvWtnAX7BCvCmZtdhW4fZU85T79edSRwhP2yfe61Q3QTjaTnC1RcJDX",
  "key33": "558GvdMf1ycNqJpBipHaXgcvXxbBpRnJwUTEsgQuZMq62Caec9PJGut5SH3PZNw4sjFAoi4D7mGUe37ooMaweZwp",
  "key34": "27qw6fjCgSojuHvFVRCq5eAmrCWS8987p7DM1p7in8NV7ybdTmqcKiNBFtaCroK48EV7zmysQ7wp5rD5qrUSrt3r",
  "key35": "2ifAPcQH3v4qc4XJ13h73FtTYUhNhkUpzeg13qSCQTheJYLdcvfTeGAV5csrzM1Dwkx8hZSGHrhQXQvEVE9ccTXz",
  "key36": "U5vaLucsbHbCBZNfdgrk9A1HDFyLP1WXGrD3RXoGoaxYYgyD6cDs74gER6Wgacxpn6Nz1VxRDruUufA4Gi7BNvX",
  "key37": "2TZqaPRip9EvswptM3JnjpbXT7Tzo2Bpm93YfMoAnAnNTS7Zew3uTMgWvMNHW8zQrYNLhQNwJDFh5UmsRQiQDBK1",
  "key38": "8Ws1qu2CUanhLEiTMp4LVRLxd6xEvFeGe1bKyMW6aFwhADcmmyavrUh7ZpQqb39S1w3kJgUKvz2EbsegtQfkYPo",
  "key39": "3H2KJ6nCXiuNrYdMxPAsz7RK5TFT9mDDoBhoMncuypBdPckEzfsx2oSoNrGCUcpQocfiYu7C5XUn2AZqvhV8b4uf",
  "key40": "hSpYBS3RztKVr1YParHMNMUmsNr6cePzopBjwodEhs5Jn6YQpLJZpcx2dXz31pr1HDzqdXMaCU2f1psPtHdR8wh",
  "key41": "48oKBsMAGdGSLJLtJuQX9JqKYrW5UX8r52choZTQHbJzxbGVDgnqJRcZzpsYkrugqetjMqX7ezFPMvi2Up7yFMpt",
  "key42": "5PFbf17pB9jSEC4fJso55tC5aBLnqqT5fjoh3e1jnUhaw5ZU4EdaDDTDDrhRSLQZQUEXFYZTRHZdQRNut4NSxuXq",
  "key43": "36okY3mnuyM6krYss25zW4eiArFaksuZ9ot8C8xUFJG4DwLDrpz1im3vtq5CPePMKpaCTNxJW6vyiHEF5EUaweyM",
  "key44": "5bNsUPDyLbdcvyqWpvAjdeD5nmpXvtvbDuiWpYX5vAQRtRqVVummKsriDhzrdfj6utwZoeY8B2zF1VD22wZmEHj2",
  "key45": "FxEhqkBBiYiudam2rqYbhNvihmUhXevkCMGNohTXJJbRntbiFJh18zmwYxw584Uj1eZFg5kPLJwa1ku443vKiYP",
  "key46": "GGTbyYumHDeLn66VGcAdwAZjY7rt5BtoAEuqLLAqsozKfnFg1w191vhXsbFY79k5xRAMg7AWH9eqh7eudr7NcyF",
  "key47": "53sugtqWaqSvJjaKaxzL3aKUkmTCdtgtGCAD8vbE2UqEnqc7iFkDx6uEi6ZwnqD5beXb91edWvDGp8CmsN5UvpF9",
  "key48": "59Y6A5oC4babrNtyEk88xHtmAQ99fd8f1FYCJZ5azwSP6Zc1i1YFA4okrtrxiGhWMqgo4ZXYmXry1wkpbQaYYcqX",
  "key49": "3WtPaajmvU9X4QbiDcRmDUAsAjmAmuASg58XDiqWH8Q1BFJXNEpAerTbmzMcvUfkUe7QGB3qLy8n9pycLfdL25Uq"
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
