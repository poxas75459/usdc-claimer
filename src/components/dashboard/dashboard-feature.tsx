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
    "2ySGuE5mt7dqgUuVWUmVC1Ad2nDMzKzG9G4artgWHnA9nH1dpg5GXptBpFvTdPhpPVZf571zTJNNjmtMk3rH7RgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45G3QE5dhDLF5rmvCGUh6HUpEv5GsMe73KyrgG4ZAQNUTryZDD1AV48SxLvLwbxhLFNN8qBYYtsficbANfHvH8FM",
  "key1": "4QSS1Pzc43hFZxJeuUuJSjEP4AgKmfnLMNgkjnrcK8fmvsQWCYDGHWtG3oKfLiGemJsQQUS9T8p67gyihnepaynd",
  "key2": "4QBXTAtmxixtqn3y37hQYsWumAAE1vgaNc79MRL1WCn1Gc5k8fUa8uRpdY3ZsfegqSWJnAdXfh1QUXHXCfw8KF3L",
  "key3": "2PbgKvrAAA28dZCXDxqy2Pu9j1pDWwbSbJvkiAvCMkgDcC9dz6ViF8JEvhn2UCdWCD1py5LWidsqnYKjpBBph87p",
  "key4": "5gLu34YZXDFxRqhvu4ogK9SRJpXDevFYJpPTA4voGGg1PQTQreYB74AyqiuAHGPcVC8fUGrYtWmRZt3ircFBbDZn",
  "key5": "57pcXF4oe8orgn8A6pBsS9goS9Vbs5YRx8AFsAMaD9TmkQRzPbeZGvtgAHxLqqBy4pBMY9ZpfdH3KphWgL9houDB",
  "key6": "r69Z4Jg7228bRi2M5WTUdsEjBvyU3XLYrmYTVqU888kqaQBJvg8yet9zLNArjYqtbZxtuSEf37Y69XbssmUEvWK",
  "key7": "4NrobJ3zX1v8vnPfTA6T3YovFfPXbR8WwiwUA6BsnAZnumUt1yv3CdMEcwobQ8vvzNf3vsSR59LQ71sFwmX5Qeas",
  "key8": "JbBgwxjJ2EoeZYAgvCHXXHDedwquGKfU9jo3dY8JrgaTJL1xJRx9zBiWaWwXp4RtwjwhhNNMND8z3ohictx3paE",
  "key9": "3k78YKVwHNEXTTUR1Lyu5YWeMfN4G6g1xCMpUMivQikSYDX8J8yS3Vzv9ByXFfDC2RLtfhxJkRX8psTMiz7kJfCD",
  "key10": "RrcpTBYjZMv2QTm2FfQGKCMTkuQ6LMpTXFo6THdC1x2RbgoL49wovhEYcXmJDUHjFwmBFmKt7tjresy1uQXi8Y8",
  "key11": "2Ym51FCi2ShJhXWHrhpLRva6NrYydHphanTrW9AHqe3Sp9t5c8xr2cPfFd1BU3U5TsMpMUjPuWtzb17FHFL1ph2q",
  "key12": "5rSgeesfcJL61xuE1636evHqAAZRsSET2exbBm3JgHWNTqYTnjbZ9noJR6HxLGDU4fjrYS635MYPTnXUmA6EcLAb",
  "key13": "2trNa6hwEAFJWqrzEKV7fix6KhjcGBTJHv2hGC8DnPUzeb3zJ3w5FYi3aTCkuRJ6hkSwkugyfCTyqfuEz64E6sNn",
  "key14": "2HdieuFGnQZSR4UEtgzdzUmgW8Bk3S5ouuaHvTR1NdzCZMJ6TiuN3jqrnYife9NsezP4iWA8YwQWYFYtYz84xio5",
  "key15": "2RRt11kFbLHyBebECsA8dguVsd9zKjKoggnf5SAcET77YMVGe2Ghf4zSXMwjbBcefFahJsqrGi559c293zRwSWoX",
  "key16": "3cvBycm7jrkr2ciGFxpXeJ6tRsgM8mHHsaSau7nM52tpKDxRVAETj6WYsqqk5yLHTB4MMeGkffhUmA83X2baZqFc",
  "key17": "4nVDAHz9CysRJbH6C6co5xE5warieGyA8Qv95gsqsr47KJDyqwtsxBMUosQ5RfH4fDoiKsRmENHF6QsgbndemsXc",
  "key18": "3DnuQcRe7mw1Egh5JzfJJ9wgJvsX82hYDcpjBZFEiNZw83Cn1WmwpeXgohP4m9TtGBMdWaHWPDVmxiy9PnBnZGah",
  "key19": "2E9rLNF5Nu4b25PjEKQ2qWeDVCXhZb6nndK3NGJgMHKRb8b3qygfYQmWzJ2EpFYk4GkaxvAbiU3KeghjNreEc278",
  "key20": "4ZC6uk2tqEZKi26wyhYmZZxhaTR4LycWSbvxWUqdCbny7sahp33J2Xh6feMLmhBdWpJsJnsodxWBDfwPgRco6Utr",
  "key21": "4vM5oHneppLUnPQBJQ2vyv1GczQTA5jfRzGM7Ys36F4aJy3qL6gLKyJwSCchZNV7rPzcbd1nEGULpRhC77Moa2D3",
  "key22": "4a2Xya3m2jE9ccbzmsBJBHvNuw2bcR7SudhEciB4gLGVb2cMhepSrDay3dvFiQ7Aj6qaNhdD2xkYZTx2Ea1mS2Y9",
  "key23": "5yUHXHtJJC91MsSSmjvdAzupvW1dvsXgtnyL8YHpnQMeCLf1FMWtB1X5CYaMtfGZ3CqSC3DzxzmzzC76oBxpy6Xd",
  "key24": "2J4Vpwa879q2AuheGZ9kVtcyfoHUuKULHk4aNvJmAHH2TLvewmEb8Hib48W3V7zmEBum6hr3HbYu3zrACJgzACYa",
  "key25": "2XtZ1gqsGtKPkyoru3GnZU33yaaMDmm2phEcuT6BHRiFHiwa2fSS6zpGdHSTQA4nq4ZofDfvJbG42hhPfoHh3js8",
  "key26": "3CpKRXXCD9PtXHHk87KFbfm3yWTBnXmsQ6XMSkfRrKNkjaTHihkRfpR3rZh2x3CPPtLn1wr3crrakkBeSCSW8tdb",
  "key27": "M6riY83L41CVwRmnec56WMPpdVJsAD39sn9c4hEJ7xMn15ojhyKXBYzptVqq6CgiJgGBUz9pADdt4qfmQ4w83Uw",
  "key28": "N7d8DZujFe6xM6V2typhr3DLtyNkSWc973oq5Q3ztzFmQc2kWWSPEbsPkVyuG5hVoGWwW18qc7tXVc5V1KkccbP",
  "key29": "53SF4GAo83WJvT2yVWdxWiMtUnYv9Ta7x8xdq4pWf5ArUDcYvGMRM4Va1Jzpw5XJLJEDTPeRJtnpDGr1yWrftVW4",
  "key30": "3gbQhujZa2NFUe4heVDw6QVC35a9Qsg7Qyp1KxNbXZMsGeePVFi7asKpkagCKqj57SfqiyepEynQjXAz5G8cr3rk",
  "key31": "21S57gjoDSgyLnNyJQA5eSCfAGxGg3ubSaTbradj4BF7sUCR2tUd5T934zB8aCpkFMR4inRphPm7x4oYur7EzjJV",
  "key32": "oBPnAFFtiGJJdUM5wQ35119jreCR2Tnw6Vf6XDVhi473boPKQiiWWsxKF38MpUrm4qAxUiVANBmRy6Ak2RfKgHy",
  "key33": "3MCZtQbvWqpXzY4YPZr2E3bKB9HpSJRaNUvikqwr4tAra7zCixrdjjhSYPdqbSRJWo6uxPyZyUHxrfTXoxGK6sgF",
  "key34": "4VMAaQRSGHvJLePYF549rTdhDiFL41XS1uQgMc4ead391iiYHsMCe5ycgx4kZ2zLSJHujd2QUi1qxmWYpdtvU1MA",
  "key35": "3g26L4LPg75creqKhiQZDYJMW2UPKV5heCgyuZYaN3SCY4J9yqqjBxcvppHr8PNbLgLmwR2TvojHu6C4yk8k1gBo",
  "key36": "4DwqEpmGuAJj54edGRxq5Ud5tecHsFdG9Pf65bm42Q6jEFR2BQbTvebvn7d6WdxKRLKhm5pDvUSJ3yGMh2KtAz2U",
  "key37": "4ejU7ChZQMviXvp4d3Uo1qCCC3tztmViPabnPAGweh431ibmborj62ocesVBVdZDqV8qDEBuoRpGiyU5iLAoePCH",
  "key38": "3FMKS4rtwsQuPr9KRa7p2cWDhrzpjUWp3pvmvNLtKBM6KFUzt3ePALD1CBf4CJSbhqKkEMyWm6SWvddG2bUZMWXm",
  "key39": "5Zeh3HknTCPCA6dj2GsUKcdTygT8339X2Fsy24hJQLtY2xnBqwYSS1RwMeS7YU9ypQNn93BPVzQ4eqWqmxWztNHo",
  "key40": "2GsotatuwLcATegfHRPdDEFas1jHFeNynHXSPRrdicpQSrSKYes8tRXNGiyDiNmaFe8fa62nu5S3d2tJQivbtzyP",
  "key41": "44urnT75zzDJpCRLcadMJzDXD4cMXt3Ykbrtr3Bm7W4Kr8ArR2zLLR9J9f7FbWYnij5usRXQ9bEZhL1MQD1mByZr",
  "key42": "5pd2sVhKxwnwoYY7dMDJeF54Q69yqiA8cbpVfj8TbpfmgkRFNyF3Z6AHAzhSctXwHSpMfNB5U1jSYfwiywKHFR4e",
  "key43": "2CUfTmMX1jXKW8KkhAsadKs9TGazH29HbxTyJfXNnv9zFN7dvD5NJVrtWf9N4WhDHdPyRX8JJbMNaCDaoLEUGt3b",
  "key44": "5JoASXhT5k3ZzvHCtrgTDcX2MpoBtk3V9StJgzzmPQToy4kH8c95sM2g8kkjkhyNkprTMVdSGNQ8M1iAVdwUqQq5",
  "key45": "4dNbqqbG1iJzZomCZLUhwTTrAe4rKgzvYuJ9Z9ms6Ermdh7DjKowrYBEQiFZbCycCd4dTveTNVoSoA7z2ed142vh"
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
