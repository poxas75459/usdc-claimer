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
    "D9wiVpfG5p65aUXE7aeNLkpQXyXNAGneEVujT51UwdjAeCLvcgH9Lgsadbw8xyJVPNasftt7FR9wbSo27XDjXka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1YDMzKJvE8QwxkkpvAHQXwEDCj56sspaebuqmFbCScS1SvdNbqvUaBpXwLAGxes7QErY3gh3JiCTnyQnPUCHPJ",
  "key1": "7iWitHSR91aLVEtcSD4wkX6vHjp1nFx5G78vu8kXgQzkesnG7ZJWVm23dFbm7G5Lx6FE6vPr6LhpRgjKonvURGg",
  "key2": "34iY5QMAGBehV2TrH6sSCKwPnrWC6HCpKDosn45Subw8BsEsBouaFvS6sDNoS1vS6v1moLQTp1u9ELZW6cMEBrcM",
  "key3": "4rUStDcEKuWbVUZbfGvQtsAhCWg6HNkmn4r4AT4x6WKWyXQwSyxQxgadSMWh7JPF7ZqtkCaGwt9HVYoKYatbMcyC",
  "key4": "2ZsSLBDNk7Crscm9u332yDqogauUYJAZu2QL8WRtzTyXc32bNAhYPAT8oYUyL4tsykhwM4hTdpjKycqH917pzxu8",
  "key5": "5asBi4mUadhhy5HQrwFgbWFdUAEP6G9GdCtSJCaC36BrWbC5hikFa8v9g5tEvZEXUPqXQtjwje5ANknFeDMNHRRH",
  "key6": "4kQuCQTXXE7xxuUG2Q8GCkRJbzA1qBfziD5vjf8ZDiwVUN6PGcba7B8gFzhLDS7auQiyReaWV32miKUrEioh8SKj",
  "key7": "gBAE2PdgJaecE3hnQNSpxFBHY9q9hg7JC7F4eu7C1tTXnEYU6uWPDpz2F6WDEEqQn3qNvTDuAPzJP9sJjqt2xDi",
  "key8": "4ZcR3fJYx5J5eEiqcarshVQypi2D5NPFfCsYnsHPAZju9e7K3h3J32ckVzAadcYDEVw3c7tS171zHpkh1w9s7exE",
  "key9": "4hTymRXSzzhGJ2SUvgotRdufoqkMxWazDPi5zruWqbMeYQ1sBG7UNpjQMGSVyDXYjbkE1YWsiZLYsxHNtSQhep8i",
  "key10": "3AWHdAT4KKBwDPreXzVNJbkkdGwCGwCfuPWs5isF3XJubR1kuJ4ChPqPRJpi1uKsBnYvuoSCv5mw1bS9U8LMYhcx",
  "key11": "4cGG1Hj61KKKm9dNv1C5ddkoQoGQ38LfQPXcDSic7GMBhgzWKq4eWSNs5ikyt3fPajdL3kfbbysFK5yjQFnWMC65",
  "key12": "5brauExR74fnp5Ng59gKZk7PHey3zHpa1xatYzUeRPDxX6RNc5Q8q1MgTyGukZ1xJan3sDPD4yqQgRWGQMEZ8tSP",
  "key13": "2vbFJ9yirsX6UJPXxhsu5GLbwA5nXUixivDPHEsXFbjKBg4QGqF1k6E3F3P77Sfc3NyjdFdebkEq3BAXvLorFRWT",
  "key14": "2LCbVi1ZLkd4QSaGhTy82pfMyqQkFKidpV2NhPwihidu7MKo1AQ1ScX4Wi1xCnsLY5pBjC6T5TX52j4sWXTAAUdY",
  "key15": "32BHRM8NwbmGZ8aQXDk4aMFRRkXhqRKhSjdtRwnVscYgbnN88wfH33ox5XrapjrsoahxFn5yNrUpqXnP1vs8x8q6",
  "key16": "5JqiS8aVuQKamWPGwTdYG5gcUGV91uWBmyo7TBbC4FMV8B9vxBqKQKBjWcoxEFjFzv5k3yJYXWxMr6JjZFv2cj6P",
  "key17": "XSPg4SKShBpUqzV8pjBebPVHjzUQJ4fwo8JnibqwdgccXXvU8bYbc4ZTT9RskCnfSY35ugJSMoGWUJDKG66Gqzm",
  "key18": "59o4XQHfzTKonCjSkzMpck4Jgq5cMk4FYeSX7sSzFmPr58QPmRQL92t1mLy7qqEYtG9NEnrgfmFWdCUbWXdBb4Sq",
  "key19": "3CeYuEYLojLBhop3CeagQCGRL4Y5qT3emgRAxeQfsV8nvyU683tjeyr7FVqixQxam1dc7Boq9CMweYwpNHC5pQsy",
  "key20": "4tWBWvpXcoZ9yk6St69xdU6yia7Ds628rST3ouTxVaKhAGe4nZd8pT4ur79YLDbJ1CcMdPjM4pXCGGq1X7VrbVxU",
  "key21": "4mZKpB7TczRtm7Qp8kra6tYCKNaxCn2WPRPraNbbXz5aq3qQF27LeQ4CkEPFbRwnnqh7Wm1TKkUQAHGtdzW57A5A",
  "key22": "2UJddiVuqK5u1ZJ2XCJP5Jne2Lpx8UWdkectMfCWHmsuDb4ETj3vCyZXaFZSAvLtp4K7EXgWjQvT8mRuHrZVKT5B",
  "key23": "fKc7KYdZEoBmLAt5KBxifNPA2aSP64Zd8R7rmZeCyzQ8ujAc2BMzuuv8FhMRA1wYDovuK5P9TntHsGNsMeRSrto",
  "key24": "22opm3BjL24sKhpVNapdk67DSbP1hwvjFVoi11EJrnzk1N5dAV8gxtFZHfKs6pNkgR8wXG2ooFBiPaVHqfLBZeD9",
  "key25": "5n8MYczTwHbUGDrUDYP43bezmoPs4DS7ixxFp3tnrKwtnAr1rDoYuv9hD83s9v8jowyd5EDAC4AstMhSu2L5eH88",
  "key26": "32VFAypDSJNWZTaUSjT9iN6rUzcF91FyVexwmy1nQs7ZhDRva7LBQxtVBBi7NDpB2X4oKtygjaWEg8XFhSqHbqV7",
  "key27": "xTQhigLbEuxPYuqcgst16HvfDQpnRSnAMLSeabfK7TEMdCjMbDTp9RE6QjSmyXnCg49WpQPCpoDgbGcmJq1LtPD",
  "key28": "5rqh6H7yB6Pr6QnVxSVguc6jWq591d9fkSUxzzPNi1ACruhYntmwg5t6SAkPWHhLJH9B9vBx9yNfE1q4amnJsiKP",
  "key29": "BnZ4XhP1vwHedLe5mygnTRa556bR7oR1QkXT8Ebq62jfSqwHVLzqQ6emdBdqfoRAFe2Jd3ncyUjwtHPhPKhCzGk",
  "key30": "54BcYPN4FEub3GSN15CoXeR2M2E2XvzykgggoM8f9PXqDzw3c5cTMrTiTcASFcqMoAazJXja95niK9WoRMgAro63",
  "key31": "48WRgQM8hPwDXStXSJEknMEbnA5ob3dEqc1FG4sD8Qrf1pVwGsAb3Jj8KZLCtCAkPdBUF93NjfB3fSrDpDMoAUxQ",
  "key32": "5mkHwiBnCfRrR6QJjw4KskHLa6E5RDUXX6w8yDJSa2ContcA9tivbWbnpJotbtnn2ku9Gmm4QjYmHCQ8yQrRjMZx",
  "key33": "2XnrPnUEXaifFM1SZBsPt2naiQwV9RfSg8hVPr4C4FJGoQFu56A1fVqem6jEfJt77oTRwXrs96K3K4km8odWGZi2",
  "key34": "4Us6Agbimt932LSssTTRu5poB96UccycWsFeim3CrXCXdZT2cVw2HmhWyRE5Cbn1GDGbtBCPjZvWaYNoPVj24dxh",
  "key35": "34gu2xP1CZeRmFkKTksEHd64B1KUcLaK55pZ8NHKueLorsypDeMsePFzRWKGdhZTJwXbV3RUKs5xMGPUD42qX1aj",
  "key36": "4PzEvt1rD3U5yVKPU5iaTgAEcHxNMcZ1fNtZGG3BeiVXpno5fdL67xAgTBDQvhUWf5xxrcQT9anzmM9EiTXELTBi",
  "key37": "4ZFDjNVtCfrTnpgQiqGzhRn49i6dsqKmBdoAkGYuA9dNVT2REgYmxubKg2feziX5F3aRyNC1ttiUxqpk17UDSdsN",
  "key38": "2Q8fQYz848KXBceGjpsZhsjdZLViojy5JqSdcPr6LFUV9wBY2hRystunVaNnLYsdGdv1okqJ1JzxSsdPrcpYvE3T",
  "key39": "K6dNfdRbvGcUsUDRPHJYnWfk1ULBgQ86qBXWMmMUKZmr1NFJKd1f2zwFVh4M2F4tpkEX3F3GvV7y8Sf57LkbEdk",
  "key40": "5dcLLFgs62Dn15JwBYCuwNeqDfd5edq6jLM9fsUnJASGTX5nYphU3iYEtG9pRKedFrrCaAk3HAxfhBRmTsE1Z1RX",
  "key41": "47aLTbxLZjtvWtn5hmNMumY7wkEEq48F5dT6xfpTydec3i2XyFVqctpmdzeLjf9h74woeehdmZfERsepQ6kD5RXF",
  "key42": "3vtYZdNwK98PyHe4PCFi2jsa3GiJdL8jZ8t4eomFEbcZVjFvVSwHh8P3Pj8q6PPRxGGDaLEFjYhn9dQL3if9CB1t"
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
