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
    "61JM9vgHxgkZvWnCPzwUcFpicgLtscbfYEh5LNbXRCeTNSvVtTJpY8LQszVGmZjzvVLKf9TbktW4UJFS5NCyEdjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KAD4u9SJdvxm3ZMJFFrHhR57haTVWNsWBpVavYDmLsy1MFodaMmGL757DPGgJbw7XX1BcQ1UuAZeEJwXcDDaUTF",
  "key1": "5zksFi6fwb2Dtvh5Ym4VupmsPbCc9qucA2hC5uyW4tf4vukkVbU3uJkZG9NZo9o2Es1VMGha6Wvyp5DNMvhtYBtE",
  "key2": "2M2DADTdjd3RGaiabUPS17529U1vEpwB9qYMfpwRhKkGHEEHJ5otNK4g8csPk5DLek7g3VyqHrsEHdvhm5vmBNW3",
  "key3": "EfjPpQf7QVGNc9TvEjPQnx3QeGzisnPipXywbjs6H6jfRbBdzCUBFVeSkxLPEad65TzZePBkKaKwj7dhkB2vxgg",
  "key4": "38sPfUk2wWPXU4NYJC7YQntxoCsViqTFmY9AucverSyfjAiXduJnLgWpWoiRU3DsLYq5Mkz9ucCeH9UHPJrLA9Lu",
  "key5": "57SjbCCRrh36swD8JV8cbA1kATTusrdN8bkm6N9vooWZD8hMTtMsXXsCTESXNW1PgGXa7eMDAgyF7yEPsm7Ttau2",
  "key6": "CDdUTP7yERXska5wyiuFREHtfQHWXmA419KhyNBZt71NyazLE9pkcFnFXi3hkRqXi9YB7Q5YddpRSnmPBtyjnzK",
  "key7": "pXkAewWR2yL7nXKdGdCVoX2QcoDpkCE96h4UyAXAzUZxaeSL2Mkmt4k6THRKRpAGqfCeH1Xn5pBHQLZV4bpHRU6",
  "key8": "44d4dCryV6koBP35o6NUB7a37hopEG4VJEzn6SyzWnuPDfDpCtwvVHJUxTZWCGdYg68cA9xFTZX3JxdRRSN6FpFR",
  "key9": "4dw5tPMNzGvfZPgcjYrq73q4S9G7sCm7tEJkqDQmQEd5kR2qFBfXtnnHd7jmQjn6QxeYb78U5DEBwxmaNSQ6Bqh4",
  "key10": "4dDJsnrQLSY9i4Dbgm4vZf9pgx7RDYd3PqvtWYBgKw8D1B18bCAuA9Rp8RxWVZt5sE8ajMR4dtCCUPc1LBgyUEu9",
  "key11": "4vHqG9yLnYRJC7bhyQEkSTrPrzgcEf9t25bm9hUH6gvj1MDYYnPverLDifpULYPQ9Le47yhrX7kFww1zcUtABE63",
  "key12": "63kTw5W99cSopwDY2uB9tqiohtzCMs3eawmUJw1aPbTd2Kq5dKpLXBJwXBZHcYfMw1RGpqrYTb9F3AABAk48U85c",
  "key13": "5mV1yV99hCWVu4oC4kvtDrCFTnoqofYq5TSfFPfAmUr75VJVK2QofnaFZdKeiPE5pvU9cYA65wMFfbyMwpzdBXJf",
  "key14": "4LHij9BsDCzNLKB9wKsjF7Yy7dFPKU5ssxv2XLzPcDcXGb1j5PokgJfVds3Q7WXdSqpxHRg88a5NV6rWNWqXyXRs",
  "key15": "4mf8ARmidLCZNTtmhPjhkYAkbrKzgndMrdD9jP5tTj2aZ5tsyuZc9bLDpj7QVK5CUSrQWaZSSGeK8R1G6Xg3BaJa",
  "key16": "3VaDdVgKg39mdXDS77czF9GhHzrJtLviiTDfTpCGWHkwarJJLH4knAHuTDvDjxqohm2Jemqeg6m6Txy9xyG2jbNu",
  "key17": "3ZATudi5vkRjt77HPsvqiMLnkq7zxudm8jGMnuCfz5NRwydTsZ3ZXPdiPNXcGD19wStXXQbn88sssFgtBDPt6xW8",
  "key18": "5VoiMMEreVE6NfhSZbFDxopHyA9AtUrhgjNDnRo3XZGPxYLA1FVnAPjJ28miqi16FHrYarWvX6XseRBQzseNorDV",
  "key19": "2bEvDHpgEHFrhkbRzFWkH2rpW8NwMHwn12JqMrxsMorg8f8U7NcRjyAVEJJYMCaToqm7pMf6uDCaNGSKGEr3jSrS",
  "key20": "5QsS2akYF6mAh7kPuoroVEsPXK26NGWtVzjYesVqHtedf9Psq2jhG6yCxZG3JegqWwHUj2jVr2WhU9MKtJatpji3",
  "key21": "2fCfJTS3fZTKFjVtG7uoNRzdRXXSbEnwAPGRaLzQ1vvCq9Vg6Lp7Kv1JHue293HLacbTKFBtV53MDvXCE9y46Yjp",
  "key22": "57hwYetTZuKX4vrmCnVofhF5sPR3zSTrY7xCjDxZ5fU2hEg27b5eV26rcKLDhqY3JWX85awd58ZmHjWataev8ew2",
  "key23": "3LJHRbNPyXcPk7AHbTVBxi6C5btoEqV62wMfABB4qgVRn6sTf7VdeSnwiqVyNg6uSPWrvuJyyo1ypQ77fqECh73M",
  "key24": "2Q7fKr9fFu93q59qDAvjq5n5kdLxtdzNrKzLWJDGrSasBL9W6RSg7qGPYGiixtpTz3Wu2dMNvDtnHgbuToYzdUGm",
  "key25": "5UevBbYKsNggkqsPYWeWFu9ZWXSWf65do2uuQFyhWBNArX9b4X84YkUgXAaHAytfi8Zmhg5DWvgJxKnoLprnrJ1G",
  "key26": "63zFAeudeLkZBwjYokWhUNQg9Kbe7VVNrHRrXyPbX1cUZPN3JBsdZKCQjVdKAU2SS1i5d1HVMqkohPxgjTg7kqrB",
  "key27": "489nHY22c9jACZhDAGU1uuZFB4p5GV1jTJr5dcfaF2V2DkNvN558wDnvf3i2RG3GxqwMcTFuKcRa5qzSntFLcuZ4"
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
