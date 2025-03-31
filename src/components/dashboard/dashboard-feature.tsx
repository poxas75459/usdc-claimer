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
    "2cvAHMmibqXyv7qASQ1En2sAj9g7DvYfoH1mT2bAhuaLvaHSSTjYnySiDb3e34uRqCgDB7B73eQy3ToHMWho8a6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zpz6GaZUb2wZW7LfGVWXaRFKbSrpdzb4yGW63bRehZjm5LoftLd3MGdv2extSq6NBuTTSoR3H4SEQWJkcU7GjRC",
  "key1": "449sYrdfrjaSZxNzX2oLk9ExZBHGwRMFJxqeMdnQBkKsXvGYVFK2KmMbsRXE1tgyfcAApCtpptiTEacnrjg6zLuq",
  "key2": "z2x2fWB6pDmeeHdpYrUQGcmpbu1GnSup9jTGpHNbUpeF12n9QvYqcUR489eX91UhDEksBDPEukD9iUks21RcL8z",
  "key3": "AaJvJTeTBeRaAtADQP46yufG35375GC2c5HGSQBeuNg6wyC6SBY6mXsfrN7Wfz9nkP5T5UhmP2FdNWgRmy32ruh",
  "key4": "TRgnXUbPa23175MHe9JVgmTVeToUVdNUoZgfu5sKZLVgyaf33PuC2rfzZp6ReJKfYE13z4vV8bKejTdYq7XcSjm",
  "key5": "sgFB1N5FRZrxNKRn5netSqEM9ZJkFVoF96E7F2KR7tfGxyFNcdyS484i8MVG1uc16fP43WqdgWyq4JC9Axgxrxo",
  "key6": "5QgZEjq7uy7rkZ72k1bxvhkGnPs29V2uC93xPrtV3bXybTT9LyBqEVyWhx8CsD9q5qneta5wgc2wvcyh2ion6zPU",
  "key7": "gNmcd3a5HcXcjRXpZtZRkwYNNJjPiQpXsg2yDmGxBZ3JLbHUtzsMkWZdRFX8co3SDkSbG1sp4X83XymaUT7DPxA",
  "key8": "dcf1BNEnwvKpaTJFgcoyx4kWZpR4bzjXWXQDf9MbihabKVbFeWVZM61dQZnYcin9GjkGaQNEYuCa1hYRhAEBDDs",
  "key9": "3jMhQCDdQb7B21hPpNaJAZGMAgTg7QLCc8ht2mQFRM6stH15H9bCraDTMKabQPDwuGU6GmKPVLAeAQQ68DhLV8qj",
  "key10": "31ikHM9iGQsVTUnz3UKwudqiLhbHtep6TEEXBuz9LNbgqUSdhTuDYZjL2J7ecttytMiptAVhiXBy5aQ4p7okwTJv",
  "key11": "4ZFTMcnpfcTVqmqSRdid69VgcKBB8ZbiKFz2zeEMNhp9xxojvMUwphcouKbT6M8UxfFJM99BgXEEg773BZcxLYzW",
  "key12": "4N1QprQbkgGDj6sPmZ89iy7yHvE3pC3WEJRr799Bc5RVTmg7fzkUtasjdYrcKnDGgh474RvzGP8fj6ibeGvcAAFc",
  "key13": "3sdq1MYtjNW7NtHsf54CP99Cu9wRBhF4Y7tRqG5J8CWJHRQmfLVuptKsDWynexrEdaYaSTdefkwdBNPydBbHK3xN",
  "key14": "61NffBxCm1kfpLovRViMzmRoA2JmheEtKTuzdnHrmGoxsUfonvBDGwwDk2gbwiWXztdeR7TvkWpJdW5gB3nxErhF",
  "key15": "2mEpqbphC5CEzciUzK22YqW7QtRzPCZohi5raGyKRhX6QGqPkXvSeupN85k6SY3KTuNgQnyLDsMeoHrGixvfFB6F",
  "key16": "3qfXeMcc5gjW3LW9U7fbxnJUfDLL3KuuMuke4gPuf7nNbDZHUMgZ87TTurwVTgxhoT9qW4X6ByJB8wMDXSkqPWoD",
  "key17": "2e7eMGYHKRxEZxr79YyM216nQv579WFkvTEveHAsivj3qLHwYtGCUkZp5qUSt7bRvGKJUm1PG7joz6ViFva6R3jE",
  "key18": "3EEgSCSPoEVx1HSstCiVKeHZ7kMDzfWsHLmtRQx4Sz946MbP5DiFPghWh3jNezRdGrwPd5P8yuktCMmbn92U5Lry",
  "key19": "2Z6PmX3t1MxpBG6SzkZWEwhgkDQv26LHXB3subYPPjcFWc27HvpC8yFBQ4GHAFeBjCH3aBwi7a8KVCvvaaqKCrg5",
  "key20": "4Rxb8tqwYZCHRCoq24paG3iA2owvTqW9YeND3LLTGX5ETkw1kd3VPKJAQGYjFJVzb5e7eTDM1XaYJu7cdsQ8AX3E",
  "key21": "5uDcNsVSpaW8Q3ivjCizd2T6z2s2PeoSe65WZgX4zcpAFVt7ZUdVdMXU6cmtKehCiPXu24hmmqihumbSjoiuPUnd",
  "key22": "5F99HxGtLhvkQABnPva4wDaFHxAcp8f7ZGpYxZ7EihrLbEacFrndACuYJGRjircm16S49s8Ms4hcgBqr35MboDyb",
  "key23": "2nuMUo1V4MeQBjhwzKcDDSzKXawUDuqw6MTK8qwx29aAHLjW2gVHy266LosbNRq26YWjCviKcYikFDAxBmHvCz5N",
  "key24": "3qaMGaqsBw6EjB3iRMYXE4SRbLYfMS1gjpej9e7YiAJmfkNeeeX3wBDSZz1e71ceZeGGRp8TjKviLuJT37mHcr8H",
  "key25": "3PtPVizKiQy8VtVqas21rb4hkFGqHjNjobpwRnUEWAgUCjA9E5SmTLQsJ7v87ms3EPPz1jC1SsomXLX5iycU9RRK",
  "key26": "5hFMavbBWezYtUqmszWMFJuwToiqKeCfNjoCTm7ctgNVzvF3hbPat3ssKQJKpuBNJrDUVUMgLo3GryqVgFJ3PbuB",
  "key27": "5VEi5grZZv8yAEAPALnMErpjwVJ9pAHY2hMmJmBD7eGpCeS5GUpZCBcgbdDnfweHjJsHDTTaJDLinScEc1uQvNu6",
  "key28": "4wjvWY32XYV3aSbHUhmm7XG5zvZe91V9MhdYdegqEAw3RQzHqW7M4znb9F2SvbT8WN1VNjr6WpsWjvC9wcW5JtbT",
  "key29": "4jn6tSWjeFDEyAexG3wd4qrCDTauSE5UvdyWgCM22Fs39GAJfk7L7w9ox7TZMwUdNRkg1ucZqjZFxtEXdJ4ND9jg",
  "key30": "npGwZjarW56NEWsqATGabPBrCWk6ktUWZ6GntuXXj5AYYTZ7ND34ThN4YMnFGYYGjEuo4w7v7hyVKkCPnicXwwu",
  "key31": "5VE98hnbVPe2HBsx7yQtoDaJxq3d77iiJFLHXMmy9qYqaNLayaCw324ZbHEqA8EKieVxzBYLbjCyw4tZKAxjCRCx",
  "key32": "2UkhL4PVXLgMPinQCKWHXC2iRTSVk87LDENcPbxYLg1wkrFsfKMVsjakkmKtFni1hLChnypd7mnh9Gh5jXNfeNEd",
  "key33": "22fZT57K633bKefmRbQmX6UaYe1M4cUQ9KF8k6skNeVfSr2jw7Lgb82TZ7LJEGsREaw7JLA4ddBM91NEQYh9pveu",
  "key34": "4DSNLgpu37STameCLfLykJVYrobGoB3X26UyH58b73Aykay7E7fyMBefUUshRddY1M34BMHqj7rgS1ibzeChy3SC",
  "key35": "yb3K9fxP1DJb69nFNHc5fQSy7mAgQH9uTda72od7DxQym8WFtzhUeeAVBsaJiN65L1YF5sWao7wKMsTKFk8wsWw",
  "key36": "3tDnybNnTsY33B4mae3kK5YGNDi8xqKDhhgYu7QEDZies9ggkPp8RdBtGBuerygFuXcnXusHyzbakHFwdivQ1KoC",
  "key37": "4LvTKesRpXQEtZFcEMJLSNBMmebihSd92PbCoCHbRCbEwupv2d1PP2PK3VEu9tocJ5bextUjPZR4EbEj3VquLRJT",
  "key38": "4wumqkCBbgAfE5suc6sVMxL9H5BTzhP11avp9ddr2EjmzywdFiyqwR6HdVu1Q338NaeavPafTwjb9u1p3YVorNN7",
  "key39": "xan5A2BsCoAhm9mHBcmdA9iyzVMidVhG9boXeMrgxDB7mra7fjRTHBtgB4v2cC12StB2mr3grR7jZsoHv8wfaMu",
  "key40": "RPSwqBVDY6ExSXcaDjLtEeca5U3BfziuwG9S2zB5k8DqnmweyX4ArqRrQb5Vw8xTvtKtLYLWcDxLBDhwrx9m1Pd",
  "key41": "4jQvLjmzZqkaLFiFjCNB2WpbQgekShoqcQ7pvShtTBUsey7rdMEW8D9RgwzU1BYhMPwgpK3vx5G3A9K66bZH9G9H",
  "key42": "2ZBptAZ3SP46K9JsvXZeDimr3GYH9z9CubYN7CYnZqp1rmTqvjG4rEdmfN9MvyEme3edFSprD3HaRnz4xSDunwsn",
  "key43": "NneqQu2nAzqbHqNu8rm3GVxEJHswH1Up1nuQKUfhyFfjufGt9bgCPM4dGZu4NY4FvqyYKXBjgJmf9PbGoJWJVJW",
  "key44": "3txkxuAKW9XzNaWppnEGV7Zehv87ycsC2SwpjygggmXFBSMX3LzKmDirQ6XC1waJmF9RF7qqLBNKsKduMR1BnqqJ",
  "key45": "GUdat3d9NwUy2RfXNrdhDMAh5sbvYXkjk6tvaVdTHugzzhCVwEUdcdkaNX1RGCoWdJ2VNck8BpCWsRUAXGEzydf",
  "key46": "4RE8aQiWsck5xT5RRzryRPy7dUWsjkFFmX3sU3Qn2KWH3BLwJsUhomQCamnCFkVqr6PZXGr7WHwLA8nqKEPctmv6",
  "key47": "4b5seBSQAZSGuThHjT1MPH4i9NjqCdqo8BG2iivCRf3u2ik3tDgbExCkb5iLBo3Fhwa52sDEMmVBQeMtzBLxBCYS",
  "key48": "2DQRMCWWeovtHN9CncUFmBKJNP89R9cC6jCAx18KrBaQv4MDsEDi6pV7uQPdxXDmkGQUNsyQWyTXAp7QLy47UGBr"
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
