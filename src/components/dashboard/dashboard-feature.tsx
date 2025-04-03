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
    "3pn6Wcw9VSNKmvVdbQBFbs6egcJQpYmUBktm6dG3hLzj5ephSUk658TFqHJkWfwavxwvjBriGAm8afEL5WFS9pGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nd8uDftbbNbgFRt5SeohV41AAawCCt1aeDYZPa8ZR81pWn2zhUPsJGU5cmXidnWTTg53wtzCZm4894PiXFqhYm5",
  "key1": "nypocCHn6kdeF1HWq7oj28F3atw95yweR3px6KkcYK3JEzfanmgCyGmBZuG8o9uSEDCbnHDYe6HCWvfKeqHrTQb",
  "key2": "4jFJX2pkYHpMHXw24FYLCySQN8YmYCHo3Cwm4y2c3pES3oiHK9WfKVDMUr82ZFC7knvksYyshgob9duqcvz4RVpN",
  "key3": "3G7PmqegUVUved4ATGVKqxGZewTuRw6ESdRXa8MyKFawVFyenjMiBAz5ZETgdBQM7viqesbicftJixs3XnqR8cBn",
  "key4": "4KLWPJYiWBv5o9jjAtpjNsQ83usuafWAegteGJff7TFpgrQKfoNEmJebVLgM1bYV7GUrXDUHVAiaZt5AikzLmaos",
  "key5": "5rkehyRHscg9Yyy63Q8qDic5ius5tuLFrK3kAF7sYtyEeiaYwbPDWw4Daej9aoAPamUPTNUeycmJPejcAyEkuxZ5",
  "key6": "3UQ3TESHr3EPRzmXDpmWMSZwPVb492HMmSF71QXkVHQwFTq9xd5chwxDd5SgWWR7AXepCABEbrMGTa1cLkQUGsKH",
  "key7": "3FYryokXoDceSjYNjnYbFX3chufBQyakhzHzyGx9xZQKbZLvvdmnJdvv91b83Vjo98BRnWj1jzUyRQtS7zA5Nsyw",
  "key8": "25epoyfsofpfRxYRRiUbfMAKeq6YnHkBRC4MmJ8NfDM3zqm8V3DFs2fwhNCtxzBguV4HM1xEURDY1LBfeZkbC4F7",
  "key9": "5Yp59odrs1oZ9EzmNDuacpKjhRDbJb4EHEH5NWH4BF6AH6gApVCe4Bk1bXLoFGV7hx2g6Bm2AQr3tCi3bwZQd24g",
  "key10": "5sYPM3iixKspp7dZwLimUoqdxEc3CHaQimWQ2WVwFL2xrvY7ZZcx8pPjqe1XFwyowAz2BrdZu7X83c9ffQ9z4o9x",
  "key11": "5nSHLyvU6MR7nraMrKu8RMHLj2NMc5FnnsEoqXhqE66YhkGjbtYmfj5MGMkUBFuAeuCWNapbkCr12Du7NVFJSgKe",
  "key12": "61PhmVvbWzv561P7RGAZkuS9k2W2dhPNEBjdbfeYx7qFQFRvHBGRhYoLqHxf5QJVwvM17GyxY2veD6CYDreVYM4i",
  "key13": "2UJ8LFPnN4YF2ieux4hBjrmcJvbuWzbGcoyn9gDjmDrWVoAkwKLA7KnCMYT2AVCovNnHXk9Qn1cj6EzrjUTKBpjb",
  "key14": "PBszeX3EXmZBjhnYG5v85pe56445CnxdD9uWCWhFThA27MvoH2nvirMbSGoKsGfzRboE7vKzJC4jeMQam1MvB9X",
  "key15": "3EMXKbAiSSyXwkQKjVk53yc1c6N7S5o84t1JXcAUXTYYKy9Tv4BTS9tv62GGm53stCD6PWArP2mDRJ4yCTYtQWeK",
  "key16": "5CBPRgUR8VtZ4ujnHzznNJatQ3WG8snvp9j4RCJfi5gsfcoUgpAmcTnRM5Qxr6z1krRtEHo6HcLSfrmEtFFcEs8V",
  "key17": "4dpwvAbbSpZa3mwPZUJyBk28sRTfDH2h2msxudsja8kyKirDct3HVipESBJ8VcyZdXtysM138XpgVoTX5LUWUhX8",
  "key18": "4LT6KJtMyqg7dvGV9EGzJaHLbFteyz8hos9rYbV13vJyfDTyqiT2q6HxxyJ7kW7B8YKJobt1zcHNVuPdGrkzbnpP",
  "key19": "3K1TM6DwDDfynuEpR58kgfnvkhLM3Rt8P38j7LAyjW195eLGCPs7FK4pdbTVcVTYpvV8rLryMWk4r6ut1ksmnTkD",
  "key20": "2xuUcXgx8tc7g7MVWrmzQrVcTELpxjyNFqBpq8oEQ7shYb38VwPgnQvC29y8N4j8TNifPksHcmY6YvGDtHWYFwiS",
  "key21": "2h7zJyFgRjgNwKz23ib4LJ58WU4i18mEWbdJCZsBuhtGLH5Wh4WodPreh4Wb9dxE2PWrpnRV2FgUtjrJXj4RsYHf",
  "key22": "kh8WL8gpsCr32mbZy5LKFKXvg9WzXuFMKRagN3nwJRjEZ6WowUouggAbbk7jwEq9w3WYrZrgfzN5RTqP25dJQft",
  "key23": "1AiDprX7GqDkc7tgbUz8nVaZJPLXcjVASzMCck2R1vkDD6c6cyfq5EjqDbujtzG7gUgb6VJXdLh7wmMgxKetqfd",
  "key24": "me1d2khco8VKoATwxXDZWrbnVeUm8CwY3NDx6J9iF6rnmhJt3tR3ReDDxQMeFB2X9xYCxpbom4uz3WLocGPC5yf",
  "key25": "L4bBvfRoyx6ZqDt49g5jLp8t8HZUoW8vzNswB2Qobo2Q6JmgmGp4BE4XAb2bt32ggqBHcodt6WaK14mwY8ohrGG",
  "key26": "4xLNqS8dKdbfWnknf6TfcB5CjNHMrfRVyxm1xXhB1xzLcDxQaDHQDgiBMiMVjDyj9gZBd21GoEBjrkaLLmBNeaWi",
  "key27": "dQpw9sWHt2AMvev1Ka7ceD1wLhdeR7ZaercC9GBg7MujAN7EuJMvWT42APjNnUHgG7gvdtM7kqGiDbyRsm5TTxW",
  "key28": "5piK5gSa3wAjeLcZrJEBh7jFmhEyBwKLTGgfyq8NmSs3kBaESYGeYVDejXhQvDU3qLRbUfnUzsFUeALaVbhBE4Yz",
  "key29": "56BDz5udAXqG29e5Ce8BLtRXrLBZje775iEhZrCijubysRB7MjxRHZ5cLgisfJN2qsS3b6E5xMcJuvNmMxWfASEX",
  "key30": "3746ZYwpDF5Y5W77KFiCMEwdfQphhs4ayRUwcGZk3TwRNhy54PYmgaMHFho1mfi5CAQE84jZvPPYMtN24vBKUzVe",
  "key31": "5c3L3egF4ABS18gp6f12gyPC6Fdd1D5nXwHzGJ5a8kCaCLXRMg4JrM6SWxzTSF8vtdLK14JA81LJ1BNihcjjDyPx",
  "key32": "4Hbj6DK7VVHKV2M4C6M4HEcrDE1qabFqUmB4rekuMQ6ryrpJdmCrau31bDbhYibyaRsqKZzV2DnMnjXtdMHdLukU",
  "key33": "4Tb58pa5qSiSoc3nhssTyf1iKnovXdRRbPnuBJyVZhy6FgVjmjpxnWDu1aeQz9PxgeaJQ7YTutw5Yj3yKSSoj38M",
  "key34": "5Gt7oaRK4Wwc6aX2pY2u7hxnHRC7VKi5i81VQc9GYRed3tETxtUHuaq5PHDSmZ1CVFxHbxPFCrdDQubNsXKLGYN1",
  "key35": "KRP1oRh7R77negVuPGgMBWGAoKPUWt68jZeBrfPZySNW1k16Hk97fQEe1q9tGgCHKhxSRiLCrxS4KW7e5SwcU4B",
  "key36": "2aGkZnXwCrH7iU99kxKQHWVCtNP9MAmUvQNmTkPknS7cHgeHYsHyCfRevxG1g7bXPCtb24q1Hsqcm73fh3hYvx1j",
  "key37": "4um5NJnojDa2TB8RyFLyQscvGojToCd9MQLGHfMJDjPqwetqxDbdctukUiqqvyeYBjKe1uPA5mjrL8JBoYD9m6e6",
  "key38": "5qjQVU5ihf2z4qNFeb4NtFTcY41KGbFDVzHndguYeMmhkFfJ9KDHvFrs95SmLcVusNaJEoqxaquN9HvjVrseBoCB",
  "key39": "4h2rqpGLMZpEmb8mgiFcHHKdjXpo9FFb9LrHEWJPBE8Teo4KMc9E2Dfcni4VfWhYKQcRfFwTmK6AdW5Jp9wp2vwb",
  "key40": "3mh7nJzrUsY73bPTkEbPNmHXf8zFiHDJmE7KB7ykcwWaYpqUivB2z3fYRDYKBQcW6VoKtsgvPiuwCapZSuBNfWCz",
  "key41": "3r2swsA6GKHdbVmPWwuwBBtzpX5cKvXCApbWY1W165XWn4H7xiwmoSKybte27jnuGRXuCfbXWX1sphpTdTxorx6R",
  "key42": "3erpmYTjrHr2wjqcahctq3bF6YhhnVM99LmSiW5DVWx5FaKGQHEDV3u2Ui3CgXUENubokC8REx6wdqMoZsxe3zhZ",
  "key43": "4q2iyuJvP3hbs5epZWQxRicUR9LAotNzoAPRG5pYbHSCDfPaR61PZhMyHd7nQmASbT7fTyZEK9XBccCpK1iREmNH",
  "key44": "mj598R8kbb4tMebzEi4HUYtTtJC9VWz5ZkmmkU1HhozGYB9Zn2vpUh59feWWisntkfTsx7MWYZ6n32K3oRHCCin",
  "key45": "3oxCCXJU2g6FbSxnFK1gYZkHDjgDbURzBvrxDuwZLa7Jby6DEo35cFMrEDxYDtACYvYPCkyj63BKmFxTASBfFnx4",
  "key46": "pfyYhF34RfX8j4yChmCemWmSgwBRMPYX9VxZNWXBKQpj97aq5LwhsVbAaoBCHTNooxbdWcFH2GcQ2Cmnsv7si1T",
  "key47": "3nsiYeUw1QNBiwPga2NRbJUTZLTBieG2JVHvRBWXW7nbKBtAzUp6SJeDcCS84BGnApzJ4H17XKV4RC4KGTyP3Nmh"
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
