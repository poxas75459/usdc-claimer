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
    "4WYQ3ExwfGcHwNkXPQCvXZ1rzRWgQW2D9uzdyWyZYQBDssA672y18V84evUosM4Cf4ujmkqiqVr9UXhtDZtX4bS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFoYd7i96KH629mtMrs3amZZsvgJWLrFWrC8ReMeACv3QDdb5z6r8EUSfQkW5dRF6DQpq3JCJKSmq9R83GM4iCL",
  "key1": "2CqC9EUAxr2BZojMcg63NhmUAEKNAP5MXLibRzVSRh2iFoPFJZG2ZzMfBwxbmrD1wAMgS6xdg3g5F3SfRYBHYcRH",
  "key2": "2oKiw4sjewii1Z9Bx78KFGxxo8JijWUeiXkLNb6HnybVQrhpx9tRbJ1nWLvWZBqNZy5owuQjJwzjMtrVkmJx8hBn",
  "key3": "4k17nGArczBkWHWM6NjZFB14zbTZZ8ngp1dS1P2LuzLoztxJbCCuoQnkxP2nv1Wm1pDLH9K8vmpz97aKjKRUw13o",
  "key4": "5PruJBEqEsdfnjrPmE3hkGivw4nUdkLAF11VELnV3UvqhW2tBia5kFjdHhHuqh1hGgjAmDCof5dCkhSNp6cV5qDW",
  "key5": "4Vb9HYYT8FQwW3oete3aJuU13mBm9LgyMspcqFP9noSa8Q7L4HFgUjM7ySimDuAhVv9cFzxYb3HFy5qsdSUafi5W",
  "key6": "2AkQ2ZRCtCdyqdwDtKzMbT3Mc6QQQ7CLf1VtMzrQtsXuHPDCfq9DSVjd59LPV6K1egxd4xZfgYHSy2GnpTyGaPoD",
  "key7": "51xeF4muZeKQaFKk5EGm8on8BdN5Gg9w58v8aUu8fgUFPawEwc1jwZAceJbqxXt4bWfw6weAuUpUyYK9mQiz5HQi",
  "key8": "2NrtfAx3Rzk4CJCK7hQXYgdiD7DLEUQRtFHhFBdZiVf2JJ4djt88d6yeSA1mtXC4RwmYji3C4YYCT6iRzow32KtP",
  "key9": "JFiZgF9gn5QE5KasDqXn1Yb6hs2XaenFkVZ9W9T1NrdsVqirZDuduPtmApKWeEepmkg3zbUf4thcogqTu5FXShb",
  "key10": "DfSARrjDWqQss6FnRKLedDQU4xggbQ24azrTb5YuVH3aJidCG6JBkH16tvwdvmJuRC5krogai45sTMUGwn4evRS",
  "key11": "5SFpyH34aXqh44hQUGDY8942rRHoQKabjhy7u5QUL6VoR2uvABvd2MUV1Z6MoTh7XzHGMWY6NoMGvbvCw6mYnmqT",
  "key12": "2BhGe3uo23h5AdpE47grJpibb2F7GfeHVCuwJRBog6hBBWkipTS311TYBtLgKw6hLzEnP9RdKXsD63wXw2WSe4UY",
  "key13": "2CAD135mYdsWK7XEidrjNZXSaR6zemGv536sWwwoRARmMSgSg6Jxk8jY99yfTe6m9hhFeoi1im4pnLCS1VVyoP7h",
  "key14": "4PsAKpVDgurpJTBFVNPx65YZP6has4Trgakbovj2MhvVkrsjN2A1RgxLQnDEQwg5LfEvMxbemGQSx9rt5EQT4UET",
  "key15": "2K6MLGZnFffWfeG3EPPqkdffZnH6xWxjNaRYVSpJRUZwNFHJqjCZyEnoScfvUzCQJzE9WHEs1yE9NMDZisSE8r6w",
  "key16": "LYmfXCBMWp7va6xQDUtpdDLNg9ARUXktkque5LKkRWZKQmvEFRZvbQkpkkwY6hRjsCYn5SVJ4LZ5fyEktcadzrr",
  "key17": "96X959xwB1BDsCLUftVYkQmG5yHmsWyLPZTVVVaFYjnRaQsWTwm3zL6Z3SZH3oYSuLe8qRXgKVzfUFBgNGah789",
  "key18": "34nG6bcqcuHk5s62xToAh25qe2XqGR5kHGBcYzMuT1gDmgDgSwrRRFd4iV4fQ6LY2R1fTuxCyNRyczZECNbrPPJs",
  "key19": "pZPJK3r35Hb4GEdXkeq3GC9AK6nRmA4VU6Mjmg4CM3VcAtZtnsP2nQx4PNM6Tmv2Linzuyt6iVNmapRVkHY12SE",
  "key20": "4Pveax6vwus7meaYLtWnKT4y1WtFPanHmUP55CwLmCrY7D4mdR9M9fWnwZYVuAoT3GT26eddABYK4w2vRqVqDPg5",
  "key21": "3QRoECSKzdPEKWB74w8foMVzcx5zo1LpFjpJKeDjCyGFk8QiNcaT7TMNGrFycPWaSvGpBoPX9Wn4Fx61Ah6Mosns",
  "key22": "5ZMKigte9Ls3o6UXXA6KiG7zn1yxiSJXjxSHRjPND4i4nQKd5cv8VL9zb8E35kG4aeMcSDfWzgZ7wjBVq3DNJJYn",
  "key23": "35vhn6bn1C89dKHjcyznKfxG8Tav81B76dpm2YgiSobB3XvSgJmfZojKgUgDAiX9yhDVCbfmQFTFR3aDMzppKGuQ",
  "key24": "4usBPUeZzP5UWwgkv1SHYUDrqB3TBEccHKCpaYYyxVtJ4DVrsnqHSqNBonWXee9N8EnTguHk7sUivjupH74gDGmU",
  "key25": "3uyyGYfBVkPH8medG1QoBdiUyMNRCNHrBLqZtAAdX453f1CL3QeMA4zwgrgxMua8fbKiG6tH1w2aT4W9yFLAyWis",
  "key26": "4WydMi8aS6aejZLD73vvksmFeq7Mfhh5NNhkf851nBkVkEsaBLFMYMjdMVSAq3wUtPT3BqTZLw1SHhSHtRTvhNn2",
  "key27": "4QEzfD2k9Am4aXQ3wVMVwLw33X6vWKjv3tJ2DpCAscCBD3NX6s9vXxAuuNMwhCsYBEFtAukSLMDtM76QJ7jpCj1i",
  "key28": "w1bC345coyDqSurqRpthYDEwuetSSczakW1EZHsGGTVymQmfmdahs8YvnJNo8k5VETrvp1C3vK3VHFDUWTnWmdV",
  "key29": "5pF66uv2ikaN6uX64dN2LSkT8V9Yk2KQmrMFbutBtHUi3NcvU9DRqKawHUPdGwyDTPzoxVxq2AtzMUBGtSHPbBke",
  "key30": "3ptMyTZg9t6gboYXscgS8PeEU8KhBu3dC4gYxfUdbGD7ZfmtDimPrLsD3wntrKNmTFpMp2xwi4QzXNRa7kF5JvSM",
  "key31": "3LudGsESPzCDK8Vb5LQtn5a8AX8TKjJTeotkM2h2Td7jmPfwPSHr4SrkszWeTQKPsWNUwxJEUDRbzxrVgJTevkLT",
  "key32": "27cyeaAq1QfseFKpaHftzpCWsevkyEr7Xo2DykKBZ3mQ81qNDd1Ad21KWocJae59qD52R12SA8xwDZ78JyciqqUg",
  "key33": "4sJcQ7Nebiu77UUsQbCoer4NmcnfDV4JVDgqCUGoBPGhfDTW19jQzAegJAAVaDdZLVQ6rrh4tNHg5qED2fwaao9E",
  "key34": "37hGBCYcdTXAnSCBNf9TNhBNDEGVGWrhQkpGzVKjdMigXAQCxccm7zzniJeJZQSzzDx7nvTxAeT3h3M1ChiUwJPS",
  "key35": "5UmmaqUFEvAiCCSjHLymi245U2VckaCM9VAGxeRZcTR1MJuUCQLEuB4DdiyEd86Eg2hpnm2JaZK2riKkFwb5qHHM",
  "key36": "28tUNRhyXan9irstwWJ8r6J9B9mCpXZ4U7tWS7p8i22Rmy5CtxNSds9RMqrEJuYdTtX5FYoBdPsmMSiJCeeXecfx",
  "key37": "TkygpDWB3pKMNLe34T46vEL6PL4iQW248Gpte3wWWNKeyRgDxzR8cq7R2sf7TceWeka2rn2z5pToNkJXgCdaYge",
  "key38": "3cALw95kpV6xtzdLrFCY1nKu4fCq9yWHbrnEtrWM4Kri7KkJm4ycFA7wqgDnCiwKqcnr1SqWFVMzGTw3CmxoATmD",
  "key39": "5JZ54AJtgNCT8Boaj8L4wU83smAHhxABpovdkWVG4Qvmwov7GEaJqqMA2tmAYvJU1sjuD2Txu5MS81bQZdbVXjKU",
  "key40": "52uDkAPjtFwaqivMq7wDGh8nEwu6fRF7ut93uyrszN1NMFvPVEMHEsnLh4EWFovc55eQSaDcCop3dvua7yZNijV8",
  "key41": "TTQay4CQvXUZ79cJF7QkoBcThCu9umdBtLZCM17BnocaDW5qNLooFup5Pyu4D82NbbdF6kUHjdcS5bYZKQnmvzW",
  "key42": "5PnZ1TDgQJtYxzNLU2BG4eRWKfK8JmPPELACWbvJMSBiY6BhXVPXXGmjsdXuR8VrDP59qdr4khX96TvmUy3jqLe",
  "key43": "3VsreinK2f52XJANC8UjJKDCX9csWhoAnAovWX3tsj9GvGAUX3kStBBp2kbQ1Q8SahyFFZQW4x2xTUhbjB6Xj2Qs",
  "key44": "5cDN1tZU4AeRXHv5GuKfHtdjsUWS63rxjer55S7oUXPD9RXk8hdRQUaUVD9ArNvUCMYhUPieNrzrQ8FgHJL5CAqp"
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
