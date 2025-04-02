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
    "h4YYuQdMM74Anisby6KRZM9BEj4cC8fyZL423gybSaUF1fPi6YqyZNLN8aCyi6SJGPKEJxTtjimXwJ18DEFra3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbwBDKQGL7PdQxpfM7ep97UntZbYPq1VgPEtZuS4CHLJVUsCq9VbAeBEDoY6vkwrz3jGuLjFTemX1YxTfMbpXq3",
  "key1": "4mP1jkt6q6MbT6D3pdtdBgzhqnkoavaVN1RH1qVVgr42YaCVTdFSv3mn7KvM3xQpgPpMxcHu65J7HMJxobufA45m",
  "key2": "2scaENcuMgGqwyjckf9TV4vkR8hSZ8sJv6DZtm2tP1jSvA2Rr2GaJfCKZmkGY37M21btPUKPHrL2e1b4fHyruqYD",
  "key3": "5U7963PtztwtEuSBmFi3fpBLM5Vfy22N9FV9HdwJ5Y7PpoNm4TtNVa7ZryqfNU1AjS38cPbrhTf7kirGpmV3H28C",
  "key4": "2keJ5JEVZZjj1S32gyqQaGQptQZtLz7A9vWe766QZZC26Tp5LYnR98Y9NRCwyBSzLKMxxWdJJWwQ1Ceh5RFN6XWx",
  "key5": "42h1Wkd6BeU61MZeSA1V6Y1B8fMt567hWmmB4bYudDvP4M3ybhNRHLpq538nvsWcbkuSXkB35tjbyRrH5JqtpP2t",
  "key6": "KjyMWQJNQqkqssn8FbiBG16N39xokzNpy8C9gjYfjacHCVdFopv4jWyUWatFbnHHF9M7trcGrNWYXaf4c5BsKhp",
  "key7": "yJbFj598jn6mKN8NpS9ksaHjhsV6yQ8TGMZNHNUSMu4D9rpkEP1ocUEsufnNa3iyifrD1FT5EMRXnqdDcm8bu4Y",
  "key8": "5zQwEWY6RkwmoFKxEpApkQL897duzvKYpEV3gMpbqXmkpLt3dirpzYex2DBVwJcyQmJeniS9rCxcoyMcyq6uxJqG",
  "key9": "5XiAPbV8qHQpb5Xg8FdU1Fz4VaLVVJV51xLeMz9ZN1imPzE8fASQ42PSowUF9uC1YybrNTJZ2fKj1HuvJBQZapPz",
  "key10": "2v65NSFS3HTnhBGxqQ4r2kWBQeD7893bVhkgyxHw4f75TTHywsioFpt1zBj17o6tDgo8PrevJj9HBaArhqmg5Z27",
  "key11": "3oNT9gx1DWzLktnxqpjqcJXhC6W25ebCbu1yJ8v1v4QLHR8ob1PyxQdZRJ3x5ro68zAqs41YFVYScygPTEnrLZJz",
  "key12": "2WjMKCodjpVrbpdPrej7GQX5cBqDESZwnyzVfbTTjcjDR8NEgjwLdMvn4qUMqFiZG1FCpgXxB1C6xoo9XP6BDgMB",
  "key13": "2DeHyNqPr9mHaqwddYr8VjMdgavSSDmaqUDVSo3LswNz7WeJGK5nePqSxEhyTMCaVKJrqFYXeWJ45arEYshC7Ftz",
  "key14": "5WeNcAa7iE1y2swEyQQdtHh8SxDguqUkggQodJQHCc7w138yaYWxk5uK8H57mXqp2WMAXWd22cMAf4uj5ZGrSoRn",
  "key15": "4fdaDAPXnA5AqnWCBj3QrgE555wpEq4gvZxbneWjAjyCCRiUni59TsYP6y6mg1YZLLxVQFTxzXDiLSriK6wnz2kx",
  "key16": "3AF8XCmmGTv398v6YS7xondSzRGyhPmFkcUZTT8JUTFQNCaRzuSVj4CX1rHccyzzt6oEZXiYyxHoeFWMZitV2sa5",
  "key17": "36Vtvose86Am5ma7KFiJF5EZCzy3J8iQAMUuyUcJFE8Y9Nm9xhLLR6t1hdsVkbPFR8JuoBqQFyCVAC5Si6wnMesS",
  "key18": "4NBte6XLv8zsmMVgRNbyvedos81TQ2HWB93JyXvuKLDWHvdkEVtjUkopxi5mDauiW7Lf5QonzTbFa9AHWZwo9xuP",
  "key19": "5JM8zjLVHg4oq5bCWHMhVRJtuyiQuQJzzhpmszxUnqNjsufTFXLSggbYYpshmkfDtufpuqgFLMjAZ2vdPEKg6Vqn",
  "key20": "2DLyEByTuAVDN6LrARdJ6kxxnrZjvPDHuuRuSp8x6NhsfFb3FBipYbqDVaRqA1etTgami4N9x6UqurznuxSNZjwy",
  "key21": "naM2wyAJAQF8sA2TpFKxkqsW6wpH7d1cvNDbyNJHiPH5w6oGSL1M6V866F7uqbQBE5BwbKiZ14VdreajYcRzKb6",
  "key22": "2waC1iGr2GtehaAL28PwMEaL5A5oaqgfmExCP8d1kfwsJWwr7TJ6EEBgN9E1bs36qg45wq44spHRQpSokydx4Uph",
  "key23": "NnVokutPAZtnZcH3Gobvq3vHkN8SDcu5Yv69p1tedY9Da1T9xFCRFZqXDfAHfSnb2mkFfyeXTYwh5pnpdLmBHKP",
  "key24": "2aDVMi1NpUktCY1V9zB5Fif4cQP64DnTjyowjYa2DWm4kvFpX7GNsYbTvAtu7XmitL4Hj9Us4XayHNfCKGBszePu",
  "key25": "2xWePaiXuxNbbWvkNKbP9Z2ocb52JvTgpVKKicoT8CZDeFyyzjCEAmRVaEuW4MSVkVDbfFqk6GffjrXZJPjn3FaK",
  "key26": "X9VUtuTwHxYnzrMBpigzhRMXUMnBFXYnooJn7HiMJ6Uv5vbFa1HpbPAK9ZxDaQqPC6eQBM5aVkMc8DUhoe2W1ty",
  "key27": "42MXXMHB4ZB1KsjWKowwN4fL2zKckaDR9JhCHofJ6CE4araMMXg9YATEzcVeiV4a5M2JY54pv7Hs2c9h5G9d9go1",
  "key28": "b7k5bNXcMUwj9TaDHdQAuJh5ZifFMoTVaMDHvaNVFsKG3eCySXaXPKuFAvc3tAL56yuAzSzgCZwZXJgK3Z4rBmz",
  "key29": "4L2PuEPbnYzeZtFJo75WWiosCmg37MHpSH2nVPnUzqtqtz9aXmaTWLoGPG54d4FqiuYiGWwLe4sk5Prh3JMK9pyN"
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
