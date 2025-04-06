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
    "LN3m1jTGiMTpuP4KMjqKMpUQcobxYJ9bw43F78M1cACSmPVUM16R2VtqNdrreSUj5ufikf2VrHiTAUHGXc5AxdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocJogKULkzNuaWbdEKxFF2BEfDCWMVqLCmaGTtDasm1zbuQPLsXUW1PCZibfqcWzKdm4fRJPKJcB5wif5Fq2FcW",
  "key1": "3aTR1ZbYhhn6mHTBRw9durMKU78XCYM9Ga8sPQpRBEbSqBMgH8NALHNLdyVrC1S4dRcaR9iy93p8WhY5uQVD3Lef",
  "key2": "5uQJGWYaPhYCU9JdpC2zo9QND4AvAYrPKAYDoVQbsXcYG4m54abuRYUX2vFTDAjrSNqM1nH6pUa6q2SpVFBF3qC",
  "key3": "5Dh6BCb2AgfATs6Too4TxBEpTNboGJos12SB2QaXmY6n1Up5Z31R8UDupHPEnVNKA4Waa3jxqwyHCSH8ZyYFSojN",
  "key4": "56oBC2pp9PjuKZiZEE9yzVmgK3J8CBzQ1kTCzuG2ULU8j27iyxLX37iYh6iFknpR8iVv5SQpcHdByE8naw1pPanH",
  "key5": "3bcrcoBUQjtCZkgeAg8qQHFpV95XHfQELAnXHyCgcttGnULLWrbUgXdtCWfvoUDJTzgqZ44B62oNvoKpv9oVuWqk",
  "key6": "3YyV1Ha8Nsfy7M9VYEk1TRLFh81mQVWNwFQQ2atvnX14H1q6TPGBk3zy9r1Kvwyky7hCraYChaDpHUgxuyG4XZ9A",
  "key7": "HxEm7V3u5NS3NPsvjvepDw9cK1VnJX5MpQRQN5ZnFvakKb28xrBLKJZRNwUq8t1vz1xhuR7Lfx23fooFTsipibM",
  "key8": "4wNWnV7xL3F6DNuu7Wjx28CghfHqvwSeStL4ySWYgAfhLsC5nLqDRudrSA2T1euDgtXsU8LfF4aWqmosnpAkkMvn",
  "key9": "2BrEUiWaRyQvbpea7YYR6HaNfFmbmcSF2bDRNJ9LUwyLiUhFfH1oDR6cLLvYjaaTYr1BqNQtaTDWdQ7bPkN4nZb8",
  "key10": "3y5LHn9puz22E4tn31eG3FEk6KDenMEb8SGZ8wNt1Cam7sVsaXVGGAHhNoVMYJrNrQXEvpmeUKDZjoAc28DSw6T9",
  "key11": "2643LxwjdnkLm1iDGgvuCuZ77GBKTXCqxt3JsjVATLFS4etJP8ZUdsHPaKN7PLi5XJEcQf5U7p5xi2QaG3tFJ9er",
  "key12": "29iXZFg1ZUxWpfo9ZWSQ91VCHLHkP8EvwZuBR3TmfDJReD16o3H2QCocVHFi3MG2diird6KEVEjV2DEPQfxUbwvX",
  "key13": "piBJFGwqqH4B57wMN4p3qoFUEWJcWiHYqxx8F4gGreEu3kAXC51SM2D4yfqUHPYou9CJG1jXdhMSdVPoS8k1Jgo",
  "key14": "2gzwNb4c8Li4ZikCTnaQRMqthjBFcRhjQ3vUZ5qkygz6bqufDY6AR6KUqq6L2yFAveq6mfTxnSjcTTs81GVJAzKK",
  "key15": "5Lt3wpKe4vrGHopmqKuMb6YSBojwrnojfSJpzB1ZvJUxaAuu1E4hUf6aHNkb4PbCdPqMF1XijNJ2HMDsE4PbhoCu",
  "key16": "4sU1uwca893JFHroDDEFgctyVkiddnzs65N6NZf9zzgYQ8tBnEKHczFPZrCZ9FZsQKqU4bzFkaSHivauoe4jCpSR",
  "key17": "23GPHn5QBR4HCMQXLbbMjfacoofAQemWShTuYtNYGnGNiHdi8XkJZEnEinjRGS2DADBnvLxhtwiGmtroLobQ3kDh",
  "key18": "4kbddYY8m6AKNQhy9X13tQwsAVEyQD7di7YotHjL4iiWSuYdkCWCH5hWD77SEPitgGMaQUmqJTJG8npN2FsTNMbh",
  "key19": "2MQRTeWkxQBtm5P5H8GY9SoGHUVpxW4SrHamguehrok9rFbwyEgJYqUhY8Vq7HrhAmbgiXPKMR4uhcFi9i5eh2nB",
  "key20": "uVBcide1Tsk7MXNzuxLLauwemDEvx2ekSt6RxzCum1k3CoYbdNDPmhDvauf2GHcph9zLhyJJxpzjLuJruxCZBgk",
  "key21": "oEr4T4v4mh5BNBKFABUfu2X88CpQp5CRFQAdW8BbPQoLreNKcoRH1rCZBR4yqVkwNJVzMNCRAw83rk6nEYaVwzH",
  "key22": "5haBm3XppQVvrGcRuy2rDgSJr47Ki4CixxdJgV1f7XnJ6zTJMFiUGsq6EXCikhazWrepS72qpCoLgi3Zae6a6rRG",
  "key23": "2N4bj6hyNDu6gLd1eC2vbuWgR4MqZwVtJWNCXiShHVgLqY8wCwZYMHCQoYfxb4JTWrpccCiXkKD3oShGxYGfigyV",
  "key24": "5zp4n3GxH6mBupXdiE6Zb8k6FAub44cN8qRevckCHbMbzYXy6pNoNSKzPKBBat7BJmzQJ5LSCNRWT7esrLVQBK3C",
  "key25": "4rNp4dj4ysiTecAR4r2wZ4kePdwEQ1gA8m3nXHNNPitAoPHUpRoiRNgxwTMw3EVjTJdn5E6fENLqt4Agv9Tuuqfg",
  "key26": "YagJKmqAMhWic9rio6EAFiDMtJ5gDxwDcM9ExC27std8BMHCrEfC7JgsyhCyHbozkg6732mSeKxEv7Nas7Tx9eJ",
  "key27": "rzsBUApQqVHyPrQVgeAsGkJ7Tkb3eNvvJuv4BddHq7AkeDA1avdYuJaijr7UhxKghysbZD8S6CDgBFExfbYEAq7",
  "key28": "bJtpyrT7e5JApa3FFydqcFsh3Jb2mZbnpfHGrEcNe4KpbEyAxgyStJQr5W2DTeM5B5ZG3gkyhE64Vbk55ghv7Ep",
  "key29": "23igQ7fJgLYtSn7ns2iooYvJqbUrnZFeW9acWEYQXt3QeMv64piBUKWxZ5ND87YPaVbsuhxyEFd9fWas5svbvTYT",
  "key30": "5VmRo5CoYwTCAne2H7MkcbhLtGppbuX2opRvxP2d7SdsMfSWcGGvuHvRg9boSncSiYJwJrg36D21eL4dFZaZAif5",
  "key31": "3vwc2VfY5hpNZw3YsNQzEPfxp2can3JL2s436r363CCM9ZMA9f1jtJk7kvKjgWqDcRdaMferQGpJK9XokvfpoAzc",
  "key32": "aKpEbJ9RsLcNQZZRrRWpzpjR526onsburbEM6jhk1sHasFvtakUJt8btgcgDFmNZSsw6J5PKRFs9oJ8yJM4e7di",
  "key33": "2NpPtqa59WJ5cmWAjsLAaQNDKdcwSJbdfLgXDitPotHFk16xygXindqq1phfu7BaEKYGLhM8CyouT7e5z5rMAxVw",
  "key34": "4gsiU7jqyuRkzT2XhE2JYBNjEsEHkCweomZZLWFLAFLsr2V9gQr6avJLvFLev2DUb5qHVd8DgtTuo7u6eRexgtVy",
  "key35": "2H33svHFtQxdYoFwThzELjthGCy1FPfWprAZtE9755iMws9kmeda4YCmSbvmQbKThRbFBvSZdCocAsbZrjTZK6TH",
  "key36": "oSsMQG3c6MBBhGsp6czF44skMoF6AJUsX62pLHGCT4c4toWvjh6kYxGZEkDCVtZ4TbUdQauRMp5knXVnF8jduhR",
  "key37": "5Ljvgf8CzzfKoedNxBXLrT9a8v8wSNXLg1GyXWapRNU4pFQdN69FV5KzEDRYPsdaAPceaYBiVAxo3VWo4q3ymhzq",
  "key38": "kjEZZRNEqFxRR2ADyB5bDtKJK5zXRvL4Y4151s6QKxjdLDCDX2XPyLqL2zzCMkpnQni2ujHGa1Nu9Qs5mk75mVN",
  "key39": "5d7xZZWf3L5cmEkmhRrcgsVvvk6HWhTcm2D5uGYPhKTzrASSLMpmgQ4RsqhKajkFu8CS9AFJGFfDvhEQzngi6jMx",
  "key40": "yksfgZU8nHDppXEq88ZyJvrA8ahWopWJxmLAq2cf7S5r8n19XMFHUPRxFPL1PE6EWHgSo5bbk1X4u2fKukLnyHG",
  "key41": "5H2CPPBjeDWtT5koC1vwhDqturV2bkVw6aL2CqEaYVaj8FG2Y6QdhG9knpo3XVcv7soaWZfNCw7KTaX4bdayemAz",
  "key42": "2Hexjmsc8FXSitf4eLWHR6N4JxXya9kv8rVtbZNckp6zE6TzTq8h7BoTQQQqpn9i9JzwtgU2VivWQGhB9R7Cab19",
  "key43": "5DZKiqFRZh4gifmbrJSfH7SbTxzbrwZfUDVwSEhxFrEpMxgFBpR4bAbRKwN8ho7eXvpX5z64i8Lgn4HhdrsBMH2o",
  "key44": "5zFbxbbumYhnRM7X554tVdxhcxbeVjmPzufoUgBBNdpKD8vtFYYdeQJYqrVngaAjQyWw3aR6kazKxVWyJXT1Z8yX",
  "key45": "2we2TRP4fMJ5n4LgMwt1uSKc6kHJs29wT8AeYNTmQ2uBiWCRkzXzyeTie7jqAkF23ZSsEqm8FRXBMKi1PWFEADmk",
  "key46": "3QBemUmsevLZkSdULDP3CxYQo6hJreKdLahRSrgpZyooYEAeny6XBo8fTTso3B866UD8SpoJ372MkNLwfxBAe5sw",
  "key47": "2PR1wMmixqvX2A6hCmZXNPp9r3tJndwRsf6RMadjFG1TweMMpnExRxQd4p1186fxvU8BuzA7WZuMMqhTtnSCK687",
  "key48": "3L2HvG7UUGS8qfRrGRisaHj389EA9eoaMinY7xAGF1hVw2cKm2PpjkPVx7Jsa9wedYBMNKHVc2psw2jjn57btksH"
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
