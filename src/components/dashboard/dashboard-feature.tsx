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
    "53DN7hMKVKa9Cuy6vShurkZ2iTbvyigDqUXFX9wLcpVd73fw2JViZmTJ4QBDYRbt6vDLjtxLMA5AZjvGwrR59fLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSg2xRLgYk1b1AaVqnHqwg91Ks4FfXnYdyNjSSw9GUAL3bf7pKswNQxrHstFjdPv2mo5nNbPkEqJgFQZYH9xeUL",
  "key1": "3edriJQpgd349sWyA9RKMrWSw1RyRCYYD8Zc8tqNAGULCVP5Nxo3rT4FFYMh2tBhqW5kBa2UqsAakvvS3ZsfurLJ",
  "key2": "39sMh1Y5UcbAJLZ131GqBBWmCNsHV16HKdhPx95ZqPbqnYeqKyWY9B6Xb24QwJGDin5bqJEtNSeeCPcDzkGCJriW",
  "key3": "5yvo6ygpNRMvxZnbCdvQDVbBtP1swuFNAmCQx2UQCVDi5VTuMLRx9673WuUngqcb9J2uYhZK59zKxxXiuHS2Gn9D",
  "key4": "jK5zgmayaJqPaiH4SAApUduizxPv8hfDQZpMDQemdvG3AWnzrgqqD96jFGKzhzRGZmnq38rRyAceRXJoR8eek9B",
  "key5": "4Dbe11syYs5iykmJCeWjiSWeLWqZHaqDQBxWDAAFMvpCCeE2dnNxStMxWKWioqsBpqwgT7WnZgK1zHXBs1xwESdG",
  "key6": "pZgWcSca8E64vUmSZjuKRgwKzMwBFXVbvXouNLhWeEnmENJmQoNsgWxsjq9AD8EVyt7CTS9fi4wsaPuiAuGawcJ",
  "key7": "5bfWimXdPCwE2DWUgbJTj3N45hoUc7MJ1S7oPdJvD14LSEyS23hxBqVrtiimTvDM53br9dj4VyzW1wZFyUCitsW1",
  "key8": "2cjDMDecEoJEVV6WWbtQkUra295PWMv41euo89JjU1rUniXG44RJnyFqb1gpVYhQjHJCULr99Nu87QTGMH1JxoCX",
  "key9": "33PeM3XaCUacAJzvSyN16KeH8p3VYBVeduZ6C6dbLKUPoqYUdU67tqdLhrbb4Tp3xqQc9stC5EiUTPHgwXuSGnkX",
  "key10": "2r1DEaYjjMvkzHJDsZebC2P7ZtJVzAZKYAvELb1TTKWF3a5hY8NYGE1StJ9Jd6Hf1FowJJUoWahLkVQteA9WDhdr",
  "key11": "pbEVYPitxLygcJVmmGPHRgzV8KQrGmcyxeTJ5CQdBQ5kAEw6G4RAerWjRPigJLN15YpHSSLTZgbN9GYKABX6V6v",
  "key12": "438CG6tDAfLj2Fj29xGuUDbKap2phvBa37CD3sQrSSoKYwGCPLrRHkemvaUEx9HSZWij4nS9ZAwuqCRRo5QeucoN",
  "key13": "5YWYAdHfrUFabN9XVC8Z7d2Tv9qCUPx9jY6SfFUHBNZU8q8YpYCae7dMmNwrLToacq3GtQFDR3WzBA87SKmNa2ut",
  "key14": "5hsTCtdRPqcntdsVqKdDRNEFJ6UkvYLecCMrzR9fWaKJRD9yGVrYtoWYLSmV2RNnVe6vrEa1hC4Mf5XroSRWGBp7",
  "key15": "3Rn5TQTRnzzpLLc8LtL39aZwHCkoDnv6DAu3DT5iNYfHAspjWyMwZRH1tmoMSV17C5XUgpsrKAXmg3P5bHRto5LK",
  "key16": "osmdyJxmycGrnBhh83BAGGXn54LpPEzRucoxYBHSKdHMWbWrXPkwyo6JyWcLTerieQMiahey1ptK9gzrn5SVesf",
  "key17": "4fgurGKr7A3G22oTGHWVrECBcXgyMFb4Tifu8irHrqRpojDLbNoskQrrTtTXfw9NmYSA7yxdNJLGRqeNT6XzcN41",
  "key18": "2FHwtC8mDMwkYVwm94shLEKMDoEj7daKXg7qNhZ8AT6UYgGByAxzf2UpsDy7ukigJmYnSAanAjRDcmzWeWD8ywDS",
  "key19": "xrXD8KUcS7W8v2cc6erUzX6AjShCaafvnbyFjYTnngozrxtH8kseS6noc3aVYitdoziBGkTqbNPDHj2LLfzexSN",
  "key20": "2KTQJoN3ok5dtxUJdayoxeyAv9yMcwQSwmEFRwg2BYgWcifbKdr6QZ2Lr2wEJqbXskeZRb7aqoiQCx3Q8DXXFv3f",
  "key21": "3U7EQTjrEsMEtUJ4ZDmUEPaHedRpt3HxjR4tRSY2ofpfUtWDQRqoH2UG6dzq56iMHGzfTUSPvfq6sBHKr3FEKXvc",
  "key22": "qv28wvt4NcDkukhRuc8b3TPX7x6cSv6tXuJa8sRy2NUjKQP2zAb7F6omSqivbWa9xdymtroF4vDsZiHoW4CGktg",
  "key23": "3CadGQQLwmCepeWsUGprDHTUqzWNud4ET8UGSMfy7CtxQLsa2biHy9YH2VYJqiUNh23ydaCjjPEX53oqW1LoH97N",
  "key24": "2dWcjab2cLJ52CUsGtp7zPptxEsGEP5zPh3cFFtQpVyXTtohvt2us9pZrYFXFb2MwrK5zGn6EwT8xNsYPfWtzU4x",
  "key25": "34R5tpmqbAHMWpbWKvqx7C96KfiNSEMzE5oZHHRg8ihFjumpgYCBDQ8Ag6HY9PiC1WxSsDgsSwnuShj6kZDDhV3u",
  "key26": "3YpkMn5Q7pkYmfaKJu562jtTLRdD1jyQvXMEQsERxYhhYo2Sa6PwG6qbgdbJHhYeN7wudGWPTV6pctitiwxY7Xna",
  "key27": "34b1t9YxpxijoJzkSWfCQh4TaEnc5Frdba3xrRN14fSMkHeEuCSggGpmfTj9wJGRgky34n8SzwuUVH776jxLoQTy",
  "key28": "3R6WVYTTxMx26tcVEpKuVaprjsSxiF1Q9oFMkiVgsGEHTdV1qTMRSN7ZDXc3Xv8xD9rfwawyr6rAb9xpgmnsGmAz",
  "key29": "2wbL9jLiXDpHgzb3yg6tfvJXje4VYr6MnSmJVMzjhfmfS874wyf6zbkbXHhmCBPky1Jy36gfTktG7DkhJDQpY7qn",
  "key30": "2hrRBKnDYUc7kvPbrMDdTMYBFLmr4za88x6aaBzhjHpAUuAK1oorDb9HYxKzWkzsoSRPAYmWjT4PgVMkDwxxy87T",
  "key31": "QbEH9NmzBUruDk7Yc9cK2YuDSCzJqtstxeHQguyCKJgu7ECG3gnG5bnvDpxk16V6QXVzhxBDoRYDDKgJdMZDTxy",
  "key32": "28FjALhd1X8SKAdRQwZS4YbJFBAG9YDKom5xzSF1uSHHUEVF2ntyZeEwrSHwf3CgGtbUKauAfGwN3UpPigVKspTW",
  "key33": "5iX8LB9DSxyNFYQ2Gv7gXUBp3NBQcKmoiE2YaSao6GaRykHm1pjzkmzGeb5wzyLtQXBhbREN72QPPqCdLzfQYk4t",
  "key34": "5FhmvpbfenvrGVVgqtUGHT6RAzCYoqNiPH7q7fQm2PMpdMCcu5sPLu3VHugAKsTUxPwWZvvFTFooYMZjSxgpfANu",
  "key35": "4VdHro4kQfDDyekmrhG4nbrzgbQCpKLz3ha4uoeonFLAKGFg7rAj57GAK7avvBDzp98Rqe51Fwxb9RU167twEMah",
  "key36": "rczFD3ZfLuCeczQK1w83UAZtXX8UbpXzi6obwA6of53652EqZqyySt81BZRRmuLjmgz8CELRgPWBniGT4FfYHsf",
  "key37": "3W15DfccatQjqGt7KinNBafY1SVdYCihxgxVCiecUrcCoMGWScwMannYTyFXNBipcDuSFVRnj669Y3bQxpSiEUp8",
  "key38": "3gj9sk35suBmHz6VBeN7DQU7jfRBeHE1u9ewqJAgfpgr3r3XADqxDSSjdugarBCWCcXfcspkmUFDXjjYbCrJ4USM",
  "key39": "3Z7iQM5KUCZE6PD5UZ8SzUsH6xfF57Jc98nUASnCj8JruSVrHoHBFbgUJTeb1PdcXLg1YpA5aALUSEfWV1f4cpsG",
  "key40": "5ssZym1bsG45gzfShzSHo2Z3ngxR3m69sPb2zvSqKCt78HczA4DreSMqvmUQqwBLLBxRdc4bAUJfkkD76tMn3vhP",
  "key41": "5aiui3r3ni2B1wDougYeDuFrKVpxUR4FKEtMwucmTV6WNtzZEc5qCXJbeZPjbrbfbLhnPvsdgSpAqMrmJdZ2Xgu1",
  "key42": "3Nr8Kaep4ovpK4hfWDAdBGyha3D967ybE5uyvoRd6Wtd3ztAAZEGrpTsya3bsMj12rmMhpBF2XeDcWxEptRWAFDK",
  "key43": "5mwkr4Juax1ogcxsMDCFSGQCThkgnd3G5U8vPU86vjQtbMFwWdGXq8tctrdMwq2HYAb4Y7NqDCtyPaoX8D6nsh5A",
  "key44": "5Qp2DdBf5n361mUCkTxbvPcM5GQ26Gp7PB1NUsG4keZdq8s7VZEt6HNN5yMEqKhe3HqdQQUPDPWzW5BwcVmsLJUZ",
  "key45": "3bDp1WDW39DaKUfEzHaZ2kNQoZuw9x8nWwcbKULvn5whmMZ1QGiUiL1uAU6tAtu4qp5jLCoEbXb5wMEB7FxZpqvj",
  "key46": "5Nn6oNsdA4cJXDtnFREQz21PxaUmv6xMMEZWazQdMHJsQ4mfB4RgFXA2xShzaobBJAQ6hJ2szdjxGMs9sDxvU6GT"
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
