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
    "5dfPstkh6axHGTBVKWPMWmSkuDFUxgETntJwSRTcCrk5ZqqXfKbKXojQWGuHFKy7gnTBYxfTYTotZgokYwuyC1L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhrRaos4LMJUAX3VYEBwzHhk6ivpAxKdV8cGM5SAhA8jWnyVvKFrGCAgNkhHYFz4n2KgG4vp8dFnQbSu42dsEjA",
  "key1": "3GqP4rFqD4pZWp5nXHGBoFqQzyPMAjQGf4Ndhgs2oSyre8iTJwL4qGH3yeTZKETPoVFFdHgsZi1ohqvmzYV1Zzi9",
  "key2": "piekcc3zpybi9AvobZgjjaX61QUC5S1mK125zKV2t7GtHnVrofeir74AVvGwmtuR6cMbx68pJpX7yJh1ZGrtrsu",
  "key3": "32dCNGNLiUFc2Zh9aGWBg3LSj2HexMzaNybykLpcgaSU1SRVdwf1489v5FzgK3dhCePrYC1YghopWNu5XttUJKDD",
  "key4": "XHngCvjDtBFbF2Yo7K13pYPMASbHspSEaSiEiPXibcMAhpka8o8RHJE5M1DGio2msFzQQcjkcsmSUbUKpUnwE7U",
  "key5": "5BemyCoWiJtTPkS1SjnUokczPrn6xuYhpzWd24fvMMV4k63LJkogj5JGgoimKnx26yTF2GoSDrSweESJ3tEpmGHE",
  "key6": "2aiWUodp8rdZPLgN5FZx4GsaqcSw3yxZibvZah4Ro9wLMy6jTt8iLqu9mWGh92vFS7HaCsZyDvTPDbnQrj8D6qhe",
  "key7": "3eRK6mvYD3tDFViLdNb4QNkstoee9Z1nohCn3vh16rXFPnGUjYWtiidM6hDcYSGFLaSsU9NyH8159jbTuD7t8jAP",
  "key8": "585ZvxDVewWarLufpFyUqMKBuTWVHC8wvRtouS8ALUTibCnGZxtwYmFAdKTW3Tz1gZcXtEcQ7oZ6SLD9NnrZcCcj",
  "key9": "cd2u8CngQdoXqavCtoSNEm5B4xA44Xua5QHHyZiBbDetr3cTvqAPoXvNwYyyeDzoCaFvbMgHtenE5TABkSddVc3",
  "key10": "3gfjFxp7nuV4zSdvnQ9Uuxnx43g7DK35houRUHLQ4HpKwy2XXEvqktoJj1brWmgw8v7cuzz6BvSd2yhWwNrXyFmw",
  "key11": "61do6VnwU7D5wNPcWBwQvsuxQthFi5iXgAVMUpAx2iXrrBjVUBxjfnr9LVdykBFScqKkBdSy2TH8R7BJqUBDQbRU",
  "key12": "4sJgnCESFfyNK4a4B4WBejuGTCdZpdYK7h7VVYUTA19C2hvxbNSaEw6GUJqVA4a9cjvo61ZvcXYT2qmwYDL5RgSV",
  "key13": "5vuv1SbsSkh4kwhKtNzoRHKMTuEtDULHWsPtdPCWfzNtaHWgNqmwrai97FUWBGaqFu43ysuQroH1FQnQ6ipSh7pP",
  "key14": "3oncdY99KnGvnCoF9bNTSFSPKatbtZG6ppbH27wCfePYYzLpaLExPaD5nCV8rzgNTBGmc2KLzxqmCEv7kJ4MreSU",
  "key15": "4xfMPzNhfVrdJpZEe4nKzbbheE3opwm5nn7n7rDm2zWD8rHDk8Wd2yoLYyuxsMG6HyrCh4AmQZDiyvTWvgZRKxxg",
  "key16": "3EswY2iJoNLP8tAWPqLkrxKDeUEMiU854phBai51LyGKRwH9suhQo4tgkhuCnF3cHAAQhw1G7ricSC8CsiFzzeSi",
  "key17": "2DqJDPh8WR7bKZ8FRg9gZUvtxxdMBquSbKUGJaFcrADobtR5ch77o7Yr3785Zyezh3YVyGD2QW9daxHE9KwUmDL8",
  "key18": "3PWdJqChNE3vAYSmeGABQZYyiSUE2NSL6iWYT6n4kydki1qGeKeKaqxU7mGHE4WMKqRudi2cLsTgUfk4CTKNtCWX",
  "key19": "2Tu8yJMj4dwGoGedLCCvq5mC3KYUVkER2XM7My5PCuNQCRm1nUKRkYKZU2kQEARhDxjWUaYVwCLcW1YiLchQnwp1",
  "key20": "Pjd78PqmcEUGEgAdXHd1YJ19Pqxoo15xnFXVCr3R14EZAkYvRGEeQbk3fCHcrkvB9h2HUST83AWyEPwHysr3GG4",
  "key21": "3dWCvLmZmsVZgVWpoqVshyBg6A9xdfm18fUBycUsm17HAmBCbRoUMaDU9Wevivj9kwM2DFNVkGaqmaTTipLuyT8F",
  "key22": "3B6SU1fT6QmBw2YhiUVHmjh6QZsEfQ6zYiSgGeVjd7mSMJNPqfDAj6ZUCr9L5ZKCNdAb5opZX7aHBx4VBfryR4u6",
  "key23": "4e2UtcTAEJtyMHD4fbADHAivGeNwjWUdtdH6bDV4Vv9j1gybuZbV3ziTb5Yexx3Y96YnFnydTVBH5UCb3wCzxRnh",
  "key24": "4wuGo93XjyhZoxp2Xj4KpmgvhvQDhB7UVdW6qi3JzsCqbqqW3ZqtRATJM25sn9Zqfym68xhvEGSxN5u3eN2Cru7e",
  "key25": "5bXcLN7fqkGGh3hvry5MXA1jCqQ6mDD5VsrN1x7LEtY4Ma3mgnAKXKvU72o78bsAebHj4g7F1gBmbiePdcBsTjSb",
  "key26": "p1ujY1qKPd4XDJLBRZtKLkfmcf8fFxhckzijDcXWiDdEoJjZEcFS1z8q35xNyDs2P6DSVaYwnFfav4hReuZnCLQ",
  "key27": "5bGxSDuS53nuxzFtBif57EGy6YsSUGF2i3uJ68QNKuo7rCQKCFxyVDJLdbhDrzHu81JsLhKpNxZnBbHUs1vXDeos",
  "key28": "5n5sWdRnaJ8zNCLyefn4emGpV55zxLRbg4z3co1vguTtuTkPnF7aqEqAoSNJXRNCjxqiUiek8opa1VNRAfsTsNBm",
  "key29": "3HijDFnbAJx6FKAXUARsjSaLJM3hEtWLzkdLyVsNCe6d2vN1MbXakDXvQcwnECaZ6SWLQSsb2pYsjnRP2gWa36Vk",
  "key30": "2qjHRUUBFiiEk3hDLx4yv51YLu55UhVaWw25jhjMQ2osQiCfwvtDcSLF1sTUe2gXJNMa3JzZWm2mKeeaQzzNqT5X",
  "key31": "3d8jFB5Z3QUfDXz6hosb6H17nSqfeknphu6cagniWvYY7btSbk5jsw8UVkpMCcunEqMiVPxhxrkE6MMzyb1kaEuM",
  "key32": "4zWHqujeSJyGDUZPPHksRbeskvU5W92rRmSVRzt8yN8nmQpDhauT6G4TuFEWC8P5isdpbzCN5WeMUMszzqxjsEn4",
  "key33": "5XJpaJsgjUDkHtbzsPmyJXBuU7nM3uCPuPPMN34zBLE6EJpN6Nrt4cnPJsp9BKYz4D9JobS7Ysg5RArontYsvxvj",
  "key34": "3TQdC2yPDPFj59o1BwRm7zXnfGJpJuEnrctGVcZKQFXCQzANgDKNwvHMHKuMCym1MRfqHuzbrsB1PvceQwMKohXc",
  "key35": "64ubVMCSQ1nTbkAqd6GeYTxni8KRPyCZSfC3Fu7iY2aVSaZgsf8HUcG7esvq1Y66p4AXCZfNPEGytnqwWowkzRD3",
  "key36": "3gq151GdW1P13qjsCLZVS6xZ2CWt1ghAWkAeFABgcXrtd5sfECo5xCs6C7SYmKRcELaiPzwHpRdUZ55zccz4sHPh",
  "key37": "4ky3DwNrsQtZ5wNDfoM3NpfPQWGuenVGEa8GSePcqc2fGQo62C367FC12dtpjAdJJPZkxBXKUUdTfFEjTH1GFBSQ",
  "key38": "MqoK3HJRVoirKez5nkRq1Bqwns75rZsPEF4YxnHi13UEgoz92pRx9LayCPUziHsUFGmKMHgFWtHtQsDs7jLkVQu",
  "key39": "3pvSuebbQoRo16PhBtLS6NeWwCXWMBo75KxmMLxbay4Bf1A9kk36XQaTSMxjKBv8mZYSkXFGmr8YgxjdoBAfb4v1",
  "key40": "4z2czVei7H1RSFvnAyLKh7YbXapx7vh8Hf87FdexD2kNHmJAgApH6XVSRBu1a85vNrAGJbob1JdHE3w6tUzKzoeP",
  "key41": "4MvVh9Bk2zmFoSKFjBgNfvu9qh4wXiixDMbSESz2ZE1eeuzz9Apcx49u1CPBTnUvYv4RkgKbZ21LnVboPhff3swr",
  "key42": "4br84gZvoi43auC2iCrqdL6rs9uVmSjFFvDGrAB48bEzUe4UWR8MeDHksB9nuWVPm5PD8n3gVBZJKNMewx8GhKoX",
  "key43": "2f1GMDmPwRetLCKCTRwbxssgc6itJPqxivWtv7BaoukYWfvoMqmE2wZDydEsh4ctPP6nZdwKHxJ4r48jdH6YCVMX",
  "key44": "2Ja5DnWuEExzbvsj32oQnKJhZV285P8F8yP26GEaZAEEngAC2G2dPRRWbaYQnSc2F8Etk4dKfsnjJ5QsWFr2pMpY",
  "key45": "4JofWbQ6WmsJwkjqquskBMYicvHgezwxHHDycXWoboiTCVmCRGmdWpqAHjah5Rr5L7VNQPsuGM9eoGQuzc8tNH8p",
  "key46": "1av3ajnXHR9mAyMNZ2wQaMJenPZbjHxKrSRBwvKNUyBwX7Z6NC5kXhFXXCRZQH3p7LT1SjxbUhE97CyVWP7FyxE",
  "key47": "4SDHCMW6JLz9qt7fmsamYvhQGi9LqoZbbfvBDZZrwPtsYsv33DZYf7BZ4tDVfYVmRviSpfAWVjYFtrNkqdpZWdKb",
  "key48": "63xsEbhfJWcC8dcBiRJehJ5NANwRJNpAT4NEW3naFU715Ae22fitSQT7uMYEBw6R1dULTQycGy1iswSZxt1Zxsx7",
  "key49": "cDrDodssJ7Q6Cdj8TAcF4S4j9D84FgBsTGxwfNdzYD6zN9cNpGdo1hUfychnQoq3yLyLkrKJxostqUCL9WbLaaf"
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
