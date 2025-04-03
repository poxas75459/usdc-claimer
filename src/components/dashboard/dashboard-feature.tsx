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
    "25RRhy1YeQBKXTBSBjLYKsJTRhjNu7mCHbdiPciHaaLeVSbhkJHu3NfRkaNdZZPQMaowLyJR59A9WSvrT3ZBjxt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSCkxPuigM66tqJzpHrbRebYCoiicg2zLXn9f4SrMsQYPTuSQSjtxYDVBr4Q2FYkMKqkVQkG7fC8VTgkB4Qk1mB",
  "key1": "4ib4VrqJt9Vc2zMpB8qZSxXfTpn2nGBnev8NNXSVrXWnhoPgiYYshzz3dV8qaqZQ6efonPBRK5j6tnLVxTghruj5",
  "key2": "59H1i2KCNzH4NFQBUcJcSMDUa3f8mHtqznNfov4ongghKRuPYHcruHuUPgUg52hTUgjJSRxmNfCY3xDLnLL2ugKG",
  "key3": "4yjywBk8JAeQ62DkFoyMCVmonStfuwUZgNtADQPL23HJQvm3juKPiea3hH9UJWTgxJHmhWcE7gTxpu5uzJHtAEVr",
  "key4": "4hvEW3wtmXqMsw4vLnVK3h1YaB1rB4HhJJjMCMhvh2iKyubuix7aL1eVofnW564ji9VznfnjMiLd2N6uZ3UCA7T6",
  "key5": "274KoNkf7rBNSdr5x6aTmkwmPhHewhXEk6fJmPMFwdw5JtT27RrhMpP2DrwPd52LvimAdaNdimseFHEnFwqcz8BZ",
  "key6": "2RR8cfLzZruDhuTK5NK2MS9xaKGcKBZchztx5py7pnpXiQgs5JLbQrhHCCjtd24VKSLri6gVSRqpMLoDckGWuhya",
  "key7": "5bXQ8MvjaBz57GrPXU27JGLqshQZDL5tY2zBWu9nGWhfwbVNce7uP5b2bGB2nCEUNQiNHCRJ5j3BNSx7ATJUgiYn",
  "key8": "5nSesQgSXksjVnLEj5bYu8LKbLTkJUqfRkdaqwUxC9DEW8dA4sqT4FnuAkrdChQ62qwiSja6jrDnXjQm3ycsxijP",
  "key9": "3WmTzJJnLbXKPgfAu3NuHWdpp1kwX6vNC984X2Tqmgc6gobccvwuHEqMDgTGHDrpyC89iWScX9Q3pkBhAcemrrZh",
  "key10": "ThBVMvDaRfWnFjjQL5NV2CdwwoUpXZH6SNNpyBNbB8kVtJsTVe15JSKpW7pQhE66kPBJr4NXf1E7yMvGaXaFk5e",
  "key11": "UfqddVMSVYvLL9drHbFxrvyYtqBFxW7RNY45itaCjTyo4zmq9HyxDN9dh7N9tzSs9W1eBMTeou4aojryiFh7YEK",
  "key12": "5Vsmz7FGyfPLLUCwHry9Gx1K3miK5CipdPk4p5dA7JE6YywDTmFEA8WLGJzxxK4voxi1SwkdonBSSjmYMCMcXxfg",
  "key13": "5sRiNz9RU5cULB3gTWE8eTodr51H3nBhHJZDARBKLCAxgfnCVMkHH34xWLfhJ3uquWDA5xR2dR1xJNp5rf7ixm4E",
  "key14": "gcFCwT8gSpwRtFt2cSsmAsJMJz6B7JaGGeJospgUpn4Y6w5nzL3nHhuzWXmJYd8UbGdKVEd6jXu9PX8gfc5DFF4",
  "key15": "4sdi7iQUHmkBCqCKC43Ya7gYFfytCa71fHSWgsDLaHXXjbE7NdHwDpoy6ChVfABXKgMuvzWcbB3TqdXuGCjJdwcT",
  "key16": "kgzE8LNfh9Uf6PoZygzFwhjTRXDfMDrdWpEdiFxhgQPjFyq9ua8RbfqBTBm4AUfNPy44YfeuyTCrR6ztx3MyN3n",
  "key17": "BAeuNy25k9bGfEf6fDGu2SaCUcCp8hDMMQPpUneTHsYYmtf38ZKfTWq2ZrGhSrZwnSmn7rkM3h9ZcfMAH5MDy1C",
  "key18": "YkpqFE6CFyJtRbXMtvGvEcHwKKX7eDjKP1M5icSR3rg37ziciaimnGJ5FfgCxe1ZVc3vXLmbTM5HWJ2VTyvUeGn",
  "key19": "k9PraVdwH8GZionAm7Npi9J53QQqYGJNFAoAuy8HrTnnZCFUzwVqLQGWTGjkmw2rhpe8jV58yE66XHQWTGrV6QS",
  "key20": "56XFjw2N46F968Qm6tCxByqcV9C8aF64Q4mGvLaDj13ejApTC8CMh2kPHaokQTEDGbK8S4inUbfoodkYmx5QhPv6",
  "key21": "5tAcVgkE5qhtSHDBDr8n6Jyzpjn6TFe7AKxWXR2GbyAFuUKCBHQMmQsrxCm6tLQeUVJPH9MdeerFfusQqVbvVyBy",
  "key22": "44wRjcA6f7knRfsLa7cqdRfVkp85TE8wzBCpMDKmd3h474y77gshYchwL3iSmNdCYXqnCugRrGeQ86Hj4CZ77LbG",
  "key23": "46WVRcvd5c7ukZVanqjVgcqjgzSwRtkkAHPGDfNPLpBkbQY4Tag3ade3UFz5zCeebxh9FTtFcFB5RUqE92jSCCSa",
  "key24": "2WLcHjFFHMkAFSV9CRSsPoUY2c523BQonXThcBYdjj7sfDHse84vunYsWZVHQMTmwL6h3A88h48gRM9EZ4ese1uf",
  "key25": "5GbnGCqYKB56fbijPrGkCcfzNWgjQVsirZEVQUrQYmWzwBYcWzhZKET6RJqdFc7GCBBLEpJCmw83ajp9dHgQQZ1R",
  "key26": "5ZimRMYZzBE4YmJYUZhJad1gbiqF7tickjSEZoQ1Zx3qtRFaNQbpSxH7vCuVuof4bxJFNCtpiS4g8dF1hFXaUPRA",
  "key27": "4nFepZUoBzArQUJA4yxbk2hP9TXRtiSGw9LgE6imPQCdums92ZRbT2yqb9d7jwbUD5mPd2HTmUoXqxEC6ZvgccMf",
  "key28": "224oWuvTSP7XiJqHuVU43uXYH21U6qSMxd36au6eiPjw18jmcxkLiP2ULvkA2d8HyoG8dyPVshohZDHDo79o9dLS",
  "key29": "Eh8Foa9JVf14BNDiXkPb8j37xd8PQ8QJAH8h6hKuCTaKdvhV4dL1atBGbTt2J7rSmP73pk24mUthBQVtvU3BAqf",
  "key30": "2ACrnFL57hZjLGWtBpB6WWP4f9cs5XNLoDdkrgdf5ufm9vSLR2fgDuGJDgNbzCexfEkanZ3Kp5coWfgXZDJzmwum",
  "key31": "X9X6qgEGd8z7knnZP3AsN2aMR7U2f4AXvd6g8LMefv5RmLgMG4z1q3tdBF7WFSP96nHRorETdkB4gbpMKa9zdvV",
  "key32": "26CP7cpkagXj29yeVH3ZqHamFp2pTf9seSYbiRnaKhFPCMdnQvUDEMTNgu4FTVaFCvDCHt8g2mCHDrJpnJh5SmG7",
  "key33": "3u9w2K3REUdCZqXCUm83uKJsfiY93nddKySLDgB8qixMcA5aLR2bj2rjokwWqVVd5ZHCKiJsKo9Nj1pinRSg8UEo",
  "key34": "3eNrDcstYbqXEPJ9ojjycTnBvj5PJUhHFDp8fy8iD6SkSv8XDQtBLeDXP6SCs9ZF1WyakS1VnpP5AryCXhMtofNM",
  "key35": "2Urw2C2QkHtFpn4Zbfv2vvLsKHqQ86XFyQC4LrBrp48xPWQ2HX4LMLW67kaV4LGgzetCoRpAFLuGoLfghYk3nFRv",
  "key36": "ydgcK55tgoGnHTKUxSnSGyyBbjvYzmyGVdVNRBJ4DY7AMn1AVt6pchDbci1ZZ81iGj4XiiwkqHxrDhbMFv6KxvX",
  "key37": "2gW5v9TdxvkSwQXBAkekQUoKRbvqr9H7CQ6UK26meAcDaCGoD3EL1RhXHivEJhfxjaHoWDzZdV4pvumD66EnYCZT",
  "key38": "2wrBSMuiohUf1FBdutv47QCzWUz23XJBf8dDy282VKVKrUR4tCT9ftTkBypawwS3QbgnxwBp3BcHRTFixm96i59X",
  "key39": "634PLhNxM1AZZNdDPCeDcTmK6Fm5RyyVPkBMZg2qWWBMJmKvP2AqH9YPv73Vc8kpwgLvmwiT588wPQwf172js4z1",
  "key40": "47fTpRVPJdCNJFyZ9VECnAqKqCC7E9FDE8YSrk8NzCAjH8Uzx9aXqSwJJkVhLxY7FXxkipEVcn6T7guy66gtgbht",
  "key41": "YVEpL2wogg8ytja6hD44kD6HTsLPuiGYaFybLs92c6vRtTNFmE8zEoudEzVc1A8n6EPzxXx4YCyZDmzvbF1gQHo",
  "key42": "tZkjxe6Z76HTzhi4SJyYYGuduZWTL8MYec3jV8XNSde8wZnGpNbnUNEZtQZaciC2PNLu3co2iVmrvK9bdsuVrLq",
  "key43": "5yZQKKkQLW1Rnc778VXQaj337rQ2fziFJPRL3RF8y75Jt2s1hKUAVuL2NFodRzQCGu6ckxsau54GPPCoazmaM4Nn",
  "key44": "UAbt8JbVUf9xvBQhhVXdWj2SrQRtx86TqmFqby9rVmoca4bp4uWvWXui96LbfupoGi8TmZfChmpChVUy4FnPAcH",
  "key45": "2DvZKEpuThjNzRCe5xSgpZt1Gn4aF35432Pvs7ScRfJTMzk3feM7t1udAF5AvKMb6jp1bkJh5j2FcRpmyYvWXEgE",
  "key46": "5ktf8LnHeVDoePoxj2VxMwRgwdFgW3RXo7AL4HPciCZNUN4ZryzSXUtEooFtuj86gJ7kGE2Wm9N2sD8G7BL9EAwH",
  "key47": "8mkFXyDyUia9VKHgU3xAo8RFhf2qw9aRdUC2PYJL7FxfDAXT99r8ZhRf59HHkHfQBNrUdY7MnYttd3jrG3vq3Fe"
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
